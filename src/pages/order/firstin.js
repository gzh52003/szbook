export async function findData(query={page:1,size:10}){
    let params="";
        // params+=('sortKey='+query.sort[0]);
        // params+=('sort='+query.sort[1]);
        params+=('page='+query.page);
        params+=('&size='+query.size);
           const res= await fetch(`http://42.194.179.50/api/order?`+params).then(res=>{
                return res.text();
            })

   return res;

}
export async function changeData(query={_id:'',address:'',phone:''}){
       const res= await fetch(`http://42.194.179.50/api/order`,{
           method:'put',
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
            address:query.address,
            phone:query.phone,
            _id:query._id,
           })
       }).then(res=>{
            // resolve()
            return res.text();
        })
    return res;
}
export async function deleteData(query={_id:''}){
       const res= await fetch(`http://42.194.179.50/api/order/`+query._id,{
           method:'DELETE'
       }).then(res=>{
            return res.text();
        })
    return res;
}
