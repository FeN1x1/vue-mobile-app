import Vue from "vue";
import VueRouter from "vue-router";
import Rewards from "../views/Rewards.vue";
import Coach from "../views/Coach.vue";
import Doctor from "../views/Doctor.vue";
import Me from "../views/Me.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/rewards",
    name: "Rewards",
    component: Rewards,
  },
  {
    path: "/coach",
    name: "Coach",
    component: Coach,
  },
  {
    path: "/doctor",
    name: "Doctor",
    component: Doctor,
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
