import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import userService from "../services/UserService";

const routes = [
    {path: '/', component: Home, meta: {requiredAuth: true}},
    {path: '/login', component: Login, meta: {requiredAuth: false}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const response = await userService.getAuthUser();
    const isLoggedIn = response && response.data;
    if (to.meta.requiredAuth && !isLoggedIn) return next('/login');
    next()
})

export default router;
