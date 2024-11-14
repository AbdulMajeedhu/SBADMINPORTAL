import axios from "axios";

let instance = axios.create({
    baseURL : "https://66dfea882fb67ac16f278b83.mockapi.io",
    headers : {
        "domain" : "hello"
    }
});
// vid 46 40:00
instance.interceptors.request.use((config) => {
    // calculate the token and send new token
 config.headers.auth = "new token"
 return config
}) ; // enna logic vena eluthikkalam 49:00
instance.interceptors.response.use((res)=>{
     return res
})

export default instance