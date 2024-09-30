
module.exports = {
 routes: [
    {
      path: "/", // 首页
      name: "Index",
      // component: Index,
      
    },
    {
      path: "/topic", // 首页
      name: "topic",
      // component: topic,
    },
    {
      path: "/login", // 登陆
      name: "login",
      // component: Login,
    },
    {
      path: "/SignUp", // 注册
      name: "SignUp",
      // component: SignUp,
      meta: {
        title: "注册",
      },
    },
    {
      path: "/forgetPassword", // 忘记密码
      name: "forgetPassword",
      // component: ForgetPassword,
      meta: {
        title: "忘记密码",
      },
    },
    {
      path: "/goodsList", // 商品列表
      name: "GoodsList",
      // component: GoodsList,
      meta: {
        title: "商品列表",
      },
    },
    {
      path: "/goodsDetail", // 商品详情
      name: "GoodsDetail",
      // component: GoodsDetail,
      meta: { title: "商品详情" },
    },
    {
      path: "/pointGoodsDetail", // 商品详情
      name: "PointGoodsDetail",
      // component: PointGoodsDetail,
      meta: { title: "积分商品" },
    },
    {
      path: "/shoppingCart", // 头部购物车
      name: "ShoppingCart",
      // component: ShoppingCart,
    },
    {
      path: "/cart", // 购物车
      name: "Cart",
      // component: Cart,
      meta: { title: "购物车" },
    },
    {
      path: "/pay", // 支付页面
      name: "Pay",
      // component: Pay,
      meta: { title: "订单结算" },
    },
    {
      path: "/payMent",
      name: "PayMent",
      // component: PayMent,
    },
    {
      path: "/PointMall",
      name: "PointMall",
      // component: PointMall,
      meta: { title: "积分商城" },
    },
    {
      path: "/qrpay", // 三方支付
      name: "qrpay",
      // component: ThirdPay,
    },
    {
      path: "/payDone", // 支付成功页面
      name: "PayDone",
      // component: PayDone,
    },
    {
      path: "/article", // 文章页面
      name: "article",
      // component: article,
      meta: {
        title: "帮助中心",
      },
    },
    {
      path: "/article/detail", // 文章页面
      name: "articleDetail",
      // component: articleDetail,
      meta: {
        title: "帮助中心",
      },
    },
    {
      path: "/shopEntry",
      name: "shopEntry",
      // component: ShopEntry,
      meta: {
        title: "店铺入驻",
      },
    },
    {
      path: "/coupon",
      name: "coupon",
      // component: Coupon,
      meta: {
        title: "领券中心",
      },
    },
    {
      path: "/seckill",
      name: "seckill",
      // component: seckill,
      meta: {
        title: "限时秒杀",
      },
    },
    {
      path: "/home", // 主页
      // component: Home,
      children: [
        {
          path: "/",
          name: "Home",
          // component: UserMain,
          meta: {
            title: "会员中心",
          },
        },
        {
          path: "MyTracks",
          name: "MyTracks",
          // component: MyTracks,
          meta: { title: "我的足迹" },
        },
        {
          path: "MoneyManagement",
          name: "MoneyManagement",
          // component: MoneyManagement,
        },
        {
          path: "Complain",
          name: "Complain",
          // component: Complain,
        },
        {
          path: "Coupons",
          name: "Coupons",
          // component: Coupons,
        },
        {
          path: "CommentList",
          name: "CommentList",
          // component: CommentList,
          mate: { title: "评价列表" },
        },
        {
          path: "AddEval",
          name: "AddEval",
          // component: AddEval,
          mate: { title: "添加评价" },
        },
        {
          path: "EvalDetail",
          name: "EvalDetail",
          // component: EvalDetail,
          mate: { title: "评价详情" },
        },
        {
          path: "ComplainList",
          name: "ComplainList",
          // component: ComplainList,
        },
        {
          path: "ComplainDetail",
          name: "ComplainDetail",
          // component: ComplainDetail,
        },
        {
          path: "AccountSafe",
          name: "AccountSafe",
          // component: AccountSafe,
        },
        {
          path: "ModifyPwd",
          name: "ModifyPwd",
          // component: ModifyPwd,
        },
        {
          path: "Favorites",
          name: "Favorites",
          // component: Favorites,
          meta: { title: "我的收藏" },
        },
        {
          path: "Distribution",
          name: "Distribution",
          // component: Distribution,
          meta: { title: "分销推荐" },
        },
        {
          path: "Point",
          name: "Point",
          // component: Point,
          meta: { title: "我的积分" },
        },
        {
          path: "Profile",
          name: "Profile",
          // component: Profile,
        },
        {
          path: "AfterSale",
          name: "AfterSale",
          // component: AfterSale,
          meta: { title: "售后" },
        },
        {
          path: "ApplyAfterSale",
          name: "ApplyAfterSale",
          // component: ApplyAfterSale,
          meta: { title: "申请售后" },
        },
        {
          path: "/home/MyAddress",
          name: "MyAddress",
          // component: MyAddress,
          meta: { title: "收货地址" },
        },
        {
          path: "AddAddress",
          name: "AddAddress",
          // component: AddAddress,
        },
        {
          path: "MsgList",
          name: "MsgList",
          // component: MsgList,
          meta: { title: "我的消息" },
        },
        {
          path: "MsgDetail",
          name: "MsgDetail",
          // component: MsgDetail,
          meta: { title: "我的消息" },
        },
        {
          path: "MyOrder",
          name: "MyOrder",
          // component: MyOrder,
          meta: { title: "我的订单" },
        },
        {
          path: "OrderDetail",
          name: "OrderDetail",
          // component: OrderDetail,
          meta: { title: "订单详情" },
        },
        {
          path: "AfterSaleDetail",
          name: "AfterSaleDetail",
          // component: AfterSaleDetail,
          meta: { title: "售后详情" },
        },
      ],
    },
    {
      path: "/merchant",
      name: "Merchant",
      // component: Merchant,
      meta: { title: "店铺" },
    },
  ],
}
