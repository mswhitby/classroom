var Pm=Object.defineProperty;var Am=(c,h,p)=>h in c?Pm(c,h,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[h]=p;var on=(c,h,p)=>Am(c,typeof h!="symbol"?h+"":h,p);(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))v(x);new MutationObserver(x=>{for(const w of x)if(w.type==="childList")for(const L of w.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&v(L)}).observe(document,{childList:!0,subtree:!0});function p(x){const w={};return x.integrity&&(w.integrity=x.integrity),x.referrerPolicy&&(w.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?w.credentials="include":x.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function v(x){if(x.ep)return;x.ep=!0;const w=p(x);fetch(x.href,w)}})();function Cf(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var cp={exports:{}},Hu={},dp={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Rm(){if(vh)return Et;vh=1;var c=Symbol.for("react.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),L=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.iterator;function I(H){return H===null||typeof H!="object"?null:(H=D&&H[D]||H["@@iterator"],typeof H=="function"?H:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oe=Object.assign,X={};function ue(H,ae,De){this.props=H,this.context=ae,this.refs=X,this.updater=De||ee}ue.prototype.isReactComponent={},ue.prototype.setState=function(H,ae){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ae,"setState")},ue.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function M(){}M.prototype=ue.prototype;function W(H,ae,De){this.props=H,this.context=ae,this.refs=X,this.updater=De||ee}var q=W.prototype=new M;q.constructor=W,oe(q,ue.prototype),q.isPureReactComponent=!0;var K=Array.isArray,ie=Object.prototype.hasOwnProperty,pe={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function we(H,ae,De){var Je,Ve={},ke=null,Ie=null;if(ae!=null)for(Je in ae.ref!==void 0&&(Ie=ae.ref),ae.key!==void 0&&(ke=""+ae.key),ae)ie.call(ae,Je)&&!re.hasOwnProperty(Je)&&(Ve[Je]=ae[Je]);var He=arguments.length-2;if(He===1)Ve.children=De;else if(1<He){for(var Be=Array(He),tt=0;tt<He;tt++)Be[tt]=arguments[tt+2];Ve.children=Be}if(H&&H.defaultProps)for(Je in He=H.defaultProps,He)Ve[Je]===void 0&&(Ve[Je]=He[Je]);return{$$typeof:c,type:H,key:ke,ref:Ie,props:Ve,_owner:pe.current}}function Fe(H,ae){return{$$typeof:c,type:H.type,key:ae,ref:H.ref,props:H.props,_owner:H._owner}}function _e(H){return typeof H=="object"&&H!==null&&H.$$typeof===c}function $(H){var ae={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(De){return ae[De]})}var Te=/\/+/g;function ne(H,ae){return typeof H=="object"&&H!==null&&H.key!=null?$(""+H.key):ae.toString(36)}function ye(H,ae,De,Je,Ve){var ke=typeof H;(ke==="undefined"||ke==="boolean")&&(H=null);var Ie=!1;if(H===null)Ie=!0;else switch(ke){case"string":case"number":Ie=!0;break;case"object":switch(H.$$typeof){case c:case h:Ie=!0}}if(Ie)return Ie=H,Ve=Ve(Ie),H=Je===""?"."+ne(Ie,0):Je,K(Ve)?(De="",H!=null&&(De=H.replace(Te,"$&/")+"/"),ye(Ve,ae,De,"",function(tt){return tt})):Ve!=null&&(_e(Ve)&&(Ve=Fe(Ve,De+(!Ve.key||Ie&&Ie.key===Ve.key?"":(""+Ve.key).replace(Te,"$&/")+"/")+H)),ae.push(Ve)),1;if(Ie=0,Je=Je===""?".":Je+":",K(H))for(var He=0;He<H.length;He++){ke=H[He];var Be=Je+ne(ke,He);Ie+=ye(ke,ae,De,Be,Ve)}else if(Be=I(H),typeof Be=="function")for(H=Be.call(H),He=0;!(ke=H.next()).done;)ke=ke.value,Be=Je+ne(ke,He++),Ie+=ye(ke,ae,De,Be,Ve);else if(ke==="object")throw ae=String(H),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return Ie}function T(H,ae,De){if(H==null)return H;var Je=[],Ve=0;return ye(H,Je,"","",function(ke){return ae.call(De,ke,Ve++)}),Je}function Q(H){if(H._status===-1){var ae=H._result;ae=ae(),ae.then(function(De){(H._status===0||H._status===-1)&&(H._status=1,H._result=De)},function(De){(H._status===0||H._status===-1)&&(H._status=2,H._result=De)}),H._status===-1&&(H._status=0,H._result=ae)}if(H._status===1)return H._result.default;throw H._result}var B={current:null},C={transition:null},R={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:C,ReactCurrentOwner:pe};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:T,forEach:function(H,ae,De){T(H,function(){ae.apply(this,arguments)},De)},count:function(H){var ae=0;return T(H,function(){ae++}),ae},toArray:function(H){return T(H,function(ae){return ae})||[]},only:function(H){if(!_e(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Et.Component=ue,Et.Fragment=p,Et.Profiler=x,Et.PureComponent=W,Et.StrictMode=v,Et.Suspense=_,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,Et.act=Y,Et.cloneElement=function(H,ae,De){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var Je=oe({},H.props),Ve=H.key,ke=H.ref,Ie=H._owner;if(ae!=null){if(ae.ref!==void 0&&(ke=ae.ref,Ie=pe.current),ae.key!==void 0&&(Ve=""+ae.key),H.type&&H.type.defaultProps)var He=H.type.defaultProps;for(Be in ae)ie.call(ae,Be)&&!re.hasOwnProperty(Be)&&(Je[Be]=ae[Be]===void 0&&He!==void 0?He[Be]:ae[Be])}var Be=arguments.length-2;if(Be===1)Je.children=De;else if(1<Be){He=Array(Be);for(var tt=0;tt<Be;tt++)He[tt]=arguments[tt+2];Je.children=He}return{$$typeof:c,type:H.type,key:Ve,ref:ke,props:Je,_owner:Ie}},Et.createContext=function(H){return H={$$typeof:L,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:w,_context:H},H.Consumer=H},Et.createElement=we,Et.createFactory=function(H){var ae=we.bind(null,H);return ae.type=H,ae},Et.createRef=function(){return{current:null}},Et.forwardRef=function(H){return{$$typeof:E,render:H}},Et.isValidElement=_e,Et.lazy=function(H){return{$$typeof:j,_payload:{_status:-1,_result:H},_init:Q}},Et.memo=function(H,ae){return{$$typeof:P,type:H,compare:ae===void 0?null:ae}},Et.startTransition=function(H){var ae=C.transition;C.transition={};try{H()}finally{C.transition=ae}},Et.unstable_act=Y,Et.useCallback=function(H,ae){return B.current.useCallback(H,ae)},Et.useContext=function(H){return B.current.useContext(H)},Et.useDebugValue=function(){},Et.useDeferredValue=function(H){return B.current.useDeferredValue(H)},Et.useEffect=function(H,ae){return B.current.useEffect(H,ae)},Et.useId=function(){return B.current.useId()},Et.useImperativeHandle=function(H,ae,De){return B.current.useImperativeHandle(H,ae,De)},Et.useInsertionEffect=function(H,ae){return B.current.useInsertionEffect(H,ae)},Et.useLayoutEffect=function(H,ae){return B.current.useLayoutEffect(H,ae)},Et.useMemo=function(H,ae){return B.current.useMemo(H,ae)},Et.useReducer=function(H,ae,De){return B.current.useReducer(H,ae,De)},Et.useRef=function(H){return B.current.useRef(H)},Et.useState=function(H){return B.current.useState(H)},Et.useSyncExternalStore=function(H,ae,De){return B.current.useSyncExternalStore(H,ae,De)},Et.useTransition=function(){return B.current.useTransition()},Et.version="18.3.1",Et}var xh;function Fp(){return xh||(xh=1,dp.exports=Rm()),dp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Im(){if(bh)return Hu;bh=1;var c=Fp(),h=Symbol.for("react.element"),p=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function L(E,_,P){var j,D={},I=null,ee=null;P!==void 0&&(I=""+P),_.key!==void 0&&(I=""+_.key),_.ref!==void 0&&(ee=_.ref);for(j in _)v.call(_,j)&&!w.hasOwnProperty(j)&&(D[j]=_[j]);if(E&&E.defaultProps)for(j in _=E.defaultProps,_)D[j]===void 0&&(D[j]=_[j]);return{$$typeof:h,type:E,key:I,ref:ee,props:D,_owner:x.current}}return Hu.Fragment=p,Hu.jsx=L,Hu.jsxs=L,Hu}var wh;function Om(){return wh||(wh=1,cp.exports=Im()),cp.exports}var d=Om(),We=Fp();const Mm=Cf(We);var td={},pp={exports:{}},Jr={},hp={exports:{}},fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function Dm(){return kh||(kh=1,(function(c){function h(C,R){var Y=C.length;C.push(R);e:for(;0<Y;){var H=Y-1>>>1,ae=C[H];if(0<x(ae,R))C[H]=R,C[Y]=ae,Y=H;else break e}}function p(C){return C.length===0?null:C[0]}function v(C){if(C.length===0)return null;var R=C[0],Y=C.pop();if(Y!==R){C[0]=Y;e:for(var H=0,ae=C.length,De=ae>>>1;H<De;){var Je=2*(H+1)-1,Ve=C[Je],ke=Je+1,Ie=C[ke];if(0>x(Ve,Y))ke<ae&&0>x(Ie,Ve)?(C[H]=Ie,C[ke]=Y,H=ke):(C[H]=Ve,C[Je]=Y,H=Je);else if(ke<ae&&0>x(Ie,Y))C[H]=Ie,C[ke]=Y,H=ke;else break e}}return R}function x(C,R){var Y=C.sortIndex-R.sortIndex;return Y!==0?Y:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;c.unstable_now=function(){return w.now()}}else{var L=Date,E=L.now();c.unstable_now=function(){return L.now()-E}}var _=[],P=[],j=1,D=null,I=3,ee=!1,oe=!1,X=!1,ue=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(C){for(var R=p(P);R!==null;){if(R.callback===null)v(P);else if(R.startTime<=C)v(P),R.sortIndex=R.expirationTime,h(_,R);else break;R=p(P)}}function K(C){if(X=!1,q(C),!oe)if(p(_)!==null)oe=!0,Q(ie);else{var R=p(P);R!==null&&B(K,R.startTime-C)}}function ie(C,R){oe=!1,X&&(X=!1,M(we),we=-1),ee=!0;var Y=I;try{for(q(R),D=p(_);D!==null&&(!(D.expirationTime>R)||C&&!$());){var H=D.callback;if(typeof H=="function"){D.callback=null,I=D.priorityLevel;var ae=H(D.expirationTime<=R);R=c.unstable_now(),typeof ae=="function"?D.callback=ae:D===p(_)&&v(_),q(R)}else v(_);D=p(_)}if(D!==null)var De=!0;else{var Je=p(P);Je!==null&&B(K,Je.startTime-R),De=!1}return De}finally{D=null,I=Y,ee=!1}}var pe=!1,re=null,we=-1,Fe=5,_e=-1;function $(){return!(c.unstable_now()-_e<Fe)}function Te(){if(re!==null){var C=c.unstable_now();_e=C;var R=!0;try{R=re(!0,C)}finally{R?ne():(pe=!1,re=null)}}else pe=!1}var ne;if(typeof W=="function")ne=function(){W(Te)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,T=ye.port2;ye.port1.onmessage=Te,ne=function(){T.postMessage(null)}}else ne=function(){ue(Te,0)};function Q(C){re=C,pe||(pe=!0,ne())}function B(C,R){we=ue(function(){C(c.unstable_now())},R)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(C){C.callback=null},c.unstable_continueExecution=function(){oe||ee||(oe=!0,Q(ie))},c.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<C?Math.floor(1e3/C):5},c.unstable_getCurrentPriorityLevel=function(){return I},c.unstable_getFirstCallbackNode=function(){return p(_)},c.unstable_next=function(C){switch(I){case 1:case 2:case 3:var R=3;break;default:R=I}var Y=I;I=R;try{return C()}finally{I=Y}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var Y=I;I=C;try{return R()}finally{I=Y}},c.unstable_scheduleCallback=function(C,R,Y){var H=c.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?H+Y:H):Y=H,C){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,C={id:j++,callback:R,priorityLevel:C,startTime:Y,expirationTime:ae,sortIndex:-1},Y>H?(C.sortIndex=Y,h(P,C),p(_)===null&&C===p(P)&&(X?(M(we),we=-1):X=!0,B(K,Y-H))):(C.sortIndex=ae,h(_,C),oe||ee||(oe=!0,Q(ie))),C},c.unstable_shouldYield=$,c.unstable_wrapCallback=function(C){var R=I;return function(){var Y=I;I=R;try{return C.apply(this,arguments)}finally{I=Y}}}})(fp)),fp}var Sh;function zm(){return Sh||(Sh=1,hp.exports=Dm()),hp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function Fm(){if(_h)return Jr;_h=1;var c=Fp(),h=zm();function p(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,x={};function w(t,r){L(t,r),L(t+"Capture",r)}function L(t,r){for(x[t]=r,t=0;t<r.length;t++)v.add(r[t])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},D={};function I(t){return _.call(D,t)?!0:_.call(j,t)?!1:P.test(t)?D[t]=!0:(j[t]=!0,!1)}function ee(t,r,a,l){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oe(t,r,a,l){if(r===null||typeof r>"u"||ee(t,r,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(t,r,a,l,f,g,N){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=g,this.removeEmptyString=N}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ue[t]=new X(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];ue[r]=new X(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ue[t]=new X(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ue[t]=new X(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ue[t]=new X(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){ue[t]=new X(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){ue[t]=new X(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){ue[t]=new X(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){ue[t]=new X(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,W);ue[r]=new X(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,W);ue[r]=new X(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,W);ue[r]=new X(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){ue[t]=new X(t,1,!1,t.toLowerCase(),null,!1,!1)}),ue.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){ue[t]=new X(t,1,!1,t.toLowerCase(),null,!0,!0)});function q(t,r,a,l){var f=ue.hasOwnProperty(r)?ue[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(oe(r,a,f,l)&&(a=null),l||f===null?I(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,r,a):t.setAttribute(r,a))))}var K=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),pe=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),$=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),C=Symbol.iterator;function R(t){return t===null||typeof t!="object"?null:(t=C&&t[C]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,H;function ae(t){if(H===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);H=r&&r[1]||""}return`
`+H+t}var De=!1;function Je(t,r){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var l=he}Reflect.construct(t,[],r)}else{try{r.call()}catch(he){l=he}t.call(r.prototype)}else{try{throw Error()}catch(he){l=he}t()}}catch(he){if(he&&l&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),g=l.stack.split(`
`),N=f.length-1,U=g.length-1;1<=N&&0<=U&&f[N]!==g[U];)U--;for(;1<=N&&0<=U;N--,U--)if(f[N]!==g[U]){if(N!==1||U!==1)do if(N--,U--,0>U||f[N]!==g[U]){var G=`
`+f[N].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=N&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ae(t):""}function Ve(t){switch(t.tag){case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return t=Je(t.type,!1),t;case 11:return t=Je(t.type.render,!1),t;case 1:return t=Je(t.type,!0),t;default:return""}}function ke(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case re:return"Fragment";case pe:return"Portal";case Fe:return"Profiler";case we:return"StrictMode";case ne:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $:return(t.displayName||"Context")+".Consumer";case _e:return(t._context.displayName||"Context")+".Provider";case Te:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case T:return r=t.displayName||null,r!==null?r:ke(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return ke(t(r))}catch{}}return null}function Ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function He(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(t){var r=Be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(N){l=""+N,g.call(this,N)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(N){l=""+N},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ge(t){t._valueTracker||(t._valueTracker=tt(t))}function qt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Be(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $t(t,r){var a=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function fn(t,r){var a=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;a=He(r.value!=null?r.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function et(t,r){r=r.checked,r!=null&&q(t,"checked",r,!1)}function bt(t,r){et(t,r);var a=He(r.value),l=r.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Zt(t,r.type,a):r.hasOwnProperty("defaultValue")&&Zt(t,r.type,He(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function lt(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Zt(t,r,a){(r!=="number"||Qt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ke=Array.isArray;function vt(t,r,a,l){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+He(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function se(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ce(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(p(92));if(Ke(a)){if(1<a.length)throw Error(p(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:He(a)}}function ge(t,r){var a=He(r.value),l=He(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function xt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function $e(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?$e(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qe,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,l,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function dt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xn=["Webkit","ms","Moz","O"];Object.keys(mn).forEach(function(t){Xn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),mn[r]=mn[t]})});function _r(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mn.hasOwnProperty(t)&&mn[t]?(""+r).trim():r+"px"}function Wr(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=_r(a,r[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var sr=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(t,r){if(r){if(sr[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function gt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=null;function nt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,Gt=null,At=null;function Rt(t){if(t=cn(t)){if(typeof Cr!="function")throw Error(p(280));var r=t.stateNode;r&&(r=yn(r),Cr(t.stateNode,t.type,r))}}function En(t){Gt?At?At.push(t):At=[t]:Gt=t}function ln(){if(Gt){var t=Gt,r=At;if(At=Gt=null,Rt(t),r)for(t=0;t<r.length;t++)Rt(r[t])}}function ar(t,r){return t(r)}function wn(){}var ni=!1;function In(t,r,a){if(ni)return t(r,a);ni=!0;try{return ar(t,r,a)}finally{ni=!1,(Gt!==null||At!==null)&&(wn(),ln())}}function lr(t,r){var a=t.stateNode;if(a===null)return null;var l=yn(a);if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(p(231,r,typeof a));return a}var Hr=!1;if(E)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Hr=!1}function Tr(t,r,a,l,f,g,N,U,G){var he=Array.prototype.slice.call(arguments,3);try{r.apply(a,he)}catch(Pe){this.onError(Pe)}}var Qn=!1,ri=null,Br=!1,Ur=null,ur={onError:function(t){Qn=!0,ri=t}};function qr(t,r,a,l,f,g,N,U,G){Qn=!1,ri=null,Tr.apply(ur,arguments)}function jo(t,r,a,l,f,g,N,U,G){if(qr.apply(this,arguments),Qn){if(Qn){var he=ri;Qn=!1,ri=null}else throw Error(p(198));Br||(Br=!0,Ur=he)}}function kn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function hs(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Ar(t){if(kn(t)!==t)throw Error(p(188))}function Rr(t){var r=t.alternate;if(!r){if(r=kn(t),r===null)throw Error(p(188));return r!==t?null:t}for(var a=t,l=r;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Ar(f),t;if(g===l)return Ar(f),r;g=g.sibling}throw Error(p(188))}if(a.return!==l.return)a=f,l=g;else{for(var N=!1,U=f.child;U;){if(U===a){N=!0,a=f,l=g;break}if(U===l){N=!0,l=f,a=g;break}U=U.sibling}if(!N){for(U=g.child;U;){if(U===a){N=!0,a=g,l=f;break}if(U===l){N=!0,l=g,a=f;break}U=U.sibling}if(!N)throw Error(p(189))}}if(a.alternate!==l)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?t:r}function Nr(t){return t=Rr(t),t!==null?Ft(t):null}function Ft(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ft(t);if(r!==null)return r;t=t.sibling}return null}var Er=h.unstable_scheduleCallback,Di=h.unstable_cancelCallback,ii=h.unstable_shouldYield,vi=h.unstable_requestPaint,jt=h.unstable_now,io=h.unstable_getCurrentPriorityLevel,xi=h.unstable_ImmediatePriority,Yt=h.unstable_UserBlockingPriority,Xe=h.unstable_NormalPriority,oi=h.unstable_LowPriority,cr=h.unstable_IdlePriority,On=null,S=null;function z(t){if(S&&typeof S.onCommitFiberRoot=="function")try{S.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}}var fe=Math.clz32?Math.clz32:ze,Ne=Math.log,de=Math.LN2;function ze(t){return t>>>=0,t===0?32:31-(Ne(t)/de|0)|0}var _t=64,Jt=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function si(t,r){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,g=t.pingedLanes,N=a&268435455;if(N!==0){var U=N&~f;U!==0?l=Sn(U):(g&=N,g!==0&&(l=Sn(g)))}else N=a&~f,N!==0?l=Sn(N):g!==0&&(l=Sn(g));if(l===0)return 0;if(r!==0&&r!==l&&(r&f)===0&&(f=l&-l,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((l&4)!==0&&(l|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)a=31-fe(r),f=1<<a,l|=t[a],r&=~f;return l}function Va(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,g=t.pendingLanes;0<g;){var N=31-fe(g),U=1<<N,G=f[N];G===-1?((U&a)===0||(U&l)!==0)&&(f[N]=Va(U,r)):G<=r&&(t.expiredLanes|=U),g&=~U}}function fs(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ta(){var t=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),t}function zi(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Kn(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-fe(r),t[r]=a}function Po(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-fe(a),g=1<<f;r[f]=0,l[f]=-1,t[f]=-1,a&=~g}}function oo(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-fe(a),f=1<<l;f&r|t[l]&r&&(t[l]|=r),a&=~f}}var Nt=0;function Fi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kr,ai,dr,na,so,ms=!1,Ao=[],pr=null,Ir=null,Mn=null,Ro=new Map,ao=new Map,Or=[],Io="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ra(t,r){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ro.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(r.pointerId)}}function Wi(t,r,a,l,f,g){return t===null||t.nativeEvent!==g?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:g,targetContainers:[f]},r!==null&&(r=cn(r),r!==null&&ai(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Oo(t,r,a,l,f){switch(r){case"focusin":return pr=Wi(pr,t,r,a,l,f),!0;case"dragenter":return Ir=Wi(Ir,t,r,a,l,f),!0;case"mouseover":return Mn=Wi(Mn,t,r,a,l,f),!0;case"pointerover":var g=f.pointerId;return Ro.set(g,Wi(Ro.get(g)||null,t,r,a,l,f)),!0;case"gotpointercapture":return g=f.pointerId,ao.set(g,Wi(ao.get(g)||null,t,r,a,l,f)),!0}return!1}function gs(t){var r=jn(t.target);if(r!==null){var a=kn(r);if(a!==null){if(r=a.tag,r===13){if(r=hs(a),r!==null){t.blockedOn=r,so(t.priority,function(){dr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Se(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=$n(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Mi=l,a.target.dispatchEvent(l),Mi=null}else return r=cn(a),r!==null&&ai(r),t.blockedOn=a,!1;r.shift()}return!0}function A(t,r,a){Se(t)&&a.delete(r)}function Z(){ms=!1,pr!==null&&Se(pr)&&(pr=null),Ir!==null&&Se(Ir)&&(Ir=null),Mn!==null&&Se(Mn)&&(Mn=null),Ro.forEach(A),ao.forEach(A)}function xe(t,r){t.blockedOn===r&&(t.blockedOn=null,ms||(ms=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Z)))}function be(t){function r(f){return xe(f,t)}if(0<Ao.length){xe(Ao[0],t);for(var a=1;a<Ao.length;a++){var l=Ao[a];l.blockedOn===t&&(l.blockedOn=null)}}for(pr!==null&&xe(pr,t),Ir!==null&&xe(Ir,t),Mn!==null&&xe(Mn,t),Ro.forEach(r),ao.forEach(r),a=0;a<Or.length;a++)l=Or[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Or.length&&(a=Or[0],a.blockedOn===null);)gs(a),a.blockedOn===null&&Or.shift()}var Ze=K.ReactCurrentBatchConfig,ut=!0;function kt(t,r,a,l){var f=Nt,g=Ze.transition;Ze.transition=null;try{Nt=1,hr(t,r,a,l)}finally{Nt=f,Ze.transition=g}}function gn(t,r,a,l){var f=Nt,g=Ze.transition;Ze.transition=null;try{Nt=4,hr(t,r,a,l)}finally{Nt=f,Ze.transition=g}}function hr(t,r,a,l){if(ut){var f=$n(t,r,a,l);if(f===null)au(t,r,l,un,a),ra(t,l);else if(Oo(f,t,r,a,l))l.stopPropagation();else if(ra(t,l),r&4&&-1<Io.indexOf(t)){for(;f!==null;){var g=cn(f);if(g!==null&&Kr(g),g=$n(t,r,a,l),g===null&&au(t,r,l,un,a),g===f)break;f=g}f!==null&&l.stopPropagation()}else au(t,r,l,null,a)}}var un=null;function $n(t,r,a,l){if(un=null,t=nt(l),t=jn(t),t!==null)if(r=kn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=hs(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return un=t,null}function bi(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(io()){case xi:return 1;case Yt:return 4;case Xe:case oi:return 16;case cr:return 536870912;default:return 16}default:return 16}}var Pt=null,ys=null,Xa=null;function Qa(){if(Xa)return Xa;var t,r=ys,a=r.length,l,f="value"in Pt?Pt.value:Pt.textContent,g=f.length;for(t=0;t<a&&r[t]===f[t];t++);var N=a-t;for(l=1;l<=N&&r[a-l]===f[g-l];l++);return Xa=f.slice(t,1<l?1-l:void 0)}function ia(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function li(){return!0}function Za(){return!1}function _n(t){function r(a,l,f,g,N){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=g,this.target=N,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?li:Za,this.isPropagationStopped=Za,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),r}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=_n(Hi),wi=Y({},Hi,{view:0,detail:0}),Td=_n(wi),ql,Kl,sa,aa=Y({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(ql=t.screenX-sa.screenX,Kl=t.screenY-sa.screenY):Kl=ql=0,sa=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),$l=_n(aa),Nd=Y({},aa,{dataTransfer:0}),Ed=_n(Nd),Ld=Y({},wi,{relatedTarget:0}),Gl=_n(Ld),nc=Y({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),jd=_n(nc),rc=Y({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ja=_n(rc),vs=Y({},Hi,{data:0}),ic=_n(vs),Pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},la={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=la[t])?!!r[t]:!1}function Yl(){return Dn}var oc=Y({},wi,{key:function(t){if(t.key){var r=Pd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ad[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ua=_n(oc),Rd=Y({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=_n(Rd),Id=Y({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Xl=_n(Id),sc=Y({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=_n(sc),Md=Y({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ac=_n(Md),lc=[9,13,27,32],Ql=E&&"CompositionEvent"in window,Bi=null;E&&"documentMode"in document&&(Bi=document.documentMode);var Ui=E&&"TextEvent"in window&&!Bi,ca=E&&(!Ql||Bi&&8<Bi&&11>=Bi),el=" ",Zl=!1;function ui(t,r){switch(t){case"keyup":return lc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function Dd(t,r){switch(t){case"compositionend":return lo(r);case"keypress":return r.which!==32?null:(Zl=!0,el);case"textInput":return t=r.data,t===el&&Zl?null:t;default:return null}}function uc(t,r){if(uo)return t==="compositionend"||!Ql&&ui(t,r)?(t=Qa(),Xa=ys=Pt=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ca&&r.locale!=="ko"?null:r.data;default:return null}}var zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!zd[t.type]:r==="textarea"}function tl(t,r,a,l){En(l),r=_s(r,"onChange"),0<r.length&&(a=new oa("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var ki=null,Lr=null;function cc(t){dl(t,0)}function da(t){var r=Tn(t);if(qt(r))return t}function Fd(t,r){if(t==="change")return r}var dc=!1;if(E){var eu;if(E){var nl="oninput"in document;if(!nl){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),nl=typeof tu.oninput=="function"}eu=nl}else eu=!1;dc=eu&&(!document.documentMode||9<document.documentMode)}function xs(){ki&&(ki.detachEvent("onpropertychange",nu),Lr=ki=null)}function nu(t){if(t.propertyName==="value"&&da(Lr)){var r=[];tl(r,Lr,t,nt(t)),In(cc,r)}}function pc(t,r,a){t==="focusin"?(xs(),ki=r,Lr=a,ki.attachEvent("onpropertychange",nu)):t==="focusout"&&xs()}function ru(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(Lr)}function rl(t,r){if(t==="click")return da(r)}function hc(t,r){if(t==="input"||t==="change")return da(r)}function il(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:il;function bs(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!_.call(r,f)||!Cn(t[f],r[f]))return!1}return!0}function ol(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sl(t,r){var a=ol(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ol(a)}}function iu(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?iu(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function ou(){for(var t=window,r=Qt();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Qt(t.document)}return r}function pa(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Wd(t){var r=ou(),a=t.focusedElem,l=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&iu(a.ownerDocument.documentElement,a)){if(l!==null&&pa(a)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,g=Math.min(l.start,f);l=l.end===void 0?g:Math.min(l.end,f),!t.extend&&g>l&&(f=l,l=g,g=f),f=sl(a,g);var N=sl(a,l);f&&N&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==N.node||t.focusOffset!==N.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),g>l?(t.addRange(r),t.extend(N.node,N.offset)):(r.setEnd(N.node,N.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hd=E&&"documentMode"in document&&11>=document.documentMode,ws=null,qi=null,Si=null,co=!1;function al(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;co||ws==null||ws!==Qt(l)||(l=ws,"selectionStart"in l&&pa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Si&&bs(Si,l)||(Si=l,l=_s(qi,"onSelect"),0<l.length&&(r=new oa("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=ws)))}function ks(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Mo={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},ha={},po={};E&&(po=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function _i(t){if(ha[t])return ha[t];if(!Mo[t])return t;var r=Mo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in po)return ha[t]=r[a];return t}var er=_i("animationend"),Ki=_i("animationiteration"),$i=_i("animationstart"),fa=_i("transitionend"),fc=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,r){fc.set(t,r),w(r,[t])}for(var ll=0;ll<su.length;ll++){var ma=su[ll],ul=ma.toLowerCase(),Bd=ma[0].toUpperCase()+ma.slice(1);$r(ul,"on"+Bd)}$r(er,"onAnimationEnd"),$r(Ki,"onAnimationIteration"),$r($i,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(fa,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function cl(t,r,a){var l=t.type||"unknown-event";t.currentTarget=a,jo(l,r,void 0,t),t.currentTarget=null}function dl(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var g=void 0;if(r)for(var N=l.length-1;0<=N;N--){var U=l[N],G=U.instance,he=U.currentTarget;if(U=U.listener,G!==g&&f.isPropagationStopped())break e;cl(f,U,he),g=G}else for(N=0;N<l.length;N++){if(U=l[N],G=U.instance,he=U.currentTarget,U=U.listener,G!==g&&f.isPropagationStopped())break e;cl(f,U,he),g=G}}}if(Br)throw t=Ur,Br=!1,Ur=null,t}function Wt(t,r){var a=r[lu];a===void 0&&(a=r[lu]=new Set);var l=t+"__bubble";a.has(l)||(gc(r,t,2,!1),a.add(l))}function Ss(t,r,a){var l=0;r&&(l|=4),gc(a,t,l,r)}var ga="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[ga]){t[ga]=!0,v.forEach(function(a){a!=="selectionchange"&&(mc.has(a)||Ss(a,!1,t),Ss(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ga]||(r[ga]=!0,Ss("selectionchange",!1,r))}}function gc(t,r,a,l){switch(bi(r)){case 1:var f=kt;break;case 4:f=gn;break;default:f=hr}a=f.bind(null,r,a,t),f=void 0,!Hr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function au(t,r,a,l,f){var g=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var N=l.tag;if(N===3||N===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(N===4)for(N=l.return;N!==null;){var G=N.tag;if((G===3||G===4)&&(G=N.stateNode.containerInfo,G===f||G.nodeType===8&&G.parentNode===f))return;N=N.return}for(;U!==null;){if(N=jn(U),N===null)return;if(G=N.tag,G===5||G===6){l=g=N;continue e}U=U.parentNode}}l=l.return}In(function(){var he=g,Pe=nt(a),Ae=[];e:{var Le=fc.get(t);if(Le!==void 0){var Qe=oa,rt=t;switch(t){case"keypress":if(ia(a)===0)break e;case"keydown":case"keyup":Qe=ua;break;case"focusin":rt="focus",Qe=Gl;break;case"focusout":rt="blur",Qe=Gl;break;case"beforeblur":case"afterblur":Qe=Gl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=$l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Xl;break;case er:case Ki:case $i:Qe=jd;break;case fa:Qe=Od;break;case"scroll":Qe=Td;break;case"wheel":Qe=ac;break;case"copy":case"cut":case"paste":Qe=Ja;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Vl}var it=(r&4)!==0,qn=!it&&t==="scroll",le=it?Le!==null?Le+"Capture":null:Le;it=[];for(var J=he,ce;J!==null;){ce=J;var Me=ce.stateNode;if(ce.tag===5&&Me!==null&&(ce=Me,le!==null&&(Me=lr(J,le),Me!=null&&it.push(ya(J,Me,ce)))),qn)break;J=J.return}0<it.length&&(Le=new Qe(Le,rt,null,a,Pe),Ae.push({event:Le,listeners:it}))}}if((r&7)===0){e:{if(Le=t==="mouseover"||t==="pointerover",Qe=t==="mouseout"||t==="pointerout",Le&&a!==Mi&&(rt=a.relatedTarget||a.fromElement)&&(jn(rt)||rt[Vi]))break e;if((Qe||Le)&&(Le=Pe.window===Pe?Pe:(Le=Pe.ownerDocument)?Le.defaultView||Le.parentWindow:window,Qe?(rt=a.relatedTarget||a.toElement,Qe=he,rt=rt?jn(rt):null,rt!==null&&(qn=kn(rt),rt!==qn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Qe=null,rt=he),Qe!==rt)){if(it=$l,Me="onMouseLeave",le="onMouseEnter",J="mouse",(t==="pointerout"||t==="pointerover")&&(it=Vl,Me="onPointerLeave",le="onPointerEnter",J="pointer"),qn=Qe==null?Le:Tn(Qe),ce=rt==null?Le:Tn(rt),Le=new it(Me,J+"leave",Qe,a,Pe),Le.target=qn,Le.relatedTarget=ce,Me=null,jn(Pe)===he&&(it=new it(le,J+"enter",rt,a,Pe),it.target=ce,it.relatedTarget=qn,Me=it),qn=Me,Qe&&rt)t:{for(it=Qe,le=rt,J=0,ce=it;ce;ce=fo(ce))J++;for(ce=0,Me=le;Me;Me=fo(Me))ce++;for(;0<J-ce;)it=fo(it),J--;for(;0<ce-J;)le=fo(le),ce--;for(;J--;){if(it===le||le!==null&&it===le.alternate)break t;it=fo(it),le=fo(le)}it=null}else it=null;Qe!==null&&zo(Ae,Le,Qe,it,!1),rt!==null&&qn!==null&&zo(Ae,qn,rt,it,!0)}}e:{if(Le=he?Tn(he):window,Qe=Le.nodeName&&Le.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Le.type==="file")var at=Fd;else if(Jl(Le))if(dc)at=hc;else{at=ru;var pt=pc}else(Qe=Le.nodeName)&&Qe.toLowerCase()==="input"&&(Le.type==="checkbox"||Le.type==="radio")&&(at=rl);if(at&&(at=at(t,he))){tl(Ae,at,a,Pe);break e}pt&&pt(t,Le,he),t==="focusout"&&(pt=Le._wrapperState)&&pt.controlled&&Le.type==="number"&&Zt(Le,"number",Le.value)}switch(pt=he?Tn(he):window,t){case"focusin":(Jl(pt)||pt.contentEditable==="true")&&(ws=pt,qi=he,Si=null);break;case"focusout":Si=qi=ws=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,al(Ae,a,Pe);break;case"selectionchange":if(Hd)break;case"keydown":case"keyup":al(Ae,a,Pe)}var ht;if(Ql)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else uo?ui(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(ca&&a.locale!=="ko"&&(uo||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&uo&&(ht=Qa()):(Pt=Pe,ys="value"in Pt?Pt.value:Pt.textContent,uo=!0)),pt=_s(he,yt),0<pt.length&&(yt=new ic(yt,t,null,a,Pe),Ae.push({event:yt,listeners:pt}),ht?yt.data=ht:(ht=lo(a),ht!==null&&(yt.data=ht)))),(ht=Ui?Dd(t,a):uc(t,a))&&(he=_s(he,"onBeforeInput"),0<he.length&&(Pe=new ic("onBeforeInput","beforeinput",null,a,Pe),Ae.push({event:Pe,listeners:he}),Pe.data=ht))}dl(Ae,r)})}function ya(t,r,a){return{instance:t,listener:r,currentTarget:a}}function _s(t,r){for(var a=r+"Capture",l=[];t!==null;){var f=t,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=lr(t,a),g!=null&&l.unshift(ya(t,g,f)),g=lr(t,r),g!=null&&l.push(ya(t,g,f))),t=t.return}return l}function fo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zo(t,r,a,l,f){for(var g=r._reactName,N=[];a!==null&&a!==l;){var U=a,G=U.alternate,he=U.stateNode;if(G!==null&&G===l)break;U.tag===5&&he!==null&&(U=he,f?(G=lr(a,g),G!=null&&N.unshift(ya(a,G,U))):f||(G=lr(a,g),G!=null&&N.push(ya(a,G,U)))),a=a.return}N.length!==0&&t.push({event:r,listeners:N})}var va=/\r\n?/g,Ud=/\u0000|\uFFFD/g;function xa(t){return(typeof t=="string"?t:""+t).replace(va,`
`).replace(Ud,"")}function ba(t,r,a){if(r=xa(r),xa(t)!==r&&a)throw Error(p(425))}function mo(){}var pl=null,Gi=null;function Fo(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yi=typeof setTimeout=="function"?setTimeout:void 0,wa=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(t){return Wo.resolve(null).then(t).catch(vc)}:Yi;function vc(t){setTimeout(function(){throw t})}function hl(t,r){var a=r,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),be(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);be(r)}function go(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function yo(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Gr,ka="__reactProps$"+Gr,Vi="__reactContainer$"+Gr,lu="__reactEvents$"+Gr,qd="__reactListeners$"+Gr,Kd="__reactHandles$"+Gr;function jn(t){var r=t[Ci];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Vi]||a[Ci]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=yo(t);t!==null;){if(a=t[Ci])return a;t=yo(t)}return r}t=a,a=t.parentNode}return null}function cn(t){return t=t[Ci]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p(33))}function yn(t){return t[ka]||null}var Ho=[],Cs=-1;function ci(t){return{current:t}}function en(t){0>Cs||(t.current=Ho[Cs],Ho[Cs]=null,Cs--)}function Vt(t,r){Cs++,Ho[Cs]=t.current,t.current=r}var vo={},Gn=ci(vo),fr=ci(!1),Xi=vo;function Ts(t,r){var a=t.type.contextTypes;if(!a)return vo;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=r[g];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function tr(t){return t=t.childContextTypes,t!=null}function Ns(){en(fr),en(Gn)}function uu(t,r,a){if(Gn.current!==vo)throw Error(p(168));Vt(Gn,r),Vt(fr,a)}function cu(t,r,a){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(p(108,Ie(t)||"Unknown",f));return Y({},a,l)}function Es(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vo,Xi=Gn.current,Vt(Gn,t),Vt(fr,fr.current),!0}function du(t,r,a){var l=t.stateNode;if(!l)throw Error(p(169));a?(t=cu(t,r,Xi),l.__reactInternalMemoizedMergedChildContext=t,en(fr),en(Gn),Vt(Gn,t)):en(fr),Vt(fr,a)}var Mr=null,fl=!1,Ls=!1;function Ti(t){Mr===null?Mr=[t]:Mr.push(t)}function xc(t){fl=!0,Ti(t)}function xo(){if(!Ls&&Mr!==null){Ls=!0;var t=0,r=Nt;try{var a=Mr;for(Nt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Mr=null,fl=!1}catch(f){throw Mr!==null&&(Mr=Mr.slice(t+1)),Er(xi,xo),f}finally{Nt=r,Ls=!1}}return null}var Bo=[],Yn=0,Lt=null,jr=0,zn=[],Fn=0,bo=null,di=1,Ni="";function Uo(t,r){Bo[Yn++]=jr,Bo[Yn++]=Lt,Lt=t,jr=r}function ml(t,r,a){zn[Fn++]=di,zn[Fn++]=Ni,zn[Fn++]=bo,bo=t;var l=di;t=Ni;var f=32-fe(l)-1;l&=~(1<<f),a+=1;var g=32-fe(r)+f;if(30<g){var N=f-f%5;g=(l&(1<<N)-1).toString(32),l>>=N,f-=N,di=1<<32-fe(r)+f|a<<f|l,Ni=g+t}else di=1<<g|a<<f|l,Ni=t}function qo(t){t.return!==null&&(Uo(t,1),ml(t,1,0))}function gl(t){for(;t===Lt;)Lt=Bo[--Yn],Bo[Yn]=null,jr=Bo[--Yn],Bo[Yn]=null;for(;t===bo;)bo=zn[--Fn],zn[Fn]=null,Ni=zn[--Fn],zn[Fn]=null,di=zn[--Fn],zn[Fn]=null}var mr=null,Pn=null,tn=!1,Yr=null;function bc(t,r){var a=Ii(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Sa(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mr=t,Pn=go(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mr=t,Pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=bo!==null?{id:di,overflow:Ni}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ii(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,mr=t,Pn=null,!0):!1;default:return!1}}function _a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yl(t){if(tn){var r=Pn;if(r){var a=r;if(!Sa(t,r)){if(_a(t))throw Error(p(418));r=go(a.nextSibling);var l=mr;r&&Sa(t,r)?bc(l,a):(t.flags=t.flags&-4097|2,tn=!1,mr=t)}}else{if(_a(t))throw Error(p(418));t.flags=t.flags&-4097|2,tn=!1,mr=t}}}function wc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mr=t}function Ca(t){if(t!==mr)return!1;if(!tn)return wc(t),tn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Fo(t.type,t.memoizedProps)),r&&(r=Pn)){if(_a(t))throw kc(),Error(p(418));for(;r;)bc(t,r),r=go(r.nextSibling)}if(wc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Pn=go(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Pn=null}}else Pn=mr?go(t.stateNode.nextSibling):null;return!0}function kc(){for(var t=Pn;t;)t=go(t.nextSibling)}function js(){Pn=mr=null,tn=!1}function Ps(t){Yr===null?Yr=[t]:Yr.push(t)}var Sc=K.ReactCurrentBatchConfig;function Ta(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p(309));var l=a.stateNode}if(!l)throw Error(p(147,t));var f=l,g=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(N){var U=f.refs;N===null?delete U[g]:U[g]=N},r._stringRef=g,r)}if(typeof t!="string")throw Error(p(284));if(!a._owner)throw Error(p(290,t))}return t}function vl(t,r){throw t=Object.prototype.toString.call(r),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function pu(t){var r=t._init;return r(t._payload)}function Ko(t){function r(le,J){if(t){var ce=le.deletions;ce===null?(le.deletions=[J],le.flags|=16):ce.push(J)}}function a(le,J){if(!t)return null;for(;J!==null;)r(le,J),J=J.sibling;return null}function l(le,J){for(le=new Map;J!==null;)J.key!==null?le.set(J.key,J):le.set(J.index,J),J=J.sibling;return le}function f(le,J){return le=Vs(le,J),le.index=0,le.sibling=null,le}function g(le,J,ce){return le.index=ce,t?(ce=le.alternate,ce!==null?(ce=ce.index,ce<J?(le.flags|=2,J):ce):(le.flags|=2,J)):(le.flags|=1048576,J)}function N(le){return t&&le.alternate===null&&(le.flags|=2),le}function U(le,J,ce,Me){return J===null||J.tag!==6?(J=ip(ce,le.mode,Me),J.return=le,J):(J=f(J,ce),J.return=le,J)}function G(le,J,ce,Me){var at=ce.type;return at===re?Pe(le,J,ce.props.children,Me,ce.key):J!==null&&(J.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&pu(at)===J.type)?(Me=f(J,ce.props),Me.ref=Ta(le,J,ce),Me.return=le,Me):(Me=Gc(ce.type,ce.key,ce.props,null,le.mode,Me),Me.ref=Ta(le,J,ce),Me.return=le,Me)}function he(le,J,ce,Me){return J===null||J.tag!==4||J.stateNode.containerInfo!==ce.containerInfo||J.stateNode.implementation!==ce.implementation?(J=op(ce,le.mode,Me),J.return=le,J):(J=f(J,ce.children||[]),J.return=le,J)}function Pe(le,J,ce,Me,at){return J===null||J.tag!==7?(J=Ua(ce,le.mode,Me,at),J.return=le,J):(J=f(J,ce),J.return=le,J)}function Ae(le,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return J=ip(""+J,le.mode,ce),J.return=le,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case ie:return ce=Gc(J.type,J.key,J.props,null,le.mode,ce),ce.ref=Ta(le,null,J),ce.return=le,ce;case pe:return J=op(J,le.mode,ce),J.return=le,J;case Q:var Me=J._init;return Ae(le,Me(J._payload),ce)}if(Ke(J)||R(J))return J=Ua(J,le.mode,ce,null),J.return=le,J;vl(le,J)}return null}function Le(le,J,ce,Me){var at=J!==null?J.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return at!==null?null:U(le,J,""+ce,Me);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case ie:return ce.key===at?G(le,J,ce,Me):null;case pe:return ce.key===at?he(le,J,ce,Me):null;case Q:return at=ce._init,Le(le,J,at(ce._payload),Me)}if(Ke(ce)||R(ce))return at!==null?null:Pe(le,J,ce,Me,null);vl(le,ce)}return null}function Qe(le,J,ce,Me,at){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return le=le.get(ce)||null,U(J,le,""+Me,at);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case ie:return le=le.get(Me.key===null?ce:Me.key)||null,G(J,le,Me,at);case pe:return le=le.get(Me.key===null?ce:Me.key)||null,he(J,le,Me,at);case Q:var pt=Me._init;return Qe(le,J,ce,pt(Me._payload),at)}if(Ke(Me)||R(Me))return le=le.get(ce)||null,Pe(J,le,Me,at,null);vl(J,Me)}return null}function rt(le,J,ce,Me){for(var at=null,pt=null,ht=J,yt=J=0,ir=null;ht!==null&&yt<ce.length;yt++){ht.index>yt?(ir=ht,ht=null):ir=ht.sibling;var Ht=Le(le,ht,ce[yt],Me);if(Ht===null){ht===null&&(ht=ir);break}t&&ht&&Ht.alternate===null&&r(le,ht),J=g(Ht,J,yt),pt===null?at=Ht:pt.sibling=Ht,pt=Ht,ht=ir}if(yt===ce.length)return a(le,ht),tn&&Uo(le,yt),at;if(ht===null){for(;yt<ce.length;yt++)ht=Ae(le,ce[yt],Me),ht!==null&&(J=g(ht,J,yt),pt===null?at=ht:pt.sibling=ht,pt=ht);return tn&&Uo(le,yt),at}for(ht=l(le,ht);yt<ce.length;yt++)ir=Qe(ht,le,yt,ce[yt],Me),ir!==null&&(t&&ir.alternate!==null&&ht.delete(ir.key===null?yt:ir.key),J=g(ir,J,yt),pt===null?at=ir:pt.sibling=ir,pt=ir);return t&&ht.forEach(function(Xs){return r(le,Xs)}),tn&&Uo(le,yt),at}function it(le,J,ce,Me){var at=R(ce);if(typeof at!="function")throw Error(p(150));if(ce=at.call(ce),ce==null)throw Error(p(151));for(var pt=at=null,ht=J,yt=J=0,ir=null,Ht=ce.next();ht!==null&&!Ht.done;yt++,Ht=ce.next()){ht.index>yt?(ir=ht,ht=null):ir=ht.sibling;var Xs=Le(le,ht,Ht.value,Me);if(Xs===null){ht===null&&(ht=ir);break}t&&ht&&Xs.alternate===null&&r(le,ht),J=g(Xs,J,yt),pt===null?at=Xs:pt.sibling=Xs,pt=Xs,ht=ir}if(Ht.done)return a(le,ht),tn&&Uo(le,yt),at;if(ht===null){for(;!Ht.done;yt++,Ht=ce.next())Ht=Ae(le,Ht.value,Me),Ht!==null&&(J=g(Ht,J,yt),pt===null?at=Ht:pt.sibling=Ht,pt=Ht);return tn&&Uo(le,yt),at}for(ht=l(le,ht);!Ht.done;yt++,Ht=ce.next())Ht=Qe(ht,le,yt,Ht.value,Me),Ht!==null&&(t&&Ht.alternate!==null&&ht.delete(Ht.key===null?yt:Ht.key),J=g(Ht,J,yt),pt===null?at=Ht:pt.sibling=Ht,pt=Ht);return t&&ht.forEach(function(jm){return r(le,jm)}),tn&&Uo(le,yt),at}function qn(le,J,ce,Me){if(typeof ce=="object"&&ce!==null&&ce.type===re&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case ie:e:{for(var at=ce.key,pt=J;pt!==null;){if(pt.key===at){if(at=ce.type,at===re){if(pt.tag===7){a(le,pt.sibling),J=f(pt,ce.props.children),J.return=le,le=J;break e}}else if(pt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&pu(at)===pt.type){a(le,pt.sibling),J=f(pt,ce.props),J.ref=Ta(le,pt,ce),J.return=le,le=J;break e}a(le,pt);break}else r(le,pt);pt=pt.sibling}ce.type===re?(J=Ua(ce.props.children,le.mode,Me,ce.key),J.return=le,le=J):(Me=Gc(ce.type,ce.key,ce.props,null,le.mode,Me),Me.ref=Ta(le,J,ce),Me.return=le,le=Me)}return N(le);case pe:e:{for(pt=ce.key;J!==null;){if(J.key===pt)if(J.tag===4&&J.stateNode.containerInfo===ce.containerInfo&&J.stateNode.implementation===ce.implementation){a(le,J.sibling),J=f(J,ce.children||[]),J.return=le,le=J;break e}else{a(le,J);break}else r(le,J);J=J.sibling}J=op(ce,le.mode,Me),J.return=le,le=J}return N(le);case Q:return pt=ce._init,qn(le,J,pt(ce._payload),Me)}if(Ke(ce))return rt(le,J,ce,Me);if(R(ce))return it(le,J,ce,Me);vl(le,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,J!==null&&J.tag===6?(a(le,J.sibling),J=f(J,ce),J.return=le,le=J):(a(le,J),J=ip(ce,le.mode,Me),J.return=le,le=J),N(le)):a(le,J)}return qn}var wo=Ko(!0),Na=Ko(!1),Ea=ci(null),As=null,$o=null,hu=null;function xl(){hu=$o=As=null}function Wn(t){var r=Ea.current;en(Ea),t._currentValue=r}function Rs(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function Go(t,r){As=t,hu=$o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Jn=!0),t.firstContext=null)}function Dr(t){var r=t._currentValue;if(hu!==t)if(t={context:t,memoizedValue:r,next:null},$o===null){if(As===null)throw Error(p(308));$o=t,As.dependencies={lanes:0,firstContext:t}}else $o=$o.next=t;return r}var ko=null;function So(t){ko===null?ko=[t]:ko.push(t)}function La(t,r,a,l){var f=r.interleaved;return f===null?(a.next=a,So(r)):(a.next=f.next,f.next=a),r.interleaved=a,Ei(t,l)}function Ei(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function bl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yo(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function pi(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ct&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,Ei(t,a)}return f=l.interleaved,f===null?(r.next=r,So(l)):(r.next=f.next,f.next=r),l.interleaved=r,Ei(t,a)}function ja(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,oo(t,a)}}function Is(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var N={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=N:g=g.next=N,a=a.next}while(a!==null);g===null?f=g=r:g=g.next=r}else f=g=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function wl(t,r,a,l){var f=t.updateQueue;Qi=!1;var g=f.firstBaseUpdate,N=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var G=U,he=G.next;G.next=null,N===null?g=he:N.next=he,N=G;var Pe=t.alternate;Pe!==null&&(Pe=Pe.updateQueue,U=Pe.lastBaseUpdate,U!==N&&(U===null?Pe.firstBaseUpdate=he:U.next=he,Pe.lastBaseUpdate=G))}if(g!==null){var Ae=f.baseState;N=0,Pe=he=G=null,U=g;do{var Le=U.lane,Qe=U.eventTime;if((l&Le)===Le){Pe!==null&&(Pe=Pe.next={eventTime:Qe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var rt=t,it=U;switch(Le=r,Qe=a,it.tag){case 1:if(rt=it.payload,typeof rt=="function"){Ae=rt.call(Qe,Ae,Le);break e}Ae=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=it.payload,Le=typeof rt=="function"?rt.call(Qe,Ae,Le):rt,Le==null)break e;Ae=Y({},Ae,Le);break e;case 2:Qi=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Le=f.effects,Le===null?f.effects=[U]:Le.push(U))}else Qe={eventTime:Qe,lane:Le,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Pe===null?(he=Pe=Qe,G=Ae):Pe=Pe.next=Qe,N|=Le;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Le=U,U=Le.next,Le.next=null,f.lastBaseUpdate=Le,f.shared.pending=null}}while(!0);if(Pe===null&&(G=Ae),f.baseState=G,f.firstBaseUpdate=he,f.lastBaseUpdate=Pe,r=f.shared.interleaved,r!==null){f=r;do N|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);wr|=N,t.lanes=N,t.memoizedState=Ae}}function Vo(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(p(191,f));f.call(l)}}}var Os={},hi=ci(Os),Ms=ci(Os),Zi=ci(Os);function fi(t){if(t===Os)throw Error(p(174));return t}function Xo(t,r){switch(Vt(Zi,r),Vt(Ms,t),Vt(hi,Os),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ot(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ot(r,t)}en(hi),Vt(hi,r)}function ji(){en(hi),en(Ms),en(Zi)}function fu(t){fi(Zi.current);var r=fi(hi.current),a=ot(r,t.type);r!==a&&(Vt(Ms,t),Vt(hi,a))}function mu(t){Ms.current===t&&(en(hi),en(Ms))}var sn=ci(0);function mi(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var _o=[];function Qo(){for(var t=0;t<_o.length;t++)_o[t]._workInProgressVersionPrimary=null;_o.length=0}var kl=K.ReactCurrentDispatcher,Sl=K.ReactCurrentBatchConfig,Zo=0,dn=null,Hn=null,It=null,Pa=!1,Aa=!1,Ra=0,$d=0;function Zn(){throw Error(p(321))}function _l(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Cn(t[a],r[a]))return!1;return!0}function Cl(t,r,a,l,f,g){if(Zo=g,dn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,kl.current=t===null||t.memoizedState===null?Yd:Nu,t=a(l,f),Aa){g=0;do{if(Aa=!1,Ra=0,25<=g)throw Error(p(301));g+=1,It=Hn=null,r.updateQueue=null,kl.current=Oa,t=a(l,f)}while(Aa)}if(kl.current=Ia,r=Hn!==null&&Hn.next!==null,Zo=0,It=Hn=dn=null,Pa=!1,r)throw Error(p(300));return t}function gu(){var t=Ra!==0;return Ra=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?dn.memoizedState=It=t:It=It.next=t,It}function Vr(){if(Hn===null){var t=dn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var r=It===null?dn.memoizedState:It.next;if(r!==null)It=r,Hn=t;else{if(t===null)throw Error(p(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},It===null?dn.memoizedState=It=t:It=It.next=t}return It}function Xr(t,r){return typeof r=="function"?r(t):r}function Jo(t){var r=Vr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var l=Hn,f=l.baseQueue,g=a.pending;if(g!==null){if(f!==null){var N=f.next;f.next=g.next,g.next=N}l.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,l=l.baseState;var U=N=null,G=null,he=g;do{var Pe=he.lane;if((Zo&Pe)===Pe)G!==null&&(G=G.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),l=he.hasEagerState?he.eagerState:t(l,he.action);else{var Ae={lane:Pe,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};G===null?(U=G=Ae,N=l):G=G.next=Ae,dn.lanes|=Pe,wr|=Pe}he=he.next}while(he!==null&&he!==g);G===null?N=l:G.next=U,Cn(l,r.memoizedState)||(Jn=!0),r.memoizedState=l,r.baseState=N,r.baseQueue=G,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do g=f.lane,dn.lanes|=g,wr|=g,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Ds(t){var r=Vr(),a=r.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,g=r.memoizedState;if(f!==null){a.pending=null;var N=f=f.next;do g=t(g,N.action),N=N.next;while(N!==f);Cn(g,r.memoizedState)||(Jn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,l]}function zs(){}function Ai(t,r){var a=dn,l=Vr(),f=r(),g=!Cn(l.memoizedState,f);if(g&&(l.memoizedState=f,Jn=!0),l=l.queue,bu(es.bind(null,a,l,t),[t]),l.getSnapshot!==r||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Co(9,Cc.bind(null,a,l,f,r),void 0,null),Dt===null)throw Error(p(349));(Zo&30)!==0||_c(a,r,f)}return f}function _c(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=dn.updateQueue,r===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Cc(t,r,a,l){r.value=a,r.getSnapshot=l,yu(r)&&vu(t)}function es(t,r,a){return a(function(){yu(r)&&vu(t)})}function yu(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Cn(t,a)}catch{return!0}}function vu(t){var r=Ei(t,1);r!==null&&eo(r,t,1,-1)}function xu(t){var r=Pi();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=_u.bind(null,dn,t),[r.memoizedState,t]}function Co(t,r,a,l){return t={tag:t,create:r,destroy:a,deps:l,next:null},r=dn.updateQueue,r===null?(r={lastEffect:null,stores:null},dn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t)),t}function ts(){return Vr().memoizedState}function Fs(t,r,a,l){var f=Pi();dn.flags|=t,f.memoizedState=Co(1|r,a,void 0,l===void 0?null:l)}function Ws(t,r,a,l){var f=Vr();l=l===void 0?null:l;var g=void 0;if(Hn!==null){var N=Hn.memoizedState;if(g=N.destroy,l!==null&&_l(l,N.deps)){f.memoizedState=Co(r,a,g,l);return}}dn.flags|=t,f.memoizedState=Co(1|r,a,g,l)}function Tl(t,r){return Fs(8390656,8,t,r)}function bu(t,r){return Ws(2048,8,t,r)}function Hs(t,r){return Ws(4,2,t,r)}function wu(t,r){return Ws(4,4,t,r)}function Tc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function ku(t,r,a){return a=a!=null?a.concat([t]):null,Ws(4,4,Tc.bind(null,r,t),a)}function Bs(){}function Nc(t,r){var a=Vr();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&_l(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Ec(t,r){var a=Vr();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&_l(r,l[1])?l[0]:(t=t(),a.memoizedState=[t,r],t)}function Us(t,r,a){return(Zo&21)===0?(t.baseState&&(t.baseState=!1,Jn=!0),t.memoizedState=a):(Cn(a,r)||(a=ta(),dn.lanes|=a,wr|=a,t.baseState=!0),r)}function Lc(t,r){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var l=Sl.transition;Sl.transition={};try{t(!1),r()}finally{Nt=a,Sl.transition=l}}function Su(){return Vr().memoizedState}function Gd(t,r,a){var l=Gs(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(t))jc(r,a);else if(a=La(t,r,a,l),a!==null){var f=zr();eo(a,t,l,f),Tu(a,r,l)}}function _u(t,r,a){var l=Gs(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(t))jc(r,f);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var N=r.lastRenderedState,U=g(N,a);if(f.hasEagerState=!0,f.eagerState=U,Cn(U,N)){var G=r.interleaved;G===null?(f.next=f,So(r)):(f.next=G.next,G.next=f),r.interleaved=f;return}}catch{}finally{}a=La(t,r,f,l),a!==null&&(f=zr(),eo(a,t,l,f),Tu(a,r,l))}}function Cu(t){var r=t.alternate;return t===dn||r!==null&&r===dn}function jc(t,r){Aa=Pa=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Tu(t,r,a){if((a&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,oo(t,a)}}var Ia={readContext:Dr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},Yd={readContext:Dr,useCallback:function(t,r){return Pi().memoizedState=[t,r===void 0?null:r],t},useContext:Dr,useEffect:Tl,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Fs(4194308,4,Tc.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Fs(4194308,4,t,r)},useInsertionEffect:function(t,r){return Fs(4,2,t,r)},useMemo:function(t,r){var a=Pi();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var l=Pi();return r=a!==void 0?a(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=Gd.bind(null,dn,t),[l.memoizedState,t]},useRef:function(t){var r=Pi();return t={current:t},r.memoizedState=t},useState:xu,useDebugValue:Bs,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=xu(!1),r=t[0];return t=Lc.bind(null,t[1]),Pi().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var l=dn,f=Pi();if(tn){if(a===void 0)throw Error(p(407));a=a()}else{if(a=r(),Dt===null)throw Error(p(349));(Zo&30)!==0||_c(l,r,a)}f.memoizedState=a;var g={value:a,getSnapshot:r};return f.queue=g,Tl(es.bind(null,l,g,t),[t]),l.flags|=2048,Co(9,Cc.bind(null,l,g,a,r),void 0,null),a},useId:function(){var t=Pi(),r=Dt.identifierPrefix;if(tn){var a=Ni,l=di;a=(l&~(1<<32-fe(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ra++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=$d++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Nu={readContext:Dr,useCallback:Nc,useContext:Dr,useEffect:bu,useImperativeHandle:ku,useInsertionEffect:Hs,useLayoutEffect:wu,useMemo:Ec,useReducer:Jo,useRef:ts,useState:function(){return Jo(Xr)},useDebugValue:Bs,useDeferredValue:function(t){var r=Vr();return Us(r,Hn.memoizedState,t)},useTransition:function(){var t=Jo(Xr)[0],r=Vr().memoizedState;return[t,r]},useMutableSource:zs,useSyncExternalStore:Ai,useId:Su,unstable_isNewReconciler:!1},Oa={readContext:Dr,useCallback:Nc,useContext:Dr,useEffect:bu,useImperativeHandle:ku,useInsertionEffect:Hs,useLayoutEffect:wu,useMemo:Ec,useReducer:Ds,useRef:ts,useState:function(){return Ds(Xr)},useDebugValue:Bs,useDeferredValue:function(t){var r=Vr();return Hn===null?r.memoizedState=t:Us(r,Hn.memoizedState,t)},useTransition:function(){var t=Ds(Xr)[0],r=Vr().memoizedState;return[t,r]},useMutableSource:zs,useSyncExternalStore:Ai,useId:Su,unstable_isNewReconciler:!1};function gr(t,r){if(t&&t.defaultProps){r=Y({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Eu(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:Y({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ma={isMounted:function(t){return(t=t._reactInternals)?kn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var l=zr(),f=Gs(t),g=Li(l,f);g.payload=r,a!=null&&(g.callback=a),r=pi(t,g,f),r!==null&&(eo(r,t,f,l),ja(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=zr(),f=Gs(t),g=Li(l,f);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=pi(t,g,f),r!==null&&(eo(r,t,f,l),ja(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=zr(),l=Gs(t),f=Li(a,l);f.tag=2,r!=null&&(f.callback=r),r=pi(t,f,l),r!==null&&(eo(r,t,l,a),ja(r,t,l))}};function Pc(t,r,a,l,f,g,N){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,N):r.prototype&&r.prototype.isPureReactComponent?!bs(a,l)||!bs(f,g):!0}function Ac(t,r,a){var l=!1,f=vo,g=r.contextType;return typeof g=="object"&&g!==null?g=Dr(g):(f=tr(r)?Xi:Gn.current,l=r.contextTypes,g=(l=l!=null)?Ts(t,f):vo),r=new r(a,g),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ma,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=g),r}function Rc(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&Ma.enqueueReplaceState(r,r.state,null)}function Lu(t,r,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},bl(t);var g=r.contextType;typeof g=="object"&&g!==null?f.context=Dr(g):(g=tr(r)?Xi:Gn.current,f.context=Ts(t,g)),f.state=t.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Eu(t,r,g,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Ma.enqueueReplaceState(f,f.state,null),wl(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,r){try{var a="",l=r;do a+=Ve(l),l=l.return;while(l);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:r,stack:f,digest:null}}function ju(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Pu(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Ic=typeof WeakMap=="function"?WeakMap:Map;function Nl(t,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var l=r.value;return a.callback=function(){Hc||(Hc=!0,Xd=l),Pu(t,r)},a}function Au(t,r,a){a=Li(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;a.payload=function(){return l(f)},a.callback=function(){Pu(t,r)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Pu(t,r),typeof l!="function"&&(Ks===null?Ks=new Set([this]):Ks.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})}),a}function Oc(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ic;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(f.add(a),t=xm.bind(null,t,r,a),r.then(t,t))}function Ru(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function rs(t,r,a,l,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,pi(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Mc=K.ReactCurrentOwner,Jn=!1;function yr(t,r,a,l){r.child=t===null?Na(r,null,a,l):wo(r,t.child,a,l)}function Dc(t,r,a,l,f){a=a.render;var g=r.ref;return Go(r,f),l=Cl(t,r,a,l,g,f),a=gu(),t!==null&&!Jn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(tn&&a&&qo(r),r.flags|=1,yr(t,r,l,f),r.child)}function zc(t,r,a,l,f){if(t===null){var g=a.type;return typeof g=="function"&&!rp(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,Xt(t,r,g,l,f)):(t=Gc(a.type,null,l,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(g=t.child,(t.lanes&f)===0){var N=g.memoizedProps;if(a=a.compare,a=a!==null?a:bs,a(N,l)&&t.ref===r.ref)return Pr(t,r,f)}return r.flags|=1,t=Vs(g,l),t.ref=r.ref,t.return=r,r.child=t}function Xt(t,r,a,l,f){if(t!==null){var g=t.memoizedProps;if(bs(g,l)&&t.ref===r.ref)if(Jn=!1,r.pendingProps=l=g,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Jn=!0);else return r.lanes=t.lanes,Pr(t,r,f)}return is(t,r,a,l,f)}function Fc(t,r,a){var l=r.pendingProps,f=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(br,Bt),Bt|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Vt(br,Bt),Bt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:a,Vt(br,Bt),Bt|=l}else g!==null?(l=g.baseLanes|a,r.memoizedState=null):l=a,Vt(br,Bt),Bt|=l;return yr(t,r,f,a),r.child}function El(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function is(t,r,a,l,f){var g=tr(a)?Xi:Gn.current;return g=Ts(r,g),Go(r,f),a=Cl(t,r,a,l,g,f),l=gu(),t!==null&&!Jn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(tn&&l&&qo(r),r.flags|=1,yr(t,r,a,f),r.child)}function Qr(t,r,a,l,f){if(tr(a)){var g=!0;Es(r)}else g=!1;if(Go(r,f),r.stateNode===null)Ol(t,r),Ac(r,a,l),Lu(r,a,l,f),l=!0;else if(t===null){var N=r.stateNode,U=r.memoizedProps;N.props=U;var G=N.context,he=a.contextType;typeof he=="object"&&he!==null?he=Dr(he):(he=tr(a)?Xi:Gn.current,he=Ts(r,he));var Pe=a.getDerivedStateFromProps,Ae=typeof Pe=="function"||typeof N.getSnapshotBeforeUpdate=="function";Ae||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(U!==l||G!==he)&&Rc(r,N,l,he),Qi=!1;var Le=r.memoizedState;N.state=Le,wl(r,l,N,f),G=r.memoizedState,U!==l||Le!==G||fr.current||Qi?(typeof Pe=="function"&&(Eu(r,a,Pe,l),G=r.memoizedState),(U=Qi||Pc(r,a,U,l,Le,G,he))?(Ae||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(r.flags|=4194308)):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=G),N.props=l,N.state=G,N.context=he,l=U):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{N=r.stateNode,Yo(t,r),U=r.memoizedProps,he=r.type===r.elementType?U:gr(r.type,U),N.props=he,Ae=r.pendingProps,Le=N.context,G=a.contextType,typeof G=="object"&&G!==null?G=Dr(G):(G=tr(a)?Xi:Gn.current,G=Ts(r,G));var Qe=a.getDerivedStateFromProps;(Pe=typeof Qe=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(U!==Ae||Le!==G)&&Rc(r,N,l,G),Qi=!1,Le=r.memoizedState,N.state=Le,wl(r,l,N,f);var rt=r.memoizedState;U!==Ae||Le!==rt||fr.current||Qi?(typeof Qe=="function"&&(Eu(r,a,Qe,l),rt=r.memoizedState),(he=Qi||Pc(r,a,he,l,Le,rt,G)||!1)?(Pe||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(l,rt,G),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(l,rt,G)),typeof N.componentDidUpdate=="function"&&(r.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof N.componentDidUpdate!="function"||U===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=rt),N.props=l,N.state=rt,N.context=G,l=he):(typeof N.componentDidUpdate!="function"||U===t.memoizedProps&&Le===t.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Le===t.memoizedState||(r.flags|=1024),l=!1)}return qs(t,r,a,l,g,f)}function qs(t,r,a,l,f,g){El(t,r);var N=(r.flags&128)!==0;if(!l&&!N)return f&&du(r,a,!1),Pr(t,r,g);l=r.stateNode,Mc.current=r;var U=N&&typeof a.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&N?(r.child=wo(r,t.child,null,g),r.child=wo(r,null,U,g)):yr(t,r,U,g),r.memoizedState=l.state,f&&du(r,a,!0),r.child}function Ll(t){var r=t.stateNode;r.pendingContext?uu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&uu(t,r.context,!1),Xo(t,r.containerInfo)}function Iu(t,r,a,l,f){return js(),Ps(f),r.flags|=256,yr(t,r,a,l),r.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Pl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Al(t,r,a){var l=r.pendingProps,f=sn.current,g=!1,N=(r.flags&128)!==0,U;if((U=N)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(g=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(sn,f&1),t===null)return yl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(N=l.children,t=l.fallback,g?(l=r.mode,g=r.child,N={mode:"hidden",children:N},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=N):g=Yc(N,l,0,null),t=Ua(t,l,a,null),g.return=r,t.return=r,g.sibling=t,r.child=g,r.child.memoizedState=Pl(a),r.memoizedState=jl,t):Rl(r,N));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return Ou(t,r,N,l,U,f,a);if(g){g=l.fallback,N=r.mode,f=t.child,U=f.sibling;var G={mode:"hidden",children:l.children};return(N&1)===0&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=G,r.deletions=null):(l=Vs(f,G),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?g=Vs(U,g):(g=Ua(g,N,a,null),g.flags|=2),g.return=r,l.return=r,l.sibling=g,r.child=l,l=g,g=r.child,N=t.child.memoizedState,N=N===null?Pl(a):{baseLanes:N.baseLanes|a,cachePool:null,transitions:N.transitions},g.memoizedState=N,g.childLanes=t.childLanes&~a,r.memoizedState=jl,l}return g=t.child,t=g.sibling,l=Vs(g,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=a),l.return=r,l.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=l,r.memoizedState=null,l}function Rl(t,r){return r=Yc({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Il(t,r,a,l){return l!==null&&Ps(l),wo(r,t.child,null,a),t=Rl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ou(t,r,a,l,f,g,N){if(a)return r.flags&256?(r.flags&=-257,l=ju(Error(p(422))),Il(t,r,N,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(g=l.fallback,f=r.mode,l=Yc({mode:"visible",children:l.children},f,0,null),g=Ua(g,f,N,null),g.flags|=2,l.return=r,g.return=r,l.sibling=g,r.child=l,(r.mode&1)!==0&&wo(r,t.child,null,N),r.child.memoizedState=Pl(N),r.memoizedState=jl,g);if((r.mode&1)===0)return Il(t,r,N,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,g=Error(p(419)),l=ju(g,l,void 0),Il(t,r,N,l)}if(U=(N&t.childLanes)!==0,Jn||U){if(l=Dt,l!==null){switch(N&-N){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|N))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ei(t,f),eo(l,t,f,-1))}return np(),l=ju(Error(p(421))),Il(t,r,N,l)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=bm.bind(null,t),f._reactRetry=r,null):(t=g.treeContext,Pn=go(f.nextSibling),mr=r,tn=!0,Yr=null,t!==null&&(zn[Fn++]=di,zn[Fn++]=Ni,zn[Fn++]=bo,di=t.id,Ni=t.overflow,bo=r),r=Rl(r,l.children),r.flags|=4096,r)}function Mu(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Rs(t.return,r,a)}function Ot(t,r,a,l,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=f)}function Du(t,r,a){var l=r.pendingProps,f=l.revealOrder,g=l.tail;if(yr(t,r,l.children,a),l=sn.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mu(t,a,r);else if(t.tag===19)Mu(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Vt(sn,l),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&mi(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),Ot(r,!1,f,a,g);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&mi(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Ot(r,!0,a,null,g);break;case"together":Ot(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ol(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Pr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),wr|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(p(153));if(r.child!==null){for(t=r.child,a=Vs(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Vs(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Vd(t,r,a){switch(r.tag){case 3:Ll(r),js();break;case 5:fu(r);break;case 1:tr(r.type)&&Es(r);break;case 4:Xo(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;Vt(Ea,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Vt(sn,sn.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Al(t,r,a):(Vt(sn,sn.current&1),t=Pr(t,r,a),t!==null?t.sibling:null);Vt(sn,sn.current&1);break;case 19:if(l=(a&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Du(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(sn,sn.current),l)break;return null;case 22:case 23:return r.lanes=0,Fc(t,r,a)}return Pr(t,r,a)}var Da,zu,pn,Wc;Da=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zu=function(){},pn=function(t,r,a,l){var f=t.memoizedProps;if(f!==l){t=r.stateNode,fi(hi.current);var g=null;switch(a){case"input":f=$t(t,f),l=$t(t,l),g=[];break;case"select":f=Y({},f,{value:void 0}),l=Y({},l,{value:void 0}),g=[];break;case"textarea":f=se(t,f),l=se(t,l),g=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=mo)}yi(a,l);var N;a=null;for(he in f)if(!l.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var U=f[he];for(N in U)U.hasOwnProperty(N)&&(a||(a={}),a[N]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(x.hasOwnProperty(he)?g||(g=[]):(g=g||[]).push(he,null));for(he in l){var G=l[he];if(U=f!=null?f[he]:void 0,l.hasOwnProperty(he)&&G!==U&&(G!=null||U!=null))if(he==="style")if(U){for(N in U)!U.hasOwnProperty(N)||G&&G.hasOwnProperty(N)||(a||(a={}),a[N]="");for(N in G)G.hasOwnProperty(N)&&U[N]!==G[N]&&(a||(a={}),a[N]=G[N])}else a||(g||(g=[]),g.push(he,a)),a=G;else he==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(g=g||[]).push(he,G)):he==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(he,""+G):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(x.hasOwnProperty(he)?(G!=null&&he==="onScroll"&&Wt("scroll",t),g||U===G||(g=[])):(g=g||[]).push(he,G))}a&&(g=g||[]).push("style",a);var he=g;(r.updateQueue=he)&&(r.flags|=4)}},Wc=function(t,r,a,l){a!==l&&(r.flags|=4)};function za(t,r){if(!tn)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nr(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Ml(t,r,a){var l=r.pendingProps;switch(gl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return tr(r.type)&&Ns(),nr(r),null;case 3:return l=r.stateNode,ji(),en(fr),en(Gn),Qo(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ca(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Yr!==null&&(Jd(Yr),Yr=null))),zu(t,r),nr(r),null;case 5:mu(r);var f=fi(Zi.current);if(a=r.type,t!==null&&r.stateNode!=null)pn(t,r,a,l,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(p(166));return nr(r),null}if(t=fi(hi.current),Ca(r)){l=r.stateNode,a=r.type;var g=r.memoizedProps;switch(l[Ci]=r,l[ka]=g,t=(r.mode&1)!==0,a){case"dialog":Wt("cancel",l),Wt("close",l);break;case"iframe":case"object":case"embed":Wt("load",l);break;case"video":case"audio":for(f=0;f<Do.length;f++)Wt(Do[f],l);break;case"source":Wt("error",l);break;case"img":case"image":case"link":Wt("error",l),Wt("load",l);break;case"details":Wt("toggle",l);break;case"input":fn(l,g),Wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Wt("invalid",l);break;case"textarea":Ce(l,g),Wt("invalid",l)}yi(a,g),f=null;for(var N in g)if(g.hasOwnProperty(N)){var U=g[N];N==="children"?typeof U=="string"?l.textContent!==U&&(g.suppressHydrationWarning!==!0&&ba(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&ba(l.textContent,U,t),f=["children",""+U]):x.hasOwnProperty(N)&&U!=null&&N==="onScroll"&&Wt("scroll",l)}switch(a){case"input":Ge(l),lt(l,g,!0);break;case"textarea":Ge(l),xt(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=mo)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{N=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$e(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=N.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=N.createElement(a,{is:l.is}):(t=N.createElement(a),a==="select"&&(N=t,l.multiple?N.multiple=!0:l.size&&(N.size=l.size))):t=N.createElementNS(t,a),t[Ci]=r,t[ka]=l,Da(t,r,!1,!1),r.stateNode=t;e:{switch(N=gt(a,l),a){case"dialog":Wt("cancel",t),Wt("close",t),f=l;break;case"iframe":case"object":case"embed":Wt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Do.length;f++)Wt(Do[f],t);f=l;break;case"source":Wt("error",t),f=l;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=l;break;case"details":Wt("toggle",t),f=l;break;case"input":fn(t,l),f=$t(t,l),Wt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=Y({},l,{value:void 0}),Wt("invalid",t);break;case"textarea":Ce(t,l),f=se(t,l),Wt("invalid",t);break;default:f=l}yi(a,f),U=f;for(g in U)if(U.hasOwnProperty(g)){var G=U[g];g==="style"?Wr(t,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&mt(t,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&dt(t,G):typeof G=="number"&&dt(t,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(x.hasOwnProperty(g)?G!=null&&g==="onScroll"&&Wt("scroll",t):G!=null&&q(t,g,G,N))}switch(a){case"input":Ge(t),lt(t,l,!1);break;case"textarea":Ge(t),xt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+He(l.value));break;case"select":t.multiple=!!l.multiple,g=l.value,g!=null?vt(t,!!l.multiple,g,!1):l.defaultValue!=null&&vt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=mo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(t&&r.stateNode!=null)Wc(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(p(166));if(a=fi(Zi.current),fi(hi.current),Ca(r)){if(l=r.stateNode,a=r.memoizedProps,l[Ci]=r,(g=l.nodeValue!==a)&&(t=mr,t!==null))switch(t.tag){case 3:ba(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(l.nodeValue,a,(t.mode&1)!==0)}g&&(r.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ci]=r,r.stateNode=l}return nr(r),null;case 13:if(en(sn),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tn&&Pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)kc(),js(),r.flags|=98560,g=!1;else if(g=Ca(r),l!==null&&l.dehydrated!==null){if(t===null){if(!g)throw Error(p(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(p(317));g[Ci]=r}else js(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nr(r),g=!1}else Yr!==null&&(Jd(Yr),Yr=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(sn.current&1)!==0?Tt===0&&(Tt=3):np())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return ji(),zu(t,r),t===null&&ho(r.stateNode.containerInfo),nr(r),null;case 10:return Wn(r.type._context),nr(r),null;case 17:return tr(r.type)&&Ns(),nr(r),null;case 19:if(en(sn),g=r.memoizedState,g===null)return nr(r),null;if(l=(r.flags&128)!==0,N=g.rendering,N===null)if(l)za(g,!1);else{if(Tt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(N=mi(t),N!==null){for(r.flags|=128,za(g,!1),l=N.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=a,a=r.child;a!==null;)g=a,t=l,g.flags&=14680066,N=g.alternate,N===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=N.childLanes,g.lanes=N.lanes,g.child=N.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=N.memoizedProps,g.memoizedState=N.memoizedState,g.updateQueue=N.updateQueue,g.type=N.type,t=N.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt(sn,sn.current&1|2),r.child}t=t.sibling}g.tail!==null&&jt()>Dl&&(r.flags|=128,l=!0,za(g,!1),r.lanes=4194304)}else{if(!l)if(t=mi(N),t!==null){if(r.flags|=128,l=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!N.alternate&&!tn)return nr(r),null}else 2*jt()-g.renderingStartTime>Dl&&a!==1073741824&&(r.flags|=128,l=!0,za(g,!1),r.lanes=4194304);g.isBackwards?(N.sibling=r.child,r.child=N):(a=g.last,a!==null?a.sibling=N:r.child=N,g.last=N)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=jt(),r.sibling=null,a=sn.current,Vt(sn,l?a&1|2:a&1),r):(nr(r),null);case 22:case 23:return tp(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(Bt&1073741824)!==0&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function e(t,r){switch(gl(r),r.tag){case 1:return tr(r.type)&&Ns(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ji(),en(fr),en(Gn),Qo(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return mu(r),null;case 13:if(en(sn),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(p(340));js()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return en(sn),null;case 4:return ji(),null;case 10:return Wn(r.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var n=!1,o=!1,i=typeof WeakSet=="function"?WeakSet:Set,s=null;function u(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Rn(t,r,l)}else a.current=null}function m(t,r,a){try{a()}catch(l){Rn(t,r,l)}}var y=!1;function b(t,r){if(pl=ut,t=ou(),pa(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var N=0,U=-1,G=-1,he=0,Pe=0,Ae=t,Le=null;t:for(;;){for(var Qe;Ae!==a||f!==0&&Ae.nodeType!==3||(U=N+f),Ae!==g||l!==0&&Ae.nodeType!==3||(G=N+l),Ae.nodeType===3&&(N+=Ae.nodeValue.length),(Qe=Ae.firstChild)!==null;)Le=Ae,Ae=Qe;for(;;){if(Ae===t)break t;if(Le===a&&++he===f&&(U=N),Le===g&&++Pe===l&&(G=N),(Qe=Ae.nextSibling)!==null)break;Ae=Le,Le=Ae.parentNode}Ae=Qe}a=U===-1||G===-1?null:{start:U,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gi={focusedElem:t,selectionRange:a},ut=!1,s=r;s!==null;)if(r=s,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,s=t;else for(;s!==null;){r=s;try{var rt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var it=rt.memoizedProps,qn=rt.memoizedState,le=r.stateNode,J=le.getSnapshotBeforeUpdate(r.elementType===r.type?it:gr(r.type,it),qn);le.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(Me){Rn(r,r.return,Me)}if(t=r.sibling,t!==null){t.return=r.return,s=t;break}s=r.return}return rt=y,y=!1,rt}function k(t,r,a){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var g=f.destroy;f.destroy=void 0,g!==void 0&&m(r,a,g)}f=f.next}while(f!==l)}}function O(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==r)}}function F(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function te(t){var r=t.alternate;r!==null&&(t.alternate=null,te(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ci],delete r[ka],delete r[lu],delete r[qd],delete r[Kd])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V(t){return t.tag===5||t.tag===3||t.tag===4}function me(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ve(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=mo));else if(l!==4&&(t=t.child,t!==null))for(ve(t,r,a),t=t.sibling;t!==null;)ve(t,r,a),t=t.sibling}function je(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(je(t,r,a),t=t.sibling;t!==null;)je(t,r,a),t=t.sibling}var Ee=null,Oe=!1;function Re(t,r,a){for(a=a.child;a!==null;)Ue(t,r,a),a=a.sibling}function Ue(t,r,a){if(S&&typeof S.onCommitFiberUnmount=="function")try{S.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 5:o||u(a,r);case 6:var l=Ee,f=Oe;Ee=null,Re(t,r,a),Ee=l,Oe=f,Ee!==null&&(Oe?(t=Ee,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ee.removeChild(a.stateNode));break;case 18:Ee!==null&&(Oe?(t=Ee,a=a.stateNode,t.nodeType===8?hl(t.parentNode,a):t.nodeType===1&&hl(t,a),be(t)):hl(Ee,a.stateNode));break;case 4:l=Ee,f=Oe,Ee=a.stateNode.containerInfo,Oe=!0,Re(t,r,a),Ee=l,Oe=f;break;case 0:case 11:case 14:case 15:if(!o&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var g=f,N=g.destroy;g=g.tag,N!==void 0&&((g&2)!==0||(g&4)!==0)&&m(a,r,N),f=f.next}while(f!==l)}Re(t,r,a);break;case 1:if(!o&&(u(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(U){Rn(a,r,U)}Re(t,r,a);break;case 21:Re(t,r,a);break;case 22:a.mode&1?(o=(l=o)||a.memoizedState!==null,Re(t,r,a),o=l):Re(t,r,a);break;default:Re(t,r,a)}}function st(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i),r.forEach(function(l){var f=wm.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function Ye(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var g=t,N=r,U=N;e:for(;U!==null;){switch(U.tag){case 5:Ee=U.stateNode,Oe=!1;break e;case 3:Ee=U.stateNode.containerInfo,Oe=!0;break e;case 4:Ee=U.stateNode.containerInfo,Oe=!0;break e}U=U.return}if(Ee===null)throw Error(p(160));Ue(g,N,f),Ee=null,Oe=!1;var G=f.alternate;G!==null&&(G.return=null),f.return=null}catch(he){Rn(f,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wt(r,t),r=r.sibling}function wt(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ye(r,t),Ct(t),l&4){try{k(3,t,t.return),O(3,t)}catch(it){Rn(t,t.return,it)}try{k(5,t,t.return)}catch(it){Rn(t,t.return,it)}}break;case 1:Ye(r,t),Ct(t),l&512&&a!==null&&u(a,a.return);break;case 5:if(Ye(r,t),Ct(t),l&512&&a!==null&&u(a,a.return),t.flags&32){var f=t.stateNode;try{dt(f,"")}catch(it){Rn(t,t.return,it)}}if(l&4&&(f=t.stateNode,f!=null)){var g=t.memoizedProps,N=a!==null?a.memoizedProps:g,U=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&et(f,g),gt(U,N);var he=gt(U,g);for(N=0;N<G.length;N+=2){var Pe=G[N],Ae=G[N+1];Pe==="style"?Wr(f,Ae):Pe==="dangerouslySetInnerHTML"?mt(f,Ae):Pe==="children"?dt(f,Ae):q(f,Pe,Ae,he)}switch(U){case"input":bt(f,g);break;case"textarea":ge(f,g);break;case"select":var Le=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Qe=g.value;Qe!=null?vt(f,!!g.multiple,Qe,!1):Le!==!!g.multiple&&(g.defaultValue!=null?vt(f,!!g.multiple,g.defaultValue,!0):vt(f,!!g.multiple,g.multiple?[]:"",!1))}f[ka]=g}catch(it){Rn(t,t.return,it)}}break;case 6:if(Ye(r,t),Ct(t),l&4){if(t.stateNode===null)throw Error(p(162));f=t.stateNode,g=t.memoizedProps;try{f.nodeValue=g}catch(it){Rn(t,t.return,it)}}break;case 3:if(Ye(r,t),Ct(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{be(r.containerInfo)}catch(it){Rn(t,t.return,it)}break;case 4:Ye(r,t),Ct(t);break;case 13:Ye(r,t),Ct(t),f=t.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Fa=jt())),l&4&&st(t);break;case 22:if(Pe=a!==null&&a.memoizedState!==null,t.mode&1?(o=(he=o)||Pe,Ye(r,t),o=he):Ye(r,t),Ct(t),l&8192){if(he=t.memoizedState!==null,(t.stateNode.isHidden=he)&&!Pe&&(t.mode&1)!==0)for(s=t,Pe=t.child;Pe!==null;){for(Ae=s=Pe;s!==null;){switch(Le=s,Qe=Le.child,Le.tag){case 0:case 11:case 14:case 15:k(4,Le,Le.return);break;case 1:u(Le,Le.return);var rt=Le.stateNode;if(typeof rt.componentWillUnmount=="function"){l=Le,a=Le.return;try{r=l,rt.props=r.memoizedProps,rt.state=r.memoizedState,rt.componentWillUnmount()}catch(it){Rn(l,a,it)}}break;case 5:u(Le,Le.return);break;case 22:if(Le.memoizedState!==null){rr(Ae);continue}}Qe!==null?(Qe.return=Le,s=Qe):rr(Ae)}Pe=Pe.sibling}e:for(Pe=null,Ae=t;;){if(Ae.tag===5){if(Pe===null){Pe=Ae;try{f=Ae.stateNode,he?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Ae.stateNode,G=Ae.memoizedProps.style,N=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=_r("display",N))}catch(it){Rn(t,t.return,it)}}}else if(Ae.tag===6){if(Pe===null)try{Ae.stateNode.nodeValue=he?"":Ae.memoizedProps}catch(it){Rn(t,t.return,it)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===t)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===t)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===t)break e;Pe===Ae&&(Pe=null),Ae=Ae.return}Pe===Ae&&(Pe=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Ye(r,t),Ct(t),l&4&&st(t);break;case 21:break;default:Ye(r,t),Ct(t)}}function Ct(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(V(a)){var l=a;break e}a=a.return}throw Error(p(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(dt(f,""),l.flags&=-33);var g=me(t);je(t,g,f);break;case 3:case 4:var N=l.stateNode.containerInfo,U=me(t);ve(t,U,N);break;default:throw Error(p(161))}}catch(G){Rn(t,t.return,G)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bn(t,r,a){s=t,nn(t)}function nn(t,r,a){for(var l=(t.mode&1)!==0;s!==null;){var f=s,g=f.child;if(f.tag===22&&l){var N=f.memoizedState!==null||n;if(!N){var U=f.alternate,G=U!==null&&U.memoizedState!==null||o;U=n;var he=o;if(n=N,(o=G)&&!he)for(s=f;s!==null;)N=s,G=N.child,N.tag===22&&N.memoizedState!==null?vn(f):G!==null?(G.return=N,s=G):vn(f);for(;g!==null;)s=g,nn(g),g=g.sibling;s=f,n=U,o=he}vr(t)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,s=g):vr(t)}}function vr(t){for(;s!==null;){var r=s;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:o||O(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!o)if(a===null)l.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:gr(r.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Vo(r,g,l);break;case 3:var N=r.updateQueue;if(N!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vo(r,N,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Pe=he.memoizedState;if(Pe!==null){var Ae=Pe.dehydrated;Ae!==null&&be(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}o||r.flags&512&&F(r)}catch(Le){Rn(r,r.return,Le)}}if(r===t){s=null;break}if(a=r.sibling,a!==null){a.return=r.return,s=a;break}s=r.return}}function rr(t){for(;s!==null;){var r=s;if(r===t){s=null;break}var a=r.sibling;if(a!==null){a.return=r.return,s=a;break}s=r.return}}function vn(t){for(;s!==null;){var r=s;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{O(4,r)}catch(G){Rn(r,a,G)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(G){Rn(r,f,G)}}var g=r.return;try{F(r)}catch(G){Rn(r,g,G)}break;case 5:var N=r.return;try{F(r)}catch(G){Rn(r,N,G)}}}catch(G){Rn(r,r.return,G)}if(r===t){s=null;break}var U=r.sibling;if(U!==null){U.return=r.return,s=U;break}s=r.return}}var xr=Math.ceil,Nn=K.ReactCurrentDispatcher,xn=K.ReactCurrentOwner,Mt=K.ReactCurrentBatchConfig,ct=0,Dt=null,rn=null,an=0,Bt=0,br=ci(0),Tt=0,os=null,wr=0,Ri=0,Ji=0,An=null,Un=null,Fa=0,Dl=1/0,ss=null,Hc=!1,Xd=null,Ks=null,Bc=!1,$s=null,Uc=0,Fu=0,Qd=null,qc=-1,Kc=0;function zr(){return(ct&6)!==0?jt():qc!==-1?qc:qc=jt()}function Gs(t){return(t.mode&1)===0?1:(ct&2)!==0&&an!==0?an&-an:Sc.transition!==null?(Kc===0&&(Kc=ta()),Kc):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:bi(t.type)),t)}function eo(t,r,a,l){if(50<Fu)throw Fu=0,Qd=null,Error(p(185));Kn(t,a,l),((ct&2)===0||t!==Dt)&&(t===Dt&&((ct&2)===0&&(Ri|=a),Tt===4&&Ys(t,an)),Zr(t,l),a===1&&ct===0&&(r.mode&1)===0&&(Dl=jt()+500,fl&&xo()))}function Zr(t,r){var a=t.callbackNode;ft(t,r);var l=si(t,t===Dt?an:0);if(l===0)a!==null&&Di(a),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(a!=null&&Di(a),r===1)t.tag===0?xc(ih.bind(null,t)):Ti(ih.bind(null,t)),yc(function(){(ct&6)===0&&xo()}),a=null;else{switch(Fi(l)){case 1:a=xi;break;case 4:a=Yt;break;case 16:a=Xe;break;case 536870912:a=cr;break;default:a=Xe}a=ph(a,rh.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function rh(t,r){if(qc=-1,Kc=0,(ct&6)!==0)throw Error(p(327));var a=t.callbackNode;if(zl()&&t.callbackNode!==a)return null;var l=si(t,t===Dt?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=$c(t,l);else{r=l;var f=ct;ct|=2;var g=sh();(Dt!==t||an!==r)&&(ss=null,Dl=jt()+500,Ha(t,r));do try{ym();break}catch(U){oh(t,U)}while(!0);xl(),Nn.current=g,ct=f,rn!==null?r=0:(Dt=null,an=0,r=Tt)}if(r!==0){if(r===2&&(f=fs(t),f!==0&&(l=f,r=Zd(t,f))),r===1)throw a=os,Ha(t,0),Ys(t,l),Zr(t,jt()),a;if(r===6)Ys(t,l);else{if(f=t.current.alternate,(l&30)===0&&!mm(f)&&(r=$c(t,l),r===2&&(g=fs(t),g!==0&&(l=g,r=Zd(t,g))),r===1))throw a=os,Ha(t,0),Ys(t,l),Zr(t,jt()),a;switch(t.finishedWork=f,t.finishedLanes=l,r){case 0:case 1:throw Error(p(345));case 2:Ba(t,Un,ss);break;case 3:if(Ys(t,l),(l&130023424)===l&&(r=Fa+500-jt(),10<r)){if(si(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){zr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Yi(Ba.bind(null,t,Un,ss),r);break}Ba(t,Un,ss);break;case 4:if(Ys(t,l),(l&4194240)===l)break;for(r=t.eventTimes,f=-1;0<l;){var N=31-fe(l);g=1<<N,N=r[N],N>f&&(f=N),l&=~g}if(l=f,l=jt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*xr(l/1960))-l,10<l){t.timeoutHandle=Yi(Ba.bind(null,t,Un,ss),l);break}Ba(t,Un,ss);break;case 5:Ba(t,Un,ss);break;default:throw Error(p(329))}}}return Zr(t,jt()),t.callbackNode===a?rh.bind(null,t):null}function Zd(t,r){var a=An;return t.current.memoizedState.isDehydrated&&(Ha(t,r).flags|=256),t=$c(t,r),t!==2&&(r=Un,Un=a,r!==null&&Jd(r)),t}function Jd(t){Un===null?Un=t:Un.push.apply(Un,t)}function mm(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],g=f.getSnapshot;f=f.value;try{if(!Cn(g(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ys(t,r){for(r&=~Ji,r&=~Ri,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-fe(r),l=1<<a;t[a]=-1,r&=~l}}function ih(t){if((ct&6)!==0)throw Error(p(327));zl();var r=si(t,0);if((r&1)===0)return Zr(t,jt()),null;var a=$c(t,r);if(t.tag!==0&&a===2){var l=fs(t);l!==0&&(r=l,a=Zd(t,l))}if(a===1)throw a=os,Ha(t,0),Ys(t,r),Zr(t,jt()),a;if(a===6)throw Error(p(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Ba(t,Un,ss),Zr(t,jt()),null}function ep(t,r){var a=ct;ct|=1;try{return t(r)}finally{ct=a,ct===0&&(Dl=jt()+500,fl&&xo())}}function Wa(t){$s!==null&&$s.tag===0&&(ct&6)===0&&zl();var r=ct;ct|=1;var a=Mt.transition,l=Nt;try{if(Mt.transition=null,Nt=1,t)return t()}finally{Nt=l,Mt.transition=a,ct=r,(ct&6)===0&&xo()}}function tp(){Bt=br.current,en(br)}function Ha(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,wa(a)),rn!==null)for(a=rn.return;a!==null;){var l=a;switch(gl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ns();break;case 3:ji(),en(fr),en(Gn),Qo();break;case 5:mu(l);break;case 4:ji();break;case 13:en(sn);break;case 19:en(sn);break;case 10:Wn(l.type._context);break;case 22:case 23:tp()}a=a.return}if(Dt=t,rn=t=Vs(t.current,null),an=Bt=r,Tt=0,os=null,Ji=Ri=wr=0,Un=An=null,ko!==null){for(r=0;r<ko.length;r++)if(a=ko[r],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,g=a.pending;if(g!==null){var N=g.next;g.next=f,l.next=N}a.pending=l}ko=null}return t}function oh(t,r){do{var a=rn;try{if(xl(),kl.current=Ia,Pa){for(var l=dn.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Pa=!1}if(Zo=0,It=Hn=dn=null,Aa=!1,Ra=0,xn.current=null,a===null||a.return===null){Tt=1,os=r,rn=null;break}e:{var g=t,N=a.return,U=a,G=r;if(r=an,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var he=G,Pe=U,Ae=Pe.tag;if((Pe.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Le=Pe.alternate;Le?(Pe.updateQueue=Le.updateQueue,Pe.memoizedState=Le.memoizedState,Pe.lanes=Le.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Qe=Ru(N);if(Qe!==null){Qe.flags&=-257,rs(Qe,N,U,g,r),Qe.mode&1&&Oc(g,he,r),r=Qe,G=he;var rt=r.updateQueue;if(rt===null){var it=new Set;it.add(G),r.updateQueue=it}else rt.add(G);break e}else{if((r&1)===0){Oc(g,he,r),np();break e}G=Error(p(426))}}else if(tn&&U.mode&1){var qn=Ru(N);if(qn!==null){(qn.flags&65536)===0&&(qn.flags|=256),rs(qn,N,U,g,r),Ps(ns(G,U));break e}}g=G=ns(G,U),Tt!==4&&(Tt=2),An===null?An=[g]:An.push(g),g=N;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var le=Nl(g,G,r);Is(g,le);break e;case 1:U=G;var J=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Ks===null||!Ks.has(ce)))){g.flags|=65536,r&=-r,g.lanes|=r;var Me=Au(g,U,r);Is(g,Me);break e}}g=g.return}while(g!==null)}lh(a)}catch(at){r=at,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function sh(){var t=Nn.current;return Nn.current=Ia,t===null?Ia:t}function np(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||(wr&268435455)===0&&(Ri&268435455)===0||Ys(Dt,an)}function $c(t,r){var a=ct;ct|=2;var l=sh();(Dt!==t||an!==r)&&(ss=null,Ha(t,r));do try{gm();break}catch(f){oh(t,f)}while(!0);if(xl(),ct=a,Nn.current=l,rn!==null)throw Error(p(261));return Dt=null,an=0,Tt}function gm(){for(;rn!==null;)ah(rn)}function ym(){for(;rn!==null&&!ii();)ah(rn)}function ah(t){var r=dh(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,r===null?lh(t):rn=r,xn.current=null}function lh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Ml(a,r,Bt),a!==null){rn=a;return}}else{if(a=e(a,r),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,rn=null;return}}if(r=r.sibling,r!==null){rn=r;return}rn=r=t}while(r!==null);Tt===0&&(Tt=5)}function Ba(t,r,a){var l=Nt,f=Mt.transition;try{Mt.transition=null,Nt=1,vm(t,r,a,l)}finally{Mt.transition=f,Nt=l}return null}function vm(t,r,a,l){do zl();while($s!==null);if((ct&6)!==0)throw Error(p(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(p(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(Po(t,g),t===Dt&&(rn=Dt=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bc||(Bc=!0,ph(Xe,function(){return zl(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Mt.transition,Mt.transition=null;var N=Nt;Nt=1;var U=ct;ct|=4,xn.current=null,b(t,a),wt(a,t),Wd(Gi),ut=!!pl,Gi=pl=null,t.current=a,Bn(a),vi(),ct=U,Nt=N,Mt.transition=g}else t.current=a;if(Bc&&(Bc=!1,$s=t,Uc=f),g=t.pendingLanes,g===0&&(Ks=null),z(a.stateNode),Zr(t,jt()),r!==null)for(l=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Hc)throw Hc=!1,t=Xd,Xd=null,t;return(Uc&1)!==0&&t.tag!==0&&zl(),g=t.pendingLanes,(g&1)!==0?t===Qd?Fu++:(Fu=0,Qd=t):Fu=0,xo(),null}function zl(){if($s!==null){var t=Fi(Uc),r=Mt.transition,a=Nt;try{if(Mt.transition=null,Nt=16>t?16:t,$s===null)var l=!1;else{if(t=$s,$s=null,Uc=0,(ct&6)!==0)throw Error(p(331));var f=ct;for(ct|=4,s=t.current;s!==null;){var g=s,N=g.child;if((s.flags&16)!==0){var U=g.deletions;if(U!==null){for(var G=0;G<U.length;G++){var he=U[G];for(s=he;s!==null;){var Pe=s;switch(Pe.tag){case 0:case 11:case 15:k(8,Pe,g)}var Ae=Pe.child;if(Ae!==null)Ae.return=Pe,s=Ae;else for(;s!==null;){Pe=s;var Le=Pe.sibling,Qe=Pe.return;if(te(Pe),Pe===he){s=null;break}if(Le!==null){Le.return=Qe,s=Le;break}s=Qe}}}var rt=g.alternate;if(rt!==null){var it=rt.child;if(it!==null){rt.child=null;do{var qn=it.sibling;it.sibling=null,it=qn}while(it!==null)}}s=g}}if((g.subtreeFlags&2064)!==0&&N!==null)N.return=g,s=N;else e:for(;s!==null;){if(g=s,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:k(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,s=le;break e}s=g.return}}var J=t.current;for(s=J;s!==null;){N=s;var ce=N.child;if((N.subtreeFlags&2064)!==0&&ce!==null)ce.return=N,s=ce;else e:for(N=J;s!==null;){if(U=s,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:O(9,U)}}catch(at){Rn(U,U.return,at)}if(U===N){s=null;break e}var Me=U.sibling;if(Me!==null){Me.return=U.return,s=Me;break e}s=U.return}}if(ct=f,xo(),S&&typeof S.onPostCommitFiberRoot=="function")try{S.onPostCommitFiberRoot(On,t)}catch{}l=!0}return l}finally{Nt=a,Mt.transition=r}}return!1}function uh(t,r,a){r=ns(a,r),r=Nl(t,r,1),t=pi(t,r,1),r=zr(),t!==null&&(Kn(t,1,r),Zr(t,r))}function Rn(t,r,a){if(t.tag===3)uh(t,t,a);else for(;r!==null;){if(r.tag===3){uh(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ks===null||!Ks.has(l))){t=ns(a,t),t=Au(r,t,1),r=pi(r,t,1),t=zr(),r!==null&&(Kn(r,1,t),Zr(r,t));break}}r=r.return}}function xm(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),r=zr(),t.pingedLanes|=t.suspendedLanes&a,Dt===t&&(an&a)===a&&(Tt===4||Tt===3&&(an&130023424)===an&&500>jt()-Fa?Ha(t,0):Ji|=a),Zr(t,r)}function ch(t,r){r===0&&((t.mode&1)===0?r=1:(r=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var a=zr();t=Ei(t,r),t!==null&&(Kn(t,r,a),Zr(t,a))}function bm(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),ch(t,a)}function wm(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(p(314))}l!==null&&l.delete(r),ch(t,a)}var dh;dh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||fr.current)Jn=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Jn=!1,Vd(t,r,a);Jn=(t.flags&131072)!==0}else Jn=!1,tn&&(r.flags&1048576)!==0&&ml(r,jr,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Ol(t,r),t=r.pendingProps;var f=Ts(r,Gn.current);Go(r,a),f=Cl(null,r,l,t,f,a);var g=gu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tr(l)?(g=!0,Es(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bl(r),f.updater=Ma,r.stateNode=f,f._reactInternals=r,Lu(r,l,t,a),r=qs(null,r,l,!0,g,a)):(r.tag=0,tn&&g&&qo(r),yr(null,r,f,a),r=r.child),r;case 16:l=r.elementType;e:{switch(Ol(t,r),t=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=Sm(l),t=gr(l,t),f){case 0:r=is(null,r,l,t,a);break e;case 1:r=Qr(null,r,l,t,a);break e;case 11:r=Dc(null,r,l,t,a);break e;case 14:r=zc(null,r,l,gr(l.type,t),a);break e}throw Error(p(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),is(t,r,l,f,a);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Qr(t,r,l,f,a);case 3:e:{if(Ll(r),t===null)throw Error(p(387));l=r.pendingProps,g=r.memoizedState,f=g.element,Yo(t,r),wl(r,l,null,a);var N=r.memoizedState;if(l=N.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=ns(Error(p(423)),r),r=Iu(t,r,l,a,f);break e}else if(l!==f){f=ns(Error(p(424)),r),r=Iu(t,r,l,a,f);break e}else for(Pn=go(r.stateNode.containerInfo.firstChild),mr=r,tn=!0,Yr=null,a=Na(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),l===f){r=Pr(t,r,a);break e}yr(t,r,l,a)}r=r.child}return r;case 5:return fu(r),t===null&&yl(r),l=r.type,f=r.pendingProps,g=t!==null?t.memoizedProps:null,N=f.children,Fo(l,f)?N=null:g!==null&&Fo(l,g)&&(r.flags|=32),El(t,r),yr(t,r,N,a),r.child;case 6:return t===null&&yl(r),null;case 13:return Al(t,r,a);case 4:return Xo(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=wo(r,null,l,a):yr(t,r,l,a),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Dc(t,r,l,f,a);case 7:return yr(t,r,r.pendingProps,a),r.child;case 8:return yr(t,r,r.pendingProps.children,a),r.child;case 12:return yr(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,g=r.memoizedProps,N=f.value,Vt(Ea,l._currentValue),l._currentValue=N,g!==null)if(Cn(g.value,N)){if(g.children===f.children&&!fr.current){r=Pr(t,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var U=g.dependencies;if(U!==null){N=g.child;for(var G=U.firstContext;G!==null;){if(G.context===l){if(g.tag===1){G=Li(-1,a&-a),G.tag=2;var he=g.updateQueue;if(he!==null){he=he.shared;var Pe=he.pending;Pe===null?G.next=G:(G.next=Pe.next,Pe.next=G),he.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),Rs(g.return,a,r),U.lanes|=a;break}G=G.next}}else if(g.tag===10)N=g.type===r.type?null:g.child;else if(g.tag===18){if(N=g.return,N===null)throw Error(p(341));N.lanes|=a,U=N.alternate,U!==null&&(U.lanes|=a),Rs(N,a,r),N=g.sibling}else N=g.child;if(N!==null)N.return=g;else for(N=g;N!==null;){if(N===r){N=null;break}if(g=N.sibling,g!==null){g.return=N.return,N=g;break}N=N.return}g=N}yr(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,Go(r,a),f=Dr(f),l=l(f),r.flags|=1,yr(t,r,l,a),r.child;case 14:return l=r.type,f=gr(l,r.pendingProps),f=gr(l.type,f),zc(t,r,l,f,a);case 15:return Xt(t,r,r.type,r.pendingProps,a);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:gr(l,f),Ol(t,r),r.tag=1,tr(l)?(t=!0,Es(r)):t=!1,Go(r,a),Ac(r,l,f),Lu(r,l,f,a),qs(null,r,l,!0,t,a);case 19:return Du(t,r,a);case 22:return Fc(t,r,a)}throw Error(p(156,r.tag))};function ph(t,r){return Er(t,r)}function km(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(t,r,a,l){return new km(t,r,a,l)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sm(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Te)return 11;if(t===T)return 14}return 2}function Vs(t,r){var a=t.alternate;return a===null?(a=Ii(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Gc(t,r,a,l,f,g){var N=2;if(l=t,typeof t=="function")rp(t)&&(N=1);else if(typeof t=="string")N=5;else e:switch(t){case re:return Ua(a.children,f,g,r);case we:N=8,f|=8;break;case Fe:return t=Ii(12,a,r,f|2),t.elementType=Fe,t.lanes=g,t;case ne:return t=Ii(13,a,r,f),t.elementType=ne,t.lanes=g,t;case ye:return t=Ii(19,a,r,f),t.elementType=ye,t.lanes=g,t;case B:return Yc(a,f,g,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _e:N=10;break e;case $:N=9;break e;case Te:N=11;break e;case T:N=14;break e;case Q:N=16,l=null;break e}throw Error(p(130,t==null?t:typeof t,""))}return r=Ii(N,a,r,f),r.elementType=t,r.type=l,r.lanes=g,r}function Ua(t,r,a,l){return t=Ii(7,t,l,r),t.lanes=a,t}function Yc(t,r,a,l){return t=Ii(22,t,l,r),t.elementType=B,t.lanes=a,t.stateNode={isHidden:!1},t}function ip(t,r,a){return t=Ii(6,t,null,r),t.lanes=a,t}function op(t,r,a){return r=Ii(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function _m(t,r,a,l,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function sp(t,r,a,l,f,g,N,U,G){return t=new _m(t,r,a,U,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Ii(3,null,null,r),t.current=g,g.stateNode=t,g.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(g),t}function Cm(t,r,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:l==null?null:""+l,children:t,containerInfo:r,implementation:a}}function hh(t){if(!t)return vo;t=t._reactInternals;e:{if(kn(t)!==t||t.tag!==1)throw Error(p(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(t.tag===1){var a=t.type;if(tr(a))return cu(t,a,r)}return r}function fh(t,r,a,l,f,g,N,U,G){return t=sp(a,l,!0,t,f,g,N,U,G),t.context=hh(null),a=t.current,l=zr(),f=Gs(a),g=Li(l,f),g.callback=r??null,pi(a,g,f),t.current.lanes=f,Kn(t,f,l),Zr(t,l),t}function Vc(t,r,a,l){var f=r.current,g=zr(),N=Gs(f);return a=hh(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(g,N),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=pi(f,r,N),t!==null&&(eo(t,f,N,g),ja(t,f,N)),N}function Xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function ap(t,r){mh(t,r),(t=t.alternate)&&mh(t,r)}function Tm(){return null}var gh=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}Qc.prototype.render=lp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(p(409));Vc(t,r,null,null)},Qc.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Wa(function(){Vc(null,t,null,null)}),r[Vi]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var r=na();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Or.length&&r!==0&&r<Or[a].priority;a++);Or.splice(a,0,t),a===0&&gs(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yh(){}function Nm(t,r,a,l,f){if(f){if(typeof l=="function"){var g=l;l=function(){var he=Xc(N);g.call(he)}}var N=fh(r,l,t,0,null,!1,!1,"",yh);return t._reactRootContainer=N,t[Vi]=N.current,ho(t.nodeType===8?t.parentNode:t),Wa(),N}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var he=Xc(G);U.call(he)}}var G=sp(t,0,!1,null,null,!1,!1,"",yh);return t._reactRootContainer=G,t[Vi]=G.current,ho(t.nodeType===8?t.parentNode:t),Wa(function(){Vc(r,G,a,l)}),G}function Jc(t,r,a,l,f){var g=a._reactRootContainer;if(g){var N=g;if(typeof f=="function"){var U=f;f=function(){var G=Xc(N);U.call(G)}}Vc(r,N,t,f)}else N=Nm(a,r,t,f,l);return Xc(N)}Kr=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Sn(r.pendingLanes);a!==0&&(oo(r,a|1),Zr(r,jt()),(ct&6)===0&&(Dl=jt()+500,xo()))}break;case 13:Wa(function(){var l=Ei(t,1);if(l!==null){var f=zr();eo(l,t,1,f)}}),ap(t,1)}},ai=function(t){if(t.tag===13){var r=Ei(t,134217728);if(r!==null){var a=zr();eo(r,t,134217728,a)}ap(t,134217728)}},dr=function(t){if(t.tag===13){var r=Gs(t),a=Ei(t,r);if(a!==null){var l=zr();eo(a,t,r,l)}ap(t,r)}},na=function(){return Nt},so=function(t,r){var a=Nt;try{return Nt=t,r()}finally{Nt=a}},Cr=function(t,r,a){switch(r){case"input":if(bt(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var f=yn(l);if(!f)throw Error(p(90));qt(l),bt(l,f)}}}break;case"textarea":ge(t,a);break;case"select":r=a.value,r!=null&&vt(t,!!a.multiple,r,!1)}},ar=ep,wn=Wa;var Em={usingClientEntryPoint:!1,Events:[cn,Tn,yn,En,ln,ep]},Wu={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lm={bundleType:Wu.bundleType,version:Wu.version,rendererPackageName:Wu.rendererPackageName,rendererConfig:Wu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nr(t),t===null?null:t.stateNode},findFiberByHostInstance:Wu.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ed.isDisabled&&ed.supportsFiber)try{On=ed.inject(Lm),S=ed}catch{}}return Jr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em,Jr.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(r))throw Error(p(200));return Cm(t,r,null,a)},Jr.createRoot=function(t,r){if(!up(t))throw Error(p(299));var a=!1,l="",f=gh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=sp(t,1,!1,null,null,a,!1,l,f),t[Vi]=r.current,ho(t.nodeType===8?t.parentNode:t),new lp(r)},Jr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=Nr(r),t=t===null?null:t.stateNode,t},Jr.flushSync=function(t){return Wa(t)},Jr.hydrate=function(t,r,a){if(!Zc(r))throw Error(p(200));return Jc(null,t,r,!0,a)},Jr.hydrateRoot=function(t,r,a){if(!up(t))throw Error(p(405));var l=a!=null&&a.hydratedSources||null,f=!1,g="",N=gh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(N=a.onRecoverableError)),r=fh(r,null,t,1,a??null,f,!1,g,N),t[Vi]=r.current,ho(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new Qc(r)},Jr.render=function(t,r,a){if(!Zc(r))throw Error(p(200));return Jc(null,t,r,!1,a)},Jr.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(p(40));return t._reactRootContainer?(Wa(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1},Jr.unstable_batchedUpdates=ep,Jr.unstable_renderSubtreeIntoContainer=function(t,r,a,l){if(!Zc(a))throw Error(p(200));if(t==null||t._reactInternals===void 0)throw Error(p(38));return Jc(t,r,a,!1,l)},Jr.version="18.3.1-next-f1338f8080-20240426",Jr}var Ch;function Wm(){if(Ch)return pp.exports;Ch=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(h){console.error(h)}}return c(),pp.exports=Fm(),pp.exports}var Th;function Hm(){if(Th)return td;Th=1;var c=Wm();return td.createRoot=c.createRoot,td.hydrateRoot=c.hydrateRoot,td}var Bm=Hm();const Um=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],sd=Um.map(([c,h,p,v,x],w)=>({id:`sample-${w+1}`,first:c,last:h,sheetName:w===3||w===11?null:`${c} ${h}`,github:p,studentName:v,sections:w===0?["p1","p3"]:[x],status:w%5===0?"Active now":w%4===0?"Viewing page":"No recent signal",current:w%3===0?"Strings and Variables":w%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:w%4===0?null:8+w%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:w%4===0?"Started":"Completed",score:w%4===0?null:11+w%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:w%3===0?"Submitted":"Needs revision",score:w%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":w%4===0?0:19+w%6,"2026-10-26":w%3===0?12:8+w%5}})),qm=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function ad(c=new Date){const h=Object.fromEntries(qm.formatToParts(c).filter(v=>v.type!=="literal").map(v=>[v.type,v.value])),p=new Date(Date.UTC(Number(h.year),Number(h.month)-1,Number(h.day)));return p.setUTCDate(p.getUTCDate()-(p.getUTCDay()+6)%7),p.toISOString().slice(0,10)}function Lp(c=new Date,h=8){const p=new Date(ad(c)+"T12:00:00Z");return Array.from({length:h},(v,x)=>{const w=new Date(p);return w.setUTCDate(w.getUTCDate()-x*7),w.toISOString().slice(0,10)})}const Hl=c=>new Date(c+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),Km=(c,h,p)=>`${c}|${h}|${p}`;function $m({response:c,type:h,aiUse:p,aiDetails:v}){return["essay","logic-puzzle"].includes(h)?String(c).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(p)?p==="disclosed"&&String(v).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Gm=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:ad(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:ad(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],To={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},Ym=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],Vm=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Xm=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Qm=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Zm=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Jm=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],eg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],tg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],ng=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],rg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],ig=[...Ym,...Vm,...Xm,...Qm,...Zm,...Jm,...eg,...tg,...ng,...rg],Tf={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Ka(c){return typeof c=="string"?c:typeof(c==null?void 0:c.id)=="string"?c.id:""}function Eo(c){return String((c==null?void 0:c.title)||(c==null?void 0:c.unitName)||(c==null?void 0:c.name)||"Lessons")}function Ju(c,h=1){return(c==null?void 0:c.number)??(c==null?void 0:c.unit)??h}function to(c){return((c==null?void 0:c.lessons)||[]).map(Ka).filter(Boolean)}function ld(c){return Array.isArray(c==null?void 0:c.units)?c.units.flatMap(to):Array.isArray(c==null?void 0:c.lessons)?c.lessons.map(Ka).filter(Boolean):[]}function og(c,h){return((c==null?void 0:c.units)||[]).some(p=>to(p).includes(h))}function Zs(c,h,p=Tf){var _,P;if(!h)return null;const v=((c==null?void 0:c.units)||[]).find(j=>to(j).includes(h)),x=((v==null?void 0:v.lessons)||[]).find(j=>Ka(j)===h),w=typeof x=="object"&&x||((_=v==null?void 0:v.lessonMeta)==null?void 0:_[h])||((P=c==null?void 0:c.lessonRecords)==null?void 0:P[h])||{},L=(p==null?void 0:p[h])||{},E=String(w.title||w.name||L.title||h.split("/").at(-1));return{...L,...w,id:h,title:E,kind:w.kind||L.kind||"Lesson",difficulty:w.difficulty||L.difficulty||"",points:w.points??L.points??null,language:w.language||L.language||(c==null?void 0:c.language)||"text",challenge:w.challenge||w.summary||L.challenge||"",starter:w.starter||L.starter||"",console:L.console||(w.markdownSource?"Run Python to see your output. Checks use published examples only.":""),ready:!!(p!=null&&p[h])||typeof w.markdownSource=="string"&&w.starter!==void 0,isPublished:typeof w.markdownSource=="string"&&w.starter!==void 0}}function Js(c,h,p=Tf){var v;return((v=Zs(c,h,p))==null?void 0:v.title)||""}function Nf(c){const h=Array.isArray(c)?{lessons:c}:c||{},p=new Map,v=new Set,x=[],w=(E,_,P,j)=>{const D=String(E);let I=x.find(ee=>ee.id===D);return I||(I={id:D,title:String(_||"Lessons"),description:String(P||""),number:j,lessons:[]},x.push(I)),I},L=(E,_)=>{const P=Ka(_);!P||v.has(P)||(v.add(P),E.lessons.push(P),p.set(P,typeof _=="string"?{id:P}:{..._}))};return Array.isArray(h.units)?h.units.forEach((E,_)=>{const P=w(E.id||`unit-${_+1}`,Eo(E),E.description||E.summary,Ju(E,_+1));(E.lessons||[]).forEach(j=>L(P,j))}):Array.isArray(h.lessons)&&h.lessons.forEach((E,_)=>{if(!E||!Ka(E))return;const P=E.unit||null,j=Ka(E).indexOf("/"),D=P!=null?j>=0?Ka(E).slice(0,j):`unit-${P}`:E.competency?`topic-${String(E.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",I=E.unitName||E.competency||"Lessons",ee=w(D,I,"",P??x.length+1);L(ee,E)}),{units:x,lessonRecords:Object.fromEntries(p),lessons:x.flatMap(to)}}const mp=Nf(ig),Lo=[{id:"computer-science-1",units:mp.units,lessonRecords:mp.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:mp.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:To["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:To["game-programming"].flatMap(c=>c.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:To["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:To["mobile-app-dev"].flatMap(c=>c.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:To.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:To.capstone.flatMap(c=>c.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:To.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:To.uil.flatMap(c=>c.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"tsi-math",units:To["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:To["tsi-math"].flatMap(c=>c.lessons),topics:["Percents","Ratios","Equations"]}],ti=c=>Lo.find(h=>h.id===c),Wp=c=>{var h;return(h=ti(c))==null?void 0:h.label};function yd(c){return typeof c=="string"&&/^#[0-9a-fA-F]{6}$/.test(c)}function sg(c,h={}){const p=h&&typeof h=="object"?h[c.id]:null;return yd(p)?p.toUpperCase():c.color}function ag(c){if(!yd(c))return"#101012";const h=[1,3,5].map(v=>parseInt(c.slice(v,v+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return h[0]*.2126+h[1]*.7152+h[2]*.0722>.179?"#101012":"#FFFFFF"}function lg(c,h,p=document.documentElement){for(const v of h){const x=`--student-course-color-${v.id}`,w=c&&typeof c=="object"?c[v.id]:null,L=`--student-course-ink-${v.id}`;yd(w)?(p.style.setProperty(x,w),p.style.setProperty(L,ag(w))):(p.style.removeProperty(x),p.style.removeProperty(L))}}function hn(c,h){const[p,v]=We.useState(()=>{try{const x=localStorage.getItem(c);return x===null?h:JSON.parse(x)}catch{return h}});return We.useEffect(()=>{try{localStorage.setItem(c,JSON.stringify(p))}catch{}},[c,p]),[p,v]}function ug(c,h=[]){return Array.isArray(h)&&h.includes(c)}function Ef(c,h=[]){const p=ld(c),v=p.filter(x=>ug(x,h)).length;return{completed:v,total:p.length,percent:p.length?Math.round(v/p.length*100):0}}function cg(c,h){const p=Array.isArray(c)?c:[];return p.includes(h)?p.filter(v=>v!==h):[...p,h]}const dg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function pg(c=new Date){const h=Object.fromEntries(dg.formatToParts(c).filter(p=>p.type!=="literal").map(p=>[p.type,p.value]));return`${h.year}-${h.month}-${h.day}`}function ud(c){return c?new Date(c+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function Qu(c,h=[]){return h.find(p=>p.id===c)||null}function hg(c,h=[]){return h.find(p=>p.id===c)||null}function vd(c,{assignments:h=[],grades:p=[],completedLessons:v=[],today:x=pg()}={}){const w=hg(c,h),L=Qu(c,p),E=c.startsWith("lesson:")&&v.includes(c.slice(7)),_=!!L||E;return w!=null&&w.dueDate?{state:_?"completed":w.dueDate<x?"overdue":"assigned",dueDate:w.dueDate,grade:L,completed:_}:{state:_?"completed":"unassigned",dueDate:null,grade:L,completed:_}}function jp(c=[]){const h=c.reduce((v,x)=>v+x.earned,0),p=c.reduce((v,x)=>v+x.possible,0);return{earned:h,possible:p,percent:p?Math.round(100*h/p):null,count:c.length}}function fg(c=[]){const h=new Map;return c.forEach(p=>{const v=ad(new Date(p.gradedAt+"T12:00:00Z"));h.has(v)||h.set(v,[]),h.get(v).push(p)}),[...h.entries()].map(([p,v])=>({week:p,...jp(v)})).sort((p,v)=>v.week.localeCompare(p.week))}function mg(c=[],h=[]){return[...new Set([...Array.isArray(c)?c:[],...h.filter(p=>p.id.startsWith("lesson:")).map(p=>p.id.slice(7))])]}const gg=[{id:"lesson:python-strings",courseId:"computer-science-1",earned:8,possible:10,gradedAt:"2026-10-28"},{id:"lesson:python-variables",courseId:"computer-science-1",earned:10,possible:10,gradedAt:"2026-11-04"},{id:"lesson:web-layout",courseId:"mobile-app-dev",earned:9,possible:10,gradedAt:"2026-11-03"},{id:"lesson:capstone-discovery",courseId:"capstone",earned:10,possible:10,gradedAt:"2026-10-30"},{id:"lesson:uil-loops",courseId:"uil",earned:10,possible:10,gradedAt:"2026-11-05"},{id:"challenge:confidence-total",courseId:"computer-science-1",earned:12,possible:15,gradedAt:"2026-11-02",language:"python"},{id:"challenge:count-matches",courseId:"computer-science-1",earned:10,possible:10,gradedAt:"2026-11-06",language:"python"},{id:"challenge:score-line",courseId:"mobile-app-dev",earned:8,possible:10,gradedAt:"2026-10-27",language:"javascript"}],Lf=[{id:"lesson:python-strings",courseId:"computer-science-1",dueDate:"2026-11-03"},{id:"lesson:python-variables",courseId:"computer-science-1",dueDate:"2026-11-06"},{id:"lesson:python-formatting",courseId:"computer-science-1",dueDate:"2026-11-10"},{id:"lesson:python-decisions",courseId:"computer-science-1",dueDate:"2026-11-02"},{id:"lesson:csharp-variables",courseId:"game-programming",dueDate:"2026-11-05"},{id:"lesson:unity-player-controller",courseId:"game-programming",dueDate:"2026-11-13"},{id:"lesson:web-layout",courseId:"mobile-app-dev",dueDate:"2026-11-04"},{id:"lesson:react-components",courseId:"mobile-app-dev",dueDate:"2026-11-11"},{id:"lesson:capstone-discovery",courseId:"capstone",dueDate:"2026-11-02"},{id:"lesson:uil-loops",courseId:"uil",dueDate:"2026-11-04"},{id:"lesson:tsi-ratios",courseId:"tsi-math",dueDate:"2026-11-09"},{id:"challenge:confidence-total",courseId:"computer-science-1",dueDate:"2026-11-05"},{id:"challenge:count-matches",courseId:"computer-science-1",dueDate:"2026-11-09"},{id:"challenge:target-pairs",courseId:"uil",dueDate:"2026-11-04"}],us=(...c)=>c.filter(Boolean).join(" "),yg=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],vg="/playground/preview/",xg="/"+vg.replace(/^\/+|\/+$/g,""),ea=c=>`${xg}/#${c}`,Vu=()=>ea("/"),Nh=()=>ea("/teacher"),bg=()=>ea("/admin"),wg=()=>ea("/journals"),kg=()=>ea("/grades"),Fl=(c=null)=>ea(c?`/challenges/course/${encodeURIComponent(c)}`:"/challenges"),jf=c=>ea(`/challenges/${encodeURIComponent(c)}`);function xd(c,h){const p=typeof c=="string"?ti(c):c;if(!p)return Vu();const v=`/playgrounds/${encodeURIComponent(p.slug)}`;return ea(h?`${v}/lessons/${encodeURIComponent(h)}`:v)}function gp(c,h=Lo){const w=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(w==="/")return{page:"home"};if(w==="/teacher")return{page:"teacher"};if(w==="/admin")return{page:"admin"};if(w==="/journals")return{page:"journals"};if(w==="/grades")return{page:"grades"};if(w==="/challenges")return{page:"challenges",filterCourse:null};if(w.startsWith("/challenges/")){const j=w.split("/").filter(Boolean);try{if(j.length===3&&j[1]==="course"){const D=decodeURIComponent(j[2]);return ti(D)?{page:"challenges",filterCourse:D}:{page:"not-found"}}if(j.length===2){const D=decodeURIComponent(j[1]);return yg.includes(D)?{page:"challenge",challengeId:D}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const L=w.split("/").filter(Boolean);if(L[0]!=="playgrounds"||![2,4].includes(L.length))return{page:"not-found"};let E,_;try{E=decodeURIComponent(L[1]),_=L.length===4?decodeURIComponent(L[3]):void 0}catch{return{page:"not-found"}}const P=h.find(j=>j.slug===E);return!P||L.length===4&&L[2]!=="lessons"?{page:"not-found"}:_&&!og(P,_)?{page:"not-found"}:{page:"course",courseId:P.id,lessonId:_??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pf=(...c)=>c.filter((h,p,v)=>!!h&&h.trim()!==""&&v.indexOf(h)===p).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=We.forwardRef(({color:c="currentColor",size:h=24,strokeWidth:p=2,absoluteStrokeWidth:v,className:x="",children:w,iconNode:L,...E},_)=>We.createElement("svg",{ref:_,..._g,width:h,height:h,stroke:c,strokeWidth:v?Number(p)*24/Number(h):p,className:Pf("lucide",x),...E},[...L.map(([P,j])=>We.createElement(P,j)),...Array.isArray(w)?w:[w]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(c,h)=>{const p=We.forwardRef(({className:v,...x},w)=>We.createElement(Cg,{ref:w,iconNode:h,className:Pf(`lucide-${Sg(c)}`,v),...x}));return p.displayName=`${c}`,p};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=St("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=St("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=St("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=St("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=St("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=St("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=St("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=St("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=St("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=St("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=St("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=St("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=St("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=St("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=St("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=St("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=St("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=St("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=St("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=St("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=St("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=St("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=St("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=St("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=St("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=St("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=St("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=St("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=St("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=St("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=St("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=St("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=St("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=St("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=St("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=St("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=St("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=St("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=St("SquareTerminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=St("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=St("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=St("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=St("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function no({children:c,tone:h=""}){return d.jsx("span",{className:us("chip",h&&`chip-${h}`),children:c})}function Vg({theme:c,setTheme:h}){const p=c==="dark";return d.jsx("button",{className:"icon-button",title:p?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>h(p?"light":"dark"),children:p?d.jsx(Gg,{size:17}):d.jsx(Bg,{size:17})})}function Xg({sidebarOpen:c,onToggleSidebar:h,onHome:p,theme:v,setTheme:x}){return d.jsx("header",{className:"topbar",children:d.jsxs("div",{className:"topbar-inner",children:[d.jsx("button",{className:"icon-button nav-toggle",onClick:h,"aria-label":"Toggle navigation",children:c?d.jsx(Ug,{size:18}):d.jsx(Hg,{size:18})}),d.jsxs("button",{className:"brand",onClick:p,children:[d.jsx("span",{className:"brand-logo",children:"{ }"}),d.jsx("strong",{children:"Ms. Whitby's Playground"}),d.jsx("span",{className:"brand-compact",children:"React Lab"})]}),d.jsx("div",{className:"topbar-spacer"}),d.jsx(no,{children:"LOCAL DESIGN LAB"}),d.jsx(Vg,{theme:v,setTheme:x}),d.jsx("span",{className:"user-circle",children:"W"})]})})}const Qg=[["home","Home",Fg],["challenges","Challenge Bank",wd],["journals","Weekly journals",Hp],["grades","Grades",Dg],["teacher","Teacher dashboard",Bp],["admin","Admin dashboard",$p]];function Zg({open:c,page:h,courseId:p,lessonId:v,setPage:x,openCourse:w,completedLessons:L=[],assignments:E=[],grades:_=[]}){const P=h==="course"?ti(p):null;return d.jsxs("aside",{className:us("main-sidebar",!c&&"collapsed"),"aria-label":"Playground navigation",children:[d.jsx("div",{className:"side-title",children:"EXPLORE"}),Qg.map(([j,D,I])=>d.jsxs("button",{className:us("nav-item",(h===j||j==="challenges"&&h==="challenge")&&"active"),onClick:()=>x(j),title:D,children:[d.jsx(I,{size:19}),d.jsx("span",{children:D})]},j)),P&&d.jsxs("section",{className:"course-outline","data-course":P.id,"aria-label":`${P.label} outline`,children:[d.jsx("div",{className:"side-rule"}),d.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),d.jsxs("button",{className:us("outline-overview",!v&&"active"),onClick:()=>w(P.id),children:[d.jsx(ec,{size:16}),d.jsx("span",{children:"Course overview"})]}),P.units.map((j,D)=>d.jsxs("details",{className:"outline-unit",open:to(j).includes(v)||!v&&D===0?!0:void 0,children:[d.jsxs("summary",{children:[d.jsx("span",{className:"outline-unit-number",children:String(Ju(j,D+1)).padStart(2,"0")}),d.jsx("span",{className:"outline-unit-title",title:Eo(j),children:Eo(j)}),d.jsx(If,{size:14})]}),d.jsx("div",{className:"outline-lesson-list",children:to(j).map(I=>{const ee=Js(P,I),oe=vd("lesson:"+I,{assignments:E,grades:_,completedLessons:L}),X=oe.completed?"completed":oe.dueDate?oe.state:"",ue=X==="completed"?"Completed":X==="overdue"?"Overdue":X==="assigned"?"Assigned":"";return d.jsxs("button",{onClick:()=>w(P.id,I),className:us("outline-lesson",I===v&&"selected"),"aria-label":ue?`${ee}, ${ue.toLowerCase()}`:ee,title:ue?`${ee} · ${ue}`:ee,"aria-current":I===v?"page":void 0,children:[d.jsx("span",{className:"outline-lesson-name",children:ee}),ue&&d.jsx("span",{className:`assignment-dot ${X}`,"aria-hidden":"true"})]},I)})})]},`${P.id}-${j.id}-${v||"overview"}`))]}),d.jsx("div",{className:"side-rule"}),d.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),Lo.map(j=>d.jsxs("button",{"data-course":j.id,className:us("nav-item course-nav-item",h==="course"&&p===j.id&&"active"),onClick:()=>w(j.id),title:j.label,children:[d.jsx("span",{className:"nav-dot"}),d.jsx("span",{children:j.label})]},j.id)),d.jsxs("div",{className:"sidebar-bottom",children:[d.jsx(Pg,{size:17}),d.jsx("span",{children:"Your learning spaces"})]})]})}function Jg(){return d.jsxs("footer",{className:"site-footer",children:[d.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),d.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const ey={"computer-science-1":bd,"game-programming":Mg,"mobile-app-dev":Kg,uil:Df,"tsi-math":Rf,capstone:qg};function ty({course:c,onOpen:h,completedLessons:p=[]}){const{completed:v,total:x}=Ef(c,p),w=ey[c.id]||bd;function L(E){E.button!==0||E.metaKey||E.ctrlKey||E.shiftKey||E.altKey||(E.preventDefault(),h())}return d.jsxs("a",{className:"course-card","data-course":c.id,href:xd(c),onClick:L,children:[d.jsxs("div",{className:"course-card-heading",children:[d.jsx("span",{className:"course-glyph","aria-hidden":"true",children:d.jsx(w,{size:24,strokeWidth:2.2})}),d.jsxs("div",{children:[d.jsx("h2",{children:c.label}),d.jsx("p",{children:c.short})]})]}),d.jsx("p",{className:"course-description",children:c.description}),d.jsxs("div",{className:"course-card-footer",children:[d.jsxs("div",{className:"course-meta",children:[d.jsxs("span",{children:[x," ",x===1?"lesson":"lessons"]}),d.jsxs("span",{children:[v," completed"]})]}),d.jsx("progress",{className:"course-progress-track",value:v,max:Math.max(x,1),"aria-label":`${c.label}: ${v} of ${x} lessons completed`})]})]})}function ny({onClick:c}){return d.jsxs("button",{className:"wide-shortcut",onClick:c,children:[d.jsx(Bp,{size:18}),d.jsxs("span",{children:[d.jsx("strong",{children:"Teacher Dashboard preview"}),d.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),d.jsx($a,{size:18})]})}function ry({openCourse:c,openTeacher:h,openChallenges:p,completedLessons:v=[]}){return d.jsxs("div",{className:"main-content",children:[d.jsxs("div",{className:"welcome",children:[d.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),d.jsx("h1",{children:"Your playgrounds"}),d.jsx("p",{children:"Choose a course to continue learning. Complete lessons to fill your progress bars."})]}),d.jsx("div",{className:"course-card-grid",children:Lo.map(x=>d.jsx(ty,{course:x,completedLessons:v,onOpen:()=>c(x.id)},x.id))}),d.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:p,children:[d.jsx(wd,{size:23}),d.jsxs("span",{children:[d.jsx("strong",{children:"Shared Challenge Bank"}),d.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),d.jsx("span",{"aria-hidden":"true",children:"→"})]}),d.jsx(ny,{onClick:h})]})}function iy({course:c,openCourse:h,openChallenges:p,completedLessons:v=[],assignments:x=[],grades:w=[],courseColors:L={},onSetCourseColor:E,onResetCourseColor:_}){const P=Ef(c,v),[j,D]=We.useState(!1),I=sg(c,L);return d.jsxs("div",{className:"course-landing",children:[d.jsxs("header",{className:"course-hero surface-card",children:[d.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>D(ee=>!ee),"aria-label":j?"Close course color settings":`Change ${c.label} color`,title:j?"Close settings":"Course color","aria-expanded":j,"aria-controls":"course-color-controls",children:j?d.jsx(kd,{size:17}):d.jsx(Kp,{size:17})}),d.jsx("div",{className:"eyebrow",children:"Course overview"}),d.jsx("h1",{children:c.label}),d.jsx("p",{children:c.description}),d.jsxs("div",{className:"course-hero-stats",children:[d.jsxs("span",{children:[d.jsx(Wg,{size:16})," ",c.units.length," units"]}),d.jsxs("span",{children:[d.jsx(ec,{size:16})," ",ld(c).length," lessons"]})]}),d.jsxs("button",{className:"btn primary",onClick:()=>h(c.id,ld(c)[0]),children:["Start learning ",d.jsx($a,{size:16})]}),j&&d.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[d.jsxs("div",{className:"course-color-control-copy",children:[d.jsx("strong",{children:"Course color"}),d.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),d.jsxs("label",{className:"course-color-picker",children:[d.jsx("input",{type:"color",value:I,onChange:ee=>E==null?void 0:E(c.id,ee.target.value),"aria-label":`Choose a color for ${c.label}`}),d.jsx("span",{children:"Choose color"})]}),d.jsx("button",{type:"button",className:"btn",onClick:()=>_==null?void 0:_(c.id),children:"Reset to default"}),d.jsx("button",{type:"button",className:"btn",onClick:()=>D(!1),children:"Done"})]})]}),c.publishedContent&&d.jsx("p",{className:"course-published-note",children:"Explore the complete Computer Science I lessons. Practice here won't change your grades."}),d.jsxs("p",{className:"course-landing-progress",children:[P.completed," of ",P.total," lessons ",c.publishedContent?"marked complete in preview":"completed"," · ",P.percent,"%"]}),d.jsx("div",{className:"course-landing-heading",children:d.jsxs("div",{children:[d.jsx("h2",{children:"Units & lessons"}),d.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),d.jsx("div",{className:"unit-card-grid",children:c.units.map((ee,oe)=>d.jsxs("section",{className:"unit-card surface-card",children:[d.jsxs("header",{className:"unit-card-header",children:[d.jsxs("span",{className:"unit-badge",children:["UNIT ",String(Ju(ee,oe+1)).padStart(2,"0")]}),d.jsx("h3",{title:Eo(ee),children:Eo(ee)}),ee.description&&d.jsx("p",{children:ee.description})]}),d.jsx("div",{className:"unit-lessons",children:to(ee).map((X,ue)=>d.jsxs("a",{className:"unit-lesson-link",href:xd(c,X),onClick:M=>{M.button!==0||M.metaKey||M.ctrlKey||M.shiftKey||M.altKey||(M.preventDefault(),h(c.id,X))},children:[d.jsx("span",{className:"unit-lesson-index",children:ue+1}),d.jsxs("span",{className:"unit-lesson-label",children:[d.jsx("strong",{title:Js(c,X),children:Js(c,X)}),(()=>{var W,q;const M=vd("lesson:"+X,{assignments:x,grades:w,completedLessons:v});return M.dueDate||M.completed?d.jsxs("span",{className:"unit-assignment-meta",children:[d.jsxs("span",{className:`assignment-status ${M.state}`,children:[d.jsx("span",{className:`assignment-dot ${M.state}`,"aria-hidden":"true"}),M.completed?"Completed":M.state==="overdue"?"Overdue":"Assigned"]}),M.dueDate&&d.jsxs("small",{children:["Due ",ud(M.dueDate)]}),M.grade&&d.jsxs("small",{children:[M.grade.earned," / ",M.grade.possible," pts"]})]}):d.jsxs("small",{children:[(W=Zs(c,X))==null?void 0:W.kind,(q=Zs(c,X))!=null&&q.difficulty?` · ${Zs(c,X).difficulty}`:""]})})()]}),d.jsx(Af,{size:16})]},X))})]},ee.id))}),d.jsxs("section",{className:"course-challenges-shelf surface-card",children:[d.jsxs("div",{children:[d.jsx("div",{className:"eyebrow",children:"Shared practice library"}),d.jsx("h2",{children:"Related programming challenges"}),d.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),d.jsxs("a",{href:Fl(c.id),className:"btn",onClick:ee=>{ee.button!==0||ee.metaKey||ee.ctrlKey||ee.shiftKey||ee.altKey||(ee.preventDefault(),p(c.id))},children:[d.jsx(wd,{size:16})," Browse challenges"]})]})]})}function dd({axis:c,onDrag:h}){const p=We.useRef(!1),v=c==="columns",x=()=>p.current=!1;return d.jsx("div",{className:us("splitter",v?"column-split":"row-split"),role:"separator","aria-label":v?"Resize instructions and editor":"Resize editor and console","aria-orientation":v?"vertical":"horizontal",tabIndex:0,onPointerDown:w=>{w.preventDefault(),w.currentTarget.setPointerCapture(w.pointerId),p.current=!0},onPointerMove:w=>{p.current&&w.buttons===1&&h(w)},onPointerUp:x,onLostPointerCapture:x,children:d.jsx("span",{})})}function Gp({eyebrow:c,children:h,actions:p}){return d.jsxs("div",{className:"page-title-row",children:[d.jsxs("div",{children:[c&&d.jsx("div",{className:"eyebrow",children:c}),d.jsx("h1",{children:h})]}),p&&d.jsx("div",{className:"page-actions",children:p})]})}function Lh({task:c,unit:h,unitNumber:p,isTsi:v,isCompleted:x=!1,assignment:w=null,grade:L=null,onToggleCompleted:E}){const _=(w==null?void 0:w.id)||(L==null?void 0:L.id)||"",P=vd(_,{assignments:w?[w]:[],grades:L?[L]:[],completedLessons:x?[_.replace(/^lesson:/,"")]:[]});return d.jsxs("div",{className:"lesson-header",children:[d.jsxs("div",{className:"eyebrow",children:["Unit ",Ju(h,p)," · ",Eo(h)," ",d.jsx("span",{className:"dot",children:"·"})," ",c.kind]}),d.jsx(Gp,{actions:d.jsxs("div",{className:"lesson-heading-actions",children:[!v&&(c==null?void 0:c.points)!=null&&d.jsx("span",{className:"points-tag",children:L?`${L.earned} / ${L.possible} pts`:`${c.points} points available`}),L?d.jsxs("span",{className:"btn completion-toggle completed",children:[d.jsx(Pp,{size:16})," Completed"]}):d.jsxs("button",{type:"button",className:`btn completion-toggle ${x?"completed":""}`,"aria-pressed":x,onClick:E,children:[x?d.jsx(Pp,{size:16}):d.jsx(Ag,{size:16}),x?"Completed":"Mark complete"]})]}),children:c.title}),d.jsx("p",{children:c.challenge}),(w==null?void 0:w.dueDate)&&d.jsxs("div",{className:"lesson-assignment-info",children:[d.jsx("span",{className:`assignment-status ${P.state}`,children:P.state==="completed"?"Completed":P.state==="overdue"?"Overdue":"Assigned"}),d.jsxs("span",{children:["Due ",ud(w.dueDate)]})]})]})}const zf={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},oy=`# Find an Inefficiency

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
`,sy=`# Interpret User Feedback

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
`,ay=`# Interview for Evidence

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
`,ly=`# Make a Minimum Viable Prototype

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
`,uy=`# Player Decisions

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
`,cy=`# Variables for a Game

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
`,dy=`# Decision Making

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
`,py=`# Format a Summary

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
`,hy=`# Lists and Indexing

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
`,fy=`# For Loops

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
`,my=`# Strings and Variables

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
`,gy=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,yy=`# Your First React Card

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
`,vy=`# Interactive React State

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
`,xy=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,by=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,wy=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,ky=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,Sy=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,_y=`# Trace Java Loops

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
`,Cy=`# Method Calls and Scope

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
`,Ty=`# String Indexing

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
`,Ny=`# Collision Events

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
`,Ey=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,Ly=`# Score and Feedback

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
`,jy=`# Events and Forms

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
`,Py=`# Responsive Layouts

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
`;function Yp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ya=Yp();function Ff(c){Ya=c}var Zu={exec:()=>null};function Ut(c,h=""){let p=typeof c=="string"?c:c.source;const v={replace:(x,w)=>{let L=typeof w=="string"?w:w.source;return L=L.replace(Fr.caret,"$1"),p=p.replace(x,L),v},getRegex:()=>new RegExp(p,h)};return v}var Fr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:c=>new RegExp(`^( {0,3}${c})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}#`),htmlBeginRegex:c=>new RegExp(`^ {0,${Math.min(3,c-1)}}<(?:[a-z].*>|!--)`,"i")},Ay=/^(?:[ \t]*(?:\n|$))+/,Ry=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Iy=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,tc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Oy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Vp=/(?:[*+-]|\d{1,9}[.)])/,Wf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Hf=Ut(Wf).replace(/bull/g,Vp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),My=Ut(Wf).replace(/bull/g,Vp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Xp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Dy=/^[^\n]+/,Qp=/(?!\s*\])(?:\\.|[^\[\]\\])+/,zy=Ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qp).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Fy=Ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Vp).getRegex(),Sd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Wy=Ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zp).replace("tag",Sd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bf=Ut(Xp).replace("hr",tc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sd).getRegex(),Hy=Ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bf).getRegex(),Jp={blockquote:Hy,code:Ry,def:zy,fences:Iy,heading:Oy,hr:tc,html:Wy,lheading:Hf,list:Fy,newline:Ay,paragraph:Bf,table:Zu,text:Dy},jh=Ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",tc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sd).getRegex(),By={...Jp,lheading:My,table:jh,paragraph:Ut(Xp).replace("hr",tc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sd).getRegex()},Uy={...Jp,html:Ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zp).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Zu,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ut(Xp).replace("hr",tc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Hf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},qy=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ky=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Uf=/^( {2,}|\\)\n(?!\s*$)/,$y=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_d=/[\p{P}\p{S}]/u,eh=/[\s\p{P}\p{S}]/u,qf=/[^\s\p{P}\p{S}]/u,Gy=Ut(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,eh).getRegex(),Kf=/(?!~)[\p{P}\p{S}]/u,Yy=/(?!~)[\s\p{P}\p{S}]/u,Vy=/(?:[^\s\p{P}\p{S}]|~)/u,Xy=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,$f=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Qy=Ut($f,"u").replace(/punct/g,_d).getRegex(),Zy=Ut($f,"u").replace(/punct/g,Kf).getRegex(),Gf="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Jy=Ut(Gf,"gu").replace(/notPunctSpace/g,qf).replace(/punctSpace/g,eh).replace(/punct/g,_d).getRegex(),ev=Ut(Gf,"gu").replace(/notPunctSpace/g,Vy).replace(/punctSpace/g,Yy).replace(/punct/g,Kf).getRegex(),tv=Ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,qf).replace(/punctSpace/g,eh).replace(/punct/g,_d).getRegex(),nv=Ut(/\\(punct)/,"gu").replace(/punct/g,_d).getRegex(),rv=Ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),iv=Ut(Zp).replace("(?:-->|$)","-->").getRegex(),ov=Ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",iv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,sv=Ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",pd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Yf=Ut(/^!?\[(label)\]\[(ref)\]/).replace("label",pd).replace("ref",Qp).getRegex(),Vf=Ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qp).getRegex(),av=Ut("reflink|nolink(?!\\()","g").replace("reflink",Yf).replace("nolink",Vf).getRegex(),th={_backpedal:Zu,anyPunctuation:nv,autolink:rv,blockSkip:Xy,br:Uf,code:Ky,del:Zu,emStrongLDelim:Qy,emStrongRDelimAst:Jy,emStrongRDelimUnd:tv,escape:qy,link:sv,nolink:Vf,punctuation:Gy,reflink:Yf,reflinkSearch:av,tag:ov,text:$y,url:Zu},lv={...th,link:Ut(/^!?\[(label)\]\((.*?)\)/).replace("label",pd).getRegex(),reflink:Ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pd).getRegex()},Ap={...th,emStrongRDelimAst:ev,emStrongLDelim:Zy,url:Ut(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},uv={...Ap,br:Ut(Uf).replace("{2,}","*").getRegex(),text:Ut(Ap.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},nd={normal:Jp,gfm:By,pedantic:Uy},Bu={normal:th,gfm:Ap,breaks:uv,pedantic:lv},cv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ph=c=>cv[c];function No(c,h){if(h){if(Fr.escapeTest.test(c))return c.replace(Fr.escapeReplace,Ph)}else if(Fr.escapeTestNoEncode.test(c))return c.replace(Fr.escapeReplaceNoEncode,Ph);return c}function Ah(c){try{c=encodeURI(c).replace(Fr.percentDecode,"%")}catch{return null}return c}function Rh(c,h){var w;const p=c.replace(Fr.findPipe,(L,E,_)=>{let P=!1,j=E;for(;--j>=0&&_[j]==="\\";)P=!P;return P?"|":" |"}),v=p.split(Fr.splitPipe);let x=0;if(v[0].trim()||v.shift(),v.length>0&&!((w=v.at(-1))!=null&&w.trim())&&v.pop(),h)if(v.length>h)v.splice(h);else for(;v.length<h;)v.push("");for(;x<v.length;x++)v[x]=v[x].trim().replace(Fr.slashPipe,"|");return v}function Uu(c,h,p){const v=c.length;if(v===0)return"";let x=0;for(;x<v&&c.charAt(v-x-1)===h;)x++;return c.slice(0,v-x)}function dv(c,h){if(c.indexOf(h[1])===-1)return-1;let p=0;for(let v=0;v<c.length;v++)if(c[v]==="\\")v++;else if(c[v]===h[0])p++;else if(c[v]===h[1]&&(p--,p<0))return v;return p>0?-2:-1}function Ih(c,h,p,v,x){const w=h.href,L=h.title||null,E=c[1].replace(x.other.outputLinkReplace,"$1");v.state.inLink=!0;const _={type:c[0].charAt(0)==="!"?"image":"link",raw:p,href:w,title:L,text:E,tokens:v.inlineTokens(E)};return v.state.inLink=!1,_}function pv(c,h,p){const v=c.match(p.other.indentCodeCompensation);if(v===null)return h;const x=v[1];return h.split(`
`).map(w=>{const L=w.match(p.other.beginningSpace);if(L===null)return w;const[E]=L;return E.length>=x.length?w.slice(x.length):w}).join(`
`)}var hd=class{constructor(c){on(this,"options");on(this,"rules");on(this,"lexer");this.options=c||Ya}space(c){const h=this.rules.block.newline.exec(c);if(h&&h[0].length>0)return{type:"space",raw:h[0]}}code(c){const h=this.rules.block.code.exec(c);if(h){const p=h[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:h[0],codeBlockStyle:"indented",text:this.options.pedantic?p:Uu(p,`
`)}}}fences(c){const h=this.rules.block.fences.exec(c);if(h){const p=h[0],v=pv(p,h[3]||"",this.rules);return{type:"code",raw:p,lang:h[2]?h[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):h[2],text:v}}}heading(c){const h=this.rules.block.heading.exec(c);if(h){let p=h[2].trim();if(this.rules.other.endingHash.test(p)){const v=Uu(p,"#");(this.options.pedantic||!v||this.rules.other.endingSpaceChar.test(v))&&(p=v.trim())}return{type:"heading",raw:h[0],depth:h[1].length,text:p,tokens:this.lexer.inline(p)}}}hr(c){const h=this.rules.block.hr.exec(c);if(h)return{type:"hr",raw:Uu(h[0],`
`)}}blockquote(c){const h=this.rules.block.blockquote.exec(c);if(h){let p=Uu(h[0],`
`).split(`
`),v="",x="";const w=[];for(;p.length>0;){let L=!1;const E=[];let _;for(_=0;_<p.length;_++)if(this.rules.other.blockquoteStart.test(p[_]))E.push(p[_]),L=!0;else if(!L)E.push(p[_]);else break;p=p.slice(_);const P=E.join(`
`),j=P.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");v=v?`${v}
${P}`:P,x=x?`${x}
${j}`:j;const D=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(j,w,!0),this.lexer.state.top=D,p.length===0)break;const I=w.at(-1);if((I==null?void 0:I.type)==="code")break;if((I==null?void 0:I.type)==="blockquote"){const ee=I,oe=ee.raw+`
`+p.join(`
`),X=this.blockquote(oe);w[w.length-1]=X,v=v.substring(0,v.length-ee.raw.length)+X.raw,x=x.substring(0,x.length-ee.text.length)+X.text;break}else if((I==null?void 0:I.type)==="list"){const ee=I,oe=ee.raw+`
`+p.join(`
`),X=this.list(oe);w[w.length-1]=X,v=v.substring(0,v.length-I.raw.length)+X.raw,x=x.substring(0,x.length-ee.raw.length)+X.raw,p=oe.substring(w.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:v,tokens:w,text:x}}}list(c){let h=this.rules.block.list.exec(c);if(h){let p=h[1].trim();const v=p.length>1,x={type:"list",raw:"",ordered:v,start:v?+p.slice(0,-1):"",loose:!1,items:[]};p=v?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=v?p:"[*+-]");const w=this.rules.other.listItemRegex(p);let L=!1;for(;c;){let _=!1,P="",j="";if(!(h=w.exec(c))||this.rules.block.hr.test(c))break;P=h[0],c=c.substring(P.length);let D=h[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),I=c.split(`
`,1)[0],ee=!D.trim(),oe=0;if(this.options.pedantic?(oe=2,j=D.trimStart()):ee?oe=h[1].length+1:(oe=h[2].search(this.rules.other.nonSpaceChar),oe=oe>4?1:oe,j=D.slice(oe),oe+=h[1].length),ee&&this.rules.other.blankLine.test(I)&&(P+=I+`
`,c=c.substring(I.length+1),_=!0),!_){const M=this.rules.other.nextBulletRegex(oe),W=this.rules.other.hrRegex(oe),q=this.rules.other.fencesBeginRegex(oe),K=this.rules.other.headingBeginRegex(oe),ie=this.rules.other.htmlBeginRegex(oe);for(;c;){const pe=c.split(`
`,1)[0];let re;if(I=pe,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),re=I):re=I.replace(this.rules.other.tabCharGlobal,"    "),q.test(I)||K.test(I)||ie.test(I)||M.test(I)||W.test(I))break;if(re.search(this.rules.other.nonSpaceChar)>=oe||!I.trim())j+=`
`+re.slice(oe);else{if(ee||D.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||q.test(D)||K.test(D)||W.test(D))break;j+=`
`+I}!ee&&!I.trim()&&(ee=!0),P+=pe+`
`,c=c.substring(pe.length+1),D=re.slice(oe)}}x.loose||(L?x.loose=!0:this.rules.other.doubleBlankLine.test(P)&&(L=!0));let X=null,ue;this.options.gfm&&(X=this.rules.other.listIsTask.exec(j),X&&(ue=X[0]!=="[ ] ",j=j.replace(this.rules.other.listReplaceTask,""))),x.items.push({type:"list_item",raw:P,task:!!X,checked:ue,loose:!1,text:j,tokens:[]}),x.raw+=P}const E=x.items.at(-1);if(E)E.raw=E.raw.trimEnd(),E.text=E.text.trimEnd();else return;x.raw=x.raw.trimEnd();for(let _=0;_<x.items.length;_++)if(this.lexer.state.top=!1,x.items[_].tokens=this.lexer.blockTokens(x.items[_].text,[]),!x.loose){const P=x.items[_].tokens.filter(D=>D.type==="space"),j=P.length>0&&P.some(D=>this.rules.other.anyLine.test(D.raw));x.loose=j}if(x.loose)for(let _=0;_<x.items.length;_++)x.items[_].loose=!0;return x}}html(c){const h=this.rules.block.html.exec(c);if(h)return{type:"html",block:!0,raw:h[0],pre:h[1]==="pre"||h[1]==="script"||h[1]==="style",text:h[0]}}def(c){const h=this.rules.block.def.exec(c);if(h){const p=h[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),v=h[2]?h[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",x=h[3]?h[3].substring(1,h[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):h[3];return{type:"def",tag:p,raw:h[0],href:v,title:x}}}table(c){var L;const h=this.rules.block.table.exec(c);if(!h||!this.rules.other.tableDelimiter.test(h[2]))return;const p=Rh(h[1]),v=h[2].replace(this.rules.other.tableAlignChars,"").split("|"),x=(L=h[3])!=null&&L.trim()?h[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],w={type:"table",raw:h[0],header:[],align:[],rows:[]};if(p.length===v.length){for(const E of v)this.rules.other.tableAlignRight.test(E)?w.align.push("right"):this.rules.other.tableAlignCenter.test(E)?w.align.push("center"):this.rules.other.tableAlignLeft.test(E)?w.align.push("left"):w.align.push(null);for(let E=0;E<p.length;E++)w.header.push({text:p[E],tokens:this.lexer.inline(p[E]),header:!0,align:w.align[E]});for(const E of x)w.rows.push(Rh(E,w.header.length).map((_,P)=>({text:_,tokens:this.lexer.inline(_),header:!1,align:w.align[P]})));return w}}lheading(c){const h=this.rules.block.lheading.exec(c);if(h)return{type:"heading",raw:h[0],depth:h[2].charAt(0)==="="?1:2,text:h[1],tokens:this.lexer.inline(h[1])}}paragraph(c){const h=this.rules.block.paragraph.exec(c);if(h){const p=h[1].charAt(h[1].length-1)===`
`?h[1].slice(0,-1):h[1];return{type:"paragraph",raw:h[0],text:p,tokens:this.lexer.inline(p)}}}text(c){const h=this.rules.block.text.exec(c);if(h)return{type:"text",raw:h[0],text:h[0],tokens:this.lexer.inline(h[0])}}escape(c){const h=this.rules.inline.escape.exec(c);if(h)return{type:"escape",raw:h[0],text:h[1]}}tag(c){const h=this.rules.inline.tag.exec(c);if(h)return!this.lexer.state.inLink&&this.rules.other.startATag.test(h[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(h[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(h[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(h[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:h[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:h[0]}}link(c){const h=this.rules.inline.link.exec(c);if(h){const p=h[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(p)){if(!this.rules.other.endAngleBracket.test(p))return;const w=Uu(p.slice(0,-1),"\\");if((p.length-w.length)%2===0)return}else{const w=dv(h[2],"()");if(w===-2)return;if(w>-1){const E=(h[0].indexOf("!")===0?5:4)+h[1].length+w;h[2]=h[2].substring(0,w),h[0]=h[0].substring(0,E).trim(),h[3]=""}}let v=h[2],x="";if(this.options.pedantic){const w=this.rules.other.pedanticHrefTitle.exec(v);w&&(v=w[1],x=w[3])}else x=h[3]?h[3].slice(1,-1):"";return v=v.trim(),this.rules.other.startAngleBracket.test(v)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(p)?v=v.slice(1):v=v.slice(1,-1)),Ih(h,{href:v&&v.replace(this.rules.inline.anyPunctuation,"$1"),title:x&&x.replace(this.rules.inline.anyPunctuation,"$1")},h[0],this.lexer,this.rules)}}reflink(c,h){let p;if((p=this.rules.inline.reflink.exec(c))||(p=this.rules.inline.nolink.exec(c))){const v=(p[2]||p[1]).replace(this.rules.other.multipleSpaceGlobal," "),x=h[v.toLowerCase()];if(!x){const w=p[0].charAt(0);return{type:"text",raw:w,text:w}}return Ih(p,x,p[0],this.lexer,this.rules)}}emStrong(c,h,p=""){let v=this.rules.inline.emStrongLDelim.exec(c);if(!v||v[3]&&p.match(this.rules.other.unicodeAlphaNumeric))return;if(!(v[1]||v[2]||"")||!p||this.rules.inline.punctuation.exec(p)){const w=[...v[0]].length-1;let L,E,_=w,P=0;const j=v[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(j.lastIndex=0,h=h.slice(-1*c.length+w);(v=j.exec(h))!=null;){if(L=v[1]||v[2]||v[3]||v[4]||v[5]||v[6],!L)continue;if(E=[...L].length,v[3]||v[4]){_+=E;continue}else if((v[5]||v[6])&&w%3&&!((w+E)%3)){P+=E;continue}if(_-=E,_>0)continue;E=Math.min(E,E+_+P);const D=[...v[0]][0].length,I=c.slice(0,w+v.index+D+E);if(Math.min(w,E)%2){const oe=I.slice(1,-1);return{type:"em",raw:I,text:oe,tokens:this.lexer.inlineTokens(oe)}}const ee=I.slice(2,-2);return{type:"strong",raw:I,text:ee,tokens:this.lexer.inlineTokens(ee)}}}}codespan(c){const h=this.rules.inline.code.exec(c);if(h){let p=h[2].replace(this.rules.other.newLineCharGlobal," ");const v=this.rules.other.nonSpaceChar.test(p),x=this.rules.other.startingSpaceChar.test(p)&&this.rules.other.endingSpaceChar.test(p);return v&&x&&(p=p.substring(1,p.length-1)),{type:"codespan",raw:h[0],text:p}}}br(c){const h=this.rules.inline.br.exec(c);if(h)return{type:"br",raw:h[0]}}del(c){const h=this.rules.inline.del.exec(c);if(h)return{type:"del",raw:h[0],text:h[2],tokens:this.lexer.inlineTokens(h[2])}}autolink(c){const h=this.rules.inline.autolink.exec(c);if(h){let p,v;return h[2]==="@"?(p=h[1],v="mailto:"+p):(p=h[1],v=p),{type:"link",raw:h[0],text:p,href:v,tokens:[{type:"text",raw:p,text:p}]}}}url(c){var p;let h;if(h=this.rules.inline.url.exec(c)){let v,x;if(h[2]==="@")v=h[0],x="mailto:"+v;else{let w;do w=h[0],h[0]=((p=this.rules.inline._backpedal.exec(h[0]))==null?void 0:p[0])??"";while(w!==h[0]);v=h[0],h[1]==="www."?x="http://"+h[0]:x=h[0]}return{type:"link",raw:h[0],text:v,href:x,tokens:[{type:"text",raw:v,text:v}]}}}inlineText(c){const h=this.rules.inline.text.exec(c);if(h){const p=this.lexer.state.inRawBlock;return{type:"text",raw:h[0],text:h[0],escaped:p}}}},cs=class Rp{constructor(h){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=h||Ya,this.options.tokenizer=this.options.tokenizer||new hd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const p={other:Fr,block:nd.normal,inline:Bu.normal};this.options.pedantic?(p.block=nd.pedantic,p.inline=Bu.pedantic):this.options.gfm&&(p.block=nd.gfm,this.options.breaks?p.inline=Bu.breaks:p.inline=Bu.gfm),this.tokenizer.rules=p}static get rules(){return{block:nd,inline:Bu}}static lex(h,p){return new Rp(p).lex(h)}static lexInline(h,p){return new Rp(p).inlineTokens(h)}lex(h){h=h.replace(Fr.carriageReturn,`
`),this.blockTokens(h,this.tokens);for(let p=0;p<this.inlineQueue.length;p++){const v=this.inlineQueue[p];this.inlineTokens(v.src,v.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(h,p=[],v=!1){var x,w,L;for(this.options.pedantic&&(h=h.replace(Fr.tabCharGlobal,"    ").replace(Fr.spaceLine,""));h;){let E;if((w=(x=this.options.extensions)==null?void 0:x.block)!=null&&w.some(P=>(E=P.call({lexer:this},h,p))?(h=h.substring(E.raw.length),p.push(E),!0):!1))continue;if(E=this.tokenizer.space(h)){h=h.substring(E.raw.length);const P=p.at(-1);E.raw.length===1&&P!==void 0?P.raw+=`
`:p.push(E);continue}if(E=this.tokenizer.code(h)){h=h.substring(E.raw.length);const P=p.at(-1);(P==null?void 0:P.type)==="paragraph"||(P==null?void 0:P.type)==="text"?(P.raw+=`
`+E.raw,P.text+=`
`+E.text,this.inlineQueue.at(-1).src=P.text):p.push(E);continue}if(E=this.tokenizer.fences(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.heading(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.hr(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.blockquote(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.list(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.html(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.def(h)){h=h.substring(E.raw.length);const P=p.at(-1);(P==null?void 0:P.type)==="paragraph"||(P==null?void 0:P.type)==="text"?(P.raw+=`
`+E.raw,P.text+=`
`+E.raw,this.inlineQueue.at(-1).src=P.text):this.tokens.links[E.tag]||(this.tokens.links[E.tag]={href:E.href,title:E.title});continue}if(E=this.tokenizer.table(h)){h=h.substring(E.raw.length),p.push(E);continue}if(E=this.tokenizer.lheading(h)){h=h.substring(E.raw.length),p.push(E);continue}let _=h;if((L=this.options.extensions)!=null&&L.startBlock){let P=1/0;const j=h.slice(1);let D;this.options.extensions.startBlock.forEach(I=>{D=I.call({lexer:this},j),typeof D=="number"&&D>=0&&(P=Math.min(P,D))}),P<1/0&&P>=0&&(_=h.substring(0,P+1))}if(this.state.top&&(E=this.tokenizer.paragraph(_))){const P=p.at(-1);v&&(P==null?void 0:P.type)==="paragraph"?(P.raw+=`
`+E.raw,P.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=P.text):p.push(E),v=_.length!==h.length,h=h.substring(E.raw.length);continue}if(E=this.tokenizer.text(h)){h=h.substring(E.raw.length);const P=p.at(-1);(P==null?void 0:P.type)==="text"?(P.raw+=`
`+E.raw,P.text+=`
`+E.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=P.text):p.push(E);continue}if(h){const P="Infinite loop on byte: "+h.charCodeAt(0);if(this.options.silent){console.error(P);break}else throw new Error(P)}}return this.state.top=!0,p}inline(h,p=[]){return this.inlineQueue.push({src:h,tokens:p}),p}inlineTokens(h,p=[]){var E,_,P;let v=h,x=null;if(this.tokens.links){const j=Object.keys(this.tokens.links);if(j.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(v))!=null;)j.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(v=v.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.anyPunctuation.exec(v))!=null;)v=v.slice(0,x.index)+"++"+v.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(x=this.tokenizer.rules.inline.blockSkip.exec(v))!=null;)v=v.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let w=!1,L="";for(;h;){w||(L=""),w=!1;let j;if((_=(E=this.options.extensions)==null?void 0:E.inline)!=null&&_.some(I=>(j=I.call({lexer:this},h,p))?(h=h.substring(j.raw.length),p.push(j),!0):!1))continue;if(j=this.tokenizer.escape(h)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.tag(h)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.link(h)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.reflink(h,this.tokens.links)){h=h.substring(j.raw.length);const I=p.at(-1);j.type==="text"&&(I==null?void 0:I.type)==="text"?(I.raw+=j.raw,I.text+=j.text):p.push(j);continue}if(j=this.tokenizer.emStrong(h,v,L)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.codespan(h)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.br(h)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.del(h)){h=h.substring(j.raw.length),p.push(j);continue}if(j=this.tokenizer.autolink(h)){h=h.substring(j.raw.length),p.push(j);continue}if(!this.state.inLink&&(j=this.tokenizer.url(h))){h=h.substring(j.raw.length),p.push(j);continue}let D=h;if((P=this.options.extensions)!=null&&P.startInline){let I=1/0;const ee=h.slice(1);let oe;this.options.extensions.startInline.forEach(X=>{oe=X.call({lexer:this},ee),typeof oe=="number"&&oe>=0&&(I=Math.min(I,oe))}),I<1/0&&I>=0&&(D=h.substring(0,I+1))}if(j=this.tokenizer.inlineText(D)){h=h.substring(j.raw.length),j.raw.slice(-1)!=="_"&&(L=j.raw.slice(-1)),w=!0;const I=p.at(-1);(I==null?void 0:I.type)==="text"?(I.raw+=j.raw,I.text+=j.text):p.push(j);continue}if(h){const I="Infinite loop on byte: "+h.charCodeAt(0);if(this.options.silent){console.error(I);break}else throw new Error(I)}}return p}},fd=class{constructor(c){on(this,"options");on(this,"parser");this.options=c||Ya}space(c){return""}code({text:c,lang:h,escaped:p}){var w;const v=(w=(h||"").match(Fr.notSpaceStart))==null?void 0:w[0],x=c.replace(Fr.endingNewline,"")+`
`;return v?'<pre><code class="language-'+No(v)+'">'+(p?x:No(x,!0))+`</code></pre>
`:"<pre><code>"+(p?x:No(x,!0))+`</code></pre>
`}blockquote({tokens:c}){return`<blockquote>
${this.parser.parse(c)}</blockquote>
`}html({text:c}){return c}heading({tokens:c,depth:h}){return`<h${h}>${this.parser.parseInline(c)}</h${h}>
`}hr(c){return`<hr>
`}list(c){const h=c.ordered,p=c.start;let v="";for(let L=0;L<c.items.length;L++){const E=c.items[L];v+=this.listitem(E)}const x=h?"ol":"ul",w=h&&p!==1?' start="'+p+'"':"";return"<"+x+w+`>
`+v+"</"+x+`>
`}listitem(c){var p;let h="";if(c.task){const v=this.checkbox({checked:!!c.checked});c.loose?((p=c.tokens[0])==null?void 0:p.type)==="paragraph"?(c.tokens[0].text=v+" "+c.tokens[0].text,c.tokens[0].tokens&&c.tokens[0].tokens.length>0&&c.tokens[0].tokens[0].type==="text"&&(c.tokens[0].tokens[0].text=v+" "+No(c.tokens[0].tokens[0].text),c.tokens[0].tokens[0].escaped=!0)):c.tokens.unshift({type:"text",raw:v+" ",text:v+" ",escaped:!0}):h+=v+" "}return h+=this.parser.parse(c.tokens,!!c.loose),`<li>${h}</li>
`}checkbox({checked:c}){return"<input "+(c?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:c}){return`<p>${this.parser.parseInline(c)}</p>
`}table(c){let h="",p="";for(let x=0;x<c.header.length;x++)p+=this.tablecell(c.header[x]);h+=this.tablerow({text:p});let v="";for(let x=0;x<c.rows.length;x++){const w=c.rows[x];p="";for(let L=0;L<w.length;L++)p+=this.tablecell(w[L]);v+=this.tablerow({text:p})}return v&&(v=`<tbody>${v}</tbody>`),`<table>
<thead>
`+h+`</thead>
`+v+`</table>
`}tablerow({text:c}){return`<tr>
${c}</tr>
`}tablecell(c){const h=this.parser.parseInline(c.tokens),p=c.header?"th":"td";return(c.align?`<${p} align="${c.align}">`:`<${p}>`)+h+`</${p}>
`}strong({tokens:c}){return`<strong>${this.parser.parseInline(c)}</strong>`}em({tokens:c}){return`<em>${this.parser.parseInline(c)}</em>`}codespan({text:c}){return`<code>${No(c,!0)}</code>`}br(c){return"<br>"}del({tokens:c}){return`<del>${this.parser.parseInline(c)}</del>`}link({href:c,title:h,tokens:p}){const v=this.parser.parseInline(p),x=Ah(c);if(x===null)return v;c=x;let w='<a href="'+c+'"';return h&&(w+=' title="'+No(h)+'"'),w+=">"+v+"</a>",w}image({href:c,title:h,text:p,tokens:v}){v&&(p=this.parser.parseInline(v,this.parser.textRenderer));const x=Ah(c);if(x===null)return No(p);c=x;let w=`<img src="${c}" alt="${p}"`;return h&&(w+=` title="${No(h)}"`),w+=">",w}text(c){return"tokens"in c&&c.tokens?this.parser.parseInline(c.tokens):"escaped"in c&&c.escaped?c.text:No(c.text)}},nh=class{strong({text:c}){return c}em({text:c}){return c}codespan({text:c}){return c}del({text:c}){return c}html({text:c}){return c}text({text:c}){return c}link({text:c}){return""+c}image({text:c}){return""+c}br(){return""}},ds=class Ip{constructor(h){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=h||Ya,this.options.renderer=this.options.renderer||new fd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new nh}static parse(h,p){return new Ip(p).parse(h)}static parseInline(h,p){return new Ip(p).parseInline(h)}parse(h,p=!0){var x,w;let v="";for(let L=0;L<h.length;L++){const E=h[L];if((w=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&w[E.type]){const P=E,j=this.options.extensions.renderers[P.type].call({parser:this},P);if(j!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(P.type)){v+=j||"";continue}}const _=E;switch(_.type){case"space":{v+=this.renderer.space(_);continue}case"hr":{v+=this.renderer.hr(_);continue}case"heading":{v+=this.renderer.heading(_);continue}case"code":{v+=this.renderer.code(_);continue}case"table":{v+=this.renderer.table(_);continue}case"blockquote":{v+=this.renderer.blockquote(_);continue}case"list":{v+=this.renderer.list(_);continue}case"html":{v+=this.renderer.html(_);continue}case"paragraph":{v+=this.renderer.paragraph(_);continue}case"text":{let P=_,j=this.renderer.text(P);for(;L+1<h.length&&h[L+1].type==="text";)P=h[++L],j+=`
`+this.renderer.text(P);p?v+=this.renderer.paragraph({type:"paragraph",raw:j,text:j,tokens:[{type:"text",raw:j,text:j,escaped:!0}]}):v+=j;continue}default:{const P='Token with "'+_.type+'" type was not found.';if(this.options.silent)return console.error(P),"";throw new Error(P)}}}return v}parseInline(h,p=this.renderer){var x,w;let v="";for(let L=0;L<h.length;L++){const E=h[L];if((w=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&w[E.type]){const P=this.options.extensions.renderers[E.type].call({parser:this},E);if(P!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(E.type)){v+=P||"";continue}}const _=E;switch(_.type){case"escape":{v+=p.text(_);break}case"html":{v+=p.html(_);break}case"link":{v+=p.link(_);break}case"image":{v+=p.image(_);break}case"strong":{v+=p.strong(_);break}case"em":{v+=p.em(_);break}case"codespan":{v+=p.codespan(_);break}case"br":{v+=p.br(_);break}case"del":{v+=p.del(_);break}case"text":{v+=p.text(_);break}default:{const P='Token with "'+_.type+'" type was not found.';if(this.options.silent)return console.error(P),"";throw new Error(P)}}}return v}},Ep,id=(Ep=class{constructor(c){on(this,"options");on(this,"block");this.options=c||Ya}preprocess(c){return c}postprocess(c){return c}processAllTokens(c){return c}provideLexer(){return this.block?cs.lex:cs.lexInline}provideParser(){return this.block?ds.parse:ds.parseInline}},on(Ep,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Ep),hv=class{constructor(...c){on(this,"defaults",Yp());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",ds);on(this,"Renderer",fd);on(this,"TextRenderer",nh);on(this,"Lexer",cs);on(this,"Tokenizer",hd);on(this,"Hooks",id);this.use(...c)}walkTokens(c,h){var v,x;let p=[];for(const w of c)switch(p=p.concat(h.call(this,w)),w.type){case"table":{const L=w;for(const E of L.header)p=p.concat(this.walkTokens(E.tokens,h));for(const E of L.rows)for(const _ of E)p=p.concat(this.walkTokens(_.tokens,h));break}case"list":{const L=w;p=p.concat(this.walkTokens(L.items,h));break}default:{const L=w;(x=(v=this.defaults.extensions)==null?void 0:v.childTokens)!=null&&x[L.type]?this.defaults.extensions.childTokens[L.type].forEach(E=>{const _=L[E].flat(1/0);p=p.concat(this.walkTokens(_,h))}):L.tokens&&(p=p.concat(this.walkTokens(L.tokens,h)))}}return p}use(...c){const h=this.defaults.extensions||{renderers:{},childTokens:{}};return c.forEach(p=>{const v={...p};if(v.async=this.defaults.async||v.async||!1,p.extensions&&(p.extensions.forEach(x=>{if(!x.name)throw new Error("extension name required");if("renderer"in x){const w=h.renderers[x.name];w?h.renderers[x.name]=function(...L){let E=x.renderer.apply(this,L);return E===!1&&(E=w.apply(this,L)),E}:h.renderers[x.name]=x.renderer}if("tokenizer"in x){if(!x.level||x.level!=="block"&&x.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const w=h[x.level];w?w.unshift(x.tokenizer):h[x.level]=[x.tokenizer],x.start&&(x.level==="block"?h.startBlock?h.startBlock.push(x.start):h.startBlock=[x.start]:x.level==="inline"&&(h.startInline?h.startInline.push(x.start):h.startInline=[x.start]))}"childTokens"in x&&x.childTokens&&(h.childTokens[x.name]=x.childTokens)}),v.extensions=h),p.renderer){const x=this.defaults.renderer||new fd(this.defaults);for(const w in p.renderer){if(!(w in x))throw new Error(`renderer '${w}' does not exist`);if(["options","parser"].includes(w))continue;const L=w,E=p.renderer[L],_=x[L];x[L]=(...P)=>{let j=E.apply(x,P);return j===!1&&(j=_.apply(x,P)),j||""}}v.renderer=x}if(p.tokenizer){const x=this.defaults.tokenizer||new hd(this.defaults);for(const w in p.tokenizer){if(!(w in x))throw new Error(`tokenizer '${w}' does not exist`);if(["options","rules","lexer"].includes(w))continue;const L=w,E=p.tokenizer[L],_=x[L];x[L]=(...P)=>{let j=E.apply(x,P);return j===!1&&(j=_.apply(x,P)),j}}v.tokenizer=x}if(p.hooks){const x=this.defaults.hooks||new id;for(const w in p.hooks){if(!(w in x))throw new Error(`hook '${w}' does not exist`);if(["options","block"].includes(w))continue;const L=w,E=p.hooks[L],_=x[L];id.passThroughHooks.has(w)?x[L]=P=>{if(this.defaults.async)return Promise.resolve(E.call(x,P)).then(D=>_.call(x,D));const j=E.call(x,P);return _.call(x,j)}:x[L]=(...P)=>{let j=E.apply(x,P);return j===!1&&(j=_.apply(x,P)),j}}v.hooks=x}if(p.walkTokens){const x=this.defaults.walkTokens,w=p.walkTokens;v.walkTokens=function(L){let E=[];return E.push(w.call(this,L)),x&&(E=E.concat(x.call(this,L))),E}}this.defaults={...this.defaults,...v}}),this}setOptions(c){return this.defaults={...this.defaults,...c},this}lexer(c,h){return cs.lex(c,h??this.defaults)}parser(c,h){return ds.parse(c,h??this.defaults)}parseMarkdown(c){return(p,v)=>{const x={...v},w={...this.defaults,...x},L=this.onError(!!w.silent,!!w.async);if(this.defaults.async===!0&&x.async===!1)return L(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof p>"u"||p===null)return L(new Error("marked(): input parameter is undefined or null"));if(typeof p!="string")return L(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(p)+", string expected"));w.hooks&&(w.hooks.options=w,w.hooks.block=c);const E=w.hooks?w.hooks.provideLexer():c?cs.lex:cs.lexInline,_=w.hooks?w.hooks.provideParser():c?ds.parse:ds.parseInline;if(w.async)return Promise.resolve(w.hooks?w.hooks.preprocess(p):p).then(P=>E(P,w)).then(P=>w.hooks?w.hooks.processAllTokens(P):P).then(P=>w.walkTokens?Promise.all(this.walkTokens(P,w.walkTokens)).then(()=>P):P).then(P=>_(P,w)).then(P=>w.hooks?w.hooks.postprocess(P):P).catch(L);try{w.hooks&&(p=w.hooks.preprocess(p));let P=E(p,w);w.hooks&&(P=w.hooks.processAllTokens(P)),w.walkTokens&&this.walkTokens(P,w.walkTokens);let j=_(P,w);return w.hooks&&(j=w.hooks.postprocess(j)),j}catch(P){return L(P)}}}onError(c,h){return p=>{if(p.message+=`
Please report this to https://github.com/markedjs/marked.`,c){const v="<p>An error occurred:</p><pre>"+No(p.message+"",!0)+"</pre>";return h?Promise.resolve(v):v}if(h)return Promise.reject(p);throw p}}},Ga=new hv;function Kt(c,h){return Ga.parse(c,h)}Kt.options=Kt.setOptions=function(c){return Ga.setOptions(c),Kt.defaults=Ga.defaults,Ff(Kt.defaults),Kt};Kt.getDefaults=Yp;Kt.defaults=Ya;Kt.use=function(...c){return Ga.use(...c),Kt.defaults=Ga.defaults,Ff(Kt.defaults),Kt};Kt.walkTokens=function(c,h){return Ga.walkTokens(c,h)};Kt.parseInline=Ga.parseInline;Kt.Parser=ds;Kt.parser=ds.parse;Kt.Renderer=fd;Kt.TextRenderer=nh;Kt.Lexer=cs;Kt.lexer=cs.lex;Kt.Tokenizer=hd;Kt.Hooks=id;Kt.parse=Kt;Kt.options;Kt.setOptions;Kt.use;Kt.walkTokens;Kt.parseInline;ds.parse;cs.lex;/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */function Oh(c,h){(h==null||h>c.length)&&(h=c.length);for(var p=0,v=Array(h);p<h;p++)v[p]=c[p];return v}function fv(c){if(Array.isArray(c))return c}function mv(c,h){var p=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var v,x,w,L,E=[],_=!0,P=!1;try{if(w=(p=p.call(c)).next,h!==0)for(;!(_=(v=w.call(p)).done)&&(E.push(v.value),E.length!==h);_=!0);}catch(j){P=!0,x=j}finally{try{if(!_&&p.return!=null&&(L=p.return(),Object(L)!==L))return}finally{if(P)throw x}}return E}}function gv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function yv(c,h){return fv(c)||mv(c,h)||vv(c,h)||gv()}function vv(c,h){if(c){if(typeof c=="string")return Oh(c,h);var p={}.toString.call(c).slice(8,-1);return p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set"?Array.from(c):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?Oh(c,h):void 0}}const Xf=Object.entries,Mh=Object.setPrototypeOf,xv=Object.isFrozen,Qf=Object.getPrototypeOf,Zf=Object.getOwnPropertyDescriptor;let or=Object.freeze,Sr=Object.seal,Wl=Object.create,Jf=typeof Reflect<"u"&&Reflect,Op=Jf.apply,Mp=Jf.construct;or||(or=function(h){return h});Sr||(Sr=function(h){return h});Op||(Op=function(h,p){for(var v=arguments.length,x=new Array(v>2?v-2:0),w=2;w<v;w++)x[w-2]=arguments[w];return h.apply(p,x)});Mp||(Mp=function(h){for(var p=arguments.length,v=new Array(p>1?p-1:0),x=1;x<p;x++)v[x-1]=arguments[x];return new h(...v)});const as=bn(Array.prototype.forEach),bv=bn(Array.prototype.lastIndexOf),Dh=bn(Array.prototype.pop),qu=bn(Array.prototype.push),wv=bn(Array.prototype.slice),kv=bn(Array.prototype.splice),Bl=Array.isArray,yp=em(Set),vp=bn(Set.prototype.add),Ku=bn(Set.prototype.has),qa=bn(String.prototype.toLowerCase),xp=bn(String.prototype.toString),zh=bn(String.prototype.match),$u=bn(String.prototype.replace),Fh=bn(String.prototype.indexOf),Sv=bn(String.prototype.trim),_v=bn(Number.prototype.toString),Cv=bn(Boolean.prototype.toString),Wh=typeof BigInt>"u"?null:bn(BigInt.prototype.toString),Hh=typeof Symbol>"u"?null:bn(Symbol.prototype.toString),ei=bn(Object.prototype.hasOwnProperty),Gu=bn(Object.prototype.toString),kr=bn(RegExp.prototype.test),ls=em(TypeError);function bn(c){return function(h){h instanceof RegExp&&(h.lastIndex=0);for(var p=arguments.length,v=new Array(p>1?p-1:0),x=1;x<p;x++)v[x-1]=arguments[x];return Op(c,h,v)}}function em(c){return function(){for(var h=arguments.length,p=new Array(h),v=0;v<h;v++)p[v]=arguments[v];return Mp(c,p)}}function zt(c,h){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qa;if(Mh&&Mh(c,null),!Bl(h))return c;let v=h.length;for(;v--;){let x=h[v];if(typeof x=="string"){const w=p(x);w!==x&&(xv(h)||(h[v]=w),x=w)}c[x]=!0}return c}function Tv(c){for(let h=0;h<c.length;h++)ei(c,h)||(c[h]=null);return c}function gi(c){const h=Wl(null);for(const v of Xf(c)){var p=yv(v,2);const x=p[0],w=p[1];ei(c,x)&&(Bl(w)?h[x]=Tv(w):w&&typeof w=="object"&&w.constructor===Object?h[x]=gi(w):h[x]=w)}return h}function Nv(c){switch(typeof c){case"string":return c;case"number":return _v(c);case"boolean":return Cv(c);case"bigint":return Wh?Wh(c):"0";case"symbol":return Hh?Hh(c):"Symbol()";case"undefined":return Gu(c);case"function":case"object":{if(c===null)return Gu(c);const h=c,p=Oi(h,"toString");if(typeof p=="function"){const v=p(h);return typeof v=="string"?v:Gu(v)}return Gu(c)}default:return Gu(c)}}function Oi(c,h){for(;c!==null;){const v=Zf(c,h);if(v){if(v.get)return bn(v.get);if(typeof v.value=="function")return bn(v.value)}c=Qf(c)}function p(){return null}return p}function Ev(c,h){for(;c!==null;){const p=Zf(c,h);if(p)return p.get?bn(p.get):null;c=Qf(c)}return null}function Lv(c){try{return kr(c,""),!0}catch{return!1}}const Bh=or(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),bp=or(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),wp=or(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),jv=or(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),kp=or(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Pv=or(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Uh=or(["#text"]),qh=or(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Sp=or(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Kh=or(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),rd=or(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Av=Sr(/{{[\w\W]*|^[\w\W]*}}/g),Rv=Sr(/<%[\w\W]*|^[\w\W]*%>/g),Iv=Sr(/\${[\w\W]*/g),Ov=Sr(/^data-[\-\w.\u00B7-\uFFFF]+$/),Mv=Sr(/^aria-[\-\w]+$/),$h=Sr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Dv=Sr(/^(?:\w+script|data):/i),zv=Sr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fv=Sr(/^html$/i),Wv=Sr(/^[a-z][.\w]*(-[.\w]+)+$/i),_p=Sr(/<[/\w!]/g),Gh=Sr(/<[/\w]/g),Hv=Sr(/<\/no(script|embed|frames)/i),Yh=Sr(/\/>/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Bv=or(zt({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Uv=function(){return typeof window>"u"?null:window},qv=function(h,p){if(typeof h!="object"||typeof h.createPolicy!="function")return null;let v=null;const x="data-tt-policy-suffix";p&&p.hasAttribute(x)&&(v=p.getAttribute(x));const w="dompurify"+(v?"#"+v:"");try{return h.createPolicy(w,{createHTML(L){return L},createScriptURL(L){return L}})}catch{return console.warn("TrustedTypes policy "+w+" could not be created."),null}},Vh=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qs=function(h,p,v,x){return ei(h,p)&&Bl(h[p])?zt(x.base?gi(x.base):{},h[p],x.transform):v},Cp=function(h,p,v){const x=ei(h,p)?h[p]:void 0;return x&&typeof x=="object"?gi(x):v()};function tm(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Uv();const h=Se=>tm(Se);if(h.version="3.4.17",h.removed=[],!c||!c.document||c.document.nodeType!==Vn.document||!c.Element)return h.isSupported=!1,h;let p=c.document;const v=p,x=v.currentScript;c.DocumentFragment;const w=c.HTMLTemplateElement,L=c.Node,E=c.Element,_=c.NodeFilter;c.NamedNodeMap===void 0&&(c.NamedNodeMap||c.MozNamedAttrMap),c.HTMLFormElement;const P=c.DOMParser,j=c.trustedTypes,D=E.prototype,I=Oi(D,"cloneNode"),ee=Oi(D,"remove"),oe=Oi(D,"removeAttributeNode"),X=Oi(D,"nextSibling"),ue=Oi(D,"childNodes"),M=Oi(D,"parentNode"),W=Oi(D,"shadowRoot"),q=Oi(D,"attributes"),K=L&&L.prototype?Oi(L.prototype,"nodeType"):null,ie=L&&L.prototype?Oi(L.prototype,"nodeName"):null,pe=L&&L.prototype?Oi(L.prototype,"ownerDocument"):null,re=function(A){return K?K(A):A.nodeType},we=function(A){return ie?ie(A):A.nodeName},Fe=Ev(D,"namespaceURI"),_e=function(A){return Fe?Fe(A):A.namespaceURI};if(typeof w=="function"){const Se=p.createElement("template");Se.content&&Se.content.ownerDocument&&(p=Se.content.ownerDocument)}let $,Te="",ne,ye=!1,T=0;const Q=function(){if(T>0)throw ls('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},B=function(A){Q(),T++;try{return $.createHTML(A)}finally{T--}},C=function(A){Q(),T++;try{return $.createScriptURL(A)}finally{T--}},R=function(){return ye||(ne=qv(j,x),ye=!0),ne},Y=p,H=Y.implementation,ae=Y.createNodeIterator,De=Y.createDocumentFragment,Je=Y.getElementsByTagName,Ve=v.importNode;let ke=Vh();h.isSupported=typeof Xf=="function"&&typeof M=="function"&&H&&H.createHTMLDocument!==void 0;const Ie=Av,He=Rv,Be=Iv,tt=Ov,Ge=Mv,qt=Dv,Qt=zv,$t=Wv;let fn=$h,et=null;const bt=zt({},[...Bh,...bp,...wp,...kp,...Uh]);let lt=null;const Zt=zt({},[...qh,...Sp,...Kh,...rd]);let Ke=Object.seal(Wl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),vt=null,se=null;const Ce=Object.seal(Wl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ge=!0,xt=!0,$e=!1,ot=!0,qe=!1,mt=!0,dt=!1,mn=!1,Xn=null,_r=null,Wr=!1,sr=!1,yi=!1,gt=!1,Mi=!0,nt=!1;const Cr="user-content-";let Gt=!0,At=!1,Rt=null,En={},ln=null;const ar=zt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let wn=null;const ni=zt({},["audio","video","img","source","image","track"]);let In=null;const lr=zt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Hr="http://www.w3.org/1998/Math/MathML",Ln="http://www.w3.org/2000/svg",Tr="http://www.w3.org/1999/xhtml";let Qn=Tr,ri=!1,Br=null;const Ur=zt({},[Hr,Ln,Tr],xp),ur=or(["mi","mo","mn","ms","mtext"]);let qr=zt({},ur);const jo=or(["annotation-xml"]);let kn=zt({},jo);const hs=zt({},["title","style","font","a","script"]);let Ar=null;const Rr=["application/xhtml+xml","text/html"],Nr="text/html";let Ft=null,Er=null;const Di=p.createElement("form"),ii=function(A){return A instanceof RegExp||A instanceof Function},vi=function(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Er&&Er===A)return;(!A||typeof A!="object")&&(A={}),A=gi(A),Ar=Rr.indexOf(A.PARSER_MEDIA_TYPE)===-1?Nr:A.PARSER_MEDIA_TYPE,Ft=Ar==="application/xhtml+xml"?xp:qa,et=Qs(A,"ALLOWED_TAGS",bt,{transform:Ft}),lt=Qs(A,"ALLOWED_ATTR",Zt,{transform:Ft}),Br=Qs(A,"ALLOWED_NAMESPACES",Ur,{transform:xp}),In=Qs(A,"ADD_URI_SAFE_ATTR",lr,{transform:Ft,base:lr}),wn=Qs(A,"ADD_DATA_URI_TAGS",ni,{transform:Ft,base:ni}),ln=Qs(A,"FORBID_CONTENTS",ar,{transform:Ft}),vt=Qs(A,"FORBID_TAGS",gi({}),{transform:Ft}),se=Qs(A,"FORBID_ATTR",gi({}),{transform:Ft}),En=ei(A,"USE_PROFILES")?A.USE_PROFILES&&typeof A.USE_PROFILES=="object"?gi(A.USE_PROFILES):A.USE_PROFILES:!1,ge=A.ALLOW_ARIA_ATTR!==!1,xt=A.ALLOW_DATA_ATTR!==!1,$e=A.ALLOW_UNKNOWN_PROTOCOLS||!1,ot=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,qe=A.SAFE_FOR_TEMPLATES||!1,mt=A.SAFE_FOR_XML!==!1,dt=A.WHOLE_DOCUMENT||!1,sr=A.RETURN_DOM||!1,yi=A.RETURN_DOM_FRAGMENT||!1,gt=A.RETURN_TRUSTED_TYPE||!1,Wr=A.FORCE_BODY||!1,Mi=A.SANITIZE_DOM!==!1,nt=A.SANITIZE_NAMED_PROPS||!1,Gt=A.KEEP_CONTENT!==!1,At=A.IN_PLACE||!1,fn=Lv(A.ALLOWED_URI_REGEXP)?A.ALLOWED_URI_REGEXP:$h,Qn=typeof A.NAMESPACE=="string"?A.NAMESPACE:Tr,qr=Cp(A,"MATHML_TEXT_INTEGRATION_POINTS",()=>zt({},ur)),kn=Cp(A,"HTML_INTEGRATION_POINTS",()=>zt({},jo));const Z=Cp(A,"CUSTOM_ELEMENT_HANDLING",()=>Wl(null));if(Ke=Wl(null),ei(Z,"tagNameCheck")&&ii(Z.tagNameCheck)&&(Ke.tagNameCheck=Z.tagNameCheck),ei(Z,"attributeNameCheck")&&ii(Z.attributeNameCheck)&&(Ke.attributeNameCheck=Z.attributeNameCheck),ei(Z,"allowCustomizedBuiltInElements")&&typeof Z.allowCustomizedBuiltInElements=="boolean"&&(Ke.allowCustomizedBuiltInElements=Z.allowCustomizedBuiltInElements),Sr(Ke),qe&&(xt=!1),yi&&(sr=!0),En&&(et=zt({},Uh),lt=Wl(null),En.html===!0&&(zt(et,Bh),zt(lt,qh)),En.svg===!0&&(zt(et,bp),zt(lt,Sp),zt(lt,rd)),En.svgFilters===!0&&(zt(et,wp),zt(lt,Sp),zt(lt,rd)),En.mathMl===!0&&(zt(et,kp),zt(lt,Kh),zt(lt,rd))),Ce.tagCheck=null,Ce.attributeCheck=null,ei(A,"ADD_TAGS")&&(typeof A.ADD_TAGS=="function"?Ce.tagCheck=A.ADD_TAGS:Bl(A.ADD_TAGS)&&(et===bt&&(et=gi(et)),zt(et,A.ADD_TAGS,Ft))),ei(A,"ADD_ATTR")&&(typeof A.ADD_ATTR=="function"?Ce.attributeCheck=A.ADD_ATTR:Bl(A.ADD_ATTR)&&(lt===Zt&&(lt=gi(lt)),zt(lt,A.ADD_ATTR,Ft))),ei(A,"ADD_FORBID_CONTENTS")&&Bl(A.ADD_FORBID_CONTENTS)&&(ln===ar&&(ln=gi(ln)),zt(ln,A.ADD_FORBID_CONTENTS,Ft)),Gt&&(et["#text"]=!0),dt&&zt(et,["html","head","body"]),et.table&&(zt(et,["tbody"]),delete vt.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ls('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=$;$=A.TRUSTED_TYPES_POLICY;try{Te=B("")}catch(be){throw $=xe,be}}else A.TRUSTED_TYPES_POLICY===null?($=void 0,Te=""):($===void 0&&($=R()),$&&typeof Te=="string"&&(Te=B("")));or&&or(A),Er=A},jt=zt({},[...bp,...wp,...jv]),io=zt({},[...kp,...Pv]),xi=function(A,Z,xe){return Z.namespaceURI===Tr?A==="svg":Z.namespaceURI===Hr?A==="svg"&&(xe==="annotation-xml"||qr[xe]):!!jt[A]},Yt=function(A,Z,xe){return Z.namespaceURI===Tr?A==="math":Z.namespaceURI===Ln?A==="math"&&kn[xe]:!!io[A]},Xe=function(A,Z,xe){return Z.namespaceURI===Ln&&!kn[xe]||Z.namespaceURI===Hr&&!qr[xe]?!1:!io[A]&&(hs[A]||!jt[A])},oi=function(A){const Z=_e(A),xe=qa(we(A)),be=M(A);let Ze,ut;return be&&re(be)===Vn.element?(Ze={namespaceURI:_e(be)},ut=qa(we(be))):(Ze={namespaceURI:Qn},ut="template"),Br[Z]?Z===Ln?xi(xe,Ze,ut):Z===Hr?Yt(xe,Ze,ut):Z===Tr?Xe(xe,Ze,ut):!!(Ar==="application/xhtml+xml"&&Br[Z]):!1},cr=function(A){qu(h.removed,{element:A});try{M(A).removeChild(A)}catch{if(ee(A),!M(A))throw ls("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},On=function(A,Z,xe){try{oe(A,Z)}catch{try{A.removeAttribute(xe)}catch{}}},S=function(A){de(A);const Z=ue(A);Z&&as(wv(Z),be=>{try{ee(be)}catch{}});const xe=re(A)===Vn.element?q(A):null;if(xe)for(let be=xe.length-1;be>=0;--be){const Ze=xe[be],ut=Ze&&Ze.name;typeof ut=="string"&&On(A,Ze,ut)}},z=function(A,Z,xe){if(!xe)try{xe=Z.getAttributeNode(A)}catch{xe=null}qu(h.removed,{attribute:xe||null,from:Z});try{xe?oe(Z,xe):Z.removeAttribute(A)}catch{try{Z.removeAttribute(A)}catch{}}if(A==="is")if(sr||yi)try{cr(Z)}catch{}else try{Z.setAttribute(A,"")}catch{}},fe=function(A){const Z=q(A);if(Z)for(let xe=Z.length-1;xe>=0;--xe){const be=Z[xe],Ze=be&&be.name;typeof Ze!="string"||lt[Ft(Ze)]||On(A,be,Ze)}},Ne=function(A,Z){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const be=[A];for(;be.length>0;){const Ze=be.pop();if(Z(Ze)===!1)continue;if(xe&&re(Ze)===Vn.element){const kt=W(Ze);Kr(kt)&&be.push(kt)}const ut=ue(Ze);if(ut)for(let kt=ut.length-1;kt>=0;--kt)be.push(ut[kt])}},de=function(A){Ne(A,Z=>{re(Z)===Vn.element&&fe(Z)})},ze=function(A){const Z=[];return Ne(A,xe=>{Z.push(xe)},!0),Z},_t=function(A,Z){const xe=yp();as(ze(A),be=>{re(be)===Vn.element&&vp(xe,be)}),as(Z,be=>{re(be)===Vn.element&&!Ku(xe,be)&&fe(be)})},Jt=function(A,Z){let xe=!1;return as(h.removed,be=>{be.element&&(xe=xe||be.element===A,de(be.element))}),_t(A,Z),xe},Sn=8,si=function(A,Z){const xe=Rt;let be=null;const Ze=()=>(be||(be=yp(),as(Z,ut=>{vp(be,ut)})),be);for(let ut=0;;ut++){const kt=ze(A),gn=[A];let hr=!1;if(as(kt,un=>{re(un)===Vn.documentFragment?qu(gn,un):!hr&&!Ku(xe,un)&&(hr=Ku(Ze(),un))}),!hr)return;if(ut>=Sn)throw ls("the tree kept changing during in-place sanitization; refusing to return it");as(gn,(un,$n)=>{Va(un,$n>0,A,Ze())})}},Va=function(A,Z,xe,be){const Ze=Kn(A);let ut;for(;ut=Ze.nextNode();)!Ku(be,ut)||Ku(Rt,ut)||(Z&&dr(ke.uponSanitizeShadowNode,ut,null),Ir(ut,xe),Wi(ut,xe),Kr(ut.content)&&Oo(ut.content))},ft=function(A){Rt&&vp(Rt,A)},fs=function(A,Z){return mt?A==="patchsrc"?!0:A==="for"&&Z!=="label"&&Z!=="output":!1},ta=function(A){mt&&Ne(A,Z=>{const xe=re(Z);if(xe===Vn.processingInstruction||xe===Vn.comment&&kr(Gh,Z.data)){try{ee(Z)}catch{}return!1}if(xe===Vn.element){const be=Z,Ze=Ft(we(Z));try{be.hasAttribute&&be.hasAttribute("patchsrc")&&be.removeAttribute("patchsrc"),be.hasAttribute&&be.hasAttribute("for")&&fs("for",Ze)&&be.removeAttribute("for")}catch{}}return!0})},zi=function(A){let Z=null,xe=null;if(Wr)A="<remove></remove>"+A;else{const ut=zh(A,/^[\r\n\t ]+/);xe=ut&&ut[0]}Ar==="application/xhtml+xml"&&Qn===Tr&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");const be=$?B(A):A;if(Qn===Tr)try{Z=new P().parseFromString(be,Ar)}catch{}if(!Z||!Z.documentElement){Z=H.createDocument(Qn,"template",null);try{Z.documentElement.innerHTML=ri?Te:be}catch{}}const Ze=Z.body||Z.documentElement;return A&&xe&&Ze.insertBefore(p.createTextNode(xe),Ze.childNodes[0]||null),Qn===Tr?Je.call(Z,dt?"html":"body")[0]:dt?Z.documentElement:Ze},Kn=function(A){const Z=pe?pe(A):A.ownerDocument;return ae.call(Z||A,A,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT|_.SHOW_PROCESSING_INSTRUCTION|_.SHOW_CDATA_SECTION,null)},Po=function(A){return A=$u(A,Ie," "),A=$u(A,He," "),A=$u(A,Be," "),A},oo=function(A){var Z;Nt(A);const xe=(Z=A.querySelectorAll)===null||Z===void 0?void 0:Z.call(A,"template");xe&&as(xe,be=>{Kr(be.content)&&oo(be.content)})},Nt=function(A){A.normalize();const Z=pe?pe(A):A.ownerDocument,xe=ae.call(Z||A,A,_.SHOW_TEXT|_.SHOW_COMMENT|_.SHOW_CDATA_SECTION|_.SHOW_PROCESSING_INSTRUCTION,null);let be=xe.nextNode();for(;be;)be.data=Po(be.data),be=xe.nextNode()},Fi=function(A){const Z=ie?ie(A):null;return typeof Z!="string"||Ft(Z)!=="form"?!1:typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||A.attributes!==q(A)||typeof A.removeAttribute!="function"||typeof A.removeAttributeNode!="function"||typeof A.getAttributeNode!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function"||A.nodeType!==K(A)||A.childNodes!==ue(A)},Kr=function(A){if(!K||typeof A!="object"||A===null)return!1;try{return K(A)===Vn.documentFragment}catch{return!1}},ai=function(A){if(!K||typeof A!="object"||A===null)return!1;try{return typeof K(A)=="number"}catch{return!1}};function dr(Se,A,Z){Se.length!==0&&as(Se,xe=>{xe.call(h,A,Z,Er)})}const na=function(A,Z){return!!(mt&&A.hasChildNodes()&&!ai(A.firstElementChild)&&kr(_p,A.textContent)&&kr(_p,A.innerHTML)||mt&&Bv[Z]&&re(A)===Vn.element&&_e(A)===Tr&&(ai(A.firstElementChild)||typeof A.textContent=="string"&&kr(_p,A.textContent))||A.nodeType===Vn.processingInstruction||mt&&A.nodeType===Vn.comment&&kr(Gh,A.data))},so=function(A,Z){if(A instanceof RegExp)return kr(A,Z);if(A instanceof Function){for(var xe=arguments.length,be=new Array(xe>2?xe-2:0),Ze=2;Ze<xe;Ze++)be[Ze-2]=arguments[Ze];return!!A(Z,...be)}return!1},ms=function(A,Z,xe){if(!vt[Z]&&ao(Z)&&so(Ke.tagNameCheck,Z))return!1;if(Gt&&!ln[Z]&&!ln[qa(Z)]){const be=M(A),Ze=ue(A);if(Ze&&be){const ut=Ze.length;for(let kt=ut-1;kt>=0;--kt){const gn=A===xe?I(Ze[kt],!0):Ze[kt];be.insertBefore(gn,X(A))}}}return cr(A),!0},Ao=function(A,Z,xe,be){return A.length===0?Z:Z===xe||Z===be?gi(Z):Z},pr=function(A,Z){return A===Z||M(A)!==null?!1:(At&&de(A),!0)},Ir=function(A,Z){if(ft(A),dr(ke.beforeSanitizeElements,A,null),pr(A,Z))return!0;if(Fi(A))return cr(A),!0;const xe=Ft(we(A));if(et=Ao(ke.uponSanitizeElement,et,bt,Xn),dr(ke.uponSanitizeElement,A,{tagName:xe,allowedTags:et}),pr(A,Z))return!0;if(na(A,xe))return cr(A),!0;if(vt[xe]||!(Ce.tagCheck instanceof Function&&Ce.tagCheck(xe))&&!et[xe]){const be=ms(A,xe,Z);return be===!1&&(dr(ke.afterSanitizeElements,A,null),pr(A,Z))?!0:be}if(re(A)===Vn.element&&!oi(A)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&kr(Hv,A.innerHTML))return cr(A),!0;if(qe&&A.nodeType===Vn.text){const be=Po(A.textContent);A.textContent!==be&&(qu(h.removed,{element:A.cloneNode()}),A.textContent=be)}return dr(ke.afterSanitizeElements,A,null),pr(A,Z)},Mn=function(A,Z,xe){if(se[Z]||fs(Z,A)||Mi&&(Z==="id"||Z==="name")&&(xe in p||xe in Di))return!1;const be=lt[Z]||Ce.attributeCheck instanceof Function&&Ce.attributeCheck(Z,A);return xt&&kr(tt,Z)||ge&&kr(Ge,Z)?!0:be?In[Z]||kr(fn,$u(xe,Qt,""))||(Z==="src"||Z==="xlink:href"||Z==="href")&&A!=="script"&&Fh(xe,"data:")===0&&wn[A]||$e&&!kr(qt,$u(xe,Qt,""))?!0:!xe:ao(A)&&so(Ke.tagNameCheck,A)&&so(Ke.attributeNameCheck,Z,A)||Z==="is"&&Ke.allowCustomizedBuiltInElements&&so(Ke.tagNameCheck,xe)},Ro=zt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ao=function(A){return!Ro[qa(A)]&&kr($t,A)},Or=function(A,Z,xe,be){if($&&typeof j=="object"&&typeof j.getAttributeType=="function"&&!xe)switch(j.getAttributeType(A,Z)){case"TrustedHTML":return B(be);case"TrustedScriptURL":return C(be)}return be},Io=function(A,Z,xe,be){try{return xe?A.setAttributeNS(xe,Z,be):A.setAttribute(Z,be),Fi(A)?(cr(A),!1):!0}catch{return z(Z,A),!1}},ra=function(A,Z){return mt&&kr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Z)?!0:qa(A)==="attributename"&&zh(Z,"href")!==null},Wi=function(A,Z){if(dr(ke.beforeSanitizeAttributes,A,null),pr(A,Z))return;const xe=A.attributes;if(!xe||Fi(A))return;lt=Ao(ke.uponSanitizeAttribute,lt,Zt,_r);const be={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:lt,forceKeepAttr:void 0};let Ze=xe.length;const ut=Ft(A.nodeName);for(;Ze--;){const kt=xe[Ze],gn=kt.name,hr=kt.namespaceURI,un=kt.value,$n=Ft(gn),bi=un;let Pt=gn==="value"?bi:Sv(bi),ys=!1;if(be.attrName=$n,be.attrValue=Pt,be.keepAttr=!0,be.forceKeepAttr=void 0,dr(ke.uponSanitizeAttribute,A,be),Pt=be.attrValue,nt&&($n==="id"||$n==="name")&&Fh(Pt,Cr)!==0&&(z(gn,A,kt),Pt=Cr+Pt,ys=!0),ra(gn,Pt)){z(gn,A,kt);continue}if(!be.forceKeepAttr){if(!be.keepAttr){z(gn,A,kt);continue}if(!ot&&kr(Yh,Pt)){z(gn,A,kt);continue}if(qe&&(Pt=Po(Pt)),!Mn(ut,$n,Pt)){z(gn,A,kt);continue}Pt=Or(ut,$n,hr,Pt),Pt!==bi&&Io(A,gn,hr,Pt)&&ys&&Dh(h.removed)}}dr(ke.afterSanitizeAttributes,A,null),pr(A,Z)},Oo=function(A){let Z=null;const xe=Kn(A);for(dr(ke.beforeSanitizeShadowDOM,A,null);Z=xe.nextNode();)if(dr(ke.uponSanitizeShadowNode,Z,null),Ir(Z,A),Wi(Z,A),Kr(Z.content)&&Oo(Z.content),re(Z)===Vn.element){const be=W(Z);Kr(be)&&(gs(be),Oo(be))}qe&&Nt(A),dr(ke.afterSanitizeShadowDOM,A,null)},gs=function(A){const Z=[{node:A,shadow:null}];for(;Z.length>0;){const xe=Z.pop();if(xe.shadow){Oo(xe.shadow);continue}const be=xe.node,Ze=re(be)===Vn.element,ut=ue(be);if(ut)for(let kt=ut.length-1;kt>=0;--kt)Z.push({node:ut[kt],shadow:null});if(Ze){const kt=ie?ie(be):null;if(typeof kt=="string"&&Ft(kt)==="template"){const gn=be.content;Kr(gn)&&Z.push({node:gn,shadow:null})}}if(Ze){const kt=W(be);Kr(kt)&&Z.push({node:null,shadow:kt},{node:kt,shadow:null})}}};return h.sanitize=function(Se){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Z=null,xe=null,be=null,Ze=null;if(ri=!Se,ri&&(Se="<!-->"),typeof Se!="string"&&!ai(Se)&&(Se=Nv(Se),typeof Se!="string"))throw ls("dirty is not a string, aborting");if(!h.isSupported)return Se;mn?(et=Xn,lt=_r):vi(A),(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&(et=gi(et)),ke.uponSanitizeAttribute.length>0&&(lt=gi(lt)),h.removed=[];const ut=At&&typeof Se!="string"&&ai(Se);let kt=[];const gn=Rt;if(ut){ta(Se);const $n=we(Se);if(typeof $n=="string"){const bi=Ft($n);if(!et[bi]||vt[bi])throw S(Se),ls("root node is forbidden and cannot be sanitized in-place")}if(Fi(Se))throw S(Se),ls("root node is clobbered and cannot be sanitized in-place");kt=ze(Se),Rt=yp()}else if(ai(Se))Z=zi("<!---->"),xe=Z.ownerDocument.importNode(Se,!0),xe.nodeType===Vn.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?Z=xe:Z.appendChild(xe),gs(Z);else{if(!sr&&!qe&&!dt&&Se.indexOf("<")===-1)return $&&gt?B(Se):Se;if(Z=zi(Se),!Z)return sr?null:gt?Te:""}Z&&Wr&&cr(Z.firstChild);const hr=ut?Se:Z;try{ut&&gs(Se);const $n=Kn(hr);for(;be=$n.nextNode();)Ir(be,hr),Wi(be,hr),Kr(be.content)&&Oo(be.content);ut&&si(Se,kt)}catch($n){throw ut&&(S(Se),Jt(Se,kt)),$n}finally{Rt=gn}if(ut){if(Jt(Se,kt))throw ls("a node selected for removal could not be safely returned; refusing to sanitize in place");return qe&&oo(Se),Se}if(sr){if(qe&&oo(Z),yi)for(Ze=De.call(Z.ownerDocument);Z.firstChild;)Ze.appendChild(Z.firstChild);else Ze=Z;return(lt.shadowroot||lt.shadowrootmode)&&(Ze=Ve.call(v,Ze,!0)),Ze}let un=dt?Z.outerHTML:Z.innerHTML;return dt&&et["!doctype"]&&Z.ownerDocument&&Z.ownerDocument.doctype&&Z.ownerDocument.doctype.name&&kr(Fv,Z.ownerDocument.doctype.name)&&(un="<!DOCTYPE "+Z.ownerDocument.doctype.name+`>
`+un),qe&&(un=Po(un)),$&&gt?B(un):un},h.setConfig=function(){let Se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};vi(Se),mn=!0,Xn=et,_r=lt},h.clearConfig=function(){Er=null,mn=!1,Xn=null,_r=null,$=ne,Te=""},h.isValidAttribute=function(Se,A,Z){Er||vi({});const xe=Ft(Se),be=Ft(A);return typeof Z=="string"&&(ra(A,Z)||!ot&&kr(Yh,Z))?!1:Mn(xe,be,Z)},h.addHook=function(Se,A){typeof A=="function"&&ei(ke,Se)&&qu(ke[Se],A)},h.removeHook=function(Se,A){if(ei(ke,Se)){if(A!==void 0){const Z=bv(ke[Se],A);return Z===-1?void 0:kv(ke[Se],Z,1)[0]}return Dh(ke[Se])}},h.removeHooks=function(Se){ei(ke,Se)&&(ke[Se]=[])},h.removeAllHooks=function(){ke=Vh()},h}var Kv=tm();function $v(c,h=null){const p=String(c||""),v=p.split(`
`),x=v.findIndex(_=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(_)),w=x===-1?-1:v.findIndex((_,P)=>P>x&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(_)),L=x>=0?v.slice(x,w<0?v.length:w).join(`
`):`# Solve

${(h==null?void 0:h.challenge)||"Try the lesson task before looking at the guide."}`,E=x>=0?[...v.slice(0,x),...w<0?[]:v.slice(w)].join(`
`).trim():p;return{solve:L,learn:E}}function Gv(c){const h=String(c||"").split(`
`),p=[];let v=null;h.forEach((L,E)=>{const _=L.trim(),P=/^(`{3,}|~{3,})/.exec(_);if(P){const ee=P[1];v?v.char===ee[0]&&ee.length>=v.length&&(v=null):v={char:ee[0],length:ee.length};return}if(v)return;const j=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(L);if(!j)return;const D=j[2],I=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(D);p.push({index:E,level:j[1].length,numbered:I})});const x=p.filter(L=>L.numbered),w=(x.length?x:p.filter(L=>L.level===2)).map(L=>L.index);return w.length?{intro:h.slice(0,w[0]).join(`
`).trim(),steps:w.map((L,E)=>h.slice(L,w[E+1]??h.length).join(`
`).trim())}:{intro:h.join(`
`),steps:[]}}const Yv=Object.assign({"../content/capstone-discovery.md":oy,"../content/capstone-feedback.md":sy,"../content/capstone-interviews.md":ay,"../content/capstone-prototype.md":ly,"../content/csharp-conditionals.md":uy,"../content/csharp-variables.md":cy,"../content/python-decisions.md":dy,"../content/python-formatting.md":py,"../content/python-lists.md":hy,"../content/python-loops.md":fy,"../content/python-strings.md":my,"../content/python-variables.md":gy,"../content/react-components.md":yy,"../content/react-state.md":vy,"../content/tsi-equations.md":xy,"../content/tsi-percents.md":by,"../content/tsi-ratios.md":wy,"../content/tsi-slope.md":ky,"../content/uil-arrays.md":Sy,"../content/uil-loops.md":_y,"../content/uil-methods.md":Cy,"../content/uil-strings.md":Ty,"../content/unity-colliders.md":Ny,"../content/unity-player-controller.md":Ey,"../content/unity-score.md":Ly,"../content/web-events.md":jy,"../content/web-layout.md":Py}),Vv="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Xv=c=>Yv[`../content/${c}.md`]||Vv,nm=c=>Kv.sanitize(Kt.parse(c,{breaks:!1,gfm:!0}));function Qv(c,h=""){if(!(c!=null&&c.isPublished))return"";let p="";const v=Array.isArray(c.cases)?c.cases:[];v.length&&!/##\s+(?:Published )?Examples\b/i.test(h)&&(p+=`

### Published examples
`,v.forEach((w,L)=>{p+=`
**Example `+(L+1)+`**

`,w.call&&(p+="Input: `"+w.call+`\`

`),p+=c.mode==="function"?`Expected return:
`:`Expected output:
`,p+="\n```text\n"+String(w.expected??"")+"\n```\n"}));const x=Array.isArray(c.hints)?c.hints:[];return x.length&&!/<details(?:\s|>)/i.test(h)&&(p+=`

### Need a hint?
`,x.forEach((w,L)=>{p+=`
<details>
<summary>Hint `+(L+1)+`</summary>

`+String(w).replaceAll("<","&lt;")+`

</details>
`})),p}function Xh(c,h){if(!h)return c;const p="https://github.com/mswhitby/computer-science-1/blob/main/units/",v=new URL(h,p);return String(c).replace(/\]\(([^)]+)\)/g,(x,w)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(w))return x;const[L,...E]=w.split(" ");try{const _=new URL(L,v);return _.origin!==v.origin?x:"]("+_.href+(E.length?" "+E.join(" "):"")+")"}catch{return x}})}const rm={markdown:c=>`designlab:md:${c}`,code:c=>`designlab:code:${c}`};function md(c){try{return localStorage.getItem(c)}catch{return null}}function gd(c,h){try{localStorage.setItem(c,h)}catch{}}function Zv(c){try{localStorage.removeItem(c)}catch{}}function Qh({lessonId:c,task:h,isTsi:p=!1,tsiAnswer:v=null}){var K;const x=(h==null?void 0:h.markdownSource)||Xv(c),w=rm.markdown(c),[L,E]=We.useState(x),[_,P]=We.useState(p?"learn":"solve"),[j,D]=We.useState(0),[I,ee]=We.useState(!1);We.useEffect(()=>{E(md(w)??x),P(p?"learn":"solve"),D(0),ee(!1)},[w,x,p]);const oe=We.useMemo(()=>{const ie=$v(L,h),pe=ie.solve+Qv(h,ie.solve);return{solve:Xh(pe,h==null?void 0:h.markdown),learn:Xh(ie.learn,h==null?void 0:h.markdown)}},[L,h]),X=We.useMemo(()=>Gv(oe.learn),[oe.learn]),ue=!p&&_==="learn"&&X.steps.length>0,M=Math.min(j,Math.max(0,X.steps.length-1)),W=p?oe.learn:_==="solve"?oe.solve:ue?X.intro+`

`+X.steps[M]:oe.learn,q=We.useMemo(()=>nm(W),[W]);return d.jsxs("section",{className:"instructions-pane",children:[d.jsxs("div",{className:"pane-header",children:[p?d.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):d.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[d.jsx("button",{role:"tab","aria-selected":_==="solve",className:_==="solve"?"active":"",onClick:()=>{P("solve"),D(0)},children:"Solve"}),d.jsx("button",{role:"tab","aria-selected":_==="learn",className:_==="learn"?"active":"",onClick:()=>{P("learn"),D(0)},children:"Learn"})]}),d.jsx("button",{type:"button",className:us("icon-button",I&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>ee(!I),children:d.jsx(Ig,{size:16})})]}),I?d.jsxs("div",{className:"markdown-source",children:[d.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),d.jsx("textarea",{"aria-label":"Markdown source",value:L,onChange:ie=>{E(ie.target.value),D(0),gd(w,ie.target.value)}}),d.jsx("button",{type:"button",className:"btn",onClick:()=>{Zv(w),E(x),D(0)},children:"Reset lesson text"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[d.jsx("div",{dangerouslySetInnerHTML:{__html:q}}),p&&v&&d.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[d.jsx("h3",{children:v.correct?"Why that works":"Review the solution"}),d.jsx("p",{children:(K=zf[c])==null?void 0:K.explanation})]})]}),ue&&d.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[M>0&&d.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>D(ie=>Math.max(0,ie-1)),children:[d.jsx(Of,{size:16,"aria-hidden":"true"})," Previous"]}),d.jsxs("span",{children:["Step ",M+1," of ",X.steps.length]}),M<X.steps.length-1&&d.jsxs("button",{type:"button",className:"step-link next",onClick:()=>D(ie=>Math.min(X.steps.length-1,ie+1)),children:["Next ",d.jsx($a,{size:16,"aria-hidden":"true"})]})]})]})]})}var od={exports:{}},Jv=od.exports,Zh;function ro(){return Zh||(Zh=1,(function(c,h){(function(p,v){c.exports=v()})(Jv,(function(){var p=navigator.userAgent,v=navigator.platform,x=/gecko\/\d/i.test(p),w=/MSIE \d/.test(p),L=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(p),E=/Edge\/(\d+)/.exec(p),_=w||L||E,P=_&&(w?document.documentMode||6:+(E||L)[1]),j=!E&&/WebKit\//.test(p),D=j&&/Qt\/\d+\.\d+/.test(p),I=!E&&/Chrome\/(\d+)/.exec(p),ee=I&&+I[1],oe=/Opera\//.test(p),X=/Apple Computer/.test(navigator.vendor),ue=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(p),M=/PhantomJS/.test(p),W=X&&(/Mobile\/\w+/.test(p)||navigator.maxTouchPoints>2),q=/Android/.test(p),K=W||q||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(p),ie=W||/Mac/.test(v),pe=/\bCrOS\b/.test(p),re=/win/i.test(v),we=oe&&p.match(/Version\/(\d*\.\d*)/);we&&(we=Number(we[1])),we&&we>=15&&(oe=!1,j=!0);var Fe=ie&&(D||oe&&(we==null||we<12.11)),_e=x||_&&P>=9;function $(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Te=function(e,n){var o=e.className,i=$(n).exec(o);if(i){var s=o.slice(i.index+i[0].length);e.className=o.slice(0,i.index)+(s?i[1]+s:"")}};function ne(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ye(e,n){return ne(e).appendChild(n)}function T(e,n,o,i){var s=document.createElement(e);if(o&&(s.className=o),i&&(s.style.cssText=i),typeof n=="string")s.appendChild(document.createTextNode(n));else if(n)for(var u=0;u<n.length;++u)s.appendChild(n[u]);return s}function Q(e,n,o,i){var s=T(e,n,o,i);return s.setAttribute("role","presentation"),s}var B;document.createRange?B=function(e,n,o,i){var s=document.createRange();return s.setEnd(i||e,o),s.setStart(e,n),s}:B=function(e,n,o){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",o),i.moveStart("character",n),i};function C(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function R(e){var n=e.ownerDocument||e,o;try{o=e.activeElement}catch{o=n.body||null}for(;o&&o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}function Y(e,n){var o=e.className;$(n).test(o)||(e.className+=(o?" ":"")+n)}function H(e,n){for(var o=e.split(" "),i=0;i<o.length;i++)o[i]&&!$(o[i]).test(n)&&(n+=" "+o[i]);return n}var ae=function(e){e.select()};W?ae=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:_&&(ae=function(e){try{e.select()}catch{}});function De(e){return e.display.wrapper.ownerDocument}function Je(e){return Ve(e.display.wrapper)}function Ve(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function ke(e){return De(e).defaultView}function Ie(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function He(e,n,o){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Be(e,n,o,i,s){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var u=i||0,m=s||0;;){var y=e.indexOf("	",u);if(y<0||y>=n)return m+(n-u);m+=y-u,m+=o-m%o,u=y+1}}var tt=function(){this.id=null,this.f=null,this.time=0,this.handler=Ie(this.onTimeout,this)};tt.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},tt.prototype.set=function(e,n){this.f=n;var o=+new Date+e;(!this.id||o<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=o)};function Ge(e,n){for(var o=0;o<e.length;++o)if(e[o]==n)return o;return-1}var qt=50,Qt={toString:function(){return"CodeMirror.Pass"}},$t={scroll:!1},fn={origin:"*mouse"},et={origin:"+move"};function bt(e,n,o){for(var i=0,s=0;;){var u=e.indexOf("	",i);u==-1&&(u=e.length);var m=u-i;if(u==e.length||s+m>=n)return i+Math.min(m,n-s);if(s+=u-i,s+=o-s%o,i=u+1,s>=n)return i}}var lt=[""];function Zt(e){for(;lt.length<=e;)lt.push(Ke(lt)+" ");return lt[e]}function Ke(e){return e[e.length-1]}function vt(e,n){for(var o=[],i=0;i<e.length;i++)o[i]=n(e[i],i);return o}function se(e,n,o){for(var i=0,s=o(n);i<e.length&&o(e[i])<=s;)i++;e.splice(i,0,n)}function Ce(){}function ge(e,n){var o;return Object.create?o=Object.create(e):(Ce.prototype=e,o=new Ce),n&&He(n,o),o}var xt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function $e(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||xt.test(e))}function ot(e,n){return n?n.source.indexOf("\\w")>-1&&$e(e)?!0:n.test(e):$e(e)}function qe(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function dt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function mn(e,n,o){for(;(o<0?n>0:n<e.length)&&dt(e.charAt(n));)n+=o;return n}function Xn(e,n,o){for(var i=n>o?-1:1;;){if(n==o)return n;var s=(n+o)/2,u=i<0?Math.ceil(s):Math.floor(s);if(u==n)return e(u)?n:o;e(u)?o=u:n=u+i}}function _r(e,n,o,i){if(!e)return i(n,o,"ltr",0);for(var s=!1,u=0;u<e.length;++u){var m=e[u];(m.from<o&&m.to>n||n==o&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,o),m.level==1?"rtl":"ltr",u),s=!0)}s||i(n,o,"ltr")}var Wr=null;function sr(e,n,o){var i;Wr=null;for(var s=0;s<e.length;++s){var u=e[s];if(u.from<n&&u.to>n)return s;u.to==n&&(u.from!=u.to&&o=="before"?i=s:Wr=s),u.from==n&&(u.from!=u.to&&o!="before"?i=s:Wr=s)}return i??Wr}var yi=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function o(k){return k<=247?e.charAt(k):1424<=k&&k<=1524?"R":1536<=k&&k<=1785?n.charAt(k-1536):1774<=k&&k<=2220?"r":8192<=k&&k<=8203?"w":k==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,s=/[stwN]/,u=/[LRr]/,m=/[Lb1n]/,y=/[1n]/;function b(k,O,F){this.level=k,this.from=O,this.to=F}return function(k,O){var F=O=="ltr"?"L":"R";if(k.length==0||O=="ltr"&&!i.test(k))return!1;for(var te=k.length,V=[],me=0;me<te;++me)V.push(o(k.charCodeAt(me)));for(var ve=0,je=F;ve<te;++ve){var Ee=V[ve];Ee=="m"?V[ve]=je:je=Ee}for(var Oe=0,Re=F;Oe<te;++Oe){var Ue=V[Oe];Ue=="1"&&Re=="r"?V[Oe]="n":u.test(Ue)&&(Re=Ue,Ue=="r"&&(V[Oe]="R"))}for(var st=1,Ye=V[0];st<te-1;++st){var wt=V[st];wt=="+"&&Ye=="1"&&V[st+1]=="1"?V[st]="1":wt==","&&Ye==V[st+1]&&(Ye=="1"||Ye=="n")&&(V[st]=Ye),Ye=wt}for(var Ct=0;Ct<te;++Ct){var Bn=V[Ct];if(Bn==",")V[Ct]="N";else if(Bn=="%"){var nn=void 0;for(nn=Ct+1;nn<te&&V[nn]=="%";++nn);for(var vr=Ct&&V[Ct-1]=="!"||nn<te&&V[nn]=="1"?"1":"N",rr=Ct;rr<nn;++rr)V[rr]=vr;Ct=nn-1}}for(var vn=0,xr=F;vn<te;++vn){var Nn=V[vn];xr=="L"&&Nn=="1"?V[vn]="L":u.test(Nn)&&(xr=Nn)}for(var xn=0;xn<te;++xn)if(s.test(V[xn])){var Mt=void 0;for(Mt=xn+1;Mt<te&&s.test(V[Mt]);++Mt);for(var ct=(xn?V[xn-1]:F)=="L",Dt=(Mt<te?V[Mt]:F)=="L",rn=ct==Dt?ct?"L":"R":F,an=xn;an<Mt;++an)V[an]=rn;xn=Mt-1}for(var Bt=[],br,Tt=0;Tt<te;)if(m.test(V[Tt])){var os=Tt;for(++Tt;Tt<te&&m.test(V[Tt]);++Tt);Bt.push(new b(0,os,Tt))}else{var wr=Tt,Ri=Bt.length,Ji=O=="rtl"?1:0;for(++Tt;Tt<te&&V[Tt]!="L";++Tt);for(var An=wr;An<Tt;)if(y.test(V[An])){wr<An&&(Bt.splice(Ri,0,new b(1,wr,An)),Ri+=Ji);var Un=An;for(++An;An<Tt&&y.test(V[An]);++An);Bt.splice(Ri,0,new b(2,Un,An)),Ri+=Ji,wr=An}else++An;wr<Tt&&Bt.splice(Ri,0,new b(1,wr,Tt))}return O=="ltr"&&(Bt[0].level==1&&(br=k.match(/^\s+/))&&(Bt[0].from=br[0].length,Bt.unshift(new b(0,0,br[0].length))),Ke(Bt).level==1&&(br=k.match(/\s+$/))&&(Ke(Bt).to-=br[0].length,Bt.push(new b(0,te-br[0].length,te)))),O=="rtl"?Bt.reverse():Bt}})();function gt(e,n){var o=e.order;return o==null&&(o=e.order=yi(e.text,n)),o}var Mi=[],nt=function(e,n,o){if(e.addEventListener)e.addEventListener(n,o,!1);else if(e.attachEvent)e.attachEvent("on"+n,o);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||Mi).concat(o)}};function Cr(e,n){return e._handlers&&e._handlers[n]||Mi}function Gt(e,n,o){if(e.removeEventListener)e.removeEventListener(n,o,!1);else if(e.detachEvent)e.detachEvent("on"+n,o);else{var i=e._handlers,s=i&&i[n];if(s){var u=Ge(s,o);u>-1&&(i[n]=s.slice(0,u).concat(s.slice(u+1)))}}}function At(e,n){var o=Cr(e,n);if(o.length)for(var i=Array.prototype.slice.call(arguments,2),s=0;s<o.length;++s)o[s].apply(null,i)}function Rt(e,n,o){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),At(e,o||n.type,e,n),In(n)||n.codemirrorIgnore}function En(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var o=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)Ge(o,n[i])==-1&&o.push(n[i])}function ln(e,n){return Cr(e,n).length>0}function ar(e){e.prototype.on=function(n,o){nt(this,n,o)},e.prototype.off=function(n,o){Gt(this,n,o)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function In(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function lr(e){wn(e),ni(e)}function Hr(e){return e.target||e.srcElement}function Ln(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),ie&&e.ctrlKey&&n==1&&(n=3),n}var Tr=(function(){if(_&&P<9)return!1;var e=T("div");return"draggable"in e||"dragDrop"in e})(),Qn;function ri(e){if(Qn==null){var n=T("span","​");ye(e,T("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(Qn=n.offsetWidth<=1&&n.offsetHeight>2&&!(_&&P<8))}var o=Qn?T("span","​"):T("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return o.setAttribute("cm-text",""),o}var Br;function Ur(e){if(Br!=null)return Br;var n=ye(e,document.createTextNode("AخA")),o=B(n,0,1).getBoundingClientRect(),i=B(n,1,2).getBoundingClientRect();return ne(e),!o||o.left==o.right?!1:Br=i.right-o.right<3}var ur=`

b`.split(/\n/).length!=3?function(e){for(var n=0,o=[],i=e.length;n<=i;){var s=e.indexOf(`
`,n);s==-1&&(s=e.length);var u=e.slice(n,e.charAt(s-1)=="\r"?s-1:s),m=u.indexOf("\r");m!=-1?(o.push(u.slice(0,m)),n+=m+1):(o.push(u),n=s+1)}return o}:function(e){return e.split(/\r\n?|\n/)},qr=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},jo=(function(){var e=T("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),kn=null;function hs(e){if(kn!=null)return kn;var n=ye(e,T("span","x")),o=n.getBoundingClientRect(),i=B(n,0,1).getBoundingClientRect();return kn=Math.abs(o.left-i.left)>1}var Ar={},Rr={};function Nr(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Ar[e]=n}function Ft(e,n){Rr[e]=n}function Er(e){if(typeof e=="string"&&Rr.hasOwnProperty(e))e=Rr[e];else if(e&&typeof e.name=="string"&&Rr.hasOwnProperty(e.name)){var n=Rr[e.name];typeof n=="string"&&(n={name:n}),e=ge(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Er("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Er("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Di(e,n){n=Er(n);var o=Ar[n.name];if(!o)return Di(e,"text/plain");var i=o(e,n);if(ii.hasOwnProperty(n.name)){var s=ii[n.name];for(var u in s)s.hasOwnProperty(u)&&(i.hasOwnProperty(u)&&(i["_"+u]=i[u]),i[u]=s[u])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var ii={};function vi(e,n){var o=ii.hasOwnProperty(e)?ii[e]:ii[e]={};He(n,o)}function jt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var o={};for(var i in n){var s=n[i];s instanceof Array&&(s=s.concat([])),o[i]=s}return o}function io(e,n){for(var o;e.innerMode&&(o=e.innerMode(n),!(!o||o.mode==e));)n=o.state,e=o.mode;return o||{mode:e,state:n}}function xi(e,n,o){return e.startState?e.startState(n,o):!0}var Yt=function(e,n,o){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=o};Yt.prototype.eol=function(){return this.pos>=this.string.length},Yt.prototype.sol=function(){return this.pos==this.lineStart},Yt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Yt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Yt.prototype.eat=function(e){var n=this.string.charAt(this.pos),o;if(typeof e=="string"?o=n==e:o=n&&(e.test?e.test(n):e(n)),o)return++this.pos,n},Yt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Yt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Yt.prototype.skipToEnd=function(){this.pos=this.string.length},Yt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Yt.prototype.backUp=function(e){this.pos-=e},Yt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Be(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Be(this.string,this.lineStart,this.tabSize):0)},Yt.prototype.indentation=function(){return Be(this.string,null,this.tabSize)-(this.lineStart?Be(this.string,this.lineStart,this.tabSize):0)},Yt.prototype.match=function(e,n,o){if(typeof e=="string"){var i=function(m){return o?m.toLowerCase():m},s=this.string.substr(this.pos,e.length);if(i(s)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var u=this.string.slice(this.pos).match(e);return u&&u.index>0?null:(u&&n!==!1&&(this.pos+=u[0].length),u)}},Yt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Yt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Yt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Yt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Xe(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var o=e;!o.lines;)for(var i=0;;++i){var s=o.children[i],u=s.chunkSize();if(n<u){o=s;break}n-=u}return o.lines[n]}function oi(e,n,o){var i=[],s=n.line;return e.iter(n.line,o.line+1,function(u){var m=u.text;s==o.line&&(m=m.slice(0,o.ch)),s==n.line&&(m=m.slice(n.ch)),i.push(m),++s}),i}function cr(e,n,o){var i=[];return e.iter(n,o,function(s){i.push(s.text)}),i}function On(e,n){var o=n-e.height;if(o)for(var i=e;i;i=i.parent)i.height+=o}function S(e){if(e.parent==null)return null;for(var n=e.parent,o=Ge(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var s=0;i.children[s]!=n;++s)o+=i.children[s].chunkSize();return o+n.first}function z(e,n){var o=e.first;e:do{for(var i=0;i<e.children.length;++i){var s=e.children[i],u=s.height;if(n<u){e=s;continue e}n-=u,o+=s.chunkSize()}return o}while(!e.lines);for(var m=0;m<e.lines.length;++m){var y=e.lines[m],b=y.height;if(n<b)break;n-=b}return o+m}function fe(e,n){return n>=e.first&&n<e.first+e.size}function Ne(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function de(e,n,o){if(o===void 0&&(o=null),!(this instanceof de))return new de(e,n,o);this.line=e,this.ch=n,this.sticky=o}function ze(e,n){return e.line-n.line||e.ch-n.ch}function _t(e,n){return e.sticky==n.sticky&&ze(e,n)==0}function Jt(e){return de(e.line,e.ch)}function Sn(e,n){return ze(e,n)<0?n:e}function si(e,n){return ze(e,n)<0?e:n}function Va(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function ft(e,n){if(n.line<e.first)return de(e.first,0);var o=e.first+e.size-1;return n.line>o?de(o,Xe(e,o).text.length):fs(n,Xe(e,n.line).text.length)}function fs(e,n){var o=e.ch;return o==null||o>n?de(e.line,n):o<0?de(e.line,0):e}function ta(e,n){for(var o=[],i=0;i<n.length;i++)o[i]=ft(e,n[i]);return o}var zi=function(e,n){this.state=e,this.lookAhead=n},Kn=function(e,n,o,i){this.state=n,this.doc=e,this.line=o,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};Kn.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},Kn.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},Kn.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},Kn.fromSaved=function(e,n,o){return n instanceof zi?new Kn(e,jt(e.mode,n.state),o,n.lookAhead):new Kn(e,jt(e.mode,n),o)},Kn.prototype.save=function(e){var n=e!==!1?jt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new zi(n,this.maxLookAhead):n};function Po(e,n,o,i){var s=[e.state.modeGen],u={};ms(e,n.text,e.doc.mode,o,function(k,O){return s.push(k,O)},u,i);for(var m=o.state,y=function(k){o.baseTokens=s;var O=e.state.overlays[k],F=1,te=0;o.state=!0,ms(e,n.text,O.mode,o,function(V,me){for(var ve=F;te<V;){var je=s[F];je>V&&s.splice(F,1,V,s[F+1],je),F+=2,te=Math.min(V,je)}if(me)if(O.opaque)s.splice(ve,F-ve,V,"overlay "+me),F=ve+2;else for(;ve<F;ve+=2){var Ee=s[ve+1];s[ve+1]=(Ee?Ee+" ":"")+"overlay "+me}},u),o.state=m,o.baseTokens=null,o.baseTokenPos=1},b=0;b<e.state.overlays.length;++b)y(b);return{styles:s,classes:u.bgClass||u.textClass?u:null}}function oo(e,n,o){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,S(n)),s=n.text.length>e.options.maxHighlightLength&&jt(e.doc.mode,i.state),u=Po(e,n,i);s&&(i.state=s),n.stateAfter=i.save(!s),n.styles=u.styles,u.classes?n.styleClasses=u.classes:n.styleClasses&&(n.styleClasses=null),o===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,o){var i=e.doc,s=e.display;if(!i.mode.startState)return new Kn(i,!0,n);var u=Ao(e,n,o),m=u>i.first&&Xe(i,u-1).stateAfter,y=m?Kn.fromSaved(i,m,u):new Kn(i,xi(i.mode),u);return i.iter(u,n,function(b){Fi(e,b.text,y);var k=y.line;b.stateAfter=k==n-1||k%5==0||k>=s.viewFrom&&k<s.viewTo?y.save():null,y.nextLine()}),o&&(i.modeFrontier=y.line),y}function Fi(e,n,o,i){var s=e.doc.mode,u=new Yt(n,e.options.tabSize,o);for(u.start=u.pos=i||0,n==""&&Kr(s,o.state);!u.eol();)ai(s,u,o.state),u.start=u.pos}function Kr(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var o=io(e,n);if(o.mode.blankLine)return o.mode.blankLine(o.state)}}function ai(e,n,o,i){for(var s=0;s<10;s++){i&&(i[0]=io(e,o).mode);var u=e.token(n,o);if(n.pos>n.start)return u}throw new Error("Mode "+e.name+" failed to advance stream.")}var dr=function(e,n,o){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=o};function na(e,n,o,i){var s=e.doc,u=s.mode,m;n=ft(s,n);var y=Xe(s,n.line),b=Nt(e,n.line,o),k=new Yt(y.text,e.options.tabSize,b),O;for(i&&(O=[]);(i||k.pos<n.ch)&&!k.eol();)k.start=k.pos,m=ai(u,k,b.state),i&&O.push(new dr(k,m,jt(s.mode,b.state)));return i?O:new dr(k,m,b.state)}function so(e,n){if(e)for(;;){var o=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!o)break;e=e.slice(0,o.index)+e.slice(o.index+o[0].length);var i=o[1]?"bgClass":"textClass";n[i]==null?n[i]=o[2]:new RegExp("(?:^|\\s)"+o[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+o[2])}return e}function ms(e,n,o,i,s,u,m){var y=o.flattenSpans;y==null&&(y=e.options.flattenSpans);var b=0,k=null,O=new Yt(n,e.options.tabSize,i),F,te=e.options.addModeClass&&[null];for(n==""&&so(Kr(o,i.state),u);!O.eol();){if(O.pos>e.options.maxHighlightLength?(y=!1,m&&Fi(e,n,i,O.pos),O.pos=n.length,F=null):F=so(ai(o,O,i.state,te),u),te){var V=te[0].name;V&&(F="m-"+(F?V+" "+F:V))}if(!y||k!=F){for(;b<O.start;)b=Math.min(O.start,b+5e3),s(b,k);k=F}O.start=O.pos}for(;b<O.pos;){var me=Math.min(O.pos,b+5e3);s(me,k),b=me}}function Ao(e,n,o){for(var i,s,u=e.doc,m=o?-1:n-(e.doc.mode.innerMode?1e3:100),y=n;y>m;--y){if(y<=u.first)return u.first;var b=Xe(u,y-1),k=b.stateAfter;if(k&&(!o||y+(k instanceof zi?k.lookAhead:0)<=u.modeFrontier))return y;var O=Be(b.text,null,e.options.tabSize);(s==null||i>O)&&(s=y-1,i=O)}return s}function pr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var o=e.first,i=n-1;i>o;i--){var s=Xe(e,i).stateAfter;if(s&&(!(s instanceof zi)||i+s.lookAhead<n)){o=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,o)}}var Ir=!1,Mn=!1;function Ro(){Ir=!0}function ao(){Mn=!0}function Or(e,n,o){this.marker=e,this.from=n,this.to=o}function Io(e,n){if(e)for(var o=0;o<e.length;++o){var i=e[o];if(i.marker==n)return i}}function ra(e,n){for(var o,i=0;i<e.length;++i)e[i]!=n&&(o||(o=[])).push(e[i]);return o}function Wi(e,n,o){var i=o&&window.WeakSet&&(o.markedSpans||(o.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Oo(e,n,o){var i;if(e)for(var s=0;s<e.length;++s){var u=e[s],m=u.marker,y=u.from==null||(m.inclusiveLeft?u.from<=n:u.from<n);if(y||u.from==n&&m.type=="bookmark"&&(!o||!u.marker.insertLeft)){var b=u.to==null||(m.inclusiveRight?u.to>=n:u.to>n);(i||(i=[])).push(new Or(m,u.from,b?null:u.to))}}return i}function gs(e,n,o){var i;if(e)for(var s=0;s<e.length;++s){var u=e[s],m=u.marker,y=u.to==null||(m.inclusiveRight?u.to>=n:u.to>n);if(y||u.from==n&&m.type=="bookmark"&&(!o||u.marker.insertLeft)){var b=u.from==null||(m.inclusiveLeft?u.from<=n:u.from<n);(i||(i=[])).push(new Or(m,b?null:u.from-n,u.to==null?null:u.to-n))}}return i}function Se(e,n){if(n.full)return null;var o=fe(e,n.from.line)&&Xe(e,n.from.line).markedSpans,i=fe(e,n.to.line)&&Xe(e,n.to.line).markedSpans;if(!o&&!i)return null;var s=n.from.ch,u=n.to.ch,m=ze(n.from,n.to)==0,y=Oo(o,s,m),b=gs(i,u,m),k=n.text.length==1,O=Ke(n.text).length+(k?s:0);if(y)for(var F=0;F<y.length;++F){var te=y[F];if(te.to==null){var V=Io(b,te.marker);V?k&&(te.to=V.to==null?null:V.to+O):te.to=s}}if(b)for(var me=0;me<b.length;++me){var ve=b[me];if(ve.to!=null&&(ve.to+=O),ve.from==null){var je=Io(y,ve.marker);je||(ve.from=O,k&&(y||(y=[])).push(ve))}else ve.from+=O,k&&(y||(y=[])).push(ve)}y&&(y=A(y)),b&&b!=y&&(b=A(b));var Ee=[y];if(!k){var Oe=n.text.length-2,Re;if(Oe>0&&y)for(var Ue=0;Ue<y.length;++Ue)y[Ue].to==null&&(Re||(Re=[])).push(new Or(y[Ue].marker,null,null));for(var st=0;st<Oe;++st)Ee.push(Re);Ee.push(b)}return Ee}function A(e){for(var n=0;n<e.length;++n){var o=e[n];o.from!=null&&o.from==o.to&&o.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function Z(e,n,o){var i=null;if(e.iter(n.line,o.line+1,function(V){if(V.markedSpans)for(var me=0;me<V.markedSpans.length;++me){var ve=V.markedSpans[me].marker;ve.readOnly&&(!i||Ge(i,ve)==-1)&&(i||(i=[])).push(ve)}}),!i)return null;for(var s=[{from:n,to:o}],u=0;u<i.length;++u)for(var m=i[u],y=m.find(0),b=0;b<s.length;++b){var k=s[b];if(!(ze(k.to,y.from)<0||ze(k.from,y.to)>0)){var O=[b,1],F=ze(k.from,y.from),te=ze(k.to,y.to);(F<0||!m.inclusiveLeft&&!F)&&O.push({from:k.from,to:y.from}),(te>0||!m.inclusiveRight&&!te)&&O.push({from:y.to,to:k.to}),s.splice.apply(s,O),b+=O.length-3}}return s}function xe(e){var n=e.markedSpans;if(n){for(var o=0;o<n.length;++o)n[o].marker.detachLine(e);e.markedSpans=null}}function be(e,n){if(n){for(var o=0;o<n.length;++o)n[o].marker.attachLine(e);e.markedSpans=n}}function Ze(e){return e.inclusiveLeft?-1:0}function ut(e){return e.inclusiveRight?1:0}function kt(e,n){var o=e.lines.length-n.lines.length;if(o!=0)return o;var i=e.find(),s=n.find(),u=ze(i.from,s.from)||Ze(e)-Ze(n);if(u)return-u;var m=ze(i.to,s.to)||ut(e)-ut(n);return m||n.id-e.id}function gn(e,n){var o=Mn&&e.markedSpans,i;if(o)for(var s=void 0,u=0;u<o.length;++u)s=o[u],s.marker.collapsed&&(n?s.from:s.to)==null&&(!i||kt(i,s.marker)<0)&&(i=s.marker);return i}function hr(e){return gn(e,!0)}function un(e){return gn(e,!1)}function $n(e,n){var o=Mn&&e.markedSpans,i;if(o)for(var s=0;s<o.length;++s){var u=o[s];u.marker.collapsed&&(u.from==null||u.from<n)&&(u.to==null||u.to>n)&&(!i||kt(i,u.marker)<0)&&(i=u.marker)}return i}function bi(e,n,o,i,s){var u=Xe(e,n),m=Mn&&u.markedSpans;if(m)for(var y=0;y<m.length;++y){var b=m[y];if(b.marker.collapsed){var k=b.marker.find(0),O=ze(k.from,o)||Ze(b.marker)-Ze(s),F=ze(k.to,i)||ut(b.marker)-ut(s);if(!(O>=0&&F<=0||O<=0&&F>=0)&&(O<=0&&(b.marker.inclusiveRight&&s.inclusiveLeft?ze(k.to,o)>=0:ze(k.to,o)>0)||O>=0&&(b.marker.inclusiveRight&&s.inclusiveLeft?ze(k.from,i)<=0:ze(k.from,i)<0)))return!0}}}function Pt(e){for(var n;n=hr(e);)e=n.find(-1,!0).line;return e}function ys(e){for(var n;n=un(e);)e=n.find(1,!0).line;return e}function Xa(e){for(var n,o;n=un(e);)e=n.find(1,!0).line,(o||(o=[])).push(e);return o}function Qa(e,n){var o=Xe(e,n),i=Pt(o);return o==i?n:S(i)}function ia(e,n){if(n>e.lastLine())return n;var o=Xe(e,n),i;if(!li(e,o))return n;for(;i=un(o);)o=i.find(1,!0).line;return S(o)+1}function li(e,n){var o=Mn&&n.markedSpans;if(o){for(var i=void 0,s=0;s<o.length;++s)if(i=o[s],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&Za(e,n,i))return!0}}}function Za(e,n,o){if(o.to==null){var i=o.marker.find(1,!0);return Za(e,i.line,Io(i.line.markedSpans,o.marker))}if(o.marker.inclusiveRight&&o.to==n.text.length)return!0;for(var s=void 0,u=0;u<n.markedSpans.length;++u)if(s=n.markedSpans[u],s.marker.collapsed&&!s.marker.widgetNode&&s.from==o.to&&(s.to==null||s.to!=o.from)&&(s.marker.inclusiveLeft||o.marker.inclusiveRight)&&Za(e,n,s))return!0}function _n(e){e=Pt(e);for(var n=0,o=e.parent,i=0;i<o.lines.length;++i){var s=o.lines[i];if(s==e)break;n+=s.height}for(var u=o.parent;u;o=u,u=o.parent)for(var m=0;m<u.children.length;++m){var y=u.children[m];if(y==o)break;n+=y.height}return n}function Hi(e){if(e.height==0)return 0;for(var n=e.text.length,o,i=e;o=hr(i);){var s=o.find(0,!0);i=s.from.line,n+=s.from.ch-s.to.ch}for(i=e;o=un(i);){var u=o.find(0,!0);n-=i.text.length-u.from.ch,i=u.to.line,n+=i.text.length-u.to.ch}return n}function oa(e){var n=e.display,o=e.doc;n.maxLine=Xe(o,o.first),n.maxLineLength=Hi(n.maxLine),n.maxLineChanged=!0,o.iter(function(i){var s=Hi(i);s>n.maxLineLength&&(n.maxLineLength=s,n.maxLine=i)})}var wi=function(e,n,o){this.text=e,be(this,n),this.height=o?o(this):1};wi.prototype.lineNo=function(){return S(this)},ar(wi);function Td(e,n,o,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),xe(e),be(e,o);var s=i?i(e):1;s!=e.height&&On(e,s)}function ql(e){e.parent=null,xe(e)}var Kl={},sa={};function aa(e,n){if(!e||/^\s*$/.test(e))return null;var o=n.addModeClass?sa:Kl;return o[e]||(o[e]=e.replace(/\S+/g,"cm-$&"))}function $l(e,n){var o=Q("span",null,null,j?"padding-right: .1px":null),i={pre:Q("pre",[o],"CodeMirror-line"),content:o,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var s=0;s<=(n.rest?n.rest.length:0);s++){var u=s?n.rest[s-1]:n.line,m=void 0;i.pos=0,i.addToken=Ed,Ur(e.display.measure)&&(m=gt(u,e.doc.direction))&&(i.addToken=Gl(i.addToken,m)),i.map=[];var y=n!=e.display.externalMeasured&&S(u);jd(u,i,oo(e,u,y)),u.styleClasses&&(u.styleClasses.bgClass&&(i.bgClass=H(u.styleClasses.bgClass,i.bgClass||"")),u.styleClasses.textClass&&(i.textClass=H(u.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(ri(e.display.measure))),s==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(j){var b=i.content.lastChild;(/\bcm-tab\b/.test(b.className)||b.querySelector&&b.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return At(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=H(i.pre.className,i.textClass||"")),i}function Nd(e){var n=T("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Ed(e,n,o,i,s,u,m){if(n){var y=e.splitSpaces?Ld(n,e.trailingSpace):n,b=e.cm.state.specialChars,k=!1,O;if(!b.test(n))e.col+=n.length,O=document.createTextNode(y),e.map.push(e.pos,e.pos+n.length,O),_&&P<9&&(k=!0),e.pos+=n.length;else{O=document.createDocumentFragment();for(var F=0;;){b.lastIndex=F;var te=b.exec(n),V=te?te.index-F:n.length-F;if(V){var me=document.createTextNode(y.slice(F,F+V));_&&P<9?O.appendChild(T("span",[me])):O.appendChild(me),e.map.push(e.pos,e.pos+V,me),e.col+=V,e.pos+=V}if(!te)break;F+=V+1;var ve=void 0;if(te[0]=="	"){var je=e.cm.options.tabSize,Ee=je-e.col%je;ve=O.appendChild(T("span",Zt(Ee),"cm-tab")),ve.setAttribute("role","presentation"),ve.setAttribute("cm-text","	"),e.col+=Ee}else te[0]=="\r"||te[0]==`
`?(ve=O.appendChild(T("span",te[0]=="\r"?"␍":"␤","cm-invalidchar")),ve.setAttribute("cm-text",te[0]),e.col+=1):(ve=e.cm.options.specialCharPlaceholder(te[0]),ve.setAttribute("cm-text",te[0]),_&&P<9?O.appendChild(T("span",[ve])):O.appendChild(ve),e.col+=1);e.map.push(e.pos,e.pos+1,ve),e.pos++}}if(e.trailingSpace=y.charCodeAt(n.length-1)==32,o||i||s||k||u||m){var Oe=o||"";i&&(Oe+=i),s&&(Oe+=s);var Re=T("span",[O],Oe,u);if(m)for(var Ue in m)m.hasOwnProperty(Ue)&&Ue!="style"&&Ue!="class"&&Re.setAttribute(Ue,m[Ue]);return e.content.appendChild(Re)}e.content.appendChild(O)}}function Ld(e,n){if(e.length>1&&!/  /.test(e))return e;for(var o=n,i="",s=0;s<e.length;s++){var u=e.charAt(s);u==" "&&o&&(s==e.length-1||e.charCodeAt(s+1)==32)&&(u=" "),i+=u,o=u==" "}return i}function Gl(e,n){return function(o,i,s,u,m,y,b){s=s?s+" cm-force-border":"cm-force-border";for(var k=o.pos,O=k+i.length;;){for(var F=void 0,te=0;te<n.length&&(F=n[te],!(F.to>k&&F.from<=k));te++);if(F.to>=O)return e(o,i,s,u,m,y,b);e(o,i.slice(0,F.to-k),s,u,null,y,b),u=null,i=i.slice(F.to-k),k=F.to}}}function nc(e,n,o,i){var s=!i&&o.widgetNode;s&&e.map.push(e.pos,e.pos+n,s),!i&&e.cm.display.input.needsContentAttribute&&(s||(s=e.content.appendChild(document.createElement("span"))),s.setAttribute("cm-marker",o.id)),s&&(e.cm.display.input.setUneditable(s),e.content.appendChild(s)),e.pos+=n,e.trailingSpace=!1}function jd(e,n,o){var i=e.markedSpans,s=e.text,u=0;if(!i){for(var m=1;m<o.length;m+=2)n.addToken(n,s.slice(u,u=o[m]),aa(o[m+1],n.cm.options));return}for(var y=s.length,b=0,k=1,O="",F,te,V=0,me,ve,je,Ee,Oe;;){if(V==b){me=ve=je=te="",Oe=null,Ee=null,V=1/0;for(var Re=[],Ue=void 0,st=0;st<i.length;++st){var Ye=i[st],wt=Ye.marker;if(wt.type=="bookmark"&&Ye.from==b&&wt.widgetNode)Re.push(wt);else if(Ye.from<=b&&(Ye.to==null||Ye.to>b||wt.collapsed&&Ye.to==b&&Ye.from==b)){if(Ye.to!=null&&Ye.to!=b&&V>Ye.to&&(V=Ye.to,ve=""),wt.className&&(me+=" "+wt.className),wt.css&&(te=(te?te+";":"")+wt.css),wt.startStyle&&Ye.from==b&&(je+=" "+wt.startStyle),wt.endStyle&&Ye.to==V&&(Ue||(Ue=[])).push(wt.endStyle,Ye.to),wt.title&&((Oe||(Oe={})).title=wt.title),wt.attributes)for(var Ct in wt.attributes)(Oe||(Oe={}))[Ct]=wt.attributes[Ct];wt.collapsed&&(!Ee||kt(Ee.marker,wt)<0)&&(Ee=Ye)}else Ye.from>b&&V>Ye.from&&(V=Ye.from)}if(Ue)for(var Bn=0;Bn<Ue.length;Bn+=2)Ue[Bn+1]==V&&(ve+=" "+Ue[Bn]);if(!Ee||Ee.from==b)for(var nn=0;nn<Re.length;++nn)nc(n,0,Re[nn]);if(Ee&&(Ee.from||0)==b){if(nc(n,(Ee.to==null?y+1:Ee.to)-b,Ee.marker,Ee.from==null),Ee.to==null)return;Ee.to==b&&(Ee=!1)}}if(b>=y)break;for(var vr=Math.min(y,V);;){if(O){var rr=b+O.length;if(!Ee){var vn=rr>vr?O.slice(0,vr-b):O;n.addToken(n,vn,F?F+me:me,je,b+vn.length==V?ve:"",te,Oe)}if(rr>=vr){O=O.slice(vr-b),b=vr;break}b=rr,je=""}O=s.slice(u,u=o[k++]),F=aa(o[k++],n.cm.options)}}}function rc(e,n,o){this.line=n,this.rest=Xa(n),this.size=this.rest?S(Ke(this.rest))-o+1:1,this.node=this.text=null,this.hidden=li(e,n)}function Ja(e,n,o){for(var i=[],s,u=n;u<o;u=s){var m=new rc(e.doc,Xe(e.doc,u),u);s=u+m.size,i.push(m)}return i}var vs=null;function ic(e){vs?vs.ops.push(e):e.ownsGroup=vs={ops:[e],delayedCallbacks:[]}}function Pd(e){var n=e.delayedCallbacks,o=0;do{for(;o<n.length;o++)n[o].call(null);for(var i=0;i<e.ops.length;i++){var s=e.ops[i];if(s.cursorActivityHandlers)for(;s.cursorActivityCalled<s.cursorActivityHandlers.length;)s.cursorActivityHandlers[s.cursorActivityCalled++].call(null,s.cm)}}while(o<n.length)}function Ad(e,n){var o=e.ownsGroup;if(o)try{Pd(o)}finally{vs=null,n(o)}}var la=null;function Dn(e,n){var o=Cr(e,n);if(o.length){var i=Array.prototype.slice.call(arguments,2),s;vs?s=vs.delayedCallbacks:la?s=la:(s=la=[],setTimeout(Yl,0));for(var u=function(y){s.push(function(){return o[y].apply(null,i)})},m=0;m<o.length;++m)u(m)}}function Yl(){var e=la;la=null;for(var n=0;n<e.length;++n)e[n]()}function oc(e,n,o,i){for(var s=0;s<n.changes.length;s++){var u=n.changes[s];u=="text"?Id(e,n):u=="gutter"?sc(e,n,o,i):u=="class"?Xl(e,n):u=="widget"&&Od(e,n,i)}n.changes=null}function ua(e){return e.node==e.text&&(e.node=T("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),_&&P<8&&(e.node.style.zIndex=2)),e.node}function Rd(e,n){var o=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(o&&(o+=" CodeMirror-linebackground"),n.background)o?n.background.className=o:(n.background.parentNode.removeChild(n.background),n.background=null);else if(o){var i=ua(n);n.background=i.insertBefore(T("div",null,o),i.firstChild),e.display.input.setUneditable(n.background)}}function Vl(e,n){var o=e.display.externalMeasured;return o&&o.line==n.line?(e.display.externalMeasured=null,n.measure=o.measure,o.built):$l(e,n)}function Id(e,n){var o=n.text.className,i=Vl(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,Xl(e,n)):o&&(n.text.className=o)}function Xl(e,n){Rd(e,n),n.line.wrapClass?ua(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var o=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=o||""}function sc(e,n,o,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var s=ua(n);n.gutterBackground=T("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),s.insertBefore(n.gutterBackground,n.text)}var u=n.line.gutterMarkers;if(e.options.lineNumbers||u){var m=ua(n),y=n.gutter=T("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(y.setAttribute("aria-hidden","true"),e.display.input.setUneditable(y),m.insertBefore(y,n.text),n.line.gutterClass&&(y.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!u||!u["CodeMirror-linenumbers"])&&(n.lineNumber=y.appendChild(T("div",Ne(e.options,o),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),u)for(var b=0;b<e.display.gutterSpecs.length;++b){var k=e.display.gutterSpecs[b].className,O=u.hasOwnProperty(k)&&u[k];O&&y.appendChild(T("div",[O],"CodeMirror-gutter-elt","left: "+i.gutterLeft[k]+"px; width: "+i.gutterWidth[k]+"px"))}}}function Od(e,n,o){n.alignable&&(n.alignable=null);for(var i=$("CodeMirror-linewidget"),s=n.node.firstChild,u=void 0;s;s=u)u=s.nextSibling,i.test(s.className)&&n.node.removeChild(s);ac(e,n,o)}function Md(e,n,o,i){var s=Vl(e,n);return n.text=n.node=s.pre,s.bgClass&&(n.bgClass=s.bgClass),s.textClass&&(n.textClass=s.textClass),Xl(e,n),sc(e,n,o,i),ac(e,n,i),n.node}function ac(e,n,o){if(lc(e,n.line,n,o,!0),n.rest)for(var i=0;i<n.rest.length;i++)lc(e,n.rest[i],n,o,!1)}function lc(e,n,o,i,s){if(n.widgets)for(var u=ua(o),m=0,y=n.widgets;m<y.length;++m){var b=y[m],k=T("div",[b.node],"CodeMirror-linewidget"+(b.className?" "+b.className:""));b.handleMouseEvents||k.setAttribute("cm-ignore-events","true"),Ql(b,k,o,i),e.display.input.setUneditable(k),s&&b.above?u.insertBefore(k,o.gutter||o.text):u.appendChild(k),Dn(b,"redraw")}}function Ql(e,n,o,i){if(e.noHScroll){(o.alignable||(o.alignable=[])).push(n);var s=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(s-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=s+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Bi(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!C(document.body,e.node)){var o="position: relative;";e.coverGutter&&(o+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(o+="width: "+n.display.wrapper.clientWidth+"px;"),ye(n.display.measure,T("div",[e.node],null,o))}return e.height=e.node.parentNode.offsetHeight}function Ui(e,n){for(var o=Hr(n);o!=e.wrapper;o=o.parentNode)if(!o||o.nodeType==1&&o.getAttribute("cm-ignore-events")=="true"||o.parentNode==e.sizer&&o!=e.mover)return!0}function ca(e){return e.lineSpace.offsetTop}function el(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Zl(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ye(e.measure,T("pre","x","CodeMirror-line-like")),o=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(o.paddingLeft),right:parseInt(o.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ui(e){return qt-e.display.nativeBarWidth}function lo(e){return e.display.scroller.clientWidth-ui(e)-e.display.barWidth}function uo(e){return e.display.scroller.clientHeight-ui(e)-e.display.barHeight}function Dd(e,n,o){var i=e.options.lineWrapping,s=i&&lo(e);if(!n.measure.heights||i&&n.measure.width!=s){var u=n.measure.heights=[];if(i){n.measure.width=s;for(var m=n.text.firstChild.getClientRects(),y=0;y<m.length-1;y++){var b=m[y],k=m[y+1];Math.abs(b.bottom-k.bottom)>2&&u.push((b.bottom+k.top)/2-o.top)}}u.push(o.bottom-o.top)}}function uc(e,n,o){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var s=0;s<e.rest.length;s++)if(S(e.rest[s])>o)return{map:e.measure.maps[s],cache:e.measure.caches[s],before:!0}}}function zd(e,n){n=Pt(n);var o=S(n),i=e.display.externalMeasured=new rc(e.doc,n,o);i.lineN=o;var s=i.built=$l(e,i);return i.text=s.pre,ye(e.display.lineMeasure,s.pre),i}function Jl(e,n,o,i){return Lr(e,ki(e,n),o,i)}function tl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var o=e.display.externalMeasured;if(o&&n>=o.lineN&&n<o.lineN+o.size)return o}function ki(e,n){var o=S(n),i=tl(e,o);i&&!i.text?i=null:i&&i.changes&&(oc(e,i,o,al(e)),e.curOp.forceUpdate=!0),i||(i=zd(e,n));var s=uc(i,n,o);return{line:n,view:i,rect:null,map:s.map,cache:s.cache,before:s.before,hasHeights:!1}}function Lr(e,n,o,i,s){n.before&&(o=-1);var u=o+(i||""),m;return n.cache.hasOwnProperty(u)?m=n.cache[u]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(Dd(e,n.view,n.rect),n.hasHeights=!0),m=dc(e,n,o,i),m.bogus||(n.cache[u]=m)),{left:m.left,right:m.right,top:s?m.rtop:m.top,bottom:s?m.rbottom:m.bottom}}var cc={left:0,right:0,top:0,bottom:0};function da(e,n,o){for(var i,s,u,m,y,b,k=0;k<e.length;k+=3)if(y=e[k],b=e[k+1],n<y?(s=0,u=1,m="left"):n<b?(s=n-y,u=s+1):(k==e.length-3||n==b&&e[k+3]>n)&&(u=b-y,s=u-1,n>=b&&(m="right")),s!=null){if(i=e[k+2],y==b&&o==(i.insertLeft?"left":"right")&&(m=o),o=="left"&&s==0)for(;k&&e[k-2]==e[k-3]&&e[k-1].insertLeft;)i=e[(k-=3)+2],m="left";if(o=="right"&&s==b-y)for(;k<e.length-3&&e[k+3]==e[k+4]&&!e[k+5].insertLeft;)i=e[(k+=3)+2],m="right";break}return{node:i,start:s,end:u,collapse:m,coverStart:y,coverEnd:b}}function Fd(e,n){var o=cc;if(n=="left")for(var i=0;i<e.length&&(o=e[i]).left==o.right;i++);else for(var s=e.length-1;s>=0&&(o=e[s]).left==o.right;s--);return o}function dc(e,n,o,i){var s=da(n.map,o,i),u=s.node,m=s.start,y=s.end,b=s.collapse,k;if(u.nodeType==3){for(var O=0;O<4;O++){for(;m&&dt(n.line.text.charAt(s.coverStart+m));)--m;for(;s.coverStart+y<s.coverEnd&&dt(n.line.text.charAt(s.coverStart+y));)++y;if(_&&P<9&&m==0&&y==s.coverEnd-s.coverStart?k=u.parentNode.getBoundingClientRect():k=Fd(B(u,m,y).getClientRects(),i),k.left||k.right||m==0)break;y=m,m=m-1,b="right"}_&&P<11&&(k=eu(e.display.measure,k))}else{m>0&&(b=i="right");var F;e.options.lineWrapping&&(F=u.getClientRects()).length>1?k=F[i=="right"?F.length-1:0]:k=u.getBoundingClientRect()}if(_&&P<9&&!m&&(!k||!k.left&&!k.right)){var te=u.parentNode.getClientRects()[0];te?k={left:te.left,right:te.left+co(e.display),top:te.top,bottom:te.bottom}:k=cc}for(var V=k.top-n.rect.top,me=k.bottom-n.rect.top,ve=(V+me)/2,je=n.view.measure.heights,Ee=0;Ee<je.length-1&&!(ve<je[Ee]);Ee++);var Oe=Ee?je[Ee-1]:0,Re=je[Ee],Ue={left:(b=="right"?k.right:k.left)-n.rect.left,right:(b=="left"?k.left:k.right)-n.rect.left,top:Oe,bottom:Re};return!k.left&&!k.right&&(Ue.bogus=!0),e.options.singleCursorHeightPerLine||(Ue.rtop=V,Ue.rbottom=me),Ue}function eu(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!hs(e))return n;var o=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*o,right:n.right*o,top:n.top*i,bottom:n.bottom*i}}function nl(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function tu(e){e.display.externalMeasure=null,ne(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)nl(e.display.view[n])}function xs(e){tu(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function nu(e){return I&&q?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function pc(e){return I&&q?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function ru(e){var n=Pt(e),o=n.widgets,i=0;if(o)for(var s=0;s<o.length;++s)o[s].above&&(i+=Bi(o[s]));return i}function rl(e,n,o,i,s){if(!s){var u=ru(n);o.top+=u,o.bottom+=u}if(i=="line")return o;i||(i="local");var m=_n(n);if(i=="local"?m+=ca(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var y=e.display.lineSpace.getBoundingClientRect();m+=y.top+(i=="window"?0:pc(De(e)));var b=y.left+(i=="window"?0:nu(De(e)));o.left+=b,o.right+=b}return o.top+=m,o.bottom+=m,o}function hc(e,n,o){if(o=="div")return n;var i=n.left,s=n.top;if(o=="page")i-=nu(De(e)),s-=pc(De(e));else if(o=="local"||!o){var u=e.display.sizer.getBoundingClientRect();i+=u.left,s+=u.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:s-m.top}}function il(e,n,o,i,s){return i||(i=Xe(e.doc,n.line)),rl(e,i,Jl(e,i,n.ch,s),o)}function Cn(e,n,o,i,s,u){i=i||Xe(e.doc,n.line),s||(s=ki(e,i));function m(me,ve){var je=Lr(e,s,me,ve?"right":"left",u);return ve?je.left=je.right:je.right=je.left,rl(e,i,je,o)}var y=gt(i,e.doc.direction),b=n.ch,k=n.sticky;if(b>=i.text.length?(b=i.text.length,k="before"):b<=0&&(b=0,k="after"),!y)return m(k=="before"?b-1:b,k=="before");function O(me,ve,je){var Ee=y[ve],Oe=Ee.level==1;return m(je?me-1:me,Oe!=je)}var F=sr(y,b,k),te=Wr,V=O(b,F,k=="before");return te!=null&&(V.other=O(b,te,k!="before")),V}function bs(e,n){var o=0;n=ft(e.doc,n),e.options.lineWrapping||(o=co(e.display)*n.ch);var i=Xe(e.doc,n.line),s=_n(i)+ca(e.display);return{left:o,right:o,top:s,bottom:s+i.height}}function ol(e,n,o,i,s){var u=de(e,n,o);return u.xRel=s,i&&(u.outside=i),u}function sl(e,n,o){var i=e.doc;if(o+=e.display.viewOffset,o<0)return ol(i.first,0,null,-1,-1);var s=z(i,o),u=i.first+i.size-1;if(s>u)return ol(i.first+i.size-1,Xe(i,u).text.length,null,1,1);n<0&&(n=0);for(var m=Xe(i,s);;){var y=Wd(e,m,s,n,o),b=$n(m,y.ch+(y.xRel>0||y.outside>0?1:0));if(!b)return y;var k=b.find(1);if(k.line==s)return k;m=Xe(i,s=k.line)}}function iu(e,n,o,i){i-=ru(n);var s=n.text.length,u=Xn(function(m){return Lr(e,o,m-1).bottom<=i},s,0);return s=Xn(function(m){return Lr(e,o,m).top>i},u,s),{begin:u,end:s}}function ou(e,n,o,i){o||(o=ki(e,n));var s=rl(e,n,Lr(e,o,i),"line").top;return iu(e,n,o,s)}function pa(e,n,o,i){return e.bottom<=o?!1:e.top>o?!0:(i?e.left:e.right)>n}function Wd(e,n,o,i,s){s-=_n(n);var u=ki(e,n),m=ru(n),y=0,b=n.text.length,k=!0,O=gt(n,e.doc.direction);if(O){var F=(e.options.lineWrapping?ws:Hd)(e,n,o,u,O,i,s);k=F.level!=1,y=k?F.from:F.to-1,b=k?F.to:F.from-1}var te=null,V=null,me=Xn(function(st){var Ye=Lr(e,u,st);return Ye.top+=m,Ye.bottom+=m,pa(Ye,i,s,!1)?(Ye.top<=s&&Ye.left<=i&&(te=st,V=Ye),!0):!1},y,b),ve,je,Ee=!1;if(V){var Oe=i-V.left<V.right-i,Re=Oe==k;me=te+(Re?0:1),je=Re?"after":"before",ve=Oe?V.left:V.right}else{!k&&(me==b||me==y)&&me++,je=me==0?"after":me==n.text.length?"before":Lr(e,u,me-(k?1:0)).bottom+m<=s==k?"after":"before";var Ue=Cn(e,de(o,me,je),"line",n,u);ve=Ue.left,Ee=s<Ue.top?-1:s>=Ue.bottom?1:0}return me=mn(n.text,me,1),ol(o,me,je,Ee,i-ve)}function Hd(e,n,o,i,s,u,m){var y=Xn(function(F){var te=s[F],V=te.level!=1;return pa(Cn(e,de(o,V?te.to:te.from,V?"before":"after"),"line",n,i),u,m,!0)},0,s.length-1),b=s[y];if(y>0){var k=b.level!=1,O=Cn(e,de(o,k?b.from:b.to,k?"after":"before"),"line",n,i);pa(O,u,m,!0)&&O.top>m&&(b=s[y-1])}return b}function ws(e,n,o,i,s,u,m){var y=iu(e,n,i,m),b=y.begin,k=y.end;/\s/.test(n.text.charAt(k-1))&&k--;for(var O=null,F=null,te=0;te<s.length;te++){var V=s[te];if(!(V.from>=k||V.to<=b)){var me=V.level!=1,ve=Lr(e,i,me?Math.min(k,V.to)-1:Math.max(b,V.from)).right,je=ve<u?u-ve+1e9:ve-u;(!O||F>je)&&(O=V,F=je)}}return O||(O=s[s.length-1]),O.from<b&&(O={from:b,to:O.to,level:O.level}),O.to>k&&(O={from:O.from,to:k,level:O.level}),O}var qi;function Si(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(qi==null){qi=T("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)qi.appendChild(document.createTextNode("x")),qi.appendChild(T("br"));qi.appendChild(document.createTextNode("x"))}ye(e.measure,qi);var o=qi.offsetHeight/50;return o>3&&(e.cachedTextHeight=o),ne(e.measure),o||1}function co(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=T("span","xxxxxxxxxx"),o=T("pre",[n],"CodeMirror-line-like");ye(e.measure,o);var i=n.getBoundingClientRect(),s=(i.right-i.left)/10;return s>2&&(e.cachedCharWidth=s),s||10}function al(e){for(var n=e.display,o={},i={},s=n.gutters.clientLeft,u=n.gutters.firstChild,m=0;u;u=u.nextSibling,++m){var y=e.display.gutterSpecs[m].className;o[y]=u.offsetLeft+u.clientLeft+s,i[y]=u.clientWidth}return{fixedPos:ks(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:o,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function ks(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Mo(e){var n=Si(e.display),o=e.options.lineWrapping,i=o&&Math.max(5,e.display.scroller.clientWidth/co(e.display)-3);return function(s){if(li(e.doc,s))return 0;var u=0;if(s.widgets)for(var m=0;m<s.widgets.length;m++)s.widgets[m].height&&(u+=s.widgets[m].height);return o?u+(Math.ceil(s.text.length/i)||1)*n:u+n}}function ha(e){var n=e.doc,o=Mo(e);n.iter(function(i){var s=o(i);s!=i.height&&On(i,s)})}function po(e,n,o,i){var s=e.display;if(!o&&Hr(n).getAttribute("cm-not-content")=="true")return null;var u,m,y=s.lineSpace.getBoundingClientRect();try{u=n.clientX-y.left,m=n.clientY-y.top}catch{return null}var b=sl(e,u,m),k;if(i&&b.xRel>0&&(k=Xe(e.doc,b.line).text).length==b.ch){var O=Be(k,k.length,e.options.tabSize)-k.length;b=de(b.line,Math.max(0,Math.round((u-Zl(e.display).left)/co(e.display))-O))}return b}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var o=e.display.view,i=0;i<o.length;i++)if(n-=o[i].size,n<0)return i}function er(e,n,o,i){n==null&&(n=e.doc.first),o==null&&(o=e.doc.first+e.doc.size),i||(i=0);var s=e.display;if(i&&o<s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>n)&&(s.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=s.viewTo)Mn&&Qa(e.doc,n)<s.viewTo&&$i(e);else if(o<=s.viewFrom)Mn&&ia(e.doc,o+i)>s.viewFrom?$i(e):(s.viewFrom+=i,s.viewTo+=i);else if(n<=s.viewFrom&&o>=s.viewTo)$i(e);else if(n<=s.viewFrom){var u=fa(e,o,o+i,1);u?(s.view=s.view.slice(u.index),s.viewFrom=u.lineN,s.viewTo+=i):$i(e)}else if(o>=s.viewTo){var m=fa(e,n,n,-1);m?(s.view=s.view.slice(0,m.index),s.viewTo=m.lineN):$i(e)}else{var y=fa(e,n,n,-1),b=fa(e,o,o+i,1);y&&b?(s.view=s.view.slice(0,y.index).concat(Ja(e,y.lineN,b.lineN)).concat(s.view.slice(b.index)),s.viewTo+=i):$i(e)}var k=s.externalMeasured;k&&(o<k.lineN?k.lineN+=i:n<k.lineN+k.size&&(s.externalMeasured=null))}function Ki(e,n,o){e.curOp.viewChanged=!0;var i=e.display,s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var u=i.view[_i(e,n)];if(u.node!=null){var m=u.changes||(u.changes=[]);Ge(m,o)==-1&&m.push(o)}}}function $i(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function fa(e,n,o,i){var s=_i(e,n),u,m=e.display.view;if(!Mn||o==e.doc.first+e.doc.size)return{index:s,lineN:o};for(var y=e.display.viewFrom,b=0;b<s;b++)y+=m[b].size;if(y!=n){if(i>0){if(s==m.length-1)return null;u=y+m[s].size-n,s++}else u=y-n;n+=u,o+=u}for(;Qa(e.doc,o)!=o;){if(s==(i<0?0:m.length-1))return null;o+=i*m[s-(i<0?1:0)].size,s+=i}return{index:s,lineN:o}}function fc(e,n,o){var i=e.display,s=i.view;s.length==0||n>=i.viewTo||o<=i.viewFrom?(i.view=Ja(e,n,o),i.viewFrom=n):(i.viewFrom>n?i.view=Ja(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<o?i.view=i.view.concat(Ja(e,i.viewTo,o)):i.viewTo>o&&(i.view=i.view.slice(0,_i(e,o)))),i.viewTo=o}function su(e){for(var n=e.display.view,o=0,i=0;i<n.length;i++){var s=n[i];!s.hidden&&(!s.node||s.changes)&&++o}return o}function $r(e){e.display.input.showSelection(e.display.input.prepareSelection())}function ll(e,n){n===void 0&&(n=!0);var o=e.doc,i={},s=i.cursors=document.createDocumentFragment(),u=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var y=0;y<o.sel.ranges.length;y++)if(!(!n&&y==o.sel.primIndex)){var b=o.sel.ranges[y];if(!(b.from().line>=e.display.viewTo||b.to().line<e.display.viewFrom)){var k=b.empty();if(m){var O=m(e,b);O&&ma(e,O,s)}else(k||e.options.showCursorWhenSelecting)&&ma(e,b.head,s);k||Bd(e,b,u)}}return i}function ma(e,n,o){var i=Cn(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),s=o.appendChild(T("div"," ","CodeMirror-cursor"));if(s.style.left=i.left+"px",s.style.top=i.top+"px",s.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var u=il(e,n,"div",null,null),m=u.right-u.left;s.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var y=o.appendChild(T("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));y.style.display="",y.style.left=i.other.left+"px",y.style.top=i.other.top+"px",y.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function ul(e,n){return e.top-n.top||e.left-n.left}function Bd(e,n,o){var i=e.display,s=e.doc,u=document.createDocumentFragment(),m=Zl(e.display),y=m.left,b=Math.max(i.sizerWidth,lo(e)-i.sizer.offsetLeft)-m.right,k=s.direction=="ltr";function O(Re,Ue,st,Ye){Ue<0&&(Ue=0),Ue=Math.round(Ue),Ye=Math.round(Ye),u.appendChild(T("div",null,"CodeMirror-selected","position: absolute; left: "+Re+`px;
                             top: `+Ue+"px; width: "+(st??b-Re)+`px;
                             height: `+(Ye-Ue)+"px"))}function F(Re,Ue,st){var Ye=Xe(s,Re),wt=Ye.text.length,Ct,Bn;function nn(vn,xr){return il(e,de(Re,vn),"div",Ye,xr)}function vr(vn,xr,Nn){var xn=ou(e,Ye,null,vn),Mt=xr=="ltr"==(Nn=="after")?"left":"right",ct=Nn=="after"?xn.begin:xn.end-(/\s/.test(Ye.text.charAt(xn.end-1))?2:1);return nn(ct,Mt)[Mt]}var rr=gt(Ye,s.direction);return _r(rr,Ue||0,st??wt,function(vn,xr,Nn,xn){var Mt=Nn=="ltr",ct=nn(vn,Mt?"left":"right"),Dt=nn(xr-1,Mt?"right":"left"),rn=Ue==null&&vn==0,an=st==null&&xr==wt,Bt=xn==0,br=!rr||xn==rr.length-1;if(Dt.top-ct.top<=3){var Tt=(k?rn:an)&&Bt,os=(k?an:rn)&&br,wr=Tt?y:(Mt?ct:Dt).left,Ri=os?b:(Mt?Dt:ct).right;O(wr,ct.top,Ri-wr,ct.bottom)}else{var Ji,An,Un,Fa;Mt?(Ji=k&&rn&&Bt?y:ct.left,An=k?b:vr(vn,Nn,"before"),Un=k?y:vr(xr,Nn,"after"),Fa=k&&an&&br?b:Dt.right):(Ji=k?vr(vn,Nn,"before"):y,An=!k&&rn&&Bt?b:ct.right,Un=!k&&an&&br?y:Dt.left,Fa=k?vr(xr,Nn,"after"):b),O(Ji,ct.top,An-Ji,ct.bottom),ct.bottom<Dt.top&&O(y,ct.bottom,null,Dt.top),O(Un,Dt.top,Fa-Un,Dt.bottom)}(!Ct||ul(ct,Ct)<0)&&(Ct=ct),ul(Dt,Ct)<0&&(Ct=Dt),(!Bn||ul(ct,Bn)<0)&&(Bn=ct),ul(Dt,Bn)<0&&(Bn=Dt)}),{start:Ct,end:Bn}}var te=n.from(),V=n.to();if(te.line==V.line)F(te.line,te.ch,V.ch);else{var me=Xe(s,te.line),ve=Xe(s,V.line),je=Pt(me)==Pt(ve),Ee=F(te.line,te.ch,je?me.text.length+1:null).end,Oe=F(V.line,je?0:null,V.ch).start;je&&(Ee.top<Oe.top-2?(O(Ee.right,Ee.top,null,Ee.bottom),O(y,Oe.top,Oe.left,Oe.bottom)):O(Ee.right,Ee.top,Oe.left-Ee.right,Ee.bottom)),Ee.bottom<Oe.top&&O(y,Ee.bottom,null,Oe.top)}o.appendChild(u)}function Do(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var o=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(o=!o)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function mc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||dl(e))}function cl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function dl(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(At(e,"focus",e,n),e.state.focused=!0,Y(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),j&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Do(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(At(e,"blur",e,n),e.state.focused=!1,Te(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Ss(e){for(var n=e.display,o=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),s=n.lineDiv.getBoundingClientRect().top,u=0,m=0;m<n.view.length;m++){var y=n.view[m],b=e.options.lineWrapping,k=void 0,O=0;if(!y.hidden){if(s+=y.line.height,_&&P<8){var F=y.node.offsetTop+y.node.offsetHeight;k=F-o,o=F}else{var te=y.node.getBoundingClientRect();k=te.bottom-te.top,!b&&y.text.firstChild&&(O=y.text.firstChild.getBoundingClientRect().right-te.left-1)}var V=y.line.height-k;if((V>.005||V<-.005)&&(s<i&&(u-=V),On(y.line,k),ga(y.line),y.rest))for(var me=0;me<y.rest.length;me++)ga(y.rest[me]);if(O>e.display.sizerWidth){var ve=Math.ceil(O/co(e.display));ve>e.display.maxLineLength&&(e.display.maxLineLength=ve,e.display.maxLine=y.line,e.display.maxLineChanged=!0)}}}Math.abs(u)>2&&(n.scroller.scrollTop+=u)}function ga(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var o=e.widgets[n],i=o.node.parentNode;i&&(o.height=i.offsetHeight)}}function ho(e,n,o){var i=o&&o.top!=null?Math.max(0,o.top):e.scroller.scrollTop;i=Math.floor(i-ca(e));var s=o&&o.bottom!=null?o.bottom:i+e.wrapper.clientHeight,u=z(n,i),m=z(n,s);if(o&&o.ensure){var y=o.ensure.from.line,b=o.ensure.to.line;y<u?(u=y,m=z(n,_n(Xe(n,y))+e.wrapper.clientHeight)):Math.min(b,n.lastLine())>=m&&(u=z(n,_n(Xe(n,b))-e.wrapper.clientHeight),m=b)}return{from:u,to:Math.max(m,u+1)}}function gc(e,n){if(!Rt(e,"scrollCursorIntoView")){var o=e.display,i=o.sizer.getBoundingClientRect(),s=null,u=o.wrapper.ownerDocument;if(n.top+i.top<0?s=!0:n.bottom+i.top>(u.defaultView.innerHeight||u.documentElement.clientHeight)&&(s=!1),s!=null&&!M){var m=T("div","​",null,`position: absolute;
                         top: `+(n.top-o.viewOffset-ca(e.display))+`px;
                         height: `+(n.bottom-n.top+ui(e)+o.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(s),e.display.lineSpace.removeChild(m)}}}function au(e,n,o,i){i==null&&(i=0);var s;!e.options.lineWrapping&&n==o&&(o=n.sticky=="before"?de(n.line,n.ch+1,"before"):n,n=n.ch?de(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var u=0;u<5;u++){var m=!1,y=Cn(e,n),b=!o||o==n?y:Cn(e,o);s={left:Math.min(y.left,b.left),top:Math.min(y.top,b.top)-i,right:Math.max(y.left,b.left),bottom:Math.max(y.bottom,b.bottom)+i};var k=_s(e,s),O=e.doc.scrollTop,F=e.doc.scrollLeft;if(k.scrollTop!=null&&(mo(e,k.scrollTop),Math.abs(e.doc.scrollTop-O)>1&&(m=!0)),k.scrollLeft!=null&&(Gi(e,k.scrollLeft),Math.abs(e.doc.scrollLeft-F)>1&&(m=!0)),!m)break}return s}function ya(e,n){var o=_s(e,n);o.scrollTop!=null&&mo(e,o.scrollTop),o.scrollLeft!=null&&Gi(e,o.scrollLeft)}function _s(e,n){var o=e.display,i=Si(e.display);n.top<0&&(n.top=0);var s=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:o.scroller.scrollTop,u=uo(e),m={};n.bottom-n.top>u&&(n.bottom=n.top+u);var y=e.doc.height+el(o),b=n.top<i,k=n.bottom>y-i;if(n.top<s)m.scrollTop=b?0:n.top;else if(n.bottom>s+u){var O=Math.min(n.top,(k?y:n.bottom)-u);O!=s&&(m.scrollTop=O)}var F=e.options.fixedGutter?0:o.gutters.offsetWidth,te=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:o.scroller.scrollLeft-F,V=lo(e)-o.gutters.offsetWidth,me=n.right-n.left>V;return me&&(n.right=n.left+V),n.left<10?m.scrollLeft=0:n.left<te?m.scrollLeft=Math.max(0,n.left+F-(me?0:10)):n.right>V+te-3&&(m.scrollLeft=n.right+(me?0:10)-V),m}function fo(e,n){n!=null&&(xa(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function zo(e){xa(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function va(e,n,o){(n!=null||o!=null)&&xa(e),n!=null&&(e.curOp.scrollLeft=n),o!=null&&(e.curOp.scrollTop=o)}function Ud(e,n){xa(e),e.curOp.scrollToPos=n}function xa(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var o=bs(e,n.from),i=bs(e,n.to);ba(e,o,i,n.margin)}}function ba(e,n,o,i){var s=_s(e,{left:Math.min(n.left,o.left),top:Math.min(n.top,o.top)-i,right:Math.max(n.right,o.right),bottom:Math.max(n.bottom,o.bottom)+i});va(e,s.scrollLeft,s.scrollTop)}function mo(e,n){Math.abs(e.doc.scrollTop-n)<2||(x||Xi(e,{top:n}),pl(e,n,!0),x&&Xi(e),Ho(e,100))}function pl(e,n,o){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!o)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Gi(e,n,o,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((o?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,uu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Fo(e){var n=e.display,o=n.gutters.offsetWidth,i=Math.round(e.doc.height+el(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?o:0,docHeight:i,scrollHeight:i+ui(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:o}}var Yi=function(e,n,o){this.cm=o;var i=this.vert=T("div",[T("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),s=this.horiz=T("div",[T("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=s.tabIndex=-1,e(i),e(s),nt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),nt(s,"scroll",function(){s.clientWidth&&n(s.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,_&&P<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Yi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,o=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(o){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var s=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+s)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=o?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var u=e.viewWidth-e.barLeft-(o?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+u)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:o?i:0,bottom:n?i:0}},Yi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Yi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Yi.prototype.zeroWidthHack=function(){var e=ie&&!ue?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new tt,this.disableVert=new tt},Yi.prototype.enableZeroWidthBar=function(e,n,o){e.style.visibility="";function i(){var s=e.getBoundingClientRect(),u=o=="vert"?document.elementFromPoint(s.right-1,(s.top+s.bottom)/2):document.elementFromPoint((s.right+s.left)/2,s.bottom-1);u!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Yi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var wa=function(){};wa.prototype.update=function(){return{bottom:0,right:0}},wa.prototype.setScrollLeft=function(){},wa.prototype.setScrollTop=function(){},wa.prototype.clear=function(){};function Wo(e,n){n||(n=Fo(e));var o=e.display.barWidth,i=e.display.barHeight;yc(e,n);for(var s=0;s<4&&o!=e.display.barWidth||i!=e.display.barHeight;s++)o!=e.display.barWidth&&e.options.lineWrapping&&Ss(e),yc(e,Fo(e)),o=e.display.barWidth,i=e.display.barHeight}function yc(e,n){var o=e.display,i=o.scrollbars.update(n);o.sizer.style.paddingRight=(o.barWidth=i.right)+"px",o.sizer.style.paddingBottom=(o.barHeight=i.bottom)+"px",o.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(o.scrollbarFiller.style.display="block",o.scrollbarFiller.style.height=i.bottom+"px",o.scrollbarFiller.style.width=i.right+"px"):o.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(o.gutterFiller.style.display="block",o.gutterFiller.style.height=i.bottom+"px",o.gutterFiller.style.width=n.gutterWidth+"px"):o.gutterFiller.style.display=""}var vc={native:Yi,null:wa};function hl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Te(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new vc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),nt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,o){o=="horizontal"?Gi(e,n):mo(e,n)},e),e.display.scrollbars.addClass&&Y(e.display.wrapper,e.display.scrollbars.addClass)}var go=0;function yo(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++go,markArrays:null},ic(e.curOp)}function Gr(e){var n=e.curOp;n&&Ad(n,function(o){for(var i=0;i<o.ops.length;i++)o.ops[i].cm.curOp=null;Ci(o)})}function Ci(e){for(var n=e.ops,o=0;o<n.length;o++)ka(n[o]);for(var i=0;i<n.length;i++)Vi(n[i]);for(var s=0;s<n.length;s++)lu(n[s]);for(var u=0;u<n.length;u++)qd(n[u]);for(var m=0;m<n.length;m++)Kd(n[m])}function ka(e){var n=e.cm,o=n.display;en(n),e.updateMaxLine&&oa(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<o.viewFrom||e.scrollToPos.to.line>=o.viewTo)||o.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ci(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Vi(e){e.updatedDisplay=e.mustUpdate&&Gn(e.cm,e.update)}function lu(e){var n=e.cm,o=n.display;e.updatedDisplay&&Ss(n),e.barMeasure=Fo(n),o.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=Jl(n,o.maxLine,o.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(o.scroller.clientWidth,o.sizer.offsetLeft+e.adjustWidthTo+ui(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,o.sizer.offsetLeft+e.adjustWidthTo-lo(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=o.input.prepareSelection())}function qd(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Gi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var o=e.focus&&e.focus==R(Je(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,o),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Wo(n,e.barMeasure),e.updatedDisplay&&Ns(n,e.barMeasure),e.selectionChanged&&Do(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),o&&mc(e.cm)}function Kd(e){var n=e.cm,o=n.display,i=n.doc;if(e.updatedDisplay&&fr(n,e.update),o.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(o.wheelStartX=o.wheelStartY=null),e.scrollTop!=null&&pl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Gi(n,e.scrollLeft,!0,!0),e.scrollToPos){var s=au(n,ft(i,e.scrollToPos.from),ft(i,e.scrollToPos.to),e.scrollToPos.margin);gc(n,s)}var u=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(u)for(var y=0;y<u.length;++y)u[y].lines.length||At(u[y],"hide");if(m)for(var b=0;b<m.length;++b)m[b].lines.length&&At(m[b],"unhide");o.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&At(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function jn(e,n){if(e.curOp)return n();yo(e);try{return n()}finally{Gr(e)}}function cn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);yo(e);try{return n.apply(e,arguments)}finally{Gr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);yo(this);try{return e.apply(this,arguments)}finally{Gr(this)}}}function yn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);yo(n);try{return e.apply(this,arguments)}finally{Gr(n)}}}function Ho(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,Ie(Cs,e))}function Cs(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var o=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),s=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(u){if(i.line>=e.display.viewFrom){var m=u.styles,y=u.text.length>e.options.maxHighlightLength?jt(n.mode,i.state):null,b=Po(e,u,i,!0);y&&(i.state=y),u.styles=b.styles;var k=u.styleClasses,O=b.classes;O?u.styleClasses=O:k&&(u.styleClasses=null);for(var F=!m||m.length!=u.styles.length||k!=O&&(!k||!O||k.bgClass!=O.bgClass||k.textClass!=O.textClass),te=0;!F&&te<m.length;++te)F=m[te]!=u.styles[te];F&&s.push(i.line),u.stateAfter=i.save(),i.nextLine()}else u.text.length<=e.options.maxHighlightLength&&Fi(e,u.text,i),u.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>o)return Ho(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),s.length&&jn(e,function(){for(var u=0;u<s.length;u++)Ki(e,s[u],"text")})}}var ci=function(e,n,o){var i=e.display;this.viewport=n,this.visible=ho(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=lo(e),this.force=o,this.dims=al(e),this.events=[]};ci.prototype.signal=function(e,n){ln(e,n)&&this.events.push(arguments)},ci.prototype.finish=function(){for(var e=0;e<this.events.length;e++)At.apply(null,this.events[e])};function en(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ui(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ui(e)+"px",n.scrollbarsClipped=!0)}function Vt(e){if(e.hasFocus())return null;var n=R(Je(e));if(!n||!C(e.display.lineDiv,n))return null;var o={activeElt:n};if(window.getSelection){var i=ke(e).getSelection();i.anchorNode&&i.extend&&C(e.display.lineDiv,i.anchorNode)&&(o.anchorNode=i.anchorNode,o.anchorOffset=i.anchorOffset,o.focusNode=i.focusNode,o.focusOffset=i.focusOffset)}return o}function vo(e){if(!(!e||!e.activeElt||e.activeElt==R(Ve(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&C(document.body,e.anchorNode)&&C(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,o=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),o.removeAllRanges(),o.addRange(i),o.extend(e.focusNode,e.focusOffset)}}function Gn(e,n){var o=e.display,i=e.doc;if(n.editorIsHidden)return $i(e),!1;if(!n.force&&n.visible.from>=o.viewFrom&&n.visible.to<=o.viewTo&&(o.updateLineNumbers==null||o.updateLineNumbers>=o.viewTo)&&o.renderedView==o.view&&su(e)==0)return!1;cu(e)&&($i(e),n.dims=al(e));var s=i.first+i.size,u=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(s,n.visible.to+e.options.viewportMargin);o.viewFrom<u&&u-o.viewFrom<20&&(u=Math.max(i.first,o.viewFrom)),o.viewTo>m&&o.viewTo-m<20&&(m=Math.min(s,o.viewTo)),Mn&&(u=Qa(e.doc,u),m=ia(e.doc,m));var y=u!=o.viewFrom||m!=o.viewTo||o.lastWrapHeight!=n.wrapperHeight||o.lastWrapWidth!=n.wrapperWidth;fc(e,u,m),o.viewOffset=_n(Xe(e.doc,o.viewFrom)),e.display.mover.style.top=o.viewOffset+"px";var b=su(e);if(!y&&b==0&&!n.force&&o.renderedView==o.view&&(o.updateLineNumbers==null||o.updateLineNumbers>=o.viewTo))return!1;var k=Vt(e);return b>4&&(o.lineDiv.style.display="none"),Ts(e,o.updateLineNumbers,n.dims),b>4&&(o.lineDiv.style.display=""),o.renderedView=o.view,vo(k),ne(o.cursorDiv),ne(o.selectionDiv),o.gutters.style.height=o.sizer.style.minHeight=0,y&&(o.lastWrapHeight=n.wrapperHeight,o.lastWrapWidth=n.wrapperWidth,Ho(e,400)),o.updateLineNumbers=null,!0}function fr(e,n){for(var o=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==lo(e)){if(o&&o.top!=null&&(o={top:Math.min(e.doc.height+el(e.display)-uo(e),o.top)}),n.visible=ho(e.display,e.doc,o),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ho(e.display,e.doc,o));if(!Gn(e,n))break;Ss(e);var s=Fo(e);$r(e),Wo(e,s),Ns(e,s),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var o=new ci(e,n);if(Gn(e,o)){Ss(e),fr(e,o);var i=Fo(e);$r(e),Wo(e,i),Ns(e,i),o.finish()}}function Ts(e,n,o){var i=e.display,s=e.options.lineNumbers,u=i.lineDiv,m=u.firstChild;function y(me){var ve=me.nextSibling;return j&&ie&&e.display.currentWheelTarget==me?me.style.display="none":me.parentNode.removeChild(me),ve}for(var b=i.view,k=i.viewFrom,O=0;O<b.length;O++){var F=b[O];if(!F.hidden)if(!F.node||F.node.parentNode!=u){var te=Md(e,F,k,o);u.insertBefore(te,m)}else{for(;m!=F.node;)m=y(m);var V=s&&n!=null&&n<=k&&F.lineNumber;F.changes&&(Ge(F.changes,"gutter")>-1&&(V=!1),oc(e,F,k,o)),V&&(ne(F.lineNumber),F.lineNumber.appendChild(document.createTextNode(Ne(e.options,k)))),m=F.node.nextSibling}k+=F.size}for(;m;)m=y(m)}function tr(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",Dn(e,"gutterChanged",e)}function Ns(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ui(e)+"px"}function uu(e){var n=e.display,o=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=ks(n)-n.scroller.scrollLeft+e.doc.scrollLeft,s=n.gutters.offsetWidth,u=i+"px",m=0;m<o.length;m++)if(!o[m].hidden){e.options.fixedGutter&&(o[m].gutter&&(o[m].gutter.style.left=u),o[m].gutterBackground&&(o[m].gutterBackground.style.left=u));var y=o[m].alignable;if(y)for(var b=0;b<y.length;b++)y[b].style.left=u}e.options.fixedGutter&&(n.gutters.style.left=i+s+"px")}}function cu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,o=Ne(e.options,n.first+n.size-1),i=e.display;if(o.length!=i.lineNumChars){var s=i.measure.appendChild(T("div",[T("div",o)],"CodeMirror-linenumber CodeMirror-gutter-elt")),u=s.firstChild.offsetWidth,m=s.offsetWidth-u;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(u,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?o.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",tr(e.display),!0}return!1}function Es(e,n){for(var o=[],i=!1,s=0;s<e.length;s++){var u=e[s],m=null;if(typeof u!="string"&&(m=u.style,u=u.className),u=="CodeMirror-linenumbers")if(n)i=!0;else continue;o.push({className:u,style:m})}return n&&!i&&o.push({className:"CodeMirror-linenumbers",style:null}),o}function du(e){var n=e.gutters,o=e.gutterSpecs;ne(n),e.lineGutter=null;for(var i=0;i<o.length;++i){var s=o[i],u=s.className,m=s.style,y=n.appendChild(T("div",null,"CodeMirror-gutter "+u));m&&(y.style.cssText=m),u=="CodeMirror-linenumbers"&&(e.lineGutter=y,y.style.width=(e.lineNumWidth||1)+"px")}n.style.display=o.length?"":"none",tr(e)}function Mr(e){du(e.display),er(e),uu(e)}function fl(e,n,o,i){var s=this;this.input=o,s.scrollbarFiller=T("div",null,"CodeMirror-scrollbar-filler"),s.scrollbarFiller.setAttribute("cm-not-content","true"),s.gutterFiller=T("div",null,"CodeMirror-gutter-filler"),s.gutterFiller.setAttribute("cm-not-content","true"),s.lineDiv=Q("div",null,"CodeMirror-code"),s.selectionDiv=T("div",null,null,"position: relative; z-index: 1"),s.cursorDiv=T("div",null,"CodeMirror-cursors"),s.measure=T("div",null,"CodeMirror-measure"),s.lineMeasure=T("div",null,"CodeMirror-measure"),s.lineSpace=Q("div",[s.measure,s.lineMeasure,s.selectionDiv,s.cursorDiv,s.lineDiv],null,"position: relative; outline: none");var u=Q("div",[s.lineSpace],"CodeMirror-lines");s.mover=T("div",[u],null,"position: relative"),s.sizer=T("div",[s.mover],"CodeMirror-sizer"),s.sizerWidth=null,s.heightForcer=T("div",null,null,"position: absolute; height: "+qt+"px; width: 1px;"),s.gutters=T("div",null,"CodeMirror-gutters"),s.lineGutter=null,s.scroller=T("div",[s.sizer,s.heightForcer,s.gutters],"CodeMirror-scroll"),s.scroller.setAttribute("tabIndex","-1"),s.wrapper=T("div",[s.scrollbarFiller,s.gutterFiller,s.scroller],"CodeMirror"),I&&ee===105&&(s.wrapper.style.clipPath="inset(0px)"),s.wrapper.setAttribute("translate","no"),_&&P<8&&(s.gutters.style.zIndex=-1,s.scroller.style.paddingRight=0),!j&&!(x&&K)&&(s.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(s.wrapper):e(s.wrapper)),s.viewFrom=s.viewTo=n.first,s.reportedViewFrom=s.reportedViewTo=n.first,s.view=[],s.renderedView=null,s.externalMeasured=null,s.viewOffset=0,s.lastWrapHeight=s.lastWrapWidth=0,s.updateLineNumbers=null,s.nativeBarWidth=s.barHeight=s.barWidth=0,s.scrollbarsClipped=!1,s.lineNumWidth=s.lineNumInnerWidth=s.lineNumChars=null,s.alignWidgets=!1,s.cachedCharWidth=s.cachedTextHeight=s.cachedPaddingH=null,s.maxLine=null,s.maxLineLength=0,s.maxLineChanged=!1,s.wheelDX=s.wheelDY=s.wheelStartX=s.wheelStartY=null,s.shift=!1,s.selForContextMenu=null,s.activeTouch=null,s.gutterSpecs=Es(i.gutters,i.lineNumbers),du(s),o.init(s)}var Ls=0,Ti=null;_?Ti=-.53:x?Ti=15:I?Ti=-.7:X&&(Ti=-1/3);function xc(e){var n=e.wheelDeltaX,o=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),o==null&&e.detail&&e.axis==e.VERTICAL_AXIS?o=e.detail:o==null&&(o=e.wheelDelta),{x:n,y:o}}function xo(e){var n=xc(e);return n.x*=Ti,n.y*=Ti,n}function Bo(e,n){I&&ee==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var o=xc(n),i=o.x,s=o.y,u=Ti;n.deltaMode===0&&(i=n.deltaX,s=n.deltaY,u=1);var m=e.display,y=m.scroller,b=y.scrollWidth>y.clientWidth,k=y.scrollHeight>y.clientHeight;if(i&&b||s&&k){if(s&&ie&&j){e:for(var O=n.target,F=m.view;O!=y;O=O.parentNode)for(var te=0;te<F.length;te++)if(F[te].node==O){e.display.currentWheelTarget=O;break e}}if(i&&!x&&!oe&&u!=null){s&&k&&mo(e,Math.max(0,y.scrollTop+s*u)),Gi(e,Math.max(0,y.scrollLeft+i*u)),(!s||s&&k)&&wn(n),m.wheelStartX=null;return}if(s&&u!=null){var V=s*u,me=e.doc.scrollTop,ve=me+m.wrapper.clientHeight;V<0?me=Math.max(0,me+V-50):ve=Math.min(e.doc.height,ve+V+50),Xi(e,{top:me,bottom:ve})}Ls<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=y.scrollLeft,m.wheelStartY=y.scrollTop,m.wheelDX=i,m.wheelDY=s,setTimeout(function(){if(m.wheelStartX!=null){var je=y.scrollLeft-m.wheelStartX,Ee=y.scrollTop-m.wheelStartY,Oe=Ee&&m.wheelDY&&Ee/m.wheelDY||je&&m.wheelDX&&je/m.wheelDX;m.wheelStartX=m.wheelStartY=null,Oe&&(Ti=(Ti*Ls+Oe)/(Ls+1),++Ls)}},200)):(m.wheelDX+=i,m.wheelDY+=s))}}var Yn=function(e,n){this.ranges=e,this.primIndex=n};Yn.prototype.primary=function(){return this.ranges[this.primIndex]},Yn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var o=this.ranges[n],i=e.ranges[n];if(!_t(o.anchor,i.anchor)||!_t(o.head,i.head))return!1}return!0},Yn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new Lt(Jt(this.ranges[n].anchor),Jt(this.ranges[n].head));return new Yn(e,this.primIndex)},Yn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Yn.prototype.contains=function(e,n){n||(n=e);for(var o=0;o<this.ranges.length;o++){var i=this.ranges[o];if(ze(n,i.from())>=0&&ze(e,i.to())<=0)return o}return-1};var Lt=function(e,n){this.anchor=e,this.head=n};Lt.prototype.from=function(){return si(this.anchor,this.head)},Lt.prototype.to=function(){return Sn(this.anchor,this.head)},Lt.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function jr(e,n,o){var i=e&&e.options.selectionsMayTouch,s=n[o];n.sort(function(te,V){return ze(te.from(),V.from())}),o=Ge(n,s);for(var u=1;u<n.length;u++){var m=n[u],y=n[u-1],b=ze(y.to(),m.from());if(i&&!m.empty()?b>0:b>=0){var k=si(y.from(),m.from()),O=Sn(y.to(),m.to()),F=y.empty()?m.from()==m.head:y.from()==y.head;u<=o&&--o,n.splice(--u,2,new Lt(F?O:k,F?k:O))}}return new Yn(n,o)}function zn(e,n){return new Yn([new Lt(e,n||e)],0)}function Fn(e){return e.text?de(e.from.line+e.text.length-1,Ke(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function bo(e,n){if(ze(e,n.from)<0)return e;if(ze(e,n.to)<=0)return Fn(n);var o=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Fn(n).ch-n.to.ch),de(o,i)}function di(e,n){for(var o=[],i=0;i<e.sel.ranges.length;i++){var s=e.sel.ranges[i];o.push(new Lt(bo(s.anchor,n),bo(s.head,n)))}return jr(e.cm,o,e.sel.primIndex)}function Ni(e,n,o){return e.line==n.line?de(o.line,e.ch-n.ch+o.ch):de(o.line+(e.line-n.line),e.ch)}function Uo(e,n,o){for(var i=[],s=de(e.first,0),u=s,m=0;m<n.length;m++){var y=n[m],b=Ni(y.from,s,u),k=Ni(Fn(y),s,u);if(s=y.to,u=k,o=="around"){var O=e.sel.ranges[m],F=ze(O.head,O.anchor)<0;i[m]=new Lt(F?k:b,F?b:k)}else i[m]=new Lt(b,b)}return new Yn(i,e.sel.primIndex)}function ml(e){e.doc.mode=Di(e.options,e.doc.modeOption),qo(e)}function qo(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Ho(e,100),e.state.modeGen++,e.curOp&&er(e)}function gl(e,n){return n.from.ch==0&&n.to.ch==0&&Ke(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function mr(e,n,o,i){function s(Oe){return o?o[Oe]:null}function u(Oe,Re,Ue){Td(Oe,Re,Ue,i),Dn(Oe,"change",Oe,n)}function m(Oe,Re){for(var Ue=[],st=Oe;st<Re;++st)Ue.push(new wi(k[st],s(st),i));return Ue}var y=n.from,b=n.to,k=n.text,O=Xe(e,y.line),F=Xe(e,b.line),te=Ke(k),V=s(k.length-1),me=b.line-y.line;if(n.full)e.insert(0,m(0,k.length)),e.remove(k.length,e.size-k.length);else if(gl(e,n)){var ve=m(0,k.length-1);u(F,F.text,V),me&&e.remove(y.line,me),ve.length&&e.insert(y.line,ve)}else if(O==F)if(k.length==1)u(O,O.text.slice(0,y.ch)+te+O.text.slice(b.ch),V);else{var je=m(1,k.length-1);je.push(new wi(te+O.text.slice(b.ch),V,i)),u(O,O.text.slice(0,y.ch)+k[0],s(0)),e.insert(y.line+1,je)}else if(k.length==1)u(O,O.text.slice(0,y.ch)+k[0]+F.text.slice(b.ch),s(0)),e.remove(y.line+1,me);else{u(O,O.text.slice(0,y.ch)+k[0],s(0)),u(F,te+F.text.slice(b.ch),V);var Ee=m(1,k.length-1);me>1&&e.remove(y.line+1,me-1),e.insert(y.line+1,Ee)}Dn(e,"change",e,n)}function Pn(e,n,o){function i(s,u,m){if(s.linked)for(var y=0;y<s.linked.length;++y){var b=s.linked[y];if(b.doc!=u){var k=m&&b.sharedHist;o&&!k||(n(b.doc,k),i(b.doc,s,k))}}}i(e,null,!0)}function tn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,ha(e),ml(e),Yr(e),e.options.direction=n.direction,e.options.lineWrapping||oa(e),e.options.mode=n.modeOption,er(e)}function Yr(e){(e.doc.direction=="rtl"?Y:Te)(e.display.lineDiv,"CodeMirror-rtl")}function bc(e){jn(e,function(){Yr(e),er(e)})}function Sa(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function _a(e,n){var o={from:Jt(n.from),to:Fn(n),text:oi(e,n.from,n.to)};return Sc(e,o,n.from.line,n.to.line+1),Pn(e,function(i){return Sc(i,o,n.from.line,n.to.line+1)},!0),o}function yl(e){for(;e.length;){var n=Ke(e);if(n.ranges)e.pop();else break}}function wc(e,n){if(n)return yl(e.done),Ke(e.done);if(e.done.length&&!Ke(e.done).ranges)return Ke(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Ke(e.done)}function Ca(e,n,o,i){var s=e.history;s.undone.length=0;var u=+new Date,m,y;if((s.lastOp==i||s.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&s.lastModTime>u-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=wc(s,s.lastOp==i)))y=Ke(m.changes),ze(n.from,n.to)==0&&ze(n.from,y.to)==0?y.to=Fn(n):m.changes.push(_a(e,n));else{var b=Ke(s.done);for((!b||!b.ranges)&&Ps(e.sel,s.done),m={changes:[_a(e,n)],generation:s.generation},s.done.push(m);s.done.length>s.undoDepth;)s.done.shift(),s.done[0].ranges||s.done.shift()}s.done.push(o),s.generation=++s.maxGeneration,s.lastModTime=s.lastSelTime=u,s.lastOp=s.lastSelOp=i,s.lastOrigin=s.lastSelOrigin=n.origin,y||At(e,"historyAdded")}function kc(e,n,o,i){var s=n.charAt(0);return s=="*"||s=="+"&&o.ranges.length==i.ranges.length&&o.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function js(e,n,o,i){var s=e.history,u=i&&i.origin;o==s.lastSelOp||u&&s.lastSelOrigin==u&&(s.lastModTime==s.lastSelTime&&s.lastOrigin==u||kc(e,u,Ke(s.done),n))?s.done[s.done.length-1]=n:Ps(n,s.done),s.lastSelTime=+new Date,s.lastSelOrigin=u,s.lastSelOp=o,i&&i.clearRedo!==!1&&yl(s.undone)}function Ps(e,n){var o=Ke(n);o&&o.ranges&&o.equals(e)||n.push(e)}function Sc(e,n,o,i){var s=n["spans_"+e.id],u=0;e.iter(Math.max(e.first,o),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((s||(s=n["spans_"+e.id]={}))[u]=m.markedSpans),++u})}function Ta(e){if(!e)return null;for(var n,o=0;o<e.length;++o)e[o].marker.explicitlyCleared?n||(n=e.slice(0,o)):n&&n.push(e[o]);return n?n.length?n:null:e}function vl(e,n){var o=n["spans_"+e.id];if(!o)return null;for(var i=[],s=0;s<n.text.length;++s)i.push(Ta(o[s]));return i}function pu(e,n){var o=vl(e,n),i=Se(e,n);if(!o)return i;if(!i)return o;for(var s=0;s<o.length;++s){var u=o[s],m=i[s];if(u&&m)e:for(var y=0;y<m.length;++y){for(var b=m[y],k=0;k<u.length;++k)if(u[k].marker==b.marker)continue e;u.push(b)}else m&&(o[s]=m)}return o}function Ko(e,n,o){for(var i=[],s=0;s<e.length;++s){var u=e[s];if(u.ranges){i.push(o?Yn.prototype.deepCopy.call(u):u);continue}var m=u.changes,y=[];i.push({changes:y});for(var b=0;b<m.length;++b){var k=m[b],O=void 0;if(y.push({from:k.from,to:k.to,text:k.text}),n)for(var F in k)(O=F.match(/^spans_(\d+)$/))&&Ge(n,Number(O[1]))>-1&&(Ke(y)[F]=k[F],delete k[F])}}return i}function wo(e,n,o,i){if(i){var s=e.anchor;if(o){var u=ze(n,s)<0;u!=ze(o,s)<0?(s=n,n=o):u!=ze(n,o)<0&&(n=o)}return new Lt(s,n)}else return new Lt(o||n,n)}function Na(e,n,o,i,s){s==null&&(s=e.cm&&(e.cm.display.shift||e.extend)),Wn(e,new Yn([wo(e.sel.primary(),n,o,s)],0),i)}function Ea(e,n,o){for(var i=[],s=e.cm&&(e.cm.display.shift||e.extend),u=0;u<e.sel.ranges.length;u++)i[u]=wo(e.sel.ranges[u],n[u],null,s);var m=jr(e.cm,i,e.sel.primIndex);Wn(e,m,o)}function As(e,n,o,i){var s=e.sel.ranges.slice(0);s[n]=o,Wn(e,jr(e.cm,s,e.sel.primIndex),i)}function $o(e,n,o,i){Wn(e,zn(n,o),i)}function hu(e,n,o){var i={ranges:n.ranges,update:function(s){this.ranges=[];for(var u=0;u<s.length;u++)this.ranges[u]=new Lt(ft(e,s[u].anchor),ft(e,s[u].head))},origin:o&&o.origin};return At(e,"beforeSelectionChange",e,i),e.cm&&At(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?jr(e.cm,i.ranges,i.ranges.length-1):n}function xl(e,n,o){var i=e.history.done,s=Ke(i);s&&s.ranges?(i[i.length-1]=n,Rs(e,n,o)):Wn(e,n,o)}function Wn(e,n,o){Rs(e,n,o),js(e,e.sel,e.cm?e.cm.curOp.id:NaN,o)}function Rs(e,n,o){(ln(e,"beforeSelectionChange")||e.cm&&ln(e.cm,"beforeSelectionChange"))&&(n=hu(e,n,o));var i=o&&o.bias||(ze(n.primary().head,e.sel.primary().head)<0?-1:1);Go(e,ko(e,n,i,!0)),!(o&&o.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&zo(e.cm)}function Go(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,En(e.cm)),Dn(e,"cursorActivity",e))}function Dr(e){Go(e,ko(e,e.sel,null,!1))}function ko(e,n,o,i){for(var s,u=0;u<n.ranges.length;u++){var m=n.ranges[u],y=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[u],b=La(e,m.anchor,y&&y.anchor,o,i),k=m.head==m.anchor?b:La(e,m.head,y&&y.head,o,i);(s||b!=m.anchor||k!=m.head)&&(s||(s=n.ranges.slice(0,u)),s[u]=new Lt(b,k))}return s?jr(e.cm,s,n.primIndex):n}function So(e,n,o,i,s){var u=Xe(e,n.line);if(u.markedSpans)for(var m=0;m<u.markedSpans.length;++m){var y=u.markedSpans[m],b=y.marker,k="selectLeft"in b?!b.selectLeft:b.inclusiveLeft,O="selectRight"in b?!b.selectRight:b.inclusiveRight;if((y.from==null||(k?y.from<=n.ch:y.from<n.ch))&&(y.to==null||(O?y.to>=n.ch:y.to>n.ch))){if(s&&(At(b,"beforeCursorEnter"),b.explicitlyCleared))if(u.markedSpans){--m;continue}else break;if(!b.atomic)continue;if(o){var F=b.find(i<0?1:-1),te=void 0;if((i<0?O:k)&&(F=Ei(e,F,-i,F&&F.line==n.line?u:null)),F&&F.line==n.line&&(te=ze(F,o))&&(i<0?te<0:te>0))return So(e,F,n,i,s)}var V=b.find(i<0?-1:1);return(i<0?k:O)&&(V=Ei(e,V,i,V.line==n.line?u:null)),V?So(e,V,n,i,s):null}}return n}function La(e,n,o,i,s){var u=i||1,m=So(e,n,o,u,s)||!s&&So(e,n,o,u,!0)||So(e,n,o,-u,s)||!s&&So(e,n,o,-u,!0);return m||(e.cantEdit=!0,de(e.first,0))}function Ei(e,n,o,i){return o<0&&n.ch==0?n.line>e.first?ft(e,de(n.line-1)):null:o>0&&n.ch==(i||Xe(e,n.line)).text.length?n.line<e.first+e.size-1?de(n.line+1,0):null:new de(n.line,n.ch+o)}function Qi(e){e.setSelection(de(e.firstLine(),0),de(e.lastLine()),$t)}function bl(e,n,o){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return o&&(i.update=function(s,u,m,y){s&&(i.from=ft(e,s)),u&&(i.to=ft(e,u)),m&&(i.text=m),y!==void 0&&(i.origin=y)}),At(e,"beforeChange",e,i),e.cm&&At(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Yo(e,n,o){if(e.cm){if(!e.cm.curOp)return cn(e.cm,Yo)(e,n,o);if(e.cm.state.suppressEdits)return}if(!((ln(e,"beforeChange")||e.cm&&ln(e.cm,"beforeChange"))&&(n=bl(e,n,!0),!n))){var i=Ir&&!o&&Z(e,n.from,n.to);if(i)for(var s=i.length-1;s>=0;--s)Li(e,{from:i[s].from,to:i[s].to,text:s?[""]:n.text,origin:n.origin});else Li(e,n)}}function Li(e,n){if(!(n.text.length==1&&n.text[0]==""&&ze(n.from,n.to)==0)){var o=di(e,n);Ca(e,n,o,e.cm?e.cm.curOp.id:NaN),Is(e,n,o,Se(e,n));var i=[];Pn(e,function(s,u){!u&&Ge(i,s.history)==-1&&(Ms(s.history,n),i.push(s.history)),Is(s,n,null,Se(s,n))})}}function pi(e,n,o){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!o)){for(var s=e.history,u,m=e.sel,y=n=="undo"?s.done:s.undone,b=n=="undo"?s.undone:s.done,k=0;k<y.length&&(u=y[k],!(o?u.ranges&&!u.equals(e.sel):!u.ranges));k++);if(k!=y.length){for(s.lastOrigin=s.lastSelOrigin=null;;)if(u=y.pop(),u.ranges){if(Ps(u,b),o&&!u.equals(e.sel)){Wn(e,u,{clearRedo:!1});return}m=u}else if(i){y.push(u);return}else break;var O=[];Ps(m,b),b.push({changes:O,generation:s.generation}),s.generation=u.generation||++s.maxGeneration;for(var F=ln(e,"beforeChange")||e.cm&&ln(e.cm,"beforeChange"),te=function(ve){var je=u.changes[ve];if(je.origin=n,F&&!bl(e,je,!1))return y.length=0,{};O.push(_a(e,je));var Ee=ve?di(e,je):Ke(y);Is(e,je,Ee,pu(e,je)),!ve&&e.cm&&e.cm.scrollIntoView({from:je.from,to:Fn(je)});var Oe=[];Pn(e,function(Re,Ue){!Ue&&Ge(Oe,Re.history)==-1&&(Ms(Re.history,je),Oe.push(Re.history)),Is(Re,je,null,pu(Re,je))})},V=u.changes.length-1;V>=0;--V){var me=te(V);if(me)return me.v}}}}function ja(e,n){if(n!=0&&(e.first+=n,e.sel=new Yn(vt(e.sel.ranges,function(s){return new Lt(de(s.anchor.line+n,s.anchor.ch),de(s.head.line+n,s.head.ch))}),e.sel.primIndex),e.cm)){er(e.cm,e.first,e.first-n,n);for(var o=e.cm.display,i=o.viewFrom;i<o.viewTo;i++)Ki(e.cm,i,"gutter")}}function Is(e,n,o,i){if(e.cm&&!e.cm.curOp)return cn(e.cm,Is)(e,n,o,i);if(n.to.line<e.first){ja(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var s=n.text.length-1-(e.first-n.from.line);ja(e,s),n={from:de(e.first,0),to:de(n.to.line+s,n.to.ch),text:[Ke(n.text)],origin:n.origin}}var u=e.lastLine();n.to.line>u&&(n={from:n.from,to:de(u,Xe(e,u).text.length),text:[n.text[0]],origin:n.origin}),n.removed=oi(e,n.from,n.to),o||(o=di(e,n)),e.cm?wl(e.cm,n,i):mr(e,n,i),Rs(e,o,$t),e.cantEdit&&La(e,de(e.firstLine(),0))&&(e.cantEdit=!1)}}function wl(e,n,o){var i=e.doc,s=e.display,u=n.from,m=n.to,y=!1,b=u.line;e.options.lineWrapping||(b=S(Pt(Xe(i,u.line))),i.iter(b,m.line+1,function(V){if(V==s.maxLine)return y=!0,!0})),i.sel.contains(n.from,n.to)>-1&&En(e),mr(i,n,o,Mo(e)),e.options.lineWrapping||(i.iter(b,u.line+n.text.length,function(V){var me=Hi(V);me>s.maxLineLength&&(s.maxLine=V,s.maxLineLength=me,s.maxLineChanged=!0,y=!1)}),y&&(e.curOp.updateMaxLine=!0)),pr(i,u.line),Ho(e,400);var k=n.text.length-(m.line-u.line)-1;n.full?er(e):u.line==m.line&&n.text.length==1&&!gl(e.doc,n)?Ki(e,u.line,"text"):er(e,u.line,m.line+1,k);var O=ln(e,"changes"),F=ln(e,"change");if(F||O){var te={from:u,to:m,text:n.text,removed:n.removed,origin:n.origin};F&&Dn(e,"change",e,te),O&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(te)}e.display.selForContextMenu=null}function Vo(e,n,o,i,s){var u;i||(i=o),ze(i,o)<0&&(u=[i,o],o=u[0],i=u[1]),typeof n=="string"&&(n=e.splitLines(n)),Yo(e,{from:o,to:i,text:n,origin:s})}function Os(e,n,o,i){o<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function hi(e,n,o,i){for(var s=0;s<e.length;++s){var u=e[s],m=!0;if(u.ranges){u.copied||(u=e[s]=u.deepCopy(),u.copied=!0);for(var y=0;y<u.ranges.length;y++)Os(u.ranges[y].anchor,n,o,i),Os(u.ranges[y].head,n,o,i);continue}for(var b=0;b<u.changes.length;++b){var k=u.changes[b];if(o<k.from.line)k.from=de(k.from.line+i,k.from.ch),k.to=de(k.to.line+i,k.to.ch);else if(n<=k.to.line){m=!1;break}}m||(e.splice(0,s+1),s=0)}}function Ms(e,n){var o=n.from.line,i=n.to.line,s=n.text.length-(i-o)-1;hi(e.done,o,i,s),hi(e.undone,o,i,s)}function Zi(e,n,o,i){var s=n,u=n;return typeof n=="number"?u=Xe(e,Va(e,n)):s=S(n),s==null?null:(i(u,s)&&e.cm&&Ki(e.cm,s,o),u)}function fi(e){this.lines=e,this.parent=null;for(var n=0,o=0;o<e.length;++o)e[o].parent=this,n+=e[o].height;this.height=n}fi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var o=e,i=e+n;o<i;++o){var s=this.lines[o];this.height-=s.height,ql(s),Dn(s,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,o){this.height+=o,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,o){for(var i=e+n;e<i;++e)if(o(this.lines[e]))return!0}};function Xo(e){this.children=e;for(var n=0,o=0,i=0;i<e.length;++i){var s=e[i];n+=s.chunkSize(),o+=s.height,s.parent=this}this.size=n,this.height=o,this.parent=null}Xo.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var o=0;o<this.children.length;++o){var i=this.children[o],s=i.chunkSize();if(e<s){var u=Math.min(n,s-e),m=i.height;if(i.removeInner(e,u),this.height-=m-i.height,s==u&&(this.children.splice(o--,1),i.parent=null),(n-=u)==0)break;e=0}else e-=s}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof fi))){var y=[];this.collapse(y),this.children=[new fi(y)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,o){this.size+=n.length,this.height+=o;for(var i=0;i<this.children.length;++i){var s=this.children[i],u=s.chunkSize();if(e<=u){if(s.insertInner(e,n,o),s.lines&&s.lines.length>50){for(var m=s.lines.length%25+25,y=m;y<s.lines.length;){var b=new fi(s.lines.slice(y,y+=25));s.height-=b.height,this.children.splice(++i,0,b),b.parent=this}s.lines=s.lines.slice(0,m),this.maybeSpill()}break}e-=u}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),o=new Xo(n);if(e.parent){e.size-=o.size,e.height-=o.height;var s=Ge(e.parent.children,e);e.parent.children.splice(s+1,0,o)}else{var i=new Xo(e.children);i.parent=e,e.children=[i,o],e=i}o.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,o){for(var i=0;i<this.children.length;++i){var s=this.children[i],u=s.chunkSize();if(e<u){var m=Math.min(n,u-e);if(s.iterN(e,m,o))return!0;if((n-=m)==0)break;e=0}else e-=u}}};var ji=function(e,n,o){if(o)for(var i in o)o.hasOwnProperty(i)&&(this[i]=o[i]);this.doc=e,this.node=n};ji.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,o=this.line,i=S(o);if(!(i==null||!n)){for(var s=0;s<n.length;++s)n[s]==this&&n.splice(s--,1);n.length||(o.widgets=null);var u=Bi(this);On(o,Math.max(0,o.height-u)),e&&(jn(e,function(){fu(e,o,-u),Ki(e,i,"widget")}),Dn(e,"lineWidgetCleared",e,this,i))}},ji.prototype.changed=function(){var e=this,n=this.height,o=this.doc.cm,i=this.line;this.height=null;var s=Bi(this)-n;s&&(li(this.doc,i)||On(i,i.height+s),o&&jn(o,function(){o.curOp.forceUpdate=!0,fu(o,i,s),Dn(o,"lineWidgetChanged",o,e,S(i))}))},ar(ji);function fu(e,n,o){_n(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&fo(e,o)}function mu(e,n,o,i){var s=new ji(e,o,i),u=e.cm;return u&&s.noHScroll&&(u.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var y=m.widgets||(m.widgets=[]);if(s.insertAt==null?y.push(s):y.splice(Math.min(y.length,Math.max(0,s.insertAt)),0,s),s.line=m,u&&!li(e,m)){var b=_n(m)<e.scrollTop;On(m,m.height+Bi(s)),b&&fo(u,s.height),u.curOp.forceUpdate=!0}return!0}),u&&Dn(u,"lineWidgetAdded",u,s,typeof n=="number"?n:S(n)),s}var sn=0,mi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++sn};mi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&yo(e),ln(this,"clear")){var o=this.find();o&&Dn(this,"clear",o.from,o.to)}for(var i=null,s=null,u=0;u<this.lines.length;++u){var m=this.lines[u],y=Io(m.markedSpans,this);e&&!this.collapsed?Ki(e,S(m),"text"):e&&(y.to!=null&&(s=S(m)),y.from!=null&&(i=S(m))),m.markedSpans=ra(m.markedSpans,y),y.from==null&&this.collapsed&&!li(this.doc,m)&&e&&On(m,Si(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var b=0;b<this.lines.length;++b){var k=Pt(this.lines[b]),O=Hi(k);O>e.display.maxLineLength&&(e.display.maxLine=k,e.display.maxLineLength=O,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&er(e,i,s+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Dr(e.doc)),e&&Dn(e,"markerCleared",e,this,i,s),n&&Gr(e),this.parent&&this.parent.clear()}},mi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var o,i,s=0;s<this.lines.length;++s){var u=this.lines[s],m=Io(u.markedSpans,this);if(m.from!=null&&(o=de(n?u:S(u),m.from),e==-1))return o;if(m.to!=null&&(i=de(n?u:S(u),m.to),e==1))return i}return o&&{from:o,to:i}},mi.prototype.changed=function(){var e=this,n=this.find(-1,!0),o=this,i=this.doc.cm;!n||!i||jn(i,function(){var s=n.line,u=S(n.line),m=tl(i,u);if(m&&(nl(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!li(o.doc,s)&&o.height!=null){var y=o.height;o.height=null;var b=Bi(o)-y;b&&On(s,s.height+b)}Dn(i,"markerChanged",i,e)})},mi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||Ge(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},mi.prototype.detachLine=function(e){if(this.lines.splice(Ge(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},ar(mi);function _o(e,n,o,i,s){if(i&&i.shared)return kl(e,n,o,i,s);if(e.cm&&!e.cm.curOp)return cn(e.cm,_o)(e,n,o,i,s);var u=new mi(e,s),m=ze(n,o);if(i&&He(i,u,!1),m>0||m==0&&u.clearWhenEmpty!==!1)return u;if(u.replacedWith&&(u.collapsed=!0,u.widgetNode=Q("span",[u.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||u.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(u.widgetNode.insertLeft=!0)),u.collapsed){if(bi(e,n.line,n,o,u)||n.line!=o.line&&bi(e,o.line,n,o,u))throw new Error("Inserting collapsed marker partially overlapping an existing one");ao()}u.addToHistory&&Ca(e,{from:n,to:o,origin:"markText"},e.sel,NaN);var y=n.line,b=e.cm,k;if(e.iter(y,o.line+1,function(F){b&&u.collapsed&&!b.options.lineWrapping&&Pt(F)==b.display.maxLine&&(k=!0),u.collapsed&&y!=n.line&&On(F,0),Wi(F,new Or(u,y==n.line?n.ch:null,y==o.line?o.ch:null),e.cm&&e.cm.curOp),++y}),u.collapsed&&e.iter(n.line,o.line+1,function(F){li(e,F)&&On(F,0)}),u.clearOnEnter&&nt(u,"beforeCursorEnter",function(){return u.clear()}),u.readOnly&&(Ro(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),u.collapsed&&(u.id=++sn,u.atomic=!0),b){if(k&&(b.curOp.updateMaxLine=!0),u.collapsed)er(b,n.line,o.line+1);else if(u.className||u.startStyle||u.endStyle||u.css||u.attributes||u.title)for(var O=n.line;O<=o.line;O++)Ki(b,O,"text");u.atomic&&Dr(b.doc),Dn(b,"markerAdded",b,u)}return u}var Qo=function(e,n){this.markers=e,this.primary=n;for(var o=0;o<e.length;++o)e[o].parent=this};Qo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Dn(this,"clear")}},Qo.prototype.find=function(e,n){return this.primary.find(e,n)},ar(Qo);function kl(e,n,o,i,s){i=He(i),i.shared=!1;var u=[_o(e,n,o,i,s)],m=u[0],y=i.widgetNode;return Pn(e,function(b){y&&(i.widgetNode=y.cloneNode(!0)),u.push(_o(b,ft(b,n),ft(b,o),i,s));for(var k=0;k<b.linked.length;++k)if(b.linked[k].isParent)return;m=Ke(u)}),new Qo(u,m)}function Sl(e){return e.findMarks(de(e.first,0),e.clipPos(de(e.lastLine())),function(n){return n.parent})}function Zo(e,n){for(var o=0;o<n.length;o++){var i=n[o],s=i.find(),u=e.clipPos(s.from),m=e.clipPos(s.to);if(ze(u,m)){var y=_o(e,u,m,i.primary,i.primary.type);i.markers.push(y),y.parent=i}}}function dn(e){for(var n=function(i){var s=e[i],u=[s.primary.doc];Pn(s.primary.doc,function(b){return u.push(b)});for(var m=0;m<s.markers.length;m++){var y=s.markers[m];Ge(u,y.doc)==-1&&(y.parent=null,s.markers.splice(m--,1))}},o=0;o<e.length;o++)n(o)}var Hn=0,It=function(e,n,o,i,s){if(!(this instanceof It))return new It(e,n,o,i,s);o==null&&(o=0),Xo.call(this,[new fi([new wi("",null)])]),this.first=o,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=o;var u=de(o,0);this.sel=zn(u),this.history=new Sa(null),this.id=++Hn,this.modeOption=n,this.lineSep=i,this.direction=s=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),mr(this,{from:u,to:u,text:e}),Wn(this,zn(u),$t)};It.prototype=ge(Xo.prototype,{constructor:It,iter:function(e,n,o){o?this.iterN(e-this.first,n-e,o):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var o=0,i=0;i<n.length;++i)o+=n[i].height;this.insertInner(e-this.first,n,o)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cr(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:yn(function(e){var n=de(this.first,0),o=this.first+this.size-1;Yo(this,{from:n,to:de(o,Xe(this,o).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&va(this.cm,0,0),Wn(this,zn(n),$t)}),replaceRange:function(e,n,o,i){n=ft(this,n),o=o?ft(this,o):n,Vo(this,e,n,o,i)},getRange:function(e,n,o){var i=oi(this,ft(this,e),ft(this,n));return o===!1?i:o===""?i.join(""):i.join(o||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(fe(this,e))return Xe(this,e)},getLineNumber:function(e){return S(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Xe(this,e)),Pt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ft(this,e)},getCursor:function(e){var n=this.sel.primary(),o;return e==null||e=="head"?o=n.head:e=="anchor"?o=n.anchor:e=="end"||e=="to"||e===!1?o=n.to():o=n.from(),o},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yn(function(e,n,o){$o(this,ft(this,typeof e=="number"?de(e,n||0):e),null,o)}),setSelection:yn(function(e,n,o){$o(this,ft(this,e),ft(this,n||e),o)}),extendSelection:yn(function(e,n,o){Na(this,ft(this,e),n&&ft(this,n),o)}),extendSelections:yn(function(e,n){Ea(this,ta(this,e),n)}),extendSelectionsBy:yn(function(e,n){var o=vt(this.sel.ranges,e);Ea(this,ta(this,o),n)}),setSelections:yn(function(e,n,o){if(e.length){for(var i=[],s=0;s<e.length;s++)i[s]=new Lt(ft(this,e[s].anchor),ft(this,e[s].head||e[s].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Wn(this,jr(this.cm,i,n),o)}}),addSelection:yn(function(e,n,o){var i=this.sel.ranges.slice(0);i.push(new Lt(ft(this,e),ft(this,n||e))),Wn(this,jr(this.cm,i,i.length-1),o)}),getSelection:function(e){for(var n=this.sel.ranges,o,i=0;i<n.length;i++){var s=oi(this,n[i].from(),n[i].to());o=o?o.concat(s):s}return e===!1?o:o.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],o=this.sel.ranges,i=0;i<o.length;i++){var s=oi(this,o[i].from(),o[i].to());e!==!1&&(s=s.join(e||this.lineSeparator())),n[i]=s}return n},replaceSelection:function(e,n,o){for(var i=[],s=0;s<this.sel.ranges.length;s++)i[s]=e;this.replaceSelections(i,n,o||"+input")},replaceSelections:yn(function(e,n,o){for(var i=[],s=this.sel,u=0;u<s.ranges.length;u++){var m=s.ranges[u];i[u]={from:m.from(),to:m.to(),text:this.splitLines(e[u]),origin:o}}for(var y=n&&n!="end"&&Uo(this,i,n),b=i.length-1;b>=0;b--)Yo(this,i[b]);y?xl(this,y):this.cm&&zo(this.cm)}),undo:yn(function(){pi(this,"undo")}),redo:yn(function(){pi(this,"redo")}),undoSelection:yn(function(){pi(this,"undo",!0)}),redoSelection:yn(function(){pi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,o=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var s=0;s<e.undone.length;s++)e.undone[s].ranges||++o;return{undo:n,redo:o}},clearHistory:function(){var e=this;this.history=new Sa(this.history),Pn(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ko(this.history.done),undone:Ko(this.history.undone)}},setHistory:function(e){var n=this.history=new Sa(this.history);n.done=Ko(e.done.slice(0),null,!0),n.undone=Ko(e.undone.slice(0),null,!0)},setGutterMarker:yn(function(e,n,o){return Zi(this,e,"gutter",function(i){var s=i.gutterMarkers||(i.gutterMarkers={});return s[n]=o,!o&&qe(s)&&(i.gutterMarkers=null),!0})}),clearGutter:yn(function(e){var n=this;this.iter(function(o){o.gutterMarkers&&o.gutterMarkers[e]&&Zi(n,o,"gutter",function(){return o.gutterMarkers[e]=null,qe(o.gutterMarkers)&&(o.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!fe(this,e)||(n=e,e=Xe(this,e),!e))return null}else if(n=S(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:yn(function(e,n,o){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var s=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[s])i[s]=o;else{if($(o).test(i[s]))return!1;i[s]+=" "+o}return!0})}),removeLineClass:yn(function(e,n,o){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var s=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",u=i[s];if(u)if(o==null)i[s]=null;else{var m=u.match($(o));if(!m)return!1;var y=m.index+m[0].length;i[s]=u.slice(0,m.index)+(!m.index||y==u.length?"":" ")+u.slice(y)||null}else return!1;return!0})}),addLineWidget:yn(function(e,n,o){return mu(this,e,n,o)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,o){return _o(this,ft(this,e),ft(this,n),o,o&&o.type||"range")},setBookmark:function(e,n){var o={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=ft(this,e),_o(this,e,e,o,"bookmark")},findMarksAt:function(e){e=ft(this,e);var n=[],o=Xe(this,e.line).markedSpans;if(o)for(var i=0;i<o.length;++i){var s=o[i];(s.from==null||s.from<=e.ch)&&(s.to==null||s.to>=e.ch)&&n.push(s.marker.parent||s.marker)}return n},findMarks:function(e,n,o){e=ft(this,e),n=ft(this,n);var i=[],s=e.line;return this.iter(e.line,n.line+1,function(u){var m=u.markedSpans;if(m)for(var y=0;y<m.length;y++){var b=m[y];!(b.to!=null&&s==e.line&&e.ch>=b.to||b.from==null&&s!=e.line||b.from!=null&&s==n.line&&b.from>=n.ch)&&(!o||o(b.marker))&&i.push(b.marker.parent||b.marker)}++s}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var o=n.markedSpans;if(o)for(var i=0;i<o.length;++i)o[i].from!=null&&e.push(o[i].marker)}),e},posFromIndex:function(e){var n,o=this.first,i=this.lineSeparator().length;return this.iter(function(s){var u=s.text.length+i;if(u>e)return n=e,!0;e-=u,++o}),ft(this,de(o,n))},indexFromPos:function(e){e=ft(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var o=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+o}),n},copy:function(e){var n=new It(cr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,o=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<o&&(o=e.to);var i=new It(cr(this,n,o),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Zo(i,Sl(this)),i},unlinkDoc:function(e){if(e instanceof Xt&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var o=this.linked[n];if(o.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),dn(Sl(this));break}}if(e.history==this.history){var i=[e.id];Pn(e,function(s){return i.push(s.id)},!0),e.history=new Sa(null),e.history.done=Ko(this.history.done,i),e.history.undone=Ko(this.history.undone,i)}},iterLinkedDocs:function(e){Pn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ur(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:yn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&bc(this.cm))})}),It.prototype.eachLine=It.prototype.iter;var Pa=0;function Aa(e){var n=this;if(Zn(n),!(Rt(n,e)||Ui(n.display,e))){wn(e),_&&(Pa=+new Date);var o=po(n,e,!0),i=e.dataTransfer.files;if(!(!o||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var s=i.length,u=Array(s),m=0,y=function(){++m==s&&cn(n,function(){o=ft(n.doc,o);var V={from:o,to:o,text:n.doc.splitLines(u.filter(function(me){return me!=null}).join(n.doc.lineSeparator())),origin:"paste"};Yo(n.doc,V),xl(n.doc,zn(ft(n.doc,o),ft(n.doc,Fn(V))))})()},b=function(V,me){if(n.options.allowDropFileTypes&&Ge(n.options.allowDropFileTypes,V.type)==-1){y();return}var ve=new FileReader;ve.onerror=function(){return y()},ve.onload=function(){var je=ve.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(je)){y();return}u[me]=je,y()},ve.readAsText(V)},k=0;k<i.length;k++)b(i[k],k);else{if(n.state.draggingText&&n.doc.sel.contains(o)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var O=e.dataTransfer.getData("Text");if(O){var F;if(n.state.draggingText&&!n.state.draggingText.copy&&(F=n.listSelections()),Rs(n.doc,zn(o,o)),F)for(var te=0;te<F.length;++te)Vo(n.doc,"",F[te].anchor,F[te].head,"drag");n.replaceSelection(O,"around","paste"),n.display.input.focus()}}catch{}}}}function Ra(e,n){if(_&&(!e.state.draggingText||+new Date-Pa<100)){lr(n);return}if(!(Rt(e,n)||Ui(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!X)){var o=T("img",null,null,"position: fixed; left: 0; top: 0;");o.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",oe&&(o.width=o.height=1,e.display.wrapper.appendChild(o),o._top=o.offsetTop),n.dataTransfer.setDragImage(o,0,0),oe&&o.parentNode.removeChild(o)}}function $d(e,n){var o=po(e,n);if(o){var i=document.createDocumentFragment();ma(e,o,i),e.display.dragCursor||(e.display.dragCursor=T("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ye(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function _l(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),o=[],i=0;i<n.length;i++){var s=n[i].CodeMirror;s&&o.push(s)}o.length&&o[0].operation(function(){for(var u=0;u<o.length;u++)e(o[u])})}}var Cl=!1;function gu(){Cl||(Pi(),Cl=!0)}function Pi(){var e;nt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,_l(Vr)},100))}),nt(window,"blur",function(){return _l(Wt)})}function Vr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Jo=0;Jo<10;Jo++)Xr[Jo+48]=Xr[Jo+96]=String(Jo);for(var Ds=65;Ds<=90;Ds++)Xr[Ds]=String.fromCharCode(Ds);for(var zs=1;zs<=12;zs++)Xr[zs+111]=Xr[zs+63235]="F"+zs;var Ai={};Ai.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ai.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ai.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ai.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ai.default=ie?Ai.macDefault:Ai.pcDefault;function _c(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var o,i,s,u,m=0;m<n.length-1;m++){var y=n[m];if(/^(cmd|meta|m)$/i.test(y))u=!0;else if(/^a(lt)?$/i.test(y))o=!0;else if(/^(c|ctrl|control)$/i.test(y))i=!0;else if(/^s(hift)?$/i.test(y))s=!0;else throw new Error("Unrecognized modifier name: "+y)}return o&&(e="Alt-"+e),i&&(e="Ctrl-"+e),u&&(e="Cmd-"+e),s&&(e="Shift-"+e),e}function Cc(e){var n={};for(var o in e)if(e.hasOwnProperty(o)){var i=e[o];if(/^(name|fallthrough|(de|at)tach)$/.test(o))continue;if(i=="..."){delete e[o];continue}for(var s=vt(o.split(" "),_c),u=0;u<s.length;u++){var m=void 0,y=void 0;u==s.length-1?(y=s.join(" "),m=i):(y=s.slice(0,u+1).join(" "),m="...");var b=n[y];if(!b)n[y]=m;else if(b!=m)throw new Error("Inconsistent bindings for "+y)}delete e[o]}for(var k in n)e[k]=n[k];return e}function es(e,n,o,i){n=Co(n);var s=n.call?n.call(e,i):n[e];if(s===!1)return"nothing";if(s==="...")return"multi";if(s!=null&&o(s))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return es(e,n.fallthrough,o,i);for(var u=0;u<n.fallthrough.length;u++){var m=es(e,n.fallthrough[u],o,i);if(m)return m}}}function yu(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function vu(e,n,o){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(Fe?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(Fe?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!o&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function xu(e,n){if(oe&&e.keyCode==34&&e.char)return!1;var o=Xr[e.keyCode];return o==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(o=e.code),vu(o,e,n))}function Co(e){return typeof e=="string"?Ai[e]:e}function ts(e,n){for(var o=e.doc.sel.ranges,i=[],s=0;s<o.length;s++){for(var u=n(o[s]);i.length&&ze(u.from,Ke(i).to)<=0;){var m=i.pop();if(ze(m.from,u.from)<0){u.from=m.from;break}}i.push(u)}jn(e,function(){for(var y=i.length-1;y>=0;y--)Vo(e.doc,"",i[y].from,i[y].to,"+delete");zo(e)})}function Fs(e,n,o){var i=mn(e.text,n+o,o);return i<0||i>e.text.length?null:i}function Ws(e,n,o){var i=Fs(e,n.ch,o);return i==null?null:new de(n.line,i,o<0?"after":"before")}function Tl(e,n,o,i,s){if(e){n.doc.direction=="rtl"&&(s=-s);var u=gt(o,n.doc.direction);if(u){var m=s<0?Ke(u):u[0],y=s<0==(m.level==1),b=y?"after":"before",k;if(m.level>0||n.doc.direction=="rtl"){var O=ki(n,o);k=s<0?o.text.length-1:0;var F=Lr(n,O,k).top;k=Xn(function(te){return Lr(n,O,te).top==F},s<0==(m.level==1)?m.from:m.to-1,k),b=="before"&&(k=Fs(o,k,1))}else k=s<0?m.to:m.from;return new de(i,k,b)}}return new de(i,s<0?o.text.length:0,s<0?"before":"after")}function bu(e,n,o,i){var s=gt(n,e.doc.direction);if(!s)return Ws(n,o,i);o.ch>=n.text.length?(o.ch=n.text.length,o.sticky="before"):o.ch<=0&&(o.ch=0,o.sticky="after");var u=sr(s,o.ch,o.sticky),m=s[u];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>o.ch:m.from<o.ch))return Ws(n,o,i);var y=function(Ee,Oe){return Fs(n,Ee instanceof de?Ee.ch:Ee,Oe)},b,k=function(Ee){return e.options.lineWrapping?(b=b||ki(e,n),ou(e,n,b,Ee)):{begin:0,end:n.text.length}},O=k(o.sticky=="before"?y(o,-1):o.ch);if(e.doc.direction=="rtl"||m.level==1){var F=m.level==1==i<0,te=y(o,F?1:-1);if(te!=null&&(F?te<=m.to&&te<=O.end:te>=m.from&&te>=O.begin)){var V=F?"before":"after";return new de(o.line,te,V)}}var me=function(Ee,Oe,Re){for(var Ue=function(Ct,Bn){return Bn?new de(o.line,y(Ct,1),"before"):new de(o.line,Ct,"after")};Ee>=0&&Ee<s.length;Ee+=Oe){var st=s[Ee],Ye=Oe>0==(st.level!=1),wt=Ye?Re.begin:y(Re.end,-1);if(st.from<=wt&&wt<st.to||(wt=Ye?st.from:y(st.to,-1),Re.begin<=wt&&wt<Re.end))return Ue(wt,Ye)}},ve=me(u+i,i,O);if(ve)return ve;var je=i>0?O.end:y(O.begin,-1);return je!=null&&!(i>0&&je==n.text.length)&&(ve=me(i>0?0:s.length-1,i,k(je)),ve)?ve:null}var Hs={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),$t)},killLine:function(e){return ts(e,function(n){if(n.empty()){var o=Xe(e.doc,n.head.line).text.length;return n.head.ch==o&&n.head.line<e.lastLine()?{from:n.head,to:de(n.head.line+1,0)}:{from:n.head,to:de(n.head.line,o)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ts(e,function(n){return{from:de(n.from().line,0),to:ft(e.doc,de(n.to().line+1,0))}})},delLineLeft:function(e){return ts(e,function(n){return{from:de(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ts(e,function(n){var o=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:o},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ts(e,function(n){var o=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:o},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(de(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(de(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return wu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return ku(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return Tc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var o=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:o},"div")},et)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var o=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:o},"div")},et)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var o=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:o},"div");return i.ch<e.getLine(i.line).search(/\S/)?ku(e,n.head):i},et)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],o=e.listSelections(),i=e.options.tabSize,s=0;s<o.length;s++){var u=o[s].from(),m=Be(e.getLine(u.line),u.ch,i);n.push(Zt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return jn(e,function(){for(var n=e.listSelections(),o=[],i=0;i<n.length;i++)if(n[i].empty()){var s=n[i].head,u=Xe(e.doc,s.line).text;if(u){if(s.ch==u.length&&(s=new de(s.line,s.ch-1)),s.ch>0)s=new de(s.line,s.ch+1),e.replaceRange(u.charAt(s.ch-1)+u.charAt(s.ch-2),de(s.line,s.ch-2),s,"+transpose");else if(s.line>e.doc.first){var m=Xe(e.doc,s.line-1).text;m&&(s=new de(s.line,1),e.replaceRange(u.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),de(s.line-1,m.length-1),s,"+transpose"))}}o.push(new Lt(s,s))}e.setSelections(o)})},newlineAndIndent:function(e){return jn(e,function(){for(var n=e.listSelections(),o=n.length-1;o>=0;o--)e.replaceRange(e.doc.lineSeparator(),n[o].anchor,n[o].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);zo(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function wu(e,n){var o=Xe(e.doc,n),i=Pt(o);return i!=o&&(n=S(i)),Tl(!0,e,i,n,1)}function Tc(e,n){var o=Xe(e.doc,n),i=ys(o);return i!=o&&(n=S(i)),Tl(!0,e,o,n,-1)}function ku(e,n){var o=wu(e,n.line),i=Xe(e.doc,o.line),s=gt(i,e.doc.direction);if(!s||s[0].level==0){var u=Math.max(o.ch,i.text.search(/\S/)),m=n.line==o.line&&n.ch<=u&&n.ch;return de(o.line,m?0:u,o.sticky)}return o}function Bs(e,n,o){if(typeof n=="string"&&(n=Hs[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,s=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),o&&(e.display.shift=!1),s=n(e)!=Qt}finally{e.display.shift=i,e.state.suppressEdits=!1}return s}function Nc(e,n,o){for(var i=0;i<e.state.keyMaps.length;i++){var s=es(n,e.state.keyMaps[i],o,e);if(s)return s}return e.options.extraKeys&&es(n,e.options.extraKeys,o,e)||es(n,e.options.keyMap,o,e)}var Ec=new tt;function Us(e,n,o,i){var s=e.state.keySeq;if(s){if(yu(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Ec.set(50,function(){e.state.keySeq==s&&(e.state.keySeq=null,e.display.input.reset())}),Lc(e,s+" "+n,o,i))return!0}return Lc(e,n,o,i)}function Lc(e,n,o,i){var s=Nc(e,n,i);return s=="multi"&&(e.state.keySeq=n),s=="handled"&&Dn(e,"keyHandled",e,n,o),(s=="handled"||s=="multi")&&(wn(o),Do(e)),!!s}function Su(e,n){var o=xu(n,!0);return o?n.shiftKey&&!e.state.keySeq?Us(e,"Shift-"+o,n,function(i){return Bs(e,i,!0)})||Us(e,o,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return Bs(e,i)}):Us(e,o,n,function(i){return Bs(e,i)}):!1}function Gd(e,n,o){return Us(e,"'"+o+"'",n,function(i){return Bs(e,i,!0)})}var _u=null;function Cu(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=R(Je(n)),!Rt(n,e))){_&&P<11&&e.keyCode==27&&(e.returnValue=!1);var o=e.keyCode;n.display.shift=o==16||e.shiftKey;var i=Su(n,e);oe&&(_u=i?o:null,!i&&o==88&&!jo&&(ie?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),x&&!ie&&!i&&o==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),o==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&jc(n)}}function jc(e){var n=e.display.lineDiv;Y(n,"CodeMirror-crosshair");function o(i){(i.keyCode==18||!i.altKey)&&(Te(n,"CodeMirror-crosshair"),Gt(document,"keyup",o),Gt(document,"mouseover",o))}nt(document,"keyup",o),nt(document,"mouseover",o)}function Tu(e){e.keyCode==16&&(this.doc.sel.shift=!1),Rt(this,e)}function Ia(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(Ui(n.display,e)||Rt(n,e)||e.ctrlKey&&!e.altKey||ie&&e.metaKey)){var o=e.keyCode,i=e.charCode;if(oe&&o==_u){_u=null,wn(e);return}if(!(oe&&(!e.which||e.which<10)&&Su(n,e))){var s=String.fromCharCode(i??o);s!="\b"&&(Gd(n,e,s)||n.display.input.onKeyPress(e))}}}var Yd=400,Nu=function(e,n,o){this.time=e,this.pos=n,this.button=o};Nu.prototype.compare=function(e,n,o){return this.time+Yd>e&&ze(n,this.pos)==0&&o==this.button};var Oa,gr;function Eu(e,n){var o=+new Date;return gr&&gr.compare(o,e,n)?(Oa=gr=null,"triple"):Oa&&Oa.compare(o,e,n)?(gr=new Nu(o,e,n),Oa=null,"double"):(Oa=new Nu(o,e,n),gr=null,"single")}function Ma(e){var n=this,o=n.display;if(!(Rt(n,e)||o.activeTouch&&o.input.supportsTouch())){if(o.input.ensurePolled(),o.shift=e.shiftKey,Ui(o,e)){j||(o.scroller.draggable=!1,setTimeout(function(){return o.scroller.draggable=!0},100));return}if(!Nl(n,e)){var i=po(n,e),s=Ln(e),u=i?Eu(i,s):"single";ke(n).focus(),s==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Pc(n,s,i,u,e))&&(s==1?i?Rc(n,i,u,e):Hr(e)==o.scroller&&wn(e):s==2?(i&&Na(n.doc,i),setTimeout(function(){return o.input.focus()},20)):s==3&&(_e?n.display.input.onContextMenu(e):cl(n)))}}}function Pc(e,n,o,i,s){var u="Click";return i=="double"?u="Double"+u:i=="triple"&&(u="Triple"+u),u=(n==1?"Left":n==2?"Middle":"Right")+u,Us(e,vu(u,s),s,function(m){if(typeof m=="string"&&(m=Hs[m]),!m)return!1;var y=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),y=m(e,o)!=Qt}finally{e.state.suppressEdits=!1}return y})}function Ac(e,n,o){var i=e.getOption("configureMouse"),s=i?i(e,n,o):{};if(s.unit==null){var u=pe?o.shiftKey&&o.metaKey:o.altKey;s.unit=u?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(s.extend==null||e.doc.extend)&&(s.extend=e.doc.extend||o.shiftKey),s.addNew==null&&(s.addNew=ie?o.metaKey:o.ctrlKey),s.moveOnDrag==null&&(s.moveOnDrag=!(ie?o.altKey:o.ctrlKey)),s}function Rc(e,n,o,i){_?setTimeout(Ie(mc,e),0):e.curOp.focus=R(Je(e));var s=Ac(e,o,i),u=e.doc.sel,m;e.options.dragDrop&&Tr&&!e.isReadOnly()&&o=="single"&&(m=u.contains(n))>-1&&(ze((m=u.ranges[m]).from(),n)<0||n.xRel>0)&&(ze(m.to(),n)>0||n.xRel<0)?Lu(e,i,n,s):ju(e,i,n,s)}function Lu(e,n,o,i){var s=e.display,u=!1,m=cn(e,function(k){j&&(s.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:cl(e)),Gt(s.wrapper.ownerDocument,"mouseup",m),Gt(s.wrapper.ownerDocument,"mousemove",y),Gt(s.scroller,"dragstart",b),Gt(s.scroller,"drop",m),u||(wn(k),i.addNew||Na(e.doc,o,null,null,i.extend),j&&!X||_&&P==9?setTimeout(function(){s.wrapper.ownerDocument.body.focus({preventScroll:!0}),s.input.focus()},20):s.input.focus())}),y=function(k){u=u||Math.abs(n.clientX-k.clientX)+Math.abs(n.clientY-k.clientY)>=10},b=function(){return u=!0};j&&(s.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,nt(s.wrapper.ownerDocument,"mouseup",m),nt(s.wrapper.ownerDocument,"mousemove",y),nt(s.scroller,"dragstart",b),nt(s.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return s.input.focus()},20),s.scroller.dragDrop&&s.scroller.dragDrop()}function ns(e,n,o){if(o=="char")return new Lt(n,n);if(o=="word")return e.findWordAt(n);if(o=="line")return new Lt(de(n.line,0),ft(e.doc,de(n.line+1,0)));var i=o(e,n);return new Lt(i.from,i.to)}function ju(e,n,o,i){_&&cl(e);var s=e.display,u=e.doc;wn(n);var m,y,b=u.sel,k=b.ranges;if(i.addNew&&!i.extend?(y=u.sel.contains(o),y>-1?m=k[y]:m=new Lt(o,o)):(m=u.sel.primary(),y=u.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new Lt(o,o)),o=po(e,n,!0,!0),y=-1;else{var O=ns(e,o,i.unit);i.extend?m=wo(m,O.anchor,O.head,i.extend):m=O}i.addNew?y==-1?(y=k.length,Wn(u,jr(e,k.concat([m]),y),{scroll:!1,origin:"*mouse"})):k.length>1&&k[y].empty()&&i.unit=="char"&&!i.extend?(Wn(u,jr(e,k.slice(0,y).concat(k.slice(y+1)),0),{scroll:!1,origin:"*mouse"}),b=u.sel):As(u,y,m,fn):(y=0,Wn(u,new Yn([m],0),fn),b=u.sel);var F=o;function te(Re){if(ze(F,Re)!=0)if(F=Re,i.unit=="rectangle"){for(var Ue=[],st=e.options.tabSize,Ye=Be(Xe(u,o.line).text,o.ch,st),wt=Be(Xe(u,Re.line).text,Re.ch,st),Ct=Math.min(Ye,wt),Bn=Math.max(Ye,wt),nn=Math.min(o.line,Re.line),vr=Math.min(e.lastLine(),Math.max(o.line,Re.line));nn<=vr;nn++){var rr=Xe(u,nn).text,vn=bt(rr,Ct,st);Ct==Bn?Ue.push(new Lt(de(nn,vn),de(nn,vn))):rr.length>vn&&Ue.push(new Lt(de(nn,vn),de(nn,bt(rr,Bn,st))))}Ue.length||Ue.push(new Lt(o,o)),Wn(u,jr(e,b.ranges.slice(0,y).concat(Ue),y),{origin:"*mouse",scroll:!1}),e.scrollIntoView(Re)}else{var xr=m,Nn=ns(e,Re,i.unit),xn=xr.anchor,Mt;ze(Nn.anchor,xn)>0?(Mt=Nn.head,xn=si(xr.from(),Nn.anchor)):(Mt=Nn.anchor,xn=Sn(xr.to(),Nn.head));var ct=b.ranges.slice(0);ct[y]=Pu(e,new Lt(ft(u,xn),Mt)),Wn(u,jr(e,ct,y),fn)}}var V=s.wrapper.getBoundingClientRect(),me=0;function ve(Re){var Ue=++me,st=po(e,Re,!0,i.unit=="rectangle");if(st)if(ze(st,F)!=0){e.curOp.focus=R(Je(e)),te(st);var Ye=ho(s,u);(st.line>=Ye.to||st.line<Ye.from)&&setTimeout(cn(e,function(){me==Ue&&ve(Re)}),150)}else{var wt=Re.clientY<V.top?-20:Re.clientY>V.bottom?20:0;wt&&setTimeout(cn(e,function(){me==Ue&&(s.scroller.scrollTop+=wt,ve(Re))}),50)}}function je(Re){e.state.selectingText=!1,me=1/0,Re&&(wn(Re),s.input.focus()),Gt(s.wrapper.ownerDocument,"mousemove",Ee),Gt(s.wrapper.ownerDocument,"mouseup",Oe),u.history.lastSelOrigin=null}var Ee=cn(e,function(Re){Re.buttons===0||!Ln(Re)?je(Re):ve(Re)}),Oe=cn(e,je);e.state.selectingText=Oe,nt(s.wrapper.ownerDocument,"mousemove",Ee),nt(s.wrapper.ownerDocument,"mouseup",Oe)}function Pu(e,n){var o=n.anchor,i=n.head,s=Xe(e.doc,o.line);if(ze(o,i)==0&&o.sticky==i.sticky)return n;var u=gt(s);if(!u)return n;var m=sr(u,o.ch,o.sticky),y=u[m];if(y.from!=o.ch&&y.to!=o.ch)return n;var b=m+(y.from==o.ch==(y.level!=1)?0:1);if(b==0||b==u.length)return n;var k;if(i.line!=o.line)k=(i.line-o.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var O=sr(u,i.ch,i.sticky),F=O-m||(i.ch-o.ch)*(y.level==1?-1:1);O==b-1||O==b?k=F<0:k=F>0}var te=u[b+(k?-1:0)],V=k==(te.level==1),me=V?te.from:te.to,ve=V?"after":"before";return o.ch==me&&o.sticky==ve?n:new Lt(new de(o.line,me,ve),i)}function Ic(e,n,o,i){var s,u;if(n.touches)s=n.touches[0].clientX,u=n.touches[0].clientY;else try{s=n.clientX,u=n.clientY}catch{return!1}if(s>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,y=m.lineDiv.getBoundingClientRect();if(u>y.bottom||!ln(e,o))return In(n);u-=y.top-m.viewOffset;for(var b=0;b<e.display.gutterSpecs.length;++b){var k=m.gutters.childNodes[b];if(k&&k.getBoundingClientRect().right>=s){var O=z(e.doc,u),F=e.display.gutterSpecs[b];return At(e,o,e,O,F.className,n),In(n)}}}function Nl(e,n){return Ic(e,n,"gutterClick",!0)}function Au(e,n){Ui(e.display,n)||Oc(e,n)||Rt(e,n,"contextmenu")||_e||e.display.input.onContextMenu(n)}function Oc(e,n){return ln(e,"gutterContextMenu")?Ic(e,n,"gutterContextMenu",!1):!1}function Ru(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),xs(e)}var rs={toString:function(){return"CodeMirror.Init"}},Mc={},Jn={};function yr(e){var n=e.optionHandlers;function o(i,s,u,m){e.defaults[i]=s,u&&(n[i]=m?function(y,b,k){k!=rs&&u(y,b,k)}:u)}e.defineOption=o,e.Init=rs,o("value","",function(i,s){return i.setValue(s)},!0),o("mode",null,function(i,s){i.doc.modeOption=s,ml(i)},!0),o("indentUnit",2,ml,!0),o("indentWithTabs",!1),o("smartIndent",!0),o("tabSize",4,function(i){qo(i),xs(i),er(i)},!0),o("lineSeparator",null,function(i,s){if(i.doc.lineSep=s,!!s){var u=[],m=i.doc.first;i.doc.iter(function(b){for(var k=0;;){var O=b.text.indexOf(s,k);if(O==-1)break;k=O+s.length,u.push(de(m,O))}m++});for(var y=u.length-1;y>=0;y--)Vo(i.doc,s,u[y],de(u[y].line,u[y].ch+s.length))}}),o("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,s,u){i.state.specialChars=new RegExp(s.source+(s.test("	")?"":"|	"),"g"),u!=rs&&i.refresh()}),o("specialCharPlaceholder",Nd,function(i){return i.refresh()},!0),o("electricChars",!0),o("inputStyle",K?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),o("spellcheck",!1,function(i,s){return i.getInputField().spellcheck=s},!0),o("autocorrect",!1,function(i,s){return i.getInputField().autocorrect=s},!0),o("autocapitalize",!1,function(i,s){return i.getInputField().autocapitalize=s},!0),o("rtlMoveVisually",!re),o("wholeLineUpdateBefore",!0),o("theme","default",function(i){Ru(i),Mr(i)},!0),o("keyMap","default",function(i,s,u){var m=Co(s),y=u!=rs&&Co(u);y&&y.detach&&y.detach(i,m),m.attach&&m.attach(i,y||null)}),o("extraKeys",null),o("configureMouse",null),o("lineWrapping",!1,zc,!0),o("gutters",[],function(i,s){i.display.gutterSpecs=Es(s,i.options.lineNumbers),Mr(i)},!0),o("fixedGutter",!0,function(i,s){i.display.gutters.style.left=s?ks(i.display)+"px":"0",i.refresh()},!0),o("coverGutterNextToScrollbar",!1,function(i){return Wo(i)},!0),o("scrollbarStyle","native",function(i){hl(i),Wo(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),o("lineNumbers",!1,function(i,s){i.display.gutterSpecs=Es(i.options.gutters,s),Mr(i)},!0),o("firstLineNumber",1,Mr,!0),o("lineNumberFormatter",function(i){return i},Mr,!0),o("showCursorWhenSelecting",!1,$r,!0),o("resetSelectionOnContextMenu",!0),o("lineWiseCopyCut",!0),o("pasteLinesPerSelection",!0),o("selectionsMayTouch",!1),o("readOnly",!1,function(i,s){s=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(s)}),o("screenReaderLabel",null,function(i,s){s=s===""?null:s,i.display.input.screenReaderLabelChanged(s)}),o("disableInput",!1,function(i,s){s||i.display.input.reset()},!0),o("dragDrop",!0,Dc),o("allowDropFileTypes",null),o("cursorBlinkRate",530),o("cursorScrollMargin",0),o("cursorHeight",1,$r,!0),o("singleCursorHeightPerLine",!0,$r,!0),o("workTime",100),o("workDelay",100),o("flattenSpans",!0,qo,!0),o("addModeClass",!1,qo,!0),o("pollInterval",100),o("undoDepth",200,function(i,s){return i.doc.history.undoDepth=s}),o("historyEventDelay",1250),o("viewportMargin",10,function(i){return i.refresh()},!0),o("maxHighlightLength",1e4,qo,!0),o("moveInputWithCursor",!0,function(i,s){s||i.display.input.resetPosition()}),o("tabindex",null,function(i,s){return i.display.input.getField().tabIndex=s||""}),o("autofocus",null),o("direction","ltr",function(i,s){return i.doc.setDirection(s)},!0),o("phrases",null)}function Dc(e,n,o){var i=o&&o!=rs;if(!n!=!i){var s=e.display.dragFunctions,u=n?nt:Gt;u(e.display.scroller,"dragstart",s.start),u(e.display.scroller,"dragenter",s.enter),u(e.display.scroller,"dragover",s.over),u(e.display.scroller,"dragleave",s.leave),u(e.display.scroller,"drop",s.drop)}}function zc(e){e.options.lineWrapping?(Y(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Te(e.display.wrapper,"CodeMirror-wrap"),oa(e)),ha(e),er(e),xs(e),setTimeout(function(){return Wo(e)},100)}function Xt(e,n){var o=this;if(!(this instanceof Xt))return new Xt(e,n);this.options=n=n?He(n):{},He(Mc,n,!1);var i=n.value;typeof i=="string"?i=new It(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var s=new Xt.inputStyles[n.inputStyle](this),u=this.display=new fl(e,i,s,n);u.wrapper.CodeMirror=this,Ru(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),hl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new tt,keySeq:null,specialChars:null},n.autofocus&&!K&&u.input.focus(),_&&P<11&&setTimeout(function(){return o.display.input.reset(!0)},20),Fc(this),gu(),yo(this),this.curOp.forceUpdate=!0,tn(this,i),n.autofocus&&!K||this.hasFocus()?setTimeout(function(){o.hasFocus()&&!o.state.focused&&dl(o)},20):Wt(this);for(var m in Jn)Jn.hasOwnProperty(m)&&Jn[m](this,n[m],rs);cu(this),n.finishInit&&n.finishInit(this);for(var y=0;y<El.length;++y)El[y](this);Gr(this),j&&n.lineWrapping&&getComputedStyle(u.lineDiv).textRendering=="optimizelegibility"&&(u.lineDiv.style.textRendering="auto")}Xt.defaults=Mc,Xt.optionHandlers=Jn;function Fc(e){var n=e.display;nt(n.scroller,"mousedown",cn(e,Ma)),_&&P<11?nt(n.scroller,"dblclick",cn(e,function(b){if(!Rt(e,b)){var k=po(e,b);if(!(!k||Nl(e,b)||Ui(e.display,b))){wn(b);var O=e.findWordAt(k);Na(e.doc,O.anchor,O.head)}}})):nt(n.scroller,"dblclick",function(b){return Rt(e,b)||wn(b)}),nt(n.scroller,"contextmenu",function(b){return Au(e,b)}),nt(n.input.getField(),"contextmenu",function(b){n.scroller.contains(b.target)||Au(e,b)});var o,i={end:0};function s(){n.activeTouch&&(o=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function u(b){if(b.touches.length!=1)return!1;var k=b.touches[0];return k.radiusX<=1&&k.radiusY<=1}function m(b,k){if(k.left==null)return!0;var O=k.left-b.left,F=k.top-b.top;return O*O+F*F>400}nt(n.scroller,"touchstart",function(b){if(!Rt(e,b)&&!u(b)&&!Nl(e,b)){n.input.ensurePolled(),clearTimeout(o);var k=+new Date;n.activeTouch={start:k,moved:!1,prev:k-i.end<=300?i:null},b.touches.length==1&&(n.activeTouch.left=b.touches[0].pageX,n.activeTouch.top=b.touches[0].pageY)}}),nt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),nt(n.scroller,"touchend",function(b){var k=n.activeTouch;if(k&&!Ui(n,b)&&k.left!=null&&!k.moved&&new Date-k.start<300){var O=e.coordsChar(n.activeTouch,"page"),F;!k.prev||m(k,k.prev)?F=new Lt(O,O):!k.prev.prev||m(k,k.prev.prev)?F=e.findWordAt(O):F=new Lt(de(O.line,0),ft(e.doc,de(O.line+1,0))),e.setSelection(F.anchor,F.head),e.focus(),wn(b)}s()}),nt(n.scroller,"touchcancel",s),nt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(mo(e,n.scroller.scrollTop),Gi(e,n.scroller.scrollLeft,!0),At(e,"scroll",e))}),nt(n.scroller,"mousewheel",function(b){return Bo(e,b)}),nt(n.scroller,"DOMMouseScroll",function(b){return Bo(e,b)}),nt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(b){Rt(e,b)||lr(b)},over:function(b){Rt(e,b)||($d(e,b),lr(b))},start:function(b){return Ra(e,b)},drop:cn(e,Aa),leave:function(b){Rt(e,b)||Zn(e)}};var y=n.input.getField();nt(y,"keyup",function(b){return Tu.call(e,b)}),nt(y,"keydown",cn(e,Cu)),nt(y,"keypress",cn(e,Ia)),nt(y,"focus",function(b){return dl(e,b)}),nt(y,"blur",function(b){return Wt(e,b)})}var El=[];Xt.defineInitHook=function(e){return El.push(e)};function is(e,n,o,i){var s=e.doc,u;o==null&&(o="add"),o=="smart"&&(s.mode.indent?u=Nt(e,n).state:o="prev");var m=e.options.tabSize,y=Xe(s,n),b=Be(y.text,null,m);y.stateAfter&&(y.stateAfter=null);var k=y.text.match(/^\s*/)[0],O;if(!i&&!/\S/.test(y.text))O=0,o="not";else if(o=="smart"&&(O=s.mode.indent(u,y.text.slice(k.length),y.text),O==Qt||O>150)){if(!i)return;o="prev"}o=="prev"?n>s.first?O=Be(Xe(s,n-1).text,null,m):O=0:o=="add"?O=b+e.options.indentUnit:o=="subtract"?O=b-e.options.indentUnit:typeof o=="number"&&(O=b+o),O=Math.max(0,O);var F="",te=0;if(e.options.indentWithTabs)for(var V=Math.floor(O/m);V;--V)te+=m,F+="	";if(te<O&&(F+=Zt(O-te)),F!=k)return Vo(s,F,de(n,0),de(n,k.length),"+input"),y.stateAfter=null,!0;for(var me=0;me<s.sel.ranges.length;me++){var ve=s.sel.ranges[me];if(ve.head.line==n&&ve.head.ch<k.length){var je=de(n,k.length);As(s,me,new Lt(je,je));break}}}var Qr=null;function qs(e){Qr=e}function Ll(e,n,o,i,s){var u=e.doc;e.display.shift=!1,i||(i=u.sel);var m=+new Date-200,y=s=="paste"||e.state.pasteIncoming>m,b=ur(n),k=null;if(y&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){k=[];for(var O=0;O<Qr.text.length;O++)k.push(u.splitLines(Qr.text[O]))}}else b.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(k=vt(b,function(Ee){return[Ee]}));for(var F=e.curOp.updateInput,te=i.ranges.length-1;te>=0;te--){var V=i.ranges[te],me=V.from(),ve=V.to();V.empty()&&(o&&o>0?me=de(me.line,me.ch-o):e.state.overwrite&&!y?ve=de(ve.line,Math.min(Xe(u,ve.line).text.length,ve.ch+Ke(b).length)):y&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==b.join(`
`)&&(me=ve=de(me.line,0)));var je={from:me,to:ve,text:k?k[te%k.length]:b,origin:s||(y?"paste":e.state.cutIncoming>m?"cut":"+input")};Yo(e.doc,je),Dn(e,"inputRead",e,je)}n&&!y&&jl(e,n),zo(e),e.curOp.updateInput<2&&(e.curOp.updateInput=F),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Iu(e,n){var o=e.clipboardData&&e.clipboardData.getData("Text");if(o)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&jn(n,function(){return Ll(n,o,0,null,"paste")}),!0}function jl(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var o=e.doc.sel,i=o.ranges.length-1;i>=0;i--){var s=o.ranges[i];if(!(s.head.ch>100||i&&o.ranges[i-1].head.line==s.head.line)){var u=e.getModeAt(s.head),m=!1;if(u.electricChars){for(var y=0;y<u.electricChars.length;y++)if(n.indexOf(u.electricChars.charAt(y))>-1){m=is(e,s.head.line,"smart");break}}else u.electricInput&&u.electricInput.test(Xe(e.doc,s.head.line).text.slice(0,s.head.ch))&&(m=is(e,s.head.line,"smart"));m&&Dn(e,"electricInput",e,s.head.line)}}}function Pl(e){for(var n=[],o=[],i=0;i<e.doc.sel.ranges.length;i++){var s=e.doc.sel.ranges[i].head.line,u={anchor:de(s,0),head:de(s+1,0)};o.push(u),n.push(e.getRange(u.anchor,u.head))}return{text:n,ranges:o}}function Al(e,n,o,i){e.setAttribute("autocorrect",o?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Rl(){var e=T("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=T("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return j?e.style.width="1000px":e.setAttribute("wrap","off"),W&&(e.style.border="1px solid black"),n}function Il(e){var n=e.optionHandlers,o=e.helpers={};e.prototype={constructor:e,focus:function(){ke(this).focus(),this.display.input.focus()},setOption:function(i,s){var u=this.options,m=u[i];u[i]==s&&i!="mode"||(u[i]=s,n.hasOwnProperty(i)&&cn(this,n[i])(this,s,m),At(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,s){this.state.keyMaps[s?"push":"unshift"](Co(i))},removeKeyMap:function(i){for(var s=this.state.keyMaps,u=0;u<s.length;++u)if(s[u]==i||s[u].name==i)return s.splice(u,1),!0},addOverlay:Tn(function(i,s){var u=i.token?i:e.getMode(this.options,i);if(u.startState)throw new Error("Overlays may not be stateful.");se(this.state.overlays,{mode:u,modeSpec:i,opaque:s&&s.opaque,priority:s&&s.priority||0},function(m){return m.priority}),this.state.modeGen++,er(this)}),removeOverlay:Tn(function(i){for(var s=this.state.overlays,u=0;u<s.length;++u){var m=s[u].modeSpec;if(m==i||typeof i=="string"&&m.name==i){s.splice(u,1),this.state.modeGen++,er(this);return}}}),indentLine:Tn(function(i,s,u){typeof s!="string"&&typeof s!="number"&&(s==null?s=this.options.smartIndent?"smart":"prev":s=s?"add":"subtract"),fe(this.doc,i)&&is(this,i,s,u)}),indentSelection:Tn(function(i){for(var s=this.doc.sel.ranges,u=-1,m=0;m<s.length;m++){var y=s[m];if(y.empty())y.head.line>u&&(is(this,y.head.line,i,!0),u=y.head.line,m==this.doc.sel.primIndex&&zo(this));else{var b=y.from(),k=y.to(),O=Math.max(u,b.line);u=Math.min(this.lastLine(),k.line-(k.ch?0:1))+1;for(var F=O;F<u;++F)is(this,F,i);var te=this.doc.sel.ranges;b.ch==0&&s.length==te.length&&te[m].from().ch>0&&As(this.doc,m,new Lt(b,te[m].to()),$t)}}}),getTokenAt:function(i,s){return na(this,i,s)},getLineTokens:function(i,s){return na(this,de(i),s,!0)},getTokenTypeAt:function(i){i=ft(this.doc,i);var s=oo(this,Xe(this.doc,i.line)),u=0,m=(s.length-1)/2,y=i.ch,b;if(y==0)b=s[2];else for(;;){var k=u+m>>1;if((k?s[k*2-1]:0)>=y)m=k;else if(s[k*2+1]<y)u=k+1;else{b=s[k*2+2];break}}var O=b?b.indexOf("overlay "):-1;return O<0?b:O==0?null:b.slice(0,O-1)},getModeAt:function(i){var s=this.doc.mode;return s.innerMode?e.innerMode(s,this.getTokenAt(i).state).mode:s},getHelper:function(i,s){return this.getHelpers(i,s)[0]},getHelpers:function(i,s){var u=[];if(!o.hasOwnProperty(s))return u;var m=o[s],y=this.getModeAt(i);if(typeof y[s]=="string")m[y[s]]&&u.push(m[y[s]]);else if(y[s])for(var b=0;b<y[s].length;b++){var k=m[y[s][b]];k&&u.push(k)}else y.helperType&&m[y.helperType]?u.push(m[y.helperType]):m[y.name]&&u.push(m[y.name]);for(var O=0;O<m._global.length;O++){var F=m._global[O];F.pred(y,this)&&Ge(u,F.val)==-1&&u.push(F.val)}return u},getStateAfter:function(i,s){var u=this.doc;return i=Va(u,i??u.first+u.size-1),Nt(this,i+1,s).state},cursorCoords:function(i,s){var u,m=this.doc.sel.primary();return i==null?u=m.head:typeof i=="object"?u=ft(this.doc,i):u=i?m.from():m.to(),Cn(this,u,s||"page")},charCoords:function(i,s){return il(this,ft(this.doc,i),s||"page")},coordsChar:function(i,s){return i=hc(this,i,s||"page"),sl(this,i.left,i.top)},lineAtHeight:function(i,s){return i=hc(this,{top:i,left:0},s||"page").top,z(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,s,u){var m=!1,y;if(typeof i=="number"){var b=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>b&&(i=b,m=!0),y=Xe(this.doc,i)}else y=i;return rl(this,y,{top:0,left:0},s||"page",u||m).top+(m?this.doc.height-_n(y):0)},defaultTextHeight:function(){return Si(this.display)},defaultCharWidth:function(){return co(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,s,u,m,y){var b=this.display;i=Cn(this,ft(this.doc,i));var k=i.bottom,O=i.left;if(s.style.position="absolute",s.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(s),b.sizer.appendChild(s),m=="over")k=i.top;else if(m=="above"||m=="near"){var F=Math.max(b.wrapper.clientHeight,this.doc.height),te=Math.max(b.sizer.clientWidth,b.lineSpace.clientWidth);(m=="above"||i.bottom+s.offsetHeight>F)&&i.top>s.offsetHeight?k=i.top-s.offsetHeight:i.bottom+s.offsetHeight<=F&&(k=i.bottom),O+s.offsetWidth>te&&(O=te-s.offsetWidth)}s.style.top=k+"px",s.style.left=s.style.right="",y=="right"?(O=b.sizer.clientWidth-s.offsetWidth,s.style.right="0px"):(y=="left"?O=0:y=="middle"&&(O=(b.sizer.clientWidth-s.offsetWidth)/2),s.style.left=O+"px"),u&&ya(this,{left:O,top:k,right:O+s.offsetWidth,bottom:k+s.offsetHeight})},triggerOnKeyDown:Tn(Cu),triggerOnKeyPress:Tn(Ia),triggerOnKeyUp:Tu,triggerOnMouseDown:Tn(Ma),execCommand:function(i){if(Hs.hasOwnProperty(i))return Hs[i].call(null,this)},triggerElectric:Tn(function(i){jl(this,i)}),findPosH:function(i,s,u,m){var y=1;s<0&&(y=-1,s=-s);for(var b=ft(this.doc,i),k=0;k<s&&(b=Ou(this.doc,b,y,u,m),!b.hitSide);++k);return b},moveH:Tn(function(i,s){var u=this;this.extendSelectionsBy(function(m){return u.display.shift||u.doc.extend||m.empty()?Ou(u.doc,m.head,i,s,u.options.rtlMoveVisually):i<0?m.from():m.to()},et)}),deleteH:Tn(function(i,s){var u=this.doc.sel,m=this.doc;u.somethingSelected()?m.replaceSelection("",null,"+delete"):ts(this,function(y){var b=Ou(m,y.head,i,s,!1);return i<0?{from:b,to:y.head}:{from:y.head,to:b}})}),findPosV:function(i,s,u,m){var y=1,b=m;s<0&&(y=-1,s=-s);for(var k=ft(this.doc,i),O=0;O<s;++O){var F=Cn(this,k,"div");if(b==null?b=F.left:F.left=b,k=Mu(this,F,y,u),k.hitSide)break}return k},moveV:Tn(function(i,s){var u=this,m=this.doc,y=[],b=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(O){if(b)return i<0?O.from():O.to();var F=Cn(u,O.head,"div");O.goalColumn!=null&&(F.left=O.goalColumn),y.push(F.left);var te=Mu(u,F,i,s);return s=="page"&&O==m.sel.primary()&&fo(u,il(u,te,"div").top-F.top),te},et),y.length)for(var k=0;k<m.sel.ranges.length;k++)m.sel.ranges[k].goalColumn=y[k]}),findWordAt:function(i){var s=this.doc,u=Xe(s,i.line).text,m=i.ch,y=i.ch;if(u){var b=this.getHelper(i,"wordChars");(i.sticky=="before"||y==u.length)&&m?--m:++y;for(var k=u.charAt(m),O=ot(k,b)?function(F){return ot(F,b)}:/\s/.test(k)?function(F){return/\s/.test(F)}:function(F){return!/\s/.test(F)&&!ot(F)};m>0&&O(u.charAt(m-1));)--m;for(;y<u.length&&O(u.charAt(y));)++y}return new Lt(de(i.line,m),de(i.line,y))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?Y(this.display.cursorDiv,"CodeMirror-overwrite"):Te(this.display.cursorDiv,"CodeMirror-overwrite"),At(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==R(Je(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,s){va(this,i,s)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ui(this)-this.display.barHeight,width:i.scrollWidth-ui(this)-this.display.barWidth,clientHeight:uo(this),clientWidth:lo(this)}},scrollIntoView:Tn(function(i,s){i==null?(i={from:this.doc.sel.primary().head,to:null},s==null&&(s=this.options.cursorScrollMargin)):typeof i=="number"?i={from:de(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=s||0,i.from.line!=null?Ud(this,i):ba(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,s){var u=this,m=function(b){return typeof b=="number"||/^\d+$/.test(String(b))?b+"px":b};i!=null&&(this.display.wrapper.style.width=m(i)),s!=null&&(this.display.wrapper.style.height=m(s)),this.options.lineWrapping&&tu(this);var y=this.display.viewFrom;this.doc.iter(y,this.display.viewTo,function(b){if(b.widgets){for(var k=0;k<b.widgets.length;k++)if(b.widgets[k].noHScroll){Ki(u,y,"widget");break}}++y}),this.curOp.forceUpdate=!0,At(this,"refresh",this)}),operation:function(i){return jn(this,i)},startOperation:function(){return yo(this)},endOperation:function(){return Gr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;er(this),this.curOp.forceUpdate=!0,xs(this),va(this,this.doc.scrollLeft,this.doc.scrollTop),tr(this.display),(i==null||Math.abs(i-Si(this.display))>.5||this.options.lineWrapping)&&ha(this),At(this,"refresh",this)}),swapDoc:Tn(function(i){var s=this.doc;return s.cm=null,this.state.selectingText&&this.state.selectingText(),tn(this,i),xs(this),this.display.input.reset(),va(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,Dn(this,"swapDoc",this,s),s}),phrase:function(i){var s=this.options.phrases;return s&&Object.prototype.hasOwnProperty.call(s,i)?s[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ar(e),e.registerHelper=function(i,s,u){o.hasOwnProperty(i)||(o[i]=e[i]={_global:[]}),o[i][s]=u},e.registerGlobalHelper=function(i,s,u,m){e.registerHelper(i,s,m),o[i]._global.push({pred:u,val:m})}}function Ou(e,n,o,i,s){var u=n,m=o,y=Xe(e,n.line),b=s&&e.direction=="rtl"?-o:o;function k(){var Oe=n.line+b;return Oe<e.first||Oe>=e.first+e.size?!1:(n=new de(Oe,n.ch,n.sticky),y=Xe(e,Oe))}function O(Oe){var Re;if(i=="codepoint"){var Ue=y.text.charCodeAt(n.ch+(o>0?0:-1));if(isNaN(Ue))Re=null;else{var st=o>0?Ue>=55296&&Ue<56320:Ue>=56320&&Ue<57343;Re=new de(n.line,Math.max(0,Math.min(y.text.length,n.ch+o*(st?2:1))),-o)}}else s?Re=bu(e.cm,y,n,o):Re=Ws(y,n,o);if(Re==null)if(!Oe&&k())n=Tl(s,e.cm,y,n.line,b);else return!1;else n=Re;return!0}if(i=="char"||i=="codepoint")O();else if(i=="column")O(!0);else if(i=="word"||i=="group")for(var F=null,te=i=="group",V=e.cm&&e.cm.getHelper(n,"wordChars"),me=!0;!(o<0&&!O(!me));me=!1){var ve=y.text.charAt(n.ch)||`
`,je=ot(ve,V)?"w":te&&ve==`
`?"n":!te||/\s/.test(ve)?null:"p";if(te&&!me&&!je&&(je="s"),F&&F!=je){o<0&&(o=1,O(),n.sticky="after");break}if(je&&(F=je),o>0&&!O(!me))break}var Ee=La(e,n,u,m,!0);return _t(u,Ee)&&(Ee.hitSide=!0),Ee}function Mu(e,n,o,i){var s=e.doc,u=n.left,m;if(i=="page"){var y=Math.min(e.display.wrapper.clientHeight,ke(e).innerHeight||s(e).documentElement.clientHeight),b=Math.max(y-.5*Si(e.display),3);m=(o>0?n.bottom:n.top)+o*b}else i=="line"&&(m=o>0?n.bottom+3:n.top-3);for(var k;k=sl(e,u,m),!!k.outside;){if(o<0?m<=0:m>=s.height){k.hitSide=!0;break}m+=o*5}return k}var Ot=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new tt,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Ot.prototype.init=function(e){var n=this,o=this,i=o.cm,s=o.div=e.lineDiv;s.contentEditable=!0,Al(s,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function u(y){for(var b=y.target;b;b=b.parentNode){if(b==s)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(b.className))break}return!1}nt(s,"paste",function(y){!u(y)||Rt(i,y)||Iu(y,i)||P<=11&&setTimeout(cn(i,function(){return n.updateFromDOM()}),20)}),nt(s,"compositionstart",function(y){n.composing={data:y.data,done:!1}}),nt(s,"compositionupdate",function(y){n.composing||(n.composing={data:y.data,done:!1})}),nt(s,"compositionend",function(y){n.composing&&(y.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),nt(s,"touchstart",function(){return o.forceCompositionEnd()}),nt(s,"input",function(){n.composing||n.readFromDOMSoon()});function m(y){if(!(!u(y)||Rt(i,y))){if(i.somethingSelected())qs({lineWise:!1,text:i.getSelections()}),y.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var b=Pl(i);qs({lineWise:!0,text:b.text}),y.type=="cut"&&i.operation(function(){i.setSelections(b.ranges,0,$t),i.replaceSelection("",null,"cut")})}else return;if(y.clipboardData){y.clipboardData.clearData();var k=Qr.text.join(`
`);if(y.clipboardData.setData("Text",k),y.clipboardData.getData("Text")==k){y.preventDefault();return}}var O=Rl(),F=O.firstChild;Al(F),i.display.lineSpace.insertBefore(O,i.display.lineSpace.firstChild),F.value=Qr.text.join(`
`);var te=R(Ve(s));ae(F),setTimeout(function(){i.display.lineSpace.removeChild(O),te.focus(),te==s&&o.showPrimarySelection()},50)}}nt(s,"copy",m),nt(s,"cut",m)},Ot.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Ot.prototype.prepareSelection=function(){var e=ll(this.cm,!1);return e.focus=R(Ve(this.div))==this.div,e},Ot.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Ot.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Ot.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,o=n.doc.sel.primary(),i=o.from(),s=o.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||s.line<n.display.viewFrom){e.removeAllRanges();return}var u=Da(n,e.anchorNode,e.anchorOffset),m=Da(n,e.focusNode,e.focusOffset);if(!(u&&!u.bad&&m&&!m.bad&&ze(si(u,m),i)==0&&ze(Sn(u,m),s)==0)){var y=n.display.view,b=i.line>=n.display.viewFrom&&Du(n,i)||{node:y[0].measure.map[2],offset:0},k=s.line<n.display.viewTo&&Du(n,s);if(!k){var O=y[y.length-1].measure,F=O.maps?O.maps[O.maps.length-1]:O.map;k={node:F[F.length-1],offset:F[F.length-2]-F[F.length-3]}}if(!b||!k){e.removeAllRanges();return}var te=e.rangeCount&&e.getRangeAt(0),V;try{V=B(b.node,b.offset,k.offset,k.node)}catch{}V&&(!x&&n.state.focused?(e.collapse(b.node,b.offset),V.collapsed||(e.removeAllRanges(),e.addRange(V))):(e.removeAllRanges(),e.addRange(V)),te&&e.anchorNode==null?e.addRange(te):x&&this.startGracePeriod()),this.rememberSelection()}},Ot.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Ot.prototype.showMultipleSelections=function(e){ye(this.cm.display.cursorDiv,e.cursors),ye(this.cm.display.selectionDiv,e.selection)},Ot.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Ot.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return C(this.div,n)},Ot.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||R(Ve(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Ot.prototype.blur=function(){this.div.blur()},Ot.prototype.getField=function(){return this.div},Ot.prototype.supportsTouch=function(){return!0},Ot.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):jn(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function o(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,o))}this.polling.set(this.cm.options.pollInterval,o)},Ot.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ot.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(q&&I&&this.cm.display.gutterSpecs.length&&Ol(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var o=Da(n,e.anchorNode,e.anchorOffset),i=Da(n,e.focusNode,e.focusOffset);o&&i&&jn(n,function(){Wn(n.doc,zn(o,i),$t),(o.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Ot.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,o=e.doc.sel.primary(),i=o.from(),s=o.to();if(i.ch==0&&i.line>e.firstLine()&&(i=de(i.line-1,Xe(e.doc,i.line-1).length)),s.ch==Xe(e.doc,s.line).text.length&&s.line<e.lastLine()&&(s=de(s.line+1,0)),i.line<n.viewFrom||s.line>n.viewTo-1)return!1;var u,m,y;i.line==n.viewFrom||(u=_i(e,i.line))==0?(m=S(n.view[0].line),y=n.view[0].node):(m=S(n.view[u].line),y=n.view[u-1].node.nextSibling);var b=_i(e,s.line),k,O;if(b==n.view.length-1?(k=n.viewTo-1,O=n.lineDiv.lastChild):(k=S(n.view[b+1].line)-1,O=n.view[b+1].node.previousSibling),!y)return!1;for(var F=e.doc.splitLines(Vd(e,y,O,m,k)),te=oi(e.doc,de(m,0),de(k,Xe(e.doc,k).text.length));F.length>1&&te.length>1;)if(Ke(F)==Ke(te))F.pop(),te.pop(),k--;else if(F[0]==te[0])F.shift(),te.shift(),m++;else break;for(var V=0,me=0,ve=F[0],je=te[0],Ee=Math.min(ve.length,je.length);V<Ee&&ve.charCodeAt(V)==je.charCodeAt(V);)++V;for(var Oe=Ke(F),Re=Ke(te),Ue=Math.min(Oe.length-(F.length==1?V:0),Re.length-(te.length==1?V:0));me<Ue&&Oe.charCodeAt(Oe.length-me-1)==Re.charCodeAt(Re.length-me-1);)++me;if(F.length==1&&te.length==1&&m==i.line)for(;V&&V>i.ch&&Oe.charCodeAt(Oe.length-me-1)==Re.charCodeAt(Re.length-me-1);)V--,me++;F[F.length-1]=Oe.slice(0,Oe.length-me).replace(/^\u200b+/,""),F[0]=F[0].slice(V).replace(/\u200b+$/,"");var st=de(m,V),Ye=de(k,te.length?Ke(te).length-me:0);if(F.length>1||F[0]||ze(st,Ye))return Vo(e.doc,F,st,Ye,"+input"),!0},Ot.prototype.ensurePolled=function(){this.forceCompositionEnd()},Ot.prototype.reset=function(){this.forceCompositionEnd()},Ot.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Ot.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Ot.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&jn(this.cm,function(){return er(e.cm)})},Ot.prototype.setUneditable=function(e){e.contentEditable="false"},Ot.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||cn(this.cm,Ll)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Ot.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Ot.prototype.onContextMenu=function(){},Ot.prototype.resetPosition=function(){},Ot.prototype.needsContentAttribute=!0;function Du(e,n){var o=tl(e,n.line);if(!o||o.hidden)return null;var i=Xe(e.doc,n.line),s=uc(o,i,n.line),u=gt(i,e.doc.direction),m="left";if(u){var y=sr(u,n.ch);m=y%2?"right":"left"}var b=da(s.map,n.ch,m);return b.offset=b.collapse=="right"?b.end:b.start,b}function Ol(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Pr(e,n){return n&&(e.bad=!0),e}function Vd(e,n,o,i,s){var u="",m=!1,y=e.doc.lineSeparator(),b=!1;function k(V){return function(me){return me.id==V}}function O(){m&&(u+=y,b&&(u+=y),m=b=!1)}function F(V){V&&(O(),u+=V)}function te(V){if(V.nodeType==1){var me=V.getAttribute("cm-text");if(me){F(me);return}var ve=V.getAttribute("cm-marker"),je;if(ve){var Ee=e.findMarks(de(i,0),de(s+1,0),k(+ve));Ee.length&&(je=Ee[0].find(0))&&F(oi(e.doc,je.from,je.to).join(y));return}if(V.getAttribute("contenteditable")=="false")return;var Oe=/^(pre|div|p|li|table|br)$/i.test(V.nodeName);if(!/^br$/i.test(V.nodeName)&&V.textContent.length==0)return;Oe&&O();for(var Re=0;Re<V.childNodes.length;Re++)te(V.childNodes[Re]);/^(pre|p)$/i.test(V.nodeName)&&(b=!0),Oe&&(m=!0)}else V.nodeType==3&&F(V.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;te(n),n!=o;)n=n.nextSibling,b=!1;return u}function Da(e,n,o){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[o],!i)return Pr(e.clipPos(de(e.display.viewTo-1)),!0);n=null,o=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var s=0;s<e.display.view.length;s++){var u=e.display.view[s];if(u.node==i)return zu(u,n,o)}}function zu(e,n,o){var i=e.text.firstChild,s=!1;if(!n||!C(i,n))return Pr(de(S(e.line),0),!0);if(n==i&&(s=!0,n=i.childNodes[o],o=0,!n)){var u=e.rest?Ke(e.rest):e.line;return Pr(de(S(u),u.text.length),s)}var m=n.nodeType==3?n:null,y=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,o&&(o=m.nodeValue.length));y.parentNode!=i;)y=y.parentNode;var b=e.measure,k=b.maps;function O(je,Ee,Oe){for(var Re=-1;Re<(k?k.length:0);Re++)for(var Ue=Re<0?b.map:k[Re],st=0;st<Ue.length;st+=3){var Ye=Ue[st+2];if(Ye==je||Ye==Ee){var wt=S(Re<0?e.line:e.rest[Re]),Ct=Ue[st]+Oe;return(Oe<0||Ye!=je)&&(Ct=Ue[st+(Oe?1:0)]),de(wt,Ct)}}}var F=O(m,y,o);if(F)return Pr(F,s);for(var te=y.nextSibling,V=m?m.nodeValue.length-o:0;te;te=te.nextSibling){if(F=O(te,te.firstChild,0),F)return Pr(de(F.line,F.ch-V),s);V+=te.textContent.length}for(var me=y.previousSibling,ve=o;me;me=me.previousSibling){if(F=O(me,me.firstChild,-1),F)return Pr(de(F.line,F.ch+ve),s);ve+=me.textContent.length}}var pn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new tt,this.hasSelection=!1,this.composing=null,this.resetting=!1};pn.prototype.init=function(e){var n=this,o=this,i=this.cm;this.createField(e);var s=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),W&&(s.style.width="0px"),nt(s,"input",function(){_&&P>=9&&n.hasSelection&&(n.hasSelection=null),o.poll()}),nt(s,"paste",function(m){Rt(i,m)||Iu(m,i)||(i.state.pasteIncoming=+new Date,o.fastPoll())});function u(m){if(!Rt(i,m)){if(i.somethingSelected())qs({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var y=Pl(i);qs({lineWise:!0,text:y.text}),m.type=="cut"?i.setSelections(y.ranges,null,$t):(o.prevInput="",s.value=y.text.join(`
`),ae(s))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}nt(s,"cut",u),nt(s,"copy",u),nt(e.scroller,"paste",function(m){if(!(Ui(e,m)||Rt(i,m))){if(!s.dispatchEvent){i.state.pasteIncoming=+new Date,o.focus();return}var y=new Event("paste");y.clipboardData=m.clipboardData,s.dispatchEvent(y)}}),nt(e.lineSpace,"selectstart",function(m){Ui(e,m)||wn(m)}),nt(s,"compositionstart",function(){var m=i.getCursor("from");o.composing&&o.composing.range.clear(),o.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),nt(s,"compositionend",function(){o.composing&&(o.poll(),o.composing.range.clear(),o.composing=null)})},pn.prototype.createField=function(e){this.wrapper=Rl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Al(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},pn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},pn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,o=e.doc,i=ll(e);if(e.options.moveInputWithCursor){var s=Cn(e,o.sel.primary().head,"div"),u=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,s.top+m.top-u.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,s.left+m.left-u.left))}return i},pn.prototype.showSelection=function(e){var n=this.cm,o=n.display;ye(o.cursorDiv,e.cursors),ye(o.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},pn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var o=n.getSelection();this.textarea.value=o,n.state.focused&&ae(this.textarea),_&&P>=9&&(this.hasSelection=o)}else e||(this.prevInput=this.textarea.value="",_&&P>=9&&(this.hasSelection=null));this.resetting=!1}},pn.prototype.getField=function(){return this.textarea},pn.prototype.supportsTouch=function(){return!1},pn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!K||R(Ve(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},pn.prototype.blur=function(){this.textarea.blur()},pn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},pn.prototype.receivedFocus=function(){this.slowPoll()},pn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},pn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function o(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,o)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,o)},pn.prototype.poll=function(){var e=this,n=this.cm,o=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||qr(o)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var s=o.value;if(s==i&&!n.somethingSelected())return!1;if(_&&P>=9&&this.hasSelection===s||ie&&/[\uf700-\uf7ff]/.test(s))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var u=s.charCodeAt(0);if(u==8203&&!i&&(i="​"),u==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,y=Math.min(i.length,s.length);m<y&&i.charCodeAt(m)==s.charCodeAt(m);)++m;return jn(n,function(){Ll(n,s.slice(m),i.length-m,null,e.composing?"*compose":null),s.length>1e3||s.indexOf(`
`)>-1?o.value=e.prevInput="":e.prevInput=s,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},pn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},pn.prototype.onKeyPress=function(){_&&P>=9&&(this.hasSelection=null),this.fastPoll()},pn.prototype.onContextMenu=function(e){var n=this,o=n.cm,i=o.display,s=n.textarea;n.contextMenuPending&&n.contextMenuPending();var u=po(o,e),m=i.scroller.scrollTop;if(!u||oe)return;var y=o.options.resetSelectionOnContextMenu;y&&o.doc.sel.contains(u)==-1&&cn(o,Wn)(o.doc,zn(u),$t);var b=s.style.cssText,k=n.wrapper.style.cssText,O=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",s.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-O.top-5)+"px; left: "+(e.clientX-O.left-5)+`px;
      z-index: 1000; background: `+(_?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var F;j&&(F=s.ownerDocument.defaultView.scrollY),i.input.focus(),j&&s.ownerDocument.defaultView.scrollTo(null,F),i.input.reset(),o.somethingSelected()||(s.value=n.prevInput=" "),n.contextMenuPending=V,i.selForContextMenu=o.doc.sel,clearTimeout(i.detectingSelectAll);function te(){if(s.selectionStart!=null){var ve=o.somethingSelected(),je="​"+(ve?s.value:"");s.value="⇚",s.value=je,n.prevInput=ve?"":"​",s.selectionStart=1,s.selectionEnd=je.length,i.selForContextMenu=o.doc.sel}}function V(){if(n.contextMenuPending==V&&(n.contextMenuPending=!1,n.wrapper.style.cssText=k,s.style.cssText=b,_&&P<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),s.selectionStart!=null)){(!_||_&&P<9)&&te();var ve=0,je=function(){i.selForContextMenu==o.doc.sel&&s.selectionStart==0&&s.selectionEnd>0&&n.prevInput=="​"?cn(o,Qi)(o):ve++<10?i.detectingSelectAll=setTimeout(je,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(je,200)}}if(_&&P>=9&&te(),_e){lr(e);var me=function(){Gt(window,"mouseup",me),setTimeout(V,20)};nt(window,"mouseup",me)}else setTimeout(V,50)},pn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},pn.prototype.setUneditable=function(){},pn.prototype.needsContentAttribute=!1;function Wc(e,n){if(n=n?He(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var o=R(Ve(e));n.autofocus=o==e||e.getAttribute("autofocus")!=null&&o==document.body}function i(){e.value=y.getValue()}var s;if(e.form&&(nt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var u=e.form;s=u.submit;try{var m=u.submit=function(){i(),u.submit=s,u.submit(),u.submit=m}}catch{}}n.finishInit=function(b){b.save=i,b.getTextArea=function(){return e},b.toTextArea=function(){b.toTextArea=isNaN,i(),e.parentNode.removeChild(b.getWrapperElement()),e.style.display="",e.form&&(Gt(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=s))}},e.style.display="none";var y=Xt(function(b){return e.parentNode.insertBefore(b,e.nextSibling)},n);return y}function za(e){e.off=Gt,e.on=nt,e.wheelEventPixels=xo,e.Doc=It,e.splitLines=ur,e.countColumn=Be,e.findColumn=bt,e.isWordChar=$e,e.Pass=Qt,e.signal=At,e.Line=wi,e.changeEnd=Fn,e.scrollbarModel=vc,e.Pos=de,e.cmpPos=ze,e.modes=Ar,e.mimeModes=Rr,e.resolveMode=Er,e.getMode=Di,e.modeExtensions=ii,e.extendMode=vi,e.copyState=jt,e.startState=xi,e.innerMode=io,e.commands=Hs,e.keyMap=Ai,e.keyName=xu,e.isModifierKey=yu,e.lookupKey=es,e.normalizeKeyMap=Cc,e.StringStream=Yt,e.SharedTextMarker=Qo,e.TextMarker=mi,e.LineWidget=ji,e.e_preventDefault=wn,e.e_stopPropagation=ni,e.e_stop=lr,e.addClass=Y,e.contains=C,e.rmClass=Te,e.keyNames=Xr}yr(Xt),Il(Xt);var nr="iter insert remove copy getEditor constructor".split(" ");for(var Ml in It.prototype)It.prototype.hasOwnProperty(Ml)&&Ge(nr,Ml)<0&&(Xt.prototype[Ml]=(function(e){return function(){return e.apply(this.doc,arguments)}})(It.prototype[Ml]));return ar(It),Xt.inputStyles={textarea:pn,contenteditable:Ot},Xt.defineMode=function(e){!Xt.defaults.mode&&e!="null"&&(Xt.defaults.mode=e),Nr.apply(this,arguments)},Xt.defineMIME=Ft,Xt.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Xt.defineMIME("text/plain","null"),Xt.defineExtension=function(e,n){Xt.prototype[e]=n},Xt.defineDocExtension=function(e,n){It.prototype[e]=n},Xt.fromTextArea=Wc,za(Xt),Xt.version="5.65.21",Xt}))})(od)),od.exports}var ex=ro();const Jh=Cf(ex);var ef={exports:{}},tf;function tx(){return tf||(tf=1,(function(c,h){(function(p){p(ro())})(function(p){function v(P){return new RegExp("^(("+P.join(")|(")+"))\\b")}var x=v(["and","or","not","is"]),w=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],L=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];p.registerHelper("hintWords","python",w.concat(L).concat(["exec","print"]));function E(P){return P.scopes[P.scopes.length-1]}p.defineMode("python",function(P,j){for(var D="error",I=j.delimiters||j.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,ee=[j.singleOperators,j.doubleOperators,j.doubleDelimiters,j.tripleDelimiters,j.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],oe=0;oe<ee.length;oe++)ee[oe]||ee.splice(oe--,1);var X=j.hangingIndent||P.indentUnit,ue=w,M=L;j.extra_keywords!=null&&(ue=ue.concat(j.extra_keywords)),j.extra_builtins!=null&&(M=M.concat(j.extra_builtins));var W=!(j.version&&Number(j.version)<3);if(W){var q=j.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;ue=ue.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),M=M.concat(["ascii","bytes","exec","print"]);var K=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var q=j.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;ue=ue.concat(["exec","print"]),M=M.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var K=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var ie=v(ue),pe=v(M);function re(Q,B){var C=Q.sol()&&B.lastToken!="\\";if(C&&(B.indent=Q.indentation()),C&&E(B).type=="py"){var R=E(B).offset;if(Q.eatSpace()){var Y=Q.indentation();return Y>R?$(B):Y<R&&ne(Q,B)&&Q.peek()!="#"&&(B.errorToken=!0),null}else{var H=we(Q,B);return R>0&&ne(Q,B)&&(H+=" "+D),H}}return we(Q,B)}function we(Q,B,C){if(Q.eatSpace())return null;if(!C&&Q.match(/^#.*/))return"comment";if(Q.match(/^[0-9\.]/,!1)){var R=!1;if(Q.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(R=!0),Q.match(/^[\d_]+\.\d*/)&&(R=!0),Q.match(/^\.\d+/)&&(R=!0),R)return Q.eat(/J/i),"number";var Y=!1;if(Q.match(/^0x[0-9a-f_]+/i)&&(Y=!0),Q.match(/^0b[01_]+/i)&&(Y=!0),Q.match(/^0o[0-7_]+/i)&&(Y=!0),Q.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Q.eat(/J/i),Y=!0),Q.match(/^0(?![\dx])/i)&&(Y=!0),Y)return Q.eat(/L/i),"number"}if(Q.match(K)){var H=Q.current().toLowerCase().indexOf("f")!==-1;return H?(B.tokenize=Fe(Q.current(),B.tokenize),B.tokenize(Q,B)):(B.tokenize=_e(Q.current(),B.tokenize),B.tokenize(Q,B))}for(var ae=0;ae<ee.length;ae++)if(Q.match(ee[ae]))return"operator";return Q.match(I)?"punctuation":B.lastToken=="."&&Q.match(q)?"property":Q.match(ie)||Q.match(x)?"keyword":Q.match(pe)?"builtin":Q.match(/^(self|cls)\b/)?"variable-2":Q.match(q)?B.lastToken=="def"||B.lastToken=="class"?"def":"variable":(Q.next(),C?null:D)}function Fe(Q,B){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var C=Q.length==1,R="string";function Y(ae){return function(De,Je){var Ve=we(De,Je,!0);return Ve=="punctuation"&&(De.current()=="{"?Je.tokenize=Y(ae+1):De.current()=="}"&&(ae>1?Je.tokenize=Y(ae-1):Je.tokenize=H)),Ve}}function H(ae,De){for(;!ae.eol();)if(ae.eatWhile(/[^'"\{\}\\]/),ae.eat("\\")){if(ae.next(),C&&ae.eol())return R}else{if(ae.match(Q))return De.tokenize=B,R;if(ae.match("{{"))return R;if(ae.match("{",!1))return De.tokenize=Y(0),ae.current()?R:De.tokenize(ae,De);if(ae.match("}}"))return R;if(ae.match("}"))return D;ae.eat(/['"]/)}if(C){if(j.singleLineStringErrors)return D;De.tokenize=B}return R}return H.isString=!0,H}function _e(Q,B){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var C=Q.length==1,R="string";function Y(H,ae){for(;!H.eol();)if(H.eatWhile(/[^'"\\]/),H.eat("\\")){if(H.next(),C&&H.eol())return R}else{if(H.match(Q))return ae.tokenize=B,R;H.eat(/['"]/)}if(C){if(j.singleLineStringErrors)return D;ae.tokenize=B}return R}return Y.isString=!0,Y}function $(Q){for(;E(Q).type!="py";)Q.scopes.pop();Q.scopes.push({offset:E(Q).offset+P.indentUnit,type:"py",align:null})}function Te(Q,B,C){var R=Q.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Q.column()+1;B.scopes.push({offset:B.indent+X,type:C,align:R})}function ne(Q,B){for(var C=Q.indentation();B.scopes.length>1&&E(B).offset>C;){if(E(B).type!="py")return!0;B.scopes.pop()}return E(B).offset!=C}function ye(Q,B){Q.sol()&&(B.beginningOfLine=!0,B.dedent=!1);var C=B.tokenize(Q,B),R=Q.current();if(B.beginningOfLine&&R=="@")return Q.match(q,!1)?"meta":W?"operator":D;if(/\S/.test(R)&&(B.beginningOfLine=!1),(C=="variable"||C=="builtin")&&B.lastToken=="meta"&&(C="meta"),(R=="pass"||R=="return")&&(B.dedent=!0),R=="lambda"&&(B.lambda=!0),R==":"&&!B.lambda&&E(B).type=="py"&&Q.match(/^\s*(?:#|$)/,!1)&&$(B),R.length==1&&!/string|comment/.test(C)){var Y="[({".indexOf(R);if(Y!=-1&&Te(Q,B,"])}".slice(Y,Y+1)),Y="])}".indexOf(R),Y!=-1)if(E(B).type==R)B.indent=B.scopes.pop().offset-X;else return D}return B.dedent&&Q.eol()&&E(B).type=="py"&&B.scopes.length>1&&B.scopes.pop(),C}var T={startState:function(Q){return{tokenize:re,scopes:[{offset:Q||0,type:"py",align:null}],indent:Q||0,lastToken:null,lambda:!1,dedent:0}},token:function(Q,B){var C=B.errorToken;C&&(B.errorToken=!1);var R=ye(Q,B);return R&&R!="comment"&&(B.lastToken=R=="keyword"||R=="punctuation"?Q.current():R),R=="punctuation"&&(R=null),Q.eol()&&B.lambda&&(B.lambda=!1),C?R+" "+D:R},indent:function(Q,B){if(Q.tokenize!=re)return Q.tokenize.isString?p.Pass:0;var C=E(Q),R=C.type==B.charAt(0)||C.type=="py"&&!Q.dedent&&/^(else:|elif |except |finally:)/.test(B);return C.align!=null?C.align-(R?1:0):C.offset-(R?X:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return T}),p.defineMIME("text/x-python","python");var _=function(P){return P.split(" ")};p.defineMIME("text/x-cython",{name:"python",extra_keywords:_("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),ef.exports}tx();var nf={exports:{}},rf;function im(){return rf||(rf=1,(function(c,h){(function(p){p(ro())})(function(p){p.defineMode("javascript",function(v,x){var w=v.indentUnit,L=x.statementIndent,E=x.jsonld,_=x.json||E,P=x.trackScope!==!1,j=x.typescript,D=x.wordCharacters||/[\w$\xa1-\uffff]/,I=(function(){function S(Jt){return{type:Jt,style:"keyword"}}var z=S("keyword a"),fe=S("keyword b"),Ne=S("keyword c"),de=S("keyword d"),ze=S("operator"),_t={type:"atom",style:"atom"};return{if:S("if"),while:z,with:z,else:fe,do:fe,try:fe,finally:fe,return:de,break:de,continue:de,new:S("new"),delete:Ne,void:Ne,throw:Ne,debugger:S("debugger"),var:S("var"),const:S("var"),let:S("var"),function:S("function"),catch:S("catch"),for:S("for"),switch:S("switch"),case:S("case"),default:S("default"),in:ze,typeof:ze,instanceof:ze,true:_t,false:_t,null:_t,undefined:_t,NaN:_t,Infinity:_t,this:S("this"),class:S("class"),super:S("atom"),yield:Ne,export:S("export"),import:S("import"),extends:Ne,await:Ne}})(),ee=/[+\-*&%=<>!?|~^@]/,oe=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function X(S){for(var z=!1,fe,Ne=!1;(fe=S.next())!=null;){if(!z){if(fe=="/"&&!Ne)return;fe=="["?Ne=!0:Ne&&fe=="]"&&(Ne=!1)}z=!z&&fe=="\\"}}var ue,M;function W(S,z,fe){return ue=S,M=fe,z}function q(S,z){var fe=S.next();if(fe=='"'||fe=="'")return z.tokenize=K(fe),z.tokenize(S,z);if(fe=="."&&S.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return W("number","number");if(fe=="."&&S.match(".."))return W("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(fe))return W(fe);if(fe=="="&&S.eat(">"))return W("=>","operator");if(fe=="0"&&S.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return W("number","number");if(/\d/.test(fe))return S.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),W("number","number");if(fe=="/")return S.eat("*")?(z.tokenize=ie,ie(S,z)):S.eat("/")?(S.skipToEnd(),W("comment","comment")):On(S,z,1)?(X(S),S.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),W("regexp","string-2")):(S.eat("="),W("operator","operator",S.current()));if(fe=="`")return z.tokenize=pe,pe(S,z);if(fe=="#"&&S.peek()=="!")return S.skipToEnd(),W("meta","meta");if(fe=="#"&&S.eatWhile(D))return W("variable","property");if(fe=="<"&&S.match("!--")||fe=="-"&&S.match("->")&&!/\S/.test(S.string.slice(0,S.start)))return S.skipToEnd(),W("comment","comment");if(ee.test(fe))return(fe!=">"||!z.lexical||z.lexical.type!=">")&&(S.eat("=")?(fe=="!"||fe=="=")&&S.eat("="):/[<>*+\-|&?]/.test(fe)&&(S.eat(fe),fe==">"&&S.eat(fe))),fe=="?"&&S.eat(".")?W("."):W("operator","operator",S.current());if(D.test(fe)){S.eatWhile(D);var Ne=S.current();if(z.lastType!="."){if(I.propertyIsEnumerable(Ne)){var de=I[Ne];return W(de.type,de.style,Ne)}if(Ne=="async"&&S.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return W("async","keyword",Ne)}return W("variable","variable",Ne)}}function K(S){return function(z,fe){var Ne=!1,de;if(E&&z.peek()=="@"&&z.match(oe))return fe.tokenize=q,W("jsonld-keyword","meta");for(;(de=z.next())!=null&&!(de==S&&!Ne);)Ne=!Ne&&de=="\\";return Ne||(fe.tokenize=q),W("string","string")}}function ie(S,z){for(var fe=!1,Ne;Ne=S.next();){if(Ne=="/"&&fe){z.tokenize=q;break}fe=Ne=="*"}return W("comment","comment")}function pe(S,z){for(var fe=!1,Ne;(Ne=S.next())!=null;){if(!fe&&(Ne=="`"||Ne=="$"&&S.eat("{"))){z.tokenize=q;break}fe=!fe&&Ne=="\\"}return W("quasi","string-2",S.current())}var re="([{}])";function we(S,z){z.fatArrowAt&&(z.fatArrowAt=null);var fe=S.string.indexOf("=>",S.start);if(!(fe<0)){if(j){var Ne=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(S.string.slice(S.start,fe));Ne&&(fe=Ne.index)}for(var de=0,ze=!1,_t=fe-1;_t>=0;--_t){var Jt=S.string.charAt(_t),Sn=re.indexOf(Jt);if(Sn>=0&&Sn<3){if(!de){++_t;break}if(--de==0){Jt=="("&&(ze=!0);break}}else if(Sn>=3&&Sn<6)++de;else if(D.test(Jt))ze=!0;else if(/["'\/`]/.test(Jt))for(;;--_t){if(_t==0)return;var si=S.string.charAt(_t-1);if(si==Jt&&S.string.charAt(_t-2)!="\\"){_t--;break}}else if(ze&&!de){++_t;break}}ze&&!de&&(z.fatArrowAt=_t)}}var Fe={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function _e(S,z,fe,Ne,de,ze){this.indented=S,this.column=z,this.type=fe,this.prev=de,this.info=ze,Ne!=null&&(this.align=Ne)}function $(S,z){if(!P)return!1;for(var fe=S.localVars;fe;fe=fe.next)if(fe.name==z)return!0;for(var Ne=S.context;Ne;Ne=Ne.prev)for(var fe=Ne.vars;fe;fe=fe.next)if(fe.name==z)return!0}function Te(S,z,fe,Ne,de){var ze=S.cc;for(ne.state=S,ne.stream=de,ne.marked=null,ne.cc=ze,ne.style=z,S.lexical.hasOwnProperty("align")||(S.lexical.align=!0);;){var _t=ze.length?ze.pop():_?Ge:Be;if(_t(fe,Ne)){for(;ze.length&&ze[ze.length-1].lex;)ze.pop()();return ne.marked?ne.marked:fe=="variable"&&$(S,Ne)?"variable-2":z}}}var ne={state:null,marked:null,cc:null};function ye(){for(var S=arguments.length-1;S>=0;S--)ne.cc.push(arguments[S])}function T(){return ye.apply(null,arguments),!0}function Q(S,z){for(var fe=z;fe;fe=fe.next)if(fe.name==S)return!0;return!1}function B(S){var z=ne.state;if(ne.marked="def",!!P){if(z.context){if(z.lexical.info=="var"&&z.context&&z.context.block){var fe=C(S,z.context);if(fe!=null){z.context=fe;return}}else if(!Q(S,z.localVars)){z.localVars=new H(S,z.localVars);return}}x.globalVars&&!Q(S,z.globalVars)&&(z.globalVars=new H(S,z.globalVars))}}function C(S,z){if(z)if(z.block){var fe=C(S,z.prev);return fe?fe==z.prev?z:new Y(fe,z.vars,!0):null}else return Q(S,z.vars)?z:new Y(z.prev,new H(S,z.vars),!1);else return null}function R(S){return S=="public"||S=="private"||S=="protected"||S=="abstract"||S=="readonly"}function Y(S,z,fe){this.prev=S,this.vars=z,this.block=fe}function H(S,z){this.name=S,this.next=z}var ae=new H("this",new H("arguments",null));function De(){ne.state.context=new Y(ne.state.context,ne.state.localVars,!1),ne.state.localVars=ae}function Je(){ne.state.context=new Y(ne.state.context,ne.state.localVars,!0),ne.state.localVars=null}De.lex=Je.lex=!0;function Ve(){ne.state.localVars=ne.state.context.vars,ne.state.context=ne.state.context.prev}Ve.lex=!0;function ke(S,z){var fe=function(){var Ne=ne.state,de=Ne.indented;if(Ne.lexical.type=="stat")de=Ne.lexical.indented;else for(var ze=Ne.lexical;ze&&ze.type==")"&&ze.align;ze=ze.prev)de=ze.indented;Ne.lexical=new _e(de,ne.stream.column(),S,null,Ne.lexical,z)};return fe.lex=!0,fe}function Ie(){var S=ne.state;S.lexical.prev&&(S.lexical.type==")"&&(S.indented=S.lexical.indented),S.lexical=S.lexical.prev)}Ie.lex=!0;function He(S){function z(fe){return fe==S?T():S==";"||fe=="}"||fe==")"||fe=="]"?ye():T(z)}return z}function Be(S,z){return S=="var"?T(ke("vardef",z),ni,He(";"),Ie):S=="keyword a"?T(ke("form"),Qt,Be,Ie):S=="keyword b"?T(ke("form"),Be,Ie):S=="keyword d"?ne.stream.match(/^\s*$/,!1)?T():T(ke("stat"),fn,He(";"),Ie):S=="debugger"?T(He(";")):S=="{"?T(ke("}"),Je,Xn,Ie,Ve):S==";"?T():S=="if"?(ne.state.lexical.info=="else"&&ne.state.cc[ne.state.cc.length-1]==Ie&&ne.state.cc.pop()(),T(ke("form"),Qt,Be,Ie,Qn)):S=="function"?T(ur):S=="for"?T(ke("form"),Je,ri,Be,Ve,Ie):S=="class"||j&&z=="interface"?(ne.marked="keyword",T(ke("form",S=="class"?S:z),Ar,Ie)):S=="variable"?j&&z=="declare"?(ne.marked="keyword",T(Be)):j&&(z=="module"||z=="enum"||z=="type")&&ne.stream.match(/^\s*\w/,!1)?(ne.marked="keyword",z=="enum"?T(Xe):z=="type"?T(jo,He("operator"),gt,He(";")):T(ke("form"),In,He("{"),ke("}"),Xn,Ie,Ie)):j&&z=="namespace"?(ne.marked="keyword",T(ke("form"),Ge,Be,Ie)):j&&z=="abstract"?(ne.marked="keyword",T(Be)):T(ke("stat"),xt):S=="switch"?T(ke("form"),Qt,He("{"),ke("}","switch"),Je,Xn,Ie,Ie,Ve):S=="case"?T(Ge,He(":")):S=="default"?T(He(":")):S=="catch"?T(ke("form"),De,tt,Be,Ie,Ve):S=="export"?T(ke("stat"),Er,Ie):S=="import"?T(ke("stat"),ii,Ie):S=="async"?T(Be):z=="@"?T(Ge,Be):ye(ke("stat"),Ge,He(";"),Ie)}function tt(S){if(S=="(")return T(kn,He(")"))}function Ge(S,z){return $t(S,z,!1)}function qt(S,z){return $t(S,z,!0)}function Qt(S){return S!="("?ye():T(ke(")"),fn,He(")"),Ie)}function $t(S,z,fe){if(ne.state.fatArrowAt==ne.stream.start){var Ne=fe?vt:Ke;if(S=="(")return T(De,ke(")"),dt(kn,")"),Ie,He("=>"),Ne,Ve);if(S=="variable")return ye(De,In,He("=>"),Ne,Ve)}var de=fe?bt:et;return Fe.hasOwnProperty(S)?T(de):S=="function"?T(ur,de):S=="class"||j&&z=="interface"?(ne.marked="keyword",T(ke("form"),hs,Ie)):S=="keyword c"||S=="async"?T(fe?qt:Ge):S=="("?T(ke(")"),fn,He(")"),Ie,de):S=="operator"||S=="spread"?T(fe?qt:Ge):S=="["?T(ke("]"),Yt,Ie,de):S=="{"?mn(ot,"}",null,de):S=="quasi"?ye(lt,de):S=="new"?T(se(fe)):T()}function fn(S){return S.match(/[;\}\)\],]/)?ye():ye(Ge)}function et(S,z){return S==","?T(fn):bt(S,z,!1)}function bt(S,z,fe){var Ne=fe==!1?et:bt,de=fe==!1?Ge:qt;if(S=="=>")return T(De,fe?vt:Ke,Ve);if(S=="operator")return/\+\+|--/.test(z)||j&&z=="!"?T(Ne):j&&z=="<"&&ne.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?T(ke(">"),dt(gt,">"),Ie,Ne):z=="?"?T(Ge,He(":"),de):T(de);if(S=="quasi")return ye(lt,Ne);if(S!=";"){if(S=="(")return mn(qt,")","call",Ne);if(S==".")return T($e,Ne);if(S=="[")return T(ke("]"),fn,He("]"),Ie,Ne);if(j&&z=="as")return ne.marked="keyword",T(gt,Ne);if(S=="regexp")return ne.state.lastType=ne.marked="operator",ne.stream.backUp(ne.stream.pos-ne.stream.start-1),T(de)}}function lt(S,z){return S!="quasi"?ye():z.slice(z.length-2)!="${"?T(lt):T(fn,Zt)}function Zt(S){if(S=="}")return ne.marked="string-2",ne.state.tokenize=pe,T(lt)}function Ke(S){return we(ne.stream,ne.state),ye(S=="{"?Be:Ge)}function vt(S){return we(ne.stream,ne.state),ye(S=="{"?Be:qt)}function se(S){return function(z){return z=="."?T(S?ge:Ce):z=="variable"&&j?T(ln,S?bt:et):ye(S?qt:Ge)}}function Ce(S,z){if(z=="target")return ne.marked="keyword",T(et)}function ge(S,z){if(z=="target")return ne.marked="keyword",T(bt)}function xt(S){return S==":"?T(Ie,Be):ye(et,He(";"),Ie)}function $e(S){if(S=="variable")return ne.marked="property",T()}function ot(S,z){if(S=="async")return ne.marked="property",T(ot);if(S=="variable"||ne.style=="keyword"){if(ne.marked="property",z=="get"||z=="set")return T(qe);var fe;return j&&ne.state.fatArrowAt==ne.stream.start&&(fe=ne.stream.match(/^\s*:\s*/,!1))&&(ne.state.fatArrowAt=ne.stream.pos+fe[0].length),T(mt)}else{if(S=="number"||S=="string")return ne.marked=E?"property":ne.style+" property",T(mt);if(S=="jsonld-keyword")return T(mt);if(j&&R(z))return ne.marked="keyword",T(ot);if(S=="[")return T(Ge,_r,He("]"),mt);if(S=="spread")return T(qt,mt);if(z=="*")return ne.marked="keyword",T(ot);if(S==":")return ye(mt)}}function qe(S){return S!="variable"?ye(mt):(ne.marked="property",T(ur))}function mt(S){if(S==":")return T(qt);if(S=="(")return ye(ur)}function dt(S,z,fe){function Ne(de,ze){if(fe?fe.indexOf(de)>-1:de==","){var _t=ne.state.lexical;return _t.info=="call"&&(_t.pos=(_t.pos||0)+1),T(function(Jt,Sn){return Jt==z||Sn==z?ye():ye(S)},Ne)}return de==z||ze==z?T():fe&&fe.indexOf(";")>-1?ye(S):T(He(z))}return function(de,ze){return de==z||ze==z?T():ye(S,Ne)}}function mn(S,z,fe){for(var Ne=3;Ne<arguments.length;Ne++)ne.cc.push(arguments[Ne]);return T(ke(z,fe),dt(S,z),Ie)}function Xn(S){return S=="}"?T():ye(Be,Xn)}function _r(S,z){if(j){if(S==":")return T(gt);if(z=="?")return T(_r)}}function Wr(S,z){if(j&&(S==":"||z=="in"))return T(gt)}function sr(S){if(j&&S==":")return ne.stream.match(/^\s*\w+\s+is\b/,!1)?T(Ge,yi,gt):T(gt)}function yi(S,z){if(z=="is")return ne.marked="keyword",T()}function gt(S,z){if(z=="keyof"||z=="typeof"||z=="infer"||z=="readonly")return ne.marked="keyword",T(z=="typeof"?qt:gt);if(S=="variable"||z=="void")return ne.marked="type",T(En);if(z=="|"||z=="&")return T(gt);if(S=="string"||S=="number"||S=="atom")return T(En);if(S=="[")return T(ke("]"),dt(gt,"]",","),Ie,En);if(S=="{")return T(ke("}"),nt,Ie,En);if(S=="(")return T(dt(Rt,")"),Mi,En);if(S=="<")return T(dt(gt,">"),gt);if(S=="quasi")return ye(Gt,En)}function Mi(S){if(S=="=>")return T(gt)}function nt(S){return S.match(/[\}\)\]]/)?T():S==","||S==";"?T(nt):ye(Cr,nt)}function Cr(S,z){if(S=="variable"||ne.style=="keyword")return ne.marked="property",T(Cr);if(z=="?"||S=="number"||S=="string")return T(Cr);if(S==":")return T(gt);if(S=="[")return T(He("variable"),Wr,He("]"),Cr);if(S=="(")return ye(qr,Cr);if(!S.match(/[;\}\)\],]/))return T()}function Gt(S,z){return S!="quasi"?ye():z.slice(z.length-2)!="${"?T(Gt):T(gt,At)}function At(S){if(S=="}")return ne.marked="string-2",ne.state.tokenize=pe,T(Gt)}function Rt(S,z){return S=="variable"&&ne.stream.match(/^\s*[?:]/,!1)||z=="?"?T(Rt):S==":"?T(gt):S=="spread"?T(Rt):ye(gt)}function En(S,z){if(z=="<")return T(ke(">"),dt(gt,">"),Ie,En);if(z=="|"||S=="."||z=="&")return T(gt);if(S=="[")return T(gt,He("]"),En);if(z=="extends"||z=="implements")return ne.marked="keyword",T(gt);if(z=="?")return T(gt,He(":"),gt)}function ln(S,z){if(z=="<")return T(ke(">"),dt(gt,">"),Ie,En)}function ar(){return ye(gt,wn)}function wn(S,z){if(z=="=")return T(gt)}function ni(S,z){return z=="enum"?(ne.marked="keyword",T(Xe)):ye(In,_r,Ln,Tr)}function In(S,z){if(j&&R(z))return ne.marked="keyword",T(In);if(S=="variable")return B(z),T();if(S=="spread")return T(In);if(S=="[")return mn(Hr,"]");if(S=="{")return mn(lr,"}")}function lr(S,z){return S=="variable"&&!ne.stream.match(/^\s*:/,!1)?(B(z),T(Ln)):(S=="variable"&&(ne.marked="property"),S=="spread"?T(In):S=="}"?ye():S=="["?T(Ge,He("]"),He(":"),lr):T(He(":"),In,Ln))}function Hr(){return ye(In,Ln)}function Ln(S,z){if(z=="=")return T(qt)}function Tr(S){if(S==",")return T(ni)}function Qn(S,z){if(S=="keyword b"&&z=="else")return T(ke("form","else"),Be,Ie)}function ri(S,z){if(z=="await")return T(ri);if(S=="(")return T(ke(")"),Br,Ie)}function Br(S){return S=="var"?T(ni,Ur):S=="variable"?T(Ur):ye(Ur)}function Ur(S,z){return S==")"?T():S==";"?T(Ur):z=="in"||z=="of"?(ne.marked="keyword",T(Ge,Ur)):ye(Ge,Ur)}function ur(S,z){if(z=="*")return ne.marked="keyword",T(ur);if(S=="variable")return B(z),T(ur);if(S=="(")return T(De,ke(")"),dt(kn,")"),Ie,sr,Be,Ve);if(j&&z=="<")return T(ke(">"),dt(ar,">"),Ie,ur)}function qr(S,z){if(z=="*")return ne.marked="keyword",T(qr);if(S=="variable")return B(z),T(qr);if(S=="(")return T(De,ke(")"),dt(kn,")"),Ie,sr,Ve);if(j&&z=="<")return T(ke(">"),dt(ar,">"),Ie,qr)}function jo(S,z){if(S=="keyword"||S=="variable")return ne.marked="type",T(jo);if(z=="<")return T(ke(">"),dt(ar,">"),Ie)}function kn(S,z){return z=="@"&&T(Ge,kn),S=="spread"?T(kn):j&&R(z)?(ne.marked="keyword",T(kn)):j&&S=="this"?T(_r,Ln):ye(In,_r,Ln)}function hs(S,z){return S=="variable"?Ar(S,z):Rr(S,z)}function Ar(S,z){if(S=="variable")return B(z),T(Rr)}function Rr(S,z){if(z=="<")return T(ke(">"),dt(ar,">"),Ie,Rr);if(z=="extends"||z=="implements"||j&&S==",")return z=="implements"&&(ne.marked="keyword"),T(j?gt:Ge,Rr);if(S=="{")return T(ke("}"),Nr,Ie)}function Nr(S,z){if(S=="async"||S=="variable"&&(z=="static"||z=="get"||z=="set"||j&&R(z))&&ne.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return ne.marked="keyword",T(Nr);if(S=="variable"||ne.style=="keyword")return ne.marked="property",T(Ft,Nr);if(S=="number"||S=="string")return T(Ft,Nr);if(S=="[")return T(Ge,_r,He("]"),Ft,Nr);if(z=="*")return ne.marked="keyword",T(Nr);if(j&&S=="(")return ye(qr,Nr);if(S==";"||S==",")return T(Nr);if(S=="}")return T();if(z=="@")return T(Ge,Nr)}function Ft(S,z){if(z=="!"||z=="?")return T(Ft);if(S==":")return T(gt,Ln);if(z=="=")return T(qt);var fe=ne.state.lexical.prev,Ne=fe&&fe.info=="interface";return ye(Ne?qr:ur)}function Er(S,z){return z=="*"?(ne.marked="keyword",T(xi,He(";"))):z=="default"?(ne.marked="keyword",T(Ge,He(";"))):S=="{"?T(dt(Di,"}"),xi,He(";")):ye(Be)}function Di(S,z){if(z=="as")return ne.marked="keyword",T(He("variable"));if(S=="variable")return ye(qt,Di)}function ii(S){return S=="string"?T():S=="("?ye(Ge):S=="."?ye(et):ye(vi,jt,xi)}function vi(S,z){return S=="{"?mn(vi,"}"):(S=="variable"&&B(z),z=="*"&&(ne.marked="keyword"),T(io))}function jt(S){if(S==",")return T(vi,jt)}function io(S,z){if(z=="as")return ne.marked="keyword",T(vi)}function xi(S,z){if(z=="from")return ne.marked="keyword",T(Ge)}function Yt(S){return S=="]"?T():ye(dt(qt,"]"))}function Xe(){return ye(ke("form"),In,He("{"),ke("}"),dt(oi,"}"),Ie,Ie)}function oi(){return ye(In,Ln)}function cr(S,z){return S.lastType=="operator"||S.lastType==","||ee.test(z.charAt(0))||/[,.]/.test(z.charAt(0))}function On(S,z,fe){return z.tokenize==q&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(z.lastType)||z.lastType=="quasi"&&/\{\s*$/.test(S.string.slice(0,S.pos-(fe||0)))}return{startState:function(S){var z={tokenize:q,lastType:"sof",cc:[],lexical:new _e((S||0)-w,0,"block",!1),localVars:x.localVars,context:x.localVars&&new Y(null,null,!1),indented:S||0};return x.globalVars&&typeof x.globalVars=="object"&&(z.globalVars=x.globalVars),z},token:function(S,z){if(S.sol()&&(z.lexical.hasOwnProperty("align")||(z.lexical.align=!1),z.indented=S.indentation(),we(S,z)),z.tokenize!=ie&&S.eatSpace())return null;var fe=z.tokenize(S,z);return ue=="comment"?fe:(z.lastType=ue=="operator"&&(M=="++"||M=="--")?"incdec":ue,Te(z,fe,ue,M,S))},indent:function(S,z){if(S.tokenize==ie||S.tokenize==pe)return p.Pass;if(S.tokenize!=q)return 0;var fe=z&&z.charAt(0),Ne=S.lexical,de;if(!/^\s*else\b/.test(z))for(var ze=S.cc.length-1;ze>=0;--ze){var _t=S.cc[ze];if(_t==Ie)Ne=Ne.prev;else if(_t!=Qn&&_t!=Ve)break}for(;(Ne.type=="stat"||Ne.type=="form")&&(fe=="}"||(de=S.cc[S.cc.length-1])&&(de==et||de==bt)&&!/^[,\.=+\-*:?[\(]/.test(z));)Ne=Ne.prev;L&&Ne.type==")"&&Ne.prev.type=="stat"&&(Ne=Ne.prev);var Jt=Ne.type,Sn=fe==Jt;return Jt=="vardef"?Ne.indented+(S.lastType=="operator"||S.lastType==","?Ne.info.length+1:0):Jt=="form"&&fe=="{"?Ne.indented:Jt=="form"?Ne.indented+w:Jt=="stat"?Ne.indented+(cr(S,z)?L||w:0):Ne.info=="switch"&&!Sn&&x.doubleIndentSwitch!=!1?Ne.indented+(/^(?:case|default)\b/.test(z)?w:2*w):Ne.align?Ne.column+(Sn?0:1):Ne.indented+(Sn?0:w)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:_?null:"/*",blockCommentEnd:_?null:"*/",blockCommentContinue:_?null:" * ",lineComment:_?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:_?"json":"javascript",jsonldMode:E,jsonMode:_,expressionAllowed:On,skipExpression:function(S){Te(S,"atom","atom","true",new p.StringStream("",2,null))}}}),p.registerHelper("wordChars","javascript",/[\w$]/),p.defineMIME("text/javascript","javascript"),p.defineMIME("text/ecmascript","javascript"),p.defineMIME("application/javascript","javascript"),p.defineMIME("application/x-javascript","javascript"),p.defineMIME("application/ecmascript","javascript"),p.defineMIME("application/json",{name:"javascript",json:!0}),p.defineMIME("application/x-json",{name:"javascript",json:!0}),p.defineMIME("application/manifest+json",{name:"javascript",json:!0}),p.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),p.defineMIME("text/typescript",{name:"javascript",typescript:!0}),p.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),nf.exports}im();var of={exports:{}},sf;function nx(){return sf||(sf=1,(function(c,h){(function(p){p(ro())})(function(p){function v(C,R,Y,H,ae,De){this.indented=C,this.column=R,this.type=Y,this.info=H,this.align=ae,this.prev=De}function x(C,R,Y,H){var ae=C.indented;return C.context&&C.context.type=="statement"&&Y!="statement"&&(ae=C.context.indented),C.context=new v(ae,R,Y,H,null,C.context)}function w(C){var R=C.context.type;return(R==")"||R=="]"||R=="}")&&(C.indented=C.context.indented),C.context=C.context.prev}function L(C,R,Y){if(R.prevToken=="variable"||R.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(C.string.slice(0,Y))||R.typeAtEndOfLine&&C.column()==C.indentation())return!0}function E(C){for(;;){if(!C||C.type=="top")return!0;if(C.type=="}"&&C.prev.info!="namespace")return!1;C=C.prev}}p.defineMode("clike",function(C,R){var Y=C.indentUnit,H=R.statementIndentUnit||Y,ae=R.dontAlignCalls,De=R.keywords||{},Je=R.types||{},Ve=R.builtin||{},ke=R.blockKeywords||{},Ie=R.defKeywords||{},He=R.atoms||{},Be=R.hooks||{},tt=R.multiLineStrings,Ge=R.indentStatements!==!1,qt=R.indentSwitch!==!1,Qt=R.namespaceSeparator,$t=R.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,fn=R.numberStart||/[\d\.]/,et=R.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,bt=R.isOperatorChar||/[+\-*&%=<>!?|\/]/,lt=R.isIdentifierChar||/[\w\$_\xa1-\uffff]/,Zt=R.isReservedIdentifier||!1,Ke,vt;function se($e,ot){var qe=$e.next();if(Be[qe]){var mt=Be[qe]($e,ot);if(mt!==!1)return mt}if(qe=='"'||qe=="'")return ot.tokenize=Ce(qe),ot.tokenize($e,ot);if(fn.test(qe)){if($e.backUp(1),$e.match(et))return"number";$e.next()}if($t.test(qe))return Ke=qe,null;if(qe=="/"){if($e.eat("*"))return ot.tokenize=ge,ge($e,ot);if($e.eat("/"))return $e.skipToEnd(),"comment"}if(bt.test(qe)){for(;!$e.match(/^\/[\/*]/,!1)&&$e.eat(bt););return"operator"}if($e.eatWhile(lt),Qt)for(;$e.match(Qt);)$e.eatWhile(lt);var dt=$e.current();return P(De,dt)?(P(ke,dt)&&(Ke="newstatement"),P(Ie,dt)&&(vt=!0),"keyword"):P(Je,dt)?"type":P(Ve,dt)||Zt&&Zt(dt)?(P(ke,dt)&&(Ke="newstatement"),"builtin"):P(He,dt)?"atom":"variable"}function Ce($e){return function(ot,qe){for(var mt=!1,dt,mn=!1;(dt=ot.next())!=null;){if(dt==$e&&!mt){mn=!0;break}mt=!mt&&dt=="\\"}return(mn||!(mt||tt))&&(qe.tokenize=null),"string"}}function ge($e,ot){for(var qe=!1,mt;mt=$e.next();){if(mt=="/"&&qe){ot.tokenize=null;break}qe=mt=="*"}return"comment"}function xt($e,ot){R.typeFirstDefinitions&&$e.eol()&&E(ot.context)&&(ot.typeAtEndOfLine=L($e,ot,$e.pos))}return{startState:function($e){return{tokenize:null,context:new v(($e||0)-Y,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function($e,ot){var qe=ot.context;if($e.sol()&&(qe.align==null&&(qe.align=!1),ot.indented=$e.indentation(),ot.startOfLine=!0),$e.eatSpace())return xt($e,ot),null;Ke=vt=null;var mt=(ot.tokenize||se)($e,ot);if(mt=="comment"||mt=="meta")return mt;if(qe.align==null&&(qe.align=!0),Ke==";"||Ke==":"||Ke==","&&$e.match(/^\s*(?:\/\/.*)?$/,!1))for(;ot.context.type=="statement";)w(ot);else if(Ke=="{")x(ot,$e.column(),"}");else if(Ke=="[")x(ot,$e.column(),"]");else if(Ke=="(")x(ot,$e.column(),")");else if(Ke=="}"){for(;qe.type=="statement";)qe=w(ot);for(qe.type=="}"&&(qe=w(ot));qe.type=="statement";)qe=w(ot)}else Ke==qe.type?w(ot):Ge&&((qe.type=="}"||qe.type=="top")&&Ke!=";"||qe.type=="statement"&&Ke=="newstatement")&&x(ot,$e.column(),"statement",$e.current());if(mt=="variable"&&(ot.prevToken=="def"||R.typeFirstDefinitions&&L($e,ot,$e.start)&&E(ot.context)&&$e.match(/^\s*\(/,!1))&&(mt="def"),Be.token){var dt=Be.token($e,ot,mt);dt!==void 0&&(mt=dt)}return mt=="def"&&R.styleDefs===!1&&(mt="variable"),ot.startOfLine=!1,ot.prevToken=vt?"def":mt||Ke,xt($e,ot),mt},indent:function($e,ot){if($e.tokenize!=se&&$e.tokenize!=null||$e.typeAtEndOfLine&&E($e.context))return p.Pass;var qe=$e.context,mt=ot&&ot.charAt(0),dt=mt==qe.type;if(qe.type=="statement"&&mt=="}"&&(qe=qe.prev),R.dontIndentStatements)for(;qe.type=="statement"&&R.dontIndentStatements.test(qe.info);)qe=qe.prev;if(Be.indent){var mn=Be.indent($e,qe,ot,Y);if(typeof mn=="number")return mn}var Xn=qe.prev&&qe.prev.info=="switch";if(R.allmanIndentation&&/[{(]/.test(mt)){for(;qe.type!="top"&&qe.type!="}";)qe=qe.prev;return qe.indented}return qe.type=="statement"?qe.indented+(mt=="{"?0:H):qe.align&&(!ae||qe.type!=")")?qe.column+(dt?0:1):qe.type==")"&&!dt?qe.indented+H:qe.indented+(dt?0:Y)+(!dt&&Xn&&!/^(?:case|default)\b/.test(ot)?Y:0)},electricInput:qt?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function _(C){for(var R={},Y=C.split(" "),H=0;H<Y.length;++H)R[Y[H]]=!0;return R}function P(C,R){return typeof C=="function"?C(R):C.propertyIsEnumerable(R)}var j="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",D="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",I="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",ee="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",oe=_("int long char short double float unsigned signed void bool"),X=_("SEL instancetype id Class Protocol BOOL");function ue(C){return P(oe,C)||/.+_t$/.test(C)}function M(C){return ue(C)||P(X,C)}var W="case do else for if switch while struct enum union",q="struct enum union";function K(C,R){if(!R.startOfLine)return!1;for(var Y,H=null;Y=C.peek();){if(Y=="\\"&&C.match(/^.$/)){H=K;break}else if(Y=="/"&&C.match(/^\/[\/\*]/,!1))break;C.next()}return R.tokenize=H,"meta"}function ie(C,R){return R.prevToken=="type"?"type":!1}function pe(C){return!C||C.length<2||C[0]!="_"?!1:C[1]=="_"||C[1]!==C[1].toLowerCase()}function re(C){return C.eatWhile(/[\w\.']/),"number"}function we(C,R){if(C.backUp(1),C.match(/^(?:R|u8R|uR|UR|LR)/)){var Y=C.match(/^"([^\s\\()]{0,16})\(/);return Y?(R.cpp11RawStringDelim=Y[1],R.tokenize=$,$(C,R)):!1}return C.match(/^(?:u8|u|U|L)/)?C.match(/^["']/,!1)?"string":!1:(C.next(),!1)}function Fe(C){var R=/(\w+)::~?(\w+)$/.exec(C);return R&&R[1]==R[2]}function _e(C,R){for(var Y;(Y=C.next())!=null;)if(Y=='"'&&!C.eat('"')){R.tokenize=null;break}return"string"}function $(C,R){var Y=R.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),H=C.match(new RegExp(".*?\\)"+Y+'"'));return H?R.tokenize=null:C.skipToEnd(),"string"}function Te(C,R){typeof C=="string"&&(C=[C]);var Y=[];function H(De){if(De)for(var Je in De)De.hasOwnProperty(Je)&&Y.push(Je)}H(R.keywords),H(R.types),H(R.builtin),H(R.atoms),Y.length&&(R.helperType=C[0],p.registerHelper("hintWords",C[0],Y));for(var ae=0;ae<C.length;++ae)p.defineMIME(C[ae],R)}Te(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:_(j),types:ue,blockKeywords:_(W),defKeywords:_(q),typeFirstDefinitions:!0,atoms:_("NULL true false"),isReservedIdentifier:pe,hooks:{"#":K,"*":ie},modeProps:{fold:["brace","include"]}}),Te(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:_(j+" "+D),types:ue,blockKeywords:_(W+" class try catch"),defKeywords:_(q+" class namespace"),typeFirstDefinitions:!0,atoms:_("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:pe,hooks:{"#":K,"*":ie,u:we,U:we,L:we,R:we,0:re,1:re,2:re,3:re,4:re,5:re,6:re,7:re,8:re,9:re,token:function(C,R,Y){if(Y=="variable"&&C.peek()=="("&&(R.prevToken==";"||R.prevToken==null||R.prevToken=="}")&&Fe(C.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Te("text/x-java",{name:"clike",keywords:_("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:_("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:_("catch class do else finally for if switch try while"),defKeywords:_("class interface enum @interface"),typeFirstDefinitions:!0,atoms:_("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(C){return C.match("interface",!1)?!1:(C.eatWhile(/[\w\$_]/),"meta")},'"':function(C,R){return C.match(/""$/)?(R.tokenize=ne,R.tokenize(C,R)):!1}},modeProps:{fold:["brace","import"]}}),Te("text/x-csharp",{name:"clike",keywords:_("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:_("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:_("catch class do else finally for foreach if struct switch try while"),defKeywords:_("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:_("true false null"),hooks:{"@":function(C,R){return C.eat('"')?(R.tokenize=_e,_e(C,R)):(C.eatWhile(/[\w\$_]/),"meta")}}});function ne(C,R){for(var Y=!1;!C.eol();){if(!Y&&C.match('"""')){R.tokenize=null;break}Y=C.next()=="\\"&&!Y}return"string"}function ye(C){return function(R,Y){for(var H;H=R.next();)if(H=="*"&&R.eat("/"))if(C==1){Y.tokenize=null;break}else return Y.tokenize=ye(C-1),Y.tokenize(R,Y);else if(H=="/"&&R.eat("*"))return Y.tokenize=ye(C+1),Y.tokenize(R,Y);return"comment"}}Te("text/x-scala",{name:"clike",keywords:_("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:_("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:_("catch class enum do else finally for forSome if match switch try while"),defKeywords:_("class enum def object package trait type val var"),atoms:_("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(C){return C.eatWhile(/[\w\$_]/),"meta"},'"':function(C,R){return C.match('""')?(R.tokenize=ne,R.tokenize(C,R)):!1},"'":function(C){return C.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(C.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(C,R){var Y=R.context;return Y.type=="}"&&Y.align&&C.eat(">")?(R.context=new v(Y.indented,Y.column,Y.type,Y.info,null,Y.prev),"operator"):!1},"/":function(C,R){return C.eat("*")?(R.tokenize=ye(1),R.tokenize(C,R)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function T(C){return function(R,Y){for(var H=!1,ae,De=!1;!R.eol();){if(!C&&!H&&R.match('"')){De=!0;break}if(C&&R.match('"""')){De=!0;break}ae=R.next(),!H&&ae=="$"&&R.match("{")&&R.skipTo("}"),H=!H&&ae=="\\"&&!C}return(De||!C)&&(Y.tokenize=null),"string"}}Te("text/x-kotlin",{name:"clike",keywords:_("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:_("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:_("catch class do else finally for if where try while enum"),defKeywords:_("class val var object interface fun"),atoms:_("true false null this"),hooks:{"@":function(C){return C.eatWhile(/[\w\$_]/),"meta"},"*":function(C,R){return R.prevToken=="."?"variable":"operator"},'"':function(C,R){return R.tokenize=T(C.match('""')),R.tokenize(C,R)},"/":function(C,R){return C.eat("*")?(R.tokenize=ye(1),R.tokenize(C,R)):!1},indent:function(C,R,Y,H){var ae=Y&&Y.charAt(0);if((C.prevToken=="}"||C.prevToken==")")&&Y=="")return C.indented;if(C.prevToken=="operator"&&Y!="}"&&C.context.type!="}"||C.prevToken=="variable"&&ae=="."||(C.prevToken=="}"||C.prevToken==")")&&ae==".")return H*2+R.indented;if(R.align&&R.type=="}")return R.indented+(C.context.type==(Y||"").charAt(0)?0:H)}},modeProps:{closeBrackets:{triples:'"'}}}),Te(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:_("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:_("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:_("for while do if else struct"),builtin:_("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:_("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":K},modeProps:{fold:["brace","include"]}}),Te("text/x-nesc",{name:"clike",keywords:_(j+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:ue,blockKeywords:_(W),atoms:_("null true false"),hooks:{"#":K},modeProps:{fold:["brace","include"]}}),Te("text/x-objectivec",{name:"clike",keywords:_(j+" "+I),types:M,builtin:_(ee),blockKeywords:_(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:_(q+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:_("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:pe,hooks:{"#":K,"*":ie},modeProps:{fold:["brace","include"]}}),Te("text/x-objectivec++",{name:"clike",keywords:_(j+" "+I+" "+D),types:M,builtin:_(ee),blockKeywords:_(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:_(q+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:_("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:pe,hooks:{"#":K,"*":ie,u:we,U:we,L:we,R:we,0:re,1:re,2:re,3:re,4:re,5:re,6:re,7:re,8:re,9:re,token:function(C,R,Y){if(Y=="variable"&&C.peek()=="("&&(R.prevToken==";"||R.prevToken==null||R.prevToken=="}")&&Fe(C.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Te("text/x-squirrel",{name:"clike",keywords:_("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:ue,blockKeywords:_("case catch class else for foreach if switch try while"),defKeywords:_("function local class"),typeFirstDefinitions:!0,atoms:_("true false null"),hooks:{"#":K},modeProps:{fold:["brace","include"]}});var Q=null;function B(C){return function(R,Y){for(var H=!1,ae,De=!1;!R.eol();){if(!H&&R.match('"')&&(C=="single"||R.match('""'))){De=!0;break}if(!H&&R.match("``")){Q=B(C),De=!0;break}ae=R.next(),H=C=="single"&&!H&&ae=="\\"}return De&&(Y.tokenize=null),"string"}}Te("text/x-ceylon",{name:"clike",keywords:_("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(C){var R=C.charAt(0);return R===R.toUpperCase()&&R!==R.toLowerCase()},blockKeywords:_("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:_("class dynamic function interface module object package value"),builtin:_("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:_("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(C){return C.eatWhile(/[\w\$_]/),"meta"},'"':function(C,R){return R.tokenize=B(C.match('""')?"triple":"single"),R.tokenize(C,R)},"`":function(C,R){return!Q||!C.match("`")?!1:(R.tokenize=Q,Q=null,R.tokenize(C,R))},"'":function(C){return C.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(C,R,Y){if((Y=="variable"||Y=="type")&&R.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),of.exports}nx();var af={exports:{}},lf;function om(){return lf||(lf=1,(function(c,h){(function(p){p(ro())})(function(p){var v={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},x={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};p.defineMode("xml",function(w,L){var E=w.indentUnit,_={},P=L.htmlMode?v:x;for(var j in P)_[j]=P[j];for(var j in L)_[j]=L[j];var D,I;function ee(T,Q){function B(Y){return Q.tokenize=Y,Y(T,Q)}var C=T.next();if(C=="<")return T.eat("!")?T.eat("[")?T.match("CDATA[")?B(ue("atom","]]>")):null:T.match("--")?B(ue("comment","-->")):T.match("DOCTYPE",!0,!0)?(T.eatWhile(/[\w\._\-]/),B(M(1))):null:T.eat("?")?(T.eatWhile(/[\w\._\-]/),Q.tokenize=ue("meta","?>"),"meta"):(D=T.eat("/")?"closeTag":"openTag",Q.tokenize=oe,"tag bracket");if(C=="&"){var R;return T.eat("#")?T.eat("x")?R=T.eatWhile(/[a-fA-F\d]/)&&T.eat(";"):R=T.eatWhile(/[\d]/)&&T.eat(";"):R=T.eatWhile(/[\w\.\-:]/)&&T.eat(";"),R?"atom":"error"}else return T.eatWhile(/[^&<]/),null}ee.isInText=!0;function oe(T,Q){var B=T.next();if(B==">"||B=="/"&&T.eat(">"))return Q.tokenize=ee,D=B==">"?"endTag":"selfcloseTag","tag bracket";if(B=="=")return D="equals",null;if(B=="<"){Q.tokenize=ee,Q.state=pe,Q.tagName=Q.tagStart=null;var C=Q.tokenize(T,Q);return C?C+" tag error":"tag error"}else return/[\'\"]/.test(B)?(Q.tokenize=X(B),Q.stringStartCol=T.column(),Q.tokenize(T,Q)):(T.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function X(T){var Q=function(B,C){for(;!B.eol();)if(B.next()==T){C.tokenize=oe;break}return"string"};return Q.isInAttribute=!0,Q}function ue(T,Q){return function(B,C){for(;!B.eol();){if(B.match(Q)){C.tokenize=ee;break}B.next()}return T}}function M(T){return function(Q,B){for(var C;(C=Q.next())!=null;){if(C=="<")return B.tokenize=M(T+1),B.tokenize(Q,B);if(C==">")if(T==1){B.tokenize=ee;break}else return B.tokenize=M(T-1),B.tokenize(Q,B)}return"meta"}}function W(T){return T&&T.toLowerCase()}function q(T,Q,B){this.prev=T.context,this.tagName=Q||"",this.indent=T.indented,this.startOfLine=B,(_.doNotIndent.hasOwnProperty(Q)||T.context&&T.context.noIndent)&&(this.noIndent=!0)}function K(T){T.context&&(T.context=T.context.prev)}function ie(T,Q){for(var B;;){if(!T.context||(B=T.context.tagName,!_.contextGrabbers.hasOwnProperty(W(B))||!_.contextGrabbers[W(B)].hasOwnProperty(W(Q))))return;K(T)}}function pe(T,Q,B){return T=="openTag"?(B.tagStart=Q.column(),re):T=="closeTag"?we:pe}function re(T,Q,B){return T=="word"?(B.tagName=Q.current(),I="tag",$):_.allowMissingTagName&&T=="endTag"?(I="tag bracket",$(T,Q,B)):(I="error",re)}function we(T,Q,B){if(T=="word"){var C=Q.current();return B.context&&B.context.tagName!=C&&_.implicitlyClosed.hasOwnProperty(W(B.context.tagName))&&K(B),B.context&&B.context.tagName==C||_.matchClosing===!1?(I="tag",Fe):(I="tag error",_e)}else return _.allowMissingTagName&&T=="endTag"?(I="tag bracket",Fe(T,Q,B)):(I="error",_e)}function Fe(T,Q,B){return T!="endTag"?(I="error",Fe):(K(B),pe)}function _e(T,Q,B){return I="error",Fe(T,Q,B)}function $(T,Q,B){if(T=="word")return I="attribute",Te;if(T=="endTag"||T=="selfcloseTag"){var C=B.tagName,R=B.tagStart;return B.tagName=B.tagStart=null,T=="selfcloseTag"||_.autoSelfClosers.hasOwnProperty(W(C))?ie(B,C):(ie(B,C),B.context=new q(B,C,R==B.indented)),pe}return I="error",$}function Te(T,Q,B){return T=="equals"?ne:(_.allowMissing||(I="error"),$(T,Q,B))}function ne(T,Q,B){return T=="string"?ye:T=="word"&&_.allowUnquoted?(I="string",$):(I="error",$(T,Q,B))}function ye(T,Q,B){return T=="string"?ye:$(T,Q,B)}return{startState:function(T){var Q={tokenize:ee,state:pe,indented:T||0,tagName:null,tagStart:null,context:null};return T!=null&&(Q.baseIndent=T),Q},token:function(T,Q){if(!Q.tagName&&T.sol()&&(Q.indented=T.indentation()),T.eatSpace())return null;D=null;var B=Q.tokenize(T,Q);return(B||D)&&B!="comment"&&(I=null,Q.state=Q.state(D||B,T,Q),I&&(B=I=="error"?B+" error":I)),B},indent:function(T,Q,B){var C=T.context;if(T.tokenize.isInAttribute)return T.tagStart==T.indented?T.stringStartCol+1:T.indented+E;if(C&&C.noIndent)return p.Pass;if(T.tokenize!=oe&&T.tokenize!=ee)return B?B.match(/^(\s*)/)[0].length:0;if(T.tagName)return _.multilineTagIndentPastTag!==!1?T.tagStart+T.tagName.length+2:T.tagStart+E*(_.multilineTagIndentFactor||1);if(_.alignCDATA&&/<!\[CDATA\[/.test(Q))return 0;var R=Q&&/^<(\/)?([\w_:\.-]*)/.exec(Q);if(R&&R[1])for(;C;)if(C.tagName==R[2]){C=C.prev;break}else if(_.implicitlyClosed.hasOwnProperty(W(C.tagName)))C=C.prev;else break;else if(R)for(;C;){var Y=_.contextGrabbers[W(C.tagName)];if(Y&&Y.hasOwnProperty(W(R[2])))C=C.prev;else break}for(;C&&C.prev&&!C.startOfLine;)C=C.prev;return C?C.indent+E:T.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:_.htmlMode?"html":"xml",helperType:_.htmlMode?"html":"xml",skipAttribute:function(T){T.state==ne&&(T.state=$)},xmlCurrentTag:function(T){return T.tagName?{name:T.tagName,close:T.type=="closeTag"}:null},xmlCurrentContext:function(T){for(var Q=[],B=T.context;B;B=B.prev)Q.push(B.tagName);return Q.reverse()}}}),p.defineMIME("text/xml","xml"),p.defineMIME("application/xml","xml"),p.mimeModes.hasOwnProperty("text/html")||p.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),af.exports}om();var uf={exports:{}},cf;function sm(){return cf||(cf=1,(function(c,h){(function(p){p(ro())})(function(p){p.defineMode("css",function(_e,$){var Te=$.inline;$.propertyKeywords||($=p.resolveMode("text/css"));var ne=_e.indentUnit,ye=$.tokenHooks,T=$.documentTypes||{},Q=$.mediaTypes||{},B=$.mediaFeatures||{},C=$.mediaValueKeywords||{},R=$.propertyKeywords||{},Y=$.nonStandardPropertyKeywords||{},H=$.fontProperties||{},ae=$.counterDescriptors||{},De=$.colorKeywords||{},Je=$.valueKeywords||{},Ve=$.allowNested,ke=$.lineComment,Ie=$.supportsAtComponent===!0,He=_e.highlightNonStandardPropertyKeywords!==!1,Be,tt;function Ge(se,Ce){return Be=Ce,se}function qt(se,Ce){var ge=se.next();if(ye[ge]){var xt=ye[ge](se,Ce);if(xt!==!1)return xt}if(ge=="@")return se.eatWhile(/[\w\\\-]/),Ge("def",se.current());if(ge=="="||(ge=="~"||ge=="|")&&se.eat("="))return Ge(null,"compare");if(ge=='"'||ge=="'")return Ce.tokenize=Qt(ge),Ce.tokenize(se,Ce);if(ge=="#")return se.eatWhile(/[\w\\\-]/),Ge("atom","hash");if(ge=="!")return se.match(/^\s*\w*/),Ge("keyword","important");if(/\d/.test(ge)||ge=="."&&se.eat(/\d/))return se.eatWhile(/[\w.%]/),Ge("number","unit");if(ge==="-"){if(/[\d.]/.test(se.peek()))return se.eatWhile(/[\w.%]/),Ge("number","unit");if(se.match(/^-[\w\\\-]*/))return se.eatWhile(/[\w\\\-]/),se.match(/^\s*:/,!1)?Ge("variable-2","variable-definition"):Ge("variable-2","variable");if(se.match(/^\w+-/))return Ge("meta","meta")}else return/[,+>*\/]/.test(ge)?Ge(null,"select-op"):ge=="."&&se.match(/^-?[_a-z][_a-z0-9-]*/i)?Ge("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(ge)?Ge(null,ge):se.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(se.current())&&(Ce.tokenize=$t),Ge("variable callee","variable")):/[\w\\\-]/.test(ge)?(se.eatWhile(/[\w\\\-]/),Ge("property","word")):Ge(null,null)}function Qt(se){return function(Ce,ge){for(var xt=!1,$e;($e=Ce.next())!=null;){if($e==se&&!xt){se==")"&&Ce.backUp(1);break}xt=!xt&&$e=="\\"}return($e==se||!xt&&se!=")")&&(ge.tokenize=null),Ge("string","string")}}function $t(se,Ce){return se.next(),se.match(/^\s*[\"\')]/,!1)?Ce.tokenize=null:Ce.tokenize=Qt(")"),Ge(null,"(")}function fn(se,Ce,ge){this.type=se,this.indent=Ce,this.prev=ge}function et(se,Ce,ge,xt){return se.context=new fn(ge,Ce.indentation()+(xt===!1?0:ne),se.context),ge}function bt(se){return se.context.prev&&(se.context=se.context.prev),se.context.type}function lt(se,Ce,ge){return vt[ge.context.type](se,Ce,ge)}function Zt(se,Ce,ge,xt){for(var $e=xt||1;$e>0;$e--)ge.context=ge.context.prev;return lt(se,Ce,ge)}function Ke(se){var Ce=se.current().toLowerCase();Je.hasOwnProperty(Ce)?tt="atom":De.hasOwnProperty(Ce)?tt="keyword":tt="variable"}var vt={};return vt.top=function(se,Ce,ge){if(se=="{")return et(ge,Ce,"block");if(se=="}"&&ge.context.prev)return bt(ge);if(Ie&&/@component/i.test(se))return et(ge,Ce,"atComponentBlock");if(/^@(-moz-)?document$/i.test(se))return et(ge,Ce,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(se))return et(ge,Ce,"atBlock");if(/^@(font-face|counter-style)/i.test(se))return ge.stateArg=se,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(se))return"keyframes";if(se&&se.charAt(0)=="@")return et(ge,Ce,"at");if(se=="hash")tt="builtin";else if(se=="word")tt="tag";else{if(se=="variable-definition")return"maybeprop";if(se=="interpolation")return et(ge,Ce,"interpolation");if(se==":")return"pseudo";if(Ve&&se=="(")return et(ge,Ce,"parens")}return ge.context.type},vt.block=function(se,Ce,ge){if(se=="word"){var xt=Ce.current().toLowerCase();return R.hasOwnProperty(xt)?(tt="property","maybeprop"):Y.hasOwnProperty(xt)?(tt=He?"string-2":"property","maybeprop"):Ve?(tt=Ce.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(tt+=" error","maybeprop")}else return se=="meta"?"block":!Ve&&(se=="hash"||se=="qualifier")?(tt="error","block"):vt.top(se,Ce,ge)},vt.maybeprop=function(se,Ce,ge){return se==":"?et(ge,Ce,"prop"):lt(se,Ce,ge)},vt.prop=function(se,Ce,ge){if(se==";")return bt(ge);if(se=="{"&&Ve)return et(ge,Ce,"propBlock");if(se=="}"||se=="{")return Zt(se,Ce,ge);if(se=="(")return et(ge,Ce,"parens");if(se=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(Ce.current()))tt+=" error";else if(se=="word")Ke(Ce);else if(se=="interpolation")return et(ge,Ce,"interpolation");return"prop"},vt.propBlock=function(se,Ce,ge){return se=="}"?bt(ge):se=="word"?(tt="property","maybeprop"):ge.context.type},vt.parens=function(se,Ce,ge){return se=="{"||se=="}"?Zt(se,Ce,ge):se==")"?bt(ge):se=="("?et(ge,Ce,"parens"):se=="interpolation"?et(ge,Ce,"interpolation"):(se=="word"&&Ke(Ce),"parens")},vt.pseudo=function(se,Ce,ge){return se=="meta"?"pseudo":se=="word"?(tt="variable-3",ge.context.type):lt(se,Ce,ge)},vt.documentTypes=function(se,Ce,ge){return se=="word"&&T.hasOwnProperty(Ce.current())?(tt="tag",ge.context.type):vt.atBlock(se,Ce,ge)},vt.atBlock=function(se,Ce,ge){if(se=="(")return et(ge,Ce,"atBlock_parens");if(se=="}"||se==";")return Zt(se,Ce,ge);if(se=="{")return bt(ge)&&et(ge,Ce,Ve?"block":"top");if(se=="interpolation")return et(ge,Ce,"interpolation");if(se=="word"){var xt=Ce.current().toLowerCase();xt=="only"||xt=="not"||xt=="and"||xt=="or"?tt="keyword":Q.hasOwnProperty(xt)?tt="attribute":B.hasOwnProperty(xt)?tt="property":C.hasOwnProperty(xt)?tt="keyword":R.hasOwnProperty(xt)?tt="property":Y.hasOwnProperty(xt)?tt=He?"string-2":"property":Je.hasOwnProperty(xt)?tt="atom":De.hasOwnProperty(xt)?tt="keyword":tt="error"}return ge.context.type},vt.atComponentBlock=function(se,Ce,ge){return se=="}"?Zt(se,Ce,ge):se=="{"?bt(ge)&&et(ge,Ce,Ve?"block":"top",!1):(se=="word"&&(tt="error"),ge.context.type)},vt.atBlock_parens=function(se,Ce,ge){return se==")"?bt(ge):se=="{"||se=="}"?Zt(se,Ce,ge,2):vt.atBlock(se,Ce,ge)},vt.restricted_atBlock_before=function(se,Ce,ge){return se=="{"?et(ge,Ce,"restricted_atBlock"):se=="word"&&ge.stateArg=="@counter-style"?(tt="variable","restricted_atBlock_before"):lt(se,Ce,ge)},vt.restricted_atBlock=function(se,Ce,ge){return se=="}"?(ge.stateArg=null,bt(ge)):se=="word"?(ge.stateArg=="@font-face"&&!H.hasOwnProperty(Ce.current().toLowerCase())||ge.stateArg=="@counter-style"&&!ae.hasOwnProperty(Ce.current().toLowerCase())?tt="error":tt="property","maybeprop"):"restricted_atBlock"},vt.keyframes=function(se,Ce,ge){return se=="word"?(tt="variable","keyframes"):se=="{"?et(ge,Ce,"top"):lt(se,Ce,ge)},vt.at=function(se,Ce,ge){return se==";"?bt(ge):se=="{"||se=="}"?Zt(se,Ce,ge):(se=="word"?tt="tag":se=="hash"&&(tt="builtin"),"at")},vt.interpolation=function(se,Ce,ge){return se=="}"?bt(ge):se=="{"||se==";"?Zt(se,Ce,ge):(se=="word"?tt="variable":se!="variable"&&se!="("&&se!=")"&&(tt="error"),"interpolation")},{startState:function(se){return{tokenize:null,state:Te?"block":"top",stateArg:null,context:new fn(Te?"block":"top",se||0,null)}},token:function(se,Ce){if(!Ce.tokenize&&se.eatSpace())return null;var ge=(Ce.tokenize||qt)(se,Ce);return ge&&typeof ge=="object"&&(Be=ge[1],ge=ge[0]),tt=ge,Be!="comment"&&(Ce.state=vt[Ce.state](Be,se,Ce)),tt},indent:function(se,Ce){var ge=se.context,xt=Ce&&Ce.charAt(0),$e=ge.indent;return ge.type=="prop"&&(xt=="}"||xt==")")&&(ge=ge.prev),ge.prev&&(xt=="}"&&(ge.type=="block"||ge.type=="top"||ge.type=="interpolation"||ge.type=="restricted_atBlock")?(ge=ge.prev,$e=ge.indent):(xt==")"&&(ge.type=="parens"||ge.type=="atBlock_parens")||xt=="{"&&(ge.type=="at"||ge.type=="atBlock"))&&($e=Math.max(0,ge.indent-ne))),$e},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:ke,fold:"brace"}});function v(_e){for(var $={},Te=0;Te<_e.length;++Te)$[_e[Te].toLowerCase()]=!0;return $}var x=["domain","regexp","url","url-prefix"],w=v(x),L=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],E=v(L),_=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],P=v(_),j=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],D=v(j),I=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],ee=v(I),oe=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],X=v(oe),ue=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],M=v(ue),W=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],q=v(W),K=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],ie=v(K),pe=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],re=v(pe),we=x.concat(L).concat(_).concat(j).concat(I).concat(oe).concat(K).concat(pe);p.registerHelper("hintWords","css",we);function Fe(_e,$){for(var Te=!1,ne;(ne=_e.next())!=null;){if(Te&&ne=="/"){$.tokenize=null;break}Te=ne=="*"}return["comment","comment"]}p.defineMIME("text/css",{documentTypes:w,mediaTypes:E,mediaFeatures:P,mediaValueKeywords:D,propertyKeywords:ee,nonStandardPropertyKeywords:X,fontProperties:M,counterDescriptors:q,colorKeywords:ie,valueKeywords:re,tokenHooks:{"/":function(_e,$){return _e.eat("*")?($.tokenize=Fe,Fe(_e,$)):!1}},name:"css"}),p.defineMIME("text/x-scss",{mediaTypes:E,mediaFeatures:P,mediaValueKeywords:D,propertyKeywords:ee,nonStandardPropertyKeywords:X,colorKeywords:ie,valueKeywords:re,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(_e,$){return _e.eat("/")?(_e.skipToEnd(),["comment","comment"]):_e.eat("*")?($.tokenize=Fe,Fe(_e,$)):["operator","operator"]},":":function(_e){return _e.match(/^\s*\{/,!1)?[null,null]:!1},$:function(_e){return _e.match(/^[\w-]+/),_e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(_e){return _e.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),p.defineMIME("text/x-less",{mediaTypes:E,mediaFeatures:P,mediaValueKeywords:D,propertyKeywords:ee,nonStandardPropertyKeywords:X,colorKeywords:ie,valueKeywords:re,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(_e,$){return _e.eat("/")?(_e.skipToEnd(),["comment","comment"]):_e.eat("*")?($.tokenize=Fe,Fe(_e,$)):["operator","operator"]},"@":function(_e){return _e.eat("{")?[null,"interpolation"]:_e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(_e.eatWhile(/[\w\\\-]/),_e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),p.defineMIME("text/x-gss",{documentTypes:w,mediaTypes:E,mediaFeatures:P,propertyKeywords:ee,nonStandardPropertyKeywords:X,fontProperties:M,counterDescriptors:q,colorKeywords:ie,valueKeywords:re,supportsAtComponent:!0,tokenHooks:{"/":function(_e,$){return _e.eat("*")?($.tokenize=Fe,Fe(_e,$)):!1}},name:"css",helperType:"gss"})})})()),uf.exports}sm();var df={exports:{}},pf;function rx(){return pf||(pf=1,(function(c,h){(function(p){p(ro(),om(),im(),sm())})(function(p){var v={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function x(D,I,ee){var oe=D.current(),X=oe.search(I);return X>-1?D.backUp(oe.length-X):oe.match(/<\/?$/)&&(D.backUp(oe.length),D.match(I,!1)||D.match(oe)),ee}var w={};function L(D){var I=w[D];return I||(w[D]=new RegExp("\\s+"+D+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function E(D,I){var ee=D.match(L(I));return ee?/^\s*(.*?)\s*$/.exec(ee[2])[1]:""}function _(D,I){return new RegExp((I?"^":"")+"</\\s*"+D+"\\s*>","i")}function P(D,I){for(var ee in D)for(var oe=I[ee]||(I[ee]=[]),X=D[ee],ue=X.length-1;ue>=0;ue--)oe.unshift(X[ue])}function j(D,I){for(var ee=0;ee<D.length;ee++){var oe=D[ee];if(!oe[0]||oe[1].test(E(I,oe[0])))return oe[2]}}p.defineMode("htmlmixed",function(D,I){var ee=p.getMode(D,{name:"xml",htmlMode:!0,multilineTagIndentFactor:I.multilineTagIndentFactor,multilineTagIndentPastTag:I.multilineTagIndentPastTag,allowMissingTagName:I.allowMissingTagName}),oe={},X=I&&I.tags,ue=I&&I.scriptTypes;if(P(v,oe),X&&P(X,oe),ue)for(var M=ue.length-1;M>=0;M--)oe.script.unshift(["type",ue[M].matches,ue[M].mode]);function W(q,K){var ie=ee.token(q,K.htmlState),pe=/\btag\b/.test(ie),re;if(pe&&!/[<>\s\/]/.test(q.current())&&(re=K.htmlState.tagName&&K.htmlState.tagName.toLowerCase())&&oe.hasOwnProperty(re))K.inTag=re+" ";else if(K.inTag&&pe&&/>$/.test(q.current())){var we=/^([\S]+) (.*)/.exec(K.inTag);K.inTag=null;var Fe=q.current()==">"&&j(oe[we[1]],we[2]),_e=p.getMode(D,Fe),$=_(we[1],!0),Te=_(we[1],!1);K.token=function(ne,ye){return ne.match($,!1)?(ye.token=W,ye.localState=ye.localMode=null,null):x(ne,Te,ye.localMode.token(ne,ye.localState))},K.localMode=_e,K.localState=p.startState(_e,ee.indent(K.htmlState,"",""))}else K.inTag&&(K.inTag+=q.current(),q.eol()&&(K.inTag+=" "));return ie}return{startState:function(){var q=p.startState(ee);return{token:W,inTag:null,localMode:null,localState:null,htmlState:q}},copyState:function(q){var K;return q.localState&&(K=p.copyState(q.localMode,q.localState)),{token:q.token,inTag:q.inTag,localMode:q.localMode,localState:K,htmlState:p.copyState(ee,q.htmlState)}},token:function(q,K){return K.token(q,K)},indent:function(q,K,ie){return!q.localMode||/^\s*<\//.test(K)?ee.indent(q.htmlState,K,ie):q.localMode.indent?q.localMode.indent(q.localState,K,ie):p.Pass},innerMode:function(q){return{state:q.localState||q.htmlState,mode:q.localMode||ee}}}},"xml","javascript","css"),p.defineMIME("text/html","htmlmixed")})})()),df.exports}rx();var hf={exports:{}},ff;function ix(){return ff||(ff=1,(function(c,h){(function(p){p(ro())})(function(p){var v={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},x=p.Pos;p.defineOption("autoCloseBrackets",!1,function(M,W,q){q&&q!=p.Init&&(M.removeKeyMap(L),M.state.closeBrackets=null),W&&(E(w(W,"pairs")),M.state.closeBrackets=W,M.addKeyMap(L))});function w(M,W){return W=="pairs"&&typeof M=="string"?M:typeof M=="object"&&M[W]!=null?M[W]:v[W]}var L={Backspace:j,Enter:D};function E(M){for(var W=0;W<M.length;W++){var q=M.charAt(W),K="'"+q+"'";L[K]||(L[K]=_(q))}}E(v.pairs+"`");function _(M){return function(W){return oe(W,M)}}function P(M){var W=M.state.closeBrackets;if(!W||W.override)return W;var q=M.getModeAt(M.getCursor());return q.closeBrackets||W}function j(M){var W=P(M);if(!W||M.getOption("disableInput"))return p.Pass;for(var q=w(W,"pairs"),K=M.listSelections(),ie=0;ie<K.length;ie++){if(!K[ie].empty())return p.Pass;var pe=X(M,K[ie].head);if(!pe||q.indexOf(pe)%2!=0)return p.Pass}for(var ie=K.length-1;ie>=0;ie--){var re=K[ie].head;M.replaceRange("",x(re.line,re.ch-1),x(re.line,re.ch+1),"+delete")}}function D(M){var W=P(M),q=W&&w(W,"explode");if(!q||M.getOption("disableInput"))return p.Pass;for(var K=M.listSelections(),ie=0;ie<K.length;ie++){if(!K[ie].empty())return p.Pass;var pe=X(M,K[ie].head);if(!pe||q.indexOf(pe)%2!=0)return p.Pass}M.operation(function(){var re=M.lineSeparator()||`
`;M.replaceSelection(re+re,null),I(M,-1),K=M.listSelections();for(var we=0;we<K.length;we++){var Fe=K[we].head.line;M.indentLine(Fe,null,!0),M.indentLine(Fe+1,null,!0)}})}function I(M,W){for(var q=[],K=M.listSelections(),ie=0,pe=0;pe<K.length;pe++){var re=K[pe];re.head==M.getCursor()&&(ie=pe);var we=re.head.ch||W>0?{line:re.head.line,ch:re.head.ch+W}:{line:re.head.line-1};q.push({anchor:we,head:we})}M.setSelections(q,ie)}function ee(M){var W=p.cmpPos(M.anchor,M.head)>0;return{anchor:new x(M.anchor.line,M.anchor.ch+(W?-1:1)),head:new x(M.head.line,M.head.ch+(W?1:-1))}}function oe(M,W){var q=P(M);if(!q||M.getOption("disableInput"))return p.Pass;var K=w(q,"pairs"),ie=K.indexOf(W);if(ie==-1)return p.Pass;for(var pe=w(q,"closeBefore"),re=w(q,"triples"),we=K.charAt(ie+1)==W,Fe=M.listSelections(),_e=ie%2==0,$,Te=0;Te<Fe.length;Te++){var ne=Fe[Te],ye=ne.head,T,Q=M.getRange(ye,x(ye.line,ye.ch+1));if(_e&&!ne.empty())T="surround";else if((we||!_e)&&Q==W)we&&ue(M,ye)?T="both":re.indexOf(W)>=0&&M.getRange(ye,x(ye.line,ye.ch+3))==W+W+W?T="skipThree":T="skip";else if(we&&ye.ch>1&&re.indexOf(W)>=0&&M.getRange(x(ye.line,ye.ch-2),ye)==W+W){if(ye.ch>2&&/\bstring/.test(M.getTokenTypeAt(x(ye.line,ye.ch-2))))return p.Pass;T="addFour"}else if(we){var B=ye.ch==0?" ":M.getRange(x(ye.line,ye.ch-1),ye);if(!p.isWordChar(Q)&&B!=W&&!p.isWordChar(B))T="both";else return p.Pass}else if(_e&&(Q.length===0||/\s/.test(Q)||pe.indexOf(Q)>-1))T="both";else return p.Pass;if(!$)$=T;else if($!=T)return p.Pass}var C=ie%2?K.charAt(ie-1):W,R=ie%2?W:K.charAt(ie+1);M.operation(function(){if($=="skip")I(M,1);else if($=="skipThree")I(M,3);else if($=="surround"){for(var Y=M.getSelections(),H=0;H<Y.length;H++)Y[H]=C+Y[H]+R;M.replaceSelections(Y,"around"),Y=M.listSelections().slice();for(var H=0;H<Y.length;H++)Y[H]=ee(Y[H]);M.setSelections(Y)}else $=="both"?(M.replaceSelection(C+R,null),M.triggerElectric(C+R),I(M,-1)):$=="addFour"&&(M.replaceSelection(C+C+C+C,"before"),I(M,1))})}function X(M,W){var q=M.getRange(x(W.line,W.ch-1),x(W.line,W.ch+1));return q.length==2?q:null}function ue(M,W){var q=M.getTokenAt(x(W.line,W.ch+1));return/\bstring/.test(q.type)&&q.start==W.ch&&(W.ch==0||!/\bstring/.test(M.getTokenTypeAt(W)))}})})()),hf.exports}ix();var mf={exports:{}},gf;function ox(){return gf||(gf=1,(function(c,h){(function(p){p(ro())})(function(p){var v=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),x=p.Pos,w={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function L(I){return I&&I.bracketRegex||/[(){}[\]]/}function E(I,ee,oe){var X=I.getLineHandle(ee.line),ue=ee.ch-1,M=oe&&oe.afterCursor;M==null&&(M=/(^| )cm-fat-cursor($| )/.test(I.getWrapperElement().className));var W=L(oe),q=!M&&ue>=0&&W.test(X.text.charAt(ue))&&w[X.text.charAt(ue)]||W.test(X.text.charAt(ue+1))&&w[X.text.charAt(++ue)];if(!q)return null;var K=q.charAt(1)==">"?1:-1;if(oe&&oe.strict&&K>0!=(ue==ee.ch))return null;var ie=I.getTokenTypeAt(x(ee.line,ue+1)),pe=_(I,x(ee.line,ue+(K>0?1:0)),K,ie,oe);return pe==null?null:{from:x(ee.line,ue),to:pe&&pe.pos,match:pe&&pe.ch==q.charAt(0),forward:K>0}}function _(I,ee,oe,X,ue){for(var M=ue&&ue.maxScanLineLength||1e4,W=ue&&ue.maxScanLines||1e3,q=[],K=L(ue),ie=oe>0?Math.min(ee.line+W,I.lastLine()+1):Math.max(I.firstLine()-1,ee.line-W),pe=ee.line;pe!=ie;pe+=oe){var re=I.getLine(pe);if(re){var we=oe>0?0:re.length-1,Fe=oe>0?re.length:-1;if(!(re.length>M))for(pe==ee.line&&(we=ee.ch-(oe<0?1:0));we!=Fe;we+=oe){var _e=re.charAt(we);if(K.test(_e)&&(X===void 0||(I.getTokenTypeAt(x(pe,we+1))||"")==(X||""))){var $=w[_e];if($&&$.charAt(1)==">"==oe>0)q.push(_e);else if(q.length)q.pop();else return{pos:x(pe,we),ch:_e}}}}}return pe-oe==(oe>0?I.lastLine():I.firstLine())?!1:null}function P(I,ee,oe){for(var X=I.state.matchBrackets.maxHighlightLineLength||1e3,ue=oe&&oe.highlightNonMatching,M=[],W=I.listSelections(),q=0;q<W.length;q++){var K=W[q].empty()&&E(I,W[q].head,oe);if(K&&(K.match||ue!==!1)&&I.getLine(K.from.line).length<=X){var ie=K.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";M.push(I.markText(K.from,x(K.from.line,K.from.ch+1),{className:ie})),K.to&&I.getLine(K.to.line).length<=X&&M.push(I.markText(K.to,x(K.to.line,K.to.ch+1),{className:ie}))}}if(M.length){v&&I.state.focused&&I.focus();var pe=function(){I.operation(function(){for(var re=0;re<M.length;re++)M[re].clear()})};if(ee)setTimeout(pe,800);else return pe}}function j(I){I.operation(function(){I.state.matchBrackets.currentlyHighlighted&&(I.state.matchBrackets.currentlyHighlighted(),I.state.matchBrackets.currentlyHighlighted=null),I.state.matchBrackets.currentlyHighlighted=P(I,!1,I.state.matchBrackets)})}function D(I){I.state.matchBrackets&&I.state.matchBrackets.currentlyHighlighted&&(I.state.matchBrackets.currentlyHighlighted(),I.state.matchBrackets.currentlyHighlighted=null)}p.defineOption("matchBrackets",!1,function(I,ee,oe){oe&&oe!=p.Init&&(I.off("cursorActivity",j),I.off("focus",j),I.off("blur",D),D(I)),ee&&(I.state.matchBrackets=typeof ee=="object"?ee:{},I.on("cursorActivity",j),I.on("focus",j),I.on("blur",D))}),p.defineExtension("matchBrackets",function(){P(this,!0)}),p.defineExtension("findMatchingBracket",function(I,ee,oe){return(oe||typeof ee=="boolean")&&(oe?(oe.strict=ee,ee=oe):ee=ee?{strict:!0}:null),E(this,I,ee)}),p.defineExtension("scanForBracket",function(I,ee,oe,X){return _(this,I,ee,oe,X)})})})()),mf.exports}ox();var yf={exports:{}},vf;function sx(){return vf||(vf=1,(function(c,h){(function(p){p(ro())})(function(p){var v="CodeMirror-hint",x="CodeMirror-hint-active";p.showHint=function(M,W,q){if(!W)return M.showHint(q);q&&q.async&&(W.async=!0);var K={hint:W};if(q)for(var ie in q)K[ie]=q[ie];return M.showHint(K)},p.defineExtension("showHint",function(M){M=_(this,this.getCursor("start"),M);var W=this.listSelections();if(!(W.length>1)){if(this.somethingSelected()){if(!M.hint.supportsSelection)return;for(var q=0;q<W.length;q++)if(W[q].head.line!=W[q].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var K=this.state.completionActive=new w(this,M);K.options.hint&&(p.signal(this,"startCompletion",this),K.update(!0))}}),p.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function w(M,W){if(this.cm=M,this.options=W,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var q=this;M.on("cursorActivity",this.activityFunc=function(){q.cursorActivity()})}}var L=window.requestAnimationFrame||function(M){return setTimeout(M,1e3/60)},E=window.cancelAnimationFrame||clearTimeout;w.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&p.signal(this.data,"close"),this.widget&&this.widget.close(),p.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(M,W){var q=M.list[W],K=this;this.cm.operation(function(){q.hint?q.hint(K.cm,M,q):K.cm.replaceRange(P(q),q.from||M.from,q.to||M.to,"complete"),p.signal(M,"pick",q),K.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(E(this.debounce),this.debounce=0);var M=this.startPos;this.data&&(M=this.data.from);var W=this.cm.getCursor(),q=this.cm.getLine(W.line);if(W.line!=this.startPos.line||q.length-W.ch!=this.startLen-this.startPos.ch||W.ch<M.ch||this.cm.somethingSelected()||!W.ch||this.options.closeCharacters.test(q.charAt(W.ch-1)))this.close();else{var K=this;this.debounce=L(function(){K.update()}),this.widget&&this.widget.disable()}},update:function(M){if(this.tick!=null){var W=this,q=++this.tick;oe(this.options.hint,this.cm,this.options,function(K){W.tick==q&&W.finishUpdate(K,M)})}},finishUpdate:function(M,W){this.data&&p.signal(this.data,"update");var q=this.widget&&this.widget.picked||W&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=M,M&&M.list.length&&(q&&M.list.length==1?this.pick(M,0):(this.widget=new I(this,M),p.signal(M,"shown")))}};function _(M,W,q){var K=M.options.hintOptions,ie={};for(var pe in ue)ie[pe]=ue[pe];if(K)for(var pe in K)K[pe]!==void 0&&(ie[pe]=K[pe]);if(q)for(var pe in q)q[pe]!==void 0&&(ie[pe]=q[pe]);return ie.hint.resolve&&(ie.hint=ie.hint.resolve(M,W)),ie}function P(M){return typeof M=="string"?M:M.text}function j(M,W){var q={Up:function(){W.moveFocus(-1)},Down:function(){W.moveFocus(1)},PageUp:function(){W.moveFocus(-W.menuSize()+1,!0)},PageDown:function(){W.moveFocus(W.menuSize()-1,!0)},Home:function(){W.setFocus(0)},End:function(){W.setFocus(W.length-1)},Enter:W.pick,Tab:W.pick,Esc:W.close},K=/Mac/.test(navigator.platform);K&&(q["Ctrl-P"]=function(){W.moveFocus(-1)},q["Ctrl-N"]=function(){W.moveFocus(1)});var ie=M.options.customKeys,pe=ie?{}:q;function re(_e,$){var Te;typeof $!="string"?Te=function(ne){return $(ne,W)}:q.hasOwnProperty($)?Te=q[$]:Te=$,pe[_e]=Te}if(ie)for(var we in ie)ie.hasOwnProperty(we)&&re(we,ie[we]);var Fe=M.options.extraKeys;if(Fe)for(var we in Fe)Fe.hasOwnProperty(we)&&re(we,Fe[we]);return pe}function D(M,W){for(;W&&W!=M;){if(W.nodeName.toUpperCase()==="LI"&&W.parentNode==M)return W;W=W.parentNode}}function I(M,W){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=M,this.data=W,this.picked=!1;var q=this,K=M.cm,ie=K.getInputField().ownerDocument,pe=ie.defaultView||ie.parentWindow,re=this.hints=ie.createElement("ul");re.setAttribute("role","listbox"),re.setAttribute("aria-expanded","true"),re.id=this.id;var we=M.cm.options.theme;re.className="CodeMirror-hints "+we,this.selectedHint=W.selectedHint||0;for(var Fe=W.list,_e=0;_e<Fe.length;++_e){var $=re.appendChild(ie.createElement("li")),Te=Fe[_e],ne=v+(_e!=this.selectedHint?"":" "+x);Te.className!=null&&(ne=Te.className+" "+ne),$.className=ne,_e==this.selectedHint&&$.setAttribute("aria-selected","true"),$.id=this.id+"-"+_e,$.setAttribute("role","option"),Te.render?Te.render($,W,Te):$.appendChild(ie.createTextNode(Te.displayText||P(Te))),$.hintId=_e}var ye=M.options.container||ie.body,T=K.cursorCoords(M.options.alignWithWord?W.from:null),Q=T.left,B=T.bottom,C=!0,R=0,Y=0;if(ye!==ie.body){var H=["absolute","relative","fixed"].indexOf(pe.getComputedStyle(ye).position)!==-1,ae=H?ye:ye.offsetParent,De=ae.getBoundingClientRect(),Je=ie.body.getBoundingClientRect();R=De.left-Je.left-ae.scrollLeft,Y=De.top-Je.top-ae.scrollTop}re.style.left=Q-R+"px",re.style.top=B-Y+"px";var Ve=pe.innerWidth||Math.max(ie.body.offsetWidth,ie.documentElement.offsetWidth),ke=pe.innerHeight||Math.max(ie.body.offsetHeight,ie.documentElement.offsetHeight);ye.appendChild(re),K.getInputField().setAttribute("aria-autocomplete","list"),K.getInputField().setAttribute("aria-owns",this.id),K.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var Ie=M.options.moveOnOverlap?re.getBoundingClientRect():new DOMRect,He=M.options.paddingForScrollbar?re.scrollHeight>re.clientHeight+1:!1,Be;setTimeout(function(){Be=K.getScrollInfo()});var tt=Ie.bottom-ke;if(tt>0){var Ge=Ie.bottom-Ie.top,qt=Ie.top-(T.bottom-T.top)-2;ke-Ie.top<qt?(Ge>qt&&(re.style.height=(Ge=qt)+"px"),re.style.top=(B=T.top-Ge)-Y+"px",C=!1):re.style.height=ke-Ie.top-2+"px"}var Qt=Ie.right-Ve;if(He&&(Qt+=K.display.nativeBarWidth),Qt>0&&(Ie.right-Ie.left>Ve&&(re.style.width=Ve-5+"px",Qt-=Ie.right-Ie.left-Ve),re.style.left=(Q=Math.max(T.left-Qt-R,0))+"px"),He)for(var $t=re.firstChild;$t;$t=$t.nextSibling)$t.style.paddingRight=K.display.nativeBarWidth+"px";if(K.addKeyMap(this.keyMap=j(M,{moveFocus:function(bt,lt){q.changeActive(q.selectedHint+bt,lt)},setFocus:function(bt){q.changeActive(bt)},menuSize:function(){return q.screenAmount()},length:Fe.length,close:function(){M.close()},pick:function(){q.pick()},data:W})),M.options.closeOnUnfocus){var fn;K.on("blur",this.onBlur=function(){fn=setTimeout(function(){M.close()},100)}),K.on("focus",this.onFocus=function(){clearTimeout(fn)})}K.on("scroll",this.onScroll=function(){var bt=K.getScrollInfo(),lt=K.getWrapperElement().getBoundingClientRect();Be||(Be=K.getScrollInfo());var Zt=B+Be.top-bt.top,Ke=Zt-(pe.pageYOffset||(ie.documentElement||ie.body).scrollTop);if(C||(Ke+=re.offsetHeight),Ke<=lt.top||Ke>=lt.bottom)return M.close();re.style.top=Zt+"px",re.style.left=Q+Be.left-bt.left+"px"}),p.on(re,"dblclick",function(bt){var lt=D(re,bt.target||bt.srcElement);lt&&lt.hintId!=null&&(q.changeActive(lt.hintId),q.pick())}),p.on(re,"click",function(bt){var lt=D(re,bt.target||bt.srcElement);lt&&lt.hintId!=null&&(q.changeActive(lt.hintId),M.options.completeOnSingleClick&&q.pick())}),p.on(re,"mousedown",function(){setTimeout(function(){K.focus()},20)});var et=this.getSelectedHintRange();return(et.from!==0||et.to!==0)&&this.scrollToActive(),p.signal(W,"select",Fe[this.selectedHint],re.childNodes[this.selectedHint]),!0}I.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var M=this.completion.cm.getInputField();M.removeAttribute("aria-activedescendant"),M.removeAttribute("aria-owns");var W=this.completion.cm;this.completion.options.closeOnUnfocus&&(W.off("blur",this.onBlur),W.off("focus",this.onFocus)),W.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var M=this;this.keyMap={Enter:function(){M.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(M,W){if(M>=this.data.list.length?M=W?this.data.list.length-1:0:M<0&&(M=W?0:this.data.list.length-1),this.selectedHint!=M){var q=this.hints.childNodes[this.selectedHint];q&&(q.className=q.className.replace(" "+x,""),q.removeAttribute("aria-selected")),q=this.hints.childNodes[this.selectedHint=M],q.className+=" "+x,q.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",q.id),this.scrollToActive(),p.signal(this.data,"select",this.data.list[this.selectedHint],q)}},scrollToActive:function(){var M=this.getSelectedHintRange(),W=this.hints.childNodes[M.from],q=this.hints.childNodes[M.to],K=this.hints.firstChild;W.offsetTop<this.hints.scrollTop?this.hints.scrollTop=W.offsetTop-K.offsetTop:q.offsetTop+q.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=q.offsetTop+q.offsetHeight-this.hints.clientHeight+K.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var M=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-M),to:Math.min(this.data.list.length-1,this.selectedHint+M)}}};function ee(M,W){if(!M.somethingSelected())return W;for(var q=[],K=0;K<W.length;K++)W[K].supportsSelection&&q.push(W[K]);return q}function oe(M,W,q,K){if(M.async)M(W,K,q);else{var ie=M(W,q);ie&&ie.then?ie.then(K):K(ie)}}function X(M,W){var q=M.getHelpers(W,"hint"),K;if(q.length){var ie=function(pe,re,we){var Fe=ee(pe,q);function _e($){if($==Fe.length)return re(null);oe(Fe[$],pe,we,function(Te){Te&&Te.list.length>0?re(Te):_e($+1)})}_e(0)};return ie.async=!0,ie.supportsSelection=!0,ie}else return(K=M.getHelper(M.getCursor(),"hintWords"))?function(pe){return p.hint.fromList(pe,{words:K})}:p.hint.anyword?function(pe,re){return p.hint.anyword(pe,re)}:function(){}}p.registerHelper("hint","auto",{resolve:X}),p.registerHelper("hint","fromList",function(M,W){var q=M.getCursor(),K=M.getTokenAt(q),ie,pe=p.Pos(q.line,K.start),re=q;K.start<q.ch&&/\w/.test(K.string.charAt(q.ch-K.start-1))?ie=K.string.substr(0,q.ch-K.start):(ie="",pe=q);for(var we=[],Fe=0;Fe<W.words.length;Fe++){var _e=W.words[Fe];_e.slice(0,ie.length)==ie&&we.push(_e)}if(we.length)return{list:we,from:pe,to:re}}),p.commands.autocomplete=p.showHint;var ue={hint:p.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};p.defineOption("hintOptions",null)})})()),yf.exports}sx();var xf={exports:{}},bf;function ax(){return bf||(bf=1,(function(c,h){(function(p){p(ro())})(function(p){var v=/[\w$]+/,x=500;p.registerHelper("hint","anyword",function(w,L){for(var E=L&&L.word||v,_=L&&L.range||x,P=w.getCursor(),j=w.getLine(P.line),D=P.ch,I=D;I&&E.test(j.charAt(I-1));)--I;for(var ee=I!=D&&j.slice(I,D),oe=L&&L.list||[],X={},ue=new RegExp(E.source,"g"),M=-1;M<=1;M+=2)for(var W=P.line,q=Math.min(Math.max(W+M*_,w.firstLine()),w.lastLine())+M;W!=q;W+=M)for(var K=w.getLine(W),ie;ie=ue.exec(K);)W==P.line&&ie[0]===ee||(!ee||ie[0].lastIndexOf(ee,0)==0)&&!Object.prototype.hasOwnProperty.call(X,ie[0])&&(X[ie[0]]=!0,oe.push(ie[0]));return{list:oe,from:p.Pos(P.line,I),to:p.Pos(P.line,D)}})})})()),xf.exports}ax();function lx(c){return c==="python"?"python":c==="csharp"?"text/x-csharp":c==="java"?"text/x-java":c==="jsx"?{name:"javascript",jsx:!0}:c==="javascript"?"javascript":c==="html"?"htmlmixed":c==="css"?"css":"text/plain"}function ux({value:c,onChange:h,language:p}){const v=We.useRef(null),x=We.useRef(null),w=We.useRef(h);return w.current=h,We.useEffect(()=>{const L=Jh.fromTextArea(v.current,{mode:lx(p),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(_){if(_.somethingSelected())_.execCommand("indentMore");else{const P=_.getOption("indentUnit")-_.getCursor().ch%_.getOption("indentUnit");_.replaceSelection(" ".repeat(P),"end")}},"Shift-Tab":_=>_.execCommand("indentLess"),"Ctrl-Space":_=>_.showHint({hint:Jh.hint.anyword,completeSingle:!1})}});L.getInputField().setAttribute("aria-label","Code editor"),L.on("change",_=>{var P;return(P=w.current)==null?void 0:P.call(w,_.getValue())}),x.current=L;const E=typeof ResizeObserver<"u"?new ResizeObserver(()=>L.refresh()):null;return E==null||E.observe(L.getWrapperElement()),()=>{E==null||E.disconnect(),L.toTextArea(),x.current=null}},[p]),We.useEffect(()=>{const L=x.current;if(L&&L.getValue()!==c){const E=L.getCursor();L.setValue(c??""),L.setCursor(E)}},[c]),d.jsx("div",{className:"code-editor-wrap",children:d.jsx("textarea",{ref:v,"aria-label":"Code editor",defaultValue:c,spellCheck:!1})})}const wf={"react-components":{title:"Score Card",subtitle:"Player score",value:"18 points",action:"View details"},"react-state":{title:"Counter",subtitle:"Current count",value:"0",action:"Increase"},"web-layout":{title:"Responsive page",subtitle:"Welcome",value:"Your page content",action:"Explore"},"web-events":{title:"Form button",subtitle:"Contact form",value:"Ready",action:"Send"}};function cx({text:c,checksText:h,language:p,lessonId:v,activeTab:x,onTabChange:w}){const L=p==="jsx"?["Preview","Console","Checks"]:["Console","Checks"],E=wf[v]||wf["react-components"];return d.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[d.jsxs("div",{className:"console-heading",children:[d.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:L.map(_=>d.jsxs("button",{type:"button",role:"tab","aria-selected":x===_,className:x===_?"active":"",onClick:()=>w(_),children:[_==="Console"&&d.jsx(Yg,{size:14}),_]},_))}),d.jsx("span",{children:"Demo"})]}),x==="Preview"&&p==="jsx"?d.jsxs("div",{className:"console-preview",role:"tabpanel","aria-label":"Interface preview",children:[d.jsxs("div",{className:"console-preview-card",children:[d.jsx("small",{children:E.title}),d.jsx("strong",{children:E.value}),d.jsx("p",{children:E.subtitle}),d.jsx("span",{className:"console-preview-action",children:E.action})]}),d.jsx("p",{className:"console-preview-note",children:"Sample layout. Your code isn't rendered here yet."})]}):d.jsx("pre",{role:"tabpanel","aria-label":x==="Checks"?"Check feedback":"Console output",children:x==="Checks"?h:c})]})}function Tp(c,h,p){switch(c){case"Reset":return"Editor reset to sample starter code.";case"Submit":return"Local preview only: no assignment was submitted and no grade or points were awarded.";case"Run":return`Run preview: code is not executed here.

Your draft contains `+h.split(`
`).length+" lines.";default:return"Sample check: "+(h.trim().length>p.starter.trim().length?"You added content. This is not an automated correctness check.":"Starter code is unchanged. This is only a UI preview.")}}class dx{constructor({onStatus:h=()=>{},workerFactory:p=w=>new Worker(w),loadTimeout:v=6e4,runTimeout:x=6e3}={}){Object.assign(this,{onStatus:h,workerFactory:p,loadTimeout:v,runTimeout:x}),this.sequence=0,this.worker=null,this.loading=null,this.pending=null,this.closed=!1}init(){if(this.closed)return Promise.reject(Error("Python workspace closed."));if(this.loading)return this.loading;this.onStatus("Loading Python…"),this.loading=new Promise((p,v)=>{this.rejectLoad=v,this.loadTimer=setTimeout(()=>this.stop("Python could not load in time. Try again."),this.loadTimeout);try{this.worker=this.workerFactory(new URL("/playground/preview/python-worker.js",window.location.origin)),this.worker.onmessage=({data:x})=>{var w;if(x.type==="ready")clearTimeout(this.loadTimer),this.rejectLoad=null,this.onStatus("Python ready"),p();else if(x.type==="load-error")this.stop(x.message||"Python could not load.");else if(x.type==="result"&&x.id===((w=this.pending)==null?void 0:w.id)){const L=this.pending;clearTimeout(L.timer),this.pending=null,this.onStatus("Python ready"),L.resolve(x)}},this.worker.onerror=()=>this.stop("Python worker failed. Try again.")}catch(x){this.stop(x.message)}});const h=this.loading;return h.catch(()=>{this.loading===h&&(this.loading=null)}),h}async run(h){if(await this.init(),this.closed)throw Error("Python workspace closed.");if(this.pending)throw Error("Python is already running.");return this.onStatus("Running…"),new Promise((p,v)=>{const x=++this.sequence,w=setTimeout(()=>this.stop("Execution timed out after 6 seconds. Inspect your loops and retry."),this.runTimeout);this.pending={id:x,timer:w,resolve:p,reject:v},this.worker.postMessage({type:"run",id:x,code:h})})}stop(h="Python stopped."){var v,x;clearTimeout(this.loadTimer),(v=this.worker)==null||v.terminate(),this.worker=null;const p=this.pending;this.pending=null,p&&(clearTimeout(p.timer),p.reject(Error(h))),(x=this.rejectLoad)==null||x.call(this,Error(h)),this.rejectLoad=null,this.loading=null,this.onStatus(h)}dispose(){this.closed=!0,this.stop("Python workspace closed.")}}const Dp="PUBLIC_CHECK_RESULTS=";function px(c,h){const p=Array.isArray(c==null?void 0:c.cases)?c.cases:[],v=JSON.stringify(String(h)),x=JSON.stringify(JSON.stringify(p));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+v,"__cases = __json.loads("+x+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(c==null?void 0:c.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(c==null?void 0:c.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(c==null?void 0:c.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+Dp+'"+__json.dumps(__results))'].join(`
`)+`
`}function hx(c,h){const p=String(c||"").split(`
`).find(v=>v.startsWith(Dp));if(!p)return"Checks did not finish. Review the Console output and try again.";try{const v=JSON.parse(p.slice(Dp.length));if(!Array.isArray(v)||v.length!==h)throw Error("Incomplete check results");return[`${v.filter(w=>w.ok).length} of ${v.length} published examples matched.`,...v.map((w,L)=>w.ok?`✓ Example ${L+1}: matched`:`✗ Example ${L+1}: ${w.error||"Expected "+w.expected+"; received "+w.actual}`),"","These are practice checks only. No grade or points were recorded."].join(`
`)}catch{return"Checks returned an unexpected result. Please run the code again."}}function fx({lessonId:c,task:h}){const p=rm.code(c),v=We.useRef(null),x=We.useRef(null),[w,L]=We.useState(!1),E=!!(h.isPublished&&h.language==="python"),[_,P]=We.useState(h.starter),[j,D]=We.useState(h.console),[I,ee]=We.useState(""),[oe,X]=We.useState("Choose Check to review this draft. Results are for demonstration only."),[ue,M]=We.useState(h.language==="jsx"?"Preview":"Console"),[W,q]=hn("designlab:editor-height",300);We.useEffect(()=>{P(md(p)??h.starter),D(h.console),X("Choose Check to review this draft. Results are for demonstration only."),M(h.language==="jsx"?"Preview":"Console")},[p,h]),We.useEffect(()=>()=>{var re;(re=x.current)==null||re.dispose()},[]);async function K(re){var Fe;if(w)return;L(!0);const we=re==="Check";M(we?"Checks":"Console"),we?X("Checking published examples…"):D("Preparing Python…"),x.current||(x.current=new dx({onStatus:_e=>{we||D(_e)}}));try{const _e=we?px(h,_):_,$=await x.current.run(_e);we?X($.success?hx($.output,((Fe=h.cases)==null?void 0:Fe.length)||0):"Checks could not finish. Review your code and try again."):D($.output||($.success?"Program finished with no printed output.":"The program stopped without output."))}catch(_e){const $=String((_e==null?void 0:_e.message)||_e);we?X("Checks unavailable: "+$):D("Python unavailable: "+$)}finally{L(!1)}}function ie(re){if(!v.current)return;const we=v.current.getBoundingClientRect();q(Math.max(160,Math.min(we.height-120,re.clientY-we.top)))}function pe(re){if(!w){if(E&&(re==="Run"||re==="Check")){K(re);return}if(re==="Save"){gd(p,_),ee("Draft saved in this browser only.");return}if(re==="Reset"){P(h.starter),X("Choose Check to review this draft. Results are for demonstration only."),D(Tp("Reset",_,h)),M(h.language==="jsx"?"Preview":"Console");return}if(re==="Check"){X(Tp(re,_,h)),M("Checks");return}D(Tp(re,_,h)),M("Console")}}return d.jsxs("div",{className:"code-pane",children:[d.jsxs("div",{className:"pane-header",children:[d.jsxs("strong",{children:[d.jsx(bd,{size:16})," Editor"]}),d.jsxs("div",{className:"right-meta",children:[h.language.toUpperCase()," ",d.jsx(no,{children:E?"Practice":"Demo"})]})]}),d.jsxs("div",{className:"code-workspace",ref:v,style:{"--editor-height":`${W}px`},children:[d.jsx(ux,{value:_,language:h.language,onChange:re=>{P(re),ee(""),X("Your code has changed. Choose Check to review this draft.")}}),d.jsx(dd,{axis:"rows",onDrag:ie}),d.jsx(cx,{text:j,checksText:oe,language:h.language,lessonId:c,activeTab:ue,onTabChange:M})]}),d.jsxs("div",{className:"editor-controls",children:[d.jsx("div",{children:["Run","Check","Reset"].map(re=>d.jsx("button",{className:"btn",disabled:w,onClick:()=>pe(re),children:re},re))}),d.jsxs("div",{children:[d.jsxs("button",{className:"btn",disabled:w,onClick:()=>pe("Save"),children:[d.jsx(cd,{size:15})," Save"]}),d.jsxs("button",{className:"btn submit",disabled:w,onClick:()=>pe("Submit"),children:[d.jsx(qp,{size:15})," Submit"]})]})]}),d.jsx("div",{className:"editor-note",children:I||(E?"Run your Python code and check the published examples. No scores are recorded here.":"Drag the dividers to resize your workspace. Runs and checks are examples, not grades.")})]})}function mx({lessonId:c,onAnswerChecked:h}){const p=zf[c],[v,x]=We.useState(null),[w,L]=We.useState(!1);function E(){L(!0),h==null||h({selected:v,correct:v===p.correct})}function _(){x(null),L(!1),h==null||h(null)}return d.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[d.jsxs("div",{className:"tsi-practice-heading",children:[d.jsx(Rf,{size:20}),d.jsxs("div",{children:[d.jsx("h2",{children:"Try this question"}),d.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),d.jsxs("div",{className:"tsi-question-card",children:[d.jsx("div",{className:"eyebrow",children:"Question"}),d.jsx("h3",{children:p.prompt}),d.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:p.options.map((P,j)=>d.jsxs("label",{className:`tsi-choice ${v===j?"selected":""} ${w&&j===p.correct?"correct":""}`,children:[d.jsx("input",{type:"radio",name:`tsi-${c}`,checked:v===j,disabled:w,onChange:()=>x(j)}),d.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+j)}),d.jsx("span",{children:P})]},P))}),w&&d.jsx("p",{className:"tsi-answer-status",role:"status",children:v===p.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),d.jsxs("div",{className:"tsi-buttons",children:[d.jsx("button",{className:"btn primary",disabled:v===null||w,onClick:E,children:"Check answer"}),d.jsxs("button",{className:"btn",onClick:_,children:[d.jsx(Up,{size:15})," Try again"]})]})]})]})}function gx({lessonId:c,course:h,unit:p,unitNumber:v,isCompleted:x=!1,assignment:w=null,grade:L=null,onToggleCompleted:E}){const _=Zs(h,c),P=We.useRef(null),[j,D]=We.useState(null),[I,ee]=hn("designlab:left-width",420);function oe(ue){if(!P.current)return;const M=P.current.getBoundingClientRect();ee(Math.max(260,Math.min(M.width-340,ue.clientX-M.left)))}const X=h.id==="tsi-math";return _!=null&&_.ready?d.jsxs("div",{className:"lesson-screen",children:[d.jsx(Lh,{task:_,unit:p,unitNumber:v,isTsi:X,isCompleted:x,assignment:w,grade:L,onToggleCompleted:E}),d.jsxs("div",{className:`workspace-grid ${X?"tsi-workspace":""}`,ref:P,style:{"--left-pane":`${I}px`},children:[X?d.jsx(mx,{lessonId:c,onAnswerChecked:D}):d.jsx(Qh,{lessonId:c,task:_}),d.jsx(dd,{axis:"columns",onDrag:oe}),X?d.jsx(Qh,{lessonId:c,task:_,isTsi:!0,tsiAnswer:j}):d.jsx(fx,{lessonId:c,task:_})]})]}):d.jsxs("div",{className:"lesson-screen",children:[d.jsx(Lh,{task:_,unit:p,unitNumber:v,isTsi:X,isCompleted:x,assignment:w,grade:L,onToggleCompleted:E}),d.jsxs("section",{className:"lesson-content-pending surface-card",children:[d.jsx("h2",{children:"Lesson coming soon"}),d.jsx("p",{children:"The lesson materials are being prepared."})]})]})}function yx({courseId:c,lessonId:h,openCourse:p,openChallenges:v,completedLessons:x=[],assignments:w=[],grades:L=[],onToggleLessonComplete:E,courseColors:_={},onSetCourseColor:P,onResetCourseColor:j}){const D=ti(c)||Lo[0],I=ld(D),ee=D.units.findIndex(ue=>to(ue).includes(h)),oe=D.units[ee],X=I.indexOf(h);return d.jsx("div",{className:"course-layout integrated-course","data-course":D.id,children:d.jsxs("div",{className:"course-main",children:[d.jsxs("div",{className:"course-breadcrumb",children:[d.jsx("button",{onClick:()=>p(null),children:"All playgrounds"}),d.jsx($a,{size:14}),h?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>p(D.id),children:D.label}),d.jsx($a,{size:14}),d.jsx("span",{className:"breadcrumb-unit-name",title:oe?Eo(oe):"",children:oe?Eo(oe):""})]}):d.jsx("span",{children:D.label})]}),h?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"lesson-mobile-navigation",children:[d.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),d.jsx("select",{id:"lesson-select",value:h,onChange:ue=>p(D.id,ue.target.value),children:D.units.map((ue,M)=>d.jsx("optgroup",{label:`Unit ${M+1} · ${Eo(ue)}`,children:to(ue).map(W=>d.jsx("option",{value:W,children:Js(D,W)},W))},ue.id))})]}),d.jsx(gx,{lessonId:h,course:D,unit:oe,unitNumber:ee+1,isCompleted:x.includes(h),assignment:w.find(ue=>ue.id==="lesson:"+h),grade:L.find(ue=>ue.id==="lesson:"+h),onToggleCompleted:()=>E==null?void 0:E(h)},h),d.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[X>0&&d.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>p(D.id,I[X-1]),children:[d.jsx(Of,{size:16,"aria-hidden":"true"}),d.jsxs("span",{children:["Prev: ",Js(D,I[X-1])]})]}),X>=0&&X<I.length-1&&d.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>p(D.id,I[X+1]),children:[d.jsxs("span",{children:["Next: ",Js(D,I[X+1])]}),d.jsx($a,{size:16,"aria-hidden":"true"})]})]})]}):d.jsx(iy,{course:D,openCourse:p,openChallenges:v,completedLessons:x,assignments:w,grades:L,courseColors:_,onSetCourseColor:P,onResetCourseColor:j})]})})}const ps=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],am=c=>ps.find(h=>h.id===c),lm=c=>{var h;return(h=am(c))==null?void 0:h.period},vx=[...new Set(ps.map(c=>c.period))].sort((c,h)=>Number(c)-Number(h)),um=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Ul=c=>{var h,p;return((h=c.sheetName)==null?void 0:h.trim())||((p=c.studentName)==null?void 0:p.trim())||c.github},kf=c=>(c.sheetName||c.studentName||"").trim().split(/\s+/),cm=(c,h,p)=>{const v=x=>p==="github"?x.github.toLowerCase():p==="first"?(kf(x)[0]||x.github).toLowerCase():(kf(x).at(-1)||x.github).toLowerCase();return v(c).localeCompare(v(h),void 0,{numeric:!0})||c.github.localeCompare(h.github)},xx=[["last","Last name"],["first","First name"],["github","GitHub username"]];function bx({sectionId:c,onSectionChange:h,setupOpen:p,onToggleSetup:v}){return d.jsxs("div",{className:"teacher-toolbar",children:[d.jsxs("label",{children:["Class section",d.jsx("select",{value:c,onChange:x=>h(x.target.value),children:ps.map(x=>d.jsxs("option",{value:x.id,children:[x.name," · ",Wp(x.course)]},x.id))})]}),d.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":p,"aria-controls":"teacher-section-setup",onClick:v,children:[p?d.jsx(kd,{size:16}):d.jsx(Kp,{size:16}),p?"Close section setup":"Section setup"]})]})}const wx=[["overview","Class overview",Bp],["curriculum","Curriculum",ec],["journals","Journals",Hp]];function kx({tab:c,onChange:h}){return d.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:wx.map(([p,v,x])=>d.jsxs("button",{type:"button",role:"tab","aria-selected":c===p,className:c===p?"active":"",onClick:()=>h(p),children:[d.jsx(x,{size:16}),v]},p))})}function Sx({section:c}){return d.jsxs("div",{className:"section-banner",children:[d.jsxs("div",{children:[d.jsx("div",{className:"eyebrow",children:"Selected section"}),d.jsxs("h2",{children:[c.name," ",d.jsxs("span",{className:"muted",children:["· ",Wp(c.course)]})]})]}),d.jsx(no,{children:"Demo join code: LOCAL01"})]})}function _x({students:c}){const h=[[c.length,"Enrolled students"],[c.filter(p=>p.status==="Active now").length,"Recently interacting"],[c.filter(p=>p.sheetName).length,"Sheet names matched"]];return d.jsx("div",{className:"stat-grid",children:h.map(([p,v])=>d.jsxs("div",{className:"stat-card",children:[d.jsx("strong",{children:p}),d.jsx("span",{children:v})]},v))})}function Cx({students:c,week:h,setWeek:p}){const v=We.useMemo(()=>[...c].sort((x,w)=>(w.weekly[h]||0)-(x.weekly[h]||0)),[c,h]);return d.jsxs("section",{className:"panel",children:[d.jsxs("div",{className:"section-heading",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"Weekly points"}),d.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),d.jsxs("label",{children:["Week",d.jsx("select",{value:h,onChange:x=>p(x.target.value),children:um.map(x=>d.jsx("option",{value:x.key,children:x.label},x.key))})]})]}),d.jsx("div",{className:"overflow",children:d.jsxs("table",{className:"data-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Student"}),d.jsx("th",{children:"Weekly points"}),d.jsx("th",{children:"Sample assignments"})]})}),d.jsx("tbody",{children:v.map(x=>d.jsxs("tr",{children:[d.jsxs("th",{children:[Ul(x),d.jsxs("small",{children:["@",x.github]})]}),d.jsx("td",{children:d.jsx("strong",{children:x.weekly[h]||0})}),d.jsx("td",{children:x.assignments.filter(w=>w.score!==null).length})]},x.id))})]})})]})}function dm({label:c,value:h,onChange:p}){return d.jsxs("label",{children:[c,d.jsx("select",{value:h,onChange:v=>p(v.target.value),children:xx.map(([v,x])=>d.jsx("option",{value:v,children:x},v))})]})}const Tx=c=>c.includes("Completed")?"success":c==="Needs revision"?"warning":"";function Nx({student:c,week:h}){const[p,v]=We.useState(null),x=c.assignments,w=x.filter(E=>E.status==="Completed"||E.status==="Practice completed").length,L=x.filter(E=>E.score!==null).length;return d.jsxs("div",{className:"expanded-student",children:[d.jsxs("div",{className:"expanded-header",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"Assignment history"}),d.jsxs("p",{className:"muted",children:["Sample records for ",Ul(c),". No student data is loaded."]})]}),d.jsxs(no,{tone:"success",children:[c.weekly[h]||0," verified pts this week"]})]}),d.jsxs("div",{className:"mini-stats",children:[d.jsxs("span",{children:[d.jsx("strong",{children:w})," completed"]}),d.jsxs("span",{children:[d.jsx("strong",{children:L})," graded"]}),d.jsxs("span",{children:[d.jsx("strong",{children:x.length})," tracked"]})]}),d.jsx("div",{className:"overflow",children:d.jsxs("table",{className:"data-table assignment-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Assignment"}),d.jsx("th",{children:"Status"}),d.jsx("th",{children:"Score"}),d.jsx("th",{children:"Updated"}),d.jsx("th",{children:"Action"})]})}),d.jsx("tbody",{children:x.map(E=>{const _=p===E.id;return d.jsxs(We.Fragment,{children:[d.jsxs("tr",{children:[d.jsxs("th",{children:[E.name,d.jsx("small",{children:E.type})]}),d.jsx("td",{children:d.jsx(no,{tone:Tx(E.status),children:E.status})}),d.jsx("td",{children:E.score===null?"—":`${E.score} / ${E.possible}`}),d.jsx("td",{children:E.submitted}),d.jsx("td",{children:d.jsx("button",{className:"small-link",onClick:()=>v(_?null:E.id),children:_?"Hide details":"View details"})})]}),_&&d.jsx("tr",{className:"receipt-preview",children:d.jsxs("td",{colSpan:"5",children:[d.jsx("strong",{children:"Sample assignment detail"}),d.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},E.id)})})]})})]})}function Ex({students:c,week:h,sort:p,setSort:v,expanded:x,setExpanded:w}){return d.jsxs("section",{className:"panel",children:[d.jsxs("div",{className:"section-heading",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"Section roster & activity"}),d.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),d.jsx(dm,{label:"Sort students by",value:p,onChange:v})]}),d.jsx("div",{className:"overflow",children:d.jsxs("table",{className:"data-table roster-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Student"}),d.jsx("th",{children:"Activity signal"}),d.jsx("th",{children:"Current activity"}),d.jsx("th",{children:"Practice"}),d.jsx("th",{children:"Hand-ins"})]})}),d.jsx("tbody",{children:c.map(L=>{const E=x===L.id;return d.jsxs(We.Fragment,{children:[d.jsxs("tr",{className:E?"selected-row":"",children:[d.jsxs("th",{children:[d.jsxs("button",{className:"student-name-button","aria-expanded":E,onClick:()=>w(E?null:L.id),children:[E?d.jsx(If,{size:16}):d.jsx($a,{size:16})," ",Ul(L)]}),d.jsxs("small",{children:["@",L.github,L.sections.length>1?" · Sheet periods 1, 3":""]})]}),d.jsx("td",{children:d.jsx(no,{tone:L.status==="Active now"?"success":"",children:L.status})}),d.jsx("td",{children:L.current}),d.jsxs("td",{children:[L.assignments.filter(_=>_.status.includes("Completed")).length," complete"]}),d.jsx("td",{children:L.assignments.filter(_=>_.score!==null).length})]}),E&&d.jsx("tr",{className:"expansion-row",children:d.jsx("td",{colSpan:"5",children:d.jsx(Nx,{student:L,week:h})})})]},L.id)})})]})})]})}function Lx({section:c,students:h,week:p,setWeek:v,sort:x,setSort:w,expanded:L,setExpanded:E}){return d.jsxs(d.Fragment,{children:[d.jsx(Sx,{section:c}),d.jsx(_x,{students:h}),d.jsx(Cx,{students:h,week:p,setWeek:v}),d.jsx(Ex,{students:h,week:p,sort:x,setSort:w,expanded:L,setExpanded:E})]})}function pm(c,h){return c+"::"+h}function jx(c,h=[]){if(!(c!=null&&c.sectionId)||!c.lessonId)return"Choose a section and lesson.";if(c.sectionCourseId&&c.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(c.dueDate||""))return"Choose a valid due date.";const[p,v,x]=c.dueDate.split("-").map(Number);if(new Date(Date.UTC(p,v-1,x)).toISOString().slice(0,10)!==c.dueDate)return"Choose a valid due date.";const L=Number(c.points);if(!Number.isFinite(L)||!Number.isInteger(L)||L<0||L>1e3)return"Points must be a whole number between 0 and 1,000.";if(c.scope!=="section"&&c.scope!=="selected")return"Choose who receives the assignment.";if(c.scope==="selected"){const E=new Set(h.map(P=>P.id)),_=[...new Set(c.studentIds||[])];if(!_.length||_.some(P=>!E.has(P)))return"Select at least one student from this section."}return null}function Px(c,h=[]){const p=jx(c,h);if(p)throw new Error(p);return{id:pm(c.sectionId,c.lessonId),sectionId:c.sectionId,courseId:"computer-science-1",lessonId:c.lessonId,scope:c.scope,studentIds:c.scope==="selected"?[...new Set(c.studentIds)].sort():[],dueDate:c.dueDate,points:Number(c.points)}}function Ax(c,h){return[...(Array.isArray(c)?c:[]).filter(p=>p.id!==h.id),h]}function Np(c,h,p){return(c||[]).find(v=>v.id===pm(h,p))||null}const Rx="/playground/data/computer-science-1/course.json",Yu=ti("computer-science-1");function Ix({section:c,students:h=[],assignments:p=[],setAssignments:v}){const[x,w]=We.useState(null),[L,E]=We.useState("loading"),[_,P]=We.useState(Yu.lessons[0]),[j,D]=We.useState("section"),[I,ee]=We.useState([]),[oe,X]=We.useState(""),[ue,M]=We.useState(""),[W,q]=We.useState("starter"),[K,ie]=We.useState("");We.useEffect(()=>{const B=new AbortController;return fetch(Rx,{signal:B.signal,cache:"no-store"}).then(C=>{if(!C.ok)throw new Error("Curriculum unavailable");return C.json()}).then(C=>{if(!Array.isArray(C.lessons)||!C.lessons.length)throw new Error("Unexpected curriculum response");w(Nf(C)),E("live")}).catch(C=>{C.name!=="AbortError"&&E("snapshot")}),()=>B.abort()},[]);const pe=We.useMemo(()=>x?{...Yu,...x}:Yu,[x]),re=pe.lessons,we=re.includes(_)?_:re[0],Fe=Zs(pe,we),_e=re.reduce((B,C)=>{var R;return B+(Number((R=Zs(pe,C))==null?void 0:R.points)||0)},0),$=Yu.lessons.includes(we),Te=(c==null?void 0:c.course)==="computer-science-1",ne=Np(p,c==null?void 0:c.id,we),ye=h.filter(B=>B.sections.includes(c==null?void 0:c.id));We.useEffect(()=>{var C;const B=Np(p,c==null?void 0:c.id,we);D((B==null?void 0:B.scope)||"section"),ee((B==null?void 0:B.studentIds)||[]),X((B==null?void 0:B.dueDate)||""),M(String((B==null?void 0:B.points)??((C=Zs(pe,we))==null?void 0:C.points)??0)),ie(""),q("starter")},[we,c==null?void 0:c.id]);function T(B){B.preventDefault();try{const C=Px({sectionId:c==null?void 0:c.id,sectionCourseId:c==null?void 0:c.course,lessonId:we,scope:j,studentIds:I,dueDate:oe,points:ue},ye);v==null||v(R=>Ax(R,C)),ie("Preview assignment saved in this browser. No students were notified.")}catch(C){ie(C.message)}}function Q(){v==null||v(B=>(B||[]).filter(C=>C.id!==(ne==null?void 0:ne.id))),ie("Preview assignment cleared. Live student records were not changed.")}return d.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[d.jsxs("div",{className:"section-heading",children:[d.jsxs("div",{children:[d.jsxs("h2",{children:[d.jsx(ec,{size:18})," Computer Science I curriculum"]}),d.jsxs("p",{children:[pe.units.length," original units · ",re.length," lessons · ",_e," available lesson points"]})]}),d.jsx("span",{className:"curriculum-source",role:"status",children:L==="live"?"Published course • current":L==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),d.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),d.jsxs("div",{className:"curriculum-grid",children:[d.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:pe.units.map((B,C)=>d.jsxs("details",{open:to(B).includes(we)||C===0,children:[d.jsxs("summary",{children:["Unit ",Ju(B,C+1)," · ",Eo(B)]}),d.jsx("div",{children:to(B).map(R=>d.jsxs("button",{type:"button",className:R===we?"curriculum-lesson selected":"curriculum-lesson","aria-current":R===we?"true":void 0,onClick:()=>P(R),children:[Js(pe,R),Np(p,c==null?void 0:c.id,R)&&d.jsx("small",{children:" · Assigned in preview"})]},R))})]},B.id))}),d.jsxs("article",{className:"curriculum-lesson-preview",children:[d.jsx("div",{className:"eyebrow",children:"Published lesson"}),d.jsx("h3",{children:Fe.title}),d.jsx("p",{children:Fe.summary||Fe.challenge||"Practice the skills from this unit."}),d.jsxs("div",{className:"curriculum-meta",children:[d.jsxs("span",{children:[Fe.points??0," published points"]}),d.jsxs("span",{children:[Fe.mode==="function"?"Function":"Script"," · Python"]})]}),d.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[d.jsx("button",{type:"button",role:"tab","aria-selected":W==="starter",className:W==="starter"?"active":"",onClick:()=>q("starter"),children:"Starter code"}),d.jsxs("button",{type:"button",role:"tab","aria-selected":W==="solution",className:W==="solution"?"active":"",onClick:()=>q("solution"),children:[d.jsx(Eh,{size:14})," Solution"]})]}),W==="starter"?d.jsx("pre",{className:"curriculum-code",children:d.jsx("code",{children:Fe.starter||"# No starter code provided"})}):d.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[d.jsx(Eh,{size:20}),d.jsxs("div",{children:[d.jsx("strong",{children:"Teacher-only solutions"}),d.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),$?d.jsxs("a",{className:"btn",href:xd(Yu,we),children:["Open lesson in React preview ",d.jsx(Rg,{size:14})]}):d.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),d.jsxs("div",{className:"curriculum-assignment-editor",children:[d.jsx("h4",{children:"Assign lesson"}),Te?d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),d.jsxs("form",{onSubmit:T,className:"curriculum-assignment-form",children:[d.jsxs("label",{children:["Assign to",d.jsxs("select",{value:j,onChange:B=>D(B.target.value),children:[d.jsxs("option",{value:"section",children:["Whole class · ",ye.length," sample students"]}),d.jsx("option",{value:"selected",children:"Selected students"})]})]}),j==="selected"&&d.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[d.jsx("legend",{children:"Choose students"}),ye.length?ye.map(B=>d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:I.includes(B.id),onChange:C=>ee(R=>C.target.checked?[...R,B.id]:R.filter(Y=>Y!==B.id))}),d.jsx("span",{children:Ul(B)})]},B.id)):d.jsx("p",{children:"No sample students are enrolled in this section."})]}),d.jsxs("div",{className:"curriculum-assignment-fields",children:[d.jsxs("label",{children:["Due date",d.jsx("input",{type:"date",required:!0,value:oe,onChange:B=>X(B.target.value)})]}),d.jsxs("label",{children:["Points",d.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:ue,onChange:B=>M(B.target.value)})]})]}),d.jsxs("div",{className:"curriculum-assignment-actions",children:[d.jsx("button",{type:"submit",className:"btn primary",children:ne?"Update preview assignment":"Save preview assignment"}),ne&&d.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Remove assignment"})]})]}),ne&&d.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",ne.scope==="section"?"whole class":ne.studentIds.length+" selected students"," · ","Due ",ne.dueDate," · ",ne.points," points"]}),K&&d.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:K})]}):d.jsxs("p",{className:"curriculum-assignment-warning",children:[(c==null?void 0:c.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function Ox({students:c}){return d.jsxs("section",{className:"panel",children:[d.jsx("h2",{children:"Section setup"}),d.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),d.jsx("div",{className:"setup-grid",children:ps.map(h=>d.jsxs("div",{className:"setup-card",children:[d.jsx("div",{className:"eyebrow",children:h.name}),d.jsx("h3",{children:Wp(h.course)}),d.jsxs("span",{children:[c.filter(p=>p.sections.includes(h.id)).length," sample students"]})]},h.id))})]})}function Mx({section:c,students:h,submissions:p}){const[v,x]=We.useState(Lp()[0]),[w,L]=We.useState(null),E=Lp(),_=h.map(j=>{const D=p.filter(I=>I.studentId===j.id&&I.sectionId===c.id&&I.week===v);return{student:j,copies:D,latest:D.at(-1)}}),P=_.filter(j=>j.latest).length;return d.jsxs("section",{className:"panel journal-inbox",children:[d.jsxs("div",{className:"section-heading",children:[d.jsxs("div",{children:[d.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),d.jsxs("h2",{children:[d.jsx(Hp,{size:19})," Weekly journal submissions"]}),d.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),d.jsxs("label",{children:["Journal week ",d.jsx("select",{value:v,onChange:j=>{x(j.target.value),L(null)},children:E.map(j=>d.jsx("option",{value:j,children:Hl(j)},j))})]})]}),d.jsxs("div",{className:"stat-grid",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("strong",{children:P}),d.jsx("span",{children:"Submitted"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("strong",{children:_.length-P}),d.jsx("span",{children:"Missing"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("strong",{children:_.length}),d.jsx("span",{children:"Students in section"})]})]}),d.jsx("div",{className:"journal-inbox-rows",children:_.map(({student:j,latest:D,copies:I})=>d.jsxs("div",{className:"journal-inbox-row",children:[d.jsxs("div",{children:[d.jsxs("strong",{children:[j.first," ",j.last]}),d.jsxs("small",{children:["@",j.github]})]}),d.jsx("span",{className:`journal-status-pill ${D?"submitted":""}`,children:D?"Submitted":"Missing"}),d.jsx("span",{className:"journal-inbox-date",children:D?new Date(D.submittedAt).toLocaleString():"—"}),d.jsx("button",{className:"btn",disabled:!D,onClick:()=>L(w===j.id?null:j.id),children:w===j.id?"Close":"Review"}),w===j.id&&D&&d.jsxs("div",{className:"journal-review-detail",children:[d.jsxs("div",{className:"eyebrow",children:[D.type.replace("-"," ")," · ",I.length," ",I.length===1?"hand-in":"hand-ins"," · Manual review"]}),d.jsx("div",{className:"journal-history-answer",children:D.response}),d.jsxs("p",{className:"hint",children:["AI declaration: ",D.aiUse==="none"?"No AI reported":`Disclosed · ${D.aiDetails}`]})]})]},j.id))}),d.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function Dx({students:c,journalSubmissions:h}){const[p,v]=hn("designlab:teacher-tab","overview"),[x,w]=hn("designlab:section","p1"),[L,E]=hn("designlab:sort","last"),[_,P]=hn("designlab:week",um[0].key),[j,D]=We.useState(null),[I,ee]=We.useState(!1),[oe,X]=hn("designlab:teacher-preview-assignments",[]),ue=["overview","curriculum","journals"].includes(p)?p:"overview",M=am(x)||ps[0],W=We.useMemo(()=>c.filter(q=>q.sections.includes(x)).sort((q,K)=>cm(q,K,L)),[c,x,L]);return d.jsxs("div",{className:"main-content teacher-screen",children:[d.jsx(Gp,{eyebrow:"Your classroom · Frontend preview",actions:d.jsx(no,{children:ue==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),d.jsx("p",{className:"page-subtitle",children:ue==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),d.jsx(bx,{sectionId:M.id,onSectionChange:q=>{w(q),D(null)},setupOpen:I,onToggleSetup:()=>ee(q=>!q)}),I&&d.jsx("div",{id:"teacher-section-setup",children:d.jsx(Ox,{students:c})}),d.jsx(kx,{tab:ue,onChange:q=>{v(q),D(null)}}),ue==="curriculum"&&d.jsx(Ix,{section:M,students:W,assignments:oe,setAssignments:X}),ue==="overview"&&d.jsx(Lx,{section:M,students:W,week:_,setWeek:P,sort:L,setSort:E,expanded:j,setExpanded:D}),ue==="journals"&&d.jsx(Mx,{section:M,students:W,submissions:h})]})}function zx({children:c}){return d.jsx("div",{className:"empty",children:c})}function Fx({student:c,isEditing:h,onToggleEdit:p,onDone:v,onPatch:x}){const w=Ul(c);return d.jsxs("article",{className:"account-card",children:[d.jsxs("div",{className:"account-row",children:[d.jsx("span",{className:"avatar",children:w.slice(0,1).toUpperCase()}),d.jsxs("div",{className:"account-identity",children:[d.jsx("h3",{children:w}),d.jsxs("small",{children:["@",c.github]})]}),d.jsx("button",{className:"icon-button","aria-label":`Edit ${w}`,onClick:p,children:h?d.jsx(kd,{size:17}):d.jsx(Kp,{size:17})})]}),d.jsxs("div",{className:"account-footer",children:[d.jsx(no,{tone:c.sheetName?"success":"",children:c.sheetName?"Sheet matched":"Student name fallback"}),c.sections.map(L=>d.jsxs(no,{children:["Period ",lm(L)]},L))]}),h&&d.jsxs("div",{className:"account-edit",children:[d.jsxs("label",{children:["Google Sheet name",d.jsx("input",{value:c.sheetName||"",onChange:L=>x({sheetName:L.target.value||null})})]}),d.jsxs("label",{children:["Student-provided backup",d.jsx("input",{value:c.studentName||"",onChange:L=>x({studentName:L.target.value})})]}),d.jsx("button",{className:"btn",onClick:v,children:"Done"})]})]})}function Wx({students:c,sort:h,setSort:p,patchStudent:v}){const[x,w]=hn("designlab:period-filter","all"),[L,E]=We.useState(""),[_,P]=We.useState(null),j=We.useMemo(()=>{const D=L.toLowerCase();return c.filter(I=>(x==="all"||I.sections.some(ee=>lm(ee)===x))&&[Ul(I),I.github,I.studentName].some(ee=>ee.toLowerCase().includes(D))).sort((I,ee)=>cm(I,ee,h))},[c,x,h,L]);return d.jsxs("section",{className:"panel",children:[d.jsxs("div",{className:"section-heading",children:[d.jsxs("div",{children:[d.jsx("h2",{children:"Accounts"}),d.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),d.jsxs(no,{children:[j.length," accounts"]})]}),d.jsxs("div",{className:"filters",children:[d.jsxs("label",{children:[d.jsx(Mf,{size:16})," ",d.jsx("input",{"aria-label":"Search accounts",value:L,placeholder:"Search name or GitHub username",onChange:D=>E(D.target.value)})]}),d.jsxs("label",{children:["Class period",d.jsxs("select",{value:x,onChange:D=>w(D.target.value),children:[d.jsx("option",{value:"all",children:"All periods"}),vx.map(D=>d.jsx("option",{children:D},D))]})]}),d.jsx(dm,{label:"Sort",value:h,onChange:p})]}),d.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),d.jsx("div",{className:"account-grid",children:j.map(D=>d.jsx(Fx,{student:D,isEditing:_===D.id,onToggleEdit:()=>P(_===D.id?null:D.id),onDone:()=>P(null),onPatch:I=>v(D.id,I)},D.id))}),!j.length&&d.jsx(zx,{children:"No accounts match those filters."})]})}function Hx({students:c,setStudents:h}){const[p,v]=hn("designlab:admin-sort","last"),[x,w]=We.useState(""),L=(E,_)=>h(P=>P.map(j=>j.id===E?{...j,..._}:j));return d.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[d.jsx(Gp,{eyebrow:"Global management · Frontend preview",actions:d.jsx(no,{children:"Sample accounts only"}),children:"Admin dashboard"}),d.jsxs("p",{className:"page-subtitle",children:[d.jsx($p,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),d.jsxs("div",{className:"admin-actions",children:[d.jsxs("button",{type:"button",className:"btn",onClick:()=>{h(sd),w("Fictional account records restored.")},children:[d.jsx(Up,{size:15})," Reset sample accounts"]}),x&&d.jsx("small",{role:"status",children:x})]}),d.jsx(Wx,{students:c,sort:p,setSort:v,patchStudent:L})]})}const Bx={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Sf={response:"",type:"essay",aiUse:"",aiDetails:""};function Ux({submissions:c,setSubmissions:h}){var _e;const[p,v]=hn("designlab:journal-section",ps[0].id),x=ps.find($=>$.id===p)||ps[0],w=sd.filter($=>$.sections.includes(x.id)),[L,E]=hn("designlab:journal-student",sd[0].id),_=w.find($=>$.id===L)||w[0],P=We.useMemo(()=>Lp(),[]),[j,D]=hn("designlab:journal-week",P[0]),I=P.includes(j)?j:P[0],[ee,oe]=hn("designlab:journal-drafts",{}),[X,ue]=We.useState(""),[M,W]=We.useState(!1),q=Km(x.id,_.id,I),K=ee[q]||Sf,ie=c.filter($=>$.studentId===_.id&&$.sectionId===x.id&&$.week===I),pe=ie.at(-1),re=K.response.trim()?K.response.trim().split(/\s+/).length:0;function we($,Te){oe(ne=>({...ne,[q]:{...ne[q]||Sf,[$]:Te}})),ue("Draft saved in this browser.")}function Fe($){$.preventDefault();const Te=$m(K);if(Te){ue(Te);return}const ne={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:x.id,studentId:_.id,studentName:`${_.first} ${_.last}`,courseId:x.course,week:I,response:K.response.trim(),type:K.type,aiUse:K.aiUse,aiDetails:K.aiDetails.trim(),submittedAt:new Date().toISOString()};h(ye=>[...ye,ne]),ue("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return d.jsxs("div",{className:"main-content journal-screen",children:[d.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),d.jsxs("header",{className:"journal-heading",children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Weekly Journals"}),d.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),d.jsxs("span",{className:"chip",children:[d.jsx($p,{size:14})," Local demo only"]})]}),d.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[d.jsxs("label",{children:["Class section",d.jsx("select",{value:x.id,onChange:$=>{v($.target.value),ue("")},children:ps.map($=>{var Te;return d.jsxs("option",{value:$.id,children:[$.name," · ",(Te=ti($.course))==null?void 0:Te.label]},$.id)})})]}),d.jsxs("label",{children:["Preview as student",d.jsx("select",{value:_.id,onChange:$=>{E($.target.value),ue("")},children:w.map($=>d.jsxs("option",{value:$.id,children:[$.first," ",$.last," (sample)"]},$.id))})]}),d.jsxs("label",{children:["Journal week",d.jsx("select",{value:I,onChange:$=>{D($.target.value),ue("")},children:P.map($=>d.jsxs("option",{value:$,children:["Week of ",Hl($)]},$))})]})]}),d.jsxs("section",{className:"journal-card journal-editor-card",children:[d.jsxs("div",{className:"journal-section-heading",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"eyebrow",children:[(_e=ti(x.course))==null?void 0:_e.label," · ",x.name]}),d.jsxs("h2",{children:["Journal · Week of ",Hl(I)]})]}),d.jsx("span",{className:`journal-status-pill ${pe?"submitted":""}`,children:pe?"Submitted":"Not submitted"})]}),d.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),d.jsxs("form",{onSubmit:Fe,children:[d.jsxs("label",{children:["Response type",d.jsxs("select",{value:K.type,onChange:$=>we("type",$.target.value),children:[d.jsx("option",{value:"essay",children:"Essay or written reflection"}),d.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),d.jsxs("div",{className:"journal-prompt",children:[d.jsx("strong",{children:"Sample prompt"}),d.jsx("p",{children:Bx[K.type]})]}),d.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),d.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:K.response,onChange:$=>we("response",$.target.value)}),d.jsxs("div",{className:"journal-writing-meta",children:[d.jsxs("span",{children:[re," words"]}),d.jsxs("span",{children:[d.jsx(cd,{size:13})," Autosaved in this browser"]})]}),d.jsxs("div",{className:"journal-integrity",children:[d.jsxs("label",{children:["AI-use declaration",d.jsxs("select",{value:K.aiUse,onChange:$=>we("aiUse",$.target.value),children:[d.jsx("option",{value:"",children:"Choose one"}),d.jsx("option",{value:"none",children:"I did not use AI-generated content"}),d.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),d.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),K.aiUse==="disclosed"&&d.jsxs("label",{children:["Describe the AI assistance",d.jsx("textarea",{rows:"3",value:K.aiDetails,onChange:$=>we("aiDetails",$.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),d.jsxs("div",{className:"journal-actions",children:[d.jsxs("button",{type:"button",className:"btn",onClick:()=>{ue("Draft saved in this browser.")},children:[d.jsx(cd,{size:15})," Save draft"]}),d.jsxs("button",{type:"submit",className:"btn submit",children:[d.jsx(qp,{size:15})," Demo submit"]})]}),d.jsx("p",{role:"status",className:"journal-submit-status",children:X})]}),d.jsxs("div",{className:"journal-bottom-row",children:[d.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),d.jsxs("button",{type:"button",className:"btn",onClick:()=>W($=>!$),children:[d.jsx(zg,{size:15})," ",M?"Hide history":`Submission history (${ie.length})`]})]}),M&&d.jsx("div",{className:"journal-history",children:ie.length?ie.map($=>d.jsxs("details",{className:"journal-history-item",children:[d.jsxs("summary",{children:[d.jsx(Pp,{size:16})," Submitted ",new Date($.submittedAt).toLocaleString()," · ",$.type]}),d.jsx("div",{className:"journal-history-answer",children:$.response})]},$.id)):d.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const qx=`# Attendance Percentage

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
`,Kx=`# Competition Leaderboard Ranks

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
`,$x=`# Confidence Pool Total

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
`,Gx=`# Count Matching Events

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
`,Yx=`# Longest Winning Streak

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
`,Vx=`# Format a Score Line

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
`,Xx=`# Second Largest Distinct Value

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
`,Qx=`# Sum Positive Values

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
`,Zx=`# Count Pairs With Target Sum

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
`,Jx=`# Temperature Alert

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
`,e0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,t0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,n0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,r0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,i0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,o0=`public class Solution {
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
`,l0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,u0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,c0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,d0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,p0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,h0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,f0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,m0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,g0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,y0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,v0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,x0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,b0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,w0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,k0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,S0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,_0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,C0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,T0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,N0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,E0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,L0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,j0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,P0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,A0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,R0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,I0=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,O0=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,M0=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,D0=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,z0=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,F0=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,W0="attendance-percent",H0=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],B0={challengeId:W0,cases:H0},U0="competition-ranks",q0=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],K0={challengeId:U0,cases:q0},$0="confidence-total",G0=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],Y0={challengeId:$0,cases:G0},V0="count-matches",X0=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],Q0={challengeId:V0,cases:X0},Z0="longest-win-streak",J0=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],eb={challengeId:Z0,cases:J0},tb="score-line",nb=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],rb={challengeId:tb,cases:nb},ib="second-largest-distinct",ob=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],sb={challengeId:ib,cases:ob},ab="sum-positives",lb=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],ub={challengeId:ab,cases:lb},cb="target-pairs",db=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],pb={challengeId:cb,cases:db},hb="temperature-alert",fb=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],mb={challengeId:hb,cases:fb},gb=["python","java","javascript","csharp"],yb=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],hm={languages:gb,challenges:yb},vb=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":qx,"../challenge-bank/problems/competition-ranks/problem.md":Kx,"../challenge-bank/problems/confidence-total/problem.md":$x,"../challenge-bank/problems/count-matches/problem.md":Gx,"../challenge-bank/problems/longest-win-streak/problem.md":Yx,"../challenge-bank/problems/score-line/problem.md":Vx,"../challenge-bank/problems/second-largest-distinct/problem.md":Xx,"../challenge-bank/problems/sum-positives/problem.md":Qx,"../challenge-bank/problems/target-pairs/problem.md":Zx,"../challenge-bank/problems/temperature-alert/problem.md":Jx}),xb=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":e0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":t0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":n0,"../challenge-bank/problems/attendance-percent/starters/python.py":r0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":i0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":o0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":s0,"../challenge-bank/problems/competition-ranks/starters/python.py":a0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":l0,"../challenge-bank/problems/confidence-total/starters/Solution.java":u0,"../challenge-bank/problems/confidence-total/starters/javascript.js":c0,"../challenge-bank/problems/confidence-total/starters/python.py":d0,"../challenge-bank/problems/count-matches/starters/Solution.cs":p0,"../challenge-bank/problems/count-matches/starters/Solution.java":h0,"../challenge-bank/problems/count-matches/starters/javascript.js":f0,"../challenge-bank/problems/count-matches/starters/python.py":m0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":g0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":y0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":v0,"../challenge-bank/problems/longest-win-streak/starters/python.py":x0,"../challenge-bank/problems/score-line/starters/Solution.cs":b0,"../challenge-bank/problems/score-line/starters/Solution.java":w0,"../challenge-bank/problems/score-line/starters/javascript.js":k0,"../challenge-bank/problems/score-line/starters/python.py":S0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":_0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":C0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":T0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":N0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":E0,"../challenge-bank/problems/sum-positives/starters/Solution.java":L0,"../challenge-bank/problems/sum-positives/starters/javascript.js":j0,"../challenge-bank/problems/sum-positives/starters/python.py":P0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":A0,"../challenge-bank/problems/target-pairs/starters/Solution.java":R0,"../challenge-bank/problems/target-pairs/starters/javascript.js":I0,"../challenge-bank/problems/target-pairs/starters/python.py":O0,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":M0,"../challenge-bank/problems/temperature-alert/starters/Solution.java":D0,"../challenge-bank/problems/temperature-alert/starters/javascript.js":z0,"../challenge-bank/problems/temperature-alert/starters/python.py":F0}),bb=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":B0,"../challenge-bank/problems/competition-ranks/examples.json":K0,"../challenge-bank/problems/confidence-total/examples.json":Y0,"../challenge-bank/problems/count-matches/examples.json":Q0,"../challenge-bank/problems/longest-win-streak/examples.json":eb,"../challenge-bank/problems/score-line/examples.json":rb,"../challenge-bank/problems/second-largest-distinct/examples.json":sb,"../challenge-bank/problems/sum-positives/examples.json":ub,"../challenge-bank/problems/target-pairs/examples.json":pb,"../challenge-bank/problems/temperature-alert/examples.json":mb}),Cd=hm.challenges,zp=hm.languages,Xu={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},wb={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function fm(c){return Cd.find(h=>h.id===c)||null}function kb(c){return vb[`../challenge-bank/problems/${c}/problem.md`]??""}function Sb(c,h){return xb[`../challenge-bank/problems/${c}/starters/${wb[h]}`]??""}function _b(c){var h;return((h=bb[`../challenge-bank/problems/${c}/examples.json`])==null?void 0:h.cases)??[]}const Cb=[...new Set(Cd.flatMap(c=>c.tags))].sort((c,h)=>c.localeCompare(h)),Tb=["Very Easy","Easy","Medium","Hard"];function Nb({query:c="",topic:h="all",difficulty:p="all",course:v="all",language:x="all"}={}){const w=c.trim().toLocaleLowerCase();return Cd.filter(L=>(!w||[L.title,L.summary,...L.tags].join(" ").toLowerCase().includes(w))&&(h==="all"||L.tags.includes(h))&&(p==="all"||L.difficulty===p)&&(v==="all"||L.suggestedCourses.includes(v))&&(x==="all"||L.languages.includes(x))).slice().sort((L,E)=>L.title.localeCompare(E.title))}function _f(c,h){var w;const[p,...v]=c.split(":"),x=v.join(":");return p==="lesson"?Js(ti(h),x):((w=fm(x))==null?void 0:w.title)||x}function Eb({grades:c=[],assignments:h=Lf,completedLessons:p=[]}){const[v,x]=We.useState("all"),w=v==="all"?c:c.filter(D=>D.courseId===v),L=jp(w),E=fg(w),_=E[0],P=Lo.map(D=>({...D,...jp(c.filter(I=>I.courseId===D.id))})),j=h.filter(D=>v==="all"||D.courseId===v).map(D=>({...D,status:vd(D.id,{assignments:h,grades:c,completedLessons:p})})).filter(D=>D.status.state==="assigned"||D.status.state==="overdue").sort((D,I)=>D.dueDate.localeCompare(I.dueDate));return d.jsxs("div",{className:"main-content grades-screen",children:[d.jsxs("header",{className:"grades-heading",children:[d.jsxs("div",{children:[d.jsx("div",{className:"eyebrow",children:"Your progress"}),d.jsx("h1",{children:"Grades"}),d.jsx("p",{children:"See your earned points, weekly scores, and work still due."})]}),d.jsxs("label",{className:"grades-filter",children:["Course",d.jsxs("select",{value:v,onChange:D=>x(D.target.value),children:[d.jsx("option",{value:"all",children:"All courses"}),Lo.map(D=>d.jsx("option",{value:D.id,children:D.label},D.id))]})]})]}),d.jsx("p",{className:"grades-preview-note",children:"These are sample scores to help preview the page. Only graded work counts toward earned points."}),d.jsxs("div",{className:"grades-summary",children:[d.jsxs("div",{className:"grades-stat surface-card",children:[d.jsx(Lg,{size:19}),d.jsx("span",{children:"Points earned"}),d.jsxs("strong",{children:[L.earned," ",d.jsxs("small",{children:["/ ",L.possible]})]}),d.jsx("p",{children:L.percent===null?"No graded work yet":`${L.percent}% of graded points`})]}),d.jsxs("div",{className:"grades-stat surface-card",children:[d.jsx(Df,{size:19}),d.jsx("span",{children:"Graded activities"}),d.jsx("strong",{children:L.count}),d.jsx("p",{children:"Lessons and challenges"})]}),d.jsxs("div",{className:"grades-stat surface-card",children:[d.jsx(Eg,{size:19}),d.jsx("span",{children:"Most recent scored week"}),d.jsx("strong",{children:_?`${_.earned} / ${_.possible}`:"—"}),d.jsx("p",{children:_?`Week of ${Hl(_.week)}`:"No scores yet"})]})]}),d.jsxs("section",{className:"grades-panel surface-card",children:[d.jsx("h2",{children:"Weekly scores"}),E.length?d.jsx("div",{className:"grades-weeks",children:E.map(D=>d.jsxs("div",{className:"grades-week",children:[d.jsxs("div",{children:[d.jsxs("strong",{children:["Week of ",Hl(D.week)]}),d.jsxs("small",{children:[D.count," scored ",D.count===1?"activity":"activities"]})]}),d.jsxs("div",{className:"grades-week-score",children:[d.jsxs("strong",{children:[D.earned," / ",D.possible," pts"]}),d.jsx("progress",{value:D.earned,max:Math.max(D.possible,1),"aria-label":`Week of ${Hl(D.week)}: ${D.earned} of ${D.possible} points`})]})]},D.week))}):d.jsx("p",{children:"No graded work in this selection."})]}),v==="all"&&d.jsxs("section",{className:"grades-panel surface-card",children:[d.jsx("h2",{children:"By course"}),d.jsx("div",{className:"grades-course-list",children:P.map(D=>d.jsxs("div",{className:"grades-course-row","data-course":D.id,children:[d.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),d.jsx("strong",{children:D.label}),d.jsx("span",{children:D.count?`${D.earned} / ${D.possible} pts`:"No grades yet"})]},D.id))})]}),d.jsxs("section",{className:"grades-panel surface-card",children:[d.jsx("h2",{children:"Scored work"}),w.length?d.jsx("div",{className:"grades-entries",children:w.slice().sort((D,I)=>I.gradedAt.localeCompare(D.gradedAt)).map(D=>{var I;return d.jsxs("div",{className:"grades-entry",children:[d.jsxs("div",{children:[d.jsx("strong",{children:_f(D.id,D.courseId)}),d.jsxs("small",{children:[d.jsx(ec,{size:13}),((I=ti(D.courseId))==null?void 0:I.label)||D.courseId," · ",ud(D.gradedAt)]})]}),d.jsxs("strong",{children:[D.earned," / ",D.possible," pts"]})]},D.id)})}):d.jsx("p",{children:"No scored lessons or challenges yet."})]}),d.jsxs("section",{className:"grades-panel surface-card",children:[d.jsx("h2",{children:"Still to complete"}),j.length?d.jsx("div",{className:"grades-entries",children:j.map(D=>{var I;return d.jsxs("div",{className:"grades-entry",children:[d.jsxs("div",{children:[d.jsx("strong",{children:_f(D.id,D.courseId)}),d.jsx("small",{children:((I=ti(D.courseId))==null?void 0:I.label)||D.courseId})]}),d.jsxs("div",{className:"grades-due-meta",children:[d.jsx("span",{className:`assignment-status ${D.status.state}`,children:D.status.state==="overdue"?"Overdue":"Assigned"}),d.jsxs("small",{children:["Due ",ud(D.dueDate)]})]})]},D.id)})}):d.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Lb({filterCourse:c,onSelect:h,onBrowseCourse:p,grades:v=[]}){const[x,w]=We.useState(""),[L,E]=We.useState("all"),[_,P]=We.useState("all"),[j,D]=We.useState("all"),I=c||"all",ee=We.useMemo(()=>Nb({query:x,difficulty:L,topic:_,language:j,course:I}),[x,L,_,j,I]),oe=()=>{w(""),E("all"),P("all"),D("all"),p(null)};return d.jsxs("div",{className:"main-content challenge-bank-screen",children:[d.jsxs("header",{className:"challenge-bank-intro",children:[d.jsxs("div",{className:"eyebrow",children:[d.jsx(wd,{size:15})," Shared programming practice"]}),d.jsx("h1",{children:"Challenge Bank"}),d.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),d.jsxs("div",{className:"challenge-summary",children:[d.jsx("strong",{children:Cd.length})," original challenges · ",d.jsx("strong",{children:"4"})," languages · ",d.jsx("strong",{children:"1"})," shared library"]})]}),d.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[d.jsxs("div",{className:"filter-title",children:[d.jsx(Og,{size:17}),d.jsx("strong",{children:"Find a challenge"}),d.jsxs("button",{type:"button",className:"filter-clear",onClick:oe,children:[d.jsx(kd,{size:14})," Clear filters"]})]}),d.jsxs("div",{className:"challenge-filter-grid",children:[d.jsxs("label",{className:"challenge-search-label",children:["Search",d.jsxs("span",{className:"challenge-search",children:[d.jsx(Mf,{size:16}),d.jsx("input",{type:"search",value:x,placeholder:"Problem, skill, or topic",onChange:X=>w(X.target.value)})]})]}),d.jsxs("label",{children:["Course view",d.jsxs("select",{value:I,onChange:X=>p(X.target.value==="all"?null:X.target.value),children:[d.jsx("option",{value:"all",children:"All courses"}),Lo.filter(X=>X.id!=="tsi-math").map(X=>d.jsx("option",{value:X.id,children:X.label},X.id))]})]}),d.jsxs("label",{children:["Difficulty",d.jsxs("select",{value:L,onChange:X=>E(X.target.value),children:[d.jsx("option",{value:"all",children:"Any difficulty"}),Tb.map(X=>d.jsx("option",{value:X,children:X},X))]})]}),d.jsxs("label",{children:["Topic",d.jsxs("select",{value:_,onChange:X=>P(X.target.value),children:[d.jsx("option",{value:"all",children:"Any topic"}),Cb.map(X=>d.jsx("option",{value:X,children:X},X))]})]}),d.jsxs("label",{children:["Language",d.jsxs("select",{value:j,onChange:X=>D(X.target.value),children:[d.jsx("option",{value:"all",children:"Any language"}),zp.map(X=>d.jsx("option",{value:X,children:Xu[X]},X))]})]})]}),d.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),d.jsxs("div",{className:"challenge-results-heading",children:[d.jsxs("h2",{children:["Available challenges ",d.jsxs("span",{children:["(",ee.length,")"]})]}),d.jsx("span",{children:"Alphabetical order"})]}),ee.length?d.jsx("div",{className:"challenge-card-grid",children:ee.map(X=>d.jsxs("a",{className:"challenge-card surface-card",href:jf(X.id),onClick:ue=>{ue.button!==0||ue.metaKey||ue.ctrlKey||ue.shiftKey||ue.altKey||(ue.preventDefault(),h(X.id))},children:[d.jsxs("div",{className:"challenge-card-top",children:[d.jsx("span",{className:"challenge-level level-"+X.difficulty.toLowerCase().replace(" ","-"),children:X.difficulty}),d.jsx("span",{className:"challenge-points",children:Qu("challenge:"+X.id,v)?`${Qu("challenge:"+X.id,v).earned} / ${Qu("challenge:"+X.id,v).possible} pts earned`:`${X.points} pts available`})]}),d.jsx("h3",{children:X.title}),d.jsx("p",{children:X.summary}),d.jsx("div",{className:"challenge-tags",children:X.tags.map(ue=>d.jsx("span",{children:ue},ue))}),d.jsxs("div",{className:"challenge-course-tags",children:[X.suggestedCourses.slice(0,3).map(ue=>{var M,W;return d.jsx("span",{title:(M=ti(ue))==null?void 0:M.label,children:((W=ti(ue))==null?void 0:W.short)||ue},ue)}),X.suggestedCourses.length>3&&d.jsxs("span",{children:["+",X.suggestedCourses.length-3]})]}),d.jsxs("span",{className:"challenge-open",children:["Open challenge ",d.jsx(Af,{size:16})]})]},X.id))}):d.jsxs("div",{className:"challenge-empty surface-card",children:[d.jsx("h3",{children:"No matching challenges"}),d.jsx("p",{children:"Try a broader topic or clear the filters."}),d.jsx("button",{className:"btn",onClick:oe,children:"Show all challenges"})]}),d.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const jb=(c,h)=>"designlab:challenge-code:"+c+":"+h;function Pb({challengeId:c,onBack:h,grades:p=[]}){const v=fm(c),x=Qu("challenge:"+c,p),[w,L]=hn("designlab:challenge-language","python"),E=zp.includes(w)?w:"python",_=jb(c,E),P=Sb(c,E),[j,D]=We.useState(()=>md(_)??P),[I,ee]=We.useState("Run and Check are simulations. This preview does not execute code."),[oe,X]=We.useState(""),[ue,M]=We.useState("Choose Check to review the published examples."),[W,q]=We.useState("Console"),[K,ie]=hn("designlab:challenge-attempts",[]),[pe,re]=hn("designlab:challenge-left-width",420),[we,Fe]=hn("designlab:challenge-editor-height",330),_e=We.useRef(null),$=We.useRef(null),Te=_b(c),ne=K.filter(C=>C.challengeId===c);We.useEffect(()=>{D(md(_)??P),ee("Run / Check are design-only controls—no program is executed."),X(""),M("Choose Check to review the published examples."),q("Console")},[_,P]);const ye=C=>{D(C),gd(_,C),X("Draft saved in this browser for "+Xu[E]+".")},T=C=>{if(C==="Reset"){ye(P),ee("Starter restored; nothing was executed."),M("Choose Check to review the published examples."),q("Console");return}if(C==="Save"){gd(_,j),X("Draft saved in this browser.");return}if(C==="Submit"){ie(Y=>[...Y,{id:"demo-"+Date.now()+"-"+Math.random().toString(36).slice(2),challengeId:c,language:E,code:j,submittedAt:new Date().toISOString()}]),X("Demo hand-in recorded locally. No code was graded or delivered to a teacher.");return}const R=Te.map((Y,H)=>"Example "+(H+1)+": input "+JSON.stringify(Y.input)+" → expected "+JSON.stringify(Y.expected)).join(`
`);C==="Check"?(M(`Published examples (not checked against your code):

`+R),q("Checks")):(ee(`Expected sample outputs (your code has not run):

`+R),q("Console"))},Q=C=>{if(!_e.current)return;const R=_e.current.getBoundingClientRect();re(Math.max(280,Math.min(R.width-360,C.clientX-R.left)))},B=C=>{if(!$.current)return;const R=$.current.getBoundingClientRect();Fe(Math.max(180,Math.min(R.height-130,C.clientY-R.top)))};return v?d.jsxs("div",{className:"challenge-detail-page",children:[d.jsxs("div",{className:"challenge-breadcrumb",children:[d.jsxs("button",{onClick:h,children:[d.jsx(Tg,{size:16})," Challenge Bank"]}),d.jsx("span",{children:"/"}),d.jsx("span",{children:v.title})]}),d.jsxs("header",{className:"challenge-detail-heading surface-card",children:[d.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",v.difficulty," · ",v.points," possible points"]}),d.jsx("h1",{children:v.title}),d.jsx("p",{children:v.summary}),x&&d.jsxs("div",{className:"challenge-earned-points",children:["Completed · ",x.earned," / ",x.possible," points earned"]}),d.jsxs("div",{className:"challenge-prerequisites",children:[d.jsx("strong",{children:"Prerequisites:"}),v.prerequisites.map(C=>d.jsx("span",{children:C},C))]})]}),d.jsxs("div",{className:"challenge-workspace",ref:_e,style:{"--challenge-left":pe+"px"},children:[d.jsxs("section",{className:"challenge-instructions",children:[d.jsxs("div",{className:"pane-header",children:[d.jsxs("strong",{children:[d.jsx(Ng,{size:16})," Problem & examples"]}),d.jsxs("span",{className:"challenge-points",children:[v.points," pts"]})]}),d.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:nm(kb(c))}})]}),d.jsx(dd,{axis:"columns",onDrag:Q}),d.jsxs("section",{className:"challenge-editor-panel",children:[d.jsxs("div",{className:"pane-header",children:[d.jsxs("strong",{children:[d.jsx(bd,{size:16})," Solution editor"]}),d.jsxs("label",{className:"challenge-language-selector",children:["Language ",d.jsx("select",{"aria-label":"Solution language",value:E,onChange:C=>L(C.target.value),children:zp.map(C=>d.jsx("option",{value:C,children:Xu[C]},C))})]})]}),d.jsxs("div",{className:"challenge-code-layout",ref:$,style:{"--challenge-editor-height":we+"px"},children:[d.jsx("textarea",{className:"code-editor challenge-editor",spellCheck:!1,"aria-label":Xu[E]+" solution editor",value:j,onChange:C=>ye(C.target.value)}),d.jsx(dd,{axis:"rows",onDrag:B}),d.jsxs("div",{className:"console-pane",children:[d.jsxs("div",{className:"console-heading",children:[d.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Challenge results",children:["Console","Checks"].map(C=>d.jsxs("button",{type:"button",role:"tab","aria-selected":W===C,className:W===C?"active":"",onClick:()=>q(C),children:[C==="Console"&&d.jsx($g,{size:14})," ",C]},C))}),d.jsx("span",{children:"Demo"})]}),d.jsx("pre",{role:"tabpanel","aria-label":W==="Checks"?"Checks":"Console output",children:W==="Checks"?ue:I})]})]}),d.jsxs("div",{className:"editor-controls challenge-controls",children:[d.jsxs("div",{children:[d.jsx("button",{className:"btn",onClick:()=>T("Run"),children:"Run"}),d.jsxs("button",{className:"btn",onClick:()=>T("Check"),children:[d.jsx(jg,{size:15})," Check"]}),d.jsxs("button",{className:"btn",onClick:()=>T("Reset"),children:[d.jsx(Up,{size:15})," Reset"]})]}),d.jsxs("div",{children:[d.jsxs("button",{className:"btn",onClick:()=>T("Save"),children:[d.jsx(cd,{size:15})," Save"]}),d.jsxs("button",{className:"btn submit",onClick:()=>T("Submit"),children:[d.jsx(qp,{size:15})," Demo submit"]})]})]}),d.jsx("p",{className:"challenge-editor-message",role:"status",children:oe||"Drag the dividers to resize your workspace. Each language keeps its own draft."})]})]}),ne.length>0&&d.jsxs("section",{className:"challenge-history surface-card",children:[d.jsxs("h2",{children:["Demo hand-ins (",ne.length,")"]}),d.jsx("p",{children:"These are saved only in your browser, not real grades."}),ne.slice().reverse().map(C=>d.jsxs("details",{children:[d.jsxs("summary",{children:[Xu[C.language]," · ",new Date(C.submittedAt).toLocaleString()]}),d.jsx("pre",{children:C.code})]},C.id))]})]}):d.jsxs("div",{className:"main-content",children:[d.jsx("h1",{children:"Challenge not found"}),d.jsx("button",{className:"btn",onClick:h,children:"Back to bank"})]})}function Ab(){const[c,h]=We.useState(()=>gp()),[p,v]=hn("designlab:course","computer-science-1"),[x,w]=hn("designlab:theme","dark"),[L,E]=hn("designlab:course-colors",{}),[_,P]=hn("designlab:sidebar",!0),[j,D]=hn("designlab:completed-lessons",[]),[I]=hn("designlab:sample-gradebook",gg),ee=I.filter($=>$.courseId!=="computer-science-1"),oe=Lf.filter($=>$.courseId!=="computer-science-1"),X=mg(j,ee),[ue,M]=hn("designlab:students",sd),[W,q]=hn("designlab:journal-submissions",Gm);We.useEffect(()=>{document.documentElement.dataset.theme=x},[x]),We.useEffect(()=>{lg(L,Lo)},[L]);function K($,Te){!Lo.some(ne=>ne.id===$)||!yd(Te)||E(ne=>({...ne&&typeof ne=="object"?ne:{},[$]:Te.toUpperCase()}))}function ie($){E(Te=>{const ne={...Te&&typeof Te=="object"?Te:{}};return delete ne[$],ne})}We.useEffect(()=>{var Te;c.page==="course"&&v(c.courseId);const $=c.page==="course"?(Te=ti(c.courseId))==null?void 0:Te.label:c.page==="admin"?"Admin dashboard":c.page==="teacher"?"Teacher dashboard":c.page==="grades"?"Grades":c.page==="journals"?"Weekly journals":c.page==="challenges"?"Challenge Bank":c.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${$||"Playground"} | Ms. Whitby's Playground — React Lab`},[c.page,c.courseId,v]),We.useEffect(()=>{const $=()=>h(gp());return window.addEventListener("popstate",$),()=>window.removeEventListener("popstate",$)},[]);const pe=We.useCallback($=>{window.location.pathname!==$&&window.history.pushState({},"",$),h(gp()),window.scrollTo({top:0,behavior:"auto"})},[]);function re($,Te){if(!$)return pe(Vu());v($),pe(xd($,Te))}function we($){$==="teacher"?pe(Nh()):$==="admin"?pe(bg()):$==="journals"?pe(wg()):$==="grades"?pe(kg()):$==="challenges"?pe(Fl()):$==="course"?re(c.page==="course"?c.courseId:p):pe(Vu())}const Fe=c.page,_e=c.courseId||p;return d.jsxs("div",{className:"app-shell",children:[d.jsx(Xg,{sidebarOpen:_,onToggleSidebar:()=>P(!_),onHome:()=>pe(Vu()),theme:x,setTheme:w}),d.jsxs("div",{className:us("app-layout",!_&&"sidebar-closed"),children:[d.jsx(Zg,{open:_,page:Fe,courseId:_e,lessonId:c.page==="course"?c.lessonId:null,setPage:we,openCourse:re,completedLessons:X,assignments:oe,grades:ee}),d.jsx("main",{className:"main-panel",children:Fe==="home"?d.jsx(ry,{completedLessons:X,openCourse:re,openTeacher:()=>pe(Nh()),openChallenges:()=>pe(Fl())}):Fe==="course"?d.jsx(yx,{courseId:c.courseId,lessonId:c.lessonId,openCourse:re,openChallenges:$=>pe(Fl($)),completedLessons:X,assignments:oe,grades:ee,onToggleLessonComplete:$=>D(Te=>cg(Te,$)),courseColors:L,onSetCourseColor:K,onResetCourseColor:ie},c.courseId):Fe==="grades"?d.jsx(Eb,{grades:ee,assignments:oe,completedLessons:X}):Fe==="challenges"?d.jsx(Lb,{grades:ee,filterCourse:c.filterCourse,onSelect:$=>pe(jf($)),onBrowseCourse:$=>pe(Fl($))}):Fe==="challenge"?d.jsx(Pb,{challengeId:c.challengeId,grades:ee,onBack:()=>pe(Fl())},c.challengeId):Fe==="journals"?d.jsx(Ux,{submissions:W,setSubmissions:q}):Fe==="teacher"?d.jsx(Dx,{students:ue,journalSubmissions:W}):Fe==="admin"?d.jsx(Hx,{students:ue,setStudents:M}):d.jsxs("div",{className:"main-content route-not-found",children:[d.jsx("div",{className:"eyebrow",children:"Link not found"}),d.jsx("h1",{children:"That playground page doesn't exist."}),d.jsx("p",{children:"Check the link or return to the list of playgrounds."}),d.jsx("button",{className:"btn primary",onClick:()=>pe(Vu()),children:"See all playgrounds"})]})})]}),d.jsx(Jg,{})]})}Bm.createRoot(document.getElementById("root")).render(d.jsx(Mm.StrictMode,{children:d.jsx(Ab,{})}));
