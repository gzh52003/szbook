const express = require("express");
const { Router } = require("express");
// const user = require("./user");
const goods = require("./goods");
const reg = require("./reg")
// 必须调用Router方法，不能直接使用！！！
const router = Router();

// router.use("/user",user);
router.use("/goods",goods);
router.use("/reg",reg);





module.exports = router;