(this["webpackJsonpreact-entity-form-example"]=this["webpackJsonpreact-entity-form-example"]||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);n(40);var i=n(0),r=n.n(i),o=n(35),a=n.n(o),s=n(8),l=n(38),u=n(7),c=n(1),d=n(2),f=n(4),h=n(5),m=n(36),b=n(37),p=n.n(b),v=n(19),y=n.n(v),O=n(26),j=n.n(O),w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(f.a)(this,e),this.layoutsArr=[],this.layoutIdToArrIndex=new Map,this.layoutsArr=t,this.layoutIdToArrIndex=new Map(t.map((function(e,t){return[e.id,t]})))}return Object(h.a)(e,[{key:"addLayout",value:function(e){return this.layoutsArr=this.layoutsArr.concat([e]),this.layoutIdToArrIndex.set(e.id,this.layoutsArr.length-1),this}},{key:"removeLayout",value:function(e){var t=this.layoutIdToArrIndex.get(e);return null==t||(this.layoutsArr=[].concat(Object(d.a)(this.layoutsArr.slice(0,t)),Object(d.a)(this.layoutsArr.slice(t+1))),this.layoutIdToArrIndex.delete(e)),this}},{key:"updateLayout",value:function(e){var t=this.layoutIdToArrIndex.get(e.id);return null==t||(this.layoutsArr=[].concat(Object(d.a)(this.layoutsArr.slice(0,t)),[e],Object(d.a)(this.layoutsArr.slice(t+1)))),this}},{key:"build",value:function(){return this.layoutsArr}}]),e}();var k=function(){var e=1;return function(){return"".concat(e++)}}(),A=function(){function e(t){Object(f.a)(this,e),this.rows=[],this.id=k(),this.isHidden=!1,this.additional=void 0,t&&(this.rows=t.rows,this.id=t.id,this.isHidden=t.isHidden,this.additional=t.additional)}return Object(h.a)(e,[{key:"markHidden",value:function(){return this.isHidden=!0,this}},{key:"markVisible",value:function(){return this.isHidden=!1,this}},{key:"setAdditional",value:function(e){return this.additional=e,this}},{key:"addRow",value:function(e){return this.rows=this.rows.concat([e]),this}},{key:"build",value:function(){return{rows:this.rows,id:this.id,isHidden:this.isHidden,additional:this.additional}}}]),e}();var C=function(){var e=1;return function(){return"".concat(e++)}}(),I=function(){function e(t){return Object(f.a)(this,e),this.columns=[],this.id=C(),this.isHidden=!1,this.additional=void 0,t&&(this.columns=t.columns,this.id=t.id,this.isHidden=t.isHidden,this.additional=t.additional),this}return Object(h.a)(e,[{key:"markHidden",value:function(){return this.isHidden=!0,this}},{key:"markVisible",value:function(){return this.isHidden=!1,this}},{key:"setAdditional",value:function(e){return this.additional=e,this}},{key:"addColumn",value:function(e){return this.columns=this.columns.concat([e]),this}},{key:"build",value:function(){return{id:this.id,columns:this.columns,isHidden:this.isHidden,additional:this.additional}}}]),e}();var E=function(){var e=1;return function(){return"".concat(e++)}}(),H=function(){function e(t){return Object(f.a)(this,e),this.rows=[],this.id=E(),this.isHidden=!1,this.additional=void 0,t&&(this.rows=t.rows,this.id=t.id,this.isHidden=t.isHidden,this.additional=t.additional),this}return Object(h.a)(e,[{key:"markHidden",value:function(){return this.isHidden=!0,this}},{key:"markVisible",value:function(){return this.isHidden=!1,this}},{key:"setAdditional",value:function(e){return this.additional=e,this}},{key:"addRow",value:function(e){return this.rows=this.rows.concat([e]),this}},{key:"build",value:function(){return{id:this.id,rows:this.rows,isHidden:this.isHidden,additional:this.additional}}}]),e}();function g(){return null}var R=function(){function e(t){Object(f.a)(this,e),this.FieldComponent=g,this.componentProps={},this.isHidden=!1,t&&(this.FieldComponent=t.FieldComponent,this.componentProps=t.componentProps,this.isHidden=t.isHidden,this.fieldId=t.fieldId)}return Object(h.a)(e,[{key:"setFieldComponent",value:function(e){this.FieldComponent=e}},{key:"setComponentProps",value:function(e){this.componentProps=e}},{key:"build",value:function(){return{FieldComponent:this.FieldComponent,componentProps:this.componentProps,isHidden:this.isHidden,fieldId:this.fieldId}}}]),e}();function _(e){return"string"===typeof e?e:e.id}function N(e,t){var n=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rows";return"string"===typeof t?[t]:t[n].flatMap((function(t){return"string"===typeof t?t:e(t,"rows"===n?"columns":"rows")}))}(e,t);return Object(m.a)(n.map((function(e){return p()(e)})),(function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((function(e,t,i){return e[n[i]]=t,e}),{})}))}function x(e,t){return e.reduce((function(e,n){var i=_(n);return e.selectors[i]={valuesGetter:N(n,t),fieldsGetter:N(n,t),errorsGetter:N(n,t)},e.units[i]=n,e}),{selectors:{},units:{}})}var F=function(e){var t={},n={};return function(i){if(null==n){var r=x(i,e),o=r.selectors,a=r.units;return n=a,t=o}var s=i.filter((function(e){return n[_(e)]&&n[_(e)]!==e})),l=i.filter((function(e){return n[_(e)]&&n[_(e)]===e})),u=i.filter((function(e){return!n[_(e)]})),f=x([].concat(Object(d.a)(s),Object(d.a)(u)),e),h=f.selectors,m=f.units,b=l.map((function(e){return _(e)}));return t=Object(c.a)(Object(c.a)({},y()(t,b)),h),n=Object(c.a)(Object(c.a)({},y()(n,b)),m),t}},T="_styles-module__flex__3z8Cu",P="_styles-module__flexRow__1Qthv",S="_styles-module__flexCol__1vnyS",G="_styles-module__flex1__1R0K5",M=function e(t){var n=t.values,o=t.errors,a=t.fields,s=t.row,l=t.onAction,u=t.className,c=void 0===u?"":u,d=t.unitKey,f=void 0===d?"columns":d,h=Object(i.useRef)(F("columns"===f?"rows":"columns")),m=s[f],b=Object(i.useMemo)((function(){return null==m?{}:h.current(m)}),[m]);if("string"===typeof s){if(a[s].isHidden)return null;var p=a[s],v=n[s],y=o[s],O=p.FieldComponent,j=p.componentProps,w=p.fieldId;return r.a.createElement(O,Object.assign({},j,{onAction:l,className:c,value:v,error:y,fieldId:w}))}return r.a.createElement("div",{className:"".concat(T," ").concat("columns"===f?P:S," ").concat(c||"")},m.map((function(t){var i="string"===typeof t?t:t.id;return r.a.createElement(e,{key:i,row:t,values:b[i].valuesGetter(n),errors:b[i].errorsGetter(o),fields:b[i].fieldsGetter(a),unitKey:"rows"===f?"columns":"rows",onAction:l,className:G})})))},L=function(e){var t=e.values,n=e.errors,o=e.fields,a=e.layout,s=e.onAction,l=Object(i.useRef)(F("columns")),u=Object(i.useMemo)((function(){return l.current(a.rows)}),[a.rows]);return r.a.createElement(r.a.Fragment,null,a.rows.map((function(e){var i="string"===typeof e?e:e.id;return r.a.createElement(M,{key:i,row:e,fields:u[i].fieldsGetter(o),values:u[i].valuesGetter(t),errors:u[i].errorsGetter(n),onAction:s})})))},V=function(e){var t=e.values,n=e.errors,o=e.fields,a=e.layouts,s=e.onAction,l=Object(i.useCallback)((function(e){e.preventDefault()}),[]),u=Object(i.useRef)(F("rows")),c=Object(i.useMemo)((function(){return u.current(a)}),[a]);return r.a.createElement("form",{onSubmit:l},a.map((function(e){return r.a.createElement(L,{key:e.id,layout:e,fields:c[e.id].fieldsGetter(o),values:c[e.id].valuesGetter(t),errors:c[e.id].errorsGetter(n),onAction:s})})))};function B(e,t){return Object(c.a)(Object(c.a)({},e),{},{values:Object(c.a)(Object(c.a)({},e.values),{},Object(u.a)({},t.payload.fieldId,t.payload.value))})}function D(e,t){switch(t.type){case"@@form/change":return B(e,t);case"RESET":return Object(c.a)(Object(c.a)({},e),t.payload);case"SET_LOADING":return Object(c.a)(Object(c.a)({},e),{},{loading:t.payload});case"SUBMIT":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,errors:t.payload.errors,submitCount:e.submitCount+1});case"UPDATE_ERRORS":return Object(c.a)(Object(c.a)({},e),{},{errors:t.payload});case"@@form/touch-field":return Object(c.a)(Object(c.a)({},e),{},{touched:Object(c.a)(Object(c.a)({},e.touched),{},Object(u.a)({},t.payload.fieldId,!0))});default:return e}}var U={},K=function(e,t){var n=Object(i.useRef)(e),r=Object(i.useRef)(t);n.current=e,r.current=t;var o=Object(i.useCallback)((function(e){r.current({type:"@@form/change",payload:{fieldId:n.current,value:e}})}),[]),a=Object(i.useCallback)((function(){r.current({type:"@@form/touch-field",payload:{fieldId:n.current}})}),[]);return[Object(i.useCallback)((function(e){r.current({type:"@@form/register-field",payload:{fieldId:n.current,el:e}})}),[]),a,o]},J=function(e){var t=e.value,n=void 0===t?"":t,o=e.onAction,a=e.className,l=e.fieldId,u=e.label,c=K(l,o),d=Object(s.a)(c,3),f=d[0],h=d[1],m=d[2],b=Object(i.useCallback)((function(e){m(e.target.value)}),[m]);return r.a.createElement("div",{className:"".concat(a||""," flex flex-col"),ref:f},r.a.createElement("label",{className:"block flex-none",htmlFor:l},u),r.a.createElement("input",{onBlur:h,id:l,placeholder:u,className:"w-full block flex-1",type:"text",value:n,onChange:b}))};var z={firstname:new R({fieldId:"firstname",isHidden:!1,componentProps:{className:"",label:"First name"},FieldComponent:J}).build(),lastname:new R({fieldId:"lastname",isHidden:!1,componentProps:{className:"",label:"Last Name"},FieldComponent:J}).build(),tagline:new R({fieldId:"tagline",isHidden:!1,componentProps:{className:"",label:"Tagline"},FieldComponent:J}).build(),lifeMoto:new R({fieldId:"lifeMoto",isHidden:!1,componentProps:{className:"",label:"Life Moto"},FieldComponent:function(e){var t=e.value,n=void 0===t?"":t,o=e.onAction,a=e.className,l=e.fieldId,u=e.label,c=K(l,o),d=Object(s.a)(c,3),f=d[0],h=d[1],m=d[2],b=Object(i.useCallback)((function(e){m(e.target.value)}),[m]);return r.a.createElement("div",{ref:f,className:"".concat(a||""," flex flex-col")},r.a.createElement("label",{className:"block flex-none",htmlFor:l},u),r.a.createElement("textarea",{onBlur:h,id:l,placeholder:u,className:"w-full block flex-1",value:n,onChange:b,rows:3}))}}).build(),address1:new R({fieldId:"address1",isHidden:!1,componentProps:{className:"",label:"Address line 1"},FieldComponent:J}).build(),address2:new R({fieldId:"address2",isHidden:!1,componentProps:{className:"",label:"Address line 2"},FieldComponent:J}).build(),pincode:new R({fieldId:"pincode",isHidden:!1,componentProps:{className:"",label:"Pincode"},FieldComponent:J}).build()},Q=(new w).addLayout((new A).addRow((new I).addColumn("firstname").addColumn("lastname").build()).addRow("tagline").addRow((new I).addColumn("lifeMoto").addColumn((new H).addRow("address1").addRow("address2").addRow("pincode").build()).build()).build()).build(),q=function(){var e=function(e){var t=e.initialValues,n=e.initialErrors,r=e.initialLayouts,o=e.initialFields,a=e.onSubmit,u=e.onAction,d=e.validate,f=e.reduceChanges,h=e.shouldScrollToErrors,m=e.shoudlValidateOnBlur,b=Object(i.useReducer)(D,{values:t,errors:n,layouts:r,fields:o,touched:{},submitCount:0}),p=Object(s.a)(b,2),v=p[0],O=p[1],w=v.submitCount,k=Object(l.a)(v,["submitCount"]),A=Object(i.useRef)({}),C=Object(i.useRef)(m),I=Object(i.useRef)(a),E=Object(i.useRef)(u),H=Object(i.useRef)(f),g=Object(i.useRef)(d),R=Object(i.useRef)(v);C.current=m,I.current=a,E.current=u,H.current=f,R.current=v,g.current=d;var _=Object(i.useRef)(null),N=Object(i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.current.errors,t=j()(e)[0],n=A.current[t];n&&n.scrollIntoView&&n.scrollIntoView()}),[]),x=Object(i.useCallback)((function(e){_.current&&(_.current.ignore=!0);var t=Promise.resolve(g.current(k));_.current=t,O({type:"SET_LOADING",payload:!0}),t.then((function(n){t.ignore||e(n)})).catch((function(){t.ignore||O({type:"SET_LOADING",payload:!1})}))}),[]),F=Object(i.useCallback)((function(){g.current&&x((function(e){e?(O({type:"SUBMIT",payload:{errors:e}}),h&&N(e)):(O({type:"SUBMIT",payload:{errors:{}}}),a(k))}))}),[]),T=Object(i.useCallback)((function(e){switch(e.type){case"@@form/change":O(f?{type:"RESET",payload:H.current(R.current,B(R.current,e),e)}:e);break;case"@@form/touch-field":O(e);break;case"@@form/register-field":A.current[e.payload.fieldId]=e.payload.el;break;default:return E.current(e)}}),[]),P=Object(i.useCallback)((function(e){O({type:"RESET",payload:e})}),[]);return Object(i.useEffect)((function(){if(g.current){var e=j()(R.current.touched);(w||e.length&&C.current)&&x((function(t){O({type:"UPDATE_ERRORS",payload:w?t||U:y()(t,e)})}))}}),[k.values,k.touched,w]),Object(c.a)(Object(c.a)({},k),{},{handleSubmit:F,handleAction:T,scrollToError:N,reset:P})}({initialErrors:{},initialValues:{}}),t=e.handleAction,n=e.errors,o=e.values,a=e.touched;return console.log(a),r.a.createElement(V,{fields:z,layouts:Q,values:o,errors:n,onAction:t})},W=(n(115),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hello React Entity Form"),r.a.createElement(q,null))});a.a.render(r.a.createElement(W,null),document.getElementById("root"))},39:function(e,t,n){e.exports=n(116)},40:function(e,t,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.26a36bd2.chunk.js.map