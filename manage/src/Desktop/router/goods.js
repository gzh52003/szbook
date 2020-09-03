const express = require("express");
const router = express.Router();

// 导入自定义的mongo模块
const mongo = require("../utils/mongo");


router.get("/",async (req,res)=>{
  let {page=1,size=9,sort="add_time"} = req.query;
  const skip = (page-1)*size;
  const limit = size*1;
  sort = sort.split(',');
  const result = await mongo.find('goods',{},{skip,limit,sort});
  res.send(JSON.stringify(result))
})

router.delete("/:id",async (req,res)=>{
  const {id} = req.params;
  try{
    const result = await mongo.remove('goods',{_id:id})
    res.send(JSON.stringify([{code:"1"}]))
  }catch(err){
    res.send(JSON.stringify([{coe:"0"}]));
  }
})
router.post("/",async (req,res)=>{
  console.log(req.body);
  const {name} = req.body;
  try{
    const result = await mongo.insert('goods',{_id:id})
    res.send(JSON.stringify([{code:"1"}]))
  }catch(err){
    res.send(JSON.stringify([{coe:"0"}]));
  }
})








module.exports = router;