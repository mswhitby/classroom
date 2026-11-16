var gg=Object.defineProperty;var yg=(l,u,d)=>u in l?gg(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d;var on=(l,u,d)=>yg(l,typeof u!="symbol"?u+"":u,d);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))m(y);new MutationObserver(y=>{for(const v of y)if(v.type==="childList")for(const S of v.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&m(S)}).observe(document,{childList:!0,subtree:!0});function d(y){const v={};return y.integrity&&(v.integrity=y.integrity),y.referrerPolicy&&(v.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?v.credentials="include":y.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function m(y){if(y.ep)return;y.ep=!0;const v=d(y);fetch(y.href,v)}})();function Zf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var jp={exports:{}},Gu={},Np={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function vg(){if(Bh)return Pt;Bh=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),S=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),H=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=H&&D[H]||D["@@iterator"],typeof D=="function"?D:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,V={};function X(D,Z,Ce){this.props=D,this.context=Z,this.refs=V,this.updater=Ce||G}X.prototype.isReactComponent={},X.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},X.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function M(){}M.prototype=X.prototype;function F(D,Z,Ce){this.props=D,this.context=Z,this.refs=V,this.updater=Ce||G}var U=F.prototype=new M;U.constructor=F,O(U,X.prototype),U.isPureReactComponent=!0;var W=Array.isArray,J=Object.prototype.hasOwnProperty,ce={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function be(D,Z,Ce){var ze,qe={},Oe=null,Se=null;if(Z!=null)for(ze in Z.ref!==void 0&&(Se=Z.ref),Z.key!==void 0&&(Oe=""+Z.key),Z)J.call(Z,ze)&&!oe.hasOwnProperty(ze)&&(qe[ze]=Z[ze]);var Be=arguments.length-2;if(Be===1)qe.children=Ce;else if(1<Be){for(var $e=Array(Be),et=0;et<Be;et++)$e[et]=arguments[et+2];qe.children=$e}if(D&&D.defaultProps)for(ze in Be=D.defaultProps,Be)qe[ze]===void 0&&(qe[ze]=Be[ze]);return{$$typeof:l,type:D,key:Oe,ref:Se,props:qe,_owner:ce.current}}function Re(D,Z){return{$$typeof:l,type:D.type,key:Z,ref:D.ref,props:D.props,_owner:D._owner}}function ve(D){return typeof D=="object"&&D!==null&&D.$$typeof===l}function se(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ce){return Z[Ce]})}var Ie=/\/+/g;function le(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?se(""+D.key):Z.toString(36)}function fe(D,Z,Ce,ze,qe){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var Se=!1;if(D===null)Se=!0;else switch(Oe){case"string":case"number":Se=!0;break;case"object":switch(D.$$typeof){case l:case u:Se=!0}}if(Se)return Se=D,qe=qe(Se),D=ze===""?"."+le(Se,0):ze,W(qe)?(Ce="",D!=null&&(Ce=D.replace(Ie,"$&/")+"/"),fe(qe,Z,Ce,"",function(et){return et})):qe!=null&&(ve(qe)&&(qe=Re(qe,Ce+(!qe.key||Se&&Se.key===qe.key?"":(""+qe.key).replace(Ie,"$&/")+"/")+D)),Z.push(qe)),1;if(Se=0,ze=ze===""?".":ze+":",W(D))for(var Be=0;Be<D.length;Be++){Oe=D[Be];var $e=ze+le(Oe,Be);Se+=fe(Oe,Z,Ce,$e,qe)}else if($e=L(D),typeof $e=="function")for(D=$e.call(D),Be=0;!(Oe=D.next()).done;)Oe=Oe.value,$e=ze+le(Oe,Be++),Se+=fe(Oe,Z,Ce,$e,qe);else if(Oe==="object")throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return Se}function A(D,Z,Ce){if(D==null)return D;var ze=[],qe=0;return fe(D,ze,"","",function(Oe){return Z.call(Ce,Oe,qe++)}),ze}function Q(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(Ce){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ce)},function(Ce){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ce)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var B={current:null},_={transition:null},P={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:_,ReactCurrentOwner:ce};function q(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:A,forEach:function(D,Z,Ce){A(D,function(){Z.apply(this,arguments)},Ce)},count:function(D){var Z=0;return A(D,function(){Z++}),Z},toArray:function(D){return A(D,function(Z){return Z})||[]},only:function(D){if(!ve(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Pt.Component=X,Pt.Fragment=d,Pt.Profiler=y,Pt.PureComponent=F,Pt.StrictMode=m,Pt.Suspense=k,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,Pt.act=q,Pt.cloneElement=function(D,Z,Ce){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ze=O({},D.props),qe=D.key,Oe=D.ref,Se=D._owner;if(Z!=null){if(Z.ref!==void 0&&(Oe=Z.ref,Se=ce.current),Z.key!==void 0&&(qe=""+Z.key),D.type&&D.type.defaultProps)var Be=D.type.defaultProps;for($e in Z)J.call(Z,$e)&&!oe.hasOwnProperty($e)&&(ze[$e]=Z[$e]===void 0&&Be!==void 0?Be[$e]:Z[$e])}var $e=arguments.length-2;if($e===1)ze.children=Ce;else if(1<$e){Be=Array($e);for(var et=0;et<$e;et++)Be[et]=arguments[et+2];ze.children=Be}return{$$typeof:l,type:D.type,key:qe,ref:Oe,props:ze,_owner:Se}},Pt.createContext=function(D){return D={$$typeof:S,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:v,_context:D},D.Consumer=D},Pt.createElement=be,Pt.createFactory=function(D){var Z=be.bind(null,D);return Z.type=D,Z},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(D){return{$$typeof:j,render:D}},Pt.isValidElement=ve,Pt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:Q}},Pt.memo=function(D,Z){return{$$typeof:T,type:D,compare:Z===void 0?null:Z}},Pt.startTransition=function(D){var Z=_.transition;_.transition={};try{D()}finally{_.transition=Z}},Pt.unstable_act=q,Pt.useCallback=function(D,Z){return B.current.useCallback(D,Z)},Pt.useContext=function(D){return B.current.useContext(D)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(D){return B.current.useDeferredValue(D)},Pt.useEffect=function(D,Z){return B.current.useEffect(D,Z)},Pt.useId=function(){return B.current.useId()},Pt.useImperativeHandle=function(D,Z,Ce){return B.current.useImperativeHandle(D,Z,Ce)},Pt.useInsertionEffect=function(D,Z){return B.current.useInsertionEffect(D,Z)},Pt.useLayoutEffect=function(D,Z){return B.current.useLayoutEffect(D,Z)},Pt.useMemo=function(D,Z){return B.current.useMemo(D,Z)},Pt.useReducer=function(D,Z,Ce){return B.current.useReducer(D,Z,Ce)},Pt.useRef=function(D){return B.current.useRef(D)},Pt.useState=function(D){return B.current.useState(D)},Pt.useSyncExternalStore=function(D,Z,Ce){return B.current.useSyncExternalStore(D,Z,Ce)},Pt.useTransition=function(){return B.current.useTransition()},Pt.version="18.3.1",Pt}var Uh;function sh(){return Uh||(Uh=1,Np.exports=vg()),Np.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function xg(){if(qh)return Gu;qh=1;var l=sh(),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function S(j,k,T){var E,H={},L=null,G=null;T!==void 0&&(L=""+T),k.key!==void 0&&(L=""+k.key),k.ref!==void 0&&(G=k.ref);for(E in k)m.call(k,E)&&!v.hasOwnProperty(E)&&(H[E]=k[E]);if(j&&j.defaultProps)for(E in k=j.defaultProps,k)H[E]===void 0&&(H[E]=k[E]);return{$$typeof:u,type:j,key:L,ref:G,props:H,_owner:y.current}}return Gu.Fragment=d,Gu.jsx=S,Gu.jsxs=S,Gu}var $h;function bg(){return $h||($h=1,jp.exports=xg()),jp.exports}var c=bg(),xe=sh();const wg=Zf(xe);var hd={},Ep={exports:{}},ti={},Lp={exports:{}},Pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function kg(){return Kh||(Kh=1,(function(l){function u(_,P){var q=_.length;_.push(P);e:for(;0<q;){var D=q-1>>>1,Z=_[D];if(0<y(Z,P))_[D]=P,_[q]=Z,q=D;else break e}}function d(_){return _.length===0?null:_[0]}function m(_){if(_.length===0)return null;var P=_[0],q=_.pop();if(q!==P){_[0]=q;e:for(var D=0,Z=_.length,Ce=Z>>>1;D<Ce;){var ze=2*(D+1)-1,qe=_[ze],Oe=ze+1,Se=_[Oe];if(0>y(qe,q))Oe<Z&&0>y(Se,qe)?(_[D]=Se,_[Oe]=q,D=Oe):(_[D]=qe,_[ze]=q,D=ze);else if(Oe<Z&&0>y(Se,q))_[D]=Se,_[Oe]=q,D=Oe;else break e}}return P}function y(_,P){var q=_.sortIndex-P.sortIndex;return q!==0?q:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;l.unstable_now=function(){return v.now()}}else{var S=Date,j=S.now();l.unstable_now=function(){return S.now()-j}}var k=[],T=[],E=1,H=null,L=3,G=!1,O=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(_){for(var P=d(T);P!==null;){if(P.callback===null)m(T);else if(P.startTime<=_)m(T),P.sortIndex=P.expirationTime,u(k,P);else break;P=d(T)}}function W(_){if(V=!1,U(_),!O)if(d(k)!==null)O=!0,Q(J);else{var P=d(T);P!==null&&B(W,P.startTime-_)}}function J(_,P){O=!1,V&&(V=!1,M(be),be=-1),G=!0;var q=L;try{for(U(P),H=d(k);H!==null&&(!(H.expirationTime>P)||_&&!se());){var D=H.callback;if(typeof D=="function"){H.callback=null,L=H.priorityLevel;var Z=D(H.expirationTime<=P);P=l.unstable_now(),typeof Z=="function"?H.callback=Z:H===d(k)&&m(k),U(P)}else m(k);H=d(k)}if(H!==null)var Ce=!0;else{var ze=d(T);ze!==null&&B(W,ze.startTime-P),Ce=!1}return Ce}finally{H=null,L=q,G=!1}}var ce=!1,oe=null,be=-1,Re=5,ve=-1;function se(){return!(l.unstable_now()-ve<Re)}function Ie(){if(oe!==null){var _=l.unstable_now();ve=_;var P=!0;try{P=oe(!0,_)}finally{P?le():(ce=!1,oe=null)}}else ce=!1}var le;if(typeof F=="function")le=function(){F(Ie)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,A=fe.port2;fe.port1.onmessage=Ie,le=function(){A.postMessage(null)}}else le=function(){X(Ie,0)};function Q(_){oe=_,ce||(ce=!0,le())}function B(_,P){be=X(function(){_(l.unstable_now())},P)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(_){_.callback=null},l.unstable_continueExecution=function(){O||G||(O=!0,Q(J))},l.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<_?Math.floor(1e3/_):5},l.unstable_getCurrentPriorityLevel=function(){return L},l.unstable_getFirstCallbackNode=function(){return d(k)},l.unstable_next=function(_){switch(L){case 1:case 2:case 3:var P=3;break;default:P=L}var q=L;L=P;try{return _()}finally{L=q}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var q=L;L=_;try{return P()}finally{L=q}},l.unstable_scheduleCallback=function(_,P,q){var D=l.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?D+q:D):q=D,_){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=q+Z,_={id:E++,callback:P,priorityLevel:_,startTime:q,expirationTime:Z,sortIndex:-1},q>D?(_.sortIndex=q,u(T,_),d(k)===null&&_===d(T)&&(V?(M(be),be=-1):V=!0,B(W,q-D))):(_.sortIndex=Z,u(k,_),O||G||(O=!0,Q(J))),_},l.unstable_shouldYield=se,l.unstable_wrapCallback=function(_){var P=L;return function(){var q=L;L=P;try{return _.apply(this,arguments)}finally{L=q}}}})(Pp)),Pp}var Gh;function Sg(){return Gh||(Gh=1,Lp.exports=kg()),Lp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function _g(){if(Yh)return ti;Yh=1;var l=sh(),u=Sg();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,y={};function v(t,r){S(t,r),S(t+"Capture",r)}function S(t,r){for(y[t]=r,t=0;t<r.length;t++)m.add(r[t])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},H={};function L(t){return k.call(H,t)?!0:k.call(E,t)?!1:T.test(t)?H[t]=!0:(E[t]=!0,!1)}function G(t,r,o,p){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return p?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O(t,r,o,p){if(r===null||typeof r>"u"||G(t,r,o,p))return!0;if(p)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function V(t,r,o,p,f,x,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=p,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=x,this.removeEmptyString=R}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){X[t]=new V(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];X[r]=new V(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){X[t]=new V(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){X[t]=new V(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){X[t]=new V(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){X[t]=new V(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){X[t]=new V(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){X[t]=new V(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){X[t]=new V(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,F);X[r]=new V(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,F);X[r]=new V(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,F);X[r]=new V(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){X[t]=new V(t,1,!1,t.toLowerCase(),null,!1,!1)}),X.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){X[t]=new V(t,1,!1,t.toLowerCase(),null,!0,!0)});function U(t,r,o,p){var f=X.hasOwnProperty(r)?X[r]:null;(f!==null?f.type!==0:p||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(O(r,o,f,p)&&(o=null),p||f===null?L(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,p=f.attributeNamespace,o===null?t.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,p?t.setAttributeNS(p,r,o):t.setAttribute(r,o))))}var W=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),ce=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),se=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),_=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=_&&t[_]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,D;function Z(t){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+t}var Ce=!1;function ze(t,r){if(!t||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(me){var p=me}Reflect.construct(t,[],r)}else{try{r.call()}catch(me){p=me}t.call(r.prototype)}else{try{throw Error()}catch(me){p=me}t()}}catch(me){if(me&&p&&typeof me.stack=="string"){for(var f=me.stack.split(`
`),x=p.stack.split(`
`),R=f.length-1,Y=x.length-1;1<=R&&0<=Y&&f[R]!==x[Y];)Y--;for(;1<=R&&0<=Y;R--,Y--)if(f[R]!==x[Y]){if(R!==1||Y!==1)do if(R--,Y--,0>Y||f[R]!==x[Y]){var ee=`
`+f[R].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=R&&0<=Y);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Z(t):""}function qe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oe:return"Fragment";case ce:return"Portal";case Re:return"Profiler";case be:return"StrictMode";case le:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case ve:return(t._context.displayName||"Context")+".Provider";case Ie:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}function Se(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=$e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),p=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,x=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(R){p=""+R,x.call(this,R)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return p},setValue:function(R){p=""+R},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ke(t){t._valueTracker||(t._valueTracker=et(t))}function Ft(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),p="";return t&&(p=$e(t)?t.checked?"true":"false":t.value),t=p,t!==o?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ct(t,r){var o=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function xt(t,r){var o=r.defaultValue==null?"":r.defaultValue,p=r.checked!=null?r.checked:r.defaultChecked;o=Be(r.value!=null?r.value:o),t._wrapperState={initialChecked:p,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tt(t,r){r=r.checked,r!=null&&U(t,"checked",r,!1)}function Ue(t,r){tt(t,r);var o=Be(r.value),p=r.type;if(o!=null)p==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(p==="submit"||p==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,o):r.hasOwnProperty("defaultValue")&&yt(t,r.type,Be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vt(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var p=r.type;if(!(p!=="submit"&&p!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,r,o){(r!=="number"||Yt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Qe=Array.isArray;function ut(t,r,o,p){if(t=t.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=r.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&p&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),r=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,p&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function ae(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Te(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(d(92));if(Qe(o)){if(1<o.length)throw Error(d(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Be(o)}}function he(t,r){var o=Be(r.value),p=Be(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),p!=null&&(t.defaultValue=""+p)}function kt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,p,f){MSApp.execUnsafeLocalFunction(function(){return t(r,o,p,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function _r(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Ir(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var p=o.indexOf("--")===0,f=_r(o,r[o],p);o==="float"&&(o="cssFloat"),p?t.setProperty(o,f):t[o]=f}}var Ur=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qr(t,r){if(r){if(Ur[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function bt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,tn=null,It=null;function qt(t){if(t=pn(t)){if(typeof Cr!="function")throw Error(d(280));var r=t.stateNode;r&&(r=gn(r),Cr(t.stateNode,t.type,r))}}function xn(t){tn?It?It.push(t):It=[t]:tn=t}function mn(){if(tn){var t=tn,r=It;if(It=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function Nn(t,r){return t(r)}function bn(){}var ri=!1;function In(t,r,o){if(ri)return t(r,o);ri=!0;try{return Nn(t,r,o)}finally{ri=!1,(tn!==null||It!==null)&&(bn(),mn())}}function pr(t,r){var o=t.stateNode;if(o===null)return null;var p=gn(o);if(p===null)return null;o=p[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(t=t.type,p=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!p;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(d(231,r,typeof o));return o}var mi=!1;if(j)try{var En={};Object.defineProperty(En,"passive",{get:function(){mi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{mi=!1}function as(t,r,o,p,f,x,R,Y,ee){var me=Array.prototype.slice.call(arguments,3);try{r.apply(o,me)}catch(Ae){this.onError(Ae)}}var wn=!1,Tr=null,$r=!1,Or=null,jr={onError:function(t){wn=!0,Tr=t}};function gi(t,r,o,p,f,x,R,Y,ee){wn=!1,Tr=null,as.apply(jr,arguments)}function os(t,r,o,p,f,x,R,Y,ee){if(gi.apply(this,arguments),wn){if(wn){var me=Tr;wn=!1,Tr=null}else throw Error(d(198));$r||($r=!0,Or=me)}}function On(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function ls(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(On(t)!==t)throw Error(d(188))}function Dr(t){var r=t.alternate;if(!r){if(r=On(t),r===null)throw Error(d(188));return r!==t?null:t}for(var o=t,p=r;;){var f=o.return;if(f===null)break;var x=f.alternate;if(x===null){if(p=f.return,p!==null){o=p;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===o)return Mi(f),t;if(x===p)return Mi(f),r;x=x.sibling}throw Error(d(188))}if(o.return!==p.return)o=f,p=x;else{for(var R=!1,Y=f.child;Y;){if(Y===o){R=!0,o=f,p=x;break}if(Y===p){R=!0,p=f,o=x;break}Y=Y.sibling}if(!R){for(Y=x.child;Y;){if(Y===o){R=!0,o=x,p=f;break}if(Y===p){R=!0,p=x,o=f;break}Y=Y.sibling}if(!R)throw Error(d(189))}}if(o.alternate!==p)throw Error(d(190))}if(o.tag!==3)throw Error(d(188));return o.stateNode.current===o?t:r}function Kn(t){return t=Dr(t),t!==null?yi(t):null}function yi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=yi(t);if(r!==null)return r;t=t.sibling}return null}var zi=u.unstable_scheduleCallback,Bt=u.unstable_cancelCallback,Mr=u.unstable_shouldYield,us=u.unstable_requestPaint,Rt=u.unstable_now,Fi=u.unstable_getCurrentPriorityLevel,ii=u.unstable_ImmediatePriority,Vt=u.unstable_UserBlockingPriority,Je=u.unstable_NormalPriority,si=u.unstable_LowPriority,cs=u.unstable_IdlePriority,Gn=null,N=null;function $(t){if(N&&typeof N.onCommitFiberRoot=="function")try{N.onCommitFiberRoot(Gn,t,void 0,(t.current.flags&128)===128)}catch{}}var ge=Math.clz32?Math.clz32:He,je=Math.log,pe=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(je(t)/pe|0)|0}var jt=64,Qt=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var o=t.pendingLanes;if(o===0)return 0;var p=0,f=t.suspendedLanes,x=t.pingedLanes,R=o&268435455;if(R!==0){var Y=R&~f;Y!==0?p=kn(Y):(x&=R,x!==0&&(p=kn(x)))}else R=o&~f,R!==0?p=kn(R):x!==0&&(p=kn(x));if(p===0)return 0;if(r!==0&&r!==p&&(r&f)===0&&(f=p&-p,x=r&-r,f>=x||f===16&&(x&4194240)!==0))return r;if((p&4)!==0&&(p|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=p;0<r;)o=31-ge(r),f=1<<o,p|=t[o],r&=~f;return p}function il(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var o=t.suspendedLanes,p=t.pingedLanes,f=t.expirationTimes,x=t.pendingLanes;0<x;){var R=31-ge(x),Y=1<<R,ee=f[R];ee===-1?((Y&o)===0||(Y&p)!==0)&&(f[R]=il(Y,r)):ee<=r&&(t.expiredLanes|=Y),x&=~Y}}function no(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ro(){var t=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),t}function Wi(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function rr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-ge(r),t[r]=o}function io(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var p=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ge(o),x=1<<f;r[f]=0,p[f]=-1,t[f]=-1,o&=~x}}function Hi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var p=31-ge(o),f=1<<p;f&r|t[p]&r&&(t[p]|=r),o&=~f}}var Nt=0;function ds(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Is,vi,va,xi,Bi,ir=!1,xa=[],zr=null,ai=null,Dn=null,Gr=new Map,Os=new Map,Nr=[],Ds="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function so(t,r){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Gr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(r.pointerId)}}function Ms(t,r,o,p,f,x){return t===null||t.nativeEvent!==x?(t={blockedOn:r,domEventName:o,eventSystemFlags:p,nativeEvent:x,targetContainers:[f]},r!==null&&(r=pn(r),r!==null&&vi(r)),t):(t.eventSystemFlags|=p,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Vl(t,r,o,p,f){switch(r){case"focusin":return zr=Ms(zr,t,r,o,p,f),!0;case"dragenter":return ai=Ms(ai,t,r,o,p,f),!0;case"mouseover":return Dn=Ms(Dn,t,r,o,p,f),!0;case"pointerover":var x=f.pointerId;return Gr.set(x,Ms(Gr.get(x)||null,t,r,o,p,f)),!0;case"gotpointercapture":return x=f.pointerId,Os.set(x,Ms(Os.get(x)||null,t,r,o,p,f)),!0}return!1}function ao(t){var r=Ln(t.target);if(r!==null){var o=On(r);if(o!==null){if(r=o.tag,r===13){if(r=ls(o),r!==null){t.blockedOn=r,Bi(t.priority,function(){va(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ps(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Tt(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var p=new o.constructor(o.type,o);fi=p,o.target.dispatchEvent(p),fi=null}else return r=pn(o),r!==null&&vi(r),t.blockedOn=o,!1;r.shift()}return!0}function zs(t,r,o){ps(t)&&o.delete(r)}function oo(){ir=!1,zr!==null&&ps(zr)&&(zr=null),ai!==null&&ps(ai)&&(ai=null),Dn!==null&&ps(Dn)&&(Dn=null),Gr.forEach(zs),Os.forEach(zs)}function bi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,oo)))}function _e(t){function r(f){return bi(f,t)}if(0<xa.length){bi(xa[0],t);for(var o=1;o<xa.length;o++){var p=xa[o];p.blockedOn===t&&(p.blockedOn=null)}}for(zr!==null&&bi(zr,t),ai!==null&&bi(ai,t),Dn!==null&&bi(Dn,t),Gr.forEach(r),Os.forEach(r),o=0;o<Nr.length;o++)p=Nr[o],p.blockedOn===t&&(p.blockedOn=null);for(;0<Nr.length&&(o=Nr[0],o.blockedOn===null);)ao(o),o.blockedOn===null&&Nr.shift()}var I=W.ReactCurrentBatchConfig,ne=!0;function we(t,r,o,p){var f=Nt,x=I.transition;I.transition=null;try{Nt=1,nt(t,r,o,p)}finally{Nt=f,I.transition=x}}function Ee(t,r,o,p){var f=Nt,x=I.transition;I.transition=null;try{Nt=4,nt(t,r,o,p)}finally{Nt=f,I.transition=x}}function nt(t,r,o,p){if(ne){var f=Tt(t,r,o,p);if(f===null)hu(t,r,p,ct,o),so(t,p);else if(Vl(f,t,r,o,p))p.stopPropagation();else if(so(t,p),r&4&&-1<Ds.indexOf(t)){for(;f!==null;){var x=pn(f);if(x!==null&&Is(x),x=Tt(t,r,o,p),x===null&&hu(t,r,p,ct,o),x===f)break;f=x}f!==null&&p.stopPropagation()}else hu(t,r,p,null,o)}}var ct=null;function Tt(t,r,o,p){if(ct=null,t=rt(p),t=Ln(t),t!==null)if(r=On(t),r===null)t=null;else if(o=r.tag,o===13){if(t=ls(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ct=t,null}function cn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fi()){case ii:return 1;case Vt:return 4;case Je:case si:return 16;case cs:return 536870912;default:return 16}default:return 16}}var $t=null,hr=null,Yn=null;function fr(){if(Yn)return Yn;var t,r=hr,o=r.length,p,f="value"in $t?$t.value:$t.textContent,x=f.length;for(t=0;t<o&&r[t]===f[t];t++);var R=o-t;for(p=1;p<=R&&r[o-p]===f[x-p];p++);return Yn=f.slice(t,1<p?1-p:void 0)}function dn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Er(){return!0}function sl(){return!1}function Sn(t){function r(o,p,f,x,R){this._reactName=o,this._targetInst=f,this.type=p,this.nativeEvent=x,this.target=R,this.currentTarget=null;for(var Y in t)t.hasOwnProperty(Y)&&(o=t[Y],this[Y]=o?o(x):x[Y]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Er:sl,this.isPropagationStopped=sl,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),r}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=Sn(Ui),wi=q({},Ui,{view:0,detail:0}),Ud=Sn(wi),Jl,Xl,uo,co=q({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Jl=t.screenX-uo.screenX,Xl=t.screenY-uo.screenY):Xl=Jl=0,uo=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Ql=Sn(co),qd=q({},co,{dataTransfer:0}),$d=Sn(qd),Kd=q({},wi,{relatedTarget:0}),Zl=Sn(Kd),fc=q({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=Sn(fc),mc=q({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),al=Sn(mc),ba=q({},Ui,{data:0}),gc=Sn(ba),Yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},po={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=po[t])?!!r[t]:!1}function eu(){return Mn}var yc=q({},wi,{key:function(t){if(t.key){var r=Yd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=dn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?dn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ho=Sn(yc),Jd=q({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Sn(Jd),Xd=q({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),nu=Sn(Xd),vc=q({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=Sn(vc),Zd=q({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xc=Sn(Zd),bc=[9,13,27,32],ru=j&&"CompositionEvent"in window,qi=null;j&&"documentMode"in document&&(qi=document.documentMode);var $i=j&&"TextEvent"in window&&!qi,fo=j&&(!ru||qi&&8<qi&&11>=qi),ol=" ",iu=!1;function oi(t,r){switch(t){case"keyup":return bc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function ep(t,r){switch(t){case"compositionend":return hs(r);case"keypress":return r.which!==32?null:(iu=!0,ol);case"textInput":return t=r.data,t===ol&&iu?null:t;default:return null}}function wc(t,r){if(fs)return t==="compositionend"||!ru&&oi(t,r)?(t=fr(),Yn=hr=$t=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fo&&r.locale!=="ko"?null:r.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!tp[t.type]:r==="textarea"}function ll(t,r,o,p){xn(p),r=Ta(r,"onChange"),0<r.length&&(o=new lo("onChange","change",null,o,p),t.push({event:o,listeners:r}))}var ki=null,Lr=null;function kc(t){vl(t,0)}function mo(t){var r=Cn(t);if(Ft(r))return t}function np(t,r){if(t==="change")return r}var Sc=!1;if(j){var au;if(j){var ul="oninput"in document;if(!ul){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),ul=typeof ou.oninput=="function"}au=ul}else au=!1;Sc=au&&(!document.documentMode||9<document.documentMode)}function wa(){ki&&(ki.detachEvent("onpropertychange",lu),Lr=ki=null)}function lu(t){if(t.propertyName==="value"&&mo(Lr)){var r=[];ll(r,Lr,t,rt(t)),In(kc,r)}}function _c(t,r,o){t==="focusin"?(wa(),ki=r,Lr=o,ki.attachEvent("onpropertychange",lu)):t==="focusout"&&wa()}function uu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mo(Lr)}function cl(t,r){if(t==="click")return mo(r)}function Cc(t,r){if(t==="input"||t==="change")return mo(r)}function dl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:dl;function ka(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),p=Object.keys(r);if(o.length!==p.length)return!1;for(p=0;p<o.length;p++){var f=o[p];if(!k.call(r,f)||!_n(t[f],r[f]))return!1}return!0}function pl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hl(t,r){var o=pl(t);t=0;for(var p;o;){if(o.nodeType===3){if(p=t+o.textContent.length,t<=r&&p>=r)return{node:o,offset:r-t};t=p}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=pl(o)}}function cu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?cu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function du(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Yt(t.document)}return r}function go(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function rp(t){var r=du(),o=t.focusedElem,p=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&cu(o.ownerDocument.documentElement,o)){if(p!==null&&go(o)){if(r=p.start,t=p.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,x=Math.min(p.start,f);p=p.end===void 0?x:Math.min(p.end,f),!t.extend&&x>p&&(f=p,p=x,x=f),f=hl(o,x);var R=hl(o,p);f&&R&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==R.node||t.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),x>p?(t.addRange(r),t.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ip=j&&"documentMode"in document&&11>=document.documentMode,Sa=null,Ki=null,Si=null,ms=!1;function fl(t,r,o){var p=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ms||Sa==null||Sa!==Yt(p)||(p=Sa,"selectionStart"in p&&go(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),Si&&ka(Si,p)||(Si=p,p=Ta(Ki,"onSelect"),0<p.length&&(r=new lo("onSelect","select",null,r,o),t.push({event:r,listeners:p}),r.target=Sa)))}function _a(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Fs={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},yo={},gs={};j&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function _i(t){if(yo[t])return yo[t];if(!Fs[t])return t;var r=Fs[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in gs)return yo[t]=r[o];return t}var sr=_i("animationend"),Gi=_i("animationiteration"),Yi=_i("animationstart"),vo=_i("transitionend"),Tc=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,r){Tc.set(t,r),v(r,[t])}for(var ml=0;ml<pu.length;ml++){var xo=pu[ml],gl=xo.toLowerCase(),sp=xo[0].toUpperCase()+xo.slice(1);Yr(gl,"on"+sp)}Yr(sr,"onAnimationEnd"),Yr(Gi,"onAnimationIteration"),Yr(Yi,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(vo,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function yl(t,r,o){var p=t.type||"unknown-event";t.currentTarget=o,os(p,r,void 0,t),t.currentTarget=null}function vl(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var p=t[o],f=p.event;p=p.listeners;e:{var x=void 0;if(r)for(var R=p.length-1;0<=R;R--){var Y=p[R],ee=Y.instance,me=Y.currentTarget;if(Y=Y.listener,ee!==x&&f.isPropagationStopped())break e;yl(f,Y,me),x=ee}else for(R=0;R<p.length;R++){if(Y=p[R],ee=Y.instance,me=Y.currentTarget,Y=Y.listener,ee!==x&&f.isPropagationStopped())break e;yl(f,Y,me),x=ee}}}if($r)throw t=Or,$r=!1,Or=null,t}function Wt(t,r){var o=r[fu];o===void 0&&(o=r[fu]=new Set);var p=t+"__bubble";o.has(p)||(Nc(r,t,2,!1),o.add(p))}function Ca(t,r,o){var p=0;r&&(p|=4),Nc(o,t,p,r)}var bo="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[bo]){t[bo]=!0,m.forEach(function(o){o!=="selectionchange"&&(jc.has(o)||Ca(o,!1,t),Ca(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[bo]||(r[bo]=!0,Ca("selectionchange",!1,r))}}function Nc(t,r,o,p){switch(cn(r)){case 1:var f=we;break;case 4:f=Ee;break;default:f=nt}o=f.bind(null,r,o,t),f=void 0,!mi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),p?f!==void 0?t.addEventListener(r,o,{capture:!0,passive:f}):t.addEventListener(r,o,!0):f!==void 0?t.addEventListener(r,o,{passive:f}):t.addEventListener(r,o,!1)}function hu(t,r,o,p,f){var x=p;if((r&1)===0&&(r&2)===0&&p!==null)e:for(;;){if(p===null)return;var R=p.tag;if(R===3||R===4){var Y=p.stateNode.containerInfo;if(Y===f||Y.nodeType===8&&Y.parentNode===f)break;if(R===4)for(R=p.return;R!==null;){var ee=R.tag;if((ee===3||ee===4)&&(ee=R.stateNode.containerInfo,ee===f||ee.nodeType===8&&ee.parentNode===f))return;R=R.return}for(;Y!==null;){if(R=Ln(Y),R===null)return;if(ee=R.tag,ee===5||ee===6){p=x=R;continue e}Y=Y.parentNode}}p=p.return}In(function(){var me=x,Ae=rt(o),De=[];e:{var Le=Tc.get(t);if(Le!==void 0){var Xe=lo,it=t;switch(t){case"keypress":if(dn(o)===0)break e;case"keydown":case"keyup":Xe=ho;break;case"focusin":it="focus",Xe=Zl;break;case"focusout":it="blur",Xe=Zl;break;case"beforeblur":case"afterblur":Xe=Zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=nu;break;case sr:case Gi:case Yi:Xe=Gd;break;case vo:Xe=Qd;break;case"scroll":Xe=Ud;break;case"wheel":Xe=xc;break;case"copy":case"cut":case"paste":Xe=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=tu}var st=(r&4)!==0,qn=!st&&t==="scroll",ue=st?Le!==null?Le+"Capture":null:Le;st=[];for(var re=me,de;re!==null;){de=re;var We=de.stateNode;if(de.tag===5&&We!==null&&(de=We,ue!==null&&(We=pr(re,ue),We!=null&&st.push(wo(re,We,de)))),qn)break;re=re.return}0<st.length&&(Le=new Xe(Le,it,null,o,Ae),De.push({event:Le,listeners:st}))}}if((r&7)===0){e:{if(Le=t==="mouseover"||t==="pointerover",Xe=t==="mouseout"||t==="pointerout",Le&&o!==fi&&(it=o.relatedTarget||o.fromElement)&&(Ln(it)||it[Xi]))break e;if((Xe||Le)&&(Le=Ae.window===Ae?Ae:(Le=Ae.ownerDocument)?Le.defaultView||Le.parentWindow:window,Xe?(it=o.relatedTarget||o.toElement,Xe=me,it=it?Ln(it):null,it!==null&&(qn=On(it),it!==qn||it.tag!==5&&it.tag!==6)&&(it=null)):(Xe=null,it=me),Xe!==it)){if(st=Ql,We="onMouseLeave",ue="onMouseEnter",re="mouse",(t==="pointerout"||t==="pointerover")&&(st=tu,We="onPointerLeave",ue="onPointerEnter",re="pointer"),qn=Xe==null?Le:Cn(Xe),de=it==null?Le:Cn(it),Le=new st(We,re+"leave",Xe,o,Ae),Le.target=qn,Le.relatedTarget=de,We=null,Ln(Ae)===me&&(st=new st(ue,re+"enter",it,o,Ae),st.target=de,st.relatedTarget=qn,We=st),qn=We,Xe&&it)t:{for(st=Xe,ue=it,re=0,de=st;de;de=vs(de))re++;for(de=0,We=ue;We;We=vs(We))de++;for(;0<re-de;)st=vs(st),re--;for(;0<de-re;)ue=vs(ue),de--;for(;re--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=vs(st),ue=vs(ue)}st=null}else st=null;Xe!==null&&Hs(De,Le,Xe,st,!1),it!==null&&qn!==null&&Hs(De,qn,it,st,!0)}}e:{if(Le=me?Cn(me):window,Xe=Le.nodeName&&Le.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Le.type==="file")var lt=np;else if(su(Le))if(Sc)lt=Cc;else{lt=uu;var ht=_c}else(Xe=Le.nodeName)&&Xe.toLowerCase()==="input"&&(Le.type==="checkbox"||Le.type==="radio")&&(lt=cl);if(lt&&(lt=lt(t,me))){ll(De,lt,o,Ae);break e}ht&&ht(t,Le,me),t==="focusout"&&(ht=Le._wrapperState)&&ht.controlled&&Le.type==="number"&&yt(Le,"number",Le.value)}switch(ht=me?Cn(me):window,t){case"focusin":(su(ht)||ht.contentEditable==="true")&&(Sa=ht,Ki=me,Si=null);break;case"focusout":Si=Ki=Sa=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,fl(De,o,Ae);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":fl(De,o,Ae)}var ft;if(ru)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else fs?oi(t,o)&&(wt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(wt="onCompositionStart");wt&&(fo&&o.locale!=="ko"&&(fs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&fs&&(ft=fr()):($t=Ae,hr="value"in $t?$t.value:$t.textContent,fs=!0)),ht=Ta(me,wt),0<ht.length&&(wt=new gc(wt,t,null,o,Ae),De.push({event:wt,listeners:ht}),ft?wt.data=ft:(ft=hs(o),ft!==null&&(wt.data=ft)))),(ft=$i?ep(t,o):wc(t,o))&&(me=Ta(me,"onBeforeInput"),0<me.length&&(Ae=new gc("onBeforeInput","beforeinput",null,o,Ae),De.push({event:Ae,listeners:me}),Ae.data=ft))}vl(De,r)})}function wo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Ta(t,r){for(var o=r+"Capture",p=[];t!==null;){var f=t,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=pr(t,o),x!=null&&p.unshift(wo(t,x,f)),x=pr(t,r),x!=null&&p.push(wo(t,x,f))),t=t.return}return p}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hs(t,r,o,p,f){for(var x=r._reactName,R=[];o!==null&&o!==p;){var Y=o,ee=Y.alternate,me=Y.stateNode;if(ee!==null&&ee===p)break;Y.tag===5&&me!==null&&(Y=me,f?(ee=pr(o,x),ee!=null&&R.unshift(wo(o,ee,Y))):f||(ee=pr(o,x),ee!=null&&R.push(wo(o,ee,Y)))),o=o.return}R.length!==0&&t.push({event:r,listeners:R})}var ko=/\r\n?/g,ap=/\u0000|\uFFFD/g;function So(t){return(typeof t=="string"?t:""+t).replace(ko,`
`).replace(ap,"")}function _o(t,r,o){if(r=So(r),So(t)!==r&&o)throw Error(d(425))}function xs(){}var xl=null,Vi=null;function Bs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Co=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Ec=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(t){return Us.resolve(null).then(t).catch(Lc)}:Ji;function Lc(t){setTimeout(function(){throw t})}function bl(t,r){var o=r,p=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(p===0){t.removeChild(f),_e(r);return}p--}else o!=="$"&&o!=="$?"&&o!=="$!"||p++;o=f}while(o);_e(r)}function bs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ws(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Vr,To="__reactProps$"+Vr,Xi="__reactContainer$"+Vr,fu="__reactEvents$"+Vr,op="__reactListeners$"+Vr,lp="__reactHandles$"+Vr;function Ln(t){var r=t[Ci];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Xi]||o[Ci]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=ws(t);t!==null;){if(o=t[Ci])return o;t=ws(t)}return r}t=o,o=t.parentNode}return null}function pn(t){return t=t[Ci]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function gn(t){return t[To]||null}var qs=[],ja=-1;function li(t){return{current:t}}function nn(t){0>ja||(t.current=qs[ja],qs[ja]=null,ja--)}function Zt(t,r){ja++,qs[ja]=t.current,t.current=r}var ks={},Vn=li(ks),mr=li(!1),Qi=ks;function Na(t,r){var o=t.type.contextTypes;if(!o)return ks;var p=t.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===r)return p.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in o)f[x]=r[x];return p&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function ar(t){return t=t.childContextTypes,t!=null}function Ea(){nn(mr),nn(Vn)}function mu(t,r,o){if(Vn.current!==ks)throw Error(d(168));Zt(Vn,r),Zt(mr,o)}function gu(t,r,o){var p=t.stateNode;if(r=r.childContextTypes,typeof p.getChildContext!="function")return o;p=p.getChildContext();for(var f in p)if(!(f in r))throw Error(d(108,Se(t)||"Unknown",f));return q({},o,p)}function La(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ks,Qi=Vn.current,Zt(Vn,t),Zt(mr,mr.current),!0}function yu(t,r,o){var p=t.stateNode;if(!p)throw Error(d(169));o?(t=gu(t,r,Qi),p.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Vn),Zt(Vn,t)):nn(mr),Zt(mr,o)}var Fr=null,wl=!1,Pa=!1;function Ti(t){Fr===null?Fr=[t]:Fr.push(t)}function Pc(t){wl=!0,Ti(t)}function Ss(){if(!Pa&&Fr!==null){Pa=!0;var t=0,r=Nt;try{var o=Fr;for(Nt=1;t<o.length;t++){var p=o[t];do p=p(!0);while(p!==null)}Fr=null,wl=!1}catch(f){throw Fr!==null&&(Fr=Fr.slice(t+1)),zi(ii,Ss),f}finally{Nt=r,Pa=!1}}return null}var $s=[],Jn=0,At=null,Pr=0,zn=[],Fn=0,_s=null,ui=1,ji="";function Ks(t,r){$s[Jn++]=Pr,$s[Jn++]=At,At=t,Pr=r}function kl(t,r,o){zn[Fn++]=ui,zn[Fn++]=ji,zn[Fn++]=_s,_s=t;var p=ui;t=ji;var f=32-ge(p)-1;p&=~(1<<f),o+=1;var x=32-ge(r)+f;if(30<x){var R=f-f%5;x=(p&(1<<R)-1).toString(32),p>>=R,f-=R,ui=1<<32-ge(r)+f|o<<f|p,ji=x+t}else ui=1<<x|o<<f|p,ji=t}function Gs(t){t.return!==null&&(Ks(t,1),kl(t,1,0))}function Sl(t){for(;t===At;)At=$s[--Jn],$s[Jn]=null,Pr=$s[--Jn],$s[Jn]=null;for(;t===_s;)_s=zn[--Fn],zn[Fn]=null,ji=zn[--Fn],zn[Fn]=null,ui=zn[--Fn],zn[Fn]=null}var gr=null,Pn=null,rn=!1,Jr=null;function Ac(t,r){var o=Ii(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function jo(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,Pn=bs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=_s!==null?{id:ui,overflow:ji}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ii(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gr=t,Pn=null,!0):!1;default:return!1}}function No(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _l(t){if(rn){var r=Pn;if(r){var o=r;if(!jo(t,r)){if(No(t))throw Error(d(418));r=bs(o.nextSibling);var p=gr;r&&jo(t,r)?Ac(p,o):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(No(t))throw Error(d(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Rc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Eo(t){if(t!==gr)return!1;if(!rn)return Rc(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Bs(t.type,t.memoizedProps)),r&&(r=Pn)){if(No(t))throw Ic(),Error(d(418));for(;r;)Ac(t,r),r=bs(r.nextSibling)}if(Rc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Pn=bs(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=gr?bs(t.stateNode.nextSibling):null;return!0}function Ic(){for(var t=Pn;t;)t=bs(t.nextSibling)}function Aa(){Pn=gr=null,rn=!1}function Ra(t){Jr===null?Jr=[t]:Jr.push(t)}var Oc=W.ReactCurrentBatchConfig;function Lo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(d(309));var p=o.stateNode}if(!p)throw Error(d(147,t));var f=p,x=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(R){var Y=f.refs;R===null?delete Y[x]:Y[x]=R},r._stringRef=x,r)}if(typeof t!="string")throw Error(d(284));if(!o._owner)throw Error(d(290,t))}return t}function Cl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function vu(t){var r=t._init;return r(t._payload)}function Ys(t){function r(ue,re){if(t){var de=ue.deletions;de===null?(ue.deletions=[re],ue.flags|=16):de.push(re)}}function o(ue,re){if(!t)return null;for(;re!==null;)r(ue,re),re=re.sibling;return null}function p(ue,re){for(ue=new Map;re!==null;)re.key!==null?ue.set(re.key,re):ue.set(re.index,re),re=re.sibling;return ue}function f(ue,re){return ue=Xa(ue,re),ue.index=0,ue.sibling=null,ue}function x(ue,re,de){return ue.index=de,t?(de=ue.alternate,de!==null?(de=de.index,de<re?(ue.flags|=2,re):de):(ue.flags|=2,re)):(ue.flags|=1048576,re)}function R(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function Y(ue,re,de,We){return re===null||re.tag!==6?(re=wp(de,ue.mode,We),re.return=ue,re):(re=f(re,de),re.return=ue,re)}function ee(ue,re,de,We){var lt=de.type;return lt===oe?Ae(ue,re,de.props.children,We,de.key):re!==null&&(re.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Q&&vu(lt)===re.type)?(We=f(re,de.props),We.ref=Lo(ue,re,de),We.return=ue,We):(We=sd(de.type,de.key,de.props,null,ue.mode,We),We.ref=Lo(ue,re,de),We.return=ue,We)}function me(ue,re,de,We){return re===null||re.tag!==4||re.stateNode.containerInfo!==de.containerInfo||re.stateNode.implementation!==de.implementation?(re=kp(de,ue.mode,We),re.return=ue,re):(re=f(re,de.children||[]),re.return=ue,re)}function Ae(ue,re,de,We,lt){return re===null||re.tag!==7?(re=Go(de,ue.mode,We,lt),re.return=ue,re):(re=f(re,de),re.return=ue,re)}function De(ue,re,de){if(typeof re=="string"&&re!==""||typeof re=="number")return re=wp(""+re,ue.mode,de),re.return=ue,re;if(typeof re=="object"&&re!==null){switch(re.$$typeof){case J:return de=sd(re.type,re.key,re.props,null,ue.mode,de),de.ref=Lo(ue,null,re),de.return=ue,de;case ce:return re=kp(re,ue.mode,de),re.return=ue,re;case Q:var We=re._init;return De(ue,We(re._payload),de)}if(Qe(re)||P(re))return re=Go(re,ue.mode,de,null),re.return=ue,re;Cl(ue,re)}return null}function Le(ue,re,de,We){var lt=re!==null?re.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return lt!==null?null:Y(ue,re,""+de,We);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case J:return de.key===lt?ee(ue,re,de,We):null;case ce:return de.key===lt?me(ue,re,de,We):null;case Q:return lt=de._init,Le(ue,re,lt(de._payload),We)}if(Qe(de)||P(de))return lt!==null?null:Ae(ue,re,de,We,null);Cl(ue,de)}return null}function Xe(ue,re,de,We,lt){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(de)||null,Y(re,ue,""+We,lt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case J:return ue=ue.get(We.key===null?de:We.key)||null,ee(re,ue,We,lt);case ce:return ue=ue.get(We.key===null?de:We.key)||null,me(re,ue,We,lt);case Q:var ht=We._init;return Xe(ue,re,de,ht(We._payload),lt)}if(Qe(We)||P(We))return ue=ue.get(de)||null,Ae(re,ue,We,lt,null);Cl(re,We)}return null}function it(ue,re,de,We){for(var lt=null,ht=null,ft=re,wt=re=0,ur=null;ft!==null&&wt<de.length;wt++){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ht=Le(ue,ft,de[wt],We);if(Ht===null){ft===null&&(ft=ur);break}t&&ft&&Ht.alternate===null&&r(ue,ft),re=x(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht,ft=ur}if(wt===de.length)return o(ue,ft),rn&&Ks(ue,wt),lt;if(ft===null){for(;wt<de.length;wt++)ft=De(ue,de[wt],We),ft!==null&&(re=x(ft,re,wt),ht===null?lt=ft:ht.sibling=ft,ht=ft);return rn&&Ks(ue,wt),lt}for(ft=p(ue,ft);wt<de.length;wt++)ur=Xe(ft,ue,wt,de[wt],We),ur!==null&&(t&&ur.alternate!==null&&ft.delete(ur.key===null?wt:ur.key),re=x(ur,re,wt),ht===null?lt=ur:ht.sibling=ur,ht=ur);return t&&ft.forEach(function(Qa){return r(ue,Qa)}),rn&&Ks(ue,wt),lt}function st(ue,re,de,We){var lt=P(de);if(typeof lt!="function")throw Error(d(150));if(de=lt.call(de),de==null)throw Error(d(151));for(var ht=lt=null,ft=re,wt=re=0,ur=null,Ht=de.next();ft!==null&&!Ht.done;wt++,Ht=de.next()){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Qa=Le(ue,ft,Ht.value,We);if(Qa===null){ft===null&&(ft=ur);break}t&&ft&&Qa.alternate===null&&r(ue,ft),re=x(Qa,re,wt),ht===null?lt=Qa:ht.sibling=Qa,ht=Qa,ft=ur}if(Ht.done)return o(ue,ft),rn&&Ks(ue,wt),lt;if(ft===null){for(;!Ht.done;wt++,Ht=de.next())Ht=De(ue,Ht.value,We),Ht!==null&&(re=x(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return rn&&Ks(ue,wt),lt}for(ft=p(ue,ft);!Ht.done;wt++,Ht=de.next())Ht=Xe(ft,ue,wt,Ht.value,We),Ht!==null&&(t&&Ht.alternate!==null&&ft.delete(Ht.key===null?wt:Ht.key),re=x(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return t&&ft.forEach(function(mg){return r(ue,mg)}),rn&&Ks(ue,wt),lt}function qn(ue,re,de,We){if(typeof de=="object"&&de!==null&&de.type===oe&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case J:e:{for(var lt=de.key,ht=re;ht!==null;){if(ht.key===lt){if(lt=de.type,lt===oe){if(ht.tag===7){o(ue,ht.sibling),re=f(ht,de.props.children),re.return=ue,ue=re;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Q&&vu(lt)===ht.type){o(ue,ht.sibling),re=f(ht,de.props),re.ref=Lo(ue,ht,de),re.return=ue,ue=re;break e}o(ue,ht);break}else r(ue,ht);ht=ht.sibling}de.type===oe?(re=Go(de.props.children,ue.mode,We,de.key),re.return=ue,ue=re):(We=sd(de.type,de.key,de.props,null,ue.mode,We),We.ref=Lo(ue,re,de),We.return=ue,ue=We)}return R(ue);case ce:e:{for(ht=de.key;re!==null;){if(re.key===ht)if(re.tag===4&&re.stateNode.containerInfo===de.containerInfo&&re.stateNode.implementation===de.implementation){o(ue,re.sibling),re=f(re,de.children||[]),re.return=ue,ue=re;break e}else{o(ue,re);break}else r(ue,re);re=re.sibling}re=kp(de,ue.mode,We),re.return=ue,ue=re}return R(ue);case Q:return ht=de._init,qn(ue,re,ht(de._payload),We)}if(Qe(de))return it(ue,re,de,We);if(P(de))return st(ue,re,de,We);Cl(ue,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,re!==null&&re.tag===6?(o(ue,re.sibling),re=f(re,de),re.return=ue,ue=re):(o(ue,re),re=wp(de,ue.mode,We),re.return=ue,ue=re),R(ue)):o(ue,re)}return qn}var Cs=Ys(!0),Po=Ys(!1),Ao=li(null),Ia=null,Vs=null,xu=null;function Tl(){xu=Vs=Ia=null}function Wn(t){var r=Ao.current;nn(Ao),t._currentValue=r}function Oa(t,r,o){for(;t!==null;){var p=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,p!==null&&(p.childLanes|=r)):p!==null&&(p.childLanes&r)!==r&&(p.childLanes|=r),t===o)break;t=t.return}}function Js(t,r){Ia=t,xu=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Wr(t){var r=t._currentValue;if(xu!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(Ia===null)throw Error(d(308));Vs=t,Ia.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Ts=null;function js(t){Ts===null?Ts=[t]:Ts.push(t)}function Ro(t,r,o,p){var f=r.interleaved;return f===null?(o.next=o,js(r)):(o.next=f.next,f.next=o),r.interleaved=o,Ni(t,p)}function Ni(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Zi=!1;function jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ci(t,r,o){var p=t.updateQueue;if(p===null)return null;if(p=p.shared,(dt&2)!==0){var f=p.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),p.pending=r,Ni(t,o)}return f=p.interleaved,f===null?(r.next=r,js(p)):(r.next=f.next,f.next=r),p.interleaved=r,Ni(t,o)}function Io(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var p=r.lanes;p&=t.pendingLanes,o|=p,r.lanes=o,Hi(t,o)}}function Da(t,r){var o=t.updateQueue,p=t.alternate;if(p!==null&&(p=p.updateQueue,o===p)){var f=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var R={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?f=x=R:x=x.next=R,o=o.next}while(o!==null);x===null?f=x=r:x=x.next=r}else f=x=r;o={baseState:p.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:p.shared,effects:p.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Nl(t,r,o,p){var f=t.updateQueue;Zi=!1;var x=f.firstBaseUpdate,R=f.lastBaseUpdate,Y=f.shared.pending;if(Y!==null){f.shared.pending=null;var ee=Y,me=ee.next;ee.next=null,R===null?x=me:R.next=me,R=ee;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,Y=Ae.lastBaseUpdate,Y!==R&&(Y===null?Ae.firstBaseUpdate=me:Y.next=me,Ae.lastBaseUpdate=ee))}if(x!==null){var De=f.baseState;R=0,Ae=me=ee=null,Y=x;do{var Le=Y.lane,Xe=Y.eventTime;if((p&Le)===Le){Ae!==null&&(Ae=Ae.next={eventTime:Xe,lane:0,tag:Y.tag,payload:Y.payload,callback:Y.callback,next:null});e:{var it=t,st=Y;switch(Le=r,Xe=o,st.tag){case 1:if(it=st.payload,typeof it=="function"){De=it.call(Xe,De,Le);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Le=typeof it=="function"?it.call(Xe,De,Le):it,Le==null)break e;De=q({},De,Le);break e;case 2:Zi=!0}}Y.callback!==null&&Y.lane!==0&&(t.flags|=64,Le=f.effects,Le===null?f.effects=[Y]:Le.push(Y))}else Xe={eventTime:Xe,lane:Le,tag:Y.tag,payload:Y.payload,callback:Y.callback,next:null},Ae===null?(me=Ae=Xe,ee=De):Ae=Ae.next=Xe,R|=Le;if(Y=Y.next,Y===null){if(Y=f.shared.pending,Y===null)break;Le=Y,Y=Le.next,Le.next=null,f.lastBaseUpdate=Le,f.shared.pending=null}}while(!0);if(Ae===null&&(ee=De),f.baseState=ee,f.firstBaseUpdate=me,f.lastBaseUpdate=Ae,r=f.shared.interleaved,r!==null){f=r;do R|=f.lane,f=f.next;while(f!==r)}else x===null&&(f.shared.lanes=0);kr|=R,t.lanes=R,t.memoizedState=De}}function Qs(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var p=t[r],f=p.callback;if(f!==null){if(p.callback=null,p=o,typeof f!="function")throw Error(d(191,f));f.call(p)}}}var Ma={},di=li(Ma),za=li(Ma),es=li(Ma);function pi(t){if(t===Ma)throw Error(d(174));return t}function Zs(t,r){switch(Zt(es,r),Zt(za,t),Zt(di,Ma),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}nn(di),Zt(di,r)}function Li(){nn(di),nn(za),nn(es)}function bu(t){pi(es.current);var r=pi(di.current),o=at(r,t.type);r!==o&&(Zt(za,t),Zt(di,o))}function wu(t){za.current===t&&(nn(di),nn(za))}var ln=li(0);function hi(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ns=[];function ea(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var El=W.ReactCurrentDispatcher,Ll=W.ReactCurrentBatchConfig,ta=0,hn=null,Hn=null,Ot=null,Oo=!1,Do=!1,Mo=0,up=0;function Zn(){throw Error(d(321))}function Pl(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!_n(t[o],r[o]))return!1;return!0}function Al(t,r,o,p,f,x){if(ta=x,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,El.current=t===null||t.memoizedState===null?dp:Ru,t=o(p,f),Do){x=0;do{if(Do=!1,Mo=0,25<=x)throw Error(d(301));x+=1,Ot=Hn=null,r.updateQueue=null,El.current=Fo,t=o(p,f)}while(Do)}if(El.current=zo,r=Hn!==null&&Hn.next!==null,ta=0,Ot=Hn=hn=null,Oo=!1,r)throw Error(d(300));return t}function ku(){var t=Mo!==0;return Mo=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Xr(){if(Hn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=Ot===null?hn.memoizedState:Ot.next;if(r!==null)Ot=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Ot===null?hn.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Qr(t,r){return typeof r=="function"?r(t):r}function na(t){var r=Xr(),o=r.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=t;var p=Hn,f=p.baseQueue,x=o.pending;if(x!==null){if(f!==null){var R=f.next;f.next=x.next,x.next=R}p.baseQueue=f=x,o.pending=null}if(f!==null){x=f.next,p=p.baseState;var Y=R=null,ee=null,me=x;do{var Ae=me.lane;if((ta&Ae)===Ae)ee!==null&&(ee=ee.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),p=me.hasEagerState?me.eagerState:t(p,me.action);else{var De={lane:Ae,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};ee===null?(Y=ee=De,R=p):ee=ee.next=De,hn.lanes|=Ae,kr|=Ae}me=me.next}while(me!==null&&me!==x);ee===null?R=p:ee.next=Y,_n(p,r.memoizedState)||(er=!0),r.memoizedState=p,r.baseState=R,r.baseQueue=ee,o.lastRenderedState=p}if(t=o.interleaved,t!==null){f=t;do x=f.lane,hn.lanes|=x,kr|=x,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Fa(t){var r=Xr(),o=r.queue;if(o===null)throw Error(d(311));o.lastRenderedReducer=t;var p=o.dispatch,f=o.pending,x=r.memoizedState;if(f!==null){o.pending=null;var R=f=f.next;do x=t(x,R.action),R=R.next;while(R!==f);_n(x,r.memoizedState)||(er=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),o.lastRenderedState=x}return[x,p]}function Wa(){}function Ai(t,r){var o=hn,p=Xr(),f=r(),x=!_n(p.memoizedState,f);if(x&&(p.memoizedState=f,er=!0),p=p.queue,Tu(ra.bind(null,o,p,t),[t]),p.getSnapshot!==r||x||Ot!==null&&Ot.memoizedState.tag&1){if(o.flags|=2048,Es(9,Mc.bind(null,o,p,f,r),void 0,null),zt===null)throw Error(d(349));(ta&30)!==0||Dc(o,r,f)}return f}function Dc(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Mc(t,r,o,p){r.value=o,r.getSnapshot=p,Su(r)&&_u(t)}function ra(t,r,o){return o(function(){Su(r)&&_u(t)})}function Su(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!_n(t,o)}catch{return!0}}function _u(t){var r=Ni(t,1);r!==null&&ns(r,t,1,-1)}function Cu(t){var r=Pi();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:t},r.queue=t,t=t.dispatch=Lu.bind(null,hn,t),[r.memoizedState,t]}function Es(t,r,o,p){return t={tag:t,create:r,destroy:o,deps:p,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(p=o.next,o.next=t,t.next=p,r.lastEffect=t)),t}function ia(){return Xr().memoizedState}function Ha(t,r,o,p){var f=Pi();hn.flags|=t,f.memoizedState=Es(1|r,o,void 0,p===void 0?null:p)}function Ba(t,r,o,p){var f=Xr();p=p===void 0?null:p;var x=void 0;if(Hn!==null){var R=Hn.memoizedState;if(x=R.destroy,p!==null&&Pl(p,R.deps)){f.memoizedState=Es(r,o,x,p);return}}hn.flags|=t,f.memoizedState=Es(1|r,o,x,p)}function Rl(t,r){return Ha(8390656,8,t,r)}function Tu(t,r){return Ba(2048,8,t,r)}function Ua(t,r){return Ba(4,2,t,r)}function ju(t,r){return Ba(4,4,t,r)}function zc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nu(t,r,o){return o=o!=null?o.concat([t]):null,Ba(4,4,zc.bind(null,r,t),o)}function qa(){}function Fc(t,r){var o=Xr();r=r===void 0?null:r;var p=o.memoizedState;return p!==null&&r!==null&&Pl(r,p[1])?p[0]:(o.memoizedState=[t,r],t)}function Wc(t,r){var o=Xr();r=r===void 0?null:r;var p=o.memoizedState;return p!==null&&r!==null&&Pl(r,p[1])?p[0]:(t=t(),o.memoizedState=[t,r],t)}function $a(t,r,o){return(ta&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=o):(_n(o,r)||(o=ro(),hn.lanes|=o,kr|=o,t.baseState=!0),r)}function Hc(t,r){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var p=Ll.transition;Ll.transition={};try{t(!1),r()}finally{Nt=o,Ll.transition=p}}function Eu(){return Xr().memoizedState}function cp(t,r,o){var p=Va(t);if(o={lane:p,action:o,hasEagerState:!1,eagerState:null,next:null},Pu(t))Bc(r,o);else if(o=Ro(t,r,o,p),o!==null){var f=Hr();ns(o,t,p,f),Au(o,r,p)}}function Lu(t,r,o){var p=Va(t),f={lane:p,action:o,hasEagerState:!1,eagerState:null,next:null};if(Pu(t))Bc(r,f);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var R=r.lastRenderedState,Y=x(R,o);if(f.hasEagerState=!0,f.eagerState=Y,_n(Y,R)){var ee=r.interleaved;ee===null?(f.next=f,js(r)):(f.next=ee.next,ee.next=f),r.interleaved=f;return}}catch{}finally{}o=Ro(t,r,f,p),o!==null&&(f=Hr(),ns(o,t,p,f),Au(o,r,p))}}function Pu(t){var r=t.alternate;return t===hn||r!==null&&r===hn}function Bc(t,r){Do=Oo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Au(t,r,o){if((o&4194240)!==0){var p=r.lanes;p&=t.pendingLanes,o|=p,r.lanes=o,Hi(t,o)}}var zo={readContext:Wr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},dp={readContext:Wr,useCallback:function(t,r){return Pi().memoizedState=[t,r===void 0?null:r],t},useContext:Wr,useEffect:Rl,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ha(4194308,4,zc.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ha(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ha(4,2,t,r)},useMemo:function(t,r){var o=Pi();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var p=Pi();return r=o!==void 0?o(r):r,p.memoizedState=p.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},p.queue=t,t=t.dispatch=cp.bind(null,hn,t),[p.memoizedState,t]},useRef:function(t){var r=Pi();return t={current:t},r.memoizedState=t},useState:Cu,useDebugValue:qa,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=Cu(!1),r=t[0];return t=Hc.bind(null,t[1]),Pi().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var p=hn,f=Pi();if(rn){if(o===void 0)throw Error(d(407));o=o()}else{if(o=r(),zt===null)throw Error(d(349));(ta&30)!==0||Dc(p,r,o)}f.memoizedState=o;var x={value:o,getSnapshot:r};return f.queue=x,Rl(ra.bind(null,p,x,t),[t]),p.flags|=2048,Es(9,Mc.bind(null,p,x,o,r),void 0,null),o},useId:function(){var t=Pi(),r=zt.identifierPrefix;if(rn){var o=ji,p=ui;o=(p&~(1<<32-ge(p)-1)).toString(32)+o,r=":"+r+"R"+o,o=Mo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=up++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ru={readContext:Wr,useCallback:Fc,useContext:Wr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:Ua,useLayoutEffect:ju,useMemo:Wc,useReducer:na,useRef:ia,useState:function(){return na(Qr)},useDebugValue:qa,useDeferredValue:function(t){var r=Xr();return $a(r,Hn.memoizedState,t)},useTransition:function(){var t=na(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Wa,useSyncExternalStore:Ai,useId:Eu,unstable_isNewReconciler:!1},Fo={readContext:Wr,useCallback:Fc,useContext:Wr,useEffect:Tu,useImperativeHandle:Nu,useInsertionEffect:Ua,useLayoutEffect:ju,useMemo:Wc,useReducer:Fa,useRef:ia,useState:function(){return Fa(Qr)},useDebugValue:qa,useDeferredValue:function(t){var r=Xr();return Hn===null?r.memoizedState=t:$a(r,Hn.memoizedState,t)},useTransition:function(){var t=Fa(Qr)[0],r=Xr().memoizedState;return[t,r]},useMutableSource:Wa,useSyncExternalStore:Ai,useId:Eu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=q({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Iu(t,r,o,p){r=t.memoizedState,o=o(p,r),o=o==null?r:q({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wo={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var p=Hr(),f=Va(t),x=Ei(p,f);x.payload=r,o!=null&&(x.callback=o),r=ci(t,x,f),r!==null&&(ns(r,t,f,p),Io(r,t,f))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var p=Hr(),f=Va(t),x=Ei(p,f);x.tag=1,x.payload=r,o!=null&&(x.callback=o),r=ci(t,x,f),r!==null&&(ns(r,t,f,p),Io(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Hr(),p=Va(t),f=Ei(o,p);f.tag=2,r!=null&&(f.callback=r),r=ci(t,f,p),r!==null&&(ns(r,t,p,o),Io(r,t,p))}};function Uc(t,r,o,p,f,x,R){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(p,x,R):r.prototype&&r.prototype.isPureReactComponent?!ka(o,p)||!ka(f,x):!0}function qc(t,r,o){var p=!1,f=ks,x=r.contextType;return typeof x=="object"&&x!==null?x=Wr(x):(f=ar(r)?Qi:Vn.current,p=r.contextTypes,x=(p=p!=null)?Na(t,f):ks),r=new r(o,x),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wo,t.stateNode=r,r._reactInternals=t,p&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=x),r}function $c(t,r,o,p){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,p),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,p),r.state!==t&&Wo.enqueueReplaceState(r,r.state,null)}function Ou(t,r,o,p){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},jl(t);var x=r.contextType;typeof x=="object"&&x!==null?f.context=Wr(x):(x=ar(r)?Qi:Vn.current,f.context=Na(t,x)),f.state=t.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Iu(t,r,x,o),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Wo.enqueueReplaceState(f,f.state,null),Nl(t,o,f,p),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,r){try{var o="",p=r;do o+=qe(p),p=p.return;while(p);var f=o}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:r,stack:f,digest:null}}function Du(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Mu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Kc=typeof WeakMap=="function"?WeakMap:Map;function Il(t,r,o){o=Ei(-1,o),o.tag=3,o.payload={element:null};var p=r.value;return o.callback=function(){Zc||(Zc=!0,hp=p),Mu(t,r)},o}function zu(t,r,o){o=Ei(-1,o),o.tag=3;var p=t.type.getDerivedStateFromError;if(typeof p=="function"){var f=r.value;o.payload=function(){return p(f)},o.callback=function(){Mu(t,r)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){Mu(t,r),typeof p!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),o}function Gc(t,r,o){var p=t.pingCache;if(p===null){p=t.pingCache=new Kc;var f=new Set;p.set(r,f)}else f=p.get(r),f===void 0&&(f=new Set,p.set(r,f));f.has(o)||(f.add(o),t=ig.bind(null,t,r,o),r.then(t,t))}function Fu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function aa(t,r,o,p,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ei(-1,1),r.tag=2,ci(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Yc=W.ReactCurrentOwner,er=!1;function vr(t,r,o,p){r.child=t===null?Po(r,null,o,p):Cs(r,t.child,o,p)}function Vc(t,r,o,p,f){o=o.render;var x=r.ref;return Js(r,f),p=Al(t,r,o,p,x,f),o=ku(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(rn&&o&&Gs(r),r.flags|=1,vr(t,r,p,f),r.child)}function Jc(t,r,o,p,f){if(t===null){var x=o.type;return typeof x=="function"&&!bp(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=x,en(t,r,x,p,f)):(t=sd(o.type,null,p,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(x=t.child,(t.lanes&f)===0){var R=x.memoizedProps;if(o=o.compare,o=o!==null?o:ka,o(R,p)&&t.ref===r.ref)return Ar(t,r,f)}return r.flags|=1,t=Xa(x,p),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,o,p,f){if(t!==null){var x=t.memoizedProps;if(ka(x,p)&&t.ref===r.ref)if(er=!1,r.pendingProps=p=x,(t.lanes&f)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Ar(t,r,f)}return oa(t,r,o,p,f)}function Xc(t,r,o){var p=r.pendingProps,f=p.children,x=t!==null?t.memoizedState:null;if(p.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=o;else{if((o&1073741824)===0)return t=x!==null?x.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=x!==null?x.baseLanes:o,Zt(wr,Ut),Ut|=p}else x!==null?(p=x.baseLanes|o,r.memoizedState=null):p=o,Zt(wr,Ut),Ut|=p;return vr(t,r,f,o),r.child}function Ol(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function oa(t,r,o,p,f){var x=ar(o)?Qi:Vn.current;return x=Na(r,x),Js(r,f),o=Al(t,r,o,p,x,f),p=ku(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Ar(t,r,f)):(rn&&p&&Gs(r),r.flags|=1,vr(t,r,o,f),r.child)}function Zr(t,r,o,p,f){if(ar(o)){var x=!0;La(r)}else x=!1;if(Js(r,f),r.stateNode===null)Bl(t,r),qc(r,o,p),Ou(r,o,p,f),p=!0;else if(t===null){var R=r.stateNode,Y=r.memoizedProps;R.props=Y;var ee=R.context,me=o.contextType;typeof me=="object"&&me!==null?me=Wr(me):(me=ar(o)?Qi:Vn.current,me=Na(r,me));var Ae=o.getDerivedStateFromProps,De=typeof Ae=="function"||typeof R.getSnapshotBeforeUpdate=="function";De||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(Y!==p||ee!==me)&&$c(r,R,p,me),Zi=!1;var Le=r.memoizedState;R.state=Le,Nl(r,p,R,f),ee=r.memoizedState,Y!==p||Le!==ee||mr.current||Zi?(typeof Ae=="function"&&(Iu(r,o,Ae,p),ee=r.memoizedState),(Y=Zi||Uc(r,o,Y,p,Le,ee,me))?(De||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=p,r.memoizedState=ee),R.props=p,R.state=ee,R.context=me,p=Y):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),p=!1)}else{R=r.stateNode,Xs(t,r),Y=r.memoizedProps,me=r.type===r.elementType?Y:yr(r.type,Y),R.props=me,De=r.pendingProps,Le=R.context,ee=o.contextType,typeof ee=="object"&&ee!==null?ee=Wr(ee):(ee=ar(o)?Qi:Vn.current,ee=Na(r,ee));var Xe=o.getDerivedStateFromProps;(Ae=typeof Xe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(Y!==De||Le!==ee)&&$c(r,R,p,ee),Zi=!1,Le=r.memoizedState,R.state=Le,Nl(r,p,R,f);var it=r.memoizedState;Y!==De||Le!==it||mr.current||Zi?(typeof Xe=="function"&&(Iu(r,o,Xe,p),it=r.memoizedState),(me=Zi||Uc(r,o,me,p,Le,it,ee)||!1)?(Ae||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(p,it,ee),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(p,it,ee)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||Y===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||Y===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),r.memoizedProps=p,r.memoizedState=it),R.props=p,R.state=it,R.context=ee,p=me):(typeof R.componentDidUpdate!="function"||Y===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||Y===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),p=!1)}return Ka(t,r,o,p,x,f)}function Ka(t,r,o,p,f,x){Ol(t,r);var R=(r.flags&128)!==0;if(!p&&!R)return f&&yu(r,o,!1),Ar(t,r,x);p=r.stateNode,Yc.current=r;var Y=R&&typeof o.getDerivedStateFromError!="function"?null:p.render();return r.flags|=1,t!==null&&R?(r.child=Cs(r,t.child,null,x),r.child=Cs(r,null,Y,x)):vr(t,r,Y,x),r.memoizedState=p.state,f&&yu(r,o,!0),r.child}function Dl(t){var r=t.stateNode;r.pendingContext?mu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&mu(t,r.context,!1),Zs(t,r.containerInfo)}function Wu(t,r,o,p,f){return Aa(),Ra(f),r.flags|=256,vr(t,r,o,p),r.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function zl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fl(t,r,o){var p=r.pendingProps,f=ln.current,x=!1,R=(r.flags&128)!==0,Y;if((Y=R)||(Y=t!==null&&t.memoizedState===null?!1:(f&2)!==0),Y?(x=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Zt(ln,f&1),t===null)return _l(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=p.children,t=p.fallback,x?(p=r.mode,x=r.child,R={mode:"hidden",children:R},(p&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=R):x=ad(R,p,0,null),t=Go(t,p,o,null),x.return=r,t.return=r,x.sibling=t,r.child=x,r.child.memoizedState=zl(o),r.memoizedState=Ml,t):Wl(r,R));if(f=t.memoizedState,f!==null&&(Y=f.dehydrated,Y!==null))return Hu(t,r,R,p,Y,f,o);if(x){x=p.fallback,R=r.mode,f=t.child,Y=f.sibling;var ee={mode:"hidden",children:p.children};return(R&1)===0&&r.child!==f?(p=r.child,p.childLanes=0,p.pendingProps=ee,r.deletions=null):(p=Xa(f,ee),p.subtreeFlags=f.subtreeFlags&14680064),Y!==null?x=Xa(Y,x):(x=Go(x,R,o,null),x.flags|=2),x.return=r,p.return=r,p.sibling=x,r.child=p,p=x,x=r.child,R=t.child.memoizedState,R=R===null?zl(o):{baseLanes:R.baseLanes|o,cachePool:null,transitions:R.transitions},x.memoizedState=R,x.childLanes=t.childLanes&~o,r.memoizedState=Ml,p}return x=t.child,t=x.sibling,p=Xa(x,{mode:"visible",children:p.children}),(r.mode&1)===0&&(p.lanes=o),p.return=r,p.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=p,r.memoizedState=null,p}function Wl(t,r){return r=ad({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Hl(t,r,o,p){return p!==null&&Ra(p),Cs(r,t.child,null,o),t=Wl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Hu(t,r,o,p,f,x,R){if(o)return r.flags&256?(r.flags&=-257,p=Du(Error(d(422))),Hl(t,r,R,p)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(x=p.fallback,f=r.mode,p=ad({mode:"visible",children:p.children},f,0,null),x=Go(x,f,R,null),x.flags|=2,p.return=r,x.return=r,p.sibling=x,r.child=p,(r.mode&1)!==0&&Cs(r,t.child,null,R),r.child.memoizedState=zl(R),r.memoizedState=Ml,x);if((r.mode&1)===0)return Hl(t,r,R,null);if(f.data==="$!"){if(p=f.nextSibling&&f.nextSibling.dataset,p)var Y=p.dgst;return p=Y,x=Error(d(419)),p=Du(x,p,void 0),Hl(t,r,R,p)}if(Y=(R&t.childLanes)!==0,er||Y){if(p=zt,p!==null){switch(R&-R){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(p.suspendedLanes|R))!==0?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,Ni(t,f),ns(p,t,f,-1))}return xp(),p=Du(Error(d(421))),Hl(t,r,R,p)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=sg.bind(null,t),f._reactRetry=r,null):(t=x.treeContext,Pn=bs(f.nextSibling),gr=r,rn=!0,Jr=null,t!==null&&(zn[Fn++]=ui,zn[Fn++]=ji,zn[Fn++]=_s,ui=t.id,ji=t.overflow,_s=r),r=Wl(r,p.children),r.flags|=4096,r)}function Bu(t,r,o){t.lanes|=r;var p=t.alternate;p!==null&&(p.lanes|=r),Oa(t.return,r,o)}function Dt(t,r,o,p,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:p,tail:o,tailMode:f}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=p,x.tail=o,x.tailMode=f)}function Uu(t,r,o){var p=r.pendingProps,f=p.revealOrder,x=p.tail;if(vr(t,r,p.children,o),p=ln.current,(p&2)!==0)p=p&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bu(t,o,r);else if(t.tag===19)Bu(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}p&=1}if(Zt(ln,p),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)t=o.alternate,t!==null&&hi(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Dt(r,!1,f,o,x);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&hi(t)===null){r.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Dt(r,!0,o,null,x);break;case"together":Dt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Ar(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,o=Xa(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Xa(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function pp(t,r,o){switch(r.tag){case 3:Dl(r),Aa();break;case 5:bu(r);break;case 1:ar(r.type)&&La(r);break;case 4:Zs(r,r.stateNode.containerInfo);break;case 10:var p=r.type._context,f=r.memoizedProps.value;Zt(Ao,p._currentValue),p._currentValue=f;break;case 13:if(p=r.memoizedState,p!==null)return p.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Fl(t,r,o):(Zt(ln,ln.current&1),t=Ar(t,r,o),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(p=(o&r.childLanes)!==0,(t.flags&128)!==0){if(p)return Uu(t,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Zt(ln,ln.current),p)break;return null;case 22:case 23:return r.lanes=0,Xc(t,r,o)}return Ar(t,r,o)}var Ho,qu,fn,Qc;Ho=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},qu=function(){},fn=function(t,r,o,p){var f=t.memoizedProps;if(f!==p){t=r.stateNode,pi(di.current);var x=null;switch(o){case"input":f=Ct(t,f),p=Ct(t,p),x=[];break;case"select":f=q({},f,{value:void 0}),p=q({},p,{value:void 0}),x=[];break;case"textarea":f=ae(t,f),p=ae(t,p),x=[];break;default:typeof f.onClick!="function"&&typeof p.onClick=="function"&&(t.onclick=xs)}qr(o,p);var R;o=null;for(me in f)if(!p.hasOwnProperty(me)&&f.hasOwnProperty(me)&&f[me]!=null)if(me==="style"){var Y=f[me];for(R in Y)Y.hasOwnProperty(R)&&(o||(o={}),o[R]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(y.hasOwnProperty(me)?x||(x=[]):(x=x||[]).push(me,null));for(me in p){var ee=p[me];if(Y=f!=null?f[me]:void 0,p.hasOwnProperty(me)&&ee!==Y&&(ee!=null||Y!=null))if(me==="style")if(Y){for(R in Y)!Y.hasOwnProperty(R)||ee&&ee.hasOwnProperty(R)||(o||(o={}),o[R]="");for(R in ee)ee.hasOwnProperty(R)&&Y[R]!==ee[R]&&(o||(o={}),o[R]=ee[R])}else o||(x||(x=[]),x.push(me,o)),o=ee;else me==="dangerouslySetInnerHTML"?(ee=ee?ee.__html:void 0,Y=Y?Y.__html:void 0,ee!=null&&Y!==ee&&(x=x||[]).push(me,ee)):me==="children"?typeof ee!="string"&&typeof ee!="number"||(x=x||[]).push(me,""+ee):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(y.hasOwnProperty(me)?(ee!=null&&me==="onScroll"&&Wt("scroll",t),x||Y===ee||(x=[])):(x=x||[]).push(me,ee))}o&&(x=x||[]).push("style",o);var me=x;(r.updateQueue=me)&&(r.flags|=4)}},Qc=function(t,r,o,p){o!==p&&(r.flags|=4)};function Bo(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var p=null;o!==null;)o.alternate!==null&&(p=o),o=o.sibling;p===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:p.sibling=null}}function or(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,p=0;if(r)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,p|=f.subtreeFlags&14680064,p|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,p|=f.subtreeFlags,p|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=p,t.childLanes=o,r}function Ul(t,r,o){var p=r.pendingProps;switch(Sl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return or(r),null;case 1:return ar(r.type)&&Ea(),or(r),null;case 3:return p=r.stateNode,Li(),nn(mr),nn(Vn),ea(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(t===null||t.child===null)&&(Eo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Jr!==null&&(gp(Jr),Jr=null))),qu(t,r),or(r),null;case 5:wu(r);var f=pi(es.current);if(o=r.type,t!==null&&r.stateNode!=null)fn(t,r,o,p,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!p){if(r.stateNode===null)throw Error(d(166));return or(r),null}if(t=pi(di.current),Eo(r)){p=r.stateNode,o=r.type;var x=r.memoizedProps;switch(p[Ci]=r,p[To]=x,t=(r.mode&1)!==0,o){case"dialog":Wt("cancel",p),Wt("close",p);break;case"iframe":case"object":case"embed":Wt("load",p);break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],p);break;case"source":Wt("error",p);break;case"img":case"image":case"link":Wt("error",p),Wt("load",p);break;case"details":Wt("toggle",p);break;case"input":xt(p,x),Wt("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!x.multiple},Wt("invalid",p);break;case"textarea":Te(p,x),Wt("invalid",p)}qr(o,x),f=null;for(var R in x)if(x.hasOwnProperty(R)){var Y=x[R];R==="children"?typeof Y=="string"?p.textContent!==Y&&(x.suppressHydrationWarning!==!0&&_o(p.textContent,Y,t),f=["children",Y]):typeof Y=="number"&&p.textContent!==""+Y&&(x.suppressHydrationWarning!==!0&&_o(p.textContent,Y,t),f=["children",""+Y]):y.hasOwnProperty(R)&&Y!=null&&R==="onScroll"&&Wt("scroll",p)}switch(o){case"input":Ke(p),vt(p,x,!0);break;case"textarea":Ke(p),kt(p);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(p.onclick=xs)}p=f,r.updateQueue=p,p!==null&&(r.flags|=4)}else{R=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=R.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof p.is=="string"?t=R.createElement(o,{is:p.is}):(t=R.createElement(o),o==="select"&&(R=t,p.multiple?R.multiple=!0:p.size&&(R.size=p.size))):t=R.createElementNS(t,o),t[Ci]=r,t[To]=p,Ho(t,r,!1,!1),r.stateNode=t;e:{switch(R=bt(o,p),o){case"dialog":Wt("cancel",t),Wt("close",t),f=p;break;case"iframe":case"object":case"embed":Wt("load",t),f=p;break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],t);f=p;break;case"source":Wt("error",t),f=p;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=p;break;case"details":Wt("toggle",t),f=p;break;case"input":xt(t,p),f=Ct(t,p),Wt("invalid",t);break;case"option":f=p;break;case"select":t._wrapperState={wasMultiple:!!p.multiple},f=q({},p,{value:void 0}),Wt("invalid",t);break;case"textarea":Te(t,p),f=ae(t,p),Wt("invalid",t);break;default:f=p}qr(o,f),Y=f;for(x in Y)if(Y.hasOwnProperty(x)){var ee=Y[x];x==="style"?Ir(t,ee):x==="dangerouslySetInnerHTML"?(ee=ee?ee.__html:void 0,ee!=null&&mt(t,ee)):x==="children"?typeof ee=="string"?(o!=="textarea"||ee!=="")&&pt(t,ee):typeof ee=="number"&&pt(t,""+ee):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(y.hasOwnProperty(x)?ee!=null&&x==="onScroll"&&Wt("scroll",t):ee!=null&&U(t,x,ee,R))}switch(o){case"input":Ke(t),vt(t,p,!1);break;case"textarea":Ke(t),kt(t);break;case"option":p.value!=null&&t.setAttribute("value",""+Be(p.value));break;case"select":t.multiple=!!p.multiple,x=p.value,x!=null?ut(t,!!p.multiple,x,!1):p.defaultValue!=null&&ut(t,!!p.multiple,p.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=xs)}switch(o){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return or(r),null;case 6:if(t&&r.stateNode!=null)Qc(t,r,t.memoizedProps,p);else{if(typeof p!="string"&&r.stateNode===null)throw Error(d(166));if(o=pi(es.current),pi(di.current),Eo(r)){if(p=r.stateNode,o=r.memoizedProps,p[Ci]=r,(x=p.nodeValue!==o)&&(t=gr,t!==null))switch(t.tag){case 3:_o(p.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(p.nodeValue,o,(t.mode&1)!==0)}x&&(r.flags|=4)}else p=(o.nodeType===9?o:o.ownerDocument).createTextNode(p),p[Ci]=r,r.stateNode=p}return or(r),null;case 13:if(nn(ln),p=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ic(),Aa(),r.flags|=98560,x=!1;else if(x=Eo(r),p!==null&&p.dehydrated!==null){if(t===null){if(!x)throw Error(d(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(d(317));x[Ci]=r}else Aa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;or(r),x=!1}else Jr!==null&&(gp(Jr),Jr=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(p=p!==null,p!==(t!==null&&t.memoizedState!==null)&&p&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Lt===0&&(Lt=3):xp())),r.updateQueue!==null&&(r.flags|=4),or(r),null);case 4:return Li(),qu(t,r),t===null&&ys(r.stateNode.containerInfo),or(r),null;case 10:return Wn(r.type._context),or(r),null;case 17:return ar(r.type)&&Ea(),or(r),null;case 19:if(nn(ln),x=r.memoizedState,x===null)return or(r),null;if(p=(r.flags&128)!==0,R=x.rendering,R===null)if(p)Bo(x,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(R=hi(t),R!==null){for(r.flags|=128,Bo(x,!1),p=R.updateQueue,p!==null&&(r.updateQueue=p,r.flags|=4),r.subtreeFlags=0,p=o,o=r.child;o!==null;)x=o,t=p,x.flags&=14680066,R=x.alternate,R===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=R.childLanes,x.lanes=R.lanes,x.child=R.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=R.memoizedProps,x.memoizedState=R.memoizedState,x.updateQueue=R.updateQueue,x.type=R.type,t=R.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}x.tail!==null&&Rt()>ql&&(r.flags|=128,p=!0,Bo(x,!1),r.lanes=4194304)}else{if(!p)if(t=hi(R),t!==null){if(r.flags|=128,p=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Bo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!R.alternate&&!rn)return or(r),null}else 2*Rt()-x.renderingStartTime>ql&&o!==1073741824&&(r.flags|=128,p=!0,Bo(x,!1),r.lanes=4194304);x.isBackwards?(R.sibling=r.child,r.child=R):(o=x.last,o!==null?o.sibling=R:r.child=R,x.last=R)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Rt(),r.sibling=null,o=ln.current,Zt(ln,p?o&1|2:o&1),r):(or(r),null);case 22:case 23:return vp(),p=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==p&&(r.flags|=8192),p&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(or(r),r.subtreeFlags&6&&(r.flags|=8192)):or(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(Sl(r),r.tag){case 1:return ar(r.type)&&Ea(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Li(),nn(mr),nn(Vn),ea(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return wu(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Aa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Li(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,a=null;function h(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(p){Rn(t,r,p)}else o.current=null}function g(t,r,o){try{o()}catch(p){Rn(t,r,p)}}var b=!1;function w(t,r){if(xl=ne,t=du(),go(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var p=o.getSelection&&o.getSelection();if(p&&p.rangeCount!==0){o=p.anchorNode;var f=p.anchorOffset,x=p.focusNode;p=p.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var R=0,Y=-1,ee=-1,me=0,Ae=0,De=t,Le=null;t:for(;;){for(var Xe;De!==o||f!==0&&De.nodeType!==3||(Y=R+f),De!==x||p!==0&&De.nodeType!==3||(ee=R+p),De.nodeType===3&&(R+=De.nodeValue.length),(Xe=De.firstChild)!==null;)Le=De,De=Xe;for(;;){if(De===t)break t;if(Le===o&&++me===f&&(Y=R),Le===x&&++Ae===p&&(ee=R),(Xe=De.nextSibling)!==null)break;De=Le,Le=De.parentNode}De=Xe}o=Y===-1||ee===-1?null:{start:Y,end:ee}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vi={focusedElem:t,selectionRange:o},ne=!1,a=r;a!==null;)if(r=a,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,a=t;else for(;a!==null;){r=a;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,qn=it.memoizedState,ue=r.stateNode,re=ue.getSnapshotBeforeUpdate(r.elementType===r.type?st:yr(r.type,st),qn);ue.__reactInternalSnapshotBeforeUpdate=re}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(We){Rn(r,r.return,We)}if(t=r.sibling,t!==null){t.return=r.return,a=t;break}a=r.return}return it=b,b=!1,it}function C(t,r,o){var p=r.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var f=p=p.next;do{if((f.tag&t)===t){var x=f.destroy;f.destroy=void 0,x!==void 0&&g(r,o,x)}f=f.next}while(f!==p)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var p=o.create;o.destroy=p()}o=o.next}while(o!==r)}}function K(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function ie(t){var r=t.alternate;r!==null&&(t.alternate=null,ie(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ci],delete r[To],delete r[fu],delete r[op],delete r[lp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function te(t){return t.tag===5||t.tag===3||t.tag===4}function ye(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||te(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ke(t,r,o){var p=t.tag;if(p===5||p===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=xs));else if(p!==4&&(t=t.child,t!==null))for(ke(t,r,o),t=t.sibling;t!==null;)ke(t,r,o),t=t.sibling}function Pe(t,r,o){var p=t.tag;if(p===5||p===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(p!==4&&(t=t.child,t!==null))for(Pe(t,r,o),t=t.sibling;t!==null;)Pe(t,r,o),t=t.sibling}var Ne=null,Fe=!1;function Me(t,r,o){for(o=o.child;o!==null;)Ge(t,r,o),o=o.sibling}function Ge(t,r,o){if(N&&typeof N.onCommitFiberUnmount=="function")try{N.onCommitFiberUnmount(Gn,o)}catch{}switch(o.tag){case 5:s||h(o,r);case 6:var p=Ne,f=Fe;Ne=null,Me(t,r,o),Ne=p,Fe=f,Ne!==null&&(Fe?(t=Ne,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ne.removeChild(o.stateNode));break;case 18:Ne!==null&&(Fe?(t=Ne,o=o.stateNode,t.nodeType===8?bl(t.parentNode,o):t.nodeType===1&&bl(t,o),_e(t)):bl(Ne,o.stateNode));break;case 4:p=Ne,f=Fe,Ne=o.stateNode.containerInfo,Fe=!0,Me(t,r,o),Ne=p,Fe=f;break;case 0:case 11:case 14:case 15:if(!s&&(p=o.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){f=p=p.next;do{var x=f,R=x.destroy;x=x.tag,R!==void 0&&((x&2)!==0||(x&4)!==0)&&g(o,r,R),f=f.next}while(f!==p)}Me(t,r,o);break;case 1:if(!s&&(h(o,r),p=o.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=o.memoizedProps,p.state=o.memoizedState,p.componentWillUnmount()}catch(Y){Rn(o,r,Y)}Me(t,r,o);break;case 21:Me(t,r,o);break;case 22:o.mode&1?(s=(p=s)||o.memoizedState!==null,Me(t,r,o),s=p):Me(t,r,o);break;default:Me(t,r,o)}}function ot(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new i),r.forEach(function(p){var f=ag.bind(null,t,p);o.has(p)||(o.add(p),p.then(f,f))})}}function Ve(t,r){var o=r.deletions;if(o!==null)for(var p=0;p<o.length;p++){var f=o[p];try{var x=t,R=r,Y=R;e:for(;Y!==null;){switch(Y.tag){case 5:Ne=Y.stateNode,Fe=!1;break e;case 3:Ne=Y.stateNode.containerInfo,Fe=!0;break e;case 4:Ne=Y.stateNode.containerInfo,Fe=!0;break e}Y=Y.return}if(Ne===null)throw Error(d(160));Ge(x,R,f),Ne=null,Fe=!1;var ee=f.alternate;ee!==null&&(ee.return=null),f.return=null}catch(me){Rn(f,r,me)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)St(r,t),r=r.sibling}function St(t,r){var o=t.alternate,p=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Et(t),p&4){try{C(3,t,t.return),z(3,t)}catch(st){Rn(t,t.return,st)}try{C(5,t,t.return)}catch(st){Rn(t,t.return,st)}}break;case 1:Ve(r,t),Et(t),p&512&&o!==null&&h(o,o.return);break;case 5:if(Ve(r,t),Et(t),p&512&&o!==null&&h(o,o.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(st){Rn(t,t.return,st)}}if(p&4&&(f=t.stateNode,f!=null)){var x=t.memoizedProps,R=o!==null?o.memoizedProps:x,Y=t.type,ee=t.updateQueue;if(t.updateQueue=null,ee!==null)try{Y==="input"&&x.type==="radio"&&x.name!=null&&tt(f,x),bt(Y,R);var me=bt(Y,x);for(R=0;R<ee.length;R+=2){var Ae=ee[R],De=ee[R+1];Ae==="style"?Ir(f,De):Ae==="dangerouslySetInnerHTML"?mt(f,De):Ae==="children"?pt(f,De):U(f,Ae,De,me)}switch(Y){case"input":Ue(f,x);break;case"textarea":he(f,x);break;case"select":var Le=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var Xe=x.value;Xe!=null?ut(f,!!x.multiple,Xe,!1):Le!==!!x.multiple&&(x.defaultValue!=null?ut(f,!!x.multiple,x.defaultValue,!0):ut(f,!!x.multiple,x.multiple?[]:"",!1))}f[To]=x}catch(st){Rn(t,t.return,st)}}break;case 6:if(Ve(r,t),Et(t),p&4){if(t.stateNode===null)throw Error(d(162));f=t.stateNode,x=t.memoizedProps;try{f.nodeValue=x}catch(st){Rn(t,t.return,st)}}break;case 3:if(Ve(r,t),Et(t),p&4&&o!==null&&o.memoizedState.isDehydrated)try{_e(r.containerInfo)}catch(st){Rn(t,t.return,st)}break;case 4:Ve(r,t),Et(t);break;case 13:Ve(r,t),Et(t),f=t.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Uo=Rt())),p&4&&ot(t);break;case 22:if(Ae=o!==null&&o.memoizedState!==null,t.mode&1?(s=(me=s)||Ae,Ve(r,t),s=me):Ve(r,t),Et(t),p&8192){if(me=t.memoizedState!==null,(t.stateNode.isHidden=me)&&!Ae&&(t.mode&1)!==0)for(a=t,Ae=t.child;Ae!==null;){for(De=a=Ae;a!==null;){switch(Le=a,Xe=Le.child,Le.tag){case 0:case 11:case 14:case 15:C(4,Le,Le.return);break;case 1:h(Le,Le.return);var it=Le.stateNode;if(typeof it.componentWillUnmount=="function"){p=Le,o=Le.return;try{r=p,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){Rn(p,o,st)}}break;case 5:h(Le,Le.return);break;case 22:if(Le.memoizedState!==null){lr(De);continue}}Xe!==null?(Xe.return=Le,a=Xe):lr(De)}Ae=Ae.sibling}e:for(Ae=null,De=t;;){if(De.tag===5){if(Ae===null){Ae=De;try{f=De.stateNode,me?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(Y=De.stateNode,ee=De.memoizedProps.style,R=ee!=null&&ee.hasOwnProperty("display")?ee.display:null,Y.style.display=_r("display",R))}catch(st){Rn(t,t.return,st)}}}else if(De.tag===6){if(Ae===null)try{De.stateNode.nodeValue=me?"":De.memoizedProps}catch(st){Rn(t,t.return,st)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===t)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===t)break e;for(;De.sibling===null;){if(De.return===null||De.return===t)break e;Ae===De&&(Ae=null),De=De.return}Ae===De&&(Ae=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Ve(r,t),Et(t),p&4&&ot(t);break;case 21:break;default:Ve(r,t),Et(t)}}function Et(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(te(o)){var p=o;break e}o=o.return}throw Error(d(160))}switch(p.tag){case 5:var f=p.stateNode;p.flags&32&&(pt(f,""),p.flags&=-33);var x=ye(t);Pe(t,x,f);break;case 3:case 4:var R=p.stateNode.containerInfo,Y=ye(t);ke(t,Y,R);break;default:throw Error(d(161))}}catch(ee){Rn(t,t.return,ee)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,o){a=t,sn(t)}function sn(t,r,o){for(var p=(t.mode&1)!==0;a!==null;){var f=a,x=f.child;if(f.tag===22&&p){var R=f.memoizedState!==null||n;if(!R){var Y=f.alternate,ee=Y!==null&&Y.memoizedState!==null||s;Y=n;var me=s;if(n=R,(s=ee)&&!me)for(a=f;a!==null;)R=a,ee=R.child,R.tag===22&&R.memoizedState!==null?yn(f):ee!==null?(ee.return=R,a=ee):yn(f);for(;x!==null;)a=x,sn(x),x=x.sibling;a=f,n=Y,s=me}xr(t)}else(f.subtreeFlags&8772)!==0&&x!==null?(x.return=f,a=x):xr(t)}}function xr(t){for(;a!==null;){var r=a;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var p=r.stateNode;if(r.flags&4&&!s)if(o===null)p.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:yr(r.type,o.memoizedProps);p.componentDidUpdate(f,o.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Qs(r,x,p);break;case 3:var R=r.updateQueue;if(R!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Qs(r,R,o)}break;case 5:var Y=r.stateNode;if(o===null&&r.flags&4){o=Y;var ee=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":ee.autoFocus&&o.focus();break;case"img":ee.src&&(o.src=ee.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var me=r.alternate;if(me!==null){var Ae=me.memoizedState;if(Ae!==null){var De=Ae.dehydrated;De!==null&&_e(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}s||r.flags&512&&K(r)}catch(Le){Rn(r,r.return,Le)}}if(r===t){a=null;break}if(o=r.sibling,o!==null){o.return=r.return,a=o;break}a=r.return}}function lr(t){for(;a!==null;){var r=a;if(r===t){a=null;break}var o=r.sibling;if(o!==null){o.return=r.return,a=o;break}a=r.return}}function yn(t){for(;a!==null;){var r=a;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{z(4,r)}catch(ee){Rn(r,o,ee)}break;case 1:var p=r.stateNode;if(typeof p.componentDidMount=="function"){var f=r.return;try{p.componentDidMount()}catch(ee){Rn(r,f,ee)}}var x=r.return;try{K(r)}catch(ee){Rn(r,x,ee)}break;case 5:var R=r.return;try{K(r)}catch(ee){Rn(r,R,ee)}}}catch(ee){Rn(r,r.return,ee)}if(r===t){a=null;break}var Y=r.sibling;if(Y!==null){Y.return=r.return,a=Y;break}a=r.return}}var br=Math.ceil,Tn=W.ReactCurrentDispatcher,vn=W.ReactCurrentOwner,Mt=W.ReactCurrentBatchConfig,dt=0,zt=null,an=null,un=0,Ut=0,wr=li(0),Lt=0,la=null,kr=0,Ri=0,ts=0,An=null,Un=null,Uo=0,ql=1/0,ua=null,Zc=!1,hp=null,Ga=null,ed=!1,Ya=null,td=0,$u=0,fp=null,nd=-1,rd=0;function Hr(){return(dt&6)!==0?Rt():nd!==-1?nd:nd=Rt()}function Va(t){return(t.mode&1)===0?1:(dt&2)!==0&&un!==0?un&-un:Oc.transition!==null?(rd===0&&(rd=ro()),rd):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:cn(t.type)),t)}function ns(t,r,o,p){if(50<$u)throw $u=0,fp=null,Error(d(185));rr(t,o,p),((dt&2)===0||t!==zt)&&(t===zt&&((dt&2)===0&&(Ri|=o),Lt===4&&Ja(t,un)),ei(t,p),o===1&&dt===0&&(r.mode&1)===0&&(ql=Rt()+500,wl&&Ss()))}function ei(t,r){var o=t.callbackNode;gt(t,r);var p=Kr(t,t===zt?un:0);if(p===0)o!==null&&Bt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=p&-p,t.callbackPriority!==r){if(o!=null&&Bt(o),r===1)t.tag===0?Pc(Nh.bind(null,t)):Ti(Nh.bind(null,t)),Ec(function(){(dt&6)===0&&Ss()}),o=null;else{switch(ds(p)){case 1:o=ii;break;case 4:o=Vt;break;case 16:o=Je;break;case 536870912:o=cs;break;default:o=Je}o=Dh(o,jh.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function jh(t,r){if(nd=-1,rd=0,(dt&6)!==0)throw Error(d(327));var o=t.callbackNode;if($l()&&t.callbackNode!==o)return null;var p=Kr(t,t===zt?un:0);if(p===0)return null;if((p&30)!==0||(p&t.expiredLanes)!==0||r)r=id(t,p);else{r=p;var f=dt;dt|=2;var x=Lh();(zt!==t||un!==r)&&(ua=null,ql=Rt()+500,$o(t,r));do try{ng();break}catch(Y){Eh(t,Y)}while(!0);Tl(),Tn.current=x,dt=f,an!==null?r=0:(zt=null,un=0,r=Lt)}if(r!==0){if(r===2&&(f=no(t),f!==0&&(p=f,r=mp(t,f))),r===1)throw o=la,$o(t,0),Ja(t,p),ei(t,Rt()),o;if(r===6)Ja(t,p);else{if(f=t.current.alternate,(p&30)===0&&!eg(f)&&(r=id(t,p),r===2&&(x=no(t),x!==0&&(p=x,r=mp(t,x))),r===1))throw o=la,$o(t,0),Ja(t,p),ei(t,Rt()),o;switch(t.finishedWork=f,t.finishedLanes=p,r){case 0:case 1:throw Error(d(345));case 2:Ko(t,Un,ua);break;case 3:if(Ja(t,p),(p&130023424)===p&&(r=Uo+500-Rt(),10<r)){if(Kr(t,0)!==0)break;if(f=t.suspendedLanes,(f&p)!==p){Hr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ji(Ko.bind(null,t,Un,ua),r);break}Ko(t,Un,ua);break;case 4:if(Ja(t,p),(p&4194240)===p)break;for(r=t.eventTimes,f=-1;0<p;){var R=31-ge(p);x=1<<R,R=r[R],R>f&&(f=R),p&=~x}if(p=f,p=Rt()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*br(p/1960))-p,10<p){t.timeoutHandle=Ji(Ko.bind(null,t,Un,ua),p);break}Ko(t,Un,ua);break;case 5:Ko(t,Un,ua);break;default:throw Error(d(329))}}}return ei(t,Rt()),t.callbackNode===o?jh.bind(null,t):null}function mp(t,r){var o=An;return t.current.memoizedState.isDehydrated&&($o(t,r).flags|=256),t=id(t,r),t!==2&&(r=Un,Un=o,r!==null&&gp(r)),t}function gp(t){Un===null?Un=t:Un.push.apply(Un,t)}function eg(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var p=0;p<o.length;p++){var f=o[p],x=f.getSnapshot;f=f.value;try{if(!_n(x(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ja(t,r){for(r&=~ts,r&=~Ri,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-ge(r),p=1<<o;t[o]=-1,r&=~p}}function Nh(t){if((dt&6)!==0)throw Error(d(327));$l();var r=Kr(t,0);if((r&1)===0)return ei(t,Rt()),null;var o=id(t,r);if(t.tag!==0&&o===2){var p=no(t);p!==0&&(r=p,o=mp(t,p))}if(o===1)throw o=la,$o(t,0),Ja(t,r),ei(t,Rt()),o;if(o===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Ko(t,Un,ua),ei(t,Rt()),null}function yp(t,r){var o=dt;dt|=1;try{return t(r)}finally{dt=o,dt===0&&(ql=Rt()+500,wl&&Ss())}}function qo(t){Ya!==null&&Ya.tag===0&&(dt&6)===0&&$l();var r=dt;dt|=1;var o=Mt.transition,p=Nt;try{if(Mt.transition=null,Nt=1,t)return t()}finally{Nt=p,Mt.transition=o,dt=r,(dt&6)===0&&Ss()}}function vp(){Ut=wr.current,nn(wr)}function $o(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Co(o)),an!==null)for(o=an.return;o!==null;){var p=o;switch(Sl(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&Ea();break;case 3:Li(),nn(mr),nn(Vn),ea();break;case 5:wu(p);break;case 4:Li();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Wn(p.type._context);break;case 22:case 23:vp()}o=o.return}if(zt=t,an=t=Xa(t.current,null),un=Ut=r,Lt=0,la=null,ts=Ri=kr=0,Un=An=null,Ts!==null){for(r=0;r<Ts.length;r++)if(o=Ts[r],p=o.interleaved,p!==null){o.interleaved=null;var f=p.next,x=o.pending;if(x!==null){var R=x.next;x.next=f,p.next=R}o.pending=p}Ts=null}return t}function Eh(t,r){do{var o=an;try{if(Tl(),El.current=zo,Oo){for(var p=hn.memoizedState;p!==null;){var f=p.queue;f!==null&&(f.pending=null),p=p.next}Oo=!1}if(ta=0,Ot=Hn=hn=null,Do=!1,Mo=0,vn.current=null,o===null||o.return===null){Lt=1,la=r,an=null;break}e:{var x=t,R=o.return,Y=o,ee=r;if(r=un,Y.flags|=32768,ee!==null&&typeof ee=="object"&&typeof ee.then=="function"){var me=ee,Ae=Y,De=Ae.tag;if((Ae.mode&1)===0&&(De===0||De===11||De===15)){var Le=Ae.alternate;Le?(Ae.updateQueue=Le.updateQueue,Ae.memoizedState=Le.memoizedState,Ae.lanes=Le.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var Xe=Fu(R);if(Xe!==null){Xe.flags&=-257,aa(Xe,R,Y,x,r),Xe.mode&1&&Gc(x,me,r),r=Xe,ee=me;var it=r.updateQueue;if(it===null){var st=new Set;st.add(ee),r.updateQueue=st}else it.add(ee);break e}else{if((r&1)===0){Gc(x,me,r),xp();break e}ee=Error(d(426))}}else if(rn&&Y.mode&1){var qn=Fu(R);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),aa(qn,R,Y,x,r),Ra(sa(ee,Y));break e}}x=ee=sa(ee,Y),Lt!==4&&(Lt=2),An===null?An=[x]:An.push(x),x=R;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var ue=Il(x,ee,r);Da(x,ue);break e;case 1:Y=ee;var re=x.type,de=x.stateNode;if((x.flags&128)===0&&(typeof re.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Ga===null||!Ga.has(de)))){x.flags|=65536,r&=-r,x.lanes|=r;var We=zu(x,Y,r);Da(x,We);break e}}x=x.return}while(x!==null)}Ah(o)}catch(lt){r=lt,an===o&&o!==null&&(an=o=o.return);continue}break}while(!0)}function Lh(){var t=Tn.current;return Tn.current=zo,t===null?zo:t}function xp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||(kr&268435455)===0&&(Ri&268435455)===0||Ja(zt,un)}function id(t,r){var o=dt;dt|=2;var p=Lh();(zt!==t||un!==r)&&(ua=null,$o(t,r));do try{tg();break}catch(f){Eh(t,f)}while(!0);if(Tl(),dt=o,Tn.current=p,an!==null)throw Error(d(261));return zt=null,un=0,Lt}function tg(){for(;an!==null;)Ph(an)}function ng(){for(;an!==null&&!Mr();)Ph(an)}function Ph(t){var r=Oh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Ah(t):an=r,vn.current=null}function Ah(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Ul(o,r,Ut),o!==null){an=o;return}}else{if(o=e(o,r),o!==null){o.flags&=32767,an=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=t}while(r!==null);Lt===0&&(Lt=5)}function Ko(t,r,o){var p=Nt,f=Mt.transition;try{Mt.transition=null,Nt=1,rg(t,r,o,p)}finally{Mt.transition=f,Nt=p}return null}function rg(t,r,o,p){do $l();while(Ya!==null);if((dt&6)!==0)throw Error(d(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var x=o.lanes|o.childLanes;if(io(t,x),t===zt&&(an=zt=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ed||(ed=!0,Dh(Je,function(){return $l(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=Mt.transition,Mt.transition=null;var R=Nt;Nt=1;var Y=dt;dt|=4,vn.current=null,w(t,o),St(o,t),rp(Vi),ne=!!xl,Vi=xl=null,t.current=o,Bn(o),us(),dt=Y,Nt=R,Mt.transition=x}else t.current=o;if(ed&&(ed=!1,Ya=t,td=f),x=t.pendingLanes,x===0&&(Ga=null),$(o.stateNode),ei(t,Rt()),r!==null)for(p=t.onRecoverableError,o=0;o<r.length;o++)f=r[o],p(f.value,{componentStack:f.stack,digest:f.digest});if(Zc)throw Zc=!1,t=hp,hp=null,t;return(td&1)!==0&&t.tag!==0&&$l(),x=t.pendingLanes,(x&1)!==0?t===fp?$u++:($u=0,fp=t):$u=0,Ss(),null}function $l(){if(Ya!==null){var t=ds(td),r=Mt.transition,o=Nt;try{if(Mt.transition=null,Nt=16>t?16:t,Ya===null)var p=!1;else{if(t=Ya,Ya=null,td=0,(dt&6)!==0)throw Error(d(331));var f=dt;for(dt|=4,a=t.current;a!==null;){var x=a,R=x.child;if((a.flags&16)!==0){var Y=x.deletions;if(Y!==null){for(var ee=0;ee<Y.length;ee++){var me=Y[ee];for(a=me;a!==null;){var Ae=a;switch(Ae.tag){case 0:case 11:case 15:C(8,Ae,x)}var De=Ae.child;if(De!==null)De.return=Ae,a=De;else for(;a!==null;){Ae=a;var Le=Ae.sibling,Xe=Ae.return;if(ie(Ae),Ae===me){a=null;break}if(Le!==null){Le.return=Xe,a=Le;break}a=Xe}}}var it=x.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var qn=st.sibling;st.sibling=null,st=qn}while(st!==null)}}a=x}}if((x.subtreeFlags&2064)!==0&&R!==null)R.return=x,a=R;else e:for(;a!==null;){if(x=a,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:C(9,x,x.return)}var ue=x.sibling;if(ue!==null){ue.return=x.return,a=ue;break e}a=x.return}}var re=t.current;for(a=re;a!==null;){R=a;var de=R.child;if((R.subtreeFlags&2064)!==0&&de!==null)de.return=R,a=de;else e:for(R=re;a!==null;){if(Y=a,(Y.flags&2048)!==0)try{switch(Y.tag){case 0:case 11:case 15:z(9,Y)}}catch(lt){Rn(Y,Y.return,lt)}if(Y===R){a=null;break e}var We=Y.sibling;if(We!==null){We.return=Y.return,a=We;break e}a=Y.return}}if(dt=f,Ss(),N&&typeof N.onPostCommitFiberRoot=="function")try{N.onPostCommitFiberRoot(Gn,t)}catch{}p=!0}return p}finally{Nt=o,Mt.transition=r}}return!1}function Rh(t,r,o){r=sa(o,r),r=Il(t,r,1),t=ci(t,r,1),r=Hr(),t!==null&&(rr(t,1,r),ei(t,r))}function Rn(t,r,o){if(t.tag===3)Rh(t,t,o);else for(;r!==null;){if(r.tag===3){Rh(r,t,o);break}else if(r.tag===1){var p=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Ga===null||!Ga.has(p))){t=sa(o,t),t=zu(r,t,1),r=ci(r,t,1),t=Hr(),r!==null&&(rr(r,1,t),ei(r,t));break}}r=r.return}}function ig(t,r,o){var p=t.pingCache;p!==null&&p.delete(r),r=Hr(),t.pingedLanes|=t.suspendedLanes&o,zt===t&&(un&o)===o&&(Lt===4||Lt===3&&(un&130023424)===un&&500>Rt()-Uo?$o(t,0):ts|=o),ei(t,r)}function Ih(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=Hr();t=Ni(t,r),t!==null&&(rr(t,r,o),ei(t,o))}function sg(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Ih(t,o)}function ag(t,r){var o=0;switch(t.tag){case 13:var p=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:p=t.stateNode;break;default:throw Error(d(314))}p!==null&&p.delete(r),Ih(t,o)}var Oh;Oh=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return er=!1,pp(t,r,o);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&kl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var p=r.type;Bl(t,r),t=r.pendingProps;var f=Na(r,Vn.current);Js(r,o),f=Al(null,r,p,t,f,o);var x=ku();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(p)?(x=!0,La(r)):x=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,jl(r),f.updater=Wo,r.stateNode=f,f._reactInternals=r,Ou(r,p,t,o),r=Ka(null,r,p,!0,x,o)):(r.tag=0,rn&&x&&Gs(r),vr(null,r,f,o),r=r.child),r;case 16:p=r.elementType;e:{switch(Bl(t,r),t=r.pendingProps,f=p._init,p=f(p._payload),r.type=p,f=r.tag=lg(p),t=yr(p,t),f){case 0:r=oa(null,r,p,t,o);break e;case 1:r=Zr(null,r,p,t,o);break e;case 11:r=Vc(null,r,p,t,o);break e;case 14:r=Jc(null,r,p,yr(p.type,t),o);break e}throw Error(d(306,p,""))}return r;case 0:return p=r.type,f=r.pendingProps,f=r.elementType===p?f:yr(p,f),oa(t,r,p,f,o);case 1:return p=r.type,f=r.pendingProps,f=r.elementType===p?f:yr(p,f),Zr(t,r,p,f,o);case 3:e:{if(Dl(r),t===null)throw Error(d(387));p=r.pendingProps,x=r.memoizedState,f=x.element,Xs(t,r),Nl(r,p,null,o);var R=r.memoizedState;if(p=R.element,x.isDehydrated)if(x={element:p,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){f=sa(Error(d(423)),r),r=Wu(t,r,p,o,f);break e}else if(p!==f){f=sa(Error(d(424)),r),r=Wu(t,r,p,o,f);break e}else for(Pn=bs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Jr=null,o=Po(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Aa(),p===f){r=Ar(t,r,o);break e}vr(t,r,p,o)}r=r.child}return r;case 5:return bu(r),t===null&&_l(r),p=r.type,f=r.pendingProps,x=t!==null?t.memoizedProps:null,R=f.children,Bs(p,f)?R=null:x!==null&&Bs(p,x)&&(r.flags|=32),Ol(t,r),vr(t,r,R,o),r.child;case 6:return t===null&&_l(r),null;case 13:return Fl(t,r,o);case 4:return Zs(r,r.stateNode.containerInfo),p=r.pendingProps,t===null?r.child=Cs(r,null,p,o):vr(t,r,p,o),r.child;case 11:return p=r.type,f=r.pendingProps,f=r.elementType===p?f:yr(p,f),Vc(t,r,p,f,o);case 7:return vr(t,r,r.pendingProps,o),r.child;case 8:return vr(t,r,r.pendingProps.children,o),r.child;case 12:return vr(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(p=r.type._context,f=r.pendingProps,x=r.memoizedProps,R=f.value,Zt(Ao,p._currentValue),p._currentValue=R,x!==null)if(_n(x.value,R)){if(x.children===f.children&&!mr.current){r=Ar(t,r,o);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var Y=x.dependencies;if(Y!==null){R=x.child;for(var ee=Y.firstContext;ee!==null;){if(ee.context===p){if(x.tag===1){ee=Ei(-1,o&-o),ee.tag=2;var me=x.updateQueue;if(me!==null){me=me.shared;var Ae=me.pending;Ae===null?ee.next=ee:(ee.next=Ae.next,Ae.next=ee),me.pending=ee}}x.lanes|=o,ee=x.alternate,ee!==null&&(ee.lanes|=o),Oa(x.return,o,r),Y.lanes|=o;break}ee=ee.next}}else if(x.tag===10)R=x.type===r.type?null:x.child;else if(x.tag===18){if(R=x.return,R===null)throw Error(d(341));R.lanes|=o,Y=R.alternate,Y!==null&&(Y.lanes|=o),Oa(R,o,r),R=x.sibling}else R=x.child;if(R!==null)R.return=x;else for(R=x;R!==null;){if(R===r){R=null;break}if(x=R.sibling,x!==null){x.return=R.return,R=x;break}R=R.return}x=R}vr(t,r,f.children,o),r=r.child}return r;case 9:return f=r.type,p=r.pendingProps.children,Js(r,o),f=Wr(f),p=p(f),r.flags|=1,vr(t,r,p,o),r.child;case 14:return p=r.type,f=yr(p,r.pendingProps),f=yr(p.type,f),Jc(t,r,p,f,o);case 15:return en(t,r,r.type,r.pendingProps,o);case 17:return p=r.type,f=r.pendingProps,f=r.elementType===p?f:yr(p,f),Bl(t,r),r.tag=1,ar(p)?(t=!0,La(r)):t=!1,Js(r,o),qc(r,p,f),Ou(r,p,f,o),Ka(null,r,p,!0,t,o);case 19:return Uu(t,r,o);case 22:return Xc(t,r,o)}throw Error(d(156,r.tag))};function Dh(t,r){return zi(t,r)}function og(t,r,o,p){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(t,r,o,p){return new og(t,r,o,p)}function bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lg(t){if(typeof t=="function")return bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ie)return 11;if(t===A)return 14}return 2}function Xa(t,r){var o=t.alternate;return o===null?(o=Ii(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sd(t,r,o,p,f,x){var R=2;if(p=t,typeof t=="function")bp(t)&&(R=1);else if(typeof t=="string")R=5;else e:switch(t){case oe:return Go(o.children,f,x,r);case be:R=8,f|=8;break;case Re:return t=Ii(12,o,r,f|2),t.elementType=Re,t.lanes=x,t;case le:return t=Ii(13,o,r,f),t.elementType=le,t.lanes=x,t;case fe:return t=Ii(19,o,r,f),t.elementType=fe,t.lanes=x,t;case B:return ad(o,f,x,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ve:R=10;break e;case se:R=9;break e;case Ie:R=11;break e;case A:R=14;break e;case Q:R=16,p=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Ii(R,o,r,f),r.elementType=t,r.type=p,r.lanes=x,r}function Go(t,r,o,p){return t=Ii(7,t,p,r),t.lanes=o,t}function ad(t,r,o,p){return t=Ii(22,t,p,r),t.elementType=B,t.lanes=o,t.stateNode={isHidden:!1},t}function wp(t,r,o){return t=Ii(6,t,null,r),t.lanes=o,t}function kp(t,r,o){return r=Ii(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function ug(t,r,o,p,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=p,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Sp(t,r,o,p,f,x,R,Y,ee){return t=new ug(t,r,o,Y,ee),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Ii(3,null,null,r),t.current=x,x.stateNode=t,x.memoizedState={element:p,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(x),t}function cg(t,r,o){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:p==null?null:""+p,children:t,containerInfo:r,implementation:o}}function Mh(t){if(!t)return ks;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var o=t.type;if(ar(o))return gu(t,o,r)}return r}function zh(t,r,o,p,f,x,R,Y,ee){return t=Sp(o,p,!0,t,f,x,R,Y,ee),t.context=Mh(null),o=t.current,p=Hr(),f=Va(o),x=Ei(p,f),x.callback=r??null,ci(o,x,f),t.current.lanes=f,rr(t,f,p),ei(t,p),t}function od(t,r,o,p){var f=r.current,x=Hr(),R=Va(f);return o=Mh(o),r.context===null?r.context=o:r.pendingContext=o,r=Ei(x,R),r.payload={element:t},p=p===void 0?null:p,p!==null&&(r.callback=p),t=ci(f,r,R),t!==null&&(ns(t,f,R,x),Io(t,f,R)),R}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function _p(t,r){Fh(t,r),(t=t.alternate)&&Fh(t,r)}function dg(){return null}var Wh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}ud.prototype.render=Cp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));od(t,r,null,null)},ud.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;qo(function(){od(null,t,null,null)}),r[Xi]=null}};function ud(t){this._internalRoot=t}ud.prototype.unstable_scheduleHydration=function(t){if(t){var r=xi();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Nr.length&&r!==0&&r<Nr[o].priority;o++);Nr.splice(o,0,t),o===0&&ao(t)}};function Tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function pg(t,r,o,p,f){if(f){if(typeof p=="function"){var x=p;p=function(){var me=ld(R);x.call(me)}}var R=zh(r,p,t,0,null,!1,!1,"",Hh);return t._reactRootContainer=R,t[Xi]=R.current,ys(t.nodeType===8?t.parentNode:t),qo(),R}for(;f=t.lastChild;)t.removeChild(f);if(typeof p=="function"){var Y=p;p=function(){var me=ld(ee);Y.call(me)}}var ee=Sp(t,0,!1,null,null,!1,!1,"",Hh);return t._reactRootContainer=ee,t[Xi]=ee.current,ys(t.nodeType===8?t.parentNode:t),qo(function(){od(r,ee,o,p)}),ee}function dd(t,r,o,p,f){var x=o._reactRootContainer;if(x){var R=x;if(typeof f=="function"){var Y=f;f=function(){var ee=ld(R);Y.call(ee)}}od(r,R,t,f)}else R=pg(o,r,t,f,p);return ld(R)}Is=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=kn(r.pendingLanes);o!==0&&(Hi(r,o|1),ei(r,Rt()),(dt&6)===0&&(ql=Rt()+500,Ss()))}break;case 13:qo(function(){var p=Ni(t,1);if(p!==null){var f=Hr();ns(p,t,1,f)}}),_p(t,1)}},vi=function(t){if(t.tag===13){var r=Ni(t,134217728);if(r!==null){var o=Hr();ns(r,t,134217728,o)}_p(t,134217728)}},va=function(t){if(t.tag===13){var r=Va(t),o=Ni(t,r);if(o!==null){var p=Hr();ns(o,t,r,p)}_p(t,r)}},xi=function(){return Nt},Bi=function(t,r){var o=Nt;try{return Nt=t,r()}finally{Nt=o}},Cr=function(t,r,o){switch(r){case"input":if(Ue(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var p=o[r];if(p!==t&&p.form===t.form){var f=gn(p);if(!f)throw Error(d(90));Ft(p),Ue(p,f)}}}break;case"textarea":he(t,o);break;case"select":r=o.value,r!=null&&ut(t,!!o.multiple,r,!1)}},Nn=yp,bn=qo;var hg={usingClientEntryPoint:!1,Events:[pn,Cn,gn,xn,mn,yp]},Ku={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fg={bundleType:Ku.bundleType,version:Ku.version,rendererPackageName:Ku.rendererPackageName,rendererConfig:Ku.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kn(t),t===null?null:t.stateNode},findFiberByHostInstance:Ku.findFiberByHostInstance||dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pd.isDisabled&&pd.supportsFiber)try{Gn=pd.inject(fg),N=pd}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg,ti.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tp(r))throw Error(d(200));return cg(t,r,null,o)},ti.createRoot=function(t,r){if(!Tp(t))throw Error(d(299));var o=!1,p="",f=Wh;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Sp(t,1,!1,null,null,o,!1,p,f),t[Xi]=r.current,ys(t.nodeType===8?t.parentNode:t),new Cp(r)},ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=Kn(r),t=t===null?null:t.stateNode,t},ti.flushSync=function(t){return qo(t)},ti.hydrate=function(t,r,o){if(!cd(r))throw Error(d(200));return dd(null,t,r,!0,o)},ti.hydrateRoot=function(t,r,o){if(!Tp(t))throw Error(d(405));var p=o!=null&&o.hydratedSources||null,f=!1,x="",R=Wh;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(R=o.onRecoverableError)),r=zh(r,null,t,1,o??null,f,!1,x,R),t[Xi]=r.current,ys(t),p)for(t=0;t<p.length;t++)o=p[t],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new ud(r)},ti.render=function(t,r,o){if(!cd(r))throw Error(d(200));return dd(null,t,r,!1,o)},ti.unmountComponentAtNode=function(t){if(!cd(t))throw Error(d(40));return t._reactRootContainer?(qo(function(){dd(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1},ti.unstable_batchedUpdates=yp,ti.unstable_renderSubtreeIntoContainer=function(t,r,o,p){if(!cd(o))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return dd(t,r,o,!1,p)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var Vh;function Cg(){if(Vh)return Ep.exports;Vh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Ep.exports=_g(),Ep.exports}var Jh;function Tg(){if(Jh)return hd;Jh=1;var l=Cg();return hd.createRoot=l.createRoot,hd.hydrateRoot=l.hydrateRoot,hd}var jg=Tg();const Ng=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],Gp=Ng.map(([l,u,d,m,y],v)=>({id:`sample-${v+1}`,first:l,last:u,sheetName:v===3||v===11?null:`${l} ${u}`,github:d,studentName:m,sections:v===0?["p1","p3"]:[y],status:v%5===0?"Active now":v%4===0?"Viewing page":"No recent signal",current:v%3===0?"Strings and Variables":v%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:v%4===0?null:8+v%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:v%4===0?"Started":"Completed",score:v%4===0?null:11+v%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:v%3===0?"Submitted":"Needs revision",score:v%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":v%4===0?0:19+v%6,"2026-10-26":v%3===0?12:8+v%5}})),Eg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function _d(l=new Date){const u=Object.fromEntries(Eg.formatToParts(l).filter(m=>m.type!=="literal").map(m=>[m.type,m.value])),d=new Date(Date.UTC(Number(u.year),Number(u.month)-1,Number(u.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function Lg(l=new Date,u=8){const d=new Date(_d(l)+"T12:00:00Z");return Array.from({length:u},(m,y)=>{const v=new Date(d);return v.setUTCDate(v.getUTCDate()-y*7),v.toISOString().slice(0,10)})}const rc=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Pg=(l,u,d)=>`${l}|${u}|${d}`;function Ag({response:l,type:u,aiUse:d,aiDetails:m}){return["essay","logic-puzzle"].includes(u)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(m).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Rg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:_d(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:_d(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ls={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},uc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],Xh=uc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(u=>u.id)})),Ig=Object.fromEntries(uc.flatMap(l=>l.topics.map(u=>[u.id,{id:u.id,title:u.title,summary:u.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Og=l=>{for(const u of uc){const d=u.topics.find(m=>m.id===l);if(d)return{track:u,topic:d}}return null};uc.reduce((l,u)=>l+u.topics.reduce((d,m)=>d+m.questions.length,0),0);const Dg=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],Mg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],zg=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Fg=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Wg=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Hg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],Bg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],Ug=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],qg=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],$g=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Kg=[...Dg,...Mg,...zg,...Fg,...Wg,...Hg,...Bg,...Ug,...qg,...$g],em={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Vo(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Rs(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function cc(l,u=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??u}function is(l){return((l==null?void 0:l.lessons)||[]).map(Vo).filter(Boolean)}function ic(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(is):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Vo).filter(Boolean):[]}function Gg(l,u){return((l==null?void 0:l.units)||[]).some(d=>is(d).includes(u))}function ga(l,u,d=em){var k,T;if(!u)return null;const m=((l==null?void 0:l.units)||[]).find(E=>is(E).includes(u)),y=((m==null?void 0:m.lessons)||[]).find(E=>Vo(E)===u),v=typeof y=="object"&&y||((k=m==null?void 0:m.lessonMeta)==null?void 0:k[u])||((T=l==null?void 0:l.lessonRecords)==null?void 0:T[u])||{},S=(d==null?void 0:d[u])||{},j=String(v.title||v.name||S.title||u.split("/").at(-1));return{...S,...v,id:u,title:j,kind:v.kind||S.kind||"Lesson",difficulty:v.difficulty||S.difficulty||"",points:v.points??S.points??null,language:v.language||S.language||(l==null?void 0:l.language)||"text",challenge:v.challenge||v.summary||S.challenge||"",starter:v.starter||S.starter||"",console:S.console||(v.markdownSource?v.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(d!=null&&d[u])||typeof v.markdownSource=="string"&&v.starter!==void 0,isPublished:typeof v.markdownSource=="string"&&v.starter!==void 0}}function to(l,u,d=em){var m;return((m=ga(l,u,d))==null?void 0:m.title)||""}function tl(l){const u=Array.isArray(l)?{lessons:l}:l||{},d=new Map,m=new Set,y=[],v=(j,k,T,E)=>{const H=String(j);let L=y.find(G=>G.id===H);return L||(L={id:H,title:String(k||"Lessons"),description:String(T||""),number:E,lessons:[]},y.push(L)),L},S=(j,k)=>{const T=Vo(k);!T||m.has(T)||(m.add(T),j.lessons.push(T),d.set(T,typeof k=="string"?{id:T}:{...k}))};return Array.isArray(u.units)?u.units.forEach((j,k)=>{const T=v(j.id||`unit-${k+1}`,Rs(j),j.description||j.summary,cc(j,k+1));(j.lessons||[]).forEach(E=>S(T,E))}):Array.isArray(u.lessons)&&u.lessons.forEach((j,k)=>{if(!j||!Vo(j))return;const T=j.unit||null,E=Vo(j).indexOf("/"),H=T!=null?E>=0?Vo(j).slice(0,E):`unit-${T}`:j.competency?`topic-${String(j.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",L=j.unitName||j.competency||"Lessons",G=v(H,L,"",T??y.length+1);S(G,j)}),{units:y,lessonRecords:Object.fromEntries(d),lessons:y.flatMap(is)}}const Ap=tl(Kg),rs=[{id:"computer-science-1",units:Ap.units,lessonRecords:Ap.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Ap.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ls["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ls["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ls["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ls["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ls.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ls.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ls.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ls.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:Xh,lessonRecords:Ig,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:Xh.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ls["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ls["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],Sr=l=>rs.find(u=>u.id===l),tm=l=>{var u;return(u=Sr(l))==null?void 0:u.label};function Rd(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function Yg(l,u={}){const d=u&&typeof u=="object"?u[l.id]:null;return Rd(d)?d.toUpperCase():l.color}function Vg(l){if(!Rd(l))return"#101012";const u=[1,3,5].map(m=>parseInt(l.slice(m,m+2),16)/255).map(m=>m<=.04045?m/12.92:((m+.055)/1.055)**2.4);return u[0]*.2126+u[1]*.7152+u[2]*.0722>.179?"#101012":"#FFFFFF"}function Jg(l,u,d=document.documentElement){for(const m of u){const y=`--student-course-color-${m.id}`,v=l&&typeof l=="object"?l[m.id]:null,S=`--student-course-ink-${m.id}`;Rd(v)?(d.style.setProperty(y,v),d.style.setProperty(S,Vg(v))):(d.style.removeProperty(y),d.style.removeProperty(S))}}function Xn(l,u){const[d,m]=xe.useState(()=>{try{const y=localStorage.getItem(l);return y===null?u:JSON.parse(y)}catch{return u}});return xe.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(d))}catch{}},[l,d]),[d,m]}function Xg(l,u=[]){return Array.isArray(u)&&u.includes(l)}function nm(l,u=[]){const d=ic(l),m=d.filter(y=>Xg(y,u)).length;return{completed:m,total:d.length,percent:d.length?Math.round(m/d.length*100):0}}const Qg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Zg(l=new Date){const u=Object.fromEntries(Qg.formatToParts(l).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${u.year}-${u.month}-${u.day}`}function Cd(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function xd(l,u=[]){return u.find(d=>d.id===l)||null}function ey(l,u=[]){return u.find(d=>d.id===l)||null}function Id(l,{assignments:u=[],grades:d=[],completedLessons:m=[],today:y=Zg()}={}){const v=ey(l,u),S=xd(l,d),j=l.startsWith("lesson:")&&m.includes(l.slice(7)),k=!!S||j;return v!=null&&v.dueDate?{state:k?"completed":v.dueDate<y?"overdue":"assigned",dueDate:v.dueDate,grade:S,completed:k}:{state:k?"completed":"unassigned",dueDate:null,grade:S,completed:k}}function Yp(l=[]){const u=l.reduce((m,y)=>m+y.earned,0),d=l.reduce((m,y)=>m+y.possible,0);return{earned:u,possible:d,percent:d?Math.round(100*u/d):null,count:l.length}}function ty(l=[]){const u=new Map;return l.forEach(d=>{const m=_d(new Date(d.gradedAt+"T12:00:00Z"));u.has(m)||u.set(m,[]),u.get(m).push(d)}),[...u.entries()].map(([d,m])=>({week:d,...Yp(m)})).sort((d,m)=>m.week.localeCompare(d.week))}function ny(l=[],u=[]){return[...new Set([...Array.isArray(l)?l:[],...u.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const ry="/playground/data",iy=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function sy(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(u=>u===".."||u==="."||u===""))throw new Error("Invalid curriculum resource path");return l}function dc(l,u){if(!iy.has(l))throw new Error("Unknown published course");return ry+"/"+l+"/"+sy(u)}async function tr(l,u,d,m,y=!1){const v=await d(dc(l,u),{signal:m,cache:"no-store"});if(!v.ok)throw new Error("Published "+l+" resource unavailable: "+u);return y?v.json():v.text()}function ah(l,u,d,m,y){var v,S,j;return{...l,markdownSource:u,starter:d??"",language:m,markdownUrl:dc(y,l.markdown),kind:"Lesson",challenge:((v=l.exercise)==null?void 0:v.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((S=l.exercise)==null?void 0:S.examples)||l.cases||[],hints:((j=l.exercise)==null?void 0:j.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function ay(l,u){const d="game-programming",m=await tr(d,"course.json",l,u,!0),y=await Promise.all(m.units.map(async v=>({id:v.id,number:v.number,title:v.title,description:v.summary||"",lessons:await Promise.all(v.lessons.map(async S=>{var T,E,H,L,G;const j=await tr(d,S.markdown,l,u);return{...ah(S,j,(T=S.exercise)==null?void 0:T.starter,"csharp",d),starter:((E=S.exercise)==null?void 0:E.starter)||"",kind:"Lesson",exerciseId:(H=S.exercise)==null?void 0:H.id,challenge:((L=S.exercise)==null?void 0:L.prompt)||S.title,unityTask:S.unityTask||[],markdownSource:j+((G=S.unityTask)!=null&&G.length?`

### Unity activity
`+S.unityTask.map(O=>"- "+O).join(`
`):"")}}))})));return{...tl({units:y}),source:"published",projects:[]}}async function Qh(l,u,d,m){if(!u)return null;const y=Object.keys(u);if(!y.includes("index.html")||!y.includes("styles.css")||!y.includes("script.js")&&!y.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(y.map(async v=>[v,await tr(l,u[v],d,m)])))}async function oy(l,u){const d="mobile-app-dev",m=await tr(d,"course.json",l,u,!0),y=await Promise.all(m.lessons.map(async S=>{const[j,k,T]=await Promise.all([tr(d,S.markdown,l,u),S.starterFile?tr(d,S.starterFile,l,u):Promise.resolve(""),Qh(d,S.starterFiles,l,u)]);return{...ah(S,j,k,S.language==="react"?"jsx":S.language,d),...T?{starterFiles:T}:{}}})),v=await Promise.all((m.projects||[]).map(async S=>{const[j,k]=await Promise.all([S.starterFile?tr(d,S.starterFile,l,u):Promise.resolve(""),Qh(d,S.starterFiles,l,u)]),T=await Promise.all(S.steps.map(async E=>({...E,focus:E.focus||E.title,markdownSource:await tr(d,E.markdown,l,u),markdownUrl:dc(d,E.markdown)})));return{id:S.id,title:S.title,summary:S.summary,skills:S.skills||[],starter:j,language:"html",steps:T,...k?{starterFiles:k}:{}}}));return{...tl({lessons:y}),projects:v,source:"published"}}async function ly(l,u){const m=await tr("uil","course.json",l,u,!0),y=await tr("uil",m.written.markdown,l,u),v=await tr("uil",m.written.practice,l,u,!0),j=(Array.isArray(v)?v:v.questions||[]).map((H,L)=>{const G=H.choices||H.options||[];return"### Practice question "+(L+1)+`

`+String(H.prompt||H.question||"")+`

`+G.map((O,V)=>String.fromCharCode(65+V)+". "+O).join(`

`)}).join(`

`),k={id:"written",title:"Written practice",language:"text",markdown:m.written.markdown,markdownSource:y+`

## Published practice questions

`+j,markdownUrl:dc("uil",m.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},T=await Promise.all(m.lessons.map(async H=>{const[L,G]=await Promise.all([tr("uil",H.markdown,l,u),tr("uil",H.starterFile,l,u)]);return ah(H,L,G,"java","uil")}));return{...tl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[k]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:T}]}),source:"published",projects:[]}}async function uy(l,u){const d="tsi-math",[m,y,v,S]=await Promise.all([tr(d,"content/20-day-program.json",l,u,!0),tr(d,"content/strand-lessons-v1.json",l,u,!0),tr(d,"content/diagnostic-24-mc-v2.json",l,u,!0),tr(d,"content/math-locator-profiles.json",l,u,!0)]),j=(m.days||[]).map(T=>({id:T.id,title:T.title,challenge:"Day "+T.day+" · "+T.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),k=await Promise.all((y.lessons||[]).map(async T=>{const[E,H]=await Promise.all([tr(d,T.student_lesson,l,u),tr(d,T.teacher_key,l,u,!0)]);return{id:T.id,title:T.title,kind:"Draft practice",status:"draft",language:"text",markdown:T.student_lesson,markdownUrl:dc(d,T.student_lesson),markdownSource:E,tsiKey:H,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+T.minutes+" minutes"}}));return{...tl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:j},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:k}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:v.items||[],locatorProfiles:S.profiles||[]}}async function cy(l,{fetchImpl:u=fetch,signal:d}={}){if(l==="game-programming")return ay(u,d);if(l==="mobile-app-dev")return oy(u,d);if(l==="uil")return ly(u,d);if(l==="tsi-math")return uy(u,d);throw new Error("Unknown published course")}const Yu=!0;async function dy(){const l="/playground/integration/account-bridge.js",{readOnlyCs1Snapshot:u}=await import(l);return u()}const pa=(...l)=>l.filter(Boolean).join(" "),py=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],hy="/playground/integration/",fy="/"+hy.replace(/^\/+|\/+$/g,""),ya=l=>`${fy}/#${l}`,Gl=()=>ya("/"),Zh=()=>ya("/teacher"),my=()=>ya("/admin"),gy=()=>ya("/journals"),yy=()=>ya("/grades"),Kl=(l=null)=>ya(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),rm=l=>ya(`/challenges/${encodeURIComponent(l)}`);function im(l,u,d=null){const m=typeof l=="string"?Sr(l):l;if(!m||!u)return Gl();const y=`/playgrounds/${encodeURIComponent(m.slug)}/projects/${encodeURIComponent(u)}`;return ya(d?`${y}/steps/${encodeURIComponent(d)}`:y)}function Od(l,u){const d=typeof l=="string"?Sr(l):l;if(!d)return Gl();const m=`/playgrounds/${encodeURIComponent(d.slug)}`;return ya(u?`${m}/lessons/${encodeURIComponent(u)}`:m)}function fd(l,u=rs){const v=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(v==="/")return{page:"home"};if(v==="/teacher")return{page:"teacher"};if(v==="/admin")return{page:"admin"};if(v==="/journals")return{page:"journals"};if(v==="/grades")return{page:"grades"};if(v==="/challenges")return{page:"challenges",filterCourse:null};if(v.startsWith("/challenges/")){const E=v.split("/").filter(Boolean);try{if(E.length===3&&E[1]==="course"){const H=decodeURIComponent(E[2]);return Sr(H)?{page:"challenges",filterCourse:H}:{page:"not-found"}}if(E.length===2){const H=decodeURIComponent(E[1]);return py.includes(H)?{page:"challenge",challengeId:H}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const S=v.split("/").filter(Boolean);if(S[0]!=="playgrounds"||![2,4,6].includes(S.length))return{page:"not-found"};let j,k;try{j=decodeURIComponent(S[1]),k=S.length===4?decodeURIComponent(S[3]):void 0}catch{return{page:"not-found"}}const T=u.find(E=>E.slug===j);if(!T)return{page:"not-found"};if(S[2]==="projects"&&(S.length===4||S.length===6))try{const E=decodeURIComponent(S[3]),H=(T.projects||[]).find(G=>G.id===E),L=S.length===6?decodeURIComponent(S[5]):null;return!H||L&&(S[4]!=="steps"||!H.steps.some(G=>G.id===L))?{page:"not-found"}:{page:"course",courseId:T.id,lessonId:null,projectId:E,stepId:L}}catch{return{page:"not-found"}}return S.length!==2&&(S.length!==4||S[2]!=="lessons")?{page:"not-found"}:k&&!Gg(T,k)?{page:"not-found"}:{page:"course",courseId:T.id,lessonId:k??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sm=(...l)=>l.filter((u,d,m)=>!!u&&u.trim()!==""&&m.indexOf(u)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=xe.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:m,className:y="",children:v,iconNode:S,...j},k)=>xe.createElement("svg",{ref:k,...xy,width:u,height:u,stroke:l,strokeWidth:m?Number(d)*24/Number(u):d,className:sm("lucide",y),...j},[...S.map(([T,E])=>xe.createElement(T,E)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(l,u)=>{const d=xe.forwardRef(({className:m,...y},v)=>xe.createElement(by,{ref:v,iconNode:u,className:sm(`lucide-${vy(l)}`,m),...y}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=_t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=_t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=_t("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=_t("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=_t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=_t("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=_t("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=_t("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=_t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=_t("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=_t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=_t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=_t("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=_t("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=_t("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=_t("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=_t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=_t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=_t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=_t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=_t("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=_t("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=_t("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=_t("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=_t("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=_t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=_t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
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
 */const Dy=_t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=_t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=_t("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=_t("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=_t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=_t("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=_t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=_t("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=_t("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=_t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=_t("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=_t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=_t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=_t("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=_t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Di({children:l,tone:u=""}){return c.jsx("span",{className:pa("chip",u&&`chip-${u}`),children:l})}function Uy({theme:l,setTheme:u}){const d=l==="dark";return c.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>u(d?"light":"dark"),children:d?c.jsx(Hy,{size:17}):c.jsx(My,{size:17})})}function qy({sidebarOpen:l,onToggleSidebar:u,onHome:d,theme:m,setTheme:y,readOnlyMode:v=!1,accountLabel:S=null}){var j;return c.jsx("header",{className:"topbar",children:c.jsxs("div",{className:"topbar-inner",children:[c.jsx("button",{className:"icon-button nav-toggle",onClick:u,"aria-label":"Toggle navigation",children:l?c.jsx(zy,{size:18}):c.jsx(Dy,{size:18})}),c.jsxs("button",{className:"brand",onClick:d,children:[c.jsx("span",{className:"brand-logo",children:"{ }"}),c.jsx("strong",{children:"Ms. Whitby's Playground"}),c.jsx("span",{className:"brand-compact",children:"React Lab"})]}),c.jsx("div",{className:"topbar-spacer"}),c.jsx(Di,{children:v?"CS1 READ-ONLY TEST":"LOCAL DESIGN LAB"}),c.jsx(Uy,{theme:m,setTheme:y}),c.jsx("span",{className:"user-circle",title:S||"Read-only preview",children:((j=S==null?void 0:S[0])==null?void 0:j.toUpperCase())||"W"})]})})}const $y=[["home","Home",Iy],["challenges","Challenge Bank",zd],["journals","Weekly journals",oh],["grades","Grades",Ay],["teacher","Teacher dashboard",lh],["admin","Admin dashboard",dm]];function Ky({open:l,page:u,courseId:d,lessonId:m,setPage:y,openCourse:v,onOpenProject:S,availableCourses:j=rs,completedLessons:k=[],assignments:T=[],grades:E=[],readOnlyMode:H=!1}){var G;const L=u==="course"?j.find(O=>O.id===d):null;return c.jsxs("aside",{className:pa("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[c.jsx("div",{className:"side-title",children:"EXPLORE"}),$y.filter(([O])=>!H||["home","grades","teacher"].includes(O)).map(([O,V,X])=>c.jsxs("button",{className:pa("nav-item",(u===O||O==="challenges"&&u==="challenge")&&"active"),onClick:()=>y(O),title:V,children:[c.jsx(X,{size:19}),c.jsx("span",{children:V})]},O)),L&&c.jsxs("section",{className:"course-outline","data-course":L.id,"aria-label":`${L.label} outline`,children:[c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),c.jsxs("button",{className:pa("outline-overview",!m&&"active"),onClick:()=>v(L.id),children:[c.jsx(nl,{size:16}),c.jsx("span",{children:"Course overview"})]}),L.units.map((O,V)=>c.jsxs("details",{className:"outline-unit",open:is(O).includes(m)||!m&&V===0?!0:void 0,children:[c.jsxs("summary",{children:[c.jsx("span",{className:"outline-unit-number",children:String(cc(O,V+1)).padStart(2,"0")}),c.jsx("span",{className:"outline-unit-title",title:Rs(O),children:Rs(O)}),c.jsx(lm,{size:14})]}),c.jsx("div",{className:"outline-lesson-list",children:is(O).map(X=>{const M=to(L,X),F=Id("lesson:"+X,{assignments:T,grades:E,completedLessons:k}),U=F.completed?"completed":F.dueDate?F.state:"",W=U==="completed"?"Completed":U==="overdue"?"Overdue":U==="assigned"?"Assigned":"";return c.jsxs("button",{onClick:()=>v(L.id,X),className:pa("outline-lesson",X===m&&"selected"),"aria-label":W?`${M}, ${W.toLowerCase()}`:M,title:W?`${M} · ${W}`:M,"aria-current":X===m?"page":void 0,children:[c.jsx("span",{className:"outline-lesson-name",children:M}),W&&c.jsx("span",{className:`assignment-dot ${U}`,"aria-hidden":"true"})]},X)})})]},`${L.id}-${O.id}-${m||"overview"}`)),!!((G=L.projects)!=null&&G.length)&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"side-section-title",children:"PROJECTS"}),L.projects.map(O=>c.jsx("button",{type:"button",className:"outline-lesson",title:O.title,onClick:()=>S==null?void 0:S(L.id,O.id),children:c.jsx("span",{className:"outline-lesson-name",children:O.title})},O.id))]})]}),c.jsx("div",{className:"side-rule"}),c.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),j.filter(O=>O.id!=="tsi-math").map(O=>c.jsxs("button",{"data-course":O.id,className:pa("nav-item course-nav-item",u==="course"&&d===O.id&&"active"),onClick:()=>v(O.id),title:O.label,children:[c.jsx("span",{className:"nav-dot"}),c.jsx("span",{children:O.label})]},O.id)),c.jsxs("div",{className:"sidebar-bottom",children:[c.jsx(_y,{size:17}),c.jsx("span",{children:"Your learning spaces"})]})]})}function Gy(){return c.jsxs("footer",{className:"site-footer",children:[c.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),c.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const Yy={"computer-science-1":Md,"game-programming":Py,"mobile-app-dev":Wy,uil:pm,"tsi-math":om,"test-prep":Ty,capstone:Fy};function Vy({course:l,onOpen:u,completedLessons:d=[]}){const{completed:m,total:y}=nm(l,d),v=Yy[l.id]||Md;function S(j){j.button!==0||j.metaKey||j.ctrlKey||j.shiftKey||j.altKey||(j.preventDefault(),u())}return c.jsxs("a",{className:"course-card","data-course":l.id,href:Od(l),onClick:S,children:[c.jsxs("div",{className:"course-card-heading",children:[c.jsx("span",{className:"course-glyph","aria-hidden":"true",children:c.jsx(v,{size:24,strokeWidth:2.2})}),c.jsxs("div",{children:[c.jsx("h2",{children:l.label}),c.jsx("p",{children:l.short})]})]}),c.jsx("p",{className:"course-description",children:l.description}),c.jsxs("div",{className:"course-card-footer",children:[c.jsxs("div",{className:"course-meta",children:[c.jsxs("span",{children:[y," ",y===1?"lesson":"lessons"]}),c.jsxs("span",{children:[m," completed"]})]}),c.jsx("progress",{className:"course-progress-track",value:m,max:Math.max(y,1),"aria-label":`${l.label}: ${m} of ${y} lessons completed`})]})]})}function Jy({onClick:l}){return c.jsxs("button",{className:"wide-shortcut",onClick:l,children:[c.jsx(lh,{size:18}),c.jsxs("span",{children:[c.jsx("strong",{children:"Teacher Dashboard preview"}),c.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),c.jsx(ni,{size:18})]})}function Xy({openCourse:l,openTeacher:u,openChallenges:d,availableCourses:m=rs,completedLessons:y=[],readOnlyMode:v=!1}){return c.jsxs("div",{className:"main-content",children:[c.jsxs("div",{className:"welcome",children:[c.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),c.jsx("h1",{children:"Your playgrounds"}),c.jsxs("p",{children:["Choose a course to continue learning. ",v?"Review Computer Science I lessons and your existing verified results. Practice is local to this test build.":"Complete lessons to fill your progress bars."]})]}),c.jsx("div",{className:"course-card-grid",children:m.filter(S=>S.id!=="tsi-math").map(S=>c.jsx(Vy,{course:S,completedLessons:y,onOpen:()=>l(S.id)},S.id))}),!v&&c.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[c.jsx(zd,{size:23}),c.jsxs("span",{children:[c.jsx("strong",{children:"Shared Challenge Bank"}),c.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),c.jsx("span",{"aria-hidden":"true",children:"→"})]}),!v&&c.jsx(Jy,{onClick:u})]})}function Qy({course:l,openCourse:u,openProject:d,openChallenges:m,completedLessons:y=[],assignments:v=[],grades:S=[],courseColors:j={},onSetCourseColor:k,onResetCourseColor:T,readOnlyMode:E=!1}){var V;const H=nm(l,y),[L,G]=xe.useState(!1),O=Yg(l,j);return c.jsxs("div",{className:"course-landing",children:[c.jsxs("header",{className:"course-hero surface-card",children:[c.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>G(X=>!X),"aria-label":L?"Close course color settings":`Change ${l.label} color`,title:L?"Close settings":"Course color","aria-expanded":L,"aria-controls":"course-color-controls",children:L?c.jsx(Fd,{size:17}):c.jsx(dh,{size:17})}),c.jsx("div",{className:"eyebrow",children:"Course overview"}),c.jsx("h1",{children:l.label}),c.jsx("p",{children:l.description}),c.jsxs("div",{className:"course-hero-stats",children:[c.jsxs("span",{children:[c.jsx(Oy,{size:16})," ",l.units.length," units"]}),c.jsxs("span",{children:[c.jsx(nl,{size:16})," ",ic(l).length," lessons"]})]}),c.jsxs("button",{className:"btn primary",disabled:!ic(l).length,onClick:()=>u(l.id,ic(l)[0]),children:["Start learning ",c.jsx(ni,{size:16})]}),L&&c.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[c.jsxs("div",{className:"course-color-control-copy",children:[c.jsx("strong",{children:"Course color"}),c.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),c.jsxs("label",{className:"course-color-picker",children:[c.jsx("input",{type:"color",value:O,onChange:X=>k==null?void 0:k(l.id,X.target.value),"aria-label":`Choose a color for ${l.label}`}),c.jsx("span",{children:"Choose color"})]}),c.jsx("button",{type:"button",className:"btn",onClick:()=>T==null?void 0:T(l.id),children:"Reset to default"}),c.jsx("button",{type:"button",className:"btn",onClick:()=>G(!1),children:"Done"})]})]}),l.publishedContent&&c.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&c.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&c.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&c.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),c.jsxs("p",{className:"course-landing-progress",children:[H.completed," of ",H.total," lessons ",E?"with verified grades":l.publishedContent?"marked complete in preview":"completed"," · ",H.percent,"%"]}),c.jsx("div",{className:"course-landing-heading",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Units & lessons"}),c.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),c.jsx("div",{className:"unit-card-grid",children:l.units.map((X,M)=>c.jsxs("section",{className:"unit-card surface-card",children:[c.jsxs("header",{className:"unit-card-header",children:[c.jsxs("span",{className:"unit-badge",children:["UNIT ",String(cc(X,M+1)).padStart(2,"0")]}),c.jsx("h3",{title:Rs(X),children:Rs(X)}),X.description&&c.jsx("p",{children:X.description})]}),c.jsx("div",{className:"unit-lessons",children:is(X).map((F,U)=>c.jsxs("a",{className:"unit-lesson-link",href:Od(l,F),onClick:W=>{W.button!==0||W.metaKey||W.ctrlKey||W.shiftKey||W.altKey||(W.preventDefault(),u(l.id,F))},children:[c.jsx("span",{className:"unit-lesson-index",children:U+1}),c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{title:to(l,F),children:to(l,F)}),(()=>{var J,ce;const W=Id("lesson:"+F,{assignments:v,grades:S,completedLessons:y});return W.dueDate||W.completed?c.jsxs("span",{className:"unit-assignment-meta",children:[c.jsxs("span",{className:`assignment-status ${W.state}`,children:[c.jsx("span",{className:`assignment-dot ${W.state}`,"aria-hidden":"true"}),W.completed?"Completed":W.state==="overdue"?"Overdue":"Assigned"]}),W.dueDate&&c.jsxs("small",{children:["Due ",Cd(W.dueDate)]}),W.grade&&c.jsxs("small",{children:[W.grade.earned," / ",W.grade.possible," pts"]})]}):c.jsxs("small",{children:[(J=ga(l,F))==null?void 0:J.kind,(ce=ga(l,F))!=null&&ce.difficulty?` · ${ga(l,F).difficulty}`:""]})})()]}),c.jsx(Vp,{size:16})]},F))})]},X.id))}),!!((V=l.projects)!=null&&V.length)&&c.jsxs("section",{className:"course-projects surface-card",children:[c.jsx("div",{className:"eyebrow",children:"Published guided projects"}),c.jsx("h2",{children:"Projects"}),c.jsx("div",{className:"unit-card-grid",children:l.projects.map(X=>c.jsxs("a",{className:"unit-lesson-link",href:im(l,X.id),onClick:M=>{M.button!==0||M.metaKey||M.ctrlKey||M.shiftKey||M.altKey||(M.preventDefault(),d(l.id,X.id))},children:[c.jsxs("span",{className:"unit-lesson-label",children:[c.jsx("strong",{children:X.title}),c.jsxs("small",{children:[X.steps.length," steps · ",X.summary]})]}),c.jsx(Vp,{size:16})]},X.id))})]}),c.jsxs("section",{className:"course-challenges-shelf surface-card",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Shared practice library"}),c.jsx("h2",{children:"Related programming challenges"}),c.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),c.jsxs("a",{href:Kl(l.id),className:"btn",onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),m(l.id))},children:[c.jsx(zd,{size:16})," Browse challenges"]})]})]})}function Zy({selectedTopic:l,attempts:u,setAttempts:d,openCourse:m,completedLessons:y,onToggleLessonComplete:v}){const{track:S,topic:j}=l,[k,T]=xe.useState(0),[E,H]=xe.useState(null),[L,G]=xe.useState(!1),O=j.questions[k],V=j.questions.filter(W=>u[W.id]!==void 0).length,X=y.includes(j.id);function M(W){T(W),H(null),G(!1)}function F(){E===null||L||(G(!0),d(W=>({...W,[O.id]:{chosen:E,correct:E===O.correct}})))}const U=E===O.correct;return c.jsxs("section",{className:"test-prep-practice",children:[c.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>m("test-prep"),children:[c.jsx(am,{size:16})," All Test Prep"]}),c.jsxs("div",{className:"surface-card test-prep-practice-header",children:[c.jsxs("div",{className:"eyebrow",children:[S.title," / ",j.title]}),c.jsx("h1",{children:j.title}),c.jsx("p",{children:j.description}),c.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),c.jsxs("div",{className:"test-prep-practice-meta",children:[c.jsxs("span",{children:[V," of ",j.questions.length," attempted"]}),X&&c.jsxs("span",{className:"test-prep-complete",children:[c.jsx(ac,{size:16})," Practiced"]})]})]}),c.jsxs("div",{className:"surface-card test-prep-question",children:[c.jsxs("div",{className:"test-prep-question-top",children:[c.jsxs("strong",{children:["Question ",k+1," of ",j.questions.length]}),c.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),c.jsx("h2",{children:O.prompt}),c.jsxs("fieldset",{className:"test-prep-options",disabled:L,children:[c.jsx("legend",{className:"sr-only",children:"Choose your answer"}),O.options.map((W,J)=>c.jsxs("label",{className:"test-prep-option "+(E===J?"selected ":"")+(L&&J===O.correct?"correct":""),children:[c.jsx("input",{type:"radio",name:O.id,checked:E===J,onChange:()=>H(J)}),c.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+J)}),c.jsx("span",{children:W})]},J))]}),L&&c.jsxs("div",{className:"test-prep-feedback "+(U?"is-correct":"is-incorrect"),role:"status",children:[c.jsx("strong",{children:U?"Correct!":"Review this answer"}),c.jsx("p",{children:O.explanation})]}),c.jsxs("div",{className:"test-prep-actions",children:[c.jsx("button",{type:"button",className:"btn primary",disabled:E===null||L,onClick:F,children:"Check answer"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{H(null),G(!1)},children:[c.jsx(uh,{size:14})," Try again"]})]})]}),c.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[k>0?c.jsxs("button",{type:"button",className:"btn",onClick:()=>M(k-1),children:[c.jsx(Dd,{size:16})," Previous"]}):c.jsx("span",{}),k<j.questions.length-1?c.jsxs("button",{type:"button",className:"btn",onClick:()=>M(k+1),children:["Next question ",c.jsx(ni,{size:16})]}):c.jsx("span",{})]}),V===j.questions.length&&!X&&c.jsxs("div",{className:"test-prep-completion surface-card",children:[c.jsx("span",{children:"You've attempted every sample in this subject."}),c.jsx("button",{type:"button",className:"btn primary",onClick:()=>v==null?void 0:v(j.id),children:"Mark topic practiced"})]}),c.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",c.jsxs("a",{href:S.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",S.title," preparation resources ",c.jsx(um,{size:13})]})]})]})}function ev({lessonId:l,openCourse:u,completedLessons:d=[],onToggleLessonComplete:m}){const[y,v]=Xn("designlab:test-prep-sample-answers",{}),S=l?Og(l):null;return c.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{type:"button",onClick:()=>u(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),l?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>u("test-prep"),children:"Test Prep"}),c.jsx(ni,{size:14}),c.jsx("span",{children:S==null?void 0:S.topic.title})]}):c.jsx("span",{children:"Test Prep"})]}),S?c.jsx(Zy,{selectedTopic:S,attempts:y,setAttempts:v,openCourse:u,completedLessons:d,onToggleLessonComplete:m},l):c.jsxs("div",{className:"test-prep-hub",children:[c.jsxs("header",{className:"surface-card test-prep-hero",children:[c.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),c.jsx("h1",{children:"Choose a test to prepare for"}),c.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),c.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),c.jsxs("div",{className:"test-prep-exams",children:[c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[c.jsx("div",{className:"test-prep-exam-icon",children:c.jsx(ef,{size:23})}),c.jsx("div",{className:"eyebrow",children:"College readiness"}),c.jsx("h2",{children:"TSI Math"}),c.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),c.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("tsi-math"),children:["Open TSI Math ",c.jsx(ni,{size:16})]})]}),uc.map(j=>{const k=j.topics.reduce((E,H)=>E+H.questions.length,0),T=j.topics.reduce((E,H)=>E+H.questions.filter(L=>y[L.id]!==void 0).length,0);return c.jsxs("section",{className:"surface-card test-prep-exam","data-exam":j.id,children:[c.jsx("div",{className:"test-prep-exam-icon",children:j.id==="act"?c.jsx(Ly,{size:23}):c.jsx(ef,{size:23})}),c.jsx("div",{className:"eyebrow",children:j.subtitle}),c.jsx("h2",{children:j.title}),c.jsx("p",{children:j.description}),c.jsxs("p",{className:"test-prep-exam-meta",children:[j.topics.length," subjects · ",T,"/",k," samples attempted"]}),c.jsx("progress",{className:"course-progress-track",value:T,max:k,"aria-label":j.title+" sample practice progress"}),c.jsx("div",{className:"test-prep-topic-links",children:j.topics.map(E=>c.jsxs("button",{type:"button",onClick:()=>u("test-prep",E.id),children:[c.jsx("span",{children:E.title}),c.jsx(ni,{size:15})]},E.id))}),c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>u("test-prep",j.topics[0].id),children:["Start ",j.title," samples ",c.jsx(ni,{size:16})]})]},j.id)})]})]})]})})}function pc({axis:l,onDrag:u}){const d=xe.useRef(!1),m=l==="columns",y=()=>d.current=!1;return c.jsx("div",{className:pa("splitter",m?"column-split":"row-split"),role:"separator","aria-label":m?"Resize instructions and editor":"Resize editor and console","aria-orientation":m?"vertical":"horizontal",tabIndex:0,onPointerDown:v=>{v.preventDefault(),v.currentTarget.setPointerCapture(v.pointerId),d.current=!0},onPointerMove:v=>{d.current&&v.buttons===1&&u(v)},onPointerUp:y,onLostPointerCapture:y,children:c.jsx("span",{})})}function ph({eyebrow:l,children:u,actions:d}){return c.jsxs("div",{className:"page-title-row",children:[c.jsxs("div",{children:[l&&c.jsx("div",{className:"eyebrow",children:l}),c.jsx("h1",{children:u})]}),d&&c.jsx("div",{className:"page-actions",children:d})]})}function Vu({task:l,unit:u,unitNumber:d,isTsi:m,isCompleted:y=!1,assignment:v=null,grade:S=null,onToggleCompleted:j,readOnlyMode:k=!1}){const T=(v==null?void 0:v.id)||(S==null?void 0:S.id)||"",E=Id(T,{assignments:v?[v]:[],grades:S?[S]:[],completedLessons:y?[T.replace(/^lesson:/,"")]:[]});return c.jsxs("div",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Unit ",cc(u,d)," · ",Rs(u)," ",c.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),c.jsx(ph,{actions:c.jsxs("div",{className:"lesson-heading-actions",children:[!m&&(l==null?void 0:l.points)!=null&&c.jsx("span",{className:"points-tag",children:S?`${S.earned} / ${S.possible} pts`:`${l.points} points available`}),k&&!S?c.jsx("span",{className:"points-tag",children:"Verified scores only"}):S?c.jsxs("span",{className:"btn completion-toggle completed",children:[c.jsx(ac,{size:16})," Completed"]}):c.jsxs("button",{type:"button",className:`btn completion-toggle ${y?"completed":""}`,"aria-pressed":y,onClick:j,children:[y?c.jsx(ac,{size:16}):c.jsx(Cy,{size:16}),y?"Completed":"Mark complete"]})]}),children:l.title}),c.jsx("p",{children:l.challenge}),(v==null?void 0:v.dueDate)&&c.jsxs("div",{className:"lesson-assignment-info",children:[c.jsx("span",{className:`assignment-status ${E.state}`,children:E.state==="completed"?"Completed":E.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("span",{children:["Due ",Cd(v.dueDate)]})]})]})}const hh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},tv=`# Find an Inefficiency

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
`,nv=`# Interpret User Feedback

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
`,rv=`# Interview for Evidence

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
`,iv=`# Make a Minimum Viable Prototype

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
`,sv=`# Player Decisions

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
`,av=`# Variables for a Game

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
`,ov=`# Decision Making

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
`,lv=`# Format a Summary

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
`,uv=`# Lists and Indexing

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
`,cv=`# For Loops

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
`,dv=`# Strings and Variables

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
`,pv=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,hv=`# Your First React Card

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
`,fv=`# Interactive React State

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
`,mv=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,gv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,yv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,vv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,xv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,bv=`# Trace Java Loops

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
`,wv=`# Method Calls and Scope

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
`,kv=`# String Indexing

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
`,Sv=`# Collision Events

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
`,_v=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,Cv=`# Score and Feedback

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
`,Tv=`# Events and Forms

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
`,jv=`# Responsive Layouts

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
`;function fh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rl=fh();function hm(l){rl=l}var sc={exec:()=>null};function Gt(l,u=""){let d=typeof l=="string"?l:l.source;const m={replace:(y,v)=>{let S=typeof v=="string"?v:v.source;return S=S.replace(Br.caret,"$1"),d=d.replace(y,S),m},getRegex:()=>new RegExp(d,u)};return m}var Br={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},Nv=/^(?:[ \t]*(?:\n|$))+/,Ev=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Lv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Pv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,mh=/(?:[*+-]|\d{1,9}[.)])/,fm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,mm=Gt(fm).replace(/bull/g,mh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Av=Gt(fm).replace(/bull/g,mh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),gh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Rv=/^[^\n]+/,yh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Iv=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",yh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ov=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,mh).getRegex(),Wd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Dv=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vh).replace("tag",Wd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gm=Gt(gh).replace("hr",hc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wd).getRegex(),Mv=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gm).getRegex(),xh={blockquote:Mv,code:Ev,def:Iv,fences:Lv,heading:Pv,hr:hc,html:Dv,lheading:mm,list:Ov,newline:Nv,paragraph:gm,table:sc,text:Rv},nf=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wd).getRegex(),zv={...xh,lheading:Av,table:nf,paragraph:Gt(gh).replace("hr",hc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wd).getRegex()},Fv={...xh,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:sc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(gh).replace("hr",hc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Wv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Hv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ym=/^( {2,}|\\)\n(?!\s*$)/,Bv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Hd=/[\p{P}\p{S}]/u,bh=/[\s\p{P}\p{S}]/u,vm=/[^\s\p{P}\p{S}]/u,Uv=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,bh).getRegex(),xm=/(?!~)[\p{P}\p{S}]/u,qv=/(?!~)[\s\p{P}\p{S}]/u,$v=/(?:[^\s\p{P}\p{S}]|~)/u,Kv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,bm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Gv=Gt(bm,"u").replace(/punct/g,Hd).getRegex(),Yv=Gt(bm,"u").replace(/punct/g,xm).getRegex(),wm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Vv=Gt(wm,"gu").replace(/notPunctSpace/g,vm).replace(/punctSpace/g,bh).replace(/punct/g,Hd).getRegex(),Jv=Gt(wm,"gu").replace(/notPunctSpace/g,$v).replace(/punctSpace/g,qv).replace(/punct/g,xm).getRegex(),Xv=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,vm).replace(/punctSpace/g,bh).replace(/punct/g,Hd).getRegex(),Qv=Gt(/\\(punct)/,"gu").replace(/punct/g,Hd).getRegex(),Zv=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ex=Gt(vh).replace("(?:-->|$)","-->").getRegex(),tx=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ex).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,nx=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),km=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",jd).replace("ref",yh).getRegex(),Sm=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",yh).getRegex(),rx=Gt("reflink|nolink(?!\\()","g").replace("reflink",km).replace("nolink",Sm).getRegex(),wh={_backpedal:sc,anyPunctuation:Qv,autolink:Zv,blockSkip:Kv,br:ym,code:Hv,del:sc,emStrongLDelim:Gv,emStrongRDelimAst:Vv,emStrongRDelimUnd:Xv,escape:Wv,link:nx,nolink:Sm,punctuation:Uv,reflink:km,reflinkSearch:rx,tag:tx,text:Bv,url:sc},ix={...wh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",jd).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jd).getRegex()},Jp={...wh,emStrongRDelimAst:Jv,emStrongLDelim:Yv,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},sx={...Jp,br:Gt(ym).replace("{2,}","*").getRegex(),text:Gt(Jp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},md={normal:xh,gfm:zv,pedantic:Fv},Ju={normal:wh,gfm:Jp,breaks:sx,pedantic:ix},ax={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rf=l=>ax[l];function Ps(l,u){if(u){if(Br.escapeTest.test(l))return l.replace(Br.escapeReplace,rf)}else if(Br.escapeTestNoEncode.test(l))return l.replace(Br.escapeReplaceNoEncode,rf);return l}function sf(l){try{l=encodeURI(l).replace(Br.percentDecode,"%")}catch{return null}return l}function af(l,u){var v;const d=l.replace(Br.findPipe,(S,j,k)=>{let T=!1,E=j;for(;--E>=0&&k[E]==="\\";)T=!T;return T?"|":" |"}),m=d.split(Br.splitPipe);let y=0;if(m[0].trim()||m.shift(),m.length>0&&!((v=m.at(-1))!=null&&v.trim())&&m.pop(),u)if(m.length>u)m.splice(u);else for(;m.length<u;)m.push("");for(;y<m.length;y++)m[y]=m[y].trim().replace(Br.slashPipe,"|");return m}function Xu(l,u,d){const m=l.length;if(m===0)return"";let y=0;for(;y<m&&l.charAt(m-y-1)===u;)y++;return l.slice(0,m-y)}function ox(l,u){if(l.indexOf(u[1])===-1)return-1;let d=0;for(let m=0;m<l.length;m++)if(l[m]==="\\")m++;else if(l[m]===u[0])d++;else if(l[m]===u[1]&&(d--,d<0))return m;return d>0?-2:-1}function of(l,u,d,m,y){const v=u.href,S=u.title||null,j=l[1].replace(y.other.outputLinkReplace,"$1");m.state.inLink=!0;const k={type:l[0].charAt(0)==="!"?"image":"link",raw:d,href:v,title:S,text:j,tokens:m.inlineTokens(j)};return m.state.inLink=!1,k}function lx(l,u,d){const m=l.match(d.other.indentCodeCompensation);if(m===null)return u;const y=m[1];return u.split(`
`).map(v=>{const S=v.match(d.other.beginningSpace);if(S===null)return v;const[j]=S;return j.length>=y.length?v.slice(y.length):v}).join(`
`)}var Nd=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||rl}space(l){const u=this.rules.block.newline.exec(l);if(u&&u[0].length>0)return{type:"space",raw:u[0]}}code(l){const u=this.rules.block.code.exec(l);if(u){const d=u[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Xu(d,`
`)}}}fences(l){const u=this.rules.block.fences.exec(l);if(u){const d=u[0],m=lx(d,u[3]||"",this.rules);return{type:"code",raw:d,lang:u[2]?u[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):u[2],text:m}}}heading(l){const u=this.rules.block.heading.exec(l);if(u){let d=u[2].trim();if(this.rules.other.endingHash.test(d)){const m=Xu(d,"#");(this.options.pedantic||!m||this.rules.other.endingSpaceChar.test(m))&&(d=m.trim())}return{type:"heading",raw:u[0],depth:u[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(l){const u=this.rules.block.hr.exec(l);if(u)return{type:"hr",raw:Xu(u[0],`
`)}}blockquote(l){const u=this.rules.block.blockquote.exec(l);if(u){let d=Xu(u[0],`
`).split(`
`),m="",y="";const v=[];for(;d.length>0;){let S=!1;const j=[];let k;for(k=0;k<d.length;k++)if(this.rules.other.blockquoteStart.test(d[k]))j.push(d[k]),S=!0;else if(!S)j.push(d[k]);else break;d=d.slice(k);const T=j.join(`
`),E=T.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");m=m?`${m}
${T}`:T,y=y?`${y}
${E}`:E;const H=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,v,!0),this.lexer.state.top=H,d.length===0)break;const L=v.at(-1);if((L==null?void 0:L.type)==="code")break;if((L==null?void 0:L.type)==="blockquote"){const G=L,O=G.raw+`
`+d.join(`
`),V=this.blockquote(O);v[v.length-1]=V,m=m.substring(0,m.length-G.raw.length)+V.raw,y=y.substring(0,y.length-G.text.length)+V.text;break}else if((L==null?void 0:L.type)==="list"){const G=L,O=G.raw+`
`+d.join(`
`),V=this.list(O);v[v.length-1]=V,m=m.substring(0,m.length-L.raw.length)+V.raw,y=y.substring(0,y.length-G.raw.length)+V.raw,d=O.substring(v.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:m,tokens:v,text:y}}}list(l){let u=this.rules.block.list.exec(l);if(u){let d=u[1].trim();const m=d.length>1,y={type:"list",raw:"",ordered:m,start:m?+d.slice(0,-1):"",loose:!1,items:[]};d=m?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=m?d:"[*+-]");const v=this.rules.other.listItemRegex(d);let S=!1;for(;l;){let k=!1,T="",E="";if(!(u=v.exec(l))||this.rules.block.hr.test(l))break;T=u[0],l=l.substring(T.length);let H=u[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),L=l.split(`
`,1)[0],G=!H.trim(),O=0;if(this.options.pedantic?(O=2,E=H.trimStart()):G?O=u[1].length+1:(O=u[2].search(this.rules.other.nonSpaceChar),O=O>4?1:O,E=H.slice(O),O+=u[1].length),G&&this.rules.other.blankLine.test(L)&&(T+=L+`
`,l=l.substring(L.length+1),k=!0),!k){const M=this.rules.other.nextBulletRegex(O),F=this.rules.other.hrRegex(O),U=this.rules.other.fencesBeginRegex(O),W=this.rules.other.headingBeginRegex(O),J=this.rules.other.htmlBeginRegex(O);for(;l;){const ce=l.split(`
`,1)[0];let oe;if(L=ce,this.options.pedantic?(L=L.replace(this.rules.other.listReplaceNesting,"  "),oe=L):oe=L.replace(this.rules.other.tabCharGlobal,"    "),U.test(L)||W.test(L)||J.test(L)||M.test(L)||F.test(L))break;if(oe.search(this.rules.other.nonSpaceChar)>=O||!L.trim())E+=`
`+oe.slice(O);else{if(G||H.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||U.test(H)||W.test(H)||F.test(H))break;E+=`
`+L}!G&&!L.trim()&&(G=!0),T+=ce+`
`,l=l.substring(ce.length+1),H=oe.slice(O)}}y.loose||(S?y.loose=!0:this.rules.other.doubleBlankLine.test(T)&&(S=!0));let V=null,X;this.options.gfm&&(V=this.rules.other.listIsTask.exec(E),V&&(X=V[0]!=="[ ] ",E=E.replace(this.rules.other.listReplaceTask,""))),y.items.push({type:"list_item",raw:T,task:!!V,checked:X,loose:!1,text:E,tokens:[]}),y.raw+=T}const j=y.items.at(-1);if(j)j.raw=j.raw.trimEnd(),j.text=j.text.trimEnd();else return;y.raw=y.raw.trimEnd();for(let k=0;k<y.items.length;k++)if(this.lexer.state.top=!1,y.items[k].tokens=this.lexer.blockTokens(y.items[k].text,[]),!y.loose){const T=y.items[k].tokens.filter(H=>H.type==="space"),E=T.length>0&&T.some(H=>this.rules.other.anyLine.test(H.raw));y.loose=E}if(y.loose)for(let k=0;k<y.items.length;k++)y.items[k].loose=!0;return y}}html(l){const u=this.rules.block.html.exec(l);if(u)return{type:"html",block:!0,raw:u[0],pre:u[1]==="pre"||u[1]==="script"||u[1]==="style",text:u[0]}}def(l){const u=this.rules.block.def.exec(l);if(u){const d=u[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),m=u[2]?u[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",y=u[3]?u[3].substring(1,u[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):u[3];return{type:"def",tag:d,raw:u[0],href:m,title:y}}}table(l){var S;const u=this.rules.block.table.exec(l);if(!u||!this.rules.other.tableDelimiter.test(u[2]))return;const d=af(u[1]),m=u[2].replace(this.rules.other.tableAlignChars,"").split("|"),y=(S=u[3])!=null&&S.trim()?u[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],v={type:"table",raw:u[0],header:[],align:[],rows:[]};if(d.length===m.length){for(const j of m)this.rules.other.tableAlignRight.test(j)?v.align.push("right"):this.rules.other.tableAlignCenter.test(j)?v.align.push("center"):this.rules.other.tableAlignLeft.test(j)?v.align.push("left"):v.align.push(null);for(let j=0;j<d.length;j++)v.header.push({text:d[j],tokens:this.lexer.inline(d[j]),header:!0,align:v.align[j]});for(const j of y)v.rows.push(af(j,v.header.length).map((k,T)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:v.align[T]})));return v}}lheading(l){const u=this.rules.block.lheading.exec(l);if(u)return{type:"heading",raw:u[0],depth:u[2].charAt(0)==="="?1:2,text:u[1],tokens:this.lexer.inline(u[1])}}paragraph(l){const u=this.rules.block.paragraph.exec(l);if(u){const d=u[1].charAt(u[1].length-1)===`
`?u[1].slice(0,-1):u[1];return{type:"paragraph",raw:u[0],text:d,tokens:this.lexer.inline(d)}}}text(l){const u=this.rules.block.text.exec(l);if(u)return{type:"text",raw:u[0],text:u[0],tokens:this.lexer.inline(u[0])}}escape(l){const u=this.rules.inline.escape.exec(l);if(u)return{type:"escape",raw:u[0],text:u[1]}}tag(l){const u=this.rules.inline.tag.exec(l);if(u)return!this.lexer.state.inLink&&this.rules.other.startATag.test(u[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(u[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(u[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(u[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:u[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:u[0]}}link(l){const u=this.rules.inline.link.exec(l);if(u){const d=u[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const v=Xu(d.slice(0,-1),"\\");if((d.length-v.length)%2===0)return}else{const v=ox(u[2],"()");if(v===-2)return;if(v>-1){const j=(u[0].indexOf("!")===0?5:4)+u[1].length+v;u[2]=u[2].substring(0,v),u[0]=u[0].substring(0,j).trim(),u[3]=""}}let m=u[2],y="";if(this.options.pedantic){const v=this.rules.other.pedanticHrefTitle.exec(m);v&&(m=v[1],y=v[3])}else y=u[3]?u[3].slice(1,-1):"";return m=m.trim(),this.rules.other.startAngleBracket.test(m)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?m=m.slice(1):m=m.slice(1,-1)),of(u,{href:m&&m.replace(this.rules.inline.anyPunctuation,"$1"),title:y&&y.replace(this.rules.inline.anyPunctuation,"$1")},u[0],this.lexer,this.rules)}}reflink(l,u){let d;if((d=this.rules.inline.reflink.exec(l))||(d=this.rules.inline.nolink.exec(l))){const m=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),y=u[m.toLowerCase()];if(!y){const v=d[0].charAt(0);return{type:"text",raw:v,text:v}}return of(d,y,d[0],this.lexer,this.rules)}}emStrong(l,u,d=""){let m=this.rules.inline.emStrongLDelim.exec(l);if(!m||m[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(m[1]||m[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const v=[...m[0]].length-1;let S,j,k=v,T=0;const E=m[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(E.lastIndex=0,u=u.slice(-1*l.length+v);(m=E.exec(u))!=null;){if(S=m[1]||m[2]||m[3]||m[4]||m[5]||m[6],!S)continue;if(j=[...S].length,m[3]||m[4]){k+=j;continue}else if((m[5]||m[6])&&v%3&&!((v+j)%3)){T+=j;continue}if(k-=j,k>0)continue;j=Math.min(j,j+k+T);const H=[...m[0]][0].length,L=l.slice(0,v+m.index+H+j);if(Math.min(v,j)%2){const O=L.slice(1,-1);return{type:"em",raw:L,text:O,tokens:this.lexer.inlineTokens(O)}}const G=L.slice(2,-2);return{type:"strong",raw:L,text:G,tokens:this.lexer.inlineTokens(G)}}}}codespan(l){const u=this.rules.inline.code.exec(l);if(u){let d=u[2].replace(this.rules.other.newLineCharGlobal," ");const m=this.rules.other.nonSpaceChar.test(d),y=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return m&&y&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:u[0],text:d}}}br(l){const u=this.rules.inline.br.exec(l);if(u)return{type:"br",raw:u[0]}}del(l){const u=this.rules.inline.del.exec(l);if(u)return{type:"del",raw:u[0],text:u[2],tokens:this.lexer.inlineTokens(u[2])}}autolink(l){const u=this.rules.inline.autolink.exec(l);if(u){let d,m;return u[2]==="@"?(d=u[1],m="mailto:"+d):(d=u[1],m=d),{type:"link",raw:u[0],text:d,href:m,tokens:[{type:"text",raw:d,text:d}]}}}url(l){var d;let u;if(u=this.rules.inline.url.exec(l)){let m,y;if(u[2]==="@")m=u[0],y="mailto:"+m;else{let v;do v=u[0],u[0]=((d=this.rules.inline._backpedal.exec(u[0]))==null?void 0:d[0])??"";while(v!==u[0]);m=u[0],u[1]==="www."?y="http://"+u[0]:y=u[0]}return{type:"link",raw:u[0],text:m,href:y,tokens:[{type:"text",raw:m,text:m}]}}}inlineText(l){const u=this.rules.inline.text.exec(l);if(u){const d=this.lexer.state.inRawBlock;return{type:"text",raw:u[0],text:u[0],escaped:d}}}},fa=class Xp{constructor(u){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=u||rl,this.options.tokenizer=this.options.tokenizer||new Nd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Br,block:md.normal,inline:Ju.normal};this.options.pedantic?(d.block=md.pedantic,d.inline=Ju.pedantic):this.options.gfm&&(d.block=md.gfm,this.options.breaks?d.inline=Ju.breaks:d.inline=Ju.gfm),this.tokenizer.rules=d}static get rules(){return{block:md,inline:Ju}}static lex(u,d){return new Xp(d).lex(u)}static lexInline(u,d){return new Xp(d).inlineTokens(u)}lex(u){u=u.replace(Br.carriageReturn,`
`),this.blockTokens(u,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const m=this.inlineQueue[d];this.inlineTokens(m.src,m.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(u,d=[],m=!1){var y,v,S;for(this.options.pedantic&&(u=u.replace(Br.tabCharGlobal,"    ").replace(Br.spaceLine,""));u;){let j;if((v=(y=this.options.extensions)==null?void 0:y.block)!=null&&v.some(T=>(j=T.call({lexer:this},u,d))?(u=u.substring(j.raw.length),d.push(j),!0):!1))continue;if(j=this.tokenizer.space(u)){u=u.substring(j.raw.length);const T=d.at(-1);j.raw.length===1&&T!==void 0?T.raw+=`
`:d.push(j);continue}if(j=this.tokenizer.code(u)){u=u.substring(j.raw.length);const T=d.at(-1);(T==null?void 0:T.type)==="paragraph"||(T==null?void 0:T.type)==="text"?(T.raw+=`
`+j.raw,T.text+=`
`+j.text,this.inlineQueue.at(-1).src=T.text):d.push(j);continue}if(j=this.tokenizer.fences(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.heading(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.hr(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.blockquote(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.list(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.html(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.def(u)){u=u.substring(j.raw.length);const T=d.at(-1);(T==null?void 0:T.type)==="paragraph"||(T==null?void 0:T.type)==="text"?(T.raw+=`
`+j.raw,T.text+=`
`+j.raw,this.inlineQueue.at(-1).src=T.text):this.tokens.links[j.tag]||(this.tokens.links[j.tag]={href:j.href,title:j.title});continue}if(j=this.tokenizer.table(u)){u=u.substring(j.raw.length),d.push(j);continue}if(j=this.tokenizer.lheading(u)){u=u.substring(j.raw.length),d.push(j);continue}let k=u;if((S=this.options.extensions)!=null&&S.startBlock){let T=1/0;const E=u.slice(1);let H;this.options.extensions.startBlock.forEach(L=>{H=L.call({lexer:this},E),typeof H=="number"&&H>=0&&(T=Math.min(T,H))}),T<1/0&&T>=0&&(k=u.substring(0,T+1))}if(this.state.top&&(j=this.tokenizer.paragraph(k))){const T=d.at(-1);m&&(T==null?void 0:T.type)==="paragraph"?(T.raw+=`
`+j.raw,T.text+=`
`+j.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=T.text):d.push(j),m=k.length!==u.length,u=u.substring(j.raw.length);continue}if(j=this.tokenizer.text(u)){u=u.substring(j.raw.length);const T=d.at(-1);(T==null?void 0:T.type)==="text"?(T.raw+=`
`+j.raw,T.text+=`
`+j.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=T.text):d.push(j);continue}if(u){const T="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(T);break}else throw new Error(T)}}return this.state.top=!0,d}inline(u,d=[]){return this.inlineQueue.push({src:u,tokens:d}),d}inlineTokens(u,d=[]){var j,k,T;let m=u,y=null;if(this.tokens.links){const E=Object.keys(this.tokens.links);if(E.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(m))!=null;)E.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(m=m.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+m.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.anyPunctuation.exec(m))!=null;)m=m.slice(0,y.index)+"++"+m.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(y=this.tokenizer.rules.inline.blockSkip.exec(m))!=null;)m=m.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+m.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let v=!1,S="";for(;u;){v||(S=""),v=!1;let E;if((k=(j=this.options.extensions)==null?void 0:j.inline)!=null&&k.some(L=>(E=L.call({lexer:this},u,d))?(u=u.substring(E.raw.length),d.push(E),!0):!1))continue;if(E=this.tokenizer.escape(u)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.tag(u)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.link(u)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.reflink(u,this.tokens.links)){u=u.substring(E.raw.length);const L=d.at(-1);E.type==="text"&&(L==null?void 0:L.type)==="text"?(L.raw+=E.raw,L.text+=E.text):d.push(E);continue}if(E=this.tokenizer.emStrong(u,m,S)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.codespan(u)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.br(u)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.del(u)){u=u.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.autolink(u)){u=u.substring(E.raw.length),d.push(E);continue}if(!this.state.inLink&&(E=this.tokenizer.url(u))){u=u.substring(E.raw.length),d.push(E);continue}let H=u;if((T=this.options.extensions)!=null&&T.startInline){let L=1/0;const G=u.slice(1);let O;this.options.extensions.startInline.forEach(V=>{O=V.call({lexer:this},G),typeof O=="number"&&O>=0&&(L=Math.min(L,O))}),L<1/0&&L>=0&&(H=u.substring(0,L+1))}if(E=this.tokenizer.inlineText(H)){u=u.substring(E.raw.length),E.raw.slice(-1)!=="_"&&(S=E.raw.slice(-1)),v=!0;const L=d.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=E.raw,L.text+=E.text):d.push(E);continue}if(u){const L="Infinite loop on byte: "+u.charCodeAt(0);if(this.options.silent){console.error(L);break}else throw new Error(L)}}return d}},Ed=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||rl}space(l){return""}code({text:l,lang:u,escaped:d}){var v;const m=(v=(u||"").match(Br.notSpaceStart))==null?void 0:v[0],y=l.replace(Br.endingNewline,"")+`
`;return m?'<pre><code class="language-'+Ps(m)+'">'+(d?y:Ps(y,!0))+`</code></pre>
`:"<pre><code>"+(d?y:Ps(y,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:u}){return`<h${u}>${this.parser.parseInline(l)}</h${u}>
`}hr(l){return`<hr>
`}list(l){const u=l.ordered,d=l.start;let m="";for(let S=0;S<l.items.length;S++){const j=l.items[S];m+=this.listitem(j)}const y=u?"ol":"ul",v=u&&d!==1?' start="'+d+'"':"";return"<"+y+v+`>
`+m+"</"+y+`>
`}listitem(l){var d;let u="";if(l.task){const m=this.checkbox({checked:!!l.checked});l.loose?((d=l.tokens[0])==null?void 0:d.type)==="paragraph"?(l.tokens[0].text=m+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=m+" "+Ps(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:m+" ",text:m+" ",escaped:!0}):u+=m+" "}return u+=this.parser.parse(l.tokens,!!l.loose),`<li>${u}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let u="",d="";for(let y=0;y<l.header.length;y++)d+=this.tablecell(l.header[y]);u+=this.tablerow({text:d});let m="";for(let y=0;y<l.rows.length;y++){const v=l.rows[y];d="";for(let S=0;S<v.length;S++)d+=this.tablecell(v[S]);m+=this.tablerow({text:d})}return m&&(m=`<tbody>${m}</tbody>`),`<table>
<thead>
`+u+`</thead>
`+m+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const u=this.parser.parseInline(l.tokens),d=l.header?"th":"td";return(l.align?`<${d} align="${l.align}">`:`<${d}>`)+u+`</${d}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ps(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:u,tokens:d}){const m=this.parser.parseInline(d),y=sf(l);if(y===null)return m;l=y;let v='<a href="'+l+'"';return u&&(v+=' title="'+Ps(u)+'"'),v+=">"+m+"</a>",v}image({href:l,title:u,text:d,tokens:m}){m&&(d=this.parser.parseInline(m,this.parser.textRenderer));const y=sf(l);if(y===null)return Ps(d);l=y;let v=`<img src="${l}" alt="${d}"`;return u&&(v+=` title="${Ps(u)}"`),v+=">",v}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ps(l.text)}},kh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},ma=class Qp{constructor(u){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=u||rl,this.options.renderer=this.options.renderer||new Ed,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new kh}static parse(u,d){return new Qp(d).parse(u)}static parseInline(u,d){return new Qp(d).parseInline(u)}parse(u,d=!0){var y,v;let m="";for(let S=0;S<u.length;S++){const j=u[S];if((v=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&v[j.type]){const T=j,E=this.options.extensions.renderers[T.type].call({parser:this},T);if(E!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(T.type)){m+=E||"";continue}}const k=j;switch(k.type){case"space":{m+=this.renderer.space(k);continue}case"hr":{m+=this.renderer.hr(k);continue}case"heading":{m+=this.renderer.heading(k);continue}case"code":{m+=this.renderer.code(k);continue}case"table":{m+=this.renderer.table(k);continue}case"blockquote":{m+=this.renderer.blockquote(k);continue}case"list":{m+=this.renderer.list(k);continue}case"html":{m+=this.renderer.html(k);continue}case"paragraph":{m+=this.renderer.paragraph(k);continue}case"text":{let T=k,E=this.renderer.text(T);for(;S+1<u.length&&u[S+1].type==="text";)T=u[++S],E+=`
`+this.renderer.text(T);d?m+=this.renderer.paragraph({type:"paragraph",raw:E,text:E,tokens:[{type:"text",raw:E,text:E,escaped:!0}]}):m+=E;continue}default:{const T='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(T),"";throw new Error(T)}}}return m}parseInline(u,d=this.renderer){var y,v;let m="";for(let S=0;S<u.length;S++){const j=u[S];if((v=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&v[j.type]){const T=this.options.extensions.renderers[j.type].call({parser:this},j);if(T!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(j.type)){m+=T||"";continue}}const k=j;switch(k.type){case"escape":{m+=d.text(k);break}case"html":{m+=d.html(k);break}case"link":{m+=d.link(k);break}case"image":{m+=d.image(k);break}case"strong":{m+=d.strong(k);break}case"em":{m+=d.em(k);break}case"codespan":{m+=d.codespan(k);break}case"br":{m+=d.br(k);break}case"del":{m+=d.del(k);break}case"text":{m+=d.text(k);break}default:{const T='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(T),"";throw new Error(T)}}}return m}},Kp,bd=(Kp=class{constructor(l){on(this,"options");on(this,"block");this.options=l||rl}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?fa.lex:fa.lexInline}provideParser(){return this.block?ma.parse:ma.parseInline}},on(Kp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Kp),ux=class{constructor(...l){on(this,"defaults",fh());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",ma);on(this,"Renderer",Ed);on(this,"TextRenderer",kh);on(this,"Lexer",fa);on(this,"Tokenizer",Nd);on(this,"Hooks",bd);this.use(...l)}walkTokens(l,u){var m,y;let d=[];for(const v of l)switch(d=d.concat(u.call(this,v)),v.type){case"table":{const S=v;for(const j of S.header)d=d.concat(this.walkTokens(j.tokens,u));for(const j of S.rows)for(const k of j)d=d.concat(this.walkTokens(k.tokens,u));break}case"list":{const S=v;d=d.concat(this.walkTokens(S.items,u));break}default:{const S=v;(y=(m=this.defaults.extensions)==null?void 0:m.childTokens)!=null&&y[S.type]?this.defaults.extensions.childTokens[S.type].forEach(j=>{const k=S[j].flat(1/0);d=d.concat(this.walkTokens(k,u))}):S.tokens&&(d=d.concat(this.walkTokens(S.tokens,u)))}}return d}use(...l){const u=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(d=>{const m={...d};if(m.async=this.defaults.async||m.async||!1,d.extensions&&(d.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if("renderer"in y){const v=u.renderers[y.name];v?u.renderers[y.name]=function(...S){let j=y.renderer.apply(this,S);return j===!1&&(j=v.apply(this,S)),j}:u.renderers[y.name]=y.renderer}if("tokenizer"in y){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const v=u[y.level];v?v.unshift(y.tokenizer):u[y.level]=[y.tokenizer],y.start&&(y.level==="block"?u.startBlock?u.startBlock.push(y.start):u.startBlock=[y.start]:y.level==="inline"&&(u.startInline?u.startInline.push(y.start):u.startInline=[y.start]))}"childTokens"in y&&y.childTokens&&(u.childTokens[y.name]=y.childTokens)}),m.extensions=u),d.renderer){const y=this.defaults.renderer||new Ed(this.defaults);for(const v in d.renderer){if(!(v in y))throw new Error(`renderer '${v}' does not exist`);if(["options","parser"].includes(v))continue;const S=v,j=d.renderer[S],k=y[S];y[S]=(...T)=>{let E=j.apply(y,T);return E===!1&&(E=k.apply(y,T)),E||""}}m.renderer=y}if(d.tokenizer){const y=this.defaults.tokenizer||new Nd(this.defaults);for(const v in d.tokenizer){if(!(v in y))throw new Error(`tokenizer '${v}' does not exist`);if(["options","rules","lexer"].includes(v))continue;const S=v,j=d.tokenizer[S],k=y[S];y[S]=(...T)=>{let E=j.apply(y,T);return E===!1&&(E=k.apply(y,T)),E}}m.tokenizer=y}if(d.hooks){const y=this.defaults.hooks||new bd;for(const v in d.hooks){if(!(v in y))throw new Error(`hook '${v}' does not exist`);if(["options","block"].includes(v))continue;const S=v,j=d.hooks[S],k=y[S];bd.passThroughHooks.has(v)?y[S]=T=>{if(this.defaults.async)return Promise.resolve(j.call(y,T)).then(H=>k.call(y,H));const E=j.call(y,T);return k.call(y,E)}:y[S]=(...T)=>{let E=j.apply(y,T);return E===!1&&(E=k.apply(y,T)),E}}m.hooks=y}if(d.walkTokens){const y=this.defaults.walkTokens,v=d.walkTokens;m.walkTokens=function(S){let j=[];return j.push(v.call(this,S)),y&&(j=j.concat(y.call(this,S))),j}}this.defaults={...this.defaults,...m}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,u){return fa.lex(l,u??this.defaults)}parser(l,u){return ma.parse(l,u??this.defaults)}parseMarkdown(l){return(d,m)=>{const y={...m},v={...this.defaults,...y},S=this.onError(!!v.silent,!!v.async);if(this.defaults.async===!0&&y.async===!1)return S(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return S(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return S(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));v.hooks&&(v.hooks.options=v,v.hooks.block=l);const j=v.hooks?v.hooks.provideLexer():l?fa.lex:fa.lexInline,k=v.hooks?v.hooks.provideParser():l?ma.parse:ma.parseInline;if(v.async)return Promise.resolve(v.hooks?v.hooks.preprocess(d):d).then(T=>j(T,v)).then(T=>v.hooks?v.hooks.processAllTokens(T):T).then(T=>v.walkTokens?Promise.all(this.walkTokens(T,v.walkTokens)).then(()=>T):T).then(T=>k(T,v)).then(T=>v.hooks?v.hooks.postprocess(T):T).catch(S);try{v.hooks&&(d=v.hooks.preprocess(d));let T=j(d,v);v.hooks&&(T=v.hooks.processAllTokens(T)),v.walkTokens&&this.walkTokens(T,v.walkTokens);let E=k(T,v);return v.hooks&&(E=v.hooks.postprocess(E)),E}catch(T){return S(T)}}}onError(l,u){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const m="<p>An error occurred:</p><pre>"+Ps(d.message+"",!0)+"</pre>";return u?Promise.resolve(m):m}if(u)return Promise.reject(d);throw d}}},Qo=new ux;function Jt(l,u){return Qo.parse(l,u)}Jt.options=Jt.setOptions=function(l){return Qo.setOptions(l),Jt.defaults=Qo.defaults,hm(Jt.defaults),Jt};Jt.getDefaults=fh;Jt.defaults=rl;Jt.use=function(...l){return Qo.use(...l),Jt.defaults=Qo.defaults,hm(Jt.defaults),Jt};Jt.walkTokens=function(l,u){return Qo.walkTokens(l,u)};Jt.parseInline=Qo.parseInline;Jt.Parser=ma;Jt.parser=ma.parse;Jt.Renderer=Ed;Jt.TextRenderer=kh;Jt.Lexer=fa;Jt.lexer=fa.lex;Jt.Tokenizer=Nd;Jt.Hooks=bd;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;ma.parse;fa.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function lf(l,u){(u==null||u>l.length)&&(u=l.length);for(var d=0,m=Array(u);d<u;d++)m[d]=l[d];return m}function cx(l){if(Array.isArray(l))return l}function dx(l,u){var d=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(d!=null){var m,y,v,S,j=[],k=!0,T=!1;try{if(v=(d=d.call(l)).next,u!==0)for(;!(k=(m=v.call(d)).done)&&(j.push(m.value),j.length!==u);k=!0);}catch(E){T=!0,y=E}finally{try{if(!k&&d.return!=null&&(S=d.return(),Object(S)!==S))return}finally{if(T)throw y}}return j}}function px(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function hx(l,u){return cx(l)||dx(l,u)||fx(l,u)||px()}function fx(l,u){if(l){if(typeof l=="string")return lf(l,u);var d={}.toString.call(l).slice(8,-1);return d==="Object"&&l.constructor&&(d=l.constructor.name),d==="Map"||d==="Set"?Array.from(l):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?lf(l,u):void 0}}const _m=Object.entries,mx=Object.keys,uf=Object.setPrototypeOf,gx=Object.isFrozen,Cm=Object.getPrototypeOf,Tm=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,eo=Object.create,jm=typeof Reflect<"u"&&Reflect,Ld=jm.apply,Zp=jm.construct;dr||(dr=function(u){return u});Qn||(Qn=function(u){return u});Ld||(Ld=function(u,d){for(var m=arguments.length,y=new Array(m>2?m-2:0),v=2;v<m;v++)y[v-2]=arguments[v];return u.apply(d,y)});Zp||(Zp=function(u){for(var d=arguments.length,m=new Array(d>1?d-1:0),y=1;y<d;y++)m[y-1]=arguments[y];return new u(...m)});const ca=jn(Array.prototype.forEach),yx=jn(Array.prototype.lastIndexOf),cf=jn(Array.prototype.pop),Qu=jn(Array.prototype.push),vx=jn(Array.prototype.slice),xx=jn(Array.prototype.splice),Yl=Array.isArray,Rp=Nm(Set),Ip=jn(Set.prototype.add),Zu=jn(Set.prototype.has),Yo=jn(String.prototype.toLowerCase),Op=jn(String.prototype.toString),bx=jn(String.prototype.match),gd=jn(String.prototype.replace),Dp=jn(String.prototype.indexOf),wx=jn(String.prototype.trim),kx=jn(Number.prototype.toString),Sx=jn(Boolean.prototype.toString),df=typeof BigInt>"u"?null:jn(BigInt.prototype.toString),pf=typeof Symbol>"u"?null:jn(Symbol.prototype.toString),Rr=jn(Object.prototype.hasOwnProperty),ec=jn(Object.prototype.toString),_x=RegExp.prototype.test,cr=function(u,d){return u instanceof RegExp&&(u.lastIndex=0),Ld(_x,u,[d])},da=Nm(TypeError);function jn(l){return function(u){for(var d=arguments.length,m=new Array(d>1?d-1:0),y=1;y<d;y++)m[y-1]=arguments[y];return Ld(l,u,m)}}function Nm(l){return function(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];return Zp(l,d)}}function Kt(l,u){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yo;if(uf&&uf(l,null),!Yl(u))return l;let m=u.length;for(;m--;){let y=u[m];if(typeof y=="string"){const v=d(y);v!==y&&(gx(u)||(u[m]=v),y=v)}l[y]=!0}return l}function Cx(l){for(let u=0;u<l.length;u++)Rr(l,u)||(l[u]=null);return l}function Pd(l){const u=eo(null);for(const m of _m(l)){var d=hx(m,2);const y=d[0],v=d[1];Rr(l,y)&&(Yl(v)?u[y]=Cx(v):v&&typeof v=="object"&&v.constructor===Object?u[y]=Pd(v):u[y]=v)}return u}function nc(l){const u=eo(null),d=mx(l);let m=d.length;for(;m--;)u[d[m]]=l[d[m]];return u}function Tx(l){switch(typeof l){case"string":return l;case"number":return kx(l);case"boolean":return Sx(l);case"bigint":return df?df(l):"0";case"symbol":return pf?pf(l):"Symbol()";case"undefined":return ec(l);case"function":case"object":{if(l===null)return ec(l);const u=l,d=Oi(u,"toString");if(typeof d=="function"){const m=d(u);return typeof m=="string"?m:ec(m)}return ec(l)}default:return ec(l)}}function Oi(l,u){for(;l!==null;){const m=Tm(l,u);if(m){if(m.get)return jn(m.get);if(typeof m.value=="function")return jn(m.value)}l=Cm(l)}function d(){return null}return d}function jx(l,u){for(;l!==null;){const d=Tm(l,u);if(d)return d.get?jn(d.get):null;l=Cm(l)}return null}function Nx(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const hf=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Mp=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),zp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ex=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Fp=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Lx=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ff=dr(["#text"]),mf=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Wp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gf=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),yd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Px=Qn(/{{[\w\W]*|^[\w\W]*}}/g),Ax=Qn(/<%[\w\W]*|^[\w\W]*%>/g),Rx=Qn(/\${[\w\W]*/g),Ix=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),Ox=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Dx=Qn(/^aria-[\-\w]+$/),yf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Mx=Qn(/^(?:\w+script|data):/i),zx=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fx=Qn(/^html$/i),Wx=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),Hp=Qn(/<[/\w!]/g),vf=Qn(/<[/\w]/g),Hx=Qn(/<\/no(script|embed|frames)/i),xf=Qn(/\/>/i),Bx=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),Ux=Qn(/^[\r\n\t ]+/),$n={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},qx=dr(Kt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),$x=function(){return typeof window>"u"?null:window},Kx=function(u,d){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let m=null;const y="data-tt-policy-suffix";d&&d.hasAttribute(y)&&(m=d.getAttribute(y));const v="dompurify"+(m?"#"+m:"");try{return u.createPolicy(v,{createHTML(S){return S},createScriptURL(S){return S}})}catch{return console.warn("TrustedTypes policy "+v+" could not be created."),null}},bf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Za=function(u,d,m,y){return Rr(u,d)&&Yl(u[d])?Kt(y.base?nc(y.base):{},u[d],y.transform):m},Bp=function(u,d,m){const y=Rr(u,d)?u[d]:void 0;return y&&typeof y=="object"?Pd(y):m};function Em(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$x();const u=_e=>Em(_e);if(u.version="3.4.18",u.removed=[],!l||!l.document||l.document.nodeType!==$n.document||!l.Element)return u.isSupported=!1,u;let d=l.document;const m=d,y=m.currentScript,v=l.HTMLTemplateElement,S=l.Node,j=l.Element,k=l.NodeFilter,T=l.DOMParser,E=l.trustedTypes,H=j.prototype,L=Oi(H,"cloneNode"),G=Oi(H,"remove"),O=Oi(H,"removeAttributeNode"),V=Oi(H,"nextSibling"),X=Oi(H,"childNodes"),M=Oi(H,"parentNode"),F=Oi(H,"shadowRoot"),U=Oi(H,"attributes"),W=S&&S.prototype?Oi(S.prototype,"nodeType"):null,J=S&&S.prototype?Oi(S.prototype,"nodeName"):null,ce=S&&S.prototype?Oi(S.prototype,"ownerDocument"):null,oe=function(I){return W?W(I):I.nodeType},be=function(I){return J?J(I):I.nodeName},Re=jx(H,"namespaceURI"),ve=function(I){return Re?Re(I):I.namespaceURI};if(typeof v=="function"){const _e=d.createElement("template");_e.content&&_e.content.ownerDocument&&(d=_e.content.ownerDocument)}let se,Ie="",le,fe=!1,A=0;const Q=function(){if(A>0)throw da('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},B=function(I){Q(),A++;try{return se.createHTML(I)}finally{A--}},_=function(I){return se&&fi?B(I):I},P=function(I){Q(),A++;try{return se.createScriptURL(I)}finally{A--}},q=function(){return fe||(le=Kx(E,y),fe=!0),le},D=d,Z=D.implementation,Ce=D.createNodeIterator,ze=D.createDocumentFragment,qe=D.getElementsByTagName,Oe=m.importNode;let Se=bf();u.isSupported=typeof _m=="function"&&typeof M=="function"&&Z&&Z.createHTMLDocument!==void 0;const Be=Px,$e=Ax,et=Rx,Ke=Ox,Ft=Dx,Yt=Mx,Ct=zx,xt=Wx;let tt=yf,Ue=null;const vt=Kt({},[...hf,...Mp,...zp,...Fp,...ff]);let yt=null;const Qe=Kt({},[...mf,...Wp,...gf,...yd]);let ut=null,ae=null,Te=null;const he=Object.seal(eo(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,Ye=!0,at=!1,Ze=!0,mt=!1,pt=!0,Xt=!1,nr=!1,_r=null,Ir=null,Ur=!1,qr=!1,bt=!1,fi=!1,rt=!0,Cr=!1;const tn="user-content-";let It=!0,qt=!1,xn=null,mn=!1,Nn=null;const bn=Kt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ri=null;const In=Kt({},["audio","video","img","source","image","track"]);let pr=null;const mi=Kt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),En="http://www.w3.org/1998/Math/MathML",as="http://www.w3.org/2000/svg",wn="http://www.w3.org/1999/xhtml";let Tr=wn,$r=!1,Or=null;const jr=Kt({},[En,as,wn],Op),gi=dr(Kt({},["mi","mo","mn","ms","mtext"]));let os=null;const On=dr(Kt({},["annotation-xml"]));let ls=null;const Mi=dr(eo(null)),Dr=Kt({},["title","style","font","a","script"]);let Kn=null;const yi=["application/xhtml+xml","text/html"],zi="text/html";let Bt=null,Mr=null;const us=d.createElement("form"),Rt=function(I){return I instanceof RegExp||I instanceof Function},Fi=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!I||typeof I!="object")&&(I={}),I=Pd(I),Kn=yi.indexOf(I.PARSER_MEDIA_TYPE)===-1?zi:I.PARSER_MEDIA_TYPE,Bt=Kn==="application/xhtml+xml"?Op:Yo,Ue=Za(I,"ALLOWED_TAGS",vt,{transform:Bt}),yt=Za(I,"ALLOWED_ATTR",Qe,{transform:Bt}),Or=Za(I,"ALLOWED_NAMESPACES",jr,{transform:Op}),pr=Za(I,"ADD_URI_SAFE_ATTR",mi,{transform:Bt,base:mi}),ri=Za(I,"ADD_DATA_URI_TAGS",In,{transform:Bt,base:In}),Nn=Za(I,"FORBID_CONTENTS",bn,{transform:Bt}),ae=Za(I,"FORBID_TAGS",eo(null),{transform:Bt}),Te=Za(I,"FORBID_ATTR",eo(null),{transform:Bt}),mn=Rr(I,"USE_PROFILES")?I.USE_PROFILES&&typeof I.USE_PROFILES=="object"?Pd(I.USE_PROFILES):I.USE_PROFILES:!1,kt=I.ALLOW_ARIA_ATTR!==!1,Ye=I.ALLOW_DATA_ATTR!==!1,at=I.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,mt=I.SAFE_FOR_TEMPLATES||!1,pt=I.SAFE_FOR_XML!==!1,Xt=I.WHOLE_DOCUMENT||!1,qr=I.RETURN_DOM||!1,bt=I.RETURN_DOM_FRAGMENT||!1,fi=I.RETURN_TRUSTED_TYPE||!1,Ur=I.FORCE_BODY||!1,rt=I.SANITIZE_DOM!==!1,Cr=I.SANITIZE_NAMED_PROPS||!1,It=I.KEEP_CONTENT!==!1,qt=I.IN_PLACE||!1,tt=Nx(I.ALLOWED_URI_REGEXP)?I.ALLOWED_URI_REGEXP:yf,Tr=typeof I.NAMESPACE=="string"?I.NAMESPACE:wn,os=Bp(I,"MATHML_TEXT_INTEGRATION_POINTS",gi),ls=Bp(I,"HTML_INTEGRATION_POINTS",On);const ne=Bp(I,"CUSTOM_ELEMENT_HANDLING",Mi);if(ut=eo(null),Rr(ne,"tagNameCheck")&&Rt(ne.tagNameCheck)&&(ut.tagNameCheck=ne.tagNameCheck),Rr(ne,"attributeNameCheck")&&Rt(ne.attributeNameCheck)&&(ut.attributeNameCheck=ne.attributeNameCheck),Rr(ne,"allowCustomizedBuiltInElements")&&typeof ne.allowCustomizedBuiltInElements=="boolean"&&(ut.allowCustomizedBuiltInElements=ne.allowCustomizedBuiltInElements),Qn(ut),mt&&(Ye=!1),bt&&(qr=!0),mn&&((Rr(I,"ALLOWED_TAGS")||Rr(I,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ue=Kt({},ff),yt=eo(null),mn.html===!0&&(Kt(Ue,hf),Kt(yt,mf)),mn.svg===!0&&(Kt(Ue,Mp),Kt(yt,Wp),Kt(yt,yd)),mn.svgFilters===!0&&(Kt(Ue,zp),Kt(yt,Wp),Kt(yt,yd)),mn.mathMl===!0&&(Kt(Ue,Fp),Kt(yt,gf),Kt(yt,yd))),he.tagCheck=null,he.attributeCheck=null,Rr(I,"ADD_TAGS")&&(typeof I.ADD_TAGS=="function"?he.tagCheck=I.ADD_TAGS:Yl(I.ADD_TAGS)&&(Ue===vt&&(Ue=nc(Ue)),Kt(Ue,I.ADD_TAGS,Bt))),Rr(I,"ADD_ATTR")&&(typeof I.ADD_ATTR=="function"?he.attributeCheck=I.ADD_ATTR:Yl(I.ADD_ATTR)&&(yt===Qe&&(yt=nc(yt)),Kt(yt,I.ADD_ATTR,Bt))),Rr(I,"ADD_FORBID_CONTENTS")&&Yl(I.ADD_FORBID_CONTENTS)&&(Nn===bn&&(Nn=nc(Nn)),Kt(Nn,I.ADD_FORBID_CONTENTS,Bt)),It&&(Ue["#text"]=!0),Xt&&Kt(Ue,["html","head","body"]),Ue.table&&(Ue.tbody=!0,delete ae.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const we=se;se=I.TRUSTED_TYPES_POLICY;try{Ie=B("")}catch(Ee){throw se=we,Ee}}else I.TRUSTED_TYPES_POLICY===null?(se=void 0,Ie=""):(se===void 0&&(se=q()),se&&typeof Ie=="string"&&(Ie=B("")));Mr=dr(I)},ii=Kt({},[...Mp,...zp,...Ex]),Vt=Kt({},[...Fp,...Lx]),Je=function(I,ne,we){return ne===wn?I==="svg":ne===En?I==="svg"&&(we==="annotation-xml"||os[we]):!!ii[I]},si=function(I,ne,we){return ne===wn?I==="math":ne===as?I==="math"&&ls[we]:!!Vt[I]},cs=function(I,ne,we){return ne===as&&!ls[we]||ne===En&&!os[we]?!1:!Vt[I]&&(Dr[I]||!ii[I])},Gn=function(I){const ne=ve(I),we=Yo(be(I)),Ee=M(I);let nt=Tr,ct="template";return Ee&&oe(Ee)===$n.element&&(nt=ve(Ee),ct=Yo(be(Ee))),Or[ne]?ne===as?Je(we,nt,ct):ne===En?si(we,nt,ct):ne===wn?cs(we,nt,ct):Kn==="application/xhtml+xml":!1},N=function(I){Qu(u.removed,{element:I});try{M(I).removeChild(I)}catch{if(G(I),!M(I))throw da("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},$=function(I,ne,we){try{O(I,ne)}catch{try{I.removeAttribute(we)}catch{}}},ge=function(I){jt(I);const ne=X(I);ne&&ca(vx(ne),we=>{try{G(we)}catch{}}),oe(I)===$n.element&&pe(I,!1)},je=function(I,ne,we){if(!we)try{we=ne.getAttributeNode(I)}catch{we=null}if(Qu(u.removed,{attribute:we||null,from:ne}),we)$(ne,we,I);else try{ne.removeAttribute(I)}catch{}if(I==="is")if(qr||bt)try{N(ne)}catch{}else try{ne.setAttribute(I,"")}catch{}},pe=function(I,ne){const we=U(I);if(we)for(let Ee=we.length-1;Ee>=0;--Ee){const nt=we[Ee],ct=nt&&nt.name;typeof ct=="string"&&!(ne&&yt[Bt(ct)])&&$(I,nt,ct)}},He=function(I,ne){let we=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Ee=[I];for(;Ee.length>0;){const nt=Ee.pop();if(ne(nt)===!1)continue;if(we&&oe(nt)===$n.element){const Tt=F(nt);xi(Tt)&&Ee.push(Tt)}const ct=X(nt);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)Ee.push(ct[Tt])}},jt=function(I){He(I,ne=>{oe(ne)===$n.element&&pe(ne,!0)})},Qt=function(I){const ne=[];return He(I,we=>{ne.push(we)},!0),ne},kn=function(I,ne){const we=Rp();ca(Qt(I),Ee=>{oe(Ee)===$n.element&&Ip(we,Ee)}),ca(ne,Ee=>{oe(Ee)===$n.element&&!Zu(we,Ee)&&pe(Ee,!0)})},Kr=function(I,ne){let we=!1;return ca(u.removed,Ee=>{Ee.element&&(we=we||Ee.element===I,jt(Ee.element))}),kn(I,ne),we},il=8,gt=function(I,ne){const we=xn;let Ee=null;const nt=()=>(Ee||(Ee=Rp(),ca(ne,ct=>{Ip(Ee,ct)})),Ee);for(let ct=0;;ct++){const Tt=Qt(I),cn=[I];let $t=!1;if(ca(Tt,hr=>{oe(hr)===$n.documentFragment?Qu(cn,hr):!$t&&!Zu(we,hr)&&($t=Zu(nt(),hr))}),!$t)return;if(ct>=il)throw da("the tree kept changing during in-place sanitization; refusing to return it");ca(cn,(hr,Yn)=>{no(hr,Yn>0,I,nt())})}},no=function(I,ne,we,Ee){const nt=Hi(I);let ct;for(;ct=nt.nextNode();)!Zu(Ee,ct)||Zu(xn,ct)||(ne&&ir(Se.uponSanitizeShadowNode,ct,null),zs(ct,we))},ro=function(I){xn&&Ip(xn,I)},Wi=function(I,ne){return pt?I==="patchsrc"?!0:I==="for"&&ne!=="label"&&ne!=="output":!1},rr=function(I){pt&&He(I,ne=>{const we=oe(ne);if(we===$n.processingInstruction||we===$n.comment&&cr(vf,ne.data)){try{G(ne)}catch{}return!1}if(we===$n.element){const Ee=ne,nt=Bt(be(ne));try{Ee.hasAttribute&&Ee.hasAttribute("patchsrc")&&Ee.removeAttribute("patchsrc"),Ee.hasAttribute&&Ee.hasAttribute("for")&&Wi("for",nt)&&Ee.removeAttribute("for")}catch{}}return!0})},io=function(I){let ne=null,we=null;if(Ur)I="<remove></remove>"+I;else{const ct=bx(I,Ux);we=ct&&ct[0]}Kn==="application/xhtml+xml"&&Tr===wn&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const Ee=se?B(I):I;if(Tr===wn)try{ne=new T().parseFromString(Ee,Kn)}catch{}if(!ne||!ne.documentElement){ne=Z.createDocument(Tr,"template",null);try{ne.documentElement.innerHTML=$r?Ie:Ee}catch{}}const nt=ne.body||ne.documentElement;return I&&we&&nt.insertBefore(d.createTextNode(we),nt.childNodes[0]||null),Tr===wn?qe.call(ne,Xt?"html":"body")[0]:Xt?ne.documentElement:nt},Hi=function(I){let ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const we=ce?ce(I):I.ownerDocument;return Ce.call(we||I,I,(ne?0:k.SHOW_ELEMENT)|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null)},Nt=function(I){return I=gd(I,Be," "),I=gd(I,$e," "),I=gd(I,et," "),I},ds=function(I){var ne;Is(I);const we=(ne=I.querySelectorAll)===null||ne===void 0?void 0:ne.call(I,"template");we&&ca(we,Ee=>{xi(Ee.content)&&ds(Ee.content)})},Is=function(I){I.normalize();const ne=Hi(I,!0);let we=ne.nextNode();for(;we;)we.data=Nt(we.data),we=ne.nextNode()},vi=function(I){const ne=J?J(I):null;return typeof ne!="string"||Bt(ne)!=="form"?!1:typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||I.attributes!==U(I)||typeof I.removeAttribute!="function"||typeof I.removeAttributeNode!="function"||typeof I.getAttributeNode!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function"||I.nodeType!==W(I)||I.childNodes!==X(I)},va=function(I){if(!W||typeof I!="object"||I===null)return null;try{const ne=W(I);return typeof ne=="number"?ne:null}catch{return null}},xi=function(I){return va(I)===$n.documentFragment},Bi=function(I){return va(I)!==null};function ir(_e,I,ne){_e.length!==0&&ca(_e,we=>{we.call(u,I,ne,Mr)})}const xa=function(I,ne,we){return!!(pt&&we===$n.element&&I.hasChildNodes()&&!Bi(I.firstElementChild)&&cr(Hp,I.textContent)&&cr(Hp,I.innerHTML)||pt&&qx[ne]&&we===$n.element&&ve(I)===wn&&(Bi(I.firstElementChild)||typeof I.textContent=="string"&&cr(Hp,I.textContent))||we===$n.processingInstruction||pt&&we===$n.comment&&cr(vf,I.data))},zr=function(I,ne){if(I instanceof RegExp)return cr(I,ne);if(I instanceof Function){for(var we=arguments.length,Ee=new Array(we>2?we-2:0),nt=2;nt<we;nt++)Ee[nt-2]=arguments[nt];return!!I(ne,...Ee)}return!1},ai=function(I,ne,we){if(!ae[ne]&&so(ne)&&zr(ut.tagNameCheck,ne))return!1;if(It&&!Nn[ne]&&!Nn[Yo(ne)]){const Ee=M(I),nt=X(I);if(nt&&Ee){const ct=nt.length;for(let Tt=ct-1;Tt>=0;--Tt){const cn=I===we?L(nt[Tt],!0):nt[Tt];Ee.insertBefore(cn,V(I))}}}return N(I),!0},Dn=function(I,ne,we,Ee){return I.length===0?ne:ne===we||ne===Ee?nc(ne):ne},Gr=function(I,ne){return I===ne||M(I)!==null?!1:(qt&&jt(I),!0)},Os=function(I,ne){if(ro(I),ir(Se.beforeSanitizeElements,I,null),Gr(I,ne))return!0;if(vi(I))return N(I),!0;const we=Bt(be(I)),Ee=oe(I);if(Ue=Dn(Se.uponSanitizeElement,Ue,vt,_r),ir(Se.uponSanitizeElement,I,{tagName:we,allowedTags:Ue}),Gr(I,ne))return!0;if(xa(I,we,Ee))return N(I),!0;if(ae[we]||!(he.tagCheck instanceof Function&&he.tagCheck(we))&&!Ue[we]){const nt=ai(I,we,ne);return nt===!1&&(ir(Se.afterSanitizeElements,I,null),Gr(I,ne))?!0:nt}if(Ee===$n.element&&!Gn(I)||(we==="noscript"||we==="noembed"||we==="noframes")&&cr(Hx,I.innerHTML))return N(I),!0;if(mt&&Ee===$n.text){const nt=I.textContent,ct=Nt(nt);nt!==ct&&(Qu(u.removed,{element:I.cloneNode()}),I.textContent=ct)}return ir(Se.afterSanitizeElements,I,null),Gr(I,ne)},Nr=function(I,ne,we){if(Te[ne]||Wi(ne,I)||rt&&(ne==="id"||ne==="name")&&(we in d||we in us))return!1;const Ee=yt[ne]||he.attributeCheck instanceof Function&&he.attributeCheck(ne,I);if(Ye&&cr(Ke,ne)||kt&&cr(Ft,ne))return!0;if(!Ee)return so(I)&&zr(ut.tagNameCheck,I)&&zr(ut.attributeNameCheck,ne,I)||ne==="is"&&ut.allowCustomizedBuiltInElements&&zr(ut.tagNameCheck,we);if(pr[ne])return!0;const nt=gd(we,Ct,"");return cr(tt,nt)||(ne==="src"||ne==="xlink:href"||ne==="href")&&I!=="script"&&Dp(we,"data:")===0&&ri[I]||at&&!cr(Yt,nt)?!0:!we},Ds=Kt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),so=function(I){return!Ds[Yo(I)]&&cr(xt,I)},Ms=function(I,ne,we,Ee){if(se&&typeof E=="object"&&typeof E.getAttributeType=="function"&&!we)switch(E.getAttributeType(I,ne)){case"TrustedHTML":return B(Ee);case"TrustedScriptURL":return P(Ee)}return Ee},Vl=function(I,ne,we,Ee){try{return we?I.setAttributeNS(we,ne,Ee):I.setAttribute(ne,Ee),vi(I)?(N(I),!1):!0}catch{return je(ne,I),!1}},ao=function(I,ne){return pt&&cr(Bx,ne)?!0:Yo(I)==="attributename"&&Dp(ne,"href")!==-1},ps=function(I,ne){if(ir(Se.beforeSanitizeAttributes,I,null),Gr(I,ne))return;const we=I.attributes;if(!we||vi(I))return;yt=Dn(Se.uponSanitizeAttribute,yt,Qe,Ir);const Ee={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:yt,forceKeepAttr:void 0};let nt=we.length;const ct=Bt(be(I));for(;nt--;){const Tt=we[nt],cn=Tt.name,$t=Tt.namespaceURI,hr=Tt.value,Yn=Bt(cn),fr=hr;let dn=cn==="value"?fr:wx(fr),Er=!1;if(Ee.attrName=Yn,Ee.attrValue=dn,Ee.keepAttr=!0,Ee.forceKeepAttr=void 0,ir(Se.uponSanitizeAttribute,I,Ee),dn=Ee.attrValue,Cr&&(Yn==="id"||Yn==="name")&&Dp(dn,tn)!==0&&(je(cn,I,Tt),dn=tn+dn,Er=!0),ao(cn,dn)){je(cn,I,Tt);continue}if(!Ee.forceKeepAttr){if(!Ee.keepAttr){je(cn,I,Tt);continue}if(!Ze&&cr(xf,dn)){je(cn,I,Tt);continue}if(mt&&(dn=Nt(dn)),!Nr(ct,Yn,dn)){je(cn,I,Tt);continue}dn=Ms(ct,Yn,$t,dn),dn!==fr&&Vl(I,cn,$t,dn)&&Er&&cf(u.removed)}}ir(Se.afterSanitizeAttributes,I,null),Gr(I,ne)},zs=function(I,ne){Os(I,ne),ps(I,ne),xi(I.content)&&oo(I.content)},oo=function(I){let ne=null;const we=Hi(I);for(ir(Se.beforeSanitizeShadowDOM,I,null);ne=we.nextNode();)if(ir(Se.uponSanitizeShadowNode,ne,null),zs(ne,I),oe(ne)===$n.element){const Ee=F(ne);xi(Ee)&&(bi(Ee),oo(Ee))}mt&&Is(I),ir(Se.afterSanitizeShadowDOM,I,null)},bi=function(I){const ne=[{node:I,shadow:null}];for(;ne.length>0;){const we=ne.pop();if(we.shadow){oo(we.shadow);continue}const Ee=we.node,nt=oe(Ee)===$n.element,ct=X(Ee);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)ne.push({node:ct[Tt],shadow:null});if(nt){const Tt=J?J(Ee):null;if(typeof Tt=="string"&&Bt(Tt)==="template"){const cn=Ee.content;xi(cn)&&ne.push({node:cn,shadow:null})}}if(nt){const Tt=F(Ee);xi(Tt)&&ne.push({node:null,shadow:Tt},{node:Tt,shadow:null})}}};return u.sanitize=function(_e){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ne=null,we=null,Ee=null,nt=null;if($r=!_e,$r&&(_e="<!-->"),typeof _e!="string"&&!Bi(_e)&&(_e=Tx(_e),typeof _e!="string"))throw da("dirty is not a string, aborting");if(!u.isSupported)return _e;nr?(Ue=_r,yt=Ir):Fi(I),u.removed=[];const ct=qt&&typeof _e!="string"&&Bi(_e);let Tt=[];const cn=xn;if(ct){rr(_e);const fr=be(_e);if(typeof fr=="string"){const dn=Bt(fr);if(!Ue[dn]||ae[dn])throw ge(_e),da("root node is forbidden and cannot be sanitized in-place")}if(vi(_e))throw ge(_e),da("root node is clobbered and cannot be sanitized in-place");Tt=Qt(_e),xn=Rp()}else if(Bi(_e))ne=io("<!---->"),we=ne.ownerDocument.importNode(_e,!0),we.nodeType===$n.element&&we.nodeName==="BODY"||we.nodeName==="HTML"?ne=we:ne.appendChild(we),bi(ne);else{if(!qr&&!mt&&!Xt&&_e.indexOf("<")===-1)return _(_e);if(ne=io(_e),!ne)return qr?null:fi?Ie:""}ne&&Ur&&N(ne.firstChild);const $t=ct?_e:ne;try{ct&&bi(_e);const fr=Hi($t);for(;Ee=fr.nextNode();)zs(Ee,$t);ct&&gt(_e,Tt)}catch(fr){throw ct&&(ge(_e),Kr(_e,Tt)),fr}finally{xn=cn}if(ct){if(Kr(_e,Tt))throw da("a node selected for removal could not be safely returned; refusing to sanitize in place");return mt&&ds(_e),_e}if(qr){if(mt&&ds(ne),bt)for(nt=ze.call(ne.ownerDocument);ne.firstChild;)nt.appendChild(ne.firstChild);else nt=ne;return(yt.shadowroot||yt.shadowrootmode)&&(nt=Oe.call(m,nt,!0)),nt}const hr=()=>Xt?ne.outerHTML:ne.innerHTML;let Yn=hr();return mt&&cr(Ix,Yn)&&(Is(ne),Yn=hr()),Xt&&Ue["!doctype"]&&ne.ownerDocument&&ne.ownerDocument.doctype&&ne.ownerDocument.doctype.name&&cr(Fx,ne.ownerDocument.doctype.name)&&(Yn="<!DOCTYPE "+ne.ownerDocument.doctype.name+`>
`+Yn),_(Yn)},u.setConfig=function(){let _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fi(_e),nr=!0,_r=Ue,Ir=yt},u.clearConfig=function(){Mr=null,nr=!1,_r=null,Ir=null,se=le,Ie=""},u.isValidAttribute=function(_e,I,ne){Mr||Fi({});const we=Bt(_e),Ee=Bt(I);return typeof ne=="string"&&(ao(I,ne)||!Ze&&cr(xf,ne))?!1:Nr(we,Ee,ne)},u.addHook=function(_e,I){typeof I=="function"&&Rr(Se,_e)&&Qu(Se[_e],I)},u.removeHook=function(_e,I){if(Rr(Se,_e)){if(I!==void 0){const ne=yx(Se[_e],I);return ne===-1?void 0:xx(Se[_e],ne,1)[0]}return cf(Se[_e])}},u.removeHooks=function(_e){Rr(Se,_e)&&(Se[_e]=[])},u.removeAllHooks=function(){Se=bf()},u}var Gx=Em();function Yx(l,u=null){const d=String(l||""),m=d.split(`
`),y=m.findIndex(k=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(k)),v=y===-1?-1:m.findIndex((k,T)=>T>y&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(k)),S=y>=0?m.slice(y,v<0?m.length:v).join(`
`):`# Solve

${(u==null?void 0:u.challenge)||"Try the lesson task before looking at the guide."}`,j=y>=0?[...m.slice(0,y),...v<0?[]:m.slice(v)].join(`
`).trim():d;return{solve:S,learn:j}}function Vx(l){const u=String(l||"").split(`
`),d=[];let m=null;u.forEach((S,j)=>{const k=S.trim(),T=/^(`{3,}|~{3,})/.exec(k);if(T){const G=T[1];m?m.char===G[0]&&G.length>=m.length&&(m=null):m={char:G[0],length:G.length};return}if(m)return;const E=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(S);if(!E)return;const H=E[2],L=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(H);d.push({index:j,level:E[1].length,numbered:L})});const y=d.filter(S=>S.numbered),v=(y.length?y:d.filter(S=>S.level===2)).map(S=>S.index);return v.length?{intro:u.slice(0,v[0]).join(`
`).trim(),steps:v.map((S,j)=>u.slice(S,v[j+1]??u.length).join(`
`).trim())}:{intro:u.join(`
`),steps:[]}}const Jx=Object.assign({"../content/capstone-discovery.md":tv,"../content/capstone-feedback.md":nv,"../content/capstone-interviews.md":rv,"../content/capstone-prototype.md":iv,"../content/csharp-conditionals.md":sv,"../content/csharp-variables.md":av,"../content/python-decisions.md":ov,"../content/python-formatting.md":lv,"../content/python-lists.md":uv,"../content/python-loops.md":cv,"../content/python-strings.md":dv,"../content/python-variables.md":pv,"../content/react-components.md":hv,"../content/react-state.md":fv,"../content/tsi-equations.md":mv,"../content/tsi-percents.md":gv,"../content/tsi-ratios.md":yv,"../content/tsi-slope.md":vv,"../content/uil-arrays.md":xv,"../content/uil-loops.md":bv,"../content/uil-methods.md":wv,"../content/uil-strings.md":kv,"../content/unity-colliders.md":Sv,"../content/unity-player-controller.md":_v,"../content/unity-score.md":Cv,"../content/web-events.md":Tv,"../content/web-layout.md":jv}),Xx="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Qx=l=>Jx[`../content/${l}.md`]||Xx,Zo=l=>Gx.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function Zx(l,u=""){if(!(l!=null&&l.isPublished))return"";let d="";const m=Array.isArray(l.cases)?l.cases:[];m.length&&!/##\s+(?:Published )?Examples\b/i.test(u)&&(d+=`

### Published examples
`,m.forEach((v,S)=>{d+=`
**Example `+(S+1)+`**

`,v.call&&(d+="Input: `"+v.call+`\`

`),d+=l.mode==="function"?`Expected return:
`:`Expected output:
`,d+="\n```text\n"+String(v.expected??"")+"\n```\n"}));const y=Array.isArray(l.hints)?l.hints:[];return y.length&&!/<details(?:\s|>)/i.test(u)&&(d+=`

### Need a hint?
`,y.forEach((v,S)=>{d+=`
<details>
<summary>Hint `+(S+1)+`</summary>

`+String(v).replaceAll("<","&lt;")+`

</details>
`})),d}function wf(l,u){if(!u)return l;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",m=u.startsWith("/playground/data/")?new URL(u,"https://www.mswhitby.com"):new URL(u,d);return String(l).replace(/\]\(([^)]+)\)/g,(y,v)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(v))return y;const[S,...j]=v.split(" ");try{const k=new URL(S,m);return k.origin!==m.origin?y:"]("+k.href+(j.length?" "+j.join(" "):"")+")"}catch{return y}})}const Sh={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Ad(l){try{return localStorage.getItem(l)}catch{return null}}function ha(l,u){try{localStorage.setItem(l,u)}catch{}}function eb(l){try{localStorage.removeItem(l)}catch{}}function kf({lessonId:l,task:u,isTsi:d=!1,tsiAnswer:m=null}){var W;const y=(u==null?void 0:u.markdownSource)||Qx(l),v=Sh.markdown(l),[S,j]=xe.useState(y),[k,T]=xe.useState(d?"learn":"solve"),[E,H]=xe.useState(0),[L,G]=xe.useState(!1);xe.useEffect(()=>{j(Ad(v)??y),T(d?"learn":"solve"),H(0),G(!1)},[v,y,d]);const O=xe.useMemo(()=>{const J=Yx(S,u),ce=J.solve+Zx(u,J.solve);return{solve:wf(ce,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown)),learn:wf(J.learn,(u==null?void 0:u.markdownUrl)||(u==null?void 0:u.markdown))}},[S,u]),V=xe.useMemo(()=>Vx(O.learn),[O.learn]),X=!d&&k==="learn"&&V.steps.length>0,M=Math.min(E,Math.max(0,V.steps.length-1)),F=d?O.learn:k==="solve"?O.solve:X?V.intro+`

`+V.steps[M]:O.learn,U=xe.useMemo(()=>Zo(F),[F]);return c.jsxs("section",{className:"instructions-pane",children:[c.jsxs("div",{className:"pane-header",children:[d?c.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):c.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[c.jsx("button",{role:"tab","aria-selected":k==="solve",className:k==="solve"?"active":"",onClick:()=>{T("solve"),H(0)},children:"Solve"}),c.jsx("button",{role:"tab","aria-selected":k==="learn",className:k==="learn"?"active":"",onClick:()=>{T("learn"),H(0)},children:"Learn"})]}),c.jsx("button",{type:"button",className:pa("icon-button",L&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>G(!L),children:c.jsx(Ny,{size:16})})]}),L?c.jsxs("div",{className:"markdown-source",children:[c.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),c.jsx("textarea",{"aria-label":"Markdown source",value:S,onChange:J=>{j(J.target.value),H(0),ha(v,J.target.value)}}),c.jsx("button",{type:"button",className:"btn",onClick:()=>{eb(v),j(y),H(0)},children:"Reset lesson text"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[c.jsx("div",{dangerouslySetInnerHTML:{__html:U}}),d&&m&&c.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[c.jsx("h3",{children:m.correct?"Why that works":"Review the solution"}),c.jsx("p",{children:(W=hh[l])==null?void 0:W.explanation})]})]}),X&&c.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[M>0&&c.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>H(J=>Math.max(0,J-1)),children:[c.jsx(Dd,{size:16,"aria-hidden":"true"})," Previous"]}),c.jsxs("span",{children:["Step ",M+1," of ",V.steps.length]}),M<V.steps.length-1&&c.jsxs("button",{type:"button",className:"step-link next",onClick:()=>H(J=>Math.min(V.steps.length-1,J+1)),children:["Next ",c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]})]})}var wd={exports:{}},tb=wd.exports,Sf;function ss(){return Sf||(Sf=1,(function(l,u){(function(d,m){l.exports=m()})(tb,(function(){var d=navigator.userAgent,m=navigator.platform,y=/gecko\/\d/i.test(d),v=/MSIE \d/.test(d),S=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),j=/Edge\/(\d+)/.exec(d),k=v||S||j,T=k&&(v?document.documentMode||6:+(j||S)[1]),E=!j&&/WebKit\//.test(d),H=E&&/Qt\/\d+\.\d+/.test(d),L=!j&&/Chrome\/(\d+)/.exec(d),G=L&&+L[1],O=/Opera\//.test(d),V=/Apple Computer/.test(navigator.vendor),X=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),M=/PhantomJS/.test(d),F=V&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),U=/Android/.test(d),W=F||U||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),J=F||/Mac/.test(m),ce=/\bCrOS\b/.test(d),oe=/win/i.test(m),be=O&&d.match(/Version\/(\d*\.\d*)/);be&&(be=Number(be[1])),be&&be>=15&&(O=!1,E=!0);var Re=J&&(H||O&&(be==null||be<12.11)),ve=y||k&&T>=9;function se(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ie=function(e,n){var s=e.className,i=se(n).exec(s);if(i){var a=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(a?i[1]+a:"")}};function le(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function fe(e,n){return le(e).appendChild(n)}function A(e,n,s,i){var a=document.createElement(e);if(s&&(a.className=s),i&&(a.style.cssText=i),typeof n=="string")a.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)a.appendChild(n[h]);return a}function Q(e,n,s,i){var a=A(e,n,s,i);return a.setAttribute("role","presentation"),a}var B;document.createRange?B=function(e,n,s,i){var a=document.createRange();return a.setEnd(i||e,s),a.setStart(e,n),a}:B=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function _(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function P(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function q(e,n){var s=e.className;se(n).test(s)||(e.className+=(s?" ":"")+n)}function D(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!se(s[i]).test(n)&&(n+=" "+s[i]);return n}var Z=function(e){e.select()};F?Z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:k&&(Z=function(e){try{e.select()}catch{}});function Ce(e){return e.display.wrapper.ownerDocument}function ze(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Oe(e){return Ce(e).defaultView}function Se(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Be(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function $e(e,n,s,i,a){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,g=a||0;;){var b=e.indexOf("	",h);if(b<0||b>=n)return g+(n-h);g+=b-h,g+=s-g%s,h=b+1}}var et=function(){this.id=null,this.f=null,this.time=0,this.handler=Se(this.onTimeout,this)};et.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},et.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function Ke(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ft=50,Yt={toString:function(){return"CodeMirror.Pass"}},Ct={scroll:!1},xt={origin:"*mouse"},tt={origin:"+move"};function Ue(e,n,s){for(var i=0,a=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var g=h-i;if(h==e.length||a+g>=n)return i+Math.min(g,n-a);if(a+=h-i,a+=s-a%s,i=h+1,a>=n)return i}}var vt=[""];function yt(e){for(;vt.length<=e;)vt.push(Qe(vt)+" ");return vt[e]}function Qe(e){return e[e.length-1]}function ut(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function ae(e,n,s){for(var i=0,a=s(n);i<e.length&&s(e[i])<=a;)i++;e.splice(i,0,n)}function Te(){}function he(e,n){var s;return Object.create?s=Object.create(e):(Te.prototype=e,s=new Te),n&&Be(n,s),s}var kt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||kt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function Ze(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var a=(n+s)/2,h=i<0?Math.ceil(a):Math.floor(a);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function _r(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var a=!1,h=0;h<e.length;++h){var g=e[h];(g.from<s&&g.to>n||n==s&&g.to==n)&&(i(Math.max(g.from,n),Math.min(g.to,s),g.level==1?"rtl":"ltr",h),a=!0)}a||i(n,s,"ltr")}var Ir=null;function Ur(e,n,s){var i;Ir=null;for(var a=0;a<e.length;++a){var h=e[a];if(h.from<n&&h.to>n)return a;h.to==n&&(h.from!=h.to&&s=="before"?i=a:Ir=a),h.from==n&&(h.from!=h.to&&s!="before"?i=a:Ir=a)}return i??Ir}var qr=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(C){return C<=247?e.charAt(C):1424<=C&&C<=1524?"R":1536<=C&&C<=1785?n.charAt(C-1536):1774<=C&&C<=2220?"r":8192<=C&&C<=8203?"w":C==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,a=/[stwN]/,h=/[LRr]/,g=/[Lb1n]/,b=/[1n]/;function w(C,z,K){this.level=C,this.from=z,this.to=K}return function(C,z){var K=z=="ltr"?"L":"R";if(C.length==0||z=="ltr"&&!i.test(C))return!1;for(var ie=C.length,te=[],ye=0;ye<ie;++ye)te.push(s(C.charCodeAt(ye)));for(var ke=0,Pe=K;ke<ie;++ke){var Ne=te[ke];Ne=="m"?te[ke]=Pe:Pe=Ne}for(var Fe=0,Me=K;Fe<ie;++Fe){var Ge=te[Fe];Ge=="1"&&Me=="r"?te[Fe]="n":h.test(Ge)&&(Me=Ge,Ge=="r"&&(te[Fe]="R"))}for(var ot=1,Ve=te[0];ot<ie-1;++ot){var St=te[ot];St=="+"&&Ve=="1"&&te[ot+1]=="1"?te[ot]="1":St==","&&Ve==te[ot+1]&&(Ve=="1"||Ve=="n")&&(te[ot]=Ve),Ve=St}for(var Et=0;Et<ie;++Et){var Bn=te[Et];if(Bn==",")te[Et]="N";else if(Bn=="%"){var sn=void 0;for(sn=Et+1;sn<ie&&te[sn]=="%";++sn);for(var xr=Et&&te[Et-1]=="!"||sn<ie&&te[sn]=="1"?"1":"N",lr=Et;lr<sn;++lr)te[lr]=xr;Et=sn-1}}for(var yn=0,br=K;yn<ie;++yn){var Tn=te[yn];br=="L"&&Tn=="1"?te[yn]="L":h.test(Tn)&&(br=Tn)}for(var vn=0;vn<ie;++vn)if(a.test(te[vn])){var Mt=void 0;for(Mt=vn+1;Mt<ie&&a.test(te[Mt]);++Mt);for(var dt=(vn?te[vn-1]:K)=="L",zt=(Mt<ie?te[Mt]:K)=="L",an=dt==zt?dt?"L":"R":K,un=vn;un<Mt;++un)te[un]=an;vn=Mt-1}for(var Ut=[],wr,Lt=0;Lt<ie;)if(g.test(te[Lt])){var la=Lt;for(++Lt;Lt<ie&&g.test(te[Lt]);++Lt);Ut.push(new w(0,la,Lt))}else{var kr=Lt,Ri=Ut.length,ts=z=="rtl"?1:0;for(++Lt;Lt<ie&&te[Lt]!="L";++Lt);for(var An=kr;An<Lt;)if(b.test(te[An])){kr<An&&(Ut.splice(Ri,0,new w(1,kr,An)),Ri+=ts);var Un=An;for(++An;An<Lt&&b.test(te[An]);++An);Ut.splice(Ri,0,new w(2,Un,An)),Ri+=ts,kr=An}else++An;kr<Lt&&Ut.splice(Ri,0,new w(1,kr,Lt))}return z=="ltr"&&(Ut[0].level==1&&(wr=C.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new w(0,0,wr[0].length))),Qe(Ut).level==1&&(wr=C.match(/\s+$/))&&(Qe(Ut).to-=wr[0].length,Ut.push(new w(0,ie-wr[0].length,ie)))),z=="rtl"?Ut.reverse():Ut}})();function bt(e,n){var s=e.order;return s==null&&(s=e.order=qr(e.text,n)),s}var fi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||fi).concat(s)}};function Cr(e,n){return e._handlers&&e._handlers[n]||fi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,a=i&&i[n];if(a){var h=Ke(a,s);h>-1&&(i[n]=a.slice(0,h).concat(a.slice(h+1)))}}}function It(e,n){var s=Cr(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),a=0;a<s.length;++a)s[a].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),In(n)||n.codemirrorIgnore}function xn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)Ke(s,n[i])==-1&&s.push(n[i])}function mn(e,n){return Cr(e,n).length>0}function Nn(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function bn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ri(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){bn(e),ri(e)}function mi(e){return e.target||e.srcElement}function En(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),J&&e.ctrlKey&&n==1&&(n=3),n}var as=(function(){if(k&&T<9)return!1;var e=A("div");return"draggable"in e||"dragDrop"in e})(),wn;function Tr(e){if(wn==null){var n=A("span","​");fe(e,A("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(wn=n.offsetWidth<=1&&n.offsetHeight>2&&!(k&&T<8))}var s=wn?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var $r;function Or(e){if($r!=null)return $r;var n=fe(e,document.createTextNode("AخA")),s=B(n,0,1).getBoundingClientRect(),i=B(n,1,2).getBoundingClientRect();return le(e),!s||s.left==s.right?!1:$r=i.right-s.right<3}var jr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var a=e.indexOf(`
`,n);a==-1&&(a=e.length);var h=e.slice(n,e.charAt(a-1)=="\r"?a-1:a),g=h.indexOf("\r");g!=-1?(s.push(h.slice(0,g)),n+=g+1):(s.push(h),n=a+1)}return s}:function(e){return e.split(/\r\n?|\n/)},gi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},os=(function(){var e=A("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),On=null;function ls(e){if(On!=null)return On;var n=fe(e,A("span","x")),s=n.getBoundingClientRect(),i=B(n,0,1).getBoundingClientRect();return On=Math.abs(s.left-i.left)>1}var Mi={},Dr={};function Kn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function yi(e,n){Dr[e]=n}function zi(e){if(typeof e=="string"&&Dr.hasOwnProperty(e))e=Dr[e];else if(e&&typeof e.name=="string"&&Dr.hasOwnProperty(e.name)){var n=Dr[e.name];typeof n=="string"&&(n={name:n}),e=he(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return zi("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return zi("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=zi(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var a=Mr[n.name];for(var h in a)a.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=a[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var g in n.modeProps)i[g]=n.modeProps[g];return i}var Mr={};function us(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Be(n,s)}function Rt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var a=n[i];a instanceof Array&&(a=a.concat([])),s[i]=a}return s}function Fi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ii(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=$e(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?$e(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return $e(this.string,null,this.tabSize)-(this.lineStart?$e(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(g){return s?g.toLowerCase():g},a=this.string.substr(this.pos,e.length);if(i(a)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Je(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var a=s.children[i],h=a.chunkSize();if(n<h){s=a;break}n-=h}return s.lines[n]}function si(e,n,s){var i=[],a=n.line;return e.iter(n.line,s.line+1,function(h){var g=h.text;a==s.line&&(g=g.slice(0,s.ch)),a==n.line&&(g=g.slice(n.ch)),i.push(g),++a}),i}function cs(e,n,s){var i=[];return e.iter(n,s,function(a){i.push(a.text)}),i}function Gn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function N(e){if(e.parent==null)return null;for(var n=e.parent,s=Ke(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var a=0;i.children[a]!=n;++a)s+=i.children[a].chunkSize();return s+n.first}function $(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var a=e.children[i],h=a.height;if(n<h){e=a;continue e}n-=h,s+=a.chunkSize()}return s}while(!e.lines);for(var g=0;g<e.lines.length;++g){var b=e.lines[g],w=b.height;if(n<w)break;n-=w}return s+g}function ge(e,n){return n>=e.first&&n<e.first+e.size}function je(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function pe(e,n,s){if(s===void 0&&(s=null),!(this instanceof pe))return new pe(e,n,s);this.line=e,this.ch=n,this.sticky=s}function He(e,n){return e.line-n.line||e.ch-n.ch}function jt(e,n){return e.sticky==n.sticky&&He(e,n)==0}function Qt(e){return pe(e.line,e.ch)}function kn(e,n){return He(e,n)<0?n:e}function Kr(e,n){return He(e,n)<0?e:n}function il(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return pe(e.first,0);var s=e.first+e.size-1;return n.line>s?pe(s,Je(e,s).text.length):no(n,Je(e,n.line).text.length)}function no(e,n){var s=e.ch;return s==null||s>n?pe(e.line,n):s<0?pe(e.line,0):e}function ro(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Wi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Wi?new rr(e,Rt(e.mode,n.state),s,n.lookAhead):new rr(e,Rt(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?Rt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Wi(n,this.maxLookAhead):n};function io(e,n,s,i){var a=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(C,z){return a.push(C,z)},h,i);for(var g=s.state,b=function(C){s.baseTokens=a;var z=e.state.overlays[C],K=1,ie=0;s.state=!0,ir(e,n.text,z.mode,s,function(te,ye){for(var ke=K;ie<te;){var Pe=a[K];Pe>te&&a.splice(K,1,te,a[K+1],Pe),K+=2,ie=Math.min(te,Pe)}if(ye)if(z.opaque)a.splice(ke,K-ke,te,"overlay "+ye),K=ke+2;else for(;ke<K;ke+=2){var Ne=a[ke+1];a[ke+1]=(Ne?Ne+" ":"")+"overlay "+ye}},h),s.state=g,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)b(w);return{styles:a,classes:h.bgClass||h.textClass?h:null}}function Hi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,N(n)),a=n.text.length>e.options.maxHighlightLength&&Rt(e.doc.mode,i.state),h=io(e,n,i);a&&(i.state=a),n.stateAfter=i.save(!a),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,a=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=xa(e,n,s),g=h>i.first&&Je(i,h-1).stateAfter,b=g?rr.fromSaved(i,g,h):new rr(i,ii(i.mode),h);return i.iter(h,n,function(w){ds(e,w.text,b);var C=b.line;w.stateAfter=C==n-1||C%5==0||C>=a.viewFrom&&C<a.viewTo?b.save():null,b.nextLine()}),s&&(i.modeFrontier=b.line),b}function ds(e,n,s,i){var a=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Is(a,s.state);!h.eol();)vi(a,h,s.state),h.start=h.pos}function Is(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=Fi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function vi(e,n,s,i){for(var a=0;a<10;a++){i&&(i[0]=Fi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var va=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function xi(e,n,s,i){var a=e.doc,h=a.mode,g;n=gt(a,n);var b=Je(a,n.line),w=Nt(e,n.line,s),C=new Vt(b.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||C.pos<n.ch)&&!C.eol();)C.start=C.pos,g=vi(h,C,w.state),i&&z.push(new va(C,g,Rt(a.mode,w.state)));return i?z:new va(C,g,w.state)}function Bi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,a,h,g){var b=s.flattenSpans;b==null&&(b=e.options.flattenSpans);var w=0,C=null,z=new Vt(n,e.options.tabSize,i),K,ie=e.options.addModeClass&&[null];for(n==""&&Bi(Is(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(b=!1,g&&ds(e,n,i,z.pos),z.pos=n.length,K=null):K=Bi(vi(s,z,i.state,ie),h),ie){var te=ie[0].name;te&&(K="m-"+(K?te+" "+K:te))}if(!b||C!=K){for(;w<z.start;)w=Math.min(z.start,w+5e3),a(w,C);C=K}z.start=z.pos}for(;w<z.pos;){var ye=Math.min(z.pos,w+5e3);a(ye,C),w=ye}}function xa(e,n,s){for(var i,a,h=e.doc,g=s?-1:n-(e.doc.mode.innerMode?1e3:100),b=n;b>g;--b){if(b<=h.first)return h.first;var w=Je(h,b-1),C=w.stateAfter;if(C&&(!s||b+(C instanceof Wi?C.lookAhead:0)<=h.modeFrontier))return b;var z=$e(w.text,null,e.options.tabSize);(a==null||i>z)&&(a=b-1,i=z)}return a}function zr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var a=Je(e,i).stateAfter;if(a&&(!(a instanceof Wi)||i+a.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var ai=!1,Dn=!1;function Gr(){ai=!0}function Os(){Dn=!0}function Nr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ds(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function so(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Ms(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Vl(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],g=h.marker,b=h.from==null||(g.inclusiveLeft?h.from<=n:h.from<n);if(b||h.from==n&&g.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(g.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new Nr(g,h.from,w?null:h.to))}}return i}function ao(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],g=h.marker,b=h.to==null||(g.inclusiveRight?h.to>=n:h.to>n);if(b||h.from==n&&g.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(g.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new Nr(g,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function ps(e,n){if(n.full)return null;var s=ge(e,n.from.line)&&Je(e,n.from.line).markedSpans,i=ge(e,n.to.line)&&Je(e,n.to.line).markedSpans;if(!s&&!i)return null;var a=n.from.ch,h=n.to.ch,g=He(n.from,n.to)==0,b=Vl(s,a,g),w=ao(i,h,g),C=n.text.length==1,z=Qe(n.text).length+(C?a:0);if(b)for(var K=0;K<b.length;++K){var ie=b[K];if(ie.to==null){var te=Ds(w,ie.marker);te?C&&(ie.to=te.to==null?null:te.to+z):ie.to=a}}if(w)for(var ye=0;ye<w.length;++ye){var ke=w[ye];if(ke.to!=null&&(ke.to+=z),ke.from==null){var Pe=Ds(b,ke.marker);Pe||(ke.from=z,C&&(b||(b=[])).push(ke))}else ke.from+=z,C&&(b||(b=[])).push(ke)}b&&(b=zs(b)),w&&w!=b&&(w=zs(w));var Ne=[b];if(!C){var Fe=n.text.length-2,Me;if(Fe>0&&b)for(var Ge=0;Ge<b.length;++Ge)b[Ge].to==null&&(Me||(Me=[])).push(new Nr(b[Ge].marker,null,null));for(var ot=0;ot<Fe;++ot)Ne.push(Me);Ne.push(w)}return Ne}function zs(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function oo(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(te){if(te.markedSpans)for(var ye=0;ye<te.markedSpans.length;++ye){var ke=te.markedSpans[ye].marker;ke.readOnly&&(!i||Ke(i,ke)==-1)&&(i||(i=[])).push(ke)}}),!i)return null;for(var a=[{from:n,to:s}],h=0;h<i.length;++h)for(var g=i[h],b=g.find(0),w=0;w<a.length;++w){var C=a[w];if(!(He(C.to,b.from)<0||He(C.from,b.to)>0)){var z=[w,1],K=He(C.from,b.from),ie=He(C.to,b.to);(K<0||!g.inclusiveLeft&&!K)&&z.push({from:C.from,to:b.from}),(ie>0||!g.inclusiveRight&&!ie)&&z.push({from:b.to,to:C.to}),a.splice.apply(a,z),w+=z.length-3}}return a}function bi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function _e(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function I(e){return e.inclusiveLeft?-1:0}function ne(e){return e.inclusiveRight?1:0}function we(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),a=n.find(),h=He(i.from,a.from)||I(e)-I(n);if(h)return-h;var g=He(i.to,a.to)||ne(e)-ne(n);return g||n.id-e.id}function Ee(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var a=void 0,h=0;h<s.length;++h)a=s[h],a.marker.collapsed&&(n?a.from:a.to)==null&&(!i||we(i,a.marker)<0)&&(i=a.marker);return i}function nt(e){return Ee(e,!0)}function ct(e){return Ee(e,!1)}function Tt(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var a=0;a<s.length;++a){var h=s[a];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||we(i,h.marker)<0)&&(i=h.marker)}return i}function cn(e,n,s,i,a){var h=Je(e,n),g=Dn&&h.markedSpans;if(g)for(var b=0;b<g.length;++b){var w=g[b];if(w.marker.collapsed){var C=w.marker.find(0),z=He(C.from,s)||I(w.marker)-I(a),K=He(C.to,i)||ne(w.marker)-ne(a);if(!(z>=0&&K<=0||z<=0&&K>=0)&&(z<=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(C.to,s)>=0:He(C.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(C.from,i)<=0:He(C.from,i)<0)))return!0}}}function $t(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=ct(e);)e=n.find(1,!0).line;return e}function Yn(e){for(var n,s;n=ct(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Je(e,n),i=$t(s);return s==i?n:N(i)}function dn(e,n){if(n>e.lastLine())return n;var s=Je(e,n),i;if(!Er(e,s))return n;for(;i=ct(s);)s=i.find(1,!0).line;return N(s)+1}function Er(e,n){var s=Dn&&n.markedSpans;if(s){for(var i=void 0,a=0;a<s.length;++a)if(i=s[a],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&sl(e,n,i))return!0}}}function sl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return sl(e,i.line,Ds(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var a=void 0,h=0;h<n.markedSpans.length;++h)if(a=n.markedSpans[h],a.marker.collapsed&&!a.marker.widgetNode&&a.from==s.to&&(a.to==null||a.to!=s.from)&&(a.marker.inclusiveLeft||s.marker.inclusiveRight)&&sl(e,n,a))return!0}function Sn(e){e=$t(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var a=s.lines[i];if(a==e)break;n+=a.height}for(var h=s.parent;h;s=h,h=s.parent)for(var g=0;g<h.children.length;++g){var b=h.children[g];if(b==s)break;n+=b.height}return n}function Ui(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var a=s.find(0,!0);i=a.from.line,n+=a.from.ch-a.to.ch}for(i=e;s=ct(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function lo(e){var n=e.display,s=e.doc;n.maxLine=Je(s,s.first),n.maxLineLength=Ui(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var a=Ui(i);a>n.maxLineLength&&(n.maxLineLength=a,n.maxLine=i)})}var wi=function(e,n,s){this.text=e,_e(this,n),this.height=s?s(this):1};wi.prototype.lineNo=function(){return N(this)},Nn(wi);function Ud(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),bi(e),_e(e,s);var a=i?i(e):1;a!=e.height&&Gn(e,a)}function Jl(e){e.parent=null,bi(e)}var Xl={},uo={};function co(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?uo:Xl;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Ql(e,n){var s=Q("span",null,null,E?"padding-right: .1px":null),i={pre:Q("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var a=0;a<=(n.rest?n.rest.length:0);a++){var h=a?n.rest[a-1]:n.line,g=void 0;i.pos=0,i.addToken=$d,Or(e.display.measure)&&(g=bt(h,e.doc.direction))&&(i.addToken=Zl(i.addToken,g)),i.map=[];var b=n!=e.display.externalMeasured&&N(h);Gd(h,i,Hi(e,h,b)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=D(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=D(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Tr(e.display.measure))),a==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(E){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=D(i.pre.className,i.textClass||"")),i}function qd(e){var n=A("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function $d(e,n,s,i,a,h,g){if(n){var b=e.splitSpaces?Kd(n,e.trailingSpace):n,w=e.cm.state.specialChars,C=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(b),e.map.push(e.pos,e.pos+n.length,z),k&&T<9&&(C=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var K=0;;){w.lastIndex=K;var ie=w.exec(n),te=ie?ie.index-K:n.length-K;if(te){var ye=document.createTextNode(b.slice(K,K+te));k&&T<9?z.appendChild(A("span",[ye])):z.appendChild(ye),e.map.push(e.pos,e.pos+te,ye),e.col+=te,e.pos+=te}if(!ie)break;K+=te+1;var ke=void 0;if(ie[0]=="	"){var Pe=e.cm.options.tabSize,Ne=Pe-e.col%Pe;ke=z.appendChild(A("span",yt(Ne),"cm-tab")),ke.setAttribute("role","presentation"),ke.setAttribute("cm-text","	"),e.col+=Ne}else ie[0]=="\r"||ie[0]==`
`?(ke=z.appendChild(A("span",ie[0]=="\r"?"␍":"␤","cm-invalidchar")),ke.setAttribute("cm-text",ie[0]),e.col+=1):(ke=e.cm.options.specialCharPlaceholder(ie[0]),ke.setAttribute("cm-text",ie[0]),k&&T<9?z.appendChild(A("span",[ke])):z.appendChild(ke),e.col+=1);e.map.push(e.pos,e.pos+1,ke),e.pos++}}if(e.trailingSpace=b.charCodeAt(n.length-1)==32,s||i||a||C||h||g){var Fe=s||"";i&&(Fe+=i),a&&(Fe+=a);var Me=A("span",[z],Fe,h);if(g)for(var Ge in g)g.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&Me.setAttribute(Ge,g[Ge]);return e.content.appendChild(Me)}e.content.appendChild(z)}}function Kd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",a=0;a<e.length;a++){var h=e.charAt(a);h==" "&&s&&(a==e.length-1||e.charCodeAt(a+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function Zl(e,n){return function(s,i,a,h,g,b,w){a=a?a+" cm-force-border":"cm-force-border";for(var C=s.pos,z=C+i.length;;){for(var K=void 0,ie=0;ie<n.length&&(K=n[ie],!(K.to>C&&K.from<=C));ie++);if(K.to>=z)return e(s,i,a,h,g,b,w);e(s,i.slice(0,K.to-C),a,h,null,b,w),h=null,i=i.slice(K.to-C),C=K.to}}}function fc(e,n,s,i){var a=!i&&s.widgetNode;a&&e.map.push(e.pos,e.pos+n,a),!i&&e.cm.display.input.needsContentAttribute&&(a||(a=e.content.appendChild(document.createElement("span"))),a.setAttribute("cm-marker",s.id)),a&&(e.cm.display.input.setUneditable(a),e.content.appendChild(a)),e.pos+=n,e.trailingSpace=!1}function Gd(e,n,s){var i=e.markedSpans,a=e.text,h=0;if(!i){for(var g=1;g<s.length;g+=2)n.addToken(n,a.slice(h,h=s[g]),co(s[g+1],n.cm.options));return}for(var b=a.length,w=0,C=1,z="",K,ie,te=0,ye,ke,Pe,Ne,Fe;;){if(te==w){ye=ke=Pe=ie="",Fe=null,Ne=null,te=1/0;for(var Me=[],Ge=void 0,ot=0;ot<i.length;++ot){var Ve=i[ot],St=Ve.marker;if(St.type=="bookmark"&&Ve.from==w&&St.widgetNode)Me.push(St);else if(Ve.from<=w&&(Ve.to==null||Ve.to>w||St.collapsed&&Ve.to==w&&Ve.from==w)){if(Ve.to!=null&&Ve.to!=w&&te>Ve.to&&(te=Ve.to,ke=""),St.className&&(ye+=" "+St.className),St.css&&(ie=(ie?ie+";":"")+St.css),St.startStyle&&Ve.from==w&&(Pe+=" "+St.startStyle),St.endStyle&&Ve.to==te&&(Ge||(Ge=[])).push(St.endStyle,Ve.to),St.title&&((Fe||(Fe={})).title=St.title),St.attributes)for(var Et in St.attributes)(Fe||(Fe={}))[Et]=St.attributes[Et];St.collapsed&&(!Ne||we(Ne.marker,St)<0)&&(Ne=Ve)}else Ve.from>w&&te>Ve.from&&(te=Ve.from)}if(Ge)for(var Bn=0;Bn<Ge.length;Bn+=2)Ge[Bn+1]==te&&(ke+=" "+Ge[Bn]);if(!Ne||Ne.from==w)for(var sn=0;sn<Me.length;++sn)fc(n,0,Me[sn]);if(Ne&&(Ne.from||0)==w){if(fc(n,(Ne.to==null?b+1:Ne.to)-w,Ne.marker,Ne.from==null),Ne.to==null)return;Ne.to==w&&(Ne=!1)}}if(w>=b)break;for(var xr=Math.min(b,te);;){if(z){var lr=w+z.length;if(!Ne){var yn=lr>xr?z.slice(0,xr-w):z;n.addToken(n,yn,K?K+ye:ye,Pe,w+yn.length==te?ke:"",ie,Fe)}if(lr>=xr){z=z.slice(xr-w),w=xr;break}w=lr,Pe=""}z=a.slice(h,h=s[C++]),K=co(s[C++],n.cm.options)}}}function mc(e,n,s){this.line=n,this.rest=Yn(n),this.size=this.rest?N(Qe(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Er(e,n)}function al(e,n,s){for(var i=[],a,h=n;h<s;h=a){var g=new mc(e.doc,Je(e.doc,h),h);a=h+g.size,i.push(g)}return i}var ba=null;function gc(e){ba?ba.ops.push(e):e.ownsGroup=ba={ops:[e],delayedCallbacks:[]}}function Yd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var a=e.ops[i];if(a.cursorActivityHandlers)for(;a.cursorActivityCalled<a.cursorActivityHandlers.length;)a.cursorActivityHandlers[a.cursorActivityCalled++].call(null,a.cm)}}while(s<n.length)}function Vd(e,n){var s=e.ownsGroup;if(s)try{Yd(s)}finally{ba=null,n(s)}}var po=null;function Mn(e,n){var s=Cr(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),a;ba?a=ba.delayedCallbacks:po?a=po:(a=po=[],setTimeout(eu,0));for(var h=function(b){a.push(function(){return s[b].apply(null,i)})},g=0;g<s.length;++g)h(g)}}function eu(){var e=po;po=null;for(var n=0;n<e.length;++n)e[n]()}function yc(e,n,s,i){for(var a=0;a<n.changes.length;a++){var h=n.changes[a];h=="text"?Xd(e,n):h=="gutter"?vc(e,n,s,i):h=="class"?nu(e,n):h=="widget"&&Qd(e,n,i)}n.changes=null}function ho(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),k&&T<8&&(e.node.style.zIndex=2)),e.node}function Jd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=ho(n);n.background=i.insertBefore(A("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function tu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Ql(e,n)}function Xd(e,n){var s=n.text.className,i=tu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,nu(e,n)):s&&(n.text.className=s)}function nu(e,n){Jd(e,n),n.line.wrapClass?ho(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function vc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var a=ho(n);n.gutterBackground=A("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),a.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var g=ho(n),b=n.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(b.setAttribute("aria-hidden","true"),e.display.input.setUneditable(b),g.insertBefore(b,n.text),n.line.gutterClass&&(b.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=b.appendChild(A("div",je(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var C=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(C)&&h[C];z&&b.appendChild(A("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[C]+"px; width: "+i.gutterWidth[C]+"px"))}}}function Qd(e,n,s){n.alignable&&(n.alignable=null);for(var i=se("CodeMirror-linewidget"),a=n.node.firstChild,h=void 0;a;a=h)h=a.nextSibling,i.test(a.className)&&n.node.removeChild(a);xc(e,n,s)}function Zd(e,n,s,i){var a=tu(e,n);return n.text=n.node=a.pre,a.bgClass&&(n.bgClass=a.bgClass),a.textClass&&(n.textClass=a.textClass),nu(e,n),vc(e,n,s,i),xc(e,n,i),n.node}function xc(e,n,s){if(bc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)bc(e,n.rest[i],n,s,!1)}function bc(e,n,s,i,a){if(n.widgets)for(var h=ho(s),g=0,b=n.widgets;g<b.length;++g){var w=b[g],C=A("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||C.setAttribute("cm-ignore-events","true"),ru(w,C,s,i),e.display.input.setUneditable(C),a&&w.above?h.insertBefore(C,s.gutter||s.text):h.appendChild(C),Mn(w,"redraw")}}function ru(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var a=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(a-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=a+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function qi(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!_(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),fe(n.display.measure,A("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function $i(e,n){for(var s=mi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function fo(e){return e.lineSpace.offsetTop}function ol(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function iu(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=fe(e.measure,A("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function oi(e){return Ft-e.display.nativeBarWidth}function hs(e){return e.display.scroller.clientWidth-oi(e)-e.display.barWidth}function fs(e){return e.display.scroller.clientHeight-oi(e)-e.display.barHeight}function ep(e,n,s){var i=e.options.lineWrapping,a=i&&hs(e);if(!n.measure.heights||i&&n.measure.width!=a){var h=n.measure.heights=[];if(i){n.measure.width=a;for(var g=n.text.firstChild.getClientRects(),b=0;b<g.length-1;b++){var w=g[b],C=g[b+1];Math.abs(w.bottom-C.bottom)>2&&h.push((w.bottom+C.top)/2-s.top)}}h.push(s.bottom-s.top)}}function wc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var a=0;a<e.rest.length;a++)if(N(e.rest[a])>s)return{map:e.measure.maps[a],cache:e.measure.caches[a],before:!0}}}function tp(e,n){n=$t(n);var s=N(n),i=e.display.externalMeasured=new mc(e.doc,n,s);i.lineN=s;var a=i.built=Ql(e,i);return i.text=a.pre,fe(e.display.lineMeasure,a.pre),i}function su(e,n,s,i){return Lr(e,ki(e,n),s,i)}function ll(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function ki(e,n){var s=N(n),i=ll(e,s);i&&!i.text?i=null:i&&i.changes&&(yc(e,i,s,fl(e)),e.curOp.forceUpdate=!0),i||(i=tp(e,n));var a=wc(i,n,s);return{line:n,view:i,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function Lr(e,n,s,i,a){n.before&&(s=-1);var h=s+(i||""),g;return n.cache.hasOwnProperty(h)?g=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(ep(e,n.view,n.rect),n.hasHeights=!0),g=Sc(e,n,s,i),g.bogus||(n.cache[h]=g)),{left:g.left,right:g.right,top:a?g.rtop:g.top,bottom:a?g.rbottom:g.bottom}}var kc={left:0,right:0,top:0,bottom:0};function mo(e,n,s){for(var i,a,h,g,b,w,C=0;C<e.length;C+=3)if(b=e[C],w=e[C+1],n<b?(a=0,h=1,g="left"):n<w?(a=n-b,h=a+1):(C==e.length-3||n==w&&e[C+3]>n)&&(h=w-b,a=h-1,n>=w&&(g="right")),a!=null){if(i=e[C+2],b==w&&s==(i.insertLeft?"left":"right")&&(g=s),s=="left"&&a==0)for(;C&&e[C-2]==e[C-3]&&e[C-1].insertLeft;)i=e[(C-=3)+2],g="left";if(s=="right"&&a==w-b)for(;C<e.length-3&&e[C+3]==e[C+4]&&!e[C+5].insertLeft;)i=e[(C+=3)+2],g="right";break}return{node:i,start:a,end:h,collapse:g,coverStart:b,coverEnd:w}}function np(e,n){var s=kc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var a=e.length-1;a>=0&&(s=e[a]).left==s.right;a--);return s}function Sc(e,n,s,i){var a=mo(n.map,s,i),h=a.node,g=a.start,b=a.end,w=a.collapse,C;if(h.nodeType==3){for(var z=0;z<4;z++){for(;g&&pt(n.line.text.charAt(a.coverStart+g));)--g;for(;a.coverStart+b<a.coverEnd&&pt(n.line.text.charAt(a.coverStart+b));)++b;if(k&&T<9&&g==0&&b==a.coverEnd-a.coverStart?C=h.parentNode.getBoundingClientRect():C=np(B(h,g,b).getClientRects(),i),C.left||C.right||g==0)break;b=g,g=g-1,w="right"}k&&T<11&&(C=au(e.display.measure,C))}else{g>0&&(w=i="right");var K;e.options.lineWrapping&&(K=h.getClientRects()).length>1?C=K[i=="right"?K.length-1:0]:C=h.getBoundingClientRect()}if(k&&T<9&&!g&&(!C||!C.left&&!C.right)){var ie=h.parentNode.getClientRects()[0];ie?C={left:ie.left,right:ie.left+ms(e.display),top:ie.top,bottom:ie.bottom}:C=kc}for(var te=C.top-n.rect.top,ye=C.bottom-n.rect.top,ke=(te+ye)/2,Pe=n.view.measure.heights,Ne=0;Ne<Pe.length-1&&!(ke<Pe[Ne]);Ne++);var Fe=Ne?Pe[Ne-1]:0,Me=Pe[Ne],Ge={left:(w=="right"?C.right:C.left)-n.rect.left,right:(w=="left"?C.left:C.right)-n.rect.left,top:Fe,bottom:Me};return!C.left&&!C.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=te,Ge.rbottom=ye),Ge}function au(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!ls(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function ul(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function ou(e){e.display.externalMeasure=null,le(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)ul(e.display.view[n])}function wa(e){ou(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function lu(e){return L&&U?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function _c(e){return L&&U?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function uu(e){var n=$t(e),s=n.widgets,i=0;if(s)for(var a=0;a<s.length;++a)s[a].above&&(i+=qi(s[a]));return i}function cl(e,n,s,i,a){if(!a){var h=uu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var g=Sn(n);if(i=="local"?g+=fo(e.display):g-=e.display.viewOffset,i=="page"||i=="window"){var b=e.display.lineSpace.getBoundingClientRect();g+=b.top+(i=="window"?0:_c(Ce(e)));var w=b.left+(i=="window"?0:lu(Ce(e)));s.left+=w,s.right+=w}return s.top+=g,s.bottom+=g,s}function Cc(e,n,s){if(s=="div")return n;var i=n.left,a=n.top;if(s=="page")i-=lu(Ce(e)),a-=_c(Ce(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,a+=h.top}var g=e.display.lineSpace.getBoundingClientRect();return{left:i-g.left,top:a-g.top}}function dl(e,n,s,i,a){return i||(i=Je(e.doc,n.line)),cl(e,i,su(e,i,n.ch,a),s)}function _n(e,n,s,i,a,h){i=i||Je(e.doc,n.line),a||(a=ki(e,i));function g(ye,ke){var Pe=Lr(e,a,ye,ke?"right":"left",h);return ke?Pe.left=Pe.right:Pe.right=Pe.left,cl(e,i,Pe,s)}var b=bt(i,e.doc.direction),w=n.ch,C=n.sticky;if(w>=i.text.length?(w=i.text.length,C="before"):w<=0&&(w=0,C="after"),!b)return g(C=="before"?w-1:w,C=="before");function z(ye,ke,Pe){var Ne=b[ke],Fe=Ne.level==1;return g(Pe?ye-1:ye,Fe!=Pe)}var K=Ur(b,w,C),ie=Ir,te=z(w,K,C=="before");return ie!=null&&(te.other=z(w,ie,C!="before")),te}function ka(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=ms(e.display)*n.ch);var i=Je(e.doc,n.line),a=Sn(i)+fo(e.display);return{left:s,right:s,top:a,bottom:a+i.height}}function pl(e,n,s,i,a){var h=pe(e,n,s);return h.xRel=a,i&&(h.outside=i),h}function hl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return pl(i.first,0,null,-1,-1);var a=$(i,s),h=i.first+i.size-1;if(a>h)return pl(i.first+i.size-1,Je(i,h).text.length,null,1,1);n<0&&(n=0);for(var g=Je(i,a);;){var b=rp(e,g,a,n,s),w=Tt(g,b.ch+(b.xRel>0||b.outside>0?1:0));if(!w)return b;var C=w.find(1);if(C.line==a)return C;g=Je(i,a=C.line)}}function cu(e,n,s,i){i-=uu(n);var a=n.text.length,h=nr(function(g){return Lr(e,s,g-1).bottom<=i},a,0);return a=nr(function(g){return Lr(e,s,g).top>i},h,a),{begin:h,end:a}}function du(e,n,s,i){s||(s=ki(e,n));var a=cl(e,n,Lr(e,s,i),"line").top;return cu(e,n,s,a)}function go(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function rp(e,n,s,i,a){a-=Sn(n);var h=ki(e,n),g=uu(n),b=0,w=n.text.length,C=!0,z=bt(n,e.doc.direction);if(z){var K=(e.options.lineWrapping?Sa:ip)(e,n,s,h,z,i,a);C=K.level!=1,b=C?K.from:K.to-1,w=C?K.to:K.from-1}var ie=null,te=null,ye=nr(function(ot){var Ve=Lr(e,h,ot);return Ve.top+=g,Ve.bottom+=g,go(Ve,i,a,!1)?(Ve.top<=a&&Ve.left<=i&&(ie=ot,te=Ve),!0):!1},b,w),ke,Pe,Ne=!1;if(te){var Fe=i-te.left<te.right-i,Me=Fe==C;ye=ie+(Me?0:1),Pe=Me?"after":"before",ke=Fe?te.left:te.right}else{!C&&(ye==w||ye==b)&&ye++,Pe=ye==0?"after":ye==n.text.length?"before":Lr(e,h,ye-(C?1:0)).bottom+g<=a==C?"after":"before";var Ge=_n(e,pe(s,ye,Pe),"line",n,h);ke=Ge.left,Ne=a<Ge.top?-1:a>=Ge.bottom?1:0}return ye=Xt(n.text,ye,1),pl(s,ye,Pe,Ne,i-ke)}function ip(e,n,s,i,a,h,g){var b=nr(function(K){var ie=a[K],te=ie.level!=1;return go(_n(e,pe(s,te?ie.to:ie.from,te?"before":"after"),"line",n,i),h,g,!0)},0,a.length-1),w=a[b];if(b>0){var C=w.level!=1,z=_n(e,pe(s,C?w.from:w.to,C?"after":"before"),"line",n,i);go(z,h,g,!0)&&z.top>g&&(w=a[b-1])}return w}function Sa(e,n,s,i,a,h,g){var b=cu(e,n,i,g),w=b.begin,C=b.end;/\s/.test(n.text.charAt(C-1))&&C--;for(var z=null,K=null,ie=0;ie<a.length;ie++){var te=a[ie];if(!(te.from>=C||te.to<=w)){var ye=te.level!=1,ke=Lr(e,i,ye?Math.min(C,te.to)-1:Math.max(w,te.from)).right,Pe=ke<h?h-ke+1e9:ke-h;(!z||K>Pe)&&(z=te,K=Pe)}}return z||(z=a[a.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>C&&(z={from:z.from,to:C,level:z.level}),z}var Ki;function Si(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=A("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(A("br"));Ki.appendChild(document.createTextNode("x"))}fe(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),le(e.measure),s||1}function ms(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=A("span","xxxxxxxxxx"),s=A("pre",[n],"CodeMirror-line-like");fe(e.measure,s);var i=n.getBoundingClientRect(),a=(i.right-i.left)/10;return a>2&&(e.cachedCharWidth=a),a||10}function fl(e){for(var n=e.display,s={},i={},a=n.gutters.clientLeft,h=n.gutters.firstChild,g=0;h;h=h.nextSibling,++g){var b=e.display.gutterSpecs[g].className;s[b]=h.offsetLeft+h.clientLeft+a,i[b]=h.clientWidth}return{fixedPos:_a(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function _a(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Fs(e){var n=Si(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ms(e.display)-3);return function(a){if(Er(e.doc,a))return 0;var h=0;if(a.widgets)for(var g=0;g<a.widgets.length;g++)a.widgets[g].height&&(h+=a.widgets[g].height);return s?h+(Math.ceil(a.text.length/i)||1)*n:h+n}}function yo(e){var n=e.doc,s=Fs(e);n.iter(function(i){var a=s(i);a!=i.height&&Gn(i,a)})}function gs(e,n,s,i){var a=e.display;if(!s&&mi(n).getAttribute("cm-not-content")=="true")return null;var h,g,b=a.lineSpace.getBoundingClientRect();try{h=n.clientX-b.left,g=n.clientY-b.top}catch{return null}var w=hl(e,h,g),C;if(i&&w.xRel>0&&(C=Je(e.doc,w.line).text).length==w.ch){var z=$e(C,C.length,e.options.tabSize)-C.length;w=pe(w.line,Math.max(0,Math.round((h-iu(e.display).left)/ms(e.display))-z))}return w}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var a=e.display;if(i&&s<a.viewTo&&(a.updateLineNumbers==null||a.updateLineNumbers>n)&&(a.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=a.viewTo)Dn&&fr(e.doc,n)<a.viewTo&&Yi(e);else if(s<=a.viewFrom)Dn&&dn(e.doc,s+i)>a.viewFrom?Yi(e):(a.viewFrom+=i,a.viewTo+=i);else if(n<=a.viewFrom&&s>=a.viewTo)Yi(e);else if(n<=a.viewFrom){var h=vo(e,s,s+i,1);h?(a.view=a.view.slice(h.index),a.viewFrom=h.lineN,a.viewTo+=i):Yi(e)}else if(s>=a.viewTo){var g=vo(e,n,n,-1);g?(a.view=a.view.slice(0,g.index),a.viewTo=g.lineN):Yi(e)}else{var b=vo(e,n,n,-1),w=vo(e,s,s+i,1);b&&w?(a.view=a.view.slice(0,b.index).concat(al(e,b.lineN,w.lineN)).concat(a.view.slice(w.index)),a.viewTo+=i):Yi(e)}var C=a.externalMeasured;C&&(s<C.lineN?C.lineN+=i:n<C.lineN+C.size&&(a.externalMeasured=null))}function Gi(e,n,s){e.curOp.viewChanged=!0;var i=e.display,a=e.display.externalMeasured;if(a&&n>=a.lineN&&n<a.lineN+a.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[_i(e,n)];if(h.node!=null){var g=h.changes||(h.changes=[]);Ke(g,s)==-1&&g.push(s)}}}function Yi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function vo(e,n,s,i){var a=_i(e,n),h,g=e.display.view;if(!Dn||s==e.doc.first+e.doc.size)return{index:a,lineN:s};for(var b=e.display.viewFrom,w=0;w<a;w++)b+=g[w].size;if(b!=n){if(i>0){if(a==g.length-1)return null;h=b+g[a].size-n,a++}else h=b-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(a==(i<0?0:g.length-1))return null;s+=i*g[a-(i<0?1:0)].size,a+=i}return{index:a,lineN:s}}function Tc(e,n,s){var i=e.display,a=i.view;a.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=al(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=al(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(al(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,_i(e,s)))),i.viewTo=s}function pu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var a=n[i];!a.hidden&&(!a.node||a.changes)&&++s}return s}function Yr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function ml(e,n){n===void 0&&(n=!0);var s=e.doc,i={},a=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),g=e.options.$customCursor;g&&(n=!0);for(var b=0;b<s.sel.ranges.length;b++)if(!(!n&&b==s.sel.primIndex)){var w=s.sel.ranges[b];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var C=w.empty();if(g){var z=g(e,w);z&&xo(e,z,a)}else(C||e.options.showCursorWhenSelecting)&&xo(e,w.head,a);C||sp(e,w,h)}}return i}function xo(e,n,s){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),a=s.appendChild(A("div"," ","CodeMirror-cursor"));if(a.style.left=i.left+"px",a.style.top=i.top+"px",a.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=dl(e,n,"div",null,null),g=h.right-h.left;a.style.width=(g>0?g:e.defaultCharWidth())+"px"}if(i.other){var b=s.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));b.style.display="",b.style.left=i.other.left+"px",b.style.top=i.other.top+"px",b.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function gl(e,n){return e.top-n.top||e.left-n.left}function sp(e,n,s){var i=e.display,a=e.doc,h=document.createDocumentFragment(),g=iu(e.display),b=g.left,w=Math.max(i.sizerWidth,hs(e)-i.sizer.offsetLeft)-g.right,C=a.direction=="ltr";function z(Me,Ge,ot,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+Me+`px;
                             top: `+Ge+"px; width: "+(ot??w-Me)+`px;
                             height: `+(Ve-Ge)+"px"))}function K(Me,Ge,ot){var Ve=Je(a,Me),St=Ve.text.length,Et,Bn;function sn(yn,br){return dl(e,pe(Me,yn),"div",Ve,br)}function xr(yn,br,Tn){var vn=du(e,Ve,null,yn),Mt=br=="ltr"==(Tn=="after")?"left":"right",dt=Tn=="after"?vn.begin:vn.end-(/\s/.test(Ve.text.charAt(vn.end-1))?2:1);return sn(dt,Mt)[Mt]}var lr=bt(Ve,a.direction);return _r(lr,Ge||0,ot??St,function(yn,br,Tn,vn){var Mt=Tn=="ltr",dt=sn(yn,Mt?"left":"right"),zt=sn(br-1,Mt?"right":"left"),an=Ge==null&&yn==0,un=ot==null&&br==St,Ut=vn==0,wr=!lr||vn==lr.length-1;if(zt.top-dt.top<=3){var Lt=(C?an:un)&&Ut,la=(C?un:an)&&wr,kr=Lt?b:(Mt?dt:zt).left,Ri=la?w:(Mt?zt:dt).right;z(kr,dt.top,Ri-kr,dt.bottom)}else{var ts,An,Un,Uo;Mt?(ts=C&&an&&Ut?b:dt.left,An=C?w:xr(yn,Tn,"before"),Un=C?b:xr(br,Tn,"after"),Uo=C&&un&&wr?w:zt.right):(ts=C?xr(yn,Tn,"before"):b,An=!C&&an&&Ut?w:dt.right,Un=!C&&un&&wr?b:zt.left,Uo=C?xr(br,Tn,"after"):w),z(ts,dt.top,An-ts,dt.bottom),dt.bottom<zt.top&&z(b,dt.bottom,null,zt.top),z(Un,zt.top,Uo-Un,zt.bottom)}(!Et||gl(dt,Et)<0)&&(Et=dt),gl(zt,Et)<0&&(Et=zt),(!Bn||gl(dt,Bn)<0)&&(Bn=dt),gl(zt,Bn)<0&&(Bn=zt)}),{start:Et,end:Bn}}var ie=n.from(),te=n.to();if(ie.line==te.line)K(ie.line,ie.ch,te.ch);else{var ye=Je(a,ie.line),ke=Je(a,te.line),Pe=$t(ye)==$t(ke),Ne=K(ie.line,ie.ch,Pe?ye.text.length+1:null).end,Fe=K(te.line,Pe?0:null,te.ch).start;Pe&&(Ne.top<Fe.top-2?(z(Ne.right,Ne.top,null,Ne.bottom),z(b,Fe.top,Fe.left,Fe.bottom)):z(Ne.right,Ne.top,Fe.left-Ne.right,Ne.bottom)),Ne.bottom<Fe.top&&z(b,Ne.bottom,null,Fe.top)}s.appendChild(h)}function Ws(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function jc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||vl(e))}function yl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function vl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,q(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),E&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ws(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ie(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Ca(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),a=n.lineDiv.getBoundingClientRect().top,h=0,g=0;g<n.view.length;g++){var b=n.view[g],w=e.options.lineWrapping,C=void 0,z=0;if(!b.hidden){if(a+=b.line.height,k&&T<8){var K=b.node.offsetTop+b.node.offsetHeight;C=K-s,s=K}else{var ie=b.node.getBoundingClientRect();C=ie.bottom-ie.top,!w&&b.text.firstChild&&(z=b.text.firstChild.getBoundingClientRect().right-ie.left-1)}var te=b.line.height-C;if((te>.005||te<-.005)&&(a<i&&(h-=te),Gn(b.line,C),bo(b.line),b.rest))for(var ye=0;ye<b.rest.length;ye++)bo(b.rest[ye]);if(z>e.display.sizerWidth){var ke=Math.ceil(z/ms(e.display));ke>e.display.maxLineLength&&(e.display.maxLineLength=ke,e.display.maxLine=b.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function bo(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ys(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-fo(e));var a=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=$(n,i),g=$(n,a);if(s&&s.ensure){var b=s.ensure.from.line,w=s.ensure.to.line;b<h?(h=b,g=$(n,Sn(Je(n,b))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=g&&(h=$(n,Sn(Je(n,w))-e.wrapper.clientHeight),g=w)}return{from:h,to:Math.max(g,h+1)}}function Nc(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),a=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?a=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(a=!1),a!=null&&!M){var g=A("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-fo(e.display))+`px;
                         height: `+(n.bottom-n.top+oi(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(g),g.scrollIntoView(a),e.display.lineSpace.removeChild(g)}}}function hu(e,n,s,i){i==null&&(i=0);var a;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?pe(n.line,n.ch+1,"before"):n,n=n.ch?pe(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var g=!1,b=_n(e,n),w=!s||s==n?b:_n(e,s);a={left:Math.min(b.left,w.left),top:Math.min(b.top,w.top)-i,right:Math.max(b.left,w.left),bottom:Math.max(b.bottom,w.bottom)+i};var C=Ta(e,a),z=e.doc.scrollTop,K=e.doc.scrollLeft;if(C.scrollTop!=null&&(xs(e,C.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(g=!0)),C.scrollLeft!=null&&(Vi(e,C.scrollLeft),Math.abs(e.doc.scrollLeft-K)>1&&(g=!0)),!g)break}return a}function wo(e,n){var s=Ta(e,n);s.scrollTop!=null&&xs(e,s.scrollTop),s.scrollLeft!=null&&Vi(e,s.scrollLeft)}function Ta(e,n){var s=e.display,i=Si(e.display);n.top<0&&(n.top=0);var a=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=fs(e),g={};n.bottom-n.top>h&&(n.bottom=n.top+h);var b=e.doc.height+ol(s),w=n.top<i,C=n.bottom>b-i;if(n.top<a)g.scrollTop=w?0:n.top;else if(n.bottom>a+h){var z=Math.min(n.top,(C?b:n.bottom)-h);z!=a&&(g.scrollTop=z)}var K=e.options.fixedGutter?0:s.gutters.offsetWidth,ie=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-K,te=hs(e)-s.gutters.offsetWidth,ye=n.right-n.left>te;return ye&&(n.right=n.left+te),n.left<10?g.scrollLeft=0:n.left<ie?g.scrollLeft=Math.max(0,n.left+K-(ye?0:10)):n.right>te+ie-3&&(g.scrollLeft=n.right+(ye?0:10)-te),g}function vs(e,n){n!=null&&(So(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Hs(e){So(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ko(e,n,s){(n!=null||s!=null)&&So(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function ap(e,n){So(e),e.curOp.scrollToPos=n}function So(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=ka(e,n.from),i=ka(e,n.to);_o(e,s,i,n.margin)}}function _o(e,n,s,i){var a=Ta(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});ko(e,a.scrollLeft,a.scrollTop)}function xs(e,n){Math.abs(e.doc.scrollTop-n)<2||(y||Qi(e,{top:n}),xl(e,n,!0),y&&Qi(e),qs(e,100))}function xl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Vi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,mu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Bs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+ol(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+oi(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Ji=function(e,n,s){this.cm=s;var i=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),a=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=a.tabIndex=-1,e(i),e(a),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(a,"scroll",function(){a.clientWidth&&n(a.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,k&&T<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Ji.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var a=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+a)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Ji.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ji.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ji.prototype.zeroWidthHack=function(){var e=J&&!X?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new et,this.disableVert=new et},Ji.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var a=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(a.right-1,(a.top+a.bottom)/2):document.elementFromPoint((a.right+a.left)/2,a.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Ji.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Co=function(){};Co.prototype.update=function(){return{bottom:0,right:0}},Co.prototype.setScrollLeft=function(){},Co.prototype.setScrollTop=function(){},Co.prototype.clear=function(){};function Us(e,n){n||(n=Bs(e));var s=e.display.barWidth,i=e.display.barHeight;Ec(e,n);for(var a=0;a<4&&s!=e.display.barWidth||i!=e.display.barHeight;a++)s!=e.display.barWidth&&e.options.lineWrapping&&Ca(e),Ec(e,Bs(e)),s=e.display.barWidth,i=e.display.barHeight}function Ec(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Lc={native:Ji,null:Co};function bl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ie(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Lc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Vi(e,n):xs(e,n)},e),e.display.scrollbars.addClass&&q(e.display.wrapper,e.display.scrollbars.addClass)}var bs=0;function ws(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++bs,markArrays:null},gc(e.curOp)}function Vr(e){var n=e.curOp;n&&Vd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ci(s)})}function Ci(e){for(var n=e.ops,s=0;s<n.length;s++)To(n[s]);for(var i=0;i<n.length;i++)Xi(n[i]);for(var a=0;a<n.length;a++)fu(n[a]);for(var h=0;h<n.length;h++)op(n[h]);for(var g=0;g<n.length;g++)lp(n[g])}function To(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&lo(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new li(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xi(e){e.updatedDisplay=e.mustUpdate&&Vn(e.cm,e.update)}function fu(e){var n=e.cm,s=n.display;e.updatedDisplay&&Ca(n),e.barMeasure=Bs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=su(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+oi(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-hs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function op(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Vi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==P(ze(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Us(n,e.barMeasure),e.updatedDisplay&&Ea(n,e.barMeasure),e.selectionChanged&&Ws(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&jc(e.cm)}function lp(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&xl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Vi(n,e.scrollLeft,!0,!0),e.scrollToPos){var a=hu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);Nc(n,a)}var h=e.maybeHiddenMarkers,g=e.maybeUnhiddenMarkers;if(h)for(var b=0;b<h.length;++b)h[b].lines.length||It(h[b],"hide");if(g)for(var w=0;w<g.length;++w)g[w].lines.length&&It(g[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Ln(e,n){if(e.curOp)return n();ws(e);try{return n()}finally{Vr(e)}}function pn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);ws(e);try{return n.apply(e,arguments)}finally{Vr(e)}}}function Cn(e){return function(){if(this.curOp)return e.apply(this,arguments);ws(this);try{return e.apply(this,arguments)}finally{Vr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);ws(n);try{return e.apply(this,arguments)}finally{Vr(n)}}}function qs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Se(ja,e))}function ja(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),a=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var g=h.styles,b=h.text.length>e.options.maxHighlightLength?Rt(n.mode,i.state):null,w=io(e,h,i,!0);b&&(i.state=b),h.styles=w.styles;var C=h.styleClasses,z=w.classes;z?h.styleClasses=z:C&&(h.styleClasses=null);for(var K=!g||g.length!=h.styles.length||C!=z&&(!C||!z||C.bgClass!=z.bgClass||C.textClass!=z.textClass),ie=0;!K&&ie<g.length;++ie)K=g[ie]!=h.styles[ie];K&&a.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&ds(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return qs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),a.length&&Ln(e,function(){for(var h=0;h<a.length;h++)Gi(e,a[h],"text")})}}var li=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ys(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=hs(e),this.force=s,this.dims=fl(e),this.events=[]};li.prototype.signal=function(e,n){mn(e,n)&&this.events.push(arguments)},li.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=oi(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=oi(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=P(ze(e));if(!n||!_(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Oe(e).getSelection();i.anchorNode&&i.extend&&_(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function ks(e){if(!(!e||!e.activeElt||e.activeElt==P(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&_(document.body,e.anchorNode)&&_(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Vn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Yi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&pu(e)==0)return!1;gu(e)&&(Yi(e),n.dims=fl(e));var a=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),g=Math.min(a,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>g&&s.viewTo-g<20&&(g=Math.min(a,s.viewTo)),Dn&&(h=fr(e.doc,h),g=dn(e.doc,g));var b=h!=s.viewFrom||g!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Tc(e,h,g),s.viewOffset=Sn(Je(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=pu(e);if(!b&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var C=Zt(e);return w>4&&(s.lineDiv.style.display="none"),Na(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,ks(C),le(s.cursorDiv),le(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,b&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,qs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==hs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+ol(e.display)-fs(e),s.top)}),n.visible=ys(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ys(e.display,e.doc,s));if(!Vn(e,n))break;Ca(e);var a=Bs(e);Yr(e),Us(e,a),Ea(e,a),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Qi(e,n){var s=new li(e,n);if(Vn(e,s)){Ca(e),mr(e,s);var i=Bs(e);Yr(e),Us(e,i),Ea(e,i),s.finish()}}function Na(e,n,s){var i=e.display,a=e.options.lineNumbers,h=i.lineDiv,g=h.firstChild;function b(ye){var ke=ye.nextSibling;return E&&J&&e.display.currentWheelTarget==ye?ye.style.display="none":ye.parentNode.removeChild(ye),ke}for(var w=i.view,C=i.viewFrom,z=0;z<w.length;z++){var K=w[z];if(!K.hidden)if(!K.node||K.node.parentNode!=h){var ie=Zd(e,K,C,s);h.insertBefore(ie,g)}else{for(;g!=K.node;)g=b(g);var te=a&&n!=null&&n<=C&&K.lineNumber;K.changes&&(Ke(K.changes,"gutter")>-1&&(te=!1),yc(e,K,C,s)),te&&(le(K.lineNumber),K.lineNumber.appendChild(document.createTextNode(je(e.options,C)))),g=K.node.nextSibling}C+=K.size}for(;g;)g=b(g)}function ar(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Mn(e,"gutterChanged",e)}function Ea(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+oi(e)+"px"}function mu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=_a(n)-n.scroller.scrollLeft+e.doc.scrollLeft,a=n.gutters.offsetWidth,h=i+"px",g=0;g<s.length;g++)if(!s[g].hidden){e.options.fixedGutter&&(s[g].gutter&&(s[g].gutter.style.left=h),s[g].gutterBackground&&(s[g].gutterBackground.style.left=h));var b=s[g].alignable;if(b)for(var w=0;w<b.length;w++)b[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+a+"px")}}function gu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=je(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var a=i.measure.appendChild(A("div",[A("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=a.firstChild.offsetWidth,g=a.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-g)+1,i.lineNumWidth=i.lineNumInnerWidth+g,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",ar(e.display),!0}return!1}function La(e,n){for(var s=[],i=!1,a=0;a<e.length;a++){var h=e[a],g=null;if(typeof h!="string"&&(g=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:g})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function yu(e){var n=e.gutters,s=e.gutterSpecs;le(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var a=s[i],h=a.className,g=a.style,b=n.appendChild(A("div",null,"CodeMirror-gutter "+h));g&&(b.style.cssText=g),h=="CodeMirror-linenumbers"&&(e.lineGutter=b,b.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",ar(e)}function Fr(e){yu(e.display),sr(e),mu(e)}function wl(e,n,s,i){var a=this;this.input=s,a.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),a.scrollbarFiller.setAttribute("cm-not-content","true"),a.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),a.gutterFiller.setAttribute("cm-not-content","true"),a.lineDiv=Q("div",null,"CodeMirror-code"),a.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),a.cursorDiv=A("div",null,"CodeMirror-cursors"),a.measure=A("div",null,"CodeMirror-measure"),a.lineMeasure=A("div",null,"CodeMirror-measure"),a.lineSpace=Q("div",[a.measure,a.lineMeasure,a.selectionDiv,a.cursorDiv,a.lineDiv],null,"position: relative; outline: none");var h=Q("div",[a.lineSpace],"CodeMirror-lines");a.mover=A("div",[h],null,"position: relative"),a.sizer=A("div",[a.mover],"CodeMirror-sizer"),a.sizerWidth=null,a.heightForcer=A("div",null,null,"position: absolute; height: "+Ft+"px; width: 1px;"),a.gutters=A("div",null,"CodeMirror-gutters"),a.lineGutter=null,a.scroller=A("div",[a.sizer,a.heightForcer,a.gutters],"CodeMirror-scroll"),a.scroller.setAttribute("tabIndex","-1"),a.wrapper=A("div",[a.scrollbarFiller,a.gutterFiller,a.scroller],"CodeMirror"),L&&G===105&&(a.wrapper.style.clipPath="inset(0px)"),a.wrapper.setAttribute("translate","no"),k&&T<8&&(a.gutters.style.zIndex=-1,a.scroller.style.paddingRight=0),!E&&!(y&&W)&&(a.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(a.wrapper):e(a.wrapper)),a.viewFrom=a.viewTo=n.first,a.reportedViewFrom=a.reportedViewTo=n.first,a.view=[],a.renderedView=null,a.externalMeasured=null,a.viewOffset=0,a.lastWrapHeight=a.lastWrapWidth=0,a.updateLineNumbers=null,a.nativeBarWidth=a.barHeight=a.barWidth=0,a.scrollbarsClipped=!1,a.lineNumWidth=a.lineNumInnerWidth=a.lineNumChars=null,a.alignWidgets=!1,a.cachedCharWidth=a.cachedTextHeight=a.cachedPaddingH=null,a.maxLine=null,a.maxLineLength=0,a.maxLineChanged=!1,a.wheelDX=a.wheelDY=a.wheelStartX=a.wheelStartY=null,a.shift=!1,a.selForContextMenu=null,a.activeTouch=null,a.gutterSpecs=La(i.gutters,i.lineNumbers),yu(a),s.init(a)}var Pa=0,Ti=null;k?Ti=-.53:y?Ti=15:L?Ti=-.7:V&&(Ti=-1/3);function Pc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function Ss(e){var n=Pc(e);return n.x*=Ti,n.y*=Ti,n}function $s(e,n){L&&G==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Pc(n),i=s.x,a=s.y,h=Ti;n.deltaMode===0&&(i=n.deltaX,a=n.deltaY,h=1);var g=e.display,b=g.scroller,w=b.scrollWidth>b.clientWidth,C=b.scrollHeight>b.clientHeight;if(i&&w||a&&C){if(a&&J&&E){e:for(var z=n.target,K=g.view;z!=b;z=z.parentNode)for(var ie=0;ie<K.length;ie++)if(K[ie].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!y&&!O&&h!=null){a&&C&&xs(e,Math.max(0,b.scrollTop+a*h)),Vi(e,Math.max(0,b.scrollLeft+i*h)),(!a||a&&C)&&bn(n),g.wheelStartX=null;return}if(a&&h!=null){var te=a*h,ye=e.doc.scrollTop,ke=ye+g.wrapper.clientHeight;te<0?ye=Math.max(0,ye+te-50):ke=Math.min(e.doc.height,ke+te+50),Qi(e,{top:ye,bottom:ke})}Pa<20&&n.deltaMode!==0&&(g.wheelStartX==null?(g.wheelStartX=b.scrollLeft,g.wheelStartY=b.scrollTop,g.wheelDX=i,g.wheelDY=a,setTimeout(function(){if(g.wheelStartX!=null){var Pe=b.scrollLeft-g.wheelStartX,Ne=b.scrollTop-g.wheelStartY,Fe=Ne&&g.wheelDY&&Ne/g.wheelDY||Pe&&g.wheelDX&&Pe/g.wheelDX;g.wheelStartX=g.wheelStartY=null,Fe&&(Ti=(Ti*Pa+Fe)/(Pa+1),++Pa)}},200)):(g.wheelDX+=i,g.wheelDY+=a))}}var Jn=function(e,n){this.ranges=e,this.primIndex=n};Jn.prototype.primary=function(){return this.ranges[this.primIndex]},Jn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!jt(s.anchor,i.anchor)||!jt(s.head,i.head))return!1}return!0},Jn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new At(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Jn(e,this.primIndex)},Jn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Jn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(He(n,i.from())>=0&&He(e,i.to())<=0)return s}return-1};var At=function(e,n){this.anchor=e,this.head=n};At.prototype.from=function(){return Kr(this.anchor,this.head)},At.prototype.to=function(){return kn(this.anchor,this.head)},At.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,s){var i=e&&e.options.selectionsMayTouch,a=n[s];n.sort(function(ie,te){return He(ie.from(),te.from())}),s=Ke(n,a);for(var h=1;h<n.length;h++){var g=n[h],b=n[h-1],w=He(b.to(),g.from());if(i&&!g.empty()?w>0:w>=0){var C=Kr(b.from(),g.from()),z=kn(b.to(),g.to()),K=b.empty()?g.from()==g.head:b.from()==b.head;h<=s&&--s,n.splice(--h,2,new At(K?z:C,K?C:z))}}return new Jn(n,s)}function zn(e,n){return new Jn([new At(e,n||e)],0)}function Fn(e){return e.text?pe(e.from.line+e.text.length-1,Qe(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function _s(e,n){if(He(e,n.from)<0)return e;if(He(e,n.to)<=0)return Fn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),pe(s,i)}function ui(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var a=e.sel.ranges[i];s.push(new At(_s(a.anchor,n),_s(a.head,n)))}return Pr(e.cm,s,e.sel.primIndex)}function ji(e,n,s){return e.line==n.line?pe(s.line,e.ch-n.ch+s.ch):pe(s.line+(e.line-n.line),e.ch)}function Ks(e,n,s){for(var i=[],a=pe(e.first,0),h=a,g=0;g<n.length;g++){var b=n[g],w=ji(b.from,a,h),C=ji(Fn(b),a,h);if(a=b.to,h=C,s=="around"){var z=e.sel.ranges[g],K=He(z.head,z.anchor)<0;i[g]=new At(K?C:w,K?w:C)}else i[g]=new At(w,w)}return new Jn(i,e.sel.primIndex)}function kl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),Gs(e)}function Gs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,qs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function Sl(e,n){return n.from.ch==0&&n.to.ch==0&&Qe(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function a(Fe){return s?s[Fe]:null}function h(Fe,Me,Ge){Ud(Fe,Me,Ge,i),Mn(Fe,"change",Fe,n)}function g(Fe,Me){for(var Ge=[],ot=Fe;ot<Me;++ot)Ge.push(new wi(C[ot],a(ot),i));return Ge}var b=n.from,w=n.to,C=n.text,z=Je(e,b.line),K=Je(e,w.line),ie=Qe(C),te=a(C.length-1),ye=w.line-b.line;if(n.full)e.insert(0,g(0,C.length)),e.remove(C.length,e.size-C.length);else if(Sl(e,n)){var ke=g(0,C.length-1);h(K,K.text,te),ye&&e.remove(b.line,ye),ke.length&&e.insert(b.line,ke)}else if(z==K)if(C.length==1)h(z,z.text.slice(0,b.ch)+ie+z.text.slice(w.ch),te);else{var Pe=g(1,C.length-1);Pe.push(new wi(ie+z.text.slice(w.ch),te,i)),h(z,z.text.slice(0,b.ch)+C[0],a(0)),e.insert(b.line+1,Pe)}else if(C.length==1)h(z,z.text.slice(0,b.ch)+C[0]+K.text.slice(w.ch),a(0)),e.remove(b.line+1,ye);else{h(z,z.text.slice(0,b.ch)+C[0],a(0)),h(K,ie+K.text.slice(w.ch),te);var Ne=g(1,C.length-1);ye>1&&e.remove(b.line+1,ye-1),e.insert(b.line+1,Ne)}Mn(e,"change",e,n)}function Pn(e,n,s){function i(a,h,g){if(a.linked)for(var b=0;b<a.linked.length;++b){var w=a.linked[b];if(w.doc!=h){var C=g&&w.sharedHist;s&&!C||(n(w.doc,C),i(w.doc,a,C))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,yo(e),kl(e),Jr(e),e.options.direction=n.direction,e.options.lineWrapping||lo(e),e.options.mode=n.modeOption,sr(e)}function Jr(e){(e.doc.direction=="rtl"?q:Ie)(e.display.lineDiv,"CodeMirror-rtl")}function Ac(e){Ln(e,function(){Jr(e),sr(e)})}function jo(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function No(e,n){var s={from:Qt(n.from),to:Fn(n),text:si(e,n.from,n.to)};return Oc(e,s,n.from.line,n.to.line+1),Pn(e,function(i){return Oc(i,s,n.from.line,n.to.line+1)},!0),s}function _l(e){for(;e.length;){var n=Qe(e);if(n.ranges)e.pop();else break}}function Rc(e,n){if(n)return _l(e.done),Qe(e.done);if(e.done.length&&!Qe(e.done).ranges)return Qe(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Qe(e.done)}function Eo(e,n,s,i){var a=e.history;a.undone.length=0;var h=+new Date,g,b;if((a.lastOp==i||a.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&a.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(g=Rc(a,a.lastOp==i)))b=Qe(g.changes),He(n.from,n.to)==0&&He(n.from,b.to)==0?b.to=Fn(n):g.changes.push(No(e,n));else{var w=Qe(a.done);for((!w||!w.ranges)&&Ra(e.sel,a.done),g={changes:[No(e,n)],generation:a.generation},a.done.push(g);a.done.length>a.undoDepth;)a.done.shift(),a.done[0].ranges||a.done.shift()}a.done.push(s),a.generation=++a.maxGeneration,a.lastModTime=a.lastSelTime=h,a.lastOp=a.lastSelOp=i,a.lastOrigin=a.lastSelOrigin=n.origin,b||It(e,"historyAdded")}function Ic(e,n,s,i){var a=n.charAt(0);return a=="*"||a=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Aa(e,n,s,i){var a=e.history,h=i&&i.origin;s==a.lastSelOp||h&&a.lastSelOrigin==h&&(a.lastModTime==a.lastSelTime&&a.lastOrigin==h||Ic(e,h,Qe(a.done),n))?a.done[a.done.length-1]=n:Ra(n,a.done),a.lastSelTime=+new Date,a.lastSelOrigin=h,a.lastSelOp=s,i&&i.clearRedo!==!1&&_l(a.undone)}function Ra(e,n){var s=Qe(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Oc(e,n,s,i){var a=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(g){g.markedSpans&&((a||(a=n["spans_"+e.id]={}))[h]=g.markedSpans),++h})}function Lo(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function Cl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],a=0;a<n.text.length;++a)i.push(Lo(s[a]));return i}function vu(e,n){var s=Cl(e,n),i=ps(e,n);if(!s)return i;if(!i)return s;for(var a=0;a<s.length;++a){var h=s[a],g=i[a];if(h&&g)e:for(var b=0;b<g.length;++b){for(var w=g[b],C=0;C<h.length;++C)if(h[C].marker==w.marker)continue e;h.push(w)}else g&&(s[a]=g)}return s}function Ys(e,n,s){for(var i=[],a=0;a<e.length;++a){var h=e[a];if(h.ranges){i.push(s?Jn.prototype.deepCopy.call(h):h);continue}var g=h.changes,b=[];i.push({changes:b});for(var w=0;w<g.length;++w){var C=g[w],z=void 0;if(b.push({from:C.from,to:C.to,text:C.text}),n)for(var K in C)(z=K.match(/^spans_(\d+)$/))&&Ke(n,Number(z[1]))>-1&&(Qe(b)[K]=C[K],delete C[K])}}return i}function Cs(e,n,s,i){if(i){var a=e.anchor;if(s){var h=He(n,a)<0;h!=He(s,a)<0?(a=n,n=s):h!=He(n,s)<0&&(n=s)}return new At(a,n)}else return new At(s||n,n)}function Po(e,n,s,i,a){a==null&&(a=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Jn([Cs(e.sel.primary(),n,s,a)],0),i)}function Ao(e,n,s){for(var i=[],a=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Cs(e.sel.ranges[h],n[h],null,a);var g=Pr(e.cm,i,e.sel.primIndex);Wn(e,g,s)}function Ia(e,n,s,i){var a=e.sel.ranges.slice(0);a[n]=s,Wn(e,Pr(e.cm,a,e.sel.primIndex),i)}function Vs(e,n,s,i){Wn(e,zn(n,s),i)}function xu(e,n,s){var i={ranges:n.ranges,update:function(a){this.ranges=[];for(var h=0;h<a.length;h++)this.ranges[h]=new At(gt(e,a[h].anchor),gt(e,a[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function Tl(e,n,s){var i=e.history.done,a=Qe(i);a&&a.ranges?(i[i.length-1]=n,Oa(e,n,s)):Wn(e,n,s)}function Wn(e,n,s){Oa(e,n,s),Aa(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Oa(e,n,s){(mn(e,"beforeSelectionChange")||e.cm&&mn(e.cm,"beforeSelectionChange"))&&(n=xu(e,n,s));var i=s&&s.bias||(He(n.primary().head,e.sel.primary().head)<0?-1:1);Js(e,Ts(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Hs(e.cm)}function Js(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,xn(e.cm)),Mn(e,"cursorActivity",e))}function Wr(e){Js(e,Ts(e,e.sel,null,!1))}function Ts(e,n,s,i){for(var a,h=0;h<n.ranges.length;h++){var g=n.ranges[h],b=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Ro(e,g.anchor,b&&b.anchor,s,i),C=g.head==g.anchor?w:Ro(e,g.head,b&&b.head,s,i);(a||w!=g.anchor||C!=g.head)&&(a||(a=n.ranges.slice(0,h)),a[h]=new At(w,C))}return a?Pr(e.cm,a,n.primIndex):n}function js(e,n,s,i,a){var h=Je(e,n.line);if(h.markedSpans)for(var g=0;g<h.markedSpans.length;++g){var b=h.markedSpans[g],w=b.marker,C="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((b.from==null||(C?b.from<=n.ch:b.from<n.ch))&&(b.to==null||(z?b.to>=n.ch:b.to>n.ch))){if(a&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--g;continue}else break;if(!w.atomic)continue;if(s){var K=w.find(i<0?1:-1),ie=void 0;if((i<0?z:C)&&(K=Ni(e,K,-i,K&&K.line==n.line?h:null)),K&&K.line==n.line&&(ie=He(K,s))&&(i<0?ie<0:ie>0))return js(e,K,n,i,a)}var te=w.find(i<0?-1:1);return(i<0?C:z)&&(te=Ni(e,te,i,te.line==n.line?h:null)),te?js(e,te,n,i,a):null}}return n}function Ro(e,n,s,i,a){var h=i||1,g=js(e,n,s,h,a)||!a&&js(e,n,s,h,!0)||js(e,n,s,-h,a)||!a&&js(e,n,s,-h,!0);return g||(e.cantEdit=!0,pe(e.first,0))}function Ni(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,pe(n.line-1)):null:s>0&&n.ch==(i||Je(e,n.line)).text.length?n.line<e.first+e.size-1?pe(n.line+1,0):null:new pe(n.line,n.ch+s)}function Zi(e){e.setSelection(pe(e.firstLine(),0),pe(e.lastLine()),Ct)}function jl(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(a,h,g,b){a&&(i.from=gt(e,a)),h&&(i.to=gt(e,h)),g&&(i.text=g),b!==void 0&&(i.origin=b)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Xs(e,n,s){if(e.cm){if(!e.cm.curOp)return pn(e.cm,Xs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"))&&(n=jl(e,n,!0),!n))){var i=ai&&!s&&oo(e,n.from,n.to);if(i)for(var a=i.length-1;a>=0;--a)Ei(e,{from:i[a].from,to:i[a].to,text:a?[""]:n.text,origin:n.origin});else Ei(e,n)}}function Ei(e,n){if(!(n.text.length==1&&n.text[0]==""&&He(n.from,n.to)==0)){var s=ui(e,n);Eo(e,n,s,e.cm?e.cm.curOp.id:NaN),Da(e,n,s,ps(e,n));var i=[];Pn(e,function(a,h){!h&&Ke(i,a.history)==-1&&(za(a.history,n),i.push(a.history)),Da(a,n,null,ps(a,n))})}}function ci(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var a=e.history,h,g=e.sel,b=n=="undo"?a.done:a.undone,w=n=="undo"?a.undone:a.done,C=0;C<b.length&&(h=b[C],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));C++);if(C!=b.length){for(a.lastOrigin=a.lastSelOrigin=null;;)if(h=b.pop(),h.ranges){if(Ra(h,w),s&&!h.equals(e.sel)){Wn(e,h,{clearRedo:!1});return}g=h}else if(i){b.push(h);return}else break;var z=[];Ra(g,w),w.push({changes:z,generation:a.generation}),a.generation=h.generation||++a.maxGeneration;for(var K=mn(e,"beforeChange")||e.cm&&mn(e.cm,"beforeChange"),ie=function(ke){var Pe=h.changes[ke];if(Pe.origin=n,K&&!jl(e,Pe,!1))return b.length=0,{};z.push(No(e,Pe));var Ne=ke?ui(e,Pe):Qe(b);Da(e,Pe,Ne,vu(e,Pe)),!ke&&e.cm&&e.cm.scrollIntoView({from:Pe.from,to:Fn(Pe)});var Fe=[];Pn(e,function(Me,Ge){!Ge&&Ke(Fe,Me.history)==-1&&(za(Me.history,Pe),Fe.push(Me.history)),Da(Me,Pe,null,vu(Me,Pe))})},te=h.changes.length-1;te>=0;--te){var ye=ie(te);if(ye)return ye.v}}}}function Io(e,n){if(n!=0&&(e.first+=n,e.sel=new Jn(ut(e.sel.ranges,function(a){return new At(pe(a.anchor.line+n,a.anchor.ch),pe(a.head.line+n,a.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)Gi(e.cm,i,"gutter")}}function Da(e,n,s,i){if(e.cm&&!e.cm.curOp)return pn(e.cm,Da)(e,n,s,i);if(n.to.line<e.first){Io(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var a=n.text.length-1-(e.first-n.from.line);Io(e,a),n={from:pe(e.first,0),to:pe(n.to.line+a,n.to.ch),text:[Qe(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:pe(h,Je(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=si(e,n.from,n.to),s||(s=ui(e,n)),e.cm?Nl(e.cm,n,i):gr(e,n,i),Oa(e,s,Ct),e.cantEdit&&Ro(e,pe(e.firstLine(),0))&&(e.cantEdit=!1)}}function Nl(e,n,s){var i=e.doc,a=e.display,h=n.from,g=n.to,b=!1,w=h.line;e.options.lineWrapping||(w=N($t(Je(i,h.line))),i.iter(w,g.line+1,function(te){if(te==a.maxLine)return b=!0,!0})),i.sel.contains(n.from,n.to)>-1&&xn(e),gr(i,n,s,Fs(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(te){var ye=Ui(te);ye>a.maxLineLength&&(a.maxLine=te,a.maxLineLength=ye,a.maxLineChanged=!0,b=!1)}),b&&(e.curOp.updateMaxLine=!0)),zr(i,h.line),qs(e,400);var C=n.text.length-(g.line-h.line)-1;n.full?sr(e):h.line==g.line&&n.text.length==1&&!Sl(e.doc,n)?Gi(e,h.line,"text"):sr(e,h.line,g.line+1,C);var z=mn(e,"changes"),K=mn(e,"change");if(K||z){var ie={from:h,to:g,text:n.text,removed:n.removed,origin:n.origin};K&&Mn(e,"change",e,ie),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(ie)}e.display.selForContextMenu=null}function Qs(e,n,s,i,a){var h;i||(i=s),He(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Xs(e,{from:s,to:i,text:n,origin:a})}function Ma(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function di(e,n,s,i){for(var a=0;a<e.length;++a){var h=e[a],g=!0;if(h.ranges){h.copied||(h=e[a]=h.deepCopy(),h.copied=!0);for(var b=0;b<h.ranges.length;b++)Ma(h.ranges[b].anchor,n,s,i),Ma(h.ranges[b].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var C=h.changes[w];if(s<C.from.line)C.from=pe(C.from.line+i,C.from.ch),C.to=pe(C.to.line+i,C.to.ch);else if(n<=C.to.line){g=!1;break}}g||(e.splice(0,a+1),a=0)}}function za(e,n){var s=n.from.line,i=n.to.line,a=n.text.length-(i-s)-1;di(e.done,s,i,a),di(e.undone,s,i,a)}function es(e,n,s,i){var a=n,h=n;return typeof n=="number"?h=Je(e,il(e,n)):a=N(n),a==null?null:(i(h,a)&&e.cm&&Gi(e.cm,a,s),h)}function pi(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}pi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var a=this.lines[s];this.height-=a.height,Jl(a),Mn(a,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Zs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var a=e[i];n+=a.chunkSize(),s+=a.height,a.parent=this}this.size=n,this.height=s,this.parent=null}Zs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],a=i.chunkSize();if(e<a){var h=Math.min(n,a-e),g=i.height;if(i.removeInner(e,h),this.height-=g-i.height,a==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=a}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof pi))){var b=[];this.collapse(b),this.children=[new pi(b)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<=h){if(a.insertInner(e,n,s),a.lines&&a.lines.length>50){for(var g=a.lines.length%25+25,b=g;b<a.lines.length;){var w=new pi(a.lines.slice(b,b+=25));a.height-=w.height,this.children.splice(++i,0,w),w.parent=this}a.lines=a.lines.slice(0,g),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Zs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var a=Ke(e.parent.children,e);e.parent.children.splice(a+1,0,s)}else{var i=new Zs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<h){var g=Math.min(n,h-e);if(a.iterN(e,g,s))return!0;if((n-=g)==0)break;e=0}else e-=h}}};var Li=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Li.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=N(s);if(!(i==null||!n)){for(var a=0;a<n.length;++a)n[a]==this&&n.splice(a--,1);n.length||(s.widgets=null);var h=qi(this);Gn(s,Math.max(0,s.height-h)),e&&(Ln(e,function(){bu(e,s,-h),Gi(e,i,"widget")}),Mn(e,"lineWidgetCleared",e,this,i))}},Li.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var a=qi(this)-n;a&&(Er(this.doc,i)||Gn(i,i.height+a),s&&Ln(s,function(){s.curOp.forceUpdate=!0,bu(s,i,a),Mn(s,"lineWidgetChanged",s,e,N(i))}))},Nn(Li);function bu(e,n,s){Sn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&vs(e,s)}function wu(e,n,s,i){var a=new Li(e,s,i),h=e.cm;return h&&a.noHScroll&&(h.display.alignWidgets=!0),es(e,n,"widget",function(g){var b=g.widgets||(g.widgets=[]);if(a.insertAt==null?b.push(a):b.splice(Math.min(b.length,Math.max(0,a.insertAt)),0,a),a.line=g,h&&!Er(e,g)){var w=Sn(g)<e.scrollTop;Gn(g,g.height+qi(a)),w&&vs(h,a.height),h.curOp.forceUpdate=!0}return!0}),h&&Mn(h,"lineWidgetAdded",h,a,typeof n=="number"?n:N(n)),a}var ln=0,hi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};hi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&ws(e),mn(this,"clear")){var s=this.find();s&&Mn(this,"clear",s.from,s.to)}for(var i=null,a=null,h=0;h<this.lines.length;++h){var g=this.lines[h],b=Ds(g.markedSpans,this);e&&!this.collapsed?Gi(e,N(g),"text"):e&&(b.to!=null&&(a=N(g)),b.from!=null&&(i=N(g))),g.markedSpans=so(g.markedSpans,b),b.from==null&&this.collapsed&&!Er(this.doc,g)&&e&&Gn(g,Si(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var C=$t(this.lines[w]),z=Ui(C);z>e.display.maxLineLength&&(e.display.maxLine=C,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,a+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Wr(e.doc)),e&&Mn(e,"markerCleared",e,this,i,a),n&&Vr(e),this.parent&&this.parent.clear()}},hi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,a=0;a<this.lines.length;++a){var h=this.lines[a],g=Ds(h.markedSpans,this);if(g.from!=null&&(s=pe(n?h:N(h),g.from),e==-1))return s;if(g.to!=null&&(i=pe(n?h:N(h),g.to),e==1))return i}return s&&{from:s,to:i}},hi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Ln(i,function(){var a=n.line,h=N(n.line),g=ll(i,h);if(g&&(ul(g),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Er(s.doc,a)&&s.height!=null){var b=s.height;s.height=null;var w=qi(s)-b;w&&Gn(a,a.height+w)}Mn(i,"markerChanged",i,e)})},hi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||Ke(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},hi.prototype.detachLine=function(e){if(this.lines.splice(Ke(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},Nn(hi);function Ns(e,n,s,i,a){if(i&&i.shared)return El(e,n,s,i,a);if(e.cm&&!e.cm.curOp)return pn(e.cm,Ns)(e,n,s,i,a);var h=new hi(e,a),g=He(n,s);if(i&&Be(i,h,!1),g>0||g==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=Q("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(cn(e,n.line,n,s,h)||n.line!=s.line&&cn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");Os()}h.addToHistory&&Eo(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var b=n.line,w=e.cm,C;if(e.iter(b,s.line+1,function(K){w&&h.collapsed&&!w.options.lineWrapping&&$t(K)==w.display.maxLine&&(C=!0),h.collapsed&&b!=n.line&&Gn(K,0),Ms(K,new Nr(h,b==n.line?n.ch:null,b==s.line?s.ch:null),e.cm&&e.cm.curOp),++b}),h.collapsed&&e.iter(n.line,s.line+1,function(K){Er(e,K)&&Gn(K,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&(Gr(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),w){if(C&&(w.curOp.updateMaxLine=!0),h.collapsed)sr(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)Gi(w,z,"text");h.atomic&&Wr(w.doc),Mn(w,"markerAdded",w,h)}return h}var ea=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};ea.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Mn(this,"clear")}},ea.prototype.find=function(e,n){return this.primary.find(e,n)},Nn(ea);function El(e,n,s,i,a){i=Be(i),i.shared=!1;var h=[Ns(e,n,s,i,a)],g=h[0],b=i.widgetNode;return Pn(e,function(w){b&&(i.widgetNode=b.cloneNode(!0)),h.push(Ns(w,gt(w,n),gt(w,s),i,a));for(var C=0;C<w.linked.length;++C)if(w.linked[C].isParent)return;g=Qe(h)}),new ea(h,g)}function Ll(e){return e.findMarks(pe(e.first,0),e.clipPos(pe(e.lastLine())),function(n){return n.parent})}function ta(e,n){for(var s=0;s<n.length;s++){var i=n[s],a=i.find(),h=e.clipPos(a.from),g=e.clipPos(a.to);if(He(h,g)){var b=Ns(e,h,g,i.primary,i.primary.type);i.markers.push(b),b.parent=i}}}function hn(e){for(var n=function(i){var a=e[i],h=[a.primary.doc];Pn(a.primary.doc,function(w){return h.push(w)});for(var g=0;g<a.markers.length;g++){var b=a.markers[g];Ke(h,b.doc)==-1&&(b.parent=null,a.markers.splice(g--,1))}},s=0;s<e.length;s++)n(s)}var Hn=0,Ot=function(e,n,s,i,a){if(!(this instanceof Ot))return new Ot(e,n,s,i,a);s==null&&(s=0),Zs.call(this,[new pi([new wi("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=pe(s,0);this.sel=zn(h),this.history=new jo(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=a=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Wn(this,zn(h),Ct)};Ot.prototype=he(Zs.prototype,{constructor:Ot,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cs(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=pe(this.first,0),s=this.first+this.size-1;Xs(this,{from:n,to:pe(s,Je(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ko(this.cm,0,0),Wn(this,zn(n),Ct)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Qs(this,e,n,s,i)},getRange:function(e,n,s){var i=si(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(ge(this,e))return Je(this,e)},getLineNumber:function(e){return N(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Je(this,e)),$t(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,s){Vs(this,gt(this,typeof e=="number"?pe(e,n||0):e),null,s)}),setSelection:gn(function(e,n,s){Vs(this,gt(this,e),gt(this,n||e),s)}),extendSelection:gn(function(e,n,s){Po(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:gn(function(e,n){Ao(this,ro(this,e),n)}),extendSelectionsBy:gn(function(e,n){var s=ut(this.sel.ranges,e);Ao(this,ro(this,s),n)}),setSelections:gn(function(e,n,s){if(e.length){for(var i=[],a=0;a<e.length;a++)i[a]=new At(gt(this,e[a].anchor),gt(this,e[a].head||e[a].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),s)}}),addSelection:gn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new At(gt(this,e),gt(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var a=si(this,n[i].from(),n[i].to());s=s?s.concat(a):a}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var a=si(this,s[i].from(),s[i].to());e!==!1&&(a=a.join(e||this.lineSeparator())),n[i]=a}return n},replaceSelection:function(e,n,s){for(var i=[],a=0;a<this.sel.ranges.length;a++)i[a]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:gn(function(e,n,s){for(var i=[],a=this.sel,h=0;h<a.ranges.length;h++){var g=a.ranges[h];i[h]={from:g.from(),to:g.to(),text:this.splitLines(e[h]),origin:s}}for(var b=n&&n!="end"&&Ks(this,i,n),w=i.length-1;w>=0;w--)Xs(this,i[w]);b?Tl(this,b):this.cm&&Hs(this.cm)}),undo:gn(function(){ci(this,"undo")}),redo:gn(function(){ci(this,"redo")}),undoSelection:gn(function(){ci(this,"undo",!0)}),redoSelection:gn(function(){ci(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var a=0;a<e.undone.length;a++)e.undone[a].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new jo(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ys(this.history.done),undone:Ys(this.history.undone)}},setHistory:function(e){var n=this.history=new jo(this.history);n.done=Ys(e.done.slice(0),null,!0),n.undone=Ys(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,s){return es(this,e,"gutter",function(i){var a=i.gutterMarkers||(i.gutterMarkers={});return a[n]=s,!s&&Ze(a)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&es(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ze(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!ge(this,e)||(n=e,e=Je(this,e),!e))return null}else if(n=N(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[a])i[a]=s;else{if(se(s).test(i[a]))return!1;i[a]+=" "+s}return!0})}),removeLineClass:gn(function(e,n,s){return es(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[a];if(h)if(s==null)i[a]=null;else{var g=h.match(se(s));if(!g)return!1;var b=g.index+g[0].length;i[a]=h.slice(0,g.index)+(!g.index||b==h.length?"":" ")+h.slice(b)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,s){return wu(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ns(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Ns(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Je(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var a=s[i];(a.from==null||a.from<=e.ch)&&(a.to==null||a.to>=e.ch)&&n.push(a.marker.parent||a.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],a=e.line;return this.iter(e.line,n.line+1,function(h){var g=h.markedSpans;if(g)for(var b=0;b<g.length;b++){var w=g[b];!(w.to!=null&&a==e.line&&e.ch>=w.to||w.from==null&&a!=e.line||w.from!=null&&a==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++a}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(a){var h=a.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,pe(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Ot(cs(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Ot(cs(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],ta(i,Ll(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),hn(Ll(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(a){return i.push(a.id)},!0),e.history=new jo(null),e.history.done=Ys(this.history.done,i),e.history.undone=Ys(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):jr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Ac(this.cm))})}),Ot.prototype.eachLine=Ot.prototype.iter;var Oo=0;function Do(e){var n=this;if(Zn(n),!(qt(n,e)||$i(n.display,e))){bn(e),k&&(Oo=+new Date);var s=gs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var a=i.length,h=Array(a),g=0,b=function(){++g==a&&pn(n,function(){s=gt(n.doc,s);var te={from:s,to:s,text:n.doc.splitLines(h.filter(function(ye){return ye!=null}).join(n.doc.lineSeparator())),origin:"paste"};Xs(n.doc,te),Tl(n.doc,zn(gt(n.doc,s),gt(n.doc,Fn(te))))})()},w=function(te,ye){if(n.options.allowDropFileTypes&&Ke(n.options.allowDropFileTypes,te.type)==-1){b();return}var ke=new FileReader;ke.onerror=function(){return b()},ke.onload=function(){var Pe=ke.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Pe)){b();return}h[ye]=Pe,b()},ke.readAsText(te)},C=0;C<i.length;C++)w(i[C],C);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var K;if(n.state.draggingText&&!n.state.draggingText.copy&&(K=n.listSelections()),Oa(n.doc,zn(s,s)),K)for(var ie=0;ie<K.length;++ie)Qs(n.doc,"",K[ie].anchor,K[ie].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function Mo(e,n){if(k&&(!e.state.draggingText||+new Date-Oo<100)){pr(n);return}if(!(qt(e,n)||$i(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!V)){var s=A("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",O&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),O&&s.parentNode.removeChild(s)}}function up(e,n){var s=gs(e,n);if(s){var i=document.createDocumentFragment();xo(e,s,i),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),fe(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Pl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var a=n[i].CodeMirror;a&&s.push(a)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var Al=!1;function ku(){Al||(Pi(),Al=!0)}function Pi(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Pl(Xr)},100))}),rt(window,"blur",function(){return Pl(Wt)})}function Xr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Qr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},na=0;na<10;na++)Qr[na+48]=Qr[na+96]=String(na);for(var Fa=65;Fa<=90;Fa++)Qr[Fa]=String.fromCharCode(Fa);for(var Wa=1;Wa<=12;Wa++)Qr[Wa+111]=Qr[Wa+63235]="F"+Wa;var Ai={};Ai.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ai.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ai.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ai.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ai.default=J?Ai.macDefault:Ai.pcDefault;function Dc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,a,h,g=0;g<n.length-1;g++){var b=n[g];if(/^(cmd|meta|m)$/i.test(b))h=!0;else if(/^a(lt)?$/i.test(b))s=!0;else if(/^(c|ctrl|control)$/i.test(b))i=!0;else if(/^s(hift)?$/i.test(b))a=!0;else throw new Error("Unrecognized modifier name: "+b)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),a&&(e="Shift-"+e),e}function Mc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var a=ut(s.split(" "),Dc),h=0;h<a.length;h++){var g=void 0,b=void 0;h==a.length-1?(b=a.join(" "),g=i):(b=a.slice(0,h+1).join(" "),g="...");var w=n[b];if(!w)n[b]=g;else if(w!=g)throw new Error("Inconsistent bindings for "+b)}delete e[s]}for(var C in n)e[C]=n[C];return e}function ra(e,n,s,i){n=Es(n);var a=n.call?n.call(e,i):n[e];if(a===!1)return"nothing";if(a==="...")return"multi";if(a!=null&&s(a))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ra(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var g=ra(e,n.fallthrough[h],s,i);if(g)return g}}}function Su(e){var n=typeof e=="string"?e:Qr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function _u(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(Re?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(Re?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Cu(e,n){if(O&&e.keyCode==34&&e.char)return!1;var s=Qr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),_u(s,e,n))}function Es(e){return typeof e=="string"?Ai[e]:e}function ia(e,n){for(var s=e.doc.sel.ranges,i=[],a=0;a<s.length;a++){for(var h=n(s[a]);i.length&&He(h.from,Qe(i).to)<=0;){var g=i.pop();if(He(g.from,h.from)<0){h.from=g.from;break}}i.push(h)}Ln(e,function(){for(var b=i.length-1;b>=0;b--)Qs(e.doc,"",i[b].from,i[b].to,"+delete");Hs(e)})}function Ha(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Ba(e,n,s){var i=Ha(e,n.ch,s);return i==null?null:new pe(n.line,i,s<0?"after":"before")}function Rl(e,n,s,i,a){if(e){n.doc.direction=="rtl"&&(a=-a);var h=bt(s,n.doc.direction);if(h){var g=a<0?Qe(h):h[0],b=a<0==(g.level==1),w=b?"after":"before",C;if(g.level>0||n.doc.direction=="rtl"){var z=ki(n,s);C=a<0?s.text.length-1:0;var K=Lr(n,z,C).top;C=nr(function(ie){return Lr(n,z,ie).top==K},a<0==(g.level==1)?g.from:g.to-1,C),w=="before"&&(C=Ha(s,C,1))}else C=a<0?g.to:g.from;return new pe(i,C,w)}}return new pe(i,a<0?s.text.length:0,a<0?"before":"after")}function Tu(e,n,s,i){var a=bt(n,e.doc.direction);if(!a)return Ba(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Ur(a,s.ch,s.sticky),g=a[h];if(e.doc.direction=="ltr"&&g.level%2==0&&(i>0?g.to>s.ch:g.from<s.ch))return Ba(n,s,i);var b=function(Ne,Fe){return Ha(n,Ne instanceof pe?Ne.ch:Ne,Fe)},w,C=function(Ne){return e.options.lineWrapping?(w=w||ki(e,n),du(e,n,w,Ne)):{begin:0,end:n.text.length}},z=C(s.sticky=="before"?b(s,-1):s.ch);if(e.doc.direction=="rtl"||g.level==1){var K=g.level==1==i<0,ie=b(s,K?1:-1);if(ie!=null&&(K?ie<=g.to&&ie<=z.end:ie>=g.from&&ie>=z.begin)){var te=K?"before":"after";return new pe(s.line,ie,te)}}var ye=function(Ne,Fe,Me){for(var Ge=function(Et,Bn){return Bn?new pe(s.line,b(Et,1),"before"):new pe(s.line,Et,"after")};Ne>=0&&Ne<a.length;Ne+=Fe){var ot=a[Ne],Ve=Fe>0==(ot.level!=1),St=Ve?Me.begin:b(Me.end,-1);if(ot.from<=St&&St<ot.to||(St=Ve?ot.from:b(ot.to,-1),Me.begin<=St&&St<Me.end))return Ge(St,Ve)}},ke=ye(h+i,i,z);if(ke)return ke;var Pe=i>0?z.end:b(z.begin,-1);return Pe!=null&&!(i>0&&Pe==n.text.length)&&(ke=ye(i>0?0:a.length-1,i,C(Pe)),ke)?ke:null}var Ua={selectAll:Zi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ct)},killLine:function(e){return ia(e,function(n){if(n.empty()){var s=Je(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:pe(n.head.line+1,0)}:{from:n.head,to:pe(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:gt(e.doc,pe(n.to().line+1,0))}})},delLineLeft:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(pe(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(pe(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return ju(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return zc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},tt)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},tt)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Nu(e,n.head):i},tt)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,a=0;a<s.length;a++){var h=s[a].from(),g=$e(e.getLine(h.line),h.ch,i);n.push(yt(i-g%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var a=n[i].head,h=Je(e.doc,a.line).text;if(h){if(a.ch==h.length&&(a=new pe(a.line,a.ch-1)),a.ch>0)a=new pe(a.line,a.ch+1),e.replaceRange(h.charAt(a.ch-1)+h.charAt(a.ch-2),pe(a.line,a.ch-2),a,"+transpose");else if(a.line>e.doc.first){var g=Je(e.doc,a.line-1).text;g&&(a=new pe(a.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+g.charAt(g.length-1),pe(a.line-1,g.length-1),a,"+transpose"))}}s.push(new At(a,a))}e.setSelections(s)})},newlineAndIndent:function(e){return Ln(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Hs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function ju(e,n){var s=Je(e.doc,n),i=$t(s);return i!=s&&(n=N(i)),Rl(!0,e,i,n,1)}function zc(e,n){var s=Je(e.doc,n),i=hr(s);return i!=s&&(n=N(i)),Rl(!0,e,s,n,-1)}function Nu(e,n){var s=ju(e,n.line),i=Je(e.doc,s.line),a=bt(i,e.doc.direction);if(!a||a[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),g=n.line==s.line&&n.ch<=h&&n.ch;return pe(s.line,g?0:h,s.sticky)}return s}function qa(e,n,s){if(typeof n=="string"&&(n=Ua[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,a=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),a=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return a}function Fc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var a=ra(n,e.state.keyMaps[i],s,e);if(a)return a}return e.options.extraKeys&&ra(n,e.options.extraKeys,s,e)||ra(n,e.options.keyMap,s,e)}var Wc=new et;function $a(e,n,s,i){var a=e.state.keySeq;if(a){if(Su(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Wc.set(50,function(){e.state.keySeq==a&&(e.state.keySeq=null,e.display.input.reset())}),Hc(e,a+" "+n,s,i))return!0}return Hc(e,n,s,i)}function Hc(e,n,s,i){var a=Fc(e,n,i);return a=="multi"&&(e.state.keySeq=n),a=="handled"&&Mn(e,"keyHandled",e,n,s),(a=="handled"||a=="multi")&&(bn(s),Ws(e)),!!a}function Eu(e,n){var s=Cu(n,!0);return s?n.shiftKey&&!e.state.keySeq?$a(e,"Shift-"+s,n,function(i){return qa(e,i,!0)})||$a(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return qa(e,i)}):$a(e,s,n,function(i){return qa(e,i)}):!1}function cp(e,n,s){return $a(e,"'"+s+"'",n,function(i){return qa(e,i,!0)})}var Lu=null;function Pu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=P(ze(n)),!qt(n,e))){k&&T<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Eu(n,e);O&&(Lu=i?s:null,!i&&s==88&&!os&&(J?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),y&&!J&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Bc(n)}}function Bc(e){var n=e.display.lineDiv;q(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ie(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Au(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function zo(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!($i(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||J&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(O&&s==Lu){Lu=null,bn(e);return}if(!(O&&(!e.which||e.which<10)&&Eu(n,e))){var a=String.fromCharCode(i??s);a!="\b"&&(cp(n,e,a)||n.display.input.onKeyPress(e))}}}var dp=400,Ru=function(e,n,s){this.time=e,this.pos=n,this.button=s};Ru.prototype.compare=function(e,n,s){return this.time+dp>e&&He(n,this.pos)==0&&s==this.button};var Fo,yr;function Iu(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Fo=yr=null,"triple"):Fo&&Fo.compare(s,e,n)?(yr=new Ru(s,e,n),Fo=null,"double"):(Fo=new Ru(s,e,n),yr=null,"single")}function Wo(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,$i(s,e)){E||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Il(n,e)){var i=gs(n,e),a=En(e),h=i?Iu(i,a):"single";Oe(n).focus(),a==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Uc(n,a,i,h,e))&&(a==1?i?$c(n,i,h,e):mi(e)==s.scroller&&bn(e):a==2?(i&&Po(n.doc,i),setTimeout(function(){return s.input.focus()},20)):a==3&&(ve?n.display.input.onContextMenu(e):yl(n)))}}}function Uc(e,n,s,i,a){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,$a(e,_u(h,a),a,function(g){if(typeof g=="string"&&(g=Ua[g]),!g)return!1;var b=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),b=g(e,s)!=Yt}finally{e.state.suppressEdits=!1}return b})}function qc(e,n,s){var i=e.getOption("configureMouse"),a=i?i(e,n,s):{};if(a.unit==null){var h=ce?s.shiftKey&&s.metaKey:s.altKey;a.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(a.extend==null||e.doc.extend)&&(a.extend=e.doc.extend||s.shiftKey),a.addNew==null&&(a.addNew=J?s.metaKey:s.ctrlKey),a.moveOnDrag==null&&(a.moveOnDrag=!(J?s.altKey:s.ctrlKey)),a}function $c(e,n,s,i){k?setTimeout(Se(jc,e),0):e.curOp.focus=P(ze(e));var a=qc(e,s,i),h=e.doc.sel,g;e.options.dragDrop&&as&&!e.isReadOnly()&&s=="single"&&(g=h.contains(n))>-1&&(He((g=h.ranges[g]).from(),n)<0||n.xRel>0)&&(He(g.to(),n)>0||n.xRel<0)?Ou(e,i,n,a):Du(e,i,n,a)}function Ou(e,n,s,i){var a=e.display,h=!1,g=pn(e,function(C){E&&(a.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:yl(e)),tn(a.wrapper.ownerDocument,"mouseup",g),tn(a.wrapper.ownerDocument,"mousemove",b),tn(a.scroller,"dragstart",w),tn(a.scroller,"drop",g),h||(bn(C),i.addNew||Po(e.doc,s,null,null,i.extend),E&&!V||k&&T==9?setTimeout(function(){a.wrapper.ownerDocument.body.focus({preventScroll:!0}),a.input.focus()},20):a.input.focus())}),b=function(C){h=h||Math.abs(n.clientX-C.clientX)+Math.abs(n.clientY-C.clientY)>=10},w=function(){return h=!0};E&&(a.scroller.draggable=!0),e.state.draggingText=g,g.copy=!i.moveOnDrag,rt(a.wrapper.ownerDocument,"mouseup",g),rt(a.wrapper.ownerDocument,"mousemove",b),rt(a.scroller,"dragstart",w),rt(a.scroller,"drop",g),e.state.delayingBlurEvent=!0,setTimeout(function(){return a.input.focus()},20),a.scroller.dragDrop&&a.scroller.dragDrop()}function sa(e,n,s){if(s=="char")return new At(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new At(pe(n.line,0),gt(e.doc,pe(n.line+1,0)));var i=s(e,n);return new At(i.from,i.to)}function Du(e,n,s,i){k&&yl(e);var a=e.display,h=e.doc;bn(n);var g,b,w=h.sel,C=w.ranges;if(i.addNew&&!i.extend?(b=h.sel.contains(s),b>-1?g=C[b]:g=new At(s,s)):(g=h.sel.primary(),b=h.sel.primIndex),i.unit=="rectangle")i.addNew||(g=new At(s,s)),s=gs(e,n,!0,!0),b=-1;else{var z=sa(e,s,i.unit);i.extend?g=Cs(g,z.anchor,z.head,i.extend):g=z}i.addNew?b==-1?(b=C.length,Wn(h,Pr(e,C.concat([g]),b),{scroll:!1,origin:"*mouse"})):C.length>1&&C[b].empty()&&i.unit=="char"&&!i.extend?(Wn(h,Pr(e,C.slice(0,b).concat(C.slice(b+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Ia(h,b,g,xt):(b=0,Wn(h,new Jn([g],0),xt),w=h.sel);var K=s;function ie(Me){if(He(K,Me)!=0)if(K=Me,i.unit=="rectangle"){for(var Ge=[],ot=e.options.tabSize,Ve=$e(Je(h,s.line).text,s.ch,ot),St=$e(Je(h,Me.line).text,Me.ch,ot),Et=Math.min(Ve,St),Bn=Math.max(Ve,St),sn=Math.min(s.line,Me.line),xr=Math.min(e.lastLine(),Math.max(s.line,Me.line));sn<=xr;sn++){var lr=Je(h,sn).text,yn=Ue(lr,Et,ot);Et==Bn?Ge.push(new At(pe(sn,yn),pe(sn,yn))):lr.length>yn&&Ge.push(new At(pe(sn,yn),pe(sn,Ue(lr,Bn,ot))))}Ge.length||Ge.push(new At(s,s)),Wn(h,Pr(e,w.ranges.slice(0,b).concat(Ge),b),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Me)}else{var br=g,Tn=sa(e,Me,i.unit),vn=br.anchor,Mt;He(Tn.anchor,vn)>0?(Mt=Tn.head,vn=Kr(br.from(),Tn.anchor)):(Mt=Tn.anchor,vn=kn(br.to(),Tn.head));var dt=w.ranges.slice(0);dt[b]=Mu(e,new At(gt(h,vn),Mt)),Wn(h,Pr(e,dt,b),xt)}}var te=a.wrapper.getBoundingClientRect(),ye=0;function ke(Me){var Ge=++ye,ot=gs(e,Me,!0,i.unit=="rectangle");if(ot)if(He(ot,K)!=0){e.curOp.focus=P(ze(e)),ie(ot);var Ve=ys(a,h);(ot.line>=Ve.to||ot.line<Ve.from)&&setTimeout(pn(e,function(){ye==Ge&&ke(Me)}),150)}else{var St=Me.clientY<te.top?-20:Me.clientY>te.bottom?20:0;St&&setTimeout(pn(e,function(){ye==Ge&&(a.scroller.scrollTop+=St,ke(Me))}),50)}}function Pe(Me){e.state.selectingText=!1,ye=1/0,Me&&(bn(Me),a.input.focus()),tn(a.wrapper.ownerDocument,"mousemove",Ne),tn(a.wrapper.ownerDocument,"mouseup",Fe),h.history.lastSelOrigin=null}var Ne=pn(e,function(Me){Me.buttons===0||!En(Me)?Pe(Me):ke(Me)}),Fe=pn(e,Pe);e.state.selectingText=Fe,rt(a.wrapper.ownerDocument,"mousemove",Ne),rt(a.wrapper.ownerDocument,"mouseup",Fe)}function Mu(e,n){var s=n.anchor,i=n.head,a=Je(e.doc,s.line);if(He(s,i)==0&&s.sticky==i.sticky)return n;var h=bt(a);if(!h)return n;var g=Ur(h,s.ch,s.sticky),b=h[g];if(b.from!=s.ch&&b.to!=s.ch)return n;var w=g+(b.from==s.ch==(b.level!=1)?0:1);if(w==0||w==h.length)return n;var C;if(i.line!=s.line)C=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=Ur(h,i.ch,i.sticky),K=z-g||(i.ch-s.ch)*(b.level==1?-1:1);z==w-1||z==w?C=K<0:C=K>0}var ie=h[w+(C?-1:0)],te=C==(ie.level==1),ye=te?ie.from:ie.to,ke=te?"after":"before";return s.ch==ye&&s.sticky==ke?n:new At(new pe(s.line,ye,ke),i)}function Kc(e,n,s,i){var a,h;if(n.touches)a=n.touches[0].clientX,h=n.touches[0].clientY;else try{a=n.clientX,h=n.clientY}catch{return!1}if(a>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&bn(n);var g=e.display,b=g.lineDiv.getBoundingClientRect();if(h>b.bottom||!mn(e,s))return In(n);h-=b.top-g.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var C=g.gutters.childNodes[w];if(C&&C.getBoundingClientRect().right>=a){var z=$(e.doc,h),K=e.display.gutterSpecs[w];return It(e,s,e,z,K.className,n),In(n)}}}function Il(e,n){return Kc(e,n,"gutterClick",!0)}function zu(e,n){$i(e.display,n)||Gc(e,n)||qt(e,n,"contextmenu")||ve||e.display.input.onContextMenu(n)}function Gc(e,n){return mn(e,"gutterContextMenu")?Kc(e,n,"gutterContextMenu",!1):!1}function Fu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),wa(e)}var aa={toString:function(){return"CodeMirror.Init"}},Yc={},er={};function vr(e){var n=e.optionHandlers;function s(i,a,h,g){e.defaults[i]=a,h&&(n[i]=g?function(b,w,C){C!=aa&&h(b,w,C)}:h)}e.defineOption=s,e.Init=aa,s("value","",function(i,a){return i.setValue(a)},!0),s("mode",null,function(i,a){i.doc.modeOption=a,kl(i)},!0),s("indentUnit",2,kl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Gs(i),wa(i),sr(i)},!0),s("lineSeparator",null,function(i,a){if(i.doc.lineSep=a,!!a){var h=[],g=i.doc.first;i.doc.iter(function(w){for(var C=0;;){var z=w.text.indexOf(a,C);if(z==-1)break;C=z+a.length,h.push(pe(g,z))}g++});for(var b=h.length-1;b>=0;b--)Qs(i.doc,a,h[b],pe(h[b].line,h[b].ch+a.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,a,h){i.state.specialChars=new RegExp(a.source+(a.test("	")?"":"|	"),"g"),h!=aa&&i.refresh()}),s("specialCharPlaceholder",qd,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",W?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,a){return i.getInputField().spellcheck=a},!0),s("autocorrect",!1,function(i,a){return i.getInputField().autocorrect=a},!0),s("autocapitalize",!1,function(i,a){return i.getInputField().autocapitalize=a},!0),s("rtlMoveVisually",!oe),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Fu(i),Fr(i)},!0),s("keyMap","default",function(i,a,h){var g=Es(a),b=h!=aa&&Es(h);b&&b.detach&&b.detach(i,g),g.attach&&g.attach(i,b||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Jc,!0),s("gutters",[],function(i,a){i.display.gutterSpecs=La(a,i.options.lineNumbers),Fr(i)},!0),s("fixedGutter",!0,function(i,a){i.display.gutters.style.left=a?_a(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Us(i)},!0),s("scrollbarStyle","native",function(i){bl(i),Us(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,a){i.display.gutterSpecs=La(i.options.gutters,a),Fr(i)},!0),s("firstLineNumber",1,Fr,!0),s("lineNumberFormatter",function(i){return i},Fr,!0),s("showCursorWhenSelecting",!1,Yr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,a){a=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(a)}),s("screenReaderLabel",null,function(i,a){a=a===""?null:a,i.display.input.screenReaderLabelChanged(a)}),s("disableInput",!1,function(i,a){a||i.display.input.reset()},!0),s("dragDrop",!0,Vc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Yr,!0),s("singleCursorHeightPerLine",!0,Yr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Gs,!0),s("addModeClass",!1,Gs,!0),s("pollInterval",100),s("undoDepth",200,function(i,a){return i.doc.history.undoDepth=a}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Gs,!0),s("moveInputWithCursor",!0,function(i,a){a||i.display.input.resetPosition()}),s("tabindex",null,function(i,a){return i.display.input.getField().tabIndex=a||""}),s("autofocus",null),s("direction","ltr",function(i,a){return i.doc.setDirection(a)},!0),s("phrases",null)}function Vc(e,n,s){var i=s&&s!=aa;if(!n!=!i){var a=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",a.start),h(e.display.scroller,"dragenter",a.enter),h(e.display.scroller,"dragover",a.over),h(e.display.scroller,"dragleave",a.leave),h(e.display.scroller,"drop",a.drop)}}function Jc(e){e.options.lineWrapping?(q(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ie(e.display.wrapper,"CodeMirror-wrap"),lo(e)),yo(e),sr(e),wa(e),setTimeout(function(){return Us(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Be(n):{},Be(Yc,n,!1);var i=n.value;typeof i=="string"?i=new Ot(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var a=new en.inputStyles[n.inputStyle](this),h=this.display=new wl(e,i,a,n);h.wrapper.CodeMirror=this,Fu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),bl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new et,keySeq:null,specialChars:null},n.autofocus&&!W&&h.input.focus(),k&&T<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Xc(this),ku(),ws(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!W||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&vl(s)},20):Wt(this);for(var g in er)er.hasOwnProperty(g)&&er[g](this,n[g],aa);gu(this),n.finishInit&&n.finishInit(this);for(var b=0;b<Ol.length;++b)Ol[b](this);Vr(this),E&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=Yc,en.optionHandlers=er;function Xc(e){var n=e.display;rt(n.scroller,"mousedown",pn(e,Wo)),k&&T<11?rt(n.scroller,"dblclick",pn(e,function(w){if(!qt(e,w)){var C=gs(e,w);if(!(!C||Il(e,w)||$i(e.display,w))){bn(w);var z=e.findWordAt(C);Po(e.doc,z.anchor,z.head)}}})):rt(n.scroller,"dblclick",function(w){return qt(e,w)||bn(w)}),rt(n.scroller,"contextmenu",function(w){return zu(e,w)}),rt(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||zu(e,w)});var s,i={end:0};function a(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var C=w.touches[0];return C.radiusX<=1&&C.radiusY<=1}function g(w,C){if(C.left==null)return!0;var z=C.left-w.left,K=C.top-w.top;return z*z+K*K>400}rt(n.scroller,"touchstart",function(w){if(!qt(e,w)&&!h(w)&&!Il(e,w)){n.input.ensurePolled(),clearTimeout(s);var C=+new Date;n.activeTouch={start:C,moved:!1,prev:C-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(w){var C=n.activeTouch;if(C&&!$i(n,w)&&C.left!=null&&!C.moved&&new Date-C.start<300){var z=e.coordsChar(n.activeTouch,"page"),K;!C.prev||g(C,C.prev)?K=new At(z,z):!C.prev.prev||g(C,C.prev.prev)?K=e.findWordAt(z):K=new At(pe(z.line,0),gt(e.doc,pe(z.line+1,0))),e.setSelection(K.anchor,K.head),e.focus(),bn(w)}a()}),rt(n.scroller,"touchcancel",a),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(xs(e,n.scroller.scrollTop),Vi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(w){return $s(e,w)}),rt(n.scroller,"DOMMouseScroll",function(w){return $s(e,w)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){qt(e,w)||pr(w)},over:function(w){qt(e,w)||(up(e,w),pr(w))},start:function(w){return Mo(e,w)},drop:pn(e,Do),leave:function(w){qt(e,w)||Zn(e)}};var b=n.input.getField();rt(b,"keyup",function(w){return Au.call(e,w)}),rt(b,"keydown",pn(e,Pu)),rt(b,"keypress",pn(e,zo)),rt(b,"focus",function(w){return vl(e,w)}),rt(b,"blur",function(w){return Wt(e,w)})}var Ol=[];en.defineInitHook=function(e){return Ol.push(e)};function oa(e,n,s,i){var a=e.doc,h;s==null&&(s="add"),s=="smart"&&(a.mode.indent?h=Nt(e,n).state:s="prev");var g=e.options.tabSize,b=Je(a,n),w=$e(b.text,null,g);b.stateAfter&&(b.stateAfter=null);var C=b.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(b.text))z=0,s="not";else if(s=="smart"&&(z=a.mode.indent(h,b.text.slice(C.length),b.text),z==Yt||z>150)){if(!i)return;s="prev"}s=="prev"?n>a.first?z=$e(Je(a,n-1).text,null,g):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var K="",ie=0;if(e.options.indentWithTabs)for(var te=Math.floor(z/g);te;--te)ie+=g,K+="	";if(ie<z&&(K+=yt(z-ie)),K!=C)return Qs(a,K,pe(n,0),pe(n,C.length),"+input"),b.stateAfter=null,!0;for(var ye=0;ye<a.sel.ranges.length;ye++){var ke=a.sel.ranges[ye];if(ke.head.line==n&&ke.head.ch<C.length){var Pe=pe(n,C.length);Ia(a,ye,new At(Pe,Pe));break}}}var Zr=null;function Ka(e){Zr=e}function Dl(e,n,s,i,a){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var g=+new Date-200,b=a=="paste"||e.state.pasteIncoming>g,w=jr(n),C=null;if(b&&i.ranges.length>1)if(Zr&&Zr.text.join(`
`)==n){if(i.ranges.length%Zr.text.length==0){C=[];for(var z=0;z<Zr.text.length;z++)C.push(h.splitLines(Zr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(C=ut(w,function(Ne){return[Ne]}));for(var K=e.curOp.updateInput,ie=i.ranges.length-1;ie>=0;ie--){var te=i.ranges[ie],ye=te.from(),ke=te.to();te.empty()&&(s&&s>0?ye=pe(ye.line,ye.ch-s):e.state.overwrite&&!b?ke=pe(ke.line,Math.min(Je(h,ke.line).text.length,ke.ch+Qe(w).length)):b&&Zr&&Zr.lineWise&&Zr.text.join(`
`)==w.join(`
`)&&(ye=ke=pe(ye.line,0)));var Pe={from:ye,to:ke,text:C?C[ie%C.length]:w,origin:a||(b?"paste":e.state.cutIncoming>g?"cut":"+input")};Xs(e.doc,Pe),Mn(e,"inputRead",e,Pe)}n&&!b&&Ml(e,n),Hs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=K),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Wu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Ln(n,function(){return Dl(n,s,0,null,"paste")}),!0}function Ml(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var a=s.ranges[i];if(!(a.head.ch>100||i&&s.ranges[i-1].head.line==a.head.line)){var h=e.getModeAt(a.head),g=!1;if(h.electricChars){for(var b=0;b<h.electricChars.length;b++)if(n.indexOf(h.electricChars.charAt(b))>-1){g=oa(e,a.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Je(e.doc,a.head.line).text.slice(0,a.head.ch))&&(g=oa(e,a.head.line,"smart"));g&&Mn(e,"electricInput",e,a.head.line)}}}function zl(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var a=e.doc.sel.ranges[i].head.line,h={anchor:pe(a,0),head:pe(a+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Fl(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Wl(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return E?e.style.width="1000px":e.setAttribute("wrap","off"),F&&(e.style.border="1px solid black"),n}function Hl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Oe(this).focus(),this.display.input.focus()},setOption:function(i,a){var h=this.options,g=h[i];h[i]==a&&i!="mode"||(h[i]=a,n.hasOwnProperty(i)&&pn(this,n[i])(this,a,g),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,a){this.state.keyMaps[a?"push":"unshift"](Es(i))},removeKeyMap:function(i){for(var a=this.state.keyMaps,h=0;h<a.length;++h)if(a[h]==i||a[h].name==i)return a.splice(h,1),!0},addOverlay:Cn(function(i,a){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");ae(this.state.overlays,{mode:h,modeSpec:i,opaque:a&&a.opaque,priority:a&&a.priority||0},function(g){return g.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Cn(function(i){for(var a=this.state.overlays,h=0;h<a.length;++h){var g=a[h].modeSpec;if(g==i||typeof i=="string"&&g.name==i){a.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Cn(function(i,a,h){typeof a!="string"&&typeof a!="number"&&(a==null?a=this.options.smartIndent?"smart":"prev":a=a?"add":"subtract"),ge(this.doc,i)&&oa(this,i,a,h)}),indentSelection:Cn(function(i){for(var a=this.doc.sel.ranges,h=-1,g=0;g<a.length;g++){var b=a[g];if(b.empty())b.head.line>h&&(oa(this,b.head.line,i,!0),h=b.head.line,g==this.doc.sel.primIndex&&Hs(this));else{var w=b.from(),C=b.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),C.line-(C.ch?0:1))+1;for(var K=z;K<h;++K)oa(this,K,i);var ie=this.doc.sel.ranges;w.ch==0&&a.length==ie.length&&ie[g].from().ch>0&&Ia(this.doc,g,new At(w,ie[g].to()),Ct)}}}),getTokenAt:function(i,a){return xi(this,i,a)},getLineTokens:function(i,a){return xi(this,pe(i),a,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var a=Hi(this,Je(this.doc,i.line)),h=0,g=(a.length-1)/2,b=i.ch,w;if(b==0)w=a[2];else for(;;){var C=h+g>>1;if((C?a[C*2-1]:0)>=b)g=C;else if(a[C*2+1]<b)h=C+1;else{w=a[C*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var a=this.doc.mode;return a.innerMode?e.innerMode(a,this.getTokenAt(i).state).mode:a},getHelper:function(i,a){return this.getHelpers(i,a)[0]},getHelpers:function(i,a){var h=[];if(!s.hasOwnProperty(a))return h;var g=s[a],b=this.getModeAt(i);if(typeof b[a]=="string")g[b[a]]&&h.push(g[b[a]]);else if(b[a])for(var w=0;w<b[a].length;w++){var C=g[b[a][w]];C&&h.push(C)}else b.helperType&&g[b.helperType]?h.push(g[b.helperType]):g[b.name]&&h.push(g[b.name]);for(var z=0;z<g._global.length;z++){var K=g._global[z];K.pred(b,this)&&Ke(h,K.val)==-1&&h.push(K.val)}return h},getStateAfter:function(i,a){var h=this.doc;return i=il(h,i??h.first+h.size-1),Nt(this,i+1,a).state},cursorCoords:function(i,a){var h,g=this.doc.sel.primary();return i==null?h=g.head:typeof i=="object"?h=gt(this.doc,i):h=i?g.from():g.to(),_n(this,h,a||"page")},charCoords:function(i,a){return dl(this,gt(this.doc,i),a||"page")},coordsChar:function(i,a){return i=Cc(this,i,a||"page"),hl(this,i.left,i.top)},lineAtHeight:function(i,a){return i=Cc(this,{top:i,left:0},a||"page").top,$(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,a,h){var g=!1,b;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,g=!0),b=Je(this.doc,i)}else b=i;return cl(this,b,{top:0,left:0},a||"page",h||g).top+(g?this.doc.height-Sn(b):0)},defaultTextHeight:function(){return Si(this.display)},defaultCharWidth:function(){return ms(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,a,h,g,b){var w=this.display;i=_n(this,gt(this.doc,i));var C=i.bottom,z=i.left;if(a.style.position="absolute",a.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(a),w.sizer.appendChild(a),g=="over")C=i.top;else if(g=="above"||g=="near"){var K=Math.max(w.wrapper.clientHeight,this.doc.height),ie=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(g=="above"||i.bottom+a.offsetHeight>K)&&i.top>a.offsetHeight?C=i.top-a.offsetHeight:i.bottom+a.offsetHeight<=K&&(C=i.bottom),z+a.offsetWidth>ie&&(z=ie-a.offsetWidth)}a.style.top=C+"px",a.style.left=a.style.right="",b=="right"?(z=w.sizer.clientWidth-a.offsetWidth,a.style.right="0px"):(b=="left"?z=0:b=="middle"&&(z=(w.sizer.clientWidth-a.offsetWidth)/2),a.style.left=z+"px"),h&&wo(this,{left:z,top:C,right:z+a.offsetWidth,bottom:C+a.offsetHeight})},triggerOnKeyDown:Cn(Pu),triggerOnKeyPress:Cn(zo),triggerOnKeyUp:Au,triggerOnMouseDown:Cn(Wo),execCommand:function(i){if(Ua.hasOwnProperty(i))return Ua[i].call(null,this)},triggerElectric:Cn(function(i){Ml(this,i)}),findPosH:function(i,a,h,g){var b=1;a<0&&(b=-1,a=-a);for(var w=gt(this.doc,i),C=0;C<a&&(w=Hu(this.doc,w,b,h,g),!w.hitSide);++C);return w},moveH:Cn(function(i,a){var h=this;this.extendSelectionsBy(function(g){return h.display.shift||h.doc.extend||g.empty()?Hu(h.doc,g.head,i,a,h.options.rtlMoveVisually):i<0?g.from():g.to()},tt)}),deleteH:Cn(function(i,a){var h=this.doc.sel,g=this.doc;h.somethingSelected()?g.replaceSelection("",null,"+delete"):ia(this,function(b){var w=Hu(g,b.head,i,a,!1);return i<0?{from:w,to:b.head}:{from:b.head,to:w}})}),findPosV:function(i,a,h,g){var b=1,w=g;a<0&&(b=-1,a=-a);for(var C=gt(this.doc,i),z=0;z<a;++z){var K=_n(this,C,"div");if(w==null?w=K.left:K.left=w,C=Bu(this,K,b,h),C.hitSide)break}return C},moveV:Cn(function(i,a){var h=this,g=this.doc,b=[],w=!this.display.shift&&!g.extend&&g.sel.somethingSelected();if(g.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var K=_n(h,z.head,"div");z.goalColumn!=null&&(K.left=z.goalColumn),b.push(K.left);var ie=Bu(h,K,i,a);return a=="page"&&z==g.sel.primary()&&vs(h,dl(h,ie,"div").top-K.top),ie},tt),b.length)for(var C=0;C<g.sel.ranges.length;C++)g.sel.ranges[C].goalColumn=b[C]}),findWordAt:function(i){var a=this.doc,h=Je(a,i.line).text,g=i.ch,b=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||b==h.length)&&g?--g:++b;for(var C=h.charAt(g),z=at(C,w)?function(K){return at(K,w)}:/\s/.test(C)?function(K){return/\s/.test(K)}:function(K){return!/\s/.test(K)&&!at(K)};g>0&&z(h.charAt(g-1));)--g;for(;b<h.length&&z(h.charAt(b));)++b}return new At(pe(i.line,g),pe(i.line,b))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?q(this.display.cursorDiv,"CodeMirror-overwrite"):Ie(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==P(ze(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Cn(function(i,a){ko(this,i,a)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-oi(this)-this.display.barHeight,width:i.scrollWidth-oi(this)-this.display.barWidth,clientHeight:fs(this),clientWidth:hs(this)}},scrollIntoView:Cn(function(i,a){i==null?(i={from:this.doc.sel.primary().head,to:null},a==null&&(a=this.options.cursorScrollMargin)):typeof i=="number"?i={from:pe(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=a||0,i.from.line!=null?ap(this,i):_o(this,i.from,i.to,i.margin)}),setSize:Cn(function(i,a){var h=this,g=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=g(i)),a!=null&&(this.display.wrapper.style.height=g(a)),this.options.lineWrapping&&ou(this);var b=this.display.viewFrom;this.doc.iter(b,this.display.viewTo,function(w){if(w.widgets){for(var C=0;C<w.widgets.length;C++)if(w.widgets[C].noHScroll){Gi(h,b,"widget");break}}++b}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Ln(this,i)},startOperation:function(){return ws(this)},endOperation:function(){return Vr(this)},refresh:Cn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,wa(this),ko(this,this.doc.scrollLeft,this.doc.scrollTop),ar(this.display),(i==null||Math.abs(i-Si(this.display))>.5||this.options.lineWrapping)&&yo(this),It(this,"refresh",this)}),swapDoc:Cn(function(i){var a=this.doc;return a.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),wa(this),this.display.input.reset(),ko(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Mn(this,"swapDoc",this,a),a}),phrase:function(i){var a=this.options.phrases;return a&&Object.prototype.hasOwnProperty.call(a,i)?a[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Nn(e),e.registerHelper=function(i,a,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][a]=h},e.registerGlobalHelper=function(i,a,h,g){e.registerHelper(i,a,g),s[i]._global.push({pred:h,val:g})}}function Hu(e,n,s,i,a){var h=n,g=s,b=Je(e,n.line),w=a&&e.direction=="rtl"?-s:s;function C(){var Fe=n.line+w;return Fe<e.first||Fe>=e.first+e.size?!1:(n=new pe(Fe,n.ch,n.sticky),b=Je(e,Fe))}function z(Fe){var Me;if(i=="codepoint"){var Ge=b.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))Me=null;else{var ot=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;Me=new pe(n.line,Math.max(0,Math.min(b.text.length,n.ch+s*(ot?2:1))),-s)}}else a?Me=Tu(e.cm,b,n,s):Me=Ba(b,n,s);if(Me==null)if(!Fe&&C())n=Rl(a,e.cm,b,n.line,w);else return!1;else n=Me;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var K=null,ie=i=="group",te=e.cm&&e.cm.getHelper(n,"wordChars"),ye=!0;!(s<0&&!z(!ye));ye=!1){var ke=b.text.charAt(n.ch)||`
`,Pe=at(ke,te)?"w":ie&&ke==`
`?"n":!ie||/\s/.test(ke)?null:"p";if(ie&&!ye&&!Pe&&(Pe="s"),K&&K!=Pe){s<0&&(s=1,z(),n.sticky="after");break}if(Pe&&(K=Pe),s>0&&!z(!ye))break}var Ne=Ro(e,n,h,g,!0);return jt(h,Ne)&&(Ne.hitSide=!0),Ne}function Bu(e,n,s,i){var a=e.doc,h=n.left,g;if(i=="page"){var b=Math.min(e.display.wrapper.clientHeight,Oe(e).innerHeight||a(e).documentElement.clientHeight),w=Math.max(b-.5*Si(e.display),3);g=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(g=s>0?n.bottom+3:n.top-3);for(var C;C=hl(e,h,g),!!C.outside;){if(s<0?g<=0:g>=a.height){C.hitSide=!0;break}g+=s*5}return C}var Dt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new et,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Dt.prototype.init=function(e){var n=this,s=this,i=s.cm,a=s.div=e.lineDiv;a.contentEditable=!0,Fl(a,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(b){for(var w=b.target;w;w=w.parentNode){if(w==a)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}rt(a,"paste",function(b){!h(b)||qt(i,b)||Wu(b,i)||T<=11&&setTimeout(pn(i,function(){return n.updateFromDOM()}),20)}),rt(a,"compositionstart",function(b){n.composing={data:b.data,done:!1}}),rt(a,"compositionupdate",function(b){n.composing||(n.composing={data:b.data,done:!1})}),rt(a,"compositionend",function(b){n.composing&&(b.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(a,"touchstart",function(){return s.forceCompositionEnd()}),rt(a,"input",function(){n.composing||n.readFromDOMSoon()});function g(b){if(!(!h(b)||qt(i,b))){if(i.somethingSelected())Ka({lineWise:!1,text:i.getSelections()}),b.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=zl(i);Ka({lineWise:!0,text:w.text}),b.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,Ct),i.replaceSelection("",null,"cut")})}else return;if(b.clipboardData){b.clipboardData.clearData();var C=Zr.text.join(`
`);if(b.clipboardData.setData("Text",C),b.clipboardData.getData("Text")==C){b.preventDefault();return}}var z=Wl(),K=z.firstChild;Fl(K),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),K.value=Zr.text.join(`
`);var ie=P(qe(a));Z(K),setTimeout(function(){i.display.lineSpace.removeChild(z),ie.focus(),ie==a&&s.showPrimarySelection()},50)}}rt(a,"copy",g),rt(a,"cut",g)},Dt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Dt.prototype.prepareSelection=function(){var e=ml(this.cm,!1);return e.focus=P(qe(this.div))==this.div,e},Dt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Dt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Dt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),a=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||a.line<n.display.viewFrom){e.removeAllRanges();return}var h=Ho(n,e.anchorNode,e.anchorOffset),g=Ho(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&g&&!g.bad&&He(Kr(h,g),i)==0&&He(kn(h,g),a)==0)){var b=n.display.view,w=i.line>=n.display.viewFrom&&Uu(n,i)||{node:b[0].measure.map[2],offset:0},C=a.line<n.display.viewTo&&Uu(n,a);if(!C){var z=b[b.length-1].measure,K=z.maps?z.maps[z.maps.length-1]:z.map;C={node:K[K.length-1],offset:K[K.length-2]-K[K.length-3]}}if(!w||!C){e.removeAllRanges();return}var ie=e.rangeCount&&e.getRangeAt(0),te;try{te=B(w.node,w.offset,C.offset,C.node)}catch{}te&&(!y&&n.state.focused?(e.collapse(w.node,w.offset),te.collapsed||(e.removeAllRanges(),e.addRange(te))):(e.removeAllRanges(),e.addRange(te)),ie&&e.anchorNode==null?e.addRange(ie):y&&this.startGracePeriod()),this.rememberSelection()}},Dt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Dt.prototype.showMultipleSelections=function(e){fe(this.cm.display.cursorDiv,e.cursors),fe(this.cm.display.selectionDiv,e.selection)},Dt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Dt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return _(this.div,n)},Dt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||P(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Dt.prototype.blur=function(){this.div.blur()},Dt.prototype.getField=function(){return this.div},Dt.prototype.supportsTouch=function(){return!0},Dt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Ln(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Dt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Dt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(U&&L&&this.cm.display.gutterSpecs.length&&Bl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Ho(n,e.anchorNode,e.anchorOffset),i=Ho(n,e.focusNode,e.focusOffset);s&&i&&Ln(n,function(){Wn(n.doc,zn(s,i),Ct),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Dt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),a=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=pe(i.line-1,Je(e.doc,i.line-1).length)),a.ch==Je(e.doc,a.line).text.length&&a.line<e.lastLine()&&(a=pe(a.line+1,0)),i.line<n.viewFrom||a.line>n.viewTo-1)return!1;var h,g,b;i.line==n.viewFrom||(h=_i(e,i.line))==0?(g=N(n.view[0].line),b=n.view[0].node):(g=N(n.view[h].line),b=n.view[h-1].node.nextSibling);var w=_i(e,a.line),C,z;if(w==n.view.length-1?(C=n.viewTo-1,z=n.lineDiv.lastChild):(C=N(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!b)return!1;for(var K=e.doc.splitLines(pp(e,b,z,g,C)),ie=si(e.doc,pe(g,0),pe(C,Je(e.doc,C).text.length));K.length>1&&ie.length>1;)if(Qe(K)==Qe(ie))K.pop(),ie.pop(),C--;else if(K[0]==ie[0])K.shift(),ie.shift(),g++;else break;for(var te=0,ye=0,ke=K[0],Pe=ie[0],Ne=Math.min(ke.length,Pe.length);te<Ne&&ke.charCodeAt(te)==Pe.charCodeAt(te);)++te;for(var Fe=Qe(K),Me=Qe(ie),Ge=Math.min(Fe.length-(K.length==1?te:0),Me.length-(ie.length==1?te:0));ye<Ge&&Fe.charCodeAt(Fe.length-ye-1)==Me.charCodeAt(Me.length-ye-1);)++ye;if(K.length==1&&ie.length==1&&g==i.line)for(;te&&te>i.ch&&Fe.charCodeAt(Fe.length-ye-1)==Me.charCodeAt(Me.length-ye-1);)te--,ye++;K[K.length-1]=Fe.slice(0,Fe.length-ye).replace(/^\u200b+/,""),K[0]=K[0].slice(te).replace(/\u200b+$/,"");var ot=pe(g,te),Ve=pe(C,ie.length?Qe(ie).length-ye:0);if(K.length>1||K[0]||He(ot,Ve))return Qs(e.doc,K,ot,Ve,"+input"),!0},Dt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Dt.prototype.reset=function(){this.forceCompositionEnd()},Dt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Dt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Dt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Ln(this.cm,function(){return sr(e.cm)})},Dt.prototype.setUneditable=function(e){e.contentEditable="false"},Dt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||pn(this.cm,Dl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Dt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Dt.prototype.onContextMenu=function(){},Dt.prototype.resetPosition=function(){},Dt.prototype.needsContentAttribute=!0;function Uu(e,n){var s=ll(e,n.line);if(!s||s.hidden)return null;var i=Je(e.doc,n.line),a=wc(s,i,n.line),h=bt(i,e.doc.direction),g="left";if(h){var b=Ur(h,n.ch);g=b%2?"right":"left"}var w=mo(a.map,n.ch,g);return w.offset=w.collapse=="right"?w.end:w.start,w}function Bl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Ar(e,n){return n&&(e.bad=!0),e}function pp(e,n,s,i,a){var h="",g=!1,b=e.doc.lineSeparator(),w=!1;function C(te){return function(ye){return ye.id==te}}function z(){g&&(h+=b,w&&(h+=b),g=w=!1)}function K(te){te&&(z(),h+=te)}function ie(te){if(te.nodeType==1){var ye=te.getAttribute("cm-text");if(ye){K(ye);return}var ke=te.getAttribute("cm-marker"),Pe;if(ke){var Ne=e.findMarks(pe(i,0),pe(a+1,0),C(+ke));Ne.length&&(Pe=Ne[0].find(0))&&K(si(e.doc,Pe.from,Pe.to).join(b));return}if(te.getAttribute("contenteditable")=="false")return;var Fe=/^(pre|div|p|li|table|br)$/i.test(te.nodeName);if(!/^br$/i.test(te.nodeName)&&te.textContent.length==0)return;Fe&&z();for(var Me=0;Me<te.childNodes.length;Me++)ie(te.childNodes[Me]);/^(pre|p)$/i.test(te.nodeName)&&(w=!0),Fe&&(g=!0)}else te.nodeType==3&&K(te.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;ie(n),n!=s;)n=n.nextSibling,w=!1;return h}function Ho(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Ar(e.clipPos(pe(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var a=0;a<e.display.view.length;a++){var h=e.display.view[a];if(h.node==i)return qu(h,n,s)}}function qu(e,n,s){var i=e.text.firstChild,a=!1;if(!n||!_(i,n))return Ar(pe(N(e.line),0),!0);if(n==i&&(a=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Qe(e.rest):e.line;return Ar(pe(N(h),h.text.length),a)}var g=n.nodeType==3?n:null,b=n;for(!g&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(g=n.firstChild,s&&(s=g.nodeValue.length));b.parentNode!=i;)b=b.parentNode;var w=e.measure,C=w.maps;function z(Pe,Ne,Fe){for(var Me=-1;Me<(C?C.length:0);Me++)for(var Ge=Me<0?w.map:C[Me],ot=0;ot<Ge.length;ot+=3){var Ve=Ge[ot+2];if(Ve==Pe||Ve==Ne){var St=N(Me<0?e.line:e.rest[Me]),Et=Ge[ot]+Fe;return(Fe<0||Ve!=Pe)&&(Et=Ge[ot+(Fe?1:0)]),pe(St,Et)}}}var K=z(g,b,s);if(K)return Ar(K,a);for(var ie=b.nextSibling,te=g?g.nodeValue.length-s:0;ie;ie=ie.nextSibling){if(K=z(ie,ie.firstChild,0),K)return Ar(pe(K.line,K.ch-te),a);te+=ie.textContent.length}for(var ye=b.previousSibling,ke=s;ye;ye=ye.previousSibling){if(K=z(ye,ye.firstChild,-1),K)return Ar(pe(K.line,K.ch+ke),a);ke+=ye.textContent.length}}var fn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new et,this.hasSelection=!1,this.composing=null,this.resetting=!1};fn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var a=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),F&&(a.style.width="0px"),rt(a,"input",function(){k&&T>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(a,"paste",function(g){qt(i,g)||Wu(g,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(g){if(!qt(i,g)){if(i.somethingSelected())Ka({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var b=zl(i);Ka({lineWise:!0,text:b.text}),g.type=="cut"?i.setSelections(b.ranges,null,Ct):(s.prevInput="",a.value=b.text.join(`
`),Z(a))}else return;g.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(a,"cut",h),rt(a,"copy",h),rt(e.scroller,"paste",function(g){if(!($i(e,g)||qt(i,g))){if(!a.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var b=new Event("paste");b.clipboardData=g.clipboardData,a.dispatchEvent(b)}}),rt(e.lineSpace,"selectstart",function(g){$i(e,g)||bn(g)}),rt(a,"compositionstart",function(){var g=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:g,range:i.markText(g,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(a,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},fn.prototype.createField=function(e){this.wrapper=Wl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Fl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},fn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},fn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=ml(e);if(e.options.moveInputWithCursor){var a=_n(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),g=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,a.top+g.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,a.left+g.left-h.left))}return i},fn.prototype.showSelection=function(e){var n=this.cm,s=n.display;fe(s.cursorDiv,e.cursors),fe(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},fn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Z(this.textarea),k&&T>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",k&&T>=9&&(this.hasSelection=null));this.resetting=!1}},fn.prototype.getField=function(){return this.textarea},fn.prototype.supportsTouch=function(){return!1},fn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!W||P(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},fn.prototype.blur=function(){this.textarea.blur()},fn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},fn.prototype.receivedFocus=function(){this.slowPoll()},fn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},fn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||gi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var a=s.value;if(a==i&&!n.somethingSelected())return!1;if(k&&T>=9&&this.hasSelection===a||J&&/[\uf700-\uf7ff]/.test(a))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=a.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var g=0,b=Math.min(i.length,a.length);g<b&&i.charCodeAt(g)==a.charCodeAt(g);)++g;return Ln(n,function(){Dl(n,a.slice(g),i.length-g,null,e.composing?"*compose":null),a.length>1e3||a.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=a,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},fn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},fn.prototype.onKeyPress=function(){k&&T>=9&&(this.hasSelection=null),this.fastPoll()},fn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,a=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=gs(s,e),g=i.scroller.scrollTop;if(!h||O)return;var b=s.options.resetSelectionOnContextMenu;b&&s.doc.sel.contains(h)==-1&&pn(s,Wn)(s.doc,zn(h),Ct);var w=a.style.cssText,C=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",a.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(k?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var K;E&&(K=a.ownerDocument.defaultView.scrollY),i.input.focus(),E&&a.ownerDocument.defaultView.scrollTo(null,K),i.input.reset(),s.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=te,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function ie(){if(a.selectionStart!=null){var ke=s.somethingSelected(),Pe="​"+(ke?a.value:"");a.value="⇚",a.value=Pe,n.prevInput=ke?"":"​",a.selectionStart=1,a.selectionEnd=Pe.length,i.selForContextMenu=s.doc.sel}}function te(){if(n.contextMenuPending==te&&(n.contextMenuPending=!1,n.wrapper.style.cssText=C,a.style.cssText=w,k&&T<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=g),a.selectionStart!=null)){(!k||k&&T<9)&&ie();var ke=0,Pe=function(){i.selForContextMenu==s.doc.sel&&a.selectionStart==0&&a.selectionEnd>0&&n.prevInput=="​"?pn(s,Zi)(s):ke++<10?i.detectingSelectAll=setTimeout(Pe,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Pe,200)}}if(k&&T>=9&&ie(),ve){pr(e);var ye=function(){tn(window,"mouseup",ye),setTimeout(te,20)};rt(window,"mouseup",ye)}else setTimeout(te,50)},fn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},fn.prototype.setUneditable=function(){},fn.prototype.needsContentAttribute=!1;function Qc(e,n){if(n=n?Be(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=P(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=b.getValue()}var a;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;a=h.submit;try{var g=h.submit=function(){i(),h.submit=a,h.submit(),h.submit=g}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=a))}},e.style.display="none";var b=en(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return b}function Bo(e){e.off=tn,e.on=rt,e.wheelEventPixels=Ss,e.Doc=Ot,e.splitLines=jr,e.countColumn=$e,e.findColumn=Ue,e.isWordChar=Ye,e.Pass=Yt,e.signal=It,e.Line=wi,e.changeEnd=Fn,e.scrollbarModel=Lc,e.Pos=pe,e.cmpPos=He,e.modes=Mi,e.mimeModes=Dr,e.resolveMode=zi,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=us,e.copyState=Rt,e.startState=ii,e.innerMode=Fi,e.commands=Ua,e.keyMap=Ai,e.keyName=Cu,e.isModifierKey=Su,e.lookupKey=ra,e.normalizeKeyMap=Mc,e.StringStream=Vt,e.SharedTextMarker=ea,e.TextMarker=hi,e.LineWidget=Li,e.e_preventDefault=bn,e.e_stopPropagation=ri,e.e_stop=pr,e.addClass=q,e.contains=_,e.rmClass=Ie,e.keyNames=Qr}vr(en),Hl(en);var or="iter insert remove copy getEditor constructor".split(" ");for(var Ul in Ot.prototype)Ot.prototype.hasOwnProperty(Ul)&&Ke(or,Ul)<0&&(en.prototype[Ul]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Ot.prototype[Ul]));return Nn(Ot),en.inputStyles={textarea:fn,contenteditable:Dt},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Kn.apply(this,arguments)},en.defineMIME=yi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){Ot.prototype[e]=n},en.fromTextArea=Qc,Bo(en),en.version="5.65.21",en}))})(wd)),wd.exports}var nb=ss();const _f=Zf(nb);var Cf={exports:{}},Tf;function rb(){return Tf||(Tf=1,(function(l,u){(function(d){d(ss())})(function(d){function m(T){return new RegExp("^(("+T.join(")|(")+"))\\b")}var y=m(["and","or","not","is"]),v=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],S=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",v.concat(S).concat(["exec","print"]));function j(T){return T.scopes[T.scopes.length-1]}d.defineMode("python",function(T,E){for(var H="error",L=E.delimiters||E.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,G=[E.singleOperators,E.doubleOperators,E.doubleDelimiters,E.tripleDelimiters,E.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],O=0;O<G.length;O++)G[O]||G.splice(O--,1);var V=E.hangingIndent||T.indentUnit,X=v,M=S;E.extra_keywords!=null&&(X=X.concat(E.extra_keywords)),E.extra_builtins!=null&&(M=M.concat(E.extra_builtins));var F=!(E.version&&Number(E.version)<3);if(F){var U=E.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;X=X.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),M=M.concat(["ascii","bytes","exec","print"]);var W=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var U=E.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;X=X.concat(["exec","print"]),M=M.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var W=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var J=m(X),ce=m(M);function oe(Q,B){var _=Q.sol()&&B.lastToken!="\\";if(_&&(B.indent=Q.indentation()),_&&j(B).type=="py"){var P=j(B).offset;if(Q.eatSpace()){var q=Q.indentation();return q>P?se(B):q<P&&le(Q,B)&&Q.peek()!="#"&&(B.errorToken=!0),null}else{var D=be(Q,B);return P>0&&le(Q,B)&&(D+=" "+H),D}}return be(Q,B)}function be(Q,B,_){if(Q.eatSpace())return null;if(!_&&Q.match(/^#.*/))return"comment";if(Q.match(/^[0-9\.]/,!1)){var P=!1;if(Q.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(P=!0),Q.match(/^[\d_]+\.\d*/)&&(P=!0),Q.match(/^\.\d+/)&&(P=!0),P)return Q.eat(/J/i),"number";var q=!1;if(Q.match(/^0x[0-9a-f_]+/i)&&(q=!0),Q.match(/^0b[01_]+/i)&&(q=!0),Q.match(/^0o[0-7_]+/i)&&(q=!0),Q.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Q.eat(/J/i),q=!0),Q.match(/^0(?![\dx])/i)&&(q=!0),q)return Q.eat(/L/i),"number"}if(Q.match(W)){var D=Q.current().toLowerCase().indexOf("f")!==-1;return D?(B.tokenize=Re(Q.current(),B.tokenize),B.tokenize(Q,B)):(B.tokenize=ve(Q.current(),B.tokenize),B.tokenize(Q,B))}for(var Z=0;Z<G.length;Z++)if(Q.match(G[Z]))return"operator";return Q.match(L)?"punctuation":B.lastToken=="."&&Q.match(U)?"property":Q.match(J)||Q.match(y)?"keyword":Q.match(ce)?"builtin":Q.match(/^(self|cls)\b/)?"variable-2":Q.match(U)?B.lastToken=="def"||B.lastToken=="class"?"def":"variable":(Q.next(),_?null:H)}function Re(Q,B){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var _=Q.length==1,P="string";function q(Z){return function(Ce,ze){var qe=be(Ce,ze,!0);return qe=="punctuation"&&(Ce.current()=="{"?ze.tokenize=q(Z+1):Ce.current()=="}"&&(Z>1?ze.tokenize=q(Z-1):ze.tokenize=D)),qe}}function D(Z,Ce){for(;!Z.eol();)if(Z.eatWhile(/[^'"\{\}\\]/),Z.eat("\\")){if(Z.next(),_&&Z.eol())return P}else{if(Z.match(Q))return Ce.tokenize=B,P;if(Z.match("{{"))return P;if(Z.match("{",!1))return Ce.tokenize=q(0),Z.current()?P:Ce.tokenize(Z,Ce);if(Z.match("}}"))return P;if(Z.match("}"))return H;Z.eat(/['"]/)}if(_){if(E.singleLineStringErrors)return H;Ce.tokenize=B}return P}return D.isString=!0,D}function ve(Q,B){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var _=Q.length==1,P="string";function q(D,Z){for(;!D.eol();)if(D.eatWhile(/[^'"\\]/),D.eat("\\")){if(D.next(),_&&D.eol())return P}else{if(D.match(Q))return Z.tokenize=B,P;D.eat(/['"]/)}if(_){if(E.singleLineStringErrors)return H;Z.tokenize=B}return P}return q.isString=!0,q}function se(Q){for(;j(Q).type!="py";)Q.scopes.pop();Q.scopes.push({offset:j(Q).offset+T.indentUnit,type:"py",align:null})}function Ie(Q,B,_){var P=Q.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Q.column()+1;B.scopes.push({offset:B.indent+V,type:_,align:P})}function le(Q,B){for(var _=Q.indentation();B.scopes.length>1&&j(B).offset>_;){if(j(B).type!="py")return!0;B.scopes.pop()}return j(B).offset!=_}function fe(Q,B){Q.sol()&&(B.beginningOfLine=!0,B.dedent=!1);var _=B.tokenize(Q,B),P=Q.current();if(B.beginningOfLine&&P=="@")return Q.match(U,!1)?"meta":F?"operator":H;if(/\S/.test(P)&&(B.beginningOfLine=!1),(_=="variable"||_=="builtin")&&B.lastToken=="meta"&&(_="meta"),(P=="pass"||P=="return")&&(B.dedent=!0),P=="lambda"&&(B.lambda=!0),P==":"&&!B.lambda&&j(B).type=="py"&&Q.match(/^\s*(?:#|$)/,!1)&&se(B),P.length==1&&!/string|comment/.test(_)){var q="[({".indexOf(P);if(q!=-1&&Ie(Q,B,"])}".slice(q,q+1)),q="])}".indexOf(P),q!=-1)if(j(B).type==P)B.indent=B.scopes.pop().offset-V;else return H}return B.dedent&&Q.eol()&&j(B).type=="py"&&B.scopes.length>1&&B.scopes.pop(),_}var A={startState:function(Q){return{tokenize:oe,scopes:[{offset:Q||0,type:"py",align:null}],indent:Q||0,lastToken:null,lambda:!1,dedent:0}},token:function(Q,B){var _=B.errorToken;_&&(B.errorToken=!1);var P=fe(Q,B);return P&&P!="comment"&&(B.lastToken=P=="keyword"||P=="punctuation"?Q.current():P),P=="punctuation"&&(P=null),Q.eol()&&B.lambda&&(B.lambda=!1),_?P+" "+H:P},indent:function(Q,B){if(Q.tokenize!=oe)return Q.tokenize.isString?d.Pass:0;var _=j(Q),P=_.type==B.charAt(0)||_.type=="py"&&!Q.dedent&&/^(else:|elif |except |finally:)/.test(B);return _.align!=null?_.align-(P?1:0):_.offset-(P?V:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return A}),d.defineMIME("text/x-python","python");var k=function(T){return T.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:k("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Cf.exports}rb();var jf={exports:{}},Nf;function Lm(){return Nf||(Nf=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("javascript",function(m,y){var v=m.indentUnit,S=y.statementIndent,j=y.jsonld,k=y.json||j,T=y.trackScope!==!1,E=y.typescript,H=y.wordCharacters||/[\w$\xa1-\uffff]/,L=(function(){function N(Qt){return{type:Qt,style:"keyword"}}var $=N("keyword a"),ge=N("keyword b"),je=N("keyword c"),pe=N("keyword d"),He=N("operator"),jt={type:"atom",style:"atom"};return{if:N("if"),while:$,with:$,else:ge,do:ge,try:ge,finally:ge,return:pe,break:pe,continue:pe,new:N("new"),delete:je,void:je,throw:je,debugger:N("debugger"),var:N("var"),const:N("var"),let:N("var"),function:N("function"),catch:N("catch"),for:N("for"),switch:N("switch"),case:N("case"),default:N("default"),in:He,typeof:He,instanceof:He,true:jt,false:jt,null:jt,undefined:jt,NaN:jt,Infinity:jt,this:N("this"),class:N("class"),super:N("atom"),yield:je,export:N("export"),import:N("import"),extends:je,await:je}})(),G=/[+\-*&%=<>!?|~^@]/,O=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function V(N){for(var $=!1,ge,je=!1;(ge=N.next())!=null;){if(!$){if(ge=="/"&&!je)return;ge=="["?je=!0:je&&ge=="]"&&(je=!1)}$=!$&&ge=="\\"}}var X,M;function F(N,$,ge){return X=N,M=ge,$}function U(N,$){var ge=N.next();if(ge=='"'||ge=="'")return $.tokenize=W(ge),$.tokenize(N,$);if(ge=="."&&N.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return F("number","number");if(ge=="."&&N.match(".."))return F("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(ge))return F(ge);if(ge=="="&&N.eat(">"))return F("=>","operator");if(ge=="0"&&N.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return F("number","number");if(/\d/.test(ge))return N.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),F("number","number");if(ge=="/")return N.eat("*")?($.tokenize=J,J(N,$)):N.eat("/")?(N.skipToEnd(),F("comment","comment")):Gn(N,$,1)?(V(N),N.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),F("regexp","string-2")):(N.eat("="),F("operator","operator",N.current()));if(ge=="`")return $.tokenize=ce,ce(N,$);if(ge=="#"&&N.peek()=="!")return N.skipToEnd(),F("meta","meta");if(ge=="#"&&N.eatWhile(H))return F("variable","property");if(ge=="<"&&N.match("!--")||ge=="-"&&N.match("->")&&!/\S/.test(N.string.slice(0,N.start)))return N.skipToEnd(),F("comment","comment");if(G.test(ge))return(ge!=">"||!$.lexical||$.lexical.type!=">")&&(N.eat("=")?(ge=="!"||ge=="=")&&N.eat("="):/[<>*+\-|&?]/.test(ge)&&(N.eat(ge),ge==">"&&N.eat(ge))),ge=="?"&&N.eat(".")?F("."):F("operator","operator",N.current());if(H.test(ge)){N.eatWhile(H);var je=N.current();if($.lastType!="."){if(L.propertyIsEnumerable(je)){var pe=L[je];return F(pe.type,pe.style,je)}if(je=="async"&&N.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return F("async","keyword",je)}return F("variable","variable",je)}}function W(N){return function($,ge){var je=!1,pe;if(j&&$.peek()=="@"&&$.match(O))return ge.tokenize=U,F("jsonld-keyword","meta");for(;(pe=$.next())!=null&&!(pe==N&&!je);)je=!je&&pe=="\\";return je||(ge.tokenize=U),F("string","string")}}function J(N,$){for(var ge=!1,je;je=N.next();){if(je=="/"&&ge){$.tokenize=U;break}ge=je=="*"}return F("comment","comment")}function ce(N,$){for(var ge=!1,je;(je=N.next())!=null;){if(!ge&&(je=="`"||je=="$"&&N.eat("{"))){$.tokenize=U;break}ge=!ge&&je=="\\"}return F("quasi","string-2",N.current())}var oe="([{}])";function be(N,$){$.fatArrowAt&&($.fatArrowAt=null);var ge=N.string.indexOf("=>",N.start);if(!(ge<0)){if(E){var je=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(N.string.slice(N.start,ge));je&&(ge=je.index)}for(var pe=0,He=!1,jt=ge-1;jt>=0;--jt){var Qt=N.string.charAt(jt),kn=oe.indexOf(Qt);if(kn>=0&&kn<3){if(!pe){++jt;break}if(--pe==0){Qt=="("&&(He=!0);break}}else if(kn>=3&&kn<6)++pe;else if(H.test(Qt))He=!0;else if(/["'\/`]/.test(Qt))for(;;--jt){if(jt==0)return;var Kr=N.string.charAt(jt-1);if(Kr==Qt&&N.string.charAt(jt-2)!="\\"){jt--;break}}else if(He&&!pe){++jt;break}}He&&!pe&&($.fatArrowAt=jt)}}var Re={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function ve(N,$,ge,je,pe,He){this.indented=N,this.column=$,this.type=ge,this.prev=pe,this.info=He,je!=null&&(this.align=je)}function se(N,$){if(!T)return!1;for(var ge=N.localVars;ge;ge=ge.next)if(ge.name==$)return!0;for(var je=N.context;je;je=je.prev)for(var ge=je.vars;ge;ge=ge.next)if(ge.name==$)return!0}function Ie(N,$,ge,je,pe){var He=N.cc;for(le.state=N,le.stream=pe,le.marked=null,le.cc=He,le.style=$,N.lexical.hasOwnProperty("align")||(N.lexical.align=!0);;){var jt=He.length?He.pop():k?Ke:$e;if(jt(ge,je)){for(;He.length&&He[He.length-1].lex;)He.pop()();return le.marked?le.marked:ge=="variable"&&se(N,je)?"variable-2":$}}}var le={state:null,marked:null,cc:null};function fe(){for(var N=arguments.length-1;N>=0;N--)le.cc.push(arguments[N])}function A(){return fe.apply(null,arguments),!0}function Q(N,$){for(var ge=$;ge;ge=ge.next)if(ge.name==N)return!0;return!1}function B(N){var $=le.state;if(le.marked="def",!!T){if($.context){if($.lexical.info=="var"&&$.context&&$.context.block){var ge=_(N,$.context);if(ge!=null){$.context=ge;return}}else if(!Q(N,$.localVars)){$.localVars=new D(N,$.localVars);return}}y.globalVars&&!Q(N,$.globalVars)&&($.globalVars=new D(N,$.globalVars))}}function _(N,$){if($)if($.block){var ge=_(N,$.prev);return ge?ge==$.prev?$:new q(ge,$.vars,!0):null}else return Q(N,$.vars)?$:new q($.prev,new D(N,$.vars),!1);else return null}function P(N){return N=="public"||N=="private"||N=="protected"||N=="abstract"||N=="readonly"}function q(N,$,ge){this.prev=N,this.vars=$,this.block=ge}function D(N,$){this.name=N,this.next=$}var Z=new D("this",new D("arguments",null));function Ce(){le.state.context=new q(le.state.context,le.state.localVars,!1),le.state.localVars=Z}function ze(){le.state.context=new q(le.state.context,le.state.localVars,!0),le.state.localVars=null}Ce.lex=ze.lex=!0;function qe(){le.state.localVars=le.state.context.vars,le.state.context=le.state.context.prev}qe.lex=!0;function Oe(N,$){var ge=function(){var je=le.state,pe=je.indented;if(je.lexical.type=="stat")pe=je.lexical.indented;else for(var He=je.lexical;He&&He.type==")"&&He.align;He=He.prev)pe=He.indented;je.lexical=new ve(pe,le.stream.column(),N,null,je.lexical,$)};return ge.lex=!0,ge}function Se(){var N=le.state;N.lexical.prev&&(N.lexical.type==")"&&(N.indented=N.lexical.indented),N.lexical=N.lexical.prev)}Se.lex=!0;function Be(N){function $(ge){return ge==N?A():N==";"||ge=="}"||ge==")"||ge=="]"?fe():A($)}return $}function $e(N,$){return N=="var"?A(Oe("vardef",$),ri,Be(";"),Se):N=="keyword a"?A(Oe("form"),Yt,$e,Se):N=="keyword b"?A(Oe("form"),$e,Se):N=="keyword d"?le.stream.match(/^\s*$/,!1)?A():A(Oe("stat"),xt,Be(";"),Se):N=="debugger"?A(Be(";")):N=="{"?A(Oe("}"),ze,nr,Se,qe):N==";"?A():N=="if"?(le.state.lexical.info=="else"&&le.state.cc[le.state.cc.length-1]==Se&&le.state.cc.pop()(),A(Oe("form"),Yt,$e,Se,wn)):N=="function"?A(jr):N=="for"?A(Oe("form"),ze,Tr,$e,qe,Se):N=="class"||E&&$=="interface"?(le.marked="keyword",A(Oe("form",N=="class"?N:$),Mi,Se)):N=="variable"?E&&$=="declare"?(le.marked="keyword",A($e)):E&&($=="module"||$=="enum"||$=="type")&&le.stream.match(/^\s*\w/,!1)?(le.marked="keyword",$=="enum"?A(Je):$=="type"?A(os,Be("operator"),bt,Be(";")):A(Oe("form"),In,Be("{"),Oe("}"),nr,Se,Se)):E&&$=="namespace"?(le.marked="keyword",A(Oe("form"),Ke,$e,Se)):E&&$=="abstract"?(le.marked="keyword",A($e)):A(Oe("stat"),kt):N=="switch"?A(Oe("form"),Yt,Be("{"),Oe("}","switch"),ze,nr,Se,Se,qe):N=="case"?A(Ke,Be(":")):N=="default"?A(Be(":")):N=="catch"?A(Oe("form"),Ce,et,$e,Se,qe):N=="export"?A(Oe("stat"),zi,Se):N=="import"?A(Oe("stat"),Mr,Se):N=="async"?A($e):$=="@"?A(Ke,$e):fe(Oe("stat"),Ke,Be(";"),Se)}function et(N){if(N=="(")return A(On,Be(")"))}function Ke(N,$){return Ct(N,$,!1)}function Ft(N,$){return Ct(N,$,!0)}function Yt(N){return N!="("?fe():A(Oe(")"),xt,Be(")"),Se)}function Ct(N,$,ge){if(le.state.fatArrowAt==le.stream.start){var je=ge?ut:Qe;if(N=="(")return A(Ce,Oe(")"),pt(On,")"),Se,Be("=>"),je,qe);if(N=="variable")return fe(Ce,In,Be("=>"),je,qe)}var pe=ge?Ue:tt;return Re.hasOwnProperty(N)?A(pe):N=="function"?A(jr,pe):N=="class"||E&&$=="interface"?(le.marked="keyword",A(Oe("form"),ls,Se)):N=="keyword c"||N=="async"?A(ge?Ft:Ke):N=="("?A(Oe(")"),xt,Be(")"),Se,pe):N=="operator"||N=="spread"?A(ge?Ft:Ke):N=="["?A(Oe("]"),Vt,Se,pe):N=="{"?Xt(at,"}",null,pe):N=="quasi"?fe(vt,pe):N=="new"?A(ae(ge)):A()}function xt(N){return N.match(/[;\}\)\],]/)?fe():fe(Ke)}function tt(N,$){return N==","?A(xt):Ue(N,$,!1)}function Ue(N,$,ge){var je=ge==!1?tt:Ue,pe=ge==!1?Ke:Ft;if(N=="=>")return A(Ce,ge?ut:Qe,qe);if(N=="operator")return/\+\+|--/.test($)||E&&$=="!"?A(je):E&&$=="<"&&le.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?A(Oe(">"),pt(bt,">"),Se,je):$=="?"?A(Ke,Be(":"),pe):A(pe);if(N=="quasi")return fe(vt,je);if(N!=";"){if(N=="(")return Xt(Ft,")","call",je);if(N==".")return A(Ye,je);if(N=="[")return A(Oe("]"),xt,Be("]"),Se,je);if(E&&$=="as")return le.marked="keyword",A(bt,je);if(N=="regexp")return le.state.lastType=le.marked="operator",le.stream.backUp(le.stream.pos-le.stream.start-1),A(pe)}}function vt(N,$){return N!="quasi"?fe():$.slice($.length-2)!="${"?A(vt):A(xt,yt)}function yt(N){if(N=="}")return le.marked="string-2",le.state.tokenize=ce,A(vt)}function Qe(N){return be(le.stream,le.state),fe(N=="{"?$e:Ke)}function ut(N){return be(le.stream,le.state),fe(N=="{"?$e:Ft)}function ae(N){return function($){return $=="."?A(N?he:Te):$=="variable"&&E?A(mn,N?Ue:tt):fe(N?Ft:Ke)}}function Te(N,$){if($=="target")return le.marked="keyword",A(tt)}function he(N,$){if($=="target")return le.marked="keyword",A(Ue)}function kt(N){return N==":"?A(Se,$e):fe(tt,Be(";"),Se)}function Ye(N){if(N=="variable")return le.marked="property",A()}function at(N,$){if(N=="async")return le.marked="property",A(at);if(N=="variable"||le.style=="keyword"){if(le.marked="property",$=="get"||$=="set")return A(Ze);var ge;return E&&le.state.fatArrowAt==le.stream.start&&(ge=le.stream.match(/^\s*:\s*/,!1))&&(le.state.fatArrowAt=le.stream.pos+ge[0].length),A(mt)}else{if(N=="number"||N=="string")return le.marked=j?"property":le.style+" property",A(mt);if(N=="jsonld-keyword")return A(mt);if(E&&P($))return le.marked="keyword",A(at);if(N=="[")return A(Ke,_r,Be("]"),mt);if(N=="spread")return A(Ft,mt);if($=="*")return le.marked="keyword",A(at);if(N==":")return fe(mt)}}function Ze(N){return N!="variable"?fe(mt):(le.marked="property",A(jr))}function mt(N){if(N==":")return A(Ft);if(N=="(")return fe(jr)}function pt(N,$,ge){function je(pe,He){if(ge?ge.indexOf(pe)>-1:pe==","){var jt=le.state.lexical;return jt.info=="call"&&(jt.pos=(jt.pos||0)+1),A(function(Qt,kn){return Qt==$||kn==$?fe():fe(N)},je)}return pe==$||He==$?A():ge&&ge.indexOf(";")>-1?fe(N):A(Be($))}return function(pe,He){return pe==$||He==$?A():fe(N,je)}}function Xt(N,$,ge){for(var je=3;je<arguments.length;je++)le.cc.push(arguments[je]);return A(Oe($,ge),pt(N,$),Se)}function nr(N){return N=="}"?A():fe($e,nr)}function _r(N,$){if(E){if(N==":")return A(bt);if($=="?")return A(_r)}}function Ir(N,$){if(E&&(N==":"||$=="in"))return A(bt)}function Ur(N){if(E&&N==":")return le.stream.match(/^\s*\w+\s+is\b/,!1)?A(Ke,qr,bt):A(bt)}function qr(N,$){if($=="is")return le.marked="keyword",A()}function bt(N,$){if($=="keyof"||$=="typeof"||$=="infer"||$=="readonly")return le.marked="keyword",A($=="typeof"?Ft:bt);if(N=="variable"||$=="void")return le.marked="type",A(xn);if($=="|"||$=="&")return A(bt);if(N=="string"||N=="number"||N=="atom")return A(xn);if(N=="[")return A(Oe("]"),pt(bt,"]",","),Se,xn);if(N=="{")return A(Oe("}"),rt,Se,xn);if(N=="(")return A(pt(qt,")"),fi,xn);if(N=="<")return A(pt(bt,">"),bt);if(N=="quasi")return fe(tn,xn)}function fi(N){if(N=="=>")return A(bt)}function rt(N){return N.match(/[\}\)\]]/)?A():N==","||N==";"?A(rt):fe(Cr,rt)}function Cr(N,$){if(N=="variable"||le.style=="keyword")return le.marked="property",A(Cr);if($=="?"||N=="number"||N=="string")return A(Cr);if(N==":")return A(bt);if(N=="[")return A(Be("variable"),Ir,Be("]"),Cr);if(N=="(")return fe(gi,Cr);if(!N.match(/[;\}\)\],]/))return A()}function tn(N,$){return N!="quasi"?fe():$.slice($.length-2)!="${"?A(tn):A(bt,It)}function It(N){if(N=="}")return le.marked="string-2",le.state.tokenize=ce,A(tn)}function qt(N,$){return N=="variable"&&le.stream.match(/^\s*[?:]/,!1)||$=="?"?A(qt):N==":"?A(bt):N=="spread"?A(qt):fe(bt)}function xn(N,$){if($=="<")return A(Oe(">"),pt(bt,">"),Se,xn);if($=="|"||N=="."||$=="&")return A(bt);if(N=="[")return A(bt,Be("]"),xn);if($=="extends"||$=="implements")return le.marked="keyword",A(bt);if($=="?")return A(bt,Be(":"),bt)}function mn(N,$){if($=="<")return A(Oe(">"),pt(bt,">"),Se,xn)}function Nn(){return fe(bt,bn)}function bn(N,$){if($=="=")return A(bt)}function ri(N,$){return $=="enum"?(le.marked="keyword",A(Je)):fe(In,_r,En,as)}function In(N,$){if(E&&P($))return le.marked="keyword",A(In);if(N=="variable")return B($),A();if(N=="spread")return A(In);if(N=="[")return Xt(mi,"]");if(N=="{")return Xt(pr,"}")}function pr(N,$){return N=="variable"&&!le.stream.match(/^\s*:/,!1)?(B($),A(En)):(N=="variable"&&(le.marked="property"),N=="spread"?A(In):N=="}"?fe():N=="["?A(Ke,Be("]"),Be(":"),pr):A(Be(":"),In,En))}function mi(){return fe(In,En)}function En(N,$){if($=="=")return A(Ft)}function as(N){if(N==",")return A(ri)}function wn(N,$){if(N=="keyword b"&&$=="else")return A(Oe("form","else"),$e,Se)}function Tr(N,$){if($=="await")return A(Tr);if(N=="(")return A(Oe(")"),$r,Se)}function $r(N){return N=="var"?A(ri,Or):N=="variable"?A(Or):fe(Or)}function Or(N,$){return N==")"?A():N==";"?A(Or):$=="in"||$=="of"?(le.marked="keyword",A(Ke,Or)):fe(Ke,Or)}function jr(N,$){if($=="*")return le.marked="keyword",A(jr);if(N=="variable")return B($),A(jr);if(N=="(")return A(Ce,Oe(")"),pt(On,")"),Se,Ur,$e,qe);if(E&&$=="<")return A(Oe(">"),pt(Nn,">"),Se,jr)}function gi(N,$){if($=="*")return le.marked="keyword",A(gi);if(N=="variable")return B($),A(gi);if(N=="(")return A(Ce,Oe(")"),pt(On,")"),Se,Ur,qe);if(E&&$=="<")return A(Oe(">"),pt(Nn,">"),Se,gi)}function os(N,$){if(N=="keyword"||N=="variable")return le.marked="type",A(os);if($=="<")return A(Oe(">"),pt(Nn,">"),Se)}function On(N,$){return $=="@"&&A(Ke,On),N=="spread"?A(On):E&&P($)?(le.marked="keyword",A(On)):E&&N=="this"?A(_r,En):fe(In,_r,En)}function ls(N,$){return N=="variable"?Mi(N,$):Dr(N,$)}function Mi(N,$){if(N=="variable")return B($),A(Dr)}function Dr(N,$){if($=="<")return A(Oe(">"),pt(Nn,">"),Se,Dr);if($=="extends"||$=="implements"||E&&N==",")return $=="implements"&&(le.marked="keyword"),A(E?bt:Ke,Dr);if(N=="{")return A(Oe("}"),Kn,Se)}function Kn(N,$){if(N=="async"||N=="variable"&&($=="static"||$=="get"||$=="set"||E&&P($))&&le.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return le.marked="keyword",A(Kn);if(N=="variable"||le.style=="keyword")return le.marked="property",A(yi,Kn);if(N=="number"||N=="string")return A(yi,Kn);if(N=="[")return A(Ke,_r,Be("]"),yi,Kn);if($=="*")return le.marked="keyword",A(Kn);if(E&&N=="(")return fe(gi,Kn);if(N==";"||N==",")return A(Kn);if(N=="}")return A();if($=="@")return A(Ke,Kn)}function yi(N,$){if($=="!"||$=="?")return A(yi);if(N==":")return A(bt,En);if($=="=")return A(Ft);var ge=le.state.lexical.prev,je=ge&&ge.info=="interface";return fe(je?gi:jr)}function zi(N,$){return $=="*"?(le.marked="keyword",A(ii,Be(";"))):$=="default"?(le.marked="keyword",A(Ke,Be(";"))):N=="{"?A(pt(Bt,"}"),ii,Be(";")):fe($e)}function Bt(N,$){if($=="as")return le.marked="keyword",A(Be("variable"));if(N=="variable")return fe(Ft,Bt)}function Mr(N){return N=="string"?A():N=="("?fe(Ke):N=="."?fe(tt):fe(us,Rt,ii)}function us(N,$){return N=="{"?Xt(us,"}"):(N=="variable"&&B($),$=="*"&&(le.marked="keyword"),A(Fi))}function Rt(N){if(N==",")return A(us,Rt)}function Fi(N,$){if($=="as")return le.marked="keyword",A(us)}function ii(N,$){if($=="from")return le.marked="keyword",A(Ke)}function Vt(N){return N=="]"?A():fe(pt(Ft,"]"))}function Je(){return fe(Oe("form"),In,Be("{"),Oe("}"),pt(si,"}"),Se,Se)}function si(){return fe(In,En)}function cs(N,$){return N.lastType=="operator"||N.lastType==","||G.test($.charAt(0))||/[,.]/.test($.charAt(0))}function Gn(N,$,ge){return $.tokenize==U&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test($.lastType)||$.lastType=="quasi"&&/\{\s*$/.test(N.string.slice(0,N.pos-(ge||0)))}return{startState:function(N){var $={tokenize:U,lastType:"sof",cc:[],lexical:new ve((N||0)-v,0,"block",!1),localVars:y.localVars,context:y.localVars&&new q(null,null,!1),indented:N||0};return y.globalVars&&typeof y.globalVars=="object"&&($.globalVars=y.globalVars),$},token:function(N,$){if(N.sol()&&($.lexical.hasOwnProperty("align")||($.lexical.align=!1),$.indented=N.indentation(),be(N,$)),$.tokenize!=J&&N.eatSpace())return null;var ge=$.tokenize(N,$);return X=="comment"?ge:($.lastType=X=="operator"&&(M=="++"||M=="--")?"incdec":X,Ie($,ge,X,M,N))},indent:function(N,$){if(N.tokenize==J||N.tokenize==ce)return d.Pass;if(N.tokenize!=U)return 0;var ge=$&&$.charAt(0),je=N.lexical,pe;if(!/^\s*else\b/.test($))for(var He=N.cc.length-1;He>=0;--He){var jt=N.cc[He];if(jt==Se)je=je.prev;else if(jt!=wn&&jt!=qe)break}for(;(je.type=="stat"||je.type=="form")&&(ge=="}"||(pe=N.cc[N.cc.length-1])&&(pe==tt||pe==Ue)&&!/^[,\.=+\-*:?[\(]/.test($));)je=je.prev;S&&je.type==")"&&je.prev.type=="stat"&&(je=je.prev);var Qt=je.type,kn=ge==Qt;return Qt=="vardef"?je.indented+(N.lastType=="operator"||N.lastType==","?je.info.length+1:0):Qt=="form"&&ge=="{"?je.indented:Qt=="form"?je.indented+v:Qt=="stat"?je.indented+(cs(N,$)?S||v:0):je.info=="switch"&&!kn&&y.doubleIndentSwitch!=!1?je.indented+(/^(?:case|default)\b/.test($)?v:2*v):je.align?je.column+(kn?0:1):je.indented+(kn?0:v)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:k?null:"/*",blockCommentEnd:k?null:"*/",blockCommentContinue:k?null:" * ",lineComment:k?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:k?"json":"javascript",jsonldMode:j,jsonMode:k,expressionAllowed:Gn,skipExpression:function(N){Ie(N,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),jf.exports}Lm();var Ef={exports:{}},Lf;function ib(){return Lf||(Lf=1,(function(l,u){(function(d){d(ss())})(function(d){function m(_,P,q,D,Z,Ce){this.indented=_,this.column=P,this.type=q,this.info=D,this.align=Z,this.prev=Ce}function y(_,P,q,D){var Z=_.indented;return _.context&&_.context.type=="statement"&&q!="statement"&&(Z=_.context.indented),_.context=new m(Z,P,q,D,null,_.context)}function v(_){var P=_.context.type;return(P==")"||P=="]"||P=="}")&&(_.indented=_.context.indented),_.context=_.context.prev}function S(_,P,q){if(P.prevToken=="variable"||P.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(_.string.slice(0,q))||P.typeAtEndOfLine&&_.column()==_.indentation())return!0}function j(_){for(;;){if(!_||_.type=="top")return!0;if(_.type=="}"&&_.prev.info!="namespace")return!1;_=_.prev}}d.defineMode("clike",function(_,P){var q=_.indentUnit,D=P.statementIndentUnit||q,Z=P.dontAlignCalls,Ce=P.keywords||{},ze=P.types||{},qe=P.builtin||{},Oe=P.blockKeywords||{},Se=P.defKeywords||{},Be=P.atoms||{},$e=P.hooks||{},et=P.multiLineStrings,Ke=P.indentStatements!==!1,Ft=P.indentSwitch!==!1,Yt=P.namespaceSeparator,Ct=P.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,xt=P.numberStart||/[\d\.]/,tt=P.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,Ue=P.isOperatorChar||/[+\-*&%=<>!?|\/]/,vt=P.isIdentifierChar||/[\w\$_\xa1-\uffff]/,yt=P.isReservedIdentifier||!1,Qe,ut;function ae(Ye,at){var Ze=Ye.next();if($e[Ze]){var mt=$e[Ze](Ye,at);if(mt!==!1)return mt}if(Ze=='"'||Ze=="'")return at.tokenize=Te(Ze),at.tokenize(Ye,at);if(xt.test(Ze)){if(Ye.backUp(1),Ye.match(tt))return"number";Ye.next()}if(Ct.test(Ze))return Qe=Ze,null;if(Ze=="/"){if(Ye.eat("*"))return at.tokenize=he,he(Ye,at);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(Ue.test(Ze)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(Ue););return"operator"}if(Ye.eatWhile(vt),Yt)for(;Ye.match(Yt);)Ye.eatWhile(vt);var pt=Ye.current();return T(Ce,pt)?(T(Oe,pt)&&(Qe="newstatement"),T(Se,pt)&&(ut=!0),"keyword"):T(ze,pt)?"type":T(qe,pt)||yt&&yt(pt)?(T(Oe,pt)&&(Qe="newstatement"),"builtin"):T(Be,pt)?"atom":"variable"}function Te(Ye){return function(at,Ze){for(var mt=!1,pt,Xt=!1;(pt=at.next())!=null;){if(pt==Ye&&!mt){Xt=!0;break}mt=!mt&&pt=="\\"}return(Xt||!(mt||et))&&(Ze.tokenize=null),"string"}}function he(Ye,at){for(var Ze=!1,mt;mt=Ye.next();){if(mt=="/"&&Ze){at.tokenize=null;break}Ze=mt=="*"}return"comment"}function kt(Ye,at){P.typeFirstDefinitions&&Ye.eol()&&j(at.context)&&(at.typeAtEndOfLine=S(Ye,at,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new m((Ye||0)-q,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,at){var Ze=at.context;if(Ye.sol()&&(Ze.align==null&&(Ze.align=!1),at.indented=Ye.indentation(),at.startOfLine=!0),Ye.eatSpace())return kt(Ye,at),null;Qe=ut=null;var mt=(at.tokenize||ae)(Ye,at);if(mt=="comment"||mt=="meta")return mt;if(Ze.align==null&&(Ze.align=!0),Qe==";"||Qe==":"||Qe==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)v(at);else if(Qe=="{")y(at,Ye.column(),"}");else if(Qe=="[")y(at,Ye.column(),"]");else if(Qe=="(")y(at,Ye.column(),")");else if(Qe=="}"){for(;Ze.type=="statement";)Ze=v(at);for(Ze.type=="}"&&(Ze=v(at));Ze.type=="statement";)Ze=v(at)}else Qe==Ze.type?v(at):Ke&&((Ze.type=="}"||Ze.type=="top")&&Qe!=";"||Ze.type=="statement"&&Qe=="newstatement")&&y(at,Ye.column(),"statement",Ye.current());if(mt=="variable"&&(at.prevToken=="def"||P.typeFirstDefinitions&&S(Ye,at,Ye.start)&&j(at.context)&&Ye.match(/^\s*\(/,!1))&&(mt="def"),$e.token){var pt=$e.token(Ye,at,mt);pt!==void 0&&(mt=pt)}return mt=="def"&&P.styleDefs===!1&&(mt="variable"),at.startOfLine=!1,at.prevToken=ut?"def":mt||Qe,kt(Ye,at),mt},indent:function(Ye,at){if(Ye.tokenize!=ae&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&j(Ye.context))return d.Pass;var Ze=Ye.context,mt=at&&at.charAt(0),pt=mt==Ze.type;if(Ze.type=="statement"&&mt=="}"&&(Ze=Ze.prev),P.dontIndentStatements)for(;Ze.type=="statement"&&P.dontIndentStatements.test(Ze.info);)Ze=Ze.prev;if($e.indent){var Xt=$e.indent(Ye,Ze,at,q);if(typeof Xt=="number")return Xt}var nr=Ze.prev&&Ze.prev.info=="switch";if(P.allmanIndentation&&/[{(]/.test(mt)){for(;Ze.type!="top"&&Ze.type!="}";)Ze=Ze.prev;return Ze.indented}return Ze.type=="statement"?Ze.indented+(mt=="{"?0:D):Ze.align&&(!Z||Ze.type!=")")?Ze.column+(pt?0:1):Ze.type==")"&&!pt?Ze.indented+D:Ze.indented+(pt?0:q)+(!pt&&nr&&!/^(?:case|default)\b/.test(at)?q:0)},electricInput:Ft?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function k(_){for(var P={},q=_.split(" "),D=0;D<q.length;++D)P[q[D]]=!0;return P}function T(_,P){return typeof _=="function"?_(P):_.propertyIsEnumerable(P)}var E="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",H="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",L="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",G="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",O=k("int long char short double float unsigned signed void bool"),V=k("SEL instancetype id Class Protocol BOOL");function X(_){return T(O,_)||/.+_t$/.test(_)}function M(_){return X(_)||T(V,_)}var F="case do else for if switch while struct enum union",U="struct enum union";function W(_,P){if(!P.startOfLine)return!1;for(var q,D=null;q=_.peek();){if(q=="\\"&&_.match(/^.$/)){D=W;break}else if(q=="/"&&_.match(/^\/[\/\*]/,!1))break;_.next()}return P.tokenize=D,"meta"}function J(_,P){return P.prevToken=="type"?"type":!1}function ce(_){return!_||_.length<2||_[0]!="_"?!1:_[1]=="_"||_[1]!==_[1].toLowerCase()}function oe(_){return _.eatWhile(/[\w\.']/),"number"}function be(_,P){if(_.backUp(1),_.match(/^(?:R|u8R|uR|UR|LR)/)){var q=_.match(/^"([^\s\\()]{0,16})\(/);return q?(P.cpp11RawStringDelim=q[1],P.tokenize=se,se(_,P)):!1}return _.match(/^(?:u8|u|U|L)/)?_.match(/^["']/,!1)?"string":!1:(_.next(),!1)}function Re(_){var P=/(\w+)::~?(\w+)$/.exec(_);return P&&P[1]==P[2]}function ve(_,P){for(var q;(q=_.next())!=null;)if(q=='"'&&!_.eat('"')){P.tokenize=null;break}return"string"}function se(_,P){var q=P.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),D=_.match(new RegExp(".*?\\)"+q+'"'));return D?P.tokenize=null:_.skipToEnd(),"string"}function Ie(_,P){typeof _=="string"&&(_=[_]);var q=[];function D(Ce){if(Ce)for(var ze in Ce)Ce.hasOwnProperty(ze)&&q.push(ze)}D(P.keywords),D(P.types),D(P.builtin),D(P.atoms),q.length&&(P.helperType=_[0],d.registerHelper("hintWords",_[0],q));for(var Z=0;Z<_.length;++Z)d.defineMIME(_[Z],P)}Ie(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:k(E),types:X,blockKeywords:k(F),defKeywords:k(U),typeFirstDefinitions:!0,atoms:k("NULL true false"),isReservedIdentifier:ce,hooks:{"#":W,"*":J},modeProps:{fold:["brace","include"]}}),Ie(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:k(E+" "+H),types:X,blockKeywords:k(F+" class try catch"),defKeywords:k(U+" class namespace"),typeFirstDefinitions:!0,atoms:k("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ce,hooks:{"#":W,"*":J,u:be,U:be,L:be,R:be,0:oe,1:oe,2:oe,3:oe,4:oe,5:oe,6:oe,7:oe,8:oe,9:oe,token:function(_,P,q){if(q=="variable"&&_.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&Re(_.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ie("text/x-java",{name:"clike",keywords:k("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:k("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:k("catch class do else finally for if switch try while"),defKeywords:k("class interface enum @interface"),typeFirstDefinitions:!0,atoms:k("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(_){return _.match("interface",!1)?!1:(_.eatWhile(/[\w\$_]/),"meta")},'"':function(_,P){return _.match(/""$/)?(P.tokenize=le,P.tokenize(_,P)):!1}},modeProps:{fold:["brace","import"]}}),Ie("text/x-csharp",{name:"clike",keywords:k("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:k("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:k("catch class do else finally for foreach if struct switch try while"),defKeywords:k("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"@":function(_,P){return _.eat('"')?(P.tokenize=ve,ve(_,P)):(_.eatWhile(/[\w\$_]/),"meta")}}});function le(_,P){for(var q=!1;!_.eol();){if(!q&&_.match('"""')){P.tokenize=null;break}q=_.next()=="\\"&&!q}return"string"}function fe(_){return function(P,q){for(var D;D=P.next();)if(D=="*"&&P.eat("/"))if(_==1){q.tokenize=null;break}else return q.tokenize=fe(_-1),q.tokenize(P,q);else if(D=="/"&&P.eat("*"))return q.tokenize=fe(_+1),q.tokenize(P,q);return"comment"}}Ie("text/x-scala",{name:"clike",keywords:k("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:k("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:k("catch class enum do else finally for forSome if match switch try while"),defKeywords:k("class enum def object package trait type val var"),atoms:k("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(_){return _.eatWhile(/[\w\$_]/),"meta"},'"':function(_,P){return _.match('""')?(P.tokenize=le,P.tokenize(_,P)):!1},"'":function(_){return _.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(_.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(_,P){var q=P.context;return q.type=="}"&&q.align&&_.eat(">")?(P.context=new m(q.indented,q.column,q.type,q.info,null,q.prev),"operator"):!1},"/":function(_,P){return _.eat("*")?(P.tokenize=fe(1),P.tokenize(_,P)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function A(_){return function(P,q){for(var D=!1,Z,Ce=!1;!P.eol();){if(!_&&!D&&P.match('"')){Ce=!0;break}if(_&&P.match('"""')){Ce=!0;break}Z=P.next(),!D&&Z=="$"&&P.match("{")&&P.skipTo("}"),D=!D&&Z=="\\"&&!_}return(Ce||!_)&&(q.tokenize=null),"string"}}Ie("text/x-kotlin",{name:"clike",keywords:k("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:k("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:k("catch class do else finally for if where try while enum"),defKeywords:k("class val var object interface fun"),atoms:k("true false null this"),hooks:{"@":function(_){return _.eatWhile(/[\w\$_]/),"meta"},"*":function(_,P){return P.prevToken=="."?"variable":"operator"},'"':function(_,P){return P.tokenize=A(_.match('""')),P.tokenize(_,P)},"/":function(_,P){return _.eat("*")?(P.tokenize=fe(1),P.tokenize(_,P)):!1},indent:function(_,P,q,D){var Z=q&&q.charAt(0);if((_.prevToken=="}"||_.prevToken==")")&&q=="")return _.indented;if(_.prevToken=="operator"&&q!="}"&&_.context.type!="}"||_.prevToken=="variable"&&Z=="."||(_.prevToken=="}"||_.prevToken==")")&&Z==".")return D*2+P.indented;if(P.align&&P.type=="}")return P.indented+(_.context.type==(q||"").charAt(0)?0:D)}},modeProps:{closeBrackets:{triples:'"'}}}),Ie(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:k("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:k("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:k("for while do if else struct"),builtin:k("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:k("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":W},modeProps:{fold:["brace","include"]}}),Ie("text/x-nesc",{name:"clike",keywords:k(E+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:X,blockKeywords:k(F),atoms:k("null true false"),hooks:{"#":W},modeProps:{fold:["brace","include"]}}),Ie("text/x-objectivec",{name:"clike",keywords:k(E+" "+L),types:M,builtin:k(G),blockKeywords:k(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:k(U+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":W,"*":J},modeProps:{fold:["brace","include"]}}),Ie("text/x-objectivec++",{name:"clike",keywords:k(E+" "+L+" "+H),types:M,builtin:k(G),blockKeywords:k(F+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:k(U+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:k("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":W,"*":J,u:be,U:be,L:be,R:be,0:oe,1:oe,2:oe,3:oe,4:oe,5:oe,6:oe,7:oe,8:oe,9:oe,token:function(_,P,q){if(q=="variable"&&_.peek()=="("&&(P.prevToken==";"||P.prevToken==null||P.prevToken=="}")&&Re(_.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ie("text/x-squirrel",{name:"clike",keywords:k("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:X,blockKeywords:k("case catch class else for foreach if switch try while"),defKeywords:k("function local class"),typeFirstDefinitions:!0,atoms:k("true false null"),hooks:{"#":W},modeProps:{fold:["brace","include"]}});var Q=null;function B(_){return function(P,q){for(var D=!1,Z,Ce=!1;!P.eol();){if(!D&&P.match('"')&&(_=="single"||P.match('""'))){Ce=!0;break}if(!D&&P.match("``")){Q=B(_),Ce=!0;break}Z=P.next(),D=_=="single"&&!D&&Z=="\\"}return Ce&&(q.tokenize=null),"string"}}Ie("text/x-ceylon",{name:"clike",keywords:k("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(_){var P=_.charAt(0);return P===P.toUpperCase()&&P!==P.toLowerCase()},blockKeywords:k("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:k("class dynamic function interface module object package value"),builtin:k("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:k("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(_){return _.eatWhile(/[\w\$_]/),"meta"},'"':function(_,P){return P.tokenize=B(_.match('""')?"triple":"single"),P.tokenize(_,P)},"`":function(_,P){return!Q||!_.match("`")?!1:(P.tokenize=Q,Q=null,P.tokenize(_,P))},"'":function(_){return _.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(_,P,q){if((q=="variable"||q=="type")&&P.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Ef.exports}ib();var Pf={exports:{}},Af;function Pm(){return Af||(Af=1,(function(l,u){(function(d){d(ss())})(function(d){var m={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},y={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(v,S){var j=v.indentUnit,k={},T=S.htmlMode?m:y;for(var E in T)k[E]=T[E];for(var E in S)k[E]=S[E];var H,L;function G(A,Q){function B(q){return Q.tokenize=q,q(A,Q)}var _=A.next();if(_=="<")return A.eat("!")?A.eat("[")?A.match("CDATA[")?B(X("atom","]]>")):null:A.match("--")?B(X("comment","-->")):A.match("DOCTYPE",!0,!0)?(A.eatWhile(/[\w\._\-]/),B(M(1))):null:A.eat("?")?(A.eatWhile(/[\w\._\-]/),Q.tokenize=X("meta","?>"),"meta"):(H=A.eat("/")?"closeTag":"openTag",Q.tokenize=O,"tag bracket");if(_=="&"){var P;return A.eat("#")?A.eat("x")?P=A.eatWhile(/[a-fA-F\d]/)&&A.eat(";"):P=A.eatWhile(/[\d]/)&&A.eat(";"):P=A.eatWhile(/[\w\.\-:]/)&&A.eat(";"),P?"atom":"error"}else return A.eatWhile(/[^&<]/),null}G.isInText=!0;function O(A,Q){var B=A.next();if(B==">"||B=="/"&&A.eat(">"))return Q.tokenize=G,H=B==">"?"endTag":"selfcloseTag","tag bracket";if(B=="=")return H="equals",null;if(B=="<"){Q.tokenize=G,Q.state=ce,Q.tagName=Q.tagStart=null;var _=Q.tokenize(A,Q);return _?_+" tag error":"tag error"}else return/[\'\"]/.test(B)?(Q.tokenize=V(B),Q.stringStartCol=A.column(),Q.tokenize(A,Q)):(A.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function V(A){var Q=function(B,_){for(;!B.eol();)if(B.next()==A){_.tokenize=O;break}return"string"};return Q.isInAttribute=!0,Q}function X(A,Q){return function(B,_){for(;!B.eol();){if(B.match(Q)){_.tokenize=G;break}B.next()}return A}}function M(A){return function(Q,B){for(var _;(_=Q.next())!=null;){if(_=="<")return B.tokenize=M(A+1),B.tokenize(Q,B);if(_==">")if(A==1){B.tokenize=G;break}else return B.tokenize=M(A-1),B.tokenize(Q,B)}return"meta"}}function F(A){return A&&A.toLowerCase()}function U(A,Q,B){this.prev=A.context,this.tagName=Q||"",this.indent=A.indented,this.startOfLine=B,(k.doNotIndent.hasOwnProperty(Q)||A.context&&A.context.noIndent)&&(this.noIndent=!0)}function W(A){A.context&&(A.context=A.context.prev)}function J(A,Q){for(var B;;){if(!A.context||(B=A.context.tagName,!k.contextGrabbers.hasOwnProperty(F(B))||!k.contextGrabbers[F(B)].hasOwnProperty(F(Q))))return;W(A)}}function ce(A,Q,B){return A=="openTag"?(B.tagStart=Q.column(),oe):A=="closeTag"?be:ce}function oe(A,Q,B){return A=="word"?(B.tagName=Q.current(),L="tag",se):k.allowMissingTagName&&A=="endTag"?(L="tag bracket",se(A,Q,B)):(L="error",oe)}function be(A,Q,B){if(A=="word"){var _=Q.current();return B.context&&B.context.tagName!=_&&k.implicitlyClosed.hasOwnProperty(F(B.context.tagName))&&W(B),B.context&&B.context.tagName==_||k.matchClosing===!1?(L="tag",Re):(L="tag error",ve)}else return k.allowMissingTagName&&A=="endTag"?(L="tag bracket",Re(A,Q,B)):(L="error",ve)}function Re(A,Q,B){return A!="endTag"?(L="error",Re):(W(B),ce)}function ve(A,Q,B){return L="error",Re(A,Q,B)}function se(A,Q,B){if(A=="word")return L="attribute",Ie;if(A=="endTag"||A=="selfcloseTag"){var _=B.tagName,P=B.tagStart;return B.tagName=B.tagStart=null,A=="selfcloseTag"||k.autoSelfClosers.hasOwnProperty(F(_))?J(B,_):(J(B,_),B.context=new U(B,_,P==B.indented)),ce}return L="error",se}function Ie(A,Q,B){return A=="equals"?le:(k.allowMissing||(L="error"),se(A,Q,B))}function le(A,Q,B){return A=="string"?fe:A=="word"&&k.allowUnquoted?(L="string",se):(L="error",se(A,Q,B))}function fe(A,Q,B){return A=="string"?fe:se(A,Q,B)}return{startState:function(A){var Q={tokenize:G,state:ce,indented:A||0,tagName:null,tagStart:null,context:null};return A!=null&&(Q.baseIndent=A),Q},token:function(A,Q){if(!Q.tagName&&A.sol()&&(Q.indented=A.indentation()),A.eatSpace())return null;H=null;var B=Q.tokenize(A,Q);return(B||H)&&B!="comment"&&(L=null,Q.state=Q.state(H||B,A,Q),L&&(B=L=="error"?B+" error":L)),B},indent:function(A,Q,B){var _=A.context;if(A.tokenize.isInAttribute)return A.tagStart==A.indented?A.stringStartCol+1:A.indented+j;if(_&&_.noIndent)return d.Pass;if(A.tokenize!=O&&A.tokenize!=G)return B?B.match(/^(\s*)/)[0].length:0;if(A.tagName)return k.multilineTagIndentPastTag!==!1?A.tagStart+A.tagName.length+2:A.tagStart+j*(k.multilineTagIndentFactor||1);if(k.alignCDATA&&/<!\[CDATA\[/.test(Q))return 0;var P=Q&&/^<(\/)?([\w_:\.-]*)/.exec(Q);if(P&&P[1])for(;_;)if(_.tagName==P[2]){_=_.prev;break}else if(k.implicitlyClosed.hasOwnProperty(F(_.tagName)))_=_.prev;else break;else if(P)for(;_;){var q=k.contextGrabbers[F(_.tagName)];if(q&&q.hasOwnProperty(F(P[2])))_=_.prev;else break}for(;_&&_.prev&&!_.startOfLine;)_=_.prev;return _?_.indent+j:A.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:k.htmlMode?"html":"xml",helperType:k.htmlMode?"html":"xml",skipAttribute:function(A){A.state==le&&(A.state=se)},xmlCurrentTag:function(A){return A.tagName?{name:A.tagName,close:A.type=="closeTag"}:null},xmlCurrentContext:function(A){for(var Q=[],B=A.context;B;B=B.prev)Q.push(B.tagName);return Q.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Pf.exports}Pm();var Rf={exports:{}},If;function Am(){return If||(If=1,(function(l,u){(function(d){d(ss())})(function(d){d.defineMode("css",function(ve,se){var Ie=se.inline;se.propertyKeywords||(se=d.resolveMode("text/css"));var le=ve.indentUnit,fe=se.tokenHooks,A=se.documentTypes||{},Q=se.mediaTypes||{},B=se.mediaFeatures||{},_=se.mediaValueKeywords||{},P=se.propertyKeywords||{},q=se.nonStandardPropertyKeywords||{},D=se.fontProperties||{},Z=se.counterDescriptors||{},Ce=se.colorKeywords||{},ze=se.valueKeywords||{},qe=se.allowNested,Oe=se.lineComment,Se=se.supportsAtComponent===!0,Be=ve.highlightNonStandardPropertyKeywords!==!1,$e,et;function Ke(ae,Te){return $e=Te,ae}function Ft(ae,Te){var he=ae.next();if(fe[he]){var kt=fe[he](ae,Te);if(kt!==!1)return kt}if(he=="@")return ae.eatWhile(/[\w\\\-]/),Ke("def",ae.current());if(he=="="||(he=="~"||he=="|")&&ae.eat("="))return Ke(null,"compare");if(he=='"'||he=="'")return Te.tokenize=Yt(he),Te.tokenize(ae,Te);if(he=="#")return ae.eatWhile(/[\w\\\-]/),Ke("atom","hash");if(he=="!")return ae.match(/^\s*\w*/),Ke("keyword","important");if(/\d/.test(he)||he=="."&&ae.eat(/\d/))return ae.eatWhile(/[\w.%]/),Ke("number","unit");if(he==="-"){if(/[\d.]/.test(ae.peek()))return ae.eatWhile(/[\w.%]/),Ke("number","unit");if(ae.match(/^-[\w\\\-]*/))return ae.eatWhile(/[\w\\\-]/),ae.match(/^\s*:/,!1)?Ke("variable-2","variable-definition"):Ke("variable-2","variable");if(ae.match(/^\w+-/))return Ke("meta","meta")}else return/[,+>*\/]/.test(he)?Ke(null,"select-op"):he=="."&&ae.match(/^-?[_a-z][_a-z0-9-]*/i)?Ke("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(he)?Ke(null,he):ae.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(ae.current())&&(Te.tokenize=Ct),Ke("variable callee","variable")):/[\w\\\-]/.test(he)?(ae.eatWhile(/[\w\\\-]/),Ke("property","word")):Ke(null,null)}function Yt(ae){return function(Te,he){for(var kt=!1,Ye;(Ye=Te.next())!=null;){if(Ye==ae&&!kt){ae==")"&&Te.backUp(1);break}kt=!kt&&Ye=="\\"}return(Ye==ae||!kt&&ae!=")")&&(he.tokenize=null),Ke("string","string")}}function Ct(ae,Te){return ae.next(),ae.match(/^\s*[\"\')]/,!1)?Te.tokenize=null:Te.tokenize=Yt(")"),Ke(null,"(")}function xt(ae,Te,he){this.type=ae,this.indent=Te,this.prev=he}function tt(ae,Te,he,kt){return ae.context=new xt(he,Te.indentation()+(kt===!1?0:le),ae.context),he}function Ue(ae){return ae.context.prev&&(ae.context=ae.context.prev),ae.context.type}function vt(ae,Te,he){return ut[he.context.type](ae,Te,he)}function yt(ae,Te,he,kt){for(var Ye=kt||1;Ye>0;Ye--)he.context=he.context.prev;return vt(ae,Te,he)}function Qe(ae){var Te=ae.current().toLowerCase();ze.hasOwnProperty(Te)?et="atom":Ce.hasOwnProperty(Te)?et="keyword":et="variable"}var ut={};return ut.top=function(ae,Te,he){if(ae=="{")return tt(he,Te,"block");if(ae=="}"&&he.context.prev)return Ue(he);if(Se&&/@component/i.test(ae))return tt(he,Te,"atComponentBlock");if(/^@(-moz-)?document$/i.test(ae))return tt(he,Te,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(ae))return tt(he,Te,"atBlock");if(/^@(font-face|counter-style)/i.test(ae))return he.stateArg=ae,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(ae))return"keyframes";if(ae&&ae.charAt(0)=="@")return tt(he,Te,"at");if(ae=="hash")et="builtin";else if(ae=="word")et="tag";else{if(ae=="variable-definition")return"maybeprop";if(ae=="interpolation")return tt(he,Te,"interpolation");if(ae==":")return"pseudo";if(qe&&ae=="(")return tt(he,Te,"parens")}return he.context.type},ut.block=function(ae,Te,he){if(ae=="word"){var kt=Te.current().toLowerCase();return P.hasOwnProperty(kt)?(et="property","maybeprop"):q.hasOwnProperty(kt)?(et=Be?"string-2":"property","maybeprop"):qe?(et=Te.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(et+=" error","maybeprop")}else return ae=="meta"?"block":!qe&&(ae=="hash"||ae=="qualifier")?(et="error","block"):ut.top(ae,Te,he)},ut.maybeprop=function(ae,Te,he){return ae==":"?tt(he,Te,"prop"):vt(ae,Te,he)},ut.prop=function(ae,Te,he){if(ae==";")return Ue(he);if(ae=="{"&&qe)return tt(he,Te,"propBlock");if(ae=="}"||ae=="{")return yt(ae,Te,he);if(ae=="(")return tt(he,Te,"parens");if(ae=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(Te.current()))et+=" error";else if(ae=="word")Qe(Te);else if(ae=="interpolation")return tt(he,Te,"interpolation");return"prop"},ut.propBlock=function(ae,Te,he){return ae=="}"?Ue(he):ae=="word"?(et="property","maybeprop"):he.context.type},ut.parens=function(ae,Te,he){return ae=="{"||ae=="}"?yt(ae,Te,he):ae==")"?Ue(he):ae=="("?tt(he,Te,"parens"):ae=="interpolation"?tt(he,Te,"interpolation"):(ae=="word"&&Qe(Te),"parens")},ut.pseudo=function(ae,Te,he){return ae=="meta"?"pseudo":ae=="word"?(et="variable-3",he.context.type):vt(ae,Te,he)},ut.documentTypes=function(ae,Te,he){return ae=="word"&&A.hasOwnProperty(Te.current())?(et="tag",he.context.type):ut.atBlock(ae,Te,he)},ut.atBlock=function(ae,Te,he){if(ae=="(")return tt(he,Te,"atBlock_parens");if(ae=="}"||ae==";")return yt(ae,Te,he);if(ae=="{")return Ue(he)&&tt(he,Te,qe?"block":"top");if(ae=="interpolation")return tt(he,Te,"interpolation");if(ae=="word"){var kt=Te.current().toLowerCase();kt=="only"||kt=="not"||kt=="and"||kt=="or"?et="keyword":Q.hasOwnProperty(kt)?et="attribute":B.hasOwnProperty(kt)?et="property":_.hasOwnProperty(kt)?et="keyword":P.hasOwnProperty(kt)?et="property":q.hasOwnProperty(kt)?et=Be?"string-2":"property":ze.hasOwnProperty(kt)?et="atom":Ce.hasOwnProperty(kt)?et="keyword":et="error"}return he.context.type},ut.atComponentBlock=function(ae,Te,he){return ae=="}"?yt(ae,Te,he):ae=="{"?Ue(he)&&tt(he,Te,qe?"block":"top",!1):(ae=="word"&&(et="error"),he.context.type)},ut.atBlock_parens=function(ae,Te,he){return ae==")"?Ue(he):ae=="{"||ae=="}"?yt(ae,Te,he,2):ut.atBlock(ae,Te,he)},ut.restricted_atBlock_before=function(ae,Te,he){return ae=="{"?tt(he,Te,"restricted_atBlock"):ae=="word"&&he.stateArg=="@counter-style"?(et="variable","restricted_atBlock_before"):vt(ae,Te,he)},ut.restricted_atBlock=function(ae,Te,he){return ae=="}"?(he.stateArg=null,Ue(he)):ae=="word"?(he.stateArg=="@font-face"&&!D.hasOwnProperty(Te.current().toLowerCase())||he.stateArg=="@counter-style"&&!Z.hasOwnProperty(Te.current().toLowerCase())?et="error":et="property","maybeprop"):"restricted_atBlock"},ut.keyframes=function(ae,Te,he){return ae=="word"?(et="variable","keyframes"):ae=="{"?tt(he,Te,"top"):vt(ae,Te,he)},ut.at=function(ae,Te,he){return ae==";"?Ue(he):ae=="{"||ae=="}"?yt(ae,Te,he):(ae=="word"?et="tag":ae=="hash"&&(et="builtin"),"at")},ut.interpolation=function(ae,Te,he){return ae=="}"?Ue(he):ae=="{"||ae==";"?yt(ae,Te,he):(ae=="word"?et="variable":ae!="variable"&&ae!="("&&ae!=")"&&(et="error"),"interpolation")},{startState:function(ae){return{tokenize:null,state:Ie?"block":"top",stateArg:null,context:new xt(Ie?"block":"top",ae||0,null)}},token:function(ae,Te){if(!Te.tokenize&&ae.eatSpace())return null;var he=(Te.tokenize||Ft)(ae,Te);return he&&typeof he=="object"&&($e=he[1],he=he[0]),et=he,$e!="comment"&&(Te.state=ut[Te.state]($e,ae,Te)),et},indent:function(ae,Te){var he=ae.context,kt=Te&&Te.charAt(0),Ye=he.indent;return he.type=="prop"&&(kt=="}"||kt==")")&&(he=he.prev),he.prev&&(kt=="}"&&(he.type=="block"||he.type=="top"||he.type=="interpolation"||he.type=="restricted_atBlock")?(he=he.prev,Ye=he.indent):(kt==")"&&(he.type=="parens"||he.type=="atBlock_parens")||kt=="{"&&(he.type=="at"||he.type=="atBlock"))&&(Ye=Math.max(0,he.indent-le))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Oe,fold:"brace"}});function m(ve){for(var se={},Ie=0;Ie<ve.length;++Ie)se[ve[Ie].toLowerCase()]=!0;return se}var y=["domain","regexp","url","url-prefix"],v=m(y),S=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],j=m(S),k=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],T=m(k),E=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],H=m(E),L=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],G=m(L),O=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],V=m(O),X=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],M=m(X),F=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],U=m(F),W=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],J=m(W),ce=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],oe=m(ce),be=y.concat(S).concat(k).concat(E).concat(L).concat(O).concat(W).concat(ce);d.registerHelper("hintWords","css",be);function Re(ve,se){for(var Ie=!1,le;(le=ve.next())!=null;){if(Ie&&le=="/"){se.tokenize=null;break}Ie=le=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:v,mediaTypes:j,mediaFeatures:T,mediaValueKeywords:H,propertyKeywords:G,nonStandardPropertyKeywords:V,fontProperties:M,counterDescriptors:U,colorKeywords:J,valueKeywords:oe,tokenHooks:{"/":function(ve,se){return ve.eat("*")?(se.tokenize=Re,Re(ve,se)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:j,mediaFeatures:T,mediaValueKeywords:H,propertyKeywords:G,nonStandardPropertyKeywords:V,colorKeywords:J,valueKeywords:oe,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(ve,se){return ve.eat("/")?(ve.skipToEnd(),["comment","comment"]):ve.eat("*")?(se.tokenize=Re,Re(ve,se)):["operator","operator"]},":":function(ve){return ve.match(/^\s*\{/,!1)?[null,null]:!1},$:function(ve){return ve.match(/^[\w-]+/),ve.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(ve){return ve.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:j,mediaFeatures:T,mediaValueKeywords:H,propertyKeywords:G,nonStandardPropertyKeywords:V,colorKeywords:J,valueKeywords:oe,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(ve,se){return ve.eat("/")?(ve.skipToEnd(),["comment","comment"]):ve.eat("*")?(se.tokenize=Re,Re(ve,se)):["operator","operator"]},"@":function(ve){return ve.eat("{")?[null,"interpolation"]:ve.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(ve.eatWhile(/[\w\\\-]/),ve.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:v,mediaTypes:j,mediaFeatures:T,propertyKeywords:G,nonStandardPropertyKeywords:V,fontProperties:M,counterDescriptors:U,colorKeywords:J,valueKeywords:oe,supportsAtComponent:!0,tokenHooks:{"/":function(ve,se){return ve.eat("*")?(se.tokenize=Re,Re(ve,se)):!1}},name:"css",helperType:"gss"})})})()),Rf.exports}Am();var Of={exports:{}},Df;function sb(){return Df||(Df=1,(function(l,u){(function(d){d(ss(),Pm(),Lm(),Am())})(function(d){var m={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function y(H,L,G){var O=H.current(),V=O.search(L);return V>-1?H.backUp(O.length-V):O.match(/<\/?$/)&&(H.backUp(O.length),H.match(L,!1)||H.match(O)),G}var v={};function S(H){var L=v[H];return L||(v[H]=new RegExp("\\s+"+H+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function j(H,L){var G=H.match(S(L));return G?/^\s*(.*?)\s*$/.exec(G[2])[1]:""}function k(H,L){return new RegExp((L?"^":"")+"</\\s*"+H+"\\s*>","i")}function T(H,L){for(var G in H)for(var O=L[G]||(L[G]=[]),V=H[G],X=V.length-1;X>=0;X--)O.unshift(V[X])}function E(H,L){for(var G=0;G<H.length;G++){var O=H[G];if(!O[0]||O[1].test(j(L,O[0])))return O[2]}}d.defineMode("htmlmixed",function(H,L){var G=d.getMode(H,{name:"xml",htmlMode:!0,multilineTagIndentFactor:L.multilineTagIndentFactor,multilineTagIndentPastTag:L.multilineTagIndentPastTag,allowMissingTagName:L.allowMissingTagName}),O={},V=L&&L.tags,X=L&&L.scriptTypes;if(T(m,O),V&&T(V,O),X)for(var M=X.length-1;M>=0;M--)O.script.unshift(["type",X[M].matches,X[M].mode]);function F(U,W){var J=G.token(U,W.htmlState),ce=/\btag\b/.test(J),oe;if(ce&&!/[<>\s\/]/.test(U.current())&&(oe=W.htmlState.tagName&&W.htmlState.tagName.toLowerCase())&&O.hasOwnProperty(oe))W.inTag=oe+" ";else if(W.inTag&&ce&&/>$/.test(U.current())){var be=/^([\S]+) (.*)/.exec(W.inTag);W.inTag=null;var Re=U.current()==">"&&E(O[be[1]],be[2]),ve=d.getMode(H,Re),se=k(be[1],!0),Ie=k(be[1],!1);W.token=function(le,fe){return le.match(se,!1)?(fe.token=F,fe.localState=fe.localMode=null,null):y(le,Ie,fe.localMode.token(le,fe.localState))},W.localMode=ve,W.localState=d.startState(ve,G.indent(W.htmlState,"",""))}else W.inTag&&(W.inTag+=U.current(),U.eol()&&(W.inTag+=" "));return J}return{startState:function(){var U=d.startState(G);return{token:F,inTag:null,localMode:null,localState:null,htmlState:U}},copyState:function(U){var W;return U.localState&&(W=d.copyState(U.localMode,U.localState)),{token:U.token,inTag:U.inTag,localMode:U.localMode,localState:W,htmlState:d.copyState(G,U.htmlState)}},token:function(U,W){return W.token(U,W)},indent:function(U,W,J){return!U.localMode||/^\s*<\//.test(W)?G.indent(U.htmlState,W,J):U.localMode.indent?U.localMode.indent(U.localState,W,J):d.Pass},innerMode:function(U){return{state:U.localState||U.htmlState,mode:U.localMode||G}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),Of.exports}sb();var Mf={exports:{}},zf;function ab(){return zf||(zf=1,(function(l,u){(function(d){d(ss())})(function(d){var m={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},y=d.Pos;d.defineOption("autoCloseBrackets",!1,function(M,F,U){U&&U!=d.Init&&(M.removeKeyMap(S),M.state.closeBrackets=null),F&&(j(v(F,"pairs")),M.state.closeBrackets=F,M.addKeyMap(S))});function v(M,F){return F=="pairs"&&typeof M=="string"?M:typeof M=="object"&&M[F]!=null?M[F]:m[F]}var S={Backspace:E,Enter:H};function j(M){for(var F=0;F<M.length;F++){var U=M.charAt(F),W="'"+U+"'";S[W]||(S[W]=k(U))}}j(m.pairs+"`");function k(M){return function(F){return O(F,M)}}function T(M){var F=M.state.closeBrackets;if(!F||F.override)return F;var U=M.getModeAt(M.getCursor());return U.closeBrackets||F}function E(M){var F=T(M);if(!F||M.getOption("disableInput"))return d.Pass;for(var U=v(F,"pairs"),W=M.listSelections(),J=0;J<W.length;J++){if(!W[J].empty())return d.Pass;var ce=V(M,W[J].head);if(!ce||U.indexOf(ce)%2!=0)return d.Pass}for(var J=W.length-1;J>=0;J--){var oe=W[J].head;M.replaceRange("",y(oe.line,oe.ch-1),y(oe.line,oe.ch+1),"+delete")}}function H(M){var F=T(M),U=F&&v(F,"explode");if(!U||M.getOption("disableInput"))return d.Pass;for(var W=M.listSelections(),J=0;J<W.length;J++){if(!W[J].empty())return d.Pass;var ce=V(M,W[J].head);if(!ce||U.indexOf(ce)%2!=0)return d.Pass}M.operation(function(){var oe=M.lineSeparator()||`
`;M.replaceSelection(oe+oe,null),L(M,-1),W=M.listSelections();for(var be=0;be<W.length;be++){var Re=W[be].head.line;M.indentLine(Re,null,!0),M.indentLine(Re+1,null,!0)}})}function L(M,F){for(var U=[],W=M.listSelections(),J=0,ce=0;ce<W.length;ce++){var oe=W[ce];oe.head==M.getCursor()&&(J=ce);var be=oe.head.ch||F>0?{line:oe.head.line,ch:oe.head.ch+F}:{line:oe.head.line-1};U.push({anchor:be,head:be})}M.setSelections(U,J)}function G(M){var F=d.cmpPos(M.anchor,M.head)>0;return{anchor:new y(M.anchor.line,M.anchor.ch+(F?-1:1)),head:new y(M.head.line,M.head.ch+(F?1:-1))}}function O(M,F){var U=T(M);if(!U||M.getOption("disableInput"))return d.Pass;var W=v(U,"pairs"),J=W.indexOf(F);if(J==-1)return d.Pass;for(var ce=v(U,"closeBefore"),oe=v(U,"triples"),be=W.charAt(J+1)==F,Re=M.listSelections(),ve=J%2==0,se,Ie=0;Ie<Re.length;Ie++){var le=Re[Ie],fe=le.head,A,Q=M.getRange(fe,y(fe.line,fe.ch+1));if(ve&&!le.empty())A="surround";else if((be||!ve)&&Q==F)be&&X(M,fe)?A="both":oe.indexOf(F)>=0&&M.getRange(fe,y(fe.line,fe.ch+3))==F+F+F?A="skipThree":A="skip";else if(be&&fe.ch>1&&oe.indexOf(F)>=0&&M.getRange(y(fe.line,fe.ch-2),fe)==F+F){if(fe.ch>2&&/\bstring/.test(M.getTokenTypeAt(y(fe.line,fe.ch-2))))return d.Pass;A="addFour"}else if(be){var B=fe.ch==0?" ":M.getRange(y(fe.line,fe.ch-1),fe);if(!d.isWordChar(Q)&&B!=F&&!d.isWordChar(B))A="both";else return d.Pass}else if(ve&&(Q.length===0||/\s/.test(Q)||ce.indexOf(Q)>-1))A="both";else return d.Pass;if(!se)se=A;else if(se!=A)return d.Pass}var _=J%2?W.charAt(J-1):F,P=J%2?F:W.charAt(J+1);M.operation(function(){if(se=="skip")L(M,1);else if(se=="skipThree")L(M,3);else if(se=="surround"){for(var q=M.getSelections(),D=0;D<q.length;D++)q[D]=_+q[D]+P;M.replaceSelections(q,"around"),q=M.listSelections().slice();for(var D=0;D<q.length;D++)q[D]=G(q[D]);M.setSelections(q)}else se=="both"?(M.replaceSelection(_+P,null),M.triggerElectric(_+P),L(M,-1)):se=="addFour"&&(M.replaceSelection(_+_+_+_,"before"),L(M,1))})}function V(M,F){var U=M.getRange(y(F.line,F.ch-1),y(F.line,F.ch+1));return U.length==2?U:null}function X(M,F){var U=M.getTokenAt(y(F.line,F.ch+1));return/\bstring/.test(U.type)&&U.start==F.ch&&(F.ch==0||!/\bstring/.test(M.getTokenTypeAt(F)))}})})()),Mf.exports}ab();var Ff={exports:{}},Wf;function ob(){return Wf||(Wf=1,(function(l,u){(function(d){d(ss())})(function(d){var m=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),y=d.Pos,v={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function S(L){return L&&L.bracketRegex||/[(){}[\]]/}function j(L,G,O){var V=L.getLineHandle(G.line),X=G.ch-1,M=O&&O.afterCursor;M==null&&(M=/(^| )cm-fat-cursor($| )/.test(L.getWrapperElement().className));var F=S(O),U=!M&&X>=0&&F.test(V.text.charAt(X))&&v[V.text.charAt(X)]||F.test(V.text.charAt(X+1))&&v[V.text.charAt(++X)];if(!U)return null;var W=U.charAt(1)==">"?1:-1;if(O&&O.strict&&W>0!=(X==G.ch))return null;var J=L.getTokenTypeAt(y(G.line,X+1)),ce=k(L,y(G.line,X+(W>0?1:0)),W,J,O);return ce==null?null:{from:y(G.line,X),to:ce&&ce.pos,match:ce&&ce.ch==U.charAt(0),forward:W>0}}function k(L,G,O,V,X){for(var M=X&&X.maxScanLineLength||1e4,F=X&&X.maxScanLines||1e3,U=[],W=S(X),J=O>0?Math.min(G.line+F,L.lastLine()+1):Math.max(L.firstLine()-1,G.line-F),ce=G.line;ce!=J;ce+=O){var oe=L.getLine(ce);if(oe){var be=O>0?0:oe.length-1,Re=O>0?oe.length:-1;if(!(oe.length>M))for(ce==G.line&&(be=G.ch-(O<0?1:0));be!=Re;be+=O){var ve=oe.charAt(be);if(W.test(ve)&&(V===void 0||(L.getTokenTypeAt(y(ce,be+1))||"")==(V||""))){var se=v[ve];if(se&&se.charAt(1)==">"==O>0)U.push(ve);else if(U.length)U.pop();else return{pos:y(ce,be),ch:ve}}}}}return ce-O==(O>0?L.lastLine():L.firstLine())?!1:null}function T(L,G,O){for(var V=L.state.matchBrackets.maxHighlightLineLength||1e3,X=O&&O.highlightNonMatching,M=[],F=L.listSelections(),U=0;U<F.length;U++){var W=F[U].empty()&&j(L,F[U].head,O);if(W&&(W.match||X!==!1)&&L.getLine(W.from.line).length<=V){var J=W.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";M.push(L.markText(W.from,y(W.from.line,W.from.ch+1),{className:J})),W.to&&L.getLine(W.to.line).length<=V&&M.push(L.markText(W.to,y(W.to.line,W.to.ch+1),{className:J}))}}if(M.length){m&&L.state.focused&&L.focus();var ce=function(){L.operation(function(){for(var oe=0;oe<M.length;oe++)M[oe].clear()})};if(G)setTimeout(ce,800);else return ce}}function E(L){L.operation(function(){L.state.matchBrackets.currentlyHighlighted&&(L.state.matchBrackets.currentlyHighlighted(),L.state.matchBrackets.currentlyHighlighted=null),L.state.matchBrackets.currentlyHighlighted=T(L,!1,L.state.matchBrackets)})}function H(L){L.state.matchBrackets&&L.state.matchBrackets.currentlyHighlighted&&(L.state.matchBrackets.currentlyHighlighted(),L.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(L,G,O){O&&O!=d.Init&&(L.off("cursorActivity",E),L.off("focus",E),L.off("blur",H),H(L)),G&&(L.state.matchBrackets=typeof G=="object"?G:{},L.on("cursorActivity",E),L.on("focus",E),L.on("blur",H))}),d.defineExtension("matchBrackets",function(){T(this,!0)}),d.defineExtension("findMatchingBracket",function(L,G,O){return(O||typeof G=="boolean")&&(O?(O.strict=G,G=O):G=G?{strict:!0}:null),j(this,L,G)}),d.defineExtension("scanForBracket",function(L,G,O,V){return k(this,L,G,O,V)})})})()),Ff.exports}ob();var Hf={exports:{}},Bf;function lb(){return Bf||(Bf=1,(function(l,u){(function(d){d(ss())})(function(d){var m="CodeMirror-hint",y="CodeMirror-hint-active";d.showHint=function(M,F,U){if(!F)return M.showHint(U);U&&U.async&&(F.async=!0);var W={hint:F};if(U)for(var J in U)W[J]=U[J];return M.showHint(W)},d.defineExtension("showHint",function(M){M=k(this,this.getCursor("start"),M);var F=this.listSelections();if(!(F.length>1)){if(this.somethingSelected()){if(!M.hint.supportsSelection)return;for(var U=0;U<F.length;U++)if(F[U].head.line!=F[U].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var W=this.state.completionActive=new v(this,M);W.options.hint&&(d.signal(this,"startCompletion",this),W.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function v(M,F){if(this.cm=M,this.options=F,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var U=this;M.on("cursorActivity",this.activityFunc=function(){U.cursorActivity()})}}var S=window.requestAnimationFrame||function(M){return setTimeout(M,1e3/60)},j=window.cancelAnimationFrame||clearTimeout;v.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(M,F){var U=M.list[F],W=this;this.cm.operation(function(){U.hint?U.hint(W.cm,M,U):W.cm.replaceRange(T(U),U.from||M.from,U.to||M.to,"complete"),d.signal(M,"pick",U),W.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(j(this.debounce),this.debounce=0);var M=this.startPos;this.data&&(M=this.data.from);var F=this.cm.getCursor(),U=this.cm.getLine(F.line);if(F.line!=this.startPos.line||U.length-F.ch!=this.startLen-this.startPos.ch||F.ch<M.ch||this.cm.somethingSelected()||!F.ch||this.options.closeCharacters.test(U.charAt(F.ch-1)))this.close();else{var W=this;this.debounce=S(function(){W.update()}),this.widget&&this.widget.disable()}},update:function(M){if(this.tick!=null){var F=this,U=++this.tick;O(this.options.hint,this.cm,this.options,function(W){F.tick==U&&F.finishUpdate(W,M)})}},finishUpdate:function(M,F){this.data&&d.signal(this.data,"update");var U=this.widget&&this.widget.picked||F&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=M,M&&M.list.length&&(U&&M.list.length==1?this.pick(M,0):(this.widget=new L(this,M),d.signal(M,"shown")))}};function k(M,F,U){var W=M.options.hintOptions,J={};for(var ce in X)J[ce]=X[ce];if(W)for(var ce in W)W[ce]!==void 0&&(J[ce]=W[ce]);if(U)for(var ce in U)U[ce]!==void 0&&(J[ce]=U[ce]);return J.hint.resolve&&(J.hint=J.hint.resolve(M,F)),J}function T(M){return typeof M=="string"?M:M.text}function E(M,F){var U={Up:function(){F.moveFocus(-1)},Down:function(){F.moveFocus(1)},PageUp:function(){F.moveFocus(-F.menuSize()+1,!0)},PageDown:function(){F.moveFocus(F.menuSize()-1,!0)},Home:function(){F.setFocus(0)},End:function(){F.setFocus(F.length-1)},Enter:F.pick,Tab:F.pick,Esc:F.close},W=/Mac/.test(navigator.platform);W&&(U["Ctrl-P"]=function(){F.moveFocus(-1)},U["Ctrl-N"]=function(){F.moveFocus(1)});var J=M.options.customKeys,ce=J?{}:U;function oe(ve,se){var Ie;typeof se!="string"?Ie=function(le){return se(le,F)}:U.hasOwnProperty(se)?Ie=U[se]:Ie=se,ce[ve]=Ie}if(J)for(var be in J)J.hasOwnProperty(be)&&oe(be,J[be]);var Re=M.options.extraKeys;if(Re)for(var be in Re)Re.hasOwnProperty(be)&&oe(be,Re[be]);return ce}function H(M,F){for(;F&&F!=M;){if(F.nodeName.toUpperCase()==="LI"&&F.parentNode==M)return F;F=F.parentNode}}function L(M,F){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=M,this.data=F,this.picked=!1;var U=this,W=M.cm,J=W.getInputField().ownerDocument,ce=J.defaultView||J.parentWindow,oe=this.hints=J.createElement("ul");oe.setAttribute("role","listbox"),oe.setAttribute("aria-expanded","true"),oe.id=this.id;var be=M.cm.options.theme;oe.className="CodeMirror-hints "+be,this.selectedHint=F.selectedHint||0;for(var Re=F.list,ve=0;ve<Re.length;++ve){var se=oe.appendChild(J.createElement("li")),Ie=Re[ve],le=m+(ve!=this.selectedHint?"":" "+y);Ie.className!=null&&(le=Ie.className+" "+le),se.className=le,ve==this.selectedHint&&se.setAttribute("aria-selected","true"),se.id=this.id+"-"+ve,se.setAttribute("role","option"),Ie.render?Ie.render(se,F,Ie):se.appendChild(J.createTextNode(Ie.displayText||T(Ie))),se.hintId=ve}var fe=M.options.container||J.body,A=W.cursorCoords(M.options.alignWithWord?F.from:null),Q=A.left,B=A.bottom,_=!0,P=0,q=0;if(fe!==J.body){var D=["absolute","relative","fixed"].indexOf(ce.getComputedStyle(fe).position)!==-1,Z=D?fe:fe.offsetParent,Ce=Z.getBoundingClientRect(),ze=J.body.getBoundingClientRect();P=Ce.left-ze.left-Z.scrollLeft,q=Ce.top-ze.top-Z.scrollTop}oe.style.left=Q-P+"px",oe.style.top=B-q+"px";var qe=ce.innerWidth||Math.max(J.body.offsetWidth,J.documentElement.offsetWidth),Oe=ce.innerHeight||Math.max(J.body.offsetHeight,J.documentElement.offsetHeight);fe.appendChild(oe),W.getInputField().setAttribute("aria-autocomplete","list"),W.getInputField().setAttribute("aria-owns",this.id),W.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Se=M.options.moveOnOverlap?oe.getBoundingClientRect():new DOMRect,Be=M.options.paddingForScrollbar?oe.scrollHeight>oe.clientHeight+1:!1,$e;setTimeout(function(){$e=W.getScrollInfo()});var et=Se.bottom-Oe;if(et>0){var Ke=Se.bottom-Se.top,Ft=Se.top-(A.bottom-A.top)-2;Oe-Se.top<Ft?(Ke>Ft&&(oe.style.height=(Ke=Ft)+"px"),oe.style.top=(B=A.top-Ke)-q+"px",_=!1):oe.style.height=Oe-Se.top-2+"px"}var Yt=Se.right-qe;if(Be&&(Yt+=W.display.nativeBarWidth),Yt>0&&(Se.right-Se.left>qe&&(oe.style.width=qe-5+"px",Yt-=Se.right-Se.left-qe),oe.style.left=(Q=Math.max(A.left-Yt-P,0))+"px"),Be)for(var Ct=oe.firstChild;Ct;Ct=Ct.nextSibling)Ct.style.paddingRight=W.display.nativeBarWidth+"px";if(W.addKeyMap(this.keyMap=E(M,{moveFocus:function(Ue,vt){U.changeActive(U.selectedHint+Ue,vt)},setFocus:function(Ue){U.changeActive(Ue)},menuSize:function(){return U.screenAmount()},length:Re.length,close:function(){M.close()},pick:function(){U.pick()},data:F})),M.options.closeOnUnfocus){var xt;W.on("blur",this.onBlur=function(){xt=setTimeout(function(){M.close()},100)}),W.on("focus",this.onFocus=function(){clearTimeout(xt)})}W.on("scroll",this.onScroll=function(){var Ue=W.getScrollInfo(),vt=W.getWrapperElement().getBoundingClientRect();$e||($e=W.getScrollInfo());var yt=B+$e.top-Ue.top,Qe=yt-(ce.pageYOffset||(J.documentElement||J.body).scrollTop);if(_||(Qe+=oe.offsetHeight),Qe<=vt.top||Qe>=vt.bottom)return M.close();oe.style.top=yt+"px",oe.style.left=Q+$e.left-Ue.left+"px"}),d.on(oe,"dblclick",function(Ue){var vt=H(oe,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(U.changeActive(vt.hintId),U.pick())}),d.on(oe,"click",function(Ue){var vt=H(oe,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(U.changeActive(vt.hintId),M.options.completeOnSingleClick&&U.pick())}),d.on(oe,"mousedown",function(){setTimeout(function(){W.focus()},20)});var tt=this.getSelectedHintRange();return(tt.from!==0||tt.to!==0)&&this.scrollToActive(),d.signal(F,"select",Re[this.selectedHint],oe.childNodes[this.selectedHint]),!0}L.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var M=this.completion.cm.getInputField();M.removeAttribute("aria-activedescendant"),M.removeAttribute("aria-owns");var F=this.completion.cm;this.completion.options.closeOnUnfocus&&(F.off("blur",this.onBlur),F.off("focus",this.onFocus)),F.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var M=this;this.keyMap={Enter:function(){M.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(M,F){if(M>=this.data.list.length?M=F?this.data.list.length-1:0:M<0&&(M=F?0:this.data.list.length-1),this.selectedHint!=M){var U=this.hints.childNodes[this.selectedHint];U&&(U.className=U.className.replace(" "+y,""),U.removeAttribute("aria-selected")),U=this.hints.childNodes[this.selectedHint=M],U.className+=" "+y,U.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",U.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],U)}},scrollToActive:function(){var M=this.getSelectedHintRange(),F=this.hints.childNodes[M.from],U=this.hints.childNodes[M.to],W=this.hints.firstChild;F.offsetTop<this.hints.scrollTop?this.hints.scrollTop=F.offsetTop-W.offsetTop:U.offsetTop+U.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=U.offsetTop+U.offsetHeight-this.hints.clientHeight+W.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var M=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-M),to:Math.min(this.data.list.length-1,this.selectedHint+M)}}};function G(M,F){if(!M.somethingSelected())return F;for(var U=[],W=0;W<F.length;W++)F[W].supportsSelection&&U.push(F[W]);return U}function O(M,F,U,W){if(M.async)M(F,W,U);else{var J=M(F,U);J&&J.then?J.then(W):W(J)}}function V(M,F){var U=M.getHelpers(F,"hint"),W;if(U.length){var J=function(ce,oe,be){var Re=G(ce,U);function ve(se){if(se==Re.length)return oe(null);O(Re[se],ce,be,function(Ie){Ie&&Ie.list.length>0?oe(Ie):ve(se+1)})}ve(0)};return J.async=!0,J.supportsSelection=!0,J}else return(W=M.getHelper(M.getCursor(),"hintWords"))?function(ce){return d.hint.fromList(ce,{words:W})}:d.hint.anyword?function(ce,oe){return d.hint.anyword(ce,oe)}:function(){}}d.registerHelper("hint","auto",{resolve:V}),d.registerHelper("hint","fromList",function(M,F){var U=M.getCursor(),W=M.getTokenAt(U),J,ce=d.Pos(U.line,W.start),oe=U;W.start<U.ch&&/\w/.test(W.string.charAt(U.ch-W.start-1))?J=W.string.substr(0,U.ch-W.start):(J="",ce=U);for(var be=[],Re=0;Re<F.words.length;Re++){var ve=F.words[Re];ve.slice(0,J.length)==J&&be.push(ve)}if(be.length)return{list:be,from:ce,to:oe}}),d.commands.autocomplete=d.showHint;var X={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),Hf.exports}lb();var Uf={exports:{}},qf;function ub(){return qf||(qf=1,(function(l,u){(function(d){d(ss())})(function(d){var m=/[\w$]+/,y=500;d.registerHelper("hint","anyword",function(v,S){for(var j=S&&S.word||m,k=S&&S.range||y,T=v.getCursor(),E=v.getLine(T.line),H=T.ch,L=H;L&&j.test(E.charAt(L-1));)--L;for(var G=L!=H&&E.slice(L,H),O=S&&S.list||[],V={},X=new RegExp(j.source,"g"),M=-1;M<=1;M+=2)for(var F=T.line,U=Math.min(Math.max(F+M*k,v.firstLine()),v.lastLine())+M;F!=U;F+=M)for(var W=v.getLine(F),J;J=X.exec(W);)F==T.line&&J[0]===G||(!G||J[0].lastIndexOf(G,0)==0)&&!Object.prototype.hasOwnProperty.call(V,J[0])&&(V[J[0]]=!0,O.push(J[0]));return{list:O,from:d.Pos(T.line,L),to:d.Pos(T.line,H)}})})})()),Uf.exports}ub();function cb(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Rm({value:l,onChange:u,language:d}){const m=xe.useRef(null),y=xe.useRef(null),v=xe.useRef(u);return v.current=u,xe.useEffect(()=>{const S=_f.fromTextArea(m.current,{mode:cb(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(k){if(k.somethingSelected())k.execCommand("indentMore");else{const T=k.getOption("indentUnit")-k.getCursor().ch%k.getOption("indentUnit");k.replaceSelection(" ".repeat(T),"end")}},"Shift-Tab":k=>k.execCommand("indentLess"),"Ctrl-Space":k=>k.showHint({hint:_f.hint.anyword,completeSingle:!1})}});S.getInputField().setAttribute("aria-label","Code editor"),S.on("change",k=>{var T;return(T=v.current)==null?void 0:T.call(v,k.getValue())}),y.current=S;const j=typeof ResizeObserver<"u"?new ResizeObserver(()=>S.refresh()):null;return j==null||j.observe(S.getWrapperElement()),()=>{j==null||j.disconnect(),S.toTextArea(),y.current=null}},[d]),xe.useEffect(()=>{const S=y.current;if(S&&S.getValue()!==l){const j=S.getCursor();S.setValue(l??""),S.setCursor(j)}},[l]),c.jsx("div",{className:"code-editor-wrap",children:c.jsx("textarea",{ref:m,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const vd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function db(l){const u=Array.isArray(l)?l:[];return{passed:u.filter(d=>d.passed===!0).length,total:u.length}}function $f(l,u){const d=String(l||"").split(/\r?\n/).find(y=>y.startsWith("PUBLIC_CHECK_RESULTS="));if(!d)throw new Error("Python returned no example-check results. See Console for errors.");const m=JSON.parse(d.slice(21));if(!Array.isArray(m)||m.length!==u.length)throw new Error("Python did not finish every published example.");return u.map((y,v)=>({call:y.call||"Example "+(v+1),expected:String(y.expected??""),received:String(m[v].actual??""),error:String(m[v].error||""),passed:m[v].ok===!0}))}function pb(l,u){return u.map((d,m)=>{var y,v,S,j;return{call:"main("+JSON.stringify(d.args||[])+")",expected:vd(d.expected),received:vd((y=l[m])==null?void 0:y.stdout),error:String(((v=l[m])==null?void 0:v.diagnostics)||((S=l[m])==null?void 0:S.stderr)||""),passed:((j=l[m])==null?void 0:j.success)===!0&&vd(l[m].stdout)===vd(d.expected)}})}function hb(l,u,d){return d(l,u.length).map(y=>({call:u[y.index].call,expected:y.expected,received:y.received,error:y.error,passed:y.passed}))}function Im(l){return(l||[]).map((u,d)=>({call:String(u.call||u.label||"Check "+(d+1)),expected:String(u.expected??"Requirement met"),received:String(u.received??(u.pass===!0||u.passed===!0?"Requirement met":"Not yet met")),error:String(u.error||""),passed:u.pass===!0||u.passed===!0}))}function fb(l){var u;return((u=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:u[1])||null}function oc(l,u){var d,m,y;return u==="python"?fb(l):u==="javascript"?((d=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:d[1])||null:u==="csharp"?((m=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:m[1])||null:u==="java"&&((y=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:y[1])||null}const mb=oc;function eh(l,u,d=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const m=l.every(k=>Number.isInteger(k)),y=l.every(k=>typeof k=="string"),v=l.every(k=>typeof k=="boolean"),S=l.length===0&&d?d:m?"int":y?"string":v?"bool":"double";return"new "+(u==="java"?S==="string"?"String":S==="bool"?"boolean":S:S)+"[]{"+l.map(k=>eh(k,u)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function th(l,u,d){var S;const m=oc(d,u)||oc(l.starter||"",u);if(!m)throw new Error("The checker could not find a function declaration.");const y=l.challengeExamples||[],v=(((S=y[0])==null?void 0:S.input)||[]).map((j,k)=>{const T=y.map(E=>{var H;return(H=E.input)==null?void 0:H[k]}).find(E=>Array.isArray(E)&&E.length>0);return Array.isArray(T)?typeof T[0]=="boolean"?"bool":typeof T[0]=="string"?"string":Number.isInteger(T[0])?"int":"double":null});return y.map(j=>({...j,call:m+"("+(j.input||[]).map((k,T)=>eh(k,u,v[T])).join(", ")+")",expectedLiteral:eh(j.expected,u),expected:String(j.expected)}))}function gb(l,u,d=!0){const m=oc(l,"python")||oc(u.starter||"","python");if(!m)throw new Error("Define the challenge function before running it.");const y=u.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(d?y:y.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(m)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function yb(l,u){const d=th(u,"java",l);if(!d.length)throw new Error("No visible examples are available.");const m=d.map((y,v)=>`try{Object actual=Solution.${y.call}; Object expected=${y.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${v}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${v}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+m.join(`
`)+"}}"}function vb(l,u){const d=String(l||"").split(/\r?\n/).filter(m=>m.startsWith("PLAYGROUND_CASE:"));if(d.length!==u.length)throw new Error("Java did not return all published examples.");return u.map((m,y)=>{const v=d[y],S=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(v);if(!S||Number(S[1])!==y)throw Error("Java returned invalid check data.");return{call:m.call,expected:m.expected,received:S[3],passed:S[2]==="1",error:S[3].startsWith("ERROR ")?S[3]:""}})}function Om({text:l="",checksText:u="",checkRows:d=null,points:m=null,language:y,activeTab:v,onTabChange:S,previewEnabled:j=!1,previewDoc:k="",previewRef:T}){const E=j?["Preview","Console","Checks"]:["Console","Checks"],H=Array.isArray(d),{passed:L,total:G}=db(d),O=Number.isFinite(Number(m))&&m!==null&&G?Number(m)*L/G:null;return c.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[c.jsxs("div",{className:"console-heading",children:[c.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:E.map(V=>c.jsxs("button",{type:"button",role:"tab","aria-selected":v===V,className:v===V?"active":"",onClick:()=>S(V),children:[V==="Console"&&c.jsx(By,{size:14}),V]},V))}),c.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(y)&&c.jsx("div",{className:"console-preview",hidden:!j||v!=="Preview",children:c.jsx("iframe",{ref:T,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:k||"<p>Choose Run to preview your code.</p>"})}),v==="Checks"?c.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:H?c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"check-summary",children:["Checks ",c.jsxs("strong",{children:[L," of ",G," passing"]})]}),c.jsx("p",{className:"check-next",children:L===G?"All published practice checks passed.":"Revise your code, then check again."}),c.jsx("div",{className:"practice-check-cards",children:d.map((V,X)=>c.jsxs("article",{className:"practice-check-card "+(V.passed?"passed":"needs-revision"),children:[c.jsxs("header",{children:[c.jsx("code",{children:V.call||"Example "+(X+1)}),c.jsx("span",{children:V.passed?"Pass":"Review"})]}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Expected"}),c.jsx("dd",{children:c.jsx("pre",{children:V.expected??""})}),c.jsx("dt",{children:V.error?"Error":"Received"}),c.jsx("dd",{children:c.jsx("pre",{children:V.error||V.received||"None"})})]})]},X))}),O!==null&&c.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(O.toFixed(2)),"/",m," practice points · ",L,"/",G," examples passed."]}),c.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):c.jsx("pre",{className:"practice-check-message",children:u})}):v==="Console"?c.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const xb="PUBLIC_CHECK_RESULTS=";function bb(l,u){const d=Array.isArray(l==null?void 0:l.cases)?l.cases:[],m=JSON.stringify(String(u)),y=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+m,"__cases = __json.loads("+y+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+xb+'"+__json.dumps(__results))'].join(`
`)+`
`}function wb(l,u){const d=String(u).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(d),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(u))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(u))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const kb="modulepreload",Sb=function(l){return"/playground/integration/"+l},Kf={},Dm=function(u,d,m){let y=Promise.resolve();if(d&&d.length>0){let S=function(T){return Promise.all(T.map(E=>Promise.resolve(E).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};document.getElementsByTagName("link");const j=document.querySelector("meta[property=csp-nonce]"),k=(j==null?void 0:j.nonce)||(j==null?void 0:j.getAttribute("nonce"));y=S(d.map(T=>{if(T=Sb(T),T in Kf)return;Kf[T]=!0;const E=T.endsWith(".css"),H=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${T}"]${H}`))return;const L=document.createElement("link");if(L.rel=E?"stylesheet":kb,E||(L.as="script"),L.crossOrigin="",L.href=T,k&&L.setAttribute("nonce",k),document.head.appendChild(L),E)return new Promise((G,O)=>{L.addEventListener("load",G),L.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${T}`)))})}))}function v(S){const j=new Event("vite:preloadError",{cancelable:!0});if(j.payload=S,window.dispatchEvent(j),!j.defaultPrevented)throw S}return y.then(S=>{for(const j of S||[])j.status==="rejected"&&v(j.reason);return u().catch(v)})},As="/playground/";async function _b(l,u=()=>{}){if(l==="python"){const{PythonRunner:d}=await Dm(async()=>{const{PythonRunner:m}=await import("./pythonRunner-Camw9ZBH.js");return{PythonRunner:m}},[]);return{kind:"python",instance:new d({onStatus:u})}}if(l==="java"){const{JavaRunner:d}=await import(As+"java-runner.mjs");return{kind:"java",instance:new d(u)}}if(l==="csharp"){const[{CSharpRunner:d},m]=await Promise.all([import(As+"csharp-runner.mjs"),import(As+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new d({onStatus:u}),protocol:m}}throw Error("No code compiler for "+l)}function Cb(l){var u;return((u=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:u[1])||""}const Gf='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',kd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function Tb(l){return l==="html"?`(()=>{
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
  })();`}function jb(l,u,d){var S;const m=(u.challengeExamples||[]).slice(0,d?void 0:1);if(!m.length)throw Error("No public challenge examples were published.");const y=(S=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:S[1];if(!y)throw Error("Define and export the challenge function.");const v=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(m)};
    const results=[];
    try{
      const fn=new Function(${kd(v+"; return "+y+";")})();
      for(const row of cases){
        try{
          const got=fn(...row.input);
          const expected=row.expected;
          const pass=JSON.stringify(got)===JSON.stringify(expected);
          results.push({label:${kd(y)}+'('+row.input.map(x=>JSON.stringify(x)).join(', ')+')',
            expected:JSON.stringify(expected),received:JSON.stringify(got),pass});
        }catch(e){results.push({label:${kd(y)}+'(...)',expected:JSON.stringify(row.expected),
          received:'',error:e.name+': '+e.message,pass:false});}
      }
      if(${d?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function Nb(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function _h({code:l,language:u,lessonId:d,task:m={},token:y,check:v=!0}){if(!y)throw Error("A preview token is required.");if(m.webFiles){const{assembleWebFiles:V}=await Dm(async()=>{const{assembleWebFiles:oe}=await Promise.resolve().then(()=>Ab);return{assembleWebFiles:oe}},[]),X=u==="jsx"?"App.jsx":"script.js";let M=null;u==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((oe,be)=>{const Re=document.createElement("script");Re.src=As+"vendor/learning/jsx.js",Re.onload=oe,Re.onerror=()=>be(Error("React JSX compiler could not load.")),document.head.append(Re)}),M=window.PlaygroundJSX(m.webFiles["App.jsx"]||""));const{html:F,linkedStyle:U,linkedScript:W}=V(m.webFiles,{scriptName:X,scriptOverride:M});if(m.projectId){const{buildProjectPreview:oe}=await import(As+"project-preview.mjs");return oe(F,{token:y,step:m.stepId,projectId:m.projectId,check:v})}const J='<script src="'+As+'vendor/learning/react.js"><\/script>',ce=u==="jsx"?/<\/head\s*>/i.test(F)?F.replace(/<\/head\s*>/i,J+"</head>"):J+F:F;return _h({code:ce,language:"html",lessonId:d,task:{},token:y,check:v})}if(m.projectId){const{buildProjectPreview:V}=await import(As+"project-preview.mjs");return V(l,{token:y,step:m.stepId,projectId:m.projectId,check:v})}const{previewConsoleBridge:S}=await import(As+"console-drawer.mjs"),j=Nb(S(y)),k=kd;let T="",E="",H="";if(m.isChallenge&&u==="javascript")T="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",E=jb(l,m,v);else if(u==="html")T=String(l);else if(u==="css")T="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Gf;else if(u==="javascript")T=Gf,E=l;else if(u==="jsx")T='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((V,X)=>{const M=document.createElement("script");M.src=As+"vendor/learning/jsx.js",M.onload=V,M.onerror=()=>X(Error("React JSX compiler could not load.")),document.head.append(M)}),E=window.PlaygroundJSX(l),H='<script src="'+As+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+u);const L=m.isChallenge&&u==="javascript"?"":Tb(d),G=m.isChallenge&&u==="javascript"?"<script>try{"+E+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+k(E)+');setTimeout(()=>{send("ready");'+(v?L:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',O='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+j+H;if(u==="html"){const V=String(T).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(V)?V.replace(/<head(?:\s[^>]*)?>/i,M=>M+O):"<head>"+O+"</head>"+V)+G}return"<!doctype html><html><head>"+O+"</head><body>"+T+G+"</body></html>"}function Mm({lessonId:l,task:u}){const d=u.storageKey||Sh.code(l),m=!!u.projectDraft,y=!!u.isChallenge,v=xe.useRef(null),S=xe.useRef(null),j=xe.useRef(null),k=xe.useRef(null),T=xe.useRef(null),[E,H]=xe.useState(!1),[L,G]=xe.useState(u.starter||""),[O,V]=xe.useState(u.console||"Press Run to execute the code."),[X,M]=xe.useState(""),[F,U]=xe.useState("Choose Check to run the published examples. Your scores are not recorded."),[W,J]=xe.useState(null),[ce,oe]=xe.useState(""),be=["html","css","javascript","jsx"].includes(u.language),Re=be&&!y,[ve,se]=xe.useState(Re?"Preview":"Console"),[Ie,le]=Xn("designlab:editor-height",300);xe.useEffect(()=>{G(Ad(d)??u.starter??""),V(u.console||"Run to see your program output."),U("Choose Check to run the published examples. Your scores are not recorded."),J(null),se(be&&!y?"Preview":"Console"),oe(""),M("")},[d,u.language,u.starter,u.console,be,y]),xe.useEffect(()=>()=>{var P;clearTimeout(T.current),k.current=null,(P=S.current)==null||P.instance.dispose(),S.current=null},[]),xe.useEffect(()=>{function P(q){var Ce;const D=k.current;if(!D||!j.current||q.source!==j.current.contentWindow||((Ce=q.data)==null?void 0:Ce.token)!==D.token)return;const Z=q.data;Z.kind==="log"&&V(ze=>(ze==="Run to see your program output."?"":ze)+"["+(Z.level||"log")+"] "+Z.text+`
`),Z.kind==="clear"&&V(""),Z.kind==="error"&&(clearTimeout(T.current),V(ze=>ze+"Error: "+Z.text+`
`),D.check&&U("Fix the runtime error, then try Check again."),k.current=null,H(!1),se("Console")),(Z.kind==="checks"||Z.kind==="project-checks")&&(clearTimeout(T.current),J(Im(Z.results||(Z.text?[{label:Z.text,pass:Z.pass}]:[]))),k.current=null,H(!1),se("Checks")),Z.kind==="ready"&&!D.check&&(clearTimeout(T.current),k.current=null,H(!1))}return window.addEventListener("message",P),()=>window.removeEventListener("message",P)},[]);function fe(P){if(!v.current)return;const q=v.current.getBoundingClientRect();le(Math.max(160,Math.min(q.height-120,P.clientY-q.top)))}async function A(){var P;if(!S.current||S.current.language!==u.language){(P=S.current)==null||P.instance.dispose();const q=await _b(u.language,D=>V(D));S.current={...q,language:u.language}}return S.current}async function Q(P){var Z,Ce,ze,qe,Oe,Se,Be,$e,et,Ke,Ft,Yt;const q=u.language;if(q==="java"&&u.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const D=await A();if(q==="python"){let Ct=L;if(y)Ct=gb(L,{...u,starter:u.starter},P);else if(P){if(!((Z=u.cases)!=null&&Z.length))throw Error("This lesson has no published examples.");Ct=bb(u,L)}else u.mode==="function"&&((ze=(Ce=u.cases)==null?void 0:Ce[0])!=null&&ze.call)&&(Ct=wb(L,u.cases[0].call));const xt=await D.instance.run(Ct);if(P){const tt=y?u.challengeExamples.map(Ue=>({call:(mb(L,"python")||"Function")+"("+Ue.input.map(vt=>JSON.stringify(vt)).join(", ")+")",expected:JSON.stringify(Ue.expected)})):u.cases;J($f(xt.output,tt)),V("Python completed the public checks. Review individual results in Checks.")}else if(y){const tt=$f(xt.output,[{call:"First published example",expected:JSON.stringify(u.challengeExamples[0].expected)}]);V(tt[0].error||"First example returned "+tt[0].received+". Expected "+tt[0].expected+".")}else if(u.mode==="function"&&((Oe=(qe=u.cases)==null?void 0:qe[0])!=null&&Oe.call)){const tt=String(xt.output||"").split(`
`).find(Ue=>Ue.startsWith("PLAYGROUND_PREVIEW="));if(tt){const Ue=JSON.parse(tt.slice(19));V(Ue.call+`
Returned: `+Ue.returned+(Ue.printed?`
Printed: `+Ue.printed:""))}else V(xt.output||"No return value was captured. See your code and retry.")}else V(xt.output||(xt.success?"Program finished with no printed output.":"The Python program stopped."))}if(q==="java"){if(u.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(y){const Ct=th(u,"java",L),xt=P?Ct:Ct.slice(0,1),tt=await D.instance.run(yb(L,{...u,challengeExamples:xt}),[]);if(!tt.success)throw Error([tt.stdout,tt.stderr,tt.diagnostics].filter(Boolean).join(`
`));const Ue=vb(tt.stdout,xt);P?J(Ue):V(Ue.map(vt=>vt.call+`
Received: `+vt.received+`
Expected: `+vt.expected).join(`
`))}else{const Ct=P?u.cases||[]:[{args:u.runArgs||((Be=(Se=u.cases)==null?void 0:Se[0])==null?void 0:Be.args)||[]}];if(P&&!Ct.length)throw Error("No public Java examples are available for this exercise.");const xt=[];for(const tt of Ct){const Ue=await D.instance.run(L,tt.args||[]);if(xt.push(Ue),!Ue.success)break}if(P){const tt=pb(xt,Ct);if(xt.length!==Ct.length)throw Error("Java stopped before completing all published examples: "+((($e=xt.at(-1))==null?void 0:$e.diagnostics)||((et=xt.at(-1))==null?void 0:et.stderr)||"Unknown error"));J(tt),V("Java completed the published checks. Review the Checks tab.")}else V([(Ke=xt[0])==null?void 0:Ke.stdout,(Ft=xt[0])==null?void 0:Ft.stderr,(Yt=xt[0])==null?void 0:Yt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if(q==="csharp"){const Ct=D.protocol,xt=y?th(u,"csharp",L).map(ae=>({...ae,call:Array.isArray(ae.expected)?ae.call+".SequenceEqual("+ae.expectedLiteral+")":ae.call,arrayResult:Array.isArray(ae.expected),expected:Array.isArray(ae.expected)?"true":ae.expectedLiteral})):u.cases||[],tt=y?"Solution":Cb(L),Ue=P||y&&xt.length>0;if(P&&!xt.length)throw Error("No public C# examples are available for this exercise.");if(Ue&&!tt)throw Error("The C# checker could not find the public class name.");const vt=P?xt:xt.slice(0,1),yt=Ue?Ct.buildChecks(vt,tt):null,Qe=yt&&vt.some(ae=>ae.arrayResult)?`using System.Linq;
`+yt:yt,ut=await D.instance.run(L,Qe);if(!ut.compiled||!ut.success)throw Error([ut.diagnostics,ut.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(Ue){const ae=hb(ut.stdout,vt,Ct.parseChecks);P?J(ae):V(ae.map(Te=>Te.call+`
Received: `+Te.received+`
Expected: `+Te.expected).join(`
`))}else V(ut.stdout||"C# executed without printed output.")}}async function B(P){if(!E){H(!0),M(""),J(null),P?(U("Running published example checks…"),se("Checks")):(V("Preparing runner…"),se(Re?"Preview":"Console"));try{if(be){const q=crypto.randomUUID();k.current={token:q,check:P};const D=await _h({code:L,language:u.language,lessonId:l,task:u,token:q,check:P});oe(D),V(""),clearTimeout(T.current),T.current=setTimeout(()=>{var Z;((Z=k.current)==null?void 0:Z.token)===q&&(k.current=null,H(!1),V("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),U("Practice timed out. No result was recorded."),j.current&&(j.current.srcdoc="<p>Preview stopped after timeout.</p>"),se("Console"))},7e3)}else await Q(P),H(!1)}catch(q){clearTimeout(T.current),k.current=null,H(!1);const D=String((q==null?void 0:q.message)||q);V(D),se("Console"),P&&U("Check unavailable: "+D)}}}function _(P){if(!E){if(P==="Run"||P==="Check"){B(P==="Check");return}if(P==="Save"){ha(d,L),M("Draft saved in this browser only.");return}P==="Reset"&&(G(u.starter||""),ha(d,u.starter||""),J(null),oe(""),U("Choose Check to run published examples again."),V("Starter code restored. No points were recorded."),se(Re?"Preview":"Console"))}}return c.jsxs("div",{className:"code-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Md,{size:16})," Editor"]}),c.jsxs("div",{className:"right-meta",children:[u.language.toUpperCase()," ",c.jsx(Di,{children:"Live practice"})]})]}),c.jsxs("div",{className:"code-workspace",ref:v,style:{"--editor-height":Ie+"px"},children:[c.jsx(Rm,{value:L,language:u.language,onChange:P=>{G(P),(m||y)&&ha(d,P),M(""),J(null),U("Code changed. Choose Check to run fresh examples.")}}),c.jsx(pc,{axis:"rows",onDrag:fe}),c.jsx(Om,{text:O,checksText:F,checkRows:W,points:u.points,language:u.language,lessonId:l,previewEnabled:Re,previewDoc:ce,previewRef:j,activeTab:ve,onTabChange:se})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[["Run","Check","Reset"].map(P=>c.jsx("button",{type:"button",className:"btn",disabled:E,onClick:()=>_(P),children:P},P)),E&&c.jsx("button",{type:"button",className:"btn",onClick:()=>{var P,q,D;(D=(P=S.current)==null?void 0:(q=P.instance).stop)==null||D.call(q),k.current=null,clearTimeout(T.current),H(!1),V("Execution stopped.")},children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:E,onClick:()=>_("Save"),children:[c.jsx(Td,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[c.jsx(ch,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:X||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Ch=Object.freeze(["index.html","styles.css","script.js"]),Th=Object.freeze(["index.html","styles.css","App.jsx"]),zm=l=>l==="jsx"?Th:Ch,nh=`<!doctype html>
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
</html>`,Eb=`<!doctype html>
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
</html>`;function Fm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function rh(l,u=""){const d=String(u).toLowerCase();return l==="jsx"||d==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(d)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(d)?"script.js":"index.html"}function Lb(l,u="script.js"){if(!l.trim())return"";let d=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(d)){const m=`  <link rel="stylesheet" href="styles.css">
`;d=/<\/head\s*>/i.test(d)?d.replace(/<\/head\s*>/i,m+"</head>"):m+d}if(!d.includes('src="'+u+'"')&&!d.includes("src='"+u+"'")){const m='  <script src="'+u+`" defer><\/script>
`;d=/<\/body\s*>/i.test(d)?d.replace(/<\/body\s*>/i,m+"</body>"):d+`
`+m}return d}function lc(l){let u=String(l??"");const d=[],m=[];return u=u.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(y,v)=>(d.push(v.trim().replace(/^(?: {4}|\t)/gm,"")),"")),u=u.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(y,v,S)=>/\bsrc\s*=/.test(v)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(v)?y:(m.push(S.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":Lb(u.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":d.join(`

`),"script.js":m.join(`

`)}}function Wm(l,u){const d=String(u??"");if(l==="jsx")return{"index.html":Eb,"styles.css":"","App.jsx":d};if(l==="html")return lc(d);if(l==="css")return{"index.html":nh,"styles.css":d,"script.js":""};if(l==="javascript")return{"index.html":nh,"styles.css":"","script.js":d};throw Error("Not a web lesson: "+l)}const Hm=l=>lc(l);function Jo(l,u){if(![...Ch,...Th].includes(u))throw Error("Unknown workspace file");return l+":file:"+u}function Bm({base:l,starters:u,legacy:d,read:m,write:y}){const v=Object.keys(u),S=Object.fromEntries(v.map(E=>[E,m(Jo(l,E))]));if(v.some(E=>S[E]!==null&&S[E]!==void 0))return Object.fromEntries(v.map(E=>[E,S[E]??u[E]??""]));const k=d!=null?u["App.jsx"]!==void 0?{...u,"App.jsx":d}:Object.prototype.hasOwnProperty.call(u,"index.html")&&(u["styles.css"]||u["script.js"])&&/<html|<style|<script/i.test(d)||u["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(d)?lc(d):{...u,[u["index.html"]===nh?u["script.js"]?"script.js":"styles.css":"index.html"]:d}:u,T=Object.fromEntries(v.map(E=>[E,k[E]??u[E]??""]));return v.forEach(E=>y(Jo(l,E),T[E])),T}function Yf(l,u){return String(l??"").replace(new RegExp("</"+u,"gi"),"<\\/"+u)}function Pb(l,{scriptName:u="script.js",scriptOverride:d=null}={}){let m=String((l==null?void 0:l["index.html"])??"");const y=String((l==null?void 0:l["styles.css"])??""),v=String(d===null?(l==null?void 0:l[u])??"":d);let S=!1,j=!1;if(m=m.replace(/<link\b[^>]*>/gi,k=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(k)&&/\brel\s*=\s*["']stylesheet["']/i.test(k)?(S=!0,'<style data-web-file="styles.css">'+Yf(y,"style")+"</style>"):k),m=m.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(k,T)=>{const E=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(T);return E&&E[1].replace(/^\.\//,"")===u?(j=!0,""):k}),j){const k='<script data-web-file="'+u+'">'+Yf(v,"script")+"<\/script>";m=/<\/body\s*>/i.test(m)?m.replace(/<\/body\s*>/i,k+`
</body>`):m+`
`+k}return{html:m,linkedStyle:S,linkedScript:j}}const Ab=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:Th,WEB_FILE_NAMES:Ch,assembleWebFiles:Pb,fileLanguage:Fm,fileNamesFor:zm,initialFocus:rh,lessonStarterFiles:Wm,loadWebDrafts:Bm,projectStarterFiles:Hm,splitEmbeddedWebSource:lc,webDraftKey:Jo},Symbol.toStringTag,{value:"Module"}));function Um({lessonId:l,task:u}){const d=Sh.code(l),m=zm(u.language),y=u.starterFiles||(u.projectDraft?Hm(u.starter):Wm(u.language,u.starter)),[v,S]=xe.useState(()=>Bm({base:d,starters:y,legacy:Ad(d),read:Ad,write:ha})),[j,k]=xe.useState(()=>rh(u.language,u.focus)),[T,E]=xe.useState("Run to render all your linked files together."),[H,L]=xe.useState("Check runs the current published practice requirements."),[G,O]=xe.useState(null),[V,X]=xe.useState(""),[M,F]=xe.useState("Preview"),[U,W]=xe.useState(""),[J,ce]=xe.useState(!1),[oe,be]=Xn("designlab:web-files-editor-height",310),Re=xe.useRef(null),ve=xe.useRef(null),se=xe.useRef(null),Ie=xe.useRef(null);xe.useEffect(()=>{const D=rh(u.language,u.focus);k(m.includes(D)?D:"index.html")},[u.stepId,u.focus,u.language]),xe.useEffect(()=>{const D=Z=>{var qe;const Ce=ve.current;if(!Ce||!Re.current||Z.source!==Re.current.contentWindow||((qe=Z.data)==null?void 0:qe.token)!==Ce.token)return;const ze=Z.data;ze.kind==="log"&&E(Oe=>Oe+(ze.level==="error"?"Error: ":"")+ze.text+`
`),ze.kind==="clear"&&E(""),ze.kind==="error"&&(clearTimeout(se.current),ve.current=null,E(Oe=>Oe+"Error: "+ze.text+`
`),L("Fix the error reported in Console before checking again."),F("Console"),ce(!1)),(ze.kind==="checks"||ze.kind==="project-checks")&&(clearTimeout(se.current),ve.current=null,O(Im(ze.results||(ze.text?[{label:ze.text,pass:ze.pass}]:[]))),F("Checks"),ce(!1)),ze.kind==="ready"&&!Ce.check&&(clearTimeout(se.current),ve.current=null,ce(!1))};return window.addEventListener("message",D),()=>{clearTimeout(se.current),ve.current=null,window.removeEventListener("message",D)}},[]);function le(D){S(Z=>({...Z,[j]:D})),ha(Jo(d,j),D),W(""),O(null),L("Code changed. Check again to update the results.")}function fe(){m.forEach(D=>ha(Jo(d,D),v[D]??"")),W("All three files saved in this browser only.")}function A(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(S({...y}),m.forEach(D=>ha(Jo(d,D),y[D]??"")),O(null),X(""),E("Starter files restored."),L("Run Check to evaluate the restored files."),F("Preview"),W("Starter files restored for this lesson or project."))}function Q(){const D=v[j]||"",Z=document.createElement("a"),Ce=URL.createObjectURL(new Blob([D],{type:"text/plain;charset=utf-8"}));Z.href=Ce,Z.download=j,document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(Ce),2e3)}function B(){clearTimeout(se.current),ve.current=null,ce(!1),X("<p>Preview stopped.</p>"),E("Preview stopped. Check your script for an endless loop."),F("Console")}async function _(D){var Z;if(!J){ce(!0),O(null),W(""),E(""),L(D?"Checking the published requirements…":"Run Check to review the published requirements."),F(D?"Checks":"Preview");try{P();const Ce=crypto.randomUUID();ve.current={token:Ce,check:D};const ze=await _h({language:u.language,code:v[j]||"",lessonId:u.lessonFocus||l,task:{...u,webFiles:v},token:Ce,check:D});if(((Z=ve.current)==null?void 0:Z.token)!==Ce)return;X(ze),clearTimeout(se.current),se.current=setTimeout(()=>{var qe;((qe=ve.current)==null?void 0:qe.token)===Ce&&(B(),L("The preview timed out. No result was recorded."))},7e3)}catch(Ce){clearTimeout(se.current),ve.current=null,ce(!1),E(String((Ce==null?void 0:Ce.message)||Ce)),L("Checks unavailable: "+String((Ce==null?void 0:Ce.message)||Ce)),F("Console")}}}function P(){m.forEach(D=>ha(Jo(d,D),v[D]||""))}function q(D){if(!Ie.current)return;const Z=Ie.current.getBoundingClientRect();be(Math.max(160,Math.min(Z.height-120,D.clientY-Z.top)))}return c.jsxs("div",{className:"code-pane web-files-pane",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(Md,{size:16})," Project files"]}),c.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",u.language==="jsx"?"React":"JavaScript"]})]}),c.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:m.map(D=>c.jsx("button",{type:"button",role:"tab","aria-selected":D===j,className:D===j?"active":"",onClick:()=>k(D),children:D},D))}),c.jsxs("div",{className:"code-workspace",ref:Ie,style:{"--editor-height":oe+"px"},children:[c.jsx(Rm,{value:v[j]??"",language:Fm(j),onChange:le},j),c.jsx(pc,{axis:"rows",onDrag:q}),c.jsx(Om,{text:T,checksText:H,checkRows:G,points:null,language:"html",previewEnabled:!0,previewDoc:V,previewRef:Re,activeTab:M,onTabChange:F})]}),c.jsxs("div",{className:"editor-controls",children:[c.jsxs("div",{children:[c.jsx("button",{type:"button",className:"btn",disabled:J,onClick:()=>_(!1),children:"Run"}),c.jsx("button",{type:"button",className:"btn",disabled:J,onClick:()=>_(!0),children:"Check"}),c.jsx("button",{type:"button",className:"btn",disabled:J,onClick:A,children:"Reset"}),J&&c.jsx("button",{type:"button",className:"btn",onClick:B,children:"Stop"})]}),c.jsxs("div",{children:[c.jsxs("button",{type:"button",className:"btn",disabled:J,onClick:Q,children:[c.jsx(jy,{size:15})," Download file"]}),c.jsxs("button",{type:"button",className:"btn",disabled:J,onClick:fe,children:[c.jsx(Td,{size:15})," Save"]}),c.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[c.jsx(ch,{size:15})," Submit (not enabled)"]})]})]}),c.jsx("div",{className:"editor-note",role:"status",children:U||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function Rb({lessonId:l,onAnswerChecked:u}){const d=hh[l],[m,y]=xe.useState(null),[v,S]=xe.useState(!1);function j(){S(!0),u==null||u({selected:m,correct:m===d.correct})}function k(){y(null),S(!1),u==null||u(null)}return c.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[c.jsxs("div",{className:"tsi-practice-heading",children:[c.jsx(om,{size:20}),c.jsxs("div",{children:[c.jsx("h2",{children:"Try this question"}),c.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),c.jsxs("div",{className:"tsi-question-card",children:[c.jsx("div",{className:"eyebrow",children:"Question"}),c.jsx("h3",{children:d.prompt}),c.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((T,E)=>c.jsxs("label",{className:`tsi-choice ${m===E?"selected":""} ${v&&E===d.correct?"correct":""}`,children:[c.jsx("input",{type:"radio",name:`tsi-${l}`,checked:m===E,disabled:v,onChange:()=>y(E)}),c.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+E)}),c.jsx("span",{children:T})]},T))}),v&&c.jsx("p",{className:"tsi-answer-status",role:"status",children:m===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),c.jsxs("div",{className:"tsi-buttons",children:[c.jsx("button",{className:"btn primary",disabled:m===null||v,onClick:j,children:"Check answer"}),c.jsxs("button",{className:"btn",onClick:k,children:[c.jsx(uh,{size:15})," Try again"]})]})]})]})}function Ib(l){const u=String(l||""),d=u.indexOf("## Learn"),m=u.indexOf("## Practice"),y=u.indexOf("## Reflect");if(d<0||m<d)return{learn:"",reflect:"",questions:[]};const v=u.slice(d,m).trim(),S=u.slice(m,y>m?y:void 0),j=y>m?u.slice(y).trim():"",k=[...S.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(T=>({number:Number(T[1]),prompt:T[2].trim(),options:[...T[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(E=>({letter:E[1],text:E[2].trim()}))}));return{learn:v,reflect:j,questions:k}}function Ob({task:l}){var E;const u=xe.useMemo(()=>Ib(l.markdownSource),[l.markdownSource]),d=((E=l.tsiKey)==null?void 0:E.items)||[],[m,y]=xe.useState({}),[v,S]=xe.useState(!1),j=u.questions.filter(H=>{var L;return m[H.number]===((L=d.find(G=>G.question===H.number))==null?void 0:L.correct)}).length,k=u.questions.length===4&&u.questions.every(H=>H.options.length===4),T=k&&d.length===4&&Object.keys(m).length===4;return k?c.jsxs("div",{className:"tsi-strand-workspace",children:[c.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsx("span",{className:"eyebrow",children:"Practice"}),c.jsx("h2",{children:"Questions"}),c.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),c.jsxs("form",{onSubmit:H=>{H.preventDefault(),T&&S(!0)},children:[u.questions.map(H=>{var G;const L=(G=d.find(O=>O.question===H.number))==null?void 0:G.correct;return c.jsxs("fieldset",{className:"tsi-strand-question",disabled:v,children:[c.jsxs("legend",{children:[c.jsx("span",{className:"tsi-strand-question-number",children:H.number})," ",H.prompt]}),c.jsx("div",{className:"tsi-strand-options",children:H.options.map(O=>c.jsxs("label",{className:["tsi-strand-option",m[H.number]===O.letter?"selected":"",v&&L===O.letter?"correct":""].filter(Boolean).join(" "),children:[c.jsx("input",{type:"radio",name:l.id+"-q"+H.number,value:O.letter,checked:m[H.number]===O.letter,onChange:()=>{y(V=>({...V,[H.number]:O.letter})),S(!1)}}),c.jsx("span",{className:"tsi-strand-letter",children:O.letter}),c.jsx("span",{children:O.text})]},O.letter))}),v&&c.jsx("p",{className:"tsi-strand-question-status",role:"status",children:m[H.number]===L?"Correct":"Review question "+H.number+" on the right"})]},H.number)}),c.jsxs("div",{className:"tsi-strand-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",disabled:!T||v,children:"Check answers"}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>{y({}),S(!1)},children:[c.jsx(uh,{size:15})," Try again"]})]}),c.jsx("p",{className:"tsi-strand-progress",role:"status",children:v?j+" of 4 correct · instructional practice only":Object.keys(m).length+" of 4 answered"})]})]}),c.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsx("span",{className:"eyebrow",children:"Learn"}),c.jsxs("h2",{children:[c.jsx(nl,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(u.learn)}}),c.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[c.jsx("h3",{children:v?c.jsxs(c.Fragment,{children:[c.jsx(ac,{size:18})," Answer explanations"]}):"Review your answers"}),v?u.questions.map(H=>{const L=d.find(G=>G.question===H.number);return c.jsxs("article",{className:"tsi-strand-answer",children:[c.jsxs("h4",{children:["Question ",H.number," · ",m[H.number]===(L==null?void 0:L.correct)?"Correct":"Needs review"]}),c.jsxs("p",{children:["Your choice: ",m[H.number]," · Correct: ",L==null?void 0:L.correct]}),c.jsx("p",{children:(L==null?void 0:L.explanation)||"A worked explanation is not yet available."})]},H.number)}):c.jsxs("p",{children:["Complete all four questions and choose ",c.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),u.reflect&&c.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:Zo(u.reflect)}})]}),c.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):c.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[c.jsx("h2",{children:"Practice questions unavailable"}),c.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const Sd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Db(l){const u=l.answer,d=Number.isInteger(u)?Math.max(1,Math.round(Math.abs(u)*.15)):Math.max(.125,Math.round(Math.abs(u)*.2*1e3)/1e3),m=[u+d,u-d,u+2*d].map(y=>Number(y.toFixed(4)));return m.splice(l.correct_index??0,0,u),m}function Mb(l,u){return Object.fromEntries(Sd.map(([d])=>{const m=l.filter(v=>v.strand===d),y=m.filter(v=>u[v.id]!=="skip"&&Number(u[v.id])===v.answer).length;return[d,{correct:y,total:m.length,level:y===m.length?"Advanced":y>=Math.ceil(m.length*.6)?"Proficient":"Basic"}]}))}function zb({items:l=[],profiles:u=[]}){var X,M,F;const[d,m]=xe.useState({}),[y,v]=xe.useState(""),[S,j]=xe.useState(""),[k,T]=Xn("designlab:tsi-math-placement",{}),[E,H]=xe.useState(null),L=xe.useMemo(()=>Sd.map(([U,W])=>({id:U,title:W,items:l.filter(J=>J.strand===U)})),[l]),G=E||((X=k.diagnostic)==null?void 0:X.latest)&&k.diagnostic.latest.placement;function O(U){U.preventDefault();const W=u.find(J=>J.code===y.trim().toUpperCase());if(!W){j("Enter a valid MATH01–MATH81 study code.");return}T(J=>({...J,code:W.code,levels:W.levels})),j("Study code applied in this browser. It does not enroll you in a class.")}function V(U){if(U.preventDefault(),l.some(oe=>d[oe.id]===void 0)){j("Answer or select Not sure for every question.");return}const W=Mb(l,d),J=Object.fromEntries(Object.entries(W).map(([oe,be])=>[oe,be.level])),ce={at:new Date().toISOString(),placement:W,levels:J,answers:d};T(oe=>{var be;return{...oe,levels:J,diagnostic:{first:((be=oe.diagnostic)==null?void 0:be.first)||ce,latest:ce}}}),H(W),j("Your recommended starting levels are ready. Results are stored in this browser only.")}return c.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[c.jsx("h2",{children:"Find your starting point"}),c.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),c.jsxs("form",{onSubmit:O,className:"tsi-code-entry",children:[c.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),c.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:y,onChange:U=>v(U.target.value)}),c.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!k.code&&c.jsxs("p",{role:"status",children:["Current code: ",c.jsx("strong",{children:k.code}),"."," ","Recommended levels: ",Sd.map(([U,W])=>{var J;return W+": "+((J=k.levels)==null?void 0:J[U])}).join(" · ")]}),c.jsxs("form",{onSubmit:V,children:[c.jsx("h3",{children:"Take the diagnostic"}),c.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),L.map((U,W)=>c.jsxs("section",{className:"tsi-diagnostic-strand surface-card",children:[c.jsxs("div",{className:"tsi-strand-panel-heading",children:[c.jsxs("span",{className:"eyebrow",children:["Strand ",W+1," of ",L.length]}),c.jsx("h3",{children:U.title}),c.jsxs("p",{children:[U.items.length," questions · Choose an answer or Not sure for each question."]})]}),U.items.map((J,ce)=>c.jsxs("fieldset",{className:"tsi-strand-question",children:[c.jsxs("legend",{children:[c.jsx("span",{className:"tsi-strand-question-number",children:ce+1})," ",J.prompt]}),c.jsxs("div",{className:"tsi-strand-options",children:[Db(J).map((oe,be)=>c.jsxs("label",{className:"tsi-strand-option "+(d[J.id]===String(oe)?"selected":""),children:[c.jsx("input",{type:"radio",name:J.id,value:oe,checked:d[J.id]===String(oe),onChange:()=>m(Re=>({...Re,[J.id]:String(oe)}))}),c.jsx("span",{className:"tsi-strand-letter",children:String.fromCharCode(65+be)}),c.jsx("span",{children:oe})]},be)),c.jsxs("label",{className:"tsi-strand-option tsi-diagnostic-unsure "+(d[J.id]==="skip"?"selected":""),children:[c.jsx("input",{type:"radio",name:J.id,value:"skip",checked:d[J.id]==="skip",onChange:()=>m(oe=>({...oe,[J.id]:"skip"}))}),c.jsx("span",{className:"tsi-strand-letter",children:"?"}),c.jsx("span",{children:"Not sure"})]})]})]},J.id))]},U.id)),c.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!S&&c.jsx("p",{role:"status",children:S}),G&&c.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[c.jsx("h3",{children:"Recommended starting levels"}),Sd.map(([U,W])=>c.jsxs("p",{children:[c.jsxs("strong",{children:[W,": ",G[U].level]})," (",G[U].correct," of ",G[U].total," correct)"]},U)),c.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((M=k.diagnostic)!=null&&M.first)&&!!((F=k.diagnostic)!=null&&F.latest)&&c.jsxs("p",{children:["First attempt: ",new Date(k.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(k.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Fb({lessonId:l,course:u,unit:d,unitNumber:m,isCompleted:y=!1,assignment:v=null,grade:S=null,onToggleCompleted:j,readOnlyMode:k=!1}){var M;const T=ga(u,l),E=xe.useRef(null),[H,L]=xe.useState(null),[G,O]=Xn("designlab:left-width",420);function V(F){if(!E.current)return;const U=E.current.getBoundingClientRect();O(Math.max(260,Math.min(U.width-340,F.clientX-U.left)))}const X=u.id==="tsi-math";return X&&l==="tsi-20d-d01"&&((M=u.diagnosticItems)!=null&&M.length)?c.jsxs("div",{className:"lesson-screen",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),c.jsx("h1",{children:T.title}),c.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),c.jsx(zb,{items:u.diagnosticItems,profiles:u.locatorProfiles})]}):T!=null&&T.ready?X&&T.tsiStrandDraft?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:T,unit:d,unitNumber:m,isTsi:!0,isCompleted:y,assignment:v,grade:S,onToggleCompleted:j,readOnlyMode:k}),c.jsx(Ob,{task:T})]}):T.language==="text"&&!X?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:T,unit:d,unitNumber:m,isTsi:!1,isCompleted:y,assignment:v,grade:S,onToggleCompleted:j,readOnlyMode:k}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(T.markdownSource)}})]})]}):X&&!hh[l]?c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:T,unit:d,unitNumber:m,isTsi:!0,isCompleted:y,assignment:v,grade:S,onToggleCompleted:j,readOnlyMode:k}),c.jsxs("section",{className:"surface-card published-reading",children:[c.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(T.markdownSource)}})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:T,unit:d,unitNumber:m,isTsi:X,isCompleted:y,assignment:v,grade:S,onToggleCompleted:j,readOnlyMode:k}),c.jsxs("div",{className:`workspace-grid ${X?"tsi-workspace":""}`,ref:E,style:{"--left-pane":`${G}px`},children:[X?c.jsx(Rb,{lessonId:l,onAnswerChecked:L}):c.jsx(kf,{lessonId:l,task:T}),c.jsx(pc,{axis:"columns",onDrag:V}),X?c.jsx(kf,{lessonId:l,task:T,isTsi:!0,tsiAnswer:H}):u.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(T.language)?c.jsx(Um,{lessonId:l,task:{...T,lessonFocus:l}},l):c.jsx(Mm,{lessonId:l,task:T})]})]}):c.jsxs("div",{className:"lesson-screen",children:[c.jsx(Vu,{task:T,unit:d,unitNumber:m,isTsi:X,isCompleted:y,assignment:v,grade:S,onToggleCompleted:j,readOnlyMode:k}),c.jsxs("section",{className:"lesson-content-pending surface-card",children:[c.jsx("h2",{children:"Lesson coming soon"}),c.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function Wb({course:l,project:u,stepId:d,openProject:m}){const y=u.steps||[],v=Math.max(0,y.findIndex(G=>G.id===d)),S=y[v],j=xe.useRef(null),[k,T]=Xn("designlab:project-left-width",430),E="project:"+l.id+":"+u.id,H={id:E,title:u.title,language:u.language||"html",starter:u.starter||"",starterFiles:u.starterFiles||null,challenge:u.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:u.id,stepId:S.id,focus:S.focus};function L(G){if(!j.current)return;const O=j.current.getBoundingClientRect();T(Math.max(260,Math.min(O.width-340,G.clientX-O.left)))}return c.jsxs("div",{className:"lesson-screen project-workspace",children:[c.jsxs("header",{className:"lesson-header",children:[c.jsxs("div",{className:"eyebrow",children:["Published guided project · ",y.length," steps"]}),c.jsx("h1",{children:u.title}),c.jsx("p",{children:u.summary}),c.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),c.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:y.map((G,O)=>c.jsxs("button",{type:"button","aria-current":O===v?"step":void 0,className:O===v?"btn primary":"btn",onClick:()=>m(l.id,u.id,G.id),children:[O+1,". ",G.title]},G.id))}),c.jsxs("div",{className:"workspace-grid",ref:j,style:{"--left-pane":k+"px"},children:[c.jsxs("section",{className:"instructions-pane project-reading",children:[c.jsx("div",{className:"pane-header",children:c.jsxs("strong",{children:["Step ",v+1,": ",S.title]})}),c.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",c.jsx("code",{children:"styles.css"})," or ",c.jsx("code",{children:"script.js"})," instead. Keep the file links in",c.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),c.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(S.markdownSource)}})]}),c.jsx(pc,{axis:"columns",onDrag:L}),c.jsx(Um,{lessonId:E,task:H})]}),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[v>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>m(l.id,u.id,y[v-1].id),children:[c.jsx(Dd,{size:16})," ",c.jsxs("span",{children:["Prev: ",y[v-1].title]})]}),v<y.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>m(l.id,u.id,y[v+1].id),children:[c.jsxs("span",{children:["Next: ",y[v+1].title]})," ",c.jsx(ni,{size:16})]})]})]})}function Hb({courseId:l,lessonId:u,projectId:d,projectStepId:m,availableCourses:y=rs,openCourse:v,openProject:S,openChallenges:j,completedLessons:k=[],assignments:T=[],grades:E=[],onToggleLessonComplete:H,courseColors:L={},onSetCourseColor:G,onResetCourseColor:O,readOnlyMode:V=!1}){const X=y.find(ce=>ce.id===l)||y[0];if(X.id==="test-prep")return c.jsx(ev,{lessonId:u,openCourse:v,completedLessons:k,onToggleLessonComplete:H});const M=(X.projects||[]).find(ce=>ce.id===d),F=ic(X),U=X.units.findIndex(ce=>is(ce).includes(u)),W=X.units[U],J=F.indexOf(u);return c.jsx("div",{className:"course-layout integrated-course","data-course":X.id,children:c.jsxs("div",{className:"course-main",children:[c.jsxs("div",{className:"course-breadcrumb",children:[c.jsx("button",{onClick:()=>v(null),children:"All playgrounds"}),c.jsx(ni,{size:14}),u||M?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>v(X.id),children:X.label}),c.jsx(ni,{size:14}),c.jsx("span",{className:"breadcrumb-unit-name",title:W?Rs(W):"",children:W?Rs(W):(M==null?void 0:M.title)||""})]}):c.jsx("span",{children:X.label})]}),M?c.jsx(Wb,{course:X,project:M,stepId:m,openProject:S},M.id):u?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"lesson-mobile-navigation",children:[c.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),c.jsx("select",{id:"lesson-select",value:u,onChange:ce=>v(X.id,ce.target.value),children:X.units.map((ce,oe)=>c.jsx("optgroup",{label:`Unit ${oe+1} · ${Rs(ce)}`,children:is(ce).map(be=>c.jsx("option",{value:be,children:to(X,be)},be))},ce.id))})]}),c.jsx(Fb,{lessonId:u,course:X,unit:W,unitNumber:U+1,isCompleted:k.includes(u),assignment:T.find(ce=>ce.id==="lesson:"+u),grade:E.find(ce=>ce.id==="lesson:"+u),onToggleCompleted:()=>H==null?void 0:H(u),readOnlyMode:V},u),c.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[J>0&&c.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>v(X.id,F[J-1]),children:[c.jsx(Dd,{size:16,"aria-hidden":"true"}),c.jsxs("span",{children:["Prev: ",to(X,F[J-1])]})]}),J>=0&&J<F.length-1&&c.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>v(X.id,F[J+1]),children:[c.jsxs("span",{children:["Next: ",to(X,F[J+1])]}),c.jsx(ni,{size:16,"aria-hidden":"true"})]})]})]}):c.jsx(Qy,{course:X,openCourse:v,openProject:S,openChallenges:j,completedLessons:k,assignments:T,grades:E,courseColors:L,onSetCourseColor:G,onResetCourseColor:O,readOnlyMode:V})]})})}const Xo=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Bb=l=>Xo.find(u=>u.id===l),qm=l=>{var u;return(u=Bb(l))==null?void 0:u.period},Ub=[...new Set(Xo.map(l=>l.period))].sort((l,u)=>Number(l)-Number(u)),qb=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],el=l=>{var u,d,m;return((u=l.teacherName)==null?void 0:u.trim())||((d=l.sheetName)==null?void 0:d.trim())||((m=l.studentName)==null?void 0:m.trim())||l.github},Vf=l=>(l.teacherName||l.sheetName||l.studentName||"").trim().split(/\s+/),$m=(l,u,d)=>{const m=y=>d==="github"?y.github.toLowerCase():d==="first"?(Vf(y)[0]||y.github).toLowerCase():(Vf(y).at(-1)||y.github).toLowerCase();return m(l).localeCompare(m(u),void 0,{numeric:!0})||l.github.localeCompare(u.github)},$b=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Kb({sectionId:l,onSectionChange:u,setupOpen:d,onToggleSetup:m,sections:y=Xo,readOnlyMode:v=!1}){return c.jsxs("div",{className:"teacher-toolbar",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:l,onChange:S=>u(S.target.value),children:y.map(S=>c.jsxs("option",{value:S.id,children:[S.name," · ",tm(S.course)]},S.id))})]}),!v&&c.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":d,"aria-controls":"teacher-section-setup",onClick:m,children:[d?c.jsx(Fd,{size:16}):c.jsx(dh,{size:16}),d?"Close section setup":"Section setup"]})]})}const Gb=[["overview","Class overview",lh],["curriculum","Curriculum",nl],["journals","Journals",oh]];function Yb({tab:l,onChange:u}){return c.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Gb.map(([d,m,y])=>c.jsxs("button",{type:"button",role:"tab","aria-selected":l===d,className:l===d?"active":"",onClick:()=>u(d),children:[c.jsx(y,{size:16}),m]},d))})}function Jf({section:l}){const u=(l==null?void 0:l.join_code)||(l==null?void 0:l.joinCode);return c.jsxs("div",{className:"section-banner",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Selected section"}),c.jsxs("h2",{children:[l.name," ",c.jsxs("span",{className:"muted",children:["· ",tm(l.course)]})]})]}),u?c.jsxs(Di,{children:["Join code: ",u]}):c.jsx(Di,{children:"Join code unavailable"})]})}function Vb({students:l,week:u,setWeek:d,availableWeeks:m=qb,readOnlyMode:y=!1}){const v=xe.useMemo(()=>[...l].sort((S,j)=>(j.weekly[u]||0)-(S.weekly[u]||0)),[l,u]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Weekly points"}),c.jsx("p",{children:y?"Server-verified score improvements · Monday–Sunday in Central Time":"Mock verified points · Monday–Sunday in Central Time"})]}),c.jsxs("label",{children:["Week",c.jsx("select",{value:u,onChange:S=>d(S.target.value),children:m.map(S=>c.jsx("option",{value:S.key,children:S.label},S.key))})]})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Weekly points"}),c.jsx("th",{children:y?"Improved assignments":"Sample assignments"})]})}),c.jsx("tbody",{children:v.map(S=>{var j;return c.jsxs("tr",{children:[c.jsxs("th",{children:[el(S),c.jsxs("small",{children:["@",S.github]})]}),c.jsx("td",{children:c.jsx("strong",{children:S.weekly[u]||0})}),c.jsx("td",{children:y?((j=S.weeklyAssignments)==null?void 0:j[u])||0:S.assignments.filter(k=>k.score!==null).length})]},S.id)})})]})})]})}function Km({label:l,value:u,onChange:d}){return c.jsxs("label",{children:[l,c.jsx("select",{value:u,onChange:m=>d(m.target.value),children:$b.map(([m,y])=>c.jsx("option",{value:m,children:y},m))})]})}const Jb=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function Xb({student:l,week:u,readOnlyMode:d=!1}){const[m,y]=xe.useState(null),v=l.assignments,S=v.filter(L=>L.status==="Completed"||L.status==="Practice completed").length,j=v.filter(L=>L.score!==null).length,k=v.reduce((L,G)=>{const O=G.week||"undated";return(L[O]||(L[O]=[])).push(G),L},{}),T=Object.keys(k).sort((L,G)=>G.localeCompare(L)),E=L=>{var G;return Number((G=l.weekly)==null?void 0:G[L])||0},H=L=>{if(L==="undated")return"Earlier / undated activity";const G=new Date(L+"T12:00:00Z"),O=new Date(G);O.setUTCDate(O.getUTCDate()+6);const V=X=>X.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return V(G)+" – "+V(O)+", "+O.getUTCFullYear()};return c.jsxs("div",{className:"expanded-student",children:[c.jsxs("div",{className:"expanded-header",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Assignment history"}),c.jsx("p",{className:"muted",children:d?`Verified submission history for ${el(l)}. Practice checks are not grades.`:`Sample records for ${el(l)}. No student data is loaded.`})]}),c.jsx(Di,{tone:"success",children:d?Object.values(l.weekly||{}).reduce((L,G)=>L+(Number(G)||0),0)+" total verified pts":(l.weekly[u]||0)+" verified pts this week"})]}),c.jsxs("div",{className:"mini-stats",children:[c.jsxs("span",{children:[c.jsx("strong",{children:S})," completed"]}),c.jsxs("span",{children:[c.jsx("strong",{children:j})," graded"]}),c.jsxs("span",{children:[c.jsx("strong",{children:v.length})," tracked"]})]}),(d?T:["all"]).map(L=>c.jsxs("details",{open:d?void 0:!0,className:d?"panel":"assignment-history-all",style:d?{marginTop:12,padding:12}:{},children:[c.jsxs("summary",{style:d?{cursor:"pointer",fontWeight:600}:{display:"none"},children:[H(L)," · ",(k[L]||[]).filter(G=>G.status==="Completed"||G.status==="Practice completed").length," completed · ",L==="undated"?"No weekly points":E(L)+" verified pts"]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table assignment-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Assignment"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Score"}),c.jsx("th",{children:"Updated"}),c.jsx("th",{children:"Action"})]})}),c.jsx("tbody",{children:(d?k[L]:v).map(G=>{const O=m===G.id;return c.jsxs(xe.Fragment,{children:[c.jsxs("tr",{children:[c.jsxs("th",{children:[G.name,c.jsx("small",{children:G.type})]}),c.jsx("td",{children:c.jsx(Di,{tone:Jb(G.status),children:G.status})}),c.jsx("td",{children:G.score===null?"—":`${G.score} / ${G.possible}`}),c.jsx("td",{children:G.submitted}),c.jsx("td",{children:c.jsx("button",{className:"small-link",onClick:()=>y(O?null:G.id),children:O?"Hide details":"View details"})})]}),O&&c.jsx("tr",{className:"receipt-preview",children:c.jsxs("td",{colSpan:"5",children:[c.jsx("strong",{children:d?"Submission details":"Sample assignment detail"}),c.jsx("p",{children:d?"Submitted code and protected receipts are not loaded in this read-only integration.":"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},G.id)})})]})})]},L))]})}function Qb({students:l,week:u,sort:d,setSort:m,expanded:y,setExpanded:v,readOnlyMode:S=!1,historyLoading:j=!1,onExpand:k}){return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Section roster & activity"}),c.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),c.jsx(Km,{label:"Sort students by",value:d,onChange:m})]}),c.jsx("div",{className:"overflow",children:c.jsxs("table",{className:"data-table roster-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Activity signal"}),c.jsx("th",{children:"Current activity"}),c.jsx("th",{children:"Practice"}),c.jsx("th",{children:"Hand-ins"})]})}),c.jsx("tbody",{children:l.map(T=>{const E=y===T.id;return c.jsxs(xe.Fragment,{children:[c.jsxs("tr",{className:E?"selected-row":"",children:[c.jsxs("th",{children:[c.jsxs("button",{className:"student-name-button","aria-expanded":E,onClick:()=>{v(E?null:T.id),E||k==null||k(T.id)},children:[E?c.jsx(lm,{size:16}):c.jsx(ni,{size:16})," ",el(T)]}),c.jsxs("small",{children:["@",T.github,!S&&T.sections.length>1?" · Sheet periods 1, 3":""]})]}),c.jsx("td",{children:c.jsx(Di,{tone:T.status==="Active now"?"success":"",children:T.status})}),c.jsx("td",{children:T.current}),c.jsx("td",{children:S?T.practiceCount+" checks":T.assignments.filter(H=>H.status.includes("Completed")).length+" complete"}),c.jsx("td",{children:S?T.handinCount===null?"Expand to view":T.handinCount:T.assignments.filter(H=>H.score!==null).length})]}),E&&c.jsx("tr",{className:"expansion-row",children:c.jsx("td",{colSpan:"5",children:j?c.jsx("p",{role:"status",children:"Loading assignment history…"}):c.jsx(Xb,{student:T,week:u,readOnlyMode:S})})})]},T.id)})})]})})]})}function Gm(l,u){return l+"::"+u}function Zb(l,u=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[d,m,y]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(d,m-1,y)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const S=Number(l.points);if(!Number.isFinite(S)||!Number.isInteger(S)||S<0||S>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const j=new Set(u.map(T=>T.id)),k=[...new Set(l.studentIds||[])];if(!k.length||k.some(T=>!j.has(T)))return"Select at least one student from this section."}return null}function e0(l,u=[]){const d=Zb(l,u);if(d)throw new Error(d);return{id:Gm(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function t0(l,u){return[...(Array.isArray(l)?l:[]).filter(d=>d.id!==u.id),u]}function Up(l,u,d){return(l||[]).find(m=>m.id===Gm(u,d))||null}const n0="/playground/data/computer-science-1/course.json",tc=Sr("computer-science-1");function r0({section:l,students:u=[],assignments:d=[],setAssignments:m,readOnlyMode:y=!1}){const[v,S]=xe.useState(null),[j,k]=xe.useState("loading"),[T,E]=xe.useState(tc.lessons[0]),[H,L]=xe.useState("section"),[G,O]=xe.useState([]),[V,X]=xe.useState(""),[M,F]=xe.useState(""),[U,W]=xe.useState("starter"),[J,ce]=xe.useState("");xe.useEffect(()=>{const _=new AbortController;return fetch(n0,{signal:_.signal,cache:"no-store"}).then(P=>{if(!P.ok)throw new Error("Curriculum unavailable");return P.json()}).then(P=>{if(!Array.isArray(P.lessons)||!P.lessons.length)throw new Error("Unexpected curriculum response");S(tl(P)),k("live")}).catch(P=>{P.name!=="AbortError"&&k("snapshot")}),()=>_.abort()},[]);const oe=xe.useMemo(()=>v?{...tc,...v}:tc,[v]),be=oe.lessons,Re=be.includes(T)?T:be[0],ve=ga(oe,Re),se=be.reduce((_,P)=>{var q;return _+(Number((q=ga(oe,P))==null?void 0:q.points)||0)},0),Ie=tc.lessons.includes(Re),le=(l==null?void 0:l.course)==="computer-science-1",fe=Up(d,l==null?void 0:l.id,Re),A=u.filter(_=>_.sections.includes(l==null?void 0:l.id));xe.useEffect(()=>{var P;const _=Up(d,l==null?void 0:l.id,Re);L((_==null?void 0:_.scope)||"section"),O((_==null?void 0:_.studentIds)||[]),X((_==null?void 0:_.dueDate)||""),F(String((_==null?void 0:_.points)??((P=ga(oe,Re))==null?void 0:P.points)??0)),ce(""),W("starter")},[Re,l==null?void 0:l.id]);function Q(_){_.preventDefault();try{const P=e0({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:Re,scope:H,studentIds:G,dueDate:V,points:M},A);if(y)throw Error("Assignment changes are disabled in this integration test.");m==null||m(q=>t0(q,P)),ce("Preview assignment saved in this browser. No students were notified.")}catch(P){ce(P.message)}}function B(){if(y){ce("Assignment changes are disabled in this integration test.");return}m==null||m(_=>(_||[]).filter(P=>P.id!==(fe==null?void 0:fe.id))),ce("Preview assignment cleared. Live student records were not changed.")}return c.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsxs("h2",{children:[c.jsx(nl,{size:18})," Computer Science I curriculum"]}),c.jsxs("p",{children:[oe.units.length," original units · ",be.length," lessons · ",se," available lesson points"]})]}),c.jsx("span",{className:"curriculum-source",role:"status",children:j==="live"?"Published course • current":j==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),c.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),c.jsxs("div",{className:"curriculum-grid",children:[c.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:oe.units.map((_,P)=>c.jsxs("details",{open:is(_).includes(Re)||P===0,children:[c.jsxs("summary",{children:["Unit ",cc(_,P+1)," · ",Rs(_)]}),c.jsx("div",{children:is(_).map(q=>c.jsxs("button",{type:"button",className:q===Re?"curriculum-lesson selected":"curriculum-lesson","aria-current":q===Re?"true":void 0,onClick:()=>E(q),children:[to(oe,q),Up(d,l==null?void 0:l.id,q)&&c.jsx("small",{children:" · Assigned in preview"})]},q))})]},_.id))}),c.jsxs("article",{className:"curriculum-lesson-preview",children:[c.jsx("div",{className:"eyebrow",children:"Published lesson"}),c.jsx("h3",{children:ve.title}),c.jsx("p",{children:ve.summary||ve.challenge||"Practice the skills from this unit."}),c.jsxs("div",{className:"curriculum-meta",children:[c.jsxs("span",{children:[ve.points??0," published points"]}),c.jsxs("span",{children:[ve.mode==="function"?"Function":"Script"," · Python"]})]}),c.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":U==="starter",className:U==="starter"?"active":"",onClick:()=>W("starter"),children:"Starter code"}),c.jsxs("button",{type:"button",role:"tab","aria-selected":U==="solution",className:U==="solution"?"active":"",onClick:()=>W("solution"),children:[c.jsx(tf,{size:14})," Solution"]})]}),U==="starter"?c.jsx("pre",{className:"curriculum-code",children:c.jsx("code",{children:ve.starter||"# No starter code provided"})}):c.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[c.jsx(tf,{size:20}),c.jsxs("div",{children:[c.jsx("strong",{children:"Teacher-only solutions"}),c.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),Ie?c.jsxs("a",{className:"btn",href:Od(tc,Re),children:["Open lesson in React preview ",c.jsx(um,{size:14})]}):c.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),c.jsxs("div",{className:"curriculum-assignment-editor",children:[c.jsx("h4",{children:"Assign lesson"}),le?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"curriculum-assignment-warning",children:y?"Read-only integration: assignments cannot be saved or changed.":"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),c.jsx("form",{onSubmit:Q,className:"curriculum-assignment-form",children:c.jsxs("fieldset",{disabled:y,style:{border:0,padding:0,margin:0,minWidth:0},children:[c.jsxs("label",{children:["Assign to",c.jsxs("select",{value:H,onChange:_=>L(_.target.value),children:[c.jsxs("option",{value:"section",children:["Whole class · ",A.length," students"]}),c.jsx("option",{value:"selected",children:"Selected students"})]})]}),H==="selected"&&c.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[c.jsx("legend",{children:"Choose students"}),A.length?A.map(_=>c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:G.includes(_.id),onChange:P=>O(q=>P.target.checked?[...q,_.id]:q.filter(D=>D!==_.id))}),c.jsx("span",{children:el(_)})]},_.id)):c.jsx("p",{children:"No students are enrolled in this section."})]}),c.jsxs("div",{className:"curriculum-assignment-fields",children:[c.jsxs("label",{children:["Due date",c.jsx("input",{type:"date",required:!0,value:V,onChange:_=>X(_.target.value)})]}),c.jsxs("label",{children:["Points",c.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:M,onChange:_=>F(_.target.value)})]})]}),c.jsxs("div",{className:"curriculum-assignment-actions",children:[c.jsx("button",{type:"submit",className:"btn primary",children:fe?"Update preview assignment":"Save preview assignment"}),fe&&c.jsx("button",{type:"button",className:"btn",onClick:B,children:"Remove assignment"})]})]})}),fe&&c.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",fe.scope==="section"?"whole class":fe.studentIds.length+" selected students"," · ","Due ",fe.dueDate," · ",fe.points," points"]}),J&&c.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:J})]}):c.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}const qp=()=>({teacher:new Map,sheet:new Map,directory:[],loading:!0,error:""}),Ym=l=>String(l||"").trim().replace(/^@/,"").toLowerCase();function i0(l=[],u=[],d=[]){const m=new Map((Array.isArray(l)?l:[]).filter(k=>{var T;return k.user_id&&((T=k.display_name)==null?void 0:T.trim())}).map(k=>[k.user_id,k.display_name.trim()])),y=new Map((Array.isArray(u)?u:[]).filter(k=>{var T;return k.user_id&&((T=k.name)==null?void 0:T.trim())}).map(k=>[k.user_id,k])),v=Array.isArray(d)?d:[],S=new Map(v.filter(k=>k.user_id).map(k=>[k.user_id,k])),j=new Map(v.filter(k=>k.github_account).map(k=>[Ym(k.github_account),k]));return{teacher:m,sheet:y,directory:v,byId:S,byGithub:j,loading:!1,error:""}}function Vm(l,u){var j,k,T,E;const d=u.user_id||u.id,m=((j=l.byId)==null?void 0:j.get(d))||((k=l.byGithub)==null?void 0:k.get(Ym(u.github_account||u.github)))||{},y=m.user_id||d,v=u.github_account||m.github_account||u.github||"",S=(T=l.sheet)==null?void 0:T.get(y);return{teacherName:((E=l.teacher)==null?void 0:E.get(y))||"",sheetName:(S==null?void 0:S.name)||"",studentName:m.student_name||u.student_name||u.display_name||"",github:v}}function Jm(l){const[u,d]=xe.useState(qp);return xe.useEffect(()=>{if((l==null?void 0:l.status)!=="ready"){d(qp());return}let m=!0;return Promise.all([l.rpc("playground_teacher_names"),l.rpc("playground_teacher_sheet_roster"),l.rpc("playground_teacher_directory")]).then(([y,v,S])=>{m&&d(i0(y,v,S))}).catch(()=>{m&&d({...qp(),loading:!1,error:"Names and account directory could not be loaded."})}),()=>{m=!1}},[l]),u}const s0="/playground/integration/teacher-bridge.js";function $p(l,u=Sr("computer-science-1")){const d=String(l||""),m=[d,d.replace(/^lesson:/,""),d.split("/").at(-1)];for(const y of m){const v=ga(u,y);if(v!=null&&v.title)return v.title}return d.replace(/^(lesson|challenge|project):/,"").split("/").at(-1).replace(/^\\d+-/,"").replace(/[-_]/g," ").replace(/\\b\\w/g,y=>y.toUpperCase())}function a0(l){if(!l||Number.isNaN(Date.parse(l)))return null;const u=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(l)).filter(m=>m.type!=="literal").map(m=>[m.type,m.value])),d=new Date(u.year+"-"+u.month+"-"+u.day+"T12:00:00Z");return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function o0(l){const u=new Date(l+"T12:00:00Z");if(Number.isNaN(u.getTime()))return l;const d=new Date(u);d.setUTCDate(d.getUTCDate()+6);const m=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return m.format(u)+" – "+m.format(d)+", "+d.getUTCFullYear()}function l0(){const l=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date).filter(d=>d.type!=="literal").map(d=>[d.type,d.value])),u=new Date(l.year+"-"+l.month+"-"+l.day+"T12:00:00Z");return u.setUTCDate(u.getUTCDate()-(u.getUTCDay()+6)%7),u.toISOString().slice(0,10)}function u0(){var B;const[l,u]=xe.useState(null),[d,m]=xe.useState("loading"),[y,v]=xe.useState(""),[S,j]=xe.useState("overview"),[k,T]=xe.useState(null),[E,H]=xe.useState(null),[L,G]=xe.useState(null),[O,V]=xe.useState(l0),[X,M]=xe.useState("last"),[F,U]=xe.useState(null),[W,J]=xe.useState(null),[ce,oe]=xe.useState("");xe.useEffect(()=>{let _=!0;return fetch("/playground/data/computer-science-1/course.json",{cache:"no-store"}).then(P=>{if(!P.ok)throw Error("catalog");return P.json()}).then(P=>{_&&G(tl(P))}).catch(()=>{}),()=>{_=!1}},[]),xe.useEffect(()=>{let _=!0;return import(s0).then(P=>P.teacherReadOnlyClient()).then(P=>{var q;_&&(u(P),m(P.status),P.status==="ready"&&v(((q=P.classes[0])==null?void 0:q.id)||""))}).catch(()=>{_&&m("unavailable")}),()=>{_=!1}},[]),xe.useEffect(()=>{if(!y||(l==null?void 0:l.status)!=="ready")return;let _=!0;return T(null),H(null),U(null),J(null),oe(""),Promise.all([l.rpc("playground_teacher_snapshot",{p_class:y}),l.rpc("playground_teacher_weekly_points",{p_class:y})]).then(([P,q])=>{_&&(T(P),H(q))}).catch(()=>{_&&oe("Could not load this section. No records were changed.")}),()=>{_=!1}},[y,l]),xe.useEffect(()=>{if(!F||!y||!l)return;let _=!0;return J(null),l.rpc("playground_teacher_student_history",{p_class:y,p_student:F}).then(P=>{_&&J(P)}).catch(()=>{_&&J({error:"Student history unavailable"})}),()=>{_=!1}},[F,y,l]);const be=Jm(l),Re=(B=l==null?void 0:l.classes)==null?void 0:B.find(_=>_.id===y),ve=((k==null?void 0:k.roster)||[]).filter(_=>_.status==="approved"),se=((k==null?void 0:k.roster)||[]).filter(_=>_.status==="pending"),Ie=[...new Set([O,...((E==null?void 0:E.weeks)||[]).map(_=>_.week_start)])].sort().reverse(),le=new Map(((E==null?void 0:E.weeks)||[]).filter(_=>_.week_start===O).map(_=>[_.user_id,_])),fe=new Map(((k==null?void 0:k.checks)||[]).map(_=>[_.user_id,_])),A=ve.map(_=>{var P;return{id:_.user_id,...Vm(be,_),sections:[y],status:"Not connected",current:"—",weekly:Object.fromEntries(((E==null?void 0:E.weeks)||[]).filter(q=>q.user_id===_.user_id).map(q=>[q.week_start,Number(q.points)||0])),weeklyAssignments:Object.fromEntries(((E==null?void 0:E.weeks)||[]).filter(q=>q.user_id===_.user_id).map(q=>[q.week_start,Number(q.assignments)||0])),assignments:F===_.user_id&&W&&!W.error?c0(W,L):[],practiceCount:Number((P=fe.get(_.user_id))==null?void 0:P.checks)||0,handinCount:F===_.user_id&&W&&!W.error?(W.submissions||[]).length:null}}).sort((_,P)=>$m(_,P,X)),Q=Re?{id:Re.id,name:Re.name,course:Re.course_id,join_code:Re.join_code}:null;return c.jsxs("div",{className:"main-content teacher-screen",children:[c.jsx(ph,{eyebrow:"Your classroom · Connected integration",actions:c.jsx(Di,{children:"Authorized teacher · Read only"}),children:"Teacher dashboard"}),c.jsx("p",{className:"page-subtitle",children:"The original React dashboard layout, connected to your existing authorized class data. No student records can be changed here."}),d==="loading"?c.jsx("p",{role:"status",children:"Checking your teacher session…"}):d==="signed-out"?c.jsxs("p",{children:["Sign in through the ",c.jsx("a",{href:"/playground/",children:"current Playground"}),", then return here."]}):d==="forbidden"?c.jsx("p",{role:"alert",children:"This account does not have teacher access."}):d!=="ready"?c.jsx("p",{role:"alert",children:"Teacher data is unavailable."}):c.jsxs(c.Fragment,{children:[c.jsx(Kb,{sectionId:y,sections:l.classes.map(_=>({id:_.id,name:_.name,course:_.course_id,join_code:_.join_code})),onSectionChange:_=>{v(_),U(null)},readOnlyMode:!0}),c.jsx(Yb,{tab:S,onChange:_=>{j(_),U(null)}}),ce||be.error?c.jsx("p",{role:"alert",children:ce||be.error}):!k||!E||be.loading?c.jsx("p",{role:"status",children:"Loading section information and verified names…"}):c.jsxs(c.Fragment,{children:[S==="overview"&&c.jsxs(c.Fragment,{children:[c.jsx(Jf,{section:Q}),c.jsxs("div",{className:"stat-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:ve.length}),c.jsx("span",{children:"Enrolled students"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:se.length}),c.jsx("span",{children:"Pending enrollment requests"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("strong",{children:ve.reduce((_,P)=>{var q;return _+(Number((q=le.get(P.user_id))==null?void 0:q.points)||0)},0)}),c.jsx("span",{children:"Verified weekly points"})]})]}),c.jsx(Vb,{students:A,week:O,setWeek:V,readOnlyMode:!0,availableWeeks:Ie.map(_=>({key:_,label:o0(_)}))}),c.jsx(Qb,{students:A,week:O,sort:X,setSort:M,expanded:F,setExpanded:U,readOnlyMode:!0,historyLoading:!!(F&&!W)})]}),S==="curriculum"&&c.jsxs(c.Fragment,{children:[c.jsx(Jf,{section:Q}),(Q==null?void 0:Q.course)==="computer-science-1"?c.jsx(r0,{section:Q,students:A,assignments:[],readOnlyMode:!0}):c.jsxs("section",{className:"panel",children:[c.jsxs("h2",{children:[c.jsx(nl,{size:18})," Curriculum"]}),c.jsx("p",{children:"Course-specific assignments will be connected after authorization and content verification."})]})]}),S==="journals"&&c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"section-heading",children:c.jsxs("h2",{children:[c.jsx(oh,{size:18})," Weekly journal submissions"]})}),c.jsx("p",{children:"Journal access will be connected to authorized section records. No fictional student submissions are shown."})]})]})]})]})}function c0(l,u){const d=new Map;for(const m of l.practice||[]){const y=m.activity_id;if(!y)continue;const v=d.get(y)||{id:y,name:$p(y,u||Sr("computer-science-1")),type:m.activity_kind||"Lesson",status:"Started",score:null,possible:null,submitted:"—"};m.status==="completed"?v.status="Practice completed":m.status==="needs_revision"&&v.status==="Started"&&(v.status="Needs revision"),v.submitted=m.updated_at||v.submitted,d.set(y,v)}for(const m of l.submissions||[]){const y=m.activity_id;if(!y)continue;const v=d.get(y)||{id:y,name:$p(y,u||Sr("computer-science-1")),type:m.activity_kind||"Lesson",status:"Submitted",score:null,possible:null,submitted:"—"};m.grade_status==="graded"&&Number.isFinite(Number(m.points))&&Number.isFinite(Number(m.possible))?((v.score===null||Number(m.points)>v.score)&&(v.score=Number(m.points),v.possible=Number(m.possible)),v.status="Completed"):v.score===null&&(v.status="Submitted"),(!v.submitted||v.submitted==="—"||Date.parse(m.submitted_at)>Date.parse(v.submitted))&&(v.submitted=m.submitted_at),d.set(y,v)}for(const m of l.checks||[]){const y=m.activity_id;y&&(d.has(y)||d.set(y,{id:y,name:$p(y,u||Sr("computer-science-1")),type:"Practice",status:"Started",score:null,possible:null,submitted:m.last_check||"—"}))}return[...d.values()].sort((m,y)=>Date.parse(y.submitted||0)-Date.parse(m.submitted||0)).map(m=>({...m,week:a0(m.submitted),submitted:m.submitted==="—"?"—":new Date(m.submitted).toLocaleDateString("en-US")}))}function d0({children:l}){return c.jsx("div",{className:"empty",children:l})}function p0({student:l,isEditing:u,onToggleEdit:d,onDone:m,onPatch:y,readOnlyMode:v=!1}){const S=el(l);return c.jsxs("article",{className:"account-card",children:[c.jsxs("div",{className:"account-row",children:[c.jsx("span",{className:"avatar",children:S.slice(0,1).toUpperCase()}),c.jsxs("div",{className:"account-identity",children:[c.jsx("h3",{children:S}),c.jsxs("small",{children:["@",l.github]})]}),!v&&c.jsx("button",{className:"icon-button","aria-label":`Edit ${S}`,onClick:d,children:u?c.jsx(Fd,{size:17}):c.jsx(dh,{size:17})})]}),c.jsxs("div",{className:"account-footer",children:[c.jsx(Di,{tone:l.teacherName||l.sheetName?"success":"",children:l.teacherName?"Teacher name":l.sheetName?"Sheet matched":l.studentName?"Signup name":"GitHub fallback"}),!v&&l.sections.map(j=>c.jsxs(Di,{children:["Period ",qm(j)]},j))]}),u&&c.jsxs("div",{className:"account-edit",children:[c.jsxs("label",{children:["Google Sheet name",c.jsx("input",{value:l.sheetName||"",onChange:j=>y({sheetName:j.target.value||null})})]}),c.jsxs("label",{children:["Student-provided backup",c.jsx("input",{value:l.studentName||"",onChange:j=>y({studentName:j.target.value})})]}),c.jsx("button",{className:"btn",onClick:m,children:"Done"})]})]})}function h0({students:l,sort:u,setSort:d,patchStudent:m,readOnlyMode:y=!1}){const[v,S]=Xn("designlab:period-filter","all"),[j,k]=xe.useState(""),[T,E]=xe.useState(null),H=xe.useMemo(()=>{const L=j.toLowerCase();return l.filter(G=>(v==="all"||G.sections.some(O=>qm(O)===v))&&[el(G),G.github,G.studentName].some(O=>O.toLowerCase().includes(L))).sort((G,O)=>$m(G,O,u))},[l,v,u,j]);return c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"section-heading",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Accounts"}),c.jsx("p",{children:"Teacher name, then connected Sheet, signup name, and GitHub fallback."})]}),c.jsxs(Di,{children:[H.length," accounts"]})]}),c.jsxs("div",{className:"filters",children:[c.jsxs("label",{children:[c.jsx(cm,{size:16})," ",c.jsx("input",{"aria-label":"Search accounts",value:j,placeholder:"Search name or GitHub username",onChange:L=>k(L.target.value)})]}),c.jsxs("label",{children:["Class period",c.jsxs("select",{value:v,onChange:L=>S(L.target.value),children:[c.jsx("option",{value:"all",children:"All periods"}),Ub.map(L=>c.jsx("option",{children:L},L))]})]}),c.jsx(Km,{label:"Sort",value:u,onChange:d})]}),c.jsx("p",{className:"info-text",children:y?"Authorized account directory · read-only. Account edits remain in the current Playground.":"Sample account edits are saved only in browser storage."}),c.jsx("div",{className:"account-grid",children:H.map(L=>c.jsx(p0,{student:L,isEditing:T===L.id,onToggleEdit:()=>E(T===L.id?null:L.id),onDone:()=>E(null),onPatch:G=>m==null?void 0:m(L.id,G),readOnlyMode:y},L.id))}),!H.length&&c.jsx(d0,{children:"No accounts match those filters."})]})}const f0="/playground/integration/teacher-bridge.js";function m0(){const[l,u]=xe.useState(null),[d,m]=xe.useState("loading"),[y,v]=xe.useState("last");xe.useEffect(()=>{let k=!0;return import(f0).then(T=>T.teacherReadOnlyClient()).then(T=>{k&&(u(T),m(T.status))}).catch(()=>{k&&m("unavailable")}),()=>{k=!1}},[]);const S=Jm(l),j=S.directory.map(k=>({id:k.user_id,...Vm(S,k),sections:(k.memberships||[]).filter(T=>T.status==="approved").map(T=>T.class_id)}));return c.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[c.jsx(ph,{eyebrow:"Global management · Connected integration",actions:c.jsx(Di,{children:"Authorized · Read only"}),children:"Admin dashboard"}),c.jsx("p",{className:"page-subtitle",children:"Existing React account management layout with teacher-authorized account records. No changes can be made in this integration."}),d==="loading"?c.jsx("p",{role:"status",children:"Checking access…"}):d!=="ready"?c.jsx("p",{role:"alert",children:d==="signed-out"?"Sign in through the current Playground first.":"Account directory is unavailable or access was denied."}):S.loading?c.jsx("p",{role:"status",children:"Loading account directory…"}):S.error?c.jsx("p",{role:"alert",children:S.error}):c.jsx(h0,{students:j,sort:y,setSort:v,readOnlyMode:!0})]})}const g0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Xf={response:"",type:"essay",aiUse:"",aiDetails:""};function y0({submissions:l,setSubmissions:u}){var ve;const[d,m]=Xn("designlab:journal-section",Xo[0].id),y=Xo.find(se=>se.id===d)||Xo[0],v=Gp.filter(se=>se.sections.includes(y.id)),[S,j]=Xn("designlab:journal-student",Gp[0].id),k=v.find(se=>se.id===S)||v[0],T=xe.useMemo(()=>Lg(),[]),[E,H]=Xn("designlab:journal-week",T[0]),L=T.includes(E)?E:T[0],[G,O]=Xn("designlab:journal-drafts",{}),[V,X]=xe.useState(""),[M,F]=xe.useState(!1),U=Pg(y.id,k.id,L),W=G[U]||Xf,J=l.filter(se=>se.studentId===k.id&&se.sectionId===y.id&&se.week===L),ce=J.at(-1),oe=W.response.trim()?W.response.trim().split(/\s+/).length:0;function be(se,Ie){O(le=>({...le,[U]:{...le[U]||Xf,[se]:Ie}})),X("Draft saved in this browser.")}function Re(se){se.preventDefault();const Ie=Ag(W);if(Ie){X(Ie);return}const le={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:y.id,studentId:k.id,studentName:`${k.first} ${k.last}`,courseId:y.course,week:L,response:W.response.trim(),type:W.type,aiUse:W.aiUse,aiDetails:W.aiDetails.trim(),submittedAt:new Date().toISOString()};u(fe=>[...fe,le]),X("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return c.jsxs("div",{className:"main-content journal-screen",children:[c.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),c.jsxs("header",{className:"journal-heading",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"Weekly Journals"}),c.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),c.jsxs("span",{className:"chip",children:[c.jsx(dm,{size:14})," Local demo only"]})]}),c.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[c.jsxs("label",{children:["Class section",c.jsx("select",{value:y.id,onChange:se=>{m(se.target.value),X("")},children:Xo.map(se=>{var Ie;return c.jsxs("option",{value:se.id,children:[se.name," · ",(Ie=Sr(se.course))==null?void 0:Ie.label]},se.id)})})]}),c.jsxs("label",{children:["Preview as student",c.jsx("select",{value:k.id,onChange:se=>{j(se.target.value),X("")},children:v.map(se=>c.jsxs("option",{value:se.id,children:[se.first," ",se.last," (sample)"]},se.id))})]}),c.jsxs("label",{children:["Journal week",c.jsx("select",{value:L,onChange:se=>{H(se.target.value),X("")},children:T.map(se=>c.jsxs("option",{value:se,children:["Week of ",rc(se)]},se))})]})]}),c.jsxs("section",{className:"journal-card journal-editor-card",children:[c.jsxs("div",{className:"journal-section-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[(ve=Sr(y.course))==null?void 0:ve.label," · ",y.name]}),c.jsxs("h2",{children:["Journal · Week of ",rc(L)]})]}),c.jsx("span",{className:`journal-status-pill ${ce?"submitted":""}`,children:ce?"Submitted":"Not submitted"})]}),c.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),c.jsxs("form",{onSubmit:Re,children:[c.jsxs("label",{children:["Response type",c.jsxs("select",{value:W.type,onChange:se=>be("type",se.target.value),children:[c.jsx("option",{value:"essay",children:"Essay or written reflection"}),c.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),c.jsxs("div",{className:"journal-prompt",children:[c.jsx("strong",{children:"Sample prompt"}),c.jsx("p",{children:g0[W.type]})]}),c.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),c.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:W.response,onChange:se=>be("response",se.target.value)}),c.jsxs("div",{className:"journal-writing-meta",children:[c.jsxs("span",{children:[oe," words"]}),c.jsxs("span",{children:[c.jsx(Td,{size:13})," Autosaved in this browser"]})]}),c.jsxs("div",{className:"journal-integrity",children:[c.jsxs("label",{children:["AI-use declaration",c.jsxs("select",{value:W.aiUse,onChange:se=>be("aiUse",se.target.value),children:[c.jsx("option",{value:"",children:"Choose one"}),c.jsx("option",{value:"none",children:"I did not use AI-generated content"}),c.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),c.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),W.aiUse==="disclosed"&&c.jsxs("label",{children:["Describe the AI assistance",c.jsx("textarea",{rows:"3",value:W.aiDetails,onChange:se=>be("aiDetails",se.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),c.jsxs("div",{className:"journal-actions",children:[c.jsxs("button",{type:"button",className:"btn",onClick:()=>{X("Draft saved in this browser.")},children:[c.jsx(Td,{size:15})," Save draft"]}),c.jsxs("button",{type:"submit",className:"btn submit",children:[c.jsx(ch,{size:15})," Demo submit"]})]}),c.jsx("p",{role:"status",className:"journal-submit-status",children:V})]}),c.jsxs("div",{className:"journal-bottom-row",children:[c.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),c.jsxs("button",{type:"button",className:"btn",onClick:()=>F(se=>!se),children:[c.jsx(Ry,{size:15})," ",M?"Hide history":`Submission history (${J.length})`]})]}),M&&c.jsx("div",{className:"journal-history",children:J.length?J.map(se=>c.jsxs("details",{className:"journal-history-item",children:[c.jsxs("summary",{children:[c.jsx(ac,{size:16})," Submitted ",new Date(se.submittedAt).toLocaleString()," · ",se.type]}),c.jsx("div",{className:"journal-history-answer",children:se.response})]},se.id)):c.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const v0=`# Attendance Percentage

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
`,x0=`# Competition Leaderboard Ranks

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
`,b0=`# Confidence Pool Total

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
`,w0=`# Count Matching Events

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
`,k0=`# Longest Winning Streak

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
`,S0=`# Format a Score Line

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
`,_0=`# Second Largest Distinct Value

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
`,C0=`# Sum Positive Values

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
`,T0=`# Count Pairs With Target Sum

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
`,j0=`# Temperature Alert

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
`,N0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,E0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,L0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,P0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,A0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,R0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,I0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,O0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,D0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,M0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,z0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,F0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,W0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,H0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,B0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,U0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,q0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,$0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,K0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,G0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Y0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,V0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,J0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,X0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Q0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Z0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,ew=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,tw=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,nw=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,rw=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,iw=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,sw=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,aw=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,ow=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,lw=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,uw=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,cw=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,dw=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,pw=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,hw=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,fw="attendance-percent",mw=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],gw={challengeId:fw,cases:mw},yw="competition-ranks",vw=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],xw={challengeId:yw,cases:vw},bw="confidence-total",ww=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],kw={challengeId:bw,cases:ww},Sw="count-matches",_w=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],Cw={challengeId:Sw,cases:_w},Tw="longest-win-streak",jw=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],Nw={challengeId:Tw,cases:jw},Ew="score-line",Lw=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],Pw={challengeId:Ew,cases:Lw},Aw="second-largest-distinct",Rw=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],Iw={challengeId:Aw,cases:Rw},Ow="sum-positives",Dw=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],Mw={challengeId:Ow,cases:Dw},zw="target-pairs",Fw=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Ww={challengeId:zw,cases:Fw},Hw="temperature-alert",Bw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Uw={challengeId:Hw,cases:Bw},qw=["python","java","javascript","csharp"],$w=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Xm={languages:qw,challenges:$w},Kw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":v0,"../challenge-bank/problems/competition-ranks/problem.md":x0,"../challenge-bank/problems/confidence-total/problem.md":b0,"../challenge-bank/problems/count-matches/problem.md":w0,"../challenge-bank/problems/longest-win-streak/problem.md":k0,"../challenge-bank/problems/score-line/problem.md":S0,"../challenge-bank/problems/second-largest-distinct/problem.md":_0,"../challenge-bank/problems/sum-positives/problem.md":C0,"../challenge-bank/problems/target-pairs/problem.md":T0,"../challenge-bank/problems/temperature-alert/problem.md":j0}),Gw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":N0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":E0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":L0,"../challenge-bank/problems/attendance-percent/starters/python.py":P0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":A0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":R0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":I0,"../challenge-bank/problems/competition-ranks/starters/python.py":O0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":D0,"../challenge-bank/problems/confidence-total/starters/Solution.java":M0,"../challenge-bank/problems/confidence-total/starters/javascript.js":z0,"../challenge-bank/problems/confidence-total/starters/python.py":F0,"../challenge-bank/problems/count-matches/starters/Solution.cs":W0,"../challenge-bank/problems/count-matches/starters/Solution.java":H0,"../challenge-bank/problems/count-matches/starters/javascript.js":B0,"../challenge-bank/problems/count-matches/starters/python.py":U0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":q0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":$0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":K0,"../challenge-bank/problems/longest-win-streak/starters/python.py":G0,"../challenge-bank/problems/score-line/starters/Solution.cs":Y0,"../challenge-bank/problems/score-line/starters/Solution.java":V0,"../challenge-bank/problems/score-line/starters/javascript.js":J0,"../challenge-bank/problems/score-line/starters/python.py":X0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":Q0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":Z0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":ew,"../challenge-bank/problems/second-largest-distinct/starters/python.py":tw,"../challenge-bank/problems/sum-positives/starters/Solution.cs":nw,"../challenge-bank/problems/sum-positives/starters/Solution.java":rw,"../challenge-bank/problems/sum-positives/starters/javascript.js":iw,"../challenge-bank/problems/sum-positives/starters/python.py":sw,"../challenge-bank/problems/target-pairs/starters/Solution.cs":aw,"../challenge-bank/problems/target-pairs/starters/Solution.java":ow,"../challenge-bank/problems/target-pairs/starters/javascript.js":lw,"../challenge-bank/problems/target-pairs/starters/python.py":uw,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":cw,"../challenge-bank/problems/temperature-alert/starters/Solution.java":dw,"../challenge-bank/problems/temperature-alert/starters/javascript.js":pw,"../challenge-bank/problems/temperature-alert/starters/python.py":hw}),Yw=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":gw,"../challenge-bank/problems/competition-ranks/examples.json":xw,"../challenge-bank/problems/confidence-total/examples.json":kw,"../challenge-bank/problems/count-matches/examples.json":Cw,"../challenge-bank/problems/longest-win-streak/examples.json":Nw,"../challenge-bank/problems/score-line/examples.json":Pw,"../challenge-bank/problems/second-largest-distinct/examples.json":Iw,"../challenge-bank/problems/sum-positives/examples.json":Mw,"../challenge-bank/problems/target-pairs/examples.json":Ww,"../challenge-bank/problems/temperature-alert/examples.json":Uw}),Bd=Xm.challenges,ih=Xm.languages,Qm={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Vw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Zm(l){return Bd.find(u=>u.id===l)||null}function Jw(l){return Kw[`../challenge-bank/problems/${l}/problem.md`]??""}function Xw(l,u){return Gw[`../challenge-bank/problems/${l}/starters/${Vw[u]}`]??""}function Qw(l){var u;return((u=Yw[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:u.cases)??[]}const Zw=[...new Set(Bd.flatMap(l=>l.tags))].sort((l,u)=>l.localeCompare(u)),ek=["Very Easy","Easy","Medium","Hard"];function tk({query:l="",topic:u="all",difficulty:d="all",course:m="all",language:y="all"}={}){const v=l.trim().toLocaleLowerCase();return Bd.filter(S=>(!v||[S.title,S.summary,...S.tags].join(" ").toLowerCase().includes(v))&&(u==="all"||S.tags.includes(u))&&(d==="all"||S.difficulty===d)&&(m==="all"||S.suggestedCourses.includes(m))&&(y==="all"||S.languages.includes(y))).slice().sort((S,j)=>S.title.localeCompare(j.title))}function Qf(l,u){var v;const[d,...m]=l.split(":"),y=m.join(":");return d==="lesson"?to(Sr(u),y):((v=Zm(y))==null?void 0:v.title)||y}function nk({grades:l=[],assignments:u=[],completedLessons:d=[],readOnlyMode:m=!1,weeklyPoints:y=[],accountStatus:v="disabled"}){const[S,j]=xe.useState("all"),k=S==="all"?l:l.filter(O=>O.courseId===S),T=Yp(k),E=m?S==="all"||S==="computer-science-1"?y:[]:ty(k),H=E[0],L=rs.filter(O=>!m||O.id==="computer-science-1").map(O=>({...O,...Yp(l.filter(V=>V.courseId===O.id))})),G=u.filter(O=>S==="all"||O.courseId===S).map(O=>({...O,status:Id(O.id,{assignments:u,grades:l,completedLessons:d})})).filter(O=>O.status.state==="assigned"||O.status.state==="overdue").sort((O,V)=>O.dueDate.localeCompare(V.dueDate));return c.jsxs("div",{className:"main-content grades-screen",children:[c.jsxs("header",{className:"grades-heading",children:[c.jsxs("div",{children:[c.jsx("div",{className:"eyebrow",children:"Your progress"}),c.jsx("h1",{children:"Grades"}),c.jsx("p",{children:m?"Verified Computer Science I scores and weekly improvements. Assignments are not yet connected here.":"See your earned points, weekly scores, and work still due."})]}),c.jsxs("label",{className:"grades-filter",children:["Course",c.jsxs("select",{value:S,onChange:O=>j(O.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.map(O=>c.jsx("option",{value:O.id,children:O.label},O.id))]})]})]}),c.jsx("p",{className:"grades-preview-note",children:m?v==="signed-in"?"Verified Computer Science I results from your existing Playground account. Submissions and grading remain in the current Playground.":"Sign in on the current Playground to see your own verified results here. No changes are made from this test build.":"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),c.jsxs("div",{className:"grades-summary",children:[c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(Sy,{size:19}),c.jsx("span",{children:"Points earned"}),c.jsxs("strong",{children:[T.earned," ",c.jsxs("small",{children:["/ ",T.possible]})]}),c.jsx("p",{children:T.percent===null?"No graded work yet":`${T.percent}% of graded points`})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(pm,{size:19}),c.jsx("span",{children:"Graded activities"}),c.jsx("strong",{children:T.count}),c.jsx("p",{children:"Lessons and challenges"})]}),c.jsxs("div",{className:"grades-stat surface-card",children:[c.jsx(ky,{size:19}),c.jsx("span",{children:"Most recent scored week"}),c.jsx("strong",{children:H?m?`+${H.earned}`:`${H.earned} / ${H.possible}`:"—"}),c.jsx("p",{children:H?`Week of ${rc(H.week)}`:"No scores yet"})]})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:m?"Weekly verified point increases":"Weekly scores"}),E.length?c.jsx("div",{className:"grades-weeks",children:E.map(O=>c.jsxs("div",{className:"grades-week",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:["Week of ",rc(O.week)]}),c.jsxs("small",{children:[O.count," scored ",O.count===1?"activity":"activities"]})]}),c.jsxs("div",{className:"grades-week-score",children:[c.jsx("strong",{children:m?`+${O.earned} pts`:`${O.earned} / ${O.possible} pts`}),!m&&c.jsx("progress",{value:O.earned,max:Math.max(O.possible,1),"aria-label":`Week of ${rc(O.week)}: ${O.earned} of ${O.possible} points`})]})]},O.week))}):c.jsx("p",{children:"No graded work in this selection."})]}),S==="all"&&c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"By course"}),c.jsx("div",{className:"grades-course-list",children:L.map(O=>c.jsxs("div",{className:"grades-course-row","data-course":O.id,children:[c.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),c.jsx("strong",{children:O.label}),c.jsx("span",{children:O.count?`${O.earned} / ${O.possible} pts`:"No grades yet"})]},O.id))})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Scored work"}),k.length?c.jsx("div",{className:"grades-entries",children:k.slice().sort((O,V)=>V.gradedAt.localeCompare(O.gradedAt)).map(O=>{var V;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Qf(O.id,O.courseId)}),c.jsxs("small",{children:[c.jsx(nl,{size:13}),((V=Sr(O.courseId))==null?void 0:V.label)||O.courseId," · ",Cd(O.gradedAt)]})]}),c.jsxs("strong",{children:[O.earned," / ",O.possible," pts"]})]},O.id)})}):c.jsx("p",{children:"No scored lessons or challenges yet."})]}),c.jsxs("section",{className:"grades-panel surface-card",children:[c.jsx("h2",{children:"Still to complete"}),m?c.jsx("p",{children:"Assignment and due-date data will be connected in the next integration stage."}):G.length?c.jsx("div",{className:"grades-entries",children:G.map(O=>{var V;return c.jsxs("div",{className:"grades-entry",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Qf(O.id,O.courseId)}),c.jsx("small",{children:((V=Sr(O.courseId))==null?void 0:V.label)||O.courseId})]}),c.jsxs("div",{className:"grades-due-meta",children:[c.jsx("span",{className:`assignment-status ${O.status.state}`,children:O.status.state==="overdue"?"Overdue":"Assigned"}),c.jsxs("small",{children:["Due ",Cd(O.dueDate)]})]})]},O.id)})}):c.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function rk({filterCourse:l,onSelect:u,onBrowseCourse:d,grades:m=[]}){const[y,v]=xe.useState(""),[S,j]=xe.useState("all"),[k,T]=xe.useState("all"),[E,H]=xe.useState("all"),L=l||"all",G=xe.useMemo(()=>tk({query:y,difficulty:S,topic:k,language:E,course:L}),[y,S,k,E,L]),O=()=>{v(""),j("all"),T("all"),H("all"),d(null)};return c.jsxs("div",{className:"main-content challenge-bank-screen",children:[c.jsxs("header",{className:"challenge-bank-intro",children:[c.jsxs("div",{className:"eyebrow",children:[c.jsx(zd,{size:15})," Shared programming practice"]}),c.jsx("h1",{children:"Challenge Bank"}),c.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),c.jsxs("div",{className:"challenge-summary",children:[c.jsx("strong",{children:Bd.length})," original challenges · ",c.jsx("strong",{children:"4"})," languages · ",c.jsx("strong",{children:"1"})," shared library"]})]}),c.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[c.jsxs("div",{className:"filter-title",children:[c.jsx(Ey,{size:17}),c.jsx("strong",{children:"Find a challenge"}),c.jsxs("button",{type:"button",className:"filter-clear",onClick:O,children:[c.jsx(Fd,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"challenge-filter-grid",children:[c.jsxs("label",{className:"challenge-search-label",children:["Search",c.jsxs("span",{className:"challenge-search",children:[c.jsx(cm,{size:16}),c.jsx("input",{type:"search",value:y,placeholder:"Problem, skill, or topic",onChange:V=>v(V.target.value)})]})]}),c.jsxs("label",{children:["Course view",c.jsxs("select",{value:L,onChange:V=>d(V.target.value==="all"?null:V.target.value),children:[c.jsx("option",{value:"all",children:"All courses"}),rs.filter(V=>V.id!=="tsi-math").map(V=>c.jsx("option",{value:V.id,children:V.label},V.id))]})]}),c.jsxs("label",{children:["Difficulty",c.jsxs("select",{value:S,onChange:V=>j(V.target.value),children:[c.jsx("option",{value:"all",children:"Any difficulty"}),ek.map(V=>c.jsx("option",{value:V,children:V},V))]})]}),c.jsxs("label",{children:["Topic",c.jsxs("select",{value:k,onChange:V=>T(V.target.value),children:[c.jsx("option",{value:"all",children:"Any topic"}),Zw.map(V=>c.jsx("option",{value:V,children:V},V))]})]}),c.jsxs("label",{children:["Language",c.jsxs("select",{value:E,onChange:V=>H(V.target.value),children:[c.jsx("option",{value:"all",children:"Any language"}),ih.map(V=>c.jsx("option",{value:V,children:Qm[V]},V))]})]})]}),c.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),c.jsxs("div",{className:"challenge-results-heading",children:[c.jsxs("h2",{children:["Available challenges ",c.jsxs("span",{children:["(",G.length,")"]})]}),c.jsx("span",{children:"Alphabetical order"})]}),G.length?c.jsx("div",{className:"challenge-card-grid",children:G.map(V=>c.jsxs("a",{className:"challenge-card surface-card",href:rm(V.id),onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),u(V.id))},children:[c.jsxs("div",{className:"challenge-card-top",children:[c.jsx("span",{className:"challenge-level level-"+V.difficulty.toLowerCase().replace(" ","-"),children:V.difficulty}),c.jsx("span",{className:"challenge-points",children:xd("challenge:"+V.id,m)?`${xd("challenge:"+V.id,m).earned} / ${xd("challenge:"+V.id,m).possible} pts earned`:`${V.points} pts available`})]}),c.jsx("h3",{children:V.title}),c.jsx("p",{children:V.summary}),c.jsx("div",{className:"challenge-tags",children:V.tags.map(X=>c.jsx("span",{children:X},X))}),c.jsxs("div",{className:"challenge-course-tags",children:[V.suggestedCourses.slice(0,3).map(X=>{var M,F;return c.jsx("span",{title:(M=Sr(X))==null?void 0:M.label,children:((F=Sr(X))==null?void 0:F.short)||X},X)}),V.suggestedCourses.length>3&&c.jsxs("span",{children:["+",V.suggestedCourses.length-3]})]}),c.jsxs("span",{className:"challenge-open",children:["Open challenge ",c.jsx(Vp,{size:16})]})]},V.id))}):c.jsxs("div",{className:"challenge-empty surface-card",children:[c.jsx("h3",{children:"No matching challenges"}),c.jsx("p",{children:"Try a broader topic or clear the filters."}),c.jsx("button",{className:"btn",onClick:O,children:"Show all challenges"})]}),c.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const ik=(l,u)=>"designlab:challenge-code:"+l+":"+u;function sk({challengeId:l,onBack:u}){const d=Zm(l),[m,y]=Xn("designlab:challenge-language","python"),v=ih.includes(m)?m:"python",[S,j]=Xn("designlab:challenge-left-width",420),k=xe.useRef(null);if(!d)return c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Challenge not found"}),c.jsx("button",{className:"btn",onClick:u,children:"Back to bank"})]});const T=Xw(l,v),E={id:l,title:d.title,language:v,starter:T,kind:"Challenge",challenge:d.summary,points:d.points,console:"Run or Check executes published examples in your selected language.",storageKey:ik(l,v),challengeExamples:Qw(l),isChallenge:!0,isPublished:!1},H=L=>{if(!k.current)return;const G=k.current.getBoundingClientRect();j(Math.max(280,Math.min(G.width-360,L.clientX-G.left)))};return c.jsxs("div",{className:"challenge-detail-page",children:[c.jsxs("div",{className:"challenge-breadcrumb",children:[c.jsxs("button",{onClick:u,children:[c.jsx(am,{size:16})," Challenge Bank"]}),c.jsx("span",{children:"/"}),c.jsx("span",{children:d.title})]}),c.jsxs("header",{className:"challenge-detail-heading surface-card",children:[c.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",d.difficulty," · ",d.points," available points in the published contract"]}),c.jsx("h1",{children:d.title}),c.jsx("p",{children:d.summary}),c.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),c.jsxs("div",{className:"challenge-prerequisites",children:[c.jsx("strong",{children:"Prerequisites:"}),d.prerequisites.map(L=>c.jsx("span",{children:L},L))]})]}),c.jsxs("div",{className:"challenge-workspace",ref:k,style:{"--challenge-left":S+"px"},children:[c.jsxs("section",{className:"challenge-instructions",children:[c.jsxs("div",{className:"pane-header",children:[c.jsxs("strong",{children:[c.jsx(wy,{size:16})," Problem & examples"]}),c.jsx("span",{className:"challenge-points",children:"Practice only"})]}),c.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:Zo(Jw(l))}})]}),c.jsx(pc,{axis:"columns",onDrag:H}),c.jsxs("section",{className:"challenge-editor-panel",children:[c.jsxs("div",{className:"challenge-runtime-toolbar",children:[c.jsxs("label",{className:"challenge-language-selector",children:["Language",c.jsx("select",{"aria-label":"Solution language",value:v,onChange:L=>y(L.target.value),children:ih.map(L=>c.jsx("option",{value:L,children:Qm[L]},L))})]}),c.jsx("span",{children:"Live public-example checks"})]}),c.jsx(Mm,{lessonId:"challenge:"+l+":"+v,task:E},l+":"+v)]})]})]})}function ak(){var Q;const[l,u]=xe.useState(()=>fd()),[d,m]=Xn("designlab:course","computer-science-1"),[y,v]=Xn("designlab:theme","dark"),[S,j]=Xn("designlab:course-colors",{}),[k,T]=Xn("designlab:sidebar",!0);Xn("designlab:completed-lessons",[]);const[E,H]=xe.useState({status:"loading",grades:[],weeklyPoints:[]}),L=E.grades,G=[],O=ny([],L),[V,X]=xe.useState({}),[M,F]=xe.useState({}),[U,W]=xe.useState(!0),J=xe.useMemo(()=>rs.filter(B=>B.id==="computer-science-1").map(B=>{if(B.id==="computer-science-1"||B.id==="test-prep")return B;if(B.id==="capstone")return{...B,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const _=V[B.id];return _?{...B,..._,publishedContent:!0}:{...B,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:M[B.id]||null}}),[V,M]);xe.useEffect(()=>{let B=!0;return dy().then(_=>{B&&H(_)}).catch(()=>{B&&H({status:"unavailable",grades:[],weeklyPoints:[],message:"Account lookup unavailable. No production records were changed."})}),()=>{B=!1}},[]),xe.useEffect(()=>{const B=new AbortController;let _=!0;return Promise.all([].map(async P=>{try{return{courseId:P,data:await cy(P,{signal:B.signal})}}catch(q){return{courseId:P,error:String((q==null?void 0:q.message)||q)}}})).then(P=>{if(!_)return;const q={},D={};for(const Z of P)Z.data?q[Z.courseId]=Z.data:D[Z.courseId]=Z.error;X(q),F(D),W(!1)}),()=>{_=!1,B.abort()}},[]),xe.useEffect(()=>{u(fd(window.location.pathname,J))},[J]),Xn("designlab:students",Gp);const[ce,oe]=Xn("designlab:journal-submissions",Rg);xe.useEffect(()=>{document.documentElement.dataset.theme=y},[y]),xe.useEffect(()=>{Jg(S,rs)},[S]);function be(B,_){!rs.some(P=>P.id===B)||!Rd(_)||j(P=>({...P&&typeof P=="object"?P:{},[B]:_.toUpperCase()}))}function Re(B){j(_=>{const P={..._&&typeof _=="object"?_:{}};return delete P[B],P})}xe.useEffect(()=>{var _;l.page==="course"&&m(l.courseId);const B=l.page==="course"?(_=Sr(l.courseId))==null?void 0:_.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${B||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,m]),xe.useEffect(()=>{const B=()=>u(fd(window.location.pathname,J));return window.addEventListener("popstate",B),window.addEventListener("hashchange",B),()=>{window.removeEventListener("popstate",B),window.removeEventListener("hashchange",B)}},[J]);const ve=xe.useCallback(B=>{window.location.pathname!==B&&window.history.pushState({},"",B),u(fd(window.location.pathname,J)),window.scrollTo({top:0,behavior:"auto"})},[J]);function se(B,_){if(!B)return ve(Gl());m(B),ve(Od(B,_))}function Ie(B,_,P=null){ve(im(B,_,P))}function le(B){B==="teacher"?ve(Zh()):B==="admin"?ve(my()):B==="journals"?ve(gy()):B==="grades"?ve(yy()):B==="challenges"?ve(Kl()):B==="course"?se(l.page==="course"?l.courseId:d):ve(Gl())}const fe=l.page,A=l.courseId||d;return c.jsxs("div",{className:"app-shell",children:[c.jsx(qy,{sidebarOpen:k,onToggleSidebar:()=>T(!k),onHome:()=>ve(Gl()),theme:y,setTheme:v,readOnlyMode:Yu,accountLabel:(Q=E.user)==null?void 0:Q.handle}),c.jsxs("div",{className:pa("app-layout",!k&&"sidebar-closed"),children:[c.jsx(Ky,{open:k,page:fe,courseId:A,lessonId:l.page==="course"?l.lessonId:null,setPage:le,openCourse:se,completedLessons:O,assignments:G,grades:L,availableCourses:J,readOnlyMode:Yu,onOpenProject:Ie}),c.jsxs("main",{className:"main-panel",children:[c.jsxs("section",{className:"cs1-integration-notice",role:"status",children:[c.jsx("strong",{children:"Computer Science I · read-only integration test"}),c.jsx("span",{children:E.status==="loading"?"Checking your existing Playground session…":E.status==="signed-in"?"Signed in as "+E.user.handle+" · Your own verified grades are shown.":E.status==="signed-out"?"Sign in on the current Playground to view your existing results.":E.message||"Could not verify your existing session."}),c.jsx("a",{href:"/playground/",children:"Open current Playground"})]}),["home","course","grades","teacher","admin"].includes(fe)?fe==="home"?c.jsx(Xy,{availableCourses:J,completedLessons:O,openCourse:se,openTeacher:()=>ve(Zh()),openChallenges:()=>ve(Kl()),readOnlyMode:Yu}):fe==="course"?c.jsx(Hb,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:J,openCourse:se,openProject:Ie,openChallenges:B=>ve(Kl(B)),completedLessons:O,assignments:G,grades:L,readOnlyMode:Yu,onToggleLessonComplete:void 0,courseColors:S,onSetCourseColor:be,onResetCourseColor:Re},l.courseId):fe==="grades"?c.jsx(nk,{grades:L,assignments:G,completedLessons:O,readOnlyMode:Yu,weeklyPoints:E.weeklyPoints,accountStatus:E.status}):fe==="challenges"?c.jsx(rk,{grades:L,filterCourse:l.filterCourse,onSelect:B=>ve(rm(B)),onBrowseCourse:B=>ve(Kl(B))}):fe==="challenge"?c.jsx(sk,{challengeId:l.challengeId,grades:L,onBack:()=>ve(Kl())},l.challengeId):fe==="journals"?c.jsx(y0,{submissions:ce,setSubmissions:oe}):fe==="teacher"?c.jsx(u0,{}):fe==="admin"?c.jsx(m0,{}):U?c.jsxs("div",{className:"main-content route-not-found",role:"status",children:[c.jsx("h1",{children:"Loading published course materials…"}),c.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):c.jsxs("div",{className:"main-content route-not-found",children:[c.jsx("div",{className:"eyebrow",children:"Link not found"}),c.jsx("h1",{children:"That playground page doesn't exist."}),c.jsx("p",{children:"Check the link or return to the list of playgrounds."}),c.jsx("button",{className:"btn primary",onClick:()=>ve(Gl()),children:"See all playgrounds"})]}):c.jsxs("div",{className:"main-content",children:[c.jsx("h1",{children:"Not enabled in this test build"}),c.jsx("p",{children:"Teacher tools, journals, challenges, and submissions remain in the current Playground until their permissions and data are integrated."}),c.jsx("a",{href:"/playground/",children:"Return to current Playground"})]})]})]}),c.jsx(Gy,{})]})}jg.createRoot(document.getElementById("root")).render(c.jsx(wg.StrictMode,{children:c.jsx(ak,{})}));
