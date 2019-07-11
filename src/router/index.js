import Vue from 'vue'
import Router from 'vue-router'
import Home from "./home";
import Boiling from "./boiling";
import Topic from "./topic";
import Brochure from "./brochure";
import Activity from "./activity";

Vue.use(Router)

export default new Router({
  routes: [
     Home,
     Boiling,
     Topic,
     Brochure,
     Activity,
  ]
})
