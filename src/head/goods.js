const {request:requestSEO, Method} = require('./request_seo.js');


// id获取商品Sku详情(seo版本)
function goodsSkuDetailSEO (params) {
  return requestSEO({
    url: `/buyer/goods/goods/sku/${params.goodsId}/${params.skuId}`,
    method: Method.GET,
    params
  });
}

// 获取所有商品分类(seo版本)
function getCategorySEO (parentId) {
  return requestSEO({
    url: `/buyer/goods/category/get/${parentId}`,
    method: Method.GET,
    needToken: false
  });
}

module.exports = {
  goodsSkuDetailSEO,
  getCategorySEO
}