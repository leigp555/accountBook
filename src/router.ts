import {createRouter, createWebHashHistory} from "vue-router";
import Record from "./components/Record.vue";
import Detail from "./components/Detail.vue";
import Statistics from "./components/Statistics.vue";

const history = createWebHashHistory()
const routers = [
    {path: "/", component:Record},
    {path: "/record",component: Record},
    {path:"/detail",component: Detail},
    {path:"/statistics",component: Statistics}
]
export const router = createRouter({
    history: history,
    routes: routers
})