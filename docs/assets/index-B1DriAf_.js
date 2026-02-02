(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function mS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kf={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function gS(){if(I0)return zo;I0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var F0;function vS(){return F0||(F0=1,Kf.exports=gS()),Kf.exports}var T=vS(),Qf={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function _S(){if(B0)return ut;B0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function S(L,X,H){this.props=L,this.context=X,this.refs=v,this.updater=H||E}S.prototype.isReactComponent={},S.prototype.setState=function(L,X){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,X,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function U(){}U.prototype=S.prototype;function R(L,X,H){this.props=L,this.context=X,this.refs=v,this.updater=H||E}var F=R.prototype=new U;F.constructor=R,b(F,S.prototype),F.isPureReactComponent=!0;var k=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},ue=Object.prototype.hasOwnProperty;function w(L,X,H){var Q=H.ref;return{$$typeof:s,type:L,key:X,ref:Q!==void 0?Q:null,props:H}}function P(L,X){return w(L.type,X,L.props)}function ne(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function fe(L){var X={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(H){return X[H]})}var be=/\/+/g;function j(L,X){return typeof L=="object"&&L!==null&&L.key!=null?fe(""+L.key):X.toString(36)}function ee(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(X){L.status==="pending"&&(L.status="fulfilled",L.value=X)},function(X){L.status==="pending"&&(L.status="rejected",L.reason=X)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function I(L,X,H,Q,Z){var _e=typeof L;(_e==="undefined"||_e==="boolean")&&(L=null);var Te=!1;if(L===null)Te=!0;else switch(_e){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(L.$$typeof){case s:case t:Te=!0;break;case _:return Te=L._init,I(Te(L._payload),X,H,Q,Z)}}if(Te)return Z=Z(L),Te=Q===""?"."+j(L,0):Q,k(Z)?(H="",Te!=null&&(H=Te.replace(be,"$&/")+"/"),I(Z,X,H,"",function(ke){return ke})):Z!=null&&(ne(Z)&&(Z=P(Z,H+(Z.key==null||L&&L.key===Z.key?"":(""+Z.key).replace(be,"$&/")+"/")+Te)),X.push(Z)),1;Te=0;var Ge=Q===""?".":Q+":";if(k(L))for(var Pe=0;Pe<L.length;Pe++)Q=L[Pe],_e=Ge+j(Q,Pe),Te+=I(Q,X,H,_e,Z);else if(Pe=y(L),typeof Pe=="function")for(L=Pe.call(L),Pe=0;!(Q=L.next()).done;)Q=Q.value,_e=Ge+j(Q,Pe++),Te+=I(Q,X,H,_e,Z);else if(_e==="object"){if(typeof L.then=="function")return I(ee(L),X,H,Q,Z);throw X=String(L),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Te}function W(L,X,H){if(L==null)return L;var Q=[],Z=0;return I(L,Q,"","",function(_e){return X.call(H,_e,Z++)}),Q}function K(L){if(L._status===-1){var X=L._result;X=X(),X.then(function(H){(L._status===0||L._status===-1)&&(L._status=1,L._result=H)},function(H){(L._status===0||L._status===-1)&&(L._status=2,L._result=H)}),L._status===-1&&(L._status=0,L._result=X)}if(L._status===1)return L._result.default;throw L._result}var se=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},pe={map:W,forEach:function(L,X,H){W(L,function(){X.apply(this,arguments)},H)},count:function(L){var X=0;return W(L,function(){X++}),X},toArray:function(L){return W(L,function(X){return X})||[]},only:function(L){if(!ne(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ut.Activity=g,ut.Children=pe,ut.Component=S,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=R,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ut.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ut.cache=function(L){return function(){return L.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(L,X,H){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Q=b({},L.props),Z=L.key;if(X!=null)for(_e in X.key!==void 0&&(Z=""+X.key),X)!ue.call(X,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&X.ref===void 0||(Q[_e]=X[_e]);var _e=arguments.length-2;if(_e===1)Q.children=H;else if(1<_e){for(var Te=Array(_e),Ge=0;Ge<_e;Ge++)Te[Ge]=arguments[Ge+2];Q.children=Te}return w(L.type,Z,Q)},ut.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ut.createElement=function(L,X,H){var Q,Z={},_e=null;if(X!=null)for(Q in X.key!==void 0&&(_e=""+X.key),X)ue.call(X,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(Z[Q]=X[Q]);var Te=arguments.length-2;if(Te===1)Z.children=H;else if(1<Te){for(var Ge=Array(Te),Pe=0;Pe<Te;Pe++)Ge[Pe]=arguments[Pe+2];Z.children=Ge}if(L&&L.defaultProps)for(Q in Te=L.defaultProps,Te)Z[Q]===void 0&&(Z[Q]=Te[Q]);return w(L,_e,Z)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(L){return{$$typeof:f,render:L}},ut.isValidElement=ne,ut.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:K}},ut.memo=function(L,X){return{$$typeof:p,type:L,compare:X===void 0?null:X}},ut.startTransition=function(L){var X=z.T,H={};z.T=H;try{var Q=L(),Z=z.S;Z!==null&&Z(H,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(O,se)}catch(_e){se(_e)}finally{X!==null&&H.types!==null&&(X.types=H.types),z.T=X}},ut.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ut.use=function(L){return z.H.use(L)},ut.useActionState=function(L,X,H){return z.H.useActionState(L,X,H)},ut.useCallback=function(L,X){return z.H.useCallback(L,X)},ut.useContext=function(L){return z.H.useContext(L)},ut.useDebugValue=function(){},ut.useDeferredValue=function(L,X){return z.H.useDeferredValue(L,X)},ut.useEffect=function(L,X){return z.H.useEffect(L,X)},ut.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ut.useId=function(){return z.H.useId()},ut.useImperativeHandle=function(L,X,H){return z.H.useImperativeHandle(L,X,H)},ut.useInsertionEffect=function(L,X){return z.H.useInsertionEffect(L,X)},ut.useLayoutEffect=function(L,X){return z.H.useLayoutEffect(L,X)},ut.useMemo=function(L,X){return z.H.useMemo(L,X)},ut.useOptimistic=function(L,X){return z.H.useOptimistic(L,X)},ut.useReducer=function(L,X,H){return z.H.useReducer(L,X,H)},ut.useRef=function(L){return z.H.useRef(L)},ut.useState=function(L){return z.H.useState(L)},ut.useSyncExternalStore=function(L,X,H){return z.H.useSyncExternalStore(L,X,H)},ut.useTransition=function(){return z.H.useTransition()},ut.version="19.2.0",ut}var H0;function Zd(){return H0||(H0=1,Qf.exports=_S()),Qf.exports}var ze=Zd();const Ev=mS(ze);var Jf={exports:{}},Po={},$f={exports:{}},ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function xS(){return G0||(G0=1,(function(s){function t(I,W){var K=I.length;I.push(W);e:for(;0<K;){var se=K-1>>>1,pe=I[se];if(0<l(pe,W))I[se]=W,I[K]=pe,K=se;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],K=I.pop();if(K!==W){I[0]=K;e:for(var se=0,pe=I.length,L=pe>>>1;se<L;){var X=2*(se+1)-1,H=I[X],Q=X+1,Z=I[Q];if(0>l(H,K))Q<pe&&0>l(Z,H)?(I[se]=Z,I[Q]=K,se=Q):(I[se]=H,I[X]=K,se=X);else if(Q<pe&&0>l(Z,K))I[se]=Z,I[Q]=K,se=Q;else break e}}return W}function l(I,W){var K=I.sortIndex-W.sortIndex;return K!==0?K:I.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();s.unstable_now=function(){return h.now()-f}}var m=[],p=[],_=1,g=null,x=3,y=!1,E=!1,b=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function F(I){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=I)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function k(I){if(b=!1,F(I),!E)if(i(m)!==null)E=!0,O||(O=!0,fe());else{var W=i(p);W!==null&&ee(k,W.startTime-I)}}var O=!1,z=-1,ue=5,w=-1;function P(){return v?!0:!(s.unstable_now()-w<ue)}function ne(){if(v=!1,O){var I=s.unstable_now();w=I;var W=!0;try{e:{E=!1,b&&(b=!1,U(z),z=-1),y=!0;var K=x;try{t:{for(F(I),g=i(m);g!==null&&!(g.expirationTime>I&&P());){var se=g.callback;if(typeof se=="function"){g.callback=null,x=g.priorityLevel;var pe=se(g.expirationTime<=I);if(I=s.unstable_now(),typeof pe=="function"){g.callback=pe,F(I),W=!0;break t}g===i(m)&&r(m),F(I)}else r(m);g=i(m)}if(g!==null)W=!0;else{var L=i(p);L!==null&&ee(k,L.startTime-I),W=!1}}break e}finally{g=null,x=K,y=!1}W=void 0}}finally{W?fe():O=!1}}}var fe;if(typeof R=="function")fe=function(){R(ne)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,j=be.port2;be.port1.onmessage=ne,fe=function(){j.postMessage(null)}}else fe=function(){S(ne,0)};function ee(I,W){z=S(function(){I(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var K=x;x=W;try{return I()}finally{x=K}},s.unstable_requestPaint=function(){v=!0},s.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=x;x=I;try{return W()}finally{x=K}},s.unstable_scheduleCallback=function(I,W,K){var se=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,I){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=K+pe,I={id:_++,callback:W,priorityLevel:I,startTime:K,expirationTime:pe,sortIndex:-1},K>se?(I.sortIndex=K,t(p,I),i(m)===null&&I===i(p)&&(b?(U(z),z=-1):b=!0,ee(k,K-se))):(I.sortIndex=pe,t(m,I),E||y||(E=!0,O||(O=!0,fe()))),I},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(I){var W=x;return function(){var K=x;x=W;try{return I.apply(this,arguments)}finally{x=K}}}})(ed)),ed}var V0;function SS(){return V0||(V0=1,$f.exports=xS()),$f.exports}var td={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function yS(){if(k0)return wn;k0=1;var s=Zd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},wn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=f(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var j0;function MS(){if(j0)return td.exports;j0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),td.exports=yS(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function ES(){if(W0)return Po;W0=1;var s=SS(),t=Zd(),i=MS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=d;break}if(A===o){M=!0,o=u,a=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===a){M=!0,a=d,o=u;break}if(A===o){M=!0,o=d,a=u;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),R=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function j(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case v:return"StrictMode";case k:return"Suspense";case O:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case R:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:j(e.type)||"Memo";case ue:n=e._payload,e=e._init;try{return j(e(n))}catch{}}return null}var ee=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},se=[],pe=-1;function L(e){return{current:e}}function X(e){0>pe||(e.current=se[pe],se[pe]=null,pe--)}function H(e,n){pe++,se[pe]=e.current,e.current=n}var Q=L(null),Z=L(null),_e=L(null),Te=L(null);function Ge(e,n){switch(H(_e,n),H(Z,e),H(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?s0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=s0(n),e=o0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(Q),H(Q,e)}function Pe(){X(Q),X(Z),X(_e)}function ke(e){e.memoizedState!==null&&H(Te,e);var n=Q.current,a=o0(n,e.type);n!==a&&(H(Z,e),H(Q,a))}function ct(e){Z.current===e&&(X(Q),X(Z)),Te.current===e&&(X(Te),Lo._currentValue=K)}var te,jt;function je(e){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+jt}var st=!1;function Ve(e,n){if(!e||st)return"";st=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(de){var ie=de}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(de){ie=de}e.call(ve.prototype)}}else{try{throw Error()}catch(de){ie=de}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(de){if(de&&ie&&typeof de.stack=="string")return[de.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var B=M.split(`
`),$=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===$.length)for(o=B.length-1,u=$.length-1;1<=o&&0<=u&&B[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==$[u]){var me=`
`+B[o].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=o&&0<=u);break}}}finally{st=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?je(a):""}function Ot(e,n){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je("Lazy");case 13:return e.child!==n&&n!==null?je("Suspense Fallback"):je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return je("Activity");default:return""}}function lt(e){try{var n="",a=null;do n+=Ot(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var N=Object.prototype.hasOwnProperty,C=s.unstable_scheduleCallback,ae=s.unstable_cancelCallback,Ee=s.unstable_shouldYield,ye=s.unstable_requestPaint,xe=s.unstable_now,Ze=s.unstable_getCurrentPriorityLevel,Le=s.unstable_ImmediatePriority,le=s.unstable_UserBlockingPriority,Ue=s.unstable_NormalPriority,nt=s.unstable_LowPriority,Se=s.unstable_IdlePriority,Et=s.log,ft=s.unstable_setDisableYieldValue,tt=null,Ie=null;function Oe(e){if(typeof Et=="function"&&ft(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(tt,e)}catch{}}var Ke=Math.clz32?Math.clz32:Je,vt=Math.log,Wt=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(vt(e)/Wt|0)|0}var Ae=256,G=262144,Ce=4194304;function Re(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Re(o):(M&=A,M!==0?u=Re(M):a||(a=A&~e,a!==0&&(u=Re(a))))):(A=o&~d,A!==0?u=Re(A):M!==0?u=Re(M):a||(a=o&~e,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function we(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ct(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function Zt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Jt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wt(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=M&~a;0<a;){var me=31-Ke(a),ve=1<<me;A[me]=0,B[me]=-1;var ie=$[me];if(ie!==null)for($[me]=null,me=0;me<ie.length;me++){var de=ie[me];de!==null&&(de.lane&=-536870913)}a&=~ve}o!==0&&nn(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function nn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ke(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Nn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ke(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ir(e,n){var a=n&-n;return a=(a&42)!==0?1:ar(a),(a&(e.suspendedLanes|n))!==0?0:a}function ar(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ni(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:D0(e.type))}function ki(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Jn=Math.random().toString(36).slice(2),Me="__reactFiber$"+Jn,et="__reactProps$"+Jn,Dt="__reactContainer$"+Jn,Mi="__reactEvents$"+Jn,D="__reactListeners$"+Jn,Y="__reactHandles$"+Jn,oe="__reactResources$"+Jn,ce="__reactMarker$"+Jn;function re(e){delete e[Me],delete e[et],delete e[Mi],delete e[D],delete e[Y]}function Ne(e){var n=e[Me];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Dt]||a[Me]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=p0(e);e!==null;){if(a=e[Me])return a;e=p0(e)}return n}e=a,a=e.parentNode}return null}function Fe(e){if(e=e[Me]||e[Dt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function He(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Xe(e){var n=e[oe];return n||(n=e[oe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qe(e){e[ce]=!0}var at=new Set,Be={};function rt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Be[e]=n,e=0;e<n.length;e++)at.add(n[e])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),On={},zt={};function dt(e){return N.call(zt,e)?!0:N.call(On,e)?!1:$t.test(e)?zt[e]=!0:(On[e]=!0,!1)}function Oi(e,n,a){if(dt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function js(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function on(e){if(!e._valueTracker){var n=Hn(e)?"checked":"value";e._valueTracker=js(e,n,""+e[n])}}function zi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Hn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function Cn(e){return e.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ws(e,n,a,o,u,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_n(n)):e.value!==""+_n(n)&&(e.value=""+_n(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?jc(e,M,_n(n)):a!=null?jc(e,M,_n(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_n(A):e.removeAttribute("name")}function Xs(e,n,a,o,u,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){on(e);return}a=a!=null?""+_n(a):"",n=n!=null?""+_n(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),on(e)}function jc(e,n,a){n==="number"&&Sa(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pr(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_n(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function th(e,n,a){if(n!=null&&(n=""+_n(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_n(a):""}function nh(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ee(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_n(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),on(e)}function Ir(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var u_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ih(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||u_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ah(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ih(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&ih(e,d,n[d])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return d_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Xc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fr=null,Br=null;function rh(e){var n=Fe(e);if(n&&(e=n.stateNode)){var a=e[et]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ws(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[et]||null;if(!u)throw Error(r(90));Ws(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&zi(o)}break e;case"textarea":th(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Pr(e,!!a.multiple,n,!1)}}}var Yc=!1;function sh(e,n,a){if(Yc)return e(n,a);Yc=!0;try{var o=e(n);return o}finally{if(Yc=!1,(Fr!==null||Br!==null)&&(Il(),Fr&&(n=Fr,e=Br,Br=Fr=null,rh(n),e)))for(n=0;n<e.length;n++)rh(e[n])}}function qs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[et]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Wi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Zc=!1}var ya=null,Kc=null,Qo=null;function oh(){if(Qo)return Qo;var e,n=Kc,a=n.length,o,u="value"in ya?ya.value:ya.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function lh(){return!1}function Vn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?$o:lh,this.isPropagationStopped=lh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Vn(sr),Zs=g({},sr,{view:0,detail:0}),h_=Vn(Zs),Qc,Jc,Ks,tl=g({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(Qc=e.screenX-Ks.screenX,Jc=e.screenY-Ks.screenY):Jc=Qc=0,Ks=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),ch=Vn(tl),p_=g({},tl,{dataTransfer:0}),m_=Vn(p_),g_=g({},Zs,{relatedTarget:0}),$c=Vn(g_),v_=g({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),__=Vn(v_),x_=g({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S_=Vn(x_),y_=g({},sr,{data:0}),uh=Vn(y_),M_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=b_[e])?!!n[e]:!1}function eu(){return T_}var A_=g({},Zs,{key:function(e){if(e.key){var n=M_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R_=Vn(A_),C_=g({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Vn(C_),w_=g({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),D_=Vn(w_),L_=g({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=Vn(L_),N_=g({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O_=Vn(N_),z_=g({},sr,{newState:0,oldState:0}),P_=Vn(z_),I_=[9,13,27,32],tu=Wi&&"CompositionEvent"in window,Qs=null;Wi&&"documentMode"in document&&(Qs=document.documentMode);var F_=Wi&&"TextEvent"in window&&!Qs,dh=Wi&&(!tu||Qs&&8<Qs&&11>=Qs),hh=" ",ph=!1;function mh(e,n){switch(e){case"keyup":return I_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function B_(e,n){switch(e){case"compositionend":return gh(n);case"keypress":return n.which!==32?null:(ph=!0,hh);case"textInput":return e=n.data,e===hh&&ph?null:e;default:return null}}function H_(e,n){if(Hr)return e==="compositionend"||!tu&&mh(e,n)?(e=oh(),Qo=Kc=ya=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dh&&n.locale!=="ko"?null:n.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!G_[e.type]:n==="textarea"}function _h(e,n,a,o){Fr?Br?Br.push(o):Br=[o]:Fr=o,n=jl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Js=null,$s=null;function V_(e){e0(e,0)}function nl(e){var n=He(e);if(zi(n))return e}function xh(e,n){if(e==="change")return n}var Sh=!1;if(Wi){var nu;if(Wi){var iu="oninput"in document;if(!iu){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),iu=typeof yh.oninput=="function"}nu=iu}else nu=!1;Sh=nu&&(!document.documentMode||9<document.documentMode)}function Mh(){Js&&(Js.detachEvent("onpropertychange",Eh),$s=Js=null)}function Eh(e){if(e.propertyName==="value"&&nl($s)){var n=[];_h(n,$s,e,qc(e)),sh(V_,n)}}function k_(e,n,a){e==="focusin"?(Mh(),Js=n,$s=a,Js.attachEvent("onpropertychange",Eh)):e==="focusout"&&Mh()}function j_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl($s)}function W_(e,n){if(e==="click")return nl(n)}function X_(e,n){if(e==="input"||e==="change")return nl(n)}function q_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:q_;function eo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!N.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function bh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,n){var a=bh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bh(a)}}function Ah(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ah(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sa(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sa(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Y_=Wi&&"documentMode"in document&&11>=document.documentMode,Gr=null,ru=null,to=null,su=!1;function Ch(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Gr==null||Gr!==Sa(o)||(o=Gr,"selectionStart"in o&&au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=jl(ru,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Gr)))}function or(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},ou={},wh={};Wi&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function lr(e){if(ou[e])return ou[e];if(!Vr[e])return e;var n=Vr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wh)return ou[e]=n[a];return e}var Dh=lr("animationend"),Lh=lr("animationiteration"),Uh=lr("animationstart"),Z_=lr("transitionrun"),K_=lr("transitionstart"),Q_=lr("transitioncancel"),Nh=lr("transitionend"),Oh=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function Ei(e,n){Oh.set(e,n),rt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],kr=0,cu=0;function al(){for(var e=kr,n=cu=kr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&zh(a,u,d)}}function rl(e,n,a,o){ci[kr++]=e,ci[kr++]=n,ci[kr++]=a,ci[kr++]=o,cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uu(e,n,a,o){return rl(e,n,a,o),sl(e)}function cr(e,n){return rl(e,null,null,n),sl(e)}function zh(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ke(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function sl(e){if(50<bo)throw bo=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var jr={};function J_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new J_(e,n,a,o)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ph(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")fu(e)&&(M=1);else if(typeof e=="string")M=iS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=ei(31,a,n,u),e.elementType=w,e.lanes=d,e;case b:return ur(a.children,u,d,n);case v:M=8,u|=24;break;case S:return e=ei(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case k:return e=ei(13,a,n,u),e.elementType=k,e.lanes=d,e;case O:return e=ei(19,a,n,u),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:M=10;break e;case U:M=9;break e;case F:M=11;break e;case z:M=14;break e;case ue:M=16,o=null;break e}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ei(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function ur(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function du(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Ih(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function hu(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fh=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Fh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:lt(n)},Fh.set(e,n),n)}return{value:e,source:n,stack:lt(n)}}var Wr=[],Xr=0,ll=null,no=0,fi=[],di=0,Ma=null,Pi=1,Ii="";function qi(e,n){Wr[Xr++]=no,Wr[Xr++]=ll,ll=e,no=n}function Bh(e,n,a){fi[di++]=Pi,fi[di++]=Ii,fi[di++]=Ma,Ma=e;var o=Pi;e=Ii;var u=32-Ke(o)-1;o&=~(1<<u),a+=1;var d=32-Ke(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Pi=1<<32-Ke(n)+u|a<<u|o,Ii=d+e}else Pi=1<<d|a<<u|o,Ii=e}function pu(e){e.return!==null&&(qi(e,1),Bh(e,1,0))}function mu(e){for(;e===ll;)ll=Wr[--Xr],Wr[Xr]=null,no=Wr[--Xr],Wr[Xr]=null;for(;e===Ma;)Ma=fi[--di],fi[di]=null,Ii=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null}function Hh(e,n){fi[di++]=Pi,fi[di++]=Ii,fi[di++]=Ma,Pi=n.id,Ii=n.overflow,Ma=e}var yn=null,Xt=null,Mt=!1,Ea=null,hi=!1,gu=Error(r(519));function ba(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ui(n,e)),gu}function Gh(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Me]=e,n[et]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)xt(Ao[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Xs(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),nh(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||a0(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||ba(e,!0)}function Vh(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:yn=yn.return}}function qr(e){if(e!==yn)return!1;if(!Mt)return Vh(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Xt&&ba(e),Vh(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xt=h0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xt=h0(e)}else n===27?(n=Xt,Fa(e.type)?(e=Hf,Hf=null,Xt=e):Xt=n):Xt=yn?mi(e.stateNode.nextSibling):null;return!0}function fr(){Xt=yn=null,Mt=!1}function vu(){var e=Ea;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Ea=null),e}function io(e){Ea===null?Ea=[e]:Ea.push(e)}var _u=L(null),dr=null,Yi=null;function Ta(e,n,a){H(_u,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=_u.current,X(_u)}function xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),xu(d.return,a,e),o||(M=null);break e}d=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),xu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Yr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=u.type;$n(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Te.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){dr=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return kh(dr,e)}function ul(e,n){return dr===null&&hr(e),kh(e,n)}function kh(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(e===null)throw Error(r(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return a}var $_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ex=s.unstable_scheduleCallback,tx=s.unstable_NormalPriority,ln={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new $_,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&ex(tx,function(){e.controller.abort()})}var ro=null,Mu=0,Zr=0,Kr=null;function nx(e,n){if(ro===null){var a=ro=[];Mu=0,Zr=Af(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(jh,jh),n}function jh(){if(--Mu===0&&ro!==null){Kr!==null&&(Kr.status="fulfilled");var e=ro;ro=null,Zr=0,Kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ix(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Wh=I.S;I.S=function(e,n){Cm=xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nx(e,n),Wh!==null&&Wh(e,n)};var pr=L(null);function Eu(){var e=pr.current;return e!==null?e:kt.pooledCache}function fl(e,n){n===null?H(pr,pr.current):H(pr,n.pool)}function Xh(){var e=Eu();return e===null?null:{parent:ln._currentValue,pool:e}}var Qr=Error(r(460)),bu=Error(r(474)),dl=Error(r(542)),hl={then:function(){}};function qh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yh(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kh(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kh(e),e}throw gr=n,Qr}}function mr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,Qr):a}}var gr=null;function Zh(){if(gr===null)throw Error(r(459));var e=gr;return gr=null,e}function Kh(e){if(e===Qr||e===dl)throw Error(r(483))}var Jr=null,so=0;function pl(e){var n=so;return so+=1,Jr===null&&(Jr=[]),Yh(Jr,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qh(e){function n(q,V){if(e){var J=q.deletions;J===null?(q.deletions=[V],q.flags|=16):J.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Xi(q,V),q.index=0,q.sibling=null,q}function d(q,V,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<V?(q.flags|=67108866,V):J):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,V,J,ge){return V===null||V.tag!==6?(V=du(J,q.mode,ge),V.return=q,V):(V=u(V,J),V.return=q,V)}function B(q,V,J,ge){var Qe=J.type;return Qe===b?me(q,V,J.props.children,ge,J.key):V!==null&&(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&mr(Qe)===V.type)?(V=u(V,J.props),oo(V,J),V.return=q,V):(V=ol(J.type,J.key,J.props,null,q.mode,ge),oo(V,J),V.return=q,V)}function $(q,V,J,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=hu(J,q.mode,ge),V.return=q,V):(V=u(V,J.children||[]),V.return=q,V)}function me(q,V,J,ge,Qe){return V===null||V.tag!==7?(V=ur(J,q.mode,ge,Qe),V.return=q,V):(V=u(V,J),V.return=q,V)}function ve(q,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=du(""+V,q.mode,J),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return J=ol(V.type,V.key,V.props,null,q.mode,J),oo(J,V),J.return=q,J;case E:return V=hu(V,q.mode,J),V.return=q,V;case ue:return V=mr(V),ve(q,V,J)}if(ee(V)||fe(V))return V=ur(V,q.mode,J,null),V.return=q,V;if(typeof V.then=="function")return ve(q,pl(V),J);if(V.$$typeof===R)return ve(q,ul(q,V),J);ml(q,V)}return null}function ie(q,V,J,ge){var Qe=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Qe!==null?null:A(q,V,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Qe?B(q,V,J,ge):null;case E:return J.key===Qe?$(q,V,J,ge):null;case ue:return J=mr(J),ie(q,V,J,ge)}if(ee(J)||fe(J))return Qe!==null?null:me(q,V,J,ge,null);if(typeof J.then=="function")return ie(q,V,pl(J),ge);if(J.$$typeof===R)return ie(q,V,ul(q,J),ge);ml(q,J)}return null}function de(q,V,J,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return q=q.get(J)||null,A(V,q,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return q=q.get(ge.key===null?J:ge.key)||null,B(V,q,ge,Qe);case E:return q=q.get(ge.key===null?J:ge.key)||null,$(V,q,ge,Qe);case ue:return ge=mr(ge),de(q,V,J,ge,Qe)}if(ee(ge)||fe(ge))return q=q.get(J)||null,me(V,q,ge,Qe,null);if(typeof ge.then=="function")return de(q,V,J,pl(ge),Qe);if(ge.$$typeof===R)return de(q,V,J,ul(V,ge),Qe);ml(V,ge)}return null}function We(q,V,J,ge){for(var Qe=null,bt=null,Ye=V,pt=V=0,yt=null;Ye!==null&&pt<J.length;pt++){Ye.index>pt?(yt=Ye,Ye=null):yt=Ye.sibling;var Tt=ie(q,Ye,J[pt],ge);if(Tt===null){Ye===null&&(Ye=yt);break}e&&Ye&&Tt.alternate===null&&n(q,Ye),V=d(Tt,V,pt),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt,Ye=yt}if(pt===J.length)return a(q,Ye),Mt&&qi(q,pt),Qe;if(Ye===null){for(;pt<J.length;pt++)Ye=ve(q,J[pt],ge),Ye!==null&&(V=d(Ye,V,pt),bt===null?Qe=Ye:bt.sibling=Ye,bt=Ye);return Mt&&qi(q,pt),Qe}for(Ye=o(Ye);pt<J.length;pt++)yt=de(Ye,q,pt,J[pt],ge),yt!==null&&(e&&yt.alternate!==null&&Ye.delete(yt.key===null?pt:yt.key),V=d(yt,V,pt),bt===null?Qe=yt:bt.sibling=yt,bt=yt);return e&&Ye.forEach(function(ka){return n(q,ka)}),Mt&&qi(q,pt),Qe}function it(q,V,J,ge){if(J==null)throw Error(r(151));for(var Qe=null,bt=null,Ye=V,pt=V=0,yt=null,Tt=J.next();Ye!==null&&!Tt.done;pt++,Tt=J.next()){Ye.index>pt?(yt=Ye,Ye=null):yt=Ye.sibling;var ka=ie(q,Ye,Tt.value,ge);if(ka===null){Ye===null&&(Ye=yt);break}e&&Ye&&ka.alternate===null&&n(q,Ye),V=d(ka,V,pt),bt===null?Qe=ka:bt.sibling=ka,bt=ka,Ye=yt}if(Tt.done)return a(q,Ye),Mt&&qi(q,pt),Qe;if(Ye===null){for(;!Tt.done;pt++,Tt=J.next())Tt=ve(q,Tt.value,ge),Tt!==null&&(V=d(Tt,V,pt),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt);return Mt&&qi(q,pt),Qe}for(Ye=o(Ye);!Tt.done;pt++,Tt=J.next())Tt=de(Ye,q,pt,Tt.value,ge),Tt!==null&&(e&&Tt.alternate!==null&&Ye.delete(Tt.key===null?pt:Tt.key),V=d(Tt,V,pt),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt);return e&&Ye.forEach(function(pS){return n(q,pS)}),Mt&&qi(q,pt),Qe}function Bt(q,V,J,ge){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:e:{for(var Qe=J.key;V!==null;){if(V.key===Qe){if(Qe=J.type,Qe===b){if(V.tag===7){a(q,V.sibling),ge=u(V,J.props.children),ge.return=q,q=ge;break e}}else if(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&mr(Qe)===V.type){a(q,V.sibling),ge=u(V,J.props),oo(ge,J),ge.return=q,q=ge;break e}a(q,V);break}else n(q,V);V=V.sibling}J.type===b?(ge=ur(J.props.children,q.mode,ge,J.key),ge.return=q,q=ge):(ge=ol(J.type,J.key,J.props,null,q.mode,ge),oo(ge,J),ge.return=q,q=ge)}return M(q);case E:e:{for(Qe=J.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(q,V.sibling),ge=u(V,J.children||[]),ge.return=q,q=ge;break e}else{a(q,V);break}else n(q,V);V=V.sibling}ge=hu(J,q.mode,ge),ge.return=q,q=ge}return M(q);case ue:return J=mr(J),Bt(q,V,J,ge)}if(ee(J))return We(q,V,J,ge);if(fe(J)){if(Qe=fe(J),typeof Qe!="function")throw Error(r(150));return J=Qe.call(J),it(q,V,J,ge)}if(typeof J.then=="function")return Bt(q,V,pl(J),ge);if(J.$$typeof===R)return Bt(q,V,ul(q,J),ge);ml(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(q,V.sibling),ge=u(V,J),ge.return=q,q=ge):(a(q,V),ge=du(J,q.mode,ge),ge.return=q,q=ge),M(q)):a(q,V)}return function(q,V,J,ge){try{so=0;var Qe=Bt(q,V,J,ge);return Jr=null,Qe}catch(Ye){if(Ye===Qr||Ye===dl)throw Ye;var bt=ei(29,Ye,null,q.mode);return bt.lanes=ge,bt.return=q,bt}finally{}}}var vr=Qh(!0),Jh=Qh(!1),Aa=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Rt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=sl(e),zh(e,null,a),n}return rl(e,o,n,a),sl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Nn(e,a)}}function Ru(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function co(){if(Cu){var e=Kr;if(e!==null)throw e}}function uo(e,n,a,o){Cu=!1;var u=e.updateQueue;Aa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,$=B.next;B.next=null,M===null?d=$:M.next=$,M=B;var me=e.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==M&&(A===null?me.firstBaseUpdate=$:A.next=$,me.lastBaseUpdate=B))}if(d!==null){var ve=u.baseState;M=0,me=$=B=null,A=d;do{var ie=A.lane&-536870913,de=ie!==A.lane;if(de?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===Zr&&(Cu=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var We=e,it=A;ie=n;var Bt=a;switch(it.tag){case 1:if(We=it.payload,typeof We=="function"){ve=We.call(Bt,ve,ie);break e}ve=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=it.payload,ie=typeof We=="function"?We.call(Bt,ve,ie):We,ie==null)break e;ve=g({},ve,ie);break e;case 2:Aa=!0}}ie=A.callback,ie!==null&&(e.flags|=64,de&&(e.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ie]:de.push(ie))}else de={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?($=me=de,B=ve):me=me.next=de,M|=ie;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;de=A,A=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);me===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),Na|=M,e.lanes=M,e.memoizedState=ve}}function $h(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function ep(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$h(a[e],n)}var $r=L(null),gl=L(0);function tp(e,n){e=aa,H(gl,e),H($r,n),aa=e|n.baseLanes}function wu(){H(gl,aa),H($r,$r.current)}function Du(){aa=gl.current,X($r),X(gl)}var ti=L(null),pi=null;function wa(e){var n=e.alternate;H(an,an.current&1),H(ti,e),pi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(pi=e)}function Lu(e){H(an,an.current),H(ti,e),pi===null&&(pi=e)}function np(e){e.tag===22?(H(an,an.current),H(ti,e),pi===null&&(pi=e)):Da()}function Da(){H(an,an.current),H(ti,ti.current)}function ni(e){X(ti),pi===e&&(pi=null),X(an)}var an=L(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ht=null,It=null,cn=null,_l=!1,es=!1,_r=!1,xl=0,fo=0,ts=null,ax=0;function en(){throw Error(r(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,d){return Ki=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Bp:Yu,_r=!1,d=a(o,u),_r=!1,es&&(d=ap(n,a,o,u)),ip(e),d}function ip(e){I.H=mo;var n=It!==null&&It.next!==null;if(Ki=0,cn=It=ht=null,_l=!1,fo=0,ts=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&cl(e)&&(un=!0))}function ap(e,n,a,o){ht=e;var u=0;do{if(es&&(ts=null),fo=0,es=!1,25<=u)throw Error(r(301));if(u+=1,cn=It=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Hp,d=n(a,o)}while(es);return d}function rx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(It!==null?It.memoizedState:null)!==e&&(ht.flags|=1024),n}function Ou(){var e=xl!==0;return xl=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}Ki=0,cn=It=ht=null,es=!1,fo=xl=0,ts=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ht.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(It===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=It.next;var n=cn===null?ht.memoizedState:cn.next;if(n!==null)cn=n,It=e;else{if(e===null)throw ht.alternate===null?Error(r(467)):Error(r(310));It=e,e={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},cn===null?ht.memoizedState=cn=e:cn=cn.next=e}return cn}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,ts===null&&(ts=[]),e=Yh(ts,e,n),n=ht,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Bp:Yu),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===R)return Mn(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=P;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=rn();return Fu(n,It,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=M=null,B=null,$=n,me=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(St&ve)===ve:(Ki&ve)===ve){var ie=$.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Zr&&(me=!0);else if((Ki&ie)===ie){$=$.next,ie===Zr&&(me=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=ve,M=d):B=B.next=ve,ht.lanes|=ie,Na|=ie;ve=$.action,_r&&a(d,ve),d=$.hasEagerState?$.eagerState:a(d,ve)}else ie={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=ie,M=d):B=B.next=ie,ht.lanes|=ve,Na|=ve;$=$.next}while($!==null&&$!==n);if(B===null?M=d:B.next=A,!$n(d,e.memoizedState)&&(un=!0,me&&(a=Kr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Bu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);$n(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function rp(e,n,a){var o=ht,u=rn(),d=Mt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!$n((It||u).memoizedState,a);if(M&&(u.memoizedState=a,un=!0),u=u.queue,Vu(lp.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},op.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));d||(Ki&127)!==0||sp(o,n,a)}return a}function sp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Sl(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function op(e,n,a,o){n.value=a,n.getSnapshot=o,cp(n)&&up(e)}function lp(e,n,a){return a(function(){cp(n)&&up(e)})}function cp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function up(e){var n=cr(e,2);n!==null&&qn(n,e,2)}function Hu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),_r){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function fp(e,n,a,o){return e.baseState=a,Fu(e,It,typeof o=="function"?o:Qi)}function sx(e,n,a,o,u){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,dp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function dp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=I.T,M={};I.T=M;try{var A=a(u,o),B=I.S;B!==null&&B(M,A),hp(e,n,A)}catch($){Gu(e,n,$)}finally{d!==null&&M.types!==null&&(d.types=M.types),I.T=d}}else try{d=a(u,o),hp(e,n,d)}catch($){Gu(e,n,$)}}function hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){pp(e,n,o)},function(o){return Gu(e,n,o)}):pp(e,n,a)}function pp(e,n,a){n.status="fulfilled",n.value=a,mp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dp(e,a)))}function Gu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,mp(n),n=n.next;while(n!==o)}e.action=null}function mp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function gp(e,n){return n}function vp(e,n){if(Mt){var a=kt.formState;if(a!==null){e:{var o=ht;if(Mt){if(Xt){t:{for(var u=Xt,d=hi;u.nodeType!==8;){if(!d){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Xt=mi(u.nextSibling),o=u.data==="F!";break e}}ba(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gp,lastRenderedState:n},a.queue=o,a=Pp.bind(null,ht,o),o.dispatch=a,o=Hu(!1),d=qu.bind(null,ht,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=sx.bind(null,ht,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function _p(e){var n=rn();return xp(n,It,e)}function xp(e,n,a){if(n=Fu(e,n,gp)[0],e=Ml(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(M){throw M===Qr?dl:M}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,ns(9,{destroy:void 0},ox.bind(null,u,a),null)),[o,d,e]}function ox(e,n){e.action=n}function Sp(e){var n=rn(),a=It;if(a!==null)return xp(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ns(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Sl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yp(){return rn().memoizedState}function El(e,n,a,o){var u=zn();ht.flags|=e,u.memoizedState=ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function bl(e,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;It!==null&&o!==null&&Uu(o,It.memoizedState.deps)?u.memoizedState=ns(n,d,a,o):(ht.flags|=e,u.memoizedState=ns(1|n,d,a,o))}function Mp(e,n){El(8390656,8,e,n)}function Vu(e,n){bl(2048,8,e,n)}function lx(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Sl(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ep(e){var n=rn().memoizedState;return lx({ref:n,nextImpl:e}),function(){if((Rt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function bp(e,n){return bl(4,2,e,n)}function Tp(e,n){return bl(4,4,e,n)}function Ap(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rp(e,n,a){a=a!=null?a.concat([e]):null,bl(4,4,Ap.bind(null,n,e),a)}function ku(){}function Cp(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Uu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function wp(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Uu(n,o[1]))return o[0];if(o=e(),_r){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function ju(e,n,a){return a===void 0||(Ki&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Dm(),ht.lanes|=e,Na|=e,a)}function Dp(e,n,a,o){return $n(a,n)?a:$r.current!==null?(e=ju(e,a,o),$n(e,n)||(un=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(St&261930)===0?(un=!0,e.memoizedState=a):(e=Dm(),ht.lanes|=e,Na|=e,n)}function Lp(e,n,a,o,u){var d=W.p;W.p=d!==0&&8>d?d:8;var M=I.T,A={};I.T=A,qu(e,!1,n,a);try{var B=u(),$=I.S;if($!==null&&$(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var me=ix(B,o);po(e,n,me,ri(e))}else po(e,n,o,ri(e))}catch(ve){po(e,n,{then:function(){},status:"rejected",reason:ve},ri())}finally{W.p=d,M!==null&&A.types!==null&&(M.types=A.types),I.T=M}}function cx(){}function Wu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Up(e).queue;Lp(e,u,n,K,a===null?cx:function(){return Np(e),a(o)})}function Up(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Np(e){var n=Up(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},ri())}function Xu(){return Mn(Lo)}function Op(){return rn().memoizedState}function zp(){return rn().memoizedState}function ux(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Ra(a);var o=Ca(n,e,a);o!==null&&(qn(o,n,a),lo(o,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function fx(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Ip(n,a):(a=uu(e,n,a,o),a!==null&&(qn(a,e,o),Fp(a,n,o)))}function Pp(e,n,a){var o=ri();po(e,n,a,o)}function po(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Ip(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,M))return rl(e,n,u,0),kt===null&&al(),!1}catch{}finally{}if(a=uu(e,n,u,o),a!==null)return qn(a,e,o),Fp(a,n,o),!0}return!1}function qu(e,n,a,o){if(o={lane:2,revertLane:Af(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=uu(e,a,o,2),n!==null&&qn(n,e,2)}function Tl(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function Ip(e,n){es=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fp(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Nn(e,a)}}var mo={readContext:Mn,use:yl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};mo.useEffectEvent=en;var Bp={readContext:Mn,use:yl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Mp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,Ap.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(_r){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(_r){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=fx.bind(null,ht,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=Pp.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=zn();return ju(a,e,n)},useTransition:function(){var e=Hu(!1);return e=Lp.bind(null,ht,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ht,u=zn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(St&127)!==0||sp(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Mp(lp.bind(null,o,d,e),[e]),o.flags|=2048,ns(9,{destroy:void 0},op.bind(null,o,d,a,n),null),a},useId:function(){var e=zn(),n=kt.identifierPrefix;if(Mt){var a=Ii,o=Pi;a=(o&~(1<<32-Ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ax++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Xu,useFormState:vp,useActionState:vp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return zn().memoizedState=ux.bind(null,ht)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Rt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:Mn,use:yl,useCallback:Cp,useContext:Mn,useEffect:Vu,useImperativeHandle:Rp,useInsertionEffect:bp,useLayoutEffect:Tp,useMemo:wp,useReducer:Ml,useRef:yp,useState:function(){return Ml(Qi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=rn();return Dp(a,It.memoizedState,e,n)},useTransition:function(){var e=Ml(Qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:rp,useId:Op,useHostTransitionStatus:Xu,useFormState:_p,useActionState:_p,useOptimistic:function(e,n){var a=rn();return fp(a,It,e,n)},useMemoCache:Iu,useCacheRefresh:zp};Yu.useEffectEvent=Ep;var Hp={readContext:Mn,use:yl,useCallback:Cp,useContext:Mn,useEffect:Vu,useImperativeHandle:Rp,useInsertionEffect:bp,useLayoutEffect:Tp,useMemo:wp,useReducer:Bu,useRef:yp,useState:function(){return Bu(Qi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=rn();return It===null?ju(a,e,n):Dp(a,It.memoizedState,e,n)},useTransition:function(){var e=Bu(Qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:rp,useId:Op,useHostTransitionStatus:Xu,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,n){var a=rn();return It!==null?fp(a,It,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:zp};Hp.useEffectEvent=Ep;function Zu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Ra(o);u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(qn(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Ra(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(qn(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(e,o,a),n!==null&&(qn(n,e,a),lo(n,e,a))}};function Gp(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,d):!0}function Vp(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function xr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function kp(e){il(e)}function jp(e){console.error(e)}function Wp(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Xp(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function qp(e){return e=Ra(e),e.tag=3,e}function Yp(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Xp(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Xp(n,a,o),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function dx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Fl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(r(435,a.tag))}return Ef(e,o,u),Fl(),!1}if(Mt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==gu&&(e=Error(r(422),{cause:o}),io(ui(e,a)))):(o!==gu&&(n=Error(r(423),{cause:o}),io(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=Qu(e.stateNode,o,u),Ru(e,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=ui(d,a),Eo===null?Eo=[d]:Eo.push(d),tn!==4&&(tn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,o,e),Ru(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qp(u),Yp(u,e,a,o),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),un=!1;function En(e,n,a,o){n.child=e===null?Jh(n,null,a,o):vr(n,e.child,a,o)}function Zp(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return hr(n),o=Nu(e,n,a,M,d,u),A=Ou(),e!==null&&!un?(zu(e,n,u),Ji(e,n,u)):(Mt&&A&&pu(n),n.flags|=1,En(e,n,o,u),n.child)}function Kp(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!fu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Qp(e,n,d,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!of(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(M,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=Xi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Qp(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(eo(d,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=d,of(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return $u(e,n,a,o,u)}function Jp(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return $p(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,d!==null?d.cachePool:null),d!==null?tp(n,d):wu(),np(n);else return o=n.lanes=536870912,$p(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(fl(n,d.cachePool),tp(n,d),Da(),n.memoizedState=null):(e!==null&&fl(n,null),wu(),Da());return En(e,n,u,a),n.child}function go(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $p(e,n,a,o,u){var d=Eu();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&fl(n,null),wu(),np(n),e!==null&&Yr(e,n,o,!0),n.childLanes=u,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function em(e,n,a){return vr(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function hx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(o.mode==="hidden")return e=Rl(n,o),n.lanes=536870912,go(null,e);if(Lu(n),(e=Xt)?(e=d0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Ih(e),a.return=n,n.child=a,yn=n,Xt=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return Rl(n,o)}var d=e.memoizedState;if(d!==null){var M=d.dehydrated;if(Lu(n),u)if(n.flags&256)n.flags&=-257,n=em(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Yr(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=kt,o!==null&&(M=ir(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,cr(e,M),qn(o,e,M),Ju;Fl(),n=em(e,n,a)}else e=d.treeContext,Xt=mi(M.nextSibling),yn=n,Mt=!0,Ea=null,hi=!1,e!==null&&Hh(n,e),n=Rl(n,o),n.flags|=4096;return n}return e=Xi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,o,u){return hr(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!un?(zu(e,n,u),Ji(e,n,u)):(Mt&&o&&pu(n),n.flags|=1,En(e,n,a,u),n.child)}function tm(e,n,a,o,u,d){return hr(n),n.updateQueue=null,a=ap(n,o,a,u),ip(e),o=Ou(),e!==null&&!un?(zu(e,n,d),Ji(e,n,d)):(Mt&&o&&pu(n),n.flags|=1,En(e,n,a,d),n.child)}function nm(e,n,a,o,u){if(hr(n),n.stateNode===null){var d=jr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Mn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ku,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Tu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Mn(M):jr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Zu(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Ku.enqueueReplaceState(d,d.state,null),uo(n,o,d,u),co(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,B=xr(a,A);d.props=B;var $=d.context,me=a.contextType;M=jr,typeof me=="object"&&me!==null&&(M=Mn(me));var ve=a.getDerivedStateFromProps;me=typeof ve=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||$!==M)&&Vp(n,d,o,M),Aa=!1;var ie=n.memoizedState;d.state=ie,uo(n,o,d,u),co(),$=n.memoizedState,A||ie!==$||Aa?(typeof ve=="function"&&(Zu(n,a,ve,o),$=n.memoizedState),(B=Aa||Gp(n,a,B,o,ie,$,M))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=M,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Au(e,n),M=n.memoizedProps,me=xr(a,M),d.props=me,ve=n.pendingProps,ie=d.context,$=a.contextType,B=jr,typeof $=="object"&&$!==null&&(B=Mn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==ve||ie!==B)&&Vp(n,d,o,B),Aa=!1,ie=n.memoizedState,d.state=ie,uo(n,o,d,u),co();var de=n.memoizedState;M!==ve||ie!==de||Aa||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof A=="function"&&(Zu(n,a,A,o),de=n.memoizedState),(me=Aa||Gp(n,a,me,o,ie,de,B)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,de,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,de,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),d.props=o,d.state=de,d.context=B,o=me):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Cl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=vr(n,e.child,null,u),n.child=vr(n,null,a,u)):En(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ji(e,n,u),e}function im(e,n,a,o){return fr(),n.flags|=256,En(e,n,a,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(e){return{baseLanes:e,cachePool:Xh()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function am(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(u?wa(n):Da(),(e=Xt)?(e=d0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Ih(e),a.return=n,n.child=a,yn=n,Xt=null)):e=null,e===null)throw ba(n);return Bf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Da(),u=n.mode,A=wl({mode:"hidden",children:A},u),o=ur(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=tf(a),o.childLanes=nf(e,M,a),n.memoizedState=ef,go(null,o)):(wa(n),af(n,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(d)n.flags&256?(wa(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),A=o.fallback,u=n.mode,o=wl({mode:"visible",children:o.children},u),A=ur(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vr(n,e.child,null,a),o=n.child,o.memoizedState=tf(a),o.childLanes=nf(e,M,a),n.memoizedState=ef,n=go(null,o));else if(wa(n),Bf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(r(419)),o.stack="",o.digest=M,io({value:o,source:null,stack:null}),n=rf(e,n,a)}else if(un||Yr(e,n,a,!1),M=(a&e.childLanes)!==0,un||M){if(M=kt,M!==null&&(o=ir(M,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,cr(e,o),qn(M,e,o),Ju;Ff(A)||Fl(),n=rf(e,n,a)}else Ff(A)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Xt=mi(A.nextSibling),yn=n,Mt=!0,Ea=null,hi=!1,e!==null&&Hh(n,e),n=af(n,o.children),n.flags|=4096);return n}return u?(Da(),A=o.fallback,u=n.mode,B=e.child,$=B.sibling,o=Xi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?A=Xi($,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,go(null,o),o=n.child,A=e.child.memoizedState,A===null?A=tf(a):(u=A.cachePool,u!==null?(B=ln._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Xh(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=nf(e,M,a),n.memoizedState=ef,go(e.child,o)):(wa(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return vr(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),xu(e.return,n,a)}function sf(e,n,a,o,u,d){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function sm(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=an.current,A=(M&2)!==0;if(A?(M=M&1|2,n.flags|=128):M&=1,H(an,M),En(e,n,o,a),o=Mt?no:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,a,n);else if(e.tag===19)rm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}sf(n,!0,a,null,d,o);break;case"together":sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Yr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function px(e,n,a){switch(n.tag){case 3:Ge(n,n.stateNode.containerInfo),Ta(n,ln,e.memoizedState.cache),fr();break;case 27:case 5:ke(n);break;case 4:Ge(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?am(e,n,a):(wa(n),e=Ji(e,n,a),e!==null?e.sibling:null);wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return sm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(an,an.current),o)break;return null;case 22:return n.lanes=0,Jp(e,n,a,n.pendingProps);case 24:Ta(n,ln,e.memoizedState.cache)}return Ji(e,n,a)}function om(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!of(e,a)&&(n.flags&128)===0)return un=!1,px(e,n,a);un=(e.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&Bh(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=mr(n.elementType),n.type=e,typeof e=="function")fu(e)?(o=xr(e,o),n.tag=1,n=nm(null,n,e,o,a)):(n.tag=0,n=$u(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===F){n.tag=11,n=Zp(null,n,e,o,a);break e}else if(u===z){n.tag=14,n=Kp(null,n,e,o,a);break e}}throw n=j(e)||e,Error(r(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xr(o,n.pendingProps),nm(e,n,o,u,a);case 3:e:{if(Ge(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Au(e,n),uo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ta(n,ln,o),o!==d.cache&&Su(n,[ln],a,!0),co(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=im(e,n,o,a);break e}else if(o!==u){u=ui(Error(r(424)),n),io(u),n=im(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xt=mi(e.firstChild),yn=n,Mt=!0,Ea=null,hi=!0,a=Jh(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),o===u){n=Ji(e,n,a);break e}En(e,n,o,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=_0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,o=Wl(_e.current).createElement(a),o[Me]=n,o[et]=e,bn(o,a,e),qe(o),n.stateNode=o):n.memoizedState=_0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&Mt&&(o=n.stateNode=m0(n.type,n.pendingProps,_e.current),yn=n,hi=!0,u=Xt,Fa(n.type)?(Hf=u,Xt=mi(o.firstChild)):Xt=u),En(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((u=o=Xt)&&(o=jx(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,yn=n,Xt=mi(o.firstChild),hi=!1,u=!0):u=!1),u||ba(n)),ke(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,zf(u,d)?o=null:M!==null&&zf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,rx,null,null,a),Lo._currentValue=u),Cl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Mt&&((e=a=Xt)&&(a=Wx(a,n.pendingProps,hi),a!==null?(n.stateNode=a,yn=n,Xt=null,e=!0):e=!1),e||ba(n)),null;case 13:return am(e,n,a);case 4:return Ge(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vr(n,null,o,a):En(e,n,o,a),n.child;case 11:return Zp(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=Mn(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return Kp(e,n,n.type,n.pendingProps,a);case 15:return Qp(e,n,n.type,n.pendingProps,a);case 19:return sm(e,n,a);case 31:return hx(e,n,a);case 22:return Jp(e,n,a,n.pendingProps);case 24:return hr(n),o=Mn(ln),e===null?(u=Eu(),u===null&&(u=kt,d=yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Tu(n),Ta(n,ln,u)):((e.lanes&a)!==0&&(Au(e,n),uo(n,null,null,a),co()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,ln,o)):(o=d.cache,Ta(n,ln,o),o!==u.cache&&Su(n,[ln],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Om())e.flags|=8192;else throw gr=hl,bu}else e.flags&=-16777217}function lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!E0(n))if(Om())e.flags|=8192;else throw gr=hl,bu}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,ss|=n)}function vo(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function mx(e,n,a){var o=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(ln),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qr(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),qt(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?($i(n),d!==null?(qt(n),lm(n,d)):(qt(n),lf(n,u,null,o,a))):d?d!==e.memoizedState?($i(n),qt(n),lm(n,d)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$i(n),qt(n),lf(n,u,e,o,a)),null;case 27:if(ct(n),a=_e.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=Q.current,qr(n)?Gh(n):(e=m0(u,o,a),n.stateNode=e,$i(n))}return qt(n),null;case 5:if(ct(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(d=Q.current,qr(n))Gh(n);else{var M=Wl(_e.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[Me]=n,d[et]=o;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;e:switch(bn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&$i(n)}}return qt(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=_e.current,qr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Me]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||a0(e.nodeValue,a)),e||ba(n,!0)}else e=Wl(e).createTextNode(o),e[Me]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=qr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Me]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Me]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),qt(n),null);case 4:return Pe(),e===null&&Df(n.stateNode.containerInfo),qt(n),null;case 10:return Zi(n.type),qt(n),null;case 19:if(X(an),o=n.memoizedState,o===null)return qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)vo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=vl(e),d!==null){for(n.flags|=128,vo(o,!1),e=d.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ph(a,e),a=a.sibling;return H(an,an.current&1|2),Mt&&qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&xe()>zl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=vl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Mt)return qt(n),null}else 2*xe()-o.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=xe(),e.sibling=null,a=an.current,H(an,u?a&1|2:a&1),Mt&&qi(n,o.treeForkCount),e):(qt(n),null);case 22:case 23:return ni(n),Du(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&X(pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(ln),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gx(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(ln),Pe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(an),null;case 4:return Pe(),null;case 10:return Zi(n.type),null;case 22:case 23:return ni(n),Du(),e!==null&&X(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(ln),null;case 25:return null;default:return null}}function cm(e,n){switch(mu(n),n.tag){case 3:Zi(ln),Pe();break;case 26:case 27:case 5:ct(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:X(an);break;case 10:Zi(n.type);break;case 22:case 23:ni(n),Du(),e!==null&&X(pr);break;case 24:Zi(ln)}}function _o(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Ut(n,n.return,A)}}function La(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var B=a,$=A;try{$()}catch(me){Ut(u,B,me)}}}o=o.next}while(o!==d)}}catch(me){Ut(n,n.return,me)}}function um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ep(n,a)}catch(o){Ut(e,e.return,o)}}}function fm(e,n,a){a.props=xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ut(e,n,o)}}function xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ut(e,n,u)}}function Fi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ut(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ut(e,n,u)}else a.current=null}function dm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ut(e,e.return,u)}}function cf(e,n,a){try{var o=e.stateNode;Fx(o,e.type,a,n),o[et]=n}catch(u){Ut(e,e.return,u)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Ll(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[Me]=e,n[et]=a}catch(d){Ut(e,e.return,d)}}var ea=!1,fn=!1,df=!1,mm=typeof WeakSet=="function"?WeakSet:Set,xn=null;function vx(e,n){if(e=e.containerInfo,Nf=Jl,e=Rh(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var M=0,A=-1,B=-1,$=0,me=0,ve=e,ie=null;t:for(;;){for(var de;ve!==a||u!==0&&ve.nodeType!==3||(A=M+u),ve!==d||o!==0&&ve.nodeType!==3||(B=M+o),ve.nodeType===3&&(M+=ve.nodeValue.length),(de=ve.firstChild)!==null;)ie=ve,ve=de;for(;;){if(ve===e)break t;if(ie===a&&++$===u&&(A=M),ie===d&&++me===o&&(B=M),(de=ve.nextSibling)!==null)break;ve=ie,ie=ve.parentNode}ve=de}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Jl=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var We=xr(a.type,u);e=o.getSnapshotBeforeUpdate(We,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(it){Ut(a,a.return,it)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function gm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&_o(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ut(a,a.return,M)}else{var u=xr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ut(a,a.return,M)}}o&64&&um(a),o&512&&xo(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ep(e,n)}catch(M){Ut(a,a.return,M)}}break;case 27:n===null&&o&4&&pm(a);case 26:case 5:na(e,a),n===null&&o&4&&dm(a),o&512&&xo(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&xm(e,a);break;case 13:na(e,a),o&4&&Sm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ax.bind(null,a),Xx(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||fn,u=ea;var d=fn;ea=o,(fn=n)&&!d?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ea=u,fn=d}break;case 30:break;default:na(e,a)}}function vm(e){var n=e.alternate;n!==null&&(e.alternate=null,vm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&re(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,kn=!1;function ta(e,n,a){for(a=a.child;a!==null;)_m(e,n,a),a=a.sibling}function _m(e,n,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 26:fn||Fi(a,n),ta(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Fi(a,n);var o=Qt,u=kn;Fa(a.type)&&(Qt=a.stateNode,kn=!1),ta(e,n,a),Co(a.stateNode),Qt=o,kn=u;break;case 5:fn||Fi(a,n);case 6:if(o=Qt,u=kn,Qt=null,ta(e,n,a),Qt=o,kn=u,Qt!==null)if(kn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(d){Ut(a,n,d)}else try{Qt.removeChild(a.stateNode)}catch(d){Ut(a,n,d)}break;case 18:Qt!==null&&(kn?(e=Qt,u0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ps(e)):u0(Qt,a.stateNode));break;case 4:o=Qt,u=kn,Qt=a.stateNode.containerInfo,kn=!0,ta(e,n,a),Qt=o,kn=u;break;case 0:case 11:case 14:case 15:La(2,a,n),fn||La(4,a,n),ta(e,n,a);break;case 1:fn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fm(a,n,o)),ta(e,n,a);break;case 21:ta(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ta(e,n,a),fn=o;break;default:ta(e,n,a)}}function xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ps(e)}catch(a){Ut(n,n.return,a)}}}function Sm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ps(e)}catch(a){Ut(n,n.return,a)}}function _x(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mm),n;default:throw Error(r(435,e.tag))}}function Ul(e,n){var a=_x(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Rx.bind(null,e,o);o.then(u,u)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Fa(A.type)){Qt=A.stateNode,kn=!1;break e}break;case 5:Qt=A.stateNode,kn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,kn=!0;break e}A=A.return}if(Qt===null)throw Error(r(160));_m(d,M,u),Qt=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ym(n,e),n=n.sibling}var bi=null;function ym(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Wn(e),o&4&&(La(3,e,e.return),_o(3,e),La(5,e,e.return));break;case 1:jn(n,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(jn(n,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ce]||d[Me]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),bn(d,o,a),d[Me]=e,qe(d),o=d;break e;case"link":var M=y0("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break t}}d=u.createElement(o),bn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=y0("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break t}}d=u.createElement(o),bn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[Me]=e,qe(d),o=d}e.stateNode=o}else M0(u,e.type,e.stateNode);else e.stateNode=S0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?M0(u,e.type,e.stateNode):S0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),a!==null&&o&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Wn(e),o&512&&(fn||a===null||Fi(a,a.return)),e.flags&32){u=e.stateNode;try{Ir(u,"")}catch(We){Ut(e,e.return,We)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(df=!0);break;case 6:if(jn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(We){Ut(e,e.return,We)}}break;case 3:if(Yl=null,u=bi,bi=Xl(n.containerInfo),jn(n,e),bi=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(We){Ut(e,e.return,We)}df&&(df=!1,Mm(e));break;case 4:o=bi,bi=Xl(e.stateNode.containerInfo),jn(n,e),Wn(e),bi=o;break;case 12:jn(n,e),Wn(e);break;case 31:jn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ul(e,o)));break;case 13:jn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=xe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ul(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ea,me=fn;if(ea=$||u,fn=me||B,jn(n,e),fn=me,ea=$,Wn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ea||fn||Sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=B.stateNode;var ve=B.memoizedProps.style,ie=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(We){Ut(B,B.return,We)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(We){Ut(B,B.return,We)}}}else if(n.tag===18){if(a===null){B=n;try{var de=B.stateNode;u?f0(de,!0):f0(B.stateNode,!1)}catch(We){Ut(B,B.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ul(e,a))));break;case 19:jn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ul(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=uf(e);Ll(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ir(M,""),a.flags&=-33);var A=uf(e);Ll(e,A,M);break;case 3:case 4:var B=a.stateNode.containerInfo,$=uf(e);ff(e,$,B);break;default:throw Error(r(161))}}catch(me){Ut(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gm(e,n.alternate,n),n=n.sibling}function Sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),Sr(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fm(n,n.return,a),Sr(n);break;case 27:Co(n.stateNode);case 26:case 5:Fi(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}e=e.sibling}}function ia(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:ia(u,d,a),_o(4,d);break;case 1:if(ia(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ut(o,o.return,$)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)$h(B[u],A)}catch($){Ut(o,o.return,$)}}a&&M&64&&um(d),xo(d,d.return);break;case 27:pm(d);case 26:case 5:ia(u,d,a),a&&o===null&&M&4&&dm(d),xo(d,d.return);break;case 12:ia(u,d,a);break;case 31:ia(u,d,a),a&&M&4&&xm(u,d);break;case 13:ia(u,d,a),a&&M&4&&Sm(u,d);break;case 22:d.memoizedState===null&&ia(u,d,a),xo(d,d.return);break;case 30:break;default:ia(u,d,a)}n=n.sibling}}function hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Em(e,n,a,o),n=n.sibling}function Em(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),u&2048&&_o(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){Ti(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ut(n,n.return,B)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ti(e,n,a,o):So(e,n):d._visibility&2?Ti(e,n,a,o):(d._visibility|=2,is(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&hf(M,n);break;case 24:Ti(e,n,a,o),u&2048&&pf(n.alternate,n);break;default:Ti(e,n,a,o)}}function is(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,M=n,A=a,B=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:is(d,M,A,B,u),_o(8,M);break;case 23:break;case 22:var me=M.stateNode;M.memoizedState!==null?me._visibility&2?is(d,M,A,B,u):So(d,M):(me._visibility|=2,is(d,M,A,B,u)),u&&$&2048&&hf(M.alternate,M);break;case 24:is(d,M,A,B,u),u&&$&2048&&pf(M.alternate,M);break;default:is(d,M,A,B,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&hf(o.alternate,o);break;case 24:So(a,o),u&2048&&pf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var yo=8192;function as(e,n,a){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)bm(e,n,a),e=e.sibling}function bm(e,n,a){switch(e.tag){case 26:as(e,n,a),e.flags&yo&&e.memoizedState!==null&&aS(a,bi,e.memoizedState,e.memoizedProps);break;case 5:as(e,n,a);break;case 3:case 4:var o=bi;bi=Xl(e.stateNode.containerInfo),as(e,n,a),bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,as(e,n,a),yo=o):as(e,n,a));break;default:as(e,n,a)}}function Tm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Rm(o,e)}Tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&La(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):Mo(e);break;default:Mo(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Rm(o,e)}Tm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function Rm(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=e;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(vm(o),o===a){xn=null;break e}if(u!==null){u.return=d,xn=u;break e}xn=d}}}var xx={getCacheForType:function(e){var n=Mn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},Sx=typeof WeakMap=="function"?WeakMap:Map,Rt=0,kt=null,_t=null,St=0,Lt=0,ii=null,Ua=!1,rs=!1,mf=!1,aa=0,tn=0,Na=0,yr=0,gf=0,ai=0,ss=0,Eo=null,Xn=null,vf=!1,Ol=0,Cm=0,zl=1/0,Pl=null,Oa=null,mn=0,za=null,os=null,ra=0,_f=0,xf=null,wm=null,bo=0,Sf=null;function ri(){return(Rt&2)!==0&&St!==0?St&-St:I.T!==null?Af():rr()}function Dm(){if(ai===0)if((St&536870912)===0||Mt){var e=G;G<<=1,(G&3932160)===0&&(G=262144),ai=e}else ai=536870912;return e=ti.current,e!==null&&(e.flags|=32),ai}function qn(e,n,a){(e===kt&&(Lt===2||Lt===9)||e.cancelPendingCommit!==null)&&(ls(e,0),Pa(e,St,ai,!1)),Jt(e,a),((Rt&2)===0||e!==kt)&&(e===kt&&((Rt&2)===0&&(yr|=a),tn===4&&Pa(e,St,ai,!1)),Bi(e))}function Lm(e,n,a){if((Rt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||we(e,n),u=o?Ex(e,n):Mf(e,n,!0),d=o;do{if(u===0){rs&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!yx(a)){u=Mf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var A=e;u=Eo;var B=A.current.memoizedState.isDehydrated;if(B&&(ls(A,M).flags|=256),M=Mf(A,M,!1),M!==2){if(mf&&!B){A.errorRecoveryDisabledLanes|=d,yr|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){ls(e,0),Pa(e,n,0,!0);break}e:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,ai,!Ua);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ol+300-xe(),10<u)){if(Pa(o,n,ai,!Ua),$e(o,0,!0)!==0)break e;ra=n,o.timeoutHandle=l0(Um.bind(null,o,a,Xn,Pl,vf,n,ai,yr,ss,Ua,d,"Throttled",-0,0),u);break e}Um(o,a,Xn,Pl,vf,n,ai,yr,ss,Ua,d,null,-0,0)}}break}while(!0);Bi(e)}function Um(e,n,a,o,u,d,M,A,B,$,me,ve,ie,de){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},bm(n,d,ve);var We=(d&62914560)===d?Ol-xe():(d&4194048)===d?Cm-xe():0;if(We=rS(ve,We),We!==null){ra=d,e.cancelPendingCommit=We(Hm.bind(null,e,n,d,a,o,u,M,A,B,me,ve,null,ie,de)),Pa(e,d,M,!$);return}}Hm(e,n,d,a,o,u,M,A,B)}function yx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~gf,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ke(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&nn(e,a,n)}function Il(){return(Rt&6)===0?(To(0),!1):!0}function yf(){if(_t!==null){if(Lt===0)var e=_t.return;else e=_t,Yi=dr=null,Pu(e),Jr=null,so=0,e=_t;for(;e!==null;)cm(e.alternate,e),e=e.return;_t=null}}function ls(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,yf(),kt=e,_t=a=Xi(e.current,null),St=n,Lt=0,ii=null,Ua=!1,rs=we(e,n),mf=!1,ss=ai=gf=yr=Na=tn=0,Xn=Eo=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ke(o),d=1<<u;n|=e[u],o&=~d}return aa=n,al(),a}function Nm(e,n){ht=null,I.H=mo,n===Qr||n===dl?(n=Zh(),Lt=3):n===bu?(n=Zh(),Lt=4):Lt=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,_t===null&&(tn=1,Al(e,ui(n,e.current)))}function Om(){var e=ti.current;return e===null?!0:(St&4194048)===St?pi===null:(St&62914560)===St||(St&536870912)!==0?e===pi:!1}function zm(){var e=I.H;return I.H=mo,e===null?mo:e}function Pm(){var e=I.A;return I.A=xx,e}function Fl(){tn=4,Ua||(St&4194048)!==St&&ti.current!==null||(rs=!0),(Na&134217727)===0&&(yr&134217727)===0||kt===null||Pa(kt,St,ai,!1)}function Mf(e,n,a){var o=Rt;Rt|=2;var u=zm(),d=Pm();(kt!==e||St!==n)&&(Pl=null,ls(e,n)),n=!1;var M=tn;e:do try{if(Lt!==0&&_t!==null){var A=_t,B=ii;switch(Lt){case 8:yf(),M=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var $=Lt;if(Lt=0,ii=null,cs(e,A,B,$),a&&rs){M=0;break e}break;default:$=Lt,Lt=0,ii=null,cs(e,A,B,$)}}Mx(),M=tn;break}catch(me){Nm(e,me)}while(!0);return n&&e.shellSuspendCounter++,Yi=dr=null,Rt=o,I.H=u,I.A=d,_t===null&&(kt=null,St=0,al()),M}function Mx(){for(;_t!==null;)Im(_t)}function Ex(e,n){var a=Rt;Rt|=2;var o=zm(),u=Pm();kt!==e||St!==n?(Pl=null,zl=xe()+500,ls(e,n)):rs=we(e,n);e:do try{if(Lt!==0&&_t!==null){n=_t;var d=ii;t:switch(Lt){case 1:Lt=0,ii=null,cs(e,n,d,1);break;case 2:case 9:if(qh(d)){Lt=0,ii=null,Fm(n);break}n=function(){Lt!==2&&Lt!==9||kt!==e||(Lt=7),Bi(e)},d.then(n,n);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:qh(d)?(Lt=0,ii=null,Fm(n)):(Lt=0,ii=null,cs(e,n,d,7));break;case 5:var M=null;switch(_t.tag){case 26:M=_t.memoizedState;case 5:case 27:var A=_t;if(M?E0(M):A.stateNode.complete){Lt=0,ii=null;var B=A.sibling;if(B!==null)_t=B;else{var $=A.return;$!==null?(_t=$,Bl($)):_t=null}break t}}Lt=0,ii=null,cs(e,n,d,5);break;case 6:Lt=0,ii=null,cs(e,n,d,6);break;case 8:yf(),tn=6;break e;default:throw Error(r(462))}}bx();break}catch(me){Nm(e,me)}while(!0);return Yi=dr=null,I.H=o,I.A=u,Rt=a,_t!==null?0:(kt=null,St=0,al(),tn)}function bx(){for(;_t!==null&&!Ee();)Im(_t)}function Im(e){var n=om(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?Bl(e):_t=n}function Fm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=tm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Pu(n);default:cm(a,n),n=_t=Ph(n,aa),n=om(a,n,aa)}e.memoizedProps=e.pendingProps,n===null?Bl(e):_t=n}function cs(e,n,a,o){Yi=dr=null,Pu(n),Jr=null,so=0;var u=n.return;try{if(dx(e,u,n,a,St)){tn=1,Al(e,ui(a,e.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;tn=1,Al(e,ui(a,e.current)),_t=null;return}n.flags&32768?(Mt||o===1?e=!0:rs||(St&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bm(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){Bm(n,Ua);return}e=n.return;var a=mx(n.alternate,n,aa);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=e}while(n!==null);tn===0&&(tn=5)}function Bm(e,n){do{var a=gx(e.alternate,e);if(a!==null){a.flags&=32767,_t=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_t=e;return}_t=e=a}while(e!==null);tn=6,_t=null}function Hm(e,n,a,o,u,d,M,A,B){e.cancelPendingCommit=null;do Hl();while(mn!==0);if((Rt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=cu,wt(e,a,d,M,A,B),e===kt&&(_t=kt=null,St=0),os=n,za=e,ra=a,_f=d,xf=u,wm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cx(Ue,function(){return Wm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=W.p,W.p=2,M=Rt,Rt|=4;try{vx(e,n,a)}finally{Rt=M,W.p=u,I.T=o}}mn=1,Gm(),Vm(),km()}}function Gm(){if(mn===1){mn=0;var e=za,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=W.p;W.p=2;var u=Rt;Rt|=4;try{ym(n,e);var d=Of,M=Rh(e.containerInfo),A=d.focusedElem,B=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&Ah(A.ownerDocument.documentElement,A)){if(B!==null&&au(A)){var $=B.start,me=B.end;if(me===void 0&&(me=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(me,A.value.length);else{var ve=A.ownerDocument||document,ie=ve&&ve.defaultView||window;if(ie.getSelection){var de=ie.getSelection(),We=A.textContent.length,it=Math.min(B.start,We),Bt=B.end===void 0?it:Math.min(B.end,We);!de.extend&&it>Bt&&(M=Bt,Bt=it,it=M);var q=Th(A,it),V=Th(A,Bt);if(q&&V&&(de.rangeCount!==1||de.anchorNode!==q.node||de.anchorOffset!==q.offset||de.focusNode!==V.node||de.focusOffset!==V.offset)){var J=ve.createRange();J.setStart(q.node,q.offset),de.removeAllRanges(),it>Bt?(de.addRange(J),de.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),de.addRange(J))}}}}for(ve=[],de=A;de=de.parentNode;)de.nodeType===1&&ve.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var ge=ve[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Jl=!!Nf,Of=Nf=null}finally{Rt=u,W.p=o,I.T=a}}e.current=n,mn=2}}function Vm(){if(mn===2){mn=0;var e=za,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=W.p;W.p=2;var u=Rt;Rt|=4;try{gm(e,n.alternate,n)}finally{Rt=u,W.p=o,I.T=a}}mn=3}}function km(){if(mn===4||mn===3){mn=0,ye();var e=za,n=os,a=ra,o=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,os=za=null,jm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Oa=null),Ni(a),n=n.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=W.p,W.p=2,I.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{I.T=n,W.p=u}}(ra&3)!==0&&Hl(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Sf?bo++:(bo=0,Sf=e):bo=0,To(0)}}function jm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function Hl(){return Gm(),Vm(),km(),Wm()}function Wm(){if(mn!==5)return!1;var e=za,n=_f;_f=0;var a=Ni(ra),o=I.T,u=W.p;try{W.p=32>a?32:a,I.T=null,a=xf,xf=null;var d=za,M=ra;if(mn=0,os=za=null,ra=0,(Rt&6)!==0)throw Error(r(331));var A=Rt;if(Rt|=4,Am(d.current),Em(d,d.current,M,a),Rt=A,To(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(tt,d)}catch{}return!0}finally{W.p=u,I.T=o,jm(e,n)}}function Xm(e,n,a){n=ui(a,n),n=Qu(e.stateNode,n,2),e=Ca(e,n,2),e!==null&&(Jt(e,2),Bi(e))}function Ut(e,n,a){if(e.tag===3)Xm(e,e,a);else for(;n!==null;){if(n.tag===3){Xm(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){e=ui(a,e),a=qp(2),o=Ca(n,a,2),o!==null&&(Yp(a,o,n,e),Jt(o,2),Bi(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Sx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=Tx.bind(null,e,n,a),n.then(e,e))}function Tx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>xe()-Ol?(Rt&2)===0&&ls(e,0):gf|=a,ss===St&&(ss=0)),Bi(e)}function qm(e,n){n===0&&(n=At()),e=cr(e,n),e!==null&&(Jt(e,n),Bi(e))}function Ax(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),qm(e,a)}function Rx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),qm(e,a)}function Cx(e,n){return C(e,n)}var Gl=null,us=null,bf=!1,Vl=!1,Tf=!1,Ia=0;function Bi(e){e!==us&&e.next===null&&(us===null?Gl=us=e:us=us.next=e),Vl=!0,bf||(bf=!0,Dx())}function To(e,n){if(!Tf&&Vl){Tf=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ke(42|e)+1)-1,d&=u&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Qm(o,d))}else d=St,d=$e(o,o===kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,Qm(o,d));o=o.next}while(a);Tf=!1}}function wx(){Ym()}function Ym(){Vl=bf=!1;var e=0;Ia!==0&&Hx()&&(e=Ia);for(var n=xe(),a=null,o=Gl;o!==null;){var u=o.next,d=Zm(o,n);d===0?(o.next=null,a===null?Gl=u:a.next=u,u===null&&(us=a)):(a=o,(e!==0||(d&3)!==0)&&(Vl=!0)),o=u}mn!==0&&mn!==5||To(e),Ia!==0&&(Ia=0)}function Zm(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Ke(d),A=1<<M,B=u[M];B===-1?((A&a)===0||(A&o)!==0)&&(u[M]=Ct(A,n)):B<=n&&(e.expiredLanes|=A),d&=~A}if(n=kt,a=St,a=$e(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Lt===2||Lt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||we(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ae(o),Ni(a)){case 2:case 8:a=le;break;case 32:a=Ue;break;case 268435456:a=Se;break;default:a=Ue}return o=Km.bind(null,e),a=C(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ae(o),e.callbackPriority=2,e.callbackNode=null,2}function Km(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var o=St;return o=$e(e,e===kt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Lm(e,o,n),Zm(e,xe()),e.callbackNode!=null&&e.callbackNode===a?Km.bind(null,e):null)}function Qm(e,n){if(Hl())return null;Lm(e,n,!0)}function Dx(){Vx(function(){(Rt&6)!==0?C(Le,wx):Ym()})}function Af(){if(Ia===0){var e=Zr;e===0&&(e=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),Ia=e}return Ia}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function $m(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Lx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Jm((u[et]||null).action),M=o.submitter;M&&(n=(n=M[et]||null)?Jm(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new el("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ia!==0){var B=M?$m(u,M):new FormData(u);Wu(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=M?$m(u,M):new FormData(u),Wu(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Ux=Cf.toLowerCase(),Nx=Cf[0].toUpperCase()+Cf.slice(1);Ei(Ux,"on"+Nx)}Ei(Dh,"onAnimationEnd"),Ei(Lh,"onAnimationIteration"),Ei(Uh,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Z_,"onTransitionRun"),Ei(K_,"onTransitionStart"),Ei(Q_,"onTransitionCancel"),Ei(Nh,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function e0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],B=A.instance,$=A.currentTarget;if(A=A.listener,B!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=$;try{d(u)}catch(me){il(me)}u.currentTarget=null,d=B}else for(M=0;M<o.length;M++){if(A=o[M],B=A.instance,$=A.currentTarget,A=A.listener,B!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=$;try{d(u)}catch(me){il(me)}u.currentTarget=null,d=B}}}}function xt(e,n){var a=n[Mi];a===void 0&&(a=n[Mi]=new Set);var o=e+"__bubble";a.has(o)||(t0(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),t0(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[kl]){e[kl]=!0,at.forEach(function(a){a!=="selectionchange"&&(Ox.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,wf("selectionchange",!1,n))}}function t0(e,n,a,o){switch(D0(n)){case 2:var u=lS;break;case 8:u=cS;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Ne(A),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=d=M;continue e}A=A.parentNode}}o=o.return}sh(function(){var $=d,me=qc(a),ve=[];e:{var ie=Oh.get(e);if(ie!==void 0){var de=el,We=e;switch(e){case"keypress":if(Jo(a)===0)break e;case"keydown":case"keyup":de=R_;break;case"focusin":We="focus",de=$c;break;case"focusout":We="blur",de=$c;break;case"beforeblur":case"afterblur":de=$c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=m_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=D_;break;case Dh:case Lh:case Uh:de=__;break;case Nh:de=U_;break;case"scroll":case"scrollend":de=h_;break;case"wheel":de=O_;break;case"copy":case"cut":case"paste":de=S_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=fh;break;case"toggle":case"beforetoggle":de=P_}var it=(n&4)!==0,Bt=!it&&(e==="scroll"||e==="scrollend"),q=it?ie!==null?ie+"Capture":null:ie;it=[];for(var V=$,J;V!==null;){var ge=V;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||q===null||(ge=qs(V,q),ge!=null&&it.push(Ro(V,ge,J))),Bt)break;V=V.return}0<it.length&&(ie=new de(ie,We,null,a,me),ve.push({event:ie,listeners:it}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",ie&&a!==Xc&&(We=a.relatedTarget||a.fromElement)&&(Ne(We)||We[Dt]))break e;if((de||ie)&&(ie=me.window===me?me:(ie=me.ownerDocument)?ie.defaultView||ie.parentWindow:window,de?(We=a.relatedTarget||a.toElement,de=$,We=We?Ne(We):null,We!==null&&(Bt=c(We),it=We.tag,We!==Bt||it!==5&&it!==27&&it!==6)&&(We=null)):(de=null,We=$),de!==We)){if(it=ch,ge="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(it=fh,ge="onPointerLeave",q="onPointerEnter",V="pointer"),Bt=de==null?ie:He(de),J=We==null?ie:He(We),ie=new it(ge,V+"leave",de,a,me),ie.target=Bt,ie.relatedTarget=J,ge=null,Ne(me)===$&&(it=new it(q,V+"enter",We,a,me),it.target=J,it.relatedTarget=Bt,ge=it),Bt=ge,de&&We)t:{for(it=zx,q=de,V=We,J=0,ge=q;ge;ge=it(ge))J++;ge=0;for(var Qe=V;Qe;Qe=it(Qe))ge++;for(;0<J-ge;)q=it(q),J--;for(;0<ge-J;)V=it(V),ge--;for(;J--;){if(q===V||V!==null&&q===V.alternate){it=q;break t}q=it(q),V=it(V)}it=null}else it=null;de!==null&&n0(ve,ie,de,it,!1),We!==null&&Bt!==null&&n0(ve,Bt,We,it,!0)}}e:{if(ie=$?He($):window,de=ie.nodeName&&ie.nodeName.toLowerCase(),de==="select"||de==="input"&&ie.type==="file")var bt=xh;else if(vh(ie))if(Sh)bt=X_;else{bt=j_;var Ye=k_}else de=ie.nodeName,!de||de.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Wc($.elementType)&&(bt=xh):bt=W_;if(bt&&(bt=bt(e,$))){_h(ve,bt,a,me);break e}Ye&&Ye(e,ie,$),e==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&jc(ie,"number",ie.value)}switch(Ye=$?He($):window,e){case"focusin":(vh(Ye)||Ye.contentEditable==="true")&&(Gr=Ye,ru=$,to=null);break;case"focusout":to=ru=Gr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Ch(ve,a,me);break;case"selectionchange":if(Y_)break;case"keydown":case"keyup":Ch(ve,a,me)}var pt;if(tu)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Hr?mh(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(dh&&a.locale!=="ko"&&(Hr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Hr&&(pt=oh()):(ya=me,Kc="value"in ya?ya.value:ya.textContent,Hr=!0)),Ye=jl($,yt),0<Ye.length&&(yt=new uh(yt,e,null,a,me),ve.push({event:yt,listeners:Ye}),pt?yt.data=pt:(pt=gh(a),pt!==null&&(yt.data=pt)))),(pt=F_?B_(e,a):H_(e,a))&&(yt=jl($,"onBeforeInput"),0<yt.length&&(Ye=new uh("onBeforeInput","beforeinput",null,a,me),ve.push({event:Ye,listeners:yt}),Ye.data=pt)),Lx(ve,e,$,a,me)}e0(ve,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=qs(e,a),u!=null&&o.unshift(Ro(e,u,d)),u=qs(e,n),u!=null&&o.push(Ro(e,u,d))),e.tag===3)return o;e=e.return}return[]}function zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function n0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var A=a,B=A.alternate,$=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||$===null||(B=$,u?($=qs(a,d),$!=null&&M.unshift(Ro(a,$,B))):u||($=qs(a,d),$!=null&&M.push(Ro(a,$,B)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Px=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function i0(e){return(typeof e=="string"?e:""+e).replace(Px,`
`).replace(Ix,"")}function a0(e,n){return n=i0(n),i0(e)===n}function Ft(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ir(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ir(e,""+o);break;case"className":Pt(e,"class",o);break;case"tabIndex":Pt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,o);break;case"style":ah(e,o,d);break;case"data":if(n!=="object"){Pt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ft(e,n,"name",u.name,u,null),Ft(e,n,"formEncType",u.formEncType,u,null),Ft(e,n,"formMethod",u.formMethod,u,null),Ft(e,n,"formTarget",u.formTarget,u,null)):(Ft(e,n,"encType",u.encType,u,null),Ft(e,n,"method",u.method,u,null),Ft(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&xt("scroll",e);break;case"onScrollEnd":o!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xt("beforetoggle",e),xt("toggle",e),Oi(e,"popover",o);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=f_.get(a)||a,Oi(e,a,o))}}function Uf(e,n,a,o,u,d){switch(a){case"style":ah(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ir(e,o):(typeof o=="number"||typeof o=="bigint")&&Ir(e,""+o);break;case"onScroll":o!=null&&xt("scroll",e);break;case"onScrollEnd":o!=null&&xt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Be.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[et]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Oi(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,d,M,a,null)}}u&&Ft(e,n,"srcSet",a.srcSet,a,null),o&&Ft(e,n,"src",a.src,a,null);return;case"input":xt("invalid",e);var A=d=M=u=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":M=me;break;case"checked":B=me;break;case"defaultChecked":$=me;break;case"value":d=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Ft(e,n,o,me,a,null)}}Xs(e,d,A,B,$,M,u,!1);return;case"select":xt("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Ft(e,n,u,A,a,null)}n=d,a=M,e.multiple=!!o,n!=null?Pr(e,!!o,n,!1):a!=null&&Pr(e,!!o,a,!0);return;case"textarea":xt("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ft(e,n,M,A,a,null)}nh(e,o,u,d);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ft(e,n,B,o,a,null)}return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(o=0;o<Ao.length;o++)xt(Ao[o],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,$,o,a,null)}return;default:if(Wc(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Uf(e,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ft(e,n,A,o,a,null))}function Fx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,A=null,B=null,$=null,me=null;for(de in a){var ve=a[de];if(a.hasOwnProperty(de)&&ve!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":B=ve;default:o.hasOwnProperty(de)||Ft(e,n,de,null,o,ve)}}for(var ie in o){var de=o[ie];if(ve=a[ie],o.hasOwnProperty(ie)&&(de!=null||ve!=null))switch(ie){case"type":d=de;break;case"name":u=de;break;case"checked":$=de;break;case"defaultChecked":me=de;break;case"value":M=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==ve&&Ft(e,n,ie,de,o,ve)}}Ws(e,M,A,B,$,me,d,u);return;case"select":de=M=A=ie=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":de=B;default:o.hasOwnProperty(d)||Ft(e,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ie=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==B&&Ft(e,n,u,d,o,B)}n=A,a=M,o=de,ie!=null?Pr(e,!!a,ie,!1):!!o!=!!a&&(n!=null?Pr(e,!!a,n,!0):Pr(e,!!a,a?[]:"",!1));return;case"textarea":de=ie=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ft(e,n,A,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":ie=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ft(e,n,M,u,o,d)}th(e,ie,de);return;case"option":for(var We in a)if(ie=a[We],a.hasOwnProperty(We)&&ie!=null&&!o.hasOwnProperty(We))switch(We){case"selected":e.selected=!1;break;default:Ft(e,n,We,null,o,ie)}for(B in o)if(ie=o[B],de=a[B],o.hasOwnProperty(B)&&ie!==de&&(ie!=null||de!=null))switch(B){case"selected":e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ft(e,n,B,ie,o,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)ie=a[it],a.hasOwnProperty(it)&&ie!=null&&!o.hasOwnProperty(it)&&Ft(e,n,it,null,o,ie);for($ in o)if(ie=o[$],de=a[$],o.hasOwnProperty($)&&ie!==de&&(ie!=null||de!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Ft(e,n,$,ie,o,de)}return;default:if(Wc(n)){for(var Bt in a)ie=a[Bt],a.hasOwnProperty(Bt)&&ie!==void 0&&!o.hasOwnProperty(Bt)&&Uf(e,n,Bt,void 0,o,ie);for(me in o)ie=o[me],de=a[me],!o.hasOwnProperty(me)||ie===de||ie===void 0&&de===void 0||Uf(e,n,me,ie,o,de);return}}for(var q in a)ie=a[q],a.hasOwnProperty(q)&&ie!=null&&!o.hasOwnProperty(q)&&Ft(e,n,q,null,o,ie);for(ve in o)ie=o[ve],de=a[ve],!o.hasOwnProperty(ve)||ie===de||ie==null&&de==null||Ft(e,n,ve,ie,o,de)}function r0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,A=u.duration;if(d&&A&&r0(M)){for(M=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>A)break;var me=B.transferSize,ve=B.initiatorType;me&&r0(ve)&&(B=B.responseEnd,M+=me*(B<A?1:(A-$)/(B-$)))}if(--o,n+=8*(d+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Of=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function s0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Hx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(e){return c0.resolve(null).then(e).catch(kx)}:l0;function kx(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function u0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ps(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var d=a.firstChild;d;){var M=d.nextSibling,A=d.nodeName;d[ce]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);ps(n)}function f0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ce])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function d0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Xx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function h0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function p0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function m0(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);re(e)}var gi=new Map,g0=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=W.d;W.d={f:qx,r:Yx,D:Zx,C:Kx,L:Qx,m:Jx,X:eS,S:$x,M:tS};function qx(){var e=sa.f(),n=Il();return e||n}function Yx(e){var n=Fe(e);n!==null&&n.tag===5&&n.type==="form"?Np(n):sa.r(e)}var fs=typeof document>"u"?null:document;function v0(e,n,a){var o=fs;if(o&&typeof n=="string"&&n){var u=Cn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),g0.has(u)||(g0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",e),qe(n),o.head.appendChild(n)))}}function Zx(e){sa.D(e),v0("dns-prefetch",e,null)}function Kx(e,n){sa.C(e,n),v0("preconnect",e,n)}function Qx(e,n,a){sa.L(e,n,a);var o=fs;if(o&&e&&n){var u='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Cn(a.imageSizes)+'"]')):u+='[href="'+Cn(e)+'"]';var d=u;switch(n){case"style":d=ds(e);break;case"script":d=hs(e)}gi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(wo(d))||n==="script"&&o.querySelector(Do(d))||(n=o.createElement("link"),bn(n,"link",e),qe(n),o.head.appendChild(n)))}}function Jx(e,n){sa.m(e,n);var a=fs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Cn(o)+'"][href="'+Cn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=hs(e)}if(!gi.has(d)&&(e=g({rel:"modulepreload",href:e},n),gi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(d)))return}o=a.createElement("link"),bn(o,"link",e),qe(o),a.head.appendChild(o)}}}function $x(e,n,a){sa.S(e,n,a);var o=fs;if(o&&e){var u=Xe(o).hoistableStyles,d=ds(e);n=n||"default";var M=u.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(wo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(d))&&Gf(e,a);var B=M=o.createElement("link");qe(B),bn(B,"link",e),B._p=new Promise(function($,me){B.onload=$,B.onerror=me}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ql(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(d,M)}}}function eS(e,n){sa.X(e,n);var a=fs;if(a&&e){var o=Xe(a).hoistableScripts,u=hs(e),d=o.get(u);d||(d=a.querySelector(Do(u)),d||(e=g({src:e,async:!0},n),(n=gi.get(u))&&Vf(e,n),d=a.createElement("script"),qe(d),bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function tS(e,n){sa.M(e,n);var a=fs;if(a&&e){var o=Xe(a).hoistableScripts,u=hs(e),d=o.get(u);d||(d=a.querySelector(Do(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&Vf(e,n),d=a.createElement("script"),qe(d),bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function _0(e,n,a,o){var u=(u=_e.current)?Xl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=Xe(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ds(a.href);var d=Xe(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(wo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),d||nS(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=Xe(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ds(e){return'href="'+Cn(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function x0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function nS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),qe(n),e.head.appendChild(n))}function hs(e){return'[src="'+Cn(e)+'"]'}function Do(e){return"script[async]"+e}function S0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Cn(a.href)+'"]');if(o)return n.instance=o,qe(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),qe(o),bn(o,"style",u),ql(o,a.precedence,e),n.instance=o;case"stylesheet":u=ds(a.href);var d=e.querySelector(wo(u));if(d)return n.state.loading|=4,n.instance=d,qe(d),d;o=x0(a),(u=gi.get(u))&&Gf(o,u),d=(e.ownerDocument||e).createElement("link"),qe(d);var M=d;return M._p=new Promise(function(A,B){M.onload=A,M.onerror=B}),bn(d,"link",o),n.state.loading|=4,ql(d,a.precedence,e),n.instance=d;case"script":return d=hs(a.src),(u=e.querySelector(Do(d)))?(n.instance=u,qe(u),u):(o=a,(u=gi.get(d))&&(o=g({},a),Vf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),qe(u),bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function y0(e,n,a){if(Yl===null){var o=new Map,u=Yl=new Map;u.set(a,o)}else u=Yl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ce]||d[Me]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function M0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function aS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(o.href),d=n.querySelector(wo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,qe(d);return}d=n.ownerDocument||n,o=x0(o),(u=gi.get(u))&&Gf(o,u),d=d.createElement("link"),qe(d);var M=d;M._p=new Promise(function(A,B){M.onload=A,M.onerror=B}),bn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function rS(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*Bx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(sS,e),Kl=null,Zl.call(e))}function sS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:R,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function oS(e,n,a,o,u,d,M,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function b0(e,n,a,o,u,d,M,A,B,$,me,ve){return e=new oS(e,n,a,M,B,$,me,ve,A),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),e.current=d,d.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Tu(d),e}function T0(e){return e?(e=jr,e):jr}function A0(e,n,a,o,u,d){u=T0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ca(e,o,n),a!==null&&(qn(a,e,n),lo(a,e,n))}function R0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){R0(e,n),(e=e.alternate)&&R0(e,n)}function C0(e){if(e.tag===13||e.tag===31){var n=cr(e,67108864);n!==null&&qn(n,e,67108864),jf(e,67108864)}}function w0(e){if(e.tag===13||e.tag===31){var n=ri();n=ar(n);var a=cr(e,n);a!==null&&qn(a,e,n),jf(e,n)}}var Jl=!0;function lS(e,n,a,o){var u=I.T;I.T=null;var d=W.p;try{W.p=2,Wf(e,n,a,o)}finally{W.p=d,I.T=u}}function cS(e,n,a,o){var u=I.T;I.T=null;var d=W.p;try{W.p=8,Wf(e,n,a,o)}finally{W.p=d,I.T=u}}function Wf(e,n,a,o){if(Jl){var u=Xf(o);if(u===null)Lf(e,n,o,$l,a),L0(e,o);else if(fS(u,e,n,a,o))o.stopPropagation();else if(L0(e,o),n&4&&-1<uS.indexOf(e)){for(;u!==null;){var d=Fe(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Re(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var B=1<<31-Ke(M);A.entanglements[1]|=B,M&=~B}Bi(d),(Rt&6)===0&&(zl=xe()+500,To(0))}}break;case 31:case 13:A=cr(d,2),A!==null&&qn(A,d,2),Il(),jf(d,2)}if(d=Xf(o),d===null&&Lf(e,n,o,$l,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Lf(e,n,o,null,a)}}function Xf(e){return e=qc(e),qf(e)}var $l=null;function qf(e){if($l=null,e=Ne(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function D0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ze()){case Le:return 2;case le:return 8;case Ue:case nt:return 32;case Se:return 268435456;default:return 32}default:return 32}}var Yf=!1,Ba=null,Ha=null,Ga=null,Uo=new Map,No=new Map,Va=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L0(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Fe(n),n!==null&&C0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fS(e,n,a,o,u){switch(n){case"focusin":return Ba=Oo(Ba,e,n,a,o,u),!0;case"dragenter":return Ha=Oo(Ha,e,n,a,o,u),!0;case"mouseover":return Ga=Oo(Ga,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Uo.set(d,Oo(Uo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,No.set(d,Oo(No.get(d)||null,e,n,a,o,u)),!0}return!1}function U0(e){var n=Ne(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ki(e.priority,function(){w0(a)});return}}else if(n===31){if(n=f(a),n!==null){e.blockedOn=n,ki(e.priority,function(){w0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Xc=o,a.target.dispatchEvent(o),Xc=null}else return n=Fe(a),n!==null&&C0(n),e.blockedOn=a,!1;n.shift()}return!0}function N0(e,n,a){ec(e)&&a.delete(n)}function dS(){Yf=!1,Ba!==null&&ec(Ba)&&(Ba=null),Ha!==null&&ec(Ha)&&(Ha=null),Ga!==null&&ec(Ga)&&(Ga=null),Uo.forEach(N0),No.forEach(N0)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,dS)))}var nc=null;function O0(e){nc!==e&&(nc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(qf(o||a)===null)continue;break}var d=Fe(a);d!==null&&(e.splice(n,3),n-=3,Wu(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ps(e){function n(B){return tc(B,e)}Ba!==null&&tc(Ba,e),Ha!==null&&tc(Ha,e),Ga!==null&&tc(Ga,e),Uo.forEach(n),No.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[et]||null;if(typeof d=="function")M||O0(a);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[et]||null)A=M.formAction;else if(qf(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),O0(a)}}}function z0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zf(e){this._internalRoot=e}ic.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ri();A0(a,o,e,n,null,null)},ic.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;A0(e.current,2,null,e,null,null),Il(),n[Dt]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=rr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,e),a===0&&U0(e)}};var P0=t.version;if(P0!=="19.2.0")throw Error(r(527,P0,"19.2.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{tt=ac.inject(hS),Ie=ac}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=kp,d=jp,M=Wp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=b0(e,1,!1,null,null,a,o,null,u,d,M,z0),e[Dt]=n.current,Df(e),new Zf(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=kp,M=jp,A=Wp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=b0(e,1,!0,n,a??null,o,u,B,d,M,A,z0),n.context=T0(null),a=n.current,o=ri(),o=ar(o),u=Ra(o),u.callback=null,Ca(a,u,o),a=o,n.current.lanes=a,Jt(n,a),Bi(n),e[Dt]=n.current,Df(e),new ic(n)},Po.version="19.2.0",Po}var X0;function bS(){if(X0)return Jf.exports;X0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jf.exports=ES(),Jf.exports}var TS=bS();const AS=({leftPanel:s,centerPanel:t,rightPanel:i,bottomBar:r})=>T.jsxs("div",{className:"flex flex-col h-screen w-screen overflow-hidden bg-black text-zinc-300 select-none",children:[T.jsx("div",{className:"fixed inset-0 pointer-events-none opacity-10",style:{backgroundImage:"linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),T.jsxs("header",{className:"h-12 border-b border-zinc-800 bg-black/80 flex items-center justify-between px-4 z-10 relative",children:[T.jsxs("div",{className:"flex items-center gap-4",children:[T.jsx("div",{className:"w-3 h-3 bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse"}),T.jsxs("h1",{className:"text-xl font-display font-bold tracking-widest text-white",children:["ERRORHEAD ",T.jsx("span",{className:"text-zinc-600 text-xs align-top opacity-70",children:"v2.0"})]})]}),T.jsxs("div",{className:"text-xs font-mono text-zinc-600 flex gap-6 items-center",children:[T.jsx("span",{children:"ENTROPY: ACTIVE"}),T.jsx("span",{children:"MEM: 64MB"}),T.jsx("a",{className:"px-2 py-1 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white",href:"https://eg0pr0xy.github.io/errorhead/guide/",target:"_blank",rel:"noreferrer",title:"Open Docs",children:"DOCS"}),T.jsx("span",{className:"text-cyan-800",children:"— SIGNAL OK"})]})]}),T.jsxs("main",{className:"flex-1 flex overflow-hidden relative z-10 p-2 gap-2",children:[T.jsx("div",{className:"w-72 flex-shrink-0 flex flex-col gap-2",children:s}),T.jsx("div",{className:"flex-1 flex flex-col min-w-0 relative",children:t}),T.jsx("div",{className:"w-80 flex-shrink-0 flex flex-col gap-2",children:i})]}),T.jsx("footer",{className:"h-auto min-h-8 border-t border-zinc-800 bg-zinc-950 flex flex-col z-10 relative",children:r})]}),ot={Upload:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),T.jsx("polyline",{points:"17 8 12 3 7 8"}),T.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),Refresh:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M23 4v6h-6"}),T.jsx("path",{d:"M1 20v-6h6"}),T.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),Undo:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),T.jsx("path",{d:"M3 3v5h5"})]}),Zap:()=>T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),ChevronRight:()=>T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("polyline",{points:"9 18 15 12 9 6"})}),Grid:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),T.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),Play:()=>T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),Pause:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),T.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Video:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),T.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),Camera:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"}),T.jsx("circle",{cx:"12",cy:"14",r:"4"})]}),Record:()=>T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"red",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("circle",{cx:"12",cy:"12",r:"10"})}),Stop:()=>T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:T.jsx("rect",{x:"6",y:"6",width:"12",height:"12"})}),Keyframe:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M12 2l-5.5 9h11z"}),T.jsx("path",{d:"M12 22l-5.5-9h11z"})]}),Clock:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("circle",{cx:"12",cy:"12",r:"10"}),T.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Save:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),T.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),T.jsx("polyline",{points:"7 3 7 8 15 8"})]}),Folder:()=>T.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:T.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),Link:()=>T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),T.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})},hn=({children:s,variant:t="primary",size:i="md",icon:r,className:l="",...c})=>{const h="font-mono uppercase tracking-wider transition-colors duration-100 flex items-center justify-center gap-2 border disabled:opacity-50 disabled:cursor-not-allowed select-none",f={primary:"bg-black border-zinc-600 text-zinc-200 hover:bg-zinc-900 hover:border-zinc-400",secondary:"bg-black border-zinc-800 text-zinc-400 hover:border-zinc-600",danger:"bg-black border-red-600 text-red-500 hover:border-red-400",ghost:"bg-transparent border-transparent text-zinc-400 hover:text-zinc-200"},m={sm:"text-xs px-2 py-1 h-7",md:"text-sm px-4 py-2 h-9"};return T.jsxs("button",{className:`${h} ${f[t]} ${m[i]} ${l}`,...c,children:[r&&T.jsx("span",{className:"w-4 h-4 flex items-center",children:r}),s]})},Ht=({label:s,value:t,...i})=>T.jsxs("div",{className:"flex flex-col gap-1 mb-4 group",children:[T.jsxs("div",{className:"flex justify-between items-end text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors",children:[T.jsx("label",{children:s}),T.jsx("span",{className:"bg-zinc-900 px-1 border border-zinc-800 font-display",children:t})]}),T.jsxs("div",{className:"relative h-4 flex items-center",children:[T.jsx("div",{className:"absolute w-full h-1 bg-zinc-800"}),T.jsx("div",{className:"absolute h-1 bg-cyan-900",style:{width:`${(t-Number(i.min||0))/(Number(i.max||100)-Number(i.min||0))*100}%`}}),T.jsx("input",{type:"range",className:"relative w-full z-10 opacity-0 cursor-pointer h-full",value:t,...i}),T.jsx("div",{className:"absolute w-2 h-4 bg-cyan-500 border border-black pointer-events-none transition-all duration-75",style:{left:`calc(${(t-Number(i.min||0))/(Number(i.max||100)-Number(i.min||0))*100}% - 4px)`}})]})]}),ms=({label:s,checked:t,onChange:i})=>T.jsxs("div",{className:"flex items-center justify-between mb-2 cursor-pointer group",onClick:()=>i(!t),children:[T.jsx("span",{className:"text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors",children:s}),T.jsx("div",{className:`w-8 h-4 border transition-colors relative ${t?"border-cyan-500 bg-cyan-900/30":"border-zinc-700 bg-zinc-900"}`,children:T.jsx("div",{className:`absolute top-0.5 bottom-0.5 w-2.5 bg-current transition-all ${t?"right-0.5 bg-cyan-400":"left-0.5 bg-zinc-600"}`})})]}),Mr=({title:s,children:t,defaultOpen:i=!0})=>{const[r,l]=Ev.useState(i);return T.jsxs("div",{className:"border-b border-zinc-800 last:border-0",children:[T.jsxs("button",{className:"w-full flex items-center justify-between py-2 px-1 hover:bg-zinc-900/50 transition-colors text-xs font-bold text-zinc-400 uppercase tracking-widest",onClick:()=>l(!r),children:[T.jsx("span",{children:s}),T.jsx("span",{className:`transform transition-transform ${r?"rotate-90":""}`,children:T.jsx(ot.ChevronRight,{})})]}),r&&T.jsx("div",{className:"p-2 pb-4 animate-in slide-in-from-top-1 fade-in duration-200",children:t})]})},Ns=({children:s,title:t,className:i="",action:r})=>T.jsxs("div",{className:`relative bg-black border border-zinc-800 flex flex-col ${i}`,children:[t&&T.jsxs("div",{className:"h-8 border-b border-zinc-800 flex items-center px-3 bg-black justify-between",children:[T.jsx("h3",{className:"text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono flex items-center gap-2",children:t}),r&&T.jsx("div",{children:r})]}),T.jsx("div",{className:"flex-1 overflow-hidden relative",children:s})]}),Pn={amount:35,seed:25,iterations:5,quality:60,simpleSlice:!0,scatter:0,shred:0,burn:0,melt:0,shake:0,pixelSort:0,pixelSortMode:"brightness",channelSep:0,channelSepX:10,channelSepY:0,colorOffset:0,pixelation:0,rgbShift:0,redShift:0,greenShift:0,blueShift:0,scanlines:!1,scanlineIntensity:20,noise:0,brightness:100,masterSpeed:.5,videoSpeedMode:"normal",targetDurationSec:60,timeScaleMosh:.5,timeScaleDisp:.5,timeScaleBlocks:.5,timeScaleChroma:.5,holdMode:!1,injectIntervalSec:5,injectFrames:1,moshEnabled:!1,moshMode:"2d",moshInjection:.1,moshDiffusion:0,iframeInterval:30,iframeBloom:0,iframeSoftReset:0,flowX:0,flowY:0,flowRotate:0,flowZoom:0,blockList:0,blockSize:32,feedback:0,refSwap:0,historyCaptureInterval:1,motionResidue:0,temporalEcho:0,temporalEchoDecay:50,temporalEchoOffset:10,timeSmear:0,timeSmearFrames:5,timeSmearNonLinear:50,reverseBurst:0,reverseBurstDuration:10,stutterLock:0,stutterLockMin:2,stutterLockMax:10,temporalDisplace:0,temporalDisplaceRegions:8,temporalDisplaceOffset:15,partialReplace:0,partialReplacePattern:"random",partialReplaceOffset:10,audioEventEnable:!1,audioEventThreshold:70,audioEventAction:"freeze",audioEventDuration:10,chaosAmount:0,chaosEvolve:!1,mvAbuse:!1,mvBlockSize:32,mvSearchRadius:2,shaderMoshEnabled:!1,moshFeedback:85,moshDecay:2,moshWarp:10,moshBlockSize:30,moshRGBOffset:5,moshDispStrength:0,moshDispScale:10,moshDispSpeed:5,moshDispQuantize:0,audioEnabled:!1,audioSource:"mic",audioGain:50,audioGate:10,audioSmooth:30,audioFeature:"envelope",audioTargetRgb:50,audioTargetAmount:30,audioTargetWarp:60,audioTargetFeedback:0,audioTargetBlocks:0,audioTargetMelt:0,audioTargetShake:0,audioTargetNoise:0,audioInvert:!1,audioQuantize:0,corruptMode:"safe"},RS=[{id:"default",name:"INITIALIZE",params:{...Pn}},{id:"audio-reactive-glitch",name:"SONIC ENTROPY (AUDIO)",params:{...Pn,audioEnabled:!0,audioSource:"mic",audioGain:80,amount:5,rgbShift:2,moshEnabled:!0,moshMode:"webgl",feedback:95,moshWarp:5,audioTargetWarp:100,audioTargetRgb:80,audioTargetAmount:40}},{id:"motion-sculpture",name:"MOTION SCULPTURE (GL)",params:{...Pn,moshEnabled:!0,moshMode:"webgl",feedback:98,moshInjection:.05,moshWarp:40,flowX:2,flowRotate:1,noise:20,rgbShift:10}},{id:"deconstructed-paper",name:"PAPER SHREDDER",params:{...Pn,scatter:60,shred:80,burn:20,amount:5,scanlines:!0,scanlineIntensity:10,timeScaleBlocks:.2}},{id:"burnt-film",name:"ACID BURN",params:{...Pn,melt:50,burn:100,scatter:20,colorOffset:20,redShift:30,brightness:120,noise:40}},{id:"erosion-sculpture-30min",name:"EROSION SCULPTURE (30m)",params:{...Pn,shaderMoshEnabled:!0,masterSpeed:.5,videoSpeedMode:"timeWarp",targetDurationSec:1800,holdMode:!0,injectIntervalSec:10,injectFrames:2,moshFeedback:99,moshDecay:.1,moshWarp:5,moshDispStrength:10,moshDispScale:10,moshDispSpeed:2,timeScaleDisp:.2,amount:0}},{id:"slow-drift",name:"SLOW DRIFT",params:{...Pn,moshEnabled:!0,moshMode:"webgl",masterSpeed:.8,feedback:95,moshInjection:.02,moshWarp:20,flowX:1,flowY:.5,rgbShift:5,timeScaleMosh:.5,amount:0}},{id:"hard-meltdown",name:"HARD MELTDOWN",params:{...Pn,shaderMoshEnabled:!0,masterSpeed:2,moshFeedback:80,moshDecay:5,moshWarp:60,moshDispStrength:50,moshDispScale:15,moshDispSpeed:30,timeScaleDisp:3,amount:10,melt:30}},{id:"vhs-tape-loop",name:"VHS TAPE LOOP",params:{...Pn,moshEnabled:!1,amount:25,quality:40,noise:60,scanlines:!0,scanlineIntensity:65,shake:70,melt:20,rgbShift:15,colorOffset:10,brightness:115}},{id:"liquid-noise",name:"LIQUID NOISE",params:{...Pn,moshEnabled:!0,moshMode:"webgl",feedback:98,moshWarp:0,moshDiffusion:2,moshInjection:.1,amount:0,rgbShift:5,shaderMoshEnabled:!0,moshDispStrength:40,moshDispScale:15,moshDispSpeed:10}},{id:"datamosh-burst",name:"DATAMOSH BURST",params:{...Pn,moshEnabled:!0,iframeInterval:45,iframeBloom:60,flowZoom:-20,flowRotate:4,blockList:60,blockSize:32,feedback:20,amount:10}},{id:"temporal-echo",name:"TEMPORAL ECHO",params:{...Pn,moshEnabled:!0,moshMode:"2d",iframeInterval:0,feedback:96,refSwap:85,flowX:2,flowY:0,rgbShift:5,brightness:110}},{id:"digital-sludge",name:"DIGITAL SLUDGE",params:{...Pn,shaderMoshEnabled:!0,moshFeedback:90,moshDecay:1,moshDispStrength:80,moshDispScale:80,moshDispSpeed:2,moshDispQuantize:80,moshRGBOffset:30,pixelation:5}},{id:"fleisch-airsatz",name:"FLEISCH AIRSATZ",params:{...Pn,amount:12,quality:35,noise:45,rgbShift:4,colorOffset:3,pixelation:3,iterations:2,brightness:110,scanlines:!0,scanlineIntensity:10}}],CS=({onFileSelect:s,onPresetSelect:t,activePresetId:i,exportFormat:r,setExportFormat:l,exportQuality:c,setExportQuality:h,onExport:f,isVideo:m,isAnimationActive:p,currentParams:_,onImportPreset:g,onSharePreset:x,isRecording:y,recordFormat:E,setRecordFormat:b,recordFps:v,setRecordFps:S,isSeqActive:U,seqFps:R,setSeqFps:F,seqFrames:k,setSeqFrames:O,onStartPngSeq:z,onStopPngSeq:ue,lockRes:w,setLockRes:P,lockWidth:ne,lockHeight:fe,setLockWidth:be,setLockHeight:j})=>{const ee=ze.useRef(null),I=ze.useRef(null),[W,K]=ze.useState("image"),[se,pe]=ze.useState(0);console.log("FilePanel components:",Ns,hn,Ht,ot==null?void 0:ot.Video,ot==null?void 0:ot.Upload,ot==null?void 0:ot.Folder,ot==null?void 0:ot.Link,ot==null?void 0:ot.Save,ot==null?void 0:ot.Camera,ot==null?void 0:ot.Stop,ot==null?void 0:ot.Record),ze.useEffect(()=>{K(m||p?"video":"image")},[m,p]);const L=Z=>{if(Z.preventDefault(),Z.stopPropagation(),Z.dataTransfer.files&&Z.dataTransfer.files[0]){const _e=Z.dataTransfer.files[0];console.log("[Import] drop:",_e.name,_e.type),s(_e)}},X=Z=>{Z.preventDefault(),Z.stopPropagation()},H=()=>{const Z=prompt("Enter Preset Name:","Custom Glitch");if(!Z)return;const _e={id:crypto.randomUUID(),name:Z,params:_},Te=JSON.stringify(_e,null,2),Ge=new Blob([Te],{type:"application/json"}),Pe=URL.createObjectURL(Ge),ke=document.createElement("a");ke.href=Pe,ke.download=`${Z.replace(/\s+/g,"_").toLowerCase()}.json`,document.body.appendChild(ke),ke.click(),document.body.removeChild(ke),URL.revokeObjectURL(Pe)},Q=Z=>{var Ge;const _e=(Ge=Z.target.files)==null?void 0:Ge[0];if(!_e)return;const Te=new FileReader;Te.onload=Pe=>{var ke;try{const ct=(ke=Pe.target)==null?void 0:ke.result,te=JSON.parse(ct);te&&typeof te.params=="object"&&"amount"in te.params?g(te.params,te.name):alert("Invalid preset file format.")}catch(ct){console.error("Failed to parse preset",ct),alert("Error loading preset.")}I.current&&(I.current.value="")},Te.readAsText(_e)};return T.jsxs("div",{className:"h-full flex flex-col gap-2",children:[T.jsx(Ns,{title:"INPUT SOURCE",className:"h-auto min-h-[140px] flex-shrink-0",children:T.jsxs("div",{className:"absolute inset-2 border-2 border-dashed border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900/30 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group",onDrop:L,onDragOver:X,onClick:()=>{var Z;return(Z=ee.current)==null?void 0:Z.click()},children:[T.jsx("div",{className:`p-3 rounded-full transition-all ${m?"bg-cyan-900/50 text-cyan-400":"bg-zinc-900 text-zinc-500 group-hover:text-cyan-400 group-hover:scale-110"}`,children:m?T.jsx(ot.Video,{}):T.jsx(ot.Upload,{})}),T.jsxs("div",{className:"text-center",children:[T.jsx("p",{className:"text-xs font-bold text-zinc-400 group-hover:text-white",children:m?"VIDEO LOADED":"DROP FILE"}),T.jsx("p",{className:"text-[10px] text-zinc-600 mt-1",children:"PNG, JPG, GIF, MP4, MOV"})]}),T.jsx("input",{type:"file",ref:ee,className:"hidden",accept:"image/*,video/mp4,video/quicktime,video/webm",onChange:Z=>{var Te;const _e=(Te=Z.target.files)==null?void 0:Te[0];console.log("[Import] input onChange:",_e==null?void 0:_e.name,_e==null?void 0:_e.type),_e&&s(_e)}})]})}),T.jsx(Ns,{title:"PRESETS",className:"flex-1 min-h-0",action:T.jsxs("div",{className:"flex gap-1",children:[T.jsx("input",{type:"file",ref:I,className:"hidden",accept:"application/json",onChange:Q}),T.jsx("button",{className:"p-1 hover:text-cyan-400 text-zinc-500 transition-colors",title:"Import JSON Preset",onClick:()=>{var Z;return(Z=I.current)==null?void 0:Z.click()},children:T.jsx(ot.Folder,{})}),T.jsx("button",{className:"p-1 hover:text-cyan-400 text-zinc-500 transition-colors",title:"Share Preset Link",onClick:x,children:T.jsx(ot.Link,{})}),T.jsx("button",{className:"p-1 hover:text-cyan-400 text-zinc-500 transition-colors",title:"Save Preset as JSON",onClick:H,children:T.jsx(ot.Save,{})})]}),children:T.jsx("div",{className:"absolute inset-0 overflow-y-auto p-2 space-y-2 custom-scrollbar",children:RS.map(Z=>T.jsxs("button",{onClick:()=>t(Z),className:`w-full text-left p-3 border transition-all duration-200 relative overflow-hidden group ${i===Z.id?"border-cyan-500 bg-cyan-950/30":"border-zinc-800 bg-zinc-900/20 hover:border-zinc-600"}`,children:[T.jsxs("div",{className:"flex justify-between items-center relative z-10",children:[T.jsx("span",{className:`text-xs font-bold tracking-wider font-display ${i===Z.id?"text-cyan-400":"text-zinc-400 group-hover:text-zinc-200"}`,children:Z.name}),i===Z.id&&T.jsx("div",{className:"w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_5px_#22d3ee]"})]}),i===Z.id&&T.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none"})]},Z.id))})}),T.jsx(Ns,{title:"OUTPUT",className:"flex-shrink-0 h-auto",children:T.jsxs("div",{className:"p-3 flex flex-col gap-3",children:[T.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[T.jsxs("label",{className:"flex items-center gap-2",children:[T.jsx("input",{type:"checkbox",checked:w,onChange:Z=>P(Z.target.checked)}),T.jsx("span",{className:"text-zinc-400",children:"LOCK RESOLUTION"})]}),T.jsx("input",{type:"number",className:"w-16 bg-zinc-900 border border-zinc-800 px-1 text-xs text-zinc-200",value:ne,onChange:Z=>be(Number(Z.target.value)),placeholder:"W"}),T.jsx("span",{className:"text-zinc-600",children:"×"}),T.jsx("input",{type:"number",className:"w-16 bg-zinc-900 border border-zinc-800 px-1 text-xs text-zinc-200",value:fe,onChange:Z=>j(Number(Z.target.value)),placeholder:"H"})]}),T.jsxs("div",{className:"flex bg-zinc-900 p-1 border border-zinc-800 select-none",children:[T.jsx("button",{className:`flex-1 text-[10px] font-bold py-1 px-2 transition-colors ${W==="image"?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300"}`,onClick:()=>K("image"),children:"IMAGE"}),T.jsx("button",{className:`flex-1 text-[10px] font-bold py-1 px-2 transition-colors ${W==="video"?"bg-cyan-900 text-cyan-100":"text-zinc-500 hover:text-zinc-300"}`,onClick:()=>K("video"),children:"RECORD"})]}),W==="image"&&T.jsxs("div",{className:"flex flex-col gap-3 animate-in fade-in duration-200",children:[T.jsxs("div",{className:"flex gap-2",children:[T.jsx(hn,{variant:r==="png"?"primary":"secondary",size:"sm",className:"flex-1",onClick:()=>l("png"),children:"PNG"}),T.jsx(hn,{variant:r==="jpeg"?"primary":"secondary",size:"sm",className:"flex-1",onClick:()=>l("jpeg"),children:"JPG"})]}),r==="jpeg"&&T.jsx("div",{className:"animate-in fade-in duration-200",children:T.jsx(Ht,{label:"QUALITY",value:c,min:10,max:100,onChange:Z=>h(Number(Z.target.value))})}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx(hn,{variant:"primary",onClick:()=>f(!1),icon:T.jsx(ot.Camera,{}),children:"SNAPSHOT"}),T.jsx(hn,{variant:U?"danger":"secondary",onClick:()=>U?ue():z(R,k),icon:U?T.jsx(ot.Stop,{}):T.jsx(ot.Record,{}),children:U?"STOP SEQUENCE":"PNG SEQUENCE"})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px] text-zinc-400",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block mb-1",children:"SEQ FPS"}),T.jsx("input",{type:"number",className:"w-full bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:R,onChange:Z=>F(Number(Z.target.value))})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block mb-1",children:"FRAMES"}),T.jsx("input",{type:"number",className:"w-full bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:k,onChange:Z=>O(Number(Z.target.value))})]})]})]}),W==="video"&&T.jsxs("div",{className:"flex flex-col gap-3 animate-in fade-in duration-200",children:[T.jsxs("div",{className:"grid grid-cols-3 gap-2 items-center text-[11px]",children:[T.jsx("span",{className:"text-zinc-400",children:"FORMAT"}),T.jsxs("select",{className:"col-span-2 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:E,onChange:Z=>b(Z.target.value),children:[T.jsx("option",{value:"auto",children:"AUTO (MP4/WEBM)"}),T.jsx("option",{value:"mp4",children:"MP4 (H264)"}),T.jsx("option",{value:"webm",children:"WEBM (VP8/9)"})]})]}),T.jsxs("div",{className:"grid grid-cols-3 gap-2 items-center text-[11px]",children:[T.jsx("span",{className:"text-zinc-400",children:"FPS"}),T.jsx("input",{type:"number",className:"col-span-2 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:v,onChange:Z=>S(Number(Z.target.value))})]}),T.jsxs("div",{className:"text-[10px] text-zinc-500 font-mono border border-zinc-800 bg-zinc-900/50 p-2",children:["DURATION (SEC, 0=MANUAL)",T.jsx("input",{type:"number",className:"w-full mt-1 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:se,onChange:Z=>pe(Number(Z.target.value))})]}),T.jsx(hn,{variant:y?"danger":"primary",className:y?"animate-pulse":"",onClick:()=>f(!0,se),icon:y?T.jsx(ot.Stop,{}):T.jsx(ot.Record,{}),children:y?"STOP":"RECORD"})]})]})})]})},wS=({params:s,onChange:t,onRandomize:i,onReset:r,onImportMusic:l})=>{const c=ze.useRef(null),h=(f,m)=>{t({...s,[f]:m})};return T.jsxs(Ns,{title:"CONTROLS",className:"h-full flex flex-col",children:[T.jsxs("div",{className:"p-2 border-b border-zinc-800 flex gap-2",children:[T.jsx(hn,{variant:"secondary",size:"sm",className:"flex-1",onClick:i,icon:T.jsx(ot.Refresh,{}),children:"RND"}),T.jsx(hn,{variant:"secondary",size:"sm",className:"flex-1",onClick:r,icon:T.jsx(ot.Undo,{}),children:"RESET"})]}),T.jsxs("div",{className:"overflow-y-auto flex-1 custom-scrollbar",children:[T.jsxs(Mr,{title:"TIME & EROSION",defaultOpen:!0,children:[T.jsxs("div",{className:"mb-4",children:[T.jsx(Ht,{label:"MASTER SPEED (GLOBAL)",value:s.masterSpeed,min:0,max:5,step:.1,onChange:f=>h("masterSpeed",Number(f.target.value))}),T.jsxs("div",{className:"flex gap-2 my-2",children:[T.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${s.videoSpeedMode==="normal"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>h("videoSpeedMode","normal"),children:"NORMAL PLAY"}),T.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${s.videoSpeedMode==="timeWarp"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>h("videoSpeedMode","timeWarp"),children:"TIME WARP"})]}),s.videoSpeedMode==="timeWarp"&&T.jsx("div",{className:"animate-in fade-in",children:T.jsx(Ht,{label:"TARGET DURATION (SEC)",value:s.targetDurationSec,min:10,max:3600,onChange:f=>h("targetDurationSec",Number(f.target.value))})})]}),T.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800 mb-4",children:[T.jsx("div",{className:"text-[10px] text-zinc-400 font-bold mb-2 uppercase",children:"Input Hold & Injection"}),T.jsx(ms,{label:"HOLD MODE (FREEZE INPUT)",checked:s.holdMode,onChange:f=>h("holdMode",f)}),T.jsxs("div",{className:s.holdMode?"opacity-100":"opacity-50 pointer-events-none",children:[T.jsx(Ht,{label:"INJECT INTERVAL (SEC)",value:s.injectIntervalSec,min:.5,max:60,step:.5,onChange:f=>h("injectIntervalSec",Number(f.target.value))}),T.jsx(Ht,{label:"INJECT FRAMES",value:s.injectFrames,min:1,max:5,step:1,onChange:f=>h("injectFrames",Number(f.target.value))})]})]})]}),T.jsx(Mr,{title:"AUDIO MODULATION",defaultOpen:!0,children:T.jsxs("div",{className:"p-2 bg-black/40 mb-4 border border-zinc-800",children:[T.jsxs("div",{className:"text-[10px] text-zinc-400 font-bold mb-2 uppercase flex items-center gap-2",children:[T.jsx(ot.Zap,{})," SIGNAL ENGINE"]}),T.jsx(ms,{label:"ENABLE MODULATION",checked:s.audioEnabled,onChange:f=>h("audioEnabled",f)}),s.audioEnabled&&T.jsxs("div",{className:"mt-3 space-y-3 animate-in fade-in slide-in-from-top-1",children:[T.jsxs("div",{className:"flex flex-col gap-1",children:[T.jsx("label",{className:"text-[10px] text-zinc-500 font-bold uppercase",children:"Signal Source"}),T.jsx("div",{className:"flex gap-1",children:["mic","video","music"].map(f=>T.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold uppercase transition-all ${s.audioSource===f?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-800 text-zinc-500 hover:text-zinc-300"}`,onClick:()=>h("audioSource",f),children:f},f))})]}),s.audioSource==="music"&&T.jsxs("div",{className:"border border-dashed border-zinc-700 p-2 text-center",children:[T.jsx("input",{type:"file",ref:c,className:"hidden",accept:"audio/*",onChange:f=>f.target.files&&l(f.target.files[0])}),T.jsx(hn,{size:"sm",variant:"secondary",className:"w-full text-[10px]",onClick:()=>{var f;return(f=c.current)==null?void 0:f.click()},icon:T.jsx(ot.Folder,{}),children:s.musicUrl?"SWAP MUSIC":"SELECT MUSIC FILE"}),s.musicUrl&&T.jsx("div",{className:"text-[9px] text-cyan-600 mt-1 truncate",children:"TRACK LOADED"})]}),T.jsxs("div",{className:"flex flex-col gap-1",children:[T.jsx("label",{className:"text-[10px] text-zinc-500 font-bold uppercase",children:"Feature Signal"}),T.jsxs("select",{value:s.audioFeature,onChange:f=>h("audioFeature",f.target.value),className:"w-full text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 font-mono",children:[T.jsx("option",{value:"amplitude",children:"AMPLITUDE (raw)"}),T.jsx("option",{value:"envelope",children:"ENVELOPE (smoothed)"}),T.jsx("option",{value:"low",children:"LOW (20-250 Hz bass)"}),T.jsx("option",{value:"mid",children:"MID (250-4k Hz vocal)"}),T.jsx("option",{value:"high",children:"HIGH (4k-20k Hz treble)"}),T.jsx("option",{value:"transient",children:"TRANSIENT (percussive hits)"}),T.jsx("option",{value:"beat",children:"BEAT (rhythmic pulse)"})]})]}),T.jsx(Ht,{label:"INPUT GAIN",value:s.audioGain,min:0,max:200,onChange:f=>h("audioGain",Number(f.target.value))}),T.jsx(Ht,{label:"GATE THRESHOLD",value:s.audioGate,min:0,max:100,onChange:f=>h("audioGate",Number(f.target.value))}),T.jsx(Ht,{label:"SMOOTHING",value:s.audioSmooth,min:0,max:100,onChange:f=>h("audioSmooth",Number(f.target.value))}),T.jsx("div",{className:"flex gap-2 items-center",children:T.jsx(ms,{label:"INVERT SIGNAL",checked:!!s.audioInvert,onChange:f=>h("audioInvert",f)})}),T.jsx(Ht,{label:"QUANTIZE (STEPS)",value:s.audioQuantize||0,min:0,max:16,step:1,onChange:f=>h("audioQuantize",Number(f.target.value))}),T.jsxs("div",{className:"pt-2 border-t border-zinc-800/50",children:[T.jsx("div",{className:"text-[10px] text-cyan-600 font-bold mb-2 uppercase",children:"Modulation Targets"}),T.jsx(Ht,{label:"RGB SHIFT TARGET",value:s.audioTargetRgb,min:0,max:100,onChange:f=>h("audioTargetRgb",Number(f.target.value))}),T.jsx(Ht,{label:"GLITCH AMOUNT TARGET",value:s.audioTargetAmount,min:0,max:100,onChange:f=>h("audioTargetAmount",Number(f.target.value))}),T.jsx(Ht,{label:"MOSH WARP TARGET",value:s.audioTargetWarp,min:0,max:200,onChange:f=>h("audioTargetWarp",Number(f.target.value))}),T.jsx(Ht,{label:"FEEDBACK TARGET",value:s.audioTargetFeedback||0,min:0,max:100,onChange:f=>h("audioTargetFeedback",Number(f.target.value))}),T.jsx(Ht,{label:"BLOCKS TARGET",value:s.audioTargetBlocks||0,min:0,max:100,onChange:f=>h("audioTargetBlocks",Number(f.target.value))}),T.jsx(Ht,{label:"MELT TARGET",value:s.audioTargetMelt||0,min:0,max:100,onChange:f=>h("audioTargetMelt",Number(f.target.value))}),T.jsx(Ht,{label:"SHAKE TARGET",value:s.audioTargetShake||0,min:0,max:100,onChange:f=>h("audioTargetShake",Number(f.target.value))}),T.jsx(Ht,{label:"NOISE TARGET",value:s.audioTargetNoise||0,min:0,max:100,onChange:f=>h("audioTargetNoise",Number(f.target.value))})]})]})]})}),T.jsxs(Mr,{title:"Advanced Datamosh",defaultOpen:!1,children:[T.jsx("div",{className:"mb-4 p-2 bg-zinc-900/50 border border-zinc-800",children:T.jsx(ms,{label:"ENABLE MOSH ENGINE",checked:s.moshEnabled,onChange:f=>h("moshEnabled",f)})}),T.jsxs("div",{className:s.moshEnabled?"opacity-100 transition-opacity":"opacity-50 pointer-events-none transition-opacity",children:[T.jsxs("div",{className:"flex gap-2 mb-4",children:[T.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${s.moshMode==="2d"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>h("moshMode","2d"),children:"CANVAS 2D"}),T.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${s.moshMode==="webgl"?"bg-purple-900 border-purple-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>h("moshMode","webgl"),children:"WEBGL2 SCULPT"})]}),T.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800 mb-3",children:[T.jsx(ms,{label:"MOTION VECTOR ABUSE (BLOCK MATCH)",checked:!!s.mvAbuse,onChange:f=>h("mvAbuse",f)}),T.jsxs("div",{className:s.mvAbuse?"":"opacity-50 pointer-events-none",children:[T.jsx(Ht,{label:"MV BLOCK SIZE",value:s.mvBlockSize||32,min:8,max:128,step:8,onChange:f=>h("mvBlockSize",Number(f.target.value))}),T.jsx(Ht,{label:"MV SEARCH RADIUS (BLOCKS)",value:s.mvSearchRadius||2,min:0,max:8,step:1,onChange:f=>h("mvSearchRadius",Number(f.target.value))})]})]}),T.jsx(Ht,{label:"ACCUMULATION (FEEDBACK)",value:s.feedback,min:0,max:100,onChange:f=>h("feedback",Number(f.target.value))})]})]}),T.jsxs(Mr,{title:"Standard Glitch",children:[T.jsx(Ht,{label:"AMOUNT",value:s.amount,min:0,max:100,onChange:f=>h("amount",Number(f.target.value))}),T.jsx(Ht,{label:"QUALITY",value:s.quality,min:1,max:100,onChange:f=>h("quality",Number(f.target.value))})]}),T.jsxs(Mr,{title:"Professional Glitch",defaultOpen:!1,children:[T.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800 mb-3",children:[T.jsx("div",{className:"text-[10px] text-purple-400 font-bold mb-2 uppercase",children:"Pixel Sorting"}),T.jsx(Ht,{label:"INTENSITY",value:s.pixelSort||0,min:0,max:100,onChange:f=>h("pixelSort",Number(f.target.value))}),T.jsxs("div",{className:"flex gap-2 mt-2",children:[T.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold ${s.pixelSortMode==="brightness"?"bg-purple-900 border-purple-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>h("pixelSortMode","brightness"),children:"BRIGHT"}),T.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold ${s.pixelSortMode==="hue"?"bg-purple-900 border-purple-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>h("pixelSortMode","hue"),children:"HUE"}),T.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold ${s.pixelSortMode==="random"?"bg-purple-900 border-purple-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>h("pixelSortMode","random"),children:"RANDOM"})]})]}),T.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800",children:[T.jsx("div",{className:"text-[10px] text-purple-400 font-bold mb-2 uppercase",children:"Channel Separation"}),T.jsx(Ht,{label:"INTENSITY",value:s.channelSep||0,min:0,max:100,onChange:f=>h("channelSep",Number(f.target.value))}),T.jsx(Ht,{label:"OFFSET X",value:s.channelSepX||10,min:-50,max:50,onChange:f=>h("channelSepX",Number(f.target.value))}),T.jsx(Ht,{label:"OFFSET Y",value:s.channelSepY||0,min:-50,max:50,onChange:f=>h("channelSepY",Number(f.target.value))})]})]}),T.jsxs(Mr,{title:"Compression",children:[T.jsx("div",{className:"text-[10px] text-zinc-400 font-bold mb-2 uppercase",children:"Byte Corruption Mode"}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${s.corruptMode==="safe"?"bg-emerald-900 border-emerald-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>h("corruptMode","safe"),children:"SAFE"}),T.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${s.corruptMode==="unsafe"?"bg-red-900 border-red-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>h("corruptMode","unsafe"),children:"UNSAFE"})]})]}),T.jsxs(Mr,{title:"Display",children:[T.jsx(ms,{label:"CRT SCANLINES",checked:s.scanlines,onChange:f=>h("scanlines",f)}),T.jsx(Ht,{label:"NOISE",value:s.noise,min:0,max:100,onChange:f=>h("noise",Number(f.target.value))}),T.jsxs("div",{className:"mt-2 p-2 bg-zinc-900/40 border border-zinc-800",children:[T.jsx("div",{className:"text-[10px] text-zinc-400 font-bold uppercase mb-2",children:"Debug"}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx(hn,{size:"sm",variant:"secondary",onClick:()=>{window.__ERRORHEAD_DEBUG__=!window.__ERRORHEAD_DEBUG__},children:"TOGGLE OVERLAY"}),T.jsx(hn,{size:"sm",variant:"secondary",onClick:()=>{window.__ERRORHEAD_FIXED_DT=window.__ERRORHEAD_FIXED_DT?void 0:1/30},children:"FIXED 30 FPS"})]})]})]})]})]})},DS=({canvasRef:s,isProcessing:t,live:i,toggleLive:r,hasSource:l,isVideo:c,togglePlayback:h,onStop:f,isPlaying:m,isRecording:p,fps:_,frameCounter:g})=>{const[x,y]=ze.useState(1),[E,b]=ze.useState(!0);return T.jsxs(Ns,{className:"h-full flex flex-col relative overflow-hidden bg-zinc-950",children:[T.jsx("div",{className:"absolute top-2 left-2 z-20 flex flex-col gap-2",children:c&&T.jsxs("div",{className:"bg-black/80 border border-zinc-800 p-1 flex gap-1",children:[T.jsx(hn,{variant:m?"secondary":"primary",size:"sm",onClick:h,icon:m?T.jsx(ot.Pause,{}):T.jsx(ot.Play,{}),children:m?"PAUSE":"PLAY"}),T.jsx(hn,{variant:"secondary",size:"sm",onClick:f,icon:T.jsx(ot.Stop,{}),children:"STOP"})]})}),T.jsxs("div",{className:"absolute top-2 right-2 z-20 flex gap-2",children:[T.jsx(hn,{onClick:()=>b(!E),variant:"secondary",size:"sm",icon:T.jsx(ot.Grid,{}),title:"Toggle HUD Overlay",children:E?"HUD ON":"HUD OFF"}),T.jsx(hn,{onClick:r,variant:i?"primary":"secondary",icon:i?T.jsx(ot.Zap,{}):T.jsx(ot.Pause,{}),className:i?"border-cyan-400":"opacity-80",title:"Toggle real-time processing",children:i?"LIVE ON":"LIVE OFF"})]}),T.jsxs("div",{className:"flex-1 flex items-center justify-center relative overflow-hidden",children:[p&&T.jsx("div",{className:"absolute top-2 left-1/2 -translate-x-1/2 z-20",children:T.jsxs("div",{className:"flex items-center gap-2 border border-red-600 bg-black/80 px-2 py-0.5",children:[T.jsx("span",{className:"w-2 h-2 bg-red-500 animate-pulse"}),T.jsx("span",{className:"text-[10px] font-mono text-red-400 tracking-widest",children:"REC"})]})}),T.jsxs("div",{className:"relative shadow-2xl transition-transform duration-200 ease-out p-8",style:{transform:`scale(${x})`},children:[T.jsx("canvas",{ref:s,className:`max-w-full max-h-[80vh] border border-zinc-800 object-contain block bg-black ${!l&&"hidden"}`}),!l&&T.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:T.jsx("div",{className:"text-zinc-700 font-mono text-3xl font-bold uppercase tracking-widest opacity-50 select-none whitespace-nowrap",children:"No Signal"})}),t&&!i&&T.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] z-10",children:T.jsx("div",{className:"text-cyan-400 font-mono text-xs animate-pulse",children:"PROCESSING..."})})]}),E&&T.jsxs("div",{className:"absolute top-2 left-2 z-20 text-[10px] font-mono bg-black/70 border border-zinc-800 text-zinc-300 px-2 py-1 pointer-events-none",children:[T.jsxs("div",{children:[T.jsxs("span",{children:["FPS: ",_??0]}),typeof g=="number"&&T.jsxs("span",{className:"ml-3",children:["Frame: ",g]})]}),T.jsxs("div",{className:"mt-0.5 text-zinc-500",children:[T.jsx("span",{children:c?m?"VIDEO: PLAYING":"VIDEO: PAUSED":l?"IMAGE":"NO SOURCE"}),T.jsx("span",{className:"ml-3",children:i?"LIVE":"PAUSED"}),T.jsx("span",{className:"ml-3",children:s.current?`${s.current.width}x${s.current.height}`:""})]})]})]}),T.jsxs("div",{className:"h-8 bg-black border-t border-zinc-900 flex items-center justify-center gap-4 px-4",children:[T.jsx("button",{onClick:()=>y(Math.max(.1,x-.1)),className:"text-zinc-500 hover:text-white",children:"-"}),T.jsxs("span",{className:"text-xs font-mono w-12 text-center text-zinc-400",children:[Math.round(x*100),"%"]}),T.jsx("button",{onClick:()=>y(Math.min(3,x+.1)),className:"text-zinc-500 hover:text-white",children:"+"})]})]})},LS=({animation:s,onPlayPause:t,onSeek:i,onAddKeyframe:r,onDeleteKeyframe:l,onDurationChange:c,isActive:h,onToggleActive:f,fps:m})=>{const p=g=>g.toFixed(2),_=g=>g>=50?"text-green-500":g>=24?"text-yellow-500":"text-red-500";return h?T.jsxs("div",{className:"flex flex-col bg-zinc-900/50 border-t border-cyan-500/20",children:[T.jsxs("div",{className:"flex items-center justify-between px-2 py-1 border-b border-zinc-800 h-10",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(hn,{variant:s.isPlaying?"secondary":"primary",size:"sm",onClick:t,icon:s.isPlaying?T.jsx(ot.Pause,{}):T.jsx(ot.Play,{}),children:s.isPlaying?"PAUSE":"PLAY"}),T.jsxs("div",{className:"flex items-center gap-1 bg-zinc-900 px-2 py-1 border border-zinc-700",children:[T.jsxs("span",{className:"text-cyan-400 font-mono text-sm",children:[p(s.currentTime),"s"]}),T.jsxs("span",{className:"text-zinc-500 text-xs",children:["/ ",s.duration,"s"]})]}),T.jsx(hn,{variant:"ghost",size:"sm",onClick:r,icon:T.jsx(ot.Keyframe,{}),children:"ADD KEYFRAME"})]}),T.jsxs("div",{className:"flex items-center gap-4",children:[T.jsxs("div",{className:"flex items-center gap-1.5 border-r border-zinc-700 pr-4 mr-1",children:[T.jsx("span",{className:"text-[10px] text-zinc-600",children:"FPS"}),T.jsx("span",{className:`text-xs font-mono ${_(m)}`,children:m})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"text-[10px] text-zinc-500",children:"DURATION"}),T.jsx("input",{type:"number",value:s.duration,onChange:g=>c(Number(g.target.value)),className:"w-12 bg-black border border-zinc-700 text-xs px-1 py-0.5 text-center text-zinc-300"})]}),T.jsx(hn,{variant:"ghost",size:"sm",onClick:f,children:"EXIT ANIMATION"})]})]}),T.jsxs("div",{className:"h-16 relative bg-black/40 group overflow-hidden cursor-crosshair",onClick:g=>{const x=g.currentTarget.getBoundingClientRect(),E=(g.clientX-x.left)/x.width*s.duration;i(Math.max(0,Math.min(s.duration,E)))},children:[T.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:"linear-gradient(90deg, #333 1px, transparent 1px)",backgroundSize:`${100/s.duration}% 100%`}}),s.keyframes.map(g=>T.jsx("div",{className:"absolute top-2 w-3 h-3 bg-cyan-500 rotate-45 border border-white hover:scale-125 transition-transform cursor-pointer z-10",style:{left:`calc(${g.time/s.duration*100}% - 6px)`},onClick:x=>{x.stopPropagation(),i(g.time)},onContextMenu:x=>{x.preventDefault(),l(g.id)},title:`Keyframe at ${g.time.toFixed(2)}s`},g.id)),T.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-red-500 z-20 pointer-events-none",style:{left:`${s.currentTime/s.duration*100}%`},children:T.jsx("div",{className:"absolute top-0 -left-1.5 w-3 h-3 bg-red-500 rotate-45 transform -translate-y-1/2"})})]})]}):T.jsxs("div",{className:"flex items-center justify-between px-4 h-8 text-xs font-mono text-zinc-500 bg-zinc-950 border-t border-zinc-900",children:[T.jsx("div",{className:"flex gap-4 items-center",children:T.jsx(hn,{variant:"ghost",size:"sm",onClick:f,icon:T.jsx(ot.Clock,{}),children:"ENABLE ANIMATION"})}),T.jsxs("div",{className:"flex items-center gap-6",children:[T.jsxs("div",{className:"flex items-center gap-2",title:"Real-time Frame Rate",children:[T.jsx("span",{className:"text-zinc-600",children:"FPS"}),T.jsx("span",{className:`font-bold ${_(m)}`,children:m})]}),T.jsxs("div",{className:"text-zinc-600",children:["MODE: ",T.jsx("span",{className:"text-zinc-400",children:"STATIC"})]})]})]})},US=({onEnter:s,isExiting:t})=>{const[i,r]=ze.useState([]),[l,c]=ze.useState(!0),h=ze.useRef(null);return ze.useEffect(()=>{const f=Array.from({length:40}).map(()=>({x:Math.random()*100,y:Math.random()*100,s:Math.random()*2+1,d:Math.random()*5+2}));r(f)},[]),T.jsxs("div",{className:`fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-[#050505] flex items-center justify-center font-mono select-none transition-opacity duration-300 ${t?"animate-exit-purge":""}`,children:[T.jsxs("div",{className:"absolute inset-0 z-0",children:[l&&T.jsx("video",{ref:h,className:"absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none",src:"/errorhead/landing.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,onError:()=>c(!1)}),i.map((f,m)=>T.jsx("div",{className:"absolute bg-cyan-500/20",style:{left:`${f.x}%`,top:`${f.y}%`,width:`${f.s}px`,height:`${f.s}px`,animation:`pulse-slow ${f.d}s infinite ease-in-out`,boxShadow:"0 0 8px rgba(6, 182, 212, 0.4)"}},m)),T.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 z-10"}),T.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-cyan-500/10 animate-scanline z-20"}),T.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"})]}),T.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-12 text-center px-4",children:[T.jsxs("div",{className:`space-y-4 group transition-all duration-500 ${t?"opacity-0 scale-95 blur-sm":""}`,children:[T.jsxs("div",{className:"flex flex-col items-center",children:[T.jsx("div",{className:"text-[10px] text-cyan-700 tracking-[1em] mb-2 translate-x-[0.5em] font-bold",children:"NEUE EPISTEME PRESENTS"}),T.jsxs("h1",{className:"text-8xl md:text-[10rem] font-display font-black tracking-[0.2em] text-white relative leading-none",children:["ERROR",T.jsx("span",{className:"text-cyan-500",children:"HEAD"}),T.jsx("span",{className:"absolute inset-0 text-cyan-500/20 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity",children:"ERRORHEAD"})]})]}),T.jsx("p",{className:"text-zinc-600 text-sm md:text-base tracking-[0.6em] uppercase font-light",children:"disciple of glitch"})]}),T.jsxs("div",{className:`flex flex-col items-center gap-6 transition-all duration-300 delay-75 ${t?"opacity-0 scale-90":""}`,children:[T.jsx("div",{className:"w-1 bg-cyan-500/40 h-12"}),T.jsxs(hn,{variant:"primary",size:"md",disabled:t,className:"px-16 py-8 text-xl border-cyan-500/50 bg-black hover:border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.05)] hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] transition-all duration-700 group relative overflow-hidden",onClick:s,children:[T.jsx("span",{className:"relative z-10 tracking-[0.5em] font-bold text-cyan-400 group-hover:text-black transition-colors",children:t?"PURGING...":"INITIALIZE"}),T.jsx("div",{className:"absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"})]}),T.jsxs("div",{className:"mt-8 flex flex-col items-center gap-2",children:[T.jsxs("div",{className:"flex gap-4 text-[9px] text-zinc-700 tracking-[0.3em] font-bold uppercase",children:[T.jsx("span",{className:"animate-pulse",children:"Buffer: Loaded"}),T.jsx("span",{className:"text-zinc-800",children:"|"}),T.jsx("span",{children:"Entropy: 0.992"}),T.jsx("span",{className:"text-zinc-800",children:"|"}),T.jsx("span",{className:"text-cyan-900",children:"Uptime: 0:00:00"})]}),T.jsx("div",{className:"w-48 h-[1px] bg-zinc-900 relative",children:T.jsx("div",{className:"absolute top-0 left-0 h-full bg-cyan-900/40 animate-loading-bar"})})]})]})]}),T.jsxs("div",{className:"absolute top-12 left-12 flex flex-col gap-1",children:[T.jsx("div",{className:"w-8 h-px bg-zinc-800"}),T.jsx("div",{className:"w-px h-8 bg-zinc-800"}),T.jsx("span",{className:"text-[8px] text-zinc-800 -translate-x-1",children:"X-01"})]}),T.jsxs("div",{className:"absolute bottom-12 right-12 flex flex-col items-end gap-1",children:[T.jsx("span",{className:"text-[8px] text-zinc-800 translate-x-1",children:"Y-04"}),T.jsx("div",{className:"w-px h-8 bg-zinc-800"}),T.jsx("div",{className:"w-8 h-px bg-zinc-800"})]})]})},NS="modulepreload",OS=function(s){return"/errorhead/"+s},q0={},Y0=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));l=Promise.allSettled(i.map(m=>{if(m=OS(m),m in q0)return;q0[m]=!0;const p=m.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":NS,p||(g.as="script"),g.crossOrigin="",g.href=m,f&&g.setAttribute("nonce",f),document.head.appendChild(g),p)return new Promise((x,y)=>{g.addEventListener("load",x),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return l.then(h=>{for(const f of h||[])f.status==="rejected"&&c(f.reason);return t().catch(c)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="160",zS=0,Z0=1,PS=2,bv=1,IS=2,da=3,tr=0,Kn=1,ha=2,$a=0,Ps=1,K0=2,Q0=3,J0=4,FS=5,wr=100,BS=101,HS=102,$0=103,eg=104,GS=200,VS=201,kS=202,jS=203,zd=204,Pd=205,WS=206,XS=207,qS=208,YS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,ey=0,ty=1,ny=2,Lc=3,iy=4,ay=5,ry=6,sy=7,Tv=0,oy=1,ly=2,er=0,cy=1,uy=2,fy=3,dy=4,hy=5,py=6,Av=300,Fs=301,Bs=302,Id=303,Fd=304,Fc=306,Bd=1e3,Ui=1001,Hd=1002,Fn=1003,tg=1004,nd=1005,Un=1006,my=1007,jo=1008,ga=1009,gy=1010,vy=1011,Qd=1012,Rv=1013,Qa=1014,Ja=1015,Wo=1016,Cv=1017,wv=1018,Lr=1020,_y=1021,Si=1023,xy=1024,Sy=1025,Ur=1026,Hs=1027,yy=1028,Dv=1029,My=1030,Lv=1031,Uv=1033,id=33776,ad=33777,rd=33778,sd=33779,ng=35840,ig=35841,ag=35842,rg=35843,Nv=36196,sg=37492,og=37496,lg=37808,cg=37809,ug=37810,fg=37811,dg=37812,hg=37813,pg=37814,mg=37815,gg=37816,vg=37817,_g=37818,xg=37819,Sg=37820,yg=37821,od=36492,Mg=36494,Eg=36495,Ey=36283,bg=36284,Tg=36285,Ag=36286,Ov=3e3,Nr=3001,by=3200,Ty=3201,Ay=0,Ry=1,yi="",Tn="srgb",_a="srgb-linear",Jd="display-p3",Bc="display-p3-linear",Uc="linear",Yt="srgb",Nc="rec709",Oc="p3",gs=7680,Rg=519,Cy=512,wy=513,Dy=514,zv=515,Ly=516,Uy=517,Ny=518,Oy=519,Cg=35044,wg="300 es",Gd=1035,pa=2e3,zc=2001;class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,Vd=180/Math.PI;function Xo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Zn(s,t,i){return Math.max(t,Math.min(i,s))}function zy(s,t){return(s%t+t)%t}function cd(s,t,i){return(1-i)*s+i*t}function Dg(s){return(s&s-1)===0&&s!==0}function kd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Zn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(t,i,r,l,c,h,f,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,f,m,p)}set(t,i,r,l,c,h,f,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=f,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],f=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],y=r[5],E=r[8],b=l[0],v=l[3],S=l[6],U=l[1],R=l[4],F=l[7],k=l[2],O=l[5],z=l[8];return c[0]=h*b+f*U+m*k,c[3]=h*v+f*R+m*O,c[6]=h*S+f*F+m*z,c[1]=p*b+_*U+g*k,c[4]=p*v+_*R+g*O,c[7]=p*S+_*F+g*z,c[2]=x*b+y*U+E*k,c[5]=x*v+y*R+E*O,c[8]=x*S+y*F+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*f*p-r*c*_+r*f*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8],g=_*h-f*p,x=f*m-_*c,y=p*c-h*m,E=i*g+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*p-_*r)*b,t[2]=(f*r-l*h)*b,t[3]=x*b,t[4]=(_*i-l*m)*b,t[5]=(l*c-f*i)*b,t[6]=y*b,t[7]=(r*m-p*i)*b,t[8]=(h*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,f){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*f)+h+t,-l*p,l*m,-l*(-p*h+m*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(ud.makeScale(t,i)),this}rotate(t){return this.premultiply(ud.makeRotation(-t)),this}translate(t,i){return this.premultiply(ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new gt;function Pv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Py(){const s=Pc("canvas");return s.style.display="block",s}const Lg={};function Vo(s){s in Lg||(Lg[s]=!0,console.warn(s))}const Ug=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ng=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rc={[_a]:{transfer:Uc,primaries:Nc,toReference:s=>s,fromReference:s=>s},[Tn]:{transfer:Yt,primaries:Nc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Bc]:{transfer:Uc,primaries:Oc,toReference:s=>s.applyMatrix3(Ng),fromReference:s=>s.applyMatrix3(Ug)},[Jd]:{transfer:Yt,primaries:Oc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ng),fromReference:s=>s.applyMatrix3(Ug).convertLinearToSRGB()}},Iy=new Set([_a,Bc]),Gt={enabled:!0,_workingColorSpace:_a,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Iy.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,i){if(this.enabled===!1||t===i||!t||!i)return s;const r=rc[t].toReference,l=rc[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return rc[s].primaries},getTransfer:function(s){return s===yi?Uc:rc[s].transfer}};function Is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fd(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class Iv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vs===void 0&&(vs=Pc("canvas")),vs.width=t.width,vs.height=t.height;const r=vs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=vs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Is(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Is(i[r]/255)*255):i[r]=Is(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fy=0;class Fv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Xo(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,f=l.length;h<f;h++)l[h].isDataTexture?c.push(dd(l[h].image)):c.push(dd(l[h]))}else c=dd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Iv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let By=0;class Qn extends Vs{constructor(t=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,r=Ui,l=Ui,c=Un,h=jo,f=Si,m=ga,p=Qn.DEFAULT_ANISOTROPY,_=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Xo(),this.name="",this.source=new Fv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===Nr?Tn:yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bd:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bd:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tn?Nr:Ov}set encoding(t){Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Nr?Tn:yi}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Av;Qn.DEFAULT_ANISOTROPY=1;class An{constructor(t=0,i=0,r=0,l=1){An.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],E=m[9],b=m[2],v=m[6],S=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+v)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(p+1)/2,F=(y+1)/2,k=(S+1)/2,O=(_+x)/4,z=(g+b)/4,ue=(E+v)/4;return R>F&&R>k?R<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(R),l=O/r,c=z/r):F>k?F<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),r=O/l,c=ue/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=z/c,l=ue/c),this.set(r,l,c,i),this}let U=Math.sqrt((v-E)*(v-E)+(g-b)*(g-b)+(x-_)*(x-_));return Math.abs(U)<.001&&(U=1),this.x=(v-E)/U,this.y=(g-b)/U,this.z=(x-_)/U,this.w=Math.acos((p+y+S-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends Vs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new An(0,0,t,i),this.scissorTest=!1,this.viewport=new An(0,0,t,i);const l={width:t,height:i,depth:1};r.encoding!==void 0&&(Vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Nr?Tn:yi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Qn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(t,i,r=1){(this.width!==t||this.height!==i||this.depth!==r)&&(this.width=t,this.height=i,this.depth=r,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Fv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xa extends Hy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Bv extends Qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gy extends Qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,f){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3];const x=c[h+0],y=c[h+1],E=c[h+2],b=c[h+3];if(f===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(f===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=b;return}if(g!==b||m!==x||p!==y||_!==E){let v=1-f;const S=m*x+p*y+_*E+g*b,U=S>=0?1:-1,R=1-S*S;if(R>Number.EPSILON){const k=Math.sqrt(R),O=Math.atan2(k,S*U);v=Math.sin(v*O)/k,f=Math.sin(f*O)/k}const F=f*U;if(m=m*v+x*F,p=p*v+y*F,_=_*v+E*F,g=g*v+b*F,v===1-f){const k=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=k,p*=k,_*=k,g*=k}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const f=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],x=c[h+1],y=c[h+2],E=c[h+3];return t[i]=f*E+_*g+m*y-p*x,t[i+1]=m*E+_*x+p*g-f*y,t[i+2]=p*E+_*y+f*x-m*g,t[i+3]=_*E-f*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(r/2),_=f(l/2),g=f(c/2),x=m(r/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*_*g+p*y*E,this._y=p*y*g-x*_*E,this._z=p*_*E+x*y*g,this._w=p*_*g-x*y*E;break;case"YXZ":this._x=x*_*g+p*y*E,this._y=p*y*g-x*_*E,this._z=p*_*E-x*y*g,this._w=p*_*g+x*y*E;break;case"ZXY":this._x=x*_*g-p*y*E,this._y=p*y*g+x*_*E,this._z=p*_*E+x*y*g,this._w=p*_*g-x*y*E;break;case"ZYX":this._x=x*_*g-p*y*E,this._y=p*y*g+x*_*E,this._z=p*_*E-x*y*g,this._w=p*_*g+x*y*E;break;case"YZX":this._x=x*_*g+p*y*E,this._y=p*y*g+x*_*E,this._z=p*_*E-x*y*g,this._w=p*_*g-x*y*E;break;case"XZY":this._x=x*_*g-p*y*E,this._y=p*y*g-x*_*E,this._z=p*_*E+x*y*g,this._w=p*_*g+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],f=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+f+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,f=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*f+l*p-c*m,this._y=l*_+h*m+c*f-r*p,this._z=c*_+h*p+r*m-l*f,this._w=h*_-r*f-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let f=h*t._w+r*t._x+l*t._y+c*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-f*f;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,f),g=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(c),r*Math.cos(c),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(t=0,i=0,r=0){he.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Og.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Og.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,f=t.z,m=t.w,p=2*(h*l-f*r),_=2*(f*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-f*_,this.y=r+m*_+f*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,f=i.y,m=i.z;return this.x=l*m-c*f,this.y=c*h-r*m,this.z=r*f-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hd.copy(this).projectOnVector(t),this.sub(hd)}reflect(t){return this.sub(hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Zn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new he,Og=new qo;class Yo{constructor(t=new he(1/0,1/0,1/0),i=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=c.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),oc.subVectors(this.max,Fo),_s.subVectors(t.a,Fo),xs.subVectors(t.b,Fo),Ss.subVectors(t.c,Fo),ja.subVectors(xs,_s),Wa.subVectors(Ss,xs),Er.subVectors(_s,Ss);let i=[0,-ja.z,ja.y,0,-Wa.z,Wa.y,0,-Er.z,Er.y,ja.z,0,-ja.x,Wa.z,0,-Wa.x,Er.z,0,-Er.x,-ja.y,ja.x,0,-Wa.y,Wa.x,0,-Er.y,Er.x,0];return!pd(i,_s,xs,Ss,oc)||(i=[1,0,0,0,1,0,0,0,1],!pd(i,_s,xs,Ss,oc))?!1:(lc.crossVectors(ja,Wa),i=[lc.x,lc.y,lc.z],pd(i,_s,xs,Ss,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oa=[new he,new he,new he,new he,new he,new he,new he,new he],Ai=new he,sc=new Yo,_s=new he,xs=new he,Ss=new he,ja=new he,Wa=new he,Er=new he,Fo=new he,oc=new he,lc=new he,br=new he;function pd(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){br.fromArray(s,c);const f=l.x*Math.abs(br.x)+l.y*Math.abs(br.y)+l.z*Math.abs(br.z),m=t.dot(br),p=i.dot(br),_=r.dot(br);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>f)return!1}return!0}const Vy=new Yo,Bo=new he,md=new he;class $d{constructor(t=new he,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Vy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(md)),this.expandByPoint(Bo.copy(t.center).sub(md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const la=new he,gd=new he,cc=new he,Xa=new he,vd=new he,uc=new he,_d=new he;class ky{constructor(t=new he,i=new he(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){gd.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(gd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(cc),f=Xa.dot(this.direction),m=-Xa.dot(cc),p=Xa.lengthSq(),_=Math.abs(1-h*h);let g,x,y,E;if(_>0)if(g=h*m-f,x=h*f-m,E=c*_,g>=0)if(x>=-E)if(x<=E){const b=1/_;g*=b,x*=b,y=g*(g+h*x+2*f)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+f)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+f)),y=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-h*c+f)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(h*c+f)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+f)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(gd).addScaledVector(cc,x),y}intersectSphere(t,i){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),l=la.dot(la)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),f=r-h,m=r+h;return m<0?null:f<0?this.at(m,i):this.at(f,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,f,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(f=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(f=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||f>l)||((f>r||r!==r)&&(r=f),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,r,l,c){vd.subVectors(i,t),uc.subVectors(r,t),_d.crossVectors(vd,uc);let h=this.direction.dot(_d),f;if(h>0){if(l)return null;f=1}else if(h<0)f=-1,h=-h;else return null;Xa.subVectors(this.origin,t);const m=f*this.direction.dot(uc.crossVectors(Xa,uc));if(m<0)return null;const p=f*this.direction.dot(vd.cross(Xa));if(p<0||m+p>h)return null;const _=-f*Xa.dot(_d);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn{constructor(t,i,r,l,c,h,f,m,p,_,g,x,y,E,b,v){Rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,f,m,p,_,g,x,y,E,b,v)}set(t,i,r,l,c,h,f,m,p,_,g,x,y,E,b,v){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=f,S[13]=m,S[2]=p,S[6]=_,S[10]=g,S[14]=x,S[3]=y,S[7]=E,S[11]=b,S[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ys.setFromMatrixColumn(t,0).length(),c=1/ys.setFromMatrixColumn(t,1).length(),h=1/ys.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),f=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*_,y=h*g,E=f*_,b=f*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+E*p,i[5]=x-b*p,i[9]=-f*m,i[2]=b-x*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,E=p*_,b=p*g;i[0]=x+b*f,i[4]=E*f-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-f,i[2]=y*f-E,i[6]=b+x*f,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,E=p*_,b=p*g;i[0]=x-b*f,i[4]=-h*g,i[8]=E+y*f,i[1]=y+E*f,i[5]=h*_,i[9]=b-x*f,i[2]=-h*p,i[6]=f,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,y=h*g,E=f*_,b=f*g;i[0]=m*_,i[4]=E*p-y,i[8]=x*p+b,i[1]=m*g,i[5]=b*p+x,i[9]=y*p-E,i[2]=-p,i[6]=f*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,E=f*m,b=f*p;i[0]=m*_,i[4]=b-x*g,i[8]=E*g+y,i[1]=g,i[5]=h*_,i[9]=-f*_,i[2]=-p*_,i[6]=y*g+E,i[10]=x-b*g}else if(t.order==="XZY"){const x=h*m,y=h*p,E=f*m,b=f*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+b,i[5]=h*_,i[9]=y*g-E,i[2]=E*g-y,i[6]=f*_,i[10]=b*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jy,t,Wy)}lookAt(t,i,r){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),qa.crossVectors(r,si),qa.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),qa.crossVectors(r,si)),qa.normalize(),fc.crossVectors(si,qa),l[0]=qa.x,l[4]=fc.x,l[8]=si.x,l[1]=qa.y,l[5]=fc.y,l[9]=si.y,l[2]=qa.z,l[6]=fc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],f=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],y=r[13],E=r[2],b=r[6],v=r[10],S=r[14],U=r[3],R=r[7],F=r[11],k=r[15],O=l[0],z=l[4],ue=l[8],w=l[12],P=l[1],ne=l[5],fe=l[9],be=l[13],j=l[2],ee=l[6],I=l[10],W=l[14],K=l[3],se=l[7],pe=l[11],L=l[15];return c[0]=h*O+f*P+m*j+p*K,c[4]=h*z+f*ne+m*ee+p*se,c[8]=h*ue+f*fe+m*I+p*pe,c[12]=h*w+f*be+m*W+p*L,c[1]=_*O+g*P+x*j+y*K,c[5]=_*z+g*ne+x*ee+y*se,c[9]=_*ue+g*fe+x*I+y*pe,c[13]=_*w+g*be+x*W+y*L,c[2]=E*O+b*P+v*j+S*K,c[6]=E*z+b*ne+v*ee+S*se,c[10]=E*ue+b*fe+v*I+S*pe,c[14]=E*w+b*be+v*W+S*L,c[3]=U*O+R*P+F*j+k*K,c[7]=U*z+R*ne+F*ee+k*se,c[11]=U*ue+R*fe+F*I+k*pe,c[15]=U*w+R*be+F*W+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],f=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],E=t[3],b=t[7],v=t[11],S=t[15];return E*(+c*m*g-l*p*g-c*f*x+r*p*x+l*f*y-r*m*y)+b*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*_-c*m*_)+v*(+i*p*g-i*f*y-c*h*g+r*h*y+c*f*_-r*p*_)+S*(-l*f*_-i*m*g+i*f*x+l*h*g-r*h*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],E=t[12],b=t[13],v=t[14],S=t[15],U=g*v*p-b*x*p+b*m*y-f*v*y-g*m*S+f*x*S,R=E*x*p-_*v*p-E*m*y+h*v*y+_*m*S-h*x*S,F=_*b*p-E*g*p+E*f*y-h*b*y-_*f*S+h*g*S,k=E*g*m-_*b*m-E*f*x+h*b*x+_*f*v-h*g*v,O=i*U+r*R+l*F+c*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return t[0]=U*z,t[1]=(b*x*c-g*v*c-b*l*y+r*v*y+g*l*S-r*x*S)*z,t[2]=(f*v*c-b*m*c+b*l*p-r*v*p-f*l*S+r*m*S)*z,t[3]=(g*m*c-f*x*c-g*l*p+r*x*p+f*l*y-r*m*y)*z,t[4]=R*z,t[5]=(_*v*c-E*x*c+E*l*y-i*v*y-_*l*S+i*x*S)*z,t[6]=(E*m*c-h*v*c-E*l*p+i*v*p+h*l*S-i*m*S)*z,t[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*y+i*m*y)*z,t[8]=F*z,t[9]=(E*g*c-_*b*c-E*r*y+i*b*y+_*r*S-i*g*S)*z,t[10]=(h*b*c-E*f*c+E*r*p-i*b*p-h*r*S+i*f*S)*z,t[11]=(_*f*c-h*g*c-_*r*p+i*g*p+h*r*y-i*f*y)*z,t[12]=k*z,t[13]=(_*b*l-E*g*l+E*r*x-i*b*x-_*r*v+i*g*v)*z,t[14]=(E*f*l-h*b*l-E*r*m+i*b*m+h*r*v-i*f*v)*z,t[15]=(h*g*l-_*f*l+_*r*m-i*g*m-h*r*x+i*f*x)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,f=t.y,m=t.z,p=c*h,_=c*f;return this.set(p*h+r,p*f-l*m,p*m+l*f,0,p*f+l*m,_*f+r,_*m-l*h,0,p*m-l*f,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,f=i._z,m=i._w,p=c+c,_=h+h,g=f+f,x=c*p,y=c*_,E=c*g,b=h*_,v=h*g,S=f*g,U=m*p,R=m*_,F=m*g,k=r.x,O=r.y,z=r.z;return l[0]=(1-(b+S))*k,l[1]=(y+F)*k,l[2]=(E-R)*k,l[3]=0,l[4]=(y-F)*O,l[5]=(1-(x+S))*O,l[6]=(v+U)*O,l[7]=0,l[8]=(E+R)*z,l[9]=(v-U)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ys.set(l[0],l[1],l[2]).length();const h=ys.set(l[4],l[5],l[6]).length(),f=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/c,_=1/h,g=1/f;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,i.setFromRotationMatrix(Ri),r.x=c,r.y=h,r.z=f,this}makePerspective(t,i,r,l,c,h,f=pa){const m=this.elements,p=2*c/(i-t),_=2*c/(r-l),g=(i+t)/(i-t),x=(r+l)/(r-l);let y,E;if(f===pa)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(f===zc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,f=pa){const m=this.elements,p=1/(i-t),_=1/(r-l),g=1/(h-c),x=(i+t)*p,y=(r+l)*_;let E,b;if(f===pa)E=(h+c)*g,b=-2*g;else if(f===zc)E=c*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ys=new he,Ri=new Rn,jy=new he(0,0,0),Wy=new he(1,1,1),qa=new he,fc=new he,si=new he,zg=new Rn,Pg=new qo;class Hc{constructor(t=0,i=0,r=0,l=Hc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],f=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Zn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Zn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Zn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return zg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hc.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xy=0;const Ig=new he,Ms=new qo,ca=new Rn,dc=new he,Ho=new he,qy=new he,Yy=new qo,Fg=new he(1,0,0),Bg=new he(0,1,0),Hg=new he(0,0,1),Zy={type:"added"},Ky={type:"removed"};class li extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const t=new he,i=new Hc,r=new qo,l=new he(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Rn},normalMatrix:{value:new gt}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Fg,t)}rotateY(t){return this.rotateOnAxis(Bg,t)}rotateZ(t){return this.rotateOnAxis(Hg,t)}translateOnAxis(t,i){return Ig.copy(t).applyQuaternion(this.quaternion),this.position.add(Ig.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Fg,t)}translateY(t){return this.translateOnAxis(Bg,t)}translateZ(t){return this.translateOnAxis(Hg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?dc.copy(t):dc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Ho,dc,this.up):ca.lookAt(dc,Ho,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(ca),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ky)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,qy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Yy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const c=i[r];(c.matrixWorldAutoUpdate===!0||t===!0)&&c.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++){const f=l[c];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(c(t.materials,this.material[m]));l.material=f}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];l.animations.push(c(t.animations,m))}}if(i){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),y=h(t.animations),E=h(t.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(f){const m=[];for(const p in f){const _=f[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}li.DEFAULT_UP=new he(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new he,ua=new he,xd=new he,fa=new he,Es=new he,bs=new he,Gg=new he,Sd=new he,yd=new he,Md=new he;let hc=!1;class Di{constructor(t=new he,i=new he,r=new he){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ci.subVectors(l,i),ua.subVectors(r,i),xd.subVectors(t,i);const h=Ci.dot(Ci),f=Ci.dot(ua),m=Ci.dot(xd),p=ua.dot(ua),_=ua.dot(xd),g=h*p-f*f;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-f*_)*x,E=(h*_-f*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getUV(t,i,r,l,c,h,f,m){return hc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hc=!0),this.getInterpolation(t,i,r,l,c,h,f,m)}static getInterpolation(t,i,r,l,c,h,f,m){return this.getBarycoord(t,i,r,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(h,fa.y),m.addScaledVector(f,fa.z),m)}static isFrontFacing(t,i,r,l){return Ci.subVectors(r,i),ua.subVectors(t,i),Ci.cross(ua).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ci.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,l,c){return hc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hc=!0),Di.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}getInterpolation(t,i,r,l,c){return Di.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,f;Es.subVectors(l,r),bs.subVectors(c,r),Sd.subVectors(t,r);const m=Es.dot(Sd),p=bs.dot(Sd);if(m<=0&&p<=0)return i.copy(r);yd.subVectors(t,l);const _=Es.dot(yd),g=bs.dot(yd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(Es,h);Md.subVectors(t,c);const y=Es.dot(Md),E=bs.dot(Md);if(E>=0&&y<=E)return i.copy(c);const b=y*p-m*E;if(b<=0&&p>=0&&E<=0)return f=p/(p-E),i.copy(r).addScaledVector(bs,f);const v=_*E-y*g;if(v<=0&&g-_>=0&&y-E>=0)return Gg.subVectors(c,l),f=(g-_)/(g-_+(y-E)),i.copy(l).addScaledVector(Gg,f);const S=1/(v+b+x);return h=b*S,f=x*S,i.copy(r).addScaledVector(Es,h).addScaledVector(bs,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Ed(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Vt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Gt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Gt.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Gt.workingColorSpace){if(t=zy(t,1),i=Zn(i,0,1),r=Zn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Ed(h,c,t+1/3),this.g=Ed(h,c,t),this.b=Ed(h,c,t-1/3)}return Gt.toWorkingColorSpace(this,l),this}setStyle(t,i=Tn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],f=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Tn){const r=Gv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=fd(t.r),this.g=fd(t.g),this.b=fd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return Gt.fromWorkingColorSpace(Ln.copy(this),t),Math.round(Zn(Ln.r*255,0,255))*65536+Math.round(Zn(Ln.g*255,0,255))*256+Math.round(Zn(Ln.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(r,l,c),f=Math.min(r,l,c);let m,p;const _=(f+h)/2;if(f===h)m=0,p=0;else{const g=h-f;switch(p=_<=.5?g/(h+f):g/(2-h-f),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Tn){Gt.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==Tn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+i,Ya.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ya),t.getHSL(pc);const r=cd(Ya.h,pc.h,i),l=cd(Ya.s,pc.s,i),c=cd(Ya.l,pc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Vt;Vt.NAMES=Gv;let Qy=0;class Gc extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ps,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vv extends Gc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new he,mc=new Nt;class Vi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Cg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ja,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cg&&(t.usage=this.usage),t}}class kv extends Vi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class jv extends Vi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Or extends Vi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Jy=0;const vi=new Rn,bd=new li,Ts=new he,oi=new Yo,Go=new Yo,Sn=new he;class zr extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pv(t)?jv:kv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,r){return vi.makeTranslation(t,i,r),this.applyMatrix4(vi),this}scale(t,i,r){return vi.makeScale(t,i,r),this.applyMatrix4(vi),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Or(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $d);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new he,1/0);return}if(t){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const f=i[c];Go.setFromBufferAttribute(f),this.morphTargetsRelative?(Sn.addVectors(oi.min,Go.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Go.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Go.min),oi.expandByPoint(Go.max))}oi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const f=i[c],m=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)Sn.fromBufferAttribute(f,p),m&&(Ts.fromBufferAttribute(t,p),Sn.add(Ts)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,l=i.position.array,c=i.normal.array,h=i.uv.array,f=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*f),4));const m=this.getAttribute("tangent").array,p=[],_=[];for(let P=0;P<f;P++)p[P]=new he,_[P]=new he;const g=new he,x=new he,y=new he,E=new Nt,b=new Nt,v=new Nt,S=new he,U=new he;function R(P,ne,fe){g.fromArray(l,P*3),x.fromArray(l,ne*3),y.fromArray(l,fe*3),E.fromArray(h,P*2),b.fromArray(h,ne*2),v.fromArray(h,fe*2),x.sub(g),y.sub(g),b.sub(E),v.sub(E);const be=1/(b.x*v.y-v.x*b.y);isFinite(be)&&(S.copy(x).multiplyScalar(v.y).addScaledVector(y,-b.y).multiplyScalar(be),U.copy(y).multiplyScalar(b.x).addScaledVector(x,-v.x).multiplyScalar(be),p[P].add(S),p[ne].add(S),p[fe].add(S),_[P].add(U),_[ne].add(U),_[fe].add(U))}let F=this.groups;F.length===0&&(F=[{start:0,count:r.length}]);for(let P=0,ne=F.length;P<ne;++P){const fe=F[P],be=fe.start,j=fe.count;for(let ee=be,I=be+j;ee<I;ee+=3)R(r[ee+0],r[ee+1],r[ee+2])}const k=new he,O=new he,z=new he,ue=new he;function w(P){z.fromArray(c,P*3),ue.copy(z);const ne=p[P];k.copy(ne),k.sub(z.multiplyScalar(z.dot(ne))).normalize(),O.crossVectors(ue,ne);const be=O.dot(_[P])<0?-1:1;m[P*4]=k.x,m[P*4+1]=k.y,m[P*4+2]=k.z,m[P*4+3]=be}for(let P=0,ne=F.length;P<ne;++P){const fe=F[P],be=fe.start,j=fe.count;for(let ee=be,I=be+j;ee<I;ee+=3)w(r[ee+0]),w(r[ee+1]),w(r[ee+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new he,c=new he,h=new he,f=new he,m=new he,p=new he,_=new he,g=new he;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),b=t.getX(x+1),v=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,v),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,v),f.add(_),m.add(_),p.add(_),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(f,m){const p=f.array,_=f.itemSize,g=f.normalized,x=new p.constructor(m.length*_);let y=0,E=0;for(let b=0,v=m.length;b<v;b++){f.isInterleavedBufferAttribute?y=m[b]*f.data.stride+f.offset:y=m[b]*_;for(let S=0;S<_;S++)x[E++]=p[y++]}return new Vi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zr,r=this.index.array,l=this.attributes;for(const f in l){const m=l[f],p=t(m,r);i.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const m=[],p=c[f];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,r);m.push(y)}i.morphAttributes[f]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vg=new Rn,Tr=new ky,gc=new $d,kg=new he,As=new he,Rs=new he,Cs=new he,Td=new he,vc=new he,_c=new Nt,xc=new Nt,Sc=new Nt,jg=new he,Wg=new he,Xg=new he,yc=new he,Mc=new he;class ma extends li{constructor(t=new zr,i=new Vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const f=this.morphTargetInfluences;if(c&&f){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=f[m],g=c[m];_!==0&&(Td.fromBufferAttribute(g,t),h?vc.addScaledVector(Td,_):vc.addScaledVector(Td.sub(i),_))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(c),Tr.copy(t.ray).recast(t.near),!(gc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(gc,kg)===null||Tr.origin.distanceToSquared(kg)>(t.far-t.near)**2))&&(Vg.copy(c).invert(),Tr.copy(t.ray).applyMatrix4(Vg),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Tr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,f=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const v=x[E],S=h[v.materialIndex],U=Math.max(v.start,y.start),R=Math.min(f.count,Math.min(v.start+v.count,y.start+y.count));for(let F=U,k=R;F<k;F+=3){const O=f.getX(F),z=f.getX(F+1),ue=f.getX(F+2);l=Ec(this,S,t,r,p,_,g,O,z,ue),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let v=E,S=b;v<S;v+=3){const U=f.getX(v),R=f.getX(v+1),F=f.getX(v+2);l=Ec(this,h,t,r,p,_,g,U,R,F),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const v=x[E],S=h[v.materialIndex],U=Math.max(v.start,y.start),R=Math.min(m.count,Math.min(v.start+v.count,y.start+y.count));for(let F=U,k=R;F<k;F+=3){const O=F,z=F+1,ue=F+2;l=Ec(this,S,t,r,p,_,g,O,z,ue),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let v=E,S=b;v<S;v+=3){const U=v,R=v+1,F=v+2;l=Ec(this,h,t,r,p,_,g,U,R,F),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function $y(s,t,i,r,l,c,h,f){let m;if(t.side===Kn?m=r.intersectTriangle(h,c,l,!0,f):m=r.intersectTriangle(l,c,h,t.side===tr,f),m===null)return null;Mc.copy(f),Mc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:s}}function Ec(s,t,i,r,l,c,h,f,m,p){s.getVertexPosition(f,As),s.getVertexPosition(m,Rs),s.getVertexPosition(p,Cs);const _=$y(s,t,i,r,As,Rs,Cs,yc);if(_){l&&(_c.fromBufferAttribute(l,f),xc.fromBufferAttribute(l,m),Sc.fromBufferAttribute(l,p),_.uv=Di.getInterpolation(yc,As,Rs,Cs,_c,xc,Sc,new Nt)),c&&(_c.fromBufferAttribute(c,f),xc.fromBufferAttribute(c,m),Sc.fromBufferAttribute(c,p),_.uv1=Di.getInterpolation(yc,As,Rs,Cs,_c,xc,Sc,new Nt),_.uv2=_.uv1),h&&(jg.fromBufferAttribute(h,f),Wg.fromBufferAttribute(h,m),Xg.fromBufferAttribute(h,p),_.normal=Di.getInterpolation(yc,As,Rs,Cs,jg,Wg,Xg,new he),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:m,c:p,normal:new he,materialIndex:0};Di.getNormal(As,Rs,Cs,g.normal),_.face=g}return _}class Zo extends zr{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const f=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Or(p,3)),this.setAttribute("normal",new Or(_,3)),this.setAttribute("uv",new Or(g,2));function E(b,v,S,U,R,F,k,O,z,ue,w){const P=F/z,ne=k/ue,fe=F/2,be=k/2,j=O/2,ee=z+1,I=ue+1;let W=0,K=0;const se=new he;for(let pe=0;pe<I;pe++){const L=pe*ne-be;for(let X=0;X<ee;X++){const H=X*P-fe;se[b]=H*U,se[v]=L*R,se[S]=j,p.push(se.x,se.y,se.z),se[b]=0,se[v]=0,se[S]=O>0?1:-1,_.push(se.x,se.y,se.z),g.push(X/z),g.push(1-pe/ue),W+=1}}for(let pe=0;pe<ue;pe++)for(let L=0;L<z;L++){const X=x+L+ee*pe,H=x+L+ee*(pe+1),Q=x+(L+1)+ee*(pe+1),Z=x+(L+1)+ee*pe;m.push(X,H,Z),m.push(H,Q,Z),K+=6}f.addGroup(y,K,w),y+=K,x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function eM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Wv(s){return s.getRenderTarget()===null?s.outputColorSpace:Gt.workingColorSpace}const tM={clone:Gs,merge:In};var nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Gc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=eM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Xv extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=pa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Li extends Xv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Vd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ld*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Ds=1;class aM extends li{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Li(ws,Ds,t,i);l.layers=this.layers,this.add(l);const c=new Li(ws,Ds,t,i);c.layers=this.layers,this.add(c);const h=new Li(ws,Ds,t,i);h.layers=this.layers,this.add(h);const f=new Li(ws,Ds,t,i);f.layers=this.layers,this.add(f);const m=new Li(ws,Ds,t,i);m.layers=this.layers,this.add(m);const p=new Li(ws,Ds,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,f,m]=i;for(const p of i)this.remove(p);if(t===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,f,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,f),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class qv extends Qn{constructor(t,i,r,l,c,h,f,m,p,_){t=t!==void 0?t:[],i=i!==void 0?i:Fs,super(t,i,r,l,c,h,f,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rM extends xa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?Tn:yi),this.texture=new qv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Un}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Zo(5,5,5),c=new nr({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:$a});c.uniforms.tEquirect.value=i;const h=new ma(l,c),f=i.minFilter;return i.minFilter===jo&&(i.minFilter=Un),new aM(1,10,this).update(t,h),i.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}const Ad=new he,sM=new he,oM=new gt;class Rr{constructor(t=new he(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ad.subVectors(r,i).cross(sM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ad),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||oM.getNormalMatrix(t),l=this.coplanarPoint(Ad).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new $d,bc=new he;class Yv{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,h=new Rr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(r),f[3].copy(l),f[4].copy(c),f[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=pa){const r=this.planes,l=t.elements,c=l[0],h=l[1],f=l[2],m=l[3],p=l[4],_=l[5],g=l[6],x=l[7],y=l[8],E=l[9],b=l[10],v=l[11],S=l[12],U=l[13],R=l[14],F=l[15];if(r[0].setComponents(m-c,x-p,v-y,F-S).normalize(),r[1].setComponents(m+c,x+p,v+y,F+S).normalize(),r[2].setComponents(m+h,x+_,v+E,F+U).normalize(),r[3].setComponents(m-h,x-_,v-E,F-U).normalize(),r[4].setComponents(m-f,x-g,v-b,F-R).normalize(),i===pa)r[5].setComponents(m+f,x+g,v+b,F+R).normalize();else if(i===zc)r[5].setComponents(f,g,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function lM(s,t){const i=t.isWebGL2,r=new WeakMap;function l(p,_){const g=p.array,x=p.usage,y=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,x),p.onUploadCallback();let b;if(g instanceof Float32Array)b=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=s.SHORT;else if(g instanceof Uint32Array)b=s.UNSIGNED_INT;else if(g instanceof Int32Array)b=s.INT;else if(g instanceof Int8Array)b=s.BYTE;else if(g instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:y}}function c(p,_,g){const x=_.array,y=_._updateRange,E=_.updateRanges;if(s.bindBuffer(g,p),y.count===-1&&E.length===0&&s.bufferSubData(g,0,x),E.length!==0){for(let b=0,v=E.length;b<v;b++){const S=E[b];i?s.bufferSubData(g,S.start*x.BYTES_PER_ELEMENT,x,S.start,S.count):s.bufferSubData(g,S.start*x.BYTES_PER_ELEMENT,x.subarray(S.start,S.start+S.count))}_.clearUpdateRanges()}y.count!==-1&&(i?s.bufferSubData(g,y.offset*x.BYTES_PER_ELEMENT,x,y.offset,y.count):s.bufferSubData(g,y.offset*x.BYTES_PER_ELEMENT,x.subarray(y.offset,y.offset+y.count)),y.count=-1),_.onUploadCallback()}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function m(p,_){if(p.isGLBufferAttribute){const x=r.get(p);(!x||x.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,l(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(g.buffer,p,_),g.version=p.version}}return{get:h,remove:f,update:m}}class Vc extends zr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,f=Math.floor(r),m=Math.floor(l),p=f+1,_=m+1,g=t/f,x=i/m,y=[],E=[],b=[],v=[];for(let S=0;S<_;S++){const U=S*x-h;for(let R=0;R<p;R++){const F=R*g-c;E.push(F,-U,0),b.push(0,0,1),v.push(R/f),v.push(1-S/m)}}for(let S=0;S<m;S++)for(let U=0;U<f;U++){const R=U+p*S,F=U+p*(S+1),k=U+1+p*(S+1),O=U+1+p*S;y.push(R,F,O),y.push(F,k,O)}this.setIndex(y),this.setAttribute("position",new Or(E,3)),this.setAttribute("normal",new Or(b,3)),this.setAttribute("uv",new Or(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
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
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
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
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,UM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,GM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gb=`#define DISTANCE
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
}`,vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bb=`#define LAMBERT
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
}`,Tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ab=`#define MATCAP
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
}`,Rb=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cb=`#define NORMAL
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
}`,wb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Db=`#define PHONG
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
}`,Lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ub=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ob=`#define TOON
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
}`,zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pb=`uniform float size;
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
}`,Ib=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Gb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mt={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:hM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:vM,batching_vertex:_M,begin_vertex:xM,beginnormal_vertex:SM,bsdfs:yM,iridescence_fragment:MM,bumpmap_pars_fragment:EM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:wM,color_pars_vertex:DM,color_vertex:LM,common:UM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:OM,displacementmap_pars_vertex:zM,displacementmap_vertex:PM,emissivemap_fragment:IM,emissivemap_pars_fragment:FM,colorspace_fragment:BM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:kM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:nE,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:ZM,gradientmap_pars_fragment:KM,lightmap_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:eE,lights_pars_begin:tE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:_E,map_particle_pars_fragment:xE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:yE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:bE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:RE,normal_pars_fragment:CE,normal_pars_vertex:wE,normal_vertex:DE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:OE,iridescence_pars_fragment:zE,opaque_fragment:PE,packing:IE,premultiplied_alpha_fragment:FE,project_vertex:BE,dithering_fragment:HE,dithering_pars_fragment:GE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:WE,shadowmap_vertex:XE,shadowmask_pars_fragment:qE,skinbase_vertex:YE,skinning_pars_vertex:ZE,skinning_vertex:KE,skinnormal_vertex:QE,specularmap_fragment:JE,specularmap_pars_fragment:$E,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:ab,uv_pars_vertex:rb,uv_vertex:sb,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:fb,cube_vert:db,cube_frag:hb,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:vb,equirect_vert:_b,equirect_frag:xb,linedashed_vert:Sb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:bb,meshlambert_frag:Tb,meshmatcap_vert:Ab,meshmatcap_frag:Rb,meshnormal_vert:Cb,meshnormal_frag:wb,meshphong_vert:Db,meshphong_frag:Lb,meshphysical_vert:Ub,meshphysical_frag:Nb,meshtoon_vert:Ob,meshtoon_frag:zb,points_vert:Pb,points_frag:Ib,shadow_vert:Fb,shadow_frag:Bb,sprite_vert:Hb,sprite_frag:Gb},De={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Gi={basic:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Vt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:In([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:In([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Vt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:In([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:In([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:In([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:In([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:In([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:In([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:In([De.common,De.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:In([De.lights,De.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Gi.physical={uniforms:In([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Tc={r:0,b:0,g:0};function Vb(s,t,i,r,l,c,h){const f=new Vt(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function E(v,S){let U=!1,R=S.isScene===!0?S.background:null;R&&R.isTexture&&(R=(S.backgroundBlurriness>0?i:t).get(R)),R===null?b(f,m):R&&R.isColor&&(b(R,1),U=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Fc)?(_===void 0&&(_=new ma(new Zo(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Gs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,_.material.toneMapped=Gt.getTransfer(R.colorSpace)!==Yt,(g!==R||x!==R.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,x=R.version,y=s.toneMapping),_.layers.enableAll(),v.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ma(new Vc(2,2),new nr({name:"BackgroundMaterial",uniforms:Gs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(R.colorSpace)!==Yt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,x=R.version,y=s.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function b(v,S){v.getRGB(Tc,Wv(s)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,S,h)}return{getClearColor:function(){return f},setClearColor:function(v,S=1){f.set(v),m=S,b(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v,b(f,m)},render:E}}function kb(s,t,i,r){const l=s.getParameter(s.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:t.get("OES_vertex_array_object"),h=r.isWebGL2||c!==null,f={},m=v(null);let p=m,_=!1;function g(j,ee,I,W,K){let se=!1;if(h){const pe=b(W,I,ee);p!==pe&&(p=pe,y(p.object)),se=S(j,W,I,K),se&&U(j,W,I,K)}else{const pe=ee.wireframe===!0;(p.geometry!==W.id||p.program!==I.id||p.wireframe!==pe)&&(p.geometry=W.id,p.program=I.id,p.wireframe=pe,se=!0)}K!==null&&i.update(K,s.ELEMENT_ARRAY_BUFFER),(se||_)&&(_=!1,ue(j,ee,I,W),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.get(K).buffer))}function x(){return r.isWebGL2?s.createVertexArray():c.createVertexArrayOES()}function y(j){return r.isWebGL2?s.bindVertexArray(j):c.bindVertexArrayOES(j)}function E(j){return r.isWebGL2?s.deleteVertexArray(j):c.deleteVertexArrayOES(j)}function b(j,ee,I){const W=I.wireframe===!0;let K=f[j.id];K===void 0&&(K={},f[j.id]=K);let se=K[ee.id];se===void 0&&(se={},K[ee.id]=se);let pe=se[W];return pe===void 0&&(pe=v(x()),se[W]=pe),pe}function v(j){const ee=[],I=[],W=[];for(let K=0;K<l;K++)ee[K]=0,I[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:I,attributeDivisors:W,object:j,attributes:{},index:null}}function S(j,ee,I,W){const K=p.attributes,se=ee.attributes;let pe=0;const L=I.getAttributes();for(const X in L)if(L[X].location>=0){const Q=K[X];let Z=se[X];if(Z===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(Z=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(Z=j.instanceColor)),Q===void 0||Q.attribute!==Z||Z&&Q.data!==Z.data)return!0;pe++}return p.attributesNum!==pe||p.index!==W}function U(j,ee,I,W){const K={},se=ee.attributes;let pe=0;const L=I.getAttributes();for(const X in L)if(L[X].location>=0){let Q=se[X];Q===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(Q=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(Q=j.instanceColor));const Z={};Z.attribute=Q,Q&&Q.data&&(Z.data=Q.data),K[X]=Z,pe++}p.attributes=K,p.attributesNum=pe,p.index=W}function R(){const j=p.newAttributes;for(let ee=0,I=j.length;ee<I;ee++)j[ee]=0}function F(j){k(j,0)}function k(j,ee){const I=p.newAttributes,W=p.enabledAttributes,K=p.attributeDivisors;I[j]=1,W[j]===0&&(s.enableVertexAttribArray(j),W[j]=1),K[j]!==ee&&((r.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ee),K[j]=ee)}function O(){const j=p.newAttributes,ee=p.enabledAttributes;for(let I=0,W=ee.length;I<W;I++)ee[I]!==j[I]&&(s.disableVertexAttribArray(I),ee[I]=0)}function z(j,ee,I,W,K,se,pe){pe===!0?s.vertexAttribIPointer(j,ee,I,K,se):s.vertexAttribPointer(j,ee,I,W,K,se)}function ue(j,ee,I,W){if(r.isWebGL2===!1&&(j.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;R();const K=W.attributes,se=I.getAttributes(),pe=ee.defaultAttributeValues;for(const L in se){const X=se[L];if(X.location>=0){let H=K[L];if(H===void 0&&(L==="instanceMatrix"&&j.instanceMatrix&&(H=j.instanceMatrix),L==="instanceColor"&&j.instanceColor&&(H=j.instanceColor)),H!==void 0){const Q=H.normalized,Z=H.itemSize,_e=i.get(H);if(_e===void 0)continue;const Te=_e.buffer,Ge=_e.type,Pe=_e.bytesPerElement,ke=r.isWebGL2===!0&&(Ge===s.INT||Ge===s.UNSIGNED_INT||H.gpuType===Rv);if(H.isInterleavedBufferAttribute){const ct=H.data,te=ct.stride,jt=H.offset;if(ct.isInstancedInterleavedBuffer){for(let je=0;je<X.locationSize;je++)k(X.location+je,ct.meshPerAttribute);j.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let je=0;je<X.locationSize;je++)F(X.location+je);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let je=0;je<X.locationSize;je++)z(X.location+je,Z/X.locationSize,Ge,Q,te*Pe,(jt+Z/X.locationSize*je)*Pe,ke)}else{if(H.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)k(X.location+ct,H.meshPerAttribute);j.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ct=0;ct<X.locationSize;ct++)F(X.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ct=0;ct<X.locationSize;ct++)z(X.location+ct,Z/X.locationSize,Ge,Q,Z*Pe,Z/X.locationSize*ct*Pe,ke)}}else if(pe!==void 0){const Q=pe[L];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(X.location,Q);break;case 3:s.vertexAttrib3fv(X.location,Q);break;case 4:s.vertexAttrib4fv(X.location,Q);break;default:s.vertexAttrib1fv(X.location,Q)}}}}O()}function w(){fe();for(const j in f){const ee=f[j];for(const I in ee){const W=ee[I];for(const K in W)E(W[K].object),delete W[K];delete ee[I]}delete f[j]}}function P(j){if(f[j.id]===void 0)return;const ee=f[j.id];for(const I in ee){const W=ee[I];for(const K in W)E(W[K].object),delete W[K];delete ee[I]}delete f[j.id]}function ne(j){for(const ee in f){const I=f[ee];if(I[j.id]===void 0)continue;const W=I[j.id];for(const K in W)E(W[K].object),delete W[K];delete I[j.id]}}function fe(){be(),_=!0,p!==m&&(p=m,y(p.object))}function be(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:g,reset:fe,resetDefaultState:be,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:ne,initAttributes:R,enableAttribute:F,disableUnusedAttributes:O}}function jb(s,t,i,r){const l=r.isWebGL2;let c;function h(_){c=_}function f(_,g){s.drawArrays(c,_,g),i.update(g,c,1)}function m(_,g,x){if(x===0)return;let y,E;if(l)y=s,E="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[E](c,_,g,x),i.update(g,c,x)}function p(_,g,x){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<x;E++)this.render(_[E],g[E]);else{y.multiDrawArraysWEBGL(c,_,0,g,0,x);let E=0;for(let b=0;b<x;b++)E+=g[b];i.update(E,c,1)}}this.setMode=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=p}function Wb(s,t,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let f=i.precision!==void 0?i.precision:"highp";const m=c(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const p=h||t.has("WEBGL_draw_buffers"),_=i.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,F=h||t.has("OES_texture_float"),k=R&&F,O=h?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:c,precision:f,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:U,vertexTextures:R,floatFragmentTextures:F,floatVertexTextures:k,maxSamples:O}}function Xb(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Rr,f=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||l;return l=x,r=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const E=g.clippingPlanes,b=g.clipIntersection,v=g.clipShadows,S=s.get(g);if(!l||E===null||E.length===0||c&&!v)c?_(null):p();else{const U=c?0:r,R=U*4;let F=S.clippingState||null;m.value=F,F=_(E,x,R,y);for(let k=0;k!==R;++k)F[k]=i[k];S.clippingState=F,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,y,E){const b=g!==null?g.length:0;let v=null;if(b!==0){if(v=m.value,E!==!0||v===null){const S=y+b*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(v===null||v.length<S)&&(v=new Float32Array(S));for(let R=0,F=y;R!==b;++R,F+=4)h.copy(g[R]).applyMatrix4(U,f),h.normal.toArray(v,F),v[F+3]=h.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function qb(s){let t=new WeakMap;function i(h,f){return f===Id?h.mapping=Fs:f===Fd&&(h.mapping=Bs),h}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Id||f===Fd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new rM(m.height/2);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const f=h.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class Kv extends Xv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,f=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,f-=_*this.view.offsetY,m=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Os=4,qg=[.125,.215,.35,.446,.526,.582],Dr=20,Rd=new Kv,Yg=new Vt;let Cd=null,wd=0,Dd=0;const Cr=(1+Math.sqrt(5))/2,Ls=1/Cr,Zg=[new he(1,1,1),new he(-1,1,1),new he(1,1,-1),new he(-1,1,-1),new he(0,Cr,Ls),new he(0,Cr,-Ls),new he(Ls,0,Cr),new he(-Ls,0,Cr),new he(Cr,Ls,0),new he(-Cr,Ls,0)];class Kg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cd,wd,Dd),t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Wo,format:Si,colorSpace:_a,depthBuffer:!1},l=Qg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(c)),this._blurMaterial=Zb(c,t,i)}return l}_compileMaterial(t){const i=new ma(this._lodPlanes[0],t);this._renderer.compile(i,Rd)}_sceneToCubeUV(t,i,r,l){const f=new Li(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Yg),_.toneMapping=er,_.autoClear=!1;const y=new Vv({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),E=new ma(new Zo,y);let b=!1;const v=t.background;v?v.isColor&&(y.color.copy(v),t.background=null,b=!0):(y.color.copy(Yg),b=!0);for(let S=0;S<6;S++){const U=S%3;U===0?(f.up.set(0,m[S],0),f.lookAt(p[S],0,0)):U===1?(f.up.set(0,0,m[S]),f.lookAt(0,p[S],0)):(f.up.set(0,m[S],0),f.lookAt(0,0,p[S]));const R=this._cubeSize;Ac(l,U*R,S>2?R:0,R,R),_.setRenderTarget(l),b&&_.render(E,f),_.render(t,f)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=g,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Fs||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ma(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Rd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=Zg[(l-1)%Zg.length];this._blur(t,l-1,l,c,h)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,f){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ma(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Dr-1),b=c/E,v=isFinite(c)?1+Math.floor(_*b):Dr;v>Dr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Dr}`);const S=[];let U=0;for(let z=0;z<Dr;++z){const ue=z/b,w=Math.exp(-ue*ue/2);S.push(w),z===0?U+=w:z<v&&(U+=2*w)}for(let z=0;z<S.length;z++)S[z]=S[z]/U;x.envMap.value=t.texture,x.samples.value=v,x.weights.value=S,x.latitudinal.value=h==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=E,x.mipInt.value=R-r;const F=this._sizeLods[l],k=3*F*(l>R-Os?l-R+Os:0),O=4*(this._cubeSize-F);Ac(i,k,O,3*F,2*F),m.setRenderTarget(i),m.render(g,Rd)}}function Yb(s){const t=[],i=[],r=[];let l=s;const c=s-Os+1+qg.length;for(let h=0;h<c;h++){const f=Math.pow(2,l);i.push(f);let m=1/f;h>s-Os?m=qg[h-s+Os-1]:h===0&&(m=0),r.push(m);const p=1/(f-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,b=3,v=2,S=1,U=new Float32Array(b*E*y),R=new Float32Array(v*E*y),F=new Float32Array(S*E*y);for(let O=0;O<y;O++){const z=O%3*2/3-1,ue=O>2?0:-1,w=[z,ue,0,z+2/3,ue,0,z+2/3,ue+1,0,z,ue,0,z+2/3,ue+1,0,z,ue+1,0];U.set(w,b*E*O),R.set(x,v*E*O);const P=[O,O,O,O,O,O];F.set(P,S*E*O)}const k=new zr;k.setAttribute("position",new Vi(U,b)),k.setAttribute("uv",new Vi(R,v)),k.setAttribute("faceIndex",new Vi(F,S)),t.push(k),l>Os&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Qg(s,t,i){const r=new xa(s,t,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ac(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Zb(s,t,i){const r=new Float32Array(Dr),l=new he(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eh(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Jg(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function $g(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function Kb(s){let t=new WeakMap,i=null;function r(f){if(f&&f.isTexture){const m=f.mapping,p=m===Id||m===Fd,_=m===Fs||m===Bs;if(p||_)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let g=t.get(f);return i===null&&(i=new Kg(s)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),t.set(f,g),g.texture}else{if(t.has(f))return t.get(f).texture;{const g=f.image;if(p&&g&&g.height>0||_&&g&&l(g)){i===null&&(i=new Kg(s));const x=p?i.fromEquirectangular(f):i.fromCubemap(f);return t.set(f,x),f.addEventListener("dispose",c),x.texture}else return null}}}return f}function l(f){let m=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&m++;return m===p}function c(f){const m=f.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Qb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Jb(s,t,i,r){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);for(const E in x.morphAttributes){const b=x.morphAttributes[E];for(let v=0,S=b.length;v<S;v++)t.remove(b[v])}x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function f(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const E in x)t.update(x[E],s.ARRAY_BUFFER);const y=g.morphAttributes;for(const E in y){const b=y[E];for(let v=0,S=b.length;v<S;v++)t.update(b[v],s.ARRAY_BUFFER)}}function p(g){const x=[],y=g.index,E=g.attributes.position;let b=0;if(y!==null){const U=y.array;b=y.version;for(let R=0,F=U.length;R<F;R+=3){const k=U[R+0],O=U[R+1],z=U[R+2];x.push(k,O,O,z,z,k)}}else if(E!==void 0){const U=E.array;b=E.version;for(let R=0,F=U.length/3-1;R<F;R+=3){const k=R+0,O=R+1,z=R+2;x.push(k,O,O,z,z,k)}}else return;const v=new(Pv(x)?jv:kv)(x,1);v.version=b;const S=c.get(g);S&&t.remove(S),c.set(g,v)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:f,update:m,getWireframeAttribute:_}}function $b(s,t,i,r){const l=r.isWebGL2;let c;function h(y){c=y}let f,m;function p(y){f=y.type,m=y.bytesPerElement}function _(y,E){s.drawElements(c,E,f,y*m),i.update(E,c,1)}function g(y,E,b){if(b===0)return;let v,S;if(l)v=s,S="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](c,E,f,y*m,b),i.update(E,c,b)}function x(y,E,b){if(b===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<b;S++)this.render(y[S]/m,E[S]);else{v.multiDrawElementsWEBGL(c,E,0,f,y,0,b);let S=0;for(let U=0;U<b;U++)S+=E[U];i.update(S,c,1)}}this.setMode=h,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=x}function eT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,f){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=f*(c/3);break;case s.LINES:i.lines+=f*(c/2);break;case s.LINE_STRIP:i.lines+=f*(c-1);break;case s.LINE_LOOP:i.lines+=f*c;break;case s.POINTS:i.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function tT(s,t){return s[0]-t[0]}function nT(s,t){return Math.abs(t[1])-Math.abs(s[1])}function iT(s,t,i){const r={},l=new Float32Array(8),c=new WeakMap,h=new An,f=[];for(let p=0;p<8;p++)f[p]=[p,0];function m(p,_,g){const x=p.morphTargetInfluences;if(t.isWebGL2===!0){const y=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,E=y!==void 0?y.length:0;let b=c.get(_);if(b===void 0||b.count!==E){let j=function(){fe.dispose(),c.delete(_),_.removeEventListener("dispose",j)};b!==void 0&&b.texture.dispose();const U=_.morphAttributes.position!==void 0,R=_.morphAttributes.normal!==void 0,F=_.morphAttributes.color!==void 0,k=_.morphAttributes.position||[],O=_.morphAttributes.normal||[],z=_.morphAttributes.color||[];let ue=0;U===!0&&(ue=1),R===!0&&(ue=2),F===!0&&(ue=3);let w=_.attributes.position.count*ue,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const ne=new Float32Array(w*P*4*E),fe=new Bv(ne,w,P,E);fe.type=Ja,fe.needsUpdate=!0;const be=ue*4;for(let ee=0;ee<E;ee++){const I=k[ee],W=O[ee],K=z[ee],se=w*P*4*ee;for(let pe=0;pe<I.count;pe++){const L=pe*be;U===!0&&(h.fromBufferAttribute(I,pe),ne[se+L+0]=h.x,ne[se+L+1]=h.y,ne[se+L+2]=h.z,ne[se+L+3]=0),R===!0&&(h.fromBufferAttribute(W,pe),ne[se+L+4]=h.x,ne[se+L+5]=h.y,ne[se+L+6]=h.z,ne[se+L+7]=0),F===!0&&(h.fromBufferAttribute(K,pe),ne[se+L+8]=h.x,ne[se+L+9]=h.y,ne[se+L+10]=h.z,ne[se+L+11]=K.itemSize===4?h.w:1)}}b={count:E,texture:fe,size:new Nt(w,P)},c.set(_,b),_.addEventListener("dispose",j)}let v=0;for(let U=0;U<x.length;U++)v+=x[U];const S=_.morphTargetsRelative?1:1-v;g.getUniforms().setValue(s,"morphTargetBaseInfluence",S),g.getUniforms().setValue(s,"morphTargetInfluences",x),g.getUniforms().setValue(s,"morphTargetsTexture",b.texture,i),g.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{const y=x===void 0?0:x.length;let E=r[_.id];if(E===void 0||E.length!==y){E=[];for(let R=0;R<y;R++)E[R]=[R,0];r[_.id]=E}for(let R=0;R<y;R++){const F=E[R];F[0]=R,F[1]=x[R]}E.sort(nT);for(let R=0;R<8;R++)R<y&&E[R][1]?(f[R][0]=E[R][0],f[R][1]=E[R][1]):(f[R][0]=Number.MAX_SAFE_INTEGER,f[R][1]=0);f.sort(tT);const b=_.morphAttributes.position,v=_.morphAttributes.normal;let S=0;for(let R=0;R<8;R++){const F=f[R],k=F[0],O=F[1];k!==Number.MAX_SAFE_INTEGER&&O?(b&&_.getAttribute("morphTarget"+R)!==b[k]&&_.setAttribute("morphTarget"+R,b[k]),v&&_.getAttribute("morphNormal"+R)!==v[k]&&_.setAttribute("morphNormal"+R,v[k]),l[R]=O,S+=O):(b&&_.hasAttribute("morphTarget"+R)===!0&&_.deleteAttribute("morphTarget"+R),v&&_.hasAttribute("morphNormal"+R)===!0&&_.deleteAttribute("morphNormal"+R),l[R]=0)}const U=_.morphTargetsRelative?1:1-S;g.getUniforms().setValue(s,"morphTargetBaseInfluence",U),g.getUniforms().setValue(s,"morphTargetInfluences",l)}}return{update:m}}function aT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}class Qv extends Qn{constructor(t,i,r,l,c,h,f,m,p,_){if(_=_!==void 0?_:Ur,_!==Ur&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ur&&(r=Qa),r===void 0&&_===Hs&&(r=Lr),super(null,l,c,h,f,m,_,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=f!==void 0?f:Fn,this.minFilter=m!==void 0?m:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Jv=new Qn,$v=new Qv(1,1);$v.compareFunction=zv;const e_=new Bv,t_=new Gy,n_=new qv,ev=[],tv=[],nv=new Float32Array(16),iv=new Float32Array(9),av=new Float32Array(4);function ks(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),t!==0){r.toArray(c,0);for(let h=1,f=0;h!==t;++h)f+=i,s[h].toArray(c,f)}return c}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function kc(s,t){let i=tv[t];i===void 0&&(i=new Int32Array(t),tv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function rT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function sT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function oT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function lT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function cT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;av.set(r),s.uniformMatrix2fv(this.addr,!1,av),vn(i,r)}}function uT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;iv.set(r),s.uniformMatrix3fv(this.addr,!1,iv),vn(i,r)}}function fT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;nv.set(r),s.uniformMatrix4fv(this.addr,!1,nv),vn(i,r)}}function dT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function hT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function pT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function mT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function gT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function vT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function _T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function ST(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);const c=this.type===s.SAMPLER_2D_SHADOW?$v:Jv;i.setTexture2D(t||c,l)}function yT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||t_,l)}function MT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||n_,l)}function ET(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||e_,l)}function bT(s){switch(s){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return _T;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function TT(s,t){s.uniform1fv(this.addr,t)}function AT(s,t){const i=ks(t,this.size,2);s.uniform2fv(this.addr,i)}function RT(s,t){const i=ks(t,this.size,3);s.uniform3fv(this.addr,i)}function CT(s,t){const i=ks(t,this.size,4);s.uniform4fv(this.addr,i)}function wT(s,t){const i=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function DT(s,t){const i=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function LT(s,t){const i=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function UT(s,t){s.uniform1iv(this.addr,t)}function NT(s,t){s.uniform2iv(this.addr,t)}function OT(s,t){s.uniform3iv(this.addr,t)}function zT(s,t){s.uniform4iv(this.addr,t)}function PT(s,t){s.uniform1uiv(this.addr,t)}function IT(s,t){s.uniform2uiv(this.addr,t)}function FT(s,t){s.uniform3uiv(this.addr,t)}function BT(s,t){s.uniform4uiv(this.addr,t)}function HT(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Jv,c[h])}function GT(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||t_,c[h])}function VT(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||n_,c[h])}function kT(s,t,i){const r=this.cache,l=t.length,c=kc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||e_,c[h])}function jT(s){switch(s){case 5126:return TT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return wT;case 35675:return DT;case 35676:return LT;case 5124:case 35670:return UT;case 35667:case 35671:return NT;case 35668:case 35672:return OT;case 35669:case 35673:return zT;case 5125:return PT;case 36294:return IT;case 36295:return FT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}class WT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=bT(i.type)}}class XT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jT(i.type)}}class qT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const f=l[c];f.setValue(t,i[f.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function rv(s,t){s.seq.push(t),s.map[t.id]=t}function YT(s,t,i){const r=s.name,l=r.length;for(Ld.lastIndex=0;;){const c=Ld.exec(r),h=Ld.lastIndex;let f=c[1];const m=c[2]==="]",p=c[3];if(m&&(f=f|0),p===void 0||p==="["&&h+2===l){rv(i,p===void 0?new WT(f,s,t):new XT(f,s,t));break}else{let g=i.map[f];g===void 0&&(g=new qT(f),rv(i,g)),i=g}}}class wc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);YT(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const f=i[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function sv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const ZT=37297;let KT=0;function QT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const f=h+1;r.push(`${f===t?">":" "} ${f}: ${i[h]}`)}return r.join(`
`)}function JT(s){const t=Gt.getPrimaries(Gt.workingColorSpace),i=Gt.getPrimaries(s);let r;switch(t===i?r="":t===Oc&&i===Nc?r="LinearDisplayP3ToLinearSRGB":t===Nc&&i===Oc&&(r="LinearSRGBToLinearDisplayP3"),s){case _a:case Bc:return[r,"LinearTransferOETF"];case Tn:case Jd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function ov(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+QT(s.getShaderSource(t),h)}else return l}function $T(s,t){const i=JT(t);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function e1(s,t){let i;switch(t){case cy:i="Linear";break;case uy:i="Reinhard";break;case fy:i="OptimizedCineon";break;case dy:i="ACESFilmic";break;case py:i="AgX";break;case hy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function t1(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function n1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function i1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function a1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:f}}return i}function zs(s){return s!==""}function lv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(s){return s.replace(r1,o1)}const s1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o1(s,t){let i=mt[t];if(i===void 0){const r=s1.get(t);if(r!==void 0)i=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return jd(i)}const l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(s){return s.replace(l1,c1)}function c1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fv(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===IS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function f1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function h1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tv:t="ENVMAP_BLENDING_MULTIPLY";break;case oy:t="ENVMAP_BLENDING_MIX";break;case ly:t="ENVMAP_BLENDING_ADD";break}return t}function p1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function m1(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,f=i.fragmentShader;const m=u1(i),p=f1(i),_=d1(i),g=h1(i),x=p1(i),y=i.isWebGL2?"":t1(i),E=n1(i),b=i1(c),v=l.createProgram();let S,U,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(zs).join(`
`),S.length>0&&(S+=`
`),U=[y,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(zs).join(`
`),U.length>0&&(U+=`
`)):(S=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),U=[y,fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?mt.tonemapping_pars_fragment:"",i.toneMapping!==er?e1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,$T("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zs).join(`
`)),h=jd(h),h=lv(h,i),h=cv(h,i),f=jd(f),f=lv(f,i),f=cv(f,i),h=uv(h),f=uv(f),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,U=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const F=R+S+h,k=R+U+f,O=sv(l,l.VERTEX_SHADER,F),z=sv(l,l.FRAGMENT_SHADER,k);l.attachShader(v,O),l.attachShader(v,z),i.index0AttributeName!==void 0?l.bindAttribLocation(v,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(v,0,"position"),l.linkProgram(v);function ue(fe){if(s.debug.checkShaderErrors){const be=l.getProgramInfoLog(v).trim(),j=l.getShaderInfoLog(O).trim(),ee=l.getShaderInfoLog(z).trim();let I=!0,W=!0;if(l.getProgramParameter(v,l.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,v,O,z);else{const K=ov(l,O,"vertex"),se=ov(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(v,l.VALIDATE_STATUS)+`

Program Info Log: `+be+`
`+K+`
`+se)}else be!==""?console.warn("THREE.WebGLProgram: Program Info Log:",be):(j===""||ee==="")&&(W=!1);W&&(fe.diagnostics={runnable:I,programLog:be,vertexShader:{log:j,prefix:S},fragmentShader:{log:ee,prefix:U}})}l.deleteShader(O),l.deleteShader(z),w=new wc(l,v),P=a1(l,v)}let w;this.getUniforms=function(){return w===void 0&&ue(this),w};let P;this.getAttributes=function(){return P===void 0&&ue(this),P};let ne=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ne===!1&&(ne=l.getProgramParameter(v,ZT)),ne},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KT++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=z,this}let g1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new _1(t),i.set(t,r)),r}}class _1{constructor(t){this.id=g1++,this.code=t,this.usedTimes=0}}function x1(s,t,i,r,l,c,h){const f=new Hv,m=new v1,p=[],_=l.isWebGL2,g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return w===0?"uv":`uv${w}`}function v(w,P,ne,fe,be){const j=fe.fog,ee=be.geometry,I=w.isMeshStandardMaterial?fe.environment:null,W=(w.isMeshStandardMaterial?i:t).get(w.envMap||I),K=W&&W.mapping===Fc?W.image.height:null,se=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const pe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,L=pe!==void 0?pe.length:0;let X=0;ee.morphAttributes.position!==void 0&&(X=1),ee.morphAttributes.normal!==void 0&&(X=2),ee.morphAttributes.color!==void 0&&(X=3);let H,Q,Z,_e;if(se){const Jt=Gi[se];H=Jt.vertexShader,Q=Jt.fragmentShader}else H=w.vertexShader,Q=w.fragmentShader,m.update(w),Z=m.getVertexShaderID(w),_e=m.getFragmentShaderID(w);const Te=s.getRenderTarget(),Ge=be.isInstancedMesh===!0,Pe=be.isBatchedMesh===!0,ke=!!w.map,ct=!!w.matcap,te=!!W,jt=!!w.aoMap,je=!!w.lightMap,st=!!w.bumpMap,Ve=!!w.normalMap,Ot=!!w.displacementMap,lt=!!w.emissiveMap,N=!!w.metalnessMap,C=!!w.roughnessMap,ae=w.anisotropy>0,Ee=w.clearcoat>0,ye=w.iridescence>0,xe=w.sheen>0,Ze=w.transmission>0,Le=ae&&!!w.anisotropyMap,le=Ee&&!!w.clearcoatMap,Ue=Ee&&!!w.clearcoatNormalMap,nt=Ee&&!!w.clearcoatRoughnessMap,Se=ye&&!!w.iridescenceMap,Et=ye&&!!w.iridescenceThicknessMap,ft=xe&&!!w.sheenColorMap,tt=xe&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Oe=!!w.specularColorMap,Ke=!!w.specularIntensityMap,vt=Ze&&!!w.transmissionMap,Wt=Ze&&!!w.thicknessMap,Je=!!w.gradientMap,Ae=!!w.alphaMap,G=w.alphaTest>0,Ce=!!w.alphaHash,Re=!!w.extensions,$e=!!ee.attributes.uv1,we=!!ee.attributes.uv2,Ct=!!ee.attributes.uv3;let At=er;return w.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(At=s.toneMapping),{isWebGL2:_,shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:H,fragmentShader:Q,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Pe,instancing:Ge,instancingColor:Ge&&be.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:_a,map:ke,matcap:ct,envMap:te,envMapMode:te&&W.mapping,envMapCubeUVHeight:K,aoMap:jt,lightMap:je,bumpMap:st,normalMap:Ve,displacementMap:x&&Ot,emissiveMap:lt,normalMapObjectSpace:Ve&&w.normalMapType===Ry,normalMapTangentSpace:Ve&&w.normalMapType===Ay,metalnessMap:N,roughnessMap:C,anisotropy:ae,anisotropyMap:Le,clearcoat:Ee,clearcoatMap:le,clearcoatNormalMap:Ue,clearcoatRoughnessMap:nt,iridescence:ye,iridescenceMap:Se,iridescenceThicknessMap:Et,sheen:xe,sheenColorMap:ft,sheenRoughnessMap:tt,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:Ke,transmission:Ze,transmissionMap:vt,thicknessMap:Wt,gradientMap:Je,opaque:w.transparent===!1&&w.blending===Ps,alphaMap:Ae,alphaTest:G,alphaHash:Ce,combine:w.combine,mapUv:ke&&b(w.map.channel),aoMapUv:jt&&b(w.aoMap.channel),lightMapUv:je&&b(w.lightMap.channel),bumpMapUv:st&&b(w.bumpMap.channel),normalMapUv:Ve&&b(w.normalMap.channel),displacementMapUv:Ot&&b(w.displacementMap.channel),emissiveMapUv:lt&&b(w.emissiveMap.channel),metalnessMapUv:N&&b(w.metalnessMap.channel),roughnessMapUv:C&&b(w.roughnessMap.channel),anisotropyMapUv:Le&&b(w.anisotropyMap.channel),clearcoatMapUv:le&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:tt&&b(w.sheenRoughnessMap.channel),specularMapUv:Ie&&b(w.specularMap.channel),specularColorMapUv:Oe&&b(w.specularColorMap.channel),specularIntensityMapUv:Ke&&b(w.specularIntensityMap.channel),transmissionMapUv:vt&&b(w.transmissionMap.channel),thicknessMapUv:Wt&&b(w.thicknessMap.channel),alphaMapUv:Ae&&b(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ve||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:we,vertexUv3s:Ct,pointsUvs:be.isPoints===!0&&!!ee.attributes.uv&&(ke||Ae),fog:!!j,useFog:w.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:be.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:X,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&Gt.getTransfer(w.map.colorSpace)===Yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ha,flipSided:w.side===Kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Re&&w.extensions.derivatives===!0,extensionFragDepth:Re&&w.extensions.fragDepth===!0,extensionDrawBuffers:Re&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&w.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function S(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ne in w.defines)P.push(ne),P.push(w.defines[ne]);return w.isRawShaderMaterial===!1&&(U(P,w),R(P,w),P.push(s.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function U(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function R(w,P){f.disableAll(),P.isWebGL2&&f.enable(0),P.supportsVertexTextures&&f.enable(1),P.instancing&&f.enable(2),P.instancingColor&&f.enable(3),P.matcap&&f.enable(4),P.envMap&&f.enable(5),P.normalMapObjectSpace&&f.enable(6),P.normalMapTangentSpace&&f.enable(7),P.clearcoat&&f.enable(8),P.iridescence&&f.enable(9),P.alphaTest&&f.enable(10),P.vertexColors&&f.enable(11),P.vertexAlphas&&f.enable(12),P.vertexUv1s&&f.enable(13),P.vertexUv2s&&f.enable(14),P.vertexUv3s&&f.enable(15),P.vertexTangents&&f.enable(16),P.anisotropy&&f.enable(17),P.alphaHash&&f.enable(18),P.batching&&f.enable(19),w.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.skinning&&f.enable(4),P.morphTargets&&f.enable(5),P.morphNormals&&f.enable(6),P.morphColors&&f.enable(7),P.premultipliedAlpha&&f.enable(8),P.shadowMapEnabled&&f.enable(9),P.useLegacyLights&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),w.push(f.mask)}function F(w){const P=E[w.type];let ne;if(P){const fe=Gi[P];ne=tM.clone(fe.uniforms)}else ne=w.uniforms;return ne}function k(w,P){let ne;for(let fe=0,be=p.length;fe<be;fe++){const j=p[fe];if(j.cacheKey===P){ne=j,++ne.usedTimes;break}}return ne===void 0&&(ne=new m1(s,P,w,c),p.push(ne)),ne}function O(w){if(--w.usedTimes===0){const P=p.indexOf(w);p[P]=p[p.length-1],p.pop(),w.destroy()}}function z(w){m.remove(w)}function ue(){m.dispose()}return{getParameters:v,getProgramCacheKey:S,getUniforms:F,acquireProgram:k,releaseProgram:O,releaseShaderCache:z,programs:p,dispose:ue}}function S1(){let s=new WeakMap;function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function i(c){s.delete(c)}function r(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{get:t,remove:i,update:r,dispose:l}}function y1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function dv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,x,y,E,b,v){let S=s[t];return S===void 0?(S={id:g.id,object:g,geometry:x,material:y,groupOrder:E,renderOrder:g.renderOrder,z:b,group:v},s[t]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=y,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=b,S.group=v),t++,S}function f(g,x,y,E,b,v){const S=h(g,x,y,E,b,v);y.transmission>0?r.push(S):y.transparent===!0?l.push(S):i.push(S)}function m(g,x,y,E,b,v){const S=h(g,x,y,E,b,v);y.transmission>0?r.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,x){i.length>1&&i.sort(g||y1),r.length>1&&r.sort(x||dv),l.length>1&&l.sort(x||dv)}function _(){for(let g=t,x=s.length;g<x;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:f,unshift:m,finish:_,sort:p}}function M1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new hv,s.set(r,[h])):l>=c.length?(h=new hv,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function E1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new he,color:new Vt};break;case"SpotLight":i={position:new he,direction:new he,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new he,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new he,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new he,halfWidth:new he,halfHeight:new he};break}return s[t.id]=i,i}}}function b1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let T1=0;function A1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function R1(s,t){const i=new E1,r=b1(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)l.probe.push(new he);const c=new he,h=new Rn,f=new Rn;function m(_,g){let x=0,y=0,E=0;for(let fe=0;fe<9;fe++)l.probe[fe].set(0,0,0);let b=0,v=0,S=0,U=0,R=0,F=0,k=0,O=0,z=0,ue=0,w=0;_.sort(A1);const P=g===!0?Math.PI:1;for(let fe=0,be=_.length;fe<be;fe++){const j=_[fe],ee=j.color,I=j.intensity,W=j.distance,K=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=ee.r*I*P,y+=ee.g*I*P,E+=ee.b*I*P;else if(j.isLightProbe){for(let se=0;se<9;se++)l.probe[se].addScaledVector(j.sh.coefficients[se],I);w++}else if(j.isDirectionalLight){const se=i.get(j);if(se.color.copy(j.color).multiplyScalar(j.intensity*P),j.castShadow){const pe=j.shadow,L=r.get(j);L.shadowBias=pe.bias,L.shadowNormalBias=pe.normalBias,L.shadowRadius=pe.radius,L.shadowMapSize=pe.mapSize,l.directionalShadow[b]=L,l.directionalShadowMap[b]=K,l.directionalShadowMatrix[b]=j.shadow.matrix,F++}l.directional[b]=se,b++}else if(j.isSpotLight){const se=i.get(j);se.position.setFromMatrixPosition(j.matrixWorld),se.color.copy(ee).multiplyScalar(I*P),se.distance=W,se.coneCos=Math.cos(j.angle),se.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),se.decay=j.decay,l.spot[S]=se;const pe=j.shadow;if(j.map&&(l.spotLightMap[z]=j.map,z++,pe.updateMatrices(j),j.castShadow&&ue++),l.spotLightMatrix[S]=pe.matrix,j.castShadow){const L=r.get(j);L.shadowBias=pe.bias,L.shadowNormalBias=pe.normalBias,L.shadowRadius=pe.radius,L.shadowMapSize=pe.mapSize,l.spotShadow[S]=L,l.spotShadowMap[S]=K,O++}S++}else if(j.isRectAreaLight){const se=i.get(j);se.color.copy(ee).multiplyScalar(I),se.halfWidth.set(j.width*.5,0,0),se.halfHeight.set(0,j.height*.5,0),l.rectArea[U]=se,U++}else if(j.isPointLight){const se=i.get(j);if(se.color.copy(j.color).multiplyScalar(j.intensity*P),se.distance=j.distance,se.decay=j.decay,j.castShadow){const pe=j.shadow,L=r.get(j);L.shadowBias=pe.bias,L.shadowNormalBias=pe.normalBias,L.shadowRadius=pe.radius,L.shadowMapSize=pe.mapSize,L.shadowCameraNear=pe.camera.near,L.shadowCameraFar=pe.camera.far,l.pointShadow[v]=L,l.pointShadowMap[v]=K,l.pointShadowMatrix[v]=j.shadow.matrix,k++}l.point[v]=se,v++}else if(j.isHemisphereLight){const se=i.get(j);se.skyColor.copy(j.color).multiplyScalar(I*P),se.groundColor.copy(j.groundColor).multiplyScalar(I*P),l.hemi[R]=se,R++}}U>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=De.LTC_FLOAT_1,l.rectAreaLTC2=De.LTC_FLOAT_2):(l.rectAreaLTC1=De.LTC_HALF_1,l.rectAreaLTC2=De.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=De.LTC_FLOAT_1,l.rectAreaLTC2=De.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=De.LTC_HALF_1,l.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=y,l.ambient[2]=E;const ne=l.hash;(ne.directionalLength!==b||ne.pointLength!==v||ne.spotLength!==S||ne.rectAreaLength!==U||ne.hemiLength!==R||ne.numDirectionalShadows!==F||ne.numPointShadows!==k||ne.numSpotShadows!==O||ne.numSpotMaps!==z||ne.numLightProbes!==w)&&(l.directional.length=b,l.spot.length=S,l.rectArea.length=U,l.point.length=v,l.hemi.length=R,l.directionalShadow.length=F,l.directionalShadowMap.length=F,l.pointShadow.length=k,l.pointShadowMap.length=k,l.spotShadow.length=O,l.spotShadowMap.length=O,l.directionalShadowMatrix.length=F,l.pointShadowMatrix.length=k,l.spotLightMatrix.length=O+z-ue,l.spotLightMap.length=z,l.numSpotLightShadowsWithMaps=ue,l.numLightProbes=w,ne.directionalLength=b,ne.pointLength=v,ne.spotLength=S,ne.rectAreaLength=U,ne.hemiLength=R,ne.numDirectionalShadows=F,ne.numPointShadows=k,ne.numSpotShadows=O,ne.numSpotMaps=z,ne.numLightProbes=w,l.version=T1++)}function p(_,g){let x=0,y=0,E=0,b=0,v=0;const S=g.matrixWorldInverse;for(let U=0,R=_.length;U<R;U++){const F=_[U];if(F.isDirectionalLight){const k=l.directional[x];k.direction.setFromMatrixPosition(F.matrixWorld),c.setFromMatrixPosition(F.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(S),x++}else if(F.isSpotLight){const k=l.spot[E];k.position.setFromMatrixPosition(F.matrixWorld),k.position.applyMatrix4(S),k.direction.setFromMatrixPosition(F.matrixWorld),c.setFromMatrixPosition(F.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(S),E++}else if(F.isRectAreaLight){const k=l.rectArea[b];k.position.setFromMatrixPosition(F.matrixWorld),k.position.applyMatrix4(S),f.identity(),h.copy(F.matrixWorld),h.premultiply(S),f.extractRotation(h),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),k.halfWidth.applyMatrix4(f),k.halfHeight.applyMatrix4(f),b++}else if(F.isPointLight){const k=l.point[y];k.position.setFromMatrixPosition(F.matrixWorld),k.position.applyMatrix4(S),y++}else if(F.isHemisphereLight){const k=l.hemi[v];k.direction.setFromMatrixPosition(F.matrixWorld),k.direction.transformDirection(S),v++}}}return{setup:m,setupView:p,state:l}}function pv(s,t){const i=new R1(s,t),r=[],l=[];function c(){r.length=0,l.length=0}function h(g){r.push(g)}function f(g){l.push(g)}function m(g){i.setup(r,g)}function p(g){i.setupView(r,g)}return{init:c,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:h,pushShadow:f}}function C1(s,t){let i=new WeakMap;function r(c,h=0){const f=i.get(c);let m;return f===void 0?(m=new pv(s,t),i.set(c,[m])):h>=f.length?(m=new pv(s,t),f.push(m)):m=f[h],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class w1 extends Gc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D1 extends Gc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N1(s,t,i){let r=new Yv;const l=new Nt,c=new Nt,h=new An,f=new w1({depthPacking:Ty}),m=new D1,p={},_=i.maxTextureSize,g={[tr]:Kn,[Kn]:tr,[ha]:ha},x=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:L1,fragmentShader:U1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new zr;E.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ma(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let S=this.type;this.render=function(O,z,ue){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const w=s.getRenderTarget(),P=s.getActiveCubeFace(),ne=s.getActiveMipmapLevel(),fe=s.state;fe.setBlending($a),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const be=S!==da&&this.type===da,j=S===da&&this.type!==da;for(let ee=0,I=O.length;ee<I;ee++){const W=O[ee],K=W.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const se=K.getFrameExtents();if(l.multiply(se),c.copy(K.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/se.x),l.x=c.x*se.x,K.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/se.y),l.y=c.y*se.y,K.mapSize.y=c.y)),K.map===null||be===!0||j===!0){const L=this.type!==da?{minFilter:Fn,magFilter:Fn}:{};K.map!==null&&K.map.dispose(),K.map=new xa(l.x,l.y,L),K.map.texture.name=W.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const pe=K.getViewportCount();for(let L=0;L<pe;L++){const X=K.getViewport(L);h.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),fe.viewport(h),K.updateMatrices(W,L),r=K.getFrustum(),F(z,ue,K.camera,W,this.type)}K.isPointLightShadow!==!0&&this.type===da&&U(K,ue),K.needsUpdate=!1}S=this.type,v.needsUpdate=!1,s.setRenderTarget(w,P,ne)};function U(O,z){const ue=t.update(b);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new xa(l.x,l.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(z,null,ue,x,b,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(z,null,ue,y,b,null)}function R(O,z,ue,w){let P=null;const ne=ue.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(ne!==void 0)P=ne;else if(P=ue.isPointLight===!0?m:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const fe=P.uuid,be=z.uuid;let j=p[fe];j===void 0&&(j={},p[fe]=j);let ee=j[be];ee===void 0&&(ee=P.clone(),j[be]=ee,z.addEventListener("dispose",k)),P=ee}if(P.visible=z.visible,P.wireframe=z.wireframe,w===da?P.side=z.shadowSide!==null?z.shadowSide:z.side:P.side=z.shadowSide!==null?z.shadowSide:g[z.side],P.alphaMap=z.alphaMap,P.alphaTest=z.alphaTest,P.map=z.map,P.clipShadows=z.clipShadows,P.clippingPlanes=z.clippingPlanes,P.clipIntersection=z.clipIntersection,P.displacementMap=z.displacementMap,P.displacementScale=z.displacementScale,P.displacementBias=z.displacementBias,P.wireframeLinewidth=z.wireframeLinewidth,P.linewidth=z.linewidth,ue.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const fe=s.properties.get(P);fe.light=ue}return P}function F(O,z,ue,w,P){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&P===da)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,O.matrixWorld);const be=t.update(O),j=O.material;if(Array.isArray(j)){const ee=be.groups;for(let I=0,W=ee.length;I<W;I++){const K=ee[I],se=j[K.materialIndex];if(se&&se.visible){const pe=R(O,se,w,P);O.onBeforeShadow(s,O,z,ue,be,pe,K),s.renderBufferDirect(ue,null,be,pe,O,K),O.onAfterShadow(s,O,z,ue,be,pe,K)}}}else if(j.visible){const ee=R(O,j,w,P);O.onBeforeShadow(s,O,z,ue,be,ee,null),s.renderBufferDirect(ue,null,be,ee,O,null),O.onAfterShadow(s,O,z,ue,be,ee,null)}}const fe=O.children;for(let be=0,j=fe.length;be<j;be++)F(fe[be],z,ue,w,P)}function k(O){O.target.removeEventListener("dispose",k);for(const ue in p){const w=p[ue],P=O.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function O1(s,t,i){const r=i.isWebGL2;function l(){let G=!1;const Ce=new An;let Re=null;const $e=new An(0,0,0,0);return{setMask:function(we){Re!==we&&!G&&(s.colorMask(we,we,we,we),Re=we)},setLocked:function(we){G=we},setClear:function(we,Ct,At,Zt,Jt){Jt===!0&&(we*=Zt,Ct*=Zt,At*=Zt),Ce.set(we,Ct,At,Zt),$e.equals(Ce)===!1&&(s.clearColor(we,Ct,At,Zt),$e.copy(Ce))},reset:function(){G=!1,Re=null,$e.set(-1,0,0,0)}}}function c(){let G=!1,Ce=null,Re=null,$e=null;return{setTest:function(we){we?Pe(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(we){Ce!==we&&!G&&(s.depthMask(we),Ce=we)},setFunc:function(we){if(Re!==we){switch(we){case ey:s.depthFunc(s.NEVER);break;case ty:s.depthFunc(s.ALWAYS);break;case ny:s.depthFunc(s.LESS);break;case Lc:s.depthFunc(s.LEQUAL);break;case iy:s.depthFunc(s.EQUAL);break;case ay:s.depthFunc(s.GEQUAL);break;case ry:s.depthFunc(s.GREATER);break;case sy:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=we}},setLocked:function(we){G=we},setClear:function(we){$e!==we&&(s.clearDepth(we),$e=we)},reset:function(){G=!1,Ce=null,Re=null,$e=null}}}function h(){let G=!1,Ce=null,Re=null,$e=null,we=null,Ct=null,At=null,Zt=null,Jt=null;return{setTest:function(wt){G||(wt?Pe(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(wt){Ce!==wt&&!G&&(s.stencilMask(wt),Ce=wt)},setFunc:function(wt,nn,Nn){(Re!==wt||$e!==nn||we!==Nn)&&(s.stencilFunc(wt,nn,Nn),Re=wt,$e=nn,we=Nn)},setOp:function(wt,nn,Nn){(Ct!==wt||At!==nn||Zt!==Nn)&&(s.stencilOp(wt,nn,Nn),Ct=wt,At=nn,Zt=Nn)},setLocked:function(wt){G=wt},setClear:function(wt){Jt!==wt&&(s.clearStencil(wt),Jt=wt)},reset:function(){G=!1,Ce=null,Re=null,$e=null,we=null,Ct=null,At=null,Zt=null,Jt=null}}}const f=new l,m=new c,p=new h,_=new WeakMap,g=new WeakMap;let x={},y={},E=new WeakMap,b=[],v=null,S=!1,U=null,R=null,F=null,k=null,O=null,z=null,ue=null,w=new Vt(0,0,0),P=0,ne=!1,fe=null,be=null,j=null,ee=null,I=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(pe)[1]),K=se>=1):pe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),K=se>=2);let L=null,X={};const H=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),Z=new An().fromArray(H),_e=new An().fromArray(Q);function Te(G,Ce,Re,$e){const we=new Uint8Array(4),Ct=s.createTexture();s.bindTexture(G,Ct),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<Re;At++)r&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ce,0,s.RGBA,1,1,$e,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Ce+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Ct}const Ge={};Ge[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),Ge[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ge[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ge[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Pe(s.DEPTH_TEST),m.setFunc(Lc),lt(!1),N(Z0),Pe(s.CULL_FACE),Ve($a);function Pe(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function ke(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function ct(G,Ce){return y[G]!==Ce?(s.bindFramebuffer(G,Ce),y[G]=Ce,r&&(G===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function te(G,Ce){let Re=b,$e=!1;if(G)if(Re=E.get(Ce),Re===void 0&&(Re=[],E.set(Ce,Re)),G.isWebGLMultipleRenderTargets){const we=G.texture;if(Re.length!==we.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let Ct=0,At=we.length;Ct<At;Ct++)Re[Ct]=s.COLOR_ATTACHMENT0+Ct;Re.length=we.length,$e=!0}}else Re[0]!==s.COLOR_ATTACHMENT0&&(Re[0]=s.COLOR_ATTACHMENT0,$e=!0);else Re[0]!==s.BACK&&(Re[0]=s.BACK,$e=!0);$e&&(i.isWebGL2?s.drawBuffers(Re):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function jt(G){return v!==G?(s.useProgram(G),v=G,!0):!1}const je={[wr]:s.FUNC_ADD,[BS]:s.FUNC_SUBTRACT,[HS]:s.FUNC_REVERSE_SUBTRACT};if(r)je[$0]=s.MIN,je[eg]=s.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(je[$0]=G.MIN_EXT,je[eg]=G.MAX_EXT)}const st={[GS]:s.ZERO,[VS]:s.ONE,[kS]:s.SRC_COLOR,[zd]:s.SRC_ALPHA,[ZS]:s.SRC_ALPHA_SATURATE,[qS]:s.DST_COLOR,[WS]:s.DST_ALPHA,[jS]:s.ONE_MINUS_SRC_COLOR,[Pd]:s.ONE_MINUS_SRC_ALPHA,[YS]:s.ONE_MINUS_DST_COLOR,[XS]:s.ONE_MINUS_DST_ALPHA,[KS]:s.CONSTANT_COLOR,[QS]:s.ONE_MINUS_CONSTANT_COLOR,[JS]:s.CONSTANT_ALPHA,[$S]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(G,Ce,Re,$e,we,Ct,At,Zt,Jt,wt){if(G===$a){S===!0&&(ke(s.BLEND),S=!1);return}if(S===!1&&(Pe(s.BLEND),S=!0),G!==FS){if(G!==U||wt!==ne){if((R!==wr||O!==wr)&&(s.blendEquation(s.FUNC_ADD),R=wr,O=wr),wt)switch(G){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K0:s.blendFunc(s.ONE,s.ONE);break;case Q0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Q0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,k=null,z=null,ue=null,w.set(0,0,0),P=0,U=G,ne=wt}return}we=we||Ce,Ct=Ct||Re,At=At||$e,(Ce!==R||we!==O)&&(s.blendEquationSeparate(je[Ce],je[we]),R=Ce,O=we),(Re!==F||$e!==k||Ct!==z||At!==ue)&&(s.blendFuncSeparate(st[Re],st[$e],st[Ct],st[At]),F=Re,k=$e,z=Ct,ue=At),(Zt.equals(w)===!1||Jt!==P)&&(s.blendColor(Zt.r,Zt.g,Zt.b,Jt),w.copy(Zt),P=Jt),U=G,ne=!1}function Ot(G,Ce){G.side===ha?ke(s.CULL_FACE):Pe(s.CULL_FACE);let Re=G.side===Kn;Ce&&(Re=!Re),lt(Re),G.blending===Ps&&G.transparent===!1?Ve($a):Ve(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),m.setFunc(G.depthFunc),m.setTest(G.depthTest),m.setMask(G.depthWrite),f.setMask(G.colorWrite);const $e=G.stencilWrite;p.setTest($e),$e&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){fe!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),fe=G)}function N(G){G!==zS?(Pe(s.CULL_FACE),G!==be&&(G===Z0?s.cullFace(s.BACK):G===PS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),be=G}function C(G){G!==j&&(K&&s.lineWidth(G),j=G)}function ae(G,Ce,Re){G?(Pe(s.POLYGON_OFFSET_FILL),(ee!==Ce||I!==Re)&&(s.polygonOffset(Ce,Re),ee=Ce,I=Re)):ke(s.POLYGON_OFFSET_FILL)}function Ee(G){G?Pe(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function ye(G){G===void 0&&(G=s.TEXTURE0+W-1),L!==G&&(s.activeTexture(G),L=G)}function xe(G,Ce,Re){Re===void 0&&(L===null?Re=s.TEXTURE0+W-1:Re=L);let $e=X[Re];$e===void 0&&($e={type:void 0,texture:void 0},X[Re]=$e),($e.type!==G||$e.texture!==Ce)&&(L!==Re&&(s.activeTexture(Re),L=Re),s.bindTexture(G,Ce||Ge[G]),$e.type=G,$e.texture=Ce)}function Ze(){const G=X[L];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(G){Z.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function vt(G){_e.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),_e.copy(G))}function Wt(G,Ce){let Re=g.get(Ce);Re===void 0&&(Re=new WeakMap,g.set(Ce,Re));let $e=Re.get(G);$e===void 0&&($e=s.getUniformBlockIndex(Ce,G.name),Re.set(G,$e))}function Je(G,Ce){const $e=g.get(Ce).get(G);_.get(Ce)!==$e&&(s.uniformBlockBinding(Ce,$e,G.__bindingPointIndex),_.set(Ce,$e))}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},L=null,X={},y={},E=new WeakMap,b=[],v=null,S=!1,U=null,R=null,F=null,k=null,O=null,z=null,ue=null,w=new Vt(0,0,0),P=0,ne=!1,fe=null,be=null,j=null,ee=null,I=null,Z.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),f.reset(),m.reset(),p.reset()}return{buffers:{color:f,depth:m,stencil:p},enable:Pe,disable:ke,bindFramebuffer:ct,drawBuffers:te,useProgram:jt,setBlending:Ve,setMaterial:Ot,setFlipSided:lt,setCullFace:N,setLineWidth:C,setPolygonOffset:ae,setScissorTest:Ee,activeTexture:ye,bindTexture:xe,unbindTexture:Ze,compressedTexImage2D:Le,compressedTexImage3D:le,texImage2D:Ie,texImage3D:Oe,updateUBOMapping:Wt,uniformBlockBinding:Je,texStorage2D:ft,texStorage3D:tt,texSubImage2D:Ue,texSubImage3D:nt,compressedTexSubImage2D:Se,compressedTexSubImage3D:Et,scissor:Ke,viewport:vt,reset:Ae}}function z1(s,t,i,r,l,c,h){const f=l.isWebGL2,m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,C){return y?new OffscreenCanvas(N,C):Pc("canvas")}function b(N,C,ae,Ee){let ye=1;if((N.width>Ee||N.height>Ee)&&(ye=Ee/Math.max(N.width,N.height)),ye<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const xe=C?kd:Math.floor,Ze=xe(ye*N.width),Le=xe(ye*N.height);g===void 0&&(g=E(Ze,Le));const le=ae?E(Ze,Le):g;return le.width=Ze,le.height=Le,le.getContext("2d").drawImage(N,0,0,Ze,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ze+"x"+Le+")."),le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function v(N){return Dg(N.width)&&Dg(N.height)}function S(N){return f?!1:N.wrapS!==Ui||N.wrapT!==Ui||N.minFilter!==Fn&&N.minFilter!==Un}function U(N,C){return N.generateMipmaps&&C&&N.minFilter!==Fn&&N.minFilter!==Un}function R(N){s.generateMipmap(N)}function F(N,C,ae,Ee,ye=!1){if(f===!1)return C;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xe=C;if(C===s.RED&&(ae===s.FLOAT&&(xe=s.R32F),ae===s.HALF_FLOAT&&(xe=s.R16F),ae===s.UNSIGNED_BYTE&&(xe=s.R8)),C===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.R8UI),ae===s.UNSIGNED_SHORT&&(xe=s.R16UI),ae===s.UNSIGNED_INT&&(xe=s.R32UI),ae===s.BYTE&&(xe=s.R8I),ae===s.SHORT&&(xe=s.R16I),ae===s.INT&&(xe=s.R32I)),C===s.RG&&(ae===s.FLOAT&&(xe=s.RG32F),ae===s.HALF_FLOAT&&(xe=s.RG16F),ae===s.UNSIGNED_BYTE&&(xe=s.RG8)),C===s.RGBA){const Ze=ye?Uc:Gt.getTransfer(Ee);ae===s.FLOAT&&(xe=s.RGBA32F),ae===s.HALF_FLOAT&&(xe=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(xe=Ze===Yt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function k(N,C,ae){return U(N,ae)===!0||N.isFramebufferTexture&&N.minFilter!==Fn&&N.minFilter!==Un?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function O(N){return N===Fn||N===tg||N===nd?s.NEAREST:s.LINEAR}function z(N){const C=N.target;C.removeEventListener("dispose",z),w(C),C.isVideoTexture&&_.delete(C)}function ue(N){const C=N.target;C.removeEventListener("dispose",ue),ne(C)}function w(N){const C=r.get(N);if(C.__webglInit===void 0)return;const ae=N.source,Ee=x.get(ae);if(Ee){const ye=Ee[C.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(N),Object.keys(Ee).length===0&&x.delete(ae)}r.remove(N)}function P(N){const C=r.get(N);s.deleteTexture(C.__webglTexture);const ae=N.source,Ee=x.get(ae);delete Ee[C.__cacheKey],h.memory.textures--}function ne(N){const C=N.texture,ae=r.get(N),Ee=r.get(C);if(Ee.__webglTexture!==void 0&&(s.deleteTexture(Ee.__webglTexture),h.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(ae.__webglFramebuffer[ye]))for(let xe=0;xe<ae.__webglFramebuffer[ye].length;xe++)s.deleteFramebuffer(ae.__webglFramebuffer[ye][xe]);else s.deleteFramebuffer(ae.__webglFramebuffer[ye]);ae.__webglDepthbuffer&&s.deleteRenderbuffer(ae.__webglDepthbuffer[ye])}else{if(Array.isArray(ae.__webglFramebuffer))for(let ye=0;ye<ae.__webglFramebuffer.length;ye++)s.deleteFramebuffer(ae.__webglFramebuffer[ye]);else s.deleteFramebuffer(ae.__webglFramebuffer);if(ae.__webglDepthbuffer&&s.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let ye=0;ye<ae.__webglColorRenderbuffer.length;ye++)ae.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(ae.__webglColorRenderbuffer[ye]);ae.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ye=0,xe=C.length;ye<xe;ye++){const Ze=r.get(C[ye]);Ze.__webglTexture&&(s.deleteTexture(Ze.__webglTexture),h.memory.textures--),r.remove(C[ye])}r.remove(C),r.remove(N)}let fe=0;function be(){fe=0}function j(){const N=fe;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),fe+=1,N}function ee(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function I(N,C){const ae=r.get(N);if(N.isVideoTexture&&Ot(N),N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){const Ee=N.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ae,N,C);return}}i.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+C)}function W(N,C){const ae=r.get(N);if(N.version>0&&ae.__version!==N.version){Z(ae,N,C);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+C)}function K(N,C){const ae=r.get(N);if(N.version>0&&ae.__version!==N.version){Z(ae,N,C);return}i.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+C)}function se(N,C){const ae=r.get(N);if(N.version>0&&ae.__version!==N.version){_e(ae,N,C);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+C)}const pe={[Bd]:s.REPEAT,[Ui]:s.CLAMP_TO_EDGE,[Hd]:s.MIRRORED_REPEAT},L={[Fn]:s.NEAREST,[tg]:s.NEAREST_MIPMAP_NEAREST,[nd]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[my]:s.LINEAR_MIPMAP_NEAREST,[jo]:s.LINEAR_MIPMAP_LINEAR},X={[Cy]:s.NEVER,[Oy]:s.ALWAYS,[wy]:s.LESS,[zv]:s.LEQUAL,[Dy]:s.EQUAL,[Ny]:s.GEQUAL,[Ly]:s.GREATER,[Uy]:s.NOTEQUAL};function H(N,C,ae){if(ae?(s.texParameteri(N,s.TEXTURE_WRAP_S,pe[C.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,pe[C.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,pe[C.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[C.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[C.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==Ui||C.wrapT!==Ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,O(C.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,O(C.minFilter)),C.minFilter!==Fn&&C.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,X[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Ee=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Fn||C.minFilter!==nd&&C.minFilter!==jo||C.type===Ja&&t.has("OES_texture_float_linear")===!1||f===!1&&C.type===Wo&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||r.get(C).__currentAnisotropy)&&(s.texParameterf(N,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy)}}function Q(N,C){let ae=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",z));const Ee=C.source;let ye=x.get(Ee);ye===void 0&&(ye={},x.set(Ee,ye));const xe=ee(C);if(xe!==N.__cacheKey){ye[xe]===void 0&&(ye[xe]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ae=!0),ye[xe].usedTimes++;const Ze=ye[N.__cacheKey];Ze!==void 0&&(ye[N.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(C)),N.__cacheKey=xe,N.__webglTexture=ye[xe].texture}return ae}function Z(N,C,ae){let Ee=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Ee=s.TEXTURE_3D);const ye=Q(N,C),xe=C.source;i.bindTexture(Ee,N.__webglTexture,s.TEXTURE0+ae);const Ze=r.get(xe);if(xe.version!==Ze.__version||ye===!0){i.activeTexture(s.TEXTURE0+ae);const Le=Gt.getPrimaries(Gt.workingColorSpace),le=C.colorSpace===yi?null:Gt.getPrimaries(C.colorSpace),Ue=C.colorSpace===yi||Le===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const nt=S(C)&&v(C.image)===!1;let Se=b(C.image,nt,!1,l.maxTextureSize);Se=lt(C,Se);const Et=v(Se)||f,ft=c.convert(C.format,C.colorSpace);let tt=c.convert(C.type),Ie=F(C.internalFormat,ft,tt,C.colorSpace,C.isVideoTexture);H(Ee,C,Et);let Oe;const Ke=C.mipmaps,vt=f&&C.isVideoTexture!==!0&&Ie!==Nv,Wt=Ze.__version===void 0||ye===!0,Je=k(C,Se,Et);if(C.isDepthTexture)Ie=s.DEPTH_COMPONENT,f?C.type===Ja?Ie=s.DEPTH_COMPONENT32F:C.type===Qa?Ie=s.DEPTH_COMPONENT24:C.type===Lr?Ie=s.DEPTH24_STENCIL8:Ie=s.DEPTH_COMPONENT16:C.type===Ja&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Ur&&Ie===s.DEPTH_COMPONENT&&C.type!==Qd&&C.type!==Qa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Qa,tt=c.convert(C.type)),C.format===Hs&&Ie===s.DEPTH_COMPONENT&&(Ie=s.DEPTH_STENCIL,C.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Lr,tt=c.convert(C.type))),Wt&&(vt?i.texStorage2D(s.TEXTURE_2D,1,Ie,Se.width,Se.height):i.texImage2D(s.TEXTURE_2D,0,Ie,Se.width,Se.height,0,ft,tt,null));else if(C.isDataTexture)if(Ke.length>0&&Et){vt&&Wt&&i.texStorage2D(s.TEXTURE_2D,Je,Ie,Ke[0].width,Ke[0].height);for(let Ae=0,G=Ke.length;Ae<G;Ae++)Oe=Ke[Ae],vt?i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Oe.width,Oe.height,ft,tt,Oe.data):i.texImage2D(s.TEXTURE_2D,Ae,Ie,Oe.width,Oe.height,0,ft,tt,Oe.data);C.generateMipmaps=!1}else vt?(Wt&&i.texStorage2D(s.TEXTURE_2D,Je,Ie,Se.width,Se.height),i.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,ft,tt,Se.data)):i.texImage2D(s.TEXTURE_2D,0,Ie,Se.width,Se.height,0,ft,tt,Se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){vt&&Wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Je,Ie,Ke[0].width,Ke[0].height,Se.depth);for(let Ae=0,G=Ke.length;Ae<G;Ae++)Oe=Ke[Ae],C.format!==Si?ft!==null?vt?i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Oe.width,Oe.height,Se.depth,ft,Oe.data,0,0):i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,Ie,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Oe.width,Oe.height,Se.depth,ft,tt,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,Ie,Oe.width,Oe.height,Se.depth,0,ft,tt,Oe.data)}else{vt&&Wt&&i.texStorage2D(s.TEXTURE_2D,Je,Ie,Ke[0].width,Ke[0].height);for(let Ae=0,G=Ke.length;Ae<G;Ae++)Oe=Ke[Ae],C.format!==Si?ft!==null?vt?i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Oe.width,Oe.height,ft,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,Ie,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Oe.width,Oe.height,ft,tt,Oe.data):i.texImage2D(s.TEXTURE_2D,Ae,Ie,Oe.width,Oe.height,0,ft,tt,Oe.data)}else if(C.isDataArrayTexture)vt?(Wt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Je,Ie,Se.width,Se.height,Se.depth),i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ft,tt,Se.data)):i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Se.width,Se.height,Se.depth,0,ft,tt,Se.data);else if(C.isData3DTexture)vt?(Wt&&i.texStorage3D(s.TEXTURE_3D,Je,Ie,Se.width,Se.height,Se.depth),i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ft,tt,Se.data)):i.texImage3D(s.TEXTURE_3D,0,Ie,Se.width,Se.height,Se.depth,0,ft,tt,Se.data);else if(C.isFramebufferTexture){if(Wt)if(vt)i.texStorage2D(s.TEXTURE_2D,Je,Ie,Se.width,Se.height);else{let Ae=Se.width,G=Se.height;for(let Ce=0;Ce<Je;Ce++)i.texImage2D(s.TEXTURE_2D,Ce,Ie,Ae,G,0,ft,tt,null),Ae>>=1,G>>=1}}else if(Ke.length>0&&Et){vt&&Wt&&i.texStorage2D(s.TEXTURE_2D,Je,Ie,Ke[0].width,Ke[0].height);for(let Ae=0,G=Ke.length;Ae<G;Ae++)Oe=Ke[Ae],vt?i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ft,tt,Oe):i.texImage2D(s.TEXTURE_2D,Ae,Ie,ft,tt,Oe);C.generateMipmaps=!1}else vt?(Wt&&i.texStorage2D(s.TEXTURE_2D,Je,Ie,Se.width,Se.height),i.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,tt,Se)):i.texImage2D(s.TEXTURE_2D,0,Ie,ft,tt,Se);U(C,Et)&&R(Ee),Ze.__version=xe.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function _e(N,C,ae){if(C.image.length!==6)return;const Ee=Q(N,C),ye=C.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ae);const xe=r.get(ye);if(ye.version!==xe.__version||Ee===!0){i.activeTexture(s.TEXTURE0+ae);const Ze=Gt.getPrimaries(Gt.workingColorSpace),Le=C.colorSpace===yi?null:Gt.getPrimaries(C.colorSpace),le=C.colorSpace===yi||Ze===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ue=C.isCompressedTexture||C.image[0].isCompressedTexture,nt=C.image[0]&&C.image[0].isDataTexture,Se=[];for(let Ae=0;Ae<6;Ae++)!Ue&&!nt?Se[Ae]=b(C.image[Ae],!1,!0,l.maxCubemapSize):Se[Ae]=nt?C.image[Ae].image:C.image[Ae],Se[Ae]=lt(C,Se[Ae]);const Et=Se[0],ft=v(Et)||f,tt=c.convert(C.format,C.colorSpace),Ie=c.convert(C.type),Oe=F(C.internalFormat,tt,Ie,C.colorSpace),Ke=f&&C.isVideoTexture!==!0,vt=xe.__version===void 0||Ee===!0;let Wt=k(C,Et,ft);H(s.TEXTURE_CUBE_MAP,C,ft);let Je;if(Ue){Ke&&vt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,Oe,Et.width,Et.height);for(let Ae=0;Ae<6;Ae++){Je=Se[Ae].mipmaps;for(let G=0;G<Je.length;G++){const Ce=Je[G];C.format!==Si?tt!==null?Ke?i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,0,0,Ce.width,Ce.height,tt,Ce.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,Oe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,0,0,Ce.width,Ce.height,tt,Ie,Ce.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G,Oe,Ce.width,Ce.height,0,tt,Ie,Ce.data)}}}else{Je=C.mipmaps,Ke&&vt&&(Je.length>0&&Wt++,i.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,Oe,Se[0].width,Se[0].height));for(let Ae=0;Ae<6;Ae++)if(nt){Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Se[Ae].width,Se[Ae].height,tt,Ie,Se[Ae].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Oe,Se[Ae].width,Se[Ae].height,0,tt,Ie,Se[Ae].data);for(let G=0;G<Je.length;G++){const Re=Je[G].image[Ae].image;Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,0,0,Re.width,Re.height,tt,Ie,Re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,Oe,Re.width,Re.height,0,tt,Ie,Re.data)}}else{Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,tt,Ie,Se[Ae]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Oe,tt,Ie,Se[Ae]);for(let G=0;G<Je.length;G++){const Ce=Je[G];Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,0,0,tt,Ie,Ce.image[Ae]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,G+1,Oe,tt,Ie,Ce.image[Ae])}}}U(C,ft)&&R(s.TEXTURE_CUBE_MAP),xe.__version=ye.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Te(N,C,ae,Ee,ye,xe){const Ze=c.convert(ae.format,ae.colorSpace),Le=c.convert(ae.type),le=F(ae.internalFormat,Ze,Le,ae.colorSpace);if(!r.get(C).__hasExternalTextures){const nt=Math.max(1,C.width>>xe),Se=Math.max(1,C.height>>xe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,xe,le,nt,Se,C.depth,0,Ze,Le,null):i.texImage2D(ye,xe,le,nt,Se,0,Ze,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ve(C)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,ye,r.get(ae).__webglTexture,0,st(C)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,ye,r.get(ae).__webglTexture,xe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(N,C,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,N),C.depthBuffer&&!C.stencilBuffer){let Ee=f===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ae||Ve(C)){const ye=C.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ja?Ee=s.DEPTH_COMPONENT32F:ye.type===Qa&&(Ee=s.DEPTH_COMPONENT24));const xe=st(C);Ve(C)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,Ee,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Ee,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,Ee,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(C.depthBuffer&&C.stencilBuffer){const Ee=st(C);ae&&Ve(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,s.DEPTH24_STENCIL8,C.width,C.height):Ve(C)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const Ee=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ye=0;ye<Ee.length;ye++){const xe=Ee[ye],Ze=c.convert(xe.format,xe.colorSpace),Le=c.convert(xe.type),le=F(xe.internalFormat,Ze,Le,xe.colorSpace),Ue=st(C);ae&&Ve(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,le,C.width,C.height):Ve(C)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,le,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,le,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),I(C.depthTexture,0);const Ee=r.get(C.depthTexture).__webglTexture,ye=st(C);if(C.depthTexture.format===Ur)Ve(C)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(C.depthTexture.format===Hs)Ve(C)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function ke(N){const C=r.get(N),ae=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Pe(C.__webglFramebuffer,N)}else if(ae){C.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)i.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[Ee]),C.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Ge(C.__webglDepthbuffer[Ee],N,!1)}else i.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Ge(C.__webglDepthbuffer,N,!1);i.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(N,C,ae){const Ee=r.get(N);C!==void 0&&Te(Ee.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&ke(N)}function te(N){const C=N.texture,ae=r.get(N),Ee=r.get(C);N.addEventListener("dispose",ue),N.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=C.version,h.memory.textures++);const ye=N.isWebGLCubeRenderTarget===!0,xe=N.isWebGLMultipleRenderTargets===!0,Ze=v(N)||f;if(ye){ae.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(f&&C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer[Le]=[];for(let le=0;le<C.mipmaps.length;le++)ae.__webglFramebuffer[Le][le]=s.createFramebuffer()}else ae.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(f&&C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Le=0;Le<C.mipmaps.length;Le++)ae.__webglFramebuffer[Le]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(xe)if(l.drawBuffers){const Le=N.texture;for(let le=0,Ue=Le.length;le<Ue;le++){const nt=r.get(Le[le]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&N.samples>0&&Ve(N)===!1){const Le=xe?C:[C];ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let le=0;le<Le.length;le++){const Ue=Le[le];ae.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const nt=c.convert(Ue.format,Ue.colorSpace),Se=c.convert(Ue.type),Et=F(Ue.internalFormat,nt,Se,Ue.colorSpace,N.isXRRenderTarget===!0),ft=st(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Et,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,ae.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(ae.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){i.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),H(s.TEXTURE_CUBE_MAP,C,Ze);for(let Le=0;Le<6;Le++)if(f&&C.mipmaps&&C.mipmaps.length>0)for(let le=0;le<C.mipmaps.length;le++)Te(ae.__webglFramebuffer[Le][le],N,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,le);else Te(ae.__webglFramebuffer[Le],N,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);U(C,Ze)&&R(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(xe){const Le=N.texture;for(let le=0,Ue=Le.length;le<Ue;le++){const nt=Le[le],Se=r.get(nt);i.bindTexture(s.TEXTURE_2D,Se.__webglTexture),H(s.TEXTURE_2D,nt,Ze),Te(ae.__webglFramebuffer,N,nt,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),U(nt,Ze)&&R(s.TEXTURE_2D)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(f?Le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Le,Ee.__webglTexture),H(Le,C,Ze),f&&C.mipmaps&&C.mipmaps.length>0)for(let le=0;le<C.mipmaps.length;le++)Te(ae.__webglFramebuffer[le],N,C,s.COLOR_ATTACHMENT0,Le,le);else Te(ae.__webglFramebuffer,N,C,s.COLOR_ATTACHMENT0,Le,0);U(C,Ze)&&R(Le),i.unbindTexture()}N.depthBuffer&&ke(N)}function jt(N){const C=v(N)||f,ae=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let Ee=0,ye=ae.length;Ee<ye;Ee++){const xe=ae[Ee];if(U(xe,C)){const Ze=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Le=r.get(xe).__webglTexture;i.bindTexture(Ze,Le),R(Ze),i.unbindTexture()}}}function je(N){if(f&&N.samples>0&&Ve(N)===!1){const C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ae=N.width,Ee=N.height;let ye=s.COLOR_BUFFER_BIT;const xe=[],Ze=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(N),le=N.isWebGLMultipleRenderTargets===!0;if(le)for(let Ue=0;Ue<C.length;Ue++)i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){xe.push(s.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&xe.push(Ze);const nt=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(nt===!1&&(N.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),le&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]),nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ze])),le){const Se=r.get(C[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,ae,Ee,0,0,ae,Ee,ye,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe)}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ue=0;Ue<C.length;Ue++){i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const nt=r.get(C[Ue]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,nt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function st(N){return Math.min(l.maxSamples,N.samples)}function Ve(N){const C=r.get(N);return f&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ot(N){const C=h.render.frame;_.get(N)!==C&&(_.set(N,C),N.update())}function lt(N,C){const ae=N.colorSpace,Ee=N.format,ye=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Gd||ae!==_a&&ae!==yi&&(Gt.getTransfer(ae)===Yt?f===!1?t.has("EXT_sRGB")===!0&&Ee===Si?(N.format=Gd,N.minFilter=Un,N.generateMipmaps=!1):C=Iv.sRGBToLinear(C):(Ee!==Si||ye!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),C}this.allocateTextureUnit=j,this.resetTextureUnits=be,this.setTexture2D=I,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=se,this.rebindTextures=ct,this.setupRenderTarget=te,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ve}function P1(s,t,i){const r=i.isWebGL2;function l(c,h=yi){let f;const m=Gt.getTransfer(h);if(c===ga)return s.UNSIGNED_BYTE;if(c===Cv)return s.UNSIGNED_SHORT_4_4_4_4;if(c===wv)return s.UNSIGNED_SHORT_5_5_5_1;if(c===gy)return s.BYTE;if(c===vy)return s.SHORT;if(c===Qd)return s.UNSIGNED_SHORT;if(c===Rv)return s.INT;if(c===Qa)return s.UNSIGNED_INT;if(c===Ja)return s.FLOAT;if(c===Wo)return r?s.HALF_FLOAT:(f=t.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(c===_y)return s.ALPHA;if(c===Si)return s.RGBA;if(c===xy)return s.LUMINANCE;if(c===Sy)return s.LUMINANCE_ALPHA;if(c===Ur)return s.DEPTH_COMPONENT;if(c===Hs)return s.DEPTH_STENCIL;if(c===Gd)return f=t.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(c===yy)return s.RED;if(c===Dv)return s.RED_INTEGER;if(c===My)return s.RG;if(c===Lv)return s.RG_INTEGER;if(c===Uv)return s.RGBA_INTEGER;if(c===id||c===ad||c===rd||c===sd)if(m===Yt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(c===id)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===ad)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===rd)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===sd)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(c===id)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===ad)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===rd)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===sd)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===ng||c===ig||c===ag||c===rg)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(c===ng)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===ig)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===ag)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===rg)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===Nv)return f=t.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===sg||c===og)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(c===sg)return m===Yt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(c===og)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===lg||c===cg||c===ug||c===fg||c===dg||c===hg||c===pg||c===mg||c===gg||c===vg||c===_g||c===xg||c===Sg||c===yg)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(c===lg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===cg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===ug)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===fg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===dg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===hg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===pg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===mg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===gg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===vg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===_g)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===xg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Sg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===yg)return m===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===od||c===Mg||c===Eg)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(c===od)return m===Yt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===Mg)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===Eg)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===Ey||c===bg||c===Tg||c===Ag)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(c===od)return f.COMPRESSED_RED_RGTC1_EXT;if(c===bg)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Tg)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===Ag)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===Lr?r?s.UNSIGNED_INT_24_8:(f=t.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):s[c]!==void 0?s[c]:null}return{convert:l}}class I1 extends Li{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const f=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const v=i.getJointPose(b,r),S=this._getHandJoint(p,b);v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=v.radius),S.visible=v!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return f!==null&&(f.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Rc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class B1 extends Vs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,f="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,E=null;const b=i.getContextAttributes();let v=null,S=null;const U=[],R=[],F=new Nt;let k=null;const O=new Li;O.layers.enable(1),O.viewport=new An;const z=new Li;z.layers.enable(2),z.viewport=new An;const ue=[O,z],w=new I1;w.layers.enable(1),w.layers.enable(2);let P=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=U[H];return Q===void 0&&(Q=new Ud,U[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=U[H];return Q===void 0&&(Q=new Ud,U[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=U[H];return Q===void 0&&(Q=new Ud,U[H]=Q),Q.getHandSpace()};function fe(H){const Q=R.indexOf(H.inputSource);if(Q===-1)return;const Z=U[Q];Z!==void 0&&(Z.update(H.inputSource,H.frame,p||h),Z.dispatchEvent({type:H.type,data:H.inputSource}))}function be(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",be),l.removeEventListener("inputsourceschange",j);for(let H=0;H<U.length;H++){const Q=R[H];Q!==null&&(R[H]=null,U[H].disconnect(Q))}P=null,ne=null,t.setRenderTarget(v),y=null,x=null,g=null,l=null,S=null,X.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){c=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){f=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(H){p=H},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",be),l.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(F),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Q),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),S=new xa(y.framebufferWidth,y.framebufferHeight,{format:Si,type:ga,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let Q=null,Z=null,_e=null;b.depth&&(_e=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Q=b.stencil?Hs:Ur,Z=b.stencil?Lr:Qa);const Te={colorFormat:i.RGBA8,depthFormat:_e,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Te),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),S=new xa(x.textureWidth,x.textureHeight,{format:Si,type:ga,depthTexture:new Qv(x.textureWidth,x.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});const Ge=t.properties.get(S);Ge.__ignoreDepthValues=x.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(f),X.setContext(l),X.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function j(H){for(let Q=0;Q<H.removed.length;Q++){const Z=H.removed[Q],_e=R.indexOf(Z);_e>=0&&(R[_e]=null,U[_e].disconnect(Z))}for(let Q=0;Q<H.added.length;Q++){const Z=H.added[Q];let _e=R.indexOf(Z);if(_e===-1){for(let Ge=0;Ge<U.length;Ge++)if(Ge>=R.length){R.push(Z),_e=Ge;break}else if(R[Ge]===null){R[Ge]=Z,_e=Ge;break}if(_e===-1)break}const Te=U[_e];Te&&Te.connect(Z)}}const ee=new he,I=new he;function W(H,Q,Z){ee.setFromMatrixPosition(Q.matrixWorld),I.setFromMatrixPosition(Z.matrixWorld);const _e=ee.distanceTo(I),Te=Q.projectionMatrix.elements,Ge=Z.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),ct=(Te[9]+1)/Te[5],te=(Te[9]-1)/Te[5],jt=(Te[8]-1)/Te[0],je=(Ge[8]+1)/Ge[0],st=Pe*jt,Ve=Pe*je,Ot=_e/(-jt+je),lt=Ot*-jt;Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(lt),H.translateZ(Ot),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const N=Pe+Ot,C=ke+Ot,ae=st-lt,Ee=Ve+(_e-lt),ye=ct*ke/C*N,xe=te*ke/C*N;H.projectionMatrix.makePerspective(ae,Ee,ye,xe,N,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function K(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;w.near=z.near=O.near=H.near,w.far=z.far=O.far=H.far,(P!==w.near||ne!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,ne=w.far);const Q=H.parent,Z=w.cameras;K(w,Q);for(let _e=0;_e<Z.length;_e++)K(Z[_e],Q);Z.length===2?W(w,O,z):w.projectionMatrix.copy(O.projectionMatrix),se(H,w,Q)};function se(H,Q,Z){Z===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(Z.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vd*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(H){m=H,x!==null&&(x.fixedFoveation=H),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=H)};let pe=null;function L(H,Q){if(_=Q.getViewerPose(p||h),E=Q,_!==null){const Z=_.views;y!==null&&(t.setRenderTargetFramebuffer(S,y.framebuffer),t.setRenderTarget(S));let _e=!1;Z.length!==w.cameras.length&&(w.cameras.length=0,_e=!0);for(let Te=0;Te<Z.length;Te++){const Ge=Z[Te];let Pe=null;if(y!==null)Pe=y.getViewport(Ge);else{const ct=g.getViewSubImage(x,Ge);Pe=ct.viewport,Te===0&&(t.setRenderTargetTextures(S,ct.colorTexture,x.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(S))}let ke=ue[Te];ke===void 0&&(ke=new Li,ke.layers.enable(Te),ke.viewport=new An,ue[Te]=ke),ke.matrix.fromArray(Ge.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ge.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Te===0&&(w.matrix.copy(ke.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_e===!0&&w.cameras.push(ke)}}for(let Z=0;Z<U.length;Z++){const _e=R[Z],Te=U[Z];_e!==null&&Te!==void 0&&Te.update(_e,Q,p||h)}pe&&pe(H,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),E=null}const X=new Zv;X.setAnimationLoop(L),this.setAnimationLoop=function(H){pe=H},this.dispose=function(){}}}function H1(s,t){function i(v,S){v.matrixAutoUpdate===!0&&v.updateMatrix(),S.value.copy(v.matrix)}function r(v,S){S.color.getRGB(v.fogColor.value,Wv(s)),S.isFog?(v.fogNear.value=S.near,v.fogFar.value=S.far):S.isFogExp2&&(v.fogDensity.value=S.density)}function l(v,S,U,R,F){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(v,S):S.isMeshToonMaterial?(c(v,S),g(v,S)):S.isMeshPhongMaterial?(c(v,S),_(v,S)):S.isMeshStandardMaterial?(c(v,S),x(v,S),S.isMeshPhysicalMaterial&&y(v,S,F)):S.isMeshMatcapMaterial?(c(v,S),E(v,S)):S.isMeshDepthMaterial?c(v,S):S.isMeshDistanceMaterial?(c(v,S),b(v,S)):S.isMeshNormalMaterial?c(v,S):S.isLineBasicMaterial?(h(v,S),S.isLineDashedMaterial&&f(v,S)):S.isPointsMaterial?m(v,S,U,R):S.isSpriteMaterial?p(v,S):S.isShadowMaterial?(v.color.value.copy(S.color),v.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(v,S){v.opacity.value=S.opacity,S.color&&v.diffuse.value.copy(S.color),S.emissive&&v.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(v.map.value=S.map,i(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,i(S.alphaMap,v.alphaMapTransform)),S.bumpMap&&(v.bumpMap.value=S.bumpMap,i(S.bumpMap,v.bumpMapTransform),v.bumpScale.value=S.bumpScale,S.side===Kn&&(v.bumpScale.value*=-1)),S.normalMap&&(v.normalMap.value=S.normalMap,i(S.normalMap,v.normalMapTransform),v.normalScale.value.copy(S.normalScale),S.side===Kn&&v.normalScale.value.negate()),S.displacementMap&&(v.displacementMap.value=S.displacementMap,i(S.displacementMap,v.displacementMapTransform),v.displacementScale.value=S.displacementScale,v.displacementBias.value=S.displacementBias),S.emissiveMap&&(v.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,v.emissiveMapTransform)),S.specularMap&&(v.specularMap.value=S.specularMap,i(S.specularMap,v.specularMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest);const U=t.get(S).envMap;if(U&&(v.envMap.value=U,v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=S.reflectivity,v.ior.value=S.ior,v.refractionRatio.value=S.refractionRatio),S.lightMap){v.lightMap.value=S.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=S.lightMapIntensity*R,i(S.lightMap,v.lightMapTransform)}S.aoMap&&(v.aoMap.value=S.aoMap,v.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,v.aoMapTransform))}function h(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,S.map&&(v.map.value=S.map,i(S.map,v.mapTransform))}function f(v,S){v.dashSize.value=S.dashSize,v.totalSize.value=S.dashSize+S.gapSize,v.scale.value=S.scale}function m(v,S,U,R){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.size.value=S.size*U,v.scale.value=R*.5,S.map&&(v.map.value=S.map,i(S.map,v.uvTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,i(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function p(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.rotation.value=S.rotation,S.map&&(v.map.value=S.map,i(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,i(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function _(v,S){v.specular.value.copy(S.specular),v.shininess.value=Math.max(S.shininess,1e-4)}function g(v,S){S.gradientMap&&(v.gradientMap.value=S.gradientMap)}function x(v,S){v.metalness.value=S.metalness,S.metalnessMap&&(v.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,v.metalnessMapTransform)),v.roughness.value=S.roughness,S.roughnessMap&&(v.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,v.roughnessMapTransform)),t.get(S).envMap&&(v.envMapIntensity.value=S.envMapIntensity)}function y(v,S,U){v.ior.value=S.ior,S.sheen>0&&(v.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),v.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(v.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,v.sheenColorMapTransform)),S.sheenRoughnessMap&&(v.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,v.sheenRoughnessMapTransform))),S.clearcoat>0&&(v.clearcoat.value=S.clearcoat,v.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(v.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,v.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(v.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&v.clearcoatNormalScale.value.negate())),S.iridescence>0&&(v.iridescence.value=S.iridescence,v.iridescenceIOR.value=S.iridescenceIOR,v.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(v.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,v.iridescenceMapTransform)),S.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),S.transmission>0&&(v.transmission.value=S.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(v.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,v.transmissionMapTransform)),v.thickness.value=S.thickness,S.thicknessMap&&(v.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=S.attenuationDistance,v.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(v.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(v.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=S.specularIntensity,v.specularColor.value.copy(S.specularColor),S.specularColorMap&&(v.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,v.specularColorMapTransform)),S.specularIntensityMap&&(v.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,S){S.matcap&&(v.matcap.value=S.matcap)}function b(v,S){const U=t.get(S).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function G1(s,t,i,r){let l={},c={},h=[];const f=i.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(U,R){const F=R.program;r.uniformBlockBinding(U,F)}function p(U,R){let F=l[U.id];F===void 0&&(E(U),F=_(U),l[U.id]=F,U.addEventListener("dispose",v));const k=R.program;r.updateUBOMapping(U,k);const O=t.render.frame;c[U.id]!==O&&(x(U),c[U.id]=O)}function _(U){const R=g();U.__bindingPointIndex=R;const F=s.createBuffer(),k=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,k,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,F),F}function g(){for(let U=0;U<f;U++)if(h.indexOf(U)===-1)return h.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const R=l[U.id],F=U.uniforms,k=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let O=0,z=F.length;O<z;O++){const ue=Array.isArray(F[O])?F[O]:[F[O]];for(let w=0,P=ue.length;w<P;w++){const ne=ue[w];if(y(ne,O,w,k)===!0){const fe=ne.__offset,be=Array.isArray(ne.value)?ne.value:[ne.value];let j=0;for(let ee=0;ee<be.length;ee++){const I=be[ee],W=b(I);typeof I=="number"||typeof I=="boolean"?(ne.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,fe+j,ne.__data)):I.isMatrix3?(ne.__data[0]=I.elements[0],ne.__data[1]=I.elements[1],ne.__data[2]=I.elements[2],ne.__data[3]=0,ne.__data[4]=I.elements[3],ne.__data[5]=I.elements[4],ne.__data[6]=I.elements[5],ne.__data[7]=0,ne.__data[8]=I.elements[6],ne.__data[9]=I.elements[7],ne.__data[10]=I.elements[8],ne.__data[11]=0):(I.toArray(ne.__data,j),j+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,fe,ne.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,R,F,k){const O=U.value,z=R+"_"+F;if(k[z]===void 0)return typeof O=="number"||typeof O=="boolean"?k[z]=O:k[z]=O.clone(),!0;{const ue=k[z];if(typeof O=="number"||typeof O=="boolean"){if(ue!==O)return k[z]=O,!0}else if(ue.equals(O)===!1)return ue.copy(O),!0}return!1}function E(U){const R=U.uniforms;let F=0;const k=16;for(let z=0,ue=R.length;z<ue;z++){const w=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,ne=w.length;P<ne;P++){const fe=w[P],be=Array.isArray(fe.value)?fe.value:[fe.value];for(let j=0,ee=be.length;j<ee;j++){const I=be[j],W=b(I),K=F%k;K!==0&&k-K<W.boundary&&(F+=k-K),fe.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=F,F+=W.storage}}}const O=F%k;return O>0&&(F+=k-O),U.__size=F,U.__cache={},this}function b(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function v(U){const R=U.target;R.removeEventListener("dispose",v);const F=h.indexOf(R.__bindingPointIndex);h.splice(F,1),s.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function S(){for(const U in l)s.deleteBuffer(l[U]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}class i_{constructor(t={}){const{canvas:i=Py(),context:r=null,depth:l=!0,stencil:c=!0,alpha:h=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=h;const y=new Uint32Array(4),E=new Int32Array(4);let b=null,v=null;const S=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const R=this;let F=!1,k=0,O=0,z=null,ue=-1,w=null;const P=new An,ne=new An;let fe=null;const be=new Vt(0);let j=0,ee=i.width,I=i.height,W=1,K=null,se=null;const pe=new An(0,0,ee,I),L=new An(0,0,ee,I);let X=!1;const H=new Yv;let Q=!1,Z=!1,_e=null;const Te=new Rn,Ge=new Nt,Pe=new he,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return z===null?W:1}let te=r;function jt(D,Y){for(let oe=0;oe<D.length;oe++){const ce=D[oe],re=i.getContext(ce,Y);if(re!==null)return re}return null}try{const D={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kd}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",G,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),te===null){const Y=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Y.shift(),te=jt(Y,D),te===null)throw jt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let je,st,Ve,Ot,lt,N,C,ae,Ee,ye,xe,Ze,Le,le,Ue,nt,Se,Et,ft,tt,Ie,Oe,Ke,vt;function Wt(){je=new Qb(te),st=new Wb(te,je,t),je.init(st),Oe=new P1(te,je,st),Ve=new O1(te,je,st),Ot=new eT(te),lt=new S1,N=new z1(te,je,Ve,lt,st,Oe,Ot),C=new qb(R),ae=new Kb(R),Ee=new lM(te,st),Ke=new kb(te,je,Ee,st),ye=new Jb(te,Ee,Ot,Ke),xe=new aT(te,ye,Ee,Ot),ft=new iT(te,st,N),nt=new Xb(lt),Ze=new x1(R,C,ae,je,st,Ke,nt),Le=new H1(R,lt),le=new M1,Ue=new C1(je,st),Et=new Vb(R,C,ae,Ve,xe,x,m),Se=new N1(R,xe,st),vt=new G1(te,Ot,st,Ve),tt=new jb(te,je,Ot,st),Ie=new $b(te,je,Ot,st),Ot.programs=Ze.programs,R.capabilities=st,R.extensions=je,R.properties=lt,R.renderLists=le,R.shadowMap=Se,R.state=Ve,R.info=Ot}Wt();const Je=new B1(R,te);this.xr=Je,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const D=je.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=je.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(ee,I,!1))},this.getSize=function(D){return D.set(ee,I)},this.setSize=function(D,Y,oe=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=D,I=Y,i.width=Math.floor(D*W),i.height=Math.floor(Y*W),oe===!0&&(i.style.width=D+"px",i.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(ee*W,I*W).floor()},this.setDrawingBufferSize=function(D,Y,oe){ee=D,I=Y,W=oe,i.width=Math.floor(D*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(pe)},this.setViewport=function(D,Y,oe,ce){D.isVector4?pe.set(D.x,D.y,D.z,D.w):pe.set(D,Y,oe,ce),Ve.viewport(P.copy(pe).multiplyScalar(W).floor())},this.getScissor=function(D){return D.copy(L)},this.setScissor=function(D,Y,oe,ce){D.isVector4?L.set(D.x,D.y,D.z,D.w):L.set(D,Y,oe,ce),Ve.scissor(ne.copy(L).multiplyScalar(W).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(D){Ve.setScissorTest(X=D)},this.setOpaqueSort=function(D){K=D},this.setTransparentSort=function(D){se=D},this.getClearColor=function(D){return D.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(D=!0,Y=!0,oe=!0){let ce=0;if(D){let re=!1;if(z!==null){const Ne=z.texture.format;re=Ne===Uv||Ne===Lv||Ne===Dv}if(re){const Ne=z.texture.type,Fe=Ne===ga||Ne===Qa||Ne===Qd||Ne===Lr||Ne===Cv||Ne===wv,He=Et.getClearColor(),Xe=Et.getClearAlpha(),qe=He.r,at=He.g,Be=He.b;Fe?(y[0]=qe,y[1]=at,y[2]=Be,y[3]=Xe,te.clearBufferuiv(te.COLOR,0,y)):(E[0]=qe,E[1]=at,E[2]=Be,E[3]=Xe,te.clearBufferiv(te.COLOR,0,E))}else ce|=te.COLOR_BUFFER_BIT}Y&&(ce|=te.DEPTH_BUFFER_BIT),oe&&(ce|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",G,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),le.dispose(),Ue.dispose(),lt.dispose(),C.dispose(),ae.dispose(),xe.dispose(),Ke.dispose(),vt.dispose(),Ze.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Jt),Je.removeEventListener("sessionend",wt),_e&&(_e.dispose(),_e=null),nn.stop()};function Ae(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=Ot.autoReset,Y=Se.enabled,oe=Se.autoUpdate,ce=Se.needsUpdate,re=Se.type;Wt(),Ot.autoReset=D,Se.enabled=Y,Se.autoUpdate=oe,Se.needsUpdate=ce,Se.type=re}function Ce(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Re(D){const Y=D.target;Y.removeEventListener("dispose",Re),$e(Y)}function $e(D){we(D),lt.remove(D)}function we(D){const Y=lt.get(D).programs;Y!==void 0&&(Y.forEach(function(oe){Ze.releaseProgram(oe)}),D.isShaderMaterial&&Ze.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,oe,ce,re,Ne){Y===null&&(Y=ke);const Fe=re.isMesh&&re.matrixWorld.determinant()<0,He=et(D,Y,oe,ce,re);Ve.setMaterial(ce,Fe);let Xe=oe.index,qe=1;if(ce.wireframe===!0){if(Xe=ye.getWireframeAttribute(oe),Xe===void 0)return;qe=2}const at=oe.drawRange,Be=oe.attributes.position;let rt=at.start*qe,Kt=(at.start+at.count)*qe;Ne!==null&&(rt=Math.max(rt,Ne.start*qe),Kt=Math.min(Kt,(Ne.start+Ne.count)*qe)),Xe!==null?(rt=Math.max(rt,0),Kt=Math.min(Kt,Xe.count)):Be!=null&&(rt=Math.max(rt,0),Kt=Math.min(Kt,Be.count));const $t=Kt-rt;if($t<0||$t===1/0)return;Ke.setup(re,ce,He,oe,Xe);let On,zt=tt;if(Xe!==null&&(On=Ee.get(Xe),zt=Ie,zt.setIndex(On)),re.isMesh)ce.wireframe===!0?(Ve.setLineWidth(ce.wireframeLinewidth*ct()),zt.setMode(te.LINES)):zt.setMode(te.TRIANGLES);else if(re.isLine){let dt=ce.linewidth;dt===void 0&&(dt=1),Ve.setLineWidth(dt*ct()),re.isLineSegments?zt.setMode(te.LINES):re.isLineLoop?zt.setMode(te.LINE_LOOP):zt.setMode(te.LINE_STRIP)}else re.isPoints?zt.setMode(te.POINTS):re.isSprite&&zt.setMode(te.TRIANGLES);if(re.isBatchedMesh)zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)zt.renderInstances(rt,$t,re.count);else if(oe.isInstancedBufferGeometry){const dt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Oi=Math.min(oe.instanceCount,dt);zt.renderInstances(rt,$t,Oi)}else zt.render(rt,$t)};function Ct(D,Y,oe){D.transparent===!0&&D.side===ha&&D.forceSinglePass===!1?(D.side=Kn,D.needsUpdate=!0,ki(D,Y,oe),D.side=tr,D.needsUpdate=!0,ki(D,Y,oe),D.side=ha):ki(D,Y,oe)}this.compile=function(D,Y,oe=null){oe===null&&(oe=D),v=Ue.get(oe),v.init(),U.push(v),oe.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(v.pushLight(re),re.castShadow&&v.pushShadow(re))}),D!==oe&&D.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(v.pushLight(re),re.castShadow&&v.pushShadow(re))}),v.setupLights(R._useLegacyLights);const ce=new Set;return D.traverse(function(re){const Ne=re.material;if(Ne)if(Array.isArray(Ne))for(let Fe=0;Fe<Ne.length;Fe++){const He=Ne[Fe];Ct(He,oe,re),ce.add(He)}else Ct(Ne,oe,re),ce.add(Ne)}),U.pop(),v=null,ce},this.compileAsync=function(D,Y,oe=null){const ce=this.compile(D,Y,oe);return new Promise(re=>{function Ne(){if(ce.forEach(function(Fe){lt.get(Fe).currentProgram.isReady()&&ce.delete(Fe)}),ce.size===0){re(D);return}setTimeout(Ne,10)}je.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let At=null;function Zt(D){At&&At(D)}function Jt(){nn.stop()}function wt(){nn.start()}const nn=new Zv;nn.setAnimationLoop(Zt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(D){At=D,Je.setAnimationLoop(D),D===null?nn.stop():nn.start()},Je.addEventListener("sessionstart",Jt),Je.addEventListener("sessionend",wt),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(Y),Y=Je.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,Y,z),v=Ue.get(D,U.length),v.init(),U.push(v),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H.setFromProjectionMatrix(Te),Z=this.localClippingEnabled,Q=nt.init(this.clippingPlanes,Z),b=le.get(D,S.length),b.init(),S.push(b),Nn(D,Y,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(K,se),this.info.render.frame++,Q===!0&&nt.beginShadows();const oe=v.state.shadowsArray;if(Se.render(oe,D,Y),Q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(b,D),v.setupLights(R._useLegacyLights),Y.isArrayCamera){const ce=Y.cameras;for(let re=0,Ne=ce.length;re<Ne;re++){const Fe=ce[re];ir(b,D,Fe,Fe.viewport)}}else ir(b,D,Y);z!==null&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),D.isScene===!0&&D.onAfterRender(R,D,Y),Ke.resetDefaultState(),ue=-1,w=null,U.pop(),U.length>0?v=U[U.length-1]:v=null,S.pop(),S.length>0?b=S[S.length-1]:b=null};function Nn(D,Y,oe,ce){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||H.intersectsSprite(D)){ce&&Pe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Te);const Fe=xe.update(D),He=D.material;He.visible&&b.push(D,Fe,He,oe,Pe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||H.intersectsObject(D))){const Fe=xe.update(D),He=D.material;if(ce&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Pe.copy(D.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(D.matrixWorld).applyMatrix4(Te)),Array.isArray(He)){const Xe=Fe.groups;for(let qe=0,at=Xe.length;qe<at;qe++){const Be=Xe[qe],rt=He[Be.materialIndex];rt&&rt.visible&&b.push(D,Fe,rt,oe,Pe.z,Be)}}else He.visible&&b.push(D,Fe,He,oe,Pe.z,null)}}const Ne=D.children;for(let Fe=0,He=Ne.length;Fe<He;Fe++)Nn(Ne[Fe],Y,oe,ce)}function ir(D,Y,oe,ce){const re=D.opaque,Ne=D.transmissive,Fe=D.transparent;v.setupLightsView(oe),Q===!0&&nt.setGlobalState(R.clippingPlanes,oe),Ne.length>0&&ar(re,Ne,Y,oe),ce&&Ve.viewport(P.copy(ce)),re.length>0&&Ni(re,Y,oe),Ne.length>0&&Ni(Ne,Y,oe),Fe.length>0&&Ni(Fe,Y,oe),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function ar(D,Y,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;const Ne=st.isWebGL2;_e===null&&(_e=new xa(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?Wo:ga,minFilter:jo,samples:Ne?4:0})),R.getDrawingBufferSize(Ge),Ne?_e.setSize(Ge.x,Ge.y):_e.setSize(kd(Ge.x),kd(Ge.y));const Fe=R.getRenderTarget();R.setRenderTarget(_e),R.getClearColor(be),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear();const He=R.toneMapping;R.toneMapping=er,Ni(D,oe,ce),N.updateMultisampleRenderTarget(_e),N.updateRenderTargetMipmap(_e);let Xe=!1;for(let qe=0,at=Y.length;qe<at;qe++){const Be=Y[qe],rt=Be.object,Kt=Be.geometry,$t=Be.material,On=Be.group;if($t.side===ha&&rt.layers.test(ce.layers)){const zt=$t.side;$t.side=Kn,$t.needsUpdate=!0,rr(rt,oe,ce,Kt,$t,On),$t.side=zt,$t.needsUpdate=!0,Xe=!0}}Xe===!0&&(N.updateMultisampleRenderTarget(_e),N.updateRenderTargetMipmap(_e)),R.setRenderTarget(Fe),R.setClearColor(be,j),R.toneMapping=He}function Ni(D,Y,oe){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let re=0,Ne=D.length;re<Ne;re++){const Fe=D[re],He=Fe.object,Xe=Fe.geometry,qe=ce===null?Fe.material:ce,at=Fe.group;He.layers.test(oe.layers)&&rr(He,Y,oe,Xe,qe,at)}}function rr(D,Y,oe,ce,re,Ne){D.onBeforeRender(R,Y,oe,ce,re,Ne),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),re.onBeforeRender(R,Y,oe,ce,D,Ne),re.transparent===!0&&re.side===ha&&re.forceSinglePass===!1?(re.side=Kn,re.needsUpdate=!0,R.renderBufferDirect(oe,Y,ce,re,D,Ne),re.side=tr,re.needsUpdate=!0,R.renderBufferDirect(oe,Y,ce,re,D,Ne),re.side=ha):R.renderBufferDirect(oe,Y,ce,re,D,Ne),D.onAfterRender(R,Y,oe,ce,re,Ne)}function ki(D,Y,oe){Y.isScene!==!0&&(Y=ke);const ce=lt.get(D),re=v.state.lights,Ne=v.state.shadowsArray,Fe=re.state.version,He=Ze.getParameters(D,re.state,Ne,Y,oe),Xe=Ze.getProgramCacheKey(He);let qe=ce.programs;ce.environment=D.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(D.isMeshStandardMaterial?ae:C).get(D.envMap||ce.environment),qe===void 0&&(D.addEventListener("dispose",Re),qe=new Map,ce.programs=qe);let at=qe.get(Xe);if(at!==void 0){if(ce.currentProgram===at&&ce.lightsStateVersion===Fe)return Me(D,He),at}else He.uniforms=Ze.getUniforms(D),D.onBuild(oe,He,R),D.onBeforeCompile(He,R),at=Ze.acquireProgram(He,Xe),qe.set(Xe,at),ce.uniforms=He.uniforms;const Be=ce.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Be.clippingPlanes=nt.uniform),Me(D,He),ce.needsLights=Mi(D),ce.lightsStateVersion=Fe,ce.needsLights&&(Be.ambientLightColor.value=re.state.ambient,Be.lightProbe.value=re.state.probe,Be.directionalLights.value=re.state.directional,Be.directionalLightShadows.value=re.state.directionalShadow,Be.spotLights.value=re.state.spot,Be.spotLightShadows.value=re.state.spotShadow,Be.rectAreaLights.value=re.state.rectArea,Be.ltc_1.value=re.state.rectAreaLTC1,Be.ltc_2.value=re.state.rectAreaLTC2,Be.pointLights.value=re.state.point,Be.pointLightShadows.value=re.state.pointShadow,Be.hemisphereLights.value=re.state.hemi,Be.directionalShadowMap.value=re.state.directionalShadowMap,Be.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Be.spotShadowMap.value=re.state.spotShadowMap,Be.spotLightMatrix.value=re.state.spotLightMatrix,Be.spotLightMap.value=re.state.spotLightMap,Be.pointShadowMap.value=re.state.pointShadowMap,Be.pointShadowMatrix.value=re.state.pointShadowMatrix),ce.currentProgram=at,ce.uniformsList=null,at}function Jn(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=wc.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Me(D,Y){const oe=lt.get(D);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function et(D,Y,oe,ce,re){Y.isScene!==!0&&(Y=ke),N.resetTextureUnits();const Ne=Y.fog,Fe=ce.isMeshStandardMaterial?Y.environment:null,He=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:_a,Xe=(ce.isMeshStandardMaterial?ae:C).get(ce.envMap||Fe),qe=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Be=!!oe.morphAttributes.position,rt=!!oe.morphAttributes.normal,Kt=!!oe.morphAttributes.color;let $t=er;ce.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&($t=R.toneMapping);const On=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=On!==void 0?On.length:0,dt=lt.get(ce),Oi=v.state.lights;if(Q===!0&&(Z===!0||D!==w)){const Gn=D===w&&ce.id===ue;nt.setState(ce,D,Gn)}let Pt=!1;ce.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Oi.state.version||dt.outputColorSpace!==He||re.isBatchedMesh&&dt.batching===!1||!re.isBatchedMesh&&dt.batching===!0||re.isInstancedMesh&&dt.instancing===!1||!re.isInstancedMesh&&dt.instancing===!0||re.isSkinnedMesh&&dt.skinning===!1||!re.isSkinnedMesh&&dt.skinning===!0||re.isInstancedMesh&&dt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&dt.instancingColor===!1&&re.instanceColor!==null||dt.envMap!==Xe||ce.fog===!0&&dt.fog!==Ne||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==nt.numPlanes||dt.numIntersection!==nt.numIntersection)||dt.vertexAlphas!==qe||dt.vertexTangents!==at||dt.morphTargets!==Be||dt.morphNormals!==rt||dt.morphColors!==Kt||dt.toneMapping!==$t||st.isWebGL2===!0&&dt.morphTargetsCount!==zt)&&(Pt=!0):(Pt=!0,dt.__version=ce.version);let pn=dt.currentProgram;Pt===!0&&(pn=ki(ce,Y,re));let _n=!1,Hn=!1,js=!1;const on=pn.getUniforms(),zi=dt.uniforms;if(Ve.useProgram(pn.program)&&(_n=!0,Hn=!0,js=!0),ce.id!==ue&&(ue=ce.id,Hn=!0),_n||w!==D){on.setValue(te,"projectionMatrix",D.projectionMatrix),on.setValue(te,"viewMatrix",D.matrixWorldInverse);const Gn=on.map.cameraPosition;Gn!==void 0&&Gn.setValue(te,Pe.setFromMatrixPosition(D.matrixWorld)),st.logarithmicDepthBuffer&&on.setValue(te,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&on.setValue(te,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,Hn=!0,js=!0)}if(re.isSkinnedMesh){on.setOptional(te,re,"bindMatrix"),on.setOptional(te,re,"bindMatrixInverse");const Gn=re.skeleton;Gn&&(st.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),on.setValue(te,"boneTexture",Gn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(on.setOptional(te,re,"batchingTexture"),on.setValue(te,"batchingTexture",re._matricesTexture,N));const Sa=oe.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0&&st.isWebGL2===!0)&&ft.update(re,oe,pn),(Hn||dt.receiveShadow!==re.receiveShadow)&&(dt.receiveShadow=re.receiveShadow,on.setValue(te,"receiveShadow",re.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(zi.envMap.value=Xe,zi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Hn&&(on.setValue(te,"toneMappingExposure",R.toneMappingExposure),dt.needsLights&&Dt(zi,js),Ne&&ce.fog===!0&&Le.refreshFogUniforms(zi,Ne),Le.refreshMaterialUniforms(zi,ce,W,I,_e),wc.upload(te,Jn(dt),zi,N)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(wc.upload(te,Jn(dt),zi,N),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&on.setValue(te,"center",re.center),on.setValue(te,"modelViewMatrix",re.modelViewMatrix),on.setValue(te,"normalMatrix",re.normalMatrix),on.setValue(te,"modelMatrix",re.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Gn=ce.uniformsGroups;for(let Cn=0,Ws=Gn.length;Cn<Ws;Cn++)if(st.isWebGL2){const Xs=Gn[Cn];vt.update(Xs,pn),vt.bind(Xs,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function Dt(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Mi(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(D,Y,oe){lt.get(D.texture).__webglTexture=Y,lt.get(D.depthTexture).__webglTexture=oe;const ce=lt.get(D);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Y){const oe=lt.get(D);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,oe=0){z=D,k=Y,O=oe;let ce=!0,re=null,Ne=!1,Fe=!1;if(D){const Xe=lt.get(D);Xe.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(te.FRAMEBUFFER,null),ce=!1):Xe.__webglFramebuffer===void 0?N.setupRenderTarget(D):Xe.__hasExternalTextures&&N.rebindTextures(D,lt.get(D.texture).__webglTexture,lt.get(D.depthTexture).__webglTexture);const qe=D.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);const at=lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(at[Y])?re=at[Y][oe]:re=at[Y],Ne=!0):st.isWebGL2&&D.samples>0&&N.useMultisampledRTT(D)===!1?re=lt.get(D).__webglMultisampledFramebuffer:Array.isArray(at)?re=at[oe]:re=at,P.copy(D.viewport),ne.copy(D.scissor),fe=D.scissorTest}else P.copy(pe).multiplyScalar(W).floor(),ne.copy(L).multiplyScalar(W).floor(),fe=X;if(Ve.bindFramebuffer(te.FRAMEBUFFER,re)&&st.drawBuffers&&ce&&Ve.drawBuffers(D,re),Ve.viewport(P),Ve.scissor(ne),Ve.setScissorTest(fe),Ne){const Xe=lt.get(D.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,oe)}else if(Fe){const Xe=lt.get(D.texture),qe=Y||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Xe.__webglTexture,oe||0,qe)}ue=-1},this.readRenderTargetPixels=function(D,Y,oe,ce,re,Ne,Fe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){Ve.bindFramebuffer(te.FRAMEBUFFER,He);try{const Xe=D.texture,qe=Xe.format,at=Xe.type;if(qe!==Si&&Oe.convert(qe)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=at===Wo&&(je.has("EXT_color_buffer_half_float")||st.isWebGL2&&je.has("EXT_color_buffer_float"));if(at!==ga&&Oe.convert(at)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===Ja&&(st.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ce&&oe>=0&&oe<=D.height-re&&te.readPixels(Y,oe,ce,re,Oe.convert(qe),Oe.convert(at),Ne)}finally{const Xe=z!==null?lt.get(z).__webglFramebuffer:null;Ve.bindFramebuffer(te.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(D,Y,oe=0){const ce=Math.pow(2,-oe),re=Math.floor(Y.image.width*ce),Ne=Math.floor(Y.image.height*ce);N.setTexture2D(Y,0),te.copyTexSubImage2D(te.TEXTURE_2D,oe,0,0,D.x,D.y,re,Ne),Ve.unbindTexture()},this.copyTextureToTexture=function(D,Y,oe,ce=0){const re=Y.image.width,Ne=Y.image.height,Fe=Oe.convert(oe.format),He=Oe.convert(oe.type);N.setTexture2D(oe,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,oe.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,oe.unpackAlignment),Y.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,ce,D.x,D.y,re,Ne,Fe,He,Y.image.data):Y.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,ce,D.x,D.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Fe,Y.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,ce,D.x,D.y,Fe,He,Y.image),ce===0&&oe.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,oe,ce,re=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=D.max.x-D.min.x+1,Fe=D.max.y-D.min.y+1,He=D.max.z-D.min.z+1,Xe=Oe.convert(ce.format),qe=Oe.convert(ce.type);let at;if(ce.isData3DTexture)N.setTexture3D(ce,0),at=te.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)N.setTexture2DArray(ce,0),at=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ce.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ce.unpackAlignment);const Be=te.getParameter(te.UNPACK_ROW_LENGTH),rt=te.getParameter(te.UNPACK_IMAGE_HEIGHT),Kt=te.getParameter(te.UNPACK_SKIP_PIXELS),$t=te.getParameter(te.UNPACK_SKIP_ROWS),On=te.getParameter(te.UNPACK_SKIP_IMAGES),zt=oe.isCompressedTexture?oe.mipmaps[re]:oe.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,zt.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,zt.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,D.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,D.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,D.min.z),oe.isDataTexture||oe.isData3DTexture?te.texSubImage3D(at,re,Y.x,Y.y,Y.z,Ne,Fe,He,Xe,qe,zt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(at,re,Y.x,Y.y,Y.z,Ne,Fe,He,Xe,zt.data)):te.texSubImage3D(at,re,Y.x,Y.y,Y.z,Ne,Fe,He,Xe,qe,zt),te.pixelStorei(te.UNPACK_ROW_LENGTH,Be),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,rt),te.pixelStorei(te.UNPACK_SKIP_PIXELS,Kt),te.pixelStorei(te.UNPACK_SKIP_ROWS,$t),te.pixelStorei(te.UNPACK_SKIP_IMAGES,On),re===0&&ce.generateMipmaps&&te.generateMipmap(at),Ve.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?N.setTextureCube(D,0):D.isData3DTexture?N.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?N.setTexture2DArray(D,0):N.setTexture2D(D,0),Ve.unbindTexture()},this.resetState=function(){k=0,O=0,z=null,Ve.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Jd?"display-p3":"srgb",i.unpackColorSpace=Gt.workingColorSpace===Bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tn?Nr:Ov}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Nr?Tn:_a}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class V1 extends i_{}V1.prototype.isWebGL1Renderer=!0;class k1 extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class j1 extends Qn{constructor(t,i,r,l,c,h,f,m,p){super(t,i,r,l,c,h,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);const W1=`
varying vec2 vUv;
uniform sampler2D tOld; // Previous Frame
uniform sampler2D tNew; // Current Incoming Frame
uniform float uFeedback; // 0.0 - 1.0
uniform float uDecay;    // 0.0 - 1.0 (Darkening)
uniform float uWarp;     // Strength of Luma displacement
uniform float uBlockSize; // Quantization for macroblock look
uniform float uRGBOffset; // Chroma separation strength
uniform vec2 uResolution;
uniform bool uReset;      // Hard I-Frame reset

// Displacement Uniforms
uniform float uTime;
uniform float uDispStrength; // Noise warp strength
uniform float uDispScale;    // Noise frequency
uniform float uDispSpeed;    // Noise animation speed
uniform float uDispQuantize; // Quantization of noise UVs

// --- RANDOM & NOISE ---
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {
    // If reset is triggered (I-Frame), just output the new frame
    if (uReset) {
        gl_FragColor = texture2D(tNew, vUv);
        return;
    }

    // --- TIME STEPPING ---
    // Quantize time to create a "stop motion" stutter effect
    // This prevents static images from vibrating uncontrollably
    float speed = max(1.0, uDispSpeed);
    float steppedTime = floor(uTime * speed); 

    vec2 uv = vUv;
    
    // --- 1. UV TEARING (Map & Destroy) ---
    // Instead of liquid noise, we displace strips of the image horizontally
    
    // Create random strips based on Y coordinate and Stepped Time
    float stripSize = max(0.01, 1.0 / uDispScale);
    float stripId = floor(uv.y / stripSize);
    
    // Determine shift amount for this strip
    float shift = (noise(vec2(stripId, steppedTime)) - 0.5) * 2.0;
    
    // Apply Strength
    float strength = uDispStrength * 0.01;
    
    // Threshold - only move some strips
    float threshold = 0.4; // 40% of strips might move
    if (abs(shift) < threshold) shift = 0.0;
    
    vec2 tornUv = uv;
    tornUv.x += shift * strength;

    // --- 2. LUMA WARP (From Input) ---
    // Use the brightness of the NEW image to warp the OLD image
    // This makes the glitch react to the image content
    vec4 currentPixel = texture2D(tNew, vUv);
    float luma = dot(currentPixel.rgb, vec3(0.299, 0.587, 0.114));
    
    vec2 lumaOffset = vec2(
        (luma - 0.5) * (uWarp * 0.005),
        (luma - 0.5) * (uWarp * 0.005) 
    );
    
    vec2 finalReadUv = tornUv + lumaOffset;

    // --- 3. FEEDBACK SAMPLE ---
    vec4 oldCol;
    
    if (uRGBOffset > 0.0) {
        float off = uRGBOffset * 0.002;
        float r = texture2D(tOld, finalReadUv + vec2(off, 0.0)).r;
        float g = texture2D(tOld, finalReadUv).g;
        float b = texture2D(tOld, finalReadUv - vec2(off, 0.0)).b;
        oldCol = vec4(r, g, b, 1.0);
    } else {
        oldCol = texture2D(tOld, finalReadUv);
    }

    // --- 4. MIX & OUTPUT ---
    vec4 newCol = texture2D(tNew, vUv);

    // Temporal Blend
    vec4 mixedCol = mix(newCol, oldCol, uFeedback);
    
    // Decay
    mixedCol.rgb -= (uDecay * 0.01);
    mixedCol = max(vec4(0.0), mixedCol); // Clamp to black

    gl_FragColor = vec4(mixedCol.rgb, 1.0);
}
`,X1=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;class q1{constructor(){this.width=0,this.height=0,this.frameCounter=0,this._sourceTexture=null,this.renderer=new i_({alpha:!0,preserveDrawingBuffer:!0}),this.renderer.autoClear=!1,this.scene=new k1,this.camera=new Kv(-1,1,1,-1,0,1);const t={minFilter:Un,magFilter:Un,format:Si,type:ga};this.targetA=new xa(1,1,t),this.targetB=new xa(1,1,t),this.material=new nr({uniforms:{tOld:{value:null},tNew:{value:null},uTime:{value:0},uFeedback:{value:.9},uDecay:{value:0},uWarp:{value:10},uBlockSize:{value:32},uRGBOffset:{value:0},uDispStrength:{value:0},uDispScale:{value:20},uDispSpeed:{value:10},uDispQuantize:{value:0},uResolution:{value:new Nt(1,1)},uReset:{value:!1}},vertexShader:X1,fragmentShader:W1}),this.quad=new ma(new Vc(2,2),this.material),this.scene.add(this.quad)}resize(t,i){(this.width!==t||this.height!==i)&&(this.width=t,this.height=i,this.renderer.setSize(t,i),this.targetA.setSize(t,i),this.targetB.setSize(t,i),this.material.uniforms.uResolution.value.set(t,i))}clear(){this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(this.targetA),this.renderer.clear(),this.renderer.setRenderTarget(this.targetB),this.renderer.clear(),this.renderer.setRenderTarget(null),this.frameCounter=0,this._sourceTexture&&(this._sourceTexture.dispose(),this._sourceTexture=null)}render(t,i,r){this.resize(t.width,t.height),this.frameCounter++;const l=this.material.uniforms;this._sourceTexture?(this._sourceTexture.image=t,this._sourceTexture.needsUpdate=!0):(this._sourceTexture=new j1(t),this._sourceTexture.minFilter=Un,this._sourceTexture.magFilter=Un),l.tNew.value=this._sourceTexture,l.tOld.value=this.targetA.texture,l.uTime.value=r,l.uFeedback.value=i.moshFeedback/100,l.uDecay.value=i.moshDecay,l.uWarp.value=i.moshWarp,l.uBlockSize.value=Math.max(1,i.moshBlockSize*2),l.uRGBOffset.value=i.moshRGBOffset,l.uDispStrength.value=i.moshDispStrength,l.uDispScale.value=i.moshDispScale,l.uDispSpeed.value=i.moshDispSpeed,l.uDispQuantize.value=i.moshDispQuantize;const h=this.frameCounter===1||i.iframeInterval>0&&this.frameCounter%i.iframeInterval===0;l.uReset.value=h,this.renderer.setRenderTarget(this.targetB),this.renderer.render(this.scene,this.camera);const f=this.targetA;return this.targetA=this.targetB,this.targetB=f,this.renderer.setRenderTarget(null),this.material.uniforms.tNew.value=this.targetA.texture,this.material.uniforms.uReset.value=!0,this.renderer.render(this.scene,this.camera),this.renderer.domElement}}const Wd=new q1,Ka={frameCounter:0,lastInjectTime:0,isInjecting:!1,injectFrameCount:0,historyFrames:[],prevShaderMoshEnabled:!1},a_=60,_i={input:document.createElement("canvas"),compose:document.createElement("canvas"),jpeg:document.createElement("canvas"),mosh:document.createElement("canvas"),swap:document.createElement("canvas"),hold:document.createElement("canvas"),prev:document.createElement("canvas")},Y1=()=>({inCtx:_i.input.getContext("2d",{willReadFrequently:!0}),compCtx:_i.compose.getContext("2d",{willReadFrequently:!0}),jpgCtx:_i.jpeg.getContext("2d",{willReadFrequently:!0}),moshCtx:_i.mosh.getContext("2d",{willReadFrequently:!0}),swapCtx:_i.swap.getContext("2d",{willReadFrequently:!0}),holdCtx:_i.hold.getContext("2d",{willReadFrequently:!0}),prevCtx:_i.prev.getContext("2d",{willReadFrequently:!0})}),sn=(s,t,i)=>{const r=Math.sin(i)*1e4,l=r-Math.floor(r);return Math.floor(l*(t-s+1))+s},Z1=()=>{Ka.frameCounter=0,Ka.historyFrames=[],Ka.lastInjectTime=0,Ka.isInjecting=!1,Ka.injectFrameCount=0,Ka.prevShaderMoshEnabled=!1,Wd.clear(),Object.values(_i).forEach(s=>{var t;(t=s.getContext("2d"))==null||t.clearRect(0,0,s.width,s.height)})};function r_(){return{state:Ka,buffers:_i}}function K1(s,t,i,r,l,c){const h=Math.max(0,Math.min(1,(Number.isFinite(i)?i:0)/100)),f=Math.max(0,Math.min(1,(Number.isFinite(r)?r:0)/100));t.save(),f<=0?(t.globalAlpha=1,t.globalCompositeOperation="source-over",t.clearRect(0,0,l,c)):(t.globalCompositeOperation="destination-out",t.globalAlpha=1-f,t.fillStyle="#000000",t.fillRect(0,0,l,c),t.globalCompositeOperation="source-over",t.globalAlpha=1),t.drawImage(s.buffers.input,0,0,l,c),h>0&&(t.globalCompositeOperation="screen",t.globalAlpha=h,t.fillStyle="#FFFFFF",t.fillRect(0,0,l,c)),t.restore(),s.state.historyFrames.length=0}function Q1(s,t,i,r,l,c){let h=s.buffers.mosh;const f=Math.max(0,Math.min(100,i.refSwap));if(f>0&&s.state.historyFrames.length>0){const y=b=>{const v=Math.sin(b)*1e4;return v-Math.floor(v)};if(y(c)*100<f){const b=Math.floor(y(c+1)*s.state.historyFrames.length);h=s.state.historyFrames[b]}}t.save(),t.clearRect(0,0,r,l);const m=(i.motionResidue??0)/100;let p=1+i.flowZoom/500,_=i.flowRotate*Math.PI/180,g=i.flowX,x=i.flowY;if(m>0){const y=Math.floor(c*10),E=Math.sin(y*.1)*m*.5,b=Math.cos(y*.1)*m*.5,v=Math.sin(y*.2)*m*.01,S=Math.cos(y*.3)*m*.001;g+=E,x+=b,_+=v,p+=S}t.translate(r/2+g,l/2+x),t.rotate(_),t.scale(p,p),t.translate(-r/2,-l/2),t.drawImage(h,0,0,r,l),t.restore()}function J1(s,t,i,r,l){const c=Math.max(0,Math.min(100,i));t.save(),c<100&&(t.globalCompositeOperation="destination-out",t.globalAlpha=(100-c)*.01,t.fillStyle="#000000",t.fillRect(0,0,r,l)),t.globalCompositeOperation="source-over",t.globalAlpha=1,t.drawImage(s.buffers.swap,0,0,r,l),t.restore()}function $1(s,t,i,r,l,c){const h=Math.max(8,i.blockSize),f=Math.ceil(r/h),m=Math.ceil(l/h),p=Math.max(0,Math.min(100,i.blockList))/100,_=f*m,g=Math.floor(_*p*.1),x=(y,E,b)=>{const v=Math.sin(b)*1e4,S=v-Math.floor(v);return Math.floor(S*(E-y+1))+y};t.save();for(let y=0;y<g;y++){const E=x(0,f,c+y),b=x(0,m,c+y+1),v=E*h,S=b*h,U=x(-2,2,c+y*2)*h,R=x(-2,2,c+y*3)*h,F=Math.max(0,Math.min(r-h,v+U)),k=Math.max(0,Math.min(l-h,S+R));t.drawImage(s.buffers.mosh,F,k,h,h,v,S,h,h)}t.restore()}function mv(s,t,i){const r=new Uint8Array(t*i);for(let l=0,c=0;l<s.length;l+=4,c++){const h=s[l],f=s[l+1],m=s[l+2];r[c]=(h*299+f*587+m*114)/1e3}return r}function eA(s,t,i,r,l,c){const h=s.buffers.prev.getContext("2d",{willReadFrequently:!0}),f=s.buffers.input.getContext("2d",{willReadFrequently:!0});if(!h||!f)return;if(s.buffers.prev.width!==i||s.buffers.prev.height!==r){s.buffers.prev.width=i,s.buffers.prev.height=r,h.clearRect(0,0,i,r),h.drawImage(s.buffers.input,0,0,i,r);return}const m=i,p=r,_=Math.max(8,Math.floor(l)),g=Math.ceil(m/_),x=Math.ceil(p/_),y=Math.max(0,Math.floor(c)),E=h.getImageData(0,0,m,p).data,b=f.getImageData(0,0,m,p).data,v=mv(E,m,p),S=mv(b,m,p);t.save(),t.clearRect(0,0,m,p);for(let U=0;U<x;U++)for(let R=0;R<g;R++){const F=R*_,k=U*_,O=Math.min(_,m-F),z=Math.min(_,p-k);let ue=0,w=0,P=Number.POSITIVE_INFINITY;for(let be=-y;be<=y;be++)for(let j=-y;j<=y;j++){let ee=0,I=0;const W=F+j*_,K=k+be*_;if(W<0||K<0||W+O>m||K+z>p)continue;for(let pe=0;pe<z;pe+=4){const L=(k+pe)*m+F,X=(K+pe)*m+W;for(let H=0;H<O;H+=4)ee+=Math.abs(S[L+H]-v[X+H]),I++}const se=ee/Math.max(1,I);se<P&&(P=se,ue=j,w=be)}const ne=F+ue*_,fe=k+w*_;t.drawImage(s.buffers.prev,ne,fe,O,z,F,k,O,z)}t.restore()}const Hi=(s,t,i)=>{const r=Math.sin(i)*1e4,l=r-Math.floor(r);return Math.floor(l*(t-s+1))+s},Bn=s=>(Math.sin(s)+Math.sin(s*2.1)+Math.sin(s*4.4))/3+.5,Cc=(s,t,i)=>{const r=s+t*57+i*131,l=r<<13^r;return 1-(l*(l*l*15731+789221)+1376312589&2147483647)/1073741824},gv=(s,t,i)=>{const r=Math.floor(s),l=s-r,c=Math.floor(t),h=t-c,f=Cc(r,c,i),m=Cc(r+1,c,i),p=Cc(r,c+1,i),_=Cc(r+1,c+1,i),g=f*(1-l)+m*l,x=p*(1-l)+_*l;return g*(1-h)+x*h};function tA(s,t,i,r,l,c,h){if(r.melt<=0)return;i.save(),i.clearRect(0,0,l,c),i.drawImage(s.buffers.compose,0,0,l,c);const f=Math.max(0,Math.min(100,r.melt))/100,m=Math.max(0,Math.min(100,r.burn))/100,p=Math.ceil(l/Math.max(2,8-f*6)),_=l/p;t.save(),m>.5?t.globalCompositeOperation="hard-light":m>.3&&(t.globalCompositeOperation="overlay");const g=Math.ceil(f*3)+1;for(let x=0;x<g;x++){const y=1/g;t.globalAlpha=y;for(let E=0;E<p;E++){const b=E*_,v=E*99.1+x*50,S=f*2,U=Math.sin(h*S+E*.2)*.5+.5,R=Math.sin(h*S*.5+E*.5)*.3,F=Bn(E*3+h*.5)*.2,k=U+R+F,O=f*c*.9,z=(Bn(v+h)-.5)*c*f*.3,ue=k*c*f*.4;let w=O*(U*.5+.5)+z+ue;if(m>0){const fe=(Bn(v+h*2)-.5)*c*m*.5;w+=fe}f>.5&&Bn(E*7+h)>.85&&(w*=1.5+m*.5);const P=(Bn(E*11+h*1.5)-.5)*_*f*2,ne=1+(Bn(E*13+h)-.5)*f*.15;t.drawImage(s.buffers.swap,b,0,_,c,b+P,w,_,c*ne)}}t.globalAlpha=1,t.globalCompositeOperation="source-over",t.restore(),i.restore()}function nA(s,t,i,r,l,c,h){if(r<=0)return;i.save(),i.clearRect(0,0,l,c),i.drawImage(s.buffers.compose,0,0,l,c);const f=Math.max(0,Math.min(100,r))/100,m=3,p=80-f*50,_=(m+p)/2,g=Math.ceil(l/_);t.save(),t.clearRect(0,0,l,c);let x=0;for(let y=0;y<g&&x<l;y++){const E=(Bn(y*17+h*.5)-.5)*(p-m),b=Math.max(m,Math.min(p,_+E)),v=Bn(y*20.2+h),S=Math.sin(y*.5+h*2),R=(v*.6+(S*.5+.5)*.4-.5)*c*f,k=(y%2===0?1:-1)*f*c*.2*(v>.7?1:0),O=R+k;if(f>.6&&Bn(y*23+h)>.9){t.save();const ue=x+b/2,w=c/2+O;t.translate(ue,w),t.rotate((Bn(y*29+h)-.5)*Math.PI*f*.3),t.drawImage(s.buffers.swap,x,0,b,c,-b/2,-c/2-O,b,c),t.restore()}else t.drawImage(s.buffers.swap,x,0,b,c,x,O,b,c),O>0?t.drawImage(s.buffers.swap,x,c-O,b,O,x,0,b,O):O<0&&t.drawImage(s.buffers.swap,x,0,b,-O,x,c+O,b,-O);x+=b}t.restore(),i.restore()}function iA(s,t,i,r,l,c,h){const f=Math.max(0,Math.min(100,r.scatter))/100;if(f<=0)return;const m=Math.max(0,Math.min(100,r.burn))/100,p=Math.floor(f*120)+10;t.save();for(let _=0;_<p;_++){const g=h*10+_*133.7,x=Bn(g)*f;let y,E;x>.8?(y=Hi(l/10,l/3,g),E=Hi(c/10,c/3,g+1)):x>.5?(y=Hi(l/20,l/8,g),E=Hi(c/20,c/8,g+1)):(y=Hi(5,l/15,g),E=Hi(5,c/15,g+1));const b=Hi(0,Math.max(1,l-y),g+2),v=Hi(0,Math.max(1,c-E),g+3),S=f*200,U=gv(_*.1,h*.1,g)*S,R=gv(_*.1,h*.1,g+100)*S*.5,F=b+U+Hi(-50,50,g+4)*f,k=v+R+Hi(-30,30,g+5)*f;if(m>.3){const w=Bn(g+10);w>.85?t.globalCompositeOperation="difference":w>.7?t.globalCompositeOperation="color-dodge":w>.55?t.globalCompositeOperation="overlay":w>.4&&(t.globalCompositeOperation="screen")}const O=1+(Bn(g+20)-.5)*f*.4,z=f>.7?(Bn(g+30)-.5)*Math.PI*.3*f:0,ue=.7+Bn(g+40)*.3;if(t.globalAlpha=ue,Math.abs(z)>.01||Math.abs(O-1)>.01){t.save();const w=F+y*O/2,P=k+E*O/2;t.translate(w,P),t.rotate(z),t.scale(O,O),t.drawImage(i,b,v,y,E,-y/2,-E/2,y,E),t.restore()}else t.drawImage(i,b,v,y,E,F,k,y*O,E*O);t.globalCompositeOperation="source-over",t.globalAlpha=1}t.restore()}function aA(s,t,i,r,l,c="brightness"){if(t<=0)return;const h=s.getImageData(0,0,i,r),f=h.data,m=Math.max(0,Math.min(100,t))/100,p=Math.floor(r*m),_=Math.floor((r-p)/2);for(let g=_;g<_+p;g++){const x=Math.floor(1+m*10);for(let y=0;y<x;y++){const E=Math.floor(y/x*i),b=Math.floor((y+1)/x*i),v=[];for(let S=E;S<b;S++){const U=(g*i+S)*4,R=f[U],F=f[U+1],k=f[U+2],O=f[U+3];let z;c==="brightness"?z=(R+F+k)/3:c==="hue"?z=R:z=(R+F*2+k)/4,v.push([z,R,F,k,O])}v.sort((S,U)=>S[0]-U[0]);for(let S=E;S<b;S++){const U=S-E,R=v[U],F=(g*i+S)*4;f[F]=R[1],f[F+1]=R[2],f[F+2]=R[3],f[F+3]=R[4]}}}s.putImageData(h,0,0)}function rA(s,t,i,r,l){if(l<=0)return;const c=s.getImageData(0,0,t.width,t.height),h=c.data,f=new Uint8ClampedArray(h.length),m=Math.max(0,Math.min(100,l))/100,p=Math.floor(i*m),_=Math.floor(r*m);for(let g=0;g<t.height;g++)for(let x=0;x<t.width;x++){const y=(g*t.width+x)*4,E=Math.max(0,Math.min(t.width-1,x+p)),v=(Math.max(0,Math.min(t.height-1,g))*t.width+E)*4,S=y,U=Math.max(0,Math.min(t.width-1,x-p)),F=(Math.max(0,Math.min(t.height-1,g+_))*t.width+U)*4;f[y]=h[v],f[y+1]=h[S+1],f[y+2]=h[F+2],f[y+3]=h[y+3]}for(let g=0;g<h.length;g++)h[g]=f[g];s.putImageData(c,0,0)}let Us=null,sA=0;const Ic=new Map;let ko=!1,xi=null,Xd="",qd=0,Yd=0;function oA(){if(Us)return Us;try{Us=new Worker(new URL("/errorhead/assets/jpegWorker-Dyb2ocJr.js",import.meta.url),{type:"module"}),Us.onmessage=s=>{const t=s.data;if(!t||t.type!=="result")return;const i=Ic.get(t.id);Ic.delete(t.id),i&&i(t.ok?t.imageBitmap:null)}}catch{Us=null}return Us}async function lA(s,t,i,r,l,c,h,f){if(!("Worker"in window)||!("createImageBitmap"in window)||!window.OffscreenCanvas)return null;const m=oA();if(!m)return null;const p=await createImageBitmap(s),_=++sA,g=new Promise(x=>Ic.set(_,x));return m.postMessage({id:_,type:"encodeCorrupt",width:t,height:i,quality:r,amount:l,iterations:c,bitmap:p,seed:h,mode:f},[p]),g}function cA(s){let t=s>>>0;return function(){t+=1831565813;let r=Math.imul(t^t>>>15,1|t);return r^=r+Math.imul(r^r>>>7,61|r),((r^r>>>14)>>>0)/4294967296}}async function uA(s,t,i,r,l,c,h,f){var m;try{const p=cA(h),_=document.createElement("canvas");_.width=t,_.height=i,_.getContext("2d").drawImage(s,0,0);const x=await((m=_.convertToBlob)==null?void 0:m.call(_,{type:"image/jpeg",quality:r}))||await(await fetch(_.toDataURL("image/jpeg",r))).blob(),y=new Uint8Array(await x.arrayBuffer()),E=f==="safe"?256:32;for(let S=0;S<c;S++){const U=Math.floor(E+p()*(y.length-E-10));p()<l/100&&(y[U]=y[U]+Math.floor(p()*255)&255)}const b=new Blob([y],{type:"image/jpeg"});return await createImageBitmap(b)}catch{return null}}const fA=async(s,t,i,r,l,c,h)=>{if(r.amount<=0)return s;const f=i.getContext("2d"),m=Math.max(.01,Math.min(1,r.quality/100)),p=`${c}x${h}|q${m}|a${r.amount}|i${r.iterations}`,_=performance.now();return xi&&(f.clearRect(0,0,c,h),f.drawImage(xi,0,0,c,h)),!ko&&(p!==Xd||_-qd>80)&&(ko=!0,Xd=p,(async()=>{const y=((r.seed??0)^Math.floor(l*1e3))>>>0;let E=await lA(s,c,h,m,r.amount,r.iterations,y,r.corruptMode||"safe");if(!E&&_>Yd&&(E=await uA(s,c,h,m,r.amount,r.iterations,y,r.corruptMode||"safe"),Yd=performance.now()+120),E){if(xi)try{xi.close()}catch{}xi=E,qd=performance.now()}ko=!1})()),xi?i:s};function dA(){return{hasBitmap:!!xi,inFlight:ko}}function hA(){var s;try{xi&&((s=xi.close)==null||s.call(xi))}catch{}xi=null,Xd="",qd=0,ko=!1,Yd=0,Ic.clear()}const pA=(s,t,i,r,l,c)=>{const h=_i.jpeg.getContext("2d"),f=100+i.amount/10,m=`brightness(${i.brightness}%) contrast(${f}%)`,p=i.rgbShift+i.colorOffset,_=i.redShift-p*.5,g=i.greenShift,x=i.blueShift+p*.5;if(_!==0||g!==0||x!==0){s.globalCompositeOperation="source-over",s.fillStyle="#000000",s.fillRect(0,0,r,l),s.globalCompositeOperation="screen";const y=(E,b)=>{h.globalCompositeOperation="source-over",h.clearRect(0,0,r,l),h.filter=m,h.drawImage(t,0,0),h.filter="none",h.globalCompositeOperation="multiply",h.fillStyle=E,h.fillRect(0,0,r,l),s.drawImage(_i.jpeg,b,0)};y("#FF0000",_),y("#00FF00",g),y("#0000FF",x),s.globalCompositeOperation="source-over"}else s.filter=m,s.drawImage(t,0,0,r,l),s.filter="none";if(i.scanlines){s.fillStyle=`rgba(0, 0, 0, ${i.scanlineIntensity/200})`;for(let y=0;y<l;y+=4)s.fillRect(0,y,r,2)}if(i.noise>0){const y=i.noise/100*.15;s.fillStyle=`rgba(255, 255, 255, ${y})`;const E=Math.floor(i.noise*.3);for(let b=0;b<E;b++){const v=sn(10,r/2,c+b),S=sn(0,r-v,c+b+1),U=sn(0,l,c+b+2);s.fillRect(S,U,v,1)}}};function vv(s,t,i){const r=s.createShader(t);if(s.shaderSource(r,i),s.compileShader(r),!s.getShaderParameter(r,s.COMPILE_STATUS)){const l=s.getShaderInfoLog(r);throw s.deleteShader(r),new Error("Shader compilation failed: "+l)}return r}function _v(s,t,i){const r=s.createProgram(),l=vv(s,s.VERTEX_SHADER,t),c=vv(s,s.FRAGMENT_SHADER,i);if(s.attachShader(r,l),s.attachShader(r,c),s.linkProgram(r),!s.getProgramParameter(r,s.LINK_STATUS)){const h=s.getProgramInfoLog(r);throw s.deleteProgram(r),new Error("Program linking failed: "+h)}return r}function mA(s){return s.getExtension("EXT_color_buffer_float")?{internal:s.RGBA16F,format:s.RGBA,type:s.HALF_FLOAT}:{internal:s.RGBA8,format:s.RGBA,type:s.UNSIGNED_BYTE}}function Nd(s,t,i,r){const l=s.createTexture();return s.bindTexture(s.TEXTURE_2D,l),s.texImage2D(s.TEXTURE_2D,0,r.internal,t,i,0,r.format,r.type,null),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),l}function xv(s,t){const i=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,i),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,t,0),i}const Sv=`#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,gA=`#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_prev;
uniform sampler2D u_source;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_persistence;
uniform float u_injection;
uniform float u_flowAmp;
uniform float u_flowScale;
uniform float u_flowSpeed;
uniform vec2 u_drift;
uniform float u_globalRot;
uniform float u_globalZoom;
uniform float u_diffusion;

// Simple hash for noise
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// 2D Noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Curl-ish noise flow
vec2 getFlow(vec2 p, float time) {
    float n1 = noise(p * u_flowScale + time * u_flowSpeed);
    float n2 = noise(p * u_flowScale + time * u_flowSpeed + 5.0);
    return vec2(n1 - 0.5, n2 - 0.5) * u_flowAmp;
}

void main() {
    vec2 uv = vUv;
    
    // 1. Calculate Flow
    vec2 flow = getFlow(uv, u_time);
    
    // 2. Apply Global Transforms (Drift, Rot, Zoom)
    vec2 center = vec2(0.5);
    vec2 toCenter = uv - center;
    
    // Zoom
    toCenter /= (1.0 + u_globalZoom * 0.01);
    
    // Rotate
    float s = sin(u_globalRot);
    float c = cos(u_globalRot);
    toCenter = vec2(toCenter.x * c - toCenter.y * s, toCenter.x * s + toCenter.y * c);
    
    vec2 warpedUv = center + toCenter + flow + u_drift;
    
    // 3. Accumulate with Diffusion
    vec4 prev;
    if (u_diffusion > 0.0) {
        vec2 off = u_diffusion / u_resolution;
        prev = texture(u_prev, warpedUv) * 0.4;
        prev += texture(u_prev, warpedUv + vec2(off.x, 0.0)) * 0.15;
        prev += texture(u_prev, warpedUv - vec2(off.x, 0.0)) * 0.15;
        prev += texture(u_prev, warpedUv + vec2(0.0, off.y)) * 0.15;
        prev += texture(u_prev, warpedUv - vec2(0.0, off.y)) * 0.15;
    } else {
        prev = texture(u_prev, warpedUv);
    }
    
    // 4. Sample Source
    vec4 src = texture(u_source, vUv);
    
    // 5. Blend
    vec4 final = prev * u_persistence;
    final = mix(final, src, u_injection);
    
    fragColor = vec4(final.rgb, 1.0);
}
`,vA=`#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_texture;
uniform float u_time;
uniform float u_grain;
uniform float u_chroma;
uniform float u_vignette;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    // 1. Chromatic Aberration
    float r = texture(u_texture, vUv + vec2(u_chroma, 0.0)).r;
    float g = texture(u_texture, vUv).g;
    float b = texture(u_texture, vUv - vec2(u_chroma, 0.0)).b;
    vec3 color = vec3(r, g, b);
    
    // 2. Film Grain
    float noise = hash(vUv + u_time);
    color += (noise - 0.5) * u_grain;
    
    // 3. Vignette
    float d = distance(vUv, vec2(0.5));
    color *= smoothstep(0.8, 0.5, d * u_vignette);
    
    // 4. Contrast Curve (Simple Gamma/S-Curve)
    color = pow(color, vec3(1.1)); 
    
    fragColor = vec4(color, 1.0);
}
`;class _A{constructor(){if(this.width=0,this.height=0,this.isPing=!0,this._lastUploadOk=!1,this._lastGLError=0,this.canvas=document.createElement("canvas"),this.gl=this.canvas.getContext("webgl2",{preserveDrawingBuffer:!0,alpha:!1,antialias:!1}),!this.gl)throw new Error("WebGL2 not supported");this.moshProgram=_v(this.gl,Sv,gA),this.postProgram=_v(this.gl,Sv,vA),this.quadBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.quadBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW)}init(t,i){if(this.width===t&&this.height===i)return;this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i;const r=this.gl,l=mA(r);this.pingTex&&r.deleteTexture(this.pingTex),this.pongTex&&r.deleteTexture(this.pongTex),this.pingFbo&&r.deleteFramebuffer(this.pingFbo),this.pongFbo&&r.deleteFramebuffer(this.pongFbo),this.sourceTex&&r.deleteTexture(this.sourceTex),this.pingTex=Nd(r,t,i,l),this.pongTex=Nd(r,t,i,l),this.pingFbo=xv(r,this.pingTex),this.pongFbo=xv(r,this.pongTex),this.sourceTex=Nd(r,t,i,{internal:r.RGBA8,format:r.RGBA,type:r.UNSIGNED_BYTE}),r.viewport(0,0,t,i),r.clearColor(0,0,0,1),r.bindFramebuffer(r.FRAMEBUFFER,this.pingFbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,this.pongFbo),r.clear(r.COLOR_BUFFER_BIT)}render(t,i,r){var v;this.init(Number(r instanceof HTMLVideoElement?r.videoWidth:r.width),Number(r instanceof HTMLVideoElement?r.videoHeight:r.height));const l=this.gl,{moshProgram:c,postProgram:h}=this;l.bindTexture(l.TEXTURE_2D,this.sourceTex),l.texSubImage2D(l.TEXTURE_2D,0,0,0,l.RGBA,l.UNSIGNED_BYTE,r),this._lastGLError=((v=l.getError)==null?void 0:v.call(l))??0,this._lastUploadOk=this._lastGLError===0;const f=this.isPing?this.pongFbo:this.pingFbo,m=this.isPing?this.pingTex:this.pongTex;l.bindFramebuffer(l.FRAMEBUFFER,f),l.useProgram(c);const p=Math.max(0,Math.min(1,t.feedback/100)),_=t.moshInjection??.05+(1-p)*.2,g=S=>l.getUniformLocation(c,S);l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,m),l.uniform1i(g("u_prev"),0),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,this.sourceTex),l.uniform1i(g("u_source"),1),l.uniform2f(g("u_resolution"),this.width,this.height),l.uniform1f(g("u_time"),i),l.uniform1f(g("u_persistence"),p),l.uniform1f(g("u_injection"),_),l.uniform1f(g("u_flowAmp"),(t.moshWarp||0)*5e-4),l.uniform1f(g("u_flowScale"),2),l.uniform1f(g("u_flowSpeed"),1),l.uniform2f(g("u_drift"),t.flowX/this.width,-t.flowY/this.height),l.uniform1f(g("u_globalRot"),t.flowRotate*Math.PI/180),l.uniform1f(g("u_globalZoom"),t.flowZoom),l.uniform1f(g("u_diffusion"),t.moshDiffusion||0);const x=l.getAttribLocation(c,"position");l.enableVertexAttribArray(x),l.bindBuffer(l.ARRAY_BUFFER,this.quadBuffer),l.vertexAttribPointer(x,2,l.FLOAT,!1,0,0),l.drawArrays(l.TRIANGLES,0,6),l.bindFramebuffer(l.FRAMEBUFFER,null),l.useProgram(h);const y=this.isPing?this.pongTex:this.pingTex,E=S=>l.getUniformLocation(h,S);l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,y),l.uniform1i(E("u_texture"),0),l.uniform1f(E("u_time"),i),l.uniform1f(E("u_grain"),t.noise/100*.15),l.uniform1f(E("u_chroma"),t.rgbShift/this.width*.5),l.uniform1f(E("u_vignette"),1.2);const b=l.getAttribLocation(h,"position");return l.enableVertexAttribArray(b),l.vertexAttribPointer(b,2,l.FLOAT,!1,0,0),l.drawArrays(l.TRIANGLES,0,6),this.isPing=!this.isPing,this.canvas}dispose(){const t=this.gl;t.deleteTexture(this.pingTex),t.deleteTexture(this.pongTex),t.deleteFramebuffer(this.pingFbo),t.deleteFramebuffer(this.pongFbo),t.deleteTexture(this.sourceTex),t.deleteBuffer(this.quadBuffer),t.deleteProgram(this.moshProgram),t.deleteProgram(this.postProgram)}getDebug(){return{width:this.width,height:this.height,lastUploadOk:this._lastUploadOk,lastError:this._lastGLError}}}let va=null,Dc=!0,Za=null;function xA(s,t,i,r,l){if(!Dc)return Od(l,t,i);if(!va)try{va=new _A,console.info("ERRORHEAD // WebGL2 Motion Sculpture Engine Initialized")}catch(c){return console.warn("ERRORHEAD // WebGL2 initialization failed. Falling back to Canvas2D path.",c),Dc=!1,Od(l,t,i)}try{return va.render(s,r,l)}catch(c){return console.error("ERRORHEAD // WebGL Render Error:",c),s_(),Dc=!1,Od(l,t,i)}}function Od(s,t,i){Za||(Za=document.createElement("canvas")),(Za.width!==t||Za.height!==i)&&(Za.width=t,Za.height=i);const r=Za.getContext("2d");return r&&(r.clearRect(0,0,t,i),r.drawImage(s,0,0,t,i)),Za}function s_(){if(va){try{va.dispose()}catch(s){console.warn("Error during WebGL disposal:",s)}va=null}}function SA(){return{supported:Dc,engineReady:!!va,...va?va.getDebug():{width:0,height:0,lastUploadOk:!1,lastError:0}}}const yA=(s,t,i,r,l,c,h,f)=>{if(i<=0||s.state.historyFrames.length===0)return;const m=Math.max(0,Math.min(100,i))/100,p=Math.max(0,Math.min(100,r))/100,_=Math.floor(Math.max(1,Math.min(60,l)));if(s.state.historyFrames.length<_)return;const g=s.state.historyFrames.length-_,x=s.state.historyFrames[g];if(!x)return;const y=m*(1-p*.5);t.save(),t.globalAlpha=y,t.globalCompositeOperation="screen",t.drawImage(x,0,0,c,h),t.restore()},MA=(s,t,i,r,l,c,h,f)=>{if(i<=0||s.state.historyFrames.length<2)return;const m=Math.max(0,Math.min(100,i))/100,p=Math.floor(Math.max(2,Math.min(10,r))),_=Math.max(0,Math.min(100,l))/100,g=Math.min(p,s.state.historyFrames.length);if(g<2)return;const x=[];let y=0;for(let E=0;E<g;E++){const v=Math.exp(-E*.5),S=1*(1-_)+v*_;x.push(S),y+=S}for(let E=0;E<x.length;E++)x[E]/=y;t.save(),t.globalCompositeOperation="source-over";for(let E=0;E<g;E++){const b=s.state.historyFrames.length-1-E,v=s.state.historyFrames[b];if(!v)continue;const S=x[E]*m;t.globalAlpha=S,t.drawImage(v,0,0,c,h)}t.restore()},EA=(s,t,i,r,l,c,h)=>{if(i<=0||s.state.historyFrames.length<3)return!1;const f=Math.max(0,Math.min(100,i)),m=Math.floor(Math.max(2,Math.min(30,r)));s.state.reverseBurst||(s.state.reverseBurst={active:!1,frameIndex:0,totalFrames:0,startHistorySize:0});const p=s.state.reverseBurst;if(p.active){const _=p.startHistorySize-1-p.frameIndex;if(_>=0&&_<s.state.historyFrames.length){const g=s.state.historyFrames[_];g&&(t.clearRect(0,0,l,c),t.drawImage(g,0,0,l,c))}return p.frameIndex++,p.frameIndex>=p.totalFrames&&(p.active=!1,p.frameIndex=0),!0}return sn(0,100,h)<f&&s.state.historyFrames.length>=m?(p.active=!0,p.frameIndex=0,p.totalFrames=Math.min(m,s.state.historyFrames.length),p.startHistorySize=s.state.historyFrames.length,!0):!1},bA=(s,t,i,r,l,c,h,f)=>{if(i<=0)return!1;const m=Math.max(0,Math.min(100,i)),p=Math.floor(Math.max(1,Math.min(10,r))),_=Math.floor(Math.max(p,Math.min(30,l)));s.state.stutterLock||(s.state.stutterLock={active:!1,frameIndex:0,totalFrames:0,frozenFrame:null});const g=s.state.stutterLock;if(g.active&&g.frozenFrame)return t.clearRect(0,0,c,h),t.drawImage(g.frozenFrame,0,0,c,h),g.frameIndex++,g.frameIndex>=g.totalFrames&&(g.active=!1,g.frameIndex=0,g.frozenFrame=null),!0;if(sn(0,100,f)<m){const x=document.createElement("canvas");x.width=c,x.height=h;const y=x.getContext("2d");if(y)return y.drawImage(t.canvas,0,0,c,h),g.active=!0,g.frameIndex=0,g.totalFrames=sn(p,_,f+123),g.frozenFrame=x,!0}return!1},TA=(s,t,i,r,l,c,h,f,m)=>{if(r<=0||s.state.historyFrames.length<2)return;const p=Math.max(0,Math.min(100,r))/100,_=Math.floor(Math.max(1,Math.min(20,l))),g=Math.floor(Math.max(1,Math.min(30,c))),x=Math.min(g,s.state.historyFrames.length);if(!(x<2)){i.clearRect(0,0,h,f),i.drawImage(t.canvas,0,0,h,f);for(let y=0;y<_;y++){const E=m+y*137,b=sn(0,h-1,E),v=sn(0,f-1,E+1),S=sn(h*.05,h*.3,E+2),U=sn(f*.05,f*.3,E+3),R=sn(1,x,E+4),F=s.state.historyFrames.length-R,k=s.state.historyFrames[F];k&&(t.save(),t.globalAlpha=p,t.drawImage(k,b,v,S,U,b,v,S,U),t.restore())}}},AA=s=>{s.state.reverseBurst&&(s.state.reverseBurst.active=!1,s.state.reverseBurst.frameIndex=0),s.state.stutterLock&&(s.state.stutterLock.active=!1,s.state.stutterLock.frameIndex=0,s.state.stutterLock.frozenFrame=null)},RA=s=>{var t;for(;s.state.historyFrames.length>a_;)s.state.historyFrames.shift();(t=s.state.stutterLock)!=null&&t.frozenFrame&&!s.state.stutterLock.active&&(s.state.stutterLock.frozenFrame=null)},CA=(s,t,i,r,l,c,h,f,m)=>{if(r<=0||s.state.historyFrames.length===0)return;const p=Math.max(0,Math.min(100,r))/100,_=Math.floor(Math.max(1,Math.min(60,c)));if(s.state.historyFrames.length<_)return;const g=s.state.historyFrames.length-_,x=s.state.historyFrames[g];if(x){switch(i.clearRect(0,0,h,f),i.drawImage(t.canvas,0,0,h,f),t.save(),l){case"random":wA(t,x,p,h,f,m);break;case"bands":DA(t,x,i.canvas,p,h,f,m);break;case"blocks":LA(t,x,p,h,f,m);break;case"gradient":UA(t,x,i.canvas,p,h,f);break}t.restore()}},wA=(s,t,i,r,l,c)=>{const h=Math.floor(i*20)+5;for(let f=0;f<h;f++){const m=c+f*137,p=sn(r*.05,r*.3,m),_=sn(l*.05,l*.3,m+1),g=sn(0,r-p,m+2),x=sn(0,l-_,m+3);s.globalAlpha=.7+sn(0,30,m+4)/100,s.drawImage(t,g,x,p,_,g,x,p,_)}},DA=(s,t,i,r,l,c,h)=>{const f=Math.floor(r*15)+3,m=c/f;for(let p=0;p<f;p++){const _=p*m;(p%2===0||sn(0,100,h+p)<r*50)&&(s.globalAlpha=.8+sn(0,20,h+p)/100,s.drawImage(t,0,_,l,m,0,_,l,m))}},LA=(s,t,i,r,l,c)=>{const f=Math.ceil(r/32),m=Math.ceil(l/32),p=f*m,_=Math.floor(p*i*.4);for(let g=0;g<_;g++){const x=c+g*97,y=sn(0,f-1,x),E=sn(0,m-1,x+1),b=y*32,v=E*32;s.globalAlpha=.85+sn(0,15,x+2)/100,s.drawImage(t,b,v,32,32,b,v,32,32)}},UA=(s,t,i,r,l,c)=>{const h=s.createLinearGradient(0,0,l,0);h.addColorStop(0,"rgba(255,255,255,0)"),h.addColorStop(r,"rgba(255,255,255,1)"),h.addColorStop(1,"rgba(255,255,255,0)"),s.globalAlpha=1,s.drawImage(t,0,0,l,c),s.globalCompositeOperation="destination-in",s.fillStyle=h,s.fillRect(0,0,l,c),s.globalCompositeOperation="source-over"},NA=()=>({lastTriggerTime:0,cooldownFrames:0,activeEvent:"none",eventFramesRemaining:0,frozenFrame:null}),OA=(s,t,i,r,l,c,h,f,m)=>{s.state.audioEvents||(s.state.audioEvents=NA());const p=s.state.audioEvents,_=Math.max(0,Math.min(100,r))/100;if(p.activeEvent!=="none"&&p.eventFramesRemaining>0){switch(p.eventFramesRemaining--,p.activeEvent){case"freeze":if(p.frozenFrame)return t.clearRect(0,0,h,f),t.drawImage(p.frozenFrame,0,0,h,f),!0;break;case"reverse":const x=Math.floor(s.state.historyFrames.length-1-(c-p.eventFramesRemaining));if(x>=0&&x<s.state.historyFrames.length){const y=s.state.historyFrames[x];return t.clearRect(0,0,h,f),t.drawImage(y,0,0,h,f),!0}break;case"swap":if(s.state.historyFrames.length>0){const y=Math.floor(Math.random()*s.state.historyFrames.length),E=s.state.historyFrames[y];return t.clearRect(0,0,h,f),t.drawImage(E,0,0,h,f),!0}break}return p.eventFramesRemaining<=0&&(p.activeEvent="none",p.frozenFrame=null),p.activeEvent!=="inject"}if(p.cooldownFrames>0)return p.cooldownFrames--,!1;if((l==="inject"?i.beat:i.transient)>_){if(p.activeEvent=l,p.eventFramesRemaining=Math.floor(c),p.lastTriggerTime=m,p.cooldownFrames=Math.floor(c*.5),l==="freeze"){const x=document.createElement("canvas");x.width=h,x.height=f;const y=x.getContext("2d");y&&(y.drawImage(t.canvas,0,0,h,f),p.frozenFrame=x)}return l!=="inject"}return!1},zA=(s,t,i,r)=>{const l=Math.max(0,Math.min(100,s)),c=Math.max(0,Math.min(100,t))/100;if(c===0)return l;const h=Math.sin(r*.1+l)*c*50;let f=l+h;if(i){const m=r*.01%100;f=(f+m)%100}return Math.max(0,Math.min(100,f))},PA=typeof window<"u"&&window.__ERRORHEAD_DEBUG__===!0,IA=s=>{const t=r_();Z1(),s_(),hA(),AA(t)},FA=async(s,t,i,r,l,c,h=0,f)=>{var k;const m={media:"unknown",mw:r,mh:l,overlayOk:!1,pipeline:"2d"};try{if(t instanceof HTMLVideoElement){const O=t;m.media=`video${O.paused?"(paused)":""}`,m.mw=O.videoWidth,m.mh=O.videoHeight}else if(t instanceof HTMLImageElement){const O=t;m.media="image",m.mw=O.naturalWidth||O.width,m.mh=O.naturalHeight||O.height}else if(t instanceof HTMLCanvasElement){const O=t;m.media="canvas",m.mw=O.width,m.mh=O.height}}catch{}const p=r_(),_=_i,g=Ka,{inCtx:x,compCtx:y,moshCtx:E,swapCtx:b}=Y1();Object.values(_).forEach(O=>{(O.width!==r||O.height!==l)&&(O.width=r,O.height=l)});let v={...i};if(v.audioEnabled){const{audioService:O}=await Y0(async()=>{const{audioService:fe}=await Promise.resolve().then(()=>yv);return{audioService:fe}},void 0),z=O.getFeatures();let w={amplitude:z.amplitude,envelope:z.envelope,low:z.low,mid:z.mid,high:z.high,transient:z.transient,beat:z.beat}[v.audioFeature]||z.envelope;const P=v.audioGate/100;if(w<P?w=0:w=(w-P)/(1-P),v.audioInvert&&(w=1-w),v.audioQuantize&&v.audioQuantize>0){const fe=Math.floor(v.audioQuantize);w=Math.floor(w*fe)/fe}const ne=Math.min(1,w*(v.audioGain/50));if(v.audioTargetRgb>0){const fe=v.audioTargetRgb/100;v.rgbShift=Math.max(0,v.rgbShift+ne*fe*50)}if(v.audioTargetAmount>0){const fe=v.audioTargetAmount/100;v.amount=Math.max(0,v.amount+ne*fe*40)}if(v.audioTargetWarp>0){const fe=v.audioTargetWarp/100;v.moshWarp=Math.max(0,v.moshWarp+ne*fe*60)}if(v.audioTargetFeedback&&v.audioTargetFeedback>0){const fe=v.audioTargetFeedback/100;v.feedback=Math.max(0,Math.min(100,v.feedback+ne*fe*20))}if(v.audioTargetBlocks&&v.audioTargetBlocks>0){const fe=v.audioTargetBlocks/100;v.blockList=Math.max(0,Math.min(100,v.blockList+ne*fe*60))}if(v.audioTargetMelt&&v.audioTargetMelt>0){const fe=v.audioTargetMelt/100;v.melt=Math.max(0,Math.min(100,v.melt+ne*fe*50))}if(v.audioTargetShake&&v.audioTargetShake>0){const fe=v.audioTargetShake/100;v.shake=Math.max(0,Math.min(100,v.shake+ne*fe*80))}if(v.audioTargetNoise&&v.audioTargetNoise>0){const fe=v.audioTargetNoise/100;v.noise=Math.max(0,Math.min(100,v.noise+ne*fe*60))}v.scanlines&&z.transient>.5&&(v.scanlineIntensity=Math.min(100,v.scanlineIntensity+z.transient*30))}if(x.clearRect(0,0,r,l),v.holdMode){const O=c-g.lastInjectTime;!g.isInjecting&&O>v.injectIntervalSec&&(g.isInjecting=!0,g.lastInjectTime=c,g.injectFrameCount=0),g.isInjecting?(_.hold.getContext("2d").drawImage(t,0,0,r,l),x.drawImage(t,0,0,r,l),g.injectFrameCount++,g.injectFrameCount>=v.injectFrames&&(g.isInjecting=!1)):x.drawImage(_.hold,0,0,r,l)}else x.drawImage(t,0,0,r,l);let S=_.input;if(v.moshEnabled)if(v.moshMode==="webgl")S=xA(v,r,l,c*v.timeScaleMosh,_.input),m.pipeline="webgl-mosh";else{if(g.frameCounter++,g.frameCounter===1||v.iframeInterval>0&&g.frameCounter%v.iframeInterval===0)K1(p,E,v.iframeBloom,v.iframeSoftReset,r,l);else{const ue=c*v.timeScaleMosh;if(v.mvAbuse){const w=Math.max(8,v.mvBlockSize||32),P=Math.max(0,v.mvSearchRadius||2);eA(p,b,r,l,w,P)}else Q1(p,b,v,r,l,ue);if(J1(p,E,v.feedback,r,l),v.blockList>0){const w=Math.floor(c*12)*v.timeScaleBlocks;$1(p,E,v,r,l,w)}E.save(),E.globalAlpha=.05,E.globalCompositeOperation="difference",E.drawImage(_.input,0,0,r,l),E.restore()}const z=v.historyCaptureInterval??1;if(g.frameCounter%z===0){const ue=document.createElement("canvas");ue.width=r,ue.height=l,(k=ue.getContext("2d"))==null||k.drawImage(_.mosh,0,0,r,l),g.historyFrames.push(ue),g.historyFrames.length>a_&&g.historyFrames.shift()}S=_.mosh}else g.frameCounter=0,g.historyFrames.length=0;if(y.clearRect(0,0,r,l),y.drawImage(S,0,0,r,l),v.pixelation>0){const O=Math.max(.01,1-v.pixelation/20),z=Math.floor(r*O),ue=Math.floor(l*O);b.save(),b.clearRect(0,0,r,l),b.drawImage(_.compose,0,0,z,ue),y.imageSmoothingEnabled=!1,y.clearRect(0,0,r,l),y.drawImage(_.swap,0,0,z,ue,0,0,r,l),y.imageSmoothingEnabled=!0,b.restore()}v.melt>0&&tA(p,y,b,v,r,l,c),v.shred>0&&nA(p,y,b,v.shred,r,l,Math.floor(c*12)),v.scatter>0&&iA(p,y,_.compose,v,r,l,Math.floor(c*12));const U=await fA(_.compose,_.jpeg,_.swap,v,c,r,l);pA(s,U,v,r,l,c),v.pixelSort&&v.pixelSort>0&&aA(s,v.pixelSort,r,l,Math.floor(c*100),v.pixelSortMode||"brightness"),v.channelSep&&v.channelSep>0&&rA(s,s.canvas,v.channelSepX||10,v.channelSepY||0,v.channelSep);let R=!1;if(v.audioEnabled&&v.audioEventEnable){const{audioService:O}=await Y0(async()=>{const{audioService:ue}=await Promise.resolve().then(()=>yv);return{audioService:ue}},void 0),z=O.getFeatures();R=OA(p,s,z,v.audioEventThreshold||70,v.audioEventAction||"freeze",v.audioEventDuration||10,r,l,g.frameCounter)}let F=R;if(v.reverseBurst&&v.reverseBurst>0&&(F=EA(p,s,v.reverseBurst,v.reverseBurstDuration||10,r,l,Math.floor(c*100))),!F&&v.stutterLock&&v.stutterLock>0&&(F=bA(p,s,v.stutterLock,v.stutterLockMin||2,v.stutterLockMax||10,r,l,Math.floor(c*100))),!F){if(v.partialReplace&&v.partialReplace>0){const O=v.chaosAmount?zA(v.seed,v.chaosAmount,v.chaosEvolve||!1,g.frameCounter):v.seed;CA(p,s,b,v.partialReplace,v.partialReplacePattern||"random",v.partialReplaceOffset||10,r,l,Math.floor(O+c*100))}v.temporalDisplace&&v.temporalDisplace>0&&TA(p,s,b,v.temporalDisplace,v.temporalDisplaceRegions||8,v.temporalDisplaceOffset||15,r,l,Math.floor(c*100)),v.timeSmear&&v.timeSmear>0&&MA(p,s,v.timeSmear,v.timeSmearFrames||5,v.timeSmearNonLinear||50,r,l),v.temporalEcho&&v.temporalEcho>0&&yA(p,s,v.temporalEcho,v.temporalEchoDecay||50,v.temporalEchoOffset||10,r,l)}if(RA(p),v.shaderMoshEnabled){g.prevShaderMoshEnabled||Wd.clear(),g.prevShaderMoshEnabled=!0;try{const O=Wd.render(s.canvas,v,c*v.timeScaleDisp);O&&O.width>0&&O.height>0&&(s.globalCompositeOperation="source-over",s.drawImage(O,0,0,r,l),m.overlayOk=!0)}catch{m.overlayOk=!1}}else g.prevShaderMoshEnabled=!1;if(PA)try{s.save(),s.globalCompositeOperation="source-over",s.fillStyle="rgba(0,0,0,0.5)";const O=dA(),z=SA(),ue=[`DBG frame: ${m.pipeline}${v.shaderMoshEnabled?"+shader":""}`,`media:${m.media} src:${m.mw}x${m.mh} out:${r}x${l}`,`gl2 upload:${z.lastUploadOk?"ok":"fail"} ${z.width}x${z.height} err:${z.lastError} overlay:${m.overlayOk?"on":"off"}`,`jpeg worker: ${O.hasBitmap?"bitmap":"passthru"} inflight:${O.inFlight?"yes":"no"}`],w=6,P=12,ne=280,fe=w*2+ue.length*P;s.fillRect(8,8,ne,fe),s.font="10px monospace",s.fillStyle="#00FFFF";for(let be=0;be<ue.length;be++)s.fillText(ue[be],12,12+(be+1)*P-4);s.restore()}catch{}};function o_(s){if(s.current){try{URL.revokeObjectURL(s.current)}catch{}s.current=null}}function BA(s,t,i,r){o_(r);const l=URL.createObjectURL(i);return r.current=l,new Promise((c,h)=>{s.onload=()=>{try{console.log("[Import] image onload")}catch{}const f=s.naturalWidth||s.width||0,m=s.naturalHeight||s.height||0;t&&f>0&&m>0&&(t.width=f,t.height=m,console.log(`[Import] Image loaded: ${f}x${m}, canvas set to ${t.width}x${t.height}`)),c({url:l,width:f,height:m})},s.onerror=f=>{console.error("[Import] Image load error:",f),h(f)},s.src=l})}function HA(s,t,i,r){o_(r);const l=URL.createObjectURL(i);return r.current=l,new Promise((c,h)=>{const f=()=>{try{console.log("[Import] video onloadedmetadata")}catch{}const m=s.videoWidth||0,p=s.videoHeight||0;t&&m>0&&p>0&&(t.width=m,t.height=p,console.log(`[Import] Video loaded: ${m}x${p}, canvas set to ${t.width}x${t.height}`)),c({url:l,width:m,height:p})};s.onloadedmetadata=f,s.onerror=m=>{console.error("[Import] Video load error:",m),h(m)},s.src=l;try{s.load()}catch{}s.play().then(()=>{try{console.log("[Import] video play started")}catch{}}).catch(()=>{})})}class l_{constructor(){this.micSource=null,this.mediaSource=null,this.isActive=!1,this.currentElement=null,this.elementNodes=new WeakMap,this.prevRMS=0,this.envelope=0,this.prevAmplitude=0,this.transientAccum=0,this.beatPhase=0,this.beatSmooth=0,this.ATTACK_COEF=.3,this.RELEASE_COEF=.05,this.TRANSIENT_DECAY=.85,this.BEAT_SMOOTH=.1,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.4,this.analyser.minDecibels=-90,this.analyser.maxDecibels=-10,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount),this.destination=this.ctx.createMediaStreamDestination()}async resume(){this.ctx.state==="suspended"&&await this.ctx.resume()}async connectMic(){await this.resume(),this.stop();try{const t=await navigator.mediaDevices.getUserMedia({audio:!0});this.micSource=this.ctx.createMediaStreamSource(t),this.micSource.connect(this.analyser),this.micSource.connect(this.destination),this.isActive=!0,console.info("ERRORHEAD // Mic Source Connected [CV Mode]")}catch(t){console.error("Audio access denied",t),this.isActive=!1}}connectMedia(t){if(this.resume(),this.currentElement===t&&this.mediaSource){this.isActive=!0,console.info("ERRORHEAD // Media Source Reused [CV Mode]:",t.tagName);return}if(this.mediaSource)try{this.mediaSource.disconnect()}catch{}this.currentElement=t;try{const i=this.elementNodes.get(t);this.mediaSource=i??this.ctx.createMediaElementSource(t),i||this.elementNodes.set(t,this.mediaSource),this.mediaSource.connect(this.analyser),this.mediaSource.connect(this.destination),this.mediaSource.connect(this.ctx.destination),this.isActive=!0,console.info("ERRORHEAD // Media Source Connected [CV Mode]:",t.tagName)}catch(i){console.warn("Could not connect media source (might already be connected):",i),this.isActive=!0}}stop(){if(this.micSource&&(this.micSource.disconnect(),this.micSource=null),this.mediaSource)try{this.mediaSource.disconnect()}catch{}this.isActive=!1,this.prevRMS=0,this.envelope=0,this.prevAmplitude=0,this.transientAccum=0,this.beatPhase=0,this.beatSmooth=0}getLevel(){return this.isActive?this.getFeatures().amplitude:0}getFeatures(){if(!this.isActive)return{amplitude:0,envelope:0,low:0,mid:0,high:0,transient:0,beat:0};this.analyser.getByteFrequencyData(this.frequencyData);const t=this.ctx.sampleRate,i=this.analyser.frequencyBinCount,r=t/2/i,l=Math.floor(250/r),c=Math.floor(4e3/r),h=i;let f=0;for(let U=0;U<i;U++){const R=this.frequencyData[U]/255;f+=R*R}const m=Math.sqrt(f/i),p=Math.min(1,m*1.5);p>this.envelope?this.envelope+=(p-this.envelope)*this.ATTACK_COEF:this.envelope+=(p-this.envelope)*this.RELEASE_COEF;const _=(U,R)=>{let F=0,k=0;for(let O=U;O<Math.min(R,i);O++)F+=this.frequencyData[O],k++;return k>0?Math.min(1,F/k/255*1.8):0},g=_(0,l),x=_(l,c),y=_(c,h),E=p-this.prevAmplitude;E>.15&&(this.transientAccum=Math.min(1,this.transientAccum+E*3)),this.transientAccum*=this.TRANSIENT_DECAY;const b=Math.min(1,this.transientAccum),v=g*.7+b*.3;this.beatSmooth+=(v-this.beatSmooth)*this.BEAT_SMOOTH;const S=Math.min(1,this.beatSmooth);return this.prevAmplitude=p,this.prevRMS=m,{amplitude:p,envelope:Math.min(1,this.envelope),low:Math.min(1,g),mid:Math.min(1,x),high:Math.min(1,y),transient:Math.min(1,b),beat:Math.min(1,S)}}getMixedStream(){return this.destination.stream}}const wi=new l_,yv=Object.freeze(Object.defineProperty({__proto__:null,AudioAnalyzer:l_,audioService:wi},Symbol.toStringTag,{value:"Module"}));function GA(s,t){const i=t.format==="jpeg"?"image/jpeg":"image/png",r=t.format==="jpeg"?"jpg":"png",l=t.format==="jpeg"?Math.max(.1,Math.min(1,(t.quality??90)/100)):void 0,c=(t.fileNameBase??"errorhead_frame").replace(/\.[^/.]+$/,""),h=new Date().toISOString().replace(/[:.]/g,"-"),f=`${c}_${h}.${r}`;return new Promise(m=>{s.toBlob(p=>{if(!p)return m();const _=URL.createObjectURL(p),g=document.createElement("a");g.href=_,g.download=f,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(_),m()},i,l)})}async function VA(s,t,i,r,l,c=wi,h={}){var b;const f=h.fps??30,m=s.captureStream(f);let p;if(t.audioEnabled){const S=c.getMixedStream().getAudioTracks();p=new MediaStream([...m.getVideoTracks(),...S])}else p=new MediaStream([...m.getVideoTracks()]);r.recordStreamRef.current=p,r.recordChunksRef.current=[];let _;const g=h.container??"auto";g==="mp4"?_=["video/mp4;codecs=h264","video/mp4"]:g==="webm"?_=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"]:_=["video/mp4;codecs=h264","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"];const x=_.find(v=>window.MediaRecorder&&window.MediaRecorder.isTypeSupported&&window.MediaRecorder.isTypeSupported(v))||"video/webm";if(!window.MediaRecorder){alert("MediaRecorder is not supported in this browser.");return}const y=new MediaRecorder(p,{mimeType:x,bitsPerSecond:h.bitsPerSecond});r.recorderRef.current=y;const E=typeof window<"u"?window.__ERRORHEAD_FIXED_DT:void 0;h.deterministicFps&&h.deterministicFps>0&&(window.__ERRORHEAD_FIXED_DT=1/h.deterministicFps),y.ondataavailable=v=>{v.data&&v.data.size>0&&r.recordChunksRef.current.push(v.data)},y.onstop=()=>{var O;r.setIsRecording(!1);const v=new Blob(r.recordChunksRef.current,{type:x}),S=i?i.replace(/\.[^/.]+$/,""):"errorhead_recording",U=new Date().toISOString().replace(/[:.]/g,"-"),R=`${S}_${U}.webm`,F=URL.createObjectURL(v),k=document.createElement("a");k.href=F,k.download=R,document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(F),(O=r.recordStreamRef.current)==null||O.getTracks().forEach(z=>z.stop()),r.recordStreamRef.current=null,r.recorderRef.current=null,r.recordChunksRef.current=[],h.deterministicFps&&(E===void 0?delete window.__ERRORHEAD_FIXED_DT:window.__ERRORHEAD_FIXED_DT=E)};try{y.start(250),r.setIsRecording(!0),l&&l>0&&(r.recordTimerRef.current=window.setTimeout(()=>c_(r),l*1e3))}catch(v){console.error("Failed to start recording",v),r.setIsRecording(!1),(b=r.recordStreamRef.current)==null||b.getTracks().forEach(S=>S.stop()),r.recordStreamRef.current=null,r.recorderRef.current=null}}function c_(s){if(s.recorderRef.current){try{s.recorderRef.current.stop()}catch{}s.recordTimerRef.current&&(clearTimeout(s.recordTimerRef.current),s.recordTimerRef.current=null)}}function kA(s){const t=s.naturalWidth||s.width||0,i=s.naturalHeight||s.height||0;return{w:t,h:i}}function jA(s){const i=s.readyState>=(s.HAVE_CURRENT_DATA||2),r=s.videoWidth||0,l=s.videoHeight||0;return{ready:i,w:r,h:l}}const WA=()=>{const[s,t]=ze.useState(!0),[i,r]=ze.useState(!1),[l,c]=ze.useState(Pn),[h,f]=ze.useState(!0),[m,p]=ze.useState("default"),[_,g]=ze.useState([]),[x,y]=ze.useState(!1),[E,b]=ze.useState({isPlaying:!1,currentTime:0,duration:5,keyframes:[],fps:30}),[v,S]=ze.useState(null),[U,R]=ze.useState(!1),[F,k]=ze.useState(""),[O,z]=ze.useState("png"),[ue,w]=ze.useState(90),[P,ne]=ze.useState(!1),[fe,be]=ze.useState(0),j=ze.useRef(null),[ee,I]=ze.useState("auto"),[W,K]=ze.useState(30),[se,pe]=ze.useState(!1),[L,X]=ze.useState(30),[H,Q]=ze.useState(0),Z=ze.useRef({active:!1,fps:30,framesTotal:0,frameIndex:0,baseName:"errorhead_seq"}),[_e,Te]=ze.useState(!1),[Ge,Pe]=ze.useState(0),[ke,ct]=ze.useState(0),te=ze.useRef(new Audio),jt=ze.useRef(l),je=ze.useRef(E),st=ze.useRef(h),Ve=ze.useRef(v),Ot=ze.useRef(U),lt=ze.useRef(x),N=ze.useRef(0),C=ze.useRef(0),ae=ze.useRef(0),Ee=ze.useRef(0),ye=ze.useRef(0),[xe,Ze]=ze.useState(0),Le=ze.useRef(!1),le=ze.useRef(null),Ue=ze.useRef(null),nt=ze.useRef(null),Se=ze.useRef(0),Et=ze.useRef(null),ft=ze.useRef([]),tt=ze.useRef(null),Ie=ze.useRef(null),[Oe,Ke]=ze.useState(null),vt=ze.useRef(null),Wt=Me=>{Ke(Me),vt.current&&window.clearTimeout(vt.current),vt.current=window.setTimeout(()=>Ke(null),3e3)};ze.useEffect(()=>{jt.current=l},[l]),ze.useEffect(()=>{je.current=E},[E]),ze.useEffect(()=>{st.current=h},[h]),ze.useEffect(()=>{Ve.current=v},[v]),ze.useEffect(()=>{Ot.current=U},[U]),ze.useEffect(()=>{lt.current=x},[x]),ze.useEffect(()=>{l.audioEnabled?(wi.resume().catch(()=>{}),l.audioSource==="mic"?wi.connectMic().then(()=>Je("Audio: Mic Online")).catch(()=>Je("Audio: Mic Access Denied")):l.audioSource==="video"&&Ue.current?(wi.connectMedia(Ue.current),Je("Audio: Tapped Video Stream")):l.audioSource==="music"&&l.musicUrl&&(te.current.src=l.musicUrl,te.current.play(),wi.connectMedia(te.current),Je("Audio: Music Stream Active"))):(wi.stop(),te.current.pause())},[l.audioEnabled,l.audioSource,l.musicUrl]);const Je=Me=>{const et=new Date().toLocaleTimeString("en-US",{hour12:!1});g(Dt=>[`[${et}] ${Me}`,...Dt].slice(0,5))},Ae=()=>{N.current=0,IA(),Ue.current&&(Ue.current.currentTime=0,Ve.current==="video"&&Ue.current.play().then(()=>R(!0)).catch(()=>{}))},G=Me=>{console.log("[Import] handleFileSelect:",Me.name,Me.type),console.log("[Import] Media refs:",{imgRef:!!nt.current,videoRef:!!Ue.current,canvasRef:!!le.current}),console.log("[Import] Canvas context:",le.current?le.current.getContext("2d"):null),console.log("[Import] Canvas dimensions:",le.current?`${le.current.width}x${le.current.height}`:"N/A"),console.log("[Import] Canvas hidden state:",le.current?le.current.hidden:"N/A"),console.log("[Import] Canvas visibility:",le.current?le.current.style.visibility:"N/A"),console.log("[Import] Canvas style:",le.current?le.current.style.cssText:"N/A"),console.log("[Import] Canvas parent:",le.current?le.current.parentElement:"N/A"),console.log("[Import] Canvas offset:",le.current?`${le.current.offsetLeft},${le.current.offsetTop}`:"N/A"),console.log("[Import] Canvas computed style:",le.current?window.getComputedStyle(le.current):"N/A"),console.log("[Import] Canvas bounding rect:",le.current?le.current.getBoundingClientRect():"N/A"),console.log("[Import] Canvas client rect:",le.current?le.current.getClientRects():"N/A"),console.log("[Import] Canvas scroll:",le.current?`${le.current.scrollLeft},${le.current.scrollTop}`:"N/A"),console.log("[Import] Canvas isConnected:",le.current?le.current.isConnected:"N/A"),console.log("[Import] Canvas isDestroyed:",le.current?le.current.isDestroyed:"N/A"),console.log("[Import] Canvas width/height:",le.current?`${le.current.width}x${le.current.height}`:"N/A"),console.log("[Import] Canvas clientWidth/Height:",le.current?`${le.current.clientWidth}x${le.current.clientHeight}`:"N/A"),console.log("[Import] Canvas offsetWidth/Height:",le.current?`${le.current.offsetWidth}x${le.current.offsetHeight}`:"N/A"),console.log("[Import] Canvas scrollWidth/Height:",le.current?`${le.current.scrollWidth}x${le.current.scrollHeight}`:"N/A"),console.log("[Import] Canvas style display:",le.current?le.current.style.display:"N/A"),console.log("[Import] Canvas style position:",le.current?le.current.style.position:"N/A"),console.log("[Import] Canvas style visibility:",le.current?le.current.style.visibility:"N/A"),console.log("[Import] Canvas style opacity:",le.current?le.current.style.opacity:"N/A"),k(Me.name),Ae(),Me.type.startsWith("video/")?(S("video"),console.log("[Import] setSourceType -> video"),Ue.current?(console.log("[Import] Video ref exists, starting load..."),HA(Ue.current,le.current,Me,j).then(()=>{console.log("[Import] video loaded:",{readyState:Ue.current.readyState,w:Ue.current.videoWidth,h:Ue.current.videoHeight,paused:Ue.current.paused,duration:Ue.current.duration}),R(!Ue.current.paused),jt.current.audioEnabled&&jt.current.audioSource==="video"&&wi.connectMedia(Ue.current)}).catch(et=>{console.error("[Import] Video load error:",et),Je("Video load error")})):console.error("[Import] Video ref is null!")):(S("image"),console.log("[Import] setSourceType -> image"),nt.current?(console.log("[Import] Image ref exists, starting load..."),BA(nt.current,le.current,Me,j).then(()=>{console.log("[Import] image loaded:",{w:nt.current.naturalWidth,h:nt.current.naturalHeight,complete:nt.current.complete})}).catch(et=>{console.error("[Import] Image load error:",et),Je("Image load error")})):console.error("[Import] Image ref is null!")),Je(`Loaded ${Me.name}`)},Ce=Me=>{const et=URL.createObjectURL(Me);c(Dt=>({...Dt,musicUrl:et,audioSource:"music",audioEnabled:!0})),Je(`Imported Audio: ${Me.name}`)},Re=Me=>{c(Me),m!=="custom"&&p("custom")},$e=(Me,et,Dt)=>Math.max(et,Math.min(Dt,Me)),we=(Me,et,Dt=1)=>Math.round((Math.random()*(et-Me)+Me)/Dt)*Dt,Ct=Me=>({...Me,amount:we(0,60),quality:we(30,100),iterations:we(1,20),rgbShift:we(0,25),redShift:we(-10,10),greenShift:we(-10,10),blueShift:we(-10,10),pixelation:we(0,6),noise:we(0,40),melt:we(0,40),shred:we(0,50),scatter:we(0,50),brightness:$e(we(90,120),50,200),scanlines:Math.random()<.4?!Me.scanlines:Me.scanlines,scanlineIntensity:we(10,80),masterSpeed:Math.random()<.5?Me.masterSpeed:Math.round((Math.random()*2+.3)*10)/10,moshEnabled:Math.random()<.5?!0:Me.moshEnabled,moshMode:Math.random()<.5?"webgl":"2d",feedback:we(60,98),moshWarp:we(0,60),moshDiffusion:we(0,3),blockList:we(0,80),blockSize:we(16,48,2),moshDispStrength:we(0,60),moshDispScale:we(5,30),moshDispSpeed:we(5,30),moshDispQuantize:we(0,80),audioEnabled:Me.audioEnabled,audioSource:Me.audioSource,audioGain:Me.audioGain,audioGate:Me.audioGate,audioTargetRgb:Me.audioTargetRgb,audioTargetAmount:Me.audioTargetAmount,audioTargetWarp:Me.audioTargetWarp,musicUrl:Me.musicUrl}),At=()=>{c(Me=>Ct(Me)),p("custom"),Je("Randomized parameters")},Zt=()=>{const et={id:crypto.randomUUID(),time:je.current.currentTime,params:jt.current};b(Dt=>({...Dt,keyframes:[...Dt.keyframes,et].sort((Mi,D)=>Mi.time-D.time)})),Je(`Added keyframe @ ${je.current.currentTime.toFixed(2)}s`)},Jt=Me=>{b(et=>({...et,keyframes:et.keyframes.filter(Dt=>Dt.id!==Me)})),Je("Deleted keyframe")},wt=async Me=>{var et,Dt,Mi,D;if(!(!le.current||Le.current))try{Le.current=!0;const Y=le.current.getContext("2d",{alpha:!1});if(!Y)return;const oe=Me/1e3,ce=oe-(C.current||oe);C.current=oe;const re=typeof window<"u"?window.__ERRORHEAD_FIXED_DT:void 0,Ne=Number.isFinite(re)&&re>0?re:Math.min(ce,.1);if(N.current+=Ne*jt.current.masterSpeed,lt.current&&je.current.isPlaying){let Be=je.current.currentTime+Ne;Be>je.current.duration&&(Be=0),b(rt=>({...rt,currentTime:Be}))}let Fe=null,He=0,Xe=0,qe=!1,at="none";if(Ve.current==="image"&&nt.current){const Be=nt.current;if(at="image",Be.complete&&Be.naturalWidth>0&&Be.naturalHeight>0){qe=!0,Fe=Be;const{w:rt,h:Kt}=kA(Be);He=rt,Xe=Kt,le.current&&He>0&&(le.current.width!==He||le.current.height!==Xe)&&(le.current.width=He,le.current.height=Xe,console.log(`[Render] Canvas set to ${He}x${Xe} for image`))}else console.log(`[Render] Image not ready: complete=${Be.complete}, dims=${Be.naturalWidth}x${Be.naturalHeight}`)}else if(Ve.current==="video"&&Ue.current){const Be=Ue.current;at="video";const rt=jA(Be);rt.ready&&rt.w>0&&rt.h>0?(qe=!0,Fe=Be,He=rt.w,Xe=rt.h,(le.current.width!==He||le.current.height!==Xe)&&(le.current.width=He,le.current.height=Xe,console.log(`[Render] Canvas set to ${He}x${Xe} for video`))):console.log(`[Render] Video not ready: ready=${rt.ready}, dims=${rt.w}x${rt.h}`)}if(qe&&Fe&&He>0&&Xe>0){let Be=He,rt=Xe;_e&&Ge>0&&ke>0&&(Be=Ge,rt=ke,le.current&&(le.current.width!==Be||le.current.height!==rt)&&(le.current.width=Be,le.current.height=rt,console.log(`[Render] Resolution lock: ${Be}x${rt}`))),ae.current%60===0&&console.log("[Media Check]",{mediaType:at,isMediaReady:qe,sourceW:He,sourceH:Xe,canvasW:(et=le.current)==null?void 0:et.width,canvasH:(Dt=le.current)==null?void 0:Dt.height,globalAlpha:Y.globalAlpha}),Y.save(),Y.globalAlpha=1,Y.globalCompositeOperation="copy",Y.filter="none",Y.drawImage(Fe,0,0,Be,rt),Y.restore(),(((Mi=le.current)==null?void 0:Mi.width)!==Be||((D=le.current)==null?void 0:D.height)!==rt)&&console.error("[Assertion Failed] Canvas dimensions do not match target output dimensions"),Y.globalAlpha!==1&&Y.globalAlpha;const Kt=wi.getLevel();await FA(Y,Fe,jt.current,Be,rt,N.current,Kt),Z.current.active&&await new Promise($t=>{le.current.toBlob(On=>{if(On){const zt=Z.current.frameIndex,dt=Z.current.framesTotal,Oi=String(dt).length,pn=`${Z.current.baseName}_${String(zt).padStart(Oi,"0")}.png`,_n=URL.createObjectURL(On),Hn=document.createElement("a");Hn.href=_n,Hn.download=pn,document.body.appendChild(Hn),Hn.click(),document.body.removeChild(Hn),URL.revokeObjectURL(_n),Z.current.frameIndex++,Z.current.frameIndex>=Z.current.framesTotal&&(Z.current.active=!1,pe(!1),delete window.__ERRORHEAD_FIXED_DT)}$t()},"image/png")})}else Y.fillStyle="black",Y.fillRect(0,0,le.current.width,le.current.height),console.log(`[Render] No media ready (${at}), canvas cleared`)}finally{Le.current=!1}},nn=Me=>{Ee.current===0&&(Ee.current=Me);const et=Me-Ee.current;ae.current++,et>=1e3&&(be(Math.round(ae.current*1e3/et)),Ze(ye.current),Ee.current=Me),(!s||i)&&(st.current||Ve.current==="video"&&Ot.current||lt.current&&je.current.isPlaying)&&(wt(Me),ye.current++,ae.current++),Se.current=requestAnimationFrame(nn)};ze.useEffect(()=>(Se.current=requestAnimationFrame(nn),()=>{Se.current&&cancelAnimationFrame(Se.current)}),[]),ze.useEffect(()=>()=>{if(j.current){try{URL.revokeObjectURL(j.current)}catch{}j.current=null}},[]),ze.useEffect(()=>()=>{vt.current&&window.clearTimeout(vt.current)},[]);const Nn=()=>{try{wi.resume()}catch{}try{c(Me=>({...Me,audioEnabled:!0,audioSource:"mic"}))}catch{}r(!0),setTimeout(()=>{t(!1),r(!1),Je("System Online")},800)},ir=async()=>{const Me=le.current;Me&&(await GA(Me,{format:O,quality:ue,fileNameBase:F}),Wt("Saved image"))},ar=()=>c_({recorderRef:Et,recordChunksRef:ft,recordStreamRef:tt,recordTimerRef:Ie,setIsRecording:ne}),Ni=async Me=>{if(le.current){if(P){ar();return}await VA(le.current,jt.current,F,{recorderRef:Et,recordChunksRef:ft,recordStreamRef:tt,recordTimerRef:Ie,setIsRecording:ne},Me,wi,{fps:W,bitsPerSecond:8e6,deterministicFps:W,container:ee})}},rr=(Me,et)=>{Me?Ni(et):ir()},ki=(Me,et)=>{le.current&&(et<=0||Me<=0||(Z.current.active=!0,Z.current.fps=Me,Z.current.framesTotal=et,Z.current.frameIndex=0,Z.current.baseName=F?F.replace(/\.[^/.]+$/,""):"errorhead_seq",window.__ERRORHEAD_FIXED_DT=1/Me,pe(!0)))},Jn=()=>{Z.current.active=!1,pe(!1),delete window.__ERRORHEAD_FIXED_DT};return T.jsxs(T.Fragment,{children:[s&&T.jsx(US,{onEnter:Nn,isExiting:i}),T.jsxs("div",{className:"hidden",children:[T.jsx("img",{ref:nt,crossOrigin:"anonymous",alt:"source"}),T.jsx("video",{ref:Ue,crossOrigin:"anonymous",loop:!0,muted:!0,playsInline:!0})]}),T.jsx("div",{className:`transition-all duration-1000 ${s&&!i?"blur-2xl opacity-0 scale-105 pointer-events-none":"blur-0 opacity-100 scale-100"}`,children:T.jsx(AS,{leftPanel:T.jsx(CS,{onFileSelect:G,onPresetSelect:Me=>{c(Me.params),p(Me.id)},activePresetId:m,exportFormat:O,setExportFormat:z,exportQuality:ue,setExportQuality:w,onExport:rr,isVideo:v==="video",isAnimationActive:x,currentParams:l,onImportPreset:Me=>c(Me),onSharePreset:()=>{},isRecording:P,recordFormat:ee,setRecordFormat:I,recordFps:W,setRecordFps:K,isSeqActive:se,seqFps:L,setSeqFps:X,seqFrames:H,setSeqFrames:Q,onStartPngSeq:(Me,et)=>ki(Me,et),onStopPngSeq:Jn,lockRes:_e,setLockRes:Te,lockWidth:Ge,lockHeight:ke,setLockWidth:Pe,setLockHeight:ct}),centerPanel:T.jsx(DS,{canvasRef:le,isProcessing:!1,live:h,toggleLive:()=>f(!h),hasSource:!!v,isVideo:v==="video",togglePlayback:()=>{var Me,et,Dt;(Me=Ue.current)!=null&&Me.paused?Ue.current.play():(et=Ue.current)==null||et.pause(),R(!((Dt=Ue.current)!=null&&Dt.paused))},onStop:()=>{Ue.current.currentTime=0,Ue.current.pause(),R(!1)},isPlaying:U,isRecording:P,fps:fe,frameCounter:xe}),rightPanel:T.jsx(wS,{params:l,onChange:Re,onRandomize:At,onReset:Ae,onImportMusic:Ce}),bottomBar:T.jsx(LS,{animation:E,isActive:x,onToggleActive:()=>y(!x),onPlayPause:()=>b(Me=>({...Me,isPlaying:!Me.isPlaying})),onSeek:Me=>b(et=>({...et,currentTime:Me})),onAddKeyframe:Zt,onDeleteKeyframe:Jt,onDurationChange:Me=>b(et=>({...et,duration:Me})),fps:fe})})}),Oe&&T.jsx("div",{className:"fixed bottom-4 right-4 z-[200]",children:T.jsx("div",{className:"bg-zinc-900/90 border border-zinc-700 text-zinc-200 px-3 py-2 text-xs font-mono shadow-lg",children:Oe})})]})},Mv=document.getElementById("root");Mv&&TS.createRoot(Mv).render(T.jsx(Ev.StrictMode,{children:T.jsx(WA,{})}));
