(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var id={exports:{}},ya={},rd={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function rE(){if(P0)return gt;P0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function p(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(B,Z,Ce){this.props=B,this.context=Z,this.refs=b,this.updater=Ce||_}y.prototype.isReactComponent={},y.prototype.setState=function(B,Z){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Z,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=y.prototype;function T(B,Z,Ce){this.props=B,this.context=Z,this.refs=b,this.updater=Ce||_}var C=T.prototype=new S;C.constructor=T,M(C,y.prototype),C.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(B,Z,Ce){var Ye,Je={},ae=null,me=null;if(Z!=null)for(Ye in Z.ref!==void 0&&(me=Z.ref),Z.key!==void 0&&(ae=""+Z.key),Z)I.call(Z,Ye)&&!O.hasOwnProperty(Ye)&&(Je[Ye]=Z[Ye]);var pe=arguments.length-2;if(pe===1)Je.children=Ce;else if(1<pe){for(var Oe=Array(pe),We=0;We<pe;We++)Oe[We]=arguments[We+2];Je.children=Oe}if(B&&B.defaultProps)for(Ye in pe=B.defaultProps,pe)Je[Ye]===void 0&&(Je[Ye]=pe[Ye]);return{$$typeof:n,type:B,key:ae,ref:me,props:Je,_owner:N.current}}function D(B,Z){return{$$typeof:n,type:B.type,key:Z,ref:B.ref,props:B.props,_owner:B._owner}}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function F(B){var Z={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ce){return Z[Ce]})}var H=/\/+/g;function K(B,Z){return typeof B=="object"&&B!==null&&B.key!=null?F(""+B.key):Z.toString(36)}function oe(B,Z,Ce,Ye,Je){var ae=typeof B;(ae==="undefined"||ae==="boolean")&&(B=null);var me=!1;if(B===null)me=!0;else switch(ae){case"string":case"number":me=!0;break;case"object":switch(B.$$typeof){case n:case e:me=!0}}if(me)return me=B,Je=Je(me),B=Ye===""?"."+K(me,0):Ye,R(Je)?(Ce="",B!=null&&(Ce=B.replace(H,"$&/")+"/"),oe(Je,Z,Ce,"",function(We){return We})):Je!=null&&(G(Je)&&(Je=D(Je,Ce+(!Je.key||me&&me.key===Je.key?"":(""+Je.key).replace(H,"$&/")+"/")+B)),Z.push(Je)),1;if(me=0,Ye=Ye===""?".":Ye+":",R(B))for(var pe=0;pe<B.length;pe++){ae=B[pe];var Oe=Ye+K(ae,pe);me+=oe(ae,Z,Ce,Oe,Je)}else if(Oe=p(B),typeof Oe=="function")for(B=Oe.call(B),pe=0;!(ae=B.next()).done;)ae=ae.value,Oe=Ye+K(ae,pe++),me+=oe(ae,Z,Ce,Oe,Je);else if(ae==="object")throw Z=String(B),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return me}function Q(B,Z,Ce){if(B==null)return B;var Ye=[],Je=0;return oe(B,Ye,"","",function(ae){return Z.call(Ce,ae,Je++)}),Ye}function J(B){if(B._status===-1){var Z=B._result;Z=Z(),Z.then(function(Ce){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ce)},function(Ce){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ce)}),B._status===-1&&(B._status=0,B._result=Z)}if(B._status===1)return B._result.default;throw B._result}var Y={current:null},$={transition:null},ne={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:$,ReactCurrentOwner:N};function ue(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Q,forEach:function(B,Z,Ce){Q(B,function(){Z.apply(this,arguments)},Ce)},count:function(B){var Z=0;return Q(B,function(){Z++}),Z},toArray:function(B){return Q(B,function(Z){return Z})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},gt.Component=y,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=T,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,gt.act=ue,gt.cloneElement=function(B,Z,Ce){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ye=M({},B.props),Je=B.key,ae=B.ref,me=B._owner;if(Z!=null){if(Z.ref!==void 0&&(ae=Z.ref,me=N.current),Z.key!==void 0&&(Je=""+Z.key),B.type&&B.type.defaultProps)var pe=B.type.defaultProps;for(Oe in Z)I.call(Z,Oe)&&!O.hasOwnProperty(Oe)&&(Ye[Oe]=Z[Oe]===void 0&&pe!==void 0?pe[Oe]:Z[Oe])}var Oe=arguments.length-2;if(Oe===1)Ye.children=Ce;else if(1<Oe){pe=Array(Oe);for(var We=0;We<Oe;We++)pe[We]=arguments[We+2];Ye.children=pe}return{$$typeof:n,type:B.type,key:Je,ref:ae,props:Ye,_owner:me}},gt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},gt.createElement=E,gt.createFactory=function(B){var Z=E.bind(null,B);return Z.type=B,Z},gt.createRef=function(){return{current:null}},gt.forwardRef=function(B){return{$$typeof:f,render:B}},gt.isValidElement=G,gt.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:J}},gt.memo=function(B,Z){return{$$typeof:h,type:B,compare:Z===void 0?null:Z}},gt.startTransition=function(B){var Z=$.transition;$.transition={};try{B()}finally{$.transition=Z}},gt.unstable_act=ue,gt.useCallback=function(B,Z){return Y.current.useCallback(B,Z)},gt.useContext=function(B){return Y.current.useContext(B)},gt.useDebugValue=function(){},gt.useDeferredValue=function(B){return Y.current.useDeferredValue(B)},gt.useEffect=function(B,Z){return Y.current.useEffect(B,Z)},gt.useId=function(){return Y.current.useId()},gt.useImperativeHandle=function(B,Z,Ce){return Y.current.useImperativeHandle(B,Z,Ce)},gt.useInsertionEffect=function(B,Z){return Y.current.useInsertionEffect(B,Z)},gt.useLayoutEffect=function(B,Z){return Y.current.useLayoutEffect(B,Z)},gt.useMemo=function(B,Z){return Y.current.useMemo(B,Z)},gt.useReducer=function(B,Z,Ce){return Y.current.useReducer(B,Z,Ce)},gt.useRef=function(B){return Y.current.useRef(B)},gt.useState=function(B){return Y.current.useState(B)},gt.useSyncExternalStore=function(B,Z,Ce){return Y.current.useSyncExternalStore(B,Z,Ce)},gt.useTransition=function(){return Y.current.useTransition()},gt.version="18.3.1",gt}var D0;function Ep(){return D0||(D0=1,rd.exports=rE()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function sE(){if(L0)return ya;L0=1;var n=Ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,v={},p=null,_=null;h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),d.ref!==void 0&&(_=d.ref);for(m in d)r.call(d,m)&&!a.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:p,ref:_,props:v,_owner:o.current}}return ya.Fragment=t,ya.jsx=c,ya.jsxs=c,ya}var N0;function oE(){return N0||(N0=1,id.exports=sE()),id.exports}var L=oE(),Me=Ep(),oc={},sd={exports:{}},Wn={},od={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function aE(){return I0||(I0=1,(function(n){function e($,ne){var ue=$.length;$.push(ne);e:for(;0<ue;){var B=ue-1>>>1,Z=$[B];if(0<o(Z,ne))$[B]=ne,$[ue]=Z,ue=B;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var ne=$[0],ue=$.pop();if(ue!==ne){$[0]=ue;e:for(var B=0,Z=$.length,Ce=Z>>>1;B<Ce;){var Ye=2*(B+1)-1,Je=$[Ye],ae=Ye+1,me=$[ae];if(0>o(Je,ue))ae<Z&&0>o(me,Je)?($[B]=me,$[ae]=ue,B=ae):($[B]=Je,$[Ye]=ue,B=Ye);else if(ae<Z&&0>o(me,ue))$[B]=me,$[ae]=ue,B=ae;else break e}}return ne}function o($,ne){var ue=$.sortIndex-ne.sortIndex;return ue!==0?ue:$.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,v=null,p=3,_=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var ne=t(h);ne!==null;){if(ne.callback===null)r(h);else if(ne.startTime<=$)r(h),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(h)}}function R($){if(b=!1,C($),!M)if(t(d)!==null)M=!0,J(I);else{var ne=t(h);ne!==null&&Y(R,ne.startTime-$)}}function I($,ne){M=!1,b&&(b=!1,S(E),E=-1),_=!0;var ue=p;try{for(C(ne),v=t(d);v!==null&&(!(v.expirationTime>ne)||$&&!F());){var B=v.callback;if(typeof B=="function"){v.callback=null,p=v.priorityLevel;var Z=B(v.expirationTime<=ne);ne=n.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(d)&&r(d),C(ne)}else r(d);v=t(d)}if(v!==null)var Ce=!0;else{var Ye=t(h);Ye!==null&&Y(R,Ye.startTime-ne),Ce=!1}return Ce}finally{v=null,p=ue,_=!1}}var N=!1,O=null,E=-1,D=5,G=-1;function F(){return!(n.unstable_now()-G<D)}function H(){if(O!==null){var $=n.unstable_now();G=$;var ne=!0;try{ne=O(!0,$)}finally{ne?K():(N=!1,O=null)}}else N=!1}var K;if(typeof T=="function")K=function(){T(H)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Q=oe.port2;oe.port1.onmessage=H,K=function(){Q.postMessage(null)}}else K=function(){y(H,0)};function J($){O=$,N||(N=!0,K())}function Y($,ne){E=y(function(){$(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,J(I))},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function($){switch(p){case 1:case 2:case 3:var ne=3;break;default:ne=p}var ue=p;p=ne;try{return $()}finally{p=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function($,ne){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ue=p;p=$;try{return ne()}finally{p=ue}},n.unstable_scheduleCallback=function($,ne,ue){var B=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?B+ue:B):ue=B,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ue+Z,$={id:m++,callback:ne,priorityLevel:$,startTime:ue,expirationTime:Z,sortIndex:-1},ue>B?($.sortIndex=ue,e(h,$),t(d)===null&&$===t(h)&&(b?(S(E),E=-1):b=!0,Y(R,ue-B))):($.sortIndex=Z,e(d,$),M||_||(M=!0,J(I))),$},n.unstable_shouldYield=F,n.unstable_wrapCallback=function($){var ne=p;return function(){var ue=p;p=ne;try{return $.apply(this,arguments)}finally{p=ue}}}})(ad)),ad}var U0;function lE(){return U0||(U0=1,od.exports=aE()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function cE(){if(F0)return Wn;F0=1;var n=Ep(),e=lE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function p(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function _(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,u){if(s===null||typeof s>"u"||_(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(i,s,l,u,g,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new b(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new b(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new b(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new b(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new b(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new b(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new b(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new b(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new b(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,T);y[s]=new b(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,T);y[s]=new b(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,T);y[s]=new b(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new b(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new b(i,1,!1,i.toLowerCase(),null,!0,!0)});function C(i,s,l,u){var g=y.hasOwnProperty(s)?y[s]:null;(g!==null?g.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,g,u)&&(l=null),u||g===null?p(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,u=g.attributeNamespace,l===null?i.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),F=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),$=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=$&&i[$]||i["@@iterator"],typeof i=="function"?i:null)}var ue=Object.assign,B;function Z(i){if(B===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);B=s&&s[1]||""}return`
`+B+i}var Ce=!1;function Ye(i,s){if(!i||Ce)return"";Ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(le){var u=le}Reflect.construct(i,[],s)}else{try{s.call()}catch(le){u=le}i.call(s.prototype)}else{try{throw Error()}catch(le){u=le}i()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var g=le.stack.split(`
`),x=u.stack.split(`
`),A=g.length-1,k=x.length-1;1<=A&&0<=k&&g[A]!==x[k];)k--;for(;1<=A&&0<=k;A--,k--)if(g[A]!==x[k]){if(A!==1||k!==1)do if(A--,k--,0>k||g[A]!==x[k]){var V=`
`+g[A].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=A&&0<=k);break}}}finally{Ce=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Z(i):""}function Je(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=Ye(i.type,!1),i;case 11:return i=Ye(i.type.render,!1),i;case 1:return i=Ye(i.type,!0),i;default:return""}}function ae(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case N:return"Portal";case D:return"Profiler";case E:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case F:return(i.displayName||"Context")+".Consumer";case G:return(i._context.displayName||"Context")+".Provider";case H:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Q:return s=i.displayName||null,s!==null?s:ae(i.type)||"Memo";case J:s=i._payload,i=i._init;try{return ae(i(s))}catch{}}return null}function me(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function We(i){var s=Oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(A){u=""+A,x.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function rt(i){i._valueTracker||(i._valueTracker=We(i))}function $t(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=Oe(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function mt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Mt(i,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Dt(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=pe(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ft(i,s){s=s.checked,s!=null&&C(i,"checked",s,!1)}function Bt(i,s){ft(i,s);var l=pe(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Gt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Gt(i,s.type,pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function z(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Gt(i,s,l){(s!=="number"||mt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var vt=Array.isArray;function Et(i,s,l,u){if(i=i.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=s.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&u&&(i[l].defaultSelected=!0)}else{for(l=""+pe(l),s=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,u&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function je(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function U(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(vt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:pe(l)}}function w(i,s){var l=pe(s.value),u=pe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function X(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Be=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,g){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function be(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(Ke).forEach(function(i){st.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ke[s]=Ke[i]})});function ye(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ke.hasOwnProperty(i)&&Ke[i]?(""+s).trim():s+"px"}function we(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,g=ye(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,g):i[l]=g}}var Xe=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(i,s){if(s){if(Xe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ae=null,Ee=null,Ne=null;function Se(i){if(i=sa(i)){if(typeof Ae!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Sl(s),Ae(i.stateNode,i.type,s))}}function de(i){Ee?Ne?Ne.push(i):Ne=[i]:Ee=i}function ze(){if(Ee){var i=Ee,s=Ne;if(Ne=Ee=null,Se(i),s)for(i=0;i<s.length;i++)Se(s[i])}}function ot(i,s){return i(s)}function Nt(){}var Tt=!1;function ri(i,s,l){if(Tt)return i(s,l);Tt=!0;try{return ot(i,s,l)}finally{Tt=!1,(Ee!==null||Ne!==null)&&(Nt(),ze())}}function Cn(i,s){var l=i.stateNode;if(l===null)return null;var u=Sl(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Os=!1;if(f)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Os=!1}function Tu(i,s,l,u,g,x,A,k,V){var le=Array.prototype.slice.call(arguments,3);try{s.apply(l,le)}catch(xe){this.onError(xe)}}var Sr=!1,is=null,si=!1,rs=null,Ja={onError:function(i){Sr=!0,is=i}};function el(i,s,l,u,g,x,A,k,V){Sr=!1,is=null,Tu.apply(Ja,arguments)}function ks(i,s,l,u,g,x,A,k,V){if(el.apply(this,arguments),Sr){if(Sr){var le=is;Sr=!1,is=null}else throw Error(t(198));si||(si=!0,rs=le)}}function Ii(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ss(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function zo(i){if(Ii(i)!==i)throw Error(t(188))}function tl(i){var s=i.alternate;if(!s){if(s=Ii(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,u=s;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(u=g.return,u!==null){l=u;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return zo(g),i;if(x===u)return zo(g),s;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=g,u=x;else{for(var A=!1,k=g.child;k;){if(k===l){A=!0,l=g,u=x;break}if(k===u){A=!0,u=g,l=x;break}k=k.sibling}if(!A){for(k=x.child;k;){if(k===l){A=!0,l=x,u=g;break}if(k===u){A=!0,u=x,l=g;break}k=k.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function nl(i){return i=tl(i),i!==null?il(i):null}function il(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=il(i);if(s!==null)return s;i=i.sibling}return null}var rl=e.unstable_scheduleCallback,sl=e.unstable_cancelCallback,wu=e.unstable_shouldYield,bu=e.unstable_requestPaint,P=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,ce=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,Pe=e.unstable_LowPriority,Fe=e.unstable_IdlePriority,Re=null,Ie=null;function Qe(i){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Re,i,void 0,(i.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Lt,dt=Math.log,et=Math.LN2;function Lt(i){return i>>>=0,i===0?32:31-(dt(i)/et|0)|0}var Ot=64,Ut=4194304;function yt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Kt(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,g=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var k=A&~g;k!==0?u=yt(k):(x&=A,x!==0&&(u=yt(x)))}else A=l&~g,A!==0?u=yt(A):x!==0&&(u=yt(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&g)===0&&(g=u&-u,x=s&-s,g>=x||g===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-tt(s),g=1<<l,u|=i[l],s&=~g;return u}function $e(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rn(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,g=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-tt(x),k=1<<A,V=g[A];V===-1?((k&l)===0||(k&u)!==0)&&(g[A]=$e(k,s)):V<=s&&(i.expiredLanes|=k),x&=~k}}function xt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function On(){var i=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),i}function kn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Kn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-tt(s),i[s]=l}function Mr(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-tt(l),x=1<<g;s[g]=0,u[g]=-1,i[g]=-1,l&=~x}}function Rt(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-tt(l),g=1<<u;g&s|i[u]&s&&(i[u]|=s),l&=~g}}var at=0;function xi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Zt,oi,er,Ho,dm,Au=!1,ol=[],Er=null,Tr=null,wr=null,Go=new Map,Wo=new Map,br=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hm(i,s){switch(i){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Go.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(s.pointerId)}}function jo(i,s,l,u,g,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[g]},s!==null&&(s=sa(s),s!==null&&oi(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function AS(i,s,l,u,g){switch(s){case"focusin":return Er=jo(Er,i,s,l,u,g),!0;case"dragenter":return Tr=jo(Tr,i,s,l,u,g),!0;case"mouseover":return wr=jo(wr,i,s,l,u,g),!0;case"pointerover":var x=g.pointerId;return Go.set(x,jo(Go.get(x)||null,i,s,l,u,g)),!0;case"gotpointercapture":return x=g.pointerId,Wo.set(x,jo(Wo.get(x)||null,i,s,l,u,g)),!0}return!1}function pm(i){var s=os(i.target);if(s!==null){var l=Ii(s);if(l!==null){if(s=l.tag,s===13){if(s=ss(l),s!==null){i.blockedOn=s,dm(i.priority,function(){er(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function al(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Ru(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);ut=u,l.target.dispatchEvent(u),ut=null}else return s=sa(l),s!==null&&oi(s),i.blockedOn=l,!1;s.shift()}return!0}function mm(i,s,l){al(i)&&l.delete(s)}function CS(){Au=!1,Er!==null&&al(Er)&&(Er=null),Tr!==null&&al(Tr)&&(Tr=null),wr!==null&&al(wr)&&(wr=null),Go.forEach(mm),Wo.forEach(mm)}function Xo(i,s){i.blockedOn===s&&(i.blockedOn=null,Au||(Au=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,CS)))}function Yo(i){function s(g){return Xo(g,i)}if(0<ol.length){Xo(ol[0],i);for(var l=1;l<ol.length;l++){var u=ol[l];u.blockedOn===i&&(u.blockedOn=null)}}for(Er!==null&&Xo(Er,i),Tr!==null&&Xo(Tr,i),wr!==null&&Xo(wr,i),Go.forEach(s),Wo.forEach(s),l=0;l<br.length;l++)u=br[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)pm(l),l.blockedOn===null&&br.shift()}var Bs=R.ReactCurrentBatchConfig,ll=!0;function RS(i,s,l,u){var g=at,x=Bs.transition;Bs.transition=null;try{at=1,Cu(i,s,l,u)}finally{at=g,Bs.transition=x}}function PS(i,s,l,u){var g=at,x=Bs.transition;Bs.transition=null;try{at=4,Cu(i,s,l,u)}finally{at=g,Bs.transition=x}}function Cu(i,s,l,u){if(ll){var g=Ru(i,s,l,u);if(g===null)Xu(i,s,u,cl,l),hm(i,u);else if(AS(g,i,s,l,u))u.stopPropagation();else if(hm(i,u),s&4&&-1<bS.indexOf(i)){for(;g!==null;){var x=sa(g);if(x!==null&&Zt(x),x=Ru(i,s,l,u),x===null&&Xu(i,s,u,cl,l),x===g)break;g=x}g!==null&&u.stopPropagation()}else Xu(i,s,u,null,l)}}var cl=null;function Ru(i,s,l,u){if(cl=null,i=W(u),i=os(i),i!==null)if(s=Ii(i),s===null)i=null;else if(l=s.tag,l===13){if(i=ss(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return cl=i,null}function gm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case ce:return 1;case se:return 4;case te:case Pe:return 16;case Fe:return 536870912;default:return 16}default:return 16}}var Ar=null,Pu=null,ul=null;function vm(){if(ul)return ul;var i,s=Pu,l=s.length,u,g="value"in Ar?Ar.value:Ar.textContent,x=g.length;for(i=0;i<l&&s[i]===g[i];i++);var A=l-i;for(u=1;u<=A&&s[l-u]===g[x-u];u++);return ul=g.slice(i,1<u?1-u:void 0)}function fl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function dl(){return!0}function xm(){return!1}function Zn(i){function s(l,u,g,x,A){this._reactName=l,this._targetInst=g,this.type=u,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?dl:xm,this.isPropagationStopped=xm,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),s}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=Zn(Vs),qo=ue({},Vs,{view:0,detail:0}),DS=Zn(qo),Lu,Nu,$o,hl=ue({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==$o&&($o&&i.type==="mousemove"?(Lu=i.screenX-$o.screenX,Nu=i.screenY-$o.screenY):Nu=Lu=0,$o=i),Lu)},movementY:function(i){return"movementY"in i?i.movementY:Nu}}),_m=Zn(hl),LS=ue({},hl,{dataTransfer:0}),NS=Zn(LS),IS=ue({},qo,{relatedTarget:0}),Iu=Zn(IS),US=ue({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=Zn(US),OS=ue({},Vs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),kS=Zn(OS),BS=ue({},Vs,{data:0}),ym=Zn(BS),VS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=HS[i])?!!s[i]:!1}function Uu(){return GS}var WS=ue({},qo,{key:function(i){if(i.key){var s=VS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=fl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?zS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(i){return i.type==="keypress"?fl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),jS=Zn(WS),XS=ue({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Zn(XS),YS=ue({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),qS=Zn(YS),$S=ue({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=Zn($S),ZS=ue({},hl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=Zn(ZS),JS=[9,13,27,32],Fu=f&&"CompositionEvent"in window,Ko=null;f&&"documentMode"in document&&(Ko=document.documentMode);var eM=f&&"TextEvent"in window&&!Ko,Mm=f&&(!Fu||Ko&&8<Ko&&11>=Ko),Em=" ",Tm=!1;function wm(i,s){switch(i){case"keyup":return JS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var zs=!1;function tM(i,s){switch(i){case"compositionend":return bm(s);case"keypress":return s.which!==32?null:(Tm=!0,Em);case"textInput":return i=s.data,i===Em&&Tm?null:i;default:return null}}function nM(i,s){if(zs)return i==="compositionend"||!Fu&&wm(i,s)?(i=vm(),ul=Pu=Ar=null,zs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Mm&&s.locale!=="ko"?null:s.data;default:return null}}var iM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!iM[i.type]:s==="textarea"}function Cm(i,s,l,u){de(u),s=xl(s,"onChange"),0<s.length&&(l=new Du("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var Zo=null,Qo=null;function rM(i){Xm(i,0)}function pl(i){var s=Xs(i);if($t(s))return i}function sM(i,s){if(i==="change")return s}var Rm=!1;if(f){var Ou;if(f){var ku="oninput"in document;if(!ku){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),ku=typeof Pm.oninput=="function"}Ou=ku}else Ou=!1;Rm=Ou&&(!document.documentMode||9<document.documentMode)}function Dm(){Zo&&(Zo.detachEvent("onpropertychange",Lm),Qo=Zo=null)}function Lm(i){if(i.propertyName==="value"&&pl(Qo)){var s=[];Cm(s,Qo,i,W(i)),ri(rM,s)}}function oM(i,s,l){i==="focusin"?(Dm(),Zo=s,Qo=l,Zo.attachEvent("onpropertychange",Lm)):i==="focusout"&&Dm()}function aM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return pl(Qo)}function lM(i,s){if(i==="click")return pl(s)}function cM(i,s){if(i==="input"||i==="change")return pl(s)}function uM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:uM;function Jo(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var g=l[u];if(!d.call(s,g)||!_i(i[g],s[g]))return!1}return!0}function Nm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Im(i,s){var l=Nm(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Nm(l)}}function Um(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Um(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Fm(){for(var i=window,s=mt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=mt(i.document)}return s}function Bu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function fM(i){var s=Fm(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Um(l.ownerDocument.documentElement,l)){if(u!==null&&Bu(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,x=Math.min(u.start,g);u=u.end===void 0?x:Math.min(u.end,g),!i.extend&&x>u&&(g=u,u=x,x=g),g=Im(l,x);var A=Im(l,u);g&&A&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),x>u?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var dM=f&&"documentMode"in document&&11>=document.documentMode,Hs=null,Vu=null,ea=null,zu=!1;function Om(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zu||Hs==null||Hs!==mt(u)||(u=Hs,"selectionStart"in u&&Bu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ea&&Jo(ea,u)||(ea=u,u=xl(Vu,"onSelect"),0<u.length&&(s=new Du("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=Hs)))}function ml(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Gs={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Hu={},km={};f&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function gl(i){if(Hu[i])return Hu[i];if(!Gs[i])return i;var s=Gs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in km)return Hu[i]=s[l];return i}var Bm=gl("animationend"),Vm=gl("animationiteration"),zm=gl("animationstart"),Hm=gl("transitionend"),Gm=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(i,s){Gm.set(i,s),a(s,[i])}for(var Gu=0;Gu<Wm.length;Gu++){var Wu=Wm[Gu],hM=Wu.toLowerCase(),pM=Wu[0].toUpperCase()+Wu.slice(1);Cr(hM,"on"+pM)}Cr(Bm,"onAnimationEnd"),Cr(Vm,"onAnimationIteration"),Cr(zm,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Hm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function jm(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,ks(u,s,void 0,i),i.currentTarget=null}function Xm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],g=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var A=u.length-1;0<=A;A--){var k=u[A],V=k.instance,le=k.currentTarget;if(k=k.listener,V!==x&&g.isPropagationStopped())break e;jm(g,k,le),x=V}else for(A=0;A<u.length;A++){if(k=u[A],V=k.instance,le=k.currentTarget,k=k.listener,V!==x&&g.isPropagationStopped())break e;jm(g,k,le),x=V}}}if(si)throw i=rs,si=!1,rs=null,i}function Vt(i,s){var l=s[Qu];l===void 0&&(l=s[Qu]=new Set);var u=i+"__bubble";l.has(u)||(Ym(s,i,2,!1),l.add(u))}function ju(i,s,l){var u=0;s&&(u|=4),Ym(l,i,u,s)}var vl="_reactListening"+Math.random().toString(36).slice(2);function na(i){if(!i[vl]){i[vl]=!0,r.forEach(function(l){l!=="selectionchange"&&(mM.has(l)||ju(l,!1,i),ju(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[vl]||(s[vl]=!0,ju("selectionchange",!1,s))}}function Ym(i,s,l,u){switch(gm(s)){case 1:var g=RS;break;case 4:g=PS;break;default:g=Cu}l=g.bind(null,s,l,i),g=void 0,!Os||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),u?g!==void 0?i.addEventListener(s,l,{capture:!0,passive:g}):i.addEventListener(s,l,!0):g!==void 0?i.addEventListener(s,l,{passive:g}):i.addEventListener(s,l,!1)}function Xu(i,s,l,u,g){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var k=u.stateNode.containerInfo;if(k===g||k.nodeType===8&&k.parentNode===g)break;if(A===4)for(A=u.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;A=A.return}for(;k!==null;){if(A=os(k),A===null)return;if(V=A.tag,V===5||V===6){u=x=A;continue e}k=k.parentNode}}u=u.return}ri(function(){var le=x,xe=W(l),_e=[];e:{var ve=Gm.get(i);if(ve!==void 0){var Ue=Du,He=i;switch(i){case"keypress":if(fl(l)===0)break e;case"keydown":case"keyup":Ue=jS;break;case"focusin":He="focus",Ue=Iu;break;case"focusout":He="blur",Ue=Iu;break;case"beforeblur":case"afterblur":Ue=Iu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=qS;break;case Bm:case Vm:case zm:Ue=FS;break;case Hm:Ue=KS;break;case"scroll":Ue=DS;break;case"wheel":Ue=QS;break;case"copy":case"cut":case"paste":Ue=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Sm}var qe=(s&4)!==0,Qt=!qe&&i==="scroll",ee=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var j=le,ie;j!==null;){ie=j;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,ee!==null&&(Te=Cn(j,ee),Te!=null&&qe.push(ia(j,Te,ie)))),Qt)break;j=j.return}0<qe.length&&(ve=new Ue(ve,He,null,l,xe),_e.push({event:ve,listeners:qe}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Ue=i==="mouseout"||i==="pointerout",ve&&l!==ut&&(He=l.relatedTarget||l.fromElement)&&(os(He)||He[tr]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(He=l.relatedTarget||l.toElement,Ue=le,He=He?os(He):null,He!==null&&(Qt=Ii(He),He!==Qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=le),Ue!==He)){if(qe=_m,Te="onMouseLeave",ee="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(qe=Sm,Te="onPointerLeave",ee="onPointerEnter",j="pointer"),Qt=Ue==null?ve:Xs(Ue),ie=He==null?ve:Xs(He),ve=new qe(Te,j+"leave",Ue,l,xe),ve.target=Qt,ve.relatedTarget=ie,Te=null,os(xe)===le&&(qe=new qe(ee,j+"enter",He,l,xe),qe.target=ie,qe.relatedTarget=Qt,Te=qe),Qt=Te,Ue&&He)t:{for(qe=Ue,ee=He,j=0,ie=qe;ie;ie=Ws(ie))j++;for(ie=0,Te=ee;Te;Te=Ws(Te))ie++;for(;0<j-ie;)qe=Ws(qe),j--;for(;0<ie-j;)ee=Ws(ee),ie--;for(;j--;){if(qe===ee||ee!==null&&qe===ee.alternate)break t;qe=Ws(qe),ee=Ws(ee)}qe=null}else qe=null;Ue!==null&&qm(_e,ve,Ue,qe,!1),He!==null&&Qt!==null&&qm(_e,Qt,He,qe,!0)}}e:{if(ve=le?Xs(le):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Ze=sM;else if(Am(ve))if(Rm)Ze=cM;else{Ze=aM;var nt=oM}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=lM);if(Ze&&(Ze=Ze(i,le))){Cm(_e,Ze,l,xe);break e}nt&&nt(i,ve,le),i==="focusout"&&(nt=ve._wrapperState)&&nt.controlled&&ve.type==="number"&&Gt(ve,"number",ve.value)}switch(nt=le?Xs(le):window,i){case"focusin":(Am(nt)||nt.contentEditable==="true")&&(Hs=nt,Vu=le,ea=null);break;case"focusout":ea=Vu=Hs=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Om(_e,l,xe);break;case"selectionchange":if(dM)break;case"keydown":case"keyup":Om(_e,l,xe)}var it;if(Fu)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else zs?wm(i,l)&&(lt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(Mm&&l.locale!=="ko"&&(zs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&zs&&(it=vm()):(Ar=xe,Pu="value"in Ar?Ar.value:Ar.textContent,zs=!0)),nt=xl(le,lt),0<nt.length&&(lt=new ym(lt,i,null,l,xe),_e.push({event:lt,listeners:nt}),it?lt.data=it:(it=bm(l),it!==null&&(lt.data=it)))),(it=eM?tM(i,l):nM(i,l))&&(le=xl(le,"onBeforeInput"),0<le.length&&(xe=new ym("onBeforeInput","beforeinput",null,l,xe),_e.push({event:xe,listeners:le}),xe.data=it))}Xm(_e,s)})}function ia(i,s,l){return{instance:i,listener:s,currentTarget:l}}function xl(i,s){for(var l=s+"Capture",u=[];i!==null;){var g=i,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Cn(i,l),x!=null&&u.unshift(ia(i,x,g)),x=Cn(i,s),x!=null&&u.push(ia(i,x,g))),i=i.return}return u}function Ws(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function qm(i,s,l,u,g){for(var x=s._reactName,A=[];l!==null&&l!==u;){var k=l,V=k.alternate,le=k.stateNode;if(V!==null&&V===u)break;k.tag===5&&le!==null&&(k=le,g?(V=Cn(l,x),V!=null&&A.unshift(ia(l,V,k))):g||(V=Cn(l,x),V!=null&&A.push(ia(l,V,k)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var gM=/\r\n?/g,vM=/\u0000|\uFFFD/g;function $m(i){return(typeof i=="string"?i:""+i).replace(gM,`
`).replace(vM,"")}function _l(i,s,l){if(s=$m(s),$m(i)!==s&&l)throw Error(t(425))}function yl(){}var Yu=null,qu=null;function $u(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,xM=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,_M=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(i){return Km.resolve(null).then(i).catch(yM)}:Ku;function yM(i){setTimeout(function(){throw i})}function Zu(i,s){var l=s,u=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(u===0){i.removeChild(g),Yo(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=g}while(l);Yo(s)}function Rr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Zm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var js=Math.random().toString(36).slice(2),Ui="__reactFiber$"+js,ra="__reactProps$"+js,tr="__reactContainer$"+js,Qu="__reactEvents$"+js,SM="__reactListeners$"+js,MM="__reactHandles$"+js;function os(i){var s=i[Ui];if(s)return s;for(var l=i.parentNode;l;){if(s=l[tr]||l[Ui]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Zm(i);i!==null;){if(l=i[Ui])return l;i=Zm(i)}return s}i=l,l=i.parentNode}return null}function sa(i){return i=i[Ui]||i[tr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Xs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Sl(i){return i[ra]||null}var Ju=[],Ys=-1;function Pr(i){return{current:i}}function zt(i){0>Ys||(i.current=Ju[Ys],Ju[Ys]=null,Ys--)}function kt(i,s){Ys++,Ju[Ys]=i.current,i.current=s}var Dr={},yn=Pr(Dr),Bn=Pr(!1),as=Dr;function qs(i,s){var l=i.type.contextTypes;if(!l)return Dr;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=s[x];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Vn(i){return i=i.childContextTypes,i!=null}function Ml(){zt(Bn),zt(yn)}function Qm(i,s,l){if(yn.current!==Dr)throw Error(t(168));kt(yn,s),kt(Bn,l)}function Jm(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var g in u)if(!(g in s))throw Error(t(108,me(i)||"Unknown",g));return ue({},l,u)}function El(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Dr,as=yn.current,kt(yn,i),kt(Bn,Bn.current),!0}function eg(i,s,l){var u=i.stateNode;if(!u)throw Error(t(169));l?(i=Jm(i,s,as),u.__reactInternalMemoizedMergedChildContext=i,zt(Bn),zt(yn),kt(yn,i)):zt(Bn),kt(Bn,l)}var nr=null,Tl=!1,ef=!1;function tg(i){nr===null?nr=[i]:nr.push(i)}function EM(i){Tl=!0,tg(i)}function Lr(){if(!ef&&nr!==null){ef=!0;var i=0,s=at;try{var l=nr;for(at=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}nr=null,Tl=!1}catch(g){throw nr!==null&&(nr=nr.slice(i+1)),rl(ce,Lr),g}finally{at=s,ef=!1}}return null}var $s=[],Ks=0,wl=null,bl=0,ai=[],li=0,ls=null,ir=1,rr="";function cs(i,s){$s[Ks++]=bl,$s[Ks++]=wl,wl=i,bl=s}function ng(i,s,l){ai[li++]=ir,ai[li++]=rr,ai[li++]=ls,ls=i;var u=ir;i=rr;var g=32-tt(u)-1;u&=~(1<<g),l+=1;var x=32-tt(s)+g;if(30<x){var A=g-g%5;x=(u&(1<<A)-1).toString(32),u>>=A,g-=A,ir=1<<32-tt(s)+g|l<<g|u,rr=x+i}else ir=1<<x|l<<g|u,rr=i}function tf(i){i.return!==null&&(cs(i,1),ng(i,1,0))}function nf(i){for(;i===wl;)wl=$s[--Ks],$s[Ks]=null,bl=$s[--Ks],$s[Ks]=null;for(;i===ls;)ls=ai[--li],ai[li]=null,rr=ai[--li],ai[li]=null,ir=ai[--li],ai[li]=null}var Qn=null,Jn=null,Wt=!1,yi=null;function ig(i,s){var l=di(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function rg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=Rr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ls!==null?{id:ir,overflow:rr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=di(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Qn=i,Jn=null,!0):!1;default:return!1}}function rf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function sf(i){if(Wt){var s=Jn;if(s){var l=s;if(!rg(i,s)){if(rf(i))throw Error(t(418));s=Rr(l.nextSibling);var u=Qn;s&&rg(i,s)?ig(u,l):(i.flags=i.flags&-4097|2,Wt=!1,Qn=i)}}else{if(rf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Wt=!1,Qn=i}}}function sg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qn=i}function Al(i){if(i!==Qn)return!1;if(!Wt)return sg(i),Wt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!$u(i.type,i.memoizedProps)),s&&(s=Jn)){if(rf(i))throw og(),Error(t(418));for(;s;)ig(i,s),s=Rr(s.nextSibling)}if(sg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Jn=Rr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Jn=null}}else Jn=Qn?Rr(i.stateNode.nextSibling):null;return!0}function og(){for(var i=Jn;i;)i=Rr(i.nextSibling)}function Zs(){Jn=Qn=null,Wt=!1}function of(i){yi===null?yi=[i]:yi.push(i)}var TM=R.ReactCurrentBatchConfig;function oa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,i));var g=u,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var k=g.refs;A===null?delete k[x]:k[x]=A},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Cl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ag(i){var s=i._init;return s(i._payload)}function lg(i){function s(ee,j){if(i){var ie=ee.deletions;ie===null?(ee.deletions=[j],ee.flags|=16):ie.push(j)}}function l(ee,j){if(!i)return null;for(;j!==null;)s(ee,j),j=j.sibling;return null}function u(ee,j){for(ee=new Map;j!==null;)j.key!==null?ee.set(j.key,j):ee.set(j.index,j),j=j.sibling;return ee}function g(ee,j){return ee=Vr(ee,j),ee.index=0,ee.sibling=null,ee}function x(ee,j,ie){return ee.index=ie,i?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<j?(ee.flags|=2,j):ie):(ee.flags|=2,j)):(ee.flags|=1048576,j)}function A(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,j,ie,Te){return j===null||j.tag!==6?(j=Zf(ie,ee.mode,Te),j.return=ee,j):(j=g(j,ie),j.return=ee,j)}function V(ee,j,ie,Te){var Ze=ie.type;return Ze===O?xe(ee,j,ie.props.children,Te,ie.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===J&&ag(Ze)===j.type)?(Te=g(j,ie.props),Te.ref=oa(ee,j,ie),Te.return=ee,Te):(Te=Ql(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=oa(ee,j,ie),Te.return=ee,Te)}function le(ee,j,ie,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Qf(ie,ee.mode,Te),j.return=ee,j):(j=g(j,ie.children||[]),j.return=ee,j)}function xe(ee,j,ie,Te,Ze){return j===null||j.tag!==7?(j=vs(ie,ee.mode,Te,Ze),j.return=ee,j):(j=g(j,ie),j.return=ee,j)}function _e(ee,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Zf(""+j,ee.mode,ie),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case I:return ie=Ql(j.type,j.key,j.props,null,ee.mode,ie),ie.ref=oa(ee,null,j),ie.return=ee,ie;case N:return j=Qf(j,ee.mode,ie),j.return=ee,j;case J:var Te=j._init;return _e(ee,Te(j._payload),ie)}if(vt(j)||ne(j))return j=vs(j,ee.mode,ie,null),j.return=ee,j;Cl(ee,j)}return null}function ve(ee,j,ie,Te){var Ze=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:k(ee,j,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return ie.key===Ze?V(ee,j,ie,Te):null;case N:return ie.key===Ze?le(ee,j,ie,Te):null;case J:return Ze=ie._init,ve(ee,j,Ze(ie._payload),Te)}if(vt(ie)||ne(ie))return Ze!==null?null:xe(ee,j,ie,Te,null);Cl(ee,ie)}return null}function Ue(ee,j,ie,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(ie)||null,k(j,ee,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case I:return ee=ee.get(Te.key===null?ie:Te.key)||null,V(j,ee,Te,Ze);case N:return ee=ee.get(Te.key===null?ie:Te.key)||null,le(j,ee,Te,Ze);case J:var nt=Te._init;return Ue(ee,j,ie,nt(Te._payload),Ze)}if(vt(Te)||ne(Te))return ee=ee.get(ie)||null,xe(j,ee,Te,Ze,null);Cl(j,Te)}return null}function He(ee,j,ie,Te){for(var Ze=null,nt=null,it=j,lt=j=0,dn=null;it!==null&&lt<ie.length;lt++){it.index>lt?(dn=it,it=null):dn=it.sibling;var At=ve(ee,it,ie[lt],Te);if(At===null){it===null&&(it=dn);break}i&&it&&At.alternate===null&&s(ee,it),j=x(At,j,lt),nt===null?Ze=At:nt.sibling=At,nt=At,it=dn}if(lt===ie.length)return l(ee,it),Wt&&cs(ee,lt),Ze;if(it===null){for(;lt<ie.length;lt++)it=_e(ee,ie[lt],Te),it!==null&&(j=x(it,j,lt),nt===null?Ze=it:nt.sibling=it,nt=it);return Wt&&cs(ee,lt),Ze}for(it=u(ee,it);lt<ie.length;lt++)dn=Ue(it,ee,lt,ie[lt],Te),dn!==null&&(i&&dn.alternate!==null&&it.delete(dn.key===null?lt:dn.key),j=x(dn,j,lt),nt===null?Ze=dn:nt.sibling=dn,nt=dn);return i&&it.forEach(function(zr){return s(ee,zr)}),Wt&&cs(ee,lt),Ze}function qe(ee,j,ie,Te){var Ze=ne(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var nt=Ze=null,it=j,lt=j=0,dn=null,At=ie.next();it!==null&&!At.done;lt++,At=ie.next()){it.index>lt?(dn=it,it=null):dn=it.sibling;var zr=ve(ee,it,At.value,Te);if(zr===null){it===null&&(it=dn);break}i&&it&&zr.alternate===null&&s(ee,it),j=x(zr,j,lt),nt===null?Ze=zr:nt.sibling=zr,nt=zr,it=dn}if(At.done)return l(ee,it),Wt&&cs(ee,lt),Ze;if(it===null){for(;!At.done;lt++,At=ie.next())At=_e(ee,At.value,Te),At!==null&&(j=x(At,j,lt),nt===null?Ze=At:nt.sibling=At,nt=At);return Wt&&cs(ee,lt),Ze}for(it=u(ee,it);!At.done;lt++,At=ie.next())At=Ue(it,ee,lt,At.value,Te),At!==null&&(i&&At.alternate!==null&&it.delete(At.key===null?lt:At.key),j=x(At,j,lt),nt===null?Ze=At:nt.sibling=At,nt=At);return i&&it.forEach(function(iE){return s(ee,iE)}),Wt&&cs(ee,lt),Ze}function Qt(ee,j,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:e:{for(var Ze=ie.key,nt=j;nt!==null;){if(nt.key===Ze){if(Ze=ie.type,Ze===O){if(nt.tag===7){l(ee,nt.sibling),j=g(nt,ie.props.children),j.return=ee,ee=j;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===J&&ag(Ze)===nt.type){l(ee,nt.sibling),j=g(nt,ie.props),j.ref=oa(ee,nt,ie),j.return=ee,ee=j;break e}l(ee,nt);break}else s(ee,nt);nt=nt.sibling}ie.type===O?(j=vs(ie.props.children,ee.mode,Te,ie.key),j.return=ee,ee=j):(Te=Ql(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=oa(ee,j,ie),Te.return=ee,ee=Te)}return A(ee);case N:e:{for(nt=ie.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){l(ee,j.sibling),j=g(j,ie.children||[]),j.return=ee,ee=j;break e}else{l(ee,j);break}else s(ee,j);j=j.sibling}j=Qf(ie,ee.mode,Te),j.return=ee,ee=j}return A(ee);case J:return nt=ie._init,Qt(ee,j,nt(ie._payload),Te)}if(vt(ie))return He(ee,j,ie,Te);if(ne(ie))return qe(ee,j,ie,Te);Cl(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(l(ee,j.sibling),j=g(j,ie),j.return=ee,ee=j):(l(ee,j),j=Zf(ie,ee.mode,Te),j.return=ee,ee=j),A(ee)):l(ee,j)}return Qt}var Qs=lg(!0),cg=lg(!1),Rl=Pr(null),Pl=null,Js=null,af=null;function lf(){af=Js=Pl=null}function cf(i){var s=Rl.current;zt(Rl),i._currentValue=s}function uf(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function eo(i,s){Pl=i,af=Js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(zn=!0),i.firstContext=null)}function ci(i){var s=i._currentValue;if(af!==i)if(i={context:i,memoizedValue:s,next:null},Js===null){if(Pl===null)throw Error(t(308));Js=i,Pl.dependencies={lanes:0,firstContext:i}}else Js=Js.next=i;return s}var us=null;function ff(i){us===null?us=[i]:us.push(i)}function ug(i,s,l,u){var g=s.interleaved;return g===null?(l.next=l,ff(s)):(l.next=g.next,g.next=l),s.interleaved=l,sr(i,u)}function sr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Nr=!1;function df(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function or(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ir(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var g=u.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s,sr(i,l)}return g=u.interleaved,g===null?(s.next=s,ff(u)):(s.next=g.next,g.next=s),u.interleaved=s,sr(i,l)}function Dl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Rt(i,l)}}function dg(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?g=x=s:x=x.next=s}else g=x=s;l={baseState:u.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ll(i,s,l,u){var g=i.updateQueue;Nr=!1;var x=g.firstBaseUpdate,A=g.lastBaseUpdate,k=g.shared.pending;if(k!==null){g.shared.pending=null;var V=k,le=V.next;V.next=null,A===null?x=le:A.next=le,A=V;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,k=xe.lastBaseUpdate,k!==A&&(k===null?xe.firstBaseUpdate=le:k.next=le,xe.lastBaseUpdate=V))}if(x!==null){var _e=g.baseState;A=0,xe=le=V=null,k=x;do{var ve=k.lane,Ue=k.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var He=i,qe=k;switch(ve=s,Ue=l,qe.tag){case 1:if(He=qe.payload,typeof He=="function"){_e=He.call(Ue,_e,ve);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=qe.payload,ve=typeof He=="function"?He.call(Ue,_e,ve):He,ve==null)break e;_e=ue({},_e,ve);break e;case 2:Nr=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,ve=g.effects,ve===null?g.effects=[k]:ve.push(k))}else Ue={eventTime:Ue,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},xe===null?(le=xe=Ue,V=_e):xe=xe.next=Ue,A|=ve;if(k=k.next,k===null){if(k=g.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,g.lastBaseUpdate=ve,g.shared.pending=null}}while(!0);if(xe===null&&(V=_e),g.baseState=V,g.firstBaseUpdate=le,g.lastBaseUpdate=xe,s=g.shared.interleaved,s!==null){g=s;do A|=g.lane,g=g.next;while(g!==s)}else x===null&&(g.shared.lanes=0);hs|=A,i.lanes=A,i.memoizedState=_e}}function hg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],g=u.callback;if(g!==null){if(u.callback=null,u=l,typeof g!="function")throw Error(t(191,g));g.call(u)}}}var aa={},Fi=Pr(aa),la=Pr(aa),ca=Pr(aa);function fs(i){if(i===aa)throw Error(t(174));return i}function hf(i,s){switch(kt(ca,s),kt(la,i),kt(Fi,aa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ge(s,i)}zt(Fi),kt(Fi,s)}function to(){zt(Fi),zt(la),zt(ca)}function pg(i){fs(ca.current);var s=fs(Fi.current),l=ge(s,i.type);s!==l&&(kt(la,i),kt(Fi,l))}function pf(i){la.current===i&&(zt(Fi),zt(la))}var jt=Pr(0);function Nl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var mf=[];function gf(){for(var i=0;i<mf.length;i++)mf[i]._workInProgressVersionPrimary=null;mf.length=0}var Il=R.ReactCurrentDispatcher,vf=R.ReactCurrentBatchConfig,ds=0,Xt=null,sn=null,un=null,Ul=!1,ua=!1,fa=0,wM=0;function Sn(){throw Error(t(321))}function xf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!_i(i[l],s[l]))return!1;return!0}function _f(i,s,l,u,g,x){if(ds=x,Xt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Il.current=i===null||i.memoizedState===null?RM:PM,i=l(u,g),ua){x=0;do{if(ua=!1,fa=0,25<=x)throw Error(t(301));x+=1,un=sn=null,s.updateQueue=null,Il.current=DM,i=l(u,g)}while(ua)}if(Il.current=kl,s=sn!==null&&sn.next!==null,ds=0,un=sn=Xt=null,Ul=!1,s)throw Error(t(300));return i}function yf(){var i=fa!==0;return fa=0,i}function Oi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Xt.memoizedState=un=i:un=un.next=i,un}function ui(){if(sn===null){var i=Xt.alternate;i=i!==null?i.memoizedState:null}else i=sn.next;var s=un===null?Xt.memoizedState:un.next;if(s!==null)un=s,sn=i;else{if(i===null)throw Error(t(310));sn=i,i={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?Xt.memoizedState=un=i:un=un.next=i}return un}function da(i,s){return typeof s=="function"?s(i):s}function Sf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=sn,g=u.baseQueue,x=l.pending;if(x!==null){if(g!==null){var A=g.next;g.next=x.next,x.next=A}u.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,u=u.baseState;var k=A=null,V=null,le=x;do{var xe=le.lane;if((ds&xe)===xe)V!==null&&(V=V.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:i(u,le.action);else{var _e={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};V===null?(k=V=_e,A=u):V=V.next=_e,Xt.lanes|=xe,hs|=xe}le=le.next}while(le!==null&&le!==x);V===null?A=u:V.next=k,_i(u,s.memoizedState)||(zn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=V,l.lastRenderedState=u}if(i=l.interleaved,i!==null){g=i;do x=g.lane,Xt.lanes|=x,hs|=x,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Mf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=l.dispatch,g=l.pending,x=s.memoizedState;if(g!==null){l.pending=null;var A=g=g.next;do x=i(x,A.action),A=A.next;while(A!==g);_i(x,s.memoizedState)||(zn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,u]}function mg(){}function gg(i,s){var l=Xt,u=ui(),g=s(),x=!_i(u.memoizedState,g);if(x&&(u.memoizedState=g,zn=!0),u=u.queue,Ef(_g.bind(null,l,u,i),[i]),u.getSnapshot!==s||x||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ha(9,xg.bind(null,l,u,g,s),void 0,null),fn===null)throw Error(t(349));(ds&30)!==0||vg(l,s,g)}return g}function vg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function xg(i,s,l,u){s.value=l,s.getSnapshot=u,yg(s)&&Sg(i)}function _g(i,s,l){return l(function(){yg(s)&&Sg(i)})}function yg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!_i(i,l)}catch{return!0}}function Sg(i){var s=sr(i,1);s!==null&&Ti(s,i,1,-1)}function Mg(i){var s=Oi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:i},s.queue=i,i=i.dispatch=CM.bind(null,Xt,i),[s.memoizedState,i]}function ha(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function Eg(){return ui().memoizedState}function Fl(i,s,l,u){var g=Oi();Xt.flags|=i,g.memoizedState=ha(1|s,l,void 0,u===void 0?null:u)}function Ol(i,s,l,u){var g=ui();u=u===void 0?null:u;var x=void 0;if(sn!==null){var A=sn.memoizedState;if(x=A.destroy,u!==null&&xf(u,A.deps)){g.memoizedState=ha(s,l,x,u);return}}Xt.flags|=i,g.memoizedState=ha(1|s,l,x,u)}function Tg(i,s){return Fl(8390656,8,i,s)}function Ef(i,s){return Ol(2048,8,i,s)}function wg(i,s){return Ol(4,2,i,s)}function bg(i,s){return Ol(4,4,i,s)}function Ag(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Cg(i,s,l){return l=l!=null?l.concat([i]):null,Ol(4,4,Ag.bind(null,s,i),l)}function Tf(){}function Rg(i,s){var l=ui();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&xf(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function Pg(i,s){var l=ui();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&xf(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function Dg(i,s,l){return(ds&21)===0?(i.baseState&&(i.baseState=!1,zn=!0),i.memoizedState=l):(_i(l,s)||(l=On(),Xt.lanes|=l,hs|=l,i.baseState=!0),s)}function bM(i,s){var l=at;at=l!==0&&4>l?l:4,i(!0);var u=vf.transition;vf.transition={};try{i(!1),s()}finally{at=l,vf.transition=u}}function Lg(){return ui().memoizedState}function AM(i,s,l){var u=kr(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Ng(i))Ig(s,l);else if(l=ug(i,s,l,u),l!==null){var g=Dn();Ti(l,i,u,g),Ug(l,s,u)}}function CM(i,s,l){var u=kr(i),g={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ng(i))Ig(s,g);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,k=x(A,l);if(g.hasEagerState=!0,g.eagerState=k,_i(k,A)){var V=s.interleaved;V===null?(g.next=g,ff(s)):(g.next=V.next,V.next=g),s.interleaved=g;return}}catch{}finally{}l=ug(i,s,g,u),l!==null&&(g=Dn(),Ti(l,i,u,g),Ug(l,s,u))}}function Ng(i){var s=i.alternate;return i===Xt||s!==null&&s===Xt}function Ig(i,s){ua=Ul=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Ug(i,s,l){if((l&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Rt(i,l)}}var kl={readContext:ci,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},RM={readContext:ci,useCallback:function(i,s){return Oi().memoizedState=[i,s===void 0?null:s],i},useContext:ci,useEffect:Tg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Fl(4194308,4,Ag.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Fl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Fl(4,2,i,s)},useMemo:function(i,s){var l=Oi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=Oi();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=AM.bind(null,Xt,i),[u.memoizedState,i]},useRef:function(i){var s=Oi();return i={current:i},s.memoizedState=i},useState:Mg,useDebugValue:Tf,useDeferredValue:function(i){return Oi().memoizedState=i},useTransition:function(){var i=Mg(!1),s=i[0];return i=bM.bind(null,i[1]),Oi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=Xt,g=Oi();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),fn===null)throw Error(t(349));(ds&30)!==0||vg(u,s,l)}g.memoizedState=l;var x={value:l,getSnapshot:s};return g.queue=x,Tg(_g.bind(null,u,x,i),[i]),u.flags|=2048,ha(9,xg.bind(null,u,x,l,s),void 0,null),l},useId:function(){var i=Oi(),s=fn.identifierPrefix;if(Wt){var l=rr,u=ir;l=(u&~(1<<32-tt(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=fa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=wM++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},PM={readContext:ci,useCallback:Rg,useContext:ci,useEffect:Ef,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:bg,useMemo:Pg,useReducer:Sf,useRef:Eg,useState:function(){return Sf(da)},useDebugValue:Tf,useDeferredValue:function(i){var s=ui();return Dg(s,sn.memoizedState,i)},useTransition:function(){var i=Sf(da)[0],s=ui().memoizedState;return[i,s]},useMutableSource:mg,useSyncExternalStore:gg,useId:Lg,unstable_isNewReconciler:!1},DM={readContext:ci,useCallback:Rg,useContext:ci,useEffect:Ef,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:bg,useMemo:Pg,useReducer:Mf,useRef:Eg,useState:function(){return Mf(da)},useDebugValue:Tf,useDeferredValue:function(i){var s=ui();return sn===null?s.memoizedState=i:Dg(s,sn.memoizedState,i)},useTransition:function(){var i=Mf(da)[0],s=ui().memoizedState;return[i,s]},useMutableSource:mg,useSyncExternalStore:gg,useId:Lg,unstable_isNewReconciler:!1};function Si(i,s){if(i&&i.defaultProps){s=ue({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function wf(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:ue({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Bl={isMounted:function(i){return(i=i._reactInternals)?Ii(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=Dn(),g=kr(i),x=or(u,g);x.payload=s,l!=null&&(x.callback=l),s=Ir(i,x,g),s!==null&&(Ti(s,i,g,u),Dl(s,i,g))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=Dn(),g=kr(i),x=or(u,g);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Ir(i,x,g),s!==null&&(Ti(s,i,g,u),Dl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Dn(),u=kr(i),g=or(l,u);g.tag=2,s!=null&&(g.callback=s),s=Ir(i,g,u),s!==null&&(Ti(s,i,u,l),Dl(s,i,u))}};function Fg(i,s,l,u,g,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,x,A):s.prototype&&s.prototype.isPureReactComponent?!Jo(l,u)||!Jo(g,x):!0}function Og(i,s,l){var u=!1,g=Dr,x=s.contextType;return typeof x=="object"&&x!==null?x=ci(x):(g=Vn(s)?as:yn.current,u=s.contextTypes,x=(u=u!=null)?qs(i,g):Dr),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bl,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=x),s}function kg(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&Bl.enqueueReplaceState(s,s.state,null)}function bf(i,s,l,u){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},df(i);var x=s.contextType;typeof x=="object"&&x!==null?g.context=ci(x):(x=Vn(s)?as:yn.current,g.context=qs(i,x)),g.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(wf(i,s,x,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Bl.enqueueReplaceState(g,g.state,null),Ll(i,l,g,u),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function no(i,s){try{var l="",u=s;do l+=Je(u),u=u.return;while(u);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:g,digest:null}}function Af(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Cf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var LM=typeof WeakMap=="function"?WeakMap:Map;function Bg(i,s,l){l=or(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){Xl||(Xl=!0,Gf=u),Cf(i,s)},l}function Vg(i,s,l){l=or(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var g=s.value;l.payload=function(){return u(g)},l.callback=function(){Cf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Cf(i,s),typeof u!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function zg(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new LM;var g=new Set;u.set(s,g)}else g=u.get(s),g===void 0&&(g=new Set,u.set(s,g));g.has(l)||(g.add(l),i=XM.bind(null,i,s,l),s.then(i,i))}function Hg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Gg(i,s,l,u,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=or(-1,1),s.tag=2,Ir(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var NM=R.ReactCurrentOwner,zn=!1;function Pn(i,s,l,u){s.child=i===null?cg(s,null,l,u):Qs(s,i.child,l,u)}function Wg(i,s,l,u,g){l=l.render;var x=s.ref;return eo(s,g),u=_f(i,s,l,u,x,g),l=yf(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,ar(i,s,g)):(Wt&&l&&tf(s),s.flags|=1,Pn(i,s,u,g),s.child)}function jg(i,s,l,u,g){if(i===null){var x=l.type;return typeof x=="function"&&!Kf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,Xg(i,s,x,u,g)):(i=Ql(l.type,null,u,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&g)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:Jo,l(A,u)&&i.ref===s.ref)return ar(i,s,g)}return s.flags|=1,i=Vr(x,u),i.ref=s.ref,i.return=s,s.child=i}function Xg(i,s,l,u,g){if(i!==null){var x=i.memoizedProps;if(Jo(x,u)&&i.ref===s.ref)if(zn=!1,s.pendingProps=u=x,(i.lanes&g)!==0)(i.flags&131072)!==0&&(zn=!0);else return s.lanes=i.lanes,ar(i,s,g)}return Rf(i,s,l,u,g)}function Yg(i,s,l){var u=s.pendingProps,g=u.children,x=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(ro,ei),ei|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,kt(ro,ei),ei|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,kt(ro,ei),ei|=u}else x!==null?(u=x.baseLanes|l,s.memoizedState=null):u=l,kt(ro,ei),ei|=u;return Pn(i,s,g,l),s.child}function qg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Rf(i,s,l,u,g){var x=Vn(l)?as:yn.current;return x=qs(s,x),eo(s,g),l=_f(i,s,l,u,x,g),u=yf(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,ar(i,s,g)):(Wt&&u&&tf(s),s.flags|=1,Pn(i,s,l,g),s.child)}function $g(i,s,l,u,g){if(Vn(l)){var x=!0;El(s)}else x=!1;if(eo(s,g),s.stateNode===null)zl(i,s),Og(s,l,u),bf(s,l,u,g),u=!0;else if(i===null){var A=s.stateNode,k=s.memoizedProps;A.props=k;var V=A.context,le=l.contextType;typeof le=="object"&&le!==null?le=ci(le):(le=Vn(l)?as:yn.current,le=qs(s,le));var xe=l.getDerivedStateFromProps,_e=typeof xe=="function"||typeof A.getSnapshotBeforeUpdate=="function";_e||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==u||V!==le)&&kg(s,A,u,le),Nr=!1;var ve=s.memoizedState;A.state=ve,Ll(s,u,A,g),V=s.memoizedState,k!==u||ve!==V||Bn.current||Nr?(typeof xe=="function"&&(wf(s,l,xe,u),V=s.memoizedState),(k=Nr||Fg(s,l,k,u,ve,V,le))?(_e||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=V),A.props=u,A.state=V,A.context=le,u=k):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,fg(i,s),k=s.memoizedProps,le=s.type===s.elementType?k:Si(s.type,k),A.props=le,_e=s.pendingProps,ve=A.context,V=l.contextType,typeof V=="object"&&V!==null?V=ci(V):(V=Vn(l)?as:yn.current,V=qs(s,V));var Ue=l.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==_e||ve!==V)&&kg(s,A,u,V),Nr=!1,ve=s.memoizedState,A.state=ve,Ll(s,u,A,g);var He=s.memoizedState;k!==_e||ve!==He||Bn.current||Nr?(typeof Ue=="function"&&(wf(s,l,Ue,u),He=s.memoizedState),(le=Nr||Fg(s,l,le,u,ve,He,V)||!1)?(xe||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,He,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,He,V)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=He),A.props=u,A.state=He,A.context=V,u=le):(typeof A.componentDidUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),u=!1)}return Pf(i,s,l,u,x,g)}function Pf(i,s,l,u,g,x){qg(i,s);var A=(s.flags&128)!==0;if(!u&&!A)return g&&eg(s,l,!1),ar(i,s,x);u=s.stateNode,NM.current=s;var k=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&A?(s.child=Qs(s,i.child,null,x),s.child=Qs(s,null,k,x)):Pn(i,s,k,x),s.memoizedState=u.state,g&&eg(s,l,!0),s.child}function Kg(i){var s=i.stateNode;s.pendingContext?Qm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Qm(i,s.context,!1),hf(i,s.containerInfo)}function Zg(i,s,l,u,g){return Zs(),of(g),s.flags|=256,Pn(i,s,l,u),s.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Lf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Qg(i,s,l){var u=s.pendingProps,g=jt.current,x=!1,A=(s.flags&128)!==0,k;if((k=A)||(k=i!==null&&i.memoizedState===null?!1:(g&2)!==0),k?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),kt(jt,g&1),i===null)return sf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,i=u.fallback,x?(u=s.mode,x=s.child,A={mode:"hidden",children:A},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Jl(A,u,0,null),i=vs(i,u,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Lf(l),s.memoizedState=Df,i):Nf(s,A));if(g=i.memoizedState,g!==null&&(k=g.dehydrated,k!==null))return IM(i,s,A,u,k,g,l);if(x){x=u.fallback,A=s.mode,g=i.child,k=g.sibling;var V={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==g?(u=s.child,u.childLanes=0,u.pendingProps=V,s.deletions=null):(u=Vr(g,V),u.subtreeFlags=g.subtreeFlags&14680064),k!==null?x=Vr(k,x):(x=vs(x,A,l,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,A=i.child.memoizedState,A=A===null?Lf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,s.memoizedState=Df,u}return x=i.child,i=x.sibling,u=Vr(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function Nf(i,s){return s=Jl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vl(i,s,l,u){return u!==null&&of(u),Qs(s,i.child,null,l),i=Nf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function IM(i,s,l,u,g,x,A){if(l)return s.flags&256?(s.flags&=-257,u=Af(Error(t(422))),Vl(i,s,A,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=u.fallback,g=s.mode,u=Jl({mode:"visible",children:u.children},g,0,null),x=vs(x,g,A,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&Qs(s,i.child,null,A),s.child.memoizedState=Lf(A),s.memoizedState=Df,x);if((s.mode&1)===0)return Vl(i,s,A,null);if(g.data==="$!"){if(u=g.nextSibling&&g.nextSibling.dataset,u)var k=u.dgst;return u=k,x=Error(t(419)),u=Af(x,u,void 0),Vl(i,s,A,u)}if(k=(A&i.childLanes)!==0,zn||k){if(u=fn,u!==null){switch(A&-A){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(u.suspendedLanes|A))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,sr(i,g),Ti(u,i,g,-1))}return $f(),u=Af(Error(t(421))),Vl(i,s,A,u)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=YM.bind(null,i),g._reactRetry=s,null):(i=x.treeContext,Jn=Rr(g.nextSibling),Qn=s,Wt=!0,yi=null,i!==null&&(ai[li++]=ir,ai[li++]=rr,ai[li++]=ls,ir=i.id,rr=i.overflow,ls=s),s=Nf(s,u.children),s.flags|=4096,s)}function Jg(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),uf(i.return,s,l)}function If(i,s,l,u,g){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:g}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=g)}function e0(i,s,l){var u=s.pendingProps,g=u.revealOrder,x=u.tail;if(Pn(i,s,u.children,l),u=jt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jg(i,l,s);else if(i.tag===19)Jg(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(kt(jt,u),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)i=l.alternate,i!==null&&Nl(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),If(s,!1,g,l,x);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Nl(i)===null){s.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}If(s,!0,l,null,x);break;case"together":If(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ar(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),hs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Vr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function UM(i,s,l){switch(s.tag){case 3:Kg(s),Zs();break;case 5:pg(s);break;case 1:Vn(s.type)&&El(s);break;case 4:hf(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,g=s.memoizedProps.value;kt(Rl,u._currentValue),u._currentValue=g;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(kt(jt,jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Qg(i,s,l):(kt(jt,jt.current&1),i=ar(i,s,l),i!==null?i.sibling:null);kt(jt,jt.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(i.flags&128)!==0){if(u)return e0(i,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),kt(jt,jt.current),u)break;return null;case 22:case 23:return s.lanes=0,Yg(i,s,l)}return ar(i,s,l)}var t0,Uf,n0,i0;t0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Uf=function(){},n0=function(i,s,l,u){var g=i.memoizedProps;if(g!==u){i=s.stateNode,fs(Fi.current);var x=null;switch(l){case"input":g=Mt(i,g),u=Mt(i,u),x=[];break;case"select":g=ue({},g,{value:void 0}),u=ue({},u,{value:void 0}),x=[];break;case"textarea":g=je(i,g),u=je(i,u),x=[];break;default:typeof g.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=yl)}Ve(l,u);var A;l=null;for(le in g)if(!u.hasOwnProperty(le)&&g.hasOwnProperty(le)&&g[le]!=null)if(le==="style"){var k=g[le];for(A in k)k.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?x||(x=[]):(x=x||[]).push(le,null));for(le in u){var V=u[le];if(k=g!=null?g[le]:void 0,u.hasOwnProperty(le)&&V!==k&&(V!=null||k!=null))if(le==="style")if(k){for(A in k)!k.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in V)V.hasOwnProperty(A)&&k[A]!==V[A]&&(l||(l={}),l[A]=V[A])}else l||(x||(x=[]),x.push(le,l)),l=V;else le==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(x=x||[]).push(le,V)):le==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(le,""+V):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(V!=null&&le==="onScroll"&&Vt("scroll",i),x||k===V||(x=[])):(x=x||[]).push(le,V))}l&&(x=x||[]).push("style",l);var le=x;(s.updateQueue=le)&&(s.flags|=4)}},i0=function(i,s,l,u){l!==u&&(s.flags|=4)};function pa(i,s){if(!Wt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Mn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,u|=g.subtreeFlags&14680064,u|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,u|=g.subtreeFlags,u|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function FM(i,s,l){var u=s.pendingProps;switch(nf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(s),null;case 1:return Vn(s.type)&&Ml(),Mn(s),null;case 3:return u=s.stateNode,to(),zt(Bn),zt(yn),gf(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Al(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(Xf(yi),yi=null))),Uf(i,s),Mn(s),null;case 5:pf(s);var g=fs(ca.current);if(l=s.type,i!==null&&s.stateNode!=null)n0(i,s,l,u,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Mn(s),null}if(i=fs(Fi.current),Al(s)){u=s.stateNode,l=s.type;var x=s.memoizedProps;switch(u[Ui]=s,u[ra]=x,i=(s.mode&1)!==0,l){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(g=0;g<ta.length;g++)Vt(ta[g],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":Dt(u,x),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},Vt("invalid",u);break;case"textarea":U(u,x),Vt("invalid",u)}Ve(l,x),g=null;for(var A in x)if(x.hasOwnProperty(A)){var k=x[A];A==="children"?typeof k=="string"?u.textContent!==k&&(x.suppressHydrationWarning!==!0&&_l(u.textContent,k,i),g=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&_l(u.textContent,k,i),g=["children",""+k]):o.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Vt("scroll",u)}switch(l){case"input":rt(u),z(u,x,!0);break;case"textarea":rt(u),X(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=yl)}u=g,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=A.createElement(l,{is:u.is}):(i=A.createElement(l),l==="select"&&(A=i,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):i=A.createElementNS(i,l),i[Ui]=s,i[ra]=u,t0(i,s,!1,!1),s.stateNode=i;e:{switch(A=Le(l,u),l){case"dialog":Vt("cancel",i),Vt("close",i),g=u;break;case"iframe":case"object":case"embed":Vt("load",i),g=u;break;case"video":case"audio":for(g=0;g<ta.length;g++)Vt(ta[g],i);g=u;break;case"source":Vt("error",i),g=u;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),g=u;break;case"details":Vt("toggle",i),g=u;break;case"input":Dt(i,u),g=Mt(i,u),Vt("invalid",i);break;case"option":g=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},g=ue({},u,{value:void 0}),Vt("invalid",i);break;case"textarea":U(i,u),g=je(i,u),Vt("invalid",i);break;default:g=u}Ve(l,g),k=g;for(x in k)if(k.hasOwnProperty(x)){var V=k[x];x==="style"?we(i,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Be(i,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&be(i,V):typeof V=="number"&&be(i,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Vt("scroll",i):V!=null&&C(i,x,V,A))}switch(l){case"input":rt(i),z(i,u,!1);break;case"textarea":rt(i),X(i);break;case"option":u.value!=null&&i.setAttribute("value",""+pe(u.value));break;case"select":i.multiple=!!u.multiple,x=u.value,x!=null?Et(i,!!u.multiple,x,!1):u.defaultValue!=null&&Et(i,!!u.multiple,u.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=yl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mn(s),null;case 6:if(i&&s.stateNode!=null)i0(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=fs(ca.current),fs(Fi.current),Al(s)){if(u=s.stateNode,l=s.memoizedProps,u[Ui]=s,(x=u.nodeValue!==l)&&(i=Qn,i!==null))switch(i.tag){case 3:_l(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&_l(u.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ui]=s,s.stateNode=u}return Mn(s),null;case 13:if(zt(jt),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Wt&&Jn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)og(),Zs(),s.flags|=98560,x=!1;else if(x=Al(s),u!==null&&u.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ui]=s}else Zs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mn(s),x=!1}else yi!==null&&(Xf(yi),yi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(jt.current&1)!==0?on===0&&(on=3):$f())),s.updateQueue!==null&&(s.flags|=4),Mn(s),null);case 4:return to(),Uf(i,s),i===null&&na(s.stateNode.containerInfo),Mn(s),null;case 10:return cf(s.type._context),Mn(s),null;case 17:return Vn(s.type)&&Ml(),Mn(s),null;case 19:if(zt(jt),x=s.memoizedState,x===null)return Mn(s),null;if(u=(s.flags&128)!==0,A=x.rendering,A===null)if(u)pa(x,!1);else{if(on!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Nl(i),A!==null){for(s.flags|=128,pa(x,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)x=l,i=u,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return kt(jt,jt.current&1|2),s.child}i=i.sibling}x.tail!==null&&P()>so&&(s.flags|=128,u=!0,pa(x,!1),s.lanes=4194304)}else{if(!u)if(i=Nl(A),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),pa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Wt)return Mn(s),null}else 2*P()-x.renderingStartTime>so&&l!==1073741824&&(s.flags|=128,u=!0,pa(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=P(),s.sibling=null,l=jt.current,kt(jt,u?l&1|2:l&1),s):(Mn(s),null);case 22:case 23:return qf(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(ei&1073741824)!==0&&(Mn(s),s.subtreeFlags&6&&(s.flags|=8192)):Mn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function OM(i,s){switch(nf(s),s.tag){case 1:return Vn(s.type)&&Ml(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return to(),zt(Bn),zt(yn),gf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return pf(s),null;case 13:if(zt(jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Zs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return zt(jt),null;case 4:return to(),null;case 10:return cf(s.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var Hl=!1,En=!1,kM=typeof WeakSet=="function"?WeakSet:Set,ke=null;function io(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Yt(i,s,u)}else l.current=null}function Ff(i,s,l){try{l()}catch(u){Yt(i,s,u)}}var r0=!1;function BM(i,s){if(Yu=ll,i=Fm(),Bu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var g=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,k=-1,V=-1,le=0,xe=0,_e=i,ve=null;t:for(;;){for(var Ue;_e!==l||g!==0&&_e.nodeType!==3||(k=A+g),_e!==x||u!==0&&_e.nodeType!==3||(V=A+u),_e.nodeType===3&&(A+=_e.nodeValue.length),(Ue=_e.firstChild)!==null;)ve=_e,_e=Ue;for(;;){if(_e===i)break t;if(ve===l&&++le===g&&(k=A),ve===x&&++xe===u&&(V=A),(Ue=_e.nextSibling)!==null)break;_e=ve,ve=_e.parentNode}_e=Ue}l=k===-1||V===-1?null:{start:k,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(qu={focusedElem:i,selectionRange:l},ll=!1,ke=s;ke!==null;)if(s=ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ke=i;else for(;ke!==null;){s=ke;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var qe=He.memoizedProps,Qt=He.memoizedState,ee=s.stateNode,j=ee.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Si(s.type,qe),Qt);ee.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Yt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ke=i;break}ke=s.return}return He=r0,r0=!1,He}function ma(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var g=u=u.next;do{if((g.tag&i)===i){var x=g.destroy;g.destroy=void 0,x!==void 0&&Ff(s,l,x)}g=g.next}while(g!==u)}}function Gl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function Of(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function s0(i){var s=i.alternate;s!==null&&(i.alternate=null,s0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ui],delete s[ra],delete s[Qu],delete s[SM],delete s[MM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function o0(i){return i.tag===5||i.tag===3||i.tag===4}function a0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||o0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function kf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=yl));else if(u!==4&&(i=i.child,i!==null))for(kf(i,s,l),i=i.sibling;i!==null;)kf(i,s,l),i=i.sibling}function Bf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Bf(i,s,l),i=i.sibling;i!==null;)Bf(i,s,l),i=i.sibling}var pn=null,Mi=!1;function Ur(i,s,l){for(l=l.child;l!==null;)l0(i,s,l),l=l.sibling}function l0(i,s,l){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Re,l)}catch{}switch(l.tag){case 5:En||io(l,s);case 6:var u=pn,g=Mi;pn=null,Ur(i,s,l),pn=u,Mi=g,pn!==null&&(Mi?(i=pn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):pn.removeChild(l.stateNode));break;case 18:pn!==null&&(Mi?(i=pn,l=l.stateNode,i.nodeType===8?Zu(i.parentNode,l):i.nodeType===1&&Zu(i,l),Yo(i)):Zu(pn,l.stateNode));break;case 4:u=pn,g=Mi,pn=l.stateNode.containerInfo,Mi=!0,Ur(i,s,l),pn=u,Mi=g;break;case 0:case 11:case 14:case 15:if(!En&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){g=u=u.next;do{var x=g,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Ff(l,s,A),g=g.next}while(g!==u)}Ur(i,s,l);break;case 1:if(!En&&(io(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(k){Yt(l,s,k)}Ur(i,s,l);break;case 21:Ur(i,s,l);break;case 22:l.mode&1?(En=(u=En)||l.memoizedState!==null,Ur(i,s,l),En=u):Ur(i,s,l);break;default:Ur(i,s,l)}}function c0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new kM),s.forEach(function(u){var g=qM.bind(null,i,u);l.has(u)||(l.add(u),u.then(g,g))})}}function Ei(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var g=l[u];try{var x=i,A=s,k=A;e:for(;k!==null;){switch(k.tag){case 5:pn=k.stateNode,Mi=!1;break e;case 3:pn=k.stateNode.containerInfo,Mi=!0;break e;case 4:pn=k.stateNode.containerInfo,Mi=!0;break e}k=k.return}if(pn===null)throw Error(t(160));l0(x,A,g),pn=null,Mi=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(le){Yt(g,s,le)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)u0(s,i),s=s.sibling}function u0(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),ki(i),u&4){try{ma(3,i,i.return),Gl(3,i)}catch(qe){Yt(i,i.return,qe)}try{ma(5,i,i.return)}catch(qe){Yt(i,i.return,qe)}}break;case 1:Ei(s,i),ki(i),u&512&&l!==null&&io(l,l.return);break;case 5:if(Ei(s,i),ki(i),u&512&&l!==null&&io(l,l.return),i.flags&32){var g=i.stateNode;try{be(g,"")}catch(qe){Yt(i,i.return,qe)}}if(u&4&&(g=i.stateNode,g!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,k=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&ft(g,x),Le(k,A);var le=Le(k,x);for(A=0;A<V.length;A+=2){var xe=V[A],_e=V[A+1];xe==="style"?we(g,_e):xe==="dangerouslySetInnerHTML"?Be(g,_e):xe==="children"?be(g,_e):C(g,xe,_e,le)}switch(k){case"input":Bt(g,x);break;case"textarea":w(g,x);break;case"select":var ve=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var Ue=x.value;Ue!=null?Et(g,!!x.multiple,Ue,!1):ve!==!!x.multiple&&(x.defaultValue!=null?Et(g,!!x.multiple,x.defaultValue,!0):Et(g,!!x.multiple,x.multiple?[]:"",!1))}g[ra]=x}catch(qe){Yt(i,i.return,qe)}}break;case 6:if(Ei(s,i),ki(i),u&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,x=i.memoizedProps;try{g.nodeValue=x}catch(qe){Yt(i,i.return,qe)}}break;case 3:if(Ei(s,i),ki(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Yo(s.containerInfo)}catch(qe){Yt(i,i.return,qe)}break;case 4:Ei(s,i),ki(i);break;case 13:Ei(s,i),ki(i),g=i.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Hf=P())),u&4&&c0(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(En=(le=En)||xe,Ei(s,i),En=le):Ei(s,i),ki(i),u&8192){if(le=i.memoizedState!==null,(i.stateNode.isHidden=le)&&!xe&&(i.mode&1)!==0)for(ke=i,xe=i.child;xe!==null;){for(_e=ke=xe;ke!==null;){switch(ve=ke,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:ma(4,ve,ve.return);break;case 1:io(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){u=ve,l=ve.return;try{s=u,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(qe){Yt(u,l,qe)}}break;case 5:io(ve,ve.return);break;case 22:if(ve.memoizedState!==null){h0(_e);continue}}Ue!==null?(Ue.return=ve,ke=Ue):h0(_e)}xe=xe.sibling}e:for(xe=null,_e=i;;){if(_e.tag===5){if(xe===null){xe=_e;try{g=_e.stateNode,le?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=_e.stateNode,V=_e.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=ye("display",A))}catch(qe){Yt(i,i.return,qe)}}}else if(_e.tag===6){if(xe===null)try{_e.stateNode.nodeValue=le?"":_e.memoizedProps}catch(qe){Yt(i,i.return,qe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===i)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===i)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===i)break e;xe===_e&&(xe=null),_e=_e.return}xe===_e&&(xe=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Ei(s,i),ki(i),u&4&&c0(i);break;case 21:break;default:Ei(s,i),ki(i)}}function ki(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(o0(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var g=u.stateNode;u.flags&32&&(be(g,""),u.flags&=-33);var x=a0(i);Bf(i,x,g);break;case 3:case 4:var A=u.stateNode.containerInfo,k=a0(i);kf(i,k,A);break;default:throw Error(t(161))}}catch(V){Yt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function VM(i,s,l){ke=i,f0(i)}function f0(i,s,l){for(var u=(i.mode&1)!==0;ke!==null;){var g=ke,x=g.child;if(g.tag===22&&u){var A=g.memoizedState!==null||Hl;if(!A){var k=g.alternate,V=k!==null&&k.memoizedState!==null||En;k=Hl;var le=En;if(Hl=A,(En=V)&&!le)for(ke=g;ke!==null;)A=ke,V=A.child,A.tag===22&&A.memoizedState!==null?p0(g):V!==null?(V.return=A,ke=V):p0(g);for(;x!==null;)ke=x,f0(x),x=x.sibling;ke=g,Hl=k,En=le}d0(i)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,ke=x):d0(i)}}function d0(i){for(;ke!==null;){var s=ke;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:En||Gl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!En)if(l===null)u.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:Si(s.type,l.memoizedProps);u.componentDidUpdate(g,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&hg(s,x,u);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}hg(s,A,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var le=s.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var _e=xe.dehydrated;_e!==null&&Yo(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||s.flags&512&&Of(s)}catch(ve){Yt(s,s.return,ve)}}if(s===i){ke=null;break}if(l=s.sibling,l!==null){l.return=s.return,ke=l;break}ke=s.return}}function h0(i){for(;ke!==null;){var s=ke;if(s===i){ke=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ke=l;break}ke=s.return}}function p0(i){for(;ke!==null;){var s=ke;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Gl(4,s)}catch(V){Yt(s,l,V)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var g=s.return;try{u.componentDidMount()}catch(V){Yt(s,g,V)}}var x=s.return;try{Of(s)}catch(V){Yt(s,x,V)}break;case 5:var A=s.return;try{Of(s)}catch(V){Yt(s,A,V)}}}catch(V){Yt(s,s.return,V)}if(s===i){ke=null;break}var k=s.sibling;if(k!==null){k.return=s.return,ke=k;break}ke=s.return}}var zM=Math.ceil,Wl=R.ReactCurrentDispatcher,Vf=R.ReactCurrentOwner,fi=R.ReactCurrentBatchConfig,wt=0,fn=null,tn=null,mn=0,ei=0,ro=Pr(0),on=0,ga=null,hs=0,jl=0,zf=0,va=null,Hn=null,Hf=0,so=1/0,lr=null,Xl=!1,Gf=null,Fr=null,Yl=!1,Or=null,ql=0,xa=0,Wf=null,$l=-1,Kl=0;function Dn(){return(wt&6)!==0?P():$l!==-1?$l:$l=P()}function kr(i){return(i.mode&1)===0?1:(wt&2)!==0&&mn!==0?mn&-mn:TM.transition!==null?(Kl===0&&(Kl=On()),Kl):(i=at,i!==0||(i=window.event,i=i===void 0?16:gm(i.type)),i)}function Ti(i,s,l,u){if(50<xa)throw xa=0,Wf=null,Error(t(185));Kn(i,l,u),((wt&2)===0||i!==fn)&&(i===fn&&((wt&2)===0&&(jl|=l),on===4&&Br(i,mn)),Gn(i,u),l===1&&wt===0&&(s.mode&1)===0&&(so=P()+500,Tl&&Lr()))}function Gn(i,s){var l=i.callbackNode;Rn(i,s);var u=Kt(i,i===fn?mn:0);if(u===0)l!==null&&sl(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&sl(l),s===1)i.tag===0?EM(g0.bind(null,i)):tg(g0.bind(null,i)),_M(function(){(wt&6)===0&&Lr()}),l=null;else{switch(xi(u)){case 1:l=ce;break;case 4:l=se;break;case 16:l=te;break;case 536870912:l=Fe;break;default:l=te}l=T0(l,m0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function m0(i,s){if($l=-1,Kl=0,(wt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(oo()&&i.callbackNode!==l)return null;var u=Kt(i,i===fn?mn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=Zl(i,u);else{s=u;var g=wt;wt|=2;var x=x0();(fn!==i||mn!==s)&&(lr=null,so=P()+500,ms(i,s));do try{WM();break}catch(k){v0(i,k)}while(!0);lf(),Wl.current=x,wt=g,tn!==null?s=0:(fn=null,mn=0,s=on)}if(s!==0){if(s===2&&(g=xt(i),g!==0&&(u=g,s=jf(i,g))),s===1)throw l=ga,ms(i,0),Br(i,u),Gn(i,P()),l;if(s===6)Br(i,u);else{if(g=i.current.alternate,(u&30)===0&&!HM(g)&&(s=Zl(i,u),s===2&&(x=xt(i),x!==0&&(u=x,s=jf(i,x))),s===1))throw l=ga,ms(i,0),Br(i,u),Gn(i,P()),l;switch(i.finishedWork=g,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:gs(i,Hn,lr);break;case 3:if(Br(i,u),(u&130023424)===u&&(s=Hf+500-P(),10<s)){if(Kt(i,0)!==0)break;if(g=i.suspendedLanes,(g&u)!==u){Dn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Ku(gs.bind(null,i,Hn,lr),s);break}gs(i,Hn,lr);break;case 4:if(Br(i,u),(u&4194240)===u)break;for(s=i.eventTimes,g=-1;0<u;){var A=31-tt(u);x=1<<A,A=s[A],A>g&&(g=A),u&=~x}if(u=g,u=P()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*zM(u/1960))-u,10<u){i.timeoutHandle=Ku(gs.bind(null,i,Hn,lr),u);break}gs(i,Hn,lr);break;case 5:gs(i,Hn,lr);break;default:throw Error(t(329))}}}return Gn(i,P()),i.callbackNode===l?m0.bind(null,i):null}function jf(i,s){var l=va;return i.current.memoizedState.isDehydrated&&(ms(i,s).flags|=256),i=Zl(i,s),i!==2&&(s=Hn,Hn=l,s!==null&&Xf(s)),i}function Xf(i){Hn===null?Hn=i:Hn.push.apply(Hn,i)}function HM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var g=l[u],x=g.getSnapshot;g=g.value;try{if(!_i(x(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Br(i,s){for(s&=~zf,s&=~jl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-tt(s),u=1<<l;i[l]=-1,s&=~u}}function g0(i){if((wt&6)!==0)throw Error(t(327));oo();var s=Kt(i,0);if((s&1)===0)return Gn(i,P()),null;var l=Zl(i,s);if(i.tag!==0&&l===2){var u=xt(i);u!==0&&(s=u,l=jf(i,u))}if(l===1)throw l=ga,ms(i,0),Br(i,s),Gn(i,P()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,gs(i,Hn,lr),Gn(i,P()),null}function Yf(i,s){var l=wt;wt|=1;try{return i(s)}finally{wt=l,wt===0&&(so=P()+500,Tl&&Lr())}}function ps(i){Or!==null&&Or.tag===0&&(wt&6)===0&&oo();var s=wt;wt|=1;var l=fi.transition,u=at;try{if(fi.transition=null,at=1,i)return i()}finally{at=u,fi.transition=l,wt=s,(wt&6)===0&&Lr()}}function qf(){ei=ro.current,zt(ro)}function ms(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,xM(l)),tn!==null)for(l=tn.return;l!==null;){var u=l;switch(nf(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ml();break;case 3:to(),zt(Bn),zt(yn),gf();break;case 5:pf(u);break;case 4:to();break;case 13:zt(jt);break;case 19:zt(jt);break;case 10:cf(u.type._context);break;case 22:case 23:qf()}l=l.return}if(fn=i,tn=i=Vr(i.current,null),mn=ei=s,on=0,ga=null,zf=jl=hs=0,Hn=va=null,us!==null){for(s=0;s<us.length;s++)if(l=us[s],u=l.interleaved,u!==null){l.interleaved=null;var g=u.next,x=l.pending;if(x!==null){var A=x.next;x.next=g,u.next=A}l.pending=u}us=null}return i}function v0(i,s){do{var l=tn;try{if(lf(),Il.current=kl,Ul){for(var u=Xt.memoizedState;u!==null;){var g=u.queue;g!==null&&(g.pending=null),u=u.next}Ul=!1}if(ds=0,un=sn=Xt=null,ua=!1,fa=0,Vf.current=null,l===null||l.return===null){on=1,ga=s,tn=null;break}e:{var x=i,A=l.return,k=l,V=s;if(s=mn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var le=V,xe=k,_e=xe.tag;if((xe.mode&1)===0&&(_e===0||_e===11||_e===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=Hg(A);if(Ue!==null){Ue.flags&=-257,Gg(Ue,A,k,x,s),Ue.mode&1&&zg(x,le,s),s=Ue,V=le;var He=s.updateQueue;if(He===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else He.add(V);break e}else{if((s&1)===0){zg(x,le,s),$f();break e}V=Error(t(426))}}else if(Wt&&k.mode&1){var Qt=Hg(A);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Gg(Qt,A,k,x,s),of(no(V,k));break e}}x=V=no(V,k),on!==4&&(on=2),va===null?va=[x]:va.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ee=Bg(x,V,s);dg(x,ee);break e;case 1:k=V;var j=x.type,ie=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Fr===null||!Fr.has(ie)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=Vg(x,k,s);dg(x,Te);break e}}x=x.return}while(x!==null)}y0(l)}catch(Ze){s=Ze,tn===l&&l!==null&&(tn=l=l.return);continue}break}while(!0)}function x0(){var i=Wl.current;return Wl.current=kl,i===null?kl:i}function $f(){(on===0||on===3||on===2)&&(on=4),fn===null||(hs&268435455)===0&&(jl&268435455)===0||Br(fn,mn)}function Zl(i,s){var l=wt;wt|=2;var u=x0();(fn!==i||mn!==s)&&(lr=null,ms(i,s));do try{GM();break}catch(g){v0(i,g)}while(!0);if(lf(),wt=l,Wl.current=u,tn!==null)throw Error(t(261));return fn=null,mn=0,on}function GM(){for(;tn!==null;)_0(tn)}function WM(){for(;tn!==null&&!wu();)_0(tn)}function _0(i){var s=E0(i.alternate,i,ei);i.memoizedProps=i.pendingProps,s===null?y0(i):tn=s,Vf.current=null}function y0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=FM(l,s,ei),l!==null){tn=l;return}}else{if(l=OM(l,s),l!==null){l.flags&=32767,tn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{on=6,tn=null;return}}if(s=s.sibling,s!==null){tn=s;return}tn=s=i}while(s!==null);on===0&&(on=5)}function gs(i,s,l){var u=at,g=fi.transition;try{fi.transition=null,at=1,jM(i,s,l,u)}finally{fi.transition=g,at=u}return null}function jM(i,s,l,u){do oo();while(Or!==null);if((wt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Mr(i,x),i===fn&&(tn=fn=null,mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Yl||(Yl=!0,T0(te,function(){return oo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var A=at;at=1;var k=wt;wt|=4,Vf.current=null,BM(i,l),u0(l,i),fM(qu),ll=!!Yu,qu=Yu=null,i.current=l,VM(l),bu(),wt=k,at=A,fi.transition=x}else i.current=l;if(Yl&&(Yl=!1,Or=i,ql=g),x=i.pendingLanes,x===0&&(Fr=null),Qe(l.stateNode),Gn(i,P()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)g=s[l],u(g.value,{componentStack:g.stack,digest:g.digest});if(Xl)throw Xl=!1,i=Gf,Gf=null,i;return(ql&1)!==0&&i.tag!==0&&oo(),x=i.pendingLanes,(x&1)!==0?i===Wf?xa++:(xa=0,Wf=i):xa=0,Lr(),null}function oo(){if(Or!==null){var i=xi(ql),s=fi.transition,l=at;try{if(fi.transition=null,at=16>i?16:i,Or===null)var u=!1;else{if(i=Or,Or=null,ql=0,(wt&6)!==0)throw Error(t(331));var g=wt;for(wt|=4,ke=i.current;ke!==null;){var x=ke,A=x.child;if((ke.flags&16)!==0){var k=x.deletions;if(k!==null){for(var V=0;V<k.length;V++){var le=k[V];for(ke=le;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:ma(8,xe,x)}var _e=xe.child;if(_e!==null)_e.return=xe,ke=_e;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Ue=xe.return;if(s0(xe),xe===le){ke=null;break}if(ve!==null){ve.return=Ue,ke=ve;break}ke=Ue}}}var He=x.alternate;if(He!==null){var qe=He.child;if(qe!==null){He.child=null;do{var Qt=qe.sibling;qe.sibling=null,qe=Qt}while(qe!==null)}}ke=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,ke=A;else e:for(;ke!==null;){if(x=ke,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ma(9,x,x.return)}var ee=x.sibling;if(ee!==null){ee.return=x.return,ke=ee;break e}ke=x.return}}var j=i.current;for(ke=j;ke!==null;){A=ke;var ie=A.child;if((A.subtreeFlags&2064)!==0&&ie!==null)ie.return=A,ke=ie;else e:for(A=j;ke!==null;){if(k=ke,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Gl(9,k)}}catch(Ze){Yt(k,k.return,Ze)}if(k===A){ke=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,ke=Te;break e}ke=k.return}}if(wt=g,Lr(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Re,i)}catch{}u=!0}return u}finally{at=l,fi.transition=s}}return!1}function S0(i,s,l){s=no(l,s),s=Bg(i,s,1),i=Ir(i,s,1),s=Dn(),i!==null&&(Kn(i,1,s),Gn(i,s))}function Yt(i,s,l){if(i.tag===3)S0(i,i,l);else for(;s!==null;){if(s.tag===3){S0(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fr===null||!Fr.has(u))){i=no(l,i),i=Vg(s,i,1),s=Ir(s,i,1),i=Dn(),s!==null&&(Kn(s,1,i),Gn(s,i));break}}s=s.return}}function XM(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=Dn(),i.pingedLanes|=i.suspendedLanes&l,fn===i&&(mn&l)===l&&(on===4||on===3&&(mn&130023424)===mn&&500>P()-Hf?ms(i,0):zf|=l),Gn(i,s)}function M0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var l=Dn();i=sr(i,s),i!==null&&(Kn(i,s,l),Gn(i,l))}function YM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),M0(i,l)}function qM(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),M0(i,l)}var E0;E0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Bn.current)zn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return zn=!1,UM(i,s,l);zn=(i.flags&131072)!==0}else zn=!1,Wt&&(s.flags&1048576)!==0&&ng(s,bl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;zl(i,s),i=s.pendingProps;var g=qs(s,yn.current);eo(s,l),g=_f(null,s,u,i,g,l);var x=yf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Vn(u)?(x=!0,El(s)):x=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,df(s),g.updater=Bl,s.stateNode=g,g._reactInternals=s,bf(s,u,i,l),s=Pf(null,s,u,!0,x,l)):(s.tag=0,Wt&&x&&tf(s),Pn(null,s,g,l),s=s.child),s;case 16:u=s.elementType;e:{switch(zl(i,s),i=s.pendingProps,g=u._init,u=g(u._payload),s.type=u,g=s.tag=KM(u),i=Si(u,i),g){case 0:s=Rf(null,s,u,i,l);break e;case 1:s=$g(null,s,u,i,l);break e;case 11:s=Wg(null,s,u,i,l);break e;case 14:s=jg(null,s,u,Si(u.type,i),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Si(u,g),Rf(i,s,u,g,l);case 1:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Si(u,g),$g(i,s,u,g,l);case 3:e:{if(Kg(s),i===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,g=x.element,fg(i,s),Ll(s,u,null,l);var A=s.memoizedState;if(u=A.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){g=no(Error(t(423)),s),s=Zg(i,s,u,l,g);break e}else if(u!==g){g=no(Error(t(424)),s),s=Zg(i,s,u,l,g);break e}else for(Jn=Rr(s.stateNode.containerInfo.firstChild),Qn=s,Wt=!0,yi=null,l=cg(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Zs(),u===g){s=ar(i,s,l);break e}Pn(i,s,u,l)}s=s.child}return s;case 5:return pg(s),i===null&&sf(s),u=s.type,g=s.pendingProps,x=i!==null?i.memoizedProps:null,A=g.children,$u(u,g)?A=null:x!==null&&$u(u,x)&&(s.flags|=32),qg(i,s),Pn(i,s,A,l),s.child;case 6:return i===null&&sf(s),null;case 13:return Qg(i,s,l);case 4:return hf(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=Qs(s,null,u,l):Pn(i,s,u,l),s.child;case 11:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Si(u,g),Wg(i,s,u,g,l);case 7:return Pn(i,s,s.pendingProps,l),s.child;case 8:return Pn(i,s,s.pendingProps.children,l),s.child;case 12:return Pn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,g=s.pendingProps,x=s.memoizedProps,A=g.value,kt(Rl,u._currentValue),u._currentValue=A,x!==null)if(_i(x.value,A)){if(x.children===g.children&&!Bn.current){s=ar(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var k=x.dependencies;if(k!==null){A=x.child;for(var V=k.firstContext;V!==null;){if(V.context===u){if(x.tag===1){V=or(-1,l&-l),V.tag=2;var le=x.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),le.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),uf(x.return,l,s),k.lanes|=l;break}V=V.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,k=A.alternate,k!==null&&(k.lanes|=l),uf(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Pn(i,s,g.children,l),s=s.child}return s;case 9:return g=s.type,u=s.pendingProps.children,eo(s,l),g=ci(g),u=u(g),s.flags|=1,Pn(i,s,u,l),s.child;case 14:return u=s.type,g=Si(u,s.pendingProps),g=Si(u.type,g),jg(i,s,u,g,l);case 15:return Xg(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,g=s.pendingProps,g=s.elementType===u?g:Si(u,g),zl(i,s),s.tag=1,Vn(u)?(i=!0,El(s)):i=!1,eo(s,l),Og(s,u,g),bf(s,u,g,l),Pf(null,s,u,!0,i,l);case 19:return e0(i,s,l);case 22:return Yg(i,s,l)}throw Error(t(156,s.tag))};function T0(i,s){return rl(i,s)}function $M(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(i,s,l,u){return new $M(i,s,l,u)}function Kf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function KM(i){if(typeof i=="function")return Kf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===H)return 11;if(i===Q)return 14}return 2}function Vr(i,s){var l=i.alternate;return l===null?(l=di(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Ql(i,s,l,u,g,x){var A=2;if(u=i,typeof i=="function")Kf(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case O:return vs(l.children,g,x,s);case E:A=8,g|=8;break;case D:return i=di(12,l,s,g|2),i.elementType=D,i.lanes=x,i;case K:return i=di(13,l,s,g),i.elementType=K,i.lanes=x,i;case oe:return i=di(19,l,s,g),i.elementType=oe,i.lanes=x,i;case Y:return Jl(l,g,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case G:A=10;break e;case F:A=9;break e;case H:A=11;break e;case Q:A=14;break e;case J:A=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=di(A,l,s,g),s.elementType=i,s.type=u,s.lanes=x,s}function vs(i,s,l,u){return i=di(7,i,u,s),i.lanes=l,i}function Jl(i,s,l,u){return i=di(22,i,u,s),i.elementType=Y,i.lanes=l,i.stateNode={isHidden:!1},i}function Zf(i,s,l){return i=di(6,i,null,s),i.lanes=l,i}function Qf(i,s,l){return s=di(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ZM(i,s,l,u,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=u,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Jf(i,s,l,u,g,x,A,k,V){return i=new ZM(i,s,l,k,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=di(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(x),i}function QM(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function w0(i){if(!i)return Dr;i=i._reactInternals;e:{if(Ii(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Vn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Vn(l))return Jm(i,l,s)}return s}function b0(i,s,l,u,g,x,A,k,V){return i=Jf(l,u,!0,i,g,x,A,k,V),i.context=w0(null),l=i.current,u=Dn(),g=kr(l),x=or(u,g),x.callback=s??null,Ir(l,x,g),i.current.lanes=g,Kn(i,g,u),Gn(i,u),i}function ec(i,s,l,u){var g=s.current,x=Dn(),A=kr(g);return l=w0(l),s.context===null?s.context=l:s.pendingContext=l,s=or(x,A),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Ir(g,s,A),i!==null&&(Ti(i,g,A,x),Dl(i,g,A)),A}function tc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function A0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ed(i,s){A0(i,s),(i=i.alternate)&&A0(i,s)}function JM(){return null}var C0=typeof reportError=="function"?reportError:function(i){console.error(i)};function td(i){this._internalRoot=i}nc.prototype.render=td.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));ec(i,s,null,null)},nc.prototype.unmount=td.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ps(function(){ec(null,i,null,null)}),s[tr]=null}};function nc(i){this._internalRoot=i}nc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ho();i={blockedOn:null,target:i,priority:s};for(var l=0;l<br.length&&s!==0&&s<br[l].priority;l++);br.splice(l,0,i),l===0&&pm(i)}};function nd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ic(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function R0(){}function eE(i,s,l,u,g){if(g){if(typeof u=="function"){var x=u;u=function(){var le=tc(A);x.call(le)}}var A=b0(s,u,i,0,null,!1,!1,"",R0);return i._reactRootContainer=A,i[tr]=A.current,na(i.nodeType===8?i.parentNode:i),ps(),A}for(;g=i.lastChild;)i.removeChild(g);if(typeof u=="function"){var k=u;u=function(){var le=tc(V);k.call(le)}}var V=Jf(i,0,!1,null,null,!1,!1,"",R0);return i._reactRootContainer=V,i[tr]=V.current,na(i.nodeType===8?i.parentNode:i),ps(function(){ec(s,V,l,u)}),V}function rc(i,s,l,u,g){var x=l._reactRootContainer;if(x){var A=x;if(typeof g=="function"){var k=g;g=function(){var V=tc(A);k.call(V)}}ec(s,A,i,g)}else A=eE(l,s,i,g,u);return tc(A)}Zt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=yt(s.pendingLanes);l!==0&&(Rt(s,l|1),Gn(s,P()),(wt&6)===0&&(so=P()+500,Lr()))}break;case 13:ps(function(){var u=sr(i,1);if(u!==null){var g=Dn();Ti(u,i,1,g)}}),ed(i,1)}},oi=function(i){if(i.tag===13){var s=sr(i,134217728);if(s!==null){var l=Dn();Ti(s,i,134217728,l)}ed(i,134217728)}},er=function(i){if(i.tag===13){var s=kr(i),l=sr(i,s);if(l!==null){var u=Dn();Ti(l,i,s,u)}ed(i,s)}},Ho=function(){return at},dm=function(i,s){var l=at;try{return at=i,s()}finally{at=l}},Ae=function(i,s,l){switch(s){case"input":if(Bt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var g=Sl(u);if(!g)throw Error(t(90));$t(u),Bt(u,g)}}}break;case"textarea":w(i,l);break;case"select":s=l.value,s!=null&&Et(i,!!l.multiple,s,!1)}},ot=Yf,Nt=ps;var tE={usingClientEntryPoint:!1,Events:[sa,Xs,Sl,de,ze,Yf]},_a={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=nl(i),i===null?null:i.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||JM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Re=sc.inject(nE),Ie=sc}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE,Wn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(s))throw Error(t(200));return QM(i,s,null,l)},Wn.createRoot=function(i,s){if(!nd(i))throw Error(t(299));var l=!1,u="",g=C0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Jf(i,1,!1,null,null,l,!1,u,g),i[tr]=s.current,na(i.nodeType===8?i.parentNode:i),new td(s)},Wn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=nl(s),i=i===null?null:i.stateNode,i},Wn.flushSync=function(i){return ps(i)},Wn.hydrate=function(i,s,l){if(!ic(s))throw Error(t(200));return rc(null,i,s,!0,l)},Wn.hydrateRoot=function(i,s,l){if(!nd(i))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,g=!1,x="",A=C0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=b0(s,null,i,1,l??null,g,!1,x,A),i[tr]=s.current,na(i),u)for(i=0;i<u.length;i++)l=u[i],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new nc(s)},Wn.render=function(i,s,l){if(!ic(s))throw Error(t(200));return rc(null,i,s,!1,l)},Wn.unmountComponentAtNode=function(i){if(!ic(i))throw Error(t(40));return i._reactRootContainer?(ps(function(){rc(null,null,i,!1,function(){i._reactRootContainer=null,i[tr]=null})}),!0):!1},Wn.unstable_batchedUpdates=Yf,Wn.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!ic(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return rc(i,s,l,!1,u)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var O0;function uE(){if(O0)return sd.exports;O0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sd.exports=cE(),sd.exports}var k0;function fE(){if(k0)return oc;k0=1;var n=uE();return oc.createRoot=n.createRoot,oc.hydrateRoot=n.hydrateRoot,oc}var dE=fE();function e_(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=e_(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function t_(){for(var n,e,t=0,r="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=e_(n))&&(r&&(r+=" "),r+=e);return r}var sh=new Map,ac=new WeakMap,B0=0,hE=void 0;function pE(n){return n?(ac.has(n)||(B0+=1,ac.set(n,B0.toString())),ac.get(n)):"0"}function mE(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?pE(n.root):n[e]}`).toString()}function gE(n){const e=mE(n);let t=sh.get(e);if(!t){const r=new Map;let o;const a=new IntersectionObserver(c=>{c.forEach(f=>{var d;const h=f.isIntersecting&&o.some(m=>f.intersectionRatio>=m);n.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=h),(d=r.get(f.target))==null||d.forEach(m=>{m(h,f)})})},n);o=a.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:a,elements:r},sh.set(e,t)}return t}function vE(n,e,t={},r=hE){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const d=n.getBoundingClientRect();return e(r,{isIntersecting:r,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:o,observer:a,elements:c}=gE(t),f=c.get(n)||[];return c.has(n)||c.set(n,f),f.push(e),a.observe(n),function(){f.splice(f.indexOf(e),1),f.length===0&&(c.delete(n),a.unobserve(n)),c.size===0&&(a.disconnect(),sh.delete(o))}}function xE({threshold:n,delay:e,trackVisibility:t,rootMargin:r,root:o,triggerOnce:a,skip:c,initialInView:f,fallbackInView:d,onChange:h}={}){var m;const[v,p]=Me.useState(null),_=Me.useRef(h),[M,b]=Me.useState({inView:!!f,entry:void 0});_.current=h,Me.useEffect(()=>{if(c||!v)return;let C;return C=vE(v,(R,I)=>{b({inView:R,entry:I}),_.current&&_.current(R,I),I.isIntersecting&&a&&C&&(C(),C=void 0)},{root:o,rootMargin:r,threshold:n,trackVisibility:t,delay:e},d),()=>{C&&C()}},[Array.isArray(n)?n.toString():n,v,o,r,a,c,t,d,e]);const y=(m=M.entry)==null?void 0:m.target,S=Me.useRef(void 0);!v&&y&&!a&&!c&&S.current!==y&&(S.current=y,b({inView:!!f,entry:void 0}));const T=[p,M.inView,M.entry];return T.ref=T[0],T.inView=T[1],T.entry=T[2],T}function fu(){const[n,e]=Me.useState(!1);return Me.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),r=()=>e(t.matches);return r(),t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[]),n}function vn({children:n,className:e,delayMs:t=0}){const r=fu(),{ref:o,inView:a}=xE({triggerOnce:!0,threshold:.08,rootMargin:"0px 0px -8% 0px"}),c=r||a;return L.jsx("div",{ref:o,className:t_(e,!c&&!r&&"opacity-0",c&&!r&&"animate__animated animate__fadeInUp"),style:r?void 0:{animationDelay:`${t}ms`,animationDuration:"0.65s"},children:n})}const bn={name:"Glenn R. Galbadores I",nameShort:"Glenn Galbadores",phoneDisplay:"+63 915 081 3134",phoneTel:"+639150813134",emails:["g1galba042804@gmail.com","galbag12004@gmail.com"],githubUrl:"https://github.com/nyakorare",uptimeStatusUrl:"https://stats.uptimerobot.com/JyYATn0Zv8",images:{profile:"/images/myPicture.png"},education:{school:"Technological University of the Philippines – Manila",program:"Computer Science",dateLabel:"August 2026",logo:"/images/tup.png"},certifications:[{title:"CSC – Professional",issuer:"CSC"},{title:"Business Intelligence with Power BI Querying Fundamentals with MySQL",issuer:"Data Analytics Philippines"},{title:"Building Generative AI-Powered Applications in Java TESDA [AI900] - Microsoft Azure AI Fundamentals",issuer:"TESDA · Microsoft"},{title:"Cybersecurity Fundamentals",issuer:"IBM · TESDA",href:"https://www.credly.com/badges/f29597b6-fcee-443b-b430-97873e9b7a48"},{title:"Cloud Computing Fundamentals",issuer:"IBM · TESDA",href:"https://www.credly.com/badges/1c672da5-8157-4217-b2ce-07914db5cc46"},{title:"Artificial Intelligence Fundamentals",issuer:"IBM · TESDA",href:"https://www.credly.com/badges/ee49cb18-cac3-43c8-9030-b15fea91ad28"},{title:"Information Technology Fundamentals",issuer:"IBM · TESDA",href:"https://www.credly.com/badges/f09efb4c-1ccf-4ef9-b1d8-ca48f0522fc1"},{title:"Web Development Fundamentals",issuer:"IBM · TESDA",href:"https://www.credly.com/badges/4b9c35bd-b1da-44bc-93e4-394170e5c49b"},{title:"Quantum Computing and Blockchain Lecture Series",issuer:"Quantum Computing Society of the Philippines",href:"https://verified.sertifier.com/en/verify/61183648067852/"}],about:{roles:["QA Software Specialist","QA Automation Specialist","AI developer","Power Tools developer","Interactive experiences developer"],intro:"I focus on quality engineering, test automation, and reliable delivery across web and business apps. I work with Microsoft Power Platform and modern JavaScript stacks — from exploratory testing to scripted automation and shipped experiences.",skills:["C","C++","Python","HTML","CSS (Vannila & Libraries)","JavaScript","TypeScript","MySQL","Lua","Network (Troubleshoot, Security, and Config)"],tools:["Git","GitHub","VS Code","PyCharm","Cisco Packet Tracer","Microsoft 365","DaVinci Resolve","Supabase","Vercel","Netlify","Render","Figma","Canva","Pop!_OS & Fedora Linux","Redmine","Google Colab","Kaggle Notebook"],frameworks:["React","React Native","Ionic React","Vite (React, TypeScript)","Flask","Robot Framework","Selenium"],powerPlatform:["Power Apps","Power Automate","Power BI"]},experience:[{company:"Meralco",role:"IT Intern - CRS Dept. Tutuban Branch",dateRange:"Jan 2026 – April 2026",duration:"4 months",image:"/images/meralco.png"},{company:"Sandman Software Systems Inc.",role:"Jr Quality Assurance Specialist Intern",dateRange:"Aug 2025 – Nov 2025",duration:"4 months",image:"/images/sandmanSoftware.png"},{company:"TUP GEAR",role:"Developer Associate Officer",dateRange:"September 2024 – June 2025",duration:"10 months",image:"/images/TUPGear.jpg"}],projects:[{title:"GuestGo",description:"Thesis project: visitor management with a custom-trained face-detection model (YOLOv8) and a full-stack web app.",meta:"Web · 2025-2026",href:"https://guest-go.vercel.app/",secondaryHref:"https://guestgo-ai.onrender.com/",label:"GuestGo web app (opens in new tab)",secondaryLabel:"GuestGo API backend (opens in new tab)",tags:["Vite","Tailwind","Python","YOLOv8","AI","API"],image:"/images/guestgo-logo-no_word.png"},{title:"ScorpBot",description:"Campus assistant chatbot for CEU Manila — conversational UI backed by Gemini.",meta:"Web · 2025",href:"https://scorpbot.onrender.com/",label:"ScorpBot AI (opens in new tab)",tags:["Gemini","AI"],image:"/images/scorpbot.png"},{title:"PH Mango AI",description:"Computer vision demo: Philippine mango varieties, live detection, and fresh vs rotten classification with a running counter.",meta:"App · 2024",href:"#projects",label:"PH Mango AI — details on this page",tags:["Python","OpenCV","AI"],image:"/images/mango.jpg"},{title:"SmaRM",description:"Smart room reservation with role-based access — scheduling and approvals for shared spaces.",meta:"Web · 2024",href:"https://smarm.kesug.com/",label:"SmaRM — details on this page",tags:["Open Source","PHP","MySQL"],image:"/images/Smarm.png"},{title:"ADOMee$",description:"Role-based document management: upload, organize, and control who can view or edit files.",meta:"Web · 2024",href:"https://github.com/Nyakorare/ADOMEES",label:"ADOMee$ — details on this page",tags:["Open Source","PHP","MySQL"],image:"/images/adomees.png"},{title:"Learn Power Automate",description:"Fan-made learning guide for Microsoft Power Automate — structured lessons and quizzes on a static site (Vite, Tailwind, DaisyUI), published via GitHub Pages.",meta:"Web · 2026",href:"https://github.com/Nyakorare/Learn-Simple-Power-Automate",label:"Learn Power Automate repository on GitHub (opens in new tab)",tags:["Open Source","Power Automate","Vite","Tailwind","HTML"],image:"/images/PA.png"},{title:"Roblox Projects",description:"Collection of my Roblox experiences. Open this card to browse each project one by one.",meta:"Roblox · Luau",href:"#projects",label:"Roblox projects — details on this page",tags:["Roblox","Luau","Minigames"],image:"/images/Roblox.png",subProjects:[{title:"Ani Games",description:"Anime-inspired Roblox minigames — small experiences built in Studio with Luau.",meta:"Roblox · Luau",href:"https://www.roblox.com/games/18213261903/Ani-Games",label:"Ani Games on Roblox (opens in new tab)",tags:["Roblox","Luau"],image:"https://tr.rbxcdn.com/180DAY-d9d162ba0cce32e2308d022aa2de077b/512/512/Image/Png/noFilter"},{title:"Radix Sort visualization",description:"Interactive Roblox place that walks through a radix sort — built as a school algorithm project.",meta:"Roblox · Education",href:"https://www.roblox.com/games/17480130158/Radix-Sort-Algorithm-Visualization",label:"Radix Sort visualization on Roblox (opens in new tab)",tags:["Roblox","Algorithms"],image:"https://tr.rbxcdn.com/180DAY-7d1924cf5f61541e4efa073691b20ddb/512/512/Image/Png/noFilter"},{title:"Classic Minigames",description:"Lobby of varied minigames — older project (discontinued) with a large minigame roster and ongoing experiments.",meta:"Roblox · Minigames",href:"https://www.roblox.com/games/3103901140/Classic-Minigames",label:"Classic Minigames on Roblox (opens in new tab)",tags:["Roblox","Luau"],image:"https://tr.rbxcdn.com/180DAY-557f41cbc502caef57cb234096a3635e/512/512/Image/Png/noFilter"}]}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="183",_E=0,V0=1,yE=2,kc=1,SE=2,Ra=3,Jr=0,Yn=1,pr=2,gr=0,bo=1,Oa=2,z0=3,H0=4,ME=5,Cs=100,EE=101,TE=102,wE=103,bE=104,AE=200,CE=201,RE=202,PE=203,oh=204,ah=205,DE=206,LE=207,NE=208,IE=209,UE=210,FE=211,OE=212,kE=213,BE=214,lh=0,ch=1,uh=2,Co=3,fh=4,dh=5,hh=6,ph=7,n_=0,VE=1,zE=2,Xi=0,i_=1,r_=2,s_=3,o_=4,a_=5,l_=6,c_=7,u_=300,Fs=301,Ro=302,ld=303,cd=304,du=306,mh=1e3,mr=1001,gh=1002,xn=1003,HE=1004,lc=1005,An=1006,ud=1007,Ps=1008,mi=1009,f_=1010,d_=1011,ka=1012,wp=1013,Ki=1014,Wi=1015,xr=1016,bp=1017,Ap=1018,Ba=1020,h_=35902,p_=35899,m_=1021,g_=1022,Di=1023,_r=1026,Ds=1027,v_=1028,Cp=1029,Po=1030,Rp=1031,Pp=1033,Bc=33776,Vc=33777,zc=33778,Hc=33779,vh=35840,xh=35841,_h=35842,yh=35843,Sh=36196,Mh=37492,Eh=37496,Th=37488,wh=37489,bh=37490,Ah=37491,Ch=37808,Rh=37809,Ph=37810,Dh=37811,Lh=37812,Nh=37813,Ih=37814,Uh=37815,Fh=37816,Oh=37817,kh=37818,Bh=37819,Vh=37820,zh=37821,Hh=36492,Gh=36494,Wh=36495,jh=36283,Xh=36284,Yh=36285,qh=36286,GE=3200,WE=0,jE=1,Kr="",pi="srgb",Do="srgb-linear",Zc="linear",It="srgb",ao=7680,G0=519,XE=512,YE=513,qE=514,Dp=515,$E=516,KE=517,Lp=518,ZE=519,W0=35044,j0="300 es",ji=2e3,Qc=2001;function QE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JE(){const n=Jc("canvas");return n.style.display="block",n}const X0={};function Y0(...n){const e="THREE."+n.shift();console.log(e,...n)}function x_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ct(...n){n=x_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ct(...n){n=x_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function eu(...n){const e=n.join(" ");e in X0||(X0[e]=!0,ct(...n))}function eT(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const tT={[lh]:ch,[uh]:hh,[fh]:ph,[Co]:dh,[ch]:lh,[hh]:uh,[ph]:fh,[dh]:Co};class Uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,$h=180/Math.PI;function ja(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function nT(n,e){return(n%e+e)%e}function dd(n,e,t){return(1-t)*n+t*e}function Sa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,f){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],p=a[c+0],_=a[c+1],M=a[c+2],b=a[c+3];if(v!==b||d!==p||h!==_||m!==M){let y=d*p+h*_+m*M+v*b;y<0&&(p=-p,_=-_,M=-M,b=-b,y=-y);let S=1-f;if(y<.9995){const T=Math.acos(y),C=Math.sin(T);S=Math.sin(S*T)/C,f=Math.sin(f*T)/C,d=d*S+p*f,h=h*S+_*f,m=m*S+M*f,v=v*S+b*f}else{d=d*S+p*f,h=h*S+_*f,m=m*S+M*f,v=v*S+b*f;const T=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=T,h*=T,m*=T,v*=T}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=a[c],p=a[c+1],_=a[c+2],M=a[c+3];return e[t]=f*M+m*v+d*_-h*p,e[t+1]=d*M+m*p+h*v-f*_,e[t+2]=h*M+m*_+f*p-d*v,e[t+3]=m*M-f*v-d*p-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),v=f(a/2),p=d(r/2),_=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=p*m*v+h*_*M,this._y=h*_*v-p*m*M,this._z=h*m*M+p*_*v,this._w=h*m*v-p*_*M;break;case"YXZ":this._x=p*m*v+h*_*M,this._y=h*_*v-p*m*M,this._z=h*m*M-p*_*v,this._w=h*m*v+p*_*M;break;case"ZXY":this._x=p*m*v-h*_*M,this._y=h*_*v+p*m*M,this._z=h*m*M+p*_*v,this._w=h*m*v-p*_*M;break;case"ZYX":this._x=p*m*v-h*_*M,this._y=h*_*v+p*m*M,this._z=h*m*M-p*_*v,this._w=h*m*v+p*_*M;break;case"YZX":this._x=p*m*v+h*_*M,this._y=h*_*v+p*m*M,this._z=h*m*M-p*_*v,this._w=h*m*v-p*_*M;break;case"XZY":this._x=p*m*v-h*_*M,this._y=h*_*v-p*m*M,this._z=h*m*M+p*_*v,this._w=h*m*v+p*_*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],p=r+f+v;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(m-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>f&&r>v){const _=2*Math.sqrt(1+r-f-v);this._w=(m-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(f>v){const _=2*Math.sqrt(1+f-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+m)/_}else{const _=2*Math.sqrt(1+v-r-f);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*f+o*h-a*d,this._y=o*m+c*d+a*f-r*h,this._z=a*m+c*h+r*d-o*f,this._w=c*m-r*f-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(q0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),m=2*(f*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-f*m,this.y=r+d*m+f*h-a*v,this.z=o+d*v+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-a*f,this.y=a*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new re,q0=new Fo;class ht{constructor(e,t,r,o,a,c,f,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,d,h)}set(e,t,r,o,a,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=a,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],m=r[4],v=r[7],p=r[2],_=r[5],M=r[8],b=o[0],y=o[3],S=o[6],T=o[1],C=o[4],R=o[7],I=o[2],N=o[5],O=o[8];return a[0]=c*b+f*T+d*I,a[3]=c*y+f*C+d*N,a[6]=c*S+f*R+d*O,a[1]=h*b+m*T+v*I,a[4]=h*y+m*C+v*N,a[7]=h*S+m*R+v*O,a[2]=p*b+_*T+M*I,a[5]=p*y+_*C+M*N,a[8]=p*S+_*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-r*a*m+r*f*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*c-f*h,p=f*d-m*a,_=h*a-c*d,M=t*v+r*p+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(o*h-m*r)*b,e[2]=(f*r-o*c)*b,e[3]=p*b,e[4]=(m*t-o*d)*b,e[5]=(o*a-f*t)*b,e[6]=_*b,e[7]=(r*d-h*t)*b,e[8]=(c*t-r*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,f){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(pd.makeScale(e,t)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new ht,$0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iT(){const n={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===It&&(o.r=vr(o.r),o.g=vr(o.g),o.b=vr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(o.r=Ao(o.r),o.g=Ao(o.g),o.b=Ao(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Kr?Zc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Do]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:$0,fromXYZ:K0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:$0,fromXYZ:K0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const bt=iT();function vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let lo;class rT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{lo===void 0&&(lo=Jc("canvas")),lo.width=e.width,lo.height=e.height;const o=lo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=lo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=vr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(vr(t[r]/255)*255):t[r]=vr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sT=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(md(o[c].image)):a.push(md(o[c]))}else a=md(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function md(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let oT=0;const gd=new re;class Un extends Uo{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=mr,o=mr,a=An,c=Ps,f=Di,d=mi,h=Un.DEFAULT_ANISOTROPY,m=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=ja(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=u_;Un.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,r=0,o=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],m=d[4],v=d[8],p=d[1],_=d[5],M=d[9],b=d[2],y=d[6],S=d[10];if(Math.abs(m-p)<.01&&Math.abs(v-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+p)<.1&&Math.abs(v+b)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,R=(_+1)/2,I=(S+1)/2,N=(m+p)/4,O=(v+b)/4,E=(M+y)/4;return C>R&&C>I?C<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(C),o=N/r,a=O/r):R>I?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=N/o,a=E/o):I<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(I),r=O/a,o=E/a),this.set(r,o,a,t),this}let T=Math.sqrt((y-M)*(y-M)+(v-b)*(v-b)+(p-m)*(p-m));return Math.abs(T)<.001&&(T=1),this.x=(y-M)/T,this.y=(v-b)/T,this.z=(p-m)/T,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aT extends Uo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Un(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Np(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends aT{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class __ extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lT extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e,t,r,o,a,c,f,d,h,m,v,p,_,M,b,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,d,h,m,v,p,_,M,b,y)}set(e,t,r,o,a,c,f,d,h,m,v,p,_,M,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=v,S[14]=p,S[3]=_,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/co.setFromMatrixColumn(e,0).length(),a=1/co.setFromMatrixColumn(e,1).length(),c=1/co.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const p=c*m,_=c*v,M=f*m,b=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=p-b*h,t[9]=-f*d,t[2]=b-p*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const p=d*m,_=d*v,M=h*m,b=h*v;t[0]=p+b*f,t[4]=M*f-_,t[8]=c*h,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=_*f-M,t[6]=b+p*f,t[10]=c*d}else if(e.order==="ZXY"){const p=d*m,_=d*v,M=h*m,b=h*v;t[0]=p-b*f,t[4]=-c*v,t[8]=M+_*f,t[1]=_+M*f,t[5]=c*m,t[9]=b-p*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const p=c*m,_=c*v,M=f*m,b=f*v;t[0]=d*m,t[4]=M*h-_,t[8]=p*h+b,t[1]=d*v,t[5]=b*h+p,t[9]=_*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const p=c*d,_=c*h,M=f*d,b=f*h;t[0]=d*m,t[4]=b-p*v,t[8]=M*v+_,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=_*v+M,t[10]=p-b*v}else if(e.order==="XZY"){const p=c*d,_=c*h,M=f*d,b=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=p*v+b,t[5]=c*m,t[9]=_*v-M,t[2]=M*v-_,t[6]=f*m,t[10]=b*v+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,uT)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Hr.crossVectors(r,ti),Hr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Hr.crossVectors(r,ti)),Hr.normalize(),cc.crossVectors(ti,Hr),o[0]=Hr.x,o[4]=cc.x,o[8]=ti.x,o[1]=Hr.y,o[5]=cc.y,o[9]=ti.y,o[2]=Hr.z,o[6]=cc.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],m=r[1],v=r[5],p=r[9],_=r[13],M=r[2],b=r[6],y=r[10],S=r[14],T=r[3],C=r[7],R=r[11],I=r[15],N=o[0],O=o[4],E=o[8],D=o[12],G=o[1],F=o[5],H=o[9],K=o[13],oe=o[2],Q=o[6],J=o[10],Y=o[14],$=o[3],ne=o[7],ue=o[11],B=o[15];return a[0]=c*N+f*G+d*oe+h*$,a[4]=c*O+f*F+d*Q+h*ne,a[8]=c*E+f*H+d*J+h*ue,a[12]=c*D+f*K+d*Y+h*B,a[1]=m*N+v*G+p*oe+_*$,a[5]=m*O+v*F+p*Q+_*ne,a[9]=m*E+v*H+p*J+_*ue,a[13]=m*D+v*K+p*Y+_*B,a[2]=M*N+b*G+y*oe+S*$,a[6]=M*O+b*F+y*Q+S*ne,a[10]=M*E+b*H+y*J+S*ue,a[14]=M*D+b*K+y*Y+S*B,a[3]=T*N+C*G+R*oe+I*$,a[7]=T*O+C*F+R*Q+I*ne,a[11]=T*E+C*H+R*J+I*ue,a[15]=T*D+C*K+R*Y+I*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],p=e[10],_=e[14],M=e[3],b=e[7],y=e[11],S=e[15],T=d*_-h*p,C=f*_-h*v,R=f*p-d*v,I=c*_-h*m,N=c*p-d*m,O=c*v-f*m;return t*(b*T-y*C+S*R)-r*(M*T-y*I+S*N)+o*(M*C-b*I+S*O)-a*(M*R-b*N+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],p=e[10],_=e[11],M=e[12],b=e[13],y=e[14],S=e[15],T=t*f-r*c,C=t*d-o*c,R=t*h-a*c,I=r*d-o*f,N=r*h-a*f,O=o*h-a*d,E=m*b-v*M,D=m*y-p*M,G=m*S-_*M,F=v*y-p*b,H=v*S-_*b,K=p*S-_*y,oe=T*K-C*H+R*F+I*G-N*D+O*E;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/oe;return e[0]=(f*K-d*H+h*F)*Q,e[1]=(o*H-r*K-a*F)*Q,e[2]=(b*O-y*N+S*I)*Q,e[3]=(p*N-v*O-_*I)*Q,e[4]=(d*G-c*K-h*D)*Q,e[5]=(t*K-o*G+a*D)*Q,e[6]=(y*R-M*O-S*C)*Q,e[7]=(m*O-p*R+_*C)*Q,e[8]=(c*H-f*G+h*E)*Q,e[9]=(r*G-t*H-a*E)*Q,e[10]=(M*N-b*R+S*T)*Q,e[11]=(v*R-m*N-_*T)*Q,e[12]=(f*D-c*F-d*E)*Q,e[13]=(t*F-r*D+o*E)*Q,e[14]=(b*C-M*I-y*T)*Q,e[15]=(m*I-v*C+p*T)*Q,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,f=e.y,d=e.z,h=a*c,m=a*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*c,0,h*d-o*f,m*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,f=t._z,d=t._w,h=a+a,m=c+c,v=f+f,p=a*h,_=a*m,M=a*v,b=c*m,y=c*v,S=f*v,T=d*h,C=d*m,R=d*v,I=r.x,N=r.y,O=r.z;return o[0]=(1-(b+S))*I,o[1]=(_+R)*I,o[2]=(M-C)*I,o[3]=0,o[4]=(_-R)*N,o[5]=(1-(p+S))*N,o[6]=(y+T)*N,o[7]=0,o[8]=(M+C)*O,o[9]=(y-T)*O,o[10]=(1-(p+b))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=co.set(o[0],o[1],o[2]).length();const f=co.set(o[4],o[5],o[6]).length(),d=co.set(o[8],o[9],o[10]).length();a<0&&(c=-c),wi.copy(this);const h=1/c,m=1/f,v=1/d;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,t.setFromRotationMatrix(wi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,a,c,f=ji,d=!1){const h=this.elements,m=2*a/(t-e),v=2*a/(r-o),p=(t+e)/(t-e),_=(r+o)/(r-o);let M,b;if(d)M=a/(c-a),b=c*a/(c-a);else if(f===ji)M=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(f===Qc)M=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,f=ji,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),p=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,b;if(d)M=1/(c-a),b=c/(c-a);else if(f===ji)M=-2/(c-a),b=-(c+a)/(c-a);else if(f===Qc)M=-1/(c-a),b=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const co=new re,wi=new en,cT=new re(0,0,0),uT=new re(1,1,1),Hr=new re,cc=new re,ti=new re,Z0=new en,Q0=new Fo;class yr{constructor(e=0,t=0,r=0,o=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],d=o[1],h=o[5],m=o[9],v=o[2],p=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-m,_),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fT=0;const J0=new re,uo=new Fo,cr=new en,uc=new re,Ma=new re,dT=new re,hT=new Fo,ev=new re(1,0,0),tv=new re(0,1,0),nv=new re(0,0,1),iv={type:"added"},pT={type:"removed"},fo={type:"childadded",child:null},vd={type:"childremoved",child:null};class qn extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new re,t=new yr,r=new Fo,o=new re(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(tv,e)}rotateZ(e){return this.rotateOnAxis(nv,e)}translateOnAxis(e,t){return J0.copy(e).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(tv,e)}translateZ(e){return this.translateOnAxis(nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?uc.copy(e):uc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Ma,uc,this.up):cr.lookAt(uc,Ma,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),uo.setFromRotationMatrix(cr),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iv),fo.child=e,this.dispatchEvent(fo),fo.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pT),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iv),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,hT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),v=c(e.shapes),p=c(e.skeletons),_=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),p.length>0&&(r.skeletons=p),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qn.DEFAULT_UP=new re(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pa extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mT={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,r),S=this._getHandJoint(h,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],p=m.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&p>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(mT)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Pa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function _d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=nT(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=_d(c,a,e+1/3),this.g=_d(c,a,e),this.b=_d(c,a,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=pi){function r(a){a!==void 0&&parseFloat(a)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const r=S_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return bt.workingToColorSpace(wn.copy(this),e),Math.round(_t(wn.r*255,0,255))*65536+Math.round(_t(wn.g*255,0,255))*256+Math.round(_t(wn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(wn.copy(this),t);const r=wn.r,o=wn.g,a=wn.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const v=c-f;switch(h=m<=.5?v/(c+f):v/(2-c-f),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=pi){bt.workingToColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,o=wn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(fc);const r=dd(Gr.h,fc.h,t),o=dd(Gr.s,fc.s,t),a=dd(Gr.l,fc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new St;St.NAMES=S_;class Ip extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yr,this.environmentIntensity=1,this.environmentRotation=new yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new re,ur=new re,yd=new re,fr=new re,ho=new re,po=new re,rv=new re,Sd=new re,Md=new re,Ed=new re,Td=new Jt,wd=new Jt,bd=new Jt;class Pi{constructor(e=new re,t=new re,r=new re){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){bi.subVectors(o,t),ur.subVectors(r,t),yd.subVectors(e,t);const c=bi.dot(bi),f=bi.dot(ur),d=bi.dot(yd),h=ur.dot(ur),m=ur.dot(yd),v=c*h-f*f;if(v===0)return a.set(0,0,0),null;const p=1/v,_=(h*d-f*m)*p,M=(c*m-f*d)*p;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,r,o,a,c,f,d){return this.getBarycoord(e,t,r,o,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,fr.x),d.addScaledVector(c,fr.y),d.addScaledVector(f,fr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Td.setScalar(0),wd.setScalar(0),bd.setScalar(0),Td.fromBufferAttribute(e,t),wd.fromBufferAttribute(e,r),bd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Td,a.x),c.addScaledVector(wd,a.y),c.addScaledVector(bd,a.z),c}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),ur.subVectors(e,t),bi.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),bi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Pi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,f;ho.subVectors(o,r),po.subVectors(a,r),Sd.subVectors(e,r);const d=ho.dot(Sd),h=po.dot(Sd);if(d<=0&&h<=0)return t.copy(r);Md.subVectors(e,o);const m=ho.dot(Md),v=po.dot(Md);if(m>=0&&v<=m)return t.copy(o);const p=d*v-m*h;if(p<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(ho,c);Ed.subVectors(e,a);const _=ho.dot(Ed),M=po.dot(Ed);if(M>=0&&_<=M)return t.copy(a);const b=_*h-d*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(po,f);const y=m*M-_*v;if(y<=0&&v-m>=0&&_-M>=0)return rv.subVectors(a,o),f=(v-m)/(v-m+(_-M)),t.copy(o).addScaledVector(rv,f);const S=1/(y+b+p);return c=b*S,f=p*S,t.copy(r).addScaledVector(ho,c).addScaledVector(po,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xa{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ai):Ai.fromBufferAttribute(a,c),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dc.copy(r.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),hc.subVectors(this.max,Ea),mo.subVectors(e.a,Ea),go.subVectors(e.b,Ea),vo.subVectors(e.c,Ea),Wr.subVectors(go,mo),jr.subVectors(vo,go),xs.subVectors(mo,vo);let t=[0,-Wr.z,Wr.y,0,-jr.z,jr.y,0,-xs.z,xs.y,Wr.z,0,-Wr.x,jr.z,0,-jr.x,xs.z,0,-xs.x,-Wr.y,Wr.x,0,-jr.y,jr.x,0,-xs.y,xs.x,0];return!Ad(t,mo,go,vo,hc)||(t=[1,0,0,0,1,0,0,0,1],!Ad(t,mo,go,vo,hc))?!1:(pc.crossVectors(Wr,jr),t=[pc.x,pc.y,pc.z],Ad(t,mo,go,vo,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new re,new re,new re,new re,new re,new re,new re,new re],Ai=new re,dc=new Xa,mo=new re,go=new re,vo=new re,Wr=new re,jr=new re,xs=new re,Ea=new re,hc=new re,pc=new re,_s=new re;function Ad(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){_s.fromArray(n,a);const f=o.x*Math.abs(_s.x)+o.y*Math.abs(_s.y)+o.z*Math.abs(_s.z),d=e.dot(_s),h=t.dot(_s),m=r.dot(_s);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const nn=new re,mc=new Pt;let gT=0;class qi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=W0,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Sa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array),a=jn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W0&&(e.usage=this.usage),e}}class M_ extends qi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class E_ extends qi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fn extends qi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const vT=new Xa,Ta=new re,Cd=new re;class hu{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):vT.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ta,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Cd)),this.expandByPoint(Ta.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xT=0;const hi=new en,Rd=new qn,xo=new re,ni=new Xa,wa=new Xa,hn=new re;class $n extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QE(e)?E_:M_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ht().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,r){return hi.makeTranslation(e,t,r),this.applyMatrix4(hi),this}scale(e,t,r){return hi.makeScale(e,t,r),this.applyMatrix4(hi),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ni.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];wa.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(ni.min,wa.min),ni.expandByPoint(hn),hn.addVectors(ni.max,wa.max),ni.expandByPoint(hn)):(ni.expandByPoint(wa.min),ni.expandByPoint(wa.max))}ni.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)hn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(hn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)hn.fromBufferAttribute(f,h),d&&(xo.fromBufferAttribute(e,h),hn.add(xo)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new re,d[E]=new re;const h=new re,m=new re,v=new re,p=new Pt,_=new Pt,M=new Pt,b=new re,y=new re;function S(E,D,G){h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,D),v.fromBufferAttribute(r,G),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,D),M.fromBufferAttribute(a,G),m.sub(h),v.sub(h),_.sub(p),M.sub(p);const F=1/(_.x*M.y-M.x*_.y);isFinite(F)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(F),y.copy(v).multiplyScalar(_.x).addScaledVector(m,-M.x).multiplyScalar(F),f[E].add(b),f[D].add(b),f[G].add(b),d[E].add(y),d[D].add(y),d[G].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let E=0,D=T.length;E<D;++E){const G=T[E],F=G.start,H=G.count;for(let K=F,oe=F+H;K<oe;K+=3)S(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const C=new re,R=new re,I=new re,N=new re;function O(E){I.fromBufferAttribute(o,E),N.copy(I);const D=f[E];C.copy(D),C.sub(I.multiplyScalar(I.dot(D))).normalize(),R.crossVectors(N,D);const F=R.dot(d[E])<0?-1:1;c.setXYZW(E,C.x,C.y,C.z,F)}for(let E=0,D=T.length;E<D;++E){const G=T[E],F=G.start,H=G.count;for(let K=F,oe=F+H;K<oe;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,_=r.count;p<_;p++)r.setXYZ(p,0,0,0);const o=new re,a=new re,c=new re,f=new re,d=new re,h=new re,m=new re,v=new re;if(e)for(let p=0,_=e.count;p<_;p+=3){const M=e.getX(p+0),b=e.getX(p+1),y=e.getX(p+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,b),h.fromBufferAttribute(r,y),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let p=0,_=t.count;p<_;p+=3)o.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),r.setXYZ(p+0,m.x,m.y,m.z),r.setXYZ(p+1,m.x,m.y,m.z),r.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,p=new h.constructor(d.length*m);let _=0,M=0;for(let b=0,y=d.length;b<y;b++){f.isInterleavedBufferAttribute?_=d[b]*f.data.stride+f.offset:_=d[b]*m;for(let S=0;S<m;S++)p[M++]=h[_++]}return new qi(p,m,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let m=0,v=h.length;m<v;m++){const p=h[m],_=e(p,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,p=h.length;v<p;v++){const _=h[v];m.push(_.toJSON(e.data))}m.length>0&&(o[d]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],v=a[h];for(let p=0,_=v.length;p<_;p++)m.push(v[p].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _T=0;class Ya extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=bo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==Jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==oh&&(r.blendSrc=this.blendSrc),this.blendDst!==ah&&(r.blendDst=this.blendDst),this.blendEquation!==Cs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hr=new re,Pd=new re,gc=new re,Xr=new re,Dd=new re,vc=new re,Ld=new re;class T_{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Pd.copy(e).add(t).multiplyScalar(.5),gc.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Pd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(gc),f=Xr.dot(this.direction),d=-Xr.dot(gc),h=Xr.lengthSq(),m=Math.abs(1-c*c);let v,p,_,M;if(m>0)if(v=c*d-f,p=c*f-d,M=a*m,v>=0)if(p>=-M)if(p<=M){const b=1/m;v*=b,p*=b,_=v*(v+c*p+2*f)+p*(c*v+p+2*d)+h}else p=a,v=Math.max(0,-(c*p+f)),_=-v*v+p*(p+2*d)+h;else p=-a,v=Math.max(0,-(c*p+f)),_=-v*v+p*(p+2*d)+h;else p<=-M?(v=Math.max(0,-(-c*a+f)),p=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+p*(p+2*d)+h):p<=M?(v=0,p=Math.min(Math.max(-a,-d),a),_=p*(p+2*d)+h):(v=Math.max(0,-(c*a+f)),p=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+p*(p+2*d)+h);else p=c>0?-a:a,v=Math.max(0,-(c*p+f)),_=-v*v+p*(p+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Pd).addScaledVector(gc,p),_}intersectSphere(e,t){hr.subVectors(e.center,this.origin);const r=hr.dot(this.direction),o=hr.dot(hr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,p=this.origin;return h>=0?(r=(e.min.x-p.x)*h,o=(e.max.x-p.x)*h):(r=(e.max.x-p.x)*h,o=(e.min.x-p.x)*h),m>=0?(a=(e.min.y-p.y)*m,c=(e.max.y-p.y)*m):(a=(e.max.y-p.y)*m,c=(e.min.y-p.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-p.z)*v,d=(e.max.z-p.z)*v):(f=(e.max.z-p.z)*v,d=(e.min.z-p.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,r,o,a){Dd.subVectors(t,e),vc.subVectors(r,e),Ld.crossVectors(Dd,vc);let c=this.direction.dot(Ld),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Xr.subVectors(this.origin,e);const d=f*this.direction.dot(vc.crossVectors(Xr,vc));if(d<0)return null;const h=f*this.direction.dot(Dd.cross(Xr));if(h<0||d+h>c)return null;const m=-f*Xr.dot(Ld);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pu extends Ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=n_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sv=new en,ys=new T_,xc=new hu,ov=new re,_c=new re,yc=new re,Sc=new re,Nd=new re,Mc=new re,av=new re,Ec=new re;class Ni extends qn{constructor(e=new $n,t=new pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Mc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=f[d],v=a[d];m!==0&&(Nd.fromBufferAttribute(v,e),c?Mc.addScaledVector(Nd,m):Mc.addScaledVector(Nd.sub(t),m))}t.add(Mc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(a),ys.copy(e.ray).recast(e.near),!(xc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(xc,ov)===null||ys.origin.distanceToSquared(ov)>(e.far-e.near)**2))&&(sv.copy(a).invert(),ys.copy(e.ray).applyMatrix4(sv),!(r.boundingBox!==null&&ys.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,v=a.attributes.normal,p=a.groups,_=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,b=p.length;M<b;M++){const y=p[M],S=c[y.materialIndex],T=Math.max(y.start,_.start),C=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let R=T,I=C;R<I;R+=3){const N=f.getX(R),O=f.getX(R+1),E=f.getX(R+2);o=Tc(this,S,e,r,h,m,v,N,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),b=Math.min(f.count,_.start+_.count);for(let y=M,S=b;y<S;y+=3){const T=f.getX(y),C=f.getX(y+1),R=f.getX(y+2);o=Tc(this,c,e,r,h,m,v,T,C,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,b=p.length;M<b;M++){const y=p[M],S=c[y.materialIndex],T=Math.max(y.start,_.start),C=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=T,I=C;R<I;R+=3){const N=R,O=R+1,E=R+2;o=Tc(this,S,e,r,h,m,v,N,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),b=Math.min(d.count,_.start+_.count);for(let y=M,S=b;y<S;y+=3){const T=y,C=y+1,R=y+2;o=Tc(this,c,e,r,h,m,v,T,C,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function yT(n,e,t,r,o,a,c,f){let d;if(e.side===Yn?d=r.intersectTriangle(c,a,o,!0,f):d=r.intersectTriangle(o,a,c,e.side===Jr,f),d===null)return null;Ec.copy(f),Ec.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Ec);return h<t.near||h>t.far?null:{distance:h,point:Ec.clone(),object:n}}function Tc(n,e,t,r,o,a,c,f,d,h){n.getVertexPosition(f,_c),n.getVertexPosition(d,yc),n.getVertexPosition(h,Sc);const m=yT(n,e,t,r,_c,yc,Sc,av);if(m){const v=new re;Pi.getBarycoord(av,_c,yc,Sc,v),o&&(m.uv=Pi.getInterpolatedAttribute(o,f,d,h,v,new Pt)),a&&(m.uv1=Pi.getInterpolatedAttribute(a,f,d,h,v,new Pt)),c&&(m.normal=Pi.getInterpolatedAttribute(c,f,d,h,v,new re),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const p={a:f,b:d,c:h,normal:new re,materialIndex:0};Pi.getNormal(_c,yc,Sc,p.normal),m.face=p,m.barycoord=v}return m}class ST extends Un{constructor(e=null,t=1,r=1,o,a,c,f,d,h=xn,m=xn,v,p){super(null,c,f,d,h,m,o,a,v,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new re,MT=new re,ET=new ht;class bs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Id.subVectors(r,t).cross(MT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Id),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ET.getNormalMatrix(e),o=this.coplanarPoint(Id).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new hu,TT=new Pt(.5,.5),wc=new re;class w_{constructor(e=new bs,t=new bs,r=new bs,o=new bs,a=new bs,c=new bs){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji,r=!1){const o=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],m=a[4],v=a[5],p=a[6],_=a[7],M=a[8],b=a[9],y=a[10],S=a[11],T=a[12],C=a[13],R=a[14],I=a[15];if(o[0].setComponents(h-c,_-m,S-M,I-T).normalize(),o[1].setComponents(h+c,_+m,S+M,I+T).normalize(),o[2].setComponents(h+f,_+v,S+b,I+C).normalize(),o[3].setComponents(h-f,_-v,S-b,I-C).normalize(),r)o[4].setComponents(d,p,y,R).normalize(),o[5].setComponents(h-d,_-p,S-y,I-R).normalize();else if(o[4].setComponents(h-d,_-p,S-y,I-R).normalize(),t===ji)o[5].setComponents(h+d,_+p,S+y,I+R).normalize();else if(t===Qc)o[5].setComponents(d,p,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=TT.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(wc.x=o.normal.x>0?e.max.x:e.min.x,wc.y=o.normal.y>0?e.max.y:e.min.y,wc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mu extends Ya{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lv=new en,Kh=new T_,bc=new hu,Ac=new re;class Up extends qn{constructor(e=new $n,t=new mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(o),bc.radius+=a,e.ray.intersectsSphere(bc)===!1)return;lv.copy(o).invert(),Kh.copy(e.ray).applyMatrix4(lv);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,v=r.attributes.position;if(h!==null){const p=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let M=p,b=_;M<b;M++){const y=h.getX(M);Ac.fromBufferAttribute(v,y),cv(Ac,y,d,o,e,t,this)}}else{const p=Math.max(0,c.start),_=Math.min(v.count,c.start+c.count);for(let M=p,b=_;M<b;M++)Ac.fromBufferAttribute(v,M),cv(Ac,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function cv(n,e,t,r,o,a,c){const f=Kh.distanceSqToPoint(n);if(f<t){const d=new re;Kh.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class b_ extends Un{constructor(e=[],t=Fs,r,o,a,c,f,d,h,m){super(e,t,r,o,a,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Va extends Un{constructor(e,t,r=Ki,o,a,c,f=xn,d=xn,h,m=_r,v=1){if(m!==_r&&m!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:v};super(p,o,a,c,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wT extends Va{constructor(e,t=Ki,r=Fs,o,a,c=xn,f=xn,d,h=_r){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,a,c,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class A_ extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qa extends $n{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],m=[],v=[];let p=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(v,2));function M(b,y,S,T,C,R,I,N,O,E,D){const G=R/O,F=I/E,H=R/2,K=I/2,oe=N/2,Q=O+1,J=E+1;let Y=0,$=0;const ne=new re;for(let ue=0;ue<J;ue++){const B=ue*F-K;for(let Z=0;Z<Q;Z++){const Ce=Z*G-H;ne[b]=Ce*T,ne[y]=B*C,ne[S]=oe,h.push(ne.x,ne.y,ne.z),ne[b]=0,ne[y]=0,ne[S]=N>0?1:-1,m.push(ne.x,ne.y,ne.z),v.push(Z/O),v.push(1-ue/E),Y+=1}}for(let ue=0;ue<E;ue++)for(let B=0;B<O;B++){const Z=p+B+Q*ue,Ce=p+B+Q*(ue+1),Ye=p+(B+1)+Q*(ue+1),Je=p+(B+1)+Q*ue;d.push(Z,Ce,Je),d.push(Ce,Ye,Je),$+=6}f.addGroup(_,$,D),_+=$,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fp extends $n{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],c=[];f(o),h(r),m(),this.setAttribute("position",new Fn(a,3)),this.setAttribute("normal",new Fn(a.slice(),3)),this.setAttribute("uv",new Fn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const C=new re,R=new re,I=new re;for(let N=0;N<t.length;N+=3)_(t[N+0],C),_(t[N+1],R),_(t[N+2],I),d(C,R,I,T)}function d(T,C,R,I){const N=I+1,O=[];for(let E=0;E<=N;E++){O[E]=[];const D=T.clone().lerp(R,E/N),G=C.clone().lerp(R,E/N),F=N-E;for(let H=0;H<=F;H++)H===0&&E===N?O[E][H]=D:O[E][H]=D.clone().lerp(G,H/F)}for(let E=0;E<N;E++)for(let D=0;D<2*(N-E)-1;D++){const G=Math.floor(D/2);D%2===0?(p(O[E][G+1]),p(O[E+1][G]),p(O[E][G])):(p(O[E][G+1]),p(O[E+1][G+1]),p(O[E+1][G]))}}function h(T){const C=new re;for(let R=0;R<a.length;R+=3)C.x=a[R+0],C.y=a[R+1],C.z=a[R+2],C.normalize().multiplyScalar(T),a[R+0]=C.x,a[R+1]=C.y,a[R+2]=C.z}function m(){const T=new re;for(let C=0;C<a.length;C+=3){T.x=a[C+0],T.y=a[C+1],T.z=a[C+2];const R=y(T)/2/Math.PI+.5,I=S(T)/Math.PI+.5;c.push(R,1-I)}M(),v()}function v(){for(let T=0;T<c.length;T+=6){const C=c[T+0],R=c[T+2],I=c[T+4],N=Math.max(C,R,I),O=Math.min(C,R,I);N>.9&&O<.1&&(C<.2&&(c[T+0]+=1),R<.2&&(c[T+2]+=1),I<.2&&(c[T+4]+=1))}}function p(T){a.push(T.x,T.y,T.z)}function _(T,C){const R=T*3;C.x=e[R+0],C.y=e[R+1],C.z=e[R+2]}function M(){const T=new re,C=new re,R=new re,I=new re,N=new Pt,O=new Pt,E=new Pt;for(let D=0,G=0;D<a.length;D+=9,G+=6){T.set(a[D+0],a[D+1],a[D+2]),C.set(a[D+3],a[D+4],a[D+5]),R.set(a[D+6],a[D+7],a[D+8]),N.set(c[G+0],c[G+1]),O.set(c[G+2],c[G+3]),E.set(c[G+4],c[G+5]),I.copy(T).add(C).add(R).divideScalar(3);const F=y(I);b(N,G+0,T,F),b(O,G+2,C,F),b(E,G+4,R,F)}}function b(T,C,R,I){I<0&&T.x===1&&(c[C]=T.x-1),R.x===0&&R.z===0&&(c[C]=I/2/Math.PI+.5)}function y(T){return Math.atan2(T.z,-T.x)}function S(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.vertices,e.indices,e.radius,e.detail)}}class gu extends Fp{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gu(e.radius,e.detail)}}class vu extends $n{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,v=e/f,p=t/d,_=[],M=[],b=[],y=[];for(let S=0;S<m;S++){const T=S*p-c;for(let C=0;C<h;C++){const R=C*v-a;M.push(R,-T,0),b.push(0,0,1),y.push(C/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let T=0;T<f;T++){const C=T+h*S,R=T+h*(S+1),I=T+1+h*(S+1),N=T+1+h*S;_.push(C,R,N),_.push(R,I,N)}this.setIndex(_),this.setAttribute("position",new Fn(M,3)),this.setAttribute("normal",new Fn(b,3)),this.setAttribute("uv",new Fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Lo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Ln(n){const e={};for(let t=0;t<n.length;t++){const r=Lo(n[t]);for(const o in r)e[o]=r[o]}return e}function bT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function C_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const AT={clone:Lo,merge:Ln};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=bT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class PT extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DT extends Ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LT extends Ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cc=new re,Rc=new Fo,Bi=new re;class R_ extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,Rc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Cc,Rc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new re,uv=new Pt,fv=new Pt;class Xn extends R_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,uv,fv),t.subVectors(fv,uv)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class P_ extends R_{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=-90,yo=1;class NT extends qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn(_o,yo,e,t);o.layers=this.layers,this.add(o);const a=new Xn(_o,yo,e,t);a.layers=this.layers,this.add(a);const c=new Xn(_o,yo,e,t);c.layers=this.layers,this.add(c);const f=new Xn(_o,yo,e,t);f.layers=this.layers,this.add(f);const d=new Xn(_o,yo,e,t);d.layers=this.layers,this.add(d);const h=new Xn(_o,yo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,f,d]=t;for(const h of t)this.remove(h);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,h,m]=this.children,v=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,p,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class IT extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function dv(n,e,t,r){const o=UT(r);switch(t){case m_:return n*e;case v_:return n*e/o.components*o.byteLength;case Cp:return n*e/o.components*o.byteLength;case Po:return n*e*2/o.components*o.byteLength;case Rp:return n*e*2/o.components*o.byteLength;case g_:return n*e*3/o.components*o.byteLength;case Di:return n*e*4/o.components*o.byteLength;case Pp:return n*e*4/o.components*o.byteLength;case Bc:case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:case yh:return Math.max(n,16)*Math.max(e,8)/4;case vh:case _h:return Math.max(n,8)*Math.max(e,8)/2;case Sh:case Mh:case Th:case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eh:case bh:case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hh:case Gh:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jh:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function UT(n){switch(n){case mi:case f_:return{byteLength:1,components:1};case ka:case d_:case xr:return{byteLength:2,components:1};case bp:case Ap:return{byteLength:2,components:4};case Ki:case wp:case Wi:return{byteLength:4,components:1};case h_:case p_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D_(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function FT(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,p=n.createBuffer();n.bindBuffer(d,p),n.bufferData(d,h,m),f.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,m);else{v.sort((_,M)=>_.start-M.start);let p=0;for(let _=1;_<v.length;_++){const M=v[p],b=v[_];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++p,v[p]=b)}v.length=p+1;for(let _=0,M=v.length;_<M;_++){const b=v[_];n.bufferSubData(h,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:a,update:c}}var OT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$T=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ib=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ab=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:OT,alphahash_pars_fragment:kT,alphamap_fragment:BT,alphamap_pars_fragment:VT,alphatest_fragment:zT,alphatest_pars_fragment:HT,aomap_fragment:GT,aomap_pars_fragment:WT,batching_pars_vertex:jT,batching_vertex:XT,begin_vertex:YT,beginnormal_vertex:qT,bsdfs:$T,iridescence_fragment:KT,bumpmap_pars_fragment:ZT,clipping_planes_fragment:QT,clipping_planes_pars_fragment:JT,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:o1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,colorspace_fragment:h1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:v1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:R1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:T1,lightmap_pars_fragment:w1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:A1,lights_pars_begin:C1,lights_toon_fragment:P1,lights_toon_pars_fragment:D1,lights_phong_fragment:L1,lights_phong_pars_fragment:N1,lights_physical_fragment:I1,lights_physical_pars_fragment:U1,lights_fragment_begin:F1,lights_fragment_maps:O1,lights_fragment_end:k1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:W1,map_particle_fragment:j1,map_particle_pars_fragment:X1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:q1,morphinstance_vertex:$1,morphcolor_vertex:K1,morphnormal_vertex:Z1,morphtarget_pars_vertex:Q1,morphtarget_vertex:J1,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:lw,iridescence_pars_fragment:cw,opaque_fragment:uw,packing:fw,premultiplied_alpha_fragment:dw,project_vertex:hw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:_w,shadowmap_vertex:yw,shadowmask_pars_fragment:Sw,skinbase_vertex:Mw,skinning_pars_vertex:Ew,skinning_vertex:Tw,skinnormal_vertex:ww,specularmap_fragment:bw,specularmap_pars_fragment:Aw,tonemapping_fragment:Cw,tonemapping_pars_fragment:Rw,transmission_fragment:Pw,transmission_pars_fragment:Dw,uv_pars_fragment:Lw,uv_pars_vertex:Nw,uv_vertex:Iw,worldpos_vertex:Uw,background_vert:Fw,background_frag:Ow,backgroundCube_vert:kw,backgroundCube_frag:Bw,cube_vert:Vw,cube_frag:zw,depth_vert:Hw,depth_frag:Gw,distance_vert:Ww,distance_frag:jw,equirect_vert:Xw,equirect_frag:Yw,linedashed_vert:qw,linedashed_frag:$w,meshbasic_vert:Kw,meshbasic_frag:Zw,meshlambert_vert:Qw,meshlambert_frag:Jw,meshmatcap_vert:eb,meshmatcap_frag:tb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:rb,meshphong_frag:sb,meshphysical_vert:ob,meshphysical_frag:ab,meshtoon_vert:lb,meshtoon_frag:cb,points_vert:ub,points_frag:fb,shadow_vert:db,shadow_frag:hb,sprite_vert:pb,sprite_frag:mb},De={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ln([De.common,De.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ln([De.lights,De.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Pc={r:0,b:0,g:0},Ms=new yr,gb=new en;function vb(n,e,t,r,o,a){const c=new St(0);let f=o===!0?0:1,d,h,m=null,v=0,p=null;function _(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const R=T.backgroundBlurriness>0;C=e.get(C,R)}return C}function M(T){let C=!1;const R=_(T);R===null?y(c,f):R&&R.isColor&&(y(R,1),C=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(T,C){const R=_(C);R&&(R.isCubeTexture||R.mapping===du)?(h===void 0&&(h=new Ni(new qa(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Lo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ms.copy(C.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(Ms)),h.material.toneMapped=bt.getTransfer(R.colorSpace)!==It,(m!==R||v!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,m=R,v=R.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Ni(new vu(2,2),new Zi({name:"BackgroundMaterial",uniforms:Lo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=bt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||v!==R.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,m=R,v=R.version,p=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function y(T,C){T.getRGB(Pc,C_(n)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,C,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,C=1){c.set(T),f=C,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,y(c,f)},render:M,addToRenderList:b,dispose:S}}function xb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=p(null);let a=o,c=!1;function f(F,H,K,oe,Q){let J=!1;const Y=v(F,oe,K,H);a!==Y&&(a=Y,h(a.object)),J=_(F,oe,K,Q),J&&M(F,oe,K,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,R(F,H,K,oe),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return n.createVertexArray()}function h(F){return n.bindVertexArray(F)}function m(F){return n.deleteVertexArray(F)}function v(F,H,K,oe){const Q=oe.wireframe===!0;let J=r[H.id];J===void 0&&(J={},r[H.id]=J);const Y=F.isInstancedMesh===!0?F.id:0;let $=J[Y];$===void 0&&($={},J[Y]=$);let ne=$[K.id];ne===void 0&&(ne={},$[K.id]=ne);let ue=ne[Q];return ue===void 0&&(ue=p(d()),ne[Q]=ue),ue}function p(F){const H=[],K=[],oe=[];for(let Q=0;Q<t;Q++)H[Q]=0,K[Q]=0,oe[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:oe,object:F,attributes:{},index:null}}function _(F,H,K,oe){const Q=a.attributes,J=H.attributes;let Y=0;const $=K.getAttributes();for(const ne in $)if($[ne].location>=0){const B=Q[ne];let Z=J[ne];if(Z===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),B===void 0||B.attribute!==Z||Z&&B.data!==Z.data)return!0;Y++}return a.attributesNum!==Y||a.index!==oe}function M(F,H,K,oe){const Q={},J=H.attributes;let Y=0;const $=K.getAttributes();for(const ne in $)if($[ne].location>=0){let B=J[ne];B===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(B=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(B=F.instanceColor));const Z={};Z.attribute=B,B&&B.data&&(Z.data=B.data),Q[ne]=Z,Y++}a.attributes=Q,a.attributesNum=Y,a.index=oe}function b(){const F=a.newAttributes;for(let H=0,K=F.length;H<K;H++)F[H]=0}function y(F){S(F,0)}function S(F,H){const K=a.newAttributes,oe=a.enabledAttributes,Q=a.attributeDivisors;K[F]=1,oe[F]===0&&(n.enableVertexAttribArray(F),oe[F]=1),Q[F]!==H&&(n.vertexAttribDivisor(F,H),Q[F]=H)}function T(){const F=a.newAttributes,H=a.enabledAttributes;for(let K=0,oe=H.length;K<oe;K++)H[K]!==F[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function C(F,H,K,oe,Q,J,Y){Y===!0?n.vertexAttribIPointer(F,H,K,Q,J):n.vertexAttribPointer(F,H,K,oe,Q,J)}function R(F,H,K,oe){b();const Q=oe.attributes,J=K.getAttributes(),Y=H.defaultAttributeValues;for(const $ in J){const ne=J[$];if(ne.location>=0){let ue=Q[$];if(ue===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const B=ue.normalized,Z=ue.itemSize,Ce=e.get(ue);if(Ce===void 0)continue;const Ye=Ce.buffer,Je=Ce.type,ae=Ce.bytesPerElement,me=Je===n.INT||Je===n.UNSIGNED_INT||ue.gpuType===wp;if(ue.isInterleavedBufferAttribute){const pe=ue.data,Oe=pe.stride,We=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let rt=0;rt<ne.locationSize;rt++)S(ne.location+rt,pe.meshPerAttribute);F.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let rt=0;rt<ne.locationSize;rt++)y(ne.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let rt=0;rt<ne.locationSize;rt++)C(ne.location+rt,Z/ne.locationSize,Je,B,Oe*ae,(We+Z/ne.locationSize*rt)*ae,me)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<ne.locationSize;pe++)S(ne.location+pe,ue.meshPerAttribute);F.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<ne.locationSize;pe++)y(ne.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let pe=0;pe<ne.locationSize;pe++)C(ne.location+pe,Z/ne.locationSize,Je,B,Z*ae,Z/ne.locationSize*pe*ae,me)}}else if(Y!==void 0){const B=Y[$];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(ne.location,B);break;case 3:n.vertexAttrib3fv(ne.location,B);break;case 4:n.vertexAttrib4fv(ne.location,B);break;default:n.vertexAttrib1fv(ne.location,B)}}}}T()}function I(){D();for(const F in r){const H=r[F];for(const K in H){const oe=H[K];for(const Q in oe){const J=oe[Q];for(const Y in J)m(J[Y].object),delete J[Y];delete oe[Q]}}delete r[F]}}function N(F){if(r[F.id]===void 0)return;const H=r[F.id];for(const K in H){const oe=H[K];for(const Q in oe){const J=oe[Q];for(const Y in J)m(J[Y].object),delete J[Y];delete oe[Q]}}delete r[F.id]}function O(F){for(const H in r){const K=r[H];for(const oe in K){const Q=K[oe];if(Q[F.id]===void 0)continue;const J=Q[F.id];for(const Y in J)m(J[Y].object),delete J[Y];delete Q[F.id]}}}function E(F){for(const H in r){const K=r[H],oe=F.isInstancedMesh===!0?F.id:0,Q=K[oe];if(Q!==void 0){for(const J in Q){const Y=Q[J];for(const $ in Y)m(Y[$].object),delete Y[$];delete Q[J]}delete K[oe],Object.keys(K).length===0&&delete r[H]}}}function D(){G(),c=!0,a!==o&&(a=o,h(a.object))}function G(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:G,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:y,disableUnusedAttributes:T}}function _b(n,e,t){let r;function o(h){r=h}function a(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function c(h,m,v){v!==0&&(n.drawArraysInstanced(r,h,m,v),t.update(m,r,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,v);let _=0;for(let M=0;M<v;M++)_+=m[M];t.update(_,r,1)}function d(h,m,v,p){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)c(h[M],m[M],p[M]);else{_.multiDrawArraysInstancedWEBGL(r,h,0,m,0,p,0,v);let M=0;for(let b=0;b<v;b++)M+=m[b]*p[b];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function yb(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Di&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==mi&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wi&&!E)}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(ct("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:R,maxSamples:I,samples:N}}function Sb(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new bs,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const _=v.length!==0||p||r!==0||o;return o=p,r=v.length,_},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,p){t=m(v,p,0)},this.setState=function(v,p,_){const M=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||M===null||M.length===0||a&&!y)a?m(null):h();else{const T=a?0:r,C=T*4;let R=S.clippingState||null;d.value=R,R=m(M,p,C,_);for(let I=0;I!==C;++I)R[I]=t[I];S.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,p,_,M){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=d.value,M!==!0||y===null){const S=_+b*4,T=p.matrixWorldInverse;f.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,R=_;C!==b;++C,R+=4)c.copy(v[C]).applyMatrix4(T,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Zr=4,hv=[.125,.215,.35,.446,.526,.582],Rs=20,Mb=256,ba=new P_,pv=new St;let Ud=null,Fd=0,Od=0,kd=!1;const Eb=new re;class mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:f=Eb}=a;Ud=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ud,Fd,Od),this._renderer.xr.enabled=kd,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ud=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:xr,format:Di,colorSpace:Do,depthBuffer:!1},o=gv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tb(a)),this._blurMaterial=bb(a,e,t),this._ggxMaterial=wb(a,e,t)}return o}_compileMaterial(e){const t=new Ni(new $n,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,r,o,a){const d=new Xn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,_=v.toneMapping;v.getClearColor(pv),v.toneMapping=Xi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new qa,new pu({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,S=!0):(y.color.copy(pv),S=!0);for(let C=0;C<6;C++){const R=C%3;R===0?(d.up.set(0,h[C],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[C],a.y,a.z)):R===1?(d.up.set(0,0,h[C]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[C],a.z)):(d.up.set(0,h[C],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[C]));const I=this._cubeSize;So(o,R*I,C>2?I:0,I,I),v.setRenderTarget(o),S&&v.render(b,d),v.render(e,d)}v.toneMapping=_,v.autoClear=p,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Fs||e.mapping===Ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;So(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,ba)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),p=0+h*1.25,_=v*p,{_lodMax:M}=this,b=this._sizeLods[r],y=3*b*(r>M-Zr?r-M+Zr:0),S=4*(this._cubeSize-b);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,So(a,y,S,3*b,2*b),o.setRenderTarget(a),o.render(f,ba),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,So(e,y,S,3*b,2*b),o.setRenderTarget(e),o.render(f,ba)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[o];v.material=h;const p=h.uniforms,_=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Rs-1),b=a/M,y=isFinite(a)?1+Math.floor(m*b):Rs;y>Rs&&ct(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const S=[];let T=0;for(let O=0;O<Rs;++O){const E=O/b,D=Math.exp(-E*E/2);S.push(D),O===0?T+=D:O<y&&(T+=2*D)}for(let O=0;O<S.length;O++)S[O]=S[O]/T;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=S,p.latitudinal.value=c==="latitudinal",f&&(p.poleAxis.value=f);const{_lodMax:C}=this;p.dTheta.value=M,p.mipInt.value=C-r;const R=this._sizeLods[o],I=3*R*(o>C-Zr?o-C+Zr:0),N=4*(this._cubeSize-R);So(t,I,N,3*R,2*R),d.setRenderTarget(t),d.render(v,ba)}}function Tb(n){const e=[],t=[],r=[];let o=n;const a=n-Zr+1+hv.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>n-Zr?d=hv[c-n+Zr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,v=1+h,p=[m,m,v,m,v,v,m,m,v,v,m,v],_=6,M=6,b=3,y=2,S=1,T=new Float32Array(b*M*_),C=new Float32Array(y*M*_),R=new Float32Array(S*M*_);for(let N=0;N<_;N++){const O=N%3*2/3-1,E=N>2?0:-1,D=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];T.set(D,b*M*N),C.set(p,y*M*N);const G=[N,N,N,N,N,N];R.set(G,S*M*N)}const I=new $n;I.setAttribute("position",new qi(T,b)),I.setAttribute("uv",new qi(C,y)),I.setAttribute("faceIndex",new qi(R,S)),r.push(new Ni(I,null)),o>Zr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function gv(n,e,t){const r=new Yi(n,e,t);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function So(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function wb(n,e,t){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function bb(n,e,t){const r=new Float32Array(Rs),o=new re(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function vv(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function xv(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class L_ extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new b_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new qa(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:Lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:gr});a.uniforms.tEquirect.value=t;const c=new Ni(o,a),f=t.minFilter;return t.minFilter===Ps&&(t.minFilter=An),new NT(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function Ab(n){let e=new WeakMap,t=new WeakMap,r=null;function o(p,_=!1){return p==null?null:_?c(p):a(p)}function a(p){if(p&&p.isTexture){const _=p.mapping;if(_===ld||_===cd)if(e.has(p)){const M=e.get(p).texture;return f(M,p.mapping)}else{const M=p.image;if(M&&M.height>0){const b=new L_(M.height);return b.fromEquirectangularTexture(n,p),e.set(p,b),p.addEventListener("dispose",h),f(b.texture,p.mapping)}else return null}}return p}function c(p){if(p&&p.isTexture){const _=p.mapping,M=_===ld||_===cd,b=_===Fs||_===Ro;if(M||b){let y=t.get(p);const S=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return r===null&&(r=new mv(n)),y=M?r.fromEquirectangular(p,y):r.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const T=p.image;return M&&T&&T.height>0||b&&T&&d(T)?(r===null&&(r=new mv(n)),y=M?r.fromEquirectangular(p):r.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",m),y.texture):null}}}return p}function f(p,_){return _===ld?p.mapping=Fs:_===cd&&(p.mapping=Ro),p}function d(p){let _=0;const M=6;for(let b=0;b<M;b++)p[b]!==void 0&&_++;return _===M}function h(p){const _=p.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function m(p){const _=p.target;_.removeEventListener("dispose",m);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function Cb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&eu("WebGLRenderer: "+r+" extension not supported."),o}}}function Rb(n,e,t,r){const o={},a=new WeakMap;function c(v){const p=v.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);p.removeEventListener("dispose",c),delete o[p.id];const _=a.get(p);_&&(e.remove(_),a.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function f(v,p){return o[p.id]===!0||(p.addEventListener("dispose",c),o[p.id]=!0,t.memory.geometries++),p}function d(v){const p=v.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER)}function h(v){const p=[],_=v.index,M=v.attributes.position;let b=0;if(M===void 0)return;if(_!==null){const T=_.array;b=_.version;for(let C=0,R=T.length;C<R;C+=3){const I=T[C+0],N=T[C+1],O=T[C+2];p.push(I,N,N,O,O,I)}}else{const T=M.array;b=M.version;for(let C=0,R=T.length/3-1;C<R;C+=3){const I=C+0,N=C+1,O=C+2;p.push(I,N,N,O,O,I)}}const y=new(M.count>=65535?E_:M_)(p,1);y.version=b;const S=a.get(v);S&&e.remove(S),a.set(v,y)}function m(v){const p=a.get(v);if(p){const _=v.index;_!==null&&p.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function Pb(n,e,t){let r;function o(p){r=p}let a,c;function f(p){a=p.type,c=p.bytesPerElement}function d(p,_){n.drawElements(r,_,a,p*c),t.update(_,r,1)}function h(p,_,M){M!==0&&(n.drawElementsInstanced(r,_,a,p*c,M),t.update(_,r,M))}function m(p,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,a,p,0,M);let y=0;for(let S=0;S<M;S++)y+=_[S];t.update(y,r,1)}function v(p,_,M,b){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<p.length;S++)h(p[S]/c,_[S],b[S]);else{y.multiDrawElementsInstancedWEBGL(r,_,0,a,p,0,b,0,M);let S=0;for(let T=0;T<M;T++)S+=_[T]*b[T];t.update(S,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function Db(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Lb(n,e,t){const r=new WeakMap,o=new Jt;function a(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let p=r.get(f);if(p===void 0||p.count!==v){let G=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",G)};var _=G;p!==void 0&&p.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),b===!0&&(R=2),y===!0&&(R=3);let I=f.attributes.position.count*R,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*N*4*v),E=new __(O,I,N,v);E.type=Wi,E.needsUpdate=!0;const D=R*4;for(let F=0;F<v;F++){const H=S[F],K=T[F],oe=C[F],Q=I*N*4*F;for(let J=0;J<H.count;J++){const Y=J*D;M===!0&&(o.fromBufferAttribute(H,J),O[Q+Y+0]=o.x,O[Q+Y+1]=o.y,O[Q+Y+2]=o.z,O[Q+Y+3]=0),b===!0&&(o.fromBufferAttribute(K,J),O[Q+Y+4]=o.x,O[Q+Y+5]=o.y,O[Q+Y+6]=o.z,O[Q+Y+7]=0),y===!0&&(o.fromBufferAttribute(oe,J),O[Q+Y+8]=o.x,O[Q+Y+9]=o.y,O[Q+Y+10]=o.z,O[Q+Y+11]=oe.itemSize===4?o.w:1)}}p={count:v,texture:E,size:new Pt(I,N)},r.set(f,p),f.addEventListener("dispose",G)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const b=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function Nb(n,e,t,r,o){let a=new WeakMap;function c(h){const m=o.render.frame,v=h.geometry,p=e.get(h,v);if(a.get(p)!==m&&(e.update(p),a.set(p,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==m&&(_.update(),a.set(_,m))}return p}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const Ib={[i_]:"LINEAR_TONE_MAPPING",[r_]:"REINHARD_TONE_MAPPING",[s_]:"CINEON_TONE_MAPPING",[o_]:"ACES_FILMIC_TONE_MAPPING",[l_]:"AGX_TONE_MAPPING",[c_]:"NEUTRAL_TONE_MAPPING",[a_]:"CUSTOM_TONE_MAPPING"};function Ub(n,e,t,r,o){const a=new Yi(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),c=new Yi(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),f=new $n;f.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const d=new PT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ni(f,d),m=new P_(-1,1,1,-1,0,1);let v=null,p=null,_=!1,M,b=null,y=[],S=!1;this.setSize=function(T,C){a.setSize(T,C),c.setSize(T,C);for(let R=0;R<y.length;R++){const I=y[R];I.setSize&&I.setSize(T,C)}},this.setEffects=function(T){y=T,S=y.length>0&&y[0].isRenderPass===!0;const C=a.width,R=a.height;for(let I=0;I<y.length;I++){const N=y[I];N.setSize&&N.setSize(C,R)}},this.begin=function(T,C){if(_||T.toneMapping===Xi&&y.length===0)return!1;if(b=C,C!==null){const R=C.width,I=C.height;(a.width!==R||a.height!==I)&&this.setSize(R,I)}return S===!1&&T.setRenderTarget(a),M=T.toneMapping,T.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(T,C){T.toneMapping=M,_=!0;let R=a,I=c;for(let N=0;N<y.length;N++){const O=y[N];if(O.enabled!==!1&&(O.render(T,I,R,C),O.needsSwap!==!1)){const E=R;R=I,I=E}}if(v!==T.outputColorSpace||p!==T.toneMapping){v=T.outputColorSpace,p=T.toneMapping,d.defines={},bt.getTransfer(v)===It&&(d.defines.SRGB_TRANSFER="");const N=Ib[p];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(b),T.render(h,m),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),d.dispose()}}const N_=new Un,Zh=new Va(1,1),I_=new __,U_=new lT,F_=new b_,_v=[],yv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);function Oo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=_v[o];if(a===void 0&&(a=new Float32Array(o),_v[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,n[c].toArray(a,f)}return a}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function _u(n,e){let t=yv[e];t===void 0&&(t=new Int32Array(e),yv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function Vb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;Ev.set(r),n.uniformMatrix2fv(this.addr,!1,Ev),cn(t,r)}}function zb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;Mv.set(r),n.uniformMatrix3fv(this.addr,!1,Mv),cn(t,r)}}function Hb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,r))return;Sv.set(r),n.uniformMatrix4fv(this.addr,!1,Sv),cn(t,r)}}function Gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function Yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function Zb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?Lp:Dp,a=Zh):a=N_,t.setTexture2D(e||a,o)}function Qb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||U_,o)}function Jb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||F_,o)}function eA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||I_,o)}function tA(n){switch(n){case 5126:return Fb;case 35664:return Ob;case 35665:return kb;case 35666:return Bb;case 35674:return Vb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return jb;case 35669:case 35673:return Xb;case 5125:return Yb;case 36294:return qb;case 36295:return $b;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return eA}}function nA(n,e){n.uniform1fv(this.addr,e)}function iA(n,e){const t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function rA(n,e){const t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function sA(n,e){const t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function oA(n,e){const t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aA(n,e){const t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lA(n,e){const t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cA(n,e){n.uniform1iv(this.addr,e)}function uA(n,e){n.uniform2iv(this.addr,e)}function fA(n,e){n.uniform3iv(this.addr,e)}function dA(n,e){n.uniform4iv(this.addr,e)}function hA(n,e){n.uniform1uiv(this.addr,e)}function pA(n,e){n.uniform2uiv(this.addr,e)}function mA(n,e){n.uniform3uiv(this.addr,e)}function gA(n,e){n.uniform4uiv(this.addr,e)}function vA(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);ln(r,a)||(n.uniform1iv(this.addr,a),cn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Zh:c=N_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,a[f])}function xA(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);ln(r,a)||(n.uniform1iv(this.addr,a),cn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||U_,a[c])}function _A(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);ln(r,a)||(n.uniform1iv(this.addr,a),cn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||F_,a[c])}function yA(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);ln(r,a)||(n.uniform1iv(this.addr,a),cn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||I_,a[c])}function SA(n){switch(n){case 5126:return nA;case 35664:return iA;case 35665:return rA;case 35666:return sA;case 35674:return oA;case 35675:return aA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return yA}}class MA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=tA(t.type)}}class EA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SA(t.type)}}class TA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Tv(n,e){n.seq.push(e),n.map[e.id]=e}function wA(n,e,t){const r=n.name,o=r.length;for(Bd.lastIndex=0;;){const a=Bd.exec(r),c=Bd.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){Tv(t,h===void 0?new MA(f,n,e):new EA(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new TA(f),Tv(t,v)),t=v}}}class Gc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);wA(f,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const f=t[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function wv(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const bA=37297;let AA=0;function CA(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const bv=new ht;function RA(n){bt._getMatrix(bv,bt.workingColorSpace,n);const e=`mat3( ${bv.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case Zc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Av(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+CA(n.getShaderSource(e),f)}else return a}function PA(n,e){const t=RA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const DA={[i_]:"Linear",[r_]:"Reinhard",[s_]:"Cineon",[o_]:"ACESFilmic",[l_]:"AgX",[c_]:"Neutral",[a_]:"Custom"};function LA(n,e){const t=DA[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dc=new re;function NA(){bt.getLuminanceCoefficients(Dc);const n=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function UA(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function FA(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:f}}return t}function Da(n){return n!==""}function Cv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(n){return n.replace(OA,BA)}const kA=new Map;function BA(n,e){let t=pt[e];if(t===void 0){const r=kA.get(e);if(r!==void 0)t=pt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(n){return n.replace(VA,zA)}function zA(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Dv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HA={[kc]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};function GA(n){return HA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WA={[Fs]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function jA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":WA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const XA={[Ro]:"ENVMAP_MODE_REFRACTION"};function YA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XA[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qA={[n_]:"ENVMAP_BLENDING_MULTIPLY",[VE]:"ENVMAP_BLENDING_MIX",[zE]:"ENVMAP_BLENDING_ADD"};function $A(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qA[n.combine]||"ENVMAP_BLENDING_NONE"}function KA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function ZA(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=GA(t),h=jA(t),m=YA(t),v=$A(t),p=KA(t),_=IA(t),M=UA(a),b=o.createProgram();let y,S,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Da).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Da).join(`
`),S.length>0&&(S+=`
`)):(y=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),S=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?LA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,PA("linearToOutputTexel",t.outputColorSpace),NA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),c=Qh(c),c=Cv(c,t),c=Rv(c,t),f=Qh(f),f=Cv(f,t),f=Rv(f,t),c=Pv(c),f=Pv(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=T+y+c,R=T+S+f,I=wv(o,o.VERTEX_SHADER,C),N=wv(o,o.FRAGMENT_SHADER,R);o.attachShader(b,I),o.attachShader(b,N),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(F){if(n.debug.checkShaderErrors){const H=o.getProgramInfoLog(b)||"",K=o.getShaderInfoLog(I)||"",oe=o.getShaderInfoLog(N)||"",Q=H.trim(),J=K.trim(),Y=oe.trim();let $=!0,ne=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,b,I,N);else{const ue=Av(o,I,"vertex"),B=Av(o,N,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Q+`
`+ue+`
`+B)}else Q!==""?ct("WebGLProgram: Program Info Log:",Q):(J===""||Y==="")&&(ne=!1);ne&&(F.diagnostics={runnable:$,programLog:Q,vertexShader:{log:J,prefix:y},fragmentShader:{log:Y,prefix:S}})}o.deleteShader(I),o.deleteShader(N),E=new Gc(o,b),D=FA(o,b)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=o.getProgramParameter(b,bA)),G},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=N,this}let QA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new eC(e),t.set(e,r)),r}}class eC{constructor(e){this.id=QA++,this.code=e,this.usedTimes=0}}function tC(n,e,t,r,o,a){const c=new y_,f=new JA,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function b(E,D,G,F,H){const K=F.fog,oe=H.geometry,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||Q,J),$=Y&&Y.mapping===du?Y.image.height:null,ne=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ue=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,B=ue!==void 0?ue.length:0;let Z=0;oe.morphAttributes.position!==void 0&&(Z=1),oe.morphAttributes.normal!==void 0&&(Z=2),oe.morphAttributes.color!==void 0&&(Z=3);let Ce,Ye,Je,ae;if(ne){const Tt=Hi[ne];Ce=Tt.vertexShader,Ye=Tt.fragmentShader}else Ce=E.vertexShader,Ye=E.fragmentShader,f.update(E),Je=f.getVertexShaderID(E),ae=f.getFragmentShaderID(E);const me=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Oe=H.isInstancedMesh===!0,We=H.isBatchedMesh===!0,rt=!!E.map,$t=!!E.matcap,mt=!!Y,Mt=!!E.aoMap,Dt=!!E.lightMap,ft=!!E.bumpMap,Bt=!!E.normalMap,z=!!E.displacementMap,Gt=!!E.emissiveMap,vt=!!E.metalnessMap,Et=!!E.roughnessMap,je=E.anisotropy>0,U=E.clearcoat>0,w=E.dispersion>0,X=E.iridescence>0,he=E.sheen>0,ge=E.transmission>0,fe=je&&!!E.anisotropyMap,Be=U&&!!E.clearcoatMap,be=U&&!!E.clearcoatNormalMap,Ke=U&&!!E.clearcoatRoughnessMap,st=X&&!!E.iridescenceMap,ye=X&&!!E.iridescenceThicknessMap,we=he&&!!E.sheenColorMap,Xe=he&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,Le=!!E.specularColorMap,ut=!!E.specularIntensityMap,W=ge&&!!E.transmissionMap,Ae=ge&&!!E.thicknessMap,Ee=!!E.gradientMap,Ne=!!E.alphaMap,Se=E.alphaTest>0,de=!!E.alphaHash,ze=!!E.extensions;let ot=Xi;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Nt={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:Ye,defines:E.defines,customVertexShaderID:Je,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:We,batchingColor:We&&H._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Do,alphaToCoverage:!!E.alphaToCoverage,map:rt,matcap:$t,envMap:mt,envMapMode:mt&&Y.mapping,envMapCubeUVHeight:$,aoMap:Mt,lightMap:Dt,bumpMap:ft,normalMap:Bt,displacementMap:z,emissiveMap:Gt,normalMapObjectSpace:Bt&&E.normalMapType===jE,normalMapTangentSpace:Bt&&E.normalMapType===WE,metalnessMap:vt,roughnessMap:Et,anisotropy:je,anisotropyMap:fe,clearcoat:U,clearcoatMap:Be,clearcoatNormalMap:be,clearcoatRoughnessMap:Ke,dispersion:w,iridescence:X,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:we,sheenRoughnessMap:Xe,specularMap:Ve,specularColorMap:Le,specularIntensityMap:ut,transmission:ge,transmissionMap:W,thicknessMap:Ae,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===bo&&E.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:de,combine:E.combine,mapUv:rt&&M(E.map.channel),aoMapUv:Mt&&M(E.aoMap.channel),lightMapUv:Dt&&M(E.lightMap.channel),bumpMapUv:ft&&M(E.bumpMap.channel),normalMapUv:Bt&&M(E.normalMap.channel),displacementMapUv:z&&M(E.displacementMap.channel),emissiveMapUv:Gt&&M(E.emissiveMap.channel),metalnessMapUv:vt&&M(E.metalnessMap.channel),roughnessMapUv:Et&&M(E.roughnessMap.channel),anisotropyMapUv:fe&&M(E.anisotropyMap.channel),clearcoatMapUv:Be&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&M(E.sheenRoughnessMap.channel),specularMapUv:Ve&&M(E.specularMap.channel),specularColorMapUv:Le&&M(E.specularColorMap.channel),specularIntensityMapUv:ut&&M(E.specularIntensityMap.channel),transmissionMapUv:W&&M(E.transmissionMap.channel),thicknessMapUv:Ae&&M(E.thicknessMap.channel),alphaMapUv:Ne&&M(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Bt||je),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!oe.attributes.uv&&(rt||Ne),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||oe.attributes.normal===void 0&&Bt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:pe,skinning:H.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:rt&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:Gt&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pr,flipSided:E.side===Yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&E.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function y(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)D.push(G),D.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(S(D,E),T(D,E),D.push(n.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function S(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function T(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),E.push(c.mask)}function C(E){const D=_[E.type];let G;if(D){const F=Hi[D];G=AT.clone(F.uniforms)}else G=E.uniforms;return G}function R(E,D){let G=m.get(D);return G!==void 0?++G.usedTimes:(G=new ZA(n,D,E,o),h.push(G),m.set(D,G)),G}function I(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),m.delete(E.cacheKey),E.destroy()}}function N(E){f.remove(E)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:C,acquireProgram:R,releaseProgram:I,releaseShaderCache:N,programs:h,dispose:O}}function nC(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let f=n.get(c);return f===void 0&&(f={},n.set(c,f)),f}function r(c){n.delete(c)}function o(c,f,d){n.get(c)[f]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function iC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nv(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(p){let _=0;return p.isInstancedMesh&&(_+=2),p.isSkinnedMesh&&(_+=1),_}function f(p,_,M,b,y,S){let T=n[e];return T===void 0?(T={id:p.id,object:p,geometry:_,material:M,materialVariant:c(p),groupOrder:b,renderOrder:p.renderOrder,z:y,group:S},n[e]=T):(T.id=p.id,T.object=p,T.geometry=_,T.material=M,T.materialVariant=c(p),T.groupOrder=b,T.renderOrder=p.renderOrder,T.z=y,T.group=S),e++,T}function d(p,_,M,b,y,S){const T=f(p,_,M,b,y,S);M.transmission>0?r.push(T):M.transparent===!0?o.push(T):t.push(T)}function h(p,_,M,b,y,S){const T=f(p,_,M,b,y,S);M.transmission>0?r.unshift(T):M.transparent===!0?o.unshift(T):t.unshift(T)}function m(p,_){t.length>1&&t.sort(p||iC),r.length>1&&r.sort(_||Lv),o.length>1&&o.sort(_||Lv)}function v(){for(let p=e,_=n.length;p<_;p++){const M=n[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:m}}function rC(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new Nv,n.set(r,[c])):o>=a.length?(c=new Nv,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function sC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new St};break;case"SpotLight":t={position:new re,direction:new re,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function oC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aC=0;function lC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cC(n){const e=new sC,t=oC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const o=new re,a=new en,c=new en;function f(h){let m=0,v=0,p=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,M=0,b=0,y=0,S=0,T=0,C=0,R=0,I=0,N=0,O=0;h.sort(lC);for(let D=0,G=h.length;D<G;D++){const F=h[D],H=F.color,K=F.intensity,oe=F.distance;let Q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Po?Q=F.shadow.map.texture:Q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=H.r*K,v+=H.g*K,p+=H.b*K;else if(F.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(F.sh.coefficients[J],K);O++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Y=F.shadow,$=t.get(F);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=Q,r.directionalShadowMatrix[_]=F.shadow.matrix,T++}r.directional[_]=J,_++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(H).multiplyScalar(K),J.distance=oe,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,r.spot[b]=J;const Y=F.shadow;if(F.map&&(r.spotLightMap[I]=F.map,I++,Y.updateMatrices(F),F.castShadow&&N++),r.spotLightMatrix[b]=Y.matrix,F.castShadow){const $=t.get(F);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.spotShadow[b]=$,r.spotShadowMap[b]=Q,R++}b++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(H).multiplyScalar(K),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=J,y++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const Y=F.shadow,$=t.get(F);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,r.pointShadow[M]=$,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=F.shadow.matrix,C++}r.point[M]=J,M++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(K),J.groundColor.copy(F.groundColor).multiplyScalar(K),r.hemi[S]=J,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=p;const E=r.hash;(E.directionalLength!==_||E.pointLength!==M||E.spotLength!==b||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==T||E.numPointShadows!==C||E.numSpotShadows!==R||E.numSpotMaps!==I||E.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=b,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,E.directionalLength=_,E.pointLength=M,E.spotLength=b,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=T,E.numPointShadows=C,E.numSpotShadows=R,E.numSpotMaps=I,E.numLightProbes=O,r.version=aC++)}function d(h,m){let v=0,p=0,_=0,M=0,b=0;const y=m.matrixWorldInverse;for(let S=0,T=h.length;S<T;S++){const C=h[S];if(C.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(C.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(C.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(C.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),p++}else if(C.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:f,setupView:d,state:r}}function Iv(n){const e=new cC(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function a(m){t.push(m)}function c(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:a,pushShadow:c}}function uC(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new Iv(n),e.set(o,[f])):a>=c.length?(f=new Iv(n),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const fC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hC=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],pC=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Uv=new en,Aa=new re,Vd=new re;function mC(n,e,t){let r=new w_;const o=new Pt,a=new Pt,c=new Jt,f=new DT,d=new LT,h={},m=t.maxTextureSize,v={[Jr]:Yn,[Yn]:Jr,[pr]:pr},p=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:fC,fragmentShader:dC}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const M=new $n;M.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ni(M,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let S=this.type;this.render=function(N,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===SE&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kc);const D=n.getRenderTarget(),G=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),H=n.state;H.setBlending(gr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=S!==this.type;K&&O.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(Q=>Q.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,Q=N.length;oe<Q;oe++){const J=N[oe],Y=J.shadow;if(Y===void 0){ct("WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const $=Y.getFrameExtents();o.multiply($),a.copy(Y.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/$.x),o.x=a.x*$.x,Y.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/$.y),o.y=a.y*$.y,Y.mapSize.y=a.y));const ne=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ne,Y.map===null||K===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ra){if(J.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Yi(o.x,o.y,{format:Po,type:xr,minFilter:An,magFilter:An,generateMipmaps:!1}),Y.map.texture.name=J.name+".shadowMap",Y.map.depthTexture=new Va(o.x,o.y,Wi),Y.map.depthTexture.name=J.name+".shadowMapDepth",Y.map.depthTexture.format=_r,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=xn,Y.map.depthTexture.magFilter=xn}else J.isPointLight?(Y.map=new L_(o.x),Y.map.depthTexture=new wT(o.x,Ki)):(Y.map=new Yi(o.x,o.y),Y.map.depthTexture=new Va(o.x,o.y,Ki)),Y.map.depthTexture.name=J.name+".shadowMap",Y.map.depthTexture.format=_r,this.type===kc?(Y.map.depthTexture.compareFunction=ne?Lp:Dp,Y.map.depthTexture.minFilter=An,Y.map.depthTexture.magFilter=An):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=xn,Y.map.depthTexture.magFilter=xn);Y.camera.updateProjectionMatrix()}const ue=Y.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ue;B++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,B),n.clear();else{B===0&&(n.setRenderTarget(Y.map),n.clear());const Z=Y.getViewport(B);c.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),H.viewport(c)}if(J.isPointLight){const Z=Y.camera,Ce=Y.matrix,Ye=J.distance||Z.far;Ye!==Z.far&&(Z.far=Ye,Z.updateProjectionMatrix()),Aa.setFromMatrixPosition(J.matrixWorld),Z.position.copy(Aa),Vd.copy(Z.position),Vd.add(hC[B]),Z.up.copy(pC[B]),Z.lookAt(Vd),Z.updateMatrixWorld(),Ce.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Uv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Uv,Z.coordinateSystem,Z.reversedDepth)}else Y.updateMatrices(J);r=Y.getFrustum(),R(O,E,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===Ra&&T(Y,E),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(D,G,F)};function T(N,O){const E=e.update(b);p.defines.VSM_SAMPLES!==N.blurSamples&&(p.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Yi(o.x,o.y,{format:Po,type:xr})),p.uniforms.shadow_pass.value=N.map.depthTexture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,E,p,b,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,E,_,b,null)}function C(N,O,E,D){let G=null;const F=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)G=F;else if(G=E.isPointLight===!0?d:f,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const H=G.uuid,K=O.uuid;let oe=h[H];oe===void 0&&(oe={},h[H]=oe);let Q=oe[K];Q===void 0&&(Q=G.clone(),oe[K]=Q,O.addEventListener("dispose",I)),G=Q}if(G.visible=O.visible,G.wireframe=O.wireframe,D===Ra?G.side=O.shadowSide!==null?O.shadowSide:O.side:G.side=O.shadowSide!==null?O.shadowSide:v[O.side],G.alphaMap=O.alphaMap,G.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,G.map=O.map,G.clipShadows=O.clipShadows,G.clippingPlanes=O.clippingPlanes,G.clipIntersection=O.clipIntersection,G.displacementMap=O.displacementMap,G.displacementScale=O.displacementScale,G.displacementBias=O.displacementBias,G.wireframeLinewidth=O.wireframeLinewidth,G.linewidth=O.linewidth,E.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const H=n.properties.get(G);H.light=E}return G}function R(N,O,E,D,G){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===Ra)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const K=e.update(N),oe=N.material;if(Array.isArray(oe)){const Q=K.groups;for(let J=0,Y=Q.length;J<Y;J++){const $=Q[J],ne=oe[$.materialIndex];if(ne&&ne.visible){const ue=C(N,ne,D,G);N.onBeforeShadow(n,N,O,E,K,ue,$),n.renderBufferDirect(E,null,K,ue,N,$),N.onAfterShadow(n,N,O,E,K,ue,$)}}}else if(oe.visible){const Q=C(N,oe,D,G);N.onBeforeShadow(n,N,O,E,K,Q,null),n.renderBufferDirect(E,null,K,Q,N,null),N.onAfterShadow(n,N,O,E,K,Q,null)}}const H=N.children;for(let K=0,oe=H.length;K<oe;K++)R(H[K],O,E,D,G)}function I(N){N.target.removeEventListener("dispose",I);for(const E in h){const D=h[E],G=N.target.uuid;G in D&&(D[G].dispose(),delete D[G])}}}function gC(n,e){function t(){let W=!1;const Ae=new Jt;let Ee=null;const Ne=new Jt(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!W&&(n.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){W=Se},setClear:function(Se,de,ze,ot,Nt){Nt===!0&&(Se*=ot,de*=ot,ze*=ot),Ae.set(Se,de,ze,ot),Ne.equals(Ae)===!1&&(n.clearColor(Se,de,ze,ot),Ne.copy(Ae))},reset:function(){W=!1,Ee=null,Ne.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,Ee=null,Ne=null,Se=null;return{setReversed:function(de){if(Ae!==de){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=de;const ot=Se;Se=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(de){de?me(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(de){Ee!==de&&!W&&(n.depthMask(de),Ee=de)},setFunc:function(de){if(Ae&&(de=tT[de]),Ne!==de){switch(de){case lh:n.depthFunc(n.NEVER);break;case ch:n.depthFunc(n.ALWAYS);break;case uh:n.depthFunc(n.LESS);break;case Co:n.depthFunc(n.LEQUAL);break;case fh:n.depthFunc(n.EQUAL);break;case dh:n.depthFunc(n.GEQUAL);break;case hh:n.depthFunc(n.GREATER);break;case ph:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=de}},setLocked:function(de){W=de},setClear:function(de){Se!==de&&(Se=de,Ae&&(de=1-de),n.clearDepth(de))},reset:function(){W=!1,Ee=null,Ne=null,Se=null,Ae=!1}}}function o(){let W=!1,Ae=null,Ee=null,Ne=null,Se=null,de=null,ze=null,ot=null,Nt=null;return{setTest:function(Tt){W||(Tt?me(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Tt){Ae!==Tt&&!W&&(n.stencilMask(Tt),Ae=Tt)},setFunc:function(Tt,ri,Cn){(Ee!==Tt||Ne!==ri||Se!==Cn)&&(n.stencilFunc(Tt,ri,Cn),Ee=Tt,Ne=ri,Se=Cn)},setOp:function(Tt,ri,Cn){(de!==Tt||ze!==ri||ot!==Cn)&&(n.stencilOp(Tt,ri,Cn),de=Tt,ze=ri,ot=Cn)},setLocked:function(Tt){W=Tt},setClear:function(Tt){Nt!==Tt&&(n.clearStencil(Tt),Nt=Tt)},reset:function(){W=!1,Ae=null,Ee=null,Ne=null,Se=null,de=null,ze=null,ot=null,Nt=null}}}const a=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},v={},p=new WeakMap,_=[],M=null,b=!1,y=null,S=null,T=null,C=null,R=null,I=null,N=null,O=new St(0,0,0),E=0,D=!1,G=null,F=null,H=null,K=null,oe=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),J=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=Y>=2);let ne=null,ue={};const B=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),Ce=new Jt().fromArray(B),Ye=new Jt().fromArray(Z);function Je(W,Ae,Ee,Ne){const Se=new Uint8Array(4),de=n.createTexture();n.bindTexture(W,de),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<Ee;ze++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ae+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return de}const ae={};ae[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),me(n.DEPTH_TEST),c.setFunc(Co),ft(!1),Bt(V0),me(n.CULL_FACE),Mt(gr);function me(W){m[W]!==!0&&(n.enable(W),m[W]=!0)}function pe(W){m[W]!==!1&&(n.disable(W),m[W]=!1)}function Oe(W,Ae){return v[W]!==Ae?(n.bindFramebuffer(W,Ae),v[W]=Ae,W===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ae),W===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function We(W,Ae){let Ee=_,Ne=!1;if(W){Ee=p.get(Ae),Ee===void 0&&(Ee=[],p.set(Ae,Ee));const Se=W.textures;if(Ee.length!==Se.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let de=0,ze=Se.length;de<ze;de++)Ee[de]=n.COLOR_ATTACHMENT0+de;Ee.length=Se.length,Ne=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Ee)}function rt(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const $t={[Cs]:n.FUNC_ADD,[EE]:n.FUNC_SUBTRACT,[TE]:n.FUNC_REVERSE_SUBTRACT};$t[wE]=n.MIN,$t[bE]=n.MAX;const mt={[AE]:n.ZERO,[CE]:n.ONE,[RE]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[UE]:n.SRC_ALPHA_SATURATE,[NE]:n.DST_COLOR,[DE]:n.DST_ALPHA,[PE]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[IE]:n.ONE_MINUS_DST_COLOR,[LE]:n.ONE_MINUS_DST_ALPHA,[FE]:n.CONSTANT_COLOR,[OE]:n.ONE_MINUS_CONSTANT_COLOR,[kE]:n.CONSTANT_ALPHA,[BE]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(W,Ae,Ee,Ne,Se,de,ze,ot,Nt,Tt){if(W===gr){b===!0&&(pe(n.BLEND),b=!1);return}if(b===!1&&(me(n.BLEND),b=!0),W!==ME){if(W!==y||Tt!==D){if((S!==Cs||R!==Cs)&&(n.blendEquation(n.FUNC_ADD),S=Cs,R=Cs),Tt)switch(W){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oa:n.blendFunc(n.ONE,n.ONE);break;case z0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case H0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ct("WebGLState: Invalid blending: ",W);break}else switch(W){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case z0:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",W);break}T=null,C=null,I=null,N=null,O.set(0,0,0),E=0,y=W,D=Tt}return}Se=Se||Ae,de=de||Ee,ze=ze||Ne,(Ae!==S||Se!==R)&&(n.blendEquationSeparate($t[Ae],$t[Se]),S=Ae,R=Se),(Ee!==T||Ne!==C||de!==I||ze!==N)&&(n.blendFuncSeparate(mt[Ee],mt[Ne],mt[de],mt[ze]),T=Ee,C=Ne,I=de,N=ze),(ot.equals(O)===!1||Nt!==E)&&(n.blendColor(ot.r,ot.g,ot.b,Nt),O.copy(ot),E=Nt),y=W,D=!1}function Dt(W,Ae){W.side===pr?pe(n.CULL_FACE):me(n.CULL_FACE);let Ee=W.side===Yn;Ae&&(Ee=!Ee),ft(Ee),W.blending===bo&&W.transparent===!1?Mt(gr):Mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ne=W.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(W){G!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),G=W)}function Bt(W){W!==_E?(me(n.CULL_FACE),W!==F&&(W===V0?n.cullFace(n.BACK):W===yE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),F=W}function z(W){W!==H&&(J&&n.lineWidth(W),H=W)}function Gt(W,Ae,Ee){W?(me(n.POLYGON_OFFSET_FILL),(K!==Ae||oe!==Ee)&&(K=Ae,oe=Ee,c.getReversed()&&(Ae=-Ae),n.polygonOffset(Ae,Ee))):pe(n.POLYGON_OFFSET_FILL)}function vt(W){W?me(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Et(W){W===void 0&&(W=n.TEXTURE0+Q-1),ne!==W&&(n.activeTexture(W),ne=W)}function je(W,Ae,Ee){Ee===void 0&&(ne===null?Ee=n.TEXTURE0+Q-1:Ee=ne);let Ne=ue[Ee];Ne===void 0&&(Ne={type:void 0,texture:void 0},ue[Ee]=Ne),(Ne.type!==W||Ne.texture!==Ae)&&(ne!==Ee&&(n.activeTexture(Ee),ne=Ee),n.bindTexture(W,Ae||ae[W]),Ne.type=W,Ne.texture=Ae)}function U(){const W=ue[ne];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function he(){try{n.texSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ge(){try{n.texSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function be(){try{n.texStorage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Ke(){try{n.texStorage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function st(){try{n.texImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ye(){try{n.texImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function we(W){Ce.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ce.copy(W))}function Xe(W){Ye.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Ye.copy(W))}function Ve(W,Ae){let Ee=h.get(Ae);Ee===void 0&&(Ee=new WeakMap,h.set(Ae,Ee));let Ne=Ee.get(W);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ae,W.name),Ee.set(W,Ne))}function Le(W,Ae){const Ne=h.get(Ae).get(W);d.get(Ae)!==Ne&&(n.uniformBlockBinding(Ae,Ne,W.__bindingPointIndex),d.set(Ae,Ne))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ne=null,ue={},v={},p=new WeakMap,_=[],M=null,b=!1,y=null,S=null,T=null,C=null,R=null,I=null,N=null,O=new St(0,0,0),E=0,D=!1,G=null,F=null,H=null,K=null,oe=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:me,disable:pe,bindFramebuffer:Oe,drawBuffers:We,useProgram:rt,setBlending:Mt,setMaterial:Dt,setFlipSided:ft,setCullFace:Bt,setLineWidth:z,setPolygonOffset:Gt,setScissorTest:vt,activeTexture:Et,bindTexture:je,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:st,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:Ke,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Be,scissor:we,viewport:Xe,reset:ut}}function vC(n,e,t,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,m=new WeakMap;let v;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return _?new OffscreenCanvas(U,w):Jc("canvas")}function b(U,w,X){let he=1;const ge=je(U);if((ge.width>X||ge.height>X)&&(he=X/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(he*ge.width),Be=Math.floor(he*ge.height);v===void 0&&(v=M(fe,Be));const be=w?M(fe,Be):v;return be.width=fe,be.height=Be,be.getContext("2d").drawImage(U,0,0,fe,Be),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Be+")."),be}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){n.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(U,w,X,he,ge=!1){if(U!==null){if(n[U]!==void 0)return n[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=w;if(w===n.RED&&(X===n.FLOAT&&(fe=n.R32F),X===n.HALF_FLOAT&&(fe=n.R16F),X===n.UNSIGNED_BYTE&&(fe=n.R8)),w===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(fe=n.R8UI),X===n.UNSIGNED_SHORT&&(fe=n.R16UI),X===n.UNSIGNED_INT&&(fe=n.R32UI),X===n.BYTE&&(fe=n.R8I),X===n.SHORT&&(fe=n.R16I),X===n.INT&&(fe=n.R32I)),w===n.RG&&(X===n.FLOAT&&(fe=n.RG32F),X===n.HALF_FLOAT&&(fe=n.RG16F),X===n.UNSIGNED_BYTE&&(fe=n.RG8)),w===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(fe=n.RG8UI),X===n.UNSIGNED_SHORT&&(fe=n.RG16UI),X===n.UNSIGNED_INT&&(fe=n.RG32UI),X===n.BYTE&&(fe=n.RG8I),X===n.SHORT&&(fe=n.RG16I),X===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),X===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),X===n.UNSIGNED_INT&&(fe=n.RGB32UI),X===n.BYTE&&(fe=n.RGB8I),X===n.SHORT&&(fe=n.RGB16I),X===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),X===n.UNSIGNED_INT&&(fe=n.RGBA32UI),X===n.BYTE&&(fe=n.RGBA8I),X===n.SHORT&&(fe=n.RGBA16I),X===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&(X===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),w===n.RGBA){const Be=ge?Zc:bt.getTransfer(he);X===n.FLOAT&&(fe=n.RGBA32F),X===n.HALF_FLOAT&&(fe=n.RGBA16F),X===n.UNSIGNED_BYTE&&(fe=Be===It?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(U,w){let X;return U?w===null||w===Ki||w===Ba?X=n.DEPTH24_STENCIL8:w===Wi?X=n.DEPTH32F_STENCIL8:w===ka&&(X=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ki||w===Ba?X=n.DEPTH_COMPONENT24:w===Wi?X=n.DEPTH_COMPONENT32F:w===ka&&(X=n.DEPTH_COMPONENT16),X}function I(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==xn&&U.minFilter!==An?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function N(U){const w=U.target;w.removeEventListener("dispose",N),E(w),w.isVideoTexture&&m.delete(w)}function O(U){const w=U.target;w.removeEventListener("dispose",O),G(w)}function E(U){const w=r.get(U);if(w.__webglInit===void 0)return;const X=U.source,he=p.get(X);if(he){const ge=he[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(U),Object.keys(he).length===0&&p.delete(X)}r.remove(U)}function D(U){const w=r.get(U);n.deleteTexture(w.__webglTexture);const X=U.source,he=p.get(X);delete he[w.__cacheKey],c.memory.textures--}function G(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ge=0;ge<w.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)n.deleteFramebuffer(w.__webglFramebuffer[he]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=U.textures;for(let he=0,ge=X.length;he<ge;he++){const fe=r.get(X[he]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(X[he])}r.remove(U)}let F=0;function H(){F=0}function K(){const U=F;return U>=o.maxTextures&&ct("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),F+=1,U}function oe(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function Q(U,w){const X=r.get(U);if(U.isVideoTexture&&vt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&X.__version!==U.version){const he=U.image;if(he===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(X,U,w);return}}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+w)}function J(U,w){const X=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){ae(X,U,w);return}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+w)}function Y(U,w){const X=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){ae(X,U,w);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+w)}function $(U,w){const X=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&X.__version!==U.version){me(X,U,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+w)}const ne={[mh]:n.REPEAT,[mr]:n.CLAMP_TO_EDGE,[gh]:n.MIRRORED_REPEAT},ue={[xn]:n.NEAREST,[HE]:n.NEAREST_MIPMAP_NEAREST,[lc]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[ud]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},B={[XE]:n.NEVER,[ZE]:n.ALWAYS,[YE]:n.LESS,[Dp]:n.LEQUAL,[qE]:n.EQUAL,[Lp]:n.GEQUAL,[$E]:n.GREATER,[KE]:n.NOTEQUAL};function Z(U,w){if(w.type===Wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===An||w.magFilter===ud||w.magFilter===lc||w.magFilter===Ps||w.minFilter===An||w.minFilter===ud||w.minFilter===lc||w.minFilter===Ps)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,ne[w.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,ne[w.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,ne[w.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,ue[w.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,ue[w.minFilter]),w.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,B[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xn||w.minFilter!==lc&&w.minFilter!==Ps||w.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ce(U,w){let X=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",N));const he=w.source;let ge=p.get(he);ge===void 0&&(ge={},p.set(he,ge));const fe=oe(w);if(fe!==U.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,X=!0),ge[fe].usedTimes++;const Be=ge[U.__cacheKey];Be!==void 0&&(ge[U.__cacheKey].usedTimes--,Be.usedTimes===0&&D(w)),U.__cacheKey=fe,U.__webglTexture=ge[fe].texture}return X}function Ye(U,w,X){return Math.floor(Math.floor(U/X)/w)}function Je(U,w,X,he){const fe=U.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,X,he,w.data);else{fe.sort((ye,we)=>ye.start-we.start);let Be=0;for(let ye=1;ye<fe.length;ye++){const we=fe[Be],Xe=fe[ye],Ve=we.start+we.count,Le=Ye(Xe.start,w.width,4),ut=Ye(we.start,w.width,4);Xe.start<=Ve+1&&Le===ut&&Ye(Xe.start+Xe.count-1,w.width,4)===Le?we.count=Math.max(we.count,Xe.start+Xe.count-we.start):(++Be,fe[Be]=Xe)}fe.length=Be+1;const be=n.getParameter(n.UNPACK_ROW_LENGTH),Ke=n.getParameter(n.UNPACK_SKIP_PIXELS),st=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let ye=0,we=fe.length;ye<we;ye++){const Xe=fe[ye],Ve=Math.floor(Xe.start/4),Le=Math.ceil(Xe.count/4),ut=Ve%w.width,W=Math.floor(Ve/w.width),Ae=Le,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,ut,W,Ae,Ee,X,he,w.data)}U.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,st)}}function ae(U,w,X){let he=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=n.TEXTURE_3D);const ge=Ce(U,w),fe=w.source;t.bindTexture(he,U.__webglTexture,n.TEXTURE0+X);const Be=r.get(fe);if(fe.version!==Be.__version||ge===!0){t.activeTexture(n.TEXTURE0+X);const be=bt.getPrimaries(bt.workingColorSpace),Ke=w.colorSpace===Kr?null:bt.getPrimaries(w.colorSpace),st=w.colorSpace===Kr||be===Ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=b(w.image,!1,o.maxTextureSize);ye=Et(w,ye);const we=a.convert(w.format,w.colorSpace),Xe=a.convert(w.type);let Ve=C(w.internalFormat,we,Xe,w.colorSpace,w.isVideoTexture);Z(he,w);let Le;const ut=w.mipmaps,W=w.isVideoTexture!==!0,Ae=Be.__version===void 0||ge===!0,Ee=fe.dataReady,Ne=I(w,ye);if(w.isDepthTexture)Ve=R(w.format===Ds,w.type),Ae&&(W?t.texStorage2D(n.TEXTURE_2D,1,Ve,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ye.width,ye.height,0,we,Xe,null));else if(w.isDataTexture)if(ut.length>0){W&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ne,Ve,ut[0].width,ut[0].height);for(let Se=0,de=ut.length;Se<de;Se++)Le=ut[Se],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Xe,Le.data):t.texImage2D(n.TEXTURE_2D,Se,Ve,Le.width,Le.height,0,we,Xe,Le.data);w.generateMipmaps=!1}else W?(Ae&&t.texStorage2D(n.TEXTURE_2D,Ne,Ve,ye.width,ye.height),Ee&&Je(w,ye,we,Xe)):t.texImage2D(n.TEXTURE_2D,0,Ve,ye.width,ye.height,0,we,Xe,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Ve,ut[0].width,ut[0].height,ye.depth);for(let Se=0,de=ut.length;Se<de;Se++)if(Le=ut[Se],w.format!==Di)if(we!==null)if(W){if(Ee)if(w.layerUpdates.size>0){const ze=dv(Le.width,Le.height,w.format,w.type);for(const ot of w.layerUpdates){const Nt=Le.data.subarray(ot*ze/Le.data.BYTES_PER_ELEMENT,(ot+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,ot,Le.width,Le.height,1,we,Nt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,we,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Ve,Le.width,Le.height,ye.depth,0,Le.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,we,Xe,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Ve,Le.width,Le.height,ye.depth,0,we,Xe,Le.data)}else{W&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ne,Ve,ut[0].width,ut[0].height);for(let Se=0,de=ut.length;Se<de;Se++)Le=ut[Se],w.format!==Di?we!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Ve,Le.width,Le.height,0,Le.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Xe,Le.data):t.texImage2D(n.TEXTURE_2D,Se,Ve,Le.width,Le.height,0,we,Xe,Le.data)}else if(w.isDataArrayTexture)if(W){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Ve,ye.width,ye.height,ye.depth),Ee)if(w.layerUpdates.size>0){const Se=dv(ye.width,ye.height,w.format,w.type);for(const de of w.layerUpdates){const ze=ye.data.subarray(de*Se/ye.data.BYTES_PER_ELEMENT,(de+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,we,Xe,ze)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,Xe,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,we,Xe,ye.data);else if(w.isData3DTexture)W?(Ae&&t.texStorage3D(n.TEXTURE_3D,Ne,Ve,ye.width,ye.height,ye.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,Xe,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,we,Xe,ye.data);else if(w.isFramebufferTexture){if(Ae)if(W)t.texStorage2D(n.TEXTURE_2D,Ne,Ve,ye.width,ye.height);else{let Se=ye.width,de=ye.height;for(let ze=0;ze<Ne;ze++)t.texImage2D(n.TEXTURE_2D,ze,Ve,Se,de,0,we,Xe,null),Se>>=1,de>>=1}}else if(ut.length>0){if(W&&Ae){const Se=je(ut[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Ve,Se.width,Se.height)}for(let Se=0,de=ut.length;Se<de;Se++)Le=ut[Se],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,we,Xe,Le):t.texImage2D(n.TEXTURE_2D,Se,Ve,we,Xe,Le);w.generateMipmaps=!1}else if(W){if(Ae){const Se=je(ye);t.texStorage2D(n.TEXTURE_2D,Ne,Ve,Se.width,Se.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Xe,ye)}else t.texImage2D(n.TEXTURE_2D,0,Ve,we,Xe,ye);y(w)&&S(he),Be.__version=fe.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function me(U,w,X){if(w.image.length!==6)return;const he=Ce(U,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+X);const fe=r.get(ge);if(ge.version!==fe.__version||he===!0){t.activeTexture(n.TEXTURE0+X);const Be=bt.getPrimaries(bt.workingColorSpace),be=w.colorSpace===Kr?null:bt.getPrimaries(w.colorSpace),Ke=w.colorSpace===Kr||Be===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const st=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!st&&!ye?we[de]=b(w.image[de],!0,o.maxCubemapSize):we[de]=ye?w.image[de].image:w.image[de],we[de]=Et(w,we[de]);const Xe=we[0],Ve=a.convert(w.format,w.colorSpace),Le=a.convert(w.type),ut=C(w.internalFormat,Ve,Le,w.colorSpace),W=w.isVideoTexture!==!0,Ae=fe.__version===void 0||he===!0,Ee=ge.dataReady;let Ne=I(w,Xe);Z(n.TEXTURE_CUBE_MAP,w);let Se;if(st){W&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ut,Xe.width,Xe.height);for(let de=0;de<6;de++){Se=we[de].mipmaps;for(let ze=0;ze<Se.length;ze++){const ot=Se[ze];w.format!==Di?Ve!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,ot.width,ot.height,Ve,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ut,ot.width,ot.height,0,ot.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,ot.width,ot.height,Ve,Le,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ut,ot.width,ot.height,0,Ve,Le,ot.data)}}}else{if(Se=w.mipmaps,W&&Ae){Se.length>0&&Ne++;const de=je(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ut,de.width,de.height)}for(let de=0;de<6;de++)if(ye){W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Ve,Le,we[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,we[de].width,we[de].height,0,Ve,Le,we[de].data);for(let ze=0;ze<Se.length;ze++){const Nt=Se[ze].image[de].image;W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Nt.width,Nt.height,Ve,Le,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ut,Nt.width,Nt.height,0,Ve,Le,Nt.data)}}else{W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ve,Le,we[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Ve,Le,we[de]);for(let ze=0;ze<Se.length;ze++){const ot=Se[ze];W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Ve,Le,ot.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ut,Ve,Le,ot.image[de])}}}y(w)&&S(n.TEXTURE_CUBE_MAP),fe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function pe(U,w,X,he,ge,fe){const Be=a.convert(X.format,X.colorSpace),be=a.convert(X.type),Ke=C(X.internalFormat,Be,be,X.colorSpace),st=r.get(w),ye=r.get(X);if(ye.__renderTarget=w,!st.__hasExternalTextures){const we=Math.max(1,w.width>>fe),Xe=Math.max(1,w.height>>fe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Ke,we,Xe,w.depth,0,Be,be,null):t.texImage2D(ge,fe,Ke,we,Xe,0,Be,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Gt(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ge,ye.__webglTexture,0,z(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ge,ye.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(U,w,X){if(n.bindRenderbuffer(n.RENDERBUFFER,U),w.depthBuffer){const he=w.depthTexture,ge=he&&he.isDepthTexture?he.type:null,fe=R(w.stencilBuffer,ge),Be=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Gt(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(w),fe,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(w),fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,U)}else{const he=w.textures;for(let ge=0;ge<he.length;ge++){const fe=he[ge],Be=a.convert(fe.format,fe.colorSpace),be=a.convert(fe.type),Ke=C(fe.internalFormat,Be,be,fe.colorSpace);Gt(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(w),Ke,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(w),Ke,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ke,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(U,w,X){const he=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",N)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Z(n.TEXTURE_CUBE_MAP,w.depthTexture);const st=a.convert(w.depthTexture.format),ye=a.convert(w.depthTexture.type);let we;w.depthTexture.format===_r?we=n.DEPTH_COMPONENT24:w.depthTexture.format===Ds&&(we=n.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,we,w.width,w.height,0,st,ye,null)}}else Q(w.depthTexture,0);const fe=ge.__webglTexture,Be=z(w),be=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,Ke=w.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===_r)Gt(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ke,be,fe,0,Be):n.framebufferTexture2D(n.FRAMEBUFFER,Ke,be,fe,0);else if(w.depthTexture.format===Ds)Gt(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ke,be,fe,0,Be):n.framebufferTexture2D(n.FRAMEBUFFER,Ke,be,fe,0);else throw new Error("Unknown depthTexture format")}function rt(U){const w=r.get(U),X=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=he}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let he=0;he<6;he++)We(w.__webglFramebuffer[he],U,he);else{const he=U.texture.mipmaps;he&&he.length>0?We(w.__webglFramebuffer[0],U,0):We(w.__webglFramebuffer,U,0)}else if(X){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=n.createRenderbuffer(),Oe(w.__webglDepthbuffer[he],U,!1);else{const ge=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Oe(w.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(U,w,X){const he=r.get(U);w!==void 0&&pe(he.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&rt(U)}function mt(U){const w=U.texture,X=r.get(U),he=r.get(w);U.addEventListener("dispose",O);const ge=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Be=ge.length>1;if(Be||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=w.version,c.memory.textures++),fe){X.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[be]=[];for(let Ke=0;Ke<w.mipmaps.length;Ke++)X.__webglFramebuffer[be][Ke]=n.createFramebuffer()}else X.__webglFramebuffer[be]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)X.__webglFramebuffer[be]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Be)for(let be=0,Ke=ge.length;be<Ke;be++){const st=r.get(ge[be]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&Gt(U)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const Ke=ge[be];X.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[be]);const st=a.convert(Ke.format,Ke.colorSpace),ye=a.convert(Ke.type),we=C(Ke.internalFormat,st,ye,Ke.colorSpace,U.isXRRenderTarget===!0),Xe=z(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,we,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,X.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(X.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Z(n.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ke=0;Ke<w.mipmaps.length;Ke++)pe(X.__webglFramebuffer[be][Ke],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke);else pe(X.__webglFramebuffer[be],U,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(w)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let be=0,Ke=ge.length;be<Ke;be++){const st=ge[be],ye=r.get(st);let we=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),Z(we,st),pe(X.__webglFramebuffer,U,st,n.COLOR_ATTACHMENT0+be,we,0),y(st)&&S(we)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),Z(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ke=0;Ke<w.mipmaps.length;Ke++)pe(X.__webglFramebuffer[Ke],U,w,n.COLOR_ATTACHMENT0,be,Ke);else pe(X.__webglFramebuffer,U,w,n.COLOR_ATTACHMENT0,be,0);y(w)&&S(be),t.unbindTexture()}U.depthBuffer&&rt(U)}function Mt(U){const w=U.textures;for(let X=0,he=w.length;X<he;X++){const ge=w[X];if(y(ge)){const fe=T(U),Be=r.get(ge).__webglTexture;t.bindTexture(fe,Be),S(fe),t.unbindTexture()}}}const Dt=[],ft=[];function Bt(U){if(U.samples>0){if(Gt(U)===!1){const w=U.textures,X=U.width,he=U.height;let ge=n.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=r.get(U),be=w.length>1;if(be)for(let st=0;st<w.length;st++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ke=U.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let st=0;st<w.length;st++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[st]);const ye=r.get(w[st]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,X,he,0,0,X,he,ge,n.NEAREST),d===!0&&(Dt.length=0,ft.length=0,Dt.push(n.COLOR_ATTACHMENT0+st),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Dt.push(fe),ft.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let st=0;st<w.length;st++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,Be.__webglColorRenderbuffer[st]);const ye=r.get(w[st]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const w=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function z(U){return Math.min(o.maxSamples,U.samples)}function Gt(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vt(U){const w=c.render.frame;m.get(U)!==w&&(m.set(U,w),U.update())}function Et(U,w){const X=U.colorSpace,he=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||X!==Do&&X!==Kr&&(bt.getTransfer(X)===It?(he!==Di||ge!==mi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",X)),w}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=$t,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xC(n,e){function t(r,o=Kr){let a;const c=bt.getTransfer(o);if(r===mi)return n.UNSIGNED_BYTE;if(r===bp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return n.UNSIGNED_SHORT_5_5_5_1;if(r===h_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===p_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===f_)return n.BYTE;if(r===d_)return n.SHORT;if(r===ka)return n.UNSIGNED_SHORT;if(r===wp)return n.INT;if(r===Ki)return n.UNSIGNED_INT;if(r===Wi)return n.FLOAT;if(r===xr)return n.HALF_FLOAT;if(r===m_)return n.ALPHA;if(r===g_)return n.RGB;if(r===Di)return n.RGBA;if(r===_r)return n.DEPTH_COMPONENT;if(r===Ds)return n.DEPTH_STENCIL;if(r===v_)return n.RED;if(r===Cp)return n.RED_INTEGER;if(r===Po)return n.RG;if(r===Rp)return n.RG_INTEGER;if(r===Pp)return n.RGBA_INTEGER;if(r===Bc||r===Vc||r===zc||r===Hc)if(c===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vh||r===xh||r===_h||r===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===vh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===bh||r===Ah)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Sh||r===Mh)return c===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Eh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Th)return a.COMPRESSED_R11_EAC;if(r===wh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===bh)return a.COMPRESSED_RG11_EAC;if(r===Ah)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ch||r===Rh||r===Ph||r===Dh||r===Lh||r===Nh||r===Ih||r===Uh||r===Fh||r===Oh||r===kh||r===Bh||r===Vh||r===zh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ch)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ph)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ih)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hh||r===Gh||r===Wh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Hh)return c===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jh||r===Xh||r===Yh||r===qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ba?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new A_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Zi({vertexShader:_C,fragmentShader:yC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new vu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MC extends Uo{constructor(e,t){super();const r=this;let o=null,a=1,c=null,f="local-floor",d=1,h=null,m=null,v=null,p=null,_=null,M=null;const b=typeof XRWebGLBinding<"u",y=new SC,S={},T=t.getContextAttributes();let C=null,R=null;const I=[],N=[],O=new Pt;let E=null;const D=new Xn;D.viewport=new Jt;const G=new Xn;G.viewport=new Jt;const F=[D,G],H=new IT;let K=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let me=I[ae];return me===void 0&&(me=new xd,I[ae]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ae){let me=I[ae];return me===void 0&&(me=new xd,I[ae]=me),me.getGripSpace()},this.getHand=function(ae){let me=I[ae];return me===void 0&&(me=new xd,I[ae]=me),me.getHandSpace()};function Q(ae){const me=N.indexOf(ae.inputSource);if(me===-1)return;const pe=I[me];pe!==void 0&&(pe.update(ae.inputSource,ae.frame,h||c),pe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function J(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",Y);for(let ae=0;ae<I.length;ae++){const me=N[ae];me!==null&&(N[ae]=null,I[ae].disconnect(me))}K=null,oe=null,y.reset();for(const ae in S)delete S[ae];e.setRenderTarget(C),_=null,p=null,v=null,o=null,R=null,Je.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",J),o.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Oe=null,We=null;T.depth&&(We=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=T.stencil?Ds:_r,Oe=T.stencil?Ba:Ki);const rt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:a};v=this.getBinding(),p=v.createProjectionLayer(rt),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Yi(p.textureWidth,p.textureHeight,{format:Di,type:mi,depthTexture:new Va(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Yi(_.framebufferWidth,_.framebufferHeight,{format:Di,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),Je.setContext(o),Je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(ae){for(let me=0;me<ae.removed.length;me++){const pe=ae.removed[me],Oe=N.indexOf(pe);Oe>=0&&(N[Oe]=null,I[Oe].disconnect(pe))}for(let me=0;me<ae.added.length;me++){const pe=ae.added[me];let Oe=N.indexOf(pe);if(Oe===-1){for(let rt=0;rt<I.length;rt++)if(rt>=N.length){N.push(pe),Oe=rt;break}else if(N[rt]===null){N[rt]=pe,Oe=rt;break}if(Oe===-1)break}const We=I[Oe];We&&We.connect(pe)}}const $=new re,ne=new re;function ue(ae,me,pe){$.setFromMatrixPosition(me.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const Oe=$.distanceTo(ne),We=me.projectionMatrix.elements,rt=pe.projectionMatrix.elements,$t=We[14]/(We[10]-1),mt=We[14]/(We[10]+1),Mt=(We[9]+1)/We[5],Dt=(We[9]-1)/We[5],ft=(We[8]-1)/We[0],Bt=(rt[8]+1)/rt[0],z=$t*ft,Gt=$t*Bt,vt=Oe/(-ft+Bt),Et=vt*-ft;if(me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Et),ae.translateZ(vt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),We[10]===-1)ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const je=$t+vt,U=mt+vt,w=z-Et,X=Gt+(Oe-Et),he=Mt*mt/U*je,ge=Dt*mt/U*je;ae.projectionMatrix.makePerspective(w,X,he,ge,je,U),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function B(ae,me){me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let me=ae.near,pe=ae.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),H.near=G.near=D.near=me,H.far=G.far=D.far=pe,(K!==H.near||oe!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),K=H.near,oe=H.far),H.layers.mask=ae.layers.mask|6,D.layers.mask=H.layers.mask&-5,G.layers.mask=H.layers.mask&-3;const Oe=ae.parent,We=H.cameras;B(H,Oe);for(let rt=0;rt<We.length;rt++)B(We[rt],Oe);We.length===2?ue(H,D,G):H.projectionMatrix.copy(D.projectionMatrix),Z(ae,H,Oe)};function Z(ae,me,pe){pe===null?ae.matrix.copy(me.matrixWorld):(ae.matrix.copy(pe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=$h*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&_===null))return d},this.setFoveation=function(ae){d=ae,p!==null&&(p.fixedFoveation=ae),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(ae){return S[ae]};let Ce=null;function Ye(ae,me){if(m=me.getViewerPose(h||c),M=me,m!==null){const pe=m.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Oe=!1;pe.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let mt=0;mt<pe.length;mt++){const Mt=pe[mt];let Dt=null;if(_!==null)Dt=_.getViewport(Mt);else{const Bt=v.getViewSubImage(p,Mt);Dt=Bt.viewport,mt===0&&(e.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(R))}let ft=F[mt];ft===void 0&&(ft=new Xn,ft.layers.enable(mt),ft.viewport=new Jt,F[mt]=ft),ft.matrix.fromArray(Mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Mt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),mt===0&&(H.matrix.copy(ft.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(ft)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const mt=v.getDepthInformation(pe[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,o.renderState)}if(We&&We.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let mt=0;mt<pe.length;mt++){const Mt=pe[mt].camera;if(Mt){let Dt=S[Mt];Dt||(Dt=new A_,S[Mt]=Dt);const ft=v.getCameraImage(Mt);Dt.sourceTexture=ft}}}}for(let pe=0;pe<I.length;pe++){const Oe=N[pe],We=I[pe];Oe!==null&&We!==void 0&&We.update(Oe,me,h||c)}Ce&&Ce(ae,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),M=null}const Je=new D_;Je.setAnimationLoop(Ye),this.setAnimationLoop=function(ae){Ce=ae},this.dispose=function(){}}}const Es=new yr,EC=new en;function TC(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,C_(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,T,C,R){S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),p(y,S),S.isMeshPhysicalMaterial&&_(y,S,R)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),b(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,T,C):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Yn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Yn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const T=e.get(S),C=T.envMap,R=T.envMapRotation;C&&(y.envMap.value=C,Es.copy(R),Es.x*=-1,Es.y*=-1,Es.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),y.envMapRotation.value.setFromMatrix4(EC.makeRotationFromEuler(Es)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,T,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*T,y.scale.value=C*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function p(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,T){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const T=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function wC(n,e,t,r){let o={},a={},c=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,C){const R=C.program;r.uniformBlockBinding(T,R)}function h(T,C){let R=o[T.id];R===void 0&&(M(T),R=m(T),o[T.id]=R,T.addEventListener("dispose",y));const I=C.program;r.updateUBOMapping(T,I);const N=e.render.frame;a[T.id]!==N&&(p(T),a[T.id]=N)}function m(T){const C=v();T.__bindingPointIndex=C;const R=n.createBuffer(),I=T.__size,N=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,R),R}function v(){for(let T=0;T<f;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const C=o[T.id],R=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let N=0,O=R.length;N<O;N++){const E=Array.isArray(R[N])?R[N]:[R[N]];for(let D=0,G=E.length;D<G;D++){const F=E[D];if(_(F,N,D,I)===!0){const H=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let Q=0;Q<K.length;Q++){const J=K[Q],Y=b(J);typeof J=="number"||typeof J=="boolean"?(F.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,H+oe,F.__data)):J.isMatrix3?(F.__data[0]=J.elements[0],F.__data[1]=J.elements[1],F.__data[2]=J.elements[2],F.__data[3]=0,F.__data[4]=J.elements[3],F.__data[5]=J.elements[4],F.__data[6]=J.elements[5],F.__data[7]=0,F.__data[8]=J.elements[6],F.__data[9]=J.elements[7],F.__data[10]=J.elements[8],F.__data[11]=0):(J.toArray(F.__data,oe),oe+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(T,C,R,I){const N=T.value,O=C+"_"+R;if(I[O]===void 0)return typeof N=="number"||typeof N=="boolean"?I[O]=N:I[O]=N.clone(),!0;{const E=I[O];if(typeof N=="number"||typeof N=="boolean"){if(E!==N)return I[O]=N,!0}else if(E.equals(N)===!1)return E.copy(N),!0}return!1}function M(T){const C=T.uniforms;let R=0;const I=16;for(let O=0,E=C.length;O<E;O++){const D=Array.isArray(C[O])?C[O]:[C[O]];for(let G=0,F=D.length;G<F;G++){const H=D[G],K=Array.isArray(H.value)?H.value:[H.value];for(let oe=0,Q=K.length;oe<Q;oe++){const J=K[oe],Y=b(J),$=R%I,ne=$%Y.boundary,ue=$+ne;R+=ne,ue!==0&&I-ue<Y.storage&&(R+=I-ue),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=R,R+=Y.storage}}}const N=R%I;return N>0&&(R+=I-N),T.__size=R,T.__cache={},this}function b(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",T),C}function y(T){const C=T.target;C.removeEventListener("dispose",y);const R=c.indexOf(C.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(o[C.id]),delete o[C.id],delete a[C.id]}function S(){for(const T in o)n.deleteBuffer(o[T]);c=[],o={},a={}}return{bind:d,update:h,dispose:S}}const bC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function AC(){return Vi===null&&(Vi=new ST(bC,16,16,Po,xr),Vi.name="DFG_LUT",Vi.minFilter=An,Vi.magFilter=An,Vi.wrapS=mr,Vi.wrapT=mr,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class Op{constructor(e={}){const{canvas:t=JE(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:_=mi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const b=_,y=new Set([Pp,Rp,Cp]),S=new Set([mi,Ki,ka,Ba,bp,Ap]),T=new Uint32Array(4),C=new Int32Array(4);let R=null,I=null;const N=[],O=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=pi;let F=0,H=0,K=null,oe=-1,Q=null;const J=new Jt,Y=new Jt;let $=null;const ne=new St(0);let ue=0,B=t.width,Z=t.height,Ce=1,Ye=null,Je=null;const ae=new Jt(0,0,B,Z),me=new Jt(0,0,B,Z);let pe=!1;const Oe=new w_;let We=!1,rt=!1;const $t=new en,mt=new re,Mt=new Jt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Bt(){return K===null?Ce:1}let z=r;function Gt(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tp}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Nt,!1),z===null){const q="webgl2";if(z=Gt(q,P),z===null)throw Gt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Ct("WebGLRenderer: "+P.message),P}let vt,Et,je,U,w,X,he,ge,fe,Be,be,Ke,st,ye,we,Xe,Ve,Le,ut,W,Ae,Ee,Ne;function Se(){vt=new Cb(z),vt.init(),Ae=new xC(z,vt),Et=new yb(z,vt,e,Ae),je=new gC(z,vt),Et.reversedDepthBuffer&&p&&je.buffers.depth.setReversed(!0),U=new Db(z),w=new nC,X=new vC(z,vt,je,w,Et,Ae,U),he=new Ab(D),ge=new FT(z),Ee=new xb(z,ge),fe=new Rb(z,ge,U,Ee),Be=new Nb(z,fe,ge,Ee,U),Le=new Lb(z,Et,X),we=new Sb(w),be=new tC(D,he,vt,Et,Ee,we),Ke=new TC(D,w),st=new rC,ye=new uC(vt),Ve=new vb(D,he,je,Be,M,d),Xe=new mC(D,Be,Et),Ne=new wC(z,U,Et,je),ut=new _b(z,vt,U),W=new Pb(z,vt,U),U.programs=be.programs,D.capabilities=Et,D.extensions=vt,D.properties=w,D.renderLists=st,D.shadowMap=Xe,D.state=je,D.info=U}Se(),b!==mi&&(E=new Ub(b,t.width,t.height,o,a));const de=new MC(D,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(P){P!==void 0&&(Ce=P,this.setSize(B,Z,!1))},this.getSize=function(P){return P.set(B,Z)},this.setSize=function(P,q,ce=!0){if(de.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,Z=q,t.width=Math.floor(P*Ce),t.height=Math.floor(q*Ce),ce===!0&&(t.style.width=P+"px",t.style.height=q+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(B*Ce,Z*Ce).floor()},this.setDrawingBufferSize=function(P,q,ce){B=P,Z=q,Ce=ce,t.width=Math.floor(P*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(b===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(J)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,q,ce,se){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,q,ce,se),je.viewport(J.copy(ae).multiplyScalar(Ce).round())},this.getScissor=function(P){return P.copy(me)},this.setScissor=function(P,q,ce,se){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,q,ce,se),je.scissor(Y.copy(me).multiplyScalar(Ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){je.setScissorTest(pe=P)},this.setOpaqueSort=function(P){Ye=P},this.setTransparentSort=function(P){Je=P},this.getClearColor=function(P){return P.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,ce=!0){let se=0;if(P){let te=!1;if(K!==null){const Pe=K.texture.format;te=y.has(Pe)}if(te){const Pe=K.texture.type,Fe=S.has(Pe),Re=Ve.getClearColor(),Ie=Ve.getClearAlpha(),Qe=Re.r,tt=Re.g,dt=Re.b;Fe?(T[0]=Qe,T[1]=tt,T[2]=dt,T[3]=Ie,z.clearBufferuiv(z.COLOR,0,T)):(C[0]=Qe,C[1]=tt,C[2]=dt,C[3]=Ie,z.clearBufferiv(z.COLOR,0,C))}else se|=z.COLOR_BUFFER_BIT}q&&(se|=z.DEPTH_BUFFER_BIT),ce&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),Ve.dispose(),st.dispose(),ye.dispose(),w.dispose(),he.dispose(),Be.dispose(),Ee.dispose(),Ne.dispose(),be.dispose(),de.dispose(),de.removeEventListener("sessionstart",Sr),de.removeEventListener("sessionend",is),si.stop()};function ze(P){P.preventDefault(),Y0("WebGLRenderer: Context Lost."),G=!0}function ot(){Y0("WebGLRenderer: Context Restored."),G=!1;const P=U.autoReset,q=Xe.enabled,ce=Xe.autoUpdate,se=Xe.needsUpdate,te=Xe.type;Se(),U.autoReset=P,Xe.enabled=q,Xe.autoUpdate=ce,Xe.needsUpdate=se,Xe.type=te}function Nt(P){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Tt(P){const q=P.target;q.removeEventListener("dispose",Tt),ri(q)}function ri(P){Cn(P),w.remove(P)}function Cn(P){const q=w.get(P).programs;q!==void 0&&(q.forEach(function(ce){be.releaseProgram(ce)}),P.isShaderMaterial&&be.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,ce,se,te,Pe){q===null&&(q=Dt);const Fe=te.isMesh&&te.matrixWorld.determinant()<0,Re=nl(P,q,ce,se,te);je.setMaterial(se,Fe);let Ie=ce.index,Qe=1;if(se.wireframe===!0){if(Ie=fe.getWireframeAttribute(ce),Ie===void 0)return;Qe=2}const tt=ce.drawRange,dt=ce.attributes.position;let et=tt.start*Qe,Lt=(tt.start+tt.count)*Qe;Pe!==null&&(et=Math.max(et,Pe.start*Qe),Lt=Math.min(Lt,(Pe.start+Pe.count)*Qe)),Ie!==null?(et=Math.max(et,0),Lt=Math.min(Lt,Ie.count)):dt!=null&&(et=Math.max(et,0),Lt=Math.min(Lt,dt.count));const Ot=Lt-et;if(Ot<0||Ot===1/0)return;Ee.setup(te,se,Re,ce,Ie);let Ut,yt=ut;if(Ie!==null&&(Ut=ge.get(Ie),yt=W,yt.setIndex(Ut)),te.isMesh)se.wireframe===!0?(je.setLineWidth(se.wireframeLinewidth*Bt()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(te.isLine){let Kt=se.linewidth;Kt===void 0&&(Kt=1),je.setLineWidth(Kt*Bt()),te.isLineSegments?yt.setMode(z.LINES):te.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else te.isPoints?yt.setMode(z.POINTS):te.isSprite&&yt.setMode(z.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Kt=te._multiDrawStarts,$e=te._multiDrawCounts,Rn=te._multiDrawCount,xt=Ie?ge.get(Ie).bytesPerElement:1,On=w.get(se).currentProgram.getUniforms();for(let kn=0;kn<Rn;kn++)On.setValue(z,"_gl_DrawID",kn),yt.render(Kt[kn]/xt,$e[kn])}else if(te.isInstancedMesh)yt.renderInstances(et,Ot,te.count);else if(ce.isInstancedBufferGeometry){const Kt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,$e=Math.min(ce.instanceCount,Kt);yt.renderInstances(et,Ot,$e)}else yt.render(et,Ot)};function Os(P,q,ce){P.transparent===!0&&P.side===pr&&P.forceSinglePass===!1?(P.side=Yn,P.needsUpdate=!0,ss(P,q,ce),P.side=Jr,P.needsUpdate=!0,ss(P,q,ce),P.side=pr):ss(P,q,ce)}this.compile=function(P,q,ce=null){ce===null&&(ce=P),I=ye.get(ce),I.init(q),O.push(I),ce.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),P!==ce&&P.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),I.setupLights();const se=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Pe=te.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const Re=Pe[Fe];Os(Re,ce,te),se.add(Re)}else Os(Pe,ce,te),se.add(Pe)}),I=O.pop(),se},this.compileAsync=function(P,q,ce=null){const se=this.compile(P,q,ce);return new Promise(te=>{function Pe(){if(se.forEach(function(Fe){w.get(Fe).currentProgram.isReady()&&se.delete(Fe)}),se.size===0){te(P);return}setTimeout(Pe,10)}vt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ji=null;function Tu(P){Ji&&Ji(P)}function Sr(){si.stop()}function is(){si.start()}const si=new D_;si.setAnimationLoop(Tu),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(P){Ji=P,de.setAnimationLoop(P),P===null?si.stop():si.start()},de.addEventListener("sessionstart",Sr),de.addEventListener("sessionend",is),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const ce=de.enabled===!0&&de.isPresenting===!0,se=E!==null&&(K===null||ce)&&E.begin(D,K);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(q),q=de.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,q,K),I=ye.get(P,O.length),I.init(q),O.push(I),$t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Oe.setFromProjectionMatrix($t,ji,q.reversedDepth),rt=this.localClippingEnabled,We=we.init(this.clippingPlanes,rt),R=st.get(P,N.length),R.init(),N.push(R),de.enabled===!0&&de.isPresenting===!0){const Fe=D.xr.getDepthSensingMesh();Fe!==null&&rs(Fe,q,-1/0,D.sortObjects)}rs(P,q,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(Ye,Je),ft=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ft&&Ve.addToRenderList(R,P),this.info.render.frame++,We===!0&&we.beginShadows();const te=I.state.shadowsArray;if(Xe.render(te,P,q),We===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&E.hasRenderPass())===!1){const Fe=R.opaque,Re=R.transmissive;if(I.setupLights(),q.isArrayCamera){const Ie=q.cameras;if(Re.length>0)for(let Qe=0,tt=Ie.length;Qe<tt;Qe++){const dt=Ie[Qe];el(Fe,Re,P,dt)}ft&&Ve.render(P);for(let Qe=0,tt=Ie.length;Qe<tt;Qe++){const dt=Ie[Qe];Ja(R,P,dt,dt.viewport)}}else Re.length>0&&el(Fe,Re,P,q),ft&&Ve.render(P),Ja(R,P,q)}K!==null&&H===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),se&&E.end(D),P.isScene===!0&&P.onAfterRender(D,P,q),Ee.resetDefaultState(),oe=-1,Q=null,O.pop(),O.length>0?(I=O[O.length-1],We===!0&&we.setGlobalState(D.clippingPlanes,I.state.camera)):I=null,N.pop(),N.length>0?R=N[N.length-1]:R=null};function rs(P,q,ce,se){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)I.pushLight(P),P.castShadow&&I.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Oe.intersectsSprite(P)){se&&Mt.setFromMatrixPosition(P.matrixWorld).applyMatrix4($t);const Fe=Be.update(P),Re=P.material;Re.visible&&R.push(P,Fe,Re,ce,Mt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Oe.intersectsObject(P))){const Fe=Be.update(P),Re=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Mt.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Mt.copy(Fe.boundingSphere.center)),Mt.applyMatrix4(P.matrixWorld).applyMatrix4($t)),Array.isArray(Re)){const Ie=Fe.groups;for(let Qe=0,tt=Ie.length;Qe<tt;Qe++){const dt=Ie[Qe],et=Re[dt.materialIndex];et&&et.visible&&R.push(P,Fe,et,ce,Mt.z,dt)}}else Re.visible&&R.push(P,Fe,Re,ce,Mt.z,null)}}const Pe=P.children;for(let Fe=0,Re=Pe.length;Fe<Re;Fe++)rs(Pe[Fe],q,ce,se)}function Ja(P,q,ce,se){const{opaque:te,transmissive:Pe,transparent:Fe}=P;I.setupLightsView(ce),We===!0&&we.setGlobalState(D.clippingPlanes,ce),se&&je.viewport(J.copy(se)),te.length>0&&ks(te,q,ce),Pe.length>0&&ks(Pe,q,ce),Fe.length>0&&ks(Fe,q,ce),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function el(P,q,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const et=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new Yi(1,1,{generateMipmaps:!0,type:et?xr:mi,minFilter:Ps,samples:Math.max(4,Et.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Pe=I.state.transmissionRenderTarget[se.id],Fe=se.viewport||J;Pe.setSize(Fe.z*D.transmissionResolutionScale,Fe.w*D.transmissionResolutionScale);const Re=D.getRenderTarget(),Ie=D.getActiveCubeFace(),Qe=D.getActiveMipmapLevel();D.setRenderTarget(Pe),D.getClearColor(ne),ue=D.getClearAlpha(),ue<1&&D.setClearColor(16777215,.5),D.clear(),ft&&Ve.render(ce);const tt=D.toneMapping;D.toneMapping=Xi;const dt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),We===!0&&we.setGlobalState(D.clippingPlanes,se),ks(P,ce,se),X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Lt=0,Ot=q.length;Lt<Ot;Lt++){const Ut=q[Lt],{object:yt,geometry:Kt,material:$e,group:Rn}=Ut;if($e.side===pr&&yt.layers.test(se.layers)){const xt=$e.side;$e.side=Yn,$e.needsUpdate=!0,Ii(yt,ce,se,Kt,$e,Rn),$e.side=xt,$e.needsUpdate=!0,et=!0}}et===!0&&(X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe))}D.setRenderTarget(Re,Ie,Qe),D.setClearColor(ne,ue),dt!==void 0&&(se.viewport=dt),D.toneMapping=tt}function ks(P,q,ce){const se=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Pe=P.length;te<Pe;te++){const Fe=P[te],{object:Re,geometry:Ie,group:Qe}=Fe;let tt=Fe.material;tt.allowOverride===!0&&se!==null&&(tt=se),Re.layers.test(ce.layers)&&Ii(Re,q,ce,Ie,tt,Qe)}}function Ii(P,q,ce,se,te,Pe){P.onBeforeRender(D,q,ce,se,te,Pe),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(D,q,ce,se,P,Pe),te.transparent===!0&&te.side===pr&&te.forceSinglePass===!1?(te.side=Yn,te.needsUpdate=!0,D.renderBufferDirect(ce,q,se,te,P,Pe),te.side=Jr,te.needsUpdate=!0,D.renderBufferDirect(ce,q,se,te,P,Pe),te.side=pr):D.renderBufferDirect(ce,q,se,te,P,Pe),P.onAfterRender(D,q,ce,se,te,Pe)}function ss(P,q,ce){q.isScene!==!0&&(q=Dt);const se=w.get(P),te=I.state.lights,Pe=I.state.shadowsArray,Fe=te.state.version,Re=be.getParameters(P,te.state,Pe,q,ce),Ie=be.getProgramCacheKey(Re);let Qe=se.programs;se.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,se.fog=q.fog;const tt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;se.envMap=he.get(P.envMap||se.environment,tt),se.envMapRotation=se.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Qe===void 0&&(P.addEventListener("dispose",Tt),Qe=new Map,se.programs=Qe);let dt=Qe.get(Ie);if(dt!==void 0){if(se.currentProgram===dt&&se.lightsStateVersion===Fe)return tl(P,Re),dt}else Re.uniforms=be.getUniforms(P),P.onBeforeCompile(Re,D),dt=be.acquireProgram(Re,Ie),Qe.set(Ie,dt),se.uniforms=Re.uniforms;const et=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(et.clippingPlanes=we.uniform),tl(P,Re),se.needsLights=rl(P),se.lightsStateVersion=Fe,se.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),se.currentProgram=dt,se.uniformsList=null,dt}function zo(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=Gc.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function tl(P,q){const ce=w.get(P);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function nl(P,q,ce,se,te){q.isScene!==!0&&(q=Dt),X.resetTextureUnits();const Pe=q.fog,Fe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?q.environment:null,Re=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Do,Ie=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Qe=he.get(se.envMap||Fe,Ie),tt=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!ce.morphAttributes.position,Lt=!!ce.morphAttributes.normal,Ot=!!ce.morphAttributes.color;let Ut=Xi;se.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ut=D.toneMapping);const yt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Kt=yt!==void 0?yt.length:0,$e=w.get(se),Rn=I.state.lights;if(We===!0&&(rt===!0||P!==Q)){const Zt=P===Q&&se.id===oe;we.setState(se,P,Zt)}let xt=!1;se.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Rn.state.version||$e.outputColorSpace!==Re||te.isBatchedMesh&&$e.batching===!1||!te.isBatchedMesh&&$e.batching===!0||te.isBatchedMesh&&$e.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&$e.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&$e.instancing===!1||!te.isInstancedMesh&&$e.instancing===!0||te.isSkinnedMesh&&$e.skinning===!1||!te.isSkinnedMesh&&$e.skinning===!0||te.isInstancedMesh&&$e.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&$e.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&$e.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&$e.instancingMorph===!1&&te.morphTexture!==null||$e.envMap!==Qe||se.fog===!0&&$e.fog!==Pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==we.numPlanes||$e.numIntersection!==we.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==dt||$e.morphTargets!==et||$e.morphNormals!==Lt||$e.morphColors!==Ot||$e.toneMapping!==Ut||$e.morphTargetsCount!==Kt)&&(xt=!0):(xt=!0,$e.__version=se.version);let On=$e.currentProgram;xt===!0&&(On=ss(se,q,te));let kn=!1,Kn=!1,Mr=!1;const Rt=On.getUniforms(),at=$e.uniforms;if(je.useProgram(On.program)&&(kn=!0,Kn=!0,Mr=!0),se.id!==oe&&(oe=se.id,Kn=!0),kn||Q!==P){je.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Rt.setValue(z,"projectionMatrix",P.projectionMatrix),Rt.setValue(z,"viewMatrix",P.matrixWorldInverse);const oi=Rt.map.cameraPosition;oi!==void 0&&oi.setValue(z,mt.setFromMatrixPosition(P.matrixWorld)),Et.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),Q!==P&&(Q=P,Kn=!0,Mr=!0)}if($e.needsLights&&(Rn.state.directionalShadowMap.length>0&&Rt.setValue(z,"directionalShadowMap",Rn.state.directionalShadowMap,X),Rn.state.spotShadowMap.length>0&&Rt.setValue(z,"spotShadowMap",Rn.state.spotShadowMap,X),Rn.state.pointShadowMap.length>0&&Rt.setValue(z,"pointShadowMap",Rn.state.pointShadowMap,X)),te.isSkinnedMesh){Rt.setOptional(z,te,"bindMatrix"),Rt.setOptional(z,te,"bindMatrixInverse");const Zt=te.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Rt.setValue(z,"boneTexture",Zt.boneTexture,X))}te.isBatchedMesh&&(Rt.setOptional(z,te,"batchingTexture"),Rt.setValue(z,"batchingTexture",te._matricesTexture,X),Rt.setOptional(z,te,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",te._indirectTexture,X),Rt.setOptional(z,te,"batchingColorTexture"),te._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",te._colorsTexture,X));const xi=ce.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Le.update(te,ce,On),(Kn||$e.receiveShadow!==te.receiveShadow)&&($e.receiveShadow=te.receiveShadow,Rt.setValue(z,"receiveShadow",te.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&q.environment!==null&&(at.envMapIntensity.value=q.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=AC()),Kn&&(Rt.setValue(z,"toneMappingExposure",D.toneMappingExposure),$e.needsLights&&il(at,Mr),Pe&&se.fog===!0&&Ke.refreshFogUniforms(at,Pe),Ke.refreshMaterialUniforms(at,se,Ce,Z,I.state.transmissionRenderTarget[P.id]),Gc.upload(z,zo($e),at,X)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Gc.upload(z,zo($e),at,X),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Rt.setValue(z,"center",te.center),Rt.setValue(z,"modelViewMatrix",te.modelViewMatrix),Rt.setValue(z,"normalMatrix",te.normalMatrix),Rt.setValue(z,"modelMatrix",te.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Zt=se.uniformsGroups;for(let oi=0,er=Zt.length;oi<er;oi++){const Ho=Zt[oi];Ne.update(Ho,On),Ne.bind(Ho,On)}}return On}function il(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function rl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(P,q,ce){const se=w.get(P);se.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(P.texture).__webglTexture=q,w.get(P.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const ce=w.get(P);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const sl=z.createFramebuffer();this.setRenderTarget=function(P,q=0,ce=0){K=P,F=q,H=ce;let se=null,te=!1,Pe=!1;if(P){const Re=w.get(P);if(Re.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(z.FRAMEBUFFER,Re.__webglFramebuffer),J.copy(P.viewport),Y.copy(P.scissor),$=P.scissorTest,je.viewport(J),je.scissor(Y),je.setScissorTest($),oe=-1;return}else if(Re.__webglFramebuffer===void 0)X.setupRenderTarget(P);else if(Re.__hasExternalTextures)X.rebindTextures(P,w.get(P.texture).__webglTexture,w.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const tt=P.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&w.has(tt)&&(P.width!==tt.image.width||P.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(P)}}const Ie=P.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Pe=!0);const Qe=w.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?se=Qe[q][ce]:se=Qe[q],te=!0):P.samples>0&&X.useMultisampledRTT(P)===!1?se=w.get(P).__webglMultisampledFramebuffer:Array.isArray(Qe)?se=Qe[ce]:se=Qe,J.copy(P.viewport),Y.copy(P.scissor),$=P.scissorTest}else J.copy(ae).multiplyScalar(Ce).floor(),Y.copy(me).multiplyScalar(Ce).floor(),$=pe;if(ce!==0&&(se=sl),je.bindFramebuffer(z.FRAMEBUFFER,se)&&je.drawBuffers(P,se),je.viewport(J),je.scissor(Y),je.setScissorTest($),te){const Re=w.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Re.__webglTexture,ce)}else if(Pe){const Re=q;for(let Ie=0;Ie<P.textures.length;Ie++){const Qe=w.get(P.textures[Ie]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ie,Qe.__webglTexture,ce,Re)}}else if(P!==null&&ce!==0){const Re=w.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Re.__webglTexture,ce)}oe=-1},this.readRenderTargetPixels=function(P,q,ce,se,te,Pe,Fe,Re=0){if(!(P&&P.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=w.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ie=Ie[Fe]),Ie){je.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const Qe=P.textures[Re],tt=Qe.format,dt=Qe.type;if(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!Et.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-se&&ce>=0&&ce<=P.height-te&&z.readPixels(q,ce,se,te,Ae.convert(tt),Ae.convert(dt),Pe)}finally{const Qe=K!==null?w.get(K).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(P,q,ce,se,te,Pe,Fe,Re=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=w.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ie=Ie[Fe]),Ie)if(q>=0&&q<=P.width-se&&ce>=0&&ce<=P.height-te){je.bindFramebuffer(z.FRAMEBUFFER,Ie);const Qe=P.textures[Re],tt=Qe.format,dt=Qe.type;if(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!Et.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(q,ce,se,te,Ae.convert(tt),Ae.convert(dt),0);const Lt=K!==null?w.get(K).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,Lt);const Ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await eT(z,Ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.deleteBuffer(et),z.deleteSync(Ot),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,ce=0){const se=Math.pow(2,-ce),te=Math.floor(P.image.width*se),Pe=Math.floor(P.image.height*se),Fe=q!==null?q.x:0,Re=q!==null?q.y:0;X.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ce,0,0,Fe,Re,te,Pe),je.unbindTexture()};const wu=z.createFramebuffer(),bu=z.createFramebuffer();this.copyTextureToTexture=function(P,q,ce=null,se=null,te=0,Pe=0){let Fe,Re,Ie,Qe,tt,dt,et,Lt,Ot;const Ut=P.isCompressedTexture?P.mipmaps[Pe]:P.image;if(ce!==null)Fe=ce.max.x-ce.min.x,Re=ce.max.y-ce.min.y,Ie=ce.isBox3?ce.max.z-ce.min.z:1,Qe=ce.min.x,tt=ce.min.y,dt=ce.isBox3?ce.min.z:0;else{const at=Math.pow(2,-te);Fe=Math.floor(Ut.width*at),Re=Math.floor(Ut.height*at),P.isDataArrayTexture?Ie=Ut.depth:P.isData3DTexture?Ie=Math.floor(Ut.depth*at):Ie=1,Qe=0,tt=0,dt=0}se!==null?(et=se.x,Lt=se.y,Ot=se.z):(et=0,Lt=0,Ot=0);const yt=Ae.convert(q.format),Kt=Ae.convert(q.type);let $e;q.isData3DTexture?(X.setTexture3D(q,0),$e=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(X.setTexture2DArray(q,0),$e=z.TEXTURE_2D_ARRAY):(X.setTexture2D(q,0),$e=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Rn=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),On=z.getParameter(z.UNPACK_SKIP_PIXELS),kn=z.getParameter(z.UNPACK_SKIP_ROWS),Kn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);const Mr=P.isDataArrayTexture||P.isData3DTexture,Rt=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const at=w.get(P),xi=w.get(q),Zt=w.get(at.__renderTarget),oi=w.get(xi.__renderTarget);je.bindFramebuffer(z.READ_FRAMEBUFFER,Zt.__webglFramebuffer),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let er=0;er<Ie;er++)Mr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,w.get(P).__webglTexture,te,dt+er),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Pe,Ot+er)),z.blitFramebuffer(Qe,tt,Fe,Re,et,Lt,Fe,Re,z.DEPTH_BUFFER_BIT,z.NEAREST);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(te!==0||P.isRenderTargetTexture||w.has(P)){const at=w.get(P),xi=w.get(q);je.bindFramebuffer(z.READ_FRAMEBUFFER,wu),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,bu);for(let Zt=0;Zt<Ie;Zt++)Mr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.__webglTexture,te,dt+Zt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,at.__webglTexture,te),Rt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xi.__webglTexture,Pe,Ot+Zt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xi.__webglTexture,Pe),te!==0?z.blitFramebuffer(Qe,tt,Fe,Re,et,Lt,Fe,Re,z.COLOR_BUFFER_BIT,z.NEAREST):Rt?z.copyTexSubImage3D($e,Pe,et,Lt,Ot+Zt,Qe,tt,Fe,Re):z.copyTexSubImage2D($e,Pe,et,Lt,Qe,tt,Fe,Re);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rt?P.isDataTexture||P.isData3DTexture?z.texSubImage3D($e,Pe,et,Lt,Ot,Fe,Re,Ie,yt,Kt,Ut.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D($e,Pe,et,Lt,Ot,Fe,Re,Ie,yt,Ut.data):z.texSubImage3D($e,Pe,et,Lt,Ot,Fe,Re,Ie,yt,Kt,Ut):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,et,Lt,Fe,Re,yt,Kt,Ut.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,et,Lt,Ut.width,Ut.height,yt,Ut.data):z.texSubImage2D(z.TEXTURE_2D,Pe,et,Lt,Fe,Re,yt,Kt,Ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,Rn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,On),z.pixelStorei(z.UNPACK_SKIP_ROWS,kn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Kn),Pe===0&&q.generateMipmaps&&z.generateMipmap($e),je.unbindTexture()},this.initRenderTarget=function(P){w.get(P).__webglFramebuffer===void 0&&X.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?X.setTextureCube(P,0):P.isData3DTexture?X.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?X.setTexture2DArray(P,0):X.setTexture2D(P,0),je.unbindTexture()},this.resetState=function(){F=0,H=0,K=null,je.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const zd=420;function CC(){const n=Me.useRef(null),e=fu();return Me.useEffect(()=>{const t=n.current;if(!t||e)return;const r=t.closest("section");if(!(r instanceof HTMLElement))return;const o=new Ip,a=new Xn(50,1,.1,120);a.position.set(0,0,14);const c=new Op({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0);const f=new gu(3.6,2),d=new pu({color:new St("#22c55e"),wireframe:!0,transparent:!0,opacity:.18}),h=new Ni(f,d);o.add(h);const m=new $n,v=new Float32Array(zd*3),p=new Float32Array(zd);for(let H=0;H<zd;H+=1){const K=H*3;v[K]=(Math.random()-.5)*28,v[K+1]=(Math.random()-.5)*14,v[K+2]=(Math.random()-.5)*14,p[H]=.032+Math.random()*.04}m.setAttribute("position",new Fn(v,3));const _=new mu({color:new St("#34d399"),size:.05,transparent:!0,opacity:.55,depthWrite:!1,blending:Oa}),M=new Up(m,_);o.add(M);let b=0,y=0,S=0,T=0,C=0;const R=()=>{const H=r.clientWidth,K=r.clientHeight;c.setSize(H,K,!1),a.aspect=H/Math.max(K,1),a.updateProjectionMatrix()},I=(H,K)=>{const oe=r.getBoundingClientRect(),Q=(H-oe.left)/Math.max(oe.width,1)*2-1,J=(K-oe.top)/Math.max(oe.height,1)*2-1;b=Math.max(-1,Math.min(1,Q)),y=Math.max(-1,Math.min(1,J))},N=H=>{I(H.clientX,H.clientY)},O=H=>{I(H.clientX,H.clientY),C=1},E=()=>{b=0,y=0};R(),window.addEventListener("resize",R),r.addEventListener("pointermove",N),r.addEventListener("pointerdown",O),r.addEventListener("pointerleave",E);const D=new ResizeObserver(()=>R());D.observe(r);let G=0;const F=()=>{S+=(b-S)*.06,T+=(y-T)*.06,C*=.92,h.rotation.y+=.0032+S*.01,h.rotation.x+=.0015+-T*.008,h.position.x=S*.75,h.position.y=-T*.45,M.rotation.y+=.0016+S*.006,M.rotation.x+=7e-4+-T*.004,M.position.x=S*.5,M.position.y=-T*.28,_.opacity=.55+C*.18,_.size=.05+C*.05,d.opacity=.18+C*.12,c.render(o,a),G=window.requestAnimationFrame(F)};return G=window.requestAnimationFrame(F),()=>{window.cancelAnimationFrame(G),window.removeEventListener("resize",R),D.disconnect(),r.removeEventListener("pointermove",N),r.removeEventListener("pointerdown",O),r.removeEventListener("pointerleave",E),f.dispose(),d.dispose(),m.dispose(),_.dispose(),c.dispose()}},[e]),L.jsx("div",{className:"about-three-bg","aria-hidden":!0,children:L.jsx("canvas",{ref:n,className:"h-full w-full"})})}function Lc({items:n,delayOffset:e=0}){return L.jsx("ul",{className:"flex flex-wrap gap-2",children:n.map((t,r)=>L.jsx("li",{children:L.jsx("span",{className:"chip-3d chip-animate chip-hover inline-flex max-w-full rounded-full border border-base-300/80 bg-base-100/90 px-3 py-1.5 text-xs font-medium leading-snug text-base-content backdrop-blur-sm sm:text-sm",style:{animationDelay:`${e+r*.035}s`},children:t})},t))})}function RC({children:n}){return L.jsxs("h3",{className:"flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-primary",children:[L.jsx("span",{className:"inline-block h-px w-6 bg-gradient-to-r from-primary to-transparent","aria-hidden":!0}),n]})}function Nc({title:n,children:e,defaultOpen:t}){return L.jsxs("div",{className:"elev-panel-soft collapse collapse-plus rounded-2xl border border-base-300/80 bg-base-100/70 backdrop-blur-sm",children:[L.jsx("input",{type:"checkbox",defaultChecked:t}),L.jsx("div",{className:"collapse-title",children:L.jsx(RC,{children:n})}),L.jsx("div",{className:"collapse-content pt-0",children:L.jsx("div",{className:"pt-1",children:e})})]})}function PC(){const{about:n}=bn;return L.jsxs("section",{id:"about",className:"full-bleed viewport-section relative isolate overflow-hidden border-y border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/40 px-6 py-12 lg:px-10 sm:py-16 lg:py-24","aria-labelledby":"about-heading",children:[L.jsx(CC,{}),L.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-5xl px-0",children:[L.jsx(vn,{children:L.jsxs("header",{className:"mb-10 text-center sm:mb-12",children:[L.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-primary",children:"Profile"}),L.jsx("h2",{id:"about-heading",className:"section-heading-3d mt-2 font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl",children:"About"}),L.jsx("p",{className:"text-align-justify mt-3 text-base text-base-content/70",children:"Skills, tools, and platforms I use day to day."}),L.jsx("ul",{className:"mt-6 flex flex-wrap justify-center gap-2",children:n.roles.map((e,t)=>L.jsx("li",{children:L.jsx("span",{className:"role-pill inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-primary motion-safe:animate-role-fade sm:text-xs",style:{animationDelay:`${.1+t*.1}s`},children:e})},e))})]})}),L.jsxs("div",{className:"grid gap-5 lg:grid-cols-12 lg:items-start",children:[L.jsx(vn,{delayMs:60,className:"lg:col-span-5",children:L.jsxs("div",{className:"elev-panel relative overflow-hidden rounded-3xl border border-base-300/80 bg-base-100/70 p-5 backdrop-blur-md sm:p-6",children:[L.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent"}),L.jsxs("div",{className:"relative",children:[L.jsxs("div",{className:"flex flex-col gap-4",children:[L.jsx("div",{className:"flex items-start justify-between gap-4",children:L.jsxs("div",{className:"min-w-0",children:[L.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-primary",children:bn.name}),L.jsx("h3",{className:"mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-base-content sm:text-3xl",children:"Quality-first builder"}),L.jsx("p",{className:"text-align-justify mt-3 text-base leading-relaxed text-base-content/80",children:n.intro})]})}),L.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[L.jsxs("div",{className:"rounded-2xl border border-base-300/80 bg-base-100/75 p-3",children:[L.jsx("p",{className:"text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60",children:"Focus"}),L.jsx("p",{className:"mt-1 font-display text-sm font-semibold text-base-content",children:"QA · Automation · Delivery"})]}),L.jsxs("div",{className:"rounded-2xl border border-base-300/80 bg-base-100/75 p-3",children:[L.jsx("p",{className:"text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60",children:"Stack"}),L.jsx("p",{className:"mt-1 font-display text-sm font-semibold text-base-content",children:"Web · Power Platform · Automation"})]})]})]}),L.jsxs("div",{className:"mt-5 grid gap-2",children:[L.jsx("div",{className:"flex flex-wrap justify-center gap-2 sm:justify-start",children:n.roles.slice(0,3).map(e=>L.jsx("span",{className:"inline-flex items-center rounded-full border border-base-300/80 bg-base-100/80 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-base-content/75",children:e},e))}),n.roles.length>3?L.jsxs("p",{className:"text-xs text-base-content/55",children:["+",n.roles.length-3," more roles listed above"]}):null]})]})]})}),L.jsxs("div",{className:"grid gap-4 lg:col-span-7",children:[L.jsx(vn,{delayMs:90,children:L.jsx(Nc,{title:"Skills",defaultOpen:!0,children:L.jsx(Lc,{items:n.skills,delayOffset:0})})}),L.jsx(vn,{delayMs:120,children:L.jsx(Nc,{title:"Tools",children:L.jsx(Lc,{items:n.tools,delayOffset:n.skills.length*.035})})}),L.jsx(vn,{delayMs:150,children:L.jsx(Nc,{title:"Frameworks",children:L.jsx(Lc,{items:n.frameworks,delayOffset:(n.skills.length+n.tools.length)*.035})})}),L.jsx(vn,{delayMs:180,children:L.jsx(Nc,{title:"Microsoft Power Platform",children:L.jsx(Lc,{items:n.powerPlatform,delayOffset:(n.skills.length+n.tools.length+n.frameworks.length)*.035})})})]})]})]})]})}const O_=Me.createContext({});function DC(n){const e=Me.useRef(null);return e.current===null&&(e.current=n()),e.current}const LC=typeof window<"u",NC=LC?Me.useLayoutEffect:Me.useEffect,kp=Me.createContext(null);function Bp(n,e){n.indexOf(e)===-1&&n.push(e)}function tu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Qi=(n,e,t)=>t>e?e:t<n?n:t;let Vp=()=>{};const es={},k_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function B_(n){return typeof n=="object"&&n!==null}const V_=n=>/^0[^.\s]+$/u.test(n);function z_(n){let e;return()=>(e===void 0&&(e=n()),e)}const vi=n=>n,IC=(n,e)=>t=>e(n(t)),$a=(...n)=>n.reduce(IC),za=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class zp{constructor(){this.subscriptions=[]}add(e){return Bp(this.subscriptions,e),()=>tu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ii=n=>n*1e3,gi=n=>n/1e3;function H_(n,e){return e?n*(1e3/e):0}const G_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,UC=1e-7,FC=12;function OC(n,e,t,r,o){let a,c,f=0;do c=e+(t-e)/2,a=G_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>UC&&++f<FC);return c}function Ka(n,e,t,r){if(n===e&&t===r)return vi;const o=a=>OC(a,0,1,n,t);return a=>a===0||a===1?a:G_(o(a),e,r)}const W_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,j_=n=>e=>1-n(1-e),X_=Ka(.33,1.53,.69,.99),Hp=j_(X_),Y_=W_(Hp),q_=n=>n>=1?1:(n*=2)<1?.5*Hp(n):.5*(2-Math.pow(2,-10*(n-1))),Gp=n=>1-Math.sin(Math.acos(n)),$_=j_(Gp),K_=W_(Gp),kC=Ka(.42,0,1,1),BC=Ka(0,0,.58,1),Z_=Ka(.42,0,.58,1),VC=n=>Array.isArray(n)&&typeof n[0]!="number",Q_=n=>Array.isArray(n)&&typeof n[0]=="number",zC={linear:vi,easeIn:kC,easeInOut:Z_,easeOut:BC,circIn:Gp,circInOut:K_,circOut:$_,backIn:Hp,backInOut:Y_,backOut:X_,anticipate:q_},HC=n=>typeof n=="string",Fv=n=>{if(Q_(n)){Vp(n.length===4);const[e,t,r,o]=n;return Ka(e,t,r,o)}else if(HC(n))return zC[n];return n},Ic=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GC(n,e){let t=new Set,r=new Set,o=!1,a=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){c.has(m)&&(h.schedule(m),n()),m(f)}const h={schedule:(m,v=!1,p=!1)=>{const M=p&&o?t:r;return v&&c.add(m),M.add(m),m},cancel:m=>{r.delete(m),c.delete(m)},process:m=>{if(f=m,o){a=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(m))}};return h}const WC=40;function J_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Ic.reduce((C,R)=>(C[R]=GC(a),C),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:m,update:v,preRender:p,render:_,postRender:M}=c,b=()=>{const C=es.useManualTiming,R=C?o.timestamp:performance.now();t=!1,C||(o.delta=r?1e3/60:Math.max(Math.min(R-o.timestamp,WC),1)),o.timestamp=R,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),v.process(o),p.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(b))},y=()=>{t=!0,r=!0,o.isProcessing||n(b)};return{schedule:Ic.reduce((C,R)=>{const I=c[R];return C[R]=(N,O=!1,E=!1)=>(t||y(),I.schedule(N,O,E)),C},{}),cancel:C=>{for(let R=0;R<Ic.length;R++)c[Ic[R]].cancel(C)},state:o,steps:c}}const{schedule:Ft,cancel:ts,state:gn,steps:Hd}=J_(typeof requestAnimationFrame<"u"?requestAnimationFrame:vi,!0);let Wc;function jC(){Wc=void 0}const Nn={now:()=>(Wc===void 0&&Nn.set(gn.isProcessing||es.useManualTiming?gn.timestamp:performance.now()),Wc),set:n=>{Wc=n,queueMicrotask(jC)}},ey=n=>e=>typeof e=="string"&&e.startsWith(n),ty=ey("--"),XC=ey("var(--"),Wp=n=>XC(n)?YC.test(n.split("/*")[0].trim()):!1,YC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ov(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ko={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ha={...ko,transform:n=>Qi(0,1,n)},Uc={...ko,default:1},Na=n=>Math.round(n*1e5)/1e5,jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qC(n){return n==null}const $C=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xp=(n,e)=>t=>!!(typeof t=="string"&&$C.test(t)&&t.startsWith(n)||e&&!qC(t)&&Object.prototype.hasOwnProperty.call(t,e)),ny=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,f]=r.match(jp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},KC=n=>Qi(0,255,n),Gd={...ko,transform:n=>Math.round(KC(n))},Ls={test:Xp("rgb","red"),parse:ny("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Gd.transform(n)+", "+Gd.transform(e)+", "+Gd.transform(t)+", "+Na(Ha.transform(r))+")"};function ZC(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Jh={test:Xp("#"),parse:ZC,transform:Ls.transform},Za=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),qr=Za("deg"),$i=Za("%"),Ge=Za("px"),QC=Za("vh"),JC=Za("vw"),kv={...$i,parse:n=>$i.parse(n)/100,transform:n=>$i.transform(n*100)},Eo={test:Xp("hsl","hue"),parse:ny("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+$i.transform(Na(e))+", "+$i.transform(Na(t))+", "+Na(Ha.transform(r))+")"},rn={test:n=>Ls.test(n)||Jh.test(n)||Eo.test(n),parse:n=>Ls.test(n)?Ls.parse(n):Eo.test(n)?Eo.parse(n):Jh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ls.transform(n):Eo.transform(n),getAnimatableNone:n=>{const e=rn.parse(n);return e.alpha=0,rn.transform(e)}},eR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tR(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(jp))==null?void 0:e.length)||0)+(((t=n.match(eR))==null?void 0:t.length)||0)>0}const iy="number",ry="color",nR="var",iR="var(",Bv="${}",rR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function No(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const f=e.replace(rR,d=>(rn.test(d)?(r.color.push(a),o.push(ry),t.push(rn.parse(d))):d.startsWith(iR)?(r.var.push(a),o.push(nR),t.push(d)):(r.number.push(a),o.push(iy),t.push(parseFloat(d))),++a,Bv)).split(Bv);return{values:t,split:f,indexes:r,types:o}}function sR(n){return No(n).values}function sy({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===iy?o+=Na(r[a]):c===ry?o+=rn.transform(r[a]):o+=r[a]}return o}}function oR(n){return sy(No(n))}const aR=n=>typeof n=="number"?0:rn.test(n)?rn.getAnimatableNone(n):n,lR=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:aR(n);function cR(n){const e=No(n);return sy(e)(e.values.map((r,o)=>lR(r,e.split[o])))}const Li={test:tR,parse:sR,createTransformer:oR,getAnimatableNone:cR};function Wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function uR({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=Wd(d,f,n+1/3),a=Wd(d,f,n),c=Wd(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function nu(n,e){return t=>t>0?e:n}const Ht=(n,e,t)=>n+(e-n)*t,jd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},fR=[Jh,Ls,Eo],dR=n=>fR.find(e=>e.test(n));function Vv(n){const e=dR(n);if(!e)return!1;let t=e.parse(n);return e===Eo&&(t=uR(t)),t}const zv=(n,e)=>{const t=Vv(n),r=Vv(e);if(!t||!r)return nu(n,e);const o={...t};return a=>(o.red=jd(t.red,r.red,a),o.green=jd(t.green,r.green,a),o.blue=jd(t.blue,r.blue,a),o.alpha=Ht(t.alpha,r.alpha,a),Ls.transform(o))},ep=new Set(["none","hidden"]);function hR(n,e){return ep.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function pR(n,e){return t=>Ht(n,e,t)}function Yp(n){return typeof n=="number"?pR:typeof n=="string"?Wp(n)?nu:rn.test(n)?zv:vR:Array.isArray(n)?oy:typeof n=="object"?rn.test(n)?zv:mR:nu}function oy(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Yp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function mR(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Yp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function gR(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],f=n.values[c]??0;t[o]=f,r[a]++}return t}const vR=(n,e)=>{const t=Li.createTransformer(e),r=No(n),o=No(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?ep.has(n)&&!o.values.length||ep.has(e)&&!r.values.length?hR(n,e):$a(oy(gR(r,o),o.values),t):nu(n,e)};function ay(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ht(n,e,t):Yp(n)(n,e)}const xR=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ft.update(e,t),stop:()=>ts(e),now:()=>gn.isProcessing?gn.timestamp:Nn.now()}},ly=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},iu=2e4;function qp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<iu;)e+=t,r=n.next(e);return e>=iu?1/0:e}function _R(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(qp(r),iu);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:gi(o)}}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function tp(n,e){return n*Math.sqrt(1-e*e)}const yR=12;function SR(n,e,t){let r=t;for(let o=1;o<yR;o++)r=r-n(r)/e(r);return r}const Xd=.001;function MR({duration:n=qt.duration,bounce:e=qt.bounce,velocity:t=qt.velocity,mass:r=qt.mass}){let o,a,c=1-e;c=Qi(qt.minDamping,qt.maxDamping,c),n=Qi(qt.minDuration,qt.maxDuration,gi(n)),c<1?(o=h=>{const m=h*c,v=m*n,p=m-t,_=tp(h,c),M=Math.exp(-v);return Xd-p/_*M},a=h=>{const v=h*c*n,p=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),b=tp(Math.pow(h,2),c);return(-o(h)+Xd>0?-1:1)*((p-_)*M)/b}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-Xd+m*v},a=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const f=5/n,d=SR(o,a,f);if(n=ii(n),isNaN(d))return{stiffness:qt.stiffness,damping:qt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const ER=["duration","bounce"],TR=["stiffness","damping","mass"];function Hv(n,e){return e.some(t=>n[t]!==void 0)}function wR(n){let e={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...n};if(!Hv(n,TR)&&Hv(n,ER))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Qi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:qt.mass,stiffness:o,damping:a}}else{const t=MR({...n,velocity:0});e={...e,...t,mass:qt.mass},e.isResolvedFromDuration=!0}return e}function ru(n=qt.visualDuration,e=qt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],f={done:!1,value:a},{stiffness:d,damping:h,mass:m,duration:v,velocity:p,isResolvedFromDuration:_}=wR({...t,velocity:-gi(t.velocity||0)}),M=p||0,b=h/(2*Math.sqrt(d*m)),y=c-a,S=gi(Math.sqrt(d/m)),T=Math.abs(y)<5;r||(r=T?qt.restSpeed.granular:qt.restSpeed.default),o||(o=T?qt.restDelta.granular:qt.restDelta.default);let C,R,I,N,O,E;if(b<1)I=tp(S,b),N=(M+b*S*y)/I,C=G=>{const F=Math.exp(-b*S*G);return c-F*(N*Math.sin(I*G)+y*Math.cos(I*G))},O=b*S*N+y*I,E=b*S*y-N*I,R=G=>Math.exp(-b*S*G)*(O*Math.sin(I*G)+E*Math.cos(I*G));else if(b===1){C=F=>c-Math.exp(-S*F)*(y+(M+S*y)*F);const G=M+S*y;R=F=>Math.exp(-S*F)*(S*G*F-M)}else{const G=S*Math.sqrt(b*b-1);C=oe=>{const Q=Math.exp(-b*S*oe),J=Math.min(G*oe,300);return c-Q*((M+b*S*y)*Math.sinh(J)+G*y*Math.cosh(J))/G};const F=(M+b*S*y)/G,H=b*S*F-y*G,K=b*S*y-F*G;R=oe=>{const Q=Math.exp(-b*S*oe),J=Math.min(G*oe,300);return Q*(H*Math.sinh(J)+K*Math.cosh(J))}}const D={calculatedDuration:_&&v||null,velocity:G=>ii(R(G)),next:G=>{if(!_&&b<1){const H=Math.exp(-b*S*G),K=Math.sin(I*G),oe=Math.cos(I*G),Q=c-H*(N*K+y*oe),J=ii(H*(O*K+E*oe));return f.done=Math.abs(J)<=r&&Math.abs(c-Q)<=o,f.value=f.done?c:Q,f}const F=C(G);if(_)f.done=G>=v;else{const H=ii(R(G));f.done=Math.abs(H)<=r&&Math.abs(c-F)<=o}return f.value=f.done?c:F,f},toString:()=>{const G=Math.min(qp(D),iu),F=ly(H=>D.next(G*H).value,G,30);return G+"ms "+F},toTransition:()=>{}};return D}ru.applyToOptions=n=>{const e=_R(n,100,ru);return n.ease=e.ease,n.duration=ii(e.duration),n.type="keyframes",n};const bR=5;function cy(n,e,t){const r=Math.max(e-bR,0);return H_(t-n(r),e-r)}function np({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],p={done:!1,value:v},_=E=>f!==void 0&&E<f||d!==void 0&&E>d,M=E=>f===void 0?d:d===void 0||Math.abs(f-E)<Math.abs(d-E)?f:d;let b=t*e;const y=v+b,S=c===void 0?y:c(y);S!==y&&(b=S-v);const T=E=>-b*Math.exp(-E/r),C=E=>S+T(E),R=E=>{const D=T(E),G=C(E);p.done=Math.abs(D)<=h,p.value=p.done?S:G};let I,N;const O=E=>{_(p.value)&&(I=E,N=ru({keyframes:[p.value,M(p.value)],velocity:cy(C,E,p.value),damping:o,stiffness:a,restDelta:h,restSpeed:m}))};return O(0),{calculatedDuration:null,next:E=>{let D=!1;return!N&&I===void 0&&(D=!0,R(E),O(E)),I!==void 0&&E>=I?N.next(E-I):(!D&&R(E),p)}}}function AR(n,e,t){const r=[],o=t||es.mix||ay,a=n.length-1;for(let c=0;c<a;c++){let f=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||vi:e;f=$a(d,f)}r.push(f)}return r}function CR(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Vp(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=AR(e,r,o),d=f.length,h=m=>{if(c&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const p=za(n[v],n[v+1],m);return f[v](p)};return t?m=>h(Qi(n[0],n[a-1],m)):h}function RR(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=za(0,e,r);n.push(Ht(t,1,o))}}function PR(n){const e=[0];return RR(e,n.length-1),e}function DR(n,e){return n.map(t=>t*e)}function LR(n,e){return n.map(()=>e||Z_).splice(0,n.length-1)}function Ia({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=VC(r)?r.map(Fv):Fv(r),a={done:!1,value:e[0]},c=DR(t&&t.length===e.length?t:PR(e),n),f=CR(c,e,{ease:Array.isArray(o)?o:LR(e,o)});return{calculatedDuration:n,next:d=>(a.value=f(d),a.done=d>=n,a)}}const NR=n=>n!==null;function yu(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(NR),f=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!f||r===void 0?a[f]:r}const IR={decay:np,inertia:np,tween:Ia,keyframes:Ia,spring:ru};function uy(n){typeof n.type=="string"&&(n.type=IR[n.type])}class $p{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const UR=n=>n/100;class su extends $p{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Nn.now()&&this.tick(Nn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;uy(e);const{type:t=Ia,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:f}=e;const d=t||Ia;d!==Ia&&typeof f[0]!="number"&&(this.mixKeyframes=$a(UR,ay(f[0],f[1])),f=[0,100]);const h=d({...e,keyframes:f});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=qp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:p,repeatDelay:_,type:M,onUpdate:b,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,R=r;if(v){const E=Math.min(this.currentTime,o)/f;let D=Math.floor(E),G=E%1;!G&&E>=1&&(G=1),G===1&&D--,D=Math.min(D,v+1),!!(D%2)&&(p==="reverse"?(G=1-G,_&&(G-=_/f)):p==="mirror"&&(R=c)),C=Qi(0,1,G)*f}let I;T?(this.delayState.value=m[0],I=this.delayState):I=R.next(C),a&&!T&&(I.value=a(I.value));let{done:N}=I;!T&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return O&&M!==np&&(I.value=yu(m,this.options,y,this.speed)),b&&b(I.value),O&&this.finish(),I}then(e,t){return this.finished.then(e,t)}get duration(){return gi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(this.currentTime)}set time(e){e=ii(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return cy(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Nn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=gi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=xR,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Nn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function FR(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ns=n=>n*180/Math.PI,ip=n=>{const e=Ns(Math.atan2(n[1],n[0]));return rp(e)},OR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ip,rotateZ:ip,skewX:n=>Ns(Math.atan(n[1])),skewY:n=>Ns(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},rp=n=>(n=n%360,n<0&&(n+=360),n),Gv=ip,Wv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),jv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),kR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Wv,scaleY:jv,scale:n=>(Wv(n)+jv(n))/2,rotateX:n=>rp(Ns(Math.atan2(n[6],n[5]))),rotateY:n=>rp(Ns(Math.atan2(-n[2],n[0]))),rotateZ:Gv,rotate:Gv,skewX:n=>Ns(Math.atan(n[4])),skewY:n=>Ns(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function sp(n){return n.includes("scale")?1:0}function op(n,e){if(!n||n==="none")return sp(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=kR,o=t;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=OR,o=f}if(!o)return sp(e);const a=r[e],c=o[1].split(",").map(VR);return typeof a=="function"?a(c):c[a]}const BR=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return op(t,e)};function VR(n){return parseFloat(n.trim())}const Bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vo=new Set(Bo),Xv=n=>n===ko||n===Ge,zR=new Set(["x","y","z"]),HR=Bo.filter(n=>!zR.has(n));function GR(n){const e=[];return HR.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Qr={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>op(e,"x"),y:(n,{transform:e})=>op(e,"y")};Qr.translateX=Qr.x;Qr.translateY=Qr.y;const Is=new Set;let ap=!1,lp=!1,cp=!1;function fy(){if(lp){const n=Array.from(Is).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=GR(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var f;(f=r.getValue(a))==null||f.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}lp=!1,ap=!1,Is.forEach(n=>n.complete(cp)),Is.clear()}function dy(){Is.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(lp=!0)})}function WR(){cp=!0,dy(),fy(),cp=!1}class Kp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Is.add(this),ap||(ap=!0,Ft.read(dy),Ft.resolveKeyframes(fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const f=r.readValue(t,c);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}FR(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Is.delete(this)}cancel(){this.state==="scheduled"&&(Is.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const jR=n=>n.startsWith("--");function hy(n,e,t){jR(e)?n.style.setProperty(e,t):n.style[e]=t}const XR={};function py(n,e){const t=z_(n);return()=>XR[e]??t()}const YR=py(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),my=py(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),La=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Yv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:La([0,.65,.55,1]),circOut:La([.55,0,1,.45]),backIn:La([.31,.01,.66,-.59]),backOut:La([.33,1.53,.69,.99])};function gy(n,e){if(n)return typeof n=="function"?my()?ly(n,e):"ease-out":Q_(n)?La(n):Array.isArray(n)?n.map(t=>gy(t,e)||Yv.easeOut):Yv[n]}function qR(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:f="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const v=gy(f,o);Array.isArray(v)&&(m.easing=v);const p={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(p.pseudoElement=h),n.animate(m,p)}function vy(n){return typeof n=="function"&&"applyToOptions"in n}function $R({type:n,...e}){return vy(n)&&my()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class xy extends $p{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Vp(typeof e.type!="string");const h=$R(e);this.animation=qR(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=yu(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(m),hy(t,r,m),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return gi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ii(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&YR()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),vi):o(this)}}const _y={anticipate:q_,backInOut:Y_,circInOut:K_};function KR(n){return n in _y}function ZR(n){typeof n.ease=="string"&&KR(n.ease)&&(n.ease=_y[n.ease])}const Yd=10;class QR extends xy{constructor(e){ZR(e),uy(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const f=new su({...c,autoplay:!1}),d=Math.max(Yd,Nn.now()-this.startTime),h=Qi(0,Yd,d-Yd),m=f.sample(d).value,{name:v}=this.options;a&&v&&hy(a,v,m),t.setWithVelocity(f.sample(Math.max(0,d-h)).value,m,h),f.stop()}}const qv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Li.test(n)||n==="0")&&!n.startsWith("url("));function JR(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function eP(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=qv(o,e),f=qv(a,e);return!c||!f?!1:JR(n)||(t==="spring"||vy(t))&&r}function up(n){n.duration=0,n.type="keyframes"}const yy=new Set(["opacity","clipPath","filter","transform"]),tP=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function nP(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&tP.test(n[e]))return!0;return!1}const iP=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),rP=z_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sP(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:f}=n;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=e.owner.getProps();return rP()&&t&&(yy.has(t)||iP.has(t)&&nP(f))&&(t!=="transform"||!m)&&!h&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const oP=40;class aP extends $p{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:f,name:d,motionValue:h,element:m,...v}){var M;super(),this.stop=()=>{var b,y;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Nn.now();const p={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:m,...v},_=(m==null?void 0:m.KeyframeResolver)||Kp;this.keyframeResolver=new _(f,(b,y,S)=>this.onKeyframesResolved(b,y,p,!S),d,h,m),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var S,T;this.keyframeResolver=void 0;const{name:a,type:c,velocity:f,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Nn.now();let v=!0;eP(e,a,c,f)||(v=!1,(es.instantAnimations||!d)&&(m==null||m(yu(e,r,t))),e[0]=e[e.length-1],up(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>oP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&sP(_),b=(T=(S=_.motionValue)==null?void 0:S.owner)==null?void 0:T.current;let y;if(M)try{y=new QR({..._,element:b})}catch{y=new su(_)}else y=new su(_);y.finished.then(()=>{this.notifyFinished()}).catch(vi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),WR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Sy(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),c=n.size,f=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:f-a*r}const lP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function cP(n){const e=lP.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function My(n,e,t=1){const[r,o]=cP(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return k_(c)?parseFloat(c):c}return Wp(o)?My(o,e,t+1):o}const uP={type:"spring",stiffness:500,damping:25,restSpeed:10},fP=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),dP={type:"keyframes",duration:.8},hP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pP=(n,{keyframes:e})=>e.length>2?dP:Vo.has(n)?n.startsWith("scale")?fP(e[1]):uP:hP;function Ey(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function Zp(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?Ey(t,n):t}const mP=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function gP(n){for(const e in n)if(!mP.has(e))return!0;return!1}const Qp=(n,e,t,r={},o,a)=>c=>{const f=Zp(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ii(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:p=>{e.set(p),f.onUpdate&&f.onUpdate(p)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:a?void 0:o};gP(f)||Object.assign(m,pP(n,m)),m.duration&&(m.duration=ii(m.duration)),m.repeatDelay&&(m.repeatDelay=ii(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(up(m),m.delay===0&&(v=!0)),(es.instantAnimations||es.skipAnimations||o!=null&&o.shouldSkipAnimations)&&(v=!0,up(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,v&&!a&&e.get()!==void 0){const p=yu(m.keyframes,f);if(p!==void 0){Ft.update(()=>{m.onUpdate(p),m.onComplete()});return}}return f.isSync?new su(m):new aP(m)};function $v(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Jp(n,e,t,r){if(typeof e=="function"){const[o,a]=$v(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=$v(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Us(n,e,t){const r=n.getProps();return Jp(r,e,t!==void 0?t:r.custom,n)}const Ty=new Set(["width","height","top","left","right","bottom",...Bo]),Kv=30,vP=n=>!isNaN(parseFloat(n));class xP{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Nn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Nn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=vP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new zp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ft.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Nn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Kv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Kv);return H_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Io(n,e){return new xP(n,e)}const fp=n=>Array.isArray(n);function _P(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Io(t))}function yP(n){return fp(n)?n[n.length-1]||0:n}function SP(n,e){const t=Us(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const f=yP(a[c]);_P(n,c,f)}}const _n=n=>!!(n&&n.getVelocity);function MP(n){return!!(_n(n)&&n.add)}function dp(n,e){const t=n.getValue("willChange");if(MP(t))return t.add(e);if(!t&&es.WillChange){const r=new es.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function em(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const EP="framerAppearId",wy="data-"+em(EP);function by(n){return n.props[wy]}function TP({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Ay(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...f}=e;const d=n.getDefaultTransition();a=a?Ey(a,d):d;const h=a==null?void 0:a.reduceMotion;r&&(a=r);const m=[],v=o&&n.animationState&&n.animationState.getState()[o];for(const p in f){const _=n.getValue(p,n.latestValues[p]??null),M=f[p];if(M===void 0||v&&TP(v,p))continue;const b={delay:t,...Zp(a||{},p)},y=_.get();if(y!==void 0&&!_.isAnimating()&&!Array.isArray(M)&&M===y&&!b.velocity){Ft.update(()=>_.set(M));continue}let S=!1;if(window.MotionHandoffAnimation){const R=by(n);if(R){const I=window.MotionHandoffAnimation(R,p,Ft);I!==null&&(b.startTime=I,S=!0)}}dp(n,p);const T=h??n.shouldReduceMotion;_.start(Qp(p,_,M,T&&Ty.has(p)?{type:!1}:b,n,S));const C=_.animation;C&&m.push(C)}if(c){const p=()=>Ft.update(()=>{c&&SP(n,c)});m.length?Promise.all(m).then(p):p()}return m}function hp(n,e,t={}){var d;const r=Us(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(Ay(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:p}=o;return wP(n,e,h,m,v,p,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[h,m]=f==="beforeChildren"?[a,c]:[c,a];return h().then(()=>m())}else return Promise.all([a(),c(t.delay)])}function wP(n,e,t=0,r=0,o=0,a=1,c){const f=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),f.push(hp(d,e,{...c,delay:t+(typeof r=="function"?0:r)+Sy(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function bP(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>hp(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=hp(n,e,t);else{const o=typeof e=="function"?Us(n,e,t.custom):e;r=Promise.all(Ay(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const AP={test:n=>n==="auto",parse:n=>n},Cy=n=>e=>e.test(n),Ry=[ko,Ge,$i,qr,JC,QC,AP],Zv=n=>Ry.find(Cy(n));function CP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||V_(n):!0}const RP=new Set(["brightness","contrast","saturate","opacity"]);function PP(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(jp)||[];if(!r)return n;const o=t.replace(r,"");let a=RP.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const DP=/\b([a-z-]*)\(.*?\)/gu,pp={...Li,getAnimatableNone:n=>{const e=n.match(DP);return e?e.map(PP).join(" "):n}},mp={...Li,getAnimatableNone:n=>{const e=Li.parse(n);return Li.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Qv={...ko,transform:Math.round},LP={rotate:qr,rotateX:qr,rotateY:qr,rotateZ:qr,scale:Uc,scaleX:Uc,scaleY:Uc,scaleZ:Uc,skew:qr,skewX:qr,skewY:qr,distance:Ge,translateX:Ge,translateY:Ge,translateZ:Ge,x:Ge,y:Ge,z:Ge,perspective:Ge,transformPerspective:Ge,opacity:Ha,originX:kv,originY:kv,originZ:Ge},tm={borderWidth:Ge,borderTopWidth:Ge,borderRightWidth:Ge,borderBottomWidth:Ge,borderLeftWidth:Ge,borderRadius:Ge,borderTopLeftRadius:Ge,borderTopRightRadius:Ge,borderBottomRightRadius:Ge,borderBottomLeftRadius:Ge,width:Ge,maxWidth:Ge,height:Ge,maxHeight:Ge,top:Ge,right:Ge,bottom:Ge,left:Ge,inset:Ge,insetBlock:Ge,insetBlockStart:Ge,insetBlockEnd:Ge,insetInline:Ge,insetInlineStart:Ge,insetInlineEnd:Ge,padding:Ge,paddingTop:Ge,paddingRight:Ge,paddingBottom:Ge,paddingLeft:Ge,paddingBlock:Ge,paddingBlockStart:Ge,paddingBlockEnd:Ge,paddingInline:Ge,paddingInlineStart:Ge,paddingInlineEnd:Ge,margin:Ge,marginTop:Ge,marginRight:Ge,marginBottom:Ge,marginLeft:Ge,marginBlock:Ge,marginBlockStart:Ge,marginBlockEnd:Ge,marginInline:Ge,marginInlineStart:Ge,marginInlineEnd:Ge,fontSize:Ge,backgroundPositionX:Ge,backgroundPositionY:Ge,...LP,zIndex:Qv,fillOpacity:Ha,strokeOpacity:Ha,numOctaves:Qv},NP={...tm,color:rn,backgroundColor:rn,outlineColor:rn,fill:rn,stroke:rn,borderColor:rn,borderTopColor:rn,borderRightColor:rn,borderBottomColor:rn,borderLeftColor:rn,filter:pp,WebkitFilter:pp,mask:mp,WebkitMask:mp},Py=n=>NP[n],IP=new Set([pp,mp]);function Dy(n,e){let t=Py(n);return IP.has(t)||(t=Li),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const UP=new Set(["auto","none","0"]);function FP(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!UP.has(a)&&No(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Dy(t,o)}class OP extends Kp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),Wp(v))){const p=My(v,t.current);p!==void 0&&(e[m]=p),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Ty.has(r)||e.length!==2)return;const[o,a]=e,c=Zv(o),f=Zv(a),d=Ov(o),h=Ov(a);if(d!==h&&Qr[r]){this.needsMeasurement=!0;return}if(c!==f)if(Xv(c)&&Xv(f))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else Qr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||CP(e[o]))&&r.push(o);r.length&&FP(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=Qr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function Ly(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=(t==null?void 0:t[n])??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Ny=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function kP(n){return B_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:nm}=J_(queueMicrotask,!1),Ri={x:!1,y:!1};function Iy(){return Ri.x||Ri.y}function BP(n){return n==="x"||n==="y"?Ri[n]?null:(Ri[n]=!0,()=>{Ri[n]=!1}):Ri.x||Ri.y?null:(Ri.x=Ri.y=!0,()=>{Ri.x=Ri.y=!1})}function Uy(n,e){const t=Ly(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function VP(n){return!(n.pointerType==="touch"||Iy())}function zP(n,e,t={}){const[r,o,a]=Uy(n,t);return r.forEach(c=>{let f=!1,d=!1,h;const m=()=>{c.removeEventListener("pointerleave",M)},v=y=>{h&&(h(y),h=void 0),m()},p=y=>{f=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),d&&(d=!1,v(y))},_=()=>{f=!0,window.addEventListener("pointerup",p,o),window.addEventListener("pointercancel",p,o)},M=y=>{if(y.pointerType!=="touch"){if(f){d=!0;return}v(y)}},b=y=>{if(!VP(y))return;d=!1;const S=e(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",b,o),c.addEventListener("pointerdown",_,o)}),a}const Fy=(n,e)=>e?n===e?!0:Fy(n,e.parentElement):!1,im=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,HP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function GP(n){return HP.has(n.tagName)||n.isContentEditable===!0}const WP=new Set(["INPUT","SELECT","TEXTAREA"]);function jP(n){return WP.has(n.tagName)||n.isContentEditable===!0}const jc=new WeakSet;function Jv(n){return e=>{e.key==="Enter"&&n(e)}}function qd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const XP=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Jv(()=>{if(jc.has(t))return;qd(t,"down");const o=Jv(()=>{qd(t,"up")}),a=()=>qd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function ex(n){return im(n)&&!Iy()}const tx=new WeakSet;function YP(n,e,t={}){const[r,o,a]=Uy(n,t),c=f=>{const d=f.currentTarget;if(!ex(f)||tx.has(f))return;jc.add(d),t.stopPropagation&&tx.add(f);const h=e(d,f),m=(_,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",p),jc.has(d)&&jc.delete(d),ex(_)&&typeof h=="function"&&h(_,{success:M})},v=_=>{m(_,d===window||d===document||t.useGlobalTarget||Fy(d,_.target))},p=_=>{m(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",p,o)};return r.forEach(f=>{(t.useGlobalTarget?window:f).addEventListener("pointerdown",c,o),kP(f)&&(f.addEventListener("focus",h=>XP(h,o)),!GP(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),a}function rm(n){return B_(n)&&"ownerSVGElement"in n}const Xc=new WeakMap;let $r;const Oy=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:rm(r)&&"getBBox"in r?r.getBBox()[e]:r[t],qP=Oy("inline","width","offsetWidth"),$P=Oy("block","height","offsetHeight");function KP({target:n,borderBoxSize:e}){var t;(t=Xc.get(n))==null||t.forEach(r=>{r(n,{get width(){return qP(n,e)},get height(){return $P(n,e)}})})}function ZP(n){n.forEach(KP)}function QP(){typeof ResizeObserver>"u"||($r=new ResizeObserver(ZP))}function JP(n,e){$r||QP();const t=Ly(n);return t.forEach(r=>{let o=Xc.get(r);o||(o=new Set,Xc.set(r,o)),o.add(e),$r==null||$r.observe(r)}),()=>{t.forEach(r=>{const o=Xc.get(r);o==null||o.delete(e),o!=null&&o.size||$r==null||$r.unobserve(r)})}}const Yc=new Set;let To;function e3(){To=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Yc.forEach(e=>e(n))},window.addEventListener("resize",To)}function t3(n){return Yc.add(n),To||e3(),()=>{Yc.delete(n),!Yc.size&&typeof To=="function"&&(window.removeEventListener("resize",To),To=void 0)}}function nx(n,e){return typeof n=="function"?t3(n):JP(n,e)}function n3(n){return rm(n)&&n.tagName==="svg"}const i3=[...Ry,rn,Li],r3=n=>i3.find(Cy(n)),ix=()=>({translate:0,scale:1,origin:0,originPoint:0}),wo=()=>({x:ix(),y:ix()}),rx=()=>({min:0,max:0}),an=()=>({x:rx(),y:rx()}),s3=new WeakMap;function Su(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ga(n){return typeof n=="string"||Array.isArray(n)}const sm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],om=["initial",...sm];function Mu(n){return Su(n.animate)||om.some(e=>Ga(n[e]))}function ky(n){return!!(Mu(n)||n.variants)}function o3(n,e,t){for(const r in e){const o=e[r],a=t[r];if(_n(o))n.addValue(r,o);else if(_n(a))n.addValue(r,Io(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Io(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const ou={current:null},am={current:!1},a3=typeof window<"u";function By(){if(am.current=!0,!!a3)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ou.current=n.matches;n.addEventListener("change",e),e()}else ou.current=!1}const sx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let au={};function Vy(n){au=n}function l3(){return au}class c3{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:f},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Kp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Nn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ft.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Mu(t),this.isVariantNode=ky(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...p}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in p){const M=p[_];h[_]!==void 0&&_n(M)&&M.set(h[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,s3.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(am.current||By(),this.shouldReduceMotion=ou.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),ts(this.notifyUpdate),ts(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&yy.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:f,times:d,ease:h,duration:m}=t.accelerate,v=new xy({element:this.current,name:e,keyframes:f,times:d,ease:h,duration:ii(m)}),p=c(v);this.valueSubscriptions.set(e,()=>{p(),v.cancel()});return}const r=Vo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ft.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in au){const t=au[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<sx.length;r++){const o=sx[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=o3(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Io(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(k_(r)||V_(r))?r=parseFloat(r):!r3(r)&&Li.test(t)&&(r=Dy(e,t)),this.setBaseTarget(e,_n(r)?r.get():r)),_n(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=Jp(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!_n(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new zp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){nm.render(this.render)}}class zy extends c3{constructor(){super(...arguments),this.KeyframeResolver=OP}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_n(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ns{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Hy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function u3({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function f3(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function $d(n){return n===void 0||n===1}function gp({scale:n,scaleX:e,scaleY:t}){return!$d(n)||!$d(e)||!$d(t)}function As(n){return gp(n)||Gy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Gy(n){return ox(n.x)||ox(n.y)}function ox(n){return n&&n!=="0%"}function lu(n,e,t){const r=n-t,o=e*r;return t+o}function ax(n,e,t,r,o){return o!==void 0&&(n=lu(n,o,r)),lu(n,t,r)+e}function vp(n,e=0,t=1,r,o){n.min=ax(n.min,e,t,r,o),n.max=ax(n.max,e,t,r,o)}function Wy(n,{x:e,y:t}){vp(n.x,e.translate,e.scale,e.originPoint),vp(n.y,t.translate,t.scale,t.originPoint)}const lx=.999999999999,cx=1.0000000000001;function d3(n,e,t,r=!1){var f;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let d=0;d<o;d++){a=t[d],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Gi(n.x,-a.scroll.offset.x),Gi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Wy(n,c)),r&&As(a.latestValues)&&qc(n,a.latestValues,(f=a.layout)==null?void 0:f.layoutBox))}e.x<cx&&e.x>lx&&(e.x=1),e.y<cx&&e.y>lx&&(e.y=1)}function Gi(n,e){n.min+=e,n.max+=e}function ux(n,e,t,r,o=.5){const a=Ht(n.min,n.max,o);vp(n,e,t,a,r)}function fx(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function qc(n,e,t){const r=t??n;ux(n.x,fx(e.x,r.x),e.scaleX,e.scale,e.originX),ux(n.y,fx(e.y,r.y),e.scaleY,e.scale,e.originY)}function jy(n,e){return Hy(f3(n.getBoundingClientRect(),e))}function h3(n,e,t){const r=jy(n,t),{scroll:o}=e;return o&&(Gi(r.x,o.offset.x),Gi(r.y,o.offset.y)),r}const p3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},m3=Bo.length;function g3(n,e,t){let r="",o=!0;for(let a=0;a<m3;a++){const c=Bo[a],f=n[c];if(f===void 0)continue;let d=!0;if(typeof f=="number")d=f===(c.startsWith("scale")?1:0);else{const h=parseFloat(f);d=c.startsWith("scale")?h===1:h===0}if(!d||t){const h=Ny(f,tm[c]);if(!d){o=!1;const m=p3[c]||c;r+=`${m}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function lm(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,f=!1;for(const d in e){const h=e[d];if(Vo.has(d)){c=!0;continue}else if(ty(d)){o[d]=h;continue}else{const m=Ny(h,tm[d]);d.startsWith("origin")?(f=!0,a[d]=m):r[d]=m}}if(e.transform||(c||t?r.transform=g3(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=a;r.transformOrigin=`${d} ${h} ${m}`}}function Xy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function dx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ca={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ge.test(n))n=parseFloat(n);else return n;const t=dx(n,e.target.x),r=dx(n,e.target.y);return`${t}% ${r}%`}},v3={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Li.parse(n);if(o.length>5)return r;const a=Li.createTransformer(n),c=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=f,o[1+c]/=d;const h=Ht(f,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},xp={borderRadius:{...Ca,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ca,borderTopRightRadius:Ca,borderBottomLeftRadius:Ca,borderBottomRightRadius:Ca,boxShadow:v3};function Yy(n,{layout:e,layoutId:t}){return Vo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!xp[n]||n==="opacity")}function cm(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const f in r)(_n(r[f])||o&&_n(o[f])||Yy(f,n)||((c=t==null?void 0:t.getValue(f))==null?void 0:c.liveStyle)!==void 0)&&(a[f]=r[f]);return a}function x3(n){return window.getComputedStyle(n)}class _3 extends zy{constructor(){super(...arguments),this.type="html",this.renderInstance=Xy}readValueFromInstance(e,t){var r;if(Vo.has(t))return(r=this.projection)!=null&&r.isProjecting?sp(t):BR(e,t);{const o=x3(e),a=(ty(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return jy(e,t)}build(e,t,r){lm(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return cm(e,t,r)}}const y3={offset:"stroke-dashoffset",array:"stroke-dasharray"},S3={offset:"strokeDashoffset",array:"strokeDasharray"};function M3(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?y3:S3;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const E3=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...f},d,h,m){if(lm(n,f,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:p}=n;v.transform&&(p.transform=v.transform,delete v.transform),(p.transform||v.transformOrigin)&&(p.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),p.transform&&(p.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete v.transformBox);for(const _ of E3)v[_]!==void 0&&(p[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&M3(v,o,a,c,!1)}const $y=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ky=n=>typeof n=="string"&&n.toLowerCase()==="svg";function T3(n,e,t,r){Xy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute($y.has(o)?o:em(o),e.attrs[o])}function Zy(n,e,t){const r=cm(n,e,t);for(const o in n)if(_n(n[o])||_n(e[o])){const a=Bo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class w3 extends zy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vo.has(t)){const r=Py(t);return r&&r.default||0}return t=$y.has(t)?t:em(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Zy(e,t,r)}build(e,t,r){qy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){T3(e,t,r,o)}mount(e){this.isSVGTag=Ky(e.tagName),super.mount(e)}}const b3=om.length;function Qy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Qy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<b3;t++){const r=om[t],o=n.props[r];(Ga(o)||o===!1)&&(e[r]=o)}return e}function Jy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const A3=[...sm].reverse(),C3=sm.length;function R3(n){return e=>Promise.all(e.map(({animation:t,options:r})=>bP(n,t,r)))}function P3(n){let e=R3(n),t=hx(),r=!0,o=!1;const a=h=>(m,v)=>{var _;const p=Us(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(p){const{transition:M,transitionEnd:b,...y}=p;m={...m,...y,...b}}return m};function c(h){e=h(n)}function f(h){const{props:m}=n,v=Qy(n.parent)||{},p=[],_=new Set;let M={},b=1/0;for(let S=0;S<C3;S++){const T=A3[S],C=t[T],R=m[T]!==void 0?m[T]:v[T],I=Ga(R),N=T===h?C.isActive:null;N===!1&&(b=S);let O=R===v[T]&&R!==m[T]&&I;if(O&&(r||o)&&n.manuallyAnimateOnMount&&(O=!1),C.protectedKeys={...M},!C.isActive&&N===null||!R&&!C.prevProp||Su(R)||typeof R=="boolean")continue;if(T==="exit"&&C.isActive&&N!==!0){C.prevResolvedValues&&(M={...M,...C.prevResolvedValues});continue}const E=D3(C.prevProp,R);let D=E||T===h&&C.isActive&&!O&&I||S>b&&I,G=!1;const F=Array.isArray(R)?R:[R];let H=F.reduce(a(T),{});N===!1&&(H={});const{prevResolvedValues:K={}}=C,oe={...K,...H},Q=$=>{D=!0,_.has($)&&(G=!0,_.delete($)),C.needsAnimating[$]=!0;const ne=n.getValue($);ne&&(ne.liveStyle=!1)};for(const $ in oe){const ne=H[$],ue=K[$];if(M.hasOwnProperty($))continue;let B=!1;fp(ne)&&fp(ue)?B=!Jy(ne,ue):B=ne!==ue,B?ne!=null?Q($):_.add($):ne!==void 0&&_.has($)?Q($):C.protectedKeys[$]=!0}C.prevProp=R,C.prevResolvedValues=H,C.isActive&&(M={...M,...H}),(r||o)&&n.blockInitialAnimation&&(D=!1);const J=O&&E;D&&(!J||G)&&p.push(...F.map($=>{const ne={type:T};if(typeof $=="string"&&(r||o)&&!J&&n.manuallyAnimateOnMount&&n.parent){const{parent:ue}=n,B=Us(ue,$);if(ue.enteringChildren&&B){const{delayChildren:Z}=B.transition||{};ne.delay=Sy(ue.enteringChildren,n,Z)}}return{animation:$,options:ne}}))}if(_.size){const S={};if(typeof m.initial!="boolean"){const T=Us(n,Array.isArray(m.initial)?m.initial[0]:m.initial);T&&T.transition&&(S.transition=T.transition)}_.forEach(T=>{const C=n.getBaseTarget(T),R=n.getValue(T);R&&(R.liveStyle=!0),S[T]=C??null}),p.push({animation:S})}let y=!!p.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(p):Promise.resolve()}function d(h,m){var p;if(t[h].isActive===m)return Promise.resolve();(p=n.variantChildren)==null||p.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,m)}),t[h].isActive=m;const v=f(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:f,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=hx(),o=!0}}}function D3(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Jy(e,n):!1}function Ts(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hx(){return{animate:Ts(!0),whileInView:Ts(),whileHover:Ts(),whileTap:Ts(),whileDrag:Ts(),whileFocus:Ts(),exit:Ts()}}function _p(n,e){n.min=e.min,n.max=e.max}function Ci(n,e){_p(n.x,e.x),_p(n.y,e.y)}function px(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const eS=1e-4,L3=1-eS,N3=1+eS,tS=.01,I3=0-tS,U3=0+tS;function In(n){return n.max-n.min}function F3(n,e,t){return Math.abs(n-e)<=t}function mx(n,e,t,r=.5){n.origin=r,n.originPoint=Ht(e.min,e.max,n.origin),n.scale=In(t)/In(e),n.translate=Ht(t.min,t.max,n.origin)-n.originPoint,(n.scale>=L3&&n.scale<=N3||isNaN(n.scale))&&(n.scale=1),(n.translate>=I3&&n.translate<=U3||isNaN(n.translate))&&(n.translate=0)}function Ua(n,e,t,r){mx(n.x,e.x,t.x,r?r.originX:void 0),mx(n.y,e.y,t.y,r?r.originY:void 0)}function gx(n,e,t,r=0){const o=r?Ht(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+In(e)}function O3(n,e,t,r){gx(n.x,e.x,t.x,r==null?void 0:r.x),gx(n.y,e.y,t.y,r==null?void 0:r.y)}function vx(n,e,t,r=0){const o=r?Ht(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+In(e)}function cu(n,e,t,r){vx(n.x,e.x,t.x,r==null?void 0:r.x),vx(n.y,e.y,t.y,r==null?void 0:r.y)}function xx(n,e,t,r,o){return n-=e,n=lu(n,1/t,r),o!==void 0&&(n=lu(n,1/o,r)),n}function k3(n,e=0,t=1,r=.5,o,a=n,c=n){if($i.test(e)&&(e=parseFloat(e),e=Ht(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=Ht(a.min,a.max,r);n===a&&(f-=e),n.min=xx(n.min,e,t,f,o),n.max=xx(n.max,e,t,f,o)}function _x(n,e,[t,r,o],a,c){k3(n,e[t],e[r],e[o],e.scale,a,c)}const B3=["x","scaleX","originX"],V3=["y","scaleY","originY"];function yx(n,e,t,r){_x(n.x,e,B3,t?t.x:void 0,r?r.x:void 0),_x(n.y,e,V3,t?t.y:void 0,r?r.y:void 0)}function Sx(n){return n.translate===0&&n.scale===1}function nS(n){return Sx(n.x)&&Sx(n.y)}function Mx(n,e){return n.min===e.min&&n.max===e.max}function z3(n,e){return Mx(n.x,e.x)&&Mx(n.y,e.y)}function Ex(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function iS(n,e){return Ex(n.x,e.x)&&Ex(n.y,e.y)}function Tx(n){return In(n.x)/In(n.y)}function wx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function zi(n){return[n("x"),n("y")]}function H3(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:p,skewX:_,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotateX(${v}deg) `),p&&(r+=`rotateY(${p}deg) `),_&&(r+=`skewX(${_}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const rS=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],G3=rS.length,bx=n=>typeof n=="string"?parseFloat(n):n,Ax=n=>typeof n=="number"||Ge.test(n);function W3(n,e,t,r,o,a){o?(n.opacity=Ht(0,t.opacity??1,j3(r)),n.opacityExit=Ht(e.opacity??1,0,X3(r))):a&&(n.opacity=Ht(e.opacity??1,t.opacity??1,r));for(let c=0;c<G3;c++){const f=rS[c];let d=Cx(e,f),h=Cx(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Ax(d)===Ax(h)?(n[f]=Math.max(Ht(bx(d),bx(h),r),0),($i.test(h)||$i.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Ht(e.rotate||0,t.rotate||0,r))}function Cx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const j3=sS(0,.5,$_),X3=sS(.5,.95,vi);function sS(n,e,t){return r=>r<n?0:r>e?1:t(za(n,e,r))}function Y3(n,e,t){const r=_n(n)?n:Io(n);return r.start(Qp("",r,e,t)),r.animation}function Wa(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const q3=(n,e)=>n.depth-e.depth;class $3{constructor(){this.children=[],this.isDirty=!1}add(e){Bp(this.children,e),this.isDirty=!0}remove(e){tu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(q3),this.isDirty=!1,this.children.forEach(e)}}function K3(n,e){const t=Nn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(ts(r),n(a-e))};return Ft.setup(r,!0),()=>ts(r)}function $c(n){return _n(n)?n.get():n}class Z3{constructor(){this.members=[]}add(e){Bp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(tu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(tu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Kc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Kd=["","X","Y","Z"],Q3=1e3;let J3=0;function Zd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function oS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=by(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ft,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&oS(r)}function aS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},f=e==null?void 0:e()){this.id=J3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(n2),this.nodes.forEach(l2),this.nodes.forEach(c2),this.nodes.forEach(i2)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new $3)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new zp),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const d=this.eventHandlers.get(c);d&&d.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=rm(c)&&!n3(c),this.instance=c;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),n){let m,v=0;const p=()=>this.root.updateBlockedByResize=!1;Ft.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,m&&m(),m=K3(p,250),Kc.hasAnimatedSinceResize&&(Kc.hasAnimatedSinceResize=!1,this.nodes.forEach(Dx)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||p2,{onLayoutAnimationStart:b,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!iS(this.targetLayout,_),T=!v&&p;if(this.options.layoutRoot||this.resumeFrom||T||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...Zp(M,"layout"),onPlay:b,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,T)}else v||Dx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ts(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(u2),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&oS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(s2),this.nodes.forEach(Rx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Px);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(o2),this.nodes.forEach(a2),this.nodes.forEach(e2),this.nodes.forEach(t2)):this.nodes.forEach(Px),this.clearAllSnapshots();const f=Nn.now();gn.delta=Qi(0,1e3/60,f-gn.timestamp),gn.timestamp=f,gn.isProcessing=!0,Hd.update.process(gn),Hd.preRender.process(gn),Hd.render.process(gn),gn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r2),this.sharedNodes.forEach(f2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!In(this.snapshot.measuredBox.x)&&!In(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=an()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!nS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;c&&this.instance&&(f||As(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return c&&(d=this.removeTransform(d)),m2(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return an();const f=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(g2))){const{scroll:m}=this.root;m&&(Gi(f.x,m.offset.x),Gi(f.y,m.offset.y))}return f}removeElementScroll(c){var d;const f=an();if(Ci(f,c),(d=this.scroll)!=null&&d.wasRoot)return f;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:p}=m;m!==this.root&&v&&p.layoutScroll&&(v.wasRoot&&Ci(f,c),Gi(f.x,v.offset.x),Gi(f.y,v.offset.y))}return f}applyTransform(c,f=!1,d){var m,v;const h=d||an();Ci(h,c);for(let p=0;p<this.path.length;p++){const _=this.path[p];!f&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Gi(h.x,-_.scroll.offset.x),Gi(h.y,-_.scroll.offset.y)),As(_.latestValues)&&qc(h,_.latestValues,(m=_.layout)==null?void 0:m.layoutBox)}return As(this.latestValues)&&qc(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var d;const f=an();Ci(f,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!As(m.latestValues))continue;let v;m.instance&&(gp(m.latestValues)&&m.updateSnapshot(),v=an(),Ci(v,m.measurePageBox())),yx(f,m.latestValues,(d=m.snapshot)==null?void 0:d.layoutBox,v)}return As(this.latestValues)&&yx(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=gn.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),O3(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ci(this.target,this.layout.layoutBox),Wy(this.target,this.targetDelta)):Ci(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||gp(this.parent.latestValues)||Gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,f,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),cu(this.relativeTargetOrigin,f,d,this.options.layoutAnchor||void 0),Ci(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===gn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;Ci(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,p=this.treeScale.y;d3(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=an());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(px(this.prevProjectionDelta.x,this.projectionDelta.x),px(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==p||!wx(this.projectionDelta.x,this.prevProjectionDelta.x)||!wx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wo(),this.projectionDelta=wo(),this.projectionDeltaWithTransform=wo()}setAnimationOrigin(c,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=wo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const p=an(),_=d?d.source:void 0,M=this.layout?this.layout.source:void 0,b=_!==M,y=this.getStack(),S=!y||y.members.length<=1,T=!!(b&&!S&&this.options.crossfade===!0&&!this.path.some(h2));this.animationProgress=0;let C;this.mixTargetDelta=R=>{const I=R/1e3;Lx(v.x,c.x,I),Lx(v.y,c.y,I),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(cu(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),d2(this.relativeTarget,this.relativeTargetOrigin,p,I),C&&z3(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=an()),Ci(C,this.relativeTarget)),b&&(this.animationValues=m,W3(m,h,this.latestValues,I,T,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var f,d,h;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(ts(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ft.update(()=>{Kc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Io(0)),this.motionValue.jump(0,!1),this.currentAnimation=Y3(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),c.onUpdate&&c.onUpdate(m)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Q3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=c;if(!(!f||!d||!h)){if(this!==c&&this.layout&&h&&lS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||an();const v=In(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const p=In(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+p}Ci(f,d),qc(f,m),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new Z3),this.sharedNodes.get(c).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Zd("z",c,h,this.animationValues);for(let m=0;m<Kd.length;m++)Zd(`rotate${Kd[m]}`,c,h,this.animationValues),Zd(`skew${Kd[m]}`,c,h,this.animationValues);c.render();for(const m in h)c.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);c.scheduleRender()}applyProjectionStyles(c,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=$c(f==null?void 0:f.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=$c(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=H3(this.projectionDeltaWithTransform,this.treeScale,m);d&&(v=d(m,v)),c.transform=v;const{x:p,y:_}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in xp){if(m[M]===void 0)continue;const{correct:b,applyTo:y,isCSSVariable:S}=xp[M],T=v==="none"?m[M]:b(m[M],h);if(y){const C=y.length;for(let R=0;R<C;R++)c[y[R]]=T}else S?this.options.visualElement.renderState.vars[M]=T:c[M]=T}this.options.layoutId&&(c.pointerEvents=h===this?$c(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Rx),this.root.sharedNodes.clear()}}}function e2(n){n.updateLayout()}function t2(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")zi(v=>{const p=c?e.measuredBox[v]:e.layoutBox[v],_=In(p);p.min=r[v].min,p.max=p.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";_p(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else lS(a,e.layoutBox,r)&&zi(v=>{const p=c?e.measuredBox[v]:e.layoutBox[v],_=In(r[v]);p.max=p.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const f=wo();Ua(f,r,e.layoutBox);const d=wo();c?Ua(d,n.applyTransform(o,!0),e.measuredBox):Ua(d,r,e.layoutBox);const h=!nS(f);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:p,layout:_}=v;if(p&&_){const M=n.options.layoutAnchor||void 0,b=an();cu(b,e.layoutBox,p.layoutBox,M);const y=an();cu(y,r,_.layoutBox,M),iS(b,y)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=b,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function n2(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function i2(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function r2(n){n.clearSnapshot()}function Rx(n){n.clearMeasurements()}function s2(n){n.isLayoutDirty=!0,n.updateLayout()}function Px(n){n.isLayoutDirty=!1}function o2(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function a2(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Dx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function l2(n){n.resolveTargetDelta()}function c2(n){n.calcProjection()}function u2(n){n.resetSkewAndRotation()}function f2(n){n.removeLeadSnapshot()}function Lx(n,e,t){n.translate=Ht(e.translate,0,t),n.scale=Ht(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Nx(n,e,t,r){n.min=Ht(e.min,t.min,r),n.max=Ht(e.max,t.max,r)}function d2(n,e,t,r){Nx(n.x,e.x,t.x,r),Nx(n.y,e.y,t.y,r)}function h2(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const p2={duration:.45,ease:[.4,0,.1,1]},Ix=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ux=Ix("applewebkit/")&&!Ix("chrome/")?Math.round:vi;function Fx(n){n.min=Ux(n.min),n.max=Ux(n.max)}function m2(n){Fx(n.x),Fx(n.y)}function lS(n,e,t){return n==="position"||n==="preserve-aspect"&&!F3(Tx(e),Tx(t),.2)}function g2(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const v2=aS({attachResizeListener:(n,e)=>Wa(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Qd={current:void 0},cS=aS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Qd.current){const n=new v2({});n.mount(window),n.setOptions({layoutScroll:!0}),Qd.current=n}return Qd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),uS=Me.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function x2(n=!0){const e=Me.useContext(kp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Me.useId();Me.useEffect(()=>{if(n)return o(a)},[n]);const c=Me.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const fS=Me.createContext({strict:!1}),Ox={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kx=!1;function _2(){if(kx)return;const n={};for(const e in Ox)n[e]={isEnabled:t=>Ox[e].some(r=>!!t[r])};Vy(n),kx=!0}function dS(){return _2(),l3()}function y2(n){const e=dS();for(const t in n)e[t]={...e[t],...n[t]};Vy(e)}const S2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function uu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||S2.has(n)}let hS=n=>!uu(n);function M2(n){typeof n=="function"&&(hS=e=>e.startsWith("on")?!uu(e):n(e))}try{M2(require("@emotion/is-prop-valid").default)}catch{}function E2(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||_n(n[o])||(hS(o)||t===!0&&uu(o)||!e&&!uu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Eu=Me.createContext({});function T2(n,e){if(Mu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ga(t)?t:void 0,animate:Ga(r)?r:void 0}}return n.inherit!==!1?e:{}}function w2(n){const{initial:e,animate:t}=T2(n,Me.useContext(Eu));return Me.useMemo(()=>({initial:e,animate:t}),[Bx(e),Bx(t)])}function Bx(n){return Array.isArray(n)?n.join(" "):n}const um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function pS(n,e,t){for(const r in e)!_n(e[r])&&!Yy(r,t)&&(n[r]=e[r])}function b2({transformTemplate:n},e){return Me.useMemo(()=>{const t=um();return lm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function A2(n,e){const t=n.style||{},r={};return pS(r,t,n),Object.assign(r,b2(n,e)),r}function C2(n,e){const t={},r=A2(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const mS=()=>({...um(),attrs:{}});function R2(n,e,t,r){const o=Me.useMemo(()=>{const a=mS();return qy(a,e,Ky(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};pS(a,n.style,n),o.style={...a,...o.style}}return o}const P2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fm(n){return typeof n!="string"||n.includes("-")?!1:!!(P2.indexOf(n)>-1||/[A-Z]/u.test(n))}function D2(n,e,t,{latestValues:r},o,a=!1,c){const d=(c??fm(n)?R2:C2)(e,r,o,n),h=E2(e,typeof n=="string",a),m=n!==Me.Fragment?{...h,...d,ref:t}:{},{children:v}=e,p=Me.useMemo(()=>_n(v)?v.get():v,[v]);return Me.createElement(n,{...m,children:p})}function L2({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:N2(t,r,o,n),renderState:e()}}function N2(n,e,t,r){const o={},a=r(n,{});for(const p in a)o[p]=$c(a[p]);let{initial:c,animate:f}=n;const d=Mu(n),h=ky(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const v=m?f:c;if(v&&typeof v!="boolean"&&!Su(v)){const p=Array.isArray(v)?v:[v];for(let _=0;_<p.length;_++){const M=Jp(n,p[_]);if(M){const{transitionEnd:b,transition:y,...S}=M;for(const T in S){let C=S[T];if(Array.isArray(C)){const R=m?C.length-1:0;C=C[R]}C!==null&&(o[T]=C)}for(const T in b)o[T]=b[T]}}}return o}const gS=n=>(e,t)=>{const r=Me.useContext(Eu),o=Me.useContext(kp),a=()=>L2(n,e,r,o);return t?a():DC(a)},I2=gS({scrapeMotionValuesFromProps:cm,createRenderState:um}),U2=gS({scrapeMotionValuesFromProps:Zy,createRenderState:mS}),F2=Symbol.for("motionComponentSymbol");function O2(n,e,t){const r=Me.useRef(t);Me.useInsertionEffect(()=>{r.current=t});const o=Me.useRef(null);return Me.useCallback(a=>{var f;a&&((f=n.onMount)==null||f.call(n,a));const c=r.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const vS=Me.createContext({});function Mo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function k2(n,e,t,r,o,a){var C,R;const{visualElement:c}=Me.useContext(Eu),f=Me.useContext(fS),d=Me.useContext(kp),h=Me.useContext(uS),m=h.reducedMotion,v=h.skipAnimations,p=Me.useRef(null),_=Me.useRef(!1);r=r||f.renderer,!p.current&&r&&(p.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:a}),_.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const M=p.current,b=Me.useContext(vS);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&B2(p.current,t,o,b);const y=Me.useRef(!1);Me.useInsertionEffect(()=>{M&&y.current&&M.update(t,d)});const S=t[wy],T=Me.useRef(!!S&&typeof window<"u"&&!((C=window.MotionHandoffIsComplete)!=null&&C.call(window,S))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,S)));return NC(()=>{_.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),T.current&&M.animationState&&M.animationState.animateChanges())}),Me.useEffect(()=>{M&&(!T.current&&M.animationState&&M.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)==null||I.call(window,S)}),T.current=!1),M.enteringChildren=void 0)}),M}function B2(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutAnchor:m,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:xS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||f&&Mo(f),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:m})}function xS(n){if(n)return n.options.allowProjection!==!1?n.projection:xS(n.parent)}function Jd(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&y2(r);const a=t?t==="svg":fm(n),c=a?U2:I2;function f(h,m){let v;const p={...Me.useContext(uS),...h,layoutId:V2(h)},{isStatic:_}=p,M=w2(h),b=c(h,_);if(!_&&typeof window<"u"){z2();const y=H2(p);v=y.MeasureLayout,M.visualElement=k2(n,b,p,o,y.ProjectionNode,a)}return L.jsxs(Eu.Provider,{value:M,children:[v&&M.visualElement?L.jsx(v,{visualElement:M.visualElement,...p}):null,D2(n,h,O2(b,M.visualElement,m),b,_,e,a)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=Me.forwardRef(f);return d[F2]=n,d}function V2({layoutId:n}){const e=Me.useContext(O_).id;return e&&n!==void 0?e+"-"+n:n}function z2(n,e){Me.useContext(fS).strict}function H2(n){const e=dS(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function G2(n,e){if(typeof Proxy>"u")return Jd;const t=new Map,r=(a,c)=>Jd(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Jd(c,void 0,n,e)),t.get(c))})}const W2=(n,e)=>e.isSVG??fm(n)?new w3(e):new _3(e,{allowProjection:n!==Me.Fragment});class j2 extends ns{constructor(e){super(e),e.animationState||(e.animationState=P3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Su(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let X2=0;class Y2 extends ns{constructor(){super(...arguments),this.id=X2++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:f}=this.node.getProps();if(typeof c=="string"){const d=Us(this.node,c,f);if(d){const{transition:h,transitionEnd:m,...v}=d;for(const p in v)(a=this.node.getValue(p))==null||a.jump(v[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const q2={animation:{Feature:j2},exit:{Feature:Y2}};function Qa(n){return{point:{x:n.pageX,y:n.pageY}}}const $2=n=>e=>im(e)&&n(e,Qa(e));function Fa(n,e,t,r){return Wa(n,e,$2(t),r)}const _S=({current:n})=>n?n.ownerDocument.defaultView:null,Vx=(n,e)=>Math.abs(n-e);function K2(n,e){const t=Vx(n.x,e.x),r=Vx(n.y,e.y);return Math.sqrt(t**2+r**2)}const zx=new Set(["auto","scroll"]);class yS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Fc(this.lastRawMoveEventInfo,this.transformPagePoint));const _=eh(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,b=K2(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!b)return;const{point:y}=_,{timestamp:S}=gn;this.history.push({...y,timestamp:S});const{onStart:T,onMove:C}=this.handlers;M||(T&&T(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,_)},this.handlePointerMove=(_,M)=>{this.lastMoveEvent=_,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Fc(M,this.transformPagePoint),Ft.update(this.updatePoint,!0)},this.handlePointerUp=(_,M)=>{this.end();const{onEnd:b,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=eh(_.type==="pointercancel"?this.lastMoveEventInfo:Fc(M,this.transformPagePoint),this.history);this.startEvent&&b&&b(_,T),y&&y(_,T)},!im(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const d=Qa(e),h=Fc(d,this.transformPagePoint),{point:m}=h,{timestamp:v}=gn;this.history=[{...m,timestamp:v}];const{onSessionStart:p}=t;p&&p(e,eh(h,this.history)),this.removeListeners=$a(Fa(this.contextWindow,"pointermove",this.handlePointerMove),Fa(this.contextWindow,"pointerup",this.handlePointerUp),Fa(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(zx.has(r.overflowX)||zx.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Ft.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ts(this.updatePoint)}}function Fc(n,e){return e?{point:e(n.point)}:n}function Hx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function eh({point:n},e){return{point:n,delta:Hx(n,SS(e)),offset:Hx(n,Z2(e)),velocity:Q2(e,.1)}}function Z2(n){return n[0]}function SS(n){return n[n.length-1]}function Q2(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=SS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ii(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ii(e)*2&&(r=n[1]);const a=gi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function J2(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Ht(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Ht(t,n,r.max):Math.min(n,t)),n}function Gx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function eD(n,{top:e,left:t,bottom:r,right:o}){return{x:Gx(n.x,t,o),y:Gx(n.y,e,r)}}function Wx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function tD(n,e){return{x:Wx(n.x,e.x),y:Wx(n.y,e.y)}}function nD(n,e){let t=.5;const r=In(n),o=In(e);return o>r?t=za(e.min,e.max-r,n.min):r>o&&(t=za(n.min,n.max-o,e.min)),Qi(0,1,t)}function iD(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const yp=.35;function rD(n=yp){return n===!1?n=0:n===!0&&(n=yp),{x:jx(n,"left","right"),y:jx(n,"top","bottom")}}function jx(n,e,t){return{min:Xx(n,e),max:Xx(n,t)}}function Xx(n,e){return typeof n=="number"?n:n[e]||0}const sD=new WeakMap;class oD{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(Qa(v).point),this.stopAnimation()},c=(v,p)=>{const{drag:_,dragPropagation:M,onDragStart:b}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BP(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zi(S=>{let T=this.getAxisMotionValue(S).get()||0;if($i.test(T)){const{projection:C}=this.visualElement;if(C&&C.layout){const R=C.layout.layoutBox[S];R&&(T=In(R)*(parseFloat(T)/100))}}this.originPoint[S]=T}),b&&Ft.update(()=>b(v,p),!1,!0),dp(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},f=(v,p)=>{this.latestPointerEvent=v,this.latestPanInfo=p;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:b,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=p;if(M&&this.currentDirection===null){this.currentDirection=lD(S),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",p.point,S),this.updateAxis("y",p.point,S),this.visualElement.render(),y&&Ft.update(()=>y(v,p),!1,!0)},d=(v,p)=>{this.latestPointerEvent=v,this.latestPanInfo=p,this.stop(v,p),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new yS(e,{onSessionStart:a,onStart:c,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:_S(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:f}=this.getProps();f&&Ft.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Oc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=J2(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Mo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=eD(r.layoutBox,e):this.constraints=!1,this.elastic=rD(t),o!==this.constraints&&!Mo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&zi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=iD(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Mo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=h3(r,o.root,this.visualElement.getTransformPagePoint());let c=tD(o.layout.layoutBox,a);if(t){const f=t(u3(c));this.hasMutatedConstraints=!!f,f&&(c=Hy(f))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=zi(m=>{if(!Oc(m,t,this.currentDirection))return;let v=d&&d[m]||{};(c===!0||c===m)&&(v={min:0,max:0});const p=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:p,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return dp(this.visualElement,e),r.start(Qp(e,r,0,t,this.visualElement,!1))}stopAnimation(){zi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){zi(t=>{const{drag:r}=this.getProps();if(!Oc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:f}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-Ht(c,f,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Mo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};zi(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const d=f.get();o[c]=nD({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),zi(c=>{if(!Oc(c,e,null))return;const f=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];f.set(Ht(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;sD.set(this.visualElement,this);const e=this.visualElement.current,t=Fa(e,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),p=h.target,_=p!==e&&jP(p);m&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();Mo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=aD(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Ft.read(o);const f=Wa(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(zi(v=>{const p=this.getAxisMotionValue(v);p&&(this.originPoint[v]+=h[v].translate,p.set(p.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),t(),c(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=yp,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:f}}}function Yx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function aD(n,e,t){const r=nx(n,Yx(t)),o=nx(e,Yx(t));return()=>{r(),o()}}function Oc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function lD(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class cD extends ns{constructor(e){super(e),this.removeGroupControls=vi,this.removeListeners=vi,this.controls=new oD(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||vi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const th=n=>(e,t)=>{n&&Ft.update(()=>n(e,t),!1,!0)};class uD extends ns{constructor(){super(...arguments),this.removePointerDownListener=vi}onPointerDown(e){this.session=new yS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_S(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:th(e),onStart:th(t),onMove:th(r),onEnd:(a,c)=>{delete this.session,o&&Ft.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Fa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nh=!1;class fD extends Me.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),nh&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Kc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),nh=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ft.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),nm.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;nh=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function MS(n){const[e,t]=x2(),r=Me.useContext(O_);return L.jsx(fD,{...n,layoutGroup:r,switchLayoutGroup:Me.useContext(vS),isPresent:e,safeToRemove:t})}const dD={pan:{Feature:uD},drag:{Feature:cD,ProjectionNode:cS,MeasureLayout:MS}};function qx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Ft.postRender(()=>a(e,Qa(e)))}class hD extends ns{mount(){const{current:e}=this.node;e&&(this.unmount=zP(e,(t,r)=>(qx(this.node,r,"Start"),o=>qx(this.node,o,"End"))))}unmount(){}}class pD extends ns{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(Wa(this.node.current,"focus",()=>this.onFocus()),Wa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $x(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Ft.postRender(()=>a(e,Qa(e)))}class mD extends ns{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=YP(e,(o,a)=>($x(this.node,a,"Start"),(c,{success:f})=>$x(this.node,c,f?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Sp=new WeakMap,ih=new WeakMap,gD=n=>{const e=Sp.get(n.target);e&&e(n)},vD=n=>{n.forEach(gD)};function xD({root:n,...e}){const t=n||document;ih.has(t)||ih.set(t,{});const r=ih.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(vD,{root:n,...e})),r[o]}function _D(n,e,t){const r=xD(e);return Sp.set(n,t),r.observe(n),()=>{Sp.delete(n),r.unobserve(n)}}const yD={some:0,all:1};class SD extends ns{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:yD[o]},f=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:p}=this.node.getProps(),_=m?v:p;_&&_(h)};this.stopObserver=_D(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(MD(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function MD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const ED={inView:{Feature:SD},tap:{Feature:mD},focus:{Feature:pD},hover:{Feature:hD}},TD={layout:{ProjectionNode:cS,MeasureLayout:MS}},wD={...q2,...ED,...dD,...TD},ES=G2(wD,W2);function TS(){!am.current&&By();const[n]=Me.useState(ou.current);return n}function bD({open:n,onClose:e}){const t=Me.useRef(null),r=TS();Me.useEffect(()=>{const c=t.current;c&&(n?c.open||c.showModal():c.open&&c.close())},[n]),Me.useEffect(()=>{const c=t.current;if(!c)return;const f=()=>{e()};return c.addEventListener("close",f),()=>c.removeEventListener("close",f)},[e]);const o=bn.certifications,a={closed:r?{opacity:0}:{opacity:0,rotateX:20,rotateY:-16,scale:.86,y:48},open:{opacity:1,rotateX:0,rotateY:0,scale:1,y:0}};return L.jsxs("dialog",{ref:t,className:"modal modal-bottom sm:modal-middle z-[110] [perspective:1400px]","aria-labelledby":"certifications-modal-title","aria-modal":"true",children:[L.jsxs(ES.div,{className:"modal-box modal-box-3d relative max-h-[min(92vh,56rem)] max-w-4xl overflow-y-auto border border-base-300 bg-base-100 p-6 pt-10 sm:p-8 sm:pt-12",style:{transformStyle:"preserve-3d"},variants:a,initial:"closed",animate:n?"open":"closed",transition:r?{duration:.12}:{type:"spring",stiffness:340,damping:30,mass:.65,opacity:{duration:.28,ease:[.22,1,.36,1]}},children:[L.jsx("form",{method:"dialog",className:"absolute right-3 top-3 z-10 sm:right-4 sm:top-4",children:L.jsx("button",{type:"submit","aria-label":"Close",className:"btn-close-3d flex h-10 w-10 items-center justify-center rounded-lg border border-t-base-200 border-b-[3px] border-b-base-content/20 border-l-base-300 border-r-base-300 bg-gradient-to-b from-base-100 to-base-300/45 text-lg font-light leading-none text-base-content outline-none ring-base-content/10 transition-[transform,box-shadow,filter] hover:brightness-105 focus-visible:ring-2 dark:border-b-base-content/30 dark:from-base-200 dark:to-base-300/60",children:L.jsx("span",{"aria-hidden":!0,className:"-mt-0.5",children:"×"})})}),L.jsx("h2",{id:"certifications-modal-title",className:"section-heading-3d font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl",children:"Certifications"}),L.jsx("p",{className:"mt-2 text-base text-base-content/70",children:"Professional credentials and exams completed."}),L.jsx("ul",{className:"mt-6 flex list-none flex-col gap-3 p-0 sm:gap-4",children:o.map((c,f)=>L.jsxs("li",{className:"rounded-xl border border-base-300/80 bg-base-200/40 px-4 py-3.5 sm:px-5 sm:py-4",children:[c.href?L.jsxs("a",{href:c.href,target:"_blank",rel:"noopener noreferrer",className:"group block font-display text-base font-medium leading-snug text-primary hover:underline sm:text-lg",children:[c.title,L.jsx("span",{className:"ml-1 inline text-base-content/50 no-underline transition group-hover:text-primary",children:"↗"})]}):L.jsx("p",{className:"font-display text-base font-medium leading-snug text-base-content sm:text-lg",children:c.title}),(c.issuer||c.year)&&L.jsxs("p",{className:"mt-1.5 text-sm leading-relaxed text-base-content/65",children:[c.issuer&&L.jsxs(L.Fragment,{children:[L.jsxs("span",{className:"font-medium text-base-content/55",children:["Source:"," "]}),c.issuer]}),c.issuer&&c.year?" · ":"",c.year]})]},`${c.title}-${c.issuer??""}-${c.year??""}-${f}`))})]}),L.jsx("form",{method:"dialog",className:"modal-backdrop",children:L.jsx("button",{type:"submit",className:"cursor-default","aria-label":"Close",children:" "})})]})}function Kx({href:n,children:e}){return L.jsxs("a",{href:n,className:"group relative w-fit text-lg font-medium text-primary",children:[e,L.jsx("span",{className:"absolute bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"})]})}function AD({open:n,onClose:e}){const t=Me.useRef(null),r=TS();Me.useEffect(()=>{const a=t.current;a&&(n?a.open||a.showModal():a.open&&a.close())},[n]),Me.useEffect(()=>{const a=t.current;if(!a)return;const c=()=>{e()};return a.addEventListener("close",c),()=>a.removeEventListener("close",c)},[e]);const o={closed:r?{opacity:0}:{opacity:0,rotateX:20,rotateY:-16,scale:.86,y:48},open:{opacity:1,rotateX:0,rotateY:0,scale:1,y:0}};return L.jsxs("dialog",{ref:t,className:"modal modal-bottom sm:modal-middle z-[110] [perspective:1400px]","aria-labelledby":"contact-modal-title","aria-modal":"true",children:[L.jsxs(ES.div,{className:"modal-box modal-box-3d relative max-w-xl border border-base-300 bg-base-100 p-6 pt-10 sm:p-8 sm:pt-12",style:{transformStyle:"preserve-3d"},variants:o,initial:"closed",animate:n?"open":"closed",transition:r?{duration:.12}:{type:"spring",stiffness:340,damping:30,mass:.65,opacity:{duration:.28,ease:[.22,1,.36,1]}},children:[L.jsx("form",{method:"dialog",className:"absolute right-3 top-3 z-10 sm:right-4 sm:top-4",children:L.jsx("button",{type:"submit","aria-label":"Close",className:"btn-close-3d flex h-10 w-10 items-center justify-center rounded-lg border border-t-base-200 border-b-[3px] border-b-base-content/20 border-l-base-300 border-r-base-300 bg-gradient-to-b from-base-100 to-base-300/45 text-lg font-light leading-none text-base-content outline-none ring-base-content/10 transition-[transform,box-shadow,filter] hover:brightness-105 focus-visible:ring-2 dark:border-b-base-content/30 dark:from-base-200 dark:to-base-300/60",children:L.jsx("span",{"aria-hidden":!0,className:"-mt-0.5",children:"×"})})}),L.jsx("h2",{id:"contact-modal-title",className:"section-heading-3d font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl",children:"Contact"}),L.jsx("p",{className:"mt-2 text-base text-base-content/70",children:"Open to collaborations and interesting problems."}),L.jsxs("div",{className:"mt-6 flex flex-col gap-4",children:[bn.emails.map(a=>L.jsx(Kx,{href:`mailto:${a}`,children:a},a)),L.jsx(Kx,{href:`tel:${bn.phoneTel}`,children:bn.phoneDisplay}),L.jsxs("a",{href:bn.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"group relative w-fit text-lg font-medium text-primary",children:["GitHub",L.jsx("span",{className:"absolute bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"})]})]})]}),L.jsx("form",{method:"dialog",className:"modal-backdrop",children:L.jsx("button",{type:"submit",className:"cursor-default","aria-label":"Close",children:" "})})]})}function CD(){const{education:n}=bn;return L.jsx("section",{id:"education",className:"border-b border-base-300 py-8 sm:py-10","aria-labelledby":"education-heading",children:L.jsx("div",{className:"relative mx-auto max-w-3xl",children:L.jsx(vn,{children:L.jsxs("div",{className:"elev-panel-soft rounded-2xl border border-base-300/80 bg-base-100/70 p-4 backdrop-blur-sm sm:p-5",children:[L.jsx("div",{className:"mb-3 flex flex-wrap items-center gap-2",children:L.jsx("h2",{id:"education-heading",className:"m-0 inline-flex rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs",children:"Education"})}),L.jsxs("div",{className:"flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5",children:[L.jsx("div",{className:"exp-logo-ring flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-base-300 bg-gradient-to-b from-base-200 to-base-300/40 p-2 shadow-inner sm:h-[4.25rem] sm:w-[4.25rem]",children:L.jsx("img",{src:n.logo,alt:`${n.school} logo`,className:"max-h-full max-w-full object-contain"})}),L.jsxs("div",{className:"min-w-0",children:[L.jsx("p",{className:"font-display text-base font-medium leading-snug text-base-content sm:text-lg",children:n.school}),L.jsx("p",{className:"mt-1 text-sm font-medium text-primary sm:text-base",children:n.program}),L.jsx("p",{className:"mt-1 text-sm text-base-content/65",children:n.dateLabel})]})]})]})})})})}function RD(){return L.jsxs("section",{id:"experience",className:"full-bleed viewport-section relative overflow-hidden border-y border-base-300 px-6 py-12 lg:px-10 sm:py-16 lg:py-24","aria-labelledby":"experience-heading",children:[L.jsx("div",{className:"pointer-events-none absolute right-0 top-1/3 h-72 w-72 translate-x-1/4 rounded-full bg-primary/10 blur-3xl motion-safe:animate-about-blob","aria-hidden":!0}),L.jsxs("div",{className:"relative mx-auto max-w-3xl",children:[L.jsx(vn,{children:L.jsxs("div",{className:"mb-10 max-w-lg sm:mb-12",children:[L.jsx("h2",{id:"experience-heading",className:"section-heading-3d font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl",children:"Experience"}),L.jsx("p",{className:"mt-2 text-base text-base-content/70",children:"Roles and internships — most recent first."})]})}),L.jsx("ol",{className:"m-0 flex list-none flex-col gap-6 p-0 sm:gap-7",children:bn.experience.map((n,e)=>L.jsx("li",{children:L.jsx(vn,{delayMs:e*75,children:L.jsxs("article",{className:"experience-card elev-panel-soft elev-panel-glass elev-panel-lift group relative overflow-hidden rounded-2xl border border-base-300/90 p-5 sm:p-6",children:[L.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"}),L.jsxs("div",{className:"relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6",children:[L.jsx("div",{className:"exp-logo-ring flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-base-300 bg-gradient-to-b from-base-200 to-base-300/40 p-2 shadow-inner motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.04] sm:h-[4.75rem] sm:w-[4.75rem]",children:L.jsx("img",{src:n.image,alt:`${n.company} logo`,className:"max-h-full max-w-full object-contain"})}),L.jsx("div",{className:"min-w-0 flex-1",children:L.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6",children:[L.jsxs("div",{children:[L.jsx("h3",{className:"font-display text-xl font-semibold tracking-[-0.02em] text-base-content sm:text-2xl",children:n.company}),L.jsx("p",{className:"mt-1.5 text-sm text-base-content/75 sm:text-base",children:n.role})]}),L.jsxs("div",{className:"flex shrink-0 flex-col gap-1.5 sm:items-end sm:text-right",children:[L.jsx("p",{className:"text-sm font-medium text-base-content/80",children:n.dateRange}),L.jsx("span",{className:"inline-flex w-fit rounded-full bg-primary/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary",children:n.duration})]})]})})]})]})})},`${n.company}-${e}`))})]})]})}function PD(){const n=new Date().getFullYear();return L.jsxs("footer",{className:"flex flex-wrap items-center justify-between gap-4 border-t border-base-300 py-8 text-sm text-base-content/70",children:[L.jsxs("p",{className:"m-0",children:["© ",n," ",bn.name]}),L.jsx("p",{className:"m-0 opacity-75",children:"React · Tailwind · DaisyUI · Animate.css · Three.js"})]})}function DD(n=8){const[e,t]=Me.useState(!1);return Me.useEffect(()=>{const r=()=>t(window.scrollY>n);return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[n]),e}function Zx(n){if(typeof document>"u"){n();return}if(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){n();return}const e=document;typeof e.startViewTransition=="function"?e.startViewTransition(n):n()}const wS=Me.createContext(null),Mp="portfolio-color-scheme";function LD(){const n=localStorage.getItem(Mp);return n==="light"||n==="dark"?n:null}function ND(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ID(){const n=LD();return n||ND()}function rh(n){document.documentElement.setAttribute("data-theme",n==="dark"?"portfolioDark":"portfolio")}function UD({children:n}){const[e,t]=Me.useState(()=>ID());Me.useEffect(()=>{rh(e)},[e]),Me.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)"),c=()=>{if(localStorage.getItem(Mp))return;const f=a.matches?"dark":"light";Zx(()=>{rh(f),t(f)})};return a.addEventListener("change",c),()=>a.removeEventListener("change",c)},[]);const r=Me.useCallback(()=>{t(a=>{const c=a==="dark"?"light":"dark";return Zx(()=>{localStorage.setItem(Mp,c),rh(c)}),c})},[]),o=Me.useMemo(()=>({theme:e,toggle:r}),[e,r]);return L.jsx(wS.Provider,{value:o,children:n})}function FD(){const n=Me.useContext(wS);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n}function OD(){const{theme:n,toggle:e}=FD(),t=n==="dark";return L.jsx("button",{type:"button",onClick:e,className:"group btn btn-3d-icon btn-circle btn-ghost btn-sm shrink-0 border border-base-300 text-base-content transition-colors duration-300 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:border-primary/45 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 motion-safe:hover:scale-105","aria-label":t?"Switch to light mode":"Switch to dark mode",title:t?"Light mode":"Dark mode",children:t?L.jsx("span",{className:"block h-[1.125rem] w-[1.125rem] transition-transform duration-300 ease-out will-change-transform motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-12","aria-hidden":!0,children:L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-full w-full",children:L.jsx("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"})})}):L.jsx("span",{className:"block h-[1.125rem] w-[1.125rem] transition-transform duration-300 ease-out will-change-transform motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-12","aria-hidden":!0,children:L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-full w-full",children:L.jsx("path",{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"})})})})}const kD=[{href:"#projects",label:"Projects"},{href:"#experience",label:"Experience"},{href:"#education",label:"Education"},{href:"#about",label:"About"},{href:"#contact",label:"Contact"}];function BD({onOpenContact:n}){const e=DD();return L.jsx("header",{className:t_("header-3d fixed top-0 z-50 w-full transition-[border-color,background-color] duration-300","bg-base-100/75 backdrop-blur-md",e&&"border-b border-base-300"),children:L.jsxs("nav",{className:"mx-auto flex min-h-[4.25rem] max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 sm:px-6 lg:px-10","aria-label":"Primary",children:[L.jsx("a",{href:"#",className:"text-sm font-semibold tracking-tight text-base-content transition-colors hover:text-primary",children:bn.nameShort}),L.jsxs("div",{className:"flex w-full min-w-0 flex-wrap items-center justify-end gap-3 sm:w-auto sm:flex-1 sm:gap-4 md:gap-6",children:[L.jsx("ul",{className:"flex flex-1 list-none flex-wrap justify-end gap-x-4 gap-y-1 p-0 m-0 sm:gap-x-6 md:gap-x-8",children:kD.map(({href:t,label:r})=>L.jsx("li",{children:t==="#contact"?L.jsxs("button",{type:"button",onClick:n,className:"group relative cursor-pointer border-0 bg-transparent p-0 text-sm font-medium text-base-content/60 transition-colors hover:text-base-content",children:[r,L.jsx("span",{className:"absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100","aria-hidden":!0})]}):L.jsxs("a",{href:t,className:"group relative text-sm font-medium text-base-content/60 transition-colors hover:text-base-content",children:[r,L.jsx("span",{className:"absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100","aria-hidden":!0})]})},t))}),L.jsx(OD,{})]})]})})}const Qx=190;function VD(){const n=Me.useRef(null),e=fu();return Me.useEffect(()=>{const t=n.current;if(!t||e)return;const r=t.closest("section");if(!(r instanceof HTMLElement))return;const o=new Ip,a=new Xn(52,1,.1,120);a.position.set(0,0,16);const c=new Op({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0);const f=new Pa;o.add(f);const d=new gu(4,1),h=new pu({color:new St("#7f79ff"),wireframe:!0,transparent:!0,opacity:.22}),m=new Ni(d,h);m.position.set(0,.1,0),f.add(m);const v=new $n,p=new Float32Array(Qx*3);for(let F=0;F<Qx;F+=1){const H=F*3;p[H]=(Math.random()-.5)*24,p[H+1]=(Math.random()-.5)*12,p[H+2]=(Math.random()-.5)*10}v.setAttribute("position",new Fn(p,3));const _=new mu({color:new St("#8dd8ff"),size:.048,transparent:!0,opacity:.52,depthWrite:!1,blending:Oa}),M=new Up(v,_);f.add(M);let b=0,y=0,S=0,T=0,C=0;const R=()=>{const F=r.clientWidth,H=r.clientHeight;c.setSize(F,H,!1),a.aspect=F/Math.max(H,1),a.updateProjectionMatrix()},I=(F,H)=>{const K=r.getBoundingClientRect(),oe=(F-K.left)/Math.max(K.width,1)*2-1,Q=(H-K.top)/Math.max(K.height,1)*2-1;b=Math.max(-1,Math.min(1,oe)),y=Math.max(-1,Math.min(1,Q))},N=F=>{I(F.clientX,F.clientY)},O=F=>{I(F.clientX,F.clientY),C=1},E=()=>{b=0,y=0};R(),window.addEventListener("resize",R),r.addEventListener("pointermove",N),r.addEventListener("pointerdown",O),r.addEventListener("pointerleave",E);let D=0;const G=()=>{S+=(b-S)*.055,T+=(y-T)*.055,C*=.92,f.rotation.y+=.0022+S*.008,f.rotation.x+=.001+-T*.005,f.position.x=S*1.1,f.position.y=-T*.75,_.opacity=.52+C*.22,_.size=.048+C*.03,h.opacity=.22+C*.15,c.render(o,a),D=window.requestAnimationFrame(G)};return D=window.requestAnimationFrame(G),()=>{window.cancelAnimationFrame(D),window.removeEventListener("resize",R),r.removeEventListener("pointermove",N),r.removeEventListener("pointerdown",O),r.removeEventListener("pointerleave",E),d.dispose(),h.dispose(),v.dispose(),_.dispose(),c.dispose()}},[e]),L.jsx("div",{className:"about-three-bg","aria-hidden":!0,children:L.jsx("canvas",{ref:n,className:"h-full w-full"})})}function zD({onOpenContact:n,onOpenCertifications:e}){return L.jsxs("section",{className:"full-bleed viewport-section relative flex flex-col justify-center px-6 pb-16 lg:px-10","aria-labelledby":"hero-heading",children:[L.jsx(VD,{}),L.jsxs("div",{className:"relative z-10 mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-center lg:gap-12 xl:grid-cols-[1fr_minmax(0,26rem)]",children:[L.jsxs("div",{className:"max-w-xl",children:[L.jsx(vn,{delayMs:50,children:L.jsx("p",{className:"mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary",children:bn.name})}),L.jsx(vn,{delayMs:120,children:L.jsxs("h1",{id:"hero-heading",className:"section-heading-3d font-display text-[clamp(2.5rem,7vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em]",children:[L.jsx("span",{className:"block",children:"Ideas, crafted"}),L.jsx("span",{className:"block font-display italic text-primary",children:"with care."})]})}),L.jsx(vn,{delayMs:200,children:L.jsx("p",{className:"mt-4 max-w-xl text-lg text-base-content/70",children:"I design and build thoughtful digital experiences — minimal surfaces, clear structure, and motion that feels natural."})}),L.jsx(vn,{delayMs:280,children:L.jsxs("div",{className:"mt-8 flex w-fit max-w-full flex-col gap-3",children:[L.jsxs("div",{className:"flex flex-wrap gap-3",children:[L.jsx("a",{href:"#projects",className:"btn btn-3d-primary rounded-full border-0 bg-base-content px-6 text-base-100 hover:bg-base-content/90",children:"View projects"}),L.jsxs("button",{type:"button",onClick:n,className:"btn btn-outline btn-3d-outline hero-get-in-touch inline-flex items-center gap-1.5 rounded-full border-base-300 bg-transparent px-6 hover:border-base-content/40 hover:bg-primary/10",children:["Get in touch",L.jsx("span",{className:"hero-get-in-touch-arrow text-primary","aria-hidden":!0,children:"→"})]})]}),L.jsx("button",{type:"button",onClick:e,className:"btn btn-outline btn-3d-outline inline-flex items-center gap-1.5 self-center rounded-full border-primary/35 bg-primary/5 px-6 text-primary hover:border-primary/50 hover:bg-primary/10",children:"Certifications"})]})})]}),L.jsx(vn,{delayMs:180,children:L.jsx("div",{className:"hero-frame-3d mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none",children:L.jsx("img",{src:bn.images.profile,alt:`${bn.name}`,className:"aspect-[4/5] w-full object-cover object-top ring-1 ring-base-300/40"})})})]}),L.jsx("div",{className:"pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-40","aria-hidden":!0,children:L.jsx("span",{className:"hero-scroll-line block h-12 w-px bg-gradient-to-b from-base-content/50 to-transparent"})})]})}const Jx=260,HD=7e-4,GD=25e-5;function WD(){const n=Me.useRef(null),e=fu();return Me.useEffect(()=>{const t=n.current;if(!t||e)return;const r=new Ip,o=new Xn(58,1,.1,100);o.position.z=9;const a=new Op({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setClearColor(0,0);const c=new $n,f=new Float32Array(Jx*3);for(let N=0;N<Jx;N+=1){const O=N*3;f[O]=(Math.random()-.5)*18,f[O+1]=(Math.random()-.5)*9,f[O+2]=(Math.random()-.5)*8}c.setAttribute("position",new Fn(f,3));const d=new mu({color:new St("#7c8cff"),size:.055,transparent:!0,opacity:.65,depthWrite:!1,blending:Oa}),h=new Up(c,d);r.add(h);let m=0,v=0,p=0,_=0,M=0;const b=(N,O)=>{const E=t.getBoundingClientRect(),D=(N-E.left)/Math.max(E.width,1)*2-1,G=(O-E.top)/Math.max(E.height,1)*2-1;m=Math.max(-1,Math.min(1,D)),v=Math.max(-1,Math.min(1,G))},y=N=>{b(N.clientX,N.clientY)},S=N=>{b(N.clientX,N.clientY),M=1},T=()=>{m=0,v=0};t.addEventListener("pointermove",y),t.addEventListener("pointerdown",S),t.addEventListener("pointerleave",T);const C=()=>{const N=t.parentElement,O=(N==null?void 0:N.clientWidth)??window.innerWidth,E=(N==null?void 0:N.clientHeight)??420;a.setSize(O,E,!1),o.aspect=O/Math.max(E,1),o.updateProjectionMatrix()};C(),window.addEventListener("resize",C);let R=0;const I=()=>{p+=(m-p)*.06,_+=(v-_)*.06,M*=.93,h.rotation.y+=HD+p*5e-4,h.rotation.x+=GD-_*35e-5,h.position.x=p*.32,h.position.y=-_*.22,d.size=.055+M*.065,d.opacity=.65+M*.2,a.render(r,o),R=window.requestAnimationFrame(I)};return R=window.requestAnimationFrame(I),()=>{window.cancelAnimationFrame(R),window.removeEventListener("resize",C),t.removeEventListener("pointermove",y),t.removeEventListener("pointerdown",S),t.removeEventListener("pointerleave",T),c.dispose(),d.dispose(),a.dispose()}},[e]),L.jsx("div",{className:"hero-three-bg","aria-hidden":!0,children:L.jsx("canvas",{ref:n,className:"h-full w-full"})})}function jD(n){return n.startsWith("http://")||n.startsWith("https://")}function XD({project:n,onOpenDetail:e}){const t=jD(n.href),r="secondaryHref"in n&&typeof n.secondaryHref=="string"&&n.secondaryHref.length>0,o="image"in n&&typeof n.image=="string"&&n.image.length>0,a=Me.useRef(null),[c,f]=Me.useState(!1);Me.useLayoutEffect(()=>{const p=a.current;if(!p)return;const _=()=>{f(p.scrollHeight>p.clientHeight+1)};_();const M=new ResizeObserver(_);return M.observe(p),()=>M.disconnect()},[n.description]);const d="card group elev-panel elev-panel-lift relative flex h-full min-h-[22rem] cursor-pointer flex-col overflow-hidden sm:min-h-[24rem]"+(o?" p-0":" p-5 sm:p-6"),h=o?"relative z-[1] flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6":"relative z-[1] flex min-h-0 flex-1 flex-col",m=()=>{e(n)},v=p=>{p.target.closest("a")||m()};return L.jsxs("div",{className:d,onClick:v,children:[L.jsx("span",{className:"pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100","aria-hidden":!0}),o?L.jsx("div",{className:"relative z-[1] flex h-40 shrink-0 items-center justify-center overflow-hidden border-b border-base-300/80 bg-base-200/40 p-3 sm:h-44 sm:p-4",children:L.jsx("img",{src:n.image,alt:"",loading:"lazy",decoding:"async",className:"max-h-full max-w-full object-contain object-center"})}):null,L.jsxs("div",{className:h,children:[L.jsxs("span",{className:"relative z-[1] text-xs font-medium uppercase tracking-wider text-base-content/60",children:[n.meta,t?L.jsx("span",{className:"ml-2 text-[0.65rem] font-normal normal-case text-base-content/50",children:"↗"}):null]}),L.jsx("h3",{className:"relative z-[1] mt-2 line-clamp-2 min-h-[2.5rem] font-display text-lg font-medium leading-snug tracking-[-0.02em] transition-colors group-hover:text-primary sm:text-xl",children:n.title}),L.jsxs("div",{className:"relative z-[1] mt-2 min-h-0 flex-1",children:[L.jsx("p",{ref:a,className:"line-clamp-3 text-sm leading-relaxed text-base-content/70",children:n.description}),L.jsx("div",{className:"mt-1.5 min-h-[1.375rem]",children:c?L.jsx("span",{"aria-hidden":!0,className:"text-sm font-semibold text-primary underline decoration-primary/35 underline-offset-2",children:"See more"}):null})]}),"tags"in n&&n.tags&&n.tags.length>0?L.jsx("div",{className:"relative z-[1] mt-3 max-h-[2.85rem] overflow-hidden sm:mt-4",children:L.jsx("ul",{className:"flex list-none flex-wrap gap-1.5 p-0","aria-label":"Technologies",children:n.tags.map(p=>L.jsx("li",{children:L.jsx("span",{className:"inline-block rounded-full bg-base-200 px-2 py-0.5 text-[0.7rem] font-medium text-base-content/80",children:p})},p))})}):null,L.jsx("div",{className:"relative z-[1] mt-auto flex flex-col gap-3 pt-4",children:r?L.jsxs("div",{className:"flex flex-wrap gap-2",onClick:p=>p.stopPropagation(),children:[L.jsx("a",{href:n.href,target:"_blank",rel:"noopener noreferrer","aria-label":n.label,className:"btn btn-sm btn-3d-primary rounded-full border-0 bg-base-content px-4 text-base-100 hover:bg-base-content/90",children:"Web app"}),L.jsx("a",{href:n.secondaryHref,target:"_blank",rel:"noopener noreferrer","aria-label":"secondaryLabel"in n&&n.secondaryLabel?n.secondaryLabel:"API",className:"btn btn-sm btn-outline btn-3d-outline rounded-full border-base-300 bg-transparent px-4 hover:border-primary/40 hover:bg-primary/10",children:"API"})]}):L.jsxs("a",{href:n.href,"aria-label":n.label,className:"btn btn-sm btn-3d-outline inline-flex w-fit items-center gap-1 rounded-full border border-base-300 bg-base-100 font-medium normal-case text-base-content hover:border-primary/40 hover:bg-primary/10",onClick:p=>p.stopPropagation(),...t?{target:"_blank",rel:"noopener noreferrer"}:{},children:[t?"Open project":"Details",L.jsx("span",{"aria-hidden":!0,className:"text-lg leading-none text-primary",children:"→"})]})})]})]})}function YD(n){return n.startsWith("http://")||n.startsWith("https://")}function qD({project:n,onClose:e}){const t=Me.useRef(null),[r,o]=Me.useState(0),a="subProjects"in n&&Array.isArray(n.subProjects)&&n.subProjects.length>0,c=Me.useMemo(()=>a?n.subProjects[r]:n,[a,n,r]);Me.useEffect(()=>{const p=t.current;p&&(p.open||p.showModal())},[]),Me.useEffect(()=>{const p=t.current;if(!p)return;const _=()=>{e()};return p.addEventListener("close",_),()=>p.removeEventListener("close",_)},[e]),Me.useEffect(()=>{o(0)},[n]);const f=typeof c.image=="string"&&c.image.length>0,d="secondaryHref"in n&&typeof n.secondaryHref=="string"&&n.secondaryHref.length>0,h=YD(c.href),m=a&&r>0,v=a&&"subProjects"in n&&Array.isArray(n.subProjects)&&r<n.subProjects.length-1;return L.jsxs("dialog",{ref:t,className:"modal modal-bottom sm:modal-middle z-[110]","aria-labelledby":"project-detail-title","aria-modal":"true",children:[L.jsxs("div",{className:"modal-box modal-box-3d relative max-h-[85vh] max-w-lg overflow-y-auto border border-base-300 bg-base-100 p-6 pt-14 sm:p-8 sm:pt-16",children:[L.jsx("form",{method:"dialog",className:"absolute right-3 top-3 z-20 sm:right-4 sm:top-4",children:L.jsx("button",{type:"submit","aria-label":"Close",className:"btn-close-3d flex h-10 w-10 items-center justify-center rounded-lg border border-t-base-200 border-b-[3px] border-b-base-content/20 border-l-base-300 border-r-base-300 bg-gradient-to-b from-base-100 to-base-300/45 text-lg font-light leading-none text-base-content outline-none ring-base-content/10 transition-[transform,box-shadow,filter] hover:brightness-105 focus-visible:ring-2 motion-safe:active:translate-y-[3px] dark:border-b-base-content/30 dark:from-base-200 dark:to-base-300/60",children:L.jsx("span",{"aria-hidden":!0,className:"-mt-0.5",children:"×"})})}),f?L.jsx("div",{className:"relative -mx-6 -mt-2 mb-6 sm:-mx-8",children:L.jsx("div",{className:"overflow-hidden rounded-2xl border border-base-300/70 bg-gradient-to-br from-base-200/80 to-base-300/40 p-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_16px_48px_-16px_rgba(0,0,0,0.45)] ring-1 ring-base-content/[0.06] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.65)]",children:L.jsx("div",{className:"relative overflow-hidden rounded-xl bg-base-200/30",children:L.jsx("div",{className:"flex aspect-[16/9] w-full min-h-0 items-center justify-center p-4 sm:aspect-[2/1] sm:p-6",children:L.jsx("img",{src:c.image,alt:"",className:"max-h-full max-w-full object-contain object-center"})})})})}):null,L.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-primary",children:c.meta}),L.jsx("h2",{id:"project-detail-title",className:"mt-1 font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl",children:c.title}),L.jsx("p",{className:"mt-4 text-base leading-relaxed text-base-content/80",children:c.description}),c.tags&&c.tags.length>0?L.jsx("ul",{className:"mt-5 flex list-none flex-wrap gap-1.5 p-0","aria-label":"Technologies",children:c.tags.map(p=>L.jsx("li",{className:"rounded-full bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/85",children:p},p))}):null,a?L.jsxs("div",{className:"mt-5 flex items-center justify-between gap-2 rounded-xl border border-base-300/70 bg-base-200/40 p-2",children:[L.jsx("button",{type:"button",className:"btn btn-sm btn-3d-outline rounded-full border-base-300 bg-base-100 px-4",onClick:()=>o(p=>p-1),disabled:!m,"aria-disabled":!m,children:"Previous"}),L.jsx("p",{className:"text-xs font-medium text-base-content/70",children:"subProjects"in n&&Array.isArray(n.subProjects)?`Project ${r+1} of ${n.subProjects.length}`:null}),L.jsx("button",{type:"button",className:"btn btn-sm btn-3d-outline rounded-full border-base-300 bg-base-100 px-4",onClick:()=>o(p=>p+1),disabled:!v,"aria-disabled":!v,children:"Next"})]}):null,L.jsx("div",{className:"modal-action mt-6 flex-wrap justify-start gap-2 p-0",children:d?L.jsxs(L.Fragment,{children:[L.jsx("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"btn btn-3d-primary rounded-full border-0 bg-base-content text-base-100 hover:bg-base-content/90",children:"Web app"}),L.jsx("a",{href:n.secondaryHref,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline btn-3d-outline rounded-full border-base-300 bg-transparent hover:border-primary/40 hover:bg-primary/10",children:"API"})]}):L.jsxs("a",{href:c.href,className:h?"btn btn-3d-primary rounded-full border-0 bg-base-content text-base-100 hover:bg-base-content/90":"btn btn-3d-outline rounded-full border-base-300 bg-base-100 hover:border-primary/40 hover:bg-primary/10",...h?{target:"_blank",rel:"noopener noreferrer"}:{},children:[h?"Open project":"View details",h?L.jsx("span",{"aria-hidden":!0,className:"ml-1",children:"↗"}):null]})})]}),L.jsx("form",{method:"dialog",className:"modal-backdrop",children:L.jsx("button",{type:"submit",className:"cursor-default","aria-label":"Close",children:" "})})]})}const ws=3;function $D(){const n=Me.useMemo(()=>[...bn.projects],[]),e=Math.max(1,Math.ceil(n.length/ws)),[t,r]=Me.useState(1),[o,a]=Me.useState(null);Me.useEffect(()=>{r(m=>Math.min(m,e))},[e]);const c=Me.useMemo(()=>{const m=(t-1)*ws;return n.slice(m,m+ws)},[n,t]),f=Me.useCallback(()=>{r(m=>Math.max(1,m-1))},[]),d=Me.useCallback(()=>{r(m=>Math.min(e,m+1))},[e]),h=n.length>ws;return L.jsxs("section",{id:"projects",className:"full-bleed viewport-section px-6 py-12 lg:px-10 sm:py-16 lg:py-24","aria-labelledby":"projects-heading",children:[o?L.jsx(qD,{project:o,onClose:()=>a(null)},`${o.title}-detail`):null,L.jsx(vn,{children:L.jsxs("div",{className:"mx-auto mb-8 max-w-lg text-center sm:mb-10",children:[L.jsx("h2",{id:"projects-heading",className:"section-heading-3d font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl",children:"Projects"}),L.jsx("p",{className:"mt-2 text-base text-base-content/70",children:"Works and experiments"})]})}),L.jsxs("div",{className:"mx-auto max-w-content",children:[L.jsx("ul",{className:"grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3",children:c.map((m,v)=>{const p=(t-1)*ws+v;return L.jsx("li",{className:"flex h-full min-h-0",children:L.jsx(vn,{delayMs:v*60,className:"h-full w-full min-w-0",children:L.jsx(XD,{project:m,onOpenDetail:a})})},`${m.title}-${p}`)})}),L.jsx(vn,{children:L.jsxs("div",{role:"region","aria-labelledby":"uptime-heading",className:"elev-panel-soft mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-xl border border-base-300/80 bg-gradient-to-br from-base-100 to-base-200/40 p-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4",children:[L.jsxs("div",{className:"min-w-0 flex items-start gap-3",children:[L.jsx("span",{className:"mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary","aria-hidden":!0,children:L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",children:L.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),L.jsxs("div",{children:[L.jsx("h3",{id:"uptime-heading",className:"font-display text-sm font-semibold tracking-tight text-base-content",children:"Project uptime"}),L.jsx("p",{className:"mt-0.5 text-xs leading-snug text-base-content/60",children:"Live service status on UptimeRobot — opens in a new tab (embedding is blocked by their site policy)."})]})]}),L.jsxs("a",{href:bn.uptimeStatusUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-3d-outline shrink-0 rounded-full border-base-300 bg-base-100 px-4 font-medium normal-case hover:border-primary/40 hover:bg-primary/10 sm:min-h-10 sm:px-5",children:["View status dashboard",L.jsx("span",{"aria-hidden":!0,className:"ml-1",children:"↗"})]})]})}),h?L.jsxs("nav",{className:"mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between","aria-label":"Projects pagination",children:[L.jsxs("p",{className:"text-center text-sm text-base-content/60 sm:text-left",children:["Showing"," ",L.jsx("span",{className:"font-medium text-base-content",children:(t-1)*ws+1}),"–",L.jsx("span",{className:"font-medium text-base-content",children:Math.min(t*ws,n.length)})," ","of"," ",L.jsx("span",{className:"font-medium text-base-content",children:n.length}),L.jsx("span",{className:"sr-only",children:", "}),L.jsx("span",{className:"hidden sm:inline",children:" · "}),L.jsxs("span",{className:"block sm:inline",children:["Page ",t," of ",e]})]}),L.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 sm:justify-end",children:[L.jsx("button",{type:"button",className:"btn btn-sm btn-3d-outline min-w-[5.5rem] border-base-300 bg-base-100 sm:min-w-0",onClick:f,disabled:t<=1,"aria-disabled":t<=1,children:"Previous"}),L.jsx("div",{className:"flex flex-wrap justify-center gap-1.5",role:"group","aria-label":"Page numbers",children:Array.from({length:e},(m,v)=>{const p=v+1,_=p===t;return L.jsx("button",{type:"button",className:["btn btn-sm min-h-9 min-w-9 px-0",_?"btn-primary pointer-events-none":"btn-ghost border border-transparent hover:border-base-300"].join(" "),onClick:()=>r(p),"aria-label":`Page ${p}`,"aria-current":_?"page":void 0,children:p},p)})}),L.jsx("button",{type:"button",className:"btn btn-sm btn-3d-outline min-w-[5.5rem] border-base-300 bg-base-100 sm:min-w-0",onClick:d,disabled:t>=e,"aria-disabled":t>=e,children:"Next"})]})]}):null]})]})}function KD(){const[n,e]=Me.useState(!1),[t,r]=Me.useState(!1);return L.jsxs(L.Fragment,{children:[L.jsx("a",{href:"#main",className:"fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-content shadow-[0_4px_0_0_hsl(var(--p)/0.45)] transition-transform focus:translate-y-0",children:"Skip to content"}),L.jsx(BD,{onOpenContact:()=>e(!0)}),L.jsx(AD,{open:n,onClose:()=>e(!1)}),L.jsx(bD,{open:t,onClose:()=>r(!1)}),L.jsx("div",{className:"page-three-bg","aria-hidden":!0,children:L.jsx(WD,{})}),L.jsx("main",{id:"main",className:"portfolio-scene relative z-10 pt-28 sm:pt-[4.25rem]",children:L.jsxs("div",{className:"mx-auto max-w-content px-6 lg:px-10",children:[L.jsx(zD,{onOpenContact:()=>e(!0),onOpenCertifications:()=>r(!0)}),L.jsx($D,{}),L.jsx(RD,{}),L.jsx(CD,{}),L.jsx(PC,{}),L.jsx(PD,{})]})})]})}dE.createRoot(document.getElementById("root")).render(L.jsx(Me.StrictMode,{children:L.jsx(UD,{children:L.jsx(KD,{})})}));
