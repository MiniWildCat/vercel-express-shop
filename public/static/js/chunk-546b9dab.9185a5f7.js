(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-546b9dab"],{"5baa":function(e,t,s){},c936:function(e,t,s){"use strict";s("5baa")},fdb6:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return e.order.order?t("div",{staticClass:"order-detail"},[t("card",{attrs:{_Title:"订单详情",_Size:16}}),e.order.allowOperationVO.pay||e.order.allowOperationVO.rog||e.order.allowOperationVO.cancel?t("Card",{staticClass:"mb_10"},[e.order.allowOperationVO.pay?t("Button",{attrs:{type:"success",size:"small"},on:{click:function(t){return e.goPay(e.order.order.sn)}}},[e._v("去支付")]):e._e(),e.order.allowOperationVO.rog?t("Button",{attrs:{type:"info",size:"small"},on:{click:function(t){return e.received(e.order.order.sn)}}},[e._v("确认收货")]):e._e(),e.order.allowOperationVO.cancel?t("Button",{attrs:{type:"error",size:"small"},on:{click:function(t){return e.handleCancelOrder(e.order.order.sn)}}},[e._v("取消订单")]):e._e(),e.order.allowOperationVO.showLogistics||e.orderPackage.length>0||e.logistics?t("Button",{attrs:{type:"info",size:"small"},on:{click:function(t){return e.logisticsList()}}},[e._v("查看物流")]):e._e()],1):e._e(),e.order.order.verificationCode?t("p",{staticClass:"verificationCode"},[e._v(" 核验码："),t("span",[e._v(e._s(e.order.order.verificationCode))])]):e._e(),t("div",{staticClass:"order-card"},[t("p",{staticClass:"global_color fontsize_18"},[e._v(e._s(e.order.orderStatusValue))]),t("p",[e._v("订单号："+e._s(e.order.order.sn))]),t("div",{staticClass:"operation-time",staticStyle:{color:"#999"}},[e._v(" 操作时间："+e._s(e.order.order.updateTime||e.order.order.createTime)+" ")]),t("Steps",{staticClass:"progress",attrs:{current:e.progressList.length,direction:"vertical"}},e._l(e.progressList,(function(e,s){return t("Step",{key:s,attrs:{title:e.message,content:e.createTime}})})),1)],1),"LOGISTICS"===e.order.order.deliveryMethod&&"VIRTUAL"!==e.order.order.orderType?t("div",{staticClass:"order-card"},[t("h3",[e._v("收货人信息")]),t("p",[e._v("收货人："+e._s(e.order.order.consigneeName))]),t("p",[e._v("手机号码："+e._s(e._f("secrecyMobile")(e.order.order.consigneeMobile)))]),t("p",[e._v(" 收货地址："+e._s(e._f("unitAddress")(e.order.order.consigneeAddressPath))+" "+e._s(e.order.order.consigneeDetail)+" ")])]):e._e(),"SELF_PICK_UP"===e.order.order.deliveryMethod?t("div",{staticClass:"order-card"},[t("h3",[e._v("自提点信息")]),t("p",[e._v("自提点名称："+e._s(e.order.order.storeAddressPath))]),t("p",[e._v("联系方式："+e._s(e.order.order.storeAddressMobile))])]):e._e(),t("div",{staticClass:"order-card"},[t("h3",[e._v("付款信息")]),t("p",[e._v("支付方式："+e._s(e.order.paymentMethodValue))]),t("p",[e._v("付款状态："+e._s(e.order.payStatusValue))])]),e.order.order.verificationCode||"VIRTUAL"===e.order.order.orderType?e._e():t("div",{staticClass:"order-card"},[t("h3",[e._v("配送信息")]),t("p",[e._v("配送方式："+e._s(e.order.deliveryMethodValue))]),"LOGISTICS"===e.order.order.deliveryMethod?t("p",[e._v("配送状态："+e._s(e.order.deliverStatusValue))]):e._e(),e.logistics?t("p",[e._v(" 物流信息："+e._s(e.logistics.shipper||"暂无物流信息")+" ")]):e._e(),e.logistics?t("p",[e._v(" 物流单号："+e._s(e.logistics.logisticCode||"暂无物流单号")+" ")]):e._e(),e.logistics?t("div",{staticClass:"div-express-log"},[t("div",{staticClass:"express-log"},[t("p",[e._v("订单日志：")]),e._l(e.logistics.traces,(function(s,r){return t("div",{key:r},[t("span",{staticClass:"time"},[e._v(e._s(s.AcceptTime))]),t("span",{staticClass:"detail"},[e._v(e._s(s.AcceptStation))])])}))],2)]):e._e()]),"PAID"===e.order.order.payStatus?t("div",{staticClass:"order-card"},[t("h3",[e._v("发票信息")]),e.order.order.needReceipt&&e.order.receipt?[t("p",[e._v("发票抬头："+e._s(e.order.receipt.receiptTitle))]),t("p",[e._v("发票内容："+e._s(e.order.receipt.receiptContent))]),e.order.receipt.taxpayerId?t("p",[e._v(" 纳税人识别号："+e._s(e.order.receipt.taxpayerId)+" ")]):e._e()]:t("div",{staticStyle:{color:"#999","margin-left":"5px"}},[e._v("未开发票")])],2):e._e(),t("div",{staticClass:"goods"},[t("div",{staticClass:"shop-name"},[t("span",{on:{click:function(t){return e.shopPage(e.order.order.storeId)}}},[e._v(e._s(e.order.order.storeName))])]),t("table",[e._m(0),t("tbody",e._l(e.order.orderItems,(function(s,r){return t("tr",{key:r},[t("td",[t("img",{attrs:{src:s.image,alt:""},on:{click:function(t){return e.goodsDetail(s.skuId,s.goodsId)}}}),t("div",[t("p",{staticClass:"hover-color",on:{click:function(t){return e.goodsDetail(s.skuId,s.goodsId)}}},[e._v(" "+e._s(s.goodsName)+" ")])])]),t("td",[e._v(e._s(s.id))]),t("td",[e._v(e._s(e._f("unitPrice")(s.goodsPrice,"￥")))]),t("td",[e._v(e._s(s.num))]),t("td",[e._v(e._s(e.refundPriceList(s.isRefund)))]),t("td",[e._v(e._s(e._f("unitPrice")(s.refundPrice,"￥")))]),t("td",[e._v(e._s(e._f("unitPrice")(s.goodsPrice*s.num,"￥")))]),t("td",[s.afterSaleStatus.includes("NOT_APPLIED")||s.afterSaleStatus.includes("PART_AFTER_SALE")?t("Button",{staticClass:"mb_5",attrs:{type:"info",size:"small"},on:{click:function(t){return e.applyAfterSale(s.sn)}}},[e._v("申请售后")]):e._e(),"UNFINISHED"==s.commentStatus?t("Button",{staticClass:"fontsize_12 mb_5",attrs:{size:"small",type:"success"},on:{click:function(t){return e.comment(e.order.order.sn,r)}}},[e._v("评价")]):e._e(),"NO_APPLY"==s.complainStatus?t("Button",{staticClass:"fontsize_12",attrs:{type:"warning",size:"small"},on:{click:function(t){return e.complain(e.order.order.sn,r)}}},[e._v("投诉")]):e._e()],1)])})),0)]),t("div",{staticClass:"order-price"},[t("div",[t("span",[e._v("商品件数：")]),t("span",[e._v(e._s(e.order.order.goodsNum)+"件")])]),t("div",[t("span",[e._v("商品总价：")]),t("span",[e._v(e._s(e._f("unitPrice")(e.order.order.goodsPrice,"￥")))]),t("br")]),"VIRTUAL"!==e.order.order.orderType?t("div",[t("span",[e._v("运费：")]),t("span",[e._v("+"+e._s(e._f("unitPrice")(e.order.order.freightPrice,"￥")))]),t("br")]):e._e(),e.order.order.priceDetailDTO.couponPrice?t("div",[t("span",[e._v("优惠券：")]),t("span",[e._v("-"+e._s(e._f("unitPrice")(e.order.order.priceDetailDTO.couponPrice||0,"￥")))])]):e._e(),e.order.order.discountPrice?t("div",[t("span",[e._v("活动优惠：")]),t("span",[e._v("-"+e._s(e._f("unitPrice")(e.order.order.discountPrice,"￥")))])]):e._e(),e.order.order.priceDetailDTO.updatePrice?t("div",[t("span",[e._v("修改价格：")]),t("span",[e._v(e._s(e._f("unitPrice")(e.order.order.priceDetailDTO.updatePrice,"￥")))])]):e._e(),t("div",[t("span",[e._v("应付金额：")]),t("span",{staticClass:"actrual-price"},[e._v(e._s(e._f("unitPrice")(e.order.order.flowPrice,"￥")))])])])]),t("Modal",{attrs:{title:"请选择取消订单原因"},on:{"on-ok":e.sureCancel,"on-cancel":function(t){e.cancelAvail=!1}},model:{value:e.cancelAvail,callback:function(t){e.cancelAvail=t},expression:"cancelAvail"}},[t("RadioGroup",{attrs:{vertical:"",type:"button","button-style":"solid"},model:{value:e.cancelParams.reason,callback:function(t){e.$set(e.cancelParams,"reason",t)},expression:"cancelParams.reason"}},e._l(e.cancelReason,(function(s){return t("Radio",{key:s.id,attrs:{label:s.reason}},[e._v(" "+e._s(s.reason)+" ")])})),1)],1),t("Modal",{attrs:{width:"40"},model:{value:e.logisticsModal,callback:function(t){e.logisticsModal=t},expression:"logisticsModal"}},[t("p",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("查询物流")])]),t("div",{staticClass:"layui-layer-wrap"},[t("dl",[t("dt",[e._v("订单号：")]),t("dd",[t("div",{staticClass:"text-box"},[e._v(e._s(e.order.order.sn))])])])]),e._l(e.orderPackage,(function(s,r){return e.orderPackage.length>0?t("div",{key:r},[t("div",{staticClass:"layui-layer-wrap"},[t("dl",[t("dt",[e._v("物流公司：")]),t("dd",[t("div",{staticClass:"text-box"},[e._v(e._s(s.logisticsName))])])]),t("dl",[t("dt",[e._v("快递单号：")]),t("dd",[t("div",{staticClass:"text-box",attrs:{nctype:"ordersSn"}},[e._v(e._s(s.logisticsNo))])])]),t("div",{staticClass:"div-express-log"},[t("ul",{staticClass:"express-log express-log-name"},e._l(s.orderPackageItemList,(function(s,r){return t("li",{key:r},[t("span",{staticClass:"time",staticStyle:{width:"50%"}},[t("span",[e._v("商品名称：")]),t("span",[e._v(e._s(s.goodsName))])]),t("span",{staticClass:"time",staticStyle:{width:"30%"}},[t("span",[e._v("发货时间：")]),t("span",[e._v(e._s(s.logisticsTime))])]),t("span",{staticClass:"time",staticStyle:{width:"20%"}},[t("span",[e._v("发货数量：")]),t("span",[e._v(e._s(s.deliverNumber))])])])})),0),t("div",{staticClass:"div-express-log",staticStyle:{overflow:"hidden"}},[s.traces&&s.traces.traces?t("ul",{staticClass:"express-log"},e._l(s.traces.traces,(function(s,r){return t("li",{key:r},[t("span",{staticClass:"time"},[e._v(e._s(s.AcceptTime||s.acceptTime))]),t("span",{staticClass:"detail"},[e._v(e._s(s.AcceptStation||s.remark))])])})),0):t("ul",{staticClass:"express-log"},[t("li",[e._v("暂无物流信息")])])])])])]):e._e()})),0==e.orderPackage.length&&e.logistics?t("div",[t("div",{staticClass:"layui-layer-wrap"},[t("dl",[t("dt",[e._v("物流公司：")]),t("dd",[t("div",{staticClass:"text-box"},[e._v(e._s(e.logistics.shipper))])])]),t("dl",[t("dt",[e._v("快递单号：")]),t("dd",[t("div",{staticClass:"text-box",attrs:{nctype:"ordersSn"}},[e._v(e._s(e.logistics.logisticCode))])])]),t("div",{staticClass:"div-express-log"},[e.logistics&&e.logistics.traces?t("ul",{staticClass:"express-log"},e._l(e.logistics.traces,(function(s,r){return t("li",{key:r},[t("span",{staticClass:"time"},[e._v(e._s(s.AcceptTime))]),t("span",{staticClass:"detail"},[e._v(e._s(s.AcceptStation))])])})),0):t("ul",{staticClass:"express-log"},[t("li",[e._v("暂无物流信息")])])])])]):e._e(),t("div",{staticStyle:{"text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[t("Button",{on:{click:function(t){e.logisticsModal=!1}}},[e._v("取消")])],1)],2)],1):e._e()},a=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",{attrs:{width:"30%"}},[e._v("商品")]),t("th",{attrs:{width:"15%"}},[e._v("货号")]),t("th",{attrs:{width:"10%"}},[e._v("单价")]),t("th",{attrs:{width:"5%"}},[e._v("数量")]),t("th",{attrs:{width:"10%"}},[e._v("退款状态")]),t("th",{attrs:{width:"10%"}},[e._v("实际退款金额")]),t("th",{attrs:{width:"10%"}},[e._v("小计")]),t("th",{attrs:{width:"10%"}},[e._v("操作")])])])}],i=s("f8b7"),o=s("8194"),c={name:"order-detail",data(){return{order:{},progressList:[],logistics:"",cancelParams:{orderSn:"",reason:""},cancelAvail:!1,cancelReason:[],orderPackage:[],packageTraceList:[],logisticsModal:!1}},methods:{refundPriceList(e){switch(e){case"ALL_REFUND":return"全部退款";case"PART_REFUND":return"部分退款";case"NO_REFUND":return"未退款";case"REFUNDING":return"退款中";default:return"未退款"}},goodsDetail(e,t){let s=this.$router.resolve({path:"/goodsDetail",query:{skuId:e,goodsId:t}});window.open(s.href,"_blank")},shopPage(e){let t=this.$router.resolve({path:"/Merchant",query:{id:e}});window.open(t.href,"_blank")},getDetail(){Object(i["j"])(this.$route.query.sn).then(e=>{e.success&&(this.order=e.result,this.progressList=e.result.orderLogs,"LOGISTICS"===this.order.order.deliveryMethod&&(this.getOrderPackage(this.order.order.sn),this.traces()))})},getOrderPackage(e){Object(i["h"])(e).then(e=>{e.success&&(this.orderPackage=e.result)})},traces(){Object(i["i"])(this.$route.query.sn).then(e=>{e.success&&(this.logistics=e.result)})},logisticsList(){this.logisticsModal=!0,this.packageTraceList=this.orderPackage},received(e){Object(i["k"])(e).then(e=>{e.success&&(this.$Message.success("确认收货成功"),this.getDetail())})},goPay(e){this.$router.push({path:"/payment",query:{orderType:"ORDER",sn:e}})},applyAfterSale(e){this.$router.push({name:"ApplyAfterSale",query:{sn:e}})},comment(e,t){this.$router.push({path:"/home/addEval",query:{sn:e,index:t}})},complain(e,t){this.$router.push({name:"Complain",query:{sn:e,index:t}})},handleCancelOrder(e){this.cancelParams.orderSn=e,Object(o["f"])("CANCEL").then(e=>{e.success&&(this.cancelReason=e.result,this.cancelAvail=!0,this.cancelParams.reason=this.cancelReason[0].reason)})},sureCancel(){Object(i["b"])(this.cancelParams).then(e=>{e.success&&(this.$Message.success("取消订单成功"),this.getDetail(),this.cancelAvail=!1)})}},mounted(){this.getDetail()}},d=c,l=(s("c936"),s("2877")),n=Object(l["a"])(d,r,a,!1,null,"63e19508",null);t["default"]=n.exports}}]);