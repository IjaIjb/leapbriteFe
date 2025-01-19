import { AxiosPromise } from "axios";
import configs from "../configs";

import { AuthLiveApis } from "./live/authLiveApis";



export class AuthApis {
    private static authLiveApis: AuthLiveApis = new AuthLiveApis();
    
    static login(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.loginUser(data);
        }
    }  

    static register(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.registerUser(data);
        }
    }  

    static verifyMail(pageNo:any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.verifyMail(pageNo);
        }
    } 

    static forgotPassword(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.forgotPassword(data);
        }
    }

    static resetPassword(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.resetPassword(data);
        }
    }

    static logout(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.logout(data);
        }
    }


}