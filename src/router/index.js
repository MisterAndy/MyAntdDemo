import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//解决vue-router在3.0版本以上重复点击菜单报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    name: "",
    redirect: "/login"
  },
  {
    path: "/login", //url
    name: "Login",
    component: () => import("pages/login/Login")
  }
];

const router = new VueRouter({
  routes
});

export default router;
