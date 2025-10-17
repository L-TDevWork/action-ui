export const AppFetchApi = () => {

    const post = async (url: string, params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "POST", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const patch = async (url: string, params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "PATCH", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const put = async (url: string, params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "PUT", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const remove = async (url: string, params: Object, endPoint: string) => {
        return fetch(url + endPoint, { mode: "cors", method: "DELETE", headers: setHeaders(), body: JSON.stringify(params) }).then((response: any) => response.json());
    }

    const get = async (url: string, endPoint: string) => {
        return await fetch(url + endPoint, { mode: "cors", method: "GET", headers: setHeaders() }).then((response: any) => response.json());
    }

    const setHeaders = () => {
        return { "Content-Type": "application/json", "Accept": "/" };
    }

    return { post, get, patch, remove, put };

}
