(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users_Rights_Roles"],{"057f":function(e,t,r){var n=r("fc6a"),a=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return a(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?i(e):a(n(e))}},"25dc":function(e,t,r){},"2d7a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Roles"},[r("Breadcrumb",{attrs:{name1:"权限管理",name2:"角色列表"}}),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加角色")])],1),r("el-col",[r("el-table",{attrs:{data:e.rolesList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(n,a){return r("el-row",{key:n.id,class:["bdtop",0===a?"bdbottom":"","vcenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removeRightById(t.row,n.id)}}},[e._v(e._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(n.children,(function(n,a){return r("el-row",{key:n.id,class:[0===a?"":"bdtop","vcenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRightById(t.row,n.id)}}},[e._v(" "+e._s(n.authName)+" ")]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(n.children,(function(n,a){return r("el-tag",{key:n.id,class:[0===a?"":"bdtop"],attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRightById(t.row,n.id)}}},[e._v(" "+e._s(n.authName)+" ")])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.showEditDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.rolesdelete(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-search"},on:{click:function(r){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1)],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.addDialogVisible},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDislogClosed}},[r("el-form",{ref:"addRolesForm",attrs:{model:e.addRolesForm,rules:e.addFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.addRolesForm.roleName,callback:function(t){e.$set(e.addRolesForm,"roleName",t)},expression:"addRolesForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addRolesForm.roleDesc,callback:function(t){e.$set(e.addRolesForm,"roleDesc",t)},expression:"addRolesForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRolesUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改角色",visible:e.editDialogVisible,width:"30%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editRolesForm,rules:e.editFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.editRolesForm.roleName,callback:function(t){e.$set(e.editRolesForm,"roleName",t)},expression:"editRolesForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.editRolesForm.roleDesc,callback:function(t){e.$set(e.editRolesForm,"roleDesc",t)},expression:"editRolesForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editFormInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.SetRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.SetRightDialogVisible=t},close:e.SetRightDialogVisibleClosed}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightsList,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":!0,"default-checked-keys":e.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.SetRightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},a=[];function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){if(Array.isArray(e))return o(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0");function l(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return s(e)||i(e)||l(e)||c()}var d=r("1da1"),f=(r("99af"),r("159b"),r("a15b"),r("96cf"),r("eecb")),m=r("8dcf"),p={name:"Roles",components:{Breadcrumb:m["a"]},mixins:[f["b"]],data:function(){return{rolesList:[],rightsList:[],addDialogVisible:!1,editDialogVisible:!1,SetRightDialogVisible:!1,addRolesForm:{roleName:"",roleDesc:""},editRolesForm:{},treeProps:{children:"children",label:"authName"},defKeys:[],rolesId:""}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取角色列表失败!"));case 6:e.rolesList=n.data;case 7:case"end":return t.stop()}}),t)})))()},addRolesUser:function(){var e=this;this.$refs.addRolesForm.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("roles",e.addRolesForm);case 4:if(n=t.sent,a=n.data,201===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("添加角色失败!"));case 8:e.$message.success("添加角色成功!"),e.getRolesList(),e.addDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addDislogClosed:function(){this.$refs.addRolesForm.resetFields()},rolesdelete:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该角色, 是否继续?","删除角色",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=r.sent,"confirm"===n){r.next=5;break}return r.abrupt("return",t.$message.info("已取消该删除操作"));case 5:t.$http.delete("roles/"+e).then((function(e){var r=e.data;if(200!==r.meta.status)return t.$message.error("该用户删除失败");t.$message.success("该用户已经删除"),t.getRolesList()}));case 6:case"end":return r.stop()}}),r)})))()},showEditDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/"+e);case 2:if(n=r.sent,a=n.data,200===a.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询角色失败!"));case 6:t.editRolesForm=a.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editFormInfo:function(){var e=this;this.$refs.editFormRef.validate((function(t){t&&(e.$http.put("roles/"+e.editRolesForm.roleId,{roleName:e.editRolesForm.roleName,roleDesc:e.editRolesForm.roleDesc}).then((function(t){if(200!==t.data.meta.status)return e.$message.error("修改角色失败!");e.$message.success("修改角色成功!"),e.getRolesList()})),e.editDialogVisible=!1)}))},removeRightById:function(e,t){var r=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=n.sent,"confirm"===a){n.next=5;break}return n.abrupt("return",r.$message.info("取消了删除!"));case 5:return n.next=7,r.$http.delete("roles/".concat(e.id,"/rights/").concat(t));case 7:if(o=n.sent,s=o.data,200===s.meta.status){n.next=11;break}return n.abrupt("return",r.$message.error("删除权限失败!"));case 11:e.children=s.data;case 12:case"end":return n.stop()}}),n)})))()},showSetRightDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.rolesId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(n=r.sent,a=n.data,200===a.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取权限列表失败!"));case 7:t.rightsList=a.data,t.getLeafKeys(e,t.defKeys),t.SetRightDialogVisible=!0;case 10:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){return r.getLeafKeys(e,t)}))},SetRightDialogVisibleClosed:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(u(e.$refs.treeRef.getCheckedKeys()),u(e.$refs.treeRef.getHalfCheckedKeys())),n=r.join(","),t.next=4,e.$http.post("roles/".concat(e.rolesId,"/rights"),{rids:n});case 4:if(a=t.sent,o=a.data,200===o.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("分配权限失败!"));case 8:e.$message.success("分配权限成功!"),e.getRolesList(),e.SetRightDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()}}},b=p,g=(r("b04b"),r("2877")),h=Object(g["a"])(b,n,a,!1,null,"27073553",null);t["default"]=h.exports},"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),s=r("e95a"),i=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,d,f,m,p=a(e),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,v=void 0!==h,y=c(p),w=0;if(v&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==y||b==Array&&s(y))for(t=i(p.length),r=new b(t);t>w;w++)m=v?h(p[w],w):p[w],l(r,w,m);else for(d=y.call(p),f=d.next,r=new b;!(u=f.call(d)).done;w++)m=v?o(d,h,[u.value,w],!0):u.value,l(r,w,m);return r.length=w,r}},"4e68":function(e,t,r){},"746f":function(e,t,r){var n=r("428f"),a=r("5135"),o=r("e538"),s=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});a(t,e)||s(t,e,{value:o.f(e)})}},"9bdd":function(e,t,r){var n=r("825a"),a=r("2a62");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(s){throw a(e),s}}},a4d3:function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d066"),s=r("c430"),i=r("83ab"),l=r("4930"),c=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),p=r("825a"),b=r("7b0b"),g=r("fc6a"),h=r("c04e"),v=r("5c6c"),y=r("7c73"),w=r("df75"),R=r("241c"),x=r("057f"),k=r("7418"),$=r("06cf"),F=r("9bf2"),D=r("d1e7"),_=r("9112"),S=r("6eeb"),I=r("5692"),O=r("f772"),V=r("d012"),L=r("90e3"),j=r("b622"),C=r("e538"),N=r("746f"),U=r("d44e"),B=r("69f3"),z=r("b727").forEach,A=O("hidden"),q="Symbol",E="prototype",P=j("toPrimitive"),K=B.set,T=B.getterFor(q),J=Object[E],M=a.Symbol,H=o("JSON","stringify"),Q=$.f,W=F.f,G=x.f,X=D.f,Y=I("symbols"),Z=I("op-symbols"),ee=I("string-to-symbol-registry"),te=I("symbol-to-string-registry"),re=I("wks"),ne=a.QObject,ae=!ne||!ne[E]||!ne[E].findChild,oe=i&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=Q(J,t);n&&delete J[t],W(e,t,r),n&&e!==J&&W(J,t,n)}:W,se=function(e,t){var r=Y[e]=y(M[E]);return K(r,{type:q,tag:e,description:t}),i||(r.description=t),r},ie=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof M},le=function(e,t,r){e===J&&le(Z,t,r),p(e);var n=h(t,!0);return p(r),d(Y,n)?(r.enumerable?(d(e,A)&&e[A][n]&&(e[A][n]=!1),r=y(r,{enumerable:v(0,!1)})):(d(e,A)||W(e,A,v(1,{})),e[A][n]=!0),oe(e,n,r)):W(e,n,r)},ce=function(e,t){p(e);var r=g(t),n=w(r).concat(pe(r));return z(n,(function(t){i&&!de.call(r,t)||le(e,t,r[t])})),e},ue=function(e,t){return void 0===t?y(e):ce(y(e),t)},de=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===J&&d(Y,t)&&!d(Z,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,A)&&this[A][t])||r)},fe=function(e,t){var r=g(e),n=h(t,!0);if(r!==J||!d(Y,n)||d(Z,n)){var a=Q(r,n);return!a||!d(Y,n)||d(r,A)&&r[A][n]||(a.enumerable=!0),a}},me=function(e){var t=G(g(e)),r=[];return z(t,(function(e){d(Y,e)||d(V,e)||r.push(e)})),r},pe=function(e){var t=e===J,r=G(t?Z:g(e)),n=[];return z(r,(function(e){!d(Y,e)||t&&!d(J,e)||n.push(Y[e])})),n};if(l||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function(e){this===J&&r.call(Z,e),d(this,A)&&d(this[A],t)&&(this[A][t]=!1),oe(this,t,v(1,e))};return i&&ae&&oe(J,t,{configurable:!0,set:r}),se(t,e)},S(M[E],"toString",(function(){return T(this).tag})),S(M,"withoutSetter",(function(e){return se(L(e),e)})),D.f=de,F.f=le,$.f=fe,R.f=x.f=me,k.f=pe,C.f=function(e){return se(j(e),e)},i&&(W(M[E],"description",{configurable:!0,get:function(){return T(this).description}}),s||S(J,"propertyIsEnumerable",de,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:M}),z(w(re),(function(e){N(e)})),n({target:q,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=M(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!i},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:fe}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:pe}),n({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(b(e))}}),H){var be=!l||u((function(){var e=M();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));n({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,r){var n,a=[e],o=1;while(arguments.length>o)a.push(arguments[o++]);if(n=t,(m(t)||void 0!==e)&&!ie(e))return f(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ie(t))return t}),a[1]=t,H.apply(null,a)}})}M[E][P]||_(M[E],P,M[E].valueOf),U(M,q),V[A]=!0},a630:function(e,t,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),s=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:s},{from:a})},ac13:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rights"},[r("Breadcrumb",{attrs:{name1:"权限管理",name2:"权限列表"}}),r("el-card",{staticClass:"box-card"},[r("el-table",{attrs:{data:e.rightsList,stripe:"",border:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("一级")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级")]):"2"===t.row.level?r("el-tag",{attrs:{type:"warning"}},[e._v("三级")]):e._e()]}}])})],1)],1)],1)},a=[],o=r("1da1"),s=(r("96cf"),r("8dcf")),i={name:"Rights",components:{Breadcrumb:s["a"]},data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取权限列表失败!"));case 6:e.rightsList=n.data;case 7:case"end":return t.stop()}}),t)})))()}}},l=i,c=r("2877"),u=Object(c["a"])(l,n,a,!1,null,"865f3efc",null);t["default"]=u.exports},ac3d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"users"},[r("Breadcrumb",{attrs:{name1:"用户管理",name2:"用户列表"}}),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:7}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("用户添加")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userData.userList,stripe:"",border:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.userStatuChanged(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.setRoles(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-size":e.queryInfo.pagesize,"page-sizes":[5,9,13,15],layout:"total, sizes, prev, pager, next, jumper",total:e.userData.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDislogClosed}},[r("el-form",{ref:"addFormRef",attrs:{"label-width":"70px",model:e.addForm,rules:e.addFormRules}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisble,width:"50%"},on:{close:e.aditClosed,"update:visible":function(t){e.editDialogVisble=t}}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisble=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRolesDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRolesDialogVisible=t},close:e.setRolesDialogClosed}},[r("div",[r("p",[e._v("当前的用户 : "+e._s(e.userInfo.username))]),r("p",[e._v("当前的角色 : "+e._s(e.userInfo.role_name))]),r("p",[e._v(" 分配新角色: "),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectRoleId,callback:function(t){e.selectRoleId=t},expression:"selectRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRolesDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRolesInfo}},[e._v("确 定")])],1)])],1)},a=[],o=r("1da1"),s=(r("99af"),r("96cf"),r("eecb")),i=r("8dcf"),l={name:"Users",mixins:[s["c"]],data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:5},userData:{userList:[],total:0},addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},editDialogVisble:!1,setRolesDialogVisible:!1,userInfo:{},rolesList:[],selectRoleId:"",editForm:{}}},components:{Breadcrumb:i["a"]},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:r=t.sent,n=r.data,200!==n.meta.status&&e.$message.error("获取用户列表失败!"),e.$message.success("获取用户列表成功!"),e.userData.userList=n.data.users,e.userData.total=n.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStatuChanged:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(n=r.sent,a=n.data,200===a.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户状态失败!"));case 7:return r.abrupt("return",t.$message.success("更新用户状态成功!"));case 8:case"end":return r.stop()}}),r)})))()},addDislogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("users",e.addForm);case 4:if(n=t.sent,a=n.data,201===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("用户添加失败了~"));case 8:return e.addDialogVisible=!1,e.getUserList(),t.abrupt("return",e.$message.success("用户添加成功了~"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e);case 2:if(n=r.sent,a=n.data,200===a.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询用户数据失败~"));case 6:return t.editForm=a.data,t.editDialogVisble=!0,r.abrupt("return",t.$message.success("查询用户数据成功~"));case 9:case"end":return r.stop()}}),r)})))()},aditClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("users/"+e.editForm.id,{email:e.editForm.email,mobile:e.editForm.mobile});case 4:n=t.sent,a=n.data,200!==a.meta.status&&e.$message.error("更新用户信息失败!"),e.editDialogVisble=!1,e.getUserList(),e.$message.success("更新用户信息成功!");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该文件, 是否继续?","永久删除该用户",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=r.sent,"confirm"===n){r.next=5;break}return r.abrupt("return",t.$message.info("已经取消了删除"));case 5:t.$http.delete("users/"+e).then((function(e){var r=e.data;if(200!==r.meta.status)return t.$message.error("该用户删除失败");t.$message.success("该用户已经删除"),t.getUserList()}));case 6:case"end":return r.stop()}}),r)})))()},setRoles:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userInfo=e,r.next=3,t.$http.get("roles");case 3:if(n=r.sent,a=n.data,200===a.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取角色列表失败!"));case 7:t.rolesList=a.data,t.setRolesDialogVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},saveRolesInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择要分配的角色!"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectRoleId});case 4:if(r=t.sent,n=r.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新角色失败!"));case 8:e.$message.success("更新角色成功!"),e.getUserList(),e.setRolesDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRolesDialogClosed:function(){this.selectRoleId="",this.userInfo=""}}},c=l,u=(r("c798"),r("2877")),d=Object(u["a"])(c,n,a,!1,null,"29309a29",null);t["default"]=d.exports},b04b:function(e,t,r){"use strict";r("4e68")},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,s=o.toString,i=/^\s*function ([^ (]*)/,l="name";n&&!(l in o)&&a(o,l,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},c798:function(e,t,r){"use strict";r("25dc")},d28b:function(e,t,r){var n=r("746f");n("iterator")},e01a:function(e,t,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),s=r("5135"),i=r("861d"),l=r("9bf2").f,c=r("e893"),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var m=f.prototype=u.prototype;m.constructor=f;var p=m.toString,b="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=p.call(e);if(s(d,e))return"";var r=b?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,r){var n=r("b622");t.f=n},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("861d"),o=r("e8b5"),s=r("23cb"),i=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),f=d("slice"),m=u("species"),p=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var r,n,u,d=l(this),f=i(d.length),g=s(e,f),h=s(void 0===t?f:t,f);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,g,h);for(n=new(void 0===r?Array:r)(b(h-g,0)),u=0;g<h;g++,u++)g in d&&c(n,u,d[g]);return n.length=u,n}})}}]);
//# sourceMappingURL=Users_Rights_Roles.a03293a6.js.map