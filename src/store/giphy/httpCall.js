import {apiCall} from '../../repositories/Repository';

class HttpCall {
    constructor(callback) {
        this.callback = callback;
    }

    async httpGetContents(payload){
        const dataReq = {
            method: "GET",
            url: '/v1/gifs/search',
            data : {
                params : payload
            }
        }
        
        const call = await (apiCall(dataReq))
        .then(success => {
            return {success}
        })
        .catch(error => { 
            return {error}
        }) 
        return call
    } 
}


export default new HttpCall();
