(this.webpackJsonpLivedune=this.webpackJsonpLivedune||[]).push([[0],{43:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return d})),n.d(r,"c",(function(){return v}));var t=n(51),o=n(44),a=n(47),i=function(e){var r=e.init,n=e.domain;return e.existing||(n?n.store(r):Object(o.e)(r))},u=function(e){var r=e.domain;return e.existing||(r?r.event():Object(o.d)())};function f(e,r,n){var t,a,f,c,s,l,d,v,p,m,h,g="function"==typeof r.init?r.init():r.init,y=i({domain:n,existing:null===(t=r.units)||void 0===t?void 0:t.$value,init:g}),b=i({domain:n,existing:null===(a=r.units)||void 0===a?void 0:a.$errors,init:[]}),k=b.map((function(e){return e[0]?e[0]:null})),w=y.map((function(e){return e!==g})),j=i({domain:n,existing:null===(f=r.units)||void 0===f?void 0:f.$isTouched,init:!1}),O=u({domain:n,existing:null===(c=r.units)||void 0===c?void 0:c.onChange}),x=u({domain:n,existing:null===(s=r.units)||void 0===s?void 0:s.onBlur}),E=u({domain:n,existing:null===(l=r.units)||void 0===l?void 0:l.changed}),S=u({domain:n,existing:null===(d=r.units)||void 0===d?void 0:d.addError}),A=u({domain:n,existing:null===(v=r.units)||void 0===v?void 0:v.validate}),V=u({domain:n,existing:null===(p=r.units)||void 0===p?void 0:p.resetErrors}),$=u({domain:n,existing:null===(m=r.units)||void 0===m?void 0:m.resetValue}),T=u({domain:n,existing:null===(h=r.units)||void 0===h?void 0:h.reset}),q=k.map((function(e){return null===e}));return{changed:E,name:e,$value:y,$errors:b,$firstError:k,$isValid:q,$isDirty:w,$isTouched:j,$touched:j,$field:Object(o.b)({value:y,errors:b,firstError:k,isValid:q,isDirty:w,isTouched:j}),onChange:O,onBlur:x,addError:S,validate:A,set:O,reset:T,resetErrors:V,resetValue:$,filter:r.filter}}function c(e){var r,n=e.$form,a=e.validateFormEvent,i=e.submitEvent,u=e.resetFormEvent,f=e.resetValues,c=e.field,s=e.rules,l=e.resetErrors,d=e.formValidationEvents,v=e.fieldValidationEvents,p=c.$value,m=c.$errors,h=c.onBlur,g=c.changed,y=c.addError,b=c.validate,k=c.resetErrors,w=c.resetValue,j=c.reset,O="function"==typeof s?Object(o.e)([]):Object(o.b)(s.map((function(e){return e.source||Object(o.e)(null)}))),x=(r=s,function(e,n,t){for(var o=[],a="function"==typeof r?r(e,n):r,i=0;i<a.length;i++){var u=a[i],f=t?t[i]:null,c=u.validator(e,n,f);"boolean"!=typeof c||c||o.push({rule:u.name,errorText:u.errorText,value:e}),"object"!=typeof c||c.isValid||o.push({rule:u.name,errorText:c.errorText,value:e})}return o}),E=[].concat(Object(t.a)(d),Object(t.a)(v)),S=[];if(E.includes("submit")){var A=Object(o.k)({source:Object(o.b)({fieldValue:p,form:n,rulesSources:O}),clock:i});S.push(A)}E.includes("blur")&&S.push(Object(o.k)({source:Object(o.b)({fieldValue:p,form:n,rulesSources:O}),clock:h})),E.includes("change")&&S.push(Object(o.k)({source:Object(o.b)({fieldValue:p,form:n,rulesSources:O}),clock:Object(o.i)([g,w,f])})),S.push(Object(o.k)({source:Object(o.b)({fieldValue:p,form:n,rulesSources:O}),clock:b})),S.push(Object(o.k)({source:Object(o.b)({fieldValue:p,form:n,rulesSources:O}),clock:a}));var V=Object(o.k)({source:p,clock:y,fn:function(e,r){return{rule:r.rule,value:e,errorText:r.errorText}}});m.on(S,(function(e,r){var n=r.form,t=r.fieldValue,o=r.rulesSources;return x(t,n,o)})).on(V,(function(e,r){return[r].concat(Object(t.a)(e))})).reset(k,u,j,l),E.includes("change")||m.reset(g)}function s(e,r,n,t,a){var i=e.$value,u=e.$touched,f=e.onChange,c=e.changed,s=e.name,l=e.reset,d=e.resetValue,v=e.filter;u.on(c,(function(){return!0})).reset(l,n,t),Object(o.f)({source:f,filter:v||function(){return!0},target:c}),i.on(c,(function(e,r){return r})).on(r,(function(e,r){return r.hasOwnProperty(s)?r[s]:e})).reset(l,d,a,n)}function l(e){var r=e.filter,n=e.domain,t=e.fields,a=e.validateOn,i=e.units,l={},d=[],v=[];for(var p in t)if(t.hasOwnProperty(p)){var m=f(p,t[p],n);l[p]=m,d.push(m.$isDirty),v.push(m.$touched)}var h=function(e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n].$value);return Object(o.b)(r)}(l),g=function(e){var r=[];for(var n in e)if(e.hasOwnProperty(n)){var t=e[n].$firstError;r.push(t)}return Object(o.b)(r).map((function(e){return e.every((function(e){return null===e}))}))}(l),y=r?Object(o.b)(g,r,(function(e,r){return e&&r})):g,b=Object(o.b)(d).map((function(e){return e.some(Boolean)})),k=Object(o.b)(v).map((function(e){return e.some(Boolean)})),w=Object(o.b)({isValid:g,isDirty:b,touched:k}),j=u({domain:n,existing:null==i?void 0:i.validate}),O=u({domain:n,existing:null==i?void 0:i.submit}),x=u({domain:n,existing:null==i?void 0:i.formValidated}),E=u({domain:n,existing:null==i?void 0:i.setForm}),S=u({domain:n,existing:null==i?void 0:i.reset}),A=u({domain:n,existing:null==i?void 0:i.resetValues}),V=u({domain:n,existing:null==i?void 0:i.resetErrors}),$=u({domain:n,existing:null==i?void 0:i.resetTouched}),T=Object(o.k)(h,O),q=Object(o.k)(h,j);for(var D in l)if(l.hasOwnProperty(D)){var N=t[D],F=l[D];s(F,E,S,$,A),N.rules&&c({$form:h,rules:N.rules,submitEvent:O,resetFormEvent:S,resetValues:A,resetErrors:V,validateFormEvent:j,field:F,formValidationEvents:a||["submit"],fieldValidationEvents:N.validateOn?N.validateOn:[]})}return Object(o.f)({source:T,filter:y,target:x}),Object(o.f)({source:q,filter:y,target:x}),{fields:l,$values:h,$eachValid:g,$isValid:g,$isDirty:b,$touched:k,$meta:w,submit:O,validate:j,resetTouched:$,reset:S,resetValues:A,resetErrors:V,setForm:E,set:E,formValidated:x}}function d(e){var r=Object(a.a)(e.$field),n=r.value,t=r.errors,o=r.firstError,i=r.isValid,u=r.isDirty,f=r.isTouched;return{name:e.name,value:n,errors:t,firstError:o,isValid:i,isDirty:u,touched:f,isTouched:f,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:function(){return null!==o},errorText:function(e){return o?e&&e[o.rule]?e[o.rule]:o.errorText||"":""}}}function v(e){var r={},n={};for(var t in e.fields)if(e.fields.hasOwnProperty(t)){var o=d(e.fields[t]);r[t]=o,n[t]=o.value}var i=Object(a.a)(e.$meta),u=i.isValid,f=i.isDirty,c=i.touched;return{fields:r,values:n,hasError:function(e){return e?!!r[e]&&Boolean(r[e].firstError):!u},eachValid:u,isValid:u,isDirty:f,isTouched:c,touched:c,errors:function(e){return r[e]?r[e].errors:[]},error:function(e){return r[e]?r[e].firstError:null},reset:e.reset,errorText:function(e,n){var t=r[e];return t&&t.firstError?n&&n[t.firstError.rule]?n[t.firstError.rule]:t.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}},44:function(e,r,n){"use strict";n.d(r,"a",(function(){return Qe})),n.d(r,"b",(function(){return y})),n.d(r,"c",(function(){return k})),n.d(r,"d",(function(){return h})),n.d(r,"e",(function(){return g})),n.d(r,"f",(function(){return O})),n.d(r,"g",(function(){return C})),n.d(r,"h",(function(){return l})),n.d(r,"i",(function(){return w})),n.d(r,"j",(function(){return x})),n.d(r,"k",(function(){return j}));var t=n(11);var o=n(50);function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(f){o=!0,a=f}finally{try{t||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,r)||Object(o.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(51);function u(e,r){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(o.a)(e))||r&&e&&"number"===typeof e.length){n&&(e=n);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){f=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(f)throw i}}}}function f(e,r,n,t){(I(e)||R(e))&&("family"in e||"graphite"in e)||P("".concat(r,": expect ").concat(n," to be a unit (store, event or effect)").concat(t))}function c(e,r,n){if(Array.isArray(e))for(var t=0;t<e.length;t++)f(e[t],r,"".concat(t," item of ").concat(n),"");else f(e,r,n," or array of units")}function s(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.node,n=void 0===r?[]:r,t=e.from,o=e.source,a=e.parent,i=void 0===a?t||o:a,u=e.to,f=e.target,c=e.child,s=void 0===c?u||f:c,l=e.scope,d=void 0===l?{}:l,v=e.meta,p=void 0===v?{}:v,m=e.family,h=void 0===m?{type:"regular"}:m,g=e.regional,y=ke(i),b=ke(h.links),k=ke(h.owners),w=[],j={},O=0;O<n.length;O++){var x=n[O];x&&(w.push(x),we(x,j))}for(var E={id:L(),seq:w,next:ke(s),meta:p,scope:d,family:{type:h.type||"crosslink",links:b,owners:k},reg:j},S=0;S<b.length;S++)ue(b[S]).push(E);for(var A=0;A<k.length;A++)fe(k[A]).push(E);for(var V=0;V<y.length;V++)y[V].next.push(E);return g&&ge&&he(de(ge),[E]),E}function l(e,r,n){var t=Ce,o=null,a=Se;if(e.target&&(r=e.params,n=e.defer,t="page"in e?e.page:t,e.stack&&(o=e.stack),a=me(e)||a,e=e.target),a&&Se&&a!==Se&&(Se=null),Array.isArray(e))for(var i=0;i<e.length;i++)$e("pure",t,ie(e[i]),o,r[i],a);else $e("pure",t,ie(e),o,r,a);if(!n||Ne){var u,f,c,s,l,d,v={isRoot:Ne,currentPage:Ce,forkPage:Se,isWatch:Fe};Ne=0;e:for(;s=Ve();){var p=s,m=p.idx,h=p.stack,g=p.type;c=h.node,Ce=l=h.page,Se=me(h),d=(l||c).reg;var y={fail:0,scope:c.scope};u=f=0;for(var b=m;b<c.seq.length&&!u;b++){var k=c.seq[b],w=k.data;switch(k.type){case"barrier":var j=w.barrierID;l&&(j="".concat(l.fullID,"_").concat(j));var O=w.priority;if(b!==m||g!==O){De.has(j)||(De.add(j),Te(b,h,O,j));continue e}De.delete(j);break;case"mov":var x=void 0;switch(w.from){case"stack":x=de(h);break;case"a":case"b":x=h[w.from];break;case"value":x=w.store;break;case S:d[w.store.id]||(h.page=l=Re(l,w.store.id),d=l?l.reg:c.reg),x=ne(d[w.store.id])}switch(w.to){case"stack":h.value=x;break;case"a":case"b":h[w.to]=x;break;case S:Be(l,c,w.target.id).current=x}break;case"check":switch(w.type){case"defined":f=void 0===de(h);break;case"changed":f=de(h)===ne(Be(l,c,w.store.id))}break;case"filter":f=!Me(y,w,h);break;case"run":if(b!==m||"effect"!==g){Te(b,h,"effect");continue e}case"compute":Fe="watch"===c.meta.op,h.value=Me(y,w,h),Fe=v.isWatch}u=y.fail||f}if(!u)for(var E=0;E<c.next.length;E++)$e("child",l,c.next[E],h,de(h),me(h))}Ne=v.isRoot,Ce=v.currentPage,Se=me(v)}}function d(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"combine",n=r+"(",t="",o=0;for(var a in e){var i=e[a];if(null!=i&&(n+=t,n+=$(i)?i.compositeName.fullName:i.toString()),25===(o+=1))break;t=", "}return n+=")"}function v(e,r){var n,t,o,a=e;return r?(o=r.compositeName,0===e.length?(n=o.path,t=o.fullName):(n=o.path.concat([e]),t=0===o.fullName.length?e:o.fullName+"/"+e)):(n=0===e.length?[]:[e],t=e),{shortName:a,fullName:t,path:n}}function p(e,r){for(var n in e)r(e[n],n)}function m(e,r){e.forEach(r)}function h(e,r){var n=function e(r){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return Ce?function(e,r,n,t){var o=Ce,a=null;if(r)for(a=Ce;a&&a.template!==r;)a=pe(a);Ie(a);var i=e.create(n,t);return Ie(o),i}(e,t,r,o):e.create(r,o)};n.graphite=s({meta:tr("event",n,r,e),regional:1}),n.create=function(e){return l(Se?Se.find(n):n,e),e},n.watch=H(er,n),n.map=function(e){var r,t;I(e)&&(r=e,t=e.name,e=e.fn);var o=h(_e(n,t),r);return ar(n,o,V,e),o},n.filter=function(e){return ir(n,"filter",e.fn?e:e.fn,[Y({fn:ae})])},n.filterMap=function(e){return ir(n,"filterMap",e,[X({fn:ae}),Q.defined()])},n.prepend=function(e){var r=h("* \u2192 "+n.shortName,{parent:pe(n)}),t=ye();return t&&ie(r).seq.push(t.upward),ar(r,n,"prepend",e),nr(n,r),r};var t=ye();return n}function g(e,r){function n(e,r){d.off(e),ve(d).set(e,Xe(ur(e,d,"on",1,r,p)))}var t=re(e),o=re(e),a=or("updates"),i=ye();t.after=[{type:"copy",to:o}],i&&i.plain.push(t,o);var f=t.id,d={subscribers:new Map,updates:a,defaultState:e,stateRef:t,getState:function(){var e,r=t;if(Ce){for(var n=Ce;n&&!n.reg[f];)n=pe(n);n&&(e=n)}return!e&&Se&&Se.reg[f]&&(e=Se),e&&(r=e.reg[f]),ne(r)},setState:function(e){var r;Se&&(r=Se.nodeMap[ie(d).id]),r||(r=d),l({target:r,params:e,defer:1})},reset:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(var t=0,o=r;t<o.length;t++){var a=o[t];d.on(a,(function(){return d.defaultState}))}return d},on:function(e,r){if(c(e,".on","first argument"),Array.isArray(e)){var t,o=u(e);try{for(o.s();!(t=o.n()).done;){n(t.value,r)}}catch(a){o.e(a)}finally{o.f()}}else n(e,r);return d},off:function(e){var r=ve(d).get(e);return r&&(r(),ve(d).delete(e)),d},map:function(e,r){var n,o,a;I(e)&&(n=e,o=e.name,r=e.firstState,e=e.fn);var i=d.getState(),u=ye();u?a=null:void 0!==i&&(a=e(i,r));var f=g(a,{name:_e(d,o),config:n,strict:0}),c=ur(d,f,V,0,e);return ce(f).before=[{type:V,fn:e,from:t}],u&&(Je(u.plain,t)||Je(c.seq,u.loader)||c.seq.unshift(u.loader)),f},watch:function(e,r){if(!r||!$(e)){var n=er(d,e),o=ye();return o?o.watch.push({of:t,fn:e}):e(d.getState()),n}return R(r)||P("second argument should be a function"),e.watch((function(e){return r(d.getState(),e)}))}},v=tr(S,d,r),p=d.defaultConfig.updateFilter;return d.graphite=s({scope:{state:t},node:[Q.defined(),Q.changed({store:o}),p&&K({store:o,to:"a"}),p&&Y({fn:function(e,r,n){var t=n.a;return p(e,t)}}),ee({store:t}),ee({store:o})],child:a,meta:v,regional:1}),Ae&&void 0===e&&P("current state can't be undefined, use null instead"),he(d,[a]),d}function y(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t,o,a;Le(r[0],(function(e,n){a=e,r=n}));var i,u,f=r[r.length-1];if(R(f)?(o=r.slice(0,-1),t=f):o=r,1===o.length){var c=o[0];q(c)||(i=c,u=1)}return u||(i=o,t&&(t=fr(t))),I(i)||P("shape should be an object"),cr(Array.isArray(i),i,a,t)}function b(){var e={};return e.req=new Promise((function(r,n){e.rs=r,e.rj=n})),e.req.catch((function(){})),e}function k(e,r){var n=h(e,r),t=n.defaultConfig.handler||function(){return P("no handler used in ".concat(n.getType()))},o=ie(n);o.meta.onCopy=["runner"],o.meta.unit=n.kind="effect",n.use=function(e){return R(e)||P(".use argument should be a function"),t=e,n};var a=n.finally=or("finally"),i=n.done=a.filterMap({named:"done",fn:function(e){var r=e.status,n=e.params,t=e.result;if("done"===r)return{params:n,result:t}}}),u=n.fail=a.filterMap({named:"fail",fn:function(e){var r=e.status,n=e.params,t=e.error;if("fail"===r)return{params:n,error:t}}}),f=n.doneData=i.map({named:"doneData",fn:function(e){return e.result}}),c=n.failData=u.map({named:"failData",fn:function(e){return e.error}}),d=s({scope:{getHandler:n.use.getCurrent=function(){return t},finally:a},node:[Z({fn:function(e,r,n){var t,o=e.params,a=e.req,i=r.finally,u=r.getHandler,f=sr({params:o,req:a,ok:1,anyway:i,stack:n}),c=sr({params:o,req:a,ok:0,anyway:i,stack:n});try{t=u()(o)}catch(o){return void c(o)}I(t)&&R(t.then)?t.then(f,c):f(t)}})],meta:{op:"fx",fx:"runner",onCopy:["finally"]}});o.scope.runner=d,o.seq.push(X({fn:function(e,r,n){return pe(n)?{params:e,req:{rs:function(e){},rj:function(e){}}}:e}}),Z({fn:function(e,r,n){return l({target:r.runner,params:e,defer:1,forkPage:me(n)}),e.params}})),n.create=function(e){var r=b(),t={params:e,req:r};if(Se){if(!Fe){var o=Se;r.req.finally((function(){Pe(o)})).catch((function(){}))}l(Se.find(n),t)}else l(n,t);return r.req};var v=n.inFlight=g(0,{named:"inFlight"}).on(n,(function(e){return e+1})).on(a,(function(e){return e-1})),p=n.pending=v.map({fn:function(e){return e>0},named:"pending"});return he(n,[a,i,u,f,c,p,v,d]),n}function w(e,r){var n=h(r||d(e,"merge"));return c(e,"merge","first argument"),Ze({from:e,to:n,meta:{op:"merge"}}),n}function j(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t,o,i,u,f=He(r),l=a(f,2),d=a(l[0],3),v=d[0],p=d[1],b=d[2],k=l[1];void 0===p&&I(v)&&function(e){var r=0;return m(dr,(function(n){n in e&&(null==e[n]&&P("sample: ".concat(n," should be defined")),r=1)})),r}(v)&&(p=v.clock,b=v.fn,u=v.greedy,t=v.target,o=v.name,i=v.sid,v=v.source);var j=1;void 0===v&&(c(p,"sample","clock"),Array.isArray(p)&&(p=w(p)),v=p,j=0),j&&!$(v)&&(v=y(v)),void 0===p&&(p=v),c(p,"sample","clock"),o=k||o||v.shortName;var O=ye(),x=!!t;t||(q(v)&&q(p)?t=g(b?b(ne(ce(v)),ne(ce(p))):ne(ce(v)),{name:o,sid:i}):(t=h(o),O&&ie(t).seq.push(O.loader)));var E=x&&$(t)&&ie(t).meta.nativeTemplate;if(q(v)){var A=ce(v);he(v,[Ye(p,t,{scope:{fn:b,targetTemplate:E},node:[O&&O.loader,!u&&G({priority:"sampler"}),K({store:A,to:b?"a":"stack"}),b&&X({fn:oe}),O&&x&&O.upward],meta:{op:"sample",sample:S}})]),O&&(Je(O.plain,A)||Je(O.closure,A)||O.closure.push(A))}else{var V=re(0),T=re(),D=re();O&&O.plain.push(V,T,D),s({parent:v,node:[ee({store:T}),K({from:"value",store:1,target:V})],family:{owners:[v,t,p],links:t},meta:{op:"sample",sample:"source"},regional:1}),he(v,[Ye(p,t,{scope:{fn:b,targetTemplate:E},node:[O&&O.loader,ee({store:D}),K({store:V}),Y({fn:function(e){return e}}),!u&&G({priority:"sampler"}),K({store:T}),K({store:D,to:"a"}),b&&X({fn:te}),O&&x&&O.upward],meta:{op:"sample",sample:"clock"}})])}return t}function O(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t={op:"guard"},o="guard",u=He(r),f=a(u,2),l=a(f[0],2),d=l[0],v=l[1],p=f[1];p&&(t.config=p,p.name&&(o=p.name)),v||(d=(v=d).source);var m=v,g=m.filter,b=m.greedy,k=m.clock,O=m.name,x=void 0===O?o:O,E=v.target||h(x,t.config),S=$(g),A=1;return void 0===d&&(c(k,"guard","clock"),Array.isArray(k)&&(k=w(k)),d=k,A=0),A&&!$(d)&&(d=y(d)),k&&(c(k,"guard","clock"),d=j({source:d,clock:k,greedy:b,fn:S?null:function(e,r){return{source:e,clock:r}}})),c(E,"guard","target"),S?j({source:g,clock:d,target:s({node:[Y({fn:function(e){return e.guard}}),X({fn:function(e){return e.data}})],child:E,meta:t,family:{owners:[d,g,E].concat(Object(i.a)([].concat(k||[]))),links:E},regional:1}),fn:function(e,r){return{guard:e,data:r}},greedy:b,name:x}):(R(g)||P("`filter` should be function or unit"),Ye(d,E,{scope:{fn:g},node:k?[Y({fn:function(e,r){var n=e.source,t=e.clock;return(0,r.fn)(n,t)}}),X({fn:function(e){return e.source}})]:[Y({fn:ae})],meta:t})),E}function x(e,r,n){if(q(e))return e;if($(e)){var t,o=pe(e);return D(e)&&(t=g(r,{parent:o,name:e.shortName,"\u0254":n}).on(e,(function(e,r){return r}))),N(e)&&(t=g(r,{parent:o,name:e.shortName,"\u0254":n}).on(e.done,(function(e,r){return r.result}))),o&&o.hooks.store(t),t}var a=Array.isArray(e)?[]:{};return p(e,(function(e,r){a[r]=q(e)?e:g(e,{name:r})})),a}for(var E="undefined"!=typeof Symbol&&Symbol.observable||"@@observable",S="store",A="effect",V="map",$=function(e){return(R(e)||I(e))&&"kind"in e},T=function(e){return function(r){return $(r)&&r.kind===e}},q=T(S),D=T("event"),N=T(A),F=T("domain"),C={__proto__:null,unit:$,store:q,event:D,effect:N,domain:F},P=function(e){throw Error(e)},I=function(e){return"object"==typeof e&&null!==e},R=function(e){return"function"==typeof e},B=function(e){I(e)||R(e)||P("expect first argument be an object")},M=function(){var e=0;return function(){return(++e).toString(36)}},z=M(),_=M(),L=M(),H=function(e,r){return e.bind(null,r)},J=function(e,r,n){return e.bind(null,r,n)},W=function(e,r,n){return{id:_(),type:e,data:n,hasRef:r}},U=0,G=function(e){var r=e.priority;return W("barrier",0,{barrierID:++U,priority:void 0===r?"barrier":r})},K=function(e){var r=e.from,n=void 0===r?S:r,t=e.store,o=e.target,a=e.to;return W("mov",n===S,{from:n,store:t,to:void 0===a?o?S:"stack":a,target:o})},Q={defined:function(){return W("check",0,{type:"defined"})},changed:function(e){var r=e.store;return W("check",1,{type:"changed",store:r})}},X=J(W,"compute",0),Y=J(W,"filter",0),Z=J(W,"run",0),ee=function(e){var r=e.store;return K({from:"stack",target:r})},re=function(e){return{id:_(),current:e}},ne=function(e){return e.current},te=function(e,r,n){return(0,r.fn)(e,n.a)},oe=function(e,r,n){return(0,r.fn)(n.a,e)},ae=function(e,r){return(0,r.fn)(e)},ie=function(e){return e.graphite||e},ue=function(e){return e.family.owners},fe=function(e){return e.family.links},ce=function(e){return e.stateRef},se=function(e){return e.config},le=function(e){return e.\u0254},de=function(e){return e.value},ve=function(e){return e.subscribers},pe=function(e){return e.parent},me=function(e){return e.forkPage},he=function(e,r){for(var n=ie(e),t=0;t<r.length;t++){var o=ie(r[t]);"domain"!==n.family.type&&(o.family.type="crosslink"),ue(o).push(n),fe(n).push(o)}},ge=null,ye=function(){return ge&&ge.template},be=function(e){return e&&ge&&ge.sidRoot&&(e="".concat(ge.sidRoot,"\u0254").concat(e)),e},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[];if(Array.isArray(e))for(var n=0;n<e.length;n++)Array.isArray(e[n])?r.push.apply(r,Object(i.a)(e[n])):r.push(e[n]);else r.push(e);return r.map(ie)},we=function(e,r){var n,t=e.hasRef,o=e.type,a=e.data;t&&(r[(n=a.store).id]=n),"mov"===o&&a.to===S&&(r[(n=a.target).id]=n)},je=null,Oe=function e(r,n){if(!r)return n;if(!n)return r;var t,o=r.v.type===n.v.type;return(o&&r.v.id>n.v.id||!o&&"sampler"===r.v.type)&&(t=r,r=n,n=t),t=e(r.r,n),r.r=r.l,r.l=t,r},xe=[],Ee=0;Ee<5;)xe.push({first:null,last:null,size:0}),Ee+=1;var Se,Ae,Ve=function(){for(var e=0;e<5;e++){var r=xe[e];if(r.size>0){if(2===e||3===e){r.size-=1;var n=je.v;return je=Oe(je.l,je.r),n}1===r.size&&(r.last=null);var t=r.first;return r.first=t.r,r.size-=1,t.v}}},$e=function(e,r,n,t,o,a){return Te(0,{a:null,b:null,node:n,parent:t,value:o,page:r,forkPage:a},e)},Te=function(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=qe(n),a=xe[o],i={v:{idx:e,stack:r,type:n,id:t},l:0,r:0};2===o||3===o?je=Oe(je,i):(0===a.size?a.first=i:a.last.r=i,a.last=i),a.size+=1},qe=function(e){switch(e){case"child":return 0;case"pure":return 1;case"barrier":return 2;case"sampler":return 3;case A:return 4;default:return-1}},De=new Set,Ne=1,Fe=0,Ce=null,Pe=function(e){Se=e},Ie=function(e){Ce=e},Re=function(e,r){if(e){for(;e&&!e.reg[r];)e=pe(e);if(e)return e}return null},Be=function(e,r,n){return(Re(e,n)||r).reg[n]},Me=function(e,r,n){var t=r.fn;try{return t(de(n),e.scope,n)}catch(t){console.error(t),e.fail=1}},ze=function(e,r){return""+e.shortName+r},_e=function(e,r){return null==r?ze(e," \u2192 *"):r},Le=function(e,r){B(e),le(e)&&r(se(e),le(e))},He=function(e){var r;return Le(e[0],(function(n,t){r=n,e=t})),[e,r]},Je=function(e,r){return e.includes(r)},We=function(e,r){var n=e.indexOf(r);-1!==n&&e.splice(n,1)},Ue=function(e,r){We(e.next,r),We(ue(e),r),We(fe(e),r)},Ge=function e(r,n,t){var o;r.next.length=0,r.seq.length=0,r.scope=null;for(var a=fe(r);o=a.pop();)Ue(o,r),(n||t&&!r.meta.sample||"crosslink"===o.family.type)&&e(o,n,"on"!==o.meta.op&&t);for(a=ue(r);o=a.pop();)Ue(o,r),t&&"crosslink"===o.family.type&&e(o,n,"on"!==o.meta.op&&t)},Ke=function(e){return e.clear()},Qe=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.deep,t=0;if(e.ownerSet&&e.ownerSet.delete(e),q(e))Ke(ve(e));else if(F(e)){t=1;var o=e.history;Ke(o.events),Ke(o.effects),Ke(o.stores),Ke(o.domains)}Ge(ie(e),!!n,t)},Xe=function(e){var r=J(Qe,e,void 0);return r.unsubscribe=r,r},Ye=function(e,r,n){return s({node:n.node,parent:e,child:r,scope:n.scope,meta:n.meta,family:{owners:[e,r],links:r},regional:1})},Ze=function(e){var r;Le(e,(function(n,t){r=n,e=t}));var n=e,t=n.from,o=n.to,a=n.meta,i=void 0===a?{op:"forward"}:a;return c(t,"forward",'"from"'),c(o,"forward",'"to"'),r&&(i.config=r),Xe(s({parent:t,child:o,meta:i,family:{},regional:1}))},er=function(e,r){if(R(r)||P(".watch argument should be a function"),Se){var n=Se.nodeMap[ie(e).id];n&&(e=n)}return Xe(s({scope:{fn:r},node:[Z({fn:ae})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))},rr=function e(r,n){return I(r)&&(e(se(r),n),null!=r.name&&(I(r.name)?e(r.name,n):R(r.name)?n.handler=r.name:n.name=r.name),r.loc&&(n.loc=r.loc),(r.sid||null===r.sid)&&(n.sid=r.sid),r.handler&&(n.handler=r.handler),r.updateFilter&&(n.updateFilter=r.updateFilter),pe(r)&&(n.parent=pe(r)),"strict"in r&&(n.strict=r.strict),r.named&&(n.named=r.named),e(le(r),n)),n},nr=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"event";pe(e)&&pe(e).hooks[n](r)},tr=function(e,r,n,t){var o=rr({name:t,config:n},{}),a="domain"===e,i=z(),u=o.parent,f=void 0===u?null:u,c=o.sid,s=void 0===c?null:c,l=o.strict,d=void 0===l?1:l,p=o.named,m=void 0===p?null:p,h=m||o.name||(a?"":i),g=v(h,f),y={unit:r.kind=e,name:r.shortName=h,sid:r.sid=be(s),named:m,unitId:r.id=i};if(r.parent=f,r.compositeName=g,r.defaultConfig=o,r.thru=function(e){return e(r)},r.getType=function(){return g.fullName},!a){r.subscribe=function(e){return B(e),r.watch(R(e)?e:function(r){e.next&&e.next(r)})},r[E]=function(){return r};var b=ye();b&&(y.nativeTemplate=b)}return Ae=d,y},or=function(e){return h({named:e})},ar=function(e,r,n,t){return Ye(e,r,{scope:{fn:t},node:[X({fn:ae})],meta:{op:n}})},ir=function(e,r,n,t){var o;I(n)&&(o=n,n=n.fn);var a=h(ze(e," \u2192? *"),o);return Ye(e,a,{scope:{fn:n},node:t,meta:{op:r}}),a},ur=function(e,r,n,t,o,a){var i=ce(r),u=[K({store:i,to:"a"}),X({fn:t?oe:te}),Q.defined(),Q.changed({store:i}),a&&Y({fn:function(e,r,n){var t=n.a;return a(e,t)}}),ee({store:i})],f=ye();if(f&&(u.unshift(f.loader),u.push(f.upward),q(e))){var c=ce(e);Je(f.plain,c)||(Je(f.closure,c)||f.closure.push(c),i.before||(i.before=[]),i.before.push({type:"closure",of:c}))}return Ye(e,r,{scope:{fn:o},node:u,meta:{op:n}})},fr=function(e){return function(r){return e.apply(void 0,Object(i.a)(r))}},cr=function(e,r,n,o){var a=e?function(e){return e.slice()}:function(e){return Object(t.a)({},e)},i=e?[]:{},u=ye(),f=a(i),c=re(f),s=re(1);c.type=e?"list":"shape",u&&u.plain.push(c,s);var l=g(f,{name:n||d(r)});ie(l).meta.isCombine=1;var v=[Q.defined(),K({store:c,to:"a"}),Y({fn:function(e,r,n){var t=r.key;return e!==n.a[t]}}),K({store:s,to:"b"}),X({fn:function(e,r,n){var t=r.clone,o=r.key;n.b&&(n.a=t(n.a)),n.a[o]=e}}),K({from:"a",target:c}),K({from:"value",store:0,target:s}),G({priority:"barrier"}),K({from:"value",store:1,target:s}),K({store:c}),o&&X({fn:o}),Q.changed({store:ce(l)})],m=c.before=[];return p(r,(function(e,r){if(q(e)){i[r]=e.defaultState,f[r]=e.getState();var n=Ye(e,l,{scope:{key:r,clone:a},node:v,meta:{op:"combine"}}),t=ce(e);m.push({type:"field",field:r,from:t}),u&&(Je(u.plain,t)||n.seq.unshift(u.loader))}else f[r]=i[r]=e})),l.defaultShape=r,c.after=[o?{type:V,to:ce(l),fn:o}:{type:"copy",to:ce(l)}],u||(l.defaultState=o?ce(l).current=o(f):i),l},sr=function(e){var r=e.params,n=e.req,t=e.ok,o=e.anyway,a=e.stack;return function(e){return l({target:[o,lr],params:[t?{status:"done",params:r,result:e}:{status:"fail",params:r,error:e},{fn:t?n.rs:n.rj,value:e}],defer:1,page:a.page,forkPage:me(a)})}},lr=s({node:[Z({fn:function(e){(0,e.fn)(e.value)}})],meta:{op:"fx",fx:"sidechain"}}),dr=["source","clock","target"]},47:function(e,r,n){"use strict";n.d(r,"a",(function(){return a}));n(51);var t=n(1),o=n(44);function a(e){o.g.store(e)||u("expect useStore argument to be a store");var r=e.getState(),n=t.useReducer((function(e){return e+1}),0)[1],a=t.useRef({store:e,value:r,pending:0});return i((function(){var r=e.updates.watch((function(e){var r=a.current;r.pending||(r.value=e,r.pending=1,n(),r.pending=0)})),t=e.getState(),o=a.current;return o.store===e&&o.value!==t&&(o.value=t,o.pending=1,n(),o.pending=0),o.store=e,r}),[e]),r}var i="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,u=function(e){throw Error(e)}},50:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n(52);function o(e,r){if(e){if("string"===typeof e)return Object(t.a)(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(t.a)(e,r):void 0}}},51:function(e,r,n){"use strict";n.d(r,"a",(function(){return a}));var t=n(52);var o=n(50);function a(e){return function(e){if(Array.isArray(e))return Object(t.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},52:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}n.d(r,"a",(function(){return t}))}}]);
//# sourceMappingURL=0.dcd09486.chunk.js.map