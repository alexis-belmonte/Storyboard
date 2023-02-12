import App from '@/App.vue';
import { StoryboardRoutes } from '@/logic/route';

import { StoryboardApi, StoryboardSession } from '@/logic/api';

import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import Cookies from 'js-cookie';

export class Storyboard {
    public static readonly API_HOST = 'http://localhost:1987';

    public static readonly COOKIE_SESSION_KEY = 'storyboard_sessionkey';

    private _app: Vue.App;
    private _api: StoryboardApi;

    private _session?: StoryboardSession;

    public constructor() {
        this._app = Vue.createApp(App)
        this._app.config.globalProperties.$app = this;

        let appRouter = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes: StoryboardRoutes.ROUTES
        })

        this._app.use(appRouter);
        this._app.mount('#app');

        this._api = new StoryboardApi(Storyboard.API_HOST);
    }

    public get session(): StoryboardSession | undefined {
        let sessionKey: string | undefined =
            Cookies.get(Storyboard.COOKIE_SESSION_KEY);
        
        if (this._session)
            return this._session;
        else if (sessionKey) {
            this._session = new StoryboardSession(sessionKey);

            /* TODO: Handle expired sessions */

            return this._session;
        }

        return undefined;
    }

    public set session(session: StoryboardSession | undefined) {
        if (session)
            Cookies.set(Storyboard.COOKIE_SESSION_KEY, session.key);
        else
            Cookies.remove(Storyboard.COOKIE_SESSION_KEY);

        this._session = session;
    }

    public get api(): StoryboardApi {
        return this._api;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $app: Storyboard;
    }
}
