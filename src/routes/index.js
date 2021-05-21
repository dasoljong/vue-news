import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      // path: url 주소
      // component: url 주소로 갔을 때 표시될 컴포넌트
      path: "/news",
      name: "news",
      component: NewsView
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/user/:userName",
      name: "user",
      component: UserView
    },
    {
      path: "/item/:id",
      name: "item",
      component: ItemView
    }
  ]
});
