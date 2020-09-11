import getDetails from "./getDetails.js";
export default function operateDataBeforeRender(res,self){

    let result = JSON.parse(res);
        self.totoalDataNum = result.data[result.data.length - 1].orderNum;
        result.data.slice(0, result.data.length - 1).forEach(async (cur) => {
          let obj1 = cur.details;
          cur.goodsNum = 0;
          cur.totalPrice = 0;
          cur.isshow=false;
          obj1.forEach((item) => {
            // 计算订单商品总数量
            cur.goodsNum += item.buynum;
          });
          getDetails({ goodsID: obj1 }).then((res) => {
            const obj2 = JSON.parse(res).data;
            // order数据库中记录订单详情字段：isbn，buynum；
            //根据isbn到goods数据库中取回商品详细信息，数据合并
            var obj = obj2.map((item, index) => {
              return { ...obj1[index], ...item };
            });
  
            obj.forEach((item) => {
              //  计算订单总价
              cur.totalPrice +=
                (parseFloat(item.buynum) * parseFloat(item.line_price.substr(1)))==0?item.totalPrice:parseFloat(item.buynum) * parseFloat(item.line_price.substr(1));
            });
            cur.totalPrice = cur.totalPrice.toFixed(2);
            cur.details = obj;
          });
        });
        self.orderdata = result.data.slice(0, result.data.length - 1);
  }