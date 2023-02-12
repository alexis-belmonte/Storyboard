import axios, { Axios } from 'axios';

import type { UserLogInRequest, UserLogInResponse, UserLogOutRequest, UserLogOutResponse } from '@/logic/interface/user';
import { RestStatus } from '@/logic/interface/rest';

export class StoryboardPoleError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export abstract class StoryboardPole {
    private _server: Axios;

    private _host: string;
    private _pole: string;

    constructor(host: string, pole: string) {
        this._host = host;
        this._pole = pole;

        this._server = axios.create({
            baseURL: `${this._host}/${this._pole}`,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    protected get server(): Axios {
        return this._server;
    }
}

export class StoryboardUserPole extends StoryboardPole {
    public static readonly POLE = 'user';

    public static readonly ACTION_SIGNIN = '/sign-in'
    public static readonly ACTION_LOGIN = '/log-in';
    public static readonly ACTION_LOGOUT = '/log-out';

    constructor(host: string) {
        super(host, StoryboardUserPole.POLE);
    }

    public async logIn(tag: string, password: string):
        Promise<StoryboardSession> {

        let request: UserLogInRequest = {
            tag: tag,
            password: password
        };
        let response =
            await this.server.post(
                StoryboardUserPole.ACTION_LOGIN, JSON.stringify(request)
            );
        let responseObj: UserLogInResponse = response.data;

        if (responseObj.status == RestStatus.SUCCESS && response.data.session)
            return new StoryboardSession(responseObj.session!);
        else
            throw new StoryboardPoleError
                (`Unable to log-in: ${responseObj.status}`);
    }

    public async logOut(session: StoryboardSession): Promise<void> {
        let request: UserLogOutRequest = {
            session: session.key
        };
        let response =
            await this.server.post(
                StoryboardUserPole.ACTION_LOGOUT, JSON.stringify(request)
            );
        let responseObj: UserLogOutResponse = response.data;

        if (responseObj.status != RestStatus.SUCCESS)
            throw new StoryboardPoleError
                (`Unable to log-out: ${responseObj.status}`);
    }
}

export class StoryboardApi {
    private _user: StoryboardUserPole;

    constructor(host: string) {
        this._user = new StoryboardUserPole(host);
    }

    public get user(): StoryboardUserPole {
        return this._user;
    }
}

export class StoryboardSession {
    private _session: string;

    constructor(session: string) {
        this._session = session;
    }

    public get key(): string {
        return this._session;
    }
};

