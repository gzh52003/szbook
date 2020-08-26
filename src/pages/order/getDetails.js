export default async function getDetails(query={goodsID:[]}){
// query={goodsID:[{isbn:xxx},{isbn:xxxx}]}
    let params='goodsID=';
    // {isbn:xxxxx}
    query.goodsID.forEach(cur=>{
       params+=cur.isbn+','
    })
   const res= await fetch (`http://42.194.179.50/api/goods?`+params).then(details=>{
                return details.text()
    })
    return res;
}