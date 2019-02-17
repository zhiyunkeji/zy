<template>
  <div id="app">
    <el-container>
      <el-header>
        <div  @click="onClick">头</div>
      </el-header>
    <el-container>
      <el-aside width="asideWidth">
        <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        default-active="/index"
        :collapse="isCollapse"
        router
        >

        <template v-for="(item,mindex) in menus">
          <el-submenu v-if="item.subs"  v-bind:index="''+mindex">
            <template slot="title">
              <i class="iconfont" v-bind:class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(sItem,sIndex) in item.subs" :index="sItem.to">{{sItem.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else v-bind:index="item.to">
            <i class="iconfont" v-bind:class="item.icon"></i>
            <span  slot="title">{{item.title}}</span>
          </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
    </el-container>

    
  </div>
</template>

<script>

import './assets/iconfont/iconfont.css'
export default {
  name: 'App',
  data(){
    return{
      menus:[{title:"首页",icon:"icon-shuju",to:"/index"},
      {title:"会员管理",icon:"icon-huiyuan",subs:[{title:'新增会员',to:'/vipAdd'},{title:'会员列表',to:'/vipList'}]},
      {title:"仓库管理",icon:"icon-cangku",subs:[{title:"采购管理",to:'/storeAdd'},{title:"产品盘点",to:'/storeList'}]},
      {title:"商品管理",icon:"icon-shangpin",subs:[{title:'新增商品',to:'/goodsAdd'},{title:'商品列表',to:'/goodsList'}]},
      ],
      isCollapse:false,
      asideWidth:"201px"
    }
  },
  methods: {
     onClick(){
       this.isCollapse = !this.isCollapse;
       this.asideWidth = this.isCollapse?'65px':'201px'
     }
  },
}
</script>

<style>
/* <link rel="stylesheet" href="./css/iconfont.css"> */
body{
  margin: 0;
  padding:0;
}
#app {
 
}
.el-header, .el-footer {
    background-color: #545c64;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* min-height: 100%; */
  }
</style>