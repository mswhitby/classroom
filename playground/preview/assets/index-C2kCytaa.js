var Tm=Object.defineProperty;var Nm=(c,p,d)=>p in c?Tm(c,p,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[p]=d;var on=(c,p,d)=>Nm(c,typeof p!="symbol"?p+"":p,d);(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))v(b);new MutationObserver(b=>{for(const w of b)if(w.type==="childList")for(const L of w.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&v(L)}).observe(document,{childList:!0,subtree:!0});function d(b){const w={};return b.integrity&&(w.integrity=b.integrity),b.referrerPolicy&&(w.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?w.credentials="include":b.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function v(b){if(b.ep)return;b.ep=!0;const w=d(b);fetch(b.href,w)}})();function wf(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var up={exports:{}},Wu={},cp={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Em(){if(mh)return Et;mh=1;var c=Symbol.for("react.element"),p=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),L=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),M=Symbol.iterator;function R(W){return W===null||typeof W!="object"?null:(W=M&&W[M]||W["@@iterator"],typeof W=="function"?W:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,J={};function ue(W,ae,De){this.props=W,this.context=ae,this.refs=J,this.updater=De||X}ue.prototype.isReactComponent={},ue.prototype.setState=function(W,ae){if(typeof W!="object"&&typeof W!="function"&&W!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,ae,"setState")},ue.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};function D(){}D.prototype=ue.prototype;function H(W,ae,De){this.props=W,this.context=ae,this.refs=J,this.updater=De||X}var U=H.prototype=new D;U.constructor=H,ne(U,ue.prototype),U.isPureReactComponent=!0;var $=Array.isArray,se=Object.prototype.hasOwnProperty,ge={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function Ce(W,ae,De){var Je,Ve={},we=null,Ie=null;if(ae!=null)for(Je in ae.ref!==void 0&&(Ie=ae.ref),ae.key!==void 0&&(we=""+ae.key),ae)se.call(ae,Je)&&!ie.hasOwnProperty(Je)&&(Ve[Je]=ae[Je]);var Fe=arguments.length-2;if(Fe===1)Ve.children=De;else if(1<Fe){for(var He=Array(Fe),tt=0;tt<Fe;tt++)He[tt]=arguments[tt+2];Ve.children=He}if(W&&W.defaultProps)for(Je in Fe=W.defaultProps,Fe)Ve[Je]===void 0&&(Ve[Je]=Fe[Je]);return{$$typeof:c,type:W,key:we,ref:Ie,props:Ve,_owner:ge.current}}function We(W,ae){return{$$typeof:c,type:W.type,key:ae,ref:W.ref,props:W.props,_owner:W._owner}}function _e(W){return typeof W=="object"&&W!==null&&W.$$typeof===c}function q(W){var ae={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(De){return ae[De]})}var Ee=/\/+/g;function re(W,ae){return typeof W=="object"&&W!==null&&W.key!=null?q(""+W.key):ae.toString(36)}function ve(W,ae,De,Je,Ve){var we=typeof W;(we==="undefined"||we==="boolean")&&(W=null);var Ie=!1;if(W===null)Ie=!0;else switch(we){case"string":case"number":Ie=!0;break;case"object":switch(W.$$typeof){case c:case p:Ie=!0}}if(Ie)return Ie=W,Ve=Ve(Ie),W=Je===""?"."+re(Ie,0):Je,$(Ve)?(De="",W!=null&&(De=W.replace(Ee,"$&/")+"/"),ve(Ve,ae,De,"",function(tt){return tt})):Ve!=null&&(_e(Ve)&&(Ve=We(Ve,De+(!Ve.key||Ie&&Ie.key===Ve.key?"":(""+Ve.key).replace(Ee,"$&/")+"/")+W)),ae.push(Ve)),1;if(Ie=0,Je=Je===""?".":Je+":",$(W))for(var Fe=0;Fe<W.length;Fe++){we=W[Fe];var He=Je+re(we,Fe);Ie+=ve(we,ae,De,He,Ve)}else if(He=R(W),typeof He=="function")for(W=He.call(W),Fe=0;!(we=W.next()).done;)we=we.value,He=Je+re(we,Fe++),Ie+=ve(we,ae,De,He,Ve);else if(we==="object")throw ae=String(W),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return Ie}function C(W,ae,De){if(W==null)return W;var Je=[],Ve=0;return ve(W,Je,"","",function(we){return ae.call(De,we,Ve++)}),Je}function Q(W){if(W._status===-1){var ae=W._result;ae=ae(),ae.then(function(De){(W._status===0||W._status===-1)&&(W._status=1,W._result=De)},function(De){(W._status===0||W._status===-1)&&(W._status=2,W._result=De)}),W._status===-1&&(W._status=0,W._result=ae)}if(W._status===1)return W._result.default;throw W._result}var G={current:null},N={transition:null},O={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:N,ReactCurrentOwner:ge};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:C,forEach:function(W,ae,De){C(W,function(){ae.apply(this,arguments)},De)},count:function(W){var ae=0;return C(W,function(){ae++}),ae},toArray:function(W){return C(W,function(ae){return ae})||[]},only:function(W){if(!_e(W))throw Error("React.Children.only expected to receive a single React element child.");return W}},Et.Component=ue,Et.Fragment=d,Et.Profiler=b,Et.PureComponent=H,Et.StrictMode=v,Et.Suspense=_,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Et.act=Y,Et.cloneElement=function(W,ae,De){if(W==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+W+".");var Je=ne({},W.props),Ve=W.key,we=W.ref,Ie=W._owner;if(ae!=null){if(ae.ref!==void 0&&(we=ae.ref,Ie=ge.current),ae.key!==void 0&&(Ve=""+ae.key),W.type&&W.type.defaultProps)var Fe=W.type.defaultProps;for(He in ae)se.call(ae,He)&&!ie.hasOwnProperty(He)&&(Je[He]=ae[He]===void 0&&Fe!==void 0?Fe[He]:ae[He])}var He=arguments.length-2;if(He===1)Je.children=De;else if(1<He){Fe=Array(He);for(var tt=0;tt<He;tt++)Fe[tt]=arguments[tt+2];Je.children=Fe}return{$$typeof:c,type:W.type,key:Ve,ref:we,props:Je,_owner:Ie}},Et.createContext=function(W){return W={$$typeof:L,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},W.Provider={$$typeof:w,_context:W},W.Consumer=W},Et.createElement=Ce,Et.createFactory=function(W){var ae=Ce.bind(null,W);return ae.type=W,ae},Et.createRef=function(){return{current:null}},Et.forwardRef=function(W){return{$$typeof:E,render:W}},Et.isValidElement=_e,Et.lazy=function(W){return{$$typeof:A,_payload:{_status:-1,_result:W},_init:Q}},Et.memo=function(W,ae){return{$$typeof:P,type:W,compare:ae===void 0?null:ae}},Et.startTransition=function(W){var ae=N.transition;N.transition={};try{W()}finally{N.transition=ae}},Et.unstable_act=Y,Et.useCallback=function(W,ae){return G.current.useCallback(W,ae)},Et.useContext=function(W){return G.current.useContext(W)},Et.useDebugValue=function(){},Et.useDeferredValue=function(W){return G.current.useDeferredValue(W)},Et.useEffect=function(W,ae){return G.current.useEffect(W,ae)},Et.useId=function(){return G.current.useId()},Et.useImperativeHandle=function(W,ae,De){return G.current.useImperativeHandle(W,ae,De)},Et.useInsertionEffect=function(W,ae){return G.current.useInsertionEffect(W,ae)},Et.useLayoutEffect=function(W,ae){return G.current.useLayoutEffect(W,ae)},Et.useMemo=function(W,ae){return G.current.useMemo(W,ae)},Et.useReducer=function(W,ae,De){return G.current.useReducer(W,ae,De)},Et.useRef=function(W){return G.current.useRef(W)},Et.useState=function(W){return G.current.useState(W)},Et.useSyncExternalStore=function(W,ae,De){return G.current.useSyncExternalStore(W,ae,De)},Et.useTransition=function(){return G.current.useTransition()},Et.version="18.3.1",Et}var gh;function Dp(){return gh||(gh=1,cp.exports=Em()),cp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function Lm(){if(yh)return Wu;yh=1;var c=Dp(),p=Symbol.for("react.element"),d=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,b=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function L(E,_,P){var A,M={},R=null,X=null;P!==void 0&&(R=""+P),_.key!==void 0&&(R=""+_.key),_.ref!==void 0&&(X=_.ref);for(A in _)v.call(_,A)&&!w.hasOwnProperty(A)&&(M[A]=_[A]);if(E&&E.defaultProps)for(A in _=E.defaultProps,_)M[A]===void 0&&(M[A]=_[A]);return{$$typeof:p,type:E,key:R,ref:X,props:M,_owner:b.current}}return Wu.Fragment=d,Wu.jsx=L,Wu.jsxs=L,Wu}var vh;function Pm(){return vh||(vh=1,up.exports=Lm()),up.exports}var h=Pm(),Ue=Dp();const jm=wf(Ue);var td={},dp={exports:{}},Jr={},pp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Am(){return xh||(xh=1,(function(c){function p(N,O){var Y=N.length;N.push(O);e:for(;0<Y;){var W=Y-1>>>1,ae=N[W];if(0<b(ae,O))N[W]=O,N[Y]=ae,Y=W;else break e}}function d(N){return N.length===0?null:N[0]}function v(N){if(N.length===0)return null;var O=N[0],Y=N.pop();if(Y!==O){N[0]=Y;e:for(var W=0,ae=N.length,De=ae>>>1;W<De;){var Je=2*(W+1)-1,Ve=N[Je],we=Je+1,Ie=N[we];if(0>b(Ve,Y))we<ae&&0>b(Ie,Ve)?(N[W]=Ie,N[we]=Y,W=we):(N[W]=Ve,N[Je]=Y,W=Je);else if(we<ae&&0>b(Ie,Y))N[W]=Ie,N[we]=Y,W=we;else break e}}return O}function b(N,O){var Y=N.sortIndex-O.sortIndex;return Y!==0?Y:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;c.unstable_now=function(){return w.now()}}else{var L=Date,E=L.now();c.unstable_now=function(){return L.now()-E}}var _=[],P=[],A=1,M=null,R=3,X=!1,ne=!1,J=!1,ue=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(N){for(var O=d(P);O!==null;){if(O.callback===null)v(P);else if(O.startTime<=N)v(P),O.sortIndex=O.expirationTime,p(_,O);else break;O=d(P)}}function $(N){if(J=!1,U(N),!ne)if(d(_)!==null)ne=!0,Q(se);else{var O=d(P);O!==null&&G($,O.startTime-N)}}function se(N,O){ne=!1,J&&(J=!1,D(Ce),Ce=-1),X=!0;var Y=R;try{for(U(O),M=d(_);M!==null&&(!(M.expirationTime>O)||N&&!q());){var W=M.callback;if(typeof W=="function"){M.callback=null,R=M.priorityLevel;var ae=W(M.expirationTime<=O);O=c.unstable_now(),typeof ae=="function"?M.callback=ae:M===d(_)&&v(_),U(O)}else v(_);M=d(_)}if(M!==null)var De=!0;else{var Je=d(P);Je!==null&&G($,Je.startTime-O),De=!1}return De}finally{M=null,R=Y,X=!1}}var ge=!1,ie=null,Ce=-1,We=5,_e=-1;function q(){return!(c.unstable_now()-_e<We)}function Ee(){if(ie!==null){var N=c.unstable_now();_e=N;var O=!0;try{O=ie(!0,N)}finally{O?re():(ge=!1,ie=null)}}else ge=!1}var re;if(typeof H=="function")re=function(){H(Ee)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,C=ve.port2;ve.port1.onmessage=Ee,re=function(){C.postMessage(null)}}else re=function(){ue(Ee,0)};function Q(N){ie=N,ge||(ge=!0,re())}function G(N,O){Ce=ue(function(){N(c.unstable_now())},O)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(N){N.callback=null},c.unstable_continueExecution=function(){ne||X||(ne=!0,Q(se))},c.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<N?Math.floor(1e3/N):5},c.unstable_getCurrentPriorityLevel=function(){return R},c.unstable_getFirstCallbackNode=function(){return d(_)},c.unstable_next=function(N){switch(R){case 1:case 2:case 3:var O=3;break;default:O=R}var Y=R;R=O;try{return N()}finally{R=Y}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=R;R=N;try{return O()}finally{R=Y}},c.unstable_scheduleCallback=function(N,O,Y){var W=c.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?W+Y:W):Y=W,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,N={id:A++,callback:O,priorityLevel:N,startTime:Y,expirationTime:ae,sortIndex:-1},Y>W?(N.sortIndex=Y,p(P,N),d(_)===null&&N===d(P)&&(J?(D(Ce),Ce=-1):J=!0,G($,Y-W))):(N.sortIndex=ae,p(_,N),ne||X||(ne=!0,Q(se))),N},c.unstable_shouldYield=q,c.unstable_wrapCallback=function(N){var O=R;return function(){var Y=R;R=O;try{return N.apply(this,arguments)}finally{R=Y}}}})(hp)),hp}var bh;function Rm(){return bh||(bh=1,pp.exports=Am()),pp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh;function Im(){if(wh)return Jr;wh=1;var c=Dp(),p=Rm();function d(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,b={};function w(t,r){L(t,r),L(t+"Capture",r)}function L(t,r){for(b[t]=r,t=0;t<r.length;t++)v.add(r[t])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},M={};function R(t){return _.call(M,t)?!0:_.call(A,t)?!1:P.test(t)?M[t]=!0:(A[t]=!0,!1)}function X(t,r,a,l){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ne(t,r,a,l){if(r===null||typeof r>"u"||X(t,r,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(t,r,a,l,f,g,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=T}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ue[t]=new J(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];ue[r]=new J(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ue[t]=new J(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ue[t]=new J(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ue[t]=new J(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){ue[t]=new J(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){ue[t]=new J(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){ue[t]=new J(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){ue[t]=new J(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function H(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,H);ue[r]=new J(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,H);ue[r]=new J(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,H);ue[r]=new J(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){ue[t]=new J(t,1,!1,t.toLowerCase(),null,!1,!1)}),ue.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){ue[t]=new J(t,1,!1,t.toLowerCase(),null,!0,!0)});function U(t,r,a,l){var f=ue.hasOwnProperty(r)?ue[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ne(r,a,f,l)&&(a=null),l||f===null?R(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,r,a):t.setAttribute(r,a))))}var $=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),ge=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),q=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),N=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,W;function ae(t){if(W===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);W=r&&r[1]||""}return`
`+W+t}var De=!1;function Je(t,r){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var l=pe}Reflect.construct(t,[],r)}else{try{r.call()}catch(pe){l=pe}t.call(r.prototype)}else{try{throw Error()}catch(pe){l=pe}t()}}catch(pe){if(pe&&l&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),g=l.stack.split(`
`),T=f.length-1,B=g.length-1;1<=T&&0<=B&&f[T]!==g[B];)B--;for(;1<=T&&0<=B;T--,B--)if(f[T]!==g[B]){if(T!==1||B!==1)do if(T--,B--,0>B||f[T]!==g[B]){var K=`
`+f[T].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=T&&0<=B);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ae(t):""}function Ve(t){switch(t.tag){case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return t=Je(t.type,!1),t;case 11:return t=Je(t.type.render,!1),t;case 1:return t=Je(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ie:return"Fragment";case ge:return"Portal";case We:return"Profiler";case Ce:return"StrictMode";case re:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case _e:return(t._context.displayName||"Context")+".Provider";case Ee:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return r=t.displayName||null,r!==null?r:we(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return we(t(r))}catch{}}return null}function Ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===Ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function He(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=He(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,g.call(this,T)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ge(t){t._valueTracker||(t._valueTracker=tt(t))}function qt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=He(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $t(t,r){var a=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function hn(t,r){var a=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;a=Fe(r.value!=null?r.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function et(t,r){r=r.checked,r!=null&&U(t,"checked",r,!1)}function bt(t,r){et(t,r);var a=Fe(r.value),l=r.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Zt(t,r.type,a):r.hasOwnProperty("defaultValue")&&Zt(t,r.type,Fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function lt(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Zt(t,r,a){(r!=="number"||Qt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ke=Array.isArray;function vt(t,r,a,l){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Fe(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function oe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Se(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(d(92));if(Ke(a)){if(1<a.length)throw Error(d(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Fe(a)}}function me(t,r){var a=Fe(r.value),l=Fe(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function xt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function $e(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?$e(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qe,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,l,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function dt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xn=["Webkit","ms","Moz","O"];Object.keys(fn).forEach(function(t){Xn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),fn[r]=fn[t]})});function _r(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||fn.hasOwnProperty(t)&&fn[t]?(""+r).trim():r+"px"}function Wr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=_r(a,r[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var sr=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(t,r){if(r){if(sr[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function gt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=null;function nt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,Gt=null,At=null;function Rt(t){if(t=cn(t)){if(typeof Cr!="function")throw Error(d(280));var r=t.stateNode;r&&(r=gn(r),Cr(t.stateNode,t.type,r))}}function En(t){Gt?At?At.push(t):At=[t]:Gt=t}function ln(){if(Gt){var t=Gt,r=At;if(At=Gt=null,Rt(t),r)for(t=0;t<r.length;t++)Rt(r[t])}}function ar(t,r){return t(r)}function bn(){}var ni=!1;function In(t,r,a){if(ni)return t(r,a);ni=!0;try{return ar(t,r,a)}finally{ni=!1,(Gt!==null||At!==null)&&(bn(),ln())}}function lr(t,r){var a=t.stateNode;if(a===null)return null;var l=gn(a);if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(d(231,r,typeof a));return a}var Hr=!1;if(E)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Hr=!1}function Tr(t,r,a,l,f,g,T,B,K){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(a,pe)}catch(je){this.onError(je)}}var Qn=!1,ri=null,Br=!1,Ur=null,ur={onError:function(t){Qn=!0,ri=t}};function qr(t,r,a,l,f,g,T,B,K){Qn=!1,ri=null,Tr.apply(ur,arguments)}function Po(t,r,a,l,f,g,T,B,K){if(qr.apply(this,arguments),Qn){if(Qn){var pe=ri;Qn=!1,ri=null}else throw Error(d(198));Br||(Br=!0,Ur=pe)}}function wn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function hs(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Ar(t){if(wn(t)!==t)throw Error(d(188))}function Rr(t){var r=t.alternate;if(!r){if(r=wn(t),r===null)throw Error(d(188));return r!==t?null:t}for(var a=t,l=r;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Ar(f),t;if(g===l)return Ar(f),r;g=g.sibling}throw Error(d(188))}if(a.return!==l.return)a=f,l=g;else{for(var T=!1,B=f.child;B;){if(B===a){T=!0,a=f,l=g;break}if(B===l){T=!0,l=f,a=g;break}B=B.sibling}if(!T){for(B=g.child;B;){if(B===a){T=!0,a=g,l=f;break}if(B===l){T=!0,l=g,a=f;break}B=B.sibling}if(!T)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?t:r}function Nr(t){return t=Rr(t),t!==null?Ft(t):null}function Ft(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ft(t);if(r!==null)return r;t=t.sibling}return null}var Er=p.unstable_scheduleCallback,Di=p.unstable_cancelCallback,ii=p.unstable_shouldYield,vi=p.unstable_requestPaint,Pt=p.unstable_now,ro=p.unstable_getCurrentPriorityLevel,xi=p.unstable_ImmediatePriority,Yt=p.unstable_UserBlockingPriority,Xe=p.unstable_NormalPriority,oi=p.unstable_LowPriority,cr=p.unstable_IdlePriority,On=null,S=null;function z(t){if(S&&typeof S.onCommitFiberRoot=="function")try{S.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}}var he=Math.clz32?Math.clz32:ze,Te=Math.log,de=Math.LN2;function ze(t){return t>>>=0,t===0?32:31-(Te(t)/de|0)|0}var _t=64,Jt=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function si(t,r){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,g=t.pingedLanes,T=a&268435455;if(T!==0){var B=T&~f;B!==0?l=kn(B):(g&=T,g!==0&&(l=kn(g)))}else T=a&~f,T!==0?l=kn(T):g!==0&&(l=kn(g));if(l===0)return 0;if(r!==0&&r!==l&&(r&f)===0&&(f=l&-l,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((l&4)!==0&&(l|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)a=31-he(r),f=1<<a,l|=t[a],r&=~f;return l}function Ya(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,g=t.pendingLanes;0<g;){var T=31-he(g),B=1<<T,K=f[T];K===-1?((B&a)===0||(B&l)!==0)&&(f[T]=Ya(B,r)):K<=r&&(t.expiredLanes|=B),g&=~B}}function fs(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zs(){var t=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),t}function zi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Kn(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-he(r),t[r]=a}function jo(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-he(a),g=1<<f;r[f]=0,l[f]=-1,t[f]=-1,a&=~g}}function io(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-he(a),f=1<<l;f&r|t[l]&r&&(t[l]|=r),a&=~f}}var Nt=0;function Fi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kr,ai,dr,Js,oo,ms=!1,Ao=[],pr=null,Ir=null,Mn=null,Ro=new Map,so=new Map,Or=[],Io="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ea(t,r){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ro.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(r.pointerId)}}function Wi(t,r,a,l,f,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:g,targetContainers:[f]},r!==null&&(r=cn(r),r!==null&&ai(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Oo(t,r,a,l,f){switch(r){case"focusin":return pr=Wi(pr,t,r,a,l,f),!0;case"dragenter":return Ir=Wi(Ir,t,r,a,l,f),!0;case"mouseover":return Mn=Wi(Mn,t,r,a,l,f),!0;case"pointerover":var g=f.pointerId;return Ro.set(g,Wi(Ro.get(g)||null,t,r,a,l,f)),!0;case"gotpointercapture":return g=f.pointerId,so.set(g,Wi(so.get(g)||null,t,r,a,l,f)),!0}return!1}function gs(t){var r=Pn(t.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=hs(a),r!==null){t.blockedOn=r,oo(t.priority,function(){dr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ke(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$n(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Mi=l,a.target.dispatchEvent(l),Mi=null}else return r=cn(a),r!==null&&ai(r),t.blockedOn=a,!1;r.shift()}return!0}function j(t,r,a){ke(t)&&a.delete(r)}function Z(){ms=!1,pr!==null&&ke(pr)&&(pr=null),Ir!==null&&ke(Ir)&&(Ir=null),Mn!==null&&ke(Mn)&&(Mn=null),Ro.forEach(j),so.forEach(j)}function xe(t,r){t.blockedOn===r&&(t.blockedOn=null,ms||(ms=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Z)))}function be(t){function r(f){return xe(f,t)}if(0<Ao.length){xe(Ao[0],t);for(var a=1;a<Ao.length;a++){var l=Ao[a];l.blockedOn===t&&(l.blockedOn=null)}}for(pr!==null&&xe(pr,t),Ir!==null&&xe(Ir,t),Mn!==null&&xe(Mn,t),Ro.forEach(r),so.forEach(r),a=0;a<Or.length;a++)l=Or[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Or.length&&(a=Or[0],a.blockedOn===null);)gs(a),a.blockedOn===null&&Or.shift()}var Ze=$.ReactCurrentBatchConfig,ut=!0;function kt(t,r,a,l){var f=Nt,g=Ze.transition;Ze.transition=null;try{Nt=1,hr(t,r,a,l)}finally{Nt=f,Ze.transition=g}}function mn(t,r,a,l){var f=Nt,g=Ze.transition;Ze.transition=null;try{Nt=4,hr(t,r,a,l)}finally{Nt=f,Ze.transition=g}}function hr(t,r,a,l){if(ut){var f=$n(t,r,a,l);if(f===null)su(t,r,l,un,a),ea(t,l);else if(Oo(f,t,r,a,l))l.stopPropagation();else if(ea(t,l),r&4&&-1<Io.indexOf(t)){for(;f!==null;){var g=cn(f);if(g!==null&&Kr(g),g=$n(t,r,a,l),g===null&&su(t,r,l,un,a),g===f)break;f=g}f!==null&&l.stopPropagation()}else su(t,r,l,null,a)}}var un=null;function $n(t,r,a,l){if(un=null,t=nt(l),t=Pn(t),t!==null)if(r=wn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=hs(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return un=t,null}function bi(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ro()){case xi:return 1;case Yt:return 4;case Xe:case oi:return 16;case cr:return 536870912;default:return 16}default:return 16}}var jt=null,ys=null,Va=null;function Xa(){if(Va)return Va;var t,r=ys,a=r.length,l,f="value"in jt?jt.value:jt.textContent,g=f.length;for(t=0;t<a&&r[t]===f[t];t++);var T=a-t;for(l=1;l<=T&&r[a-l]===f[g-l];l++);return Va=f.slice(t,1<l?1-l:void 0)}function ta(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function li(){return!0}function Qa(){return!1}function Sn(t){function r(a,l,f,g,T){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var B in t)t.hasOwnProperty(B)&&(a=t[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?li:Qa,this.isPropagationStopped=Qa,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),r}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Sn(Hi),wi=Y({},Hi,{view:0,detail:0}),Cd=Sn(wi),Ul,ql,ra,ia=Y({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Ul=t.screenX-ra.screenX,ql=t.screenY-ra.screenY):ql=Ul=0,ra=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),Kl=Sn(ia),Td=Y({},ia,{dataTransfer:0}),Nd=Sn(Td),Ed=Y({},wi,{relatedTarget:0}),$l=Sn(Ed),nc=Y({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ld=Sn(nc),rc=Y({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Za=Sn(rc),vs=Y({},Hi,{data:0}),ic=Sn(vs),Pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=oa[t])?!!r[t]:!1}function Gl(){return Dn}var oc=Y({},wi,{key:function(t){if(t.key){var r=Pd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sa=Sn(oc),Ad=Y({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=Sn(Ad),Rd=Y({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Vl=Sn(Rd),sc=Y({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Id=Sn(sc),Od=Y({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ac=Sn(Od),lc=[9,13,27,32],Xl=E&&"CompositionEvent"in window,Bi=null;E&&"documentMode"in document&&(Bi=document.documentMode);var Ui=E&&"TextEvent"in window&&!Bi,aa=E&&(!Xl||Bi&&8<Bi&&11>=Bi),Ja=" ",Ql=!1;function ui(t,r){switch(t){case"keyup":return lc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ao(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function Md(t,r){switch(t){case"compositionend":return ao(r);case"keypress":return r.which!==32?null:(Ql=!0,Ja);case"textInput":return t=r.data,t===Ja&&Ql?null:t;default:return null}}function uc(t,r){if(lo)return t==="compositionend"||!Xl&&ui(t,r)?(t=Xa(),Va=ys=jt=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return aa&&r.locale!=="ko"?null:r.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Dd[t.type]:r==="textarea"}function el(t,r,a,l){En(l),r=_s(r,"onChange"),0<r.length&&(a=new na("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var ki=null,Lr=null;function cc(t){cl(t,0)}function la(t){var r=Cn(t);if(qt(r))return t}function zd(t,r){if(t==="change")return r}var dc=!1;if(E){var Jl;if(E){var tl="oninput"in document;if(!tl){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),tl=typeof eu.oninput=="function"}Jl=tl}else Jl=!1;dc=Jl&&(!document.documentMode||9<document.documentMode)}function xs(){ki&&(ki.detachEvent("onpropertychange",tu),Lr=ki=null)}function tu(t){if(t.propertyName==="value"&&la(Lr)){var r=[];el(r,Lr,t,nt(t)),In(cc,r)}}function pc(t,r,a){t==="focusin"?(xs(),ki=r,Lr=a,ki.attachEvent("onpropertychange",tu)):t==="focusout"&&xs()}function nu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(Lr)}function nl(t,r){if(t==="click")return la(r)}function hc(t,r){if(t==="input"||t==="change")return la(r)}function rl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var _n=typeof Object.is=="function"?Object.is:rl;function bs(t,r){if(_n(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!_.call(r,f)||!_n(t[f],r[f]))return!1}return!0}function il(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ol(t,r){var a=il(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=il(a)}}function ru(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?ru(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function iu(){for(var t=window,r=Qt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Qt(t.document)}return r}function ua(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Fd(t){var r=iu(),a=t.focusedElem,l=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&ru(a.ownerDocument.documentElement,a)){if(l!==null&&ua(a)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,g=Math.min(l.start,f);l=l.end===void 0?g:Math.min(l.end,f),!t.extend&&g>l&&(f=l,l=g,g=f),f=ol(a,g);var T=ol(a,l);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),g>l?(t.addRange(r),t.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wd=E&&"documentMode"in document&&11>=document.documentMode,ws=null,qi=null,Si=null,uo=!1;function sl(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uo||ws==null||ws!==Qt(l)||(l=ws,"selectionStart"in l&&ua(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Si&&bs(Si,l)||(Si=l,l=_s(qi,"onSelect"),0<l.length&&(r=new na("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=ws)))}function ks(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Mo={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},ca={},co={};E&&(co=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function _i(t){if(ca[t])return ca[t];if(!Mo[t])return t;var r=Mo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in co)return ca[t]=r[a];return t}var er=_i("animationend"),Ki=_i("animationiteration"),$i=_i("animationstart"),da=_i("transitionend"),fc=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,r){fc.set(t,r),w(r,[t])}for(var al=0;al<ou.length;al++){var pa=ou[al],ll=pa.toLowerCase(),Hd=pa[0].toUpperCase()+pa.slice(1);$r(ll,"on"+Hd)}$r(er,"onAnimationEnd"),$r(Ki,"onAnimationIteration"),$r($i,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(da,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function ul(t,r,a){var l=t.type||"unknown-event";t.currentTarget=a,Po(l,r,void 0,t),t.currentTarget=null}function cl(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var g=void 0;if(r)for(var T=l.length-1;0<=T;T--){var B=l[T],K=B.instance,pe=B.currentTarget;if(B=B.listener,K!==g&&f.isPropagationStopped())break e;ul(f,B,pe),g=K}else for(T=0;T<l.length;T++){if(B=l[T],K=B.instance,pe=B.currentTarget,B=B.listener,K!==g&&f.isPropagationStopped())break e;ul(f,B,pe),g=K}}}if(Br)throw t=Ur,Br=!1,Ur=null,t}function Wt(t,r){var a=r[au];a===void 0&&(a=r[au]=new Set);var l=t+"__bubble";a.has(l)||(gc(r,t,2,!1),a.add(l))}function Ss(t,r,a){var l=0;r&&(l|=4),gc(a,t,l,r)}var ha="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[ha]){t[ha]=!0,v.forEach(function(a){a!=="selectionchange"&&(mc.has(a)||Ss(a,!1,t),Ss(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ha]||(r[ha]=!0,Ss("selectionchange",!1,r))}}function gc(t,r,a,l){switch(bi(r)){case 1:var f=kt;break;case 4:f=mn;break;default:f=hr}a=f.bind(null,r,a,t),f=void 0,!Hr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function su(t,r,a,l,f){var g=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var B=l.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(T===4)for(T=l.return;T!==null;){var K=T.tag;if((K===3||K===4)&&(K=T.stateNode.containerInfo,K===f||K.nodeType===8&&K.parentNode===f))return;T=T.return}for(;B!==null;){if(T=Pn(B),T===null)return;if(K=T.tag,K===5||K===6){l=g=T;continue e}B=B.parentNode}}l=l.return}In(function(){var pe=g,je=nt(a),Ae=[];e:{var Le=fc.get(t);if(Le!==void 0){var Qe=na,rt=t;switch(t){case"keypress":if(ta(a)===0)break e;case"keydown":case"keyup":Qe=sa;break;case"focusin":rt="focus",Qe=$l;break;case"focusout":rt="blur",Qe=$l;break;case"beforeblur":case"afterblur":Qe=$l;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Vl;break;case er:case Ki:case $i:Qe=Ld;break;case da:Qe=Id;break;case"scroll":Qe=Cd;break;case"wheel":Qe=ac;break;case"copy":case"cut":case"paste":Qe=Za;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Yl}var it=(r&4)!==0,qn=!it&&t==="scroll",le=it?Le!==null?Le+"Capture":null:Le;it=[];for(var ee=pe,ce;ee!==null;){ce=ee;var Me=ce.stateNode;if(ce.tag===5&&Me!==null&&(ce=Me,le!==null&&(Me=lr(ee,le),Me!=null&&it.push(fa(ee,Me,ce)))),qn)break;ee=ee.return}0<it.length&&(Le=new Qe(Le,rt,null,a,je),Ae.push({event:Le,listeners:it}))}}if((r&7)===0){e:{if(Le=t==="mouseover"||t==="pointerover",Qe=t==="mouseout"||t==="pointerout",Le&&a!==Mi&&(rt=a.relatedTarget||a.fromElement)&&(Pn(rt)||rt[Vi]))break e;if((Qe||Le)&&(Le=je.window===je?je:(Le=je.ownerDocument)?Le.defaultView||Le.parentWindow:window,Qe?(rt=a.relatedTarget||a.toElement,Qe=pe,rt=rt?Pn(rt):null,rt!==null&&(qn=wn(rt),rt!==qn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Qe=null,rt=pe),Qe!==rt)){if(it=Kl,Me="onMouseLeave",le="onMouseEnter",ee="mouse",(t==="pointerout"||t==="pointerover")&&(it=Yl,Me="onPointerLeave",le="onPointerEnter",ee="pointer"),qn=Qe==null?Le:Cn(Qe),ce=rt==null?Le:Cn(rt),Le=new it(Me,ee+"leave",Qe,a,je),Le.target=qn,Le.relatedTarget=ce,Me=null,Pn(je)===pe&&(it=new it(le,ee+"enter",rt,a,je),it.target=ce,it.relatedTarget=qn,Me=it),qn=Me,Qe&&rt)t:{for(it=Qe,le=rt,ee=0,ce=it;ce;ce=ho(ce))ee++;for(ce=0,Me=le;Me;Me=ho(Me))ce++;for(;0<ee-ce;)it=ho(it),ee--;for(;0<ce-ee;)le=ho(le),ce--;for(;ee--;){if(it===le||le!==null&&it===le.alternate)break t;it=ho(it),le=ho(le)}it=null}else it=null;Qe!==null&&zo(Ae,Le,Qe,it,!1),rt!==null&&qn!==null&&zo(Ae,qn,rt,it,!0)}}e:{if(Le=pe?Cn(pe):window,Qe=Le.nodeName&&Le.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Le.type==="file")var at=zd;else if(Zl(Le))if(dc)at=hc;else{at=nu;var pt=pc}else(Qe=Le.nodeName)&&Qe.toLowerCase()==="input"&&(Le.type==="checkbox"||Le.type==="radio")&&(at=nl);if(at&&(at=at(t,pe))){el(Ae,at,a,je);break e}pt&&pt(t,Le,pe),t==="focusout"&&(pt=Le._wrapperState)&&pt.controlled&&Le.type==="number"&&Zt(Le,"number",Le.value)}switch(pt=pe?Cn(pe):window,t){case"focusin":(Zl(pt)||pt.contentEditable==="true")&&(ws=pt,qi=pe,Si=null);break;case"focusout":Si=qi=ws=null;break;case"mousedown":uo=!0;break;case"contextmenu":case"mouseup":case"dragend":uo=!1,sl(Ae,a,je);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":sl(Ae,a,je)}var ht;if(Xl)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else lo?ui(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(aa&&a.locale!=="ko"&&(lo||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&lo&&(ht=Xa()):(jt=je,ys="value"in jt?jt.value:jt.textContent,lo=!0)),pt=_s(pe,yt),0<pt.length&&(yt=new ic(yt,t,null,a,je),Ae.push({event:yt,listeners:pt}),ht?yt.data=ht:(ht=ao(a),ht!==null&&(yt.data=ht)))),(ht=Ui?Md(t,a):uc(t,a))&&(pe=_s(pe,"onBeforeInput"),0<pe.length&&(je=new ic("onBeforeInput","beforeinput",null,a,je),Ae.push({event:je,listeners:pe}),je.data=ht))}cl(Ae,r)})}function fa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function _s(t,r){for(var a=r+"Capture",l=[];t!==null;){var f=t,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=lr(t,a),g!=null&&l.unshift(fa(t,g,f)),g=lr(t,r),g!=null&&l.push(fa(t,g,f))),t=t.return}return l}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zo(t,r,a,l,f){for(var g=r._reactName,T=[];a!==null&&a!==l;){var B=a,K=B.alternate,pe=B.stateNode;if(K!==null&&K===l)break;B.tag===5&&pe!==null&&(B=pe,f?(K=lr(a,g),K!=null&&T.unshift(fa(a,K,B))):f||(K=lr(a,g),K!=null&&T.push(fa(a,K,B)))),a=a.return}T.length!==0&&t.push({event:r,listeners:T})}var ma=/\r\n?/g,Bd=/\u0000|\uFFFD/g;function ga(t){return(typeof t=="string"?t:""+t).replace(ma,`
`).replace(Bd,"")}function ya(t,r,a){if(r=ga(r),ga(t)!==r&&a)throw Error(d(425))}function fo(){}var dl=null,Gi=null;function Fo(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yi=typeof setTimeout=="function"?setTimeout:void 0,va=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(t){return Wo.resolve(null).then(t).catch(vc)}:Yi;function vc(t){setTimeout(function(){throw t})}function pl(t,r){var a=r,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),be(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);be(r)}function mo(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function go(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Gr,xa="__reactProps$"+Gr,Vi="__reactContainer$"+Gr,au="__reactEvents$"+Gr,Ud="__reactListeners$"+Gr,qd="__reactHandles$"+Gr;function Pn(t){var r=t[Ci];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Vi]||a[Ci]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=go(t);t!==null;){if(a=t[Ci])return a;t=go(t)}return r}t=a,a=t.parentNode}return null}function cn(t){return t=t[Ci]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(d(33))}function gn(t){return t[xa]||null}var Ho=[],Cs=-1;function ci(t){return{current:t}}function en(t){0>Cs||(t.current=Ho[Cs],Ho[Cs]=null,Cs--)}function Vt(t,r){Cs++,Ho[Cs]=t.current,t.current=r}var yo={},Gn=ci(yo),fr=ci(!1),Xi=yo;function Ts(t,r){var a=t.type.contextTypes;if(!a)return yo;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=r[g];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function tr(t){return t=t.childContextTypes,t!=null}function Ns(){en(fr),en(Gn)}function lu(t,r,a){if(Gn.current!==yo)throw Error(d(168));Vt(Gn,r),Vt(fr,a)}function uu(t,r,a){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(d(108,Ie(t)||"Unknown",f));return Y({},a,l)}function Es(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yo,Xi=Gn.current,Vt(Gn,t),Vt(fr,fr.current),!0}function cu(t,r,a){var l=t.stateNode;if(!l)throw Error(d(169));a?(t=uu(t,r,Xi),l.__reactInternalMemoizedMergedChildContext=t,en(fr),en(Gn),Vt(Gn,t)):en(fr),Vt(fr,a)}var Mr=null,hl=!1,Ls=!1;function Ti(t){Mr===null?Mr=[t]:Mr.push(t)}function xc(t){hl=!0,Ti(t)}function vo(){if(!Ls&&Mr!==null){Ls=!0;var t=0,r=Nt;try{var a=Mr;for(Nt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Mr=null,hl=!1}catch(f){throw Mr!==null&&(Mr=Mr.slice(t+1)),Er(xi,vo),f}finally{Nt=r,Ls=!1}}return null}var Bo=[],Yn=0,Lt=null,Pr=0,zn=[],Fn=0,xo=null,di=1,Ni="";function Uo(t,r){Bo[Yn++]=Pr,Bo[Yn++]=Lt,Lt=t,Pr=r}function fl(t,r,a){zn[Fn++]=di,zn[Fn++]=Ni,zn[Fn++]=xo,xo=t;var l=di;t=Ni;var f=32-he(l)-1;l&=~(1<<f),a+=1;var g=32-he(r)+f;if(30<g){var T=f-f%5;g=(l&(1<<T)-1).toString(32),l>>=T,f-=T,di=1<<32-he(r)+f|a<<f|l,Ni=g+t}else di=1<<g|a<<f|l,Ni=t}function qo(t){t.return!==null&&(Uo(t,1),fl(t,1,0))}function ml(t){for(;t===Lt;)Lt=Bo[--Yn],Bo[Yn]=null,Pr=Bo[--Yn],Bo[Yn]=null;for(;t===xo;)xo=zn[--Fn],zn[Fn]=null,Ni=zn[--Fn],zn[Fn]=null,di=zn[--Fn],zn[Fn]=null}var mr=null,jn=null,tn=!1,Yr=null;function bc(t,r){var a=Ii(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function ba(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mr=t,jn=mo(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mr=t,jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=xo!==null?{id:di,overflow:Ni}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ii(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,mr=t,jn=null,!0):!1;default:return!1}}function wa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gl(t){if(tn){var r=jn;if(r){var a=r;if(!ba(t,r)){if(wa(t))throw Error(d(418));r=mo(a.nextSibling);var l=mr;r&&ba(t,r)?bc(l,a):(t.flags=t.flags&-4097|2,tn=!1,mr=t)}}else{if(wa(t))throw Error(d(418));t.flags=t.flags&-4097|2,tn=!1,mr=t}}}function wc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mr=t}function ka(t){if(t!==mr)return!1;if(!tn)return wc(t),tn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Fo(t.type,t.memoizedProps)),r&&(r=jn)){if(wa(t))throw kc(),Error(d(418));for(;r;)bc(t,r),r=mo(r.nextSibling)}if(wc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){jn=mo(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}jn=null}}else jn=mr?mo(t.stateNode.nextSibling):null;return!0}function kc(){for(var t=jn;t;)t=mo(t.nextSibling)}function Ps(){jn=mr=null,tn=!1}function js(t){Yr===null?Yr=[t]:Yr.push(t)}var Sc=$.ReactCurrentBatchConfig;function Sa(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(d(309));var l=a.stateNode}if(!l)throw Error(d(147,t));var f=l,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(T){var B=f.refs;T===null?delete B[g]:B[g]=T},r._stringRef=g,r)}if(typeof t!="string")throw Error(d(284));if(!a._owner)throw Error(d(290,t))}return t}function yl(t,r){throw t=Object.prototype.toString.call(r),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function du(t){var r=t._init;return r(t._payload)}function Ko(t){function r(le,ee){if(t){var ce=le.deletions;ce===null?(le.deletions=[ee],le.flags|=16):ce.push(ee)}}function a(le,ee){if(!t)return null;for(;ee!==null;)r(le,ee),ee=ee.sibling;return null}function l(le,ee){for(le=new Map;ee!==null;)ee.key!==null?le.set(ee.key,ee):le.set(ee.index,ee),ee=ee.sibling;return le}function f(le,ee){return le=Vs(le,ee),le.index=0,le.sibling=null,le}function g(le,ee,ce){return le.index=ce,t?(ce=le.alternate,ce!==null?(ce=ce.index,ce<ee?(le.flags|=2,ee):ce):(le.flags|=2,ee)):(le.flags|=1048576,ee)}function T(le){return t&&le.alternate===null&&(le.flags|=2),le}function B(le,ee,ce,Me){return ee===null||ee.tag!==6?(ee=rp(ce,le.mode,Me),ee.return=le,ee):(ee=f(ee,ce),ee.return=le,ee)}function K(le,ee,ce,Me){var at=ce.type;return at===ie?je(le,ee,ce.props.children,Me,ce.key):ee!==null&&(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&du(at)===ee.type)?(Me=f(ee,ce.props),Me.ref=Sa(le,ee,ce),Me.return=le,Me):(Me=Gc(ce.type,ce.key,ce.props,null,le.mode,Me),Me.ref=Sa(le,ee,ce),Me.return=le,Me)}function pe(le,ee,ce,Me){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ce.containerInfo||ee.stateNode.implementation!==ce.implementation?(ee=ip(ce,le.mode,Me),ee.return=le,ee):(ee=f(ee,ce.children||[]),ee.return=le,ee)}function je(le,ee,ce,Me,at){return ee===null||ee.tag!==7?(ee=Wa(ce,le.mode,Me,at),ee.return=le,ee):(ee=f(ee,ce),ee.return=le,ee)}function Ae(le,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=rp(""+ee,le.mode,ce),ee.return=le,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case se:return ce=Gc(ee.type,ee.key,ee.props,null,le.mode,ce),ce.ref=Sa(le,null,ee),ce.return=le,ce;case ge:return ee=ip(ee,le.mode,ce),ee.return=le,ee;case Q:var Me=ee._init;return Ae(le,Me(ee._payload),ce)}if(Ke(ee)||O(ee))return ee=Wa(ee,le.mode,ce,null),ee.return=le,ee;yl(le,ee)}return null}function Le(le,ee,ce,Me){var at=ee!==null?ee.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return at!==null?null:B(le,ee,""+ce,Me);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case se:return ce.key===at?K(le,ee,ce,Me):null;case ge:return ce.key===at?pe(le,ee,ce,Me):null;case Q:return at=ce._init,Le(le,ee,at(ce._payload),Me)}if(Ke(ce)||O(ce))return at!==null?null:je(le,ee,ce,Me,null);yl(le,ce)}return null}function Qe(le,ee,ce,Me,at){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return le=le.get(ce)||null,B(ee,le,""+Me,at);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case se:return le=le.get(Me.key===null?ce:Me.key)||null,K(ee,le,Me,at);case ge:return le=le.get(Me.key===null?ce:Me.key)||null,pe(ee,le,Me,at);case Q:var pt=Me._init;return Qe(le,ee,ce,pt(Me._payload),at)}if(Ke(Me)||O(Me))return le=le.get(ce)||null,je(ee,le,Me,at,null);yl(ee,Me)}return null}function rt(le,ee,ce,Me){for(var at=null,pt=null,ht=ee,yt=ee=0,ir=null;ht!==null&&yt<ce.length;yt++){ht.index>yt?(ir=ht,ht=null):ir=ht.sibling;var Ht=Le(le,ht,ce[yt],Me);if(Ht===null){ht===null&&(ht=ir);break}t&&ht&&Ht.alternate===null&&r(le,ht),ee=g(Ht,ee,yt),pt===null?at=Ht:pt.sibling=Ht,pt=Ht,ht=ir}if(yt===ce.length)return a(le,ht),tn&&Uo(le,yt),at;if(ht===null){for(;yt<ce.length;yt++)ht=Ae(le,ce[yt],Me),ht!==null&&(ee=g(ht,ee,yt),pt===null?at=ht:pt.sibling=ht,pt=ht);return tn&&Uo(le,yt),at}for(ht=l(le,ht);yt<ce.length;yt++)ir=Qe(ht,le,yt,ce[yt],Me),ir!==null&&(t&&ir.alternate!==null&&ht.delete(ir.key===null?yt:ir.key),ee=g(ir,ee,yt),pt===null?at=ir:pt.sibling=ir,pt=ir);return t&&ht.forEach(function(Xs){return r(le,Xs)}),tn&&Uo(le,yt),at}function it(le,ee,ce,Me){var at=O(ce);if(typeof at!="function")throw Error(d(150));if(ce=at.call(ce),ce==null)throw Error(d(151));for(var pt=at=null,ht=ee,yt=ee=0,ir=null,Ht=ce.next();ht!==null&&!Ht.done;yt++,Ht=ce.next()){ht.index>yt?(ir=ht,ht=null):ir=ht.sibling;var Xs=Le(le,ht,Ht.value,Me);if(Xs===null){ht===null&&(ht=ir);break}t&&ht&&Xs.alternate===null&&r(le,ht),ee=g(Xs,ee,yt),pt===null?at=Xs:pt.sibling=Xs,pt=Xs,ht=ir}if(Ht.done)return a(le,ht),tn&&Uo(le,yt),at;if(ht===null){for(;!Ht.done;yt++,Ht=ce.next())Ht=Ae(le,Ht.value,Me),Ht!==null&&(ee=g(Ht,ee,yt),pt===null?at=Ht:pt.sibling=Ht,pt=Ht);return tn&&Uo(le,yt),at}for(ht=l(le,ht);!Ht.done;yt++,Ht=ce.next())Ht=Qe(ht,le,yt,Ht.value,Me),Ht!==null&&(t&&Ht.alternate!==null&&ht.delete(Ht.key===null?yt:Ht.key),ee=g(Ht,ee,yt),pt===null?at=Ht:pt.sibling=Ht,pt=Ht);return t&&ht.forEach(function(Cm){return r(le,Cm)}),tn&&Uo(le,yt),at}function qn(le,ee,ce,Me){if(typeof ce=="object"&&ce!==null&&ce.type===ie&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case se:e:{for(var at=ce.key,pt=ee;pt!==null;){if(pt.key===at){if(at=ce.type,at===ie){if(pt.tag===7){a(le,pt.sibling),ee=f(pt,ce.props.children),ee.return=le,le=ee;break e}}else if(pt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&du(at)===pt.type){a(le,pt.sibling),ee=f(pt,ce.props),ee.ref=Sa(le,pt,ce),ee.return=le,le=ee;break e}a(le,pt);break}else r(le,pt);pt=pt.sibling}ce.type===ie?(ee=Wa(ce.props.children,le.mode,Me,ce.key),ee.return=le,le=ee):(Me=Gc(ce.type,ce.key,ce.props,null,le.mode,Me),Me.ref=Sa(le,ee,ce),Me.return=le,le=Me)}return T(le);case ge:e:{for(pt=ce.key;ee!==null;){if(ee.key===pt)if(ee.tag===4&&ee.stateNode.containerInfo===ce.containerInfo&&ee.stateNode.implementation===ce.implementation){a(le,ee.sibling),ee=f(ee,ce.children||[]),ee.return=le,le=ee;break e}else{a(le,ee);break}else r(le,ee);ee=ee.sibling}ee=ip(ce,le.mode,Me),ee.return=le,le=ee}return T(le);case Q:return pt=ce._init,qn(le,ee,pt(ce._payload),Me)}if(Ke(ce))return rt(le,ee,ce,Me);if(O(ce))return it(le,ee,ce,Me);yl(le,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ee!==null&&ee.tag===6?(a(le,ee.sibling),ee=f(ee,ce),ee.return=le,le=ee):(a(le,ee),ee=rp(ce,le.mode,Me),ee.return=le,le=ee),T(le)):a(le,ee)}return qn}var bo=Ko(!0),_a=Ko(!1),Ca=ci(null),As=null,$o=null,pu=null;function vl(){pu=$o=As=null}function Wn(t){var r=Ca.current;en(Ca),t._currentValue=r}function Rs(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function Go(t,r){As=t,pu=$o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Jn=!0),t.firstContext=null)}function Dr(t){var r=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:r,next:null},$o===null){if(As===null)throw Error(d(308));$o=t,As.dependencies={lanes:0,firstContext:t}}else $o=$o.next=t;return r}var wo=null;function ko(t){wo===null?wo=[t]:wo.push(t)}function Ta(t,r,a,l){var f=r.interleaved;return f===null?(a.next=a,ko(r)):(a.next=f.next,f.next=a),r.interleaved=a,Ei(t,l)}function Ei(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function xl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yo(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function pi(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ct&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,Ei(t,a)}return f=l.interleaved,f===null?(r.next=r,ko(l)):(r.next=f.next,f.next=r),l.interleaved=r,Ei(t,a)}function Na(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,io(t,a)}}function Is(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?f=g=r:g=g.next=r}else f=g=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function bl(t,r,a,l){var f=t.updateQueue;Qi=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var K=B,pe=K.next;K.next=null,T===null?g=pe:T.next=pe,T=K;var je=t.alternate;je!==null&&(je=je.updateQueue,B=je.lastBaseUpdate,B!==T&&(B===null?je.firstBaseUpdate=pe:B.next=pe,je.lastBaseUpdate=K))}if(g!==null){var Ae=f.baseState;T=0,je=pe=K=null,B=g;do{var Le=B.lane,Qe=B.eventTime;if((l&Le)===Le){je!==null&&(je=je.next={eventTime:Qe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var rt=t,it=B;switch(Le=r,Qe=a,it.tag){case 1:if(rt=it.payload,typeof rt=="function"){Ae=rt.call(Qe,Ae,Le);break e}Ae=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=it.payload,Le=typeof rt=="function"?rt.call(Qe,Ae,Le):rt,Le==null)break e;Ae=Y({},Ae,Le);break e;case 2:Qi=!0}}B.callback!==null&&B.lane!==0&&(t.flags|=64,Le=f.effects,Le===null?f.effects=[B]:Le.push(B))}else Qe={eventTime:Qe,lane:Le,tag:B.tag,payload:B.payload,callback:B.callback,next:null},je===null?(pe=je=Qe,K=Ae):je=je.next=Qe,T|=Le;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Le=B,B=Le.next,Le.next=null,f.lastBaseUpdate=Le,f.shared.pending=null}}while(!0);if(je===null&&(K=Ae),f.baseState=K,f.firstBaseUpdate=pe,f.lastBaseUpdate=je,r=f.shared.interleaved,r!==null){f=r;do T|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);wr|=T,t.lanes=T,t.memoizedState=Ae}}function Vo(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(d(191,f));f.call(l)}}}var Os={},hi=ci(Os),Ms=ci(Os),Zi=ci(Os);function fi(t){if(t===Os)throw Error(d(174));return t}function Xo(t,r){switch(Vt(Zi,r),Vt(Ms,t),Vt(hi,Os),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ot(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ot(r,t)}en(hi),Vt(hi,r)}function Pi(){en(hi),en(Ms),en(Zi)}function hu(t){fi(Zi.current);var r=fi(hi.current),a=ot(r,t.type);r!==a&&(Vt(Ms,t),Vt(hi,a))}function fu(t){Ms.current===t&&(en(hi),en(Ms))}var sn=ci(0);function mi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var So=[];function Qo(){for(var t=0;t<So.length;t++)So[t]._workInProgressVersionPrimary=null;So.length=0}var wl=$.ReactCurrentDispatcher,kl=$.ReactCurrentBatchConfig,Zo=0,dn=null,Hn=null,It=null,Ea=!1,La=!1,Pa=0,Kd=0;function Zn(){throw Error(d(321))}function Sl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!_n(t[a],r[a]))return!1;return!0}function _l(t,r,a,l,f,g){if(Zo=g,dn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,wl.current=t===null||t.memoizedState===null?Gd:Tu,t=a(l,f),La){g=0;do{if(La=!1,Pa=0,25<=g)throw Error(d(301));g+=1,It=Hn=null,r.updateQueue=null,wl.current=Aa,t=a(l,f)}while(La)}if(wl.current=ja,r=Hn!==null&&Hn.next!==null,Zo=0,It=Hn=dn=null,Ea=!1,r)throw Error(d(300));return t}function mu(){var t=Pa!==0;return Pa=0,t}function ji(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?dn.memoizedState=It=t:It=It.next=t,It}function Vr(){if(Hn===null){var t=dn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=It===null?dn.memoizedState:It.next;if(r!==null)It=r,Hn=t;else{if(t===null)throw Error(d(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},It===null?dn.memoizedState=It=t:It=It.next=t}return It}function Xr(t,r){return typeof r=="function"?r(t):r}function Jo(t){var r=Vr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var l=Hn,f=l.baseQueue,g=a.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}l.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,l=l.baseState;var B=T=null,K=null,pe=g;do{var je=pe.lane;if((Zo&je)===je)K!==null&&(K=K.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),l=pe.hasEagerState?pe.eagerState:t(l,pe.action);else{var Ae={lane:je,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};K===null?(B=K=Ae,T=l):K=K.next=Ae,dn.lanes|=je,wr|=je}pe=pe.next}while(pe!==null&&pe!==g);K===null?T=l:K.next=B,_n(l,r.memoizedState)||(Jn=!0),r.memoizedState=l,r.baseState=T,r.baseQueue=K,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do g=f.lane,dn.lanes|=g,wr|=g,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Ds(t){var r=Vr(),a=r.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,g=r.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do g=t(g,T.action),T=T.next;while(T!==f);_n(g,r.memoizedState)||(Jn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,l]}function zs(){}function Ai(t,r){var a=dn,l=Vr(),f=r(),g=!_n(l.memoizedState,f);if(g&&(l.memoizedState=f,Jn=!0),l=l.queue,xu(es.bind(null,a,l,t),[t]),l.getSnapshot!==r||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,_o(9,Cc.bind(null,a,l,f,r),void 0,null),Dt===null)throw Error(d(349));(Zo&30)!==0||_c(a,r,f)}return f}function _c(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=dn.updateQueue,r===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Cc(t,r,a,l){r.value=a,r.getSnapshot=l,gu(r)&&yu(t)}function es(t,r,a){return a(function(){gu(r)&&yu(t)})}function gu(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!_n(t,a)}catch{return!0}}function yu(t){var r=Ei(t,1);r!==null&&eo(r,t,1,-1)}function vu(t){var r=ji();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Su.bind(null,dn,t),[r.memoizedState,t]}function _o(t,r,a,l){return t={tag:t,create:r,destroy:a,deps:l,next:null},r=dn.updateQueue,r===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t)),t}function ts(){return Vr().memoizedState}function Fs(t,r,a,l){var f=ji();dn.flags|=t,f.memoizedState=_o(1|r,a,void 0,l===void 0?null:l)}function Ws(t,r,a,l){var f=Vr();l=l===void 0?null:l;var g=void 0;if(Hn!==null){var T=Hn.memoizedState;if(g=T.destroy,l!==null&&Sl(l,T.deps)){f.memoizedState=_o(r,a,g,l);return}}dn.flags|=t,f.memoizedState=_o(1|r,a,g,l)}function Cl(t,r){return Fs(8390656,8,t,r)}function xu(t,r){return Ws(2048,8,t,r)}function Hs(t,r){return Ws(4,2,t,r)}function bu(t,r){return Ws(4,4,t,r)}function Tc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function wu(t,r,a){return a=a!=null?a.concat([t]):null,Ws(4,4,Tc.bind(null,r,t),a)}function Bs(){}function Nc(t,r){var a=Vr();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&Sl(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Ec(t,r){var a=Vr();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&Sl(r,l[1])?l[0]:(t=t(),a.memoizedState=[t,r],t)}function Us(t,r,a){return(Zo&21)===0?(t.baseState&&(t.baseState=!1,Jn=!0),t.memoizedState=a):(_n(a,r)||(a=Zs(),dn.lanes|=a,wr|=a,t.baseState=!0),r)}function Lc(t,r){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var l=kl.transition;kl.transition={};try{t(!1),r()}finally{Nt=a,kl.transition=l}}function ku(){return Vr().memoizedState}function $d(t,r,a){var l=Gs(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},_u(t))Pc(r,a);else if(a=Ta(t,r,a,l),a!==null){var f=zr();eo(a,t,l,f),Cu(a,r,l)}}function Su(t,r,a){var l=Gs(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(_u(t))Pc(r,f);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,B=g(T,a);if(f.hasEagerState=!0,f.eagerState=B,_n(B,T)){var K=r.interleaved;K===null?(f.next=f,ko(r)):(f.next=K.next,K.next=f),r.interleaved=f;return}}catch{}finally{}a=Ta(t,r,f,l),a!==null&&(f=zr(),eo(a,t,l,f),Cu(a,r,l))}}function _u(t){var r=t.alternate;return t===dn||r!==null&&r===dn}function Pc(t,r){La=Ea=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Cu(t,r,a){if((a&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,io(t,a)}}var ja={readContext:Dr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},Gd={readContext:Dr,useCallback:function(t,r){return ji().memoizedState=[t,r===void 0?null:r],t},useContext:Dr,useEffect:Cl,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Fs(4194308,4,Tc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Fs(4194308,4,t,r)},useInsertionEffect:function(t,r){return Fs(4,2,t,r)},useMemo:function(t,r){var a=ji();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var l=ji();return r=a!==void 0?a(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=$d.bind(null,dn,t),[l.memoizedState,t]},useRef:function(t){var r=ji();return t={current:t},r.memoizedState=t},useState:vu,useDebugValue:Bs,useDeferredValue:function(t){return ji().memoizedState=t},useTransition:function(){var t=vu(!1),r=t[0];return t=Lc.bind(null,t[1]),ji().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var l=dn,f=ji();if(tn){if(a===void 0)throw Error(d(407));a=a()}else{if(a=r(),Dt===null)throw Error(d(349));(Zo&30)!==0||_c(l,r,a)}f.memoizedState=a;var g={value:a,getSnapshot:r};return f.queue=g,Cl(es.bind(null,l,g,t),[t]),l.flags|=2048,_o(9,Cc.bind(null,l,g,a,r),void 0,null),a},useId:function(){var t=ji(),r=Dt.identifierPrefix;if(tn){var a=Ni,l=di;a=(l&~(1<<32-he(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=Pa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Kd++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Tu={readContext:Dr,useCallback:Nc,useContext:Dr,useEffect:xu,useImperativeHandle:wu,useInsertionEffect:Hs,useLayoutEffect:bu,useMemo:Ec,useReducer:Jo,useRef:ts,useState:function(){return Jo(Xr)},useDebugValue:Bs,useDeferredValue:function(t){var r=Vr();return Us(r,Hn.memoizedState,t)},useTransition:function(){var t=Jo(Xr)[0],r=Vr().memoizedState;return[t,r]},useMutableSource:zs,useSyncExternalStore:Ai,useId:ku,unstable_isNewReconciler:!1},Aa={readContext:Dr,useCallback:Nc,useContext:Dr,useEffect:xu,useImperativeHandle:wu,useInsertionEffect:Hs,useLayoutEffect:bu,useMemo:Ec,useReducer:Ds,useRef:ts,useState:function(){return Ds(Xr)},useDebugValue:Bs,useDeferredValue:function(t){var r=Vr();return Hn===null?r.memoizedState=t:Us(r,Hn.memoizedState,t)},useTransition:function(){var t=Ds(Xr)[0],r=Vr().memoizedState;return[t,r]},useMutableSource:zs,useSyncExternalStore:Ai,useId:ku,unstable_isNewReconciler:!1};function gr(t,r){if(t&&t.defaultProps){r=Y({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Nu(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:Y({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ra={isMounted:function(t){return(t=t._reactInternals)?wn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var l=zr(),f=Gs(t),g=Li(l,f);g.payload=r,a!=null&&(g.callback=a),r=pi(t,g,f),r!==null&&(eo(r,t,f,l),Na(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=zr(),f=Gs(t),g=Li(l,f);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=pi(t,g,f),r!==null&&(eo(r,t,f,l),Na(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=zr(),l=Gs(t),f=Li(a,l);f.tag=2,r!=null&&(f.callback=r),r=pi(t,f,l),r!==null&&(eo(r,t,l,a),Na(r,t,l))}};function jc(t,r,a,l,f,g,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,T):r.prototype&&r.prototype.isPureReactComponent?!bs(a,l)||!bs(f,g):!0}function Ac(t,r,a){var l=!1,f=yo,g=r.contextType;return typeof g=="object"&&g!==null?g=Dr(g):(f=tr(r)?Xi:Gn.current,l=r.contextTypes,g=(l=l!=null)?Ts(t,f):yo),r=new r(a,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ra,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=g),r}function Rc(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&Ra.enqueueReplaceState(r,r.state,null)}function Eu(t,r,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},xl(t);var g=r.contextType;typeof g=="object"&&g!==null?f.context=Dr(g):(g=tr(r)?Xi:Gn.current,f.context=Ts(t,g)),f.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Nu(t,r,g,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Ra.enqueueReplaceState(f,f.state,null),bl(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,r){try{var a="",l=r;do a+=Ve(l),l=l.return;while(l);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:f,digest:null}}function Lu(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Pu(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Ic=typeof WeakMap=="function"?WeakMap:Map;function Tl(t,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var l=r.value;return a.callback=function(){Hc||(Hc=!0,Vd=l),Pu(t,r)},a}function ju(t,r,a){a=Li(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;a.payload=function(){return l(f)},a.callback=function(){Pu(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Pu(t,r),typeof l!="function"&&(Ks===null?Ks=new Set([this]):Ks.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),a}function Oc(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ic;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(f.add(a),t=fm.bind(null,t,r,a),r.then(t,t))}function Au(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function rs(t,r,a,l,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,pi(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Mc=$.ReactCurrentOwner,Jn=!1;function yr(t,r,a,l){r.child=t===null?_a(r,null,a,l):bo(r,t.child,a,l)}function Dc(t,r,a,l,f){a=a.render;var g=r.ref;return Go(r,f),l=_l(t,r,a,l,g,f),a=mu(),t!==null&&!Jn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,jr(t,r,f)):(tn&&a&&qo(r),r.flags|=1,yr(t,r,l,f),r.child)}function zc(t,r,a,l,f){if(t===null){var g=a.type;return typeof g=="function"&&!np(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,Xt(t,r,g,l,f)):(t=Gc(a.type,null,l,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&f)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:bs,a(T,l)&&t.ref===r.ref)return jr(t,r,f)}return r.flags|=1,t=Vs(g,l),t.ref=r.ref,t.return=r,r.child=t}function Xt(t,r,a,l,f){if(t!==null){var g=t.memoizedProps;if(bs(g,l)&&t.ref===r.ref)if(Jn=!1,r.pendingProps=l=g,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Jn=!0);else return r.lanes=t.lanes,jr(t,r,f)}return is(t,r,a,l,f)}function Fc(t,r,a){var l=r.pendingProps,f=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(br,Bt),Bt|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Vt(br,Bt),Bt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:a,Vt(br,Bt),Bt|=l}else g!==null?(l=g.baseLanes|a,r.memoizedState=null):l=a,Vt(br,Bt),Bt|=l;return yr(t,r,f,a),r.child}function Nl(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function is(t,r,a,l,f){var g=tr(a)?Xi:Gn.current;return g=Ts(r,g),Go(r,f),a=_l(t,r,a,l,g,f),l=mu(),t!==null&&!Jn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,jr(t,r,f)):(tn&&l&&qo(r),r.flags|=1,yr(t,r,a,f),r.child)}function Qr(t,r,a,l,f){if(tr(a)){var g=!0;Es(r)}else g=!1;if(Go(r,f),r.stateNode===null)Il(t,r),Ac(r,a,l),Eu(r,a,l,f),l=!0;else if(t===null){var T=r.stateNode,B=r.memoizedProps;T.props=B;var K=T.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=Dr(pe):(pe=tr(a)?Xi:Gn.current,pe=Ts(r,pe));var je=a.getDerivedStateFromProps,Ae=typeof je=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ae||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==l||K!==pe)&&Rc(r,T,l,pe),Qi=!1;var Le=r.memoizedState;T.state=Le,bl(r,l,T,f),K=r.memoizedState,B!==l||Le!==K||fr.current||Qi?(typeof je=="function"&&(Nu(r,a,je,l),K=r.memoizedState),(B=Qi||jc(r,a,B,l,Le,K,pe))?(Ae||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=K),T.props=l,T.state=K,T.context=pe,l=B):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{T=r.stateNode,Yo(t,r),B=r.memoizedProps,pe=r.type===r.elementType?B:gr(r.type,B),T.props=pe,Ae=r.pendingProps,Le=T.context,K=a.contextType,typeof K=="object"&&K!==null?K=Dr(K):(K=tr(a)?Xi:Gn.current,K=Ts(r,K));var Qe=a.getDerivedStateFromProps;(je=typeof Qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Ae||Le!==K)&&Rc(r,T,l,K),Qi=!1,Le=r.memoizedState,T.state=Le,bl(r,l,T,f);var rt=r.memoizedState;B!==Ae||Le!==rt||fr.current||Qi?(typeof Qe=="function"&&(Nu(r,a,Qe,l),rt=r.memoizedState),(pe=Qi||jc(r,a,pe,l,Le,rt,K)||!1)?(je||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,rt,K),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,rt,K)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=rt),T.props=l,T.state=rt,T.context=K,l=pe):(typeof T.componentDidUpdate!="function"||B===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),l=!1)}return qs(t,r,a,l,g,f)}function qs(t,r,a,l,f,g){Nl(t,r);var T=(r.flags&128)!==0;if(!l&&!T)return f&&cu(r,a,!1),jr(t,r,g);l=r.stateNode,Mc.current=r;var B=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&T?(r.child=bo(r,t.child,null,g),r.child=bo(r,null,B,g)):yr(t,r,B,g),r.memoizedState=l.state,f&&cu(r,a,!0),r.child}function El(t){var r=t.stateNode;r.pendingContext?lu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&lu(t,r.context,!1),Xo(t,r.containerInfo)}function Ru(t,r,a,l,f){return Ps(),js(f),r.flags|=256,yr(t,r,a,l),r.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Pl(t){return{baseLanes:t,cachePool:null,transitions:null}}function jl(t,r,a){var l=r.pendingProps,f=sn.current,g=!1,T=(r.flags&128)!==0,B;if((B=T)||(B=t!==null&&t.memoizedState===null?!1:(f&2)!==0),B?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(sn,f&1),t===null)return gl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=l.children,t=l.fallback,g?(l=r.mode,g=r.child,T={mode:"hidden",children:T},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=Yc(T,l,0,null),t=Wa(t,l,a,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=Pl(a),r.memoizedState=Ll,t):Al(r,T));if(f=t.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return Iu(t,r,T,l,B,f,a);if(g){g=l.fallback,T=r.mode,f=t.child,B=f.sibling;var K={mode:"hidden",children:l.children};return(T&1)===0&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=K,r.deletions=null):(l=Vs(f,K),l.subtreeFlags=f.subtreeFlags&14680064),B!==null?g=Vs(B,g):(g=Wa(g,T,a,null),g.flags|=2),g.return=r,l.return=r,l.sibling=g,r.child=l,l=g,g=r.child,T=t.child.memoizedState,T=T===null?Pl(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=t.childLanes&~a,r.memoizedState=Ll,l}return g=t.child,t=g.sibling,l=Vs(g,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=a),l.return=r,l.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=l,r.memoizedState=null,l}function Al(t,r){return r=Yc({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Rl(t,r,a,l){return l!==null&&js(l),bo(r,t.child,null,a),t=Al(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Iu(t,r,a,l,f,g,T){if(a)return r.flags&256?(r.flags&=-257,l=Lu(Error(d(422))),Rl(t,r,T,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=l.fallback,f=r.mode,l=Yc({mode:"visible",children:l.children},f,0,null),g=Wa(g,f,T,null),g.flags|=2,l.return=r,g.return=r,l.sibling=g,r.child=l,(r.mode&1)!==0&&bo(r,t.child,null,T),r.child.memoizedState=Pl(T),r.memoizedState=Ll,g);if((r.mode&1)===0)return Rl(t,r,T,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var B=l.dgst;return l=B,g=Error(d(419)),l=Lu(g,l,void 0),Rl(t,r,T,l)}if(B=(T&t.childLanes)!==0,Jn||B){if(l=Dt,l!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|T))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ei(t,f),eo(l,t,f,-1))}return tp(),l=Lu(Error(d(421))),Rl(t,r,T,l)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=mm.bind(null,t),f._reactRetry=r,null):(t=g.treeContext,jn=mo(f.nextSibling),mr=r,tn=!0,Yr=null,t!==null&&(zn[Fn++]=di,zn[Fn++]=Ni,zn[Fn++]=xo,di=t.id,Ni=t.overflow,xo=r),r=Al(r,l.children),r.flags|=4096,r)}function Ou(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Rs(t.return,r,a)}function Ot(t,r,a,l,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=f)}function Mu(t,r,a){var l=r.pendingProps,f=l.revealOrder,g=l.tail;if(yr(t,r,l.children,a),l=sn.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ou(t,a,r);else if(t.tag===19)Ou(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Vt(sn,l),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&mi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Ot(r,!1,f,a,g);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&mi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Ot(r,!0,a,null,g);break;case"together":Ot(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Il(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function jr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),wr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(d(153));if(r.child!==null){for(t=r.child,a=Vs(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Vs(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Yd(t,r,a){switch(r.tag){case 3:El(r),Ps();break;case 5:hu(r);break;case 1:tr(r.type)&&Es(r);break;case 4:Xo(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;Vt(Ca,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Vt(sn,sn.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?jl(t,r,a):(Vt(sn,sn.current&1),t=jr(t,r,a),t!==null?t.sibling:null);Vt(sn,sn.current&1);break;case 19:if(l=(a&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Mu(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(sn,sn.current),l)break;return null;case 22:case 23:return r.lanes=0,Fc(t,r,a)}return jr(t,r,a)}var Ia,Du,pn,Wc;Ia=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Du=function(){},pn=function(t,r,a,l){var f=t.memoizedProps;if(f!==l){t=r.stateNode,fi(hi.current);var g=null;switch(a){case"input":f=$t(t,f),l=$t(t,l),g=[];break;case"select":f=Y({},f,{value:void 0}),l=Y({},l,{value:void 0}),g=[];break;case"textarea":f=oe(t,f),l=oe(t,l),g=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fo)}yi(a,l);var T;a=null;for(pe in f)if(!l.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var B=f[pe];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(b.hasOwnProperty(pe)?g||(g=[]):(g=g||[]).push(pe,null));for(pe in l){var K=l[pe];if(B=f!=null?f[pe]:void 0,l.hasOwnProperty(pe)&&K!==B&&(K!=null||B!=null))if(pe==="style")if(B){for(T in B)!B.hasOwnProperty(T)||K&&K.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in K)K.hasOwnProperty(T)&&B[T]!==K[T]&&(a||(a={}),a[T]=K[T])}else a||(g||(g=[]),g.push(pe,a)),a=K;else pe==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,B=B?B.__html:void 0,K!=null&&B!==K&&(g=g||[]).push(pe,K)):pe==="children"?typeof K!="string"&&typeof K!="number"||(g=g||[]).push(pe,""+K):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(b.hasOwnProperty(pe)?(K!=null&&pe==="onScroll"&&Wt("scroll",t),g||B===K||(g=[])):(g=g||[]).push(pe,K))}a&&(g=g||[]).push("style",a);var pe=g;(r.updateQueue=pe)&&(r.flags|=4)}},Wc=function(t,r,a,l){a!==l&&(r.flags|=4)};function Oa(t,r){if(!tn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nr(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Ol(t,r,a){var l=r.pendingProps;switch(ml(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return tr(r.type)&&Ns(),nr(r),null;case 3:return l=r.stateNode,Pi(),en(fr),en(Gn),Qo(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ka(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Yr!==null&&(Zd(Yr),Yr=null))),Du(t,r),nr(r),null;case 5:fu(r);var f=fi(Zi.current);if(a=r.type,t!==null&&r.stateNode!=null)pn(t,r,a,l,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(d(166));return nr(r),null}if(t=fi(hi.current),ka(r)){l=r.stateNode,a=r.type;var g=r.memoizedProps;switch(l[Ci]=r,l[xa]=g,t=(r.mode&1)!==0,a){case"dialog":Wt("cancel",l),Wt("close",l);break;case"iframe":case"object":case"embed":Wt("load",l);break;case"video":case"audio":for(f=0;f<Do.length;f++)Wt(Do[f],l);break;case"source":Wt("error",l);break;case"img":case"image":case"link":Wt("error",l),Wt("load",l);break;case"details":Wt("toggle",l);break;case"input":hn(l,g),Wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Wt("invalid",l);break;case"textarea":Se(l,g),Wt("invalid",l)}yi(a,g),f=null;for(var T in g)if(g.hasOwnProperty(T)){var B=g[T];T==="children"?typeof B=="string"?l.textContent!==B&&(g.suppressHydrationWarning!==!0&&ya(l.textContent,B,t),f=["children",B]):typeof B=="number"&&l.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&ya(l.textContent,B,t),f=["children",""+B]):b.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Wt("scroll",l)}switch(a){case"input":Ge(l),lt(l,g,!0);break;case"textarea":Ge(l),xt(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=fo)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$e(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=T.createElement(a,{is:l.is}):(t=T.createElement(a),a==="select"&&(T=t,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):t=T.createElementNS(t,a),t[Ci]=r,t[xa]=l,Ia(t,r,!1,!1),r.stateNode=t;e:{switch(T=gt(a,l),a){case"dialog":Wt("cancel",t),Wt("close",t),f=l;break;case"iframe":case"object":case"embed":Wt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Do.length;f++)Wt(Do[f],t);f=l;break;case"source":Wt("error",t),f=l;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=l;break;case"details":Wt("toggle",t),f=l;break;case"input":hn(t,l),f=$t(t,l),Wt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=Y({},l,{value:void 0}),Wt("invalid",t);break;case"textarea":Se(t,l),f=oe(t,l),Wt("invalid",t);break;default:f=l}yi(a,f),B=f;for(g in B)if(B.hasOwnProperty(g)){var K=B[g];g==="style"?Wr(t,K):g==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&mt(t,K)):g==="children"?typeof K=="string"?(a!=="textarea"||K!=="")&&dt(t,K):typeof K=="number"&&dt(t,""+K):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(b.hasOwnProperty(g)?K!=null&&g==="onScroll"&&Wt("scroll",t):K!=null&&U(t,g,K,T))}switch(a){case"input":Ge(t),lt(t,l,!1);break;case"textarea":Ge(t),xt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Fe(l.value));break;case"select":t.multiple=!!l.multiple,g=l.value,g!=null?vt(t,!!l.multiple,g,!1):l.defaultValue!=null&&vt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=fo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(t&&r.stateNode!=null)Wc(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(d(166));if(a=fi(Zi.current),fi(hi.current),ka(r)){if(l=r.stateNode,a=r.memoizedProps,l[Ci]=r,(g=l.nodeValue!==a)&&(t=mr,t!==null))switch(t.tag){case 3:ya(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(l.nodeValue,a,(t.mode&1)!==0)}g&&(r.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ci]=r,r.stateNode=l}return nr(r),null;case 13:if(en(sn),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tn&&jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)kc(),Ps(),r.flags|=98560,g=!1;else if(g=ka(r),l!==null&&l.dehydrated!==null){if(t===null){if(!g)throw Error(d(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(d(317));g[Ci]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),g=!1}else Yr!==null&&(Zd(Yr),Yr=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(sn.current&1)!==0?Tt===0&&(Tt=3):tp())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return Pi(),Du(t,r),t===null&&po(r.stateNode.containerInfo),nr(r),null;case 10:return Wn(r.type._context),nr(r),null;case 17:return tr(r.type)&&Ns(),nr(r),null;case 19:if(en(sn),g=r.memoizedState,g===null)return nr(r),null;if(l=(r.flags&128)!==0,T=g.rendering,T===null)if(l)Oa(g,!1);else{if(Tt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(T=mi(t),T!==null){for(r.flags|=128,Oa(g,!1),l=T.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=a,a=r.child;a!==null;)g=a,t=l,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,t=T.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt(sn,sn.current&1|2),r.child}t=t.sibling}g.tail!==null&&Pt()>Ml&&(r.flags|=128,l=!0,Oa(g,!1),r.lanes=4194304)}else{if(!l)if(t=mi(T),t!==null){if(r.flags|=128,l=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Oa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!tn)return nr(r),null}else 2*Pt()-g.renderingStartTime>Ml&&a!==1073741824&&(r.flags|=128,l=!0,Oa(g,!1),r.lanes=4194304);g.isBackwards?(T.sibling=r.child,r.child=T):(a=g.last,a!==null?a.sibling=T:r.child=T,g.last=T)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Pt(),r.sibling=null,a=sn.current,Vt(sn,l?a&1|2:a&1),r):(nr(r),null);case 22:case 23:return ep(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(Bt&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function e(t,r){switch(ml(r),r.tag){case 1:return tr(r.type)&&Ns(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Pi(),en(fr),en(Gn),Qo(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return fu(r),null;case 13:if(en(sn),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Ps()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return en(sn),null;case 4:return Pi(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var n=!1,o=!1,i=typeof WeakSet=="function"?WeakSet:Set,s=null;function u(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Rn(t,r,l)}else a.current=null}function m(t,r,a){try{a()}catch(l){Rn(t,r,l)}}var y=!1;function x(t,r){if(dl=ut,t=iu(),ua(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,B=-1,K=-1,pe=0,je=0,Ae=t,Le=null;t:for(;;){for(var Qe;Ae!==a||f!==0&&Ae.nodeType!==3||(B=T+f),Ae!==g||l!==0&&Ae.nodeType!==3||(K=T+l),Ae.nodeType===3&&(T+=Ae.nodeValue.length),(Qe=Ae.firstChild)!==null;)Le=Ae,Ae=Qe;for(;;){if(Ae===t)break t;if(Le===a&&++pe===f&&(B=T),Le===g&&++je===l&&(K=T),(Qe=Ae.nextSibling)!==null)break;Ae=Le,Le=Ae.parentNode}Ae=Qe}a=B===-1||K===-1?null:{start:B,end:K}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gi={focusedElem:t,selectionRange:a},ut=!1,s=r;s!==null;)if(r=s,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,s=t;else for(;s!==null;){r=s;try{var rt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var it=rt.memoizedProps,qn=rt.memoizedState,le=r.stateNode,ee=le.getSnapshotBeforeUpdate(r.elementType===r.type?it:gr(r.type,it),qn);le.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(Me){Rn(r,r.return,Me)}if(t=r.sibling,t!==null){t.return=r.return,s=t;break}s=r.return}return rt=y,y=!1,rt}function k(t,r,a){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var g=f.destroy;f.destroy=void 0,g!==void 0&&m(r,a,g)}f=f.next}while(f!==l)}}function I(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==r)}}function F(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function te(t){var r=t.alternate;r!==null&&(t.alternate=null,te(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ci],delete r[xa],delete r[au],delete r[Ud],delete r[qd])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V(t){return t.tag===5||t.tag===3||t.tag===4}function fe(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ye(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=fo));else if(l!==4&&(t=t.child,t!==null))for(ye(t,r,a),t=t.sibling;t!==null;)ye(t,r,a),t=t.sibling}function Pe(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Pe(t,r,a),t=t.sibling;t!==null;)Pe(t,r,a),t=t.sibling}var Ne=null,Oe=!1;function Re(t,r,a){for(a=a.child;a!==null;)Be(t,r,a),a=a.sibling}function Be(t,r,a){if(S&&typeof S.onCommitFiberUnmount=="function")try{S.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 5:o||u(a,r);case 6:var l=Ne,f=Oe;Ne=null,Re(t,r,a),Ne=l,Oe=f,Ne!==null&&(Oe?(t=Ne,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ne.removeChild(a.stateNode));break;case 18:Ne!==null&&(Oe?(t=Ne,a=a.stateNode,t.nodeType===8?pl(t.parentNode,a):t.nodeType===1&&pl(t,a),be(t)):pl(Ne,a.stateNode));break;case 4:l=Ne,f=Oe,Ne=a.stateNode.containerInfo,Oe=!0,Re(t,r,a),Ne=l,Oe=f;break;case 0:case 11:case 14:case 15:if(!o&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var g=f,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&m(a,r,T),f=f.next}while(f!==l)}Re(t,r,a);break;case 1:if(!o&&(u(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(B){Rn(a,r,B)}Re(t,r,a);break;case 21:Re(t,r,a);break;case 22:a.mode&1?(o=(l=o)||a.memoizedState!==null,Re(t,r,a),o=l):Re(t,r,a);break;default:Re(t,r,a)}}function st(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(l){var f=gm.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function Ye(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var g=t,T=r,B=T;e:for(;B!==null;){switch(B.tag){case 5:Ne=B.stateNode,Oe=!1;break e;case 3:Ne=B.stateNode.containerInfo,Oe=!0;break e;case 4:Ne=B.stateNode.containerInfo,Oe=!0;break e}B=B.return}if(Ne===null)throw Error(d(160));Be(g,T,f),Ne=null,Oe=!1;var K=f.alternate;K!==null&&(K.return=null),f.return=null}catch(pe){Rn(f,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wt(r,t),r=r.sibling}function wt(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ye(r,t),Ct(t),l&4){try{k(3,t,t.return),I(3,t)}catch(it){Rn(t,t.return,it)}try{k(5,t,t.return)}catch(it){Rn(t,t.return,it)}}break;case 1:Ye(r,t),Ct(t),l&512&&a!==null&&u(a,a.return);break;case 5:if(Ye(r,t),Ct(t),l&512&&a!==null&&u(a,a.return),t.flags&32){var f=t.stateNode;try{dt(f,"")}catch(it){Rn(t,t.return,it)}}if(l&4&&(f=t.stateNode,f!=null)){var g=t.memoizedProps,T=a!==null?a.memoizedProps:g,B=t.type,K=t.updateQueue;if(t.updateQueue=null,K!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&et(f,g),gt(B,T);var pe=gt(B,g);for(T=0;T<K.length;T+=2){var je=K[T],Ae=K[T+1];je==="style"?Wr(f,Ae):je==="dangerouslySetInnerHTML"?mt(f,Ae):je==="children"?dt(f,Ae):U(f,je,Ae,pe)}switch(B){case"input":bt(f,g);break;case"textarea":me(f,g);break;case"select":var Le=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Qe=g.value;Qe!=null?vt(f,!!g.multiple,Qe,!1):Le!==!!g.multiple&&(g.defaultValue!=null?vt(f,!!g.multiple,g.defaultValue,!0):vt(f,!!g.multiple,g.multiple?[]:"",!1))}f[xa]=g}catch(it){Rn(t,t.return,it)}}break;case 6:if(Ye(r,t),Ct(t),l&4){if(t.stateNode===null)throw Error(d(162));f=t.stateNode,g=t.memoizedProps;try{f.nodeValue=g}catch(it){Rn(t,t.return,it)}}break;case 3:if(Ye(r,t),Ct(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{be(r.containerInfo)}catch(it){Rn(t,t.return,it)}break;case 4:Ye(r,t),Ct(t);break;case 13:Ye(r,t),Ct(t),f=t.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Ma=Pt())),l&4&&st(t);break;case 22:if(je=a!==null&&a.memoizedState!==null,t.mode&1?(o=(pe=o)||je,Ye(r,t),o=pe):Ye(r,t),Ct(t),l&8192){if(pe=t.memoizedState!==null,(t.stateNode.isHidden=pe)&&!je&&(t.mode&1)!==0)for(s=t,je=t.child;je!==null;){for(Ae=s=je;s!==null;){switch(Le=s,Qe=Le.child,Le.tag){case 0:case 11:case 14:case 15:k(4,Le,Le.return);break;case 1:u(Le,Le.return);var rt=Le.stateNode;if(typeof rt.componentWillUnmount=="function"){l=Le,a=Le.return;try{r=l,rt.props=r.memoizedProps,rt.state=r.memoizedState,rt.componentWillUnmount()}catch(it){Rn(l,a,it)}}break;case 5:u(Le,Le.return);break;case 22:if(Le.memoizedState!==null){rr(Ae);continue}}Qe!==null?(Qe.return=Le,s=Qe):rr(Ae)}je=je.sibling}e:for(je=null,Ae=t;;){if(Ae.tag===5){if(je===null){je=Ae;try{f=Ae.stateNode,pe?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=Ae.stateNode,K=Ae.memoizedProps.style,T=K!=null&&K.hasOwnProperty("display")?K.display:null,B.style.display=_r("display",T))}catch(it){Rn(t,t.return,it)}}}else if(Ae.tag===6){if(je===null)try{Ae.stateNode.nodeValue=pe?"":Ae.memoizedProps}catch(it){Rn(t,t.return,it)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===t)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===t)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===t)break e;je===Ae&&(je=null),Ae=Ae.return}je===Ae&&(je=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Ye(r,t),Ct(t),l&4&&st(t);break;case 21:break;default:Ye(r,t),Ct(t)}}function Ct(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(V(a)){var l=a;break e}a=a.return}throw Error(d(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(dt(f,""),l.flags&=-33);var g=fe(t);Pe(t,g,f);break;case 3:case 4:var T=l.stateNode.containerInfo,B=fe(t);ye(t,B,T);break;default:throw Error(d(161))}}catch(K){Rn(t,t.return,K)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){s=t,nn(t)}function nn(t,r,a){for(var l=(t.mode&1)!==0;s!==null;){var f=s,g=f.child;if(f.tag===22&&l){var T=f.memoizedState!==null||n;if(!T){var B=f.alternate,K=B!==null&&B.memoizedState!==null||o;B=n;var pe=o;if(n=T,(o=K)&&!pe)for(s=f;s!==null;)T=s,K=T.child,T.tag===22&&T.memoizedState!==null?yn(f):K!==null?(K.return=T,s=K):yn(f);for(;g!==null;)s=g,nn(g),g=g.sibling;s=f,n=B,o=pe}vr(t)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,s=g):vr(t)}}function vr(t){for(;s!==null;){var r=s;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:o||I(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!o)if(a===null)l.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:gr(r.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Vo(r,g,l);break;case 3:var T=r.updateQueue;if(T!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vo(r,T,a)}break;case 5:var B=r.stateNode;if(a===null&&r.flags&4){a=B;var K=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&a.focus();break;case"img":K.src&&(a.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var je=pe.memoizedState;if(je!==null){var Ae=je.dehydrated;Ae!==null&&be(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}o||r.flags&512&&F(r)}catch(Le){Rn(r,r.return,Le)}}if(r===t){s=null;break}if(a=r.sibling,a!==null){a.return=r.return,s=a;break}s=r.return}}function rr(t){for(;s!==null;){var r=s;if(r===t){s=null;break}var a=r.sibling;if(a!==null){a.return=r.return,s=a;break}s=r.return}}function yn(t){for(;s!==null;){var r=s;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{I(4,r)}catch(K){Rn(r,a,K)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(K){Rn(r,f,K)}}var g=r.return;try{F(r)}catch(K){Rn(r,g,K)}break;case 5:var T=r.return;try{F(r)}catch(K){Rn(r,T,K)}}}catch(K){Rn(r,r.return,K)}if(r===t){s=null;break}var B=r.sibling;if(B!==null){B.return=r.return,s=B;break}s=r.return}}var xr=Math.ceil,Tn=$.ReactCurrentDispatcher,vn=$.ReactCurrentOwner,Mt=$.ReactCurrentBatchConfig,ct=0,Dt=null,rn=null,an=0,Bt=0,br=ci(0),Tt=0,os=null,wr=0,Ri=0,Ji=0,An=null,Un=null,Ma=0,Ml=1/0,ss=null,Hc=!1,Vd=null,Ks=null,Bc=!1,$s=null,Uc=0,zu=0,Xd=null,qc=-1,Kc=0;function zr(){return(ct&6)!==0?Pt():qc!==-1?qc:qc=Pt()}function Gs(t){return(t.mode&1)===0?1:(ct&2)!==0&&an!==0?an&-an:Sc.transition!==null?(Kc===0&&(Kc=Zs()),Kc):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:bi(t.type)),t)}function eo(t,r,a,l){if(50<zu)throw zu=0,Xd=null,Error(d(185));Kn(t,a,l),((ct&2)===0||t!==Dt)&&(t===Dt&&((ct&2)===0&&(Ri|=a),Tt===4&&Ys(t,an)),Zr(t,l),a===1&&ct===0&&(r.mode&1)===0&&(Ml=Pt()+500,hl&&vo()))}function Zr(t,r){var a=t.callbackNode;ft(t,r);var l=si(t,t===Dt?an:0);if(l===0)a!==null&&Di(a),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(a!=null&&Di(a),r===1)t.tag===0?xc(th.bind(null,t)):Ti(th.bind(null,t)),yc(function(){(ct&6)===0&&vo()}),a=null;else{switch(Fi(l)){case 1:a=xi;break;case 4:a=Yt;break;case 16:a=Xe;break;case 536870912:a=cr;break;default:a=Xe}a=uh(a,eh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function eh(t,r){if(qc=-1,Kc=0,(ct&6)!==0)throw Error(d(327));var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var l=si(t,t===Dt?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=$c(t,l);else{r=l;var f=ct;ct|=2;var g=rh();(Dt!==t||an!==r)&&(ss=null,Ml=Pt()+500,za(t,r));do try{pm();break}catch(B){nh(t,B)}while(!0);vl(),Tn.current=g,ct=f,rn!==null?r=0:(Dt=null,an=0,r=Tt)}if(r!==0){if(r===2&&(f=fs(t),f!==0&&(l=f,r=Qd(t,f))),r===1)throw a=os,za(t,0),Ys(t,l),Zr(t,Pt()),a;if(r===6)Ys(t,l);else{if(f=t.current.alternate,(l&30)===0&&!cm(f)&&(r=$c(t,l),r===2&&(g=fs(t),g!==0&&(l=g,r=Qd(t,g))),r===1))throw a=os,za(t,0),Ys(t,l),Zr(t,Pt()),a;switch(t.finishedWork=f,t.finishedLanes=l,r){case 0:case 1:throw Error(d(345));case 2:Fa(t,Un,ss);break;case 3:if(Ys(t,l),(l&130023424)===l&&(r=Ma+500-Pt(),10<r)){if(si(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){zr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Yi(Fa.bind(null,t,Un,ss),r);break}Fa(t,Un,ss);break;case 4:if(Ys(t,l),(l&4194240)===l)break;for(r=t.eventTimes,f=-1;0<l;){var T=31-he(l);g=1<<T,T=r[T],T>f&&(f=T),l&=~g}if(l=f,l=Pt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*xr(l/1960))-l,10<l){t.timeoutHandle=Yi(Fa.bind(null,t,Un,ss),l);break}Fa(t,Un,ss);break;case 5:Fa(t,Un,ss);break;default:throw Error(d(329))}}}return Zr(t,Pt()),t.callbackNode===a?eh.bind(null,t):null}function Qd(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(za(t,r).flags|=256),t=$c(t,r),t!==2&&(r=Un,Un=a,r!==null&&Zd(r)),t}function Zd(t){Un===null?Un=t:Un.push.apply(Un,t)}function cm(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],g=f.getSnapshot;f=f.value;try{if(!_n(g(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ys(t,r){for(r&=~Ji,r&=~Ri,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-he(r),l=1<<a;t[a]=-1,r&=~l}}function th(t){if((ct&6)!==0)throw Error(d(327));Dl();var r=si(t,0);if((r&1)===0)return Zr(t,Pt()),null;var a=$c(t,r);if(t.tag!==0&&a===2){var l=fs(t);l!==0&&(r=l,a=Qd(t,l))}if(a===1)throw a=os,za(t,0),Ys(t,r),Zr(t,Pt()),a;if(a===6)throw Error(d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Fa(t,Un,ss),Zr(t,Pt()),null}function Jd(t,r){var a=ct;ct|=1;try{return t(r)}finally{ct=a,ct===0&&(Ml=Pt()+500,hl&&vo())}}function Da(t){$s!==null&&$s.tag===0&&(ct&6)===0&&Dl();var r=ct;ct|=1;var a=Mt.transition,l=Nt;try{if(Mt.transition=null,Nt=1,t)return t()}finally{Nt=l,Mt.transition=a,ct=r,(ct&6)===0&&vo()}}function ep(){Bt=br.current,en(br)}function za(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,va(a)),rn!==null)for(a=rn.return;a!==null;){var l=a;switch(ml(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ns();break;case 3:Pi(),en(fr),en(Gn),Qo();break;case 5:fu(l);break;case 4:Pi();break;case 13:en(sn);break;case 19:en(sn);break;case 10:Wn(l.type._context);break;case 22:case 23:ep()}a=a.return}if(Dt=t,rn=t=Vs(t.current,null),an=Bt=r,Tt=0,os=null,Ji=Ri=wr=0,Un=An=null,wo!==null){for(r=0;r<wo.length;r++)if(a=wo[r],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,g=a.pending;if(g!==null){var T=g.next;g.next=f,l.next=T}a.pending=l}wo=null}return t}function nh(t,r){do{var a=rn;try{if(vl(),wl.current=ja,Ea){for(var l=dn.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ea=!1}if(Zo=0,It=Hn=dn=null,La=!1,Pa=0,vn.current=null,a===null||a.return===null){Tt=1,os=r,rn=null;break}e:{var g=t,T=a.return,B=a,K=r;if(r=an,B.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var pe=K,je=B,Ae=je.tag;if((je.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Le=je.alternate;Le?(je.updateQueue=Le.updateQueue,je.memoizedState=Le.memoizedState,je.lanes=Le.lanes):(je.updateQueue=null,je.memoizedState=null)}var Qe=Au(T);if(Qe!==null){Qe.flags&=-257,rs(Qe,T,B,g,r),Qe.mode&1&&Oc(g,pe,r),r=Qe,K=pe;var rt=r.updateQueue;if(rt===null){var it=new Set;it.add(K),r.updateQueue=it}else rt.add(K);break e}else{if((r&1)===0){Oc(g,pe,r),tp();break e}K=Error(d(426))}}else if(tn&&B.mode&1){var qn=Au(T);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),rs(qn,T,B,g,r),js(ns(K,B));break e}}g=K=ns(K,B),Tt!==4&&(Tt=2),An===null?An=[g]:An.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var le=Tl(g,K,r);Is(g,le);break e;case 1:B=K;var ee=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Ks===null||!Ks.has(ce)))){g.flags|=65536,r&=-r,g.lanes|=r;var Me=ju(g,B,r);Is(g,Me);break e}}g=g.return}while(g!==null)}oh(a)}catch(at){r=at,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function rh(){var t=Tn.current;return Tn.current=ja,t===null?ja:t}function tp(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||(wr&268435455)===0&&(Ri&268435455)===0||Ys(Dt,an)}function $c(t,r){var a=ct;ct|=2;var l=rh();(Dt!==t||an!==r)&&(ss=null,za(t,r));do try{dm();break}catch(f){nh(t,f)}while(!0);if(vl(),ct=a,Tn.current=l,rn!==null)throw Error(d(261));return Dt=null,an=0,Tt}function dm(){for(;rn!==null;)ih(rn)}function pm(){for(;rn!==null&&!ii();)ih(rn)}function ih(t){var r=lh(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,r===null?oh(t):rn=r,vn.current=null}function oh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Ol(a,r,Bt),a!==null){rn=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,rn=null;return}}if(r=r.sibling,r!==null){rn=r;return}rn=r=t}while(r!==null);Tt===0&&(Tt=5)}function Fa(t,r,a){var l=Nt,f=Mt.transition;try{Mt.transition=null,Nt=1,hm(t,r,a,l)}finally{Mt.transition=f,Nt=l}return null}function hm(t,r,a,l){do Dl();while($s!==null);if((ct&6)!==0)throw Error(d(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(d(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(jo(t,g),t===Dt&&(rn=Dt=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bc||(Bc=!0,uh(Xe,function(){return Dl(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Mt.transition,Mt.transition=null;var T=Nt;Nt=1;var B=ct;ct|=4,vn.current=null,x(t,a),wt(a,t),Fd(Gi),ut=!!dl,Gi=dl=null,t.current=a,Bn(a),vi(),ct=B,Nt=T,Mt.transition=g}else t.current=a;if(Bc&&(Bc=!1,$s=t,Uc=f),g=t.pendingLanes,g===0&&(Ks=null),z(a.stateNode),Zr(t,Pt()),r!==null)for(l=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Hc)throw Hc=!1,t=Vd,Vd=null,t;return(Uc&1)!==0&&t.tag!==0&&Dl(),g=t.pendingLanes,(g&1)!==0?t===Xd?zu++:(zu=0,Xd=t):zu=0,vo(),null}function Dl(){if($s!==null){var t=Fi(Uc),r=Mt.transition,a=Nt;try{if(Mt.transition=null,Nt=16>t?16:t,$s===null)var l=!1;else{if(t=$s,$s=null,Uc=0,(ct&6)!==0)throw Error(d(331));var f=ct;for(ct|=4,s=t.current;s!==null;){var g=s,T=g.child;if((s.flags&16)!==0){var B=g.deletions;if(B!==null){for(var K=0;K<B.length;K++){var pe=B[K];for(s=pe;s!==null;){var je=s;switch(je.tag){case 0:case 11:case 15:k(8,je,g)}var Ae=je.child;if(Ae!==null)Ae.return=je,s=Ae;else for(;s!==null;){je=s;var Le=je.sibling,Qe=je.return;if(te(je),je===pe){s=null;break}if(Le!==null){Le.return=Qe,s=Le;break}s=Qe}}}var rt=g.alternate;if(rt!==null){var it=rt.child;if(it!==null){rt.child=null;do{var qn=it.sibling;it.sibling=null,it=qn}while(it!==null)}}s=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,s=T;else e:for(;s!==null;){if(g=s,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:k(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,s=le;break e}s=g.return}}var ee=t.current;for(s=ee;s!==null;){T=s;var ce=T.child;if((T.subtreeFlags&2064)!==0&&ce!==null)ce.return=T,s=ce;else e:for(T=ee;s!==null;){if(B=s,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:I(9,B)}}catch(at){Rn(B,B.return,at)}if(B===T){s=null;break e}var Me=B.sibling;if(Me!==null){Me.return=B.return,s=Me;break e}s=B.return}}if(ct=f,vo(),S&&typeof S.onPostCommitFiberRoot=="function")try{S.onPostCommitFiberRoot(On,t)}catch{}l=!0}return l}finally{Nt=a,Mt.transition=r}}return!1}function sh(t,r,a){r=ns(a,r),r=Tl(t,r,1),t=pi(t,r,1),r=zr(),t!==null&&(Kn(t,1,r),Zr(t,r))}function Rn(t,r,a){if(t.tag===3)sh(t,t,a);else for(;r!==null;){if(r.tag===3){sh(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ks===null||!Ks.has(l))){t=ns(a,t),t=ju(r,t,1),r=pi(r,t,1),t=zr(),r!==null&&(Kn(r,1,t),Zr(r,t));break}}r=r.return}}function fm(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),r=zr(),t.pingedLanes|=t.suspendedLanes&a,Dt===t&&(an&a)===a&&(Tt===4||Tt===3&&(an&130023424)===an&&500>Pt()-Ma?za(t,0):Ji|=a),Zr(t,r)}function ah(t,r){r===0&&((t.mode&1)===0?r=1:(r=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var a=zr();t=Ei(t,r),t!==null&&(Kn(t,r,a),Zr(t,a))}function mm(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),ah(t,a)}function gm(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(d(314))}l!==null&&l.delete(r),ah(t,a)}var lh;lh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||fr.current)Jn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Jn=!1,Yd(t,r,a);Jn=(t.flags&131072)!==0}else Jn=!1,tn&&(r.flags&1048576)!==0&&fl(r,Pr,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Il(t,r),t=r.pendingProps;var f=Ts(r,Gn.current);Go(r,a),f=_l(null,r,l,t,f,a);var g=mu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tr(l)?(g=!0,Es(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,xl(r),f.updater=Ra,r.stateNode=f,f._reactInternals=r,Eu(r,l,t,a),r=qs(null,r,l,!0,g,a)):(r.tag=0,tn&&g&&qo(r),yr(null,r,f,a),r=r.child),r;case 16:l=r.elementType;e:{switch(Il(t,r),t=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=vm(l),t=gr(l,t),f){case 0:r=is(null,r,l,t,a);break e;case 1:r=Qr(null,r,l,t,a);break e;case 11:r=Dc(null,r,l,t,a);break e;case 14:r=zc(null,r,l,gr(l.type,t),a);break e}throw Error(d(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),is(t,r,l,f,a);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Qr(t,r,l,f,a);case 3:e:{if(El(r),t===null)throw Error(d(387));l=r.pendingProps,g=r.memoizedState,f=g.element,Yo(t,r),bl(r,l,null,a);var T=r.memoizedState;if(l=T.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=ns(Error(d(423)),r),r=Ru(t,r,l,a,f);break e}else if(l!==f){f=ns(Error(d(424)),r),r=Ru(t,r,l,a,f);break e}else for(jn=mo(r.stateNode.containerInfo.firstChild),mr=r,tn=!0,Yr=null,a=_a(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ps(),l===f){r=jr(t,r,a);break e}yr(t,r,l,a)}r=r.child}return r;case 5:return hu(r),t===null&&gl(r),l=r.type,f=r.pendingProps,g=t!==null?t.memoizedProps:null,T=f.children,Fo(l,f)?T=null:g!==null&&Fo(l,g)&&(r.flags|=32),Nl(t,r),yr(t,r,T,a),r.child;case 6:return t===null&&gl(r),null;case 13:return jl(t,r,a);case 4:return Xo(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=bo(r,null,l,a):yr(t,r,l,a),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Dc(t,r,l,f,a);case 7:return yr(t,r,r.pendingProps,a),r.child;case 8:return yr(t,r,r.pendingProps.children,a),r.child;case 12:return yr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,g=r.memoizedProps,T=f.value,Vt(Ca,l._currentValue),l._currentValue=T,g!==null)if(_n(g.value,T)){if(g.children===f.children&&!fr.current){r=jr(t,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var B=g.dependencies;if(B!==null){T=g.child;for(var K=B.firstContext;K!==null;){if(K.context===l){if(g.tag===1){K=Li(-1,a&-a),K.tag=2;var pe=g.updateQueue;if(pe!==null){pe=pe.shared;var je=pe.pending;je===null?K.next=K:(K.next=je.next,je.next=K),pe.pending=K}}g.lanes|=a,K=g.alternate,K!==null&&(K.lanes|=a),Rs(g.return,a,r),B.lanes|=a;break}K=K.next}}else if(g.tag===10)T=g.type===r.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(d(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Rs(T,a,r),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===r){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}yr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,Go(r,a),f=Dr(f),l=l(f),r.flags|=1,yr(t,r,l,a),r.child;case 14:return l=r.type,f=gr(l,r.pendingProps),f=gr(l.type,f),zc(t,r,l,f,a);case 15:return Xt(t,r,r.type,r.pendingProps,a);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Il(t,r),r.tag=1,tr(l)?(t=!0,Es(r)):t=!1,Go(r,a),Ac(r,l,f),Eu(r,l,f,a),qs(null,r,l,!0,t,a);case 19:return Mu(t,r,a);case 22:return Fc(t,r,a)}throw Error(d(156,r.tag))};function uh(t,r){return Er(t,r)}function ym(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(t,r,a,l){return new ym(t,r,a,l)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vm(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ee)return 11;if(t===C)return 14}return 2}function Vs(t,r){var a=t.alternate;return a===null?(a=Ii(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Gc(t,r,a,l,f,g){var T=2;if(l=t,typeof t=="function")np(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case ie:return Wa(a.children,f,g,r);case Ce:T=8,f|=8;break;case We:return t=Ii(12,a,r,f|2),t.elementType=We,t.lanes=g,t;case re:return t=Ii(13,a,r,f),t.elementType=re,t.lanes=g,t;case ve:return t=Ii(19,a,r,f),t.elementType=ve,t.lanes=g,t;case G:return Yc(a,f,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _e:T=10;break e;case q:T=9;break e;case Ee:T=11;break e;case C:T=14;break e;case Q:T=16,l=null;break e}throw Error(d(130,t==null?t:typeof t,""))}return r=Ii(T,a,r,f),r.elementType=t,r.type=l,r.lanes=g,r}function Wa(t,r,a,l){return t=Ii(7,t,l,r),t.lanes=a,t}function Yc(t,r,a,l){return t=Ii(22,t,l,r),t.elementType=G,t.lanes=a,t.stateNode={isHidden:!1},t}function rp(t,r,a){return t=Ii(6,t,null,r),t.lanes=a,t}function ip(t,r,a){return r=Ii(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function xm(t,r,a,l,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function op(t,r,a,l,f,g,T,B,K){return t=new xm(t,r,a,B,K),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Ii(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(g),t}function bm(t,r,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:l==null?null:""+l,children:t,containerInfo:r,implementation:a}}function ch(t){if(!t)return yo;t=t._reactInternals;e:{if(wn(t)!==t||t.tag!==1)throw Error(d(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(t.tag===1){var a=t.type;if(tr(a))return uu(t,a,r)}return r}function dh(t,r,a,l,f,g,T,B,K){return t=op(a,l,!0,t,f,g,T,B,K),t.context=ch(null),a=t.current,l=zr(),f=Gs(a),g=Li(l,f),g.callback=r??null,pi(a,g,f),t.current.lanes=f,Kn(t,f,l),Zr(t,l),t}function Vc(t,r,a,l){var f=r.current,g=zr(),T=Gs(f);return a=ch(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(g,T),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=pi(f,r,T),t!==null&&(eo(t,f,T,g),Na(t,f,T)),T}function Xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ph(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function sp(t,r){ph(t,r),(t=t.alternate)&&ph(t,r)}function wm(){return null}var hh=typeof reportError=="function"?reportError:function(t){console.error(t)};function ap(t){this._internalRoot=t}Qc.prototype.render=ap.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(d(409));Vc(t,r,null,null)},Qc.prototype.unmount=ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Da(function(){Vc(null,t,null,null)}),r[Vi]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var r=Js();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Or.length&&r!==0&&r<Or[a].priority;a++);Or.splice(a,0,t),a===0&&gs(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fh(){}function km(t,r,a,l,f){if(f){if(typeof l=="function"){var g=l;l=function(){var pe=Xc(T);g.call(pe)}}var T=dh(r,l,t,0,null,!1,!1,"",fh);return t._reactRootContainer=T,t[Vi]=T.current,po(t.nodeType===8?t.parentNode:t),Da(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var B=l;l=function(){var pe=Xc(K);B.call(pe)}}var K=op(t,0,!1,null,null,!1,!1,"",fh);return t._reactRootContainer=K,t[Vi]=K.current,po(t.nodeType===8?t.parentNode:t),Da(function(){Vc(r,K,a,l)}),K}function Jc(t,r,a,l,f){var g=a._reactRootContainer;if(g){var T=g;if(typeof f=="function"){var B=f;f=function(){var K=Xc(T);B.call(K)}}Vc(r,T,t,f)}else T=km(a,r,t,f,l);return Xc(T)}Kr=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=kn(r.pendingLanes);a!==0&&(io(r,a|1),Zr(r,Pt()),(ct&6)===0&&(Ml=Pt()+500,vo()))}break;case 13:Da(function(){var l=Ei(t,1);if(l!==null){var f=zr();eo(l,t,1,f)}}),sp(t,1)}},ai=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var a=zr();eo(r,t,134217728,a)}sp(t,134217728)}},dr=function(t){if(t.tag===13){var r=Gs(t),a=Ei(t,r);if(a!==null){var l=zr();eo(a,t,r,l)}sp(t,r)}},Js=function(){return Nt},oo=function(t,r){var a=Nt;try{return Nt=t,r()}finally{Nt=a}},Cr=function(t,r,a){switch(r){case"input":if(bt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var f=gn(l);if(!f)throw Error(d(90));qt(l),bt(l,f)}}}break;case"textarea":me(t,a);break;case"select":r=a.value,r!=null&&vt(t,!!a.multiple,r,!1)}},ar=Jd,bn=Da;var Sm={usingClientEntryPoint:!1,Events:[cn,Cn,gn,En,ln,Jd]},Fu={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:Fu.bundleType,version:Fu.version,rendererPackageName:Fu.rendererPackageName,rendererConfig:Fu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nr(t),t===null?null:t.stateNode},findFiberByHostInstance:Fu.findFiberByHostInstance||wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ed.isDisabled&&ed.supportsFiber)try{On=ed.inject(_m),S=ed}catch{}}return Jr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm,Jr.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(r))throw Error(d(200));return bm(t,r,null,a)},Jr.createRoot=function(t,r){if(!lp(t))throw Error(d(299));var a=!1,l="",f=hh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=op(t,1,!1,null,null,a,!1,l,f),t[Vi]=r.current,po(t.nodeType===8?t.parentNode:t),new ap(r)},Jr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=Nr(r),t=t===null?null:t.stateNode,t},Jr.flushSync=function(t){return Da(t)},Jr.hydrate=function(t,r,a){if(!Zc(r))throw Error(d(200));return Jc(null,t,r,!0,a)},Jr.hydrateRoot=function(t,r,a){if(!lp(t))throw Error(d(405));var l=a!=null&&a.hydratedSources||null,f=!1,g="",T=hh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),r=dh(r,null,t,1,a??null,f,!1,g,T),t[Vi]=r.current,po(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new Qc(r)},Jr.render=function(t,r,a){if(!Zc(r))throw Error(d(200));return Jc(null,t,r,!1,a)},Jr.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(d(40));return t._reactRootContainer?(Da(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1},Jr.unstable_batchedUpdates=Jd,Jr.unstable_renderSubtreeIntoContainer=function(t,r,a,l){if(!Zc(a))throw Error(d(200));if(t==null||t._reactInternals===void 0)throw Error(d(38));return Jc(t,r,a,!1,l)},Jr.version="18.3.1-next-f1338f8080-20240426",Jr}var kh;function Om(){if(kh)return dp.exports;kh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(p){console.error(p)}}return c(),dp.exports=Im(),dp.exports}var Sh;function Mm(){if(Sh)return td;Sh=1;var c=Om();return td.createRoot=c.createRoot,td.hydrateRoot=c.hydrateRoot,td}var Dm=Mm();const zm=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],sd=zm.map(([c,p,d,v,b],w)=>({id:`sample-${w+1}`,first:c,last:p,sheetName:w===3||w===11?null:`${c} ${p}`,github:d,studentName:v,sections:w===0?["p1","p3"]:[b],status:w%5===0?"Active now":w%4===0?"Viewing page":"No recent signal",current:w%3===0?"Strings and Variables":w%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:w%4===0?null:8+w%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:w%4===0?"Started":"Completed",score:w%4===0?null:11+w%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:w%3===0?"Submitted":"Needs revision",score:w%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":w%4===0?0:19+w%6,"2026-10-26":w%3===0?12:8+w%5}})),Fm=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function ad(c=new Date){const p=Object.fromEntries(Fm.formatToParts(c).filter(v=>v.type!=="literal").map(v=>[v.type,v.value])),d=new Date(Date.UTC(Number(p.year),Number(p.month)-1,Number(p.day)));return d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7),d.toISOString().slice(0,10)}function Np(c=new Date,p=8){const d=new Date(ad(c)+"T12:00:00Z");return Array.from({length:p},(v,b)=>{const w=new Date(d);return w.setUTCDate(w.getUTCDate()-b*7),w.toISOString().slice(0,10)})}const Wl=c=>new Date(c+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Wm=(c,p,d)=>`${c}|${p}|${d}`;function Hm({response:c,type:p,aiUse:d,aiDetails:v}){return["essay","logic-puzzle"].includes(p)?String(c).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(d)?d==="disclosed"&&String(v).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Bm=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:ad(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:ad(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Co={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},Um=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],qm=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Km=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],$m=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Gm=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Ym=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],Vm=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],Xm=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],Qm=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],Zm=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Jm=[...Um,...qm,...Km,...$m,...Gm,...Ym,...Vm,...Xm,...Qm,...Zm],kf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Ba(c){return typeof c=="string"?c:typeof(c==null?void 0:c.id)=="string"?c.id:""}function No(c){return String((c==null?void 0:c.title)||(c==null?void 0:c.unitName)||(c==null?void 0:c.name)||"Lessons")}function Zu(c,p=1){return(c==null?void 0:c.number)??(c==null?void 0:c.unit)??p}function to(c){return((c==null?void 0:c.lessons)||[]).map(Ba).filter(Boolean)}function ld(c){return Array.isArray(c==null?void 0:c.units)?c.units.flatMap(to):Array.isArray(c==null?void 0:c.lessons)?c.lessons.map(Ba).filter(Boolean):[]}function eg(c,p){return((c==null?void 0:c.units)||[]).some(d=>to(d).includes(p))}function Ua(c,p,d=kf){var _,P;if(!p)return null;const v=((c==null?void 0:c.units)||[]).find(A=>to(A).includes(p)),b=((v==null?void 0:v.lessons)||[]).find(A=>Ba(A)===p),w=typeof b=="object"&&b||((_=v==null?void 0:v.lessonMeta)==null?void 0:_[p])||((P=c==null?void 0:c.lessonRecords)==null?void 0:P[p])||{},L=(d==null?void 0:d[p])||{},E=String(w.title||w.name||L.title||p.split("/").at(-1));return{...L,...w,id:p,title:E,kind:w.kind||L.kind||"Lesson",difficulty:w.difficulty||L.difficulty||"",points:w.points??L.points??null,language:w.language||L.language||(c==null?void 0:c.language)||"text",challenge:w.challenge||w.summary||L.challenge||"",starter:w.starter||L.starter||"",console:L.console||(w.markdownSource?"Run Python to see your output. Checks use published examples only.":""),ready:!!(d!=null&&d[p])||typeof w.markdownSource=="string"&&w.starter!==void 0,isPublished:typeof w.markdownSource=="string"&&w.starter!==void 0}}function qa(c,p,d=kf){var v;return((v=Ua(c,p,d))==null?void 0:v.title)||""}function Sf(c){const p=Array.isArray(c)?{lessons:c}:c||{},d=new Map,v=new Set,b=[],w=(E,_,P,A)=>{const M=String(E);let R=b.find(X=>X.id===M);return R||(R={id:M,title:String(_||"Lessons"),description:String(P||""),number:A,lessons:[]},b.push(R)),R},L=(E,_)=>{const P=Ba(_);!P||v.has(P)||(v.add(P),E.lessons.push(P),d.set(P,typeof _=="string"?{id:P}:{..._}))};return Array.isArray(p.units)?p.units.forEach((E,_)=>{const P=w(E.id||`unit-${_+1}`,No(E),E.description||E.summary,Zu(E,_+1));(E.lessons||[]).forEach(A=>L(P,A))}):Array.isArray(p.lessons)&&p.lessons.forEach((E,_)=>{if(!E||!Ba(E))return;const P=E.unit||null,A=Ba(E).indexOf("/"),M=P!=null?A>=0?Ba(E).slice(0,A):`unit-${P}`:E.competency?`topic-${String(E.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",R=E.unitName||E.competency||"Lessons",X=w(M,R,"",P??b.length+1);L(X,E)}),{units:b,lessonRecords:Object.fromEntries(d),lessons:b.flatMap(to)}}const fp=Sf(Jm),Eo=[{id:"computer-science-1",units:fp.units,lessonRecords:fp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:fp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Co["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Co["game-programming"].flatMap(c=>c.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Co["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Co["mobile-app-dev"].flatMap(c=>c.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Co.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Co.capstone.flatMap(c=>c.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Co.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Co.uil.flatMap(c=>c.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"tsi-math",units:Co["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Co["tsi-math"].flatMap(c=>c.lessons),topics:["Percents","Ratios","Equations"]}],ti=c=>Eo.find(p=>p.id===c),zp=c=>{var p;return(p=ti(c))==null?void 0:p.label};function yd(c){return typeof c=="string"&&/^#[0-9a-fA-F]{6}$/.test(c)}function tg(c,p={}){const d=p&&typeof p=="object"?p[c.id]:null;return yd(d)?d.toUpperCase():c.color}function ng(c){if(!yd(c))return"#101012";const p=[1,3,5].map(v=>parseInt(c.slice(v,v+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return p[0]*.2126+p[1]*.7152+p[2]*.0722>.179?"#101012":"#FFFFFF"}function rg(c,p,d=document.documentElement){for(const v of p){const b=`--student-course-color-${v.id}`,w=c&&typeof c=="object"?c[v.id]:null,L=`--student-course-ink-${v.id}`;yd(w)?(d.style.setProperty(b,w),d.style.setProperty(L,ng(w))):(d.style.removeProperty(b),d.style.removeProperty(L))}}function Nn(c,p){const[d,v]=Ue.useState(()=>{try{const b=localStorage.getItem(c);return b===null?p:JSON.parse(b)}catch{return p}});return Ue.useEffect(()=>{try{localStorage.setItem(c,JSON.stringify(d))}catch{}},[c,d]),[d,v]}function ig(c,p=[]){return Array.isArray(p)&&p.includes(c)}function _f(c,p=[]){const d=ld(c),v=d.filter(b=>ig(b,p)).length;return{completed:v,total:d.length,percent:d.length?Math.round(v/d.length*100):0}}function og(c,p){const d=Array.isArray(c)?c:[];return d.includes(p)?d.filter(v=>v!==p):[...d,p]}const sg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function ag(c=new Date){const p=Object.fromEntries(sg.formatToParts(c).filter(d=>d.type!=="literal").map(d=>[d.type,d.value]));return`${p.year}-${p.month}-${p.day}`}function ud(c){return c?new Date(c+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function Xu(c,p=[]){return p.find(d=>d.id===c)||null}function lg(c,p=[]){return p.find(d=>d.id===c)||null}function vd(c,{assignments:p=[],grades:d=[],completedLessons:v=[],today:b=ag()}={}){const w=lg(c,p),L=Xu(c,d),E=c.startsWith("lesson:")&&v.includes(c.slice(7)),_=!!L||E;return w!=null&&w.dueDate?{state:_?"completed":w.dueDate<b?"overdue":"assigned",dueDate:w.dueDate,grade:L,completed:_}:{state:_?"completed":"unassigned",dueDate:null,grade:L,completed:_}}function Ep(c=[]){const p=c.reduce((v,b)=>v+b.earned,0),d=c.reduce((v,b)=>v+b.possible,0);return{earned:p,possible:d,percent:d?Math.round(100*p/d):null,count:c.length}}function ug(c=[]){const p=new Map;return c.forEach(d=>{const v=ad(new Date(d.gradedAt+"T12:00:00Z"));p.has(v)||p.set(v,[]),p.get(v).push(d)}),[...p.entries()].map(([d,v])=>({week:d,...Ep(v)})).sort((d,v)=>v.week.localeCompare(d.week))}function cg(c=[],p=[]){return[...new Set([...Array.isArray(c)?c:[],...p.filter(d=>d.id.startsWith("lesson:")).map(d=>d.id.slice(7))])]}const dg=[{id:"lesson:python-strings",courseId:"computer-science-1",earned:8,possible:10,gradedAt:"2026-10-28"},{id:"lesson:python-variables",courseId:"computer-science-1",earned:10,possible:10,gradedAt:"2026-11-04"},{id:"lesson:web-layout",courseId:"mobile-app-dev",earned:9,possible:10,gradedAt:"2026-11-03"},{id:"lesson:capstone-discovery",courseId:"capstone",earned:10,possible:10,gradedAt:"2026-10-30"},{id:"lesson:uil-loops",courseId:"uil",earned:10,possible:10,gradedAt:"2026-11-05"},{id:"challenge:confidence-total",courseId:"computer-science-1",earned:12,possible:15,gradedAt:"2026-11-02",language:"python"},{id:"challenge:count-matches",courseId:"computer-science-1",earned:10,possible:10,gradedAt:"2026-11-06",language:"python"},{id:"challenge:score-line",courseId:"mobile-app-dev",earned:8,possible:10,gradedAt:"2026-10-27",language:"javascript"}],Cf=[{id:"lesson:python-strings",courseId:"computer-science-1",dueDate:"2026-11-03"},{id:"lesson:python-variables",courseId:"computer-science-1",dueDate:"2026-11-06"},{id:"lesson:python-formatting",courseId:"computer-science-1",dueDate:"2026-11-10"},{id:"lesson:python-decisions",courseId:"computer-science-1",dueDate:"2026-11-02"},{id:"lesson:csharp-variables",courseId:"game-programming",dueDate:"2026-11-05"},{id:"lesson:unity-player-controller",courseId:"game-programming",dueDate:"2026-11-13"},{id:"lesson:web-layout",courseId:"mobile-app-dev",dueDate:"2026-11-04"},{id:"lesson:react-components",courseId:"mobile-app-dev",dueDate:"2026-11-11"},{id:"lesson:capstone-discovery",courseId:"capstone",dueDate:"2026-11-02"},{id:"lesson:uil-loops",courseId:"uil",dueDate:"2026-11-04"},{id:"lesson:tsi-ratios",courseId:"tsi-math",dueDate:"2026-11-09"},{id:"challenge:confidence-total",courseId:"computer-science-1",dueDate:"2026-11-05"},{id:"challenge:count-matches",courseId:"computer-science-1",dueDate:"2026-11-09"},{id:"challenge:target-pairs",courseId:"uil",dueDate:"2026-11-04"}],us=(...c)=>c.filter(Boolean).join(" "),pg=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],hg="/playground/preview/",fg="/"+hg.replace(/^\/+|\/+$/g,""),$a=c=>`${fg}/#${c}`,Yu=()=>$a("/"),_h=()=>$a("/teacher"),mg=()=>$a("/journals"),gg=()=>$a("/grades"),zl=(c=null)=>$a(c?`/challenges/course/${encodeURIComponent(c)}`:"/challenges"),Tf=c=>$a(`/challenges/${encodeURIComponent(c)}`);function xd(c,p){const d=typeof c=="string"?ti(c):c;if(!d)return Yu();const v=`/playgrounds/${encodeURIComponent(d.slug)}`;return $a(p?`${v}/lessons/${encodeURIComponent(p)}`:v)}function mp(c,p=Eo){const w=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(w==="/")return{page:"home"};if(w==="/teacher")return{page:"teacher"};if(w==="/journals")return{page:"journals"};if(w==="/grades")return{page:"grades"};if(w==="/challenges")return{page:"challenges",filterCourse:null};if(w.startsWith("/challenges/")){const A=w.split("/").filter(Boolean);try{if(A.length===3&&A[1]==="course"){const M=decodeURIComponent(A[2]);return ti(M)?{page:"challenges",filterCourse:M}:{page:"not-found"}}if(A.length===2){const M=decodeURIComponent(A[1]);return pg.includes(M)?{page:"challenge",challengeId:M}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const L=w.split("/").filter(Boolean);if(L[0]!=="playgrounds"||![2,4].includes(L.length))return{page:"not-found"};let E,_;try{E=decodeURIComponent(L[1]),_=L.length===4?decodeURIComponent(L[3]):void 0}catch{return{page:"not-found"}}const P=p.find(A=>A.slug===E);return!P||L.length===4&&L[2]!=="lessons"?{page:"not-found"}:_&&!eg(P,_)?{page:"not-found"}:{page:"course",courseId:P.id,lessonId:_??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nf=(...c)=>c.filter((p,d,v)=>!!p&&p.trim()!==""&&v.indexOf(p)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Ue.forwardRef(({color:c="currentColor",size:p=24,strokeWidth:d=2,absoluteStrokeWidth:v,className:b="",children:w,iconNode:L,...E},_)=>Ue.createElement("svg",{ref:_,...vg,width:p,height:p,stroke:c,strokeWidth:v?Number(d)*24/Number(p):d,className:Nf("lucide",b),...E},[...L.map(([P,A])=>Ue.createElement(P,A)),...Array.isArray(w)?w:[w]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(c,p)=>{const d=Ue.forwardRef(({className:v,...b},w)=>Ue.createElement(xg,{ref:w,iconNode:p,className:Nf(`lucide-${yg(c)}`,v),...b}));return d.displayName=`${c}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=St("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=St("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=St("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=St("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=St("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=St("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=St("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=St("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=St("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=St("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=St("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=St("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=St("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=St("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=St("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=St("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=St("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=St("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=St("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=St("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=St("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=St("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=St("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=St("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=St("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=St("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=St("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=St("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=St("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=St("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=St("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=St("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=St("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=St("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=St("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=St("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=St("SquareTerminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=St("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=St("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=St("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=St("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=St("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Lo({children:c,tone:p=""}){return h.jsx("span",{className:us("chip",p&&`chip-${p}`),children:c})}function Kg({theme:c,setTheme:p}){const d=c==="dark";return h.jsx("button",{className:"icon-button",title:d?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>p(d?"light":"dark"),children:d?h.jsx(Bg,{size:17}):h.jsx(Mg,{size:17})})}function $g({sidebarOpen:c,onToggleSidebar:p,onHome:d,theme:v,setTheme:b}){return h.jsx("header",{className:"topbar",children:h.jsxs("div",{className:"topbar-inner",children:[h.jsx("button",{className:"icon-button nav-toggle",onClick:p,"aria-label":"Toggle navigation",children:c?h.jsx(Dg,{size:18}):h.jsx(Og,{size:18})}),h.jsxs("button",{className:"brand",onClick:d,children:[h.jsx("span",{className:"brand-logo",children:"{ }"}),h.jsx("strong",{children:"Ms. Whitby's Playground"}),h.jsx("span",{className:"brand-compact",children:"React Lab"})]}),h.jsx("div",{className:"topbar-spacer"}),h.jsx(Lo,{children:"LOCAL DESIGN LAB"}),h.jsx(Kg,{theme:v,setTheme:b}),h.jsx("span",{className:"user-circle",children:"W"})]})})}const Gg=[["home","Home",Rg],["challenges","Challenge Bank",wd],["journals","Weekly journals",Fp],["grades","Grades",jg],["teacher","Teacher dashboard",Wp]];function Yg({open:c,page:p,courseId:d,lessonId:v,setPage:b,openCourse:w,completedLessons:L=[],assignments:E=[],grades:_=[]}){const P=p==="course"?ti(d):null;return h.jsxs("aside",{className:us("main-sidebar",!c&&"collapsed"),"aria-label":"Playground navigation",children:[h.jsx("div",{className:"side-title",children:"EXPLORE"}),Gg.map(([A,M,R])=>h.jsxs("button",{className:us("nav-item",(p===A||A==="challenges"&&p==="challenge")&&"active"),onClick:()=>b(A),title:M,children:[h.jsx(R,{size:19}),h.jsx("span",{children:M})]},A)),P&&h.jsxs("section",{className:"course-outline","data-course":P.id,"aria-label":`${P.label} outline`,children:[h.jsx("div",{className:"side-rule"}),h.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),h.jsxs("button",{className:us("outline-overview",!v&&"active"),onClick:()=>w(P.id),children:[h.jsx(Ju,{size:16}),h.jsx("span",{children:"Course overview"})]}),P.units.map((A,M)=>h.jsxs("details",{className:"outline-unit",open:to(A).includes(v)||!v&&M===0?!0:void 0,children:[h.jsxs("summary",{children:[h.jsx("span",{className:"outline-unit-number",children:String(Zu(A,M+1)).padStart(2,"0")}),h.jsx("span",{className:"outline-unit-title",title:No(A),children:No(A)}),h.jsx(Pf,{size:14})]}),h.jsx("div",{className:"outline-lesson-list",children:to(A).map(R=>{const X=qa(P,R),ne=vd("lesson:"+R,{assignments:E,grades:_,completedLessons:L}),J=ne.completed?"completed":ne.dueDate?ne.state:"",ue=J==="completed"?"Completed":J==="overdue"?"Overdue":J==="assigned"?"Assigned":"";return h.jsxs("button",{onClick:()=>w(P.id,R),className:us("outline-lesson",R===v&&"selected"),"aria-label":ue?`${X}, ${ue.toLowerCase()}`:X,title:ue?`${X} · ${ue}`:X,"aria-current":R===v?"page":void 0,children:[h.jsx("span",{className:"outline-lesson-name",children:X}),ue&&h.jsx("span",{className:`assignment-dot ${J}`,"aria-hidden":"true"})]},R)})})]},`${P.id}-${A.id}-${v||"overview"}`))]}),h.jsx("div",{className:"side-rule"}),h.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),Eo.map(A=>h.jsxs("button",{"data-course":A.id,className:us("nav-item course-nav-item",p==="course"&&d===A.id&&"active"),onClick:()=>w(A.id),title:A.label,children:[h.jsx("span",{className:"nav-dot"}),h.jsx("span",{children:A.label})]},A.id)),h.jsxs("div",{className:"sidebar-bottom",children:[h.jsx(Cg,{size:17}),h.jsx("span",{children:"Your learning spaces"})]})]})}function Vg(){return h.jsxs("footer",{className:"site-footer",children:[h.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),h.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const Xg={"computer-science-1":bd,"game-programming":Pg,"mobile-app-dev":Wg,uil:Af,"tsi-math":Lf,capstone:zg};function Qg({course:c,onOpen:p,completedLessons:d=[]}){const{completed:v,total:b}=_f(c,d),w=Xg[c.id]||bd;function L(E){E.button!==0||E.metaKey||E.ctrlKey||E.shiftKey||E.altKey||(E.preventDefault(),p())}return h.jsxs("a",{className:"course-card","data-course":c.id,href:xd(c),onClick:L,children:[h.jsxs("div",{className:"course-card-heading",children:[h.jsx("span",{className:"course-glyph","aria-hidden":"true",children:h.jsx(w,{size:24,strokeWidth:2.2})}),h.jsxs("div",{children:[h.jsx("h2",{children:c.label}),h.jsx("p",{children:c.short})]})]}),h.jsx("p",{className:"course-description",children:c.description}),h.jsxs("div",{className:"course-card-footer",children:[h.jsxs("div",{className:"course-meta",children:[h.jsxs("span",{children:[b," ",b===1?"lesson":"lessons"]}),h.jsxs("span",{children:[v," completed"]})]}),h.jsx("progress",{className:"course-progress-track",value:v,max:Math.max(b,1),"aria-label":`${c.label}: ${v} of ${b} lessons completed`})]})]})}function Zg({onClick:c}){return h.jsxs("button",{className:"wide-shortcut",onClick:c,children:[h.jsx(Wp,{size:18}),h.jsxs("span",{children:[h.jsx("strong",{children:"Teacher Dashboard preview"}),h.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),h.jsx(Hl,{size:18})]})}function Jg({openCourse:c,openTeacher:p,openChallenges:d,completedLessons:v=[]}){return h.jsxs("div",{className:"main-content",children:[h.jsxs("div",{className:"welcome",children:[h.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),h.jsx("h1",{children:"Your playgrounds"}),h.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),h.jsx("div",{className:"course-card-grid",children:Eo.map(b=>h.jsx(Qg,{course:b,completedLessons:v,onOpen:()=>c(b.id)},b.id))}),h.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:d,children:[h.jsx(wd,{size:23}),h.jsxs("span",{children:[h.jsx("strong",{children:"Shared Challenge Bank"}),h.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),h.jsx("span",{"aria-hidden":"true",children:"→"})]}),h.jsx(Zg,{onClick:p})]})}function ey({course:c,openCourse:p,openChallenges:d,completedLessons:v=[],assignments:b=[],grades:w=[],courseColors:L={},onSetCourseColor:E,onResetCourseColor:_}){const P=_f(c,v),[A,M]=Ue.useState(!1),R=tg(c,L);return h.jsxs("div",{className:"course-landing",children:[h.jsxs("header",{className:"course-hero surface-card",children:[h.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>M(X=>!X),"aria-label":A?"Close course color settings":`Change ${c.label} color`,title:A?"Close settings":"Course color","aria-expanded":A,"aria-controls":"course-color-controls",children:A?h.jsx(qp,{size:17}):h.jsx(Up,{size:17})}),h.jsx("div",{className:"eyebrow",children:"Course overview"}),h.jsx("h1",{children:c.label}),h.jsx("p",{children:c.description}),h.jsxs("div",{className:"course-hero-stats",children:[h.jsxs("span",{children:[h.jsx(Ig,{size:16})," ",c.units.length," units"]}),h.jsxs("span",{children:[h.jsx(Ju,{size:16})," ",ld(c).length," lessons"]})]}),h.jsxs("button",{className:"btn primary",onClick:()=>p(c.id,ld(c)[0]),children:["Start learning ",h.jsx(Hl,{size:16})]}),A&&h.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[h.jsxs("div",{className:"course-color-control-copy",children:[h.jsx("strong",{children:"Course color"}),h.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),h.jsxs("label",{className:"course-color-picker",children:[h.jsx("input",{type:"color",value:R,onChange:X=>E==null?void 0:E(c.id,X.target.value),"aria-label":`Choose a color for ${c.label}`}),h.jsx("span",{children:"Choose color"})]}),h.jsx("button",{type:"button",className:"btn",onClick:()=>_==null?void 0:_(c.id),children:"Reset to default"}),h.jsx("button",{type:"button",className:"btn",onClick:()=>M(!1),children:"Done"})]})]}),c.publishedContent&&h.jsx("p",{className:"course-published-note",children:"Explore the complete Computer Science I lessons. Practice here won't change your grades."}),h.jsxs("p",{className:"course-landing-progress",children:[P.completed," of ",P.total," lessons ",c.publishedContent?"marked complete in preview":"completed"," · ",P.percent,"%"]}),h.jsx("div",{className:"course-landing-heading",children:h.jsxs("div",{children:[h.jsx("h2",{children:"Units & lessons"}),h.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),h.jsx("div",{className:"unit-card-grid",children:c.units.map((X,ne)=>h.jsxs("section",{className:"unit-card surface-card",children:[h.jsxs("header",{className:"unit-card-header",children:[h.jsxs("span",{className:"unit-badge",children:["UNIT ",String(Zu(X,ne+1)).padStart(2,"0")]}),h.jsx("h3",{title:No(X),children:No(X)}),X.description&&h.jsx("p",{children:X.description})]}),h.jsx("div",{className:"unit-lessons",children:to(X).map((J,ue)=>h.jsxs("a",{className:"unit-lesson-link",href:xd(c,J),onClick:D=>{D.button!==0||D.metaKey||D.ctrlKey||D.shiftKey||D.altKey||(D.preventDefault(),p(c.id,J))},children:[h.jsx("span",{className:"unit-lesson-index",children:ue+1}),h.jsxs("span",{className:"unit-lesson-label",children:[h.jsx("strong",{title:qa(c,J),children:qa(c,J)}),(()=>{var H,U;const D=vd("lesson:"+J,{assignments:b,grades:w,completedLessons:v});return D.dueDate||D.completed?h.jsxs("span",{className:"unit-assignment-meta",children:[h.jsx("span",{className:`assignment-status ${D.state}`,children:D.completed?"Completed":D.state==="overdue"?"Overdue":"Assigned"}),D.dueDate&&h.jsxs("small",{children:["Due ",ud(D.dueDate)]}),D.grade&&h.jsxs("small",{children:[D.grade.earned," / ",D.grade.possible," pts"]})]}):h.jsxs("small",{children:[(H=Ua(c,J))==null?void 0:H.kind,(U=Ua(c,J))!=null&&U.difficulty?` · ${Ua(c,J).difficulty}`:""]})})()]}),h.jsx(Ef,{size:16})]},J))})]},X.id))}),h.jsxs("section",{className:"course-challenges-shelf surface-card",children:[h.jsxs("div",{children:[h.jsx("div",{className:"eyebrow",children:"Shared practice library"}),h.jsx("h2",{children:"Related programming challenges"}),h.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),h.jsxs("a",{href:zl(c.id),className:"btn",onClick:X=>{X.button!==0||X.metaKey||X.ctrlKey||X.shiftKey||X.altKey||(X.preventDefault(),d(c.id))},children:[h.jsx(wd,{size:16})," Browse challenges"]})]})]})}function dd({axis:c,onDrag:p}){const d=Ue.useRef(!1),v=c==="columns",b=()=>d.current=!1;return h.jsx("div",{className:us("splitter",v?"column-split":"row-split"),role:"separator","aria-label":v?"Resize instructions and editor":"Resize editor and console","aria-orientation":v?"vertical":"horizontal",tabIndex:0,onPointerDown:w=>{w.preventDefault(),w.currentTarget.setPointerCapture(w.pointerId),d.current=!0},onPointerMove:w=>{d.current&&w.buttons===1&&p(w)},onPointerUp:b,onLostPointerCapture:b,children:h.jsx("span",{})})}function Rf({eyebrow:c,children:p,actions:d}){return h.jsxs("div",{className:"page-title-row",children:[h.jsxs("div",{children:[c&&h.jsx("div",{className:"eyebrow",children:c}),h.jsx("h1",{children:p})]}),d&&h.jsx("div",{className:"page-actions",children:d})]})}function Ch({task:c,unit:p,unitNumber:d,isTsi:v,isCompleted:b=!1,assignment:w=null,grade:L=null,onToggleCompleted:E}){const _=(w==null?void 0:w.id)||(L==null?void 0:L.id)||"",P=vd(_,{assignments:w?[w]:[],grades:L?[L]:[],completedLessons:b?[_.replace(/^lesson:/,"")]:[]});return h.jsxs("div",{className:"lesson-header",children:[h.jsxs("div",{className:"eyebrow",children:["Unit ",Zu(p,d)," · ",No(p)," ",h.jsx("span",{className:"dot",children:"·"})," ",c.kind]}),h.jsx(Rf,{actions:h.jsxs("div",{className:"lesson-heading-actions",children:[!v&&(c==null?void 0:c.points)!=null&&h.jsx("span",{className:"points-tag",children:L?`${L.earned} / ${L.possible} pts`:`${c.points} points available`}),L?h.jsxs("span",{className:"btn completion-toggle completed",children:[h.jsx(Lp,{size:16})," Completed"]}):h.jsxs("button",{type:"button",className:`btn completion-toggle ${b?"completed":""}`,"aria-pressed":b,onClick:E,children:[b?h.jsx(Lp,{size:16}):h.jsx(Tg,{size:16}),b?"Completed":"Mark complete"]})]}),children:c.title}),h.jsx("p",{children:c.challenge}),(w==null?void 0:w.dueDate)&&h.jsxs("div",{className:"lesson-assignment-info",children:[h.jsx("span",{className:`assignment-status ${P.state}`,children:P.state==="completed"?"Completed":P.state==="overdue"?"Overdue":"Assigned"}),h.jsxs("span",{children:["Due ",ud(w.dueDate)]})]})]})}const If={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},ty=`# Find an Inefficiency

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
`,ny=`# Interpret User Feedback

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
`,ry=`# Interview for Evidence

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
`,iy=`# Make a Minimum Viable Prototype

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
`,oy=`# Player Decisions

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
`,sy=`# Variables for a Game

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
`,ay=`# Decision Making

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
`,ly=`# Format a Summary

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
`,uy=`# Lists and Indexing

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
`,cy=`# For Loops

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
`,dy=`# Strings and Variables

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
`,py=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,hy=`# Your First React Card

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
`,fy=`# Interactive React State

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
`,my=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,gy=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,yy=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,vy=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,xy=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,by=`# Trace Java Loops

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
`,wy=`# Method Calls and Scope

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
`,ky=`# String Indexing

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
`,Sy=`# Collision Events

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
`,_y=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,Cy=`# Score and Feedback

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
`,Ty=`# Events and Forms

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
`,Ny=`# Responsive Layouts

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
`;function Kp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ga=Kp();function Of(c){Ga=c}var Qu={exec:()=>null};function Ut(c,p=""){let d=typeof c=="string"?c:c.source;const v={replace:(b,w)=>{let L=typeof w=="string"?w:w.source;return L=L.replace(Fr.caret,"$1"),d=d.replace(b,L),v},getRegex:()=>new RegExp(d,p)};return v}var Fr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:c=>new RegExp(`^( {0,3}${c})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}#`),htmlBeginRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}<(?:[a-z].*>|!--)`,"i")},Ey=/^(?:[ \t]*(?:\n|$))+/,Ly=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Py=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ec=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,$p=/(?:[*+-]|\d{1,9}[.)])/,Mf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Df=Ut(Mf).replace(/bull/g,$p).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ay=Ut(Mf).replace(/bull/g,$p).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Gp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ry=/^[^\n]+/,Yp=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Iy=Ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Yp).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Oy=Ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$p).getRegex(),kd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Vp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,My=Ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Vp).replace("tag",kd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),zf=Ut(Gp).replace("hr",ec).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",kd).getRegex(),Dy=Ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",zf).getRegex(),Xp={blockquote:Dy,code:Ly,def:Iy,fences:Py,heading:jy,hr:ec,html:My,lheading:Df,list:Oy,newline:Ey,paragraph:zf,table:Qu,text:Ry},Th=Ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ec).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",kd).getRegex(),zy={...Xp,lheading:Ay,table:Th,paragraph:Ut(Gp).replace("hr",ec).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Th).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",kd).getRegex()},Fy={...Xp,html:Ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Vp).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qu,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ut(Gp).replace("hr",ec).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Df).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Wy=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Hy=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ff=/^( {2,}|\\)\n(?!\s*$)/,By=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Sd=/[\p{P}\p{S}]/u,Qp=/[\s\p{P}\p{S}]/u,Wf=/[^\s\p{P}\p{S}]/u,Uy=Ut(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Qp).getRegex(),Hf=/(?!~)[\p{P}\p{S}]/u,qy=/(?!~)[\s\p{P}\p{S}]/u,Ky=/(?:[^\s\p{P}\p{S}]|~)/u,$y=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Bf=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Gy=Ut(Bf,"u").replace(/punct/g,Sd).getRegex(),Yy=Ut(Bf,"u").replace(/punct/g,Hf).getRegex(),Uf="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Vy=Ut(Uf,"gu").replace(/notPunctSpace/g,Wf).replace(/punctSpace/g,Qp).replace(/punct/g,Sd).getRegex(),Xy=Ut(Uf,"gu").replace(/notPunctSpace/g,Ky).replace(/punctSpace/g,qy).replace(/punct/g,Hf).getRegex(),Qy=Ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Wf).replace(/punctSpace/g,Qp).replace(/punct/g,Sd).getRegex(),Zy=Ut(/\\(punct)/,"gu").replace(/punct/g,Sd).getRegex(),Jy=Ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ev=Ut(Vp).replace("(?:-->|$)","-->").getRegex(),tv=Ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ev).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,nv=Ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",pd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qf=Ut(/^!?\[(label)\]\[(ref)\]/).replace("label",pd).replace("ref",Yp).getRegex(),Kf=Ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",Yp).getRegex(),rv=Ut("reflink|nolink(?!\\()","g").replace("reflink",qf).replace("nolink",Kf).getRegex(),Zp={_backpedal:Qu,anyPunctuation:Zy,autolink:Jy,blockSkip:$y,br:Ff,code:Hy,del:Qu,emStrongLDelim:Gy,emStrongRDelimAst:Vy,emStrongRDelimUnd:Qy,escape:Wy,link:nv,nolink:Kf,punctuation:Uy,reflink:qf,reflinkSearch:rv,tag:tv,text:By,url:Qu},iv={...Zp,link:Ut(/^!?\[(label)\]\((.*?)\)/).replace("label",pd).getRegex(),reflink:Ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pd).getRegex()},Pp={...Zp,emStrongRDelimAst:Xy,emStrongLDelim:Yy,url:Ut(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ov={...Pp,br:Ut(Ff).replace("{2,}","*").getRegex(),text:Ut(Pp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},nd={normal:Xp,gfm:zy,pedantic:Fy},Hu={normal:Zp,gfm:Pp,breaks:ov,pedantic:iv},sv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Nh=c=>sv[c];function To(c,p){if(p){if(Fr.escapeTest.test(c))return c.replace(Fr.escapeReplace,Nh)}else if(Fr.escapeTestNoEncode.test(c))return c.replace(Fr.escapeReplaceNoEncode,Nh);return c}function Eh(c){try{c=encodeURI(c).replace(Fr.percentDecode,"%")}catch{return null}return c}function Lh(c,p){var w;const d=c.replace(Fr.findPipe,(L,E,_)=>{let P=!1,A=E;for(;--A>=0&&_[A]==="\\";)P=!P;return P?"|":" |"}),v=d.split(Fr.splitPipe);let b=0;if(v[0].trim()||v.shift(),v.length>0&&!((w=v.at(-1))!=null&&w.trim())&&v.pop(),p)if(v.length>p)v.splice(p);else for(;v.length<p;)v.push("");for(;b<v.length;b++)v[b]=v[b].trim().replace(Fr.slashPipe,"|");return v}function Bu(c,p,d){const v=c.length;if(v===0)return"";let b=0;for(;b<v&&c.charAt(v-b-1)===p;)b++;return c.slice(0,v-b)}function av(c,p){if(c.indexOf(p[1])===-1)return-1;let d=0;for(let v=0;v<c.length;v++)if(c[v]==="\\")v++;else if(c[v]===p[0])d++;else if(c[v]===p[1]&&(d--,d<0))return v;return d>0?-2:-1}function Ph(c,p,d,v,b){const w=p.href,L=p.title||null,E=c[1].replace(b.other.outputLinkReplace,"$1");v.state.inLink=!0;const _={type:c[0].charAt(0)==="!"?"image":"link",raw:d,href:w,title:L,text:E,tokens:v.inlineTokens(E)};return v.state.inLink=!1,_}function lv(c,p,d){const v=c.match(d.other.indentCodeCompensation);if(v===null)return p;const b=v[1];return p.split(`
`).map(w=>{const L=w.match(d.other.beginningSpace);if(L===null)return w;const[E]=L;return E.length>=b.length?w.slice(b.length):w}).join(`
`)}var hd=class{constructor(c){on(this,"options");on(this,"rules");on(this,"lexer");this.options=c||Ga}space(c){const p=this.rules.block.newline.exec(c);if(p&&p[0].length>0)return{type:"space",raw:p[0]}}code(c){const p=this.rules.block.code.exec(c);if(p){const d=p[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:p[0],codeBlockStyle:"indented",text:this.options.pedantic?d:Bu(d,`
`)}}}fences(c){const p=this.rules.block.fences.exec(c);if(p){const d=p[0],v=lv(d,p[3]||"",this.rules);return{type:"code",raw:d,lang:p[2]?p[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):p[2],text:v}}}heading(c){const p=this.rules.block.heading.exec(c);if(p){let d=p[2].trim();if(this.rules.other.endingHash.test(d)){const v=Bu(d,"#");(this.options.pedantic||!v||this.rules.other.endingSpaceChar.test(v))&&(d=v.trim())}return{type:"heading",raw:p[0],depth:p[1].length,text:d,tokens:this.lexer.inline(d)}}}hr(c){const p=this.rules.block.hr.exec(c);if(p)return{type:"hr",raw:Bu(p[0],`
`)}}blockquote(c){const p=this.rules.block.blockquote.exec(c);if(p){let d=Bu(p[0],`
`).split(`
`),v="",b="";const w=[];for(;d.length>0;){let L=!1;const E=[];let _;for(_=0;_<d.length;_++)if(this.rules.other.blockquoteStart.test(d[_]))E.push(d[_]),L=!0;else if(!L)E.push(d[_]);else break;d=d.slice(_);const P=E.join(`
`),A=P.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");v=v?`${v}
${P}`:P,b=b?`${b}
${A}`:A;const M=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(A,w,!0),this.lexer.state.top=M,d.length===0)break;const R=w.at(-1);if((R==null?void 0:R.type)==="code")break;if((R==null?void 0:R.type)==="blockquote"){const X=R,ne=X.raw+`
`+d.join(`
`),J=this.blockquote(ne);w[w.length-1]=J,v=v.substring(0,v.length-X.raw.length)+J.raw,b=b.substring(0,b.length-X.text.length)+J.text;break}else if((R==null?void 0:R.type)==="list"){const X=R,ne=X.raw+`
`+d.join(`
`),J=this.list(ne);w[w.length-1]=J,v=v.substring(0,v.length-R.raw.length)+J.raw,b=b.substring(0,b.length-X.raw.length)+J.raw,d=ne.substring(w.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:v,tokens:w,text:b}}}list(c){let p=this.rules.block.list.exec(c);if(p){let d=p[1].trim();const v=d.length>1,b={type:"list",raw:"",ordered:v,start:v?+d.slice(0,-1):"",loose:!1,items:[]};d=v?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=v?d:"[*+-]");const w=this.rules.other.listItemRegex(d);let L=!1;for(;c;){let _=!1,P="",A="";if(!(p=w.exec(c))||this.rules.block.hr.test(c))break;P=p[0],c=c.substring(P.length);let M=p[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),R=c.split(`
`,1)[0],X=!M.trim(),ne=0;if(this.options.pedantic?(ne=2,A=M.trimStart()):X?ne=p[1].length+1:(ne=p[2].search(this.rules.other.nonSpaceChar),ne=ne>4?1:ne,A=M.slice(ne),ne+=p[1].length),X&&this.rules.other.blankLine.test(R)&&(P+=R+`
`,c=c.substring(R.length+1),_=!0),!_){const D=this.rules.other.nextBulletRegex(ne),H=this.rules.other.hrRegex(ne),U=this.rules.other.fencesBeginRegex(ne),$=this.rules.other.headingBeginRegex(ne),se=this.rules.other.htmlBeginRegex(ne);for(;c;){const ge=c.split(`
`,1)[0];let ie;if(R=ge,this.options.pedantic?(R=R.replace(this.rules.other.listReplaceNesting,"  "),ie=R):ie=R.replace(this.rules.other.tabCharGlobal,"    "),U.test(R)||$.test(R)||se.test(R)||D.test(R)||H.test(R))break;if(ie.search(this.rules.other.nonSpaceChar)>=ne||!R.trim())A+=`
`+ie.slice(ne);else{if(X||M.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||U.test(M)||$.test(M)||H.test(M))break;A+=`
`+R}!X&&!R.trim()&&(X=!0),P+=ge+`
`,c=c.substring(ge.length+1),M=ie.slice(ne)}}b.loose||(L?b.loose=!0:this.rules.other.doubleBlankLine.test(P)&&(L=!0));let J=null,ue;this.options.gfm&&(J=this.rules.other.listIsTask.exec(A),J&&(ue=J[0]!=="[ ] ",A=A.replace(this.rules.other.listReplaceTask,""))),b.items.push({type:"list_item",raw:P,task:!!J,checked:ue,loose:!1,text:A,tokens:[]}),b.raw+=P}const E=b.items.at(-1);if(E)E.raw=E.raw.trimEnd(),E.text=E.text.trimEnd();else return;b.raw=b.raw.trimEnd();for(let _=0;_<b.items.length;_++)if(this.lexer.state.top=!1,b.items[_].tokens=this.lexer.blockTokens(b.items[_].text,[]),!b.loose){const P=b.items[_].tokens.filter(M=>M.type==="space"),A=P.length>0&&P.some(M=>this.rules.other.anyLine.test(M.raw));b.loose=A}if(b.loose)for(let _=0;_<b.items.length;_++)b.items[_].loose=!0;return b}}html(c){const p=this.rules.block.html.exec(c);if(p)return{type:"html",block:!0,raw:p[0],pre:p[1]==="pre"||p[1]==="script"||p[1]==="style",text:p[0]}}def(c){const p=this.rules.block.def.exec(c);if(p){const d=p[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),v=p[2]?p[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",b=p[3]?p[3].substring(1,p[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):p[3];return{type:"def",tag:d,raw:p[0],href:v,title:b}}}table(c){var L;const p=this.rules.block.table.exec(c);if(!p||!this.rules.other.tableDelimiter.test(p[2]))return;const d=Lh(p[1]),v=p[2].replace(this.rules.other.tableAlignChars,"").split("|"),b=(L=p[3])!=null&&L.trim()?p[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],w={type:"table",raw:p[0],header:[],align:[],rows:[]};if(d.length===v.length){for(const E of v)this.rules.other.tableAlignRight.test(E)?w.align.push("right"):this.rules.other.tableAlignCenter.test(E)?w.align.push("center"):this.rules.other.tableAlignLeft.test(E)?w.align.push("left"):w.align.push(null);for(let E=0;E<d.length;E++)w.header.push({text:d[E],tokens:this.lexer.inline(d[E]),header:!0,align:w.align[E]});for(const E of b)w.rows.push(Lh(E,w.header.length).map((_,P)=>({text:_,tokens:this.lexer.inline(_),header:!1,align:w.align[P]})));return w}}lheading(c){const p=this.rules.block.lheading.exec(c);if(p)return{type:"heading",raw:p[0],depth:p[2].charAt(0)==="="?1:2,text:p[1],tokens:this.lexer.inline(p[1])}}paragraph(c){const p=this.rules.block.paragraph.exec(c);if(p){const d=p[1].charAt(p[1].length-1)===`
`?p[1].slice(0,-1):p[1];return{type:"paragraph",raw:p[0],text:d,tokens:this.lexer.inline(d)}}}text(c){const p=this.rules.block.text.exec(c);if(p)return{type:"text",raw:p[0],text:p[0],tokens:this.lexer.inline(p[0])}}escape(c){const p=this.rules.inline.escape.exec(c);if(p)return{type:"escape",raw:p[0],text:p[1]}}tag(c){const p=this.rules.inline.tag.exec(c);if(p)return!this.lexer.state.inLink&&this.rules.other.startATag.test(p[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(p[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(p[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(p[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:p[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:p[0]}}link(c){const p=this.rules.inline.link.exec(c);if(p){const d=p[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(d)){if(!this.rules.other.endAngleBracket.test(d))return;const w=Bu(d.slice(0,-1),"\\");if((d.length-w.length)%2===0)return}else{const w=av(p[2],"()");if(w===-2)return;if(w>-1){const E=(p[0].indexOf("!")===0?5:4)+p[1].length+w;p[2]=p[2].substring(0,w),p[0]=p[0].substring(0,E).trim(),p[3]=""}}let v=p[2],b="";if(this.options.pedantic){const w=this.rules.other.pedanticHrefTitle.exec(v);w&&(v=w[1],b=w[3])}else b=p[3]?p[3].slice(1,-1):"";return v=v.trim(),this.rules.other.startAngleBracket.test(v)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(d)?v=v.slice(1):v=v.slice(1,-1)),Ph(p,{href:v&&v.replace(this.rules.inline.anyPunctuation,"$1"),title:b&&b.replace(this.rules.inline.anyPunctuation,"$1")},p[0],this.lexer,this.rules)}}reflink(c,p){let d;if((d=this.rules.inline.reflink.exec(c))||(d=this.rules.inline.nolink.exec(c))){const v=(d[2]||d[1]).replace(this.rules.other.multipleSpaceGlobal," "),b=p[v.toLowerCase()];if(!b){const w=d[0].charAt(0);return{type:"text",raw:w,text:w}}return Ph(d,b,d[0],this.lexer,this.rules)}}emStrong(c,p,d=""){let v=this.rules.inline.emStrongLDelim.exec(c);if(!v||v[3]&&d.match(this.rules.other.unicodeAlphaNumeric))return;if(!(v[1]||v[2]||"")||!d||this.rules.inline.punctuation.exec(d)){const w=[...v[0]].length-1;let L,E,_=w,P=0;const A=v[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(A.lastIndex=0,p=p.slice(-1*c.length+w);(v=A.exec(p))!=null;){if(L=v[1]||v[2]||v[3]||v[4]||v[5]||v[6],!L)continue;if(E=[...L].length,v[3]||v[4]){_+=E;continue}else if((v[5]||v[6])&&w%3&&!((w+E)%3)){P+=E;continue}if(_-=E,_>0)continue;E=Math.min(E,E+_+P);const M=[...v[0]][0].length,R=c.slice(0,w+v.index+M+E);if(Math.min(w,E)%2){const ne=R.slice(1,-1);return{type:"em",raw:R,text:ne,tokens:this.lexer.inlineTokens(ne)}}const X=R.slice(2,-2);return{type:"strong",raw:R,text:X,tokens:this.lexer.inlineTokens(X)}}}}codespan(c){const p=this.rules.inline.code.exec(c);if(p){let d=p[2].replace(this.rules.other.newLineCharGlobal," ");const v=this.rules.other.nonSpaceChar.test(d),b=this.rules.other.startingSpaceChar.test(d)&&this.rules.other.endingSpaceChar.test(d);return v&&b&&(d=d.substring(1,d.length-1)),{type:"codespan",raw:p[0],text:d}}}br(c){const p=this.rules.inline.br.exec(c);if(p)return{type:"br",raw:p[0]}}del(c){const p=this.rules.inline.del.exec(c);if(p)return{type:"del",raw:p[0],text:p[2],tokens:this.lexer.inlineTokens(p[2])}}autolink(c){const p=this.rules.inline.autolink.exec(c);if(p){let d,v;return p[2]==="@"?(d=p[1],v="mailto:"+d):(d=p[1],v=d),{type:"link",raw:p[0],text:d,href:v,tokens:[{type:"text",raw:d,text:d}]}}}url(c){var d;let p;if(p=this.rules.inline.url.exec(c)){let v,b;if(p[2]==="@")v=p[0],b="mailto:"+v;else{let w;do w=p[0],p[0]=((d=this.rules.inline._backpedal.exec(p[0]))==null?void 0:d[0])??"";while(w!==p[0]);v=p[0],p[1]==="www."?b="http://"+p[0]:b=p[0]}return{type:"link",raw:p[0],text:v,href:b,tokens:[{type:"text",raw:v,text:v}]}}}inlineText(c){const p=this.rules.inline.text.exec(c);if(p){const d=this.lexer.state.inRawBlock;return{type:"text",raw:p[0],text:p[0],escaped:d}}}},cs=class jp{constructor(p){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=p||Ga,this.options.tokenizer=this.options.tokenizer||new hd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const d={other:Fr,block:nd.normal,inline:Hu.normal};this.options.pedantic?(d.block=nd.pedantic,d.inline=Hu.pedantic):this.options.gfm&&(d.block=nd.gfm,this.options.breaks?d.inline=Hu.breaks:d.inline=Hu.gfm),this.tokenizer.rules=d}static get rules(){return{block:nd,inline:Hu}}static lex(p,d){return new jp(d).lex(p)}static lexInline(p,d){return new jp(d).inlineTokens(p)}lex(p){p=p.replace(Fr.carriageReturn,`
`),this.blockTokens(p,this.tokens);for(let d=0;d<this.inlineQueue.length;d++){const v=this.inlineQueue[d];this.inlineTokens(v.src,v.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(p,d=[],v=!1){var b,w,L;for(this.options.pedantic&&(p=p.replace(Fr.tabCharGlobal,"    ").replace(Fr.spaceLine,""));p;){let E;if((w=(b=this.options.extensions)==null?void 0:b.block)!=null&&w.some(P=>(E=P.call({lexer:this},p,d))?(p=p.substring(E.raw.length),d.push(E),!0):!1))continue;if(E=this.tokenizer.space(p)){p=p.substring(E.raw.length);const P=d.at(-1);E.raw.length===1&&P!==void 0?P.raw+=`
`:d.push(E);continue}if(E=this.tokenizer.code(p)){p=p.substring(E.raw.length);const P=d.at(-1);(P==null?void 0:P.type)==="paragraph"||(P==null?void 0:P.type)==="text"?(P.raw+=`
`+E.raw,P.text+=`
`+E.text,this.inlineQueue.at(-1).src=P.text):d.push(E);continue}if(E=this.tokenizer.fences(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.heading(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.hr(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.blockquote(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.list(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.html(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.def(p)){p=p.substring(E.raw.length);const P=d.at(-1);(P==null?void 0:P.type)==="paragraph"||(P==null?void 0:P.type)==="text"?(P.raw+=`
`+E.raw,P.text+=`
`+E.raw,this.inlineQueue.at(-1).src=P.text):this.tokens.links[E.tag]||(this.tokens.links[E.tag]={href:E.href,title:E.title});continue}if(E=this.tokenizer.table(p)){p=p.substring(E.raw.length),d.push(E);continue}if(E=this.tokenizer.lheading(p)){p=p.substring(E.raw.length),d.push(E);continue}let _=p;if((L=this.options.extensions)!=null&&L.startBlock){let P=1/0;const A=p.slice(1);let M;this.options.extensions.startBlock.forEach(R=>{M=R.call({lexer:this},A),typeof M=="number"&&M>=0&&(P=Math.min(P,M))}),P<1/0&&P>=0&&(_=p.substring(0,P+1))}if(this.state.top&&(E=this.tokenizer.paragraph(_))){const P=d.at(-1);v&&(P==null?void 0:P.type)==="paragraph"?(P.raw+=`
`+E.raw,P.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=P.text):d.push(E),v=_.length!==p.length,p=p.substring(E.raw.length);continue}if(E=this.tokenizer.text(p)){p=p.substring(E.raw.length);const P=d.at(-1);(P==null?void 0:P.type)==="text"?(P.raw+=`
`+E.raw,P.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=P.text):d.push(E);continue}if(p){const P="Infinite loop on byte: "+p.charCodeAt(0);if(this.options.silent){console.error(P);break}else throw new Error(P)}}return this.state.top=!0,d}inline(p,d=[]){return this.inlineQueue.push({src:p,tokens:d}),d}inlineTokens(p,d=[]){var E,_,P;let v=p,b=null;if(this.tokens.links){const A=Object.keys(this.tokens.links);if(A.length>0)for(;(b=this.tokenizer.rules.inline.reflinkSearch.exec(v))!=null;)A.includes(b[0].slice(b[0].lastIndexOf("[")+1,-1))&&(v=v.slice(0,b.index)+"["+"a".repeat(b[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(b=this.tokenizer.rules.inline.anyPunctuation.exec(v))!=null;)v=v.slice(0,b.index)+"++"+v.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(b=this.tokenizer.rules.inline.blockSkip.exec(v))!=null;)v=v.slice(0,b.index)+"["+"a".repeat(b[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let w=!1,L="";for(;p;){w||(L=""),w=!1;let A;if((_=(E=this.options.extensions)==null?void 0:E.inline)!=null&&_.some(R=>(A=R.call({lexer:this},p,d))?(p=p.substring(A.raw.length),d.push(A),!0):!1))continue;if(A=this.tokenizer.escape(p)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.tag(p)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.link(p)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.reflink(p,this.tokens.links)){p=p.substring(A.raw.length);const R=d.at(-1);A.type==="text"&&(R==null?void 0:R.type)==="text"?(R.raw+=A.raw,R.text+=A.text):d.push(A);continue}if(A=this.tokenizer.emStrong(p,v,L)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.codespan(p)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.br(p)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.del(p)){p=p.substring(A.raw.length),d.push(A);continue}if(A=this.tokenizer.autolink(p)){p=p.substring(A.raw.length),d.push(A);continue}if(!this.state.inLink&&(A=this.tokenizer.url(p))){p=p.substring(A.raw.length),d.push(A);continue}let M=p;if((P=this.options.extensions)!=null&&P.startInline){let R=1/0;const X=p.slice(1);let ne;this.options.extensions.startInline.forEach(J=>{ne=J.call({lexer:this},X),typeof ne=="number"&&ne>=0&&(R=Math.min(R,ne))}),R<1/0&&R>=0&&(M=p.substring(0,R+1))}if(A=this.tokenizer.inlineText(M)){p=p.substring(A.raw.length),A.raw.slice(-1)!=="_"&&(L=A.raw.slice(-1)),w=!0;const R=d.at(-1);(R==null?void 0:R.type)==="text"?(R.raw+=A.raw,R.text+=A.text):d.push(A);continue}if(p){const R="Infinite loop on byte: "+p.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return d}},fd=class{constructor(c){on(this,"options");on(this,"parser");this.options=c||Ga}space(c){return""}code({text:c,lang:p,escaped:d}){var w;const v=(w=(p||"").match(Fr.notSpaceStart))==null?void 0:w[0],b=c.replace(Fr.endingNewline,"")+`
`;return v?'<pre><code class="language-'+To(v)+'">'+(d?b:To(b,!0))+`</code></pre>
`:"<pre><code>"+(d?b:To(b,!0))+`</code></pre>
`}blockquote({tokens:c}){return`<blockquote>
${this.parser.parse(c)}</blockquote>
`}html({text:c}){return c}heading({tokens:c,depth:p}){return`<h${p}>${this.parser.parseInline(c)}</h${p}>
`}hr(c){return`<hr>
`}list(c){const p=c.ordered,d=c.start;let v="";for(let L=0;L<c.items.length;L++){const E=c.items[L];v+=this.listitem(E)}const b=p?"ol":"ul",w=p&&d!==1?' start="'+d+'"':"";return"<"+b+w+`>
`+v+"</"+b+`>
`}listitem(c){var d;let p="";if(c.task){const v=this.checkbox({checked:!!c.checked});c.loose?((d=c.tokens[0])==null?void 0:d.type)==="paragraph"?(c.tokens[0].text=v+" "+c.tokens[0].text,c.tokens[0].tokens&&c.tokens[0].tokens.length>0&&c.tokens[0].tokens[0].type==="text"&&(c.tokens[0].tokens[0].text=v+" "+To(c.tokens[0].tokens[0].text),c.tokens[0].tokens[0].escaped=!0)):c.tokens.unshift({type:"text",raw:v+" ",text:v+" ",escaped:!0}):p+=v+" "}return p+=this.parser.parse(c.tokens,!!c.loose),`<li>${p}</li>
`}checkbox({checked:c}){return"<input "+(c?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:c}){return`<p>${this.parser.parseInline(c)}</p>
`}table(c){let p="",d="";for(let b=0;b<c.header.length;b++)d+=this.tablecell(c.header[b]);p+=this.tablerow({text:d});let v="";for(let b=0;b<c.rows.length;b++){const w=c.rows[b];d="";for(let L=0;L<w.length;L++)d+=this.tablecell(w[L]);v+=this.tablerow({text:d})}return v&&(v=`<tbody>${v}</tbody>`),`<table>
<thead>
`+p+`</thead>
`+v+`</table>
`}tablerow({text:c}){return`<tr>
${c}</tr>
`}tablecell(c){const p=this.parser.parseInline(c.tokens),d=c.header?"th":"td";return(c.align?`<${d} align="${c.align}">`:`<${d}>`)+p+`</${d}>
`}strong({tokens:c}){return`<strong>${this.parser.parseInline(c)}</strong>`}em({tokens:c}){return`<em>${this.parser.parseInline(c)}</em>`}codespan({text:c}){return`<code>${To(c,!0)}</code>`}br(c){return"<br>"}del({tokens:c}){return`<del>${this.parser.parseInline(c)}</del>`}link({href:c,title:p,tokens:d}){const v=this.parser.parseInline(d),b=Eh(c);if(b===null)return v;c=b;let w='<a href="'+c+'"';return p&&(w+=' title="'+To(p)+'"'),w+=">"+v+"</a>",w}image({href:c,title:p,text:d,tokens:v}){v&&(d=this.parser.parseInline(v,this.parser.textRenderer));const b=Eh(c);if(b===null)return To(d);c=b;let w=`<img src="${c}" alt="${d}"`;return p&&(w+=` title="${To(p)}"`),w+=">",w}text(c){return"tokens"in c&&c.tokens?this.parser.parseInline(c.tokens):"escaped"in c&&c.escaped?c.text:To(c.text)}},Jp=class{strong({text:c}){return c}em({text:c}){return c}codespan({text:c}){return c}del({text:c}){return c}html({text:c}){return c}text({text:c}){return c}link({text:c}){return""+c}image({text:c}){return""+c}br(){return""}},ds=class Ap{constructor(p){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=p||Ga,this.options.renderer=this.options.renderer||new fd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Jp}static parse(p,d){return new Ap(d).parse(p)}static parseInline(p,d){return new Ap(d).parseInline(p)}parse(p,d=!0){var b,w;let v="";for(let L=0;L<p.length;L++){const E=p[L];if((w=(b=this.options.extensions)==null?void 0:b.renderers)!=null&&w[E.type]){const P=E,A=this.options.extensions.renderers[P.type].call({parser:this},P);if(A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(P.type)){v+=A||"";continue}}const _=E;switch(_.type){case"space":{v+=this.renderer.space(_);continue}case"hr":{v+=this.renderer.hr(_);continue}case"heading":{v+=this.renderer.heading(_);continue}case"code":{v+=this.renderer.code(_);continue}case"table":{v+=this.renderer.table(_);continue}case"blockquote":{v+=this.renderer.blockquote(_);continue}case"list":{v+=this.renderer.list(_);continue}case"html":{v+=this.renderer.html(_);continue}case"paragraph":{v+=this.renderer.paragraph(_);continue}case"text":{let P=_,A=this.renderer.text(P);for(;L+1<p.length&&p[L+1].type==="text";)P=p[++L],A+=`
`+this.renderer.text(P);d?v+=this.renderer.paragraph({type:"paragraph",raw:A,text:A,tokens:[{type:"text",raw:A,text:A,escaped:!0}]}):v+=A;continue}default:{const P='Token with "'+_.type+'" type was not found.';if(this.options.silent)return console.error(P),"";throw new Error(P)}}}return v}parseInline(p,d=this.renderer){var b,w;let v="";for(let L=0;L<p.length;L++){const E=p[L];if((w=(b=this.options.extensions)==null?void 0:b.renderers)!=null&&w[E.type]){const P=this.options.extensions.renderers[E.type].call({parser:this},E);if(P!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(E.type)){v+=P||"";continue}}const _=E;switch(_.type){case"escape":{v+=d.text(_);break}case"html":{v+=d.html(_);break}case"link":{v+=d.link(_);break}case"image":{v+=d.image(_);break}case"strong":{v+=d.strong(_);break}case"em":{v+=d.em(_);break}case"codespan":{v+=d.codespan(_);break}case"br":{v+=d.br(_);break}case"del":{v+=d.del(_);break}case"text":{v+=d.text(_);break}default:{const P='Token with "'+_.type+'" type was not found.';if(this.options.silent)return console.error(P),"";throw new Error(P)}}}return v}},Tp,id=(Tp=class{constructor(c){on(this,"options");on(this,"block");this.options=c||Ga}preprocess(c){return c}postprocess(c){return c}processAllTokens(c){return c}provideLexer(){return this.block?cs.lex:cs.lexInline}provideParser(){return this.block?ds.parse:ds.parseInline}},on(Tp,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Tp),uv=class{constructor(...c){on(this,"defaults",Kp());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",ds);on(this,"Renderer",fd);on(this,"TextRenderer",Jp);on(this,"Lexer",cs);on(this,"Tokenizer",hd);on(this,"Hooks",id);this.use(...c)}walkTokens(c,p){var v,b;let d=[];for(const w of c)switch(d=d.concat(p.call(this,w)),w.type){case"table":{const L=w;for(const E of L.header)d=d.concat(this.walkTokens(E.tokens,p));for(const E of L.rows)for(const _ of E)d=d.concat(this.walkTokens(_.tokens,p));break}case"list":{const L=w;d=d.concat(this.walkTokens(L.items,p));break}default:{const L=w;(b=(v=this.defaults.extensions)==null?void 0:v.childTokens)!=null&&b[L.type]?this.defaults.extensions.childTokens[L.type].forEach(E=>{const _=L[E].flat(1/0);d=d.concat(this.walkTokens(_,p))}):L.tokens&&(d=d.concat(this.walkTokens(L.tokens,p)))}}return d}use(...c){const p=this.defaults.extensions||{renderers:{},childTokens:{}};return c.forEach(d=>{const v={...d};if(v.async=this.defaults.async||v.async||!1,d.extensions&&(d.extensions.forEach(b=>{if(!b.name)throw new Error("extension name required");if("renderer"in b){const w=p.renderers[b.name];w?p.renderers[b.name]=function(...L){let E=b.renderer.apply(this,L);return E===!1&&(E=w.apply(this,L)),E}:p.renderers[b.name]=b.renderer}if("tokenizer"in b){if(!b.level||b.level!=="block"&&b.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const w=p[b.level];w?w.unshift(b.tokenizer):p[b.level]=[b.tokenizer],b.start&&(b.level==="block"?p.startBlock?p.startBlock.push(b.start):p.startBlock=[b.start]:b.level==="inline"&&(p.startInline?p.startInline.push(b.start):p.startInline=[b.start]))}"childTokens"in b&&b.childTokens&&(p.childTokens[b.name]=b.childTokens)}),v.extensions=p),d.renderer){const b=this.defaults.renderer||new fd(this.defaults);for(const w in d.renderer){if(!(w in b))throw new Error(`renderer '${w}' does not exist`);if(["options","parser"].includes(w))continue;const L=w,E=d.renderer[L],_=b[L];b[L]=(...P)=>{let A=E.apply(b,P);return A===!1&&(A=_.apply(b,P)),A||""}}v.renderer=b}if(d.tokenizer){const b=this.defaults.tokenizer||new hd(this.defaults);for(const w in d.tokenizer){if(!(w in b))throw new Error(`tokenizer '${w}' does not exist`);if(["options","rules","lexer"].includes(w))continue;const L=w,E=d.tokenizer[L],_=b[L];b[L]=(...P)=>{let A=E.apply(b,P);return A===!1&&(A=_.apply(b,P)),A}}v.tokenizer=b}if(d.hooks){const b=this.defaults.hooks||new id;for(const w in d.hooks){if(!(w in b))throw new Error(`hook '${w}' does not exist`);if(["options","block"].includes(w))continue;const L=w,E=d.hooks[L],_=b[L];id.passThroughHooks.has(w)?b[L]=P=>{if(this.defaults.async)return Promise.resolve(E.call(b,P)).then(M=>_.call(b,M));const A=E.call(b,P);return _.call(b,A)}:b[L]=(...P)=>{let A=E.apply(b,P);return A===!1&&(A=_.apply(b,P)),A}}v.hooks=b}if(d.walkTokens){const b=this.defaults.walkTokens,w=d.walkTokens;v.walkTokens=function(L){let E=[];return E.push(w.call(this,L)),b&&(E=E.concat(b.call(this,L))),E}}this.defaults={...this.defaults,...v}}),this}setOptions(c){return this.defaults={...this.defaults,...c},this}lexer(c,p){return cs.lex(c,p??this.defaults)}parser(c,p){return ds.parse(c,p??this.defaults)}parseMarkdown(c){return(d,v)=>{const b={...v},w={...this.defaults,...b},L=this.onError(!!w.silent,!!w.async);if(this.defaults.async===!0&&b.async===!1)return L(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof d>"u"||d===null)return L(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return L(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));w.hooks&&(w.hooks.options=w,w.hooks.block=c);const E=w.hooks?w.hooks.provideLexer():c?cs.lex:cs.lexInline,_=w.hooks?w.hooks.provideParser():c?ds.parse:ds.parseInline;if(w.async)return Promise.resolve(w.hooks?w.hooks.preprocess(d):d).then(P=>E(P,w)).then(P=>w.hooks?w.hooks.processAllTokens(P):P).then(P=>w.walkTokens?Promise.all(this.walkTokens(P,w.walkTokens)).then(()=>P):P).then(P=>_(P,w)).then(P=>w.hooks?w.hooks.postprocess(P):P).catch(L);try{w.hooks&&(d=w.hooks.preprocess(d));let P=E(d,w);w.hooks&&(P=w.hooks.processAllTokens(P)),w.walkTokens&&this.walkTokens(P,w.walkTokens);let A=_(P,w);return w.hooks&&(A=w.hooks.postprocess(A)),A}catch(P){return L(P)}}}onError(c,p){return d=>{if(d.message+=`
Please report this to https://github.com/markedjs/marked.`,c){const v="<p>An error occurred:</p><pre>"+To(d.message+"",!0)+"</pre>";return p?Promise.resolve(v):v}if(p)return Promise.reject(d);throw d}}},Ka=new uv;function Kt(c,p){return Ka.parse(c,p)}Kt.options=Kt.setOptions=function(c){return Ka.setOptions(c),Kt.defaults=Ka.defaults,Of(Kt.defaults),Kt};Kt.getDefaults=Kp;Kt.defaults=Ga;Kt.use=function(...c){return Ka.use(...c),Kt.defaults=Ka.defaults,Of(Kt.defaults),Kt};Kt.walkTokens=function(c,p){return Ka.walkTokens(c,p)};Kt.parseInline=Ka.parseInline;Kt.Parser=ds;Kt.parser=ds.parse;Kt.Renderer=fd;Kt.TextRenderer=Jp;Kt.Lexer=cs;Kt.lexer=cs.lex;Kt.Tokenizer=hd;Kt.Hooks=id;Kt.parse=Kt;Kt.options;Kt.setOptions;Kt.use;Kt.walkTokens;Kt.parseInline;ds.parse;cs.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function jh(c,p){(p==null||p>c.length)&&(p=c.length);for(var d=0,v=Array(p);d<p;d++)v[d]=c[d];return v}function cv(c){if(Array.isArray(c))return c}function dv(c,p){var d=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var v,b,w,L,E=[],_=!0,P=!1;try{if(w=(d=d.call(c)).next,p!==0)for(;!(_=(v=w.call(d)).done)&&(E.push(v.value),E.length!==p);_=!0);}catch(A){P=!0,b=A}finally{try{if(!_&&d.return!=null&&(L=d.return(),Object(L)!==L))return}finally{if(P)throw b}}return E}}function pv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function hv(c,p){return cv(c)||dv(c,p)||fv(c,p)||pv()}function fv(c,p){if(c){if(typeof c=="string")return jh(c,p);var d={}.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?jh(c,p):void 0}}const $f=Object.entries,Ah=Object.setPrototypeOf,mv=Object.isFrozen,Gf=Object.getPrototypeOf,Yf=Object.getOwnPropertyDescriptor;let or=Object.freeze,Sr=Object.seal,Fl=Object.create,Vf=typeof Reflect<"u"&&Reflect,Rp=Vf.apply,Ip=Vf.construct;or||(or=function(p){return p});Sr||(Sr=function(p){return p});Rp||(Rp=function(p,d){for(var v=arguments.length,b=new Array(v>2?v-2:0),w=2;w<v;w++)b[w-2]=arguments[w];return p.apply(d,b)});Ip||(Ip=function(p){for(var d=arguments.length,v=new Array(d>1?d-1:0),b=1;b<d;b++)v[b-1]=arguments[b];return new p(...v)});const as=xn(Array.prototype.forEach),gv=xn(Array.prototype.lastIndexOf),Rh=xn(Array.prototype.pop),Uu=xn(Array.prototype.push),yv=xn(Array.prototype.slice),vv=xn(Array.prototype.splice),Bl=Array.isArray,gp=Xf(Set),yp=xn(Set.prototype.add),qu=xn(Set.prototype.has),Ha=xn(String.prototype.toLowerCase),vp=xn(String.prototype.toString),Ih=xn(String.prototype.match),Ku=xn(String.prototype.replace),Oh=xn(String.prototype.indexOf),xv=xn(String.prototype.trim),bv=xn(Number.prototype.toString),wv=xn(Boolean.prototype.toString),Mh=typeof BigInt>"u"?null:xn(BigInt.prototype.toString),Dh=typeof Symbol>"u"?null:xn(Symbol.prototype.toString),ei=xn(Object.prototype.hasOwnProperty),$u=xn(Object.prototype.toString),kr=xn(RegExp.prototype.test),ls=Xf(TypeError);function xn(c){return function(p){p instanceof RegExp&&(p.lastIndex=0);for(var d=arguments.length,v=new Array(d>1?d-1:0),b=1;b<d;b++)v[b-1]=arguments[b];return Rp(c,p,v)}}function Xf(c){return function(){for(var p=arguments.length,d=new Array(p),v=0;v<p;v++)d[v]=arguments[v];return Ip(c,d)}}function zt(c,p){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ha;if(Ah&&Ah(c,null),!Bl(p))return c;let v=p.length;for(;v--;){let b=p[v];if(typeof b=="string"){const w=d(b);w!==b&&(mv(p)||(p[v]=w),b=w)}c[b]=!0}return c}function kv(c){for(let p=0;p<c.length;p++)ei(c,p)||(c[p]=null);return c}function gi(c){const p=Fl(null);for(const v of $f(c)){var d=hv(v,2);const b=d[0],w=d[1];ei(c,b)&&(Bl(w)?p[b]=kv(w):w&&typeof w=="object"&&w.constructor===Object?p[b]=gi(w):p[b]=w)}return p}function Sv(c){switch(typeof c){case"string":return c;case"number":return bv(c);case"boolean":return wv(c);case"bigint":return Mh?Mh(c):"0";case"symbol":return Dh?Dh(c):"Symbol()";case"undefined":return $u(c);case"function":case"object":{if(c===null)return $u(c);const p=c,d=Oi(p,"toString");if(typeof d=="function"){const v=d(p);return typeof v=="string"?v:$u(v)}return $u(c)}default:return $u(c)}}function Oi(c,p){for(;c!==null;){const v=Yf(c,p);if(v){if(v.get)return xn(v.get);if(typeof v.value=="function")return xn(v.value)}c=Gf(c)}function d(){return null}return d}function _v(c,p){for(;c!==null;){const d=Yf(c,p);if(d)return d.get?xn(d.get):null;c=Gf(c)}return null}function Cv(c){try{return kr(c,""),!0}catch{return!1}}const zh=or(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),xp=or(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),bp=or(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Tv=or(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),wp=or(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Nv=or(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fh=or(["#text"]),Wh=or(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),kp=or(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Hh=or(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),rd=or(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ev=Sr(/{{[\w\W]*|^[\w\W]*}}/g),Lv=Sr(/<%[\w\W]*|^[\w\W]*%>/g),Pv=Sr(/\${[\w\W]*/g),jv=Sr(/^data-[\-\w.\u00B7-\uFFFF]+$/),Av=Sr(/^aria-[\-\w]+$/),Bh=Sr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Rv=Sr(/^(?:\w+script|data):/i),Iv=Sr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ov=Sr(/^html$/i),Mv=Sr(/^[a-z][.\w]*(-[.\w]+)+$/i),Sp=Sr(/<[/\w!]/g),Uh=Sr(/<[/\w]/g),Dv=Sr(/<\/no(script|embed|frames)/i),qh=Sr(/\/>/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},zv=or(zt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Fv=function(){return typeof window>"u"?null:window},Wv=function(p,d){if(typeof p!="object"||typeof p.createPolicy!="function")return null;let v=null;const b="data-tt-policy-suffix";d&&d.hasAttribute(b)&&(v=d.getAttribute(b));const w="dompurify"+(v?"#"+v:"");try{return p.createPolicy(w,{createHTML(L){return L},createScriptURL(L){return L}})}catch{return console.warn("TrustedTypes policy "+w+" could not be created."),null}},Kh=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qs=function(p,d,v,b){return ei(p,d)&&Bl(p[d])?zt(b.base?gi(b.base):{},p[d],b.transform):v},_p=function(p,d,v){const b=ei(p,d)?p[d]:void 0;return b&&typeof b=="object"?gi(b):v()};function Qf(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Fv();const p=ke=>Qf(ke);if(p.version="3.4.17",p.removed=[],!c||!c.document||c.document.nodeType!==Vn.document||!c.Element)return p.isSupported=!1,p;let d=c.document;const v=d,b=v.currentScript;c.DocumentFragment;const w=c.HTMLTemplateElement,L=c.Node,E=c.Element,_=c.NodeFilter;c.NamedNodeMap===void 0&&(c.NamedNodeMap||c.MozNamedAttrMap),c.HTMLFormElement;const P=c.DOMParser,A=c.trustedTypes,M=E.prototype,R=Oi(M,"cloneNode"),X=Oi(M,"remove"),ne=Oi(M,"removeAttributeNode"),J=Oi(M,"nextSibling"),ue=Oi(M,"childNodes"),D=Oi(M,"parentNode"),H=Oi(M,"shadowRoot"),U=Oi(M,"attributes"),$=L&&L.prototype?Oi(L.prototype,"nodeType"):null,se=L&&L.prototype?Oi(L.prototype,"nodeName"):null,ge=L&&L.prototype?Oi(L.prototype,"ownerDocument"):null,ie=function(j){return $?$(j):j.nodeType},Ce=function(j){return se?se(j):j.nodeName},We=_v(M,"namespaceURI"),_e=function(j){return We?We(j):j.namespaceURI};if(typeof w=="function"){const ke=d.createElement("template");ke.content&&ke.content.ownerDocument&&(d=ke.content.ownerDocument)}let q,Ee="",re,ve=!1,C=0;const Q=function(){if(C>0)throw ls('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},G=function(j){Q(),C++;try{return q.createHTML(j)}finally{C--}},N=function(j){Q(),C++;try{return q.createScriptURL(j)}finally{C--}},O=function(){return ve||(re=Wv(A,b),ve=!0),re},Y=d,W=Y.implementation,ae=Y.createNodeIterator,De=Y.createDocumentFragment,Je=Y.getElementsByTagName,Ve=v.importNode;let we=Kh();p.isSupported=typeof $f=="function"&&typeof D=="function"&&W&&W.createHTMLDocument!==void 0;const Ie=Ev,Fe=Lv,He=Pv,tt=jv,Ge=Av,qt=Rv,Qt=Iv,$t=Mv;let hn=Bh,et=null;const bt=zt({},[...zh,...xp,...bp,...wp,...Fh]);let lt=null;const Zt=zt({},[...Wh,...kp,...Hh,...rd]);let Ke=Object.seal(Fl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),vt=null,oe=null;const Se=Object.seal(Fl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let me=!0,xt=!0,$e=!1,ot=!0,qe=!1,mt=!0,dt=!1,fn=!1,Xn=null,_r=null,Wr=!1,sr=!1,yi=!1,gt=!1,Mi=!0,nt=!1;const Cr="user-content-";let Gt=!0,At=!1,Rt=null,En={},ln=null;const ar=zt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let bn=null;const ni=zt({},["audio","video","img","source","image","track"]);let In=null;const lr=zt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Hr="http://www.w3.org/1998/Math/MathML",Ln="http://www.w3.org/2000/svg",Tr="http://www.w3.org/1999/xhtml";let Qn=Tr,ri=!1,Br=null;const Ur=zt({},[Hr,Ln,Tr],vp),ur=or(["mi","mo","mn","ms","mtext"]);let qr=zt({},ur);const Po=or(["annotation-xml"]);let wn=zt({},Po);const hs=zt({},["title","style","font","a","script"]);let Ar=null;const Rr=["application/xhtml+xml","text/html"],Nr="text/html";let Ft=null,Er=null;const Di=d.createElement("form"),ii=function(j){return j instanceof RegExp||j instanceof Function},vi=function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Er&&Er===j)return;(!j||typeof j!="object")&&(j={}),j=gi(j),Ar=Rr.indexOf(j.PARSER_MEDIA_TYPE)===-1?Nr:j.PARSER_MEDIA_TYPE,Ft=Ar==="application/xhtml+xml"?vp:Ha,et=Qs(j,"ALLOWED_TAGS",bt,{transform:Ft}),lt=Qs(j,"ALLOWED_ATTR",Zt,{transform:Ft}),Br=Qs(j,"ALLOWED_NAMESPACES",Ur,{transform:vp}),In=Qs(j,"ADD_URI_SAFE_ATTR",lr,{transform:Ft,base:lr}),bn=Qs(j,"ADD_DATA_URI_TAGS",ni,{transform:Ft,base:ni}),ln=Qs(j,"FORBID_CONTENTS",ar,{transform:Ft}),vt=Qs(j,"FORBID_TAGS",gi({}),{transform:Ft}),oe=Qs(j,"FORBID_ATTR",gi({}),{transform:Ft}),En=ei(j,"USE_PROFILES")?j.USE_PROFILES&&typeof j.USE_PROFILES=="object"?gi(j.USE_PROFILES):j.USE_PROFILES:!1,me=j.ALLOW_ARIA_ATTR!==!1,xt=j.ALLOW_DATA_ATTR!==!1,$e=j.ALLOW_UNKNOWN_PROTOCOLS||!1,ot=j.ALLOW_SELF_CLOSE_IN_ATTR!==!1,qe=j.SAFE_FOR_TEMPLATES||!1,mt=j.SAFE_FOR_XML!==!1,dt=j.WHOLE_DOCUMENT||!1,sr=j.RETURN_DOM||!1,yi=j.RETURN_DOM_FRAGMENT||!1,gt=j.RETURN_TRUSTED_TYPE||!1,Wr=j.FORCE_BODY||!1,Mi=j.SANITIZE_DOM!==!1,nt=j.SANITIZE_NAMED_PROPS||!1,Gt=j.KEEP_CONTENT!==!1,At=j.IN_PLACE||!1,hn=Cv(j.ALLOWED_URI_REGEXP)?j.ALLOWED_URI_REGEXP:Bh,Qn=typeof j.NAMESPACE=="string"?j.NAMESPACE:Tr,qr=_p(j,"MATHML_TEXT_INTEGRATION_POINTS",()=>zt({},ur)),wn=_p(j,"HTML_INTEGRATION_POINTS",()=>zt({},Po));const Z=_p(j,"CUSTOM_ELEMENT_HANDLING",()=>Fl(null));if(Ke=Fl(null),ei(Z,"tagNameCheck")&&ii(Z.tagNameCheck)&&(Ke.tagNameCheck=Z.tagNameCheck),ei(Z,"attributeNameCheck")&&ii(Z.attributeNameCheck)&&(Ke.attributeNameCheck=Z.attributeNameCheck),ei(Z,"allowCustomizedBuiltInElements")&&typeof Z.allowCustomizedBuiltInElements=="boolean"&&(Ke.allowCustomizedBuiltInElements=Z.allowCustomizedBuiltInElements),Sr(Ke),qe&&(xt=!1),yi&&(sr=!0),En&&(et=zt({},Fh),lt=Fl(null),En.html===!0&&(zt(et,zh),zt(lt,Wh)),En.svg===!0&&(zt(et,xp),zt(lt,kp),zt(lt,rd)),En.svgFilters===!0&&(zt(et,bp),zt(lt,kp),zt(lt,rd)),En.mathMl===!0&&(zt(et,wp),zt(lt,Hh),zt(lt,rd))),Se.tagCheck=null,Se.attributeCheck=null,ei(j,"ADD_TAGS")&&(typeof j.ADD_TAGS=="function"?Se.tagCheck=j.ADD_TAGS:Bl(j.ADD_TAGS)&&(et===bt&&(et=gi(et)),zt(et,j.ADD_TAGS,Ft))),ei(j,"ADD_ATTR")&&(typeof j.ADD_ATTR=="function"?Se.attributeCheck=j.ADD_ATTR:Bl(j.ADD_ATTR)&&(lt===Zt&&(lt=gi(lt)),zt(lt,j.ADD_ATTR,Ft))),ei(j,"ADD_FORBID_CONTENTS")&&Bl(j.ADD_FORBID_CONTENTS)&&(ln===ar&&(ln=gi(ln)),zt(ln,j.ADD_FORBID_CONTENTS,Ft)),Gt&&(et["#text"]=!0),dt&&zt(et,["html","head","body"]),et.table&&(zt(et,["tbody"]),delete vt.tbody),j.TRUSTED_TYPES_POLICY){if(typeof j.TRUSTED_TYPES_POLICY.createHTML!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof j.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=q;q=j.TRUSTED_TYPES_POLICY;try{Ee=G("")}catch(be){throw q=xe,be}}else j.TRUSTED_TYPES_POLICY===null?(q=void 0,Ee=""):(q===void 0&&(q=O()),q&&typeof Ee=="string"&&(Ee=G("")));or&&or(j),Er=j},Pt=zt({},[...xp,...bp,...Tv]),ro=zt({},[...wp,...Nv]),xi=function(j,Z,xe){return Z.namespaceURI===Tr?j==="svg":Z.namespaceURI===Hr?j==="svg"&&(xe==="annotation-xml"||qr[xe]):!!Pt[j]},Yt=function(j,Z,xe){return Z.namespaceURI===Tr?j==="math":Z.namespaceURI===Ln?j==="math"&&wn[xe]:!!ro[j]},Xe=function(j,Z,xe){return Z.namespaceURI===Ln&&!wn[xe]||Z.namespaceURI===Hr&&!qr[xe]?!1:!ro[j]&&(hs[j]||!Pt[j])},oi=function(j){const Z=_e(j),xe=Ha(Ce(j)),be=D(j);let Ze,ut;return be&&ie(be)===Vn.element?(Ze={namespaceURI:_e(be)},ut=Ha(Ce(be))):(Ze={namespaceURI:Qn},ut="template"),Br[Z]?Z===Ln?xi(xe,Ze,ut):Z===Hr?Yt(xe,Ze,ut):Z===Tr?Xe(xe,Ze,ut):!!(Ar==="application/xhtml+xml"&&Br[Z]):!1},cr=function(j){Uu(p.removed,{element:j});try{D(j).removeChild(j)}catch{if(X(j),!D(j))throw ls("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},On=function(j,Z,xe){try{ne(j,Z)}catch{try{j.removeAttribute(xe)}catch{}}},S=function(j){de(j);const Z=ue(j);Z&&as(yv(Z),be=>{try{X(be)}catch{}});const xe=ie(j)===Vn.element?U(j):null;if(xe)for(let be=xe.length-1;be>=0;--be){const Ze=xe[be],ut=Ze&&Ze.name;typeof ut=="string"&&On(j,Ze,ut)}},z=function(j,Z,xe){if(!xe)try{xe=Z.getAttributeNode(j)}catch{xe=null}Uu(p.removed,{attribute:xe||null,from:Z});try{xe?ne(Z,xe):Z.removeAttribute(j)}catch{try{Z.removeAttribute(j)}catch{}}if(j==="is")if(sr||yi)try{cr(Z)}catch{}else try{Z.setAttribute(j,"")}catch{}},he=function(j){const Z=U(j);if(Z)for(let xe=Z.length-1;xe>=0;--xe){const be=Z[xe],Ze=be&&be.name;typeof Ze!="string"||lt[Ft(Ze)]||On(j,be,Ze)}},Te=function(j,Z){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const be=[j];for(;be.length>0;){const Ze=be.pop();if(Z(Ze)===!1)continue;if(xe&&ie(Ze)===Vn.element){const kt=H(Ze);Kr(kt)&&be.push(kt)}const ut=ue(Ze);if(ut)for(let kt=ut.length-1;kt>=0;--kt)be.push(ut[kt])}},de=function(j){Te(j,Z=>{ie(Z)===Vn.element&&he(Z)})},ze=function(j){const Z=[];return Te(j,xe=>{Z.push(xe)},!0),Z},_t=function(j,Z){const xe=gp();as(ze(j),be=>{ie(be)===Vn.element&&yp(xe,be)}),as(Z,be=>{ie(be)===Vn.element&&!qu(xe,be)&&he(be)})},Jt=function(j,Z){let xe=!1;return as(p.removed,be=>{be.element&&(xe=xe||be.element===j,de(be.element))}),_t(j,Z),xe},kn=8,si=function(j,Z){const xe=Rt;let be=null;const Ze=()=>(be||(be=gp(),as(Z,ut=>{yp(be,ut)})),be);for(let ut=0;;ut++){const kt=ze(j),mn=[j];let hr=!1;if(as(kt,un=>{ie(un)===Vn.documentFragment?Uu(mn,un):!hr&&!qu(xe,un)&&(hr=qu(Ze(),un))}),!hr)return;if(ut>=kn)throw ls("the tree kept changing during in-place sanitization; refusing to return it");as(mn,(un,$n)=>{Ya(un,$n>0,j,Ze())})}},Ya=function(j,Z,xe,be){const Ze=Kn(j);let ut;for(;ut=Ze.nextNode();)!qu(be,ut)||qu(Rt,ut)||(Z&&dr(we.uponSanitizeShadowNode,ut,null),Ir(ut,xe),Wi(ut,xe),Kr(ut.content)&&Oo(ut.content))},ft=function(j){Rt&&yp(Rt,j)},fs=function(j,Z){return mt?j==="patchsrc"?!0:j==="for"&&Z!=="label"&&Z!=="output":!1},Zs=function(j){mt&&Te(j,Z=>{const xe=ie(Z);if(xe===Vn.processingInstruction||xe===Vn.comment&&kr(Uh,Z.data)){try{X(Z)}catch{}return!1}if(xe===Vn.element){const be=Z,Ze=Ft(Ce(Z));try{be.hasAttribute&&be.hasAttribute("patchsrc")&&be.removeAttribute("patchsrc"),be.hasAttribute&&be.hasAttribute("for")&&fs("for",Ze)&&be.removeAttribute("for")}catch{}}return!0})},zi=function(j){let Z=null,xe=null;if(Wr)j="<remove></remove>"+j;else{const ut=Ih(j,/^[\r\n\t ]+/);xe=ut&&ut[0]}Ar==="application/xhtml+xml"&&Qn===Tr&&(j='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+j+"</body></html>");const be=q?G(j):j;if(Qn===Tr)try{Z=new P().parseFromString(be,Ar)}catch{}if(!Z||!Z.documentElement){Z=W.createDocument(Qn,"template",null);try{Z.documentElement.innerHTML=ri?Ee:be}catch{}}const Ze=Z.body||Z.documentElement;return j&&xe&&Ze.insertBefore(d.createTextNode(xe),Ze.childNodes[0]||null),Qn===Tr?Je.call(Z,dt?"html":"body")[0]:dt?Z.documentElement:Ze},Kn=function(j){const Z=ge?ge(j):j.ownerDocument;return ae.call(Z||j,j,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT|_.SHOW_PROCESSING_INSTRUCTION|_.SHOW_CDATA_SECTION,null)},jo=function(j){return j=Ku(j,Ie," "),j=Ku(j,Fe," "),j=Ku(j,He," "),j},io=function(j){var Z;Nt(j);const xe=(Z=j.querySelectorAll)===null||Z===void 0?void 0:Z.call(j,"template");xe&&as(xe,be=>{Kr(be.content)&&io(be.content)})},Nt=function(j){j.normalize();const Z=ge?ge(j):j.ownerDocument,xe=ae.call(Z||j,j,_.SHOW_TEXT|_.SHOW_COMMENT|_.SHOW_CDATA_SECTION|_.SHOW_PROCESSING_INSTRUCTION,null);let be=xe.nextNode();for(;be;)be.data=jo(be.data),be=xe.nextNode()},Fi=function(j){const Z=se?se(j):null;return typeof Z!="string"||Ft(Z)!=="form"?!1:typeof j.nodeName!="string"||typeof j.textContent!="string"||typeof j.removeChild!="function"||j.attributes!==U(j)||typeof j.removeAttribute!="function"||typeof j.removeAttributeNode!="function"||typeof j.getAttributeNode!="function"||typeof j.setAttribute!="function"||typeof j.namespaceURI!="string"||typeof j.insertBefore!="function"||typeof j.hasChildNodes!="function"||j.nodeType!==$(j)||j.childNodes!==ue(j)},Kr=function(j){if(!$||typeof j!="object"||j===null)return!1;try{return $(j)===Vn.documentFragment}catch{return!1}},ai=function(j){if(!$||typeof j!="object"||j===null)return!1;try{return typeof $(j)=="number"}catch{return!1}};function dr(ke,j,Z){ke.length!==0&&as(ke,xe=>{xe.call(p,j,Z,Er)})}const Js=function(j,Z){return!!(mt&&j.hasChildNodes()&&!ai(j.firstElementChild)&&kr(Sp,j.textContent)&&kr(Sp,j.innerHTML)||mt&&zv[Z]&&ie(j)===Vn.element&&_e(j)===Tr&&(ai(j.firstElementChild)||typeof j.textContent=="string"&&kr(Sp,j.textContent))||j.nodeType===Vn.processingInstruction||mt&&j.nodeType===Vn.comment&&kr(Uh,j.data))},oo=function(j,Z){if(j instanceof RegExp)return kr(j,Z);if(j instanceof Function){for(var xe=arguments.length,be=new Array(xe>2?xe-2:0),Ze=2;Ze<xe;Ze++)be[Ze-2]=arguments[Ze];return!!j(Z,...be)}return!1},ms=function(j,Z,xe){if(!vt[Z]&&so(Z)&&oo(Ke.tagNameCheck,Z))return!1;if(Gt&&!ln[Z]&&!ln[Ha(Z)]){const be=D(j),Ze=ue(j);if(Ze&&be){const ut=Ze.length;for(let kt=ut-1;kt>=0;--kt){const mn=j===xe?R(Ze[kt],!0):Ze[kt];be.insertBefore(mn,J(j))}}}return cr(j),!0},Ao=function(j,Z,xe,be){return j.length===0?Z:Z===xe||Z===be?gi(Z):Z},pr=function(j,Z){return j===Z||D(j)!==null?!1:(At&&de(j),!0)},Ir=function(j,Z){if(ft(j),dr(we.beforeSanitizeElements,j,null),pr(j,Z))return!0;if(Fi(j))return cr(j),!0;const xe=Ft(Ce(j));if(et=Ao(we.uponSanitizeElement,et,bt,Xn),dr(we.uponSanitizeElement,j,{tagName:xe,allowedTags:et}),pr(j,Z))return!0;if(Js(j,xe))return cr(j),!0;if(vt[xe]||!(Se.tagCheck instanceof Function&&Se.tagCheck(xe))&&!et[xe]){const be=ms(j,xe,Z);return be===!1&&(dr(we.afterSanitizeElements,j,null),pr(j,Z))?!0:be}if(ie(j)===Vn.element&&!oi(j)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&kr(Dv,j.innerHTML))return cr(j),!0;if(qe&&j.nodeType===Vn.text){const be=jo(j.textContent);j.textContent!==be&&(Uu(p.removed,{element:j.cloneNode()}),j.textContent=be)}return dr(we.afterSanitizeElements,j,null),pr(j,Z)},Mn=function(j,Z,xe){if(oe[Z]||fs(Z,j)||Mi&&(Z==="id"||Z==="name")&&(xe in d||xe in Di))return!1;const be=lt[Z]||Se.attributeCheck instanceof Function&&Se.attributeCheck(Z,j);return xt&&kr(tt,Z)||me&&kr(Ge,Z)?!0:be?In[Z]||kr(hn,Ku(xe,Qt,""))||(Z==="src"||Z==="xlink:href"||Z==="href")&&j!=="script"&&Oh(xe,"data:")===0&&bn[j]||$e&&!kr(qt,Ku(xe,Qt,""))?!0:!xe:so(j)&&oo(Ke.tagNameCheck,j)&&oo(Ke.attributeNameCheck,Z,j)||Z==="is"&&Ke.allowCustomizedBuiltInElements&&oo(Ke.tagNameCheck,xe)},Ro=zt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),so=function(j){return!Ro[Ha(j)]&&kr($t,j)},Or=function(j,Z,xe,be){if(q&&typeof A=="object"&&typeof A.getAttributeType=="function"&&!xe)switch(A.getAttributeType(j,Z)){case"TrustedHTML":return G(be);case"TrustedScriptURL":return N(be)}return be},Io=function(j,Z,xe,be){try{return xe?j.setAttributeNS(xe,Z,be):j.setAttribute(Z,be),Fi(j)?(cr(j),!1):!0}catch{return z(Z,j),!1}},ea=function(j,Z){return mt&&kr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Z)?!0:Ha(j)==="attributename"&&Ih(Z,"href")!==null},Wi=function(j,Z){if(dr(we.beforeSanitizeAttributes,j,null),pr(j,Z))return;const xe=j.attributes;if(!xe||Fi(j))return;lt=Ao(we.uponSanitizeAttribute,lt,Zt,_r);const be={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:lt,forceKeepAttr:void 0};let Ze=xe.length;const ut=Ft(j.nodeName);for(;Ze--;){const kt=xe[Ze],mn=kt.name,hr=kt.namespaceURI,un=kt.value,$n=Ft(mn),bi=un;let jt=mn==="value"?bi:xv(bi),ys=!1;if(be.attrName=$n,be.attrValue=jt,be.keepAttr=!0,be.forceKeepAttr=void 0,dr(we.uponSanitizeAttribute,j,be),jt=be.attrValue,nt&&($n==="id"||$n==="name")&&Oh(jt,Cr)!==0&&(z(mn,j,kt),jt=Cr+jt,ys=!0),ea(mn,jt)){z(mn,j,kt);continue}if(!be.forceKeepAttr){if(!be.keepAttr){z(mn,j,kt);continue}if(!ot&&kr(qh,jt)){z(mn,j,kt);continue}if(qe&&(jt=jo(jt)),!Mn(ut,$n,jt)){z(mn,j,kt);continue}jt=Or(ut,$n,hr,jt),jt!==bi&&Io(j,mn,hr,jt)&&ys&&Rh(p.removed)}}dr(we.afterSanitizeAttributes,j,null),pr(j,Z)},Oo=function(j){let Z=null;const xe=Kn(j);for(dr(we.beforeSanitizeShadowDOM,j,null);Z=xe.nextNode();)if(dr(we.uponSanitizeShadowNode,Z,null),Ir(Z,j),Wi(Z,j),Kr(Z.content)&&Oo(Z.content),ie(Z)===Vn.element){const be=H(Z);Kr(be)&&(gs(be),Oo(be))}qe&&Nt(j),dr(we.afterSanitizeShadowDOM,j,null)},gs=function(j){const Z=[{node:j,shadow:null}];for(;Z.length>0;){const xe=Z.pop();if(xe.shadow){Oo(xe.shadow);continue}const be=xe.node,Ze=ie(be)===Vn.element,ut=ue(be);if(ut)for(let kt=ut.length-1;kt>=0;--kt)Z.push({node:ut[kt],shadow:null});if(Ze){const kt=se?se(be):null;if(typeof kt=="string"&&Ft(kt)==="template"){const mn=be.content;Kr(mn)&&Z.push({node:mn,shadow:null})}}if(Ze){const kt=H(be);Kr(kt)&&Z.push({node:null,shadow:kt},{node:kt,shadow:null})}}};return p.sanitize=function(ke){let j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Z=null,xe=null,be=null,Ze=null;if(ri=!ke,ri&&(ke="<!-->"),typeof ke!="string"&&!ai(ke)&&(ke=Sv(ke),typeof ke!="string"))throw ls("dirty is not a string, aborting");if(!p.isSupported)return ke;fn?(et=Xn,lt=_r):vi(j),(we.uponSanitizeElement.length>0||we.uponSanitizeAttribute.length>0)&&(et=gi(et)),we.uponSanitizeAttribute.length>0&&(lt=gi(lt)),p.removed=[];const ut=At&&typeof ke!="string"&&ai(ke);let kt=[];const mn=Rt;if(ut){Zs(ke);const $n=Ce(ke);if(typeof $n=="string"){const bi=Ft($n);if(!et[bi]||vt[bi])throw S(ke),ls("root node is forbidden and cannot be sanitized in-place")}if(Fi(ke))throw S(ke),ls("root node is clobbered and cannot be sanitized in-place");kt=ze(ke),Rt=gp()}else if(ai(ke))Z=zi("<!---->"),xe=Z.ownerDocument.importNode(ke,!0),xe.nodeType===Vn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?Z=xe:Z.appendChild(xe),gs(Z);else{if(!sr&&!qe&&!dt&&ke.indexOf("<")===-1)return q&&gt?G(ke):ke;if(Z=zi(ke),!Z)return sr?null:gt?Ee:""}Z&&Wr&&cr(Z.firstChild);const hr=ut?ke:Z;try{ut&&gs(ke);const $n=Kn(hr);for(;be=$n.nextNode();)Ir(be,hr),Wi(be,hr),Kr(be.content)&&Oo(be.content);ut&&si(ke,kt)}catch($n){throw ut&&(S(ke),Jt(ke,kt)),$n}finally{Rt=mn}if(ut){if(Jt(ke,kt))throw ls("a node selected for removal could not be safely returned; refusing to sanitize in place");return qe&&io(ke),ke}if(sr){if(qe&&io(Z),yi)for(Ze=De.call(Z.ownerDocument);Z.firstChild;)Ze.appendChild(Z.firstChild);else Ze=Z;return(lt.shadowroot||lt.shadowrootmode)&&(Ze=Ve.call(v,Ze,!0)),Ze}let un=dt?Z.outerHTML:Z.innerHTML;return dt&&et["!doctype"]&&Z.ownerDocument&&Z.ownerDocument.doctype&&Z.ownerDocument.doctype.name&&kr(Ov,Z.ownerDocument.doctype.name)&&(un="<!DOCTYPE "+Z.ownerDocument.doctype.name+`>
`+un),qe&&(un=jo(un)),q&&gt?G(un):un},p.setConfig=function(){let ke=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};vi(ke),fn=!0,Xn=et,_r=lt},p.clearConfig=function(){Er=null,fn=!1,Xn=null,_r=null,q=re,Ee=""},p.isValidAttribute=function(ke,j,Z){Er||vi({});const xe=Ft(ke),be=Ft(j);return typeof Z=="string"&&(ea(j,Z)||!ot&&kr(qh,Z))?!1:Mn(xe,be,Z)},p.addHook=function(ke,j){typeof j=="function"&&ei(we,ke)&&Uu(we[ke],j)},p.removeHook=function(ke,j){if(ei(we,ke)){if(j!==void 0){const Z=gv(we[ke],j);return Z===-1?void 0:vv(we[ke],Z,1)[0]}return Rh(we[ke])}},p.removeHooks=function(ke){ei(we,ke)&&(we[ke]=[])},p.removeAllHooks=function(){we=Kh()},p}var Hv=Qf();function Bv(c,p=null){const d=String(c||""),v=d.split(`
`),b=v.findIndex(_=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(_)),w=b===-1?-1:v.findIndex((_,P)=>P>b&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(_)),L=b>=0?v.slice(b,w<0?v.length:w).join(`
`):`# Solve

${(p==null?void 0:p.challenge)||"Try the lesson task before looking at the guide."}`,E=b>=0?[...v.slice(0,b),...w<0?[]:v.slice(w)].join(`
`).trim():d;return{solve:L,learn:E}}function Uv(c){const p=String(c||"").split(`
`),d=[];let v=null;p.forEach((L,E)=>{const _=L.trim(),P=/^(`{3,}|~{3,})/.exec(_);if(P){const X=P[1];v?v.char===X[0]&&X.length>=v.length&&(v=null):v={char:X[0],length:X.length};return}if(v)return;const A=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(L);if(!A)return;const M=A[2],R=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(M);d.push({index:E,level:A[1].length,numbered:R})});const b=d.filter(L=>L.numbered),w=(b.length?b:d.filter(L=>L.level===2)).map(L=>L.index);return w.length?{intro:p.slice(0,w[0]).join(`
`).trim(),steps:w.map((L,E)=>p.slice(L,w[E+1]??p.length).join(`
`).trim())}:{intro:p.join(`
`),steps:[]}}const qv=Object.assign({"../content/capstone-discovery.md":ty,"../content/capstone-feedback.md":ny,"../content/capstone-interviews.md":ry,"../content/capstone-prototype.md":iy,"../content/csharp-conditionals.md":oy,"../content/csharp-variables.md":sy,"../content/python-decisions.md":ay,"../content/python-formatting.md":ly,"../content/python-lists.md":uy,"../content/python-loops.md":cy,"../content/python-strings.md":dy,"../content/python-variables.md":py,"../content/react-components.md":hy,"../content/react-state.md":fy,"../content/tsi-equations.md":my,"../content/tsi-percents.md":gy,"../content/tsi-ratios.md":yy,"../content/tsi-slope.md":vy,"../content/uil-arrays.md":xy,"../content/uil-loops.md":by,"../content/uil-methods.md":wy,"../content/uil-strings.md":ky,"../content/unity-colliders.md":Sy,"../content/unity-player-controller.md":_y,"../content/unity-score.md":Cy,"../content/web-events.md":Ty,"../content/web-layout.md":Ny}),Kv="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",$v=c=>qv[`../content/${c}.md`]||Kv,Zf=c=>Hv.sanitize(Kt.parse(c,{breaks:!1,gfm:!0}));function Gv(c,p=""){if(!(c!=null&&c.isPublished))return"";let d="";const v=Array.isArray(c.cases)?c.cases:[];v.length&&!/##\s+(?:Published )?Examples\b/i.test(p)&&(d+=`

### Published examples
`,v.forEach((w,L)=>{d+=`
**Example `+(L+1)+`**

`,w.call&&(d+="Input: `"+w.call+`\`

`),d+=c.mode==="function"?`Expected return:
`:`Expected output:
`,d+="\n```text\n"+String(w.expected??"")+"\n```\n"}));const b=Array.isArray(c.hints)?c.hints:[];return b.length&&!/<details(?:\s|>)/i.test(p)&&(d+=`

### Need a hint?
`,b.forEach((w,L)=>{d+=`
<details>
<summary>Hint `+(L+1)+`</summary>

`+String(w).replaceAll("<","&lt;")+`

</details>
`})),d}function $h(c,p){if(!p)return c;const d="https://github.com/mswhitby/computer-science-1/blob/main/units/",v=new URL(p,d);return String(c).replace(/\]\(([^)]+)\)/g,(b,w)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(w))return b;const[L,...E]=w.split(" ");try{const _=new URL(L,v);return _.origin!==v.origin?b:"]("+_.href+(E.length?" "+E.join(" "):"")+")"}catch{return b}})}const Jf={markdown:c=>`designlab:md:${c}`,code:c=>`designlab:code:${c}`};function md(c){try{return localStorage.getItem(c)}catch{return null}}function gd(c,p){try{localStorage.setItem(c,p)}catch{}}function Yv(c){try{localStorage.removeItem(c)}catch{}}function Gh({lessonId:c,task:p,isTsi:d=!1,tsiAnswer:v=null}){var $;const b=(p==null?void 0:p.markdownSource)||$v(c),w=Jf.markdown(c),[L,E]=Ue.useState(b),[_,P]=Ue.useState(d?"learn":"solve"),[A,M]=Ue.useState(0),[R,X]=Ue.useState(!1);Ue.useEffect(()=>{E(md(w)??b),P(d?"learn":"solve"),M(0),X(!1)},[w,b,d]);const ne=Ue.useMemo(()=>{const se=Bv(L,p),ge=se.solve+Gv(p,se.solve);return{solve:$h(ge,p==null?void 0:p.markdown),learn:$h(se.learn,p==null?void 0:p.markdown)}},[L,p]),J=Ue.useMemo(()=>Uv(ne.learn),[ne.learn]),ue=!d&&_==="learn"&&J.steps.length>0,D=Math.min(A,Math.max(0,J.steps.length-1)),H=d?ne.learn:_==="solve"?ne.solve:ue?J.intro+`

`+J.steps[D]:ne.learn,U=Ue.useMemo(()=>Zf(H),[H]);return h.jsxs("section",{className:"instructions-pane",children:[h.jsxs("div",{className:"pane-header",children:[d?h.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):h.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[h.jsx("button",{role:"tab","aria-selected":_==="solve",className:_==="solve"?"active":"",onClick:()=>{P("solve"),M(0)},children:"Solve"}),h.jsx("button",{role:"tab","aria-selected":_==="learn",className:_==="learn"?"active":"",onClick:()=>{P("learn"),M(0)},children:"Learn"})]}),h.jsx("button",{type:"button",className:us("icon-button",R&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>X(!R),children:h.jsx(Eg,{size:16})})]}),R?h.jsxs("div",{className:"markdown-source",children:[h.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),h.jsx("textarea",{"aria-label":"Markdown source",value:L,onChange:se=>{E(se.target.value),M(0),gd(w,se.target.value)}}),h.jsx("button",{type:"button",className:"btn",onClick:()=>{Yv(w),E(b),M(0)},children:"Reset lesson text"})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[h.jsx("div",{dangerouslySetInnerHTML:{__html:U}}),d&&v&&h.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[h.jsx("h3",{children:v.correct?"Why that works":"Review the solution"}),h.jsx("p",{children:($=If[c])==null?void 0:$.explanation})]})]}),ue&&h.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[h.jsx("button",{type:"button",className:"step-link",disabled:D===0,onClick:()=>M(se=>Math.max(0,se-1)),children:"Previous"}),h.jsxs("span",{children:["Step ",D+1," of ",J.steps.length]}),h.jsx("button",{type:"button",className:"step-link",disabled:D===J.steps.length-1,onClick:()=>M(se=>Math.min(J.steps.length-1,se+1)),children:"Next"})]})]})]})}var od={exports:{}},Vv=od.exports,Yh;function no(){return Yh||(Yh=1,(function(c,p){(function(d,v){c.exports=v()})(Vv,(function(){var d=navigator.userAgent,v=navigator.platform,b=/gecko\/\d/i.test(d),w=/MSIE \d/.test(d),L=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(d),E=/Edge\/(\d+)/.exec(d),_=w||L||E,P=_&&(w?document.documentMode||6:+(E||L)[1]),A=!E&&/WebKit\//.test(d),M=A&&/Qt\/\d+\.\d+/.test(d),R=!E&&/Chrome\/(\d+)/.exec(d),X=R&&+R[1],ne=/Opera\//.test(d),J=/Apple Computer/.test(navigator.vendor),ue=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(d),D=/PhantomJS/.test(d),H=J&&(/Mobile\/\w+/.test(d)||navigator.maxTouchPoints>2),U=/Android/.test(d),$=H||U||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(d),se=H||/Mac/.test(v),ge=/\bCrOS\b/.test(d),ie=/win/i.test(v),Ce=ne&&d.match(/Version\/(\d*\.\d*)/);Ce&&(Ce=Number(Ce[1])),Ce&&Ce>=15&&(ne=!1,A=!0);var We=se&&(M||ne&&(Ce==null||Ce<12.11)),_e=b||_&&P>=9;function q(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ee=function(e,n){var o=e.className,i=q(n).exec(o);if(i){var s=o.slice(i.index+i[0].length);e.className=o.slice(0,i.index)+(s?i[1]+s:"")}};function re(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ve(e,n){return re(e).appendChild(n)}function C(e,n,o,i){var s=document.createElement(e);if(o&&(s.className=o),i&&(s.style.cssText=i),typeof n=="string")s.appendChild(document.createTextNode(n));else if(n)for(var u=0;u<n.length;++u)s.appendChild(n[u]);return s}function Q(e,n,o,i){var s=C(e,n,o,i);return s.setAttribute("role","presentation"),s}var G;document.createRange?G=function(e,n,o,i){var s=document.createRange();return s.setEnd(i||e,o),s.setStart(e,n),s}:G=function(e,n,o){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",o),i.moveStart("character",n),i};function N(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function O(e){var n=e.ownerDocument||e,o;try{o=e.activeElement}catch{o=n.body||null}for(;o&&o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}function Y(e,n){var o=e.className;q(n).test(o)||(e.className+=(o?" ":"")+n)}function W(e,n){for(var o=e.split(" "),i=0;i<o.length;i++)o[i]&&!q(o[i]).test(n)&&(n+=" "+o[i]);return n}var ae=function(e){e.select()};H?ae=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:_&&(ae=function(e){try{e.select()}catch{}});function De(e){return e.display.wrapper.ownerDocument}function Je(e){return Ve(e.display.wrapper)}function Ve(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function we(e){return De(e).defaultView}function Ie(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Fe(e,n,o){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function He(e,n,o,i,s){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var u=i||0,m=s||0;;){var y=e.indexOf("	",u);if(y<0||y>=n)return m+(n-u);m+=y-u,m+=o-m%o,u=y+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=Ie(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var o=+new Date+e;(!this.id||o<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=o)};function Ge(e,n){for(var o=0;o<e.length;++o)if(e[o]==n)return o;return-1}var qt=50,Qt={toString:function(){return"CodeMirror.Pass"}},$t={scroll:!1},hn={origin:"*mouse"},et={origin:"+move"};function bt(e,n,o){for(var i=0,s=0;;){var u=e.indexOf("	",i);u==-1&&(u=e.length);var m=u-i;if(u==e.length||s+m>=n)return i+Math.min(m,n-s);if(s+=u-i,s+=o-s%o,i=u+1,s>=n)return i}}var lt=[""];function Zt(e){for(;lt.length<=e;)lt.push(Ke(lt)+" ");return lt[e]}function Ke(e){return e[e.length-1]}function vt(e,n){for(var o=[],i=0;i<e.length;i++)o[i]=n(e[i],i);return o}function oe(e,n,o){for(var i=0,s=o(n);i<e.length&&o(e[i])<=s;)i++;e.splice(i,0,n)}function Se(){}function me(e,n){var o;return Object.create?o=Object.create(e):(Se.prototype=e,o=new Se),n&&Fe(n,o),o}var xt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function $e(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||xt.test(e))}function ot(e,n){return n?n.source.indexOf("\\w")>-1&&$e(e)?!0:n.test(e):$e(e)}function qe(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function dt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function fn(e,n,o){for(;(o<0?n>0:n<e.length)&&dt(e.charAt(n));)n+=o;return n}function Xn(e,n,o){for(var i=n>o?-1:1;;){if(n==o)return n;var s=(n+o)/2,u=i<0?Math.ceil(s):Math.floor(s);if(u==n)return e(u)?n:o;e(u)?o=u:n=u+i}}function _r(e,n,o,i){if(!e)return i(n,o,"ltr",0);for(var s=!1,u=0;u<e.length;++u){var m=e[u];(m.from<o&&m.to>n||n==o&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,o),m.level==1?"rtl":"ltr",u),s=!0)}s||i(n,o,"ltr")}var Wr=null;function sr(e,n,o){var i;Wr=null;for(var s=0;s<e.length;++s){var u=e[s];if(u.from<n&&u.to>n)return s;u.to==n&&(u.from!=u.to&&o=="before"?i=s:Wr=s),u.from==n&&(u.from!=u.to&&o!="before"?i=s:Wr=s)}return i??Wr}var yi=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function o(k){return k<=247?e.charAt(k):1424<=k&&k<=1524?"R":1536<=k&&k<=1785?n.charAt(k-1536):1774<=k&&k<=2220?"r":8192<=k&&k<=8203?"w":k==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,s=/[stwN]/,u=/[LRr]/,m=/[Lb1n]/,y=/[1n]/;function x(k,I,F){this.level=k,this.from=I,this.to=F}return function(k,I){var F=I=="ltr"?"L":"R";if(k.length==0||I=="ltr"&&!i.test(k))return!1;for(var te=k.length,V=[],fe=0;fe<te;++fe)V.push(o(k.charCodeAt(fe)));for(var ye=0,Pe=F;ye<te;++ye){var Ne=V[ye];Ne=="m"?V[ye]=Pe:Pe=Ne}for(var Oe=0,Re=F;Oe<te;++Oe){var Be=V[Oe];Be=="1"&&Re=="r"?V[Oe]="n":u.test(Be)&&(Re=Be,Be=="r"&&(V[Oe]="R"))}for(var st=1,Ye=V[0];st<te-1;++st){var wt=V[st];wt=="+"&&Ye=="1"&&V[st+1]=="1"?V[st]="1":wt==","&&Ye==V[st+1]&&(Ye=="1"||Ye=="n")&&(V[st]=Ye),Ye=wt}for(var Ct=0;Ct<te;++Ct){var Bn=V[Ct];if(Bn==",")V[Ct]="N";else if(Bn=="%"){var nn=void 0;for(nn=Ct+1;nn<te&&V[nn]=="%";++nn);for(var vr=Ct&&V[Ct-1]=="!"||nn<te&&V[nn]=="1"?"1":"N",rr=Ct;rr<nn;++rr)V[rr]=vr;Ct=nn-1}}for(var yn=0,xr=F;yn<te;++yn){var Tn=V[yn];xr=="L"&&Tn=="1"?V[yn]="L":u.test(Tn)&&(xr=Tn)}for(var vn=0;vn<te;++vn)if(s.test(V[vn])){var Mt=void 0;for(Mt=vn+1;Mt<te&&s.test(V[Mt]);++Mt);for(var ct=(vn?V[vn-1]:F)=="L",Dt=(Mt<te?V[Mt]:F)=="L",rn=ct==Dt?ct?"L":"R":F,an=vn;an<Mt;++an)V[an]=rn;vn=Mt-1}for(var Bt=[],br,Tt=0;Tt<te;)if(m.test(V[Tt])){var os=Tt;for(++Tt;Tt<te&&m.test(V[Tt]);++Tt);Bt.push(new x(0,os,Tt))}else{var wr=Tt,Ri=Bt.length,Ji=I=="rtl"?1:0;for(++Tt;Tt<te&&V[Tt]!="L";++Tt);for(var An=wr;An<Tt;)if(y.test(V[An])){wr<An&&(Bt.splice(Ri,0,new x(1,wr,An)),Ri+=Ji);var Un=An;for(++An;An<Tt&&y.test(V[An]);++An);Bt.splice(Ri,0,new x(2,Un,An)),Ri+=Ji,wr=An}else++An;wr<Tt&&Bt.splice(Ri,0,new x(1,wr,Tt))}return I=="ltr"&&(Bt[0].level==1&&(br=k.match(/^\s+/))&&(Bt[0].from=br[0].length,Bt.unshift(new x(0,0,br[0].length))),Ke(Bt).level==1&&(br=k.match(/\s+$/))&&(Ke(Bt).to-=br[0].length,Bt.push(new x(0,te-br[0].length,te)))),I=="rtl"?Bt.reverse():Bt}})();function gt(e,n){var o=e.order;return o==null&&(o=e.order=yi(e.text,n)),o}var Mi=[],nt=function(e,n,o){if(e.addEventListener)e.addEventListener(n,o,!1);else if(e.attachEvent)e.attachEvent("on"+n,o);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||Mi).concat(o)}};function Cr(e,n){return e._handlers&&e._handlers[n]||Mi}function Gt(e,n,o){if(e.removeEventListener)e.removeEventListener(n,o,!1);else if(e.detachEvent)e.detachEvent("on"+n,o);else{var i=e._handlers,s=i&&i[n];if(s){var u=Ge(s,o);u>-1&&(i[n]=s.slice(0,u).concat(s.slice(u+1)))}}}function At(e,n){var o=Cr(e,n);if(o.length)for(var i=Array.prototype.slice.call(arguments,2),s=0;s<o.length;++s)o[s].apply(null,i)}function Rt(e,n,o){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),At(e,o||n.type,e,n),In(n)||n.codemirrorIgnore}function En(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var o=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)Ge(o,n[i])==-1&&o.push(n[i])}function ln(e,n){return Cr(e,n).length>0}function ar(e){e.prototype.on=function(n,o){nt(this,n,o)},e.prototype.off=function(n,o){Gt(this,n,o)}}function bn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function lr(e){bn(e),ni(e)}function Hr(e){return e.target||e.srcElement}function Ln(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),se&&e.ctrlKey&&n==1&&(n=3),n}var Tr=(function(){if(_&&P<9)return!1;var e=C("div");return"draggable"in e||"dragDrop"in e})(),Qn;function ri(e){if(Qn==null){var n=C("span","​");ve(e,C("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(Qn=n.offsetWidth<=1&&n.offsetHeight>2&&!(_&&P<8))}var o=Qn?C("span","​"):C("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return o.setAttribute("cm-text",""),o}var Br;function Ur(e){if(Br!=null)return Br;var n=ve(e,document.createTextNode("AخA")),o=G(n,0,1).getBoundingClientRect(),i=G(n,1,2).getBoundingClientRect();return re(e),!o||o.left==o.right?!1:Br=i.right-o.right<3}var ur=`

b`.split(/\n/).length!=3?function(e){for(var n=0,o=[],i=e.length;n<=i;){var s=e.indexOf(`
`,n);s==-1&&(s=e.length);var u=e.slice(n,e.charAt(s-1)=="\r"?s-1:s),m=u.indexOf("\r");m!=-1?(o.push(u.slice(0,m)),n+=m+1):(o.push(u),n=s+1)}return o}:function(e){return e.split(/\r\n?|\n/)},qr=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},Po=(function(){var e=C("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),wn=null;function hs(e){if(wn!=null)return wn;var n=ve(e,C("span","x")),o=n.getBoundingClientRect(),i=G(n,0,1).getBoundingClientRect();return wn=Math.abs(o.left-i.left)>1}var Ar={},Rr={};function Nr(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Ar[e]=n}function Ft(e,n){Rr[e]=n}function Er(e){if(typeof e=="string"&&Rr.hasOwnProperty(e))e=Rr[e];else if(e&&typeof e.name=="string"&&Rr.hasOwnProperty(e.name)){var n=Rr[e.name];typeof n=="string"&&(n={name:n}),e=me(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Er("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Er("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Di(e,n){n=Er(n);var o=Ar[n.name];if(!o)return Di(e,"text/plain");var i=o(e,n);if(ii.hasOwnProperty(n.name)){var s=ii[n.name];for(var u in s)s.hasOwnProperty(u)&&(i.hasOwnProperty(u)&&(i["_"+u]=i[u]),i[u]=s[u])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var ii={};function vi(e,n){var o=ii.hasOwnProperty(e)?ii[e]:ii[e]={};Fe(n,o)}function Pt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var o={};for(var i in n){var s=n[i];s instanceof Array&&(s=s.concat([])),o[i]=s}return o}function ro(e,n){for(var o;e.innerMode&&(o=e.innerMode(n),!(!o||o.mode==e));)n=o.state,e=o.mode;return o||{mode:e,state:n}}function xi(e,n,o){return e.startState?e.startState(n,o):!0}var Yt=function(e,n,o){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=o};Yt.prototype.eol=function(){return this.pos>=this.string.length},Yt.prototype.sol=function(){return this.pos==this.lineStart},Yt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Yt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Yt.prototype.eat=function(e){var n=this.string.charAt(this.pos),o;if(typeof e=="string"?o=n==e:o=n&&(e.test?e.test(n):e(n)),o)return++this.pos,n},Yt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Yt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Yt.prototype.skipToEnd=function(){this.pos=this.string.length},Yt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Yt.prototype.backUp=function(e){this.pos-=e},Yt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=He(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?He(this.string,this.lineStart,this.tabSize):0)},Yt.prototype.indentation=function(){return He(this.string,null,this.tabSize)-(this.lineStart?He(this.string,this.lineStart,this.tabSize):0)},Yt.prototype.match=function(e,n,o){if(typeof e=="string"){var i=function(m){return o?m.toLowerCase():m},s=this.string.substr(this.pos,e.length);if(i(s)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var u=this.string.slice(this.pos).match(e);return u&&u.index>0?null:(u&&n!==!1&&(this.pos+=u[0].length),u)}},Yt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Yt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Yt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Yt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Xe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var o=e;!o.lines;)for(var i=0;;++i){var s=o.children[i],u=s.chunkSize();if(n<u){o=s;break}n-=u}return o.lines[n]}function oi(e,n,o){var i=[],s=n.line;return e.iter(n.line,o.line+1,function(u){var m=u.text;s==o.line&&(m=m.slice(0,o.ch)),s==n.line&&(m=m.slice(n.ch)),i.push(m),++s}),i}function cr(e,n,o){var i=[];return e.iter(n,o,function(s){i.push(s.text)}),i}function On(e,n){var o=n-e.height;if(o)for(var i=e;i;i=i.parent)i.height+=o}function S(e){if(e.parent==null)return null;for(var n=e.parent,o=Ge(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var s=0;i.children[s]!=n;++s)o+=i.children[s].chunkSize();return o+n.first}function z(e,n){var o=e.first;e:do{for(var i=0;i<e.children.length;++i){var s=e.children[i],u=s.height;if(n<u){e=s;continue e}n-=u,o+=s.chunkSize()}return o}while(!e.lines);for(var m=0;m<e.lines.length;++m){var y=e.lines[m],x=y.height;if(n<x)break;n-=x}return o+m}function he(e,n){return n>=e.first&&n<e.first+e.size}function Te(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,o){if(o===void 0&&(o=null),!(this instanceof de))return new de(e,n,o);this.line=e,this.ch=n,this.sticky=o}function ze(e,n){return e.line-n.line||e.ch-n.ch}function _t(e,n){return e.sticky==n.sticky&&ze(e,n)==0}function Jt(e){return de(e.line,e.ch)}function kn(e,n){return ze(e,n)<0?n:e}function si(e,n){return ze(e,n)<0?e:n}function Ya(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function ft(e,n){if(n.line<e.first)return de(e.first,0);var o=e.first+e.size-1;return n.line>o?de(o,Xe(e,o).text.length):fs(n,Xe(e,n.line).text.length)}function fs(e,n){var o=e.ch;return o==null||o>n?de(e.line,n):o<0?de(e.line,0):e}function Zs(e,n){for(var o=[],i=0;i<n.length;i++)o[i]=ft(e,n[i]);return o}var zi=function(e,n){this.state=e,this.lookAhead=n},Kn=function(e,n,o,i){this.state=n,this.doc=e,this.line=o,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};Kn.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},Kn.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},Kn.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},Kn.fromSaved=function(e,n,o){return n instanceof zi?new Kn(e,Pt(e.mode,n.state),o,n.lookAhead):new Kn(e,Pt(e.mode,n),o)},Kn.prototype.save=function(e){var n=e!==!1?Pt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new zi(n,this.maxLookAhead):n};function jo(e,n,o,i){var s=[e.state.modeGen],u={};ms(e,n.text,e.doc.mode,o,function(k,I){return s.push(k,I)},u,i);for(var m=o.state,y=function(k){o.baseTokens=s;var I=e.state.overlays[k],F=1,te=0;o.state=!0,ms(e,n.text,I.mode,o,function(V,fe){for(var ye=F;te<V;){var Pe=s[F];Pe>V&&s.splice(F,1,V,s[F+1],Pe),F+=2,te=Math.min(V,Pe)}if(fe)if(I.opaque)s.splice(ye,F-ye,V,"overlay "+fe),F=ye+2;else for(;ye<F;ye+=2){var Ne=s[ye+1];s[ye+1]=(Ne?Ne+" ":"")+"overlay "+fe}},u),o.state=m,o.baseTokens=null,o.baseTokenPos=1},x=0;x<e.state.overlays.length;++x)y(x);return{styles:s,classes:u.bgClass||u.textClass?u:null}}function io(e,n,o){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,S(n)),s=n.text.length>e.options.maxHighlightLength&&Pt(e.doc.mode,i.state),u=jo(e,n,i);s&&(i.state=s),n.stateAfter=i.save(!s),n.styles=u.styles,u.classes?n.styleClasses=u.classes:n.styleClasses&&(n.styleClasses=null),o===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,o){var i=e.doc,s=e.display;if(!i.mode.startState)return new Kn(i,!0,n);var u=Ao(e,n,o),m=u>i.first&&Xe(i,u-1).stateAfter,y=m?Kn.fromSaved(i,m,u):new Kn(i,xi(i.mode),u);return i.iter(u,n,function(x){Fi(e,x.text,y);var k=y.line;x.stateAfter=k==n-1||k%5==0||k>=s.viewFrom&&k<s.viewTo?y.save():null,y.nextLine()}),o&&(i.modeFrontier=y.line),y}function Fi(e,n,o,i){var s=e.doc.mode,u=new Yt(n,e.options.tabSize,o);for(u.start=u.pos=i||0,n==""&&Kr(s,o.state);!u.eol();)ai(s,u,o.state),u.start=u.pos}function Kr(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var o=ro(e,n);if(o.mode.blankLine)return o.mode.blankLine(o.state)}}function ai(e,n,o,i){for(var s=0;s<10;s++){i&&(i[0]=ro(e,o).mode);var u=e.token(n,o);if(n.pos>n.start)return u}throw new Error("Mode "+e.name+" failed to advance stream.")}var dr=function(e,n,o){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=o};function Js(e,n,o,i){var s=e.doc,u=s.mode,m;n=ft(s,n);var y=Xe(s,n.line),x=Nt(e,n.line,o),k=new Yt(y.text,e.options.tabSize,x),I;for(i&&(I=[]);(i||k.pos<n.ch)&&!k.eol();)k.start=k.pos,m=ai(u,k,x.state),i&&I.push(new dr(k,m,Pt(s.mode,x.state)));return i?I:new dr(k,m,x.state)}function oo(e,n){if(e)for(;;){var o=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!o)break;e=e.slice(0,o.index)+e.slice(o.index+o[0].length);var i=o[1]?"bgClass":"textClass";n[i]==null?n[i]=o[2]:new RegExp("(?:^|\\s)"+o[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+o[2])}return e}function ms(e,n,o,i,s,u,m){var y=o.flattenSpans;y==null&&(y=e.options.flattenSpans);var x=0,k=null,I=new Yt(n,e.options.tabSize,i),F,te=e.options.addModeClass&&[null];for(n==""&&oo(Kr(o,i.state),u);!I.eol();){if(I.pos>e.options.maxHighlightLength?(y=!1,m&&Fi(e,n,i,I.pos),I.pos=n.length,F=null):F=oo(ai(o,I,i.state,te),u),te){var V=te[0].name;V&&(F="m-"+(F?V+" "+F:V))}if(!y||k!=F){for(;x<I.start;)x=Math.min(I.start,x+5e3),s(x,k);k=F}I.start=I.pos}for(;x<I.pos;){var fe=Math.min(I.pos,x+5e3);s(fe,k),x=fe}}function Ao(e,n,o){for(var i,s,u=e.doc,m=o?-1:n-(e.doc.mode.innerMode?1e3:100),y=n;y>m;--y){if(y<=u.first)return u.first;var x=Xe(u,y-1),k=x.stateAfter;if(k&&(!o||y+(k instanceof zi?k.lookAhead:0)<=u.modeFrontier))return y;var I=He(x.text,null,e.options.tabSize);(s==null||i>I)&&(s=y-1,i=I)}return s}function pr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var o=e.first,i=n-1;i>o;i--){var s=Xe(e,i).stateAfter;if(s&&(!(s instanceof zi)||i+s.lookAhead<n)){o=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,o)}}var Ir=!1,Mn=!1;function Ro(){Ir=!0}function so(){Mn=!0}function Or(e,n,o){this.marker=e,this.from=n,this.to=o}function Io(e,n){if(e)for(var o=0;o<e.length;++o){var i=e[o];if(i.marker==n)return i}}function ea(e,n){for(var o,i=0;i<e.length;++i)e[i]!=n&&(o||(o=[])).push(e[i]);return o}function Wi(e,n,o){var i=o&&window.WeakSet&&(o.markedSpans||(o.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Oo(e,n,o){var i;if(e)for(var s=0;s<e.length;++s){var u=e[s],m=u.marker,y=u.from==null||(m.inclusiveLeft?u.from<=n:u.from<n);if(y||u.from==n&&m.type=="bookmark"&&(!o||!u.marker.insertLeft)){var x=u.to==null||(m.inclusiveRight?u.to>=n:u.to>n);(i||(i=[])).push(new Or(m,u.from,x?null:u.to))}}return i}function gs(e,n,o){var i;if(e)for(var s=0;s<e.length;++s){var u=e[s],m=u.marker,y=u.to==null||(m.inclusiveRight?u.to>=n:u.to>n);if(y||u.from==n&&m.type=="bookmark"&&(!o||u.marker.insertLeft)){var x=u.from==null||(m.inclusiveLeft?u.from<=n:u.from<n);(i||(i=[])).push(new Or(m,x?null:u.from-n,u.to==null?null:u.to-n))}}return i}function ke(e,n){if(n.full)return null;var o=he(e,n.from.line)&&Xe(e,n.from.line).markedSpans,i=he(e,n.to.line)&&Xe(e,n.to.line).markedSpans;if(!o&&!i)return null;var s=n.from.ch,u=n.to.ch,m=ze(n.from,n.to)==0,y=Oo(o,s,m),x=gs(i,u,m),k=n.text.length==1,I=Ke(n.text).length+(k?s:0);if(y)for(var F=0;F<y.length;++F){var te=y[F];if(te.to==null){var V=Io(x,te.marker);V?k&&(te.to=V.to==null?null:V.to+I):te.to=s}}if(x)for(var fe=0;fe<x.length;++fe){var ye=x[fe];if(ye.to!=null&&(ye.to+=I),ye.from==null){var Pe=Io(y,ye.marker);Pe||(ye.from=I,k&&(y||(y=[])).push(ye))}else ye.from+=I,k&&(y||(y=[])).push(ye)}y&&(y=j(y)),x&&x!=y&&(x=j(x));var Ne=[y];if(!k){var Oe=n.text.length-2,Re;if(Oe>0&&y)for(var Be=0;Be<y.length;++Be)y[Be].to==null&&(Re||(Re=[])).push(new Or(y[Be].marker,null,null));for(var st=0;st<Oe;++st)Ne.push(Re);Ne.push(x)}return Ne}function j(e){for(var n=0;n<e.length;++n){var o=e[n];o.from!=null&&o.from==o.to&&o.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function Z(e,n,o){var i=null;if(e.iter(n.line,o.line+1,function(V){if(V.markedSpans)for(var fe=0;fe<V.markedSpans.length;++fe){var ye=V.markedSpans[fe].marker;ye.readOnly&&(!i||Ge(i,ye)==-1)&&(i||(i=[])).push(ye)}}),!i)return null;for(var s=[{from:n,to:o}],u=0;u<i.length;++u)for(var m=i[u],y=m.find(0),x=0;x<s.length;++x){var k=s[x];if(!(ze(k.to,y.from)<0||ze(k.from,y.to)>0)){var I=[x,1],F=ze(k.from,y.from),te=ze(k.to,y.to);(F<0||!m.inclusiveLeft&&!F)&&I.push({from:k.from,to:y.from}),(te>0||!m.inclusiveRight&&!te)&&I.push({from:y.to,to:k.to}),s.splice.apply(s,I),x+=I.length-3}}return s}function xe(e){var n=e.markedSpans;if(n){for(var o=0;o<n.length;++o)n[o].marker.detachLine(e);e.markedSpans=null}}function be(e,n){if(n){for(var o=0;o<n.length;++o)n[o].marker.attachLine(e);e.markedSpans=n}}function Ze(e){return e.inclusiveLeft?-1:0}function ut(e){return e.inclusiveRight?1:0}function kt(e,n){var o=e.lines.length-n.lines.length;if(o!=0)return o;var i=e.find(),s=n.find(),u=ze(i.from,s.from)||Ze(e)-Ze(n);if(u)return-u;var m=ze(i.to,s.to)||ut(e)-ut(n);return m||n.id-e.id}function mn(e,n){var o=Mn&&e.markedSpans,i;if(o)for(var s=void 0,u=0;u<o.length;++u)s=o[u],s.marker.collapsed&&(n?s.from:s.to)==null&&(!i||kt(i,s.marker)<0)&&(i=s.marker);return i}function hr(e){return mn(e,!0)}function un(e){return mn(e,!1)}function $n(e,n){var o=Mn&&e.markedSpans,i;if(o)for(var s=0;s<o.length;++s){var u=o[s];u.marker.collapsed&&(u.from==null||u.from<n)&&(u.to==null||u.to>n)&&(!i||kt(i,u.marker)<0)&&(i=u.marker)}return i}function bi(e,n,o,i,s){var u=Xe(e,n),m=Mn&&u.markedSpans;if(m)for(var y=0;y<m.length;++y){var x=m[y];if(x.marker.collapsed){var k=x.marker.find(0),I=ze(k.from,o)||Ze(x.marker)-Ze(s),F=ze(k.to,i)||ut(x.marker)-ut(s);if(!(I>=0&&F<=0||I<=0&&F>=0)&&(I<=0&&(x.marker.inclusiveRight&&s.inclusiveLeft?ze(k.to,o)>=0:ze(k.to,o)>0)||I>=0&&(x.marker.inclusiveRight&&s.inclusiveLeft?ze(k.from,i)<=0:ze(k.from,i)<0)))return!0}}}function jt(e){for(var n;n=hr(e);)e=n.find(-1,!0).line;return e}function ys(e){for(var n;n=un(e);)e=n.find(1,!0).line;return e}function Va(e){for(var n,o;n=un(e);)e=n.find(1,!0).line,(o||(o=[])).push(e);return o}function Xa(e,n){var o=Xe(e,n),i=jt(o);return o==i?n:S(i)}function ta(e,n){if(n>e.lastLine())return n;var o=Xe(e,n),i;if(!li(e,o))return n;for(;i=un(o);)o=i.find(1,!0).line;return S(o)+1}function li(e,n){var o=Mn&&n.markedSpans;if(o){for(var i=void 0,s=0;s<o.length;++s)if(i=o[s],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&Qa(e,n,i))return!0}}}function Qa(e,n,o){if(o.to==null){var i=o.marker.find(1,!0);return Qa(e,i.line,Io(i.line.markedSpans,o.marker))}if(o.marker.inclusiveRight&&o.to==n.text.length)return!0;for(var s=void 0,u=0;u<n.markedSpans.length;++u)if(s=n.markedSpans[u],s.marker.collapsed&&!s.marker.widgetNode&&s.from==o.to&&(s.to==null||s.to!=o.from)&&(s.marker.inclusiveLeft||o.marker.inclusiveRight)&&Qa(e,n,s))return!0}function Sn(e){e=jt(e);for(var n=0,o=e.parent,i=0;i<o.lines.length;++i){var s=o.lines[i];if(s==e)break;n+=s.height}for(var u=o.parent;u;o=u,u=o.parent)for(var m=0;m<u.children.length;++m){var y=u.children[m];if(y==o)break;n+=y.height}return n}function Hi(e){if(e.height==0)return 0;for(var n=e.text.length,o,i=e;o=hr(i);){var s=o.find(0,!0);i=s.from.line,n+=s.from.ch-s.to.ch}for(i=e;o=un(i);){var u=o.find(0,!0);n-=i.text.length-u.from.ch,i=u.to.line,n+=i.text.length-u.to.ch}return n}function na(e){var n=e.display,o=e.doc;n.maxLine=Xe(o,o.first),n.maxLineLength=Hi(n.maxLine),n.maxLineChanged=!0,o.iter(function(i){var s=Hi(i);s>n.maxLineLength&&(n.maxLineLength=s,n.maxLine=i)})}var wi=function(e,n,o){this.text=e,be(this,n),this.height=o?o(this):1};wi.prototype.lineNo=function(){return S(this)},ar(wi);function Cd(e,n,o,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),xe(e),be(e,o);var s=i?i(e):1;s!=e.height&&On(e,s)}function Ul(e){e.parent=null,xe(e)}var ql={},ra={};function ia(e,n){if(!e||/^\s*$/.test(e))return null;var o=n.addModeClass?ra:ql;return o[e]||(o[e]=e.replace(/\S+/g,"cm-$&"))}function Kl(e,n){var o=Q("span",null,null,A?"padding-right: .1px":null),i={pre:Q("pre",[o],"CodeMirror-line"),content:o,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var s=0;s<=(n.rest?n.rest.length:0);s++){var u=s?n.rest[s-1]:n.line,m=void 0;i.pos=0,i.addToken=Nd,Ur(e.display.measure)&&(m=gt(u,e.doc.direction))&&(i.addToken=$l(i.addToken,m)),i.map=[];var y=n!=e.display.externalMeasured&&S(u);Ld(u,i,io(e,u,y)),u.styleClasses&&(u.styleClasses.bgClass&&(i.bgClass=W(u.styleClasses.bgClass,i.bgClass||"")),u.styleClasses.textClass&&(i.textClass=W(u.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(ri(e.display.measure))),s==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(A){var x=i.content.lastChild;(/\bcm-tab\b/.test(x.className)||x.querySelector&&x.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return At(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=W(i.pre.className,i.textClass||"")),i}function Td(e){var n=C("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Nd(e,n,o,i,s,u,m){if(n){var y=e.splitSpaces?Ed(n,e.trailingSpace):n,x=e.cm.state.specialChars,k=!1,I;if(!x.test(n))e.col+=n.length,I=document.createTextNode(y),e.map.push(e.pos,e.pos+n.length,I),_&&P<9&&(k=!0),e.pos+=n.length;else{I=document.createDocumentFragment();for(var F=0;;){x.lastIndex=F;var te=x.exec(n),V=te?te.index-F:n.length-F;if(V){var fe=document.createTextNode(y.slice(F,F+V));_&&P<9?I.appendChild(C("span",[fe])):I.appendChild(fe),e.map.push(e.pos,e.pos+V,fe),e.col+=V,e.pos+=V}if(!te)break;F+=V+1;var ye=void 0;if(te[0]=="	"){var Pe=e.cm.options.tabSize,Ne=Pe-e.col%Pe;ye=I.appendChild(C("span",Zt(Ne),"cm-tab")),ye.setAttribute("role","presentation"),ye.setAttribute("cm-text","	"),e.col+=Ne}else te[0]=="\r"||te[0]==`
`?(ye=I.appendChild(C("span",te[0]=="\r"?"␍":"␤","cm-invalidchar")),ye.setAttribute("cm-text",te[0]),e.col+=1):(ye=e.cm.options.specialCharPlaceholder(te[0]),ye.setAttribute("cm-text",te[0]),_&&P<9?I.appendChild(C("span",[ye])):I.appendChild(ye),e.col+=1);e.map.push(e.pos,e.pos+1,ye),e.pos++}}if(e.trailingSpace=y.charCodeAt(n.length-1)==32,o||i||s||k||u||m){var Oe=o||"";i&&(Oe+=i),s&&(Oe+=s);var Re=C("span",[I],Oe,u);if(m)for(var Be in m)m.hasOwnProperty(Be)&&Be!="style"&&Be!="class"&&Re.setAttribute(Be,m[Be]);return e.content.appendChild(Re)}e.content.appendChild(I)}}function Ed(e,n){if(e.length>1&&!/  /.test(e))return e;for(var o=n,i="",s=0;s<e.length;s++){var u=e.charAt(s);u==" "&&o&&(s==e.length-1||e.charCodeAt(s+1)==32)&&(u=" "),i+=u,o=u==" "}return i}function $l(e,n){return function(o,i,s,u,m,y,x){s=s?s+" cm-force-border":"cm-force-border";for(var k=o.pos,I=k+i.length;;){for(var F=void 0,te=0;te<n.length&&(F=n[te],!(F.to>k&&F.from<=k));te++);if(F.to>=I)return e(o,i,s,u,m,y,x);e(o,i.slice(0,F.to-k),s,u,null,y,x),u=null,i=i.slice(F.to-k),k=F.to}}}function nc(e,n,o,i){var s=!i&&o.widgetNode;s&&e.map.push(e.pos,e.pos+n,s),!i&&e.cm.display.input.needsContentAttribute&&(s||(s=e.content.appendChild(document.createElement("span"))),s.setAttribute("cm-marker",o.id)),s&&(e.cm.display.input.setUneditable(s),e.content.appendChild(s)),e.pos+=n,e.trailingSpace=!1}function Ld(e,n,o){var i=e.markedSpans,s=e.text,u=0;if(!i){for(var m=1;m<o.length;m+=2)n.addToken(n,s.slice(u,u=o[m]),ia(o[m+1],n.cm.options));return}for(var y=s.length,x=0,k=1,I="",F,te,V=0,fe,ye,Pe,Ne,Oe;;){if(V==x){fe=ye=Pe=te="",Oe=null,Ne=null,V=1/0;for(var Re=[],Be=void 0,st=0;st<i.length;++st){var Ye=i[st],wt=Ye.marker;if(wt.type=="bookmark"&&Ye.from==x&&wt.widgetNode)Re.push(wt);else if(Ye.from<=x&&(Ye.to==null||Ye.to>x||wt.collapsed&&Ye.to==x&&Ye.from==x)){if(Ye.to!=null&&Ye.to!=x&&V>Ye.to&&(V=Ye.to,ye=""),wt.className&&(fe+=" "+wt.className),wt.css&&(te=(te?te+";":"")+wt.css),wt.startStyle&&Ye.from==x&&(Pe+=" "+wt.startStyle),wt.endStyle&&Ye.to==V&&(Be||(Be=[])).push(wt.endStyle,Ye.to),wt.title&&((Oe||(Oe={})).title=wt.title),wt.attributes)for(var Ct in wt.attributes)(Oe||(Oe={}))[Ct]=wt.attributes[Ct];wt.collapsed&&(!Ne||kt(Ne.marker,wt)<0)&&(Ne=Ye)}else Ye.from>x&&V>Ye.from&&(V=Ye.from)}if(Be)for(var Bn=0;Bn<Be.length;Bn+=2)Be[Bn+1]==V&&(ye+=" "+Be[Bn]);if(!Ne||Ne.from==x)for(var nn=0;nn<Re.length;++nn)nc(n,0,Re[nn]);if(Ne&&(Ne.from||0)==x){if(nc(n,(Ne.to==null?y+1:Ne.to)-x,Ne.marker,Ne.from==null),Ne.to==null)return;Ne.to==x&&(Ne=!1)}}if(x>=y)break;for(var vr=Math.min(y,V);;){if(I){var rr=x+I.length;if(!Ne){var yn=rr>vr?I.slice(0,vr-x):I;n.addToken(n,yn,F?F+fe:fe,Pe,x+yn.length==V?ye:"",te,Oe)}if(rr>=vr){I=I.slice(vr-x),x=vr;break}x=rr,Pe=""}I=s.slice(u,u=o[k++]),F=ia(o[k++],n.cm.options)}}}function rc(e,n,o){this.line=n,this.rest=Va(n),this.size=this.rest?S(Ke(this.rest))-o+1:1,this.node=this.text=null,this.hidden=li(e,n)}function Za(e,n,o){for(var i=[],s,u=n;u<o;u=s){var m=new rc(e.doc,Xe(e.doc,u),u);s=u+m.size,i.push(m)}return i}var vs=null;function ic(e){vs?vs.ops.push(e):e.ownsGroup=vs={ops:[e],delayedCallbacks:[]}}function Pd(e){var n=e.delayedCallbacks,o=0;do{for(;o<n.length;o++)n[o].call(null);for(var i=0;i<e.ops.length;i++){var s=e.ops[i];if(s.cursorActivityHandlers)for(;s.cursorActivityCalled<s.cursorActivityHandlers.length;)s.cursorActivityHandlers[s.cursorActivityCalled++].call(null,s.cm)}}while(o<n.length)}function jd(e,n){var o=e.ownsGroup;if(o)try{Pd(o)}finally{vs=null,n(o)}}var oa=null;function Dn(e,n){var o=Cr(e,n);if(o.length){var i=Array.prototype.slice.call(arguments,2),s;vs?s=vs.delayedCallbacks:oa?s=oa:(s=oa=[],setTimeout(Gl,0));for(var u=function(y){s.push(function(){return o[y].apply(null,i)})},m=0;m<o.length;++m)u(m)}}function Gl(){var e=oa;oa=null;for(var n=0;n<e.length;++n)e[n]()}function oc(e,n,o,i){for(var s=0;s<n.changes.length;s++){var u=n.changes[s];u=="text"?Rd(e,n):u=="gutter"?sc(e,n,o,i):u=="class"?Vl(e,n):u=="widget"&&Id(e,n,i)}n.changes=null}function sa(e){return e.node==e.text&&(e.node=C("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),_&&P<8&&(e.node.style.zIndex=2)),e.node}function Ad(e,n){var o=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(o&&(o+=" CodeMirror-linebackground"),n.background)o?n.background.className=o:(n.background.parentNode.removeChild(n.background),n.background=null);else if(o){var i=sa(n);n.background=i.insertBefore(C("div",null,o),i.firstChild),e.display.input.setUneditable(n.background)}}function Yl(e,n){var o=e.display.externalMeasured;return o&&o.line==n.line?(e.display.externalMeasured=null,n.measure=o.measure,o.built):Kl(e,n)}function Rd(e,n){var o=n.text.className,i=Yl(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,Vl(e,n)):o&&(n.text.className=o)}function Vl(e,n){Ad(e,n),n.line.wrapClass?sa(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var o=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=o||""}function sc(e,n,o,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var s=sa(n);n.gutterBackground=C("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),s.insertBefore(n.gutterBackground,n.text)}var u=n.line.gutterMarkers;if(e.options.lineNumbers||u){var m=sa(n),y=n.gutter=C("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(y.setAttribute("aria-hidden","true"),e.display.input.setUneditable(y),m.insertBefore(y,n.text),n.line.gutterClass&&(y.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!u||!u["CodeMirror-linenumbers"])&&(n.lineNumber=y.appendChild(C("div",Te(e.options,o),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),u)for(var x=0;x<e.display.gutterSpecs.length;++x){var k=e.display.gutterSpecs[x].className,I=u.hasOwnProperty(k)&&u[k];I&&y.appendChild(C("div",[I],"CodeMirror-gutter-elt","left: "+i.gutterLeft[k]+"px; width: "+i.gutterWidth[k]+"px"))}}}function Id(e,n,o){n.alignable&&(n.alignable=null);for(var i=q("CodeMirror-linewidget"),s=n.node.firstChild,u=void 0;s;s=u)u=s.nextSibling,i.test(s.className)&&n.node.removeChild(s);ac(e,n,o)}function Od(e,n,o,i){var s=Yl(e,n);return n.text=n.node=s.pre,s.bgClass&&(n.bgClass=s.bgClass),s.textClass&&(n.textClass=s.textClass),Vl(e,n),sc(e,n,o,i),ac(e,n,i),n.node}function ac(e,n,o){if(lc(e,n.line,n,o,!0),n.rest)for(var i=0;i<n.rest.length;i++)lc(e,n.rest[i],n,o,!1)}function lc(e,n,o,i,s){if(n.widgets)for(var u=sa(o),m=0,y=n.widgets;m<y.length;++m){var x=y[m],k=C("div",[x.node],"CodeMirror-linewidget"+(x.className?" "+x.className:""));x.handleMouseEvents||k.setAttribute("cm-ignore-events","true"),Xl(x,k,o,i),e.display.input.setUneditable(k),s&&x.above?u.insertBefore(k,o.gutter||o.text):u.appendChild(k),Dn(x,"redraw")}}function Xl(e,n,o,i){if(e.noHScroll){(o.alignable||(o.alignable=[])).push(n);var s=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(s-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=s+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Bi(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!N(document.body,e.node)){var o="position: relative;";e.coverGutter&&(o+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(o+="width: "+n.display.wrapper.clientWidth+"px;"),ve(n.display.measure,C("div",[e.node],null,o))}return e.height=e.node.parentNode.offsetHeight}function Ui(e,n){for(var o=Hr(n);o!=e.wrapper;o=o.parentNode)if(!o||o.nodeType==1&&o.getAttribute("cm-ignore-events")=="true"||o.parentNode==e.sizer&&o!=e.mover)return!0}function aa(e){return e.lineSpace.offsetTop}function Ja(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Ql(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ve(e.measure,C("pre","x","CodeMirror-line-like")),o=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(o.paddingLeft),right:parseInt(o.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ui(e){return qt-e.display.nativeBarWidth}function ao(e){return e.display.scroller.clientWidth-ui(e)-e.display.barWidth}function lo(e){return e.display.scroller.clientHeight-ui(e)-e.display.barHeight}function Md(e,n,o){var i=e.options.lineWrapping,s=i&&ao(e);if(!n.measure.heights||i&&n.measure.width!=s){var u=n.measure.heights=[];if(i){n.measure.width=s;for(var m=n.text.firstChild.getClientRects(),y=0;y<m.length-1;y++){var x=m[y],k=m[y+1];Math.abs(x.bottom-k.bottom)>2&&u.push((x.bottom+k.top)/2-o.top)}}u.push(o.bottom-o.top)}}function uc(e,n,o){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var s=0;s<e.rest.length;s++)if(S(e.rest[s])>o)return{map:e.measure.maps[s],cache:e.measure.caches[s],before:!0}}}function Dd(e,n){n=jt(n);var o=S(n),i=e.display.externalMeasured=new rc(e.doc,n,o);i.lineN=o;var s=i.built=Kl(e,i);return i.text=s.pre,ve(e.display.lineMeasure,s.pre),i}function Zl(e,n,o,i){return Lr(e,ki(e,n),o,i)}function el(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size)return o}function ki(e,n){var o=S(n),i=el(e,o);i&&!i.text?i=null:i&&i.changes&&(oc(e,i,o,sl(e)),e.curOp.forceUpdate=!0),i||(i=Dd(e,n));var s=uc(i,n,o);return{line:n,view:i,rect:null,map:s.map,cache:s.cache,before:s.before,hasHeights:!1}}function Lr(e,n,o,i,s){n.before&&(o=-1);var u=o+(i||""),m;return n.cache.hasOwnProperty(u)?m=n.cache[u]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(Md(e,n.view,n.rect),n.hasHeights=!0),m=dc(e,n,o,i),m.bogus||(n.cache[u]=m)),{left:m.left,right:m.right,top:s?m.rtop:m.top,bottom:s?m.rbottom:m.bottom}}var cc={left:0,right:0,top:0,bottom:0};function la(e,n,o){for(var i,s,u,m,y,x,k=0;k<e.length;k+=3)if(y=e[k],x=e[k+1],n<y?(s=0,u=1,m="left"):n<x?(s=n-y,u=s+1):(k==e.length-3||n==x&&e[k+3]>n)&&(u=x-y,s=u-1,n>=x&&(m="right")),s!=null){if(i=e[k+2],y==x&&o==(i.insertLeft?"left":"right")&&(m=o),o=="left"&&s==0)for(;k&&e[k-2]==e[k-3]&&e[k-1].insertLeft;)i=e[(k-=3)+2],m="left";if(o=="right"&&s==x-y)for(;k<e.length-3&&e[k+3]==e[k+4]&&!e[k+5].insertLeft;)i=e[(k+=3)+2],m="right";break}return{node:i,start:s,end:u,collapse:m,coverStart:y,coverEnd:x}}function zd(e,n){var o=cc;if(n=="left")for(var i=0;i<e.length&&(o=e[i]).left==o.right;i++);else for(var s=e.length-1;s>=0&&(o=e[s]).left==o.right;s--);return o}function dc(e,n,o,i){var s=la(n.map,o,i),u=s.node,m=s.start,y=s.end,x=s.collapse,k;if(u.nodeType==3){for(var I=0;I<4;I++){for(;m&&dt(n.line.text.charAt(s.coverStart+m));)--m;for(;s.coverStart+y<s.coverEnd&&dt(n.line.text.charAt(s.coverStart+y));)++y;if(_&&P<9&&m==0&&y==s.coverEnd-s.coverStart?k=u.parentNode.getBoundingClientRect():k=zd(G(u,m,y).getClientRects(),i),k.left||k.right||m==0)break;y=m,m=m-1,x="right"}_&&P<11&&(k=Jl(e.display.measure,k))}else{m>0&&(x=i="right");var F;e.options.lineWrapping&&(F=u.getClientRects()).length>1?k=F[i=="right"?F.length-1:0]:k=u.getBoundingClientRect()}if(_&&P<9&&!m&&(!k||!k.left&&!k.right)){var te=u.parentNode.getClientRects()[0];te?k={left:te.left,right:te.left+uo(e.display),top:te.top,bottom:te.bottom}:k=cc}for(var V=k.top-n.rect.top,fe=k.bottom-n.rect.top,ye=(V+fe)/2,Pe=n.view.measure.heights,Ne=0;Ne<Pe.length-1&&!(ye<Pe[Ne]);Ne++);var Oe=Ne?Pe[Ne-1]:0,Re=Pe[Ne],Be={left:(x=="right"?k.right:k.left)-n.rect.left,right:(x=="left"?k.left:k.right)-n.rect.left,top:Oe,bottom:Re};return!k.left&&!k.right&&(Be.bogus=!0),e.options.singleCursorHeightPerLine||(Be.rtop=V,Be.rbottom=fe),Be}function Jl(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!hs(e))return n;var o=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*o,right:n.right*o,top:n.top*i,bottom:n.bottom*i}}function tl(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function eu(e){e.display.externalMeasure=null,re(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)tl(e.display.view[n])}function xs(e){eu(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function tu(e){return R&&U?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function pc(e){return R&&U?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function nu(e){var n=jt(e),o=n.widgets,i=0;if(o)for(var s=0;s<o.length;++s)o[s].above&&(i+=Bi(o[s]));return i}function nl(e,n,o,i,s){if(!s){var u=nu(n);o.top+=u,o.bottom+=u}if(i=="line")return o;i||(i="local");var m=Sn(n);if(i=="local"?m+=aa(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var y=e.display.lineSpace.getBoundingClientRect();m+=y.top+(i=="window"?0:pc(De(e)));var x=y.left+(i=="window"?0:tu(De(e)));o.left+=x,o.right+=x}return o.top+=m,o.bottom+=m,o}function hc(e,n,o){if(o=="div")return n;var i=n.left,s=n.top;if(o=="page")i-=tu(De(e)),s-=pc(De(e));else if(o=="local"||!o){var u=e.display.sizer.getBoundingClientRect();i+=u.left,s+=u.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:s-m.top}}function rl(e,n,o,i,s){return i||(i=Xe(e.doc,n.line)),nl(e,i,Zl(e,i,n.ch,s),o)}function _n(e,n,o,i,s,u){i=i||Xe(e.doc,n.line),s||(s=ki(e,i));function m(fe,ye){var Pe=Lr(e,s,fe,ye?"right":"left",u);return ye?Pe.left=Pe.right:Pe.right=Pe.left,nl(e,i,Pe,o)}var y=gt(i,e.doc.direction),x=n.ch,k=n.sticky;if(x>=i.text.length?(x=i.text.length,k="before"):x<=0&&(x=0,k="after"),!y)return m(k=="before"?x-1:x,k=="before");function I(fe,ye,Pe){var Ne=y[ye],Oe=Ne.level==1;return m(Pe?fe-1:fe,Oe!=Pe)}var F=sr(y,x,k),te=Wr,V=I(x,F,k=="before");return te!=null&&(V.other=I(x,te,k!="before")),V}function bs(e,n){var o=0;n=ft(e.doc,n),e.options.lineWrapping||(o=uo(e.display)*n.ch);var i=Xe(e.doc,n.line),s=Sn(i)+aa(e.display);return{left:o,right:o,top:s,bottom:s+i.height}}function il(e,n,o,i,s){var u=de(e,n,o);return u.xRel=s,i&&(u.outside=i),u}function ol(e,n,o){var i=e.doc;if(o+=e.display.viewOffset,o<0)return il(i.first,0,null,-1,-1);var s=z(i,o),u=i.first+i.size-1;if(s>u)return il(i.first+i.size-1,Xe(i,u).text.length,null,1,1);n<0&&(n=0);for(var m=Xe(i,s);;){var y=Fd(e,m,s,n,o),x=$n(m,y.ch+(y.xRel>0||y.outside>0?1:0));if(!x)return y;var k=x.find(1);if(k.line==s)return k;m=Xe(i,s=k.line)}}function ru(e,n,o,i){i-=nu(n);var s=n.text.length,u=Xn(function(m){return Lr(e,o,m-1).bottom<=i},s,0);return s=Xn(function(m){return Lr(e,o,m).top>i},u,s),{begin:u,end:s}}function iu(e,n,o,i){o||(o=ki(e,n));var s=nl(e,n,Lr(e,o,i),"line").top;return ru(e,n,o,s)}function ua(e,n,o,i){return e.bottom<=o?!1:e.top>o?!0:(i?e.left:e.right)>n}function Fd(e,n,o,i,s){s-=Sn(n);var u=ki(e,n),m=nu(n),y=0,x=n.text.length,k=!0,I=gt(n,e.doc.direction);if(I){var F=(e.options.lineWrapping?ws:Wd)(e,n,o,u,I,i,s);k=F.level!=1,y=k?F.from:F.to-1,x=k?F.to:F.from-1}var te=null,V=null,fe=Xn(function(st){var Ye=Lr(e,u,st);return Ye.top+=m,Ye.bottom+=m,ua(Ye,i,s,!1)?(Ye.top<=s&&Ye.left<=i&&(te=st,V=Ye),!0):!1},y,x),ye,Pe,Ne=!1;if(V){var Oe=i-V.left<V.right-i,Re=Oe==k;fe=te+(Re?0:1),Pe=Re?"after":"before",ye=Oe?V.left:V.right}else{!k&&(fe==x||fe==y)&&fe++,Pe=fe==0?"after":fe==n.text.length?"before":Lr(e,u,fe-(k?1:0)).bottom+m<=s==k?"after":"before";var Be=_n(e,de(o,fe,Pe),"line",n,u);ye=Be.left,Ne=s<Be.top?-1:s>=Be.bottom?1:0}return fe=fn(n.text,fe,1),il(o,fe,Pe,Ne,i-ye)}function Wd(e,n,o,i,s,u,m){var y=Xn(function(F){var te=s[F],V=te.level!=1;return ua(_n(e,de(o,V?te.to:te.from,V?"before":"after"),"line",n,i),u,m,!0)},0,s.length-1),x=s[y];if(y>0){var k=x.level!=1,I=_n(e,de(o,k?x.from:x.to,k?"after":"before"),"line",n,i);ua(I,u,m,!0)&&I.top>m&&(x=s[y-1])}return x}function ws(e,n,o,i,s,u,m){var y=ru(e,n,i,m),x=y.begin,k=y.end;/\s/.test(n.text.charAt(k-1))&&k--;for(var I=null,F=null,te=0;te<s.length;te++){var V=s[te];if(!(V.from>=k||V.to<=x)){var fe=V.level!=1,ye=Lr(e,i,fe?Math.min(k,V.to)-1:Math.max(x,V.from)).right,Pe=ye<u?u-ye+1e9:ye-u;(!I||F>Pe)&&(I=V,F=Pe)}}return I||(I=s[s.length-1]),I.from<x&&(I={from:x,to:I.to,level:I.level}),I.to>k&&(I={from:I.from,to:k,level:I.level}),I}var qi;function Si(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(qi==null){qi=C("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)qi.appendChild(document.createTextNode("x")),qi.appendChild(C("br"));qi.appendChild(document.createTextNode("x"))}ve(e.measure,qi);var o=qi.offsetHeight/50;return o>3&&(e.cachedTextHeight=o),re(e.measure),o||1}function uo(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=C("span","xxxxxxxxxx"),o=C("pre",[n],"CodeMirror-line-like");ve(e.measure,o);var i=n.getBoundingClientRect(),s=(i.right-i.left)/10;return s>2&&(e.cachedCharWidth=s),s||10}function sl(e){for(var n=e.display,o={},i={},s=n.gutters.clientLeft,u=n.gutters.firstChild,m=0;u;u=u.nextSibling,++m){var y=e.display.gutterSpecs[m].className;o[y]=u.offsetLeft+u.clientLeft+s,i[y]=u.clientWidth}return{fixedPos:ks(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:o,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function ks(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Mo(e){var n=Si(e.display),o=e.options.lineWrapping,i=o&&Math.max(5,e.display.scroller.clientWidth/uo(e.display)-3);return function(s){if(li(e.doc,s))return 0;var u=0;if(s.widgets)for(var m=0;m<s.widgets.length;m++)s.widgets[m].height&&(u+=s.widgets[m].height);return o?u+(Math.ceil(s.text.length/i)||1)*n:u+n}}function ca(e){var n=e.doc,o=Mo(e);n.iter(function(i){var s=o(i);s!=i.height&&On(i,s)})}function co(e,n,o,i){var s=e.display;if(!o&&Hr(n).getAttribute("cm-not-content")=="true")return null;var u,m,y=s.lineSpace.getBoundingClientRect();try{u=n.clientX-y.left,m=n.clientY-y.top}catch{return null}var x=ol(e,u,m),k;if(i&&x.xRel>0&&(k=Xe(e.doc,x.line).text).length==x.ch){var I=He(k,k.length,e.options.tabSize)-k.length;x=de(x.line,Math.max(0,Math.round((u-Ql(e.display).left)/uo(e.display))-I))}return x}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var o=e.display.view,i=0;i<o.length;i++)if(n-=o[i].size,n<0)return i}function er(e,n,o,i){n==null&&(n=e.doc.first),o==null&&(o=e.doc.first+e.doc.size),i||(i=0);var s=e.display;if(i&&o<s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>n)&&(s.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=s.viewTo)Mn&&Xa(e.doc,n)<s.viewTo&&$i(e);else if(o<=s.viewFrom)Mn&&ta(e.doc,o+i)>s.viewFrom?$i(e):(s.viewFrom+=i,s.viewTo+=i);else if(n<=s.viewFrom&&o>=s.viewTo)$i(e);else if(n<=s.viewFrom){var u=da(e,o,o+i,1);u?(s.view=s.view.slice(u.index),s.viewFrom=u.lineN,s.viewTo+=i):$i(e)}else if(o>=s.viewTo){var m=da(e,n,n,-1);m?(s.view=s.view.slice(0,m.index),s.viewTo=m.lineN):$i(e)}else{var y=da(e,n,n,-1),x=da(e,o,o+i,1);y&&x?(s.view=s.view.slice(0,y.index).concat(Za(e,y.lineN,x.lineN)).concat(s.view.slice(x.index)),s.viewTo+=i):$i(e)}var k=s.externalMeasured;k&&(o<k.lineN?k.lineN+=i:n<k.lineN+k.size&&(s.externalMeasured=null))}function Ki(e,n,o){e.curOp.viewChanged=!0;var i=e.display,s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var u=i.view[_i(e,n)];if(u.node!=null){var m=u.changes||(u.changes=[]);Ge(m,o)==-1&&m.push(o)}}}function $i(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function da(e,n,o,i){var s=_i(e,n),u,m=e.display.view;if(!Mn||o==e.doc.first+e.doc.size)return{index:s,lineN:o};for(var y=e.display.viewFrom,x=0;x<s;x++)y+=m[x].size;if(y!=n){if(i>0){if(s==m.length-1)return null;u=y+m[s].size-n,s++}else u=y-n;n+=u,o+=u}for(;Xa(e.doc,o)!=o;){if(s==(i<0?0:m.length-1))return null;o+=i*m[s-(i<0?1:0)].size,s+=i}return{index:s,lineN:o}}function fc(e,n,o){var i=e.display,s=i.view;s.length==0||n>=i.viewTo||o<=i.viewFrom?(i.view=Za(e,n,o),i.viewFrom=n):(i.viewFrom>n?i.view=Za(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<o?i.view=i.view.concat(Za(e,i.viewTo,o)):i.viewTo>o&&(i.view=i.view.slice(0,_i(e,o)))),i.viewTo=o}function ou(e){for(var n=e.display.view,o=0,i=0;i<n.length;i++){var s=n[i];!s.hidden&&(!s.node||s.changes)&&++o}return o}function $r(e){e.display.input.showSelection(e.display.input.prepareSelection())}function al(e,n){n===void 0&&(n=!0);var o=e.doc,i={},s=i.cursors=document.createDocumentFragment(),u=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var y=0;y<o.sel.ranges.length;y++)if(!(!n&&y==o.sel.primIndex)){var x=o.sel.ranges[y];if(!(x.from().line>=e.display.viewTo||x.to().line<e.display.viewFrom)){var k=x.empty();if(m){var I=m(e,x);I&&pa(e,I,s)}else(k||e.options.showCursorWhenSelecting)&&pa(e,x.head,s);k||Hd(e,x,u)}}return i}function pa(e,n,o){var i=_n(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),s=o.appendChild(C("div"," ","CodeMirror-cursor"));if(s.style.left=i.left+"px",s.style.top=i.top+"px",s.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var u=rl(e,n,"div",null,null),m=u.right-u.left;s.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var y=o.appendChild(C("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));y.style.display="",y.style.left=i.other.left+"px",y.style.top=i.other.top+"px",y.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function ll(e,n){return e.top-n.top||e.left-n.left}function Hd(e,n,o){var i=e.display,s=e.doc,u=document.createDocumentFragment(),m=Ql(e.display),y=m.left,x=Math.max(i.sizerWidth,ao(e)-i.sizer.offsetLeft)-m.right,k=s.direction=="ltr";function I(Re,Be,st,Ye){Be<0&&(Be=0),Be=Math.round(Be),Ye=Math.round(Ye),u.appendChild(C("div",null,"CodeMirror-selected","position: absolute; left: "+Re+`px;
                             top: `+Be+"px; width: "+(st??x-Re)+`px;
                             height: `+(Ye-Be)+"px"))}function F(Re,Be,st){var Ye=Xe(s,Re),wt=Ye.text.length,Ct,Bn;function nn(yn,xr){return rl(e,de(Re,yn),"div",Ye,xr)}function vr(yn,xr,Tn){var vn=iu(e,Ye,null,yn),Mt=xr=="ltr"==(Tn=="after")?"left":"right",ct=Tn=="after"?vn.begin:vn.end-(/\s/.test(Ye.text.charAt(vn.end-1))?2:1);return nn(ct,Mt)[Mt]}var rr=gt(Ye,s.direction);return _r(rr,Be||0,st??wt,function(yn,xr,Tn,vn){var Mt=Tn=="ltr",ct=nn(yn,Mt?"left":"right"),Dt=nn(xr-1,Mt?"right":"left"),rn=Be==null&&yn==0,an=st==null&&xr==wt,Bt=vn==0,br=!rr||vn==rr.length-1;if(Dt.top-ct.top<=3){var Tt=(k?rn:an)&&Bt,os=(k?an:rn)&&br,wr=Tt?y:(Mt?ct:Dt).left,Ri=os?x:(Mt?Dt:ct).right;I(wr,ct.top,Ri-wr,ct.bottom)}else{var Ji,An,Un,Ma;Mt?(Ji=k&&rn&&Bt?y:ct.left,An=k?x:vr(yn,Tn,"before"),Un=k?y:vr(xr,Tn,"after"),Ma=k&&an&&br?x:Dt.right):(Ji=k?vr(yn,Tn,"before"):y,An=!k&&rn&&Bt?x:ct.right,Un=!k&&an&&br?y:Dt.left,Ma=k?vr(xr,Tn,"after"):x),I(Ji,ct.top,An-Ji,ct.bottom),ct.bottom<Dt.top&&I(y,ct.bottom,null,Dt.top),I(Un,Dt.top,Ma-Un,Dt.bottom)}(!Ct||ll(ct,Ct)<0)&&(Ct=ct),ll(Dt,Ct)<0&&(Ct=Dt),(!Bn||ll(ct,Bn)<0)&&(Bn=ct),ll(Dt,Bn)<0&&(Bn=Dt)}),{start:Ct,end:Bn}}var te=n.from(),V=n.to();if(te.line==V.line)F(te.line,te.ch,V.ch);else{var fe=Xe(s,te.line),ye=Xe(s,V.line),Pe=jt(fe)==jt(ye),Ne=F(te.line,te.ch,Pe?fe.text.length+1:null).end,Oe=F(V.line,Pe?0:null,V.ch).start;Pe&&(Ne.top<Oe.top-2?(I(Ne.right,Ne.top,null,Ne.bottom),I(y,Oe.top,Oe.left,Oe.bottom)):I(Ne.right,Ne.top,Oe.left-Ne.right,Ne.bottom)),Ne.bottom<Oe.top&&I(y,Ne.bottom,null,Oe.top)}o.appendChild(u)}function Do(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var o=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(o=!o)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function mc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||cl(e))}function ul(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function cl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(At(e,"focus",e,n),e.state.focused=!0,Y(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),A&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Do(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(At(e,"blur",e,n),e.state.focused=!1,Ee(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Ss(e){for(var n=e.display,o=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),s=n.lineDiv.getBoundingClientRect().top,u=0,m=0;m<n.view.length;m++){var y=n.view[m],x=e.options.lineWrapping,k=void 0,I=0;if(!y.hidden){if(s+=y.line.height,_&&P<8){var F=y.node.offsetTop+y.node.offsetHeight;k=F-o,o=F}else{var te=y.node.getBoundingClientRect();k=te.bottom-te.top,!x&&y.text.firstChild&&(I=y.text.firstChild.getBoundingClientRect().right-te.left-1)}var V=y.line.height-k;if((V>.005||V<-.005)&&(s<i&&(u-=V),On(y.line,k),ha(y.line),y.rest))for(var fe=0;fe<y.rest.length;fe++)ha(y.rest[fe]);if(I>e.display.sizerWidth){var ye=Math.ceil(I/uo(e.display));ye>e.display.maxLineLength&&(e.display.maxLineLength=ye,e.display.maxLine=y.line,e.display.maxLineChanged=!0)}}}Math.abs(u)>2&&(n.scroller.scrollTop+=u)}function ha(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var o=e.widgets[n],i=o.node.parentNode;i&&(o.height=i.offsetHeight)}}function po(e,n,o){var i=o&&o.top!=null?Math.max(0,o.top):e.scroller.scrollTop;i=Math.floor(i-aa(e));var s=o&&o.bottom!=null?o.bottom:i+e.wrapper.clientHeight,u=z(n,i),m=z(n,s);if(o&&o.ensure){var y=o.ensure.from.line,x=o.ensure.to.line;y<u?(u=y,m=z(n,Sn(Xe(n,y))+e.wrapper.clientHeight)):Math.min(x,n.lastLine())>=m&&(u=z(n,Sn(Xe(n,x))-e.wrapper.clientHeight),m=x)}return{from:u,to:Math.max(m,u+1)}}function gc(e,n){if(!Rt(e,"scrollCursorIntoView")){var o=e.display,i=o.sizer.getBoundingClientRect(),s=null,u=o.wrapper.ownerDocument;if(n.top+i.top<0?s=!0:n.bottom+i.top>(u.defaultView.innerHeight||u.documentElement.clientHeight)&&(s=!1),s!=null&&!D){var m=C("div","​",null,`position: absolute;
                         top: `+(n.top-o.viewOffset-aa(e.display))+`px;
                         height: `+(n.bottom-n.top+ui(e)+o.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(s),e.display.lineSpace.removeChild(m)}}}function su(e,n,o,i){i==null&&(i=0);var s;!e.options.lineWrapping&&n==o&&(o=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var u=0;u<5;u++){var m=!1,y=_n(e,n),x=!o||o==n?y:_n(e,o);s={left:Math.min(y.left,x.left),top:Math.min(y.top,x.top)-i,right:Math.max(y.left,x.left),bottom:Math.max(y.bottom,x.bottom)+i};var k=_s(e,s),I=e.doc.scrollTop,F=e.doc.scrollLeft;if(k.scrollTop!=null&&(fo(e,k.scrollTop),Math.abs(e.doc.scrollTop-I)>1&&(m=!0)),k.scrollLeft!=null&&(Gi(e,k.scrollLeft),Math.abs(e.doc.scrollLeft-F)>1&&(m=!0)),!m)break}return s}function fa(e,n){var o=_s(e,n);o.scrollTop!=null&&fo(e,o.scrollTop),o.scrollLeft!=null&&Gi(e,o.scrollLeft)}function _s(e,n){var o=e.display,i=Si(e.display);n.top<0&&(n.top=0);var s=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:o.scroller.scrollTop,u=lo(e),m={};n.bottom-n.top>u&&(n.bottom=n.top+u);var y=e.doc.height+Ja(o),x=n.top<i,k=n.bottom>y-i;if(n.top<s)m.scrollTop=x?0:n.top;else if(n.bottom>s+u){var I=Math.min(n.top,(k?y:n.bottom)-u);I!=s&&(m.scrollTop=I)}var F=e.options.fixedGutter?0:o.gutters.offsetWidth,te=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:o.scroller.scrollLeft-F,V=ao(e)-o.gutters.offsetWidth,fe=n.right-n.left>V;return fe&&(n.right=n.left+V),n.left<10?m.scrollLeft=0:n.left<te?m.scrollLeft=Math.max(0,n.left+F-(fe?0:10)):n.right>V+te-3&&(m.scrollLeft=n.right+(fe?0:10)-V),m}function ho(e,n){n!=null&&(ga(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function zo(e){ga(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function ma(e,n,o){(n!=null||o!=null)&&ga(e),n!=null&&(e.curOp.scrollLeft=n),o!=null&&(e.curOp.scrollTop=o)}function Bd(e,n){ga(e),e.curOp.scrollToPos=n}function ga(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var o=bs(e,n.from),i=bs(e,n.to);ya(e,o,i,n.margin)}}function ya(e,n,o,i){var s=_s(e,{left:Math.min(n.left,o.left),top:Math.min(n.top,o.top)-i,right:Math.max(n.right,o.right),bottom:Math.max(n.bottom,o.bottom)+i});ma(e,s.scrollLeft,s.scrollTop)}function fo(e,n){Math.abs(e.doc.scrollTop-n)<2||(b||Xi(e,{top:n}),dl(e,n,!0),b&&Xi(e),Ho(e,100))}function dl(e,n,o){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!o)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Gi(e,n,o,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((o?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,lu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Fo(e){var n=e.display,o=n.gutters.offsetWidth,i=Math.round(e.doc.height+Ja(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?o:0,docHeight:i,scrollHeight:i+ui(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:o}}var Yi=function(e,n,o){this.cm=o;var i=this.vert=C("div",[C("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),s=this.horiz=C("div",[C("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=s.tabIndex=-1,e(i),e(s),nt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),nt(s,"scroll",function(){s.clientWidth&&n(s.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,_&&P<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Yi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,o=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(o){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var s=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+s)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=o?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var u=e.viewWidth-e.barLeft-(o?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+u)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:o?i:0,bottom:n?i:0}},Yi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Yi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Yi.prototype.zeroWidthHack=function(){var e=se&&!ue?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Yi.prototype.enableZeroWidthBar=function(e,n,o){e.style.visibility="";function i(){var s=e.getBoundingClientRect(),u=o=="vert"?document.elementFromPoint(s.right-1,(s.top+s.bottom)/2):document.elementFromPoint((s.right+s.left)/2,s.bottom-1);u!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Yi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var va=function(){};va.prototype.update=function(){return{bottom:0,right:0}},va.prototype.setScrollLeft=function(){},va.prototype.setScrollTop=function(){},va.prototype.clear=function(){};function Wo(e,n){n||(n=Fo(e));var o=e.display.barWidth,i=e.display.barHeight;yc(e,n);for(var s=0;s<4&&o!=e.display.barWidth||i!=e.display.barHeight;s++)o!=e.display.barWidth&&e.options.lineWrapping&&Ss(e),yc(e,Fo(e)),o=e.display.barWidth,i=e.display.barHeight}function yc(e,n){var o=e.display,i=o.scrollbars.update(n);o.sizer.style.paddingRight=(o.barWidth=i.right)+"px",o.sizer.style.paddingBottom=(o.barHeight=i.bottom)+"px",o.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(o.scrollbarFiller.style.display="block",o.scrollbarFiller.style.height=i.bottom+"px",o.scrollbarFiller.style.width=i.right+"px"):o.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(o.gutterFiller.style.display="block",o.gutterFiller.style.height=i.bottom+"px",o.gutterFiller.style.width=n.gutterWidth+"px"):o.gutterFiller.style.display=""}var vc={native:Yi,null:va};function pl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ee(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new vc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),nt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,o){o=="horizontal"?Gi(e,n):fo(e,n)},e),e.display.scrollbars.addClass&&Y(e.display.wrapper,e.display.scrollbars.addClass)}var mo=0;function go(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++mo,markArrays:null},ic(e.curOp)}function Gr(e){var n=e.curOp;n&&jd(n,function(o){for(var i=0;i<o.ops.length;i++)o.ops[i].cm.curOp=null;Ci(o)})}function Ci(e){for(var n=e.ops,o=0;o<n.length;o++)xa(n[o]);for(var i=0;i<n.length;i++)Vi(n[i]);for(var s=0;s<n.length;s++)au(n[s]);for(var u=0;u<n.length;u++)Ud(n[u]);for(var m=0;m<n.length;m++)qd(n[m])}function xa(e){var n=e.cm,o=n.display;en(n),e.updateMaxLine&&na(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<o.viewFrom||e.scrollToPos.to.line>=o.viewTo)||o.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ci(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Vi(e){e.updatedDisplay=e.mustUpdate&&Gn(e.cm,e.update)}function au(e){var n=e.cm,o=n.display;e.updatedDisplay&&Ss(n),e.barMeasure=Fo(n),o.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=Zl(n,o.maxLine,o.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(o.scroller.clientWidth,o.sizer.offsetLeft+e.adjustWidthTo+ui(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,o.sizer.offsetLeft+e.adjustWidthTo-ao(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=o.input.prepareSelection())}function Ud(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Gi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var o=e.focus&&e.focus==O(Je(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,o),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Wo(n,e.barMeasure),e.updatedDisplay&&Ns(n,e.barMeasure),e.selectionChanged&&Do(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),o&&mc(e.cm)}function qd(e){var n=e.cm,o=n.display,i=n.doc;if(e.updatedDisplay&&fr(n,e.update),o.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(o.wheelStartX=o.wheelStartY=null),e.scrollTop!=null&&dl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Gi(n,e.scrollLeft,!0,!0),e.scrollToPos){var s=su(n,ft(i,e.scrollToPos.from),ft(i,e.scrollToPos.to),e.scrollToPos.margin);gc(n,s)}var u=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(u)for(var y=0;y<u.length;++y)u[y].lines.length||At(u[y],"hide");if(m)for(var x=0;x<m.length;++x)m[x].lines.length&&At(m[x],"unhide");o.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&At(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Pn(e,n){if(e.curOp)return n();go(e);try{return n()}finally{Gr(e)}}function cn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);go(e);try{return n.apply(e,arguments)}finally{Gr(e)}}}function Cn(e){return function(){if(this.curOp)return e.apply(this,arguments);go(this);try{return e.apply(this,arguments)}finally{Gr(this)}}}function gn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);go(n);try{return e.apply(this,arguments)}finally{Gr(n)}}}function Ho(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Ie(Cs,e))}function Cs(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var o=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),s=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(u){if(i.line>=e.display.viewFrom){var m=u.styles,y=u.text.length>e.options.maxHighlightLength?Pt(n.mode,i.state):null,x=jo(e,u,i,!0);y&&(i.state=y),u.styles=x.styles;var k=u.styleClasses,I=x.classes;I?u.styleClasses=I:k&&(u.styleClasses=null);for(var F=!m||m.length!=u.styles.length||k!=I&&(!k||!I||k.bgClass!=I.bgClass||k.textClass!=I.textClass),te=0;!F&&te<m.length;++te)F=m[te]!=u.styles[te];F&&s.push(i.line),u.stateAfter=i.save(),i.nextLine()}else u.text.length<=e.options.maxHighlightLength&&Fi(e,u.text,i),u.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>o)return Ho(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),s.length&&Pn(e,function(){for(var u=0;u<s.length;u++)Ki(e,s[u],"text")})}}var ci=function(e,n,o){var i=e.display;this.viewport=n,this.visible=po(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=ao(e),this.force=o,this.dims=sl(e),this.events=[]};ci.prototype.signal=function(e,n){ln(e,n)&&this.events.push(arguments)},ci.prototype.finish=function(){for(var e=0;e<this.events.length;e++)At.apply(null,this.events[e])};function en(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ui(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ui(e)+"px",n.scrollbarsClipped=!0)}function Vt(e){if(e.hasFocus())return null;var n=O(Je(e));if(!n||!N(e.display.lineDiv,n))return null;var o={activeElt:n};if(window.getSelection){var i=we(e).getSelection();i.anchorNode&&i.extend&&N(e.display.lineDiv,i.anchorNode)&&(o.anchorNode=i.anchorNode,o.anchorOffset=i.anchorOffset,o.focusNode=i.focusNode,o.focusOffset=i.focusOffset)}return o}function yo(e){if(!(!e||!e.activeElt||e.activeElt==O(Ve(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&N(document.body,e.anchorNode)&&N(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,o=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),o.removeAllRanges(),o.addRange(i),o.extend(e.focusNode,e.focusOffset)}}function Gn(e,n){var o=e.display,i=e.doc;if(n.editorIsHidden)return $i(e),!1;if(!n.force&&n.visible.from>=o.viewFrom&&n.visible.to<=o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>=o.viewTo)&&o.renderedView==o.view&&ou(e)==0)return!1;uu(e)&&($i(e),n.dims=sl(e));var s=i.first+i.size,u=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(s,n.visible.to+e.options.viewportMargin);o.viewFrom<u&&u-o.viewFrom<20&&(u=Math.max(i.first,o.viewFrom)),o.viewTo>m&&o.viewTo-m<20&&(m=Math.min(s,o.viewTo)),Mn&&(u=Xa(e.doc,u),m=ta(e.doc,m));var y=u!=o.viewFrom||m!=o.viewTo||o.lastWrapHeight!=n.wrapperHeight||o.lastWrapWidth!=n.wrapperWidth;fc(e,u,m),o.viewOffset=Sn(Xe(e.doc,o.viewFrom)),e.display.mover.style.top=o.viewOffset+"px";var x=ou(e);if(!y&&x==0&&!n.force&&o.renderedView==o.view&&(o.updateLineNumbers==null||o.updateLineNumbers>=o.viewTo))return!1;var k=Vt(e);return x>4&&(o.lineDiv.style.display="none"),Ts(e,o.updateLineNumbers,n.dims),x>4&&(o.lineDiv.style.display=""),o.renderedView=o.view,yo(k),re(o.cursorDiv),re(o.selectionDiv),o.gutters.style.height=o.sizer.style.minHeight=0,y&&(o.lastWrapHeight=n.wrapperHeight,o.lastWrapWidth=n.wrapperWidth,Ho(e,400)),o.updateLineNumbers=null,!0}function fr(e,n){for(var o=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==ao(e)){if(o&&o.top!=null&&(o={top:Math.min(e.doc.height+Ja(e.display)-lo(e),o.top)}),n.visible=po(e.display,e.doc,o),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=po(e.display,e.doc,o));if(!Gn(e,n))break;Ss(e);var s=Fo(e);$r(e),Wo(e,s),Ns(e,s),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var o=new ci(e,n);if(Gn(e,o)){Ss(e),fr(e,o);var i=Fo(e);$r(e),Wo(e,i),Ns(e,i),o.finish()}}function Ts(e,n,o){var i=e.display,s=e.options.lineNumbers,u=i.lineDiv,m=u.firstChild;function y(fe){var ye=fe.nextSibling;return A&&se&&e.display.currentWheelTarget==fe?fe.style.display="none":fe.parentNode.removeChild(fe),ye}for(var x=i.view,k=i.viewFrom,I=0;I<x.length;I++){var F=x[I];if(!F.hidden)if(!F.node||F.node.parentNode!=u){var te=Od(e,F,k,o);u.insertBefore(te,m)}else{for(;m!=F.node;)m=y(m);var V=s&&n!=null&&n<=k&&F.lineNumber;F.changes&&(Ge(F.changes,"gutter")>-1&&(V=!1),oc(e,F,k,o)),V&&(re(F.lineNumber),F.lineNumber.appendChild(document.createTextNode(Te(e.options,k)))),m=F.node.nextSibling}k+=F.size}for(;m;)m=y(m)}function tr(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Ns(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ui(e)+"px"}function lu(e){var n=e.display,o=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=ks(n)-n.scroller.scrollLeft+e.doc.scrollLeft,s=n.gutters.offsetWidth,u=i+"px",m=0;m<o.length;m++)if(!o[m].hidden){e.options.fixedGutter&&(o[m].gutter&&(o[m].gutter.style.left=u),o[m].gutterBackground&&(o[m].gutterBackground.style.left=u));var y=o[m].alignable;if(y)for(var x=0;x<y.length;x++)y[x].style.left=u}e.options.fixedGutter&&(n.gutters.style.left=i+s+"px")}}function uu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,o=Te(e.options,n.first+n.size-1),i=e.display;if(o.length!=i.lineNumChars){var s=i.measure.appendChild(C("div",[C("div",o)],"CodeMirror-linenumber CodeMirror-gutter-elt")),u=s.firstChild.offsetWidth,m=s.offsetWidth-u;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(u,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?o.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",tr(e.display),!0}return!1}function Es(e,n){for(var o=[],i=!1,s=0;s<e.length;s++){var u=e[s],m=null;if(typeof u!="string"&&(m=u.style,u=u.className),u=="CodeMirror-linenumbers")if(n)i=!0;else continue;o.push({className:u,style:m})}return n&&!i&&o.push({className:"CodeMirror-linenumbers",style:null}),o}function cu(e){var n=e.gutters,o=e.gutterSpecs;re(n),e.lineGutter=null;for(var i=0;i<o.length;++i){var s=o[i],u=s.className,m=s.style,y=n.appendChild(C("div",null,"CodeMirror-gutter "+u));m&&(y.style.cssText=m),u=="CodeMirror-linenumbers"&&(e.lineGutter=y,y.style.width=(e.lineNumWidth||1)+"px")}n.style.display=o.length?"":"none",tr(e)}function Mr(e){cu(e.display),er(e),lu(e)}function hl(e,n,o,i){var s=this;this.input=o,s.scrollbarFiller=C("div",null,"CodeMirror-scrollbar-filler"),s.scrollbarFiller.setAttribute("cm-not-content","true"),s.gutterFiller=C("div",null,"CodeMirror-gutter-filler"),s.gutterFiller.setAttribute("cm-not-content","true"),s.lineDiv=Q("div",null,"CodeMirror-code"),s.selectionDiv=C("div",null,null,"position: relative; z-index: 1"),s.cursorDiv=C("div",null,"CodeMirror-cursors"),s.measure=C("div",null,"CodeMirror-measure"),s.lineMeasure=C("div",null,"CodeMirror-measure"),s.lineSpace=Q("div",[s.measure,s.lineMeasure,s.selectionDiv,s.cursorDiv,s.lineDiv],null,"position: relative; outline: none");var u=Q("div",[s.lineSpace],"CodeMirror-lines");s.mover=C("div",[u],null,"position: relative"),s.sizer=C("div",[s.mover],"CodeMirror-sizer"),s.sizerWidth=null,s.heightForcer=C("div",null,null,"position: absolute; height: "+qt+"px; width: 1px;"),s.gutters=C("div",null,"CodeMirror-gutters"),s.lineGutter=null,s.scroller=C("div",[s.sizer,s.heightForcer,s.gutters],"CodeMirror-scroll"),s.scroller.setAttribute("tabIndex","-1"),s.wrapper=C("div",[s.scrollbarFiller,s.gutterFiller,s.scroller],"CodeMirror"),R&&X===105&&(s.wrapper.style.clipPath="inset(0px)"),s.wrapper.setAttribute("translate","no"),_&&P<8&&(s.gutters.style.zIndex=-1,s.scroller.style.paddingRight=0),!A&&!(b&&$)&&(s.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(s.wrapper):e(s.wrapper)),s.viewFrom=s.viewTo=n.first,s.reportedViewFrom=s.reportedViewTo=n.first,s.view=[],s.renderedView=null,s.externalMeasured=null,s.viewOffset=0,s.lastWrapHeight=s.lastWrapWidth=0,s.updateLineNumbers=null,s.nativeBarWidth=s.barHeight=s.barWidth=0,s.scrollbarsClipped=!1,s.lineNumWidth=s.lineNumInnerWidth=s.lineNumChars=null,s.alignWidgets=!1,s.cachedCharWidth=s.cachedTextHeight=s.cachedPaddingH=null,s.maxLine=null,s.maxLineLength=0,s.maxLineChanged=!1,s.wheelDX=s.wheelDY=s.wheelStartX=s.wheelStartY=null,s.shift=!1,s.selForContextMenu=null,s.activeTouch=null,s.gutterSpecs=Es(i.gutters,i.lineNumbers),cu(s),o.init(s)}var Ls=0,Ti=null;_?Ti=-.53:b?Ti=15:R?Ti=-.7:J&&(Ti=-1/3);function xc(e){var n=e.wheelDeltaX,o=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),o==null&&e.detail&&e.axis==e.VERTICAL_AXIS?o=e.detail:o==null&&(o=e.wheelDelta),{x:n,y:o}}function vo(e){var n=xc(e);return n.x*=Ti,n.y*=Ti,n}function Bo(e,n){R&&X==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var o=xc(n),i=o.x,s=o.y,u=Ti;n.deltaMode===0&&(i=n.deltaX,s=n.deltaY,u=1);var m=e.display,y=m.scroller,x=y.scrollWidth>y.clientWidth,k=y.scrollHeight>y.clientHeight;if(i&&x||s&&k){if(s&&se&&A){e:for(var I=n.target,F=m.view;I!=y;I=I.parentNode)for(var te=0;te<F.length;te++)if(F[te].node==I){e.display.currentWheelTarget=I;break e}}if(i&&!b&&!ne&&u!=null){s&&k&&fo(e,Math.max(0,y.scrollTop+s*u)),Gi(e,Math.max(0,y.scrollLeft+i*u)),(!s||s&&k)&&bn(n),m.wheelStartX=null;return}if(s&&u!=null){var V=s*u,fe=e.doc.scrollTop,ye=fe+m.wrapper.clientHeight;V<0?fe=Math.max(0,fe+V-50):ye=Math.min(e.doc.height,ye+V+50),Xi(e,{top:fe,bottom:ye})}Ls<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=y.scrollLeft,m.wheelStartY=y.scrollTop,m.wheelDX=i,m.wheelDY=s,setTimeout(function(){if(m.wheelStartX!=null){var Pe=y.scrollLeft-m.wheelStartX,Ne=y.scrollTop-m.wheelStartY,Oe=Ne&&m.wheelDY&&Ne/m.wheelDY||Pe&&m.wheelDX&&Pe/m.wheelDX;m.wheelStartX=m.wheelStartY=null,Oe&&(Ti=(Ti*Ls+Oe)/(Ls+1),++Ls)}},200)):(m.wheelDX+=i,m.wheelDY+=s))}}var Yn=function(e,n){this.ranges=e,this.primIndex=n};Yn.prototype.primary=function(){return this.ranges[this.primIndex]},Yn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var o=this.ranges[n],i=e.ranges[n];if(!_t(o.anchor,i.anchor)||!_t(o.head,i.head))return!1}return!0},Yn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Lt(Jt(this.ranges[n].anchor),Jt(this.ranges[n].head));return new Yn(e,this.primIndex)},Yn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Yn.prototype.contains=function(e,n){n||(n=e);for(var o=0;o<this.ranges.length;o++){var i=this.ranges[o];if(ze(n,i.from())>=0&&ze(e,i.to())<=0)return o}return-1};var Lt=function(e,n){this.anchor=e,this.head=n};Lt.prototype.from=function(){return si(this.anchor,this.head)},Lt.prototype.to=function(){return kn(this.anchor,this.head)},Lt.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Pr(e,n,o){var i=e&&e.options.selectionsMayTouch,s=n[o];n.sort(function(te,V){return ze(te.from(),V.from())}),o=Ge(n,s);for(var u=1;u<n.length;u++){var m=n[u],y=n[u-1],x=ze(y.to(),m.from());if(i&&!m.empty()?x>0:x>=0){var k=si(y.from(),m.from()),I=kn(y.to(),m.to()),F=y.empty()?m.from()==m.head:y.from()==y.head;u<=o&&--o,n.splice(--u,2,new Lt(F?I:k,F?k:I))}}return new Yn(n,o)}function zn(e,n){return new Yn([new Lt(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,Ke(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function xo(e,n){if(ze(e,n.from)<0)return e;if(ze(e,n.to)<=0)return Fn(n);var o=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(o,i)}function di(e,n){for(var o=[],i=0;i<e.sel.ranges.length;i++){var s=e.sel.ranges[i];o.push(new Lt(xo(s.anchor,n),xo(s.head,n)))}return Pr(e.cm,o,e.sel.primIndex)}function Ni(e,n,o){return e.line==n.line?de(o.line,e.ch-n.ch+o.ch):de(o.line+(e.line-n.line),e.ch)}function Uo(e,n,o){for(var i=[],s=de(e.first,0),u=s,m=0;m<n.length;m++){var y=n[m],x=Ni(y.from,s,u),k=Ni(Fn(y),s,u);if(s=y.to,u=k,o=="around"){var I=e.sel.ranges[m],F=ze(I.head,I.anchor)<0;i[m]=new Lt(F?k:x,F?x:k)}else i[m]=new Lt(x,x)}return new Yn(i,e.sel.primIndex)}function fl(e){e.doc.mode=Di(e.options,e.doc.modeOption),qo(e)}function qo(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Ho(e,100),e.state.modeGen++,e.curOp&&er(e)}function ml(e,n){return n.from.ch==0&&n.to.ch==0&&Ke(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function mr(e,n,o,i){function s(Oe){return o?o[Oe]:null}function u(Oe,Re,Be){Cd(Oe,Re,Be,i),Dn(Oe,"change",Oe,n)}function m(Oe,Re){for(var Be=[],st=Oe;st<Re;++st)Be.push(new wi(k[st],s(st),i));return Be}var y=n.from,x=n.to,k=n.text,I=Xe(e,y.line),F=Xe(e,x.line),te=Ke(k),V=s(k.length-1),fe=x.line-y.line;if(n.full)e.insert(0,m(0,k.length)),e.remove(k.length,e.size-k.length);else if(ml(e,n)){var ye=m(0,k.length-1);u(F,F.text,V),fe&&e.remove(y.line,fe),ye.length&&e.insert(y.line,ye)}else if(I==F)if(k.length==1)u(I,I.text.slice(0,y.ch)+te+I.text.slice(x.ch),V);else{var Pe=m(1,k.length-1);Pe.push(new wi(te+I.text.slice(x.ch),V,i)),u(I,I.text.slice(0,y.ch)+k[0],s(0)),e.insert(y.line+1,Pe)}else if(k.length==1)u(I,I.text.slice(0,y.ch)+k[0]+F.text.slice(x.ch),s(0)),e.remove(y.line+1,fe);else{u(I,I.text.slice(0,y.ch)+k[0],s(0)),u(F,te+F.text.slice(x.ch),V);var Ne=m(1,k.length-1);fe>1&&e.remove(y.line+1,fe-1),e.insert(y.line+1,Ne)}Dn(e,"change",e,n)}function jn(e,n,o){function i(s,u,m){if(s.linked)for(var y=0;y<s.linked.length;++y){var x=s.linked[y];if(x.doc!=u){var k=m&&x.sharedHist;o&&!k||(n(x.doc,k),i(x.doc,s,k))}}}i(e,null,!0)}function tn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,ca(e),fl(e),Yr(e),e.options.direction=n.direction,e.options.lineWrapping||na(e),e.options.mode=n.modeOption,er(e)}function Yr(e){(e.doc.direction=="rtl"?Y:Ee)(e.display.lineDiv,"CodeMirror-rtl")}function bc(e){Pn(e,function(){Yr(e),er(e)})}function ba(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function wa(e,n){var o={from:Jt(n.from),to:Fn(n),text:oi(e,n.from,n.to)};return Sc(e,o,n.from.line,n.to.line+1),jn(e,function(i){return Sc(i,o,n.from.line,n.to.line+1)},!0),o}function gl(e){for(;e.length;){var n=Ke(e);if(n.ranges)e.pop();else break}}function wc(e,n){if(n)return gl(e.done),Ke(e.done);if(e.done.length&&!Ke(e.done).ranges)return Ke(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Ke(e.done)}function ka(e,n,o,i){var s=e.history;s.undone.length=0;var u=+new Date,m,y;if((s.lastOp==i||s.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&s.lastModTime>u-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=wc(s,s.lastOp==i)))y=Ke(m.changes),ze(n.from,n.to)==0&&ze(n.from,y.to)==0?y.to=Fn(n):m.changes.push(wa(e,n));else{var x=Ke(s.done);for((!x||!x.ranges)&&js(e.sel,s.done),m={changes:[wa(e,n)],generation:s.generation},s.done.push(m);s.done.length>s.undoDepth;)s.done.shift(),s.done[0].ranges||s.done.shift()}s.done.push(o),s.generation=++s.maxGeneration,s.lastModTime=s.lastSelTime=u,s.lastOp=s.lastSelOp=i,s.lastOrigin=s.lastSelOrigin=n.origin,y||At(e,"historyAdded")}function kc(e,n,o,i){var s=n.charAt(0);return s=="*"||s=="+"&&o.ranges.length==i.ranges.length&&o.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Ps(e,n,o,i){var s=e.history,u=i&&i.origin;o==s.lastSelOp||u&&s.lastSelOrigin==u&&(s.lastModTime==s.lastSelTime&&s.lastOrigin==u||kc(e,u,Ke(s.done),n))?s.done[s.done.length-1]=n:js(n,s.done),s.lastSelTime=+new Date,s.lastSelOrigin=u,s.lastSelOp=o,i&&i.clearRedo!==!1&&gl(s.undone)}function js(e,n){var o=Ke(n);o&&o.ranges&&o.equals(e)||n.push(e)}function Sc(e,n,o,i){var s=n["spans_"+e.id],u=0;e.iter(Math.max(e.first,o),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((s||(s=n["spans_"+e.id]={}))[u]=m.markedSpans),++u})}function Sa(e){if(!e)return null;for(var n,o=0;o<e.length;++o)e[o].marker.explicitlyCleared?n||(n=e.slice(0,o)):n&&n.push(e[o]);return n?n.length?n:null:e}function yl(e,n){var o=n["spans_"+e.id];if(!o)return null;for(var i=[],s=0;s<n.text.length;++s)i.push(Sa(o[s]));return i}function du(e,n){var o=yl(e,n),i=ke(e,n);if(!o)return i;if(!i)return o;for(var s=0;s<o.length;++s){var u=o[s],m=i[s];if(u&&m)e:for(var y=0;y<m.length;++y){for(var x=m[y],k=0;k<u.length;++k)if(u[k].marker==x.marker)continue e;u.push(x)}else m&&(o[s]=m)}return o}function Ko(e,n,o){for(var i=[],s=0;s<e.length;++s){var u=e[s];if(u.ranges){i.push(o?Yn.prototype.deepCopy.call(u):u);continue}var m=u.changes,y=[];i.push({changes:y});for(var x=0;x<m.length;++x){var k=m[x],I=void 0;if(y.push({from:k.from,to:k.to,text:k.text}),n)for(var F in k)(I=F.match(/^spans_(\d+)$/))&&Ge(n,Number(I[1]))>-1&&(Ke(y)[F]=k[F],delete k[F])}}return i}function bo(e,n,o,i){if(i){var s=e.anchor;if(o){var u=ze(n,s)<0;u!=ze(o,s)<0?(s=n,n=o):u!=ze(n,o)<0&&(n=o)}return new Lt(s,n)}else return new Lt(o||n,n)}function _a(e,n,o,i,s){s==null&&(s=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Yn([bo(e.sel.primary(),n,o,s)],0),i)}function Ca(e,n,o){for(var i=[],s=e.cm&&(e.cm.display.shift||e.extend),u=0;u<e.sel.ranges.length;u++)i[u]=bo(e.sel.ranges[u],n[u],null,s);var m=Pr(e.cm,i,e.sel.primIndex);Wn(e,m,o)}function As(e,n,o,i){var s=e.sel.ranges.slice(0);s[n]=o,Wn(e,Pr(e.cm,s,e.sel.primIndex),i)}function $o(e,n,o,i){Wn(e,zn(n,o),i)}function pu(e,n,o){var i={ranges:n.ranges,update:function(s){this.ranges=[];for(var u=0;u<s.length;u++)this.ranges[u]=new Lt(ft(e,s[u].anchor),ft(e,s[u].head))},origin:o&&o.origin};return At(e,"beforeSelectionChange",e,i),e.cm&&At(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Pr(e.cm,i.ranges,i.ranges.length-1):n}function vl(e,n,o){var i=e.history.done,s=Ke(i);s&&s.ranges?(i[i.length-1]=n,Rs(e,n,o)):Wn(e,n,o)}function Wn(e,n,o){Rs(e,n,o),Ps(e,e.sel,e.cm?e.cm.curOp.id:NaN,o)}function Rs(e,n,o){(ln(e,"beforeSelectionChange")||e.cm&&ln(e.cm,"beforeSelectionChange"))&&(n=pu(e,n,o));var i=o&&o.bias||(ze(n.primary().head,e.sel.primary().head)<0?-1:1);Go(e,wo(e,n,i,!0)),!(o&&o.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&zo(e.cm)}function Go(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,En(e.cm)),Dn(e,"cursorActivity",e))}function Dr(e){Go(e,wo(e,e.sel,null,!1))}function wo(e,n,o,i){for(var s,u=0;u<n.ranges.length;u++){var m=n.ranges[u],y=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[u],x=Ta(e,m.anchor,y&&y.anchor,o,i),k=m.head==m.anchor?x:Ta(e,m.head,y&&y.head,o,i);(s||x!=m.anchor||k!=m.head)&&(s||(s=n.ranges.slice(0,u)),s[u]=new Lt(x,k))}return s?Pr(e.cm,s,n.primIndex):n}function ko(e,n,o,i,s){var u=Xe(e,n.line);if(u.markedSpans)for(var m=0;m<u.markedSpans.length;++m){var y=u.markedSpans[m],x=y.marker,k="selectLeft"in x?!x.selectLeft:x.inclusiveLeft,I="selectRight"in x?!x.selectRight:x.inclusiveRight;if((y.from==null||(k?y.from<=n.ch:y.from<n.ch))&&(y.to==null||(I?y.to>=n.ch:y.to>n.ch))){if(s&&(At(x,"beforeCursorEnter"),x.explicitlyCleared))if(u.markedSpans){--m;continue}else break;if(!x.atomic)continue;if(o){var F=x.find(i<0?1:-1),te=void 0;if((i<0?I:k)&&(F=Ei(e,F,-i,F&&F.line==n.line?u:null)),F&&F.line==n.line&&(te=ze(F,o))&&(i<0?te<0:te>0))return ko(e,F,n,i,s)}var V=x.find(i<0?-1:1);return(i<0?k:I)&&(V=Ei(e,V,i,V.line==n.line?u:null)),V?ko(e,V,n,i,s):null}}return n}function Ta(e,n,o,i,s){var u=i||1,m=ko(e,n,o,u,s)||!s&&ko(e,n,o,u,!0)||ko(e,n,o,-u,s)||!s&&ko(e,n,o,-u,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Ei(e,n,o,i){return o<0&&n.ch==0?n.line>e.first?ft(e,de(n.line-1)):null:o>0&&n.ch==(i||Xe(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+o)}function Qi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),$t)}function xl(e,n,o){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return o&&(i.update=function(s,u,m,y){s&&(i.from=ft(e,s)),u&&(i.to=ft(e,u)),m&&(i.text=m),y!==void 0&&(i.origin=y)}),At(e,"beforeChange",e,i),e.cm&&At(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Yo(e,n,o){if(e.cm){if(!e.cm.curOp)return cn(e.cm,Yo)(e,n,o);if(e.cm.state.suppressEdits)return}if(!((ln(e,"beforeChange")||e.cm&&ln(e.cm,"beforeChange"))&&(n=xl(e,n,!0),!n))){var i=Ir&&!o&&Z(e,n.from,n.to);if(i)for(var s=i.length-1;s>=0;--s)Li(e,{from:i[s].from,to:i[s].to,text:s?[""]:n.text,origin:n.origin});else Li(e,n)}}function Li(e,n){if(!(n.text.length==1&&n.text[0]==""&&ze(n.from,n.to)==0)){var o=di(e,n);ka(e,n,o,e.cm?e.cm.curOp.id:NaN),Is(e,n,o,ke(e,n));var i=[];jn(e,function(s,u){!u&&Ge(i,s.history)==-1&&(Ms(s.history,n),i.push(s.history)),Is(s,n,null,ke(s,n))})}}function pi(e,n,o){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!o)){for(var s=e.history,u,m=e.sel,y=n=="undo"?s.done:s.undone,x=n=="undo"?s.undone:s.done,k=0;k<y.length&&(u=y[k],!(o?u.ranges&&!u.equals(e.sel):!u.ranges));k++);if(k!=y.length){for(s.lastOrigin=s.lastSelOrigin=null;;)if(u=y.pop(),u.ranges){if(js(u,x),o&&!u.equals(e.sel)){Wn(e,u,{clearRedo:!1});return}m=u}else if(i){y.push(u);return}else break;var I=[];js(m,x),x.push({changes:I,generation:s.generation}),s.generation=u.generation||++s.maxGeneration;for(var F=ln(e,"beforeChange")||e.cm&&ln(e.cm,"beforeChange"),te=function(ye){var Pe=u.changes[ye];if(Pe.origin=n,F&&!xl(e,Pe,!1))return y.length=0,{};I.push(wa(e,Pe));var Ne=ye?di(e,Pe):Ke(y);Is(e,Pe,Ne,du(e,Pe)),!ye&&e.cm&&e.cm.scrollIntoView({from:Pe.from,to:Fn(Pe)});var Oe=[];jn(e,function(Re,Be){!Be&&Ge(Oe,Re.history)==-1&&(Ms(Re.history,Pe),Oe.push(Re.history)),Is(Re,Pe,null,du(Re,Pe))})},V=u.changes.length-1;V>=0;--V){var fe=te(V);if(fe)return fe.v}}}}function Na(e,n){if(n!=0&&(e.first+=n,e.sel=new Yn(vt(e.sel.ranges,function(s){return new Lt(de(s.anchor.line+n,s.anchor.ch),de(s.head.line+n,s.head.ch))}),e.sel.primIndex),e.cm)){er(e.cm,e.first,e.first-n,n);for(var o=e.cm.display,i=o.viewFrom;i<o.viewTo;i++)Ki(e.cm,i,"gutter")}}function Is(e,n,o,i){if(e.cm&&!e.cm.curOp)return cn(e.cm,Is)(e,n,o,i);if(n.to.line<e.first){Na(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var s=n.text.length-1-(e.first-n.from.line);Na(e,s),n={from:de(e.first,0),to:de(n.to.line+s,n.to.ch),text:[Ke(n.text)],origin:n.origin}}var u=e.lastLine();n.to.line>u&&(n={from:n.from,to:de(u,Xe(e,u).text.length),text:[n.text[0]],origin:n.origin}),n.removed=oi(e,n.from,n.to),o||(o=di(e,n)),e.cm?bl(e.cm,n,i):mr(e,n,i),Rs(e,o,$t),e.cantEdit&&Ta(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function bl(e,n,o){var i=e.doc,s=e.display,u=n.from,m=n.to,y=!1,x=u.line;e.options.lineWrapping||(x=S(jt(Xe(i,u.line))),i.iter(x,m.line+1,function(V){if(V==s.maxLine)return y=!0,!0})),i.sel.contains(n.from,n.to)>-1&&En(e),mr(i,n,o,Mo(e)),e.options.lineWrapping||(i.iter(x,u.line+n.text.length,function(V){var fe=Hi(V);fe>s.maxLineLength&&(s.maxLine=V,s.maxLineLength=fe,s.maxLineChanged=!0,y=!1)}),y&&(e.curOp.updateMaxLine=!0)),pr(i,u.line),Ho(e,400);var k=n.text.length-(m.line-u.line)-1;n.full?er(e):u.line==m.line&&n.text.length==1&&!ml(e.doc,n)?Ki(e,u.line,"text"):er(e,u.line,m.line+1,k);var I=ln(e,"changes"),F=ln(e,"change");if(F||I){var te={from:u,to:m,text:n.text,removed:n.removed,origin:n.origin};F&&Dn(e,"change",e,te),I&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(te)}e.display.selForContextMenu=null}function Vo(e,n,o,i,s){var u;i||(i=o),ze(i,o)<0&&(u=[i,o],o=u[0],i=u[1]),typeof n=="string"&&(n=e.splitLines(n)),Yo(e,{from:o,to:i,text:n,origin:s})}function Os(e,n,o,i){o<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function hi(e,n,o,i){for(var s=0;s<e.length;++s){var u=e[s],m=!0;if(u.ranges){u.copied||(u=e[s]=u.deepCopy(),u.copied=!0);for(var y=0;y<u.ranges.length;y++)Os(u.ranges[y].anchor,n,o,i),Os(u.ranges[y].head,n,o,i);continue}for(var x=0;x<u.changes.length;++x){var k=u.changes[x];if(o<k.from.line)k.from=de(k.from.line+i,k.from.ch),k.to=de(k.to.line+i,k.to.ch);else if(n<=k.to.line){m=!1;break}}m||(e.splice(0,s+1),s=0)}}function Ms(e,n){var o=n.from.line,i=n.to.line,s=n.text.length-(i-o)-1;hi(e.done,o,i,s),hi(e.undone,o,i,s)}function Zi(e,n,o,i){var s=n,u=n;return typeof n=="number"?u=Xe(e,Ya(e,n)):s=S(n),s==null?null:(i(u,s)&&e.cm&&Ki(e.cm,s,o),u)}function fi(e){this.lines=e,this.parent=null;for(var n=0,o=0;o<e.length;++o)e[o].parent=this,n+=e[o].height;this.height=n}fi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var o=e,i=e+n;o<i;++o){var s=this.lines[o];this.height-=s.height,Ul(s),Dn(s,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,o){this.height+=o,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,o){for(var i=e+n;e<i;++e)if(o(this.lines[e]))return!0}};function Xo(e){this.children=e;for(var n=0,o=0,i=0;i<e.length;++i){var s=e[i];n+=s.chunkSize(),o+=s.height,s.parent=this}this.size=n,this.height=o,this.parent=null}Xo.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var o=0;o<this.children.length;++o){var i=this.children[o],s=i.chunkSize();if(e<s){var u=Math.min(n,s-e),m=i.height;if(i.removeInner(e,u),this.height-=m-i.height,s==u&&(this.children.splice(o--,1),i.parent=null),(n-=u)==0)break;e=0}else e-=s}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof fi))){var y=[];this.collapse(y),this.children=[new fi(y)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,o){this.size+=n.length,this.height+=o;for(var i=0;i<this.children.length;++i){var s=this.children[i],u=s.chunkSize();if(e<=u){if(s.insertInner(e,n,o),s.lines&&s.lines.length>50){for(var m=s.lines.length%25+25,y=m;y<s.lines.length;){var x=new fi(s.lines.slice(y,y+=25));s.height-=x.height,this.children.splice(++i,0,x),x.parent=this}s.lines=s.lines.slice(0,m),this.maybeSpill()}break}e-=u}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),o=new Xo(n);if(e.parent){e.size-=o.size,e.height-=o.height;var s=Ge(e.parent.children,e);e.parent.children.splice(s+1,0,o)}else{var i=new Xo(e.children);i.parent=e,e.children=[i,o],e=i}o.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,o){for(var i=0;i<this.children.length;++i){var s=this.children[i],u=s.chunkSize();if(e<u){var m=Math.min(n,u-e);if(s.iterN(e,m,o))return!0;if((n-=m)==0)break;e=0}else e-=u}}};var Pi=function(e,n,o){if(o)for(var i in o)o.hasOwnProperty(i)&&(this[i]=o[i]);this.doc=e,this.node=n};Pi.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,o=this.line,i=S(o);if(!(i==null||!n)){for(var s=0;s<n.length;++s)n[s]==this&&n.splice(s--,1);n.length||(o.widgets=null);var u=Bi(this);On(o,Math.max(0,o.height-u)),e&&(Pn(e,function(){hu(e,o,-u),Ki(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},Pi.prototype.changed=function(){var e=this,n=this.height,o=this.doc.cm,i=this.line;this.height=null;var s=Bi(this)-n;s&&(li(this.doc,i)||On(i,i.height+s),o&&Pn(o,function(){o.curOp.forceUpdate=!0,hu(o,i,s),Dn(o,"lineWidgetChanged",o,e,S(i))}))},ar(Pi);function hu(e,n,o){Sn(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&ho(e,o)}function fu(e,n,o,i){var s=new Pi(e,o,i),u=e.cm;return u&&s.noHScroll&&(u.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var y=m.widgets||(m.widgets=[]);if(s.insertAt==null?y.push(s):y.splice(Math.min(y.length,Math.max(0,s.insertAt)),0,s),s.line=m,u&&!li(e,m)){var x=Sn(m)<e.scrollTop;On(m,m.height+Bi(s)),x&&ho(u,s.height),u.curOp.forceUpdate=!0}return!0}),u&&Dn(u,"lineWidgetAdded",u,s,typeof n=="number"?n:S(n)),s}var sn=0,mi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++sn};mi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&go(e),ln(this,"clear")){var o=this.find();o&&Dn(this,"clear",o.from,o.to)}for(var i=null,s=null,u=0;u<this.lines.length;++u){var m=this.lines[u],y=Io(m.markedSpans,this);e&&!this.collapsed?Ki(e,S(m),"text"):e&&(y.to!=null&&(s=S(m)),y.from!=null&&(i=S(m))),m.markedSpans=ea(m.markedSpans,y),y.from==null&&this.collapsed&&!li(this.doc,m)&&e&&On(m,Si(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var x=0;x<this.lines.length;++x){var k=jt(this.lines[x]),I=Hi(k);I>e.display.maxLineLength&&(e.display.maxLine=k,e.display.maxLineLength=I,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&er(e,i,s+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Dr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,s),n&&Gr(e),this.parent&&this.parent.clear()}},mi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var o,i,s=0;s<this.lines.length;++s){var u=this.lines[s],m=Io(u.markedSpans,this);if(m.from!=null&&(o=de(n?u:S(u),m.from),e==-1))return o;if(m.to!=null&&(i=de(n?u:S(u),m.to),e==1))return i}return o&&{from:o,to:i}},mi.prototype.changed=function(){var e=this,n=this.find(-1,!0),o=this,i=this.doc.cm;!n||!i||Pn(i,function(){var s=n.line,u=S(n.line),m=el(i,u);if(m&&(tl(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!li(o.doc,s)&&o.height!=null){var y=o.height;o.height=null;var x=Bi(o)-y;x&&On(s,s.height+x)}Dn(i,"markerChanged",i,e)})},mi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||Ge(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},mi.prototype.detachLine=function(e){if(this.lines.splice(Ge(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},ar(mi);function So(e,n,o,i,s){if(i&&i.shared)return wl(e,n,o,i,s);if(e.cm&&!e.cm.curOp)return cn(e.cm,So)(e,n,o,i,s);var u=new mi(e,s),m=ze(n,o);if(i&&Fe(i,u,!1),m>0||m==0&&u.clearWhenEmpty!==!1)return u;if(u.replacedWith&&(u.collapsed=!0,u.widgetNode=Q("span",[u.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||u.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(u.widgetNode.insertLeft=!0)),u.collapsed){if(bi(e,n.line,n,o,u)||n.line!=o.line&&bi(e,o.line,n,o,u))throw new Error("Inserting collapsed marker partially overlapping an existing one");so()}u.addToHistory&&ka(e,{from:n,to:o,origin:"markText"},e.sel,NaN);var y=n.line,x=e.cm,k;if(e.iter(y,o.line+1,function(F){x&&u.collapsed&&!x.options.lineWrapping&&jt(F)==x.display.maxLine&&(k=!0),u.collapsed&&y!=n.line&&On(F,0),Wi(F,new Or(u,y==n.line?n.ch:null,y==o.line?o.ch:null),e.cm&&e.cm.curOp),++y}),u.collapsed&&e.iter(n.line,o.line+1,function(F){li(e,F)&&On(F,0)}),u.clearOnEnter&&nt(u,"beforeCursorEnter",function(){return u.clear()}),u.readOnly&&(Ro(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),u.collapsed&&(u.id=++sn,u.atomic=!0),x){if(k&&(x.curOp.updateMaxLine=!0),u.collapsed)er(x,n.line,o.line+1);else if(u.className||u.startStyle||u.endStyle||u.css||u.attributes||u.title)for(var I=n.line;I<=o.line;I++)Ki(x,I,"text");u.atomic&&Dr(x.doc),Dn(x,"markerAdded",x,u)}return u}var Qo=function(e,n){this.markers=e,this.primary=n;for(var o=0;o<e.length;++o)e[o].parent=this};Qo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Qo.prototype.find=function(e,n){return this.primary.find(e,n)},ar(Qo);function wl(e,n,o,i,s){i=Fe(i),i.shared=!1;var u=[So(e,n,o,i,s)],m=u[0],y=i.widgetNode;return jn(e,function(x){y&&(i.widgetNode=y.cloneNode(!0)),u.push(So(x,ft(x,n),ft(x,o),i,s));for(var k=0;k<x.linked.length;++k)if(x.linked[k].isParent)return;m=Ke(u)}),new Qo(u,m)}function kl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function Zo(e,n){for(var o=0;o<n.length;o++){var i=n[o],s=i.find(),u=e.clipPos(s.from),m=e.clipPos(s.to);if(ze(u,m)){var y=So(e,u,m,i.primary,i.primary.type);i.markers.push(y),y.parent=i}}}function dn(e){for(var n=function(i){var s=e[i],u=[s.primary.doc];jn(s.primary.doc,function(x){return u.push(x)});for(var m=0;m<s.markers.length;m++){var y=s.markers[m];Ge(u,y.doc)==-1&&(y.parent=null,s.markers.splice(m--,1))}},o=0;o<e.length;o++)n(o)}var Hn=0,It=function(e,n,o,i,s){if(!(this instanceof It))return new It(e,n,o,i,s);o==null&&(o=0),Xo.call(this,[new fi([new wi("",null)])]),this.first=o,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=o;var u=de(o,0);this.sel=zn(u),this.history=new ba(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=s=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),mr(this,{from:u,to:u,text:e}),Wn(this,zn(u),$t)};It.prototype=me(Xo.prototype,{constructor:It,iter:function(e,n,o){o?this.iterN(e-this.first,n-e,o):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var o=0,i=0;i<n.length;++i)o+=n[i].height;this.insertInner(e-this.first,n,o)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cr(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:gn(function(e){var n=de(this.first,0),o=this.first+this.size-1;Yo(this,{from:n,to:de(o,Xe(this,o).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&ma(this.cm,0,0),Wn(this,zn(n),$t)}),replaceRange:function(e,n,o,i){n=ft(this,n),o=o?ft(this,o):n,Vo(this,e,n,o,i)},getRange:function(e,n,o){var i=oi(this,ft(this,e),ft(this,n));return o===!1?i:o===""?i.join(""):i.join(o||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(he(this,e))return Xe(this,e)},getLineNumber:function(e){return S(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Xe(this,e)),jt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ft(this,e)},getCursor:function(e){var n=this.sel.primary(),o;return e==null||e=="head"?o=n.head:e=="anchor"?o=n.anchor:e=="end"||e=="to"||e===!1?o=n.to():o=n.from(),o},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:gn(function(e,n,o){$o(this,ft(this,typeof e=="number"?de(e,n||0):e),null,o)}),setSelection:gn(function(e,n,o){$o(this,ft(this,e),ft(this,n||e),o)}),extendSelection:gn(function(e,n,o){_a(this,ft(this,e),n&&ft(this,n),o)}),extendSelections:gn(function(e,n){Ca(this,Zs(this,e),n)}),extendSelectionsBy:gn(function(e,n){var o=vt(this.sel.ranges,e);Ca(this,Zs(this,o),n)}),setSelections:gn(function(e,n,o){if(e.length){for(var i=[],s=0;s<e.length;s++)i[s]=new Lt(ft(this,e[s].anchor),ft(this,e[s].head||e[s].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,Pr(this.cm,i,n),o)}}),addSelection:gn(function(e,n,o){var i=this.sel.ranges.slice(0);i.push(new Lt(ft(this,e),ft(this,n||e))),Wn(this,Pr(this.cm,i,i.length-1),o)}),getSelection:function(e){for(var n=this.sel.ranges,o,i=0;i<n.length;i++){var s=oi(this,n[i].from(),n[i].to());o=o?o.concat(s):s}return e===!1?o:o.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],o=this.sel.ranges,i=0;i<o.length;i++){var s=oi(this,o[i].from(),o[i].to());e!==!1&&(s=s.join(e||this.lineSeparator())),n[i]=s}return n},replaceSelection:function(e,n,o){for(var i=[],s=0;s<this.sel.ranges.length;s++)i[s]=e;this.replaceSelections(i,n,o||"+input")},replaceSelections:gn(function(e,n,o){for(var i=[],s=this.sel,u=0;u<s.ranges.length;u++){var m=s.ranges[u];i[u]={from:m.from(),to:m.to(),text:this.splitLines(e[u]),origin:o}}for(var y=n&&n!="end"&&Uo(this,i,n),x=i.length-1;x>=0;x--)Yo(this,i[x]);y?vl(this,y):this.cm&&zo(this.cm)}),undo:gn(function(){pi(this,"undo")}),redo:gn(function(){pi(this,"redo")}),undoSelection:gn(function(){pi(this,"undo",!0)}),redoSelection:gn(function(){pi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,o=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var s=0;s<e.undone.length;s++)e.undone[s].ranges||++o;return{undo:n,redo:o}},clearHistory:function(){var e=this;this.history=new ba(this.history),jn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ko(this.history.done),undone:Ko(this.history.undone)}},setHistory:function(e){var n=this.history=new ba(this.history);n.done=Ko(e.done.slice(0),null,!0),n.undone=Ko(e.undone.slice(0),null,!0)},setGutterMarker:gn(function(e,n,o){return Zi(this,e,"gutter",function(i){var s=i.gutterMarkers||(i.gutterMarkers={});return s[n]=o,!o&&qe(s)&&(i.gutterMarkers=null),!0})}),clearGutter:gn(function(e){var n=this;this.iter(function(o){o.gutterMarkers&&o.gutterMarkers[e]&&Zi(n,o,"gutter",function(){return o.gutterMarkers[e]=null,qe(o.gutterMarkers)&&(o.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!he(this,e)||(n=e,e=Xe(this,e),!e))return null}else if(n=S(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:gn(function(e,n,o){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var s=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[s])i[s]=o;else{if(q(o).test(i[s]))return!1;i[s]+=" "+o}return!0})}),removeLineClass:gn(function(e,n,o){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var s=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",u=i[s];if(u)if(o==null)i[s]=null;else{var m=u.match(q(o));if(!m)return!1;var y=m.index+m[0].length;i[s]=u.slice(0,m.index)+(!m.index||y==u.length?"":" ")+u.slice(y)||null}else return!1;return!0})}),addLineWidget:gn(function(e,n,o){return fu(this,e,n,o)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,o){return So(this,ft(this,e),ft(this,n),o,o&&o.type||"range")},setBookmark:function(e,n){var o={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=ft(this,e),So(this,e,e,o,"bookmark")},findMarksAt:function(e){e=ft(this,e);var n=[],o=Xe(this,e.line).markedSpans;if(o)for(var i=0;i<o.length;++i){var s=o[i];(s.from==null||s.from<=e.ch)&&(s.to==null||s.to>=e.ch)&&n.push(s.marker.parent||s.marker)}return n},findMarks:function(e,n,o){e=ft(this,e),n=ft(this,n);var i=[],s=e.line;return this.iter(e.line,n.line+1,function(u){var m=u.markedSpans;if(m)for(var y=0;y<m.length;y++){var x=m[y];!(x.to!=null&&s==e.line&&e.ch>=x.to||x.from==null&&s!=e.line||x.from!=null&&s==n.line&&x.from>=n.ch)&&(!o||o(x.marker))&&i.push(x.marker.parent||x.marker)}++s}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var o=n.markedSpans;if(o)for(var i=0;i<o.length;++i)o[i].from!=null&&e.push(o[i].marker)}),e},posFromIndex:function(e){var n,o=this.first,i=this.lineSeparator().length;return this.iter(function(s){var u=s.text.length+i;if(u>e)return n=e,!0;e-=u,++o}),ft(this,de(o,n))},indexFromPos:function(e){e=ft(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var o=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+o}),n},copy:function(e){var n=new It(cr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,o=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<o&&(o=e.to);var i=new It(cr(this,n,o),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Zo(i,kl(this)),i},unlinkDoc:function(e){if(e instanceof Xt&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var o=this.linked[n];if(o.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),dn(kl(this));break}}if(e.history==this.history){var i=[e.id];jn(e,function(s){return i.push(s.id)},!0),e.history=new ba(null),e.history.done=Ko(this.history.done,i),e.history.undone=Ko(this.history.undone,i)}},iterLinkedDocs:function(e){jn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ur(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:gn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&bc(this.cm))})}),It.prototype.eachLine=It.prototype.iter;var Ea=0;function La(e){var n=this;if(Zn(n),!(Rt(n,e)||Ui(n.display,e))){bn(e),_&&(Ea=+new Date);var o=co(n,e,!0),i=e.dataTransfer.files;if(!(!o||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var s=i.length,u=Array(s),m=0,y=function(){++m==s&&cn(n,function(){o=ft(n.doc,o);var V={from:o,to:o,text:n.doc.splitLines(u.filter(function(fe){return fe!=null}).join(n.doc.lineSeparator())),origin:"paste"};Yo(n.doc,V),vl(n.doc,zn(ft(n.doc,o),ft(n.doc,Fn(V))))})()},x=function(V,fe){if(n.options.allowDropFileTypes&&Ge(n.options.allowDropFileTypes,V.type)==-1){y();return}var ye=new FileReader;ye.onerror=function(){return y()},ye.onload=function(){var Pe=ye.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Pe)){y();return}u[fe]=Pe,y()},ye.readAsText(V)},k=0;k<i.length;k++)x(i[k],k);else{if(n.state.draggingText&&n.doc.sel.contains(o)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var I=e.dataTransfer.getData("Text");if(I){var F;if(n.state.draggingText&&!n.state.draggingText.copy&&(F=n.listSelections()),Rs(n.doc,zn(o,o)),F)for(var te=0;te<F.length;++te)Vo(n.doc,"",F[te].anchor,F[te].head,"drag");n.replaceSelection(I,"around","paste"),n.display.input.focus()}}catch{}}}}function Pa(e,n){if(_&&(!e.state.draggingText||+new Date-Ea<100)){lr(n);return}if(!(Rt(e,n)||Ui(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!J)){var o=C("img",null,null,"position: fixed; left: 0; top: 0;");o.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",ne&&(o.width=o.height=1,e.display.wrapper.appendChild(o),o._top=o.offsetTop),n.dataTransfer.setDragImage(o,0,0),ne&&o.parentNode.removeChild(o)}}function Kd(e,n){var o=co(e,n);if(o){var i=document.createDocumentFragment();pa(e,o,i),e.display.dragCursor||(e.display.dragCursor=C("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ve(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Sl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),o=[],i=0;i<n.length;i++){var s=n[i].CodeMirror;s&&o.push(s)}o.length&&o[0].operation(function(){for(var u=0;u<o.length;u++)e(o[u])})}}var _l=!1;function mu(){_l||(ji(),_l=!0)}function ji(){var e;nt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Sl(Vr)},100))}),nt(window,"blur",function(){return Sl(Wt)})}function Vr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Jo=0;Jo<10;Jo++)Xr[Jo+48]=Xr[Jo+96]=String(Jo);for(var Ds=65;Ds<=90;Ds++)Xr[Ds]=String.fromCharCode(Ds);for(var zs=1;zs<=12;zs++)Xr[zs+111]=Xr[zs+63235]="F"+zs;var Ai={};Ai.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ai.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ai.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ai.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ai.default=se?Ai.macDefault:Ai.pcDefault;function _c(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var o,i,s,u,m=0;m<n.length-1;m++){var y=n[m];if(/^(cmd|meta|m)$/i.test(y))u=!0;else if(/^a(lt)?$/i.test(y))o=!0;else if(/^(c|ctrl|control)$/i.test(y))i=!0;else if(/^s(hift)?$/i.test(y))s=!0;else throw new Error("Unrecognized modifier name: "+y)}return o&&(e="Alt-"+e),i&&(e="Ctrl-"+e),u&&(e="Cmd-"+e),s&&(e="Shift-"+e),e}function Cc(e){var n={};for(var o in e)if(e.hasOwnProperty(o)){var i=e[o];if(/^(name|fallthrough|(de|at)tach)$/.test(o))continue;if(i=="..."){delete e[o];continue}for(var s=vt(o.split(" "),_c),u=0;u<s.length;u++){var m=void 0,y=void 0;u==s.length-1?(y=s.join(" "),m=i):(y=s.slice(0,u+1).join(" "),m="...");var x=n[y];if(!x)n[y]=m;else if(x!=m)throw new Error("Inconsistent bindings for "+y)}delete e[o]}for(var k in n)e[k]=n[k];return e}function es(e,n,o,i){n=_o(n);var s=n.call?n.call(e,i):n[e];if(s===!1)return"nothing";if(s==="...")return"multi";if(s!=null&&o(s))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return es(e,n.fallthrough,o,i);for(var u=0;u<n.fallthrough.length;u++){var m=es(e,n.fallthrough[u],o,i);if(m)return m}}}function gu(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function yu(e,n,o){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(We?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(We?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!o&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function vu(e,n){if(ne&&e.keyCode==34&&e.char)return!1;var o=Xr[e.keyCode];return o==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(o=e.code),yu(o,e,n))}function _o(e){return typeof e=="string"?Ai[e]:e}function ts(e,n){for(var o=e.doc.sel.ranges,i=[],s=0;s<o.length;s++){for(var u=n(o[s]);i.length&&ze(u.from,Ke(i).to)<=0;){var m=i.pop();if(ze(m.from,u.from)<0){u.from=m.from;break}}i.push(u)}Pn(e,function(){for(var y=i.length-1;y>=0;y--)Vo(e.doc,"",i[y].from,i[y].to,"+delete");zo(e)})}function Fs(e,n,o){var i=fn(e.text,n+o,o);return i<0||i>e.text.length?null:i}function Ws(e,n,o){var i=Fs(e,n.ch,o);return i==null?null:new de(n.line,i,o<0?"after":"before")}function Cl(e,n,o,i,s){if(e){n.doc.direction=="rtl"&&(s=-s);var u=gt(o,n.doc.direction);if(u){var m=s<0?Ke(u):u[0],y=s<0==(m.level==1),x=y?"after":"before",k;if(m.level>0||n.doc.direction=="rtl"){var I=ki(n,o);k=s<0?o.text.length-1:0;var F=Lr(n,I,k).top;k=Xn(function(te){return Lr(n,I,te).top==F},s<0==(m.level==1)?m.from:m.to-1,k),x=="before"&&(k=Fs(o,k,1))}else k=s<0?m.to:m.from;return new de(i,k,x)}}return new de(i,s<0?o.text.length:0,s<0?"before":"after")}function xu(e,n,o,i){var s=gt(n,e.doc.direction);if(!s)return Ws(n,o,i);o.ch>=n.text.length?(o.ch=n.text.length,o.sticky="before"):o.ch<=0&&(o.ch=0,o.sticky="after");var u=sr(s,o.ch,o.sticky),m=s[u];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>o.ch:m.from<o.ch))return Ws(n,o,i);var y=function(Ne,Oe){return Fs(n,Ne instanceof de?Ne.ch:Ne,Oe)},x,k=function(Ne){return e.options.lineWrapping?(x=x||ki(e,n),iu(e,n,x,Ne)):{begin:0,end:n.text.length}},I=k(o.sticky=="before"?y(o,-1):o.ch);if(e.doc.direction=="rtl"||m.level==1){var F=m.level==1==i<0,te=y(o,F?1:-1);if(te!=null&&(F?te<=m.to&&te<=I.end:te>=m.from&&te>=I.begin)){var V=F?"before":"after";return new de(o.line,te,V)}}var fe=function(Ne,Oe,Re){for(var Be=function(Ct,Bn){return Bn?new de(o.line,y(Ct,1),"before"):new de(o.line,Ct,"after")};Ne>=0&&Ne<s.length;Ne+=Oe){var st=s[Ne],Ye=Oe>0==(st.level!=1),wt=Ye?Re.begin:y(Re.end,-1);if(st.from<=wt&&wt<st.to||(wt=Ye?st.from:y(st.to,-1),Re.begin<=wt&&wt<Re.end))return Be(wt,Ye)}},ye=fe(u+i,i,I);if(ye)return ye;var Pe=i>0?I.end:y(I.begin,-1);return Pe!=null&&!(i>0&&Pe==n.text.length)&&(ye=fe(i>0?0:s.length-1,i,k(Pe)),ye)?ye:null}var Hs={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),$t)},killLine:function(e){return ts(e,function(n){if(n.empty()){var o=Xe(e.doc,n.head.line).text.length;return n.head.ch==o&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,o)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ts(e,function(n){return{from:de(n.from().line,0),to:ft(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return ts(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ts(e,function(n){var o=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:o},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ts(e,function(n){var o=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:o},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return bu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return wu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Tc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var o=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:o},"div")},et)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var o=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:o},"div")},et)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var o=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:o},"div");return i.ch<e.getLine(i.line).search(/\S/)?wu(e,n.head):i},et)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],o=e.listSelections(),i=e.options.tabSize,s=0;s<o.length;s++){var u=o[s].from(),m=He(e.getLine(u.line),u.ch,i);n.push(Zt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Pn(e,function(){for(var n=e.listSelections(),o=[],i=0;i<n.length;i++)if(n[i].empty()){var s=n[i].head,u=Xe(e.doc,s.line).text;if(u){if(s.ch==u.length&&(s=new de(s.line,s.ch-1)),s.ch>0)s=new de(s.line,s.ch+1),e.replaceRange(u.charAt(s.ch-1)+u.charAt(s.ch-2),de(s.line,s.ch-2),s,"+transpose");else if(s.line>e.doc.first){var m=Xe(e.doc,s.line-1).text;m&&(s=new de(s.line,1),e.replaceRange(u.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(s.line-1,m.length-1),s,"+transpose"))}}o.push(new Lt(s,s))}e.setSelections(o)})},newlineAndIndent:function(e){return Pn(e,function(){for(var n=e.listSelections(),o=n.length-1;o>=0;o--)e.replaceRange(e.doc.lineSeparator(),n[o].anchor,n[o].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);zo(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function bu(e,n){var o=Xe(e.doc,n),i=jt(o);return i!=o&&(n=S(i)),Cl(!0,e,i,n,1)}function Tc(e,n){var o=Xe(e.doc,n),i=ys(o);return i!=o&&(n=S(i)),Cl(!0,e,o,n,-1)}function wu(e,n){var o=bu(e,n.line),i=Xe(e.doc,o.line),s=gt(i,e.doc.direction);if(!s||s[0].level==0){var u=Math.max(o.ch,i.text.search(/\S/)),m=n.line==o.line&&n.ch<=u&&n.ch;return de(o.line,m?0:u,o.sticky)}return o}function Bs(e,n,o){if(typeof n=="string"&&(n=Hs[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,s=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),o&&(e.display.shift=!1),s=n(e)!=Qt}finally{e.display.shift=i,e.state.suppressEdits=!1}return s}function Nc(e,n,o){for(var i=0;i<e.state.keyMaps.length;i++){var s=es(n,e.state.keyMaps[i],o,e);if(s)return s}return e.options.extraKeys&&es(n,e.options.extraKeys,o,e)||es(n,e.options.keyMap,o,e)}var Ec=new tt;function Us(e,n,o,i){var s=e.state.keySeq;if(s){if(gu(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Ec.set(50,function(){e.state.keySeq==s&&(e.state.keySeq=null,e.display.input.reset())}),Lc(e,s+" "+n,o,i))return!0}return Lc(e,n,o,i)}function Lc(e,n,o,i){var s=Nc(e,n,i);return s=="multi"&&(e.state.keySeq=n),s=="handled"&&Dn(e,"keyHandled",e,n,o),(s=="handled"||s=="multi")&&(bn(o),Do(e)),!!s}function ku(e,n){var o=vu(n,!0);return o?n.shiftKey&&!e.state.keySeq?Us(e,"Shift-"+o,n,function(i){return Bs(e,i,!0)})||Us(e,o,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Bs(e,i)}):Us(e,o,n,function(i){return Bs(e,i)}):!1}function $d(e,n,o){return Us(e,"'"+o+"'",n,function(i){return Bs(e,i,!0)})}var Su=null;function _u(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=O(Je(n)),!Rt(n,e))){_&&P<11&&e.keyCode==27&&(e.returnValue=!1);var o=e.keyCode;n.display.shift=o==16||e.shiftKey;var i=ku(n,e);ne&&(Su=i?o:null,!i&&o==88&&!Po&&(se?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),b&&!se&&!i&&o==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),o==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Pc(n)}}function Pc(e){var n=e.display.lineDiv;Y(n,"CodeMirror-crosshair");function o(i){(i.keyCode==18||!i.altKey)&&(Ee(n,"CodeMirror-crosshair"),Gt(document,"keyup",o),Gt(document,"mouseover",o))}nt(document,"keyup",o),nt(document,"mouseover",o)}function Cu(e){e.keyCode==16&&(this.doc.sel.shift=!1),Rt(this,e)}function ja(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(Ui(n.display,e)||Rt(n,e)||e.ctrlKey&&!e.altKey||se&&e.metaKey)){var o=e.keyCode,i=e.charCode;if(ne&&o==Su){Su=null,bn(e);return}if(!(ne&&(!e.which||e.which<10)&&ku(n,e))){var s=String.fromCharCode(i??o);s!="\b"&&($d(n,e,s)||n.display.input.onKeyPress(e))}}}var Gd=400,Tu=function(e,n,o){this.time=e,this.pos=n,this.button=o};Tu.prototype.compare=function(e,n,o){return this.time+Gd>e&&ze(n,this.pos)==0&&o==this.button};var Aa,gr;function Nu(e,n){var o=+new Date;return gr&&gr.compare(o,e,n)?(Aa=gr=null,"triple"):Aa&&Aa.compare(o,e,n)?(gr=new Tu(o,e,n),Aa=null,"double"):(Aa=new Tu(o,e,n),gr=null,"single")}function Ra(e){var n=this,o=n.display;if(!(Rt(n,e)||o.activeTouch&&o.input.supportsTouch())){if(o.input.ensurePolled(),o.shift=e.shiftKey,Ui(o,e)){A||(o.scroller.draggable=!1,setTimeout(function(){return o.scroller.draggable=!0},100));return}if(!Tl(n,e)){var i=co(n,e),s=Ln(e),u=i?Nu(i,s):"single";we(n).focus(),s==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&jc(n,s,i,u,e))&&(s==1?i?Rc(n,i,u,e):Hr(e)==o.scroller&&bn(e):s==2?(i&&_a(n.doc,i),setTimeout(function(){return o.input.focus()},20)):s==3&&(_e?n.display.input.onContextMenu(e):ul(n)))}}}function jc(e,n,o,i,s){var u="Click";return i=="double"?u="Double"+u:i=="triple"&&(u="Triple"+u),u=(n==1?"Left":n==2?"Middle":"Right")+u,Us(e,yu(u,s),s,function(m){if(typeof m=="string"&&(m=Hs[m]),!m)return!1;var y=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),y=m(e,o)!=Qt}finally{e.state.suppressEdits=!1}return y})}function Ac(e,n,o){var i=e.getOption("configureMouse"),s=i?i(e,n,o):{};if(s.unit==null){var u=ge?o.shiftKey&&o.metaKey:o.altKey;s.unit=u?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(s.extend==null||e.doc.extend)&&(s.extend=e.doc.extend||o.shiftKey),s.addNew==null&&(s.addNew=se?o.metaKey:o.ctrlKey),s.moveOnDrag==null&&(s.moveOnDrag=!(se?o.altKey:o.ctrlKey)),s}function Rc(e,n,o,i){_?setTimeout(Ie(mc,e),0):e.curOp.focus=O(Je(e));var s=Ac(e,o,i),u=e.doc.sel,m;e.options.dragDrop&&Tr&&!e.isReadOnly()&&o=="single"&&(m=u.contains(n))>-1&&(ze((m=u.ranges[m]).from(),n)<0||n.xRel>0)&&(ze(m.to(),n)>0||n.xRel<0)?Eu(e,i,n,s):Lu(e,i,n,s)}function Eu(e,n,o,i){var s=e.display,u=!1,m=cn(e,function(k){A&&(s.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:ul(e)),Gt(s.wrapper.ownerDocument,"mouseup",m),Gt(s.wrapper.ownerDocument,"mousemove",y),Gt(s.scroller,"dragstart",x),Gt(s.scroller,"drop",m),u||(bn(k),i.addNew||_a(e.doc,o,null,null,i.extend),A&&!J||_&&P==9?setTimeout(function(){s.wrapper.ownerDocument.body.focus({preventScroll:!0}),s.input.focus()},20):s.input.focus())}),y=function(k){u=u||Math.abs(n.clientX-k.clientX)+Math.abs(n.clientY-k.clientY)>=10},x=function(){return u=!0};A&&(s.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,nt(s.wrapper.ownerDocument,"mouseup",m),nt(s.wrapper.ownerDocument,"mousemove",y),nt(s.scroller,"dragstart",x),nt(s.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return s.input.focus()},20),s.scroller.dragDrop&&s.scroller.dragDrop()}function ns(e,n,o){if(o=="char")return new Lt(n,n);if(o=="word")return e.findWordAt(n);if(o=="line")return new Lt(de(n.line,0),ft(e.doc,de(n.line+1,0)));var i=o(e,n);return new Lt(i.from,i.to)}function Lu(e,n,o,i){_&&ul(e);var s=e.display,u=e.doc;bn(n);var m,y,x=u.sel,k=x.ranges;if(i.addNew&&!i.extend?(y=u.sel.contains(o),y>-1?m=k[y]:m=new Lt(o,o)):(m=u.sel.primary(),y=u.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new Lt(o,o)),o=co(e,n,!0,!0),y=-1;else{var I=ns(e,o,i.unit);i.extend?m=bo(m,I.anchor,I.head,i.extend):m=I}i.addNew?y==-1?(y=k.length,Wn(u,Pr(e,k.concat([m]),y),{scroll:!1,origin:"*mouse"})):k.length>1&&k[y].empty()&&i.unit=="char"&&!i.extend?(Wn(u,Pr(e,k.slice(0,y).concat(k.slice(y+1)),0),{scroll:!1,origin:"*mouse"}),x=u.sel):As(u,y,m,hn):(y=0,Wn(u,new Yn([m],0),hn),x=u.sel);var F=o;function te(Re){if(ze(F,Re)!=0)if(F=Re,i.unit=="rectangle"){for(var Be=[],st=e.options.tabSize,Ye=He(Xe(u,o.line).text,o.ch,st),wt=He(Xe(u,Re.line).text,Re.ch,st),Ct=Math.min(Ye,wt),Bn=Math.max(Ye,wt),nn=Math.min(o.line,Re.line),vr=Math.min(e.lastLine(),Math.max(o.line,Re.line));nn<=vr;nn++){var rr=Xe(u,nn).text,yn=bt(rr,Ct,st);Ct==Bn?Be.push(new Lt(de(nn,yn),de(nn,yn))):rr.length>yn&&Be.push(new Lt(de(nn,yn),de(nn,bt(rr,Bn,st))))}Be.length||Be.push(new Lt(o,o)),Wn(u,Pr(e,x.ranges.slice(0,y).concat(Be),y),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Re)}else{var xr=m,Tn=ns(e,Re,i.unit),vn=xr.anchor,Mt;ze(Tn.anchor,vn)>0?(Mt=Tn.head,vn=si(xr.from(),Tn.anchor)):(Mt=Tn.anchor,vn=kn(xr.to(),Tn.head));var ct=x.ranges.slice(0);ct[y]=Pu(e,new Lt(ft(u,vn),Mt)),Wn(u,Pr(e,ct,y),hn)}}var V=s.wrapper.getBoundingClientRect(),fe=0;function ye(Re){var Be=++fe,st=co(e,Re,!0,i.unit=="rectangle");if(st)if(ze(st,F)!=0){e.curOp.focus=O(Je(e)),te(st);var Ye=po(s,u);(st.line>=Ye.to||st.line<Ye.from)&&setTimeout(cn(e,function(){fe==Be&&ye(Re)}),150)}else{var wt=Re.clientY<V.top?-20:Re.clientY>V.bottom?20:0;wt&&setTimeout(cn(e,function(){fe==Be&&(s.scroller.scrollTop+=wt,ye(Re))}),50)}}function Pe(Re){e.state.selectingText=!1,fe=1/0,Re&&(bn(Re),s.input.focus()),Gt(s.wrapper.ownerDocument,"mousemove",Ne),Gt(s.wrapper.ownerDocument,"mouseup",Oe),u.history.lastSelOrigin=null}var Ne=cn(e,function(Re){Re.buttons===0||!Ln(Re)?Pe(Re):ye(Re)}),Oe=cn(e,Pe);e.state.selectingText=Oe,nt(s.wrapper.ownerDocument,"mousemove",Ne),nt(s.wrapper.ownerDocument,"mouseup",Oe)}function Pu(e,n){var o=n.anchor,i=n.head,s=Xe(e.doc,o.line);if(ze(o,i)==0&&o.sticky==i.sticky)return n;var u=gt(s);if(!u)return n;var m=sr(u,o.ch,o.sticky),y=u[m];if(y.from!=o.ch&&y.to!=o.ch)return n;var x=m+(y.from==o.ch==(y.level!=1)?0:1);if(x==0||x==u.length)return n;var k;if(i.line!=o.line)k=(i.line-o.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var I=sr(u,i.ch,i.sticky),F=I-m||(i.ch-o.ch)*(y.level==1?-1:1);I==x-1||I==x?k=F<0:k=F>0}var te=u[x+(k?-1:0)],V=k==(te.level==1),fe=V?te.from:te.to,ye=V?"after":"before";return o.ch==fe&&o.sticky==ye?n:new Lt(new de(o.line,fe,ye),i)}function Ic(e,n,o,i){var s,u;if(n.touches)s=n.touches[0].clientX,u=n.touches[0].clientY;else try{s=n.clientX,u=n.clientY}catch{return!1}if(s>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&bn(n);var m=e.display,y=m.lineDiv.getBoundingClientRect();if(u>y.bottom||!ln(e,o))return In(n);u-=y.top-m.viewOffset;for(var x=0;x<e.display.gutterSpecs.length;++x){var k=m.gutters.childNodes[x];if(k&&k.getBoundingClientRect().right>=s){var I=z(e.doc,u),F=e.display.gutterSpecs[x];return At(e,o,e,I,F.className,n),In(n)}}}function Tl(e,n){return Ic(e,n,"gutterClick",!0)}function ju(e,n){Ui(e.display,n)||Oc(e,n)||Rt(e,n,"contextmenu")||_e||e.display.input.onContextMenu(n)}function Oc(e,n){return ln(e,"gutterContextMenu")?Ic(e,n,"gutterContextMenu",!1):!1}function Au(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),xs(e)}var rs={toString:function(){return"CodeMirror.Init"}},Mc={},Jn={};function yr(e){var n=e.optionHandlers;function o(i,s,u,m){e.defaults[i]=s,u&&(n[i]=m?function(y,x,k){k!=rs&&u(y,x,k)}:u)}e.defineOption=o,e.Init=rs,o("value","",function(i,s){return i.setValue(s)},!0),o("mode",null,function(i,s){i.doc.modeOption=s,fl(i)},!0),o("indentUnit",2,fl,!0),o("indentWithTabs",!1),o("smartIndent",!0),o("tabSize",4,function(i){qo(i),xs(i),er(i)},!0),o("lineSeparator",null,function(i,s){if(i.doc.lineSep=s,!!s){var u=[],m=i.doc.first;i.doc.iter(function(x){for(var k=0;;){var I=x.text.indexOf(s,k);if(I==-1)break;k=I+s.length,u.push(de(m,I))}m++});for(var y=u.length-1;y>=0;y--)Vo(i.doc,s,u[y],de(u[y].line,u[y].ch+s.length))}}),o("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,s,u){i.state.specialChars=new RegExp(s.source+(s.test("	")?"":"|	"),"g"),u!=rs&&i.refresh()}),o("specialCharPlaceholder",Td,function(i){return i.refresh()},!0),o("electricChars",!0),o("inputStyle",$?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),o("spellcheck",!1,function(i,s){return i.getInputField().spellcheck=s},!0),o("autocorrect",!1,function(i,s){return i.getInputField().autocorrect=s},!0),o("autocapitalize",!1,function(i,s){return i.getInputField().autocapitalize=s},!0),o("rtlMoveVisually",!ie),o("wholeLineUpdateBefore",!0),o("theme","default",function(i){Au(i),Mr(i)},!0),o("keyMap","default",function(i,s,u){var m=_o(s),y=u!=rs&&_o(u);y&&y.detach&&y.detach(i,m),m.attach&&m.attach(i,y||null)}),o("extraKeys",null),o("configureMouse",null),o("lineWrapping",!1,zc,!0),o("gutters",[],function(i,s){i.display.gutterSpecs=Es(s,i.options.lineNumbers),Mr(i)},!0),o("fixedGutter",!0,function(i,s){i.display.gutters.style.left=s?ks(i.display)+"px":"0",i.refresh()},!0),o("coverGutterNextToScrollbar",!1,function(i){return Wo(i)},!0),o("scrollbarStyle","native",function(i){pl(i),Wo(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),o("lineNumbers",!1,function(i,s){i.display.gutterSpecs=Es(i.options.gutters,s),Mr(i)},!0),o("firstLineNumber",1,Mr,!0),o("lineNumberFormatter",function(i){return i},Mr,!0),o("showCursorWhenSelecting",!1,$r,!0),o("resetSelectionOnContextMenu",!0),o("lineWiseCopyCut",!0),o("pasteLinesPerSelection",!0),o("selectionsMayTouch",!1),o("readOnly",!1,function(i,s){s=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(s)}),o("screenReaderLabel",null,function(i,s){s=s===""?null:s,i.display.input.screenReaderLabelChanged(s)}),o("disableInput",!1,function(i,s){s||i.display.input.reset()},!0),o("dragDrop",!0,Dc),o("allowDropFileTypes",null),o("cursorBlinkRate",530),o("cursorScrollMargin",0),o("cursorHeight",1,$r,!0),o("singleCursorHeightPerLine",!0,$r,!0),o("workTime",100),o("workDelay",100),o("flattenSpans",!0,qo,!0),o("addModeClass",!1,qo,!0),o("pollInterval",100),o("undoDepth",200,function(i,s){return i.doc.history.undoDepth=s}),o("historyEventDelay",1250),o("viewportMargin",10,function(i){return i.refresh()},!0),o("maxHighlightLength",1e4,qo,!0),o("moveInputWithCursor",!0,function(i,s){s||i.display.input.resetPosition()}),o("tabindex",null,function(i,s){return i.display.input.getField().tabIndex=s||""}),o("autofocus",null),o("direction","ltr",function(i,s){return i.doc.setDirection(s)},!0),o("phrases",null)}function Dc(e,n,o){var i=o&&o!=rs;if(!n!=!i){var s=e.display.dragFunctions,u=n?nt:Gt;u(e.display.scroller,"dragstart",s.start),u(e.display.scroller,"dragenter",s.enter),u(e.display.scroller,"dragover",s.over),u(e.display.scroller,"dragleave",s.leave),u(e.display.scroller,"drop",s.drop)}}function zc(e){e.options.lineWrapping?(Y(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ee(e.display.wrapper,"CodeMirror-wrap"),na(e)),ca(e),er(e),xs(e),setTimeout(function(){return Wo(e)},100)}function Xt(e,n){var o=this;if(!(this instanceof Xt))return new Xt(e,n);this.options=n=n?Fe(n):{},Fe(Mc,n,!1);var i=n.value;typeof i=="string"?i=new It(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var s=new Xt.inputStyles[n.inputStyle](this),u=this.display=new hl(e,i,s,n);u.wrapper.CodeMirror=this,Au(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),pl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!$&&u.input.focus(),_&&P<11&&setTimeout(function(){return o.display.input.reset(!0)},20),Fc(this),mu(),go(this),this.curOp.forceUpdate=!0,tn(this,i),n.autofocus&&!$||this.hasFocus()?setTimeout(function(){o.hasFocus()&&!o.state.focused&&cl(o)},20):Wt(this);for(var m in Jn)Jn.hasOwnProperty(m)&&Jn[m](this,n[m],rs);uu(this),n.finishInit&&n.finishInit(this);for(var y=0;y<Nl.length;++y)Nl[y](this);Gr(this),A&&n.lineWrapping&&getComputedStyle(u.lineDiv).textRendering=="optimizelegibility"&&(u.lineDiv.style.textRendering="auto")}Xt.defaults=Mc,Xt.optionHandlers=Jn;function Fc(e){var n=e.display;nt(n.scroller,"mousedown",cn(e,Ra)),_&&P<11?nt(n.scroller,"dblclick",cn(e,function(x){if(!Rt(e,x)){var k=co(e,x);if(!(!k||Tl(e,x)||Ui(e.display,x))){bn(x);var I=e.findWordAt(k);_a(e.doc,I.anchor,I.head)}}})):nt(n.scroller,"dblclick",function(x){return Rt(e,x)||bn(x)}),nt(n.scroller,"contextmenu",function(x){return ju(e,x)}),nt(n.input.getField(),"contextmenu",function(x){n.scroller.contains(x.target)||ju(e,x)});var o,i={end:0};function s(){n.activeTouch&&(o=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function u(x){if(x.touches.length!=1)return!1;var k=x.touches[0];return k.radiusX<=1&&k.radiusY<=1}function m(x,k){if(k.left==null)return!0;var I=k.left-x.left,F=k.top-x.top;return I*I+F*F>400}nt(n.scroller,"touchstart",function(x){if(!Rt(e,x)&&!u(x)&&!Tl(e,x)){n.input.ensurePolled(),clearTimeout(o);var k=+new Date;n.activeTouch={start:k,moved:!1,prev:k-i.end<=300?i:null},x.touches.length==1&&(n.activeTouch.left=x.touches[0].pageX,n.activeTouch.top=x.touches[0].pageY)}}),nt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),nt(n.scroller,"touchend",function(x){var k=n.activeTouch;if(k&&!Ui(n,x)&&k.left!=null&&!k.moved&&new Date-k.start<300){var I=e.coordsChar(n.activeTouch,"page"),F;!k.prev||m(k,k.prev)?F=new Lt(I,I):!k.prev.prev||m(k,k.prev.prev)?F=e.findWordAt(I):F=new Lt(de(I.line,0),ft(e.doc,de(I.line+1,0))),e.setSelection(F.anchor,F.head),e.focus(),bn(x)}s()}),nt(n.scroller,"touchcancel",s),nt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(fo(e,n.scroller.scrollTop),Gi(e,n.scroller.scrollLeft,!0),At(e,"scroll",e))}),nt(n.scroller,"mousewheel",function(x){return Bo(e,x)}),nt(n.scroller,"DOMMouseScroll",function(x){return Bo(e,x)}),nt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(x){Rt(e,x)||lr(x)},over:function(x){Rt(e,x)||(Kd(e,x),lr(x))},start:function(x){return Pa(e,x)},drop:cn(e,La),leave:function(x){Rt(e,x)||Zn(e)}};var y=n.input.getField();nt(y,"keyup",function(x){return Cu.call(e,x)}),nt(y,"keydown",cn(e,_u)),nt(y,"keypress",cn(e,ja)),nt(y,"focus",function(x){return cl(e,x)}),nt(y,"blur",function(x){return Wt(e,x)})}var Nl=[];Xt.defineInitHook=function(e){return Nl.push(e)};function is(e,n,o,i){var s=e.doc,u;o==null&&(o="add"),o=="smart"&&(s.mode.indent?u=Nt(e,n).state:o="prev");var m=e.options.tabSize,y=Xe(s,n),x=He(y.text,null,m);y.stateAfter&&(y.stateAfter=null);var k=y.text.match(/^\s*/)[0],I;if(!i&&!/\S/.test(y.text))I=0,o="not";else if(o=="smart"&&(I=s.mode.indent(u,y.text.slice(k.length),y.text),I==Qt||I>150)){if(!i)return;o="prev"}o=="prev"?n>s.first?I=He(Xe(s,n-1).text,null,m):I=0:o=="add"?I=x+e.options.indentUnit:o=="subtract"?I=x-e.options.indentUnit:typeof o=="number"&&(I=x+o),I=Math.max(0,I);var F="",te=0;if(e.options.indentWithTabs)for(var V=Math.floor(I/m);V;--V)te+=m,F+="	";if(te<I&&(F+=Zt(I-te)),F!=k)return Vo(s,F,de(n,0),de(n,k.length),"+input"),y.stateAfter=null,!0;for(var fe=0;fe<s.sel.ranges.length;fe++){var ye=s.sel.ranges[fe];if(ye.head.line==n&&ye.head.ch<k.length){var Pe=de(n,k.length);As(s,fe,new Lt(Pe,Pe));break}}}var Qr=null;function qs(e){Qr=e}function El(e,n,o,i,s){var u=e.doc;e.display.shift=!1,i||(i=u.sel);var m=+new Date-200,y=s=="paste"||e.state.pasteIncoming>m,x=ur(n),k=null;if(y&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){k=[];for(var I=0;I<Qr.text.length;I++)k.push(u.splitLines(Qr.text[I]))}}else x.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(k=vt(x,function(Ne){return[Ne]}));for(var F=e.curOp.updateInput,te=i.ranges.length-1;te>=0;te--){var V=i.ranges[te],fe=V.from(),ye=V.to();V.empty()&&(o&&o>0?fe=de(fe.line,fe.ch-o):e.state.overwrite&&!y?ye=de(ye.line,Math.min(Xe(u,ye.line).text.length,ye.ch+Ke(x).length)):y&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==x.join(`
`)&&(fe=ye=de(fe.line,0)));var Pe={from:fe,to:ye,text:k?k[te%k.length]:x,origin:s||(y?"paste":e.state.cutIncoming>m?"cut":"+input")};Yo(e.doc,Pe),Dn(e,"inputRead",e,Pe)}n&&!y&&Ll(e,n),zo(e),e.curOp.updateInput<2&&(e.curOp.updateInput=F),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Ru(e,n){var o=e.clipboardData&&e.clipboardData.getData("Text");if(o)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Pn(n,function(){return El(n,o,0,null,"paste")}),!0}function Ll(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var o=e.doc.sel,i=o.ranges.length-1;i>=0;i--){var s=o.ranges[i];if(!(s.head.ch>100||i&&o.ranges[i-1].head.line==s.head.line)){var u=e.getModeAt(s.head),m=!1;if(u.electricChars){for(var y=0;y<u.electricChars.length;y++)if(n.indexOf(u.electricChars.charAt(y))>-1){m=is(e,s.head.line,"smart");break}}else u.electricInput&&u.electricInput.test(Xe(e.doc,s.head.line).text.slice(0,s.head.ch))&&(m=is(e,s.head.line,"smart"));m&&Dn(e,"electricInput",e,s.head.line)}}}function Pl(e){for(var n=[],o=[],i=0;i<e.doc.sel.ranges.length;i++){var s=e.doc.sel.ranges[i].head.line,u={anchor:de(s,0),head:de(s+1,0)};o.push(u),n.push(e.getRange(u.anchor,u.head))}return{text:n,ranges:o}}function jl(e,n,o,i){e.setAttribute("autocorrect",o?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Al(){var e=C("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=C("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return A?e.style.width="1000px":e.setAttribute("wrap","off"),H&&(e.style.border="1px solid black"),n}function Rl(e){var n=e.optionHandlers,o=e.helpers={};e.prototype={constructor:e,focus:function(){we(this).focus(),this.display.input.focus()},setOption:function(i,s){var u=this.options,m=u[i];u[i]==s&&i!="mode"||(u[i]=s,n.hasOwnProperty(i)&&cn(this,n[i])(this,s,m),At(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,s){this.state.keyMaps[s?"push":"unshift"](_o(i))},removeKeyMap:function(i){for(var s=this.state.keyMaps,u=0;u<s.length;++u)if(s[u]==i||s[u].name==i)return s.splice(u,1),!0},addOverlay:Cn(function(i,s){var u=i.token?i:e.getMode(this.options,i);if(u.startState)throw new Error("Overlays may not be stateful.");oe(this.state.overlays,{mode:u,modeSpec:i,opaque:s&&s.opaque,priority:s&&s.priority||0},function(m){return m.priority}),this.state.modeGen++,er(this)}),removeOverlay:Cn(function(i){for(var s=this.state.overlays,u=0;u<s.length;++u){var m=s[u].modeSpec;if(m==i||typeof i=="string"&&m.name==i){s.splice(u,1),this.state.modeGen++,er(this);return}}}),indentLine:Cn(function(i,s,u){typeof s!="string"&&typeof s!="number"&&(s==null?s=this.options.smartIndent?"smart":"prev":s=s?"add":"subtract"),he(this.doc,i)&&is(this,i,s,u)}),indentSelection:Cn(function(i){for(var s=this.doc.sel.ranges,u=-1,m=0;m<s.length;m++){var y=s[m];if(y.empty())y.head.line>u&&(is(this,y.head.line,i,!0),u=y.head.line,m==this.doc.sel.primIndex&&zo(this));else{var x=y.from(),k=y.to(),I=Math.max(u,x.line);u=Math.min(this.lastLine(),k.line-(k.ch?0:1))+1;for(var F=I;F<u;++F)is(this,F,i);var te=this.doc.sel.ranges;x.ch==0&&s.length==te.length&&te[m].from().ch>0&&As(this.doc,m,new Lt(x,te[m].to()),$t)}}}),getTokenAt:function(i,s){return Js(this,i,s)},getLineTokens:function(i,s){return Js(this,de(i),s,!0)},getTokenTypeAt:function(i){i=ft(this.doc,i);var s=io(this,Xe(this.doc,i.line)),u=0,m=(s.length-1)/2,y=i.ch,x;if(y==0)x=s[2];else for(;;){var k=u+m>>1;if((k?s[k*2-1]:0)>=y)m=k;else if(s[k*2+1]<y)u=k+1;else{x=s[k*2+2];break}}var I=x?x.indexOf("overlay "):-1;return I<0?x:I==0?null:x.slice(0,I-1)},getModeAt:function(i){var s=this.doc.mode;return s.innerMode?e.innerMode(s,this.getTokenAt(i).state).mode:s},getHelper:function(i,s){return this.getHelpers(i,s)[0]},getHelpers:function(i,s){var u=[];if(!o.hasOwnProperty(s))return u;var m=o[s],y=this.getModeAt(i);if(typeof y[s]=="string")m[y[s]]&&u.push(m[y[s]]);else if(y[s])for(var x=0;x<y[s].length;x++){var k=m[y[s][x]];k&&u.push(k)}else y.helperType&&m[y.helperType]?u.push(m[y.helperType]):m[y.name]&&u.push(m[y.name]);for(var I=0;I<m._global.length;I++){var F=m._global[I];F.pred(y,this)&&Ge(u,F.val)==-1&&u.push(F.val)}return u},getStateAfter:function(i,s){var u=this.doc;return i=Ya(u,i??u.first+u.size-1),Nt(this,i+1,s).state},cursorCoords:function(i,s){var u,m=this.doc.sel.primary();return i==null?u=m.head:typeof i=="object"?u=ft(this.doc,i):u=i?m.from():m.to(),_n(this,u,s||"page")},charCoords:function(i,s){return rl(this,ft(this.doc,i),s||"page")},coordsChar:function(i,s){return i=hc(this,i,s||"page"),ol(this,i.left,i.top)},lineAtHeight:function(i,s){return i=hc(this,{top:i,left:0},s||"page").top,z(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,s,u){var m=!1,y;if(typeof i=="number"){var x=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>x&&(i=x,m=!0),y=Xe(this.doc,i)}else y=i;return nl(this,y,{top:0,left:0},s||"page",u||m).top+(m?this.doc.height-Sn(y):0)},defaultTextHeight:function(){return Si(this.display)},defaultCharWidth:function(){return uo(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,s,u,m,y){var x=this.display;i=_n(this,ft(this.doc,i));var k=i.bottom,I=i.left;if(s.style.position="absolute",s.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(s),x.sizer.appendChild(s),m=="over")k=i.top;else if(m=="above"||m=="near"){var F=Math.max(x.wrapper.clientHeight,this.doc.height),te=Math.max(x.sizer.clientWidth,x.lineSpace.clientWidth);(m=="above"||i.bottom+s.offsetHeight>F)&&i.top>s.offsetHeight?k=i.top-s.offsetHeight:i.bottom+s.offsetHeight<=F&&(k=i.bottom),I+s.offsetWidth>te&&(I=te-s.offsetWidth)}s.style.top=k+"px",s.style.left=s.style.right="",y=="right"?(I=x.sizer.clientWidth-s.offsetWidth,s.style.right="0px"):(y=="left"?I=0:y=="middle"&&(I=(x.sizer.clientWidth-s.offsetWidth)/2),s.style.left=I+"px"),u&&fa(this,{left:I,top:k,right:I+s.offsetWidth,bottom:k+s.offsetHeight})},triggerOnKeyDown:Cn(_u),triggerOnKeyPress:Cn(ja),triggerOnKeyUp:Cu,triggerOnMouseDown:Cn(Ra),execCommand:function(i){if(Hs.hasOwnProperty(i))return Hs[i].call(null,this)},triggerElectric:Cn(function(i){Ll(this,i)}),findPosH:function(i,s,u,m){var y=1;s<0&&(y=-1,s=-s);for(var x=ft(this.doc,i),k=0;k<s&&(x=Iu(this.doc,x,y,u,m),!x.hitSide);++k);return x},moveH:Cn(function(i,s){var u=this;this.extendSelectionsBy(function(m){return u.display.shift||u.doc.extend||m.empty()?Iu(u.doc,m.head,i,s,u.options.rtlMoveVisually):i<0?m.from():m.to()},et)}),deleteH:Cn(function(i,s){var u=this.doc.sel,m=this.doc;u.somethingSelected()?m.replaceSelection("",null,"+delete"):ts(this,function(y){var x=Iu(m,y.head,i,s,!1);return i<0?{from:x,to:y.head}:{from:y.head,to:x}})}),findPosV:function(i,s,u,m){var y=1,x=m;s<0&&(y=-1,s=-s);for(var k=ft(this.doc,i),I=0;I<s;++I){var F=_n(this,k,"div");if(x==null?x=F.left:F.left=x,k=Ou(this,F,y,u),k.hitSide)break}return k},moveV:Cn(function(i,s){var u=this,m=this.doc,y=[],x=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(I){if(x)return i<0?I.from():I.to();var F=_n(u,I.head,"div");I.goalColumn!=null&&(F.left=I.goalColumn),y.push(F.left);var te=Ou(u,F,i,s);return s=="page"&&I==m.sel.primary()&&ho(u,rl(u,te,"div").top-F.top),te},et),y.length)for(var k=0;k<m.sel.ranges.length;k++)m.sel.ranges[k].goalColumn=y[k]}),findWordAt:function(i){var s=this.doc,u=Xe(s,i.line).text,m=i.ch,y=i.ch;if(u){var x=this.getHelper(i,"wordChars");(i.sticky=="before"||y==u.length)&&m?--m:++y;for(var k=u.charAt(m),I=ot(k,x)?function(F){return ot(F,x)}:/\s/.test(k)?function(F){return/\s/.test(F)}:function(F){return!/\s/.test(F)&&!ot(F)};m>0&&I(u.charAt(m-1));)--m;for(;y<u.length&&I(u.charAt(y));)++y}return new Lt(de(i.line,m),de(i.line,y))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?Y(this.display.cursorDiv,"CodeMirror-overwrite"):Ee(this.display.cursorDiv,"CodeMirror-overwrite"),At(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==O(Je(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Cn(function(i,s){ma(this,i,s)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ui(this)-this.display.barHeight,width:i.scrollWidth-ui(this)-this.display.barWidth,clientHeight:lo(this),clientWidth:ao(this)}},scrollIntoView:Cn(function(i,s){i==null?(i={from:this.doc.sel.primary().head,to:null},s==null&&(s=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=s||0,i.from.line!=null?Bd(this,i):ya(this,i.from,i.to,i.margin)}),setSize:Cn(function(i,s){var u=this,m=function(x){return typeof x=="number"||/^\d+$/.test(String(x))?x+"px":x};i!=null&&(this.display.wrapper.style.width=m(i)),s!=null&&(this.display.wrapper.style.height=m(s)),this.options.lineWrapping&&eu(this);var y=this.display.viewFrom;this.doc.iter(y,this.display.viewTo,function(x){if(x.widgets){for(var k=0;k<x.widgets.length;k++)if(x.widgets[k].noHScroll){Ki(u,y,"widget");break}}++y}),this.curOp.forceUpdate=!0,At(this,"refresh",this)}),operation:function(i){return Pn(this,i)},startOperation:function(){return go(this)},endOperation:function(){return Gr(this)},refresh:Cn(function(){var i=this.display.cachedTextHeight;er(this),this.curOp.forceUpdate=!0,xs(this),ma(this,this.doc.scrollLeft,this.doc.scrollTop),tr(this.display),(i==null||Math.abs(i-Si(this.display))>.5||this.options.lineWrapping)&&ca(this),At(this,"refresh",this)}),swapDoc:Cn(function(i){var s=this.doc;return s.cm=null,this.state.selectingText&&this.state.selectingText(),tn(this,i),xs(this),this.display.input.reset(),ma(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,s),s}),phrase:function(i){var s=this.options.phrases;return s&&Object.prototype.hasOwnProperty.call(s,i)?s[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ar(e),e.registerHelper=function(i,s,u){o.hasOwnProperty(i)||(o[i]=e[i]={_global:[]}),o[i][s]=u},e.registerGlobalHelper=function(i,s,u,m){e.registerHelper(i,s,m),o[i]._global.push({pred:u,val:m})}}function Iu(e,n,o,i,s){var u=n,m=o,y=Xe(e,n.line),x=s&&e.direction=="rtl"?-o:o;function k(){var Oe=n.line+x;return Oe<e.first||Oe>=e.first+e.size?!1:(n=new de(Oe,n.ch,n.sticky),y=Xe(e,Oe))}function I(Oe){var Re;if(i=="codepoint"){var Be=y.text.charCodeAt(n.ch+(o>0?0:-1));if(isNaN(Be))Re=null;else{var st=o>0?Be>=55296&&Be<56320:Be>=56320&&Be<57343;Re=new de(n.line,Math.max(0,Math.min(y.text.length,n.ch+o*(st?2:1))),-o)}}else s?Re=xu(e.cm,y,n,o):Re=Ws(y,n,o);if(Re==null)if(!Oe&&k())n=Cl(s,e.cm,y,n.line,x);else return!1;else n=Re;return!0}if(i=="char"||i=="codepoint")I();else if(i=="column")I(!0);else if(i=="word"||i=="group")for(var F=null,te=i=="group",V=e.cm&&e.cm.getHelper(n,"wordChars"),fe=!0;!(o<0&&!I(!fe));fe=!1){var ye=y.text.charAt(n.ch)||`
`,Pe=ot(ye,V)?"w":te&&ye==`
`?"n":!te||/\s/.test(ye)?null:"p";if(te&&!fe&&!Pe&&(Pe="s"),F&&F!=Pe){o<0&&(o=1,I(),n.sticky="after");break}if(Pe&&(F=Pe),o>0&&!I(!fe))break}var Ne=Ta(e,n,u,m,!0);return _t(u,Ne)&&(Ne.hitSide=!0),Ne}function Ou(e,n,o,i){var s=e.doc,u=n.left,m;if(i=="page"){var y=Math.min(e.display.wrapper.clientHeight,we(e).innerHeight||s(e).documentElement.clientHeight),x=Math.max(y-.5*Si(e.display),3);m=(o>0?n.bottom:n.top)+o*x}else i=="line"&&(m=o>0?n.bottom+3:n.top-3);for(var k;k=ol(e,u,m),!!k.outside;){if(o<0?m<=0:m>=s.height){k.hitSide=!0;break}m+=o*5}return k}var Ot=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Ot.prototype.init=function(e){var n=this,o=this,i=o.cm,s=o.div=e.lineDiv;s.contentEditable=!0,jl(s,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function u(y){for(var x=y.target;x;x=x.parentNode){if(x==s)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(x.className))break}return!1}nt(s,"paste",function(y){!u(y)||Rt(i,y)||Ru(y,i)||P<=11&&setTimeout(cn(i,function(){return n.updateFromDOM()}),20)}),nt(s,"compositionstart",function(y){n.composing={data:y.data,done:!1}}),nt(s,"compositionupdate",function(y){n.composing||(n.composing={data:y.data,done:!1})}),nt(s,"compositionend",function(y){n.composing&&(y.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),nt(s,"touchstart",function(){return o.forceCompositionEnd()}),nt(s,"input",function(){n.composing||n.readFromDOMSoon()});function m(y){if(!(!u(y)||Rt(i,y))){if(i.somethingSelected())qs({lineWise:!1,text:i.getSelections()}),y.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var x=Pl(i);qs({lineWise:!0,text:x.text}),y.type=="cut"&&i.operation(function(){i.setSelections(x.ranges,0,$t),i.replaceSelection("",null,"cut")})}else return;if(y.clipboardData){y.clipboardData.clearData();var k=Qr.text.join(`
`);if(y.clipboardData.setData("Text",k),y.clipboardData.getData("Text")==k){y.preventDefault();return}}var I=Al(),F=I.firstChild;jl(F),i.display.lineSpace.insertBefore(I,i.display.lineSpace.firstChild),F.value=Qr.text.join(`
`);var te=O(Ve(s));ae(F),setTimeout(function(){i.display.lineSpace.removeChild(I),te.focus(),te==s&&o.showPrimarySelection()},50)}}nt(s,"copy",m),nt(s,"cut",m)},Ot.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Ot.prototype.prepareSelection=function(){var e=al(this.cm,!1);return e.focus=O(Ve(this.div))==this.div,e},Ot.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Ot.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Ot.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,o=n.doc.sel.primary(),i=o.from(),s=o.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||s.line<n.display.viewFrom){e.removeAllRanges();return}var u=Ia(n,e.anchorNode,e.anchorOffset),m=Ia(n,e.focusNode,e.focusOffset);if(!(u&&!u.bad&&m&&!m.bad&&ze(si(u,m),i)==0&&ze(kn(u,m),s)==0)){var y=n.display.view,x=i.line>=n.display.viewFrom&&Mu(n,i)||{node:y[0].measure.map[2],offset:0},k=s.line<n.display.viewTo&&Mu(n,s);if(!k){var I=y[y.length-1].measure,F=I.maps?I.maps[I.maps.length-1]:I.map;k={node:F[F.length-1],offset:F[F.length-2]-F[F.length-3]}}if(!x||!k){e.removeAllRanges();return}var te=e.rangeCount&&e.getRangeAt(0),V;try{V=G(x.node,x.offset,k.offset,k.node)}catch{}V&&(!b&&n.state.focused?(e.collapse(x.node,x.offset),V.collapsed||(e.removeAllRanges(),e.addRange(V))):(e.removeAllRanges(),e.addRange(V)),te&&e.anchorNode==null?e.addRange(te):b&&this.startGracePeriod()),this.rememberSelection()}},Ot.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Ot.prototype.showMultipleSelections=function(e){ve(this.cm.display.cursorDiv,e.cursors),ve(this.cm.display.selectionDiv,e.selection)},Ot.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Ot.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return N(this.div,n)},Ot.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||O(Ve(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Ot.prototype.blur=function(){this.div.blur()},Ot.prototype.getField=function(){return this.div},Ot.prototype.supportsTouch=function(){return!0},Ot.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Pn(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function o(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,o))}this.polling.set(this.cm.options.pollInterval,o)},Ot.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ot.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(U&&R&&this.cm.display.gutterSpecs.length&&Il(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var o=Ia(n,e.anchorNode,e.anchorOffset),i=Ia(n,e.focusNode,e.focusOffset);o&&i&&Pn(n,function(){Wn(n.doc,zn(o,i),$t),(o.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Ot.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,o=e.doc.sel.primary(),i=o.from(),s=o.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Xe(e.doc,i.line-1).length)),s.ch==Xe(e.doc,s.line).text.length&&s.line<e.lastLine()&&(s=de(s.line+1,0)),i.line<n.viewFrom||s.line>n.viewTo-1)return!1;var u,m,y;i.line==n.viewFrom||(u=_i(e,i.line))==0?(m=S(n.view[0].line),y=n.view[0].node):(m=S(n.view[u].line),y=n.view[u-1].node.nextSibling);var x=_i(e,s.line),k,I;if(x==n.view.length-1?(k=n.viewTo-1,I=n.lineDiv.lastChild):(k=S(n.view[x+1].line)-1,I=n.view[x+1].node.previousSibling),!y)return!1;for(var F=e.doc.splitLines(Yd(e,y,I,m,k)),te=oi(e.doc,de(m,0),de(k,Xe(e.doc,k).text.length));F.length>1&&te.length>1;)if(Ke(F)==Ke(te))F.pop(),te.pop(),k--;else if(F[0]==te[0])F.shift(),te.shift(),m++;else break;for(var V=0,fe=0,ye=F[0],Pe=te[0],Ne=Math.min(ye.length,Pe.length);V<Ne&&ye.charCodeAt(V)==Pe.charCodeAt(V);)++V;for(var Oe=Ke(F),Re=Ke(te),Be=Math.min(Oe.length-(F.length==1?V:0),Re.length-(te.length==1?V:0));fe<Be&&Oe.charCodeAt(Oe.length-fe-1)==Re.charCodeAt(Re.length-fe-1);)++fe;if(F.length==1&&te.length==1&&m==i.line)for(;V&&V>i.ch&&Oe.charCodeAt(Oe.length-fe-1)==Re.charCodeAt(Re.length-fe-1);)V--,fe++;F[F.length-1]=Oe.slice(0,Oe.length-fe).replace(/^\u200b+/,""),F[0]=F[0].slice(V).replace(/\u200b+$/,"");var st=de(m,V),Ye=de(k,te.length?Ke(te).length-fe:0);if(F.length>1||F[0]||ze(st,Ye))return Vo(e.doc,F,st,Ye,"+input"),!0},Ot.prototype.ensurePolled=function(){this.forceCompositionEnd()},Ot.prototype.reset=function(){this.forceCompositionEnd()},Ot.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Ot.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Ot.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Pn(this.cm,function(){return er(e.cm)})},Ot.prototype.setUneditable=function(e){e.contentEditable="false"},Ot.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||cn(this.cm,El)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Ot.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Ot.prototype.onContextMenu=function(){},Ot.prototype.resetPosition=function(){},Ot.prototype.needsContentAttribute=!0;function Mu(e,n){var o=el(e,n.line);if(!o||o.hidden)return null;var i=Xe(e.doc,n.line),s=uc(o,i,n.line),u=gt(i,e.doc.direction),m="left";if(u){var y=sr(u,n.ch);m=y%2?"right":"left"}var x=la(s.map,n.ch,m);return x.offset=x.collapse=="right"?x.end:x.start,x}function Il(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function jr(e,n){return n&&(e.bad=!0),e}function Yd(e,n,o,i,s){var u="",m=!1,y=e.doc.lineSeparator(),x=!1;function k(V){return function(fe){return fe.id==V}}function I(){m&&(u+=y,x&&(u+=y),m=x=!1)}function F(V){V&&(I(),u+=V)}function te(V){if(V.nodeType==1){var fe=V.getAttribute("cm-text");if(fe){F(fe);return}var ye=V.getAttribute("cm-marker"),Pe;if(ye){var Ne=e.findMarks(de(i,0),de(s+1,0),k(+ye));Ne.length&&(Pe=Ne[0].find(0))&&F(oi(e.doc,Pe.from,Pe.to).join(y));return}if(V.getAttribute("contenteditable")=="false")return;var Oe=/^(pre|div|p|li|table|br)$/i.test(V.nodeName);if(!/^br$/i.test(V.nodeName)&&V.textContent.length==0)return;Oe&&I();for(var Re=0;Re<V.childNodes.length;Re++)te(V.childNodes[Re]);/^(pre|p)$/i.test(V.nodeName)&&(x=!0),Oe&&(m=!0)}else V.nodeType==3&&F(V.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;te(n),n!=o;)n=n.nextSibling,x=!1;return u}function Ia(e,n,o){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[o],!i)return jr(e.clipPos(de(e.display.viewTo-1)),!0);n=null,o=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var s=0;s<e.display.view.length;s++){var u=e.display.view[s];if(u.node==i)return Du(u,n,o)}}function Du(e,n,o){var i=e.text.firstChild,s=!1;if(!n||!N(i,n))return jr(de(S(e.line),0),!0);if(n==i&&(s=!0,n=i.childNodes[o],o=0,!n)){var u=e.rest?Ke(e.rest):e.line;return jr(de(S(u),u.text.length),s)}var m=n.nodeType==3?n:null,y=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,o&&(o=m.nodeValue.length));y.parentNode!=i;)y=y.parentNode;var x=e.measure,k=x.maps;function I(Pe,Ne,Oe){for(var Re=-1;Re<(k?k.length:0);Re++)for(var Be=Re<0?x.map:k[Re],st=0;st<Be.length;st+=3){var Ye=Be[st+2];if(Ye==Pe||Ye==Ne){var wt=S(Re<0?e.line:e.rest[Re]),Ct=Be[st]+Oe;return(Oe<0||Ye!=Pe)&&(Ct=Be[st+(Oe?1:0)]),de(wt,Ct)}}}var F=I(m,y,o);if(F)return jr(F,s);for(var te=y.nextSibling,V=m?m.nodeValue.length-o:0;te;te=te.nextSibling){if(F=I(te,te.firstChild,0),F)return jr(de(F.line,F.ch-V),s);V+=te.textContent.length}for(var fe=y.previousSibling,ye=o;fe;fe=fe.previousSibling){if(F=I(fe,fe.firstChild,-1),F)return jr(de(F.line,F.ch+ye),s);ye+=fe.textContent.length}}var pn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};pn.prototype.init=function(e){var n=this,o=this,i=this.cm;this.createField(e);var s=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),H&&(s.style.width="0px"),nt(s,"input",function(){_&&P>=9&&n.hasSelection&&(n.hasSelection=null),o.poll()}),nt(s,"paste",function(m){Rt(i,m)||Ru(m,i)||(i.state.pasteIncoming=+new Date,o.fastPoll())});function u(m){if(!Rt(i,m)){if(i.somethingSelected())qs({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var y=Pl(i);qs({lineWise:!0,text:y.text}),m.type=="cut"?i.setSelections(y.ranges,null,$t):(o.prevInput="",s.value=y.text.join(`
`),ae(s))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}nt(s,"cut",u),nt(s,"copy",u),nt(e.scroller,"paste",function(m){if(!(Ui(e,m)||Rt(i,m))){if(!s.dispatchEvent){i.state.pasteIncoming=+new Date,o.focus();return}var y=new Event("paste");y.clipboardData=m.clipboardData,s.dispatchEvent(y)}}),nt(e.lineSpace,"selectstart",function(m){Ui(e,m)||bn(m)}),nt(s,"compositionstart",function(){var m=i.getCursor("from");o.composing&&o.composing.range.clear(),o.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),nt(s,"compositionend",function(){o.composing&&(o.poll(),o.composing.range.clear(),o.composing=null)})},pn.prototype.createField=function(e){this.wrapper=Al(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;jl(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},pn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},pn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,o=e.doc,i=al(e);if(e.options.moveInputWithCursor){var s=_n(e,o.sel.primary().head,"div"),u=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,s.top+m.top-u.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,s.left+m.left-u.left))}return i},pn.prototype.showSelection=function(e){var n=this.cm,o=n.display;ve(o.cursorDiv,e.cursors),ve(o.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},pn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var o=n.getSelection();this.textarea.value=o,n.state.focused&&ae(this.textarea),_&&P>=9&&(this.hasSelection=o)}else e||(this.prevInput=this.textarea.value="",_&&P>=9&&(this.hasSelection=null));this.resetting=!1}},pn.prototype.getField=function(){return this.textarea},pn.prototype.supportsTouch=function(){return!1},pn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!$||O(Ve(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},pn.prototype.blur=function(){this.textarea.blur()},pn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},pn.prototype.receivedFocus=function(){this.slowPoll()},pn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},pn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function o(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,o)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,o)},pn.prototype.poll=function(){var e=this,n=this.cm,o=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||qr(o)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var s=o.value;if(s==i&&!n.somethingSelected())return!1;if(_&&P>=9&&this.hasSelection===s||se&&/[\uf700-\uf7ff]/.test(s))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var u=s.charCodeAt(0);if(u==8203&&!i&&(i="​"),u==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,y=Math.min(i.length,s.length);m<y&&i.charCodeAt(m)==s.charCodeAt(m);)++m;return Pn(n,function(){El(n,s.slice(m),i.length-m,null,e.composing?"*compose":null),s.length>1e3||s.indexOf(`
`)>-1?o.value=e.prevInput="":e.prevInput=s,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},pn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},pn.prototype.onKeyPress=function(){_&&P>=9&&(this.hasSelection=null),this.fastPoll()},pn.prototype.onContextMenu=function(e){var n=this,o=n.cm,i=o.display,s=n.textarea;n.contextMenuPending&&n.contextMenuPending();var u=co(o,e),m=i.scroller.scrollTop;if(!u||ne)return;var y=o.options.resetSelectionOnContextMenu;y&&o.doc.sel.contains(u)==-1&&cn(o,Wn)(o.doc,zn(u),$t);var x=s.style.cssText,k=n.wrapper.style.cssText,I=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",s.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-I.top-5)+"px; left: "+(e.clientX-I.left-5)+`px;
      z-index: 1000; background: `+(_?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var F;A&&(F=s.ownerDocument.defaultView.scrollY),i.input.focus(),A&&s.ownerDocument.defaultView.scrollTo(null,F),i.input.reset(),o.somethingSelected()||(s.value=n.prevInput=" "),n.contextMenuPending=V,i.selForContextMenu=o.doc.sel,clearTimeout(i.detectingSelectAll);function te(){if(s.selectionStart!=null){var ye=o.somethingSelected(),Pe="​"+(ye?s.value:"");s.value="⇚",s.value=Pe,n.prevInput=ye?"":"​",s.selectionStart=1,s.selectionEnd=Pe.length,i.selForContextMenu=o.doc.sel}}function V(){if(n.contextMenuPending==V&&(n.contextMenuPending=!1,n.wrapper.style.cssText=k,s.style.cssText=x,_&&P<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),s.selectionStart!=null)){(!_||_&&P<9)&&te();var ye=0,Pe=function(){i.selForContextMenu==o.doc.sel&&s.selectionStart==0&&s.selectionEnd>0&&n.prevInput=="​"?cn(o,Qi)(o):ye++<10?i.detectingSelectAll=setTimeout(Pe,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Pe,200)}}if(_&&P>=9&&te(),_e){lr(e);var fe=function(){Gt(window,"mouseup",fe),setTimeout(V,20)};nt(window,"mouseup",fe)}else setTimeout(V,50)},pn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},pn.prototype.setUneditable=function(){},pn.prototype.needsContentAttribute=!1;function Wc(e,n){if(n=n?Fe(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var o=O(Ve(e));n.autofocus=o==e||e.getAttribute("autofocus")!=null&&o==document.body}function i(){e.value=y.getValue()}var s;if(e.form&&(nt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var u=e.form;s=u.submit;try{var m=u.submit=function(){i(),u.submit=s,u.submit(),u.submit=m}}catch{}}n.finishInit=function(x){x.save=i,x.getTextArea=function(){return e},x.toTextArea=function(){x.toTextArea=isNaN,i(),e.parentNode.removeChild(x.getWrapperElement()),e.style.display="",e.form&&(Gt(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=s))}},e.style.display="none";var y=Xt(function(x){return e.parentNode.insertBefore(x,e.nextSibling)},n);return y}function Oa(e){e.off=Gt,e.on=nt,e.wheelEventPixels=vo,e.Doc=It,e.splitLines=ur,e.countColumn=He,e.findColumn=bt,e.isWordChar=$e,e.Pass=Qt,e.signal=At,e.Line=wi,e.changeEnd=Fn,e.scrollbarModel=vc,e.Pos=de,e.cmpPos=ze,e.modes=Ar,e.mimeModes=Rr,e.resolveMode=Er,e.getMode=Di,e.modeExtensions=ii,e.extendMode=vi,e.copyState=Pt,e.startState=xi,e.innerMode=ro,e.commands=Hs,e.keyMap=Ai,e.keyName=vu,e.isModifierKey=gu,e.lookupKey=es,e.normalizeKeyMap=Cc,e.StringStream=Yt,e.SharedTextMarker=Qo,e.TextMarker=mi,e.LineWidget=Pi,e.e_preventDefault=bn,e.e_stopPropagation=ni,e.e_stop=lr,e.addClass=Y,e.contains=N,e.rmClass=Ee,e.keyNames=Xr}yr(Xt),Rl(Xt);var nr="iter insert remove copy getEditor constructor".split(" ");for(var Ol in It.prototype)It.prototype.hasOwnProperty(Ol)&&Ge(nr,Ol)<0&&(Xt.prototype[Ol]=(function(e){return function(){return e.apply(this.doc,arguments)}})(It.prototype[Ol]));return ar(It),Xt.inputStyles={textarea:pn,contenteditable:Ot},Xt.defineMode=function(e){!Xt.defaults.mode&&e!="null"&&(Xt.defaults.mode=e),Nr.apply(this,arguments)},Xt.defineMIME=Ft,Xt.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Xt.defineMIME("text/plain","null"),Xt.defineExtension=function(e,n){Xt.prototype[e]=n},Xt.defineDocExtension=function(e,n){It.prototype[e]=n},Xt.fromTextArea=Wc,Oa(Xt),Xt.version="5.65.21",Xt}))})(od)),od.exports}var Xv=no();const Vh=wf(Xv);var Xh={exports:{}},Qh;function Qv(){return Qh||(Qh=1,(function(c,p){(function(d){d(no())})(function(d){function v(P){return new RegExp("^(("+P.join(")|(")+"))\\b")}var b=v(["and","or","not","is"]),w=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],L=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];d.registerHelper("hintWords","python",w.concat(L).concat(["exec","print"]));function E(P){return P.scopes[P.scopes.length-1]}d.defineMode("python",function(P,A){for(var M="error",R=A.delimiters||A.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,X=[A.singleOperators,A.doubleOperators,A.doubleDelimiters,A.tripleDelimiters,A.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],ne=0;ne<X.length;ne++)X[ne]||X.splice(ne--,1);var J=A.hangingIndent||P.indentUnit,ue=w,D=L;A.extra_keywords!=null&&(ue=ue.concat(A.extra_keywords)),A.extra_builtins!=null&&(D=D.concat(A.extra_builtins));var H=!(A.version&&Number(A.version)<3);if(H){var U=A.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;ue=ue.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),D=D.concat(["ascii","bytes","exec","print"]);var $=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var U=A.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;ue=ue.concat(["exec","print"]),D=D.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var $=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var se=v(ue),ge=v(D);function ie(Q,G){var N=Q.sol()&&G.lastToken!="\\";if(N&&(G.indent=Q.indentation()),N&&E(G).type=="py"){var O=E(G).offset;if(Q.eatSpace()){var Y=Q.indentation();return Y>O?q(G):Y<O&&re(Q,G)&&Q.peek()!="#"&&(G.errorToken=!0),null}else{var W=Ce(Q,G);return O>0&&re(Q,G)&&(W+=" "+M),W}}return Ce(Q,G)}function Ce(Q,G,N){if(Q.eatSpace())return null;if(!N&&Q.match(/^#.*/))return"comment";if(Q.match(/^[0-9\.]/,!1)){var O=!1;if(Q.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(O=!0),Q.match(/^[\d_]+\.\d*/)&&(O=!0),Q.match(/^\.\d+/)&&(O=!0),O)return Q.eat(/J/i),"number";var Y=!1;if(Q.match(/^0x[0-9a-f_]+/i)&&(Y=!0),Q.match(/^0b[01_]+/i)&&(Y=!0),Q.match(/^0o[0-7_]+/i)&&(Y=!0),Q.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Q.eat(/J/i),Y=!0),Q.match(/^0(?![\dx])/i)&&(Y=!0),Y)return Q.eat(/L/i),"number"}if(Q.match($)){var W=Q.current().toLowerCase().indexOf("f")!==-1;return W?(G.tokenize=We(Q.current(),G.tokenize),G.tokenize(Q,G)):(G.tokenize=_e(Q.current(),G.tokenize),G.tokenize(Q,G))}for(var ae=0;ae<X.length;ae++)if(Q.match(X[ae]))return"operator";return Q.match(R)?"punctuation":G.lastToken=="."&&Q.match(U)?"property":Q.match(se)||Q.match(b)?"keyword":Q.match(ge)?"builtin":Q.match(/^(self|cls)\b/)?"variable-2":Q.match(U)?G.lastToken=="def"||G.lastToken=="class"?"def":"variable":(Q.next(),N?null:M)}function We(Q,G){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var N=Q.length==1,O="string";function Y(ae){return function(De,Je){var Ve=Ce(De,Je,!0);return Ve=="punctuation"&&(De.current()=="{"?Je.tokenize=Y(ae+1):De.current()=="}"&&(ae>1?Je.tokenize=Y(ae-1):Je.tokenize=W)),Ve}}function W(ae,De){for(;!ae.eol();)if(ae.eatWhile(/[^'"\{\}\\]/),ae.eat("\\")){if(ae.next(),N&&ae.eol())return O}else{if(ae.match(Q))return De.tokenize=G,O;if(ae.match("{{"))return O;if(ae.match("{",!1))return De.tokenize=Y(0),ae.current()?O:De.tokenize(ae,De);if(ae.match("}}"))return O;if(ae.match("}"))return M;ae.eat(/['"]/)}if(N){if(A.singleLineStringErrors)return M;De.tokenize=G}return O}return W.isString=!0,W}function _e(Q,G){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var N=Q.length==1,O="string";function Y(W,ae){for(;!W.eol();)if(W.eatWhile(/[^'"\\]/),W.eat("\\")){if(W.next(),N&&W.eol())return O}else{if(W.match(Q))return ae.tokenize=G,O;W.eat(/['"]/)}if(N){if(A.singleLineStringErrors)return M;ae.tokenize=G}return O}return Y.isString=!0,Y}function q(Q){for(;E(Q).type!="py";)Q.scopes.pop();Q.scopes.push({offset:E(Q).offset+P.indentUnit,type:"py",align:null})}function Ee(Q,G,N){var O=Q.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Q.column()+1;G.scopes.push({offset:G.indent+J,type:N,align:O})}function re(Q,G){for(var N=Q.indentation();G.scopes.length>1&&E(G).offset>N;){if(E(G).type!="py")return!0;G.scopes.pop()}return E(G).offset!=N}function ve(Q,G){Q.sol()&&(G.beginningOfLine=!0,G.dedent=!1);var N=G.tokenize(Q,G),O=Q.current();if(G.beginningOfLine&&O=="@")return Q.match(U,!1)?"meta":H?"operator":M;if(/\S/.test(O)&&(G.beginningOfLine=!1),(N=="variable"||N=="builtin")&&G.lastToken=="meta"&&(N="meta"),(O=="pass"||O=="return")&&(G.dedent=!0),O=="lambda"&&(G.lambda=!0),O==":"&&!G.lambda&&E(G).type=="py"&&Q.match(/^\s*(?:#|$)/,!1)&&q(G),O.length==1&&!/string|comment/.test(N)){var Y="[({".indexOf(O);if(Y!=-1&&Ee(Q,G,"])}".slice(Y,Y+1)),Y="])}".indexOf(O),Y!=-1)if(E(G).type==O)G.indent=G.scopes.pop().offset-J;else return M}return G.dedent&&Q.eol()&&E(G).type=="py"&&G.scopes.length>1&&G.scopes.pop(),N}var C={startState:function(Q){return{tokenize:ie,scopes:[{offset:Q||0,type:"py",align:null}],indent:Q||0,lastToken:null,lambda:!1,dedent:0}},token:function(Q,G){var N=G.errorToken;N&&(G.errorToken=!1);var O=ve(Q,G);return O&&O!="comment"&&(G.lastToken=O=="keyword"||O=="punctuation"?Q.current():O),O=="punctuation"&&(O=null),Q.eol()&&G.lambda&&(G.lambda=!1),N?O+" "+M:O},indent:function(Q,G){if(Q.tokenize!=ie)return Q.tokenize.isString?d.Pass:0;var N=E(Q),O=N.type==G.charAt(0)||N.type=="py"&&!Q.dedent&&/^(else:|elif |except |finally:)/.test(G);return N.align!=null?N.align-(O?1:0):N.offset-(O?J:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return C}),d.defineMIME("text/x-python","python");var _=function(P){return P.split(" ")};d.defineMIME("text/x-cython",{name:"python",extra_keywords:_("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Xh.exports}Qv();var Zh={exports:{}},Jh;function em(){return Jh||(Jh=1,(function(c,p){(function(d){d(no())})(function(d){d.defineMode("javascript",function(v,b){var w=v.indentUnit,L=b.statementIndent,E=b.jsonld,_=b.json||E,P=b.trackScope!==!1,A=b.typescript,M=b.wordCharacters||/[\w$\xa1-\uffff]/,R=(function(){function S(Jt){return{type:Jt,style:"keyword"}}var z=S("keyword a"),he=S("keyword b"),Te=S("keyword c"),de=S("keyword d"),ze=S("operator"),_t={type:"atom",style:"atom"};return{if:S("if"),while:z,with:z,else:he,do:he,try:he,finally:he,return:de,break:de,continue:de,new:S("new"),delete:Te,void:Te,throw:Te,debugger:S("debugger"),var:S("var"),const:S("var"),let:S("var"),function:S("function"),catch:S("catch"),for:S("for"),switch:S("switch"),case:S("case"),default:S("default"),in:ze,typeof:ze,instanceof:ze,true:_t,false:_t,null:_t,undefined:_t,NaN:_t,Infinity:_t,this:S("this"),class:S("class"),super:S("atom"),yield:Te,export:S("export"),import:S("import"),extends:Te,await:Te}})(),X=/[+\-*&%=<>!?|~^@]/,ne=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function J(S){for(var z=!1,he,Te=!1;(he=S.next())!=null;){if(!z){if(he=="/"&&!Te)return;he=="["?Te=!0:Te&&he=="]"&&(Te=!1)}z=!z&&he=="\\"}}var ue,D;function H(S,z,he){return ue=S,D=he,z}function U(S,z){var he=S.next();if(he=='"'||he=="'")return z.tokenize=$(he),z.tokenize(S,z);if(he=="."&&S.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return H("number","number");if(he=="."&&S.match(".."))return H("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(he))return H(he);if(he=="="&&S.eat(">"))return H("=>","operator");if(he=="0"&&S.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return H("number","number");if(/\d/.test(he))return S.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),H("number","number");if(he=="/")return S.eat("*")?(z.tokenize=se,se(S,z)):S.eat("/")?(S.skipToEnd(),H("comment","comment")):On(S,z,1)?(J(S),S.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),H("regexp","string-2")):(S.eat("="),H("operator","operator",S.current()));if(he=="`")return z.tokenize=ge,ge(S,z);if(he=="#"&&S.peek()=="!")return S.skipToEnd(),H("meta","meta");if(he=="#"&&S.eatWhile(M))return H("variable","property");if(he=="<"&&S.match("!--")||he=="-"&&S.match("->")&&!/\S/.test(S.string.slice(0,S.start)))return S.skipToEnd(),H("comment","comment");if(X.test(he))return(he!=">"||!z.lexical||z.lexical.type!=">")&&(S.eat("=")?(he=="!"||he=="=")&&S.eat("="):/[<>*+\-|&?]/.test(he)&&(S.eat(he),he==">"&&S.eat(he))),he=="?"&&S.eat(".")?H("."):H("operator","operator",S.current());if(M.test(he)){S.eatWhile(M);var Te=S.current();if(z.lastType!="."){if(R.propertyIsEnumerable(Te)){var de=R[Te];return H(de.type,de.style,Te)}if(Te=="async"&&S.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return H("async","keyword",Te)}return H("variable","variable",Te)}}function $(S){return function(z,he){var Te=!1,de;if(E&&z.peek()=="@"&&z.match(ne))return he.tokenize=U,H("jsonld-keyword","meta");for(;(de=z.next())!=null&&!(de==S&&!Te);)Te=!Te&&de=="\\";return Te||(he.tokenize=U),H("string","string")}}function se(S,z){for(var he=!1,Te;Te=S.next();){if(Te=="/"&&he){z.tokenize=U;break}he=Te=="*"}return H("comment","comment")}function ge(S,z){for(var he=!1,Te;(Te=S.next())!=null;){if(!he&&(Te=="`"||Te=="$"&&S.eat("{"))){z.tokenize=U;break}he=!he&&Te=="\\"}return H("quasi","string-2",S.current())}var ie="([{}])";function Ce(S,z){z.fatArrowAt&&(z.fatArrowAt=null);var he=S.string.indexOf("=>",S.start);if(!(he<0)){if(A){var Te=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(S.string.slice(S.start,he));Te&&(he=Te.index)}for(var de=0,ze=!1,_t=he-1;_t>=0;--_t){var Jt=S.string.charAt(_t),kn=ie.indexOf(Jt);if(kn>=0&&kn<3){if(!de){++_t;break}if(--de==0){Jt=="("&&(ze=!0);break}}else if(kn>=3&&kn<6)++de;else if(M.test(Jt))ze=!0;else if(/["'\/`]/.test(Jt))for(;;--_t){if(_t==0)return;var si=S.string.charAt(_t-1);if(si==Jt&&S.string.charAt(_t-2)!="\\"){_t--;break}}else if(ze&&!de){++_t;break}}ze&&!de&&(z.fatArrowAt=_t)}}var We={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function _e(S,z,he,Te,de,ze){this.indented=S,this.column=z,this.type=he,this.prev=de,this.info=ze,Te!=null&&(this.align=Te)}function q(S,z){if(!P)return!1;for(var he=S.localVars;he;he=he.next)if(he.name==z)return!0;for(var Te=S.context;Te;Te=Te.prev)for(var he=Te.vars;he;he=he.next)if(he.name==z)return!0}function Ee(S,z,he,Te,de){var ze=S.cc;for(re.state=S,re.stream=de,re.marked=null,re.cc=ze,re.style=z,S.lexical.hasOwnProperty("align")||(S.lexical.align=!0);;){var _t=ze.length?ze.pop():_?Ge:He;if(_t(he,Te)){for(;ze.length&&ze[ze.length-1].lex;)ze.pop()();return re.marked?re.marked:he=="variable"&&q(S,Te)?"variable-2":z}}}var re={state:null,marked:null,cc:null};function ve(){for(var S=arguments.length-1;S>=0;S--)re.cc.push(arguments[S])}function C(){return ve.apply(null,arguments),!0}function Q(S,z){for(var he=z;he;he=he.next)if(he.name==S)return!0;return!1}function G(S){var z=re.state;if(re.marked="def",!!P){if(z.context){if(z.lexical.info=="var"&&z.context&&z.context.block){var he=N(S,z.context);if(he!=null){z.context=he;return}}else if(!Q(S,z.localVars)){z.localVars=new W(S,z.localVars);return}}b.globalVars&&!Q(S,z.globalVars)&&(z.globalVars=new W(S,z.globalVars))}}function N(S,z){if(z)if(z.block){var he=N(S,z.prev);return he?he==z.prev?z:new Y(he,z.vars,!0):null}else return Q(S,z.vars)?z:new Y(z.prev,new W(S,z.vars),!1);else return null}function O(S){return S=="public"||S=="private"||S=="protected"||S=="abstract"||S=="readonly"}function Y(S,z,he){this.prev=S,this.vars=z,this.block=he}function W(S,z){this.name=S,this.next=z}var ae=new W("this",new W("arguments",null));function De(){re.state.context=new Y(re.state.context,re.state.localVars,!1),re.state.localVars=ae}function Je(){re.state.context=new Y(re.state.context,re.state.localVars,!0),re.state.localVars=null}De.lex=Je.lex=!0;function Ve(){re.state.localVars=re.state.context.vars,re.state.context=re.state.context.prev}Ve.lex=!0;function we(S,z){var he=function(){var Te=re.state,de=Te.indented;if(Te.lexical.type=="stat")de=Te.lexical.indented;else for(var ze=Te.lexical;ze&&ze.type==")"&&ze.align;ze=ze.prev)de=ze.indented;Te.lexical=new _e(de,re.stream.column(),S,null,Te.lexical,z)};return he.lex=!0,he}function Ie(){var S=re.state;S.lexical.prev&&(S.lexical.type==")"&&(S.indented=S.lexical.indented),S.lexical=S.lexical.prev)}Ie.lex=!0;function Fe(S){function z(he){return he==S?C():S==";"||he=="}"||he==")"||he=="]"?ve():C(z)}return z}function He(S,z){return S=="var"?C(we("vardef",z),ni,Fe(";"),Ie):S=="keyword a"?C(we("form"),Qt,He,Ie):S=="keyword b"?C(we("form"),He,Ie):S=="keyword d"?re.stream.match(/^\s*$/,!1)?C():C(we("stat"),hn,Fe(";"),Ie):S=="debugger"?C(Fe(";")):S=="{"?C(we("}"),Je,Xn,Ie,Ve):S==";"?C():S=="if"?(re.state.lexical.info=="else"&&re.state.cc[re.state.cc.length-1]==Ie&&re.state.cc.pop()(),C(we("form"),Qt,He,Ie,Qn)):S=="function"?C(ur):S=="for"?C(we("form"),Je,ri,He,Ve,Ie):S=="class"||A&&z=="interface"?(re.marked="keyword",C(we("form",S=="class"?S:z),Ar,Ie)):S=="variable"?A&&z=="declare"?(re.marked="keyword",C(He)):A&&(z=="module"||z=="enum"||z=="type")&&re.stream.match(/^\s*\w/,!1)?(re.marked="keyword",z=="enum"?C(Xe):z=="type"?C(Po,Fe("operator"),gt,Fe(";")):C(we("form"),In,Fe("{"),we("}"),Xn,Ie,Ie)):A&&z=="namespace"?(re.marked="keyword",C(we("form"),Ge,He,Ie)):A&&z=="abstract"?(re.marked="keyword",C(He)):C(we("stat"),xt):S=="switch"?C(we("form"),Qt,Fe("{"),we("}","switch"),Je,Xn,Ie,Ie,Ve):S=="case"?C(Ge,Fe(":")):S=="default"?C(Fe(":")):S=="catch"?C(we("form"),De,tt,He,Ie,Ve):S=="export"?C(we("stat"),Er,Ie):S=="import"?C(we("stat"),ii,Ie):S=="async"?C(He):z=="@"?C(Ge,He):ve(we("stat"),Ge,Fe(";"),Ie)}function tt(S){if(S=="(")return C(wn,Fe(")"))}function Ge(S,z){return $t(S,z,!1)}function qt(S,z){return $t(S,z,!0)}function Qt(S){return S!="("?ve():C(we(")"),hn,Fe(")"),Ie)}function $t(S,z,he){if(re.state.fatArrowAt==re.stream.start){var Te=he?vt:Ke;if(S=="(")return C(De,we(")"),dt(wn,")"),Ie,Fe("=>"),Te,Ve);if(S=="variable")return ve(De,In,Fe("=>"),Te,Ve)}var de=he?bt:et;return We.hasOwnProperty(S)?C(de):S=="function"?C(ur,de):S=="class"||A&&z=="interface"?(re.marked="keyword",C(we("form"),hs,Ie)):S=="keyword c"||S=="async"?C(he?qt:Ge):S=="("?C(we(")"),hn,Fe(")"),Ie,de):S=="operator"||S=="spread"?C(he?qt:Ge):S=="["?C(we("]"),Yt,Ie,de):S=="{"?fn(ot,"}",null,de):S=="quasi"?ve(lt,de):S=="new"?C(oe(he)):C()}function hn(S){return S.match(/[;\}\)\],]/)?ve():ve(Ge)}function et(S,z){return S==","?C(hn):bt(S,z,!1)}function bt(S,z,he){var Te=he==!1?et:bt,de=he==!1?Ge:qt;if(S=="=>")return C(De,he?vt:Ke,Ve);if(S=="operator")return/\+\+|--/.test(z)||A&&z=="!"?C(Te):A&&z=="<"&&re.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?C(we(">"),dt(gt,">"),Ie,Te):z=="?"?C(Ge,Fe(":"),de):C(de);if(S=="quasi")return ve(lt,Te);if(S!=";"){if(S=="(")return fn(qt,")","call",Te);if(S==".")return C($e,Te);if(S=="[")return C(we("]"),hn,Fe("]"),Ie,Te);if(A&&z=="as")return re.marked="keyword",C(gt,Te);if(S=="regexp")return re.state.lastType=re.marked="operator",re.stream.backUp(re.stream.pos-re.stream.start-1),C(de)}}function lt(S,z){return S!="quasi"?ve():z.slice(z.length-2)!="${"?C(lt):C(hn,Zt)}function Zt(S){if(S=="}")return re.marked="string-2",re.state.tokenize=ge,C(lt)}function Ke(S){return Ce(re.stream,re.state),ve(S=="{"?He:Ge)}function vt(S){return Ce(re.stream,re.state),ve(S=="{"?He:qt)}function oe(S){return function(z){return z=="."?C(S?me:Se):z=="variable"&&A?C(ln,S?bt:et):ve(S?qt:Ge)}}function Se(S,z){if(z=="target")return re.marked="keyword",C(et)}function me(S,z){if(z=="target")return re.marked="keyword",C(bt)}function xt(S){return S==":"?C(Ie,He):ve(et,Fe(";"),Ie)}function $e(S){if(S=="variable")return re.marked="property",C()}function ot(S,z){if(S=="async")return re.marked="property",C(ot);if(S=="variable"||re.style=="keyword"){if(re.marked="property",z=="get"||z=="set")return C(qe);var he;return A&&re.state.fatArrowAt==re.stream.start&&(he=re.stream.match(/^\s*:\s*/,!1))&&(re.state.fatArrowAt=re.stream.pos+he[0].length),C(mt)}else{if(S=="number"||S=="string")return re.marked=E?"property":re.style+" property",C(mt);if(S=="jsonld-keyword")return C(mt);if(A&&O(z))return re.marked="keyword",C(ot);if(S=="[")return C(Ge,_r,Fe("]"),mt);if(S=="spread")return C(qt,mt);if(z=="*")return re.marked="keyword",C(ot);if(S==":")return ve(mt)}}function qe(S){return S!="variable"?ve(mt):(re.marked="property",C(ur))}function mt(S){if(S==":")return C(qt);if(S=="(")return ve(ur)}function dt(S,z,he){function Te(de,ze){if(he?he.indexOf(de)>-1:de==","){var _t=re.state.lexical;return _t.info=="call"&&(_t.pos=(_t.pos||0)+1),C(function(Jt,kn){return Jt==z||kn==z?ve():ve(S)},Te)}return de==z||ze==z?C():he&&he.indexOf(";")>-1?ve(S):C(Fe(z))}return function(de,ze){return de==z||ze==z?C():ve(S,Te)}}function fn(S,z,he){for(var Te=3;Te<arguments.length;Te++)re.cc.push(arguments[Te]);return C(we(z,he),dt(S,z),Ie)}function Xn(S){return S=="}"?C():ve(He,Xn)}function _r(S,z){if(A){if(S==":")return C(gt);if(z=="?")return C(_r)}}function Wr(S,z){if(A&&(S==":"||z=="in"))return C(gt)}function sr(S){if(A&&S==":")return re.stream.match(/^\s*\w+\s+is\b/,!1)?C(Ge,yi,gt):C(gt)}function yi(S,z){if(z=="is")return re.marked="keyword",C()}function gt(S,z){if(z=="keyof"||z=="typeof"||z=="infer"||z=="readonly")return re.marked="keyword",C(z=="typeof"?qt:gt);if(S=="variable"||z=="void")return re.marked="type",C(En);if(z=="|"||z=="&")return C(gt);if(S=="string"||S=="number"||S=="atom")return C(En);if(S=="[")return C(we("]"),dt(gt,"]",","),Ie,En);if(S=="{")return C(we("}"),nt,Ie,En);if(S=="(")return C(dt(Rt,")"),Mi,En);if(S=="<")return C(dt(gt,">"),gt);if(S=="quasi")return ve(Gt,En)}function Mi(S){if(S=="=>")return C(gt)}function nt(S){return S.match(/[\}\)\]]/)?C():S==","||S==";"?C(nt):ve(Cr,nt)}function Cr(S,z){if(S=="variable"||re.style=="keyword")return re.marked="property",C(Cr);if(z=="?"||S=="number"||S=="string")return C(Cr);if(S==":")return C(gt);if(S=="[")return C(Fe("variable"),Wr,Fe("]"),Cr);if(S=="(")return ve(qr,Cr);if(!S.match(/[;\}\)\],]/))return C()}function Gt(S,z){return S!="quasi"?ve():z.slice(z.length-2)!="${"?C(Gt):C(gt,At)}function At(S){if(S=="}")return re.marked="string-2",re.state.tokenize=ge,C(Gt)}function Rt(S,z){return S=="variable"&&re.stream.match(/^\s*[?:]/,!1)||z=="?"?C(Rt):S==":"?C(gt):S=="spread"?C(Rt):ve(gt)}function En(S,z){if(z=="<")return C(we(">"),dt(gt,">"),Ie,En);if(z=="|"||S=="."||z=="&")return C(gt);if(S=="[")return C(gt,Fe("]"),En);if(z=="extends"||z=="implements")return re.marked="keyword",C(gt);if(z=="?")return C(gt,Fe(":"),gt)}function ln(S,z){if(z=="<")return C(we(">"),dt(gt,">"),Ie,En)}function ar(){return ve(gt,bn)}function bn(S,z){if(z=="=")return C(gt)}function ni(S,z){return z=="enum"?(re.marked="keyword",C(Xe)):ve(In,_r,Ln,Tr)}function In(S,z){if(A&&O(z))return re.marked="keyword",C(In);if(S=="variable")return G(z),C();if(S=="spread")return C(In);if(S=="[")return fn(Hr,"]");if(S=="{")return fn(lr,"}")}function lr(S,z){return S=="variable"&&!re.stream.match(/^\s*:/,!1)?(G(z),C(Ln)):(S=="variable"&&(re.marked="property"),S=="spread"?C(In):S=="}"?ve():S=="["?C(Ge,Fe("]"),Fe(":"),lr):C(Fe(":"),In,Ln))}function Hr(){return ve(In,Ln)}function Ln(S,z){if(z=="=")return C(qt)}function Tr(S){if(S==",")return C(ni)}function Qn(S,z){if(S=="keyword b"&&z=="else")return C(we("form","else"),He,Ie)}function ri(S,z){if(z=="await")return C(ri);if(S=="(")return C(we(")"),Br,Ie)}function Br(S){return S=="var"?C(ni,Ur):S=="variable"?C(Ur):ve(Ur)}function Ur(S,z){return S==")"?C():S==";"?C(Ur):z=="in"||z=="of"?(re.marked="keyword",C(Ge,Ur)):ve(Ge,Ur)}function ur(S,z){if(z=="*")return re.marked="keyword",C(ur);if(S=="variable")return G(z),C(ur);if(S=="(")return C(De,we(")"),dt(wn,")"),Ie,sr,He,Ve);if(A&&z=="<")return C(we(">"),dt(ar,">"),Ie,ur)}function qr(S,z){if(z=="*")return re.marked="keyword",C(qr);if(S=="variable")return G(z),C(qr);if(S=="(")return C(De,we(")"),dt(wn,")"),Ie,sr,Ve);if(A&&z=="<")return C(we(">"),dt(ar,">"),Ie,qr)}function Po(S,z){if(S=="keyword"||S=="variable")return re.marked="type",C(Po);if(z=="<")return C(we(">"),dt(ar,">"),Ie)}function wn(S,z){return z=="@"&&C(Ge,wn),S=="spread"?C(wn):A&&O(z)?(re.marked="keyword",C(wn)):A&&S=="this"?C(_r,Ln):ve(In,_r,Ln)}function hs(S,z){return S=="variable"?Ar(S,z):Rr(S,z)}function Ar(S,z){if(S=="variable")return G(z),C(Rr)}function Rr(S,z){if(z=="<")return C(we(">"),dt(ar,">"),Ie,Rr);if(z=="extends"||z=="implements"||A&&S==",")return z=="implements"&&(re.marked="keyword"),C(A?gt:Ge,Rr);if(S=="{")return C(we("}"),Nr,Ie)}function Nr(S,z){if(S=="async"||S=="variable"&&(z=="static"||z=="get"||z=="set"||A&&O(z))&&re.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return re.marked="keyword",C(Nr);if(S=="variable"||re.style=="keyword")return re.marked="property",C(Ft,Nr);if(S=="number"||S=="string")return C(Ft,Nr);if(S=="[")return C(Ge,_r,Fe("]"),Ft,Nr);if(z=="*")return re.marked="keyword",C(Nr);if(A&&S=="(")return ve(qr,Nr);if(S==";"||S==",")return C(Nr);if(S=="}")return C();if(z=="@")return C(Ge,Nr)}function Ft(S,z){if(z=="!"||z=="?")return C(Ft);if(S==":")return C(gt,Ln);if(z=="=")return C(qt);var he=re.state.lexical.prev,Te=he&&he.info=="interface";return ve(Te?qr:ur)}function Er(S,z){return z=="*"?(re.marked="keyword",C(xi,Fe(";"))):z=="default"?(re.marked="keyword",C(Ge,Fe(";"))):S=="{"?C(dt(Di,"}"),xi,Fe(";")):ve(He)}function Di(S,z){if(z=="as")return re.marked="keyword",C(Fe("variable"));if(S=="variable")return ve(qt,Di)}function ii(S){return S=="string"?C():S=="("?ve(Ge):S=="."?ve(et):ve(vi,Pt,xi)}function vi(S,z){return S=="{"?fn(vi,"}"):(S=="variable"&&G(z),z=="*"&&(re.marked="keyword"),C(ro))}function Pt(S){if(S==",")return C(vi,Pt)}function ro(S,z){if(z=="as")return re.marked="keyword",C(vi)}function xi(S,z){if(z=="from")return re.marked="keyword",C(Ge)}function Yt(S){return S=="]"?C():ve(dt(qt,"]"))}function Xe(){return ve(we("form"),In,Fe("{"),we("}"),dt(oi,"}"),Ie,Ie)}function oi(){return ve(In,Ln)}function cr(S,z){return S.lastType=="operator"||S.lastType==","||X.test(z.charAt(0))||/[,.]/.test(z.charAt(0))}function On(S,z,he){return z.tokenize==U&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(z.lastType)||z.lastType=="quasi"&&/\{\s*$/.test(S.string.slice(0,S.pos-(he||0)))}return{startState:function(S){var z={tokenize:U,lastType:"sof",cc:[],lexical:new _e((S||0)-w,0,"block",!1),localVars:b.localVars,context:b.localVars&&new Y(null,null,!1),indented:S||0};return b.globalVars&&typeof b.globalVars=="object"&&(z.globalVars=b.globalVars),z},token:function(S,z){if(S.sol()&&(z.lexical.hasOwnProperty("align")||(z.lexical.align=!1),z.indented=S.indentation(),Ce(S,z)),z.tokenize!=se&&S.eatSpace())return null;var he=z.tokenize(S,z);return ue=="comment"?he:(z.lastType=ue=="operator"&&(D=="++"||D=="--")?"incdec":ue,Ee(z,he,ue,D,S))},indent:function(S,z){if(S.tokenize==se||S.tokenize==ge)return d.Pass;if(S.tokenize!=U)return 0;var he=z&&z.charAt(0),Te=S.lexical,de;if(!/^\s*else\b/.test(z))for(var ze=S.cc.length-1;ze>=0;--ze){var _t=S.cc[ze];if(_t==Ie)Te=Te.prev;else if(_t!=Qn&&_t!=Ve)break}for(;(Te.type=="stat"||Te.type=="form")&&(he=="}"||(de=S.cc[S.cc.length-1])&&(de==et||de==bt)&&!/^[,\.=+\-*:?[\(]/.test(z));)Te=Te.prev;L&&Te.type==")"&&Te.prev.type=="stat"&&(Te=Te.prev);var Jt=Te.type,kn=he==Jt;return Jt=="vardef"?Te.indented+(S.lastType=="operator"||S.lastType==","?Te.info.length+1:0):Jt=="form"&&he=="{"?Te.indented:Jt=="form"?Te.indented+w:Jt=="stat"?Te.indented+(cr(S,z)?L||w:0):Te.info=="switch"&&!kn&&b.doubleIndentSwitch!=!1?Te.indented+(/^(?:case|default)\b/.test(z)?w:2*w):Te.align?Te.column+(kn?0:1):Te.indented+(kn?0:w)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:_?null:"/*",blockCommentEnd:_?null:"*/",blockCommentContinue:_?null:" * ",lineComment:_?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:_?"json":"javascript",jsonldMode:E,jsonMode:_,expressionAllowed:On,skipExpression:function(S){Ee(S,"atom","atom","true",new d.StringStream("",2,null))}}}),d.registerHelper("wordChars","javascript",/[\w$]/),d.defineMIME("text/javascript","javascript"),d.defineMIME("text/ecmascript","javascript"),d.defineMIME("application/javascript","javascript"),d.defineMIME("application/x-javascript","javascript"),d.defineMIME("application/ecmascript","javascript"),d.defineMIME("application/json",{name:"javascript",json:!0}),d.defineMIME("application/x-json",{name:"javascript",json:!0}),d.defineMIME("application/manifest+json",{name:"javascript",json:!0}),d.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),d.defineMIME("text/typescript",{name:"javascript",typescript:!0}),d.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),Zh.exports}em();var ef={exports:{}},tf;function Zv(){return tf||(tf=1,(function(c,p){(function(d){d(no())})(function(d){function v(N,O,Y,W,ae,De){this.indented=N,this.column=O,this.type=Y,this.info=W,this.align=ae,this.prev=De}function b(N,O,Y,W){var ae=N.indented;return N.context&&N.context.type=="statement"&&Y!="statement"&&(ae=N.context.indented),N.context=new v(ae,O,Y,W,null,N.context)}function w(N){var O=N.context.type;return(O==")"||O=="]"||O=="}")&&(N.indented=N.context.indented),N.context=N.context.prev}function L(N,O,Y){if(O.prevToken=="variable"||O.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(N.string.slice(0,Y))||O.typeAtEndOfLine&&N.column()==N.indentation())return!0}function E(N){for(;;){if(!N||N.type=="top")return!0;if(N.type=="}"&&N.prev.info!="namespace")return!1;N=N.prev}}d.defineMode("clike",function(N,O){var Y=N.indentUnit,W=O.statementIndentUnit||Y,ae=O.dontAlignCalls,De=O.keywords||{},Je=O.types||{},Ve=O.builtin||{},we=O.blockKeywords||{},Ie=O.defKeywords||{},Fe=O.atoms||{},He=O.hooks||{},tt=O.multiLineStrings,Ge=O.indentStatements!==!1,qt=O.indentSwitch!==!1,Qt=O.namespaceSeparator,$t=O.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,hn=O.numberStart||/[\d\.]/,et=O.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,bt=O.isOperatorChar||/[+\-*&%=<>!?|\/]/,lt=O.isIdentifierChar||/[\w\$_\xa1-\uffff]/,Zt=O.isReservedIdentifier||!1,Ke,vt;function oe($e,ot){var qe=$e.next();if(He[qe]){var mt=He[qe]($e,ot);if(mt!==!1)return mt}if(qe=='"'||qe=="'")return ot.tokenize=Se(qe),ot.tokenize($e,ot);if(hn.test(qe)){if($e.backUp(1),$e.match(et))return"number";$e.next()}if($t.test(qe))return Ke=qe,null;if(qe=="/"){if($e.eat("*"))return ot.tokenize=me,me($e,ot);if($e.eat("/"))return $e.skipToEnd(),"comment"}if(bt.test(qe)){for(;!$e.match(/^\/[\/*]/,!1)&&$e.eat(bt););return"operator"}if($e.eatWhile(lt),Qt)for(;$e.match(Qt);)$e.eatWhile(lt);var dt=$e.current();return P(De,dt)?(P(we,dt)&&(Ke="newstatement"),P(Ie,dt)&&(vt=!0),"keyword"):P(Je,dt)?"type":P(Ve,dt)||Zt&&Zt(dt)?(P(we,dt)&&(Ke="newstatement"),"builtin"):P(Fe,dt)?"atom":"variable"}function Se($e){return function(ot,qe){for(var mt=!1,dt,fn=!1;(dt=ot.next())!=null;){if(dt==$e&&!mt){fn=!0;break}mt=!mt&&dt=="\\"}return(fn||!(mt||tt))&&(qe.tokenize=null),"string"}}function me($e,ot){for(var qe=!1,mt;mt=$e.next();){if(mt=="/"&&qe){ot.tokenize=null;break}qe=mt=="*"}return"comment"}function xt($e,ot){O.typeFirstDefinitions&&$e.eol()&&E(ot.context)&&(ot.typeAtEndOfLine=L($e,ot,$e.pos))}return{startState:function($e){return{tokenize:null,context:new v(($e||0)-Y,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function($e,ot){var qe=ot.context;if($e.sol()&&(qe.align==null&&(qe.align=!1),ot.indented=$e.indentation(),ot.startOfLine=!0),$e.eatSpace())return xt($e,ot),null;Ke=vt=null;var mt=(ot.tokenize||oe)($e,ot);if(mt=="comment"||mt=="meta")return mt;if(qe.align==null&&(qe.align=!0),Ke==";"||Ke==":"||Ke==","&&$e.match(/^\s*(?:\/\/.*)?$/,!1))for(;ot.context.type=="statement";)w(ot);else if(Ke=="{")b(ot,$e.column(),"}");else if(Ke=="[")b(ot,$e.column(),"]");else if(Ke=="(")b(ot,$e.column(),")");else if(Ke=="}"){for(;qe.type=="statement";)qe=w(ot);for(qe.type=="}"&&(qe=w(ot));qe.type=="statement";)qe=w(ot)}else Ke==qe.type?w(ot):Ge&&((qe.type=="}"||qe.type=="top")&&Ke!=";"||qe.type=="statement"&&Ke=="newstatement")&&b(ot,$e.column(),"statement",$e.current());if(mt=="variable"&&(ot.prevToken=="def"||O.typeFirstDefinitions&&L($e,ot,$e.start)&&E(ot.context)&&$e.match(/^\s*\(/,!1))&&(mt="def"),He.token){var dt=He.token($e,ot,mt);dt!==void 0&&(mt=dt)}return mt=="def"&&O.styleDefs===!1&&(mt="variable"),ot.startOfLine=!1,ot.prevToken=vt?"def":mt||Ke,xt($e,ot),mt},indent:function($e,ot){if($e.tokenize!=oe&&$e.tokenize!=null||$e.typeAtEndOfLine&&E($e.context))return d.Pass;var qe=$e.context,mt=ot&&ot.charAt(0),dt=mt==qe.type;if(qe.type=="statement"&&mt=="}"&&(qe=qe.prev),O.dontIndentStatements)for(;qe.type=="statement"&&O.dontIndentStatements.test(qe.info);)qe=qe.prev;if(He.indent){var fn=He.indent($e,qe,ot,Y);if(typeof fn=="number")return fn}var Xn=qe.prev&&qe.prev.info=="switch";if(O.allmanIndentation&&/[{(]/.test(mt)){for(;qe.type!="top"&&qe.type!="}";)qe=qe.prev;return qe.indented}return qe.type=="statement"?qe.indented+(mt=="{"?0:W):qe.align&&(!ae||qe.type!=")")?qe.column+(dt?0:1):qe.type==")"&&!dt?qe.indented+W:qe.indented+(dt?0:Y)+(!dt&&Xn&&!/^(?:case|default)\b/.test(ot)?Y:0)},electricInput:qt?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function _(N){for(var O={},Y=N.split(" "),W=0;W<Y.length;++W)O[Y[W]]=!0;return O}function P(N,O){return typeof N=="function"?N(O):N.propertyIsEnumerable(O)}var A="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",M="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",R="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",X="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",ne=_("int long char short double float unsigned signed void bool"),J=_("SEL instancetype id Class Protocol BOOL");function ue(N){return P(ne,N)||/.+_t$/.test(N)}function D(N){return ue(N)||P(J,N)}var H="case do else for if switch while struct enum union",U="struct enum union";function $(N,O){if(!O.startOfLine)return!1;for(var Y,W=null;Y=N.peek();){if(Y=="\\"&&N.match(/^.$/)){W=$;break}else if(Y=="/"&&N.match(/^\/[\/\*]/,!1))break;N.next()}return O.tokenize=W,"meta"}function se(N,O){return O.prevToken=="type"?"type":!1}function ge(N){return!N||N.length<2||N[0]!="_"?!1:N[1]=="_"||N[1]!==N[1].toLowerCase()}function ie(N){return N.eatWhile(/[\w\.']/),"number"}function Ce(N,O){if(N.backUp(1),N.match(/^(?:R|u8R|uR|UR|LR)/)){var Y=N.match(/^"([^\s\\()]{0,16})\(/);return Y?(O.cpp11RawStringDelim=Y[1],O.tokenize=q,q(N,O)):!1}return N.match(/^(?:u8|u|U|L)/)?N.match(/^["']/,!1)?"string":!1:(N.next(),!1)}function We(N){var O=/(\w+)::~?(\w+)$/.exec(N);return O&&O[1]==O[2]}function _e(N,O){for(var Y;(Y=N.next())!=null;)if(Y=='"'&&!N.eat('"')){O.tokenize=null;break}return"string"}function q(N,O){var Y=O.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),W=N.match(new RegExp(".*?\\)"+Y+'"'));return W?O.tokenize=null:N.skipToEnd(),"string"}function Ee(N,O){typeof N=="string"&&(N=[N]);var Y=[];function W(De){if(De)for(var Je in De)De.hasOwnProperty(Je)&&Y.push(Je)}W(O.keywords),W(O.types),W(O.builtin),W(O.atoms),Y.length&&(O.helperType=N[0],d.registerHelper("hintWords",N[0],Y));for(var ae=0;ae<N.length;++ae)d.defineMIME(N[ae],O)}Ee(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:_(A),types:ue,blockKeywords:_(H),defKeywords:_(U),typeFirstDefinitions:!0,atoms:_("NULL true false"),isReservedIdentifier:ge,hooks:{"#":$,"*":se},modeProps:{fold:["brace","include"]}}),Ee(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:_(A+" "+M),types:ue,blockKeywords:_(H+" class try catch"),defKeywords:_(U+" class namespace"),typeFirstDefinitions:!0,atoms:_("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ge,hooks:{"#":$,"*":se,u:Ce,U:Ce,L:Ce,R:Ce,0:ie,1:ie,2:ie,3:ie,4:ie,5:ie,6:ie,7:ie,8:ie,9:ie,token:function(N,O,Y){if(Y=="variable"&&N.peek()=="("&&(O.prevToken==";"||O.prevToken==null||O.prevToken=="}")&&We(N.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ee("text/x-java",{name:"clike",keywords:_("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:_("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:_("catch class do else finally for if switch try while"),defKeywords:_("class interface enum @interface"),typeFirstDefinitions:!0,atoms:_("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(N){return N.match("interface",!1)?!1:(N.eatWhile(/[\w\$_]/),"meta")},'"':function(N,O){return N.match(/""$/)?(O.tokenize=re,O.tokenize(N,O)):!1}},modeProps:{fold:["brace","import"]}}),Ee("text/x-csharp",{name:"clike",keywords:_("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:_("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:_("catch class do else finally for foreach if struct switch try while"),defKeywords:_("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:_("true false null"),hooks:{"@":function(N,O){return N.eat('"')?(O.tokenize=_e,_e(N,O)):(N.eatWhile(/[\w\$_]/),"meta")}}});function re(N,O){for(var Y=!1;!N.eol();){if(!Y&&N.match('"""')){O.tokenize=null;break}Y=N.next()=="\\"&&!Y}return"string"}function ve(N){return function(O,Y){for(var W;W=O.next();)if(W=="*"&&O.eat("/"))if(N==1){Y.tokenize=null;break}else return Y.tokenize=ve(N-1),Y.tokenize(O,Y);else if(W=="/"&&O.eat("*"))return Y.tokenize=ve(N+1),Y.tokenize(O,Y);return"comment"}}Ee("text/x-scala",{name:"clike",keywords:_("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:_("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:_("catch class enum do else finally for forSome if match switch try while"),defKeywords:_("class enum def object package trait type val var"),atoms:_("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(N){return N.eatWhile(/[\w\$_]/),"meta"},'"':function(N,O){return N.match('""')?(O.tokenize=re,O.tokenize(N,O)):!1},"'":function(N){return N.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(N.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(N,O){var Y=O.context;return Y.type=="}"&&Y.align&&N.eat(">")?(O.context=new v(Y.indented,Y.column,Y.type,Y.info,null,Y.prev),"operator"):!1},"/":function(N,O){return N.eat("*")?(O.tokenize=ve(1),O.tokenize(N,O)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function C(N){return function(O,Y){for(var W=!1,ae,De=!1;!O.eol();){if(!N&&!W&&O.match('"')){De=!0;break}if(N&&O.match('"""')){De=!0;break}ae=O.next(),!W&&ae=="$"&&O.match("{")&&O.skipTo("}"),W=!W&&ae=="\\"&&!N}return(De||!N)&&(Y.tokenize=null),"string"}}Ee("text/x-kotlin",{name:"clike",keywords:_("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:_("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:_("catch class do else finally for if where try while enum"),defKeywords:_("class val var object interface fun"),atoms:_("true false null this"),hooks:{"@":function(N){return N.eatWhile(/[\w\$_]/),"meta"},"*":function(N,O){return O.prevToken=="."?"variable":"operator"},'"':function(N,O){return O.tokenize=C(N.match('""')),O.tokenize(N,O)},"/":function(N,O){return N.eat("*")?(O.tokenize=ve(1),O.tokenize(N,O)):!1},indent:function(N,O,Y,W){var ae=Y&&Y.charAt(0);if((N.prevToken=="}"||N.prevToken==")")&&Y=="")return N.indented;if(N.prevToken=="operator"&&Y!="}"&&N.context.type!="}"||N.prevToken=="variable"&&ae=="."||(N.prevToken=="}"||N.prevToken==")")&&ae==".")return W*2+O.indented;if(O.align&&O.type=="}")return O.indented+(N.context.type==(Y||"").charAt(0)?0:W)}},modeProps:{closeBrackets:{triples:'"'}}}),Ee(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:_("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:_("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:_("for while do if else struct"),builtin:_("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:_("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":$},modeProps:{fold:["brace","include"]}}),Ee("text/x-nesc",{name:"clike",keywords:_(A+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:ue,blockKeywords:_(H),atoms:_("null true false"),hooks:{"#":$},modeProps:{fold:["brace","include"]}}),Ee("text/x-objectivec",{name:"clike",keywords:_(A+" "+R),types:D,builtin:_(X),blockKeywords:_(H+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:_(U+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:_("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":$,"*":se},modeProps:{fold:["brace","include"]}}),Ee("text/x-objectivec++",{name:"clike",keywords:_(A+" "+R+" "+M),types:D,builtin:_(X),blockKeywords:_(H+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:_(U+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:_("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ge,hooks:{"#":$,"*":se,u:Ce,U:Ce,L:Ce,R:Ce,0:ie,1:ie,2:ie,3:ie,4:ie,5:ie,6:ie,7:ie,8:ie,9:ie,token:function(N,O,Y){if(Y=="variable"&&N.peek()=="("&&(O.prevToken==";"||O.prevToken==null||O.prevToken=="}")&&We(N.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ee("text/x-squirrel",{name:"clike",keywords:_("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:ue,blockKeywords:_("case catch class else for foreach if switch try while"),defKeywords:_("function local class"),typeFirstDefinitions:!0,atoms:_("true false null"),hooks:{"#":$},modeProps:{fold:["brace","include"]}});var Q=null;function G(N){return function(O,Y){for(var W=!1,ae,De=!1;!O.eol();){if(!W&&O.match('"')&&(N=="single"||O.match('""'))){De=!0;break}if(!W&&O.match("``")){Q=G(N),De=!0;break}ae=O.next(),W=N=="single"&&!W&&ae=="\\"}return De&&(Y.tokenize=null),"string"}}Ee("text/x-ceylon",{name:"clike",keywords:_("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(N){var O=N.charAt(0);return O===O.toUpperCase()&&O!==O.toLowerCase()},blockKeywords:_("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:_("class dynamic function interface module object package value"),builtin:_("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:_("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(N){return N.eatWhile(/[\w\$_]/),"meta"},'"':function(N,O){return O.tokenize=G(N.match('""')?"triple":"single"),O.tokenize(N,O)},"`":function(N,O){return!Q||!N.match("`")?!1:(O.tokenize=Q,Q=null,O.tokenize(N,O))},"'":function(N){return N.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(N,O,Y){if((Y=="variable"||Y=="type")&&O.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),ef.exports}Zv();var nf={exports:{}},rf;function tm(){return rf||(rf=1,(function(c,p){(function(d){d(no())})(function(d){var v={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},b={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};d.defineMode("xml",function(w,L){var E=w.indentUnit,_={},P=L.htmlMode?v:b;for(var A in P)_[A]=P[A];for(var A in L)_[A]=L[A];var M,R;function X(C,Q){function G(Y){return Q.tokenize=Y,Y(C,Q)}var N=C.next();if(N=="<")return C.eat("!")?C.eat("[")?C.match("CDATA[")?G(ue("atom","]]>")):null:C.match("--")?G(ue("comment","-->")):C.match("DOCTYPE",!0,!0)?(C.eatWhile(/[\w\._\-]/),G(D(1))):null:C.eat("?")?(C.eatWhile(/[\w\._\-]/),Q.tokenize=ue("meta","?>"),"meta"):(M=C.eat("/")?"closeTag":"openTag",Q.tokenize=ne,"tag bracket");if(N=="&"){var O;return C.eat("#")?C.eat("x")?O=C.eatWhile(/[a-fA-F\d]/)&&C.eat(";"):O=C.eatWhile(/[\d]/)&&C.eat(";"):O=C.eatWhile(/[\w\.\-:]/)&&C.eat(";"),O?"atom":"error"}else return C.eatWhile(/[^&<]/),null}X.isInText=!0;function ne(C,Q){var G=C.next();if(G==">"||G=="/"&&C.eat(">"))return Q.tokenize=X,M=G==">"?"endTag":"selfcloseTag","tag bracket";if(G=="=")return M="equals",null;if(G=="<"){Q.tokenize=X,Q.state=ge,Q.tagName=Q.tagStart=null;var N=Q.tokenize(C,Q);return N?N+" tag error":"tag error"}else return/[\'\"]/.test(G)?(Q.tokenize=J(G),Q.stringStartCol=C.column(),Q.tokenize(C,Q)):(C.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function J(C){var Q=function(G,N){for(;!G.eol();)if(G.next()==C){N.tokenize=ne;break}return"string"};return Q.isInAttribute=!0,Q}function ue(C,Q){return function(G,N){for(;!G.eol();){if(G.match(Q)){N.tokenize=X;break}G.next()}return C}}function D(C){return function(Q,G){for(var N;(N=Q.next())!=null;){if(N=="<")return G.tokenize=D(C+1),G.tokenize(Q,G);if(N==">")if(C==1){G.tokenize=X;break}else return G.tokenize=D(C-1),G.tokenize(Q,G)}return"meta"}}function H(C){return C&&C.toLowerCase()}function U(C,Q,G){this.prev=C.context,this.tagName=Q||"",this.indent=C.indented,this.startOfLine=G,(_.doNotIndent.hasOwnProperty(Q)||C.context&&C.context.noIndent)&&(this.noIndent=!0)}function $(C){C.context&&(C.context=C.context.prev)}function se(C,Q){for(var G;;){if(!C.context||(G=C.context.tagName,!_.contextGrabbers.hasOwnProperty(H(G))||!_.contextGrabbers[H(G)].hasOwnProperty(H(Q))))return;$(C)}}function ge(C,Q,G){return C=="openTag"?(G.tagStart=Q.column(),ie):C=="closeTag"?Ce:ge}function ie(C,Q,G){return C=="word"?(G.tagName=Q.current(),R="tag",q):_.allowMissingTagName&&C=="endTag"?(R="tag bracket",q(C,Q,G)):(R="error",ie)}function Ce(C,Q,G){if(C=="word"){var N=Q.current();return G.context&&G.context.tagName!=N&&_.implicitlyClosed.hasOwnProperty(H(G.context.tagName))&&$(G),G.context&&G.context.tagName==N||_.matchClosing===!1?(R="tag",We):(R="tag error",_e)}else return _.allowMissingTagName&&C=="endTag"?(R="tag bracket",We(C,Q,G)):(R="error",_e)}function We(C,Q,G){return C!="endTag"?(R="error",We):($(G),ge)}function _e(C,Q,G){return R="error",We(C,Q,G)}function q(C,Q,G){if(C=="word")return R="attribute",Ee;if(C=="endTag"||C=="selfcloseTag"){var N=G.tagName,O=G.tagStart;return G.tagName=G.tagStart=null,C=="selfcloseTag"||_.autoSelfClosers.hasOwnProperty(H(N))?se(G,N):(se(G,N),G.context=new U(G,N,O==G.indented)),ge}return R="error",q}function Ee(C,Q,G){return C=="equals"?re:(_.allowMissing||(R="error"),q(C,Q,G))}function re(C,Q,G){return C=="string"?ve:C=="word"&&_.allowUnquoted?(R="string",q):(R="error",q(C,Q,G))}function ve(C,Q,G){return C=="string"?ve:q(C,Q,G)}return{startState:function(C){var Q={tokenize:X,state:ge,indented:C||0,tagName:null,tagStart:null,context:null};return C!=null&&(Q.baseIndent=C),Q},token:function(C,Q){if(!Q.tagName&&C.sol()&&(Q.indented=C.indentation()),C.eatSpace())return null;M=null;var G=Q.tokenize(C,Q);return(G||M)&&G!="comment"&&(R=null,Q.state=Q.state(M||G,C,Q),R&&(G=R=="error"?G+" error":R)),G},indent:function(C,Q,G){var N=C.context;if(C.tokenize.isInAttribute)return C.tagStart==C.indented?C.stringStartCol+1:C.indented+E;if(N&&N.noIndent)return d.Pass;if(C.tokenize!=ne&&C.tokenize!=X)return G?G.match(/^(\s*)/)[0].length:0;if(C.tagName)return _.multilineTagIndentPastTag!==!1?C.tagStart+C.tagName.length+2:C.tagStart+E*(_.multilineTagIndentFactor||1);if(_.alignCDATA&&/<!\[CDATA\[/.test(Q))return 0;var O=Q&&/^<(\/)?([\w_:\.-]*)/.exec(Q);if(O&&O[1])for(;N;)if(N.tagName==O[2]){N=N.prev;break}else if(_.implicitlyClosed.hasOwnProperty(H(N.tagName)))N=N.prev;else break;else if(O)for(;N;){var Y=_.contextGrabbers[H(N.tagName)];if(Y&&Y.hasOwnProperty(H(O[2])))N=N.prev;else break}for(;N&&N.prev&&!N.startOfLine;)N=N.prev;return N?N.indent+E:C.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:_.htmlMode?"html":"xml",helperType:_.htmlMode?"html":"xml",skipAttribute:function(C){C.state==re&&(C.state=q)},xmlCurrentTag:function(C){return C.tagName?{name:C.tagName,close:C.type=="closeTag"}:null},xmlCurrentContext:function(C){for(var Q=[],G=C.context;G;G=G.prev)Q.push(G.tagName);return Q.reverse()}}}),d.defineMIME("text/xml","xml"),d.defineMIME("application/xml","xml"),d.mimeModes.hasOwnProperty("text/html")||d.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),nf.exports}tm();var of={exports:{}},sf;function nm(){return sf||(sf=1,(function(c,p){(function(d){d(no())})(function(d){d.defineMode("css",function(_e,q){var Ee=q.inline;q.propertyKeywords||(q=d.resolveMode("text/css"));var re=_e.indentUnit,ve=q.tokenHooks,C=q.documentTypes||{},Q=q.mediaTypes||{},G=q.mediaFeatures||{},N=q.mediaValueKeywords||{},O=q.propertyKeywords||{},Y=q.nonStandardPropertyKeywords||{},W=q.fontProperties||{},ae=q.counterDescriptors||{},De=q.colorKeywords||{},Je=q.valueKeywords||{},Ve=q.allowNested,we=q.lineComment,Ie=q.supportsAtComponent===!0,Fe=_e.highlightNonStandardPropertyKeywords!==!1,He,tt;function Ge(oe,Se){return He=Se,oe}function qt(oe,Se){var me=oe.next();if(ve[me]){var xt=ve[me](oe,Se);if(xt!==!1)return xt}if(me=="@")return oe.eatWhile(/[\w\\\-]/),Ge("def",oe.current());if(me=="="||(me=="~"||me=="|")&&oe.eat("="))return Ge(null,"compare");if(me=='"'||me=="'")return Se.tokenize=Qt(me),Se.tokenize(oe,Se);if(me=="#")return oe.eatWhile(/[\w\\\-]/),Ge("atom","hash");if(me=="!")return oe.match(/^\s*\w*/),Ge("keyword","important");if(/\d/.test(me)||me=="."&&oe.eat(/\d/))return oe.eatWhile(/[\w.%]/),Ge("number","unit");if(me==="-"){if(/[\d.]/.test(oe.peek()))return oe.eatWhile(/[\w.%]/),Ge("number","unit");if(oe.match(/^-[\w\\\-]*/))return oe.eatWhile(/[\w\\\-]/),oe.match(/^\s*:/,!1)?Ge("variable-2","variable-definition"):Ge("variable-2","variable");if(oe.match(/^\w+-/))return Ge("meta","meta")}else return/[,+>*\/]/.test(me)?Ge(null,"select-op"):me=="."&&oe.match(/^-?[_a-z][_a-z0-9-]*/i)?Ge("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(me)?Ge(null,me):oe.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(oe.current())&&(Se.tokenize=$t),Ge("variable callee","variable")):/[\w\\\-]/.test(me)?(oe.eatWhile(/[\w\\\-]/),Ge("property","word")):Ge(null,null)}function Qt(oe){return function(Se,me){for(var xt=!1,$e;($e=Se.next())!=null;){if($e==oe&&!xt){oe==")"&&Se.backUp(1);break}xt=!xt&&$e=="\\"}return($e==oe||!xt&&oe!=")")&&(me.tokenize=null),Ge("string","string")}}function $t(oe,Se){return oe.next(),oe.match(/^\s*[\"\')]/,!1)?Se.tokenize=null:Se.tokenize=Qt(")"),Ge(null,"(")}function hn(oe,Se,me){this.type=oe,this.indent=Se,this.prev=me}function et(oe,Se,me,xt){return oe.context=new hn(me,Se.indentation()+(xt===!1?0:re),oe.context),me}function bt(oe){return oe.context.prev&&(oe.context=oe.context.prev),oe.context.type}function lt(oe,Se,me){return vt[me.context.type](oe,Se,me)}function Zt(oe,Se,me,xt){for(var $e=xt||1;$e>0;$e--)me.context=me.context.prev;return lt(oe,Se,me)}function Ke(oe){var Se=oe.current().toLowerCase();Je.hasOwnProperty(Se)?tt="atom":De.hasOwnProperty(Se)?tt="keyword":tt="variable"}var vt={};return vt.top=function(oe,Se,me){if(oe=="{")return et(me,Se,"block");if(oe=="}"&&me.context.prev)return bt(me);if(Ie&&/@component/i.test(oe))return et(me,Se,"atComponentBlock");if(/^@(-moz-)?document$/i.test(oe))return et(me,Se,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(oe))return et(me,Se,"atBlock");if(/^@(font-face|counter-style)/i.test(oe))return me.stateArg=oe,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(oe))return"keyframes";if(oe&&oe.charAt(0)=="@")return et(me,Se,"at");if(oe=="hash")tt="builtin";else if(oe=="word")tt="tag";else{if(oe=="variable-definition")return"maybeprop";if(oe=="interpolation")return et(me,Se,"interpolation");if(oe==":")return"pseudo";if(Ve&&oe=="(")return et(me,Se,"parens")}return me.context.type},vt.block=function(oe,Se,me){if(oe=="word"){var xt=Se.current().toLowerCase();return O.hasOwnProperty(xt)?(tt="property","maybeprop"):Y.hasOwnProperty(xt)?(tt=Fe?"string-2":"property","maybeprop"):Ve?(tt=Se.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return oe=="meta"?"block":!Ve&&(oe=="hash"||oe=="qualifier")?(tt="error","block"):vt.top(oe,Se,me)},vt.maybeprop=function(oe,Se,me){return oe==":"?et(me,Se,"prop"):lt(oe,Se,me)},vt.prop=function(oe,Se,me){if(oe==";")return bt(me);if(oe=="{"&&Ve)return et(me,Se,"propBlock");if(oe=="}"||oe=="{")return Zt(oe,Se,me);if(oe=="(")return et(me,Se,"parens");if(oe=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(Se.current()))tt+=" error";else if(oe=="word")Ke(Se);else if(oe=="interpolation")return et(me,Se,"interpolation");return"prop"},vt.propBlock=function(oe,Se,me){return oe=="}"?bt(me):oe=="word"?(tt="property","maybeprop"):me.context.type},vt.parens=function(oe,Se,me){return oe=="{"||oe=="}"?Zt(oe,Se,me):oe==")"?bt(me):oe=="("?et(me,Se,"parens"):oe=="interpolation"?et(me,Se,"interpolation"):(oe=="word"&&Ke(Se),"parens")},vt.pseudo=function(oe,Se,me){return oe=="meta"?"pseudo":oe=="word"?(tt="variable-3",me.context.type):lt(oe,Se,me)},vt.documentTypes=function(oe,Se,me){return oe=="word"&&C.hasOwnProperty(Se.current())?(tt="tag",me.context.type):vt.atBlock(oe,Se,me)},vt.atBlock=function(oe,Se,me){if(oe=="(")return et(me,Se,"atBlock_parens");if(oe=="}"||oe==";")return Zt(oe,Se,me);if(oe=="{")return bt(me)&&et(me,Se,Ve?"block":"top");if(oe=="interpolation")return et(me,Se,"interpolation");if(oe=="word"){var xt=Se.current().toLowerCase();xt=="only"||xt=="not"||xt=="and"||xt=="or"?tt="keyword":Q.hasOwnProperty(xt)?tt="attribute":G.hasOwnProperty(xt)?tt="property":N.hasOwnProperty(xt)?tt="keyword":O.hasOwnProperty(xt)?tt="property":Y.hasOwnProperty(xt)?tt=Fe?"string-2":"property":Je.hasOwnProperty(xt)?tt="atom":De.hasOwnProperty(xt)?tt="keyword":tt="error"}return me.context.type},vt.atComponentBlock=function(oe,Se,me){return oe=="}"?Zt(oe,Se,me):oe=="{"?bt(me)&&et(me,Se,Ve?"block":"top",!1):(oe=="word"&&(tt="error"),me.context.type)},vt.atBlock_parens=function(oe,Se,me){return oe==")"?bt(me):oe=="{"||oe=="}"?Zt(oe,Se,me,2):vt.atBlock(oe,Se,me)},vt.restricted_atBlock_before=function(oe,Se,me){return oe=="{"?et(me,Se,"restricted_atBlock"):oe=="word"&&me.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):lt(oe,Se,me)},vt.restricted_atBlock=function(oe,Se,me){return oe=="}"?(me.stateArg=null,bt(me)):oe=="word"?(me.stateArg=="@font-face"&&!W.hasOwnProperty(Se.current().toLowerCase())||me.stateArg=="@counter-style"&&!ae.hasOwnProperty(Se.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},vt.keyframes=function(oe,Se,me){return oe=="word"?(tt="variable","keyframes"):oe=="{"?et(me,Se,"top"):lt(oe,Se,me)},vt.at=function(oe,Se,me){return oe==";"?bt(me):oe=="{"||oe=="}"?Zt(oe,Se,me):(oe=="word"?tt="tag":oe=="hash"&&(tt="builtin"),"at")},vt.interpolation=function(oe,Se,me){return oe=="}"?bt(me):oe=="{"||oe==";"?Zt(oe,Se,me):(oe=="word"?tt="variable":oe!="variable"&&oe!="("&&oe!=")"&&(tt="error"),"interpolation")},{startState:function(oe){return{tokenize:null,state:Ee?"block":"top",stateArg:null,context:new hn(Ee?"block":"top",oe||0,null)}},token:function(oe,Se){if(!Se.tokenize&&oe.eatSpace())return null;var me=(Se.tokenize||qt)(oe,Se);return me&&typeof me=="object"&&(He=me[1],me=me[0]),tt=me,He!="comment"&&(Se.state=vt[Se.state](He,oe,Se)),tt},indent:function(oe,Se){var me=oe.context,xt=Se&&Se.charAt(0),$e=me.indent;return me.type=="prop"&&(xt=="}"||xt==")")&&(me=me.prev),me.prev&&(xt=="}"&&(me.type=="block"||me.type=="top"||me.type=="interpolation"||me.type=="restricted_atBlock")?(me=me.prev,$e=me.indent):(xt==")"&&(me.type=="parens"||me.type=="atBlock_parens")||xt=="{"&&(me.type=="at"||me.type=="atBlock"))&&($e=Math.max(0,me.indent-re))),$e},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:we,fold:"brace"}});function v(_e){for(var q={},Ee=0;Ee<_e.length;++Ee)q[_e[Ee].toLowerCase()]=!0;return q}var b=["domain","regexp","url","url-prefix"],w=v(b),L=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],E=v(L),_=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],P=v(_),A=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],M=v(A),R=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],X=v(R),ne=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],J=v(ne),ue=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],D=v(ue),H=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],U=v(H),$=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],se=v($),ge=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],ie=v(ge),Ce=b.concat(L).concat(_).concat(A).concat(R).concat(ne).concat($).concat(ge);d.registerHelper("hintWords","css",Ce);function We(_e,q){for(var Ee=!1,re;(re=_e.next())!=null;){if(Ee&&re=="/"){q.tokenize=null;break}Ee=re=="*"}return["comment","comment"]}d.defineMIME("text/css",{documentTypes:w,mediaTypes:E,mediaFeatures:P,mediaValueKeywords:M,propertyKeywords:X,nonStandardPropertyKeywords:J,fontProperties:D,counterDescriptors:U,colorKeywords:se,valueKeywords:ie,tokenHooks:{"/":function(_e,q){return _e.eat("*")?(q.tokenize=We,We(_e,q)):!1}},name:"css"}),d.defineMIME("text/x-scss",{mediaTypes:E,mediaFeatures:P,mediaValueKeywords:M,propertyKeywords:X,nonStandardPropertyKeywords:J,colorKeywords:se,valueKeywords:ie,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(_e,q){return _e.eat("/")?(_e.skipToEnd(),["comment","comment"]):_e.eat("*")?(q.tokenize=We,We(_e,q)):["operator","operator"]},":":function(_e){return _e.match(/^\s*\{/,!1)?[null,null]:!1},$:function(_e){return _e.match(/^[\w-]+/),_e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(_e){return _e.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),d.defineMIME("text/x-less",{mediaTypes:E,mediaFeatures:P,mediaValueKeywords:M,propertyKeywords:X,nonStandardPropertyKeywords:J,colorKeywords:se,valueKeywords:ie,fontProperties:D,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(_e,q){return _e.eat("/")?(_e.skipToEnd(),["comment","comment"]):_e.eat("*")?(q.tokenize=We,We(_e,q)):["operator","operator"]},"@":function(_e){return _e.eat("{")?[null,"interpolation"]:_e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(_e.eatWhile(/[\w\\\-]/),_e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),d.defineMIME("text/x-gss",{documentTypes:w,mediaTypes:E,mediaFeatures:P,propertyKeywords:X,nonStandardPropertyKeywords:J,fontProperties:D,counterDescriptors:U,colorKeywords:se,valueKeywords:ie,supportsAtComponent:!0,tokenHooks:{"/":function(_e,q){return _e.eat("*")?(q.tokenize=We,We(_e,q)):!1}},name:"css",helperType:"gss"})})})()),of.exports}nm();var af={exports:{}},lf;function Jv(){return lf||(lf=1,(function(c,p){(function(d){d(no(),tm(),em(),nm())})(function(d){var v={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function b(M,R,X){var ne=M.current(),J=ne.search(R);return J>-1?M.backUp(ne.length-J):ne.match(/<\/?$/)&&(M.backUp(ne.length),M.match(R,!1)||M.match(ne)),X}var w={};function L(M){var R=w[M];return R||(w[M]=new RegExp("\\s+"+M+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function E(M,R){var X=M.match(L(R));return X?/^\s*(.*?)\s*$/.exec(X[2])[1]:""}function _(M,R){return new RegExp((R?"^":"")+"</\\s*"+M+"\\s*>","i")}function P(M,R){for(var X in M)for(var ne=R[X]||(R[X]=[]),J=M[X],ue=J.length-1;ue>=0;ue--)ne.unshift(J[ue])}function A(M,R){for(var X=0;X<M.length;X++){var ne=M[X];if(!ne[0]||ne[1].test(E(R,ne[0])))return ne[2]}}d.defineMode("htmlmixed",function(M,R){var X=d.getMode(M,{name:"xml",htmlMode:!0,multilineTagIndentFactor:R.multilineTagIndentFactor,multilineTagIndentPastTag:R.multilineTagIndentPastTag,allowMissingTagName:R.allowMissingTagName}),ne={},J=R&&R.tags,ue=R&&R.scriptTypes;if(P(v,ne),J&&P(J,ne),ue)for(var D=ue.length-1;D>=0;D--)ne.script.unshift(["type",ue[D].matches,ue[D].mode]);function H(U,$){var se=X.token(U,$.htmlState),ge=/\btag\b/.test(se),ie;if(ge&&!/[<>\s\/]/.test(U.current())&&(ie=$.htmlState.tagName&&$.htmlState.tagName.toLowerCase())&&ne.hasOwnProperty(ie))$.inTag=ie+" ";else if($.inTag&&ge&&/>$/.test(U.current())){var Ce=/^([\S]+) (.*)/.exec($.inTag);$.inTag=null;var We=U.current()==">"&&A(ne[Ce[1]],Ce[2]),_e=d.getMode(M,We),q=_(Ce[1],!0),Ee=_(Ce[1],!1);$.token=function(re,ve){return re.match(q,!1)?(ve.token=H,ve.localState=ve.localMode=null,null):b(re,Ee,ve.localMode.token(re,ve.localState))},$.localMode=_e,$.localState=d.startState(_e,X.indent($.htmlState,"",""))}else $.inTag&&($.inTag+=U.current(),U.eol()&&($.inTag+=" "));return se}return{startState:function(){var U=d.startState(X);return{token:H,inTag:null,localMode:null,localState:null,htmlState:U}},copyState:function(U){var $;return U.localState&&($=d.copyState(U.localMode,U.localState)),{token:U.token,inTag:U.inTag,localMode:U.localMode,localState:$,htmlState:d.copyState(X,U.htmlState)}},token:function(U,$){return $.token(U,$)},indent:function(U,$,se){return!U.localMode||/^\s*<\//.test($)?X.indent(U.htmlState,$,se):U.localMode.indent?U.localMode.indent(U.localState,$,se):d.Pass},innerMode:function(U){return{state:U.localState||U.htmlState,mode:U.localMode||X}}}},"xml","javascript","css"),d.defineMIME("text/html","htmlmixed")})})()),af.exports}Jv();var uf={exports:{}},cf;function ex(){return cf||(cf=1,(function(c,p){(function(d){d(no())})(function(d){var v={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},b=d.Pos;d.defineOption("autoCloseBrackets",!1,function(D,H,U){U&&U!=d.Init&&(D.removeKeyMap(L),D.state.closeBrackets=null),H&&(E(w(H,"pairs")),D.state.closeBrackets=H,D.addKeyMap(L))});function w(D,H){return H=="pairs"&&typeof D=="string"?D:typeof D=="object"&&D[H]!=null?D[H]:v[H]}var L={Backspace:A,Enter:M};function E(D){for(var H=0;H<D.length;H++){var U=D.charAt(H),$="'"+U+"'";L[$]||(L[$]=_(U))}}E(v.pairs+"`");function _(D){return function(H){return ne(H,D)}}function P(D){var H=D.state.closeBrackets;if(!H||H.override)return H;var U=D.getModeAt(D.getCursor());return U.closeBrackets||H}function A(D){var H=P(D);if(!H||D.getOption("disableInput"))return d.Pass;for(var U=w(H,"pairs"),$=D.listSelections(),se=0;se<$.length;se++){if(!$[se].empty())return d.Pass;var ge=J(D,$[se].head);if(!ge||U.indexOf(ge)%2!=0)return d.Pass}for(var se=$.length-1;se>=0;se--){var ie=$[se].head;D.replaceRange("",b(ie.line,ie.ch-1),b(ie.line,ie.ch+1),"+delete")}}function M(D){var H=P(D),U=H&&w(H,"explode");if(!U||D.getOption("disableInput"))return d.Pass;for(var $=D.listSelections(),se=0;se<$.length;se++){if(!$[se].empty())return d.Pass;var ge=J(D,$[se].head);if(!ge||U.indexOf(ge)%2!=0)return d.Pass}D.operation(function(){var ie=D.lineSeparator()||`
`;D.replaceSelection(ie+ie,null),R(D,-1),$=D.listSelections();for(var Ce=0;Ce<$.length;Ce++){var We=$[Ce].head.line;D.indentLine(We,null,!0),D.indentLine(We+1,null,!0)}})}function R(D,H){for(var U=[],$=D.listSelections(),se=0,ge=0;ge<$.length;ge++){var ie=$[ge];ie.head==D.getCursor()&&(se=ge);var Ce=ie.head.ch||H>0?{line:ie.head.line,ch:ie.head.ch+H}:{line:ie.head.line-1};U.push({anchor:Ce,head:Ce})}D.setSelections(U,se)}function X(D){var H=d.cmpPos(D.anchor,D.head)>0;return{anchor:new b(D.anchor.line,D.anchor.ch+(H?-1:1)),head:new b(D.head.line,D.head.ch+(H?1:-1))}}function ne(D,H){var U=P(D);if(!U||D.getOption("disableInput"))return d.Pass;var $=w(U,"pairs"),se=$.indexOf(H);if(se==-1)return d.Pass;for(var ge=w(U,"closeBefore"),ie=w(U,"triples"),Ce=$.charAt(se+1)==H,We=D.listSelections(),_e=se%2==0,q,Ee=0;Ee<We.length;Ee++){var re=We[Ee],ve=re.head,C,Q=D.getRange(ve,b(ve.line,ve.ch+1));if(_e&&!re.empty())C="surround";else if((Ce||!_e)&&Q==H)Ce&&ue(D,ve)?C="both":ie.indexOf(H)>=0&&D.getRange(ve,b(ve.line,ve.ch+3))==H+H+H?C="skipThree":C="skip";else if(Ce&&ve.ch>1&&ie.indexOf(H)>=0&&D.getRange(b(ve.line,ve.ch-2),ve)==H+H){if(ve.ch>2&&/\bstring/.test(D.getTokenTypeAt(b(ve.line,ve.ch-2))))return d.Pass;C="addFour"}else if(Ce){var G=ve.ch==0?" ":D.getRange(b(ve.line,ve.ch-1),ve);if(!d.isWordChar(Q)&&G!=H&&!d.isWordChar(G))C="both";else return d.Pass}else if(_e&&(Q.length===0||/\s/.test(Q)||ge.indexOf(Q)>-1))C="both";else return d.Pass;if(!q)q=C;else if(q!=C)return d.Pass}var N=se%2?$.charAt(se-1):H,O=se%2?H:$.charAt(se+1);D.operation(function(){if(q=="skip")R(D,1);else if(q=="skipThree")R(D,3);else if(q=="surround"){for(var Y=D.getSelections(),W=0;W<Y.length;W++)Y[W]=N+Y[W]+O;D.replaceSelections(Y,"around"),Y=D.listSelections().slice();for(var W=0;W<Y.length;W++)Y[W]=X(Y[W]);D.setSelections(Y)}else q=="both"?(D.replaceSelection(N+O,null),D.triggerElectric(N+O),R(D,-1)):q=="addFour"&&(D.replaceSelection(N+N+N+N,"before"),R(D,1))})}function J(D,H){var U=D.getRange(b(H.line,H.ch-1),b(H.line,H.ch+1));return U.length==2?U:null}function ue(D,H){var U=D.getTokenAt(b(H.line,H.ch+1));return/\bstring/.test(U.type)&&U.start==H.ch&&(H.ch==0||!/\bstring/.test(D.getTokenTypeAt(H)))}})})()),uf.exports}ex();var df={exports:{}},pf;function tx(){return pf||(pf=1,(function(c,p){(function(d){d(no())})(function(d){var v=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),b=d.Pos,w={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function L(R){return R&&R.bracketRegex||/[(){}[\]]/}function E(R,X,ne){var J=R.getLineHandle(X.line),ue=X.ch-1,D=ne&&ne.afterCursor;D==null&&(D=/(^| )cm-fat-cursor($| )/.test(R.getWrapperElement().className));var H=L(ne),U=!D&&ue>=0&&H.test(J.text.charAt(ue))&&w[J.text.charAt(ue)]||H.test(J.text.charAt(ue+1))&&w[J.text.charAt(++ue)];if(!U)return null;var $=U.charAt(1)==">"?1:-1;if(ne&&ne.strict&&$>0!=(ue==X.ch))return null;var se=R.getTokenTypeAt(b(X.line,ue+1)),ge=_(R,b(X.line,ue+($>0?1:0)),$,se,ne);return ge==null?null:{from:b(X.line,ue),to:ge&&ge.pos,match:ge&&ge.ch==U.charAt(0),forward:$>0}}function _(R,X,ne,J,ue){for(var D=ue&&ue.maxScanLineLength||1e4,H=ue&&ue.maxScanLines||1e3,U=[],$=L(ue),se=ne>0?Math.min(X.line+H,R.lastLine()+1):Math.max(R.firstLine()-1,X.line-H),ge=X.line;ge!=se;ge+=ne){var ie=R.getLine(ge);if(ie){var Ce=ne>0?0:ie.length-1,We=ne>0?ie.length:-1;if(!(ie.length>D))for(ge==X.line&&(Ce=X.ch-(ne<0?1:0));Ce!=We;Ce+=ne){var _e=ie.charAt(Ce);if($.test(_e)&&(J===void 0||(R.getTokenTypeAt(b(ge,Ce+1))||"")==(J||""))){var q=w[_e];if(q&&q.charAt(1)==">"==ne>0)U.push(_e);else if(U.length)U.pop();else return{pos:b(ge,Ce),ch:_e}}}}}return ge-ne==(ne>0?R.lastLine():R.firstLine())?!1:null}function P(R,X,ne){for(var J=R.state.matchBrackets.maxHighlightLineLength||1e3,ue=ne&&ne.highlightNonMatching,D=[],H=R.listSelections(),U=0;U<H.length;U++){var $=H[U].empty()&&E(R,H[U].head,ne);if($&&($.match||ue!==!1)&&R.getLine($.from.line).length<=J){var se=$.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";D.push(R.markText($.from,b($.from.line,$.from.ch+1),{className:se})),$.to&&R.getLine($.to.line).length<=J&&D.push(R.markText($.to,b($.to.line,$.to.ch+1),{className:se}))}}if(D.length){v&&R.state.focused&&R.focus();var ge=function(){R.operation(function(){for(var ie=0;ie<D.length;ie++)D[ie].clear()})};if(X)setTimeout(ge,800);else return ge}}function A(R){R.operation(function(){R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null),R.state.matchBrackets.currentlyHighlighted=P(R,!1,R.state.matchBrackets)})}function M(R){R.state.matchBrackets&&R.state.matchBrackets.currentlyHighlighted&&(R.state.matchBrackets.currentlyHighlighted(),R.state.matchBrackets.currentlyHighlighted=null)}d.defineOption("matchBrackets",!1,function(R,X,ne){ne&&ne!=d.Init&&(R.off("cursorActivity",A),R.off("focus",A),R.off("blur",M),M(R)),X&&(R.state.matchBrackets=typeof X=="object"?X:{},R.on("cursorActivity",A),R.on("focus",A),R.on("blur",M))}),d.defineExtension("matchBrackets",function(){P(this,!0)}),d.defineExtension("findMatchingBracket",function(R,X,ne){return(ne||typeof X=="boolean")&&(ne?(ne.strict=X,X=ne):X=X?{strict:!0}:null),E(this,R,X)}),d.defineExtension("scanForBracket",function(R,X,ne,J){return _(this,R,X,ne,J)})})})()),df.exports}tx();var hf={exports:{}},ff;function nx(){return ff||(ff=1,(function(c,p){(function(d){d(no())})(function(d){var v="CodeMirror-hint",b="CodeMirror-hint-active";d.showHint=function(D,H,U){if(!H)return D.showHint(U);U&&U.async&&(H.async=!0);var $={hint:H};if(U)for(var se in U)$[se]=U[se];return D.showHint($)},d.defineExtension("showHint",function(D){D=_(this,this.getCursor("start"),D);var H=this.listSelections();if(!(H.length>1)){if(this.somethingSelected()){if(!D.hint.supportsSelection)return;for(var U=0;U<H.length;U++)if(H[U].head.line!=H[U].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var $=this.state.completionActive=new w(this,D);$.options.hint&&(d.signal(this,"startCompletion",this),$.update(!0))}}),d.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function w(D,H){if(this.cm=D,this.options=H,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var U=this;D.on("cursorActivity",this.activityFunc=function(){U.cursorActivity()})}}var L=window.requestAnimationFrame||function(D){return setTimeout(D,1e3/60)},E=window.cancelAnimationFrame||clearTimeout;w.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&d.signal(this.data,"close"),this.widget&&this.widget.close(),d.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(D,H){var U=D.list[H],$=this;this.cm.operation(function(){U.hint?U.hint($.cm,D,U):$.cm.replaceRange(P(U),U.from||D.from,U.to||D.to,"complete"),d.signal(D,"pick",U),$.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(E(this.debounce),this.debounce=0);var D=this.startPos;this.data&&(D=this.data.from);var H=this.cm.getCursor(),U=this.cm.getLine(H.line);if(H.line!=this.startPos.line||U.length-H.ch!=this.startLen-this.startPos.ch||H.ch<D.ch||this.cm.somethingSelected()||!H.ch||this.options.closeCharacters.test(U.charAt(H.ch-1)))this.close();else{var $=this;this.debounce=L(function(){$.update()}),this.widget&&this.widget.disable()}},update:function(D){if(this.tick!=null){var H=this,U=++this.tick;ne(this.options.hint,this.cm,this.options,function($){H.tick==U&&H.finishUpdate($,D)})}},finishUpdate:function(D,H){this.data&&d.signal(this.data,"update");var U=this.widget&&this.widget.picked||H&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=D,D&&D.list.length&&(U&&D.list.length==1?this.pick(D,0):(this.widget=new R(this,D),d.signal(D,"shown")))}};function _(D,H,U){var $=D.options.hintOptions,se={};for(var ge in ue)se[ge]=ue[ge];if($)for(var ge in $)$[ge]!==void 0&&(se[ge]=$[ge]);if(U)for(var ge in U)U[ge]!==void 0&&(se[ge]=U[ge]);return se.hint.resolve&&(se.hint=se.hint.resolve(D,H)),se}function P(D){return typeof D=="string"?D:D.text}function A(D,H){var U={Up:function(){H.moveFocus(-1)},Down:function(){H.moveFocus(1)},PageUp:function(){H.moveFocus(-H.menuSize()+1,!0)},PageDown:function(){H.moveFocus(H.menuSize()-1,!0)},Home:function(){H.setFocus(0)},End:function(){H.setFocus(H.length-1)},Enter:H.pick,Tab:H.pick,Esc:H.close},$=/Mac/.test(navigator.platform);$&&(U["Ctrl-P"]=function(){H.moveFocus(-1)},U["Ctrl-N"]=function(){H.moveFocus(1)});var se=D.options.customKeys,ge=se?{}:U;function ie(_e,q){var Ee;typeof q!="string"?Ee=function(re){return q(re,H)}:U.hasOwnProperty(q)?Ee=U[q]:Ee=q,ge[_e]=Ee}if(se)for(var Ce in se)se.hasOwnProperty(Ce)&&ie(Ce,se[Ce]);var We=D.options.extraKeys;if(We)for(var Ce in We)We.hasOwnProperty(Ce)&&ie(Ce,We[Ce]);return ge}function M(D,H){for(;H&&H!=D;){if(H.nodeName.toUpperCase()==="LI"&&H.parentNode==D)return H;H=H.parentNode}}function R(D,H){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=D,this.data=H,this.picked=!1;var U=this,$=D.cm,se=$.getInputField().ownerDocument,ge=se.defaultView||se.parentWindow,ie=this.hints=se.createElement("ul");ie.setAttribute("role","listbox"),ie.setAttribute("aria-expanded","true"),ie.id=this.id;var Ce=D.cm.options.theme;ie.className="CodeMirror-hints "+Ce,this.selectedHint=H.selectedHint||0;for(var We=H.list,_e=0;_e<We.length;++_e){var q=ie.appendChild(se.createElement("li")),Ee=We[_e],re=v+(_e!=this.selectedHint?"":" "+b);Ee.className!=null&&(re=Ee.className+" "+re),q.className=re,_e==this.selectedHint&&q.setAttribute("aria-selected","true"),q.id=this.id+"-"+_e,q.setAttribute("role","option"),Ee.render?Ee.render(q,H,Ee):q.appendChild(se.createTextNode(Ee.displayText||P(Ee))),q.hintId=_e}var ve=D.options.container||se.body,C=$.cursorCoords(D.options.alignWithWord?H.from:null),Q=C.left,G=C.bottom,N=!0,O=0,Y=0;if(ve!==se.body){var W=["absolute","relative","fixed"].indexOf(ge.getComputedStyle(ve).position)!==-1,ae=W?ve:ve.offsetParent,De=ae.getBoundingClientRect(),Je=se.body.getBoundingClientRect();O=De.left-Je.left-ae.scrollLeft,Y=De.top-Je.top-ae.scrollTop}ie.style.left=Q-O+"px",ie.style.top=G-Y+"px";var Ve=ge.innerWidth||Math.max(se.body.offsetWidth,se.documentElement.offsetWidth),we=ge.innerHeight||Math.max(se.body.offsetHeight,se.documentElement.offsetHeight);ve.appendChild(ie),$.getInputField().setAttribute("aria-autocomplete","list"),$.getInputField().setAttribute("aria-owns",this.id),$.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Ie=D.options.moveOnOverlap?ie.getBoundingClientRect():new DOMRect,Fe=D.options.paddingForScrollbar?ie.scrollHeight>ie.clientHeight+1:!1,He;setTimeout(function(){He=$.getScrollInfo()});var tt=Ie.bottom-we;if(tt>0){var Ge=Ie.bottom-Ie.top,qt=Ie.top-(C.bottom-C.top)-2;we-Ie.top<qt?(Ge>qt&&(ie.style.height=(Ge=qt)+"px"),ie.style.top=(G=C.top-Ge)-Y+"px",N=!1):ie.style.height=we-Ie.top-2+"px"}var Qt=Ie.right-Ve;if(Fe&&(Qt+=$.display.nativeBarWidth),Qt>0&&(Ie.right-Ie.left>Ve&&(ie.style.width=Ve-5+"px",Qt-=Ie.right-Ie.left-Ve),ie.style.left=(Q=Math.max(C.left-Qt-O,0))+"px"),Fe)for(var $t=ie.firstChild;$t;$t=$t.nextSibling)$t.style.paddingRight=$.display.nativeBarWidth+"px";if($.addKeyMap(this.keyMap=A(D,{moveFocus:function(bt,lt){U.changeActive(U.selectedHint+bt,lt)},setFocus:function(bt){U.changeActive(bt)},menuSize:function(){return U.screenAmount()},length:We.length,close:function(){D.close()},pick:function(){U.pick()},data:H})),D.options.closeOnUnfocus){var hn;$.on("blur",this.onBlur=function(){hn=setTimeout(function(){D.close()},100)}),$.on("focus",this.onFocus=function(){clearTimeout(hn)})}$.on("scroll",this.onScroll=function(){var bt=$.getScrollInfo(),lt=$.getWrapperElement().getBoundingClientRect();He||(He=$.getScrollInfo());var Zt=G+He.top-bt.top,Ke=Zt-(ge.pageYOffset||(se.documentElement||se.body).scrollTop);if(N||(Ke+=ie.offsetHeight),Ke<=lt.top||Ke>=lt.bottom)return D.close();ie.style.top=Zt+"px",ie.style.left=Q+He.left-bt.left+"px"}),d.on(ie,"dblclick",function(bt){var lt=M(ie,bt.target||bt.srcElement);lt&&lt.hintId!=null&&(U.changeActive(lt.hintId),U.pick())}),d.on(ie,"click",function(bt){var lt=M(ie,bt.target||bt.srcElement);lt&&lt.hintId!=null&&(U.changeActive(lt.hintId),D.options.completeOnSingleClick&&U.pick())}),d.on(ie,"mousedown",function(){setTimeout(function(){$.focus()},20)});var et=this.getSelectedHintRange();return(et.from!==0||et.to!==0)&&this.scrollToActive(),d.signal(H,"select",We[this.selectedHint],ie.childNodes[this.selectedHint]),!0}R.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var D=this.completion.cm.getInputField();D.removeAttribute("aria-activedescendant"),D.removeAttribute("aria-owns");var H=this.completion.cm;this.completion.options.closeOnUnfocus&&(H.off("blur",this.onBlur),H.off("focus",this.onFocus)),H.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var D=this;this.keyMap={Enter:function(){D.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(D,H){if(D>=this.data.list.length?D=H?this.data.list.length-1:0:D<0&&(D=H?0:this.data.list.length-1),this.selectedHint!=D){var U=this.hints.childNodes[this.selectedHint];U&&(U.className=U.className.replace(" "+b,""),U.removeAttribute("aria-selected")),U=this.hints.childNodes[this.selectedHint=D],U.className+=" "+b,U.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",U.id),this.scrollToActive(),d.signal(this.data,"select",this.data.list[this.selectedHint],U)}},scrollToActive:function(){var D=this.getSelectedHintRange(),H=this.hints.childNodes[D.from],U=this.hints.childNodes[D.to],$=this.hints.firstChild;H.offsetTop<this.hints.scrollTop?this.hints.scrollTop=H.offsetTop-$.offsetTop:U.offsetTop+U.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=U.offsetTop+U.offsetHeight-this.hints.clientHeight+$.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var D=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-D),to:Math.min(this.data.list.length-1,this.selectedHint+D)}}};function X(D,H){if(!D.somethingSelected())return H;for(var U=[],$=0;$<H.length;$++)H[$].supportsSelection&&U.push(H[$]);return U}function ne(D,H,U,$){if(D.async)D(H,$,U);else{var se=D(H,U);se&&se.then?se.then($):$(se)}}function J(D,H){var U=D.getHelpers(H,"hint"),$;if(U.length){var se=function(ge,ie,Ce){var We=X(ge,U);function _e(q){if(q==We.length)return ie(null);ne(We[q],ge,Ce,function(Ee){Ee&&Ee.list.length>0?ie(Ee):_e(q+1)})}_e(0)};return se.async=!0,se.supportsSelection=!0,se}else return($=D.getHelper(D.getCursor(),"hintWords"))?function(ge){return d.hint.fromList(ge,{words:$})}:d.hint.anyword?function(ge,ie){return d.hint.anyword(ge,ie)}:function(){}}d.registerHelper("hint","auto",{resolve:J}),d.registerHelper("hint","fromList",function(D,H){var U=D.getCursor(),$=D.getTokenAt(U),se,ge=d.Pos(U.line,$.start),ie=U;$.start<U.ch&&/\w/.test($.string.charAt(U.ch-$.start-1))?se=$.string.substr(0,U.ch-$.start):(se="",ge=U);for(var Ce=[],We=0;We<H.words.length;We++){var _e=H.words[We];_e.slice(0,se.length)==se&&Ce.push(_e)}if(Ce.length)return{list:Ce,from:ge,to:ie}}),d.commands.autocomplete=d.showHint;var ue={hint:d.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};d.defineOption("hintOptions",null)})})()),hf.exports}nx();var mf={exports:{}},gf;function rx(){return gf||(gf=1,(function(c,p){(function(d){d(no())})(function(d){var v=/[\w$]+/,b=500;d.registerHelper("hint","anyword",function(w,L){for(var E=L&&L.word||v,_=L&&L.range||b,P=w.getCursor(),A=w.getLine(P.line),M=P.ch,R=M;R&&E.test(A.charAt(R-1));)--R;for(var X=R!=M&&A.slice(R,M),ne=L&&L.list||[],J={},ue=new RegExp(E.source,"g"),D=-1;D<=1;D+=2)for(var H=P.line,U=Math.min(Math.max(H+D*_,w.firstLine()),w.lastLine())+D;H!=U;H+=D)for(var $=w.getLine(H),se;se=ue.exec($);)H==P.line&&se[0]===X||(!X||se[0].lastIndexOf(X,0)==0)&&!Object.prototype.hasOwnProperty.call(J,se[0])&&(J[se[0]]=!0,ne.push(se[0]));return{list:ne,from:d.Pos(P.line,R),to:d.Pos(P.line,M)}})})})()),mf.exports}rx();function ix(c){return c==="python"?"python":c==="csharp"?"text/x-csharp":c==="java"?"text/x-java":c==="jsx"?{name:"javascript",jsx:!0}:c==="javascript"?"javascript":c==="html"?"htmlmixed":c==="css"?"css":"text/plain"}function ox({value:c,onChange:p,language:d}){const v=Ue.useRef(null),b=Ue.useRef(null),w=Ue.useRef(p);return w.current=p,Ue.useEffect(()=>{const L=Vh.fromTextArea(v.current,{mode:ix(d),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(_){if(_.somethingSelected())_.execCommand("indentMore");else{const P=_.getOption("indentUnit")-_.getCursor().ch%_.getOption("indentUnit");_.replaceSelection(" ".repeat(P),"end")}},"Shift-Tab":_=>_.execCommand("indentLess"),"Ctrl-Space":_=>_.showHint({hint:Vh.hint.anyword,completeSingle:!1})}});L.getInputField().setAttribute("aria-label","Code editor"),L.on("change",_=>{var P;return(P=w.current)==null?void 0:P.call(w,_.getValue())}),b.current=L;const E=typeof ResizeObserver<"u"?new ResizeObserver(()=>L.refresh()):null;return E==null||E.observe(L.getWrapperElement()),()=>{E==null||E.disconnect(),L.toTextArea(),b.current=null}},[d]),Ue.useEffect(()=>{const L=b.current;if(L&&L.getValue()!==c){const E=L.getCursor();L.setValue(c??""),L.setCursor(E)}},[c]),h.jsx("div",{className:"code-editor-wrap",children:h.jsx("textarea",{ref:v,"aria-label":"Code editor",defaultValue:c,spellCheck:!1})})}const yf={"react-components":{title:"Score Card",subtitle:"Player score",value:"18 points",action:"View details"},"react-state":{title:"Counter",subtitle:"Current count",value:"0",action:"Increase"},"web-layout":{title:"Responsive page",subtitle:"Welcome",value:"Your page content",action:"Explore"},"web-events":{title:"Form button",subtitle:"Contact form",value:"Ready",action:"Send"}};function sx({text:c,checksText:p,language:d,lessonId:v,activeTab:b,onTabChange:w}){const L=d==="jsx"?["Preview","Console","Checks"]:["Console","Checks"],E=yf[v]||yf["react-components"];return h.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[h.jsxs("div",{className:"console-heading",children:[h.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:L.map(_=>h.jsxs("button",{type:"button",role:"tab","aria-selected":b===_,className:b===_?"active":"",onClick:()=>w(_),children:[_==="Console"&&h.jsx(Ug,{size:14}),_]},_))}),h.jsx("span",{children:"Demo"})]}),b==="Preview"&&d==="jsx"?h.jsxs("div",{className:"console-preview",role:"tabpanel","aria-label":"Interface preview",children:[h.jsxs("div",{className:"console-preview-card",children:[h.jsx("small",{children:E.title}),h.jsx("strong",{children:E.value}),h.jsx("p",{children:E.subtitle}),h.jsx("span",{className:"console-preview-action",children:E.action})]}),h.jsx("p",{className:"console-preview-note",children:"Sample layout. Your code isn't rendered here yet."})]}):h.jsx("pre",{role:"tabpanel","aria-label":b==="Checks"?"Check feedback":"Console output",children:b==="Checks"?p:c})]})}function Cp(c,p,d){switch(c){case"Reset":return"Editor reset to sample starter code.";case"Submit":return"Local preview only: no assignment was submitted and no grade or points were awarded.";case"Run":return`Run preview: code is not executed here.

Your draft contains `+p.split(`
`).length+" lines.";default:return"Sample check: "+(p.trim().length>d.starter.trim().length?"You added content. This is not an automated correctness check.":"Starter code is unchanged. This is only a UI preview.")}}class ax{constructor({onStatus:p=()=>{},workerFactory:d=w=>new Worker(w),loadTimeout:v=6e4,runTimeout:b=6e3}={}){Object.assign(this,{onStatus:p,workerFactory:d,loadTimeout:v,runTimeout:b}),this.sequence=0,this.worker=null,this.loading=null,this.pending=null,this.closed=!1}init(){if(this.closed)return Promise.reject(Error("Python workspace closed."));if(this.loading)return this.loading;this.onStatus("Loading Python…"),this.loading=new Promise((d,v)=>{this.rejectLoad=v,this.loadTimer=setTimeout(()=>this.stop("Python could not load in time. Try again."),this.loadTimeout);try{this.worker=this.workerFactory(new URL("/playground/preview/python-worker.js",window.location.origin)),this.worker.onmessage=({data:b})=>{var w;if(b.type==="ready")clearTimeout(this.loadTimer),this.rejectLoad=null,this.onStatus("Python ready"),d();else if(b.type==="load-error")this.stop(b.message||"Python could not load.");else if(b.type==="result"&&b.id===((w=this.pending)==null?void 0:w.id)){const L=this.pending;clearTimeout(L.timer),this.pending=null,this.onStatus("Python ready"),L.resolve(b)}},this.worker.onerror=()=>this.stop("Python worker failed. Try again.")}catch(b){this.stop(b.message)}});const p=this.loading;return p.catch(()=>{this.loading===p&&(this.loading=null)}),p}async run(p){if(await this.init(),this.closed)throw Error("Python workspace closed.");if(this.pending)throw Error("Python is already running.");return this.onStatus("Running…"),new Promise((d,v)=>{const b=++this.sequence,w=setTimeout(()=>this.stop("Execution timed out after 6 seconds. Inspect your loops and retry."),this.runTimeout);this.pending={id:b,timer:w,resolve:d,reject:v},this.worker.postMessage({type:"run",id:b,code:p})})}stop(p="Python stopped."){var v,b;clearTimeout(this.loadTimer),(v=this.worker)==null||v.terminate(),this.worker=null;const d=this.pending;this.pending=null,d&&(clearTimeout(d.timer),d.reject(Error(p))),(b=this.rejectLoad)==null||b.call(this,Error(p)),this.rejectLoad=null,this.loading=null,this.onStatus(p)}dispose(){this.closed=!0,this.stop("Python workspace closed.")}}const Op="PUBLIC_CHECK_RESULTS=";function lx(c,p){const d=Array.isArray(c==null?void 0:c.cases)?c.cases:[],v=JSON.stringify(String(p)),b=JSON.stringify(JSON.stringify(d));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+v,"__cases = __json.loads("+b+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(c==null?void 0:c.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(c==null?void 0:c.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(c==null?void 0:c.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+Op+'"+__json.dumps(__results))'].join(`
`)+`
`}function ux(c,p){const d=String(c||"").split(`
`).find(v=>v.startsWith(Op));if(!d)return"Checks did not finish. Review the Console output and try again.";try{const v=JSON.parse(d.slice(Op.length));if(!Array.isArray(v)||v.length!==p)throw Error("Incomplete check results");return[`${v.filter(w=>w.ok).length} of ${v.length} published examples matched.`,...v.map((w,L)=>w.ok?`✓ Example ${L+1}: matched`:`✗ Example ${L+1}: ${w.error||"Expected "+w.expected+"; received "+w.actual}`),"","These are practice checks only. No grade or points were recorded."].join(`
`)}catch{return"Checks returned an unexpected result. Please run the code again."}}function cx({lessonId:c,task:p}){const d=Jf.code(c),v=Ue.useRef(null),b=Ue.useRef(null),[w,L]=Ue.useState(!1),E=!!(p.isPublished&&p.language==="python"),[_,P]=Ue.useState(p.starter),[A,M]=Ue.useState(p.console),[R,X]=Ue.useState(""),[ne,J]=Ue.useState("Choose Check to review this draft. Results are for demonstration only."),[ue,D]=Ue.useState(p.language==="jsx"?"Preview":"Console"),[H,U]=Nn("designlab:editor-height",300);Ue.useEffect(()=>{P(md(d)??p.starter),M(p.console),J("Choose Check to review this draft. Results are for demonstration only."),D(p.language==="jsx"?"Preview":"Console")},[d,p]),Ue.useEffect(()=>()=>{var ie;(ie=b.current)==null||ie.dispose()},[]);async function $(ie){var We;if(w)return;L(!0);const Ce=ie==="Check";D(Ce?"Checks":"Console"),Ce?J("Checking published examples…"):M("Preparing Python…"),b.current||(b.current=new ax({onStatus:_e=>{Ce||M(_e)}}));try{const _e=Ce?lx(p,_):_,q=await b.current.run(_e);Ce?J(q.success?ux(q.output,((We=p.cases)==null?void 0:We.length)||0):"Checks could not finish. Review your code and try again."):M(q.output||(q.success?"Program finished with no printed output.":"The program stopped without output."))}catch(_e){const q=String((_e==null?void 0:_e.message)||_e);Ce?J("Checks unavailable: "+q):M("Python unavailable: "+q)}finally{L(!1)}}function se(ie){if(!v.current)return;const Ce=v.current.getBoundingClientRect();U(Math.max(160,Math.min(Ce.height-120,ie.clientY-Ce.top)))}function ge(ie){if(!w){if(E&&(ie==="Run"||ie==="Check")){$(ie);return}if(ie==="Save"){gd(d,_),X("Draft saved in this browser only.");return}if(ie==="Reset"){P(p.starter),J("Choose Check to review this draft. Results are for demonstration only."),M(Cp("Reset",_,p)),D(p.language==="jsx"?"Preview":"Console");return}if(ie==="Check"){J(Cp(ie,_,p)),D("Checks");return}M(Cp(ie,_,p)),D("Console")}}return h.jsxs("div",{className:"code-pane",children:[h.jsxs("div",{className:"pane-header",children:[h.jsxs("strong",{children:[h.jsx(bd,{size:16})," Editor"]}),h.jsxs("div",{className:"right-meta",children:[p.language.toUpperCase()," ",h.jsx(Lo,{children:E?"Practice":"Demo"})]})]}),h.jsxs("div",{className:"code-workspace",ref:v,style:{"--editor-height":`${H}px`},children:[h.jsx(ox,{value:_,language:p.language,onChange:ie=>{P(ie),X(""),J("Your code has changed. Choose Check to review this draft.")}}),h.jsx(dd,{axis:"rows",onDrag:se}),h.jsx(sx,{text:A,checksText:ne,language:p.language,lessonId:c,activeTab:ue,onTabChange:D})]}),h.jsxs("div",{className:"editor-controls",children:[h.jsx("div",{children:["Run","Check","Reset"].map(ie=>h.jsx("button",{className:"btn",disabled:w,onClick:()=>ge(ie),children:ie},ie))}),h.jsxs("div",{children:[h.jsxs("button",{className:"btn",disabled:w,onClick:()=>ge("Save"),children:[h.jsx(cd,{size:15})," Save"]}),h.jsxs("button",{className:"btn submit",disabled:w,onClick:()=>ge("Submit"),children:[h.jsx(Bp,{size:15})," Submit"]})]})]}),h.jsx("div",{className:"editor-note",children:R||(E?"Run your Python code and check the published examples. No scores are recorded here.":"Drag the dividers to resize your workspace. Runs and checks are examples, not grades.")})]})}function dx({lessonId:c,onAnswerChecked:p}){const d=If[c],[v,b]=Ue.useState(null),[w,L]=Ue.useState(!1);function E(){L(!0),p==null||p({selected:v,correct:v===d.correct})}function _(){b(null),L(!1),p==null||p(null)}return h.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[h.jsxs("div",{className:"tsi-practice-heading",children:[h.jsx(Lf,{size:20}),h.jsxs("div",{children:[h.jsx("h2",{children:"Try this question"}),h.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),h.jsxs("div",{className:"tsi-question-card",children:[h.jsx("div",{className:"eyebrow",children:"Question"}),h.jsx("h3",{children:d.prompt}),h.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:d.options.map((P,A)=>h.jsxs("label",{className:`tsi-choice ${v===A?"selected":""} ${w&&A===d.correct?"correct":""}`,children:[h.jsx("input",{type:"radio",name:`tsi-${c}`,checked:v===A,disabled:w,onChange:()=>b(A)}),h.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+A)}),h.jsx("span",{children:P})]},P))}),w&&h.jsx("p",{className:"tsi-answer-status",role:"status",children:v===d.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),h.jsxs("div",{className:"tsi-buttons",children:[h.jsx("button",{className:"btn primary",disabled:v===null||w,onClick:E,children:"Check answer"}),h.jsxs("button",{className:"btn",onClick:_,children:[h.jsx(Hp,{size:15})," Try again"]})]})]})]})}function px({lessonId:c,course:p,unit:d,unitNumber:v,isCompleted:b=!1,assignment:w=null,grade:L=null,onToggleCompleted:E}){const _=Ua(p,c),P=Ue.useRef(null),[A,M]=Ue.useState(null),[R,X]=Nn("designlab:left-width",420);function ne(ue){if(!P.current)return;const D=P.current.getBoundingClientRect();X(Math.max(260,Math.min(D.width-340,ue.clientX-D.left)))}const J=p.id==="tsi-math";return _!=null&&_.ready?h.jsxs("div",{className:"lesson-screen",children:[h.jsx(Ch,{task:_,unit:d,unitNumber:v,isTsi:J,isCompleted:b,assignment:w,grade:L,onToggleCompleted:E}),h.jsxs("div",{className:`workspace-grid ${J?"tsi-workspace":""}`,ref:P,style:{"--left-pane":`${R}px`},children:[J?h.jsx(dx,{lessonId:c,onAnswerChecked:M}):h.jsx(Gh,{lessonId:c,task:_}),h.jsx(dd,{axis:"columns",onDrag:ne}),J?h.jsx(Gh,{lessonId:c,task:_,isTsi:!0,tsiAnswer:A}):h.jsx(cx,{lessonId:c,task:_})]})]}):h.jsxs("div",{className:"lesson-screen",children:[h.jsx(Ch,{task:_,unit:d,unitNumber:v,isTsi:J,isCompleted:b,assignment:w,grade:L,onToggleCompleted:E}),h.jsxs("section",{className:"lesson-content-pending surface-card",children:[h.jsx("h2",{children:"Lesson coming soon"}),h.jsx("p",{children:"The lesson materials are being prepared."})]})]})}function hx({courseId:c,lessonId:p,openCourse:d,openChallenges:v,completedLessons:b=[],assignments:w=[],grades:L=[],onToggleLessonComplete:E,courseColors:_={},onSetCourseColor:P,onResetCourseColor:A}){const M=ti(c)||Eo[0],R=ld(M),X=M.units.findIndex(ue=>to(ue).includes(p)),ne=M.units[X],J=R.indexOf(p);return h.jsx("div",{className:"course-layout integrated-course","data-course":M.id,children:h.jsxs("div",{className:"course-main",children:[h.jsxs("div",{className:"course-breadcrumb",children:[h.jsx("button",{onClick:()=>d(null),children:"All playgrounds"}),h.jsx(Hl,{size:14}),p?h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>d(M.id),children:M.label}),h.jsx(Hl,{size:14}),h.jsx("span",{className:"breadcrumb-unit-name",title:ne?No(ne):"",children:ne?No(ne):""})]}):h.jsx("span",{children:M.label})]}),p?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"lesson-mobile-navigation",children:[h.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),h.jsx("select",{id:"lesson-select",value:p,onChange:ue=>d(M.id,ue.target.value),children:M.units.map((ue,D)=>h.jsx("optgroup",{label:`Unit ${D+1} · ${No(ue)}`,children:to(ue).map(H=>h.jsx("option",{value:H,children:qa(M,H)},H))},ue.id))})]}),h.jsx(px,{lessonId:p,course:M,unit:ne,unitNumber:X+1,isCompleted:b.includes(p),assignment:w.find(ue=>ue.id==="lesson:"+p),grade:L.find(ue=>ue.id==="lesson:"+p),onToggleCompleted:()=>E==null?void 0:E(p)},p),h.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[h.jsx("button",{className:"btn primary",disabled:J<=0,onClick:()=>d(M.id,R[J-1]),children:"← Prev"}),J<R.length-1&&h.jsxs("button",{className:"btn primary",onClick:()=>d(M.id,R[J+1]),children:["Next: ",qa(M,R[J+1])," ",h.jsx(Hl,{size:16})]})]})]}):h.jsx(ey,{course:M,openCourse:d,openChallenges:v,completedLessons:b,assignments:w,grades:L,courseColors:_,onSetCourseColor:P,onResetCourseColor:A})]})})}const ps=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],rm=c=>ps.find(p=>p.id===c),im=c=>{var p;return(p=rm(c))==null?void 0:p.period},fx=[...new Set(ps.map(c=>c.period))].sort((c,p)=>Number(c)-Number(p)),om=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],tc=c=>{var p,d;return((p=c.sheetName)==null?void 0:p.trim())||((d=c.studentName)==null?void 0:d.trim())||c.github},vf=c=>(c.sheetName||c.studentName||"").trim().split(/\s+/),sm=(c,p,d)=>{const v=b=>d==="github"?b.github.toLowerCase():d==="first"?(vf(b)[0]||b.github).toLowerCase():(vf(b).at(-1)||b.github).toLowerCase();return v(c).localeCompare(v(p),void 0,{numeric:!0})||c.github.localeCompare(p.github)},mx=[["last","Last name"],["first","First name"],["github","GitHub username"]];function gx({sectionId:c,onSectionChange:p,onReset:d}){return h.jsxs("div",{className:"teacher-toolbar",children:[h.jsxs("label",{children:["Class section",h.jsx("select",{value:c,onChange:v=>p(v.target.value),children:ps.map(v=>h.jsxs("option",{value:v.id,children:[v.name," · ",zp(v.course)]},v.id))})]}),h.jsxs("button",{className:"btn",onClick:d,children:[h.jsx(Hp,{size:15})," Reset sample records"]})]})}const yx=[["overview","Class overview",Wp],["curriculum","Curriculum",Ju],["journals","Journals",Fp],["accounts","Accounts",qg],["setup","Section setup",Up]];function vx({tab:c,onChange:p}){return h.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:yx.map(([d,v,b])=>h.jsxs("button",{role:"tab","aria-selected":c===d,className:c===d?"active":"",onClick:()=>p(d),children:[h.jsx(b,{size:16}),v]},d))})}function xx({section:c}){return h.jsxs("div",{className:"section-banner",children:[h.jsxs("div",{children:[h.jsx("div",{className:"eyebrow",children:"Selected section"}),h.jsxs("h2",{children:[c.name," ",h.jsxs("span",{className:"muted",children:["· ",zp(c.course)]})]})]}),h.jsx(Lo,{children:"Demo join code: LOCAL01"})]})}function bx({students:c}){const p=[[c.length,"Enrolled students"],[c.filter(d=>d.status==="Active now").length,"Recently interacting"],[c.filter(d=>d.sheetName).length,"Sheet names matched"]];return h.jsx("div",{className:"stat-grid",children:p.map(([d,v])=>h.jsxs("div",{className:"stat-card",children:[h.jsx("strong",{children:d}),h.jsx("span",{children:v})]},v))})}function wx({students:c,week:p,setWeek:d}){const v=Ue.useMemo(()=>[...c].sort((b,w)=>(w.weekly[p]||0)-(b.weekly[p]||0)),[c,p]);return h.jsxs("section",{className:"panel",children:[h.jsxs("div",{className:"section-heading",children:[h.jsxs("div",{children:[h.jsx("h2",{children:"Weekly points"}),h.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),h.jsxs("label",{children:["Week",h.jsx("select",{value:p,onChange:b=>d(b.target.value),children:om.map(b=>h.jsx("option",{value:b.key,children:b.label},b.key))})]})]}),h.jsx("div",{className:"overflow",children:h.jsxs("table",{className:"data-table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Student"}),h.jsx("th",{children:"Weekly points"}),h.jsx("th",{children:"Sample assignments"})]})}),h.jsx("tbody",{children:v.map(b=>h.jsxs("tr",{children:[h.jsxs("th",{children:[tc(b),h.jsxs("small",{children:["@",b.github]})]}),h.jsx("td",{children:h.jsx("strong",{children:b.weekly[p]||0})}),h.jsx("td",{children:b.assignments.filter(w=>w.score!==null).length})]},b.id))})]})})]})}function am({label:c,value:p,onChange:d}){return h.jsxs("label",{children:[c,h.jsx("select",{value:p,onChange:v=>d(v.target.value),children:mx.map(([v,b])=>h.jsx("option",{value:v,children:b},v))})]})}const kx=c=>c.includes("Completed")?"success":c==="Needs revision"?"warning":"";function Sx({student:c,week:p}){const[d,v]=Ue.useState(null),b=c.assignments,w=b.filter(E=>E.status==="Completed"||E.status==="Practice completed").length,L=b.filter(E=>E.score!==null).length;return h.jsxs("div",{className:"expanded-student",children:[h.jsxs("div",{className:"expanded-header",children:[h.jsxs("div",{children:[h.jsx("h3",{children:"Assignment history"}),h.jsxs("p",{className:"muted",children:["Sample records for ",tc(c),". No student data is loaded."]})]}),h.jsxs(Lo,{tone:"success",children:[c.weekly[p]||0," verified pts this week"]})]}),h.jsxs("div",{className:"mini-stats",children:[h.jsxs("span",{children:[h.jsx("strong",{children:w})," completed"]}),h.jsxs("span",{children:[h.jsx("strong",{children:L})," graded"]}),h.jsxs("span",{children:[h.jsx("strong",{children:b.length})," tracked"]})]}),h.jsx("div",{className:"overflow",children:h.jsxs("table",{className:"data-table assignment-table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Assignment"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Score"}),h.jsx("th",{children:"Updated"}),h.jsx("th",{children:"Action"})]})}),h.jsx("tbody",{children:b.map(E=>{const _=d===E.id;return h.jsxs(Ue.Fragment,{children:[h.jsxs("tr",{children:[h.jsxs("th",{children:[E.name,h.jsx("small",{children:E.type})]}),h.jsx("td",{children:h.jsx(Lo,{tone:kx(E.status),children:E.status})}),h.jsx("td",{children:E.score===null?"—":`${E.score} / ${E.possible}`}),h.jsx("td",{children:E.submitted}),h.jsx("td",{children:h.jsx("button",{className:"small-link",onClick:()=>v(_?null:E.id),children:_?"Hide details":"View details"})})]}),_&&h.jsx("tr",{className:"receipt-preview",children:h.jsxs("td",{colSpan:"5",children:[h.jsx("strong",{children:"Sample assignment detail"}),h.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},E.id)})})]})})]})}function _x({students:c,week:p,sort:d,setSort:v,expanded:b,setExpanded:w}){return h.jsxs("section",{className:"panel",children:[h.jsxs("div",{className:"section-heading",children:[h.jsxs("div",{children:[h.jsx("h2",{children:"Section roster & activity"}),h.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),h.jsx(am,{label:"Sort students by",value:d,onChange:v})]}),h.jsx("div",{className:"overflow",children:h.jsxs("table",{className:"data-table roster-table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Student"}),h.jsx("th",{children:"Activity signal"}),h.jsx("th",{children:"Current activity"}),h.jsx("th",{children:"Practice"}),h.jsx("th",{children:"Hand-ins"})]})}),h.jsx("tbody",{children:c.map(L=>{const E=b===L.id;return h.jsxs(Ue.Fragment,{children:[h.jsxs("tr",{className:E?"selected-row":"",children:[h.jsxs("th",{children:[h.jsxs("button",{className:"student-name-button","aria-expanded":E,onClick:()=>w(E?null:L.id),children:[E?h.jsx(Pf,{size:16}):h.jsx(Hl,{size:16})," ",tc(L)]}),h.jsxs("small",{children:["@",L.github,L.sections.length>1?" · Sheet periods 1, 3":""]})]}),h.jsx("td",{children:h.jsx(Lo,{tone:L.status==="Active now"?"success":"",children:L.status})}),h.jsx("td",{children:L.current}),h.jsxs("td",{children:[L.assignments.filter(_=>_.status.includes("Completed")).length," complete"]}),h.jsx("td",{children:L.assignments.filter(_=>_.score!==null).length})]}),E&&h.jsx("tr",{className:"expansion-row",children:h.jsx("td",{colSpan:"5",children:h.jsx(Sx,{student:L,week:p})})})]},L.id)})})]})})]})}function Cx({section:c,students:p,week:d,setWeek:v,sort:b,setSort:w,expanded:L,setExpanded:E}){return h.jsxs(h.Fragment,{children:[h.jsx(xx,{section:c}),h.jsx(bx,{students:p}),h.jsx(wx,{students:p,week:d,setWeek:v}),h.jsx(_x,{students:p,week:d,sort:b,setSort:w,expanded:L,setExpanded:E})]})}const Tx="/playground/data/computer-science-1/course.json",Gu=ti("computer-science-1");function Nx(){const[c,p]=Ue.useState(null),[d,v]=Ue.useState("loading"),[b,w]=Ue.useState(Gu.lessons[0]);Ue.useEffect(()=>{const R=new AbortController;return fetch(Tx,{signal:R.signal,cache:"no-store"}).then(X=>{if(!X.ok)throw new Error("Curriculum unavailable");return X.json()}).then(X=>{if(!Array.isArray(X.lessons)||!X.lessons.length)throw new Error("Unexpected curriculum response");p(Sf(X)),v("live")}).catch(X=>{X.name!=="AbortError"&&v("snapshot")}),()=>R.abort()},[]);const L=Ue.useMemo(()=>c?{...Gu,...c}:Gu,[c]),E=L.lessons,_=E.includes(b)?b:E[0],P=Ua(L,_),A=E.reduce((R,X)=>{var ne;return R+(((ne=Ua(L,X))==null?void 0:ne.points)||0)},0),M=Gu.lessons.includes(_);return h.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[h.jsxs("div",{className:"section-heading",children:[h.jsxs("div",{children:[h.jsxs("h2",{children:[h.jsx(Ju,{size:18})," Computer Science I curriculum"]}),h.jsxs("p",{children:[L.units.length," original units · ",E.length," lessons · ",A," available lesson points"]})]}),h.jsx("span",{className:"curriculum-source",role:"status",children:d==="live"?"Published course • current":d==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),h.jsx("p",{className:"curriculum-explanation",children:"This reads the public course catalog used by the live Playground. All names, points, and lesson order come from the published content. Student records and grades are not connected."}),h.jsxs("div",{className:"curriculum-grid",children:[h.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:L.units.map((R,X)=>h.jsxs("details",{open:to(R).includes(_)||X===0,children:[h.jsxs("summary",{children:["Unit ",Zu(R,X+1)," · ",No(R)]}),h.jsx("div",{children:to(R).map(ne=>h.jsx("button",{type:"button",className:ne===_?"curriculum-lesson selected":"curriculum-lesson","aria-current":ne===_?"true":void 0,onClick:()=>w(ne),children:qa(L,ne)},ne))})]},R.id))}),h.jsxs("article",{className:"curriculum-lesson-preview",children:[h.jsx("div",{className:"eyebrow",children:"Published lesson"}),h.jsx("h3",{children:P.title}),h.jsx("p",{children:P.summary||P.challenge||"Practice the skills from this unit."}),h.jsxs("div",{className:"curriculum-meta",children:[h.jsxs("span",{children:[P.points??0," possible points"]}),h.jsxs("span",{children:[P.mode==="function"?"Function":"Script"," · Python"]})]}),P.starter&&h.jsxs(h.Fragment,{children:[h.jsx("h4",{children:"Starter code"}),h.jsx("pre",{children:h.jsx("code",{children:P.starter})})]}),M?h.jsxs("a",{className:"btn",href:xd(Gu,_),children:["Open lesson in React preview ",h.jsx(Ng,{size:14})]}):h.jsx("p",{className:"muted",children:"This lesson is new in the published catalog and is not yet included in this React snapshot."})]})]})]})}function Ex({children:c}){return h.jsx("div",{className:"empty",children:c})}function Lx({student:c,isEditing:p,onToggleEdit:d,onDone:v,onPatch:b}){const w=tc(c);return h.jsxs("article",{className:"account-card",children:[h.jsxs("div",{className:"account-row",children:[h.jsx("span",{className:"avatar",children:w.slice(0,1).toUpperCase()}),h.jsxs("div",{className:"account-identity",children:[h.jsx("h3",{children:w}),h.jsxs("small",{children:["@",c.github]})]}),h.jsx("button",{className:"icon-button","aria-label":`Edit ${w}`,onClick:d,children:p?h.jsx(qp,{size:17}):h.jsx(Up,{size:17})})]}),h.jsxs("div",{className:"account-footer",children:[h.jsx(Lo,{tone:c.sheetName?"success":"",children:c.sheetName?"Sheet matched":"Student name fallback"}),c.sections.map(L=>h.jsxs(Lo,{children:["Period ",im(L)]},L))]}),p&&h.jsxs("div",{className:"account-edit",children:[h.jsxs("label",{children:["Google Sheet name",h.jsx("input",{value:c.sheetName||"",onChange:L=>b({sheetName:L.target.value||null})})]}),h.jsxs("label",{children:["Student-provided backup",h.jsx("input",{value:c.studentName||"",onChange:L=>b({studentName:L.target.value})})]}),h.jsx("button",{className:"btn",onClick:v,children:"Done"})]})]})}function Px({students:c,sort:p,setSort:d,patchStudent:v}){const[b,w]=Nn("designlab:period-filter","all"),[L,E]=Ue.useState(""),[_,P]=Ue.useState(null),A=Ue.useMemo(()=>{const M=L.toLowerCase();return c.filter(R=>(b==="all"||R.sections.some(X=>im(X)===b))&&[tc(R),R.github,R.studentName].some(X=>X.toLowerCase().includes(M))).sort((R,X)=>sm(R,X,p))},[c,b,p,L]);return h.jsxs("section",{className:"panel",children:[h.jsxs("div",{className:"section-heading",children:[h.jsxs("div",{children:[h.jsx("h2",{children:"Accounts"}),h.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),h.jsxs(Lo,{children:[A.length," accounts"]})]}),h.jsxs("div",{className:"filters",children:[h.jsxs("label",{children:[h.jsx(jf,{size:16})," ",h.jsx("input",{"aria-label":"Search accounts",value:L,placeholder:"Search name or GitHub username",onChange:M=>E(M.target.value)})]}),h.jsxs("label",{children:["Class period",h.jsxs("select",{value:b,onChange:M=>w(M.target.value),children:[h.jsx("option",{value:"all",children:"All periods"}),fx.map(M=>h.jsx("option",{children:M},M))]})]}),h.jsx(am,{label:"Sort",value:p,onChange:d})]}),h.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),h.jsx("div",{className:"account-grid",children:A.map(M=>h.jsx(Lx,{student:M,isEditing:_===M.id,onToggleEdit:()=>P(_===M.id?null:M.id),onDone:()=>P(null),onPatch:R=>v(M.id,R)},M.id))}),!A.length&&h.jsx(Ex,{children:"No accounts match those filters."})]})}function jx({students:c}){return h.jsxs("section",{className:"panel",children:[h.jsx("h2",{children:"Section setup"}),h.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),h.jsx("div",{className:"setup-grid",children:ps.map(p=>h.jsxs("div",{className:"setup-card",children:[h.jsx("div",{className:"eyebrow",children:p.name}),h.jsx("h3",{children:zp(p.course)}),h.jsxs("span",{children:[c.filter(d=>d.sections.includes(p.id)).length," sample students"]})]},p.id))})]})}function Ax({section:c,students:p,submissions:d}){const[v,b]=Ue.useState(Np()[0]),[w,L]=Ue.useState(null),E=Np(),_=p.map(A=>{const M=d.filter(R=>R.studentId===A.id&&R.sectionId===c.id&&R.week===v);return{student:A,copies:M,latest:M.at(-1)}}),P=_.filter(A=>A.latest).length;return h.jsxs("section",{className:"panel journal-inbox",children:[h.jsxs("div",{className:"section-heading",children:[h.jsxs("div",{children:[h.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),h.jsxs("h2",{children:[h.jsx(Fp,{size:19})," Weekly journal submissions"]}),h.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),h.jsxs("label",{children:["Journal week ",h.jsx("select",{value:v,onChange:A=>{b(A.target.value),L(null)},children:E.map(A=>h.jsx("option",{value:A,children:Wl(A)},A))})]})]}),h.jsxs("div",{className:"stat-grid",children:[h.jsxs("div",{className:"stat-card",children:[h.jsx("strong",{children:P}),h.jsx("span",{children:"Submitted"})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("strong",{children:_.length-P}),h.jsx("span",{children:"Missing"})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("strong",{children:_.length}),h.jsx("span",{children:"Students in section"})]})]}),h.jsx("div",{className:"journal-inbox-rows",children:_.map(({student:A,latest:M,copies:R})=>h.jsxs("div",{className:"journal-inbox-row",children:[h.jsxs("div",{children:[h.jsxs("strong",{children:[A.first," ",A.last]}),h.jsxs("small",{children:["@",A.github]})]}),h.jsx("span",{className:`journal-status-pill ${M?"submitted":""}`,children:M?"Submitted":"Missing"}),h.jsx("span",{className:"journal-inbox-date",children:M?new Date(M.submittedAt).toLocaleString():"—"}),h.jsx("button",{className:"btn",disabled:!M,onClick:()=>L(w===A.id?null:A.id),children:w===A.id?"Close":"Review"}),w===A.id&&M&&h.jsxs("div",{className:"journal-review-detail",children:[h.jsxs("div",{className:"eyebrow",children:[M.type.replace("-"," ")," · ",R.length," ",R.length===1?"hand-in":"hand-ins"," · Manual review"]}),h.jsx("div",{className:"journal-history-answer",children:M.response}),h.jsxs("p",{className:"hint",children:["AI declaration: ",M.aiUse==="none"?"No AI reported":`Disclosed · ${M.aiDetails}`]})]})]},A.id))}),h.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function Rx({students:c,setStudents:p,journalSubmissions:d}){const[v,b]=Nn("designlab:teacher-tab","overview"),[w,L]=Nn("designlab:section","p1"),[E,_]=Nn("designlab:sort","last"),[P,A]=Nn("designlab:week",om[0].key),[M,R]=Ue.useState(null),X=rm(w)||ps[0],ne=Ue.useMemo(()=>c.filter(ue=>ue.sections.includes(w)).sort((ue,D)=>sm(ue,D,E)),[c,w,E]),J=(ue,D)=>p(H=>H.map(U=>U.id===ue?{...U,...D}:U));return h.jsxs("div",{className:"main-content teacher-screen",children:[h.jsx(Rf,{eyebrow:"Your classroom · Frontend preview",actions:h.jsx(Lo,{children:v==="curriculum"?"Published CS1 content":"Sample student data"}),children:"Teacher dashboard"}),h.jsx("p",{className:"page-subtitle",children:v==="curriculum"?"Browse the published Computer Science I course and its lessons.":"Explore sample sections, student records, and weekly scores. No real student information is loaded."}),h.jsx(gx,{sectionId:w,onSectionChange:ue=>{L(ue),R(null)},onReset:()=>{p(sd),R(null)}}),h.jsx(vx,{tab:v,onChange:ue=>{b(ue),R(null)}}),v==="curriculum"&&h.jsx(Nx,{}),v==="overview"&&h.jsx(Cx,{section:X,students:ne,week:P,setWeek:A,sort:E,setSort:_,expanded:M,setExpanded:R}),v==="journals"&&h.jsx(Ax,{section:X,students:ne,submissions:d}),v==="accounts"&&h.jsx(Px,{students:c,sort:E,setSort:_,patchStudent:J}),v==="setup"&&h.jsx(jx,{students:c})]})}const Ix={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},xf={response:"",type:"essay",aiUse:"",aiDetails:""};function Ox({submissions:c,setSubmissions:p}){var _e;const[d,v]=Nn("designlab:journal-section",ps[0].id),b=ps.find(q=>q.id===d)||ps[0],w=sd.filter(q=>q.sections.includes(b.id)),[L,E]=Nn("designlab:journal-student",sd[0].id),_=w.find(q=>q.id===L)||w[0],P=Ue.useMemo(()=>Np(),[]),[A,M]=Nn("designlab:journal-week",P[0]),R=P.includes(A)?A:P[0],[X,ne]=Nn("designlab:journal-drafts",{}),[J,ue]=Ue.useState(""),[D,H]=Ue.useState(!1),U=Wm(b.id,_.id,R),$=X[U]||xf,se=c.filter(q=>q.studentId===_.id&&q.sectionId===b.id&&q.week===R),ge=se.at(-1),ie=$.response.trim()?$.response.trim().split(/\s+/).length:0;function Ce(q,Ee){ne(re=>({...re,[U]:{...re[U]||xf,[q]:Ee}})),ue("Draft saved in this browser.")}function We(q){q.preventDefault();const Ee=Hm($);if(Ee){ue(Ee);return}const re={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:b.id,studentId:_.id,studentName:`${_.first} ${_.last}`,courseId:b.course,week:R,response:$.response.trim(),type:$.type,aiUse:$.aiUse,aiDetails:$.aiDetails.trim(),submittedAt:new Date().toISOString()};p(ve=>[...ve,re]),ue("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return h.jsxs("div",{className:"main-content journal-screen",children:[h.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),h.jsxs("header",{className:"journal-heading",children:[h.jsxs("div",{children:[h.jsx("h1",{children:"Weekly Journals"}),h.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),h.jsxs("span",{className:"chip",children:[h.jsx(Fg,{size:14})," Local demo only"]})]}),h.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[h.jsxs("label",{children:["Class section",h.jsx("select",{value:b.id,onChange:q=>{v(q.target.value),ue("")},children:ps.map(q=>{var Ee;return h.jsxs("option",{value:q.id,children:[q.name," · ",(Ee=ti(q.course))==null?void 0:Ee.label]},q.id)})})]}),h.jsxs("label",{children:["Preview as student",h.jsx("select",{value:_.id,onChange:q=>{E(q.target.value),ue("")},children:w.map(q=>h.jsxs("option",{value:q.id,children:[q.first," ",q.last," (sample)"]},q.id))})]}),h.jsxs("label",{children:["Journal week",h.jsx("select",{value:R,onChange:q=>{M(q.target.value),ue("")},children:P.map(q=>h.jsxs("option",{value:q,children:["Week of ",Wl(q)]},q))})]})]}),h.jsxs("section",{className:"journal-card journal-editor-card",children:[h.jsxs("div",{className:"journal-section-heading",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"eyebrow",children:[(_e=ti(b.course))==null?void 0:_e.label," · ",b.name]}),h.jsxs("h2",{children:["Journal · Week of ",Wl(R)]})]}),h.jsx("span",{className:`journal-status-pill ${ge?"submitted":""}`,children:ge?"Submitted":"Not submitted"})]}),h.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),h.jsxs("form",{onSubmit:We,children:[h.jsxs("label",{children:["Response type",h.jsxs("select",{value:$.type,onChange:q=>Ce("type",q.target.value),children:[h.jsx("option",{value:"essay",children:"Essay or written reflection"}),h.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),h.jsxs("div",{className:"journal-prompt",children:[h.jsx("strong",{children:"Sample prompt"}),h.jsx("p",{children:Ix[$.type]})]}),h.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),h.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:$.response,onChange:q=>Ce("response",q.target.value)}),h.jsxs("div",{className:"journal-writing-meta",children:[h.jsxs("span",{children:[ie," words"]}),h.jsxs("span",{children:[h.jsx(cd,{size:13})," Autosaved in this browser"]})]}),h.jsxs("div",{className:"journal-integrity",children:[h.jsxs("label",{children:["AI-use declaration",h.jsxs("select",{value:$.aiUse,onChange:q=>Ce("aiUse",q.target.value),children:[h.jsx("option",{value:"",children:"Choose one"}),h.jsx("option",{value:"none",children:"I did not use AI-generated content"}),h.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),h.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),$.aiUse==="disclosed"&&h.jsxs("label",{children:["Describe the AI assistance",h.jsx("textarea",{rows:"3",value:$.aiDetails,onChange:q=>Ce("aiDetails",q.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),h.jsxs("div",{className:"journal-actions",children:[h.jsxs("button",{type:"button",className:"btn",onClick:()=>{ue("Draft saved in this browser.")},children:[h.jsx(cd,{size:15})," Save draft"]}),h.jsxs("button",{type:"submit",className:"btn submit",children:[h.jsx(Bp,{size:15})," Demo submit"]})]}),h.jsx("p",{role:"status",className:"journal-submit-status",children:J})]}),h.jsxs("div",{className:"journal-bottom-row",children:[h.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),h.jsxs("button",{type:"button",className:"btn",onClick:()=>H(q=>!q),children:[h.jsx(Ag,{size:15})," ",D?"Hide history":`Submission history (${se.length})`]})]}),D&&h.jsx("div",{className:"journal-history",children:se.length?se.map(q=>h.jsxs("details",{className:"journal-history-item",children:[h.jsxs("summary",{children:[h.jsx(Lp,{size:16})," Submitted ",new Date(q.submittedAt).toLocaleString()," · ",q.type]}),h.jsx("div",{className:"journal-history-answer",children:q.response})]},q.id)):h.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const Mx=`# Attendance Percentage

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
`,Dx=`# Competition Leaderboard Ranks

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
`,zx=`# Confidence Pool Total

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
`,Fx=`# Count Matching Events

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
`,Wx=`# Longest Winning Streak

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
`,Hx=`# Format a Score Line

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
`,Bx=`# Second Largest Distinct Value

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
`,Ux=`# Sum Positive Values

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
`,qx=`# Count Pairs With Target Sum

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
`,Kx=`# Temperature Alert

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
`,$x=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Gx=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Yx=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Vx=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Xx=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Qx=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,Zx=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,Jx=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,e0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,t0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,n0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,r0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,i0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,o0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,s0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,a0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,l0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,u0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,c0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,d0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,p0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,h0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,f0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,m0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,g0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,y0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,v0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,x0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,b0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,w0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,k0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,S0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,_0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,C0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,T0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,N0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,E0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,L0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,P0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,j0=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,A0="attendance-percent",R0=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],I0={challengeId:A0,cases:R0},O0="competition-ranks",M0=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],D0={challengeId:O0,cases:M0},z0="confidence-total",F0=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],W0={challengeId:z0,cases:F0},H0="count-matches",B0=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],U0={challengeId:H0,cases:B0},q0="longest-win-streak",K0=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],$0={challengeId:q0,cases:K0},G0="score-line",Y0=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],V0={challengeId:G0,cases:Y0},X0="second-largest-distinct",Q0=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],Z0={challengeId:X0,cases:Q0},J0="sum-positives",eb=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],tb={challengeId:J0,cases:eb},nb="target-pairs",rb=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],ib={challengeId:nb,cases:rb},ob="temperature-alert",sb=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],ab={challengeId:ob,cases:sb},lb=["python","java","javascript","csharp"],ub=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],lm={languages:lb,challenges:ub},cb=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":Mx,"../challenge-bank/problems/competition-ranks/problem.md":Dx,"../challenge-bank/problems/confidence-total/problem.md":zx,"../challenge-bank/problems/count-matches/problem.md":Fx,"../challenge-bank/problems/longest-win-streak/problem.md":Wx,"../challenge-bank/problems/score-line/problem.md":Hx,"../challenge-bank/problems/second-largest-distinct/problem.md":Bx,"../challenge-bank/problems/sum-positives/problem.md":Ux,"../challenge-bank/problems/target-pairs/problem.md":qx,"../challenge-bank/problems/temperature-alert/problem.md":Kx}),db=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":$x,"../challenge-bank/problems/attendance-percent/starters/Solution.java":Gx,"../challenge-bank/problems/attendance-percent/starters/javascript.js":Yx,"../challenge-bank/problems/attendance-percent/starters/python.py":Vx,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":Xx,"../challenge-bank/problems/competition-ranks/starters/Solution.java":Qx,"../challenge-bank/problems/competition-ranks/starters/javascript.js":Zx,"../challenge-bank/problems/competition-ranks/starters/python.py":Jx,"../challenge-bank/problems/confidence-total/starters/Solution.cs":e0,"../challenge-bank/problems/confidence-total/starters/Solution.java":t0,"../challenge-bank/problems/confidence-total/starters/javascript.js":n0,"../challenge-bank/problems/confidence-total/starters/python.py":r0,"../challenge-bank/problems/count-matches/starters/Solution.cs":i0,"../challenge-bank/problems/count-matches/starters/Solution.java":o0,"../challenge-bank/problems/count-matches/starters/javascript.js":s0,"../challenge-bank/problems/count-matches/starters/python.py":a0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":l0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":u0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":c0,"../challenge-bank/problems/longest-win-streak/starters/python.py":d0,"../challenge-bank/problems/score-line/starters/Solution.cs":p0,"../challenge-bank/problems/score-line/starters/Solution.java":h0,"../challenge-bank/problems/score-line/starters/javascript.js":f0,"../challenge-bank/problems/score-line/starters/python.py":m0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":g0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":y0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":v0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":x0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":b0,"../challenge-bank/problems/sum-positives/starters/Solution.java":w0,"../challenge-bank/problems/sum-positives/starters/javascript.js":k0,"../challenge-bank/problems/sum-positives/starters/python.py":S0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":_0,"../challenge-bank/problems/target-pairs/starters/Solution.java":C0,"../challenge-bank/problems/target-pairs/starters/javascript.js":T0,"../challenge-bank/problems/target-pairs/starters/python.py":N0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":E0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":L0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":P0,"../challenge-bank/problems/temperature-alert/starters/python.py":j0}),pb=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":I0,"../challenge-bank/problems/competition-ranks/examples.json":D0,"../challenge-bank/problems/confidence-total/examples.json":W0,"../challenge-bank/problems/count-matches/examples.json":U0,"../challenge-bank/problems/longest-win-streak/examples.json":$0,"../challenge-bank/problems/score-line/examples.json":V0,"../challenge-bank/problems/second-largest-distinct/examples.json":Z0,"../challenge-bank/problems/sum-positives/examples.json":tb,"../challenge-bank/problems/target-pairs/examples.json":ib,"../challenge-bank/problems/temperature-alert/examples.json":ab}),_d=lm.challenges,Mp=lm.languages,Vu={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},hb={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function um(c){return _d.find(p=>p.id===c)||null}function fb(c){return cb[`../challenge-bank/problems/${c}/problem.md`]??""}function mb(c,p){return db[`../challenge-bank/problems/${c}/starters/${hb[p]}`]??""}function gb(c){var p;return((p=pb[`../challenge-bank/problems/${c}/examples.json`])==null?void 0:p.cases)??[]}const yb=[...new Set(_d.flatMap(c=>c.tags))].sort((c,p)=>c.localeCompare(p)),vb=["Very Easy","Easy","Medium","Hard"];function xb({query:c="",topic:p="all",difficulty:d="all",course:v="all",language:b="all"}={}){const w=c.trim().toLocaleLowerCase();return _d.filter(L=>(!w||[L.title,L.summary,...L.tags].join(" ").toLowerCase().includes(w))&&(p==="all"||L.tags.includes(p))&&(d==="all"||L.difficulty===d)&&(v==="all"||L.suggestedCourses.includes(v))&&(b==="all"||L.languages.includes(b))).slice().sort((L,E)=>L.title.localeCompare(E.title))}function bf(c,p){var w;const[d,...v]=c.split(":"),b=v.join(":");return d==="lesson"?qa(ti(p),b):((w=um(b))==null?void 0:w.title)||b}function bb({grades:c=[],assignments:p=Cf,completedLessons:d=[]}){const[v,b]=Ue.useState("all"),w=v==="all"?c:c.filter(M=>M.courseId===v),L=Ep(w),E=ug(w),_=E[0],P=Eo.map(M=>({...M,...Ep(c.filter(R=>R.courseId===M.id))})),A=p.filter(M=>v==="all"||M.courseId===v).map(M=>({...M,status:vd(M.id,{assignments:p,grades:c,completedLessons:d})})).filter(M=>M.status.state==="assigned"||M.status.state==="overdue").sort((M,R)=>M.dueDate.localeCompare(R.dueDate));return h.jsxs("div",{className:"main-content grades-screen",children:[h.jsxs("header",{className:"grades-heading",children:[h.jsxs("div",{children:[h.jsx("div",{className:"eyebrow",children:"Your progress"}),h.jsx("h1",{children:"Grades"}),h.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),h.jsxs("label",{className:"grades-filter",children:["Course",h.jsxs("select",{value:v,onChange:M=>b(M.target.value),children:[h.jsx("option",{value:"all",children:"All courses"}),Eo.map(M=>h.jsx("option",{value:M.id,children:M.label},M.id))]})]})]}),h.jsx("p",{className:"grades-preview-note",children:"These are sample scores to help preview the page. Only graded work counts toward earned points."}),h.jsxs("div",{className:"grades-summary",children:[h.jsxs("div",{className:"grades-stat surface-card",children:[h.jsx(Sg,{size:19}),h.jsx("span",{children:"Points earned"}),h.jsxs("strong",{children:[L.earned," ",h.jsxs("small",{children:["/ ",L.possible]})]}),h.jsx("p",{children:L.percent===null?"No graded work yet":`${L.percent}% of graded points`})]}),h.jsxs("div",{className:"grades-stat surface-card",children:[h.jsx(Af,{size:19}),h.jsx("span",{children:"Graded activities"}),h.jsx("strong",{children:L.count}),h.jsx("p",{children:"Lessons and challenges"})]}),h.jsxs("div",{className:"grades-stat surface-card",children:[h.jsx(kg,{size:19}),h.jsx("span",{children:"Most recent scored week"}),h.jsx("strong",{children:_?`${_.earned} / ${_.possible}`:"—"}),h.jsx("p",{children:_?`Week of ${Wl(_.week)}`:"No scores yet"})]})]}),h.jsxs("section",{className:"grades-panel surface-card",children:[h.jsx("h2",{children:"Weekly scores"}),E.length?h.jsx("div",{className:"grades-weeks",children:E.map(M=>h.jsxs("div",{className:"grades-week",children:[h.jsxs("div",{children:[h.jsxs("strong",{children:["Week of ",Wl(M.week)]}),h.jsxs("small",{children:[M.count," scored ",M.count===1?"activity":"activities"]})]}),h.jsxs("div",{className:"grades-week-score",children:[h.jsxs("strong",{children:[M.earned," / ",M.possible," pts"]}),h.jsx("progress",{value:M.earned,max:Math.max(M.possible,1),"aria-label":`Week of ${Wl(M.week)}: ${M.earned} of ${M.possible} points`})]})]},M.week))}):h.jsx("p",{children:"No graded work in this selection."})]}),v==="all"&&h.jsxs("section",{className:"grades-panel surface-card",children:[h.jsx("h2",{children:"By course"}),h.jsx("div",{className:"grades-course-list",children:P.map(M=>h.jsxs("div",{className:"grades-course-row","data-course":M.id,children:[h.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),h.jsx("strong",{children:M.label}),h.jsx("span",{children:M.count?`${M.earned} / ${M.possible} pts`:"No grades yet"})]},M.id))})]}),h.jsxs("section",{className:"grades-panel surface-card",children:[h.jsx("h2",{children:"Scored work"}),w.length?h.jsx("div",{className:"grades-entries",children:w.slice().sort((M,R)=>R.gradedAt.localeCompare(M.gradedAt)).map(M=>{var R;return h.jsxs("div",{className:"grades-entry",children:[h.jsxs("div",{children:[h.jsx("strong",{children:bf(M.id,M.courseId)}),h.jsxs("small",{children:[h.jsx(Ju,{size:13}),((R=ti(M.courseId))==null?void 0:R.label)||M.courseId," · ",ud(M.gradedAt)]})]}),h.jsxs("strong",{children:[M.earned," / ",M.possible," pts"]})]},M.id)})}):h.jsx("p",{children:"No scored lessons or challenges yet."})]}),h.jsxs("section",{className:"grades-panel surface-card",children:[h.jsx("h2",{children:"Still to complete"}),A.length?h.jsx("div",{className:"grades-entries",children:A.map(M=>{var R;return h.jsxs("div",{className:"grades-entry",children:[h.jsxs("div",{children:[h.jsx("strong",{children:bf(M.id,M.courseId)}),h.jsx("small",{children:((R=ti(M.courseId))==null?void 0:R.label)||M.courseId})]}),h.jsxs("div",{className:"grades-due-meta",children:[h.jsx("span",{className:`assignment-status ${M.status.state}`,children:M.status.state==="overdue"?"Overdue":"Assigned"}),h.jsxs("small",{children:["Due ",ud(M.dueDate)]})]})]},M.id)})}):h.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function wb({filterCourse:c,onSelect:p,onBrowseCourse:d,grades:v=[]}){const[b,w]=Ue.useState(""),[L,E]=Ue.useState("all"),[_,P]=Ue.useState("all"),[A,M]=Ue.useState("all"),R=c||"all",X=Ue.useMemo(()=>xb({query:b,difficulty:L,topic:_,language:A,course:R}),[b,L,_,A,R]),ne=()=>{w(""),E("all"),P("all"),M("all"),d(null)};return h.jsxs("div",{className:"main-content challenge-bank-screen",children:[h.jsxs("header",{className:"challenge-bank-intro",children:[h.jsxs("div",{className:"eyebrow",children:[h.jsx(wd,{size:15})," Shared programming practice"]}),h.jsx("h1",{children:"Challenge Bank"}),h.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),h.jsxs("div",{className:"challenge-summary",children:[h.jsx("strong",{children:_d.length})," original challenges · ",h.jsx("strong",{children:"4"})," languages · ",h.jsx("strong",{children:"1"})," shared library"]})]}),h.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[h.jsxs("div",{className:"filter-title",children:[h.jsx(Lg,{size:17}),h.jsx("strong",{children:"Find a challenge"}),h.jsxs("button",{type:"button",className:"filter-clear",onClick:ne,children:[h.jsx(qp,{size:14})," Clear filters"]})]}),h.jsxs("div",{className:"challenge-filter-grid",children:[h.jsxs("label",{className:"challenge-search-label",children:["Search",h.jsxs("span",{className:"challenge-search",children:[h.jsx(jf,{size:16}),h.jsx("input",{type:"search",value:b,placeholder:"Problem, skill, or topic",onChange:J=>w(J.target.value)})]})]}),h.jsxs("label",{children:["Course view",h.jsxs("select",{value:R,onChange:J=>d(J.target.value==="all"?null:J.target.value),children:[h.jsx("option",{value:"all",children:"All courses"}),Eo.filter(J=>J.id!=="tsi-math").map(J=>h.jsx("option",{value:J.id,children:J.label},J.id))]})]}),h.jsxs("label",{children:["Difficulty",h.jsxs("select",{value:L,onChange:J=>E(J.target.value),children:[h.jsx("option",{value:"all",children:"Any difficulty"}),vb.map(J=>h.jsx("option",{value:J,children:J},J))]})]}),h.jsxs("label",{children:["Topic",h.jsxs("select",{value:_,onChange:J=>P(J.target.value),children:[h.jsx("option",{value:"all",children:"Any topic"}),yb.map(J=>h.jsx("option",{value:J,children:J},J))]})]}),h.jsxs("label",{children:["Language",h.jsxs("select",{value:A,onChange:J=>M(J.target.value),children:[h.jsx("option",{value:"all",children:"Any language"}),Mp.map(J=>h.jsx("option",{value:J,children:Vu[J]},J))]})]})]}),h.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),h.jsxs("div",{className:"challenge-results-heading",children:[h.jsxs("h2",{children:["Available challenges ",h.jsxs("span",{children:["(",X.length,")"]})]}),h.jsx("span",{children:"Alphabetical order"})]}),X.length?h.jsx("div",{className:"challenge-card-grid",children:X.map(J=>h.jsxs("a",{className:"challenge-card surface-card",href:Tf(J.id),onClick:ue=>{ue.button!==0||ue.metaKey||ue.ctrlKey||ue.shiftKey||ue.altKey||(ue.preventDefault(),p(J.id))},children:[h.jsxs("div",{className:"challenge-card-top",children:[h.jsx("span",{className:"challenge-level level-"+J.difficulty.toLowerCase().replace(" ","-"),children:J.difficulty}),h.jsx("span",{className:"challenge-points",children:Xu("challenge:"+J.id,v)?`${Xu("challenge:"+J.id,v).earned} / ${Xu("challenge:"+J.id,v).possible} pts earned`:`${J.points} pts available`})]}),h.jsx("h3",{children:J.title}),h.jsx("p",{children:J.summary}),h.jsx("div",{className:"challenge-tags",children:J.tags.map(ue=>h.jsx("span",{children:ue},ue))}),h.jsxs("div",{className:"challenge-course-tags",children:[J.suggestedCourses.slice(0,3).map(ue=>{var D,H;return h.jsx("span",{title:(D=ti(ue))==null?void 0:D.label,children:((H=ti(ue))==null?void 0:H.short)||ue},ue)}),J.suggestedCourses.length>3&&h.jsxs("span",{children:["+",J.suggestedCourses.length-3]})]}),h.jsxs("span",{className:"challenge-open",children:["Open challenge ",h.jsx(Ef,{size:16})]})]},J.id))}):h.jsxs("div",{className:"challenge-empty surface-card",children:[h.jsx("h3",{children:"No matching challenges"}),h.jsx("p",{children:"Try a broader topic or clear the filters."}),h.jsx("button",{className:"btn",onClick:ne,children:"Show all challenges"})]}),h.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const kb=(c,p)=>"designlab:challenge-code:"+c+":"+p;function Sb({challengeId:c,onBack:p,grades:d=[]}){const v=um(c),b=Xu("challenge:"+c,d),[w,L]=Nn("designlab:challenge-language","python"),E=Mp.includes(w)?w:"python",_=kb(c,E),P=mb(c,E),[A,M]=Ue.useState(()=>md(_)??P),[R,X]=Ue.useState("Run and Check are simulations. This preview does not execute code."),[ne,J]=Ue.useState(""),[ue,D]=Ue.useState("Choose Check to review the published examples."),[H,U]=Ue.useState("Console"),[$,se]=Nn("designlab:challenge-attempts",[]),[ge,ie]=Nn("designlab:challenge-left-width",420),[Ce,We]=Nn("designlab:challenge-editor-height",330),_e=Ue.useRef(null),q=Ue.useRef(null),Ee=gb(c),re=$.filter(N=>N.challengeId===c);Ue.useEffect(()=>{M(md(_)??P),X("Run / Check are design-only controls—no program is executed."),J(""),D("Choose Check to review the published examples."),U("Console")},[_,P]);const ve=N=>{M(N),gd(_,N),J("Draft saved in this browser for "+Vu[E]+".")},C=N=>{if(N==="Reset"){ve(P),X("Starter restored; nothing was executed."),D("Choose Check to review the published examples."),U("Console");return}if(N==="Save"){gd(_,A),J("Draft saved in this browser.");return}if(N==="Submit"){se(Y=>[...Y,{id:"demo-"+Date.now()+"-"+Math.random().toString(36).slice(2),challengeId:c,language:E,code:A,submittedAt:new Date().toISOString()}]),J("Demo hand-in recorded locally. No code was graded or delivered to a teacher.");return}const O=Ee.map((Y,W)=>"Example "+(W+1)+": input "+JSON.stringify(Y.input)+" → expected "+JSON.stringify(Y.expected)).join(`
`);N==="Check"?(D(`Published examples (not checked against your code):

`+O),U("Checks")):(X(`Expected sample outputs (your code has not run):

`+O),U("Console"))},Q=N=>{if(!_e.current)return;const O=_e.current.getBoundingClientRect();ie(Math.max(280,Math.min(O.width-360,N.clientX-O.left)))},G=N=>{if(!q.current)return;const O=q.current.getBoundingClientRect();We(Math.max(180,Math.min(O.height-130,N.clientY-O.top)))};return v?h.jsxs("div",{className:"challenge-detail-page",children:[h.jsxs("div",{className:"challenge-breadcrumb",children:[h.jsxs("button",{onClick:p,children:[h.jsx(bg,{size:16})," Challenge Bank"]}),h.jsx("span",{children:"/"}),h.jsx("span",{children:v.title})]}),h.jsxs("header",{className:"challenge-detail-heading surface-card",children:[h.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",v.difficulty," · ",v.points," possible points"]}),h.jsx("h1",{children:v.title}),h.jsx("p",{children:v.summary}),b&&h.jsxs("div",{className:"challenge-earned-points",children:["Completed · ",b.earned," / ",b.possible," points earned"]}),h.jsxs("div",{className:"challenge-prerequisites",children:[h.jsx("strong",{children:"Prerequisites:"}),v.prerequisites.map(N=>h.jsx("span",{children:N},N))]})]}),h.jsxs("div",{className:"challenge-workspace",ref:_e,style:{"--challenge-left":ge+"px"},children:[h.jsxs("section",{className:"challenge-instructions",children:[h.jsxs("div",{className:"pane-header",children:[h.jsxs("strong",{children:[h.jsx(wg,{size:16})," Problem & examples"]}),h.jsxs("span",{className:"challenge-points",children:[v.points," pts"]})]}),h.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:Zf(fb(c))}})]}),h.jsx(dd,{axis:"columns",onDrag:Q}),h.jsxs("section",{className:"challenge-editor-panel",children:[h.jsxs("div",{className:"pane-header",children:[h.jsxs("strong",{children:[h.jsx(bd,{size:16})," Solution editor"]}),h.jsxs("label",{className:"challenge-language-selector",children:["Language ",h.jsx("select",{"aria-label":"Solution language",value:E,onChange:N=>L(N.target.value),children:Mp.map(N=>h.jsx("option",{value:N,children:Vu[N]},N))})]})]}),h.jsxs("div",{className:"challenge-code-layout",ref:q,style:{"--challenge-editor-height":Ce+"px"},children:[h.jsx("textarea",{className:"code-editor challenge-editor",spellCheck:!1,"aria-label":Vu[E]+" solution editor",value:A,onChange:N=>ve(N.target.value)}),h.jsx(dd,{axis:"rows",onDrag:G}),h.jsxs("div",{className:"console-pane",children:[h.jsxs("div",{className:"console-heading",children:[h.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Challenge results",children:["Console","Checks"].map(N=>h.jsxs("button",{type:"button",role:"tab","aria-selected":H===N,className:H===N?"active":"",onClick:()=>U(N),children:[N==="Console"&&h.jsx(Hg,{size:14})," ",N]},N))}),h.jsx("span",{children:"Demo"})]}),h.jsx("pre",{role:"tabpanel","aria-label":H==="Checks"?"Checks":"Console output",children:H==="Checks"?ue:R})]})]}),h.jsxs("div",{className:"editor-controls challenge-controls",children:[h.jsxs("div",{children:[h.jsx("button",{className:"btn",onClick:()=>C("Run"),children:"Run"}),h.jsxs("button",{className:"btn",onClick:()=>C("Check"),children:[h.jsx(_g,{size:15})," Check"]}),h.jsxs("button",{className:"btn",onClick:()=>C("Reset"),children:[h.jsx(Hp,{size:15})," Reset"]})]}),h.jsxs("div",{children:[h.jsxs("button",{className:"btn",onClick:()=>C("Save"),children:[h.jsx(cd,{size:15})," Save"]}),h.jsxs("button",{className:"btn submit",onClick:()=>C("Submit"),children:[h.jsx(Bp,{size:15})," Demo submit"]})]})]}),h.jsx("p",{className:"challenge-editor-message",role:"status",children:ne||"Drag the dividers to resize your workspace. Each language keeps its own draft."})]})]}),re.length>0&&h.jsxs("section",{className:"challenge-history surface-card",children:[h.jsxs("h2",{children:["Demo hand-ins (",re.length,")"]}),h.jsx("p",{children:"These are saved only in your browser, not real grades."}),re.slice().reverse().map(N=>h.jsxs("details",{children:[h.jsxs("summary",{children:[Vu[N.language]," · ",new Date(N.submittedAt).toLocaleString()]}),h.jsx("pre",{children:N.code})]},N.id))]})]}):h.jsxs("div",{className:"main-content",children:[h.jsx("h1",{children:"Challenge not found"}),h.jsx("button",{className:"btn",onClick:p,children:"Back to bank"})]})}function _b(){const[c,p]=Ue.useState(()=>mp()),[d,v]=Nn("designlab:course","computer-science-1"),[b,w]=Nn("designlab:theme","dark"),[L,E]=Nn("designlab:course-colors",{}),[_,P]=Nn("designlab:sidebar",!0),[A,M]=Nn("designlab:completed-lessons",[]),[R]=Nn("designlab:sample-gradebook",dg),X=R.filter(q=>q.courseId!=="computer-science-1"),ne=Cf.filter(q=>q.courseId!=="computer-science-1"),J=cg(A,X),[ue,D]=Nn("designlab:students",sd),[H,U]=Nn("designlab:journal-submissions",Bm);Ue.useEffect(()=>{document.documentElement.dataset.theme=b},[b]),Ue.useEffect(()=>{rg(L,Eo)},[L]);function $(q,Ee){!Eo.some(re=>re.id===q)||!yd(Ee)||E(re=>({...re&&typeof re=="object"?re:{},[q]:Ee.toUpperCase()}))}function se(q){E(Ee=>{const re={...Ee&&typeof Ee=="object"?Ee:{}};return delete re[q],re})}Ue.useEffect(()=>{var Ee;c.page==="course"&&v(c.courseId);const q=c.page==="course"?(Ee=ti(c.courseId))==null?void 0:Ee.label:c.page==="teacher"?"Teacher dashboard":c.page==="grades"?"Grades":c.page==="journals"?"Weekly journals":c.page==="challenges"?"Challenge Bank":c.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${q||"Playground"} | Ms. Whitby's Playground — React Lab`},[c.page,c.courseId,v]),Ue.useEffect(()=>{const q=()=>p(mp());return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[]);const ge=Ue.useCallback(q=>{window.location.pathname!==q&&window.history.pushState({},"",q),p(mp()),window.scrollTo({top:0,behavior:"auto"})},[]);function ie(q,Ee){if(!q)return ge(Yu());v(q),ge(xd(q,Ee))}function Ce(q){q==="teacher"?ge(_h()):q==="journals"?ge(mg()):q==="grades"?ge(gg()):q==="challenges"?ge(zl()):q==="course"?ie(c.page==="course"?c.courseId:d):ge(Yu())}const We=c.page,_e=c.courseId||d;return h.jsxs("div",{className:"app-shell",children:[h.jsx($g,{sidebarOpen:_,onToggleSidebar:()=>P(!_),onHome:()=>ge(Yu()),theme:b,setTheme:w}),h.jsxs("div",{className:us("app-layout",!_&&"sidebar-closed"),children:[h.jsx(Yg,{open:_,page:We,courseId:_e,lessonId:c.page==="course"?c.lessonId:null,setPage:Ce,openCourse:ie,completedLessons:J,assignments:ne,grades:X}),h.jsx("main",{className:"main-panel",children:We==="home"?h.jsx(Jg,{completedLessons:J,openCourse:ie,openTeacher:()=>ge(_h()),openChallenges:()=>ge(zl())}):We==="course"?h.jsx(hx,{courseId:c.courseId,lessonId:c.lessonId,openCourse:ie,openChallenges:q=>ge(zl(q)),completedLessons:J,assignments:ne,grades:X,onToggleLessonComplete:q=>M(Ee=>og(Ee,q)),courseColors:L,onSetCourseColor:$,onResetCourseColor:se},c.courseId):We==="grades"?h.jsx(bb,{grades:X,assignments:ne,completedLessons:J}):We==="challenges"?h.jsx(wb,{grades:X,filterCourse:c.filterCourse,onSelect:q=>ge(Tf(q)),onBrowseCourse:q=>ge(zl(q))}):We==="challenge"?h.jsx(Sb,{challengeId:c.challengeId,grades:X,onBack:()=>ge(zl())},c.challengeId):We==="journals"?h.jsx(Ox,{submissions:H,setSubmissions:U}):We==="teacher"?h.jsx(Rx,{students:ue,setStudents:D,journalSubmissions:H}):h.jsxs("div",{className:"main-content route-not-found",children:[h.jsx("div",{className:"eyebrow",children:"Link not found"}),h.jsx("h1",{children:"That playground page doesn't exist."}),h.jsx("p",{children:"Check the link or return to the list of playgrounds."}),h.jsx("button",{className:"btn primary",onClick:()=>ge(Yu()),children:"See all playgrounds"})]})})]}),h.jsx(Vg,{})]})}Dm.createRoot(document.getElementById("root")).render(h.jsx(jm.StrictMode,{children:h.jsx(_b,{})}));
