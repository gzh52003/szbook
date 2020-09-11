import getDetails from "./getDetails.js";
export default function operateDataBeforeRender(res,self){

    let result = JSON.parse(res);

        self.totoalDataNum = result.data[result.data.length - 1].orderNum;
        result.data.slice(0, result.data.length - 1).forEach(async (cur) => {
           let obj1 = cur.details;
          cur.goodsNum = 0;
          cur.totalPrice = parseFloat(cur.totalPrice);
          cur.isshow=false;
          obj1.forEach((item) => {
            // 计算订单商品总数量
            // console.log("item",item)
            cur.goodsNum += item.buynum;
          });
          // console.log("cur",cur)
          cur.totalPrice = cur.totalPrice.toFixed(2);
        });
        self.orderdata = result.data.slice(0, result.data.length - 1);

  }