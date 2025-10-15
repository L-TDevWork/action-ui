import { EnvVariables } from "../../core/utils/EnvVariable";

export const AppFetchApi = () => {
    const url: string = EnvVariables.ApiUrl;


    const post = async (params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "POST", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const patch = async (params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "PATCH", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const put = async (params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "PUT", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const remove = async (params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "DELETE", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const get = async (endPoint: string) => {
        return await fetch(url + endPoint, { mode: "cors", method: "GET", headers: setHeaders() }).then((response: any) => response.json());
    }

    const setHeaders = () => {
        return { "Content-Type": "application/json", "Accept": "/" };
    }

    return { post, get, patch, remove, put };

}
