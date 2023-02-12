import Home from '@/pages/Home.vue';
import Hello from '@/pages/Hello.vue';

export class AppRoute {
    public static readonly ROUTES = [
        { path: '/',        component: Home },
        { path: '/hello',   component: Hello }
    ]
};
