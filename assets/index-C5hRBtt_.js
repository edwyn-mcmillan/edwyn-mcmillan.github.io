(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();var nd={exports:{}},ml={};var ev;function RM(){if(ev)return ml;ev=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var h in r)h!=="key"&&(l[h]=r[h])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:l}}return ml.Fragment=e,ml.jsx=t,ml.jsxs=t,ml}var tv;function CM(){return tv||(tv=1,nd.exports=RM()),nd.exports}var gt=CM(),id={exports:{}},gl={},ad={exports:{}},sd={};var nv;function DM(){return nv||(nv=1,(function(o){function e(z,H){var ae=z.length;z.push(H);e:for(;0<ae;){var Se=ae-1>>>1,xe=z[Se];if(0<r(xe,H))z[Se]=H,z[ae]=xe,ae=Se;else break e}}function t(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var H=z[0],ae=z.pop();if(ae!==H){z[0]=ae;e:for(var Se=0,xe=z.length,I=xe>>>1;Se<I;){var ie=2*(Se+1)-1,ge=z[ie],Te=ie+1,ze=z[Te];if(0>r(ge,ae))Te<xe&&0>r(ze,ge)?(z[Se]=ze,z[Te]=ae,Se=Te):(z[Se]=ge,z[ie]=ae,Se=ie);else if(Te<xe&&0>r(ze,ae))z[Se]=ze,z[Te]=ae,Se=Te;else break e}}return H}function r(z,H){var ae=z.sortIndex-H.sortIndex;return ae!==0?ae:z.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,x=!1,b=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var H=t(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=z)a(d),H.sortIndex=H.expirationTime,e(p,H);else break;H=t(d)}}function O(z){if(T=!1,L(z),!b)if(t(p)!==null)b=!0,B||(B=!0,te());else{var H=t(d);H!==null&&ue(O,H.startTime-z)}}var B=!1,P=-1,q=5,A=-1;function N(){return M?!0:!(o.unstable_now()-A<q)}function G(){if(M=!1,B){var z=o.unstable_now();A=z;var H=!0;try{e:{b=!1,T&&(T=!1,C(P),P=-1),x=!0;var ae=v;try{t:{for(L(z),_=t(p);_!==null&&!(_.expirationTime>z&&N());){var Se=_.callback;if(typeof Se=="function"){_.callback=null,v=_.priorityLevel;var xe=Se(_.expirationTime<=z);if(z=o.unstable_now(),typeof xe=="function"){_.callback=xe,L(z),H=!0;break t}_===t(p)&&a(p),L(z)}else a(p);_=t(p)}if(_!==null)H=!0;else{var I=t(d);I!==null&&ue(O,I.startTime-z),H=!1}}break e}finally{_=null,v=ae,x=!1}H=void 0}}finally{H?te():B=!1}}}var te;if(typeof D=="function")te=function(){D(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=G,te=function(){de.postMessage(null)}}else te=function(){y(G,0)};function ue(z,H){P=y(function(){z(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ae=v;v=H;try{return z()}finally{v=ae}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ae=v;v=z;try{return H()}finally{v=ae}},o.unstable_scheduleCallback=function(z,H,ae){var Se=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Se+ae:Se):ae=Se,z){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ae+xe,z={id:g++,callback:H,priorityLevel:z,startTime:ae,expirationTime:xe,sortIndex:-1},ae>Se?(z.sortIndex=ae,e(d,z),t(p)===null&&z===t(d)&&(T?(C(P),P=-1):T=!0,ue(O,ae-Se))):(z.sortIndex=xe,e(p,z),b||x||(b=!0,B||(B=!0,te()))),z},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(z){var H=v;return function(){var ae=v;v=H;try{return z.apply(this,arguments)}finally{v=ae}}}})(sd)),sd}var iv;function LM(){return iv||(iv=1,ad.exports=DM()),ad.exports}var rd={exports:{}},ot={};var av;function NM(){if(av)return ot;av=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(I,ie,ge){this.props=I,this.context=ie,this.refs=M,this.updater=ge||b}y.prototype.isReactComponent={},y.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=y.prototype;function D(I,ie,ge){this.props=I,this.context=ie,this.refs=M,this.updater=ge||b}var L=D.prototype=new C;L.constructor=D,T(L,y.prototype),L.isPureReactComponent=!0;var O=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function A(I,ie,ge){var Te=ge.ref;return{$$typeof:o,type:I,key:ie,ref:Te!==void 0?Te:null,props:ge}}function N(I,ie){return A(I.type,ie,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function te(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ge){return ie[ge]})}var se=/\/+/g;function de(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?te(""+I.key):ie.toString(36)}function ue(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(ie){I.status==="pending"&&(I.status="fulfilled",I.value=ie)},function(ie){I.status==="pending"&&(I.status="rejected",I.reason=ie)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,ie,ge,Te,ze){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var ce=!1;if(I===null)ce=!0;else switch(ne){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(I.$$typeof){case o:case e:ce=!0;break;case g:return ce=I._init,z(ce(I._payload),ie,ge,Te,ze)}}if(ce)return ze=ze(I),ce=Te===""?"."+de(I,0):Te,O(ze)?(ge="",ce!=null&&(ge=ce.replace(se,"$&/")+"/"),z(ze,ie,ge,"",function(Fe){return Fe})):ze!=null&&(G(ze)&&(ze=N(ze,ge+(ze.key==null||I&&I.key===ze.key?"":(""+ze.key).replace(se,"$&/")+"/")+ce)),ie.push(ze)),1;ce=0;var Ce=Te===""?".":Te+":";if(O(I))for(var Ge=0;Ge<I.length;Ge++)Te=I[Ge],ne=Ce+de(Te,Ge),ce+=z(Te,ie,ge,ne,ze);else if(Ge=x(I),typeof Ge=="function")for(I=Ge.call(I),Ge=0;!(Te=I.next()).done;)Te=Te.value,ne=Ce+de(Te,Ge++),ce+=z(Te,ie,ge,ne,ze);else if(ne==="object"){if(typeof I.then=="function")return z(ue(I),ie,ge,Te,ze);throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(I,ie,ge){if(I==null)return I;var Te=[],ze=0;return z(I,Te,"","",function(ne){return ie.call(ge,ne,ze++)}),Te}function ae(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(ge){(I._status===0||I._status===-1)&&(I._status=1,I._result=ge)},function(ge){(I._status===0||I._status===-1)&&(I._status=2,I._result=ge)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var Se=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},xe={map:H,forEach:function(I,ie,ge){H(I,function(){ie.apply(this,arguments)},ge)},count:function(I){var ie=0;return H(I,function(){ie++}),ie},toArray:function(I){return H(I,function(ie){return ie})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ot.Activity=_,ot.Children=xe,ot.Component=y,ot.Fragment=t,ot.Profiler=r,ot.PureComponent=D,ot.StrictMode=a,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ot.__COMPILER_RUNTIME={__proto__:null,c:function(I){return P.H.useMemoCache(I)}},ot.cache=function(I){return function(){return I.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(I,ie,ge){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Te=T({},I.props),ze=I.key;if(ie!=null)for(ne in ie.key!==void 0&&(ze=""+ie.key),ie)!q.call(ie,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ie.ref===void 0||(Te[ne]=ie[ne]);var ne=arguments.length-2;if(ne===1)Te.children=ge;else if(1<ne){for(var ce=Array(ne),Ce=0;Ce<ne;Ce++)ce[Ce]=arguments[Ce+2];Te.children=ce}return A(I.type,ze,Te)},ot.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},ot.createElement=function(I,ie,ge){var Te,ze={},ne=null;if(ie!=null)for(Te in ie.key!==void 0&&(ne=""+ie.key),ie)q.call(ie,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(ze[Te]=ie[Te]);var ce=arguments.length-2;if(ce===1)ze.children=ge;else if(1<ce){for(var Ce=Array(ce),Ge=0;Ge<ce;Ge++)Ce[Ge]=arguments[Ge+2];ze.children=Ce}if(I&&I.defaultProps)for(Te in ce=I.defaultProps,ce)ze[Te]===void 0&&(ze[Te]=ce[Te]);return A(I,ne,ze)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(I){return{$$typeof:h,render:I}},ot.isValidElement=G,ot.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ae}},ot.memo=function(I,ie){return{$$typeof:d,type:I,compare:ie===void 0?null:ie}},ot.startTransition=function(I){var ie=P.T,ge={};P.T=ge;try{var Te=I(),ze=P.S;ze!==null&&ze(ge,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(B,Se)}catch(ne){Se(ne)}finally{ie!==null&&ge.types!==null&&(ie.types=ge.types),P.T=ie}},ot.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ot.use=function(I){return P.H.use(I)},ot.useActionState=function(I,ie,ge){return P.H.useActionState(I,ie,ge)},ot.useCallback=function(I,ie){return P.H.useCallback(I,ie)},ot.useContext=function(I){return P.H.useContext(I)},ot.useDebugValue=function(){},ot.useDeferredValue=function(I,ie){return P.H.useDeferredValue(I,ie)},ot.useEffect=function(I,ie){return P.H.useEffect(I,ie)},ot.useEffectEvent=function(I){return P.H.useEffectEvent(I)},ot.useId=function(){return P.H.useId()},ot.useImperativeHandle=function(I,ie,ge){return P.H.useImperativeHandle(I,ie,ge)},ot.useInsertionEffect=function(I,ie){return P.H.useInsertionEffect(I,ie)},ot.useLayoutEffect=function(I,ie){return P.H.useLayoutEffect(I,ie)},ot.useMemo=function(I,ie){return P.H.useMemo(I,ie)},ot.useOptimistic=function(I,ie){return P.H.useOptimistic(I,ie)},ot.useReducer=function(I,ie,ge){return P.H.useReducer(I,ie,ge)},ot.useRef=function(I){return P.H.useRef(I)},ot.useState=function(I){return P.H.useState(I)},ot.useSyncExternalStore=function(I,ie,ge){return P.H.useSyncExternalStore(I,ie,ge)},ot.useTransition=function(){return P.H.useTransition()},ot.version="19.2.3",ot}var sv;function Yp(){return sv||(sv=1,rd.exports=NM()),rd.exports}var od={exports:{}},Hn={};var rv;function UM(){if(rv)return Hn;rv=1;var o=Yp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Hn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(p,d,null,g)},Hn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Hn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Hn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Hn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Hn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Hn.requestFormReset=function(p){a.d.r(p)},Hn.unstable_batchedUpdates=function(p,d){return p(d)},Hn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.3",Hn}var ov;function OM(){if(ov)return od.exports;ov=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),od.exports=UM(),od.exports}var lv;function PM(){if(lv)return gl;lv=1;var o=LM(),e=Yp(),t=OM();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,c=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),n;if(m===c)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==c.return)s=f,c=m;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,c=m;break}if(w===c){S=!0,c=f,s=m;break}w=w.sibling}if(!S){for(w=m.child;w;){if(w===s){S=!0,s=m,c=f;break}if(w===c){S=!0,c=m,s=f;break}w=w.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var se=Symbol.for("react.client.reference");function de(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===se?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case b:return"Portal";case D:return n.displayName||"Context";case C:return(n._context.displayName||"Context")+".Consumer";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case P:return i=n.displayName||null,i!==null?i:de(n.type)||"Memo";case q:i=n._payload,n=n._init;try{return de(n(i))}catch{}}return null}var ue=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Se=[],xe=-1;function I(n){return{current:n}}function ie(n){0>xe||(n.current=Se[xe],Se[xe]=null,xe--)}function ge(n,i){xe++,Se[xe]=n.current,n.current=i}var Te=I(null),ze=I(null),ne=I(null),ce=I(null);function Ce(n,i){switch(ge(ne,i),ge(ze,n),ge(Te,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?b_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=b_(i),n=E_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ie(Te),ge(Te,n)}function Ge(){ie(Te),ie(ze),ie(ne)}function Fe(n){n.memoizedState!==null&&ge(ce,n);var i=Te.current,s=E_(i,n.type);i!==s&&(ge(ze,n),ge(Te,s))}function _t(n){ze.current===n&&(ie(Te),ie(ze)),ce.current===n&&(ie(ce),hl._currentValue=ae)}var rn,Mt;function vt(n){if(rn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);rn=i&&i[1]||"",Mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+n+Mt}var Nt=!1;function lt(n,i){if(!n||Nt)return"";Nt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(oe){var ee=oe}Reflect.construct(n,[],me)}else{try{me.call()}catch(oe){ee=oe}n.call(me.prototype)}}else{try{throw Error()}catch(oe){ee=oe}(me=n())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(oe){if(oe&&ee&&typeof oe.stack=="string")return[oe.stack,ee.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],w=m[1];if(S&&w){var F=S.split(`
`),J=w.split(`
`);for(f=c=0;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;for(;f<J.length&&!J[f].includes("DetermineComponentFrameRoot");)f++;if(c===F.length||f===J.length)for(c=F.length-1,f=J.length-1;1<=c&&0<=f&&F[c]!==J[f];)f--;for(;1<=c&&0<=f;c--,f--)if(F[c]!==J[f]){if(c!==1||f!==1)do if(c--,f--,0>f||F[c]!==J[f]){var he=`
`+F[c].replace(" at new "," at ");return n.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",n.displayName)),he}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?vt(s):""}function on(n,i){switch(n.tag){case 26:case 27:case 5:return vt(n.type);case 16:return vt("Lazy");case 13:return n.child!==i&&i!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return lt(n.type,!1);case 11:return lt(n.type.render,!1);case 1:return lt(n.type,!0);case 31:return vt("Activity");default:return""}}function V(n){try{var i="",s=null;do i+=on(n,s),s=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var tn=Object.prototype.hasOwnProperty,Rt=o.unstable_scheduleCallback,It=o.unstable_cancelCallback,qe=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,fe=o.unstable_ImmediatePriority,ve=o.unstable_UserBlockingPriority,le=o.unstable_NormalPriority,je=o.unstable_LowPriority,we=o.unstable_IdlePriority,ke=o.log,it=o.unstable_setDisableYieldValue,Me=null,be=null;function Ie(n){if(typeof ke=="function"&&it(n),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Me,n)}catch{}}var Oe=Math.clz32?Math.clz32:W,Re=Math.log,ht=Math.LN2;function W(n){return n>>>=0,n===0?32:31-(Re(n)/ht|0)|0}var Le=256,Ee=262144,Pe=4194304;function ye(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function _e(n,i,s){var c=n.pendingLanes;if(c===0)return 0;var f=0,m=n.suspendedLanes,S=n.pingedLanes;n=n.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?f=ye(c):(S&=w,S!==0?f=ye(S):s||(s=w&~n,s!==0&&(f=ye(s))))):(w=c&~m,w!==0?f=ye(w):S!==0?f=ye(S):s||(s=c&~n,s!==0&&(f=ye(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ae(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function st(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var n=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),n}function Ct(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Fn(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ni(n,i,s,c,f,m){var S=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var w=n.entanglements,F=n.expirationTimes,J=n.hiddenUpdates;for(s=S&~s;0<s;){var he=31-Oe(s),me=1<<he;w[he]=0,F[he]=-1;var ee=J[he];if(ee!==null)for(J[he]=null,he=0;he<ee.length;he++){var oe=ee[he];oe!==null&&(oe.lane&=-536870913)}s&=~me}c!==0&&jl(n,c,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(S&~i))}function jl(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-Oe(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|s&261930}function bo(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var c=31-Oe(s),f=1<<c;f&i|n[c]&i&&(n[c]|=i),s&=~f}}function ar(n,i){var s=i&-i;return s=(s&42)!==0?1:Eo(s),(s&(n.suspendedLanes|i))!==0?0:s}function Eo(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function sr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function To(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:Y_(n.type))}function ji(n,i){var s=H.p;try{return H.p=n,i()}finally{H.p=s}}var vi=Math.random().toString(36).slice(2),fn="__reactFiber$"+vi,Rn="__reactProps$"+vi,Ui="__reactContainer$"+vi,rr="__reactEvents$"+vi,or="__reactListeners$"+vi,Kl="__reactHandles$"+vi,Ao="__reactResources$"+vi,ws="__reactMarker$"+vi;function wo(n){delete n[fn],delete n[Rn],delete n[rr],delete n[or],delete n[Kl]}function ka(n){var i=n[fn];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Ui]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=L_(n);n!==null;){if(s=n[fn])return s;n=L_(n)}return i}n=s,s=n.parentNode}return null}function Xa(n){if(n=n[fn]||n[Ui]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Rs(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function Wa(n){var i=n[Ao];return i||(i=n[Ao]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(n){n[ws]=!0}var j=new Set,re={};function $(n,i){Z(n,i),Z(n+"Capture",i)}function Z(n,i){for(re[n]=i,n=0;n<i.length;n++)j.add(i[n])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Ne={};function He(n){return tn.call(Ne,n)?!0:tn.call(Be,n)?!1:De.test(n)?Ne[n]=!0:(Be[n]=!0,!1)}function Xe(n,i,s){if(He(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function et(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function We(n,i,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+c)}}function tt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ut(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nn(n,i,s){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var f=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Zt(n){if(!n._valueTracker){var i=Ut(n)?"checked":"value";n._valueTracker=nn(n,i,""+n[i])}}function Bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return n&&(c=Ut(n)?n.checked?"true":"false":n.value),n=c,n!==s?(i.setValue(n),!0):!1}function Ke(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ot=/[\n"\\]/g;function rt(n){return n.replace(Ot,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Cn(n,i,s,c,f,m,S,w){n.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.type=S:n.removeAttribute("type"),i!=null?S==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+tt(i)):n.value!==""+tt(i)&&(n.value=""+tt(i)):S!=="submit"&&S!=="reset"||n.removeAttribute("value"),i!=null?Dn(n,S,tt(i)):s!=null?Dn(n,S,tt(s)):c!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+tt(w):n.removeAttribute("name")}function ua(n,i,s,c,f,m,S,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Zt(n);return}s=s!=null?""+tt(s):"",i=i!=null?""+tt(i):s,w||i===n.value||(n.value=i),n.defaultValue=i}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=w?n.checked:!!c,n.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(n.name=S),Zt(n)}function Dn(n,i,s){i==="number"&&Ke(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function xi(n,i,s,c){if(n=n.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=i.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&c&&(n[s].defaultSelected=!0)}else{for(s=""+tt(s),i=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ft(n,i,s){if(i!=null&&(i=""+tt(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+tt(s):""}function Ln(n,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(a(92));if(ue(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=tt(i),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c),Zt(n)}function vn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Nn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Un(n,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,s):typeof s!="number"||s===0||Nn.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function lr(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in i)c=i[f],i.hasOwnProperty(f)&&s[f]!==c&&Un(n,f,c)}else for(var m in i)i.hasOwnProperty(m)&&Un(n,m,i[m])}function Oi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(n){return Ty.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function ha(){}var Ju=null;function $u(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cr=null,ur=null;function Mm(n){var i=Xa(n);if(i&&(n=i.stateNode)){var s=n[Rn]||null;e:switch(n=i.stateNode,i.type){case"input":if(Cn(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+rt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==n&&c.form===n.form){var f=c[Rn]||null;if(!f)throw Error(a(90));Cn(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===n.form&&Bt(c)}break e;case"textarea":Ft(n,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&xi(n,!!s.multiple,i,!1)}}}var eh=!1;function bm(n,i,s){if(eh)return n(i,s);eh=!0;try{var c=n(i);return c}finally{if(eh=!1,(cr!==null||ur!==null)&&(Bc(),cr&&(i=cr,n=ur,ur=cr=null,Mm(i),n)))for(i=0;i<n.length;i++)Mm(n[i])}}function Ro(n,i){var s=n.stateNode;if(s===null)return null;var c=s[Rn]||null;if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),th=!1;if(fa)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){th=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{th=!1}var qa=null,nh=null,Ql=null;function Em(){if(Ql)return Ql;var n,i=nh,s=i.length,c,f="value"in qa?qa.value:qa.textContent,m=f.length;for(n=0;n<s&&i[n]===f[n];n++);var S=s-n;for(c=1;c<=S&&i[s-c]===f[m-c];c++);return Ql=f.slice(n,1<c?1-c:void 0)}function Jl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function $l(){return!0}function Tm(){return!1}function Qn(n){function i(s,c,f,m,S){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(s=n[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$l:Tm,this.isPropagationStopped=Tm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Qn(Cs),Do=_({},Cs,{view:0,detail:0}),Ay=Qn(Do),ih,ah,Lo,tc=_({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(ih=n.screenX-Lo.screenX,ah=n.screenY-Lo.screenY):ah=ih=0,Lo=n),ih)},movementY:function(n){return"movementY"in n?n.movementY:ah}}),Am=Qn(tc),wy=_({},tc,{dataTransfer:0}),Ry=Qn(wy),Cy=_({},Do,{relatedTarget:0}),sh=Qn(Cy),Dy=_({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=Qn(Dy),Ny=_({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uy=Qn(Ny),Oy=_({},Cs,{data:0}),wm=Qn(Oy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=By[n])?!!i[n]:!1}function rh(){return zy}var Fy=_({},Do,{key:function(n){if(n.key){var i=Py[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Jl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Iy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rh,charCode:function(n){return n.type==="keypress"?Jl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hy=Qn(Fy),Vy=_({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Qn(Vy),Gy=_({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rh}),ky=Qn(Gy),Xy=_({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=Qn(Xy),qy=_({},tc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Qn(qy),jy=_({},Cs,{newState:0,oldState:0}),Ky=Qn(jy),Zy=[9,13,27,32],oh=fa&&"CompositionEvent"in window,No=null;fa&&"documentMode"in document&&(No=document.documentMode);var Qy=fa&&"TextEvent"in window&&!No,Cm=fa&&(!oh||No&&8<No&&11>=No),Dm=" ",Lm=!1;function Nm(n,i){switch(n){case"keyup":return Zy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hr=!1;function Jy(n,i){switch(n){case"compositionend":return Um(i);case"keypress":return i.which!==32?null:(Lm=!0,Dm);case"textInput":return n=i.data,n===Dm&&Lm?null:n;default:return null}}function $y(n,i){if(hr)return n==="compositionend"||!oh&&Nm(n,i)?(n=Em(),Ql=nh=qa=null,hr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cm&&i.locale!=="ko"?null:i.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!eS[n.type]:i==="textarea"}function Pm(n,i,s,c){cr?ur?ur.push(c):ur=[c]:cr=c,i=Xc(i,"onChange"),0<i.length&&(s=new ec("onChange","change",null,s,c),n.push({event:s,listeners:i}))}var Uo=null,Oo=null;function tS(n){__(n,0)}function nc(n){var i=Rs(n);if(Bt(i))return n}function Im(n,i){if(n==="change")return i}var Bm=!1;if(fa){var lh;if(fa){var ch="oninput"in document;if(!ch){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),ch=typeof zm.oninput=="function"}lh=ch}else lh=!1;Bm=lh&&(!document.documentMode||9<document.documentMode)}function Fm(){Uo&&(Uo.detachEvent("onpropertychange",Hm),Oo=Uo=null)}function Hm(n){if(n.propertyName==="value"&&nc(Oo)){var i=[];Pm(i,Oo,n,$u(n)),bm(tS,i)}}function nS(n,i,s){n==="focusin"?(Fm(),Uo=i,Oo=s,Uo.attachEvent("onpropertychange",Hm)):n==="focusout"&&Fm()}function iS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nc(Oo)}function aS(n,i){if(n==="click")return nc(i)}function sS(n,i){if(n==="input"||n==="change")return nc(i)}function rS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:rS;function Po(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!tn.call(i,f)||!ri(n[f],i[f]))return!1}return!0}function Vm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gm(n,i){var s=Vm(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=i&&c>=i)return{node:s,offset:i-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Vm(s)}}function km(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?km(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xm(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Ke(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Ke(n.document)}return i}function uh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var oS=fa&&"documentMode"in document&&11>=document.documentMode,fr=null,hh=null,Io=null,fh=!1;function Wm(n,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;fh||fr==null||fr!==Ke(c)||(c=fr,"selectionStart"in c&&uh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Io&&Po(Io,c)||(Io=c,c=Xc(hh,"onSelect"),0<c.length&&(i=new ec("onSelect","select",null,i,s),n.push({event:i,listeners:c}),i.target=fr)))}function Ds(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var dr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},dh={},qm={};fa&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ls(n){if(dh[n])return dh[n];if(!dr[n])return n;var i=dr[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in qm)return dh[n]=i[s];return n}var Ym=Ls("animationend"),jm=Ls("animationiteration"),Km=Ls("animationstart"),lS=Ls("transitionrun"),cS=Ls("transitionstart"),uS=Ls("transitioncancel"),Zm=Ls("transitionend"),Qm=new Map,ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ph.push("scrollEnd");function Pi(n,i){Qm.set(n,i),$(i,[n])}var ic=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},yi=[],pr=0,mh=0;function ac(){for(var n=pr,i=mh=pr=0;i<n;){var s=yi[i];yi[i++]=null;var c=yi[i];yi[i++]=null;var f=yi[i];yi[i++]=null;var m=yi[i];if(yi[i++]=null,c!==null&&f!==null){var S=c.pending;S===null?f.next=f:(f.next=S.next,S.next=f),c.pending=f}m!==0&&Jm(s,f,m)}}function sc(n,i,s,c){yi[pr++]=n,yi[pr++]=i,yi[pr++]=s,yi[pr++]=c,mh|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function gh(n,i,s,c){return sc(n,i,s,c),rc(n)}function Ns(n,i){return sc(n,null,null,i),rc(n)}function Jm(n,i,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var f=!1,m=n.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&i!==null&&(f=31-Oe(s),n=m.hiddenUpdates,c=n[f],c===null?n[f]=[i]:c.push(i),i.lane=s|536870912),m):null}function rc(n){if(50<al)throw al=0,Af=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var mr={};function hS(n,i,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,i,s,c){return new hS(n,i,s,c)}function _h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function da(n,i){var s=n.alternate;return s===null?(s=oi(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function $m(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function oc(n,i,s,c,f,m){var S=0;if(c=n,typeof n=="function")_h(n)&&(S=1);else if(typeof n=="string")S=gM(n,s,Te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case A:return n=oi(31,s,i,f),n.elementType=A,n.lanes=m,n;case T:return Us(s.children,f,m,i);case M:S=8,f|=24;break;case y:return n=oi(12,s,i,f|2),n.elementType=y,n.lanes=m,n;case O:return n=oi(13,s,i,f),n.elementType=O,n.lanes=m,n;case B:return n=oi(19,s,i,f),n.elementType=B,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:S=10;break e;case C:S=9;break e;case L:S=11;break e;case P:S=14;break e;case q:S=16,c=null;break e}S=29,s=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=oi(S,s,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Us(n,i,s,c){return n=oi(7,n,c,i),n.lanes=s,n}function vh(n,i,s){return n=oi(6,n,null,i),n.lanes=s,n}function eg(n){var i=oi(18,null,null,0);return i.stateNode=n,i}function xh(n,i,s){return i=oi(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var tg=new WeakMap;function Si(n,i){if(typeof n=="object"&&n!==null){var s=tg.get(n);return s!==void 0?s:(i={value:n,source:i,stack:V(i)},tg.set(n,i),i)}return{value:n,source:i,stack:V(i)}}var gr=[],_r=0,lc=null,Bo=0,Mi=[],bi=0,Ya=null,Ki=1,Zi="";function pa(n,i){gr[_r++]=Bo,gr[_r++]=lc,lc=n,Bo=i}function ng(n,i,s){Mi[bi++]=Ki,Mi[bi++]=Zi,Mi[bi++]=Ya,Ya=n;var c=Ki;n=Zi;var f=32-Oe(c)-1;c&=~(1<<f),s+=1;var m=32-Oe(i)+f;if(30<m){var S=f-f%5;m=(c&(1<<S)-1).toString(32),c>>=S,f-=S,Ki=1<<32-Oe(i)+f|s<<f|c,Zi=m+n}else Ki=1<<m|s<<f|c,Zi=n}function yh(n){n.return!==null&&(pa(n,1),ng(n,1,0))}function Sh(n){for(;n===lc;)lc=gr[--_r],gr[_r]=null,Bo=gr[--_r],gr[_r]=null;for(;n===Ya;)Ya=Mi[--bi],Mi[bi]=null,Zi=Mi[--bi],Mi[bi]=null,Ki=Mi[--bi],Mi[bi]=null}function ig(n,i){Mi[bi++]=Ki,Mi[bi++]=Zi,Mi[bi++]=Ya,Ki=i.id,Zi=i.overflow,Ya=n}var On=null,Jt=null,Tt=!1,ja=null,Ei=!1,Mh=Error(a(519));function Ka(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Si(i,n)),Mh}function ag(n){var i=n.stateNode,s=n.type,c=n.memoizedProps;switch(i[fn]=n,i[Rn]=c,s){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(s=0;s<rl.length;s++)yt(rl[s],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":yt("invalid",i),ua(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":yt("invalid",i);break;case"textarea":yt("invalid",i),Ln(i,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||S_(i.textContent,s)?(c.popover!=null&&(yt("beforetoggle",i),yt("toggle",i)),c.onScroll!=null&&yt("scroll",i),c.onScrollEnd!=null&&yt("scrollend",i),c.onClick!=null&&(i.onclick=ha),i=!0):i=!1,i||Ka(n,!0)}function sg(n){for(On=n.return;On;)switch(On.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:On=On.return}}function vr(n){if(n!==On)return!1;if(!Tt)return sg(n),Tt=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Vf(n.type,n.memoizedProps)),s=!s),s&&Jt&&Ka(n),sg(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));Jt=D_(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));Jt=D_(n)}else i===27?(i=Jt,cs(n.type)?(n=qf,qf=null,Jt=n):Jt=i):Jt=On?Ai(n.stateNode.nextSibling):null;return!0}function Os(){Jt=On=null,Tt=!1}function bh(){var n=ja;return n!==null&&(ti===null?ti=n:ti.push.apply(ti,n),ja=null),n}function zo(n){ja===null?ja=[n]:ja.push(n)}var Eh=I(null),Ps=null,ma=null;function Za(n,i,s){ge(Eh,i._currentValue),i._currentValue=s}function ga(n){n._currentValue=Eh.current,ie(Eh)}function Th(n,i,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===s)break;n=n.return}}function Ah(n,i,s,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var F=0;F<i.length;F++)if(w.context===i[F]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),Th(m.return,s,n),c||(S=null);break e}m=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),Th(S,s,n),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===n){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function xr(n,i,s,c){n=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var w=f.type;ri(f.pendingProps.value,S.value)||(n!==null?n.push(w):n=[w])}}else if(f===ce.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(hl):n=[hl])}f=f.return}n!==null&&Ah(i,n,s,c),i.flags|=262144}function cc(n){for(n=n.firstContext;n!==null;){if(!ri(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Is(n){Ps=n,ma=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Pn(n){return rg(Ps,n)}function uc(n,i){return Ps===null&&Is(n),rg(n,i)}function rg(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ma===null){if(n===null)throw Error(a(308));ma=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ma=ma.next=i;return s}var fS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},dS=o.unstable_scheduleCallback,pS=o.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wh(){return{controller:new fS,data:new Map,refCount:0}}function Fo(n){n.refCount--,n.refCount===0&&dS(pS,function(){n.controller.abort()})}var Ho=null,Rh=0,yr=0,Sr=null;function mS(n,i){if(Ho===null){var s=Ho=[];Rh=0,yr=Nf(),Sr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Rh++,i.then(og,og),i}function og(){if(--Rh===0&&Ho!==null){Sr!==null&&(Sr.status="fulfilled");var n=Ho;Ho=null,yr=0,Sr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function gS(n,i){var s=[],c={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(c.status="rejected",c.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),c}var lg=z.S;z.S=function(n,i){W0=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&mS(n,i),lg!==null&&lg(n,i)};var Bs=I(null);function Ch(){var n=Bs.current;return n!==null?n:Kt.pooledCache}function hc(n,i){i===null?ge(Bs,Bs.current):ge(Bs,i.pool)}function cg(){var n=Ch();return n===null?null:{parent:dn._currentValue,pool:n}}var Mr=Error(a(460)),Dh=Error(a(474)),fc=Error(a(542)),dc={then:function(){}};function ug(n){return n=n.status,n==="fulfilled"||n==="rejected"}function hg(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(ha,ha),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,dg(n),n;default:if(typeof i.status=="string")i.then(ha,ha);else{if(n=Kt,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=c}},function(c){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,dg(n),n}throw Fs=i,Mr}}function zs(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fs=s,Mr):s}}var Fs=null;function fg(){if(Fs===null)throw Error(a(459));var n=Fs;return Fs=null,n}function dg(n){if(n===Mr||n===fc)throw Error(a(483))}var br=null,Vo=0;function pc(n){var i=Vo;return Vo+=1,br===null&&(br=[]),hg(br,n,i)}function Go(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function mc(n,i){throw i.$$typeof===v?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function pg(n){function i(K,X){if(n){var Q=K.deletions;Q===null?(K.deletions=[X],K.flags|=16):Q.push(X)}}function s(K,X){if(!n)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function c(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function f(K,X){return K=da(K,X),K.index=0,K.sibling=null,K}function m(K,X,Q){return K.index=Q,n?(Q=K.alternate,Q!==null?(Q=Q.index,Q<X?(K.flags|=67108866,X):Q):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return n&&K.alternate===null&&(K.flags|=67108866),K}function w(K,X,Q,pe){return X===null||X.tag!==6?(X=vh(Q,K.mode,pe),X.return=K,X):(X=f(X,Q),X.return=K,X)}function F(K,X,Q,pe){var Je=Q.type;return Je===T?he(K,X,Q.props.children,pe,Q.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===q&&zs(Je)===X.type)?(X=f(X,Q.props),Go(X,Q),X.return=K,X):(X=oc(Q.type,Q.key,Q.props,null,K.mode,pe),Go(X,Q),X.return=K,X)}function J(K,X,Q,pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=xh(Q,K.mode,pe),X.return=K,X):(X=f(X,Q.children||[]),X.return=K,X)}function he(K,X,Q,pe,Je){return X===null||X.tag!==7?(X=Us(Q,K.mode,pe,Je),X.return=K,X):(X=f(X,Q),X.return=K,X)}function me(K,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vh(""+X,K.mode,Q),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return Q=oc(X.type,X.key,X.props,null,K.mode,Q),Go(Q,X),Q.return=K,Q;case b:return X=xh(X,K.mode,Q),X.return=K,X;case q:return X=zs(X),me(K,X,Q)}if(ue(X)||te(X))return X=Us(X,K.mode,Q,null),X.return=K,X;if(typeof X.then=="function")return me(K,pc(X),Q);if(X.$$typeof===D)return me(K,uc(K,X),Q);mc(K,X)}return null}function ee(K,X,Q,pe){var Je=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:w(K,X,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Je?F(K,X,Q,pe):null;case b:return Q.key===Je?J(K,X,Q,pe):null;case q:return Q=zs(Q),ee(K,X,Q,pe)}if(ue(Q)||te(Q))return Je!==null?null:he(K,X,Q,pe,null);if(typeof Q.then=="function")return ee(K,X,pc(Q),pe);if(Q.$$typeof===D)return ee(K,X,uc(K,Q),pe);mc(K,Q)}return null}function oe(K,X,Q,pe,Je){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return K=K.get(Q)||null,w(X,K,""+pe,Je);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case x:return K=K.get(pe.key===null?Q:pe.key)||null,F(X,K,pe,Je);case b:return K=K.get(pe.key===null?Q:pe.key)||null,J(X,K,pe,Je);case q:return pe=zs(pe),oe(K,X,Q,pe,Je)}if(ue(pe)||te(pe))return K=K.get(Q)||null,he(X,K,pe,Je,null);if(typeof pe.then=="function")return oe(K,X,Q,pc(pe),Je);if(pe.$$typeof===D)return oe(K,X,Q,uc(X,pe),Je);mc(X,pe)}return null}function Ve(K,X,Q,pe){for(var Je=null,Dt=null,Ye=X,ft=X=0,Et=null;Ye!==null&&ft<Q.length;ft++){Ye.index>ft?(Et=Ye,Ye=null):Et=Ye.sibling;var Lt=ee(K,Ye,Q[ft],pe);if(Lt===null){Ye===null&&(Ye=Et);break}n&&Ye&&Lt.alternate===null&&i(K,Ye),X=m(Lt,X,ft),Dt===null?Je=Lt:Dt.sibling=Lt,Dt=Lt,Ye=Et}if(ft===Q.length)return s(K,Ye),Tt&&pa(K,ft),Je;if(Ye===null){for(;ft<Q.length;ft++)Ye=me(K,Q[ft],pe),Ye!==null&&(X=m(Ye,X,ft),Dt===null?Je=Ye:Dt.sibling=Ye,Dt=Ye);return Tt&&pa(K,ft),Je}for(Ye=c(Ye);ft<Q.length;ft++)Et=oe(Ye,K,ft,Q[ft],pe),Et!==null&&(n&&Et.alternate!==null&&Ye.delete(Et.key===null?ft:Et.key),X=m(Et,X,ft),Dt===null?Je=Et:Dt.sibling=Et,Dt=Et);return n&&Ye.forEach(function(ps){return i(K,ps)}),Tt&&pa(K,ft),Je}function nt(K,X,Q,pe){if(Q==null)throw Error(a(151));for(var Je=null,Dt=null,Ye=X,ft=X=0,Et=null,Lt=Q.next();Ye!==null&&!Lt.done;ft++,Lt=Q.next()){Ye.index>ft?(Et=Ye,Ye=null):Et=Ye.sibling;var ps=ee(K,Ye,Lt.value,pe);if(ps===null){Ye===null&&(Ye=Et);break}n&&Ye&&ps.alternate===null&&i(K,Ye),X=m(ps,X,ft),Dt===null?Je=ps:Dt.sibling=ps,Dt=ps,Ye=Et}if(Lt.done)return s(K,Ye),Tt&&pa(K,ft),Je;if(Ye===null){for(;!Lt.done;ft++,Lt=Q.next())Lt=me(K,Lt.value,pe),Lt!==null&&(X=m(Lt,X,ft),Dt===null?Je=Lt:Dt.sibling=Lt,Dt=Lt);return Tt&&pa(K,ft),Je}for(Ye=c(Ye);!Lt.done;ft++,Lt=Q.next())Lt=oe(Ye,K,ft,Lt.value,pe),Lt!==null&&(n&&Lt.alternate!==null&&Ye.delete(Lt.key===null?ft:Lt.key),X=m(Lt,X,ft),Dt===null?Je=Lt:Dt.sibling=Lt,Dt=Lt);return n&&Ye.forEach(function(wM){return i(K,wM)}),Tt&&pa(K,ft),Je}function Yt(K,X,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var Je=Q.key;X!==null;){if(X.key===Je){if(Je=Q.type,Je===T){if(X.tag===7){s(K,X.sibling),pe=f(X,Q.props.children),pe.return=K,K=pe;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===q&&zs(Je)===X.type){s(K,X.sibling),pe=f(X,Q.props),Go(pe,Q),pe.return=K,K=pe;break e}s(K,X);break}else i(K,X);X=X.sibling}Q.type===T?(pe=Us(Q.props.children,K.mode,pe,Q.key),pe.return=K,K=pe):(pe=oc(Q.type,Q.key,Q.props,null,K.mode,pe),Go(pe,Q),pe.return=K,K=pe)}return S(K);case b:e:{for(Je=Q.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){s(K,X.sibling),pe=f(X,Q.children||[]),pe.return=K,K=pe;break e}else{s(K,X);break}else i(K,X);X=X.sibling}pe=xh(Q,K.mode,pe),pe.return=K,K=pe}return S(K);case q:return Q=zs(Q),Yt(K,X,Q,pe)}if(ue(Q))return Ve(K,X,Q,pe);if(te(Q)){if(Je=te(Q),typeof Je!="function")throw Error(a(150));return Q=Je.call(Q),nt(K,X,Q,pe)}if(typeof Q.then=="function")return Yt(K,X,pc(Q),pe);if(Q.$$typeof===D)return Yt(K,X,uc(K,Q),pe);mc(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(s(K,X.sibling),pe=f(X,Q),pe.return=K,K=pe):(s(K,X),pe=vh(Q,K.mode,pe),pe.return=K,K=pe),S(K)):s(K,X)}return function(K,X,Q,pe){try{Vo=0;var Je=Yt(K,X,Q,pe);return br=null,Je}catch(Ye){if(Ye===Mr||Ye===fc)throw Ye;var Dt=oi(29,Ye,null,K.mode);return Dt.lanes=pe,Dt.return=K,Dt}}}var Hs=pg(!0),mg=pg(!1),Qa=!1;function Lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ja(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function $a(n,i,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,i=rc(n),Jm(n,null,s),i}return sc(n,c,i,s),rc(n)}function ko(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,bo(n,s)}}function Uh(n,i){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var Oh=!1;function Xo(){if(Oh){var n=Sr;if(n!==null)throw n}}function Wo(n,i,s,c){Oh=!1;var f=n.updateQueue;Qa=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var F=w,J=F.next;F.next=null,S===null?m=J:S.next=J,S=F;var he=n.alternate;he!==null&&(he=he.updateQueue,w=he.lastBaseUpdate,w!==S&&(w===null?he.firstBaseUpdate=J:w.next=J,he.lastBaseUpdate=F))}if(m!==null){var me=f.baseState;S=0,he=J=F=null,w=m;do{var ee=w.lane&-536870913,oe=ee!==w.lane;if(oe?(bt&ee)===ee:(c&ee)===ee){ee!==0&&ee===yr&&(Oh=!0),he!==null&&(he=he.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ve=n,nt=w;ee=i;var Yt=s;switch(nt.tag){case 1:if(Ve=nt.payload,typeof Ve=="function"){me=Ve.call(Yt,me,ee);break e}me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=nt.payload,ee=typeof Ve=="function"?Ve.call(Yt,me,ee):Ve,ee==null)break e;me=_({},me,ee);break e;case 2:Qa=!0}}ee=w.callback,ee!==null&&(n.flags|=64,oe&&(n.flags|=8192),oe=f.callbacks,oe===null?f.callbacks=[ee]:oe.push(ee))}else oe={lane:ee,tag:w.tag,payload:w.payload,callback:w.callback,next:null},he===null?(J=he=oe,F=me):he=he.next=oe,S|=ee;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;oe=w,w=oe.next,oe.next=null,f.lastBaseUpdate=oe,f.shared.pending=null}}while(!0);he===null&&(F=me),f.baseState=F,f.firstBaseUpdate=J,f.lastBaseUpdate=he,m===null&&(f.shared.lanes=0),as|=S,n.lanes=S,n.memoizedState=me}}function gg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function _g(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)gg(s[n],i)}var Er=I(null),gc=I(0);function vg(n,i){n=Ta,ge(gc,n),ge(Er,i),Ta=n|i.baseLanes}function Ph(){ge(gc,Ta),ge(Er,Er.current)}function Ih(){Ta=gc.current,ie(Er),ie(gc)}var li=I(null),Ti=null;function es(n){var i=n.alternate;ge(un,un.current&1),ge(li,n),Ti===null&&(i===null||Er.current!==null||i.memoizedState!==null)&&(Ti=n)}function Bh(n){ge(un,un.current),ge(li,n),Ti===null&&(Ti=n)}function xg(n){n.tag===22?(ge(un,un.current),ge(li,n),Ti===null&&(Ti=n)):ts()}function ts(){ge(un,un.current),ge(li,li.current)}function ci(n){ie(li),Ti===n&&(Ti=null),ie(un)}var un=I(0);function _c(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Xf(s)||Wf(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _a=0,ct=null,Wt=null,pn=null,vc=!1,Tr=!1,Vs=!1,xc=0,qo=0,Ar=null,_S=0;function ln(){throw Error(a(321))}function zh(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ri(n[s],i[s]))return!1;return!0}function Fh(n,i,s,c,f,m){return _a=m,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=n===null||n.memoizedState===null?n0:ef,Vs=!1,m=s(c,f),Vs=!1,Tr&&(m=Sg(i,s,c,f)),yg(n),m}function yg(n){z.H=Ko;var i=Wt!==null&&Wt.next!==null;if(_a=0,pn=Wt=ct=null,vc=!1,qo=0,Ar=null,i)throw Error(a(300));n===null||mn||(n=n.dependencies,n!==null&&cc(n)&&(mn=!0))}function Sg(n,i,s,c){ct=n;var f=0;do{if(Tr&&(Ar=null),qo=0,Tr=!1,25<=f)throw Error(a(301));if(f+=1,pn=Wt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=i0,m=i(s,c)}while(Tr);return m}function vS(){var n=z.H,i=n.useState()[0];return i=typeof i.then=="function"?Yo(i):i,n=n.useState()[0],(Wt!==null?Wt.memoizedState:null)!==n&&(ct.flags|=1024),i}function Hh(){var n=xc!==0;return xc=0,n}function Vh(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Gh(n){if(vc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}vc=!1}_a=0,pn=Wt=ct=null,Tr=!1,qo=xc=0,Ar=null}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ct.memoizedState=pn=n:pn=pn.next=n,pn}function hn(){if(Wt===null){var n=ct.alternate;n=n!==null?n.memoizedState:null}else n=Wt.next;var i=pn===null?ct.memoizedState:pn.next;if(i!==null)pn=i,Wt=n;else{if(n===null)throw ct.alternate===null?Error(a(467)):Error(a(310));Wt=n,n={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},pn===null?ct.memoizedState=pn=n:pn=pn.next=n}return pn}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(n){var i=qo;return qo+=1,Ar===null&&(Ar=[]),n=hg(Ar,n,i),i=ct,(pn===null?i.memoizedState:pn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?n0:ef),n}function Sc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Yo(n);if(n.$$typeof===D)return Pn(n)}throw Error(a(438,String(n)))}function kh(n){var i=null,s=ct.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=ct.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=yc(),ct.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),c=0;c<n;c++)s[c]=N;return i.index++,s}function va(n,i){return typeof i=="function"?i(n):i}function Mc(n){var i=hn();return Xh(i,Wt,n)}function Xh(n,i,s){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var f=n.baseQueue,m=c.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,c.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{i=f.next;var w=S=null,F=null,J=i,he=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(bt&me)===me:(_a&me)===me){var ee=J.revertLane;if(ee===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===yr&&(he=!0);else if((_a&ee)===ee){J=J.next,ee===yr&&(he=!0);continue}else me={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(w=F=me,S=m):F=F.next=me,ct.lanes|=ee,as|=ee;me=J.action,Vs&&s(m,me),m=J.hasEagerState?J.eagerState:s(m,me)}else ee={lane:me,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(w=F=ee,S=m):F=F.next=ee,ct.lanes|=me,as|=me;J=J.next}while(J!==null&&J!==i);if(F===null?S=m:F.next=w,!ri(m,n.memoizedState)&&(mn=!0,he&&(s=Sr,s!==null)))throw s;n.memoizedState=m,n.baseState=S,n.baseQueue=F,c.lastRenderedState=m}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Wh(n){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var c=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=n(m,S.action),S=S.next;while(S!==f);ri(m,i.memoizedState)||(mn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,c]}function Mg(n,i,s){var c=ct,f=hn(),m=Tt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ri((Wt||f).memoizedState,s);if(S&&(f.memoizedState=s,mn=!0),f=f.queue,jh(Tg.bind(null,c,f,n),[n]),f.getSnapshot!==i||S||pn!==null&&pn.memoizedState.tag&1){if(c.flags|=2048,wr(9,{destroy:void 0},Eg.bind(null,c,f,s,i),null),Kt===null)throw Error(a(349));m||(_a&127)!==0||bg(c,i,s)}return s}function bg(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=ct.updateQueue,i===null?(i=yc(),ct.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Eg(n,i,s,c){i.value=s,i.getSnapshot=c,Ag(i)&&wg(n)}function Tg(n,i,s){return s(function(){Ag(i)&&wg(n)})}function Ag(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ri(n,s)}catch{return!0}}function wg(n){var i=Ns(n,2);i!==null&&ni(i,n,2)}function qh(n){var i=Wn();if(typeof n=="function"){var s=n;if(n=s(),Vs){Ie(!0);try{s()}finally{Ie(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},i}function Rg(n,i,s,c){return n.baseState=s,Xh(n,Wt,typeof c=="function"?c:va)}function xS(n,i,s,c,f){if(Tc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};z.T!==null?s(!0):m.isTransition=!1,c(m),s=i.pending,s===null?(m.next=i.pending=m,Cg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Cg(n,i){var s=i.action,c=i.payload,f=n.state;if(i.isTransition){var m=z.T,S={};z.T=S;try{var w=s(f,c),F=z.S;F!==null&&F(S,w),Dg(n,i,w)}catch(J){Yh(n,i,J)}finally{m!==null&&S.types!==null&&(m.types=S.types),z.T=m}}else try{m=s(f,c),Dg(n,i,m)}catch(J){Yh(n,i,J)}}function Dg(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Lg(n,i,c)},function(c){return Yh(n,i,c)}):Lg(n,i,s)}function Lg(n,i,s){i.status="fulfilled",i.value=s,Ng(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,Cg(n,s)))}function Yh(n,i,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,Ng(i),i=i.next;while(i!==c)}n.action=null}function Ng(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Ug(n,i){return i}function Og(n,i){if(Tt){var s=Kt.formState;if(s!==null){e:{var c=ct;if(Tt){if(Jt){t:{for(var f=Jt,m=Ei;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ai(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Jt=Ai(f.nextSibling),c=f.data==="F!";break e}}Ka(c)}c=!1}c&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ug,lastRenderedState:i},s.queue=c,s=$g.bind(null,ct,c),c.dispatch=s,c=qh(!1),m=$h.bind(null,ct,!1,c.queue),c=Wn(),f={state:i,dispatch:null,action:n,pending:null},c.queue=f,s=xS.bind(null,ct,f,m,s),f.dispatch=s,c.memoizedState=n,[i,s,!1]}function Pg(n){var i=hn();return Ig(i,Wt,n)}function Ig(n,i,s){if(i=Xh(n,i,Ug)[0],n=Mc(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Yo(i)}catch(S){throw S===Mr?fc:S}else c=i;i=hn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ct.flags|=2048,wr(9,{destroy:void 0},yS.bind(null,f,s),null)),[c,m,n]}function yS(n,i){n.action=i}function Bg(n){var i=hn(),s=Wt;if(s!==null)return Ig(i,s,n);hn(),i=i.memoizedState,s=hn();var c=s.queue.dispatch;return s.memoizedState=n,[i,c,!1]}function wr(n,i,s,c){return n={tag:n,create:s,deps:c,inst:i,next:null},i=ct.updateQueue,i===null&&(i=yc(),ct.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,i.lastEffect=n),n}function zg(){return hn().memoizedState}function bc(n,i,s,c){var f=Wn();ct.flags|=n,f.memoizedState=wr(1|i,{destroy:void 0},s,c===void 0?null:c)}function Ec(n,i,s,c){var f=hn();c=c===void 0?null:c;var m=f.memoizedState.inst;Wt!==null&&c!==null&&zh(c,Wt.memoizedState.deps)?f.memoizedState=wr(i,m,s,c):(ct.flags|=n,f.memoizedState=wr(1|i,m,s,c))}function Fg(n,i){bc(8390656,8,n,i)}function jh(n,i){Ec(2048,8,n,i)}function SS(n){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=yc(),ct.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function Hg(n){var i=hn().memoizedState;return SS({ref:i,nextImpl:n}),function(){if((Pt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Vg(n,i){return Ec(4,2,n,i)}function Gg(n,i){return Ec(4,4,n,i)}function kg(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xg(n,i,s){s=s!=null?s.concat([n]):null,Ec(4,4,kg.bind(null,i,n),s)}function Kh(){}function Wg(n,i){var s=hn();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&zh(i,c[1])?c[0]:(s.memoizedState=[n,i],n)}function qg(n,i){var s=hn();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&zh(i,c[1]))return c[0];if(c=n(),Vs){Ie(!0);try{n()}finally{Ie(!1)}}return s.memoizedState=[c,i],c}function Zh(n,i,s){return s===void 0||(_a&1073741824)!==0&&(bt&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=Y0(),ct.lanes|=n,as|=n,s)}function Yg(n,i,s,c){return ri(s,i)?s:Er.current!==null?(n=Zh(n,s,c),ri(n,i)||(mn=!0),n):(_a&42)===0||(_a&1073741824)!==0&&(bt&261930)===0?(mn=!0,n.memoizedState=s):(n=Y0(),ct.lanes|=n,as|=n,i)}function jg(n,i,s,c,f){var m=H.p;H.p=m!==0&&8>m?m:8;var S=z.T,w={};z.T=w,$h(n,!1,i,s);try{var F=f(),J=z.S;if(J!==null&&J(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var he=gS(F,c);jo(n,i,he,fi(n))}else jo(n,i,c,fi(n))}catch(me){jo(n,i,{then:function(){},status:"rejected",reason:me},fi())}finally{H.p=m,S!==null&&w.types!==null&&(S.types=w.types),z.T=S}}function MS(){}function Qh(n,i,s,c){if(n.tag!==5)throw Error(a(476));var f=Kg(n).queue;jg(n,f,i,ae,s===null?MS:function(){return Zg(n),s(c)})}function Kg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:ae},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Zg(n){var i=Kg(n);i.next===null&&(i=n.alternate.memoizedState),jo(n,i.next.queue,{},fi())}function Jh(){return Pn(hl)}function Qg(){return hn().memoizedState}function Jg(){return hn().memoizedState}function bS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=fi();n=Ja(s);var c=$a(i,n,s);c!==null&&(ni(c,i,s),ko(c,i,s)),i={cache:wh()},n.payload=i;return}i=i.return}}function ES(n,i,s){var c=fi();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tc(n)?e0(i,s):(s=gh(n,i,s,c),s!==null&&(ni(s,n,c),t0(s,i,c)))}function $g(n,i,s){var c=fi();jo(n,i,s,c)}function jo(n,i,s,c){var f={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Tc(n))e0(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,w=m(S,s);if(f.hasEagerState=!0,f.eagerState=w,ri(w,S))return sc(n,i,f,0),Kt===null&&ac(),!1}catch{}if(s=gh(n,i,f,c),s!==null)return ni(s,n,c),t0(s,i,c),!0}return!1}function $h(n,i,s,c){if(c={lane:2,revertLane:Nf(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Tc(n)){if(i)throw Error(a(479))}else i=gh(n,s,c,2),i!==null&&ni(i,n,2)}function Tc(n){var i=n.alternate;return n===ct||i!==null&&i===ct}function e0(n,i){Tr=vc=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function t0(n,i,s){if((s&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,bo(n,s)}}var Ko={readContext:Pn,use:Sc,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};Ko.useEffectEvent=ln;var n0={readContext:Pn,use:Sc,useCallback:function(n,i){return Wn().memoizedState=[n,i===void 0?null:i],n},useContext:Pn,useEffect:Fg,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,bc(4194308,4,kg.bind(null,i,n),s)},useLayoutEffect:function(n,i){return bc(4194308,4,n,i)},useInsertionEffect:function(n,i){bc(4,2,n,i)},useMemo:function(n,i){var s=Wn();i=i===void 0?null:i;var c=n();if(Vs){Ie(!0);try{n()}finally{Ie(!1)}}return s.memoizedState=[c,i],c},useReducer:function(n,i,s){var c=Wn();if(s!==void 0){var f=s(i);if(Vs){Ie(!0);try{s(i)}finally{Ie(!1)}}}else f=i;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=ES.bind(null,ct,n),[c.memoizedState,n]},useRef:function(n){var i=Wn();return n={current:n},i.memoizedState=n},useState:function(n){n=qh(n);var i=n.queue,s=$g.bind(null,ct,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:Kh,useDeferredValue:function(n,i){var s=Wn();return Zh(s,n,i)},useTransition:function(){var n=qh(!1);return n=jg.bind(null,ct,n.queue,!0,!1),Wn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var c=ct,f=Wn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Kt===null)throw Error(a(349));(bt&127)!==0||bg(c,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Fg(Tg.bind(null,c,m,n),[n]),c.flags|=2048,wr(9,{destroy:void 0},Eg.bind(null,c,m,s,i),null),s},useId:function(){var n=Wn(),i=Kt.identifierPrefix;if(Tt){var s=Zi,c=Ki;s=(c&~(1<<32-Oe(c)-1)).toString(32)+s,i="_"+i+"R_"+s,s=xc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=_S++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Jh,useFormState:Og,useActionState:Og,useOptimistic:function(n){var i=Wn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=$h.bind(null,ct,!0,s),s.dispatch=i,[n,i]},useMemoCache:kh,useCacheRefresh:function(){return Wn().memoizedState=bS.bind(null,ct)},useEffectEvent:function(n){var i=Wn(),s={impl:n};return i.memoizedState=s,function(){if((Pt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},ef={readContext:Pn,use:Sc,useCallback:Wg,useContext:Pn,useEffect:jh,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:qg,useReducer:Mc,useRef:zg,useState:function(){return Mc(va)},useDebugValue:Kh,useDeferredValue:function(n,i){var s=hn();return Yg(s,Wt.memoizedState,n,i)},useTransition:function(){var n=Mc(va)[0],i=hn().memoizedState;return[typeof n=="boolean"?n:Yo(n),i]},useSyncExternalStore:Mg,useId:Qg,useHostTransitionStatus:Jh,useFormState:Pg,useActionState:Pg,useOptimistic:function(n,i){var s=hn();return Rg(s,Wt,n,i)},useMemoCache:kh,useCacheRefresh:Jg};ef.useEffectEvent=Hg;var i0={readContext:Pn,use:Sc,useCallback:Wg,useContext:Pn,useEffect:jh,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:qg,useReducer:Wh,useRef:zg,useState:function(){return Wh(va)},useDebugValue:Kh,useDeferredValue:function(n,i){var s=hn();return Wt===null?Zh(s,n,i):Yg(s,Wt.memoizedState,n,i)},useTransition:function(){var n=Wh(va)[0],i=hn().memoizedState;return[typeof n=="boolean"?n:Yo(n),i]},useSyncExternalStore:Mg,useId:Qg,useHostTransitionStatus:Jh,useFormState:Bg,useActionState:Bg,useOptimistic:function(n,i){var s=hn();return Wt!==null?Rg(s,Wt,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:kh,useCacheRefresh:Jg};i0.useEffectEvent=Hg;function tf(n,i,s,c){i=n.memoizedState,s=s(c,i),s=s==null?i:_({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var nf={enqueueSetState:function(n,i,s){n=n._reactInternals;var c=fi(),f=Ja(c);f.payload=i,s!=null&&(f.callback=s),i=$a(n,f,c),i!==null&&(ni(i,n,c),ko(i,n,c))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var c=fi(),f=Ja(c);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=$a(n,f,c),i!==null&&(ni(i,n,c),ko(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=fi(),c=Ja(s);c.tag=2,i!=null&&(c.callback=i),i=$a(n,c,s),i!==null&&(ni(i,n,s),ko(i,n,s))}};function a0(n,i,s,c,f,m,S){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,S):i.prototype&&i.prototype.isPureReactComponent?!Po(s,c)||!Po(f,m):!0}function s0(n,i,s,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==n&&nf.enqueueReplaceState(i,i.state,null)}function Gs(n,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(n=n.defaultProps){s===i&&(s=_({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}function r0(n){ic(n)}function o0(n){console.error(n)}function l0(n){ic(n)}function Ac(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function c0(n,i,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function af(n,i,s){return s=Ja(s),s.tag=3,s.payload={element:null},s.callback=function(){Ac(n,i)},s}function u0(n){return n=Ja(n),n.tag=3,n}function h0(n,i,s,c){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;n.payload=function(){return f(m)},n.callback=function(){c0(i,s,c)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(n.callback=function(){c0(i,s,c),typeof f!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function TS(n,i,s,c,f){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&xr(i,s,f,!0),s=li.current,s!==null){switch(s.tag){case 31:case 13:return Ti===null?zc():s.alternate===null&&cn===0&&(cn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,c===dc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),Cf(n,c,f)),!1;case 22:return s.flags|=65536,c===dc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),Cf(n,c,f)),!1}throw Error(a(435,s.tag))}return Cf(n,c,f),zc(),!1}if(Tt)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,c!==Mh&&(n=Error(a(422),{cause:c}),zo(Si(n,s)))):(c!==Mh&&(i=Error(a(423),{cause:c}),zo(Si(i,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=Si(c,s),f=af(n.stateNode,c,f),Uh(n,f),cn!==4&&(cn=2)),!1;var m=Error(a(520),{cause:c});if(m=Si(m,s),il===null?il=[m]:il.push(m),cn!==4&&(cn=2),i===null)return!0;c=Si(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=af(s.stateNode,c,n),Uh(s,n),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ss===null||!ss.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=u0(f),h0(f,n,s,c),Uh(s,f),!1}s=s.return}while(s!==null);return!1}var sf=Error(a(461)),mn=!1;function In(n,i,s,c){i.child=n===null?mg(i,null,s,c):Hs(i,n.child,s,c)}function f0(n,i,s,c,f){s=s.render;var m=i.ref;if("ref"in c){var S={};for(var w in c)w!=="ref"&&(S[w]=c[w])}else S=c;return Is(i),c=Fh(n,i,s,S,m,f),w=Hh(),n!==null&&!mn?(Vh(n,i,f),xa(n,i,f)):(Tt&&w&&yh(i),i.flags|=1,In(n,i,c,f),i.child)}function d0(n,i,s,c,f){if(n===null){var m=s.type;return typeof m=="function"&&!_h(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,p0(n,i,m,c,f)):(n=oc(s.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!df(n,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:Po,s(S,c)&&n.ref===i.ref)return xa(n,i,f)}return i.flags|=1,n=da(m,c),n.ref=i.ref,n.return=i,i.child=n}function p0(n,i,s,c,f){if(n!==null){var m=n.memoizedProps;if(Po(m,c)&&n.ref===i.ref)if(mn=!1,i.pendingProps=c=m,df(n,f))(n.flags&131072)!==0&&(mn=!0);else return i.lanes=n.lanes,xa(n,i,f)}return rf(n,i,s,c,f)}function m0(n,i,s,c){var f=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,n!==null){for(c=i.child=n.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;c=f&~m}else c=0,i.child=null;return g0(n,i,m,s,c)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&hc(i,m!==null?m.cachePool:null),m!==null?vg(i,m):Ph(),xg(i);else return c=i.lanes=536870912,g0(n,i,m!==null?m.baseLanes|s:s,s,c)}else m!==null?(hc(i,m.cachePool),vg(i,m),ts(),i.memoizedState=null):(n!==null&&hc(i,null),Ph(),ts());return In(n,i,f,s),i.child}function Zo(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function g0(n,i,s,c,f){var m=Ch();return m=m===null?null:{parent:dn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},n!==null&&hc(i,null),Ph(),xg(i),n!==null&&xr(n,i,c,!0),i.childLanes=f,null}function wc(n,i){return i=Cc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function _0(n,i,s){return Hs(i,n.child,null,s),n=wc(i,i.pendingProps),n.flags|=2,ci(i),i.memoizedState=null,n}function AS(n,i,s){var c=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Tt){if(c.mode==="hidden")return n=wc(i,c),i.lanes=536870912,Zo(null,n);if(Bh(i),(n=Jt)?(n=C_(n,Ei),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Ya!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=eg(n),s.return=i,i.child=s,On=i,Jt=null)):n=null,n===null)throw Ka(i);return i.lanes=536870912,null}return wc(i,c)}var m=n.memoizedState;if(m!==null){var S=m.dehydrated;if(Bh(i),f)if(i.flags&256)i.flags&=-257,i=_0(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(mn||xr(n,i,s,!1),f=(s&n.childLanes)!==0,mn||f){if(c=Kt,c!==null&&(S=ar(c,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,Ns(n,S),ni(c,n,S),sf;zc(),i=_0(n,i,s)}else n=m.treeContext,Jt=Ai(S.nextSibling),On=i,Tt=!0,ja=null,Ei=!1,n!==null&&ig(i,n),i=wc(i,c),i.flags|=4096;return i}return n=da(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Rc(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function rf(n,i,s,c,f){return Is(i),s=Fh(n,i,s,c,void 0,f),c=Hh(),n!==null&&!mn?(Vh(n,i,f),xa(n,i,f)):(Tt&&c&&yh(i),i.flags|=1,In(n,i,s,f),i.child)}function v0(n,i,s,c,f,m){return Is(i),i.updateQueue=null,s=Sg(i,c,s,f),yg(n),c=Hh(),n!==null&&!mn?(Vh(n,i,m),xa(n,i,m)):(Tt&&c&&yh(i),i.flags|=1,In(n,i,s,m),i.child)}function x0(n,i,s,c,f){if(Is(i),i.stateNode===null){var m=mr,S=s.contextType;typeof S=="object"&&S!==null&&(m=Pn(S)),m=new s(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=nf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},Lh(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Pn(S):mr,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(tf(i,s,S,c),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&nf.enqueueReplaceState(m,m.state,null),Wo(i,c,m,f),Xo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var w=i.memoizedProps,F=Gs(s,w);m.props=F;var J=m.context,he=s.contextType;S=mr,typeof he=="object"&&he!==null&&(S=Pn(he));var me=s.getDerivedStateFromProps;he=typeof me=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,he||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||J!==S)&&s0(i,m,c,S),Qa=!1;var ee=i.memoizedState;m.state=ee,Wo(i,c,m,f),Xo(),J=i.memoizedState,w||ee!==J||Qa?(typeof me=="function"&&(tf(i,s,me,c),J=i.memoizedState),(F=Qa||a0(i,s,F,c,ee,J,S))?(he||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=J),m.props=c,m.state=J,m.context=S,c=F):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,Nh(n,i),S=i.memoizedProps,he=Gs(s,S),m.props=he,me=i.pendingProps,ee=m.context,J=s.contextType,F=mr,typeof J=="object"&&J!==null&&(F=Pn(J)),w=s.getDerivedStateFromProps,(J=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==me||ee!==F)&&s0(i,m,c,F),Qa=!1,ee=i.memoizedState,m.state=ee,Wo(i,c,m,f),Xo();var oe=i.memoizedState;S!==me||ee!==oe||Qa||n!==null&&n.dependencies!==null&&cc(n.dependencies)?(typeof w=="function"&&(tf(i,s,w,c),oe=i.memoizedState),(he=Qa||a0(i,s,he,c,ee,oe,F)||n!==null&&n.dependencies!==null&&cc(n.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,oe,F),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,oe,F)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===n.memoizedProps&&ee===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),m.props=c,m.state=oe,m.context=F,c=he):(typeof m.componentDidUpdate!="function"||S===n.memoizedProps&&ee===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&ee===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,Rc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=Hs(i,n.child,null,f),i.child=Hs(i,null,s,f)):In(n,i,s,f),i.memoizedState=m.state,n=i.child):n=xa(n,i,f),n}function y0(n,i,s,c){return Os(),i.flags|=256,In(n,i,s,c),i.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(n){return{baseLanes:n,cachePool:cg()}}function cf(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=hi),n}function S0(n,i,s){var c=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=n!==null&&n.memoizedState===null?!1:(un.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,n===null){if(Tt){if(f?es(i):ts(),(n=Jt)?(n=C_(n,Ei),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Ya!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=eg(n),s.return=i,i.child=s,On=i,Jt=null)):n=null,n===null)throw Ka(i);return Wf(n)?i.lanes=32:i.lanes=536870912,null}var w=c.children;return c=c.fallback,f?(ts(),f=i.mode,w=Cc({mode:"hidden",children:w},f),c=Us(c,f,s,null),w.return=i,c.return=i,w.sibling=c,i.child=w,c=i.child,c.memoizedState=lf(s),c.childLanes=cf(n,S,s),i.memoizedState=of,Zo(null,c)):(es(i),uf(i,w))}var F=n.memoizedState;if(F!==null&&(w=F.dehydrated,w!==null)){if(m)i.flags&256?(es(i),i.flags&=-257,i=hf(n,i,s)):i.memoizedState!==null?(ts(),i.child=n.child,i.flags|=128,i=null):(ts(),w=c.fallback,f=i.mode,c=Cc({mode:"visible",children:c.children},f),w=Us(w,f,s,null),w.flags|=2,c.return=i,w.return=i,c.sibling=w,i.child=c,Hs(i,n.child,null,s),c=i.child,c.memoizedState=lf(s),c.childLanes=cf(n,S,s),i.memoizedState=of,i=Zo(null,c));else if(es(i),Wf(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var J=S.dgst;S=J,c=Error(a(419)),c.stack="",c.digest=S,zo({value:c,source:null,stack:null}),i=hf(n,i,s)}else if(mn||xr(n,i,s,!1),S=(s&n.childLanes)!==0,mn||S){if(S=Kt,S!==null&&(c=ar(S,s),c!==0&&c!==F.retryLane))throw F.retryLane=c,Ns(n,c),ni(S,n,c),sf;Xf(w)||zc(),i=hf(n,i,s)}else Xf(w)?(i.flags|=192,i.child=n.child,i=null):(n=F.treeContext,Jt=Ai(w.nextSibling),On=i,Tt=!0,ja=null,Ei=!1,n!==null&&ig(i,n),i=uf(i,c.children),i.flags|=4096);return i}return f?(ts(),w=c.fallback,f=i.mode,F=n.child,J=F.sibling,c=da(F,{mode:"hidden",children:c.children}),c.subtreeFlags=F.subtreeFlags&65011712,J!==null?w=da(J,w):(w=Us(w,f,s,null),w.flags|=2),w.return=i,c.return=i,c.sibling=w,i.child=c,Zo(null,c),c=i.child,w=n.child.memoizedState,w===null?w=lf(s):(f=w.cachePool,f!==null?(F=dn._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=cg(),w={baseLanes:w.baseLanes|s,cachePool:f}),c.memoizedState=w,c.childLanes=cf(n,S,s),i.memoizedState=of,Zo(n.child,c)):(es(i),s=n.child,n=s.sibling,s=da(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,n!==null&&(S=i.deletions,S===null?(i.deletions=[n],i.flags|=16):S.push(n)),i.child=s,i.memoizedState=null,s)}function uf(n,i){return i=Cc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Cc(n,i){return n=oi(22,n,null,i),n.lanes=0,n}function hf(n,i,s){return Hs(i,n.child,null,s),n=uf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function M0(n,i,s){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Th(n.return,i,s)}function ff(n,i,s,c,f,m){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=c,S.tail=s,S.tailMode=f,S.treeForkCount=m)}function b0(n,i,s){var c=i.pendingProps,f=c.revealOrder,m=c.tail;c=c.children;var S=un.current,w=(S&2)!==0;if(w?(S=S&1|2,i.flags|=128):S&=1,ge(un,S),In(n,i,c,s),c=Tt?Bo:0,!w&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&M0(n,s,i);else if(n.tag===19)M0(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)n=s.alternate,n!==null&&_c(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ff(i,!1,f,s,m,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&_c(n)===null){i.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}ff(i,!0,s,null,m,c);break;case"together":ff(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function xa(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(xr(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=da(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=da(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function df(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&cc(n)))}function wS(n,i,s){switch(i.tag){case 3:Ce(i,i.stateNode.containerInfo),Za(i,dn,n.memoizedState.cache),Os();break;case 27:case 5:Fe(i);break;case 4:Ce(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Bh(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(es(i),i.flags|=128,null):(s&i.child.childLanes)!==0?S0(n,i,s):(es(i),n=xa(n,i,s),n!==null?n.sibling:null);es(i);break;case 19:var f=(n.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(xr(n,i,s,!1),c=(s&i.childLanes)!==0),f){if(c)return b0(n,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ge(un,un.current),c)break;return null;case 22:return i.lanes=0,m0(n,i,s,i.pendingProps);case 24:Za(i,dn,n.memoizedState.cache)}return xa(n,i,s)}function E0(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)mn=!0;else{if(!df(n,s)&&(i.flags&128)===0)return mn=!1,wS(n,i,s);mn=(n.flags&131072)!==0}else mn=!1,Tt&&(i.flags&1048576)!==0&&ng(i,Bo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=zs(i.elementType),i.type=n,typeof n=="function")_h(n)?(c=Gs(n,c),i.tag=1,i=x0(null,i,n,c,s)):(i.tag=0,i=rf(null,i,n,c,s));else{if(n!=null){var f=n.$$typeof;if(f===L){i.tag=11,i=f0(null,i,n,c,s);break e}else if(f===P){i.tag=14,i=d0(null,i,n,c,s);break e}}throw i=de(n)||n,Error(a(306,i,""))}}return i;case 0:return rf(n,i,i.type,i.pendingProps,s);case 1:return c=i.type,f=Gs(c,i.pendingProps),x0(n,i,c,f,s);case 3:e:{if(Ce(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;f=m.element,Nh(n,i),Wo(i,c,null,s);var S=i.memoizedState;if(c=S.cache,Za(i,dn,c),c!==m.cache&&Ah(i,[dn],s,!0),Xo(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=y0(n,i,c,s);break e}else if(c!==f){f=Si(Error(a(424)),i),zo(f),i=y0(n,i,c,s);break e}else for(n=i.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Jt=Ai(n.firstChild),On=i,Tt=!0,ja=null,Ei=!0,s=mg(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Os(),c===f){i=xa(n,i,s);break e}In(n,i,c,s)}i=i.child}return i;case 26:return Rc(n,i),n===null?(s=P_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,n=i.pendingProps,c=Wc(ne.current).createElement(s),c[fn]=i,c[Rn]=n,Bn(c,s,n),R(c),i.stateNode=c):i.memoizedState=P_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Fe(i),n===null&&Tt&&(c=i.stateNode=N_(i.type,i.pendingProps,ne.current),On=i,Ei=!0,f=Jt,cs(i.type)?(qf=f,Jt=Ai(c.firstChild)):Jt=f),In(n,i,i.pendingProps.children,s),Rc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Tt&&((f=c=Jt)&&(c=iM(c,i.type,i.pendingProps,Ei),c!==null?(i.stateNode=c,On=i,Jt=Ai(c.firstChild),Ei=!1,f=!0):f=!1),f||Ka(i)),Fe(i),f=i.type,m=i.pendingProps,S=n!==null?n.memoizedProps:null,c=m.children,Vf(f,m)?c=null:S!==null&&Vf(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Fh(n,i,vS,null,null,s),hl._currentValue=f),Rc(n,i),In(n,i,c,s),i.child;case 6:return n===null&&Tt&&((n=s=Jt)&&(s=aM(s,i.pendingProps,Ei),s!==null?(i.stateNode=s,On=i,Jt=null,n=!0):n=!1),n||Ka(i)),null;case 13:return S0(n,i,s);case 4:return Ce(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Hs(i,null,c,s):In(n,i,c,s),i.child;case 11:return f0(n,i,i.type,i.pendingProps,s);case 7:return In(n,i,i.pendingProps,s),i.child;case 8:return In(n,i,i.pendingProps.children,s),i.child;case 12:return In(n,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,Za(i,i.type,c.value),In(n,i,c.children,s),i.child;case 9:return f=i.type._context,c=i.pendingProps.children,Is(i),f=Pn(f),c=c(f),i.flags|=1,In(n,i,c,s),i.child;case 14:return d0(n,i,i.type,i.pendingProps,s);case 15:return p0(n,i,i.type,i.pendingProps,s);case 19:return b0(n,i,s);case 31:return AS(n,i,s);case 22:return m0(n,i,s,i.pendingProps);case 24:return Is(i),c=Pn(dn),n===null?(f=Ch(),f===null&&(f=Kt,m=wh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:c,cache:f},Lh(i),Za(i,dn,f)):((n.lanes&s)!==0&&(Nh(n,i),Wo(i,null,null,s),Xo()),f=n.memoizedState,m=i.memoizedState,f.parent!==c?(f={parent:c,cache:c},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Za(i,dn,c)):(c=m.cache,Za(i,dn,c),c!==f.cache&&Ah(i,[dn],s,!0))),In(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(n){n.flags|=4}function pf(n,i,s,c,f){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(Q0())n.flags|=8192;else throw Fs=dc,Dh}else n.flags&=-16777217}function T0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!H_(i))if(Q0())n.flags|=8192;else throw Fs=dc,Dh}function Dc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?zt():536870912,n.lanes|=i,Lr|=i)}function Qo(n,i){if(!Tt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(i)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=s,i}function RS(n,i,s){var c=i.pendingProps;switch(Sh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return s=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),ga(dn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(vr(i)?ya(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bh())),$t(i),null;case 26:var f=i.type,m=i.memoizedState;return n===null?(ya(i),m!==null?($t(i),T0(i,m)):($t(i),pf(i,f,null,c,s))):m?m!==n.memoizedState?(ya(i),$t(i),T0(i,m)):($t(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&ya(i),$t(i),pf(i,f,n,c,s)),null;case 27:if(_t(i),s=ne.current,f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&ya(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return $t(i),null}n=Te.current,vr(i)?ag(i):(n=N_(f,c,s),i.stateNode=n,ya(i))}return $t(i),null;case 5:if(_t(i),f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&ya(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return $t(i),null}if(m=Te.current,vr(i))ag(i);else{var S=Wc(ne.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?S.createElement("select",{is:c.is}):S.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?S.createElement(f,{is:c.is}):S.createElement(f)}}m[fn]=i,m[Rn]=c;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;e:switch(Bn(m,f,c),f){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&ya(i)}}return $t(i),pf(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&ya(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=ne.current,vr(i)){if(n=i.stateNode,s=i.memoizedProps,c=null,f=On,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[fn]=i,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||S_(n.nodeValue,s)),n||Ka(i,!0)}else n=Wc(n).createTextNode(c),n[fn]=i,i.stateNode=n}return $t(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(c=vr(i),s!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[fn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),n=!1}else s=bh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(ci(i),i):(ci(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $t(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=vr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),f=!1}else f=bh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ci(i),i):(ci(i),null)}return ci(i),(i.flags&128)!==0?(i.lanes=s,i):(s=c!==null,n=n!==null&&n.memoizedState!==null,s&&(c=i.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),Dc(i,i.updateQueue),$t(i),null);case 4:return Ge(),n===null&&If(i.stateNode.containerInfo),$t(i),null;case 10:return ga(i.type),$t(i),null;case 19:if(ie(un),c=i.memoizedState,c===null)return $t(i),null;if(f=(i.flags&128)!==0,m=c.rendering,m===null)if(f)Qo(c,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=_c(n),m!==null){for(i.flags|=128,Qo(c,!1),n=m.updateQueue,i.updateQueue=n,Dc(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)$m(s,n),s=s.sibling;return ge(un,un.current&1|2),Tt&&pa(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&E()>Pc&&(i.flags|=128,f=!0,Qo(c,!1),i.lanes=4194304)}else{if(!f)if(n=_c(m),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,Dc(i,n),Qo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Tt)return $t(i),null}else 2*E()-c.renderingStartTime>Pc&&s!==536870912&&(i.flags|=128,f=!0,Qo(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=E(),n.sibling=null,s=un.current,ge(un,f?s&1|2:s&1),Tt&&pa(i,c.treeForkCount),n):($t(i),null);case 22:case 23:return ci(i),Ih(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),s=i.updateQueue,s!==null&&Dc(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),n!==null&&ie(Bs),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ga(dn),$t(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function CS(n,i){switch(Sh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ga(dn),Ge(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return _t(i),null;case 31:if(i.memoizedState!==null){if(ci(i),i.alternate===null)throw Error(a(340));Os()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(ci(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Os()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ie(un),null;case 4:return Ge(),null;case 10:return ga(i.type),null;case 22:case 23:return ci(i),Ih(),n!==null&&ie(Bs),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ga(dn),null;case 25:return null;default:return null}}function A0(n,i){switch(Sh(i),i.tag){case 3:ga(dn),Ge();break;case 26:case 27:case 5:_t(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&ci(i);break;case 13:ci(i);break;case 19:ie(un);break;case 10:ga(i.type);break;case 22:case 23:ci(i),Ih(),n!==null&&ie(Bs);break;case 24:ga(dn)}}function Jo(n,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&n)===n){c=void 0;var m=s.create,S=s.inst;c=m(),S.destroy=c}s=s.next}while(s!==f)}}catch(w){Vt(i,i.return,w)}}function ns(n,i,s){try{var c=i.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&n)===n){var S=c.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=i;var F=s,J=w;try{J()}catch(he){Vt(f,F,he)}}}c=c.next}while(c!==m)}}catch(he){Vt(i,i.return,he)}}function w0(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{_g(i,s)}catch(c){Vt(n,n.return,c)}}}function R0(n,i,s){s.props=Gs(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Vt(n,i,c)}}function $o(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(f){Vt(n,i,f)}}function Qi(n,i){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(f){Vt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Vt(n,i,f)}else s.current=null}function C0(n){var i=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(f){Vt(n,n.return,f)}}function mf(n,i,s){try{var c=n.stateNode;QS(c,n.type,s,i),c[Rn]=i}catch(f){Vt(n,n.return,f)}}function D0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&cs(n.type)||n.tag===4}function gf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||D0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&cs(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _f(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ha));else if(c!==4&&(c===27&&cs(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(_f(n,i,s),n=n.sibling;n!==null;)_f(n,i,s),n=n.sibling}function Lc(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(c!==4&&(c===27&&cs(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Lc(n,i,s),n=n.sibling;n!==null;)Lc(n,i,s),n=n.sibling}function L0(n){var i=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Bn(i,c,s),i[fn]=n,i[Rn]=s}catch(m){Vt(n,n.return,m)}}var Sa=!1,gn=!1,vf=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function DS(n,i){if(n=n.containerInfo,Ff=Jc,n=Xm(n),uh(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,w=-1,F=-1,J=0,he=0,me=n,ee=null;t:for(;;){for(var oe;me!==s||f!==0&&me.nodeType!==3||(w=S+f),me!==m||c!==0&&me.nodeType!==3||(F=S+c),me.nodeType===3&&(S+=me.nodeValue.length),(oe=me.firstChild)!==null;)ee=me,me=oe;for(;;){if(me===n)break t;if(ee===s&&++J===f&&(w=S),ee===m&&++he===c&&(F=S),(oe=me.nextSibling)!==null)break;me=ee,ee=me.parentNode}me=oe}s=w===-1||F===-1?null:{start:w,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Hf={focusedElem:n,selectionRange:s},Jc=!1,Tn=i;Tn!==null;)if(i=Tn,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Tn=n;else for(;Tn!==null;){switch(i=Tn,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)f=n[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var Ve=Gs(s.type,f);n=c.getSnapshotBeforeUpdate(Ve,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(nt){Vt(s,s.return,nt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)kf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":kf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Tn=n;break}Tn=i.return}}function U0(n,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:ba(n,s),c&4&&Jo(5,s);break;case 1:if(ba(n,s),c&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(S){Vt(s,s.return,S)}else{var f=Gs(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(s,s.return,S)}}c&64&&w0(s),c&512&&$o(s,s.return);break;case 3:if(ba(n,s),c&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_g(n,i)}catch(S){Vt(s,s.return,S)}}break;case 27:i===null&&c&4&&L0(s);case 26:case 5:ba(n,s),i===null&&c&4&&C0(s),c&512&&$o(s,s.return);break;case 12:ba(n,s);break;case 31:ba(n,s),c&4&&I0(n,s);break;case 13:ba(n,s),c&4&&B0(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=FS.bind(null,s),sM(n,s))));break;case 22:if(c=s.memoizedState!==null||Sa,!c){i=i!==null&&i.memoizedState!==null||gn,f=Sa;var m=gn;Sa=c,(gn=i)&&!m?Ea(n,s,(s.subtreeFlags&8772)!==0):ba(n,s),Sa=f,gn=m}break;case 30:break;default:ba(n,s)}}function O0(n){var i=n.alternate;i!==null&&(n.alternate=null,O0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&wo(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var an=null,Jn=!1;function Ma(n,i,s){for(s=s.child;s!==null;)P0(n,i,s),s=s.sibling}function P0(n,i,s){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Me,s)}catch{}switch(s.tag){case 26:gn||Qi(s,i),Ma(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:gn||Qi(s,i);var c=an,f=Jn;cs(s.type)&&(an=s.stateNode,Jn=!1),Ma(n,i,s),ll(s.stateNode),an=c,Jn=f;break;case 5:gn||Qi(s,i);case 6:if(c=an,f=Jn,an=null,Ma(n,i,s),an=c,Jn=f,an!==null)if(Jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(m){Vt(s,i,m)}else try{an.removeChild(s.stateNode)}catch(m){Vt(s,i,m)}break;case 18:an!==null&&(Jn?(n=an,w_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Fr(n)):w_(an,s.stateNode));break;case 4:c=an,f=Jn,an=s.stateNode.containerInfo,Jn=!0,Ma(n,i,s),an=c,Jn=f;break;case 0:case 11:case 14:case 15:ns(2,s,i),gn||ns(4,s,i),Ma(n,i,s);break;case 1:gn||(Qi(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&R0(s,i,c)),Ma(n,i,s);break;case 21:Ma(n,i,s);break;case 22:gn=(c=gn)||s.memoizedState!==null,Ma(n,i,s),gn=c;break;default:Ma(n,i,s)}}function I0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Fr(n)}catch(s){Vt(i,i.return,s)}}}function B0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Fr(n)}catch(s){Vt(i,i.return,s)}}function LS(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new N0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new N0),i;default:throw Error(a(435,n.tag))}}function Nc(n,i){var s=LS(n);i.forEach(function(c){if(!s.has(c)){s.add(c);var f=HS.bind(null,n,c);c.then(f,f)}})}function $n(n,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],m=n,S=i,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(cs(w.type)){an=w.stateNode,Jn=!1;break e}break;case 5:an=w.stateNode,Jn=!1;break e;case 3:case 4:an=w.stateNode.containerInfo,Jn=!0;break e}w=w.return}if(an===null)throw Error(a(160));P0(m,S,f),an=null,Jn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)z0(i,n),i=i.sibling}var Ii=null;function z0(n,i){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:$n(i,n),ei(n),c&4&&(ns(3,n,n.return),Jo(3,n),ns(5,n,n.return));break;case 1:$n(i,n),ei(n),c&512&&(gn||s===null||Qi(s,s.return)),c&64&&Sa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var f=Ii;if($n(i,n),ei(n),c&512&&(gn||s===null||Qi(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ws]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),Bn(m,c,s),m[fn]=n,R(m),c=m;break e;case"link":var S=z_("link","href",f).get(c+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(m=S[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}m=f.createElement(c),Bn(m,c,s),f.head.appendChild(m);break;case"meta":if(S=z_("meta","content",f).get(c+(s.content||""))){for(w=0;w<S.length;w++)if(m=S[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}m=f.createElement(c),Bn(m,c,s),f.head.appendChild(m);break;default:throw Error(a(468,c))}m[fn]=n,R(m),c=m}n.stateNode=c}else F_(f,n.type,n.stateNode);else n.stateNode=B_(f,c,n.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?F_(f,n.type,n.stateNode):B_(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&mf(n,n.memoizedProps,s.memoizedProps)}break;case 27:$n(i,n),ei(n),c&512&&(gn||s===null||Qi(s,s.return)),s!==null&&c&4&&mf(n,n.memoizedProps,s.memoizedProps);break;case 5:if($n(i,n),ei(n),c&512&&(gn||s===null||Qi(s,s.return)),n.flags&32){f=n.stateNode;try{vn(f,"")}catch(Ve){Vt(n,n.return,Ve)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,mf(n,f,s!==null?s.memoizedProps:f)),c&1024&&(vf=!0);break;case 6:if($n(i,n),ei(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(Ve){Vt(n,n.return,Ve)}}break;case 3:if(jc=null,f=Ii,Ii=qc(i.containerInfo),$n(i,n),Ii=f,ei(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(i.containerInfo)}catch(Ve){Vt(n,n.return,Ve)}vf&&(vf=!1,F0(n));break;case 4:c=Ii,Ii=qc(n.stateNode.containerInfo),$n(i,n),ei(n),Ii=c;break;case 12:$n(i,n),ei(n);break;case 31:$n(i,n),ei(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Nc(n,c)));break;case 13:$n(i,n),ei(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Oc=E()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Nc(n,c)));break;case 22:f=n.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,J=Sa,he=gn;if(Sa=J||f,gn=he||F,$n(i,n),gn=he,Sa=J,ei(n),c&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||Sa||gn||ks(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(m=F.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=F.stateNode;var me=F.memoizedProps.style,ee=me!=null&&me.hasOwnProperty("display")?me.display:null;w.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ve){Vt(F,F.return,Ve)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Ve){Vt(F,F.return,Ve)}}}else if(i.tag===18){if(s===null){F=i;try{var oe=F.stateNode;f?R_(oe,!0):R_(F.stateNode,!1)}catch(Ve){Vt(F,F.return,Ve)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Nc(n,s))));break;case 19:$n(i,n),ei(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Nc(n,c)));break;case 30:break;case 21:break;default:$n(i,n),ei(n)}}function ei(n){var i=n.flags;if(i&2){try{for(var s,c=n.return;c!==null;){if(D0(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=gf(n);Lc(n,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(vn(S,""),s.flags&=-33);var w=gf(n);Lc(n,w,S);break;case 3:case 4:var F=s.stateNode.containerInfo,J=gf(n);_f(n,J,F);break;default:throw Error(a(161))}}catch(he){Vt(n,n.return,he)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function F0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;F0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ba(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)U0(n,i.alternate,i),i=i.sibling}function ks(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ns(4,i,i.return),ks(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&R0(i,i.return,s),ks(i);break;case 27:ll(i.stateNode);case 26:case 5:Qi(i,i.return),ks(i);break;case 22:i.memoizedState===null&&ks(i);break;case 30:ks(i);break;default:ks(i)}n=n.sibling}}function Ea(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,f=n,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:Ea(f,m,s),Jo(4,m);break;case 1:if(Ea(f,m,s),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(J){Vt(c,c.return,J)}if(c=m,f=c.updateQueue,f!==null){var w=c.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)gg(F[f],w)}catch(J){Vt(c,c.return,J)}}s&&S&64&&w0(m),$o(m,m.return);break;case 27:L0(m);case 26:case 5:Ea(f,m,s),s&&c===null&&S&4&&C0(m),$o(m,m.return);break;case 12:Ea(f,m,s);break;case 31:Ea(f,m,s),s&&S&4&&I0(f,m);break;case 13:Ea(f,m,s),s&&S&4&&B0(f,m);break;case 22:m.memoizedState===null&&Ea(f,m,s),$o(m,m.return);break;case 30:break;default:Ea(f,m,s)}i=i.sibling}}function xf(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Fo(s))}function yf(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Fo(n))}function Bi(n,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)H0(n,i,s,c),i=i.sibling}function H0(n,i,s,c){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(n,i,s,c),f&2048&&Jo(9,i);break;case 1:Bi(n,i,s,c);break;case 3:Bi(n,i,s,c),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Fo(n)));break;case 12:if(f&2048){Bi(n,i,s,c),n=i.stateNode;try{var m=i.memoizedProps,S=m.id,w=m.onPostCommit;typeof w=="function"&&w(S,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(F){Vt(i,i.return,F)}}else Bi(n,i,s,c);break;case 31:Bi(n,i,s,c);break;case 13:Bi(n,i,s,c);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Bi(n,i,s,c):el(n,i):m._visibility&2?Bi(n,i,s,c):(m._visibility|=2,Rr(n,i,s,c,(i.subtreeFlags&10256)!==0||!1)),f&2048&&xf(S,i);break;case 24:Bi(n,i,s,c),f&2048&&yf(i.alternate,i);break;default:Bi(n,i,s,c)}}function Rr(n,i,s,c,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,S=i,w=s,F=c,J=S.flags;switch(S.tag){case 0:case 11:case 15:Rr(m,S,w,F,f),Jo(8,S);break;case 23:break;case 22:var he=S.stateNode;S.memoizedState!==null?he._visibility&2?Rr(m,S,w,F,f):el(m,S):(he._visibility|=2,Rr(m,S,w,F,f)),f&&J&2048&&xf(S.alternate,S);break;case 24:Rr(m,S,w,F,f),f&&J&2048&&yf(S.alternate,S);break;default:Rr(m,S,w,F,f)}i=i.sibling}}function el(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,c=i,f=c.flags;switch(c.tag){case 22:el(s,c),f&2048&&xf(c.alternate,c);break;case 24:el(s,c),f&2048&&yf(c.alternate,c);break;default:el(s,c)}i=i.sibling}}var tl=8192;function Cr(n,i,s){if(n.subtreeFlags&tl)for(n=n.child;n!==null;)V0(n,i,s),n=n.sibling}function V0(n,i,s){switch(n.tag){case 26:Cr(n,i,s),n.flags&tl&&n.memoizedState!==null&&_M(s,Ii,n.memoizedState,n.memoizedProps);break;case 5:Cr(n,i,s);break;case 3:case 4:var c=Ii;Ii=qc(n.stateNode.containerInfo),Cr(n,i,s),Ii=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=tl,tl=16777216,Cr(n,i,s),tl=c):Cr(n,i,s));break;default:Cr(n,i,s)}}function G0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function nl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Tn=c,X0(c,n)}G0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k0(n),n=n.sibling}function k0(n){switch(n.tag){case 0:case 11:case 15:nl(n),n.flags&2048&&ns(9,n,n.return);break;case 3:nl(n);break;case 12:nl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Uc(n)):nl(n);break;default:nl(n)}}function Uc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Tn=c,X0(c,n)}G0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ns(8,i,i.return),Uc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Uc(i));break;default:Uc(i)}n=n.sibling}}function X0(n,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:ns(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Fo(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Tn=c;else e:for(s=n;Tn!==null;){c=Tn;var f=c.sibling,m=c.return;if(O0(c),c===s){Tn=null;break e}if(f!==null){f.return=m,Tn=f;break e}Tn=m}}}var NS={getCacheForType:function(n){var i=Pn(dn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return Pn(dn).controller.signal}},US=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Kt=null,xt=null,bt=0,Ht=0,ui=null,is=!1,Dr=!1,Sf=!1,Ta=0,cn=0,as=0,Xs=0,Mf=0,hi=0,Lr=0,il=null,ti=null,bf=!1,Oc=0,W0=0,Pc=1/0,Ic=null,ss=null,xn=0,rs=null,Nr=null,Aa=0,Ef=0,Tf=null,q0=null,al=0,Af=null;function fi(){return(Pt&2)!==0&&bt!==0?bt&-bt:z.T!==null?Nf():To()}function Y0(){if(hi===0)if((bt&536870912)===0||Tt){var n=Ee;Ee<<=1,(Ee&3932160)===0&&(Ee=262144),hi=n}else hi=536870912;return n=li.current,n!==null&&(n.flags|=32),hi}function ni(n,i,s){(n===Kt&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)&&(Ur(n,0),os(n,bt,hi,!1)),Fn(n,s),((Pt&2)===0||n!==Kt)&&(n===Kt&&((Pt&2)===0&&(Xs|=s),cn===4&&os(n,bt,hi,!1)),Ji(n))}function j0(n,i,s){if((Pt&6)!==0)throw Error(a(327));var c=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Ae(n,i),f=c?IS(n,i):Rf(n,i,!0),m=c;do{if(f===0){Dr&&!c&&os(n,i,0,!1);break}else{if(s=n.current.alternate,m&&!OS(s)){f=Rf(n,i,!1),m=!1;continue}if(f===2){if(m=i,n.errorRecoveryDisabledLanes&m)var S=0;else S=n.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var w=n;f=il;var F=w.current.memoizedState.isDehydrated;if(F&&(Ur(w,S).flags|=256),S=Rf(w,S,!1),S!==2){if(Sf&&!F){w.errorRecoveryDisabledLanes|=m,Xs|=m,f=4;break e}m=ti,ti=f,m!==null&&(ti===null?ti=m:ti.push.apply(ti,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){Ur(n,0),os(n,i,0,!0);break}e:{switch(c=n,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:os(c,i,hi,!is);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Oc+300-E(),10<f)){if(os(c,i,hi,!is),_e(c,0,!0)!==0)break e;Aa=i,c.timeoutHandle=T_(K0.bind(null,c,s,ti,Ic,bf,i,hi,Xs,Lr,is,m,"Throttled",-0,0),f);break e}K0(c,s,ti,Ic,bf,i,hi,Xs,Lr,is,m,null,-0,0)}}break}while(!0);Ji(n)}function K0(n,i,s,c,f,m,S,w,F,J,he,me,ee,oe){if(n.timeoutHandle=-1,me=i.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},V0(i,m,me);var Ve=(m&62914560)===m?Oc-E():(m&4194048)===m?W0-E():0;if(Ve=vM(me,Ve),Ve!==null){Aa=m,n.cancelPendingCommit=Ve(i_.bind(null,n,i,m,s,c,f,S,w,F,he,me,null,ee,oe)),os(n,m,S,!J);return}}i_(n,i,m,s,c,f,S,w,F)}function OS(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var f=s[c],m=f.getSnapshot;f=f.value;try{if(!ri(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function os(n,i,s,c){i&=~Mf,i&=~Xs,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var f=i;0<f;){var m=31-Oe(f),S=1<<m;c[m]=-1,f&=~S}s!==0&&jl(n,s,i)}function Bc(){return(Pt&6)===0?(sl(0),!1):!0}function wf(){if(xt!==null){if(Ht===0)var n=xt.return;else n=xt,ma=Ps=null,Gh(n),br=null,Vo=0,n=xt;for(;n!==null;)A0(n.alternate,n),n=n.return;xt=null}}function Ur(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,eM(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Aa=0,wf(),Kt=n,xt=s=da(n.current,null),bt=i,Ht=0,ui=null,is=!1,Dr=Ae(n,i),Sf=!1,Lr=hi=Mf=Xs=as=cn=0,ti=il=null,bf=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var f=31-Oe(c),m=1<<f;i|=n[f],c&=~m}return Ta=i,ac(),s}function Z0(n,i){ct=null,z.H=Ko,i===Mr||i===fc?(i=fg(),Ht=3):i===Dh?(i=fg(),Ht=4):Ht=i===sf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ui=i,xt===null&&(cn=1,Ac(n,Si(i,n.current)))}function Q0(){var n=li.current;return n===null?!0:(bt&4194048)===bt?Ti===null:(bt&62914560)===bt||(bt&536870912)!==0?n===Ti:!1}function J0(){var n=z.H;return z.H=Ko,n===null?Ko:n}function $0(){var n=z.A;return z.A=NS,n}function zc(){cn=4,is||(bt&4194048)!==bt&&li.current!==null||(Dr=!0),(as&134217727)===0&&(Xs&134217727)===0||Kt===null||os(Kt,bt,hi,!1)}function Rf(n,i,s){var c=Pt;Pt|=2;var f=J0(),m=$0();(Kt!==n||bt!==i)&&(Ic=null,Ur(n,i)),i=!1;var S=cn;e:do try{if(Ht!==0&&xt!==null){var w=xt,F=ui;switch(Ht){case 8:wf(),S=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var J=Ht;if(Ht=0,ui=null,Or(n,w,F,J),s&&Dr){S=0;break e}break;default:J=Ht,Ht=0,ui=null,Or(n,w,F,J)}}PS(),S=cn;break}catch(he){Z0(n,he)}while(!0);return i&&n.shellSuspendCounter++,ma=Ps=null,Pt=c,z.H=f,z.A=m,xt===null&&(Kt=null,bt=0,ac()),S}function PS(){for(;xt!==null;)e_(xt)}function IS(n,i){var s=Pt;Pt|=2;var c=J0(),f=$0();Kt!==n||bt!==i?(Ic=null,Pc=E()+500,Ur(n,i)):Dr=Ae(n,i);e:do try{if(Ht!==0&&xt!==null){i=xt;var m=ui;t:switch(Ht){case 1:Ht=0,ui=null,Or(n,i,m,1);break;case 2:case 9:if(ug(m)){Ht=0,ui=null,t_(i);break}i=function(){Ht!==2&&Ht!==9||Kt!==n||(Ht=7),Ji(n)},m.then(i,i);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:ug(m)?(Ht=0,ui=null,t_(i)):(Ht=0,ui=null,Or(n,i,m,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var w=xt;if(S?H_(S):w.stateNode.complete){Ht=0,ui=null;var F=w.sibling;if(F!==null)xt=F;else{var J=w.return;J!==null?(xt=J,Fc(J)):xt=null}break t}}Ht=0,ui=null,Or(n,i,m,5);break;case 6:Ht=0,ui=null,Or(n,i,m,6);break;case 8:wf(),cn=6;break e;default:throw Error(a(462))}}BS();break}catch(he){Z0(n,he)}while(!0);return ma=Ps=null,z.H=c,z.A=f,Pt=s,xt!==null?0:(Kt=null,bt=0,ac(),cn)}function BS(){for(;xt!==null&&!qe();)e_(xt)}function e_(n){var i=E0(n.alternate,n,Ta);n.memoizedProps=n.pendingProps,i===null?Fc(n):xt=i}function t_(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=v0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=v0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Gh(i);default:A0(s,i),i=xt=$m(i,Ta),i=E0(s,i,Ta)}n.memoizedProps=n.pendingProps,i===null?Fc(n):xt=i}function Or(n,i,s,c){ma=Ps=null,Gh(i),br=null,Vo=0;var f=i.return;try{if(TS(n,f,i,s,bt)){cn=1,Ac(n,Si(s,n.current)),xt=null;return}}catch(m){if(f!==null)throw xt=f,m;cn=1,Ac(n,Si(s,n.current)),xt=null;return}i.flags&32768?(Tt||c===1?n=!0:Dr||(bt&536870912)!==0?n=!1:(is=n=!0,(c===2||c===9||c===3||c===6)&&(c=li.current,c!==null&&c.tag===13&&(c.flags|=16384))),n_(i,n)):Fc(i)}function Fc(n){var i=n;do{if((i.flags&32768)!==0){n_(i,is);return}n=i.return;var s=RS(i.alternate,i,Ta);if(s!==null){xt=s;return}if(i=i.sibling,i!==null){xt=i;return}xt=i=n}while(i!==null);cn===0&&(cn=5)}function n_(n,i){do{var s=CS(n.alternate,n);if(s!==null){s.flags&=32767,xt=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){xt=n;return}xt=n=s}while(n!==null);cn=6,xt=null}function i_(n,i,s,c,f,m,S,w,F){n.cancelPendingCommit=null;do Hc();while(xn!==0);if((Pt&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=mh,Ni(n,s,m,S,w,F),n===Kt&&(xt=Kt=null,bt=0),Nr=i,rs=n,Aa=s,Ef=m,Tf=f,q0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,VS(le,function(){return l_(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=z.T,z.T=null,f=H.p,H.p=2,S=Pt,Pt|=4;try{DS(n,i,s)}finally{Pt=S,H.p=f,z.T=c}}xn=1,a_(),s_(),r_()}}function a_(){if(xn===1){xn=0;var n=rs,i=Nr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var c=H.p;H.p=2;var f=Pt;Pt|=4;try{z0(i,n);var m=Hf,S=Xm(n.containerInfo),w=m.focusedElem,F=m.selectionRange;if(S!==w&&w&&w.ownerDocument&&km(w.ownerDocument.documentElement,w)){if(F!==null&&uh(w)){var J=F.start,he=F.end;if(he===void 0&&(he=J),"selectionStart"in w)w.selectionStart=J,w.selectionEnd=Math.min(he,w.value.length);else{var me=w.ownerDocument||document,ee=me&&me.defaultView||window;if(ee.getSelection){var oe=ee.getSelection(),Ve=w.textContent.length,nt=Math.min(F.start,Ve),Yt=F.end===void 0?nt:Math.min(F.end,Ve);!oe.extend&&nt>Yt&&(S=Yt,Yt=nt,nt=S);var K=Gm(w,nt),X=Gm(w,Yt);if(K&&X&&(oe.rangeCount!==1||oe.anchorNode!==K.node||oe.anchorOffset!==K.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var Q=me.createRange();Q.setStart(K.node,K.offset),oe.removeAllRanges(),nt>Yt?(oe.addRange(Q),oe.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),oe.addRange(Q))}}}}for(me=[],oe=w;oe=oe.parentNode;)oe.nodeType===1&&me.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<me.length;w++){var pe=me[w];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Jc=!!Ff,Hf=Ff=null}finally{Pt=f,H.p=c,z.T=s}}n.current=i,xn=2}}function s_(){if(xn===2){xn=0;var n=rs,i=Nr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var c=H.p;H.p=2;var f=Pt;Pt|=4;try{U0(n,i.alternate,i)}finally{Pt=f,H.p=c,z.T=s}}xn=3}}function r_(){if(xn===4||xn===3){xn=0,U();var n=rs,i=Nr,s=Aa,c=q0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xn=5:(xn=0,Nr=rs=null,o_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(ss=null),sr(s),i=i.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Me,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=z.T,f=H.p,H.p=2,z.T=null;try{for(var m=n.onRecoverableError,S=0;S<c.length;S++){var w=c[S];m(w.value,{componentStack:w.stack})}}finally{z.T=i,H.p=f}}(Aa&3)!==0&&Hc(),Ji(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Af?al++:(al=0,Af=n):al=0,sl(0)}}function o_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Fo(i)))}function Hc(){return a_(),s_(),r_(),l_()}function l_(){if(xn!==5)return!1;var n=rs,i=Ef;Ef=0;var s=sr(Aa),c=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=Tf,Tf=null;var m=rs,S=Aa;if(xn=0,Nr=rs=null,Aa=0,(Pt&6)!==0)throw Error(a(331));var w=Pt;if(Pt|=4,k0(m.current),H0(m,m.current,S,s),Pt=w,sl(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Me,m)}catch{}return!0}finally{H.p=f,z.T=c,o_(n,i)}}function c_(n,i,s){i=Si(s,i),i=af(n.stateNode,i,2),n=$a(n,i,2),n!==null&&(Fn(n,2),Ji(n))}function Vt(n,i,s){if(n.tag===3)c_(n,n,s);else for(;i!==null;){if(i.tag===3){c_(i,n,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ss===null||!ss.has(c))){n=Si(s,n),s=u0(2),c=$a(i,s,2),c!==null&&(h0(s,c,i,n),Fn(c,2),Ji(c));break}}i=i.return}}function Cf(n,i,s){var c=n.pingCache;if(c===null){c=n.pingCache=new US;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(s)||(Sf=!0,f.add(s),n=zS.bind(null,n,i,s),i.then(n,n))}function zS(n,i,s){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Kt===n&&(bt&s)===s&&(cn===4||cn===3&&(bt&62914560)===bt&&300>E()-Oc?(Pt&2)===0&&Ur(n,0):Mf|=s,Lr===bt&&(Lr=0)),Ji(n)}function u_(n,i){i===0&&(i=zt()),n=Ns(n,i),n!==null&&(Fn(n,i),Ji(n))}function FS(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),u_(n,s)}function HS(n,i){var s=0;switch(n.tag){case 31:case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),u_(n,s)}function VS(n,i){return Rt(n,i)}var Vc=null,Pr=null,Df=!1,Gc=!1,Lf=!1,ls=0;function Ji(n){n!==Pr&&n.next===null&&(Pr===null?Vc=Pr=n:Pr=Pr.next=n),Gc=!0,Df||(Df=!0,kS())}function sl(n,i){if(!Lf&&Gc){Lf=!0;do for(var s=!1,c=Vc;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var S=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-Oe(42|n)+1)-1,m&=f&~(S&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,p_(c,m))}else m=bt,m=_e(c,c===Kt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Ae(c,m)||(s=!0,p_(c,m));c=c.next}while(s);Lf=!1}}function GS(){h_()}function h_(){Gc=Df=!1;var n=0;ls!==0&&$S()&&(n=ls);for(var i=E(),s=null,c=Vc;c!==null;){var f=c.next,m=f_(c,i);m===0?(c.next=null,s===null?Vc=f:s.next=f,f===null&&(Pr=s)):(s=c,(n!==0||(m&3)!==0)&&(Gc=!0)),c=f}xn!==0&&xn!==5||sl(n),ls!==0&&(ls=0)}function f_(n,i){for(var s=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var S=31-Oe(m),w=1<<S,F=f[S];F===-1?((w&s)===0||(w&c)!==0)&&(f[S]=st(w,i)):F<=i&&(n.expiredLanes|=w),m&=~w}if(i=Kt,s=bt,s=_e(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===i&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&It(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ae(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(c!==null&&It(c),sr(s)){case 2:case 8:s=ve;break;case 32:s=le;break;case 268435456:s=we;break;default:s=le}return c=d_.bind(null,n),s=Rt(s,c),n.callbackPriority=i,n.callbackNode=s,i}return c!==null&&c!==null&&It(c),n.callbackPriority=2,n.callbackNode=null,2}function d_(n,i){if(xn!==0&&xn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Hc()&&n.callbackNode!==s)return null;var c=bt;return c=_e(n,n===Kt?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(j0(n,c,i),f_(n,E()),n.callbackNode!=null&&n.callbackNode===s?d_.bind(null,n):null)}function p_(n,i){if(Hc())return null;j0(n,i,!0)}function kS(){tM(function(){(Pt&6)!==0?Rt(fe,GS):h_()})}function Nf(){if(ls===0){var n=yr;n===0&&(n=Le,Le<<=1,(Le&261888)===0&&(Le=256)),ls=n}return ls}function m_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Zl(""+n)}function g_(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function XS(n,i,s,c,f){if(i==="submit"&&s&&s.stateNode===f){var m=m_((f[Rn]||null).action),S=c.submitter;S&&(i=(i=S[Rn]||null)?m_(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var w=new ec("action","action",null,c,f);n.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ls!==0){var F=S?g_(f,S):new FormData(f);Qh(s,{pending:!0,data:F,method:f.method,action:m},null,F)}}else typeof m=="function"&&(w.preventDefault(),F=S?g_(f,S):new FormData(f),Qh(s,{pending:!0,data:F,method:f.method,action:m},m,F))},currentTarget:f}]})}}for(var Uf=0;Uf<ph.length;Uf++){var Of=ph[Uf],WS=Of.toLowerCase(),qS=Of[0].toUpperCase()+Of.slice(1);Pi(WS,"on"+qS)}Pi(Ym,"onAnimationEnd"),Pi(jm,"onAnimationIteration"),Pi(Km,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(lS,"onTransitionRun"),Pi(cS,"onTransitionStart"),Pi(uS,"onTransitionCancel"),Pi(Zm,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function __(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var S=c.length-1;0<=S;S--){var w=c[S],F=w.instance,J=w.currentTarget;if(w=w.listener,F!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=J;try{m(f)}catch(he){ic(he)}f.currentTarget=null,m=F}else for(S=0;S<c.length;S++){if(w=c[S],F=w.instance,J=w.currentTarget,w=w.listener,F!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=J;try{m(f)}catch(he){ic(he)}f.currentTarget=null,m=F}}}}function yt(n,i){var s=i[rr];s===void 0&&(s=i[rr]=new Set);var c=n+"__bubble";s.has(c)||(v_(i,n,2,!1),s.add(c))}function Pf(n,i,s){var c=0;i&&(c|=4),v_(s,n,c,i)}var kc="_reactListening"+Math.random().toString(36).slice(2);function If(n){if(!n[kc]){n[kc]=!0,j.forEach(function(s){s!=="selectionchange"&&(YS.has(s)||Pf(s,!1,n),Pf(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[kc]||(i[kc]=!0,Pf("selectionchange",!1,i))}}function v_(n,i,s,c){switch(Y_(i)){case 2:var f=SM;break;case 8:f=MM;break;default:f=Qf}s=f.bind(null,i,s,n),f=void 0,!th||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,s,{capture:!0,passive:f}):n.addEventListener(i,s,!0):f!==void 0?n.addEventListener(i,s,{passive:f}):n.addEventListener(i,s,!1)}function Bf(n,i,s,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var w=c.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=c.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=ka(w),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){c=m=S;continue e}w=w.parentNode}}c=c.return}bm(function(){var J=m,he=$u(s),me=[];e:{var ee=Qm.get(n);if(ee!==void 0){var oe=ec,Ve=n;switch(n){case"keypress":if(Jl(s)===0)break e;case"keydown":case"keyup":oe=Hy;break;case"focusin":Ve="focus",oe=sh;break;case"focusout":Ve="blur",oe=sh;break;case"beforeblur":case"afterblur":oe=sh;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=ky;break;case Ym:case jm:case Km:oe=Ly;break;case Zm:oe=Wy;break;case"scroll":case"scrollend":oe=Ay;break;case"wheel":oe=Yy;break;case"copy":case"cut":case"paste":oe=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Rm;break;case"toggle":case"beforetoggle":oe=Ky}var nt=(i&4)!==0,Yt=!nt&&(n==="scroll"||n==="scrollend"),K=nt?ee!==null?ee+"Capture":null:ee;nt=[];for(var X=J,Q;X!==null;){var pe=X;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||K===null||(pe=Ro(X,K),pe!=null&&nt.push(ol(X,pe,Q))),Yt)break;X=X.return}0<nt.length&&(ee=new oe(ee,Ve,null,s,he),me.push({event:ee,listeners:nt}))}}if((i&7)===0){e:{if(ee=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",ee&&s!==Ju&&(Ve=s.relatedTarget||s.fromElement)&&(ka(Ve)||Ve[Ui]))break e;if((oe||ee)&&(ee=he.window===he?he:(ee=he.ownerDocument)?ee.defaultView||ee.parentWindow:window,oe?(Ve=s.relatedTarget||s.toElement,oe=J,Ve=Ve?ka(Ve):null,Ve!==null&&(Yt=l(Ve),nt=Ve.tag,Ve!==Yt||nt!==5&&nt!==27&&nt!==6)&&(Ve=null)):(oe=null,Ve=J),oe!==Ve)){if(nt=Am,pe="onMouseLeave",K="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Rm,pe="onPointerLeave",K="onPointerEnter",X="pointer"),Yt=oe==null?ee:Rs(oe),Q=Ve==null?ee:Rs(Ve),ee=new nt(pe,X+"leave",oe,s,he),ee.target=Yt,ee.relatedTarget=Q,pe=null,ka(he)===J&&(nt=new nt(K,X+"enter",Ve,s,he),nt.target=Q,nt.relatedTarget=Yt,pe=nt),Yt=pe,oe&&Ve)t:{for(nt=jS,K=oe,X=Ve,Q=0,pe=K;pe;pe=nt(pe))Q++;pe=0;for(var Je=X;Je;Je=nt(Je))pe++;for(;0<Q-pe;)K=nt(K),Q--;for(;0<pe-Q;)X=nt(X),pe--;for(;Q--;){if(K===X||X!==null&&K===X.alternate){nt=K;break t}K=nt(K),X=nt(X)}nt=null}else nt=null;oe!==null&&x_(me,ee,oe,nt,!1),Ve!==null&&Yt!==null&&x_(me,Yt,Ve,nt,!0)}}e:{if(ee=J?Rs(J):window,oe=ee.nodeName&&ee.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ee.type==="file")var Dt=Im;else if(Om(ee))if(Bm)Dt=sS;else{Dt=iS;var Ye=nS}else oe=ee.nodeName,!oe||oe.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&Oi(J.elementType)&&(Dt=Im):Dt=aS;if(Dt&&(Dt=Dt(n,J))){Pm(me,Dt,s,he);break e}Ye&&Ye(n,ee,J),n==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Dn(ee,"number",ee.value)}switch(Ye=J?Rs(J):window,n){case"focusin":(Om(Ye)||Ye.contentEditable==="true")&&(fr=Ye,hh=J,Io=null);break;case"focusout":Io=hh=fr=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Wm(me,s,he);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Wm(me,s,he)}var ft;if(oh)e:{switch(n){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else hr?Nm(n,s)&&(Et="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(Cm&&s.locale!=="ko"&&(hr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&hr&&(ft=Em()):(qa=he,nh="value"in qa?qa.value:qa.textContent,hr=!0)),Ye=Xc(J,Et),0<Ye.length&&(Et=new wm(Et,n,null,s,he),me.push({event:Et,listeners:Ye}),ft?Et.data=ft:(ft=Um(s),ft!==null&&(Et.data=ft)))),(ft=Qy?Jy(n,s):$y(n,s))&&(Et=Xc(J,"onBeforeInput"),0<Et.length&&(Ye=new wm("onBeforeInput","beforeinput",null,s,he),me.push({event:Ye,listeners:Et}),Ye.data=ft)),XS(me,n,J,s,he)}__(me,i)})}function ol(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Xc(n,i){for(var s=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ro(n,s),f!=null&&c.unshift(ol(n,f,m)),f=Ro(n,i),f!=null&&c.push(ol(n,f,m))),n.tag===3)return c;n=n.return}return[]}function jS(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function x_(n,i,s,c,f){for(var m=i._reactName,S=[];s!==null&&s!==c;){var w=s,F=w.alternate,J=w.stateNode;if(w=w.tag,F!==null&&F===c)break;w!==5&&w!==26&&w!==27||J===null||(F=J,f?(J=Ro(s,m),J!=null&&S.unshift(ol(s,J,F))):f||(J=Ro(s,m),J!=null&&S.push(ol(s,J,F)))),s=s.return}S.length!==0&&n.push({event:i,listeners:S})}var KS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function y_(n){return(typeof n=="string"?n:""+n).replace(KS,`
`).replace(ZS,"")}function S_(n,i){return i=y_(i),y_(n)===i}function qt(n,i,s,c,f,m){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||vn(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&vn(n,""+c);break;case"className":et(n,"class",c);break;case"tabIndex":et(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":et(n,s,c);break;case"style":lr(n,c,m);break;case"data":if(i!=="object"){et(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Zl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&qt(n,i,"name",f.name,f,null),qt(n,i,"formEncType",f.formEncType,f,null),qt(n,i,"formMethod",f.formMethod,f,null),qt(n,i,"formTarget",f.formTarget,f,null)):(qt(n,i,"encType",f.encType,f,null),qt(n,i,"method",f.method,f,null),qt(n,i,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Zl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=ha);break;case"onScroll":c!=null&&yt("scroll",n);break;case"onScrollEnd":c!=null&&yt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Zl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":yt("beforetoggle",n),yt("toggle",n),Xe(n,"popover",c);break;case"xlinkActuate":We(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":We(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":We(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":We(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":We(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":We(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":We(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":We(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":We(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Xe(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ey.get(s)||s,Xe(n,s,c))}}function zf(n,i,s,c,f,m){switch(s){case"style":lr(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof c=="string"?vn(n,c):(typeof c=="number"||typeof c=="bigint")&&vn(n,""+c);break;case"onScroll":c!=null&&yt("scroll",n);break;case"onScrollEnd":c!=null&&yt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!re.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=n[Rn]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(i,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,c,f);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Xe(n,s,c)}}}function Bn(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",n),yt("load",n);var c=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(n,i,m,S,s,null)}}f&&qt(n,i,"srcSet",s.srcSet,s,null),c&&qt(n,i,"src",s.src,s,null);return;case"input":yt("invalid",n);var w=m=S=f=null,F=null,J=null;for(c in s)if(s.hasOwnProperty(c)){var he=s[c];if(he!=null)switch(c){case"name":f=he;break;case"type":S=he;break;case"checked":F=he;break;case"defaultChecked":J=he;break;case"value":m=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,i));break;default:qt(n,i,c,he,s,null)}}ua(n,m,w,F,J,S,f,!1);return;case"select":yt("invalid",n),c=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":S=w;break;case"multiple":c=w;default:qt(n,i,f,w,s,null)}i=m,s=S,n.multiple=!!c,i!=null?xi(n,!!c,i,!1):s!=null&&xi(n,!!c,s,!0);return;case"textarea":yt("invalid",n),m=f=c=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":c=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:qt(n,i,S,w,s,null)}Ln(n,c,f,m);return;case"option":for(F in s)s.hasOwnProperty(F)&&(c=s[F],c!=null)&&(F==="selected"?n.selected=c&&typeof c!="function"&&typeof c!="symbol":qt(n,i,F,c,s,null));return;case"dialog":yt("beforetoggle",n),yt("toggle",n),yt("cancel",n),yt("close",n);break;case"iframe":case"object":yt("load",n);break;case"video":case"audio":for(c=0;c<rl.length;c++)yt(rl[c],n);break;case"image":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"embed":case"source":case"link":yt("error",n),yt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(c=s[J],c!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(n,i,J,c,s,null)}return;default:if(Oi(i)){for(he in s)s.hasOwnProperty(he)&&(c=s[he],c!==void 0&&zf(n,i,he,c,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(c=s[w],c!=null&&qt(n,i,w,c,s,null))}function QS(n,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,w=null,F=null,J=null,he=null;for(oe in s){var me=s[oe];if(s.hasOwnProperty(oe)&&me!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":F=me;default:c.hasOwnProperty(oe)||qt(n,i,oe,null,c,me)}}for(var ee in c){var oe=c[ee];if(me=s[ee],c.hasOwnProperty(ee)&&(oe!=null||me!=null))switch(ee){case"type":m=oe;break;case"name":f=oe;break;case"checked":J=oe;break;case"defaultChecked":he=oe;break;case"value":S=oe;break;case"defaultValue":w=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:oe!==me&&qt(n,i,ee,oe,c,me)}}Cn(n,S,w,F,J,he,m,f);return;case"select":oe=S=w=ee=null;for(m in s)if(F=s[m],s.hasOwnProperty(m)&&F!=null)switch(m){case"value":break;case"multiple":oe=F;default:c.hasOwnProperty(m)||qt(n,i,m,null,c,F)}for(f in c)if(m=c[f],F=s[f],c.hasOwnProperty(f)&&(m!=null||F!=null))switch(f){case"value":ee=m;break;case"defaultValue":w=m;break;case"multiple":S=m;default:m!==F&&qt(n,i,f,m,c,F)}i=w,s=S,c=oe,ee!=null?xi(n,!!s,ee,!1):!!c!=!!s&&(i!=null?xi(n,!!s,i,!0):xi(n,!!s,s?[]:"",!1));return;case"textarea":oe=ee=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qt(n,i,w,null,c,f)}for(S in c)if(f=c[S],m=s[S],c.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":ee=f;break;case"defaultValue":oe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&qt(n,i,S,f,c,m)}Ft(n,ee,oe);return;case"option":for(var Ve in s)ee=s[Ve],s.hasOwnProperty(Ve)&&ee!=null&&!c.hasOwnProperty(Ve)&&(Ve==="selected"?n.selected=!1:qt(n,i,Ve,null,c,ee));for(F in c)ee=c[F],oe=s[F],c.hasOwnProperty(F)&&ee!==oe&&(ee!=null||oe!=null)&&(F==="selected"?n.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":qt(n,i,F,ee,c,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in s)ee=s[nt],s.hasOwnProperty(nt)&&ee!=null&&!c.hasOwnProperty(nt)&&qt(n,i,nt,null,c,ee);for(J in c)if(ee=c[J],oe=s[J],c.hasOwnProperty(J)&&ee!==oe&&(ee!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(a(137,i));break;default:qt(n,i,J,ee,c,oe)}return;default:if(Oi(i)){for(var Yt in s)ee=s[Yt],s.hasOwnProperty(Yt)&&ee!==void 0&&!c.hasOwnProperty(Yt)&&zf(n,i,Yt,void 0,c,ee);for(he in c)ee=c[he],oe=s[he],!c.hasOwnProperty(he)||ee===oe||ee===void 0&&oe===void 0||zf(n,i,he,ee,c,oe);return}}for(var K in s)ee=s[K],s.hasOwnProperty(K)&&ee!=null&&!c.hasOwnProperty(K)&&qt(n,i,K,null,c,ee);for(me in c)ee=c[me],oe=s[me],!c.hasOwnProperty(me)||ee===oe||ee==null&&oe==null||qt(n,i,me,ee,c,oe)}function M_(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var f=s[c],m=f.transferSize,S=f.initiatorType,w=f.duration;if(m&&w&&M_(S)){for(S=0,w=f.responseEnd,c+=1;c<s.length;c++){var F=s[c],J=F.startTime;if(J>w)break;var he=F.transferSize,me=F.initiatorType;he&&M_(me)&&(F=F.responseEnd,S+=he*(F<w?1:(w-J)/(F-J)))}if(--c,i+=8*(m+S)/(f.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Ff=null,Hf=null;function Wc(n){return n.nodeType===9?n:n.ownerDocument}function b_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Vf(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gf=null;function $S(){var n=window.event;return n&&n.type==="popstate"?n===Gf?!1:(Gf=n,!0):(Gf=null,!1)}var T_=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,A_=typeof Promise=="function"?Promise:void 0,tM=typeof queueMicrotask=="function"?queueMicrotask:typeof A_<"u"?function(n){return A_.resolve(null).then(n).catch(nM)}:T_;function nM(n){setTimeout(function(){throw n})}function cs(n){return n==="head"}function w_(n,i){var s=i,c=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(c===0){n.removeChild(f),Fr(i);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")ll(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,ll(s);for(var m=s.firstChild;m;){var S=m.nextSibling,w=m.nodeName;m[ws]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&ll(n.ownerDocument.body);s=f}while(s);Fr(i)}function R_(n,i){var s=n;n=0;do{var c=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=c}while(s)}function kf(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":kf(s),wo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function iM(n,i,s,c){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[ws])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ai(n.nextSibling),n===null)break}return null}function aM(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Ai(n.nextSibling),n===null))return null;return n}function C_(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Ai(n.nextSibling),n===null))return null;return n}function Xf(n){return n.data==="$?"||n.data==="$~"}function Wf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function sM(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ai(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var qf=null;function D_(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return Ai(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function L_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function N_(n,i,s){switch(i=Wc(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function ll(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);wo(n)}var wi=new Map,U_=new Set;function qc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var wa=H.d;H.d={f:rM,r:oM,D:lM,C:cM,L:uM,m:hM,X:dM,S:fM,M:pM};function rM(){var n=wa.f(),i=Bc();return n||i}function oM(n){var i=Xa(n);i!==null&&i.tag===5&&i.type==="form"?Zg(i):wa.r(n)}var Ir=typeof document>"u"?null:document;function O_(n,i,s){var c=Ir;if(c&&typeof i=="string"&&i){var f=rt(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),U_.has(f)||(U_.add(f),n={rel:n,crossOrigin:s,href:i},c.querySelector(f)===null&&(i=c.createElement("link"),Bn(i,"link",n),R(i),c.head.appendChild(i)))}}function lM(n){wa.D(n),O_("dns-prefetch",n,null)}function cM(n,i){wa.C(n,i),O_("preconnect",n,i)}function uM(n,i,s){wa.L(n,i,s);var c=Ir;if(c&&n&&i){var f='link[rel="preload"][as="'+rt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+rt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+rt(s.imageSizes)+'"]')):f+='[href="'+rt(n)+'"]';var m=f;switch(i){case"style":m=Br(n);break;case"script":m=zr(n)}wi.has(m)||(n=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),wi.set(m,n),c.querySelector(f)!==null||i==="style"&&c.querySelector(cl(m))||i==="script"&&c.querySelector(ul(m))||(i=c.createElement("link"),Bn(i,"link",n),R(i),c.head.appendChild(i)))}}function hM(n,i){wa.m(n,i);var s=Ir;if(s&&n){var c=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+rt(c)+'"][href="'+rt(n)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=zr(n)}if(!wi.has(m)&&(n=_({rel:"modulepreload",href:n},i),wi.set(m,n),s.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ul(m)))return}c=s.createElement("link"),Bn(c,"link",n),R(c),s.head.appendChild(c)}}}function fM(n,i,s){wa.S(n,i,s);var c=Ir;if(c&&n){var f=Wa(c).hoistableStyles,m=Br(n);i=i||"default";var S=f.get(m);if(!S){var w={loading:0,preload:null};if(S=c.querySelector(cl(m)))w.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},s),(s=wi.get(m))&&Yf(n,s);var F=S=c.createElement("link");R(F),Bn(F,"link",n),F._p=new Promise(function(J,he){F.onload=J,F.onerror=he}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Yc(S,i,c)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(m,S)}}}function dM(n,i){wa.X(n,i);var s=Ir;if(s&&n){var c=Wa(s).hoistableScripts,f=zr(n),m=c.get(f);m||(m=s.querySelector(ul(f)),m||(n=_({src:n,async:!0},i),(i=wi.get(f))&&jf(n,i),m=s.createElement("script"),R(m),Bn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function pM(n,i){wa.M(n,i);var s=Ir;if(s&&n){var c=Wa(s).hoistableScripts,f=zr(n),m=c.get(f);m||(m=s.querySelector(ul(f)),m||(n=_({src:n,async:!0,type:"module"},i),(i=wi.get(f))&&jf(n,i),m=s.createElement("script"),R(m),Bn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function P_(n,i,s,c){var f=(f=ne.current)?qc(f):null;if(!f)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Br(s.href),s=Wa(f).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Br(s.href);var m=Wa(f).hoistableStyles,S=m.get(n);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,S),(m=f.querySelector(cl(n)))&&!m._p&&(S.instance=m,S.state.loading=5),wi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(n,s),m||mM(f,n,s,S.state))),i&&c===null)throw Error(a(528,""));return S}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=zr(s),s=Wa(f).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Br(n){return'href="'+rt(n)+'"'}function cl(n){return'link[rel="stylesheet"]['+n+"]"}function I_(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function mM(n,i,s,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Bn(i,"link",s),R(i),n.head.appendChild(i))}function zr(n){return'[src="'+rt(n)+'"]'}function ul(n){return"script[async]"+n}function B_(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+rt(s.href)+'"]');if(c)return i.instance=c,R(c),c;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),R(c),Bn(c,"style",f),Yc(c,s.precedence,n),i.instance=c;case"stylesheet":f=Br(s.href);var m=n.querySelector(cl(f));if(m)return i.state.loading|=4,i.instance=m,R(m),m;c=I_(s),(f=wi.get(f))&&Yf(c,f),m=(n.ownerDocument||n).createElement("link"),R(m);var S=m;return S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Bn(m,"link",c),i.state.loading|=4,Yc(m,s.precedence,n),i.instance=m;case"script":return m=zr(s.src),(f=n.querySelector(ul(m)))?(i.instance=f,R(f),f):(c=s,(f=wi.get(m))&&(c=_({},s),jf(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),R(f),Bn(f,"link",c),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Yc(c,s.precedence,n));return i.instance}function Yc(n,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,S=0;S<c.length;S++){var w=c[S];if(w.dataset.precedence===i)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function Yf(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function jf(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var jc=null;function z_(n,i,s){if(jc===null){var c=new Map,f=jc=new Map;f.set(s,c)}else f=jc,c=f.get(s),c||(c=new Map,f.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var m=s[f];if(!(m[ws]||m[fn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=n+S;var w=c.get(S);w?w.push(m):c.set(S,[m])}}return c}function F_(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function gM(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(n=i.disabled,typeof i.precedence=="string"&&n==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function _M(n,i,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Br(c.href),m=i.querySelector(cl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=Kc.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=m,R(m);return}m=i.ownerDocument||i,c=I_(c),(f=wi.get(f))&&Yf(c,f),m=m.createElement("link"),R(m);var S=m;S._p=new Promise(function(w,F){S.onload=w,S.onerror=F}),Bn(m,"link",c),s.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=Kc.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var Kf=0;function vM(n,i){return n.stylesheets&&n.count===0&&Qc(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var c=setTimeout(function(){if(n.stylesheets&&Qc(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Kf===0&&(Kf=62500*JS());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Qc(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Kf?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(f)}}:null}function Kc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Zc=null;function Qc(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Zc=new Map,i.forEach(xM,n),Zc=null,Kc.call(n))}function xM(n,i){if(!(i.state.loading&4)){var s=Zc.get(n);if(s)var c=s.get(null);else{s=new Map,Zc.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),c=S)}c&&s.set(null,c)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||c,m===c&&s.set(null,f),s.set(S,f),this.count++,c=Kc.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var hl={$$typeof:D,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function yM(n,i,s,c,f,m,S,w,F){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function V_(n,i,s,c,f,m,S,w,F,J,he,me){return n=new yM(n,i,s,S,F,J,he,me,w),i=1,m===!0&&(i|=24),m=oi(3,null,null,i),n.current=m,m.stateNode=n,i=wh(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:i},Lh(m),n}function G_(n){return n?(n=mr,n):mr}function k_(n,i,s,c,f,m){f=G_(f),c.context===null?c.context=f:c.pendingContext=f,c=Ja(i),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=$a(n,c,i),s!==null&&(ni(s,n,i),ko(s,n,i))}function X_(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Zf(n,i){X_(n,i),(n=n.alternate)&&X_(n,i)}function W_(n){if(n.tag===13||n.tag===31){var i=Ns(n,67108864);i!==null&&ni(i,n,67108864),Zf(n,67108864)}}function q_(n){if(n.tag===13||n.tag===31){var i=fi();i=Eo(i);var s=Ns(n,i);s!==null&&ni(s,n,i),Zf(n,i)}}var Jc=!0;function SM(n,i,s,c){var f=z.T;z.T=null;var m=H.p;try{H.p=2,Qf(n,i,s,c)}finally{H.p=m,z.T=f}}function MM(n,i,s,c){var f=z.T;z.T=null;var m=H.p;try{H.p=8,Qf(n,i,s,c)}finally{H.p=m,z.T=f}}function Qf(n,i,s,c){if(Jc){var f=Jf(c);if(f===null)Bf(n,i,c,$c,s),j_(n,c);else if(EM(f,n,i,s,c))c.stopPropagation();else if(j_(n,c),i&4&&-1<bM.indexOf(n)){for(;f!==null;){var m=Xa(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=ye(m.pendingLanes);if(S!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var F=1<<31-Oe(S);w.entanglements[1]|=F,S&=~F}Ji(m),(Pt&6)===0&&(Pc=E()+500,sl(0))}}break;case 31:case 13:w=Ns(m,2),w!==null&&ni(w,m,2),Bc(),Zf(m,2)}if(m=Jf(c),m===null&&Bf(n,i,c,$c,s),m===f)break;f=m}f!==null&&c.stopPropagation()}else Bf(n,i,c,null,s)}}function Jf(n){return n=$u(n),$f(n)}var $c=null;function $f(n){if($c=null,n=ka(n),n!==null){var i=l(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=u(i),n!==null)return n;n=null}else if(s===31){if(n=h(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return $c=n,null}function Y_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case fe:return 2;case ve:return 8;case le:case je:return 32;case we:return 268435456;default:return 32}default:return 32}}var ed=!1,us=null,hs=null,fs=null,fl=new Map,dl=new Map,ds=[],bM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(n,i){switch(n){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function pl(n,i,s,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Xa(i),i!==null&&W_(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function EM(n,i,s,c,f){switch(i){case"focusin":return us=pl(us,n,i,s,c,f),!0;case"dragenter":return hs=pl(hs,n,i,s,c,f),!0;case"mouseover":return fs=pl(fs,n,i,s,c,f),!0;case"pointerover":var m=f.pointerId;return fl.set(m,pl(fl.get(m)||null,n,i,s,c,f)),!0;case"gotpointercapture":return m=f.pointerId,dl.set(m,pl(dl.get(m)||null,n,i,s,c,f)),!0}return!1}function K_(n){var i=ka(n.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){n.blockedOn=i,ji(n.priority,function(){q_(s)});return}}else if(i===31){if(i=h(s),i!==null){n.blockedOn=i,ji(n.priority,function(){q_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function eu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=Jf(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Ju=c,s.target.dispatchEvent(c),Ju=null}else return i=Xa(s),i!==null&&W_(i),n.blockedOn=s,!1;i.shift()}return!0}function Z_(n,i,s){eu(n)&&s.delete(i)}function TM(){ed=!1,us!==null&&eu(us)&&(us=null),hs!==null&&eu(hs)&&(hs=null),fs!==null&&eu(fs)&&(fs=null),fl.forEach(Z_),dl.forEach(Z_)}function tu(n,i){n.blockedOn===i&&(n.blockedOn=null,ed||(ed=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,TM)))}var nu=null;function Q_(n){nu!==n&&(nu=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nu===n&&(nu=null);for(var i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],f=n[i+2];if(typeof c!="function"){if($f(c||s)===null)continue;break}var m=Xa(s);m!==null&&(n.splice(i,3),i-=3,Qh(m,{pending:!0,data:f,method:s.method,action:c},c,f))}}))}function Fr(n){function i(F){return tu(F,n)}us!==null&&tu(us,n),hs!==null&&tu(hs,n),fs!==null&&tu(fs,n),fl.forEach(i),dl.forEach(i);for(var s=0;s<ds.length;s++){var c=ds[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ds.length&&(s=ds[0],s.blockedOn===null);)K_(s),s.blockedOn===null&&ds.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var f=s[c],m=s[c+1],S=f[Rn]||null;if(typeof m=="function")S||Q_(s);else if(S){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[Rn]||null)w=S.formAction;else if($f(f)!==null)continue}else w=S.action;typeof w=="function"?s[c+1]=w:(s.splice(c,3),c-=3),Q_(s)}}}function J_(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function td(n){this._internalRoot=n}iu.prototype.render=td.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,c=fi();k_(s,c,n,i,null,null)},iu.prototype.unmount=td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;k_(n.current,2,null,n,null,null),Bc(),i[Ui]=null}};function iu(n){this._internalRoot=n}iu.prototype.unstable_scheduleHydration=function(n){if(n){var i=To();n={blockedOn:null,target:n,priority:i};for(var s=0;s<ds.length&&i!==0&&i<ds[s].priority;s++);ds.splice(s,0,n),s===0&&K_(n)}};var $_=e.version;if($_!=="19.2.3")throw Error(a(527,$_,"19.2.3"));H.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var AM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Me=au.inject(AM),be=au}catch{}}return gl.createRoot=function(n,i){if(!r(n))throw Error(a(299));var s=!1,c="",f=r0,m=o0,S=l0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=V_(n,1,!1,null,null,s,c,null,f,m,S,J_),n[Ui]=i.current,If(n),new td(i)},gl.hydrateRoot=function(n,i,s){if(!r(n))throw Error(a(299));var c=!1,f="",m=r0,S=o0,w=l0,F=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=V_(n,1,!0,i,s??null,c,f,F,m,S,w,J_),i.context=G_(null),s=i.current,c=fi(),c=Eo(c),f=Ja(c),f.callback=null,$a(s,f,c),s=c,i.current.lanes=s,Fn(i,s),Ji(i),n[Ui]=i.current,If(n),new iu(i)},gl.version="19.2.3",gl}var cv;function IM(){if(cv)return id.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=PM(),id.exports}var BM=IM(),mi=Yp();const jp="182",io={ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zM=0,uv=1,FM=2,HM=0,Ll=1,Kp=2,wl=3,Fa=0,si=1,Di=2,Ba=0,ao=1,Yd=2,hv=3,fv=4,VM=5,Js=100,GM=101,kM=102,XM=103,WM=104,qM=200,YM=201,jM=202,KM=203,jd=204,Kd=205,ZM=206,QM=207,JM=208,$M=209,eb=210,tb=211,nb=212,ib=213,ab=214,Zd=0,Qd=1,Jd=2,oo=3,$d=4,ep=5,tp=6,np=7,Zp=0,sb=1,rb=2,aa=0,Ox=1,Px=2,Ix=3,Bx=4,zx=5,Fx=6,Hx=7,dv="attached",ob="detached",Vx=300,nr=301,lo=302,ip=303,ap=304,Yu=306,co=1e3,na=1001,Hu=1002,en=1003,Gx=1004,Rl=1005,Sn=1006,Ou=1007,Oa=1008,gi=1009,kx=1010,Xx=1011,Pl=1012,Qp=1013,ra=1014,Li=1015,Ha=1016,Jp=1017,$p=1018,Il=1020,Wx=35902,qx=35899,Yx=1021,Vu=1022,ai=1023,Va=1026,er=1027,em=1028,tm=1029,uo=1030,nm=1031,im=1033,Pu=33776,Iu=33777,Bu=33778,zu=33779,sp=35840,rp=35841,op=35842,lp=35843,cp=36196,up=37492,hp=37496,fp=37488,dp=37489,pp=37490,mp=37491,gp=37808,_p=37809,vp=37810,xp=37811,yp=37812,Sp=37813,Mp=37814,bp=37815,Ep=37816,Tp=37817,Ap=37818,wp=37819,Rp=37820,Cp=37821,Dp=36492,Lp=36494,Np=36495,Up=36283,Op=36284,Pp=36285,Ip=36286,Bl=2300,zl=2301,ld=2302,pv=2400,mv=2401,gv=2402,lb=2500,cb=0,jx=1,Bp=2,ub=3200,kl=0,hb=1,Ts="",zn="srgb",Kn="srgb-linear",Gu="linear",Gt="srgb",Hr=7680,_v=519,fb=512,db=513,pb=514,am=515,mb=516,gb=517,sm=518,_b=519,zp=35044,vb=35048,vv="300 es",ia=2e3,ku=2001;function Kx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xb(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Fl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yb(){const o=Fl("canvas");return o.style.display="block",o}const xv={};function Xu(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ze(...o){const e="THREE."+o.shift();console.warn(e,...o)}function at(...o){const e="THREE."+o.shift();console.error(e,...o)}function Hl(...o){const e=o.join(" ");e in xv||(xv[e]=!0,Ze(...o))}function Sb(o,e,t){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const l=r.indexOf(t);l!==-1&&r.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yv=1234567;const Nl=Math.PI/180,ho=180/Math.PI;function ki(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]).toLowerCase()}function mt(o,e,t){return Math.max(e,Math.min(t,o))}function rm(o,e){return(o%e+e)%e}function Mb(o,e,t,a,r){return a+(o-e)*(r-a)/(t-e)}function bb(o,e,t){return o!==e?(t-o)/(e-o):0}function Ul(o,e,t){return(1-t)*o+t*e}function Eb(o,e,t,a){return Ul(o,e,1-Math.exp(-t*a))}function Tb(o,e=1){return e-Math.abs(rm(o,e*2)-e)}function Ab(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function wb(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Rb(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Cb(o,e){return o+Math.random()*(e-o)}function Db(o){return o*(.5-Math.random())}function Lb(o){o!==void 0&&(yv=o);let e=yv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nb(o){return o*Nl}function Ub(o){return o*ho}function Ob(o){return(o&o-1)===0&&o!==0}function Pb(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ib(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Bb(o,e,t,a,r){const l=Math.cos,u=Math.sin,h=l(t/2),p=u(t/2),d=l((e+a)/2),g=u((e+a)/2),_=l((e-a)/2),v=u((e-a)/2),x=l((a-e)/2),b=u((a-e)/2);switch(r){case"XYX":o.set(h*g,p*_,p*v,h*d);break;case"YZY":o.set(p*v,h*g,p*_,h*d);break;case"ZXZ":o.set(p*_,p*v,h*g,h*d);break;case"XZX":o.set(h*g,p*b,p*x,h*d);break;case"YXY":o.set(p*x,h*g,p*b,h*d);break;case"ZYZ":o.set(p*b,p*x,h*g,h*d);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:Nl,RAD2DEG:ho,generateUUID:ki,clamp:mt,euclideanModulo:rm,mapLinear:Mb,inverseLerp:bb,lerp:Ul,damp:Eb,pingpong:Tb,smoothstep:Ab,smootherstep:wb,randInt:Rb,randFloat:Cb,randFloatSpread:Db,seededRandom:Lb,degToRad:Nb,radToDeg:Ub,isPowerOfTwo:Ob,ceilPowerOfTwo:Pb,floorPowerOfTwo:Ib,setQuaternionFromProperEuler:Bb,normalize:kt,denormalize:Vi};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,r=e.elements;return this.x=r[0]*t+r[3]*a+r[6],this.y=r[1]*t+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(mt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),r=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*r+e.x,this.y=l*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oa{constructor(e=0,t=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=r}static slerpFlat(e,t,a,r,l,u,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3],v=l[u+0],x=l[u+1],b=l[u+2],T=l[u+3];if(h<=0){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h>=1){e[t+0]=v,e[t+1]=x,e[t+2]=b,e[t+3]=T;return}if(_!==T||p!==v||d!==x||g!==b){let M=p*v+d*x+g*b+_*T;M<0&&(v=-v,x=-x,b=-b,T=-T,M=-M);let y=1-h;if(M<.9995){const C=Math.acos(M),D=Math.sin(C);y=Math.sin(y*C)/D,h=Math.sin(h*C)/D,p=p*y+v*h,d=d*y+x*h,g=g*y+b*h,_=_*y+T*h}else{p=p*y+v*h,d=d*y+x*h,g=g*y+b*h,_=_*y+T*h;const C=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=C,d*=C,g*=C,_*=C}}e[t]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,a,r,l,u){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=l[u],v=l[u+1],x=l[u+2],b=l[u+3];return e[t]=h*b+g*_+p*x-d*v,e[t+1]=p*b+g*v+d*_-h*x,e[t+2]=d*b+g*x+h*v-p*_,e[t+3]=g*b-h*_-p*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,r){return this._x=e,this._y=t,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,r=e._y,l=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(l/2),v=p(a/2),x=p(r/2),b=p(l/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],r=t[4],l=t[8],u=t[1],h=t[5],p=t[9],d=t[2],g=t[6],_=t[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(l-d)*x,this._z=(u-r)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-p)/x,this._x=.25*x,this._y=(r+u)/x,this._z=(l+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(l-d)/x,this._x=(r+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-r)/x,this._x=(l+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,t/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,r=e._y,l=e._z,u=e._w,h=t._x,p=t._y,d=t._z,g=t._w;return this._x=a*g+u*h+r*d-l*p,this._y=r*g+u*p+l*h-a*d,this._z=l*g+u*d+a*p-r*h,this._w=u*g-a*h-r*p-l*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let a=e._x,r=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,r=-r,l=-l,u=-u,h=-h);let p=1-t;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,t=Math.sin(t*d)/g,this._x=this._x*p+a*t,this._y=this._y*p+r*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+a*t,this._y=this._y*p+r*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,a=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*r,this.y=l[1]*t+l[4]*a+l[7]*r,this.z=l[2]*t+l[5]*a+l[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,r=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,r=this.z,l=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*r-h*a),g=2*(h*t-l*r),_=2*(l*a-u*t);return this.x=t+p*d+u*_-h*g,this.y=a+p*g+h*d-l*_,this.z=r+p*_+l*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,r=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*r,this.y=l[1]*t+l[5]*a+l[9]*r,this.z=l[2]*t+l[6]*a+l[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(mt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,r=e.y,l=e.z,u=t.x,h=t.y,p=t.z;return this.x=r*p-l*h,this.y=l*u-a*p,this.z=a*h-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return t*t+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const r=Math.sin(t)*e;return this.x=r*Math.sin(a),this.y=Math.cos(t)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new k,Sv=new oa;class dt{constructor(e,t,a,r,l,u,h,p,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,r,l,u,h,p,d)}set(e,t,a,r,l,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=t,g[4]=l,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,r=t.elements,l=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],T=r[0],M=r[3],y=r[6],C=r[1],D=r[4],L=r[7],O=r[2],B=r[5],P=r[8];return l[0]=u*T+h*C+p*O,l[3]=u*M+h*D+p*B,l[6]=u*y+h*L+p*P,l[1]=d*T+g*C+_*O,l[4]=d*M+g*D+_*B,l[7]=d*y+g*L+_*P,l[2]=v*T+x*C+b*O,l[5]=v*M+x*D+b*B,l[8]=v*y+x*L+b*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],r=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return t*u*g-t*h*d-a*l*g+a*h*p+r*l*d-r*u*p}invert(){const e=this.elements,t=e[0],a=e[1],r=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*l,x=d*l-u*p,b=t*_+a*v+r*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=_*T,e[1]=(r*d-g*a)*T,e[2]=(h*a-r*u)*T,e[3]=v*T,e[4]=(g*t-r*p)*T,e[5]=(r*l-h*t)*T,e[6]=x*T,e[7]=(a*p-d*t)*T,e[8]=(u*t-a*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,r,l,u,h){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-r*d,r*p,-r*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(ud.makeScale(e,t)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,t){return this.premultiply(ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let r=0;r<9;r++)if(t[r]!==a[r])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new dt,Mv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zb(){const o={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Gt&&(r.r=za(r.r),r.g=za(r.g),r.b=za(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(r.r=so(r.r),r.g=so(r.g),r.b=so(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ts?Gu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Kn]:{primaries:e,whitePoint:a,transfer:Gu,toXYZ:Mv,fromXYZ:bv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:a,transfer:Gt,toXYZ:Mv,fromXYZ:bv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),o}const wt=zb();function za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function so(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vr;class Fb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Vr===void 0&&(Vr=Fl("canvas")),Vr.width=e.width,Vr.height=e.height;const r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Vr}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fl("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=za(l[u]/255)*255;return a.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(za(t[a]/255)*255):t[a]=za(t[a]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hb=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?l.push(hd(r[u].image)):l.push(hd(r[u]))}else l=hd(r);a.url=l}return t||(e.images[this.uuid]=a),a}}function hd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Vb=0;const fd=new k;class wn extends ir{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,a=na,r=na,l=Sn,u=Oa,h=ai,p=gi,d=wn.DEFAULT_ANISOTROPY,g=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=ki(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case na:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case na:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vx;wn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,a=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,r){return this.x=e,this.y=t,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,r=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*r+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,r,l;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],x=p[5],b=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,L=(x+1)/2,O=(y+1)/2,B=(g+v)/4,P=(_+T)/4,q=(b+M)/4;return D>L&&D>O?D<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(D),r=B/a,l=P/a):L>O?L<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(L),a=B/r,l=q/r):O<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(O),a=P/l,r=q/l),this.set(a,r,l,t),this}let C=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(_-T)/C,this.z=(v-g)/C,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(mt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gb extends ir{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const r={width:e,height:t,depth:a.depth},l=new wn(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new om(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Gb{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Zx extends wn{constructor(e=null,t=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kb extends wn{constructor(e=null,t=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),su.copy(a.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),ru.subVectors(this.max,_l),Gr.subVectors(e.a,_l),kr.subVectors(e.b,_l),Xr.subVectors(e.c,_l),ms.subVectors(kr,Gr),gs.subVectors(Xr,kr),Ws.subVectors(Gr,Xr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ws.z,Ws.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ws.z,0,-Ws.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ws.y,Ws.x,0];return!dd(t,Gr,kr,Xr,ru)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,Gr,kr,Xr,ru))?!1:(ou.crossVectors(ms,gs),t=[ou.x,ou.y,ou.z],dd(t,Gr,kr,Xr,ru))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new k,new k,new k,new k,new k,new k,new k,new k],zi=new k,su=new Ga,Gr=new k,kr=new k,Xr=new k,ms=new k,gs=new k,Ws=new k,_l=new k,ru=new k,ou=new k,qs=new k;function dd(o,e,t,a,r){for(let l=0,u=o.length-3;l<=u;l+=3){qs.fromArray(o,l);const h=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),p=e.dot(qs),d=t.dot(qs),g=a.dot(qs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const Xb=new Ga,vl=new k,pd=new k;class la{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Xb.setFromPoints(e).getCenter(a);let r=0;for(let l=0,u=e.length;l<u;l++)r=Math.max(r,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const t=vl.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),r=(a-this.radius)*.5;this.center.addScaledVector(vl,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(pd)),this.expandByPoint(vl.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ca=new k,md=new k,lu=new k,_s=new k,gd=new k,cu=new k,_d=new k;class Xl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ca.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,t),Ca.distanceToSquared(e))}distanceSqToSegment(e,t,a,r){md.copy(e).add(t).multiplyScalar(.5),lu.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(md);const l=e.distanceTo(t)*.5,u=-this.direction.dot(lu),h=_s.dot(this.direction),p=-_s.dot(lu),d=_s.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*p-h,v=u*h-p,b=l*g,_>=0)if(v>=-b)if(v<=b){const T=1/g;_*=T,v*=T,x=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=l,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v=-l,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v<=-b?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-p),l),x=-_*_+v*(v+2*p)+d):v<=b?(_=0,v=Math.min(Math.max(-l,-p),l),x=v*(v+2*p)+d):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-p),l),x=-_*_+v*(v+2*p)+d);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(md).addScaledVector(lu,v),x}intersectSphere(e,t){Ca.subVectors(e.center,this.origin);const a=Ca.dot(this.direction),r=Ca.dot(Ca)-a*a,l=e.radius*e.radius;if(r>l)return null;const u=Math.sqrt(l-r),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,r,l,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,t)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,t,a,r,l){gd.subVectors(t,e),cu.subVectors(a,e),_d.crossVectors(gd,cu);let u=this.direction.dot(_d),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_s.subVectors(this.origin,e);const p=h*this.direction.dot(cu.crossVectors(_s,cu));if(p<0)return null;const d=h*this.direction.dot(gd.cross(_s));if(d<0||p+d>u)return null;const g=-h*_s.dot(_d);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,a,r,l,u,h,p,d,g,_,v,x,b,T,M){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,r,l,u,h,p,d,g,_,v,x,b,T,M)}set(e,t,a,r,l,u,h,p,d,g,_,v,x,b,T,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=r,y[1]=l,y[5]=u,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=b,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,a=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),l=1/Wr.setFromMatrixColumn(e,1).length(),u=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,r=e.y,l=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,T=h*_;t[0]=p*g,t[4]=-p*_,t[8]=d,t[1]=x+b*d,t[5]=v-T*d,t[9]=-h*p,t[2]=T-v*d,t[6]=b+x*d,t[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,b=d*g,T=d*_;t[0]=v+T*h,t[4]=b*h-x,t[8]=u*d,t[1]=u*_,t[5]=u*g,t[9]=-h,t[2]=x*h-b,t[6]=T+v*h,t[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,b=d*g,T=d*_;t[0]=v-T*h,t[4]=-u*_,t[8]=b+x*h,t[1]=x+b*h,t[5]=u*g,t[9]=T-v*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,T=h*_;t[0]=p*g,t[4]=b*d-x,t[8]=v*d+T,t[1]=p*_,t[5]=T*d+v,t[9]=x*d-b,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*d,b=h*p,T=h*d;t[0]=p*g,t[4]=T-v*_,t[8]=b*_+x,t[1]=_,t[5]=u*g,t[9]=-h*g,t[2]=-d*g,t[6]=x*_+b,t[10]=v-T*_}else if(e.order==="XZY"){const v=u*p,x=u*d,b=h*p,T=h*d;t[0]=p*g,t[4]=-_,t[8]=d*g,t[1]=v*_+T,t[5]=u*g,t[9]=x*_-b,t[2]=b*_-x,t[6]=h*g,t[10]=T*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wb,e,qb)}lookAt(e,t,a){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),vs.crossVectors(a,di),vs.lengthSq()===0&&(Math.abs(a.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),vs.crossVectors(a,di)),vs.normalize(),uu.crossVectors(di,vs),r[0]=vs.x,r[4]=uu.x,r[8]=di.x,r[1]=vs.y,r[5]=uu.y,r[9]=di.y,r[2]=vs.z,r[6]=uu.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,r=t.elements,l=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],T=a[6],M=a[10],y=a[14],C=a[3],D=a[7],L=a[11],O=a[15],B=r[0],P=r[4],q=r[8],A=r[12],N=r[1],G=r[5],te=r[9],se=r[13],de=r[2],ue=r[6],z=r[10],H=r[14],ae=r[3],Se=r[7],xe=r[11],I=r[15];return l[0]=u*B+h*N+p*de+d*ae,l[4]=u*P+h*G+p*ue+d*Se,l[8]=u*q+h*te+p*z+d*xe,l[12]=u*A+h*se+p*H+d*I,l[1]=g*B+_*N+v*de+x*ae,l[5]=g*P+_*G+v*ue+x*Se,l[9]=g*q+_*te+v*z+x*xe,l[13]=g*A+_*se+v*H+x*I,l[2]=b*B+T*N+M*de+y*ae,l[6]=b*P+T*G+M*ue+y*Se,l[10]=b*q+T*te+M*z+y*xe,l[14]=b*A+T*se+M*H+y*I,l[3]=C*B+D*N+L*de+O*ae,l[7]=C*P+D*G+L*ue+O*Se,l[11]=C*q+D*te+L*z+O*xe,l[15]=C*A+D*se+L*H+O*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],r=e[8],l=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],T=e[7],M=e[11],y=e[15],C=p*x-d*v,D=h*x-d*_,L=h*v-p*_,O=u*x-d*g,B=u*v-p*g,P=u*_-h*g;return t*(T*C-M*D+y*L)-a*(b*C-M*O+y*B)+r*(b*D-T*O+y*P)-l*(b*L-T*B+M*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],r=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],T=e[13],M=e[14],y=e[15],C=_*M*d-T*v*d+T*p*x-h*M*x-_*p*y+h*v*y,D=b*v*d-g*M*d-b*p*x+u*M*x+g*p*y-u*v*y,L=g*T*d-b*_*d+b*h*x-u*T*x-g*h*y+u*_*y,O=b*_*p-g*T*p-b*h*v+u*T*v+g*h*M-u*_*M,B=t*C+a*D+r*L+l*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return e[0]=C*P,e[1]=(T*v*l-_*M*l-T*r*x+a*M*x+_*r*y-a*v*y)*P,e[2]=(h*M*l-T*p*l+T*r*d-a*M*d-h*r*y+a*p*y)*P,e[3]=(_*p*l-h*v*l-_*r*d+a*v*d+h*r*x-a*p*x)*P,e[4]=D*P,e[5]=(g*M*l-b*v*l+b*r*x-t*M*x-g*r*y+t*v*y)*P,e[6]=(b*p*l-u*M*l-b*r*d+t*M*d+u*r*y-t*p*y)*P,e[7]=(u*v*l-g*p*l+g*r*d-t*v*d-u*r*x+t*p*x)*P,e[8]=L*P,e[9]=(b*_*l-g*T*l-b*a*x+t*T*x+g*a*y-t*_*y)*P,e[10]=(u*T*l-b*h*l+b*a*d-t*T*d-u*a*y+t*h*y)*P,e[11]=(g*h*l-u*_*l-g*a*d+t*_*d+u*a*x-t*h*x)*P,e[12]=O*P,e[13]=(g*T*r-b*_*r+b*a*v-t*T*v-g*a*M+t*_*M)*P,e[14]=(b*h*r-u*T*r-b*a*p+t*T*p+u*a*M-t*h*M)*P,e[15]=(u*_*r-g*h*r+g*a*p-t*_*p-u*a*v+t*h*v)*P,this}scale(e){const t=this.elements,a=e.x,r=e.y,l=e.z;return t[0]*=a,t[4]*=r,t[8]*=l,t[1]*=a,t[5]*=r,t[9]*=l,t[2]*=a,t[6]*=r,t[10]*=l,t[3]*=a,t[7]*=r,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,r))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),r=Math.sin(t),l=1-a,u=e.x,h=e.y,p=e.z,d=l*u,g=l*h;return this.set(d*u+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*u,0,d*p-r*h,g*p+r*u,l*p*p+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,r,l,u){return this.set(1,a,l,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,a){const r=this.elements,l=t._x,u=t._y,h=t._z,p=t._w,d=l+l,g=u+u,_=h+h,v=l*d,x=l*g,b=l*_,T=u*g,M=u*_,y=h*_,C=p*d,D=p*g,L=p*_,O=a.x,B=a.y,P=a.z;return r[0]=(1-(T+y))*O,r[1]=(x+L)*O,r[2]=(b-D)*O,r[3]=0,r[4]=(x-L)*B,r[5]=(1-(v+y))*B,r[6]=(M+C)*B,r[7]=0,r[8]=(b+D)*P,r[9]=(M-C)*P,r[10]=(1-(v+T))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,a){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return a.set(1,1,1),t.identity(),this;let l=Wr.set(r[0],r[1],r[2]).length();const u=Wr.set(r[4],r[5],r[6]).length(),h=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),Fi.copy(this);const d=1/l,g=1/u,_=1/h;return Fi.elements[0]*=d,Fi.elements[1]*=d,Fi.elements[2]*=d,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,t.setFromRotationMatrix(Fi),a.x=l,a.y=u,a.z=h,this}makePerspective(e,t,a,r,l,u,h=ia,p=!1){const d=this.elements,g=2*l/(t-e),_=2*l/(a-r),v=(t+e)/(t-e),x=(a+r)/(a-r);let b,T;if(p)b=l/(u-l),T=u*l/(u-l);else if(h===ia)b=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(h===ku)b=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,r,l,u,h=ia,p=!1){const d=this.elements,g=2/(t-e),_=2/(a-r),v=-(t+e)/(t-e),x=-(a+r)/(a-r);let b,T;if(p)b=1/(u-l),T=u/(u-l);else if(h===ia)b=-2/(u-l),T=-(u+l)/(u-l);else if(h===ku)b=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let r=0;r<16;r++)if(t[r]!==a[r])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const Wr=new k,Fi=new ut,Wb=new k(0,0,0),qb=new k(1,1,1),vs=new k,uu=new k,di=new k,Ev=new ut,Tv=new oa;class Wi{constructor(e=0,t=0,a=0,r=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,r=this._order){return this._x=e,this._y=t,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const r=e.elements,l=r[0],u=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],v=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yb=0;const Av=new k,qr=new oa,Da=new ut,hu=new k,xl=new k,jb=new k,Kb=new oa,wv=new k(1,0,0),Rv=new k(0,1,0),Cv=new k(0,0,1),Dv={type:"added"},Zb={type:"removed"},Yr={type:"childadded",child:null},vd={type:"childremoved",child:null};class sn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new k,t=new Wi,a=new oa,r=new k(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new dt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(wv,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,t){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wv,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?hu.copy(e):hu.set(e,t,a);const r=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(xl,hu,this.up):Da.lookAt(hu,xl,this.up),this.quaternion.setFromRotationMatrix(Da),r&&(Da.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(Da),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zb),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,Kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,r=t.length;a<r;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(l(e.materials,this.material[p]));r.material=h}else r.material=l(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(l(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=r,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}sn.DEFAULT_UP=new k(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new k,La=new k,xd=new k,Na=new k,jr=new k,Kr=new k,Lv=new k,yd=new k,Sd=new k,Md=new k,bd=new Qt,Ed=new Qt,Td=new Qt;class Gi{constructor(e=new k,t=new k,a=new k){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,r){r.subVectors(a,t),Hi.subVectors(e,t),r.cross(Hi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(e,t,a,r,l){Hi.subVectors(r,t),La.subVectors(a,t),xd.subVectors(e,t);const u=Hi.dot(Hi),h=Hi.dot(La),p=Hi.dot(xd),d=La.dot(La),g=La.dot(xd),_=u*d-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(d*p-h*g)*v,b=(u*g-h*p)*v;return l.set(1-x-b,b,x)}static containsPoint(e,t,a,r){return this.getBarycoord(e,t,a,r,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(e,t,a,r,l,u,h,p){return this.getBarycoord(e,t,a,r,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Na.x),p.addScaledVector(u,Na.y),p.addScaledVector(h,Na.z),p)}static getInterpolatedAttribute(e,t,a,r,l,u){return bd.setScalar(0),Ed.setScalar(0),Td.setScalar(0),bd.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,a),Td.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(bd,l.x),u.addScaledVector(Ed,l.y),u.addScaledVector(Td,l.z),u}static isFrontFacing(e,t,a,r){return Hi.subVectors(a,t),La.subVectors(e,t),Hi.cross(La).dot(r)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,r){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,a,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Hi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,r,l){return Gi.getInterpolation(e,this.a,this.b,this.c,t,a,r,l)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,r=this.b,l=this.c;let u,h;jr.subVectors(r,a),Kr.subVectors(l,a),yd.subVectors(e,a);const p=jr.dot(yd),d=Kr.dot(yd);if(p<=0&&d<=0)return t.copy(a);Sd.subVectors(e,r);const g=jr.dot(Sd),_=Kr.dot(Sd);if(g>=0&&_<=g)return t.copy(r);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),t.copy(a).addScaledVector(jr,u);Md.subVectors(e,l);const x=jr.dot(Md),b=Kr.dot(Md);if(b>=0&&x<=b)return t.copy(l);const T=x*d-p*b;if(T<=0&&d>=0&&b<=0)return h=d/(d-b),t.copy(a).addScaledVector(Kr,h);const M=g*b-x*_;if(M<=0&&_-g>=0&&x-b>=0)return Lv.subVectors(l,r),h=(_-g)/(_-g+(x-b)),t.copy(r).addScaledVector(Lv,h);const y=1/(M+T+v);return u=T*y,h=v*y,t.copy(a).addScaledVector(jr,u).addScaledVector(Kr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},fu={h:0,s:0,l:0};function Ad(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Qe{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=a,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,a,r=wt.workingColorSpace){if(e=rm(e,1),t=mt(t,0,1),a=mt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Ad(u,l,e+1/3),this.g=Ad(u,l,e),this.b=Ad(u,l,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=zn){function a(l){l!==void 0&&parseFloat(l)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const a=Jx[e.toLowerCase()];return a!==void 0?this.setHex(a,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return wt.workingToColorSpace(Gn.copy(this),e),Math.round(mt(Gn.r*255,0,255))*65536+Math.round(mt(Gn.g*255,0,255))*256+Math.round(mt(Gn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Gn.copy(this),t);const a=Gn.r,r=Gn.g,l=Gn.b,u=Math.max(a,r,l),h=Math.min(a,r,l);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(r-l)/_+(r<l?6:0);break;case r:p=(l-a)/_+2;break;case l:p=(a-r)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=zn){wt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,a=Gn.g,r=Gn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,t,a){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(fu);const a=Ul(xs.h,fu.h,t),r=Ul(xs.s,fu.s,t),l=Ul(xs.l,fu.l,t);return this.setHSL(a,r,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,r=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*r,this.g=l[1]*t+l[4]*a+l[7]*r,this.b=l[2]*t+l[5]*a+l[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Qe;Qe.NAMES=Jx;let Qb=0;class _i extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ao,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Kd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(a.blending=this.blending),this.side!==Fa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==jd&&(a.blendSrc=this.blendSrc),this.blendDst!==Kd&&(a.blendDst=this.blendDst),this.blendEquation!==Js&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}if(t){const l=r(e.textures),u=r(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const r=t.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tr extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new k,du=new $e;let Jb=0;class kn{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=zp,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[e+r]=t.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)du.fromBufferAttribute(this,t),du.applyMatrix3(e),this.setXY(t,du.x,du.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=Vi(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=kt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),a=kt(a,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,t,a,r,l){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),a=kt(a,this.array),r=kt(r,this.array),l=kt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class $x extends kn{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class ey extends kn{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Xn extends kn{constructor(e,t,a){super(new Float32Array(e),t,a)}}let $b=0;const Ri=new ut,wd=new sn,Zr=new k,pi=new Ga,yl=new Ga,An=new k;class Zn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kx(e)?ey:$x)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new dt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,a){return Ri.makeTranslation(e,t,a),this.applyMatrix4(Ri),this}scale(e,t,a){return Ri.makeScale(e,t,a),this.applyMatrix4(Ri),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xn(a,3))}else{const a=Math.min(e.length,t.count);for(let r=0;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const l=t[a];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const a=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(pi.min,yl.min),pi.expandByPoint(An),An.addVectors(pi.max,yl.max),pi.expandByPoint(An)):(pi.expandByPoint(yl.min),pi.expandByPoint(yl.max))}pi.getCenter(a);let r=0;for(let l=0,u=e.count;l<u;l++)An.fromBufferAttribute(e,l),r=Math.max(r,a.distanceToSquared(An));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)An.fromBufferAttribute(h,d),p&&(Zr.fromBufferAttribute(e,d),An.add(Zr)),r=Math.max(r,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,r=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<a.count;q++)h[q]=new k,p[q]=new k;const d=new k,g=new k,_=new k,v=new $e,x=new $e,b=new $e,T=new k,M=new k;function y(q,A,N){d.fromBufferAttribute(a,q),g.fromBufferAttribute(a,A),_.fromBufferAttribute(a,N),v.fromBufferAttribute(l,q),x.fromBufferAttribute(l,A),b.fromBufferAttribute(l,N),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(G),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),h[q].add(T),h[A].add(T),h[N].add(T),p[q].add(M),p[A].add(M),p[N].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let q=0,A=C.length;q<A;++q){const N=C[q],G=N.start,te=N.count;for(let se=G,de=G+te;se<de;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new k,L=new k,O=new k,B=new k;function P(q){O.fromBufferAttribute(r,q),B.copy(O);const A=h[q];D.copy(A),D.sub(O.multiplyScalar(O.dot(A))).normalize(),L.crossVectors(B,A);const G=L.dot(p[q])<0?-1:1;u.setXYZW(q,D.x,D.y,D.z,G)}for(let q=0,A=C.length;q<A;++q){const N=C[q],G=N.start,te=N.count;for(let se=G,de=G+te;se<de;se+=3)P(e.getX(se+0)),P(e.getX(se+1)),P(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new k,l=new k,u=new k,h=new k,p=new k,d=new k,g=new k,_=new k;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);r.fromBufferAttribute(t,b),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,M),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)r.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let x=0,b=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*g;for(let y=0;y<g;y++)v[b++]=d[x++]}return new kn(v,g,_)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=e(p,a);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const p=[],d=l[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,a);p.push(x)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(r[p]=g,l=!0)}l&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],_=l[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nv=new ut,Ys=new Xl,pu=new la,Uv=new k,mu=new k,gu=new k,_u=new k,Rd=new k,vu=new k,Ov=new k,xu=new k;class Mn extends sn{constructor(e=new Zn,t=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(l&&h){vu.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const g=h[p],_=l[p];g!==0&&(Rd.fromBufferAttribute(_,e),u?vu.addScaledVector(Rd,g):vu.addScaledVector(Rd.sub(t),g))}t.add(vu)}return t}raycast(e,t){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),pu.copy(a.boundingSphere),pu.applyMatrix4(l),Ys.copy(e.ray).recast(e.near),!(pu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(pu,Uv)===null||Ys.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Nv.copy(l).invert(),Ys.copy(e.ray).applyMatrix4(Nv),!(a.boundingBox!==null&&Ys.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,a){let r;const l=this.geometry,u=this.material,h=l.index,p=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,T=v.length;b<T;b++){const M=v[b],y=u[M.materialIndex],C=Math.max(M.start,x.start),D=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let L=C,O=D;L<O;L+=3){const B=h.getX(L),P=h.getX(L+1),q=h.getX(L+2);r=yu(this,y,e,a,d,g,_,B,P,q),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{const b=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let M=b,y=T;M<y;M+=3){const C=h.getX(M),D=h.getX(M+1),L=h.getX(M+2);r=yu(this,u,e,a,d,g,_,C,D,L),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,T=v.length;b<T;b++){const M=v[b],y=u[M.materialIndex],C=Math.max(M.start,x.start),D=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let L=C,O=D;L<O;L+=3){const B=L,P=L+1,q=L+2;r=yu(this,y,e,a,d,g,_,B,P,q),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{const b=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=b,y=T;M<y;M+=3){const C=M,D=M+1,L=M+2;r=yu(this,u,e,a,d,g,_,C,D,L),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}}function eE(o,e,t,a,r,l,u,h){let p;if(e.side===si?p=a.intersectTriangle(u,l,r,!0,h):p=a.intersectTriangle(r,l,u,e.side===Fa,h),p===null)return null;xu.copy(h),xu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(xu);return d<t.near||d>t.far?null:{distance:d,point:xu.clone(),object:o}}function yu(o,e,t,a,r,l,u,h,p,d){o.getVertexPosition(h,mu),o.getVertexPosition(p,gu),o.getVertexPosition(d,_u);const g=eE(o,e,t,a,mu,gu,_u,Ov);if(g){const _=new k;Gi.getBarycoord(Ov,mu,gu,_u,_),r&&(g.uv=Gi.getInterpolatedAttribute(r,h,p,d,_,new $e)),l&&(g.uv1=Gi.getInterpolatedAttribute(l,h,p,d,_,new $e)),u&&(g.normal=Gi.getInterpolatedAttribute(u,h,p,d,_,new k),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new k,materialIndex:0};Gi.getNormal(mu,gu,_u,v.normal),g.face=v,g.barycoord=_}return g}class Wl extends Zn{constructor(e=1,t=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const h=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,t,e,u,l,0),b("z","y","x",1,-1,a,t,-e,u,l,1),b("x","z","y",1,1,e,a,t,r,u,2),b("x","z","y",1,-1,e,a,-t,r,u,3),b("x","y","z",1,-1,e,t,a,r,l,4),b("x","y","z",-1,-1,e,t,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new Xn(d,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(_,2));function b(T,M,y,C,D,L,O,B,P,q,A){const N=L/P,G=O/q,te=L/2,se=O/2,de=B/2,ue=P+1,z=q+1;let H=0,ae=0;const Se=new k;for(let xe=0;xe<z;xe++){const I=xe*G-se;for(let ie=0;ie<ue;ie++){const ge=ie*N-te;Se[T]=ge*C,Se[M]=I*D,Se[y]=de,d.push(Se.x,Se.y,Se.z),Se[T]=0,Se[M]=0,Se[y]=B>0?1:-1,g.push(Se.x,Se.y,Se.z),_.push(ie/P),_.push(1-xe/q),H+=1}}for(let xe=0;xe<q;xe++)for(let I=0;I<P;I++){const ie=v+I+ue*xe,ge=v+I+ue*(xe+1),Te=v+(I+1)+ue*(xe+1),ze=v+(I+1)+ue*xe;p.push(ie,ge,ze),p.push(ge,Te,ze),ae+=6}h.addGroup(x,ae,A),x+=ae,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(o){const e={};for(const t in o){e[t]={};for(const a in o[t]){const r=o[t][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=r.clone():Array.isArray(r)?e[t][a]=r.slice():e[t][a]=r}}return e}function Yn(o){const e={};for(let t=0;t<o.length;t++){const a=fo(o[t]);for(const r in a)e[r]=a[r]}return e}function tE(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ty(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const nE={clone:fo,merge:Yn};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=tE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class ny extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new k,Pv=new $e,Iv=new $e;class jn extends ny{constructor(e=50,t=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,Pv,Iv),t.subVectors(Iv,Pv)}setViewOffset(e,t,a,r,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nl*.5*this.fov)/this.zoom,a=2*t,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*r/p,t-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qr=-90,Jr=1;class sE extends sn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(Qr,Jr,e,t);r.layers=this.layers,this.add(r);const l=new jn(Qr,Jr,e,t);l.layers=this.layers,this.add(l);const u=new jn(Qr,Jr,e,t);u.layers=this.layers,this.add(u);const h=new jn(Qr,Jr,e,t);h.layers=this.layers,this.add(h);const p=new jn(Qr,Jr,e,t);p.layers=this.layers,this.add(p);const d=new jn(Qr,Jr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,r,l,u,h,p]=t;for(const d of t)this.remove(d);if(e===ia)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ku)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(t,l),e.setRenderTarget(a,1,r),e.render(t,u),e.setRenderTarget(a,2,r),e.render(t,h),e.setRenderTarget(a,3,r),e.render(t,p),e.setRenderTarget(a,4,r),e.render(t,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(t,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class iy extends wn{constructor(e=[],t=nr,a,r,l,u,h,p,d,g){super(e,t,a,r,l,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ay extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new iy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wl(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:fo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:Ba});l.uniforms.tEquirect.value=t;const u=new Mn(r,l),h=t.minFilter;return t.minFilter===Oa&&(t.minFilter=Sn),new sE(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,r=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,r);e.setRenderTarget(l)}}class Pa extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let r=null,l=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const T of e.hand.values()){const M=t.getJointPose(T,a),y=this._getHandJoint(d,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=t.getPose(e.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Pa;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class oE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zp,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let r=0,l=this.stride;r<l;r++)this.array[e+r]=t.array[a+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new k;class lm{constructor(e,t,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=Vi(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=kt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),a=kt(a,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,t,a,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),a=kt(a,this.array),r=kt(r,this.array),l=kt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Xu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[r+l])}return new kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[r+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bv=new k,zv=new Qt,Fv=new Qt,cE=new k,Hv=new ut,Su=new k,Dd=new la,Vv=new ut,Ld=new Xl;class uE extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dv,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ga),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Su),this.boundingBox.expandByPoint(Su)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new la),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,Su),this.boundingSphere.expandByPoint(Su)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dd.copy(this.boundingSphere),Dd.applyMatrix4(r),e.ray.intersectsSphere(Dd)!==!1&&(Vv.copy(r).invert(),Ld.copy(e.ray).applyMatrix4(Vv),!(this.boundingBox!==null&&Ld.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ld)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qt,t=this.geometry.attributes.skinWeight;for(let a=0,r=t.count;a<r;a++){e.fromBufferAttribute(t,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ob?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const a=this.skeleton,r=this.geometry;zv.fromBufferAttribute(r.attributes.skinIndex,e),Fv.fromBufferAttribute(r.attributes.skinWeight,e),Bv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=Fv.getComponent(l);if(u!==0){const h=zv.getComponent(l);Hv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),t.addScaledVector(cE.copy(Bv).applyMatrix4(Hv),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sy extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cm extends wn{constructor(e=null,t=1,a=1,r,l,u,h,p,d=en,g=en,_,v){super(null,u,h,p,d,g,r,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gv=new ut,hE=new ut;class um{constructor(e=[],t=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const a=new ut;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,t=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const h=e[l]?e[l].matrixWorld:hE;Gv.multiplyMatrices(h,t[l]),Gv.toArray(a,l*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new um(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const a=new cm(t,e,e,ai,Li);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const l=e.bones[a];let u=t[l];u===void 0&&(Ze("Skeleton: No bone found with UUID:",l),u=new sy),this.bones.push(u),this.boneInverses.push(new ut().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,a=this.boneInverses;for(let r=0,l=t.length;r<l;r++){const u=t[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class Fp extends kn{constructor(e,t,a,r=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $r=new ut,kv=new ut,Mu=[],Xv=new Ga,fE=new ut,Sl=new Mn,Ml=new la;class Hp extends Mn{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,fE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ga),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,$r),Xv.copy(e.boundingBox).applyMatrix4($r),this.boundingBox.union(Xv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new la),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,$r),Ml.copy(e.boundingSphere).applyMatrix4($r),this.boundingSphere.union(Ml)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,r=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,t){const a=this.matrixWorld,r=this.count;if(Sl.geometry=this.geometry,Sl.material=this.material,Sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ml.copy(this.boundingSphere),Ml.applyMatrix4(a),e.ray.intersectsSphere(Ml)!==!1))for(let l=0;l<r;l++){this.getMatrixAt(l,$r),kv.multiplyMatrices(a,$r),Sl.matrixWorld=kv,Sl.raycast(e,Mu);for(let u=0,h=Mu.length;u<h;u++){const p=Mu[u];p.instanceId=l,p.object=this,t.push(p)}Mu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new cm(new Float32Array(r*this.count),r,this.count,em,Li));const l=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=r*e;l[p]=h,l.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nd=new k,dE=new k,pE=new dt;class bs{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,r){return this.normal.set(e,t,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const r=Nd.subVectors(a,t).cross(dE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(Nd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||pE.getNormalMatrix(e),r=this.coplanarPoint(Nd).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new la,mE=new $e(.5,.5),bu=new k;class hm{constructor(e=new bs,t=new bs,a=new bs,r=new bs,l=new bs,u=new bs){this.planes=[e,t,a,r,l,u]}set(e,t,a,r,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(a),h[3].copy(r),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=ia,a=!1){const r=this.planes,l=e.elements,u=l[0],h=l[1],p=l[2],d=l[3],g=l[4],_=l[5],v=l[6],x=l[7],b=l[8],T=l[9],M=l[10],y=l[11],C=l[12],D=l[13],L=l[14],O=l[15];if(r[0].setComponents(d-u,x-g,y-b,O-C).normalize(),r[1].setComponents(d+u,x+g,y+b,O+C).normalize(),r[2].setComponents(d+h,x+_,y+T,O+D).normalize(),r[3].setComponents(d-h,x-_,y-T,O-D).normalize(),a)r[4].setComponents(p,v,M,L).normalize(),r[5].setComponents(d-p,x-v,y-M,O-L).normalize();else if(r[4].setComponents(d-p,x-v,y-M,O-L).normalize(),t===ia)r[5].setComponents(d+p,x+v,y+M,O+L).normalize();else if(t===ku)r[5].setComponents(p,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);const t=mE.distanceTo(e.center);return js.radius=.7071067811865476+t,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const t=this.planes,a=e.center,r=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const r=t[a];if(bu.x=r.normal.x>0?e.max.x:e.min.x,bu.y=r.normal.y>0?e.max.y:e.min.y,bu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fm extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new k,qu=new k,Wv=new ut,bl=new Xl,Eu=new la,Ud=new k,qv=new k;class dm extends sn{constructor(e=new Zn,t=new fm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let r=1,l=t.count;r<l;r++)Wu.fromBufferAttribute(t,r-1),qu.fromBufferAttribute(t,r),a[r]=a[r-1],a[r]+=Wu.distanceTo(qu);e.setAttribute("lineDistance",new Xn(a,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,r=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Eu.copy(a.boundingSphere),Eu.applyMatrix4(r),Eu.radius+=l,e.ray.intersectsSphere(Eu)===!1)return;Wv.copy(r).invert(),bl.copy(e.ray).applyMatrix4(Wv);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let T=x,M=b-1;T<M;T+=d){const y=g.getX(T),C=g.getX(T+1),D=Tu(this,e,bl,p,y,C,T);D&&t.push(D)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(x),y=Tu(this,e,bl,p,T,M,b-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let T=x,M=b-1;T<M;T+=d){const y=Tu(this,e,bl,p,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=Tu(this,e,bl,p,b-1,x,b-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Tu(o,e,t,a,r,l,u){const h=o.geometry.attributes.position;if(Wu.fromBufferAttribute(h,r),qu.fromBufferAttribute(h,l),t.distanceSqToSegment(Wu,qu,Ud,qv)>a)return;Ud.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Ud);if(!(d<e.near||d>e.far))return{distance:d,point:qv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Yv=new k,jv=new k;class ry extends dm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let r=0,l=t.count;r<l;r+=2)Yv.fromBufferAttribute(t,r),jv.fromBufferAttribute(t,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+Yv.distanceTo(jv);e.setAttribute("lineDistance",new Xn(a,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gE extends dm{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class oy extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kv=new ut,Vp=new Xl,Au=new la,wu=new k;class _E extends sn{constructor(e=new Zn,t=new oy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,r=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Au.copy(a.boundingSphere),Au.applyMatrix4(r),Au.radius+=l,e.ray.intersectsSphere(Au)===!1)return;Kv.copy(r).invert(),Vp.copy(e.ray).applyMatrix4(Kv);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let b=v,T=x;b<T;b++){const M=d.getX(b);wu.fromBufferAttribute(_,M),Zv(wu,M,p,r,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let b=v,T=x;b<T;b++)wu.fromBufferAttribute(_,b),Zv(wu,b,p,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const r=t[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Zv(o,e,t,a,r,l,u){const h=Vp.distanceSqToPoint(o);if(h<t){const p=new k;Vp.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class po extends wn{constructor(e,t,a=ra,r,l,u,h=en,p=en,d,g=Va,_=1){if(g!==Va&&g!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,r,l,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vE extends po{constructor(e,t=ra,a=nr,r,l,u=en,h=en,p,d=Va){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,a,r,l,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ly extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pm extends Zn{constructor(e=[],t=[],a=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:a,detail:r};const l=[],u=[];h(r),d(a),g(),this.setAttribute("position",new Xn(l,3)),this.setAttribute("normal",new Xn(l.slice(),3)),this.setAttribute("uv",new Xn(u,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function h(C){const D=new k,L=new k,O=new k;for(let B=0;B<t.length;B+=3)x(t[B+0],D),x(t[B+1],L),x(t[B+2],O),p(D,L,O,C)}function p(C,D,L,O){const B=O+1,P=[];for(let q=0;q<=B;q++){P[q]=[];const A=C.clone().lerp(L,q/B),N=D.clone().lerp(L,q/B),G=B-q;for(let te=0;te<=G;te++)te===0&&q===B?P[q][te]=A:P[q][te]=A.clone().lerp(N,te/G)}for(let q=0;q<B;q++)for(let A=0;A<2*(B-q)-1;A++){const N=Math.floor(A/2);A%2===0?(v(P[q][N+1]),v(P[q+1][N]),v(P[q][N])):(v(P[q][N+1]),v(P[q+1][N+1]),v(P[q+1][N]))}}function d(C){const D=new k;for(let L=0;L<l.length;L+=3)D.x=l[L+0],D.y=l[L+1],D.z=l[L+2],D.normalize().multiplyScalar(C),l[L+0]=D.x,l[L+1]=D.y,l[L+2]=D.z}function g(){const C=new k;for(let D=0;D<l.length;D+=3){C.x=l[D+0],C.y=l[D+1],C.z=l[D+2];const L=M(C)/2/Math.PI+.5,O=y(C)/Math.PI+.5;u.push(L,1-O)}b(),_()}function _(){for(let C=0;C<u.length;C+=6){const D=u[C+0],L=u[C+2],O=u[C+4],B=Math.max(D,L,O),P=Math.min(D,L,O);B>.9&&P<.1&&(D<.2&&(u[C+0]+=1),L<.2&&(u[C+2]+=1),O<.2&&(u[C+4]+=1))}}function v(C){l.push(C.x,C.y,C.z)}function x(C,D){const L=C*3;D.x=e[L+0],D.y=e[L+1],D.z=e[L+2]}function b(){const C=new k,D=new k,L=new k,O=new k,B=new $e,P=new $e,q=new $e;for(let A=0,N=0;A<l.length;A+=9,N+=6){C.set(l[A+0],l[A+1],l[A+2]),D.set(l[A+3],l[A+4],l[A+5]),L.set(l[A+6],l[A+7],l[A+8]),B.set(u[N+0],u[N+1]),P.set(u[N+2],u[N+3]),q.set(u[N+4],u[N+5]),O.copy(C).add(D).add(L).divideScalar(3);const G=M(O);T(B,N+0,C,G),T(P,N+2,D,G),T(q,N+4,L,G)}}function T(C,D,L,O){O<0&&C.x===1&&(u[D]=C.x-1),L.x===0&&L.z===0&&(u[D]=O/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function y(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pm(e.vertices,e.indices,e.radius,e.detail)}}class mm extends pm{constructor(e=1,t=0){const a=(1+Math.sqrt(5))/2,r=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mm(e.radius,e.detail)}}class vo extends Zn{constructor(e=1,t=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:r};const l=e/2,u=t/2,h=Math.floor(a),p=Math.floor(r),d=h+1,g=p+1,_=e/h,v=t/p,x=[],b=[],T=[],M=[];for(let y=0;y<g;y++){const C=y*v-u;for(let D=0;D<d;D++){const L=D*_-l;b.push(L,-C,0),T.push(0,0,1),M.push(D/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let C=0;C<h;C++){const D=C+d*y,L=C+d*(y+1),O=C+1+d*(y+1),B=C+1+d*y;x.push(D,L,B),x.push(L,O,B)}this.setIndex(x),this.setAttribute("position",new Xn(b,3)),this.setAttribute("normal",new Xn(T,3)),this.setAttribute("uv",new Xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class xE extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gm extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ca extends gm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yE extends _i{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ju extends _i{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class SE extends _i{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ME extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bE extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ru(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function EE(o){function e(r,l){return o[r]-o[l]}const t=o.length,a=new Array(t);for(let r=0;r!==t;++r)a[r]=r;return a.sort(e),a}function Qv(o,e,t){const a=o.length,r=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const h=t[l]*e;for(let p=0;p!==e;++p)r[u++]=o[h+p]}return r}function cy(o,e,t,a){let r=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[r++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),t.push(...u)),l=o[r++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=o[r++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),t.push(u)),l=o[r++];while(l!==void 0)}class ql{constructor(e,t,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let a=this._cachedIndex,r=t[a],l=t[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<l)break i;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(l=r,r=t[++a],e<r)break t}u=t.length;break n}if(!(e>=l)){const h=t[1];e<h&&(a=2,l=h);for(let p=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=l,l=t[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<t[h]?u=h:a=h+1}if(r=t[a],l=t[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,r)}return this.interpolate_(a,l,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r;for(let u=0;u!==r;++u)t[u]=a[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class TE extends ql{constructor(e,t,a,r){super(e,t,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pv,endingEnd:pv}}intervalChanged_(e,t,a){const r=this.parameterPositions;let l=e-2,u=e+1,h=r[l],p=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case mv:l=e,h=2*t-a;break;case gv:l=r.length-2,h=t+r[l]-r[l+1];break;default:l=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case mv:u=e,p=2*a-t;break;case gv:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=t}const d=(a-t)*.5,g=this.valueSize;this._weightPrev=d/(t-h),this._weightNext=d/(p-a),this._offsetPrev=l*g,this._offsetNext=u*g}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,b=(a-t)/(r-t),T=b*b,M=T*b,y=-v*M+2*v*T-v*b,C=(1+v)*M+(-1.5-2*v)*T+(-.5+v)*b+1,D=(-1-x)*M+(1.5+x)*T+.5*b,L=x*M-x*T;for(let O=0;O!==h;++O)l[O]=y*u[g+O]+C*u[d+O]+D*u[p+O]+L*u[_+O];return l}}class AE extends ql{constructor(e,t,a,r){super(e,t,a,r)}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-t)/(r-t),_=1-g;for(let v=0;v!==h;++v)l[v]=u[d+v]*_+u[p+v]*g;return l}}class wE extends ql{constructor(e,t,a,r){super(e,t,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yi{constructor(e,t,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ru(t,this.TimeBufferType),this.values=Ru(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:Ru(e.times,Array),values:Ru(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new wE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new AE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new TE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bl:t=this.InterpolantFactoryMethodDiscrete;break;case zl:t=this.InterpolantFactoryMethodLinear;break;case ld:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ze("KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bl;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return ld}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let a=0,r=t.length;a!==r;++a)t[a]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let a=0,r=t.length;a!==r;++a)t[a]*=e}return this}trim(e,t){const a=this.times,r=a.length;let l=0,u=r-1;for(;l!==r&&a[l]<e;)++l;for(;u!==-1&&a[u]>t;)--u;if(++u,l!==0||u!==r){l>=u&&(u=Math.max(u,1),l=u-1);const h=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*h,u*h)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,l=a.length;l===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==l;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){at("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){at("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(r!==void 0&&xb(r))for(let h=0,p=r.length;h!==p;++h){const d=r[h];if(isNaN(d)){at("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===ld,l=e.length-1;let u=1;for(let h=1;h<l;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(r)p=!0;else{const _=h*a,v=_-a,x=_+a;for(let b=0;b!==a;++b){const T=t[_+b];if(T!==t[v+b]||T!==t[x+b]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let x=0;x!==a;++x)t[v+x]=t[_+x]}++u}}if(l>0){e[u]=e[l];for(let h=l*a,p=u*a,d=0;d!==a;++d)t[p+d]=t[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*a)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),a=this.constructor,r=new a(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Yi.prototype.ValueTypeName="";Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=zl;class xo extends Yi{constructor(e,t,a){super(e,t,a)}}xo.prototype.ValueTypeName="bool";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=Bl;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class uy extends Yi{constructor(e,t,a,r){super(e,t,a,r)}}uy.prototype.ValueTypeName="color";class mo extends Yi{constructor(e,t,a,r){super(e,t,a,r)}}mo.prototype.ValueTypeName="number";class RE extends ql{constructor(e,t,a,r){super(e,t,a,r)}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-t)/(r-t);let d=e*h;for(let g=d+h;d!==g;d+=4)oa.slerpFlat(l,0,u,d-h,u,d,p);return l}}class go extends Yi{constructor(e,t,a,r){super(e,t,a,r)}InterpolantFactoryMethodLinear(e){return new RE(this.times,this.values,this.getValueSize(),e)}}go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Yi{constructor(e,t,a){super(e,t,a)}}yo.prototype.ValueTypeName="string";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=Bl;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Yi{constructor(e,t,a,r){super(e,t,a,r)}}_o.prototype.ValueTypeName="vector";class CE{constructor(e="",t=-1,a=[],r=lb){this.name=e,this.tracks=a,this.duration=t,this.blendMode=r,this.uuid=ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)t.push(LE(a[u]).scale(r));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const t=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,u=a.length;l!==u;++l)t.push(Yi.toJSON(a[l]));return r}static CreateFromMorphTargetSequence(e,t,a,r){const l=t.length,u=[];for(let h=0;h<l;h++){let p=[],d=[];p.push((h+l-1)%l,h,(h+1)%l),d.push(0,1,0);const g=EE(p);p=Qv(p,1,g),d=Qv(d,1,g),!r&&p[0]===0&&(p.push(l),d.push(d[0])),u.push(new mo(".morphTargetInfluences["+t[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,t){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===t)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,t,a){const r={},l=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(l);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(d)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],t,a));return u}static parseAnimation(e,t){if(Ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return at("AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,x,b,T){if(x.length!==0){const M=[],y=[];cy(x,M,y,b),M.length!==0&&T.push(new _(v,M,y))}},r=[],l=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let T=0;T<v[b].morphTargets.length;T++)x[v[b].morphTargets[T]]=-1;for(const T in x){const M=[],y=[];for(let C=0;C!==v[b].morphTargets.length;++C){const D=v[b];M.push(D.time),y.push(D.morphTarget===T?1:0)}r.push(new mo(".morphTargetInfluence["+T+"]",M,y))}p=x.length*u}else{const x=".bones["+t[_].name+"]";a(_o,x+".position",v,"pos",r),a(go,x+".quaternion",v,"rot",r),a(_o,x+".scale",v,"scl",r)}}return r.length===0?null:new this(l,p,r,h)}resetDuration(){const e=this.tracks;let t=0;for(let a=0,r=e.length;a!==r;++a){const l=this.tracks[a];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function DE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return uy;case"quaternion":return go;case"bool":case"boolean":return xo;case"string":return yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function LE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=DE(o.type);if(o.times===void 0){const t=[],a=[];cy(o.keys,t,a,"value"),o.times=t,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ia={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class NE{constructor(e,t,a){const r=this;let l=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,l===!1&&r.onStart!==void 0&&r.onStart(g,u,h),l=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const x=d[_],b=d[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const UE=new NE;class So{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(r,l){a.load(e,r,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ua={};class OE extends Error{constructor(e,t){super(e),this.response=t}}class hy extends So{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Ia.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Ua[e]!==void 0){Ua[e].push({onLoad:t,onProgress:a,onError:r});return}Ua[e]=[],Ua[e].push({onLoad:t,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Ua[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,b=x!==0;let T=0;const M=new ReadableStream({start(y){C();function C(){_.read().then(({done:D,value:L})=>{if(D)y.close();else{T+=L.byteLength;const O=new ProgressEvent("progress",{lengthComputable:b,loaded:T,total:x});for(let B=0,P=g.length;B<P;B++){const q=g[B];q.onProgress&&q.onProgress(O)}y.enqueue(L),C()}},D=>{y.error(D)})}}});return new Response(M)}else throw new OE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(b=>x.decode(b))}}}).then(d=>{Ia.add(`file:${e}`,d);const g=Ua[e];delete Ua[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Ua[e];if(g===void 0)throw this.manager.itemError(e),d;delete Ua[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const eo=new WeakMap;class PE extends So{constructor(e){super(e)}load(e,t,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Ia.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=eo.get(u);_===void 0&&(_=[],eo.set(u,_)),_.push({onLoad:t,onError:r})}return u}const h=Fl("img");function p(){g(),t&&t(this);const _=eo.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}eo.delete(this),l.manager.itemEnd(e)}function d(_){g(),r&&r(_),Ia.remove(`image:${e}`);const v=eo.get(this)||[];for(let x=0;x<v.length;x++){const b=v[x];b.onError&&b.onError(_)}eo.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ia.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class fy extends So{constructor(e){super(e)}load(e,t,a,r){const l=new wn,u=new PE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},a,r),l}}class Ku extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Od=new ut,Jv=new k,$v=new k;class _m{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hm,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;Jv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jv),$v.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($v),t.updateMatrixWorld(),Od.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od,t.coordinateSystem,t.reversedDepth),t.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class IE extends _m{constructor(){super(new jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,a=ho*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(a!==t.fov||r!==t.aspect||l!==t.far)&&(t.fov=a,t.aspect=r,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class BE extends Ku{constructor(e,t,a=0,r=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=a,this.angle=r,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new IE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class zE extends _m{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0}}class dy extends Ku{constructor(e,t,a=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new zE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yl extends ny{constructor(e=-1,t=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-e,u=a+e,h=r+t,p=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class FE extends _m{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends Ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new FE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class HE extends Ku{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ol{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Pd=new WeakMap;class VE extends So{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Ia.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(d=>{if(Pd.has(u)===!0)r&&r(Pd.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(d),l.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ia.add(`image-bitmap:${e}`,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){r&&r(d),Pd.set(p,d),Ia.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});Ia.add(`image-bitmap:${e}`,p),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class GE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const vm="\\[\\]\\.:\\/",XE=new RegExp("["+vm+"]","g"),xm="[^"+vm+"]",WE="[^"+vm.replace("\\.","")+"]",qE=/((?:WC+[\/:])*)/.source.replace("WC",xm),YE=/(WCOD+)?/.source.replace("WCOD",WE),jE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xm),KE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xm),ZE=new RegExp("^"+qE+YE+jE+KE+"$"),QE=["material","materials","bones","map"];class JE{constructor(e,t,a){const r=a||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,t)}setValue(e,t){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,l=a.length;r!==l;++r)a[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}}class Xt{constructor(e,t,a){this.path=t,this.parsedPath=a||Xt.parseTrackName(t),this.node=Xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new Xt.Composite(e,t,a):new Xt(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XE,"")}static parseTrackName(e){const t=ZE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const l=a.nodeName.substring(r+1);QE.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const h=l[u];if(h.name===t||h.uuid===t)return h;const p=a(h.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)e[t++]=a[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,a=t.objectName,r=t.propertyName;let l=t.propertyIndex;if(e||(e=Xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=t.objectIndex;switch(a){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[r];if(u===void 0){const d=t.nodeName;at("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xt.Composite=JE;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ex{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $E extends ir{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tx(o,e,t,a){const r=eT(a);switch(t){case Yx:return o*e;case em:return o*e/r.components*r.byteLength;case tm:return o*e/r.components*r.byteLength;case uo:return o*e*2/r.components*r.byteLength;case nm:return o*e*2/r.components*r.byteLength;case Vu:return o*e*3/r.components*r.byteLength;case ai:return o*e*4/r.components*r.byteLength;case im:return o*e*4/r.components*r.byteLength;case Pu:case Iu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bu:case zu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rp:case lp:return Math.max(o,16)*Math.max(e,8)/4;case sp:case op:return Math.max(o,8)*Math.max(e,8)/2;case cp:case up:case fp:case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hp:case pp:case mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Lp:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Up:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pp:case Ip:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eT(o){switch(o){case gi:case kx:return{byteLength:1,components:1};case Pl:case Xx:case Ha:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case ra:case Qp:case Li:return{byteLength:4,components:1};case Wx:case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);function py(){let o=null,e=!1,t=null,a=null;function r(l,u){t(l,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function tT(o){const e=new WeakMap;function t(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],T=_[x];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,_[v]=T)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const T=_[x];o.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:l,update:u}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
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
#endif`,aT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uT=`#ifdef USE_BATCHING
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
#endif`,hT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mT=`#ifdef USE_IRIDESCENCE
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
#endif`,gT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TT=`#define PI 3.141592653589793
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
} // validated`,AT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wT=`vec3 transformedNormal = objectNormal;
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
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",UT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kT=`#ifdef USE_GRADIENTMAP
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
}`,XT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
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
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$T=`PhysicalMaterial material;
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
#endif`,eA=`uniform sampler2D dfgLUT;
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
}`,tA=`
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
#endif`,nA=`#if defined( RE_IndirectDiffuse )
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
#endif`,iA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hA=`#if defined( USE_POINTS_UV )
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
#endif`,fA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_A=`#ifdef USE_MORPHTARGETS
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
#endif`,vA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EA=`#ifdef USE_NORMALMAP
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
#endif`,TA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HA=`float getShadowMask() {
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
}`,VA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GA=`#ifdef USE_SKINNING
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
#endif`,kA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XA=`#ifdef USE_SKINNING
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
#endif`,WA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KA=`#ifdef USE_TRANSMISSION
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
#endif`,ZA=`#ifdef USE_TRANSMISSION
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
#endif`,QA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
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
}`,l1=`#if DEPTH_PACKING == 3200
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
}`,c1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define MATCAP
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
}`,y1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,M1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,E1=`#define PHONG
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
}`,T1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,R1=`#define TOON
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
}`,C1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,N1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,O1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:aT,alphamap_pars_fragment:sT,alphatest_fragment:rT,alphatest_pars_fragment:oT,aomap_fragment:lT,aomap_pars_fragment:cT,batching_pars_vertex:uT,batching_vertex:hT,begin_vertex:fT,beginnormal_vertex:dT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:yT,color_fragment:ST,color_pars_fragment:MT,color_pars_vertex:bT,color_vertex:ET,common:TT,cube_uv_reflection_fragment:AT,defaultnormal_vertex:wT,displacementmap_pars_vertex:RT,displacementmap_vertex:CT,emissivemap_fragment:DT,emissivemap_pars_fragment:LT,colorspace_fragment:NT,colorspace_pars_fragment:UT,envmap_fragment:OT,envmap_common_pars_fragment:PT,envmap_pars_fragment:IT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:jT,envmap_vertex:zT,fog_vertex:FT,fog_pars_vertex:HT,fog_fragment:VT,fog_pars_fragment:GT,gradientmap_pars_fragment:kT,lightmap_pars_fragment:XT,lights_lambert_fragment:WT,lights_lambert_pars_fragment:qT,lights_pars_begin:YT,lights_toon_fragment:KT,lights_toon_pars_fragment:ZT,lights_phong_fragment:QT,lights_phong_pars_fragment:JT,lights_physical_fragment:$T,lights_physical_pars_fragment:eA,lights_fragment_begin:tA,lights_fragment_maps:nA,lights_fragment_end:iA,logdepthbuf_fragment:aA,logdepthbuf_pars_fragment:sA,logdepthbuf_pars_vertex:rA,logdepthbuf_vertex:oA,map_fragment:lA,map_pars_fragment:cA,map_particle_fragment:uA,map_particle_pars_fragment:hA,metalnessmap_fragment:fA,metalnessmap_pars_fragment:dA,morphinstance_vertex:pA,morphcolor_vertex:mA,morphnormal_vertex:gA,morphtarget_pars_vertex:_A,morphtarget_vertex:vA,normal_fragment_begin:xA,normal_fragment_maps:yA,normal_pars_fragment:SA,normal_pars_vertex:MA,normal_vertex:bA,normalmap_pars_fragment:EA,clearcoat_normal_fragment_begin:TA,clearcoat_normal_fragment_maps:AA,clearcoat_pars_fragment:wA,iridescence_pars_fragment:RA,opaque_fragment:CA,packing:DA,premultiplied_alpha_fragment:LA,project_vertex:NA,dithering_fragment:UA,dithering_pars_fragment:OA,roughnessmap_fragment:PA,roughnessmap_pars_fragment:IA,shadowmap_pars_fragment:BA,shadowmap_pars_vertex:zA,shadowmap_vertex:FA,shadowmask_pars_fragment:HA,skinbase_vertex:VA,skinning_pars_vertex:GA,skinning_vertex:kA,skinnormal_vertex:XA,specularmap_fragment:WA,specularmap_pars_fragment:qA,tonemapping_fragment:YA,tonemapping_pars_fragment:jA,transmission_fragment:KA,transmission_pars_fragment:ZA,uv_pars_fragment:QA,uv_pars_vertex:JA,uv_vertex:$A,worldpos_vertex:e1,background_vert:t1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:a1,cube_vert:s1,cube_frag:r1,depth_vert:o1,depth_frag:l1,distance_vert:c1,distance_frag:u1,equirect_vert:h1,equirect_frag:f1,linedashed_vert:d1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:_1,meshlambert_frag:v1,meshmatcap_vert:x1,meshmatcap_frag:y1,meshnormal_vert:S1,meshnormal_frag:M1,meshphong_vert:b1,meshphong_frag:E1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:w1,meshtoon_frag:R1,points_vert:C1,points_frag:D1,shadow_vert:L1,shadow_frag:N1,sprite_vert:U1,sprite_frag:O1},Ue={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ta={basic:{uniforms:Yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Yn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Yn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Yn([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Yn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Yn([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Yn([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Yn([Ue.common,Ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Yn([Ue.lights,Ue.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ta.physical={uniforms:Yn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Cu={r:0,b:0,g:0},Ks=new Wi,P1=new ut;function I1(o,e,t,a,r,l,u){const h=new Qe(0);let p=l===!0?0:1,d,g,_=null,v=0,x=null;function b(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?t:e).get(L)),L}function T(D){let L=!1;const O=b(D);O===null?y(h,p):O&&O.isColor&&(y(O,1),L=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,L){const O=b(L);O&&(O.isCubeTexture||O.mapping===Yu)?(g===void 0&&(g=new Mn(new Wl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:fo(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ks.copy(L.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Ks)),g.material.toneMapped=wt.getTransfer(O.colorSpace)!==Gt,(_!==O||v!==O.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,_=O,v=O.version,x=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Mn(new vo(2,2),new qi({name:"BackgroundMaterial",uniforms:fo(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=wt.getTransfer(O.colorSpace)!==Gt,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,_=O,v=O.version,x=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function y(D,L){D.getRGB(Cu,ty(o)),a.buffers.color.setClear(Cu.r,Cu.g,Cu.b,L,u)}function C(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,L=1){h.set(D),p=L,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(h,p)},render:T,addToRenderList:M,dispose:C}}function B1(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function h(N,G,te,se,de){let ue=!1;const z=_(se,te,G);l!==z&&(l=z,d(l.object)),ue=x(N,se,te,de),ue&&b(N,se,te,de),de!==null&&e.update(de,o.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,L(N,G,te,se),de!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return o.createVertexArray()}function d(N){return o.bindVertexArray(N)}function g(N){return o.deleteVertexArray(N)}function _(N,G,te){const se=te.wireframe===!0;let de=a[N.id];de===void 0&&(de={},a[N.id]=de);let ue=de[G.id];ue===void 0&&(ue={},de[G.id]=ue);let z=ue[se];return z===void 0&&(z=v(p()),ue[se]=z),z}function v(N){const G=[],te=[],se=[];for(let de=0;de<t;de++)G[de]=0,te[de]=0,se[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:te,attributeDivisors:se,object:N,attributes:{},index:null}}function x(N,G,te,se){const de=l.attributes,ue=G.attributes;let z=0;const H=te.getAttributes();for(const ae in H)if(H[ae].location>=0){const xe=de[ae];let I=ue[ae];if(I===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(I=N.instanceColor)),xe===void 0||xe.attribute!==I||I&&xe.data!==I.data)return!0;z++}return l.attributesNum!==z||l.index!==se}function b(N,G,te,se){const de={},ue=G.attributes;let z=0;const H=te.getAttributes();for(const ae in H)if(H[ae].location>=0){let xe=ue[ae];xe===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor));const I={};I.attribute=xe,xe&&xe.data&&(I.data=xe.data),de[ae]=I,z++}l.attributes=de,l.attributesNum=z,l.index=se}function T(){const N=l.newAttributes;for(let G=0,te=N.length;G<te;G++)N[G]=0}function M(N){y(N,0)}function y(N,G){const te=l.newAttributes,se=l.enabledAttributes,de=l.attributeDivisors;te[N]=1,se[N]===0&&(o.enableVertexAttribArray(N),se[N]=1),de[N]!==G&&(o.vertexAttribDivisor(N,G),de[N]=G)}function C(){const N=l.newAttributes,G=l.enabledAttributes;for(let te=0,se=G.length;te<se;te++)G[te]!==N[te]&&(o.disableVertexAttribArray(te),G[te]=0)}function D(N,G,te,se,de,ue,z){z===!0?o.vertexAttribIPointer(N,G,te,de,ue):o.vertexAttribPointer(N,G,te,se,de,ue)}function L(N,G,te,se){T();const de=se.attributes,ue=te.getAttributes(),z=G.defaultAttributeValues;for(const H in ue){const ae=ue[H];if(ae.location>=0){let Se=de[H];if(Se===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Se!==void 0){const xe=Se.normalized,I=Se.itemSize,ie=e.get(Se);if(ie===void 0)continue;const ge=ie.buffer,Te=ie.type,ze=ie.bytesPerElement,ne=Te===o.INT||Te===o.UNSIGNED_INT||Se.gpuType===Qp;if(Se.isInterleavedBufferAttribute){const ce=Se.data,Ce=ce.stride,Ge=Se.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ae.locationSize;Fe++)y(ae.location+Fe,ce.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<ae.locationSize;Fe++)M(ae.location+Fe);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Fe=0;Fe<ae.locationSize;Fe++)D(ae.location+Fe,I/ae.locationSize,Te,xe,Ce*ze,(Ge+I/ae.locationSize*Fe)*ze,ne)}else{if(Se.isInstancedBufferAttribute){for(let ce=0;ce<ae.locationSize;ce++)y(ae.location+ce,Se.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ce=0;ce<ae.locationSize;ce++)M(ae.location+ce);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ce=0;ce<ae.locationSize;ce++)D(ae.location+ce,I/ae.locationSize,Te,xe,I*ze,I/ae.locationSize*ce*ze,ne)}}else if(z!==void 0){const xe=z[H];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(ae.location,xe);break;case 3:o.vertexAttrib3fv(ae.location,xe);break;case 4:o.vertexAttrib4fv(ae.location,xe);break;default:o.vertexAttrib1fv(ae.location,xe)}}}}C()}function O(){q();for(const N in a){const G=a[N];for(const te in G){const se=G[te];for(const de in se)g(se[de].object),delete se[de];delete G[te]}delete a[N]}}function B(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const te in G){const se=G[te];for(const de in se)g(se[de].object),delete se[de];delete G[te]}delete a[N.id]}function P(N){for(const G in a){const te=a[G];if(te[N.id]===void 0)continue;const se=te[N.id];for(const de in se)g(se[de].object),delete se[de];delete te[N.id]}}function q(){A(),u=!0,l!==r&&(l=r,d(l.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:q,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:C}}function z1(o,e,t){let a;function r(d){a=d}function l(d,g){o.drawArrays(a,d,g),t.update(g,a,1)}function u(d,g,_){_!==0&&(o.drawArraysInstanced(a,d,g,_),t.update(g,a,_))}function h(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let x=0;for(let b=0;b<_;b++)x+=g[b];t.update(x,a,1)}function p(d,g,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<d.length;b++)u(d[b],g[b],v[b]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*v[T];t.update(b,a,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function F1(o,e,t,a){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==ai&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const q=P===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Li&&!q)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=p(d);g!==d&&(Ze("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:L,maxSamples:O,samples:B}}function H1(o){const e=this;let t=null,a=0,r=!1,l=!1;const u=new bs,h=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||r;return r=v,a=_.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,y=o.get(_);if(!r||b===null||b.length===0||l&&!M)l?g(null):d();else{const C=l?0:a,D=C*4;let L=y.clippingState||null;p.value=L,L=g(b,v,D,x);for(let O=0;O!==D;++O)L[O]=t[O];y.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=p.value,b!==!0||M===null){const y=x+T*4,C=v.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<y)&&(M=new Float32Array(y));for(let D=0,L=x;D!==T;++D,L+=4)u.copy(_[D]).applyMatrix4(C,h),u.normal.toArray(M,L),M[L+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function V1(o){let e=new WeakMap;function t(u,h){return h===ip?u.mapping=nr:h===ap&&(u.mapping=lo),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===ip||h===ap)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new ay(p.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",r),t(d.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const As=4,nx=[.125,.215,.35,.446,.526,.582],$s=20,G1=256,El=new Yl,ix=new Qe;let Id=null,Bd=0,zd=0,Fd=!1;const k1=new k;class ax{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,r=100,l={}){const{size:u=256,position:h=k1}=l;Id=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Bd,zd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ha,format:ai,colorSpace:Kn,depthBuffer:!1},r=sx(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X1(l)),this._blurMaterial=q1(l,e,t),this._ggxMaterial=W1(l,e,t)}return r}_compileMaterial(e){const t=new Mn(new Zn,e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,a,r,l){const p=new jn(90,1,t,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(ix),_.toneMapping=aa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Wl,new tr({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let y=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,y=!0):(M.color.copy(ix),y=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[D],l.y,l.z)):L===1?(p.up.set(0,0,d[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[D],l.z)):(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[D]));const O=this._cubeSize;to(r,L*O,D>2?O:0,O,O),_.setRenderTarget(r),y&&_.render(T,p),_.render(e,p)}_.toneMapping=x,_.autoClear=v,e.background=C}_textureToCubeUV(e,t){const a=this._renderer,r=e.mapping===nr||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const l=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const p=this._cubeSize;to(t,0,0,3*p,2*p),a.setRenderTarget(t),a.render(u,El)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const r=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,T=this._sizeLods[a],M=3*T*(a>b-As?a-b+As:0),y=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=b-t,to(l,M,y,3*T,2*T),r.setRenderTarget(l),r.render(h,El),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=b-a,to(e,M,y,3*T,2*T),r.setRenderTarget(e),r.render(h,El)}_blur(e,t,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,r,"latitudinal",l),this._halfBlur(u,e,a,a,r,"longitudinal",l)}_halfBlur(e,t,a,r,l,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,b=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*$s-1),T=l/b,M=isFinite(l)?1+Math.floor(g*T):$s;M>$s&&Ze(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${$s}`);const y=[];let C=0;for(let P=0;P<$s;++P){const q=P/T,A=Math.exp(-q*q/2);y.push(A),P===0?C+=A:P<M&&(C+=2*A)}for(let P=0;P<y.length;P++)y[P]=y[P]/C;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-a;const L=this._sizeLods[r],O=3*L*(r>D-As?r-D+As:0),B=4*(this._cubeSize-L);to(t,O,B,3*L,2*L),p.setRenderTarget(t),p.render(_,El)}}function X1(o){const e=[],t=[],a=[];let r=o;const l=o-As+1+nx.length;for(let u=0;u<l;u++){const h=Math.pow(2,r);e.push(h);let p=1/h;u>o-As?p=nx[u-o+As-1]:u===0&&(p=0),t.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,T=3,M=2,y=1,C=new Float32Array(T*b*x),D=new Float32Array(M*b*x),L=new Float32Array(y*b*x);for(let B=0;B<x;B++){const P=B%3*2/3-1,q=B>2?0:-1,A=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];C.set(A,T*b*B),D.set(v,M*b*B);const N=[B,B,B,B,B,B];L.set(N,y*b*B)}const O=new Zn;O.setAttribute("position",new kn(C,T)),O.setAttribute("uv",new kn(D,M)),O.setAttribute("faceIndex",new kn(L,y)),a.push(new Mn(O,null)),r>As&&r--}return{lodMeshes:a,sizeLods:e,sigmas:t}}function sx(o,e,t){const a=new Xi(o,e,t);return a.texture.mapping=Yu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function to(o,e,t,a,r){o.viewport.set(e,t,a,r),o.scissor.set(e,t,a,r)}function W1(o,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function q1(o,e,t){const a=new Float32Array($s),r=new k(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function rx(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function ox(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}function Y1(o){let e=new WeakMap,t=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===ip||p===ap,g=p===nr||p===lo;if(d||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return t===null&&(t=new ax(o)),_=d?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&r(x)?(t===null&&(t=new ax(o)),_=d?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function r(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function l(h){const p=h.target;p.removeEventListener("dispose",l);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function j1(o){const e={};function t(a){if(e[a]!==void 0)return e[a];const r=o.getExtension(a);return e[a]=r,r}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const r=t(a);return r===null&&Hl("WebGLRenderer: "+a+" extension not supported."),r}}}function K1(o,e,t,a){const r={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete r[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],o.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let T=0;if(x!==null){const C=x.array;T=x.version;for(let D=0,L=C.length;D<L;D+=3){const O=C[D+0],B=C[D+1],P=C[D+2];v.push(O,B,B,P,P,O)}}else if(b!==void 0){const C=b.array;T=b.version;for(let D=0,L=C.length/3-1;D<L;D+=3){const O=D+0,B=D+1,P=D+2;v.push(O,B,B,P,P,O)}}else return;const M=new(Kx(v)?ey:$x)(v,1);M.version=T;const y=l.get(_);y&&e.remove(y),l.set(_,M)}function g(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return l.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function Z1(o,e,t){let a;function r(v){a=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function p(v,x){o.drawElements(a,x,l,v*u),t.update(x,a,1)}function d(v,x,b){b!==0&&(o.drawElementsInstanced(a,x,l,v*u,b),t.update(x,a,b))}function g(v,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,b);let M=0;for(let y=0;y<b;y++)M+=x[y];t.update(M,a,1)}function _(v,x,b,T){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)d(v[y]/u,x[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,T,0,b);let y=0;for(let C=0;C<b;C++)y+=x[C]*T[C];t.update(y,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Q1(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,h){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=h*(l/3);break;case o.LINES:t.lines+=h*(l/2);break;case o.LINE_STRIP:t.lines+=h*(l-1);break;case o.LINE_LOOP:t.lines+=h*l;break;case o.POINTS:t.points+=h*l;break;default:at("WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:a}}function J1(o,e,t){const a=new WeakMap,r=new Qt;function l(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let N=function(){q.dispose(),a.delete(h),h.removeEventListener("dispose",N)};var x=N;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),M===!0&&(L=3);let O=h.attributes.position.count*L,B=1;O>e.maxTextureSize&&(B=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*B*4*_),q=new Zx(P,O,B,_);q.type=Li,q.needsUpdate=!0;const A=L*4;for(let G=0;G<_;G++){const te=y[G],se=C[G],de=D[G],ue=O*B*4*G;for(let z=0;z<te.count;z++){const H=z*A;b===!0&&(r.fromBufferAttribute(te,z),P[ue+H+0]=r.x,P[ue+H+1]=r.y,P[ue+H+2]=r.z,P[ue+H+3]=0),T===!0&&(r.fromBufferAttribute(se,z),P[ue+H+4]=r.x,P[ue+H+5]=r.y,P[ue+H+6]=r.z,P[ue+H+7]=0),M===!0&&(r.fromBufferAttribute(de,z),P[ue+H+8]=r.x,P[ue+H+9]=r.y,P[ue+H+10]=r.z,P[ue+H+11]=de.itemSize===4?r.w:1)}}v={count:_,texture:q,size:new $e(O,B)},a.set(h,v),h.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const T=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function $1(o,e,t,a){let r=new WeakMap;function l(p){const d=a.render.frame,g=p.geometry,_=e.get(p,g);if(r.get(_)!==d&&(e.update(_),r.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),r.get(p)!==d&&(t.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return _}function u(){r=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}const ew={[Ox]:"LINEAR_TONE_MAPPING",[Px]:"REINHARD_TONE_MAPPING",[Ix]:"CINEON_TONE_MAPPING",[Bx]:"ACES_FILMIC_TONE_MAPPING",[Fx]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[zx]:"CUSTOM_TONE_MAPPING"};function tw(o,e,t,a,r){const l=new Xi(e,t,{type:o,depthBuffer:a,stencilBuffer:r}),u=new Xi(e,t,{type:Ha,depthBuffer:!1,stencilBuffer:!1}),h=new Zn;h.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const p=new xE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Mn(h,p),g=new Yl(-1,1,1,-1,0,1);let _=null,v=null,x=!1,b,T=null,M=[],y=!1;this.setSize=function(C,D){l.setSize(C,D),u.setSize(C,D);for(let L=0;L<M.length;L++){const O=M[L];O.setSize&&O.setSize(C,D)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;const D=l.width,L=l.height;for(let O=0;O<M.length;O++){const B=M[O];B.setSize&&B.setSize(D,L)}},this.begin=function(C,D){if(x||C.toneMapping===aa&&M.length===0)return!1;if(T=D,D!==null){const L=D.width,O=D.height;(l.width!==L||l.height!==O)&&this.setSize(L,O)}return y===!1&&C.setRenderTarget(l),b=C.toneMapping,C.toneMapping=aa,!0},this.hasRenderPass=function(){return y},this.end=function(C,D){C.toneMapping=b,x=!0;let L=l,O=u;for(let B=0;B<M.length;B++){const P=M[B];if(P.enabled!==!1&&(P.render(C,O,L,D),P.needsSwap!==!1)){const q=L;L=O,O=q}}if(_!==C.outputColorSpace||v!==C.toneMapping){_=C.outputColorSpace,v=C.toneMapping,p.defines={},wt.getTransfer(_)===Gt&&(p.defines.SRGB_TRANSFER="");const B=ew[v];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(T),C.render(d,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),h.dispose(),p.dispose()}}const my=new wn,Gp=new po(1,1),gy=new Zx,_y=new kb,vy=new iy,lx=[],cx=[],ux=new Float32Array(16),hx=new Float32Array(9),fx=new Float32Array(4);function Mo(o,e,t){const a=o[0];if(a<=0||a>0)return o;const r=e*t;let l=lx[r];if(l===void 0&&(l=new Float32Array(r),lx[r]=l),e!==0){a.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,o[u].toArray(l,h)}return l}function bn(o,e){if(o.length!==e.length)return!1;for(let t=0,a=o.length;t<a;t++)if(o[t]!==e[t])return!1;return!0}function En(o,e){for(let t=0,a=e.length;t<a;t++)o[t]=e[t]}function Qu(o,e){let t=cx[e];t===void 0&&(t=new Int32Array(e),cx[e]=t);for(let a=0;a!==e;++a)t[a]=o.allocateTextureUnit();return t}function nw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function iw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;o.uniform2fv(this.addr,e),En(t,e)}}function aw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;o.uniform3fv(this.addr,e),En(t,e)}}function sw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;o.uniform4fv(this.addr,e),En(t,e)}}function rw(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(bn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(bn(t,a))return;fx.set(a),o.uniformMatrix2fv(this.addr,!1,fx),En(t,a)}}function ow(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(bn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(bn(t,a))return;hx.set(a),o.uniformMatrix3fv(this.addr,!1,hx),En(t,a)}}function lw(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(bn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(bn(t,a))return;ux.set(a),o.uniformMatrix4fv(this.addr,!1,ux),En(t,a)}}function cw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function uw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;o.uniform2iv(this.addr,e),En(t,e)}}function hw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;o.uniform3iv(this.addr,e),En(t,e)}}function fw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;o.uniform4iv(this.addr,e),En(t,e)}}function dw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function pw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;o.uniform2uiv(this.addr,e),En(t,e)}}function mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;o.uniform3uiv(this.addr,e),En(t,e)}}function gw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;o.uniform4uiv(this.addr,e),En(t,e)}}function _w(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Gp.compareFunction=t.isReversedDepthBuffer()?sm:am,l=Gp):l=my,t.setTexture2D(e||l,r)}function vw(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),t.setTexture3D(e||_y,r)}function xw(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),t.setTextureCube(e||vy,r)}function yw(o,e,t){const a=this.cache,r=t.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),t.setTexture2DArray(e||gy,r)}function Sw(o){switch(o){case 5126:return nw;case 35664:return iw;case 35665:return aw;case 35666:return sw;case 35674:return rw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return cw;case 35667:case 35671:return uw;case 35668:case 35672:return hw;case 35669:case 35673:return fw;case 5125:return dw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return yw}}function Mw(o,e){o.uniform1fv(this.addr,e)}function bw(o,e){const t=Mo(e,this.size,2);o.uniform2fv(this.addr,t)}function Ew(o,e){const t=Mo(e,this.size,3);o.uniform3fv(this.addr,t)}function Tw(o,e){const t=Mo(e,this.size,4);o.uniform4fv(this.addr,t)}function Aw(o,e){const t=Mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ww(o,e){const t=Mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Rw(o,e){const t=Mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Cw(o,e){o.uniform1iv(this.addr,e)}function Dw(o,e){o.uniform2iv(this.addr,e)}function Lw(o,e){o.uniform3iv(this.addr,e)}function Nw(o,e){o.uniform4iv(this.addr,e)}function Uw(o,e){o.uniform1uiv(this.addr,e)}function Ow(o,e){o.uniform2uiv(this.addr,e)}function Pw(o,e){o.uniform3uiv(this.addr,e)}function Iw(o,e){o.uniform4uiv(this.addr,e)}function Bw(o,e,t){const a=this.cache,r=e.length,l=Qu(t,r);bn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Gp:u=my;for(let h=0;h!==r;++h)t.setTexture2D(e[h]||u,l[h])}function zw(o,e,t){const a=this.cache,r=e.length,l=Qu(t,r);bn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||_y,l[u])}function Fw(o,e,t){const a=this.cache,r=e.length,l=Qu(t,r);bn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||vy,l[u])}function Hw(o,e,t){const a=this.cache,r=e.length,l=Qu(t,r);bn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||gy,l[u])}function Vw(o){switch(o){case 5126:return Mw;case 35664:return bw;case 35665:return Ew;case 35666:return Tw;case 35674:return Aw;case 35675:return ww;case 35676:return Rw;case 5124:case 35670:return Cw;case 35667:case 35671:return Dw;case 35668:case 35672:return Lw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Ow;case 36295:return Pw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Gw{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Sw(t.type)}}class kw{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vw(t.type)}}class Xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const h=r[l];h.setValue(e,t[h.id],a)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function dx(o,e){o.seq.push(e),o.map[e.id]=e}function Ww(o,e,t){const a=o.name,r=a.length;for(Hd.lastIndex=0;;){const l=Hd.exec(a),u=Hd.lastIndex;let h=l[1];const p=l[2]==="]",d=l[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===r){dx(t,d===void 0?new Gw(h,o,e):new kw(h,o,e));break}else{let _=t.map[h];_===void 0&&(_=new Xw(h),dx(t,_)),t=_}}}class Fu{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(t,u),p=e.getUniformLocation(t,h.name);Ww(h,p,this)}const r=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):l.push(u);r.length>0&&(this.seq=r.concat(l))}setValue(e,t,a,r){const l=this.map[t];l!==void 0&&l.setValue(e,a,r)}setOptional(e,t,a){const r=t[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,t,a,r){for(let l=0,u=t.length;l!==u;++l){const h=t[l],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,r)}}static seqWithValue(e,t){const a=[];for(let r=0,l=e.length;r!==l;++r){const u=e[r];u.id in t&&a.push(u)}return a}}function px(o,e,t){const a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),a}const qw=37297;let Yw=0;function jw(o,e){const t=o.split(`
`),a=[],r=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=r;u<l;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return a.join(`
`)}const mx=new dt;function Kw(o){wt._getMatrix(mx,wt.workingColorSpace,o);const e=`mat3( ${mx.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(o)){case Gu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function gx(o,e,t){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+jw(o.getShaderSource(e),h)}else return l}function Zw(o,e){const t=Kw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Qw={[Ox]:"Linear",[Px]:"Reinhard",[Ix]:"Cineon",[Bx]:"ACESFilmic",[Fx]:"AgX",[Hx]:"Neutral",[zx]:"Custom"};function Jw(o,e){const t=Qw[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Du=new k;function $w(){wt.getLuminanceCoefficients(Du);const o=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function tR(o){const e=[];for(const t in o){const a=o[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function nR(o,e){const t={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(e,r),u=l.name;let h=1;l.type===o.FLOAT_MAT2&&(h=2),l.type===o.FLOAT_MAT3&&(h=3),l.type===o.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:h}}return t}function Dl(o){return o!==""}function _x(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iR=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(o){return o.replace(iR,sR)}const aR=new Map;function sR(o,e){let t=pt[e];if(t===void 0){const a=aR.get(e);if(a!==void 0)t=pt[a],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return kp(t)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(o){return o.replace(rR,oR)}function oR(o,e,t,a){let r="";for(let l=parseInt(e);l<parseInt(t);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function yx(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lR={[Ll]:"SHADOWMAP_TYPE_PCF",[wl]:"SHADOWMAP_TYPE_VSM"};function cR(o){return lR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uR={[nr]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[Yu]:"ENVMAP_TYPE_CUBE_UV"};function hR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const fR={[lo]:"ENVMAP_MODE_REFRACTION"};function dR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":fR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pR={[Zp]:"ENVMAP_BLENDING_MULTIPLY",[sb]:"ENVMAP_BLENDING_MIX",[rb]:"ENVMAP_BLENDING_ADD"};function mR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":pR[o.combine]||"ENVMAP_BLENDING_NONE"}function gR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function _R(o,e,t,a){const r=o.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=cR(t),d=hR(t),g=dR(t),_=mR(t),v=gR(t),x=eR(t),b=tR(l),T=r.createProgram();let M,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Dl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Dl).join(`
`),y.length>0&&(y+=`
`)):(M=[yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),y=[yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==aa?"#define TONE_MAPPING":"",t.toneMapping!==aa?pt.tonemapping_pars_fragment:"",t.toneMapping!==aa?Jw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Zw("linearToOutputTexel",t.outputColorSpace),$w(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dl).join(`
`)),u=kp(u),u=_x(u,t),u=vx(u,t),h=kp(h),h=_x(h,t),h=vx(h,t),u=xx(u),h=xx(h),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=C+M+u,L=C+y+h,O=px(r,r.VERTEX_SHADER,D),B=px(r,r.FRAGMENT_SHADER,L);r.attachShader(T,O),r.attachShader(T,B),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function P(G){if(o.debug.checkShaderErrors){const te=r.getProgramInfoLog(T)||"",se=r.getShaderInfoLog(O)||"",de=r.getShaderInfoLog(B)||"",ue=te.trim(),z=se.trim(),H=de.trim();let ae=!0,Se=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,O,B);else{const xe=gx(r,O,"vertex"),I=gx(r,B,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+xe+`
`+I)}else ue!==""?Ze("WebGLProgram: Program Info Log:",ue):(z===""||H==="")&&(Se=!1);Se&&(G.diagnostics={runnable:ae,programLog:ue,vertexShader:{log:z,prefix:M},fragmentShader:{log:H,prefix:y}})}r.deleteShader(O),r.deleteShader(B),q=new Fu(r,T),A=nR(r,T)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(T,qw)),N},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=B,this}let vR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new yR(e),t.set(e,a)),a}}class yR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(o,e,t,a,r,l,u){const h=new Qx,p=new xR,d=new Set,g=[],_=new Map,v=r.logarithmicDepthBuffer;let x=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return d.add(A),A===0?"uv":`uv${A}`}function M(A,N,G,te,se){const de=te.fog,ue=se.geometry,z=A.isMeshStandardMaterial?te.environment:null,H=(A.isMeshStandardMaterial?t:e).get(A.envMap||z),ae=H&&H.mapping===Yu?H.image.height:null,Se=b[A.type];A.precision!==null&&(x=r.getMaxPrecision(A.precision),x!==A.precision&&Ze("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,I=xe!==void 0?xe.length:0;let ie=0;ue.morphAttributes.position!==void 0&&(ie=1),ue.morphAttributes.normal!==void 0&&(ie=2),ue.morphAttributes.color!==void 0&&(ie=3);let ge,Te,ze,ne;if(Se){const Ct=ta[Se];ge=Ct.vertexShader,Te=Ct.fragmentShader}else ge=A.vertexShader,Te=A.fragmentShader,p.update(A),ze=p.getVertexShaderID(A),ne=p.getFragmentShaderID(A);const ce=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Ge=se.isInstancedMesh===!0,Fe=se.isBatchedMesh===!0,_t=!!A.map,rn=!!A.matcap,Mt=!!H,vt=!!A.aoMap,Nt=!!A.lightMap,lt=!!A.bumpMap,on=!!A.normalMap,V=!!A.displacementMap,tn=!!A.emissiveMap,Rt=!!A.metalnessMap,It=!!A.roughnessMap,qe=A.anisotropy>0,U=A.clearcoat>0,E=A.dispersion>0,Y=A.iridescence>0,fe=A.sheen>0,ve=A.transmission>0,le=qe&&!!A.anisotropyMap,je=U&&!!A.clearcoatMap,we=U&&!!A.clearcoatNormalMap,ke=U&&!!A.clearcoatRoughnessMap,it=Y&&!!A.iridescenceMap,Me=Y&&!!A.iridescenceThicknessMap,be=fe&&!!A.sheenColorMap,Ie=fe&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,Re=!!A.specularColorMap,ht=!!A.specularIntensityMap,W=ve&&!!A.transmissionMap,Le=ve&&!!A.thicknessMap,Ee=!!A.gradientMap,Pe=!!A.alphaMap,ye=A.alphaTest>0,_e=!!A.alphaHash,Ae=!!A.extensions;let st=aa;A.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(st=o.toneMapping);const zt={shaderID:Se,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:Te,defines:A.defines,customVertexShaderID:ze,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&se._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&se.instanceColor!==null,instancingMorph:Ge&&se.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Kn,alphaToCoverage:!!A.alphaToCoverage,map:_t,matcap:rn,envMap:Mt,envMapMode:Mt&&H.mapping,envMapCubeUVHeight:ae,aoMap:vt,lightMap:Nt,bumpMap:lt,normalMap:on,displacementMap:V,emissiveMap:tn,normalMapObjectSpace:on&&A.normalMapType===hb,normalMapTangentSpace:on&&A.normalMapType===kl,metalnessMap:Rt,roughnessMap:It,anisotropy:qe,anisotropyMap:le,clearcoat:U,clearcoatMap:je,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,dispersion:E,iridescence:Y,iridescenceMap:it,iridescenceThicknessMap:Me,sheen:fe,sheenColorMap:be,sheenRoughnessMap:Ie,specularMap:Oe,specularColorMap:Re,specularIntensityMap:ht,transmission:ve,transmissionMap:W,thicknessMap:Le,gradientMap:Ee,opaque:A.transparent===!1&&A.blending===ao&&A.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ye,alphaHash:_e,combine:A.combine,mapUv:_t&&T(A.map.channel),aoMapUv:vt&&T(A.aoMap.channel),lightMapUv:Nt&&T(A.lightMap.channel),bumpMapUv:lt&&T(A.bumpMap.channel),normalMapUv:on&&T(A.normalMap.channel),displacementMapUv:V&&T(A.displacementMap.channel),emissiveMapUv:tn&&T(A.emissiveMap.channel),metalnessMapUv:Rt&&T(A.metalnessMap.channel),roughnessMapUv:It&&T(A.roughnessMap.channel),anisotropyMapUv:le&&T(A.anisotropyMap.channel),clearcoatMapUv:je&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&T(A.sheenRoughnessMap.channel),specularMapUv:Oe&&T(A.specularMap.channel),specularColorMapUv:Re&&T(A.specularColorMap.channel),specularIntensityMapUv:ht&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Le&&T(A.thicknessMap.channel),alphaMapUv:Pe&&T(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(on||qe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!ue.attributes.uv&&(_t||Pe),fog:!!de,useFog:A.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ce,skinning:se.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:st,decodeVideoTexture:_t&&A.map.isVideoTexture===!0&&wt.getTransfer(A.map.colorSpace)===Gt,decodeVideoTextureEmissive:tn&&A.emissiveMap.isVideoTexture===!0&&wt.getTransfer(A.emissiveMap.colorSpace)===Gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Di,flipSided:A.side===si,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ae&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&A.extensions.multiDraw===!0||Fe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return zt.vertexUv1s=d.has(1),zt.vertexUv2s=d.has(2),zt.vertexUv3s=d.has(3),d.clear(),zt}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)N.push(G),N.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(C(N,A),D(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function C(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function D(A,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const N=b[A.type];let G;if(N){const te=ta[N];G=nE.clone(te.uniforms)}else G=A.uniforms;return G}function O(A,N){let G=_.get(N);return G!==void 0?++G.usedTimes:(G=new _R(o,N,A,l),g.push(G),_.set(N,G)),G}function B(A){if(--A.usedTimes===0){const N=g.indexOf(A);g[N]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function P(A){p.remove(A)}function q(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:L,acquireProgram:O,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:q}}function MR(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,p){o.get(u)[h]=p}function l(){o=new WeakMap}return{has:e,get:t,remove:a,update:r,dispose:l}}function bR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Sx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Mx(){const o=[];let e=0;const t=[],a=[],r=[];function l(){e=0,t.length=0,a.length=0,r.length=0}function u(_,v,x,b,T,M){let y=o[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},o[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=b,y.renderOrder=_.renderOrder,y.z=T,y.group=M),e++,y}function h(_,v,x,b,T,M){const y=u(_,v,x,b,T,M);x.transmission>0?a.push(y):x.transparent===!0?r.push(y):t.push(y)}function p(_,v,x,b,T,M){const y=u(_,v,x,b,T,M);x.transmission>0?a.unshift(y):x.transparent===!0?r.unshift(y):t.unshift(y)}function d(_,v){t.length>1&&t.sort(_||bR),a.length>1&&a.sort(v||Sx),r.length>1&&r.sort(v||Sx)}function g(){for(let _=e,v=o.length;_<v;_++){const x=o[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:r,init:l,push:h,unshift:p,finish:g,sort:d}}function ER(){let o=new WeakMap;function e(a,r){const l=o.get(a);let u;return l===void 0?(u=new Mx,o.set(a,[u])):r>=l.length?(u=new Mx,l.push(u)):u=l[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function TR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Qe};break;case"SpotLight":t={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=t,t}}}function AR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let wR=0;function RR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CR(o){const e=new TR,t=AR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new k);const r=new k,l=new ut,u=new ut;function h(d){let g=0,_=0,v=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let x=0,b=0,T=0,M=0,y=0,C=0,D=0,L=0,O=0,B=0,P=0;d.sort(RR);for(let A=0,N=d.length;A<N;A++){const G=d[A],te=G.color,se=G.intensity,de=G.distance;let ue=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===uo?ue=G.shadow.map.texture:ue=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=te.r*se,_+=te.g*se,v+=te.b*se;else if(G.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(G.sh.coefficients[z],se);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ae=t.get(G);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,a.directionalShadow[x]=ae,a.directionalShadowMap[x]=ue,a.directionalShadowMatrix[x]=G.shadow.matrix,C++}a.directional[x]=z,x++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(te).multiplyScalar(se),z.distance=de,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,a.spot[T]=z;const H=G.shadow;if(G.map&&(a.spotLightMap[O]=G.map,O++,H.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[T]=H.matrix,G.castShadow){const ae=t.get(G);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,a.spotShadow[T]=ae,a.spotShadowMap[T]=ue,L++}T++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(te).multiplyScalar(se),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=z,M++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,ae=t.get(G);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,a.pointShadow[b]=ae,a.pointShadowMap[b]=ue,a.pointShadowMatrix[b]=G.shadow.matrix,D++}a.point[b]=z,b++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(se),z.groundColor.copy(G.groundColor).multiplyScalar(se),a.hemi[y]=z,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==x||q.pointLength!==b||q.spotLength!==T||q.rectAreaLength!==M||q.hemiLength!==y||q.numDirectionalShadows!==C||q.numPointShadows!==D||q.numSpotShadows!==L||q.numSpotMaps!==O||q.numLightProbes!==P)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=L+O-B,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=P,q.directionalLength=x,q.pointLength=b,q.spotLength=T,q.rectAreaLength=M,q.hemiLength=y,q.numDirectionalShadows=C,q.numPointShadows=D,q.numSpotShadows=L,q.numSpotMaps=O,q.numLightProbes=P,a.version=wR++)}function p(d,g){let _=0,v=0,x=0,b=0,T=0;const M=g.matrixWorldInverse;for(let y=0,C=d.length;y<C;y++){const D=d[y];if(D.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(M),_++}else if(D.isSpotLight){const L=a.spot[x];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(M),x++}else if(D.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),u.identity(),l.copy(D.matrixWorld),l.premultiply(M),u.extractRotation(l),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const L=a.hemi[T];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function bx(o){const e=new CR(o),t=[],a=[];function r(g){d.camera=g,t.length=0,a.length=0}function l(g){t.push(g)}function u(g){a.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:u}}function DR(o){let e=new WeakMap;function t(r,l=0){const u=e.get(r);let h;return u===void 0?(h=new bx(o),e.set(r,[h])):l>=u.length?(h=new bx(o),u.push(h)):h=u[l],h}function a(){e=new WeakMap}return{get:t,dispose:a}}const LR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NR=`uniform sampler2D shadow_pass;
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
}`,UR=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],OR=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ex=new ut,Tl=new k,Vd=new k;function PR(o,e,t){let a=new hm;const r=new $e,l=new $e,u=new Qt,h=new ME,p=new bE,d={},g=t.maxTextureSize,_={[Fa]:si,[si]:Fa,[Di]:Di},v=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:LR,fragmentShader:NR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new Zn;b.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Mn(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let y=this.type;this.render=function(B,P,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===Kp&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Ll);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),te=o.state;te.setBlending(Ba),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const se=y!==this.type;se&&P.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ue=>ue.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ue=B.length;de<ue;de++){const z=B[de],H=z.shadow;if(H===void 0){Ze("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ae=H.getFrameExtents();if(r.multiply(ae),l.copy(H.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/ae.x),r.x=l.x*ae.x,H.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/ae.y),r.y=l.y*ae.y,H.mapSize.y=l.y)),H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===wl){if(z.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xi(r.x,r.y,{format:uo,type:Ha,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new po(r.x,r.y,Li),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Va,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else{z.isPointLight?(H.map=new ay(r.x),H.map.depthTexture=new vE(r.x,ra)):(H.map=new Xi(r.x,r.y),H.map.depthTexture=new po(r.x,r.y,ra)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Va;const xe=o.state.buffers.depth.getReversed();this.type===Ll?(H.map.depthTexture.compareFunction=xe?sm:am,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en)}H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Se;xe++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(H.map),o.clear());const I=H.getViewport(xe);u.set(l.x*I.x,l.y*I.y,l.x*I.z,l.y*I.w),te.viewport(u)}if(z.isPointLight){const I=H.camera,ie=H.matrix,ge=z.distance||I.far;ge!==I.far&&(I.far=ge,I.updateProjectionMatrix()),Tl.setFromMatrixPosition(z.matrixWorld),I.position.copy(Tl),Vd.copy(I.position),Vd.add(UR[xe]),I.up.copy(OR[xe]),I.lookAt(Vd),I.updateMatrixWorld(),ie.makeTranslation(-Tl.x,-Tl.y,-Tl.z),Ex.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ex,I.coordinateSystem,I.reversedDepth)}else H.updateMatrices(z);a=H.getFrustum(),L(P,q,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===wl&&C(H,q),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(A,N,G)};function C(B,P){const q=e.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Xi(r.x,r.y,{format:uo,type:Ha})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,q,v,T,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,q,x,T,null)}function D(B,P,q,A){let N=null;const G=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)N=G;else if(N=q.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const te=N.uuid,se=P.uuid;let de=d[te];de===void 0&&(de={},d[te]=de);let ue=de[se];ue===void 0&&(ue=N.clone(),de[se]=ue,P.addEventListener("dispose",O)),N=ue}if(N.visible=P.visible,N.wireframe=P.wireframe,A===wl?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:_[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const te=o.properties.get(N);te.light=q}return N}function L(B,P,q,A,N){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&N===wl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const se=e.update(B),de=B.material;if(Array.isArray(de)){const ue=se.groups;for(let z=0,H=ue.length;z<H;z++){const ae=ue[z],Se=de[ae.materialIndex];if(Se&&Se.visible){const xe=D(B,Se,A,N);B.onBeforeShadow(o,B,P,q,se,xe,ae),o.renderBufferDirect(q,null,se,xe,B,ae),B.onAfterShadow(o,B,P,q,se,xe,ae)}}}else if(de.visible){const ue=D(B,de,A,N);B.onBeforeShadow(o,B,P,q,se,ue,null),o.renderBufferDirect(q,null,se,ue,B,null),B.onAfterShadow(o,B,P,q,se,ue,null)}}const te=B.children;for(let se=0,de=te.length;se<de;se++)L(te[se],P,q,A,N)}function O(B){B.target.removeEventListener("dispose",O);for(const q in d){const A=d[q],N=B.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const IR={[Zd]:Qd,[Jd]:tp,[$d]:np,[oo]:ep,[Qd]:Zd,[tp]:Jd,[np]:$d,[ep]:oo};function BR(o,e){function t(){let W=!1;const Le=new Qt;let Ee=null;const Pe=new Qt(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!W&&(o.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){W=ye},setClear:function(ye,_e,Ae,st,zt){zt===!0&&(ye*=st,_e*=st,Ae*=st),Le.set(ye,_e,Ae,st),Pe.equals(Le)===!1&&(o.clearColor(ye,_e,Ae,st),Pe.copy(Le))},reset:function(){W=!1,Ee=null,Pe.set(-1,0,0,0)}}}function a(){let W=!1,Le=!1,Ee=null,Pe=null,ye=null;return{setReversed:function(_e){if(Le!==_e){const Ae=e.get("EXT_clip_control");_e?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const st=ye;ye=null,this.setClear(st)}},getReversed:function(){return Le},setTest:function(_e){_e?ce(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(_e){Ee!==_e&&!W&&(o.depthMask(_e),Ee=_e)},setFunc:function(_e){if(Le&&(_e=IR[_e]),Pe!==_e){switch(_e){case Zd:o.depthFunc(o.NEVER);break;case Qd:o.depthFunc(o.ALWAYS);break;case Jd:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case $d:o.depthFunc(o.EQUAL);break;case ep:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=_e}},setLocked:function(_e){W=_e},setClear:function(_e){ye!==_e&&(Le&&(_e=1-_e),o.clearDepth(_e),ye=_e)},reset:function(){W=!1,Ee=null,Pe=null,ye=null,Le=!1}}}function r(){let W=!1,Le=null,Ee=null,Pe=null,ye=null,_e=null,Ae=null,st=null,zt=null;return{setTest:function(Ct){W||(Ct?ce(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!W&&(o.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,Fn,Ni){(Ee!==Ct||Pe!==Fn||ye!==Ni)&&(o.stencilFunc(Ct,Fn,Ni),Ee=Ct,Pe=Fn,ye=Ni)},setOp:function(Ct,Fn,Ni){(_e!==Ct||Ae!==Fn||st!==Ni)&&(o.stencilOp(Ct,Fn,Ni),_e=Ct,Ae=Fn,st=Ni)},setLocked:function(Ct){W=Ct},setClear:function(Ct){zt!==Ct&&(o.clearStencil(Ct),zt=Ct)},reset:function(){W=!1,Le=null,Ee=null,Pe=null,ye=null,_e=null,Ae=null,st=null,zt=null}}}const l=new t,u=new a,h=new r,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,x=[],b=null,T=!1,M=null,y=null,C=null,D=null,L=null,O=null,B=null,P=new Qe(0,0,0),q=0,A=!1,N=null,G=null,te=null,se=null,de=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ae)[1]),z=H>=1):ae.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),z=H>=2);let Se=null,xe={};const I=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ge=new Qt().fromArray(I),Te=new Qt().fromArray(ie);function ze(W,Le,Ee,Pe){const ye=new Uint8Array(4),_e=o.createTexture();o.bindTexture(W,_e),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ae=0;Ae<Ee;Ae++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Le+Ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return _e}const ne={};ne[o.TEXTURE_2D]=ze(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=ze(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=ze(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=ze(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ce(o.DEPTH_TEST),u.setFunc(oo),lt(!1),on(uv),ce(o.CULL_FACE),vt(Ba);function ce(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Ce(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Ge(W,Le){return _[W]!==Le?(o.bindFramebuffer(W,Le),_[W]=Le,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Le),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Fe(W,Le){let Ee=x,Pe=!1;if(W){Ee=v.get(Le),Ee===void 0&&(Ee=[],v.set(Le,Ee));const ye=W.textures;if(Ee.length!==ye.length||Ee[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Ae=ye.length;_e<Ae;_e++)Ee[_e]=o.COLOR_ATTACHMENT0+_e;Ee.length=ye.length,Pe=!0}}else Ee[0]!==o.BACK&&(Ee[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(Ee)}function _t(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const rn={[Js]:o.FUNC_ADD,[GM]:o.FUNC_SUBTRACT,[kM]:o.FUNC_REVERSE_SUBTRACT};rn[XM]=o.MIN,rn[WM]=o.MAX;const Mt={[qM]:o.ZERO,[YM]:o.ONE,[jM]:o.SRC_COLOR,[jd]:o.SRC_ALPHA,[eb]:o.SRC_ALPHA_SATURATE,[JM]:o.DST_COLOR,[ZM]:o.DST_ALPHA,[KM]:o.ONE_MINUS_SRC_COLOR,[Kd]:o.ONE_MINUS_SRC_ALPHA,[$M]:o.ONE_MINUS_DST_COLOR,[QM]:o.ONE_MINUS_DST_ALPHA,[tb]:o.CONSTANT_COLOR,[nb]:o.ONE_MINUS_CONSTANT_COLOR,[ib]:o.CONSTANT_ALPHA,[ab]:o.ONE_MINUS_CONSTANT_ALPHA};function vt(W,Le,Ee,Pe,ye,_e,Ae,st,zt,Ct){if(W===Ba){T===!0&&(Ce(o.BLEND),T=!1);return}if(T===!1&&(ce(o.BLEND),T=!0),W!==VM){if(W!==M||Ct!==A){if((y!==Js||L!==Js)&&(o.blendEquation(o.FUNC_ADD),y=Js,L=Js),Ct)switch(W){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yd:o.blendFunc(o.ONE,o.ONE);break;case hv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case fv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:at("WebGLState: Invalid blending: ",W);break}else switch(W){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case hv:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fv:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",W);break}C=null,D=null,O=null,B=null,P.set(0,0,0),q=0,M=W,A=Ct}return}ye=ye||Le,_e=_e||Ee,Ae=Ae||Pe,(Le!==y||ye!==L)&&(o.blendEquationSeparate(rn[Le],rn[ye]),y=Le,L=ye),(Ee!==C||Pe!==D||_e!==O||Ae!==B)&&(o.blendFuncSeparate(Mt[Ee],Mt[Pe],Mt[_e],Mt[Ae]),C=Ee,D=Pe,O=_e,B=Ae),(st.equals(P)===!1||zt!==q)&&(o.blendColor(st.r,st.g,st.b,zt),P.copy(st),q=zt),M=W,A=!1}function Nt(W,Le){W.side===Di?Ce(o.CULL_FACE):ce(o.CULL_FACE);let Ee=W.side===si;Le&&(Ee=!Ee),lt(Ee),W.blending===ao&&W.transparent===!1?vt(Ba):vt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Pe=W.stencilWrite;h.setTest(Pe),Pe&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),tn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){N!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),N=W)}function on(W){W!==zM?(ce(o.CULL_FACE),W!==G&&(W===uv?o.cullFace(o.BACK):W===FM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),G=W}function V(W){W!==te&&(z&&o.lineWidth(W),te=W)}function tn(W,Le,Ee){W?(ce(o.POLYGON_OFFSET_FILL),(se!==Le||de!==Ee)&&(o.polygonOffset(Le,Ee),se=Le,de=Ee)):Ce(o.POLYGON_OFFSET_FILL)}function Rt(W){W?ce(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function It(W){W===void 0&&(W=o.TEXTURE0+ue-1),Se!==W&&(o.activeTexture(W),Se=W)}function qe(W,Le,Ee){Ee===void 0&&(Se===null?Ee=o.TEXTURE0+ue-1:Ee=Se);let Pe=xe[Ee];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[Ee]=Pe),(Pe.type!==W||Pe.texture!==Le)&&(Se!==Ee&&(o.activeTexture(Ee),Se=Ee),o.bindTexture(W,Le||ne[W]),Pe.type=W,Pe.texture=Le)}function U(){const W=xe[Se];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function fe(){try{o.texSubImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function ve(){try{o.texSubImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function je(){try{o.compressedTexSubImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function we(){try{o.texStorage2D(...arguments)}catch(W){at("WebGLState:",W)}}function ke(){try{o.texStorage3D(...arguments)}catch(W){at("WebGLState:",W)}}function it(){try{o.texImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function Me(){try{o.texImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function be(W){ge.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Ie(W){Te.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Te.copy(W))}function Oe(W,Le){let Ee=d.get(Le);Ee===void 0&&(Ee=new WeakMap,d.set(Le,Ee));let Pe=Ee.get(W);Pe===void 0&&(Pe=o.getUniformBlockIndex(Le,W.name),Ee.set(W,Pe))}function Re(W,Le){const Pe=d.get(Le).get(W);p.get(Le)!==Pe&&(o.uniformBlockBinding(Le,Pe,W.__bindingPointIndex),p.set(Le,Pe))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Se=null,xe={},_={},v=new WeakMap,x=[],b=null,T=!1,M=null,y=null,C=null,D=null,L=null,O=null,B=null,P=new Qe(0,0,0),q=0,A=!1,N=null,G=null,te=null,se=null,de=null,ge.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:ce,disable:Ce,bindFramebuffer:Ge,drawBuffers:Fe,useProgram:_t,setBlending:vt,setMaterial:Nt,setFlipSided:lt,setCullFace:on,setLineWidth:V,setPolygonOffset:tn,setScissorTest:Rt,activeTexture:It,bindTexture:qe,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:it,texImage3D:Me,updateUBOMapping:Oe,uniformBlockBinding:Re,texStorage2D:we,texStorage3D:ke,texSubImage2D:fe,texSubImage3D:ve,compressedTexSubImage2D:le,compressedTexSubImage3D:je,scissor:be,viewport:Ie,reset:ht}}function zR(o,e,t,a,r,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $e,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return x?new OffscreenCanvas(U,E):Fl("canvas")}function T(U,E,Y){let fe=1;const ve=qe(U);if((ve.width>Y||ve.height>Y)&&(fe=Y/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(fe*ve.width),je=Math.floor(fe*ve.height);_===void 0&&(_=b(le,je));const we=E?b(le,je):_;return we.width=le,we.height=je,we.getContext("2d").drawImage(U,0,0,le,je),Ze("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+le+"x"+je+")."),we}else return"data"in U&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){o.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(U,E,Y,fe,ve=!1){if(U!==null){if(o[U]!==void 0)return o[U];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=E;if(E===o.RED&&(Y===o.FLOAT&&(le=o.R32F),Y===o.HALF_FLOAT&&(le=o.R16F),Y===o.UNSIGNED_BYTE&&(le=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(le=o.R8UI),Y===o.UNSIGNED_SHORT&&(le=o.R16UI),Y===o.UNSIGNED_INT&&(le=o.R32UI),Y===o.BYTE&&(le=o.R8I),Y===o.SHORT&&(le=o.R16I),Y===o.INT&&(le=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(le=o.RG32F),Y===o.HALF_FLOAT&&(le=o.RG16F),Y===o.UNSIGNED_BYTE&&(le=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(le=o.RG8UI),Y===o.UNSIGNED_SHORT&&(le=o.RG16UI),Y===o.UNSIGNED_INT&&(le=o.RG32UI),Y===o.BYTE&&(le=o.RG8I),Y===o.SHORT&&(le=o.RG16I),Y===o.INT&&(le=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(le=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(le=o.RGB16UI),Y===o.UNSIGNED_INT&&(le=o.RGB32UI),Y===o.BYTE&&(le=o.RGB8I),Y===o.SHORT&&(le=o.RGB16I),Y===o.INT&&(le=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),Y===o.UNSIGNED_INT&&(le=o.RGBA32UI),Y===o.BYTE&&(le=o.RGBA8I),Y===o.SHORT&&(le=o.RGBA16I),Y===o.INT&&(le=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(le=o.R11F_G11F_B10F)),E===o.RGBA){const je=ve?Gu:wt.getTransfer(fe);Y===o.FLOAT&&(le=o.RGBA32F),Y===o.HALF_FLOAT&&(le=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(le=je===Gt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(U,E){let Y;return U?E===null||E===ra||E===Il?Y=o.DEPTH24_STENCIL8:E===Li?Y=o.DEPTH32F_STENCIL8:E===Pl&&(Y=o.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ra||E===Il?Y=o.DEPTH_COMPONENT24:E===Li?Y=o.DEPTH_COMPONENT32F:E===Pl&&(Y=o.DEPTH_COMPONENT16),Y}function O(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==en&&U.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),q(E),E.isVideoTexture&&g.delete(E)}function P(U){const E=U.target;E.removeEventListener("dispose",P),N(E)}function q(U){const E=a.get(U);if(E.__webglInit===void 0)return;const Y=U.source,fe=v.get(Y);if(fe){const ve=fe[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&A(U),Object.keys(fe).length===0&&v.delete(Y)}a.remove(U)}function A(U){const E=a.get(U);o.deleteTexture(E.__webglTexture);const Y=U.source,fe=v.get(Y);delete fe[E.__cacheKey],u.memory.textures--}function N(U){const E=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let ve=0;ve<E.__webglFramebuffer[fe].length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[fe][ve]);else o.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)o.deleteFramebuffer(E.__webglFramebuffer[fe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=U.textures;for(let fe=0,ve=Y.length;fe<ve;fe++){const le=a.get(Y[fe]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),u.memory.textures--),a.remove(Y[fe])}a.remove(U)}let G=0;function te(){G=0}function se(){const U=G;return U>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),G+=1,U}function de(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ue(U,E){const Y=a.get(U);if(U.isVideoTexture&&Rt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const fe=U.image;if(fe===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,U,E);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function z(U,E){const Y=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){ne(Y,U,E);return}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function H(U,E){const Y=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){ne(Y,U,E);return}t.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function ae(U,E){const Y=a.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Y.__version!==U.version){ce(Y,U,E);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const Se={[co]:o.REPEAT,[na]:o.CLAMP_TO_EDGE,[Hu]:o.MIRRORED_REPEAT},xe={[en]:o.NEAREST,[Gx]:o.NEAREST_MIPMAP_NEAREST,[Rl]:o.NEAREST_MIPMAP_LINEAR,[Sn]:o.LINEAR,[Ou]:o.LINEAR_MIPMAP_NEAREST,[Oa]:o.LINEAR_MIPMAP_LINEAR},I={[fb]:o.NEVER,[_b]:o.ALWAYS,[db]:o.LESS,[am]:o.LEQUAL,[pb]:o.EQUAL,[sm]:o.GEQUAL,[mb]:o.GREATER,[gb]:o.NOTEQUAL};function ie(U,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===Ou||E.magFilter===Rl||E.magFilter===Oa||E.minFilter===Sn||E.minFilter===Ou||E.minFilter===Rl||E.minFilter===Oa)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Se[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Se[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Se[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xe[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==Rl&&E.minFilter!==Oa||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function ge(U,E){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const fe=E.source;let ve=v.get(fe);ve===void 0&&(ve={},v.set(fe,ve));const le=de(E);if(le!==U.__cacheKey){ve[le]===void 0&&(ve[le]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),ve[le].usedTimes++;const je=ve[U.__cacheKey];je!==void 0&&(ve[U.__cacheKey].usedTimes--,je.usedTimes===0&&A(E)),U.__cacheKey=le,U.__webglTexture=ve[le].texture}return Y}function Te(U,E,Y){return Math.floor(Math.floor(U/Y)/E)}function ze(U,E,Y,fe){const le=U.updateRanges;if(le.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,fe,E.data);else{le.sort((Me,be)=>Me.start-be.start);let je=0;for(let Me=1;Me<le.length;Me++){const be=le[je],Ie=le[Me],Oe=be.start+be.count,Re=Te(Ie.start,E.width,4),ht=Te(be.start,E.width,4);Ie.start<=Oe+1&&Re===ht&&Te(Ie.start+Ie.count-1,E.width,4)===Re?be.count=Math.max(be.count,Ie.start+Ie.count-be.start):(++je,le[je]=Ie)}le.length=je+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),ke=o.getParameter(o.UNPACK_SKIP_PIXELS),it=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Me=0,be=le.length;Me<be;Me++){const Ie=le[Me],Oe=Math.floor(Ie.start/4),Re=Math.ceil(Ie.count/4),ht=Oe%E.width,W=Math.floor(Oe/E.width),Le=Re,Ee=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),t.texSubImage2D(o.TEXTURE_2D,0,ht,W,Le,Ee,Y,fe,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,it)}}function ne(U,E,Y){let fe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=o.TEXTURE_3D);const ve=ge(U,E),le=E.source;t.bindTexture(fe,U.__webglTexture,o.TEXTURE0+Y);const je=a.get(le);if(le.version!==je.__version||ve===!0){t.activeTexture(o.TEXTURE0+Y);const we=wt.getPrimaries(wt.workingColorSpace),ke=E.colorSpace===Ts?null:wt.getPrimaries(E.colorSpace),it=E.colorSpace===Ts||we===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Me=T(E.image,!1,r.maxTextureSize);Me=It(E,Me);const be=l.convert(E.format,E.colorSpace),Ie=l.convert(E.type);let Oe=D(E.internalFormat,be,Ie,E.colorSpace,E.isVideoTexture);ie(fe,E);let Re;const ht=E.mipmaps,W=E.isVideoTexture!==!0,Le=je.__version===void 0||ve===!0,Ee=le.dataReady,Pe=O(E,Me);if(E.isDepthTexture)Oe=L(E.format===er,E.type),Le&&(W?t.texStorage2D(o.TEXTURE_2D,1,Oe,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,Oe,Me.width,Me.height,0,be,Ie,null));else if(E.isDataTexture)if(ht.length>0){W&&Le&&t.texStorage2D(o.TEXTURE_2D,Pe,Oe,ht[0].width,ht[0].height);for(let ye=0,_e=ht.length;ye<_e;ye++)Re=ht[ye],W?Ee&&t.texSubImage2D(o.TEXTURE_2D,ye,0,0,Re.width,Re.height,be,Ie,Re.data):t.texImage2D(o.TEXTURE_2D,ye,Oe,Re.width,Re.height,0,be,Ie,Re.data);E.generateMipmaps=!1}else W?(Le&&t.texStorage2D(o.TEXTURE_2D,Pe,Oe,Me.width,Me.height),Ee&&ze(E,Me,be,Ie)):t.texImage2D(o.TEXTURE_2D,0,Oe,Me.width,Me.height,0,be,Ie,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Le&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Oe,ht[0].width,ht[0].height,Me.depth);for(let ye=0,_e=ht.length;ye<_e;ye++)if(Re=ht[ye],E.format!==ai)if(be!==null)if(W){if(Ee)if(E.layerUpdates.size>0){const Ae=tx(Re.width,Re.height,E.format,E.type);for(const st of E.layerUpdates){const zt=Re.data.subarray(st*Ae/Re.data.BYTES_PER_ELEMENT,(st+1)*Ae/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,st,Re.width,Re.height,1,be,zt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,Me.depth,be,Re.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Oe,Re.width,Re.height,Me.depth,0,Re.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,Me.depth,be,Ie,Re.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ye,Oe,Re.width,Re.height,Me.depth,0,be,Ie,Re.data)}else{W&&Le&&t.texStorage2D(o.TEXTURE_2D,Pe,Oe,ht[0].width,ht[0].height);for(let ye=0,_e=ht.length;ye<_e;ye++)Re=ht[ye],E.format!==ai?be!==null?W?Ee&&t.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Re.width,Re.height,be,Re.data):t.compressedTexImage2D(o.TEXTURE_2D,ye,Oe,Re.width,Re.height,0,Re.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&t.texSubImage2D(o.TEXTURE_2D,ye,0,0,Re.width,Re.height,be,Ie,Re.data):t.texImage2D(o.TEXTURE_2D,ye,Oe,Re.width,Re.height,0,be,Ie,Re.data)}else if(E.isDataArrayTexture)if(W){if(Le&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Oe,Me.width,Me.height,Me.depth),Ee)if(E.layerUpdates.size>0){const ye=tx(Me.width,Me.height,E.format,E.type);for(const _e of E.layerUpdates){const Ae=Me.data.subarray(_e*ye/Me.data.BYTES_PER_ELEMENT,(_e+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,be,Ie,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,be,Ie,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,Me.width,Me.height,Me.depth,0,be,Ie,Me.data);else if(E.isData3DTexture)W?(Le&&t.texStorage3D(o.TEXTURE_3D,Pe,Oe,Me.width,Me.height,Me.depth),Ee&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,be,Ie,Me.data)):t.texImage3D(o.TEXTURE_3D,0,Oe,Me.width,Me.height,Me.depth,0,be,Ie,Me.data);else if(E.isFramebufferTexture){if(Le)if(W)t.texStorage2D(o.TEXTURE_2D,Pe,Oe,Me.width,Me.height);else{let ye=Me.width,_e=Me.height;for(let Ae=0;Ae<Pe;Ae++)t.texImage2D(o.TEXTURE_2D,Ae,Oe,ye,_e,0,be,Ie,null),ye>>=1,_e>>=1}}else if(ht.length>0){if(W&&Le){const ye=qe(ht[0]);t.texStorage2D(o.TEXTURE_2D,Pe,Oe,ye.width,ye.height)}for(let ye=0,_e=ht.length;ye<_e;ye++)Re=ht[ye],W?Ee&&t.texSubImage2D(o.TEXTURE_2D,ye,0,0,be,Ie,Re):t.texImage2D(o.TEXTURE_2D,ye,Oe,be,Ie,Re);E.generateMipmaps=!1}else if(W){if(Le){const ye=qe(Me);t.texStorage2D(o.TEXTURE_2D,Pe,Oe,ye.width,ye.height)}Ee&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,be,Ie,Me)}else t.texImage2D(o.TEXTURE_2D,0,Oe,be,Ie,Me);M(E)&&y(fe),je.__version=le.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ce(U,E,Y){if(E.image.length!==6)return;const fe=ge(U,E),ve=E.source;t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Y);const le=a.get(ve);if(ve.version!==le.__version||fe===!0){t.activeTexture(o.TEXTURE0+Y);const je=wt.getPrimaries(wt.workingColorSpace),we=E.colorSpace===Ts?null:wt.getPrimaries(E.colorSpace),ke=E.colorSpace===Ts||je===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const it=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,be=[];for(let _e=0;_e<6;_e++)!it&&!Me?be[_e]=T(E.image[_e],!0,r.maxCubemapSize):be[_e]=Me?E.image[_e].image:E.image[_e],be[_e]=It(E,be[_e]);const Ie=be[0],Oe=l.convert(E.format,E.colorSpace),Re=l.convert(E.type),ht=D(E.internalFormat,Oe,Re,E.colorSpace),W=E.isVideoTexture!==!0,Le=le.__version===void 0||fe===!0,Ee=ve.dataReady;let Pe=O(E,Ie);ie(o.TEXTURE_CUBE_MAP,E);let ye;if(it){W&&Le&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,ht,Ie.width,Ie.height);for(let _e=0;_e<6;_e++){ye=be[_e].mipmaps;for(let Ae=0;Ae<ye.length;Ae++){const st=ye[Ae];E.format!==ai?Oe!==null?W?Ee&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,0,0,st.width,st.height,Oe,st.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,ht,st.width,st.height,0,st.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,0,0,st.width,st.height,Oe,Re,st.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,ht,st.width,st.height,0,Oe,Re,st.data)}}}else{if(ye=E.mipmaps,W&&Le){ye.length>0&&Pe++;const _e=qe(be[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,ht,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){W?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be[_e].width,be[_e].height,Oe,Re,be[_e].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,be[_e].width,be[_e].height,0,Oe,Re,be[_e].data);for(let Ae=0;Ae<ye.length;Ae++){const zt=ye[Ae].image[_e].image;W?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,0,0,zt.width,zt.height,Oe,Re,zt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,ht,zt.width,zt.height,0,Oe,Re,zt.data)}}else{W?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Oe,Re,be[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,Oe,Re,be[_e]);for(let Ae=0;Ae<ye.length;Ae++){const st=ye[Ae];W?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,0,0,Oe,Re,st.image[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,ht,Oe,Re,st.image[_e])}}}M(E)&&y(o.TEXTURE_CUBE_MAP),le.__version=ve.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ce(U,E,Y,fe,ve,le){const je=l.convert(Y.format,Y.colorSpace),we=l.convert(Y.type),ke=D(Y.internalFormat,je,we,Y.colorSpace),it=a.get(E),Me=a.get(Y);if(Me.__renderTarget=E,!it.__hasExternalTextures){const be=Math.max(1,E.width>>le),Ie=Math.max(1,E.height>>le);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?t.texImage3D(ve,le,ke,be,Ie,E.depth,0,je,we,null):t.texImage2D(ve,le,ke,be,Ie,0,je,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,U),tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ve,Me.__webglTexture,0,V(E)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,ve,Me.__webglTexture,le),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(U,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const fe=E.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,le=L(E.stencilBuffer,ve),je=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),le,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),le,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,le,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,U)}else{const fe=E.textures;for(let ve=0;ve<fe.length;ve++){const le=fe[ve],je=l.convert(le.format,le.colorSpace),we=l.convert(le.type),ke=D(le.internalFormat,je,we,le.colorSpace);tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ke,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ke,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ke,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Fe(U,E,Y){const fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ve.__webglTexture===void 0){ve.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(o.TEXTURE_CUBE_MAP,E.depthTexture);const it=l.convert(E.depthTexture.format),Me=l.convert(E.depthTexture.type);let be;E.depthTexture.format===Va?be=o.DEPTH_COMPONENT24:E.depthTexture.format===er&&(be=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,be,E.width,E.height,0,it,Me,null)}}else ue(E.depthTexture,0);const le=ve.__webglTexture,je=V(E),we=fe?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,ke=E.depthTexture.format===er?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ke,we,le,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,ke,we,le,0);else if(E.depthTexture.format===er)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ke,we,le,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,ke,we,le,0);else throw new Error("Unknown depthTexture format")}function _t(U){const E=a.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const fe=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=fe}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let fe=0;fe<6;fe++)Fe(E.__webglFramebuffer[fe],U,fe);else{const fe=U.texture.mipmaps;fe&&fe.length>0?Fe(E.__webglFramebuffer[0],U,0):Fe(E.__webglFramebuffer,U,0)}else if(Y){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=o.createRenderbuffer(),Ge(E.__webglDepthbuffer[fe],U,!1);else{const ve=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,le)}}else{const fe=U.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ge(E.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,le)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(U,E,Y){const fe=a.get(U);E!==void 0&&Ce(fe.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&_t(U)}function Mt(U){const E=U.texture,Y=a.get(U),fe=a.get(E);U.addEventListener("dispose",P);const ve=U.textures,le=U.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=E.version,u.memory.textures++),le){Y.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[we]=[];for(let ke=0;ke<E.mipmaps.length;ke++)Y.__webglFramebuffer[we][ke]=o.createFramebuffer()}else Y.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)Y.__webglFramebuffer[we]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(je)for(let we=0,ke=ve.length;we<ke;we++){const it=a.get(ve[we]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),u.memory.textures++)}if(U.samples>0&&tn(U)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const ke=ve[we];Y.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);const it=l.convert(ke.format,ke.colorSpace),Me=l.convert(ke.type),be=D(ke.internalFormat,it,Me,ke.colorSpace,U.isXRRenderTarget===!0),Ie=V(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,be,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){t.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)Ce(Y.__webglFramebuffer[we][ke],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,ke);else Ce(Y.__webglFramebuffer[we],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(E)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let we=0,ke=ve.length;we<ke;we++){const it=ve[we],Me=a.get(it);let be=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(be,Me.__webglTexture),ie(be,it),Ce(Y.__webglFramebuffer,U,it,o.COLOR_ATTACHMENT0+we,be,0),M(it)&&y(be)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,fe.__webglTexture),ie(we,E),E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)Ce(Y.__webglFramebuffer[ke],U,E,o.COLOR_ATTACHMENT0,we,ke);else Ce(Y.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,we,0);M(E)&&y(we),t.unbindTexture()}U.depthBuffer&&_t(U)}function vt(U){const E=U.textures;for(let Y=0,fe=E.length;Y<fe;Y++){const ve=E[Y];if(M(ve)){const le=C(U),je=a.get(ve).__webglTexture;t.bindTexture(le,je),y(le),t.unbindTexture()}}}const Nt=[],lt=[];function on(U){if(U.samples>0){if(tn(U)===!1){const E=U.textures,Y=U.width,fe=U.height;let ve=o.COLOR_BUFFER_BIT;const le=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=a.get(U),we=E.length>1;if(we)for(let it=0;it<E.length;it++)t.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const ke=U.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let it=0;it<E.length;it++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[it]);const Me=a.get(E[it]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,ve,o.NEAREST),p===!0&&(Nt.length=0,lt.length=0,Nt.push(o.COLOR_ATTACHMENT0+it),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Nt.push(le),lt.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let it=0;it<E.length;it++){t.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,je.__webglColorRenderbuffer[it]);const Me=a.get(E[it]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,Me,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(r.maxSamples,U.samples)}function tn(U){const E=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(U){const E=u.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function It(U,E){const Y=U.colorSpace,fe=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==Kn&&Y!==Ts&&(wt.getTransfer(Y)===Gt?(fe!==ai||ve!==gi)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",Y)),E}function qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=se,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=rn,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FR(o,e){function t(a,r=Ts){let l;const u=wt.getTransfer(r);if(a===gi)return o.UNSIGNED_BYTE;if(a===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===$p)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Wx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===qx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===kx)return o.BYTE;if(a===Xx)return o.SHORT;if(a===Pl)return o.UNSIGNED_SHORT;if(a===Qp)return o.INT;if(a===ra)return o.UNSIGNED_INT;if(a===Li)return o.FLOAT;if(a===Ha)return o.HALF_FLOAT;if(a===Yx)return o.ALPHA;if(a===Vu)return o.RGB;if(a===ai)return o.RGBA;if(a===Va)return o.DEPTH_COMPONENT;if(a===er)return o.DEPTH_STENCIL;if(a===em)return o.RED;if(a===tm)return o.RED_INTEGER;if(a===uo)return o.RG;if(a===nm)return o.RG_INTEGER;if(a===im)return o.RGBA_INTEGER;if(a===Pu||a===Iu||a===Bu||a===zu)if(u===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Pu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Pu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Iu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===sp||a===rp||a===op||a===lp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===sp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===rp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===op)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===lp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===cp||a===up||a===hp||a===fp||a===dp||a===pp||a===mp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===cp||a===up)return u===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===hp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===fp)return l.COMPRESSED_R11_EAC;if(a===dp)return l.COMPRESSED_SIGNED_R11_EAC;if(a===pp)return l.COMPRESSED_RG11_EAC;if(a===mp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===gp||a===_p||a===vp||a===xp||a===yp||a===Sp||a===Mp||a===bp||a===Ep||a===Tp||a===Ap||a===wp||a===Rp||a===Cp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===gp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===_p)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===vp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===xp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===yp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Sp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Mp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ep)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Tp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ap)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===wp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Rp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Cp)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Dp||a===Lp||a===Np)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Dp)return u===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Lp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Np)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Up||a===Op||a===Pp||a===Ip)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Up)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Op)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ip)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Il?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:t}}const HR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VR=`
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

}`;class GR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new ly(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new qi({vertexShader:HR,fragmentShader:VR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new vo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kR extends ir{constructor(e,t){super();const a=this;let r=null,l=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,x=null,b=null;const T=typeof XRWebGLBinding<"u",M=new GR,y={},C=t.getContextAttributes();let D=null,L=null;const O=[],B=[],P=new $e;let q=null;const A=new jn;A.viewport=new Qt;const N=new jn;N.viewport=new Qt;const G=[A,N],te=new GE;let se=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=O[ne];return ce===void 0&&(ce=new Cd,O[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=O[ne];return ce===void 0&&(ce=new Cd,O[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=O[ne];return ce===void 0&&(ce=new Cd,O[ne]=ce),ce.getHandSpace()};function ue(ne){const ce=B.indexOf(ne.inputSource);if(ce===-1)return;const Ce=O[ce];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,d||u),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let ne=0;ne<O.length;ne++){const ce=B[ne];ce!==null&&(B[ne]=null,O[ne].disconnect(ce))}se=null,de=null,M.reset();for(const ne in y)delete y[ne];e.setRenderTarget(D),x=null,v=null,_=null,r=null,L=null,ze.stop(),a.isPresenting=!1,e.setPixelRatio(q),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,a.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,a.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(r,t)),_},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ge=null,Fe=null;C.depth&&(Fe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=C.stencil?er:Va,Ge=C.stencil?Il:ra);const _t={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(_t),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Xi(v.textureWidth,v.textureHeight,{format:ai,type:gi,depthTexture:new po(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ce={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Xi(x.framebufferWidth,x.framebufferHeight,{format:ai,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(h),ze.setContext(r),ze.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ne){for(let ce=0;ce<ne.removed.length;ce++){const Ce=ne.removed[ce],Ge=B.indexOf(Ce);Ge>=0&&(B[Ge]=null,O[Ge].disconnect(Ce))}for(let ce=0;ce<ne.added.length;ce++){const Ce=ne.added[ce];let Ge=B.indexOf(Ce);if(Ge===-1){for(let _t=0;_t<O.length;_t++)if(_t>=B.length){B.push(Ce),Ge=_t;break}else if(B[_t]===null){B[_t]=Ce,Ge=_t;break}if(Ge===-1)break}const Fe=O[Ge];Fe&&Fe.connect(Ce)}}const ae=new k,Se=new k;function xe(ne,ce,Ce){ae.setFromMatrixPosition(ce.matrixWorld),Se.setFromMatrixPosition(Ce.matrixWorld);const Ge=ae.distanceTo(Se),Fe=ce.projectionMatrix.elements,_t=Ce.projectionMatrix.elements,rn=Fe[14]/(Fe[10]-1),Mt=Fe[14]/(Fe[10]+1),vt=(Fe[9]+1)/Fe[5],Nt=(Fe[9]-1)/Fe[5],lt=(Fe[8]-1)/Fe[0],on=(_t[8]+1)/_t[0],V=rn*lt,tn=rn*on,Rt=Ge/(-lt+on),It=Rt*-lt;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(It),ne.translateZ(Rt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const qe=rn+Rt,U=Mt+Rt,E=V-It,Y=tn+(Ge-It),fe=vt*Mt/U*qe,ve=Nt*Mt/U*qe;ne.projectionMatrix.makePerspective(E,Y,fe,ve,qe,U),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function I(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ce=ne.near,Ce=ne.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),te.near=N.near=A.near=ce,te.far=N.far=A.far=Ce,(se!==te.near||de!==te.far)&&(r.updateRenderState({depthNear:te.near,depthFar:te.far}),se=te.near,de=te.far),te.layers.mask=ne.layers.mask|6,A.layers.mask=te.layers.mask&3,N.layers.mask=te.layers.mask&5;const Ge=ne.parent,Fe=te.cameras;I(te,Ge);for(let _t=0;_t<Fe.length;_t++)I(Fe[_t],Ge);Fe.length===2?xe(te,A,N):te.projectionMatrix.copy(A.projectionMatrix),ie(ne,te,Ge)};function ie(ne,ce,Ce){Ce===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ho*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(ne){p=ne,v!==null&&(v.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(te)},this.getCameraTexture=function(ne){return y[ne]};let ge=null;function Te(ne,ce){if(g=ce.getViewerPose(d||u),b=ce,g!==null){const Ce=g.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Ge=!1;Ce.length!==te.cameras.length&&(te.cameras.length=0,Ge=!0);for(let Mt=0;Mt<Ce.length;Mt++){const vt=Ce[Mt];let Nt=null;if(x!==null)Nt=x.getViewport(vt);else{const on=_.getViewSubImage(v,vt);Nt=on.viewport,Mt===0&&(e.setRenderTargetTextures(L,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(L))}let lt=G[Mt];lt===void 0&&(lt=new jn,lt.layers.enable(Mt),lt.viewport=new Qt,G[Mt]=lt),lt.matrix.fromArray(vt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(vt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Mt===0&&(te.matrix.copy(lt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Ge===!0&&te.cameras.push(lt)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const Mt=_.getDepthInformation(Ce[0]);Mt&&Mt.isValid&&Mt.texture&&M.init(Mt,r.renderState)}if(Fe&&Fe.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let Mt=0;Mt<Ce.length;Mt++){const vt=Ce[Mt].camera;if(vt){let Nt=y[vt];Nt||(Nt=new ly,y[vt]=Nt);const lt=_.getCameraImage(vt);Nt.sourceTexture=lt}}}}for(let Ce=0;Ce<O.length;Ce++){const Ge=B[Ce],Fe=O[Ce];Ge!==null&&Fe!==void 0&&Fe.update(Ge,ce,d||u)}ge&&ge(ne,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),b=null}const ze=new py;ze.setAnimationLoop(Te),this.setAnimationLoop=function(ne){ge=ne},this.dispose=function(){}}}const Zs=new Wi,XR=new ut;function WR(o,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,ty(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function r(M,y,C,D,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(M,y):y.isMeshToonMaterial?(l(M,y),_(M,y)):y.isMeshPhongMaterial?(l(M,y),g(M,y)):y.isMeshStandardMaterial?(l(M,y),v(M,y),y.isMeshPhysicalMaterial&&x(M,y,L)):y.isMeshMatcapMaterial?(l(M,y),b(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),T(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,C,D):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===si&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===si&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const C=e.get(y),D=C.envMap,L=C.envMapRotation;D&&(M.envMap.value=D,Zs.copy(L),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),M.envMapRotation.value.setFromMatrix4(XR.makeRotationFromEuler(Zs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,C,D){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*C,M.scale.value=D*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,C){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const C=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function qR(o,e,t,a){let r={},l={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const L=D.program;a.uniformBlockBinding(C,L)}function d(C,D){let L=r[C.id];L===void 0&&(b(C),L=g(C),r[C.id]=L,C.addEventListener("dispose",M));const O=D.program;a.updateUBOMapping(C,O);const B=e.render.frame;l[C.id]!==B&&(v(C),l[C.id]=B)}function g(C){const D=_();C.__bindingPointIndex=D;const L=o.createBuffer(),O=C.__size,B=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,O,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,L),L}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const D=r[C.id],L=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let B=0,P=L.length;B<P;B++){const q=Array.isArray(L[B])?L[B]:[L[B]];for(let A=0,N=q.length;A<N;A++){const G=q[A];if(x(G,B,A,O)===!0){const te=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let de=0;for(let ue=0;ue<se.length;ue++){const z=se[ue],H=T(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,te+de,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,de),de+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,te,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(C,D,L,O){const B=C.value,P=D+"_"+L;if(O[P]===void 0)return typeof B=="number"||typeof B=="boolean"?O[P]=B:O[P]=B.clone(),!0;{const q=O[P];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return O[P]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(C){const D=C.uniforms;let L=0;const O=16;for(let P=0,q=D.length;P<q;P++){const A=Array.isArray(D[P])?D[P]:[D[P]];for(let N=0,G=A.length;N<G;N++){const te=A[N],se=Array.isArray(te.value)?te.value:[te.value];for(let de=0,ue=se.length;de<ue;de++){const z=se[de],H=T(z),ae=L%O,Se=ae%H.boundary,xe=ae+Se;L+=Se,xe!==0&&O-xe<H.storage&&(L+=O-xe),te.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=H.storage}}}const B=L%O;return B>0&&(L+=O-B),C.__size=L,C.__cache={},this}function T(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",C),D}function M(C){const D=C.target;D.removeEventListener("dispose",M);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete l[D.id]}function y(){for(const C in r)o.deleteBuffer(r[C]);u=[],r={},l={}}return{bind:p,update:d,dispose:y}}const YR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function jR(){return $i===null&&($i=new cm(YR,16,16,uo,Ha),$i.name="DFG_LUT",$i.minFilter=Sn,$i.magFilter=Sn,$i.wrapS=na,$i.wrapT=na,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class KR{constructor(e={}){const{canvas:t=yb(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=gi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const T=x,M=new Set([im,nm,tm]),y=new Set([gi,ra,Pl,Il,Jp,$p]),C=new Uint32Array(4),D=new Int32Array(4);let L=null,O=null;const B=[],P=[];let q=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=zn;let G=0,te=0,se=null,de=-1,ue=null;const z=new Qt,H=new Qt;let ae=null;const Se=new Qe(0);let xe=0,I=t.width,ie=t.height,ge=1,Te=null,ze=null;const ne=new Qt(0,0,I,ie),ce=new Qt(0,0,I,ie);let Ce=!1;const Ge=new hm;let Fe=!1,_t=!1;const rn=new ut,Mt=new k,vt=new Qt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function on(){return se===null?ge:1}let V=a;function tn(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jp}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",zt,!1),t.addEventListener("webglcontextcreationerror",Ct,!1),V===null){const j="webgl2";if(V=tn(j,R),V===null)throw tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw at("WebGLRenderer: "+R.message),R}let Rt,It,qe,U,E,Y,fe,ve,le,je,we,ke,it,Me,be,Ie,Oe,Re,ht,W,Le,Ee,Pe,ye;function _e(){Rt=new j1(V),Rt.init(),Ee=new FR(V,Rt),It=new F1(V,Rt,e,Ee),qe=new BR(V,Rt),It.reversedDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),U=new Q1(V),E=new MR,Y=new zR(V,Rt,qe,E,It,Ee,U),fe=new V1(A),ve=new Y1(A),le=new tT(V),Pe=new B1(V,le),je=new K1(V,le,U,Pe),we=new $1(V,je,le,U),ht=new J1(V,It,Y),Ie=new H1(E),ke=new SR(A,fe,ve,Rt,It,Pe,Ie),it=new WR(A,E),Me=new ER,be=new DR(Rt),Re=new I1(A,fe,ve,qe,we,b,p),Oe=new PR(A,we,It),ye=new qR(V,U,It,qe),W=new z1(V,Rt,U),Le=new Z1(V,Rt,U),U.programs=ke.programs,A.capabilities=It,A.extensions=Rt,A.properties=E,A.renderLists=Me,A.shadowMap=Oe,A.state=qe,A.info=U}_e(),T!==gi&&(q=new tw(T,t.width,t.height,r,l));const Ae=new kR(A,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(I,ie,!1))},this.getSize=function(R){return R.set(I,ie)},this.setSize=function(R,j,re=!0){if(Ae.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,ie=j,t.width=Math.floor(R*ge),t.height=Math.floor(j*ge),re===!0&&(t.style.width=R+"px",t.style.height=j+"px"),q!==null&&q.setSize(t.width,t.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(I*ge,ie*ge).floor()},this.setDrawingBufferSize=function(R,j,re){I=R,ie=j,ge=re,t.width=Math.floor(R*re),t.height=Math.floor(j*re),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(T===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,j,re,$){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,j,re,$),qe.viewport(z.copy(ne).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(ce)},this.setScissor=function(R,j,re,$){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,j,re,$),qe.scissor(H.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(R){qe.setScissorTest(Ce=R)},this.setOpaqueSort=function(R){Te=R},this.setTransparentSort=function(R){ze=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,re=!0){let $=0;if(R){let Z=!1;if(se!==null){const De=se.texture.format;Z=M.has(De)}if(Z){const De=se.texture.type,Be=y.has(De),Ne=Re.getClearColor(),He=Re.getClearAlpha(),Xe=Ne.r,et=Ne.g,We=Ne.b;Be?(C[0]=Xe,C[1]=et,C[2]=We,C[3]=He,V.clearBufferuiv(V.COLOR,0,C)):(D[0]=Xe,D[1]=et,D[2]=We,D[3]=He,V.clearBufferiv(V.COLOR,0,D))}else $|=V.COLOR_BUFFER_BIT}j&&($|=V.DEPTH_BUFFER_BIT),re&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Re.dispose(),Me.dispose(),be.dispose(),E.dispose(),fe.dispose(),ve.dispose(),we.dispose(),Pe.dispose(),ye.dispose(),ke.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",sr),Ae.removeEventListener("sessionend",To),ji.stop()};function st(R){R.preventDefault(),Xu("WebGLRenderer: Context Lost."),N=!0}function zt(){Xu("WebGLRenderer: Context Restored."),N=!1;const R=U.autoReset,j=Oe.enabled,re=Oe.autoUpdate,$=Oe.needsUpdate,Z=Oe.type;_e(),U.autoReset=R,Oe.enabled=j,Oe.autoUpdate=re,Oe.needsUpdate=$,Oe.type=Z}function Ct(R){at("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fn(R){const j=R.target;j.removeEventListener("dispose",Fn),Ni(j)}function Ni(R){jl(R),E.remove(R)}function jl(R){const j=E.get(R).programs;j!==void 0&&(j.forEach(function(re){ke.releaseProgram(re)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,re,$,Z,De){j===null&&(j=Nt);const Be=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=ws(R,j,re,$,Z);qe.setMaterial($,Be);let He=re.index,Xe=1;if($.wireframe===!0){if(He=je.getWireframeAttribute(re),He===void 0)return;Xe=2}const et=re.drawRange,We=re.attributes.position;let tt=et.start*Xe,Ut=(et.start+et.count)*Xe;De!==null&&(tt=Math.max(tt,De.start*Xe),Ut=Math.min(Ut,(De.start+De.count)*Xe)),He!==null?(tt=Math.max(tt,0),Ut=Math.min(Ut,He.count)):We!=null&&(tt=Math.max(tt,0),Ut=Math.min(Ut,We.count));const nn=Ut-tt;if(nn<0||nn===1/0)return;Pe.setup(Z,$,Ne,re,He);let Zt,Bt=W;if(He!==null&&(Zt=le.get(He),Bt=Le,Bt.setIndex(Zt)),Z.isMesh)$.wireframe===!0?(qe.setLineWidth($.wireframeLinewidth*on()),Bt.setMode(V.LINES)):Bt.setMode(V.TRIANGLES);else if(Z.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),qe.setLineWidth(Ke*on()),Z.isLineSegments?Bt.setMode(V.LINES):Z.isLineLoop?Bt.setMode(V.LINE_LOOP):Bt.setMode(V.LINE_STRIP)}else Z.isPoints?Bt.setMode(V.POINTS):Z.isSprite&&Bt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,Ot=Z._multiDrawCounts,rt=Z._multiDrawCount,Cn=He?le.get(He).bytesPerElement:1,ua=E.get($).currentProgram.getUniforms();for(let Dn=0;Dn<rt;Dn++)ua.setValue(V,"_gl_DrawID",Dn),Bt.render(Ke[Dn]/Cn,Ot[Dn])}else if(Z.isInstancedMesh)Bt.renderInstances(tt,nn,Z.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ot=Math.min(re.instanceCount,Ke);Bt.renderInstances(tt,nn,Ot)}else Bt.render(tt,nn)};function bo(R,j,re){R.transparent===!0&&R.side===Di&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,or(R,j,re),R.side=Fa,R.needsUpdate=!0,or(R,j,re),R.side=Di):or(R,j,re)}this.compile=function(R,j,re=null){re===null&&(re=R),O=be.get(re),O.init(j),P.push(O),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(O.pushLight(Z),Z.castShadow&&O.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(O.pushLight(Z),Z.castShadow&&O.pushShadow(Z))}),O.setupLights();const $=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const De=Z.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ne=De[Be];bo(Ne,re,Z),$.add(Ne)}else bo(De,re,Z),$.add(De)}),O=P.pop(),$},this.compileAsync=function(R,j,re=null){const $=this.compile(R,j,re);return new Promise(Z=>{function De(){if($.forEach(function(Be){E.get(Be).currentProgram.isReady()&&$.delete(Be)}),$.size===0){Z(R);return}setTimeout(De,10)}Rt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let ar=null;function Eo(R){ar&&ar(R)}function sr(){ji.stop()}function To(){ji.start()}const ji=new py;ji.setAnimationLoop(Eo),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(R){ar=R,Ae.setAnimationLoop(R),R===null?ji.stop():ji.start()},Ae.addEventListener("sessionstart",sr),Ae.addEventListener("sessionend",To),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const re=Ae.enabled===!0&&Ae.isPresenting===!0,$=q!==null&&(se===null||re)&&q.begin(A,se);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(j),j=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,j,se),O=be.get(R,P.length),O.init(j),P.push(O),rn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ge.setFromProjectionMatrix(rn,ia,j.reversedDepth),_t=this.localClippingEnabled,Fe=Ie.init(this.clippingPlanes,_t),L=Me.get(R,B.length),L.init(),B.push(L),Ae.enabled===!0&&Ae.isPresenting===!0){const Be=A.xr.getDepthSensingMesh();Be!==null&&vi(Be,j,-1/0,A.sortObjects)}vi(R,j,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Te,ze),lt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,lt&&Re.addToRenderList(L,R),this.info.render.frame++,Fe===!0&&Ie.beginShadows();const Z=O.state.shadowsArray;if(Oe.render(Z,R,j),Fe===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&q.hasRenderPass())===!1){const Be=L.opaque,Ne=L.transmissive;if(O.setupLights(),j.isArrayCamera){const He=j.cameras;if(Ne.length>0)for(let Xe=0,et=He.length;Xe<et;Xe++){const We=He[Xe];Rn(Be,Ne,R,We)}lt&&Re.render(R);for(let Xe=0,et=He.length;Xe<et;Xe++){const We=He[Xe];fn(L,R,We,We.viewport)}}else Ne.length>0&&Rn(Be,Ne,R,j),lt&&Re.render(R),fn(L,R,j)}se!==null&&te===0&&(Y.updateMultisampleRenderTarget(se),Y.updateRenderTargetMipmap(se)),$&&q.end(A),R.isScene===!0&&R.onAfterRender(A,R,j),Pe.resetDefaultState(),de=-1,ue=null,P.pop(),P.length>0?(O=P[P.length-1],Fe===!0&&Ie.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function vi(R,j,re,$){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){$&&vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(rn);const Be=we.update(R),Ne=R.material;Ne.visible&&L.push(R,Be,Ne,re,vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const Be=we.update(R),Ne=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),vt.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),vt.copy(Be.boundingSphere.center)),vt.applyMatrix4(R.matrixWorld).applyMatrix4(rn)),Array.isArray(Ne)){const He=Be.groups;for(let Xe=0,et=He.length;Xe<et;Xe++){const We=He[Xe],tt=Ne[We.materialIndex];tt&&tt.visible&&L.push(R,Be,tt,re,vt.z,We)}}else Ne.visible&&L.push(R,Be,Ne,re,vt.z,null)}}const De=R.children;for(let Be=0,Ne=De.length;Be<Ne;Be++)vi(De[Be],j,re,$)}function fn(R,j,re,$){const{opaque:Z,transmissive:De,transparent:Be}=R;O.setupLightsView(re),Fe===!0&&Ie.setGlobalState(A.clippingPlanes,re),$&&qe.viewport(z.copy($)),Z.length>0&&Ui(Z,j,re),De.length>0&&Ui(De,j,re),Be.length>0&&Ui(Be,j,re),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Rn(R,j,re,$){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[$.id]===void 0){const tt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:tt?Ha:gi,minFilter:Oa,samples:It.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const De=O.state.transmissionRenderTarget[$.id],Be=$.viewport||z;De.setSize(Be.z*A.transmissionResolutionScale,Be.w*A.transmissionResolutionScale);const Ne=A.getRenderTarget(),He=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(Se),xe=A.getClearAlpha(),xe<1&&A.setClearColor(16777215,.5),A.clear(),lt&&Re.render(re);const et=A.toneMapping;A.toneMapping=aa;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),O.setupLightsView($),Fe===!0&&Ie.setGlobalState(A.clippingPlanes,$),Ui(R,re,$),Y.updateMultisampleRenderTarget(De),Y.updateRenderTargetMipmap(De),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ut=0,nn=j.length;Ut<nn;Ut++){const Zt=j[Ut],{object:Bt,geometry:Ke,material:Ot,group:rt}=Zt;if(Ot.side===Di&&Bt.layers.test($.layers)){const Cn=Ot.side;Ot.side=si,Ot.needsUpdate=!0,rr(Bt,re,$,Ke,Ot,rt),Ot.side=Cn,Ot.needsUpdate=!0,tt=!0}}tt===!0&&(Y.updateMultisampleRenderTarget(De),Y.updateRenderTargetMipmap(De))}A.setRenderTarget(Ne,He,Xe),A.setClearColor(Se,xe),We!==void 0&&($.viewport=We),A.toneMapping=et}function Ui(R,j,re){const $=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,De=R.length;Z<De;Z++){const Be=R[Z],{object:Ne,geometry:He,group:Xe}=Be;let et=Be.material;et.allowOverride===!0&&$!==null&&(et=$),Ne.layers.test(re.layers)&&rr(Ne,j,re,He,et,Xe)}}function rr(R,j,re,$,Z,De){R.onBeforeRender(A,j,re,$,Z,De),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(A,j,re,$,R,De),Z.transparent===!0&&Z.side===Di&&Z.forceSinglePass===!1?(Z.side=si,Z.needsUpdate=!0,A.renderBufferDirect(re,j,$,Z,R,De),Z.side=Fa,Z.needsUpdate=!0,A.renderBufferDirect(re,j,$,Z,R,De),Z.side=Di):A.renderBufferDirect(re,j,$,Z,R,De),R.onAfterRender(A,j,re,$,Z,De)}function or(R,j,re){j.isScene!==!0&&(j=Nt);const $=E.get(R),Z=O.state.lights,De=O.state.shadowsArray,Be=Z.state.version,Ne=ke.getParameters(R,Z.state,De,j,re),He=ke.getProgramCacheKey(Ne);let Xe=$.programs;$.environment=R.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(R.isMeshStandardMaterial?ve:fe).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Fn),Xe=new Map,$.programs=Xe);let et=Xe.get(He);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Be)return Ao(R,Ne),et}else Ne.uniforms=ke.getUniforms(R),R.onBeforeCompile(Ne,A),et=ke.acquireProgram(Ne,He),Xe.set(He,et),$.uniforms=Ne.uniforms;const We=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Ie.uniform),Ao(R,Ne),$.needsLights=ka(R),$.lightsStateVersion=Be,$.needsLights&&(We.ambientLightColor.value=Z.state.ambient,We.lightProbe.value=Z.state.probe,We.directionalLights.value=Z.state.directional,We.directionalLightShadows.value=Z.state.directionalShadow,We.spotLights.value=Z.state.spot,We.spotLightShadows.value=Z.state.spotShadow,We.rectAreaLights.value=Z.state.rectArea,We.ltc_1.value=Z.state.rectAreaLTC1,We.ltc_2.value=Z.state.rectAreaLTC2,We.pointLights.value=Z.state.point,We.pointLightShadows.value=Z.state.pointShadow,We.hemisphereLights.value=Z.state.hemi,We.directionalShadowMap.value=Z.state.directionalShadowMap,We.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,We.spotShadowMap.value=Z.state.spotShadowMap,We.spotLightMatrix.value=Z.state.spotLightMatrix,We.spotLightMap.value=Z.state.spotLightMap,We.pointShadowMap.value=Z.state.pointShadowMap,We.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function Kl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Fu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ao(R,j){const re=E.get(R);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function ws(R,j,re,$,Z){j.isScene!==!0&&(j=Nt),Y.resetTextureUnits();const De=j.fog,Be=$.isMeshStandardMaterial?j.environment:null,Ne=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Kn,He=($.isMeshStandardMaterial?ve:fe).get($.envMap||Be),Xe=$.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!re.morphAttributes.position,tt=!!re.morphAttributes.normal,Ut=!!re.morphAttributes.color;let nn=aa;$.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(nn=A.toneMapping);const Zt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bt=Zt!==void 0?Zt.length:0,Ke=E.get($),Ot=O.state.lights;if(Fe===!0&&(_t===!0||R!==ue)){const Nn=R===ue&&$.id===de;Ie.setState($,R,Nn)}let rt=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ot.state.version||Ke.outputColorSpace!==Ne||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==He||$.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ie.numPlanes||Ke.numIntersection!==Ie.numIntersection)||Ke.vertexAlphas!==Xe||Ke.vertexTangents!==et||Ke.morphTargets!==We||Ke.morphNormals!==tt||Ke.morphColors!==Ut||Ke.toneMapping!==nn||Ke.morphTargetsCount!==Bt)&&(rt=!0):(rt=!0,Ke.__version=$.version);let Cn=Ke.currentProgram;rt===!0&&(Cn=or($,j,Z));let ua=!1,Dn=!1,xi=!1;const Ft=Cn.getUniforms(),Ln=Ke.uniforms;if(qe.useProgram(Cn.program)&&(ua=!0,Dn=!0,xi=!0),$.id!==de&&(de=$.id,Dn=!0),ua||ue!==R){qe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",R.projectionMatrix),Ft.setValue(V,"viewMatrix",R.matrixWorldInverse);const Un=Ft.map.cameraPosition;Un!==void 0&&Un.setValue(V,Mt.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,Dn=!0,xi=!0)}if(Ke.needsLights&&(Ot.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Ot.state.directionalShadowMap,Y),Ot.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Ot.state.spotShadowMap,Y),Ot.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Ot.state.pointShadowMap,Y)),Z.isSkinnedMesh){Ft.setOptional(V,Z,"bindMatrix"),Ft.setOptional(V,Z,"bindMatrixInverse");const Nn=Z.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ft.setValue(V,"boneTexture",Nn.boneTexture,Y))}Z.isBatchedMesh&&(Ft.setOptional(V,Z,"batchingTexture"),Ft.setValue(V,"batchingTexture",Z._matricesTexture,Y),Ft.setOptional(V,Z,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",Z._indirectTexture,Y),Ft.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",Z._colorsTexture,Y));const vn=re.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ht.update(Z,re,Cn),(Dn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Ft.setValue(V,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ln.envMap.value=He,Ln.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(Ln.envMapIntensity.value=j.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=jR()),Dn&&(Ft.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&wo(Ln,xi),De&&$.fog===!0&&it.refreshFogUniforms(Ln,De),it.refreshMaterialUniforms(Ln,$,ge,ie,O.state.transmissionRenderTarget[R.id]),Fu.upload(V,Kl(Ke),Ln,Y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Fu.upload(V,Kl(Ke),Ln,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(V,"center",Z.center),Ft.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(V,"normalMatrix",Z.normalMatrix),Ft.setValue(V,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Nn=$.uniformsGroups;for(let Un=0,lr=Nn.length;Un<lr;Un++){const Oi=Nn[Un];ye.update(Oi,Cn),ye.bind(Oi,Cn)}}return Cn}function wo(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function ka(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(R,j,re){const $=E.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=j,E.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:re,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const re=E.get(R);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const Xa=V.createFramebuffer();this.setRenderTarget=function(R,j=0,re=0){se=R,G=j,te=re;let $=null,Z=!1,De=!1;if(R){const Ne=E.get(R);if(Ne.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(V.FRAMEBUFFER,Ne.__webglFramebuffer),z.copy(R.viewport),H.copy(R.scissor),ae=R.scissorTest,qe.viewport(z),qe.scissor(H),qe.setScissorTest(ae),de=-1;return}else if(Ne.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Ne.__hasExternalTextures)Y.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&E.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const Xe=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[j])?$=Xe[j][re]:$=Xe[j],Z=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?$=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[re]:$=Xe,z.copy(R.viewport),H.copy(R.scissor),ae=R.scissorTest}else z.copy(ne).multiplyScalar(ge).floor(),H.copy(ce).multiplyScalar(ge).floor(),ae=Ce;if(re!==0&&($=Xa),qe.bindFramebuffer(V.FRAMEBUFFER,$)&&qe.drawBuffers(R,$),qe.viewport(z),qe.scissor(H),qe.setScissorTest(ae),Z){const Ne=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,re)}else if(De){const Ne=j;for(let He=0;He<R.textures.length;He++){const Xe=E.get(R.textures[He]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+He,Xe.__webglTexture,re,Ne)}}else if(R!==null&&re!==0){const Ne=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ne.__webglTexture,re)}de=-1},this.readRenderTargetPixels=function(R,j,re,$,Z,De,Be,Ne=0){if(!(R&&R.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){qe.bindFramebuffer(V.FRAMEBUFFER,He);try{const Xe=R.textures[Ne],et=Xe.format,We=Xe.type;if(!It.textureFormatReadable(et)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(We)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-$&&re>=0&&re<=R.height-Z&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ne),V.readPixels(j,re,$,Z,Ee.convert(et),Ee.convert(We),De))}finally{const Xe=se!==null?E.get(se).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,j,re,$,Z,De,Be,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He)if(j>=0&&j<=R.width-$&&re>=0&&re<=R.height-Z){qe.bindFramebuffer(V.FRAMEBUFFER,He);const Xe=R.textures[Ne],et=Xe.format,We=Xe.type;if(!It.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,tt),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ne),V.readPixels(j,re,$,Z,Ee.convert(et),Ee.convert(We),0);const Ut=se!==null?E.get(se).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Ut);const nn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sb(V,nn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,tt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer(tt),V.deleteSync(nn),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,re=0){const $=Math.pow(2,-re),Z=Math.floor(R.image.width*$),De=Math.floor(R.image.height*$),Be=j!==null?j.x:0,Ne=j!==null?j.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Be,Ne,Z,De),qe.unbindTexture()};const Rs=V.createFramebuffer(),Wa=V.createFramebuffer();this.copyTextureToTexture=function(R,j,re=null,$=null,Z=0,De=null){De===null&&(Z!==0?(Hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Z,Z=0):De=0);let Be,Ne,He,Xe,et,We,tt,Ut,nn;const Zt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(re!==null)Be=re.max.x-re.min.x,Ne=re.max.y-re.min.y,He=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,et=re.min.y,We=re.isBox3?re.min.z:0;else{const vn=Math.pow(2,-Z);Be=Math.floor(Zt.width*vn),Ne=Math.floor(Zt.height*vn),R.isDataArrayTexture?He=Zt.depth:R.isData3DTexture?He=Math.floor(Zt.depth*vn):He=1,Xe=0,et=0,We=0}$!==null?(tt=$.x,Ut=$.y,nn=$.z):(tt=0,Ut=0,nn=0);const Bt=Ee.convert(j.format),Ke=Ee.convert(j.type);let Ot;j.isData3DTexture?(Y.setTexture3D(j,0),Ot=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Y.setTexture2DArray(j,0),Ot=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(j,0),Ot=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const rt=V.getParameter(V.UNPACK_ROW_LENGTH),Cn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ua=V.getParameter(V.UNPACK_SKIP_PIXELS),Dn=V.getParameter(V.UNPACK_SKIP_ROWS),xi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Zt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,We);const Ft=R.isDataArrayTexture||R.isData3DTexture,Ln=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const vn=E.get(R),Nn=E.get(j),Un=E.get(vn.__renderTarget),lr=E.get(Nn.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,Un.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let Oi=0;Oi<He;Oi++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,We+Oi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(j).__webglTexture,De,nn+Oi)),V.blitFramebuffer(Xe,et,Be,Ne,tt,Ut,Be,Ne,V.DEPTH_BUFFER_BIT,V.NEAREST);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const vn=E.get(R),Nn=E.get(j);qe.bindFramebuffer(V.READ_FRAMEBUFFER,Rs),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wa);for(let Un=0;Un<He;Un++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,Z,We+Un):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,Z),Ln?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,De,nn+Un):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,De),Z!==0?V.blitFramebuffer(Xe,et,Be,Ne,tt,Ut,Be,Ne,V.COLOR_BUFFER_BIT,V.NEAREST):Ln?V.copyTexSubImage3D(Ot,De,tt,Ut,nn+Un,Xe,et,Be,Ne):V.copyTexSubImage2D(Ot,De,tt,Ut,Xe,et,Be,Ne);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ot,De,tt,Ut,nn,Be,Ne,He,Bt,Ke,Zt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Ot,De,tt,Ut,nn,Be,Ne,He,Bt,Zt.data):V.texSubImage3D(Ot,De,tt,Ut,nn,Be,Ne,He,Bt,Ke,Zt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,tt,Ut,Be,Ne,Bt,Ke,Zt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,tt,Ut,Zt.width,Zt.height,Bt,Zt.data):V.texSubImage2D(V.TEXTURE_2D,De,tt,Ut,Be,Ne,Bt,Ke,Zt);V.pixelStorei(V.UNPACK_ROW_LENGTH,rt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Cn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ua),V.pixelStorei(V.UNPACK_SKIP_ROWS,Dn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xi),De===0&&j.generateMipmaps&&V.generateMipmap(Ot),qe.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),qe.unbindTexture()},this.resetState=function(){G=0,te=0,se=null,qe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Tx={type:"change"},ym={type:"start"},xy={type:"end"},Lu=new Xl,Ax=new bs,ZR=Math.cos(70*Ms.DEG2RAD),yn=new k,ii=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gd=1e-6;class QR extends $E{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new oa,this._lastTargetPosition=new k,this._quat=new oa().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ex,this._sphericalDelta=new ex,this._scale=1,this._panOffset=new k,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new k,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$R.bind(this),this._onPointerDown=JR.bind(this),this._onPointerUp=eC.bind(this),this._onContextMenu=oC.bind(this),this._onMouseWheel=iC.bind(this),this._onKeyDown=aC.bind(this),this._onTouchStart=sC.bind(this),this._onTouchMove=rC.bind(this),this._onMouseDown=tC.bind(this),this._onMouseMove=nC.bind(this),this._interceptControlDown=lC.bind(this),this._interceptControlUp=cC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tx),this.update(),this.state=jt.NONE}update(e=null){const t=this.object.position;yn.copy(t).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=ii:a>Math.PI&&(a-=ii),r<-Math.PI?r+=ii:r>Math.PI&&(r-=ii),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),t.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=yn.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Lu.origin.copy(this.object.position),Lu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lu.direction))<ZR?this.object.lookAt(this.target):(Ax.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lu.intersectPlane(Ax,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gd||this._lastTargetPosition.distanceToSquared(this.target)>Gd?(this.dispatchEvent(Tx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yn.setFromMatrixColumn(t,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,t){this.screenSpacePanning===!0?yn.setFromMatrixColumn(t,1):(yn.setFromMatrixColumn(t,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;yn.copy(r).sub(this.target);let l=yn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,l=t-a.top,u=a.width,h=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,r=e.pageY-t.y,l=Math.sqrt(a*a+r*r);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(r,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,r=e.pageY-t.y,l=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function JR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function $R(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function eC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xy),this.state=jt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=jt.DOLLY;break;case io.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=jt.ROTATE}break;case io.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(ym)}function nC(o){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function iC(o){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(o.preventDefault(),this.dispatchEvent(ym),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(xy))}function aC(o){this.enabled!==!1&&this._handleKeyDown(o)}function sC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case no.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=jt.TOUCH_ROTATE;break;case no.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case no.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=jt.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(ym)}function rC(o){switch(this._trackPointer(o),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=jt.NONE}}function oC(o){this.enabled!==!1&&o.preventDefault()}function lC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class uC{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hC=new Yl(-1,1,1,-1,0,1);class fC extends Zn{constructor(){super(),this.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xn([0,2,0,0,2,0],2))}}const dC=new fC;class pC{constructor(e){this._mesh=new Mn(dC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function wx(o,e){if(e===cb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Bp||e===jx){let t=o.getIndex();if(t===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=t.count-2,r=[];if(e===Bp)for(let u=1;u<=a;u++)r.push(t.getX(0)),r.push(t.getX(u)),r.push(t.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(t.getX(u)),r.push(t.getX(u+1)),r.push(t.getX(u+2))):(r.push(t.getX(u+2)),r.push(t.getX(u+1)),r.push(t.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(r),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class mC extends So{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yC(t)}),this.register(function(t){return new SC(t)}),this.register(function(t){return new DC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new NC(t)}),this.register(function(t){return new bC(t)}),this.register(function(t){return new EC(t)}),this.register(function(t){return new TC(t)}),this.register(function(t){return new AC(t)}),this.register(function(t){return new xC(t)}),this.register(function(t){return new wC(t)}),this.register(function(t){return new MC(t)}),this.register(function(t){return new CC(t)}),this.register(function(t){return new RC(t)}),this.register(function(t){return new _C(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new OC(t)})}load(e,t,a,r){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Ol.extractUrlBase(e);u=Ol.resolveURL(d,this.path)}else u=Ol.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){r?r(d):console.error(d),l.manager.itemError(e),l.manager.itemEnd(e)},p=new hy(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{l.parse(d,u,function(g){t(g),l.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,r){let l;const u={},h={},p=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===yy){try{u[St.KHR_BINARY_GLTF]=new PC(e)}catch(_){r&&r(_);return}l=JSON.parse(u[St.KHR_BINARY_GLTF].content)}else l=JSON.parse(p.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new jC(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(l.extensionsUsed)for(let g=0;g<l.extensionsUsed.length;++g){const _=l.extensionsUsed[g],v=l.extensionsRequired||[];switch(_){case St.KHR_MATERIALS_UNLIT:u[_]=new vC;break;case St.KHR_DRACO_MESH_COMPRESSION:u[_]=new IC(l,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:u[_]=new BC;break;case St.KHR_MESH_QUANTIZATION:u[_]=new zC;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,r)}parseAsync(e,t){const a=this;return new Promise(function(r,l){a.parse(e,t,r,l)})}}function gC(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _C{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let a=0,r=t.length;a<r;a++){const l=t[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,a="light:"+e;let r=t.cache.get(a);if(r)return r;const l=t.json,p=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let d;const g=new Qe(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],Kn);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Cl(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new dy(g),d.distance=_;break;case"spot":d=new BE(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),ea(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=t.createUniqueName(p.name||"light_"+e),r=Promise.resolve(d),t.cache.add(a,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,a=this.parser,l=a.json.nodes[e],h=(l.extensions&&l.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(t.cache,h,p)})}}class vC{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return tr}extendParams(e,t,a){const r=[];e.color=new Qe(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Kn),e.opacity=u[3]}l.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",l.baseColorTexture,zn))}return Promise.all(r)}}class xC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class yC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(h,h)}return Promise.all(l)}}class SC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class MC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class bC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;t.sheenColor.setRGB(h[0],h[1],h[2],Kn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(t,"sheenColorMap",u.sheenColorTexture,zn)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class EC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class TC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(h[0],h[1],h[2],Kn),Promise.all(l)}}class AC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class wC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(t,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(h[0],h[1],h[2],Kn),u.specularColorTexture!==void 0&&l.push(a.assignTexture(t,"specularColorMap",u.specularColorTexture,zn)),Promise.all(l)}}class RC{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class CC{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ca}extendMaterialParams(e,t){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class DC{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,a=t.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const l=r.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class LC{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,a=this.parser,r=a.json,l=r.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class NC{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,a=this.parser,r=a.json,l=r.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class UC{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],l=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(h){const p=r.byteOffset||0,d=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,r.mode,r.filter),x})})}else return null}}class OC{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=t.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==Ci.TRIANGLES&&d.mode!==Ci.TRIANGLE_STRIP&&d.mode!==Ci.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,x=[];for(const b of _){const T=new ut,M=new k,y=new oa,C=new k(1,1,1),D=new Hp(b.geometry,b.material,v);for(let L=0;L<v;L++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,L),p.ROTATION&&y.fromBufferAttribute(p.ROTATION,L),p.SCALE&&C.fromBufferAttribute(p.SCALE,L),D.setMatrixAt(L,T.compose(M,y,C));for(const L in p)if(L==="_COLOR_0"){const O=p[L];D.instanceColor=new Fp(O.array,O.itemSize,O.normalized)}else L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&b.geometry.setAttribute(L,p[L]);sn.prototype.copy.call(D,b),this.parser.assignFinalMaterial(D),x.push(D)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const yy="glTF",Al=12,Rx={JSON:1313821514,BIN:5130562};class PC{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Al),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Al,l=new DataView(e,Al);let u=0;for(;u<r;){const h=l.getUint32(u,!0);u+=4;const p=l.getUint32(u,!0);if(u+=4,p===Rx.JSON){const d=new Uint8Array(e,Al+u,h);this.content=a.decode(d)}else if(p===Rx.BIN){const d=Al+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,r=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Xp[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Xp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=ro[v.componentType];d[_]=x.name,p[_]=v.normalized===!0}}return t.getDependency("bufferView",l).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(x){for(const b in x.attributes){const T=x.attributes[b],M=p[b];M!==void 0&&(T.normalized=M)}_(x)},h,d,Kn,v)})})}}class BC{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zC{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class Sy extends ql{constructor(e,t,a,r){super(e,t,a,r)}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r*3+r;for(let u=0;u!==r;u++)t[u]=a[l+u];return t}interpolate_(e,t,a,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=r-t,_=(a-t)/g,v=_*_,x=v*_,b=e*d,T=b-d,M=-2*x+3*v,y=x-v,C=1-M,D=y-v+_;for(let L=0;L!==h;L++){const O=u[T+L+h],B=u[T+L+p]*g,P=u[b+L+h],q=u[b+L]*g;l[L]=C*O+D*B+M*P+y*q}return l}}const FC=new oa;class HC extends Sy{interpolate_(e,t,a,r){const l=super.interpolate_(e,t,a,r);return FC.fromArray(l).normalize().toArray(l),l}}const Ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cx={9728:en,9729:Sn,9984:Gx,9985:Ou,9986:Rl,9987:Oa},Dx={33071:na,33648:Hu,10497:co},kd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VC={CUBICSPLINE:void 0,LINEAR:zl,STEP:Bl},Xd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new gm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fa})),o.DefaultMaterial}function Qs(o,e,t){for(const a in t.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function ea(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kC(o,e,t){let a=!1,r=!1,l=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(l=!0),a&&r&&l)break}if(!a&&!r&&!l)return Promise.resolve(o);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(l){const v=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),l&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function XC(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let a=0,r=t.length;a<r;a++)o.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WC(o){let e;const t=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wd(t.attributes):e=o.indices+":"+Wd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+Wd(o.targets[a]);return e}function Wd(o){let e="";const t=Object.keys(o).sort();for(let a=0,r=t.length;a<r;a++)e+=t[a]+":"+o[t[a]]+";";return e}function Wp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qC(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const YC=new ut;class jC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,l=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,l=h.indexOf("Firefox")>-1,u=l?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||l&&u<98?this.textureLoader=new fy(this.options.manager):this.textureLoader=new VE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const a=this,r=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Qs(l,h,r),ea(h,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let r=0,l=t.length;r<l;r++){const u=t[r].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let r=0,l=e.length;r<l;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;const r=a.clone(),l=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())l(g,h.children[d])};return l(a,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){const r=e(t[a]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const a=[];for(let r=0;r<t.length;r++){const l=e(t[r]);l&&a.push(l)}return a}getDependency(e,t){const a=e+":"+t;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":r=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(l,u){a.load(Ol.resolveURL(t.uri,r.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){const r=t.byteLength||0,l=t.byteOffset||0;return a.slice(l,l+r)})}loadAccessor(e){const t=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=kd[r.type],h=ro[r.componentType],p=r.normalized===!0,d=new h(r.count*u);return Promise.resolve(new kn(d,u,p))}const l=[];return r.bufferView!==void 0?l.push(this.getDependency("bufferView",r.bufferView)):l.push(null),r.sparse!==void 0&&(l.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(l).then(function(u){const h=u[0],p=kd[r.type],d=ro[r.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=r.byteOffset||0,x=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,b=r.normalized===!0;let T,M;if(x&&x!==_){const y=Math.floor(v/x),C="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+y+":"+r.count;let D=t.cache.get(C);D||(T=new d(h,y*x,r.count*x/g),D=new lE(T,x/g),t.cache.add(C,D)),M=new lm(D,p,v%x/g,b)}else h===null?T=new d(r.count*p):T=new d(h,v,r.count*p),M=new kn(T,p,b);if(r.sparse!==void 0){const y=kd.SCALAR,C=ro[r.sparse.indices.componentType],D=r.sparse.indices.byteOffset||0,L=r.sparse.values.byteOffset||0,O=new C(u[1],D,r.sparse.count*y),B=new d(u[2],L,r.sparse.count*p);h!==null&&(M=new kn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let P=0,q=O.length;P<q;P++){const A=O[P];if(M.setX(A,B[P*p]),p>=2&&M.setY(A,B[P*p+1]),p>=3&&M.setZ(A,B[P*p+2]),p>=4&&M.setW(A,B[P*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const t=this.json,a=this.options,l=t.textures[e].source,u=t.images[l];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,l,h)}loadTextureImage(e,t,a){const r=this,l=this.json,u=l.textures[e],h=l.images[t],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(t,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(l.samplers||{})[u.sampler]||{};return g.magFilter=Cx[v.magFilter]||Sn,g.minFilter=Cx[v.minFilter]||Oa,g.wrapS=Dx[v.wrapS]||co,g.wrapT=Dx[v.wrapT]||co,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==en&&g.minFilter!==Sn,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,t){const a=this,r=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let b=v;t.isImageBitmapLoader===!0&&(b=function(T){const M=new wn(T);M.needsUpdate=!0,v(M)}),t.load(Ol.resolveURL(_,l.path),b,void 0,x)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),ea(_,u),_.userData.mimeType=u.mimeType||qC(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,t,a,r){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[St.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=l.associations.get(u);u=l.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),l.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let a=e.material;const r=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new oy,_i.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new fm,_i.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(r||l||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),l&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),l&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return gm}loadMaterial(e){const t=this,a=this.json,r=this.extensions,l=a.materials[e];let u;const h={},p=l.extensions||{},d=[];if(p[St.KHR_MATERIALS_UNLIT]){const _=r[St.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,l,t))}else{const _=l.pbrMetallicRoughness||{};if(h.color=new Qe(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Kn),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(t.assignTexture(h,"map",_.baseColorTexture,zn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(t.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}l.doubleSided===!0&&(h.side=Di);const g=l.alphaMode||Xd.OPAQUE;if(g===Xd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===Xd.MASK&&(h.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==tr&&(d.push(t.assignTexture(h,"normalMap",l.normalTexture)),h.normalScale=new $e(1,1),l.normalTexture.scale!==void 0)){const _=l.normalTexture.scale;h.normalScale.set(_,_)}if(l.occlusionTexture!==void 0&&u!==tr&&(d.push(t.assignTexture(h,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==tr){const _=l.emissiveFactor;h.emissive=new Qe().setRGB(_[0],_[1],_[2],Kn)}return l.emissiveTexture!==void 0&&u!==tr&&d.push(t.assignTexture(h,"emissiveMap",l.emissiveTexture,zn)),Promise.all(d).then(function(){const _=new u(h);return l.name&&(_.name=l.name),ea(_,l),t.associations.set(_,{materials:e}),l.extensions&&Qs(r,_,l),_})}createUniqueName(e){const t=Xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,a=this.extensions,r=this.primitiveCache;function l(h){return a[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,t).then(function(p){return Lx(p,h,t)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=WC(d),_=r[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[St.KHR_DRACO_MESH_COMPRESSION]?v=l(d):v=Lx(new Zn,d,t),r[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const t=this,a=this.json,r=this.extensions,l=a.meshes[e],u=l.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?GC(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(t.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,b=g.length;x<b;x++){const T=g[x],M=u[x];let y;const C=d[x];if(M.mode===Ci.TRIANGLES||M.mode===Ci.TRIANGLE_STRIP||M.mode===Ci.TRIANGLE_FAN||M.mode===void 0)y=l.isSkinnedMesh===!0?new uE(T,C):new Mn(T,C),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),M.mode===Ci.TRIANGLE_STRIP?y.geometry=wx(y.geometry,jx):M.mode===Ci.TRIANGLE_FAN&&(y.geometry=wx(y.geometry,Bp));else if(M.mode===Ci.LINES)y=new ry(T,C);else if(M.mode===Ci.LINE_STRIP)y=new dm(T,C);else if(M.mode===Ci.LINE_LOOP)y=new gE(T,C);else if(M.mode===Ci.POINTS)y=new _E(T,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(y.geometry.morphAttributes).length>0&&XC(y,l),y.name=t.createUniqueName(l.name||"mesh_"+e),ea(y,l),M.extensions&&Qs(r,y,M),t.assignFinalMaterial(y),_.push(y)}for(let x=0,b=_.length;x<b;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return l.extensions&&Qs(r,_[0],l),_[0];const v=new Pa;l.extensions&&Qs(r,v,l),t.associations.set(v,{meshes:e});for(let x=0,b=_.length;x<b;x++)v.add(_[x]);return v})}loadCamera(e){let t;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new jn(Ms.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(t=new Yl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),ea(t,a),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],a=[];for(let r=0,l=t.joints.length;r<l;r++)a.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const l=r.pop(),u=r,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new ut;l!==null&&v.fromArray(l.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new um(h,p)})}loadAnimation(e){const t=this.json,a=this,r=t.animations[e],l=r.name?r.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const x=r.channels[_],b=r.samplers[x.sampler],T=x.target,M=T.node,y=r.parameters!==void 0?r.parameters[b.input]:b.input,C=r.parameters!==void 0?r.parameters[b.output]:b.output;T.node!==void 0&&(u.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",y)),p.push(this.getDependency("accessor",C)),d.push(b),g.push(T))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],b=_[2],T=_[3],M=_[4],y=[];for(let D=0,L=v.length;D<L;D++){const O=v[D],B=x[D],P=b[D],q=T[D],A=M[D];if(O===void 0)continue;O.updateMatrix&&O.updateMatrix();const N=a._createAnimationTracks(O,B,P,q,A);if(N)for(let G=0;G<N.length;G++)y.push(N[G])}const C=new CE(l,void 0,y);return ea(C,r),C})}createNodeMesh(e){const t=this.json,a=this,r=t.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,r.mesh,l);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=r.weights.length;p<d;p++)h.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const t=this.json,a=this,r=t.nodes[e],l=a._loadNodeShallow(e),u=[],h=r.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([l,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,YC)});for(let x=0,b=_.length;x<b;x++)g.add(_[x]);return g})}_loadNodeShallow(e){const t=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?r.createUniqueName(l.name):"",h=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),l.camera!==void 0&&h.push(r.getDependency("camera",l.camera).then(function(d){return r._getNodeRef(r.cameraCache,l.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(l.isBone===!0?g=new sy:d.length>1?g=new Pa:d.length===1?g=d[0]:g=new sn,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(l.name&&(g.userData.name=l.name,g.name=u),ea(g,l),l.extensions&&Qs(a,g,l),l.matrix!==void 0){const _=new ut;_.fromArray(l.matrix),g.applyMatrix4(_)}else l.translation!==void 0&&g.position.fromArray(l.translation),l.rotation!==void 0&&g.quaternion.fromArray(l.rotation),l.scale!==void 0&&g.scale.fromArray(l.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(l.mesh!==void 0&&r.meshCache.refs[l.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,a=this.json.scenes[e],r=this,l=new Pa;a.name&&(l.name=r.createUniqueName(a.name)),ea(l,a),a.extensions&&Qs(t,l,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(r.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++)l.add(p[g]);const d=g=>{const _=new Map;for(const[v,x]of r.associations)(v instanceof _i||v instanceof wn)&&_.set(v,x);return g.traverse(v=>{const x=r.associations.get(v);x!=null&&_.set(v,x)}),_};return r.associations=d(l),l})}_createAnimationTracks(e,t,a,r,l){const u=[],h=e.name?e.name:e.uuid,p=[];Ss[l.path]===Ss.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(h);let d;switch(Ss[l.path]){case Ss.weights:d=mo;break;case Ss.rotation:d=go;break;case Ss.translation:case Ss.scale:d=_o;break;default:a.itemSize===1?d=mo:d=_o;break}const g=r.interpolation!==void 0?VC[r.interpolation]:zl,_=this._getArrayFromAccessor(a);for(let v=0,x=p.length;v<x;v++){const b=new d(p[v]+"."+Ss[l.path],t.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),u.push(b)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const a=Wp(t.constructor),r=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=t[l]*a;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof go?HC:Sy;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function KC(o,e,t){const a=e.attributes,r=new Ga;if(a.POSITION!==void 0){const h=t.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(r.set(new k(p[0],p[1],p[2]),new k(d[0],d[1],d[2])),h.normalized){const g=Wp(ro[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const h=new k,p=new k;for(let d=0,g=l.length;d<g;d++){const _=l[d];if(_.POSITION!==void 0){const v=t.json.accessors[_.POSITION],x=v.min,b=v.max;if(x!==void 0&&b!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(b[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(b[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(b[2]))),v.normalized){const T=Wp(ro[v.componentType]);p.multiplyScalar(T)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new la;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function Lx(o,e,t){const a=e.attributes,r=[];function l(u,h){return t.getDependency("accessor",u).then(function(p){o.setAttribute(h,p)})}for(const u in a){const h=Xp[u]||u.toLowerCase();h in o.attributes||r.push(l(a[u],h))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return wt.workingColorSpace!==Kn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),ea(o,e),KC(o,e,t),Promise.all(r).then(function(){return e.targets!==void 0?kC(o,e.targets,t):o})}class sa{constructor(e,t,a,r,l="div"){this.parent=e,this.object=t,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),sa.nextNameID=sa.nextNameID||0,this.$name.id="lil-gui-name-"+ ++sa.nextNameID,this.$widget=document.createElement(l),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ZC extends sa{constructor(e,t,a){super(e,t,a,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function qp(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const QC={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:qp,toHexString:qp},Vl={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},JC={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,t=1){const a=Vl.fromHexString(o);e[0]=(a>>16&255)/255*t,e[1]=(a>>8&255)/255*t,e[2]=(255&a)/255*t},toHexString:([o,e,t],a=1)=>Vl.toHexString(o*(a=255/a)<<16^e*a<<8^t*a<<0)},$C={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const a=Vl.fromHexString(o);e.r=(a>>16&255)/255*t,e.g=(a>>8&255)/255*t,e.b=(255&a)/255*t},toHexString:({r:o,g:e,b:t},a=1)=>Vl.toHexString(o*(a=255/a)<<16^e*a<<8^t*a<<0)},e2=[QC,Vl,JC,$C];class t2 extends sa{constructor(e,t,a,r){var l;super(e,t,a,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(l=this.initialValue,e2.find(u=>u.match(l))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=qp(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class qd extends sa{constructor(e,t,a){super(e,t,a,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class n2 extends sa{constructor(e,t,a,r,l,u){super(e,t,a,"number"),this._initInput(),this.min(r),this.max(l);const h=u!==void 0;this.step(h?u:this._getImplicitStep(),h),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=g=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+g),this.$input.value=this.getValue())};let t,a,r,l,u,h=!1;const p=g=>{if(h){const _=g.clientX-t,v=g.clientY-a;Math.abs(v)>5?(g.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>5&&d()}if(!h){const _=g.clientY-r;u-=_*this._step*this._arrowKeyMultiplier(g),l+u>this._max?u=this._max-l:l+u<this._min&&(u=this._min-l),this._snapClampSetValue(l+u)}r=g.clientY},d=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",d)};this.$input.addEventListener("input",()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))}),this.$input.addEventListener("keydown",g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))}),this.$input.addEventListener("wheel",g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))},{passive:!1}),this.$input.addEventListener("mousedown",g=>{t=g.clientX,a=r=g.clientY,h=!0,l=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",d)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=v=>{const x=this.$slider.getBoundingClientRect();let b=(T=v,M=x.left,y=x.right,C=this._min,D=this._max,(T-M)/(y-M)*(D-C)+C);var T,M,y,C,D;this._snapClampSetValue(b)},t=v=>{e(v.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",a)};let r,l,u=!1;const h=v=>{v.preventDefault(),this._setDraggingStyle(!0),e(v.touches[0].clientX),u=!1},p=v=>{if(u){const x=v.touches[0].clientX-r,b=v.touches[0].clientY-l;Math.abs(x)>Math.abs(b)?h(v):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",d))}else v.preventDefault(),e(v.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",d)},g=this._callOnFinishChange.bind(this);let _;this.$slider.addEventListener("mousedown",v=>{this._setDraggingStyle(!0),e(v.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",a)}),this.$slider.addEventListener("touchstart",v=>{v.touches.length>1||(this._hasScrollBar?(r=v.touches[0].clientX,l=v.touches[0].clientY,u=!0):h(v),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",d))},{passive:!1}),this.$slider.addEventListener("wheel",v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const x=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(g,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:a}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,a=-e.wheelDelta/120,a*=this._stepExplicit?1:10),t+-a}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class i2 extends sa{constructor(e,t,a,r){super(e,t,a,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(l=>{const u=document.createElement("option");u.innerHTML=l,this.$select.appendChild(u)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class a2 extends sa{constructor(e,t,a){super(e,t,a,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Nx=!1;class Sm{constructor({parent:e,autoPlace:t=e===void 0,container:a,width:r,title:l="Controls",injectStyles:u=!0,touchStyles:h=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{p.code!=="Enter"&&p.code!=="Space"||(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),h&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Nx&&u&&((function(p){const d=document.createElement("style");d.innerHTML=p;const g=document.querySelector("head link[rel=stylesheet], head style");g?document.head.insertBefore(d,g):document.head.appendChild(d)})('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Nx=!0),a?a.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",p=>p.stopPropagation()),this.domElement.addEventListener("keyup",p=>p.stopPropagation())}add(e,t,a,r,l){if(Object(a)===a)return new i2(this,e,t,a);const u=e[t];switch(typeof u){case"number":return new n2(this,e,t,a,r,l);case"boolean":return new ZC(this,e,t);case"string":return new a2(this,e,t);case"function":return new qd(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,u)}addColor(e,t,a=1){return new t2(this,e,t,a)}addFolder(e){return new Sm({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(a=>{a instanceof qd||a._name in e.controllers&&a.load(e.controllers[a._name])}),t&&e.folders&&this.folders.forEach(a=>{a._title in e.folders&&a.load(e.folders[a._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof qd)){if(a._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);t.controllers[a._name]=a.save()}}),e&&this.folders.forEach(a=>{if(a._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);t.folders[a._title]=a.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const a=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const s2=`uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec4 resolution;
uniform float pixelSize;
uniform int toonSteps;
uniform float toonSoftness;
uniform float cloudTime;
uniform float bloomIntensity;
uniform float bloomThreshold;
uniform bool edgeDetectionEnabled;
uniform bool bloomEnabled;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;

varying vec2 vUv;

// --- Noise / FBM / Cloud Shadow (inlined from noise.glsl + cloudShadow.glsl) ---

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

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

float cloudShadow(vec2 worldXZ, float t) {
    vec2 uv = worldXZ * 0.02 + vec2(t * 0.04 + 3.7, t * 0.015 + 9.2);
    float n = fbm(uv, 4.0, 0.5);
    return mix(0.55, 1.0, smoothstep(0.35, 0.55, n));
}

// --- World position reconstruction from depth ---

vec3 reconstructWorldPos(vec2 uv, float depth) {
    // Screen UV to NDC
    vec4 ndc = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    // NDC to view space
    vec4 viewPos = inverseProjectionMatrix * ndc;
    viewPos /= viewPos.w;
    // View space to world space
    vec4 worldPos = inverseViewMatrix * viewPos;
    return worldPos.xyz;
}

// Toon shading functions
float getLuminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
}

vec3 applyToonShading(vec3 color, int steps, float softness) {
    float lum = getLuminance(color);

    // For very dark pixels, blend back to original to avoid crushing to black
    float darkBlend = smoothstep(0.0, 0.15, lum);

    float numSteps = max(float(steps), 2.0);
    float stepSize = 1.0 / numSteps;

    float stepIndex = floor(lum / stepSize);
    float lowerStep = stepIndex * stepSize;
    float upperStep = (stepIndex + 1.0) * stepSize;

    float stepPos = (lum - lowerStep) / stepSize;

    float smoothRange = clamp(softness, 0.0, 1.0);
    float smoothed = smoothstep(0.5 - smoothRange * 0.5, 0.5 + smoothRange * 0.5, stepPos);

    float finalLum = mix(lowerStep, upperStep, smoothed);
    finalLum = max(finalLum, stepSize * 0.5);

    vec3 steppedColor = color * (finalLum / max(lum, 0.001));

    float colorPreservation = 0.3;
    vec3 toonResult = mix(steppedColor, color, colorPreservation * stepPos);

    // Blend: dark areas pass through original color, bright areas get toon shading
    return mix(color, toonResult, darkBlend);
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

    // Reconstruct world position and apply cloud shadow before toon shading
    float depth = getDepth(0, 0);
    if (depth < 1.0) { // only shadow actual geometry, not sky
        vec3 worldPos = reconstructWorldPos(vUv, depth);
        float shadow = cloudShadow(worldPos.xz, cloudTime);
        // Use max channel rather than luminance so saturated colours (blue
        // crystal, cyan lightning) are correctly identified as emissive even
        // though their perceived luminance is low.
        float pixelBrightness = max(texel.r, max(texel.g, texel.b));
        float shadowResistance = smoothstep(0.3, 0.7, pixelBrightness);
        texel.rgb *= mix(shadow, 1.0, shadowResistance);
    }

    // Apply toon shading to the shadowed color
    vec3 toonColor = applyToonShading(texel.rgb, toonSteps, toonSoftness);

    vec3 finalColor = toonColor;

    // Edge detection (conditional — skipped on low-quality tier)
    if (edgeDetectionEnabled) {
        float normalEdgeCoefficient = .3;
        float depthEdgeCoefficient = .4;
        float dei = depthEdgeIndicator();
        float nei = normalEdgeIndicator();

        float coefficient = dei > 0.0 ? (1.0 - depthEdgeCoefficient * dei) : (1.0 + normalEdgeCoefficient * nei);
        finalColor = toonColor * coefficient;
    }

    // Bloom (conditional — skipped on low-quality tier)
    if (bloomEnabled) {
        vec3 bloom = vec3(0.0);
        float totalWeight = 0.0;
        vec2 texelSize = resolution.zw;

        for (int x = -3; x <= 3; x++) {
            for (int y = -3; y <= 3; y++) {
                if (x == 0 && y == 0) continue;
                float dist = length(vec2(float(x), float(y)));
                if (dist > 3.0) continue;

                float weight = 1.0 / (1.0 + dist * dist);

                vec3 sampleColor = texture2D(tDiffuse, vUv + vec2(float(x), float(y)) * texelSize).rgb;
                float sampleLum = getLuminance(sampleColor);
                vec3 bright = sampleColor * max(0.0, sampleLum - bloomThreshold);
                bloom += bright * weight;
                totalWeight += weight;
            }
        }
        bloom /= totalWeight;
        finalColor += bloom * bloomIntensity;
    }

    gl_FragColor = vec4(finalColor, texel.a);
}
`,r2=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,o2=0,Gl=1,At={render:{pixelResolution:new $e(320,180),pixelSize:.5,zoomedPixelSize:1.5,toonSoftness:.05,toonSteps:8,bloom:{intensity:1.1,threshold:.3}},colors:{crystal:new Qe(255),pillar:new Qe(10526880),bolt:new Qe(43775),boltGlow:new Qe(13431039),ground1:new Qe(4881454),ground2:new Qe(6600752),ground3:new Qe(8245550),grassAccent:new Qe(2274594)},ground:{size:450,y:-1.5},crystal:{radius:.8,emissive:17663,emissiveIntensity:2.5,shininess:10,specular:32255,baseY:4.5,glow:{pulseSpeed:1.4,pulseAmount:.18,shadowEmissiveBoost:1.2},animation:{cycleSpeed:1,fastSpin:2,slowSpin:.5,zoomedSpinDamping:.08,rotationX:.5,rotationZ:1.5,bounceHeight:1,zoomedBounceHeight:.1,bounceSpeed:1},light:{intensityScale:1.4,intensityMin:40,intensityMax:100,shadowBoost:2.8}},grass:{areaSize:100,noiseScale:.05,octaves:4,persistence:.5,texturePath:"assets/grass_leaf.png",accentTexturePath:"assets/accent_leaf.png",accentRatio:.05,minHeight:.3,maxHeight:.5,windStrength:.2,windDirection:new $e(.8,.15)},camera:{fov:50,horizontalAngle:65,verticalAngle:36,distance:40,target:new k(0,2,0)},zoom:{blendSpeed:.67,offsetDirection:new k(2,1,3),offsetDistance:1.5,transitionDuration:1.5,reEnableDelay:1600},lighting:{ambient:{color:1710638,intensity:.6},key:{color:16771772,intensity:2.5,position:new k(15,20,10),shadow:{bounds:80,near:.1,far:120,bias:-1e-4}},fill:{color:6719692,intensity:1.5,position:new k(-10,3,8)},rim:{color:16766112,intensity:1.8,position:new k(-8,12,-15)},shape:{color:3373055,intensity:1.2,distance:10,decay:2.5}},lightning:{boltsPerSecond:15,boltLifetime:.8,maxBolts:15,boltLength:2,segmentsPerBolt:5,branchProbability:.9,animationSpeed:5,restrikeProbability:.2,restrikeInterval:.4,targets:[new k(3,8,-2),new k(3,6,-2),new k(3,2,-2),new k(-2,9,3),new k(-2,7,3),new k(-2,3,3),new k(0,-2,0),new k(-2,-2,2),new k(2,-2,-2)]},pillar:{modelPath:"assets/stone_arch_pillars.glb",childIndex:5,position:new k(3,-1.5,-2),scale:3,rotationY:Math.PI/4},rocks:{modelPath:"assets/low_poly_rocks.glb",color:new Qe(8748670),count:9,radius:17,radiusJitter:2,scaleMin:4,scaleMax:9,angleJitter:.25},trees:{modelPath:"assets/low_poly_trees.glb",meshCount:2,radius:45,radiusJitter:20,scaleMin:9,scaleMax:12}};class l2 extends uC{fsQuad;resolution;scene;camera;rgbRenderTarget;normalRenderTarget;normalMaterial;pixelSize;toonSteps;toonSoftness;bloomIntensity;bloomThreshold;edgeDetectionEnabled;bloomEnabled;gui;constructor(e,t,a,r){super(),this.resolution=e,this.pixelSize=r.pixelSize,this.toonSteps=r.toonSteps,this.toonSoftness=r.toonSoftness,this.bloomIntensity=r.bloomIntensity,this.bloomThreshold=r.bloomThreshold,this.edgeDetectionEnabled=r.edgeDetectionEnabled??!0,this.bloomEnabled=r.bloomEnabled??!0,this.fsQuad=new pC(this.material()),this.scene=t,this.camera=a,this.rgbRenderTarget=Nu(e,ai,!0),this.normalRenderTarget=Nu(e,Vu,!1),this.normalMaterial=new SE}createGUI(e){const t=e?e.addFolder("Pixelated + Toon"):new Sm;return t.add(this,"pixelSize",.1,2,.01).name("Pixel Size").onChange(()=>this.updateUniforms()),t.add(this,"toonSteps",2,10,1).name("Toon Steps").onChange(()=>this.updateUniforms()),t.add(this,"toonSoftness",0,.3,.01).name("Toon Softness").onChange(()=>this.updateUniforms()),e||t.open(),this.gui=t,t}getUniforms(){return this.fsQuad.material.uniforms}updateUniforms(){const e=this.getUniforms();e.pixelSize.value=this.pixelSize,e.toonSteps.value=this.toonSteps,e.toonSoftness.value=this.toonSoftness,e.bloomIntensity.value=this.bloomIntensity,e.bloomThreshold.value=this.bloomThreshold,e.edgeDetectionEnabled.value=this.edgeDetectionEnabled,e.bloomEnabled.value=this.bloomEnabled}updateCloudTime(e){this.getUniforms().cloudTime.value=e}render(e){if(this.updateRenderTargets(),e.setRenderTarget(this.rgbRenderTarget),e.render(this.scene,this.camera),this.edgeDetectionEnabled){e.setRenderTarget(this.normalRenderTarget);const r=this.camera.layers.mask;this.camera.layers.set(o2);const l=e.shadowMap.enabled;e.shadowMap.enabled=!1;const u=this.scene.overrideMaterial;this.scene.overrideMaterial=this.normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=u,e.shadowMap.enabled=l,this.camera.layers.mask=r}const t=this.getUniforms();t.tDiffuse.value=this.rgbRenderTarget.texture,t.tDepth.value=this.rgbRenderTarget.depthTexture,t.tNormal.value=this.normalRenderTarget.texture;const a=this.camera;t.inverseProjectionMatrix.value.copy(a.projectionMatrixInverse),t.inverseViewMatrix.value.copy(a.matrixWorld),this.updateUniforms(),e.setRenderTarget(null),this.fsQuad.render(e)}lastPixelSize=0;updateRenderTargets(){if(this.lastPixelSize===this.pixelSize)return;this.lastPixelSize=this.pixelSize;const e=new $e(Math.floor(this.resolution.x/this.pixelSize),Math.floor(this.resolution.y/this.pixelSize));this.rgbRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.rgbRenderTarget=Nu(e,ai,!0),this.normalRenderTarget=Nu(e,Vu,!1),this.getUniforms().resolution.value.set(e.x,e.y,1/e.x,1/e.y)}material(){return new qi({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Qt(this.resolution.x,this.resolution.y,1/this.resolution.x,1/this.resolution.y)},pixelSize:{value:this.pixelSize},toonSteps:{value:this.toonSteps},toonSoftness:{value:this.toonSoftness},bloomIntensity:{value:this.bloomIntensity},bloomThreshold:{value:this.bloomThreshold},edgeDetectionEnabled:{value:this.edgeDetectionEnabled},bloomEnabled:{value:this.bloomEnabled},cloudTime:{value:0},inverseProjectionMatrix:{value:new ut},inverseViewMatrix:{value:new ut}},vertexShader:r2,fragmentShader:s2})}dispose(){this.gui?.destroy(),this.rgbRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.fsQuad.dispose()}}function Nu(o,e,t){const a=new Xi(o.x,o.y,t?{depthTexture:new po(o.x,o.y),depthBuffer:!0}:void 0);return a.texture.format=e,a.texture.minFilter=en,a.texture.magFilter=en,a.texture.generateMipmaps=!1,a.stencilBuffer=!1,a}class Es{loader;gltf;constructor(){this.loader=new mC}async load(e){return new Promise((t,a)=>{this.loader.load(e,r=>{this.gltf=r,t()},r=>{},r=>{console.error("Error loading model:",r),a(r)})})}getChildModel(e=0){return this.collectMeshes()[e].clone()}getBakedMeshes(e=0,t){return this.gltf.scene.updateWorldMatrix(!0,!0),this.collectMeshes().slice(e,t?e+t:void 0).map(u=>{const h=u.clone();h.geometry=u.geometry.clone(),h.geometry.applyMatrix4(u.matrixWorld),h.geometry.computeBoundingBox();const p=h.geometry.boundingBox,d=new k;return p.getCenter(d),h.geometry.translate(-d.x,-p.min.y,-d.z),h.position.set(0,0,0),h.rotation.set(0,0,0),h.scale.set(1,1,1),h})}collectMeshes(){const e=[];return this.gltf.scene.traverse(t=>{t instanceof Mn&&e.push(t)}),e}static convertToToonMaterial(e,t){Es.applyToMaterials(e,a=>{const r=new ju({color:t,map:a.map||null});return a.dispose(),r})}static setMaterial(e,t){e.traverse(a=>{a instanceof Mn&&(a.material=t)})}static applyToMaterials(e,t){e.traverse(a=>{if(!(a instanceof Mn))return;const l=(Array.isArray(a.material)?a.material:[a.material]).map(u=>t(u)??u);a.material=Array.isArray(a.material)?l:l[0]})}}const My=`float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

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
`,by=`vec3 sampleGroundColor(vec2 worldXZ, float noiseScale, float octaves, float persistence, vec3 c1, vec3 c2, vec3 c3) {
    float noiseValue = fbm(worldXZ * noiseScale, octaves, persistence);

    float detailNoise = noise(worldXZ * noiseScale * 5.0) * 0.1;
    noiseValue = clamp(noiseValue + detailNoise, 0.0, 1.0);

    float adjustedNoise = pow(noiseValue, 0.9);

    vec3 result;
    if (adjustedNoise < 0.4) {
        float t = adjustedNoise / 0.4;
        result = mix(c1, c2, smoothstep(0.0, 1.0, t));
    } else if (adjustedNoise < 0.7) {
        float t = (adjustedNoise - 0.4) / 0.3;
        result = mix(c2, c3, smoothstep(0.0, 1.0, t));
    } else {
        float t = (adjustedNoise - 0.7) / 0.3;
        vec3 highlight = mix(c3, c2 * 1.15, t * 0.2);
        result = highlight;
    }

    return result;
}
`,c2=`uniform vec3 cameraPos;
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
varying float vEdgeFade;
`,u2=`// Get instance world position (base of grass)
vec3 instanceWorldPos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;

float distFromCenter = length(instanceWorldPos.xz);
vEdgeFade = 1.0 - smoothstep(30.0, 48.0, distFromCenter);

// Sample ground color
vec3 groundColor = sampleGroundColor(instanceWorldPos.xz, noiseScale, octaves, persistence, color1, color2, color3);

// For accent grass, apply a color shift to make it stand out
if (isAccent > 0.5) {
    vec3 accentShift = vec3(0.3, 0.3, -0.1);
    groundColor = clamp(groundColor + accentShift, 0.0, 1.0);
    groundColor *= 1.2;
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

// Wind animation
float normalizedHeight = position.y / 1.5;
float heightFactor = normalizedHeight * normalizedHeight;

float windPhase = instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3;
float windTime = time + windPhase;

float windWave1 = sin(windTime * 2.0 + instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3);
float windWave2 = sin(windTime * 3.0 + instanceWorldPos.x * 0.8 + instanceWorldPos.z * 0.6) * 0.5;
float windWave3 = sin(windTime * 5.0 + instanceWorldPos.x * 1.2) * 0.3;

float windAmount = (windWave1 + windWave2 + windWave3) * windStrength * heightFactor;

// Accent grass moves slightly more in the wind
if (isAccent > 0.5) {
    windAmount *= 1.3;
}

// Apply wind displacement
vec3 windDisplacement = vec3(
    windDirection.x * windAmount,
    -abs(windAmount) * 0.15 * heightFactor,
    windDirection.y * windAmount
);

// Apply wind to position, then scale, then billboard
vec3 displacedPosition = position + windDisplacement;
vec3 scaledPosition = displacedPosition * vec3(instanceScale.x, instanceScale.y, instanceScale.x);
vec3 billboardedPos = billboardBasis * scaledPosition;

// Final world position
vec3 finalWorldPos = instanceWorldPos + billboardedPos;

// Transform to view space
vec4 mvPosition = viewMatrix * vec4(finalWorldPos, 1.0);
gl_Position = projectionMatrix * mvPosition;
`,h2=`varying vec3 vGroundColor;
varying float vEdgeFade;
void main() {
`;class f2{instancedMesh;accentMesh;material;accentMaterial;dummy=new sn;loader=new fy;params;time=0;constructor(e){this.params=e;const t=new vo(.6,1.5);t.translate(0,.5,0),this.material=this.createGrassMaterial(e.grassTexturePath),this.setupMaterialShader(this.material,!1);const a=Math.floor(e.count*e.accentGrassRatio),r=e.count-a;this.instancedMesh=new Hp(t,this.material,r),this.instancedMesh.castShadow=!1,this.instancedMesh.receiveShadow=!0,this.instancedMesh.layers.set(Gl),this.setupInstances(this.instancedMesh,r,e.minHeight,e.maxHeight),this.setupAccentGrass(a,t)}createGrassMaterial(e,t){const a=this.loader.load(e,r=>{r.magFilter=en,r.minFilter=en,r.generateMipmaps=!1});return a.magFilter=en,a.minFilter=en,a.generateMipmaps=!1,new ju({color:t,alphaMap:a,transparent:!0,alphaTest:.5,side:Di})}setupAccentGrass(e,t){this.accentMaterial=this.createGrassMaterial(this.params.accentGrassTexturePath,this.params.accentColor),this.setupMaterialShader(this.accentMaterial,!0),this.accentMesh=new Hp(t,this.accentMaterial,e),this.accentMesh.castShadow=!1,this.accentMesh.receiveShadow=!0,this.accentMesh.layers.set(Gl),this.setupInstances(this.accentMesh,e,this.params.minHeight*1,this.params.maxHeight*2)}setupMaterialShader(e,t){e.onBeforeCompile=a=>{a.uniforms.cameraPos={value:new k},a.uniforms.time={value:0},a.uniforms.windStrength={value:this.params.windStrength},a.uniforms.windDirection={value:this.params.windDirection},a.uniforms.isAccent={value:t?1:0},a.uniforms.noiseScale={value:.05},a.uniforms.octaves={value:4},a.uniforms.persistence={value:.5},a.uniforms.color1={value:this.params.groundColors[0]},a.uniforms.color2={value:this.params.groundColors[1]},a.uniforms.color3={value:this.params.groundColors[2]},e.userData.shader=a,a.vertexShader=a.vertexShader.replace("void main() {",`${c2}
${My}
${by}
void main() {`),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",u2),a.fragmentShader=a.fragmentShader.replace("void main() {",`${h2}`),a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        diffuseColor.rgb *= vGroundColor;
        diffuseColor.a *= vEdgeFade;
        `),a.vertexShader=a.vertexShader.replace("#include <defaultnormal_vertex>",`
        vec3 transformedNormal = normalMatrix * vec3(0.0, 1.0, 0.0);
        `),a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`
        vec3 objectNormal = vec3(0.0, 1.0, 0.0);
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(1.0, 0.0, 0.0);
        #endif
        `),a.vertexShader=a.vertexShader.replace("#include <shadowmap_vertex>",`
        #ifdef USE_SHADOWMAP
          #if NUM_DIR_LIGHT_SHADOWS > 0
            vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * worldOrigin;
          #endif
        #endif
        `)}}setupInstances(e,t,a,r){for(let l=0;l<t;l++){const u=(Math.random()-.5)*this.params.areaSize,h=(Math.random()-.5)*this.params.areaSize,p=a+Math.random()*(r-a),d=Math.random()*Math.PI*2;this.dummy.position.set(u,this.params.groundY,h),this.dummy.rotation.y=d,this.dummy.scale.set(1,p,1),this.dummy.updateMatrix(),e.setMatrixAt(l,this.dummy.matrix)}e.instanceMatrix.needsUpdate=!0}updateShaderUniforms(e,t){const a=e.userData.shader;a&&(a.uniforms.cameraPos&&a.uniforms.cameraPos.value.copy(t.position),a.uniforms.time&&(a.uniforms.time.value=this.time))}update(e,t){t!==void 0&&(this.time+=t),this.updateShaderUniforms(this.material,e),this.accentMaterial&&this.updateShaderUniforms(this.accentMaterial,e)}setWindStrength(e){this.params.windStrength=e;for(const t of this.getMaterials()){const a=t.userData.shader;a?.uniforms.windStrength&&(a.uniforms.windStrength.value=e)}}setWindDirection(e){this.params.windDirection.copy(e);for(const t of this.getMaterials()){const a=t.userData.shader;a?.uniforms.windDirection&&a.uniforms.windDirection.value.copy(e)}}getMaterials(){const e=[this.material];return this.accentMaterial&&e.push(this.accentMaterial),e}getMesh(){return this.instancedMesh}getMeshes(){const e=[this.instancedMesh];return this.accentMesh&&e.push(this.accentMesh),e}dispose(){this.instancedMesh.geometry.dispose(),this.material.dispose(),this.accentMesh&&this.accentMesh.geometry.dispose(),this.accentMaterial&&this.accentMaterial.dispose()}}class d2{bolts=[];group=new Pa;params;emissionSource=new k;emissionAccumulator=0;constructor(e){this.params=e,this.group=new Pa,this.group.layers.set(Gl)}setEmissionSource(e){this.emissionSource.copy(e)}update(e){this.emissionAccumulator+=e*this.params.boltsPerSecond;const t=Math.floor(this.emissionAccumulator);this.emissionAccumulator-=t;for(let a=0;a<t;a++)this.bolts.length<this.params.maxBolts&&this.emitBolt();for(let a=this.bolts.length-1;a>=0;a--){const r=this.bolts[a];if(r.age+=e,r.progress+=e/r.lifetime*this.params.animationSpeed,r.age>=r.lifetime){this.group.remove(r.line),r.line.geometry.dispose(),r.line.material.dispose(),this.bolts.splice(a,1);continue}r.restrikes>0&&(r.restrikeTimer+=e,r.restrikeTimer>=this.params.restrikeInterval&&(r.restrikeTimer=0,r.restrikePhase===0?r.restrikePhase=1:(r.restrikePhase=0,r.restrikes--,this.jitterSegments(r)))),this.updateBoltGeometry(r)}}emitBolt(){const e=[],t=[];let a=this.emissionSource.clone();e.push(a.clone());const r=this.params.targets[Math.floor(Math.random()*this.params.targets.length)],l=r.clone().sub(a).normalize(),h=(r?a.distanceTo(r):this.params.boltLength)/this.params.segmentsPerBolt;for(let y=0;y<this.params.segmentsPerBolt;y++){if(r&&y===this.params.segmentsPerBolt-1)a=r.clone();else{const C=new k((Math.random()-.5)*h*1.2,(Math.random()-.5)*h*.6,(Math.random()-.5)*h*1.2);a=a.clone().add(l.clone().multiplyScalar(h)).add(C)}e.push(a.clone()),Math.random()<this.params.branchProbability&&y>1&&y<this.params.segmentsPerBolt-2&&t.push(this.createBranch(a,l,h))}const p=Math.floor(this.params.segmentsPerBolt*.3),g=(this.params.segmentsPerBolt+this.params.segmentsPerBolt*p)*6,_=new Float32Array(g),v=new kn(_,3);v.setUsage(vb);const x=new Zn;x.setAttribute("position",v),x.setDrawRange(0,0);const b=new fm({color:this.params.color,transparent:!0,blending:Yd,depthWrite:!1}),T=new ry(x,b);T.layers.set(Gl),this.group.add(T);const M=Math.random()<this.params.restrikeProbability;this.bolts.push({segments:e,branches:t,age:0,lifetime:this.params.boltLifetime*(.8+Math.random()*.4),progress:0,line:T,positionBuffer:_,positionAttribute:v,restrikes:M?2+Math.floor(Math.random()*2):0,restrikeTimer:0,restrikePhase:0})}updateBoltGeometry(e){const t=Math.min(Math.floor(e.progress*e.segments.length),e.segments.length),a=e.positionBuffer;let r=0;for(let _=0;_<t-1;_++){const v=e.segments[_],x=e.segments[_+1];a[r++]=v.x,a[r++]=v.y,a[r++]=v.z,a[r++]=x.x,a[r++]=x.y,a[r++]=x.z}for(const _ of e.branches)for(let v=0;v<_.length-1;v++){const x=_[v],b=_[v+1];a[r++]=x.x,a[r++]=x.y,a[r++]=x.z,a[r++]=b.x,a[r++]=b.y,a[r++]=b.z}const l=r/3;e.positionAttribute.needsUpdate=!0,e.line.geometry.setDrawRange(0,l),e.line.geometry.computeBoundingSphere();const u=e.age/e.lifetime,h=Math.max(0,1-u*2),p=this.params.glowColor.clone().lerp(this.params.color,u),d=e.line.material;d.color.copy(p);let g=1-u+h*.5;e.restrikes>0&&e.restrikePhase===1&&(g*=.1),d.opacity=g}jitterSegments(e){for(let a=1;a<e.segments.length-1;a++)e.segments[a].x+=(Math.random()-.5)*.15,e.segments[a].y+=(Math.random()-.5)*.15,e.segments[a].z+=(Math.random()-.5)*.15;for(const a of e.branches)for(let r=1;r<a.length;r++)a[r].x+=(Math.random()-.5)*.15,a[r].y+=(Math.random()-.5)*.15,a[r].z+=(Math.random()-.5)*.15}createBranch(e,t,a){const r=[e.clone()];let l=e.clone();const u=t.clone().applyAxisAngle(new k(0,1,0),(Math.random()-.5)*Math.PI*.6).normalize(),h=Math.floor(this.params.segmentsPerBolt*.3);for(let p=0;p<h;p++){const d=new k((Math.random()-.5)*a,(Math.random()-.5)*a,(Math.random()-.5)*a);l=l.clone().add(u.clone().multiplyScalar(a*.8)).add(d),r.push(l.clone())}return r}getGroup(){return this.group}dispose(){this.bolts.forEach(e=>{e.line.geometry.dispose(),e.line.material.dispose()}),this.bolts.length=0}}function p2(o){return o*o*(3-2*o)}class m2{camera;controls;horizontalAngle;verticalAngle;distance;target;baseFov;maxHFov;transition=null;constructor(e,t={}){const{fov:a=50,aspect:r=window.innerWidth/window.innerHeight,near:l=.1,far:u=5e3,horizontalAngle:h=45,verticalAngle:p=35,distance:d=10,target:g=new k(0,0,0)}=t;this.baseFov=a;const _=16/9;this.maxHFov=2*Math.atan(Math.tan(a*Math.PI/360)*_),this.camera=new jn(a,r,l,u),this.horizontalAngle=h,this.verticalAngle=p,this.distance=d,this.target=g,this.clampFov(r),this.updatePosition(),this.camera.lookAt(this.target),this.setupOrbitControls(e)}get isTransitioning(){return this.transition!==null}transitionTo(e,t,a=1.5,r){this.transition={startPos:this.camera.position.clone(),endPos:e.clone(),startTarget:this.controls.target.clone(),endTarget:t.clone(),liveEndPos:r?.liveEndPos,liveEndTarget:r?.liveEndTarget,duration:a,elapsed:0},this.controls.enabled=!1}setAngle(e,t){this.horizontalAngle=e,this.verticalAngle=t,this.updatePosition()}setDistance(e){this.distance=e,this.updatePosition()}setTarget(e){this.target.copy(e),this.camera.lookAt(this.target),this.controls.target.copy(this.target)}setupOrbitControls(e){this.controls=new QR(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.target.copy(this.target)}updatePosition(){const e=this.horizontalAngle*(Math.PI/180),t=this.verticalAngle*(Math.PI/180);this.camera.position.set(this.distance*Math.cos(t)*Math.cos(e),this.distance*Math.sin(t),this.distance*Math.cos(t)*Math.sin(e)),this.camera.lookAt(this.target)}update(e){if(this.transition&&e){this.transition.liveEndPos&&this.transition.endPos.copy(this.transition.liveEndPos()),this.transition.liveEndTarget&&this.transition.endTarget.copy(this.transition.liveEndTarget()),this.transition.elapsed+=e;const t=Math.min(this.transition.elapsed/this.transition.duration,1),a=p2(t);this.camera.position.lerpVectors(this.transition.startPos,this.transition.endPos,a),this.controls.target.lerpVectors(this.transition.startTarget,this.transition.endTarget,a),t>=1&&(this.camera.position.copy(this.transition.endPos),this.controls.target.copy(this.transition.endTarget),this.transition=null)}this.controls.update()}onResize(e,t){const a=e/t;this.camera.aspect=a,this.clampFov(a),this.camera.updateProjectionMatrix()}clampFov(e){2*Math.atan(Math.tan(this.baseFov*Math.PI/360)*e)>this.maxHFov?this.camera.fov=2*Math.atan(Math.tan(this.maxHFov/2)/e)*180/Math.PI:this.camera.fov=this.baseFov}dispose(){this.controls.dispose()}}class g2 extends ju{constructor(e){super({color:e.color2}),this.onBeforeCompile=t=>{t.uniforms.color1={value:e.color1},t.uniforms.color2={value:e.color2},t.uniforms.color3={value:e.color3},t.uniforms.noiseScale={value:e.noiseScale},t.uniforms.octaves={value:e.octaves},t.uniforms.persistence={value:e.persistence},t.vertexShader=t.vertexShader.replace("void main() {",`
        varying vec3 vWorldPosition;
        void main() {
        `),t.vertexShader=t.vertexShader.replace("#include <worldpos_vertex>",`
        #include <worldpos_vertex>
        vWorldPosition = worldPosition.xyz;
        `),t.fragmentShader=t.fragmentShader.replace("void main() {",`
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float noiseScale;
        uniform float octaves;
        uniform float persistence;
        varying vec3 vWorldPosition;

        ${My}
        ${by}

        void main() {
        `),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>

        vec3 toneColor = sampleGroundColor(vWorldPosition.xz, noiseScale, octaves, persistence, color1, color2, color3);
        diffuseColor.rgb *= toneColor / color2;
        `),this.userData.shader=t}}}const _2={low:{shadowMapSize:1024,shadowMapType:HM,grassCount:5e3,treeCount:80,treesCastShadow:!1,bloomEnabled:!1,edgeDetectionEnabled:!1},medium:{shadowMapSize:2048,shadowMapType:Ll,grassCount:15e3,treeCount:100,treesCastShadow:!0,bloomEnabled:!0,edgeDetectionEnabled:!0},high:{shadowMapSize:4096,shadowMapType:Kp,grassCount:25e3,treeCount:120,treesCastShadow:!0,bloomEnabled:!0,edgeDetectionEnabled:!0}};function Ux(o){return{..._2[o]}}function v2(o){let e=0;const t=o.getContext(),a=t.getExtension("WEBGL_debug_renderer_info"),r=a?t.getParameter(a.UNMASKED_RENDERER_WEBGL):"",l=t.getParameter(t.MAX_TEXTURE_SIZE);l>=16384?e+=2:l>=8192&&(e+=1);const u=navigator.hardwareConcurrency??2;u>=8?e+=2:u>=4&&(e+=1),window.devicePixelRatio<=1?e+=0:window.devicePixelRatio<=2?e+=1:e+=0,(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||"ontouchstart"in window&&u<=4)&&(e-=2);const p=r.toLowerCase();return(p.includes("mali")||p.includes("adreno 5")||p.includes("powervr")||p.includes("intel hd"))&&(e-=1),e<=1?"low":e<=3?"medium":"high"}function Uu(o,e){return(Math.sin(o*127.1+e*311.7)*43758.5453%1+1)%1}function x2(o,e){const t=Math.floor(o),a=Math.floor(e),r=o-t,l=e-a,u=r*r*(3-2*r),h=l*l*(3-2*l),p=Uu(t,a),d=Uu(t+1,a),g=Uu(t,a+1),_=Uu(t+1,a+1);return p+(d-p)*u+(g-p+(p-d-g+_)*u)*h}function y2(o,e){let t=0,a=1,r=1,l=0;for(let u=0;u<4;u++)t+=x2(o*r,e*r)*a,l+=a,a*=.5,r*=2;return t/l}function S2(o,e,t){const a=o*.02+t*.04+3.7,r=e*.02+t*.015+9.2,l=y2(a,r),u=Math.max(0,Math.min(1,(l-.35)/.2));return .55+u*u*(3-2*u)*.45}class M2{scene;pixelCamera;renderer;pixelPass;shape;shapeLight;ground;grassSystem;lightningSystem;pillar;clock=new kE;frameId=0;qualityTier;qualitySettings;frameTimes=[];tierDowngraded=!1;originalCameraPos=new k;originalTarget=new k;zoomed=!1;zoomBlend=0;zoomBlendTarget=0;pixelSizeAnim=null;constructor(e){this.setupScene(),this.setupRenderer(e),this.qualityTier=v2(this.renderer),this.qualitySettings=Ux(this.qualityTier),this.applyQualitySettings(),console.log(`[PixelScene] Quality tier: ${this.qualityTier}`,this.qualitySettings),this.setupCamera(e),this.setupSceneLights(),this.setupGround(),this.setupShape(),this.setupShapeLights(),this.setupLightning(),this.setupPillar(),this.setupRocks(),this.setupTrees(),this.setupPixelPass(),window.addEventListener("resize",()=>this.onResize())}start(){this.pixelCamera.controls.enabled=!0,this.pixelCamera.controls.enableZoom=!1,this.pixelCamera.controls.enablePan=!1;const e=this.pixelCamera.controls.getPolarAngle();this.pixelCamera.controls.minPolarAngle=0,this.pixelCamera.controls.maxPolarAngle=e,this.originalCameraPos.copy(this.pixelCamera.camera.position),this.originalTarget.copy(this.pixelCamera.controls.target),this.pixelCamera.camera.layers.enable(Gl);const t=()=>{const a=this.clock.getDelta();this.zoomBlend<this.zoomBlendTarget?this.zoomBlend=Math.min(this.zoomBlend+a*At.zoom.blendSpeed,this.zoomBlendTarget):this.zoomBlend>this.zoomBlendTarget&&(this.zoomBlend=Math.max(this.zoomBlend-a*At.zoom.blendSpeed,this.zoomBlendTarget)),this.animateShape(a),this.zoomed&&!this.pixelCamera.isTransitioning&&this.pixelCamera.controls.target.copy(this.shape.position),this.pixelCamera.update(a),this.updatePixelSize(a),this.grassSystem.update(this.pixelCamera.camera,a),this.pixelPass.updateCloudTime(this.clock.elapsedTime),this.lightningSystem.setEmissionSource(this.shape.position),this.lightningSystem.update(a),this.pixelPass.render(this.renderer),!this.tierDowngraded&&this.frameTimes.length<60&&(this.frameTimes.push(a),this.frameTimes.length===60&&this.frameTimes.reduce((l,u)=>l+u,0)/this.frameTimes.length>.033&&this.downgradeTier()),this.frameId=requestAnimationFrame(t)};t()}dispose(){cancelAnimationFrame(this.frameId),this.pixelCamera.dispose(),this.pixelPass.dispose(),this.grassSystem.dispose(),this.lightningSystem.dispose()}zoomToShape(){this.zoomed=!0,this.zoomBlendTarget=1;const e=At.zoom.offsetDirection.clone().normalize().multiplyScalar(At.zoom.offsetDistance),t=this.shape.position.clone(),a=t.clone().add(e);this.pixelCamera.transitionTo(a,t,At.zoom.transitionDuration,{liveEndTarget:()=>this.shape.position,liveEndPos:()=>this.shape.position.clone().add(e)}),this.animatePixelSize(At.render.pixelSize,At.render.zoomedPixelSize,At.zoom.transitionDuration)}zoomOut(){this.zoomed=!1,this.zoomBlendTarget=0,this.pixelCamera.transitionTo(this.originalCameraPos,this.originalTarget,At.zoom.transitionDuration),this.animatePixelSize(At.render.zoomedPixelSize,At.render.pixelSize,At.zoom.transitionDuration),setTimeout(()=>{this.pixelCamera.controls.enabled=!0},At.zoom.reEnableDelay)}animatePixelSize(e,t,a){this.pixelSizeAnim={from:e,to:t,duration:a,elapsed:0}}updatePixelSize(e){if(!this.pixelSizeAnim)return;this.pixelSizeAnim.elapsed+=e;const t=Math.min(this.pixelSizeAnim.elapsed/this.pixelSizeAnim.duration,1),a=t*t*(3-2*t);this.pixelPass.pixelSize=Ms.lerp(this.pixelSizeAnim.from,this.pixelSizeAnim.to,a),t>=1&&(this.pixelSizeAnim=null)}onResize(){const e=window.innerWidth,t=window.innerHeight;this.pixelCamera.onResize(e,t),this.renderer.setSize(e,t)}downgradeTier(){const e=["high","medium","low"],t=e.indexOf(this.qualityTier);t>=e.length-1||(this.tierDowngraded=!0,this.qualityTier=e[t+1],this.qualitySettings=Ux(this.qualityTier),console.warn(`[PixelScene] Performance below 30 FPS — downgrading to "${this.qualityTier}" tier`),this.applyQualitySettings(),this.pixelPass.edgeDetectionEnabled=this.qualitySettings.edgeDetectionEnabled,this.pixelPass.bloomEnabled=this.qualitySettings.bloomEnabled)}applyQualitySettings(){const e=this.qualitySettings;this.renderer.shadowMap.type=e.shadowMapType,this.scene.traverse(t=>{t instanceof Cl&&t.shadow&&(t.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),t.shadow.map&&(t.shadow.map.dispose(),t.shadow.map=null))})}setupScene(){this.scene=new oE}setupRenderer(e){this.renderer=new KR({canvas:e,antialias:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kp,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(1)}setupCamera(e){this.pixelCamera=new m2(e,At.camera)}setupPixelPass(){this.pixelPass=new l2(At.render.pixelResolution,this.scene,this.pixelCamera.camera,{pixelSize:At.render.pixelSize,toonSoftness:At.render.toonSoftness,toonSteps:At.render.toonSteps,bloomIntensity:At.render.bloom.intensity,bloomThreshold:At.render.bloom.threshold,edgeDetectionEnabled:this.qualitySettings.edgeDetectionEnabled,bloomEnabled:this.qualitySettings.bloomEnabled}),this.pixelPass.renderToScreen=!0}setupShape(){const{crystal:e,colors:t}=At;this.shape=new Mn(new mm(e.radius),new yE({color:t.crystal,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,shininess:e.shininess,specular:e.specular})),this.shape.receiveShadow=!0,this.shape.castShadow=!0,this.scene.add(this.shape)}animateShape(e){const{animation:t,baseY:a,light:r}=At.crystal,l=this.zoomBlend,u=Math.sin(this.clock.elapsedTime*t.cycleSpeed)*.5+.5,h=Ms.smoothstep(u,.1,.9),p=Ms.lerp(t.slowSpin,t.fastSpin,h),d=Ms.lerp(p,p*t.zoomedSpinDamping,l);this.shape.rotation.y+=d*e,this.shape.rotation.x+=d*t.rotationX*e,this.shape.rotation.z+=d*t.rotationZ*e;const g=Ms.lerp(t.bounceHeight,t.zoomedBounceHeight,l);this.shape.position.y=a+Math.sin(this.clock.elapsedTime*t.bounceSpeed)*g;const _=Math.max(this.shape.position.y-At.ground.y,.1);this.shapeLight.position.copy(this.shape.position);const v=Math.sin(this.clock.elapsedTime*At.crystal.glow.pulseSpeed)*.5+.5,b=1-(S2(this.shape.position.x,this.shape.position.z,this.clock.elapsedTime)-.55)/.45,{glow:T}=At.crystal,M=this.shape.material;M.emissiveIntensity=At.crystal.emissiveIntensity*(1+v*T.pulseAmount)*(1+b*T.shadowEmissiveBoost);const y=Ms.clamp(1/_*r.intensityScale,r.intensityMin,r.intensityMax);this.shapeLight.intensity=y*(1+b*r.shadowBoost)}setupGround(){const{ground:e,colors:t,grass:a}=At,r=new vo(e.size,e.size),l=new g2({color1:t.ground1,color2:t.ground2,color3:t.ground3,noiseScale:a.noiseScale,octaves:a.octaves,persistence:a.persistence});this.ground=new Mn(r,l),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=e.y,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.setupGrass()}setupGrass(){const{grass:e,colors:t,ground:a}=At;this.grassSystem=new f2({count:this.qualitySettings.grassCount,areaSize:e.areaSize,groundY:a.y,grassTexturePath:e.texturePath,accentGrassTexturePath:e.accentTexturePath,accentGrassRatio:e.accentRatio,minHeight:e.minHeight,maxHeight:e.maxHeight,windStrength:e.windStrength,windDirection:e.windDirection,groundMesh:this.ground,groundColors:[t.ground1,t.ground2,t.ground3],accentColor:t.grassAccent}),this.grassSystem.getMeshes().forEach(l=>this.scene.add(l))}setupSceneLights(){const{lighting:e}=At;this.scene.add(new HE(e.ambient.color,e.ambient.intensity));const t=new Cl(e.key.color,e.key.intensity);t.position.copy(e.key.position),t.castShadow=!0,t.shadow.camera.left=-80,t.shadow.camera.right=e.key.shadow.bounds,t.shadow.camera.top=e.key.shadow.bounds,t.shadow.camera.bottom=-80,t.shadow.camera.near=e.key.shadow.near,t.shadow.camera.far=e.key.shadow.far,t.shadow.mapSize.width=this.qualitySettings.shadowMapSize,t.shadow.mapSize.height=this.qualitySettings.shadowMapSize,t.shadow.bias=e.key.shadow.bias,t.shadow.normalBias=.5,this.scene.add(t);const a=new Cl(e.fill.color,e.fill.intensity);a.position.copy(e.fill.position),this.scene.add(a);const r=new Cl(e.rim.color,e.rim.intensity);r.position.copy(e.rim.position),this.scene.add(r)}setupShapeLights(){const{shape:e}=At.lighting;this.shapeLight=new dy(e.color,e.intensity,e.distance,e.decay),this.shapeLight.position.copy(this.shape.position),this.scene.add(this.shapeLight)}async setupPillar(){const{pillar:e}=At,t=new Es;await t.load(e.modelPath);const a=t.getChildModel(e.childIndex);Es.convertToToonMaterial(a,At.colors.pillar),a.castShadow=!0,a.receiveShadow=!0,a.position.copy(e.position),a.scale.setScalar(e.scale),a.rotation.y=e.rotationY,this.pillar=a,this.scene.add(a)}async setupRocks(){const{rocks:e,ground:t}=At,a=new Es;await a.load(e.modelPath);const r=a.getChildModel(0);Es.setMaterial(r,new ju({color:e.color})),this.scatterInRing([r],{count:e.count,radius:e.radius,radiusJitter:e.radiusJitter,angleJitter:e.angleJitter,scaleMin:e.scaleMin,scaleMax:e.scaleMax,groundY:t.y})}async setupTrees(){const{trees:e,ground:t}=At,a=new Es;await a.load(e.modelPath);const r=a.getBakedMeshes(2,e.meshCount);for(const l of r)Es.applyToMaterials(l,u=>{u.side=Di,u.transparent=!1,u.opacity=1,u.map&&(u.map.premultiplyAlpha=!1),u.emissive&&(u.emissiveMap=u.map,u.emissive.set(16777215),u.emissiveIntensity=.6),u.needsUpdate=!0});this.scatterInRing(r,{count:this.qualitySettings.treeCount,radius:e.radius,radiusJitter:e.radiusJitter,scaleMin:e.scaleMin,scaleMax:e.scaleMax,groundY:t.y,minSpacing:3,castShadow:this.qualitySettings.treesCastShadow})}scatterInRing(e,t){const a=Math.PI*(3-Math.sqrt(5)),r=[];let l=0;for(let u=0;u<t.count&&l<t.count*3;l++){const p=(t.minSpacing?u*a:u/t.count*Math.PI*2)+(Math.random()-.5)*(t.angleJitter??.4),d=t.radius+(Math.random()-.5)*2*t.radiusJitter,g=Math.cos(p)*d,_=Math.sin(p)*d;if(t.minSpacing&&r.some(T=>(T.x-g)**2+(T.z-_)**2<t.minSpacing**2))continue;r.push({x:g,z:_});const v=e[u%e.length].clone(),x=t.castShadow!==!1;v.traverse(b=>{b.castShadow=x,b.receiveShadow=!0}),v.position.set(g,t.groundY,_),v.scale.setScalar(t.scaleMin+Math.random()*(t.scaleMax-t.scaleMin)),v.rotation.y=Math.random()*Math.PI*2,this.scene.add(v),u++}}setupLightning(){const{lightning:e,colors:t}=At;this.lightningSystem=new d2({boltsPerSecond:e.boltsPerSecond,boltLifetime:e.boltLifetime,maxBolts:e.maxBolts,color:t.bolt,glowColor:t.boltGlow,boltLength:e.boltLength,segmentsPerBolt:e.segmentsPerBolt,branchProbability:e.branchProbability,animationSpeed:e.animationSpeed,targets:e.targets,restrikeProbability:e.restrikeProbability,restrikeInterval:e.restrikeInterval}),this.scene.add(this.lightningSystem.getGroup())}}const b2=[{page:"home",label:"Home"},{page:"about",label:"About"}];function E2({currentPage:o,onNavigate:e}){return gt.jsxs("nav",{className:"nav",children:[gt.jsx("span",{className:"nav-title",children:"Edwyn McMillan"}),gt.jsx("ul",{className:"nav-links",children:b2.map(({page:t,label:a})=>gt.jsx("li",{children:gt.jsx("button",{className:`nav-link ${o===t?"nav-link--active":""}`,onClick:()=>e(t),children:a})},t))})]})}function T2({visible:o}){const[e,t]=mi.useState(!1),[a,r]=mi.useState(!1),l=mi.useRef(null);return mi.useEffect(()=>{if(o)t(!0),requestAnimationFrame(()=>r(!0));else if(e){r(!1);const u=l.current;if(u){const h=p=>{p.target===u&&p.propertyName==="transform"&&(u.removeEventListener("transitionend",h),t(!1))};u.addEventListener("transitionend",h)}else t(!1)}},[o,e]),e?gt.jsx("div",{className:"about-overlay",children:gt.jsx("div",{ref:l,className:`about-content ${a?"about-content--open":""}`,children:gt.jsxs("div",{className:"about-inner",children:[gt.jsxs("div",{className:"about-section",children:[gt.jsx("h2",{children:"ABOUT"}),gt.jsx("p",{children:"I am a Fullstack engineer building production software in the aerospace industry. I enjoy creative coding in my spare time."})]}),gt.jsxs("div",{className:"about-section",children:[gt.jsx("h2",{children:"SKILLS"}),gt.jsxs("ul",{children:[gt.jsx("li",{children:"TypeScript / JavaScript"}),gt.jsx("li",{children:"Angular / React / Three.js"}),gt.jsx("li",{children:"Node.js / Nest.js / Microservices"}),gt.jsx("li",{children:"Docker / Kubernetes / CI/CD"}),gt.jsx("li",{children:"PostgreSQL / SQL"})]})]}),gt.jsxs("div",{className:"about-section about-section--bordered",children:[gt.jsx("h2",{children:"LINKS"}),gt.jsxs("ul",{children:[gt.jsx("li",{children:gt.jsx("a",{href:"https://www.linkedin.com/in/edwyn-mcmillan",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),gt.jsx("li",{children:gt.jsx("a",{href:"https://github.com/edwyn-mcmillan",target:"_blank",rel:"noreferrer",children:"GitHub"})})]})]})]})})}):null}function A2({visible:o}){const[e,t]=mi.useState(!1),[a,r]=mi.useState(!1);return mi.useEffect(()=>{if(!o){r(!1);return}t(!0);const l=requestAnimationFrame(()=>r(!0)),u=setTimeout(()=>r(!1),5e3);return()=>{cancelAnimationFrame(l),clearTimeout(u)}},[o]),mi.useEffect(()=>{if(!a)return;const l=()=>r(!1);return window.addEventListener("pointerdown",l),()=>window.removeEventListener("pointerdown",l)},[a]),mi.useEffect(()=>{if(!a&&e){const l=setTimeout(()=>t(!1),600);return()=>clearTimeout(l)}},[a,e]),e?gt.jsx("div",{className:`pan-hint ${a?"pan-hint--visible":""}`,children:gt.jsxs("svg",{className:"pan-hint__icon",width:"28",height:"40",viewBox:"0 0 28 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[gt.jsx("rect",{x:"1",y:"1",width:"26",height:"38",rx:"13",stroke:"currentColor",strokeWidth:"1.5"}),gt.jsx("line",{x1:"14",y1:"8",x2:"14",y2:"16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}):null}function w2(){const o=mi.useRef(null),e=mi.useRef(null),[t,a]=mi.useState("home");mi.useEffect(()=>{if(!o.current)return;const l=new M2(o.current);return l.start(),e.current=l,()=>{l.dispose(),e.current=null}},[]);const r=l=>{const u=e.current;u&&(l==="about"?(u.zoomToShape(),setTimeout(()=>a("about"),1200)):l==="home"&&(u.zoomOut(),a("home")))};return gt.jsxs(gt.Fragment,{children:[gt.jsx("canvas",{ref:o,style:{width:"100dvw",height:"100dvh",display:"block"}}),gt.jsx(E2,{currentPage:t,onNavigate:r}),gt.jsx(T2,{visible:t==="about"}),gt.jsx(A2,{visible:t==="home"})]})}function R2(){return gt.jsx(w2,{})}BM.createRoot(document.getElementById("root")).render(gt.jsx(R2,{}));
