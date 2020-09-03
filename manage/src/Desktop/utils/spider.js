const request = require("request");
const cheerio = require("cheerio");
// 导入mongo的模块
const { insert, find } = require("./mongo");
const fs = require("fs");
const path = require("path");

request("http://www.harborhousehome.com/product-list-single-589/3#pg",async (err,res,body)=>{
  let $ = cheerio.load(body);
  let goodsList = [];
  $(".Pwrapper").find(".product").each((index,ele)=>{
    let imgurl = $(ele).find(".hoverSwap").attr("data-defurl");
    let title = $(ele).find("h4").find("a").text();
    let price = $(ele).find(".price").text();
    // 图片转存
    let myImgurl = path.basename(imgurl);
    request(imgurl).pipe(fs.createWriteStream('../img/'+myImgurl))
    // 价格转纯数字,图片路径更改
    price = price.match(/\d+/)[0];
    let goods = {
      title,
      price,
      imgurl:"img/"+myImgurl
    };
    goodsList.push(goods);
  })
  // 调用自定义的mongo模块
  insert("goods",goodsList)
})