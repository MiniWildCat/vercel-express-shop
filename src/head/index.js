module.exports = {
    searchList: ['/goodsList','/goodsDetail'],
    searchListCallback: {
        '/goodsList':async function(req){
            const {getCategorySEO} = require('./goods');
            try{
                let res = await getCategorySEO(0);
                if (res.success) {
                    let cateListSEO = res.result;
                    let keywords = [];
                    const arr = req.query.categoryId.split(',')
                    let tabBar = {}
                    if (arr.length > 0) {
                        tabBar = cateListSEO.filter(e => {
                        return e.id === arr[0]
                        })[0]
                        keywords.push(tabBar.name);
                    }
                    if (arr.length > 1) {
                        const first = tabBar.children.filter(e => {
                        return e.id === arr[1]
                        })[0]
                        keywords.push(first.name);
                        tabBar.first = first;
                    }
                    if (arr.length > 2) {
                        const second = tabBar.first.children.filter(e => {
                        return e.id === arr[2]
                        })[0]
                        keywords.push(second.name);
                    }
                    return {
                        title: keywords[0],
                        meta: [
                            {hid: 'description',name:'description',content: keywords.join('、') },
                            {hid: 'keywords',name:'keywords',content: "买"+keywords[0]+"就到lilishop商城"}
                        ]
                    }
                }
            }catch(e){
                console.log(e)
            }
            return null;
        },
        '/goodsDetail':async function(req){
            const {goodsSkuDetailSEO} = require('./goods');
            try{
                let res = await goodsSkuDetailSEO(req.query);
                if (res.success) {
                    const result = res.result;
                    const cateName = res.result.categoryName;
                    const cateId = result.data.categoryPath.split(",");
                    const cateArr = [];
                    cateId.forEach((e, index) => {
                    // 插入分类id和name
                    cateArr.push({
                        id: e,
                        name: cateName ? cateName[index] : "",
                    });
                    });
                    let categoryBar = cateArr;
                    let goodsMsg = res.result;
                    // 返回meta数据
                    return {
                        title: goodsMsg?.data?.goodsName,
                        meta: [
                            {hid: 'description',name:'description',content: goodsMsg?.data?.sellingPoint },
                            {hid: 'keywords',name:'keywords',content: categoryBar.map(item=>item.name).join('、')}
                        ]
                    }
                } else {
                }
            }catch(e){
                console.log("出现异常",e)
            }
            return null;
        },
    }
}