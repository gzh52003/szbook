export default async function(query={page:1,size:10}){
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