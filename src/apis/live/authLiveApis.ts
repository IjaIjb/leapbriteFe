import { AxiosGlobal } from "../shared/axios";
import{ AxiosPromise} from "axios";
import configs from "../../configs";
import { store } from "../../store/store";



export class AuthLiveApis extends AxiosGlobal{
    
    loginUser(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/${configs.apiList.LOGIN}`, data);
    }


    registerUser(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/${configs.apiList.REGISTER}`, data,{
            headers: {  "Content-Type": "multipart/form-data","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    } 

    verifyMail(data: any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/auth/verify-mail`, data);
    }

    forgotPassword(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/forgot`, data);
    }

    resetPassword(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/reset`, data);
    }

    logout(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/logout`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }
    
    // getAllHouses(cursor:any): AxiosPromise<Array<any>> {
    //     return this.axios.get(`${configs.context}/${configs.apiList.HOSTELS}/${configs.apiList.GET_ALL_HOSTEL}?cursor=${cursor}`,{
    //         headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
    //       });
    // }


    // getAllUsers(cursor:any): AxiosPromise<Array<any>> {
    //     return this.axios.get(`${configs.context}/${configs.apiList.GET_ALL_USERS}?cursor=${cursor}`,{
    //         headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
    //       });
    // }



    //  loginUser(data:any): AxiosPromise<any> {
    //      return this.axios.post(`${configs.context}/login`, data,{
    //         headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":'Bearer 2|X4dvppS3EugstZmfvKwPbf4jBF7Y70OYvKGjdFnQ',"Access-Control-Allow-Origin":"*" },
    //       });
    // }


}