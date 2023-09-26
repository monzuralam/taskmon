import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Dashboard from "./components/Dashboard.vue";
import Tasks from "./components/Tasks.vue";
import TaskView from "./components/TaskView.vue";
import AddTask from "./components/AddTask.vue";
import Errors from "./components/errors.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/tasks",
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    component: TaskView,
  },
  {
    path: "/task-add/",
    component: AddTask,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Errors,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");

export default router;
