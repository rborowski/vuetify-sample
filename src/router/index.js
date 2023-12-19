// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Todo from "../views/Todo.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: '/',
    component: Todo,
    name: 'Todo',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
