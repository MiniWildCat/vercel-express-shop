var express = require('express');
var cors = require('cors');
var fs = require('fs')
var path = require('path')
var ejs=require('ejs')
var superagent = require('superagent');
var charset = require('superagent-charset');
charset(superagent);

var app = express();
app.use(cors())
// 静态资源访问
app.use(express.static(__dirname + '/public'));

const {routes} = require('./public/router.js')
const {searchList,searchListCallback} = require('./src/head/index.js')
// 相对路径前缀
const dir = "/public"
// 匹配所有路径
app.get('*', function(req, res) {
    if(req.path.endsWith('.css') || req.path.endsWith('.js') || req.path.endsWith('.map') || req.path.endsWith('.png') || req.path.endsWith('.jpg') || req.path.endsWith('.ico') || req.path.endsWith('.svg')){
        // 如果是文件，直接返回
        res.sendFile(path.join(__dirname,dir + req.path))
        return;
    }else{
        // 其余路径需要经过 ejs 模板引擎渲染
        fs.readFile(path.join(__dirname,dir +'/200.html'),'utf8',async function(err,data){
            let frontPath = req.path;
            console.log("head path:",frontPath)
            // const metaInfoMap = {
            //     "home": {
            //         title: '页面标题-首页-后端',
            //         meta: [{
            //             name: 'keywords',
            //             content: 'home page is metaInfo title '
            //         }]
            //     },
            //     "about": {
            //         title: '页面标题-关于-后端',
            //         meta: [{
            //             name: 'keywords',
            //             content: 'about page is metaInfo title '
            //         }]
            //     }
            // }
            // 解析router.json
            // const router = require('public/router.json')
            // console.log("router:",router)
            // const metaInfoMap = router;
            // let metaInfo = {title: '',meta: []}
            // for(let key in metaInfoMap){
            //     if(frontPath.slice(1).startsWith(key)){
            //         metaInfo = metaInfoMap[key]
            //         break;
            //     }
            // }
            // console.log("数据是",metaInfo)
            // 解析router.js
            let metaInfo = {
                "title": "lilishop-购物商城",
                "meta": [{
                    "name": "keywords",
                    "content": "购物、商城、LILI"
                },{
                    "name": "description",
                    "content": "lilishop购物商城，什么都有的卖"
                }]
            }
           if(frontPath == '/nuxt'){
            try{
                superagent.get(decodeURI(req.query.url))
                    .charset('utf-8')  // 'gb2312'
                    .end(function(err, sres) {
                        res.json({code: sres?.text});
                    });
            }catch(e) {
                console.log(e)
                res.json({code: 500});
            }
            return;
           }else if(searchList.includes(frontPath)){
                let res= await searchListCallback[frontPath](req);
                if(res) metaInfo = res;
            }else if(frontPath != '/'){
                routes.some(item=>{
                    if(item.children){
                        if(frontPath.startsWith(item.path)){
                            let findItem = item.children.find(one=>frontPath.endsWith(one.path))
                            if(findItem && findItem.meta?.title){
                                metaInfo.title = findItem.meta.title
                                metaInfo.meta[0].content = findItem.meta.title+"、"+findItem.meta.title
                                metaInfo.meta[0].content = '商品描述而已吧~'
                            }
                            return false
                        }
                    }else{
                        if(item.path == frontPath){
                            if(item.meta?.title){
                                metaInfo.title = item.meta.title
                                metaInfo.meta[0].content = item.meta.title+"、"+item.meta.title
                                metaInfo.meta[0].content = '商品描述而已吧~'
                            }
                            return false;
                        }
                    }
                })
            }
            console.log("meta",metaInfo)
            res.end(ejs.render(data,{
                metaInfo
            }))
        })
    }
})

// 关闭nodejs的监听
// var server = app.listen(7001, function() {
//     // var host = server.address().address
//     var host = 'localhost'
//     var port = server.address().port
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })
// 暴露app实例
module.exports = app;