const allow_origin = ['42.194.179.50','http://www.ihuanu.cn']
// let curOrigin = http://10.3.138.33:8080

function cors(req,res,next){
    // 获取请求者的域名
    if(allow_origin.includes(req.get('host'))){
        res.set({
            "Access-Control-Allow-Origin":"http://www.ihuanu.cn",
            "Access-Control-Allow-Headers":"Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
            "Access-Control-Allow-Methods":"PUT,POST,GET,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Credentials":true,
            "Set-cookie":"key=value;SameSite:None;Secure:true"
        })
        // 跨域请求CORS中的预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }
    }else{
        res.send('401');
    }

}

module.exports = cors;