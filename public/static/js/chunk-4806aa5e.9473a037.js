(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4806aa5e"],{"013f":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"login",on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleSubmit("formInline")}}},[s("div",{staticClass:"top-content",on:{click:function(s){e.$refs.verify.show=!1}}},[s("div",{staticClass:"logo-box"},[s("img",{attrs:{src:e.$store.state.logoImg},on:{click:function(s){return e.$router.push("/")}}}),s("div",[e._v("欢迎登录")])])]),s("div",{staticClass:"login-container"},[s("Carousel",{staticClass:"login-carousel",attrs:{loop:"","autoplay-speed":5e3,arrow:"never"}},[s("CarouselItem",[s("div",{staticClass:"demo-carousel",on:{click:function(s){e.$refs.verify.show=!1}}},[s("img",{attrs:{src:"https://lili-system.oss-cn-beijing.aliyuncs.com/background.jpg"}})])])],1),s("div",{staticClass:"form-box",on:{click:function(s){e.$refs.verify.show=!1}}},[s("div",{staticClass:"account-number"},[s("div",{staticClass:"tab-switch"},[s("span",[e._v(e._s(e.type?"账号登录":"验证码登录"))]),s("span",{on:{click:function(s){e.type=!e.type,e.scannerCodeLoginFLag=!1}}},[e._v(e._s(e.type?"验证码登录":"账号登录"))])]),s("div",{on:{click:function(s){e.scannerCodeLoginFLag=!e.scannerCodeLoginFLag}}},[e._v(e._s(e.scannerCodeLoginFLag?"返回":"扫码登录"))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.scannerCodeLoginFLag,expression:"scannerCodeLoginFLag"}]},[s("div",{staticClass:"qr-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"fail"==e.qrCodeStatus,expression:"qrCodeStatus == 'fail'"}],staticClass:"qr-shadow flex"},[s("span",[e._v(" 二维码已失效 ")]),s("Button",{attrs:{size:"small"},on:{click:e.createPCLoginSession}},[e._v("刷新二维码")])],1),s("vue-qr",{attrs:{text:e.qrCode,margin:0,colorDark:"#000",colorLight:"#fff",size:150}})],1),s("div",{staticClass:"drag-area"},[0===e.scannerCodeLoginStatus?s("div",{staticClass:"pending-scan"},[s("p",[e._v("打开手机App/小程序，扫码登录")])]):1===e.scannerCodeLoginStatus?s("div",{staticClass:"scanned"},[s("p",[e._v("扫码成功，等待确认")])]):e._e(),2===e.scannerCodeLoginStatus?s("div",{staticClass:"scanned"},[s("p",[e._v("登录成功，正在页面跳转")])]):3===e.scannerCodeLoginStatus?s("div",{staticClass:"quick-logining"},[s("p",[e._v("取消登录")])]):e._e()])]),s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.scannerCodeLoginFLag,expression:"!scannerCodeLoginFLag"}]},[s("Form",{directives:[{name:"show",rawName:"v-show",value:!0===e.type,expression:"type === true"}],ref:"formInline",attrs:{model:e.formData,rules:e.ruleInline},on:{click:function(s){if(s.target!==s.currentTarget)return null;e.$refs.verify.show=!1}}},[s("FormItem",{attrs:{prop:"username"}},[s("i-input",{attrs:{type:"text",clearable:"",placeholder:"用户名"},model:{value:e.formData.username,callback:function(s){e.$set(e.formData,"username",s)},expression:"formData.username"}},[s("Icon",{attrs:{slot:"prepend",type:"md-person"},slot:"prepend"})],1)],1),s("FormItem",{attrs:{prop:"password"}},[s("i-input",{attrs:{type:"password",clearable:"",placeholder:"密码"},model:{value:e.formData.password,callback:function(s){e.$set(e.formData,"password",s)},expression:"formData.password"}},[s("Icon",{attrs:{slot:"prepend",type:"md-lock"},slot:"prepend"})],1)],1),s("FormItem",[s("Button",{attrs:{type:"error",long:""},on:{click:function(s){return s.stopPropagation(),e.handleSubmit("formInline")}}},[e._v("登录")])],1)],1),s("Form",{directives:[{name:"show",rawName:"v-show",value:!1===e.type,expression:"type === false"}],ref:"formSms",attrs:{model:e.formSms,rules:e.ruleInline},on:{click:function(s){if(s.target!==s.currentTarget)return null;e.$refs.verify.show=!1}}},[s("FormItem",{attrs:{prop:"mobile"}},[s("i-input",{attrs:{type:"text",clearable:"",placeholder:"手机号"},model:{value:e.formSms.mobile,callback:function(s){e.$set(e.formSms,"mobile",s)},expression:"formSms.mobile"}},[s("Icon",{attrs:{slot:"prepend",type:"md-lock"},slot:"prepend"})],1)],1),s("FormItem",{attrs:{prop:"code"}},[s("i-input",{attrs:{type:"text",placeholder:"手机验证码"},model:{value:e.formSms.code,callback:function(s){e.$set(e.formSms,"code",s)},expression:"formSms.code"}},[s("Icon",{staticStyle:{"font-weight":"bold"},attrs:{slot:"prepend",type:"ios-text-outline"},slot:"prepend"}),s("Button",{attrs:{slot:"append"},on:{click:e.sendCode},slot:"append"},[e._v(e._s(e.codeMsg))])],1)],1),s("FormItem",[s("Button",{attrs:{long:"",type:e.verifyStatus?"success":"default"},on:{click:function(s){return s.stopPropagation(),e.verifyBtnClick.apply(null,arguments)}}},[e._v(e._s(e.verifyStatus?"验证通过":"点击完成安全验证")+" ")])],1),s("FormItem",[s("Button",{attrs:{type:"error",long:""},on:{click:function(s){return e.handleSubmit("formSms")}}},[e._v("登录")])],1)],1)],1),s("div",{staticClass:"other"},[s("div",{staticClass:"other-login"},[s("svg",{staticClass:"icon",attrs:{t:"1631154795933",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4969",width:"32",height:"32"},on:{click:function(s){return e.handleWebLogin("QQ")}}},[s("path",{attrs:{d:"M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z","p-id":"4970",fill:"#1296db"}})]),s("svg",{staticClass:"icon",attrs:{t:"1631154766336",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3844",width:"32",height:"32"},on:{click:function(s){return e.handleWebLogin("WECHAT_PC")}}},[s("path",{attrs:{d:"M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z",fill:"#09BB07","p-id":"3845"}})])]),s("div",{staticClass:"register"},[s("span",{staticStyle:{color:"red"},on:{click:function(s){return e.$router.push("signUp")}}},[e._v("还没有账号？点击立即注册")]),s("span",{on:{click:function(s){return e.$router.push("forgetPassword")}}},[e._v("忘记密码")])])])])]),s("verify",{ref:"verify",staticClass:"verify-con",attrs:{verifyType:"LOGIN"},on:{change:e.verifyChange}})],1),s("div",{staticClass:"foot"},[s("Row",{staticClass:"help",attrs:{type:"flex",justify:"space-around"}},[s("router-link",{staticClass:"item",attrs:{to:"/article",target:"_blank"}},[e._v("帮助")]),s("router-link",{staticClass:"item",attrs:{to:"/article?id=1371779927900160000",target:"_blank"}},[e._v("隐私")]),s("router-link",{staticClass:"item",attrs:{to:"/article?id=1371992704333905920",target:"_blank"}},[e._v("条款")])],1),s("Row",{staticClass:"copyright",attrs:{type:"flex",justify:"center"}},[e._v(" Copyright © "+e._s(e.year)+" - Present "),s("a",{staticStyle:{margin:"0 5px"},attrs:{href:"https://pickmall.cn",target:"_blank"}},[e._v(e._s(e.config.title))]),e._v(" 版权所有 ")])],1)])},i=[],a=t("7dfd"),o=t("be72"),n=t("7ded"),c=t("2934"),l=t("e487"),u=t("6402"),d=t("658f"),h=t.n(d),f={name:"Login",components:{verify:u["a"],vueQr:h.a},data(){return{qrCodeStatus:"success",qrCode:"",qrSessionToken:"",scannerCodeLoginFLag:!1,scannerCodeLoginStatus:0,qrCodeTimer:null,config:t("f121"),type:!0,formData:{username:"",password:""},formSms:{code:"",mobile:""},verifyStatus:!1,ruleInline:{username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"},{type:"string",min:6,message:"密码不能少于6位"}],mobile:[{required:!0,message:"请输入手机号码"},{pattern:a["mobile"],message:"请输入正确的手机号"}],code:[{required:!0,message:"请输入手机验证码"}]},codeMsg:"发送验证码",interval:null,time:60,year:(new Date).getFullYear()}},watch:{scannerCodeLoginFLag(e){!e&&this.clearInterval()}},methods:{handleSubmit(e){this.$refs[e].validate(e=>{if(e)if(this.type)this.$refs.verify.init();else{let e=JSON.parse(JSON.stringify(this.formSms));n["h"](e).then(e=>{this.$refs.verify.show=!1,e.success?(this.$Message.success("登录成功"),l["a"].setItem("accessToken",e.result.accessToken),l["a"].setItem("refreshToken",e.result.refreshToken),l["a"].setItem("getTimes",0),n["a"]().then(e=>{if(e.success){l["a"].setItem("userInfo",e.result);let s=this.$route.query;s.rePath?this.$router.push({path:s.rePath,query:JSON.parse(s.query)}):this.$router.push("/")}})):this.$Message.error(e.message)})}})},sendCode(){if(60===this.time){if(""===this.formSms.mobile)return void this.$Message.warning("请先填写手机号");if(!this.verifyStatus)return void this.$Message.warning("请先完成安全验证");let e={mobile:this.formSms.mobile,verificationEnums:"LOGIN"};Object(c["g"])(e).then(e=>{if(e.success){this.$Message.success("验证码发送成功");let e=this;this.interval=setInterval(()=>{e.time--,0===e.time?(e.time=60,e.codeMsg="重新发送",e.verifyStatus=!1,clearInterval(e.interval)):e.codeMsg=e.time},1e3)}else this.$Message.warning(e.message)})}},verifyChange(e){if(e.status)if(!0===this.type){let e=JSON.parse(JSON.stringify(this.formData));e.password=Object(o["md5"])(e.password),this.$refs.verify.show=!1,this.$Spin.show(),n["c"](e).then(e=>{e.success?this.loginSuccess(e.result.accessToken,e.result.refreshToken):(this.$Spin.hide(),this.$Message.error(e.message))}).catch(()=>{this.$Spin.hide()})}else this.verifyStatus=!0,this.$refs.verify.show=!1},verifyBtnClick(){this.verifyStatus||this.$refs.verify.init()},handleWebLogin(e){Object(n["j"])(e)},loginSuccess(e,s){this.$Message.success("登录成功"),l["a"].setItem("accessToken",e),l["a"].setItem("refreshToken",s),n["a"]().then(e=>{if(this.$Spin.hide(),e.success){l["a"].setItem("userInfo",e.result);let s=this.$route.query;s.rePath?this.$router.push({path:s.rePath,query:JSON.parse(s.query)}):this.$router.push("/")}})},async createPCLoginSession(){Object(n["b"])({}).then(e=>{if(this.clearQRLoginInfo(),200==e.code){this.qrCodeStatus="success";let s=e.result;this.qrSessionToken=s.token,0===s.status&&(this.qrCode=s.token,this.refreshQrCode()),this.qrLogin()}})},async refreshQrCode(){this.qrCodeTimer||(this.qrCodeTimer=setInterval(()=>{this.qrCodeStatus="fail"},1e4))},clearQRLoginInfo(){this.scannerCodeLoginStatus=0,this.qrSessionToken="",this.qrCodeTimer&&clearInterval(this.qrCodeTimer),this.qrCodeTimer=null},async qrLogin(){this.qrSessionToken&&Object(n["g"])(this.qrSessionToken,{beforeSessionStatus:this.scannerCodeLoginStatus}).then(e=>{if(e.success)switch(this.scannerCodeLoginStatus=e.result.status,e.result.status){case 0:case 1:this.qrLogin();break;case 2:this.loginSuccess(e.result.token.accessToken,e.result.token.refreshToken);break;case 3:this.createPCLoginSession();break;default:this.clearQRLoginInfo();break}else this.clearQRLoginInfo()})}},destroyed(){this.clearQRLoginInfo()},mounted(){let e=this.$route.query.state;e&&(l["a"].setItem("uuid",e),Object(n["d"])(e).then(e=>{e.success&&this.loginSuccess(e.result.accessToken,e.result.refreshToken)}))},watch:{scannerCodeLoginFLag(e){e?(this.createPCLoginSession(),console.log("二维码登录")):(console.log("取消二维码登录"),this.clearQRLoginInfo())},type(e){e?this.$refs.formInline.resetFields():this.$refs.formSms.resetFields(),this.verifyStatus=!1,this.$refs.verify.show=!1,clearInterval(this.interval),this.codeMsg="发送验证码",this.time=60}}},m=f,p=(t("932f"),t("2877")),g=Object(p["a"])(m,r,i,!1,null,"c8581220",null);s["default"]=g.exports},"5a31":function(e,s,t){},"932f":function(e,s,t){"use strict";t("5a31")}}]);