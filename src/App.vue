<template>
  <div id="app">
    <el-container>
      <el-aside width="asideWidth">
        <div class="icon" :style="{width:asideWidth}" @click="onClick"><i class="el-icon-menu"></i></div>
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
            <el-submenu v-if="item.subs" v-bind:index="''+mindex">
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
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header height="56px" >

        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>



//导入iconfont全局样式
import "./assets/iconfont/iconfont.css";

export default {
  name: "App",
  data() {
    return {
      menus: [
        { title: "首页", icon: "icon-shuju", to: "/index" },
        {
          title: "会员管理",
          icon: "icon-huiyuan",
          subs: [
            { title: "会员列表", to: "/vipList" },
            { title: "会员充值", to: "/vipRecharge" }
          ]
        },
        {
          title: "仓库管理",
          icon: "icon-cangku",
          subs: [
            { title: "采购管理", to: "/storeAdd" },
            { title: "产品盘点", to: "/storeList" }
          ]
        },
        {
          title: "商品管理",
          icon: "icon-shangpin",
          subs: [
            { title: "新增商品", to: "/goodsAdd" },
            { title: "商品列表", to: "/goodsList" }
          ]
        }
      ],
      isCollapse: false,
      asideWidth: "200px"
    };
  },
  methods: {
    onClick() {
      this.isCollapse = !this.isCollapse;
      this.asideWidth = this.isCollapse ? "65px" : "200px";
    }
  }
};
</script>

<style>
/* <link rel="stylesheet" href="./css/iconfont.css"> */
body {
  margin: 0;
  padding: 0;
  /* background-color: #545c64; */
}
#app {
}

.el-menu {
  border-right: 0;
}
.el-header,
.el-footer {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 56px;
  
}
/* .el-header:hover{
    background-color: rgb(67,74,80);
  } */

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-aside {
  height: 100%;
  background: #545c64;
}
.el-aside .icon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 56px;
  padding: 0 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #545c64;
}
.el-aside .icon i {
  color: #909399;
}
.el-aside .icon:hover {
  background-color: rgb(67, 74, 80);
}

.header .container {
  flex-grow: 1;
}
</style>