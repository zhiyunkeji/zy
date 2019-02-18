import Vue from 'vue'
import Router from 'vue-router'


//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Router)


//导入路由模块
import GoodsAdd from '../components/goodsAdd';
import GoodsList from '../components/goodsList';
import Index from '../components/index';
import StoreAdd from '../components/storeAdd';
import StoreList from '../components/storeList';
import VipRecharge from '../components/vipRecharge';
import VipList from '../components/vipList';


export default new Router({
  routes: [
    {path:'/index',component:Index},
    {path:'/goodsAdd',component:GoodsAdd},
    {path:'/goodsList',component:GoodsList},
    {path:'/storeAdd',component:StoreAdd},
    {path:'/storeList',component:StoreList},
    {path:'/vipRecharge',component:VipRecharge},
    {path:'/vipList',component:VipList},
    {path:'*',redirect:'/index'}//设置默认路径
  ]
})
