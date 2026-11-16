var hg=Object.defineProperty;var fg=(l,c,p)=>c in l?hg(l,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[c]=p;var on=(l,c,p)=>fg(l,typeof c!="symbol"?c+"":c,p);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const k of b.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&g(k)}).observe(document,{childList:!0,subtree:!0});function p(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(y){if(y.ep)return;y.ep=!0;const b=p(y);fetch(y.href,b)}})();function Zf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ep={exports:{}},Yu={},Lp={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function mg(){if(Uh)return Pt;Uh=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),k=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),F=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=F&&O[F]||O["@@iterator"],typeof O=="function"?O:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,Y={};function J(O,Z,Se){this.props=O,this.context=Z,this.refs=Y,this.updater=Se||X}J.prototype.isReactComponent={},J.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},J.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function M(){}M.prototype=J.prototype;function W(O,Z,Se){this.props=O,this.context=Z,this.refs=Y,this.updater=Se||X}var B=W.prototype=new M;B.constructor=W,D(B,J.prototype),B.isPureReactComponent=!0;var H=Array.isArray,V=Object.prototype.hasOwnProperty,ce={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function ve(O,Z,Se){var Ie,qe={},Oe=null,ke=null;if(Z!=null)for(Ie in Z.ref!==void 0&&(ke=Z.ref),Z.key!==void 0&&(Oe=""+Z.key),Z)V.call(Z,Ie)&&!le.hasOwnProperty(Ie)&&(qe[Ie]=Z[Ie]);var Be=arguments.length-2;if(Be===1)qe.children=Se;else if(1<Be){for(var Ke=Array(Be),et=0;et<Be;et++)Ke[et]=arguments[et+2];qe.children=Ke}if(O&&O.defaultProps)for(Ie in Be=O.defaultProps,Be)qe[Ie]===void 0&&(qe[Ie]=Be[Ie]);return{$$typeof:l,type:O,key:Oe,ref:ke,props:qe,_owner:ce.current}}function Fe(O,Z){return{$$typeof:l,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function Te(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function ae(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return Z[Se]})}var Ce=/\/+/g;function oe(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?ae(""+O.key):Z.toString(36)}function ye(O,Z,Se,Ie,qe){var Oe=typeof O;(Oe==="undefined"||Oe==="boolean")&&(O=null);var ke=!1;if(O===null)ke=!0;else switch(Oe){case"string":case"number":ke=!0;break;case"object":switch(O.$$typeof){case l:case c:ke=!0}}if(ke)return ke=O,qe=qe(ke),O=Ie===""?"."+oe(ke,0):Ie,H(qe)?(Se="",O!=null&&(Se=O.replace(Ce,"$&/")+"/"),ye(qe,Z,Se,"",function(et){return et})):qe!=null&&(Te(qe)&&(qe=Fe(qe,Se+(!qe.key||ke&&ke.key===qe.key?"":(""+qe.key).replace(Ce,"$&/")+"/")+O)),Z.push(qe)),1;if(ke=0,Ie=Ie===""?".":Ie+":",H(O))for(var Be=0;Be<O.length;Be++){Oe=O[Be];var Ke=Ie+oe(Oe,Be);ke+=ye(Oe,Z,Se,Ke,qe)}else if(Ke=A(O),typeof Ke=="function")for(O=Ke.call(O),Be=0;!(Oe=O.next()).done;)Oe=Oe.value,Ke=Ie+oe(Oe,Be++),ke+=ye(Oe,Z,Se,Ke,qe);else if(Oe==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ke}function L(O,Z,Se){if(O==null)return O;var Ie=[],qe=0;return ye(O,Ie,"","",function(Oe){return Z.call(Se,Oe,qe++)}),Ie}function Q(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var K={current:null},R={transition:null},E={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:R,ReactCurrentOwner:ce};function $(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:L,forEach:function(O,Z,Se){L(O,function(){Z.apply(this,arguments)},Se)},count:function(O){var Z=0;return L(O,function(){Z++}),Z},toArray:function(O){return L(O,function(Z){return Z})||[]},only:function(O){if(!Te(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pt.Component=J,Pt.Fragment=p,Pt.Profiler=y,Pt.PureComponent=W,Pt.StrictMode=g,Pt.Suspense=S,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,Pt.act=$,Pt.cloneElement=function(O,Z,Se){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=D({},O.props),qe=O.key,Oe=O.ref,ke=O._owner;if(Z!=null){if(Z.ref!==void 0&&(Oe=Z.ref,ke=ce.current),Z.key!==void 0&&(qe=""+Z.key),O.type&&O.type.defaultProps)var Be=O.type.defaultProps;for(Ke in Z)V.call(Z,Ke)&&!le.hasOwnProperty(Ke)&&(Ie[Ke]=Z[Ke]===void 0&&Be!==void 0?Be[Ke]:Z[Ke])}var Ke=arguments.length-2;if(Ke===1)Ie.children=Se;else if(1<Ke){Be=Array(Ke);for(var et=0;et<Ke;et++)Be[et]=arguments[et+2];Ie.children=Be}return{$$typeof:l,type:O.type,key:qe,ref:Oe,props:Ie,_owner:ke}},Pt.createContext=function(O){return O={$$typeof:k,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:b,_context:O},O.Consumer=O},Pt.createElement=ve,Pt.createFactory=function(O){var Z=ve.bind(null,O);return Z.type=O,Z},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(O){return{$$typeof:C,render:O}},Pt.isValidElement=Te,Pt.lazy=function(O){return{$$typeof:N,_payload:{_status:-1,_result:O},_init:Q}},Pt.memo=function(O,Z){return{$$typeof:j,type:O,compare:Z===void 0?null:Z}},Pt.startTransition=function(O){var Z=R.transition;R.transition={};try{O()}finally{R.transition=Z}},Pt.unstable_act=$,Pt.useCallback=function(O,Z){return K.current.useCallback(O,Z)},Pt.useContext=function(O){return K.current.useContext(O)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(O){return K.current.useDeferredValue(O)},Pt.useEffect=function(O,Z){return K.current.useEffect(O,Z)},Pt.useId=function(){return K.current.useId()},Pt.useImperativeHandle=function(O,Z,Se){return K.current.useImperativeHandle(O,Z,Se)},Pt.useInsertionEffect=function(O,Z){return K.current.useInsertionEffect(O,Z)},Pt.useLayoutEffect=function(O,Z){return K.current.useLayoutEffect(O,Z)},Pt.useMemo=function(O,Z){return K.current.useMemo(O,Z)},Pt.useReducer=function(O,Z,Se){return K.current.useReducer(O,Z,Se)},Pt.useRef=function(O){return K.current.useRef(O)},Pt.useState=function(O){return K.current.useState(O)},Pt.useSyncExternalStore=function(O,Z,Se){return K.current.useSyncExternalStore(O,Z,Se)},Pt.useTransition=function(){return K.current.useTransition()},Pt.version="18.3.1",Pt}var qh;function sh(){return qh||(qh=1,Lp.exports=mg()),Lp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function gg(){if(Kh)return Yu;Kh=1;var l=sh(),c=Symbol.for("react.element"),p=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function k(C,S,j){var N,F={},A=null,X=null;j!==void 0&&(A=""+j),S.key!==void 0&&(A=""+S.key),S.ref!==void 0&&(X=S.ref);for(N in S)g.call(S,N)&&!b.hasOwnProperty(N)&&(F[N]=S[N]);if(C&&C.defaultProps)for(N in S=C.defaultProps,S)F[N]===void 0&&(F[N]=S[N]);return{$$typeof:c,type:C,key:A,ref:X,props:F,_owner:y.current}}return Yu.Fragment=p,Yu.jsx=k,Yu.jsxs=k,Yu}var $h;function yg(){return $h||($h=1,Ep.exports=gg()),Ep.exports}var u=yg(),we=sh();const vg=Zf(we);var hd={},Pp={exports:{}},ei={},Ap={exports:{}},Rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function xg(){return Gh||(Gh=1,(function(l){function c(R,E){var $=R.length;R.push(E);e:for(;0<$;){var O=$-1>>>1,Z=R[O];if(0<y(Z,E))R[O]=E,R[$]=Z,$=O;else break e}}function p(R){return R.length===0?null:R[0]}function g(R){if(R.length===0)return null;var E=R[0],$=R.pop();if($!==E){R[0]=$;e:for(var O=0,Z=R.length,Se=Z>>>1;O<Se;){var Ie=2*(O+1)-1,qe=R[Ie],Oe=Ie+1,ke=R[Oe];if(0>y(qe,$))Oe<Z&&0>y(ke,qe)?(R[O]=ke,R[Oe]=$,O=Oe):(R[O]=qe,R[Ie]=$,O=Ie);else if(Oe<Z&&0>y(ke,$))R[O]=ke,R[Oe]=$,O=Oe;else break e}}return E}function y(R,E){var $=R.sortIndex-E.sortIndex;return $!==0?$:R.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var k=Date,C=k.now();l.unstable_now=function(){return k.now()-C}}var S=[],j=[],N=1,F=null,A=3,X=!1,D=!1,Y=!1,J=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(R){for(var E=p(j);E!==null;){if(E.callback===null)g(j);else if(E.startTime<=R)g(j),E.sortIndex=E.expirationTime,c(S,E);else break;E=p(j)}}function H(R){if(Y=!1,B(R),!D)if(p(S)!==null)D=!0,Q(V);else{var E=p(j);E!==null&&K(H,E.startTime-R)}}function V(R,E){D=!1,Y&&(Y=!1,M(ve),ve=-1),X=!0;var $=A;try{for(B(E),F=p(S);F!==null&&(!(F.expirationTime>E)||R&&!ae());){var O=F.callback;if(typeof O=="function"){F.callback=null,A=F.priorityLevel;var Z=O(F.expirationTime<=E);E=l.unstable_now(),typeof Z=="function"?F.callback=Z:F===p(S)&&g(S),B(E)}else g(S);F=p(S)}if(F!==null)var Se=!0;else{var Ie=p(j);Ie!==null&&K(H,Ie.startTime-E),Se=!1}return Se}finally{F=null,A=$,X=!1}}var ce=!1,le=null,ve=-1,Fe=5,Te=-1;function ae(){return!(l.unstable_now()-Te<Fe)}function Ce(){if(le!==null){var R=l.unstable_now();Te=R;var E=!0;try{E=le(!0,R)}finally{E?oe():(ce=!1,le=null)}}else ce=!1}var oe;if(typeof W=="function")oe=function(){W(Ce)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,L=ye.port2;ye.port1.onmessage=Ce,oe=function(){L.postMessage(null)}}else oe=function(){J(Ce,0)};function Q(R){le=R,ce||(ce=!0,oe())}function K(R,E){ve=J(function(){R(l.unstable_now())},E)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_continueExecution=function(){D||X||(D=!0,Q(V))},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return A},l.unstable_getFirstCallbackNode=function(){return p(S)},l.unstable_next=function(R){switch(A){case 1:case 2:case 3:var E=3;break;default:E=A}var $=A;A=E;try{return R()}finally{A=$}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(R,E){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=A;A=R;try{return E()}finally{A=$}},l.unstable_scheduleCallback=function(R,E,$){var O=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?O+$:O):$=O,R){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,R={id:N++,callback:E,priorityLevel:R,startTime:$,expirationTime:Z,sortIndex:-1},$>O?(R.sortIndex=$,c(j,R),p(S)===null&&R===p(j)&&(Y?(M(ve),ve=-1):Y=!0,K(H,$-O))):(R.sortIndex=Z,c(S,R),D||X||(D=!0,Q(V))),R},l.unstable_shouldYield=ae,l.unstable_wrapCallback=function(R){var E=A;return function(){var $=A;A=E;try{return R.apply(this,arguments)}finally{A=$}}}})(Rp)),Rp}var Yh;function bg(){return Yh||(Yh=1,Ap.exports=xg()),Ap.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function wg(){if(Vh)return ei;Vh=1;var l=sh(),c=bg();function p(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function b(t,r){k(t,r),k(t+"Capture",r)}function k(t,r){for(y[t]=r,t=0;t<r.length;t++)g.add(r[t])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},F={};function A(t){return S.call(F,t)?!0:S.call(N,t)?!1:j.test(t)?F[t]=!0:(N[t]=!0,!1)}function X(t,r,o,d){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,r,o,d){if(r===null||typeof r>"u"||X(t,r,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(t,r,o,d,f,v,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=v,this.removeEmptyString=P}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){J[t]=new Y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];J[r]=new Y(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){J[t]=new Y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){J[t]=new Y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){J[t]=new Y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){J[t]=new Y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){J[t]=new Y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){J[t]=new Y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){J[t]=new Y(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,W);J[r]=new Y(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,W);J[r]=new Y(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,W);J[r]=new Y(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){J[t]=new Y(t,1,!1,t.toLowerCase(),null,!1,!1)}),J.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){J[t]=new Y(t,1,!1,t.toLowerCase(),null,!0,!0)});function B(t,r,o,d){var f=J.hasOwnProperty(r)?J[r]:null;(f!==null?f.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(D(r,o,f,d)&&(o=null),d||f===null?A(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,d=f.attributeNamespace,o===null?t.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,d?t.setAttributeNS(d,r,o):t.setAttribute(r,o))))}var H=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),ce=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),ae=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),R=Symbol.iterator;function E(t){return t===null||typeof t!="object"?null:(t=R&&t[R]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,O;function Z(t){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var Se=!1;function Ie(t,r){if(!t||Se)return"";Se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var d=fe}Reflect.construct(t,[],r)}else{try{r.call()}catch(fe){d=fe}t.call(r.prototype)}else{try{throw Error()}catch(fe){d=fe}t()}}catch(fe){if(fe&&d&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),v=d.stack.split(`
`),P=f.length-1,G=v.length-1;1<=P&&0<=G&&f[P]!==v[G];)G--;for(;1<=P&&0<=G;P--,G--)if(f[P]!==v[G]){if(P!==1||G!==1)do if(P--,G--,0>G||f[P]!==v[G]){var ee=`
`+f[P].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=P&&0<=G);break}}}finally{Se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Z(t):""}function qe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=Ie(t.type,!1),t;case 11:return t=Ie(t.type.render,!1),t;case 1:return t=Ie(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case le:return"Fragment";case ce:return"Portal";case Fe:return"Profiler";case ve:return"StrictMode";case oe:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ae:return(t.displayName||"Context")+".Consumer";case Te:return(t._context.displayName||"Context")+".Provider";case Ce:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}function ke(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(t){var r=Ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),d=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,v=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(P){d=""+P,v.call(this,P)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function $e(t){t._valueTracker||(t._valueTracker=et(t))}function Ft(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),d="";return t&&(d=Ke(t)?t.checked?"true":"false":t.value),t=d,t!==o?(r.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ct(t,r){var o=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function xt(t,r){var o=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;o=Be(r.value!=null?r.value:o),t._wrapperState={initialChecked:d,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tt(t,r){r=r.checked,r!=null&&B(t,"checked",r,!1)}function Ue(t,r){tt(t,r);var o=Be(r.value),d=r.type;if(o!=null)d==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(d==="submit"||d==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,o):r.hasOwnProperty("defaultValue")&&yt(t,r.type,Be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vt(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,r,o){(r!=="number"||Yt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Qe=Array.isArray;function ut(t,r,o,d){if(t=t.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=r.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&d&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),r=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,d&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function se(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(p(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function je(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(p(92));if(Qe(o)){if(1<o.length)throw Error(p(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Be(o)}}function he(t,r){var o=Be(r.value),d=Be(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),d!=null&&(t.defaultValue=""+d)}function kt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,d,f){MSApp.execUnsafeLocalFunction(function(){return t(r,o,d,f)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function pt(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nr=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(t){nr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Xt[r]=Xt[t]})});function Sr(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Xt.hasOwnProperty(t)&&Xt[t]?(""+r).trim():r+"px"}function Rr(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var d=o.indexOf("--")===0,f=Sr(o,r[o],d);o==="float"&&(o="cssFloat"),d?t.setProperty(o,f):t[o]=f}}var Br=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ur(t,r){if(r){if(Br[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(p(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(p(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(p(61))}if(r.style!=null&&typeof r.style!="object")throw Error(p(62))}}function bt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function rt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,tn=null,It=null;function qt(t){if(t=hn(t)){if(typeof _r!="function")throw Error(p(280));var r=t.stateNode;r&&(r=yn(r),_r(t.stateNode,t.type,r))}}function bn(t){tn?It?It.push(t):It=[t]:tn=t}function gn(){if(tn){var t=tn,r=It;if(It=tn=null,qt(t),r)for(t=0;t<r.length;t++)qt(r[t])}}function En(t,r){return t(r)}function wn(){}var ni=!1;function On(t,r,o){if(ni)return t(r,o);ni=!0;try{return En(t,r,o)}finally{ni=!1,(tn!==null||It!==null)&&(wn(),gn())}}function pr(t,r){var o=t.stateNode;if(o===null)return null;var d=yn(o);if(d===null)return null;o=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(t=t.type,d=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!d;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(p(231,r,typeof o));return o}var mi=!1;if(C)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{mi=!1}function as(t,r,o,d,f,v,P,G,ee){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(o,fe)}catch(Re){this.onError(Re)}}var kn=!1,Cr=null,qr=!1,Ir=null,Tr={onError:function(t){kn=!0,Cr=t}};function gi(t,r,o,d,f,v,P,G,ee){kn=!1,Cr=null,as.apply(Tr,arguments)}function os(t,r,o,d,f,v,P,G,ee){if(gi.apply(this,arguments),kn){if(kn){var fe=Cr;kn=!1,Cr=null}else throw Error(p(198));qr||(qr=!0,Ir=fe)}}function Mn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function ls(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Mi(t){if(Mn(t)!==t)throw Error(p(188))}function Or(t){var r=t.alternate;if(!r){if(r=Mn(t),r===null)throw Error(p(188));return r!==t?null:t}for(var o=t,d=r;;){var f=o.return;if(f===null)break;var v=f.alternate;if(v===null){if(d=f.return,d!==null){o=d;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===o)return Mi(f),t;if(v===d)return Mi(f),r;v=v.sibling}throw Error(p(188))}if(o.return!==d.return)o=f,d=v;else{for(var P=!1,G=f.child;G;){if(G===o){P=!0,o=f,d=v;break}if(G===d){P=!0,d=f,o=v;break}G=G.sibling}if(!P){for(G=v.child;G;){if(G===o){P=!0,o=v,d=f;break}if(G===d){P=!0,d=v,o=f;break}G=G.sibling}if(!P)throw Error(p(189))}}if(o.alternate!==d)throw Error(p(190))}if(o.tag!==3)throw Error(p(188));return o.stateNode.current===o?t:r}function Gn(t){return t=Or(t),t!==null?yi(t):null}function yi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=yi(t);if(r!==null)return r;t=t.sibling}return null}var Di=c.unstable_scheduleCallback,Bt=c.unstable_cancelCallback,Mr=c.unstable_shouldYield,us=c.unstable_requestPaint,Rt=c.unstable_now,zi=c.unstable_getCurrentPriorityLevel,ri=c.unstable_ImmediatePriority,Vt=c.unstable_UserBlockingPriority,Je=c.unstable_NormalPriority,ii=c.unstable_LowPriority,cs=c.unstable_IdlePriority,Yn=null,T=null;function U(t){if(T&&typeof T.onCommitFiberRoot=="function")try{T.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}}var me=Math.clz32?Math.clz32:He,Ne=Math.log,pe=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(Ne(t)/pe|0)|0}var jt=64,Qt=4194304;function Sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kr(t,r){var o=t.pendingLanes;if(o===0)return 0;var d=0,f=t.suspendedLanes,v=t.pingedLanes,P=o&268435455;if(P!==0){var G=P&~f;G!==0?d=Sn(G):(v&=P,v!==0&&(d=Sn(v)))}else P=o&~f,P!==0?d=Sn(P):v!==0&&(d=Sn(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&f)===0&&(f=d&-d,v=r&-r,f>=v||f===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=d;0<r;)o=31-me(r),f=1<<o,d|=t[o],r&=~f;return d}function tl(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(t,r){for(var o=t.suspendedLanes,d=t.pingedLanes,f=t.expirationTimes,v=t.pendingLanes;0<v;){var P=31-me(v),G=1<<P,ee=f[P];ee===-1?((G&o)===0||(G&d)!==0)&&(f[P]=tl(G,r)):ee<=r&&(t.expiredLanes|=G),v&=~G}}function ro(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function io(){var t=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),t}function Fi(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function rr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-me(r),t[r]=o}function so(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var d=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-me(o),v=1<<f;r[f]=0,d[f]=-1,t[f]=-1,o&=~v}}function Wi(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var d=31-me(o),f=1<<d;f&r|t[d]&r&&(t[d]|=r),o&=~f}}var Nt=0;function ds(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Is,vi,va,xi,Hi,ir=!1,xa=[],Dr=null,si=null,Dn=null,$r=new Map,Os=new Map,jr=[],Ms="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ao(t,r){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(r.pointerId)}}function Ds(t,r,o,d,f,v){return t===null||t.nativeEvent!==v?(t={blockedOn:r,domEventName:o,eventSystemFlags:d,nativeEvent:v,targetContainers:[f]},r!==null&&(r=hn(r),r!==null&&vi(r)),t):(t.eventSystemFlags|=d,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function Jl(t,r,o,d,f){switch(r){case"focusin":return Dr=Ds(Dr,t,r,o,d,f),!0;case"dragenter":return si=Ds(si,t,r,o,d,f),!0;case"mouseover":return Dn=Ds(Dn,t,r,o,d,f),!0;case"pointerover":var v=f.pointerId;return $r.set(v,Ds($r.get(v)||null,t,r,o,d,f)),!0;case"gotpointercapture":return v=f.pointerId,Os.set(v,Ds(Os.get(v)||null,t,r,o,d,f)),!0}return!1}function oo(t){var r=Pn(t.target);if(r!==null){var o=Mn(r);if(o!==null){if(r=o.tag,r===13){if(r=ls(o),r!==null){t.blockedOn=r,Hi(t.priority,function(){va(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ps(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Tt(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var d=new o.constructor(o.type,o);fi=d,o.target.dispatchEvent(d),fi=null}else return r=hn(o),r!==null&&vi(r),t.blockedOn=o,!1;r.shift()}return!0}function zs(t,r,o){ps(t)&&o.delete(r)}function lo(){ir=!1,Dr!==null&&ps(Dr)&&(Dr=null),si!==null&&ps(si)&&(si=null),Dn!==null&&ps(Dn)&&(Dn=null),$r.forEach(zs),Os.forEach(zs)}function bi(t,r){t.blockedOn===r&&(t.blockedOn=null,ir||(ir=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,lo)))}function _e(t){function r(f){return bi(f,t)}if(0<xa.length){bi(xa[0],t);for(var o=1;o<xa.length;o++){var d=xa[o];d.blockedOn===t&&(d.blockedOn=null)}}for(Dr!==null&&bi(Dr,t),si!==null&&bi(si,t),Dn!==null&&bi(Dn,t),$r.forEach(r),Os.forEach(r),o=0;o<jr.length;o++)d=jr[o],d.blockedOn===t&&(d.blockedOn=null);for(;0<jr.length&&(o=jr[0],o.blockedOn===null);)oo(o),o.blockedOn===null&&jr.shift()}var I=H.ReactCurrentBatchConfig,ne=!0;function xe(t,r,o,d){var f=Nt,v=I.transition;I.transition=null;try{Nt=1,nt(t,r,o,d)}finally{Nt=f,I.transition=v}}function Le(t,r,o,d){var f=Nt,v=I.transition;I.transition=null;try{Nt=4,nt(t,r,o,d)}finally{Nt=f,I.transition=v}}function nt(t,r,o,d){if(ne){var f=Tt(t,r,o,d);if(f===null)fu(t,r,d,ct,o),ao(t,d);else if(Jl(f,t,r,o,d))d.stopPropagation();else if(ao(t,d),r&4&&-1<Ms.indexOf(t)){for(;f!==null;){var v=hn(f);if(v!==null&&Is(v),v=Tt(t,r,o,d),v===null&&fu(t,r,d,ct,o),v===f)break;f=v}f!==null&&d.stopPropagation()}else fu(t,r,d,null,o)}}var ct=null;function Tt(t,r,o,d){if(ct=null,t=rt(d),t=Pn(t),t!==null)if(r=Mn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=ls(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ct=t,null}function dn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zi()){case ri:return 1;case Vt:return 4;case Je:case ii:return 16;case cs:return 536870912;default:return 16}default:return 16}}var Kt=null,hr=null,Vn=null;function fr(){if(Vn)return Vn;var t,r=hr,o=r.length,d,f="value"in Kt?Kt.value:Kt.textContent,v=f.length;for(t=0;t<o&&r[t]===f[t];t++);var P=o-t;for(d=1;d<=P&&r[o-d]===f[v-d];d++);return Vn=f.slice(t,1<d?1-d:void 0)}function pn(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Nr(){return!0}function nl(){return!1}function _n(t){function r(o,d,f,v,P){this._reactName=o,this._targetInst=f,this.type=d,this.nativeEvent=v,this.target=P,this.currentTarget=null;for(var G in t)t.hasOwnProperty(G)&&(o=t[G],this[G]=o?o(v):v[G]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Nr:nl,this.isPropagationStopped=nl,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),r}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=_n(Bi),wi=$({},Bi,{view:0,detail:0}),Kd=_n(wi),Xl,Ql,co,po=$({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Xl=t.screenX-co.screenX,Ql=t.screenY-co.screenY):Ql=Xl=0,co=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Zl=_n(po),$d=$({},po,{dataTransfer:0}),Gd=_n($d),Yd=$({},wi,{relatedTarget:0}),eu=_n(Yd),fc=$({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Vd=_n(fc),mc=$({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rl=_n(mc),ba=$({},Bi,{data:0}),gc=_n(ba),Jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ho={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zn(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ho[t])?!!r[t]:!1}function tu(){return zn}var yc=$({},wi,{key:function(t){if(t.key){var r=Jd[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=pn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?pn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fo=_n(yc),Qd=$({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=_n(Qd),Zd=$({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),ru=_n(Zd),vc=$({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=_n(vc),tp=$({},po,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xc=_n(tp),bc=[9,13,27,32],iu=C&&"CompositionEvent"in window,Ui=null;C&&"documentMode"in document&&(Ui=document.documentMode);var qi=C&&"TextEvent"in window&&!Ui,mo=C&&(!iu||Ui&&8<Ui&&11>=Ui),il=" ",su=!1;function ai(t,r){switch(t){case"keyup":return bc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function np(t,r){switch(t){case"compositionend":return hs(r);case"keypress":return r.which!==32?null:(su=!0,il);case"textInput":return t=r.data,t===il&&su?null:t;default:return null}}function wc(t,r){if(fs)return t==="compositionend"||!iu&&ai(t,r)?(t=fr(),Vn=hr=Kt=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mo&&r.locale!=="ko"?null:r.data;default:return null}}var rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!rp[t.type]:r==="textarea"}function sl(t,r,o,d){bn(d),r=Ta(r,"onChange"),0<r.length&&(o=new uo("onChange","change",null,o,d),t.push({event:o,listeners:r}))}var ki=null,Er=null;function kc(t){ml(t,0)}function go(t){var r=Tn(t);if(Ft(r))return t}function ip(t,r){if(t==="change")return r}var Sc=!1;if(C){var ou;if(C){var al="oninput"in document;if(!al){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),al=typeof lu.oninput=="function"}ou=al}else ou=!1;Sc=ou&&(!document.documentMode||9<document.documentMode)}function wa(){ki&&(ki.detachEvent("onpropertychange",uu),Er=ki=null)}function uu(t){if(t.propertyName==="value"&&go(Er)){var r=[];sl(r,Er,t,rt(t)),On(kc,r)}}function _c(t,r,o){t==="focusin"?(wa(),ki=r,Er=o,ki.attachEvent("onpropertychange",uu)):t==="focusout"&&wa()}function cu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return go(Er)}function ol(t,r){if(t==="click")return go(r)}function Cc(t,r){if(t==="input"||t==="change")return go(r)}function ll(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:ll;function ka(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),d=Object.keys(r);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var f=o[d];if(!S.call(r,f)||!Cn(t[f],r[f]))return!1}return!0}function ul(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cl(t,r){var o=ul(t);t=0;for(var d;o;){if(o.nodeType===3){if(d=t+o.textContent.length,t<=r&&d>=r)return{node:o,offset:r-t};t=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ul(o)}}function du(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?du(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function pu(){for(var t=window,r=Yt();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Yt(t.document)}return r}function yo(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function sp(t){var r=pu(),o=t.focusedElem,d=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&du(o.ownerDocument.documentElement,o)){if(d!==null&&yo(o)){if(r=d.start,t=d.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,v=Math.min(d.start,f);d=d.end===void 0?v:Math.min(d.end,f),!t.extend&&v>d&&(f=d,d=v,v=f),f=cl(o,v);var P=cl(o,d);f&&P&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==P.node||t.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),v>d?(t.addRange(r),t.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ap=C&&"documentMode"in document&&11>=document.documentMode,Sa=null,Ki=null,Si=null,ms=!1;function dl(t,r,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ms||Sa==null||Sa!==Yt(d)||(d=Sa,"selectionStart"in d&&yo(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Si&&ka(Si,d)||(Si=d,d=Ta(Ki,"onSelect"),0<d.length&&(r=new uo("onSelect","select",null,r,o),t.push({event:r,listeners:d}),r.target=Sa)))}function _a(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Fs={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},vo={},gs={};C&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function _i(t){if(vo[t])return vo[t];if(!Fs[t])return t;var r=Fs[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in gs)return vo[t]=r[o];return t}var sr=_i("animationend"),$i=_i("animationiteration"),Gi=_i("animationstart"),xo=_i("transitionend"),Tc=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,r){Tc.set(t,r),b(r,[t])}for(var pl=0;pl<hu.length;pl++){var bo=hu[pl],hl=bo.toLowerCase(),op=bo[0].toUpperCase()+bo.slice(1);Gr(hl,"on"+op)}Gr(sr,"onAnimationEnd"),Gr($i,"onAnimationIteration"),Gr(Gi,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(xo,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function fl(t,r,o){var d=t.type||"unknown-event";t.currentTarget=o,os(d,r,void 0,t),t.currentTarget=null}function ml(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var d=t[o],f=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var P=d.length-1;0<=P;P--){var G=d[P],ee=G.instance,fe=G.currentTarget;if(G=G.listener,ee!==v&&f.isPropagationStopped())break e;fl(f,G,fe),v=ee}else for(P=0;P<d.length;P++){if(G=d[P],ee=G.instance,fe=G.currentTarget,G=G.listener,ee!==v&&f.isPropagationStopped())break e;fl(f,G,fe),v=ee}}}if(qr)throw t=Ir,qr=!1,Ir=null,t}function Wt(t,r){var o=r[mu];o===void 0&&(o=r[mu]=new Set);var d=t+"__bubble";o.has(d)||(Nc(r,t,2,!1),o.add(d))}function Ca(t,r,o){var d=0;r&&(d|=4),Nc(o,t,d,r)}var wo="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[wo]){t[wo]=!0,g.forEach(function(o){o!=="selectionchange"&&(jc.has(o)||Ca(o,!1,t),Ca(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[wo]||(r[wo]=!0,Ca("selectionchange",!1,r))}}function Nc(t,r,o,d){switch(dn(r)){case 1:var f=xe;break;case 4:f=Le;break;default:f=nt}o=f.bind(null,r,o,t),f=void 0,!mi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),d?f!==void 0?t.addEventListener(r,o,{capture:!0,passive:f}):t.addEventListener(r,o,!0):f!==void 0?t.addEventListener(r,o,{passive:f}):t.addEventListener(r,o,!1)}function fu(t,r,o,d,f){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var G=d.stateNode.containerInfo;if(G===f||G.nodeType===8&&G.parentNode===f)break;if(P===4)for(P=d.return;P!==null;){var ee=P.tag;if((ee===3||ee===4)&&(ee=P.stateNode.containerInfo,ee===f||ee.nodeType===8&&ee.parentNode===f))return;P=P.return}for(;G!==null;){if(P=Pn(G),P===null)return;if(ee=P.tag,ee===5||ee===6){d=v=P;continue e}G=G.parentNode}}d=d.return}On(function(){var fe=v,Re=rt(o),Me=[];e:{var Pe=Tc.get(t);if(Pe!==void 0){var Xe=uo,it=t;switch(t){case"keypress":if(pn(o)===0)break e;case"keydown":case"keyup":Xe=fo;break;case"focusin":it="focus",Xe=eu;break;case"focusout":it="blur",Xe=eu;break;case"beforeblur":case"afterblur":Xe=eu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=ru;break;case sr:case $i:case Gi:Xe=Vd;break;case xo:Xe=ep;break;case"scroll":Xe=Kd;break;case"wheel":Xe=xc;break;case"copy":case"cut":case"paste":Xe=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=nu}var st=(r&4)!==0,Kn=!st&&t==="scroll",ue=st?Pe!==null?Pe+"Capture":null:Pe;st=[];for(var re=fe,de;re!==null;){de=re;var We=de.stateNode;if(de.tag===5&&We!==null&&(de=We,ue!==null&&(We=pr(re,ue),We!=null&&st.push(ko(re,We,de)))),Kn)break;re=re.return}0<st.length&&(Pe=new Xe(Pe,it,null,o,Re),Me.push({event:Pe,listeners:st}))}}if((r&7)===0){e:{if(Pe=t==="mouseover"||t==="pointerover",Xe=t==="mouseout"||t==="pointerout",Pe&&o!==fi&&(it=o.relatedTarget||o.fromElement)&&(Pn(it)||it[Ji]))break e;if((Xe||Pe)&&(Pe=Re.window===Re?Re:(Pe=Re.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,Xe?(it=o.relatedTarget||o.toElement,Xe=fe,it=it?Pn(it):null,it!==null&&(Kn=Mn(it),it!==Kn||it.tag!==5&&it.tag!==6)&&(it=null)):(Xe=null,it=fe),Xe!==it)){if(st=Zl,We="onMouseLeave",ue="onMouseEnter",re="mouse",(t==="pointerout"||t==="pointerover")&&(st=nu,We="onPointerLeave",ue="onPointerEnter",re="pointer"),Kn=Xe==null?Pe:Tn(Xe),de=it==null?Pe:Tn(it),Pe=new st(We,re+"leave",Xe,o,Re),Pe.target=Kn,Pe.relatedTarget=de,We=null,Pn(Re)===fe&&(st=new st(ue,re+"enter",it,o,Re),st.target=de,st.relatedTarget=Kn,We=st),Kn=We,Xe&&it)t:{for(st=Xe,ue=it,re=0,de=st;de;de=vs(de))re++;for(de=0,We=ue;We;We=vs(We))de++;for(;0<re-de;)st=vs(st),re--;for(;0<de-re;)ue=vs(ue),de--;for(;re--;){if(st===ue||ue!==null&&st===ue.alternate)break t;st=vs(st),ue=vs(ue)}st=null}else st=null;Xe!==null&&Hs(Me,Pe,Xe,st,!1),it!==null&&Kn!==null&&Hs(Me,Kn,it,st,!0)}}e:{if(Pe=fe?Tn(fe):window,Xe=Pe.nodeName&&Pe.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Pe.type==="file")var lt=ip;else if(au(Pe))if(Sc)lt=Cc;else{lt=cu;var ht=_c}else(Xe=Pe.nodeName)&&Xe.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(lt=ol);if(lt&&(lt=lt(t,fe))){sl(Me,lt,o,Re);break e}ht&&ht(t,Pe,fe),t==="focusout"&&(ht=Pe._wrapperState)&&ht.controlled&&Pe.type==="number"&&yt(Pe,"number",Pe.value)}switch(ht=fe?Tn(fe):window,t){case"focusin":(au(ht)||ht.contentEditable==="true")&&(Sa=ht,Ki=fe,Si=null);break;case"focusout":Si=Ki=Sa=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,dl(Me,o,Re);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":dl(Me,o,Re)}var ft;if(iu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else fs?ai(t,o)&&(wt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(wt="onCompositionStart");wt&&(mo&&o.locale!=="ko"&&(fs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&fs&&(ft=fr()):(Kt=Re,hr="value"in Kt?Kt.value:Kt.textContent,fs=!0)),ht=Ta(fe,wt),0<ht.length&&(wt=new gc(wt,t,null,o,Re),Me.push({event:wt,listeners:ht}),ft?wt.data=ft:(ft=hs(o),ft!==null&&(wt.data=ft)))),(ft=qi?np(t,o):wc(t,o))&&(fe=Ta(fe,"onBeforeInput"),0<fe.length&&(Re=new gc("onBeforeInput","beforeinput",null,o,Re),Me.push({event:Re,listeners:fe}),Re.data=ft))}ml(Me,r)})}function ko(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Ta(t,r){for(var o=r+"Capture",d=[];t!==null;){var f=t,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=pr(t,o),v!=null&&d.unshift(ko(t,v,f)),v=pr(t,r),v!=null&&d.push(ko(t,v,f))),t=t.return}return d}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hs(t,r,o,d,f){for(var v=r._reactName,P=[];o!==null&&o!==d;){var G=o,ee=G.alternate,fe=G.stateNode;if(ee!==null&&ee===d)break;G.tag===5&&fe!==null&&(G=fe,f?(ee=pr(o,v),ee!=null&&P.unshift(ko(o,ee,G))):f||(ee=pr(o,v),ee!=null&&P.push(ko(o,ee,G)))),o=o.return}P.length!==0&&t.push({event:r,listeners:P})}var So=/\r\n?/g,lp=/\u0000|\uFFFD/g;function _o(t){return(typeof t=="string"?t:""+t).replace(So,`
`).replace(lp,"")}function Co(t,r,o){if(r=_o(r),_o(t)!==r&&o)throw Error(p(425))}function xs(){}var gl=null,Yi=null;function Bs(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,To=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Ec=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(t){return Us.resolve(null).then(t).catch(Lc)}:Vi;function Lc(t){setTimeout(function(){throw t})}function yl(t,r){var o=r,d=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(d===0){t.removeChild(f),_e(r);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=f}while(o);_e(r)}function bs(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ws(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Yr,jo="__reactProps$"+Yr,Ji="__reactContainer$"+Yr,mu="__reactEvents$"+Yr,up="__reactListeners$"+Yr,cp="__reactHandles$"+Yr;function Pn(t){var r=t[Ci];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Ji]||o[Ci]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=ws(t);t!==null;){if(o=t[Ci])return o;t=ws(t)}return r}t=o,o=t.parentNode}return null}function hn(t){return t=t[Ci]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p(33))}function yn(t){return t[jo]||null}var qs=[],ja=-1;function oi(t){return{current:t}}function nn(t){0>ja||(t.current=qs[ja],qs[ja]=null,ja--)}function Zt(t,r){ja++,qs[ja]=t.current,t.current=r}var ks={},Jn=oi(ks),mr=oi(!1),Xi=ks;function Na(t,r){var o=t.type.contextTypes;if(!o)return ks;var d=t.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in o)f[v]=r[v];return d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function ar(t){return t=t.childContextTypes,t!=null}function Ea(){nn(mr),nn(Jn)}function gu(t,r,o){if(Jn.current!==ks)throw Error(p(168));Zt(Jn,r),Zt(mr,o)}function yu(t,r,o){var d=t.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var f in d)if(!(f in r))throw Error(p(108,ke(t)||"Unknown",f));return $({},o,d)}function La(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ks,Xi=Jn.current,Zt(Jn,t),Zt(mr,mr.current),!0}function vu(t,r,o){var d=t.stateNode;if(!d)throw Error(p(169));o?(t=yu(t,r,Xi),d.__reactInternalMemoizedMergedChildContext=t,nn(mr),nn(Jn),Zt(Jn,t)):nn(mr),Zt(mr,o)}var zr=null,vl=!1,Pa=!1;function Ti(t){zr===null?zr=[t]:zr.push(t)}function Pc(t){vl=!0,Ti(t)}function Ss(){if(!Pa&&zr!==null){Pa=!0;var t=0,r=Nt;try{var o=zr;for(Nt=1;t<o.length;t++){var d=o[t];do d=d(!0);while(d!==null)}zr=null,vl=!1}catch(f){throw zr!==null&&(zr=zr.slice(t+1)),Di(ri,Ss),f}finally{Nt=r,Pa=!1}}return null}var Ks=[],Xn=0,At=null,Lr=0,Fn=[],Wn=0,_s=null,li=1,ji="";function $s(t,r){Ks[Xn++]=Lr,Ks[Xn++]=At,At=t,Lr=r}function xl(t,r,o){Fn[Wn++]=li,Fn[Wn++]=ji,Fn[Wn++]=_s,_s=t;var d=li;t=ji;var f=32-me(d)-1;d&=~(1<<f),o+=1;var v=32-me(r)+f;if(30<v){var P=f-f%5;v=(d&(1<<P)-1).toString(32),d>>=P,f-=P,li=1<<32-me(r)+f|o<<f|d,ji=v+t}else li=1<<v|o<<f|d,ji=t}function Gs(t){t.return!==null&&($s(t,1),xl(t,1,0))}function bl(t){for(;t===At;)At=Ks[--Xn],Ks[Xn]=null,Lr=Ks[--Xn],Ks[Xn]=null;for(;t===_s;)_s=Fn[--Wn],Fn[Wn]=null,ji=Fn[--Wn],Fn[Wn]=null,li=Fn[--Wn],Fn[Wn]=null}var gr=null,An=null,rn=!1,Vr=null;function Ac(t,r){var o=Ii(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function No(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gr=t,An=bs(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gr=t,An=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=_s!==null?{id:li,overflow:ji}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Ii(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gr=t,An=null,!0):!1;default:return!1}}function Eo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wl(t){if(rn){var r=An;if(r){var o=r;if(!No(t,r)){if(Eo(t))throw Error(p(418));r=bs(o.nextSibling);var d=gr;r&&No(t,r)?Ac(d,o):(t.flags=t.flags&-4097|2,rn=!1,gr=t)}}else{if(Eo(t))throw Error(p(418));t.flags=t.flags&-4097|2,rn=!1,gr=t}}}function Rc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function Lo(t){if(t!==gr)return!1;if(!rn)return Rc(t),rn=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Bs(t.type,t.memoizedProps)),r&&(r=An)){if(Eo(t))throw Ic(),Error(p(418));for(;r;)Ac(t,r),r=bs(r.nextSibling)}if(Rc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){An=bs(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}An=null}}else An=gr?bs(t.stateNode.nextSibling):null;return!0}function Ic(){for(var t=An;t;)t=bs(t.nextSibling)}function Aa(){An=gr=null,rn=!1}function Ra(t){Vr===null?Vr=[t]:Vr.push(t)}var Oc=H.ReactCurrentBatchConfig;function Po(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(p(309));var d=o.stateNode}if(!d)throw Error(p(147,t));var f=d,v=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(P){var G=f.refs;P===null?delete G[v]:G[v]=P},r._stringRef=v,r)}if(typeof t!="string")throw Error(p(284));if(!o._owner)throw Error(p(290,t))}return t}function kl(t,r){throw t=Object.prototype.toString.call(r),Error(p(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function xu(t){var r=t._init;return r(t._payload)}function Ys(t){function r(ue,re){if(t){var de=ue.deletions;de===null?(ue.deletions=[re],ue.flags|=16):de.push(re)}}function o(ue,re){if(!t)return null;for(;re!==null;)r(ue,re),re=re.sibling;return null}function d(ue,re){for(ue=new Map;re!==null;)re.key!==null?ue.set(re.key,re):ue.set(re.index,re),re=re.sibling;return ue}function f(ue,re){return ue=Xa(ue,re),ue.index=0,ue.sibling=null,ue}function v(ue,re,de){return ue.index=de,t?(de=ue.alternate,de!==null?(de=de.index,de<re?(ue.flags|=2,re):de):(ue.flags|=2,re)):(ue.flags|=1048576,re)}function P(ue){return t&&ue.alternate===null&&(ue.flags|=2),ue}function G(ue,re,de,We){return re===null||re.tag!==6?(re=Sp(de,ue.mode,We),re.return=ue,re):(re=f(re,de),re.return=ue,re)}function ee(ue,re,de,We){var lt=de.type;return lt===le?Re(ue,re,de.props.children,We,de.key):re!==null&&(re.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Q&&xu(lt)===re.type)?(We=f(re,de.props),We.ref=Po(ue,re,de),We.return=ue,We):(We=sd(de.type,de.key,de.props,null,ue.mode,We),We.ref=Po(ue,re,de),We.return=ue,We)}function fe(ue,re,de,We){return re===null||re.tag!==4||re.stateNode.containerInfo!==de.containerInfo||re.stateNode.implementation!==de.implementation?(re=_p(de,ue.mode,We),re.return=ue,re):(re=f(re,de.children||[]),re.return=ue,re)}function Re(ue,re,de,We,lt){return re===null||re.tag!==7?(re=Yo(de,ue.mode,We,lt),re.return=ue,re):(re=f(re,de),re.return=ue,re)}function Me(ue,re,de){if(typeof re=="string"&&re!==""||typeof re=="number")return re=Sp(""+re,ue.mode,de),re.return=ue,re;if(typeof re=="object"&&re!==null){switch(re.$$typeof){case V:return de=sd(re.type,re.key,re.props,null,ue.mode,de),de.ref=Po(ue,null,re),de.return=ue,de;case ce:return re=_p(re,ue.mode,de),re.return=ue,re;case Q:var We=re._init;return Me(ue,We(re._payload),de)}if(Qe(re)||E(re))return re=Yo(re,ue.mode,de,null),re.return=ue,re;kl(ue,re)}return null}function Pe(ue,re,de,We){var lt=re!==null?re.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return lt!==null?null:G(ue,re,""+de,We);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case V:return de.key===lt?ee(ue,re,de,We):null;case ce:return de.key===lt?fe(ue,re,de,We):null;case Q:return lt=de._init,Pe(ue,re,lt(de._payload),We)}if(Qe(de)||E(de))return lt!==null?null:Re(ue,re,de,We,null);kl(ue,de)}return null}function Xe(ue,re,de,We,lt){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(de)||null,G(re,ue,""+We,lt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case V:return ue=ue.get(We.key===null?de:We.key)||null,ee(re,ue,We,lt);case ce:return ue=ue.get(We.key===null?de:We.key)||null,fe(re,ue,We,lt);case Q:var ht=We._init;return Xe(ue,re,de,ht(We._payload),lt)}if(Qe(We)||E(We))return ue=ue.get(de)||null,Re(re,ue,We,lt,null);kl(re,We)}return null}function it(ue,re,de,We){for(var lt=null,ht=null,ft=re,wt=re=0,ur=null;ft!==null&&wt<de.length;wt++){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Ht=Pe(ue,ft,de[wt],We);if(Ht===null){ft===null&&(ft=ur);break}t&&ft&&Ht.alternate===null&&r(ue,ft),re=v(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht,ft=ur}if(wt===de.length)return o(ue,ft),rn&&$s(ue,wt),lt;if(ft===null){for(;wt<de.length;wt++)ft=Me(ue,de[wt],We),ft!==null&&(re=v(ft,re,wt),ht===null?lt=ft:ht.sibling=ft,ht=ft);return rn&&$s(ue,wt),lt}for(ft=d(ue,ft);wt<de.length;wt++)ur=Xe(ft,ue,wt,de[wt],We),ur!==null&&(t&&ur.alternate!==null&&ft.delete(ur.key===null?wt:ur.key),re=v(ur,re,wt),ht===null?lt=ur:ht.sibling=ur,ht=ur);return t&&ft.forEach(function(Qa){return r(ue,Qa)}),rn&&$s(ue,wt),lt}function st(ue,re,de,We){var lt=E(de);if(typeof lt!="function")throw Error(p(150));if(de=lt.call(de),de==null)throw Error(p(151));for(var ht=lt=null,ft=re,wt=re=0,ur=null,Ht=de.next();ft!==null&&!Ht.done;wt++,Ht=de.next()){ft.index>wt?(ur=ft,ft=null):ur=ft.sibling;var Qa=Pe(ue,ft,Ht.value,We);if(Qa===null){ft===null&&(ft=ur);break}t&&ft&&Qa.alternate===null&&r(ue,ft),re=v(Qa,re,wt),ht===null?lt=Qa:ht.sibling=Qa,ht=Qa,ft=ur}if(Ht.done)return o(ue,ft),rn&&$s(ue,wt),lt;if(ft===null){for(;!Ht.done;wt++,Ht=de.next())Ht=Me(ue,Ht.value,We),Ht!==null&&(re=v(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return rn&&$s(ue,wt),lt}for(ft=d(ue,ft);!Ht.done;wt++,Ht=de.next())Ht=Xe(ft,ue,wt,Ht.value,We),Ht!==null&&(t&&Ht.alternate!==null&&ft.delete(Ht.key===null?wt:Ht.key),re=v(Ht,re,wt),ht===null?lt=Ht:ht.sibling=Ht,ht=Ht);return t&&ft.forEach(function(pg){return r(ue,pg)}),rn&&$s(ue,wt),lt}function Kn(ue,re,de,We){if(typeof de=="object"&&de!==null&&de.type===le&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case V:e:{for(var lt=de.key,ht=re;ht!==null;){if(ht.key===lt){if(lt=de.type,lt===le){if(ht.tag===7){o(ue,ht.sibling),re=f(ht,de.props.children),re.return=ue,ue=re;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Q&&xu(lt)===ht.type){o(ue,ht.sibling),re=f(ht,de.props),re.ref=Po(ue,ht,de),re.return=ue,ue=re;break e}o(ue,ht);break}else r(ue,ht);ht=ht.sibling}de.type===le?(re=Yo(de.props.children,ue.mode,We,de.key),re.return=ue,ue=re):(We=sd(de.type,de.key,de.props,null,ue.mode,We),We.ref=Po(ue,re,de),We.return=ue,ue=We)}return P(ue);case ce:e:{for(ht=de.key;re!==null;){if(re.key===ht)if(re.tag===4&&re.stateNode.containerInfo===de.containerInfo&&re.stateNode.implementation===de.implementation){o(ue,re.sibling),re=f(re,de.children||[]),re.return=ue,ue=re;break e}else{o(ue,re);break}else r(ue,re);re=re.sibling}re=_p(de,ue.mode,We),re.return=ue,ue=re}return P(ue);case Q:return ht=de._init,Kn(ue,re,ht(de._payload),We)}if(Qe(de))return it(ue,re,de,We);if(E(de))return st(ue,re,de,We);kl(ue,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,re!==null&&re.tag===6?(o(ue,re.sibling),re=f(re,de),re.return=ue,ue=re):(o(ue,re),re=Sp(de,ue.mode,We),re.return=ue,ue=re),P(ue)):o(ue,re)}return Kn}var Cs=Ys(!0),Ao=Ys(!1),Ro=oi(null),Ia=null,Vs=null,bu=null;function Sl(){bu=Vs=Ia=null}function Hn(t){var r=Ro.current;nn(Ro),t._currentValue=r}function Oa(t,r,o){for(;t!==null;){var d=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),t===o)break;t=t.return}}function Js(t,r){Ia=t,bu=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(er=!0),t.firstContext=null)}function Fr(t){var r=t._currentValue;if(bu!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(Ia===null)throw Error(p(308));Vs=t,Ia.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Ts=null;function js(t){Ts===null?Ts=[t]:Ts.push(t)}function Io(t,r,o,d){var f=r.interleaved;return f===null?(o.next=o,js(r)):(o.next=f.next,f.next=o),r.interleaved=o,Ni(t,d)}function Ni(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function _l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function ui(t,r,o){var d=t.updateQueue;if(d===null)return null;if(d=d.shared,(dt&2)!==0){var f=d.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),d.pending=r,Ni(t,o)}return f=d.interleaved,f===null?(r.next=r,js(d)):(r.next=f.next,f.next=r),d.interleaved=r,Ni(t,o)}function Oo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var d=r.lanes;d&=t.pendingLanes,o|=d,r.lanes=o,Wi(t,o)}}function Ma(t,r){var o=t.updateQueue,d=t.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var f=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var P={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?f=v=P:v=v.next=P,o=o.next}while(o!==null);v===null?f=v=r:v=v.next=r}else f=v=r;o={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:d.shared,effects:d.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Cl(t,r,o,d){var f=t.updateQueue;Qi=!1;var v=f.firstBaseUpdate,P=f.lastBaseUpdate,G=f.shared.pending;if(G!==null){f.shared.pending=null;var ee=G,fe=ee.next;ee.next=null,P===null?v=fe:P.next=fe,P=ee;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,G=Re.lastBaseUpdate,G!==P&&(G===null?Re.firstBaseUpdate=fe:G.next=fe,Re.lastBaseUpdate=ee))}if(v!==null){var Me=f.baseState;P=0,Re=fe=ee=null,G=v;do{var Pe=G.lane,Xe=G.eventTime;if((d&Pe)===Pe){Re!==null&&(Re=Re.next={eventTime:Xe,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var it=t,st=G;switch(Pe=r,Xe=o,st.tag){case 1:if(it=st.payload,typeof it=="function"){Me=it.call(Xe,Me,Pe);break e}Me=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Pe=typeof it=="function"?it.call(Xe,Me,Pe):it,Pe==null)break e;Me=$({},Me,Pe);break e;case 2:Qi=!0}}G.callback!==null&&G.lane!==0&&(t.flags|=64,Pe=f.effects,Pe===null?f.effects=[G]:Pe.push(G))}else Xe={eventTime:Xe,lane:Pe,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Re===null?(fe=Re=Xe,ee=Me):Re=Re.next=Xe,P|=Pe;if(G=G.next,G===null){if(G=f.shared.pending,G===null)break;Pe=G,G=Pe.next,Pe.next=null,f.lastBaseUpdate=Pe,f.shared.pending=null}}while(!0);if(Re===null&&(ee=Me),f.baseState=ee,f.firstBaseUpdate=fe,f.lastBaseUpdate=Re,r=f.shared.interleaved,r!==null){f=r;do P|=f.lane,f=f.next;while(f!==r)}else v===null&&(f.shared.lanes=0);kr|=P,t.lanes=P,t.memoizedState=Me}}function Qs(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var d=t[r],f=d.callback;if(f!==null){if(d.callback=null,d=o,typeof f!="function")throw Error(p(191,f));f.call(d)}}}var Da={},ci=oi(Da),za=oi(Da),Zi=oi(Da);function di(t){if(t===Da)throw Error(p(174));return t}function Zs(t,r){switch(Zt(Zi,r),Zt(za,t),Zt(ci,Da),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}nn(ci),Zt(ci,r)}function Li(){nn(ci),nn(za),nn(Zi)}function wu(t){di(Zi.current);var r=di(ci.current),o=at(r,t.type);r!==o&&(Zt(za,t),Zt(ci,o))}function ku(t){za.current===t&&(nn(ci),nn(za))}var ln=oi(0);function pi(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ns=[];function ea(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var Tl=H.ReactCurrentDispatcher,jl=H.ReactCurrentBatchConfig,ta=0,fn=null,Bn=null,Ot=null,Mo=!1,Do=!1,zo=0,dp=0;function Zn(){throw Error(p(321))}function Nl(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Cn(t[o],r[o]))return!1;return!0}function El(t,r,o,d,f,v){if(ta=v,fn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=t===null||t.memoizedState===null?hp:Iu,t=o(d,f),Do){v=0;do{if(Do=!1,zo=0,25<=v)throw Error(p(301));v+=1,Ot=Bn=null,r.updateQueue=null,Tl.current=Wo,t=o(d,f)}while(Do)}if(Tl.current=Fo,r=Bn!==null&&Bn.next!==null,ta=0,Ot=Bn=fn=null,Mo=!1,r)throw Error(p(300));return t}function Su(){var t=zo!==0;return zo=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?fn.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Jr(){if(Bn===null){var t=fn.alternate;t=t!==null?t.memoizedState:null}else t=Bn.next;var r=Ot===null?fn.memoizedState:Ot.next;if(r!==null)Ot=r,Bn=t;else{if(t===null)throw Error(p(310));Bn=t,t={memoizedState:Bn.memoizedState,baseState:Bn.baseState,baseQueue:Bn.baseQueue,queue:Bn.queue,next:null},Ot===null?fn.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Xr(t,r){return typeof r=="function"?r(t):r}function na(t){var r=Jr(),o=r.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=t;var d=Bn,f=d.baseQueue,v=o.pending;if(v!==null){if(f!==null){var P=f.next;f.next=v.next,v.next=P}d.baseQueue=f=v,o.pending=null}if(f!==null){v=f.next,d=d.baseState;var G=P=null,ee=null,fe=v;do{var Re=fe.lane;if((ta&Re)===Re)ee!==null&&(ee=ee.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),d=fe.hasEagerState?fe.eagerState:t(d,fe.action);else{var Me={lane:Re,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};ee===null?(G=ee=Me,P=d):ee=ee.next=Me,fn.lanes|=Re,kr|=Re}fe=fe.next}while(fe!==null&&fe!==v);ee===null?P=d:ee.next=G,Cn(d,r.memoizedState)||(er=!0),r.memoizedState=d,r.baseState=P,r.baseQueue=ee,o.lastRenderedState=d}if(t=o.interleaved,t!==null){f=t;do v=f.lane,fn.lanes|=v,kr|=v,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Fa(t){var r=Jr(),o=r.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=t;var d=o.dispatch,f=o.pending,v=r.memoizedState;if(f!==null){o.pending=null;var P=f=f.next;do v=t(v,P.action),P=P.next;while(P!==f);Cn(v,r.memoizedState)||(er=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),o.lastRenderedState=v}return[v,d]}function Wa(){}function Ai(t,r){var o=fn,d=Jr(),f=r(),v=!Cn(d.memoizedState,f);if(v&&(d.memoizedState=f,er=!0),d=d.queue,ju(ra.bind(null,o,d,t),[t]),d.getSnapshot!==r||v||Ot!==null&&Ot.memoizedState.tag&1){if(o.flags|=2048,Es(9,Dc.bind(null,o,d,f,r),void 0,null),zt===null)throw Error(p(349));(ta&30)!==0||Mc(o,r,f)}return f}function Mc(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=fn.updateQueue,r===null?(r={lastEffect:null,stores:null},fn.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Dc(t,r,o,d){r.value=o,r.getSnapshot=d,_u(r)&&Cu(t)}function ra(t,r,o){return o(function(){_u(r)&&Cu(t)})}function _u(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Cn(t,o)}catch{return!0}}function Cu(t){var r=Ni(t,1);r!==null&&ts(r,t,1,-1)}function Tu(t){var r=Pi();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},r.queue=t,t=t.dispatch=Pu.bind(null,fn,t),[r.memoizedState,t]}function Es(t,r,o,d){return t={tag:t,create:r,destroy:o,deps:d,next:null},r=fn.updateQueue,r===null?(r={lastEffect:null,stores:null},fn.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(d=o.next,o.next=t,t.next=d,r.lastEffect=t)),t}function ia(){return Jr().memoizedState}function Ha(t,r,o,d){var f=Pi();fn.flags|=t,f.memoizedState=Es(1|r,o,void 0,d===void 0?null:d)}function Ba(t,r,o,d){var f=Jr();d=d===void 0?null:d;var v=void 0;if(Bn!==null){var P=Bn.memoizedState;if(v=P.destroy,d!==null&&Nl(d,P.deps)){f.memoizedState=Es(r,o,v,d);return}}fn.flags|=t,f.memoizedState=Es(1|r,o,v,d)}function Ll(t,r){return Ha(8390656,8,t,r)}function ju(t,r){return Ba(2048,8,t,r)}function Ua(t,r){return Ba(4,2,t,r)}function Nu(t,r){return Ba(4,4,t,r)}function zc(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Eu(t,r,o){return o=o!=null?o.concat([t]):null,Ba(4,4,zc.bind(null,r,t),o)}function qa(){}function Fc(t,r){var o=Jr();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&Nl(r,d[1])?d[0]:(o.memoizedState=[t,r],t)}function Wc(t,r){var o=Jr();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&Nl(r,d[1])?d[0]:(t=t(),o.memoizedState=[t,r],t)}function Ka(t,r,o){return(ta&21)===0?(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=o):(Cn(o,r)||(o=io(),fn.lanes|=o,kr|=o,t.baseState=!0),r)}function Hc(t,r){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var d=jl.transition;jl.transition={};try{t(!1),r()}finally{Nt=o,jl.transition=d}}function Lu(){return Jr().memoizedState}function pp(t,r,o){var d=Va(t);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},Au(t))Bc(r,o);else if(o=Io(t,r,o,d),o!==null){var f=Wr();ts(o,t,d,f),Ru(o,r,d)}}function Pu(t,r,o){var d=Va(t),f={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(Au(t))Bc(r,f);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var P=r.lastRenderedState,G=v(P,o);if(f.hasEagerState=!0,f.eagerState=G,Cn(G,P)){var ee=r.interleaved;ee===null?(f.next=f,js(r)):(f.next=ee.next,ee.next=f),r.interleaved=f;return}}catch{}finally{}o=Io(t,r,f,d),o!==null&&(f=Wr(),ts(o,t,d,f),Ru(o,r,d))}}function Au(t){var r=t.alternate;return t===fn||r!==null&&r===fn}function Bc(t,r){Do=Mo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Ru(t,r,o){if((o&4194240)!==0){var d=r.lanes;d&=t.pendingLanes,o|=d,r.lanes=o,Wi(t,o)}}var Fo={readContext:Fr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},hp={readContext:Fr,useCallback:function(t,r){return Pi().memoizedState=[t,r===void 0?null:r],t},useContext:Fr,useEffect:Ll,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Ha(4194308,4,zc.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Ha(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ha(4,2,t,r)},useMemo:function(t,r){var o=Pi();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var d=Pi();return r=o!==void 0?o(r):r,d.memoizedState=d.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},d.queue=t,t=t.dispatch=pp.bind(null,fn,t),[d.memoizedState,t]},useRef:function(t){var r=Pi();return t={current:t},r.memoizedState=t},useState:Tu,useDebugValue:qa,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=Tu(!1),r=t[0];return t=Hc.bind(null,t[1]),Pi().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var d=fn,f=Pi();if(rn){if(o===void 0)throw Error(p(407));o=o()}else{if(o=r(),zt===null)throw Error(p(349));(ta&30)!==0||Mc(d,r,o)}f.memoizedState=o;var v={value:o,getSnapshot:r};return f.queue=v,Ll(ra.bind(null,d,v,t),[t]),d.flags|=2048,Es(9,Dc.bind(null,d,v,o,r),void 0,null),o},useId:function(){var t=Pi(),r=zt.identifierPrefix;if(rn){var o=ji,d=li;o=(d&~(1<<32-me(d)-1)).toString(32)+o,r=":"+r+"R"+o,o=zo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=dp++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Iu={readContext:Fr,useCallback:Fc,useContext:Fr,useEffect:ju,useImperativeHandle:Eu,useInsertionEffect:Ua,useLayoutEffect:Nu,useMemo:Wc,useReducer:na,useRef:ia,useState:function(){return na(Xr)},useDebugValue:qa,useDeferredValue:function(t){var r=Jr();return Ka(r,Bn.memoizedState,t)},useTransition:function(){var t=na(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Wa,useSyncExternalStore:Ai,useId:Lu,unstable_isNewReconciler:!1},Wo={readContext:Fr,useCallback:Fc,useContext:Fr,useEffect:ju,useImperativeHandle:Eu,useInsertionEffect:Ua,useLayoutEffect:Nu,useMemo:Wc,useReducer:Fa,useRef:ia,useState:function(){return Fa(Xr)},useDebugValue:qa,useDeferredValue:function(t){var r=Jr();return Bn===null?r.memoizedState=t:Ka(r,Bn.memoizedState,t)},useTransition:function(){var t=Fa(Xr)[0],r=Jr().memoizedState;return[t,r]},useMutableSource:Wa,useSyncExternalStore:Ai,useId:Lu,unstable_isNewReconciler:!1};function yr(t,r){if(t&&t.defaultProps){r=$({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Ou(t,r,o,d){r=t.memoizedState,o=o(d,r),o=o==null?r:$({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ho={isMounted:function(t){return(t=t._reactInternals)?Mn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var d=Wr(),f=Va(t),v=Ei(d,f);v.payload=r,o!=null&&(v.callback=o),r=ui(t,v,f),r!==null&&(ts(r,t,f,d),Oo(r,t,f))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var d=Wr(),f=Va(t),v=Ei(d,f);v.tag=1,v.payload=r,o!=null&&(v.callback=o),r=ui(t,v,f),r!==null&&(ts(r,t,f,d),Oo(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Wr(),d=Va(t),f=Ei(o,d);f.tag=2,r!=null&&(f.callback=r),r=ui(t,f,d),r!==null&&(ts(r,t,d,o),Oo(r,t,d))}};function Uc(t,r,o,d,f,v,P){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(d,v,P):r.prototype&&r.prototype.isPureReactComponent?!ka(o,d)||!ka(f,v):!0}function qc(t,r,o){var d=!1,f=ks,v=r.contextType;return typeof v=="object"&&v!==null?v=Fr(v):(f=ar(r)?Xi:Jn.current,d=r.contextTypes,v=(d=d!=null)?Na(t,f):ks),r=new r(o,v),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ho,t.stateNode=r,r._reactInternals=t,d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=v),r}function Kc(t,r,o,d){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,d),r.state!==t&&Ho.enqueueReplaceState(r,r.state,null)}function Mu(t,r,o,d){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},_l(t);var v=r.contextType;typeof v=="object"&&v!==null?f.context=Fr(v):(v=ar(r)?Xi:Jn.current,f.context=Na(t,v)),f.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ou(t,r,v,o),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Ho.enqueueReplaceState(f,f.state,null),Cl(t,o,f,d),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,r){try{var o="",d=r;do o+=qe(d),d=d.return;while(d);var f=o}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:r,stack:f,digest:null}}function Du(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function zu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var $c=typeof WeakMap=="function"?WeakMap:Map;function Pl(t,r,o){o=Ei(-1,o),o.tag=3,o.payload={element:null};var d=r.value;return o.callback=function(){Zc||(Zc=!0,mp=d),zu(t,r)},o}function Fu(t,r,o){o=Ei(-1,o),o.tag=3;var d=t.type.getDerivedStateFromError;if(typeof d=="function"){var f=r.value;o.payload=function(){return d(f)},o.callback=function(){zu(t,r)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){zu(t,r),typeof d!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),o}function Gc(t,r,o){var d=t.pingCache;if(d===null){d=t.pingCache=new $c;var f=new Set;d.set(r,f)}else f=d.get(r),f===void 0&&(f=new Set,d.set(r,f));f.has(o)||(f.add(o),t=tg.bind(null,t,r,o),r.then(t,t))}function Wu(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function aa(t,r,o,d,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ei(-1,1),r.tag=2,ui(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Yc=H.ReactCurrentOwner,er=!1;function vr(t,r,o,d){r.child=t===null?Ao(r,null,o,d):Cs(r,t.child,o,d)}function Vc(t,r,o,d,f){o=o.render;var v=r.ref;return Js(r,f),d=El(t,r,o,d,v,f),o=Su(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&o&&Gs(r),r.flags|=1,vr(t,r,d,f),r.child)}function Jc(t,r,o,d,f){if(t===null){var v=o.type;return typeof v=="function"&&!kp(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=v,en(t,r,v,d,f)):(t=sd(o.type,null,d,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(v=t.child,(t.lanes&f)===0){var P=v.memoizedProps;if(o=o.compare,o=o!==null?o:ka,o(P,d)&&t.ref===r.ref)return Pr(t,r,f)}return r.flags|=1,t=Xa(v,d),t.ref=r.ref,t.return=r,r.child=t}function en(t,r,o,d,f){if(t!==null){var v=t.memoizedProps;if(ka(v,d)&&t.ref===r.ref)if(er=!1,r.pendingProps=d=v,(t.lanes&f)!==0)(t.flags&131072)!==0&&(er=!0);else return r.lanes=t.lanes,Pr(t,r,f)}return oa(t,r,o,d,f)}function Xc(t,r,o){var d=r.pendingProps,f=d.children,v=t!==null?t.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(wr,Ut),Ut|=o;else{if((o&1073741824)===0)return t=v!==null?v.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Zt(wr,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:o,Zt(wr,Ut),Ut|=d}else v!==null?(d=v.baseLanes|o,r.memoizedState=null):d=o,Zt(wr,Ut),Ut|=d;return vr(t,r,f,o),r.child}function Al(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function oa(t,r,o,d,f){var v=ar(o)?Xi:Jn.current;return v=Na(r,v),Js(r,f),o=El(t,r,o,d,v,f),d=Su(),t!==null&&!er?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Pr(t,r,f)):(rn&&d&&Gs(r),r.flags|=1,vr(t,r,o,f),r.child)}function Qr(t,r,o,d,f){if(ar(o)){var v=!0;La(r)}else v=!1;if(Js(r,f),r.stateNode===null)Fl(t,r),qc(r,o,d),Mu(r,o,d,f),d=!0;else if(t===null){var P=r.stateNode,G=r.memoizedProps;P.props=G;var ee=P.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=Fr(fe):(fe=ar(o)?Xi:Jn.current,fe=Na(r,fe));var Re=o.getDerivedStateFromProps,Me=typeof Re=="function"||typeof P.getSnapshotBeforeUpdate=="function";Me||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(G!==d||ee!==fe)&&Kc(r,P,d,fe),Qi=!1;var Pe=r.memoizedState;P.state=Pe,Cl(r,d,P,f),ee=r.memoizedState,G!==d||Pe!==ee||mr.current||Qi?(typeof Re=="function"&&(Ou(r,o,Re,d),ee=r.memoizedState),(G=Qi||Uc(r,o,G,d,Pe,ee,fe))?(Me||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=ee),P.props=d,P.state=ee,P.context=fe,d=G):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{P=r.stateNode,Xs(t,r),G=r.memoizedProps,fe=r.type===r.elementType?G:yr(r.type,G),P.props=fe,Me=r.pendingProps,Pe=P.context,ee=o.contextType,typeof ee=="object"&&ee!==null?ee=Fr(ee):(ee=ar(o)?Xi:Jn.current,ee=Na(r,ee));var Xe=o.getDerivedStateFromProps;(Re=typeof Xe=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(G!==Me||Pe!==ee)&&Kc(r,P,d,ee),Qi=!1,Pe=r.memoizedState,P.state=Pe,Cl(r,d,P,f);var it=r.memoizedState;G!==Me||Pe!==it||mr.current||Qi?(typeof Xe=="function"&&(Ou(r,o,Xe,d),it=r.memoizedState),(fe=Qi||Uc(r,o,fe,d,Pe,it,ee)||!1)?(Re||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,it,ee),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,it,ee)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||G===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||G===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=it),P.props=d,P.state=it,P.context=ee,d=fe):(typeof P.componentDidUpdate!="function"||G===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||G===t.memoizedProps&&Pe===t.memoizedState||(r.flags|=1024),d=!1)}return $a(t,r,o,d,v,f)}function $a(t,r,o,d,f,v){Al(t,r);var P=(r.flags&128)!==0;if(!d&&!P)return f&&vu(r,o,!1),Pr(t,r,v);d=r.stateNode,Yc.current=r;var G=P&&typeof o.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,t!==null&&P?(r.child=Cs(r,t.child,null,v),r.child=Cs(r,null,G,v)):vr(t,r,G,v),r.memoizedState=d.state,f&&vu(r,o,!0),r.child}function Rl(t){var r=t.stateNode;r.pendingContext?gu(t,r.pendingContext,r.pendingContext!==r.context):r.context&&gu(t,r.context,!1),Zs(t,r.containerInfo)}function Hu(t,r,o,d,f){return Aa(),Ra(f),r.flags|=256,vr(t,r,o,d),r.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ol(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ml(t,r,o){var d=r.pendingProps,f=ln.current,v=!1,P=(r.flags&128)!==0,G;if((G=P)||(G=t!==null&&t.memoizedState===null?!1:(f&2)!==0),G?(v=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Zt(ln,f&1),t===null)return wl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=d.children,t=d.fallback,v?(d=r.mode,v=r.child,P={mode:"hidden",children:P},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=P):v=ad(P,d,0,null),t=Yo(t,d,o,null),v.return=r,t.return=r,v.sibling=t,r.child=v,r.child.memoizedState=Ol(o),r.memoizedState=Il,t):Dl(r,P));if(f=t.memoizedState,f!==null&&(G=f.dehydrated,G!==null))return Bu(t,r,P,d,G,f,o);if(v){v=d.fallback,P=r.mode,f=t.child,G=f.sibling;var ee={mode:"hidden",children:d.children};return(P&1)===0&&r.child!==f?(d=r.child,d.childLanes=0,d.pendingProps=ee,r.deletions=null):(d=Xa(f,ee),d.subtreeFlags=f.subtreeFlags&14680064),G!==null?v=Xa(G,v):(v=Yo(v,P,o,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,P=t.child.memoizedState,P=P===null?Ol(o):{baseLanes:P.baseLanes|o,cachePool:null,transitions:P.transitions},v.memoizedState=P,v.childLanes=t.childLanes&~o,r.memoizedState=Il,d}return v=t.child,t=v.sibling,d=Xa(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=o),d.return=r,d.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=d,r.memoizedState=null,d}function Dl(t,r){return r=ad({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function zl(t,r,o,d){return d!==null&&Ra(d),Cs(r,t.child,null,o),t=Dl(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Bu(t,r,o,d,f,v,P){if(o)return r.flags&256?(r.flags&=-257,d=Du(Error(p(422))),zl(t,r,P,d)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(v=d.fallback,f=r.mode,d=ad({mode:"visible",children:d.children},f,0,null),v=Yo(v,f,P,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&Cs(r,t.child,null,P),r.child.memoizedState=Ol(P),r.memoizedState=Il,v);if((r.mode&1)===0)return zl(t,r,P,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var G=d.dgst;return d=G,v=Error(p(419)),d=Du(v,d,void 0),zl(t,r,P,d)}if(G=(P&t.childLanes)!==0,er||G){if(d=zt,d!==null){switch(P&-P){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|P))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Ni(t,f),ts(d,t,f,-1))}return wp(),d=Du(Error(p(421))),zl(t,r,P,d)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=ng.bind(null,t),f._reactRetry=r,null):(t=v.treeContext,An=bs(f.nextSibling),gr=r,rn=!0,Vr=null,t!==null&&(Fn[Wn++]=li,Fn[Wn++]=ji,Fn[Wn++]=_s,li=t.id,ji=t.overflow,_s=r),r=Dl(r,d.children),r.flags|=4096,r)}function Uu(t,r,o){t.lanes|=r;var d=t.alternate;d!==null&&(d.lanes|=r),Oa(t.return,r,o)}function Mt(t,r,o,d,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:f}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=o,v.tailMode=f)}function qu(t,r,o){var d=r.pendingProps,f=d.revealOrder,v=d.tail;if(vr(t,r,d.children,o),d=ln.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uu(t,o,r);else if(t.tag===19)Uu(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}d&=1}if(Zt(ln,d),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)t=o.alternate,t!==null&&pi(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Mt(r,!1,f,o,v);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&pi(t)===null){r.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Mt(r,!0,o,null,v);break;case"together":Mt(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Pr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),kr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(p(153));if(r.child!==null){for(t=r.child,o=Xa(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Xa(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function fp(t,r,o){switch(r.tag){case 3:Rl(r),Aa();break;case 5:wu(r);break;case 1:ar(r.type)&&La(r);break;case 4:Zs(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,f=r.memoizedProps.value;Zt(Ro,d._currentValue),d._currentValue=f;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Zt(ln,ln.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Ml(t,r,o):(Zt(ln,ln.current&1),t=Pr(t,r,o),t!==null?t.sibling:null);Zt(ln,ln.current&1);break;case 19:if(d=(o&r.childLanes)!==0,(t.flags&128)!==0){if(d)return qu(t,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Zt(ln,ln.current),d)break;return null;case 22:case 23:return r.lanes=0,Xc(t,r,o)}return Pr(t,r,o)}var Bo,Ku,mn,Qc;Bo=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},mn=function(t,r,o,d){var f=t.memoizedProps;if(f!==d){t=r.stateNode,di(ci.current);var v=null;switch(o){case"input":f=Ct(t,f),d=Ct(t,d),v=[];break;case"select":f=$({},f,{value:void 0}),d=$({},d,{value:void 0}),v=[];break;case"textarea":f=se(t,f),d=se(t,d),v=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(t.onclick=xs)}Ur(o,d);var P;o=null;for(fe in f)if(!d.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var G=f[fe];for(P in G)G.hasOwnProperty(P)&&(o||(o={}),o[P]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(y.hasOwnProperty(fe)?v||(v=[]):(v=v||[]).push(fe,null));for(fe in d){var ee=d[fe];if(G=f!=null?f[fe]:void 0,d.hasOwnProperty(fe)&&ee!==G&&(ee!=null||G!=null))if(fe==="style")if(G){for(P in G)!G.hasOwnProperty(P)||ee&&ee.hasOwnProperty(P)||(o||(o={}),o[P]="");for(P in ee)ee.hasOwnProperty(P)&&G[P]!==ee[P]&&(o||(o={}),o[P]=ee[P])}else o||(v||(v=[]),v.push(fe,o)),o=ee;else fe==="dangerouslySetInnerHTML"?(ee=ee?ee.__html:void 0,G=G?G.__html:void 0,ee!=null&&G!==ee&&(v=v||[]).push(fe,ee)):fe==="children"?typeof ee!="string"&&typeof ee!="number"||(v=v||[]).push(fe,""+ee):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(y.hasOwnProperty(fe)?(ee!=null&&fe==="onScroll"&&Wt("scroll",t),v||G===ee||(v=[])):(v=v||[]).push(fe,ee))}o&&(v=v||[]).push("style",o);var fe=v;(r.updateQueue=fe)&&(r.flags|=4)}},Qc=function(t,r,o,d){o!==d&&(r.flags|=4)};function Uo(t,r){if(!rn)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:d.sibling=null}}function or(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,d=0;if(r)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=d,t.childLanes=o,r}function Wl(t,r,o){var d=r.pendingProps;switch(bl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return or(r),null;case 1:return ar(r.type)&&Ea(),or(r),null;case 3:return d=r.stateNode,Li(),nn(mr),nn(Jn),ea(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(t===null||t.child===null)&&(Lo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vr!==null&&(vp(Vr),Vr=null))),Ku(t,r),or(r),null;case 5:ku(r);var f=di(Zi.current);if(o=r.type,t!==null&&r.stateNode!=null)mn(t,r,o,d,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(p(166));return or(r),null}if(t=di(ci.current),Lo(r)){d=r.stateNode,o=r.type;var v=r.memoizedProps;switch(d[Ci]=r,d[jo]=v,t=(r.mode&1)!==0,o){case"dialog":Wt("cancel",d),Wt("close",d);break;case"iframe":case"object":case"embed":Wt("load",d);break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],d);break;case"source":Wt("error",d);break;case"img":case"image":case"link":Wt("error",d),Wt("load",d);break;case"details":Wt("toggle",d);break;case"input":xt(d,v),Wt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Wt("invalid",d);break;case"textarea":je(d,v),Wt("invalid",d)}Ur(o,v),f=null;for(var P in v)if(v.hasOwnProperty(P)){var G=v[P];P==="children"?typeof G=="string"?d.textContent!==G&&(v.suppressHydrationWarning!==!0&&Co(d.textContent,G,t),f=["children",G]):typeof G=="number"&&d.textContent!==""+G&&(v.suppressHydrationWarning!==!0&&Co(d.textContent,G,t),f=["children",""+G]):y.hasOwnProperty(P)&&G!=null&&P==="onScroll"&&Wt("scroll",d)}switch(o){case"input":$e(d),vt(d,v,!0);break;case"textarea":$e(d),kt(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=xs)}d=f,r.updateQueue=d,d!==null&&(r.flags|=4)}else{P=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=P.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof d.is=="string"?t=P.createElement(o,{is:d.is}):(t=P.createElement(o),o==="select"&&(P=t,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):t=P.createElementNS(t,o),t[Ci]=r,t[jo]=d,Bo(t,r,!1,!1),r.stateNode=t;e:{switch(P=bt(o,d),o){case"dialog":Wt("cancel",t),Wt("close",t),f=d;break;case"iframe":case"object":case"embed":Wt("load",t),f=d;break;case"video":case"audio":for(f=0;f<Ws.length;f++)Wt(Ws[f],t);f=d;break;case"source":Wt("error",t),f=d;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),f=d;break;case"details":Wt("toggle",t),f=d;break;case"input":xt(t,d),f=Ct(t,d),Wt("invalid",t);break;case"option":f=d;break;case"select":t._wrapperState={wasMultiple:!!d.multiple},f=$({},d,{value:void 0}),Wt("invalid",t);break;case"textarea":je(t,d),f=se(t,d),Wt("invalid",t);break;default:f=d}Ur(o,f),G=f;for(v in G)if(G.hasOwnProperty(v)){var ee=G[v];v==="style"?Rr(t,ee):v==="dangerouslySetInnerHTML"?(ee=ee?ee.__html:void 0,ee!=null&&mt(t,ee)):v==="children"?typeof ee=="string"?(o!=="textarea"||ee!=="")&&pt(t,ee):typeof ee=="number"&&pt(t,""+ee):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?ee!=null&&v==="onScroll"&&Wt("scroll",t):ee!=null&&B(t,v,ee,P))}switch(o){case"input":$e(t),vt(t,d,!1);break;case"textarea":$e(t),kt(t);break;case"option":d.value!=null&&t.setAttribute("value",""+Be(d.value));break;case"select":t.multiple=!!d.multiple,v=d.value,v!=null?ut(t,!!d.multiple,v,!1):d.defaultValue!=null&&ut(t,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=xs)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return or(r),null;case 6:if(t&&r.stateNode!=null)Qc(t,r,t.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(p(166));if(o=di(Zi.current),di(ci.current),Lo(r)){if(d=r.stateNode,o=r.memoizedProps,d[Ci]=r,(v=d.nodeValue!==o)&&(t=gr,t!==null))switch(t.tag){case 3:Co(d.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(d.nodeValue,o,(t.mode&1)!==0)}v&&(r.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[Ci]=r,r.stateNode=d}return or(r),null;case 13:if(nn(ln),d=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rn&&An!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ic(),Aa(),r.flags|=98560,v=!1;else if(v=Lo(r),d!==null&&d.dehydrated!==null){if(t===null){if(!v)throw Error(p(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(p(317));v[Ci]=r}else Aa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;or(r),v=!1}else Vr!==null&&(vp(Vr),Vr=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(d=d!==null,d!==(t!==null&&t.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ln.current&1)!==0?Lt===0&&(Lt=3):wp())),r.updateQueue!==null&&(r.flags|=4),or(r),null);case 4:return Li(),Ku(t,r),t===null&&ys(r.stateNode.containerInfo),or(r),null;case 10:return Hn(r.type._context),or(r),null;case 17:return ar(r.type)&&Ea(),or(r),null;case 19:if(nn(ln),v=r.memoizedState,v===null)return or(r),null;if(d=(r.flags&128)!==0,P=v.rendering,P===null)if(d)Uo(v,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(P=pi(t),P!==null){for(r.flags|=128,Uo(v,!1),d=P.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=o,o=r.child;o!==null;)v=o,t=d,v.flags&=14680066,P=v.alternate,P===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=P.childLanes,v.lanes=P.lanes,v.child=P.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=P.memoizedProps,v.memoizedState=P.memoizedState,v.updateQueue=P.updateQueue,v.type=P.type,t=P.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Zt(ln,ln.current&1|2),r.child}t=t.sibling}v.tail!==null&&Rt()>Hl&&(r.flags|=128,d=!0,Uo(v,!1),r.lanes=4194304)}else{if(!d)if(t=pi(P),t!==null){if(r.flags|=128,d=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Uo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!P.alternate&&!rn)return or(r),null}else 2*Rt()-v.renderingStartTime>Hl&&o!==1073741824&&(r.flags|=128,d=!0,Uo(v,!1),r.lanes=4194304);v.isBackwards?(P.sibling=r.child,r.child=P):(o=v.last,o!==null?o.sibling=P:r.child=P,v.last=P)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Rt(),r.sibling=null,o=ln.current,Zt(ln,d?o&1|2:o&1),r):(or(r),null);case 22:case 23:return bp(),d=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(or(r),r.subtreeFlags&6&&(r.flags|=8192)):or(r),null;case 24:return null;case 25:return null}throw Error(p(156,r.tag))}function e(t,r){switch(bl(r),r.tag){case 1:return ar(r.type)&&Ea(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Li(),nn(mr),nn(Jn),ea(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return ku(r),null;case 13:if(nn(ln),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(p(340));Aa()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return nn(ln),null;case 4:return Li(),null;case 10:return Hn(r.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var n=!1,s=!1,i=typeof WeakSet=="function"?WeakSet:Set,a=null;function h(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){In(t,r,d)}else o.current=null}function m(t,r,o){try{o()}catch(d){In(t,r,d)}}var x=!1;function w(t,r){if(gl=ne,t=pu(),yo(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var f=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var P=0,G=-1,ee=-1,fe=0,Re=0,Me=t,Pe=null;t:for(;;){for(var Xe;Me!==o||f!==0&&Me.nodeType!==3||(G=P+f),Me!==v||d!==0&&Me.nodeType!==3||(ee=P+d),Me.nodeType===3&&(P+=Me.nodeValue.length),(Xe=Me.firstChild)!==null;)Pe=Me,Me=Xe;for(;;){if(Me===t)break t;if(Pe===o&&++fe===f&&(G=P),Pe===v&&++Re===d&&(ee=P),(Xe=Me.nextSibling)!==null)break;Me=Pe,Pe=Me.parentNode}Me=Xe}o=G===-1||ee===-1?null:{start:G,end:ee}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yi={focusedElem:t,selectionRange:o},ne=!1,a=r;a!==null;)if(r=a,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,a=t;else for(;a!==null;){r=a;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,Kn=it.memoizedState,ue=r.stateNode,re=ue.getSnapshotBeforeUpdate(r.elementType===r.type?st:yr(r.type,st),Kn);ue.__reactInternalSnapshotBeforeUpdate=re}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(We){In(r,r.return,We)}if(t=r.sibling,t!==null){t.return=r.return,a=t;break}a=r.return}return it=x,x=!1,it}function _(t,r,o){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&t)===t){var v=f.destroy;f.destroy=void 0,v!==void 0&&m(r,o,v)}f=f.next}while(f!==d)}}function z(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var d=o.create;o.destroy=d()}o=o.next}while(o!==r)}}function q(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function ie(t){var r=t.alternate;r!==null&&(t.alternate=null,ie(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ci],delete r[jo],delete r[mu],delete r[up],delete r[cp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function te(t){return t.tag===5||t.tag===3||t.tag===4}function ge(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||te(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function be(t,r,o){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=xs));else if(d!==4&&(t=t.child,t!==null))for(be(t,r,o),t=t.sibling;t!==null;)be(t,r,o),t=t.sibling}function Ae(t,r,o){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(d!==4&&(t=t.child,t!==null))for(Ae(t,r,o),t=t.sibling;t!==null;)Ae(t,r,o),t=t.sibling}var Ee=null,ze=!1;function De(t,r,o){for(o=o.child;o!==null;)Ge(t,r,o),o=o.sibling}function Ge(t,r,o){if(T&&typeof T.onCommitFiberUnmount=="function")try{T.onCommitFiberUnmount(Yn,o)}catch{}switch(o.tag){case 5:s||h(o,r);case 6:var d=Ee,f=ze;Ee=null,De(t,r,o),Ee=d,ze=f,Ee!==null&&(ze?(t=Ee,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ee.removeChild(o.stateNode));break;case 18:Ee!==null&&(ze?(t=Ee,o=o.stateNode,t.nodeType===8?yl(t.parentNode,o):t.nodeType===1&&yl(t,o),_e(t)):yl(Ee,o.stateNode));break;case 4:d=Ee,f=ze,Ee=o.stateNode.containerInfo,ze=!0,De(t,r,o),Ee=d,ze=f;break;case 0:case 11:case 14:case 15:if(!s&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var v=f,P=v.destroy;v=v.tag,P!==void 0&&((v&2)!==0||(v&4)!==0)&&m(o,r,P),f=f.next}while(f!==d)}De(t,r,o);break;case 1:if(!s&&(h(o,r),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch(G){In(o,r,G)}De(t,r,o);break;case 21:De(t,r,o);break;case 22:o.mode&1?(s=(d=s)||o.memoizedState!==null,De(t,r,o),s=d):De(t,r,o);break;default:De(t,r,o)}}function ot(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new i),r.forEach(function(d){var f=rg.bind(null,t,d);o.has(d)||(o.add(d),d.then(f,f))})}}function Ve(t,r){var o=r.deletions;if(o!==null)for(var d=0;d<o.length;d++){var f=o[d];try{var v=t,P=r,G=P;e:for(;G!==null;){switch(G.tag){case 5:Ee=G.stateNode,ze=!1;break e;case 3:Ee=G.stateNode.containerInfo,ze=!0;break e;case 4:Ee=G.stateNode.containerInfo,ze=!0;break e}G=G.return}if(Ee===null)throw Error(p(160));Ge(v,P,f),Ee=null,ze=!1;var ee=f.alternate;ee!==null&&(ee.return=null),f.return=null}catch(fe){In(f,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)St(r,t),r=r.sibling}function St(t,r){var o=t.alternate,d=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ve(r,t),Et(t),d&4){try{_(3,t,t.return),z(3,t)}catch(st){In(t,t.return,st)}try{_(5,t,t.return)}catch(st){In(t,t.return,st)}}break;case 1:Ve(r,t),Et(t),d&512&&o!==null&&h(o,o.return);break;case 5:if(Ve(r,t),Et(t),d&512&&o!==null&&h(o,o.return),t.flags&32){var f=t.stateNode;try{pt(f,"")}catch(st){In(t,t.return,st)}}if(d&4&&(f=t.stateNode,f!=null)){var v=t.memoizedProps,P=o!==null?o.memoizedProps:v,G=t.type,ee=t.updateQueue;if(t.updateQueue=null,ee!==null)try{G==="input"&&v.type==="radio"&&v.name!=null&&tt(f,v),bt(G,P);var fe=bt(G,v);for(P=0;P<ee.length;P+=2){var Re=ee[P],Me=ee[P+1];Re==="style"?Rr(f,Me):Re==="dangerouslySetInnerHTML"?mt(f,Me):Re==="children"?pt(f,Me):B(f,Re,Me,fe)}switch(G){case"input":Ue(f,v);break;case"textarea":he(f,v);break;case"select":var Pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Xe=v.value;Xe!=null?ut(f,!!v.multiple,Xe,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?ut(f,!!v.multiple,v.defaultValue,!0):ut(f,!!v.multiple,v.multiple?[]:"",!1))}f[jo]=v}catch(st){In(t,t.return,st)}}break;case 6:if(Ve(r,t),Et(t),d&4){if(t.stateNode===null)throw Error(p(162));f=t.stateNode,v=t.memoizedProps;try{f.nodeValue=v}catch(st){In(t,t.return,st)}}break;case 3:if(Ve(r,t),Et(t),d&4&&o!==null&&o.memoizedState.isDehydrated)try{_e(r.containerInfo)}catch(st){In(t,t.return,st)}break;case 4:Ve(r,t),Et(t);break;case 13:Ve(r,t),Et(t),f=t.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(qo=Rt())),d&4&&ot(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(s=(fe=s)||Re,Ve(r,t),s=fe):Ve(r,t),Et(t),d&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!Re&&(t.mode&1)!==0)for(a=t,Re=t.child;Re!==null;){for(Me=a=Re;a!==null;){switch(Pe=a,Xe=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:_(4,Pe,Pe.return);break;case 1:h(Pe,Pe.return);var it=Pe.stateNode;if(typeof it.componentWillUnmount=="function"){d=Pe,o=Pe.return;try{r=d,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){In(d,o,st)}}break;case 5:h(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){lr(Me);continue}}Xe!==null?(Xe.return=Pe,a=Xe):lr(Me)}Re=Re.sibling}e:for(Re=null,Me=t;;){if(Me.tag===5){if(Re===null){Re=Me;try{f=Me.stateNode,fe?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(G=Me.stateNode,ee=Me.memoizedProps.style,P=ee!=null&&ee.hasOwnProperty("display")?ee.display:null,G.style.display=Sr("display",P))}catch(st){In(t,t.return,st)}}}else if(Me.tag===6){if(Re===null)try{Me.stateNode.nodeValue=fe?"":Me.memoizedProps}catch(st){In(t,t.return,st)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;Re===Me&&(Re=null),Me=Me.return}Re===Me&&(Re=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ve(r,t),Et(t),d&4&&ot(t);break;case 21:break;default:Ve(r,t),Et(t)}}function Et(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(te(o)){var d=o;break e}o=o.return}throw Error(p(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(pt(f,""),d.flags&=-33);var v=ge(t);Ae(t,v,f);break;case 3:case 4:var P=d.stateNode.containerInfo,G=ge(t);be(t,G,P);break;default:throw Error(p(161))}}catch(ee){In(t,t.return,ee)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Un(t,r,o){a=t,sn(t)}function sn(t,r,o){for(var d=(t.mode&1)!==0;a!==null;){var f=a,v=f.child;if(f.tag===22&&d){var P=f.memoizedState!==null||n;if(!P){var G=f.alternate,ee=G!==null&&G.memoizedState!==null||s;G=n;var fe=s;if(n=P,(s=ee)&&!fe)for(a=f;a!==null;)P=a,ee=P.child,P.tag===22&&P.memoizedState!==null?vn(f):ee!==null?(ee.return=P,a=ee):vn(f);for(;v!==null;)a=v,sn(v),v=v.sibling;a=f,n=G,s=fe}xr(t)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,a=v):xr(t)}}function xr(t){for(;a!==null;){var r=a;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:s||z(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!s)if(o===null)d.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:yr(r.type,o.memoizedProps);d.componentDidUpdate(f,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Qs(r,v,d);break;case 3:var P=r.updateQueue;if(P!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Qs(r,P,o)}break;case 5:var G=r.stateNode;if(o===null&&r.flags&4){o=G;var ee=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":ee.autoFocus&&o.focus();break;case"img":ee.src&&(o.src=ee.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Re=fe.memoizedState;if(Re!==null){var Me=Re.dehydrated;Me!==null&&_e(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}s||r.flags&512&&q(r)}catch(Pe){In(r,r.return,Pe)}}if(r===t){a=null;break}if(o=r.sibling,o!==null){o.return=r.return,a=o;break}a=r.return}}function lr(t){for(;a!==null;){var r=a;if(r===t){a=null;break}var o=r.sibling;if(o!==null){o.return=r.return,a=o;break}a=r.return}}function vn(t){for(;a!==null;){var r=a;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{z(4,r)}catch(ee){In(r,o,ee)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var f=r.return;try{d.componentDidMount()}catch(ee){In(r,f,ee)}}var v=r.return;try{q(r)}catch(ee){In(r,v,ee)}break;case 5:var P=r.return;try{q(r)}catch(ee){In(r,P,ee)}}}catch(ee){In(r,r.return,ee)}if(r===t){a=null;break}var G=r.sibling;if(G!==null){G.return=r.return,a=G;break}a=r.return}}var br=Math.ceil,jn=H.ReactCurrentDispatcher,xn=H.ReactCurrentOwner,Dt=H.ReactCurrentBatchConfig,dt=0,zt=null,an=null,un=0,Ut=0,wr=oi(0),Lt=0,la=null,kr=0,Ri=0,es=0,Rn=null,qn=null,qo=0,Hl=1/0,ua=null,Zc=!1,mp=null,Ga=null,ed=!1,Ya=null,td=0,$u=0,gp=null,nd=-1,rd=0;function Wr(){return(dt&6)!==0?Rt():nd!==-1?nd:nd=Rt()}function Va(t){return(t.mode&1)===0?1:(dt&2)!==0&&un!==0?un&-un:Oc.transition!==null?(rd===0&&(rd=io()),rd):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:dn(t.type)),t)}function ts(t,r,o,d){if(50<$u)throw $u=0,gp=null,Error(p(185));rr(t,o,d),((dt&2)===0||t!==zt)&&(t===zt&&((dt&2)===0&&(Ri|=o),Lt===4&&Ja(t,un)),Zr(t,d),o===1&&dt===0&&(r.mode&1)===0&&(Hl=Rt()+500,vl&&Ss()))}function Zr(t,r){var o=t.callbackNode;gt(t,r);var d=Kr(t,t===zt?un:0);if(d===0)o!==null&&Bt(o),t.callbackNode=null,t.callbackPriority=0;else if(r=d&-d,t.callbackPriority!==r){if(o!=null&&Bt(o),r===1)t.tag===0?Pc(Eh.bind(null,t)):Ti(Eh.bind(null,t)),Ec(function(){(dt&6)===0&&Ss()}),o=null;else{switch(ds(d)){case 1:o=ri;break;case 4:o=Vt;break;case 16:o=Je;break;case 536870912:o=cs;break;default:o=Je}o=Dh(o,Nh.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Nh(t,r){if(nd=-1,rd=0,(dt&6)!==0)throw Error(p(327));var o=t.callbackNode;if(Bl()&&t.callbackNode!==o)return null;var d=Kr(t,t===zt?un:0);if(d===0)return null;if((d&30)!==0||(d&t.expiredLanes)!==0||r)r=id(t,d);else{r=d;var f=dt;dt|=2;var v=Ph();(zt!==t||un!==r)&&(ua=null,Hl=Rt()+500,$o(t,r));do try{Zm();break}catch(G){Lh(t,G)}while(!0);Sl(),jn.current=v,dt=f,an!==null?r=0:(zt=null,un=0,r=Lt)}if(r!==0){if(r===2&&(f=ro(t),f!==0&&(d=f,r=yp(t,f))),r===1)throw o=la,$o(t,0),Ja(t,d),Zr(t,Rt()),o;if(r===6)Ja(t,d);else{if(f=t.current.alternate,(d&30)===0&&!Xm(f)&&(r=id(t,d),r===2&&(v=ro(t),v!==0&&(d=v,r=yp(t,v))),r===1))throw o=la,$o(t,0),Ja(t,d),Zr(t,Rt()),o;switch(t.finishedWork=f,t.finishedLanes=d,r){case 0:case 1:throw Error(p(345));case 2:Go(t,qn,ua);break;case 3:if(Ja(t,d),(d&130023424)===d&&(r=qo+500-Rt(),10<r)){if(Kr(t,0)!==0)break;if(f=t.suspendedLanes,(f&d)!==d){Wr(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Vi(Go.bind(null,t,qn,ua),r);break}Go(t,qn,ua);break;case 4:if(Ja(t,d),(d&4194240)===d)break;for(r=t.eventTimes,f=-1;0<d;){var P=31-me(d);v=1<<P,P=r[P],P>f&&(f=P),d&=~v}if(d=f,d=Rt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*br(d/1960))-d,10<d){t.timeoutHandle=Vi(Go.bind(null,t,qn,ua),d);break}Go(t,qn,ua);break;case 5:Go(t,qn,ua);break;default:throw Error(p(329))}}}return Zr(t,Rt()),t.callbackNode===o?Nh.bind(null,t):null}function yp(t,r){var o=Rn;return t.current.memoizedState.isDehydrated&&($o(t,r).flags|=256),t=id(t,r),t!==2&&(r=qn,qn=o,r!==null&&vp(r)),t}function vp(t){qn===null?qn=t:qn.push.apply(qn,t)}function Xm(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var f=o[d],v=f.getSnapshot;f=f.value;try{if(!Cn(v(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ja(t,r){for(r&=~es,r&=~Ri,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-me(r),d=1<<o;t[o]=-1,r&=~d}}function Eh(t){if((dt&6)!==0)throw Error(p(327));Bl();var r=Kr(t,0);if((r&1)===0)return Zr(t,Rt()),null;var o=id(t,r);if(t.tag!==0&&o===2){var d=ro(t);d!==0&&(r=d,o=yp(t,d))}if(o===1)throw o=la,$o(t,0),Ja(t,r),Zr(t,Rt()),o;if(o===6)throw Error(p(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Go(t,qn,ua),Zr(t,Rt()),null}function xp(t,r){var o=dt;dt|=1;try{return t(r)}finally{dt=o,dt===0&&(Hl=Rt()+500,vl&&Ss())}}function Ko(t){Ya!==null&&Ya.tag===0&&(dt&6)===0&&Bl();var r=dt;dt|=1;var o=Dt.transition,d=Nt;try{if(Dt.transition=null,Nt=1,t)return t()}finally{Nt=d,Dt.transition=o,dt=r,(dt&6)===0&&Ss()}}function bp(){Ut=wr.current,nn(wr)}function $o(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,To(o)),an!==null)for(o=an.return;o!==null;){var d=o;switch(bl(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ea();break;case 3:Li(),nn(mr),nn(Jn),ea();break;case 5:ku(d);break;case 4:Li();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Hn(d.type._context);break;case 22:case 23:bp()}o=o.return}if(zt=t,an=t=Xa(t.current,null),un=Ut=r,Lt=0,la=null,es=Ri=kr=0,qn=Rn=null,Ts!==null){for(r=0;r<Ts.length;r++)if(o=Ts[r],d=o.interleaved,d!==null){o.interleaved=null;var f=d.next,v=o.pending;if(v!==null){var P=v.next;v.next=f,d.next=P}o.pending=d}Ts=null}return t}function Lh(t,r){do{var o=an;try{if(Sl(),Tl.current=Fo,Mo){for(var d=fn.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Mo=!1}if(ta=0,Ot=Bn=fn=null,Do=!1,zo=0,xn.current=null,o===null||o.return===null){Lt=1,la=r,an=null;break}e:{var v=t,P=o.return,G=o,ee=r;if(r=un,G.flags|=32768,ee!==null&&typeof ee=="object"&&typeof ee.then=="function"){var fe=ee,Re=G,Me=Re.tag;if((Re.mode&1)===0&&(Me===0||Me===11||Me===15)){var Pe=Re.alternate;Pe?(Re.updateQueue=Pe.updateQueue,Re.memoizedState=Pe.memoizedState,Re.lanes=Pe.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Xe=Wu(P);if(Xe!==null){Xe.flags&=-257,aa(Xe,P,G,v,r),Xe.mode&1&&Gc(v,fe,r),r=Xe,ee=fe;var it=r.updateQueue;if(it===null){var st=new Set;st.add(ee),r.updateQueue=st}else it.add(ee);break e}else{if((r&1)===0){Gc(v,fe,r),wp();break e}ee=Error(p(426))}}else if(rn&&G.mode&1){var Kn=Wu(P);if(Kn!==null){(Kn.flags&65536)===0&&(Kn.flags|=256),aa(Kn,P,G,v,r),Ra(sa(ee,G));break e}}v=ee=sa(ee,G),Lt!==4&&(Lt=2),Rn===null?Rn=[v]:Rn.push(v),v=P;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ue=Pl(v,ee,r);Ma(v,ue);break e;case 1:G=ee;var re=v.type,de=v.stateNode;if((v.flags&128)===0&&(typeof re.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Ga===null||!Ga.has(de)))){v.flags|=65536,r&=-r,v.lanes|=r;var We=Fu(v,G,r);Ma(v,We);break e}}v=v.return}while(v!==null)}Rh(o)}catch(lt){r=lt,an===o&&o!==null&&(an=o=o.return);continue}break}while(!0)}function Ph(){var t=jn.current;return jn.current=Fo,t===null?Fo:t}function wp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||(kr&268435455)===0&&(Ri&268435455)===0||Ja(zt,un)}function id(t,r){var o=dt;dt|=2;var d=Ph();(zt!==t||un!==r)&&(ua=null,$o(t,r));do try{Qm();break}catch(f){Lh(t,f)}while(!0);if(Sl(),dt=o,jn.current=d,an!==null)throw Error(p(261));return zt=null,un=0,Lt}function Qm(){for(;an!==null;)Ah(an)}function Zm(){for(;an!==null&&!Mr();)Ah(an)}function Ah(t){var r=Mh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?Rh(t):an=r,xn.current=null}function Rh(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Wl(o,r,Ut),o!==null){an=o;return}}else{if(o=e(o,r),o!==null){o.flags&=32767,an=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=t}while(r!==null);Lt===0&&(Lt=5)}function Go(t,r,o){var d=Nt,f=Dt.transition;try{Dt.transition=null,Nt=1,eg(t,r,o,d)}finally{Dt.transition=f,Nt=d}return null}function eg(t,r,o,d){do Bl();while(Ya!==null);if((dt&6)!==0)throw Error(p(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(p(177));t.callbackNode=null,t.callbackPriority=0;var v=o.lanes|o.childLanes;if(so(t,v),t===zt&&(an=zt=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ed||(ed=!0,Dh(Je,function(){return Bl(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=Dt.transition,Dt.transition=null;var P=Nt;Nt=1;var G=dt;dt|=4,xn.current=null,w(t,o),St(o,t),sp(Yi),ne=!!gl,Yi=gl=null,t.current=o,Un(o),us(),dt=G,Nt=P,Dt.transition=v}else t.current=o;if(ed&&(ed=!1,Ya=t,td=f),v=t.pendingLanes,v===0&&(Ga=null),U(o.stateNode),Zr(t,Rt()),r!==null)for(d=t.onRecoverableError,o=0;o<r.length;o++)f=r[o],d(f.value,{componentStack:f.stack,digest:f.digest});if(Zc)throw Zc=!1,t=mp,mp=null,t;return(td&1)!==0&&t.tag!==0&&Bl(),v=t.pendingLanes,(v&1)!==0?t===gp?$u++:($u=0,gp=t):$u=0,Ss(),null}function Bl(){if(Ya!==null){var t=ds(td),r=Dt.transition,o=Nt;try{if(Dt.transition=null,Nt=16>t?16:t,Ya===null)var d=!1;else{if(t=Ya,Ya=null,td=0,(dt&6)!==0)throw Error(p(331));var f=dt;for(dt|=4,a=t.current;a!==null;){var v=a,P=v.child;if((a.flags&16)!==0){var G=v.deletions;if(G!==null){for(var ee=0;ee<G.length;ee++){var fe=G[ee];for(a=fe;a!==null;){var Re=a;switch(Re.tag){case 0:case 11:case 15:_(8,Re,v)}var Me=Re.child;if(Me!==null)Me.return=Re,a=Me;else for(;a!==null;){Re=a;var Pe=Re.sibling,Xe=Re.return;if(ie(Re),Re===fe){a=null;break}if(Pe!==null){Pe.return=Xe,a=Pe;break}a=Xe}}}var it=v.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var Kn=st.sibling;st.sibling=null,st=Kn}while(st!==null)}}a=v}}if((v.subtreeFlags&2064)!==0&&P!==null)P.return=v,a=P;else e:for(;a!==null;){if(v=a,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:_(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,a=ue;break e}a=v.return}}var re=t.current;for(a=re;a!==null;){P=a;var de=P.child;if((P.subtreeFlags&2064)!==0&&de!==null)de.return=P,a=de;else e:for(P=re;a!==null;){if(G=a,(G.flags&2048)!==0)try{switch(G.tag){case 0:case 11:case 15:z(9,G)}}catch(lt){In(G,G.return,lt)}if(G===P){a=null;break e}var We=G.sibling;if(We!==null){We.return=G.return,a=We;break e}a=G.return}}if(dt=f,Ss(),T&&typeof T.onPostCommitFiberRoot=="function")try{T.onPostCommitFiberRoot(Yn,t)}catch{}d=!0}return d}finally{Nt=o,Dt.transition=r}}return!1}function Ih(t,r,o){r=sa(o,r),r=Pl(t,r,1),t=ui(t,r,1),r=Wr(),t!==null&&(rr(t,1,r),Zr(t,r))}function In(t,r,o){if(t.tag===3)Ih(t,t,o);else for(;r!==null;){if(r.tag===3){Ih(r,t,o);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))){t=sa(o,t),t=Fu(r,t,1),r=ui(r,t,1),t=Wr(),r!==null&&(rr(r,1,t),Zr(r,t));break}}r=r.return}}function tg(t,r,o){var d=t.pingCache;d!==null&&d.delete(r),r=Wr(),t.pingedLanes|=t.suspendedLanes&o,zt===t&&(un&o)===o&&(Lt===4||Lt===3&&(un&130023424)===un&&500>Rt()-qo?$o(t,0):es|=o),Zr(t,r)}function Oh(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=Wr();t=Ni(t,r),t!==null&&(rr(t,r,o),Zr(t,o))}function ng(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Oh(t,o)}function rg(t,r){var o=0;switch(t.tag){case 13:var d=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:d=t.stateNode;break;default:throw Error(p(314))}d!==null&&d.delete(r),Oh(t,o)}var Mh;Mh=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||mr.current)er=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return er=!1,fp(t,r,o);er=(t.flags&131072)!==0}else er=!1,rn&&(r.flags&1048576)!==0&&xl(r,Lr,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Fl(t,r),t=r.pendingProps;var f=Na(r,Jn.current);Js(r,o),f=El(null,r,d,t,f,o);var v=Su();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(d)?(v=!0,La(r)):v=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,_l(r),f.updater=Ho,r.stateNode=f,f._reactInternals=r,Mu(r,d,t,o),r=$a(null,r,d,!0,v,o)):(r.tag=0,rn&&v&&Gs(r),vr(null,r,f,o),r=r.child),r;case 16:d=r.elementType;e:{switch(Fl(t,r),t=r.pendingProps,f=d._init,d=f(d._payload),r.type=d,f=r.tag=sg(d),t=yr(d,t),f){case 0:r=oa(null,r,d,t,o);break e;case 1:r=Qr(null,r,d,t,o);break e;case 11:r=Vc(null,r,d,t,o);break e;case 14:r=Jc(null,r,d,yr(d.type,t),o);break e}throw Error(p(306,d,""))}return r;case 0:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),oa(t,r,d,f,o);case 1:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Qr(t,r,d,f,o);case 3:e:{if(Rl(r),t===null)throw Error(p(387));d=r.pendingProps,v=r.memoizedState,f=v.element,Xs(t,r),Cl(r,d,null,o);var P=r.memoizedState;if(d=P.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){f=sa(Error(p(423)),r),r=Hu(t,r,d,o,f);break e}else if(d!==f){f=sa(Error(p(424)),r),r=Hu(t,r,d,o,f);break e}else for(An=bs(r.stateNode.containerInfo.firstChild),gr=r,rn=!0,Vr=null,o=Ao(r,null,d,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Aa(),d===f){r=Pr(t,r,o);break e}vr(t,r,d,o)}r=r.child}return r;case 5:return wu(r),t===null&&wl(r),d=r.type,f=r.pendingProps,v=t!==null?t.memoizedProps:null,P=f.children,Bs(d,f)?P=null:v!==null&&Bs(d,v)&&(r.flags|=32),Al(t,r),vr(t,r,P,o),r.child;case 6:return t===null&&wl(r),null;case 13:return Ml(t,r,o);case 4:return Zs(r,r.stateNode.containerInfo),d=r.pendingProps,t===null?r.child=Cs(r,null,d,o):vr(t,r,d,o),r.child;case 11:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Vc(t,r,d,f,o);case 7:return vr(t,r,r.pendingProps,o),r.child;case 8:return vr(t,r,r.pendingProps.children,o),r.child;case 12:return vr(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(d=r.type._context,f=r.pendingProps,v=r.memoizedProps,P=f.value,Zt(Ro,d._currentValue),d._currentValue=P,v!==null)if(Cn(v.value,P)){if(v.children===f.children&&!mr.current){r=Pr(t,r,o);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var G=v.dependencies;if(G!==null){P=v.child;for(var ee=G.firstContext;ee!==null;){if(ee.context===d){if(v.tag===1){ee=Ei(-1,o&-o),ee.tag=2;var fe=v.updateQueue;if(fe!==null){fe=fe.shared;var Re=fe.pending;Re===null?ee.next=ee:(ee.next=Re.next,Re.next=ee),fe.pending=ee}}v.lanes|=o,ee=v.alternate,ee!==null&&(ee.lanes|=o),Oa(v.return,o,r),G.lanes|=o;break}ee=ee.next}}else if(v.tag===10)P=v.type===r.type?null:v.child;else if(v.tag===18){if(P=v.return,P===null)throw Error(p(341));P.lanes|=o,G=P.alternate,G!==null&&(G.lanes|=o),Oa(P,o,r),P=v.sibling}else P=v.child;if(P!==null)P.return=v;else for(P=v;P!==null;){if(P===r){P=null;break}if(v=P.sibling,v!==null){v.return=P.return,P=v;break}P=P.return}v=P}vr(t,r,f.children,o),r=r.child}return r;case 9:return f=r.type,d=r.pendingProps.children,Js(r,o),f=Fr(f),d=d(f),r.flags|=1,vr(t,r,d,o),r.child;case 14:return d=r.type,f=yr(d,r.pendingProps),f=yr(d.type,f),Jc(t,r,d,f,o);case 15:return en(t,r,r.type,r.pendingProps,o);case 17:return d=r.type,f=r.pendingProps,f=r.elementType===d?f:yr(d,f),Fl(t,r),r.tag=1,ar(d)?(t=!0,La(r)):t=!1,Js(r,o),qc(r,d,f),Mu(r,d,f,o),$a(null,r,d,!0,t,o);case 19:return qu(t,r,o);case 22:return Xc(t,r,o)}throw Error(p(156,r.tag))};function Dh(t,r){return Di(t,r)}function ig(t,r,o,d){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(t,r,o,d){return new ig(t,r,o,d)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sg(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===L)return 14}return 2}function Xa(t,r){var o=t.alternate;return o===null?(o=Ii(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sd(t,r,o,d,f,v){var P=2;if(d=t,typeof t=="function")kp(t)&&(P=1);else if(typeof t=="string")P=5;else e:switch(t){case le:return Yo(o.children,f,v,r);case ve:P=8,f|=8;break;case Fe:return t=Ii(12,o,r,f|2),t.elementType=Fe,t.lanes=v,t;case oe:return t=Ii(13,o,r,f),t.elementType=oe,t.lanes=v,t;case ye:return t=Ii(19,o,r,f),t.elementType=ye,t.lanes=v,t;case K:return ad(o,f,v,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Te:P=10;break e;case ae:P=9;break e;case Ce:P=11;break e;case L:P=14;break e;case Q:P=16,d=null;break e}throw Error(p(130,t==null?t:typeof t,""))}return r=Ii(P,o,r,f),r.elementType=t,r.type=d,r.lanes=v,r}function Yo(t,r,o,d){return t=Ii(7,t,d,r),t.lanes=o,t}function ad(t,r,o,d){return t=Ii(22,t,d,r),t.elementType=K,t.lanes=o,t.stateNode={isHidden:!1},t}function Sp(t,r,o){return t=Ii(6,t,null,r),t.lanes=o,t}function _p(t,r,o){return r=Ii(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function ag(t,r,o,d,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Cp(t,r,o,d,f,v,P,G,ee){return t=new ag(t,r,o,G,ee),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Ii(3,null,null,r),t.current=v,v.stateNode=t,v.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(v),t}function og(t,r,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:d==null?null:""+d,children:t,containerInfo:r,implementation:o}}function zh(t){if(!t)return ks;t=t._reactInternals;e:{if(Mn(t)!==t||t.tag!==1)throw Error(p(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(p(171))}if(t.tag===1){var o=t.type;if(ar(o))return yu(t,o,r)}return r}function Fh(t,r,o,d,f,v,P,G,ee){return t=Cp(o,d,!0,t,f,v,P,G,ee),t.context=zh(null),o=t.current,d=Wr(),f=Va(o),v=Ei(d,f),v.callback=r??null,ui(o,v,f),t.current.lanes=f,rr(t,f,d),Zr(t,d),t}function od(t,r,o,d){var f=r.current,v=Wr(),P=Va(f);return o=zh(o),r.context===null?r.context=o:r.pendingContext=o,r=Ei(v,P),r.payload={element:t},d=d===void 0?null:d,d!==null&&(r.callback=d),t=ui(f,r,P),t!==null&&(ts(t,f,P,v),Oo(t,f,P)),P}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Tp(t,r){Wh(t,r),(t=t.alternate)&&Wh(t,r)}function lg(){return null}var Hh=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}ud.prototype.render=jp.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(p(409));od(t,r,null,null)},ud.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ko(function(){od(null,t,null,null)}),r[Ji]=null}};function ud(t){this._internalRoot=t}ud.prototype.unstable_scheduleHydration=function(t){if(t){var r=xi();t={blockedOn:null,target:t,priority:r};for(var o=0;o<jr.length&&r!==0&&r<jr[o].priority;o++);jr.splice(o,0,t),o===0&&oo(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bh(){}function ug(t,r,o,d,f){if(f){if(typeof d=="function"){var v=d;d=function(){var fe=ld(P);v.call(fe)}}var P=Fh(r,d,t,0,null,!1,!1,"",Bh);return t._reactRootContainer=P,t[Ji]=P.current,ys(t.nodeType===8?t.parentNode:t),Ko(),P}for(;f=t.lastChild;)t.removeChild(f);if(typeof d=="function"){var G=d;d=function(){var fe=ld(ee);G.call(fe)}}var ee=Cp(t,0,!1,null,null,!1,!1,"",Bh);return t._reactRootContainer=ee,t[Ji]=ee.current,ys(t.nodeType===8?t.parentNode:t),Ko(function(){od(r,ee,o,d)}),ee}function dd(t,r,o,d,f){var v=o._reactRootContainer;if(v){var P=v;if(typeof f=="function"){var G=f;f=function(){var ee=ld(P);G.call(ee)}}od(r,P,t,f)}else P=ug(o,r,t,f,d);return ld(P)}Is=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Sn(r.pendingLanes);o!==0&&(Wi(r,o|1),Zr(r,Rt()),(dt&6)===0&&(Hl=Rt()+500,Ss()))}break;case 13:Ko(function(){var d=Ni(t,1);if(d!==null){var f=Wr();ts(d,t,1,f)}}),Tp(t,1)}},vi=function(t){if(t.tag===13){var r=Ni(t,134217728);if(r!==null){var o=Wr();ts(r,t,134217728,o)}Tp(t,134217728)}},va=function(t){if(t.tag===13){var r=Va(t),o=Ni(t,r);if(o!==null){var d=Wr();ts(o,t,r,d)}Tp(t,r)}},xi=function(){return Nt},Hi=function(t,r){var o=Nt;try{return Nt=t,r()}finally{Nt=o}},_r=function(t,r,o){switch(r){case"input":if(Ue(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var d=o[r];if(d!==t&&d.form===t.form){var f=yn(d);if(!f)throw Error(p(90));Ft(d),Ue(d,f)}}}break;case"textarea":he(t,o);break;case"select":r=o.value,r!=null&&ut(t,!!o.multiple,r,!1)}},En=xp,wn=Ko;var cg={usingClientEntryPoint:!1,Events:[hn,Tn,yn,bn,gn,xp]},Gu={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dg={bundleType:Gu.bundleType,version:Gu.version,rendererPackageName:Gu.rendererPackageName,rendererConfig:Gu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gn(t),t===null?null:t.stateNode},findFiberByHostInstance:Gu.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pd.isDisabled&&pd.supportsFiber)try{Yn=pd.inject(dg),T=pd}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg,ei.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(r))throw Error(p(200));return og(t,r,null,o)},ei.createRoot=function(t,r){if(!Np(t))throw Error(p(299));var o=!1,d="",f=Hh;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Cp(t,1,!1,null,null,o,!1,d,f),t[Ji]=r.current,ys(t.nodeType===8?t.parentNode:t),new jp(r)},ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(p(188)):(t=Object.keys(t).join(","),Error(p(268,t)));return t=Gn(r),t=t===null?null:t.stateNode,t},ei.flushSync=function(t){return Ko(t)},ei.hydrate=function(t,r,o){if(!cd(r))throw Error(p(200));return dd(null,t,r,!0,o)},ei.hydrateRoot=function(t,r,o){if(!Np(t))throw Error(p(405));var d=o!=null&&o.hydratedSources||null,f=!1,v="",P=Hh;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(P=o.onRecoverableError)),r=Fh(r,null,t,1,o??null,f,!1,v,P),t[Ji]=r.current,ys(t),d)for(t=0;t<d.length;t++)o=d[t],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new ud(r)},ei.render=function(t,r,o){if(!cd(r))throw Error(p(200));return dd(null,t,r,!1,o)},ei.unmountComponentAtNode=function(t){if(!cd(t))throw Error(p(40));return t._reactRootContainer?(Ko(function(){dd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1},ei.unstable_batchedUpdates=xp,ei.unstable_renderSubtreeIntoContainer=function(t,r,o,d){if(!cd(o))throw Error(p(200));if(t==null||t._reactInternals===void 0)throw Error(p(38));return dd(t,r,o,!1,d)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Jh;function kg(){if(Jh)return Pp.exports;Jh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Pp.exports=wg(),Pp.exports}var Xh;function Sg(){if(Xh)return hd;Xh=1;var l=kg();return hd.createRoot=l.createRoot,hd.hydrateRoot=l.hydrateRoot,hd}var _g=Sg();const Cg=[["Avery","Morgan","averym","Avery","p1"],["Jordan","Brooks","jbrooks17","Jordan Brooks","p1"],["Taylor","Reed","treed","T. Reed","p1"],["Casey","Nguyen","cnguyen","Casey","p1"],["Riley","Davis","rileyd","Riley","p1"],["Maya","Patel","maya-p","Maya","p3"],["Cameron","Lee","clee","Cameron Lee","p3"],["Sydney","Wilson","sydneyw","Sydney","p3"],["Quinn","Martinez","qmartinez","Quinn","p3"],["Bailey","Adams","bailey_a","Bailey","p5"],["Sam","Rivera","rivera-s","Sam","p5"],["Charlie","Brown","charlieb","Charlie","p6"],["Drew","Johnson","drewj","Drew","p6"],["Alex","Kim","alexk","Alex","p7"],["Robin","Clark","robin-c","Robin","p7"],["Jamie","Flores","jflores","Jamie","p8"]],_d=Cg.map(([l,c,p,g,y],b)=>({id:`sample-${b+1}`,first:l,last:c,sheetName:b===3||b===11?null:`${l} ${c}`,github:p,studentName:g,sections:b===0?["p1","p3"]:[y],status:b%5===0?"Active now":b%4===0?"Viewing page":"No recent signal",current:b%3===0?"Strings and Variables":b%3===1?"Format a Summary":"Intro to Arrays",assignments:[{id:"strings",name:"Strings and Variables",type:"Lesson",status:"Completed",score:b%4===0?null:8+b%3,possible:10,submitted:"2026-11-02"},{id:"summary",name:"Format a Summary",type:"Challenge",status:b%4===0?"Started":"Completed",score:b%4===0?null:11+b%5,possible:15,submitted:"2026-11-03"},{id:"decisions",name:"Decision Tree",type:"Challenge",status:b%3===0?"Submitted":"Needs revision",score:b%3===0?10:null,possible:20,submitted:"2026-10-28"},{id:"reflection",name:"Debugging Reflection",type:"Lesson",status:"Practice completed",score:null,possible:5,submitted:"2026-10-26"}],weekly:{"2026-11-02":b%4===0?0:19+b%6,"2026-10-26":b%3===0?12:8+b%5}})),Tg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Cd(l=new Date){const c=Object.fromEntries(Tg.formatToParts(l).filter(g=>g.type!=="literal").map(g=>[g.type,g.value])),p=new Date(Date.UTC(Number(c.year),Number(c.month)-1,Number(c.day)));return p.setUTCDate(p.getUTCDate()-(p.getUTCDay()+6)%7),p.toISOString().slice(0,10)}function Gp(l=new Date,c=8){const p=new Date(Cd(l)+"T12:00:00Z");return Array.from({length:c},(g,y)=>{const b=new Date(p);return b.setUTCDate(b.getUTCDate()-y*7),b.toISOString().slice(0,10)})}const Kl=l=>new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"America/Chicago"}),jg=(l,c,p)=>`${l}|${c}|${p}`;function Ng({response:l,type:c,aiUse:p,aiDetails:g}){return["essay","logic-puzzle"].includes(c)?String(l).trim().length<10?"Write your answer and explain your thinking.":["none","disclosed"].includes(p)?p==="disclosed"&&String(g).trim().length<5?"Describe which parts involved AI.":"":"Complete the AI-use declaration.":"Select an essay or logic puzzle."}const Eg=[{id:"seed-journal-1",sectionId:"p1",studentId:"sample-2",studentName:"Jordan Brooks",courseId:"computer-science-1",week:Cd(),type:"essay",response:"When I debug code, I first reproduce the problem and read the error carefully. Next I try one small change and test again. I keep notes so I can explain what fixed the problem and why.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()},{id:"seed-journal-2",sectionId:"p1",studentId:"sample-3",studentName:"Taylor Reed",courseId:"computer-science-1",week:Cd(),type:"logic-puzzle",response:"The differences are 4, 6, 8, and 10. The next difference is 12, so the next number is 42. This also follows the pattern n(n+1), starting at n = 1.",aiUse:"none",aiDetails:"",submittedAt:new Date().toISOString()}],Ls={"game-programming":[{id:"csharp-foundations",title:"C# Foundations",description:"Build the logic behind games.",lessons:["csharp-variables","csharp-conditionals"]},{id:"unity-systems",title:"Unity Gameplay",description:"Connect scripts and game mechanics.",lessons:["unity-colliders","unity-player-controller","unity-score"]}],"mobile-app-dev":[{id:"web-basics",title:"Web Foundations",description:"Create and style interface elements.",lessons:["web-layout","web-events"]},{id:"react-foundations",title:"React Essentials",description:"Build reusable and interactive UI.",lessons:["react-components","react-state"]}],uil:[{id:"java-language",title:"Java Language & Tracing",description:"Reason about loops and variables.",lessons:["uil-loops","uil-methods"]},{id:"java-data",title:"Data Structures",description:"Trace arrays and string operations.",lessons:["uil-arrays","uil-strings"]}],"tsi-math":[{id:"tsi-quantitative",title:"Quantitative Reasoning",description:"Rates, ratios, percentages, and proportions.",lessons:["tsi-ratios","tsi-percents"]},{id:"tsi-algebra",title:"Algebraic Reasoning",description:"Solve equations and interpret graphs.",lessons:["tsi-equations","tsi-slope"]}],capstone:[{id:"capstone-discover",title:"Discover the Problem",description:"Investigate a need worth solving.",lessons:["capstone-discovery","capstone-interviews"]},{id:"capstone-validate",title:"Prototype & Validate",description:"Turn evidence into an iterated prototype.",lessons:["capstone-prototype","capstone-feedback"]}]},uc=[{id:"asvab",title:"ASVAB",subtitle:"Military aptitude",description:"Start with the four AFQT subjects; technical subtests can be added later.",reference:"https://www.officialasvab.com/applicants/sample-questions/",topics:[{id:"asvab-ar",title:"Arithmetic Reasoning",description:"Use math to solve everyday word problems.",questions:[{id:"asvab-ar-sample-01",prompt:"A supply team divides 96 bolts equally among 8 tool kits. How many bolts go into each kit?",options:["8","10","12","16"],correct:2,explanation:"Divide 96 by 8. Each tool kit receives 12 bolts."},{id:"asvab-ar-sample-02",prompt:"A delivery vehicle travels 180 miles in 3 hours at a steady speed. What is its average speed?",options:["45 mph","60 mph","75 mph","90 mph"],correct:1,explanation:"Average speed equals distance divided by time: 180 ÷ 3 = 60 mph."}]},{id:"asvab-wk",title:"Word Knowledge",description:"Practice synonyms and vocabulary in context.",questions:[{id:"asvab-wk-sample-01",prompt:'In the sentence "The technician was meticulous when checking each connection," meticulous most nearly means:',options:["hurried","careful","uninterested","unprepared"],correct:1,explanation:"Meticulous describes someone who gives careful attention to detail."},{id:"asvab-wk-sample-02",prompt:'The word "scarce" most nearly means:',options:["plentiful","fragile","limited","unusual"],correct:2,explanation:"If something is scarce, there is not much of it available."}]},{id:"asvab-pc",title:"Paragraph Comprehension",description:"Identify main ideas and supporting details.",questions:[{id:"asvab-pc-sample-01",prompt:"Passage: The neighborhood library added Saturday hours because weekday attendance had increased. Staff hope the extra day will help working families visit. Why did the library extend its schedule?",options:["To replace weekday hours","To make visits easier for more people","To reduce staff","To host only weekend events"],correct:1,explanation:"The passage says Saturday hours respond to demand and help working families visit."},{id:"asvab-pc-sample-02",prompt:"Passage: Before using the lab, workers inspect equipment, record damaged items, and report problems. This routine helps prevent interruptions and injuries. What is the main purpose of the routine?",options:["Improving safety and reliability","Making the lab look new","Reducing all written records","Increasing equipment costs"],correct:0,explanation:"The checklist catches problems early and lowers risk to people and equipment."}]},{id:"asvab-mk",title:"Mathematics Knowledge",description:"Review algebra, geometry, and number sense.",questions:[{id:"asvab-mk-sample-01",prompt:"Solve for x: 3(x − 2) = 15.",options:["3","5","7","9"],correct:2,explanation:"Divide by 3: x − 2 = 5. Add 2: x = 7."},{id:"asvab-mk-sample-02",prompt:"What is the area of a triangle with a base of 10 units and a height of 7 units?",options:["17 square units","35 square units","70 square units","140 square units"],correct:1,explanation:"Triangle area is one-half times base times height: (10 × 7) ÷ 2 = 35."}]}]},{id:"sat",title:"SAT",subtitle:"Digital SAT",description:"Practice the Reading and Writing and Math sections. These samples are not adaptive and do not produce SAT scores.",reference:"https://satsuite.collegeboard.org/sat/practice-preparation",topics:[{id:"sat-rw",title:"Reading and Writing",description:"Interpret short passages, revise sentences, and choose transitions.",questions:[{id:"sat-rw-sample-01",prompt:'Choose the best transition: "Maya planned to bike to school. _____, heavy rain forced her to take the bus."',options:["For example","However","Similarly","Therefore"],correct:1,explanation:"However signals the contrast between Maya's plan and what happened."},{id:"sat-rw-sample-02",prompt:"Choose the grammatically correct sentence.",options:["Each of the notebooks have a label.","Each of the notebooks has a label.","Each of the notebooks are labeled.","Each of the notebook have labels."],correct:1,explanation:"The subject each is singular, so it takes has."}]},{id:"sat-math",title:"Math",description:"Use algebra and problem-solving strategies.",questions:[{id:"sat-math-sample-01",prompt:"If f(x) = 2x + 5, what is f(4)?",options:["9","11","13","18"],correct:2,explanation:"Substitute 4 for x: f(4) = 2(4) + 5 = 13."},{id:"sat-math-sample-02",prompt:"If 2x + y = 11 and y = 3, what is x?",options:["3","4","5","7"],correct:1,explanation:"Replace y with 3: 2x + 3 = 11, so 2x = 8 and x = 4."}]}]},{id:"act",title:"ACT",subtitle:"Enhanced ACT",description:"Practice English, Math, Reading, and optional Science using the updated ACT structure.",reference:"https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html",topics:[{id:"act-english",title:"English",description:"Revise sentences for grammar and clarity.",questions:[{id:"act-english-sample-01",prompt:'Choose the correct verb: "The team of engineers _____ ready to begin."',options:["are","is","were","have"],correct:1,explanation:"The singular subject team takes the singular verb is."},{id:"act-english-sample-02",prompt:"Choose the correctly punctuated sentence.",options:["After the storm the street was quiet.","After the storm, the street was quiet.","After, the storm the street was quiet.","After the storm the, street was quiet."],correct:1,explanation:"An introductory phrase is commonly followed by a comma."}]},{id:"act-math",title:"Math",description:"Practice algebra, geometry, and problem solving.",questions:[{id:"act-math-sample-01",prompt:"What is the slope of the line through (2, 1) and (6, 9)?",options:["1","2","4","8"],correct:1,explanation:"Slope = change in y ÷ change in x = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2."},{id:"act-math-sample-02",prompt:"A rectangle measures 8 inches by 5 inches. What is its perimeter?",options:["13 inches","26 inches","40 inches","80 inches"],correct:1,explanation:"Perimeter = 2(length + width) = 2(8 + 5) = 26 inches."}]},{id:"act-reading",title:"Reading",description:"Find key details and reasonable inferences.",questions:[{id:"act-reading-sample-01",prompt:"Passage: Lena repaired an old bicycle rather than buy a new one. She replaced the chain and adjusted the brakes so she could use it to commute. Which statement is supported?",options:["Lena sold the bike.","Lena intends to ride the repaired bike.","Lena cannot fix brakes.","Lena purchased a new bike."],correct:1,explanation:"The passage explicitly says Lena repaired the bike to use it for commuting."},{id:"act-reading-sample-02",prompt:"Passage: Residents created a neighborhood garden on an empty lot. Volunteers donated seeds, installed raised beds, and shared the harvest. What best describes the project?",options:["A commercial farm run by one company","A volunteer project that benefits neighbors","A plan to close the lot permanently","An indoor science experiment"],correct:1,explanation:"The volunteers worked together on a shared garden and harvest."}]},{id:"act-science",title:"Science (optional)",description:"Interpret experimental results, charts, and evidence.",questions:[{id:"act-science-sample-01",prompt:"In an experiment, a plant grew 2 cm at 10°C, 4 cm at 20°C, and 6 cm at 30°C over the same period. What pattern is shown?",options:["Growth decreases as temperature increases.","Growth remains constant.","Growth increases with temperature in these trials.","Temperature has no measurable relationship."],correct:2,explanation:"The recorded growth rises from 2 to 4 to 6 cm as temperature increases across these trials."},{id:"act-science-sample-02",prompt:"Two identical seedlings get the same light and water. One receives fertilizer and the other does not. Which variable is intentionally changed?",options:["Amount of light","Amount of water","Type of plant","Use of fertilizer"],correct:3,explanation:"Fertilizer is the independent variable; the other conditions are kept the same."}]}]}],Qh=uc.map(l=>({id:l.id,title:l.title,description:l.description,lessons:l.topics.map(c=>c.id)})),Lg=Object.fromEntries(uc.flatMap(l=>l.topics.map(c=>[c.id,{id:c.id,title:c.title,summary:c.description,language:"text",kind:"Sample practice",trackId:l.id}]))),Pg=l=>{for(const c of uc){const p=c.topics.find(g=>g.id===l);if(p)return{track:c,topic:p}}return null};uc.reduce((l,c)=>l+c.topics.reduce((p,g)=>p+g.questions.length,0),0);const Ag=[{id:"01-how-programs-work/01-first-message",unit:1,unitName:"How Programs Work",lesson:1,slug:"01-first-message",title:"Instructions and output",concept:"Output and strings",summary:"Tell a computer what to display using a simple Python instruction.",mode:"script",starter:`# Use print() to display the exact welcome message.
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
`}],Rg=[{id:"02-values-and-variables/01-meet-variables",unit:2,unitName:"Values, Variables & Expressions",lesson:1,slug:"01-meet-variables",title:"Names for changing information",concept:"Variables and assignment  ",summary:"Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",mode:"script",starter:`# Name the player with a variable, then display the required message.
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
`}],Ig=[{id:"03-functions-and-parameters/01-functions-return",unit:3,unitName:"Functions, Parameters & Return Values",lesson:1,slug:"01-functions-return",title:"Returning an answer",concept:"Function definitions and return  ",summary:"A function packages instructions into a reusable operation. A function can give a result back with `return`.",mode:"function",starter:`def increment_number(number):
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
`}],Og=[{id:"04-comparisons-and-boolean-logic/01-comparisons",unit:4,unitName:"Comparisons & Boolean Logic",lesson:1,slug:"01-comparisons",title:"Ask Python a question",concept:"Comparison operators and Boolean values  ",summary:"A comparison is a question that evaluates to a Boolean value: `True` or `False`.",mode:"function",starter:`def has_required_points(current, required):
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
`}],Mg=[{id:"05-conditional-execution/01-first-if",unit:5,unitName:"Conditional Execution",lesson:1,slug:"01-first-if",title:"Make a choice with if",concept:"If statements and indentation  ",summary:"Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",mode:"function",starter:`def classify_temperature(temperature):
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
`}],Dg=[{id:"06-iteration/01-for-ranges",unit:6,unitName:"Iteration & Accumulation",lesson:1,slug:"01-for-ranges",title:"Repeat an instruction",concept:"For loops and ranges  ",summary:"A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",mode:"script",starter:`# Use one loop to print the integers 1 through 4.
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
`}],zg=[{id:"07-strings-and-text/01-index-and-length",unit:7,unitName:"Strings & Text Processing",lesson:1,slug:"01-index-and-length",title:"Read characters by position",concept:"String indexing and length",summary:"A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",mode:"function",starter:`def edge_letters(text):
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
`}],Fg=[{id:"08-lists-and-collections/01-list-indexing",unit:8,unitName:"Lists & Collections",lesson:1,slug:"01-list-indexing",title:"Read values from a list",concept:"Lists, indexes, negative positions",summary:"A list stores several values in order, and each can be read using its position.",mode:"function",starter:`def end_points(values):
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
`}],Wg=[{id:"09-dictionaries-and-data/01-keys-and-values",unit:9,unitName:"Dictionaries & Data",lesson:1,slug:"01-keys-and-values",title:"Look up information by key",concept:"Dictionary lookup and get",summary:"Dictionaries connect unique keys with values, letting a program retrieve information by name.",mode:"function",starter:`def price_for(prices, item):
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
`}],Hg=[{id:"10-algorithms-and-testing/01-while-and-sentinels",unit:10,unitName:"Algorithms & Testing",lesson:1,slug:"01-while-and-sentinels",title:"Repeat until a stop signal",concept:"While loops and sentinel values",summary:"A `while` loop repeats until a condition changes, making it useful when the stopping point is part of the input.",mode:"function",starter:`def before_stop(events):
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
`}],Bg=[...Ag,...Rg,...Ig,...Og,...Mg,...Dg,...zg,...Fg,...Wg,...Hg],em={"python-strings":{title:"Strings and Variables",kind:"Lesson",difficulty:"Easy",points:10,language:"python",challenge:"Create a greeting using a name and a favorite topic.",starter:`name = "Jordan"
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
`,console:"Run, Check and Submit are simulated in this React design lab."},"tsi-percents":{title:"Percents and Discounts",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Use percentages in everyday situations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-equations":{title:"Solve Linear Equations",kind:"Lesson",difficulty:"Easy",points:10,language:"text",challenge:"Solve a one-variable equation with inverse operations.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."},"tsi-slope":{title:"Slope and Rate of Change",kind:"Challenge",difficulty:"Medium",points:15,language:"text",challenge:"Interpret slope from a table of values.",starter:"",console:"Run, Check and Submit are simulated in this React design lab."}};function Jo(l){return typeof l=="string"?l:typeof(l==null?void 0:l.id)=="string"?l.id:""}function Rs(l){return String((l==null?void 0:l.title)||(l==null?void 0:l.unitName)||(l==null?void 0:l.name)||"Lessons")}function cc(l,c=1){return(l==null?void 0:l.number)??(l==null?void 0:l.unit)??c}function rs(l){return((l==null?void 0:l.lessons)||[]).map(Jo).filter(Boolean)}function ic(l){return Array.isArray(l==null?void 0:l.units)?l.units.flatMap(rs):Array.isArray(l==null?void 0:l.lessons)?l.lessons.map(Jo).filter(Boolean):[]}function Ug(l,c){return((l==null?void 0:l.units)||[]).some(p=>rs(p).includes(c))}function to(l,c,p=em){var S,j;if(!c)return null;const g=((l==null?void 0:l.units)||[]).find(N=>rs(N).includes(c)),y=((g==null?void 0:g.lessons)||[]).find(N=>Jo(N)===c),b=typeof y=="object"&&y||((S=g==null?void 0:g.lessonMeta)==null?void 0:S[c])||((j=l==null?void 0:l.lessonRecords)==null?void 0:j[c])||{},k=(p==null?void 0:p[c])||{},C=String(b.title||b.name||k.title||c.split("/").at(-1));return{...k,...b,id:c,title:C,kind:b.kind||k.kind||"Lesson",difficulty:b.difficulty||k.difficulty||"",points:b.points??k.points??null,language:b.language||k.language||(l==null?void 0:l.language)||"text",challenge:b.challenge||b.summary||k.challenge||"",starter:b.starter||k.starter||"",console:k.console||(b.markdownSource?b.language==="python"?"Run Python to see your output. Checks use published examples only.":"Preview-only workspace. Use the production Playground for functional language runners and verified checks.":""),ready:!!(p!=null&&p[c])||typeof b.markdownSource=="string"&&b.starter!==void 0,isPublished:typeof b.markdownSource=="string"&&b.starter!==void 0}}function no(l,c,p=em){var g;return((g=to(l,c,p))==null?void 0:g.title)||""}function Gl(l){const c=Array.isArray(l)?{lessons:l}:l||{},p=new Map,g=new Set,y=[],b=(C,S,j,N)=>{const F=String(C);let A=y.find(X=>X.id===F);return A||(A={id:F,title:String(S||"Lessons"),description:String(j||""),number:N,lessons:[]},y.push(A)),A},k=(C,S)=>{const j=Jo(S);!j||g.has(j)||(g.add(j),C.lessons.push(j),p.set(j,typeof S=="string"?{id:j}:{...S}))};return Array.isArray(c.units)?c.units.forEach((C,S)=>{const j=b(C.id||`unit-${S+1}`,Rs(C),C.description||C.summary,cc(C,S+1));(C.lessons||[]).forEach(N=>k(j,N))}):Array.isArray(c.lessons)&&c.lessons.forEach((C,S)=>{if(!C||!Jo(C))return;const j=C.unit||null,N=Jo(C).indexOf("/"),F=j!=null?N>=0?Jo(C).slice(0,N):`unit-${j}`:C.competency?`topic-${String(C.competency).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`:"lessons",A=C.unitName||C.competency||"Lessons",X=b(F,A,"",j??y.length+1);k(X,C)}),{units:y,lessonRecords:Object.fromEntries(p),lessons:y.flatMap(rs)}}const Ip=Gl(Bg),ns=[{id:"computer-science-1",units:Ip.units,lessonRecords:Ip.lessonRecords,language:"python",publishedContent:!0,slug:"computer-science-1",label:"Computer Science I",short:"Python",glyph:"py",color:"#6366F1",description:"Build your problem-solving toolkit with Python.",lessons:Ip.lessons,topics:["Variables","Strings","Formatting","Conditions","Lists"]},{id:"game-programming",units:Ls["game-programming"],slug:"game-programming",label:"Game Programming & Design",short:"C# · Unity",glyph:"C#",color:"#C052EB",description:"Make ideas playable with Unity and C#.",lessons:Ls["game-programming"].flatMap(l=>l.lessons),topics:["C# Basics","Rigidbody","Colliders"]},{id:"mobile-app-dev",units:Ls["mobile-app-dev"],slug:"mobile-app-web",label:"Mobile App & Web",short:"React · JavaScript",glyph:"js",color:"#27BBD2",description:"Create useful websites and mobile applications.",lessons:Ls["mobile-app-dev"].flatMap(l=>l.lessons),topics:["HTML","CSS","JavaScript","React"]},{id:"capstone",units:Ls.capstone,slug:"capstone",label:"Capstone",short:"Build for someone",glyph:"++",color:"#FF2D55",description:"Research a problem, prototype, and test a solution.",lessons:Ls.capstone.flatMap(l=>l.lessons),topics:["Research","Prototype","Pitch"]},{id:"uil",units:Ls.uil,slug:"uil",label:"UIL Computer Science",short:"Java",glyph:"jv",color:"#FF9F0A",description:"Trace Java, explain your reasoning, and practice.",lessons:Ls.uil.flatMap(l=>l.lessons),topics:["Java","Arrays","Written","Programming"]},{id:"test-prep",units:Qh,lessonRecords:Lg,slug:"test-prep",label:"Test Prep",short:"TSI · ASVAB · SAT · ACT",glyph:"ex",color:"#15B7A3",description:"College readiness and military aptitude study, all in one place.",lessons:Qh.flatMap(l=>l.lessons),topics:["TSI","ASVAB","SAT","ACT"]},{id:"tsi-math",units:Ls["tsi-math"],slug:"tsi-math",label:"TSI Math Advisory",short:"Math · Open access",glyph:"ma",color:"#30C85A",description:"Quantitative reasoning and algebra practice.",lessons:Ls["tsi-math"].flatMap(l=>l.lessons),topics:["Percents","Ratios","Equations"]}],hi=l=>ns.find(c=>c.id===l),ah=l=>{var c;return(c=hi(l))==null?void 0:c.label};function Id(l){return typeof l=="string"&&/^#[0-9a-fA-F]{6}$/.test(l)}function qg(l,c={}){const p=c&&typeof c=="object"?c[l.id]:null;return Id(p)?p.toUpperCase():l.color}function Kg(l){if(!Id(l))return"#101012";const c=[1,3,5].map(g=>parseInt(l.slice(g,g+2),16)/255).map(g=>g<=.04045?g/12.92:((g+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722>.179?"#101012":"#FFFFFF"}function $g(l,c,p=document.documentElement){for(const g of c){const y=`--student-course-color-${g.id}`,b=l&&typeof l=="object"?l[g.id]:null,k=`--student-course-ink-${g.id}`;Id(b)?(p.style.setProperty(y,b),p.style.setProperty(k,Kg(b))):(p.style.removeProperty(y),p.style.removeProperty(k))}}function cn(l,c){const[p,g]=we.useState(()=>{try{const y=localStorage.getItem(l);return y===null?c:JSON.parse(y)}catch{return c}});return we.useEffect(()=>{try{localStorage.setItem(l,JSON.stringify(p))}catch{}},[l,p]),[p,g]}function Gg(l,c=[]){return Array.isArray(c)&&c.includes(l)}function tm(l,c=[]){const p=ic(l),g=p.filter(y=>Gg(y,c)).length;return{completed:g,total:p.length,percent:p.length?Math.round(g/p.length*100):0}}const Yg=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit"});function Vg(l=new Date){const c=Object.fromEntries(Yg.formatToParts(l).filter(p=>p.type!=="literal").map(p=>[p.type,p.value]));return`${c.year}-${c.month}-${c.day}`}function Td(l){return l?new Date(l+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}):""}function xd(l,c=[]){return c.find(p=>p.id===l)||null}function Jg(l,c=[]){return c.find(p=>p.id===l)||null}function Od(l,{assignments:c=[],grades:p=[],completedLessons:g=[],today:y=Vg()}={}){const b=Jg(l,c),k=xd(l,p),C=l.startsWith("lesson:")&&g.includes(l.slice(7)),S=!!k||C;return b!=null&&b.dueDate?{state:S?"completed":b.dueDate<y?"overdue":"assigned",dueDate:b.dueDate,grade:k,completed:S}:{state:S?"completed":"unassigned",dueDate:null,grade:k,completed:S}}function Yp(l=[]){const c=l.reduce((g,y)=>g+y.earned,0),p=l.reduce((g,y)=>g+y.possible,0);return{earned:c,possible:p,percent:p?Math.round(100*c/p):null,count:l.length}}function Xg(l=[]){const c=new Map;return l.forEach(p=>{const g=Cd(new Date(p.gradedAt+"T12:00:00Z"));c.has(g)||c.set(g,[]),c.get(g).push(p)}),[...c.entries()].map(([p,g])=>({week:p,...Yp(g)})).sort((p,g)=>g.week.localeCompare(p.week))}function Qg(l=[],c=[]){return[...new Set([...Array.isArray(l)?l:[],...c.filter(p=>p.id.startsWith("lesson:")).map(p=>p.id.slice(7))])]}const Zg="/playground/data",ey=new Set(["game-programming","mobile-app-dev","uil","tsi-math"]);function ty(l){if(typeof l!="string"||!l||l.startsWith("/")||l.includes("\\")||l.includes("?")||l.includes("#")||l.split("/").some(c=>c===".."||c==="."||c===""))throw new Error("Invalid curriculum resource path");return l}function dc(l,c){if(!ey.has(l))throw new Error("Unknown published course");return Zg+"/"+l+"/"+ty(c)}async function tr(l,c,p,g,y=!1){const b=await p(dc(l,c),{signal:g,cache:"no-store"});if(!b.ok)throw new Error("Published "+l+" resource unavailable: "+c);return y?b.json():b.text()}function oh(l,c,p,g,y){var b,k,C;return{...l,markdownSource:c,starter:p??"",language:g,markdownUrl:dc(y,l.markdown),kind:"Lesson",challenge:((b=l.exercise)==null?void 0:b.prompt)||l.summary||l.objective||l.title||"",points:l.points??null,cases:((k=l.exercise)==null?void 0:k.examples)||l.cases||[],hints:((C=l.exercise)==null?void 0:C.hints)||l.hints||[],mode:l.exercise?"function":"script"}}async function ny(l,c){const p="game-programming",g=await tr(p,"course.json",l,c,!0),y=await Promise.all(g.units.map(async b=>({id:b.id,number:b.number,title:b.title,description:b.summary||"",lessons:await Promise.all(b.lessons.map(async k=>{var j,N,F,A,X;const C=await tr(p,k.markdown,l,c);return{...oh(k,C,(j=k.exercise)==null?void 0:j.starter,"csharp",p),starter:((N=k.exercise)==null?void 0:N.starter)||"",kind:"Lesson",exerciseId:(F=k.exercise)==null?void 0:F.id,challenge:((A=k.exercise)==null?void 0:A.prompt)||k.title,unityTask:k.unityTask||[],markdownSource:C+((X=k.unityTask)!=null&&X.length?`

### Unity activity
`+k.unityTask.map(D=>"- "+D).join(`
`):"")}}))})));return{...Gl({units:y}),source:"published",projects:[]}}async function Zh(l,c,p,g){if(!c)return null;const y=Object.keys(c);if(!y.includes("index.html")||!y.includes("styles.css")||!y.includes("script.js")&&!y.includes("App.jsx"))throw Error("A Mobile App starterFiles entry requires index.html, styles.css and script.js (or App.jsx).");return Object.fromEntries(await Promise.all(y.map(async b=>[b,await tr(l,c[b],p,g)])))}async function ry(l,c){const p="mobile-app-dev",g=await tr(p,"course.json",l,c,!0),y=await Promise.all(g.lessons.map(async k=>{const[C,S,j]=await Promise.all([tr(p,k.markdown,l,c),k.starterFile?tr(p,k.starterFile,l,c):Promise.resolve(""),Zh(p,k.starterFiles,l,c)]);return{...oh(k,C,S,k.language==="react"?"jsx":k.language,p),...j?{starterFiles:j}:{}}})),b=await Promise.all((g.projects||[]).map(async k=>{const[C,S]=await Promise.all([k.starterFile?tr(p,k.starterFile,l,c):Promise.resolve(""),Zh(p,k.starterFiles,l,c)]),j=await Promise.all(k.steps.map(async N=>({...N,focus:N.focus||N.title,markdownSource:await tr(p,N.markdown,l,c),markdownUrl:dc(p,N.markdown)})));return{id:k.id,title:k.title,summary:k.summary,skills:k.skills||[],starter:C,language:"html",steps:j,...S?{starterFiles:S}:{}}}));return{...Gl({lessons:y}),projects:b,source:"published"}}async function iy(l,c){const g=await tr("uil","course.json",l,c,!0),y=await tr("uil",g.written.markdown,l,c),b=await tr("uil",g.written.practice,l,c,!0),C=(Array.isArray(b)?b:b.questions||[]).map((F,A)=>{const X=F.choices||F.options||[];return"### Practice question "+(A+1)+`

`+String(F.prompt||F.question||"")+`

`+X.map((D,Y)=>String.fromCharCode(65+Y)+". "+D).join(`

`)}).join(`

`),S={id:"written",title:"Written practice",language:"text",markdown:g.written.markdown,markdownSource:y+`

## Published practice questions

`+C,markdownUrl:dc("uil",g.written.markdown),starter:"",kind:"Practice",challenge:"Review Java reasoning and the published written-practice questions."},j=await Promise.all(g.lessons.map(async F=>{const[A,X]=await Promise.all([tr("uil",F.markdown,l,c),tr("uil",F.starterFile,l,c)]);return oh(F,A,X,"java","uil")}));return{...Gl({units:[{id:"written-preparation",number:1,title:"Written preparation",lessons:[S]},{id:"programming-practice",number:2,title:"Java programming practice",lessons:j}]}),source:"published",projects:[]}}async function sy(l,c){const p="tsi-math",[g,y,b,k]=await Promise.all([tr(p,"content/20-day-program.json",l,c,!0),tr(p,"content/strand-lessons-v1.json",l,c,!0),tr(p,"content/diagnostic-24-mc-v2.json",l,c,!0),tr(p,"content/math-locator-profiles.json",l,c,!0)]),C=(g.days||[]).map(j=>({id:j.id,title:j.title,challenge:"Day "+j.day+" · "+j.strand+" · 30 minutes",kind:"Planned session",language:"text",starter:"",ready:!1,status:"planned"})),S=await Promise.all((y.lessons||[]).map(async j=>{const[N,F]=await Promise.all([tr(p,j.student_lesson,l,c),tr(p,j.teacher_key,l,c,!0)]);return{id:j.id,title:j.title,kind:"Draft practice",status:"draft",language:"text",markdown:j.student_lesson,markdownUrl:dc(p,j.student_lesson),markdownSource:N,tsiKey:F,tsiStrandDraft:!0,starter:"",challenge:"Currently authored draft lesson · "+j.minutes+" minutes"}}));return{...Gl({units:[{id:"study-schedule",number:1,title:"20-day study schedule (in development)",lessons:C},{id:"authored-strands",number:2,title:"Available draft strand lessons",lessons:S}]}),source:"published-draft",projects:[],tsiDraft:!0,diagnosticItems:b.items||[],locatorProfiles:k.profiles||[]}}async function ay(l,{fetchImpl:c=fetch,signal:p}={}){if(l==="game-programming")return ny(c,p);if(l==="mobile-app-dev")return ry(c,p);if(l==="uil")return iy(c,p);if(l==="tsi-math")return sy(c,p);throw new Error("Unknown published course")}const Vu=!0;async function oy(){const l="/playground/integration/account-bridge.js",{readOnlyCs1Snapshot:c}=await import(l);return c()}const pa=(...l)=>l.filter(Boolean).join(" "),ly=["temperature-alert","count-matches","sum-positives","score-line","attendance-percent","longest-win-streak","confidence-total","second-largest-distinct","target-pairs","competition-ranks"],uy="/playground/integration/",cy="/"+uy.replace(/^\/+|\/+$/g,""),ya=l=>`${cy}/#${l}`,ql=()=>ya("/"),ef=()=>ya("/teacher"),dy=()=>ya("/admin"),py=()=>ya("/journals"),hy=()=>ya("/grades"),Ul=(l=null)=>ya(l?`/challenges/course/${encodeURIComponent(l)}`:"/challenges"),nm=l=>ya(`/challenges/${encodeURIComponent(l)}`);function rm(l,c,p=null){const g=typeof l=="string"?hi(l):l;if(!g||!c)return ql();const y=`/playgrounds/${encodeURIComponent(g.slug)}/projects/${encodeURIComponent(c)}`;return ya(p?`${y}/steps/${encodeURIComponent(p)}`:y)}function Md(l,c){const p=typeof l=="string"?hi(l):l;if(!p)return ql();const g=`/playgrounds/${encodeURIComponent(p.slug)}`;return ya(c?`${g}/lessons/${encodeURIComponent(c)}`:g)}function fd(l,c=ns){const b=((typeof window<"u"&&window.location.hash.slice(1)||"/").replace(/\/+$/,"")||"/").slice("".length)||"/";if(b==="/")return{page:"home"};if(b==="/teacher")return{page:"teacher"};if(b==="/admin")return{page:"admin"};if(b==="/journals")return{page:"journals"};if(b==="/grades")return{page:"grades"};if(b==="/challenges")return{page:"challenges",filterCourse:null};if(b.startsWith("/challenges/")){const N=b.split("/").filter(Boolean);try{if(N.length===3&&N[1]==="course"){const F=decodeURIComponent(N[2]);return hi(F)?{page:"challenges",filterCourse:F}:{page:"not-found"}}if(N.length===2){const F=decodeURIComponent(N[1]);return ly.includes(F)?{page:"challenge",challengeId:F}:{page:"not-found"}}}catch{return{page:"not-found"}}return{page:"not-found"}}const k=b.split("/").filter(Boolean);if(k[0]!=="playgrounds"||![2,4,6].includes(k.length))return{page:"not-found"};let C,S;try{C=decodeURIComponent(k[1]),S=k.length===4?decodeURIComponent(k[3]):void 0}catch{return{page:"not-found"}}const j=c.find(N=>N.slug===C);if(!j)return{page:"not-found"};if(k[2]==="projects"&&(k.length===4||k.length===6))try{const N=decodeURIComponent(k[3]),F=(j.projects||[]).find(X=>X.id===N),A=k.length===6?decodeURIComponent(k[5]):null;return!F||A&&(k[4]!=="steps"||!F.steps.some(X=>X.id===A))?{page:"not-found"}:{page:"course",courseId:j.id,lessonId:null,projectId:N,stepId:A}}catch{return{page:"not-found"}}return k.length!==2&&(k.length!==4||k[2]!=="lessons")?{page:"not-found"}:S&&!Ug(j,S)?{page:"not-found"}:{page:"course",courseId:j.id,lessonId:S??null}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),im=(...l)=>l.filter((c,p,g)=>!!c&&c.trim()!==""&&g.indexOf(c)===p).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var my={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=we.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:p=2,absoluteStrokeWidth:g,className:y="",children:b,iconNode:k,...C},S)=>we.createElement("svg",{ref:S,...my,width:c,height:c,stroke:l,strokeWidth:g?Number(p)*24/Number(c):p,className:im("lucide",y),...C},[...k.map(([j,N])=>we.createElement(j,N)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(l,c)=>{const p=we.forwardRef(({className:g,...y},b)=>we.createElement(gy,{ref:b,iconNode:c,className:im(`lucide-${fy(l)}`,g),...y}));return p.displayName=`${l}`,p};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=_t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=_t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=_t("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=_t("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=_t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=_t("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=_t("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=_t("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=_t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=_t("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=_t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=_t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=_t("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=_t("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=_t("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=_t("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=_t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=_t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=_t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=_t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=_t("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=_t("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=_t("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=_t("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=_t("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=_t("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=_t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=_t("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=_t("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=_t("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=_t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=_t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=_t("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=_t("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=_t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=_t("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=_t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
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
 */const ph=_t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=_t("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=_t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=_t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=_t("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=_t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function is({children:l,tone:c=""}){return u.jsx("span",{className:pa("chip",c&&`chip-${c}`),children:l})}function Fy({theme:l,setTheme:c}){const p=l==="dark";return u.jsx("button",{className:"icon-button",title:p?"Switch to light mode":"Switch to dark mode","aria-label":"Toggle light and dark mode",onClick:()=>c(p?"light":"dark"),children:p?u.jsx(Dy,{size:17}):u.jsx(Ry,{size:17})})}function Wy({sidebarOpen:l,onToggleSidebar:c,onHome:p,theme:g,setTheme:y,readOnlyMode:b=!1,accountLabel:k=null}){var C;return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("button",{className:"icon-button nav-toggle",onClick:c,"aria-label":"Toggle navigation",children:l?u.jsx(Iy,{size:18}):u.jsx(Ay,{size:18})}),u.jsxs("button",{className:"brand",onClick:p,children:[u.jsx("span",{className:"brand-logo",children:"{ }"}),u.jsx("strong",{children:"Ms. Whitby's Playground"}),u.jsx("span",{className:"brand-compact",children:"React Lab"})]}),u.jsx("div",{className:"topbar-spacer"}),u.jsx(is,{children:b?"CS1 READ-ONLY TEST":"LOCAL DESIGN LAB"}),u.jsx(Fy,{theme:g,setTheme:y}),u.jsx("span",{className:"user-circle",title:k||"Read-only preview",children:((C=k==null?void 0:k[0])==null?void 0:C.toUpperCase())||"W"})]})})}const Hy=[["home","Home",Ly],["challenges","Challenge Bank",Fd],["journals","Weekly journals",lh],["grades","Grades",Ny],["teacher","Teacher dashboard",uh],["admin","Admin dashboard",ph]];function By({open:l,page:c,courseId:p,lessonId:g,setPage:y,openCourse:b,onOpenProject:k,availableCourses:C=ns,completedLessons:S=[],assignments:j=[],grades:N=[],readOnlyMode:F=!1}){var X;const A=c==="course"?C.find(D=>D.id===p):null;return u.jsxs("aside",{className:pa("main-sidebar",!l&&"collapsed"),"aria-label":"Playground navigation",children:[u.jsx("div",{className:"side-title",children:"EXPLORE"}),Hy.filter(([D])=>!F||["home","grades"].includes(D)).map(([D,Y,J])=>u.jsxs("button",{className:pa("nav-item",(c===D||D==="challenges"&&c==="challenge")&&"active"),onClick:()=>y(D),title:Y,children:[u.jsx(J,{size:19}),u.jsx("span",{children:Y})]},D)),A&&u.jsxs("section",{className:"course-outline","data-course":A.id,"aria-label":`${A.label} outline`,children:[u.jsx("div",{className:"side-rule"}),u.jsx("div",{className:"side-title",children:"COURSE CONTENT"}),u.jsxs("button",{className:pa("outline-overview",!g&&"active"),onClick:()=>b(A.id),children:[u.jsx(Yl,{size:16}),u.jsx("span",{children:"Course overview"})]}),A.units.map((D,Y)=>u.jsxs("details",{className:"outline-unit",open:rs(D).includes(g)||!g&&Y===0?!0:void 0,children:[u.jsxs("summary",{children:[u.jsx("span",{className:"outline-unit-number",children:String(cc(D,Y+1)).padStart(2,"0")}),u.jsx("span",{className:"outline-unit-title",title:Rs(D),children:Rs(D)}),u.jsx(om,{size:14})]}),u.jsx("div",{className:"outline-lesson-list",children:rs(D).map(J=>{const M=no(A,J),W=Od("lesson:"+J,{assignments:j,grades:N,completedLessons:S}),B=W.completed?"completed":W.dueDate?W.state:"",H=B==="completed"?"Completed":B==="overdue"?"Overdue":B==="assigned"?"Assigned":"";return u.jsxs("button",{onClick:()=>b(A.id,J),className:pa("outline-lesson",J===g&&"selected"),"aria-label":H?`${M}, ${H.toLowerCase()}`:M,title:H?`${M} · ${H}`:M,"aria-current":J===g?"page":void 0,children:[u.jsx("span",{className:"outline-lesson-name",children:M}),H&&u.jsx("span",{className:`assignment-dot ${B}`,"aria-hidden":"true"})]},J)})})]},`${A.id}-${D.id}-${g||"overview"}`)),!!((X=A.projects)!=null&&X.length)&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"side-section-title",children:"PROJECTS"}),A.projects.map(D=>u.jsx("button",{type:"button",className:"outline-lesson",title:D.title,onClick:()=>k==null?void 0:k(A.id,D.id),children:u.jsx("span",{className:"outline-lesson-name",children:D.title})},D.id))]})]}),u.jsx("div",{className:"side-rule"}),u.jsx("div",{className:"side-title",children:"PLAYGROUNDS"}),C.filter(D=>D.id!=="tsi-math").map(D=>u.jsxs("button",{"data-course":D.id,className:pa("nav-item course-nav-item",c==="course"&&p===D.id&&"active"),onClick:()=>b(D.id),title:D.label,children:[u.jsx("span",{className:"nav-dot"}),u.jsx("span",{children:D.label})]},D.id)),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsx(by,{size:17}),u.jsx("span",{children:"Your learning spaces"})]})]})}function Uy(){return u.jsxs("footer",{className:"site-footer",children:[u.jsx("span",{children:"Ms. Whitby's Playground · React design lab"}),u.jsx("span",{children:"Fictional data · No authentication or backend · No real code execution"})]})}const qy={"computer-science-1":zd,"game-programming":jy,"mobile-app-dev":My,uil:cm,"tsi-math":am,"test-prep":ky,capstone:Oy};function Ky({course:l,onOpen:c,completedLessons:p=[]}){const{completed:g,total:y}=tm(l,p),b=qy[l.id]||zd;function k(C){C.button!==0||C.metaKey||C.ctrlKey||C.shiftKey||C.altKey||(C.preventDefault(),c())}return u.jsxs("a",{className:"course-card","data-course":l.id,href:Md(l),onClick:k,children:[u.jsxs("div",{className:"course-card-heading",children:[u.jsx("span",{className:"course-glyph","aria-hidden":"true",children:u.jsx(b,{size:24,strokeWidth:2.2})}),u.jsxs("div",{children:[u.jsx("h2",{children:l.label}),u.jsx("p",{children:l.short})]})]}),u.jsx("p",{className:"course-description",children:l.description}),u.jsxs("div",{className:"course-card-footer",children:[u.jsxs("div",{className:"course-meta",children:[u.jsxs("span",{children:[y," ",y===1?"lesson":"lessons"]}),u.jsxs("span",{children:[g," completed"]})]}),u.jsx("progress",{className:"course-progress-track",value:g,max:Math.max(y,1),"aria-label":`${l.label}: ${g} of ${y} lessons completed`})]})]})}function $y({onClick:l}){return u.jsxs("button",{className:"wide-shortcut",onClick:l,children:[u.jsx(uh,{size:18}),u.jsxs("span",{children:[u.jsx("strong",{children:"Teacher Dashboard preview"}),u.jsx("small",{children:"Section roster, expanded student assignments, account matching, and weekly points"})]}),u.jsx(ti,{size:18})]})}function Gy({openCourse:l,openTeacher:c,openChallenges:p,availableCourses:g=ns,completedLessons:y=[],readOnlyMode:b=!1}){return u.jsxs("div",{className:"main-content",children:[u.jsxs("div",{className:"welcome",children:[u.jsx("div",{className:"eyebrow",children:"Your learning spaces"}),u.jsx("h1",{children:"Your playgrounds"}),u.jsxs("p",{children:["Choose a course to continue learning. ",b?"Review Computer Science I lessons and your existing verified results. Practice is local to this test build.":"Complete lessons to fill your progress bars."]})]}),u.jsx("div",{className:"course-card-grid",children:g.filter(k=>k.id!=="tsi-math").map(k=>u.jsx(Ky,{course:k,completedLessons:y,onOpen:()=>l(k.id)},k.id))}),!b&&u.jsxs("button",{type:"button",className:"wide-shortcut challenge-bank-shortcut",onClick:p,children:[u.jsx(Fd,{size:23}),u.jsxs("span",{children:[u.jsx("strong",{children:"Shared Challenge Bank"}),u.jsx("small",{children:"Practice one problem in Python, Java, JavaScript, or C#."})]}),u.jsx("span",{"aria-hidden":"true",children:"→"})]}),!b&&u.jsx($y,{onClick:c})]})}function Yy({course:l,openCourse:c,openProject:p,openChallenges:g,completedLessons:y=[],assignments:b=[],grades:k=[],courseColors:C={},onSetCourseColor:S,onResetCourseColor:j,readOnlyMode:N=!1}){var Y;const F=tm(l,y),[A,X]=we.useState(!1),D=qg(l,C);return u.jsxs("div",{className:"course-landing",children:[u.jsxs("header",{className:"course-hero surface-card",children:[u.jsx("button",{type:"button",className:"icon-button course-color-settings",onClick:()=>X(J=>!J),"aria-label":A?"Close course color settings":`Change ${l.label} color`,title:A?"Close settings":"Course color","aria-expanded":A,"aria-controls":"course-color-controls",children:A?u.jsx(Hd,{size:17}):u.jsx(dh,{size:17})}),u.jsx("div",{className:"eyebrow",children:"Course overview"}),u.jsx("h1",{children:l.label}),u.jsx("p",{children:l.description}),u.jsxs("div",{className:"course-hero-stats",children:[u.jsxs("span",{children:[u.jsx(Py,{size:16})," ",l.units.length," units"]}),u.jsxs("span",{children:[u.jsx(Yl,{size:16})," ",ic(l).length," lessons"]})]}),u.jsxs("button",{className:"btn primary",disabled:!ic(l).length,onClick:()=>c(l.id,ic(l)[0]),children:["Start learning ",u.jsx(ti,{size:16})]}),A&&u.jsxs("section",{id:"course-color-controls",className:"course-color-controls","aria-label":"Choose a course color",children:[u.jsxs("div",{className:"course-color-control-copy",children:[u.jsx("strong",{children:"Course color"}),u.jsx("p",{children:"Make this course your own. The color updates throughout your Playground."})]}),u.jsxs("label",{className:"course-color-picker",children:[u.jsx("input",{type:"color",value:D,onChange:J=>S==null?void 0:S(l.id,J.target.value),"aria-label":`Choose a color for ${l.label}`}),u.jsx("span",{children:"Choose color"})]}),u.jsx("button",{type:"button",className:"btn",onClick:()=>j==null?void 0:j(l.id),children:"Reset to default"}),u.jsx("button",{type:"button",className:"btn",onClick:()=>X(!1),children:"Done"})]})]}),l.publishedContent&&u.jsx("p",{className:"course-published-note",children:"Real published lessons are shown here. Practice in this preview does not change your grades."}),l.contentLoadingError&&u.jsxs("p",{className:"course-published-note",role:"alert",children:["Published course materials could not be loaded: ",l.contentLoadingError,". Sample lessons are not substituted."]}),!l.publishedContent&&!l.contentLoadingError&&u.jsx("p",{className:"course-published-note",children:"Course materials are not yet published here. This is a design preview, not a course to assign."}),l.tsiDraft&&u.jsx("p",{className:"course-published-note",children:"The 20-day TSI schedule is an outline; four strand lessons are drafts. Unwritten sessions are not available for practice."}),u.jsxs("p",{className:"course-landing-progress",children:[F.completed," of ",F.total," lessons ",N?"with verified grades":l.publishedContent?"marked complete in preview":"completed"," · ",F.percent,"%"]}),u.jsx("div",{className:"course-landing-heading",children:u.jsxs("div",{children:[u.jsx("h2",{children:"Units & lessons"}),u.jsx("p",{children:"Choose a unit or jump directly into a lesson."})]})}),u.jsx("div",{className:"unit-card-grid",children:l.units.map((J,M)=>u.jsxs("section",{className:"unit-card surface-card",children:[u.jsxs("header",{className:"unit-card-header",children:[u.jsxs("span",{className:"unit-badge",children:["UNIT ",String(cc(J,M+1)).padStart(2,"0")]}),u.jsx("h3",{title:Rs(J),children:Rs(J)}),J.description&&u.jsx("p",{children:J.description})]}),u.jsx("div",{className:"unit-lessons",children:rs(J).map((W,B)=>u.jsxs("a",{className:"unit-lesson-link",href:Md(l,W),onClick:H=>{H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey||(H.preventDefault(),c(l.id,W))},children:[u.jsx("span",{className:"unit-lesson-index",children:B+1}),u.jsxs("span",{className:"unit-lesson-label",children:[u.jsx("strong",{title:no(l,W),children:no(l,W)}),(()=>{var V,ce;const H=Od("lesson:"+W,{assignments:b,grades:k,completedLessons:y});return H.dueDate||H.completed?u.jsxs("span",{className:"unit-assignment-meta",children:[u.jsxs("span",{className:`assignment-status ${H.state}`,children:[u.jsx("span",{className:`assignment-dot ${H.state}`,"aria-hidden":"true"}),H.completed?"Completed":H.state==="overdue"?"Overdue":"Assigned"]}),H.dueDate&&u.jsxs("small",{children:["Due ",Td(H.dueDate)]}),H.grade&&u.jsxs("small",{children:[H.grade.earned," / ",H.grade.possible," pts"]})]}):u.jsxs("small",{children:[(V=to(l,W))==null?void 0:V.kind,(ce=to(l,W))!=null&&ce.difficulty?` · ${to(l,W).difficulty}`:""]})})()]}),u.jsx(Vp,{size:16})]},W))})]},J.id))}),!!((Y=l.projects)!=null&&Y.length)&&u.jsxs("section",{className:"course-projects surface-card",children:[u.jsx("div",{className:"eyebrow",children:"Published guided projects"}),u.jsx("h2",{children:"Projects"}),u.jsx("div",{className:"unit-card-grid",children:l.projects.map(J=>u.jsxs("a",{className:"unit-lesson-link",href:rm(l,J.id),onClick:M=>{M.button!==0||M.metaKey||M.ctrlKey||M.shiftKey||M.altKey||(M.preventDefault(),p(l.id,J.id))},children:[u.jsxs("span",{className:"unit-lesson-label",children:[u.jsx("strong",{children:J.title}),u.jsxs("small",{children:[J.steps.length," steps · ",J.summary]})]}),u.jsx(Vp,{size:16})]},J.id))})]}),u.jsxs("section",{className:"course-challenges-shelf surface-card",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Shared practice library"}),u.jsx("h2",{children:"Related programming challenges"}),u.jsx("p",{children:"Browse reusable problems suited to this course. Review each challenge's prerequisites before recommending it to students."})]}),u.jsxs("a",{href:Ul(l.id),className:"btn",onClick:J=>{J.button!==0||J.metaKey||J.ctrlKey||J.shiftKey||J.altKey||(J.preventDefault(),g(l.id))},children:[u.jsx(Fd,{size:16})," Browse challenges"]})]})]})}function Vy({selectedTopic:l,attempts:c,setAttempts:p,openCourse:g,completedLessons:y,onToggleLessonComplete:b}){const{track:k,topic:C}=l,[S,j]=we.useState(0),[N,F]=we.useState(null),[A,X]=we.useState(!1),D=C.questions[S],Y=C.questions.filter(H=>c[H.id]!==void 0).length,J=y.includes(C.id);function M(H){j(H),F(null),X(!1)}function W(){N===null||A||(X(!0),p(H=>({...H,[D.id]:{chosen:N,correct:N===D.correct}})))}const B=N===D.correct;return u.jsxs("section",{className:"test-prep-practice",children:[u.jsxs("button",{type:"button",className:"test-prep-back",onClick:()=>g("test-prep"),children:[u.jsx(sm,{size:16})," All Test Prep"]}),u.jsxs("div",{className:"surface-card test-prep-practice-header",children:[u.jsxs("div",{className:"eyebrow",children:[k.title," / ",C.title]}),u.jsx("h1",{children:C.title}),u.jsx("p",{children:C.description}),u.jsx("p",{className:"muted",children:"Original sample questions only. Your practice results are not official exam scores."}),u.jsxs("div",{className:"test-prep-practice-meta",children:[u.jsxs("span",{children:[Y," of ",C.questions.length," attempted"]}),J&&u.jsxs("span",{className:"test-prep-complete",children:[u.jsx(ac,{size:16})," Practiced"]})]})]}),u.jsxs("div",{className:"surface-card test-prep-question",children:[u.jsxs("div",{className:"test-prep-question-top",children:[u.jsxs("strong",{children:["Question ",S+1," of ",C.questions.length]}),u.jsx("span",{className:"muted",children:"Practice / multiple choice"})]}),u.jsx("h2",{children:D.prompt}),u.jsxs("fieldset",{className:"test-prep-options",disabled:A,children:[u.jsx("legend",{className:"sr-only",children:"Choose your answer"}),D.options.map((H,V)=>u.jsxs("label",{className:"test-prep-option "+(N===V?"selected ":"")+(A&&V===D.correct?"correct":""),children:[u.jsx("input",{type:"radio",name:D.id,checked:N===V,onChange:()=>F(V)}),u.jsx("span",{className:"test-prep-letter",children:String.fromCharCode(65+V)}),u.jsx("span",{children:H})]},V))]}),A&&u.jsxs("div",{className:"test-prep-feedback "+(B?"is-correct":"is-incorrect"),role:"status",children:[u.jsx("strong",{children:B?"Correct!":"Review this answer"}),u.jsx("p",{children:D.explanation})]}),u.jsxs("div",{className:"test-prep-actions",children:[u.jsx("button",{type:"button",className:"btn primary",disabled:N===null||A,onClick:W,children:"Check answer"}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>{F(null),X(!1)},children:[u.jsx(Wd,{size:14})," Try again"]})]})]}),u.jsxs("nav",{className:"test-prep-topic-nav","aria-label":"Sample question navigation",children:[S>0?u.jsxs("button",{type:"button",className:"btn",onClick:()=>M(S-1),children:[u.jsx(Dd,{size:16})," Previous"]}):u.jsx("span",{}),S<C.questions.length-1?u.jsxs("button",{type:"button",className:"btn",onClick:()=>M(S+1),children:["Next question ",u.jsx(ti,{size:16})]}):u.jsx("span",{})]}),Y===C.questions.length&&!J&&u.jsxs("div",{className:"test-prep-completion surface-card",children:[u.jsx("span",{children:"You've attempted every sample in this subject."}),u.jsx("button",{type:"button",className:"btn primary",onClick:()=>b==null?void 0:b(C.id),children:"Mark topic practiced"})]}),u.jsxs("p",{className:"test-prep-official",children:["Need more questions? ",u.jsxs("a",{href:k.reference,target:"_blank",rel:"noreferrer",children:["Visit official ",k.title," preparation resources ",u.jsx(lm,{size:13})]})]})]})}function Jy({lessonId:l,openCourse:c,completedLessons:p=[],onToggleLessonComplete:g}){const[y,b]=cn("designlab:test-prep-sample-answers",{}),k=l?Pg(l):null;return u.jsx("div",{className:"course-layout integrated-course","data-course":"test-prep",children:u.jsxs("div",{className:"course-main",children:[u.jsxs("div",{className:"course-breadcrumb",children:[u.jsx("button",{type:"button",onClick:()=>c(null),children:"All playgrounds"}),u.jsx(ti,{size:14}),l?u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:()=>c("test-prep"),children:"Test Prep"}),u.jsx(ti,{size:14}),u.jsx("span",{children:k==null?void 0:k.topic.title})]}):u.jsx("span",{children:"Test Prep"})]}),k?u.jsx(Vy,{selectedTopic:k,attempts:y,setAttempts:b,openCourse:c,completedLessons:p,onToggleLessonComplete:g},l):u.jsxs("div",{className:"test-prep-hub",children:[u.jsxs("header",{className:"surface-card test-prep-hero",children:[u.jsx("div",{className:"eyebrow",children:"Test Prep / Self-study"}),u.jsx("h1",{children:"Choose a test to prepare for"}),u.jsx("p",{children:"Study in short sessions, answer original sample questions, and review the reasoning behind each answer. No class code required."}),u.jsx("p",{className:"muted",children:"This is a preview. Practice history stays in this browser. No scores are sent to a teacher, and no official exam scores are predicted."})]}),u.jsxs("div",{className:"test-prep-exams",children:[u.jsxs("section",{className:"surface-card test-prep-exam","data-exam":"tsi",children:[u.jsx("div",{className:"test-prep-exam-icon",children:u.jsx(tf,{size:23})}),u.jsx("div",{className:"eyebrow",children:"College readiness"}),u.jsx("h2",{children:"TSI Math"}),u.jsx("p",{children:"Continue the existing TSIA2 math curriculum and diagnostic work without changing old lesson links."}),u.jsx("p",{className:"test-prep-exam-meta",children:"Existing course / classroom study"}),u.jsxs("button",{type:"button",className:"btn primary",onClick:()=>c("tsi-math"),children:["Open TSI Math ",u.jsx(ti,{size:16})]})]}),uc.map(C=>{const S=C.topics.reduce((N,F)=>N+F.questions.length,0),j=C.topics.reduce((N,F)=>N+F.questions.filter(A=>y[A.id]!==void 0).length,0);return u.jsxs("section",{className:"surface-card test-prep-exam","data-exam":C.id,children:[u.jsx("div",{className:"test-prep-exam-icon",children:C.id==="act"?u.jsx(Ty,{size:23}):u.jsx(tf,{size:23})}),u.jsx("div",{className:"eyebrow",children:C.subtitle}),u.jsx("h2",{children:C.title}),u.jsx("p",{children:C.description}),u.jsxs("p",{className:"test-prep-exam-meta",children:[C.topics.length," subjects · ",j,"/",S," samples attempted"]}),u.jsx("progress",{className:"course-progress-track",value:j,max:S,"aria-label":C.title+" sample practice progress"}),u.jsx("div",{className:"test-prep-topic-links",children:C.topics.map(N=>u.jsxs("button",{type:"button",onClick:()=>c("test-prep",N.id),children:[u.jsx("span",{children:N.title}),u.jsx(ti,{size:15})]},N.id))}),u.jsxs("button",{type:"button",className:"btn primary",onClick:()=>c("test-prep",C.topics[0].id),children:["Start ",C.title," samples ",u.jsx(ti,{size:16})]})]},C.id)})]})]})]})})}function pc({axis:l,onDrag:c}){const p=we.useRef(!1),g=l==="columns",y=()=>p.current=!1;return u.jsx("div",{className:pa("splitter",g?"column-split":"row-split"),role:"separator","aria-label":g?"Resize instructions and editor":"Resize editor and console","aria-orientation":g?"vertical":"horizontal",tabIndex:0,onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),p.current=!0},onPointerMove:b=>{p.current&&b.buttons===1&&c(b)},onPointerUp:y,onLostPointerCapture:y,children:u.jsx("span",{})})}function hh({eyebrow:l,children:c,actions:p}){return u.jsxs("div",{className:"page-title-row",children:[u.jsxs("div",{children:[l&&u.jsx("div",{className:"eyebrow",children:l}),u.jsx("h1",{children:c})]}),p&&u.jsx("div",{className:"page-actions",children:p})]})}function Ju({task:l,unit:c,unitNumber:p,isTsi:g,isCompleted:y=!1,assignment:b=null,grade:k=null,onToggleCompleted:C,readOnlyMode:S=!1}){const j=(b==null?void 0:b.id)||(k==null?void 0:k.id)||"",N=Od(j,{assignments:b?[b]:[],grades:k?[k]:[],completedLessons:y?[j.replace(/^lesson:/,"")]:[]});return u.jsxs("div",{className:"lesson-header",children:[u.jsxs("div",{className:"eyebrow",children:["Unit ",cc(c,p)," · ",Rs(c)," ",u.jsx("span",{className:"dot",children:"·"})," ",l.kind]}),u.jsx(hh,{actions:u.jsxs("div",{className:"lesson-heading-actions",children:[!g&&(l==null?void 0:l.points)!=null&&u.jsx("span",{className:"points-tag",children:k?`${k.earned} / ${k.possible} pts`:`${l.points} points available`}),S&&!k?u.jsx("span",{className:"points-tag",children:"Verified scores only"}):k?u.jsxs("span",{className:"btn completion-toggle completed",children:[u.jsx(ac,{size:16})," Completed"]}):u.jsxs("button",{type:"button",className:`btn completion-toggle ${y?"completed":""}`,"aria-pressed":y,onClick:C,children:[y?u.jsx(ac,{size:16}):u.jsx(wy,{size:16}),y?"Completed":"Mark complete"]})]}),children:l.title}),u.jsx("p",{children:l.challenge}),(b==null?void 0:b.dueDate)&&u.jsxs("div",{className:"lesson-assignment-info",children:[u.jsx("span",{className:`assignment-status ${N.state}`,children:N.state==="completed"?"Completed":N.state==="overdue"?"Overdue":"Assigned"}),u.jsxs("span",{children:["Due ",Td(b.dueDate)]})]})]})}const fh={"tsi-ratios":{prompt:"A recipe uses 3 cups of water for every 5 cups of rice. How many cups of water are needed for 15 cups of rice?",options:["5 cups","9 cups","12 cups","25 cups"],correct:1,explanation:"15 is three times 5, so multiply the 3 cups of water by 3 to get 9."},"tsi-percents":{prompt:"A $60 backpack is discounted by 25%. What is the sale price?",options:["$15","$35","$45","$75"],correct:2,explanation:"25% of $60 is $15; subtract $15 from $60 to get $45."},"tsi-equations":{prompt:"Solve for x: 4x + 6 = 22.",options:["2","4","6","7"],correct:1,explanation:"Subtract 6 from both sides to get 4x = 16, then divide by 4: x = 4."},"tsi-slope":{prompt:"A table gives points (1, 3), (2, 5), and (3, 7). What is the slope?",options:["1","2","3","4"],correct:1,explanation:"As x goes up by 1, y goes up by 2, so slope = 2/1 = 2."}},Xy=`# Find an Inefficiency

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
`,Qy=`# Interpret User Feedback

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
`,Zy=`# Interview for Evidence

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
`,ev=`# Make a Minimum Viable Prototype

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
`,tv=`# Player Decisions

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
`,nv=`# Variables for a Game

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
`,rv=`# Decision Making

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
`,iv=`# Format a Summary

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
`,sv=`# Lists and Indexing

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
`,av=`# For Loops

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
`,lv=`<!-- Learning example adapted from mswhitby/computer-science-1/docs/units/content/02-values-and-variables/lessons/01-meet-variables.md; displayed in independent React preview. -->
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
`,uv=`# Your First React Card

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
`,cv=`# Interactive React State

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
`,dv=`# Solve Linear Equations

## Learn

Solve an equation by doing the same operation to both sides. For 3x + 5 = 20, first subtract 5, then divide by 3.

### Example

Explain the quantities and operations before calculating.

## Practice

Solve 4x + 6 = 22. Explain each step.

Choose an answer in the practice card.
`,pv=`# Percents and Discounts

## Learn

A percent compares a quantity with 100. To find 20% of 50, multiply 0.20 × 50 = 10.

### Example

Explain the quantities and operations before calculating.

## Practice

A backpack costs $60 and is discounted by 25%. What is the sale price?

Choose an answer in the practice card.
`,hv=`# Ratios and Rates

## Learn

A ratio compares quantities. A **unit rate** tells us how many of one item correspond to one unit of another.

Example: If 3 markers are shared by 5 students, the number of markers per student is:

**3 ÷ 5 = 0.6 markers per student.**

## Practice

A group of 15 students needs markers at the same rate. How many markers are needed? Explain how you know.
`,fv=`# Slope and Rate of Change

## Learn

Slope is the change in y divided by the change in x. A constant rate makes a linear relationship.

### Example

Explain the quantities and operations before calculating.

## Practice

The table gives (1, 3), (2, 5), and (3, 7). What is the slope?

Choose an answer in the practice card.
`,mv=`# Trace a Java Array

## Learn

An array holds multiple values. Java arrays start at index **0**.

\`\`\`java
int[] scores = {2, 4, 6};
System.out.println(scores[0]); // 2
\`\`\`

## Practice

Trace the loop in the starter code. Record every index and the updated element value in a table. Then write the final array.
`,gv=`# Trace Java Loops

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
`,yv=`# Method Calls and Scope

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
`,vv=`# String Indexing

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
`,xv=`# Collision Events

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
`,bv=`<!-- Learning example adapted from mswhitby/game-programming/samples/PlayerController.md (sample-lessons); displayed in independent React preview. -->
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
`,wv=`# Score and Feedback

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
`,kv=`# Events and Forms

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
`,Sv=`# Responsive Layouts

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
`;function mh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var el=mh();function dm(l){el=l}var sc={exec:()=>null};function Gt(l,c=""){let p=typeof l=="string"?l:l.source;const g={replace:(y,b)=>{let k=typeof b=="string"?b:b.source;return k=k.replace(Hr.caret,"$1"),p=p.replace(y,k),g},getRegex:()=>new RegExp(p,c)};return g}var Hr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},_v=/^(?:[ \t]*(?:\n|$))+/,Cv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Tv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gh=/(?:[*+-]|\d{1,9}[.)])/,pm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,hm=Gt(pm).replace(/bull/g,gh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Nv=Gt(pm).replace(/bull/g,gh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),yh=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ev=/^[^\n]+/,vh=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Lv=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",vh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Pv=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,gh).getRegex(),Bd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",xh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Av=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",xh).replace("tag",Bd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fm=Gt(yh).replace("hr",hc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bd).getRegex(),Rv=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fm).getRegex(),bh={blockquote:Rv,code:Cv,def:Lv,fences:Tv,heading:jv,hr:hc,html:Av,lheading:hm,list:Pv,newline:_v,paragraph:fm,table:sc,text:Ev},rf=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bd).getRegex(),Iv={...bh,lheading:Nv,table:rf,paragraph:Gt(yh).replace("hr",hc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bd).getRegex()},Ov={...bh,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",xh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:sc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(yh).replace("hr",hc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Mv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Dv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mm=/^( {2,}|\\)\n(?!\s*$)/,zv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ud=/[\p{P}\p{S}]/u,wh=/[\s\p{P}\p{S}]/u,gm=/[^\s\p{P}\p{S}]/u,Fv=Gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,wh).getRegex(),ym=/(?!~)[\p{P}\p{S}]/u,Wv=/(?!~)[\s\p{P}\p{S}]/u,Hv=/(?:[^\s\p{P}\p{S}]|~)/u,Bv=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,vm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Uv=Gt(vm,"u").replace(/punct/g,Ud).getRegex(),qv=Gt(vm,"u").replace(/punct/g,ym).getRegex(),xm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Kv=Gt(xm,"gu").replace(/notPunctSpace/g,gm).replace(/punctSpace/g,wh).replace(/punct/g,Ud).getRegex(),$v=Gt(xm,"gu").replace(/notPunctSpace/g,Hv).replace(/punctSpace/g,Wv).replace(/punct/g,ym).getRegex(),Gv=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,gm).replace(/punctSpace/g,wh).replace(/punct/g,Ud).getRegex(),Yv=Gt(/\\(punct)/,"gu").replace(/punct/g,Ud).getRegex(),Vv=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Jv=Gt(xh).replace("(?:-->|$)","-->").getRegex(),Xv=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Jv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Nd=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Qv=Gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Nd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bm=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",Nd).replace("ref",vh).getRegex(),wm=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",vh).getRegex(),Zv=Gt("reflink|nolink(?!\\()","g").replace("reflink",bm).replace("nolink",wm).getRegex(),kh={_backpedal:sc,anyPunctuation:Yv,autolink:Vv,blockSkip:Bv,br:mm,code:Dv,del:sc,emStrongLDelim:Uv,emStrongRDelimAst:Kv,emStrongRDelimUnd:Gv,escape:Mv,link:Qv,nolink:wm,punctuation:Fv,reflink:bm,reflinkSearch:Zv,tag:Xv,text:zv,url:sc},ex={...kh,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",Nd).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Nd).getRegex()},Jp={...kh,emStrongRDelimAst:$v,emStrongLDelim:qv,url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},tx={...Jp,br:Gt(mm).replace("{2,}","*").getRegex(),text:Gt(Jp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},md={normal:bh,gfm:Iv,pedantic:Ov},Xu={normal:kh,gfm:Jp,breaks:tx,pedantic:ex},nx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sf=l=>nx[l];function Ps(l,c){if(c){if(Hr.escapeTest.test(l))return l.replace(Hr.escapeReplace,sf)}else if(Hr.escapeTestNoEncode.test(l))return l.replace(Hr.escapeReplaceNoEncode,sf);return l}function af(l){try{l=encodeURI(l).replace(Hr.percentDecode,"%")}catch{return null}return l}function of(l,c){var b;const p=l.replace(Hr.findPipe,(k,C,S)=>{let j=!1,N=C;for(;--N>=0&&S[N]==="\\";)j=!j;return j?"|":" |"}),g=p.split(Hr.splitPipe);let y=0;if(g[0].trim()||g.shift(),g.length>0&&!((b=g.at(-1))!=null&&b.trim())&&g.pop(),c)if(g.length>c)g.splice(c);else for(;g.length<c;)g.push("");for(;y<g.length;y++)g[y]=g[y].trim().replace(Hr.slashPipe,"|");return g}function Qu(l,c,p){const g=l.length;if(g===0)return"";let y=0;for(;y<g&&l.charAt(g-y-1)===c;)y++;return l.slice(0,g-y)}function rx(l,c){if(l.indexOf(c[1])===-1)return-1;let p=0;for(let g=0;g<l.length;g++)if(l[g]==="\\")g++;else if(l[g]===c[0])p++;else if(l[g]===c[1]&&(p--,p<0))return g;return p>0?-2:-1}function lf(l,c,p,g,y){const b=c.href,k=c.title||null,C=l[1].replace(y.other.outputLinkReplace,"$1");g.state.inLink=!0;const S={type:l[0].charAt(0)==="!"?"image":"link",raw:p,href:b,title:k,text:C,tokens:g.inlineTokens(C)};return g.state.inLink=!1,S}function ix(l,c,p){const g=l.match(p.other.indentCodeCompensation);if(g===null)return c;const y=g[1];return c.split(`
`).map(b=>{const k=b.match(p.other.beginningSpace);if(k===null)return b;const[C]=k;return C.length>=y.length?b.slice(y.length):b}).join(`
`)}var Ed=class{constructor(l){on(this,"options");on(this,"rules");on(this,"lexer");this.options=l||el}space(l){const c=this.rules.block.newline.exec(l);if(c&&c[0].length>0)return{type:"space",raw:c[0]}}code(l){const c=this.rules.block.code.exec(l);if(c){const p=c[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c[0],codeBlockStyle:"indented",text:this.options.pedantic?p:Qu(p,`
`)}}}fences(l){const c=this.rules.block.fences.exec(l);if(c){const p=c[0],g=ix(p,c[3]||"",this.rules);return{type:"code",raw:p,lang:c[2]?c[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):c[2],text:g}}}heading(l){const c=this.rules.block.heading.exec(l);if(c){let p=c[2].trim();if(this.rules.other.endingHash.test(p)){const g=Qu(p,"#");(this.options.pedantic||!g||this.rules.other.endingSpaceChar.test(g))&&(p=g.trim())}return{type:"heading",raw:c[0],depth:c[1].length,text:p,tokens:this.lexer.inline(p)}}}hr(l){const c=this.rules.block.hr.exec(l);if(c)return{type:"hr",raw:Qu(c[0],`
`)}}blockquote(l){const c=this.rules.block.blockquote.exec(l);if(c){let p=Qu(c[0],`
`).split(`
`),g="",y="";const b=[];for(;p.length>0;){let k=!1;const C=[];let S;for(S=0;S<p.length;S++)if(this.rules.other.blockquoteStart.test(p[S]))C.push(p[S]),k=!0;else if(!k)C.push(p[S]);else break;p=p.slice(S);const j=C.join(`
`),N=j.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");g=g?`${g}
${j}`:j,y=y?`${y}
${N}`:N;const F=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(N,b,!0),this.lexer.state.top=F,p.length===0)break;const A=b.at(-1);if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const X=A,D=X.raw+`
`+p.join(`
`),Y=this.blockquote(D);b[b.length-1]=Y,g=g.substring(0,g.length-X.raw.length)+Y.raw,y=y.substring(0,y.length-X.text.length)+Y.text;break}else if((A==null?void 0:A.type)==="list"){const X=A,D=X.raw+`
`+p.join(`
`),Y=this.list(D);b[b.length-1]=Y,g=g.substring(0,g.length-A.raw.length)+Y.raw,y=y.substring(0,y.length-X.raw.length)+Y.raw,p=D.substring(b.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:g,tokens:b,text:y}}}list(l){let c=this.rules.block.list.exec(l);if(c){let p=c[1].trim();const g=p.length>1,y={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const b=this.rules.other.listItemRegex(p);let k=!1;for(;l;){let S=!1,j="",N="";if(!(c=b.exec(l))||this.rules.block.hr.test(l))break;j=c[0],l=l.substring(j.length);let F=c[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),A=l.split(`
`,1)[0],X=!F.trim(),D=0;if(this.options.pedantic?(D=2,N=F.trimStart()):X?D=c[1].length+1:(D=c[2].search(this.rules.other.nonSpaceChar),D=D>4?1:D,N=F.slice(D),D+=c[1].length),X&&this.rules.other.blankLine.test(A)&&(j+=A+`
`,l=l.substring(A.length+1),S=!0),!S){const M=this.rules.other.nextBulletRegex(D),W=this.rules.other.hrRegex(D),B=this.rules.other.fencesBeginRegex(D),H=this.rules.other.headingBeginRegex(D),V=this.rules.other.htmlBeginRegex(D);for(;l;){const ce=l.split(`
`,1)[0];let le;if(A=ce,this.options.pedantic?(A=A.replace(this.rules.other.listReplaceNesting,"  "),le=A):le=A.replace(this.rules.other.tabCharGlobal,"    "),B.test(A)||H.test(A)||V.test(A)||M.test(A)||W.test(A))break;if(le.search(this.rules.other.nonSpaceChar)>=D||!A.trim())N+=`
`+le.slice(D);else{if(X||F.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(F)||H.test(F)||W.test(F))break;N+=`
`+A}!X&&!A.trim()&&(X=!0),j+=ce+`
`,l=l.substring(ce.length+1),F=le.slice(D)}}y.loose||(k?y.loose=!0:this.rules.other.doubleBlankLine.test(j)&&(k=!0));let Y=null,J;this.options.gfm&&(Y=this.rules.other.listIsTask.exec(N),Y&&(J=Y[0]!=="[ ] ",N=N.replace(this.rules.other.listReplaceTask,""))),y.items.push({type:"list_item",raw:j,task:!!Y,checked:J,loose:!1,text:N,tokens:[]}),y.raw+=j}const C=y.items.at(-1);if(C)C.raw=C.raw.trimEnd(),C.text=C.text.trimEnd();else return;y.raw=y.raw.trimEnd();for(let S=0;S<y.items.length;S++)if(this.lexer.state.top=!1,y.items[S].tokens=this.lexer.blockTokens(y.items[S].text,[]),!y.loose){const j=y.items[S].tokens.filter(F=>F.type==="space"),N=j.length>0&&j.some(F=>this.rules.other.anyLine.test(F.raw));y.loose=N}if(y.loose)for(let S=0;S<y.items.length;S++)y.items[S].loose=!0;return y}}html(l){const c=this.rules.block.html.exec(l);if(c)return{type:"html",block:!0,raw:c[0],pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]}}def(l){const c=this.rules.block.def.exec(l);if(c){const p=c[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),g=c[2]?c[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",y=c[3]?c[3].substring(1,c[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):c[3];return{type:"def",tag:p,raw:c[0],href:g,title:y}}}table(l){var k;const c=this.rules.block.table.exec(l);if(!c||!this.rules.other.tableDelimiter.test(c[2]))return;const p=of(c[1]),g=c[2].replace(this.rules.other.tableAlignChars,"").split("|"),y=(k=c[3])!=null&&k.trim()?c[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],b={type:"table",raw:c[0],header:[],align:[],rows:[]};if(p.length===g.length){for(const C of g)this.rules.other.tableAlignRight.test(C)?b.align.push("right"):this.rules.other.tableAlignCenter.test(C)?b.align.push("center"):this.rules.other.tableAlignLeft.test(C)?b.align.push("left"):b.align.push(null);for(let C=0;C<p.length;C++)b.header.push({text:p[C],tokens:this.lexer.inline(p[C]),header:!0,align:b.align[C]});for(const C of y)b.rows.push(of(C,b.header.length).map((S,j)=>({text:S,tokens:this.lexer.inline(S),header:!1,align:b.align[j]})));return b}}lheading(l){const c=this.rules.block.lheading.exec(l);if(c)return{type:"heading",raw:c[0],depth:c[2].charAt(0)==="="?1:2,text:c[1],tokens:this.lexer.inline(c[1])}}paragraph(l){const c=this.rules.block.paragraph.exec(l);if(c){const p=c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1];return{type:"paragraph",raw:c[0],text:p,tokens:this.lexer.inline(p)}}}text(l){const c=this.rules.block.text.exec(l);if(c)return{type:"text",raw:c[0],text:c[0],tokens:this.lexer.inline(c[0])}}escape(l){const c=this.rules.inline.escape.exec(l);if(c)return{type:"escape",raw:c[0],text:c[1]}}tag(l){const c=this.rules.inline.tag.exec(l);if(c)return!this.lexer.state.inLink&&this.rules.other.startATag.test(c[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(c[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(c[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(c[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:c[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:c[0]}}link(l){const c=this.rules.inline.link.exec(l);if(c){const p=c[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(p)){if(!this.rules.other.endAngleBracket.test(p))return;const b=Qu(p.slice(0,-1),"\\");if((p.length-b.length)%2===0)return}else{const b=rx(c[2],"()");if(b===-2)return;if(b>-1){const C=(c[0].indexOf("!")===0?5:4)+c[1].length+b;c[2]=c[2].substring(0,b),c[0]=c[0].substring(0,C).trim(),c[3]=""}}let g=c[2],y="";if(this.options.pedantic){const b=this.rules.other.pedanticHrefTitle.exec(g);b&&(g=b[1],y=b[3])}else y=c[3]?c[3].slice(1,-1):"";return g=g.trim(),this.rules.other.startAngleBracket.test(g)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(p)?g=g.slice(1):g=g.slice(1,-1)),lf(c,{href:g&&g.replace(this.rules.inline.anyPunctuation,"$1"),title:y&&y.replace(this.rules.inline.anyPunctuation,"$1")},c[0],this.lexer,this.rules)}}reflink(l,c){let p;if((p=this.rules.inline.reflink.exec(l))||(p=this.rules.inline.nolink.exec(l))){const g=(p[2]||p[1]).replace(this.rules.other.multipleSpaceGlobal," "),y=c[g.toLowerCase()];if(!y){const b=p[0].charAt(0);return{type:"text",raw:b,text:b}}return lf(p,y,p[0],this.lexer,this.rules)}}emStrong(l,c,p=""){let g=this.rules.inline.emStrongLDelim.exec(l);if(!g||g[3]&&p.match(this.rules.other.unicodeAlphaNumeric))return;if(!(g[1]||g[2]||"")||!p||this.rules.inline.punctuation.exec(p)){const b=[...g[0]].length-1;let k,C,S=b,j=0;const N=g[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(N.lastIndex=0,c=c.slice(-1*l.length+b);(g=N.exec(c))!=null;){if(k=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!k)continue;if(C=[...k].length,g[3]||g[4]){S+=C;continue}else if((g[5]||g[6])&&b%3&&!((b+C)%3)){j+=C;continue}if(S-=C,S>0)continue;C=Math.min(C,C+S+j);const F=[...g[0]][0].length,A=l.slice(0,b+g.index+F+C);if(Math.min(b,C)%2){const D=A.slice(1,-1);return{type:"em",raw:A,text:D,tokens:this.lexer.inlineTokens(D)}}const X=A.slice(2,-2);return{type:"strong",raw:A,text:X,tokens:this.lexer.inlineTokens(X)}}}}codespan(l){const c=this.rules.inline.code.exec(l);if(c){let p=c[2].replace(this.rules.other.newLineCharGlobal," ");const g=this.rules.other.nonSpaceChar.test(p),y=this.rules.other.startingSpaceChar.test(p)&&this.rules.other.endingSpaceChar.test(p);return g&&y&&(p=p.substring(1,p.length-1)),{type:"codespan",raw:c[0],text:p}}}br(l){const c=this.rules.inline.br.exec(l);if(c)return{type:"br",raw:c[0]}}del(l){const c=this.rules.inline.del.exec(l);if(c)return{type:"del",raw:c[0],text:c[2],tokens:this.lexer.inlineTokens(c[2])}}autolink(l){const c=this.rules.inline.autolink.exec(l);if(c){let p,g;return c[2]==="@"?(p=c[1],g="mailto:"+p):(p=c[1],g=p),{type:"link",raw:c[0],text:p,href:g,tokens:[{type:"text",raw:p,text:p}]}}}url(l){var p;let c;if(c=this.rules.inline.url.exec(l)){let g,y;if(c[2]==="@")g=c[0],y="mailto:"+g;else{let b;do b=c[0],c[0]=((p=this.rules.inline._backpedal.exec(c[0]))==null?void 0:p[0])??"";while(b!==c[0]);g=c[0],c[1]==="www."?y="http://"+c[0]:y=c[0]}return{type:"link",raw:c[0],text:g,href:y,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(l){const c=this.rules.inline.text.exec(l);if(c){const p=this.lexer.state.inRawBlock;return{type:"text",raw:c[0],text:c[0],escaped:p}}}},fa=class Xp{constructor(c){on(this,"tokens");on(this,"options");on(this,"state");on(this,"tokenizer");on(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=c||el,this.options.tokenizer=this.options.tokenizer||new Ed,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const p={other:Hr,block:md.normal,inline:Xu.normal};this.options.pedantic?(p.block=md.pedantic,p.inline=Xu.pedantic):this.options.gfm&&(p.block=md.gfm,this.options.breaks?p.inline=Xu.breaks:p.inline=Xu.gfm),this.tokenizer.rules=p}static get rules(){return{block:md,inline:Xu}}static lex(c,p){return new Xp(p).lex(c)}static lexInline(c,p){return new Xp(p).inlineTokens(c)}lex(c){c=c.replace(Hr.carriageReturn,`
`),this.blockTokens(c,this.tokens);for(let p=0;p<this.inlineQueue.length;p++){const g=this.inlineQueue[p];this.inlineTokens(g.src,g.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(c,p=[],g=!1){var y,b,k;for(this.options.pedantic&&(c=c.replace(Hr.tabCharGlobal,"    ").replace(Hr.spaceLine,""));c;){let C;if((b=(y=this.options.extensions)==null?void 0:y.block)!=null&&b.some(j=>(C=j.call({lexer:this},c,p))?(c=c.substring(C.raw.length),p.push(C),!0):!1))continue;if(C=this.tokenizer.space(c)){c=c.substring(C.raw.length);const j=p.at(-1);C.raw.length===1&&j!==void 0?j.raw+=`
`:p.push(C);continue}if(C=this.tokenizer.code(c)){c=c.substring(C.raw.length);const j=p.at(-1);(j==null?void 0:j.type)==="paragraph"||(j==null?void 0:j.type)==="text"?(j.raw+=`
`+C.raw,j.text+=`
`+C.text,this.inlineQueue.at(-1).src=j.text):p.push(C);continue}if(C=this.tokenizer.fences(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.heading(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.hr(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.blockquote(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.list(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.html(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.def(c)){c=c.substring(C.raw.length);const j=p.at(-1);(j==null?void 0:j.type)==="paragraph"||(j==null?void 0:j.type)==="text"?(j.raw+=`
`+C.raw,j.text+=`
`+C.raw,this.inlineQueue.at(-1).src=j.text):this.tokens.links[C.tag]||(this.tokens.links[C.tag]={href:C.href,title:C.title});continue}if(C=this.tokenizer.table(c)){c=c.substring(C.raw.length),p.push(C);continue}if(C=this.tokenizer.lheading(c)){c=c.substring(C.raw.length),p.push(C);continue}let S=c;if((k=this.options.extensions)!=null&&k.startBlock){let j=1/0;const N=c.slice(1);let F;this.options.extensions.startBlock.forEach(A=>{F=A.call({lexer:this},N),typeof F=="number"&&F>=0&&(j=Math.min(j,F))}),j<1/0&&j>=0&&(S=c.substring(0,j+1))}if(this.state.top&&(C=this.tokenizer.paragraph(S))){const j=p.at(-1);g&&(j==null?void 0:j.type)==="paragraph"?(j.raw+=`
`+C.raw,j.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=j.text):p.push(C),g=S.length!==c.length,c=c.substring(C.raw.length);continue}if(C=this.tokenizer.text(c)){c=c.substring(C.raw.length);const j=p.at(-1);(j==null?void 0:j.type)==="text"?(j.raw+=`
`+C.raw,j.text+=`
`+C.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=j.text):p.push(C);continue}if(c){const j="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(j);break}else throw new Error(j)}}return this.state.top=!0,p}inline(c,p=[]){return this.inlineQueue.push({src:c,tokens:p}),p}inlineTokens(c,p=[]){var C,S,j;let g=c,y=null;if(this.tokens.links){const N=Object.keys(this.tokens.links);if(N.length>0)for(;(y=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)N.includes(y[0].slice(y[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(y=this.tokenizer.rules.inline.anyPunctuation.exec(g))!=null;)g=g.slice(0,y.index)+"++"+g.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(y=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,y.index)+"["+"a".repeat(y[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let b=!1,k="";for(;c;){b||(k=""),b=!1;let N;if((S=(C=this.options.extensions)==null?void 0:C.inline)!=null&&S.some(A=>(N=A.call({lexer:this},c,p))?(c=c.substring(N.raw.length),p.push(N),!0):!1))continue;if(N=this.tokenizer.escape(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.tag(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.link(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.reflink(c,this.tokens.links)){c=c.substring(N.raw.length);const A=p.at(-1);N.type==="text"&&(A==null?void 0:A.type)==="text"?(A.raw+=N.raw,A.text+=N.text):p.push(N);continue}if(N=this.tokenizer.emStrong(c,g,k)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.codespan(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.br(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.del(c)){c=c.substring(N.raw.length),p.push(N);continue}if(N=this.tokenizer.autolink(c)){c=c.substring(N.raw.length),p.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(c))){c=c.substring(N.raw.length),p.push(N);continue}let F=c;if((j=this.options.extensions)!=null&&j.startInline){let A=1/0;const X=c.slice(1);let D;this.options.extensions.startInline.forEach(Y=>{D=Y.call({lexer:this},X),typeof D=="number"&&D>=0&&(A=Math.min(A,D))}),A<1/0&&A>=0&&(F=c.substring(0,A+1))}if(N=this.tokenizer.inlineText(F)){c=c.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(k=N.raw.slice(-1)),b=!0;const A=p.at(-1);(A==null?void 0:A.type)==="text"?(A.raw+=N.raw,A.text+=N.text):p.push(N);continue}if(c){const A="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(A);break}else throw new Error(A)}}return p}},Ld=class{constructor(l){on(this,"options");on(this,"parser");this.options=l||el}space(l){return""}code({text:l,lang:c,escaped:p}){var b;const g=(b=(c||"").match(Hr.notSpaceStart))==null?void 0:b[0],y=l.replace(Hr.endingNewline,"")+`
`;return g?'<pre><code class="language-'+Ps(g)+'">'+(p?y:Ps(y,!0))+`</code></pre>
`:"<pre><code>"+(p?y:Ps(y,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}heading({tokens:l,depth:c}){return`<h${c}>${this.parser.parseInline(l)}</h${c}>
`}hr(l){return`<hr>
`}list(l){const c=l.ordered,p=l.start;let g="";for(let k=0;k<l.items.length;k++){const C=l.items[k];g+=this.listitem(C)}const y=c?"ol":"ul",b=c&&p!==1?' start="'+p+'"':"";return"<"+y+b+`>
`+g+"</"+y+`>
`}listitem(l){var p;let c="";if(l.task){const g=this.checkbox({checked:!!l.checked});l.loose?((p=l.tokens[0])==null?void 0:p.type)==="paragraph"?(l.tokens[0].text=g+" "+l.tokens[0].text,l.tokens[0].tokens&&l.tokens[0].tokens.length>0&&l.tokens[0].tokens[0].type==="text"&&(l.tokens[0].tokens[0].text=g+" "+Ps(l.tokens[0].tokens[0].text),l.tokens[0].tokens[0].escaped=!0)):l.tokens.unshift({type:"text",raw:g+" ",text:g+" ",escaped:!0}):c+=g+" "}return c+=this.parser.parse(l.tokens,!!l.loose),`<li>${c}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let c="",p="";for(let y=0;y<l.header.length;y++)p+=this.tablecell(l.header[y]);c+=this.tablerow({text:p});let g="";for(let y=0;y<l.rows.length;y++){const b=l.rows[y];p="";for(let k=0;k<b.length;k++)p+=this.tablecell(b[k]);g+=this.tablerow({text:p})}return g&&(g=`<tbody>${g}</tbody>`),`<table>
<thead>
`+c+`</thead>
`+g+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){const c=this.parser.parseInline(l.tokens),p=l.header?"th":"td";return(l.align?`<${p} align="${l.align}">`:`<${p}>`)+c+`</${p}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Ps(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:c,tokens:p}){const g=this.parser.parseInline(p),y=af(l);if(y===null)return g;l=y;let b='<a href="'+l+'"';return c&&(b+=' title="'+Ps(c)+'"'),b+=">"+g+"</a>",b}image({href:l,title:c,text:p,tokens:g}){g&&(p=this.parser.parseInline(g,this.parser.textRenderer));const y=af(l);if(y===null)return Ps(p);l=y;let b=`<img src="${l}" alt="${p}"`;return c&&(b+=` title="${Ps(c)}"`),b+=">",b}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Ps(l.text)}},Sh=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}},ma=class Qp{constructor(c){on(this,"options");on(this,"renderer");on(this,"textRenderer");this.options=c||el,this.options.renderer=this.options.renderer||new Ld,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Sh}static parse(c,p){return new Qp(p).parse(c)}static parseInline(c,p){return new Qp(p).parseInline(c)}parse(c,p=!0){var y,b;let g="";for(let k=0;k<c.length;k++){const C=c[k];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const j=C,N=this.options.extensions.renderers[j.type].call({parser:this},j);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(j.type)){g+=N||"";continue}}const S=C;switch(S.type){case"space":{g+=this.renderer.space(S);continue}case"hr":{g+=this.renderer.hr(S);continue}case"heading":{g+=this.renderer.heading(S);continue}case"code":{g+=this.renderer.code(S);continue}case"table":{g+=this.renderer.table(S);continue}case"blockquote":{g+=this.renderer.blockquote(S);continue}case"list":{g+=this.renderer.list(S);continue}case"html":{g+=this.renderer.html(S);continue}case"paragraph":{g+=this.renderer.paragraph(S);continue}case"text":{let j=S,N=this.renderer.text(j);for(;k+1<c.length&&c[k+1].type==="text";)j=c[++k],N+=`
`+this.renderer.text(j);p?g+=this.renderer.paragraph({type:"paragraph",raw:N,text:N,tokens:[{type:"text",raw:N,text:N,escaped:!0}]}):g+=N;continue}default:{const j='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return g}parseInline(c,p=this.renderer){var y,b;let g="";for(let k=0;k<c.length;k++){const C=c[k];if((b=(y=this.options.extensions)==null?void 0:y.renderers)!=null&&b[C.type]){const j=this.options.extensions.renderers[C.type].call({parser:this},C);if(j!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(C.type)){g+=j||"";continue}}const S=C;switch(S.type){case"escape":{g+=p.text(S);break}case"html":{g+=p.html(S);break}case"link":{g+=p.link(S);break}case"image":{g+=p.image(S);break}case"strong":{g+=p.strong(S);break}case"em":{g+=p.em(S);break}case"codespan":{g+=p.codespan(S);break}case"br":{g+=p.br(S);break}case"del":{g+=p.del(S);break}case"text":{g+=p.text(S);break}default:{const j='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return g}},$p,bd=($p=class{constructor(l){on(this,"options");on(this,"block");this.options=l||el}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}provideLexer(){return this.block?fa.lex:fa.lexInline}provideParser(){return this.block?ma.parse:ma.parseInline}},on($p,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),$p),sx=class{constructor(...l){on(this,"defaults",mh());on(this,"options",this.setOptions);on(this,"parse",this.parseMarkdown(!0));on(this,"parseInline",this.parseMarkdown(!1));on(this,"Parser",ma);on(this,"Renderer",Ld);on(this,"TextRenderer",Sh);on(this,"Lexer",fa);on(this,"Tokenizer",Ed);on(this,"Hooks",bd);this.use(...l)}walkTokens(l,c){var g,y;let p=[];for(const b of l)switch(p=p.concat(c.call(this,b)),b.type){case"table":{const k=b;for(const C of k.header)p=p.concat(this.walkTokens(C.tokens,c));for(const C of k.rows)for(const S of C)p=p.concat(this.walkTokens(S.tokens,c));break}case"list":{const k=b;p=p.concat(this.walkTokens(k.items,c));break}default:{const k=b;(y=(g=this.defaults.extensions)==null?void 0:g.childTokens)!=null&&y[k.type]?this.defaults.extensions.childTokens[k.type].forEach(C=>{const S=k[C].flat(1/0);p=p.concat(this.walkTokens(S,c))}):k.tokens&&(p=p.concat(this.walkTokens(k.tokens,c)))}}return p}use(...l){const c=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(p=>{const g={...p};if(g.async=this.defaults.async||g.async||!1,p.extensions&&(p.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if("renderer"in y){const b=c.renderers[y.name];b?c.renderers[y.name]=function(...k){let C=y.renderer.apply(this,k);return C===!1&&(C=b.apply(this,k)),C}:c.renderers[y.name]=y.renderer}if("tokenizer"in y){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const b=c[y.level];b?b.unshift(y.tokenizer):c[y.level]=[y.tokenizer],y.start&&(y.level==="block"?c.startBlock?c.startBlock.push(y.start):c.startBlock=[y.start]:y.level==="inline"&&(c.startInline?c.startInline.push(y.start):c.startInline=[y.start]))}"childTokens"in y&&y.childTokens&&(c.childTokens[y.name]=y.childTokens)}),g.extensions=c),p.renderer){const y=this.defaults.renderer||new Ld(this.defaults);for(const b in p.renderer){if(!(b in y))throw new Error(`renderer '${b}' does not exist`);if(["options","parser"].includes(b))continue;const k=b,C=p.renderer[k],S=y[k];y[k]=(...j)=>{let N=C.apply(y,j);return N===!1&&(N=S.apply(y,j)),N||""}}g.renderer=y}if(p.tokenizer){const y=this.defaults.tokenizer||new Ed(this.defaults);for(const b in p.tokenizer){if(!(b in y))throw new Error(`tokenizer '${b}' does not exist`);if(["options","rules","lexer"].includes(b))continue;const k=b,C=p.tokenizer[k],S=y[k];y[k]=(...j)=>{let N=C.apply(y,j);return N===!1&&(N=S.apply(y,j)),N}}g.tokenizer=y}if(p.hooks){const y=this.defaults.hooks||new bd;for(const b in p.hooks){if(!(b in y))throw new Error(`hook '${b}' does not exist`);if(["options","block"].includes(b))continue;const k=b,C=p.hooks[k],S=y[k];bd.passThroughHooks.has(b)?y[k]=j=>{if(this.defaults.async)return Promise.resolve(C.call(y,j)).then(F=>S.call(y,F));const N=C.call(y,j);return S.call(y,N)}:y[k]=(...j)=>{let N=C.apply(y,j);return N===!1&&(N=S.apply(y,j)),N}}g.hooks=y}if(p.walkTokens){const y=this.defaults.walkTokens,b=p.walkTokens;g.walkTokens=function(k){let C=[];return C.push(b.call(this,k)),y&&(C=C.concat(y.call(this,k))),C}}this.defaults={...this.defaults,...g}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,c){return fa.lex(l,c??this.defaults)}parser(l,c){return ma.parse(l,c??this.defaults)}parseMarkdown(l){return(p,g)=>{const y={...g},b={...this.defaults,...y},k=this.onError(!!b.silent,!!b.async);if(this.defaults.async===!0&&y.async===!1)return k(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof p>"u"||p===null)return k(new Error("marked(): input parameter is undefined or null"));if(typeof p!="string")return k(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(p)+", string expected"));b.hooks&&(b.hooks.options=b,b.hooks.block=l);const C=b.hooks?b.hooks.provideLexer():l?fa.lex:fa.lexInline,S=b.hooks?b.hooks.provideParser():l?ma.parse:ma.parseInline;if(b.async)return Promise.resolve(b.hooks?b.hooks.preprocess(p):p).then(j=>C(j,b)).then(j=>b.hooks?b.hooks.processAllTokens(j):j).then(j=>b.walkTokens?Promise.all(this.walkTokens(j,b.walkTokens)).then(()=>j):j).then(j=>S(j,b)).then(j=>b.hooks?b.hooks.postprocess(j):j).catch(k);try{b.hooks&&(p=b.hooks.preprocess(p));let j=C(p,b);b.hooks&&(j=b.hooks.processAllTokens(j)),b.walkTokens&&this.walkTokens(j,b.walkTokens);let N=S(j,b);return b.hooks&&(N=b.hooks.postprocess(N)),N}catch(j){return k(j)}}}onError(l,c){return p=>{if(p.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const g="<p>An error occurred:</p><pre>"+Ps(p.message+"",!0)+"</pre>";return c?Promise.resolve(g):g}if(c)return Promise.reject(p);throw p}}},Qo=new sx;function Jt(l,c){return Qo.parse(l,c)}Jt.options=Jt.setOptions=function(l){return Qo.setOptions(l),Jt.defaults=Qo.defaults,dm(Jt.defaults),Jt};Jt.getDefaults=mh;Jt.defaults=el;Jt.use=function(...l){return Qo.use(...l),Jt.defaults=Qo.defaults,dm(Jt.defaults),Jt};Jt.walkTokens=function(l,c){return Qo.walkTokens(l,c)};Jt.parseInline=Qo.parseInline;Jt.Parser=ma;Jt.parser=ma.parse;Jt.Renderer=Ld;Jt.TextRenderer=Sh;Jt.Lexer=fa;Jt.lexer=fa.lex;Jt.Tokenizer=Ed;Jt.Hooks=bd;Jt.parse=Jt;Jt.options;Jt.setOptions;Jt.use;Jt.walkTokens;Jt.parseInline;ma.parse;fa.lex;/*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE */function uf(l,c){(c==null||c>l.length)&&(c=l.length);for(var p=0,g=Array(c);p<c;p++)g[p]=l[p];return g}function ax(l){if(Array.isArray(l))return l}function ox(l,c){var p=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(p!=null){var g,y,b,k,C=[],S=!0,j=!1;try{if(b=(p=p.call(l)).next,c!==0)for(;!(S=(g=b.call(p)).done)&&(C.push(g.value),C.length!==c);S=!0);}catch(N){j=!0,y=N}finally{try{if(!S&&p.return!=null&&(k=p.return(),Object(k)!==k))return}finally{if(j)throw y}}return C}}function lx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function ux(l,c){return ax(l)||ox(l,c)||cx(l,c)||lx()}function cx(l,c){if(l){if(typeof l=="string")return uf(l,c);var p={}.toString.call(l).slice(8,-1);return p==="Object"&&l.constructor&&(p=l.constructor.name),p==="Map"||p==="Set"?Array.from(l):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?uf(l,c):void 0}}const km=Object.entries,dx=Object.keys,cf=Object.setPrototypeOf,px=Object.isFrozen,Sm=Object.getPrototypeOf,_m=Object.getOwnPropertyDescriptor;let dr=Object.freeze,Qn=Object.seal,eo=Object.create,Cm=typeof Reflect<"u"&&Reflect,Pd=Cm.apply,Zp=Cm.construct;dr||(dr=function(c){return c});Qn||(Qn=function(c){return c});Pd||(Pd=function(c,p){for(var g=arguments.length,y=new Array(g>2?g-2:0),b=2;b<g;b++)y[b-2]=arguments[b];return c.apply(p,y)});Zp||(Zp=function(c){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return new c(...g)});const ca=Nn(Array.prototype.forEach),hx=Nn(Array.prototype.lastIndexOf),df=Nn(Array.prototype.pop),Zu=Nn(Array.prototype.push),fx=Nn(Array.prototype.slice),mx=Nn(Array.prototype.splice),$l=Array.isArray,Op=Tm(Set),Mp=Nn(Set.prototype.add),ec=Nn(Set.prototype.has),Vo=Nn(String.prototype.toLowerCase),Dp=Nn(String.prototype.toString),gx=Nn(String.prototype.match),gd=Nn(String.prototype.replace),zp=Nn(String.prototype.indexOf),yx=Nn(String.prototype.trim),vx=Nn(Number.prototype.toString),xx=Nn(Boolean.prototype.toString),pf=typeof BigInt>"u"?null:Nn(BigInt.prototype.toString),hf=typeof Symbol>"u"?null:Nn(Symbol.prototype.toString),Ar=Nn(Object.prototype.hasOwnProperty),tc=Nn(Object.prototype.toString),bx=RegExp.prototype.test,cr=function(c,p){return c instanceof RegExp&&(c.lastIndex=0),Pd(bx,c,[p])},da=Tm(TypeError);function Nn(l){return function(c){for(var p=arguments.length,g=new Array(p>1?p-1:0),y=1;y<p;y++)g[y-1]=arguments[y];return Pd(l,c,g)}}function Tm(l){return function(){for(var c=arguments.length,p=new Array(c),g=0;g<c;g++)p[g]=arguments[g];return Zp(l,p)}}function $t(l,c){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Vo;if(cf&&cf(l,null),!$l(c))return l;let g=c.length;for(;g--;){let y=c[g];if(typeof y=="string"){const b=p(y);b!==y&&(px(c)||(c[g]=b),y=b)}l[y]=!0}return l}function wx(l){for(let c=0;c<l.length;c++)Ar(l,c)||(l[c]=null);return l}function Ad(l){const c=eo(null);for(const g of km(l)){var p=ux(g,2);const y=p[0],b=p[1];Ar(l,y)&&($l(b)?c[y]=wx(b):b&&typeof b=="object"&&b.constructor===Object?c[y]=Ad(b):c[y]=b)}return c}function rc(l){const c=eo(null),p=dx(l);let g=p.length;for(;g--;)c[p[g]]=l[p[g]];return c}function kx(l){switch(typeof l){case"string":return l;case"number":return vx(l);case"boolean":return xx(l);case"bigint":return pf?pf(l):"0";case"symbol":return hf?hf(l):"Symbol()";case"undefined":return tc(l);case"function":case"object":{if(l===null)return tc(l);const c=l,p=Oi(c,"toString");if(typeof p=="function"){const g=p(c);return typeof g=="string"?g:tc(g)}return tc(l)}default:return tc(l)}}function Oi(l,c){for(;l!==null;){const g=_m(l,c);if(g){if(g.get)return Nn(g.get);if(typeof g.value=="function")return Nn(g.value)}l=Sm(l)}function p(){return null}return p}function Sx(l,c){for(;l!==null;){const p=_m(l,c);if(p)return p.get?Nn(p.get):null;l=Sm(l)}return null}function _x(l){if(!l)return!1;try{return cr(l,""),!0}catch{return!1}}const ff=dr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Fp=dr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Wp=dr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Cx=dr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Hp=dr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Tx=dr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),mf=dr(["#text"]),gf=dr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Bp=dr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),yf=dr(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),yd=dr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),jx=Qn(/{{[\w\W]*|^[\w\W]*}}/g),Nx=Qn(/<%[\w\W]*|^[\w\W]*%>/g),Ex=Qn(/\${[\w\W]*/g),Lx=Qn(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),Px=Qn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ax=Qn(/^aria-[\-\w]+$/),vf=Qn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Rx=Qn(/^(?:\w+script|data):/i),Ix=Qn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ox=Qn(/^html$/i),Mx=Qn(/^[a-z][.\w]*(-[.\w]+)+$/i),Up=Qn(/<[/\w!]/g),xf=Qn(/<[/\w]/g),Dx=Qn(/<\/no(script|embed|frames)/i),bf=Qn(/\/>/i),zx=Qn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),Fx=Qn(/^[\r\n\t ]+/),$n={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},Wx=dr($t({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Hx=function(){return typeof window>"u"?null:window},Bx=function(c,p){if(typeof c!="object"||typeof c.createPolicy!="function")return null;let g=null;const y="data-tt-policy-suffix";p&&p.hasAttribute(y)&&(g=p.getAttribute(y));const b="dompurify"+(g?"#"+g:"");try{return c.createPolicy(b,{createHTML(k){return k},createScriptURL(k){return k}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}},wf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Za=function(c,p,g,y){return Ar(c,p)&&$l(c[p])?$t(y.base?rc(y.base):{},c[p],y.transform):g},qp=function(c,p,g){const y=Ar(c,p)?c[p]:void 0;return y&&typeof y=="object"?Ad(y):g};function jm(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hx();const c=_e=>jm(_e);if(c.version="3.4.18",c.removed=[],!l||!l.document||l.document.nodeType!==$n.document||!l.Element)return c.isSupported=!1,c;let p=l.document;const g=p,y=g.currentScript,b=l.HTMLTemplateElement,k=l.Node,C=l.Element,S=l.NodeFilter,j=l.DOMParser,N=l.trustedTypes,F=C.prototype,A=Oi(F,"cloneNode"),X=Oi(F,"remove"),D=Oi(F,"removeAttributeNode"),Y=Oi(F,"nextSibling"),J=Oi(F,"childNodes"),M=Oi(F,"parentNode"),W=Oi(F,"shadowRoot"),B=Oi(F,"attributes"),H=k&&k.prototype?Oi(k.prototype,"nodeType"):null,V=k&&k.prototype?Oi(k.prototype,"nodeName"):null,ce=k&&k.prototype?Oi(k.prototype,"ownerDocument"):null,le=function(I){return H?H(I):I.nodeType},ve=function(I){return V?V(I):I.nodeName},Fe=Sx(F,"namespaceURI"),Te=function(I){return Fe?Fe(I):I.namespaceURI};if(typeof b=="function"){const _e=p.createElement("template");_e.content&&_e.content.ownerDocument&&(p=_e.content.ownerDocument)}let ae,Ce="",oe,ye=!1,L=0;const Q=function(){if(L>0)throw da('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},K=function(I){Q(),L++;try{return ae.createHTML(I)}finally{L--}},R=function(I){return ae&&fi?K(I):I},E=function(I){Q(),L++;try{return ae.createScriptURL(I)}finally{L--}},$=function(){return ye||(oe=Bx(N,y),ye=!0),oe},O=p,Z=O.implementation,Se=O.createNodeIterator,Ie=O.createDocumentFragment,qe=O.getElementsByTagName,Oe=g.importNode;let ke=wf();c.isSupported=typeof km=="function"&&typeof M=="function"&&Z&&Z.createHTMLDocument!==void 0;const Be=jx,Ke=Nx,et=Ex,$e=Px,Ft=Ax,Yt=Rx,Ct=Ix,xt=Mx;let tt=vf,Ue=null;const vt=$t({},[...ff,...Fp,...Wp,...Hp,...mf]);let yt=null;const Qe=$t({},[...gf,...Bp,...yf,...yd]);let ut=null,se=null,je=null;const he=Object.seal(eo(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,Ye=!0,at=!1,Ze=!0,mt=!1,pt=!0,Xt=!1,nr=!1,Sr=null,Rr=null,Br=!1,Ur=!1,bt=!1,fi=!1,rt=!0,_r=!1;const tn="user-content-";let It=!0,qt=!1,bn=null,gn=!1,En=null;const wn=$t({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ni=null;const On=$t({},["audio","video","img","source","image","track"]);let pr=null;const mi=$t({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ln="http://www.w3.org/1998/Math/MathML",as="http://www.w3.org/2000/svg",kn="http://www.w3.org/1999/xhtml";let Cr=kn,qr=!1,Ir=null;const Tr=$t({},[Ln,as,kn],Dp),gi=dr($t({},["mi","mo","mn","ms","mtext"]));let os=null;const Mn=dr($t({},["annotation-xml"]));let ls=null;const Mi=dr(eo(null)),Or=$t({},["title","style","font","a","script"]);let Gn=null;const yi=["application/xhtml+xml","text/html"],Di="text/html";let Bt=null,Mr=null;const us=p.createElement("form"),Rt=function(I){return I instanceof RegExp||I instanceof Function},zi=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!I||typeof I!="object")&&(I={}),I=Ad(I),Gn=yi.indexOf(I.PARSER_MEDIA_TYPE)===-1?Di:I.PARSER_MEDIA_TYPE,Bt=Gn==="application/xhtml+xml"?Dp:Vo,Ue=Za(I,"ALLOWED_TAGS",vt,{transform:Bt}),yt=Za(I,"ALLOWED_ATTR",Qe,{transform:Bt}),Ir=Za(I,"ALLOWED_NAMESPACES",Tr,{transform:Dp}),pr=Za(I,"ADD_URI_SAFE_ATTR",mi,{transform:Bt,base:mi}),ni=Za(I,"ADD_DATA_URI_TAGS",On,{transform:Bt,base:On}),En=Za(I,"FORBID_CONTENTS",wn,{transform:Bt}),se=Za(I,"FORBID_TAGS",eo(null),{transform:Bt}),je=Za(I,"FORBID_ATTR",eo(null),{transform:Bt}),gn=Ar(I,"USE_PROFILES")?I.USE_PROFILES&&typeof I.USE_PROFILES=="object"?Ad(I.USE_PROFILES):I.USE_PROFILES:!1,kt=I.ALLOW_ARIA_ATTR!==!1,Ye=I.ALLOW_DATA_ATTR!==!1,at=I.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,mt=I.SAFE_FOR_TEMPLATES||!1,pt=I.SAFE_FOR_XML!==!1,Xt=I.WHOLE_DOCUMENT||!1,Ur=I.RETURN_DOM||!1,bt=I.RETURN_DOM_FRAGMENT||!1,fi=I.RETURN_TRUSTED_TYPE||!1,Br=I.FORCE_BODY||!1,rt=I.SANITIZE_DOM!==!1,_r=I.SANITIZE_NAMED_PROPS||!1,It=I.KEEP_CONTENT!==!1,qt=I.IN_PLACE||!1,tt=_x(I.ALLOWED_URI_REGEXP)?I.ALLOWED_URI_REGEXP:vf,Cr=typeof I.NAMESPACE=="string"?I.NAMESPACE:kn,os=qp(I,"MATHML_TEXT_INTEGRATION_POINTS",gi),ls=qp(I,"HTML_INTEGRATION_POINTS",Mn);const ne=qp(I,"CUSTOM_ELEMENT_HANDLING",Mi);if(ut=eo(null),Ar(ne,"tagNameCheck")&&Rt(ne.tagNameCheck)&&(ut.tagNameCheck=ne.tagNameCheck),Ar(ne,"attributeNameCheck")&&Rt(ne.attributeNameCheck)&&(ut.attributeNameCheck=ne.attributeNameCheck),Ar(ne,"allowCustomizedBuiltInElements")&&typeof ne.allowCustomizedBuiltInElements=="boolean"&&(ut.allowCustomizedBuiltInElements=ne.allowCustomizedBuiltInElements),Qn(ut),mt&&(Ye=!1),bt&&(Ur=!0),gn&&((Ar(I,"ALLOWED_TAGS")||Ar(I,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ue=$t({},mf),yt=eo(null),gn.html===!0&&($t(Ue,ff),$t(yt,gf)),gn.svg===!0&&($t(Ue,Fp),$t(yt,Bp),$t(yt,yd)),gn.svgFilters===!0&&($t(Ue,Wp),$t(yt,Bp),$t(yt,yd)),gn.mathMl===!0&&($t(Ue,Hp),$t(yt,yf),$t(yt,yd))),he.tagCheck=null,he.attributeCheck=null,Ar(I,"ADD_TAGS")&&(typeof I.ADD_TAGS=="function"?he.tagCheck=I.ADD_TAGS:$l(I.ADD_TAGS)&&(Ue===vt&&(Ue=rc(Ue)),$t(Ue,I.ADD_TAGS,Bt))),Ar(I,"ADD_ATTR")&&(typeof I.ADD_ATTR=="function"?he.attributeCheck=I.ADD_ATTR:$l(I.ADD_ATTR)&&(yt===Qe&&(yt=rc(yt)),$t(yt,I.ADD_ATTR,Bt))),Ar(I,"ADD_FORBID_CONTENTS")&&$l(I.ADD_FORBID_CONTENTS)&&(En===wn&&(En=rc(En)),$t(En,I.ADD_FORBID_CONTENTS,Bt)),It&&(Ue["#text"]=!0),Xt&&$t(Ue,["html","head","body"]),Ue.table&&(Ue.tbody=!0,delete se.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw da('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=ae;ae=I.TRUSTED_TYPES_POLICY;try{Ce=K("")}catch(Le){throw ae=xe,Le}}else I.TRUSTED_TYPES_POLICY===null?(ae=void 0,Ce=""):(ae===void 0&&(ae=$()),ae&&typeof Ce=="string"&&(Ce=K("")));Mr=dr(I)},ri=$t({},[...Fp,...Wp,...Cx]),Vt=$t({},[...Hp,...Tx]),Je=function(I,ne,xe){return ne===kn?I==="svg":ne===Ln?I==="svg"&&(xe==="annotation-xml"||os[xe]):!!ri[I]},ii=function(I,ne,xe){return ne===kn?I==="math":ne===as?I==="math"&&ls[xe]:!!Vt[I]},cs=function(I,ne,xe){return ne===as&&!ls[xe]||ne===Ln&&!os[xe]?!1:!Vt[I]&&(Or[I]||!ri[I])},Yn=function(I){const ne=Te(I),xe=Vo(ve(I)),Le=M(I);let nt=Cr,ct="template";return Le&&le(Le)===$n.element&&(nt=Te(Le),ct=Vo(ve(Le))),Ir[ne]?ne===as?Je(xe,nt,ct):ne===Ln?ii(xe,nt,ct):ne===kn?cs(xe,nt,ct):Gn==="application/xhtml+xml":!1},T=function(I){Zu(c.removed,{element:I});try{M(I).removeChild(I)}catch{if(X(I),!M(I))throw da("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},U=function(I,ne,xe){try{D(I,ne)}catch{try{I.removeAttribute(xe)}catch{}}},me=function(I){jt(I);const ne=J(I);ne&&ca(fx(ne),xe=>{try{X(xe)}catch{}}),le(I)===$n.element&&pe(I,!1)},Ne=function(I,ne,xe){if(!xe)try{xe=ne.getAttributeNode(I)}catch{xe=null}if(Zu(c.removed,{attribute:xe||null,from:ne}),xe)U(ne,xe,I);else try{ne.removeAttribute(I)}catch{}if(I==="is")if(Ur||bt)try{T(ne)}catch{}else try{ne.setAttribute(I,"")}catch{}},pe=function(I,ne){const xe=B(I);if(xe)for(let Le=xe.length-1;Le>=0;--Le){const nt=xe[Le],ct=nt&&nt.name;typeof ct=="string"&&!(ne&&yt[Bt(ct)])&&U(I,nt,ct)}},He=function(I,ne){let xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const Le=[I];for(;Le.length>0;){const nt=Le.pop();if(ne(nt)===!1)continue;if(xe&&le(nt)===$n.element){const Tt=W(nt);xi(Tt)&&Le.push(Tt)}const ct=J(nt);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)Le.push(ct[Tt])}},jt=function(I){He(I,ne=>{le(ne)===$n.element&&pe(ne,!0)})},Qt=function(I){const ne=[];return He(I,xe=>{ne.push(xe)},!0),ne},Sn=function(I,ne){const xe=Op();ca(Qt(I),Le=>{le(Le)===$n.element&&Mp(xe,Le)}),ca(ne,Le=>{le(Le)===$n.element&&!ec(xe,Le)&&pe(Le,!0)})},Kr=function(I,ne){let xe=!1;return ca(c.removed,Le=>{Le.element&&(xe=xe||Le.element===I,jt(Le.element))}),Sn(I,ne),xe},tl=8,gt=function(I,ne){const xe=bn;let Le=null;const nt=()=>(Le||(Le=Op(),ca(ne,ct=>{Mp(Le,ct)})),Le);for(let ct=0;;ct++){const Tt=Qt(I),dn=[I];let Kt=!1;if(ca(Tt,hr=>{le(hr)===$n.documentFragment?Zu(dn,hr):!Kt&&!ec(xe,hr)&&(Kt=ec(nt(),hr))}),!Kt)return;if(ct>=tl)throw da("the tree kept changing during in-place sanitization; refusing to return it");ca(dn,(hr,Vn)=>{ro(hr,Vn>0,I,nt())})}},ro=function(I,ne,xe,Le){const nt=Wi(I);let ct;for(;ct=nt.nextNode();)!ec(Le,ct)||ec(bn,ct)||(ne&&ir(ke.uponSanitizeShadowNode,ct,null),zs(ct,xe))},io=function(I){bn&&Mp(bn,I)},Fi=function(I,ne){return pt?I==="patchsrc"?!0:I==="for"&&ne!=="label"&&ne!=="output":!1},rr=function(I){pt&&He(I,ne=>{const xe=le(ne);if(xe===$n.processingInstruction||xe===$n.comment&&cr(xf,ne.data)){try{X(ne)}catch{}return!1}if(xe===$n.element){const Le=ne,nt=Bt(ve(ne));try{Le.hasAttribute&&Le.hasAttribute("patchsrc")&&Le.removeAttribute("patchsrc"),Le.hasAttribute&&Le.hasAttribute("for")&&Fi("for",nt)&&Le.removeAttribute("for")}catch{}}return!0})},so=function(I){let ne=null,xe=null;if(Br)I="<remove></remove>"+I;else{const ct=gx(I,Fx);xe=ct&&ct[0]}Gn==="application/xhtml+xml"&&Cr===kn&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const Le=ae?K(I):I;if(Cr===kn)try{ne=new j().parseFromString(Le,Gn)}catch{}if(!ne||!ne.documentElement){ne=Z.createDocument(Cr,"template",null);try{ne.documentElement.innerHTML=qr?Ce:Le}catch{}}const nt=ne.body||ne.documentElement;return I&&xe&&nt.insertBefore(p.createTextNode(xe),nt.childNodes[0]||null),Cr===kn?qe.call(ne,Xt?"html":"body")[0]:Xt?ne.documentElement:nt},Wi=function(I){let ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const xe=ce?ce(I):I.ownerDocument;return Se.call(xe||I,I,(ne?0:S.SHOW_ELEMENT)|S.SHOW_COMMENT|S.SHOW_TEXT|S.SHOW_PROCESSING_INSTRUCTION|S.SHOW_CDATA_SECTION,null)},Nt=function(I){return I=gd(I,Be," "),I=gd(I,Ke," "),I=gd(I,et," "),I},ds=function(I){var ne;Is(I);const xe=(ne=I.querySelectorAll)===null||ne===void 0?void 0:ne.call(I,"template");xe&&ca(xe,Le=>{xi(Le.content)&&ds(Le.content)})},Is=function(I){I.normalize();const ne=Wi(I,!0);let xe=ne.nextNode();for(;xe;)xe.data=Nt(xe.data),xe=ne.nextNode()},vi=function(I){const ne=V?V(I):null;return typeof ne!="string"||Bt(ne)!=="form"?!1:typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||I.attributes!==B(I)||typeof I.removeAttribute!="function"||typeof I.removeAttributeNode!="function"||typeof I.getAttributeNode!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function"||I.nodeType!==H(I)||I.childNodes!==J(I)},va=function(I){if(!H||typeof I!="object"||I===null)return null;try{const ne=H(I);return typeof ne=="number"?ne:null}catch{return null}},xi=function(I){return va(I)===$n.documentFragment},Hi=function(I){return va(I)!==null};function ir(_e,I,ne){_e.length!==0&&ca(_e,xe=>{xe.call(c,I,ne,Mr)})}const xa=function(I,ne,xe){return!!(pt&&xe===$n.element&&I.hasChildNodes()&&!Hi(I.firstElementChild)&&cr(Up,I.textContent)&&cr(Up,I.innerHTML)||pt&&Wx[ne]&&xe===$n.element&&Te(I)===kn&&(Hi(I.firstElementChild)||typeof I.textContent=="string"&&cr(Up,I.textContent))||xe===$n.processingInstruction||pt&&xe===$n.comment&&cr(xf,I.data))},Dr=function(I,ne){if(I instanceof RegExp)return cr(I,ne);if(I instanceof Function){for(var xe=arguments.length,Le=new Array(xe>2?xe-2:0),nt=2;nt<xe;nt++)Le[nt-2]=arguments[nt];return!!I(ne,...Le)}return!1},si=function(I,ne,xe){if(!se[ne]&&ao(ne)&&Dr(ut.tagNameCheck,ne))return!1;if(It&&!En[ne]&&!En[Vo(ne)]){const Le=M(I),nt=J(I);if(nt&&Le){const ct=nt.length;for(let Tt=ct-1;Tt>=0;--Tt){const dn=I===xe?A(nt[Tt],!0):nt[Tt];Le.insertBefore(dn,Y(I))}}}return T(I),!0},Dn=function(I,ne,xe,Le){return I.length===0?ne:ne===xe||ne===Le?rc(ne):ne},$r=function(I,ne){return I===ne||M(I)!==null?!1:(qt&&jt(I),!0)},Os=function(I,ne){if(io(I),ir(ke.beforeSanitizeElements,I,null),$r(I,ne))return!0;if(vi(I))return T(I),!0;const xe=Bt(ve(I)),Le=le(I);if(Ue=Dn(ke.uponSanitizeElement,Ue,vt,Sr),ir(ke.uponSanitizeElement,I,{tagName:xe,allowedTags:Ue}),$r(I,ne))return!0;if(xa(I,xe,Le))return T(I),!0;if(se[xe]||!(he.tagCheck instanceof Function&&he.tagCheck(xe))&&!Ue[xe]){const nt=si(I,xe,ne);return nt===!1&&(ir(ke.afterSanitizeElements,I,null),$r(I,ne))?!0:nt}if(Le===$n.element&&!Yn(I)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&cr(Dx,I.innerHTML))return T(I),!0;if(mt&&Le===$n.text){const nt=I.textContent,ct=Nt(nt);nt!==ct&&(Zu(c.removed,{element:I.cloneNode()}),I.textContent=ct)}return ir(ke.afterSanitizeElements,I,null),$r(I,ne)},jr=function(I,ne,xe){if(je[ne]||Fi(ne,I)||rt&&(ne==="id"||ne==="name")&&(xe in p||xe in us))return!1;const Le=yt[ne]||he.attributeCheck instanceof Function&&he.attributeCheck(ne,I);if(Ye&&cr($e,ne)||kt&&cr(Ft,ne))return!0;if(!Le)return ao(I)&&Dr(ut.tagNameCheck,I)&&Dr(ut.attributeNameCheck,ne,I)||ne==="is"&&ut.allowCustomizedBuiltInElements&&Dr(ut.tagNameCheck,xe);if(pr[ne])return!0;const nt=gd(xe,Ct,"");return cr(tt,nt)||(ne==="src"||ne==="xlink:href"||ne==="href")&&I!=="script"&&zp(xe,"data:")===0&&ni[I]||at&&!cr(Yt,nt)?!0:!xe},Ms=$t({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ao=function(I){return!Ms[Vo(I)]&&cr(xt,I)},Ds=function(I,ne,xe,Le){if(ae&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!xe)switch(N.getAttributeType(I,ne)){case"TrustedHTML":return K(Le);case"TrustedScriptURL":return E(Le)}return Le},Jl=function(I,ne,xe,Le){try{return xe?I.setAttributeNS(xe,ne,Le):I.setAttribute(ne,Le),vi(I)?(T(I),!1):!0}catch{return Ne(ne,I),!1}},oo=function(I,ne){return pt&&cr(zx,ne)?!0:Vo(I)==="attributename"&&zp(ne,"href")!==-1},ps=function(I,ne){if(ir(ke.beforeSanitizeAttributes,I,null),$r(I,ne))return;const xe=I.attributes;if(!xe||vi(I))return;yt=Dn(ke.uponSanitizeAttribute,yt,Qe,Rr);const Le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:yt,forceKeepAttr:void 0};let nt=xe.length;const ct=Bt(ve(I));for(;nt--;){const Tt=xe[nt],dn=Tt.name,Kt=Tt.namespaceURI,hr=Tt.value,Vn=Bt(dn),fr=hr;let pn=dn==="value"?fr:yx(fr),Nr=!1;if(Le.attrName=Vn,Le.attrValue=pn,Le.keepAttr=!0,Le.forceKeepAttr=void 0,ir(ke.uponSanitizeAttribute,I,Le),pn=Le.attrValue,_r&&(Vn==="id"||Vn==="name")&&zp(pn,tn)!==0&&(Ne(dn,I,Tt),pn=tn+pn,Nr=!0),oo(dn,pn)){Ne(dn,I,Tt);continue}if(!Le.forceKeepAttr){if(!Le.keepAttr){Ne(dn,I,Tt);continue}if(!Ze&&cr(bf,pn)){Ne(dn,I,Tt);continue}if(mt&&(pn=Nt(pn)),!jr(ct,Vn,pn)){Ne(dn,I,Tt);continue}pn=Ds(ct,Vn,Kt,pn),pn!==fr&&Jl(I,dn,Kt,pn)&&Nr&&df(c.removed)}}ir(ke.afterSanitizeAttributes,I,null),$r(I,ne)},zs=function(I,ne){Os(I,ne),ps(I,ne),xi(I.content)&&lo(I.content)},lo=function(I){let ne=null;const xe=Wi(I);for(ir(ke.beforeSanitizeShadowDOM,I,null);ne=xe.nextNode();)if(ir(ke.uponSanitizeShadowNode,ne,null),zs(ne,I),le(ne)===$n.element){const Le=W(ne);xi(Le)&&(bi(Le),lo(Le))}mt&&Is(I),ir(ke.afterSanitizeShadowDOM,I,null)},bi=function(I){const ne=[{node:I,shadow:null}];for(;ne.length>0;){const xe=ne.pop();if(xe.shadow){lo(xe.shadow);continue}const Le=xe.node,nt=le(Le)===$n.element,ct=J(Le);if(ct)for(let Tt=ct.length-1;Tt>=0;--Tt)ne.push({node:ct[Tt],shadow:null});if(nt){const Tt=V?V(Le):null;if(typeof Tt=="string"&&Bt(Tt)==="template"){const dn=Le.content;xi(dn)&&ne.push({node:dn,shadow:null})}}if(nt){const Tt=W(Le);xi(Tt)&&ne.push({node:null,shadow:Tt},{node:Tt,shadow:null})}}};return c.sanitize=function(_e){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ne=null,xe=null,Le=null,nt=null;if(qr=!_e,qr&&(_e="<!-->"),typeof _e!="string"&&!Hi(_e)&&(_e=kx(_e),typeof _e!="string"))throw da("dirty is not a string, aborting");if(!c.isSupported)return _e;nr?(Ue=Sr,yt=Rr):zi(I),c.removed=[];const ct=qt&&typeof _e!="string"&&Hi(_e);let Tt=[];const dn=bn;if(ct){rr(_e);const fr=ve(_e);if(typeof fr=="string"){const pn=Bt(fr);if(!Ue[pn]||se[pn])throw me(_e),da("root node is forbidden and cannot be sanitized in-place")}if(vi(_e))throw me(_e),da("root node is clobbered and cannot be sanitized in-place");Tt=Qt(_e),bn=Op()}else if(Hi(_e))ne=so("<!---->"),xe=ne.ownerDocument.importNode(_e,!0),xe.nodeType===$n.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?ne=xe:ne.appendChild(xe),bi(ne);else{if(!Ur&&!mt&&!Xt&&_e.indexOf("<")===-1)return R(_e);if(ne=so(_e),!ne)return Ur?null:fi?Ce:""}ne&&Br&&T(ne.firstChild);const Kt=ct?_e:ne;try{ct&&bi(_e);const fr=Wi(Kt);for(;Le=fr.nextNode();)zs(Le,Kt);ct&&gt(_e,Tt)}catch(fr){throw ct&&(me(_e),Kr(_e,Tt)),fr}finally{bn=dn}if(ct){if(Kr(_e,Tt))throw da("a node selected for removal could not be safely returned; refusing to sanitize in place");return mt&&ds(_e),_e}if(Ur){if(mt&&ds(ne),bt)for(nt=Ie.call(ne.ownerDocument);ne.firstChild;)nt.appendChild(ne.firstChild);else nt=ne;return(yt.shadowroot||yt.shadowrootmode)&&(nt=Oe.call(g,nt,!0)),nt}const hr=()=>Xt?ne.outerHTML:ne.innerHTML;let Vn=hr();return mt&&cr(Lx,Vn)&&(Is(ne),Vn=hr()),Xt&&Ue["!doctype"]&&ne.ownerDocument&&ne.ownerDocument.doctype&&ne.ownerDocument.doctype.name&&cr(Ox,ne.ownerDocument.doctype.name)&&(Vn="<!DOCTYPE "+ne.ownerDocument.doctype.name+`>
`+Vn),R(Vn)},c.setConfig=function(){let _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zi(_e),nr=!0,Sr=Ue,Rr=yt},c.clearConfig=function(){Mr=null,nr=!1,Sr=null,Rr=null,ae=oe,Ce=""},c.isValidAttribute=function(_e,I,ne){Mr||zi({});const xe=Bt(_e),Le=Bt(I);return typeof ne=="string"&&(oo(I,ne)||!Ze&&cr(bf,ne))?!1:jr(xe,Le,ne)},c.addHook=function(_e,I){typeof I=="function"&&Ar(ke,_e)&&Zu(ke[_e],I)},c.removeHook=function(_e,I){if(Ar(ke,_e)){if(I!==void 0){const ne=hx(ke[_e],I);return ne===-1?void 0:mx(ke[_e],ne,1)[0]}return df(ke[_e])}},c.removeHooks=function(_e){Ar(ke,_e)&&(ke[_e]=[])},c.removeAllHooks=function(){ke=wf()},c}var Ux=jm();function qx(l,c=null){const p=String(l||""),g=p.split(`
`),y=g.findIndex(S=>/^##\s+(?:Practice|Solve)(?:\s*[:—-].*)?\s*$/i.test(S)),b=y===-1?-1:g.findIndex((S,j)=>j>y&&/^##\s+(?:Reflect(?:ion)?|Learn|Stop and think|Optional reading)(?:\b|\s*[:—-])/i.test(S)),k=y>=0?g.slice(y,b<0?g.length:b).join(`
`):`# Solve

${(c==null?void 0:c.challenge)||"Try the lesson task before looking at the guide."}`,C=y>=0?[...g.slice(0,y),...b<0?[]:g.slice(b)].join(`
`).trim():p;return{solve:k,learn:C}}function Kx(l){const c=String(l||"").split(`
`),p=[];let g=null;c.forEach((k,C)=>{const S=k.trim(),j=/^(`{3,}|~{3,})/.exec(S);if(j){const X=j[1];g?g.char===X[0]&&X.length>=g.length&&(g=null):g={char:X[0],length:X.length};return}if(g)return;const N=/^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(k);if(!N)return;const F=N[2],A=/\bStep\s+\d+(?=\s*(?:[:.·–—-]|$))/i.test(F);p.push({index:C,level:N[1].length,numbered:A})});const y=p.filter(k=>k.numbered),b=(y.length?y:p.filter(k=>k.level===2)).map(k=>k.index);return b.length?{intro:c.slice(0,b[0]).join(`
`).trim(),steps:b.map((k,C)=>c.slice(k,b[C+1]??c.length).join(`
`).trim())}:{intro:c.join(`
`),steps:[]}}const $x=Object.assign({"../content/capstone-discovery.md":Xy,"../content/capstone-feedback.md":Qy,"../content/capstone-interviews.md":Zy,"../content/capstone-prototype.md":ev,"../content/csharp-conditionals.md":tv,"../content/csharp-variables.md":nv,"../content/python-decisions.md":rv,"../content/python-formatting.md":iv,"../content/python-lists.md":sv,"../content/python-loops.md":av,"../content/python-strings.md":ov,"../content/python-variables.md":lv,"../content/react-components.md":uv,"../content/react-state.md":cv,"../content/tsi-equations.md":dv,"../content/tsi-percents.md":pv,"../content/tsi-ratios.md":hv,"../content/tsi-slope.md":fv,"../content/uil-arrays.md":mv,"../content/uil-loops.md":gv,"../content/uil-methods.md":yv,"../content/uil-strings.md":vv,"../content/unity-colliders.md":xv,"../content/unity-player-controller.md":bv,"../content/unity-score.md":wv,"../content/web-events.md":kv,"../content/web-layout.md":Sv}),Gx="# Add a Markdown lesson\n\nSave a new `.md` file inside `src/content/`.\n",Yx=l=>$x[`../content/${l}.md`]||Gx,Zo=l=>Ux.sanitize(Jt.parse(l,{breaks:!1,gfm:!0}));function Vx(l,c=""){if(!(l!=null&&l.isPublished))return"";let p="";const g=Array.isArray(l.cases)?l.cases:[];g.length&&!/##\s+(?:Published )?Examples\b/i.test(c)&&(p+=`

### Published examples
`,g.forEach((b,k)=>{p+=`
**Example `+(k+1)+`**

`,b.call&&(p+="Input: `"+b.call+`\`

`),p+=l.mode==="function"?`Expected return:
`:`Expected output:
`,p+="\n```text\n"+String(b.expected??"")+"\n```\n"}));const y=Array.isArray(l.hints)?l.hints:[];return y.length&&!/<details(?:\s|>)/i.test(c)&&(p+=`

### Need a hint?
`,y.forEach((b,k)=>{p+=`
<details>
<summary>Hint `+(k+1)+`</summary>

`+String(b).replaceAll("<","&lt;")+`

</details>
`})),p}function kf(l,c){if(!c)return l;const p="https://github.com/mswhitby/computer-science-1/blob/main/units/",g=c.startsWith("/playground/data/")?new URL(c,"https://www.mswhitby.com"):new URL(c,p);return String(l).replace(/\]\(([^)]+)\)/g,(y,b)=>{if(/^(?:https?:|mailto:|#|data:)/i.test(b))return y;const[k,...C]=b.split(" ");try{const S=new URL(k,g);return S.origin!==g.origin?y:"]("+S.href+(C.length?" "+C.join(" "):"")+")"}catch{return y}})}const _h={markdown:l=>`designlab:md:${l}`,code:l=>`designlab:code:${l}`};function Rd(l){try{return localStorage.getItem(l)}catch{return null}}function ha(l,c){try{localStorage.setItem(l,c)}catch{}}function Jx(l){try{localStorage.removeItem(l)}catch{}}function Sf({lessonId:l,task:c,isTsi:p=!1,tsiAnswer:g=null}){var H;const y=(c==null?void 0:c.markdownSource)||Yx(l),b=_h.markdown(l),[k,C]=we.useState(y),[S,j]=we.useState(p?"learn":"solve"),[N,F]=we.useState(0),[A,X]=we.useState(!1);we.useEffect(()=>{C(Rd(b)??y),j(p?"learn":"solve"),F(0),X(!1)},[b,y,p]);const D=we.useMemo(()=>{const V=qx(k,c),ce=V.solve+Vx(c,V.solve);return{solve:kf(ce,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown)),learn:kf(V.learn,(c==null?void 0:c.markdownUrl)||(c==null?void 0:c.markdown))}},[k,c]),Y=we.useMemo(()=>Kx(D.learn),[D.learn]),J=!p&&S==="learn"&&Y.steps.length>0,M=Math.min(N,Math.max(0,Y.steps.length-1)),W=p?D.learn:S==="solve"?D.solve:J?Y.intro+`

`+Y.steps[M]:D.learn,B=we.useMemo(()=>Zo(W),[W]);return u.jsxs("section",{className:"instructions-pane",children:[u.jsxs("div",{className:"pane-header",children:[p?u.jsx("strong",{className:"tsi-learn-title",children:"Learn"}):u.jsxs("div",{className:"tabs compact",role:"tablist","aria-label":"Lesson views",children:[u.jsx("button",{role:"tab","aria-selected":S==="solve",className:S==="solve"?"active":"",onClick:()=>{j("solve"),F(0)},children:"Solve"}),u.jsx("button",{role:"tab","aria-selected":S==="learn",className:S==="learn"?"active":"",onClick:()=>{j("learn"),F(0)},children:"Learn"})]}),u.jsx("button",{type:"button",className:pa("icon-button",A&&"active"),title:"Edit lesson text","aria-label":"Edit lesson text",onClick:()=>X(!A),children:u.jsx(_y,{size:16})})]}),A?u.jsxs("div",{className:"markdown-source",children:[u.jsx("p",{className:"hint",children:"Try editing these instructions. Changes here are just for your preview."}),u.jsx("textarea",{"aria-label":"Markdown source",value:k,onChange:V=>{C(V.target.value),F(0),ha(b,V.target.value)}}),u.jsx("button",{type:"button",className:"btn",onClick:()=>{Jx(b),C(y),F(0)},children:"Reset lesson text"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"markdown-preview",role:"tabpanel",children:[u.jsx("div",{dangerouslySetInnerHTML:{__html:B}}),p&&g&&u.jsxs("section",{className:"tsi-worked-solution",role:"status",children:[u.jsx("h3",{children:g.correct?"Why that works":"Review the solution"}),u.jsx("p",{children:(H=fh[l])==null?void 0:H.explanation})]})]}),J&&u.jsxs("nav",{className:"lesson-step-controls","aria-label":"Learning steps",children:[M>0&&u.jsxs("button",{type:"button",className:"step-link previous",onClick:()=>F(V=>Math.max(0,V-1)),children:[u.jsx(Dd,{size:16,"aria-hidden":"true"})," Previous"]}),u.jsxs("span",{children:["Step ",M+1," of ",Y.steps.length]}),M<Y.steps.length-1&&u.jsxs("button",{type:"button",className:"step-link next",onClick:()=>F(V=>Math.min(Y.steps.length-1,V+1)),children:["Next ",u.jsx(ti,{size:16,"aria-hidden":"true"})]})]})]})]})}var wd={exports:{}},Xx=wd.exports,_f;function ss(){return _f||(_f=1,(function(l,c){(function(p,g){l.exports=g()})(Xx,(function(){var p=navigator.userAgent,g=navigator.platform,y=/gecko\/\d/i.test(p),b=/MSIE \d/.test(p),k=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(p),C=/Edge\/(\d+)/.exec(p),S=b||k||C,j=S&&(b?document.documentMode||6:+(C||k)[1]),N=!C&&/WebKit\//.test(p),F=N&&/Qt\/\d+\.\d+/.test(p),A=!C&&/Chrome\/(\d+)/.exec(p),X=A&&+A[1],D=/Opera\//.test(p),Y=/Apple Computer/.test(navigator.vendor),J=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(p),M=/PhantomJS/.test(p),W=Y&&(/Mobile\/\w+/.test(p)||navigator.maxTouchPoints>2),B=/Android/.test(p),H=W||B||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(p),V=W||/Mac/.test(g),ce=/\bCrOS\b/.test(p),le=/win/i.test(g),ve=D&&p.match(/Version\/(\d*\.\d*)/);ve&&(ve=Number(ve[1])),ve&&ve>=15&&(D=!1,N=!0);var Fe=V&&(F||D&&(ve==null||ve<12.11)),Te=y||S&&j>=9;function ae(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var Ce=function(e,n){var s=e.className,i=ae(n).exec(s);if(i){var a=s.slice(i.index+i[0].length);e.className=s.slice(0,i.index)+(a?i[1]+a:"")}};function oe(e){for(var n=e.childNodes.length;n>0;--n)e.removeChild(e.firstChild);return e}function ye(e,n){return oe(e).appendChild(n)}function L(e,n,s,i){var a=document.createElement(e);if(s&&(a.className=s),i&&(a.style.cssText=i),typeof n=="string")a.appendChild(document.createTextNode(n));else if(n)for(var h=0;h<n.length;++h)a.appendChild(n[h]);return a}function Q(e,n,s,i){var a=L(e,n,s,i);return a.setAttribute("role","presentation"),a}var K;document.createRange?K=function(e,n,s,i){var a=document.createRange();return a.setEnd(i||e,s),a.setStart(e,n),a}:K=function(e,n,s){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch{return i}return i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i};function R(e,n){if(n.nodeType==3&&(n=n.parentNode),e.contains)return e.contains(n);do if(n.nodeType==11&&(n=n.host),n==e)return!0;while(n=n.parentNode)}function E(e){var n=e.ownerDocument||e,s;try{s=e.activeElement}catch{s=n.body||null}for(;s&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function $(e,n){var s=e.className;ae(n).test(s)||(e.className+=(s?" ":"")+n)}function O(e,n){for(var s=e.split(" "),i=0;i<s.length;i++)s[i]&&!ae(s[i]).test(n)&&(n+=" "+s[i]);return n}var Z=function(e){e.select()};W?Z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:S&&(Z=function(e){try{e.select()}catch{}});function Se(e){return e.display.wrapper.ownerDocument}function Ie(e){return qe(e.display.wrapper)}function qe(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function Oe(e){return Se(e).defaultView}function ke(e){var n=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,n)}}function Be(e,n,s){n||(n={});for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s!==!1||!Object.prototype.hasOwnProperty.call(n,i))&&(n[i]=e[i]);return n}function Ke(e,n,s,i,a){n==null&&(n=e.search(/[^\s\u00a0]/),n==-1&&(n=e.length));for(var h=i||0,m=a||0;;){var x=e.indexOf("	",h);if(x<0||x>=n)return m+(n-h);m+=x-h,m+=s-m%s,h=x+1}}var et=function(){this.id=null,this.f=null,this.time=0,this.handler=ke(this.onTimeout,this)};et.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},et.prototype.set=function(e,n){this.f=n;var s=+new Date+e;(!this.id||s<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=s)};function $e(e,n){for(var s=0;s<e.length;++s)if(e[s]==n)return s;return-1}var Ft=50,Yt={toString:function(){return"CodeMirror.Pass"}},Ct={scroll:!1},xt={origin:"*mouse"},tt={origin:"+move"};function Ue(e,n,s){for(var i=0,a=0;;){var h=e.indexOf("	",i);h==-1&&(h=e.length);var m=h-i;if(h==e.length||a+m>=n)return i+Math.min(m,n-a);if(a+=h-i,a+=s-a%s,i=h+1,a>=n)return i}}var vt=[""];function yt(e){for(;vt.length<=e;)vt.push(Qe(vt)+" ");return vt[e]}function Qe(e){return e[e.length-1]}function ut(e,n){for(var s=[],i=0;i<e.length;i++)s[i]=n(e[i],i);return s}function se(e,n,s){for(var i=0,a=s(n);i<e.length&&s(e[i])<=a;)i++;e.splice(i,0,n)}function je(){}function he(e,n){var s;return Object.create?s=Object.create(e):(je.prototype=e,s=new je),n&&Be(n,s),s}var kt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function Ye(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||kt.test(e))}function at(e,n){return n?n.source.indexOf("\\w")>-1&&Ye(e)?!0:n.test(e):Ye(e)}function Ze(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n])return!1;return!0}var mt=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function pt(e){return e.charCodeAt(0)>=768&&mt.test(e)}function Xt(e,n,s){for(;(s<0?n>0:n<e.length)&&pt(e.charAt(n));)n+=s;return n}function nr(e,n,s){for(var i=n>s?-1:1;;){if(n==s)return n;var a=(n+s)/2,h=i<0?Math.ceil(a):Math.floor(a);if(h==n)return e(h)?n:s;e(h)?s=h:n=h+i}}function Sr(e,n,s,i){if(!e)return i(n,s,"ltr",0);for(var a=!1,h=0;h<e.length;++h){var m=e[h];(m.from<s&&m.to>n||n==s&&m.to==n)&&(i(Math.max(m.from,n),Math.min(m.to,s),m.level==1?"rtl":"ltr",h),a=!0)}a||i(n,s,"ltr")}var Rr=null;function Br(e,n,s){var i;Rr=null;for(var a=0;a<e.length;++a){var h=e[a];if(h.from<n&&h.to>n)return a;h.to==n&&(h.from!=h.to&&s=="before"?i=a:Rr=a),h.from==n&&(h.from!=h.to&&s!="before"?i=a:Rr=a)}return i??Rr}var Ur=(function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function s(_){return _<=247?e.charAt(_):1424<=_&&_<=1524?"R":1536<=_&&_<=1785?n.charAt(_-1536):1774<=_&&_<=2220?"r":8192<=_&&_<=8203?"w":_==8204?"b":"L"}var i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,a=/[stwN]/,h=/[LRr]/,m=/[Lb1n]/,x=/[1n]/;function w(_,z,q){this.level=_,this.from=z,this.to=q}return function(_,z){var q=z=="ltr"?"L":"R";if(_.length==0||z=="ltr"&&!i.test(_))return!1;for(var ie=_.length,te=[],ge=0;ge<ie;++ge)te.push(s(_.charCodeAt(ge)));for(var be=0,Ae=q;be<ie;++be){var Ee=te[be];Ee=="m"?te[be]=Ae:Ae=Ee}for(var ze=0,De=q;ze<ie;++ze){var Ge=te[ze];Ge=="1"&&De=="r"?te[ze]="n":h.test(Ge)&&(De=Ge,Ge=="r"&&(te[ze]="R"))}for(var ot=1,Ve=te[0];ot<ie-1;++ot){var St=te[ot];St=="+"&&Ve=="1"&&te[ot+1]=="1"?te[ot]="1":St==","&&Ve==te[ot+1]&&(Ve=="1"||Ve=="n")&&(te[ot]=Ve),Ve=St}for(var Et=0;Et<ie;++Et){var Un=te[Et];if(Un==",")te[Et]="N";else if(Un=="%"){var sn=void 0;for(sn=Et+1;sn<ie&&te[sn]=="%";++sn);for(var xr=Et&&te[Et-1]=="!"||sn<ie&&te[sn]=="1"?"1":"N",lr=Et;lr<sn;++lr)te[lr]=xr;Et=sn-1}}for(var vn=0,br=q;vn<ie;++vn){var jn=te[vn];br=="L"&&jn=="1"?te[vn]="L":h.test(jn)&&(br=jn)}for(var xn=0;xn<ie;++xn)if(a.test(te[xn])){var Dt=void 0;for(Dt=xn+1;Dt<ie&&a.test(te[Dt]);++Dt);for(var dt=(xn?te[xn-1]:q)=="L",zt=(Dt<ie?te[Dt]:q)=="L",an=dt==zt?dt?"L":"R":q,un=xn;un<Dt;++un)te[un]=an;xn=Dt-1}for(var Ut=[],wr,Lt=0;Lt<ie;)if(m.test(te[Lt])){var la=Lt;for(++Lt;Lt<ie&&m.test(te[Lt]);++Lt);Ut.push(new w(0,la,Lt))}else{var kr=Lt,Ri=Ut.length,es=z=="rtl"?1:0;for(++Lt;Lt<ie&&te[Lt]!="L";++Lt);for(var Rn=kr;Rn<Lt;)if(x.test(te[Rn])){kr<Rn&&(Ut.splice(Ri,0,new w(1,kr,Rn)),Ri+=es);var qn=Rn;for(++Rn;Rn<Lt&&x.test(te[Rn]);++Rn);Ut.splice(Ri,0,new w(2,qn,Rn)),Ri+=es,kr=Rn}else++Rn;kr<Lt&&Ut.splice(Ri,0,new w(1,kr,Lt))}return z=="ltr"&&(Ut[0].level==1&&(wr=_.match(/^\s+/))&&(Ut[0].from=wr[0].length,Ut.unshift(new w(0,0,wr[0].length))),Qe(Ut).level==1&&(wr=_.match(/\s+$/))&&(Qe(Ut).to-=wr[0].length,Ut.push(new w(0,ie-wr[0].length,ie)))),z=="rtl"?Ut.reverse():Ut}})();function bt(e,n){var s=e.order;return s==null&&(s=e.order=Ur(e.text,n)),s}var fi=[],rt=function(e,n,s){if(e.addEventListener)e.addEventListener(n,s,!1);else if(e.attachEvent)e.attachEvent("on"+n,s);else{var i=e._handlers||(e._handlers={});i[n]=(i[n]||fi).concat(s)}};function _r(e,n){return e._handlers&&e._handlers[n]||fi}function tn(e,n,s){if(e.removeEventListener)e.removeEventListener(n,s,!1);else if(e.detachEvent)e.detachEvent("on"+n,s);else{var i=e._handlers,a=i&&i[n];if(a){var h=$e(a,s);h>-1&&(i[n]=a.slice(0,h).concat(a.slice(h+1)))}}}function It(e,n){var s=_r(e,n);if(s.length)for(var i=Array.prototype.slice.call(arguments,2),a=0;a<s.length;++a)s[a].apply(null,i)}function qt(e,n,s){return typeof n=="string"&&(n={type:n,preventDefault:function(){this.defaultPrevented=!0}}),It(e,s||n.type,e,n),On(n)||n.codemirrorIgnore}function bn(e){var n=e._handlers&&e._handlers.cursorActivity;if(n)for(var s=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<n.length;++i)$e(s,n[i])==-1&&s.push(n[i])}function gn(e,n){return _r(e,n).length>0}function En(e){e.prototype.on=function(n,s){rt(this,n,s)},e.prototype.off=function(n,s){tn(this,n,s)}}function wn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ni(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function On(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==!1}function pr(e){wn(e),ni(e)}function mi(e){return e.target||e.srcElement}function Ln(e){var n=e.which;return n==null&&(e.button&1?n=1:e.button&2?n=3:e.button&4&&(n=2)),V&&e.ctrlKey&&n==1&&(n=3),n}var as=(function(){if(S&&j<9)return!1;var e=L("div");return"draggable"in e||"dragDrop"in e})(),kn;function Cr(e){if(kn==null){var n=L("span","​");ye(e,L("span",[n,document.createTextNode("x")])),e.firstChild.offsetHeight!=0&&(kn=n.offsetWidth<=1&&n.offsetHeight>2&&!(S&&j<8))}var s=kn?L("span","​"):L("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return s.setAttribute("cm-text",""),s}var qr;function Ir(e){if(qr!=null)return qr;var n=ye(e,document.createTextNode("AخA")),s=K(n,0,1).getBoundingClientRect(),i=K(n,1,2).getBoundingClientRect();return oe(e),!s||s.left==s.right?!1:qr=i.right-s.right<3}var Tr=`

b`.split(/\n/).length!=3?function(e){for(var n=0,s=[],i=e.length;n<=i;){var a=e.indexOf(`
`,n);a==-1&&(a=e.length);var h=e.slice(n,e.charAt(a-1)=="\r"?a-1:a),m=h.indexOf("\r");m!=-1?(s.push(h.slice(0,m)),n+=m+1):(s.push(h),n=a+1)}return s}:function(e){return e.split(/\r\n?|\n/)},gi=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch{return!1}}:function(e){var n;try{n=e.ownerDocument.selection.createRange()}catch{}return!n||n.parentElement()!=e?!1:n.compareEndPoints("StartToEnd",n)!=0},os=(function(){var e=L("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),typeof e.oncopy=="function")})(),Mn=null;function ls(e){if(Mn!=null)return Mn;var n=ye(e,L("span","x")),s=n.getBoundingClientRect(),i=K(n,0,1).getBoundingClientRect();return Mn=Math.abs(s.left-i.left)>1}var Mi={},Or={};function Gn(e,n){arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),Mi[e]=n}function yi(e,n){Or[e]=n}function Di(e){if(typeof e=="string"&&Or.hasOwnProperty(e))e=Or[e];else if(e&&typeof e.name=="string"&&Or.hasOwnProperty(e.name)){var n=Or[e.name];typeof n=="string"&&(n={name:n}),e=he(n,e),e.name=n.name}else{if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Di("application/xml");if(typeof e=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Di("application/json")}return typeof e=="string"?{name:e}:e||{name:"null"}}function Bt(e,n){n=Di(n);var s=Mi[n.name];if(!s)return Bt(e,"text/plain");var i=s(e,n);if(Mr.hasOwnProperty(n.name)){var a=Mr[n.name];for(var h in a)a.hasOwnProperty(h)&&(i.hasOwnProperty(h)&&(i["_"+h]=i[h]),i[h]=a[h])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var m in n.modeProps)i[m]=n.modeProps[m];return i}var Mr={};function us(e,n){var s=Mr.hasOwnProperty(e)?Mr[e]:Mr[e]={};Be(n,s)}function Rt(e,n){if(n===!0)return n;if(e.copyState)return e.copyState(n);var s={};for(var i in n){var a=n[i];a instanceof Array&&(a=a.concat([])),s[i]=a}return s}function zi(e,n){for(var s;e.innerMode&&(s=e.innerMode(n),!(!s||s.mode==e));)n=s.state,e=s.mode;return s||{mode:e,state:n}}function ri(e,n,s){return e.startState?e.startState(n,s):!0}var Vt=function(e,n,s){this.pos=this.start=0,this.string=e,this.tabSize=n||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=s};Vt.prototype.eol=function(){return this.pos>=this.string.length},Vt.prototype.sol=function(){return this.pos==this.lineStart},Vt.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Vt.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Vt.prototype.eat=function(e){var n=this.string.charAt(this.pos),s;if(typeof e=="string"?s=n==e:s=n&&(e.test?e.test(n):e(n)),s)return++this.pos,n},Vt.prototype.eatWhile=function(e){for(var n=this.pos;this.eat(e););return this.pos>n},Vt.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Vt.prototype.skipToEnd=function(){this.pos=this.string.length},Vt.prototype.skipTo=function(e){var n=this.string.indexOf(e,this.pos);if(n>-1)return this.pos=n,!0},Vt.prototype.backUp=function(e){this.pos-=e},Vt.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ke(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.indentation=function(){return Ke(this.string,null,this.tabSize)-(this.lineStart?Ke(this.string,this.lineStart,this.tabSize):0)},Vt.prototype.match=function(e,n,s){if(typeof e=="string"){var i=function(m){return s?m.toLowerCase():m},a=this.string.substr(this.pos,e.length);if(i(a)==i(e))return n!==!1&&(this.pos+=e.length),!0}else{var h=this.string.slice(this.pos).match(e);return h&&h.index>0?null:(h&&n!==!1&&(this.pos+=h[0].length),h)}},Vt.prototype.current=function(){return this.string.slice(this.start,this.pos)},Vt.prototype.hideFirstChars=function(e,n){this.lineStart+=e;try{return n()}finally{this.lineStart-=e}},Vt.prototype.lookAhead=function(e){var n=this.lineOracle;return n&&n.lookAhead(e)},Vt.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};function Je(e,n){if(n-=e.first,n<0||n>=e.size)throw new Error("There is no line "+(n+e.first)+" in the document.");for(var s=e;!s.lines;)for(var i=0;;++i){var a=s.children[i],h=a.chunkSize();if(n<h){s=a;break}n-=h}return s.lines[n]}function ii(e,n,s){var i=[],a=n.line;return e.iter(n.line,s.line+1,function(h){var m=h.text;a==s.line&&(m=m.slice(0,s.ch)),a==n.line&&(m=m.slice(n.ch)),i.push(m),++a}),i}function cs(e,n,s){var i=[];return e.iter(n,s,function(a){i.push(a.text)}),i}function Yn(e,n){var s=n-e.height;if(s)for(var i=e;i;i=i.parent)i.height+=s}function T(e){if(e.parent==null)return null;for(var n=e.parent,s=$e(n.lines,e),i=n.parent;i;n=i,i=i.parent)for(var a=0;i.children[a]!=n;++a)s+=i.children[a].chunkSize();return s+n.first}function U(e,n){var s=e.first;e:do{for(var i=0;i<e.children.length;++i){var a=e.children[i],h=a.height;if(n<h){e=a;continue e}n-=h,s+=a.chunkSize()}return s}while(!e.lines);for(var m=0;m<e.lines.length;++m){var x=e.lines[m],w=x.height;if(n<w)break;n-=w}return s+m}function me(e,n){return n>=e.first&&n<e.first+e.size}function Ne(e,n){return String(e.lineNumberFormatter(n+e.firstLineNumber))}function pe(e,n,s){if(s===void 0&&(s=null),!(this instanceof pe))return new pe(e,n,s);this.line=e,this.ch=n,this.sticky=s}function He(e,n){return e.line-n.line||e.ch-n.ch}function jt(e,n){return e.sticky==n.sticky&&He(e,n)==0}function Qt(e){return pe(e.line,e.ch)}function Sn(e,n){return He(e,n)<0?n:e}function Kr(e,n){return He(e,n)<0?e:n}function tl(e,n){return Math.max(e.first,Math.min(n,e.first+e.size-1))}function gt(e,n){if(n.line<e.first)return pe(e.first,0);var s=e.first+e.size-1;return n.line>s?pe(s,Je(e,s).text.length):ro(n,Je(e,n.line).text.length)}function ro(e,n){var s=e.ch;return s==null||s>n?pe(e.line,n):s<0?pe(e.line,0):e}function io(e,n){for(var s=[],i=0;i<n.length;i++)s[i]=gt(e,n[i]);return s}var Fi=function(e,n){this.state=e,this.lookAhead=n},rr=function(e,n,s,i){this.state=n,this.doc=e,this.line=s,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};rr.prototype.lookAhead=function(e){var n=this.doc.getLine(this.line+e);return n!=null&&e>this.maxLookAhead&&(this.maxLookAhead=e),n},rr.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var n=this.baseTokens[this.baseTokenPos+1];return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},rr.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},rr.fromSaved=function(e,n,s){return n instanceof Fi?new rr(e,Rt(e.mode,n.state),s,n.lookAhead):new rr(e,Rt(e.mode,n),s)},rr.prototype.save=function(e){var n=e!==!1?Rt(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new Fi(n,this.maxLookAhead):n};function so(e,n,s,i){var a=[e.state.modeGen],h={};ir(e,n.text,e.doc.mode,s,function(_,z){return a.push(_,z)},h,i);for(var m=s.state,x=function(_){s.baseTokens=a;var z=e.state.overlays[_],q=1,ie=0;s.state=!0,ir(e,n.text,z.mode,s,function(te,ge){for(var be=q;ie<te;){var Ae=a[q];Ae>te&&a.splice(q,1,te,a[q+1],Ae),q+=2,ie=Math.min(te,Ae)}if(ge)if(z.opaque)a.splice(be,q-be,te,"overlay "+ge),q=be+2;else for(;be<q;be+=2){var Ee=a[be+1];a[be+1]=(Ee?Ee+" ":"")+"overlay "+ge}},h),s.state=m,s.baseTokens=null,s.baseTokenPos=1},w=0;w<e.state.overlays.length;++w)x(w);return{styles:a,classes:h.bgClass||h.textClass?h:null}}function Wi(e,n,s){if(!n.styles||n.styles[0]!=e.state.modeGen){var i=Nt(e,T(n)),a=n.text.length>e.options.maxHighlightLength&&Rt(e.doc.mode,i.state),h=so(e,n,i);a&&(i.state=a),n.stateAfter=i.save(!a),n.styles=h.styles,h.classes?n.styleClasses=h.classes:n.styleClasses&&(n.styleClasses=null),s===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return n.styles}function Nt(e,n,s){var i=e.doc,a=e.display;if(!i.mode.startState)return new rr(i,!0,n);var h=xa(e,n,s),m=h>i.first&&Je(i,h-1).stateAfter,x=m?rr.fromSaved(i,m,h):new rr(i,ri(i.mode),h);return i.iter(h,n,function(w){ds(e,w.text,x);var _=x.line;w.stateAfter=_==n-1||_%5==0||_>=a.viewFrom&&_<a.viewTo?x.save():null,x.nextLine()}),s&&(i.modeFrontier=x.line),x}function ds(e,n,s,i){var a=e.doc.mode,h=new Vt(n,e.options.tabSize,s);for(h.start=h.pos=i||0,n==""&&Is(a,s.state);!h.eol();)vi(a,h,s.state),h.start=h.pos}function Is(e,n){if(e.blankLine)return e.blankLine(n);if(e.innerMode){var s=zi(e,n);if(s.mode.blankLine)return s.mode.blankLine(s.state)}}function vi(e,n,s,i){for(var a=0;a<10;a++){i&&(i[0]=zi(e,s).mode);var h=e.token(n,s);if(n.pos>n.start)return h}throw new Error("Mode "+e.name+" failed to advance stream.")}var va=function(e,n,s){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=n||null,this.state=s};function xi(e,n,s,i){var a=e.doc,h=a.mode,m;n=gt(a,n);var x=Je(a,n.line),w=Nt(e,n.line,s),_=new Vt(x.text,e.options.tabSize,w),z;for(i&&(z=[]);(i||_.pos<n.ch)&&!_.eol();)_.start=_.pos,m=vi(h,_,w.state),i&&z.push(new va(_,m,Rt(a.mode,w.state)));return i?z:new va(_,m,w.state)}function Hi(e,n){if(e)for(;;){var s=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!s)break;e=e.slice(0,s.index)+e.slice(s.index+s[0].length);var i=s[1]?"bgClass":"textClass";n[i]==null?n[i]=s[2]:new RegExp("(?:^|\\s)"+s[2]+"(?:$|\\s)").test(n[i])||(n[i]+=" "+s[2])}return e}function ir(e,n,s,i,a,h,m){var x=s.flattenSpans;x==null&&(x=e.options.flattenSpans);var w=0,_=null,z=new Vt(n,e.options.tabSize,i),q,ie=e.options.addModeClass&&[null];for(n==""&&Hi(Is(s,i.state),h);!z.eol();){if(z.pos>e.options.maxHighlightLength?(x=!1,m&&ds(e,n,i,z.pos),z.pos=n.length,q=null):q=Hi(vi(s,z,i.state,ie),h),ie){var te=ie[0].name;te&&(q="m-"+(q?te+" "+q:te))}if(!x||_!=q){for(;w<z.start;)w=Math.min(z.start,w+5e3),a(w,_);_=q}z.start=z.pos}for(;w<z.pos;){var ge=Math.min(z.pos,w+5e3);a(ge,_),w=ge}}function xa(e,n,s){for(var i,a,h=e.doc,m=s?-1:n-(e.doc.mode.innerMode?1e3:100),x=n;x>m;--x){if(x<=h.first)return h.first;var w=Je(h,x-1),_=w.stateAfter;if(_&&(!s||x+(_ instanceof Fi?_.lookAhead:0)<=h.modeFrontier))return x;var z=Ke(w.text,null,e.options.tabSize);(a==null||i>z)&&(a=x-1,i=z)}return a}function Dr(e,n){if(e.modeFrontier=Math.min(e.modeFrontier,n),!(e.highlightFrontier<n-10)){for(var s=e.first,i=n-1;i>s;i--){var a=Je(e,i).stateAfter;if(a&&(!(a instanceof Fi)||i+a.lookAhead<n)){s=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,s)}}var si=!1,Dn=!1;function $r(){si=!0}function Os(){Dn=!0}function jr(e,n,s){this.marker=e,this.from=n,this.to=s}function Ms(e,n){if(e)for(var s=0;s<e.length;++s){var i=e[s];if(i.marker==n)return i}}function ao(e,n){for(var s,i=0;i<e.length;++i)e[i]!=n&&(s||(s=[])).push(e[i]);return s}function Ds(e,n,s){var i=s&&window.WeakSet&&(s.markedSpans||(s.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(n):(e.markedSpans=e.markedSpans?e.markedSpans.concat([n]):[n],i&&i.add(e.markedSpans)),n.marker.attachLine(e)}function Jl(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],m=h.marker,x=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);if(x||h.from==n&&m.type=="bookmark"&&(!s||!h.marker.insertLeft)){var w=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);(i||(i=[])).push(new jr(m,h.from,w?null:h.to))}}return i}function oo(e,n,s){var i;if(e)for(var a=0;a<e.length;++a){var h=e[a],m=h.marker,x=h.to==null||(m.inclusiveRight?h.to>=n:h.to>n);if(x||h.from==n&&m.type=="bookmark"&&(!s||h.marker.insertLeft)){var w=h.from==null||(m.inclusiveLeft?h.from<=n:h.from<n);(i||(i=[])).push(new jr(m,w?null:h.from-n,h.to==null?null:h.to-n))}}return i}function ps(e,n){if(n.full)return null;var s=me(e,n.from.line)&&Je(e,n.from.line).markedSpans,i=me(e,n.to.line)&&Je(e,n.to.line).markedSpans;if(!s&&!i)return null;var a=n.from.ch,h=n.to.ch,m=He(n.from,n.to)==0,x=Jl(s,a,m),w=oo(i,h,m),_=n.text.length==1,z=Qe(n.text).length+(_?a:0);if(x)for(var q=0;q<x.length;++q){var ie=x[q];if(ie.to==null){var te=Ms(w,ie.marker);te?_&&(ie.to=te.to==null?null:te.to+z):ie.to=a}}if(w)for(var ge=0;ge<w.length;++ge){var be=w[ge];if(be.to!=null&&(be.to+=z),be.from==null){var Ae=Ms(x,be.marker);Ae||(be.from=z,_&&(x||(x=[])).push(be))}else be.from+=z,_&&(x||(x=[])).push(be)}x&&(x=zs(x)),w&&w!=x&&(w=zs(w));var Ee=[x];if(!_){var ze=n.text.length-2,De;if(ze>0&&x)for(var Ge=0;Ge<x.length;++Ge)x[Ge].to==null&&(De||(De=[])).push(new jr(x[Ge].marker,null,null));for(var ot=0;ot<ze;++ot)Ee.push(De);Ee.push(w)}return Ee}function zs(e){for(var n=0;n<e.length;++n){var s=e[n];s.from!=null&&s.from==s.to&&s.marker.clearWhenEmpty!==!1&&e.splice(n--,1)}return e.length?e:null}function lo(e,n,s){var i=null;if(e.iter(n.line,s.line+1,function(te){if(te.markedSpans)for(var ge=0;ge<te.markedSpans.length;++ge){var be=te.markedSpans[ge].marker;be.readOnly&&(!i||$e(i,be)==-1)&&(i||(i=[])).push(be)}}),!i)return null;for(var a=[{from:n,to:s}],h=0;h<i.length;++h)for(var m=i[h],x=m.find(0),w=0;w<a.length;++w){var _=a[w];if(!(He(_.to,x.from)<0||He(_.from,x.to)>0)){var z=[w,1],q=He(_.from,x.from),ie=He(_.to,x.to);(q<0||!m.inclusiveLeft&&!q)&&z.push({from:_.from,to:x.from}),(ie>0||!m.inclusiveRight&&!ie)&&z.push({from:x.to,to:_.to}),a.splice.apply(a,z),w+=z.length-3}}return a}function bi(e){var n=e.markedSpans;if(n){for(var s=0;s<n.length;++s)n[s].marker.detachLine(e);e.markedSpans=null}}function _e(e,n){if(n){for(var s=0;s<n.length;++s)n[s].marker.attachLine(e);e.markedSpans=n}}function I(e){return e.inclusiveLeft?-1:0}function ne(e){return e.inclusiveRight?1:0}function xe(e,n){var s=e.lines.length-n.lines.length;if(s!=0)return s;var i=e.find(),a=n.find(),h=He(i.from,a.from)||I(e)-I(n);if(h)return-h;var m=He(i.to,a.to)||ne(e)-ne(n);return m||n.id-e.id}function Le(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var a=void 0,h=0;h<s.length;++h)a=s[h],a.marker.collapsed&&(n?a.from:a.to)==null&&(!i||xe(i,a.marker)<0)&&(i=a.marker);return i}function nt(e){return Le(e,!0)}function ct(e){return Le(e,!1)}function Tt(e,n){var s=Dn&&e.markedSpans,i;if(s)for(var a=0;a<s.length;++a){var h=s[a];h.marker.collapsed&&(h.from==null||h.from<n)&&(h.to==null||h.to>n)&&(!i||xe(i,h.marker)<0)&&(i=h.marker)}return i}function dn(e,n,s,i,a){var h=Je(e,n),m=Dn&&h.markedSpans;if(m)for(var x=0;x<m.length;++x){var w=m[x];if(w.marker.collapsed){var _=w.marker.find(0),z=He(_.from,s)||I(w.marker)-I(a),q=He(_.to,i)||ne(w.marker)-ne(a);if(!(z>=0&&q<=0||z<=0&&q>=0)&&(z<=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(_.to,s)>=0:He(_.to,s)>0)||z>=0&&(w.marker.inclusiveRight&&a.inclusiveLeft?He(_.from,i)<=0:He(_.from,i)<0)))return!0}}}function Kt(e){for(var n;n=nt(e);)e=n.find(-1,!0).line;return e}function hr(e){for(var n;n=ct(e);)e=n.find(1,!0).line;return e}function Vn(e){for(var n,s;n=ct(e);)e=n.find(1,!0).line,(s||(s=[])).push(e);return s}function fr(e,n){var s=Je(e,n),i=Kt(s);return s==i?n:T(i)}function pn(e,n){if(n>e.lastLine())return n;var s=Je(e,n),i;if(!Nr(e,s))return n;for(;i=ct(s);)s=i.find(1,!0).line;return T(s)+1}function Nr(e,n){var s=Dn&&n.markedSpans;if(s){for(var i=void 0,a=0;a<s.length;++a)if(i=s[a],!!i.marker.collapsed){if(i.from==null)return!0;if(!i.marker.widgetNode&&i.from==0&&i.marker.inclusiveLeft&&nl(e,n,i))return!0}}}function nl(e,n,s){if(s.to==null){var i=s.marker.find(1,!0);return nl(e,i.line,Ms(i.line.markedSpans,s.marker))}if(s.marker.inclusiveRight&&s.to==n.text.length)return!0;for(var a=void 0,h=0;h<n.markedSpans.length;++h)if(a=n.markedSpans[h],a.marker.collapsed&&!a.marker.widgetNode&&a.from==s.to&&(a.to==null||a.to!=s.from)&&(a.marker.inclusiveLeft||s.marker.inclusiveRight)&&nl(e,n,a))return!0}function _n(e){e=Kt(e);for(var n=0,s=e.parent,i=0;i<s.lines.length;++i){var a=s.lines[i];if(a==e)break;n+=a.height}for(var h=s.parent;h;s=h,h=s.parent)for(var m=0;m<h.children.length;++m){var x=h.children[m];if(x==s)break;n+=x.height}return n}function Bi(e){if(e.height==0)return 0;for(var n=e.text.length,s,i=e;s=nt(i);){var a=s.find(0,!0);i=a.from.line,n+=a.from.ch-a.to.ch}for(i=e;s=ct(i);){var h=s.find(0,!0);n-=i.text.length-h.from.ch,i=h.to.line,n+=i.text.length-h.to.ch}return n}function uo(e){var n=e.display,s=e.doc;n.maxLine=Je(s,s.first),n.maxLineLength=Bi(n.maxLine),n.maxLineChanged=!0,s.iter(function(i){var a=Bi(i);a>n.maxLineLength&&(n.maxLineLength=a,n.maxLine=i)})}var wi=function(e,n,s){this.text=e,_e(this,n),this.height=s?s(this):1};wi.prototype.lineNo=function(){return T(this)},En(wi);function Kd(e,n,s,i){e.text=n,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),e.order!=null&&(e.order=null),bi(e),_e(e,s);var a=i?i(e):1;a!=e.height&&Yn(e,a)}function Xl(e){e.parent=null,bi(e)}var Ql={},co={};function po(e,n){if(!e||/^\s*$/.test(e))return null;var s=n.addModeClass?co:Ql;return s[e]||(s[e]=e.replace(/\S+/g,"cm-$&"))}function Zl(e,n){var s=Q("span",null,null,N?"padding-right: .1px":null),i={pre:Q("pre",[s],"CodeMirror-line"),content:s,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};n.measure={};for(var a=0;a<=(n.rest?n.rest.length:0);a++){var h=a?n.rest[a-1]:n.line,m=void 0;i.pos=0,i.addToken=Gd,Ir(e.display.measure)&&(m=bt(h,e.doc.direction))&&(i.addToken=eu(i.addToken,m)),i.map=[];var x=n!=e.display.externalMeasured&&T(h);Vd(h,i,Wi(e,h,x)),h.styleClasses&&(h.styleClasses.bgClass&&(i.bgClass=O(h.styleClasses.bgClass,i.bgClass||"")),h.styleClasses.textClass&&(i.textClass=O(h.styleClasses.textClass,i.textClass||""))),i.map.length==0&&i.map.push(0,0,i.content.appendChild(Cr(e.display.measure))),a==0?(n.measure.map=i.map,n.measure.cache={}):((n.measure.maps||(n.measure.maps=[])).push(i.map),(n.measure.caches||(n.measure.caches=[])).push({}))}if(N){var w=i.content.lastChild;(/\bcm-tab\b/.test(w.className)||w.querySelector&&w.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return It(e,"renderLine",e,n.line,i.pre),i.pre.className&&(i.textClass=O(i.pre.className,i.textClass||"")),i}function $d(e){var n=L("span","•","cm-invalidchar");return n.title="\\u"+e.charCodeAt(0).toString(16),n.setAttribute("aria-label",n.title),n}function Gd(e,n,s,i,a,h,m){if(n){var x=e.splitSpaces?Yd(n,e.trailingSpace):n,w=e.cm.state.specialChars,_=!1,z;if(!w.test(n))e.col+=n.length,z=document.createTextNode(x),e.map.push(e.pos,e.pos+n.length,z),S&&j<9&&(_=!0),e.pos+=n.length;else{z=document.createDocumentFragment();for(var q=0;;){w.lastIndex=q;var ie=w.exec(n),te=ie?ie.index-q:n.length-q;if(te){var ge=document.createTextNode(x.slice(q,q+te));S&&j<9?z.appendChild(L("span",[ge])):z.appendChild(ge),e.map.push(e.pos,e.pos+te,ge),e.col+=te,e.pos+=te}if(!ie)break;q+=te+1;var be=void 0;if(ie[0]=="	"){var Ae=e.cm.options.tabSize,Ee=Ae-e.col%Ae;be=z.appendChild(L("span",yt(Ee),"cm-tab")),be.setAttribute("role","presentation"),be.setAttribute("cm-text","	"),e.col+=Ee}else ie[0]=="\r"||ie[0]==`
`?(be=z.appendChild(L("span",ie[0]=="\r"?"␍":"␤","cm-invalidchar")),be.setAttribute("cm-text",ie[0]),e.col+=1):(be=e.cm.options.specialCharPlaceholder(ie[0]),be.setAttribute("cm-text",ie[0]),S&&j<9?z.appendChild(L("span",[be])):z.appendChild(be),e.col+=1);e.map.push(e.pos,e.pos+1,be),e.pos++}}if(e.trailingSpace=x.charCodeAt(n.length-1)==32,s||i||a||_||h||m){var ze=s||"";i&&(ze+=i),a&&(ze+=a);var De=L("span",[z],ze,h);if(m)for(var Ge in m)m.hasOwnProperty(Ge)&&Ge!="style"&&Ge!="class"&&De.setAttribute(Ge,m[Ge]);return e.content.appendChild(De)}e.content.appendChild(z)}}function Yd(e,n){if(e.length>1&&!/  /.test(e))return e;for(var s=n,i="",a=0;a<e.length;a++){var h=e.charAt(a);h==" "&&s&&(a==e.length-1||e.charCodeAt(a+1)==32)&&(h=" "),i+=h,s=h==" "}return i}function eu(e,n){return function(s,i,a,h,m,x,w){a=a?a+" cm-force-border":"cm-force-border";for(var _=s.pos,z=_+i.length;;){for(var q=void 0,ie=0;ie<n.length&&(q=n[ie],!(q.to>_&&q.from<=_));ie++);if(q.to>=z)return e(s,i,a,h,m,x,w);e(s,i.slice(0,q.to-_),a,h,null,x,w),h=null,i=i.slice(q.to-_),_=q.to}}}function fc(e,n,s,i){var a=!i&&s.widgetNode;a&&e.map.push(e.pos,e.pos+n,a),!i&&e.cm.display.input.needsContentAttribute&&(a||(a=e.content.appendChild(document.createElement("span"))),a.setAttribute("cm-marker",s.id)),a&&(e.cm.display.input.setUneditable(a),e.content.appendChild(a)),e.pos+=n,e.trailingSpace=!1}function Vd(e,n,s){var i=e.markedSpans,a=e.text,h=0;if(!i){for(var m=1;m<s.length;m+=2)n.addToken(n,a.slice(h,h=s[m]),po(s[m+1],n.cm.options));return}for(var x=a.length,w=0,_=1,z="",q,ie,te=0,ge,be,Ae,Ee,ze;;){if(te==w){ge=be=Ae=ie="",ze=null,Ee=null,te=1/0;for(var De=[],Ge=void 0,ot=0;ot<i.length;++ot){var Ve=i[ot],St=Ve.marker;if(St.type=="bookmark"&&Ve.from==w&&St.widgetNode)De.push(St);else if(Ve.from<=w&&(Ve.to==null||Ve.to>w||St.collapsed&&Ve.to==w&&Ve.from==w)){if(Ve.to!=null&&Ve.to!=w&&te>Ve.to&&(te=Ve.to,be=""),St.className&&(ge+=" "+St.className),St.css&&(ie=(ie?ie+";":"")+St.css),St.startStyle&&Ve.from==w&&(Ae+=" "+St.startStyle),St.endStyle&&Ve.to==te&&(Ge||(Ge=[])).push(St.endStyle,Ve.to),St.title&&((ze||(ze={})).title=St.title),St.attributes)for(var Et in St.attributes)(ze||(ze={}))[Et]=St.attributes[Et];St.collapsed&&(!Ee||xe(Ee.marker,St)<0)&&(Ee=Ve)}else Ve.from>w&&te>Ve.from&&(te=Ve.from)}if(Ge)for(var Un=0;Un<Ge.length;Un+=2)Ge[Un+1]==te&&(be+=" "+Ge[Un]);if(!Ee||Ee.from==w)for(var sn=0;sn<De.length;++sn)fc(n,0,De[sn]);if(Ee&&(Ee.from||0)==w){if(fc(n,(Ee.to==null?x+1:Ee.to)-w,Ee.marker,Ee.from==null),Ee.to==null)return;Ee.to==w&&(Ee=!1)}}if(w>=x)break;for(var xr=Math.min(x,te);;){if(z){var lr=w+z.length;if(!Ee){var vn=lr>xr?z.slice(0,xr-w):z;n.addToken(n,vn,q?q+ge:ge,Ae,w+vn.length==te?be:"",ie,ze)}if(lr>=xr){z=z.slice(xr-w),w=xr;break}w=lr,Ae=""}z=a.slice(h,h=s[_++]),q=po(s[_++],n.cm.options)}}}function mc(e,n,s){this.line=n,this.rest=Vn(n),this.size=this.rest?T(Qe(this.rest))-s+1:1,this.node=this.text=null,this.hidden=Nr(e,n)}function rl(e,n,s){for(var i=[],a,h=n;h<s;h=a){var m=new mc(e.doc,Je(e.doc,h),h);a=h+m.size,i.push(m)}return i}var ba=null;function gc(e){ba?ba.ops.push(e):e.ownsGroup=ba={ops:[e],delayedCallbacks:[]}}function Jd(e){var n=e.delayedCallbacks,s=0;do{for(;s<n.length;s++)n[s].call(null);for(var i=0;i<e.ops.length;i++){var a=e.ops[i];if(a.cursorActivityHandlers)for(;a.cursorActivityCalled<a.cursorActivityHandlers.length;)a.cursorActivityHandlers[a.cursorActivityCalled++].call(null,a.cm)}}while(s<n.length)}function Xd(e,n){var s=e.ownsGroup;if(s)try{Jd(s)}finally{ba=null,n(s)}}var ho=null;function zn(e,n){var s=_r(e,n);if(s.length){var i=Array.prototype.slice.call(arguments,2),a;ba?a=ba.delayedCallbacks:ho?a=ho:(a=ho=[],setTimeout(tu,0));for(var h=function(x){a.push(function(){return s[x].apply(null,i)})},m=0;m<s.length;++m)h(m)}}function tu(){var e=ho;ho=null;for(var n=0;n<e.length;++n)e[n]()}function yc(e,n,s,i){for(var a=0;a<n.changes.length;a++){var h=n.changes[a];h=="text"?Zd(e,n):h=="gutter"?vc(e,n,s,i):h=="class"?ru(e,n):h=="widget"&&ep(e,n,i)}n.changes=null}function fo(e){return e.node==e.text&&(e.node=L("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),S&&j<8&&(e.node.style.zIndex=2)),e.node}function Qd(e,n){var s=n.bgClass?n.bgClass+" "+(n.line.bgClass||""):n.line.bgClass;if(s&&(s+=" CodeMirror-linebackground"),n.background)s?n.background.className=s:(n.background.parentNode.removeChild(n.background),n.background=null);else if(s){var i=fo(n);n.background=i.insertBefore(L("div",null,s),i.firstChild),e.display.input.setUneditable(n.background)}}function nu(e,n){var s=e.display.externalMeasured;return s&&s.line==n.line?(e.display.externalMeasured=null,n.measure=s.measure,s.built):Zl(e,n)}function Zd(e,n){var s=n.text.className,i=nu(e,n);n.text==n.node&&(n.node=i.pre),n.text.parentNode.replaceChild(i.pre,n.text),n.text=i.pre,i.bgClass!=n.bgClass||i.textClass!=n.textClass?(n.bgClass=i.bgClass,n.textClass=i.textClass,ru(e,n)):s&&(n.text.className=s)}function ru(e,n){Qd(e,n),n.line.wrapClass?fo(n).className=n.line.wrapClass:n.node!=n.text&&(n.node.className="");var s=n.textClass?n.textClass+" "+(n.line.textClass||""):n.line.textClass;n.text.className=s||""}function vc(e,n,s,i){if(n.gutter&&(n.node.removeChild(n.gutter),n.gutter=null),n.gutterBackground&&(n.node.removeChild(n.gutterBackground),n.gutterBackground=null),n.line.gutterClass){var a=fo(n);n.gutterBackground=L("div",null,"CodeMirror-gutter-background "+n.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(n.gutterBackground),a.insertBefore(n.gutterBackground,n.text)}var h=n.line.gutterMarkers;if(e.options.lineNumbers||h){var m=fo(n),x=n.gutter=L("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(x.setAttribute("aria-hidden","true"),e.display.input.setUneditable(x),m.insertBefore(x,n.text),n.line.gutterClass&&(x.className+=" "+n.line.gutterClass),e.options.lineNumbers&&(!h||!h["CodeMirror-linenumbers"])&&(n.lineNumber=x.appendChild(L("div",Ne(e.options,s),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),h)for(var w=0;w<e.display.gutterSpecs.length;++w){var _=e.display.gutterSpecs[w].className,z=h.hasOwnProperty(_)&&h[_];z&&x.appendChild(L("div",[z],"CodeMirror-gutter-elt","left: "+i.gutterLeft[_]+"px; width: "+i.gutterWidth[_]+"px"))}}}function ep(e,n,s){n.alignable&&(n.alignable=null);for(var i=ae("CodeMirror-linewidget"),a=n.node.firstChild,h=void 0;a;a=h)h=a.nextSibling,i.test(a.className)&&n.node.removeChild(a);xc(e,n,s)}function tp(e,n,s,i){var a=nu(e,n);return n.text=n.node=a.pre,a.bgClass&&(n.bgClass=a.bgClass),a.textClass&&(n.textClass=a.textClass),ru(e,n),vc(e,n,s,i),xc(e,n,i),n.node}function xc(e,n,s){if(bc(e,n.line,n,s,!0),n.rest)for(var i=0;i<n.rest.length;i++)bc(e,n.rest[i],n,s,!1)}function bc(e,n,s,i,a){if(n.widgets)for(var h=fo(s),m=0,x=n.widgets;m<x.length;++m){var w=x[m],_=L("div",[w.node],"CodeMirror-linewidget"+(w.className?" "+w.className:""));w.handleMouseEvents||_.setAttribute("cm-ignore-events","true"),iu(w,_,s,i),e.display.input.setUneditable(_),a&&w.above?h.insertBefore(_,s.gutter||s.text):h.appendChild(_),zn(w,"redraw")}}function iu(e,n,s,i){if(e.noHScroll){(s.alignable||(s.alignable=[])).push(n);var a=i.wrapperWidth;n.style.left=i.fixedPos+"px",e.coverGutter||(a-=i.gutterTotalWidth,n.style.paddingLeft=i.gutterTotalWidth+"px"),n.style.width=a+"px"}e.coverGutter&&(n.style.zIndex=5,n.style.position="relative",e.noHScroll||(n.style.marginLeft=-i.gutterTotalWidth+"px"))}function Ui(e){if(e.height!=null)return e.height;var n=e.doc.cm;if(!n)return 0;if(!R(document.body,e.node)){var s="position: relative;";e.coverGutter&&(s+="margin-left: -"+n.display.gutters.offsetWidth+"px;"),e.noHScroll&&(s+="width: "+n.display.wrapper.clientWidth+"px;"),ye(n.display.measure,L("div",[e.node],null,s))}return e.height=e.node.parentNode.offsetHeight}function qi(e,n){for(var s=mi(n);s!=e.wrapper;s=s.parentNode)if(!s||s.nodeType==1&&s.getAttribute("cm-ignore-events")=="true"||s.parentNode==e.sizer&&s!=e.mover)return!0}function mo(e){return e.lineSpace.offsetTop}function il(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function su(e){if(e.cachedPaddingH)return e.cachedPaddingH;var n=ye(e.measure,L("pre","x","CodeMirror-line-like")),s=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle,i={left:parseInt(s.paddingLeft),right:parseInt(s.paddingRight)};return!isNaN(i.left)&&!isNaN(i.right)&&(e.cachedPaddingH=i),i}function ai(e){return Ft-e.display.nativeBarWidth}function hs(e){return e.display.scroller.clientWidth-ai(e)-e.display.barWidth}function fs(e){return e.display.scroller.clientHeight-ai(e)-e.display.barHeight}function np(e,n,s){var i=e.options.lineWrapping,a=i&&hs(e);if(!n.measure.heights||i&&n.measure.width!=a){var h=n.measure.heights=[];if(i){n.measure.width=a;for(var m=n.text.firstChild.getClientRects(),x=0;x<m.length-1;x++){var w=m[x],_=m[x+1];Math.abs(w.bottom-_.bottom)>2&&h.push((w.bottom+_.top)/2-s.top)}}h.push(s.bottom-s.top)}}function wc(e,n,s){if(e.line==n)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==n)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var a=0;a<e.rest.length;a++)if(T(e.rest[a])>s)return{map:e.measure.maps[a],cache:e.measure.caches[a],before:!0}}}function rp(e,n){n=Kt(n);var s=T(n),i=e.display.externalMeasured=new mc(e.doc,n,s);i.lineN=s;var a=i.built=Zl(e,i);return i.text=a.pre,ye(e.display.lineMeasure,a.pre),i}function au(e,n,s,i){return Er(e,ki(e,n),s,i)}function sl(e,n){if(n>=e.display.viewFrom&&n<e.display.viewTo)return e.display.view[_i(e,n)];var s=e.display.externalMeasured;if(s&&n>=s.lineN&&n<s.lineN+s.size)return s}function ki(e,n){var s=T(n),i=sl(e,s);i&&!i.text?i=null:i&&i.changes&&(yc(e,i,s,dl(e)),e.curOp.forceUpdate=!0),i||(i=rp(e,n));var a=wc(i,n,s);return{line:n,view:i,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function Er(e,n,s,i,a){n.before&&(s=-1);var h=s+(i||""),m;return n.cache.hasOwnProperty(h)?m=n.cache[h]:(n.rect||(n.rect=n.view.text.getBoundingClientRect()),n.hasHeights||(np(e,n.view,n.rect),n.hasHeights=!0),m=Sc(e,n,s,i),m.bogus||(n.cache[h]=m)),{left:m.left,right:m.right,top:a?m.rtop:m.top,bottom:a?m.rbottom:m.bottom}}var kc={left:0,right:0,top:0,bottom:0};function go(e,n,s){for(var i,a,h,m,x,w,_=0;_<e.length;_+=3)if(x=e[_],w=e[_+1],n<x?(a=0,h=1,m="left"):n<w?(a=n-x,h=a+1):(_==e.length-3||n==w&&e[_+3]>n)&&(h=w-x,a=h-1,n>=w&&(m="right")),a!=null){if(i=e[_+2],x==w&&s==(i.insertLeft?"left":"right")&&(m=s),s=="left"&&a==0)for(;_&&e[_-2]==e[_-3]&&e[_-1].insertLeft;)i=e[(_-=3)+2],m="left";if(s=="right"&&a==w-x)for(;_<e.length-3&&e[_+3]==e[_+4]&&!e[_+5].insertLeft;)i=e[(_+=3)+2],m="right";break}return{node:i,start:a,end:h,collapse:m,coverStart:x,coverEnd:w}}function ip(e,n){var s=kc;if(n=="left")for(var i=0;i<e.length&&(s=e[i]).left==s.right;i++);else for(var a=e.length-1;a>=0&&(s=e[a]).left==s.right;a--);return s}function Sc(e,n,s,i){var a=go(n.map,s,i),h=a.node,m=a.start,x=a.end,w=a.collapse,_;if(h.nodeType==3){for(var z=0;z<4;z++){for(;m&&pt(n.line.text.charAt(a.coverStart+m));)--m;for(;a.coverStart+x<a.coverEnd&&pt(n.line.text.charAt(a.coverStart+x));)++x;if(S&&j<9&&m==0&&x==a.coverEnd-a.coverStart?_=h.parentNode.getBoundingClientRect():_=ip(K(h,m,x).getClientRects(),i),_.left||_.right||m==0)break;x=m,m=m-1,w="right"}S&&j<11&&(_=ou(e.display.measure,_))}else{m>0&&(w=i="right");var q;e.options.lineWrapping&&(q=h.getClientRects()).length>1?_=q[i=="right"?q.length-1:0]:_=h.getBoundingClientRect()}if(S&&j<9&&!m&&(!_||!_.left&&!_.right)){var ie=h.parentNode.getClientRects()[0];ie?_={left:ie.left,right:ie.left+ms(e.display),top:ie.top,bottom:ie.bottom}:_=kc}for(var te=_.top-n.rect.top,ge=_.bottom-n.rect.top,be=(te+ge)/2,Ae=n.view.measure.heights,Ee=0;Ee<Ae.length-1&&!(be<Ae[Ee]);Ee++);var ze=Ee?Ae[Ee-1]:0,De=Ae[Ee],Ge={left:(w=="right"?_.right:_.left)-n.rect.left,right:(w=="left"?_.left:_.right)-n.rect.left,top:ze,bottom:De};return!_.left&&!_.right&&(Ge.bogus=!0),e.options.singleCursorHeightPerLine||(Ge.rtop=te,Ge.rbottom=ge),Ge}function ou(e,n){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!ls(e))return n;var s=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:n.left*s,right:n.right*s,top:n.top*i,bottom:n.bottom*i}}function al(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var n=0;n<e.rest.length;n++)e.measure.caches[n]={}}function lu(e){e.display.externalMeasure=null,oe(e.display.lineMeasure);for(var n=0;n<e.display.view.length;n++)al(e.display.view[n])}function wa(e){lu(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function uu(e){return A&&B?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function _c(e){return A&&B?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function cu(e){var n=Kt(e),s=n.widgets,i=0;if(s)for(var a=0;a<s.length;++a)s[a].above&&(i+=Ui(s[a]));return i}function ol(e,n,s,i,a){if(!a){var h=cu(n);s.top+=h,s.bottom+=h}if(i=="line")return s;i||(i="local");var m=_n(n);if(i=="local"?m+=mo(e.display):m-=e.display.viewOffset,i=="page"||i=="window"){var x=e.display.lineSpace.getBoundingClientRect();m+=x.top+(i=="window"?0:_c(Se(e)));var w=x.left+(i=="window"?0:uu(Se(e)));s.left+=w,s.right+=w}return s.top+=m,s.bottom+=m,s}function Cc(e,n,s){if(s=="div")return n;var i=n.left,a=n.top;if(s=="page")i-=uu(Se(e)),a-=_c(Se(e));else if(s=="local"||!s){var h=e.display.sizer.getBoundingClientRect();i+=h.left,a+=h.top}var m=e.display.lineSpace.getBoundingClientRect();return{left:i-m.left,top:a-m.top}}function ll(e,n,s,i,a){return i||(i=Je(e.doc,n.line)),ol(e,i,au(e,i,n.ch,a),s)}function Cn(e,n,s,i,a,h){i=i||Je(e.doc,n.line),a||(a=ki(e,i));function m(ge,be){var Ae=Er(e,a,ge,be?"right":"left",h);return be?Ae.left=Ae.right:Ae.right=Ae.left,ol(e,i,Ae,s)}var x=bt(i,e.doc.direction),w=n.ch,_=n.sticky;if(w>=i.text.length?(w=i.text.length,_="before"):w<=0&&(w=0,_="after"),!x)return m(_=="before"?w-1:w,_=="before");function z(ge,be,Ae){var Ee=x[be],ze=Ee.level==1;return m(Ae?ge-1:ge,ze!=Ae)}var q=Br(x,w,_),ie=Rr,te=z(w,q,_=="before");return ie!=null&&(te.other=z(w,ie,_!="before")),te}function ka(e,n){var s=0;n=gt(e.doc,n),e.options.lineWrapping||(s=ms(e.display)*n.ch);var i=Je(e.doc,n.line),a=_n(i)+mo(e.display);return{left:s,right:s,top:a,bottom:a+i.height}}function ul(e,n,s,i,a){var h=pe(e,n,s);return h.xRel=a,i&&(h.outside=i),h}function cl(e,n,s){var i=e.doc;if(s+=e.display.viewOffset,s<0)return ul(i.first,0,null,-1,-1);var a=U(i,s),h=i.first+i.size-1;if(a>h)return ul(i.first+i.size-1,Je(i,h).text.length,null,1,1);n<0&&(n=0);for(var m=Je(i,a);;){var x=sp(e,m,a,n,s),w=Tt(m,x.ch+(x.xRel>0||x.outside>0?1:0));if(!w)return x;var _=w.find(1);if(_.line==a)return _;m=Je(i,a=_.line)}}function du(e,n,s,i){i-=cu(n);var a=n.text.length,h=nr(function(m){return Er(e,s,m-1).bottom<=i},a,0);return a=nr(function(m){return Er(e,s,m).top>i},h,a),{begin:h,end:a}}function pu(e,n,s,i){s||(s=ki(e,n));var a=ol(e,n,Er(e,s,i),"line").top;return du(e,n,s,a)}function yo(e,n,s,i){return e.bottom<=s?!1:e.top>s?!0:(i?e.left:e.right)>n}function sp(e,n,s,i,a){a-=_n(n);var h=ki(e,n),m=cu(n),x=0,w=n.text.length,_=!0,z=bt(n,e.doc.direction);if(z){var q=(e.options.lineWrapping?Sa:ap)(e,n,s,h,z,i,a);_=q.level!=1,x=_?q.from:q.to-1,w=_?q.to:q.from-1}var ie=null,te=null,ge=nr(function(ot){var Ve=Er(e,h,ot);return Ve.top+=m,Ve.bottom+=m,yo(Ve,i,a,!1)?(Ve.top<=a&&Ve.left<=i&&(ie=ot,te=Ve),!0):!1},x,w),be,Ae,Ee=!1;if(te){var ze=i-te.left<te.right-i,De=ze==_;ge=ie+(De?0:1),Ae=De?"after":"before",be=ze?te.left:te.right}else{!_&&(ge==w||ge==x)&&ge++,Ae=ge==0?"after":ge==n.text.length?"before":Er(e,h,ge-(_?1:0)).bottom+m<=a==_?"after":"before";var Ge=Cn(e,pe(s,ge,Ae),"line",n,h);be=Ge.left,Ee=a<Ge.top?-1:a>=Ge.bottom?1:0}return ge=Xt(n.text,ge,1),ul(s,ge,Ae,Ee,i-be)}function ap(e,n,s,i,a,h,m){var x=nr(function(q){var ie=a[q],te=ie.level!=1;return yo(Cn(e,pe(s,te?ie.to:ie.from,te?"before":"after"),"line",n,i),h,m,!0)},0,a.length-1),w=a[x];if(x>0){var _=w.level!=1,z=Cn(e,pe(s,_?w.from:w.to,_?"after":"before"),"line",n,i);yo(z,h,m,!0)&&z.top>m&&(w=a[x-1])}return w}function Sa(e,n,s,i,a,h,m){var x=du(e,n,i,m),w=x.begin,_=x.end;/\s/.test(n.text.charAt(_-1))&&_--;for(var z=null,q=null,ie=0;ie<a.length;ie++){var te=a[ie];if(!(te.from>=_||te.to<=w)){var ge=te.level!=1,be=Er(e,i,ge?Math.min(_,te.to)-1:Math.max(w,te.from)).right,Ae=be<h?h-be+1e9:be-h;(!z||q>Ae)&&(z=te,q=Ae)}}return z||(z=a[a.length-1]),z.from<w&&(z={from:w,to:z.to,level:z.level}),z.to>_&&(z={from:z.from,to:_,level:z.level}),z}var Ki;function Si(e){if(e.cachedTextHeight!=null)return e.cachedTextHeight;if(Ki==null){Ki=L("pre",null,"CodeMirror-line-like");for(var n=0;n<49;++n)Ki.appendChild(document.createTextNode("x")),Ki.appendChild(L("br"));Ki.appendChild(document.createTextNode("x"))}ye(e.measure,Ki);var s=Ki.offsetHeight/50;return s>3&&(e.cachedTextHeight=s),oe(e.measure),s||1}function ms(e){if(e.cachedCharWidth!=null)return e.cachedCharWidth;var n=L("span","xxxxxxxxxx"),s=L("pre",[n],"CodeMirror-line-like");ye(e.measure,s);var i=n.getBoundingClientRect(),a=(i.right-i.left)/10;return a>2&&(e.cachedCharWidth=a),a||10}function dl(e){for(var n=e.display,s={},i={},a=n.gutters.clientLeft,h=n.gutters.firstChild,m=0;h;h=h.nextSibling,++m){var x=e.display.gutterSpecs[m].className;s[x]=h.offsetLeft+h.clientLeft+a,i[x]=h.clientWidth}return{fixedPos:_a(n),gutterTotalWidth:n.gutters.offsetWidth,gutterLeft:s,gutterWidth:i,wrapperWidth:n.wrapper.clientWidth}}function _a(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Fs(e){var n=Si(e.display),s=e.options.lineWrapping,i=s&&Math.max(5,e.display.scroller.clientWidth/ms(e.display)-3);return function(a){if(Nr(e.doc,a))return 0;var h=0;if(a.widgets)for(var m=0;m<a.widgets.length;m++)a.widgets[m].height&&(h+=a.widgets[m].height);return s?h+(Math.ceil(a.text.length/i)||1)*n:h+n}}function vo(e){var n=e.doc,s=Fs(e);n.iter(function(i){var a=s(i);a!=i.height&&Yn(i,a)})}function gs(e,n,s,i){var a=e.display;if(!s&&mi(n).getAttribute("cm-not-content")=="true")return null;var h,m,x=a.lineSpace.getBoundingClientRect();try{h=n.clientX-x.left,m=n.clientY-x.top}catch{return null}var w=cl(e,h,m),_;if(i&&w.xRel>0&&(_=Je(e.doc,w.line).text).length==w.ch){var z=Ke(_,_.length,e.options.tabSize)-_.length;w=pe(w.line,Math.max(0,Math.round((h-su(e.display).left)/ms(e.display))-z))}return w}function _i(e,n){if(n>=e.display.viewTo||(n-=e.display.viewFrom,n<0))return null;for(var s=e.display.view,i=0;i<s.length;i++)if(n-=s[i].size,n<0)return i}function sr(e,n,s,i){n==null&&(n=e.doc.first),s==null&&(s=e.doc.first+e.doc.size),i||(i=0);var a=e.display;if(i&&s<a.viewTo&&(a.updateLineNumbers==null||a.updateLineNumbers>n)&&(a.updateLineNumbers=n),e.curOp.viewChanged=!0,n>=a.viewTo)Dn&&fr(e.doc,n)<a.viewTo&&Gi(e);else if(s<=a.viewFrom)Dn&&pn(e.doc,s+i)>a.viewFrom?Gi(e):(a.viewFrom+=i,a.viewTo+=i);else if(n<=a.viewFrom&&s>=a.viewTo)Gi(e);else if(n<=a.viewFrom){var h=xo(e,s,s+i,1);h?(a.view=a.view.slice(h.index),a.viewFrom=h.lineN,a.viewTo+=i):Gi(e)}else if(s>=a.viewTo){var m=xo(e,n,n,-1);m?(a.view=a.view.slice(0,m.index),a.viewTo=m.lineN):Gi(e)}else{var x=xo(e,n,n,-1),w=xo(e,s,s+i,1);x&&w?(a.view=a.view.slice(0,x.index).concat(rl(e,x.lineN,w.lineN)).concat(a.view.slice(w.index)),a.viewTo+=i):Gi(e)}var _=a.externalMeasured;_&&(s<_.lineN?_.lineN+=i:n<_.lineN+_.size&&(a.externalMeasured=null))}function $i(e,n,s){e.curOp.viewChanged=!0;var i=e.display,a=e.display.externalMeasured;if(a&&n>=a.lineN&&n<a.lineN+a.size&&(i.externalMeasured=null),!(n<i.viewFrom||n>=i.viewTo)){var h=i.view[_i(e,n)];if(h.node!=null){var m=h.changes||(h.changes=[]);$e(m,s)==-1&&m.push(s)}}}function Gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function xo(e,n,s,i){var a=_i(e,n),h,m=e.display.view;if(!Dn||s==e.doc.first+e.doc.size)return{index:a,lineN:s};for(var x=e.display.viewFrom,w=0;w<a;w++)x+=m[w].size;if(x!=n){if(i>0){if(a==m.length-1)return null;h=x+m[a].size-n,a++}else h=x-n;n+=h,s+=h}for(;fr(e.doc,s)!=s;){if(a==(i<0?0:m.length-1))return null;s+=i*m[a-(i<0?1:0)].size,a+=i}return{index:a,lineN:s}}function Tc(e,n,s){var i=e.display,a=i.view;a.length==0||n>=i.viewTo||s<=i.viewFrom?(i.view=rl(e,n,s),i.viewFrom=n):(i.viewFrom>n?i.view=rl(e,n,i.viewFrom).concat(i.view):i.viewFrom<n&&(i.view=i.view.slice(_i(e,n))),i.viewFrom=n,i.viewTo<s?i.view=i.view.concat(rl(e,i.viewTo,s)):i.viewTo>s&&(i.view=i.view.slice(0,_i(e,s)))),i.viewTo=s}function hu(e){for(var n=e.display.view,s=0,i=0;i<n.length;i++){var a=n[i];!a.hidden&&(!a.node||a.changes)&&++s}return s}function Gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function pl(e,n){n===void 0&&(n=!0);var s=e.doc,i={},a=i.cursors=document.createDocumentFragment(),h=i.selection=document.createDocumentFragment(),m=e.options.$customCursor;m&&(n=!0);for(var x=0;x<s.sel.ranges.length;x++)if(!(!n&&x==s.sel.primIndex)){var w=s.sel.ranges[x];if(!(w.from().line>=e.display.viewTo||w.to().line<e.display.viewFrom)){var _=w.empty();if(m){var z=m(e,w);z&&bo(e,z,a)}else(_||e.options.showCursorWhenSelecting)&&bo(e,w.head,a);_||op(e,w,h)}}return i}function bo(e,n,s){var i=Cn(e,n,"div",null,null,!e.options.singleCursorHeightPerLine),a=s.appendChild(L("div"," ","CodeMirror-cursor"));if(a.style.left=i.left+"px",a.style.top=i.top+"px",a.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var h=ll(e,n,"div",null,null),m=h.right-h.left;a.style.width=(m>0?m:e.defaultCharWidth())+"px"}if(i.other){var x=s.appendChild(L("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));x.style.display="",x.style.left=i.other.left+"px",x.style.top=i.other.top+"px",x.style.height=(i.other.bottom-i.other.top)*.85+"px"}}function hl(e,n){return e.top-n.top||e.left-n.left}function op(e,n,s){var i=e.display,a=e.doc,h=document.createDocumentFragment(),m=su(e.display),x=m.left,w=Math.max(i.sizerWidth,hs(e)-i.sizer.offsetLeft)-m.right,_=a.direction=="ltr";function z(De,Ge,ot,Ve){Ge<0&&(Ge=0),Ge=Math.round(Ge),Ve=Math.round(Ve),h.appendChild(L("div",null,"CodeMirror-selected","position: absolute; left: "+De+`px;
                             top: `+Ge+"px; width: "+(ot??w-De)+`px;
                             height: `+(Ve-Ge)+"px"))}function q(De,Ge,ot){var Ve=Je(a,De),St=Ve.text.length,Et,Un;function sn(vn,br){return ll(e,pe(De,vn),"div",Ve,br)}function xr(vn,br,jn){var xn=pu(e,Ve,null,vn),Dt=br=="ltr"==(jn=="after")?"left":"right",dt=jn=="after"?xn.begin:xn.end-(/\s/.test(Ve.text.charAt(xn.end-1))?2:1);return sn(dt,Dt)[Dt]}var lr=bt(Ve,a.direction);return Sr(lr,Ge||0,ot??St,function(vn,br,jn,xn){var Dt=jn=="ltr",dt=sn(vn,Dt?"left":"right"),zt=sn(br-1,Dt?"right":"left"),an=Ge==null&&vn==0,un=ot==null&&br==St,Ut=xn==0,wr=!lr||xn==lr.length-1;if(zt.top-dt.top<=3){var Lt=(_?an:un)&&Ut,la=(_?un:an)&&wr,kr=Lt?x:(Dt?dt:zt).left,Ri=la?w:(Dt?zt:dt).right;z(kr,dt.top,Ri-kr,dt.bottom)}else{var es,Rn,qn,qo;Dt?(es=_&&an&&Ut?x:dt.left,Rn=_?w:xr(vn,jn,"before"),qn=_?x:xr(br,jn,"after"),qo=_&&un&&wr?w:zt.right):(es=_?xr(vn,jn,"before"):x,Rn=!_&&an&&Ut?w:dt.right,qn=!_&&un&&wr?x:zt.left,qo=_?xr(br,jn,"after"):w),z(es,dt.top,Rn-es,dt.bottom),dt.bottom<zt.top&&z(x,dt.bottom,null,zt.top),z(qn,zt.top,qo-qn,zt.bottom)}(!Et||hl(dt,Et)<0)&&(Et=dt),hl(zt,Et)<0&&(Et=zt),(!Un||hl(dt,Un)<0)&&(Un=dt),hl(zt,Un)<0&&(Un=zt)}),{start:Et,end:Un}}var ie=n.from(),te=n.to();if(ie.line==te.line)q(ie.line,ie.ch,te.ch);else{var ge=Je(a,ie.line),be=Je(a,te.line),Ae=Kt(ge)==Kt(be),Ee=q(ie.line,ie.ch,Ae?ge.text.length+1:null).end,ze=q(te.line,Ae?0:null,te.ch).start;Ae&&(Ee.top<ze.top-2?(z(Ee.right,Ee.top,null,Ee.bottom),z(x,ze.top,ze.left,ze.bottom)):z(Ee.right,Ee.top,ze.left-Ee.right,Ee.bottom)),Ee.bottom<ze.top&&z(x,Ee.bottom,null,ze.top)}s.appendChild(h)}function Ws(e){if(e.state.focused){var n=e.display;clearInterval(n.blinker);var s=!0;n.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?n.blinker=setInterval(function(){e.hasFocus()||Wt(e),n.cursorDiv.style.visibility=(s=!s)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(n.cursorDiv.style.visibility="hidden")}}function jc(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||ml(e))}function fl(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Wt(e))},100)}function ml(e,n){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),e.options.readOnly!="nocursor"&&(e.state.focused||(It(e,"focus",e,n),e.state.focused=!0,$(e.display.wrapper,"CodeMirror-focused"),!e.curOp&&e.display.selForContextMenu!=e.doc.sel&&(e.display.input.reset(),N&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ws(e))}function Wt(e,n){e.state.delayingBlurEvent||(e.state.focused&&(It(e,"blur",e,n),e.state.focused=!1,Ce(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Ca(e){for(var n=e.display,s=n.lineDiv.offsetTop,i=Math.max(0,n.scroller.getBoundingClientRect().top),a=n.lineDiv.getBoundingClientRect().top,h=0,m=0;m<n.view.length;m++){var x=n.view[m],w=e.options.lineWrapping,_=void 0,z=0;if(!x.hidden){if(a+=x.line.height,S&&j<8){var q=x.node.offsetTop+x.node.offsetHeight;_=q-s,s=q}else{var ie=x.node.getBoundingClientRect();_=ie.bottom-ie.top,!w&&x.text.firstChild&&(z=x.text.firstChild.getBoundingClientRect().right-ie.left-1)}var te=x.line.height-_;if((te>.005||te<-.005)&&(a<i&&(h-=te),Yn(x.line,_),wo(x.line),x.rest))for(var ge=0;ge<x.rest.length;ge++)wo(x.rest[ge]);if(z>e.display.sizerWidth){var be=Math.ceil(z/ms(e.display));be>e.display.maxLineLength&&(e.display.maxLineLength=be,e.display.maxLine=x.line,e.display.maxLineChanged=!0)}}}Math.abs(h)>2&&(n.scroller.scrollTop+=h)}function wo(e){if(e.widgets)for(var n=0;n<e.widgets.length;++n){var s=e.widgets[n],i=s.node.parentNode;i&&(s.height=i.offsetHeight)}}function ys(e,n,s){var i=s&&s.top!=null?Math.max(0,s.top):e.scroller.scrollTop;i=Math.floor(i-mo(e));var a=s&&s.bottom!=null?s.bottom:i+e.wrapper.clientHeight,h=U(n,i),m=U(n,a);if(s&&s.ensure){var x=s.ensure.from.line,w=s.ensure.to.line;x<h?(h=x,m=U(n,_n(Je(n,x))+e.wrapper.clientHeight)):Math.min(w,n.lastLine())>=m&&(h=U(n,_n(Je(n,w))-e.wrapper.clientHeight),m=w)}return{from:h,to:Math.max(m,h+1)}}function Nc(e,n){if(!qt(e,"scrollCursorIntoView")){var s=e.display,i=s.sizer.getBoundingClientRect(),a=null,h=s.wrapper.ownerDocument;if(n.top+i.top<0?a=!0:n.bottom+i.top>(h.defaultView.innerHeight||h.documentElement.clientHeight)&&(a=!1),a!=null&&!M){var m=L("div","​",null,`position: absolute;
                         top: `+(n.top-s.viewOffset-mo(e.display))+`px;
                         height: `+(n.bottom-n.top+ai(e)+s.barHeight)+`px;
                         left: `+n.left+"px; width: "+Math.max(2,n.right-n.left)+"px;");e.display.lineSpace.appendChild(m),m.scrollIntoView(a),e.display.lineSpace.removeChild(m)}}}function fu(e,n,s,i){i==null&&(i=0);var a;!e.options.lineWrapping&&n==s&&(s=n.sticky=="before"?pe(n.line,n.ch+1,"before"):n,n=n.ch?pe(n.line,n.sticky=="before"?n.ch-1:n.ch,"after"):n);for(var h=0;h<5;h++){var m=!1,x=Cn(e,n),w=!s||s==n?x:Cn(e,s);a={left:Math.min(x.left,w.left),top:Math.min(x.top,w.top)-i,right:Math.max(x.left,w.left),bottom:Math.max(x.bottom,w.bottom)+i};var _=Ta(e,a),z=e.doc.scrollTop,q=e.doc.scrollLeft;if(_.scrollTop!=null&&(xs(e,_.scrollTop),Math.abs(e.doc.scrollTop-z)>1&&(m=!0)),_.scrollLeft!=null&&(Yi(e,_.scrollLeft),Math.abs(e.doc.scrollLeft-q)>1&&(m=!0)),!m)break}return a}function ko(e,n){var s=Ta(e,n);s.scrollTop!=null&&xs(e,s.scrollTop),s.scrollLeft!=null&&Yi(e,s.scrollLeft)}function Ta(e,n){var s=e.display,i=Si(e.display);n.top<0&&(n.top=0);var a=e.curOp&&e.curOp.scrollTop!=null?e.curOp.scrollTop:s.scroller.scrollTop,h=fs(e),m={};n.bottom-n.top>h&&(n.bottom=n.top+h);var x=e.doc.height+il(s),w=n.top<i,_=n.bottom>x-i;if(n.top<a)m.scrollTop=w?0:n.top;else if(n.bottom>a+h){var z=Math.min(n.top,(_?x:n.bottom)-h);z!=a&&(m.scrollTop=z)}var q=e.options.fixedGutter?0:s.gutters.offsetWidth,ie=e.curOp&&e.curOp.scrollLeft!=null?e.curOp.scrollLeft:s.scroller.scrollLeft-q,te=hs(e)-s.gutters.offsetWidth,ge=n.right-n.left>te;return ge&&(n.right=n.left+te),n.left<10?m.scrollLeft=0:n.left<ie?m.scrollLeft=Math.max(0,n.left+q-(ge?0:10)):n.right>te+ie-3&&(m.scrollLeft=n.right+(ge?0:10)-te),m}function vs(e,n){n!=null&&(_o(e),e.curOp.scrollTop=(e.curOp.scrollTop==null?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Hs(e){_o(e);var n=e.getCursor();e.curOp.scrollToPos={from:n,to:n,margin:e.options.cursorScrollMargin}}function So(e,n,s){(n!=null||s!=null)&&_o(e),n!=null&&(e.curOp.scrollLeft=n),s!=null&&(e.curOp.scrollTop=s)}function lp(e,n){_o(e),e.curOp.scrollToPos=n}function _o(e){var n=e.curOp.scrollToPos;if(n){e.curOp.scrollToPos=null;var s=ka(e,n.from),i=ka(e,n.to);Co(e,s,i,n.margin)}}function Co(e,n,s,i){var a=Ta(e,{left:Math.min(n.left,s.left),top:Math.min(n.top,s.top)-i,right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)+i});So(e,a.scrollLeft,a.scrollTop)}function xs(e,n){Math.abs(e.doc.scrollTop-n)<2||(y||Xi(e,{top:n}),gl(e,n,!0),y&&Xi(e),qs(e,100))}function gl(e,n,s){n=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,n)),!(e.display.scroller.scrollTop==n&&!s)&&(e.doc.scrollTop=n,e.display.scrollbars.setScrollTop(n),e.display.scroller.scrollTop!=n&&(e.display.scroller.scrollTop=n))}function Yi(e,n,s,i){n=Math.max(0,Math.min(n,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),!((s?n==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-n)<2)&&!i)&&(e.doc.scrollLeft=n,gu(e),e.display.scroller.scrollLeft!=n&&(e.display.scroller.scrollLeft=n),e.display.scrollbars.setScrollLeft(n))}function Bs(e){var n=e.display,s=n.gutters.offsetWidth,i=Math.round(e.doc.height+il(e.display));return{clientHeight:n.scroller.clientHeight,viewHeight:n.wrapper.clientHeight,scrollWidth:n.scroller.scrollWidth,clientWidth:n.scroller.clientWidth,viewWidth:n.wrapper.clientWidth,barLeft:e.options.fixedGutter?s:0,docHeight:i,scrollHeight:i+ai(e)+n.barHeight,nativeBarWidth:n.nativeBarWidth,gutterWidth:s}}var Vi=function(e,n,s){this.cm=s;var i=this.vert=L("div",[L("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),a=this.horiz=L("div",[L("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=a.tabIndex=-1,e(i),e(a),rt(i,"scroll",function(){i.clientHeight&&n(i.scrollTop,"vertical")}),rt(a,"scroll",function(){a.clientWidth&&n(a.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,S&&j<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Vi.prototype.update=function(e){var n=e.scrollWidth>e.clientWidth+1,s=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(s){this.vert.style.display="block",this.vert.style.bottom=n?i+"px":"0";var a=e.viewHeight-(n?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+a)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(n){this.horiz.style.display="block",this.horiz.style.right=s?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var h=e.viewWidth-e.barLeft-(s?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+h)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(i==0&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:s?i:0,bottom:n?i:0}},Vi.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vi.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vi.prototype.zeroWidthHack=function(){var e=V&&!J?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new et,this.disableVert=new et},Vi.prototype.enableZeroWidthBar=function(e,n,s){e.style.visibility="";function i(){var a=e.getBoundingClientRect(),h=s=="vert"?document.elementFromPoint(a.right-1,(a.top+a.bottom)/2):document.elementFromPoint((a.right+a.left)/2,a.bottom-1);h!=e?e.style.visibility="hidden":n.set(1e3,i)}n.set(1e3,i)},Vi.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var To=function(){};To.prototype.update=function(){return{bottom:0,right:0}},To.prototype.setScrollLeft=function(){},To.prototype.setScrollTop=function(){},To.prototype.clear=function(){};function Us(e,n){n||(n=Bs(e));var s=e.display.barWidth,i=e.display.barHeight;Ec(e,n);for(var a=0;a<4&&s!=e.display.barWidth||i!=e.display.barHeight;a++)s!=e.display.barWidth&&e.options.lineWrapping&&Ca(e),Ec(e,Bs(e)),s=e.display.barWidth,i=e.display.barHeight}function Ec(e,n){var s=e.display,i=s.scrollbars.update(n);s.sizer.style.paddingRight=(s.barWidth=i.right)+"px",s.sizer.style.paddingBottom=(s.barHeight=i.bottom)+"px",s.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(s.scrollbarFiller.style.display="block",s.scrollbarFiller.style.height=i.bottom+"px",s.scrollbarFiller.style.width=i.right+"px"):s.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(s.gutterFiller.style.display="block",s.gutterFiller.style.height=i.bottom+"px",s.gutterFiller.style.width=n.gutterWidth+"px"):s.gutterFiller.style.display=""}var Lc={native:Vi,null:To};function yl(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ce(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Lc[e.options.scrollbarStyle](function(n){e.display.wrapper.insertBefore(n,e.display.scrollbarFiller),rt(n,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),n.setAttribute("cm-not-content","true")},function(n,s){s=="horizontal"?Yi(e,n):xs(e,n)},e),e.display.scrollbars.addClass&&$(e.display.wrapper,e.display.scrollbars.addClass)}var bs=0;function ws(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++bs,markArrays:null},gc(e.curOp)}function Yr(e){var n=e.curOp;n&&Xd(n,function(s){for(var i=0;i<s.ops.length;i++)s.ops[i].cm.curOp=null;Ci(s)})}function Ci(e){for(var n=e.ops,s=0;s<n.length;s++)jo(n[s]);for(var i=0;i<n.length;i++)Ji(n[i]);for(var a=0;a<n.length;a++)mu(n[a]);for(var h=0;h<n.length;h++)up(n[h]);for(var m=0;m<n.length;m++)cp(n[m])}function jo(e){var n=e.cm,s=n.display;nn(n),e.updateMaxLine&&uo(n),e.mustUpdate=e.viewChanged||e.forceUpdate||e.scrollTop!=null||e.scrollToPos&&(e.scrollToPos.from.line<s.viewFrom||e.scrollToPos.to.line>=s.viewTo)||s.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new oi(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Ji(e){e.updatedDisplay=e.mustUpdate&&Jn(e.cm,e.update)}function mu(e){var n=e.cm,s=n.display;e.updatedDisplay&&Ca(n),e.barMeasure=Bs(n),s.maxLineChanged&&!n.options.lineWrapping&&(e.adjustWidthTo=au(n,s.maxLine,s.maxLine.text.length).left+3,n.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(s.scroller.clientWidth,s.sizer.offsetLeft+e.adjustWidthTo+ai(n)+n.display.barWidth),e.maxScrollLeft=Math.max(0,s.sizer.offsetLeft+e.adjustWidthTo-hs(n))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=s.input.prepareSelection())}function up(e){var n=e.cm;e.adjustWidthTo!=null&&(n.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<n.doc.scrollLeft&&Yi(n,Math.min(n.display.scroller.scrollLeft,e.maxScrollLeft),!0),n.display.maxLineChanged=!1);var s=e.focus&&e.focus==E(Ie(n));e.preparedSelection&&n.display.input.showSelection(e.preparedSelection,s),(e.updatedDisplay||e.startHeight!=n.doc.height)&&Us(n,e.barMeasure),e.updatedDisplay&&Ea(n,e.barMeasure),e.selectionChanged&&Ws(n),n.state.focused&&e.updateInput&&n.display.input.reset(e.typing),s&&jc(e.cm)}function cp(e){var n=e.cm,s=n.display,i=n.doc;if(e.updatedDisplay&&mr(n,e.update),s.wheelStartX!=null&&(e.scrollTop!=null||e.scrollLeft!=null||e.scrollToPos)&&(s.wheelStartX=s.wheelStartY=null),e.scrollTop!=null&&gl(n,e.scrollTop,e.forceScroll),e.scrollLeft!=null&&Yi(n,e.scrollLeft,!0,!0),e.scrollToPos){var a=fu(n,gt(i,e.scrollToPos.from),gt(i,e.scrollToPos.to),e.scrollToPos.margin);Nc(n,a)}var h=e.maybeHiddenMarkers,m=e.maybeUnhiddenMarkers;if(h)for(var x=0;x<h.length;++x)h[x].lines.length||It(h[x],"hide");if(m)for(var w=0;w<m.length;++w)m[w].lines.length&&It(m[w],"unhide");s.wrapper.offsetHeight&&(i.scrollTop=n.display.scroller.scrollTop),e.changeObjs&&It(n,"changes",n,e.changeObjs),e.update&&e.update.finish()}function Pn(e,n){if(e.curOp)return n();ws(e);try{return n()}finally{Yr(e)}}function hn(e,n){return function(){if(e.curOp)return n.apply(e,arguments);ws(e);try{return n.apply(e,arguments)}finally{Yr(e)}}}function Tn(e){return function(){if(this.curOp)return e.apply(this,arguments);ws(this);try{return e.apply(this,arguments)}finally{Yr(this)}}}function yn(e){return function(){var n=this.cm;if(!n||n.curOp)return e.apply(this,arguments);ws(n);try{return e.apply(this,arguments)}finally{Yr(n)}}}function qs(e,n){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(n,ke(ja,e))}function ja(e){var n=e.doc;if(!(n.highlightFrontier>=e.display.viewTo)){var s=+new Date+e.options.workTime,i=Nt(e,n.highlightFrontier),a=[];n.iter(i.line,Math.min(n.first+n.size,e.display.viewTo+500),function(h){if(i.line>=e.display.viewFrom){var m=h.styles,x=h.text.length>e.options.maxHighlightLength?Rt(n.mode,i.state):null,w=so(e,h,i,!0);x&&(i.state=x),h.styles=w.styles;var _=h.styleClasses,z=w.classes;z?h.styleClasses=z:_&&(h.styleClasses=null);for(var q=!m||m.length!=h.styles.length||_!=z&&(!_||!z||_.bgClass!=z.bgClass||_.textClass!=z.textClass),ie=0;!q&&ie<m.length;++ie)q=m[ie]!=h.styles[ie];q&&a.push(i.line),h.stateAfter=i.save(),i.nextLine()}else h.text.length<=e.options.maxHighlightLength&&ds(e,h.text,i),h.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>s)return qs(e,e.options.workDelay),!0}),n.highlightFrontier=i.line,n.modeFrontier=Math.max(n.modeFrontier,i.line),a.length&&Pn(e,function(){for(var h=0;h<a.length;h++)$i(e,a[h],"text")})}}var oi=function(e,n,s){var i=e.display;this.viewport=n,this.visible=ys(i,e.doc,n),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=hs(e),this.force=s,this.dims=dl(e),this.events=[]};oi.prototype.signal=function(e,n){gn(e,n)&&this.events.push(arguments)},oi.prototype.finish=function(){for(var e=0;e<this.events.length;e++)It.apply(null,this.events[e])};function nn(e){var n=e.display;!n.scrollbarsClipped&&n.scroller.offsetWidth&&(n.nativeBarWidth=n.scroller.offsetWidth-n.scroller.clientWidth,n.heightForcer.style.height=ai(e)+"px",n.sizer.style.marginBottom=-n.nativeBarWidth+"px",n.sizer.style.borderRightWidth=ai(e)+"px",n.scrollbarsClipped=!0)}function Zt(e){if(e.hasFocus())return null;var n=E(Ie(e));if(!n||!R(e.display.lineDiv,n))return null;var s={activeElt:n};if(window.getSelection){var i=Oe(e).getSelection();i.anchorNode&&i.extend&&R(e.display.lineDiv,i.anchorNode)&&(s.anchorNode=i.anchorNode,s.anchorOffset=i.anchorOffset,s.focusNode=i.focusNode,s.focusOffset=i.focusOffset)}return s}function ks(e){if(!(!e||!e.activeElt||e.activeElt==E(qe(e.activeElt)))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&R(document.body,e.anchorNode)&&R(document.body,e.focusNode))){var n=e.activeElt.ownerDocument,s=n.defaultView.getSelection(),i=n.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),s.removeAllRanges(),s.addRange(i),s.extend(e.focusNode,e.focusOffset)}}function Jn(e,n){var s=e.display,i=e.doc;if(n.editorIsHidden)return Gi(e),!1;if(!n.force&&n.visible.from>=s.viewFrom&&n.visible.to<=s.viewTo&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo)&&s.renderedView==s.view&&hu(e)==0)return!1;yu(e)&&(Gi(e),n.dims=dl(e));var a=i.first+i.size,h=Math.max(n.visible.from-e.options.viewportMargin,i.first),m=Math.min(a,n.visible.to+e.options.viewportMargin);s.viewFrom<h&&h-s.viewFrom<20&&(h=Math.max(i.first,s.viewFrom)),s.viewTo>m&&s.viewTo-m<20&&(m=Math.min(a,s.viewTo)),Dn&&(h=fr(e.doc,h),m=pn(e.doc,m));var x=h!=s.viewFrom||m!=s.viewTo||s.lastWrapHeight!=n.wrapperHeight||s.lastWrapWidth!=n.wrapperWidth;Tc(e,h,m),s.viewOffset=_n(Je(e.doc,s.viewFrom)),e.display.mover.style.top=s.viewOffset+"px";var w=hu(e);if(!x&&w==0&&!n.force&&s.renderedView==s.view&&(s.updateLineNumbers==null||s.updateLineNumbers>=s.viewTo))return!1;var _=Zt(e);return w>4&&(s.lineDiv.style.display="none"),Na(e,s.updateLineNumbers,n.dims),w>4&&(s.lineDiv.style.display=""),s.renderedView=s.view,ks(_),oe(s.cursorDiv),oe(s.selectionDiv),s.gutters.style.height=s.sizer.style.minHeight=0,x&&(s.lastWrapHeight=n.wrapperHeight,s.lastWrapWidth=n.wrapperWidth,qs(e,400)),s.updateLineNumbers=null,!0}function mr(e,n){for(var s=n.viewport,i=!0;;i=!1){if(!i||!e.options.lineWrapping||n.oldDisplayWidth==hs(e)){if(s&&s.top!=null&&(s={top:Math.min(e.doc.height+il(e.display)-fs(e),s.top)}),n.visible=ys(e.display,e.doc,s),n.visible.from>=e.display.viewFrom&&n.visible.to<=e.display.viewTo)break}else i&&(n.visible=ys(e.display,e.doc,s));if(!Jn(e,n))break;Ca(e);var a=Bs(e);Gr(e),Us(e,a),Ea(e,a),n.force=!1}n.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(n.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Xi(e,n){var s=new oi(e,n);if(Jn(e,s)){Ca(e),mr(e,s);var i=Bs(e);Gr(e),Us(e,i),Ea(e,i),s.finish()}}function Na(e,n,s){var i=e.display,a=e.options.lineNumbers,h=i.lineDiv,m=h.firstChild;function x(ge){var be=ge.nextSibling;return N&&V&&e.display.currentWheelTarget==ge?ge.style.display="none":ge.parentNode.removeChild(ge),be}for(var w=i.view,_=i.viewFrom,z=0;z<w.length;z++){var q=w[z];if(!q.hidden)if(!q.node||q.node.parentNode!=h){var ie=tp(e,q,_,s);h.insertBefore(ie,m)}else{for(;m!=q.node;)m=x(m);var te=a&&n!=null&&n<=_&&q.lineNumber;q.changes&&($e(q.changes,"gutter")>-1&&(te=!1),yc(e,q,_,s)),te&&(oe(q.lineNumber),q.lineNumber.appendChild(document.createTextNode(Ne(e.options,_)))),m=q.node.nextSibling}_+=q.size}for(;m;)m=x(m)}function ar(e){var n=e.gutters.offsetWidth;e.sizer.style.marginLeft=n+"px",zn(e,"gutterChanged",e)}function Ea(e,n){e.display.sizer.style.minHeight=n.docHeight+"px",e.display.heightForcer.style.top=n.docHeight+"px",e.display.gutters.style.height=n.docHeight+e.display.barHeight+ai(e)+"px"}function gu(e){var n=e.display,s=n.view;if(!(!n.alignWidgets&&(!n.gutters.firstChild||!e.options.fixedGutter))){for(var i=_a(n)-n.scroller.scrollLeft+e.doc.scrollLeft,a=n.gutters.offsetWidth,h=i+"px",m=0;m<s.length;m++)if(!s[m].hidden){e.options.fixedGutter&&(s[m].gutter&&(s[m].gutter.style.left=h),s[m].gutterBackground&&(s[m].gutterBackground.style.left=h));var x=s[m].alignable;if(x)for(var w=0;w<x.length;w++)x[w].style.left=h}e.options.fixedGutter&&(n.gutters.style.left=i+a+"px")}}function yu(e){if(!e.options.lineNumbers)return!1;var n=e.doc,s=Ne(e.options,n.first+n.size-1),i=e.display;if(s.length!=i.lineNumChars){var a=i.measure.appendChild(L("div",[L("div",s)],"CodeMirror-linenumber CodeMirror-gutter-elt")),h=a.firstChild.offsetWidth,m=a.offsetWidth-h;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(h,i.lineGutter.offsetWidth-m)+1,i.lineNumWidth=i.lineNumInnerWidth+m,i.lineNumChars=i.lineNumInnerWidth?s.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",ar(e.display),!0}return!1}function La(e,n){for(var s=[],i=!1,a=0;a<e.length;a++){var h=e[a],m=null;if(typeof h!="string"&&(m=h.style,h=h.className),h=="CodeMirror-linenumbers")if(n)i=!0;else continue;s.push({className:h,style:m})}return n&&!i&&s.push({className:"CodeMirror-linenumbers",style:null}),s}function vu(e){var n=e.gutters,s=e.gutterSpecs;oe(n),e.lineGutter=null;for(var i=0;i<s.length;++i){var a=s[i],h=a.className,m=a.style,x=n.appendChild(L("div",null,"CodeMirror-gutter "+h));m&&(x.style.cssText=m),h=="CodeMirror-linenumbers"&&(e.lineGutter=x,x.style.width=(e.lineNumWidth||1)+"px")}n.style.display=s.length?"":"none",ar(e)}function zr(e){vu(e.display),sr(e),gu(e)}function vl(e,n,s,i){var a=this;this.input=s,a.scrollbarFiller=L("div",null,"CodeMirror-scrollbar-filler"),a.scrollbarFiller.setAttribute("cm-not-content","true"),a.gutterFiller=L("div",null,"CodeMirror-gutter-filler"),a.gutterFiller.setAttribute("cm-not-content","true"),a.lineDiv=Q("div",null,"CodeMirror-code"),a.selectionDiv=L("div",null,null,"position: relative; z-index: 1"),a.cursorDiv=L("div",null,"CodeMirror-cursors"),a.measure=L("div",null,"CodeMirror-measure"),a.lineMeasure=L("div",null,"CodeMirror-measure"),a.lineSpace=Q("div",[a.measure,a.lineMeasure,a.selectionDiv,a.cursorDiv,a.lineDiv],null,"position: relative; outline: none");var h=Q("div",[a.lineSpace],"CodeMirror-lines");a.mover=L("div",[h],null,"position: relative"),a.sizer=L("div",[a.mover],"CodeMirror-sizer"),a.sizerWidth=null,a.heightForcer=L("div",null,null,"position: absolute; height: "+Ft+"px; width: 1px;"),a.gutters=L("div",null,"CodeMirror-gutters"),a.lineGutter=null,a.scroller=L("div",[a.sizer,a.heightForcer,a.gutters],"CodeMirror-scroll"),a.scroller.setAttribute("tabIndex","-1"),a.wrapper=L("div",[a.scrollbarFiller,a.gutterFiller,a.scroller],"CodeMirror"),A&&X===105&&(a.wrapper.style.clipPath="inset(0px)"),a.wrapper.setAttribute("translate","no"),S&&j<8&&(a.gutters.style.zIndex=-1,a.scroller.style.paddingRight=0),!N&&!(y&&H)&&(a.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(a.wrapper):e(a.wrapper)),a.viewFrom=a.viewTo=n.first,a.reportedViewFrom=a.reportedViewTo=n.first,a.view=[],a.renderedView=null,a.externalMeasured=null,a.viewOffset=0,a.lastWrapHeight=a.lastWrapWidth=0,a.updateLineNumbers=null,a.nativeBarWidth=a.barHeight=a.barWidth=0,a.scrollbarsClipped=!1,a.lineNumWidth=a.lineNumInnerWidth=a.lineNumChars=null,a.alignWidgets=!1,a.cachedCharWidth=a.cachedTextHeight=a.cachedPaddingH=null,a.maxLine=null,a.maxLineLength=0,a.maxLineChanged=!1,a.wheelDX=a.wheelDY=a.wheelStartX=a.wheelStartY=null,a.shift=!1,a.selForContextMenu=null,a.activeTouch=null,a.gutterSpecs=La(i.gutters,i.lineNumbers),vu(a),s.init(a)}var Pa=0,Ti=null;S?Ti=-.53:y?Ti=15:A?Ti=-.7:Y&&(Ti=-1/3);function Pc(e){var n=e.wheelDeltaX,s=e.wheelDeltaY;return n==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(n=e.detail),s==null&&e.detail&&e.axis==e.VERTICAL_AXIS?s=e.detail:s==null&&(s=e.wheelDelta),{x:n,y:s}}function Ss(e){var n=Pc(e);return n.x*=Ti,n.y*=Ti,n}function Ks(e,n){A&&X==102&&(e.display.chromeScrollHack==null?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100));var s=Pc(n),i=s.x,a=s.y,h=Ti;n.deltaMode===0&&(i=n.deltaX,a=n.deltaY,h=1);var m=e.display,x=m.scroller,w=x.scrollWidth>x.clientWidth,_=x.scrollHeight>x.clientHeight;if(i&&w||a&&_){if(a&&V&&N){e:for(var z=n.target,q=m.view;z!=x;z=z.parentNode)for(var ie=0;ie<q.length;ie++)if(q[ie].node==z){e.display.currentWheelTarget=z;break e}}if(i&&!y&&!D&&h!=null){a&&_&&xs(e,Math.max(0,x.scrollTop+a*h)),Yi(e,Math.max(0,x.scrollLeft+i*h)),(!a||a&&_)&&wn(n),m.wheelStartX=null;return}if(a&&h!=null){var te=a*h,ge=e.doc.scrollTop,be=ge+m.wrapper.clientHeight;te<0?ge=Math.max(0,ge+te-50):be=Math.min(e.doc.height,be+te+50),Xi(e,{top:ge,bottom:be})}Pa<20&&n.deltaMode!==0&&(m.wheelStartX==null?(m.wheelStartX=x.scrollLeft,m.wheelStartY=x.scrollTop,m.wheelDX=i,m.wheelDY=a,setTimeout(function(){if(m.wheelStartX!=null){var Ae=x.scrollLeft-m.wheelStartX,Ee=x.scrollTop-m.wheelStartY,ze=Ee&&m.wheelDY&&Ee/m.wheelDY||Ae&&m.wheelDX&&Ae/m.wheelDX;m.wheelStartX=m.wheelStartY=null,ze&&(Ti=(Ti*Pa+ze)/(Pa+1),++Pa)}},200)):(m.wheelDX+=i,m.wheelDY+=a))}}var Xn=function(e,n){this.ranges=e,this.primIndex=n};Xn.prototype.primary=function(){return this.ranges[this.primIndex]},Xn.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var n=0;n<this.ranges.length;n++){var s=this.ranges[n],i=e.ranges[n];if(!jt(s.anchor,i.anchor)||!jt(s.head,i.head))return!1}return!0},Xn.prototype.deepCopy=function(){for(var e=[],n=0;n<this.ranges.length;n++)e[n]=new At(Qt(this.ranges[n].anchor),Qt(this.ranges[n].head));return new Xn(e,this.primIndex)},Xn.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Xn.prototype.contains=function(e,n){n||(n=e);for(var s=0;s<this.ranges.length;s++){var i=this.ranges[s];if(He(n,i.from())>=0&&He(e,i.to())<=0)return s}return-1};var At=function(e,n){this.anchor=e,this.head=n};At.prototype.from=function(){return Kr(this.anchor,this.head)},At.prototype.to=function(){return Sn(this.anchor,this.head)},At.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function Lr(e,n,s){var i=e&&e.options.selectionsMayTouch,a=n[s];n.sort(function(ie,te){return He(ie.from(),te.from())}),s=$e(n,a);for(var h=1;h<n.length;h++){var m=n[h],x=n[h-1],w=He(x.to(),m.from());if(i&&!m.empty()?w>0:w>=0){var _=Kr(x.from(),m.from()),z=Sn(x.to(),m.to()),q=x.empty()?m.from()==m.head:x.from()==x.head;h<=s&&--s,n.splice(--h,2,new At(q?z:_,q?_:z))}}return new Xn(n,s)}function Fn(e,n){return new Xn([new At(e,n||e)],0)}function Wn(e){return e.text?pe(e.from.line+e.text.length-1,Qe(e.text).length+(e.text.length==1?e.from.ch:0)):e.to}function _s(e,n){if(He(e,n.from)<0)return e;if(He(e,n.to)<=0)return Wn(n);var s=e.line+n.text.length-(n.to.line-n.from.line)-1,i=e.ch;return e.line==n.to.line&&(i+=Wn(n).ch-n.to.ch),pe(s,i)}function li(e,n){for(var s=[],i=0;i<e.sel.ranges.length;i++){var a=e.sel.ranges[i];s.push(new At(_s(a.anchor,n),_s(a.head,n)))}return Lr(e.cm,s,e.sel.primIndex)}function ji(e,n,s){return e.line==n.line?pe(s.line,e.ch-n.ch+s.ch):pe(s.line+(e.line-n.line),e.ch)}function $s(e,n,s){for(var i=[],a=pe(e.first,0),h=a,m=0;m<n.length;m++){var x=n[m],w=ji(x.from,a,h),_=ji(Wn(x),a,h);if(a=x.to,h=_,s=="around"){var z=e.sel.ranges[m],q=He(z.head,z.anchor)<0;i[m]=new At(q?_:w,q?w:_)}else i[m]=new At(w,w)}return new Xn(i,e.sel.primIndex)}function xl(e){e.doc.mode=Bt(e.options,e.doc.modeOption),Gs(e)}function Gs(e){e.doc.iter(function(n){n.stateAfter&&(n.stateAfter=null),n.styles&&(n.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,qs(e,100),e.state.modeGen++,e.curOp&&sr(e)}function bl(e,n){return n.from.ch==0&&n.to.ch==0&&Qe(n.text)==""&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function gr(e,n,s,i){function a(ze){return s?s[ze]:null}function h(ze,De,Ge){Kd(ze,De,Ge,i),zn(ze,"change",ze,n)}function m(ze,De){for(var Ge=[],ot=ze;ot<De;++ot)Ge.push(new wi(_[ot],a(ot),i));return Ge}var x=n.from,w=n.to,_=n.text,z=Je(e,x.line),q=Je(e,w.line),ie=Qe(_),te=a(_.length-1),ge=w.line-x.line;if(n.full)e.insert(0,m(0,_.length)),e.remove(_.length,e.size-_.length);else if(bl(e,n)){var be=m(0,_.length-1);h(q,q.text,te),ge&&e.remove(x.line,ge),be.length&&e.insert(x.line,be)}else if(z==q)if(_.length==1)h(z,z.text.slice(0,x.ch)+ie+z.text.slice(w.ch),te);else{var Ae=m(1,_.length-1);Ae.push(new wi(ie+z.text.slice(w.ch),te,i)),h(z,z.text.slice(0,x.ch)+_[0],a(0)),e.insert(x.line+1,Ae)}else if(_.length==1)h(z,z.text.slice(0,x.ch)+_[0]+q.text.slice(w.ch),a(0)),e.remove(x.line+1,ge);else{h(z,z.text.slice(0,x.ch)+_[0],a(0)),h(q,ie+q.text.slice(w.ch),te);var Ee=m(1,_.length-1);ge>1&&e.remove(x.line+1,ge-1),e.insert(x.line+1,Ee)}zn(e,"change",e,n)}function An(e,n,s){function i(a,h,m){if(a.linked)for(var x=0;x<a.linked.length;++x){var w=a.linked[x];if(w.doc!=h){var _=m&&w.sharedHist;s&&!_||(n(w.doc,_),i(w.doc,a,_))}}}i(e,null,!0)}function rn(e,n){if(n.cm)throw new Error("This document is already in use.");e.doc=n,n.cm=e,vo(e),xl(e),Vr(e),e.options.direction=n.direction,e.options.lineWrapping||uo(e),e.options.mode=n.modeOption,sr(e)}function Vr(e){(e.doc.direction=="rtl"?$:Ce)(e.display.lineDiv,"CodeMirror-rtl")}function Ac(e){Pn(e,function(){Vr(e),sr(e)})}function No(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Eo(e,n){var s={from:Qt(n.from),to:Wn(n),text:ii(e,n.from,n.to)};return Oc(e,s,n.from.line,n.to.line+1),An(e,function(i){return Oc(i,s,n.from.line,n.to.line+1)},!0),s}function wl(e){for(;e.length;){var n=Qe(e);if(n.ranges)e.pop();else break}}function Rc(e,n){if(n)return wl(e.done),Qe(e.done);if(e.done.length&&!Qe(e.done).ranges)return Qe(e.done);if(e.done.length>1&&!e.done[e.done.length-2].ranges)return e.done.pop(),Qe(e.done)}function Lo(e,n,s,i){var a=e.history;a.undone.length=0;var h=+new Date,m,x;if((a.lastOp==i||a.lastOrigin==n.origin&&n.origin&&(n.origin.charAt(0)=="+"&&a.lastModTime>h-(e.cm?e.cm.options.historyEventDelay:500)||n.origin.charAt(0)=="*"))&&(m=Rc(a,a.lastOp==i)))x=Qe(m.changes),He(n.from,n.to)==0&&He(n.from,x.to)==0?x.to=Wn(n):m.changes.push(Eo(e,n));else{var w=Qe(a.done);for((!w||!w.ranges)&&Ra(e.sel,a.done),m={changes:[Eo(e,n)],generation:a.generation},a.done.push(m);a.done.length>a.undoDepth;)a.done.shift(),a.done[0].ranges||a.done.shift()}a.done.push(s),a.generation=++a.maxGeneration,a.lastModTime=a.lastSelTime=h,a.lastOp=a.lastSelOp=i,a.lastOrigin=a.lastSelOrigin=n.origin,x||It(e,"historyAdded")}function Ic(e,n,s,i){var a=n.charAt(0);return a=="*"||a=="+"&&s.ranges.length==i.ranges.length&&s.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Aa(e,n,s,i){var a=e.history,h=i&&i.origin;s==a.lastSelOp||h&&a.lastSelOrigin==h&&(a.lastModTime==a.lastSelTime&&a.lastOrigin==h||Ic(e,h,Qe(a.done),n))?a.done[a.done.length-1]=n:Ra(n,a.done),a.lastSelTime=+new Date,a.lastSelOrigin=h,a.lastSelOp=s,i&&i.clearRedo!==!1&&wl(a.undone)}function Ra(e,n){var s=Qe(n);s&&s.ranges&&s.equals(e)||n.push(e)}function Oc(e,n,s,i){var a=n["spans_"+e.id],h=0;e.iter(Math.max(e.first,s),Math.min(e.first+e.size,i),function(m){m.markedSpans&&((a||(a=n["spans_"+e.id]={}))[h]=m.markedSpans),++h})}function Po(e){if(!e)return null;for(var n,s=0;s<e.length;++s)e[s].marker.explicitlyCleared?n||(n=e.slice(0,s)):n&&n.push(e[s]);return n?n.length?n:null:e}function kl(e,n){var s=n["spans_"+e.id];if(!s)return null;for(var i=[],a=0;a<n.text.length;++a)i.push(Po(s[a]));return i}function xu(e,n){var s=kl(e,n),i=ps(e,n);if(!s)return i;if(!i)return s;for(var a=0;a<s.length;++a){var h=s[a],m=i[a];if(h&&m)e:for(var x=0;x<m.length;++x){for(var w=m[x],_=0;_<h.length;++_)if(h[_].marker==w.marker)continue e;h.push(w)}else m&&(s[a]=m)}return s}function Ys(e,n,s){for(var i=[],a=0;a<e.length;++a){var h=e[a];if(h.ranges){i.push(s?Xn.prototype.deepCopy.call(h):h);continue}var m=h.changes,x=[];i.push({changes:x});for(var w=0;w<m.length;++w){var _=m[w],z=void 0;if(x.push({from:_.from,to:_.to,text:_.text}),n)for(var q in _)(z=q.match(/^spans_(\d+)$/))&&$e(n,Number(z[1]))>-1&&(Qe(x)[q]=_[q],delete _[q])}}return i}function Cs(e,n,s,i){if(i){var a=e.anchor;if(s){var h=He(n,a)<0;h!=He(s,a)<0?(a=n,n=s):h!=He(n,s)<0&&(n=s)}return new At(a,n)}else return new At(s||n,n)}function Ao(e,n,s,i,a){a==null&&(a=e.cm&&(e.cm.display.shift||e.extend)),Hn(e,new Xn([Cs(e.sel.primary(),n,s,a)],0),i)}function Ro(e,n,s){for(var i=[],a=e.cm&&(e.cm.display.shift||e.extend),h=0;h<e.sel.ranges.length;h++)i[h]=Cs(e.sel.ranges[h],n[h],null,a);var m=Lr(e.cm,i,e.sel.primIndex);Hn(e,m,s)}function Ia(e,n,s,i){var a=e.sel.ranges.slice(0);a[n]=s,Hn(e,Lr(e.cm,a,e.sel.primIndex),i)}function Vs(e,n,s,i){Hn(e,Fn(n,s),i)}function bu(e,n,s){var i={ranges:n.ranges,update:function(a){this.ranges=[];for(var h=0;h<a.length;h++)this.ranges[h]=new At(gt(e,a[h].anchor),gt(e,a[h].head))},origin:s&&s.origin};return It(e,"beforeSelectionChange",e,i),e.cm&&It(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=n.ranges?Lr(e.cm,i.ranges,i.ranges.length-1):n}function Sl(e,n,s){var i=e.history.done,a=Qe(i);a&&a.ranges?(i[i.length-1]=n,Oa(e,n,s)):Hn(e,n,s)}function Hn(e,n,s){Oa(e,n,s),Aa(e,e.sel,e.cm?e.cm.curOp.id:NaN,s)}function Oa(e,n,s){(gn(e,"beforeSelectionChange")||e.cm&&gn(e.cm,"beforeSelectionChange"))&&(n=bu(e,n,s));var i=s&&s.bias||(He(n.primary().head,e.sel.primary().head)<0?-1:1);Js(e,Ts(e,n,i,!0)),!(s&&s.scroll===!1)&&e.cm&&e.cm.getOption("readOnly")!="nocursor"&&Hs(e.cm)}function Js(e,n){n.equals(e.sel)||(e.sel=n,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,bn(e.cm)),zn(e,"cursorActivity",e))}function Fr(e){Js(e,Ts(e,e.sel,null,!1))}function Ts(e,n,s,i){for(var a,h=0;h<n.ranges.length;h++){var m=n.ranges[h],x=n.ranges.length==e.sel.ranges.length&&e.sel.ranges[h],w=Io(e,m.anchor,x&&x.anchor,s,i),_=m.head==m.anchor?w:Io(e,m.head,x&&x.head,s,i);(a||w!=m.anchor||_!=m.head)&&(a||(a=n.ranges.slice(0,h)),a[h]=new At(w,_))}return a?Lr(e.cm,a,n.primIndex):n}function js(e,n,s,i,a){var h=Je(e,n.line);if(h.markedSpans)for(var m=0;m<h.markedSpans.length;++m){var x=h.markedSpans[m],w=x.marker,_="selectLeft"in w?!w.selectLeft:w.inclusiveLeft,z="selectRight"in w?!w.selectRight:w.inclusiveRight;if((x.from==null||(_?x.from<=n.ch:x.from<n.ch))&&(x.to==null||(z?x.to>=n.ch:x.to>n.ch))){if(a&&(It(w,"beforeCursorEnter"),w.explicitlyCleared))if(h.markedSpans){--m;continue}else break;if(!w.atomic)continue;if(s){var q=w.find(i<0?1:-1),ie=void 0;if((i<0?z:_)&&(q=Ni(e,q,-i,q&&q.line==n.line?h:null)),q&&q.line==n.line&&(ie=He(q,s))&&(i<0?ie<0:ie>0))return js(e,q,n,i,a)}var te=w.find(i<0?-1:1);return(i<0?_:z)&&(te=Ni(e,te,i,te.line==n.line?h:null)),te?js(e,te,n,i,a):null}}return n}function Io(e,n,s,i,a){var h=i||1,m=js(e,n,s,h,a)||!a&&js(e,n,s,h,!0)||js(e,n,s,-h,a)||!a&&js(e,n,s,-h,!0);return m||(e.cantEdit=!0,pe(e.first,0))}function Ni(e,n,s,i){return s<0&&n.ch==0?n.line>e.first?gt(e,pe(n.line-1)):null:s>0&&n.ch==(i||Je(e,n.line)).text.length?n.line<e.first+e.size-1?pe(n.line+1,0):null:new pe(n.line,n.ch+s)}function Qi(e){e.setSelection(pe(e.firstLine(),0),pe(e.lastLine()),Ct)}function _l(e,n,s){var i={canceled:!1,from:n.from,to:n.to,text:n.text,origin:n.origin,cancel:function(){return i.canceled=!0}};return s&&(i.update=function(a,h,m,x){a&&(i.from=gt(e,a)),h&&(i.to=gt(e,h)),m&&(i.text=m),x!==void 0&&(i.origin=x)}),It(e,"beforeChange",e,i),e.cm&&It(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function Xs(e,n,s){if(e.cm){if(!e.cm.curOp)return hn(e.cm,Xs)(e,n,s);if(e.cm.state.suppressEdits)return}if(!((gn(e,"beforeChange")||e.cm&&gn(e.cm,"beforeChange"))&&(n=_l(e,n,!0),!n))){var i=si&&!s&&lo(e,n.from,n.to);if(i)for(var a=i.length-1;a>=0;--a)Ei(e,{from:i[a].from,to:i[a].to,text:a?[""]:n.text,origin:n.origin});else Ei(e,n)}}function Ei(e,n){if(!(n.text.length==1&&n.text[0]==""&&He(n.from,n.to)==0)){var s=li(e,n);Lo(e,n,s,e.cm?e.cm.curOp.id:NaN),Ma(e,n,s,ps(e,n));var i=[];An(e,function(a,h){!h&&$e(i,a.history)==-1&&(za(a.history,n),i.push(a.history)),Ma(a,n,null,ps(a,n))})}}function ui(e,n,s){var i=e.cm&&e.cm.state.suppressEdits;if(!(i&&!s)){for(var a=e.history,h,m=e.sel,x=n=="undo"?a.done:a.undone,w=n=="undo"?a.undone:a.done,_=0;_<x.length&&(h=x[_],!(s?h.ranges&&!h.equals(e.sel):!h.ranges));_++);if(_!=x.length){for(a.lastOrigin=a.lastSelOrigin=null;;)if(h=x.pop(),h.ranges){if(Ra(h,w),s&&!h.equals(e.sel)){Hn(e,h,{clearRedo:!1});return}m=h}else if(i){x.push(h);return}else break;var z=[];Ra(m,w),w.push({changes:z,generation:a.generation}),a.generation=h.generation||++a.maxGeneration;for(var q=gn(e,"beforeChange")||e.cm&&gn(e.cm,"beforeChange"),ie=function(be){var Ae=h.changes[be];if(Ae.origin=n,q&&!_l(e,Ae,!1))return x.length=0,{};z.push(Eo(e,Ae));var Ee=be?li(e,Ae):Qe(x);Ma(e,Ae,Ee,xu(e,Ae)),!be&&e.cm&&e.cm.scrollIntoView({from:Ae.from,to:Wn(Ae)});var ze=[];An(e,function(De,Ge){!Ge&&$e(ze,De.history)==-1&&(za(De.history,Ae),ze.push(De.history)),Ma(De,Ae,null,xu(De,Ae))})},te=h.changes.length-1;te>=0;--te){var ge=ie(te);if(ge)return ge.v}}}}function Oo(e,n){if(n!=0&&(e.first+=n,e.sel=new Xn(ut(e.sel.ranges,function(a){return new At(pe(a.anchor.line+n,a.anchor.ch),pe(a.head.line+n,a.head.ch))}),e.sel.primIndex),e.cm)){sr(e.cm,e.first,e.first-n,n);for(var s=e.cm.display,i=s.viewFrom;i<s.viewTo;i++)$i(e.cm,i,"gutter")}}function Ma(e,n,s,i){if(e.cm&&!e.cm.curOp)return hn(e.cm,Ma)(e,n,s,i);if(n.to.line<e.first){Oo(e,n.text.length-1-(n.to.line-n.from.line));return}if(!(n.from.line>e.lastLine())){if(n.from.line<e.first){var a=n.text.length-1-(e.first-n.from.line);Oo(e,a),n={from:pe(e.first,0),to:pe(n.to.line+a,n.to.ch),text:[Qe(n.text)],origin:n.origin}}var h=e.lastLine();n.to.line>h&&(n={from:n.from,to:pe(h,Je(e,h).text.length),text:[n.text[0]],origin:n.origin}),n.removed=ii(e,n.from,n.to),s||(s=li(e,n)),e.cm?Cl(e.cm,n,i):gr(e,n,i),Oa(e,s,Ct),e.cantEdit&&Io(e,pe(e.firstLine(),0))&&(e.cantEdit=!1)}}function Cl(e,n,s){var i=e.doc,a=e.display,h=n.from,m=n.to,x=!1,w=h.line;e.options.lineWrapping||(w=T(Kt(Je(i,h.line))),i.iter(w,m.line+1,function(te){if(te==a.maxLine)return x=!0,!0})),i.sel.contains(n.from,n.to)>-1&&bn(e),gr(i,n,s,Fs(e)),e.options.lineWrapping||(i.iter(w,h.line+n.text.length,function(te){var ge=Bi(te);ge>a.maxLineLength&&(a.maxLine=te,a.maxLineLength=ge,a.maxLineChanged=!0,x=!1)}),x&&(e.curOp.updateMaxLine=!0)),Dr(i,h.line),qs(e,400);var _=n.text.length-(m.line-h.line)-1;n.full?sr(e):h.line==m.line&&n.text.length==1&&!bl(e.doc,n)?$i(e,h.line,"text"):sr(e,h.line,m.line+1,_);var z=gn(e,"changes"),q=gn(e,"change");if(q||z){var ie={from:h,to:m,text:n.text,removed:n.removed,origin:n.origin};q&&zn(e,"change",e,ie),z&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(ie)}e.display.selForContextMenu=null}function Qs(e,n,s,i,a){var h;i||(i=s),He(i,s)<0&&(h=[i,s],s=h[0],i=h[1]),typeof n=="string"&&(n=e.splitLines(n)),Xs(e,{from:s,to:i,text:n,origin:a})}function Da(e,n,s,i){s<e.line?e.line+=i:n<e.line&&(e.line=n,e.ch=0)}function ci(e,n,s,i){for(var a=0;a<e.length;++a){var h=e[a],m=!0;if(h.ranges){h.copied||(h=e[a]=h.deepCopy(),h.copied=!0);for(var x=0;x<h.ranges.length;x++)Da(h.ranges[x].anchor,n,s,i),Da(h.ranges[x].head,n,s,i);continue}for(var w=0;w<h.changes.length;++w){var _=h.changes[w];if(s<_.from.line)_.from=pe(_.from.line+i,_.from.ch),_.to=pe(_.to.line+i,_.to.ch);else if(n<=_.to.line){m=!1;break}}m||(e.splice(0,a+1),a=0)}}function za(e,n){var s=n.from.line,i=n.to.line,a=n.text.length-(i-s)-1;ci(e.done,s,i,a),ci(e.undone,s,i,a)}function Zi(e,n,s,i){var a=n,h=n;return typeof n=="number"?h=Je(e,tl(e,n)):a=T(n),a==null?null:(i(h,a)&&e.cm&&$i(e.cm,a,s),h)}function di(e){this.lines=e,this.parent=null;for(var n=0,s=0;s<e.length;++s)e[s].parent=this,n+=e[s].height;this.height=n}di.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,n){for(var s=e,i=e+n;s<i;++s){var a=this.lines[s];this.height-=a.height,Xl(a),zn(a,"delete")}this.lines.splice(e,n)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,n,s){this.height+=s,this.lines=this.lines.slice(0,e).concat(n).concat(this.lines.slice(e));for(var i=0;i<n.length;++i)n[i].parent=this},iterN:function(e,n,s){for(var i=e+n;e<i;++e)if(s(this.lines[e]))return!0}};function Zs(e){this.children=e;for(var n=0,s=0,i=0;i<e.length;++i){var a=e[i];n+=a.chunkSize(),s+=a.height,a.parent=this}this.size=n,this.height=s,this.parent=null}Zs.prototype={chunkSize:function(){return this.size},removeInner:function(e,n){this.size-=n;for(var s=0;s<this.children.length;++s){var i=this.children[s],a=i.chunkSize();if(e<a){var h=Math.min(n,a-e),m=i.height;if(i.removeInner(e,h),this.height-=m-i.height,a==h&&(this.children.splice(s--,1),i.parent=null),(n-=h)==0)break;e=0}else e-=a}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof di))){var x=[];this.collapse(x),this.children=[new di(x)],this.children[0].parent=this}},collapse:function(e){for(var n=0;n<this.children.length;++n)this.children[n].collapse(e)},insertInner:function(e,n,s){this.size+=n.length,this.height+=s;for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<=h){if(a.insertInner(e,n,s),a.lines&&a.lines.length>50){for(var m=a.lines.length%25+25,x=m;x<a.lines.length;){var w=new di(a.lines.slice(x,x+=25));a.height-=w.height,this.children.splice(++i,0,w),w.parent=this}a.lines=a.lines.slice(0,m),this.maybeSpill()}break}e-=h}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var n=e.children.splice(e.children.length-5,5),s=new Zs(n);if(e.parent){e.size-=s.size,e.height-=s.height;var a=$e(e.parent.children,e);e.parent.children.splice(a+1,0,s)}else{var i=new Zs(e.children);i.parent=e,e.children=[i,s],e=i}s.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,n,s){for(var i=0;i<this.children.length;++i){var a=this.children[i],h=a.chunkSize();if(e<h){var m=Math.min(n,h-e);if(a.iterN(e,m,s))return!0;if((n-=m)==0)break;e=0}else e-=h}}};var Li=function(e,n,s){if(s)for(var i in s)s.hasOwnProperty(i)&&(this[i]=s[i]);this.doc=e,this.node=n};Li.prototype.clear=function(){var e=this.doc.cm,n=this.line.widgets,s=this.line,i=T(s);if(!(i==null||!n)){for(var a=0;a<n.length;++a)n[a]==this&&n.splice(a--,1);n.length||(s.widgets=null);var h=Ui(this);Yn(s,Math.max(0,s.height-h)),e&&(Pn(e,function(){wu(e,s,-h),$i(e,i,"widget")}),zn(e,"lineWidgetCleared",e,this,i))}},Li.prototype.changed=function(){var e=this,n=this.height,s=this.doc.cm,i=this.line;this.height=null;var a=Ui(this)-n;a&&(Nr(this.doc,i)||Yn(i,i.height+a),s&&Pn(s,function(){s.curOp.forceUpdate=!0,wu(s,i,a),zn(s,"lineWidgetChanged",s,e,T(i))}))},En(Li);function wu(e,n,s){_n(n)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&vs(e,s)}function ku(e,n,s,i){var a=new Li(e,s,i),h=e.cm;return h&&a.noHScroll&&(h.display.alignWidgets=!0),Zi(e,n,"widget",function(m){var x=m.widgets||(m.widgets=[]);if(a.insertAt==null?x.push(a):x.splice(Math.min(x.length,Math.max(0,a.insertAt)),0,a),a.line=m,h&&!Nr(e,m)){var w=_n(m)<e.scrollTop;Yn(m,m.height+Ui(a)),w&&vs(h,a.height),h.curOp.forceUpdate=!0}return!0}),h&&zn(h,"lineWidgetAdded",h,a,typeof n=="number"?n:T(n)),a}var ln=0,pi=function(e,n){this.lines=[],this.type=n,this.doc=e,this.id=++ln};pi.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,n=e&&!e.curOp;if(n&&ws(e),gn(this,"clear")){var s=this.find();s&&zn(this,"clear",s.from,s.to)}for(var i=null,a=null,h=0;h<this.lines.length;++h){var m=this.lines[h],x=Ms(m.markedSpans,this);e&&!this.collapsed?$i(e,T(m),"text"):e&&(x.to!=null&&(a=T(m)),x.from!=null&&(i=T(m))),m.markedSpans=ao(m.markedSpans,x),x.from==null&&this.collapsed&&!Nr(this.doc,m)&&e&&Yn(m,Si(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var w=0;w<this.lines.length;++w){var _=Kt(this.lines[w]),z=Bi(_);z>e.display.maxLineLength&&(e.display.maxLine=_,e.display.maxLineLength=z,e.display.maxLineChanged=!0)}i!=null&&e&&this.collapsed&&sr(e,i,a+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Fr(e.doc)),e&&zn(e,"markerCleared",e,this,i,a),n&&Yr(e),this.parent&&this.parent.clear()}},pi.prototype.find=function(e,n){e==null&&this.type=="bookmark"&&(e=1);for(var s,i,a=0;a<this.lines.length;++a){var h=this.lines[a],m=Ms(h.markedSpans,this);if(m.from!=null&&(s=pe(n?h:T(h),m.from),e==-1))return s;if(m.to!=null&&(i=pe(n?h:T(h),m.to),e==1))return i}return s&&{from:s,to:i}},pi.prototype.changed=function(){var e=this,n=this.find(-1,!0),s=this,i=this.doc.cm;!n||!i||Pn(i,function(){var a=n.line,h=T(n.line),m=sl(i,h);if(m&&(al(m),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Nr(s.doc,a)&&s.height!=null){var x=s.height;s.height=null;var w=Ui(s)-x;w&&Yn(a,a.height+w)}zn(i,"markerChanged",i,e)})},pi.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(!n.maybeHiddenMarkers||$e(n.maybeHiddenMarkers,this)==-1)&&(n.maybeUnhiddenMarkers||(n.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},pi.prototype.detachLine=function(e){if(this.lines.splice($e(this.lines,e),1),!this.lines.length&&this.doc.cm){var n=this.doc.cm.curOp;(n.maybeHiddenMarkers||(n.maybeHiddenMarkers=[])).push(this)}},En(pi);function Ns(e,n,s,i,a){if(i&&i.shared)return Tl(e,n,s,i,a);if(e.cm&&!e.cm.curOp)return hn(e.cm,Ns)(e,n,s,i,a);var h=new pi(e,a),m=He(n,s);if(i&&Be(i,h,!1),m>0||m==0&&h.clearWhenEmpty!==!1)return h;if(h.replacedWith&&(h.collapsed=!0,h.widgetNode=Q("span",[h.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||h.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(h.widgetNode.insertLeft=!0)),h.collapsed){if(dn(e,n.line,n,s,h)||n.line!=s.line&&dn(e,s.line,n,s,h))throw new Error("Inserting collapsed marker partially overlapping an existing one");Os()}h.addToHistory&&Lo(e,{from:n,to:s,origin:"markText"},e.sel,NaN);var x=n.line,w=e.cm,_;if(e.iter(x,s.line+1,function(q){w&&h.collapsed&&!w.options.lineWrapping&&Kt(q)==w.display.maxLine&&(_=!0),h.collapsed&&x!=n.line&&Yn(q,0),Ds(q,new jr(h,x==n.line?n.ch:null,x==s.line?s.ch:null),e.cm&&e.cm.curOp),++x}),h.collapsed&&e.iter(n.line,s.line+1,function(q){Nr(e,q)&&Yn(q,0)}),h.clearOnEnter&&rt(h,"beforeCursorEnter",function(){return h.clear()}),h.readOnly&&($r(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),h.collapsed&&(h.id=++ln,h.atomic=!0),w){if(_&&(w.curOp.updateMaxLine=!0),h.collapsed)sr(w,n.line,s.line+1);else if(h.className||h.startStyle||h.endStyle||h.css||h.attributes||h.title)for(var z=n.line;z<=s.line;z++)$i(w,z,"text");h.atomic&&Fr(w.doc),zn(w,"markerAdded",w,h)}return h}var ea=function(e,n){this.markers=e,this.primary=n;for(var s=0;s<e.length;++s)e[s].parent=this};ea.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();zn(this,"clear")}},ea.prototype.find=function(e,n){return this.primary.find(e,n)},En(ea);function Tl(e,n,s,i,a){i=Be(i),i.shared=!1;var h=[Ns(e,n,s,i,a)],m=h[0],x=i.widgetNode;return An(e,function(w){x&&(i.widgetNode=x.cloneNode(!0)),h.push(Ns(w,gt(w,n),gt(w,s),i,a));for(var _=0;_<w.linked.length;++_)if(w.linked[_].isParent)return;m=Qe(h)}),new ea(h,m)}function jl(e){return e.findMarks(pe(e.first,0),e.clipPos(pe(e.lastLine())),function(n){return n.parent})}function ta(e,n){for(var s=0;s<n.length;s++){var i=n[s],a=i.find(),h=e.clipPos(a.from),m=e.clipPos(a.to);if(He(h,m)){var x=Ns(e,h,m,i.primary,i.primary.type);i.markers.push(x),x.parent=i}}}function fn(e){for(var n=function(i){var a=e[i],h=[a.primary.doc];An(a.primary.doc,function(w){return h.push(w)});for(var m=0;m<a.markers.length;m++){var x=a.markers[m];$e(h,x.doc)==-1&&(x.parent=null,a.markers.splice(m--,1))}},s=0;s<e.length;s++)n(s)}var Bn=0,Ot=function(e,n,s,i,a){if(!(this instanceof Ot))return new Ot(e,n,s,i,a);s==null&&(s=0),Zs.call(this,[new di([new wi("",null)])]),this.first=s,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=s;var h=pe(s,0);this.sel=Fn(h),this.history=new No(null),this.id=++Bn,this.modeOption=n,this.lineSep=i,this.direction=a=="rtl"?"rtl":"ltr",this.extend=!1,typeof e=="string"&&(e=this.splitLines(e)),gr(this,{from:h,to:h,text:e}),Hn(this,Fn(h),Ct)};Ot.prototype=he(Zs.prototype,{constructor:Ot,iter:function(e,n,s){s?this.iterN(e-this.first,n-e,s):this.iterN(this.first,this.first+this.size,e)},insert:function(e,n){for(var s=0,i=0;i<n.length;++i)s+=n[i].height;this.insertInner(e-this.first,n,s)},remove:function(e,n){this.removeInner(e-this.first,n)},getValue:function(e){var n=cs(this,this.first,this.first+this.size);return e===!1?n:n.join(e||this.lineSeparator())},setValue:yn(function(e){var n=pe(this.first,0),s=this.first+this.size-1;Xs(this,{from:n,to:pe(s,Je(this,s).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&So(this.cm,0,0),Hn(this,Fn(n),Ct)}),replaceRange:function(e,n,s,i){n=gt(this,n),s=s?gt(this,s):n,Qs(this,e,n,s,i)},getRange:function(e,n,s){var i=ii(this,gt(this,e),gt(this,n));return s===!1?i:s===""?i.join(""):i.join(s||this.lineSeparator())},getLine:function(e){var n=this.getLineHandle(e);return n&&n.text},getLineHandle:function(e){if(me(this,e))return Je(this,e)},getLineNumber:function(e){return T(e)},getLineHandleVisualStart:function(e){return typeof e=="number"&&(e=Je(this,e)),Kt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return gt(this,e)},getCursor:function(e){var n=this.sel.primary(),s;return e==null||e=="head"?s=n.head:e=="anchor"?s=n.anchor:e=="end"||e=="to"||e===!1?s=n.to():s=n.from(),s},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:yn(function(e,n,s){Vs(this,gt(this,typeof e=="number"?pe(e,n||0):e),null,s)}),setSelection:yn(function(e,n,s){Vs(this,gt(this,e),gt(this,n||e),s)}),extendSelection:yn(function(e,n,s){Ao(this,gt(this,e),n&&gt(this,n),s)}),extendSelections:yn(function(e,n){Ro(this,io(this,e),n)}),extendSelectionsBy:yn(function(e,n){var s=ut(this.sel.ranges,e);Ro(this,io(this,s),n)}),setSelections:yn(function(e,n,s){if(e.length){for(var i=[],a=0;a<e.length;a++)i[a]=new At(gt(this,e[a].anchor),gt(this,e[a].head||e[a].anchor));n==null&&(n=Math.min(e.length-1,this.sel.primIndex)),Hn(this,Lr(this.cm,i,n),s)}}),addSelection:yn(function(e,n,s){var i=this.sel.ranges.slice(0);i.push(new At(gt(this,e),gt(this,n||e))),Hn(this,Lr(this.cm,i,i.length-1),s)}),getSelection:function(e){for(var n=this.sel.ranges,s,i=0;i<n.length;i++){var a=ii(this,n[i].from(),n[i].to());s=s?s.concat(a):a}return e===!1?s:s.join(e||this.lineSeparator())},getSelections:function(e){for(var n=[],s=this.sel.ranges,i=0;i<s.length;i++){var a=ii(this,s[i].from(),s[i].to());e!==!1&&(a=a.join(e||this.lineSeparator())),n[i]=a}return n},replaceSelection:function(e,n,s){for(var i=[],a=0;a<this.sel.ranges.length;a++)i[a]=e;this.replaceSelections(i,n,s||"+input")},replaceSelections:yn(function(e,n,s){for(var i=[],a=this.sel,h=0;h<a.ranges.length;h++){var m=a.ranges[h];i[h]={from:m.from(),to:m.to(),text:this.splitLines(e[h]),origin:s}}for(var x=n&&n!="end"&&$s(this,i,n),w=i.length-1;w>=0;w--)Xs(this,i[w]);x?Sl(this,x):this.cm&&Hs(this.cm)}),undo:yn(function(){ui(this,"undo")}),redo:yn(function(){ui(this,"redo")}),undoSelection:yn(function(){ui(this,"undo",!0)}),redoSelection:yn(function(){ui(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,n=0,s=0,i=0;i<e.done.length;i++)e.done[i].ranges||++n;for(var a=0;a<e.undone.length;a++)e.undone[a].ranges||++s;return{undo:n,redo:s}},clearHistory:function(){var e=this;this.history=new No(this.history),An(this,function(n){return n.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ys(this.history.done),undone:Ys(this.history.undone)}},setHistory:function(e){var n=this.history=new No(this.history);n.done=Ys(e.done.slice(0),null,!0),n.undone=Ys(e.undone.slice(0),null,!0)},setGutterMarker:yn(function(e,n,s){return Zi(this,e,"gutter",function(i){var a=i.gutterMarkers||(i.gutterMarkers={});return a[n]=s,!s&&Ze(a)&&(i.gutterMarkers=null),!0})}),clearGutter:yn(function(e){var n=this;this.iter(function(s){s.gutterMarkers&&s.gutterMarkers[e]&&Zi(n,s,"gutter",function(){return s.gutterMarkers[e]=null,Ze(s.gutterMarkers)&&(s.gutterMarkers=null),!0})})}),lineInfo:function(e){var n;if(typeof e=="number"){if(!me(this,e)||(n=e,e=Je(this,e),!e))return null}else if(n=T(e),n==null)return null;return{line:n,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:yn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass";if(!i[a])i[a]=s;else{if(ae(s).test(i[a]))return!1;i[a]+=" "+s}return!0})}),removeLineClass:yn(function(e,n,s){return Zi(this,e,n=="gutter"?"gutter":"class",function(i){var a=n=="text"?"textClass":n=="background"?"bgClass":n=="gutter"?"gutterClass":"wrapClass",h=i[a];if(h)if(s==null)i[a]=null;else{var m=h.match(ae(s));if(!m)return!1;var x=m.index+m[0].length;i[a]=h.slice(0,m.index)+(!m.index||x==h.length?"":" ")+h.slice(x)||null}else return!1;return!0})}),addLineWidget:yn(function(e,n,s){return ku(this,e,n,s)}),removeLineWidget:function(e){e.clear()},markText:function(e,n,s){return Ns(this,gt(this,e),gt(this,n),s,s&&s.type||"range")},setBookmark:function(e,n){var s={replacedWith:n&&(n.nodeType==null?n.widget:n),insertLeft:n&&n.insertLeft,clearWhenEmpty:!1,shared:n&&n.shared,handleMouseEvents:n&&n.handleMouseEvents};return e=gt(this,e),Ns(this,e,e,s,"bookmark")},findMarksAt:function(e){e=gt(this,e);var n=[],s=Je(this,e.line).markedSpans;if(s)for(var i=0;i<s.length;++i){var a=s[i];(a.from==null||a.from<=e.ch)&&(a.to==null||a.to>=e.ch)&&n.push(a.marker.parent||a.marker)}return n},findMarks:function(e,n,s){e=gt(this,e),n=gt(this,n);var i=[],a=e.line;return this.iter(e.line,n.line+1,function(h){var m=h.markedSpans;if(m)for(var x=0;x<m.length;x++){var w=m[x];!(w.to!=null&&a==e.line&&e.ch>=w.to||w.from==null&&a!=e.line||w.from!=null&&a==n.line&&w.from>=n.ch)&&(!s||s(w.marker))&&i.push(w.marker.parent||w.marker)}++a}),i},getAllMarks:function(){var e=[];return this.iter(function(n){var s=n.markedSpans;if(s)for(var i=0;i<s.length;++i)s[i].from!=null&&e.push(s[i].marker)}),e},posFromIndex:function(e){var n,s=this.first,i=this.lineSeparator().length;return this.iter(function(a){var h=a.text.length+i;if(h>e)return n=e,!0;e-=h,++s}),gt(this,pe(s,n))},indexFromPos:function(e){e=gt(this,e);var n=e.ch;if(e.line<this.first||e.ch<0)return 0;var s=this.lineSeparator().length;return this.iter(this.first,e.line,function(i){n+=i.text.length+s}),n},copy:function(e){var n=new Ot(cs(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return n.scrollTop=this.scrollTop,n.scrollLeft=this.scrollLeft,n.sel=this.sel,n.extend=!1,e&&(n.history.undoDepth=this.history.undoDepth,n.setHistory(this.getHistory())),n},linkedDoc:function(e){e||(e={});var n=this.first,s=this.first+this.size;e.from!=null&&e.from>n&&(n=e.from),e.to!=null&&e.to<s&&(s=e.to);var i=new Ot(cs(this,n,s),e.mode||this.modeOption,n,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],ta(i,jl(this)),i},unlinkDoc:function(e){if(e instanceof en&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var s=this.linked[n];if(s.doc==e){this.linked.splice(n,1),e.unlinkDoc(this),fn(jl(this));break}}if(e.history==this.history){var i=[e.id];An(e,function(a){return i.push(a.id)},!0),e.history=new No(null),e.history.done=Ys(this.history.done,i),e.history.undone=Ys(this.history.undone,i)}},iterLinkedDocs:function(e){An(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Tr(e)},lineSeparator:function(){return this.lineSep||`
`},setDirection:yn(function(e){e!="rtl"&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(n){return n.order=null}),this.cm&&Ac(this.cm))})}),Ot.prototype.eachLine=Ot.prototype.iter;var Mo=0;function Do(e){var n=this;if(Zn(n),!(qt(n,e)||qi(n.display,e))){wn(e),S&&(Mo=+new Date);var s=gs(n,e,!0),i=e.dataTransfer.files;if(!(!s||n.isReadOnly()))if(i&&i.length&&window.FileReader&&window.File)for(var a=i.length,h=Array(a),m=0,x=function(){++m==a&&hn(n,function(){s=gt(n.doc,s);var te={from:s,to:s,text:n.doc.splitLines(h.filter(function(ge){return ge!=null}).join(n.doc.lineSeparator())),origin:"paste"};Xs(n.doc,te),Sl(n.doc,Fn(gt(n.doc,s),gt(n.doc,Wn(te))))})()},w=function(te,ge){if(n.options.allowDropFileTypes&&$e(n.options.allowDropFileTypes,te.type)==-1){x();return}var be=new FileReader;be.onerror=function(){return x()},be.onload=function(){var Ae=be.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(Ae)){x();return}h[ge]=Ae,x()},be.readAsText(te)},_=0;_<i.length;_++)w(i[_],_);else{if(n.state.draggingText&&n.doc.sel.contains(s)>-1){n.state.draggingText(e),setTimeout(function(){return n.display.input.focus()},20);return}try{var z=e.dataTransfer.getData("Text");if(z){var q;if(n.state.draggingText&&!n.state.draggingText.copy&&(q=n.listSelections()),Oa(n.doc,Fn(s,s)),q)for(var ie=0;ie<q.length;++ie)Qs(n.doc,"",q[ie].anchor,q[ie].head,"drag");n.replaceSelection(z,"around","paste"),n.display.input.focus()}}catch{}}}}function zo(e,n){if(S&&(!e.state.draggingText||+new Date-Mo<100)){pr(n);return}if(!(qt(e,n)||qi(e.display,n))&&(n.dataTransfer.setData("Text",e.getSelection()),n.dataTransfer.effectAllowed="copyMove",n.dataTransfer.setDragImage&&!Y)){var s=L("img",null,null,"position: fixed; left: 0; top: 0;");s.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",D&&(s.width=s.height=1,e.display.wrapper.appendChild(s),s._top=s.offsetTop),n.dataTransfer.setDragImage(s,0,0),D&&s.parentNode.removeChild(s)}}function dp(e,n){var s=gs(e,n);if(s){var i=document.createDocumentFragment();bo(e,s,i),e.display.dragCursor||(e.display.dragCursor=L("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),ye(e.display.dragCursor,i)}}function Zn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Nl(e){if(document.getElementsByClassName){for(var n=document.getElementsByClassName("CodeMirror"),s=[],i=0;i<n.length;i++){var a=n[i].CodeMirror;a&&s.push(a)}s.length&&s[0].operation(function(){for(var h=0;h<s.length;h++)e(s[h])})}}var El=!1;function Su(){El||(Pi(),El=!0)}function Pi(){var e;rt(window,"resize",function(){e==null&&(e=setTimeout(function(){e=null,Nl(Jr)},100))}),rt(window,"blur",function(){return Nl(Wt)})}function Jr(e){var n=e.display;n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.scrollbarsClipped=!1,e.setSize()}for(var Xr={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},na=0;na<10;na++)Xr[na+48]=Xr[na+96]=String(na);for(var Fa=65;Fa<=90;Fa++)Xr[Fa]=String.fromCharCode(Fa);for(var Wa=1;Wa<=12;Wa++)Xr[Wa+111]=Xr[Wa+63235]="F"+Wa;var Ai={};Ai.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ai.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ai.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ai.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ai.default=V?Ai.macDefault:Ai.pcDefault;function Mc(e){var n=e.split(/-(?!$)/);e=n[n.length-1];for(var s,i,a,h,m=0;m<n.length-1;m++){var x=n[m];if(/^(cmd|meta|m)$/i.test(x))h=!0;else if(/^a(lt)?$/i.test(x))s=!0;else if(/^(c|ctrl|control)$/i.test(x))i=!0;else if(/^s(hift)?$/i.test(x))a=!0;else throw new Error("Unrecognized modifier name: "+x)}return s&&(e="Alt-"+e),i&&(e="Ctrl-"+e),h&&(e="Cmd-"+e),a&&(e="Shift-"+e),e}function Dc(e){var n={};for(var s in e)if(e.hasOwnProperty(s)){var i=e[s];if(/^(name|fallthrough|(de|at)tach)$/.test(s))continue;if(i=="..."){delete e[s];continue}for(var a=ut(s.split(" "),Mc),h=0;h<a.length;h++){var m=void 0,x=void 0;h==a.length-1?(x=a.join(" "),m=i):(x=a.slice(0,h+1).join(" "),m="...");var w=n[x];if(!w)n[x]=m;else if(w!=m)throw new Error("Inconsistent bindings for "+x)}delete e[s]}for(var _ in n)e[_]=n[_];return e}function ra(e,n,s,i){n=Es(n);var a=n.call?n.call(e,i):n[e];if(a===!1)return"nothing";if(a==="...")return"multi";if(a!=null&&s(a))return"handled";if(n.fallthrough){if(Object.prototype.toString.call(n.fallthrough)!="[object Array]")return ra(e,n.fallthrough,s,i);for(var h=0;h<n.fallthrough.length;h++){var m=ra(e,n.fallthrough[h],s,i);if(m)return m}}}function _u(e){var n=typeof e=="string"?e:Xr[e.keyCode];return n=="Ctrl"||n=="Alt"||n=="Shift"||n=="Mod"}function Cu(e,n,s){var i=e;return n.altKey&&i!="Alt"&&(e="Alt-"+e),(Fe?n.metaKey:n.ctrlKey)&&i!="Ctrl"&&(e="Ctrl-"+e),(Fe?n.ctrlKey:n.metaKey)&&i!="Mod"&&(e="Cmd-"+e),!s&&n.shiftKey&&i!="Shift"&&(e="Shift-"+e),e}function Tu(e,n){if(D&&e.keyCode==34&&e.char)return!1;var s=Xr[e.keyCode];return s==null||e.altGraphKey?!1:(e.keyCode==3&&e.code&&(s=e.code),Cu(s,e,n))}function Es(e){return typeof e=="string"?Ai[e]:e}function ia(e,n){for(var s=e.doc.sel.ranges,i=[],a=0;a<s.length;a++){for(var h=n(s[a]);i.length&&He(h.from,Qe(i).to)<=0;){var m=i.pop();if(He(m.from,h.from)<0){h.from=m.from;break}}i.push(h)}Pn(e,function(){for(var x=i.length-1;x>=0;x--)Qs(e.doc,"",i[x].from,i[x].to,"+delete");Hs(e)})}function Ha(e,n,s){var i=Xt(e.text,n+s,s);return i<0||i>e.text.length?null:i}function Ba(e,n,s){var i=Ha(e,n.ch,s);return i==null?null:new pe(n.line,i,s<0?"after":"before")}function Ll(e,n,s,i,a){if(e){n.doc.direction=="rtl"&&(a=-a);var h=bt(s,n.doc.direction);if(h){var m=a<0?Qe(h):h[0],x=a<0==(m.level==1),w=x?"after":"before",_;if(m.level>0||n.doc.direction=="rtl"){var z=ki(n,s);_=a<0?s.text.length-1:0;var q=Er(n,z,_).top;_=nr(function(ie){return Er(n,z,ie).top==q},a<0==(m.level==1)?m.from:m.to-1,_),w=="before"&&(_=Ha(s,_,1))}else _=a<0?m.to:m.from;return new pe(i,_,w)}}return new pe(i,a<0?s.text.length:0,a<0?"before":"after")}function ju(e,n,s,i){var a=bt(n,e.doc.direction);if(!a)return Ba(n,s,i);s.ch>=n.text.length?(s.ch=n.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var h=Br(a,s.ch,s.sticky),m=a[h];if(e.doc.direction=="ltr"&&m.level%2==0&&(i>0?m.to>s.ch:m.from<s.ch))return Ba(n,s,i);var x=function(Ee,ze){return Ha(n,Ee instanceof pe?Ee.ch:Ee,ze)},w,_=function(Ee){return e.options.lineWrapping?(w=w||ki(e,n),pu(e,n,w,Ee)):{begin:0,end:n.text.length}},z=_(s.sticky=="before"?x(s,-1):s.ch);if(e.doc.direction=="rtl"||m.level==1){var q=m.level==1==i<0,ie=x(s,q?1:-1);if(ie!=null&&(q?ie<=m.to&&ie<=z.end:ie>=m.from&&ie>=z.begin)){var te=q?"before":"after";return new pe(s.line,ie,te)}}var ge=function(Ee,ze,De){for(var Ge=function(Et,Un){return Un?new pe(s.line,x(Et,1),"before"):new pe(s.line,Et,"after")};Ee>=0&&Ee<a.length;Ee+=ze){var ot=a[Ee],Ve=ze>0==(ot.level!=1),St=Ve?De.begin:x(De.end,-1);if(ot.from<=St&&St<ot.to||(St=Ve?ot.from:x(ot.to,-1),De.begin<=St&&St<De.end))return Ge(St,Ve)}},be=ge(h+i,i,z);if(be)return be;var Ae=i>0?z.end:x(z.begin,-1);return Ae!=null&&!(i>0&&Ae==n.text.length)&&(be=ge(i>0?0:a.length-1,i,_(Ae)),be)?be:null}var Ua={selectAll:Qi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ct)},killLine:function(e){return ia(e,function(n){if(n.empty()){var s=Je(e.doc,n.head.line).text.length;return n.head.ch==s&&n.head.line<e.lastLine()?{from:n.head,to:pe(n.head.line+1,0)}:{from:n.head,to:pe(n.head.line,s)}}else return{from:n.from(),to:n.to()}})},deleteLine:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:gt(e.doc,pe(n.to().line+1,0))}})},delLineLeft:function(e){return ia(e,function(n){return{from:pe(n.from().line,0),to:n.from()}})},delWrappedLineLeft:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return{from:i,to:n.from()}})},delWrappedLineRight:function(e){return ia(e,function(n){var s=e.charCoords(n.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div");return{from:n.from(),to:i}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(pe(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(pe(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(n){return Nu(e,n.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(n){return Eu(e,n.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(n){return zc(e,n.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:s},"div")},tt)},goLineLeft:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5;return e.coordsChar({left:0,top:s},"div")},tt)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(n){var s=e.cursorCoords(n.head,"div").top+5,i=e.coordsChar({left:0,top:s},"div");return i.ch<e.getLine(i.line).search(/\S/)?Eu(e,n.head):i},tt)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("	")},insertSoftTab:function(e){for(var n=[],s=e.listSelections(),i=e.options.tabSize,a=0;a<s.length;a++){var h=s[a].from(),m=Ke(e.getLine(h.line),h.ch,i);n.push(yt(i-m%i))}e.replaceSelections(n)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Pn(e,function(){for(var n=e.listSelections(),s=[],i=0;i<n.length;i++)if(n[i].empty()){var a=n[i].head,h=Je(e.doc,a.line).text;if(h){if(a.ch==h.length&&(a=new pe(a.line,a.ch-1)),a.ch>0)a=new pe(a.line,a.ch+1),e.replaceRange(h.charAt(a.ch-1)+h.charAt(a.ch-2),pe(a.line,a.ch-2),a,"+transpose");else if(a.line>e.doc.first){var m=Je(e.doc,a.line-1).text;m&&(a=new pe(a.line,1),e.replaceRange(h.charAt(0)+e.doc.lineSeparator()+m.charAt(m.length-1),pe(a.line-1,m.length-1),a,"+transpose"))}}s.push(new At(a,a))}e.setSelections(s)})},newlineAndIndent:function(e){return Pn(e,function(){for(var n=e.listSelections(),s=n.length-1;s>=0;s--)e.replaceRange(e.doc.lineSeparator(),n[s].anchor,n[s].head,"+input");n=e.listSelections();for(var i=0;i<n.length;i++)e.indentLine(n[i].from().line,null,!0);Hs(e)})},openLine:function(e){return e.replaceSelection(`
`,"start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function Nu(e,n){var s=Je(e.doc,n),i=Kt(s);return i!=s&&(n=T(i)),Ll(!0,e,i,n,1)}function zc(e,n){var s=Je(e.doc,n),i=hr(s);return i!=s&&(n=T(i)),Ll(!0,e,s,n,-1)}function Eu(e,n){var s=Nu(e,n.line),i=Je(e.doc,s.line),a=bt(i,e.doc.direction);if(!a||a[0].level==0){var h=Math.max(s.ch,i.text.search(/\S/)),m=n.line==s.line&&n.ch<=h&&n.ch;return pe(s.line,m?0:h,s.sticky)}return s}function qa(e,n,s){if(typeof n=="string"&&(n=Ua[n],!n))return!1;e.display.input.ensurePolled();var i=e.display.shift,a=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),s&&(e.display.shift=!1),a=n(e)!=Yt}finally{e.display.shift=i,e.state.suppressEdits=!1}return a}function Fc(e,n,s){for(var i=0;i<e.state.keyMaps.length;i++){var a=ra(n,e.state.keyMaps[i],s,e);if(a)return a}return e.options.extraKeys&&ra(n,e.options.extraKeys,s,e)||ra(n,e.options.keyMap,s,e)}var Wc=new et;function Ka(e,n,s,i){var a=e.state.keySeq;if(a){if(_u(n))return"handled";if(/\'$/.test(n)?e.state.keySeq=null:Wc.set(50,function(){e.state.keySeq==a&&(e.state.keySeq=null,e.display.input.reset())}),Hc(e,a+" "+n,s,i))return!0}return Hc(e,n,s,i)}function Hc(e,n,s,i){var a=Fc(e,n,i);return a=="multi"&&(e.state.keySeq=n),a=="handled"&&zn(e,"keyHandled",e,n,s),(a=="handled"||a=="multi")&&(wn(s),Ws(e)),!!a}function Lu(e,n){var s=Tu(n,!0);return s?n.shiftKey&&!e.state.keySeq?Ka(e,"Shift-"+s,n,function(i){return qa(e,i,!0)})||Ka(e,s,n,function(i){if(typeof i=="string"?/^go[A-Z]/.test(i):i.motion)return qa(e,i)}):Ka(e,s,n,function(i){return qa(e,i)}):!1}function pp(e,n,s){return Ka(e,"'"+s+"'",n,function(i){return qa(e,i,!0)})}var Pu=null;function Au(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&(n.curOp.focus=E(Ie(n)),!qt(n,e))){S&&j<11&&e.keyCode==27&&(e.returnValue=!1);var s=e.keyCode;n.display.shift=s==16||e.shiftKey;var i=Lu(n,e);D&&(Pu=i?s:null,!i&&s==88&&!os&&(V?e.metaKey:e.ctrlKey)&&n.replaceSelection("",null,"cut")),y&&!V&&!i&&s==46&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),s==18&&!/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className)&&Bc(n)}}function Bc(e){var n=e.display.lineDiv;$(n,"CodeMirror-crosshair");function s(i){(i.keyCode==18||!i.altKey)&&(Ce(n,"CodeMirror-crosshair"),tn(document,"keyup",s),tn(document,"mouseover",s))}rt(document,"keyup",s),rt(document,"mouseover",s)}function Ru(e){e.keyCode==16&&(this.doc.sel.shift=!1),qt(this,e)}function Fo(e){var n=this;if(!(e.target&&e.target!=n.display.input.getField())&&!(qi(n.display,e)||qt(n,e)||e.ctrlKey&&!e.altKey||V&&e.metaKey)){var s=e.keyCode,i=e.charCode;if(D&&s==Pu){Pu=null,wn(e);return}if(!(D&&(!e.which||e.which<10)&&Lu(n,e))){var a=String.fromCharCode(i??s);a!="\b"&&(pp(n,e,a)||n.display.input.onKeyPress(e))}}}var hp=400,Iu=function(e,n,s){this.time=e,this.pos=n,this.button=s};Iu.prototype.compare=function(e,n,s){return this.time+hp>e&&He(n,this.pos)==0&&s==this.button};var Wo,yr;function Ou(e,n){var s=+new Date;return yr&&yr.compare(s,e,n)?(Wo=yr=null,"triple"):Wo&&Wo.compare(s,e,n)?(yr=new Iu(s,e,n),Wo=null,"double"):(Wo=new Iu(s,e,n),yr=null,"single")}function Ho(e){var n=this,s=n.display;if(!(qt(n,e)||s.activeTouch&&s.input.supportsTouch())){if(s.input.ensurePolled(),s.shift=e.shiftKey,qi(s,e)){N||(s.scroller.draggable=!1,setTimeout(function(){return s.scroller.draggable=!0},100));return}if(!Pl(n,e)){var i=gs(n,e),a=Ln(e),h=i?Ou(i,a):"single";Oe(n).focus(),a==1&&n.state.selectingText&&n.state.selectingText(e),!(i&&Uc(n,a,i,h,e))&&(a==1?i?Kc(n,i,h,e):mi(e)==s.scroller&&wn(e):a==2?(i&&Ao(n.doc,i),setTimeout(function(){return s.input.focus()},20)):a==3&&(Te?n.display.input.onContextMenu(e):fl(n)))}}}function Uc(e,n,s,i,a){var h="Click";return i=="double"?h="Double"+h:i=="triple"&&(h="Triple"+h),h=(n==1?"Left":n==2?"Middle":"Right")+h,Ka(e,Cu(h,a),a,function(m){if(typeof m=="string"&&(m=Ua[m]),!m)return!1;var x=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),x=m(e,s)!=Yt}finally{e.state.suppressEdits=!1}return x})}function qc(e,n,s){var i=e.getOption("configureMouse"),a=i?i(e,n,s):{};if(a.unit==null){var h=ce?s.shiftKey&&s.metaKey:s.altKey;a.unit=h?"rectangle":n=="single"?"char":n=="double"?"word":"line"}return(a.extend==null||e.doc.extend)&&(a.extend=e.doc.extend||s.shiftKey),a.addNew==null&&(a.addNew=V?s.metaKey:s.ctrlKey),a.moveOnDrag==null&&(a.moveOnDrag=!(V?s.altKey:s.ctrlKey)),a}function Kc(e,n,s,i){S?setTimeout(ke(jc,e),0):e.curOp.focus=E(Ie(e));var a=qc(e,s,i),h=e.doc.sel,m;e.options.dragDrop&&as&&!e.isReadOnly()&&s=="single"&&(m=h.contains(n))>-1&&(He((m=h.ranges[m]).from(),n)<0||n.xRel>0)&&(He(m.to(),n)>0||n.xRel<0)?Mu(e,i,n,a):Du(e,i,n,a)}function Mu(e,n,s,i){var a=e.display,h=!1,m=hn(e,function(_){N&&(a.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:fl(e)),tn(a.wrapper.ownerDocument,"mouseup",m),tn(a.wrapper.ownerDocument,"mousemove",x),tn(a.scroller,"dragstart",w),tn(a.scroller,"drop",m),h||(wn(_),i.addNew||Ao(e.doc,s,null,null,i.extend),N&&!Y||S&&j==9?setTimeout(function(){a.wrapper.ownerDocument.body.focus({preventScroll:!0}),a.input.focus()},20):a.input.focus())}),x=function(_){h=h||Math.abs(n.clientX-_.clientX)+Math.abs(n.clientY-_.clientY)>=10},w=function(){return h=!0};N&&(a.scroller.draggable=!0),e.state.draggingText=m,m.copy=!i.moveOnDrag,rt(a.wrapper.ownerDocument,"mouseup",m),rt(a.wrapper.ownerDocument,"mousemove",x),rt(a.scroller,"dragstart",w),rt(a.scroller,"drop",m),e.state.delayingBlurEvent=!0,setTimeout(function(){return a.input.focus()},20),a.scroller.dragDrop&&a.scroller.dragDrop()}function sa(e,n,s){if(s=="char")return new At(n,n);if(s=="word")return e.findWordAt(n);if(s=="line")return new At(pe(n.line,0),gt(e.doc,pe(n.line+1,0)));var i=s(e,n);return new At(i.from,i.to)}function Du(e,n,s,i){S&&fl(e);var a=e.display,h=e.doc;wn(n);var m,x,w=h.sel,_=w.ranges;if(i.addNew&&!i.extend?(x=h.sel.contains(s),x>-1?m=_[x]:m=new At(s,s)):(m=h.sel.primary(),x=h.sel.primIndex),i.unit=="rectangle")i.addNew||(m=new At(s,s)),s=gs(e,n,!0,!0),x=-1;else{var z=sa(e,s,i.unit);i.extend?m=Cs(m,z.anchor,z.head,i.extend):m=z}i.addNew?x==-1?(x=_.length,Hn(h,Lr(e,_.concat([m]),x),{scroll:!1,origin:"*mouse"})):_.length>1&&_[x].empty()&&i.unit=="char"&&!i.extend?(Hn(h,Lr(e,_.slice(0,x).concat(_.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),w=h.sel):Ia(h,x,m,xt):(x=0,Hn(h,new Xn([m],0),xt),w=h.sel);var q=s;function ie(De){if(He(q,De)!=0)if(q=De,i.unit=="rectangle"){for(var Ge=[],ot=e.options.tabSize,Ve=Ke(Je(h,s.line).text,s.ch,ot),St=Ke(Je(h,De.line).text,De.ch,ot),Et=Math.min(Ve,St),Un=Math.max(Ve,St),sn=Math.min(s.line,De.line),xr=Math.min(e.lastLine(),Math.max(s.line,De.line));sn<=xr;sn++){var lr=Je(h,sn).text,vn=Ue(lr,Et,ot);Et==Un?Ge.push(new At(pe(sn,vn),pe(sn,vn))):lr.length>vn&&Ge.push(new At(pe(sn,vn),pe(sn,Ue(lr,Un,ot))))}Ge.length||Ge.push(new At(s,s)),Hn(h,Lr(e,w.ranges.slice(0,x).concat(Ge),x),{origin:"*mouse",scroll:!1}),e.scrollIntoView(De)}else{var br=m,jn=sa(e,De,i.unit),xn=br.anchor,Dt;He(jn.anchor,xn)>0?(Dt=jn.head,xn=Kr(br.from(),jn.anchor)):(Dt=jn.anchor,xn=Sn(br.to(),jn.head));var dt=w.ranges.slice(0);dt[x]=zu(e,new At(gt(h,xn),Dt)),Hn(h,Lr(e,dt,x),xt)}}var te=a.wrapper.getBoundingClientRect(),ge=0;function be(De){var Ge=++ge,ot=gs(e,De,!0,i.unit=="rectangle");if(ot)if(He(ot,q)!=0){e.curOp.focus=E(Ie(e)),ie(ot);var Ve=ys(a,h);(ot.line>=Ve.to||ot.line<Ve.from)&&setTimeout(hn(e,function(){ge==Ge&&be(De)}),150)}else{var St=De.clientY<te.top?-20:De.clientY>te.bottom?20:0;St&&setTimeout(hn(e,function(){ge==Ge&&(a.scroller.scrollTop+=St,be(De))}),50)}}function Ae(De){e.state.selectingText=!1,ge=1/0,De&&(wn(De),a.input.focus()),tn(a.wrapper.ownerDocument,"mousemove",Ee),tn(a.wrapper.ownerDocument,"mouseup",ze),h.history.lastSelOrigin=null}var Ee=hn(e,function(De){De.buttons===0||!Ln(De)?Ae(De):be(De)}),ze=hn(e,Ae);e.state.selectingText=ze,rt(a.wrapper.ownerDocument,"mousemove",Ee),rt(a.wrapper.ownerDocument,"mouseup",ze)}function zu(e,n){var s=n.anchor,i=n.head,a=Je(e.doc,s.line);if(He(s,i)==0&&s.sticky==i.sticky)return n;var h=bt(a);if(!h)return n;var m=Br(h,s.ch,s.sticky),x=h[m];if(x.from!=s.ch&&x.to!=s.ch)return n;var w=m+(x.from==s.ch==(x.level!=1)?0:1);if(w==0||w==h.length)return n;var _;if(i.line!=s.line)_=(i.line-s.line)*(e.doc.direction=="ltr"?1:-1)>0;else{var z=Br(h,i.ch,i.sticky),q=z-m||(i.ch-s.ch)*(x.level==1?-1:1);z==w-1||z==w?_=q<0:_=q>0}var ie=h[w+(_?-1:0)],te=_==(ie.level==1),ge=te?ie.from:ie.to,be=te?"after":"before";return s.ch==ge&&s.sticky==be?n:new At(new pe(s.line,ge,be),i)}function $c(e,n,s,i){var a,h;if(n.touches)a=n.touches[0].clientX,h=n.touches[0].clientY;else try{a=n.clientX,h=n.clientY}catch{return!1}if(a>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&wn(n);var m=e.display,x=m.lineDiv.getBoundingClientRect();if(h>x.bottom||!gn(e,s))return On(n);h-=x.top-m.viewOffset;for(var w=0;w<e.display.gutterSpecs.length;++w){var _=m.gutters.childNodes[w];if(_&&_.getBoundingClientRect().right>=a){var z=U(e.doc,h),q=e.display.gutterSpecs[w];return It(e,s,e,z,q.className,n),On(n)}}}function Pl(e,n){return $c(e,n,"gutterClick",!0)}function Fu(e,n){qi(e.display,n)||Gc(e,n)||qt(e,n,"contextmenu")||Te||e.display.input.onContextMenu(n)}function Gc(e,n){return gn(e,"gutterContextMenu")?$c(e,n,"gutterContextMenu",!1):!1}function Wu(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),wa(e)}var aa={toString:function(){return"CodeMirror.Init"}},Yc={},er={};function vr(e){var n=e.optionHandlers;function s(i,a,h,m){e.defaults[i]=a,h&&(n[i]=m?function(x,w,_){_!=aa&&h(x,w,_)}:h)}e.defineOption=s,e.Init=aa,s("value","",function(i,a){return i.setValue(a)},!0),s("mode",null,function(i,a){i.doc.modeOption=a,xl(i)},!0),s("indentUnit",2,xl,!0),s("indentWithTabs",!1),s("smartIndent",!0),s("tabSize",4,function(i){Gs(i),wa(i),sr(i)},!0),s("lineSeparator",null,function(i,a){if(i.doc.lineSep=a,!!a){var h=[],m=i.doc.first;i.doc.iter(function(w){for(var _=0;;){var z=w.text.indexOf(a,_);if(z==-1)break;_=z+a.length,h.push(pe(m,z))}m++});for(var x=h.length-1;x>=0;x--)Qs(i.doc,a,h[x],pe(h[x].line,h[x].ch+a.length))}}),s("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(i,a,h){i.state.specialChars=new RegExp(a.source+(a.test("	")?"":"|	"),"g"),h!=aa&&i.refresh()}),s("specialCharPlaceholder",$d,function(i){return i.refresh()},!0),s("electricChars",!0),s("inputStyle",H?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),s("spellcheck",!1,function(i,a){return i.getInputField().spellcheck=a},!0),s("autocorrect",!1,function(i,a){return i.getInputField().autocorrect=a},!0),s("autocapitalize",!1,function(i,a){return i.getInputField().autocapitalize=a},!0),s("rtlMoveVisually",!le),s("wholeLineUpdateBefore",!0),s("theme","default",function(i){Wu(i),zr(i)},!0),s("keyMap","default",function(i,a,h){var m=Es(a),x=h!=aa&&Es(h);x&&x.detach&&x.detach(i,m),m.attach&&m.attach(i,x||null)}),s("extraKeys",null),s("configureMouse",null),s("lineWrapping",!1,Jc,!0),s("gutters",[],function(i,a){i.display.gutterSpecs=La(a,i.options.lineNumbers),zr(i)},!0),s("fixedGutter",!0,function(i,a){i.display.gutters.style.left=a?_a(i.display)+"px":"0",i.refresh()},!0),s("coverGutterNextToScrollbar",!1,function(i){return Us(i)},!0),s("scrollbarStyle","native",function(i){yl(i),Us(i),i.display.scrollbars.setScrollTop(i.doc.scrollTop),i.display.scrollbars.setScrollLeft(i.doc.scrollLeft)},!0),s("lineNumbers",!1,function(i,a){i.display.gutterSpecs=La(i.options.gutters,a),zr(i)},!0),s("firstLineNumber",1,zr,!0),s("lineNumberFormatter",function(i){return i},zr,!0),s("showCursorWhenSelecting",!1,Gr,!0),s("resetSelectionOnContextMenu",!0),s("lineWiseCopyCut",!0),s("pasteLinesPerSelection",!0),s("selectionsMayTouch",!1),s("readOnly",!1,function(i,a){a=="nocursor"&&(Wt(i),i.display.input.blur()),i.display.input.readOnlyChanged(a)}),s("screenReaderLabel",null,function(i,a){a=a===""?null:a,i.display.input.screenReaderLabelChanged(a)}),s("disableInput",!1,function(i,a){a||i.display.input.reset()},!0),s("dragDrop",!0,Vc),s("allowDropFileTypes",null),s("cursorBlinkRate",530),s("cursorScrollMargin",0),s("cursorHeight",1,Gr,!0),s("singleCursorHeightPerLine",!0,Gr,!0),s("workTime",100),s("workDelay",100),s("flattenSpans",!0,Gs,!0),s("addModeClass",!1,Gs,!0),s("pollInterval",100),s("undoDepth",200,function(i,a){return i.doc.history.undoDepth=a}),s("historyEventDelay",1250),s("viewportMargin",10,function(i){return i.refresh()},!0),s("maxHighlightLength",1e4,Gs,!0),s("moveInputWithCursor",!0,function(i,a){a||i.display.input.resetPosition()}),s("tabindex",null,function(i,a){return i.display.input.getField().tabIndex=a||""}),s("autofocus",null),s("direction","ltr",function(i,a){return i.doc.setDirection(a)},!0),s("phrases",null)}function Vc(e,n,s){var i=s&&s!=aa;if(!n!=!i){var a=e.display.dragFunctions,h=n?rt:tn;h(e.display.scroller,"dragstart",a.start),h(e.display.scroller,"dragenter",a.enter),h(e.display.scroller,"dragover",a.over),h(e.display.scroller,"dragleave",a.leave),h(e.display.scroller,"drop",a.drop)}}function Jc(e){e.options.lineWrapping?($(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ce(e.display.wrapper,"CodeMirror-wrap"),uo(e)),vo(e),sr(e),wa(e),setTimeout(function(){return Us(e)},100)}function en(e,n){var s=this;if(!(this instanceof en))return new en(e,n);this.options=n=n?Be(n):{},Be(Yc,n,!1);var i=n.value;typeof i=="string"?i=new Ot(i,n.mode,null,n.lineSeparator,n.direction):n.mode&&(i.modeOption=n.mode),this.doc=i;var a=new en.inputStyles[n.inputStyle](this),h=this.display=new vl(e,i,a,n);h.wrapper.CodeMirror=this,Wu(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),yl(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new et,keySeq:null,specialChars:null},n.autofocus&&!H&&h.input.focus(),S&&j<11&&setTimeout(function(){return s.display.input.reset(!0)},20),Xc(this),Su(),ws(this),this.curOp.forceUpdate=!0,rn(this,i),n.autofocus&&!H||this.hasFocus()?setTimeout(function(){s.hasFocus()&&!s.state.focused&&ml(s)},20):Wt(this);for(var m in er)er.hasOwnProperty(m)&&er[m](this,n[m],aa);yu(this),n.finishInit&&n.finishInit(this);for(var x=0;x<Al.length;++x)Al[x](this);Yr(this),N&&n.lineWrapping&&getComputedStyle(h.lineDiv).textRendering=="optimizelegibility"&&(h.lineDiv.style.textRendering="auto")}en.defaults=Yc,en.optionHandlers=er;function Xc(e){var n=e.display;rt(n.scroller,"mousedown",hn(e,Ho)),S&&j<11?rt(n.scroller,"dblclick",hn(e,function(w){if(!qt(e,w)){var _=gs(e,w);if(!(!_||Pl(e,w)||qi(e.display,w))){wn(w);var z=e.findWordAt(_);Ao(e.doc,z.anchor,z.head)}}})):rt(n.scroller,"dblclick",function(w){return qt(e,w)||wn(w)}),rt(n.scroller,"contextmenu",function(w){return Fu(e,w)}),rt(n.input.getField(),"contextmenu",function(w){n.scroller.contains(w.target)||Fu(e,w)});var s,i={end:0};function a(){n.activeTouch&&(s=setTimeout(function(){return n.activeTouch=null},1e3),i=n.activeTouch,i.end=+new Date)}function h(w){if(w.touches.length!=1)return!1;var _=w.touches[0];return _.radiusX<=1&&_.radiusY<=1}function m(w,_){if(_.left==null)return!0;var z=_.left-w.left,q=_.top-w.top;return z*z+q*q>400}rt(n.scroller,"touchstart",function(w){if(!qt(e,w)&&!h(w)&&!Pl(e,w)){n.input.ensurePolled(),clearTimeout(s);var _=+new Date;n.activeTouch={start:_,moved:!1,prev:_-i.end<=300?i:null},w.touches.length==1&&(n.activeTouch.left=w.touches[0].pageX,n.activeTouch.top=w.touches[0].pageY)}}),rt(n.scroller,"touchmove",function(){n.activeTouch&&(n.activeTouch.moved=!0)}),rt(n.scroller,"touchend",function(w){var _=n.activeTouch;if(_&&!qi(n,w)&&_.left!=null&&!_.moved&&new Date-_.start<300){var z=e.coordsChar(n.activeTouch,"page"),q;!_.prev||m(_,_.prev)?q=new At(z,z):!_.prev.prev||m(_,_.prev.prev)?q=e.findWordAt(z):q=new At(pe(z.line,0),gt(e.doc,pe(z.line+1,0))),e.setSelection(q.anchor,q.head),e.focus(),wn(w)}a()}),rt(n.scroller,"touchcancel",a),rt(n.scroller,"scroll",function(){n.scroller.clientHeight&&(xs(e,n.scroller.scrollTop),Yi(e,n.scroller.scrollLeft,!0),It(e,"scroll",e))}),rt(n.scroller,"mousewheel",function(w){return Ks(e,w)}),rt(n.scroller,"DOMMouseScroll",function(w){return Ks(e,w)}),rt(n.wrapper,"scroll",function(){return n.wrapper.scrollTop=n.wrapper.scrollLeft=0}),n.dragFunctions={enter:function(w){qt(e,w)||pr(w)},over:function(w){qt(e,w)||(dp(e,w),pr(w))},start:function(w){return zo(e,w)},drop:hn(e,Do),leave:function(w){qt(e,w)||Zn(e)}};var x=n.input.getField();rt(x,"keyup",function(w){return Ru.call(e,w)}),rt(x,"keydown",hn(e,Au)),rt(x,"keypress",hn(e,Fo)),rt(x,"focus",function(w){return ml(e,w)}),rt(x,"blur",function(w){return Wt(e,w)})}var Al=[];en.defineInitHook=function(e){return Al.push(e)};function oa(e,n,s,i){var a=e.doc,h;s==null&&(s="add"),s=="smart"&&(a.mode.indent?h=Nt(e,n).state:s="prev");var m=e.options.tabSize,x=Je(a,n),w=Ke(x.text,null,m);x.stateAfter&&(x.stateAfter=null);var _=x.text.match(/^\s*/)[0],z;if(!i&&!/\S/.test(x.text))z=0,s="not";else if(s=="smart"&&(z=a.mode.indent(h,x.text.slice(_.length),x.text),z==Yt||z>150)){if(!i)return;s="prev"}s=="prev"?n>a.first?z=Ke(Je(a,n-1).text,null,m):z=0:s=="add"?z=w+e.options.indentUnit:s=="subtract"?z=w-e.options.indentUnit:typeof s=="number"&&(z=w+s),z=Math.max(0,z);var q="",ie=0;if(e.options.indentWithTabs)for(var te=Math.floor(z/m);te;--te)ie+=m,q+="	";if(ie<z&&(q+=yt(z-ie)),q!=_)return Qs(a,q,pe(n,0),pe(n,_.length),"+input"),x.stateAfter=null,!0;for(var ge=0;ge<a.sel.ranges.length;ge++){var be=a.sel.ranges[ge];if(be.head.line==n&&be.head.ch<_.length){var Ae=pe(n,_.length);Ia(a,ge,new At(Ae,Ae));break}}}var Qr=null;function $a(e){Qr=e}function Rl(e,n,s,i,a){var h=e.doc;e.display.shift=!1,i||(i=h.sel);var m=+new Date-200,x=a=="paste"||e.state.pasteIncoming>m,w=Tr(n),_=null;if(x&&i.ranges.length>1)if(Qr&&Qr.text.join(`
`)==n){if(i.ranges.length%Qr.text.length==0){_=[];for(var z=0;z<Qr.text.length;z++)_.push(h.splitLines(Qr.text[z]))}}else w.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(_=ut(w,function(Ee){return[Ee]}));for(var q=e.curOp.updateInput,ie=i.ranges.length-1;ie>=0;ie--){var te=i.ranges[ie],ge=te.from(),be=te.to();te.empty()&&(s&&s>0?ge=pe(ge.line,ge.ch-s):e.state.overwrite&&!x?be=pe(be.line,Math.min(Je(h,be.line).text.length,be.ch+Qe(w).length)):x&&Qr&&Qr.lineWise&&Qr.text.join(`
`)==w.join(`
`)&&(ge=be=pe(ge.line,0)));var Ae={from:ge,to:be,text:_?_[ie%_.length]:w,origin:a||(x?"paste":e.state.cutIncoming>m?"cut":"+input")};Xs(e.doc,Ae),zn(e,"inputRead",e,Ae)}n&&!x&&Il(e,n),Hs(e),e.curOp.updateInput<2&&(e.curOp.updateInput=q),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Hu(e,n){var s=e.clipboardData&&e.clipboardData.getData("Text");if(s)return e.preventDefault(),!n.isReadOnly()&&!n.options.disableInput&&n.hasFocus()&&Pn(n,function(){return Rl(n,s,0,null,"paste")}),!0}function Il(e,n){if(!(!e.options.electricChars||!e.options.smartIndent))for(var s=e.doc.sel,i=s.ranges.length-1;i>=0;i--){var a=s.ranges[i];if(!(a.head.ch>100||i&&s.ranges[i-1].head.line==a.head.line)){var h=e.getModeAt(a.head),m=!1;if(h.electricChars){for(var x=0;x<h.electricChars.length;x++)if(n.indexOf(h.electricChars.charAt(x))>-1){m=oa(e,a.head.line,"smart");break}}else h.electricInput&&h.electricInput.test(Je(e.doc,a.head.line).text.slice(0,a.head.ch))&&(m=oa(e,a.head.line,"smart"));m&&zn(e,"electricInput",e,a.head.line)}}}function Ol(e){for(var n=[],s=[],i=0;i<e.doc.sel.ranges.length;i++){var a=e.doc.sel.ranges[i].head.line,h={anchor:pe(a,0),head:pe(a+1,0)};s.push(h),n.push(e.getRange(h.anchor,h.head))}return{text:n,ranges:s}}function Ml(e,n,s,i){e.setAttribute("autocorrect",s?"on":"off"),e.setAttribute("autocapitalize",i?"on":"off"),e.setAttribute("spellcheck",!!n)}function Dl(){var e=L("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),n=L("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return N?e.style.width="1000px":e.setAttribute("wrap","off"),W&&(e.style.border="1px solid black"),n}function zl(e){var n=e.optionHandlers,s=e.helpers={};e.prototype={constructor:e,focus:function(){Oe(this).focus(),this.display.input.focus()},setOption:function(i,a){var h=this.options,m=h[i];h[i]==a&&i!="mode"||(h[i]=a,n.hasOwnProperty(i)&&hn(this,n[i])(this,a,m),It(this,"optionChange",this,i))},getOption:function(i){return this.options[i]},getDoc:function(){return this.doc},addKeyMap:function(i,a){this.state.keyMaps[a?"push":"unshift"](Es(i))},removeKeyMap:function(i){for(var a=this.state.keyMaps,h=0;h<a.length;++h)if(a[h]==i||a[h].name==i)return a.splice(h,1),!0},addOverlay:Tn(function(i,a){var h=i.token?i:e.getMode(this.options,i);if(h.startState)throw new Error("Overlays may not be stateful.");se(this.state.overlays,{mode:h,modeSpec:i,opaque:a&&a.opaque,priority:a&&a.priority||0},function(m){return m.priority}),this.state.modeGen++,sr(this)}),removeOverlay:Tn(function(i){for(var a=this.state.overlays,h=0;h<a.length;++h){var m=a[h].modeSpec;if(m==i||typeof i=="string"&&m.name==i){a.splice(h,1),this.state.modeGen++,sr(this);return}}}),indentLine:Tn(function(i,a,h){typeof a!="string"&&typeof a!="number"&&(a==null?a=this.options.smartIndent?"smart":"prev":a=a?"add":"subtract"),me(this.doc,i)&&oa(this,i,a,h)}),indentSelection:Tn(function(i){for(var a=this.doc.sel.ranges,h=-1,m=0;m<a.length;m++){var x=a[m];if(x.empty())x.head.line>h&&(oa(this,x.head.line,i,!0),h=x.head.line,m==this.doc.sel.primIndex&&Hs(this));else{var w=x.from(),_=x.to(),z=Math.max(h,w.line);h=Math.min(this.lastLine(),_.line-(_.ch?0:1))+1;for(var q=z;q<h;++q)oa(this,q,i);var ie=this.doc.sel.ranges;w.ch==0&&a.length==ie.length&&ie[m].from().ch>0&&Ia(this.doc,m,new At(w,ie[m].to()),Ct)}}}),getTokenAt:function(i,a){return xi(this,i,a)},getLineTokens:function(i,a){return xi(this,pe(i),a,!0)},getTokenTypeAt:function(i){i=gt(this.doc,i);var a=Wi(this,Je(this.doc,i.line)),h=0,m=(a.length-1)/2,x=i.ch,w;if(x==0)w=a[2];else for(;;){var _=h+m>>1;if((_?a[_*2-1]:0)>=x)m=_;else if(a[_*2+1]<x)h=_+1;else{w=a[_*2+2];break}}var z=w?w.indexOf("overlay "):-1;return z<0?w:z==0?null:w.slice(0,z-1)},getModeAt:function(i){var a=this.doc.mode;return a.innerMode?e.innerMode(a,this.getTokenAt(i).state).mode:a},getHelper:function(i,a){return this.getHelpers(i,a)[0]},getHelpers:function(i,a){var h=[];if(!s.hasOwnProperty(a))return h;var m=s[a],x=this.getModeAt(i);if(typeof x[a]=="string")m[x[a]]&&h.push(m[x[a]]);else if(x[a])for(var w=0;w<x[a].length;w++){var _=m[x[a][w]];_&&h.push(_)}else x.helperType&&m[x.helperType]?h.push(m[x.helperType]):m[x.name]&&h.push(m[x.name]);for(var z=0;z<m._global.length;z++){var q=m._global[z];q.pred(x,this)&&$e(h,q.val)==-1&&h.push(q.val)}return h},getStateAfter:function(i,a){var h=this.doc;return i=tl(h,i??h.first+h.size-1),Nt(this,i+1,a).state},cursorCoords:function(i,a){var h,m=this.doc.sel.primary();return i==null?h=m.head:typeof i=="object"?h=gt(this.doc,i):h=i?m.from():m.to(),Cn(this,h,a||"page")},charCoords:function(i,a){return ll(this,gt(this.doc,i),a||"page")},coordsChar:function(i,a){return i=Cc(this,i,a||"page"),cl(this,i.left,i.top)},lineAtHeight:function(i,a){return i=Cc(this,{top:i,left:0},a||"page").top,U(this.doc,i+this.display.viewOffset)},heightAtLine:function(i,a,h){var m=!1,x;if(typeof i=="number"){var w=this.doc.first+this.doc.size-1;i<this.doc.first?i=this.doc.first:i>w&&(i=w,m=!0),x=Je(this.doc,i)}else x=i;return ol(this,x,{top:0,left:0},a||"page",h||m).top+(m?this.doc.height-_n(x):0)},defaultTextHeight:function(){return Si(this.display)},defaultCharWidth:function(){return ms(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(i,a,h,m,x){var w=this.display;i=Cn(this,gt(this.doc,i));var _=i.bottom,z=i.left;if(a.style.position="absolute",a.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(a),w.sizer.appendChild(a),m=="over")_=i.top;else if(m=="above"||m=="near"){var q=Math.max(w.wrapper.clientHeight,this.doc.height),ie=Math.max(w.sizer.clientWidth,w.lineSpace.clientWidth);(m=="above"||i.bottom+a.offsetHeight>q)&&i.top>a.offsetHeight?_=i.top-a.offsetHeight:i.bottom+a.offsetHeight<=q&&(_=i.bottom),z+a.offsetWidth>ie&&(z=ie-a.offsetWidth)}a.style.top=_+"px",a.style.left=a.style.right="",x=="right"?(z=w.sizer.clientWidth-a.offsetWidth,a.style.right="0px"):(x=="left"?z=0:x=="middle"&&(z=(w.sizer.clientWidth-a.offsetWidth)/2),a.style.left=z+"px"),h&&ko(this,{left:z,top:_,right:z+a.offsetWidth,bottom:_+a.offsetHeight})},triggerOnKeyDown:Tn(Au),triggerOnKeyPress:Tn(Fo),triggerOnKeyUp:Ru,triggerOnMouseDown:Tn(Ho),execCommand:function(i){if(Ua.hasOwnProperty(i))return Ua[i].call(null,this)},triggerElectric:Tn(function(i){Il(this,i)}),findPosH:function(i,a,h,m){var x=1;a<0&&(x=-1,a=-a);for(var w=gt(this.doc,i),_=0;_<a&&(w=Bu(this.doc,w,x,h,m),!w.hitSide);++_);return w},moveH:Tn(function(i,a){var h=this;this.extendSelectionsBy(function(m){return h.display.shift||h.doc.extend||m.empty()?Bu(h.doc,m.head,i,a,h.options.rtlMoveVisually):i<0?m.from():m.to()},tt)}),deleteH:Tn(function(i,a){var h=this.doc.sel,m=this.doc;h.somethingSelected()?m.replaceSelection("",null,"+delete"):ia(this,function(x){var w=Bu(m,x.head,i,a,!1);return i<0?{from:w,to:x.head}:{from:x.head,to:w}})}),findPosV:function(i,a,h,m){var x=1,w=m;a<0&&(x=-1,a=-a);for(var _=gt(this.doc,i),z=0;z<a;++z){var q=Cn(this,_,"div");if(w==null?w=q.left:q.left=w,_=Uu(this,q,x,h),_.hitSide)break}return _},moveV:Tn(function(i,a){var h=this,m=this.doc,x=[],w=!this.display.shift&&!m.extend&&m.sel.somethingSelected();if(m.extendSelectionsBy(function(z){if(w)return i<0?z.from():z.to();var q=Cn(h,z.head,"div");z.goalColumn!=null&&(q.left=z.goalColumn),x.push(q.left);var ie=Uu(h,q,i,a);return a=="page"&&z==m.sel.primary()&&vs(h,ll(h,ie,"div").top-q.top),ie},tt),x.length)for(var _=0;_<m.sel.ranges.length;_++)m.sel.ranges[_].goalColumn=x[_]}),findWordAt:function(i){var a=this.doc,h=Je(a,i.line).text,m=i.ch,x=i.ch;if(h){var w=this.getHelper(i,"wordChars");(i.sticky=="before"||x==h.length)&&m?--m:++x;for(var _=h.charAt(m),z=at(_,w)?function(q){return at(q,w)}:/\s/.test(_)?function(q){return/\s/.test(q)}:function(q){return!/\s/.test(q)&&!at(q)};m>0&&z(h.charAt(m-1));)--m;for(;x<h.length&&z(h.charAt(x));)++x}return new At(pe(i.line,m),pe(i.line,x))},toggleOverwrite:function(i){i!=null&&i==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?$(this.display.cursorDiv,"CodeMirror-overwrite"):Ce(this.display.cursorDiv,"CodeMirror-overwrite"),It(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==E(Ie(this))},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:Tn(function(i,a){So(this,i,a)}),getScrollInfo:function(){var i=this.display.scroller;return{left:i.scrollLeft,top:i.scrollTop,height:i.scrollHeight-ai(this)-this.display.barHeight,width:i.scrollWidth-ai(this)-this.display.barWidth,clientHeight:fs(this),clientWidth:hs(this)}},scrollIntoView:Tn(function(i,a){i==null?(i={from:this.doc.sel.primary().head,to:null},a==null&&(a=this.options.cursorScrollMargin)):typeof i=="number"?i={from:pe(i,0),to:null}:i.from==null&&(i={from:i,to:null}),i.to||(i.to=i.from),i.margin=a||0,i.from.line!=null?lp(this,i):Co(this,i.from,i.to,i.margin)}),setSize:Tn(function(i,a){var h=this,m=function(w){return typeof w=="number"||/^\d+$/.test(String(w))?w+"px":w};i!=null&&(this.display.wrapper.style.width=m(i)),a!=null&&(this.display.wrapper.style.height=m(a)),this.options.lineWrapping&&lu(this);var x=this.display.viewFrom;this.doc.iter(x,this.display.viewTo,function(w){if(w.widgets){for(var _=0;_<w.widgets.length;_++)if(w.widgets[_].noHScroll){$i(h,x,"widget");break}}++x}),this.curOp.forceUpdate=!0,It(this,"refresh",this)}),operation:function(i){return Pn(this,i)},startOperation:function(){return ws(this)},endOperation:function(){return Yr(this)},refresh:Tn(function(){var i=this.display.cachedTextHeight;sr(this),this.curOp.forceUpdate=!0,wa(this),So(this,this.doc.scrollLeft,this.doc.scrollTop),ar(this.display),(i==null||Math.abs(i-Si(this.display))>.5||this.options.lineWrapping)&&vo(this),It(this,"refresh",this)}),swapDoc:Tn(function(i){var a=this.doc;return a.cm=null,this.state.selectingText&&this.state.selectingText(),rn(this,i),wa(this),this.display.input.reset(),So(this,i.scrollLeft,i.scrollTop),this.curOp.forceScroll=!0,zn(this,"swapDoc",this,a),a}),phrase:function(i){var a=this.options.phrases;return a&&Object.prototype.hasOwnProperty.call(a,i)?a[i]:i},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},En(e),e.registerHelper=function(i,a,h){s.hasOwnProperty(i)||(s[i]=e[i]={_global:[]}),s[i][a]=h},e.registerGlobalHelper=function(i,a,h,m){e.registerHelper(i,a,m),s[i]._global.push({pred:h,val:m})}}function Bu(e,n,s,i,a){var h=n,m=s,x=Je(e,n.line),w=a&&e.direction=="rtl"?-s:s;function _(){var ze=n.line+w;return ze<e.first||ze>=e.first+e.size?!1:(n=new pe(ze,n.ch,n.sticky),x=Je(e,ze))}function z(ze){var De;if(i=="codepoint"){var Ge=x.text.charCodeAt(n.ch+(s>0?0:-1));if(isNaN(Ge))De=null;else{var ot=s>0?Ge>=55296&&Ge<56320:Ge>=56320&&Ge<57343;De=new pe(n.line,Math.max(0,Math.min(x.text.length,n.ch+s*(ot?2:1))),-s)}}else a?De=ju(e.cm,x,n,s):De=Ba(x,n,s);if(De==null)if(!ze&&_())n=Ll(a,e.cm,x,n.line,w);else return!1;else n=De;return!0}if(i=="char"||i=="codepoint")z();else if(i=="column")z(!0);else if(i=="word"||i=="group")for(var q=null,ie=i=="group",te=e.cm&&e.cm.getHelper(n,"wordChars"),ge=!0;!(s<0&&!z(!ge));ge=!1){var be=x.text.charAt(n.ch)||`
`,Ae=at(be,te)?"w":ie&&be==`
`?"n":!ie||/\s/.test(be)?null:"p";if(ie&&!ge&&!Ae&&(Ae="s"),q&&q!=Ae){s<0&&(s=1,z(),n.sticky="after");break}if(Ae&&(q=Ae),s>0&&!z(!ge))break}var Ee=Io(e,n,h,m,!0);return jt(h,Ee)&&(Ee.hitSide=!0),Ee}function Uu(e,n,s,i){var a=e.doc,h=n.left,m;if(i=="page"){var x=Math.min(e.display.wrapper.clientHeight,Oe(e).innerHeight||a(e).documentElement.clientHeight),w=Math.max(x-.5*Si(e.display),3);m=(s>0?n.bottom:n.top)+s*w}else i=="line"&&(m=s>0?n.bottom+3:n.top-3);for(var _;_=cl(e,h,m),!!_.outside;){if(s<0?m<=0:m>=a.height){_.hitSide=!0;break}m+=s*5}return _}var Mt=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new et,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};Mt.prototype.init=function(e){var n=this,s=this,i=s.cm,a=s.div=e.lineDiv;a.contentEditable=!0,Ml(a,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize);function h(x){for(var w=x.target;w;w=w.parentNode){if(w==a)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(w.className))break}return!1}rt(a,"paste",function(x){!h(x)||qt(i,x)||Hu(x,i)||j<=11&&setTimeout(hn(i,function(){return n.updateFromDOM()}),20)}),rt(a,"compositionstart",function(x){n.composing={data:x.data,done:!1}}),rt(a,"compositionupdate",function(x){n.composing||(n.composing={data:x.data,done:!1})}),rt(a,"compositionend",function(x){n.composing&&(x.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),rt(a,"touchstart",function(){return s.forceCompositionEnd()}),rt(a,"input",function(){n.composing||n.readFromDOMSoon()});function m(x){if(!(!h(x)||qt(i,x))){if(i.somethingSelected())$a({lineWise:!1,text:i.getSelections()}),x.type=="cut"&&i.replaceSelection("",null,"cut");else if(i.options.lineWiseCopyCut){var w=Ol(i);$a({lineWise:!0,text:w.text}),x.type=="cut"&&i.operation(function(){i.setSelections(w.ranges,0,Ct),i.replaceSelection("",null,"cut")})}else return;if(x.clipboardData){x.clipboardData.clearData();var _=Qr.text.join(`
`);if(x.clipboardData.setData("Text",_),x.clipboardData.getData("Text")==_){x.preventDefault();return}}var z=Dl(),q=z.firstChild;Ml(q),i.display.lineSpace.insertBefore(z,i.display.lineSpace.firstChild),q.value=Qr.text.join(`
`);var ie=E(qe(a));Z(q),setTimeout(function(){i.display.lineSpace.removeChild(z),ie.focus(),ie==a&&s.showPrimarySelection()},50)}}rt(a,"copy",m),rt(a,"cut",m)},Mt.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Mt.prototype.prepareSelection=function(){var e=pl(this.cm,!1);return e.focus=E(qe(this.div))==this.div,e},Mt.prototype.showSelection=function(e,n){!e||!this.cm.display.view.length||((e.focus||n)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Mt.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Mt.prototype.showPrimarySelection=function(){var e=this.getSelection(),n=this.cm,s=n.doc.sel.primary(),i=s.from(),a=s.to();if(n.display.viewTo==n.display.viewFrom||i.line>=n.display.viewTo||a.line<n.display.viewFrom){e.removeAllRanges();return}var h=Bo(n,e.anchorNode,e.anchorOffset),m=Bo(n,e.focusNode,e.focusOffset);if(!(h&&!h.bad&&m&&!m.bad&&He(Kr(h,m),i)==0&&He(Sn(h,m),a)==0)){var x=n.display.view,w=i.line>=n.display.viewFrom&&qu(n,i)||{node:x[0].measure.map[2],offset:0},_=a.line<n.display.viewTo&&qu(n,a);if(!_){var z=x[x.length-1].measure,q=z.maps?z.maps[z.maps.length-1]:z.map;_={node:q[q.length-1],offset:q[q.length-2]-q[q.length-3]}}if(!w||!_){e.removeAllRanges();return}var ie=e.rangeCount&&e.getRangeAt(0),te;try{te=K(w.node,w.offset,_.offset,_.node)}catch{}te&&(!y&&n.state.focused?(e.collapse(w.node,w.offset),te.collapsed||(e.removeAllRanges(),e.addRange(te))):(e.removeAllRanges(),e.addRange(te)),ie&&e.anchorNode==null?e.addRange(ie):y&&this.startGracePeriod()),this.rememberSelection()}},Mt.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Mt.prototype.showMultipleSelections=function(e){ye(this.cm.display.cursorDiv,e.cursors),ye(this.cm.display.selectionDiv,e.selection)},Mt.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Mt.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var n=e.getRangeAt(0).commonAncestorContainer;return R(this.div,n)},Mt.prototype.focus=function(){this.cm.options.readOnly!="nocursor"&&((!this.selectionInEditor()||E(qe(this.div))!=this.div)&&this.showSelection(this.prepareSelection(),!0),this.div.focus())},Mt.prototype.blur=function(){this.div.blur()},Mt.prototype.getField=function(){return this.div},Mt.prototype.supportsTouch=function(){return!0},Mt.prototype.receivedFocus=function(){var e=this,n=this;this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):Pn(this.cm,function(){return n.cm.curOp.selectionChanged=!0});function s(){n.cm.state.focused&&(n.pollSelection(),n.polling.set(n.cm.options.pollInterval,s))}this.polling.set(this.cm.options.pollInterval,s)},Mt.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Mt.prototype.pollSelection=function(){if(!(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged())){var e=this.getSelection(),n=this.cm;if(B&&A&&this.cm.display.gutterSpecs.length&&Fl(e.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();return}if(!this.composing){this.rememberSelection();var s=Bo(n,e.anchorNode,e.anchorOffset),i=Bo(n,e.focusNode,e.focusOffset);s&&i&&Pn(n,function(){Hn(n.doc,Fn(s,i),Ct),(s.bad||i.bad)&&(n.curOp.selectionChanged=!0)})}}},Mt.prototype.pollContent=function(){this.readDOMTimeout!=null&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e=this.cm,n=e.display,s=e.doc.sel.primary(),i=s.from(),a=s.to();if(i.ch==0&&i.line>e.firstLine()&&(i=pe(i.line-1,Je(e.doc,i.line-1).length)),a.ch==Je(e.doc,a.line).text.length&&a.line<e.lastLine()&&(a=pe(a.line+1,0)),i.line<n.viewFrom||a.line>n.viewTo-1)return!1;var h,m,x;i.line==n.viewFrom||(h=_i(e,i.line))==0?(m=T(n.view[0].line),x=n.view[0].node):(m=T(n.view[h].line),x=n.view[h-1].node.nextSibling);var w=_i(e,a.line),_,z;if(w==n.view.length-1?(_=n.viewTo-1,z=n.lineDiv.lastChild):(_=T(n.view[w+1].line)-1,z=n.view[w+1].node.previousSibling),!x)return!1;for(var q=e.doc.splitLines(fp(e,x,z,m,_)),ie=ii(e.doc,pe(m,0),pe(_,Je(e.doc,_).text.length));q.length>1&&ie.length>1;)if(Qe(q)==Qe(ie))q.pop(),ie.pop(),_--;else if(q[0]==ie[0])q.shift(),ie.shift(),m++;else break;for(var te=0,ge=0,be=q[0],Ae=ie[0],Ee=Math.min(be.length,Ae.length);te<Ee&&be.charCodeAt(te)==Ae.charCodeAt(te);)++te;for(var ze=Qe(q),De=Qe(ie),Ge=Math.min(ze.length-(q.length==1?te:0),De.length-(ie.length==1?te:0));ge<Ge&&ze.charCodeAt(ze.length-ge-1)==De.charCodeAt(De.length-ge-1);)++ge;if(q.length==1&&ie.length==1&&m==i.line)for(;te&&te>i.ch&&ze.charCodeAt(ze.length-ge-1)==De.charCodeAt(De.length-ge-1);)te--,ge++;q[q.length-1]=ze.slice(0,ze.length-ge).replace(/^\u200b+/,""),q[0]=q[0].slice(te).replace(/\u200b+$/,"");var ot=pe(m,te),Ve=pe(_,ie.length?Qe(ie).length-ge:0);if(q.length>1||q[0]||He(ot,Ve))return Qs(e.doc,q,ot,Ve,"+input"),!0},Mt.prototype.ensurePolled=function(){this.forceCompositionEnd()},Mt.prototype.reset=function(){this.forceCompositionEnd()},Mt.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Mt.prototype.readFromDOMSoon=function(){var e=this;this.readDOMTimeout==null&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing)if(e.composing.done)e.composing=null;else return;e.updateFromDOM()},80))},Mt.prototype.updateFromDOM=function(){var e=this;(this.cm.isReadOnly()||!this.pollContent())&&Pn(this.cm,function(){return sr(e.cm)})},Mt.prototype.setUneditable=function(e){e.contentEditable="false"},Mt.prototype.onKeyPress=function(e){e.charCode==0||this.composing||(e.preventDefault(),this.cm.isReadOnly()||hn(this.cm,Rl)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0))},Mt.prototype.readOnlyChanged=function(e){this.div.contentEditable=String(e!="nocursor")},Mt.prototype.onContextMenu=function(){},Mt.prototype.resetPosition=function(){},Mt.prototype.needsContentAttribute=!0;function qu(e,n){var s=sl(e,n.line);if(!s||s.hidden)return null;var i=Je(e.doc,n.line),a=wc(s,i,n.line),h=bt(i,e.doc.direction),m="left";if(h){var x=Br(h,n.ch);m=x%2?"right":"left"}var w=go(a.map,n.ch,m);return w.offset=w.collapse=="right"?w.end:w.start,w}function Fl(e){for(var n=e;n;n=n.parentNode)if(/CodeMirror-gutter-wrapper/.test(n.className))return!0;return!1}function Pr(e,n){return n&&(e.bad=!0),e}function fp(e,n,s,i,a){var h="",m=!1,x=e.doc.lineSeparator(),w=!1;function _(te){return function(ge){return ge.id==te}}function z(){m&&(h+=x,w&&(h+=x),m=w=!1)}function q(te){te&&(z(),h+=te)}function ie(te){if(te.nodeType==1){var ge=te.getAttribute("cm-text");if(ge){q(ge);return}var be=te.getAttribute("cm-marker"),Ae;if(be){var Ee=e.findMarks(pe(i,0),pe(a+1,0),_(+be));Ee.length&&(Ae=Ee[0].find(0))&&q(ii(e.doc,Ae.from,Ae.to).join(x));return}if(te.getAttribute("contenteditable")=="false")return;var ze=/^(pre|div|p|li|table|br)$/i.test(te.nodeName);if(!/^br$/i.test(te.nodeName)&&te.textContent.length==0)return;ze&&z();for(var De=0;De<te.childNodes.length;De++)ie(te.childNodes[De]);/^(pre|p)$/i.test(te.nodeName)&&(w=!0),ze&&(m=!0)}else te.nodeType==3&&q(te.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;ie(n),n!=s;)n=n.nextSibling,w=!1;return h}function Bo(e,n,s){var i;if(n==e.display.lineDiv){if(i=e.display.lineDiv.childNodes[s],!i)return Pr(e.clipPos(pe(e.display.viewTo-1)),!0);n=null,s=0}else for(i=n;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var a=0;a<e.display.view.length;a++){var h=e.display.view[a];if(h.node==i)return Ku(h,n,s)}}function Ku(e,n,s){var i=e.text.firstChild,a=!1;if(!n||!R(i,n))return Pr(pe(T(e.line),0),!0);if(n==i&&(a=!0,n=i.childNodes[s],s=0,!n)){var h=e.rest?Qe(e.rest):e.line;return Pr(pe(T(h),h.text.length),a)}var m=n.nodeType==3?n:null,x=n;for(!m&&n.childNodes.length==1&&n.firstChild.nodeType==3&&(m=n.firstChild,s&&(s=m.nodeValue.length));x.parentNode!=i;)x=x.parentNode;var w=e.measure,_=w.maps;function z(Ae,Ee,ze){for(var De=-1;De<(_?_.length:0);De++)for(var Ge=De<0?w.map:_[De],ot=0;ot<Ge.length;ot+=3){var Ve=Ge[ot+2];if(Ve==Ae||Ve==Ee){var St=T(De<0?e.line:e.rest[De]),Et=Ge[ot]+ze;return(ze<0||Ve!=Ae)&&(Et=Ge[ot+(ze?1:0)]),pe(St,Et)}}}var q=z(m,x,s);if(q)return Pr(q,a);for(var ie=x.nextSibling,te=m?m.nodeValue.length-s:0;ie;ie=ie.nextSibling){if(q=z(ie,ie.firstChild,0),q)return Pr(pe(q.line,q.ch-te),a);te+=ie.textContent.length}for(var ge=x.previousSibling,be=s;ge;ge=ge.previousSibling){if(q=z(ge,ge.firstChild,-1),q)return Pr(pe(q.line,q.ch+be),a);be+=ge.textContent.length}}var mn=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new et,this.hasSelection=!1,this.composing=null,this.resetting=!1};mn.prototype.init=function(e){var n=this,s=this,i=this.cm;this.createField(e);var a=this.textarea;e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),W&&(a.style.width="0px"),rt(a,"input",function(){S&&j>=9&&n.hasSelection&&(n.hasSelection=null),s.poll()}),rt(a,"paste",function(m){qt(i,m)||Hu(m,i)||(i.state.pasteIncoming=+new Date,s.fastPoll())});function h(m){if(!qt(i,m)){if(i.somethingSelected())$a({lineWise:!1,text:i.getSelections()});else if(i.options.lineWiseCopyCut){var x=Ol(i);$a({lineWise:!0,text:x.text}),m.type=="cut"?i.setSelections(x.ranges,null,Ct):(s.prevInput="",a.value=x.text.join(`
`),Z(a))}else return;m.type=="cut"&&(i.state.cutIncoming=+new Date)}}rt(a,"cut",h),rt(a,"copy",h),rt(e.scroller,"paste",function(m){if(!(qi(e,m)||qt(i,m))){if(!a.dispatchEvent){i.state.pasteIncoming=+new Date,s.focus();return}var x=new Event("paste");x.clipboardData=m.clipboardData,a.dispatchEvent(x)}}),rt(e.lineSpace,"selectstart",function(m){qi(e,m)||wn(m)}),rt(a,"compositionstart",function(){var m=i.getCursor("from");s.composing&&s.composing.range.clear(),s.composing={start:m,range:i.markText(m,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rt(a,"compositionend",function(){s.composing&&(s.poll(),s.composing.range.clear(),s.composing=null)})},mn.prototype.createField=function(e){this.wrapper=Dl(),this.textarea=this.wrapper.firstChild;var n=this.cm.options;Ml(this.textarea,n.spellcheck,n.autocorrect,n.autocapitalize)},mn.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},mn.prototype.prepareSelection=function(){var e=this.cm,n=e.display,s=e.doc,i=pl(e);if(e.options.moveInputWithCursor){var a=Cn(e,s.sel.primary().head,"div"),h=n.wrapper.getBoundingClientRect(),m=n.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(n.wrapper.clientHeight-10,a.top+m.top-h.top)),i.teLeft=Math.max(0,Math.min(n.wrapper.clientWidth-10,a.left+m.left-h.left))}return i},mn.prototype.showSelection=function(e){var n=this.cm,s=n.display;ye(s.cursorDiv,e.cursors),ye(s.selectionDiv,e.selection),e.teTop!=null&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},mn.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var n=this.cm;if(this.resetting=!0,n.somethingSelected()){this.prevInput="";var s=n.getSelection();this.textarea.value=s,n.state.focused&&Z(this.textarea),S&&j>=9&&(this.hasSelection=s)}else e||(this.prevInput=this.textarea.value="",S&&j>=9&&(this.hasSelection=null));this.resetting=!1}},mn.prototype.getField=function(){return this.textarea},mn.prototype.supportsTouch=function(){return!1},mn.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!H||E(qe(this.textarea))!=this.textarea))try{this.textarea.focus()}catch{}},mn.prototype.blur=function(){this.textarea.blur()},mn.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},mn.prototype.receivedFocus=function(){this.slowPoll()},mn.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},mn.prototype.fastPoll=function(){var e=!1,n=this;n.pollingFast=!0;function s(){var i=n.poll();!i&&!e?(e=!0,n.polling.set(60,s)):(n.pollingFast=!1,n.slowPoll())}n.polling.set(20,s)},mn.prototype.poll=function(){var e=this,n=this.cm,s=this.textarea,i=this.prevInput;if(this.contextMenuPending||this.resetting||!n.state.focused||gi(s)&&!i&&!this.composing||n.isReadOnly()||n.options.disableInput||n.state.keySeq)return!1;var a=s.value;if(a==i&&!n.somethingSelected())return!1;if(S&&j>=9&&this.hasSelection===a||V&&/[\uf700-\uf7ff]/.test(a))return n.display.input.reset(),!1;if(n.doc.sel==n.display.selForContextMenu){var h=a.charCodeAt(0);if(h==8203&&!i&&(i="​"),h==8666)return this.reset(),this.cm.execCommand("undo")}for(var m=0,x=Math.min(i.length,a.length);m<x&&i.charCodeAt(m)==a.charCodeAt(m);)++m;return Pn(n,function(){Rl(n,a.slice(m),i.length-m,null,e.composing?"*compose":null),a.length>1e3||a.indexOf(`
`)>-1?s.value=e.prevInput="":e.prevInput=a,e.composing&&(e.composing.range.clear(),e.composing.range=n.markText(e.composing.start,n.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},mn.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},mn.prototype.onKeyPress=function(){S&&j>=9&&(this.hasSelection=null),this.fastPoll()},mn.prototype.onContextMenu=function(e){var n=this,s=n.cm,i=s.display,a=n.textarea;n.contextMenuPending&&n.contextMenuPending();var h=gs(s,e),m=i.scroller.scrollTop;if(!h||D)return;var x=s.options.resetSelectionOnContextMenu;x&&s.doc.sel.contains(h)==-1&&hn(s,Hn)(s.doc,Fn(h),Ct);var w=a.style.cssText,_=n.wrapper.style.cssText,z=n.wrapper.offsetParent.getBoundingClientRect();n.wrapper.style.cssText="position: static",a.style.cssText=`position: absolute; width: 30px; height: 30px;
      top: `+(e.clientY-z.top-5)+"px; left: "+(e.clientX-z.left-5)+`px;
      z-index: 1000; background: `+(S?"rgba(255, 255, 255, .05)":"transparent")+`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;var q;N&&(q=a.ownerDocument.defaultView.scrollY),i.input.focus(),N&&a.ownerDocument.defaultView.scrollTo(null,q),i.input.reset(),s.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=te,i.selForContextMenu=s.doc.sel,clearTimeout(i.detectingSelectAll);function ie(){if(a.selectionStart!=null){var be=s.somethingSelected(),Ae="​"+(be?a.value:"");a.value="⇚",a.value=Ae,n.prevInput=be?"":"​",a.selectionStart=1,a.selectionEnd=Ae.length,i.selForContextMenu=s.doc.sel}}function te(){if(n.contextMenuPending==te&&(n.contextMenuPending=!1,n.wrapper.style.cssText=_,a.style.cssText=w,S&&j<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=m),a.selectionStart!=null)){(!S||S&&j<9)&&ie();var be=0,Ae=function(){i.selForContextMenu==s.doc.sel&&a.selectionStart==0&&a.selectionEnd>0&&n.prevInput=="​"?hn(s,Qi)(s):be++<10?i.detectingSelectAll=setTimeout(Ae,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(Ae,200)}}if(S&&j>=9&&ie(),Te){pr(e);var ge=function(){tn(window,"mouseup",ge),setTimeout(te,20)};rt(window,"mouseup",ge)}else setTimeout(te,50)},mn.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled=e=="nocursor",this.textarea.readOnly=!!e},mn.prototype.setUneditable=function(){},mn.prototype.needsContentAttribute=!1;function Qc(e,n){if(n=n?Be(n):{},n.value=e.value,!n.tabindex&&e.tabIndex&&(n.tabindex=e.tabIndex),!n.placeholder&&e.placeholder&&(n.placeholder=e.placeholder),n.autofocus==null){var s=E(qe(e));n.autofocus=s==e||e.getAttribute("autofocus")!=null&&s==document.body}function i(){e.value=x.getValue()}var a;if(e.form&&(rt(e.form,"submit",i),!n.leaveSubmitMethodAlone)){var h=e.form;a=h.submit;try{var m=h.submit=function(){i(),h.submit=a,h.submit(),h.submit=m}}catch{}}n.finishInit=function(w){w.save=i,w.getTextArea=function(){return e},w.toTextArea=function(){w.toTextArea=isNaN,i(),e.parentNode.removeChild(w.getWrapperElement()),e.style.display="",e.form&&(tn(e.form,"submit",i),!n.leaveSubmitMethodAlone&&typeof e.form.submit=="function"&&(e.form.submit=a))}},e.style.display="none";var x=en(function(w){return e.parentNode.insertBefore(w,e.nextSibling)},n);return x}function Uo(e){e.off=tn,e.on=rt,e.wheelEventPixels=Ss,e.Doc=Ot,e.splitLines=Tr,e.countColumn=Ke,e.findColumn=Ue,e.isWordChar=Ye,e.Pass=Yt,e.signal=It,e.Line=wi,e.changeEnd=Wn,e.scrollbarModel=Lc,e.Pos=pe,e.cmpPos=He,e.modes=Mi,e.mimeModes=Or,e.resolveMode=Di,e.getMode=Bt,e.modeExtensions=Mr,e.extendMode=us,e.copyState=Rt,e.startState=ri,e.innerMode=zi,e.commands=Ua,e.keyMap=Ai,e.keyName=Tu,e.isModifierKey=_u,e.lookupKey=ra,e.normalizeKeyMap=Dc,e.StringStream=Vt,e.SharedTextMarker=ea,e.TextMarker=pi,e.LineWidget=Li,e.e_preventDefault=wn,e.e_stopPropagation=ni,e.e_stop=pr,e.addClass=$,e.contains=R,e.rmClass=Ce,e.keyNames=Xr}vr(en),zl(en);var or="iter insert remove copy getEditor constructor".split(" ");for(var Wl in Ot.prototype)Ot.prototype.hasOwnProperty(Wl)&&$e(or,Wl)<0&&(en.prototype[Wl]=(function(e){return function(){return e.apply(this.doc,arguments)}})(Ot.prototype[Wl]));return En(Ot),en.inputStyles={textarea:mn,contenteditable:Mt},en.defineMode=function(e){!en.defaults.mode&&e!="null"&&(en.defaults.mode=e),Gn.apply(this,arguments)},en.defineMIME=yi,en.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),en.defineMIME("text/plain","null"),en.defineExtension=function(e,n){en.prototype[e]=n},en.defineDocExtension=function(e,n){Ot.prototype[e]=n},en.fromTextArea=Qc,Uo(en),en.version="5.65.21",en}))})(wd)),wd.exports}var Qx=ss();const Cf=Zf(Qx);var Tf={exports:{}},jf;function Zx(){return jf||(jf=1,(function(l,c){(function(p){p(ss())})(function(p){function g(j){return new RegExp("^(("+j.join(")|(")+"))\\b")}var y=g(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],k=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];p.registerHelper("hintWords","python",b.concat(k).concat(["exec","print"]));function C(j){return j.scopes[j.scopes.length-1]}p.defineMode("python",function(j,N){for(var F="error",A=N.delimiters||N.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,X=[N.singleOperators,N.doubleOperators,N.doubleDelimiters,N.tripleDelimiters,N.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],D=0;D<X.length;D++)X[D]||X.splice(D--,1);var Y=N.hangingIndent||j.indentUnit,J=b,M=k;N.extra_keywords!=null&&(J=J.concat(N.extra_keywords)),N.extra_builtins!=null&&(M=M.concat(N.extra_builtins));var W=!(N.version&&Number(N.version)<3);if(W){var B=N.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;J=J.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),M=M.concat(["ascii","bytes","exec","print"]);var H=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var B=N.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;J=J.concat(["exec","print"]),M=M.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var H=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var V=g(J),ce=g(M);function le(Q,K){var R=Q.sol()&&K.lastToken!="\\";if(R&&(K.indent=Q.indentation()),R&&C(K).type=="py"){var E=C(K).offset;if(Q.eatSpace()){var $=Q.indentation();return $>E?ae(K):$<E&&oe(Q,K)&&Q.peek()!="#"&&(K.errorToken=!0),null}else{var O=ve(Q,K);return E>0&&oe(Q,K)&&(O+=" "+F),O}}return ve(Q,K)}function ve(Q,K,R){if(Q.eatSpace())return null;if(!R&&Q.match(/^#.*/))return"comment";if(Q.match(/^[0-9\.]/,!1)){var E=!1;if(Q.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(E=!0),Q.match(/^[\d_]+\.\d*/)&&(E=!0),Q.match(/^\.\d+/)&&(E=!0),E)return Q.eat(/J/i),"number";var $=!1;if(Q.match(/^0x[0-9a-f_]+/i)&&($=!0),Q.match(/^0b[01_]+/i)&&($=!0),Q.match(/^0o[0-7_]+/i)&&($=!0),Q.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(Q.eat(/J/i),$=!0),Q.match(/^0(?![\dx])/i)&&($=!0),$)return Q.eat(/L/i),"number"}if(Q.match(H)){var O=Q.current().toLowerCase().indexOf("f")!==-1;return O?(K.tokenize=Fe(Q.current(),K.tokenize),K.tokenize(Q,K)):(K.tokenize=Te(Q.current(),K.tokenize),K.tokenize(Q,K))}for(var Z=0;Z<X.length;Z++)if(Q.match(X[Z]))return"operator";return Q.match(A)?"punctuation":K.lastToken=="."&&Q.match(B)?"property":Q.match(V)||Q.match(y)?"keyword":Q.match(ce)?"builtin":Q.match(/^(self|cls)\b/)?"variable-2":Q.match(B)?K.lastToken=="def"||K.lastToken=="class"?"def":"variable":(Q.next(),R?null:F)}function Fe(Q,K){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var R=Q.length==1,E="string";function $(Z){return function(Se,Ie){var qe=ve(Se,Ie,!0);return qe=="punctuation"&&(Se.current()=="{"?Ie.tokenize=$(Z+1):Se.current()=="}"&&(Z>1?Ie.tokenize=$(Z-1):Ie.tokenize=O)),qe}}function O(Z,Se){for(;!Z.eol();)if(Z.eatWhile(/[^'"\{\}\\]/),Z.eat("\\")){if(Z.next(),R&&Z.eol())return E}else{if(Z.match(Q))return Se.tokenize=K,E;if(Z.match("{{"))return E;if(Z.match("{",!1))return Se.tokenize=$(0),Z.current()?E:Se.tokenize(Z,Se);if(Z.match("}}"))return E;if(Z.match("}"))return F;Z.eat(/['"]/)}if(R){if(N.singleLineStringErrors)return F;Se.tokenize=K}return E}return O.isString=!0,O}function Te(Q,K){for(;"rubf".indexOf(Q.charAt(0).toLowerCase())>=0;)Q=Q.substr(1);var R=Q.length==1,E="string";function $(O,Z){for(;!O.eol();)if(O.eatWhile(/[^'"\\]/),O.eat("\\")){if(O.next(),R&&O.eol())return E}else{if(O.match(Q))return Z.tokenize=K,E;O.eat(/['"]/)}if(R){if(N.singleLineStringErrors)return F;Z.tokenize=K}return E}return $.isString=!0,$}function ae(Q){for(;C(Q).type!="py";)Q.scopes.pop();Q.scopes.push({offset:C(Q).offset+j.indentUnit,type:"py",align:null})}function Ce(Q,K,R){var E=Q.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:Q.column()+1;K.scopes.push({offset:K.indent+Y,type:R,align:E})}function oe(Q,K){for(var R=Q.indentation();K.scopes.length>1&&C(K).offset>R;){if(C(K).type!="py")return!0;K.scopes.pop()}return C(K).offset!=R}function ye(Q,K){Q.sol()&&(K.beginningOfLine=!0,K.dedent=!1);var R=K.tokenize(Q,K),E=Q.current();if(K.beginningOfLine&&E=="@")return Q.match(B,!1)?"meta":W?"operator":F;if(/\S/.test(E)&&(K.beginningOfLine=!1),(R=="variable"||R=="builtin")&&K.lastToken=="meta"&&(R="meta"),(E=="pass"||E=="return")&&(K.dedent=!0),E=="lambda"&&(K.lambda=!0),E==":"&&!K.lambda&&C(K).type=="py"&&Q.match(/^\s*(?:#|$)/,!1)&&ae(K),E.length==1&&!/string|comment/.test(R)){var $="[({".indexOf(E);if($!=-1&&Ce(Q,K,"])}".slice($,$+1)),$="])}".indexOf(E),$!=-1)if(C(K).type==E)K.indent=K.scopes.pop().offset-Y;else return F}return K.dedent&&Q.eol()&&C(K).type=="py"&&K.scopes.length>1&&K.scopes.pop(),R}var L={startState:function(Q){return{tokenize:le,scopes:[{offset:Q||0,type:"py",align:null}],indent:Q||0,lastToken:null,lambda:!1,dedent:0}},token:function(Q,K){var R=K.errorToken;R&&(K.errorToken=!1);var E=ye(Q,K);return E&&E!="comment"&&(K.lastToken=E=="keyword"||E=="punctuation"?Q.current():E),E=="punctuation"&&(E=null),Q.eol()&&K.lambda&&(K.lambda=!1),R?E+" "+F:E},indent:function(Q,K){if(Q.tokenize!=le)return Q.tokenize.isString?p.Pass:0;var R=C(Q),E=R.type==K.charAt(0)||R.type=="py"&&!Q.dedent&&/^(else:|elif |except |finally:)/.test(K);return R.align!=null?R.align-(E?1:0):R.offset-(E?Y:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:`'"`},lineComment:"#",fold:"indent"};return L}),p.defineMIME("text/x-python","python");var S=function(j){return j.split(" ")};p.defineMIME("text/x-cython",{name:"python",extra_keywords:S("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})()),Tf.exports}Zx();var Nf={exports:{}},Ef;function Nm(){return Ef||(Ef=1,(function(l,c){(function(p){p(ss())})(function(p){p.defineMode("javascript",function(g,y){var b=g.indentUnit,k=y.statementIndent,C=y.jsonld,S=y.json||C,j=y.trackScope!==!1,N=y.typescript,F=y.wordCharacters||/[\w$\xa1-\uffff]/,A=(function(){function T(Qt){return{type:Qt,style:"keyword"}}var U=T("keyword a"),me=T("keyword b"),Ne=T("keyword c"),pe=T("keyword d"),He=T("operator"),jt={type:"atom",style:"atom"};return{if:T("if"),while:U,with:U,else:me,do:me,try:me,finally:me,return:pe,break:pe,continue:pe,new:T("new"),delete:Ne,void:Ne,throw:Ne,debugger:T("debugger"),var:T("var"),const:T("var"),let:T("var"),function:T("function"),catch:T("catch"),for:T("for"),switch:T("switch"),case:T("case"),default:T("default"),in:He,typeof:He,instanceof:He,true:jt,false:jt,null:jt,undefined:jt,NaN:jt,Infinity:jt,this:T("this"),class:T("class"),super:T("atom"),yield:Ne,export:T("export"),import:T("import"),extends:Ne,await:Ne}})(),X=/[+\-*&%=<>!?|~^@]/,D=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function Y(T){for(var U=!1,me,Ne=!1;(me=T.next())!=null;){if(!U){if(me=="/"&&!Ne)return;me=="["?Ne=!0:Ne&&me=="]"&&(Ne=!1)}U=!U&&me=="\\"}}var J,M;function W(T,U,me){return J=T,M=me,U}function B(T,U){var me=T.next();if(me=='"'||me=="'")return U.tokenize=H(me),U.tokenize(T,U);if(me=="."&&T.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return W("number","number");if(me=="."&&T.match(".."))return W("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(me))return W(me);if(me=="="&&T.eat(">"))return W("=>","operator");if(me=="0"&&T.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return W("number","number");if(/\d/.test(me))return T.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),W("number","number");if(me=="/")return T.eat("*")?(U.tokenize=V,V(T,U)):T.eat("/")?(T.skipToEnd(),W("comment","comment")):Yn(T,U,1)?(Y(T),T.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),W("regexp","string-2")):(T.eat("="),W("operator","operator",T.current()));if(me=="`")return U.tokenize=ce,ce(T,U);if(me=="#"&&T.peek()=="!")return T.skipToEnd(),W("meta","meta");if(me=="#"&&T.eatWhile(F))return W("variable","property");if(me=="<"&&T.match("!--")||me=="-"&&T.match("->")&&!/\S/.test(T.string.slice(0,T.start)))return T.skipToEnd(),W("comment","comment");if(X.test(me))return(me!=">"||!U.lexical||U.lexical.type!=">")&&(T.eat("=")?(me=="!"||me=="=")&&T.eat("="):/[<>*+\-|&?]/.test(me)&&(T.eat(me),me==">"&&T.eat(me))),me=="?"&&T.eat(".")?W("."):W("operator","operator",T.current());if(F.test(me)){T.eatWhile(F);var Ne=T.current();if(U.lastType!="."){if(A.propertyIsEnumerable(Ne)){var pe=A[Ne];return W(pe.type,pe.style,Ne)}if(Ne=="async"&&T.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return W("async","keyword",Ne)}return W("variable","variable",Ne)}}function H(T){return function(U,me){var Ne=!1,pe;if(C&&U.peek()=="@"&&U.match(D))return me.tokenize=B,W("jsonld-keyword","meta");for(;(pe=U.next())!=null&&!(pe==T&&!Ne);)Ne=!Ne&&pe=="\\";return Ne||(me.tokenize=B),W("string","string")}}function V(T,U){for(var me=!1,Ne;Ne=T.next();){if(Ne=="/"&&me){U.tokenize=B;break}me=Ne=="*"}return W("comment","comment")}function ce(T,U){for(var me=!1,Ne;(Ne=T.next())!=null;){if(!me&&(Ne=="`"||Ne=="$"&&T.eat("{"))){U.tokenize=B;break}me=!me&&Ne=="\\"}return W("quasi","string-2",T.current())}var le="([{}])";function ve(T,U){U.fatArrowAt&&(U.fatArrowAt=null);var me=T.string.indexOf("=>",T.start);if(!(me<0)){if(N){var Ne=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(T.string.slice(T.start,me));Ne&&(me=Ne.index)}for(var pe=0,He=!1,jt=me-1;jt>=0;--jt){var Qt=T.string.charAt(jt),Sn=le.indexOf(Qt);if(Sn>=0&&Sn<3){if(!pe){++jt;break}if(--pe==0){Qt=="("&&(He=!0);break}}else if(Sn>=3&&Sn<6)++pe;else if(F.test(Qt))He=!0;else if(/["'\/`]/.test(Qt))for(;;--jt){if(jt==0)return;var Kr=T.string.charAt(jt-1);if(Kr==Qt&&T.string.charAt(jt-2)!="\\"){jt--;break}}else if(He&&!pe){++jt;break}}He&&!pe&&(U.fatArrowAt=jt)}}var Fe={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function Te(T,U,me,Ne,pe,He){this.indented=T,this.column=U,this.type=me,this.prev=pe,this.info=He,Ne!=null&&(this.align=Ne)}function ae(T,U){if(!j)return!1;for(var me=T.localVars;me;me=me.next)if(me.name==U)return!0;for(var Ne=T.context;Ne;Ne=Ne.prev)for(var me=Ne.vars;me;me=me.next)if(me.name==U)return!0}function Ce(T,U,me,Ne,pe){var He=T.cc;for(oe.state=T,oe.stream=pe,oe.marked=null,oe.cc=He,oe.style=U,T.lexical.hasOwnProperty("align")||(T.lexical.align=!0);;){var jt=He.length?He.pop():S?$e:Ke;if(jt(me,Ne)){for(;He.length&&He[He.length-1].lex;)He.pop()();return oe.marked?oe.marked:me=="variable"&&ae(T,Ne)?"variable-2":U}}}var oe={state:null,marked:null,cc:null};function ye(){for(var T=arguments.length-1;T>=0;T--)oe.cc.push(arguments[T])}function L(){return ye.apply(null,arguments),!0}function Q(T,U){for(var me=U;me;me=me.next)if(me.name==T)return!0;return!1}function K(T){var U=oe.state;if(oe.marked="def",!!j){if(U.context){if(U.lexical.info=="var"&&U.context&&U.context.block){var me=R(T,U.context);if(me!=null){U.context=me;return}}else if(!Q(T,U.localVars)){U.localVars=new O(T,U.localVars);return}}y.globalVars&&!Q(T,U.globalVars)&&(U.globalVars=new O(T,U.globalVars))}}function R(T,U){if(U)if(U.block){var me=R(T,U.prev);return me?me==U.prev?U:new $(me,U.vars,!0):null}else return Q(T,U.vars)?U:new $(U.prev,new O(T,U.vars),!1);else return null}function E(T){return T=="public"||T=="private"||T=="protected"||T=="abstract"||T=="readonly"}function $(T,U,me){this.prev=T,this.vars=U,this.block=me}function O(T,U){this.name=T,this.next=U}var Z=new O("this",new O("arguments",null));function Se(){oe.state.context=new $(oe.state.context,oe.state.localVars,!1),oe.state.localVars=Z}function Ie(){oe.state.context=new $(oe.state.context,oe.state.localVars,!0),oe.state.localVars=null}Se.lex=Ie.lex=!0;function qe(){oe.state.localVars=oe.state.context.vars,oe.state.context=oe.state.context.prev}qe.lex=!0;function Oe(T,U){var me=function(){var Ne=oe.state,pe=Ne.indented;if(Ne.lexical.type=="stat")pe=Ne.lexical.indented;else for(var He=Ne.lexical;He&&He.type==")"&&He.align;He=He.prev)pe=He.indented;Ne.lexical=new Te(pe,oe.stream.column(),T,null,Ne.lexical,U)};return me.lex=!0,me}function ke(){var T=oe.state;T.lexical.prev&&(T.lexical.type==")"&&(T.indented=T.lexical.indented),T.lexical=T.lexical.prev)}ke.lex=!0;function Be(T){function U(me){return me==T?L():T==";"||me=="}"||me==")"||me=="]"?ye():L(U)}return U}function Ke(T,U){return T=="var"?L(Oe("vardef",U),ni,Be(";"),ke):T=="keyword a"?L(Oe("form"),Yt,Ke,ke):T=="keyword b"?L(Oe("form"),Ke,ke):T=="keyword d"?oe.stream.match(/^\s*$/,!1)?L():L(Oe("stat"),xt,Be(";"),ke):T=="debugger"?L(Be(";")):T=="{"?L(Oe("}"),Ie,nr,ke,qe):T==";"?L():T=="if"?(oe.state.lexical.info=="else"&&oe.state.cc[oe.state.cc.length-1]==ke&&oe.state.cc.pop()(),L(Oe("form"),Yt,Ke,ke,kn)):T=="function"?L(Tr):T=="for"?L(Oe("form"),Ie,Cr,Ke,qe,ke):T=="class"||N&&U=="interface"?(oe.marked="keyword",L(Oe("form",T=="class"?T:U),Mi,ke)):T=="variable"?N&&U=="declare"?(oe.marked="keyword",L(Ke)):N&&(U=="module"||U=="enum"||U=="type")&&oe.stream.match(/^\s*\w/,!1)?(oe.marked="keyword",U=="enum"?L(Je):U=="type"?L(os,Be("operator"),bt,Be(";")):L(Oe("form"),On,Be("{"),Oe("}"),nr,ke,ke)):N&&U=="namespace"?(oe.marked="keyword",L(Oe("form"),$e,Ke,ke)):N&&U=="abstract"?(oe.marked="keyword",L(Ke)):L(Oe("stat"),kt):T=="switch"?L(Oe("form"),Yt,Be("{"),Oe("}","switch"),Ie,nr,ke,ke,qe):T=="case"?L($e,Be(":")):T=="default"?L(Be(":")):T=="catch"?L(Oe("form"),Se,et,Ke,ke,qe):T=="export"?L(Oe("stat"),Di,ke):T=="import"?L(Oe("stat"),Mr,ke):T=="async"?L(Ke):U=="@"?L($e,Ke):ye(Oe("stat"),$e,Be(";"),ke)}function et(T){if(T=="(")return L(Mn,Be(")"))}function $e(T,U){return Ct(T,U,!1)}function Ft(T,U){return Ct(T,U,!0)}function Yt(T){return T!="("?ye():L(Oe(")"),xt,Be(")"),ke)}function Ct(T,U,me){if(oe.state.fatArrowAt==oe.stream.start){var Ne=me?ut:Qe;if(T=="(")return L(Se,Oe(")"),pt(Mn,")"),ke,Be("=>"),Ne,qe);if(T=="variable")return ye(Se,On,Be("=>"),Ne,qe)}var pe=me?Ue:tt;return Fe.hasOwnProperty(T)?L(pe):T=="function"?L(Tr,pe):T=="class"||N&&U=="interface"?(oe.marked="keyword",L(Oe("form"),ls,ke)):T=="keyword c"||T=="async"?L(me?Ft:$e):T=="("?L(Oe(")"),xt,Be(")"),ke,pe):T=="operator"||T=="spread"?L(me?Ft:$e):T=="["?L(Oe("]"),Vt,ke,pe):T=="{"?Xt(at,"}",null,pe):T=="quasi"?ye(vt,pe):T=="new"?L(se(me)):L()}function xt(T){return T.match(/[;\}\)\],]/)?ye():ye($e)}function tt(T,U){return T==","?L(xt):Ue(T,U,!1)}function Ue(T,U,me){var Ne=me==!1?tt:Ue,pe=me==!1?$e:Ft;if(T=="=>")return L(Se,me?ut:Qe,qe);if(T=="operator")return/\+\+|--/.test(U)||N&&U=="!"?L(Ne):N&&U=="<"&&oe.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?L(Oe(">"),pt(bt,">"),ke,Ne):U=="?"?L($e,Be(":"),pe):L(pe);if(T=="quasi")return ye(vt,Ne);if(T!=";"){if(T=="(")return Xt(Ft,")","call",Ne);if(T==".")return L(Ye,Ne);if(T=="[")return L(Oe("]"),xt,Be("]"),ke,Ne);if(N&&U=="as")return oe.marked="keyword",L(bt,Ne);if(T=="regexp")return oe.state.lastType=oe.marked="operator",oe.stream.backUp(oe.stream.pos-oe.stream.start-1),L(pe)}}function vt(T,U){return T!="quasi"?ye():U.slice(U.length-2)!="${"?L(vt):L(xt,yt)}function yt(T){if(T=="}")return oe.marked="string-2",oe.state.tokenize=ce,L(vt)}function Qe(T){return ve(oe.stream,oe.state),ye(T=="{"?Ke:$e)}function ut(T){return ve(oe.stream,oe.state),ye(T=="{"?Ke:Ft)}function se(T){return function(U){return U=="."?L(T?he:je):U=="variable"&&N?L(gn,T?Ue:tt):ye(T?Ft:$e)}}function je(T,U){if(U=="target")return oe.marked="keyword",L(tt)}function he(T,U){if(U=="target")return oe.marked="keyword",L(Ue)}function kt(T){return T==":"?L(ke,Ke):ye(tt,Be(";"),ke)}function Ye(T){if(T=="variable")return oe.marked="property",L()}function at(T,U){if(T=="async")return oe.marked="property",L(at);if(T=="variable"||oe.style=="keyword"){if(oe.marked="property",U=="get"||U=="set")return L(Ze);var me;return N&&oe.state.fatArrowAt==oe.stream.start&&(me=oe.stream.match(/^\s*:\s*/,!1))&&(oe.state.fatArrowAt=oe.stream.pos+me[0].length),L(mt)}else{if(T=="number"||T=="string")return oe.marked=C?"property":oe.style+" property",L(mt);if(T=="jsonld-keyword")return L(mt);if(N&&E(U))return oe.marked="keyword",L(at);if(T=="[")return L($e,Sr,Be("]"),mt);if(T=="spread")return L(Ft,mt);if(U=="*")return oe.marked="keyword",L(at);if(T==":")return ye(mt)}}function Ze(T){return T!="variable"?ye(mt):(oe.marked="property",L(Tr))}function mt(T){if(T==":")return L(Ft);if(T=="(")return ye(Tr)}function pt(T,U,me){function Ne(pe,He){if(me?me.indexOf(pe)>-1:pe==","){var jt=oe.state.lexical;return jt.info=="call"&&(jt.pos=(jt.pos||0)+1),L(function(Qt,Sn){return Qt==U||Sn==U?ye():ye(T)},Ne)}return pe==U||He==U?L():me&&me.indexOf(";")>-1?ye(T):L(Be(U))}return function(pe,He){return pe==U||He==U?L():ye(T,Ne)}}function Xt(T,U,me){for(var Ne=3;Ne<arguments.length;Ne++)oe.cc.push(arguments[Ne]);return L(Oe(U,me),pt(T,U),ke)}function nr(T){return T=="}"?L():ye(Ke,nr)}function Sr(T,U){if(N){if(T==":")return L(bt);if(U=="?")return L(Sr)}}function Rr(T,U){if(N&&(T==":"||U=="in"))return L(bt)}function Br(T){if(N&&T==":")return oe.stream.match(/^\s*\w+\s+is\b/,!1)?L($e,Ur,bt):L(bt)}function Ur(T,U){if(U=="is")return oe.marked="keyword",L()}function bt(T,U){if(U=="keyof"||U=="typeof"||U=="infer"||U=="readonly")return oe.marked="keyword",L(U=="typeof"?Ft:bt);if(T=="variable"||U=="void")return oe.marked="type",L(bn);if(U=="|"||U=="&")return L(bt);if(T=="string"||T=="number"||T=="atom")return L(bn);if(T=="[")return L(Oe("]"),pt(bt,"]",","),ke,bn);if(T=="{")return L(Oe("}"),rt,ke,bn);if(T=="(")return L(pt(qt,")"),fi,bn);if(T=="<")return L(pt(bt,">"),bt);if(T=="quasi")return ye(tn,bn)}function fi(T){if(T=="=>")return L(bt)}function rt(T){return T.match(/[\}\)\]]/)?L():T==","||T==";"?L(rt):ye(_r,rt)}function _r(T,U){if(T=="variable"||oe.style=="keyword")return oe.marked="property",L(_r);if(U=="?"||T=="number"||T=="string")return L(_r);if(T==":")return L(bt);if(T=="[")return L(Be("variable"),Rr,Be("]"),_r);if(T=="(")return ye(gi,_r);if(!T.match(/[;\}\)\],]/))return L()}function tn(T,U){return T!="quasi"?ye():U.slice(U.length-2)!="${"?L(tn):L(bt,It)}function It(T){if(T=="}")return oe.marked="string-2",oe.state.tokenize=ce,L(tn)}function qt(T,U){return T=="variable"&&oe.stream.match(/^\s*[?:]/,!1)||U=="?"?L(qt):T==":"?L(bt):T=="spread"?L(qt):ye(bt)}function bn(T,U){if(U=="<")return L(Oe(">"),pt(bt,">"),ke,bn);if(U=="|"||T=="."||U=="&")return L(bt);if(T=="[")return L(bt,Be("]"),bn);if(U=="extends"||U=="implements")return oe.marked="keyword",L(bt);if(U=="?")return L(bt,Be(":"),bt)}function gn(T,U){if(U=="<")return L(Oe(">"),pt(bt,">"),ke,bn)}function En(){return ye(bt,wn)}function wn(T,U){if(U=="=")return L(bt)}function ni(T,U){return U=="enum"?(oe.marked="keyword",L(Je)):ye(On,Sr,Ln,as)}function On(T,U){if(N&&E(U))return oe.marked="keyword",L(On);if(T=="variable")return K(U),L();if(T=="spread")return L(On);if(T=="[")return Xt(mi,"]");if(T=="{")return Xt(pr,"}")}function pr(T,U){return T=="variable"&&!oe.stream.match(/^\s*:/,!1)?(K(U),L(Ln)):(T=="variable"&&(oe.marked="property"),T=="spread"?L(On):T=="}"?ye():T=="["?L($e,Be("]"),Be(":"),pr):L(Be(":"),On,Ln))}function mi(){return ye(On,Ln)}function Ln(T,U){if(U=="=")return L(Ft)}function as(T){if(T==",")return L(ni)}function kn(T,U){if(T=="keyword b"&&U=="else")return L(Oe("form","else"),Ke,ke)}function Cr(T,U){if(U=="await")return L(Cr);if(T=="(")return L(Oe(")"),qr,ke)}function qr(T){return T=="var"?L(ni,Ir):T=="variable"?L(Ir):ye(Ir)}function Ir(T,U){return T==")"?L():T==";"?L(Ir):U=="in"||U=="of"?(oe.marked="keyword",L($e,Ir)):ye($e,Ir)}function Tr(T,U){if(U=="*")return oe.marked="keyword",L(Tr);if(T=="variable")return K(U),L(Tr);if(T=="(")return L(Se,Oe(")"),pt(Mn,")"),ke,Br,Ke,qe);if(N&&U=="<")return L(Oe(">"),pt(En,">"),ke,Tr)}function gi(T,U){if(U=="*")return oe.marked="keyword",L(gi);if(T=="variable")return K(U),L(gi);if(T=="(")return L(Se,Oe(")"),pt(Mn,")"),ke,Br,qe);if(N&&U=="<")return L(Oe(">"),pt(En,">"),ke,gi)}function os(T,U){if(T=="keyword"||T=="variable")return oe.marked="type",L(os);if(U=="<")return L(Oe(">"),pt(En,">"),ke)}function Mn(T,U){return U=="@"&&L($e,Mn),T=="spread"?L(Mn):N&&E(U)?(oe.marked="keyword",L(Mn)):N&&T=="this"?L(Sr,Ln):ye(On,Sr,Ln)}function ls(T,U){return T=="variable"?Mi(T,U):Or(T,U)}function Mi(T,U){if(T=="variable")return K(U),L(Or)}function Or(T,U){if(U=="<")return L(Oe(">"),pt(En,">"),ke,Or);if(U=="extends"||U=="implements"||N&&T==",")return U=="implements"&&(oe.marked="keyword"),L(N?bt:$e,Or);if(T=="{")return L(Oe("}"),Gn,ke)}function Gn(T,U){if(T=="async"||T=="variable"&&(U=="static"||U=="get"||U=="set"||N&&E(U))&&oe.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return oe.marked="keyword",L(Gn);if(T=="variable"||oe.style=="keyword")return oe.marked="property",L(yi,Gn);if(T=="number"||T=="string")return L(yi,Gn);if(T=="[")return L($e,Sr,Be("]"),yi,Gn);if(U=="*")return oe.marked="keyword",L(Gn);if(N&&T=="(")return ye(gi,Gn);if(T==";"||T==",")return L(Gn);if(T=="}")return L();if(U=="@")return L($e,Gn)}function yi(T,U){if(U=="!"||U=="?")return L(yi);if(T==":")return L(bt,Ln);if(U=="=")return L(Ft);var me=oe.state.lexical.prev,Ne=me&&me.info=="interface";return ye(Ne?gi:Tr)}function Di(T,U){return U=="*"?(oe.marked="keyword",L(ri,Be(";"))):U=="default"?(oe.marked="keyword",L($e,Be(";"))):T=="{"?L(pt(Bt,"}"),ri,Be(";")):ye(Ke)}function Bt(T,U){if(U=="as")return oe.marked="keyword",L(Be("variable"));if(T=="variable")return ye(Ft,Bt)}function Mr(T){return T=="string"?L():T=="("?ye($e):T=="."?ye(tt):ye(us,Rt,ri)}function us(T,U){return T=="{"?Xt(us,"}"):(T=="variable"&&K(U),U=="*"&&(oe.marked="keyword"),L(zi))}function Rt(T){if(T==",")return L(us,Rt)}function zi(T,U){if(U=="as")return oe.marked="keyword",L(us)}function ri(T,U){if(U=="from")return oe.marked="keyword",L($e)}function Vt(T){return T=="]"?L():ye(pt(Ft,"]"))}function Je(){return ye(Oe("form"),On,Be("{"),Oe("}"),pt(ii,"}"),ke,ke)}function ii(){return ye(On,Ln)}function cs(T,U){return T.lastType=="operator"||T.lastType==","||X.test(U.charAt(0))||/[,.]/.test(U.charAt(0))}function Yn(T,U,me){return U.tokenize==B&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(U.lastType)||U.lastType=="quasi"&&/\{\s*$/.test(T.string.slice(0,T.pos-(me||0)))}return{startState:function(T){var U={tokenize:B,lastType:"sof",cc:[],lexical:new Te((T||0)-b,0,"block",!1),localVars:y.localVars,context:y.localVars&&new $(null,null,!1),indented:T||0};return y.globalVars&&typeof y.globalVars=="object"&&(U.globalVars=y.globalVars),U},token:function(T,U){if(T.sol()&&(U.lexical.hasOwnProperty("align")||(U.lexical.align=!1),U.indented=T.indentation(),ve(T,U)),U.tokenize!=V&&T.eatSpace())return null;var me=U.tokenize(T,U);return J=="comment"?me:(U.lastType=J=="operator"&&(M=="++"||M=="--")?"incdec":J,Ce(U,me,J,M,T))},indent:function(T,U){if(T.tokenize==V||T.tokenize==ce)return p.Pass;if(T.tokenize!=B)return 0;var me=U&&U.charAt(0),Ne=T.lexical,pe;if(!/^\s*else\b/.test(U))for(var He=T.cc.length-1;He>=0;--He){var jt=T.cc[He];if(jt==ke)Ne=Ne.prev;else if(jt!=kn&&jt!=qe)break}for(;(Ne.type=="stat"||Ne.type=="form")&&(me=="}"||(pe=T.cc[T.cc.length-1])&&(pe==tt||pe==Ue)&&!/^[,\.=+\-*:?[\(]/.test(U));)Ne=Ne.prev;k&&Ne.type==")"&&Ne.prev.type=="stat"&&(Ne=Ne.prev);var Qt=Ne.type,Sn=me==Qt;return Qt=="vardef"?Ne.indented+(T.lastType=="operator"||T.lastType==","?Ne.info.length+1:0):Qt=="form"&&me=="{"?Ne.indented:Qt=="form"?Ne.indented+b:Qt=="stat"?Ne.indented+(cs(T,U)?k||b:0):Ne.info=="switch"&&!Sn&&y.doubleIndentSwitch!=!1?Ne.indented+(/^(?:case|default)\b/.test(U)?b:2*b):Ne.align?Ne.column+(Sn?0:1):Ne.indented+(Sn?0:b)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:S?null:"/*",blockCommentEnd:S?null:"*/",blockCommentContinue:S?null:" * ",lineComment:S?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:S?"json":"javascript",jsonldMode:C,jsonMode:S,expressionAllowed:Yn,skipExpression:function(T){Ce(T,"atom","atom","true",new p.StringStream("",2,null))}}}),p.registerHelper("wordChars","javascript",/[\w$]/),p.defineMIME("text/javascript","javascript"),p.defineMIME("text/ecmascript","javascript"),p.defineMIME("application/javascript","javascript"),p.defineMIME("application/x-javascript","javascript"),p.defineMIME("application/ecmascript","javascript"),p.defineMIME("application/json",{name:"javascript",json:!0}),p.defineMIME("application/x-json",{name:"javascript",json:!0}),p.defineMIME("application/manifest+json",{name:"javascript",json:!0}),p.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),p.defineMIME("text/typescript",{name:"javascript",typescript:!0}),p.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})()),Nf.exports}Nm();var Lf={exports:{}},Pf;function eb(){return Pf||(Pf=1,(function(l,c){(function(p){p(ss())})(function(p){function g(R,E,$,O,Z,Se){this.indented=R,this.column=E,this.type=$,this.info=O,this.align=Z,this.prev=Se}function y(R,E,$,O){var Z=R.indented;return R.context&&R.context.type=="statement"&&$!="statement"&&(Z=R.context.indented),R.context=new g(Z,E,$,O,null,R.context)}function b(R){var E=R.context.type;return(E==")"||E=="]"||E=="}")&&(R.indented=R.context.indented),R.context=R.context.prev}function k(R,E,$){if(E.prevToken=="variable"||E.prevToken=="type"||/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(R.string.slice(0,$))||E.typeAtEndOfLine&&R.column()==R.indentation())return!0}function C(R){for(;;){if(!R||R.type=="top")return!0;if(R.type=="}"&&R.prev.info!="namespace")return!1;R=R.prev}}p.defineMode("clike",function(R,E){var $=R.indentUnit,O=E.statementIndentUnit||$,Z=E.dontAlignCalls,Se=E.keywords||{},Ie=E.types||{},qe=E.builtin||{},Oe=E.blockKeywords||{},ke=E.defKeywords||{},Be=E.atoms||{},Ke=E.hooks||{},et=E.multiLineStrings,$e=E.indentStatements!==!1,Ft=E.indentSwitch!==!1,Yt=E.namespaceSeparator,Ct=E.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,xt=E.numberStart||/[\d\.]/,tt=E.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,Ue=E.isOperatorChar||/[+\-*&%=<>!?|\/]/,vt=E.isIdentifierChar||/[\w\$_\xa1-\uffff]/,yt=E.isReservedIdentifier||!1,Qe,ut;function se(Ye,at){var Ze=Ye.next();if(Ke[Ze]){var mt=Ke[Ze](Ye,at);if(mt!==!1)return mt}if(Ze=='"'||Ze=="'")return at.tokenize=je(Ze),at.tokenize(Ye,at);if(xt.test(Ze)){if(Ye.backUp(1),Ye.match(tt))return"number";Ye.next()}if(Ct.test(Ze))return Qe=Ze,null;if(Ze=="/"){if(Ye.eat("*"))return at.tokenize=he,he(Ye,at);if(Ye.eat("/"))return Ye.skipToEnd(),"comment"}if(Ue.test(Ze)){for(;!Ye.match(/^\/[\/*]/,!1)&&Ye.eat(Ue););return"operator"}if(Ye.eatWhile(vt),Yt)for(;Ye.match(Yt);)Ye.eatWhile(vt);var pt=Ye.current();return j(Se,pt)?(j(Oe,pt)&&(Qe="newstatement"),j(ke,pt)&&(ut=!0),"keyword"):j(Ie,pt)?"type":j(qe,pt)||yt&&yt(pt)?(j(Oe,pt)&&(Qe="newstatement"),"builtin"):j(Be,pt)?"atom":"variable"}function je(Ye){return function(at,Ze){for(var mt=!1,pt,Xt=!1;(pt=at.next())!=null;){if(pt==Ye&&!mt){Xt=!0;break}mt=!mt&&pt=="\\"}return(Xt||!(mt||et))&&(Ze.tokenize=null),"string"}}function he(Ye,at){for(var Ze=!1,mt;mt=Ye.next();){if(mt=="/"&&Ze){at.tokenize=null;break}Ze=mt=="*"}return"comment"}function kt(Ye,at){E.typeFirstDefinitions&&Ye.eol()&&C(at.context)&&(at.typeAtEndOfLine=k(Ye,at,Ye.pos))}return{startState:function(Ye){return{tokenize:null,context:new g((Ye||0)-$,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(Ye,at){var Ze=at.context;if(Ye.sol()&&(Ze.align==null&&(Ze.align=!1),at.indented=Ye.indentation(),at.startOfLine=!0),Ye.eatSpace())return kt(Ye,at),null;Qe=ut=null;var mt=(at.tokenize||se)(Ye,at);if(mt=="comment"||mt=="meta")return mt;if(Ze.align==null&&(Ze.align=!0),Qe==";"||Qe==":"||Qe==","&&Ye.match(/^\s*(?:\/\/.*)?$/,!1))for(;at.context.type=="statement";)b(at);else if(Qe=="{")y(at,Ye.column(),"}");else if(Qe=="[")y(at,Ye.column(),"]");else if(Qe=="(")y(at,Ye.column(),")");else if(Qe=="}"){for(;Ze.type=="statement";)Ze=b(at);for(Ze.type=="}"&&(Ze=b(at));Ze.type=="statement";)Ze=b(at)}else Qe==Ze.type?b(at):$e&&((Ze.type=="}"||Ze.type=="top")&&Qe!=";"||Ze.type=="statement"&&Qe=="newstatement")&&y(at,Ye.column(),"statement",Ye.current());if(mt=="variable"&&(at.prevToken=="def"||E.typeFirstDefinitions&&k(Ye,at,Ye.start)&&C(at.context)&&Ye.match(/^\s*\(/,!1))&&(mt="def"),Ke.token){var pt=Ke.token(Ye,at,mt);pt!==void 0&&(mt=pt)}return mt=="def"&&E.styleDefs===!1&&(mt="variable"),at.startOfLine=!1,at.prevToken=ut?"def":mt||Qe,kt(Ye,at),mt},indent:function(Ye,at){if(Ye.tokenize!=se&&Ye.tokenize!=null||Ye.typeAtEndOfLine&&C(Ye.context))return p.Pass;var Ze=Ye.context,mt=at&&at.charAt(0),pt=mt==Ze.type;if(Ze.type=="statement"&&mt=="}"&&(Ze=Ze.prev),E.dontIndentStatements)for(;Ze.type=="statement"&&E.dontIndentStatements.test(Ze.info);)Ze=Ze.prev;if(Ke.indent){var Xt=Ke.indent(Ye,Ze,at,$);if(typeof Xt=="number")return Xt}var nr=Ze.prev&&Ze.prev.info=="switch";if(E.allmanIndentation&&/[{(]/.test(mt)){for(;Ze.type!="top"&&Ze.type!="}";)Ze=Ze.prev;return Ze.indented}return Ze.type=="statement"?Ze.indented+(mt=="{"?0:O):Ze.align&&(!Z||Ze.type!=")")?Ze.column+(pt?0:1):Ze.type==")"&&!pt?Ze.indented+O:Ze.indented+(pt?0:$)+(!pt&&nr&&!/^(?:case|default)\b/.test(at)?$:0)},electricInput:Ft?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});function S(R){for(var E={},$=R.split(" "),O=0;O<$.length;++O)E[$[O]]=!0;return E}function j(R,E){return typeof R=="function"?R(E):R.propertyIsEnumerable(E)}var N="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",F="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",A="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",X="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",D=S("int long char short double float unsigned signed void bool"),Y=S("SEL instancetype id Class Protocol BOOL");function J(R){return j(D,R)||/.+_t$/.test(R)}function M(R){return J(R)||j(Y,R)}var W="case do else for if switch while struct enum union",B="struct enum union";function H(R,E){if(!E.startOfLine)return!1;for(var $,O=null;$=R.peek();){if($=="\\"&&R.match(/^.$/)){O=H;break}else if($=="/"&&R.match(/^\/[\/\*]/,!1))break;R.next()}return E.tokenize=O,"meta"}function V(R,E){return E.prevToken=="type"?"type":!1}function ce(R){return!R||R.length<2||R[0]!="_"?!1:R[1]=="_"||R[1]!==R[1].toLowerCase()}function le(R){return R.eatWhile(/[\w\.']/),"number"}function ve(R,E){if(R.backUp(1),R.match(/^(?:R|u8R|uR|UR|LR)/)){var $=R.match(/^"([^\s\\()]{0,16})\(/);return $?(E.cpp11RawStringDelim=$[1],E.tokenize=ae,ae(R,E)):!1}return R.match(/^(?:u8|u|U|L)/)?R.match(/^["']/,!1)?"string":!1:(R.next(),!1)}function Fe(R){var E=/(\w+)::~?(\w+)$/.exec(R);return E&&E[1]==E[2]}function Te(R,E){for(var $;($=R.next())!=null;)if($=='"'&&!R.eat('"')){E.tokenize=null;break}return"string"}function ae(R,E){var $=E.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),O=R.match(new RegExp(".*?\\)"+$+'"'));return O?E.tokenize=null:R.skipToEnd(),"string"}function Ce(R,E){typeof R=="string"&&(R=[R]);var $=[];function O(Se){if(Se)for(var Ie in Se)Se.hasOwnProperty(Ie)&&$.push(Ie)}O(E.keywords),O(E.types),O(E.builtin),O(E.atoms),$.length&&(E.helperType=R[0],p.registerHelper("hintWords",R[0],$));for(var Z=0;Z<R.length;++Z)p.defineMIME(R[Z],E)}Ce(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:S(N),types:J,blockKeywords:S(W),defKeywords:S(B),typeFirstDefinitions:!0,atoms:S("NULL true false"),isReservedIdentifier:ce,hooks:{"#":H,"*":V},modeProps:{fold:["brace","include"]}}),Ce(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:S(N+" "+F),types:J,blockKeywords:S(W+" class try catch"),defKeywords:S(B+" class namespace"),typeFirstDefinitions:!0,atoms:S("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:ce,hooks:{"#":H,"*":V,u:ve,U:ve,L:ve,R:ve,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(R,E,$){if($=="variable"&&R.peek()=="("&&(E.prevToken==";"||E.prevToken==null||E.prevToken=="}")&&Fe(R.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-java",{name:"clike",keywords:S("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:S("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:S("catch class do else finally for if switch try while"),defKeywords:S("class interface enum @interface"),typeFirstDefinitions:!0,atoms:S("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(R){return R.match("interface",!1)?!1:(R.eatWhile(/[\w\$_]/),"meta")},'"':function(R,E){return R.match(/""$/)?(E.tokenize=oe,E.tokenize(R,E)):!1}},modeProps:{fold:["brace","import"]}}),Ce("text/x-csharp",{name:"clike",keywords:S("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:S("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:S("catch class do else finally for foreach if struct switch try while"),defKeywords:S("class interface namespace record struct var"),typeFirstDefinitions:!0,atoms:S("true false null"),hooks:{"@":function(R,E){return R.eat('"')?(E.tokenize=Te,Te(R,E)):(R.eatWhile(/[\w\$_]/),"meta")}}});function oe(R,E){for(var $=!1;!R.eol();){if(!$&&R.match('"""')){E.tokenize=null;break}$=R.next()=="\\"&&!$}return"string"}function ye(R){return function(E,$){for(var O;O=E.next();)if(O=="*"&&E.eat("/"))if(R==1){$.tokenize=null;break}else return $.tokenize=ye(R-1),$.tokenize(E,$);else if(O=="/"&&E.eat("*"))return $.tokenize=ye(R+1),$.tokenize(E,$);return"comment"}}Ce("text/x-scala",{name:"clike",keywords:S("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:S("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:S("catch class enum do else finally for forSome if match switch try while"),defKeywords:S("class enum def object package trait type val var"),atoms:S("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(R){return R.eatWhile(/[\w\$_]/),"meta"},'"':function(R,E){return R.match('""')?(E.tokenize=oe,E.tokenize(R,E)):!1},"'":function(R){return R.match(/^(\\[^'\s]+|[^\\'])'/)?"string-2":(R.eatWhile(/[\w\$_\xa1-\uffff]/),"atom")},"=":function(R,E){var $=E.context;return $.type=="}"&&$.align&&R.eat(">")?(E.context=new g($.indented,$.column,$.type,$.info,null,$.prev),"operator"):!1},"/":function(R,E){return R.eat("*")?(E.tokenize=ye(1),E.tokenize(R,E)):!1}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}});function L(R){return function(E,$){for(var O=!1,Z,Se=!1;!E.eol();){if(!R&&!O&&E.match('"')){Se=!0;break}if(R&&E.match('"""')){Se=!0;break}Z=E.next(),!O&&Z=="$"&&E.match("{")&&E.skipTo("}"),O=!O&&Z=="\\"&&!R}return(Se||!R)&&($.tokenize=null),"string"}}Ce("text/x-kotlin",{name:"clike",keywords:S("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"),types:S("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),indentSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i,blockKeywords:S("catch class do else finally for if where try while enum"),defKeywords:S("class val var object interface fun"),atoms:S("true false null this"),hooks:{"@":function(R){return R.eatWhile(/[\w\$_]/),"meta"},"*":function(R,E){return E.prevToken=="."?"variable":"operator"},'"':function(R,E){return E.tokenize=L(R.match('""')),E.tokenize(R,E)},"/":function(R,E){return R.eat("*")?(E.tokenize=ye(1),E.tokenize(R,E)):!1},indent:function(R,E,$,O){var Z=$&&$.charAt(0);if((R.prevToken=="}"||R.prevToken==")")&&$=="")return R.indented;if(R.prevToken=="operator"&&$!="}"&&R.context.type!="}"||R.prevToken=="variable"&&Z=="."||(R.prevToken=="}"||R.prevToken==")")&&Z==".")return O*2+E.indented;if(E.align&&E.type=="}")return E.indented+(R.context.type==($||"").charAt(0)?0:O)}},modeProps:{closeBrackets:{triples:'"'}}}),Ce(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:S("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:S("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:S("for while do if else struct"),builtin:S("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:S("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":H},modeProps:{fold:["brace","include"]}}),Ce("text/x-nesc",{name:"clike",keywords:S(N+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:J,blockKeywords:S(W),atoms:S("null true false"),hooks:{"#":H},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec",{name:"clike",keywords:S(N+" "+A),types:M,builtin:S(X),blockKeywords:S(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:S(B+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:S("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":H,"*":V},modeProps:{fold:["brace","include"]}}),Ce("text/x-objectivec++",{name:"clike",keywords:S(N+" "+A+" "+F),types:M,builtin:S(X),blockKeywords:S(W+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:S(B+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:S("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:ce,hooks:{"#":H,"*":V,u:ve,U:ve,L:ve,R:ve,0:le,1:le,2:le,3:le,4:le,5:le,6:le,7:le,8:le,9:le,token:function(R,E,$){if($=="variable"&&R.peek()=="("&&(E.prevToken==";"||E.prevToken==null||E.prevToken=="}")&&Fe(R.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),Ce("text/x-squirrel",{name:"clike",keywords:S("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:J,blockKeywords:S("case catch class else for foreach if switch try while"),defKeywords:S("function local class"),typeFirstDefinitions:!0,atoms:S("true false null"),hooks:{"#":H},modeProps:{fold:["brace","include"]}});var Q=null;function K(R){return function(E,$){for(var O=!1,Z,Se=!1;!E.eol();){if(!O&&E.match('"')&&(R=="single"||E.match('""'))){Se=!0;break}if(!O&&E.match("``")){Q=K(R),Se=!0;break}Z=E.next(),O=R=="single"&&!O&&Z=="\\"}return Se&&($.tokenize=null),"string"}}Ce("text/x-ceylon",{name:"clike",keywords:S("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(R){var E=R.charAt(0);return E===E.toUpperCase()&&E!==E.toLowerCase()},blockKeywords:S("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:S("class dynamic function interface module object package value"),builtin:S("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:S("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(R){return R.eatWhile(/[\w\$_]/),"meta"},'"':function(R,E){return E.tokenize=K(R.match('""')?"triple":"single"),E.tokenize(R,E)},"`":function(R,E){return!Q||!R.match("`")?!1:(E.tokenize=Q,Q=null,E.tokenize(R,E))},"'":function(R){return R.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(R,E,$){if(($=="variable"||$=="type")&&E.prevToken==".")return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})})})()),Lf.exports}eb();var Af={exports:{}},Rf;function Em(){return Rf||(Rf=1,(function(l,c){(function(p){p(ss())})(function(p){var g={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},y={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};p.defineMode("xml",function(b,k){var C=b.indentUnit,S={},j=k.htmlMode?g:y;for(var N in j)S[N]=j[N];for(var N in k)S[N]=k[N];var F,A;function X(L,Q){function K($){return Q.tokenize=$,$(L,Q)}var R=L.next();if(R=="<")return L.eat("!")?L.eat("[")?L.match("CDATA[")?K(J("atom","]]>")):null:L.match("--")?K(J("comment","-->")):L.match("DOCTYPE",!0,!0)?(L.eatWhile(/[\w\._\-]/),K(M(1))):null:L.eat("?")?(L.eatWhile(/[\w\._\-]/),Q.tokenize=J("meta","?>"),"meta"):(F=L.eat("/")?"closeTag":"openTag",Q.tokenize=D,"tag bracket");if(R=="&"){var E;return L.eat("#")?L.eat("x")?E=L.eatWhile(/[a-fA-F\d]/)&&L.eat(";"):E=L.eatWhile(/[\d]/)&&L.eat(";"):E=L.eatWhile(/[\w\.\-:]/)&&L.eat(";"),E?"atom":"error"}else return L.eatWhile(/[^&<]/),null}X.isInText=!0;function D(L,Q){var K=L.next();if(K==">"||K=="/"&&L.eat(">"))return Q.tokenize=X,F=K==">"?"endTag":"selfcloseTag","tag bracket";if(K=="=")return F="equals",null;if(K=="<"){Q.tokenize=X,Q.state=ce,Q.tagName=Q.tagStart=null;var R=Q.tokenize(L,Q);return R?R+" tag error":"tag error"}else return/[\'\"]/.test(K)?(Q.tokenize=Y(K),Q.stringStartCol=L.column(),Q.tokenize(L,Q)):(L.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function Y(L){var Q=function(K,R){for(;!K.eol();)if(K.next()==L){R.tokenize=D;break}return"string"};return Q.isInAttribute=!0,Q}function J(L,Q){return function(K,R){for(;!K.eol();){if(K.match(Q)){R.tokenize=X;break}K.next()}return L}}function M(L){return function(Q,K){for(var R;(R=Q.next())!=null;){if(R=="<")return K.tokenize=M(L+1),K.tokenize(Q,K);if(R==">")if(L==1){K.tokenize=X;break}else return K.tokenize=M(L-1),K.tokenize(Q,K)}return"meta"}}function W(L){return L&&L.toLowerCase()}function B(L,Q,K){this.prev=L.context,this.tagName=Q||"",this.indent=L.indented,this.startOfLine=K,(S.doNotIndent.hasOwnProperty(Q)||L.context&&L.context.noIndent)&&(this.noIndent=!0)}function H(L){L.context&&(L.context=L.context.prev)}function V(L,Q){for(var K;;){if(!L.context||(K=L.context.tagName,!S.contextGrabbers.hasOwnProperty(W(K))||!S.contextGrabbers[W(K)].hasOwnProperty(W(Q))))return;H(L)}}function ce(L,Q,K){return L=="openTag"?(K.tagStart=Q.column(),le):L=="closeTag"?ve:ce}function le(L,Q,K){return L=="word"?(K.tagName=Q.current(),A="tag",ae):S.allowMissingTagName&&L=="endTag"?(A="tag bracket",ae(L,Q,K)):(A="error",le)}function ve(L,Q,K){if(L=="word"){var R=Q.current();return K.context&&K.context.tagName!=R&&S.implicitlyClosed.hasOwnProperty(W(K.context.tagName))&&H(K),K.context&&K.context.tagName==R||S.matchClosing===!1?(A="tag",Fe):(A="tag error",Te)}else return S.allowMissingTagName&&L=="endTag"?(A="tag bracket",Fe(L,Q,K)):(A="error",Te)}function Fe(L,Q,K){return L!="endTag"?(A="error",Fe):(H(K),ce)}function Te(L,Q,K){return A="error",Fe(L,Q,K)}function ae(L,Q,K){if(L=="word")return A="attribute",Ce;if(L=="endTag"||L=="selfcloseTag"){var R=K.tagName,E=K.tagStart;return K.tagName=K.tagStart=null,L=="selfcloseTag"||S.autoSelfClosers.hasOwnProperty(W(R))?V(K,R):(V(K,R),K.context=new B(K,R,E==K.indented)),ce}return A="error",ae}function Ce(L,Q,K){return L=="equals"?oe:(S.allowMissing||(A="error"),ae(L,Q,K))}function oe(L,Q,K){return L=="string"?ye:L=="word"&&S.allowUnquoted?(A="string",ae):(A="error",ae(L,Q,K))}function ye(L,Q,K){return L=="string"?ye:ae(L,Q,K)}return{startState:function(L){var Q={tokenize:X,state:ce,indented:L||0,tagName:null,tagStart:null,context:null};return L!=null&&(Q.baseIndent=L),Q},token:function(L,Q){if(!Q.tagName&&L.sol()&&(Q.indented=L.indentation()),L.eatSpace())return null;F=null;var K=Q.tokenize(L,Q);return(K||F)&&K!="comment"&&(A=null,Q.state=Q.state(F||K,L,Q),A&&(K=A=="error"?K+" error":A)),K},indent:function(L,Q,K){var R=L.context;if(L.tokenize.isInAttribute)return L.tagStart==L.indented?L.stringStartCol+1:L.indented+C;if(R&&R.noIndent)return p.Pass;if(L.tokenize!=D&&L.tokenize!=X)return K?K.match(/^(\s*)/)[0].length:0;if(L.tagName)return S.multilineTagIndentPastTag!==!1?L.tagStart+L.tagName.length+2:L.tagStart+C*(S.multilineTagIndentFactor||1);if(S.alignCDATA&&/<!\[CDATA\[/.test(Q))return 0;var E=Q&&/^<(\/)?([\w_:\.-]*)/.exec(Q);if(E&&E[1])for(;R;)if(R.tagName==E[2]){R=R.prev;break}else if(S.implicitlyClosed.hasOwnProperty(W(R.tagName)))R=R.prev;else break;else if(E)for(;R;){var $=S.contextGrabbers[W(R.tagName)];if($&&$.hasOwnProperty(W(E[2])))R=R.prev;else break}for(;R&&R.prev&&!R.startOfLine;)R=R.prev;return R?R.indent+C:L.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:S.htmlMode?"html":"xml",helperType:S.htmlMode?"html":"xml",skipAttribute:function(L){L.state==oe&&(L.state=ae)},xmlCurrentTag:function(L){return L.tagName?{name:L.tagName,close:L.type=="closeTag"}:null},xmlCurrentContext:function(L){for(var Q=[],K=L.context;K;K=K.prev)Q.push(K.tagName);return Q.reverse()}}}),p.defineMIME("text/xml","xml"),p.defineMIME("application/xml","xml"),p.mimeModes.hasOwnProperty("text/html")||p.defineMIME("text/html",{name:"xml",htmlMode:!0})})})()),Af.exports}Em();var If={exports:{}},Of;function Lm(){return Of||(Of=1,(function(l,c){(function(p){p(ss())})(function(p){p.defineMode("css",function(Te,ae){var Ce=ae.inline;ae.propertyKeywords||(ae=p.resolveMode("text/css"));var oe=Te.indentUnit,ye=ae.tokenHooks,L=ae.documentTypes||{},Q=ae.mediaTypes||{},K=ae.mediaFeatures||{},R=ae.mediaValueKeywords||{},E=ae.propertyKeywords||{},$=ae.nonStandardPropertyKeywords||{},O=ae.fontProperties||{},Z=ae.counterDescriptors||{},Se=ae.colorKeywords||{},Ie=ae.valueKeywords||{},qe=ae.allowNested,Oe=ae.lineComment,ke=ae.supportsAtComponent===!0,Be=Te.highlightNonStandardPropertyKeywords!==!1,Ke,et;function $e(se,je){return Ke=je,se}function Ft(se,je){var he=se.next();if(ye[he]){var kt=ye[he](se,je);if(kt!==!1)return kt}if(he=="@")return se.eatWhile(/[\w\\\-]/),$e("def",se.current());if(he=="="||(he=="~"||he=="|")&&se.eat("="))return $e(null,"compare");if(he=='"'||he=="'")return je.tokenize=Yt(he),je.tokenize(se,je);if(he=="#")return se.eatWhile(/[\w\\\-]/),$e("atom","hash");if(he=="!")return se.match(/^\s*\w*/),$e("keyword","important");if(/\d/.test(he)||he=="."&&se.eat(/\d/))return se.eatWhile(/[\w.%]/),$e("number","unit");if(he==="-"){if(/[\d.]/.test(se.peek()))return se.eatWhile(/[\w.%]/),$e("number","unit");if(se.match(/^-[\w\\\-]*/))return se.eatWhile(/[\w\\\-]/),se.match(/^\s*:/,!1)?$e("variable-2","variable-definition"):$e("variable-2","variable");if(se.match(/^\w+-/))return $e("meta","meta")}else return/[,+>*\/]/.test(he)?$e(null,"select-op"):he=="."&&se.match(/^-?[_a-z][_a-z0-9-]*/i)?$e("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(he)?$e(null,he):se.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(se.current())&&(je.tokenize=Ct),$e("variable callee","variable")):/[\w\\\-]/.test(he)?(se.eatWhile(/[\w\\\-]/),$e("property","word")):$e(null,null)}function Yt(se){return function(je,he){for(var kt=!1,Ye;(Ye=je.next())!=null;){if(Ye==se&&!kt){se==")"&&je.backUp(1);break}kt=!kt&&Ye=="\\"}return(Ye==se||!kt&&se!=")")&&(he.tokenize=null),$e("string","string")}}function Ct(se,je){return se.next(),se.match(/^\s*[\"\')]/,!1)?je.tokenize=null:je.tokenize=Yt(")"),$e(null,"(")}function xt(se,je,he){this.type=se,this.indent=je,this.prev=he}function tt(se,je,he,kt){return se.context=new xt(he,je.indentation()+(kt===!1?0:oe),se.context),he}function Ue(se){return se.context.prev&&(se.context=se.context.prev),se.context.type}function vt(se,je,he){return ut[he.context.type](se,je,he)}function yt(se,je,he,kt){for(var Ye=kt||1;Ye>0;Ye--)he.context=he.context.prev;return vt(se,je,he)}function Qe(se){var je=se.current().toLowerCase();Ie.hasOwnProperty(je)?et="atom":Se.hasOwnProperty(je)?et="keyword":et="variable"}var ut={};return ut.top=function(se,je,he){if(se=="{")return tt(he,je,"block");if(se=="}"&&he.context.prev)return Ue(he);if(ke&&/@component/i.test(se))return tt(he,je,"atComponentBlock");if(/^@(-moz-)?document$/i.test(se))return tt(he,je,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(se))return tt(he,je,"atBlock");if(/^@(font-face|counter-style)/i.test(se))return he.stateArg=se,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(se))return"keyframes";if(se&&se.charAt(0)=="@")return tt(he,je,"at");if(se=="hash")et="builtin";else if(se=="word")et="tag";else{if(se=="variable-definition")return"maybeprop";if(se=="interpolation")return tt(he,je,"interpolation");if(se==":")return"pseudo";if(qe&&se=="(")return tt(he,je,"parens")}return he.context.type},ut.block=function(se,je,he){if(se=="word"){var kt=je.current().toLowerCase();return E.hasOwnProperty(kt)?(et="property","maybeprop"):$.hasOwnProperty(kt)?(et=Be?"string-2":"property","maybeprop"):qe?(et=je.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(et+=" error","maybeprop")}else return se=="meta"?"block":!qe&&(se=="hash"||se=="qualifier")?(et="error","block"):ut.top(se,je,he)},ut.maybeprop=function(se,je,he){return se==":"?tt(he,je,"prop"):vt(se,je,he)},ut.prop=function(se,je,he){if(se==";")return Ue(he);if(se=="{"&&qe)return tt(he,je,"propBlock");if(se=="}"||se=="{")return yt(se,je,he);if(se=="(")return tt(he,je,"parens");if(se=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(je.current()))et+=" error";else if(se=="word")Qe(je);else if(se=="interpolation")return tt(he,je,"interpolation");return"prop"},ut.propBlock=function(se,je,he){return se=="}"?Ue(he):se=="word"?(et="property","maybeprop"):he.context.type},ut.parens=function(se,je,he){return se=="{"||se=="}"?yt(se,je,he):se==")"?Ue(he):se=="("?tt(he,je,"parens"):se=="interpolation"?tt(he,je,"interpolation"):(se=="word"&&Qe(je),"parens")},ut.pseudo=function(se,je,he){return se=="meta"?"pseudo":se=="word"?(et="variable-3",he.context.type):vt(se,je,he)},ut.documentTypes=function(se,je,he){return se=="word"&&L.hasOwnProperty(je.current())?(et="tag",he.context.type):ut.atBlock(se,je,he)},ut.atBlock=function(se,je,he){if(se=="(")return tt(he,je,"atBlock_parens");if(se=="}"||se==";")return yt(se,je,he);if(se=="{")return Ue(he)&&tt(he,je,qe?"block":"top");if(se=="interpolation")return tt(he,je,"interpolation");if(se=="word"){var kt=je.current().toLowerCase();kt=="only"||kt=="not"||kt=="and"||kt=="or"?et="keyword":Q.hasOwnProperty(kt)?et="attribute":K.hasOwnProperty(kt)?et="property":R.hasOwnProperty(kt)?et="keyword":E.hasOwnProperty(kt)?et="property":$.hasOwnProperty(kt)?et=Be?"string-2":"property":Ie.hasOwnProperty(kt)?et="atom":Se.hasOwnProperty(kt)?et="keyword":et="error"}return he.context.type},ut.atComponentBlock=function(se,je,he){return se=="}"?yt(se,je,he):se=="{"?Ue(he)&&tt(he,je,qe?"block":"top",!1):(se=="word"&&(et="error"),he.context.type)},ut.atBlock_parens=function(se,je,he){return se==")"?Ue(he):se=="{"||se=="}"?yt(se,je,he,2):ut.atBlock(se,je,he)},ut.restricted_atBlock_before=function(se,je,he){return se=="{"?tt(he,je,"restricted_atBlock"):se=="word"&&he.stateArg=="@counter-style"?(et="variable","restricted_atBlock_before"):vt(se,je,he)},ut.restricted_atBlock=function(se,je,he){return se=="}"?(he.stateArg=null,Ue(he)):se=="word"?(he.stateArg=="@font-face"&&!O.hasOwnProperty(je.current().toLowerCase())||he.stateArg=="@counter-style"&&!Z.hasOwnProperty(je.current().toLowerCase())?et="error":et="property","maybeprop"):"restricted_atBlock"},ut.keyframes=function(se,je,he){return se=="word"?(et="variable","keyframes"):se=="{"?tt(he,je,"top"):vt(se,je,he)},ut.at=function(se,je,he){return se==";"?Ue(he):se=="{"||se=="}"?yt(se,je,he):(se=="word"?et="tag":se=="hash"&&(et="builtin"),"at")},ut.interpolation=function(se,je,he){return se=="}"?Ue(he):se=="{"||se==";"?yt(se,je,he):(se=="word"?et="variable":se!="variable"&&se!="("&&se!=")"&&(et="error"),"interpolation")},{startState:function(se){return{tokenize:null,state:Ce?"block":"top",stateArg:null,context:new xt(Ce?"block":"top",se||0,null)}},token:function(se,je){if(!je.tokenize&&se.eatSpace())return null;var he=(je.tokenize||Ft)(se,je);return he&&typeof he=="object"&&(Ke=he[1],he=he[0]),et=he,Ke!="comment"&&(je.state=ut[je.state](Ke,se,je)),et},indent:function(se,je){var he=se.context,kt=je&&je.charAt(0),Ye=he.indent;return he.type=="prop"&&(kt=="}"||kt==")")&&(he=he.prev),he.prev&&(kt=="}"&&(he.type=="block"||he.type=="top"||he.type=="interpolation"||he.type=="restricted_atBlock")?(he=he.prev,Ye=he.indent):(kt==")"&&(he.type=="parens"||he.type=="atBlock_parens")||kt=="{"&&(he.type=="at"||he.type=="atBlock"))&&(Ye=Math.max(0,he.indent-oe))),Ye},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:Oe,fold:"brace"}});function g(Te){for(var ae={},Ce=0;Ce<Te.length;++Ce)ae[Te[Ce].toLowerCase()]=!0;return ae}var y=["domain","regexp","url","url-prefix"],b=g(y),k=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],C=g(k),S=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],j=g(S),N=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],F=g(N),A=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],X=g(A),D=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],Y=g(D),J=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],M=g(J),W=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],B=g(W),H=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],V=g(H),ce=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],le=g(ce),ve=y.concat(k).concat(S).concat(N).concat(A).concat(D).concat(H).concat(ce);p.registerHelper("hintWords","css",ve);function Fe(Te,ae){for(var Ce=!1,oe;(oe=Te.next())!=null;){if(Ce&&oe=="/"){ae.tokenize=null;break}Ce=oe=="*"}return["comment","comment"]}p.defineMIME("text/css",{documentTypes:b,mediaTypes:C,mediaFeatures:j,mediaValueKeywords:F,propertyKeywords:X,nonStandardPropertyKeywords:Y,fontProperties:M,counterDescriptors:B,colorKeywords:V,valueKeywords:le,tokenHooks:{"/":function(Te,ae){return Te.eat("*")?(ae.tokenize=Fe,Fe(Te,ae)):!1}},name:"css"}),p.defineMIME("text/x-scss",{mediaTypes:C,mediaFeatures:j,mediaValueKeywords:F,propertyKeywords:X,nonStandardPropertyKeywords:Y,colorKeywords:V,valueKeywords:le,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Te,ae){return Te.eat("/")?(Te.skipToEnd(),["comment","comment"]):Te.eat("*")?(ae.tokenize=Fe,Fe(Te,ae)):["operator","operator"]},":":function(Te){return Te.match(/^\s*\{/,!1)?[null,null]:!1},$:function(Te){return Te.match(/^[\w-]+/),Te.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(Te){return Te.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),p.defineMIME("text/x-less",{mediaTypes:C,mediaFeatures:j,mediaValueKeywords:F,propertyKeywords:X,nonStandardPropertyKeywords:Y,colorKeywords:V,valueKeywords:le,fontProperties:M,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(Te,ae){return Te.eat("/")?(Te.skipToEnd(),["comment","comment"]):Te.eat("*")?(ae.tokenize=Fe,Fe(Te,ae)):["operator","operator"]},"@":function(Te){return Te.eat("{")?[null,"interpolation"]:Te.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(Te.eatWhile(/[\w\\\-]/),Te.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),p.defineMIME("text/x-gss",{documentTypes:b,mediaTypes:C,mediaFeatures:j,propertyKeywords:X,nonStandardPropertyKeywords:Y,fontProperties:M,counterDescriptors:B,colorKeywords:V,valueKeywords:le,supportsAtComponent:!0,tokenHooks:{"/":function(Te,ae){return Te.eat("*")?(ae.tokenize=Fe,Fe(Te,ae)):!1}},name:"css",helperType:"gss"})})})()),If.exports}Lm();var Mf={exports:{}},Df;function tb(){return Df||(Df=1,(function(l,c){(function(p){p(ss(),Em(),Nm(),Lm())})(function(p){var g={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function y(F,A,X){var D=F.current(),Y=D.search(A);return Y>-1?F.backUp(D.length-Y):D.match(/<\/?$/)&&(F.backUp(D.length),F.match(A,!1)||F.match(D)),X}var b={};function k(F){var A=b[F];return A||(b[F]=new RegExp("\\s+"+F+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function C(F,A){var X=F.match(k(A));return X?/^\s*(.*?)\s*$/.exec(X[2])[1]:""}function S(F,A){return new RegExp((A?"^":"")+"</\\s*"+F+"\\s*>","i")}function j(F,A){for(var X in F)for(var D=A[X]||(A[X]=[]),Y=F[X],J=Y.length-1;J>=0;J--)D.unshift(Y[J])}function N(F,A){for(var X=0;X<F.length;X++){var D=F[X];if(!D[0]||D[1].test(C(A,D[0])))return D[2]}}p.defineMode("htmlmixed",function(F,A){var X=p.getMode(F,{name:"xml",htmlMode:!0,multilineTagIndentFactor:A.multilineTagIndentFactor,multilineTagIndentPastTag:A.multilineTagIndentPastTag,allowMissingTagName:A.allowMissingTagName}),D={},Y=A&&A.tags,J=A&&A.scriptTypes;if(j(g,D),Y&&j(Y,D),J)for(var M=J.length-1;M>=0;M--)D.script.unshift(["type",J[M].matches,J[M].mode]);function W(B,H){var V=X.token(B,H.htmlState),ce=/\btag\b/.test(V),le;if(ce&&!/[<>\s\/]/.test(B.current())&&(le=H.htmlState.tagName&&H.htmlState.tagName.toLowerCase())&&D.hasOwnProperty(le))H.inTag=le+" ";else if(H.inTag&&ce&&/>$/.test(B.current())){var ve=/^([\S]+) (.*)/.exec(H.inTag);H.inTag=null;var Fe=B.current()==">"&&N(D[ve[1]],ve[2]),Te=p.getMode(F,Fe),ae=S(ve[1],!0),Ce=S(ve[1],!1);H.token=function(oe,ye){return oe.match(ae,!1)?(ye.token=W,ye.localState=ye.localMode=null,null):y(oe,Ce,ye.localMode.token(oe,ye.localState))},H.localMode=Te,H.localState=p.startState(Te,X.indent(H.htmlState,"",""))}else H.inTag&&(H.inTag+=B.current(),B.eol()&&(H.inTag+=" "));return V}return{startState:function(){var B=p.startState(X);return{token:W,inTag:null,localMode:null,localState:null,htmlState:B}},copyState:function(B){var H;return B.localState&&(H=p.copyState(B.localMode,B.localState)),{token:B.token,inTag:B.inTag,localMode:B.localMode,localState:H,htmlState:p.copyState(X,B.htmlState)}},token:function(B,H){return H.token(B,H)},indent:function(B,H,V){return!B.localMode||/^\s*<\//.test(H)?X.indent(B.htmlState,H,V):B.localMode.indent?B.localMode.indent(B.localState,H,V):p.Pass},innerMode:function(B){return{state:B.localState||B.htmlState,mode:B.localMode||X}}}},"xml","javascript","css"),p.defineMIME("text/html","htmlmixed")})})()),Mf.exports}tb();var zf={exports:{}},Ff;function nb(){return Ff||(Ff=1,(function(l,c){(function(p){p(ss())})(function(p){var g={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},y=p.Pos;p.defineOption("autoCloseBrackets",!1,function(M,W,B){B&&B!=p.Init&&(M.removeKeyMap(k),M.state.closeBrackets=null),W&&(C(b(W,"pairs")),M.state.closeBrackets=W,M.addKeyMap(k))});function b(M,W){return W=="pairs"&&typeof M=="string"?M:typeof M=="object"&&M[W]!=null?M[W]:g[W]}var k={Backspace:N,Enter:F};function C(M){for(var W=0;W<M.length;W++){var B=M.charAt(W),H="'"+B+"'";k[H]||(k[H]=S(B))}}C(g.pairs+"`");function S(M){return function(W){return D(W,M)}}function j(M){var W=M.state.closeBrackets;if(!W||W.override)return W;var B=M.getModeAt(M.getCursor());return B.closeBrackets||W}function N(M){var W=j(M);if(!W||M.getOption("disableInput"))return p.Pass;for(var B=b(W,"pairs"),H=M.listSelections(),V=0;V<H.length;V++){if(!H[V].empty())return p.Pass;var ce=Y(M,H[V].head);if(!ce||B.indexOf(ce)%2!=0)return p.Pass}for(var V=H.length-1;V>=0;V--){var le=H[V].head;M.replaceRange("",y(le.line,le.ch-1),y(le.line,le.ch+1),"+delete")}}function F(M){var W=j(M),B=W&&b(W,"explode");if(!B||M.getOption("disableInput"))return p.Pass;for(var H=M.listSelections(),V=0;V<H.length;V++){if(!H[V].empty())return p.Pass;var ce=Y(M,H[V].head);if(!ce||B.indexOf(ce)%2!=0)return p.Pass}M.operation(function(){var le=M.lineSeparator()||`
`;M.replaceSelection(le+le,null),A(M,-1),H=M.listSelections();for(var ve=0;ve<H.length;ve++){var Fe=H[ve].head.line;M.indentLine(Fe,null,!0),M.indentLine(Fe+1,null,!0)}})}function A(M,W){for(var B=[],H=M.listSelections(),V=0,ce=0;ce<H.length;ce++){var le=H[ce];le.head==M.getCursor()&&(V=ce);var ve=le.head.ch||W>0?{line:le.head.line,ch:le.head.ch+W}:{line:le.head.line-1};B.push({anchor:ve,head:ve})}M.setSelections(B,V)}function X(M){var W=p.cmpPos(M.anchor,M.head)>0;return{anchor:new y(M.anchor.line,M.anchor.ch+(W?-1:1)),head:new y(M.head.line,M.head.ch+(W?1:-1))}}function D(M,W){var B=j(M);if(!B||M.getOption("disableInput"))return p.Pass;var H=b(B,"pairs"),V=H.indexOf(W);if(V==-1)return p.Pass;for(var ce=b(B,"closeBefore"),le=b(B,"triples"),ve=H.charAt(V+1)==W,Fe=M.listSelections(),Te=V%2==0,ae,Ce=0;Ce<Fe.length;Ce++){var oe=Fe[Ce],ye=oe.head,L,Q=M.getRange(ye,y(ye.line,ye.ch+1));if(Te&&!oe.empty())L="surround";else if((ve||!Te)&&Q==W)ve&&J(M,ye)?L="both":le.indexOf(W)>=0&&M.getRange(ye,y(ye.line,ye.ch+3))==W+W+W?L="skipThree":L="skip";else if(ve&&ye.ch>1&&le.indexOf(W)>=0&&M.getRange(y(ye.line,ye.ch-2),ye)==W+W){if(ye.ch>2&&/\bstring/.test(M.getTokenTypeAt(y(ye.line,ye.ch-2))))return p.Pass;L="addFour"}else if(ve){var K=ye.ch==0?" ":M.getRange(y(ye.line,ye.ch-1),ye);if(!p.isWordChar(Q)&&K!=W&&!p.isWordChar(K))L="both";else return p.Pass}else if(Te&&(Q.length===0||/\s/.test(Q)||ce.indexOf(Q)>-1))L="both";else return p.Pass;if(!ae)ae=L;else if(ae!=L)return p.Pass}var R=V%2?H.charAt(V-1):W,E=V%2?W:H.charAt(V+1);M.operation(function(){if(ae=="skip")A(M,1);else if(ae=="skipThree")A(M,3);else if(ae=="surround"){for(var $=M.getSelections(),O=0;O<$.length;O++)$[O]=R+$[O]+E;M.replaceSelections($,"around"),$=M.listSelections().slice();for(var O=0;O<$.length;O++)$[O]=X($[O]);M.setSelections($)}else ae=="both"?(M.replaceSelection(R+E,null),M.triggerElectric(R+E),A(M,-1)):ae=="addFour"&&(M.replaceSelection(R+R+R+R,"before"),A(M,1))})}function Y(M,W){var B=M.getRange(y(W.line,W.ch-1),y(W.line,W.ch+1));return B.length==2?B:null}function J(M,W){var B=M.getTokenAt(y(W.line,W.ch+1));return/\bstring/.test(B.type)&&B.start==W.ch&&(W.ch==0||!/\bstring/.test(M.getTokenTypeAt(W)))}})})()),zf.exports}nb();var Wf={exports:{}},Hf;function rb(){return Hf||(Hf=1,(function(l,c){(function(p){p(ss())})(function(p){var g=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),y=p.Pos,b={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function k(A){return A&&A.bracketRegex||/[(){}[\]]/}function C(A,X,D){var Y=A.getLineHandle(X.line),J=X.ch-1,M=D&&D.afterCursor;M==null&&(M=/(^| )cm-fat-cursor($| )/.test(A.getWrapperElement().className));var W=k(D),B=!M&&J>=0&&W.test(Y.text.charAt(J))&&b[Y.text.charAt(J)]||W.test(Y.text.charAt(J+1))&&b[Y.text.charAt(++J)];if(!B)return null;var H=B.charAt(1)==">"?1:-1;if(D&&D.strict&&H>0!=(J==X.ch))return null;var V=A.getTokenTypeAt(y(X.line,J+1)),ce=S(A,y(X.line,J+(H>0?1:0)),H,V,D);return ce==null?null:{from:y(X.line,J),to:ce&&ce.pos,match:ce&&ce.ch==B.charAt(0),forward:H>0}}function S(A,X,D,Y,J){for(var M=J&&J.maxScanLineLength||1e4,W=J&&J.maxScanLines||1e3,B=[],H=k(J),V=D>0?Math.min(X.line+W,A.lastLine()+1):Math.max(A.firstLine()-1,X.line-W),ce=X.line;ce!=V;ce+=D){var le=A.getLine(ce);if(le){var ve=D>0?0:le.length-1,Fe=D>0?le.length:-1;if(!(le.length>M))for(ce==X.line&&(ve=X.ch-(D<0?1:0));ve!=Fe;ve+=D){var Te=le.charAt(ve);if(H.test(Te)&&(Y===void 0||(A.getTokenTypeAt(y(ce,ve+1))||"")==(Y||""))){var ae=b[Te];if(ae&&ae.charAt(1)==">"==D>0)B.push(Te);else if(B.length)B.pop();else return{pos:y(ce,ve),ch:Te}}}}}return ce-D==(D>0?A.lastLine():A.firstLine())?!1:null}function j(A,X,D){for(var Y=A.state.matchBrackets.maxHighlightLineLength||1e3,J=D&&D.highlightNonMatching,M=[],W=A.listSelections(),B=0;B<W.length;B++){var H=W[B].empty()&&C(A,W[B].head,D);if(H&&(H.match||J!==!1)&&A.getLine(H.from.line).length<=Y){var V=H.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";M.push(A.markText(H.from,y(H.from.line,H.from.ch+1),{className:V})),H.to&&A.getLine(H.to.line).length<=Y&&M.push(A.markText(H.to,y(H.to.line,H.to.ch+1),{className:V}))}}if(M.length){g&&A.state.focused&&A.focus();var ce=function(){A.operation(function(){for(var le=0;le<M.length;le++)M[le].clear()})};if(X)setTimeout(ce,800);else return ce}}function N(A){A.operation(function(){A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null),A.state.matchBrackets.currentlyHighlighted=j(A,!1,A.state.matchBrackets)})}function F(A){A.state.matchBrackets&&A.state.matchBrackets.currentlyHighlighted&&(A.state.matchBrackets.currentlyHighlighted(),A.state.matchBrackets.currentlyHighlighted=null)}p.defineOption("matchBrackets",!1,function(A,X,D){D&&D!=p.Init&&(A.off("cursorActivity",N),A.off("focus",N),A.off("blur",F),F(A)),X&&(A.state.matchBrackets=typeof X=="object"?X:{},A.on("cursorActivity",N),A.on("focus",N),A.on("blur",F))}),p.defineExtension("matchBrackets",function(){j(this,!0)}),p.defineExtension("findMatchingBracket",function(A,X,D){return(D||typeof X=="boolean")&&(D?(D.strict=X,X=D):X=X?{strict:!0}:null),C(this,A,X)}),p.defineExtension("scanForBracket",function(A,X,D,Y){return S(this,A,X,D,Y)})})})()),Wf.exports}rb();var Bf={exports:{}},Uf;function ib(){return Uf||(Uf=1,(function(l,c){(function(p){p(ss())})(function(p){var g="CodeMirror-hint",y="CodeMirror-hint-active";p.showHint=function(M,W,B){if(!W)return M.showHint(B);B&&B.async&&(W.async=!0);var H={hint:W};if(B)for(var V in B)H[V]=B[V];return M.showHint(H)},p.defineExtension("showHint",function(M){M=S(this,this.getCursor("start"),M);var W=this.listSelections();if(!(W.length>1)){if(this.somethingSelected()){if(!M.hint.supportsSelection)return;for(var B=0;B<W.length;B++)if(W[B].head.line!=W[B].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var H=this.state.completionActive=new b(this,M);H.options.hint&&(p.signal(this,"startCompletion",this),H.update(!0))}}),p.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(M,W){if(this.cm=M,this.options=W,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var B=this;M.on("cursorActivity",this.activityFunc=function(){B.cursorActivity()})}}var k=window.requestAnimationFrame||function(M){return setTimeout(M,1e3/60)},C=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&p.signal(this.data,"close"),this.widget&&this.widget.close(),p.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(M,W){var B=M.list[W],H=this;this.cm.operation(function(){B.hint?B.hint(H.cm,M,B):H.cm.replaceRange(j(B),B.from||M.from,B.to||M.to,"complete"),p.signal(M,"pick",B),H.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(C(this.debounce),this.debounce=0);var M=this.startPos;this.data&&(M=this.data.from);var W=this.cm.getCursor(),B=this.cm.getLine(W.line);if(W.line!=this.startPos.line||B.length-W.ch!=this.startLen-this.startPos.ch||W.ch<M.ch||this.cm.somethingSelected()||!W.ch||this.options.closeCharacters.test(B.charAt(W.ch-1)))this.close();else{var H=this;this.debounce=k(function(){H.update()}),this.widget&&this.widget.disable()}},update:function(M){if(this.tick!=null){var W=this,B=++this.tick;D(this.options.hint,this.cm,this.options,function(H){W.tick==B&&W.finishUpdate(H,M)})}},finishUpdate:function(M,W){this.data&&p.signal(this.data,"update");var B=this.widget&&this.widget.picked||W&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=M,M&&M.list.length&&(B&&M.list.length==1?this.pick(M,0):(this.widget=new A(this,M),p.signal(M,"shown")))}};function S(M,W,B){var H=M.options.hintOptions,V={};for(var ce in J)V[ce]=J[ce];if(H)for(var ce in H)H[ce]!==void 0&&(V[ce]=H[ce]);if(B)for(var ce in B)B[ce]!==void 0&&(V[ce]=B[ce]);return V.hint.resolve&&(V.hint=V.hint.resolve(M,W)),V}function j(M){return typeof M=="string"?M:M.text}function N(M,W){var B={Up:function(){W.moveFocus(-1)},Down:function(){W.moveFocus(1)},PageUp:function(){W.moveFocus(-W.menuSize()+1,!0)},PageDown:function(){W.moveFocus(W.menuSize()-1,!0)},Home:function(){W.setFocus(0)},End:function(){W.setFocus(W.length-1)},Enter:W.pick,Tab:W.pick,Esc:W.close},H=/Mac/.test(navigator.platform);H&&(B["Ctrl-P"]=function(){W.moveFocus(-1)},B["Ctrl-N"]=function(){W.moveFocus(1)});var V=M.options.customKeys,ce=V?{}:B;function le(Te,ae){var Ce;typeof ae!="string"?Ce=function(oe){return ae(oe,W)}:B.hasOwnProperty(ae)?Ce=B[ae]:Ce=ae,ce[Te]=Ce}if(V)for(var ve in V)V.hasOwnProperty(ve)&&le(ve,V[ve]);var Fe=M.options.extraKeys;if(Fe)for(var ve in Fe)Fe.hasOwnProperty(ve)&&le(ve,Fe[ve]);return ce}function F(M,W){for(;W&&W!=M;){if(W.nodeName.toUpperCase()==="LI"&&W.parentNode==M)return W;W=W.parentNode}}function A(M,W){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=M,this.data=W,this.picked=!1;var B=this,H=M.cm,V=H.getInputField().ownerDocument,ce=V.defaultView||V.parentWindow,le=this.hints=V.createElement("ul");le.setAttribute("role","listbox"),le.setAttribute("aria-expanded","true"),le.id=this.id;var ve=M.cm.options.theme;le.className="CodeMirror-hints "+ve,this.selectedHint=W.selectedHint||0;for(var Fe=W.list,Te=0;Te<Fe.length;++Te){var ae=le.appendChild(V.createElement("li")),Ce=Fe[Te],oe=g+(Te!=this.selectedHint?"":" "+y);Ce.className!=null&&(oe=Ce.className+" "+oe),ae.className=oe,Te==this.selectedHint&&ae.setAttribute("aria-selected","true"),ae.id=this.id+"-"+Te,ae.setAttribute("role","option"),Ce.render?Ce.render(ae,W,Ce):ae.appendChild(V.createTextNode(Ce.displayText||j(Ce))),ae.hintId=Te}var ye=M.options.container||V.body,L=H.cursorCoords(M.options.alignWithWord?W.from:null),Q=L.left,K=L.bottom,R=!0,E=0,$=0;if(ye!==V.body){var O=["absolute","relative","fixed"].indexOf(ce.getComputedStyle(ye).position)!==-1,Z=O?ye:ye.offsetParent,Se=Z.getBoundingClientRect(),Ie=V.body.getBoundingClientRect();E=Se.left-Ie.left-Z.scrollLeft,$=Se.top-Ie.top-Z.scrollTop}le.style.left=Q-E+"px",le.style.top=K-$+"px";var qe=ce.innerWidth||Math.max(V.body.offsetWidth,V.documentElement.offsetWidth),Oe=ce.innerHeight||Math.max(V.body.offsetHeight,V.documentElement.offsetHeight);ye.appendChild(le),H.getInputField().setAttribute("aria-autocomplete","list"),H.getInputField().setAttribute("aria-owns",this.id),H.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var ke=M.options.moveOnOverlap?le.getBoundingClientRect():new DOMRect,Be=M.options.paddingForScrollbar?le.scrollHeight>le.clientHeight+1:!1,Ke;setTimeout(function(){Ke=H.getScrollInfo()});var et=ke.bottom-Oe;if(et>0){var $e=ke.bottom-ke.top,Ft=ke.top-(L.bottom-L.top)-2;Oe-ke.top<Ft?($e>Ft&&(le.style.height=($e=Ft)+"px"),le.style.top=(K=L.top-$e)-$+"px",R=!1):le.style.height=Oe-ke.top-2+"px"}var Yt=ke.right-qe;if(Be&&(Yt+=H.display.nativeBarWidth),Yt>0&&(ke.right-ke.left>qe&&(le.style.width=qe-5+"px",Yt-=ke.right-ke.left-qe),le.style.left=(Q=Math.max(L.left-Yt-E,0))+"px"),Be)for(var Ct=le.firstChild;Ct;Ct=Ct.nextSibling)Ct.style.paddingRight=H.display.nativeBarWidth+"px";if(H.addKeyMap(this.keyMap=N(M,{moveFocus:function(Ue,vt){B.changeActive(B.selectedHint+Ue,vt)},setFocus:function(Ue){B.changeActive(Ue)},menuSize:function(){return B.screenAmount()},length:Fe.length,close:function(){M.close()},pick:function(){B.pick()},data:W})),M.options.closeOnUnfocus){var xt;H.on("blur",this.onBlur=function(){xt=setTimeout(function(){M.close()},100)}),H.on("focus",this.onFocus=function(){clearTimeout(xt)})}H.on("scroll",this.onScroll=function(){var Ue=H.getScrollInfo(),vt=H.getWrapperElement().getBoundingClientRect();Ke||(Ke=H.getScrollInfo());var yt=K+Ke.top-Ue.top,Qe=yt-(ce.pageYOffset||(V.documentElement||V.body).scrollTop);if(R||(Qe+=le.offsetHeight),Qe<=vt.top||Qe>=vt.bottom)return M.close();le.style.top=yt+"px",le.style.left=Q+Ke.left-Ue.left+"px"}),p.on(le,"dblclick",function(Ue){var vt=F(le,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(B.changeActive(vt.hintId),B.pick())}),p.on(le,"click",function(Ue){var vt=F(le,Ue.target||Ue.srcElement);vt&&vt.hintId!=null&&(B.changeActive(vt.hintId),M.options.completeOnSingleClick&&B.pick())}),p.on(le,"mousedown",function(){setTimeout(function(){H.focus()},20)});var tt=this.getSelectedHintRange();return(tt.from!==0||tt.to!==0)&&this.scrollToActive(),p.signal(W,"select",Fe[this.selectedHint],le.childNodes[this.selectedHint]),!0}A.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var M=this.completion.cm.getInputField();M.removeAttribute("aria-activedescendant"),M.removeAttribute("aria-owns");var W=this.completion.cm;this.completion.options.closeOnUnfocus&&(W.off("blur",this.onBlur),W.off("focus",this.onFocus)),W.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var M=this;this.keyMap={Enter:function(){M.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(M,W){if(M>=this.data.list.length?M=W?this.data.list.length-1:0:M<0&&(M=W?0:this.data.list.length-1),this.selectedHint!=M){var B=this.hints.childNodes[this.selectedHint];B&&(B.className=B.className.replace(" "+y,""),B.removeAttribute("aria-selected")),B=this.hints.childNodes[this.selectedHint=M],B.className+=" "+y,B.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",B.id),this.scrollToActive(),p.signal(this.data,"select",this.data.list[this.selectedHint],B)}},scrollToActive:function(){var M=this.getSelectedHintRange(),W=this.hints.childNodes[M.from],B=this.hints.childNodes[M.to],H=this.hints.firstChild;W.offsetTop<this.hints.scrollTop?this.hints.scrollTop=W.offsetTop-H.offsetTop:B.offsetTop+B.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=B.offsetTop+B.offsetHeight-this.hints.clientHeight+H.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var M=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-M),to:Math.min(this.data.list.length-1,this.selectedHint+M)}}};function X(M,W){if(!M.somethingSelected())return W;for(var B=[],H=0;H<W.length;H++)W[H].supportsSelection&&B.push(W[H]);return B}function D(M,W,B,H){if(M.async)M(W,H,B);else{var V=M(W,B);V&&V.then?V.then(H):H(V)}}function Y(M,W){var B=M.getHelpers(W,"hint"),H;if(B.length){var V=function(ce,le,ve){var Fe=X(ce,B);function Te(ae){if(ae==Fe.length)return le(null);D(Fe[ae],ce,ve,function(Ce){Ce&&Ce.list.length>0?le(Ce):Te(ae+1)})}Te(0)};return V.async=!0,V.supportsSelection=!0,V}else return(H=M.getHelper(M.getCursor(),"hintWords"))?function(ce){return p.hint.fromList(ce,{words:H})}:p.hint.anyword?function(ce,le){return p.hint.anyword(ce,le)}:function(){}}p.registerHelper("hint","auto",{resolve:Y}),p.registerHelper("hint","fromList",function(M,W){var B=M.getCursor(),H=M.getTokenAt(B),V,ce=p.Pos(B.line,H.start),le=B;H.start<B.ch&&/\w/.test(H.string.charAt(B.ch-H.start-1))?V=H.string.substr(0,B.ch-H.start):(V="",ce=B);for(var ve=[],Fe=0;Fe<W.words.length;Fe++){var Te=W.words[Fe];Te.slice(0,V.length)==V&&ve.push(Te)}if(ve.length)return{list:ve,from:ce,to:le}}),p.commands.autocomplete=p.showHint;var J={hint:p.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};p.defineOption("hintOptions",null)})})()),Bf.exports}ib();var qf={exports:{}},Kf;function sb(){return Kf||(Kf=1,(function(l,c){(function(p){p(ss())})(function(p){var g=/[\w$]+/,y=500;p.registerHelper("hint","anyword",function(b,k){for(var C=k&&k.word||g,S=k&&k.range||y,j=b.getCursor(),N=b.getLine(j.line),F=j.ch,A=F;A&&C.test(N.charAt(A-1));)--A;for(var X=A!=F&&N.slice(A,F),D=k&&k.list||[],Y={},J=new RegExp(C.source,"g"),M=-1;M<=1;M+=2)for(var W=j.line,B=Math.min(Math.max(W+M*S,b.firstLine()),b.lastLine())+M;W!=B;W+=M)for(var H=b.getLine(W),V;V=J.exec(H);)W==j.line&&V[0]===X||(!X||V[0].lastIndexOf(X,0)==0)&&!Object.prototype.hasOwnProperty.call(Y,V[0])&&(Y[V[0]]=!0,D.push(V[0]));return{list:D,from:p.Pos(j.line,A),to:p.Pos(j.line,F)}})})})()),qf.exports}sb();function ab(l){return l==="python"?"python":l==="csharp"?"text/x-csharp":l==="java"?"text/x-java":l==="jsx"?{name:"javascript",jsx:!0}:l==="javascript"?"javascript":l==="html"?"htmlmixed":l==="css"?"css":"text/plain"}function Pm({value:l,onChange:c,language:p}){const g=we.useRef(null),y=we.useRef(null),b=we.useRef(c);return b.current=c,we.useEffect(()=>{const k=Cf.fromTextArea(g.current,{mode:ab(p),lineNumbers:!0,lineWrapping:!1,indentUnit:4,tabSize:4,indentWithTabs:!1,smartIndent:!0,electricChars:!0,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,extraKeys:{Tab(S){if(S.somethingSelected())S.execCommand("indentMore");else{const j=S.getOption("indentUnit")-S.getCursor().ch%S.getOption("indentUnit");S.replaceSelection(" ".repeat(j),"end")}},"Shift-Tab":S=>S.execCommand("indentLess"),"Ctrl-Space":S=>S.showHint({hint:Cf.hint.anyword,completeSingle:!1})}});k.getInputField().setAttribute("aria-label","Code editor"),k.on("change",S=>{var j;return(j=b.current)==null?void 0:j.call(b,S.getValue())}),y.current=k;const C=typeof ResizeObserver<"u"?new ResizeObserver(()=>k.refresh()):null;return C==null||C.observe(k.getWrapperElement()),()=>{C==null||C.disconnect(),k.toTextArea(),y.current=null}},[p]),we.useEffect(()=>{const k=y.current;if(k&&k.getValue()!==l){const C=k.getCursor();k.setValue(l??""),k.setCursor(C)}},[l]),u.jsx("div",{className:"code-editor-wrap",children:u.jsx("textarea",{ref:g,"aria-label":"Code editor",defaultValue:l,spellCheck:!1})})}const vd=l=>String(l??"").replace(/\r\n/g,`
`).replace(/\n$/,"");function ob(l){const c=Array.isArray(l)?l:[];return{passed:c.filter(p=>p.passed===!0).length,total:c.length}}function $f(l,c){const p=String(l||"").split(/\r?\n/).find(y=>y.startsWith("PUBLIC_CHECK_RESULTS="));if(!p)throw new Error("Python returned no example-check results. See Console for errors.");const g=JSON.parse(p.slice(21));if(!Array.isArray(g)||g.length!==c.length)throw new Error("Python did not finish every published example.");return c.map((y,b)=>({call:y.call||"Example "+(b+1),expected:String(y.expected??""),received:String(g[b].actual??""),error:String(g[b].error||""),passed:g[b].ok===!0}))}function lb(l,c){return c.map((p,g)=>{var y,b,k,C;return{call:"main("+JSON.stringify(p.args||[])+")",expected:vd(p.expected),received:vd((y=l[g])==null?void 0:y.stdout),error:String(((b=l[g])==null?void 0:b.diagnostics)||((k=l[g])==null?void 0:k.stderr)||""),passed:((C=l[g])==null?void 0:C.success)===!0&&vd(l[g].stdout)===vd(p.expected)}})}function ub(l,c,p){return p(l,c.length).map(y=>({call:c[y.index].call,expected:y.expected,received:y.received,error:y.error,passed:y.passed}))}function Am(l){return(l||[]).map((c,p)=>({call:String(c.call||c.label||"Check "+(p+1)),expected:String(c.expected??"Requirement met"),received:String(c.received??(c.pass===!0||c.passed===!0?"Requirement met":"Not yet met")),error:String(c.error||""),passed:c.pass===!0||c.passed===!0}))}function cb(l){var c;return((c=/^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m.exec(l))==null?void 0:c[1])||null}function oc(l,c){var p,g,y;return c==="python"?cb(l):c==="javascript"?((p=/(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:p[1])||null:c==="csharp"?((g=/\b(?:public\s+)?static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:g[1])||null:c==="java"&&((y=/\bpublic\s+static\s+[\w\[\]<>?, ]+?\s+([A-Za-z_]\w*)\s*\(/.exec(l))==null?void 0:y[1])||null}const db=oc;function eh(l,c,p=null){if(typeof l=="string")return JSON.stringify(l);if(l===null)return"null";if(typeof l=="boolean")return String(l);if(typeof l=="number")return Number.isFinite(l)?String(l):"0";if(Array.isArray(l)){const g=l.every(S=>Number.isInteger(S)),y=l.every(S=>typeof S=="string"),b=l.every(S=>typeof S=="boolean"),k=l.length===0&&p?p:g?"int":y?"string":b?"bool":"double";return"new "+(c==="java"?k==="string"?"String":k==="bool"?"boolean":k:k)+"[]{"+l.map(S=>eh(S,c)).join(",")+"}"}throw new Error("This example uses a data type unsupported by the browser checker.")}function th(l,c,p){var k;const g=oc(p,c)||oc(l.starter||"",c);if(!g)throw new Error("The checker could not find a function declaration.");const y=l.challengeExamples||[],b=(((k=y[0])==null?void 0:k.input)||[]).map((C,S)=>{const j=y.map(N=>{var F;return(F=N.input)==null?void 0:F[S]}).find(N=>Array.isArray(N)&&N.length>0);return Array.isArray(j)?typeof j[0]=="boolean"?"bool":typeof j[0]=="string"?"string":Number.isInteger(j[0])?"int":"double":null});return y.map(C=>({...C,call:g+"("+(C.input||[]).map((S,j)=>eh(S,c,b[j])).join(", ")+")",expectedLiteral:eh(C.expected,c),expected:String(C.expected)}))}function pb(l,c,p=!0){const g=oc(l,"python")||oc(c.starter||"","python");if(!g)throw new Error("Define the challenge function before running it.");const y=c.challengeExamples||[];return["import json as __json, io as __io, contextlib as __ctx","__source = "+JSON.stringify(l),"__cases = __json.loads("+JSON.stringify(JSON.stringify(p?y:y.slice(0,1)))+")","__results = []","for __case in __cases:","    try:",'        __env = {"__name__":"student"}','        with __ctx.redirect_stdout(__io.StringIO()): exec(compile(__source,"main.py","exec"),__env)',"        __actual = __env["+JSON.stringify(g)+'](*__case["input"])','        __ok = type(__actual) is type(__case["expected"]) and __actual == __case["expected"]','        __results.append({"ok":__ok,"actual":repr(__actual)[:300],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","error":type(__error).__name__+": "+str(__error)[:300]})','print("PUBLIC_CHECK_RESULTS="+__json.dumps(__results))'].join(`
`)}function hb(l,c){const p=th(c,"java",l);if(!p.length)throw new Error("No visible examples are available.");const g=p.map((y,b)=>`try{Object actual=Solution.${y.call}; Object expected=${y.expectedLiteral}; boolean ok=java.util.Objects.deepEquals(actual,expected); String received=java.util.Arrays.deepToString(new Object[]{actual}); received=received.substring(1,received.length()-1); System.out.println("PLAYGROUND_CASE:${b}:"+(ok?"1":"0")+":"+received);}catch(Throwable error){System.out.println("PLAYGROUND_CASE:${b}:0:ERROR "+error.getClass().getSimpleName()+" "+error.getMessage());}`);return l+`
class __PlaygroundPracticeChecks {public static void main(String[] args) {`+g.join(`
`)+"}}"}function fb(l,c){const p=String(l||"").split(/\r?\n/).filter(g=>g.startsWith("PLAYGROUND_CASE:"));if(p.length!==c.length)throw new Error("Java did not return all published examples.");return c.map((g,y)=>{const b=p[y],k=/^PLAYGROUND_CASE:(\d+):([01]):([\s\S]*)$/.exec(b);if(!k||Number(k[1])!==y)throw Error("Java returned invalid check data.");return{call:g.call,expected:g.expected,received:k[3],passed:k[2]==="1",error:k[3].startsWith("ERROR ")?k[3]:""}})}function Rm({text:l="",checksText:c="",checkRows:p=null,points:g=null,language:y,activeTab:b,onTabChange:k,previewEnabled:C=!1,previewDoc:S="",previewRef:j}){const N=C?["Preview","Console","Checks"]:["Console","Checks"],F=Array.isArray(p),{passed:A,total:X}=ob(p),D=Number.isFinite(Number(g))&&g!==null&&X?Number(g)*A/X:null;return u.jsxs("section",{className:"console-pane","aria-label":"Workspace output",children:[u.jsxs("div",{className:"console-heading",children:[u.jsx("div",{className:"console-tabs",role:"tablist","aria-label":"Output views",children:N.map(Y=>u.jsxs("button",{type:"button",role:"tab","aria-selected":b===Y,className:b===Y?"active":"",onClick:()=>k(Y),children:[Y==="Console"&&u.jsx(zy,{size:14}),Y]},Y))}),u.jsx("span",{children:"Practice · no submissions"})]}),["html","css","javascript","jsx"].includes(y)&&u.jsx("div",{className:"console-preview",hidden:!C||b!=="Preview",children:u.jsx("iframe",{ref:j,title:"Live student code preview",className:"live-preview-frame",sandbox:"allow-scripts allow-forms",srcDoc:S||"<p>Choose Run to preview your code.</p>"})}),b==="Checks"?u.jsx("div",{className:"practice-check-content",role:"tabpanel","aria-label":"Check feedback",children:F?u.jsxs(u.Fragment,{children:[u.jsxs("p",{className:"check-summary",children:["Checks ",u.jsxs("strong",{children:[A," of ",X," passing"]})]}),u.jsx("p",{className:"check-next",children:A===X?"All published practice checks passed.":"Revise your code, then check again."}),u.jsx("div",{className:"practice-check-cards",children:p.map((Y,J)=>u.jsxs("article",{className:"practice-check-card "+(Y.passed?"passed":"needs-revision"),children:[u.jsxs("header",{children:[u.jsx("code",{children:Y.call||"Example "+(J+1)}),u.jsx("span",{children:Y.passed?"Pass":"Review"})]}),u.jsxs("dl",{children:[u.jsx("dt",{children:"Expected"}),u.jsx("dd",{children:u.jsx("pre",{children:Y.expected??""})}),u.jsx("dt",{children:Y.error?"Error":"Received"}),u.jsx("dd",{children:u.jsx("pre",{children:Y.error||Y.received||"None"})})]})]},J))}),D!==null&&u.jsxs("p",{className:"check-practice-score",children:["Public-check score: ",Number(D.toFixed(2)),"/",g," practice points · ",A,"/",X," examples passed."]}),u.jsx("p",{className:"check-disclaimer",children:"Public examples only. These results do not award grades, completion, or earned points."})]}):u.jsx("pre",{className:"practice-check-message",children:c})}):b==="Console"?u.jsx("pre",{role:"tabpanel","aria-label":"Console output",children:l}):null]})}const mb="PUBLIC_CHECK_RESULTS=";function gb(l,c){const p=Array.isArray(l==null?void 0:l.cases)?l.cases:[],g=JSON.stringify(String(c)),y=JSON.stringify(JSON.stringify(p));return["import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx","import traceback as __trace","__student = "+g,"__cases = __json.loads("+y+")","__results = []","for __example in __cases:","    __out = __io.StringIO()","    try:",'        __env = {"__name__": "__main__"}',"        with __ctx.redirect_stdout(__out), __ctx.redirect_stderr(__out):",'            exec(compile(__student, "main.py", "exec"), __env)',(l==null?void 0:l.mode)==="function"?'            __actual = eval(compile(__ast.parse(__example["call"], mode="eval"), "example", "eval"), __env)':'            __actual = __out.getvalue().rstrip("\\n")',(l==null?void 0:l.mode)==="function"?'        __expected = __ast.literal_eval(__example["expected"])':'        __expected = __example["expected"].rstrip("\\n")',(l==null?void 0:l.mode)==="function"?"        __ok = type(__actual) is type(__expected) and __actual == __expected":"        __ok = __actual == __expected",'        __results.append({"ok":__ok,"actual":str(__actual)[:240],"expected":str(__expected)[:240],"error":""})',"    except BaseException as __error:",'        __results.append({"ok":False,"actual":"","expected":str(__example.get("expected",""))[:240],"error":type(__error).__name__+": "+str(__error)[:200]})','print("'+mb+'"+__json.dumps(__results))'].join(`
`)+`
`}function yb(l,c){const p=String(c).split("(",1)[0].trim();return["import ast as __ast, io as __io, json as __json, contextlib as __ctx",'__env={"__name__":"student"}',"__stream=__io.StringIO()","with __ctx.redirect_stdout(__stream):","    exec(compile("+JSON.stringify(String(l))+',"main.py","exec"),__env)',"    __name="+JSON.stringify(p),'    if __name not in __env and callable(__env.get("solution")): __env[__name]=__env["solution"]',"    __value=eval(compile(__ast.parse("+JSON.stringify(String(c))+',mode="eval"),"sample call","eval"),__env)','print("PLAYGROUND_PREVIEW="+__json.dumps({"call":'+JSON.stringify(String(c))+',"returned":repr(__value)[:5000],"printed":__stream.getvalue()[:10000]}))'].join(`
`)}const vb="modulepreload",xb=function(l){return"/playground/integration/"+l},Gf={},Im=function(c,p,g){let y=Promise.resolve();if(p&&p.length>0){let k=function(j){return Promise.all(j.map(N=>Promise.resolve(N).then(F=>({status:"fulfilled",value:F}),F=>({status:"rejected",reason:F}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),S=(C==null?void 0:C.nonce)||(C==null?void 0:C.getAttribute("nonce"));y=k(p.map(j=>{if(j=xb(j),j in Gf)return;Gf[j]=!0;const N=j.endsWith(".css"),F=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${F}`))return;const A=document.createElement("link");if(A.rel=N?"stylesheet":vb,N||(A.as="script"),A.crossOrigin="",A.href=j,S&&A.setAttribute("nonce",S),document.head.appendChild(A),N)return new Promise((X,D)=>{A.addEventListener("load",X),A.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${j}`)))})}))}function b(k){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=k,window.dispatchEvent(C),!C.defaultPrevented)throw k}return y.then(k=>{for(const C of k||[])C.status==="rejected"&&b(C.reason);return c().catch(b)})},As="/playground/";async function bb(l,c=()=>{}){if(l==="python"){const{PythonRunner:p}=await Im(async()=>{const{PythonRunner:g}=await import("./pythonRunner-Camw9ZBH.js");return{PythonRunner:g}},[]);return{kind:"python",instance:new p({onStatus:c})}}if(l==="java"){const{JavaRunner:p}=await import(As+"java-runner.mjs");return{kind:"java",instance:new p(c)}}if(l==="csharp"){const[{CSharpRunner:p},g]=await Promise.all([import(As+"csharp-runner.mjs"),import(As+"csharp-protocol.mjs")]);return{kind:"csharp",instance:new p({onStatus:c}),protocol:g}}throw Error("No code compiler for "+l)}function wb(l){var c;return((c=/\b(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_]\w*)/.exec(String(l||"")))==null?void 0:c[1])||""}const Yf='<main class="event-card"><h1>Robotics meetup</h1><p>Thursday at 4 PM in the lab.</p><p>Attendees: <span id="count">0</span></p><button id="join">Join</button></main>',kd=l=>JSON.stringify(String(l)).replace(/</g,"\\u003c");function kb(l){return l==="html"?`(()=>{
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
  })();`}function Sb(l,c,p){var k;const g=(c.challengeExamples||[]).slice(0,p?void 0:1);if(!g.length)throw Error("No public challenge examples were published.");const y=(k=/\b(?:export\s+)?function\s+([\w$]+)\s*\(/.exec(l))==null?void 0:k[1];if(!y)throw Error("Define and export the challenge function.");const b=String(l).replace(/\bexport\s+(?=(?:async\s+)?function|const|let|class)/g,"");return`(()=>{
    const cases=${JSON.stringify(g)};
    const results=[];
    try{
      const fn=new Function(${kd(b+"; return "+y+";")})();
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
      if(${p?"true":"false"})send('checks',{results});
      else results.forEach(row=>send('log',{level:row.pass?'info':'warn',text:row.label+' → '+(row.error || row.received)+' (expected '+row.expected+')'}));
    }catch(e){send('error',{text:e.name+': '+e.message});}
  })();`}function _b(l){return"<script>"+l.replace(/<\/script/gi,"<\\/script")+"<\/script>"}async function Ch({code:l,language:c,lessonId:p,task:g={},token:y,check:b=!0}){if(!y)throw Error("A preview token is required.");if(g.webFiles){const{assembleWebFiles:Y}=await Im(async()=>{const{assembleWebFiles:le}=await Promise.resolve().then(()=>Nb);return{assembleWebFiles:le}},[]),J=c==="jsx"?"App.jsx":"script.js";let M=null;c==="jsx"&&(typeof window.PlaygroundJSX!="function"&&await new Promise((le,ve)=>{const Fe=document.createElement("script");Fe.src=As+"vendor/learning/jsx.js",Fe.onload=le,Fe.onerror=()=>ve(Error("React JSX compiler could not load.")),document.head.append(Fe)}),M=window.PlaygroundJSX(g.webFiles["App.jsx"]||""));const{html:W,linkedStyle:B,linkedScript:H}=Y(g.webFiles,{scriptName:J,scriptOverride:M});if(g.projectId){const{buildProjectPreview:le}=await import(As+"project-preview.mjs");return le(W,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const V='<script src="'+As+'vendor/learning/react.js"><\/script>',ce=c==="jsx"?/<\/head\s*>/i.test(W)?W.replace(/<\/head\s*>/i,V+"</head>"):V+W:W;return Ch({code:ce,language:"html",lessonId:p,task:{},token:y,check:b})}if(g.projectId){const{buildProjectPreview:Y}=await import(As+"project-preview.mjs");return Y(l,{token:y,step:g.stepId,projectId:g.projectId,check:b})}const{previewConsoleBridge:k}=await import(As+"console-drawer.mjs"),C=_b(k(y)),S=kd;let j="",N="",F="";if(g.isChallenge&&c==="javascript")j="<main><h2>JavaScript challenge</h2><p>See the Checks and Console tabs for actual function results.</p></main>",N=Sb(l,g,b);else if(c==="html")j=String(l);else if(c==="css")j="<style>"+String(l).replace(/<\/style/gi,"")+"</style>"+Yf;else if(c==="javascript")j=Yf,N=l;else if(c==="jsx")j='<div id="root"></div>',typeof window.PlaygroundJSX!="function"&&await new Promise((Y,J)=>{const M=document.createElement("script");M.src=As+"vendor/learning/jsx.js",M.onload=Y,M.onerror=()=>J(Error("React JSX compiler could not load.")),document.head.append(M)}),N=window.PlaygroundJSX(l),F='<script src="'+As+'vendor/learning/react.js"><\/script>';else throw Error("Preview is not supported for "+c);const A=g.isChallenge&&c==="javascript"?"":kb(p),X=g.isChallenge&&c==="javascript"?"<script>try{"+N+';send("ready");}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>':"<script>try{(0,eval)("+S(N)+');setTimeout(()=>{send("ready");'+(b?A:"")+'},180)}catch(e){send("error",{text:e.name+": "+e.message})}<\/script>',D='<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;"><style>body{font:16px/1.55 system-ui,sans-serif;padding:16px}button{padding:8px 15px}</style>'+C+F;if(c==="html"){const Y=String(j).replace(/^\s*<!doctype[^>]*>/i,"");return"<!doctype html>"+(/<head(?:\s[^>]*)?>/i.test(Y)?Y.replace(/<head(?:\s[^>]*)?>/i,M=>M+D):"<head>"+D+"</head>"+Y)+X}return"<!doctype html><html><head>"+D+"</head><body>"+j+X+"</body></html>"}function Om({lessonId:l,task:c}){const p=c.storageKey||_h.code(l),g=!!c.projectDraft,y=!!c.isChallenge,b=we.useRef(null),k=we.useRef(null),C=we.useRef(null),S=we.useRef(null),j=we.useRef(null),[N,F]=we.useState(!1),[A,X]=we.useState(c.starter||""),[D,Y]=we.useState(c.console||"Press Run to execute the code."),[J,M]=we.useState(""),[W,B]=we.useState("Choose Check to run the published examples. Your scores are not recorded."),[H,V]=we.useState(null),[ce,le]=we.useState(""),ve=["html","css","javascript","jsx"].includes(c.language),Fe=ve&&!y,[Te,ae]=we.useState(Fe?"Preview":"Console"),[Ce,oe]=cn("designlab:editor-height",300);we.useEffect(()=>{X(Rd(p)??c.starter??""),Y(c.console||"Run to see your program output."),B("Choose Check to run the published examples. Your scores are not recorded."),V(null),ae(ve&&!y?"Preview":"Console"),le(""),M("")},[p,c.language,c.starter,c.console,ve,y]),we.useEffect(()=>()=>{var E;clearTimeout(j.current),S.current=null,(E=k.current)==null||E.instance.dispose(),k.current=null},[]),we.useEffect(()=>{function E($){var Se;const O=S.current;if(!O||!C.current||$.source!==C.current.contentWindow||((Se=$.data)==null?void 0:Se.token)!==O.token)return;const Z=$.data;Z.kind==="log"&&Y(Ie=>(Ie==="Run to see your program output."?"":Ie)+"["+(Z.level||"log")+"] "+Z.text+`
`),Z.kind==="clear"&&Y(""),Z.kind==="error"&&(clearTimeout(j.current),Y(Ie=>Ie+"Error: "+Z.text+`
`),O.check&&B("Fix the runtime error, then try Check again."),S.current=null,F(!1),ae("Console")),(Z.kind==="checks"||Z.kind==="project-checks")&&(clearTimeout(j.current),V(Am(Z.results||(Z.text?[{label:Z.text,pass:Z.pass}]:[]))),S.current=null,F(!1),ae("Checks")),Z.kind==="ready"&&!O.check&&(clearTimeout(j.current),S.current=null,F(!1))}return window.addEventListener("message",E),()=>window.removeEventListener("message",E)},[]);function ye(E){if(!b.current)return;const $=b.current.getBoundingClientRect();oe(Math.max(160,Math.min($.height-120,E.clientY-$.top)))}async function L(){var E;if(!k.current||k.current.language!==c.language){(E=k.current)==null||E.instance.dispose();const $=await bb(c.language,O=>Y(O));k.current={...$,language:c.language}}return k.current}async function Q(E){var Z,Se,Ie,qe,Oe,ke,Be,Ke,et,$e,Ft,Yt;const $=c.language;if($==="java"&&c.environment==="ide")throw Error("This activity uses Java 26 file I/O and requires a full Java IDE. Browser execution is not supported for this exercise.");const O=await L();if($==="python"){let Ct=A;if(y)Ct=pb(A,{...c,starter:c.starter},E);else if(E){if(!((Z=c.cases)!=null&&Z.length))throw Error("This lesson has no published examples.");Ct=gb(c,A)}else c.mode==="function"&&((Ie=(Se=c.cases)==null?void 0:Se[0])!=null&&Ie.call)&&(Ct=yb(A,c.cases[0].call));const xt=await O.instance.run(Ct);if(E){const tt=y?c.challengeExamples.map(Ue=>({call:(db(A,"python")||"Function")+"("+Ue.input.map(vt=>JSON.stringify(vt)).join(", ")+")",expected:JSON.stringify(Ue.expected)})):c.cases;V($f(xt.output,tt)),Y("Python completed the public checks. Review individual results in Checks.")}else if(y){const tt=$f(xt.output,[{call:"First published example",expected:JSON.stringify(c.challengeExamples[0].expected)}]);Y(tt[0].error||"First example returned "+tt[0].received+". Expected "+tt[0].expected+".")}else if(c.mode==="function"&&((Oe=(qe=c.cases)==null?void 0:qe[0])!=null&&Oe.call)){const tt=String(xt.output||"").split(`
`).find(Ue=>Ue.startsWith("PLAYGROUND_PREVIEW="));if(tt){const Ue=JSON.parse(tt.slice(19));Y(Ue.call+`
Returned: `+Ue.returned+(Ue.printed?`
Printed: `+Ue.printed:""))}else Y(xt.output||"No return value was captured. See your code and retry.")}else Y(xt.output||(xt.success?"Program finished with no printed output.":"The Python program stopped."))}if($==="java"){if(c.environment==="ide")throw Error("This lesson uses Java 26 file input and must run in a full Java IDE. Browser execution is not supported.");if(y){const Ct=th(c,"java",A),xt=E?Ct:Ct.slice(0,1),tt=await O.instance.run(hb(A,{...c,challengeExamples:xt}),[]);if(!tt.success)throw Error([tt.stdout,tt.stderr,tt.diagnostics].filter(Boolean).join(`
`));const Ue=fb(tt.stdout,xt);E?V(Ue):Y(Ue.map(vt=>vt.call+`
Received: `+vt.received+`
Expected: `+vt.expected).join(`
`))}else{const Ct=E?c.cases||[]:[{args:c.runArgs||((Be=(ke=c.cases)==null?void 0:ke[0])==null?void 0:Be.args)||[]}];if(E&&!Ct.length)throw Error("No public Java examples are available for this exercise.");const xt=[];for(const tt of Ct){const Ue=await O.instance.run(A,tt.args||[]);if(xt.push(Ue),!Ue.success)break}if(E){const tt=lb(xt,Ct);if(xt.length!==Ct.length)throw Error("Java stopped before completing all published examples: "+(((Ke=xt.at(-1))==null?void 0:Ke.diagnostics)||((et=xt.at(-1))==null?void 0:et.stderr)||"Unknown error"));V(tt),Y("Java completed the published checks. Review the Checks tab.")}else Y([($e=xt[0])==null?void 0:$e.stdout,(Ft=xt[0])==null?void 0:Ft.stderr,(Yt=xt[0])==null?void 0:Yt.diagnostics].filter(Boolean).join(`
`)||"Java ran without printed output.")}}if($==="csharp"){const Ct=O.protocol,xt=y?th(c,"csharp",A).map(se=>({...se,call:Array.isArray(se.expected)?se.call+".SequenceEqual("+se.expectedLiteral+")":se.call,arrayResult:Array.isArray(se.expected),expected:Array.isArray(se.expected)?"true":se.expectedLiteral})):c.cases||[],tt=y?"Solution":wb(A),Ue=E||y&&xt.length>0;if(E&&!xt.length)throw Error("No public C# examples are available for this exercise.");if(Ue&&!tt)throw Error("The C# checker could not find the public class name.");const vt=E?xt:xt.slice(0,1),yt=Ue?Ct.buildChecks(vt,tt):null,Qe=yt&&vt.some(se=>se.arrayResult)?`using System.Linq;
`+yt:yt,ut=await O.instance.run(A,Qe);if(!ut.compiled||!ut.success)throw Error([ut.diagnostics,ut.stderr].filter(Boolean).join(`
`)||"C# could not execute.");if(Ue){const se=ub(ut.stdout,vt,Ct.parseChecks);E?V(se):Y(se.map(je=>je.call+`
Received: `+je.received+`
Expected: `+je.expected).join(`
`))}else Y(ut.stdout||"C# executed without printed output.")}}async function K(E){if(!N){F(!0),M(""),V(null),E?(B("Running published example checks…"),ae("Checks")):(Y("Preparing runner…"),ae(Fe?"Preview":"Console"));try{if(ve){const $=crypto.randomUUID();S.current={token:$,check:E};const O=await Ch({code:A,language:c.language,lessonId:l,task:c,token:$,check:E});le(O),Y(""),clearTimeout(j.current),j.current=setTimeout(()=>{var Z;((Z=S.current)==null?void 0:Z.token)===$&&(S.current=null,F(!1),Y("The preview did not finish within 7 seconds. Check for errors or an infinite loop."),B("Practice timed out. No result was recorded."),C.current&&(C.current.srcdoc="<p>Preview stopped after timeout.</p>"),ae("Console"))},7e3)}else await Q(E),F(!1)}catch($){clearTimeout(j.current),S.current=null,F(!1);const O=String(($==null?void 0:$.message)||$);Y(O),ae("Console"),E&&B("Check unavailable: "+O)}}}function R(E){if(!N){if(E==="Run"||E==="Check"){K(E==="Check");return}if(E==="Save"){ha(p,A),M("Draft saved in this browser only.");return}E==="Reset"&&(X(c.starter||""),ha(p,c.starter||""),V(null),le(""),B("Choose Check to run published examples again."),Y("Starter code restored. No points were recorded."),ae(Fe?"Preview":"Console"))}}return u.jsxs("div",{className:"code-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(zd,{size:16})," Editor"]}),u.jsxs("div",{className:"right-meta",children:[c.language.toUpperCase()," ",u.jsx(is,{children:"Live practice"})]})]}),u.jsxs("div",{className:"code-workspace",ref:b,style:{"--editor-height":Ce+"px"},children:[u.jsx(Pm,{value:A,language:c.language,onChange:E=>{X(E),(g||y)&&ha(p,E),M(""),V(null),B("Code changed. Choose Check to run fresh examples.")}}),u.jsx(pc,{axis:"rows",onDrag:ye}),u.jsx(Rm,{text:D,checksText:W,checkRows:H,points:c.points,language:c.language,lessonId:l,previewEnabled:Fe,previewDoc:ce,previewRef:C,activeTab:Te,onTabChange:ae})]}),u.jsxs("div",{className:"editor-controls",children:[u.jsxs("div",{children:[["Run","Check","Reset"].map(E=>u.jsx("button",{type:"button",className:"btn",disabled:N,onClick:()=>R(E),children:E},E)),N&&u.jsx("button",{type:"button",className:"btn",onClick:()=>{var E,$,O;(O=(E=k.current)==null?void 0:($=E.instance).stop)==null||O.call($),S.current=null,clearTimeout(j.current),F(!1),Y("Execution stopped.")},children:"Stop"})]}),u.jsxs("div",{children:[u.jsxs("button",{type:"button",className:"btn",disabled:N,onClick:()=>R("Save"),children:[u.jsx(jd,{size:15})," Save"]}),u.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submission and official grading are not connected in this preview",children:[u.jsx(ch,{size:15})," Submit (not enabled)"]})]})]}),u.jsx("div",{className:"editor-note",role:"status",children:J||"Run executes code locally; Check tests public examples only. No grades, points or hand-ins are recorded."})]})}const Th=Object.freeze(["index.html","styles.css","script.js"]),jh=Object.freeze(["index.html","styles.css","App.jsx"]),Mm=l=>l==="jsx"?jh:Th,nh=`<!doctype html>
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
</html>`,Cb=`<!doctype html>
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
</html>`;function Dm(l){return l.endsWith(".html")?"html":l.endsWith(".css")?"css":l.endsWith(".jsx")?"jsx":"javascript"}function rh(l,c=""){const p=String(c).toLowerCase();return l==="jsx"||p==="react"?"App.jsx":l==="css"||/css|style|readable|responsive/.test(p)?"styles.css":l==="javascript"||/\bjs\b|javascript|script|function|array|object|dom|event|state|team|matchup|pick|scor|leaderboard|test|integrat|interact/.test(p)?"script.js":"index.html"}function Tb(l,c="script.js"){if(!l.trim())return"";let p=l;if(!/<link\b[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(p)){const g=`  <link rel="stylesheet" href="styles.css">
`;p=/<\/head\s*>/i.test(p)?p.replace(/<\/head\s*>/i,g+"</head>"):g+p}if(!p.includes('src="'+c+'"')&&!p.includes("src='"+c+"'")){const g='  <script src="'+c+`" defer><\/script>
`;p=/<\/body\s*>/i.test(p)?p.replace(/<\/body\s*>/i,g+"</body>"):p+`
`+g}return p}function lc(l){let c=String(l??"");const p=[],g=[];return c=c.replace(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi,(y,b)=>(p.push(b.trim().replace(/^(?: {4}|\t)/gm,"")),"")),c=c.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi,(y,b,k)=>/\bsrc\s*=/.test(b)||/\btype\s*=\s*["'](?:application\/json|application\/ld\+json|importmap)["']/i.test(b)?y:(g.push(k.trim().replace(/^(?: {4}|\t)/gm,"")),"")),{"index.html":Tb(c.replace(/\n{3,}/g,`

`).trim(),"script.js"),"styles.css":p.join(`

`),"script.js":g.join(`

`)}}function zm(l,c){const p=String(c??"");if(l==="jsx")return{"index.html":Cb,"styles.css":"","App.jsx":p};if(l==="html")return lc(p);if(l==="css")return{"index.html":nh,"styles.css":p,"script.js":""};if(l==="javascript")return{"index.html":nh,"styles.css":"","script.js":p};throw Error("Not a web lesson: "+l)}const Fm=l=>lc(l);function Xo(l,c){if(![...Th,...jh].includes(c))throw Error("Unknown workspace file");return l+":file:"+c}function Wm({base:l,starters:c,legacy:p,read:g,write:y}){const b=Object.keys(c),k=Object.fromEntries(b.map(N=>[N,g(Xo(l,N))]));if(b.some(N=>k[N]!==null&&k[N]!==void 0))return Object.fromEntries(b.map(N=>[N,k[N]??c[N]??""]));const S=p!=null?c["App.jsx"]!==void 0?{...c,"App.jsx":p}:Object.prototype.hasOwnProperty.call(c,"index.html")&&(c["styles.css"]||c["script.js"])&&/<html|<style|<script/i.test(p)||c["index.html"]!==void 0&&/<html|<!doctype|<body/i.test(p)?lc(p):{...c,[c["index.html"]===nh?c["script.js"]?"script.js":"styles.css":"index.html"]:p}:c,j=Object.fromEntries(b.map(N=>[N,S[N]??c[N]??""]));return b.forEach(N=>y(Xo(l,N),j[N])),j}function Vf(l,c){return String(l??"").replace(new RegExp("</"+c,"gi"),"<\\/"+c)}function jb(l,{scriptName:c="script.js",scriptOverride:p=null}={}){let g=String((l==null?void 0:l["index.html"])??"");const y=String((l==null?void 0:l["styles.css"])??""),b=String(p===null?(l==null?void 0:l[c])??"":p);let k=!1,C=!1;if(g=g.replace(/<link\b[^>]*>/gi,S=>/\bhref\s*=\s*["'](?:\.\/)?styles\.css["']/i.test(S)&&/\brel\s*=\s*["']stylesheet["']/i.test(S)?(k=!0,'<style data-web-file="styles.css">'+Vf(y,"style")+"</style>"):S),g=g.replace(/<script\b([^>]*)>\s*<\/script\s*>/gi,(S,j)=>{const N=/\bsrc\s*=\s*["']([^"']+)["']/i.exec(j);return N&&N[1].replace(/^\.\//,"")===c?(C=!0,""):S}),C){const S='<script data-web-file="'+c+'">'+Vf(b,"script")+"<\/script>";g=/<\/body\s*>/i.test(g)?g.replace(/<\/body\s*>/i,S+`
</body>`):g+`
`+S}return{html:g,linkedStyle:k,linkedScript:C}}const Nb=Object.freeze(Object.defineProperty({__proto__:null,REACT_FILE_NAMES:jh,WEB_FILE_NAMES:Th,assembleWebFiles:jb,fileLanguage:Dm,fileNamesFor:Mm,initialFocus:rh,lessonStarterFiles:zm,loadWebDrafts:Wm,projectStarterFiles:Fm,splitEmbeddedWebSource:lc,webDraftKey:Xo},Symbol.toStringTag,{value:"Module"}));function Hm({lessonId:l,task:c}){const p=_h.code(l),g=Mm(c.language),y=c.starterFiles||(c.projectDraft?Fm(c.starter):zm(c.language,c.starter)),[b,k]=we.useState(()=>Wm({base:p,starters:y,legacy:Rd(p),read:Rd,write:ha})),[C,S]=we.useState(()=>rh(c.language,c.focus)),[j,N]=we.useState("Run to render all your linked files together."),[F,A]=we.useState("Check runs the current published practice requirements."),[X,D]=we.useState(null),[Y,J]=we.useState(""),[M,W]=we.useState("Preview"),[B,H]=we.useState(""),[V,ce]=we.useState(!1),[le,ve]=cn("designlab:web-files-editor-height",310),Fe=we.useRef(null),Te=we.useRef(null),ae=we.useRef(null),Ce=we.useRef(null);we.useEffect(()=>{const O=rh(c.language,c.focus);S(g.includes(O)?O:"index.html")},[c.stepId,c.focus,c.language]),we.useEffect(()=>{const O=Z=>{var qe;const Se=Te.current;if(!Se||!Fe.current||Z.source!==Fe.current.contentWindow||((qe=Z.data)==null?void 0:qe.token)!==Se.token)return;const Ie=Z.data;Ie.kind==="log"&&N(Oe=>Oe+(Ie.level==="error"?"Error: ":"")+Ie.text+`
`),Ie.kind==="clear"&&N(""),Ie.kind==="error"&&(clearTimeout(ae.current),Te.current=null,N(Oe=>Oe+"Error: "+Ie.text+`
`),A("Fix the error reported in Console before checking again."),W("Console"),ce(!1)),(Ie.kind==="checks"||Ie.kind==="project-checks")&&(clearTimeout(ae.current),Te.current=null,D(Am(Ie.results||(Ie.text?[{label:Ie.text,pass:Ie.pass}]:[]))),W("Checks"),ce(!1)),Ie.kind==="ready"&&!Se.check&&(clearTimeout(ae.current),Te.current=null,ce(!1))};return window.addEventListener("message",O),()=>{clearTimeout(ae.current),Te.current=null,window.removeEventListener("message",O)}},[]);function oe(O){k(Z=>({...Z,[C]:O})),ha(Xo(p,C),O),H(""),D(null),A("Code changed. Check again to update the results.")}function ye(){g.forEach(O=>ha(Xo(p,O),b[O]??"")),H("All three files saved in this browser only.")}function L(){window.confirm("Restore all three starter files? Your current saved changes will be replaced.")&&(k({...y}),g.forEach(O=>ha(Xo(p,O),y[O]??"")),D(null),J(""),N("Starter files restored."),A("Run Check to evaluate the restored files."),W("Preview"),H("Starter files restored for this lesson or project."))}function Q(){const O=b[C]||"",Z=document.createElement("a"),Se=URL.createObjectURL(new Blob([O],{type:"text/plain;charset=utf-8"}));Z.href=Se,Z.download=C,document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(Se),2e3)}function K(){clearTimeout(ae.current),Te.current=null,ce(!1),J("<p>Preview stopped.</p>"),N("Preview stopped. Check your script for an endless loop."),W("Console")}async function R(O){var Z;if(!V){ce(!0),D(null),H(""),N(""),A(O?"Checking the published requirements…":"Run Check to review the published requirements."),W(O?"Checks":"Preview");try{E();const Se=crypto.randomUUID();Te.current={token:Se,check:O};const Ie=await Ch({language:c.language,code:b[C]||"",lessonId:c.lessonFocus||l,task:{...c,webFiles:b},token:Se,check:O});if(((Z=Te.current)==null?void 0:Z.token)!==Se)return;J(Ie),clearTimeout(ae.current),ae.current=setTimeout(()=>{var qe;((qe=Te.current)==null?void 0:qe.token)===Se&&(K(),A("The preview timed out. No result was recorded."))},7e3)}catch(Se){clearTimeout(ae.current),Te.current=null,ce(!1),N(String((Se==null?void 0:Se.message)||Se)),A("Checks unavailable: "+String((Se==null?void 0:Se.message)||Se)),W("Console")}}}function E(){g.forEach(O=>ha(Xo(p,O),b[O]||""))}function $(O){if(!Ce.current)return;const Z=Ce.current.getBoundingClientRect();ve(Math.max(160,Math.min(Z.height-120,O.clientY-Z.top)))}return u.jsxs("div",{className:"code-pane web-files-pane",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(zd,{size:16})," Project files"]}),u.jsxs("span",{className:"web-file-badge",children:["HTML + CSS + ",c.language==="jsx"?"React":"JavaScript"]})]}),u.jsx("div",{className:"web-file-tabs",role:"tablist","aria-label":"Source files",children:g.map(O=>u.jsx("button",{type:"button",role:"tab","aria-selected":O===C,className:O===C?"active":"",onClick:()=>S(O),children:O},O))}),u.jsxs("div",{className:"code-workspace",ref:Ce,style:{"--editor-height":le+"px"},children:[u.jsx(Pm,{value:b[C]??"",language:Dm(C),onChange:oe},C),u.jsx(pc,{axis:"rows",onDrag:$}),u.jsx(Rm,{text:j,checksText:F,checkRows:X,points:null,language:"html",previewEnabled:!0,previewDoc:Y,previewRef:Fe,activeTab:M,onTabChange:W})]}),u.jsxs("div",{className:"editor-controls",children:[u.jsxs("div",{children:[u.jsx("button",{type:"button",className:"btn",disabled:V,onClick:()=>R(!1),children:"Run"}),u.jsx("button",{type:"button",className:"btn",disabled:V,onClick:()=>R(!0),children:"Check"}),u.jsx("button",{type:"button",className:"btn",disabled:V,onClick:L,children:"Reset"}),V&&u.jsx("button",{type:"button",className:"btn",onClick:K,children:"Stop"})]}),u.jsxs("div",{children:[u.jsxs("button",{type:"button",className:"btn",disabled:V,onClick:Q,children:[u.jsx(Sy,{size:15})," Download file"]}),u.jsxs("button",{type:"button",className:"btn",disabled:V,onClick:ye,children:[u.jsx(jd,{size:15})," Save"]}),u.jsxs("button",{type:"button",className:"btn submit",disabled:!0,title:"Submissions and grading are not connected",children:[u.jsx(ch,{size:15})," Submit (not enabled)"]})]})]}),u.jsx("div",{className:"editor-note",role:"status",children:B||"Edit one file at a time. The HTML link to styles.css and script tag for script.js (or App.jsx) connect the files. Drafts save locally; practice checks award no points."})]})}function Eb({lessonId:l,onAnswerChecked:c}){const p=fh[l],[g,y]=we.useState(null),[b,k]=we.useState(!1);function C(){k(!0),c==null||c({selected:g,correct:g===p.correct})}function S(){y(null),k(!1),c==null||c(null)}return u.jsxs("section",{className:"tsi-practice","aria-label":"Math question",children:[u.jsxs("div",{className:"tsi-practice-heading",children:[u.jsx(am,{size:20}),u.jsxs("div",{children:[u.jsx("h2",{children:"Try this question"}),u.jsx("p",{children:"Choose an answer, then review the explanation on the right."})]})]}),u.jsxs("div",{className:"tsi-question-card",children:[u.jsx("div",{className:"eyebrow",children:"Question"}),u.jsx("h3",{children:p.prompt}),u.jsx("div",{className:"tsi-answers",role:"radiogroup","aria-label":"Choose the correct answer",children:p.options.map((j,N)=>u.jsxs("label",{className:`tsi-choice ${g===N?"selected":""} ${b&&N===p.correct?"correct":""}`,children:[u.jsx("input",{type:"radio",name:`tsi-${l}`,checked:g===N,disabled:b,onChange:()=>y(N)}),u.jsx("span",{className:"tsi-letter",children:String.fromCharCode(65+N)}),u.jsx("span",{children:j})]},j))}),b&&u.jsx("p",{className:"tsi-answer-status",role:"status",children:g===p.correct?"Correct! Read why on the right.":"Not quite. Review the explanation on the right."}),u.jsxs("div",{className:"tsi-buttons",children:[u.jsx("button",{className:"btn primary",disabled:g===null||b,onClick:C,children:"Check answer"}),u.jsxs("button",{className:"btn",onClick:S,children:[u.jsx(Wd,{size:15})," Try again"]})]})]})]})}function Lb(l){const c=String(l||""),p=c.indexOf("## Learn"),g=c.indexOf("## Practice"),y=c.indexOf("## Reflect");if(p<0||g<p)return{learn:"",reflect:"",questions:[]};const b=c.slice(p,g).trim(),k=c.slice(g,y>g?y:void 0),C=y>g?c.slice(y).trim():"",S=[...k.matchAll(/###\s+(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n###\s+\d+\.|$)/g)].map(j=>({number:Number(j[1]),prompt:j[2].trim(),options:[...j[3].matchAll(/-\s+\*\*([A-D])\.\*\*\s+([^\n]+)/g)].map(N=>({letter:N[1],text:N[2].trim()}))}));return{learn:b,reflect:C,questions:S}}function Pb({task:l}){var N;const c=we.useMemo(()=>Lb(l.markdownSource),[l.markdownSource]),p=((N=l.tsiKey)==null?void 0:N.items)||[],[g,y]=we.useState({}),[b,k]=we.useState(!1),C=c.questions.filter(F=>{var A;return g[F.number]===((A=p.find(X=>X.question===F.number))==null?void 0:A.correct)}).length,S=c.questions.length===4&&c.questions.every(F=>F.options.length===4),j=S&&p.length===4&&Object.keys(g).length===4;return S?u.jsxs("div",{className:"tsi-strand-workspace",children:[u.jsxs("section",{className:"surface-card tsi-strand-questions","aria-label":"TSI math questions",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsx("span",{className:"eyebrow",children:"Practice"}),u.jsx("h2",{children:"Questions"}),u.jsx("p",{children:"Solve each problem, then check your answers against the explanations on the right."})]}),u.jsxs("form",{onSubmit:F=>{F.preventDefault(),j&&k(!0)},children:[c.questions.map(F=>{var X;const A=(X=p.find(D=>D.question===F.number))==null?void 0:X.correct;return u.jsxs("fieldset",{className:"tsi-strand-question",disabled:b,children:[u.jsxs("legend",{children:[u.jsx("span",{className:"tsi-strand-question-number",children:F.number})," ",F.prompt]}),u.jsx("div",{className:"tsi-strand-options",children:F.options.map(D=>u.jsxs("label",{className:["tsi-strand-option",g[F.number]===D.letter?"selected":"",b&&A===D.letter?"correct":""].filter(Boolean).join(" "),children:[u.jsx("input",{type:"radio",name:l.id+"-q"+F.number,value:D.letter,checked:g[F.number]===D.letter,onChange:()=>{y(Y=>({...Y,[F.number]:D.letter})),k(!1)}}),u.jsx("span",{className:"tsi-strand-letter",children:D.letter}),u.jsx("span",{children:D.text})]},D.letter))}),b&&u.jsx("p",{className:"tsi-strand-question-status",role:"status",children:g[F.number]===A?"Correct":"Review question "+F.number+" on the right"})]},F.number)}),u.jsxs("div",{className:"tsi-strand-actions",children:[u.jsx("button",{type:"submit",className:"btn primary",disabled:!j||b,children:"Check answers"}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>{y({}),k(!1)},children:[u.jsx(Wd,{size:15})," Try again"]})]}),u.jsx("p",{className:"tsi-strand-progress",role:"status",children:b?C+" of 4 correct · instructional practice only":Object.keys(g).length+" of 4 answered"})]})]}),u.jsxs("section",{className:"surface-card tsi-strand-explanations","aria-label":"Math explanations",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsx("span",{className:"eyebrow",children:"Learn"}),u.jsxs("h2",{children:[u.jsx(Yl,{size:20,"aria-hidden":"true"})," Worked explanations"]})]}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(c.learn)}}),u.jsxs("div",{className:"tsi-strand-review","aria-live":"polite",children:[u.jsx("h3",{children:b?u.jsxs(u.Fragment,{children:[u.jsx(ac,{size:18})," Answer explanations"]}):"Review your answers"}),b?c.questions.map(F=>{const A=p.find(X=>X.question===F.number);return u.jsxs("article",{className:"tsi-strand-answer",children:[u.jsxs("h4",{children:["Question ",F.number," · ",g[F.number]===(A==null?void 0:A.correct)?"Correct":"Needs review"]}),u.jsxs("p",{children:["Your choice: ",g[F.number]," · Correct: ",A==null?void 0:A.correct]}),u.jsx("p",{children:(A==null?void 0:A.explanation)||"A worked explanation is not yet available."})]},F.number)}):u.jsxs("p",{children:["Complete all four questions and choose ",u.jsx("strong",{children:"Check answers"})," to see the explanations for each."]})]}),c.reflect&&u.jsx("div",{className:"tsi-strand-reflect markdown-preview",dangerouslySetInnerHTML:{__html:Zo(c.reflect)}})]}),u.jsx("p",{className:"tsi-strand-disclaimer",children:"Draft TSI instructional practice · 30 minutes · Not an official TSIA2 assessment. Answers in this React preview are not submitted or graded."})]}):u.jsxs("section",{className:"surface-card tsi-strand-error",role:"alert",children:[u.jsx("h2",{children:"Practice questions unavailable"}),u.jsx("p",{children:"This draft lesson's multiple-choice questions could not be loaded. No sample questions were substituted."})]})}const Sd=[["quantitative","Quantitative Reasoning"],["algebraic","Algebraic Reasoning"],["geometry","Geometric and Spatial Reasoning"],["statistics","Probabilistic and Statistical Reasoning"]];function Ab(l){const c=l.answer,p=Number.isInteger(c)?Math.max(1,Math.round(Math.abs(c)*.15)):Math.max(.125,Math.round(Math.abs(c)*.2*1e3)/1e3),g=[c+p,c-p,c+2*p].map(y=>Number(y.toFixed(4)));return g.splice(l.correct_index??0,0,c),g}function Rb(l,c){return Object.fromEntries(Sd.map(([p])=>{const g=l.filter(b=>b.strand===p),y=g.filter(b=>c[b.id]!=="skip"&&Number(c[b.id])===b.answer).length;return[p,{correct:y,total:g.length,level:y===g.length?"Advanced":y>=Math.ceil(g.length*.6)?"Proficient":"Basic"}]}))}function Ib({items:l=[],profiles:c=[]}){var J,M,W;const[p,g]=we.useState({}),[y,b]=we.useState(""),[k,C]=we.useState(""),[S,j]=cn("designlab:tsi-math-placement",{}),[N,F]=we.useState(null),A=we.useMemo(()=>Sd.map(([B,H])=>({id:B,title:H,items:l.filter(V=>V.strand===B)})),[l]),X=N||((J=S.diagnostic)==null?void 0:J.latest)&&S.diagnostic.latest.placement;function D(B){B.preventDefault();const H=c.find(V=>V.code===y.trim().toUpperCase());if(!H){C("Enter a valid MATH01–MATH81 study code.");return}j(V=>({...V,code:H.code,levels:H.levels})),C("Study code applied in this browser. It does not enroll you in a class.")}function Y(B){if(B.preventDefault(),l.some(le=>p[le.id]===void 0)){C("Answer or select Not sure for every question.");return}const H=Rb(l,p),V=Object.fromEntries(Object.entries(H).map(([le,ve])=>[le,ve.level])),ce={at:new Date().toISOString(),placement:H,levels:V,answers:p};j(le=>{var ve;return{...le,levels:V,diagnostic:{first:((ve=le.diagnostic)==null?void 0:ve.first)||ce,latest:ce}}}),F(H),C("Your recommended starting levels are ready. Results are stored in this browser only.")}return u.jsxs("div",{className:"published-reading surface-card tsi-diagnostic",children:[u.jsx("h2",{children:"Find your starting point"}),u.jsx("p",{children:"This is the existing 24-question, four-strand practice diagnostic. It suggests what to study; it does not predict an official TSIA2 score or assign an enrolled class."}),u.jsxs("form",{onSubmit:D,className:"tsi-code-entry",children:[u.jsx("label",{htmlFor:"math-locator-code",children:"Pearson study code (MATH01–MATH81)"}),u.jsx("input",{id:"math-locator-code",type:"text",placeholder:"MATH01",maxLength:6,value:y,onChange:B=>b(B.target.value)}),u.jsx("button",{className:"btn",type:"submit",children:"Apply code"})]}),!!S.code&&u.jsxs("p",{role:"status",children:["Current code: ",u.jsx("strong",{children:S.code}),"."," ","Recommended levels: ",Sd.map(([B,H])=>{var V;return H+": "+((V=S.levels)==null?void 0:V[B])}).join(" · ")]}),u.jsxs("form",{onSubmit:Y,children:[u.jsx("h3",{children:"Take the diagnostic"}),u.jsxs("p",{children:["Choose one answer or Not sure for all ",l.length," questions. This open practice records your first and latest attempts in this browser, not the live gradebook."]}),A.map((B,H)=>u.jsxs("section",{className:"tsi-diagnostic-strand surface-card",children:[u.jsxs("div",{className:"tsi-strand-panel-heading",children:[u.jsxs("span",{className:"eyebrow",children:["Strand ",H+1," of ",A.length]}),u.jsx("h3",{children:B.title}),u.jsxs("p",{children:[B.items.length," questions · Choose an answer or Not sure for each question."]})]}),B.items.map((V,ce)=>u.jsxs("fieldset",{className:"tsi-strand-question",children:[u.jsxs("legend",{children:[u.jsx("span",{className:"tsi-strand-question-number",children:ce+1})," ",V.prompt]}),u.jsxs("div",{className:"tsi-strand-options",children:[Ab(V).map((le,ve)=>u.jsxs("label",{className:"tsi-strand-option "+(p[V.id]===String(le)?"selected":""),children:[u.jsx("input",{type:"radio",name:V.id,value:le,checked:p[V.id]===String(le),onChange:()=>g(Fe=>({...Fe,[V.id]:String(le)}))}),u.jsx("span",{className:"tsi-strand-letter",children:String.fromCharCode(65+ve)}),u.jsx("span",{children:le})]},ve)),u.jsxs("label",{className:"tsi-strand-option tsi-diagnostic-unsure "+(p[V.id]==="skip"?"selected":""),children:[u.jsx("input",{type:"radio",name:V.id,value:"skip",checked:p[V.id]==="skip",onChange:()=>g(le=>({...le,[V.id]:"skip"}))}),u.jsx("span",{className:"tsi-strand-letter",children:"?"}),u.jsx("span",{children:"Not sure"})]})]})]},V.id))]},B.id)),u.jsx("button",{type:"submit",className:"btn primary",children:"Get my recommended levels"})]}),!!k&&u.jsx("p",{role:"status",children:k}),X&&u.jsxs("section",{className:"tsi-diagnostic-results","aria-label":"Diagnostic results",children:[u.jsx("h3",{children:"Recommended starting levels"}),Sd.map(([B,H])=>u.jsxs("p",{children:[u.jsxs("strong",{children:[H,": ",X[B].level]})," (",X[B].correct," of ",X[B].total," correct)"]},B)),u.jsx("p",{children:"This diagnostic is instructional, not a verified measure of college readiness. All published lessons remain available regardless of recommendation."}),!!((M=S.diagnostic)!=null&&M.first)&&!!((W=S.diagnostic)!=null&&W.latest)&&u.jsxs("p",{children:["First attempt: ",new Date(S.diagnostic.first.at).toLocaleDateString()," · Latest: ",new Date(S.diagnostic.latest.at).toLocaleDateString()]})]})]})}function Ob({lessonId:l,course:c,unit:p,unitNumber:g,isCompleted:y=!1,assignment:b=null,grade:k=null,onToggleCompleted:C,readOnlyMode:S=!1}){var M;const j=to(c,l),N=we.useRef(null),[F,A]=we.useState(null),[X,D]=cn("designlab:left-width",420);function Y(W){if(!N.current)return;const B=N.current.getBoundingClientRect();D(Math.max(260,Math.min(B.width-340,W.clientX-B.left)))}const J=c.id==="tsi-math";return J&&l==="tsi-20d-d01"&&((M=c.diagnosticItems)!=null&&M.length)?u.jsxs("div",{className:"lesson-screen",children:[u.jsxs("header",{className:"lesson-header",children:[u.jsx("div",{className:"eyebrow",children:"Day 1 · TSI Math Advisory"}),u.jsx("h1",{children:j.title}),u.jsx("p",{children:"Diagnostic placement · 30-minute advisory plan"})]}),u.jsx(Ib,{items:c.diagnosticItems,profiles:c.locatorProfiles})]}):j!=null&&j.ready?J&&j.tsiStrandDraft?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Ju,{task:j,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:k,onToggleCompleted:C,readOnlyMode:S}),u.jsx(Pb,{task:j})]}):j.language==="text"&&!J?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Ju,{task:j,unit:p,unitNumber:g,isTsi:!1,isCompleted:y,assignment:b,grade:k,onToggleCompleted:C,readOnlyMode:S}),u.jsxs("section",{className:"surface-card published-reading",children:[u.jsx("p",{className:"muted",children:"Published written-practice material. Answer checking and verified scores remain on the current Playground."}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(j.markdownSource)}})]})]}):J&&!fh[l]?u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Ju,{task:j,unit:p,unitNumber:g,isTsi:!0,isCompleted:y,assignment:b,grade:k,onToggleCompleted:C,readOnlyMode:S}),u.jsxs("section",{className:"surface-card published-reading",children:[u.jsx("p",{className:"muted",children:"Published draft lesson · practice shown for learning, not an official TSIA2 score predictor."}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(j.markdownSource)}})]})]}):u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Ju,{task:j,unit:p,unitNumber:g,isTsi:J,isCompleted:y,assignment:b,grade:k,onToggleCompleted:C,readOnlyMode:S}),u.jsxs("div",{className:`workspace-grid ${J?"tsi-workspace":""}`,ref:N,style:{"--left-pane":`${X}px`},children:[J?u.jsx(Eb,{lessonId:l,onAnswerChecked:A}):u.jsx(Sf,{lessonId:l,task:j}),u.jsx(pc,{axis:"columns",onDrag:Y}),J?u.jsx(Sf,{lessonId:l,task:j,isTsi:!0,tsiAnswer:F}):c.id==="mobile-app-dev"&&["html","css","javascript","jsx"].includes(j.language)?u.jsx(Hm,{lessonId:l,task:{...j,lessonFocus:l}},l):u.jsx(Om,{lessonId:l,task:j})]})]}):u.jsxs("div",{className:"lesson-screen",children:[u.jsx(Ju,{task:j,unit:p,unitNumber:g,isTsi:J,isCompleted:y,assignment:b,grade:k,onToggleCompleted:C,readOnlyMode:S}),u.jsxs("section",{className:"lesson-content-pending surface-card",children:[u.jsx("h2",{children:"Lesson coming soon"}),u.jsx("p",{children:"This scheduled lesson has not been authored yet. No practice or scores are available."})]})]})}function Mb({course:l,project:c,stepId:p,openProject:g}){const y=c.steps||[],b=Math.max(0,y.findIndex(X=>X.id===p)),k=y[b],C=we.useRef(null),[S,j]=cn("designlab:project-left-width",430),N="project:"+l.id+":"+c.id,F={id:N,title:c.title,language:c.language||"html",starter:c.starter||"",starterFiles:c.starterFiles||null,challenge:c.summary||"",console:"Run to see your actual page. Check tests the published step requirements in a sandboxed browser preview.",projectDraft:!0,isPublished:!1,projectId:c.id,stepId:k.id,focus:k.focus};function A(X){if(!C.current)return;const D=C.current.getBoundingClientRect();j(Math.max(260,Math.min(D.width-340,X.clientX-D.left)))}return u.jsxs("div",{className:"lesson-screen project-workspace",children:[u.jsxs("header",{className:"lesson-header",children:[u.jsxs("div",{className:"eyebrow",children:["Published guided project · ",y.length," steps"]}),u.jsx("h1",{children:c.title}),u.jsx("p",{children:c.summary}),u.jsx("p",{className:"muted",children:"Run renders your actual project and Check tests the current step. Drafts save in this browser; Submit and verified grading remain disabled."})]}),u.jsx("nav",{className:"project-step-list","aria-label":"Project steps",children:y.map((X,D)=>u.jsxs("button",{type:"button","aria-current":D===b?"step":void 0,className:D===b?"btn primary":"btn",onClick:()=>g(l.id,c.id,X.id),children:[D+1,". ",X.title]},X.id))}),u.jsxs("div",{className:"workspace-grid",ref:C,style:{"--left-pane":S+"px"},children:[u.jsxs("section",{className:"instructions-pane project-reading",children:[u.jsx("div",{className:"pane-header",children:u.jsxs("strong",{children:["Step ",b+1,": ",k.title]})}),u.jsxs("p",{className:"web-files-reading-note",children:["This published walkthrough was originally written for one HTML file. When it says to add a <style> or <script> block, put that code in",u.jsx("code",{children:"styles.css"})," or ",u.jsx("code",{children:"script.js"})," instead. Keep the file links in",u.jsx("code",{children:"index.html"}),"; Run connects them automatically."]}),u.jsx("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:Zo(k.markdownSource)}})]}),u.jsx(pc,{axis:"columns",onDrag:A}),u.jsx(Hm,{lessonId:N,task:F})]}),u.jsxs("nav",{className:"lesson-next-bar","aria-label":"Project step navigation",children:[b>0&&u.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>g(l.id,c.id,y[b-1].id),children:[u.jsx(Dd,{size:16})," ",u.jsxs("span",{children:["Prev: ",y[b-1].title]})]}),b<y.length-1&&u.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>g(l.id,c.id,y[b+1].id),children:[u.jsxs("span",{children:["Next: ",y[b+1].title]})," ",u.jsx(ti,{size:16})]})]})]})}function Db({courseId:l,lessonId:c,projectId:p,projectStepId:g,availableCourses:y=ns,openCourse:b,openProject:k,openChallenges:C,completedLessons:S=[],assignments:j=[],grades:N=[],onToggleLessonComplete:F,courseColors:A={},onSetCourseColor:X,onResetCourseColor:D,readOnlyMode:Y=!1}){const J=y.find(ce=>ce.id===l)||y[0];if(J.id==="test-prep")return u.jsx(Jy,{lessonId:c,openCourse:b,completedLessons:S,onToggleLessonComplete:F});const M=(J.projects||[]).find(ce=>ce.id===p),W=ic(J),B=J.units.findIndex(ce=>rs(ce).includes(c)),H=J.units[B],V=W.indexOf(c);return u.jsx("div",{className:"course-layout integrated-course","data-course":J.id,children:u.jsxs("div",{className:"course-main",children:[u.jsxs("div",{className:"course-breadcrumb",children:[u.jsx("button",{onClick:()=>b(null),children:"All playgrounds"}),u.jsx(ti,{size:14}),c||M?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:()=>b(J.id),children:J.label}),u.jsx(ti,{size:14}),u.jsx("span",{className:"breadcrumb-unit-name",title:H?Rs(H):"",children:H?Rs(H):(M==null?void 0:M.title)||""})]}):u.jsx("span",{children:J.label})]}),M?u.jsx(Mb,{course:J,project:M,stepId:g,openProject:k},M.id):c?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"lesson-mobile-navigation",children:[u.jsx("label",{htmlFor:"lesson-select",children:"Lesson"}),u.jsx("select",{id:"lesson-select",value:c,onChange:ce=>b(J.id,ce.target.value),children:J.units.map((ce,le)=>u.jsx("optgroup",{label:`Unit ${le+1} · ${Rs(ce)}`,children:rs(ce).map(ve=>u.jsx("option",{value:ve,children:no(J,ve)},ve))},ce.id))})]}),u.jsx(Ob,{lessonId:c,course:J,unit:H,unitNumber:B+1,isCompleted:S.includes(c),assignment:j.find(ce=>ce.id==="lesson:"+c),grade:N.find(ce=>ce.id==="lesson:"+c),onToggleCompleted:()=>F==null?void 0:F(c),readOnlyMode:Y},c),u.jsxs("nav",{className:"lesson-next-bar","aria-label":"Lesson sequence",children:[V>0&&u.jsxs("button",{type:"button",className:"lesson-nav-link previous",onClick:()=>b(J.id,W[V-1]),children:[u.jsx(Dd,{size:16,"aria-hidden":"true"}),u.jsxs("span",{children:["Prev: ",no(J,W[V-1])]})]}),V>=0&&V<W.length-1&&u.jsxs("button",{type:"button",className:"lesson-nav-link next",onClick:()=>b(J.id,W[V+1]),children:[u.jsxs("span",{children:["Next: ",no(J,W[V+1])]}),u.jsx(ti,{size:16,"aria-hidden":"true"})]})]})]}):u.jsx(Yy,{course:J,openCourse:b,openProject:k,openChallenges:C,completedLessons:S,assignments:j,grades:N,courseColors:A,onSetCourseColor:X,onResetCourseColor:D,readOnlyMode:Y})]})})}const ga=[{id:"p1",period:"1",name:"Period 1",course:"computer-science-1"},{id:"p3",period:"3",name:"Period 3",course:"computer-science-1"},{id:"p5",period:"5",name:"Period 5",course:"mobile-app-dev"},{id:"p6",period:"6",name:"Period 6",course:"game-programming"},{id:"p7",period:"7",name:"Period 7",course:"mobile-app-dev"},{id:"p8",period:"8",name:"Period 8",course:"computer-science-1"}],Bm=l=>ga.find(c=>c.id===l),Um=l=>{var c;return(c=Bm(l))==null?void 0:c.period},zb=[...new Set(ga.map(l=>l.period))].sort((l,c)=>Number(l)-Number(c)),qm=[{key:"2026-11-02",label:"Nov 2 – Nov 8, 2026"},{key:"2026-10-26",label:"Oct 26 – Nov 1, 2026"}],Vl=l=>{var c,p;return((c=l.sheetName)==null?void 0:c.trim())||((p=l.studentName)==null?void 0:p.trim())||l.github},Jf=l=>(l.sheetName||l.studentName||"").trim().split(/\s+/),Km=(l,c,p)=>{const g=y=>p==="github"?y.github.toLowerCase():p==="first"?(Jf(y)[0]||y.github).toLowerCase():(Jf(y).at(-1)||y.github).toLowerCase();return g(l).localeCompare(g(c),void 0,{numeric:!0})||l.github.localeCompare(c.github)},Fb=[["last","Last name"],["first","First name"],["github","GitHub username"]];function Wb({sectionId:l,onSectionChange:c,setupOpen:p,onToggleSetup:g}){return u.jsxs("div",{className:"teacher-toolbar",children:[u.jsxs("label",{children:["Class section",u.jsx("select",{value:l,onChange:y=>c(y.target.value),children:ga.map(y=>u.jsxs("option",{value:y.id,children:[y.name," · ",ah(y.course)]},y.id))})]}),u.jsxs("button",{type:"button",className:"btn section-setup-toggle","aria-expanded":p,"aria-controls":"teacher-section-setup",onClick:g,children:[p?u.jsx(Hd,{size:16}):u.jsx(dh,{size:16}),p?"Close section setup":"Section setup"]})]})}const Hb=[["overview","Class overview",uh],["curriculum","Curriculum",Yl],["journals","Journals",lh]];function Bb({tab:l,onChange:c}){return u.jsx("div",{className:"tabs teacher-tabs",role:"tablist","aria-label":"Teacher dashboard tabs",children:Hb.map(([p,g,y])=>u.jsxs("button",{type:"button",role:"tab","aria-selected":l===p,className:l===p?"active":"",onClick:()=>c(p),children:[u.jsx(y,{size:16}),g]},p))})}function Ub({section:l}){return u.jsxs("div",{className:"section-banner",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Selected section"}),u.jsxs("h2",{children:[l.name," ",u.jsxs("span",{className:"muted",children:["· ",ah(l.course)]})]})]}),u.jsx(is,{children:"Demo join code: LOCAL01"})]})}function qb({students:l}){const c=[[l.length,"Enrolled students"],[l.filter(p=>p.status==="Active now").length,"Recently interacting"],[l.filter(p=>p.sheetName).length,"Sheet names matched"]];return u.jsx("div",{className:"stat-grid",children:c.map(([p,g])=>u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:p}),u.jsx("span",{children:g})]},g))})}function Kb({students:l,week:c,setWeek:p}){const g=we.useMemo(()=>[...l].sort((y,b)=>(b.weekly[c]||0)-(y.weekly[c]||0)),[l,c]);return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Weekly points"}),u.jsx("p",{children:"Mock verified points · Monday–Sunday in Central Time"})]}),u.jsxs("label",{children:["Week",u.jsx("select",{value:c,onChange:y=>p(y.target.value),children:qm.map(y=>u.jsx("option",{value:y.key,children:y.label},y.key))})]})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Weekly points"}),u.jsx("th",{children:"Sample assignments"})]})}),u.jsx("tbody",{children:g.map(y=>u.jsxs("tr",{children:[u.jsxs("th",{children:[Vl(y),u.jsxs("small",{children:["@",y.github]})]}),u.jsx("td",{children:u.jsx("strong",{children:y.weekly[c]||0})}),u.jsx("td",{children:y.assignments.filter(b=>b.score!==null).length})]},y.id))})]})})]})}function $m({label:l,value:c,onChange:p}){return u.jsxs("label",{children:[l,u.jsx("select",{value:c,onChange:g=>p(g.target.value),children:Fb.map(([g,y])=>u.jsx("option",{value:g,children:y},g))})]})}const $b=l=>l.includes("Completed")?"success":l==="Needs revision"?"warning":"";function Gb({student:l,week:c}){const[p,g]=we.useState(null),y=l.assignments,b=y.filter(C=>C.status==="Completed"||C.status==="Practice completed").length,k=y.filter(C=>C.score!==null).length;return u.jsxs("div",{className:"expanded-student",children:[u.jsxs("div",{className:"expanded-header",children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Assignment history"}),u.jsxs("p",{className:"muted",children:["Sample records for ",Vl(l),". No student data is loaded."]})]}),u.jsxs(is,{tone:"success",children:[l.weekly[c]||0," verified pts this week"]})]}),u.jsxs("div",{className:"mini-stats",children:[u.jsxs("span",{children:[u.jsx("strong",{children:b})," completed"]}),u.jsxs("span",{children:[u.jsx("strong",{children:k})," graded"]}),u.jsxs("span",{children:[u.jsx("strong",{children:y.length})," tracked"]})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table assignment-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Assignment"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Score"}),u.jsx("th",{children:"Updated"}),u.jsx("th",{children:"Action"})]})}),u.jsx("tbody",{children:y.map(C=>{const S=p===C.id;return u.jsxs(we.Fragment,{children:[u.jsxs("tr",{children:[u.jsxs("th",{children:[C.name,u.jsx("small",{children:C.type})]}),u.jsx("td",{children:u.jsx(is,{tone:$b(C.status),children:C.status})}),u.jsx("td",{children:C.score===null?"—":`${C.score} / ${C.possible}`}),u.jsx("td",{children:C.submitted}),u.jsx("td",{children:u.jsx("button",{className:"small-link",onClick:()=>g(S?null:C.id),children:S?"Hide details":"View details"})})]}),S&&u.jsx("tr",{className:"receipt-preview",children:u.jsxs("td",{colSpan:"5",children:[u.jsx("strong",{children:"Sample assignment detail"}),u.jsx("p",{children:"This is a mock submitted-copy preview for layout testing, not the student's actual code."})]})})]},C.id)})})]})})]})}function Yb({students:l,week:c,sort:p,setSort:g,expanded:y,setExpanded:b}){return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Section roster & activity"}),u.jsx("p",{children:"Click a student's name to expand their assignments directly inside the roster."})]}),u.jsx($m,{label:"Sort students by",value:p,onChange:g})]}),u.jsx("div",{className:"overflow",children:u.jsxs("table",{className:"data-table roster-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Student"}),u.jsx("th",{children:"Activity signal"}),u.jsx("th",{children:"Current activity"}),u.jsx("th",{children:"Practice"}),u.jsx("th",{children:"Hand-ins"})]})}),u.jsx("tbody",{children:l.map(k=>{const C=y===k.id;return u.jsxs(we.Fragment,{children:[u.jsxs("tr",{className:C?"selected-row":"",children:[u.jsxs("th",{children:[u.jsxs("button",{className:"student-name-button","aria-expanded":C,onClick:()=>b(C?null:k.id),children:[C?u.jsx(om,{size:16}):u.jsx(ti,{size:16})," ",Vl(k)]}),u.jsxs("small",{children:["@",k.github,k.sections.length>1?" · Sheet periods 1, 3":""]})]}),u.jsx("td",{children:u.jsx(is,{tone:k.status==="Active now"?"success":"",children:k.status})}),u.jsx("td",{children:k.current}),u.jsxs("td",{children:[k.assignments.filter(S=>S.status.includes("Completed")).length," complete"]}),u.jsx("td",{children:k.assignments.filter(S=>S.score!==null).length})]}),C&&u.jsx("tr",{className:"expansion-row",children:u.jsx("td",{colSpan:"5",children:u.jsx(Gb,{student:k,week:c})})})]},k.id)})})]})})]})}function Vb({section:l,students:c,week:p,setWeek:g,sort:y,setSort:b,expanded:k,setExpanded:C}){return u.jsxs(u.Fragment,{children:[u.jsx(Ub,{section:l}),u.jsx(qb,{students:c}),u.jsx(Kb,{students:c,week:p,setWeek:g}),u.jsx(Yb,{students:c,week:p,sort:y,setSort:b,expanded:k,setExpanded:C})]})}function Gm(l,c){return l+"::"+c}function Jb(l,c=[]){if(!(l!=null&&l.sectionId)||!l.lessonId)return"Choose a section and lesson.";if(l.sectionCourseId&&l.sectionCourseId!=="computer-science-1")return"This section uses a different course. Only Computer Science I is connected.";if(!/^\d{4}-\d{2}-\d{2}$/.test(l.dueDate||""))return"Choose a valid due date.";const[p,g,y]=l.dueDate.split("-").map(Number);if(new Date(Date.UTC(p,g-1,y)).toISOString().slice(0,10)!==l.dueDate)return"Choose a valid due date.";const k=Number(l.points);if(!Number.isFinite(k)||!Number.isInteger(k)||k<0||k>1e3)return"Points must be a whole number between 0 and 1,000.";if(l.scope!=="section"&&l.scope!=="selected")return"Choose who receives the assignment.";if(l.scope==="selected"){const C=new Set(c.map(j=>j.id)),S=[...new Set(l.studentIds||[])];if(!S.length||S.some(j=>!C.has(j)))return"Select at least one student from this section."}return null}function Xb(l,c=[]){const p=Jb(l,c);if(p)throw new Error(p);return{id:Gm(l.sectionId,l.lessonId),sectionId:l.sectionId,courseId:"computer-science-1",lessonId:l.lessonId,scope:l.scope,studentIds:l.scope==="selected"?[...new Set(l.studentIds)].sort():[],dueDate:l.dueDate,points:Number(l.points)}}function Qb(l,c){return[...(Array.isArray(l)?l:[]).filter(p=>p.id!==c.id),c]}function Kp(l,c,p){return(l||[]).find(g=>g.id===Gm(c,p))||null}const Zb="/playground/data/computer-science-1/course.json",nc=hi("computer-science-1");function e0({section:l,students:c=[],assignments:p=[],setAssignments:g}){const[y,b]=we.useState(null),[k,C]=we.useState("loading"),[S,j]=we.useState(nc.lessons[0]),[N,F]=we.useState("section"),[A,X]=we.useState([]),[D,Y]=we.useState(""),[J,M]=we.useState(""),[W,B]=we.useState("starter"),[H,V]=we.useState("");we.useEffect(()=>{const K=new AbortController;return fetch(Zb,{signal:K.signal,cache:"no-store"}).then(R=>{if(!R.ok)throw new Error("Curriculum unavailable");return R.json()}).then(R=>{if(!Array.isArray(R.lessons)||!R.lessons.length)throw new Error("Unexpected curriculum response");b(Gl(R)),C("live")}).catch(R=>{R.name!=="AbortError"&&C("snapshot")}),()=>K.abort()},[]);const ce=we.useMemo(()=>y?{...nc,...y}:nc,[y]),le=ce.lessons,ve=le.includes(S)?S:le[0],Fe=to(ce,ve),Te=le.reduce((K,R)=>{var E;return K+(Number((E=to(ce,R))==null?void 0:E.points)||0)},0),ae=nc.lessons.includes(ve),Ce=(l==null?void 0:l.course)==="computer-science-1",oe=Kp(p,l==null?void 0:l.id,ve),ye=c.filter(K=>K.sections.includes(l==null?void 0:l.id));we.useEffect(()=>{var R;const K=Kp(p,l==null?void 0:l.id,ve);F((K==null?void 0:K.scope)||"section"),X((K==null?void 0:K.studentIds)||[]),Y((K==null?void 0:K.dueDate)||""),M(String((K==null?void 0:K.points)??((R=to(ce,ve))==null?void 0:R.points)??0)),V(""),B("starter")},[ve,l==null?void 0:l.id]);function L(K){K.preventDefault();try{const R=Xb({sectionId:l==null?void 0:l.id,sectionCourseId:l==null?void 0:l.course,lessonId:ve,scope:N,studentIds:A,dueDate:D,points:J},ye);g==null||g(E=>Qb(E,R)),V("Preview assignment saved in this browser. No students were notified.")}catch(R){V(R.message)}}function Q(){g==null||g(K=>(K||[]).filter(R=>R.id!==(oe==null?void 0:oe.id))),V("Preview assignment cleared. Live student records were not changed.")}return u.jsxs("section",{className:"panel curriculum-panel","aria-label":"Published curriculum",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsxs("h2",{children:[u.jsx(Yl,{size:18})," Computer Science I curriculum"]}),u.jsxs("p",{children:[ce.units.length," original units · ",le.length," lessons · ",Te," available lesson points"]})]}),u.jsx("span",{className:"curriculum-source",role:"status",children:k==="live"?"Published course • current":k==="loading"?"Checking published course…":"Bundled preview snapshot"})]}),u.jsx("p",{className:"curriculum-explanation",children:"Lesson titles, published points, starter code, and unit order come from the real CS1 catalog. Assignment controls below are a browser-only preview and do not affect live students."}),u.jsxs("div",{className:"curriculum-grid",children:[u.jsx("div",{className:"curriculum-units","aria-label":"Unit and lesson list",children:ce.units.map((K,R)=>u.jsxs("details",{open:rs(K).includes(ve)||R===0,children:[u.jsxs("summary",{children:["Unit ",cc(K,R+1)," · ",Rs(K)]}),u.jsx("div",{children:rs(K).map(E=>u.jsxs("button",{type:"button",className:E===ve?"curriculum-lesson selected":"curriculum-lesson","aria-current":E===ve?"true":void 0,onClick:()=>j(E),children:[no(ce,E),Kp(p,l==null?void 0:l.id,E)&&u.jsx("small",{children:" · Assigned in preview"})]},E))})]},K.id))}),u.jsxs("article",{className:"curriculum-lesson-preview",children:[u.jsx("div",{className:"eyebrow",children:"Published lesson"}),u.jsx("h3",{children:Fe.title}),u.jsx("p",{children:Fe.summary||Fe.challenge||"Practice the skills from this unit."}),u.jsxs("div",{className:"curriculum-meta",children:[u.jsxs("span",{children:[Fe.points??0," published points"]}),u.jsxs("span",{children:[Fe.mode==="function"?"Function":"Script"," · Python"]})]}),u.jsxs("div",{className:"curriculum-code-tabs",role:"tablist","aria-label":"Lesson code",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":W==="starter",className:W==="starter"?"active":"",onClick:()=>B("starter"),children:"Starter code"}),u.jsxs("button",{type:"button",role:"tab","aria-selected":W==="solution",className:W==="solution"?"active":"",onClick:()=>B("solution"),children:[u.jsx(nf,{size:14})," Solution"]})]}),W==="starter"?u.jsx("pre",{className:"curriculum-code",children:u.jsx("code",{children:Fe.starter||"# No starter code provided"})}):u.jsxs("div",{className:"curriculum-solution-locked",role:"status",children:[u.jsx(nf,{size:20}),u.jsxs("div",{children:[u.jsx("strong",{children:"Teacher-only solutions"}),u.jsx("p",{children:"Solutions must be loaded from protected storage after teacher sign-in and authorization. Answer keys are not included in the public React preview."})]})]}),ae?u.jsxs("a",{className:"btn",href:Md(nc,ve),children:["Open lesson in React preview ",u.jsx(lm,{size:14})]}):u.jsx("p",{className:"muted",children:"This newer published lesson is not yet in the React snapshot."}),u.jsxs("div",{className:"curriculum-assignment-editor",children:[u.jsx("h4",{children:"Assign lesson"}),Ce?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"curriculum-assignment-warning",children:"Preview only. Assignments are saved in this browser, not sent to students or the live gradebook."}),u.jsxs("form",{onSubmit:L,className:"curriculum-assignment-form",children:[u.jsxs("label",{children:["Assign to",u.jsxs("select",{value:N,onChange:K=>F(K.target.value),children:[u.jsxs("option",{value:"section",children:["Whole class · ",ye.length," sample students"]}),u.jsx("option",{value:"selected",children:"Selected students"})]})]}),N==="selected"&&u.jsxs("fieldset",{className:"curriculum-recipient-picker",children:[u.jsx("legend",{children:"Choose students"}),ye.length?ye.map(K=>u.jsxs("label",{children:[u.jsx("input",{type:"checkbox",checked:A.includes(K.id),onChange:R=>X(E=>R.target.checked?[...E,K.id]:E.filter($=>$!==K.id))}),u.jsx("span",{children:Vl(K)})]},K.id)):u.jsx("p",{children:"No sample students are enrolled in this section."})]}),u.jsxs("div",{className:"curriculum-assignment-fields",children:[u.jsxs("label",{children:["Due date",u.jsx("input",{type:"date",required:!0,value:D,onChange:K=>Y(K.target.value)})]}),u.jsxs("label",{children:["Points",u.jsx("input",{type:"number",required:!0,min:"0",max:"1000",step:"1",value:J,onChange:K=>M(K.target.value)})]})]}),u.jsxs("div",{className:"curriculum-assignment-actions",children:[u.jsx("button",{type:"submit",className:"btn primary",children:oe?"Update preview assignment":"Save preview assignment"}),oe&&u.jsx("button",{type:"button",className:"btn",onClick:Q,children:"Remove assignment"})]})]}),oe&&u.jsxs("p",{className:"curriculum-current-assignment",children:["Saved for ",oe.scope==="section"?"whole class":oe.studentIds.length+" selected students"," · ","Due ",oe.dueDate," · ",oe.points," points"]}),H&&u.jsx("p",{className:"curriculum-assignment-feedback",role:"status",children:H})]}):u.jsxs("p",{className:"curriculum-assignment-warning",children:[(l==null?void 0:l.name)||"This section"," uses a different course. Choose a Computer Science I section to assign CS1 lessons."]})]})]})]})]})}function t0({students:l}){return u.jsxs("section",{className:"panel",children:[u.jsx("h2",{children:"Section setup"}),u.jsx("p",{children:"Visual preview of configured sections. This sandbox cannot create live classes or assign students."}),u.jsx("div",{className:"setup-grid",children:ga.map(c=>u.jsxs("div",{className:"setup-card",children:[u.jsx("div",{className:"eyebrow",children:c.name}),u.jsx("h3",{children:ah(c.course)}),u.jsxs("span",{children:[l.filter(p=>p.sections.includes(c.id)).length," sample students"]})]},c.id))})]})}function n0({section:l,students:c,submissions:p}){const[g,y]=we.useState(Gp()[0]),[b,k]=we.useState(null),C=Gp(),S=c.map(N=>{const F=p.filter(A=>A.studentId===N.id&&A.sectionId===l.id&&A.week===g);return{student:N,copies:F,latest:F.at(-1)}}),j=S.filter(N=>N.latest).length;return u.jsxs("section",{className:"panel journal-inbox",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Teacher review · Sample records"}),u.jsxs("h2",{children:[u.jsx(lh,{size:19})," Weekly journal submissions"]}),u.jsx("p",{children:"Review essays and logic puzzles from this section. Journals are never automatically graded."})]}),u.jsxs("label",{children:["Journal week ",u.jsx("select",{value:g,onChange:N=>{y(N.target.value),k(null)},children:C.map(N=>u.jsx("option",{value:N,children:Kl(N)},N))})]})]}),u.jsxs("div",{className:"stat-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:j}),u.jsx("span",{children:"Submitted"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:S.length-j}),u.jsx("span",{children:"Missing"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("strong",{children:S.length}),u.jsx("span",{children:"Students in section"})]})]}),u.jsx("div",{className:"journal-inbox-rows",children:S.map(({student:N,latest:F,copies:A})=>u.jsxs("div",{className:"journal-inbox-row",children:[u.jsxs("div",{children:[u.jsxs("strong",{children:[N.first," ",N.last]}),u.jsxs("small",{children:["@",N.github]})]}),u.jsx("span",{className:`journal-status-pill ${F?"submitted":""}`,children:F?"Submitted":"Missing"}),u.jsx("span",{className:"journal-inbox-date",children:F?new Date(F.submittedAt).toLocaleString():"—"}),u.jsx("button",{className:"btn",disabled:!F,onClick:()=>k(b===N.id?null:N.id),children:b===N.id?"Close":"Review"}),b===N.id&&F&&u.jsxs("div",{className:"journal-review-detail",children:[u.jsxs("div",{className:"eyebrow",children:[F.type.replace("-"," ")," · ",A.length," ",A.length===1?"hand-in":"hand-ins"," · Manual review"]}),u.jsx("div",{className:"journal-history-answer",children:F.response}),u.jsxs("p",{className:"hint",children:["AI declaration: ",F.aiUse==="none"?"No AI reported":`Disclosed · ${F.aiDetails}`]})]})]},N.id))}),u.jsx("p",{className:"hint",children:"This inbox uses fictional students and demo submissions created in this browser. No grades or messages are sent."})]})}function r0({students:l,journalSubmissions:c}){const[p,g]=cn("designlab:teacher-tab","overview"),[y,b]=cn("designlab:section","p1"),[k,C]=cn("designlab:sort","last"),[S,j]=cn("designlab:week",qm[0].key),[N,F]=we.useState(null),[A,X]=we.useState(!1),[D,Y]=cn("designlab:teacher-preview-assignments",[]),J=["overview","curriculum","journals"].includes(p)?p:"overview",M=Bm(y)||ga[0],W=we.useMemo(()=>l.filter(B=>B.sections.includes(y)).sort((B,H)=>Km(B,H,k)),[l,y,k]);return u.jsxs("div",{className:"main-content teacher-screen",children:[u.jsx(hh,{eyebrow:"Your classroom · Frontend preview",actions:u.jsx(is,{children:J==="curriculum"?"Real CS1 catalog · demo assignments":"Sample student data"}),children:"Teacher dashboard"}),u.jsx("p",{className:"page-subtitle",children:J==="curriculum"?"Browse published Computer Science I lessons and configure preview-only section assignments.":"Explore your class layout with fictional students. No real student information is loaded."}),u.jsx(Wb,{sectionId:M.id,onSectionChange:B=>{b(B),F(null)},setupOpen:A,onToggleSetup:()=>X(B=>!B)}),A&&u.jsx("div",{id:"teacher-section-setup",children:u.jsx(t0,{students:l})}),u.jsx(Bb,{tab:J,onChange:B=>{g(B),F(null)}}),J==="curriculum"&&u.jsx(e0,{section:M,students:W,assignments:D,setAssignments:Y}),J==="overview"&&u.jsx(Vb,{section:M,students:W,week:S,setWeek:j,sort:k,setSort:C,expanded:N,setExpanded:F}),J==="journals"&&u.jsx(n0,{section:M,students:W,submissions:c})]})}function i0({children:l}){return u.jsx("div",{className:"empty",children:l})}function s0({student:l,isEditing:c,onToggleEdit:p,onDone:g,onPatch:y}){const b=Vl(l);return u.jsxs("article",{className:"account-card",children:[u.jsxs("div",{className:"account-row",children:[u.jsx("span",{className:"avatar",children:b.slice(0,1).toUpperCase()}),u.jsxs("div",{className:"account-identity",children:[u.jsx("h3",{children:b}),u.jsxs("small",{children:["@",l.github]})]}),u.jsx("button",{className:"icon-button","aria-label":`Edit ${b}`,onClick:p,children:c?u.jsx(Hd,{size:17}):u.jsx(dh,{size:17})})]}),u.jsxs("div",{className:"account-footer",children:[u.jsx(is,{tone:l.sheetName?"success":"",children:l.sheetName?"Sheet matched":"Student name fallback"}),l.sections.map(k=>u.jsxs(is,{children:["Period ",Um(k)]},k))]}),c&&u.jsxs("div",{className:"account-edit",children:[u.jsxs("label",{children:["Google Sheet name",u.jsx("input",{value:l.sheetName||"",onChange:k=>y({sheetName:k.target.value||null})})]}),u.jsxs("label",{children:["Student-provided backup",u.jsx("input",{value:l.studentName||"",onChange:k=>y({studentName:k.target.value})})]}),u.jsx("button",{className:"btn",onClick:g,children:"Done"})]})]})}function a0({students:l,sort:c,setSort:p,patchStudent:g}){const[y,b]=cn("designlab:period-filter","all"),[k,C]=we.useState(""),[S,j]=we.useState(null),N=we.useMemo(()=>{const F=k.toLowerCase();return l.filter(A=>(y==="all"||A.sections.some(X=>Um(X)===y))&&[Vl(A),A.github,A.studentName].some(X=>X.toLowerCase().includes(F))).sort((A,X)=>Km(A,X,c))},[l,y,c,k]);return u.jsxs("section",{className:"panel",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Accounts"}),u.jsx("p",{children:"Google Sheet name first, student-entered name second, then GitHub name."})]}),u.jsxs(is,{children:[N.length," accounts"]})]}),u.jsxs("div",{className:"filters",children:[u.jsxs("label",{children:[u.jsx(um,{size:16})," ",u.jsx("input",{"aria-label":"Search accounts",value:k,placeholder:"Search name or GitHub username",onChange:F=>C(F.target.value)})]}),u.jsxs("label",{children:["Class period",u.jsxs("select",{value:y,onChange:F=>b(F.target.value),children:[u.jsx("option",{value:"all",children:"All periods"}),zb.map(F=>u.jsx("option",{children:F},F))]})]}),u.jsx($m,{label:"Sort",value:c,onChange:p})]}),u.jsx("p",{className:"info-text",children:"Change a sample Sheet name to test precedence and fallback behavior. These edits are saved only in browser storage."}),u.jsx("div",{className:"account-grid",children:N.map(F=>u.jsx(s0,{student:F,isEditing:S===F.id,onToggleEdit:()=>j(S===F.id?null:F.id),onDone:()=>j(null),onPatch:A=>g(F.id,A)},F.id))}),!N.length&&u.jsx(i0,{children:"No accounts match those filters."})]})}function o0({students:l,setStudents:c}){const[p,g]=cn("designlab:admin-sort","last"),[y,b]=we.useState(""),k=(C,S)=>c(j=>j.map(N=>N.id===C?{...N,...S}:N));return u.jsxs("div",{className:"main-content teacher-screen admin-screen",children:[u.jsx(hh,{eyebrow:"Global management · Frontend preview",actions:u.jsx(is,{children:"Sample accounts only"}),children:"Admin dashboard"}),u.jsxs("p",{className:"page-subtitle",children:[u.jsx(ph,{size:16,"aria-hidden":"true"})," Account management is separate from class-specific teacher tools. This demo has no real accounts or admin permissions attached."]}),u.jsxs("div",{className:"admin-actions",children:[u.jsxs("button",{type:"button",className:"btn",onClick:()=>{c(_d),b("Fictional account records restored.")},children:[u.jsx(Wd,{size:15})," Reset sample accounts"]}),y&&u.jsx("small",{role:"status",children:y})]}),u.jsx(a0,{students:l,sort:p,setSort:g,patchStudent:k})]})}const l0={essay:"Think about a time you solved a difficult problem. Explain what you tried first, how you changed your approach, and what you learned. Use specific evidence.","logic-puzzle":"A robot follows this pattern: 2, 6, 12, 20, 30, __. Find the next number. Explain the pattern and show why your answer fits."},Xf={response:"",type:"essay",aiUse:"",aiDetails:""};function u0({submissions:l,setSubmissions:c}){var Te;const[p,g]=cn("designlab:journal-section",ga[0].id),y=ga.find(ae=>ae.id===p)||ga[0],b=_d.filter(ae=>ae.sections.includes(y.id)),[k,C]=cn("designlab:journal-student",_d[0].id),S=b.find(ae=>ae.id===k)||b[0],j=we.useMemo(()=>Gp(),[]),[N,F]=cn("designlab:journal-week",j[0]),A=j.includes(N)?N:j[0],[X,D]=cn("designlab:journal-drafts",{}),[Y,J]=we.useState(""),[M,W]=we.useState(!1),B=jg(y.id,S.id,A),H=X[B]||Xf,V=l.filter(ae=>ae.studentId===S.id&&ae.sectionId===y.id&&ae.week===A),ce=V.at(-1),le=H.response.trim()?H.response.trim().split(/\s+/).length:0;function ve(ae,Ce){D(oe=>({...oe,[B]:{...oe[B]||Xf,[ae]:Ce}})),J("Draft saved in this browser.")}function Fe(ae){ae.preventDefault();const Ce=Ng(H);if(Ce){J(Ce);return}const oe={id:`demo-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,sectionId:y.id,studentId:S.id,studentName:`${S.first} ${S.last}`,courseId:y.course,week:A,response:H.response.trim(),type:H.type,aiUse:H.aiUse,aiDetails:H.aiDetails.trim(),submittedAt:new Date().toISOString()};c(ye=>[...ye,oe]),J("Demo submission saved locally. Check the Teacher dashboard → Journals tab to review it.")}return u.jsxs("div",{className:"main-content journal-screen",children:[u.jsx("div",{className:"eyebrow",children:"Your classes · Written work"}),u.jsxs("header",{className:"journal-heading",children:[u.jsxs("div",{children:[u.jsx("h1",{children:"Weekly Journals"}),u.jsx("p",{children:"Essay responses, reflections, and logic puzzles—all in one place."})]}),u.jsxs("span",{className:"chip",children:[u.jsx(ph,{size:14})," Local demo only"]})]}),u.jsxs("section",{className:"journal-card journal-selection","aria-label":"Select a journal",children:[u.jsxs("label",{children:["Class section",u.jsx("select",{value:y.id,onChange:ae=>{g(ae.target.value),J("")},children:ga.map(ae=>{var Ce;return u.jsxs("option",{value:ae.id,children:[ae.name," · ",(Ce=hi(ae.course))==null?void 0:Ce.label]},ae.id)})})]}),u.jsxs("label",{children:["Preview as student",u.jsx("select",{value:S.id,onChange:ae=>{C(ae.target.value),J("")},children:b.map(ae=>u.jsxs("option",{value:ae.id,children:[ae.first," ",ae.last," (sample)"]},ae.id))})]}),u.jsxs("label",{children:["Journal week",u.jsx("select",{value:A,onChange:ae=>{F(ae.target.value),J("")},children:j.map(ae=>u.jsxs("option",{value:ae,children:["Week of ",Kl(ae)]},ae))})]})]}),u.jsxs("section",{className:"journal-card journal-editor-card",children:[u.jsxs("div",{className:"journal-section-heading",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"eyebrow",children:[(Te=hi(y.course))==null?void 0:Te.label," · ",y.name]}),u.jsxs("h2",{children:["Journal · Week of ",Kl(A)]})]}),u.jsx("span",{className:`journal-status-pill ${ce?"submitted":""}`,children:ce?"Submitted":"Not submitted"})]}),u.jsx("p",{className:"journal-instructions",children:"This is a fictional prompt for design testing. In production, your teacher would publish the weekly assignment."}),u.jsxs("form",{onSubmit:Fe,children:[u.jsxs("label",{children:["Response type",u.jsxs("select",{value:H.type,onChange:ae=>ve("type",ae.target.value),children:[u.jsx("option",{value:"essay",children:"Essay or written reflection"}),u.jsx("option",{value:"logic-puzzle",children:"Logic puzzle or reasoning task"})]})]}),u.jsxs("div",{className:"journal-prompt",children:[u.jsx("strong",{children:"Sample prompt"}),u.jsx("p",{children:l0[H.type]})]}),u.jsx("label",{htmlFor:"journal-answer",children:"Your response"}),u.jsx("textarea",{id:"journal-answer",rows:"13",maxLength:"100000",spellCheck:!0,placeholder:"Write your explanation here. Show steps and reasoning for logic puzzles.",value:H.response,onChange:ae=>ve("response",ae.target.value)}),u.jsxs("div",{className:"journal-writing-meta",children:[u.jsxs("span",{children:[le," words"]}),u.jsxs("span",{children:[u.jsx(jd,{size:13})," Autosaved in this browser"]})]}),u.jsxs("div",{className:"journal-integrity",children:[u.jsxs("label",{children:["AI-use declaration",u.jsxs("select",{value:H.aiUse,onChange:ae=>ve("aiUse",ae.target.value),children:[u.jsx("option",{value:"",children:"Choose one"}),u.jsx("option",{value:"none",children:"I did not use AI-generated content"}),u.jsx("option",{value:"disclosed",children:"I used AI and will explain how"})]})]}),u.jsx("p",{className:"hint",children:"This is a declaration for review, not an automatic grade. Follow your teacher's classroom AI policy."}),H.aiUse==="disclosed"&&u.jsxs("label",{children:["Describe the AI assistance",u.jsx("textarea",{rows:"3",value:H.aiDetails,onChange:ae=>ve("aiDetails",ae.target.value),placeholder:"Identify which parts involved AI assistance."})]})]}),u.jsxs("div",{className:"journal-actions",children:[u.jsxs("button",{type:"button",className:"btn",onClick:()=>{J("Draft saved in this browser.")},children:[u.jsx(jd,{size:15})," Save draft"]}),u.jsxs("button",{type:"submit",className:"btn submit",children:[u.jsx(ch,{size:15})," Demo submit"]})]}),u.jsx("p",{role:"status",className:"journal-submit-status",children:Y})]}),u.jsxs("div",{className:"journal-bottom-row",children:[u.jsx("p",{className:"hint",children:"No real submissions are sent. Each demo submission records a separate copy; drafts remain editable."}),u.jsxs("button",{type:"button",className:"btn",onClick:()=>W(ae=>!ae),children:[u.jsx(Ey,{size:15})," ",M?"Hide history":`Submission history (${V.length})`]})]}),M&&u.jsx("div",{className:"journal-history",children:V.length?V.map(ae=>u.jsxs("details",{className:"journal-history-item",children:[u.jsxs("summary",{children:[u.jsx(ac,{size:16})," Submitted ",new Date(ae.submittedAt).toLocaleString()," · ",ae.type]}),u.jsx("div",{className:"journal-history-answer",children:ae.response})]},ae.id)):u.jsx("p",{className:"muted",children:"No submissions yet for this week."})})]})]})}const c0=`# Attendance Percentage

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
`,d0=`# Competition Leaderboard Ranks

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
`,p0=`# Confidence Pool Total

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
`,h0=`# Count Matching Events

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
`,f0=`# Longest Winning Streak

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
`,m0=`# Format a Score Line

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
`,g0=`# Second Largest Distinct Value

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
`,y0=`# Sum Positive Values

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
`,v0=`# Count Pairs With Target Sum

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
`,x0=`# Temperature Alert

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
`,b0=`using System;

public static class Solution {
    public static int AttendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,w0=`public class Solution {
    public static int attendancePercent(int present, int total) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,k0=`export function attendancePercent(present, total) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,S0=`def attendance_percent(present: int, total: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,_0=`using System;

public static class Solution {
    public static int[] CompetitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,C0=`public class Solution {
    public static int[] competitionRanks(int[] scores) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,T0=`export function competitionRanks(scores) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,j0=`def competition_ranks(scores: list[int]) -> list[int]:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,N0=`using System;

public static class Solution {
    public static int ConfidenceTotal(bool[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,E0=`public class Solution {
    public static int confidenceTotal(boolean[] correct, int[] weights) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,L0=`export function confidenceTotal(correct, weights) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,P0=`def confidence_total(correct: list[bool], weights: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,A0=`using System;

public static class Solution {
    public static int CountMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,R0=`public class Solution {
    public static int countMatches(int[] events, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,I0=`export function countMatches(events, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,O0=`def count_matches(events: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,M0=`using System;

public static class Solution {
    public static int LongestWinStreak(bool[] wins) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,D0=`public class Solution {
    public static int longestWinStreak(boolean[] wins) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,z0=`export function longestWinStreak(wins) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,F0=`def longest_win_streak(wins: list[bool]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,W0=`using System;

public static class Solution {
    public static string ScoreLine(string name, int points) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,H0=`public class Solution {
    public static String scoreLine(String name, int points) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,B0=`export function scoreLine(name, points) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,U0=`def score_line(name: str, points: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,q0=`using System;

public static class Solution {
    public static int? SecondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,K0=`public class Solution {
    public static Integer secondLargestDistinct(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,$0=`export function secondLargestDistinct(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,G0=`def second_largest_distinct(numbers: list[int]) -> int | None:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Y0=`using System;

public static class Solution {
    public static int SumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,V0=`public class Solution {
    public static int sumPositives(int[] numbers) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,J0=`export function sumPositives(numbers) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,X0=`def sum_positives(numbers: list[int]) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,Q0=`using System;

public static class Solution {
    public static int TargetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,Z0=`public class Solution {
    public static int targetPairs(int[] numbers, int target) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,ew=`export function targetPairs(numbers, target) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,tw=`def target_pairs(numbers: list[int], target: int) -> int:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,nw=`using System;

public static class Solution {
    public static string TemperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new NotImplementedException("Your solution goes here");
    }
}
`,rw=`public class Solution {
    public static String temperatureAlert(int degrees) {
        // TODO: Implement the required behavior.
        throw new UnsupportedOperationException("Your solution goes here");
    }
}
`,iw=`export function temperatureAlert(degrees) {
  // TODO: Implement the required behavior.
  throw new Error("Your solution goes here");
}
`,sw=`def temperature_alert(degrees: int) -> str:
    # TODO: Implement the required behavior.
    raise NotImplementedError('Your solution goes here')
`,aw="attendance-percent",ow=[{input:[18,20],expected:90},{input:[2,3],expected:66},{input:[0,30],expected:0},{input:[7,7],expected:100}],lw={challengeId:aw,cases:ow},uw="competition-ranks",cw=[{input:[[50,50,40,20,40]],expected:[1,1,3,5,3]},{input:[[7,12,9]],expected:[3,1,2]},{input:[[5,5,5]],expected:[1,1,1]},{input:[[]],expected:[]}],dw={challengeId:uw,cases:cw},pw="confidence-total",hw=[{input:[[!0,!1,!0],[20,18,15]],expected:35},{input:[[!1,!1],[5,8]],expected:0},{input:[[],[]],expected:0}],fw={challengeId:pw,cases:hw},mw="count-matches",gw=[{input:[[2,1,2,3,2],2],expected:3},{input:[[],7],expected:0},{input:[[3,4],5],expected:0}],yw={challengeId:mw,cases:gw},vw="longest-win-streak",xw=[{input:[[!0,!0,!1,!0,!0,!0]],expected:3},{input:[[!1,!1]],expected:0},{input:[[]],expected:0},{input:[[!0,!0]],expected:2}],bw={challengeId:vw,cases:xw},ww="score-line",kw=[{input:["Avery",18],expected:"Avery: 18 points"},{input:["Jordan Lee",0],expected:"Jordan Lee: 0 points"},{input:["Mia",-2],expected:"Mia: -2 points"}],Sw={challengeId:ww,cases:kw},_w="second-largest-distinct",Cw=[{input:[[3,1,3,2]],expected:2},{input:[[5,5]],expected:null},{input:[[-10,-7,-7,-2]],expected:-7},{input:[[1]],expected:null}],Tw={challengeId:_w,cases:Cw},jw="sum-positives",Nw=[{input:[[-3,6,0,2,-1]],expected:8},{input:[[-5,0,-1]],expected:0},{input:[[]],expected:0}],Ew={challengeId:jw,cases:Nw},Lw="target-pairs",Pw=[{input:[[1,3,2,2,4],4],expected:2},{input:[[2,2,2],4],expected:3},{input:[[1,2,3],9],expected:0},{input:[[],1],expected:0}],Aw={challengeId:Lw,cases:Pw},Rw="temperature-alert",Iw=[{input:[32],expected:"Freeze"},{input:[90],expected:"Heat"},{input:[72],expected:"Normal"},{input:[-5],expected:"Freeze"}],Ow={challengeId:Rw,cases:Iw},Mw=["python","java","javascript","csharp"],Dw=[{id:"temperature-alert",title:"Temperature Alert",summary:"Choose a status label based on a temperature reading.",difficulty:"Very Easy",points:5,tags:["conditionals","comparisons","functions"],prerequisites:["functions","conditionals"],suggestedCourses:["computer-science-1","game-programming","uil"],languages:["python","java","javascript","csharp"],path:"problems/temperature-alert"},{id:"count-matches",title:"Count Matching Events",summary:"Count how often a particular event code appears.",difficulty:"Easy",points:10,tags:["arrays","loops","comparisons"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/count-matches"},{id:"sum-positives",title:"Sum Positive Values",summary:"Add only the positive values in a data set.",difficulty:"Easy",points:10,tags:["arrays","loops","accumulators"],prerequisites:["functions","loops","arrays"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/sum-positives"},{id:"score-line",title:"Format a Score Line",summary:"Format a player score as a clear single line of text.",difficulty:"Easy",points:10,tags:["strings","formatting","functions"],prerequisites:["variables","strings","functions"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/score-line"},{id:"attendance-percent",title:"Attendance Percentage",summary:"Convert an attendance fraction into a whole-number percentage.",difficulty:"Easy",points:10,tags:["arithmetic","integer-division","functions"],prerequisites:["variables","functions","arithmetic"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/attendance-percent"},{id:"longest-win-streak",title:"Longest Winning Streak",summary:"Find the longest consecutive run of winning results.",difficulty:"Medium",points:15,tags:["arrays","loops","state"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/longest-win-streak"},{id:"confidence-total",title:"Confidence Pool Total",summary:"Compute the points earned from predictions.",difficulty:"Medium",points:15,tags:["arrays","loops","parallel-arrays"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/confidence-total"},{id:"second-largest-distinct",title:"Second Largest Distinct Value",summary:"Return the second-highest unique integer in a collection.",difficulty:"Medium",points:20,tags:["arrays","comparisons","distinct-values"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/second-largest-distinct"},{id:"target-pairs",title:"Count Pairs With Target Sum",summary:"Count pairs of positions that add to a target.",difficulty:"Hard",points:25,tags:["arrays","nested-loops","counting"],prerequisites:["functions","loops","arrays","conditionals"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/target-pairs"},{id:"competition-ranks",title:"Competition Leaderboard Ranks",summary:"Assign ranks while handling tied scores and skipped positions.",difficulty:"Hard",points:25,tags:["arrays","sorting","ties"],prerequisites:["functions","loops","arrays","sorting"],suggestedCourses:["computer-science-1","game-programming","mobile-app-dev","uil"],languages:["python","java","javascript","csharp"],path:"problems/competition-ranks"}],Ym={languages:Mw,challenges:Dw},zw=Object.assign({"../challenge-bank/problems/attendance-percent/problem.md":c0,"../challenge-bank/problems/competition-ranks/problem.md":d0,"../challenge-bank/problems/confidence-total/problem.md":p0,"../challenge-bank/problems/count-matches/problem.md":h0,"../challenge-bank/problems/longest-win-streak/problem.md":f0,"../challenge-bank/problems/score-line/problem.md":m0,"../challenge-bank/problems/second-largest-distinct/problem.md":g0,"../challenge-bank/problems/sum-positives/problem.md":y0,"../challenge-bank/problems/target-pairs/problem.md":v0,"../challenge-bank/problems/temperature-alert/problem.md":x0}),Fw=Object.assign({"../challenge-bank/problems/attendance-percent/starters/Solution.cs":b0,"../challenge-bank/problems/attendance-percent/starters/Solution.java":w0,"../challenge-bank/problems/attendance-percent/starters/javascript.js":k0,"../challenge-bank/problems/attendance-percent/starters/python.py":S0,"../challenge-bank/problems/competition-ranks/starters/Solution.cs":_0,"../challenge-bank/problems/competition-ranks/starters/Solution.java":C0,"../challenge-bank/problems/competition-ranks/starters/javascript.js":T0,"../challenge-bank/problems/competition-ranks/starters/python.py":j0,"../challenge-bank/problems/confidence-total/starters/Solution.cs":N0,"../challenge-bank/problems/confidence-total/starters/Solution.java":E0,"../challenge-bank/problems/confidence-total/starters/javascript.js":L0,"../challenge-bank/problems/confidence-total/starters/python.py":P0,"../challenge-bank/problems/count-matches/starters/Solution.cs":A0,"../challenge-bank/problems/count-matches/starters/Solution.java":R0,"../challenge-bank/problems/count-matches/starters/javascript.js":I0,"../challenge-bank/problems/count-matches/starters/python.py":O0,"../challenge-bank/problems/longest-win-streak/starters/Solution.cs":M0,"../challenge-bank/problems/longest-win-streak/starters/Solution.java":D0,"../challenge-bank/problems/longest-win-streak/starters/javascript.js":z0,"../challenge-bank/problems/longest-win-streak/starters/python.py":F0,"../challenge-bank/problems/score-line/starters/Solution.cs":W0,"../challenge-bank/problems/score-line/starters/Solution.java":H0,"../challenge-bank/problems/score-line/starters/javascript.js":B0,"../challenge-bank/problems/score-line/starters/python.py":U0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.cs":q0,"../challenge-bank/problems/second-largest-distinct/starters/Solution.java":K0,"../challenge-bank/problems/second-largest-distinct/starters/javascript.js":$0,"../challenge-bank/problems/second-largest-distinct/starters/python.py":G0,"../challenge-bank/problems/sum-positives/starters/Solution.cs":Y0,"../challenge-bank/problems/sum-positives/starters/Solution.java":V0,"../challenge-bank/problems/sum-positives/starters/javascript.js":J0,"../challenge-bank/problems/sum-positives/starters/python.py":X0,"../challenge-bank/problems/target-pairs/starters/Solution.cs":Q0,"../challenge-bank/problems/target-pairs/starters/Solution.java":Z0,"../challenge-bank/problems/target-pairs/starters/javascript.js":ew,"../challenge-bank/problems/target-pairs/starters/python.py":tw,"../challenge-bank/problems/temperature-alert/starters/Solution.cs":nw,"../challenge-bank/problems/temperature-alert/starters/Solution.java":rw,"../challenge-bank/problems/temperature-alert/starters/javascript.js":iw,"../challenge-bank/problems/temperature-alert/starters/python.py":sw}),Ww=Object.assign({"../challenge-bank/problems/attendance-percent/examples.json":lw,"../challenge-bank/problems/competition-ranks/examples.json":dw,"../challenge-bank/problems/confidence-total/examples.json":fw,"../challenge-bank/problems/count-matches/examples.json":yw,"../challenge-bank/problems/longest-win-streak/examples.json":bw,"../challenge-bank/problems/score-line/examples.json":Sw,"../challenge-bank/problems/second-largest-distinct/examples.json":Tw,"../challenge-bank/problems/sum-positives/examples.json":Ew,"../challenge-bank/problems/target-pairs/examples.json":Aw,"../challenge-bank/problems/temperature-alert/examples.json":Ow}),qd=Ym.challenges,ih=Ym.languages,Vm={python:"Python",java:"Java",javascript:"JavaScript",csharp:"C#"},Hw={python:"python.py",java:"Solution.java",javascript:"javascript.js",csharp:"Solution.cs"};function Jm(l){return qd.find(c=>c.id===l)||null}function Bw(l){return zw[`../challenge-bank/problems/${l}/problem.md`]??""}function Uw(l,c){return Fw[`../challenge-bank/problems/${l}/starters/${Hw[c]}`]??""}function qw(l){var c;return((c=Ww[`../challenge-bank/problems/${l}/examples.json`])==null?void 0:c.cases)??[]}const Kw=[...new Set(qd.flatMap(l=>l.tags))].sort((l,c)=>l.localeCompare(c)),$w=["Very Easy","Easy","Medium","Hard"];function Gw({query:l="",topic:c="all",difficulty:p="all",course:g="all",language:y="all"}={}){const b=l.trim().toLocaleLowerCase();return qd.filter(k=>(!b||[k.title,k.summary,...k.tags].join(" ").toLowerCase().includes(b))&&(c==="all"||k.tags.includes(c))&&(p==="all"||k.difficulty===p)&&(g==="all"||k.suggestedCourses.includes(g))&&(y==="all"||k.languages.includes(y))).slice().sort((k,C)=>k.title.localeCompare(C.title))}function Qf(l,c){var b;const[p,...g]=l.split(":"),y=g.join(":");return p==="lesson"?no(hi(c),y):((b=Jm(y))==null?void 0:b.title)||y}function Yw({grades:l=[],assignments:c=[],completedLessons:p=[],readOnlyMode:g=!1,weeklyPoints:y=[],accountStatus:b="disabled"}){const[k,C]=we.useState("all"),S=k==="all"?l:l.filter(D=>D.courseId===k),j=Yp(S),N=g?k==="all"||k==="computer-science-1"?y:[]:Xg(S),F=N[0],A=ns.filter(D=>!g||D.id==="computer-science-1").map(D=>({...D,...Yp(l.filter(Y=>Y.courseId===D.id))})),X=c.filter(D=>k==="all"||D.courseId===k).map(D=>({...D,status:Od(D.id,{assignments:c,grades:l,completedLessons:p})})).filter(D=>D.status.state==="assigned"||D.status.state==="overdue").sort((D,Y)=>D.dueDate.localeCompare(Y.dueDate));return u.jsxs("div",{className:"main-content grades-screen",children:[u.jsxs("header",{className:"grades-heading",children:[u.jsxs("div",{children:[u.jsx("div",{className:"eyebrow",children:"Your progress"}),u.jsx("h1",{children:"Grades"}),u.jsx("p",{children:g?"Verified Computer Science I scores and weekly improvements. Assignments are not yet connected here.":"See your earned points, weekly scores, and work still due."})]}),u.jsxs("label",{className:"grades-filter",children:["Course",u.jsxs("select",{value:k,onChange:D=>C(D.target.value),children:[u.jsx("option",{value:"all",children:"All courses"}),ns.map(D=>u.jsx("option",{value:D.id,children:D.label},D.id))]})]})]}),u.jsx("p",{className:"grades-preview-note",children:g?b==="signed-in"?"Verified Computer Science I results from your existing Playground account. Submissions and grading remain in the current Playground.":"Sign in on the current Playground to see your own verified results here. No changes are made from this test build.":"This preview does not display real student grades or assignments. Verified scores remain in the current Playground."}),u.jsxs("div",{className:"grades-summary",children:[u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(xy,{size:19}),u.jsx("span",{children:"Points earned"}),u.jsxs("strong",{children:[j.earned," ",u.jsxs("small",{children:["/ ",j.possible]})]}),u.jsx("p",{children:j.percent===null?"No graded work yet":`${j.percent}% of graded points`})]}),u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(cm,{size:19}),u.jsx("span",{children:"Graded activities"}),u.jsx("strong",{children:j.count}),u.jsx("p",{children:"Lessons and challenges"})]}),u.jsxs("div",{className:"grades-stat surface-card",children:[u.jsx(vy,{size:19}),u.jsx("span",{children:"Most recent scored week"}),u.jsx("strong",{children:F?g?`+${F.earned}`:`${F.earned} / ${F.possible}`:"—"}),u.jsx("p",{children:F?`Week of ${Kl(F.week)}`:"No scores yet"})]})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:g?"Weekly verified point increases":"Weekly scores"}),N.length?u.jsx("div",{className:"grades-weeks",children:N.map(D=>u.jsxs("div",{className:"grades-week",children:[u.jsxs("div",{children:[u.jsxs("strong",{children:["Week of ",Kl(D.week)]}),u.jsxs("small",{children:[D.count," scored ",D.count===1?"activity":"activities"]})]}),u.jsxs("div",{className:"grades-week-score",children:[u.jsx("strong",{children:g?`+${D.earned} pts`:`${D.earned} / ${D.possible} pts`}),!g&&u.jsx("progress",{value:D.earned,max:Math.max(D.possible,1),"aria-label":`Week of ${Kl(D.week)}: ${D.earned} of ${D.possible} points`})]})]},D.week))}):u.jsx("p",{children:"No graded work in this selection."})]}),k==="all"&&u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"By course"}),u.jsx("div",{className:"grades-course-list",children:A.map(D=>u.jsxs("div",{className:"grades-course-row","data-course":D.id,children:[u.jsx("span",{className:"grades-course-dot","aria-hidden":"true"}),u.jsx("strong",{children:D.label}),u.jsx("span",{children:D.count?`${D.earned} / ${D.possible} pts`:"No grades yet"})]},D.id))})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Scored work"}),S.length?u.jsx("div",{className:"grades-entries",children:S.slice().sort((D,Y)=>Y.gradedAt.localeCompare(D.gradedAt)).map(D=>{var Y;return u.jsxs("div",{className:"grades-entry",children:[u.jsxs("div",{children:[u.jsx("strong",{children:Qf(D.id,D.courseId)}),u.jsxs("small",{children:[u.jsx(Yl,{size:13}),((Y=hi(D.courseId))==null?void 0:Y.label)||D.courseId," · ",Td(D.gradedAt)]})]}),u.jsxs("strong",{children:[D.earned," / ",D.possible," pts"]})]},D.id)})}):u.jsx("p",{children:"No scored lessons or challenges yet."})]}),u.jsxs("section",{className:"grades-panel surface-card",children:[u.jsx("h2",{children:"Still to complete"}),g?u.jsx("p",{children:"Assignment and due-date data will be connected in the next integration stage."}):X.length?u.jsx("div",{className:"grades-entries",children:X.map(D=>{var Y;return u.jsxs("div",{className:"grades-entry",children:[u.jsxs("div",{children:[u.jsx("strong",{children:Qf(D.id,D.courseId)}),u.jsx("small",{children:((Y=hi(D.courseId))==null?void 0:Y.label)||D.courseId})]}),u.jsxs("div",{className:"grades-due-meta",children:[u.jsx("span",{className:`assignment-status ${D.status.state}`,children:D.status.state==="overdue"?"Overdue":"Assigned"}),u.jsxs("small",{children:["Due ",Td(D.dueDate)]})]})]},D.id)})}):u.jsx("p",{children:"Nothing outstanding in this selection."})]})]})}function Vw({filterCourse:l,onSelect:c,onBrowseCourse:p,grades:g=[]}){const[y,b]=we.useState(""),[k,C]=we.useState("all"),[S,j]=we.useState("all"),[N,F]=we.useState("all"),A=l||"all",X=we.useMemo(()=>Gw({query:y,difficulty:k,topic:S,language:N,course:A}),[y,k,S,N,A]),D=()=>{b(""),C("all"),j("all"),F("all"),p(null)};return u.jsxs("div",{className:"main-content challenge-bank-screen",children:[u.jsxs("header",{className:"challenge-bank-intro",children:[u.jsxs("div",{className:"eyebrow",children:[u.jsx(Fd,{size:15})," Shared programming practice"]}),u.jsx("h1",{children:"Challenge Bank"}),u.jsx("p",{children:"One problem library for every class. Choose Python, Java, JavaScript, or C# when solving—without duplicating problems across courses."}),u.jsxs("div",{className:"challenge-summary",children:[u.jsx("strong",{children:qd.length})," original challenges · ",u.jsx("strong",{children:"4"})," languages · ",u.jsx("strong",{children:"1"})," shared library"]})]}),u.jsxs("section",{className:"challenge-filters surface-card","aria-label":"Filter challenges",children:[u.jsxs("div",{className:"filter-title",children:[u.jsx(Cy,{size:17}),u.jsx("strong",{children:"Find a challenge"}),u.jsxs("button",{type:"button",className:"filter-clear",onClick:D,children:[u.jsx(Hd,{size:14})," Clear filters"]})]}),u.jsxs("div",{className:"challenge-filter-grid",children:[u.jsxs("label",{className:"challenge-search-label",children:["Search",u.jsxs("span",{className:"challenge-search",children:[u.jsx(um,{size:16}),u.jsx("input",{type:"search",value:y,placeholder:"Problem, skill, or topic",onChange:Y=>b(Y.target.value)})]})]}),u.jsxs("label",{children:["Course view",u.jsxs("select",{value:A,onChange:Y=>p(Y.target.value==="all"?null:Y.target.value),children:[u.jsx("option",{value:"all",children:"All courses"}),ns.filter(Y=>Y.id!=="tsi-math").map(Y=>u.jsx("option",{value:Y.id,children:Y.label},Y.id))]})]}),u.jsxs("label",{children:["Difficulty",u.jsxs("select",{value:k,onChange:Y=>C(Y.target.value),children:[u.jsx("option",{value:"all",children:"Any difficulty"}),$w.map(Y=>u.jsx("option",{value:Y,children:Y},Y))]})]}),u.jsxs("label",{children:["Topic",u.jsxs("select",{value:S,onChange:Y=>j(Y.target.value),children:[u.jsx("option",{value:"all",children:"Any topic"}),Kw.map(Y=>u.jsx("option",{value:Y,children:Y},Y))]})]}),u.jsxs("label",{children:["Language",u.jsxs("select",{value:N,onChange:Y=>F(Y.target.value),children:[u.jsx("option",{value:"all",children:"Any language"}),ih.map(Y=>u.jsx("option",{value:Y,children:Vm[Y]},Y))]})]})]}),u.jsx("p",{className:"challenge-filter-note",children:"Course matching is informational. Confirm students have learned the prerequisite skills before assigning problems."})]}),u.jsxs("div",{className:"challenge-results-heading",children:[u.jsxs("h2",{children:["Available challenges ",u.jsxs("span",{children:["(",X.length,")"]})]}),u.jsx("span",{children:"Alphabetical order"})]}),X.length?u.jsx("div",{className:"challenge-card-grid",children:X.map(Y=>u.jsxs("a",{className:"challenge-card surface-card",href:nm(Y.id),onClick:J=>{J.button!==0||J.metaKey||J.ctrlKey||J.shiftKey||J.altKey||(J.preventDefault(),c(Y.id))},children:[u.jsxs("div",{className:"challenge-card-top",children:[u.jsx("span",{className:"challenge-level level-"+Y.difficulty.toLowerCase().replace(" ","-"),children:Y.difficulty}),u.jsx("span",{className:"challenge-points",children:xd("challenge:"+Y.id,g)?`${xd("challenge:"+Y.id,g).earned} / ${xd("challenge:"+Y.id,g).possible} pts earned`:`${Y.points} pts available`})]}),u.jsx("h3",{children:Y.title}),u.jsx("p",{children:Y.summary}),u.jsx("div",{className:"challenge-tags",children:Y.tags.map(J=>u.jsx("span",{children:J},J))}),u.jsxs("div",{className:"challenge-course-tags",children:[Y.suggestedCourses.slice(0,3).map(J=>{var M,W;return u.jsx("span",{title:(M=hi(J))==null?void 0:M.label,children:((W=hi(J))==null?void 0:W.short)||J},J)}),Y.suggestedCourses.length>3&&u.jsxs("span",{children:["+",Y.suggestedCourses.length-3]})]}),u.jsxs("span",{className:"challenge-open",children:["Open challenge ",u.jsx(Vp,{size:16})]})]},Y.id))}):u.jsxs("div",{className:"challenge-empty surface-card",children:[u.jsx("h3",{children:"No matching challenges"}),u.jsx("p",{children:"Try a broader topic or clear the filters."}),u.jsx("button",{className:"btn",onClick:D,children:"Show all challenges"})]}),u.jsx("p",{className:"hint challenge-bottom-note",children:"Choose a problem, work through its examples, and compare your approach. Practice here does not count toward your grade."})]})}const Jw=(l,c)=>"designlab:challenge-code:"+l+":"+c;function Xw({challengeId:l,onBack:c}){const p=Jm(l),[g,y]=cn("designlab:challenge-language","python"),b=ih.includes(g)?g:"python",[k,C]=cn("designlab:challenge-left-width",420),S=we.useRef(null);if(!p)return u.jsxs("div",{className:"main-content",children:[u.jsx("h1",{children:"Challenge not found"}),u.jsx("button",{className:"btn",onClick:c,children:"Back to bank"})]});const j=Uw(l,b),N={id:l,title:p.title,language:b,starter:j,kind:"Challenge",challenge:p.summary,points:p.points,console:"Run or Check executes published examples in your selected language.",storageKey:Jw(l,b),challengeExamples:qw(l),isChallenge:!0,isPublished:!1},F=A=>{if(!S.current)return;const X=S.current.getBoundingClientRect();C(Math.max(280,Math.min(X.width-360,A.clientX-X.left)))};return u.jsxs("div",{className:"challenge-detail-page",children:[u.jsxs("div",{className:"challenge-breadcrumb",children:[u.jsxs("button",{onClick:c,children:[u.jsx(sm,{size:16})," Challenge Bank"]}),u.jsx("span",{children:"/"}),u.jsx("span",{children:p.title})]}),u.jsxs("header",{className:"challenge-detail-heading surface-card",children:[u.jsxs("div",{className:"eyebrow",children:["Shared challenge · ",p.difficulty," · ",p.points," available points in the published contract"]}),u.jsx("h1",{children:p.title}),u.jsx("p",{children:p.summary}),u.jsx("p",{children:"Run and Check execute student code using only published examples. No submissions, student records, official points or hidden grading are connected here."}),u.jsxs("div",{className:"challenge-prerequisites",children:[u.jsx("strong",{children:"Prerequisites:"}),p.prerequisites.map(A=>u.jsx("span",{children:A},A))]})]}),u.jsxs("div",{className:"challenge-workspace",ref:S,style:{"--challenge-left":k+"px"},children:[u.jsxs("section",{className:"challenge-instructions",children:[u.jsxs("div",{className:"pane-header",children:[u.jsxs("strong",{children:[u.jsx(yy,{size:16})," Problem & examples"]}),u.jsx("span",{className:"challenge-points",children:"Practice only"})]}),u.jsx("div",{className:"markdown-preview challenge-markdown",dangerouslySetInnerHTML:{__html:Zo(Bw(l))}})]}),u.jsx(pc,{axis:"columns",onDrag:F}),u.jsxs("section",{className:"challenge-editor-panel",children:[u.jsxs("div",{className:"challenge-runtime-toolbar",children:[u.jsxs("label",{className:"challenge-language-selector",children:["Language",u.jsx("select",{"aria-label":"Solution language",value:b,onChange:A=>y(A.target.value),children:ih.map(A=>u.jsx("option",{value:A,children:Vm[A]},A))})]}),u.jsx("span",{children:"Live public-example checks"})]}),u.jsx(Om,{lessonId:"challenge:"+l+":"+b,task:N},l+":"+b)]})]})]})}function Qw(){var R;const[l,c]=we.useState(()=>fd()),[p,g]=cn("designlab:course","computer-science-1"),[y,b]=cn("designlab:theme","dark"),[k,C]=cn("designlab:course-colors",{}),[S,j]=cn("designlab:sidebar",!0);cn("designlab:completed-lessons",[]);const[N,F]=we.useState({status:"loading",grades:[],weeklyPoints:[]}),A=N.grades,X=[],D=Qg([],A),[Y,J]=we.useState({}),[M,W]=we.useState({}),[B,H]=we.useState(!0),V=we.useMemo(()=>ns.filter(E=>E.id==="computer-science-1").map(E=>{if(E.id==="computer-science-1"||E.id==="test-prep")return E;if(E.id==="capstone")return{...E,units:[],lessons:[],lessonRecords:{},publishedContent:!1,projects:[]};const $=Y[E.id];return $?{...E,...$,publishedContent:!0}:{...E,units:[],lessons:[],lessonRecords:{},projects:[],contentLoadingError:M[E.id]||null}}),[Y,M]);we.useEffect(()=>{let E=!0;return oy().then($=>{E&&F($)}).catch(()=>{E&&F({status:"unavailable",grades:[],weeklyPoints:[],message:"Account lookup unavailable. No production records were changed."})}),()=>{E=!1}},[]),we.useEffect(()=>{const E=new AbortController;let $=!0;return Promise.all([].map(async O=>{try{return{courseId:O,data:await ay(O,{signal:E.signal})}}catch(Z){return{courseId:O,error:String((Z==null?void 0:Z.message)||Z)}}})).then(O=>{if(!$)return;const Z={},Se={};for(const Ie of O)Ie.data?Z[Ie.courseId]=Ie.data:Se[Ie.courseId]=Ie.error;J(Z),W(Se),H(!1)}),()=>{$=!1,E.abort()}},[]),we.useEffect(()=>{c(fd(window.location.pathname,V))},[V]);const[ce,le]=cn("designlab:students",_d),[ve,Fe]=cn("designlab:journal-submissions",Eg);we.useEffect(()=>{document.documentElement.dataset.theme=y},[y]),we.useEffect(()=>{$g(k,ns)},[k]);function Te(E,$){!ns.some(O=>O.id===E)||!Id($)||C(O=>({...O&&typeof O=="object"?O:{},[E]:$.toUpperCase()}))}function ae(E){C($=>{const O={...$&&typeof $=="object"?$:{}};return delete O[E],O})}we.useEffect(()=>{var $;l.page==="course"&&g(l.courseId);const E=l.page==="course"?($=hi(l.courseId))==null?void 0:$.label:l.page==="admin"?"Admin dashboard":l.page==="teacher"?"Teacher dashboard":l.page==="grades"?"Grades":l.page==="journals"?"Weekly journals":l.page==="challenges"?"Challenge Bank":l.page==="challenge"?"Coding challenge":"Your playgrounds";document.title=`${E||"Playground"} | Ms. Whitby's Playground — React Lab`},[l.page,l.courseId,g]),we.useEffect(()=>{const E=()=>c(fd(window.location.pathname,V));return window.addEventListener("popstate",E),window.addEventListener("hashchange",E),()=>{window.removeEventListener("popstate",E),window.removeEventListener("hashchange",E)}},[V]);const Ce=we.useCallback(E=>{window.location.pathname!==E&&window.history.pushState({},"",E),c(fd(window.location.pathname,V)),window.scrollTo({top:0,behavior:"auto"})},[V]);function oe(E,$){if(!E)return Ce(ql());g(E),Ce(Md(E,$))}function ye(E,$,O=null){Ce(rm(E,$,O))}function L(E){E==="teacher"?Ce(ef()):E==="admin"?Ce(dy()):E==="journals"?Ce(py()):E==="grades"?Ce(hy()):E==="challenges"?Ce(Ul()):E==="course"?oe(l.page==="course"?l.courseId:p):Ce(ql())}const Q=l.page,K=l.courseId||p;return u.jsxs("div",{className:"app-shell",children:[u.jsx(Wy,{sidebarOpen:S,onToggleSidebar:()=>j(!S),onHome:()=>Ce(ql()),theme:y,setTheme:b,readOnlyMode:Vu,accountLabel:(R=N.user)==null?void 0:R.handle}),u.jsxs("div",{className:pa("app-layout",!S&&"sidebar-closed"),children:[u.jsx(By,{open:S,page:Q,courseId:K,lessonId:l.page==="course"?l.lessonId:null,setPage:L,openCourse:oe,completedLessons:D,assignments:X,grades:A,availableCourses:V,readOnlyMode:Vu,onOpenProject:ye}),u.jsxs("main",{className:"main-panel",children:[u.jsxs("section",{className:"cs1-integration-notice",role:"status",children:[u.jsx("strong",{children:"Computer Science I · read-only integration test"}),u.jsx("span",{children:N.status==="loading"?"Checking your existing Playground session…":N.status==="signed-in"?"Signed in as "+N.user.handle+" · Your own verified grades are shown.":N.status==="signed-out"?"Sign in on the current Playground to view your existing results.":N.message||"Could not verify your existing session."}),u.jsx("a",{href:"/playground/",children:"Open current Playground"})]}),["home","course","grades"].includes(Q)?Q==="home"?u.jsx(Gy,{availableCourses:V,completedLessons:D,openCourse:oe,openTeacher:()=>Ce(ef()),openChallenges:()=>Ce(Ul()),readOnlyMode:Vu}):Q==="course"?u.jsx(Db,{courseId:l.courseId,lessonId:l.lessonId,projectId:l.projectId,projectStepId:l.stepId,availableCourses:V,openCourse:oe,openProject:ye,openChallenges:E=>Ce(Ul(E)),completedLessons:D,assignments:X,grades:A,readOnlyMode:Vu,onToggleLessonComplete:void 0,courseColors:k,onSetCourseColor:Te,onResetCourseColor:ae},l.courseId):Q==="grades"?u.jsx(Yw,{grades:A,assignments:X,completedLessons:D,readOnlyMode:Vu,weeklyPoints:N.weeklyPoints,accountStatus:N.status}):Q==="challenges"?u.jsx(Vw,{grades:A,filterCourse:l.filterCourse,onSelect:E=>Ce(nm(E)),onBrowseCourse:E=>Ce(Ul(E))}):Q==="challenge"?u.jsx(Xw,{challengeId:l.challengeId,grades:A,onBack:()=>Ce(Ul())},l.challengeId):Q==="journals"?u.jsx(u0,{submissions:ve,setSubmissions:Fe}):Q==="teacher"?u.jsx(r0,{students:ce,journalSubmissions:ve}):Q==="admin"?u.jsx(o0,{students:ce,setStudents:le}):B?u.jsxs("div",{className:"main-content route-not-found",role:"status",children:[u.jsx("h1",{children:"Loading published course materials…"}),u.jsx("p",{children:"The lesson and project links will appear once the course catalogs are loaded."})]}):u.jsxs("div",{className:"main-content route-not-found",children:[u.jsx("div",{className:"eyebrow",children:"Link not found"}),u.jsx("h1",{children:"That playground page doesn't exist."}),u.jsx("p",{children:"Check the link or return to the list of playgrounds."}),u.jsx("button",{className:"btn primary",onClick:()=>Ce(ql()),children:"See all playgrounds"})]}):u.jsxs("div",{className:"main-content",children:[u.jsx("h1",{children:"Not enabled in this test build"}),u.jsx("p",{children:"Teacher tools, journals, challenges, and submissions remain in the current Playground until their permissions and data are integrated."}),u.jsx("a",{href:"/playground/",children:"Return to current Playground"})]})]})]}),u.jsx(Uy,{})]})}_g.createRoot(document.getElementById("root")).render(u.jsx(vg.StrictMode,{children:u.jsx(Qw,{})}));
