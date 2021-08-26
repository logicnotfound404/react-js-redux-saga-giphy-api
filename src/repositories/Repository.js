import axios from "axios"     
const config = process.env;
const {REACT_APP_API_URL,REACT_APP_GIPHY_API_SECRET} = config   

const appHeaderProperties = {
  "Accept" : 'application/json',
  'Content-Type':'application/json'
}
  
export const apiCall = async ({ method, url, data = "", baseURL , headers = {} }, navigation) => {  
    
    if(!data.params)
      data.params = {}

    let head = { 
      ...appHeaderProperties,   
      ...headers
    }
     
    let requiredParams = {
      api_key : REACT_APP_GIPHY_API_SECRET
    }
 
    let params = { 
      ...data.params,   
      ...requiredParams
    }
     
    
    const payloadHttp = {
      baseURL: baseURL || REACT_APP_API_URL,
      method: method,
      url: url,
      data: data.data || "",
      headers: head || "",
      params: params || "",
      timeout: data.timeout || 3000,
      'axios-retry': {
        retries: 0
      }
    }

    const response = await axios(payloadHttp)
    .then((success) => { 
      console.log(success)
      return  success 
    })  
    .catch(function (error) { 
      return error
    })

    return response 
}