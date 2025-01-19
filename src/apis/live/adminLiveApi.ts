import { AxiosGlobal } from "../shared/axios";
import{ AxiosPromise} from "axios";
import configs from "../../configs";
import { store } from "../../store/store";



export class AdminLiveApis extends AxiosGlobal{

 
    createProduct(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/market-links/create-product`, data, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateProduct(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/market-links/update-product`, data, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateProfile(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/updateProfile`, data, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    topUp(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/payment/credit-user-wallet`,data, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getWalletInfo(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/payment/get-wallet-info`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getTransactionHistory(pageNo:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/payment/get-transaction-history?page=${pageNo}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    
    getAllStore(pageNo:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/market-links/get-products?page=${pageNo}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getProfile(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/get-profile`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getSingleProduct(id: any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/market-links/get-single-product/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getSingleProductOutside(id: any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/get-single-product-outside/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

  
    deleteProduct(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/market-links/delete-product/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getAllCustomers(pageNo:any,query:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/purchases/get-all-customers?page=${pageNo}&search=${query?.search}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    getUserPurchase(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/purchases/get-user-purchases`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getAllPurchase(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/purchases/get-all-purchases`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    updateSinglePurchase(id:any, data: any): AxiosPromise<Array<any>> {
        return this.axios.put(`${configs.context}/purchases/update-single-purchase/${id}`, data, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    updatePurchases(data: any): AxiosPromise<Array<any>> {
        return this.axios.put(`${configs.context}/purchases/update-purchases/${data?.order_id}`, data, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    getDashboardData(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/purchases/get-dashboard-data`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


}