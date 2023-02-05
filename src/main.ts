import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import App from './App.vue'

import Home from './pages/Home.vue'

class Storyboard {
    static readonly TREE = [
        { path: '/', component: Home }
    ]

    private app: Vue.App;

    constructor() {
        this.app = Vue.createApp(App)
        
        let appRouter = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes: Storyboard.TREE
        })
        
        this.app.use(appRouter);
        this.app.mount('#app');
    }
}

const ø = new Storyboard()