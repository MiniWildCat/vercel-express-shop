(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b52aa5b"],{"669d":function(t,s,i){},a8d2:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"seckill-list"},[s("BaseHeader"),s("Search"),s("div",{staticClass:"promotion-decorate"},[t._v("限时秒杀")]),s("ul",{staticClass:"time-line"},[t._l(t.list,(function(i,e){return[e<5?s("li",{key:e,class:{currTimeline:t.currIndex===e},on:{click:function(s){t.currIndex=e}}},[s("div",[t._v(t._s(i.timeLine+":00"))]),t.currIndex===e?s("div",[s("p",[t._v(t._s(t.nowHour>=i.timeLine?"秒杀中":"即将开始"))]),s("p",[t._v(" "+t._s(t.nowHour>=i.timeLine?"距结束":"距开始")+" "+t._s(t.currTime)+" ")])]):s("div",{staticClass:"not-curr"},[t._v(" "+t._s(t.nowHour>=i.timeLine?"秒杀中":"即将开始")+" ")])]):t._e()]}))],2),s("div",{staticClass:"goods-list"},[0===t.goodsList.length?s("empty"):t._l(t.goodsList,(function(i,e){return s("div",{key:e,staticClass:"goods-show-info1",on:{click:function(s){return t.goGoodsDetail(i.skuId,i.goodsId)}}},[s("div",{staticClass:"goods-show-img"},[s("img",{attrs:{width:"200",height:"200",src:i.goodsImage}})]),s("div",{staticClass:"goods-show-price"},[s("span",[s("span",{staticClass:"seckill-price text-danger"},[t._v(t._s(t._f("unitPrice")(i.price,"￥")))]),s("span",{staticStyle:{color:"#999","text-decoration":"line-through"}},[t._v(t._s(t._f("unitPrice")(i.originalPrice,"￥")))])])]),s("div",{staticClass:"goods-show-detail",staticStyle:{"margin-bottom":"20px"}},[s("span",[t._v(t._s(i.goodsName))])]),s("div",{staticClass:"goods-seckill-btn",class:{"goods-seckill-btn-gray":t.nowHour<t.list[t.currIndex].timeLine}},[t._v(" "+t._s(t.nowHour>=t.list[t.currIndex].timeLine?"立即抢购":"即将开始")+" ")]),t.nowHour>=t.list[t.currIndex].timeLine&&i.quantity<=i.salesNum?s("div",{staticClass:"goods-seckill-btn goods-seckill-btn-gray"},[t._v(" 已售罄 ")]):t._e(),t.nowHour>=t.list[t.currIndex].timeLine?s("div",{staticClass:"goods-show-num1"},[s("span",[t._v("已售"+t._s((i.quantity&&i.quantity>0?Math.ceil(i.salesNum/i.quantity*100):100)+"%"))]),s("Progress",{staticClass:"ml_10",staticStyle:{width:"110px"},attrs:{"hide-info":"","stroke-color":"#df0021",percent:i.quantity&&i.quantity>0?Math.ceil(i.salesNum/i.quantity*100):100}})],1):t._e(),s("div",{staticClass:"goods-show-seller"},[s("span",[t._v(t._s(i.storeName))])])])}))],2),s("BaseFooter")],1)},o=[],n=i("f74c"),r={data(){return{list:[],goodsList:[],interval:null,currIndex:0,currTime:0,diffSeconds:0,nowHour:(new Date).getHours()}},beforeDestroy(){clearInterval(this.interval)},watch:{currIndex(t){clearInterval(this.interval),this.interval=null,this.nowHour=(new Date).getHours(),this.countDown(t),this.goodsList=this.list[t].seckillGoodsList},diffSeconds(t){const s=Math.floor(t/3600),i=Math.floor(t/60)%60,e=t%60;function o(t){return t<10?"0"+t:t}this.currTime=o(s)+":"+o(i)+":"+o(e),t<=0&&(clearInterval(this.interval),this.interval=null)}},methods:{getListByDay(){Object(n["d"])().then(t=>{t.success&&(this.list=t.result,this.goodsList=this.list[0].seckillGoodsList,this.countDown(this.currIndex))})},goGoodsDetail(t,s){let i=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:s}});window.open(i.href,"_blank")},countDown(t){let s=new Date((new Date).toLocaleDateString()).getTime(),i=(new Date).getTime(),e=0,o=(new Date).getHours();this.list[t].timeLine>o?e=s+3600*this.list[t].timeLine*1e3:this.list[t].timeLine<=o&&(e=t===this.list.length-1?s+864e5:s+3600*this.list[t+1].timeLine*1e3),this.diffSeconds=Math.floor((e-i)/1e3),this.interval=setInterval(()=>{this.diffSeconds--},1e3)}},mounted(){this.getListByDay()}},a=r,l=(i("bbd8"),i("2877")),c=Object(l["a"])(a,e,o,!1,null,"391366c5",null);s["default"]=c.exports},bbd8:function(t,s,i){"use strict";i("669d")}}]);