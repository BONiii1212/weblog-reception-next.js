export const http = async(url,customConfig={})=>{
    const config = {
        method:"GET",
        headers: {
            "Content-Type": customConfig.body ? "application/json" : "",
            'Access-Control-Allow-Origin':'*',
            withCredentials:true
        },
        ...customConfig,
    }
    return fetch(url,config)
    .then(async (response)=>{
        const data = await response.json()
        //fetch的异常需要判断response.ok而不是直接根据状态码
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    })
}