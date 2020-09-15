# 项目名称：深圳书城

## 演示

```
+ 官网: https://www.szbookmall.com/
+ 上线网址
    - [后台管理系统](http://www.ihuanu.cn/szbook)
    - [深圳书城-app](http://www.ihuanu.cn/szbookapp)
```

## git仓库地址: 

```
https://github.com/gzh52003/szbook
```

## 技术

```
深圳书城后台管理系统
    前端：
    * Vue
    * Vue-Router
    * Vue-Cli
    * axios&fetch
    * elementUI

    后端：
    * Nodejs
    * Express
    * MongoDB

深圳书城 app

    前端：
    * Vue
    * Vue-Router
    * Vue-Cli
    * VueX
    * axios
    * vantUI

    后端：
    * Nodejs
    * Express
    * MongoDB
```

## 团队与分工

```
+ 组长：蔡珊珊 组员：刘益良，林马伦
+ 负责模块说明
- **APP**
    ***蔡珊珊***： 
        后端工作：数据爬取 数据库数据结构设置 order的增删改查接口
        前端工作：登录注册模块
                 Mine模块(界面展示，退出登录功能)
                 购物车模块
                 VueX初始化数据设置
                 帮队友调BUG
        管理系统
        后端工作：数据爬取 数据库数据结构设置 order的增删改查接口
        前端工作：订单管理模块，分页显示，分页大小设定，字段查询，实时数据返回
        
   ***林马伦***：
        后端工作：编写商品分类、商品列表的接口
        前端工作：商品分类
                 商品列表（排序功能、页面分页功能）
                 设置自身模块路由跳转
        管理系统
        后端工作：用户列表增删改查接口、登录效验接口、数据库模糊查询等
        前端工作：用户列表模块（增删改查上传图片功能），分页显示、字段查询、实时数据返回

   ***刘益良***：
        后端工作：获取商品信息、商品添加到购物车的接口
        前端工作：首页（图片懒加载，轮播图，原生回到顶部）
                 商品详情（添加购物车功能、页面分页功能）
                 热点页面（渲染，无限加载）
                 单页面web页面路由跳转
- **后台管理系统**
        后端工作：服务器搭建、
                 登录、注册接口编写，
                 商品列表（增删改查）接口编写、
                 图片上传删除接口，
                 验证码接口编写，
                 其他express中间件编写等
        前端工作：商品列表模块（增删改查上传图片功能），
                 分页显示、
                 书名查询、
                 实时数据返回，
                 注册用户名去重，
                 注册校验，
                 登录验证码，
                 登录注册基本接口实现
                    
```

## 项目目录说明

```
+ 后台管理系统：

    ├─public        网站根目录
    │  └─image      图片
    ├─server        服务器
    └─src
        ├─api           封装请求api
        ├─assets        静态资源 
        ├─components    组件
        ├─pages         页面
        │  ├─goods      商品管理页
        │  ├─home       首页
        │  ├─login      登录
        │  ├─reg        注册
        │  └─user       用户管理
        ├─router        路由配置
        └─utils         工具包

+ webapp：
     ├─public   网站根目录
     │  └─img   图片
     ├─server   服务器
     └─src
         ├─assets       静态资源           
         ├─components   组件
         ├─router       路由配置
         ├─store        Vuex
         ├─utils        工具包
         └─views        页面
```

## 项目截图
