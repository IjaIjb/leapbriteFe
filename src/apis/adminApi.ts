import { AxiosPromise } from "axios";
import configs from "../configs";
import { AdminLiveApis } from "./live/adminLiveApi";



export class AdminApis {
    private static adminApi: AdminLiveApis = new AdminLiveApis();   

    static createProduct(data: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.createProduct(data);
        }
    }

    static updateProduct(data: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.updateProduct(data);
        }
    }  

    

    static updateProfile(data: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.updateProfile(data);
        }
    }  

    static topUp(data: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.topUp(data);
        }
    } 

    

    static getAllStore(pageNo:any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getAllStore(pageNo);
        }
    }

    static getTransactionHistory(pageNo:any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getTransactionHistory(pageNo);
        }
    }

    static getWalletInfo(): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getWalletInfo();
        }
    }


    static getProfile(): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getProfile();
        }
    }

    
    
    static getUserPurchase(): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getUserPurchase();
        }
    }

    static getAllPurchase(): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getAllPurchase();
        }
    }

    static getAllCustomers(pageNo:any,query:any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getAllCustomers(pageNo,query);
        }
    }

    static getDashboardData(): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getDashboardData();
        }
    }

    static getSingleProductOutside(id: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getSingleProductOutside(id);
        }
    }
    

    static updatePurchases(data: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.updatePurchases(data);
        }
    }


    static updateSinglePurchase(id:any, data: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.updateSinglePurchase(id, data);
        }
    }


    static getSingleProduct(id: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.getSingleProduct(id);
        }
    }


    static deleteProduct(id: any): AxiosPromise<Array<any>> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminApi.deleteProduct(id);
        }
    }

}