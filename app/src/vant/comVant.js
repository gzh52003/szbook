/**
 * comVant.js ：按需引入组件文件
 *
 */
import Vue from "vue";
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon,
  TreeSelect,
  Image as VanImage,
  Search,
  NavBar,
  Toast,
  List,
  Tab,
  Tabs,
  PullRefresh,
  Grid,
  GridItem,
  Card,
} from "vant";

export default function() {
  Vue.use(Button);
  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  Vue.use(Lazyload);
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Icon);
  Vue.use(TreeSelect);
  Vue.use(VanImage);
  Vue.use(Search);
  Vue.use(NavBar);
  Vue.use(Toast);
  Vue.use(List);
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(PullRefresh);
  Vue.use(Grid);
  Vue.use(GridItem);
  Vue.use(Card);
}
