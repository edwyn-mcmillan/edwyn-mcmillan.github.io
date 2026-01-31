(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var Zf={exports:{}},hl={};var K_;function bM(){if(K_)return hl;K_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return hl.Fragment=t,hl.jsx=n,hl.jsxs=n,hl}var Z_;function EM(){return Z_||(Z_=1,Zf.exports=bM()),Zf.exports}var Jr=EM(),Qf={exports:{}},oe={};var Q_;function TM(){if(Q_)return oe;Q_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(I,it,gt){this.props=I,this.context=it,this.refs=M,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,it){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,it,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=x.prototype;function D(I,it,gt){this.props=I,this.context=it,this.refs=M,this.updater=gt||b}var L=D.prototype=new C;L.constructor=D,T(L,x.prototype),L.isPureReactComponent=!0;var O=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function A(I,it,gt){var Tt=gt.ref;return{$$typeof:o,type:I,key:it,ref:Tt!==void 0?Tt:null,props:gt}}function N(I,it){return A(I.type,it,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function et(I){var it={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(gt){return it[gt]})}var st=/\/+/g;function dt(I,it){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):it.toString(36)}function ut(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(it){I.status==="pending"&&(I.status="fulfilled",I.value=it)},function(it){I.status==="pending"&&(I.status="rejected",I.reason=it)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,it,gt,Tt,Ft){var nt=typeof I;(nt==="undefined"||nt==="boolean")&&(I=null);var ct=!1;if(I===null)ct=!0;else switch(nt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(I.$$typeof){case o:case t:ct=!0;break;case g:return ct=I._init,F(ct(I._payload),it,gt,Tt,Ft)}}if(ct)return Ft=Ft(I),ct=Tt===""?"."+dt(I,0):Tt,O(Ft)?(gt="",ct!=null&&(gt=ct.replace(st,"$&/")+"/"),F(Ft,it,gt,"",function(zt){return zt})):Ft!=null&&(G(Ft)&&(Ft=N(Ft,gt+(Ft.key==null||I&&I.key===Ft.key?"":(""+Ft.key).replace(st,"$&/")+"/")+ct)),it.push(Ft)),1;ct=0;var Ct=Tt===""?".":Tt+":";if(O(I))for(var Gt=0;Gt<I.length;Gt++)Tt=I[Gt],nt=Ct+dt(Tt,Gt),ct+=F(Tt,it,gt,nt,Ft);else if(Gt=y(I),typeof Gt=="function")for(I=Gt.call(I),Gt=0;!(Tt=I.next()).done;)Tt=Tt.value,nt=Ct+dt(Tt,Gt++),ct+=F(Tt,it,gt,nt,Ft);else if(nt==="object"){if(typeof I.then=="function")return F(ut(I),it,gt,Tt,Ft);throw it=String(I),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(I,it,gt){if(I==null)return I;var Tt=[],Ft=0;return F(I,Tt,"","",function(nt){return it.call(gt,nt,Ft++)}),Tt}function at(I){if(I._status===-1){var it=I._result;it=it(),it.then(function(gt){(I._status===0||I._status===-1)&&(I._status=1,I._result=gt)},function(gt){(I._status===0||I._status===-1)&&(I._status=2,I._result=gt)}),I._status===-1&&(I._status=0,I._result=it)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},xt={map:H,forEach:function(I,it,gt){H(I,function(){it.apply(this,arguments)},gt)},count:function(I){var it=0;return H(I,function(){it++}),it},toArray:function(I){return H(I,function(it){return it})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return oe.Activity=_,oe.Children=xt,oe.Component=x,oe.Fragment=n,oe.Profiler=r,oe.PureComponent=D,oe.StrictMode=a,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,oe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return P.H.useMemoCache(I)}},oe.cache=function(I){return function(){return I.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(I,it,gt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Tt=T({},I.props),Ft=I.key;if(it!=null)for(nt in it.key!==void 0&&(Ft=""+it.key),it)!Y.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(Tt[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)Tt.children=gt;else if(1<nt){for(var ct=Array(nt),Ct=0;Ct<nt;Ct++)ct[Ct]=arguments[Ct+2];Tt.children=ct}return A(I.type,Ft,Tt)},oe.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},oe.createElement=function(I,it,gt){var Tt,Ft={},nt=null;if(it!=null)for(Tt in it.key!==void 0&&(nt=""+it.key),it)Y.call(it,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ft[Tt]=it[Tt]);var ct=arguments.length-2;if(ct===1)Ft.children=gt;else if(1<ct){for(var Ct=Array(ct),Gt=0;Gt<ct;Gt++)Ct[Gt]=arguments[Gt+2];Ft.children=Ct}if(I&&I.defaultProps)for(Tt in ct=I.defaultProps,ct)Ft[Tt]===void 0&&(Ft[Tt]=ct[Tt]);return A(I,nt,Ft)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(I){return{$$typeof:h,render:I}},oe.isValidElement=G,oe.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:at}},oe.memo=function(I,it){return{$$typeof:d,type:I,compare:it===void 0?null:it}},oe.startTransition=function(I){var it=P.T,gt={};P.T=gt;try{var Tt=I(),Ft=P.S;Ft!==null&&Ft(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,St)}catch(nt){St(nt)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),P.T=it}},oe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},oe.use=function(I){return P.H.use(I)},oe.useActionState=function(I,it,gt){return P.H.useActionState(I,it,gt)},oe.useCallback=function(I,it){return P.H.useCallback(I,it)},oe.useContext=function(I){return P.H.useContext(I)},oe.useDebugValue=function(){},oe.useDeferredValue=function(I,it){return P.H.useDeferredValue(I,it)},oe.useEffect=function(I,it){return P.H.useEffect(I,it)},oe.useEffectEvent=function(I){return P.H.useEffectEvent(I)},oe.useId=function(){return P.H.useId()},oe.useImperativeHandle=function(I,it,gt){return P.H.useImperativeHandle(I,it,gt)},oe.useInsertionEffect=function(I,it){return P.H.useInsertionEffect(I,it)},oe.useLayoutEffect=function(I,it){return P.H.useLayoutEffect(I,it)},oe.useMemo=function(I,it){return P.H.useMemo(I,it)},oe.useOptimistic=function(I,it){return P.H.useOptimistic(I,it)},oe.useReducer=function(I,it,gt){return P.H.useReducer(I,it,gt)},oe.useRef=function(I){return P.H.useRef(I)},oe.useState=function(I){return P.H.useState(I)},oe.useSyncExternalStore=function(I,it,gt){return P.H.useSyncExternalStore(I,it,gt)},oe.useTransition=function(){return P.H.useTransition()},oe.version="19.2.3",oe}var J_;function kp(){return J_||(J_=1,Qf.exports=TM()),Qf.exports}var Vd=kp(),Jf={exports:{}},fl={},$f={exports:{}},td={};var $_;function AM(){return $_||($_=1,(function(o){function t(F,H){var at=F.length;F.push(H);t:for(;0<at;){var St=at-1>>>1,xt=F[St];if(0<r(xt,H))F[St]=H,F[at]=xt,at=St;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],at=F.pop();if(at!==H){F[0]=at;t:for(var St=0,xt=F.length,I=xt>>>1;St<I;){var it=2*(St+1)-1,gt=F[it],Tt=it+1,Ft=F[Tt];if(0>r(gt,at))Tt<xt&&0>r(Ft,gt)?(F[St]=Ft,F[Tt]=at,St=Tt):(F[St]=gt,F[it]=at,St=it);else if(Tt<xt&&0>r(Ft,at))F[St]=Ft,F[Tt]=at,St=Tt;else break t}}return H}function r(F,H){var at=F.sortIndex-H.sortIndex;return at!==0?at:F.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(F){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=F)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function O(F){if(T=!1,L(F),!b)if(n(p)!==null)b=!0,B||(B=!0,et());else{var H=n(d);H!==null&&ut(O,H.startTime-F)}}var B=!1,P=-1,Y=5,A=-1;function N(){return M?!0:!(o.unstable_now()-A<Y)}function G(){if(M=!1,B){var F=o.unstable_now();A=F;var H=!0;try{t:{b=!1,T&&(T=!1,C(P),P=-1),y=!0;var at=v;try{e:{for(L(F),_=n(p);_!==null&&!(_.expirationTime>F&&N());){var St=_.callback;if(typeof St=="function"){_.callback=null,v=_.priorityLevel;var xt=St(_.expirationTime<=F);if(F=o.unstable_now(),typeof xt=="function"){_.callback=xt,L(F),H=!0;break e}_===n(p)&&a(p),L(F)}else a(p);_=n(p)}if(_!==null)H=!0;else{var I=n(d);I!==null&&ut(O,I.startTime-F),H=!1}}break t}finally{_=null,v=at,y=!1}H=void 0}}finally{H?et():B=!1}}}var et;if(typeof D=="function")et=function(){D(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,dt=st.port2;st.port1.onmessage=G,et=function(){dt.postMessage(null)}}else et=function(){x(G,0)};function ut(F,H){P=x(function(){F(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var at=v;v=H;try{return F()}finally{v=at}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var at=v;v=F;try{return H()}finally{v=at}},o.unstable_scheduleCallback=function(F,H,at){var St=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?St+at:St):at=St,F){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=at+xt,F={id:g++,callback:H,priorityLevel:F,startTime:at,expirationTime:xt,sortIndex:-1},at>St?(F.sortIndex=at,t(d,F),n(p)===null&&F===n(d)&&(T?(C(P),P=-1):T=!0,ut(O,at-St))):(F.sortIndex=xt,t(p,F),b||y||(b=!0,B||(B=!0,et()))),F},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(F){var H=v;return function(){var at=v;v=H;try{return F.apply(this,arguments)}finally{v=at}}}})(td)),td}var tv;function wM(){return tv||(tv=1,$f.exports=AM()),$f.exports}var ed={exports:{}},zn={};var ev;function RM(){if(ev)return zn;ev=1;var o=kp();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},zn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},zn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},zn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,d){return p(d)},zn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var nv;function CM(){if(nv)return ed.exports;nv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=RM(),ed.exports}var iv;function DM(){if(iv)return fl;iv=1;var o=wM(),t=kp(),n=CM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),e;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,l=m;break}if(w===l){S=!0,l=f,s=m;break}w=w.sibling}if(!S){for(w=m.child;w;){if(w===s){S=!0,s=m,l=f;break}if(w===l){S=!0,l=m,s=f;break}w=w.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:dt(e.type)||"Memo";case Y:i=e._payload,e=e._init;try{return dt(e(i))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function I(e){return{current:e}}function it(e){0>xt||(e.current=St[xt],St[xt]=null,xt--)}function gt(e,i){xt++,St[xt]=e.current,e.current=i}var Tt=I(null),Ft=I(null),nt=I(null),ct=I(null);function Ct(e,i){switch(gt(nt,i),gt(Ft,e),gt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?v_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=v_(i),e=x_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Tt),gt(Tt,e)}function Gt(){it(Tt),it(Ft),it(nt)}function zt(e){e.memoizedState!==null&&gt(ct,e);var i=Tt.current,s=x_(i,e.type);i!==s&&(gt(Ft,e),gt(Tt,s))}function ge(e){Ft.current===e&&(it(Tt),it(Ft)),ct.current===e&&(it(ct),ol._currentValue=at)}var an,Se;function _e(e){if(an===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);an=i&&i[1]||"",Se=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+e+Se}var De=!1;function le(e,i){if(!e||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],w=m[1];if(S&&w){var z=S.split(`
`),J=w.split(`
`);for(f=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;f<J.length&&!J[f].includes("DetermineComponentFrameRoot");)f++;if(l===z.length||f===J.length)for(l=z.length-1,f=J.length-1;1<=l&&0<=f&&z[l]!==J[f];)f--;for(;1<=l&&0<=f;l--,f--)if(z[l]!==J[f]){if(l!==1||f!==1)do if(l--,f--,0>f||z[l]!==J[f]){var ht=`
`+z[l].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=l&&0<=f);break}}}finally{De=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?_e(s):""}function sn(e,i){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==i&&i!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return _e("Activity");default:return""}}function V(e){try{var i="",s=null;do i+=sn(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $e=Object.prototype.hasOwnProperty,Ae=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,kt=o.log,ie=o.unstable_setDisableYieldValue,Mt=null,bt=null;function It(e){if(typeof kt=="function"&&ie(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Rt=Math.log,ue=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Rt(e)/ue|0)|0}var Lt=256,Et=262144,Pt=4194304;function yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?f=yt(l):(S&=w,S!==0?f=yt(S):s||(s=w&~e,s!==0&&(f=yt(s))))):(w=l&~m,w!==0?f=yt(w):S!==0?f=yt(S):s||(s=l&~e,s!==0&&(f=yt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function At(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function we(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Fn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ci(e,i,s,l,f,m){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(s=S&~s;0<s;){var ht=31-Ot(s),mt=1<<ht;w[ht]=0,z[ht]=-1;var tt=J[ht];if(tt!==null)for(J[ht]=null,ht=0;ht<tt.length;ht++){var ot=tt[ht];ot!==null&&(ot.lane&=-536870913)}s&=~mt}l!==0&&Gl(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~i))}function Gl(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ot(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function xo(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Ot(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function $s(e,i){var s=i&-i;return s=(s&42)!==0?1:yo(s),(s&(e.suspendedLanes|i))!==0?0:s}function yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:G_(e.type))}function Wi(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var mi=Math.random().toString(36).slice(2),un="__reactFiber$"+mi,Tn="__reactProps$"+mi,Di="__reactContainer$"+mi,er="__reactEvents$"+mi,nr="__reactListeners$"+mi,kl="__reactHandles$"+mi,Mo="__reactResources$"+mi,Ms="__reactMarker$"+mi;function bo(e){delete e[un],delete e[Tn],delete e[er],delete e[nr],delete e[kl]}function Ha(e){var i=e[un];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Di]||s[un]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=A_(e);e!==null;){if(s=e[un])return s;e=A_(e)}return i}e=s,s=e.parentNode}return null}function Va(e){if(e=e[un]||e[Di]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function bs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ga(e){var i=e[Mo];return i||(i=e[Mo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(e){e[Ms]=!0}var j=new Set,rt={};function $(e,i){Z(e,i),Z(e+"Capture",i)}function Z(e,i){for(rt[e]=i,e=0;e<i.length;e++)j.add(i[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Nt={};function Ht(e){return $e.call(Nt,e)?!0:$e.call(Bt,e)?!1:Dt.test(e)?Nt[e]=!0:(Bt[e]=!0,!1)}function Xt(e,i,s){if(Ht(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function te(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Wt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ke(e){if(!e._valueTracker){var i=Le(e)?"checked":"value";e._valueTracker=tn(e,i,""+e[i])}}function Pe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Le(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function re(e){return e.replace(Ne,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function An(e,i,s,l,f,m,S,w){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ee(i)):e.value!==""+ee(i)&&(e.value=""+ee(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?wn(e,S,ee(i)):s!=null?wn(e,S,ee(s)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ee(w):e.removeAttribute("name")}function oa(e,i,s,l,f,m,S,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ke(e);return}s=s!=null?""+ee(s):"",i=i!=null?""+ee(i):s,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ke(e)}function wn(e,i,s){i==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function gi(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ee(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Be(e,i,s){if(i!=null&&(i=""+ee(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ee(s):""}function Rn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ut(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ee(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ke(e)}function gn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Cn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function ir(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Dn(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Dn(e,m,i[m])}function Li(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(e){return yy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Yu=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ar=null,sr=null;function _m(e){var i=Va(e);if(i&&(e=i.stateNode)){var s=e[Tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(An(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+re(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[Tn]||null;if(!f)throw Error(a(90));An(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Pe(l)}break t;case"textarea":Be(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&gi(e,!!s.multiple,i,!1)}}}var ju=!1;function vm(e,i,s){if(ju)return e(i,s);ju=!0;try{var l=e(i);return l}finally{if(ju=!1,(ar!==null||sr!==null)&&(Lc(),ar&&(i=ar,e=sr,sr=ar=null,_m(i),e)))for(i=0;i<e.length;i++)_m(e[i])}}function Eo(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=!1;if(ca)try{var To={};Object.defineProperty(To,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Ku=!1}var ka=null,Zu=null,Wl=null;function xm(){if(Wl)return Wl;var e,i=Zu,s=i.length,l,f="value"in ka?ka.value:ka.textContent,m=f.length;for(e=0;e<s&&i[e]===f[e];e++);var S=s-e;for(l=1;l<=S&&i[s-l]===f[m-l];l++);return Wl=f.slice(e,1<l?1-l:void 0)}function Yl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function ym(){return!1}function Kn(e){function i(s,l,f,m,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ql:ym,this.isPropagationStopped=ym,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Kn(Es),Ao=_({},Es,{view:0,detail:0}),Sy=Kn(Ao),Qu,Ju,wo,Kl=_({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(Qu=e.screenX-wo.screenX,Ju=e.screenY-wo.screenY):Ju=Qu=0,wo=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Ju}}),Sm=Kn(Kl),My=_({},Kl,{dataTransfer:0}),by=Kn(My),Ey=_({},Ao,{relatedTarget:0}),$u=Kn(Ey),Ty=_({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=Kn(Ty),wy=_({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ry=Kn(wy),Cy=_({},Es,{data:0}),Mm=Kn(Cy),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ny[e])?!!i[e]:!1}function th(){return Uy}var Oy=_({},Ao,{key:function(e){if(e.key){var i=Dy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Py=Kn(Oy),Iy=_({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Kn(Iy),By=_({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),Fy=Kn(By),zy=_({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Kn(zy),Vy=_({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Kn(Vy),ky=_({},Es,{newState:0,oldState:0}),Xy=Kn(ky),Wy=[9,13,27,32],eh=ca&&"CompositionEvent"in window,Ro=null;ca&&"documentMode"in document&&(Ro=document.documentMode);var Yy=ca&&"TextEvent"in window&&!Ro,Em=ca&&(!eh||Ro&&8<Ro&&11>=Ro),Tm=" ",Am=!1;function wm(e,i){switch(e){case"keyup":return Wy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function qy(e,i){switch(e){case"compositionend":return Rm(i);case"keypress":return i.which!==32?null:(Am=!0,Tm);case"textInput":return e=i.data,e===Tm&&Am?null:e;default:return null}}function jy(e,i){if(rr)return e==="compositionend"||!eh&&wm(e,i)?(e=xm(),Wl=Zu=ka=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Em&&i.locale!=="ko"?null:i.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ky[e.type]:i==="textarea"}function Dm(e,i,s,l){ar?sr?sr.push(l):sr=[l]:ar=l,i=Fc(i,"onChange"),0<i.length&&(s=new jl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Co=null,Do=null;function Zy(e){f_(e,0)}function Zl(e){var i=bs(e);if(Pe(i))return e}function Lm(e,i){if(e==="change")return i}var Nm=!1;if(ca){var nh;if(ca){var ih="oninput"in document;if(!ih){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),ih=typeof Um.oninput=="function"}nh=ih}else nh=!1;Nm=nh&&(!document.documentMode||9<document.documentMode)}function Om(){Co&&(Co.detachEvent("onpropertychange",Pm),Do=Co=null)}function Pm(e){if(e.propertyName==="value"&&Zl(Do)){var i=[];Dm(i,Do,e,qu(e)),vm(Zy,i)}}function Qy(e,i,s){e==="focusin"?(Om(),Co=i,Do=s,Co.attachEvent("onpropertychange",Pm)):e==="focusout"&&Om()}function Jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Do)}function $y(e,i){if(e==="click")return Zl(i)}function tS(e,i){if(e==="input"||e==="change")return Zl(i)}function eS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ai=typeof Object.is=="function"?Object.is:eS;function Lo(e,i){if(ai(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!$e.call(i,f)||!ai(e[f],i[f]))return!1}return!0}function Im(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bm(e,i){var s=Im(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Im(s)}}function Fm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Fm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function zm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Kt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Kt(e.document)}return i}function ah(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var nS=ca&&"documentMode"in document&&11>=document.documentMode,or=null,sh=null,No=null,rh=!1;function Hm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rh||or==null||or!==Kt(l)||(l=or,"selectionStart"in l&&ah(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Lo(No,l)||(No=l,l=Fc(sh,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=or)))}function Ts(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var lr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},oh={},Vm={};ca&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function As(e){if(oh[e])return oh[e];if(!lr[e])return e;var i=lr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Vm)return oh[e]=i[s];return e}var Gm=As("animationend"),km=As("animationiteration"),Xm=As("animationstart"),iS=As("transitionrun"),aS=As("transitionstart"),sS=As("transitioncancel"),Wm=As("transitionend"),Ym=new Map,lh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lh.push("scrollEnd");function Ni(e,i){Ym.set(e,i),$(i,[e])}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],cr=0,ch=0;function Jl(){for(var e=cr,i=ch=cr=0;i<e;){var s=_i[i];_i[i++]=null;var l=_i[i];_i[i++]=null;var f=_i[i];_i[i++]=null;var m=_i[i];if(_i[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}m!==0&&qm(s,f,m)}}function $l(e,i,s,l){_i[cr++]=e,_i[cr++]=i,_i[cr++]=s,_i[cr++]=l,ch|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function uh(e,i,s,l){return $l(e,i,s,l),tc(e)}function ws(e,i){return $l(e,null,null,i),tc(e)}function qm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-Ot(s),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function tc(e){if(50<tl)throw tl=0,yf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ur={};function rS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,i,s,l){return new rS(e,i,s,l)}function hh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,i){var s=e.alternate;return s===null?(s=si(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function ec(e,i,s,l,f,m){var S=0;if(l=e,typeof e=="function")hh(e)&&(S=1);else if(typeof e=="string")S=hM(e,s,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=si(31,s,i,f),e.elementType=A,e.lanes=m,e;case T:return Rs(s.children,f,m,i);case M:S=8,f|=24;break;case x:return e=si(12,s,i,f|2),e.elementType=x,e.lanes=m,e;case O:return e=si(13,s,i,f),e.elementType=O,e.lanes=m,e;case B:return e=si(19,s,i,f),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case C:S=9;break t;case L:S=11;break t;case P:S=14;break t;case Y:S=16,l=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=si(S,s,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function Rs(e,i,s,l){return e=si(7,e,l,i),e.lanes=s,e}function fh(e,i,s){return e=si(6,e,null,i),e.lanes=s,e}function Km(e){var i=si(18,null,null,0);return i.stateNode=e,i}function dh(e,i,s){return i=si(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Zm=new WeakMap;function vi(e,i){if(typeof e=="object"&&e!==null){var s=Zm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:V(i)},Zm.set(e,i),i)}return{value:e,source:i,stack:V(i)}}var hr=[],fr=0,nc=null,Uo=0,xi=[],yi=0,Xa=null,Yi=1,qi="";function ha(e,i){hr[fr++]=Uo,hr[fr++]=nc,nc=e,Uo=i}function Qm(e,i,s){xi[yi++]=Yi,xi[yi++]=qi,xi[yi++]=Xa,Xa=e;var l=Yi;e=qi;var f=32-Ot(l)-1;l&=~(1<<f),s+=1;var m=32-Ot(i)+f;if(30<m){var S=f-f%5;m=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Yi=1<<32-Ot(i)+f|s<<f|l,qi=m+e}else Yi=1<<m|s<<f|l,qi=e}function ph(e){e.return!==null&&(ha(e,1),Qm(e,1,0))}function mh(e){for(;e===nc;)nc=hr[--fr],hr[fr]=null,Uo=hr[--fr],hr[fr]=null;for(;e===Xa;)Xa=xi[--yi],xi[yi]=null,qi=xi[--yi],xi[yi]=null,Yi=xi[--yi],xi[yi]=null}function Jm(e,i){xi[yi++]=Yi,xi[yi++]=qi,xi[yi++]=Xa,Yi=i.id,qi=i.overflow,Xa=e}var Ln=null,Qe=null,Ee=!1,Wa=null,Si=!1,gh=Error(a(519));function Ya(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(vi(i,e)),gh}function $m(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[un]=e,i[Tn]=l,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<nl.length;s++)xe(nl[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),oa(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Rn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||g_(i.textContent,s)?(l.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),l.onScroll!=null&&xe("scroll",i),l.onScrollEnd!=null&&xe("scrollend",i),l.onClick!=null&&(i.onclick=la),i=!0):i=!1,i||Ya(e,!0)}function tg(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Ln=Ln.return}}function dr(e){if(e!==Ln)return!1;if(!Ee)return tg(e),Ee=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Pf(e.type,e.memoizedProps)),s=!s),s&&Qe&&Ya(e),tg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=T_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=T_(e)}else i===27?(i=Qe,rs(e.type)?(e=Hf,Hf=null,Qe=e):Qe=i):Qe=Ln?bi(e.stateNode.nextSibling):null;return!0}function Cs(){Qe=Ln=null,Ee=!1}function _h(){var e=Wa;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Wa=null),e}function Oo(e){Wa===null?Wa=[e]:Wa.push(e)}var vh=I(null),Ds=null,fa=null;function qa(e,i,s){gt(vh,i._currentValue),i._currentValue=s}function da(e){e._currentValue=vh.current,it(vh)}function xh(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function yh(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=f;for(var z=0;z<i.length;z++)if(w.context===i[z]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),xh(m.return,s,e),l||(S=null);break t}m=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),xh(S,s,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function pr(e,i,s,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var w=f.type;ai(f.pendingProps.value,S.value)||(e!==null?e.push(w):e=[w])}}else if(f===ct.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}f=f.return}e!==null&&yh(i,e,s,l),i.flags|=262144}function ic(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ls(e){Ds=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return eg(Ds,e)}function ac(e,i){return Ds===null&&Ls(e),eg(e,i)}function eg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return s}var oS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},lS=o.unstable_scheduleCallback,cS=o.unstable_NormalPriority,hn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sh(){return{controller:new oS,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&lS(cS,function(){e.controller.abort()})}var Io=null,Mh=0,mr=0,gr=null;function uS(e,i){if(Io===null){var s=Io=[];Mh=0,mr=Af(),gr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Mh++,i.then(ng,ng),i}function ng(){if(--Mh===0&&Io!==null){gr!==null&&(gr.status="fulfilled");var e=Io;Io=null,mr=0,gr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function hS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var ig=F.S;F.S=function(e,i){H0=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&uS(e,i),ig!==null&&ig(e,i)};var Ns=I(null);function bh(){var e=Ns.current;return e!==null?e:je.pooledCache}function sc(e,i){i===null?gt(Ns,Ns.current):gt(Ns,i.pool)}function ag(){var e=bh();return e===null?null:{parent:hn._currentValue,pool:e}}var _r=Error(a(460)),Eh=Error(a(474)),rc=Error(a(542)),oc={then:function(){}};function sg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(la,la),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,lg(e),e;default:if(typeof i.status=="string")i.then(la,la);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,lg(e),e}throw Os=i,_r}}function Us(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Os=s,_r):s}}var Os=null;function og(){if(Os===null)throw Error(a(459));var e=Os;return Os=null,e}function lg(e){if(e===_r||e===rc)throw Error(a(483))}var vr=null,Bo=0;function lc(e){var i=Bo;return Bo+=1,vr===null&&(vr=[]),rg(vr,e,i)}function Fo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function cc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function cg(e){function i(K,k){if(e){var Q=K.deletions;Q===null?(K.deletions=[k],K.flags|=16):Q.push(k)}}function s(K,k){if(!e)return null;for(;k!==null;)i(K,k),k=k.sibling;return null}function l(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function f(K,k){return K=ua(K,k),K.index=0,K.sibling=null,K}function m(K,k,Q){return K.index=Q,e?(Q=K.alternate,Q!==null?(Q=Q.index,Q<k?(K.flags|=67108866,k):Q):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function w(K,k,Q,pt){return k===null||k.tag!==6?(k=fh(Q,K.mode,pt),k.return=K,k):(k=f(k,Q),k.return=K,k)}function z(K,k,Q,pt){var Jt=Q.type;return Jt===T?ht(K,k,Q.props.children,pt,Q.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Y&&Us(Jt)===k.type)?(k=f(k,Q.props),Fo(k,Q),k.return=K,k):(k=ec(Q.type,Q.key,Q.props,null,K.mode,pt),Fo(k,Q),k.return=K,k)}function J(K,k,Q,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=dh(Q,K.mode,pt),k.return=K,k):(k=f(k,Q.children||[]),k.return=K,k)}function ht(K,k,Q,pt,Jt){return k===null||k.tag!==7?(k=Rs(Q,K.mode,pt,Jt),k.return=K,k):(k=f(k,Q),k.return=K,k)}function mt(K,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=fh(""+k,K.mode,Q),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return Q=ec(k.type,k.key,k.props,null,K.mode,Q),Fo(Q,k),Q.return=K,Q;case b:return k=dh(k,K.mode,Q),k.return=K,k;case Y:return k=Us(k),mt(K,k,Q)}if(ut(k)||et(k))return k=Rs(k,K.mode,Q,null),k.return=K,k;if(typeof k.then=="function")return mt(K,lc(k),Q);if(k.$$typeof===D)return mt(K,ac(K,k),Q);cc(K,k)}return null}function tt(K,k,Q,pt){var Jt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Jt!==null?null:w(K,k,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Jt?z(K,k,Q,pt):null;case b:return Q.key===Jt?J(K,k,Q,pt):null;case Y:return Q=Us(Q),tt(K,k,Q,pt)}if(ut(Q)||et(Q))return Jt!==null?null:ht(K,k,Q,pt,null);if(typeof Q.then=="function")return tt(K,k,lc(Q),pt);if(Q.$$typeof===D)return tt(K,k,ac(K,Q),pt);cc(K,Q)}return null}function ot(K,k,Q,pt,Jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(Q)||null,w(k,K,""+pt,Jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return K=K.get(pt.key===null?Q:pt.key)||null,z(k,K,pt,Jt);case b:return K=K.get(pt.key===null?Q:pt.key)||null,J(k,K,pt,Jt);case Y:return pt=Us(pt),ot(K,k,Q,pt,Jt)}if(ut(pt)||et(pt))return K=K.get(Q)||null,ht(k,K,pt,Jt,null);if(typeof pt.then=="function")return ot(K,k,Q,lc(pt),Jt);if(pt.$$typeof===D)return ot(K,k,Q,ac(k,pt),Jt);cc(k,pt)}return null}function Vt(K,k,Q,pt){for(var Jt=null,Re=null,qt=k,he=k=0,be=null;qt!==null&&he<Q.length;he++){qt.index>he?(be=qt,qt=null):be=qt.sibling;var Ce=tt(K,qt,Q[he],pt);if(Ce===null){qt===null&&(qt=be);break}e&&qt&&Ce.alternate===null&&i(K,qt),k=m(Ce,k,he),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce,qt=be}if(he===Q.length)return s(K,qt),Ee&&ha(K,he),Jt;if(qt===null){for(;he<Q.length;he++)qt=mt(K,Q[he],pt),qt!==null&&(k=m(qt,k,he),Re===null?Jt=qt:Re.sibling=qt,Re=qt);return Ee&&ha(K,he),Jt}for(qt=l(qt);he<Q.length;he++)be=ot(qt,K,he,Q[he],pt),be!==null&&(e&&be.alternate!==null&&qt.delete(be.key===null?he:be.key),k=m(be,k,he),Re===null?Jt=be:Re.sibling=be,Re=be);return e&&qt.forEach(function(hs){return i(K,hs)}),Ee&&ha(K,he),Jt}function ne(K,k,Q,pt){if(Q==null)throw Error(a(151));for(var Jt=null,Re=null,qt=k,he=k=0,be=null,Ce=Q.next();qt!==null&&!Ce.done;he++,Ce=Q.next()){qt.index>he?(be=qt,qt=null):be=qt.sibling;var hs=tt(K,qt,Ce.value,pt);if(hs===null){qt===null&&(qt=be);break}e&&qt&&hs.alternate===null&&i(K,qt),k=m(hs,k,he),Re===null?Jt=hs:Re.sibling=hs,Re=hs,qt=be}if(Ce.done)return s(K,qt),Ee&&ha(K,he),Jt;if(qt===null){for(;!Ce.done;he++,Ce=Q.next())Ce=mt(K,Ce.value,pt),Ce!==null&&(k=m(Ce,k,he),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return Ee&&ha(K,he),Jt}for(qt=l(qt);!Ce.done;he++,Ce=Q.next())Ce=ot(qt,K,he,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&qt.delete(Ce.key===null?he:Ce.key),k=m(Ce,k,he),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return e&&qt.forEach(function(MM){return i(K,MM)}),Ee&&ha(K,he),Jt}function Ye(K,k,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Jt=Q.key;k!==null;){if(k.key===Jt){if(Jt=Q.type,Jt===T){if(k.tag===7){s(K,k.sibling),pt=f(k,Q.props.children),pt.return=K,K=pt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Y&&Us(Jt)===k.type){s(K,k.sibling),pt=f(k,Q.props),Fo(pt,Q),pt.return=K,K=pt;break t}s(K,k);break}else i(K,k);k=k.sibling}Q.type===T?(pt=Rs(Q.props.children,K.mode,pt,Q.key),pt.return=K,K=pt):(pt=ec(Q.type,Q.key,Q.props,null,K.mode,pt),Fo(pt,Q),pt.return=K,K=pt)}return S(K);case b:t:{for(Jt=Q.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){s(K,k.sibling),pt=f(k,Q.children||[]),pt.return=K,K=pt;break t}else{s(K,k);break}else i(K,k);k=k.sibling}pt=dh(Q,K.mode,pt),pt.return=K,K=pt}return S(K);case Y:return Q=Us(Q),Ye(K,k,Q,pt)}if(ut(Q))return Vt(K,k,Q,pt);if(et(Q)){if(Jt=et(Q),typeof Jt!="function")throw Error(a(150));return Q=Jt.call(Q),ne(K,k,Q,pt)}if(typeof Q.then=="function")return Ye(K,k,lc(Q),pt);if(Q.$$typeof===D)return Ye(K,k,ac(K,Q),pt);cc(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(s(K,k.sibling),pt=f(k,Q),pt.return=K,K=pt):(s(K,k),pt=fh(Q,K.mode,pt),pt.return=K,K=pt),S(K)):s(K,k)}return function(K,k,Q,pt){try{Bo=0;var Jt=Ye(K,k,Q,pt);return vr=null,Jt}catch(qt){if(qt===_r||qt===rc)throw qt;var Re=si(29,qt,null,K.mode);return Re.lanes=pt,Re.return=K,Re}}}var Ps=cg(!0),ug=cg(!1),ja=!1;function Th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ah(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=tc(e),qm(e,null,s),i}return $l(e,l,i,s),tc(e)}function zo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,xo(e,s)}}function wh(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Rh=!1;function Ho(){if(Rh){var e=gr;if(e!==null)throw e}}function Vo(e,i,s,l){Rh=!1;var f=e.updateQueue;ja=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var z=w,J=z.next;z.next=null,S===null?m=J:S.next=J,S=z;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,w=ht.lastBaseUpdate,w!==S&&(w===null?ht.firstBaseUpdate=J:w.next=J,ht.lastBaseUpdate=z))}if(m!==null){var mt=f.baseState;S=0,ht=J=z=null,w=m;do{var tt=w.lane&-536870913,ot=tt!==w.lane;if(ot?(Me&tt)===tt:(l&tt)===tt){tt!==0&&tt===mr&&(Rh=!0),ht!==null&&(ht=ht.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Vt=e,ne=w;tt=i;var Ye=s;switch(ne.tag){case 1:if(Vt=ne.payload,typeof Vt=="function"){mt=Vt.call(Ye,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ne.payload,tt=typeof Vt=="function"?Vt.call(Ye,mt,tt):Vt,tt==null)break t;mt=_({},mt,tt);break t;case 2:ja=!0}}tt=w.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=f.callbacks,ot===null?f.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ht===null?(J=ht=ot,z=mt):ht=ht.next=ot,S|=tt;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;ot=w,w=ot.next,ot.next=null,f.lastBaseUpdate=ot,f.shared.pending=null}}while(!0);ht===null&&(z=mt),f.baseState=z,f.firstBaseUpdate=J,f.lastBaseUpdate=ht,m===null&&(f.shared.lanes=0),es|=S,e.lanes=S,e.memoizedState=mt}}function hg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function fg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)hg(s[e],i)}var xr=I(null),uc=I(0);function dg(e,i){e=Ma,gt(uc,e),gt(xr,i),Ma=e|i.baseLanes}function Ch(){gt(uc,Ma),gt(xr,xr.current)}function Dh(){Ma=uc.current,it(xr),it(uc)}var ri=I(null),Mi=null;function Qa(e){var i=e.alternate;gt(ln,ln.current&1),gt(ri,e),Mi===null&&(i===null||xr.current!==null||i.memoizedState!==null)&&(Mi=e)}function Lh(e){gt(ln,ln.current),gt(ri,e),Mi===null&&(Mi=e)}function pg(e){e.tag===22?(gt(ln,ln.current),gt(ri,e),Mi===null&&(Mi=e)):Ja()}function Ja(){gt(ln,ln.current),gt(ri,ri.current)}function oi(e){it(ri),Mi===e&&(Mi=null),it(ln)}var ln=I(0);function hc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ff(s)||zf(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pa=0,ce=null,Xe=null,fn=null,fc=!1,yr=!1,Is=!1,dc=0,Go=0,Sr=null,fS=0;function rn(){throw Error(a(321))}function Nh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ai(e[s],i[s]))return!1;return!0}function Uh(e,i,s,l,f,m){return pa=m,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Qg:jh,Is=!1,m=s(l,f),Is=!1,yr&&(m=gg(i,s,l,f)),mg(e),m}function mg(e){F.H=Wo;var i=Xe!==null&&Xe.next!==null;if(pa=0,fn=Xe=ce=null,fc=!1,Go=0,Sr=null,i)throw Error(a(300));e===null||dn||(e=e.dependencies,e!==null&&ic(e)&&(dn=!0))}function gg(e,i,s,l){ce=e;var f=0;do{if(yr&&(Sr=null),Go=0,yr=!1,25<=f)throw Error(a(301));if(f+=1,fn=Xe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Jg,m=i(s,l)}while(yr);return m}function dS(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?ko(i):i,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ce.flags|=1024),i}function Oh(){var e=dc!==0;return dc=0,e}function Ph(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Ih(e){if(fc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}fc=!1}pa=0,fn=Xe=ce=null,yr=!1,Go=dc=0,Sr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ce.memoizedState=fn=e:fn=fn.next=e,fn}function cn(){if(Xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var i=fn===null?ce.memoizedState:fn.next;if(i!==null)fn=i,Xe=e;else{if(e===null)throw ce.alternate===null?Error(a(467)):Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},fn===null?ce.memoizedState=fn=e:fn=fn.next=e}return fn}function pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var i=Go;return Go+=1,Sr===null&&(Sr=[]),e=rg(Sr,e,i),i=ce,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Qg:jh),e}function mc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===D)return Nn(e)}throw Error(a(438,String(e)))}function Bh(e){var i=null,s=ce.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=pc(),ce.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=N;return i.index++,s}function ma(e,i){return typeof i=="function"?i(e):i}function gc(e){var i=cn();return Fh(i,Xe,e)}function Fh(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var w=S=null,z=null,J=i,ht=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Me&mt)===mt:(pa&mt)===mt){var tt=J.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===mr&&(ht=!0);else if((pa&tt)===tt){J=J.next,tt===mr&&(ht=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(w=z=mt,S=m):z=z.next=mt,ce.lanes|=tt,es|=tt;mt=J.action,Is&&s(m,mt),m=J.hasEagerState?J.eagerState:s(m,mt)}else tt={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(w=z=tt,S=m):z=z.next=tt,ce.lanes|=mt,es|=mt;J=J.next}while(J!==null&&J!==i);if(z===null?S=m:z.next=w,!ai(m,e.memoizedState)&&(dn=!0,ht&&(s=gr,s!==null)))throw s;e.memoizedState=m,e.baseState=S,e.baseQueue=z,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function zh(e){var i=cn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=e(m,S.action),S=S.next;while(S!==f);ai(m,i.memoizedState)||(dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function _g(e,i,s){var l=ce,f=cn(),m=Ee;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ai((Xe||f).memoizedState,s);if(S&&(f.memoizedState=s,dn=!0),f=f.queue,Gh(yg.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,Mr(9,{destroy:void 0},xg.bind(null,l,f,s,i),null),je===null)throw Error(a(349));m||(pa&127)!==0||vg(l,i,s)}return s}function vg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ce.updateQueue,i===null?(i=pc(),ce.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function xg(e,i,s,l){i.value=s,i.getSnapshot=l,Sg(i)&&Mg(e)}function yg(e,i,s){return s(function(){Sg(i)&&Mg(e)})}function Sg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ai(e,s)}catch{return!0}}function Mg(e){var i=ws(e,2);i!==null&&ti(i,e,2)}function Hh(e){var i=Gn();if(typeof e=="function"){var s=e;if(e=s(),Is){It(!0);try{s()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},i}function bg(e,i,s,l){return e.baseState=s,Fh(e,Xe,typeof l=="function"?l:ma)}function pS(e,i,s,l,f){if(xc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Eg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Eg(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=F.T,S={};F.T=S;try{var w=s(f,l),z=F.S;z!==null&&z(S,w),Tg(e,i,w)}catch(J){Vh(e,i,J)}finally{m!==null&&S.types!==null&&(m.types=S.types),F.T=m}}else try{m=s(f,l),Tg(e,i,m)}catch(J){Vh(e,i,J)}}function Tg(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Ag(e,i,l)},function(l){return Vh(e,i,l)}):Ag(e,i,s)}function Ag(e,i,s){i.status="fulfilled",i.value=s,wg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Eg(e,s)))}function Vh(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,wg(i),i=i.next;while(i!==l)}e.action=null}function wg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Rg(e,i){return i}function Cg(e,i){if(Ee){var s=je.formState;if(s!==null){t:{var l=ce;if(Ee){if(Qe){e:{for(var f=Qe,m=Si;f.nodeType!==8;){if(!m){f=null;break e}if(f=bi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Qe=bi(f.nextSibling),l=f.data==="F!";break t}}Ya(l)}l=!1}l&&(i=s[0])}}return s=Gn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rg,lastRenderedState:i},s.queue=l,s=jg.bind(null,ce,l),l.dispatch=s,l=Hh(!1),m=qh.bind(null,ce,!1,l.queue),l=Gn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=pS.bind(null,ce,f,m,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function Dg(e){var i=cn();return Lg(i,Xe,e)}function Lg(e,i,s){if(i=Fh(e,i,Rg)[0],e=gc(ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ko(i)}catch(S){throw S===_r?rc:S}else l=i;i=cn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ce.flags|=2048,Mr(9,{destroy:void 0},mS.bind(null,f,s),null)),[l,m,e]}function mS(e,i){e.action=i}function Ng(e){var i=cn(),s=Xe;if(s!==null)return Lg(i,s,e);cn(),i=i.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Mr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ce.updateQueue,i===null&&(i=pc(),ce.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Ug(){return cn().memoizedState}function _c(e,i,s,l){var f=Gn();ce.flags|=e,f.memoizedState=Mr(1|i,{destroy:void 0},s,l===void 0?null:l)}function vc(e,i,s,l){var f=cn();l=l===void 0?null:l;var m=f.memoizedState.inst;Xe!==null&&l!==null&&Nh(l,Xe.memoizedState.deps)?f.memoizedState=Mr(i,m,s,l):(ce.flags|=e,f.memoizedState=Mr(1|i,m,s,l))}function Og(e,i){_c(8390656,8,e,i)}function Gh(e,i){vc(2048,8,e,i)}function gS(e){ce.flags|=4;var i=ce.updateQueue;if(i===null)i=pc(),ce.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Pg(e){var i=cn().memoizedState;return gS({ref:i,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ig(e,i){return vc(4,2,e,i)}function Bg(e,i){return vc(4,4,e,i)}function Fg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function zg(e,i,s){s=s!=null?s.concat([e]):null,vc(4,4,Fg.bind(null,i,e),s)}function kh(){}function Hg(e,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Nh(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Vg(e,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Nh(i,l[1]))return l[0];if(l=e(),Is){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[l,i],l}function Xh(e,i,s){return s===void 0||(pa&1073741824)!==0&&(Me&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=G0(),ce.lanes|=e,es|=e,s)}function Gg(e,i,s,l){return ai(s,i)?s:xr.current!==null?(e=Xh(e,s,l),ai(e,i)||(dn=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(Me&261930)===0?(dn=!0,e.memoizedState=s):(e=G0(),ce.lanes|=e,es|=e,i)}function kg(e,i,s,l,f){var m=H.p;H.p=m!==0&&8>m?m:8;var S=F.T,w={};F.T=w,qh(e,!1,i,s);try{var z=f(),J=F.S;if(J!==null&&J(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ht=hS(z,l);Xo(e,i,ht,ui(e))}else Xo(e,i,l,ui(e))}catch(mt){Xo(e,i,{then:function(){},status:"rejected",reason:mt},ui())}finally{H.p=m,S!==null&&w.types!==null&&(S.types=w.types),F.T=S}}function _S(){}function Wh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Xg(e).queue;kg(e,f,i,at,s===null?_S:function(){return Wg(e),s(l)})}function Xg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:at},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Wg(e){var i=Xg(e);i.next===null&&(i=e.alternate.memoizedState),Xo(e,i.next.queue,{},ui())}function Yh(){return Nn(ol)}function Yg(){return cn().memoizedState}function qg(){return cn().memoizedState}function vS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ui();e=Ka(s);var l=Za(i,e,s);l!==null&&(ti(l,i,s),zo(l,i,s)),i={cache:Sh()},e.payload=i;return}i=i.return}}function xS(e,i,s){var l=ui();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},xc(e)?Kg(i,s):(s=uh(e,i,s,l),s!==null&&(ti(s,e,l),Zg(s,i,l)))}function jg(e,i,s){var l=ui();Xo(e,i,s,l)}function Xo(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(xc(e))Kg(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,w=m(S,s);if(f.hasEagerState=!0,f.eagerState=w,ai(w,S))return $l(e,i,f,0),je===null&&Jl(),!1}catch{}if(s=uh(e,i,f,l),s!==null)return ti(s,e,l),Zg(s,i,l),!0}return!1}function qh(e,i,s,l){if(l={lane:2,revertLane:Af(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},xc(e)){if(i)throw Error(a(479))}else i=uh(e,s,l,2),i!==null&&ti(i,e,2)}function xc(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function Kg(e,i){yr=fc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Zg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,xo(e,s)}}var Wo={readContext:Nn,use:mc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Wo.useEffectEvent=rn;var Qg={readContext:Nn,use:mc,useCallback:function(e,i){return Gn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:Og,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,_c(4194308,4,Fg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return _c(4194308,4,e,i)},useInsertionEffect:function(e,i){_c(4,2,e,i)},useMemo:function(e,i){var s=Gn();i=i===void 0?null:i;var l=e();if(Is){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Gn();if(s!==void 0){var f=s(i);if(Is){It(!0);try{s(i)}finally{It(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=xS.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var i=Gn();return e={current:e},i.memoizedState=e},useState:function(e){e=Hh(e);var i=e.queue,s=jg.bind(null,ce,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:kh,useDeferredValue:function(e,i){var s=Gn();return Xh(s,e,i)},useTransition:function(){var e=Hh(!1);return e=kg.bind(null,ce,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ce,f=Gn();if(Ee){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),je===null)throw Error(a(349));(Me&127)!==0||vg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Og(yg.bind(null,l,m,e),[e]),l.flags|=2048,Mr(9,{destroy:void 0},xg.bind(null,l,m,s,i),null),s},useId:function(){var e=Gn(),i=je.identifierPrefix;if(Ee){var s=qi,l=Yi;s=(l&~(1<<32-Ot(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=dc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=fS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Yh,useFormState:Cg,useActionState:Cg,useOptimistic:function(e){var i=Gn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=qh.bind(null,ce,!0,s),s.dispatch=i,[e,i]},useMemoCache:Bh,useCacheRefresh:function(){return Gn().memoizedState=vS.bind(null,ce)},useEffectEvent:function(e){var i=Gn(),s={impl:e};return i.memoizedState=s,function(){if((Ue&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},jh={readContext:Nn,use:mc,useCallback:Hg,useContext:Nn,useEffect:Gh,useImperativeHandle:zg,useInsertionEffect:Ig,useLayoutEffect:Bg,useMemo:Vg,useReducer:gc,useRef:Ug,useState:function(){return gc(ma)},useDebugValue:kh,useDeferredValue:function(e,i){var s=cn();return Gg(s,Xe.memoizedState,e,i)},useTransition:function(){var e=gc(ma)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:_g,useId:Yg,useHostTransitionStatus:Yh,useFormState:Dg,useActionState:Dg,useOptimistic:function(e,i){var s=cn();return bg(s,Xe,e,i)},useMemoCache:Bh,useCacheRefresh:qg};jh.useEffectEvent=Pg;var Jg={readContext:Nn,use:mc,useCallback:Hg,useContext:Nn,useEffect:Gh,useImperativeHandle:zg,useInsertionEffect:Ig,useLayoutEffect:Bg,useMemo:Vg,useReducer:zh,useRef:Ug,useState:function(){return zh(ma)},useDebugValue:kh,useDeferredValue:function(e,i){var s=cn();return Xe===null?Xh(s,e,i):Gg(s,Xe.memoizedState,e,i)},useTransition:function(){var e=zh(ma)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:_g,useId:Yg,useHostTransitionStatus:Yh,useFormState:Ng,useActionState:Ng,useOptimistic:function(e,i){var s=cn();return Xe!==null?bg(s,Xe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Bh,useCacheRefresh:qg};Jg.useEffectEvent=Pg;function Kh(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Zh={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ui(),f=Ka(l);f.payload=i,s!=null&&(f.callback=s),i=Za(e,f,l),i!==null&&(ti(i,e,l),zo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ui(),f=Ka(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Za(e,f,l),i!==null&&(ti(i,e,l),zo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ui(),l=Ka(s);l.tag=2,i!=null&&(l.callback=i),i=Za(e,l,s),i!==null&&(ti(i,e,s),zo(i,e,s))}};function $g(e,i,s,l,f,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!Lo(s,l)||!Lo(f,m):!0}function t0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Zh.enqueueReplaceState(i,i.state,null)}function Bs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function e0(e){Ql(e)}function n0(e){console.error(e)}function i0(e){Ql(e)}function yc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function a0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Qh(e,i,s){return s=Ka(s),s.tag=3,s.payload={element:null},s.callback=function(){yc(e,i)},s}function s0(e){return e=Ka(e),e.tag=3,e}function r0(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){a0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){a0(i,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function yS(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&pr(i,s,f,!0),s=ri.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Nc():s.alternate===null&&on===0&&(on=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===oc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),bf(e,l,f)),!1;case 22:return s.flags|=65536,l===oc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),bf(e,l,f)),!1}throw Error(a(435,s.tag))}return bf(e,l,f),Nc(),!1}if(Ee)return i=ri.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==gh&&(e=Error(a(422),{cause:l}),Oo(vi(e,s)))):(l!==gh&&(i=Error(a(423),{cause:l}),Oo(vi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=vi(l,s),f=Qh(e.stateNode,l,f),wh(e,f),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:l});if(m=vi(m,s),$o===null?$o=[m]:$o.push(m),on!==4&&(on=2),i===null)return!0;l=vi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Qh(s.stateNode,l,e),wh(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ns===null||!ns.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=s0(f),r0(f,e,s,l),wh(s,f),!1}s=s.return}while(s!==null);return!1}var Jh=Error(a(461)),dn=!1;function Un(e,i,s,l){i.child=e===null?ug(i,null,s,l):Ps(i,e.child,s,l)}function o0(e,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return Ls(i),l=Uh(e,i,s,S,m,f),w=Oh(),e!==null&&!dn?(Ph(e,i,f),ga(e,i,f)):(Ee&&w&&ph(i),i.flags|=1,Un(e,i,l,f),i.child)}function l0(e,i,s,l,f){if(e===null){var m=s.type;return typeof m=="function"&&!hh(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,c0(e,i,m,l,f)):(e=ec(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!of(e,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:Lo,s(S,l)&&e.ref===i.ref)return ga(e,i,f)}return i.flags|=1,e=ua(m,l),e.ref=i.ref,e.return=i,i.child=e}function c0(e,i,s,l,f){if(e!==null){var m=e.memoizedProps;if(Lo(m,l)&&e.ref===i.ref)if(dn=!1,i.pendingProps=l=m,of(e,f))(e.flags&131072)!==0&&(dn=!0);else return i.lanes=e.lanes,ga(e,i,f)}return $h(e,i,s,l,f)}function u0(e,i,s,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return h0(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&sc(i,m!==null?m.cachePool:null),m!==null?dg(i,m):Ch(),pg(i);else return l=i.lanes=536870912,h0(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(sc(i,m.cachePool),dg(i,m),Ja(),i.memoizedState=null):(e!==null&&sc(i,null),Ch(),Ja());return Un(e,i,f,s),i.child}function Yo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function h0(e,i,s,l,f){var m=bh();return m=m===null?null:{parent:hn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&sc(i,null),Ch(),pg(i),e!==null&&pr(e,i,l,!0),i.childLanes=f,null}function Sc(e,i){return i=bc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function f0(e,i,s){return Ps(i,e.child,null,s),e=Sc(i,i.pendingProps),e.flags|=2,oi(i),i.memoizedState=null,e}function SS(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=Sc(i,l),i.lanes=536870912,Yo(null,e);if(Lh(i),(e=Qe)?(e=E_(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},s=Km(e),s.return=i,i.child=s,Ln=i,Qe=null)):e=null,e===null)throw Ya(i);return i.lanes=536870912,null}return Sc(i,l)}var m=e.memoizedState;if(m!==null){var S=m.dehydrated;if(Lh(i),f)if(i.flags&256)i.flags&=-257,i=f0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(dn||pr(e,i,s,!1),f=(s&e.childLanes)!==0,dn||f){if(l=je,l!==null&&(S=$s(l,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,ws(e,S),ti(l,e,S),Jh;Nc(),i=f0(e,i,s)}else e=m.treeContext,Qe=bi(S.nextSibling),Ln=i,Ee=!0,Wa=null,Si=!1,e!==null&&Jm(i,e),i=Sc(i,l),i.flags|=4096;return i}return e=ua(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Mc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function $h(e,i,s,l,f){return Ls(i),s=Uh(e,i,s,l,void 0,f),l=Oh(),e!==null&&!dn?(Ph(e,i,f),ga(e,i,f)):(Ee&&l&&ph(i),i.flags|=1,Un(e,i,s,f),i.child)}function d0(e,i,s,l,f,m){return Ls(i),i.updateQueue=null,s=gg(i,l,s,f),mg(e),l=Oh(),e!==null&&!dn?(Ph(e,i,m),ga(e,i,m)):(Ee&&l&&ph(i),i.flags|=1,Un(e,i,s,m),i.child)}function p0(e,i,s,l,f){if(Ls(i),i.stateNode===null){var m=ur,S=s.contextType;typeof S=="object"&&S!==null&&(m=Nn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Th(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Nn(S):ur,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Kh(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Zh.enqueueReplaceState(m,m.state,null),Vo(i,l,m,f),Ho(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var w=i.memoizedProps,z=Bs(s,w);m.props=z;var J=m.context,ht=s.contextType;S=ur,typeof ht=="object"&&ht!==null&&(S=Nn(ht));var mt=s.getDerivedStateFromProps;ht=typeof mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||J!==S)&&t0(i,m,l,S),ja=!1;var tt=i.memoizedState;m.state=tt,Vo(i,l,m,f),Ho(),J=i.memoizedState,w||tt!==J||ja?(typeof mt=="function"&&(Kh(i,s,mt,l),J=i.memoizedState),(z=ja||$g(i,s,z,l,tt,J,S))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=J),m.props=l,m.state=J,m.context=S,l=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Ah(e,i),S=i.memoizedProps,ht=Bs(s,S),m.props=ht,mt=i.pendingProps,tt=m.context,J=s.contextType,z=ur,typeof J=="object"&&J!==null&&(z=Nn(J)),w=s.getDerivedStateFromProps,(J=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==mt||tt!==z)&&t0(i,m,l,z),ja=!1,tt=i.memoizedState,m.state=tt,Vo(i,l,m,f),Ho();var ot=i.memoizedState;S!==mt||tt!==ot||ja||e!==null&&e.dependencies!==null&&ic(e.dependencies)?(typeof w=="function"&&(Kh(i,s,w,l),ot=i.memoizedState),(ht=ja||$g(i,s,ht,l,tt,ot,z)||e!==null&&e.dependencies!==null&&ic(e.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ot,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ot,z)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ot),m.props=l,m.state=ot,m.context=z,l=ht):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Mc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Ps(i,e.child,null,f),i.child=Ps(i,null,s,f)):Un(e,i,s,f),i.memoizedState=m.state,e=i.child):e=ga(e,i,f),e}function m0(e,i,s,l){return Cs(),i.flags|=256,Un(e,i,s,l),i.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:ag()}}function nf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ci),e}function g0(e,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(f?Qa(i):Ja(),(e=Qe)?(e=E_(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},s=Km(e),s.return=i,i.child=s,Ln=i,Qe=null)):e=null,e===null)throw Ya(i);return zf(e)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ja(),f=i.mode,w=bc({mode:"hidden",children:w},f),l=Rs(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=ef(s),l.childLanes=nf(e,S,s),i.memoizedState=tf,Yo(null,l)):(Qa(i),af(i,w))}var z=e.memoizedState;if(z!==null&&(w=z.dehydrated,w!==null)){if(m)i.flags&256?(Qa(i),i.flags&=-257,i=sf(e,i,s)):i.memoizedState!==null?(Ja(),i.child=e.child,i.flags|=128,i=null):(Ja(),w=l.fallback,f=i.mode,l=bc({mode:"visible",children:l.children},f),w=Rs(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Ps(i,e.child,null,s),l=i.child,l.memoizedState=ef(s),l.childLanes=nf(e,S,s),i.memoizedState=tf,i=Yo(null,l));else if(Qa(i),zf(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var J=S.dgst;S=J,l=Error(a(419)),l.stack="",l.digest=S,Oo({value:l,source:null,stack:null}),i=sf(e,i,s)}else if(dn||pr(e,i,s,!1),S=(s&e.childLanes)!==0,dn||S){if(S=je,S!==null&&(l=$s(S,s),l!==0&&l!==z.retryLane))throw z.retryLane=l,ws(e,l),ti(S,e,l),Jh;Ff(w)||Nc(),i=sf(e,i,s)}else Ff(w)?(i.flags|=192,i.child=e.child,i=null):(e=z.treeContext,Qe=bi(w.nextSibling),Ln=i,Ee=!0,Wa=null,Si=!1,e!==null&&Jm(i,e),i=af(i,l.children),i.flags|=4096);return i}return f?(Ja(),w=l.fallback,f=i.mode,z=e.child,J=z.sibling,l=ua(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,J!==null?w=ua(J,w):(w=Rs(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Yo(null,l),l=i.child,w=e.child.memoizedState,w===null?w=ef(s):(f=w.cachePool,f!==null?(z=hn._currentValue,f=f.parent!==z?{parent:z,pool:z}:f):f=ag(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=nf(e,S,s),i.memoizedState=tf,Yo(e.child,l)):(Qa(i),s=e.child,e=s.sibling,s=ua(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function af(e,i){return i=bc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function bc(e,i){return e=si(22,e,null,i),e.lanes=0,e}function sf(e,i,s){return Ps(i,e.child,null,s),e=af(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function _0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),xh(e.return,i,s)}function rf(e,i,s,l,f,m){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=m)}function v0(e,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var S=ln.current,w=(S&2)!==0;if(w?(S=S&1|2,i.flags|=128):S&=1,gt(ln,S),Un(e,i,l,s),l=Ee?Uo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_0(e,s,i);else if(e.tag===19)_0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&hc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),rf(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&hc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}rf(i,!0,s,null,m,l);break;case"together":rf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ga(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),es|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(pr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ua(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ua(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function of(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ic(e)))}function MS(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),qa(i,hn,e.memoizedState.cache),Cs();break;case 27:case 5:zt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:qa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Lh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?g0(e,i,s):(Qa(i),e=ga(e,i,s),e!==null?e.sibling:null);Qa(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(pr(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return v0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),gt(ln,ln.current),l)break;return null;case 22:return i.lanes=0,u0(e,i,s,i.pendingProps);case 24:qa(i,hn,e.memoizedState.cache)}return ga(e,i,s)}function x0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)dn=!0;else{if(!of(e,s)&&(i.flags&128)===0)return dn=!1,MS(e,i,s);dn=(e.flags&131072)!==0}else dn=!1,Ee&&(i.flags&1048576)!==0&&Qm(i,Uo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Us(i.elementType),i.type=e,typeof e=="function")hh(e)?(l=Bs(e,l),i.tag=1,i=p0(null,i,e,l,s)):(i.tag=0,i=$h(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===L){i.tag=11,i=o0(null,i,e,l,s);break t}else if(f===P){i.tag=14,i=l0(null,i,e,l,s);break t}}throw i=dt(e)||e,Error(a(306,i,""))}}return i;case 0:return $h(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Bs(l,i.pendingProps),p0(e,i,l,f,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Ah(e,i),Vo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,qa(i,hn,l),l!==m.cache&&yh(i,[hn],s,!0),Ho(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=m0(e,i,l,s);break t}else if(l!==f){f=vi(Error(a(424)),i),Oo(f),i=m0(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=bi(e.firstChild),Ln=i,Ee=!0,Wa=null,Si=!0,s=ug(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Cs(),l===f){i=ga(e,i,s);break t}Un(e,i,l,s)}i=i.child}return i;case 26:return Mc(e,i),e===null?(s=D_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ee||(s=i.type,e=i.pendingProps,l=zc(nt.current).createElement(s),l[un]=i,l[Tn]=e,On(l,s,e),R(l),i.stateNode=l):i.memoizedState=D_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return zt(i),e===null&&Ee&&(l=i.stateNode=w_(i.type,i.pendingProps,nt.current),Ln=i,Si=!0,f=Qe,rs(i.type)?(Hf=f,Qe=bi(l.firstChild)):Qe=f),Un(e,i,i.pendingProps.children,s),Mc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((f=l=Qe)&&(l=JS(l,i.type,i.pendingProps,Si),l!==null?(i.stateNode=l,Ln=i,Qe=bi(l.firstChild),Si=!1,f=!0):f=!1),f||Ya(i)),zt(i),f=i.type,m=i.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,Pf(f,m)?l=null:S!==null&&Pf(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Uh(e,i,dS,null,null,s),ol._currentValue=f),Mc(e,i),Un(e,i,l,s),i.child;case 6:return e===null&&Ee&&((e=s=Qe)&&(s=$S(s,i.pendingProps,Si),s!==null?(i.stateNode=s,Ln=i,Qe=null,e=!0):e=!1),e||Ya(i)),null;case 13:return g0(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ps(i,null,l,s):Un(e,i,l,s),i.child;case 11:return o0(e,i,i.type,i.pendingProps,s);case 7:return Un(e,i,i.pendingProps,s),i.child;case 8:return Un(e,i,i.pendingProps.children,s),i.child;case 12:return Un(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,qa(i,i.type,l.value),Un(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ls(i),f=Nn(f),l=l(f),i.flags|=1,Un(e,i,l,s),i.child;case 14:return l0(e,i,i.type,i.pendingProps,s);case 15:return c0(e,i,i.type,i.pendingProps,s);case 19:return v0(e,i,s);case 31:return SS(e,i,s);case 22:return u0(e,i,s,i.pendingProps);case 24:return Ls(i),l=Nn(hn),e===null?(f=bh(),f===null&&(f=je,m=Sh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Th(i),qa(i,hn,f)):((e.lanes&s)!==0&&(Ah(e,i),Vo(i,null,null,s),Ho()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),qa(i,hn,l)):(l=m.cache,qa(i,hn,l),l!==f.cache&&yh(i,[hn],s,!0))),Un(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function _a(e){e.flags|=4}function lf(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Y0())e.flags|=8192;else throw Os=oc,Eh}else e.flags&=-16777217}function y0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P_(i))if(Y0())e.flags|=8192;else throw Os=oc,Eh}function Ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,Ar|=i)}function qo(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function bS(e,i,s){var l=i.pendingProps;switch(mh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),da(hn),Gt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(dr(i)?_a(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_h())),Je(i),null;case 26:var f=i.type,m=i.memoizedState;return e===null?(_a(i),m!==null?(Je(i),y0(i,m)):(Je(i),lf(i,f,null,l,s))):m?m!==e.memoizedState?(_a(i),Je(i),y0(i,m)):(Je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&_a(i),Je(i),lf(i,f,e,l,s)),null;case 27:if(ge(i),s=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Tt.current,dr(i)?$m(i):(e=w_(f,l,s),i.stateNode=e,_a(i))}return Je(i),null;case 5:if(ge(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(m=Tt.current,dr(i))$m(i);else{var S=zc(nt.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}m[un]=i,m[Tn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;t:switch(On(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&_a(i)}}return Je(i),lf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,dr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Ln,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[un]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||g_(e.nodeValue,s)),e||Ya(i,!0)}else e=zc(e).createTextNode(l),e[un]=i,i.stateNode=e}return Je(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=dr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[un]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),e=!1}else s=_h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(oi(i),i):(oi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=dr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[un]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),f=!1}else f=_h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(oi(i),i):(oi(i),null)}return oi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Ec(i,i.updateQueue),Je(i),null);case 4:return Gt(),e===null&&Df(i.stateNode.containerInfo),Je(i),null;case 10:return da(i.type),Je(i),null;case 19:if(it(ln),l=i.memoizedState,l===null)return Je(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)qo(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=hc(e),m!==null){for(i.flags|=128,qo(l,!1),e=m.updateQueue,i.updateQueue=e,Ec(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)jm(s,e),s=s.sibling;return gt(ln,ln.current&1|2),Ee&&ha(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&E()>Cc&&(i.flags|=128,f=!0,qo(l,!1),i.lanes=4194304)}else{if(!f)if(e=hc(m),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Ec(i,e),qo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ee)return Je(i),null}else 2*E()-l.renderingStartTime>Cc&&s!==536870912&&(i.flags|=128,f=!0,qo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=E(),e.sibling=null,s=ln.current,gt(ln,f?s&1|2:s&1),Ee&&ha(i,l.treeForkCount),e):(Je(i),null);case 22:case 23:return oi(i),Dh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&Ec(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&it(Ns),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),da(hn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ES(e,i){switch(mh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return da(hn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ge(i),null;case 31:if(i.memoizedState!==null){if(oi(i),i.alternate===null)throw Error(a(340));Cs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(oi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Cs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(ln),null;case 4:return Gt(),null;case 10:return da(i.type),null;case 22:case 23:return oi(i),Dh(),e!==null&&it(Ns),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return da(hn),null;case 25:return null;default:return null}}function S0(e,i){switch(mh(i),i.tag){case 3:da(hn),Gt();break;case 26:case 27:case 5:ge(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&oi(i);break;case 13:oi(i);break;case 19:it(ln);break;case 10:da(i.type);break;case 22:case 23:oi(i),Dh(),e!==null&&it(Ns);break;case 24:da(hn)}}function jo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==f)}}catch(w){ze(i,i.return,w)}}function $a(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=i;var z=s,J=w;try{J()}catch(ht){ze(f,z,ht)}}}l=l.next}while(l!==m)}}catch(ht){ze(i,i.return,ht)}}function M0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{fg(i,s)}catch(l){ze(e,e.return,l)}}}function b0(e,i,s){s.props=Bs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ze(e,i,l)}}function Ko(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){ze(e,i,f)}}function ji(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){ze(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){ze(e,i,f)}else s.current=null}function E0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){ze(e,e.return,f)}}function cf(e,i,s){try{var l=e.stateNode;YS(l,e.type,s,i),l[Tn]=i}catch(f){ze(e,e.return,f)}}function T0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||T0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(l===27&&rs(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(hf(e,i,s),e=e.sibling;e!==null;)hf(e,i,s),e=e.sibling}function Tc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&rs(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Tc(e,i,s),e=e.sibling;e!==null;)Tc(e,i,s),e=e.sibling}function A0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);On(i,l,s),i[un]=e,i[Tn]=s}catch(m){ze(e,e.return,m)}}var va=!1,pn=!1,ff=!1,w0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function TS(e,i){if(e=e.containerInfo,Uf=Yc,e=zm(e),ah(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var S=0,w=-1,z=-1,J=0,ht=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==s||f!==0&&mt.nodeType!==3||(w=S+f),mt!==m||l!==0&&mt.nodeType!==3||(z=S+l),mt.nodeType===3&&(S+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===s&&++J===f&&(w=S),tt===m&&++ht===l&&(z=S),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}s=w===-1||z===-1?null:{start:w,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Of={focusedElem:e,selectionRange:s},Yc=!1,Mn=i;Mn!==null;)if(i=Mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Mn=e;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Vt=Bs(s.type,f);e=l.getSnapshotBeforeUpdate(Vt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(s,s.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Bf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Mn=e;break}Mn=i.return}}function R0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ya(e,s),l&4&&jo(5,s);break;case 1:if(ya(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){ze(s,s.return,S)}else{var f=Bs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ze(s,s.return,S)}}l&64&&M0(s),l&512&&Ko(s,s.return);break;case 3:if(ya(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{fg(e,i)}catch(S){ze(s,s.return,S)}}break;case 27:i===null&&l&4&&A0(s);case 26:case 5:ya(e,s),i===null&&l&4&&E0(s),l&512&&Ko(s,s.return);break;case 12:ya(e,s);break;case 31:ya(e,s),l&4&&L0(e,s);break;case 13:ya(e,s),l&4&&N0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=OS.bind(null,s),tM(e,s))));break;case 22:if(l=s.memoizedState!==null||va,!l){i=i!==null&&i.memoizedState!==null||pn,f=va;var m=pn;va=l,(pn=i)&&!m?Sa(e,s,(s.subtreeFlags&8772)!==0):ya(e,s),va=f,pn=m}break;case 30:break;default:ya(e,s)}}function C0(e){var i=e.alternate;i!==null&&(e.alternate=null,C0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&bo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Zn=!1;function xa(e,i,s){for(s=s.child;s!==null;)D0(e,i,s),s=s.sibling}function D0(e,i,s){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:pn||ji(s,i),xa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:pn||ji(s,i);var l=en,f=Zn;rs(s.type)&&(en=s.stateNode,Zn=!1),xa(e,i,s),al(s.stateNode),en=l,Zn=f;break;case 5:pn||ji(s,i);case 6:if(l=en,f=Zn,en=null,xa(e,i,s),en=l,Zn=f,en!==null)if(Zn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(s.stateNode)}catch(m){ze(s,i,m)}else try{en.removeChild(s.stateNode)}catch(m){ze(s,i,m)}break;case 18:en!==null&&(Zn?(e=en,M_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Or(e)):M_(en,s.stateNode));break;case 4:l=en,f=Zn,en=s.stateNode.containerInfo,Zn=!0,xa(e,i,s),en=l,Zn=f;break;case 0:case 11:case 14:case 15:$a(2,s,i),pn||$a(4,s,i),xa(e,i,s);break;case 1:pn||(ji(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&b0(s,i,l)),xa(e,i,s);break;case 21:xa(e,i,s);break;case 22:pn=(l=pn)||s.memoizedState!==null,xa(e,i,s),pn=l;break;default:xa(e,i,s)}}function L0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Or(e)}catch(s){ze(i,i.return,s)}}}function N0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Or(e)}catch(s){ze(i,i.return,s)}}function AS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new w0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new w0),i;default:throw Error(a(435,e.tag))}}function Ac(e,i){var s=AS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=PS.bind(null,e,l);l.then(f,f)}})}function Qn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=e,S=i,w=S;t:for(;w!==null;){switch(w.tag){case 27:if(rs(w.type)){en=w.stateNode,Zn=!1;break t}break;case 5:en=w.stateNode,Zn=!1;break t;case 3:case 4:en=w.stateNode.containerInfo,Zn=!0;break t}w=w.return}if(en===null)throw Error(a(160));D0(m,S,f),en=null,Zn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)U0(i,e),i=i.sibling}var Ui=null;function U0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(i,e),Jn(e),l&4&&($a(3,e,e.return),jo(3,e),$a(5,e,e.return));break;case 1:Qn(i,e),Jn(e),l&512&&(pn||s===null||ji(s,s.return)),l&64&&va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ui;if(Qn(i,e),Jn(e),l&512&&(pn||s===null||ji(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ms]||m[un]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),On(m,l,s),m[un]=e,R(m),l=m;break t;case"link":var S=U_("link","href",f).get(l+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(m=S[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break e}}m=f.createElement(l),On(m,l,s),f.head.appendChild(m);break;case"meta":if(S=U_("meta","content",f).get(l+(s.content||""))){for(w=0;w<S.length;w++)if(m=S[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break e}}m=f.createElement(l),On(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[un]=e,R(m),l=m}e.stateNode=l}else O_(f,e.type,e.stateNode);else e.stateNode=N_(f,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?O_(f,e.type,e.stateNode):N_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&cf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,e),Jn(e),l&512&&(pn||s===null||ji(s,s.return)),s!==null&&l&4&&cf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,e),Jn(e),l&512&&(pn||s===null||ji(s,s.return)),e.flags&32){f=e.stateNode;try{gn(f,"")}catch(Vt){ze(e,e.return,Vt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,cf(e,f,s!==null?s.memoizedProps:f)),l&1024&&(ff=!0);break;case 6:if(Qn(i,e),Jn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Vt){ze(e,e.return,Vt)}}break;case 3:if(Gc=null,f=Ui,Ui=Hc(i.containerInfo),Qn(i,e),Ui=f,Jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Or(i.containerInfo)}catch(Vt){ze(e,e.return,Vt)}ff&&(ff=!1,O0(e));break;case 4:l=Ui,Ui=Hc(e.stateNode.containerInfo),Qn(i,e),Jn(e),Ui=l;break;case 12:Qn(i,e),Jn(e);break;case 31:Qn(i,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ac(e,l)));break;case 13:Qn(i,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ac(e,l)));break;case 22:f=e.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,J=va,ht=pn;if(va=J||f,pn=ht||z,Qn(i,e),pn=ht,va=J,Jn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||z||va||pn||Fs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(m=z.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=z.stateNode;var mt=z.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;w.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){ze(z,z.return,Vt)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=f?"":z.memoizedProps}catch(Vt){ze(z,z.return,Vt)}}}else if(i.tag===18){if(s===null){z=i;try{var ot=z.stateNode;f?b_(ot,!0):b_(z.stateNode,!1)}catch(Vt){ze(z,z.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ac(e,s))));break;case 19:Qn(i,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ac(e,l)));break;case 30:break;case 21:break;default:Qn(i,e),Jn(e)}}function Jn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(T0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=uf(e);Tc(e,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(gn(S,""),s.flags&=-33);var w=uf(e);Tc(e,w,S);break;case 3:case 4:var z=s.stateNode.containerInfo,J=uf(e);hf(e,J,z);break;default:throw Error(a(161))}}catch(ht){ze(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function O0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;O0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ya(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)R0(e,i.alternate,i),i=i.sibling}function Fs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:$a(4,i,i.return),Fs(i);break;case 1:ji(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&b0(i,i.return,s),Fs(i);break;case 27:al(i.stateNode);case 26:case 5:ji(i,i.return),Fs(i);break;case 22:i.memoizedState===null&&Fs(i);break;case 30:Fs(i);break;default:Fs(i)}e=e.sibling}}function Sa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:Sa(f,m,s),jo(4,m);break;case 1:if(Sa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(J){ze(l,l.return,J)}if(l=m,f=l.updateQueue,f!==null){var w=l.stateNode;try{var z=f.shared.hiddenCallbacks;if(z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<z.length;f++)hg(z[f],w)}catch(J){ze(l,l.return,J)}}s&&S&64&&M0(m),Ko(m,m.return);break;case 27:A0(m);case 26:case 5:Sa(f,m,s),s&&l===null&&S&4&&E0(m),Ko(m,m.return);break;case 12:Sa(f,m,s);break;case 31:Sa(f,m,s),s&&S&4&&L0(f,m);break;case 13:Sa(f,m,s),s&&S&4&&N0(f,m);break;case 22:m.memoizedState===null&&Sa(f,m,s),Ko(m,m.return);break;case 30:break;default:Sa(f,m,s)}i=i.sibling}}function df(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Po(s))}function pf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function Oi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)P0(e,i,s,l),i=i.sibling}function P0(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(e,i,s,l),f&2048&&jo(9,i);break;case 1:Oi(e,i,s,l);break;case 3:Oi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(f&2048){Oi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,S=m.id,w=m.onPostCommit;typeof w=="function"&&w(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){ze(i,i.return,z)}}else Oi(e,i,s,l);break;case 31:Oi(e,i,s,l);break;case 13:Oi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Oi(e,i,s,l):Zo(e,i):m._visibility&2?Oi(e,i,s,l):(m._visibility|=2,br(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&df(S,i);break;case 24:Oi(e,i,s,l),f&2048&&pf(i.alternate,i);break;default:Oi(e,i,s,l)}}function br(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,S=i,w=s,z=l,J=S.flags;switch(S.tag){case 0:case 11:case 15:br(m,S,w,z,f),jo(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?br(m,S,w,z,f):Zo(m,S):(ht._visibility|=2,br(m,S,w,z,f)),f&&J&2048&&df(S.alternate,S);break;case 24:br(m,S,w,z,f),f&&J&2048&&pf(S.alternate,S);break;default:br(m,S,w,z,f)}i=i.sibling}}function Zo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Zo(s,l),f&2048&&df(l.alternate,l);break;case 24:Zo(s,l),f&2048&&pf(l.alternate,l);break;default:Zo(s,l)}i=i.sibling}}var Qo=8192;function Er(e,i,s){if(e.subtreeFlags&Qo)for(e=e.child;e!==null;)I0(e,i,s),e=e.sibling}function I0(e,i,s){switch(e.tag){case 26:Er(e,i,s),e.flags&Qo&&e.memoizedState!==null&&fM(s,Ui,e.memoizedState,e.memoizedProps);break;case 5:Er(e,i,s);break;case 3:case 4:var l=Ui;Ui=Hc(e.stateNode.containerInfo),Er(e,i,s),Ui=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Qo,Qo=16777216,Er(e,i,s),Qo=l):Er(e,i,s));break;default:Er(e,i,s)}}function B0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Jo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,z0(l,e)}B0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)F0(e),e=e.sibling}function F0(e){switch(e.tag){case 0:case 11:case 15:Jo(e),e.flags&2048&&$a(9,e,e.return);break;case 3:Jo(e);break;case 12:Jo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,wc(e)):Jo(e);break;default:Jo(e)}}function wc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,z0(l,e)}B0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:$a(8,i,i.return),wc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,wc(i));break;default:wc(i)}e=e.sibling}}function z0(e,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:$a(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else t:for(s=e;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(C0(l),l===s){Mn=null;break t}if(f!==null){f.return=m,Mn=f;break t}Mn=m}}}var wS={getCacheForType:function(e){var i=Nn(hn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Nn(hn).controller.signal}},RS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,je=null,ve=null,Me=0,Fe=0,li=null,ts=!1,Tr=!1,mf=!1,Ma=0,on=0,es=0,zs=0,gf=0,ci=0,Ar=0,$o=null,$n=null,_f=!1,Rc=0,H0=0,Cc=1/0,Dc=null,ns=null,_n=0,is=null,wr=null,ba=0,vf=0,xf=null,V0=null,tl=0,yf=null;function ui(){return(Ue&2)!==0&&Me!==0?Me&-Me:F.T!==null?Af():So()}function G0(){if(ci===0)if((Me&536870912)===0||Ee){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),ci=e}else ci=536870912;return e=ri.current,e!==null&&(e.flags|=32),ci}function ti(e,i,s){(e===je&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(Rr(e,0),as(e,Me,ci,!1)),Fn(e,s),((Ue&2)===0||e!==je)&&(e===je&&((Ue&2)===0&&(zs|=s),on===4&&as(e,Me,ci,!1)),Ki(e))}function k0(e,i,s){if((Ue&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||At(e,i),f=l?LS(e,i):Mf(e,i,!0),m=l;do{if(f===0){Tr&&!l&&as(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!CS(s)){f=Mf(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var w=e;f=$o;var z=w.current.memoizedState.isDehydrated;if(z&&(Rr(w,S).flags|=256),S=Mf(w,S,!1),S!==2){if(mf&&!z){w.errorRecoveryDisabledLanes|=m,zs|=m,f=4;break t}m=$n,$n=f,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){Rr(e,0),as(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:as(l,i,ci,!ts);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Rc+300-E(),10<f)){if(as(l,i,ci,!ts),_t(l,0,!0)!==0)break t;ba=i,l.timeoutHandle=y_(X0.bind(null,l,s,$n,Dc,_f,i,ci,zs,Ar,ts,m,"Throttled",-0,0),f);break t}X0(l,s,$n,Dc,_f,i,ci,zs,Ar,ts,m,null,-0,0)}}break}while(!0);Ki(e)}function X0(e,i,s,l,f,m,S,w,z,J,ht,mt,tt,ot){if(e.timeoutHandle=-1,mt=i.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},I0(i,m,mt);var Vt=(m&62914560)===m?Rc-E():(m&4194048)===m?H0-E():0;if(Vt=dM(mt,Vt),Vt!==null){ba=m,e.cancelPendingCommit=Vt(J0.bind(null,e,i,m,s,l,f,S,w,z,ht,mt,null,tt,ot)),as(e,m,S,!J);return}}J0(e,i,m,s,l,f,S,w,z)}function CS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ai(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function as(e,i,s,l){i&=~gf,i&=~zs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-Ot(f),S=1<<m;l[m]=-1,f&=~S}s!==0&&Gl(e,s,i)}function Lc(){return(Ue&6)===0?(el(0),!1):!0}function Sf(){if(ve!==null){if(Fe===0)var e=ve.return;else e=ve,fa=Ds=null,Ih(e),vr=null,Bo=0,e=ve;for(;e!==null;)S0(e.alternate,e),e=e.return;ve=null}}function Rr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,KS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ba=0,Sf(),je=e,ve=s=ua(e.current,null),Me=i,Fe=0,li=null,ts=!1,Tr=At(e,i),mf=!1,Ar=ci=gf=zs=es=on=0,$n=$o=null,_f=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Ot(l),m=1<<f;i|=e[f],l&=~m}return Ma=i,Jl(),s}function W0(e,i){ce=null,F.H=Wo,i===_r||i===rc?(i=og(),Fe=3):i===Eh?(i=og(),Fe=4):Fe=i===Jh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,li=i,ve===null&&(on=1,yc(e,vi(i,e.current)))}function Y0(){var e=ri.current;return e===null?!0:(Me&4194048)===Me?Mi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Mi:!1}function q0(){var e=F.H;return F.H=Wo,e===null?Wo:e}function j0(){var e=F.A;return F.A=wS,e}function Nc(){on=4,ts||(Me&4194048)!==Me&&ri.current!==null||(Tr=!0),(es&134217727)===0&&(zs&134217727)===0||je===null||as(je,Me,ci,!1)}function Mf(e,i,s){var l=Ue;Ue|=2;var f=q0(),m=j0();(je!==e||Me!==i)&&(Dc=null,Rr(e,i)),i=!1;var S=on;t:do try{if(Fe!==0&&ve!==null){var w=ve,z=li;switch(Fe){case 8:Sf(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(i=!0);var J=Fe;if(Fe=0,li=null,Cr(e,w,z,J),s&&Tr){S=0;break t}break;default:J=Fe,Fe=0,li=null,Cr(e,w,z,J)}}DS(),S=on;break}catch(ht){W0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,fa=Ds=null,Ue=l,F.H=f,F.A=m,ve===null&&(je=null,Me=0,Jl()),S}function DS(){for(;ve!==null;)K0(ve)}function LS(e,i){var s=Ue;Ue|=2;var l=q0(),f=j0();je!==e||Me!==i?(Dc=null,Cc=E()+500,Rr(e,i)):Tr=At(e,i);t:do try{if(Fe!==0&&ve!==null){i=ve;var m=li;e:switch(Fe){case 1:Fe=0,li=null,Cr(e,i,m,1);break;case 2:case 9:if(sg(m)){Fe=0,li=null,Z0(i);break}i=function(){Fe!==2&&Fe!==9||je!==e||(Fe=7),Ki(e)},m.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:sg(m)?(Fe=0,li=null,Z0(i)):(Fe=0,li=null,Cr(e,i,m,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var w=ve;if(S?P_(S):w.stateNode.complete){Fe=0,li=null;var z=w.sibling;if(z!==null)ve=z;else{var J=w.return;J!==null?(ve=J,Uc(J)):ve=null}break e}}Fe=0,li=null,Cr(e,i,m,5);break;case 6:Fe=0,li=null,Cr(e,i,m,6);break;case 8:Sf(),on=6;break t;default:throw Error(a(462))}}NS();break}catch(ht){W0(e,ht)}while(!0);return fa=Ds=null,F.H=l,F.A=f,Ue=s,ve!==null?0:(je=null,Me=0,Jl(),on)}function NS(){for(;ve!==null&&!Yt();)K0(ve)}function K0(e){var i=x0(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,i===null?Uc(e):ve=i}function Z0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=d0(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=d0(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Ih(i);default:S0(s,i),i=ve=jm(i,Ma),i=x0(s,i,Ma)}e.memoizedProps=e.pendingProps,i===null?Uc(e):ve=i}function Cr(e,i,s,l){fa=Ds=null,Ih(i),vr=null,Bo=0;var f=i.return;try{if(yS(e,f,i,s,Me)){on=1,yc(e,vi(s,e.current)),ve=null;return}}catch(m){if(f!==null)throw ve=f,m;on=1,yc(e,vi(s,e.current)),ve=null;return}i.flags&32768?(Ee||l===1?e=!0:Tr||(Me&536870912)!==0?e=!1:(ts=e=!0,(l===2||l===9||l===3||l===6)&&(l=ri.current,l!==null&&l.tag===13&&(l.flags|=16384))),Q0(i,e)):Uc(i)}function Uc(e){var i=e;do{if((i.flags&32768)!==0){Q0(i,ts);return}e=i.return;var s=bS(i.alternate,i,Ma);if(s!==null){ve=s;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);on===0&&(on=5)}function Q0(e,i){do{var s=ES(e.alternate,e);if(s!==null){s.flags&=32767,ve=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=s}while(e!==null);on=6,ve=null}function J0(e,i,s,l,f,m,S,w,z){e.cancelPendingCommit=null;do Oc();while(_n!==0);if((Ue&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=ch,Ci(e,s,m,S,w,z),e===je&&(ve=je=null,Me=0),wr=i,is=e,ba=s,vf=m,xf=f,V0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(lt,function(){return i_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Ue,Ue|=4;try{TS(e,i,s)}finally{Ue=S,H.p=f,F.T=l}}_n=1,$0(),t_(),e_()}}function $0(){if(_n===1){_n=0;var e=is,i=wr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Ue;Ue|=4;try{U0(i,e);var m=Of,S=zm(e.containerInfo),w=m.focusedElem,z=m.selectionRange;if(S!==w&&w&&w.ownerDocument&&Fm(w.ownerDocument.documentElement,w)){if(z!==null&&ah(w)){var J=z.start,ht=z.end;if(ht===void 0&&(ht=J),"selectionStart"in w)w.selectionStart=J,w.selectionEnd=Math.min(ht,w.value.length);else{var mt=w.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=w.textContent.length,ne=Math.min(z.start,Vt),Ye=z.end===void 0?ne:Math.min(z.end,Vt);!ot.extend&&ne>Ye&&(S=Ye,Ye=ne,ne=S);var K=Bm(w,ne),k=Bm(w,Ye);if(K&&k&&(ot.rangeCount!==1||ot.anchorNode!==K.node||ot.anchorOffset!==K.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var Q=mt.createRange();Q.setStart(K.node,K.offset),ot.removeAllRanges(),ne>Ye?(ot.addRange(Q),ot.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ot.addRange(Q))}}}}for(mt=[],ot=w;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<mt.length;w++){var pt=mt[w];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Yc=!!Uf,Of=Uf=null}finally{Ue=f,H.p=l,F.T=s}}e.current=i,_n=2}}function t_(){if(_n===2){_n=0;var e=is,i=wr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Ue;Ue|=4;try{R0(e,i.alternate,i)}finally{Ue=f,H.p=l,F.T=s}}_n=3}}function e_(){if(_n===4||_n===3){_n=0,U();var e=is,i=wr,s=ba,l=V0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,wr=is=null,n_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ns=null),tr(s),i=i.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=H.p,H.p=2,F.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var w=l[S];m(w.value,{componentStack:w.stack})}}finally{F.T=i,H.p=f}}(ba&3)!==0&&Oc(),Ki(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===yf?tl++:(tl=0,yf=e):tl=0,el(0)}}function n_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Oc(){return $0(),t_(),e_(),i_()}function i_(){if(_n!==5)return!1;var e=is,i=vf;vf=0;var s=tr(ba),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=xf,xf=null;var m=is,S=ba;if(_n=0,wr=is=null,ba=0,(Ue&6)!==0)throw Error(a(331));var w=Ue;if(Ue|=4,F0(m.current),P0(m,m.current,S,s),Ue=w,el(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Mt,m)}catch{}return!0}finally{H.p=f,F.T=l,n_(e,i)}}function a_(e,i,s){i=vi(s,i),i=Qh(e.stateNode,i,2),e=Za(e,i,2),e!==null&&(Fn(e,2),Ki(e))}function ze(e,i,s){if(e.tag===3)a_(e,e,s);else for(;i!==null;){if(i.tag===3){a_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){e=vi(s,e),s=s0(2),l=Za(i,s,2),l!==null&&(r0(s,l,i,e),Fn(l,2),Ki(l));break}}i=i.return}}function bf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new RS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(mf=!0,f.add(s),e=US.bind(null,e,i,s),i.then(e,e))}function US(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,je===e&&(Me&s)===s&&(on===4||on===3&&(Me&62914560)===Me&&300>E()-Rc?(Ue&2)===0&&Rr(e,0):gf|=s,Ar===Me&&(Ar=0)),Ki(e)}function s_(e,i){i===0&&(i=Ie()),e=ws(e,i),e!==null&&(Fn(e,i),Ki(e))}function OS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),s_(e,s)}function PS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),s_(e,s)}function IS(e,i){return Ae(e,i)}var Pc=null,Dr=null,Ef=!1,Ic=!1,Tf=!1,ss=0;function Ki(e){e!==Dr&&e.next===null&&(Dr===null?Pc=Dr=e:Dr=Dr.next=e),Ic=!0,Ef||(Ef=!0,FS())}function el(e,i){if(!Tf&&Ic){Tf=!0;do for(var s=!1,l=Pc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var S=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-Ot(42|e)+1)-1,m&=f&~(S&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,c_(l,m))}else m=Me,m=_t(l,l===je?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||At(l,m)||(s=!0,c_(l,m));l=l.next}while(s);Tf=!1}}function BS(){r_()}function r_(){Ic=Ef=!1;var e=0;ss!==0&&jS()&&(e=ss);for(var i=E(),s=null,l=Pc;l!==null;){var f=l.next,m=o_(l,i);m===0?(l.next=null,s===null?Pc=f:s.next=f,f===null&&(Dr=s)):(s=l,(e!==0||(m&3)!==0)&&(Ic=!0)),l=f}_n!==0&&_n!==5||el(e),ss!==0&&(ss=0)}function o_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-Ot(m),w=1<<S,z=f[S];z===-1?((w&s)===0||(w&l)!==0)&&(f[S]=se(w,i)):z<=i&&(e.expiredLanes|=w),m&=~w}if(i=je,s=Me,s=_t(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Oe(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||At(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Oe(l),tr(s)){case 2:case 8:s=vt;break;case 32:s=lt;break;case 268435456:s=wt;break;default:s=lt}return l=l_.bind(null,e),s=Ae(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Oe(l),e.callbackPriority=2,e.callbackNode=null,2}function l_(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Oc()&&e.callbackNode!==s)return null;var l=Me;return l=_t(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(k0(e,l,i),o_(e,E()),e.callbackNode!=null&&e.callbackNode===s?l_.bind(null,e):null)}function c_(e,i){if(Oc())return null;k0(e,i,!0)}function FS(){ZS(function(){(Ue&6)!==0?Ae(ft,BS):r_()})}function Af(){if(ss===0){var e=mr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),ss=e}return ss}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xl(""+e)}function h_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function zS(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=u_((f[Tn]||null).action),S=l.submitter;S&&(i=(i=S[Tn]||null)?u_(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var w=new jl("action","action",null,l,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var z=S?h_(f,S):new FormData(f);Wh(s,{pending:!0,data:z,method:f.method,action:m},null,z)}}else typeof m=="function"&&(w.preventDefault(),z=S?h_(f,S):new FormData(f),Wh(s,{pending:!0,data:z,method:f.method,action:m},m,z))},currentTarget:f}]})}}for(var wf=0;wf<lh.length;wf++){var Rf=lh[wf],HS=Rf.toLowerCase(),VS=Rf[0].toUpperCase()+Rf.slice(1);Ni(HS,"on"+VS)}Ni(Gm,"onAnimationEnd"),Ni(km,"onAnimationIteration"),Ni(Xm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(iS,"onTransitionRun"),Ni(aS,"onTransitionStart"),Ni(sS,"onTransitionCancel"),Ni(Wm,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function f_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var w=l[S],z=w.instance,J=w.currentTarget;if(w=w.listener,z!==m&&f.isPropagationStopped())break t;m=w,f.currentTarget=J;try{m(f)}catch(ht){Ql(ht)}f.currentTarget=null,m=z}else for(S=0;S<l.length;S++){if(w=l[S],z=w.instance,J=w.currentTarget,w=w.listener,z!==m&&f.isPropagationStopped())break t;m=w,f.currentTarget=J;try{m(f)}catch(ht){Ql(ht)}f.currentTarget=null,m=z}}}}function xe(e,i){var s=i[er];s===void 0&&(s=i[er]=new Set);var l=e+"__bubble";s.has(l)||(d_(i,e,2,!1),s.add(l))}function Cf(e,i,s){var l=0;i&&(l|=4),d_(s,e,l,i)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Bc]){e[Bc]=!0,j.forEach(function(s){s!=="selectionchange"&&(GS.has(s)||Cf(s,!1,e),Cf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Bc]||(i[Bc]=!0,Cf("selectionchange",!1,i))}}function d_(e,i,s,l){switch(G_(i)){case 2:var f=gM;break;case 8:f=_M;break;default:f=Wf}s=f.bind(null,i,s,e),f=void 0,!Ku||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Lf(e,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=l.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=Ha(w),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){l=m=S;continue t}w=w.parentNode}}l=l.return}vm(function(){var J=m,ht=qu(s),mt=[];t:{var tt=Ym.get(e);if(tt!==void 0){var ot=jl,Vt=e;switch(e){case"keypress":if(Yl(s)===0)break t;case"keydown":case"keyup":ot=Py;break;case"focusin":Vt="focus",ot=$u;break;case"focusout":Vt="blur",ot=$u;break;case"beforeblur":case"afterblur":ot=$u;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Fy;break;case Gm:case km:case Xm:ot=Ay;break;case Wm:ot=Hy;break;case"scroll":case"scrollend":ot=Sy;break;case"wheel":ot=Gy;break;case"copy":case"cut":case"paste":ot=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=bm;break;case"toggle":case"beforetoggle":ot=Xy}var ne=(i&4)!==0,Ye=!ne&&(e==="scroll"||e==="scrollend"),K=ne?tt!==null?tt+"Capture":null:tt;ne=[];for(var k=J,Q;k!==null;){var pt=k;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||K===null||(pt=Eo(k,K),pt!=null&&ne.push(il(k,pt,Q))),Ye)break;k=k.return}0<ne.length&&(tt=new ot(tt,Vt,null,s,ht),mt.push({event:tt,listeners:ne}))}}if((i&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&s!==Yu&&(Vt=s.relatedTarget||s.fromElement)&&(Ha(Vt)||Vt[Di]))break t;if((ot||tt)&&(tt=ht.window===ht?ht:(tt=ht.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=s.relatedTarget||s.toElement,ot=J,Vt=Vt?Ha(Vt):null,Vt!==null&&(Ye=c(Vt),ne=Vt.tag,Vt!==Ye||ne!==5&&ne!==27&&ne!==6)&&(Vt=null)):(ot=null,Vt=J),ot!==Vt)){if(ne=Sm,pt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=bm,pt="onPointerLeave",K="onPointerEnter",k="pointer"),Ye=ot==null?tt:bs(ot),Q=Vt==null?tt:bs(Vt),tt=new ne(pt,k+"leave",ot,s,ht),tt.target=Ye,tt.relatedTarget=Q,pt=null,Ha(ht)===J&&(ne=new ne(K,k+"enter",Vt,s,ht),ne.target=Q,ne.relatedTarget=Ye,pt=ne),Ye=pt,ot&&Vt)e:{for(ne=kS,K=ot,k=Vt,Q=0,pt=K;pt;pt=ne(pt))Q++;pt=0;for(var Jt=k;Jt;Jt=ne(Jt))pt++;for(;0<Q-pt;)K=ne(K),Q--;for(;0<pt-Q;)k=ne(k),pt--;for(;Q--;){if(K===k||k!==null&&K===k.alternate){ne=K;break e}K=ne(K),k=ne(k)}ne=null}else ne=null;ot!==null&&p_(mt,tt,ot,ne,!1),Vt!==null&&Ye!==null&&p_(mt,Ye,Vt,ne,!0)}}t:{if(tt=J?bs(J):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Re=Lm;else if(Cm(tt))if(Nm)Re=tS;else{Re=Jy;var qt=Qy}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Li(J.elementType)&&(Re=Lm):Re=$y;if(Re&&(Re=Re(e,J))){Dm(mt,Re,s,ht);break t}qt&&qt(e,tt,J),e==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&wn(tt,"number",tt.value)}switch(qt=J?bs(J):window,e){case"focusin":(Cm(qt)||qt.contentEditable==="true")&&(or=qt,sh=J,No=null);break;case"focusout":No=sh=or=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,Hm(mt,s,ht);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":Hm(mt,s,ht)}var he;if(eh)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else rr?wm(e,s)&&(be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(be="onCompositionStart");be&&(Em&&s.locale!=="ko"&&(rr||be!=="onCompositionStart"?be==="onCompositionEnd"&&rr&&(he=xm()):(ka=ht,Zu="value"in ka?ka.value:ka.textContent,rr=!0)),qt=Fc(J,be),0<qt.length&&(be=new Mm(be,e,null,s,ht),mt.push({event:be,listeners:qt}),he?be.data=he:(he=Rm(s),he!==null&&(be.data=he)))),(he=Yy?qy(e,s):jy(e,s))&&(be=Fc(J,"onBeforeInput"),0<be.length&&(qt=new Mm("onBeforeInput","beforeinput",null,s,ht),mt.push({event:qt,listeners:be}),qt.data=he)),zS(mt,e,J,s,ht)}f_(mt,i)})}function il(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Fc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Eo(e,s),f!=null&&l.unshift(il(e,f,m)),f=Eo(e,i),f!=null&&l.push(il(e,f,m))),e.tag===3)return l;e=e.return}return[]}function kS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p_(e,i,s,l,f){for(var m=i._reactName,S=[];s!==null&&s!==l;){var w=s,z=w.alternate,J=w.stateNode;if(w=w.tag,z!==null&&z===l)break;w!==5&&w!==26&&w!==27||J===null||(z=J,f?(J=Eo(s,m),J!=null&&S.unshift(il(s,J,z))):f||(J=Eo(s,m),J!=null&&S.push(il(s,J,z)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var XS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(XS,`
`).replace(WS,"")}function g_(e,i){return i=m_(i),m_(e)===i}function We(e,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||gn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&gn(e,""+l);break;case"className":te(e,"class",l);break;case"tabIndex":te(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,s,l);break;case"style":ir(e,l,m);break;case"data":if(i!=="object"){te(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&We(e,i,"name",f.name,f,null),We(e,i,"formEncType",f.formEncType,f,null),We(e,i,"formMethod",f.formMethod,f,null),We(e,i,"formTarget",f.formTarget,f,null)):(We(e,i,"encType",f.encType,f,null),We(e,i,"method",f.method,f,null),We(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=la);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Xl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Xt(e,"popover",l);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=xy.get(s)||s,Xt(e,s,l))}}function Nf(e,i,s,l,f,m){switch(s){case"style":ir(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?gn(e,l):(typeof l=="number"||typeof l=="bigint")&&gn(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=e[Tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Xt(e,s,l)}}}function On(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,m,S,s,null)}}f&&We(e,i,"srcSet",s.srcSet,s,null),l&&We(e,i,"src",s.src,s,null);return;case"input":xe("invalid",e);var w=m=S=f=null,z=null,J=null;for(l in s)if(s.hasOwnProperty(l)){var ht=s[l];if(ht!=null)switch(l){case"name":f=ht;break;case"type":S=ht;break;case"checked":z=ht;break;case"defaultChecked":J=ht;break;case"value":m=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:We(e,i,l,ht,s,null)}}oa(e,m,w,z,J,S,f,!1);return;case"select":xe("invalid",e),l=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:We(e,i,f,w,s,null)}i=m,s=S,e.multiple=!!l,i!=null?gi(e,!!l,i,!1):s!=null&&gi(e,!!l,s,!0);return;case"textarea":xe("invalid",e),m=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:We(e,i,S,w,s,null)}Rn(e,l,f,m);return;case"option":for(z in s)s.hasOwnProperty(z)&&(l=s[z],l!=null)&&(z==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":We(e,i,z,l,s,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<nl.length;l++)xe(nl[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(l=s[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,J,l,s,null)}return;default:if(Li(i)){for(ht in s)s.hasOwnProperty(ht)&&(l=s[ht],l!==void 0&&Nf(e,i,ht,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&We(e,i,w,l,s,null))}function YS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,w=null,z=null,J=null,ht=null;for(ot in s){var mt=s[ot];if(s.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=mt;default:l.hasOwnProperty(ot)||We(e,i,ot,null,l,mt)}}for(var tt in l){var ot=l[tt];if(mt=s[tt],l.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":m=ot;break;case"name":f=ot;break;case"checked":J=ot;break;case"defaultChecked":ht=ot;break;case"value":S=ot;break;case"defaultValue":w=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:ot!==mt&&We(e,i,tt,ot,l,mt)}}An(e,S,w,z,J,ht,m,f);return;case"select":ot=S=w=tt=null;for(m in s)if(z=s[m],s.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":ot=z;default:l.hasOwnProperty(m)||We(e,i,m,null,l,z)}for(f in l)if(m=l[f],z=s[f],l.hasOwnProperty(f)&&(m!=null||z!=null))switch(f){case"value":tt=m;break;case"defaultValue":w=m;break;case"multiple":S=m;default:m!==z&&We(e,i,f,m,l,z)}i=w,s=S,l=ot,tt!=null?gi(e,!!s,tt,!1):!!l!=!!s&&(i!=null?gi(e,!!s,i,!0):gi(e,!!s,s?[]:"",!1));return;case"textarea":ot=tt=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:We(e,i,w,null,l,f)}for(S in l)if(f=l[S],m=s[S],l.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":tt=f;break;case"defaultValue":ot=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&We(e,i,S,f,l,m)}Be(e,tt,ot);return;case"option":for(var Vt in s)tt=s[Vt],s.hasOwnProperty(Vt)&&tt!=null&&!l.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:We(e,i,Vt,null,l,tt));for(z in l)tt=l[z],ot=s[z],l.hasOwnProperty(z)&&tt!==ot&&(tt!=null||ot!=null)&&(z==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":We(e,i,z,tt,l,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in s)tt=s[ne],s.hasOwnProperty(ne)&&tt!=null&&!l.hasOwnProperty(ne)&&We(e,i,ne,null,l,tt);for(J in l)if(tt=l[J],ot=s[J],l.hasOwnProperty(J)&&tt!==ot&&(tt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,i));break;default:We(e,i,J,tt,l,ot)}return;default:if(Li(i)){for(var Ye in s)tt=s[Ye],s.hasOwnProperty(Ye)&&tt!==void 0&&!l.hasOwnProperty(Ye)&&Nf(e,i,Ye,void 0,l,tt);for(ht in l)tt=l[ht],ot=s[ht],!l.hasOwnProperty(ht)||tt===ot||tt===void 0&&ot===void 0||Nf(e,i,ht,tt,l,ot);return}}for(var K in s)tt=s[K],s.hasOwnProperty(K)&&tt!=null&&!l.hasOwnProperty(K)&&We(e,i,K,null,l,tt);for(mt in l)tt=l[mt],ot=s[mt],!l.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||We(e,i,mt,tt,l,ot)}function __(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,S=f.initiatorType,w=f.duration;if(m&&w&&__(S)){for(S=0,w=f.responseEnd,l+=1;l<s.length;l++){var z=s[l],J=z.startTime;if(J>w)break;var ht=z.transferSize,mt=z.initiatorType;ht&&__(mt)&&(z=z.responseEnd,S+=ht*(z<w?1:(w-J)/(z-J)))}if(--l,i+=8*(m+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uf=null,Of=null;function zc(e){return e.nodeType===9?e:e.ownerDocument}function v_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Pf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var If=null;function jS(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(e){return S_.resolve(null).then(e).catch(QS)}:y_;function QS(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function M_(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),Or(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")al(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,al(s);for(var m=s.firstChild;m;){var S=m.nextSibling,w=m.nodeName;m[Ms]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&al(e.ownerDocument.body);s=f}while(s);Or(i)}function b_(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Bf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Bf(s),bo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function JS(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ms])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function $S(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=bi(e.nextSibling),e===null))return null;return e}function E_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=bi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tM(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Hf=null;function T_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return bi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function A_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function w_(e,i,s){switch(i=zc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);bo(e)}var Ei=new Map,R_=new Set;function Hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:eM,r:nM,D:iM,C:aM,L:sM,m:rM,X:lM,S:oM,M:cM};function eM(){var e=Ea.f(),i=Lc();return e||i}function nM(e){var i=Va(e);i!==null&&i.tag===5&&i.type==="form"?Wg(i):Ea.r(e)}var Lr=typeof document>"u"?null:document;function C_(e,i,s){var l=Lr;if(l&&typeof i=="string"&&i){var f=re(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),R_.has(f)||(R_.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),On(i,"link",e),R(i),l.head.appendChild(i)))}}function iM(e){Ea.D(e),C_("dns-prefetch",e,null)}function aM(e,i){Ea.C(e,i),C_("preconnect",e,i)}function sM(e,i,s){Ea.L(e,i,s);var l=Lr;if(l&&e&&i){var f='link[rel="preload"][as="'+re(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+re(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+re(s.imageSizes)+'"]')):f+='[href="'+re(e)+'"]';var m=f;switch(i){case"style":m=Nr(e);break;case"script":m=Ur(e)}Ei.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ei.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(sl(m))||i==="script"&&l.querySelector(rl(m))||(i=l.createElement("link"),On(i,"link",e),R(i),l.head.appendChild(i)))}}function rM(e,i){Ea.m(e,i);var s=Lr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+re(l)+'"][href="'+re(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ur(e)}if(!Ei.has(m)&&(e=_({rel:"modulepreload",href:e},i),Ei.set(m,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(rl(m)))return}l=s.createElement("link"),On(l,"link",e),R(l),s.head.appendChild(l)}}}function oM(e,i,s){Ea.S(e,i,s);var l=Lr;if(l&&e){var f=Ga(l).hoistableStyles,m=Nr(e);i=i||"default";var S=f.get(m);if(!S){var w={loading:0,preload:null};if(S=l.querySelector(sl(m)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ei.get(m))&&Vf(e,s);var z=S=l.createElement("link");R(z),On(z,"link",e),z._p=new Promise(function(J,ht){z.onload=J,z.onerror=ht}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Vc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(m,S)}}}function lM(e,i){Ea.X(e,i);var s=Lr;if(s&&e){var l=Ga(s).hoistableScripts,f=Ur(e),m=l.get(f);m||(m=s.querySelector(rl(f)),m||(e=_({src:e,async:!0},i),(i=Ei.get(f))&&Gf(e,i),m=s.createElement("script"),R(m),On(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function cM(e,i){Ea.M(e,i);var s=Lr;if(s&&e){var l=Ga(s).hoistableScripts,f=Ur(e),m=l.get(f);m||(m=s.querySelector(rl(f)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Ei.get(f))&&Gf(e,i),m=s.createElement("script"),R(m),On(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function D_(e,i,s,l){var f=(f=nt.current)?Hc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Nr(s.href),s=Ga(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Nr(s.href);var m=Ga(f).hoistableStyles,S=m.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=f.querySelector(sl(e)))&&!m._p&&(S.instance=m,S.state.loading=5),Ei.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(e,s),m||uM(f,e,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ur(s),s=Ga(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Nr(e){return'href="'+re(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function uM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),On(i,"link",s),R(i),e.head.appendChild(i))}function Ur(e){return'[src="'+re(e)+'"]'}function rl(e){return"script[async]"+e}function N_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+re(s.href)+'"]');if(l)return i.instance=l,R(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),R(l),On(l,"style",f),Vc(l,s.precedence,e),i.instance=l;case"stylesheet":f=Nr(s.href);var m=e.querySelector(sl(f));if(m)return i.state.loading|=4,i.instance=m,R(m),m;l=L_(s),(f=Ei.get(f))&&Vf(l,f),m=(e.ownerDocument||e).createElement("link"),R(m);var S=m;return S._p=new Promise(function(w,z){S.onload=w,S.onerror=z}),On(m,"link",l),i.state.loading|=4,Vc(m,s.precedence,e),i.instance=m;case"script":return m=Ur(s.src),(f=e.querySelector(rl(m)))?(i.instance=f,R(f),f):(l=s,(f=Ei.get(m))&&(l=_({},s),Gf(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),R(f),On(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Vc(l,s.precedence,e));return i.instance}function Vc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===i)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Vf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Gf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Gc=null;function U_(e,i,s){if(Gc===null){var l=new Map,f=Gc=new Map;f.set(s,l)}else f=Gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var m=s[f];if(!(m[Ms]||m[un]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=e+S;var w=l.get(S);w?w.push(m):l.set(S,[m])}}return l}function O_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function hM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function P_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fM(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Nr(l.href),m=i.querySelector(sl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=kc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,R(m);return}m=i.ownerDocument||i,l=L_(l),(f=Ei.get(f))&&Vf(l,f),m=m.createElement("link"),R(m);var S=m;S._p=new Promise(function(w,z){S.onload=w,S.onerror=z}),On(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=kc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var kf=0;function dM(e,i){return e.stylesheets&&e.count===0&&Wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&kf===0&&(kf=62500*qS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>kf?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function kc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xc=null;function Wc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xc=new Map,i.forEach(pM,e),Xc=null,kc.call(e))}function pM(e,i){if(!(i.state.loading&4)){var s=Xc.get(e);if(s)var l=s.get(null);else{s=new Map,Xc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,f),s.set(S,f),this.count++,l=kc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var ol={$$typeof:D,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function mM(e,i,s,l,f,m,S,w,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function I_(e,i,s,l,f,m,S,w,z,J,ht,mt){return e=new mM(e,i,s,S,z,J,ht,mt,w),i=1,m===!0&&(i|=24),m=si(3,null,null,i),e.current=m,m.stateNode=e,i=Sh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Th(m),e}function B_(e){return e?(e=ur,e):ur}function F_(e,i,s,l,f,m){f=B_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ka(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Za(e,l,i),s!==null&&(ti(s,e,i),zo(s,e,i))}function z_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Xf(e,i){z_(e,i),(e=e.alternate)&&z_(e,i)}function H_(e){if(e.tag===13||e.tag===31){var i=ws(e,67108864);i!==null&&ti(i,e,67108864),Xf(e,67108864)}}function V_(e){if(e.tag===13||e.tag===31){var i=ui();i=yo(i);var s=ws(e,i);s!==null&&ti(s,e,i),Xf(e,i)}}var Yc=!0;function gM(e,i,s,l){var f=F.T;F.T=null;var m=H.p;try{H.p=2,Wf(e,i,s,l)}finally{H.p=m,F.T=f}}function _M(e,i,s,l){var f=F.T;F.T=null;var m=H.p;try{H.p=8,Wf(e,i,s,l)}finally{H.p=m,F.T=f}}function Wf(e,i,s,l){if(Yc){var f=Yf(l);if(f===null)Lf(e,i,l,qc,s),k_(e,l);else if(xM(f,e,i,s,l))l.stopPropagation();else if(k_(e,l),i&4&&-1<vM.indexOf(e)){for(;f!==null;){var m=Va(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=yt(m.pendingLanes);if(S!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var z=1<<31-Ot(S);w.entanglements[1]|=z,S&=~z}Ki(m),(Ue&6)===0&&(Cc=E()+500,el(0))}}break;case 31:case 13:w=ws(m,2),w!==null&&ti(w,m,2),Lc(),Xf(m,2)}if(m=Yf(l),m===null&&Lf(e,i,l,qc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Lf(e,i,l,null,s)}}function Yf(e){return e=qu(e),qf(e)}var qc=null;function qf(e){if(qc=null,e=Ha(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return qc=e,null}function G_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ft:return 2;case vt:return 8;case lt:case jt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var jf=!1,os=null,ls=null,cs=null,ll=new Map,cl=new Map,us=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,i){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":ll.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function ul(e,i,s,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Va(i),i!==null&&H_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function xM(e,i,s,l,f){switch(i){case"focusin":return os=ul(os,e,i,s,l,f),!0;case"dragenter":return ls=ul(ls,e,i,s,l,f),!0;case"mouseover":return cs=ul(cs,e,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return ll.set(m,ul(ll.get(m)||null,e,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,cl.set(m,ul(cl.get(m)||null,e,i,s,l,f)),!0}return!1}function X_(e){var i=Ha(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Wi(e.priority,function(){V_(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,Wi(e.priority,function(){V_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Yf(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Yu=l,s.target.dispatchEvent(l),Yu=null}else return i=Va(s),i!==null&&H_(i),e.blockedOn=s,!1;i.shift()}return!0}function W_(e,i,s){jc(e)&&s.delete(i)}function yM(){jf=!1,os!==null&&jc(os)&&(os=null),ls!==null&&jc(ls)&&(ls=null),cs!==null&&jc(cs)&&(cs=null),ll.forEach(W_),cl.forEach(W_)}function Kc(e,i){e.blockedOn===i&&(e.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yM)))}var Zc=null;function Y_(e){Zc!==e&&(Zc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zc===e&&(Zc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(qf(l||s)===null)continue;break}var m=Va(s);m!==null&&(e.splice(i,3),i-=3,Wh(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Or(e){function i(z){return Kc(z,e)}os!==null&&Kc(os,e),ls!==null&&Kc(ls,e),cs!==null&&Kc(cs,e),ll.forEach(i),cl.forEach(i);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)X_(s),s.blockedOn===null&&us.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],S=f[Tn]||null;if(typeof m=="function")S||Y_(s);else if(S){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[Tn]||null)w=S.formAction;else if(qf(f)!==null)continue}else w=S.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),Y_(s)}}}function q_(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Kf(e){this._internalRoot=e}Qc.prototype.render=Kf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ui();F_(s,l,e,i,null,null)},Qc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;F_(e.current,2,null,e,null,null),Lc(),i[Di]=null}};function Qc(e){this._internalRoot=e}Qc.prototype.unstable_scheduleHydration=function(e){if(e){var i=So();e={blockedOn:null,target:e,priority:i};for(var s=0;s<us.length&&i!==0&&i<us[s].priority;s++);us.splice(s,0,e),s===0&&X_(e)}};var j_=t.version;if(j_!=="19.2.3")throw Error(a(527,j_,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var SM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{Mt=Jc.inject(SM),bt=Jc}catch{}}return fl.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,l="",f=e0,m=n0,S=i0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=I_(e,1,!1,null,null,s,l,null,f,m,S,q_),e[Di]=i.current,Df(e),new Kf(i)},fl.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var l=!1,f="",m=e0,S=n0,w=i0,z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(z=s.formState)),i=I_(e,1,!0,i,s??null,l,f,z,m,S,w,q_),i.context=B_(null),s=i.current,l=ui(),l=yo(l),f=Ka(l),f.callback=null,Za(s,f,l),s=l,i.current.lanes=s,Fn(i,s),Ki(i),e[Di]=i.current,Df(e),new Qc(i)},fl.version="19.2.3",fl}var av;function LM(){if(av)return Jf.exports;av=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jf.exports=DM(),Jf.exports}var NM=LM();const Xp="182",$r={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,sv=1,OM=2,wu=1,Dx=2,bl=3,Ia=0,ii=1,wi=2,Oa=0,to=1,Gd=2,rv=3,ov=4,PM=5,qs=100,IM=101,BM=102,FM=103,zM=104,HM=200,VM=201,GM=202,kM=203,kd=204,Xd=205,XM=206,WM=207,YM=208,qM=209,jM=210,KM=211,ZM=212,QM=213,JM=214,Wd=0,Yd=1,qd=2,io=3,jd=4,Kd=5,Zd=6,Qd=7,Wp=0,$M=1,tb=2,ea=0,Lx=1,Nx=2,Ux=3,Ox=4,Px=5,Ix=6,Bx=7,lv="attached",eb="detached",Fx=300,Qs=301,ao=302,Jd=303,$d=304,Gu=306,so=1e3,$i=1001,Ou=1002,ke=1003,zx=1004,El=1005,xn=1006,Ru=1007,La=1008,di=1009,Hx=1010,Vx=1011,Dl=1012,Yp=1013,ia=1014,Ri=1015,Ba=1016,qp=1017,jp=1018,Ll=1020,Gx=35902,kx=35899,Xx=1021,Pu=1022,ni=1023,Fa=1026,Ks=1027,Kp=1028,Zp=1029,ro=1030,Qp=1031,Jp=1033,Cu=33776,Du=33777,Lu=33778,Nu=33779,tp=35840,ep=35841,np=35842,ip=35843,ap=36196,sp=37492,rp=37496,op=37488,lp=37489,cp=37490,up=37491,hp=37808,fp=37809,dp=37810,pp=37811,mp=37812,gp=37813,_p=37814,vp=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,bp=37820,Ep=37821,Tp=36492,Ap=36494,wp=36495,Rp=36283,Cp=36284,Dp=36285,Lp=36286,Nl=2300,Ul=2301,nd=2302,cv=2400,uv=2401,hv=2402,nb=2500,ib=0,Wx=1,Np=2,ab=3200,Bl=0,sb=1,ys="",Pn="srgb",qn="srgb-linear",Iu="linear",He="srgb",Pr=7680,fv=519,rb=512,ob=513,lb=514,$p=515,cb=516,ub=517,tm=518,hb=519,Up=35044,dv="300 es",ta=2e3,Bu=2001;function Yx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function fb(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Ol(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function db(){const o=Ol("canvas");return o.style.display="block",o}const pv={};function Fu(...o){const t="THREE."+o.shift();console.log(t,...o)}function Zt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function ae(...o){const t="THREE."+o.shift();console.error(t,...o)}function Pl(...o){const t=o.join(" ");t in pv||(pv[t]=!0,Zt(...o))}function pb(o,t,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Js{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mv=1234567;const Al=Math.PI/180,oo=180/Math.PI;function Hi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function me(o,t,n){return Math.max(t,Math.min(n,o))}function em(o,t){return(o%t+t)%t}function mb(o,t,n,a,r){return a+(o-t)*(r-a)/(n-t)}function gb(o,t,n){return o!==t?(n-o)/(t-o):0}function wl(o,t,n){return(1-n)*o+n*t}function _b(o,t,n,a){return wl(o,t,1-Math.exp(-n*a))}function vb(o,t=1){return t-Math.abs(em(o,t*2)-t)}function xb(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*(3-2*o))}function yb(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*o*(o*(o*6-15)+10))}function Sb(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Mb(o,t){return o+Math.random()*(t-o)}function bb(o){return o*(.5-Math.random())}function Eb(o){o!==void 0&&(mv=o);let t=mv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tb(o){return o*Al}function Ab(o){return o*oo}function wb(o){return(o&o-1)===0&&o!==0}function Rb(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Cb(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Db(o,t,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),y=c((a-t)/2),b=u((a-t)/2);switch(r){case"XYX":o.set(h*g,p*_,p*v,h*d);break;case"YZY":o.set(p*v,h*g,p*_,h*d);break;case"ZXZ":o.set(p*_,p*v,h*g,h*d);break;case"XZX":o.set(h*g,p*b,p*y,h*d);break;case"YXY":o.set(p*y,h*g,p*b,h*d);break;case"ZYZ":o.set(p*b,p*y,h*g,h*d);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Rl={DEG2RAD:Al,RAD2DEG:oo,generateUUID:Hi,clamp:me,euclideanModulo:em,mapLinear:mb,inverseLerp:gb,lerp:wl,damp:_b,pingpong:vb,smoothstep:xb,smootherstep:yb,randInt:Sb,randFloat:Mb,randFloatSpread:bb,seededRandom:Eb,degToRad:Tb,radToDeg:Ab,isPowerOfTwo:wb,ceilPowerOfTwo:Rb,floorPowerOfTwo:Cb,setQuaternionFromProperEuler:Db,normalize:Ve,denormalize:Fi};class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*r+t.x,this.y=c*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class aa{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,c,u,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3],v=c[u+0],y=c[u+1],b=c[u+2],T=c[u+3];if(h<=0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_;return}if(h>=1){t[n+0]=v,t[n+1]=y,t[n+2]=b,t[n+3]=T;return}if(_!==T||p!==v||d!==y||g!==b){let M=p*v+d*y+g*b+_*T;M<0&&(v=-v,y=-y,b=-b,T=-T,M=-M);let x=1-h;if(M<.9995){const C=Math.acos(M),D=Math.sin(C);x=Math.sin(x*C)/D,h=Math.sin(h*C)/D,p=p*x+v*h,d=d*x+y*h,g=g*x+b*h,_=_*x+T*h}else{p=p*x+v*h,d=d*x+y*h,g=g*x+b*h,_=_*x+T*h;const C=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=C,d*=C,g*=C,_*=C}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,c,u){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=c[u],v=c[u+1],y=c[u+2],b=c[u+3];return t[n]=h*b+g*_+p*y-d*v,t[n+1]=p*b+g*v+d*_-h*y,t[n+2]=d*b+g*y+h*v-p*_,t[n+3]=g*b-h*_-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(c/2),v=p(a/2),y=p(r/2),b=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*b,this._y=d*y*_-v*g*b,this._z=d*g*b+v*y*_,this._w=d*g*_-v*y*b;break;case"YXZ":this._x=v*g*_+d*y*b,this._y=d*y*_-v*g*b,this._z=d*g*b-v*y*_,this._w=d*g*_+v*y*b;break;case"ZXY":this._x=v*g*_-d*y*b,this._y=d*y*_+v*g*b,this._z=d*g*b+v*y*_,this._w=d*g*_-v*y*b;break;case"ZYX":this._x=v*g*_-d*y*b,this._y=d*y*_+v*g*b,this._z=d*g*b-v*y*_,this._w=d*g*_+v*y*b;break;case"YZX":this._x=v*g*_+d*y*b,this._y=d*y*_+v*g*b,this._z=d*g*b-v*y*_,this._w=d*g*_-v*y*b;break;case"XZY":this._x=v*g*_-d*y*b,this._y=d*y*_-v*g*b,this._z=d*g*b+v*y*_,this._w=d*g*_+v*y*b;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-r)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-d)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(u-r)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,c=t._z,u=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+r*d-c*p,this._y=r*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-r*h,this._w=u*g-a*h-r*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,r=-r,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,a=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(gv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(gv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,c=t.x,u=t.y,h=t.z,p=t.w,d=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=r+p*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this.z=me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this.z=me(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=r*p-c*h,this.y=c*u-a*p,this.z=a*h-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new X,gv=new aa;class fe{constructor(t,n,a,r,c,u,h,p,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,c,u,h,p,d)}set(t,n,a,r,c,u,h,p,d){const g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],b=a[8],T=r[0],M=r[3],x=r[6],C=r[1],D=r[4],L=r[7],O=r[2],B=r[5],P=r[8];return c[0]=u*T+h*C+p*O,c[3]=u*M+h*D+p*B,c[6]=u*x+h*L+p*P,c[1]=d*T+g*C+_*O,c[4]=d*M+g*D+_*B,c[7]=d*x+g*L+_*P,c[2]=v*T+y*C+b*O,c[5]=v*M+y*D+b*B,c[8]=v*x+y*L+b*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-a*c*g+a*h*p+r*c*d-r*u*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=g*u-h*d,v=h*p-g*c,y=d*c-u*p,b=n*_+a*v+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(r*d-g*a)*T,t[2]=(h*a-r*u)*T,t[3]=v*T,t[4]=(g*n-r*p)*T,t[5]=(r*c-h*n)*T,t[6]=y*T,t[7]=(a*p-d*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+t,-r*d,r*p,-r*(-d*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(ad.makeScale(t,n)),this}rotate(t){return this.premultiply(ad.makeRotation(-t)),this}translate(t,n){return this.premultiply(ad.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new fe,_v=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const o={enabled:!0,workingColorSpace:qn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===He&&(r.r=Pa(r.r),r.g=Pa(r.g),r.b=Pa(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===He&&(r.r=eo(r.r),r.g=eo(r.g),r.b=eo(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ys?Iu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Pl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Pl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[qn]:{primaries:t,whitePoint:a,transfer:Iu,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:a,transfer:He,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),o}const Te=Lb();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ir;class Nb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Ir===void 0&&(Ir=Ol("canvas")),Ir.width=t.width,Ir.height=t.height;const r=Ir.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Ir}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ol("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Pa(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Pa(n[a]/255)*255):n[a]=Pa(n[a]);return{data:n,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ub=0;class nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(sd(r[u].image)):c.push(sd(r[u]))}else c=sd(r);a.url=c}return n||(t.images[this.uuid]=a),a}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Nb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let Ob=0;const rd=new X;class En extends Js{constructor(t=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,a=$i,r=$i,c=xn,u=La,h=ni,p=di,d=En.DEFAULT_ANISOTROPY,g=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Hi(),this.name="",this.source=new nm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){Zt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Zt(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Fx;En.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,n=0,a=0,r=1){Ze.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,c;const p=t.elements,d=p[0],g=p[4],_=p[8],v=p[1],y=p[5],b=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,L=(y+1)/2,O=(x+1)/2,B=(g+v)/4,P=(_+T)/4,Y=(b+M)/4;return D>L&&D>O?D<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(D),r=B/a,c=P/a):L>O?L<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(L),a=B/r,c=Y/r):O<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(O),a=P/c,r=Y/c),this.set(a,r,c,n),this}let C=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(_-T)/C,this.z=(v-g)/C,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this.z=me(this.z,t.z,n.z),this.w=me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this.z=me(this.z,t,n),this.w=me(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends Js{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Ze(0,0,t,n),this.scissorTest=!1,this.viewport=new Ze(0,0,t,n);const r={width:t,height:n,depth:a.depth},c=new En(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new nm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Pb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class qx extends En{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ib extends En{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Pi):Pi.fromBufferAttribute(c,u),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$c.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),$c.copy(a.boundingBox)),$c.applyMatrix4(t.matrixWorld),this.union($c)}const r=t.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dl),tu.subVectors(this.max,dl),Br.subVectors(t.a,dl),Fr.subVectors(t.b,dl),zr.subVectors(t.c,dl),fs.subVectors(Fr,Br),ds.subVectors(zr,Fr),Hs.subVectors(Br,zr);let n=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Hs.z,Hs.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Hs.z,0,-Hs.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Hs.y,Hs.x,0];return!od(n,Br,Fr,zr,tu)||(n=[1,0,0,0,1,0,0,0,1],!od(n,Br,Fr,zr,tu))?!1:(eu.crossVectors(fs,ds),n=[eu.x,eu.y,eu.z],od(n,Br,Fr,zr,tu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ta=[new X,new X,new X,new X,new X,new X,new X,new X],Pi=new X,$c=new za,Br=new X,Fr=new X,zr=new X,fs=new X,ds=new X,Hs=new X,dl=new X,tu=new X,eu=new X,Vs=new X;function od(o,t,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Vs.fromArray(o,c);const h=r.x*Math.abs(Vs.x)+r.y*Math.abs(Vs.y)+r.z*Math.abs(Vs.z),p=t.dot(Vs),d=n.dot(Vs),g=a.dot(Vs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const Bb=new za,pl=new X,ld=new X;class sa{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):Bb.setFromPoints(t).getCenter(a);let r=0;for(let c=0,u=t.length;c<u;c++)r=Math.max(r,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pl.subVectors(t,this.center);const n=pl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(pl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pl.copy(t.center).add(ld)),this.expandByPoint(pl.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Aa=new X,cd=new X,nu=new X,ps=new X,ud=new X,iu=new X,hd=new X;class Fl{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Aa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,n),Aa.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){cd.copy(t).add(n).multiplyScalar(.5),nu.copy(n).sub(t).normalize(),ps.copy(this.origin).sub(cd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(nu),h=ps.dot(this.direction),p=-ps.dot(nu),d=ps.lengthSq(),g=Math.abs(1-u*u);let _,v,y,b;if(g>0)if(_=u*p-h,v=u*h-p,b=c*g,_>=0)if(v>=-b)if(v<=b){const T=1/g;_*=T,v*=T,y=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(cd).addScaledVector(nu,v),y}intersectSphere(t,n){Aa.subVectors(t.center,this.origin);const a=Aa.dot(this.direction),r=Aa.dot(Aa)-a*a,c=t.radius*t.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,r=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,r=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,n,a,r,c){ud.subVectors(n,t),iu.subVectors(a,t),hd.crossVectors(ud,iu);let u=this.direction.dot(hd),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ps.subVectors(this.origin,t);const p=h*this.direction.dot(iu.crossVectors(ps,iu));if(p<0)return null;const d=h*this.direction.dot(ud.cross(ps));if(d<0||p+d>u)return null;const g=-h*ps.dot(hd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,n,a,r,c,u,h,p,d,g,_,v,y,b,T,M){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,c,u,h,p,d,g,_,v,y,b,T,M)}set(t,n,a,r,c,u,h,p,d,g,_,v,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=h,x[13]=p,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/Hr.setFromMatrixColumn(t,0).length(),c=1/Hr.setFromMatrixColumn(t,1).length(),u=1/Hr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,b=h*g,T=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=y+b*d,n[5]=v-T*d,n[9]=-h*p,n[2]=T-v*d,n[6]=b+y*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,b=d*g,T=d*_;n[0]=v+T*h,n[4]=b*h-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-b,n[6]=T+v*h,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,b=d*g,T=d*_;n[0]=v-T*h,n[4]=-u*_,n[8]=b+y*h,n[1]=y+b*h,n[5]=u*g,n[9]=T-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,b=h*g,T=h*_;n[0]=p*g,n[4]=b*d-y,n[8]=v*d+T,n[1]=p*_,n[5]=T*d+v,n[9]=y*d-b,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*d,b=h*p,T=h*d;n[0]=p*g,n[4]=T-v*_,n[8]=b*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+b,n[10]=v-T*_}else if(t.order==="XZY"){const v=u*p,y=u*d,b=h*p,T=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+T,n[5]=u*g,n[9]=y*_-b,n[2]=b*_-y,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fb,t,zb)}lookAt(t,n,a){const r=this.elements;return hi.subVectors(t,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ms.crossVectors(a,hi),ms.lengthSq()===0&&(Math.abs(a.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ms.crossVectors(a,hi)),ms.normalize(),au.crossVectors(hi,ms),r[0]=ms.x,r[4]=au.x,r[8]=hi.x,r[1]=ms.y,r[5]=au.y,r[9]=hi.y,r[2]=ms.z,r[6]=au.z,r[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],b=a[2],T=a[6],M=a[10],x=a[14],C=a[3],D=a[7],L=a[11],O=a[15],B=r[0],P=r[4],Y=r[8],A=r[12],N=r[1],G=r[5],et=r[9],st=r[13],dt=r[2],ut=r[6],F=r[10],H=r[14],at=r[3],St=r[7],xt=r[11],I=r[15];return c[0]=u*B+h*N+p*dt+d*at,c[4]=u*P+h*G+p*ut+d*St,c[8]=u*Y+h*et+p*F+d*xt,c[12]=u*A+h*st+p*H+d*I,c[1]=g*B+_*N+v*dt+y*at,c[5]=g*P+_*G+v*ut+y*St,c[9]=g*Y+_*et+v*F+y*xt,c[13]=g*A+_*st+v*H+y*I,c[2]=b*B+T*N+M*dt+x*at,c[6]=b*P+T*G+M*ut+x*St,c[10]=b*Y+T*et+M*F+x*xt,c[14]=b*A+T*st+M*H+x*I,c[3]=C*B+D*N+L*dt+O*at,c[7]=C*P+D*G+L*ut+O*St,c[11]=C*Y+D*et+L*F+O*xt,c[15]=C*A+D*st+L*H+O*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],c=t[12],u=t[1],h=t[5],p=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15],C=p*y-d*v,D=h*y-d*_,L=h*v-p*_,O=u*y-d*g,B=u*v-p*g,P=u*_-h*g;return n*(T*C-M*D+x*L)-a*(b*C-M*O+x*B)+r*(b*D-T*O+x*P)-c*(b*L-T*B+M*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],C=_*M*d-T*v*d+T*p*y-h*M*y-_*p*x+h*v*x,D=b*v*d-g*M*d-b*p*y+u*M*y+g*p*x-u*v*x,L=g*T*d-b*_*d+b*h*y-u*T*y-g*h*x+u*_*x,O=b*_*p-g*T*p-b*h*v+u*T*v+g*h*M-u*_*M,B=n*C+a*D+r*L+c*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=C*P,t[1]=(T*v*c-_*M*c-T*r*y+a*M*y+_*r*x-a*v*x)*P,t[2]=(h*M*c-T*p*c+T*r*d-a*M*d-h*r*x+a*p*x)*P,t[3]=(_*p*c-h*v*c-_*r*d+a*v*d+h*r*y-a*p*y)*P,t[4]=D*P,t[5]=(g*M*c-b*v*c+b*r*y-n*M*y-g*r*x+n*v*x)*P,t[6]=(b*p*c-u*M*c-b*r*d+n*M*d+u*r*x-n*p*x)*P,t[7]=(u*v*c-g*p*c+g*r*d-n*v*d-u*r*y+n*p*y)*P,t[8]=L*P,t[9]=(b*_*c-g*T*c-b*a*y+n*T*y+g*a*x-n*_*x)*P,t[10]=(u*T*c-b*h*c+b*a*d-n*T*d-u*a*x+n*h*x)*P,t[11]=(g*h*c-u*_*c-g*a*d+n*_*d+u*a*y-n*h*y)*P,t[12]=O*P,t[13]=(g*T*r-b*_*r+b*a*v-n*T*v-g*a*M+n*_*M)*P,t[14]=(b*h*r-u*T*r-b*a*p+n*T*p+u*a*M-n*h*M)*P,t[15]=(u*_*r-g*h*r+g*a*p-n*_*p-u*a*v+n*h*v)*P,this}scale(t){const n=this.elements,a=t.x,r=t.y,c=t.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*u,0,d*p-r*h,g*p+r*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,c,u){return this.set(1,a,c,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,y=c*g,b=c*_,T=u*g,M=u*_,x=h*_,C=p*d,D=p*g,L=p*_,O=a.x,B=a.y,P=a.z;return r[0]=(1-(T+x))*O,r[1]=(y+L)*O,r[2]=(b-D)*O,r[3]=0,r[4]=(y-L)*B,r[5]=(1-(v+x))*B,r[6]=(M+C)*B,r[7]=0,r[8]=(b+D)*P,r[9]=(M-C)*P,r[10]=(1-(v+T))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=Hr.set(r[0],r[1],r[2]).length();const u=Hr.set(r[4],r[5],r[6]).length(),h=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),Ii.copy(this);const d=1/c,g=1/u,_=1/h;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,n.setFromRotationMatrix(Ii),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,r,c,u,h=ta,p=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(a-r),v=(n+t)/(n-t),y=(a+r)/(a-r);let b,T;if(p)b=c/(u-c),T=u*c/(u-c);else if(h===ta)b=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===Bu)b=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,c,u,h=ta,p=!1){const d=this.elements,g=2/(n-t),_=2/(a-r),v=-(n+t)/(n-t),y=-(a+r)/(a-r);let b,T;if(p)b=1/(u-c),T=u/(u-c);else if(h===ta)b=-2/(u-c),T=-(u+c)/(u-c);else if(h===Bu)b=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Hr=new X,Ii=new pe,Fb=new X(0,0,0),zb=new X(1,1,1),ms=new X,au=new X,hi=new X,xv=new pe,yv=new aa;class Gi{constructor(t=0,n=0,a=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,c=r[0],u=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return xv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return yv.setFromEuler(this),this.setFromQuaternion(yv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class jx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hb=0;const Sv=new X,Vr=new aa,wa=new pe,su=new X,ml=new X,Vb=new X,Gb=new aa,Mv=new X(1,0,0),bv=new X(0,1,0),Ev=new X(0,0,1),Tv={type:"added"},kb={type:"removed"},Gr={type:"childadded",child:null},fd={type:"childremoved",child:null};class nn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new X,n=new Gi,a=new aa,r=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new fe}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Vr.setFromAxisAngle(t,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(t,n){return Vr.setFromAxisAngle(t,n),this.quaternion.premultiply(Vr),this}rotateX(t){return this.rotateOnAxis(Mv,t)}rotateY(t){return this.rotateOnAxis(bv,t)}rotateZ(t){return this.rotateOnAxis(Ev,t)}translateOnAxis(t,n){return Sv.copy(t).applyQuaternion(this.quaternion),this.position.add(Sv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Mv,t)}translateY(t){return this.translateOnAxis(bv,t)}translateZ(t){return this.translateOnAxis(Ev,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?su.copy(t):su.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(ml,su,this.up):wa.lookAt(su,ml,this.up),this.quaternion.setFromRotationMatrix(wa),r&&(wa.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(wa),this.quaternion.premultiply(Vr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tv),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(kb),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tv),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,t,Vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,Gb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));r.material=h}else r.material=c(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),b=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=r,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}nn.DEFAULT_UP=new X(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new X,Ra=new X,dd=new X,Ca=new X,kr=new X,Xr=new X,Av=new X,pd=new X,md=new X,gd=new X,_d=new Ze,vd=new Ze,xd=new Ze;class zi{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Bi.subVectors(t,n),r.cross(Bi);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(t,n,a,r,c){Bi.subVectors(r,n),Ra.subVectors(a,n),dd.subVectors(t,n);const u=Bi.dot(Bi),h=Bi.dot(Ra),p=Bi.dot(dd),d=Ra.dot(Ra),g=Ra.dot(dd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*p-h*g)*v,b=(u*g-h*p)*v;return c.set(1-y-b,b,y)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,n,a,r,c,u,h,p){return this.getBarycoord(t,n,a,r,Ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ca.x),p.addScaledVector(u,Ca.y),p.addScaledVector(h,Ca.z),p)}static getInterpolatedAttribute(t,n,a,r,c,u){return _d.setScalar(0),vd.setScalar(0),xd.setScalar(0),_d.fromBufferAttribute(t,n),vd.fromBufferAttribute(t,a),xd.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(_d,c.x),u.addScaledVector(vd,c.y),u.addScaledVector(xd,c.z),u}static isFrontFacing(t,n,a,r){return Bi.subVectors(a,n),Ra.subVectors(t,n),Bi.cross(Ra).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Bi.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return zi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,c){return zi.getInterpolation(t,this.a,this.b,this.c,n,a,r,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,c=this.c;let u,h;kr.subVectors(r,a),Xr.subVectors(c,a),pd.subVectors(t,a);const p=kr.dot(pd),d=Xr.dot(pd);if(p<=0&&d<=0)return n.copy(a);md.subVectors(t,r);const g=kr.dot(md),_=Xr.dot(md);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(kr,u);gd.subVectors(t,c);const y=kr.dot(gd),b=Xr.dot(gd);if(b>=0&&y<=b)return n.copy(c);const T=y*d-p*b;if(T<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(Xr,h);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return Av.subVectors(c,r),h=(_-g)/(_-g+(y-b)),n.copy(r).addScaledVector(Av,h);const x=1/(M+T+v);return u=T*x,h=v*x,n.copy(a).addScaledVector(kr,u).addScaledVector(Xr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},ru={h:0,s:0,l:0};function yd(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Qt{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Te.workingColorSpace){return this.r=t,this.g=n,this.b=a,Te.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Te.workingColorSpace){if(t=em(t,1),n=me(n,0,1),a=me(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=yd(u,c,t+1/3),this.g=yd(u,c,t),this.b=yd(u,c,t-1/3)}return Te.colorSpaceToWorking(this,r),this}setStyle(t,n=Pn){function a(c){c!==void 0&&parseFloat(c)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Pn){const a=Kx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return Te.workingToColorSpace(Vn.copy(this),t),Math.round(me(Vn.r*255,0,255))*65536+Math.round(me(Vn.g*255,0,255))*256+Math.round(me(Vn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.workingToColorSpace(Vn.copy(this),n);const a=Vn.r,r=Vn.g,c=Vn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(r-c)/_+(r<c?6:0);break;case r:p=(c-a)/_+2;break;case c:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Te.workingColorSpace){return Te.workingToColorSpace(Vn.copy(this),n),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Pn){Te.workingToColorSpace(Vn.copy(this),t);const n=Vn.r,a=Vn.g,r=Vn.b;return t!==Pn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+n,gs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(gs),t.getHSL(ru);const a=wl(gs.h,ru.h,n),r=wl(gs.s,ru.s,n),c=wl(gs.l,ru.l,n);return this.setHSL(a,r,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Qt;Qt.NAMES=Kx;let Xb=0;class pi extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=to,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){Zt(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Zt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(a.blending=this.blending),this.side!==Ia&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==kd&&(a.blendSrc=this.blendSrc),this.blendDst!==Xd&&(a.blendDst=this.blendDst),this.blendEquation!==qs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=r(t.textures),u=r(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zs extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new X,ou=new $t;let Wb=0;class Yn{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Up,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)ou.fromBufferAttribute(this,n),ou.applyMatrix3(t),this.setXY(n,ou.x,ou.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Ve(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),r=Ve(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,c){return t*=this.itemSize,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),r=Ve(r,this.array),c=Ve(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Up&&(t.usage=this.usage),t}}class Zx extends Yn{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Qx extends Yn{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class In extends Yn{constructor(t,n,a){super(new Float32Array(t),n,a)}}let Yb=0;const Ti=new pe,Sd=new nn,Wr=new X,fi=new za,gl=new za,bn=new X;class jn extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yx(t)?Qx:Zx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new fe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,n,a){return Ti.makeTranslation(t,n,a),this.applyMatrix4(Ti),this}scale(t,n,a){return Ti.makeScale(t,n,a),this.applyMatrix4(Ti),this}lookAt(t){return Sd.lookAt(t),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=t.length;r<c;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new In(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const c=t[r];n.setXYZ(r,c.x,c.y,c.z||0)}t.length>n.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];gl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(fi.min,gl.min),fi.expandByPoint(bn),bn.addVectors(fi.max,gl.max),fi.expandByPoint(bn)):(fi.expandByPoint(gl.min),fi.expandByPoint(gl.max))}fi.getCenter(a);let r=0;for(let c=0,u=t.count;c<u;c++)bn.fromBufferAttribute(t,c),r=Math.max(r,a.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)bn.fromBufferAttribute(h,d),p&&(Wr.fromBufferAttribute(t,d),bn.add(Wr)),r=Math.max(r,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let Y=0;Y<a.count;Y++)h[Y]=new X,p[Y]=new X;const d=new X,g=new X,_=new X,v=new $t,y=new $t,b=new $t,T=new X,M=new X;function x(Y,A,N){d.fromBufferAttribute(a,Y),g.fromBufferAttribute(a,A),_.fromBufferAttribute(a,N),v.fromBufferAttribute(c,Y),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,N),g.sub(d),_.sub(d),y.sub(v),b.sub(v);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(G),h[Y].add(T),h[A].add(T),h[N].add(T),p[Y].add(M),p[A].add(M),p[N].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let Y=0,A=C.length;Y<A;++Y){const N=C[Y],G=N.start,et=N.count;for(let st=G,dt=G+et;st<dt;st+=3)x(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new X,L=new X,O=new X,B=new X;function P(Y){O.fromBufferAttribute(r,Y),B.copy(O);const A=h[Y];D.copy(A),D.sub(O.multiplyScalar(O.dot(A))).normalize(),L.crossVectors(B,A);const G=L.dot(p[Y])<0?-1:1;u.setXYZW(Y,D.x,D.y,D.z,G)}for(let Y=0,A=C.length;Y<A;++Y){const N=C[Y],G=N.start,et=N.count;for(let st=G,dt=G+et;st<dt;st+=3)P(t.getX(st+0)),P(t.getX(st+1)),P(t.getX(st+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new X,c=new X,u=new X,h=new X,p=new X,d=new X,g=new X,_=new X;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);r.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let y=0,b=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?y=p[T]*h.data.stride+h.offset:y=p[T]*g;for(let x=0;x<g;x++)v[b++]=d[y++]}return new Yn(v,g,_)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=t(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,a);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(r[p]=g,c=!0)}c&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wv=new pe,Gs=new Fl,lu=new sa,Rv=new X,cu=new X,uu=new X,hu=new X,Md=new X,fu=new X,Cv=new X,du=new X;class Bn extends nn{constructor(t=new jn,n=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(c&&h){fu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(Md.fromBufferAttribute(_,t),u?fu.addScaledVector(Md,g):fu.addScaledVector(Md.sub(n),g))}n.add(fu)}return n}raycast(t,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),lu.copy(a.boundingSphere),lu.applyMatrix4(c),Gs.copy(t.ray).recast(t.near),!(lu.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(lu,Rv)===null||Gs.origin.distanceToSquared(Rv)>(t.far-t.near)**2))&&(wv.copy(c).invert(),Gs.copy(t.ray).applyMatrix4(wv),!(a.boundingBox!==null&&Gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Gs)))}_computeIntersections(t,n,a){let r;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=u[M.materialIndex],C=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let L=C,O=D;L<O;L+=3){const B=h.getX(L),P=h.getX(L+1),Y=h.getX(L+2);r=pu(this,x,t,a,d,g,_,B,P,Y),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const C=h.getX(M),D=h.getX(M+1),L=h.getX(M+2);r=pu(this,u,t,a,d,g,_,C,D,L),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=u[M.materialIndex],C=Math.max(M.start,y.start),D=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=C,O=D;L<O;L+=3){const B=L,P=L+1,Y=L+2;r=pu(this,x,t,a,d,g,_,B,P,Y),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const b=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const C=M,D=M+1,L=M+2;r=pu(this,u,t,a,d,g,_,C,D,L),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}}}function qb(o,t,n,a,r,c,u,h){let p;if(t.side===ii?p=a.intersectTriangle(u,c,r,!0,h):p=a.intersectTriangle(r,c,u,t.side===Ia,h),p===null)return null;du.copy(h),du.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(du);return d<n.near||d>n.far?null:{distance:d,point:du.clone(),object:o}}function pu(o,t,n,a,r,c,u,h,p,d){o.getVertexPosition(h,cu),o.getVertexPosition(p,uu),o.getVertexPosition(d,hu);const g=qb(o,t,n,a,cu,uu,hu,Cv);if(g){const _=new X;zi.getBarycoord(Cv,cu,uu,hu,_),r&&(g.uv=zi.getInterpolatedAttribute(r,h,p,d,_,new $t)),c&&(g.uv1=zi.getInterpolatedAttribute(c,h,p,d,_,new $t)),u&&(g.normal=zi.getInterpolatedAttribute(u,h,p,d,_,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new X,materialIndex:0};zi.getNormal(cu,uu,hu,v.normal),g.face=v,g.barycoord=_}return g}class zl extends jn{constructor(t=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,y=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,r,u,2),b("x","z","y",1,-1,t,a,-n,r,u,3),b("x","y","z",1,-1,t,n,a,r,c,4),b("x","y","z",-1,-1,t,n,-a,r,c,5),this.setIndex(p),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(g,3)),this.setAttribute("uv",new In(_,2));function b(T,M,x,C,D,L,O,B,P,Y,A){const N=L/P,G=O/Y,et=L/2,st=O/2,dt=B/2,ut=P+1,F=Y+1;let H=0,at=0;const St=new X;for(let xt=0;xt<F;xt++){const I=xt*G-st;for(let it=0;it<ut;it++){const gt=it*N-et;St[T]=gt*C,St[M]=I*D,St[x]=dt,d.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[x]=B>0?1:-1,g.push(St.x,St.y,St.z),_.push(it/P),_.push(1-xt/Y),H+=1}}for(let xt=0;xt<Y;xt++)for(let I=0;I<P;I++){const it=v+I+ut*xt,gt=v+I+ut*(xt+1),Tt=v+(I+1)+ut*(xt+1),Ft=v+(I+1)+ut*xt;p.push(it,gt,Ft),p.push(gt,Tt,Ft),at+=6}h.addGroup(y,at,A),y+=at,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function Xn(o){const t={};for(let n=0;n<o.length;n++){const a=lo(o[n]);for(const r in a)t[r]=a[r]}return t}function jb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function Jx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Kb={clone:lo,merge:Xn};var Zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=jb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class $x extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new X,Dv=new $t,Lv=new $t;class Wn extends $x{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,n){return this.getViewBounds(t,Dv,Lv),n.subVectors(Lv,Dv)}setViewOffset(t,n,a,r,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Al*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,qr=1;class Jb extends nn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Yr,qr,t,n);r.layers=this.layers,this.add(r);const c=new Wn(Yr,qr,t,n);c.layers=this.layers,this.add(c);const u=new Wn(Yr,qr,t,n);u.layers=this.layers,this.add(u);const h=new Wn(Yr,qr,t,n);h.layers=this.layers,this.add(h);const p=new Wn(Yr,qr,t,n);p.layers=this.layers,this.add(p);const d=new Wn(Yr,qr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,p]=n;for(const d of n)this.remove(d);if(t===ta)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Bu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,c),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,h),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,d),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class ty extends En{constructor(t=[],n=Qs,a,r,c,u,h,p,d,g){super(t,n,a,r,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ey extends Vi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new ty(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zl(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:lo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ii,blending:Oa});c.uniforms.tEquirect.value=n;const u=new Bn(r,c),h=n.minFilter;return n.minFilter===La&&(n.minFilter=xn),new Jb(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(c)}}class Na extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),x=this._getHandJoint(d,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,b=.005;d.inputState.pinching&&v>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent($b)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Na;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class tE extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class eE{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Up,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[t+r]=n.array[a+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new X;class im{constructor(t,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Ve(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),r=Ve(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=r,this}setXYZW(t,n,a,r,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ve(n,this.array),a=Ve(a,this.array),r=Ve(r,this.array),c=Ve(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=r,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Fu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new Yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new im(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Nv=new X,Uv=new Ze,Ov=new Ze,nE=new X,Pv=new pe,mu=new X,Ed=new sa,Iv=new pe,Td=new Fl;class iE extends Bn{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lv,this.bindMatrix=new pe,this.bindMatrixInverse=new pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new za),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,mu),this.boundingBox.expandByPoint(mu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sa),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,mu),this.boundingSphere.expandByPoint(mu)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ed.copy(this.boundingSphere),Ed.applyMatrix4(r),t.ray.intersectsSphere(Ed)!==!1&&(Iv.copy(r).invert(),Td.copy(t.ray).applyMatrix4(Iv),!(this.boundingBox!==null&&Td.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,Td)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ze,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){t.fromBufferAttribute(n,a);const c=1/t.manhattanLength();c!==1/0?t.multiplyScalar(c):t.set(1,0,0,0),n.setXYZW(a,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eb?this.bindMatrixInverse.copy(this.bindMatrix).invert():Zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const a=this.skeleton,r=this.geometry;Uv.fromBufferAttribute(r.attributes.skinIndex,t),Ov.fromBufferAttribute(r.attributes.skinWeight,t),Nv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=Ov.getComponent(c);if(u!==0){const h=Uv.getComponent(c);Pv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(nE.copy(Nv).applyMatrix4(Pv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class ny extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class am extends En{constructor(t=null,n=1,a=1,r,c,u,h,p,d=ke,g=ke,_,v){super(null,u,h,p,d,g,r,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bv=new pe,aE=new pe;class sm{constructor(t=[],n=[]){this.uuid=Hi(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){Zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const a=new pe;this.bones[t]&&a.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const a=this.bones[t];a&&a.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const a=this.bones[t];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const t=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=t.length;c<u;c++){const h=t[c]?t[c].matrixWorld:aE;Bv.multiplyMatrices(h,n[c]),Bv.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new sm(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const a=new am(n,t,t,ni,Ri);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(t){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let a=0,r=t.bones.length;a<r;a++){const c=t.bones[a];let u=n[c];u===void 0&&(Zt("Skeleton: No bone found with UUID:",c),u=new ny),this.bones.push(u),this.boneInverses.push(new pe().fromArray(t.boneInverses[a]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];t.bones.push(u.uuid);const h=a[r];t.boneInverses.push(h.toArray())}return t}}class Op extends Yn{constructor(t,n,a,r=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const jr=new pe,Fv=new pe,gu=[],zv=new za,sE=new pe,_l=new Bn,vl=new sa;class Pp extends Bn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Op(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,sE)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new za),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,jr),zv.copy(t.boundingBox).applyMatrix4(jr),this.boundingBox.union(zv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new sa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,jr),vl.copy(t.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(vl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(t,n){const a=this.matrixWorld,r=this.count;if(_l.geometry=this.geometry,_l.material=this.material,_l.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(a),t.ray.intersectsSphere(vl)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,jr),Fv.multiplyMatrices(a,jr),_l.matrixWorld=Fv,_l.raycast(t,gu);for(let u=0,h=gu.length;u<h;u++){const p=gu[u];p.instanceId=c,p.object=this,n.push(p)}gu.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Op(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new am(new Float32Array(r*this.count),r,this.count,Kp,Ri));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=r*t;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ad=new X,rE=new X,oE=new fe;class xs{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Ad.subVectors(a,n).cross(rE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ad),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||oE.getNormalMatrix(t),r=this.coplanarPoint(Ad).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new sa,lE=new $t(.5,.5),_u=new X;class rm{constructor(t=new xs,n=new xs,a=new xs,r=new xs,c=new xs,u=new xs){this.planes=[t,n,a,r,c,u]}set(t,n,a,r,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ta,a=!1){const r=this.planes,c=t.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],C=c[12],D=c[13],L=c[14],O=c[15];if(r[0].setComponents(d-u,y-g,x-b,O-C).normalize(),r[1].setComponents(d+u,y+g,x+b,O+C).normalize(),r[2].setComponents(d+h,y+_,x+T,O+D).normalize(),r[3].setComponents(d-h,y-_,x-T,O-D).normalize(),a)r[4].setComponents(p,v,M,L).normalize(),r[5].setComponents(d-p,y-v,x-M,O-L).normalize();else if(r[4].setComponents(d-p,y-v,x-M,O-L).normalize(),n===ta)r[5].setComponents(d+p,y+v,x+M,O+L).normalize();else if(n===Bu)r[5].setComponents(p,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);const n=lE.distanceTo(t.center);return ks.radius=.7071067811865476+n,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(_u.x=r.normal.x>0?t.max.x:t.min.x,_u.y=r.normal.y>0?t.max.y:t.min.y,_u.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_u)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class om extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zu=new X,Hu=new X,Hv=new pe,xl=new Fl,vu=new sa,wd=new X,Vv=new X;class lm extends nn{constructor(t=new jn,n=new om){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)zu.fromBufferAttribute(n,r-1),Hu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=zu.distanceTo(Hu);t.setAttribute("lineDistance",new In(a,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,r=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),vu.copy(a.boundingSphere),vu.applyMatrix4(r),vu.radius+=c,t.ray.intersectsSphere(vu)===!1)return;Hv.copy(r).invert(),xl.copy(t.ray).applyMatrix4(Hv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let T=y,M=b-1;T<M;T+=d){const x=g.getX(T),C=g.getX(T+1),D=xu(this,t,xl,p,x,C,T);D&&n.push(D)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(y),x=xu(this,t,xl,p,T,M,b-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let T=y,M=b-1;T<M;T+=d){const x=xu(this,t,xl,p,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=xu(this,t,xl,p,b-1,y,b-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function xu(o,t,n,a,r,c,u){const h=o.geometry.attributes.position;if(zu.fromBufferAttribute(h,r),Hu.fromBufferAttribute(h,c),n.distanceSqToSegment(zu,Hu,wd,Vv)>a)return;wd.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(wd);if(!(d<t.near||d>t.far))return{distance:d,point:Vv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Gv=new X,kv=new X;class iy extends lm{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)Gv.fromBufferAttribute(n,r),kv.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+Gv.distanceTo(kv);t.setAttribute("lineDistance",new In(a,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cE extends lm{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class ay extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xv=new pe,Ip=new Fl,yu=new sa,Su=new X;class uE extends nn{constructor(t=new jn,n=new ay){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,r=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere),yu.applyMatrix4(r),yu.radius+=c,t.ray.intersectsSphere(yu)===!1)return;Xv.copy(r).invert(),Ip.copy(t.ray).applyMatrix4(Xv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let b=v,T=y;b<T;b++){const M=d.getX(b);Su.fromBufferAttribute(_,M),Wv(Su,M,p,r,t,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let b=v,T=y;b<T;b++)Su.fromBufferAttribute(_,b),Wv(Su,b,p,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Wv(o,t,n,a,r,c,u){const h=Ip.distanceSqToPoint(o);if(h<n){const p=new X;Ip.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class co extends En{constructor(t,n,a=ia,r,c,u,h=ke,p=ke,d,g=Fa,_=1){if(g!==Fa&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,r,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hE extends co{constructor(t,n=ia,a=Qs,r,c,u=ke,h=ke,p,d=Fa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,r,c,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sy extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cm extends jn{constructor(t=[],n=[],a=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:r};const c=[],u=[];h(r),d(a),g(),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(c.slice(),3)),this.setAttribute("uv",new In(u,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function h(C){const D=new X,L=new X,O=new X;for(let B=0;B<n.length;B+=3)y(n[B+0],D),y(n[B+1],L),y(n[B+2],O),p(D,L,O,C)}function p(C,D,L,O){const B=O+1,P=[];for(let Y=0;Y<=B;Y++){P[Y]=[];const A=C.clone().lerp(L,Y/B),N=D.clone().lerp(L,Y/B),G=B-Y;for(let et=0;et<=G;et++)et===0&&Y===B?P[Y][et]=A:P[Y][et]=A.clone().lerp(N,et/G)}for(let Y=0;Y<B;Y++)for(let A=0;A<2*(B-Y)-1;A++){const N=Math.floor(A/2);A%2===0?(v(P[Y][N+1]),v(P[Y+1][N]),v(P[Y][N])):(v(P[Y][N+1]),v(P[Y+1][N+1]),v(P[Y+1][N]))}}function d(C){const D=new X;for(let L=0;L<c.length;L+=3)D.x=c[L+0],D.y=c[L+1],D.z=c[L+2],D.normalize().multiplyScalar(C),c[L+0]=D.x,c[L+1]=D.y,c[L+2]=D.z}function g(){const C=new X;for(let D=0;D<c.length;D+=3){C.x=c[D+0],C.y=c[D+1],C.z=c[D+2];const L=M(C)/2/Math.PI+.5,O=x(C)/Math.PI+.5;u.push(L,1-O)}b(),_()}function _(){for(let C=0;C<u.length;C+=6){const D=u[C+0],L=u[C+2],O=u[C+4],B=Math.max(D,L,O),P=Math.min(D,L,O);B>.9&&P<.1&&(D<.2&&(u[C+0]+=1),L<.2&&(u[C+2]+=1),O<.2&&(u[C+4]+=1))}}function v(C){c.push(C.x,C.y,C.z)}function y(C,D){const L=C*3;D.x=t[L+0],D.y=t[L+1],D.z=t[L+2]}function b(){const C=new X,D=new X,L=new X,O=new X,B=new $t,P=new $t,Y=new $t;for(let A=0,N=0;A<c.length;A+=9,N+=6){C.set(c[A+0],c[A+1],c[A+2]),D.set(c[A+3],c[A+4],c[A+5]),L.set(c[A+6],c[A+7],c[A+8]),B.set(u[N+0],u[N+1]),P.set(u[N+2],u[N+3]),Y.set(u[N+4],u[N+5]),O.copy(C).add(D).add(L).divideScalar(3);const G=M(O);T(B,N+0,C,G),T(P,N+2,D,G),T(Y,N+4,L,G)}}function T(C,D,L,O){O<0&&C.x===1&&(u[D]=C.x-1),L.x===0&&L.z===0&&(u[D]=O/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function x(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cm(t.vertices,t.indices,t.radius,t.detail)}}class um extends cm{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,r=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new um(t.radius,t.detail)}}class po extends jn{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(r),d=h+1,g=p+1,_=t/h,v=n/p,y=[],b=[],T=[],M=[];for(let x=0;x<g;x++){const C=x*v-u;for(let D=0;D<d;D++){const L=D*_-c;b.push(L,-C,0),T.push(0,0,1),M.push(D/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<h;C++){const D=C+d*x,L=C+d*(x+1),O=C+1+d*(x+1),B=C+1+d*x;y.push(D,L,B),y.push(L,O,B)}this.setIndex(y),this.setAttribute("position",new In(b,3)),this.setAttribute("normal",new In(T,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}class fE extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hm extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ra extends hm{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class dE extends pi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vu extends pi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class pE extends pi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class mE extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gE extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Mu(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function _E(o){function t(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(t),a}function Yv(o,t,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*t;for(let p=0;p!==t;++p)r[u++]=o[h+p]}return r}function ry(o,t,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(t.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(t.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(t.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class Hl{constructor(t,n,a,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];t:{e:{let u;n:{i:if(!(t<r)){for(let h=a+2;;){if(r===void 0){if(t<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],t<r)break e}u=n.length;break n}if(!(t>=c)){const h=n[1];t<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=c,c=n[--a-1],t>=c)break e}u=a,a=0;break n}break t}for(;a<u;){const h=a+u>>>1;t<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=t*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vE extends Hl{constructor(t,n,a,r){super(t,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cv,endingEnd:cv}}intervalChanged_(t,n,a){const r=this.parameterPositions;let c=t-2,u=t+1,h=r[c],p=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case uv:c=t,h=2*n-a;break;case hv:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=t,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case uv:u=t,p=2*a-n;break;case hv:u=1,p=a+r[1]-r[0];break;default:u=t-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(t,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=t*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,b=(a-n)/(r-n),T=b*b,M=T*b,x=-v*M+2*v*T-v*b,C=(1+v)*M+(-1.5-2*v)*T+(-.5+v)*b+1,D=(-1-y)*M+(1.5+y)*T+.5*b,L=y*M-y*T;for(let O=0;O!==h;++O)c[O]=x*u[g+O]+C*u[d+O]+D*u[p+O]+L*u[_+O];return c}}class xE extends Hl{constructor(t,n,a,r){super(t,n,a,r)}interpolate_(t,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=t*h,d=p-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class yE extends Hl{constructor(t,n,a,r){super(t,n,a,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Xi{constructor(t,n,a,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mu(n,this.TimeBufferType),this.values=Mu(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(t);else{a={name:t.name,times:Mu(t.times,Array),values:Mu(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(a.interpolation=r)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new yE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vE(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Nl:n=this.InterpolantFactoryMethodDiscrete;break;case Ul:n=this.InterpolantFactoryMethodLinear;break;case nd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Zt("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nl;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return nd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=t}return this}trim(t,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<t;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);const a=this.times,r=this.values,c=a.length;c===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){ae("KeyframeTrack: Time is not a valid number.",this,h,p),t=!1;break}if(u!==null&&u>p){ae("KeyframeTrack: Out of order keys.",this,h,p,u),t=!1;break}u=p}if(r!==void 0&&fb(r))for(let h=0,p=r.length;h!==p;++h){const d=r[h];if(isNaN(d)){ae("KeyframeTrack: Value is not a valid number.",this,h,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===nd,c=t.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=t[h],g=t[h+1];if(d!==g&&(h!==1||d!==t[0]))if(r)p=!0;else{const _=h*a,v=_-a,y=_+a;for(let b=0;b!==a;++b){const T=n[_+b];if(T!==n[v+b]||T!==n[y+b]){p=!0;break}}}if(p){if(h!==u){t[u]=t[h];const _=h*a,v=u*a;for(let y=0;y!==a;++y)n[v+y]=n[_+y]}++u}}if(c>0){t[u]=t[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=n.slice(0,u*a)):(this.times=t,this.values=n),this}clone(){const t=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}}Xi.prototype.ValueTypeName="";Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=Ul;class mo extends Xi{constructor(t,n,a){super(t,n,a)}}mo.prototype.ValueTypeName="bool";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=Nl;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class oy extends Xi{constructor(t,n,a,r){super(t,n,a,r)}}oy.prototype.ValueTypeName="color";class uo extends Xi{constructor(t,n,a,r){super(t,n,a,r)}}uo.prototype.ValueTypeName="number";class SE extends Hl{constructor(t,n,a,r){super(t,n,a,r)}interpolate_(t,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(r-n);let d=t*h;for(let g=d+h;d!==g;d+=4)aa.slerpFlat(c,0,u,d-h,u,d,p);return c}}class ho extends Xi{constructor(t,n,a,r){super(t,n,a,r)}InterpolantFactoryMethodLinear(t){return new SE(this.times,this.values,this.getValueSize(),t)}}ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Xi{constructor(t,n,a){super(t,n,a)}}go.prototype.ValueTypeName="string";go.prototype.ValueBufferType=Array;go.prototype.DefaultInterpolation=Nl;go.prototype.InterpolantFactoryMethodLinear=void 0;go.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends Xi{constructor(t,n,a,r){super(t,n,a,r)}}fo.prototype.ValueTypeName="vector";class ME{constructor(t="",n=-1,a=[],r=nb){this.name=t,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const n=[],a=t.tracks,r=1/(t.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(EE(a[u]).scale(r));const c=new this(t.name,t.duration,n,t.blendMode);return c.uuid=t.uuid,c.userData=JSON.parse(t.userData||"{}"),c}static toJSON(t){const n=[],a=t.tracks,r={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Xi.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(t,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=_E(p);p=Yv(p,1,g),d=Yv(d,1,g),!r&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new uo(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(t,-1,u)}static findByName(t,n){let a=t;if(!Array.isArray(t)){const r=t;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(t,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=t.length;h<p;h++){const d=t[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(d)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(t,n){if(Zt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return ae("AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,b,T){if(y.length!==0){const M=[],x=[];ry(y,M,x,b),M.length!==0&&T.push(new _(v,M,x))}},r=[],c=t.name||"default",u=t.fps||30,h=t.blendMode;let p=t.length||-1;const d=t.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let T=0;T<v[b].morphTargets.length;T++)y[v[b].morphTargets[T]]=-1;for(const T in y){const M=[],x=[];for(let C=0;C!==v[b].morphTargets.length;++C){const D=v[b];M.push(D.time),x.push(D.morphTarget===T?1:0)}r.push(new uo(".morphTargetInfluence["+T+"]",M,x))}p=y.length*u}else{const y=".bones["+n[_].name+"]";a(fo,y+".position",v,"pos",r),a(ho,y+".quaternion",v,"rot",r),a(fo,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,p,r,h)}resetDuration(){const t=this.tracks;let n=0;for(let a=0,r=t.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let a=0;a<this.tracks.length;a++)t.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,t,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function bE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uo;case"vector":case"vector2":case"vector3":case"vector4":return fo;case"color":return oy;case"quaternion":return ho;case"bool":case"boolean":return mo;case"string":return go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function EE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=bE(o.type);if(o.times===void 0){const n=[],a=[];ry(o.keys,n,a,"value"),o.times=n,o.values=a}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Ua={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class TE{constructor(t,n,a){const r=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],b=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const AE=new TE;class _o{constructor(t){this.manager=t!==void 0?t:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(r,c){a.load(t,r,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}_o.DEFAULT_MATERIAL_NAME="__DEFAULT";const Da={};class wE extends Error{constructor(t,n){super(t),this.response=n}}class ly extends _o{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,a,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Ua.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(c),this.manager.itemEnd(t)},0),c;if(Da[t]!==void 0){Da[t].push({onLoad:n,onProgress:a,onError:r});return}Da[t]=[],Da[t].push({onLoad:n,onProgress:a,onError:r});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Da[t],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,b=y!==0;let T=0;const M=new ReadableStream({start(x){C();function C(){_.read().then(({done:D,value:L})=>{if(D)x.close();else{T+=L.byteLength;const O=new ProgressEvent("progress",{lengthComputable:b,loaded:T,total:y});for(let B=0,P=g.length;B<P;B++){const Y=g[B];Y.onProgress&&Y.onProgress(O)}x.enqueue(L),C()}},D=>{x.error(D)})}}});return new Response(M)}else throw new wE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(b=>y.decode(b))}}}).then(d=>{Ua.add(`file:${t}`,d);const g=Da[t];delete Da[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=Da[t];if(g===void 0)throw this.manager.itemError(t),d;delete Da[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Kr=new WeakMap;class RE extends _o{constructor(t){super(t)}load(t,n,a,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=Ua.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0);else{let _=Kr.get(u);_===void 0&&(_=[],Kr.set(u,_)),_.push({onLoad:n,onError:r})}return u}const h=Ol("img");function p(){g(),n&&n(this);const _=Kr.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}Kr.delete(this),c.manager.itemEnd(t)}function d(_){g(),r&&r(_),Ua.remove(`image:${t}`);const v=Kr.get(this)||[];for(let y=0;y<v.length;y++){const b=v[y];b.onError&&b.onError(_)}Kr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ua.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class cy extends _o{constructor(t){super(t)}load(t,n,a,r){const c=new En,u=new RE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class ku extends nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Rd=new pe,qv=new X,jv=new X;class fm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;qv.setFromMatrixPosition(t.matrixWorld),n.position.copy(qv),jv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(jv),n.updateMatrixWorld(),Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class CE extends fm{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=oo*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class DE extends ku{constructor(t,n,a=0,r=Math.PI/3,c=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new CE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class LE extends fm{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0}}class uy extends ku{constructor(t,n,a=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Vl extends $x{constructor(t=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class NE extends fm{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bp extends ku{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new NE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Kv extends ku{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cl{static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}const Cd=new WeakMap;class UE extends _o{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Zt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Zt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,n,a,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=Ua.get(`image-bitmap:${t}`);if(u!==void 0){if(c.manager.itemStart(t),u.then){u.then(d=>{if(Cd.has(u)===!0)r&&r(Cd.get(u)),c.manager.itemError(t),c.manager.itemEnd(t);else return n&&n(d),c.manager.itemEnd(t),d});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(t,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ua.add(`image-bitmap:${t}`,d),n&&n(d),c.manager.itemEnd(t),d}).catch(function(d){r&&r(d),Cd.set(p,d),Ua.remove(`image-bitmap:${t}`),c.manager.itemError(t),c.manager.itemEnd(t)});Ua.add(`image-bitmap:${t}`,p),c.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class OE extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class PE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const dm="\\[\\]\\.:\\/",IE=new RegExp("["+dm+"]","g"),pm="[^"+dm+"]",BE="[^"+dm.replace("\\.","")+"]",FE=/((?:WC+[\/:])*)/.source.replace("WC",pm),zE=/(WCOD+)?/.source.replace("WCOD",BE),HE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pm),VE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pm),GE=new RegExp("^"+FE+zE+HE+VE+"$"),kE=["material","materials","bones","map"];class XE{constructor(t,n,a){const r=a||Ge.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(t,n)}setValue(t,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].unbind()}}class Ge{constructor(t,n,a){this.path=n,this.parsedPath=a||Ge.parseTrackName(n),this.node=Ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,a){return t&&t.isAnimationObjectGroup?new Ge.Composite(t,n,a):new Ge(t,n,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(IE,"")}static parseTrackName(t){const n=GE.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);kE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(n);if(a!==void 0)return a}if(t.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},r=a(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)t[n++]=a[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(t||(t=Ge.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(d!==void 0){if(t[d]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const u=t[r];if(u===void 0){const d=n.nodeName;ae("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=XE;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(me(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WE extends Js{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qv(o,t,n,a){const r=YE(a);switch(n){case Xx:return o*t;case Kp:return o*t/r.components*r.byteLength;case Zp:return o*t/r.components*r.byteLength;case ro:return o*t*2/r.components*r.byteLength;case Qp:return o*t*2/r.components*r.byteLength;case Pu:return o*t*3/r.components*r.byteLength;case ni:return o*t*4/r.components*r.byteLength;case Jp:return o*t*4/r.components*r.byteLength;case Cu:case Du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Lu:case Nu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ep:case ip:return Math.max(o,16)*Math.max(t,8)/4;case tp:case np:return Math.max(o,8)*Math.max(t,8)/2;case ap:case sp:case op:case lp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rp:case cp:case up:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case hp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _p:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case yp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tp:case Ap:case wp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Rp:case Cp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Dp:case Lp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YE(o){switch(o){case di:case Hx:return{byteLength:1,components:1};case Dl:case Vx:case Ba:return{byteLength:2,components:1};case qp:case jp:return{byteLength:2,components:4};case ia:case Yp:case Ri:return{byteLength:4,components:1};case Gx:case kx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);function hy(){let o=null,t=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function qE(o){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,g);else{_.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<_.length;y++){const b=_[v],T=_[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,b=_.length;y<b;y++){const T=_[y];o.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:c,update:u}}var jE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KE=`#ifdef USE_ALPHAHASH
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
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
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
#endif`,eT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oT=`#ifdef USE_IRIDESCENCE
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
#endif`,lT=`#ifdef USE_BUMPMAP
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
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_T=`#define PI 3.141592653589793
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
} // validated`,vT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xT=`vec3 transformedNormal = objectNormal;
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
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ET="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AT=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
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
#endif`,CT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PT=`#ifdef USE_GRADIENTMAP
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
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
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
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,VT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WT=`PhysicalMaterial material;
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
#endif`,YT=`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,qT=`
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
#endif`,jT=`#if defined( RE_IndirectDiffuse )
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
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iA=`#if defined( USE_POINTS_UV )
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
#endif`,aA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
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
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gA=`#ifdef USE_NORMALMAP
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
#endif`,_A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NA=`float getShadowMask() {
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
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OA=`#ifdef USE_SKINNING
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
#endif`,PA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IA=`#ifdef USE_SKINNING
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
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
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
#endif`,GA=`#ifdef USE_TRANSMISSION
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jA=`uniform sampler2D t2D;
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,_1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,x1=`#define TOON
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
}`,y1=`#define TOON
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
}`,S1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,A1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:jE,alphahash_pars_fragment:KE,alphamap_fragment:ZE,alphamap_pars_fragment:QE,alphatest_fragment:JE,alphatest_pars_fragment:$E,aomap_fragment:tT,aomap_pars_fragment:eT,batching_pars_vertex:nT,batching_vertex:iT,begin_vertex:aT,beginnormal_vertex:sT,bsdfs:rT,iridescence_fragment:oT,bumpmap_pars_fragment:lT,clipping_planes_fragment:cT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:fT,color_fragment:dT,color_pars_fragment:pT,color_pars_vertex:mT,color_vertex:gT,common:_T,cube_uv_reflection_fragment:vT,defaultnormal_vertex:xT,displacementmap_pars_vertex:yT,displacementmap_vertex:ST,emissivemap_fragment:MT,emissivemap_pars_fragment:bT,colorspace_fragment:ET,colorspace_pars_fragment:TT,envmap_fragment:AT,envmap_common_pars_fragment:wT,envmap_pars_fragment:RT,envmap_pars_vertex:CT,envmap_physical_pars_fragment:HT,envmap_vertex:DT,fog_vertex:LT,fog_pars_vertex:NT,fog_fragment:UT,fog_pars_fragment:OT,gradientmap_pars_fragment:PT,lightmap_pars_fragment:IT,lights_lambert_fragment:BT,lights_lambert_pars_fragment:FT,lights_pars_begin:zT,lights_toon_fragment:VT,lights_toon_pars_fragment:GT,lights_phong_fragment:kT,lights_phong_pars_fragment:XT,lights_physical_fragment:WT,lights_physical_pars_fragment:YT,lights_fragment_begin:qT,lights_fragment_maps:jT,lights_fragment_end:KT,logdepthbuf_fragment:ZT,logdepthbuf_pars_fragment:QT,logdepthbuf_pars_vertex:JT,logdepthbuf_vertex:$T,map_fragment:tA,map_pars_fragment:eA,map_particle_fragment:nA,map_particle_pars_fragment:iA,metalnessmap_fragment:aA,metalnessmap_pars_fragment:sA,morphinstance_vertex:rA,morphcolor_vertex:oA,morphnormal_vertex:lA,morphtarget_pars_vertex:cA,morphtarget_vertex:uA,normal_fragment_begin:hA,normal_fragment_maps:fA,normal_pars_fragment:dA,normal_pars_vertex:pA,normal_vertex:mA,normalmap_pars_fragment:gA,clearcoat_normal_fragment_begin:_A,clearcoat_normal_fragment_maps:vA,clearcoat_pars_fragment:xA,iridescence_pars_fragment:yA,opaque_fragment:SA,packing:MA,premultiplied_alpha_fragment:bA,project_vertex:EA,dithering_fragment:TA,dithering_pars_fragment:AA,roughnessmap_fragment:wA,roughnessmap_pars_fragment:RA,shadowmap_pars_fragment:CA,shadowmap_pars_vertex:DA,shadowmap_vertex:LA,shadowmask_pars_fragment:NA,skinbase_vertex:UA,skinning_pars_vertex:OA,skinning_vertex:PA,skinnormal_vertex:IA,specularmap_fragment:BA,specularmap_pars_fragment:FA,tonemapping_fragment:zA,tonemapping_pars_fragment:HA,transmission_fragment:VA,transmission_pars_fragment:GA,uv_pars_fragment:kA,uv_pars_vertex:XA,uv_vertex:WA,worldpos_vertex:YA,background_vert:qA,background_frag:jA,backgroundCube_vert:KA,backgroundCube_frag:ZA,cube_vert:QA,cube_frag:JA,depth_vert:$A,depth_frag:t1,distance_vert:e1,distance_frag:n1,equirect_vert:i1,equirect_frag:a1,linedashed_vert:s1,linedashed_frag:r1,meshbasic_vert:o1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:u1,meshmatcap_vert:h1,meshmatcap_frag:f1,meshnormal_vert:d1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:_1,meshphysical_frag:v1,meshtoon_vert:x1,meshtoon_frag:y1,points_vert:S1,points_frag:M1,shadow_vert:b1,shadow_frag:E1,sprite_vert:T1,sprite_frag:A1},Ut={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ji={basic:{uniforms:Xn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Xn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Xn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Xn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Xn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Xn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Xn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Xn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Xn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Xn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Xn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Xn([Ut.common,Ut.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Xn([Ut.lights,Ut.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ji.physical={uniforms:Xn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const bu={r:0,b:0,g:0},Xs=new Gi,w1=new pe;function R1(o,t,n,a,r,c,u){const h=new Qt(0);let p=c===!0?0:1,d,g,_=null,v=0,y=null;function b(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:t).get(L)),L}function T(D){let L=!1;const O=b(D);O===null?x(h,p):O&&O.isColor&&(x(O,1),L=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,L){const O=b(L);O&&(O.isCubeTexture||O.mapping===Gu)?(g===void 0&&(g=new Bn(new zl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:lo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Xs.copy(L.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Xs)),g.material.toneMapped=Te.getTransfer(O.colorSpace)!==He,(_!==O||v!==O.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=O,v=O.version,y=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Bn(new po(2,2),new ki({name:"BackgroundMaterial",uniforms:lo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Te.getTransfer(O.colorSpace)!==He,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,_=O,v=O.version,y=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function x(D,L){D.getRGB(bu,Jx(o)),a.buffers.color.setClear(bu.r,bu.g,bu.b,L,u)}function C(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,L=1){h.set(D),p=L,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(h,p)},render:T,addToRenderList:M,dispose:C}}function C1(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(N,G,et,st,dt){let ut=!1;const F=_(st,et,G);c!==F&&(c=F,d(c.object)),ut=y(N,st,et,dt),ut&&b(N,st,et,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||u)&&(u=!1,L(N,G,et,st),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function p(){return o.createVertexArray()}function d(N){return o.bindVertexArray(N)}function g(N){return o.deleteVertexArray(N)}function _(N,G,et){const st=et.wireframe===!0;let dt=a[N.id];dt===void 0&&(dt={},a[N.id]=dt);let ut=dt[G.id];ut===void 0&&(ut={},dt[G.id]=ut);let F=ut[st];return F===void 0&&(F=v(p()),ut[st]=F),F}function v(N){const G=[],et=[],st=[];for(let dt=0;dt<n;dt++)G[dt]=0,et[dt]=0,st[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:st,object:N,attributes:{},index:null}}function y(N,G,et,st){const dt=c.attributes,ut=G.attributes;let F=0;const H=et.getAttributes();for(const at in H)if(H[at].location>=0){const xt=dt[at];let I=ut[at];if(I===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(I=N.instanceColor)),xt===void 0||xt.attribute!==I||I&&xt.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==st}function b(N,G,et,st){const dt={},ut=G.attributes;let F=0;const H=et.getAttributes();for(const at in H)if(H[at].location>=0){let xt=ut[at];xt===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor));const I={};I.attribute=xt,xt&&xt.data&&(I.data=xt.data),dt[at]=I,F++}c.attributes=dt,c.attributesNum=F,c.index=st}function T(){const N=c.newAttributes;for(let G=0,et=N.length;G<et;G++)N[G]=0}function M(N){x(N,0)}function x(N,G){const et=c.newAttributes,st=c.enabledAttributes,dt=c.attributeDivisors;et[N]=1,st[N]===0&&(o.enableVertexAttribArray(N),st[N]=1),dt[N]!==G&&(o.vertexAttribDivisor(N,G),dt[N]=G)}function C(){const N=c.newAttributes,G=c.enabledAttributes;for(let et=0,st=G.length;et<st;et++)G[et]!==N[et]&&(o.disableVertexAttribArray(et),G[et]=0)}function D(N,G,et,st,dt,ut,F){F===!0?o.vertexAttribIPointer(N,G,et,dt,ut):o.vertexAttribPointer(N,G,et,st,dt,ut)}function L(N,G,et,st){T();const dt=st.attributes,ut=et.getAttributes(),F=G.defaultAttributeValues;for(const H in ut){const at=ut[H];if(at.location>=0){let St=dt[H];if(St===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),St!==void 0){const xt=St.normalized,I=St.itemSize,it=t.get(St);if(it===void 0)continue;const gt=it.buffer,Tt=it.type,Ft=it.bytesPerElement,nt=Tt===o.INT||Tt===o.UNSIGNED_INT||St.gpuType===Yp;if(St.isInterleavedBufferAttribute){const ct=St.data,Ct=ct.stride,Gt=St.offset;if(ct.isInstancedInterleavedBuffer){for(let zt=0;zt<at.locationSize;zt++)x(at.location+zt,ct.meshPerAttribute);N.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let zt=0;zt<at.locationSize;zt++)M(at.location+zt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let zt=0;zt<at.locationSize;zt++)D(at.location+zt,I/at.locationSize,Tt,xt,Ct*Ft,(Gt+I/at.locationSize*zt)*Ft,nt)}else{if(St.isInstancedBufferAttribute){for(let ct=0;ct<at.locationSize;ct++)x(at.location+ct,St.meshPerAttribute);N.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ct=0;ct<at.locationSize;ct++)M(at.location+ct);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ct=0;ct<at.locationSize;ct++)D(at.location+ct,I/at.locationSize,Tt,xt,I*Ft,I/at.locationSize*ct*Ft,nt)}}else if(F!==void 0){const xt=F[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(at.location,xt);break;case 3:o.vertexAttrib3fv(at.location,xt);break;case 4:o.vertexAttrib4fv(at.location,xt);break;default:o.vertexAttrib1fv(at.location,xt)}}}}C()}function O(){Y();for(const N in a){const G=a[N];for(const et in G){const st=G[et];for(const dt in st)g(st[dt].object),delete st[dt];delete G[et]}delete a[N]}}function B(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const et in G){const st=G[et];for(const dt in st)g(st[dt].object),delete st[dt];delete G[et]}delete a[N.id]}function P(N){for(const G in a){const et=a[G];if(et[N.id]===void 0)continue;const st=et[N.id];for(const dt in st)g(st[dt].object),delete st[dt];delete et[N.id]}}function Y(){A(),u=!0,c!==r&&(c=r,d(c.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:C}}function D1(o,t,n){let a;function r(d){a=d}function c(d,g){o.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,_){_!==0&&(o.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];n.update(y,a,1)}function p(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<d.length;b++)u(d[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*v[T];n.update(b,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function L1(o,t,n,a){let r;function c(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==ni&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const Y=P===Ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==di&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ri&&!Y)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(Zt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:L,maxSamples:O,samples:B}}function N1(o){const t=this;let n=null,a=0,r=!1,c=!1;const u=new xs,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!r||b===null||b.length===0||c&&!M)c?g(null):d();else{const C=c?0:a,D=C*4;let L=x.clippingState||null;p.value=L,L=g(b,v,D,y);for(let O=0;O!==D;++O)L[O]=n[O];x.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=p.value,b!==!0||M===null){const x=y+T*4,C=v.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,L=y;D!==T;++D,L+=4)u.copy(_[D]).applyMatrix4(C,h),u.normal.toArray(M,L),M[L+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function U1(o){let t=new WeakMap;function n(u,h){return h===Jd?u.mapping=Qs:h===$d&&(u.mapping=ao),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Jd||h===$d)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new ey(p.height);return d.fromEquirectangularTexture(o,u),t.set(u,d),u.addEventListener("dispose",r),n(d.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Ss=4,Jv=[.125,.215,.35,.446,.526,.582],js=20,O1=256,yl=new Vl,$v=new Qt;let Dd=null,Ld=0,Nd=0,Ud=!1;const P1=new X;class tx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=P1}=c;Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Ld,Nd),this._renderer.xr.enabled=Ud,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Qs||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ba,format:ni,colorSpace:qn,depthBuffer:!1},r=ex(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ex(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I1(c)),this._blurMaterial=F1(c,t,n),this._ggxMaterial=B1(c,t,n)}return r}_compileMaterial(t){const n=new Bn(new jn,t);this._renderer.compile(n,yl)}_sceneToCubeUV(t,n,a,r,c){const p=new Wn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor($v),_.toneMapping=ea,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new zl,new Zs({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,x=!0):(M.color.copy($v),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(p.up.set(0,d[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[D],c.y,c.z)):L===1?(p.up.set(0,0,d[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[D],c.z)):(p.up.set(0,d[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[D]));const O=this._cubeSize;Zr(r,L*O,D>2?O:0,O,O),_.setRenderTarget(r),x&&_.render(T,p),_.render(t,p)}_.toneMapping=y,_.autoClear=v,t.background=C}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Qs||t.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nx());const c=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Zr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,yl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let c=1;c<r;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:b}=this,T=this._sizeLods[a],M=3*T*(a>b-Ss?a-b+Ss:0),x=4*(this._cubeSize-T);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=b-n,Zr(c,M,x,3*T,2*T),r.setRenderTarget(c),r.render(h,yl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-a,Zr(t,M,x,3*T,2*T),r.setRenderTarget(t),r.render(h,yl)}_blur(t,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",c),this._halfBlur(u,t,a,a,r,"longitudinal",c)}_halfBlur(t,n,a,r,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*js-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):js;M>js&&Zt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const x=[];let C=0;for(let P=0;P<js;++P){const Y=P/T,A=Math.exp(-Y*Y/2);x.push(A),P===0?C+=A:P<M&&(C+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/C;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-a;const L=this._sizeLods[r],O=3*L*(r>D-Ss?r-D+Ss:0),B=4*(this._cubeSize-L);Zr(n,O,B,3*L,2*L),p.setRenderTarget(n),p.render(_,yl)}}function I1(o){const t=[],n=[],a=[];let r=o;const c=o-Ss+1+Jv.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);t.push(h);let p=1/h;u>o-Ss?p=Jv[u-o+Ss-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,T=3,M=2,x=1,C=new Float32Array(T*b*y),D=new Float32Array(M*b*y),L=new Float32Array(x*b*y);for(let B=0;B<y;B++){const P=B%3*2/3-1,Y=B>2?0:-1,A=[P,Y,0,P+2/3,Y,0,P+2/3,Y+1,0,P,Y,0,P+2/3,Y+1,0,P,Y+1,0];C.set(A,T*b*B),D.set(v,M*b*B);const N=[B,B,B,B,B,B];L.set(N,x*b*B)}const O=new jn;O.setAttribute("position",new Yn(C,T)),O.setAttribute("uv",new Yn(D,M)),O.setAttribute("faceIndex",new Yn(L,x)),a.push(new Bn(O,null)),r>Ss&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function ex(o,t,n){const a=new Vi(o,t,n);return a.texture.mapping=Gu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zr(o,t,n,a,r){o.viewport.set(t,n,a,r),o.scissor.set(t,n,a,r)}function B1(o,t,n){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function F1(o,t,n){const a=new Float32Array(js),r=new X(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function nx(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function ix(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}function z1(o){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===Jd||p===$d,g=p===Qs||p===ao;if(d||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new tx(o)),_=d?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new tx(o)),_=d?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function H1(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=o.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Pl("WebGLRenderer: "+a+" extension not supported."),r}}}function V1(o,t,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,b=_.attributes.position;let T=0;if(y!==null){const C=y.array;T=y.version;for(let D=0,L=C.length;D<L;D+=3){const O=C[D+0],B=C[D+1],P=C[D+2];v.push(O,B,B,P,P,O)}}else if(b!==void 0){const C=b.array;T=b.version;for(let D=0,L=C.length/3-1;D<L;D+=3){const O=D+0,B=D+1,P=D+2;v.push(O,B,B,P,P,O)}}else return;const M=new(Yx(v)?Qx:Zx)(v,1);M.version=T;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function G1(o,t,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function p(v,y){o.drawElements(a,y,c,v*u),n.update(y,a,1)}function d(v,y,b){b!==0&&(o.drawElementsInstanced(a,y,c,v*u,b),n.update(y,a,b))}function g(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,a,1)}function _(v,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,T,0,b);let x=0;for(let C=0;C<b;C++)x+=y[C]*T[C];n.update(x,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function k1(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:ae("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function X1(o,t,n){const a=new WeakMap,r=new Ze;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let N=function(){Y.dispose(),a.delete(h),h.removeEventListener("dispose",N)};var y=N;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),M===!0&&(L=3);let O=h.attributes.position.count*L,B=1;O>t.maxTextureSize&&(B=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*B*4*_),Y=new qx(P,O,B,_);Y.type=Ri,Y.needsUpdate=!0;const A=L*4;for(let G=0;G<_;G++){const et=x[G],st=C[G],dt=D[G],ut=O*B*4*G;for(let F=0;F<et.count;F++){const H=F*A;b===!0&&(r.fromBufferAttribute(et,F),P[ut+H+0]=r.x,P[ut+H+1]=r.y,P[ut+H+2]=r.z,P[ut+H+3]=0),T===!0&&(r.fromBufferAttribute(st,F),P[ut+H+4]=r.x,P[ut+H+5]=r.y,P[ut+H+6]=r.z,P[ut+H+7]=0),M===!0&&(r.fromBufferAttribute(dt,F),P[ut+H+8]=r.x,P[ut+H+9]=r.y,P[ut+H+10]=r.z,P[ut+H+11]=dt.itemSize===4?r.w:1)}}v={count:_,texture:Y,size:new $t(O,B)},a.set(h,v),h.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const T=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function W1(o,t,n,a){let r=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,_=t.get(p,g);if(r.get(_)!==d&&(t.update(_),r.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),r.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return _}function u(){r=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const Y1={[Lx]:"LINEAR_TONE_MAPPING",[Nx]:"REINHARD_TONE_MAPPING",[Ux]:"CINEON_TONE_MAPPING",[Ox]:"ACES_FILMIC_TONE_MAPPING",[Ix]:"AGX_TONE_MAPPING",[Bx]:"NEUTRAL_TONE_MAPPING",[Px]:"CUSTOM_TONE_MAPPING"};function q1(o,t,n,a,r){const c=new Vi(t,n,{type:o,depthBuffer:a,stencilBuffer:r}),u=new Vi(t,n,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),h=new jn;h.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new In([0,2,0,0,2,0],2));const p=new fE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Bn(h,p),g=new Vl(-1,1,1,-1,0,1);let _=null,v=null,y=!1,b,T=null,M=[],x=!1;this.setSize=function(C,D){c.setSize(C,D),u.setSize(C,D);for(let L=0;L<M.length;L++){const O=M[L];O.setSize&&O.setSize(C,D)}},this.setEffects=function(C){M=C,x=M.length>0&&M[0].isRenderPass===!0;const D=c.width,L=c.height;for(let O=0;O<M.length;O++){const B=M[O];B.setSize&&B.setSize(D,L)}},this.begin=function(C,D){if(y||C.toneMapping===ea&&M.length===0)return!1;if(T=D,D!==null){const L=D.width,O=D.height;(c.width!==L||c.height!==O)&&this.setSize(L,O)}return x===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=ea,!0},this.hasRenderPass=function(){return x},this.end=function(C,D){C.toneMapping=b,y=!0;let L=c,O=u;for(let B=0;B<M.length;B++){const P=M[B];if(P.enabled!==!1&&(P.render(C,O,L,D),P.needsSwap!==!1)){const Y=L;L=O,O=Y}}if(_!==C.outputColorSpace||v!==C.toneMapping){_=C.outputColorSpace,v=C.toneMapping,p.defines={},Te.getTransfer(_)===He&&(p.defines.SRGB_TRANSFER="");const B=Y1[v];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(T),C.render(d,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),p.dispose()}}const fy=new En,Fp=new co(1,1),dy=new qx,py=new Ib,my=new ty,ax=[],sx=[],rx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function vo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const r=t*n;let c=ax[r];if(c===void 0&&(c=new Float32Array(r),ax[r]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,o[u].toArray(c,h)}return c}function yn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Sn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Wu(o,t){let n=sx[t];n===void 0&&(n=new Int32Array(t),sx[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function j1(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function K1(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2fv(this.addr,t),Sn(n,t)}}function Z1(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;o.uniform3fv(this.addr,t),Sn(n,t)}}function Q1(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4fv(this.addr,t),Sn(n,t)}}function J1(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;lx.set(a),o.uniformMatrix2fv(this.addr,!1,lx),Sn(n,a)}}function $1(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;ox.set(a),o.uniformMatrix3fv(this.addr,!1,ox),Sn(n,a)}}function tw(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;rx.set(a),o.uniformMatrix4fv(this.addr,!1,rx),Sn(n,a)}}function ew(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function nw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2iv(this.addr,t),Sn(n,t)}}function iw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;o.uniform3iv(this.addr,t),Sn(n,t)}}function aw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4iv(this.addr,t),Sn(n,t)}}function sw(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function rw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2uiv(this.addr,t),Sn(n,t)}}function ow(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;o.uniform3uiv(this.addr,t),Sn(n,t)}}function lw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4uiv(this.addr,t),Sn(n,t)}}function cw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(Fp.compareFunction=n.isReversedDepthBuffer()?tm:$p,c=Fp):c=fy,n.setTexture2D(t||c,r)}function uw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||py,r)}function hw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||my,r)}function fw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||dy,r)}function dw(o){switch(o){case 5126:return j1;case 35664:return K1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return $1;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return aw;case 5125:return sw;case 36294:return rw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return fw}}function pw(o,t){o.uniform1fv(this.addr,t)}function mw(o,t){const n=vo(t,this.size,2);o.uniform2fv(this.addr,n)}function gw(o,t){const n=vo(t,this.size,3);o.uniform3fv(this.addr,n)}function _w(o,t){const n=vo(t,this.size,4);o.uniform4fv(this.addr,n)}function vw(o,t){const n=vo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function xw(o,t){const n=vo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function yw(o,t){const n=vo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Sw(o,t){o.uniform1iv(this.addr,t)}function Mw(o,t){o.uniform2iv(this.addr,t)}function bw(o,t){o.uniform3iv(this.addr,t)}function Ew(o,t){o.uniform4iv(this.addr,t)}function Tw(o,t){o.uniform1uiv(this.addr,t)}function Aw(o,t){o.uniform2uiv(this.addr,t)}function ww(o,t){o.uniform3uiv(this.addr,t)}function Rw(o,t){o.uniform4uiv(this.addr,t)}function Cw(o,t,n){const a=this.cache,r=t.length,c=Wu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Sn(a,c));let u;this.type===o.SAMPLER_2D_SHADOW?u=Fp:u=fy;for(let h=0;h!==r;++h)n.setTexture2D(t[h]||u,c[h])}function Dw(o,t,n){const a=this.cache,r=t.length,c=Wu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||py,c[u])}function Lw(o,t,n){const a=this.cache,r=t.length,c=Wu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||my,c[u])}function Nw(o,t,n){const a=this.cache,r=t.length,c=Wu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||dy,c[u])}function Uw(o){switch(o){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return _w;case 35674:return vw;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return bw;case 35669:case 35673:return Ew;case 5125:return Tw;case 36294:return Aw;case 36295:return ww;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Nw}}class Ow{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=dw(n.type)}}class Pw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Uw(n.type)}}class Iw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(t,n[h.id],a)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function cx(o,t){o.seq.push(t),o.map[t.id]=t}function Bw(o,t,n){const a=o.name,r=a.length;for(Od.lastIndex=0;;){const c=Od.exec(a),u=Od.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===r){cx(n,d===void 0?new Ow(h,o,t):new Pw(h,o,t));break}else{let _=n.map[h];_===void 0&&(_=new Iw(h),cx(n,_)),n=_}}}class Uu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(n,u),p=t.getUniformLocation(n,h.name);Bw(h,p,this)}const r=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(u):c.push(u);r.length>0&&(this.seq=r.concat(c))}setValue(t,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,c=t.length;r!==c;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function ux(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const Fw=37297;let zw=0;function Hw(o,t){const n=o.split(`
`),a=[],r=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const hx=new fe;function Vw(o){Te._getMatrix(hx,Te.workingColorSpace,o);const t=`mat3( ${hx.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(o)){case Iu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function fx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+Hw(o.getShaderSource(t),h)}else return c}function Gw(o,t){const n=Vw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const kw={[Lx]:"Linear",[Nx]:"Reinhard",[Ux]:"Cineon",[Ox]:"ACESFilmic",[Ix]:"AgX",[Bx]:"Neutral",[Px]:"Custom"};function Xw(o,t){const n=kw[t];return n===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eu=new X;function Ww(){Te.getLuminanceCoefficients(Eu);const o=Eu.x.toFixed(4),t=Eu.y.toFixed(4),n=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function qw(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function jw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(t,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(t,u),locationSize:h}}return n}function Tl(o){return o!==""}function dx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function px(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(o){return o.replace(Kw,Qw)}const Zw=new Map;function Qw(o,t){let n=de[t];if(n===void 0){const a=Zw.get(t);if(a!==void 0)n=de[a],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return zp(n)}const Jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(o){return o.replace(Jw,$w)}function $w(o,t,n,a){let r="";for(let c=parseInt(t);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function gx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const tR={[wu]:"SHADOWMAP_TYPE_PCF",[bl]:"SHADOWMAP_TYPE_VSM"};function eR(o){return tR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nR={[Qs]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function iR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":nR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const aR={[ao]:"ENVMAP_MODE_REFRACTION"};function sR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":aR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rR={[Wp]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[tb]:"ENVMAP_BLENDING_ADD"};function oR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":rR[o.combine]||"ENVMAP_BLENDING_NONE"}function lR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function cR(o,t,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=eR(n),d=iR(n),g=sR(n),_=oR(n),v=lR(n),y=Yw(n),b=qw(c),T=r.createProgram();let M,x,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Tl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Tl).join(`
`),x.length>0&&(x+=`
`)):(M=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),x=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ea?"#define TONE_MAPPING":"",n.toneMapping!==ea?de.tonemapping_pars_fragment:"",n.toneMapping!==ea?Xw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Gw("linearToOutputTexel",n.outputColorSpace),Ww(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Tl).join(`
`)),u=zp(u),u=dx(u,n),u=px(u,n),h=zp(h),h=dx(h,n),h=px(h,n),u=mx(u),h=mx(h),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=C+M+u,L=C+x+h,O=ux(r,r.VERTEX_SHADER,D),B=ux(r,r.FRAGMENT_SHADER,L);r.attachShader(T,O),r.attachShader(T,B),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function P(G){if(o.debug.checkShaderErrors){const et=r.getProgramInfoLog(T)||"",st=r.getShaderInfoLog(O)||"",dt=r.getShaderInfoLog(B)||"",ut=et.trim(),F=st.trim(),H=dt.trim();let at=!0,St=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,O,B);else{const xt=fx(r,O,"vertex"),I=fx(r,B,"fragment");ae("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ut+`
`+xt+`
`+I)}else ut!==""?Zt("WebGLProgram: Program Info Log:",ut):(F===""||H==="")&&(St=!1);St&&(G.diagnostics={runnable:at,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:x}})}r.deleteShader(O),r.deleteShader(B),Y=new Uu(r,T),A=jw(r,T)}let Y;this.getUniforms=function(){return Y===void 0&&P(this),Y};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(T,Fw)),N},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=B,this}let uR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new fR(t),n.set(t,a)),a}}class fR{constructor(t){this.id=uR++,this.code=t,this.usedTimes=0}}function dR(o,t,n,a,r,c,u){const h=new jx,p=new hR,d=new Set,g=[],_=new Map,v=r.logarithmicDepthBuffer;let y=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return d.add(A),A===0?"uv":`uv${A}`}function M(A,N,G,et,st){const dt=et.fog,ut=st.geometry,F=A.isMeshStandardMaterial?et.environment:null,H=(A.isMeshStandardMaterial?n:t).get(A.envMap||F),at=H&&H.mapping===Gu?H.image.height:null,St=b[A.type];A.precision!==null&&(y=r.getMaxPrecision(A.precision),y!==A.precision&&Zt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,I=xt!==void 0?xt.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let gt,Tt,Ft,nt;if(St){const we=Ji[St];gt=we.vertexShader,Tt=we.fragmentShader}else gt=A.vertexShader,Tt=A.fragmentShader,p.update(A),Ft=p.getVertexShaderID(A),nt=p.getFragmentShaderID(A);const ct=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Gt=st.isInstancedMesh===!0,zt=st.isBatchedMesh===!0,ge=!!A.map,an=!!A.matcap,Se=!!H,_e=!!A.aoMap,De=!!A.lightMap,le=!!A.bumpMap,sn=!!A.normalMap,V=!!A.displacementMap,$e=!!A.emissiveMap,Ae=!!A.metalnessMap,Oe=!!A.roughnessMap,Yt=A.anisotropy>0,U=A.clearcoat>0,E=A.dispersion>0,q=A.iridescence>0,ft=A.sheen>0,vt=A.transmission>0,lt=Yt&&!!A.anisotropyMap,jt=U&&!!A.clearcoatMap,wt=U&&!!A.clearcoatNormalMap,kt=U&&!!A.clearcoatRoughnessMap,ie=q&&!!A.iridescenceMap,Mt=q&&!!A.iridescenceThicknessMap,bt=ft&&!!A.sheenColorMap,It=ft&&!!A.sheenRoughnessMap,Ot=!!A.specularMap,Rt=!!A.specularColorMap,ue=!!A.specularIntensityMap,W=vt&&!!A.transmissionMap,Lt=vt&&!!A.thicknessMap,Et=!!A.gradientMap,Pt=!!A.alphaMap,yt=A.alphaTest>0,_t=!!A.alphaHash,At=!!A.extensions;let se=ea;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(se=o.toneMapping);const Ie={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:Tt,defines:A.defines,customVertexShaderID:Ft,customFragmentShaderID:nt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:zt,batchingColor:zt&&st._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&st.instanceColor!==null,instancingMorph:Gt&&st.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:qn,alphaToCoverage:!!A.alphaToCoverage,map:ge,matcap:an,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:at,aoMap:_e,lightMap:De,bumpMap:le,normalMap:sn,displacementMap:V,emissiveMap:$e,normalMapObjectSpace:sn&&A.normalMapType===sb,normalMapTangentSpace:sn&&A.normalMapType===Bl,metalnessMap:Ae,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:lt,clearcoat:U,clearcoatMap:jt,clearcoatNormalMap:wt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:q,iridescenceMap:ie,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:bt,sheenRoughnessMap:It,specularMap:Ot,specularColorMap:Rt,specularIntensityMap:ue,transmission:vt,transmissionMap:W,thicknessMap:Lt,gradientMap:Et,opaque:A.transparent===!1&&A.blending===to&&A.alphaToCoverage===!1,alphaMap:Pt,alphaTest:yt,alphaHash:_t,combine:A.combine,mapUv:ge&&T(A.map.channel),aoMapUv:_e&&T(A.aoMap.channel),lightMapUv:De&&T(A.lightMap.channel),bumpMapUv:le&&T(A.bumpMap.channel),normalMapUv:sn&&T(A.normalMap.channel),displacementMapUv:V&&T(A.displacementMap.channel),emissiveMapUv:$e&&T(A.emissiveMap.channel),metalnessMapUv:Ae&&T(A.metalnessMap.channel),roughnessMapUv:Oe&&T(A.roughnessMap.channel),anisotropyMapUv:lt&&T(A.anisotropyMap.channel),clearcoatMapUv:jt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(A.sheenRoughnessMap.channel),specularMapUv:Ot&&T(A.specularMap.channel),specularColorMapUv:Rt&&T(A.specularColorMap.channel),specularIntensityMapUv:ue&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Lt&&T(A.thicknessMap.channel),alphaMapUv:Pt&&T(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(sn||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(ge||Pt),fog:!!dt,useFog:A.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:it,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:ge&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:$e&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wi,flipSided:A.side===ii,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:At&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&A.extensions.multiDraw===!0||zt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ie.vertexUv1s=d.has(1),Ie.vertexUv2s=d.has(2),Ie.vertexUv3s=d.has(3),d.clear(),Ie}function x(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)N.push(G),N.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(C(N,A),D(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function C(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function D(A,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const N=b[A.type];let G;if(N){const et=Ji[N];G=Kb.clone(et.uniforms)}else G=A.uniforms;return G}function O(A,N){let G=_.get(N);return G!==void 0?++G.usedTimes:(G=new cR(o,N,A,c),g.push(G),_.set(N,G)),G}function B(A){if(--A.usedTimes===0){const N=g.indexOf(A);g[N]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function P(A){p.remove(A)}function Y(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:O,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:Y}}function pR(){let o=new WeakMap;function t(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,p){o.get(u)[h]=p}function c(){o=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:c}}function mR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function _x(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function vx(){const o=[];let t=0;const n=[],a=[],r=[];function c(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,b,T,M){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},o[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=T,x.group=M),t++,x}function h(_,v,y,b,T,M){const x=u(_,v,y,b,T,M);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,b,T,M){const x=u(_,v,y,b,T,M);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function d(_,v){n.length>1&&n.sort(_||mR),a.length>1&&a.sort(v||_x),r.length>1&&r.sort(v||_x)}function g(){for(let _=t,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:p,finish:g,sort:d}}function gR(){let o=new WeakMap;function t(a,r){const c=o.get(a);let u;return c===void 0?(u=new vx,o.set(a,[u])):r>=c.length?(u=new vx,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:t,dispose:n}}function _R(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new Qt};break;case"SpotLight":n={position:new X,direction:new X,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new X,halfWidth:new X,halfHeight:new X};break}return o[t.id]=n,n}}}function vR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let xR=0;function yR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function SR(o){const t=new _R,n=vR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new X);const r=new X,c=new pe,u=new pe;function h(d){let g=0,_=0,v=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,C=0,D=0,L=0,O=0,B=0,P=0;d.sort(yR);for(let A=0,N=d.length;A<N;A++){const G=d[A],et=G.color,st=G.intensity,dt=G.distance;let ut=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ro?ut=G.shadow.map.texture:ut=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=et.r*st,_+=et.g*st,v+=et.b*st;else if(G.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(G.sh.coefficients[F],st);P++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,at=n.get(G);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,a.directionalShadow[y]=at,a.directionalShadowMap[y]=ut,a.directionalShadowMatrix[y]=G.shadow.matrix,C++}a.directional[y]=F,y++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(et).multiplyScalar(st),F.distance=dt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,a.spot[T]=F;const H=G.shadow;if(G.map&&(a.spotLightMap[O]=G.map,O++,H.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[T]=H.matrix,G.castShadow){const at=n.get(G);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,a.spotShadow[T]=at,a.spotShadowMap[T]=ut,L++}T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(et).multiplyScalar(st),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=F,M++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,at=n.get(G);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,a.pointShadow[b]=at,a.pointShadowMap[b]=ut,a.pointShadowMatrix[b]=G.shadow.matrix,D++}a.point[b]=F,b++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(st),F.groundColor.copy(G.groundColor).multiplyScalar(st),a.hemi[x]=F,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ut.LTC_FLOAT_1,a.rectAreaLTC2=Ut.LTC_FLOAT_2):(a.rectAreaLTC1=Ut.LTC_HALF_1,a.rectAreaLTC2=Ut.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const Y=a.hash;(Y.directionalLength!==y||Y.pointLength!==b||Y.spotLength!==T||Y.rectAreaLength!==M||Y.hemiLength!==x||Y.numDirectionalShadows!==C||Y.numPointShadows!==D||Y.numSpotShadows!==L||Y.numSpotMaps!==O||Y.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=M,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=L+O-B,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=P,Y.directionalLength=y,Y.pointLength=b,Y.spotLength=T,Y.rectAreaLength=M,Y.hemiLength=x,Y.numDirectionalShadows=C,Y.numPointShadows=D,Y.numSpotShadows=L,Y.numSpotMaps=O,Y.numLightProbes=P,a.version=xR++)}function p(d,g){let _=0,v=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let x=0,C=d.length;x<C;x++){const D=d[x];if(D.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(M),_++}else if(D.isSpotLight){const L=a.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const L=a.hemi[T];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function xx(o){const t=new SR(o),n=[],a=[];function r(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function MR(o){let t=new WeakMap;function n(r,c=0){const u=t.get(r);let h;return u===void 0?(h=new xx(o),t.set(r,[h])):c>=u.length?(h=new xx(o),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const bR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
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
}`,TR=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],AR=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],yx=new pe,Sl=new X,Pd=new X;function wR(o,t,n){let a=new rm;const r=new $t,c=new $t,u=new Ze,h=new mE,p=new gE,d={},g=n.maxTextureSize,_={[Ia]:ii,[ii]:Ia,[wi]:wi},v=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:bR,fragmentShader:ER}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new jn;b.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Bn(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let x=this.type;this.render=function(B,P,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===Dx&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=wu);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),et=o.state;et.setBlending(Oa),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const st=x!==this.type;st&&P.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=B.length;dt<ut;dt++){const F=B[dt],H=F.shadow;if(H===void 0){Zt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const at=H.getFrameExtents();if(r.multiply(at),c.copy(H.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/at.x),r.x=c.x*at.x,H.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/at.y),r.y=c.y*at.y,H.mapSize.y=c.y)),H.map===null||st===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===bl){if(F.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(r.x,r.y,{format:ro,type:Ba,minFilter:xn,magFilter:xn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new co(r.x,r.y,Ri),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Fa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke}else{F.isPointLight?(H.map=new ey(r.x),H.map.depthTexture=new hE(r.x,ia)):(H.map=new Vi(r.x,r.y),H.map.depthTexture=new co(r.x,r.y,ia)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Fa;const xt=o.state.buffers.depth.getReversed();this.type===wu?(H.map.depthTexture.compareFunction=xt?tm:$p,H.map.depthTexture.minFilter=xn,H.map.depthTexture.magFilter=xn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke)}H.camera.updateProjectionMatrix()}const St=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<St;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const I=H.getViewport(xt);u.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),et.viewport(u)}if(F.isPointLight){const I=H.camera,it=H.matrix,gt=F.distance||I.far;gt!==I.far&&(I.far=gt,I.updateProjectionMatrix()),Sl.setFromMatrixPosition(F.matrixWorld),I.position.copy(Sl),Pd.copy(I.position),Pd.add(TR[xt]),I.up.copy(AR[xt]),I.lookAt(Pd),I.updateMatrixWorld(),it.makeTranslation(-Sl.x,-Sl.y,-Sl.z),yx.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yx,I.coordinateSystem,I.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),L(P,Y,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===bl&&C(H,Y),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(A,N,G)};function C(B,P){const Y=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(r.x,r.y,{format:ro,type:Ba})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,Y,v,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,Y,y,T,null)}function D(B,P,Y,A){let N=null;const G=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)N=G;else if(N=Y.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const et=N.uuid,st=P.uuid;let dt=d[et];dt===void 0&&(dt={},d[et]=dt);let ut=dt[st];ut===void 0&&(ut=N.clone(),dt[st]=ut,P.addEventListener("dispose",O)),N=ut}if(N.visible=P.visible,N.wireframe=P.wireframe,A===bl?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:_[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,Y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const et=o.properties.get(N);et.light=Y}return N}function L(B,P,Y,A,N){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&N===bl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const st=t.update(B),dt=B.material;if(Array.isArray(dt)){const ut=st.groups;for(let F=0,H=ut.length;F<H;F++){const at=ut[F],St=dt[at.materialIndex];if(St&&St.visible){const xt=D(B,St,A,N);B.onBeforeShadow(o,B,P,Y,st,xt,at),o.renderBufferDirect(Y,null,st,xt,B,at),B.onAfterShadow(o,B,P,Y,st,xt,at)}}}else if(dt.visible){const ut=D(B,dt,A,N);B.onBeforeShadow(o,B,P,Y,st,ut,null),o.renderBufferDirect(Y,null,st,ut,B,null),B.onAfterShadow(o,B,P,Y,st,ut,null)}}const et=B.children;for(let st=0,dt=et.length;st<dt;st++)L(et[st],P,Y,A,N)}function O(B){B.target.removeEventListener("dispose",O);for(const Y in d){const A=d[Y],N=B.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const RR={[Wd]:Yd,[qd]:Zd,[jd]:Qd,[io]:Kd,[Yd]:Wd,[Zd]:qd,[Qd]:jd,[Kd]:io};function CR(o,t){function n(){let W=!1;const Lt=new Ze;let Et=null;const Pt=new Ze(0,0,0,0);return{setMask:function(yt){Et!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),Et=yt)},setLocked:function(yt){W=yt},setClear:function(yt,_t,At,se,Ie){Ie===!0&&(yt*=se,_t*=se,At*=se),Lt.set(yt,_t,At,se),Pt.equals(Lt)===!1&&(o.clearColor(yt,_t,At,se),Pt.copy(Lt))},reset:function(){W=!1,Et=null,Pt.set(-1,0,0,0)}}}function a(){let W=!1,Lt=!1,Et=null,Pt=null,yt=null;return{setReversed:function(_t){if(Lt!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Lt=_t;const se=yt;yt=null,this.setClear(se)}},getReversed:function(){return Lt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){Et!==_t&&!W&&(o.depthMask(_t),Et=_t)},setFunc:function(_t){if(Lt&&(_t=RR[_t]),Pt!==_t){switch(_t){case Wd:o.depthFunc(o.NEVER);break;case Yd:o.depthFunc(o.ALWAYS);break;case qd:o.depthFunc(o.LESS);break;case io:o.depthFunc(o.LEQUAL);break;case jd:o.depthFunc(o.EQUAL);break;case Kd:o.depthFunc(o.GEQUAL);break;case Zd:o.depthFunc(o.GREATER);break;case Qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){yt!==_t&&(Lt&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){W=!1,Et=null,Pt=null,yt=null,Lt=!1}}}function r(){let W=!1,Lt=null,Et=null,Pt=null,yt=null,_t=null,At=null,se=null,Ie=null;return{setTest:function(we){W||(we?ct(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(we){Lt!==we&&!W&&(o.stencilMask(we),Lt=we)},setFunc:function(we,Fn,Ci){(Et!==we||Pt!==Fn||yt!==Ci)&&(o.stencilFunc(we,Fn,Ci),Et=we,Pt=Fn,yt=Ci)},setOp:function(we,Fn,Ci){(_t!==we||At!==Fn||se!==Ci)&&(o.stencilOp(we,Fn,Ci),_t=we,At=Fn,se=Ci)},setLocked:function(we){W=we},setClear:function(we){Ie!==we&&(o.clearStencil(we),Ie=we)},reset:function(){W=!1,Lt=null,Et=null,Pt=null,yt=null,_t=null,At=null,se=null,Ie=null}}}const c=new n,u=new a,h=new r,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,C=null,D=null,L=null,O=null,B=null,P=new Qt(0,0,0),Y=0,A=!1,N=null,G=null,et=null,st=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),F=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),F=H>=2);let St=null,xt={};const I=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),gt=new Ze().fromArray(I),Tt=new Ze().fromArray(it);function Ft(W,Lt,Et,Pt){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(W,_t),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Et;At++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Lt+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const nt={};nt[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ct(o.DEPTH_TEST),u.setFunc(io),le(!1),sn(sv),ct(o.CULL_FACE),_e(Oa);function ct(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Gt(W,Lt){return _[W]!==Lt?(o.bindFramebuffer(W,Lt),_[W]=Lt,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Lt),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function zt(W,Lt){let Et=y,Pt=!1;if(W){Et=v.get(Lt),Et===void 0&&(Et=[],v.set(Lt,Et));const yt=W.textures;if(Et.length!==yt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=yt.length;_t<At;_t++)Et[_t]=o.COLOR_ATTACHMENT0+_t;Et.length=yt.length,Pt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Et)}function ge(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const an={[qs]:o.FUNC_ADD,[IM]:o.FUNC_SUBTRACT,[BM]:o.FUNC_REVERSE_SUBTRACT};an[FM]=o.MIN,an[zM]=o.MAX;const Se={[HM]:o.ZERO,[VM]:o.ONE,[GM]:o.SRC_COLOR,[kd]:o.SRC_ALPHA,[jM]:o.SRC_ALPHA_SATURATE,[YM]:o.DST_COLOR,[XM]:o.DST_ALPHA,[kM]:o.ONE_MINUS_SRC_COLOR,[Xd]:o.ONE_MINUS_SRC_ALPHA,[qM]:o.ONE_MINUS_DST_COLOR,[WM]:o.ONE_MINUS_DST_ALPHA,[KM]:o.CONSTANT_COLOR,[ZM]:o.ONE_MINUS_CONSTANT_COLOR,[QM]:o.CONSTANT_ALPHA,[JM]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(W,Lt,Et,Pt,yt,_t,At,se,Ie,we){if(W===Oa){T===!0&&(Ct(o.BLEND),T=!1);return}if(T===!1&&(ct(o.BLEND),T=!0),W!==PM){if(W!==M||we!==A){if((x!==qs||L!==qs)&&(o.blendEquation(o.FUNC_ADD),x=qs,L=qs),we)switch(W){case to:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gd:o.blendFunc(o.ONE,o.ONE);break;case rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ov:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ae("WebGLState: Invalid blending: ",W);break}else switch(W){case to:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case rv:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",W);break}C=null,D=null,O=null,B=null,P.set(0,0,0),Y=0,M=W,A=we}return}yt=yt||Lt,_t=_t||Et,At=At||Pt,(Lt!==x||yt!==L)&&(o.blendEquationSeparate(an[Lt],an[yt]),x=Lt,L=yt),(Et!==C||Pt!==D||_t!==O||At!==B)&&(o.blendFuncSeparate(Se[Et],Se[Pt],Se[_t],Se[At]),C=Et,D=Pt,O=_t,B=At),(se.equals(P)===!1||Ie!==Y)&&(o.blendColor(se.r,se.g,se.b,Ie),P.copy(se),Y=Ie),M=W,A=!1}function De(W,Lt){W.side===wi?Ct(o.CULL_FACE):ct(o.CULL_FACE);let Et=W.side===ii;Lt&&(Et=!Et),le(Et),W.blending===to&&W.transparent===!1?_e(Oa):_e(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;h.setTest(Pt),Pt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),$e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){N!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),N=W)}function sn(W){W!==UM?(ct(o.CULL_FACE),W!==G&&(W===sv?o.cullFace(o.BACK):W===OM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=W}function V(W){W!==et&&(F&&o.lineWidth(W),et=W)}function $e(W,Lt,Et){W?(ct(o.POLYGON_OFFSET_FILL),(st!==Lt||dt!==Et)&&(o.polygonOffset(Lt,Et),st=Lt,dt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Ae(W){W?ct(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=o.TEXTURE0+ut-1),St!==W&&(o.activeTexture(W),St=W)}function Yt(W,Lt,Et){Et===void 0&&(St===null?Et=o.TEXTURE0+ut-1:Et=St);let Pt=xt[Et];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Et]=Pt),(Pt.type!==W||Pt.texture!==Lt)&&(St!==Et&&(o.activeTexture(Et),St=Et),o.bindTexture(W,Lt||nt[W]),Pt.type=W,Pt.texture=Lt)}function U(){const W=xt[St];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function ft(){try{o.texSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function vt(){try{o.texSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function wt(){try{o.texStorage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function kt(){try{o.texStorage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function ie(){try{o.texImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function bt(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function It(W){Tt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Tt.copy(W))}function Ot(W,Lt){let Et=d.get(Lt);Et===void 0&&(Et=new WeakMap,d.set(Lt,Et));let Pt=Et.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Lt,W.name),Et.set(W,Pt))}function Rt(W,Lt){const Pt=d.get(Lt).get(W);p.get(Lt)!==Pt&&(o.uniformBlockBinding(Lt,Pt,W.__bindingPointIndex),p.set(Lt,Pt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,xt={},_={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,C=null,D=null,L=null,O=null,B=null,P=new Qt(0,0,0),Y=0,A=!1,N=null,G=null,et=null,st=null,dt=null,gt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ct,disable:Ct,bindFramebuffer:Gt,drawBuffers:zt,useProgram:ge,setBlending:_e,setMaterial:De,setFlipSided:le,setCullFace:sn,setLineWidth:V,setPolygonOffset:$e,setScissorTest:Ae,activeTexture:Oe,bindTexture:Yt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ie,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Rt,texStorage2D:wt,texStorage3D:kt,texSubImage2D:ft,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:bt,viewport:It,reset:ue}}function DR(o,t,n,a,r,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $t,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):Ol("canvas")}function T(U,E,q){let ft=1;const vt=Yt(U);if((vt.width>q||vt.height>q)&&(ft=q/Math.max(vt.width,vt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(ft*vt.width),jt=Math.floor(ft*vt.height);_===void 0&&(_=b(lt,jt));const wt=E?b(lt,jt):_;return wt.width=lt,wt.height=jt,wt.getContext("2d").drawImage(U,0,0,lt,jt),Zt("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+jt+")."),wt}else return"data"in U&&Zt("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(U,E,q,ft,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=E;if(E===o.RED&&(q===o.FLOAT&&(lt=o.R32F),q===o.HALF_FLOAT&&(lt=o.R16F),q===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.R8UI),q===o.UNSIGNED_SHORT&&(lt=o.R16UI),q===o.UNSIGNED_INT&&(lt=o.R32UI),q===o.BYTE&&(lt=o.R8I),q===o.SHORT&&(lt=o.R16I),q===o.INT&&(lt=o.R32I)),E===o.RG&&(q===o.FLOAT&&(lt=o.RG32F),q===o.HALF_FLOAT&&(lt=o.RG16F),q===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.RG8UI),q===o.UNSIGNED_SHORT&&(lt=o.RG16UI),q===o.UNSIGNED_INT&&(lt=o.RG32UI),q===o.BYTE&&(lt=o.RG8I),q===o.SHORT&&(lt=o.RG16I),q===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),q===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),q===o.UNSIGNED_INT&&(lt=o.RGB32UI),q===o.BYTE&&(lt=o.RGB8I),q===o.SHORT&&(lt=o.RGB16I),q===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),q===o.UNSIGNED_INT&&(lt=o.RGBA32UI),q===o.BYTE&&(lt=o.RGBA8I),q===o.SHORT&&(lt=o.RGBA16I),q===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const jt=vt?Iu:Te.getTransfer(ft);q===o.FLOAT&&(lt=o.RGBA32F),q===o.HALF_FLOAT&&(lt=o.RGBA16F),q===o.UNSIGNED_BYTE&&(lt=jt===He?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function L(U,E){let q;return U?E===null||E===ia||E===Ll?q=o.DEPTH24_STENCIL8:E===Ri?q=o.DEPTH32F_STENCIL8:E===Dl&&(q=o.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ia||E===Ll?q=o.DEPTH_COMPONENT24:E===Ri?q=o.DEPTH_COMPONENT32F:E===Dl&&(q=o.DEPTH_COMPONENT16),q}function O(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ke&&U.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),Y(E),E.isVideoTexture&&g.delete(E)}function P(U){const E=U.target;E.removeEventListener("dispose",P),N(E)}function Y(U){const E=a.get(U);if(E.__webglInit===void 0)return;const q=U.source,ft=v.get(q);if(ft){const vt=ft[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(U),Object.keys(ft).length===0&&v.delete(q)}a.remove(U)}function A(U){const E=a.get(U);o.deleteTexture(E.__webglTexture);const q=U.source,ft=v.get(q);delete ft[E.__cacheKey],u.memory.textures--}function N(U){const E=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let vt=0;vt<E.__webglFramebuffer[ft].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=U.textures;for(let ft=0,vt=q.length;ft<vt;ft++){const lt=a.get(q[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),u.memory.textures--),a.remove(q[ft])}a.remove(U)}let G=0;function et(){G=0}function st(){const U=G;return U>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),G+=1,U}function dt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ut(U,E){const q=a.get(U);if(U.isVideoTexture&&Ae(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const ft=U.image;if(ft===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,U,E);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function F(U,E){const q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){nt(q,U,E);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function H(U,E){const q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){nt(q,U,E);return}n.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function at(U,E){const q=a.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){ct(q,U,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const St={[so]:o.REPEAT,[$i]:o.CLAMP_TO_EDGE,[Ou]:o.MIRRORED_REPEAT},xt={[ke]:o.NEAREST,[zx]:o.NEAREST_MIPMAP_NEAREST,[El]:o.NEAREST_MIPMAP_LINEAR,[xn]:o.LINEAR,[Ru]:o.LINEAR_MIPMAP_NEAREST,[La]:o.LINEAR_MIPMAP_LINEAR},I={[rb]:o.NEVER,[hb]:o.ALWAYS,[ob]:o.LESS,[$p]:o.LEQUAL,[lb]:o.EQUAL,[tm]:o.GEQUAL,[cb]:o.GREATER,[ub]:o.NOTEQUAL};function it(U,E){if(E.type===Ri&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===Ru||E.magFilter===El||E.magFilter===La||E.minFilter===xn||E.minFilter===Ru||E.minFilter===El||E.minFilter===La)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ke||E.minFilter!==El&&E.minFilter!==La||E.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function gt(U,E){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const ft=E.source;let vt=v.get(ft);vt===void 0&&(vt={},v.set(ft,vt));const lt=dt(E);if(lt!==U.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,q=!0),vt[lt].usedTimes++;const jt=vt[U.__cacheKey];jt!==void 0&&(vt[U.__cacheKey].usedTimes--,jt.usedTimes===0&&A(E)),U.__cacheKey=lt,U.__webglTexture=vt[lt].texture}return q}function Tt(U,E,q){return Math.floor(Math.floor(U/q)/E)}function Ft(U,E,q,ft){const lt=U.updateRanges;if(lt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,ft,E.data);else{lt.sort((Mt,bt)=>Mt.start-bt.start);let jt=0;for(let Mt=1;Mt<lt.length;Mt++){const bt=lt[jt],It=lt[Mt],Ot=bt.start+bt.count,Rt=Tt(It.start,E.width,4),ue=Tt(bt.start,E.width,4);It.start<=Ot+1&&Rt===ue&&Tt(It.start+It.count-1,E.width,4)===Rt?bt.count=Math.max(bt.count,It.start+It.count-bt.start):(++jt,lt[jt]=It)}lt.length=jt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,bt=lt.length;Mt<bt;Mt++){const It=lt[Mt],Ot=Math.floor(It.start/4),Rt=Math.ceil(It.count/4),ue=Ot%E.width,W=Math.floor(Ot/E.width),Lt=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),n.texSubImage2D(o.TEXTURE_2D,0,ue,W,Lt,Et,q,ft,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ie)}}function nt(U,E,q){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const vt=gt(U,E),lt=E.source;n.bindTexture(ft,U.__webglTexture,o.TEXTURE0+q);const jt=a.get(lt);if(lt.version!==jt.__version||vt===!0){n.activeTexture(o.TEXTURE0+q);const wt=Te.getPrimaries(Te.workingColorSpace),kt=E.colorSpace===ys?null:Te.getPrimaries(E.colorSpace),ie=E.colorSpace===ys||wt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Mt=T(E.image,!1,r.maxTextureSize);Mt=Oe(E,Mt);const bt=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let Ot=D(E.internalFormat,bt,It,E.colorSpace,E.isVideoTexture);it(ft,E);let Rt;const ue=E.mipmaps,W=E.isVideoTexture!==!0,Lt=jt.__version===void 0||vt===!0,Et=lt.dataReady,Pt=O(E,Mt);if(E.isDepthTexture)Ot=L(E.format===Ks,E.type),Lt&&(W?n.texStorage2D(o.TEXTURE_2D,1,Ot,Mt.width,Mt.height):n.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,bt,It,null));else if(E.isDataTexture)if(ue.length>0){W&&Lt&&n.texStorage2D(o.TEXTURE_2D,Pt,Ot,ue[0].width,ue[0].height);for(let yt=0,_t=ue.length;yt<_t;yt++)Rt=ue[yt],W?Et&&n.texSubImage2D(o.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,bt,It,Rt.data):n.texImage2D(o.TEXTURE_2D,yt,Ot,Rt.width,Rt.height,0,bt,It,Rt.data);E.generateMipmaps=!1}else W?(Lt&&n.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),Et&&Ft(E,Mt,bt,It)):n.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,bt,It,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,ue[0].width,ue[0].height,Mt.depth);for(let yt=0,_t=ue.length;yt<_t;yt++)if(Rt=ue[yt],E.format!==ni)if(bt!==null)if(W){if(Et)if(E.layerUpdates.size>0){const At=Qv(Rt.width,Rt.height,E.format,E.type);for(const se of E.layerUpdates){const Ie=Rt.data.subarray(se*At/Rt.data.BYTES_PER_ELEMENT,(se+1)*At/Rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,se,Rt.width,Rt.height,1,bt,Ie)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,Mt.depth,bt,Rt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Ot,Rt.width,Rt.height,Mt.depth,0,Rt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Et&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,Mt.depth,bt,It,Rt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,yt,Ot,Rt.width,Rt.height,Mt.depth,0,bt,It,Rt.data)}else{W&&Lt&&n.texStorage2D(o.TEXTURE_2D,Pt,Ot,ue[0].width,ue[0].height);for(let yt=0,_t=ue.length;yt<_t;yt++)Rt=ue[yt],E.format!==ni?bt!==null?W?Et&&n.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,bt,Rt.data):n.compressedTexImage2D(o.TEXTURE_2D,yt,Ot,Rt.width,Rt.height,0,Rt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Et&&n.texSubImage2D(o.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,bt,It,Rt.data):n.texImage2D(o.TEXTURE_2D,yt,Ot,Rt.width,Rt.height,0,bt,It,Rt.data)}else if(E.isDataArrayTexture)if(W){if(Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),Et)if(E.layerUpdates.size>0){const yt=Qv(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*yt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*yt/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,bt,It,At)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,It,Mt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,bt,It,Mt.data);else if(E.isData3DTexture)W?(Lt&&n.texStorage3D(o.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),Et&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,It,Mt.data)):n.texImage3D(o.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,bt,It,Mt.data);else if(E.isFramebufferTexture){if(Lt)if(W)n.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let yt=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)n.texImage2D(o.TEXTURE_2D,At,Ot,yt,_t,0,bt,It,null),yt>>=1,_t>>=1}}else if(ue.length>0){if(W&&Lt){const yt=Yt(ue[0]);n.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height)}for(let yt=0,_t=ue.length;yt<_t;yt++)Rt=ue[yt],W?Et&&n.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,It,Rt):n.texImage2D(o.TEXTURE_2D,yt,Ot,bt,It,Rt);E.generateMipmaps=!1}else if(W){if(Lt){const yt=Yt(Mt);n.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height)}Et&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,It,Mt)}else n.texImage2D(o.TEXTURE_2D,0,Ot,bt,It,Mt);M(E)&&x(ft),jt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ct(U,E,q){if(E.image.length!==6)return;const ft=gt(U,E),vt=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+q);const lt=a.get(vt);if(vt.version!==lt.__version||ft===!0){n.activeTexture(o.TEXTURE0+q);const jt=Te.getPrimaries(Te.workingColorSpace),wt=E.colorSpace===ys?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===ys||jt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let _t=0;_t<6;_t++)!ie&&!Mt?bt[_t]=T(E.image[_t],!0,r.maxCubemapSize):bt[_t]=Mt?E.image[_t].image:E.image[_t],bt[_t]=Oe(E,bt[_t]);const It=bt[0],Ot=c.convert(E.format,E.colorSpace),Rt=c.convert(E.type),ue=D(E.internalFormat,Ot,Rt,E.colorSpace),W=E.isVideoTexture!==!0,Lt=lt.__version===void 0||ft===!0,Et=vt.dataReady;let Pt=O(E,It);it(o.TEXTURE_CUBE_MAP,E);let yt;if(ie){W&&Lt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ue,It.width,It.height);for(let _t=0;_t<6;_t++){yt=bt[_t].mipmaps;for(let At=0;At<yt.length;At++){const se=yt[At];E.format!==ni?Ot!==null?W?Et&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,se.width,se.height,Ot,se.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,ue,se.width,se.height,0,se.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,se.width,se.height,Ot,Rt,se.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,ue,se.width,se.height,0,Ot,Rt,se.data)}}}else{if(yt=E.mipmaps,W&&Lt){yt.length>0&&Pt++;const _t=Yt(bt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){W?Et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,bt[_t].width,bt[_t].height,Ot,Rt,bt[_t].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,bt[_t].width,bt[_t].height,0,Ot,Rt,bt[_t].data);for(let At=0;At<yt.length;At++){const Ie=yt[At].image[_t].image;W?Et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ie.width,Ie.height,Ot,Rt,Ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,ue,Ie.width,Ie.height,0,Ot,Rt,Ie.data)}}else{W?Et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Rt,bt[_t]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Ot,Rt,bt[_t]);for(let At=0;At<yt.length;At++){const se=yt[At];W?Et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Rt,se.image[_t]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,ue,Ot,Rt,se.image[_t])}}}M(E)&&x(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ct(U,E,q,ft,vt,lt){const jt=c.convert(q.format,q.colorSpace),wt=c.convert(q.type),kt=D(q.internalFormat,jt,wt,q.colorSpace),ie=a.get(E),Mt=a.get(q);if(Mt.__renderTarget=E,!ie.__hasExternalTextures){const bt=Math.max(1,E.width>>lt),It=Math.max(1,E.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?n.texImage3D(vt,lt,kt,bt,It,E.depth,0,jt,wt,null):n.texImage2D(vt,lt,kt,bt,It,0,jt,wt,null)}n.bindFramebuffer(o.FRAMEBUFFER,U),$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,vt,Mt.__webglTexture,0,V(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,vt,Mt.__webglTexture,lt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(U,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ft=E.depthTexture,vt=ft&&ft.isDepthTexture?ft.type:null,lt=L(E.stencilBuffer,vt),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),lt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,U)}else{const ft=E.textures;for(let vt=0;vt<ft.length;vt++){const lt=ft[vt],jt=c.convert(lt.format,lt.colorSpace),wt=c.convert(lt.type),kt=D(lt.internalFormat,jt,wt,lt.colorSpace);$e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),kt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(U,E,q){const ft=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=a.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),it(o.TEXTURE_CUBE_MAP,E.depthTexture);const ie=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let bt;E.depthTexture.format===Fa?bt=o.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(bt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,bt,E.width,E.height,0,ie,Mt,null)}}else ut(E.depthTexture,0);const lt=vt.__webglTexture,jt=V(E),wt=ft?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,kt=E.depthTexture.format===Ks?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Fa)$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,wt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,wt,lt,0);else if(E.depthTexture.format===Ks)$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,wt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,wt,lt,0);else throw new Error("Unknown depthTexture format")}function ge(U){const E=a.get(U),q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",vt)};ft.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ft}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)zt(E.__webglFramebuffer[ft],U,ft);else{const ft=U.texture.mipmaps;ft&&ft.length>0?zt(E.__webglFramebuffer[0],U,0):zt(E.__webglFramebuffer,U,0)}else if(q){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),Gt(E.__webglDepthbuffer[ft],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ft=U.texture.mipmaps;if(ft&&ft.length>0?n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Gt(E.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function an(U,E,q){const ft=a.get(U);E!==void 0&&Ct(ft.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ge(U)}function Se(U){const E=U.texture,q=a.get(U),ft=a.get(E);U.addEventListener("dispose",P);const vt=U.textures,lt=U.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,u.memory.textures++),lt){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)q.__webglFramebuffer[wt][kt]=o.createFramebuffer()}else q.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)q.__webglFramebuffer[wt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(jt)for(let wt=0,kt=vt.length;wt<kt;wt++){const ie=a.get(vt[wt]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),u.memory.textures++)}if(U.samples>0&&$e(U)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const kt=vt[wt];q.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const ie=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),bt=D(kt.internalFormat,ie,Mt,kt.colorSpace,U.isXRRenderTarget===!0),It=V(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Gt(q.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){n.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),it(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ct(q.__webglFramebuffer[wt][kt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,kt);else Ct(q.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let wt=0,kt=vt.length;wt<kt;wt++){const ie=vt[wt],Mt=a.get(ie);let bt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(bt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(bt,Mt.__webglTexture),it(bt,ie),Ct(q.__webglFramebuffer,U,ie,o.COLOR_ATTACHMENT0+wt,bt,0),M(ie)&&x(bt)}n.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(wt,ft.__webglTexture),it(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ct(q.__webglFramebuffer[kt],U,E,o.COLOR_ATTACHMENT0,wt,kt);else Ct(q.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);M(E)&&x(wt),n.unbindTexture()}U.depthBuffer&&ge(U)}function _e(U){const E=U.textures;for(let q=0,ft=E.length;q<ft;q++){const vt=E[q];if(M(vt)){const lt=C(U),jt=a.get(vt).__webglTexture;n.bindTexture(lt,jt),x(lt),n.unbindTexture()}}}const De=[],le=[];function sn(U){if(U.samples>0){if($e(U)===!1){const E=U.textures,q=U.width,ft=U.height;let vt=o.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=a.get(U),wt=E.length>1;if(wt)for(let ie=0;ie<E.length;ie++)n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const kt=U.texture.mipmaps;kt&&kt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ie]);const Mt=a.get(E[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,q,ft,0,0,q,ft,vt,o.NEAREST),p===!0&&(De.length=0,le.length=0,De.push(o.COLOR_ATTACHMENT0+ie),U.depthBuffer&&U.resolveDepthBuffer===!1&&(De.push(lt),le.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let ie=0;ie<E.length;ie++){n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ie]);const Mt=a.get(E[ie]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,Mt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(r.maxSamples,U.samples)}function $e(U){const E=a.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(U){const E=u.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Oe(U,E){const q=U.colorSpace,ft=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==qn&&q!==ys&&(Te.getTransfer(q)===He?(ft!==ni||vt!==di)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",q)),E}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=et,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=an,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function LR(o,t){function n(a,r=ys){let c;const u=Te.getTransfer(r);if(a===di)return o.UNSIGNED_BYTE;if(a===qp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===jp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===kx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Hx)return o.BYTE;if(a===Vx)return o.SHORT;if(a===Dl)return o.UNSIGNED_SHORT;if(a===Yp)return o.INT;if(a===ia)return o.UNSIGNED_INT;if(a===Ri)return o.FLOAT;if(a===Ba)return o.HALF_FLOAT;if(a===Xx)return o.ALPHA;if(a===Pu)return o.RGB;if(a===ni)return o.RGBA;if(a===Fa)return o.DEPTH_COMPONENT;if(a===Ks)return o.DEPTH_STENCIL;if(a===Kp)return o.RED;if(a===Zp)return o.RED_INTEGER;if(a===ro)return o.RG;if(a===Qp)return o.RG_INTEGER;if(a===Jp)return o.RGBA_INTEGER;if(a===Cu||a===Du||a===Lu||a===Nu)if(u===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tp||a===ep||a===np||a===ip)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===tp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ap||a===sp)return u===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===rp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===op)return c.COMPRESSED_R11_EAC;if(a===lp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===cp)return c.COMPRESSED_RG11_EAC;if(a===up)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===hp||a===fp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===yp||a===Sp||a===Mp||a===bp||a===Ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===hp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===fp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===mp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===gp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===_p)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===yp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Sp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Mp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===bp)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ep)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Tp||a===Ap||a===wp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Tp)return u===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Rp||a===Cp||a===Dp||a===Lp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Rp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ll?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const NR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
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

}`;class OR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new sy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ki({vertexShader:NR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new po(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PR extends Js{constructor(t,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new OR,x={},C=n.getContextAttributes();let D=null,L=null;const O=[],B=[],P=new $t;let Y=null;const A=new Wn;A.viewport=new Ze;const N=new Wn;N.viewport=new Ze;const G=[A,N],et=new OE;let st=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=O[nt];return ct===void 0&&(ct=new bd,O[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=O[nt];return ct===void 0&&(ct=new bd,O[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=O[nt];return ct===void 0&&(ct=new bd,O[nt]=ct),ct.getHandSpace()};function ut(nt){const ct=B.indexOf(nt.inputSource);if(ct===-1)return;const Ct=O[ct];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,d||u),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function F(){r.removeEventListener("select",ut),r.removeEventListener("selectstart",ut),r.removeEventListener("selectend",ut),r.removeEventListener("squeeze",ut),r.removeEventListener("squeezestart",ut),r.removeEventListener("squeezeend",ut),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",H);for(let nt=0;nt<O.length;nt++){const ct=B[nt];ct!==null&&(B[nt]=null,O[nt].disconnect(ct))}st=null,dt=null,M.reset();for(const nt in x)delete x[nt];t.setRenderTarget(D),y=null,v=null,_=null,r=null,L=null,Ft.stop(),a.isPresenting=!1,t.setPixelRatio(Y),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,a.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(D=t.getRenderTarget(),r.addEventListener("select",ut),r.addEventListener("selectstart",ut),r.addEventListener("selectend",ut),r.addEventListener("squeeze",ut),r.addEventListener("squeezestart",ut),r.addEventListener("squeezeend",ut),r.addEventListener("end",F),r.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await n.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Gt=null,zt=null;C.depth&&(zt=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=C.stencil?Ks:Fa,Gt=C.stencil?Ll:ia);const ge={colorFormat:n.RGBA8,depthFormat:zt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ge),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Vi(v.textureWidth,v.textureHeight,{format:ni,type:di,depthTexture:new co(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ct={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,Ct),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Vi(y.framebufferWidth,y.framebufferHeight,{format:ni,type:di,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(h),Ft.setContext(r),Ft.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(nt){for(let ct=0;ct<nt.removed.length;ct++){const Ct=nt.removed[ct],Gt=B.indexOf(Ct);Gt>=0&&(B[Gt]=null,O[Gt].disconnect(Ct))}for(let ct=0;ct<nt.added.length;ct++){const Ct=nt.added[ct];let Gt=B.indexOf(Ct);if(Gt===-1){for(let ge=0;ge<O.length;ge++)if(ge>=B.length){B.push(Ct),Gt=ge;break}else if(B[ge]===null){B[ge]=Ct,Gt=ge;break}if(Gt===-1)break}const zt=O[Gt];zt&&zt.connect(Ct)}}const at=new X,St=new X;function xt(nt,ct,Ct){at.setFromMatrixPosition(ct.matrixWorld),St.setFromMatrixPosition(Ct.matrixWorld);const Gt=at.distanceTo(St),zt=ct.projectionMatrix.elements,ge=Ct.projectionMatrix.elements,an=zt[14]/(zt[10]-1),Se=zt[14]/(zt[10]+1),_e=(zt[9]+1)/zt[5],De=(zt[9]-1)/zt[5],le=(zt[8]-1)/zt[0],sn=(ge[8]+1)/ge[0],V=an*le,$e=an*sn,Ae=Gt/(-le+sn),Oe=Ae*-le;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Oe),nt.translateZ(Ae),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),zt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=an+Ae,U=Se+Ae,E=V-Oe,q=$e+(Gt-Oe),ft=_e*Se/U*Yt,vt=De*Se/U*Yt;nt.projectionMatrix.makePerspective(E,q,ft,vt,Yt,U),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function I(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ct=nt.near,Ct=nt.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),et.near=N.near=A.near=ct,et.far=N.far=A.far=Ct,(st!==et.near||dt!==et.far)&&(r.updateRenderState({depthNear:et.near,depthFar:et.far}),st=et.near,dt=et.far),et.layers.mask=nt.layers.mask|6,A.layers.mask=et.layers.mask&3,N.layers.mask=et.layers.mask&5;const Gt=nt.parent,zt=et.cameras;I(et,Gt);for(let ge=0;ge<zt.length;ge++)I(zt[ge],Gt);zt.length===2?xt(et,A,N):et.projectionMatrix.copy(A.projectionMatrix),it(nt,et,Gt)};function it(nt,ct,Ct){Ct===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=oo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(nt){p=nt,v!==null&&(v.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function(nt){return x[nt]};let gt=null;function Tt(nt,ct){if(g=ct.getViewerPose(d||u),b=ct,g!==null){const Ct=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Gt=!1;Ct.length!==et.cameras.length&&(et.cameras.length=0,Gt=!0);for(let Se=0;Se<Ct.length;Se++){const _e=Ct[Se];let De=null;if(y!==null)De=y.getViewport(_e);else{const sn=_.getViewSubImage(v,_e);De=sn.viewport,Se===0&&(t.setRenderTargetTextures(L,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(L))}let le=G[Se];le===void 0&&(le=new Wn,le.layers.enable(Se),le.viewport=new Ze,G[Se]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(De.x,De.y,De.width,De.height),Se===0&&(et.matrix.copy(le.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Gt===!0&&et.cameras.push(le)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const Se=_.getDepthInformation(Ct[0]);Se&&Se.isValid&&Se.texture&&M.init(Se,r.renderState)}if(zt&&zt.includes("camera-access")&&T){t.state.unbindTexture(),_=a.getBinding();for(let Se=0;Se<Ct.length;Se++){const _e=Ct[Se].camera;if(_e){let De=x[_e];De||(De=new sy,x[_e]=De);const le=_.getCameraImage(_e);De.sourceTexture=le}}}}for(let Ct=0;Ct<O.length;Ct++){const Gt=B[Ct],zt=O[Ct];Gt!==null&&zt!==void 0&&zt.update(Gt,ct,d||u)}gt&&gt(nt,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),b=null}const Ft=new hy;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const Ws=new Gi,IR=new pe;function BR(o,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Jx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function r(M,x,C,D,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,C,D):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ii&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ii&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const C=t.get(x),D=C.envMap,L=C.envMapRotation;D&&(M.envMap.value=D,Ws.copy(L),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),M.envMapRotation.value.setFromMatrix4(IR.makeRotationFromEuler(Ws)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,C,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*C,M.scale.value=D*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,C){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const C=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function FR(o,t,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const L=D.program;a.uniformBlockBinding(C,L)}function d(C,D){let L=r[C.id];L===void 0&&(b(C),L=g(C),r[C.id]=L,C.addEventListener("dispose",M));const O=D.program;a.updateUBOMapping(C,O);const B=t.render.frame;c[C.id]!==B&&(v(C),c[C.id]=B)}function g(C){const D=_();C.__bindingPointIndex=D;const L=o.createBuffer(),O=C.__size,B=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,O,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,L),L}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const D=r[C.id],L=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let B=0,P=L.length;B<P;B++){const Y=Array.isArray(L[B])?L[B]:[L[B]];for(let A=0,N=Y.length;A<N;A++){const G=Y[A];if(y(G,B,A,O)===!0){const et=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let ut=0;ut<st.length;ut++){const F=st[ut],H=T(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,et+dt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,D,L,O){const B=C.value,P=D+"_"+L;if(O[P]===void 0)return typeof B=="number"||typeof B=="boolean"?O[P]=B:O[P]=B.clone(),!0;{const Y=O[P];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return O[P]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function b(C){const D=C.uniforms;let L=0;const O=16;for(let P=0,Y=D.length;P<Y;P++){const A=Array.isArray(D[P])?D[P]:[D[P]];for(let N=0,G=A.length;N<G;N++){const et=A[N],st=Array.isArray(et.value)?et.value:[et.value];for(let dt=0,ut=st.length;dt<ut;dt++){const F=st[dt],H=T(F),at=L%O,St=at%H.boundary,xt=at+St;L+=St,xt!==0&&O-xt<H.storage&&(L+=O-xt),et.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=L,L+=H.storage}}}const B=L%O;return B>0&&(L+=O-B),C.__size=L,C.__cache={},this}function T(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Zt("WebGLRenderer: Unsupported uniform value type.",C),D}function M(C){const D=C.target;D.removeEventListener("dispose",M);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete c[D.id]}function x(){for(const C in r)o.deleteBuffer(r[C]);u=[],r={},c={}}return{bind:p,update:d,dispose:x}}const zR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function HR(){return Zi===null&&(Zi=new am(zR,16,16,ro,Ba),Zi.name="DFG_LUT",Zi.minFilter=xn,Zi.magFilter=xn,Zi.wrapS=$i,Zi.wrapT=$i,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class VR{constructor(t={}){const{canvas:n=db(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=di}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const T=y,M=new Set([Jp,Qp,Zp]),x=new Set([di,ia,Dl,Ll,qp,jp]),C=new Uint32Array(4),D=new Int32Array(4);let L=null,O=null;const B=[],P=[];let Y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=Pn;let G=0,et=0,st=null,dt=-1,ut=null;const F=new Ze,H=new Ze;let at=null;const St=new Qt(0);let xt=0,I=n.width,it=n.height,gt=1,Tt=null,Ft=null;const nt=new Ze(0,0,I,it),ct=new Ze(0,0,I,it);let Ct=!1;const Gt=new rm;let zt=!1,ge=!1;const an=new pe,Se=new X,_e=new Ze,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function sn(){return st===null?gt:1}let V=a;function $e(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xp}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",we,!1),V===null){const j="webgl2";if(V=$e(j,R),V===null)throw $e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw ae("WebGLRenderer: "+R.message),R}let Ae,Oe,Yt,U,E,q,ft,vt,lt,jt,wt,kt,ie,Mt,bt,It,Ot,Rt,ue,W,Lt,Et,Pt,yt;function _t(){Ae=new H1(V),Ae.init(),Et=new LR(V,Ae),Oe=new L1(V,Ae,t,Et),Yt=new CR(V,Ae),Oe.reversedDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),U=new k1(V),E=new pR,q=new DR(V,Ae,Yt,E,Oe,Et,U),ft=new U1(A),vt=new z1(A),lt=new qE(V),Pt=new C1(V,lt),jt=new V1(V,lt,U,Pt),wt=new W1(V,jt,lt,U),ue=new X1(V,Oe,q),It=new N1(E),kt=new dR(A,ft,vt,Ae,Oe,Pt,It),ie=new BR(A,E),Mt=new gR,bt=new MR(Ae),Rt=new R1(A,ft,vt,Yt,wt,b,p),Ot=new wR(A,wt,Oe),yt=new FR(V,U,Oe,Yt),W=new D1(V,Ae,U),Lt=new G1(V,Ae,U),U.programs=kt.programs,A.capabilities=Oe,A.extensions=Ae,A.properties=E,A.renderLists=Mt,A.shadowMap=Ot,A.state=Yt,A.info=U}_t(),T!==di&&(Y=new q1(T,n.width,n.height,r,c));const At=new PR(A,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(I,it,!1))},this.getSize=function(R){return R.set(I,it)},this.setSize=function(R,j,rt=!0){if(At.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,it=j,n.width=Math.floor(R*gt),n.height=Math.floor(j*gt),rt===!0&&(n.style.width=R+"px",n.style.height=j+"px"),Y!==null&&Y.setSize(n.width,n.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(I*gt,it*gt).floor()},this.setDrawingBufferSize=function(R,j,rt){I=R,it=j,gt=rt,n.width=Math.floor(R*rt),n.height=Math.floor(j*rt),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(T===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,j,rt,$){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,j,rt,$),Yt.viewport(F.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ct)},this.setScissor=function(R,j,rt,$){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,j,rt,$),Yt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){Yt.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,rt=!0){let $=0;if(R){let Z=!1;if(st!==null){const Dt=st.texture.format;Z=M.has(Dt)}if(Z){const Dt=st.texture.type,Bt=x.has(Dt),Nt=Rt.getClearColor(),Ht=Rt.getClearAlpha(),Xt=Nt.r,te=Nt.g,Wt=Nt.b;Bt?(C[0]=Xt,C[1]=te,C[2]=Wt,C[3]=Ht,V.clearBufferuiv(V.COLOR,0,C)):(D[0]=Xt,D[1]=te,D[2]=Wt,D[3]=Ht,V.clearBufferiv(V.COLOR,0,D))}else $|=V.COLOR_BUFFER_BIT}j&&($|=V.DEPTH_BUFFER_BIT),rt&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Rt.dispose(),Mt.dispose(),bt.dispose(),E.dispose(),ft.dispose(),vt.dispose(),wt.dispose(),Pt.dispose(),yt.dispose(),kt.dispose(),At.dispose(),At.removeEventListener("sessionstart",tr),At.removeEventListener("sessionend",So),Wi.stop()};function se(R){R.preventDefault(),Fu("WebGLRenderer: Context Lost."),N=!0}function Ie(){Fu("WebGLRenderer: Context Restored."),N=!1;const R=U.autoReset,j=Ot.enabled,rt=Ot.autoUpdate,$=Ot.needsUpdate,Z=Ot.type;_t(),U.autoReset=R,Ot.enabled=j,Ot.autoUpdate=rt,Ot.needsUpdate=$,Ot.type=Z}function we(R){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fn(R){const j=R.target;j.removeEventListener("dispose",Fn),Ci(j)}function Ci(R){Gl(R),E.remove(R)}function Gl(R){const j=E.get(R).programs;j!==void 0&&(j.forEach(function(rt){kt.releaseProgram(rt)}),R.isShaderMaterial&&kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,rt,$,Z,Dt){j===null&&(j=De);const Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Nt=Ms(R,j,rt,$,Z);Yt.setMaterial($,Bt);let Ht=rt.index,Xt=1;if($.wireframe===!0){if(Ht=jt.getWireframeAttribute(rt),Ht===void 0)return;Xt=2}const te=rt.drawRange,Wt=rt.attributes.position;let ee=te.start*Xt,Le=(te.start+te.count)*Xt;Dt!==null&&(ee=Math.max(ee,Dt.start*Xt),Le=Math.min(Le,(Dt.start+Dt.count)*Xt)),Ht!==null?(ee=Math.max(ee,0),Le=Math.min(Le,Ht.count)):Wt!=null&&(ee=Math.max(ee,0),Le=Math.min(Le,Wt.count));const tn=Le-ee;if(tn<0||tn===1/0)return;Pt.setup(Z,$,Nt,rt,Ht);let Ke,Pe=W;if(Ht!==null&&(Ke=lt.get(Ht),Pe=Lt,Pe.setIndex(Ke)),Z.isMesh)$.wireframe===!0?(Yt.setLineWidth($.wireframeLinewidth*sn()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if(Z.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*sn()),Z.isLineSegments?Pe.setMode(V.LINES):Z.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else Z.isPoints?Pe.setMode(V.POINTS):Z.isSprite&&Pe.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Pl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,Ne=Z._multiDrawCounts,re=Z._multiDrawCount,An=Ht?lt.get(Ht).bytesPerElement:1,oa=E.get($).currentProgram.getUniforms();for(let wn=0;wn<re;wn++)oa.setValue(V,"_gl_DrawID",wn),Pe.render(Kt[wn]/An,Ne[wn])}else if(Z.isInstancedMesh)Pe.renderInstances(ee,tn,Z.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ne=Math.min(rt.instanceCount,Kt);Pe.renderInstances(ee,tn,Ne)}else Pe.render(ee,tn)};function xo(R,j,rt){R.transparent===!0&&R.side===wi&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,nr(R,j,rt),R.side=Ia,R.needsUpdate=!0,nr(R,j,rt),R.side=wi):nr(R,j,rt)}this.compile=function(R,j,rt=null){rt===null&&(rt=R),O=bt.get(rt),O.init(j),P.push(O),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(O.pushLight(Z),Z.castShadow&&O.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(O.pushLight(Z),Z.castShadow&&O.pushShadow(Z))}),O.setupLights();const $=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Nt=Dt[Bt];xo(Nt,rt,Z),$.add(Nt)}else xo(Dt,rt,Z),$.add(Dt)}),O=P.pop(),$},this.compileAsync=function(R,j,rt=null){const $=this.compile(R,j,rt);return new Promise(Z=>{function Dt(){if($.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&$.delete(Bt)}),$.size===0){Z(R);return}setTimeout(Dt,10)}Ae.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let $s=null;function yo(R){$s&&$s(R)}function tr(){Wi.stop()}function So(){Wi.start()}const Wi=new hy;Wi.setAnimationLoop(yo),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){$s=R,At.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},At.addEventListener("sessionstart",tr),At.addEventListener("sessionend",So),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,$=Y!==null&&(st===null||rt)&&Y.begin(A,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,j,st),O=bt.get(R,P.length),O.init(j),P.push(O),an.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Gt.setFromProjectionMatrix(an,ta,j.reversedDepth),ge=this.localClippingEnabled,zt=It.init(this.clippingPlanes,ge),L=Mt.get(R,B.length),L.init(),B.push(L),At.enabled===!0&&At.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&mi(Bt,j,-1/0,A.sortObjects)}mi(R,j,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Tt,Ft),le=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,le&&Rt.addToRenderList(L,R),this.info.render.frame++,zt===!0&&It.beginShadows();const Z=O.state.shadowsArray;if(Ot.render(Z,R,j),zt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Y.hasRenderPass())===!1){const Bt=L.opaque,Nt=L.transmissive;if(O.setupLights(),j.isArrayCamera){const Ht=j.cameras;if(Nt.length>0)for(let Xt=0,te=Ht.length;Xt<te;Xt++){const Wt=Ht[Xt];Tn(Bt,Nt,R,Wt)}le&&Rt.render(R);for(let Xt=0,te=Ht.length;Xt<te;Xt++){const Wt=Ht[Xt];un(L,R,Wt,Wt.viewport)}}else Nt.length>0&&Tn(Bt,Nt,R,j),le&&Rt.render(R),un(L,R,j)}st!==null&&et===0&&(q.updateMultisampleRenderTarget(st),q.updateRenderTargetMipmap(st)),$&&Y.end(A),R.isScene===!0&&R.onAfterRender(A,R,j),Pt.resetDefaultState(),dt=-1,ut=null,P.pop(),P.length>0?(O=P[P.length-1],zt===!0&&It.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function mi(R,j,rt,$){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Gt.intersectsSprite(R)){$&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(an);const Bt=wt.update(R),Nt=R.material;Nt.visible&&L.push(R,Bt,Nt,rt,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Gt.intersectsObject(R))){const Bt=wt.update(R),Nt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),_e.copy(Bt.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(an)),Array.isArray(Nt)){const Ht=Bt.groups;for(let Xt=0,te=Ht.length;Xt<te;Xt++){const Wt=Ht[Xt],ee=Nt[Wt.materialIndex];ee&&ee.visible&&L.push(R,Bt,ee,rt,_e.z,Wt)}}else Nt.visible&&L.push(R,Bt,Nt,rt,_e.z,null)}}const Dt=R.children;for(let Bt=0,Nt=Dt.length;Bt<Nt;Bt++)mi(Dt[Bt],j,rt,$)}function un(R,j,rt,$){const{opaque:Z,transmissive:Dt,transparent:Bt}=R;O.setupLightsView(rt),zt===!0&&It.setGlobalState(A.clippingPlanes,rt),$&&Yt.viewport(F.copy($)),Z.length>0&&Di(Z,j,rt),Dt.length>0&&Di(Dt,j,rt),Bt.length>0&&Di(Bt,j,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Tn(R,j,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[$.id]===void 0){const ee=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[$.id]=new Vi(1,1,{generateMipmaps:!0,type:ee?Ba:di,minFilter:La,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=O.state.transmissionRenderTarget[$.id],Bt=$.viewport||F;Dt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Nt=A.getRenderTarget(),Ht=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(Dt),A.getClearColor(St),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),le&&Rt.render(rt);const te=A.toneMapping;A.toneMapping=ea;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),O.setupLightsView($),zt===!0&&It.setGlobalState(A.clippingPlanes,$),Di(R,rt,$),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Le=0,tn=j.length;Le<tn;Le++){const Ke=j[Le],{object:Pe,geometry:Kt,material:Ne,group:re}=Ke;if(Ne.side===wi&&Pe.layers.test($.layers)){const An=Ne.side;Ne.side=ii,Ne.needsUpdate=!0,er(Pe,rt,$,Kt,Ne,re),Ne.side=An,Ne.needsUpdate=!0,ee=!0}}ee===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}A.setRenderTarget(Nt,Ht,Xt),A.setClearColor(St,xt),Wt!==void 0&&($.viewport=Wt),A.toneMapping=te}function Di(R,j,rt){const $=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Dt=R.length;Z<Dt;Z++){const Bt=R[Z],{object:Nt,geometry:Ht,group:Xt}=Bt;let te=Bt.material;te.allowOverride===!0&&$!==null&&(te=$),Nt.layers.test(rt.layers)&&er(Nt,j,rt,Ht,te,Xt)}}function er(R,j,rt,$,Z,Dt){R.onBeforeRender(A,j,rt,$,Z,Dt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(A,j,rt,$,R,Dt),Z.transparent===!0&&Z.side===wi&&Z.forceSinglePass===!1?(Z.side=ii,Z.needsUpdate=!0,A.renderBufferDirect(rt,j,$,Z,R,Dt),Z.side=Ia,Z.needsUpdate=!0,A.renderBufferDirect(rt,j,$,Z,R,Dt),Z.side=wi):A.renderBufferDirect(rt,j,$,Z,R,Dt),R.onAfterRender(A,j,rt,$,Z,Dt)}function nr(R,j,rt){j.isScene!==!0&&(j=De);const $=E.get(R),Z=O.state.lights,Dt=O.state.shadowsArray,Bt=Z.state.version,Nt=kt.getParameters(R,Z.state,Dt,j,rt),Ht=kt.getProgramCacheKey(Nt);let Xt=$.programs;$.environment=R.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(R.isMeshStandardMaterial?vt:ft).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Fn),Xt=new Map,$.programs=Xt);let te=Xt.get(Ht);if(te!==void 0){if($.currentProgram===te&&$.lightsStateVersion===Bt)return Mo(R,Nt),te}else Nt.uniforms=kt.getUniforms(R),R.onBeforeCompile(Nt,A),te=kt.acquireProgram(Nt,Ht),Xt.set(Ht,te),$.uniforms=Nt.uniforms;const Wt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=It.uniform),Mo(R,Nt),$.needsLights=Ha(R),$.lightsStateVersion=Bt,$.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=te,$.uniformsList=null,te}function kl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Uu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Mo(R,j){const rt=E.get(R);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Ms(R,j,rt,$,Z){j.isScene!==!0&&(j=De),q.resetTextureUnits();const Dt=j.fog,Bt=$.isMeshStandardMaterial?j.environment:null,Nt=st===null?A.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qn,Ht=($.isMeshStandardMaterial?vt:ft).get($.envMap||Bt),Xt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!rt.morphAttributes.position,ee=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let tn=ea;$.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(tn=A.toneMapping);const Ke=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Ke!==void 0?Ke.length:0,Kt=E.get($),Ne=O.state.lights;if(zt===!0&&(ge===!0||R!==ut)){const Cn=R===ut&&$.id===dt;It.setState($,R,Cn)}let re=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ne.state.version||Kt.outputColorSpace!==Nt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Ht||$.fog===!0&&Kt.fog!==Dt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==It.numPlanes||Kt.numIntersection!==It.numIntersection)||Kt.vertexAlphas!==Xt||Kt.vertexTangents!==te||Kt.morphTargets!==Wt||Kt.morphNormals!==ee||Kt.morphColors!==Le||Kt.toneMapping!==tn||Kt.morphTargetsCount!==Pe)&&(re=!0):(re=!0,Kt.__version=$.version);let An=Kt.currentProgram;re===!0&&(An=nr($,j,Z));let oa=!1,wn=!1,gi=!1;const Be=An.getUniforms(),Rn=Kt.uniforms;if(Yt.useProgram(An.program)&&(oa=!0,wn=!0,gi=!0),$.id!==dt&&(dt=$.id,wn=!0),oa||ut!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Be.setValue(V,"projectionMatrix",R.projectionMatrix),Be.setValue(V,"viewMatrix",R.matrixWorldInverse);const Dn=Be.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,Se.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&Be.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Be.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ut!==R&&(ut=R,wn=!0,gi=!0)}if(Kt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Be.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,q),Ne.state.spotShadowMap.length>0&&Be.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,q),Ne.state.pointShadowMap.length>0&&Be.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,q)),Z.isSkinnedMesh){Be.setOptional(V,Z,"bindMatrix"),Be.setOptional(V,Z,"bindMatrixInverse");const Cn=Z.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Be.setValue(V,"boneTexture",Cn.boneTexture,q))}Z.isBatchedMesh&&(Be.setOptional(V,Z,"batchingTexture"),Be.setValue(V,"batchingTexture",Z._matricesTexture,q),Be.setOptional(V,Z,"batchingIdTexture"),Be.setValue(V,"batchingIdTexture",Z._indirectTexture,q),Be.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Be.setValue(V,"batchingColorTexture",Z._colorsTexture,q));const gn=rt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ue.update(Z,rt,An),(wn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Be.setValue(V,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Rn.envMap.value=Ht,Rn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=HR()),wn&&(Be.setValue(V,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&bo(Rn,gi),Dt&&$.fog===!0&&ie.refreshFogUniforms(Rn,Dt),ie.refreshMaterialUniforms(Rn,$,gt,it,O.state.transmissionRenderTarget[R.id]),Uu.upload(V,kl(Kt),Rn,q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Uu.upload(V,kl(Kt),Rn,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Be.setValue(V,"center",Z.center),Be.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Be.setValue(V,"normalMatrix",Z.normalMatrix),Be.setValue(V,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Cn=$.uniformsGroups;for(let Dn=0,ir=Cn.length;Dn<ir;Dn++){const Li=Cn[Dn];yt.update(Li,An),yt.bind(Li,An)}}return An}function bo(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,j,rt){const $=E.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=j,E.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const rt=E.get(R);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Va=V.createFramebuffer();this.setRenderTarget=function(R,j=0,rt=0){st=R,G=j,et=rt;let $=null,Z=!1,Dt=!1;if(R){const Nt=E.get(R);if(Nt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Nt.__webglFramebuffer),F.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest,Yt.viewport(F),Yt.scissor(H),Yt.setScissorTest(at),dt=-1;return}else if(Nt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Nt.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Nt.__boundDepthTexture!==te){if(te!==null&&E.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Xt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?$=Xt[j][rt]:$=Xt[j],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?$=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[rt]:$=Xt,F.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest}else F.copy(nt).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),at=Ct;if(rt!==0&&($=Va),Yt.bindFramebuffer(V.FRAMEBUFFER,$)&&Yt.drawBuffers(R,$),Yt.viewport(F),Yt.scissor(H),Yt.setScissorTest(at),Z){const Nt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,rt)}else if(Dt){const Nt=j;for(let Ht=0;Ht<R.textures.length;Ht++){const Xt=E.get(R.textures[Ht]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,rt,Nt)}}else if(R!==null&&rt!==0){const Nt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(R,j,rt,$,Z,Dt,Bt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){Yt.bindFramebuffer(V.FRAMEBUFFER,Ht);try{const Xt=R.textures[Nt],te=Xt.format,Wt=Xt.type;if(!Oe.textureFormatReadable(te)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Wt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-$&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Nt),V.readPixels(j,rt,$,Z,Et.convert(te),Et.convert(Wt),Dt))}finally{const Xt=st!==null?E.get(st).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,j,rt,$,Z,Dt,Bt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(j>=0&&j<=R.width-$&&rt>=0&&rt<=R.height-Z){Yt.bindFramebuffer(V.FRAMEBUFFER,Ht);const Xt=R.textures[Nt],te=Xt.format,Wt=Xt.type;if(!Oe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ee),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Nt),V.readPixels(j,rt,$,Z,Et.convert(te),Et.convert(Wt),0);const Le=st!==null?E.get(st).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Le);const tn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pb(V,tn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ee),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(ee),V.deleteSync(tn),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,rt=0){const $=Math.pow(2,-rt),Z=Math.floor(R.image.width*$),Dt=Math.floor(R.image.height*$),Bt=j!==null?j.x:0,Nt=j!==null?j.y:0;q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Bt,Nt,Z,Dt),Yt.unbindTexture()};const bs=V.createFramebuffer(),Ga=V.createFramebuffer();this.copyTextureToTexture=function(R,j,rt=null,$=null,Z=0,Dt=null){Dt===null&&(Z!==0?(Pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Z,Z=0):Dt=0);let Bt,Nt,Ht,Xt,te,Wt,ee,Le,tn;const Ke=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(rt!==null)Bt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,te=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const gn=Math.pow(2,-Z);Bt=Math.floor(Ke.width*gn),Nt=Math.floor(Ke.height*gn),R.isDataArrayTexture?Ht=Ke.depth:R.isData3DTexture?Ht=Math.floor(Ke.depth*gn):Ht=1,Xt=0,te=0,Wt=0}$!==null?(ee=$.x,Le=$.y,tn=$.z):(ee=0,Le=0,tn=0);const Pe=Et.convert(j.format),Kt=Et.convert(j.type);let Ne;j.isData3DTexture?(q.setTexture3D(j,0),Ne=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Ne=V.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const re=V.getParameter(V.UNPACK_ROW_LENGTH),An=V.getParameter(V.UNPACK_IMAGE_HEIGHT),oa=V.getParameter(V.UNPACK_SKIP_PIXELS),wn=V.getParameter(V.UNPACK_SKIP_ROWS),gi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ke.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const Be=R.isDataArrayTexture||R.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const gn=E.get(R),Cn=E.get(j),Dn=E.get(gn.__renderTarget),ir=E.get(Cn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Li=0;Li<Ht;Li++)Be&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,Wt+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Dt,tn+Li)),V.blitFramebuffer(Xt,te,Bt,Nt,ee,Le,Bt,Nt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const gn=E.get(R),Cn=E.get(j);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,bs),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ga);for(let Dn=0;Dn<Ht;Dn++)Be?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,Z,Wt+Dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,Z),Rn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Cn.__webglTexture,Dt,tn+Dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Cn.__webglTexture,Dt),Z!==0?V.blitFramebuffer(Xt,te,Bt,Nt,ee,Le,Bt,Nt,V.COLOR_BUFFER_BIT,V.NEAREST):Rn?V.copyTexSubImage3D(Ne,Dt,ee,Le,tn+Dn,Xt,te,Bt,Nt):V.copyTexSubImage2D(Ne,Dt,ee,Le,Xt,te,Bt,Nt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ne,Dt,ee,Le,tn,Bt,Nt,Ht,Pe,Kt,Ke.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,Dt,ee,Le,tn,Bt,Nt,Ht,Pe,Ke.data):V.texSubImage3D(Ne,Dt,ee,Le,tn,Bt,Nt,Ht,Pe,Kt,Ke):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,ee,Le,Bt,Nt,Pe,Kt,Ke.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,ee,Le,Ke.width,Ke.height,Pe,Ke.data):V.texSubImage2D(V.TEXTURE_2D,Dt,ee,Le,Bt,Nt,Pe,Kt,Ke);V.pixelStorei(V.UNPACK_ROW_LENGTH,re),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,An),V.pixelStorei(V.UNPACK_SKIP_PIXELS,oa),V.pixelStorei(V.UNPACK_SKIP_ROWS,wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,gi),Dt===0&&j.generateMipmaps&&V.generateMipmap(Ne),Yt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){G=0,et=0,st=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}const Sx={type:"change"},mm={type:"start"},gy={type:"end"},Tu=new Fl,Mx=new xs,GR=Math.cos(70*Rl.DEG2RAD),vn=new X,ei=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class kR extends WE{constructor(t,n=null){super(t,n),this.state=qe.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new aa,this._lastTargetPosition=new X,this._quat=new aa().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zv,this._sphericalDelta=new Zv,this._scale=1,this._panOffset=new X,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new X,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WR.bind(this),this._onPointerDown=XR.bind(this),this._onPointerUp=YR.bind(this),this._onContextMenu=$R.bind(this),this._onMouseWheel=KR.bind(this),this._onKeyDown=ZR.bind(this),this._onTouchStart=QR.bind(this),this._onTouchMove=JR.bind(this),this._onMouseDown=qR.bind(this),this._onMouseMove=jR.bind(this),this._interceptControlDown=tC.bind(this),this._interceptControlUp=eC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sx),this.update(),this.state=qe.NONE}update(t=null){const n=this.object.position;vn.copy(n).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=ei:a>Math.PI&&(a-=ei),r<-Math.PI?r+=ei:r>Math.PI&&(r-=ei),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),n.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=vn.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Tu.origin.copy(this.object.position),Tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tu.direction))<GR?this.object.lookAt(this.target):(Mx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tu.intersectPlane(Mx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(Sx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ei/60*this.autoRotateSpeed*t:ei/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){vn.setFromMatrixColumn(n,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,n){this.screenSpacePanning===!0?vn.setFromMatrixColumn(n,1):(vn.setFromMatrixColumn(n,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;vn.copy(r).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/n.clientHeight),this._rotateUp(ei*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,r=t.pageY-n.y,c=Math.sqrt(a*a+r*r);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),r=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(r,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/n.clientHeight),this._rotateUp(ei*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,r=t.pageY-n.y,c=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new $t,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function XR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function WR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function YR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gy),this.state=qe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function qR(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qe.DOLLY;break;case $r.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}break;case $r.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(mm)}function jR(o){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function KR(o){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(o.preventDefault(),this.dispatchEvent(mm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(gy))}function ZR(o){this.enabled!==!1&&this._handleKeyDown(o)}function QR(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qe.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qe.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(mm)}function JR(o){switch(this._trackPointer(o),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qe.NONE}}function $R(o){this.enabled!==!1&&o.preventDefault()}function tC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class nC{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iC=new Vl(-1,1,1,-1,0,1);class aC extends jn{constructor(){super(),this.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new In([0,2,0,0,2,0],2))}}const sC=new aC;class rC{constructor(t){this._mesh=new Bn(sC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,iC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}function bx(o,t){if(t===ib)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===Np||t===Wx){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(t===Np)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class oC extends _o{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new fC(n)}),this.register(function(n){return new dC(n)}),this.register(function(n){return new MC(n)}),this.register(function(n){return new bC(n)}),this.register(function(n){return new EC(n)}),this.register(function(n){return new mC(n)}),this.register(function(n){return new gC(n)}),this.register(function(n){return new _C(n)}),this.register(function(n){return new vC(n)}),this.register(function(n){return new hC(n)}),this.register(function(n){return new xC(n)}),this.register(function(n){return new pC(n)}),this.register(function(n){return new SC(n)}),this.register(function(n){return new yC(n)}),this.register(function(n){return new cC(n)}),this.register(function(n){return new TC(n)}),this.register(function(n){return new AC(n)})}load(t,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Cl.extractUrlBase(t);u=Cl.resolveURL(d,this.path)}else u=Cl.extractUrlBase(t);this.manager.itemStart(t);const h=function(d){r?r(d):console.error(d),c.manager.itemError(t),c.manager.itemEnd(t)},p=new ly(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(t,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(t)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,a,r){let c;const u={},h={},p=new TextDecoder;if(typeof t=="string")c=JSON.parse(t);else if(t instanceof ArrayBuffer)if(p.decode(new Uint8Array(t,0,4))===_y){try{u[ye.KHR_BINARY_GLTF]=new wC(t)}catch(_){r&&r(_);return}c=JSON.parse(u[ye.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(t));else c=t;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new HC(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case ye.KHR_MATERIALS_UNLIT:u[_]=new uC;break;case ye.KHR_DRACO_MESH_COMPRESSION:u[_]=new RC(c,this.dracoLoader);break;case ye.KHR_TEXTURE_TRANSFORM:u[_]=new CC;break;case ye.KHR_MESH_QUANTIZATION:u[_]=new DC;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,r)}parseAsync(t,n){const a=this;return new Promise(function(r,c){a.parse(t,n,r,c)})}}function lC(){let o={};return{get:function(t){return o[t]},add:function(t,n){o[t]=n},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cC{constructor(t){this.parser=t,this.name=ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(t){const n=this.parser,a="light:"+t;let r=n.cache.get(a);if(r)return r;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[t];let d;const g=new Qt(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],qn);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Bp(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new uy(g),d.distance=_;break;case"spot":d=new DE(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),Qi(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+t),r=Promise.resolve(d),n.cache.add(a,r),r}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,a=this.parser,c=a.json.nodes[t],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class uC{constructor(){this.name=ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Zs}extendParams(t,n,a){const r=[];t.color=new Qt(1,1,1),t.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;t.color.setRGB(u[0],u[1],u[2],qn),t.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(t,"map",c.baseColorTexture,Pn))}return Promise.all(r)}}class hC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class fC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new $t(h,h)}return Promise.all(c)}}class dC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_DISPERSION}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class pC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class mC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SHEEN}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new Qt(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],qn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,Pn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class gC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class _C{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_VOLUME}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new Qt().setRGB(h[0],h[1],h[2],qn),Promise.all(c)}}class vC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IOR}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class xC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SPECULAR}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new Qt().setRGB(h[0],h[1],h[2],qn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,Pn)),Promise.all(c)}}class yC{constructor(t){this.parser=t,this.name=ye.EXT_MATERIALS_BUMP}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class SC{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const a=this.parser.json.materials[t];return!a.extensions||!a.extensions[this.name]?null:ra}extendMaterialParams(t,n){const a=this.parser,r=a.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class MC{constructor(t){this.parser=t,this.name=ye.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,a=n.json,r=a.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,c.source,u)}}class bC{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_WEBP}loadTexture(t){const n=this.name,a=this.parser,r=a.json,c=r.textures[t];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(t,u.source,p)}}class EC{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_AVIF}loadTexture(t){const n=this.name,a=this.parser,r=a.json,c=r.textures[t];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(t,u.source,p)}}class TC{constructor(t){this.name=ye.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,a=n.bufferViews[t];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=r.byteOffset||0,d=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(y),g,_,v,r.mode,r.filter),y})})}else return null}}class AC{constructor(t){this.name=ye.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,a=n.nodes[t];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==Ai.TRIANGLES&&d.mode!==Ai.TRIANGLE_STRIP&&d.mode!==Ai.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(t)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,y=[];for(const b of _){const T=new pe,M=new X,x=new aa,C=new X(1,1,1),D=new Pp(b.geometry,b.material,v);for(let L=0;L<v;L++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,L),p.ROTATION&&x.fromBufferAttribute(p.ROTATION,L),p.SCALE&&C.fromBufferAttribute(p.SCALE,L),D.setMatrixAt(L,T.compose(M,x,C));for(const L in p)if(L==="_COLOR_0"){const O=p[L];D.instanceColor=new Op(O.array,O.itemSize,O.normalized)}else L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&b.geometry.setAttribute(L,p[L]);nn.prototype.copy.call(D,b),this.parser.assignFinalMaterial(D),y.push(D)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const _y="glTF",Ml=12,Ex={JSON:1313821514,BIN:5130562};class wC{constructor(t){this.name=ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,Ml),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==_y)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ml,c=new DataView(t,Ml);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===Ex.JSON){const d=new Uint8Array(t,Ml+u,h);this.content=a.decode(d)}else if(p===Ex.BIN){const d=Ml+u;this.body=t.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class RC{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ye.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const a=this.json,r=this.dracoLoader,c=t.extensions[this.name].bufferView,u=t.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Hp[g]||g.toLowerCase();h[_]=u[g]}for(const g in t.attributes){const _=Hp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[t.attributes[g]],y=no[v.componentType];d[_]=y.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(y){for(const b in y.attributes){const T=y.attributes[b],M=p[b];M!==void 0&&(T.normalized=M)}_(y)},h,d,qn,v)})})}}class CC{constructor(){this.name=ye.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return(n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class DC{constructor(){this.name=ye.KHR_MESH_QUANTIZATION}}class vy extends Hl{constructor(t,n,a,r){super(t,n,a,r)}copySampleValue_(t){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=t*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(t,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=r-n,_=(a-n)/g,v=_*_,y=v*_,b=t*d,T=b-d,M=-2*y+3*v,x=y-v,C=1-M,D=x-v+_;for(let L=0;L!==h;L++){const O=u[T+L+h],B=u[T+L+p]*g,P=u[b+L+h],Y=u[b+L]*g;c[L]=C*O+D*B+M*P+x*Y}return c}}const LC=new aa;class NC extends vy{interpolate_(t,n,a,r){const c=super.interpolate_(t,n,a,r);return LC.fromArray(c).normalize().toArray(c),c}}const Ai={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tx={9728:ke,9729:xn,9984:zx,9985:Ru,9986:El,9987:La},Ax={33071:$i,33648:Ou,10497:so},Bd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UC={CUBICSPLINE:void 0,LINEAR:Ul,STEP:Nl},Fd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new hm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ia})),o.DefaultMaterial}function Ys(o,t,n){for(const a in n.extensions)o[a]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[a]=n.extensions[a])}function Qi(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function PC(o,t,n){let a=!1,r=!1,c=!1;for(let d=0,g=t.length;d<g;d++){const _=t[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],p=[];for(let d=0,g=t.length;d<g;d++){const _=t[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function IC(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let n=0,a=t.weights.length;n<a;n++)o.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BC(o){let t;const n=o.extensions&&o.extensions[ye.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+zd(n.attributes):t=o.indices+":"+zd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)t+=":"+zd(o.targets[a]);return t}function zd(o){let t="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)t+=n[a]+":"+o[n[a]]+";";return t}function Vp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FC(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const zC=new pe;class HC{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new lC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new cy(this.options.manager):this.textureLoader=new UE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ly(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Ys(c,h,r),Qi(h,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();t(h)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,p=u.length;h<p;h++)t[u[h]].isBone=!0}for(let r=0,c=t.length;r<c;r++){const u=t[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,a){if(t.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,r),r.name+="_instance_"+t.uses[n]++,r}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=t(n[a]);if(r)return r}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=t(n[r]);c&&a.push(c)}return a}getDependency(t,n){const a=t+":"+n;let r=this.cache.get(a);if(!r){switch(t){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(t,n)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(a,r)}return r}getDependencies(t){let n=this.cache.get(t);if(!n){const a=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(t,u)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(Cl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(t){const n=this,a=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const u=Bd[r.type],h=no[r.componentType],p=r.normalized===!0,d=new h(r.count*u);return Promise.resolve(new Yn(d,u,p))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=Bd[r.type],d=no[r.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,b=r.normalized===!0;let T,M;if(y&&y!==_){const x=Math.floor(v/y),C="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let D=n.cache.get(C);D||(T=new d(h,x*y,r.count*y/g),D=new eE(T,y/g),n.cache.add(C,D)),M=new im(D,p,v%y/g,b)}else h===null?T=new d(r.count*p):T=new d(h,v,r.count*p),M=new Yn(T,p,b);if(r.sparse!==void 0){const x=Bd.SCALAR,C=no[r.sparse.indices.componentType],D=r.sparse.indices.byteOffset||0,L=r.sparse.values.byteOffset||0,O=new C(u[1],D,r.sparse.count*x),B=new d(u[2],L,r.sparse.count*p);h!==null&&(M=new Yn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let P=0,Y=O.length;P<Y;P++){const A=O[P];if(M.setX(A,B[P*p]),p>=2&&M.setY(A,B[P*p+1]),p>=3&&M.setZ(A,B[P*p+2]),p>=4&&M.setW(A,B[P*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(t){const n=this.json,a=this.options,c=n.textures[t].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(t,c,h)}loadTextureImage(t,n,a){const r=this,c=this.json,u=c.textures[t],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=Tx[v.magFilter]||xn,g.minFilter=Tx[v.minFilter]||La,g.wrapS=Ax[v.wrapS]||so,g.wrapT=Ax[v.wrapT]||so,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==ke&&g.minFilter!==xn,r.associations.set(g,{textures:t}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(t,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(_=>_.clone());const u=r.images[t],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,y){let b=v;n.isImageBitmapLoader===!0&&(b=function(T){const M=new En(T);M.needsUpdate=!0,v(M)}),n.load(Cl.resolveURL(_,c.path),b,void 0,y)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),Qi(_,u),_.userData.mimeType=u.mimeType||FC(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[t]=g,g}assignTexture(t,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[ye.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[ye.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[ye.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),t[n]=u,u})}assignFinalMaterial(t){const n=t.geometry;let a=t.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(t.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new ay,pi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(t.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new om,pi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}t.material=a}getMaterialType(){return hm}loadMaterial(t){const n=this,a=this.json,r=this.extensions,c=a.materials[t];let u;const h={},p=c.extensions||{},d=[];if(p[ye.KHR_MATERIALS_UNLIT]){const _=r[ye.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new Qt(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],qn),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,Pn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(t)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(t,h)})))}c.doubleSided===!0&&(h.side=wi);const g=c.alphaMode||Fd.OPAQUE;if(g===Fd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===Fd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Zs&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new $t(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Zs&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Zs){const _=c.emissiveFactor;h.emissive=new Qt().setRGB(_[0],_[1],_[2],qn)}return c.emissiveTexture!==void 0&&u!==Zs&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Pn)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),Qi(_,c),n.associations.set(_,{materials:t}),c.extensions&&Ys(r,_,c),_})}createUniqueName(t){const n=Ge.sanitizeNodeName(t||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return wx(p,h,n)})}const u=[];for(let h=0,p=t.length;h<p;h++){const d=t[h],g=BC(d),_=r[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[ye.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=wx(new jn,d,n),r[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(t){const n=this,a=this.json,r=this.extensions,c=a.meshes[t],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?OC(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let y=0,b=g.length;y<b;y++){const T=g[y],M=u[y];let x;const C=d[y];if(M.mode===Ai.TRIANGLES||M.mode===Ai.TRIANGLE_STRIP||M.mode===Ai.TRIANGLE_FAN||M.mode===void 0)x=c.isSkinnedMesh===!0?new iE(T,C):new Bn(T,C),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),M.mode===Ai.TRIANGLE_STRIP?x.geometry=bx(x.geometry,Wx):M.mode===Ai.TRIANGLE_FAN&&(x.geometry=bx(x.geometry,Np));else if(M.mode===Ai.LINES)x=new iy(T,C);else if(M.mode===Ai.LINE_STRIP)x=new lm(T,C);else if(M.mode===Ai.LINE_LOOP)x=new cE(T,C);else if(M.mode===Ai.POINTS)x=new uE(T,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(x.geometry.morphAttributes).length>0&&IC(x,c),x.name=n.createUniqueName(c.name||"mesh_"+t),Qi(x,c),M.extensions&&Ys(r,x,M),n.assignFinalMaterial(x),_.push(x)}for(let y=0,b=_.length;y<b;y++)n.associations.set(_[y],{meshes:t,primitives:y});if(_.length===1)return c.extensions&&Ys(r,_[0],c),_[0];const v=new Na;c.extensions&&Ys(r,v,c),n.associations.set(v,{meshes:t});for(let y=0,b=_.length;y<b;y++)v.add(_[y]);return v})}loadCamera(t){let n;const a=this.json.cameras[t],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Wn(Rl.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Vl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Qi(n,a),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new pe;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new sm(h,p)})}loadAnimation(t){const n=this.json,a=this,r=n.animations[t],c=r.name?r.name:"animation_"+t,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const y=r.channels[_],b=r.samplers[y.sampler],T=y.target,M=T.node,x=r.parameters!==void 0?r.parameters[b.input]:b.input,C=r.parameters!==void 0?r.parameters[b.output]:b.output;T.node!==void 0&&(u.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",x)),p.push(this.getDependency("accessor",C)),d.push(b),g.push(T))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],y=_[1],b=_[2],T=_[3],M=_[4],x=[];for(let D=0,L=v.length;D<L;D++){const O=v[D],B=y[D],P=b[D],Y=T[D],A=M[D];if(O===void 0)continue;O.updateMatrix&&O.updateMatrix();const N=a._createAnimationTracks(O,B,P,Y,A);if(N)for(let G=0;G<N.length;G++)x.push(N[G])}const C=new ME(c,void 0,x);return Qi(C,r),C})}createNodeMesh(t){const n=this.json,a=this,r=n.nodes[t];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=r.weights.length;p<d;p++)h.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(t){const n=this.json,a=this,r=n.nodes[t],c=a._loadNodeShallow(t),u=[],h=r.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(v,zC)});for(let y=0,b=_.length;y<b;y++)g.add(_[y]);return g})}_loadNodeShallow(t){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const c=n.nodes[t],u=c.name?r.createUniqueName(c.name):"",h=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(t)});return p&&h.push(p),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(d){return r._getNodeRef(r.cameraCache,c.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(t)}).forEach(function(d){h.push(d)}),this.nodeCache[t]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new ny:d.length>1?g=new Na:d.length===1?g=d[0]:g=new nn,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),Qi(g,c),c.extensions&&Ys(a,g,c),c.matrix!==void 0){const _=new pe;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=t,g}),this.nodeCache[t]}loadScene(t){const n=this.extensions,a=this.json.scenes[t],r=this,c=new Na;a.name&&(c.name=r.createUniqueName(a.name)),Qi(c,a),a.extensions&&Ys(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(r.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++)c.add(p[g]);const d=g=>{const _=new Map;for(const[v,y]of r.associations)(v instanceof pi||v instanceof En)&&_.set(v,y);return g.traverse(v=>{const y=r.associations.get(v);y!=null&&_.set(v,y)}),_};return r.associations=d(c),c})}_createAnimationTracks(t,n,a,r,c){const u=[],h=t.name?t.name:t.uuid,p=[];vs[c.path]===vs.weights?t.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(h);let d;switch(vs[c.path]){case vs.weights:d=uo;break;case vs.rotation:d=ho;break;case vs.translation:case vs.scale:d=fo;break;default:a.itemSize===1?d=uo:d=fo;break}const g=r.interpolation!==void 0?UC[r.interpolation]:Ul,_=this._getArrayFromAccessor(a);for(let v=0,y=p.length;v<y;v++){const b=new d(p[v]+"."+vs[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),u.push(b)}return u}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){const a=Vp(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(a){const r=this instanceof ho?NC:vy;return new r(this.times,this.values,this.getValueSize()/3,a)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VC(o,t,n){const a=t.attributes,r=new za;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(r.set(new X(p[0],p[1],p[2]),new X(d[0],d[1],d[2])),h.normalized){const g=Vp(no[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=t.targets;if(c!==void 0){const h=new X,p=new X;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],y=v.min,b=v.max;if(y!==void 0&&b!==void 0){if(p.setX(Math.max(Math.abs(y[0]),Math.abs(b[0]))),p.setY(Math.max(Math.abs(y[1]),Math.abs(b[1]))),p.setZ(Math.max(Math.abs(y[2]),Math.abs(b[2]))),v.normalized){const T=Vp(no[v.componentType]);p.multiplyScalar(T)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new sa;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function wx(o,t,n){const a=t.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){o.setAttribute(h,p)})}for(const u in a){const h=Hp[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(t.indices!==void 0&&!o.index){const u=n.getDependency("accessor",t.indices).then(function(h){o.setIndex(h)});r.push(u)}return Te.workingColorSpace!==qn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Te.workingColorSpace}" not supported.`),Qi(o,t),VC(o,t,n),Promise.all(r).then(function(){return t.targets!==void 0?PC(o,t.targets,n):o})}class na{constructor(t,n,a,r,c="div"){this.parent=t,this.object=n,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),na.nextNameID=na.nextNameID||0,this.$name.id="lil-gui-name-"+ ++na.nextNameID,this.$widget=document.createElement(c),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class GC extends na{constructor(t,n,a){super(t,n,a,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Gp(o){let t,n;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!n&&"#"+n}const kC={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Gp,toHexString:Gp},Il={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},XC={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,n=1){const a=Il.fromHexString(o);t[0]=(a>>16&255)/255*n,t[1]=(a>>8&255)/255*n,t[2]=(255&a)/255*n},toHexString:([o,t,n],a=1)=>Il.toHexString(o*(a=255/a)<<16^t*a<<8^n*a<<0)},WC={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,n=1){const a=Il.fromHexString(o);t.r=(a>>16&255)/255*n,t.g=(a>>8&255)/255*n,t.b=(255&a)/255*n},toHexString:({r:o,g:t,b:n},a=1)=>Il.toHexString(o*(a=255/a)<<16^t*a<<8^n*a<<0)},YC=[kC,Il,XC,WC];class qC extends na{constructor(t,n,a,r){var c;super(t,n,a,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(c=this.initialValue,YC.find(u=>u.match(c))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=Gp(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Hd extends na{constructor(t,n,a){super(t,n,a,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class jC extends na{constructor(t,n,a,r,c,u){super(t,n,a,"number"),this._initInput(),this.min(r),this.max(c);const h=u!==void 0;this.step(h?u:this._getImplicitStep(),h),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=100*n+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=g=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+g),this.$input.value=this.getValue())};let n,a,r,c,u,h=!1;const p=g=>{if(h){const _=g.clientX-n,v=g.clientY-a;Math.abs(v)>5?(g.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>5&&d()}if(!h){const _=g.clientY-r;u-=_*this._step*this._arrowKeyMultiplier(g),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}r=g.clientY},d=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",d)};this.$input.addEventListener("input",()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))}),this.$input.addEventListener("keydown",g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))}),this.$input.addEventListener("wheel",g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))},{passive:!1}),this.$input.addEventListener("mousedown",g=>{n=g.clientX,a=r=g.clientY,h=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",d)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=v=>{const y=this.$slider.getBoundingClientRect();let b=(T=v,M=y.left,x=y.right,C=this._min,D=this._max,(T-M)/(x-M)*(D-C)+C);var T,M,x,C,D;this._snapClampSetValue(b)},n=v=>{t(v.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a)};let r,c,u=!1;const h=v=>{v.preventDefault(),this._setDraggingStyle(!0),t(v.touches[0].clientX),u=!1},p=v=>{if(u){const y=v.touches[0].clientX-r,b=v.touches[0].clientY-c;Math.abs(y)>Math.abs(b)?h(v):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",d))}else v.preventDefault(),t(v.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",d)},g=this._callOnFinishChange.bind(this);let _;this.$slider.addEventListener("mousedown",v=>{this._setDraggingStyle(!0),t(v.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",a)}),this.$slider.addEventListener("touchstart",v=>{v.touches.length>1||(this._hasScrollBar?(r=v.touches[0].clientX,c=v.touches[0].clientY,u=!0):h(v),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",d))},{passive:!1}),this.$slider.addEventListener("wheel",v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const y=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(g,400)},{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+n,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),n+-a}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){const n=Math.round(t/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class KC extends na{constructor(t,n,a,r){super(t,n,a,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(c=>{const u=document.createElement("option");u.innerHTML=c,this.$select.appendChild(u)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?t:this._names[n],this}}class ZC extends na{constructor(t,n,a){super(t,n,a,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Rx=!1;class gm{constructor({parent:t,autoPlace:n=t===void 0,container:a,width:r,title:c="Controls",injectStyles:u=!0,touchStyles:h=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{p.code!=="Enter"&&p.code!=="Space"||(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(c),h&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Rx&&u&&((function(p){const d=document.createElement("style");d.innerHTML=p;const g=document.querySelector("head link[rel=stylesheet], head style");g?document.head.insertBefore(d,g):document.head.appendChild(d)})('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Rx=!0),a?a.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",p=>p.stopPropagation()),this.domElement.addEventListener("keyup",p=>p.stopPropagation())}add(t,n,a,r,c){if(Object(a)===a)return new KC(this,t,n,a);const u=t[n];switch(typeof u){case"number":return new jC(this,t,n,a,r,c);case"boolean":return new GC(this,t,n);case"string":return new ZC(this,t,n);case"function":return new Hd(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,u)}addColor(t,n,a=1){return new qC(this,t,n,a)}addFolder(t){return new gm({parent:this,title:t})}load(t,n=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof Hd||a._name in t.controllers&&a.load(t.controllers[a._name])}),n&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof Hd)){if(a._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);n.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);n.folders[a._title]=a.save()}),n}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const a=c=>{c.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}const QC=`uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec4 resolution;
uniform float pixelSize;
uniform int toonSteps;
uniform float toonSoftness;

varying vec2 vUv;

// Toon shading functions
float getLuminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
}

vec3 applyToonShading(vec3 color, int steps, float softness) {
    float lum = getLuminance(color);
    
    float numSteps = max(float(steps), 2.0);
    float stepSize = 1.0 / numSteps;
    
    float stepIndex = floor(lum / stepSize);
    float lowerStep = stepIndex * stepSize;
    float upperStep = (stepIndex + 1.0) * stepSize;
    
    float stepPos = (lum - lowerStep) / stepSize;
    
    float smoothRange = clamp(softness, 0.0, 1.0);
    float smoothed = smoothstep(0.5 - smoothRange * 0.5, 0.5 + smoothRange * 0.5, stepPos);
    
    // Clamp so we never go pure black
    float finalLum = mix(lowerStep, upperStep, smoothed);
    finalLum = max(finalLum, 0.02);
    
    vec3 steppedColor = color * (finalLum / max(lum, 0.001));
    
    float colorPreservation = 0.3;
    return mix(steppedColor, color, colorPreservation * stepPos);
}

// Edge detection
float getDepth(int x, int y) {
    return texture2D(tDepth, vUv + vec2(x, y) * resolution.zw).r;
}

vec3 getNormal(int x, int y) {
    return texture2D(tNormal, vUv + vec2(x, y) * resolution.zw).rgb * 2.0 - 1.0;
}

float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {
    float depthDiff = getDepth(x, y) - depth;
    vec3 normalEdgeBias = vec3(1., 1., 1.);
    float normalDiff = dot(normal - getNormal(x, y), normalEdgeBias);
    float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);
    float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);
    return distance(normal, getNormal(x, y)) * depthIndicator * normalIndicator;
}

float depthEdgeIndicator() {
    float depth = getDepth(0, 0);
    float diff = 0.0;
    diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
    diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
    diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
    diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
    return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;
}

float normalEdgeIndicator() {
    float depth = getDepth(0, 0);
    vec3 normal = getNormal(0, 0);
    float indicator = 0.0;
    indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
    indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
    indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
    indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);
    return step(0.1, indicator);
}

float lum(vec4 color) {
    vec4 weights = vec4(.2126, .7152, .0722, .0);
    return dot(color, weights);
}

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    
    // Apply toon shading to the original color first
    vec3 toonColor = applyToonShading(texel.rgb, toonSteps, toonSoftness);
    
    // Calculate edge detection
    float normalEdgeCoefficient = .3;
    float depthEdgeCoefficient = .4;
    float dei = depthEdgeIndicator();
    float nei = normalEdgeIndicator();
    
    // Apply edges as darkening - edges should be pure black
    float coefficient = dei > 0.0 ? (1.0 - depthEdgeCoefficient * dei) : (1.0 + normalEdgeCoefficient * nei);
    
    // Mix between toon color and black based on edge strength
    vec3 finalColor = toonColor * coefficient;
    
    gl_FragColor = vec4(finalColor, texel.a);
}`,JC=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;class $C extends nC{fsQuad;resolution;scene;camera;rgbRenderTarget;normalRenderTarget;normalMaterial;pixelSize;toonSteps;toonSoftness;gui;constructor(t,n,a,r){super(),this.resolution=t,this.pixelSize=r.pixelSize,this.toonSteps=r.toonSteps,this.toonSoftness=r.toonSoftness,this.fsQuad=new rC(this.material()),this.scene=n,this.camera=a,this.rgbRenderTarget=Au(t,ni,!0),this.normalRenderTarget=Au(t,Pu,!1),this.normalMaterial=new pE}createGUI(t){const n=t?t.addFolder("Pixelated + Toon"):new gm;return n.add(this,"pixelSize",.1,2,.01).name("Pixel Size").onChange(()=>this.updateUniforms()),n.add(this,"toonSteps",2,10,1).name("Toon Steps").onChange(()=>this.updateUniforms()),n.add(this,"toonSoftness",0,.3,.01).name("Toon Softness").onChange(()=>this.updateUniforms()),t||n.open(),this.gui=n,n}updateUniforms(){const t=this.fsQuad.material.uniforms;t.pixelSize.value=this.pixelSize,t.toonSteps.value=this.toonSteps,t.toonSoftness.value=this.toonSoftness}render(t){this.updateRenderTargets(),t.setRenderTarget(this.rgbRenderTarget),t.render(this.scene,this.camera),t.setRenderTarget(this.normalRenderTarget);const n=[],a=[];this.scene.traverse(u=>{u.isGrass&&(n.push(u),u.visible=!1),u.isLightning&&(a.push(u),u.visible=!1)});const r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=r,n.forEach(u=>u.visible=!0),a.forEach(u=>u.visible=!0);const c=this.fsQuad.material.uniforms;c.tDiffuse.value=this.rgbRenderTarget.texture,c.tDepth.value=this.rgbRenderTarget.depthTexture,c.tNormal.value=this.normalRenderTarget.texture,this.updateUniforms(),t.setRenderTarget(null),this.fsQuad.render(t)}lastPixelSize=0;updateRenderTargets(){if(this.lastPixelSize===this.pixelSize)return;this.lastPixelSize=this.pixelSize;const t=new $t(Math.floor(this.resolution.x/this.pixelSize),Math.floor(this.resolution.y/this.pixelSize));this.rgbRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.rgbRenderTarget=Au(t,ni,!0),this.normalRenderTarget=Au(t,Pu,!1),this.fsQuad.material.uniforms.resolution.value.set(t.x,t.y,1/t.x,1/t.y)}material(){return new ki({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Ze(this.resolution.x,this.resolution.y,1/this.resolution.x,1/this.resolution.y)},pixelSize:{value:this.pixelSize},toonSteps:{value:this.toonSteps},toonSoftness:{value:this.toonSoftness}},vertexShader:JC,fragmentShader:QC})}dispose(){this.gui?.destroy(),this.rgbRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.fsQuad.dispose()}}function Au(o,t,n){const a=new Vi(o.x,o.y,n?{depthTexture:new co(o.x,o.y),depthBuffer:!0}:void 0);return a.texture.format=t,a.texture.minFilter=ke,a.texture.magFilter=ke,a.texture.generateMipmaps=!1,a.stencilBuffer=!1,a}class Cx{loader;gltf;constructor(){this.loader=new oC}async load(t){return new Promise((n,a)=>{this.loader.load(t,r=>{this.gltf=r,n()},r=>{},r=>{console.error("Error loading model:",r),a(r)})})}getChildModel(t=0){const n=[];return this.gltf.scene.traverse(a=>{a.isMesh&&n.push(a)}),n[t].clone()}static convertToToonMaterial(t,n){t.traverse(a=>{if(a instanceof Bn&&a.isMesh){const c=(Array.isArray(a.material)?a.material:[a.material]).map(u=>{const h=new Vu({color:n,map:u.map||null});return u.dispose(),h});a.material=Array.isArray(a.material)?c:c[0]}})}}class t2{instancedMesh;accentMesh;material;accentMaterial;dummy=new nn;loader=new cy;time=0;grassTexturePath;accentGrassTexturePath;count;areaSize;groundY;minHeight;maxHeight;accentGrassRatio;windStrength;windDirection;groundColors;accentColor;constructor(t){this.assignParams(t);const n=new po(.6,1.5);n.translate(0,.5,0);const a=this.loader.load(this.grassTexturePath,u=>{u.magFilter=ke,u.minFilter=ke,u.generateMipmaps=!1,this.material.needsUpdate=!0});a.magFilter=ke,a.minFilter=ke,a.generateMipmaps=!1,this.material=new Vu({alphaMap:a,transparent:!0,alphaTest:.5,side:wi}),this.setupMaterialShader(this.material,!1);const r=Math.floor(this.count*this.accentGrassRatio),c=this.count-r;this.instancedMesh=new Pp(n,this.material,c),this.instancedMesh.castShadow=!1,this.instancedMesh.receiveShadow=!0,this.instancedMesh.isGrass=!0,this.setupInstances(this.instancedMesh,c,this.areaSize,this.groundY,this.minHeight,this.maxHeight),this.setupAccentGrass(r,n)}assignParams(t){this.grassTexturePath=t.grassTexturePath,this.accentGrassTexturePath=t.accentGrassTexturePath,this.count=t.count,this.areaSize=t.areaSize,this.groundY=t.groundY,this.minHeight=t.minHeight,this.maxHeight=t.maxHeight,this.accentGrassRatio=t.accentGrassRatio,this.windStrength=t.windStrength,this.windDirection=t.windDirection,this.groundColors=t.groundColors,this.accentColor=t.accentColor}setupAccentGrass(t,n){const a=this.loader.load(this.accentGrassTexturePath,r=>{r.magFilter=ke,r.minFilter=ke,r.generateMipmaps=!1,this.accentMaterial&&(this.accentMaterial.needsUpdate=!0)});a.magFilter=ke,a.minFilter=ke,a.generateMipmaps=!1,this.accentMaterial=new Vu({color:this.accentColor,alphaMap:a,transparent:!0,alphaTest:.5,side:wi}),this.setupMaterialShader(this.accentMaterial,!0),this.accentMesh=new Pp(n,this.accentMaterial,t),this.accentMesh.castShadow=!1,this.accentMesh.receiveShadow=!0,this.accentMesh.isGrass=!0,this.setupInstances(this.accentMesh,t,this.areaSize,this.groundY,this.minHeight*1,this.maxHeight*2)}setupMaterialShader(t,n){t.onBeforeCompile=a=>{a.uniforms.cameraPos={value:new X},a.uniforms.time={value:0},a.uniforms.windStrength={value:this.windStrength},a.uniforms.windDirection={value:this.windDirection},a.uniforms.isAccent={value:n?1:0},a.uniforms.noiseScale={value:.05},a.uniforms.octaves={value:4},a.uniforms.persistence={value:.5},a.uniforms.color1={value:this.groundColors[0]},a.uniforms.color2={value:this.groundColors[1]},a.uniforms.color3={value:this.groundColors[2]},t.userData.shader=a,a.vertexShader=a.vertexShader.replace("void main() {",`
        uniform vec3 cameraPos;
        uniform float time;
        uniform float windStrength;
        uniform vec2 windDirection;
        uniform float noiseScale;
        uniform float octaves;
        uniform float persistence;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float isAccent;
        
        varying vec3 vGroundColor;
        
        // Hash function for noise
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        // Single octave noise
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        // Multi-octave fractal noise
        float fbm(vec2 p, float octaves, float persistence) {
            float value = 0.0;
            float amplitude = 1.0;
            float frequency = 1.0;
            float maxValue = 0.0;
            
            for (float i = 0.0; i < 8.0; i++) {
                if (i >= octaves) break;
                
                value += noise(p * frequency) * amplitude;
                maxValue += amplitude;
                
                amplitude *= persistence;
                frequency *= 2.0;
            }
            
            return value / maxValue;
        }
        
        void main() {
        `),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",`
        // Get instance world position (base of grass)
        vec3 instanceWorldPos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        
        // Sample ground color using multi-octave noise (same as ground)
        float noiseValue = fbm(instanceWorldPos.xz * noiseScale, octaves, persistence);
        
        // Add detail noise
        float detailNoise = noise(instanceWorldPos.xz * noiseScale * 5.0) * 0.1;
        noiseValue = clamp(noiseValue + detailNoise, 0.0, 1.0);
        
        // Apply power curve
        float adjustedNoise = pow(noiseValue, 0.9);
        
        // Blend between 3 colors (same logic as ground)
        vec3 groundColor;
        if (adjustedNoise < 0.4) {
            float t = adjustedNoise / 0.4;
            groundColor = mix(color1, color2, smoothstep(0.0, 1.0, t));
        } else if (adjustedNoise < 0.7) {
            float t = (adjustedNoise - 0.4) / 0.3;
            groundColor = mix(color2, color3, smoothstep(0.0, 1.0, t));
        } else {
            float t = (adjustedNoise - 0.7) / 0.3;
            vec3 highlight = mix(color3, color2 * 1.15, t * 0.2);
            groundColor = highlight;
        }
        
        // For accent grass, apply a color shift to make it stand out
        if (isAccent > 0.5) {
            // Make accent grass more yellow/golden with higher saturation
            vec3 accentShift = vec3(0.3, 0.3, -0.1); // More yellow, less blue
            groundColor = clamp(groundColor + accentShift, 0.0, 1.0);
            groundColor *= 1.2; // Slightly brighter
        }
        
        vGroundColor = groundColor;
        
        // Calculate billboard vectors
        vec3 lookDir = normalize(cameraPos - instanceWorldPos);
        vec3 upDir = vec3(0.0, 1.0, 0.0);
        vec3 rightDir = normalize(cross(upDir, lookDir));
        vec3 forwardDir = cross(rightDir, upDir);
        
        // Build billboard basis
        mat3 billboardBasis = mat3(rightDir, upDir, forwardDir);
        
        // Get instance scale from matrix
        vec3 instanceScale = vec3(
          length(instanceMatrix[0].xyz),
          length(instanceMatrix[1].xyz),
          length(instanceMatrix[2].xyz)
        );
        
        // Wind animation - Calculate wind displacement based on height
        // Height factor: 0 at base (y=0), 1 at top (y=1.5 after scaling)
        float normalizedHeight = position.y / 1.5;
        float heightFactor = normalizedHeight * normalizedHeight; // Square for more natural bend
        
        // Use instance position as phase offset for variation
        float windPhase = instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3;
        float windTime = time + windPhase;
        
        // Multi-octave wind waves for natural movement
        float windWave1 = sin(windTime * 2.0 + instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3);
        float windWave2 = sin(windTime * 3.0 + instanceWorldPos.x * 0.8 + instanceWorldPos.z * 0.6) * 0.5;
        float windWave3 = sin(windTime * 5.0 + instanceWorldPos.x * 1.2) * 0.3;
        
        float windAmount = (windWave1 + windWave2 + windWave3) * windStrength * heightFactor;
        
        // Accent grass moves slightly more in the wind
        if (isAccent > 0.5) {
            windAmount *= 1.3;
        }
        
        // Apply wind displacement to LOCAL position BEFORE billboarding
        // This makes the grass bend from the base like a real blade of grass
        vec3 windDisplacement = vec3(
            windDirection.x * windAmount,
            -abs(windAmount) * 0.15 * heightFactor, // Slight droop when bending
            windDirection.y * windAmount
        );
        
        // Apply wind to position, then scale, THEN billboard
        vec3 displacedPosition = position + windDisplacement;
        vec3 scaledPosition = displacedPosition * vec3(instanceScale.x, instanceScale.y, instanceScale.x);
        vec3 billboardedPos = billboardBasis * scaledPosition;
        
        // Final world position
        vec3 finalWorldPos = instanceWorldPos + billboardedPos;
        
        // Transform to view space
        vec4 mvPosition = viewMatrix * vec4(finalWorldPos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        `),a.fragmentShader=a.fragmentShader.replace("void main() {",`
        varying vec3 vGroundColor;
        void main() {
        `),a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        // Modulate grass color with ground color beneath it
        diffuseColor.rgb *= vGroundColor;
        `),a.vertexShader=a.vertexShader.replace("#include <defaultnormal_vertex>",`
        // Force flat upward normal
        vec3 transformedNormal = normalMatrix * vec3(0.0, 1.0, 0.0);
        `),a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`
        vec3 objectNormal = vec3(0.0, 1.0, 0.0);
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(1.0, 0.0, 0.0);
        #endif
        `),a.vertexShader=a.vertexShader.replace("#include <shadowmap_vertex>",`
        #ifdef USE_SHADOWMAP
          #if NUM_DIR_LIGHT_SHADOWS > 0
            // Use instance origin for shadow calculation
            vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * worldOrigin;
          #endif
        #endif
        `)}}setupInstances(t,n,a,r,c,u){for(let h=0;h<n;h++){const p=(Math.random()-.5)*a,d=(Math.random()-.5)*a,g=c+Math.random()*(u-c),_=Math.random()*Math.PI*2;this.dummy.position.set(p,r,d),this.dummy.rotation.y=_,this.dummy.scale.set(1,g,1),this.dummy.updateMatrix(),t.setMatrixAt(h,this.dummy.matrix)}t.instanceMatrix.needsUpdate=!0}update(t,n){n!==void 0&&(this.time+=n);const a=this.material.userData.shader;if(a&&(a.uniforms.cameraPos&&a.uniforms.cameraPos.value.copy(t.position),a.uniforms.time&&(a.uniforms.time.value=this.time)),this.accentMaterial){const r=this.accentMaterial.userData.shader;r&&(r.uniforms.cameraPos&&r.uniforms.cameraPos.value.copy(t.position),r.uniforms.time&&(r.uniforms.time.value=this.time))}}setWindStrength(t){this.windStrength=t;const n=a=>{a&&a.uniforms.windStrength&&(a.uniforms.windStrength.value=t)};n(this.material.userData.shader),this.accentMaterial&&n(this.accentMaterial.userData.shader)}setWindDirection(t){this.windDirection.copy(t);const n=a=>{a&&a.uniforms.windDirection&&a.uniforms.windDirection.value.copy(t)};n(this.material.userData.shader),this.accentMaterial&&n(this.accentMaterial.userData.shader)}getMesh(){return this.instancedMesh}getMeshes(){const t=[this.instancedMesh];return this.accentMesh&&t.push(this.accentMesh),t}dispose(){this.instancedMesh.geometry.dispose(),this.material.dispose(),this.accentMesh&&this.accentMesh.geometry.dispose(),this.accentMaterial&&this.accentMaterial.dispose()}}class e2{bolts=[];group=new Na;boltsPerSecond;boltLifetime;maxBolts;boltLength;segmentsPerBolt;branchProbability;animationSpeed;color;glowColor;emissionSource=new X;targets=[new X(3,8,-2),new X(3,6,-2),new X(3,2,-2),new X(-2,9,3),new X(-2,7,3),new X(-2,3,3),new X(0,-2,0),new X(-2,-2,2),new X(2,-2,-2)];emissionAccumulator=0;constructor(t){this.assignParams(t),this.group=new Na,this.group.isLightning=!0}assignParams(t){this.boltsPerSecond=t.boltsPerSecond,this.boltLifetime=t.boltLifetime,this.maxBolts=t.maxBolts,this.boltLength=t.boltLength,this.segmentsPerBolt=t.segmentsPerBolt,this.branchProbability=t.branchProbability,this.animationSpeed=t.animationSpeed,this.color=t.color,this.glowColor=t.glowColor}setEmissionSource(t){this.emissionSource.copy(t)}update(t){this.emissionAccumulator+=t*this.boltsPerSecond;const n=Math.floor(this.emissionAccumulator);this.emissionAccumulator-=n;for(let a=0;a<n;a++)this.bolts.length<this.maxBolts&&this.emitBolt();for(let a=this.bolts.length-1;a>=0;a--){const r=this.bolts[a];if(r.age+=t,r.progress+=t/r.lifetime*this.animationSpeed,r.age>=r.lifetime){this.group.remove(r.line),r.line.geometry.dispose(),r.line.material.dispose(),this.bolts.splice(a,1);continue}this.updateBoltGeometry(r)}}emitBolt(){const t=[],n=[];let a=this.emissionSource.clone();t.push(a.clone());const r=this.targets[Math.floor(Math.random()*this.targets.length)],c=r.clone().sub(a).normalize(),h=(r?a.distanceTo(r):this.boltLength)/this.segmentsPerBolt;for(let _=0;_<this.segmentsPerBolt;_++){if(r&&_===this.segmentsPerBolt-1)a=r.clone();else{const v=new X((Math.random()-.5)*h*1.2,(Math.random()-.5)*h*.6,(Math.random()-.5)*h*1.2);a=a.clone().add(c.clone().multiplyScalar(h)).add(v)}t.push(a.clone()),Math.random()<this.branchProbability&&_>1&&_<this.segmentsPerBolt-2&&n.push(this.createBranch(a,c,h))}const p=new jn,d=new om({color:this.color,transparent:!0,blending:Gd,depthWrite:!1}),g=new iy(p,d);this.group.add(g),this.bolts.push({segments:t,branches:n,age:0,lifetime:this.boltLifetime*(.8+Math.random()*.4),progress:0,line:g})}updateBoltGeometry(t){const n=Math.floor(t.progress*t.segments.length),a=[],r=d=>{for(let g=0;g<d.length-1;g++)a.push(d[g].x,d[g].y,d[g].z,d[g+1].x,d[g+1].y,d[g+1].z)};r(t.segments.slice(0,n));for(const d of t.branches)r(d);t.line.geometry.setAttribute("position",new In(a,3)),t.line.geometry.computeBoundingSphere();const c=t.age/t.lifetime,u=Math.max(0,1-c*2),h=this.glowColor.clone().lerp(this.color,c),p=t.line.material;p.color.copy(h),p.opacity=1-c+u*.5}createBranch(t,n,a){const r=[t.clone()];let c=t.clone();const u=n.clone().applyAxisAngle(new X(0,1,0),(Math.random()-.5)*Math.PI*.6).normalize(),h=Math.floor(this.segmentsPerBolt*.3);for(let p=0;p<h;p++){const d=new X((Math.random()-.5)*a,(Math.random()-.5)*a,(Math.random()-.5)*a);c=c.clone().add(u.clone().multiplyScalar(a*.8)).add(d),r.push(c.clone())}return r}getGroup(){return this.group}dispose(){this.bolts.forEach(t=>{t.line.geometry.dispose(),t.line.material.dispose()}),this.bolts.length=0}}class n2{camera;controls;horizontalAngle;verticalAngle;distance;target;constructor(t,n={}){const{fov:a=50,aspect:r=window.innerWidth/window.innerHeight,near:c=.1,far:u=5e3,horizontalAngle:h=45,verticalAngle:p=35,distance:d=10,target:g=new X(0,0,0)}=n;this.camera=new Wn(a,r,c,u),this.horizontalAngle=h,this.verticalAngle=p,this.distance=d,this.target=g,this.updatePosition(),this.camera.lookAt(this.target),this.setupOrbitControls(t)}setAngle(t,n){this.horizontalAngle=t,this.verticalAngle=n,this.updatePosition()}setDistance(t){this.distance=t,this.updatePosition()}setTarget(t){this.target.copy(t),this.camera.lookAt(this.target),this.controls.target.copy(this.target)}setupOrbitControls(t){this.controls=new kR(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.target.copy(this.target)}updatePosition(){const t=this.horizontalAngle*(Math.PI/180),n=this.verticalAngle*(Math.PI/180);this.camera.position.set(this.distance*Math.cos(n)*Math.cos(t),this.distance*Math.sin(n),this.distance*Math.cos(n)*Math.sin(t)),this.camera.lookAt(this.target)}update(){this.controls.update()}onResize(t,n){this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose()}}class i2 extends Vu{constructor(t){const n=t.color1,a=t.color2,r=t.color3,c=t.noiseScale,u=t.octaves,h=t.persistence;super({color:a}),this.onBeforeCompile=p=>{p.uniforms.color1={value:n},p.uniforms.color2={value:a},p.uniforms.color3={value:r},p.uniforms.noiseScale={value:c},p.uniforms.octaves={value:u},p.uniforms.persistence={value:h},p.vertexShader=p.vertexShader.replace("void main() {",`
        varying vec3 vWorldPosition;
        void main() {
        `),p.vertexShader=p.vertexShader.replace("#include <worldpos_vertex>",`
        #include <worldpos_vertex>
        vWorldPosition = worldPosition.xyz;
        `),p.fragmentShader=p.fragmentShader.replace("void main() {",`
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float noiseScale;
        uniform float octaves;
        uniform float persistence;
        varying vec3 vWorldPosition;
        
        // Hash function for noise
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        // Single octave noise
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            
            // Smooth interpolation
            f = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        // Multi-octave fractal noise (FBM - Fractional Brownian Motion)
        float fbm(vec2 p, float octaves, float persistence) {
            float value = 0.0;
            float amplitude = 1.0;
            float frequency = 1.0;
            float maxValue = 0.0;
            
            for (float i = 0.0; i < 8.0; i++) {
                if (i >= octaves) break;
                
                value += noise(p * frequency) * amplitude;
                maxValue += amplitude;
                
                amplitude *= persistence;
                frequency *= 2.0;
            }
            
            return value / maxValue;
        }
        
        void main() {
        `),p.fragmentShader=p.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        
        // Sample multi-octave noise
        float noiseValue = fbm(vWorldPosition.xz * noiseScale, octaves, persistence);
        
        // Add some variation to break up patterns
        float detailNoise = noise(vWorldPosition.xz * noiseScale * 5.0) * 0.1;
        noiseValue = clamp(noiseValue + detailNoise, 0.0, 1.0);
        
        // Blend between 3 colors with smoother transitions
        vec3 toneColor;
        
        // Use power curve for more natural distribution
        float adjustedNoise = pow(noiseValue, 0.9);
        
        if (adjustedNoise < 0.4) {
            // Darker regions
            float t = adjustedNoise / 0.4;
            toneColor = mix(color1, color2, smoothstep(0.0, 1.0, t));
        } else if (adjustedNoise < 0.7) {
            // Medium regions
            float t = (adjustedNoise - 0.4) / 0.3;
            toneColor = mix(color2, color3, smoothstep(0.0, 1.0, t));
        } else {
            // Lighter regions with subtle darkening at extremes
            float t = (adjustedNoise - 0.7) / 0.3;
            vec3 highlight = mix(color3, color2 * 1.15, t * 0.2);
            toneColor = highlight;
        }
        
        // Apply the tone variation to diffuse color
        diffuseColor.rgb *= toneColor / color2;
        `),this.userData.shader=p}}}class a2{scene;pixelCamera;renderer;pixelPass;shape;shapeLight;ground;grassSystem;lightningSystem;pillar;pixelResolution=new $t(320,180);pixelSize=.45;toonSoftness=.05;toonSteps=8;crystalColor=new Qt(255);pillarColor=new Qt(10526880);boltColor=new Qt(43775);boltGlowColor=new Qt(13431039);groundColor1=new Qt(4881454);groundColor2=new Qt(6600752);groundColor3=new Qt(8245550);accentColor=new Qt(2274594);grassCount=25e3;grassArea=65;noiseScale=.05;octaves=4;persistence=.5;clock=new PE;frameId=0;constructor(t){this.setupScene(),this.setupRenderer(t),this.setupCamera(t),this.setupSceneLights(),this.setupGround(),this.setupShape(),this.setupShapeLights(),this.setupLightning(),this.setupPillar(),this.setupPixelPass(),window.addEventListener("resize",()=>this.onResize())}start(){const t=()=>{const n=this.clock.getDelta();this.animateShape(n),this.pixelCamera.update(),this.pixelCamera.controls.autoRotate=!0,this.pixelCamera.controls.autoRotateSpeed=.2,this.pixelCamera.controls.enabled=!1,this.grassSystem.update(this.pixelCamera.camera,n),this.lightningSystem.setEmissionSource(this.shape.position),this.lightningSystem.update(n),this.pixelPass.render(this.renderer),this.frameId=requestAnimationFrame(t)};t()}dispose(){cancelAnimationFrame(this.frameId),this.pixelCamera.dispose(),this.pixelPass.dispose(),this.grassSystem.dispose(),this.lightningSystem.dispose()}onResize(){const t=window.innerWidth,n=window.innerHeight;this.pixelCamera.onResize(t,n),this.renderer.setSize(t,n)}setupScene(){this.scene=new tE}setupRenderer(t){this.renderer=new VR({canvas:t,antialias:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dx,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio)}setupCamera(t){this.pixelCamera=new n2(t,{fov:50,horizontalAngle:45,verticalAngle:30,distance:40,target:new X(0,0,0)})}setupPixelPass(){const t={pixelSize:this.pixelSize,toonSoftness:this.toonSoftness,toonSteps:this.toonSteps};this.pixelPass=new $C(this.pixelResolution,this.scene,this.pixelCamera.camera,t),this.pixelPass.renderToScreen=!0}setupShape(){this.shape=new Bn(new um(.8),new dE({color:this.crystalColor,emissive:8192e3,shininess:10,specular:32255})),this.shape.receiveShadow=!0,this.shape.castShadow=!0,this.scene.add(this.shape)}animateShape(t){const a=Math.sin(this.clock.elapsedTime*1)*.5+.5,r=Rl.smoothstep(a,.1,.9),h=Rl.lerp(.5,2,r);this.shape.rotation.y+=h*t,this.shape.rotation.x+=h*.5*t,this.shape.rotation.z+=h*1.5*t;const p=1,d=1;this.shape.position.y=4.5+Math.sin(this.clock.elapsedTime*d)*p;const _=Math.max(this.shape.position.y- -1.5,.1);this.shapeLight.position.copy(this.shape.position),this.shapeLight.intensity=Rl.clamp(1/_*.5,50,150)}setupGround(){const t=new po(450,450),n=new i2({color1:this.groundColor1,color2:this.groundColor2,color3:this.groundColor3,noiseScale:this.noiseScale,octaves:this.octaves,persistence:this.persistence});this.ground=new Bn(t,n),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=-1.5,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.setupGrass()}setupGrass(){this.grassSystem=new t2({count:this.grassCount,areaSize:this.grassArea,groundY:-1.5,grassTexturePath:"src/assets/grass_leaf.png",accentGrassTexturePath:"src/assets/accent_leaf.png",accentGrassRatio:.05,minHeight:.3,maxHeight:.5,windStrength:.2,windDirection:new $t(.8,.15),groundMesh:this.ground,groundColors:[this.groundColor1,this.groundColor2,this.groundColor3],accentColor:this.accentColor}),this.grassSystem.getMeshes().forEach(n=>this.scene.add(n))}setupSceneLights(){this.scene.add(new Kv(2700877,.5));const t=new Bp(16776348,3);t.position.set(9,4,3),t.castShadow=!0,t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,t.shadow.camera.near=.1,t.shadow.camera.far=50,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.bias=-1e-4,this.scene.add(t);const n=new Bp(8956671,2.5);n.position.set(-6,2,4),this.scene.add(n);const a=new Kv(8956671,1.25);this.scene.add(a)}setupShapeLights(){this.shapeLight=new uy(43775,.5,5,1),this.shapeLight.position.copy(this.shape.position),this.scene.add(this.shapeLight)}async setupPillar(){const t=new Cx;await t.load("src/assets/stone_arch_pillars.glb");const n=t.getChildModel(5);Cx.convertToToonMaterial(n,this.pillarColor),n.castShadow=!0,n.receiveShadow=!1,n.position.set(3,-1.5,-2),n.scale.setScalar(3),n.rotation.y=Math.PI/4,this.pillar=n,this.scene.add(n)}setupLightning(){this.lightningSystem=new e2({boltsPerSecond:9,boltLifetime:.8,maxBolts:15,color:this.boltColor,glowColor:this.boltGlowColor,boltLength:2,segmentsPerBolt:5,branchProbability:.9,animationSpeed:5}),this.scene.add(this.lightningSystem.getGroup())}}function s2(){const o=Vd.useRef(null);return Vd.useEffect(()=>{if(!o.current)return;const t=new a2(o.current);return t.start(),()=>t.dispose()},[]),Jr.jsx(Jr.Fragment,{children:Jr.jsx("canvas",{ref:o,style:{width:"100vw",height:"100vh",display:"block"}})})}function r2(){return Jr.jsx(s2,{})}NM.createRoot(document.getElementById("root")).render(Jr.jsx(Vd.StrictMode,{children:Jr.jsx(r2,{})}));
