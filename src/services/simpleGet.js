import axios from "axios"


export const simpleGet = async(url) => {
    try{
        const response = await axios.get(url)
        console.log(response.data);
        return {
            responsedata:response.data,
            error:""
        }
    }catch(err){
        console.log(err)
        return {
            error:"se ha producido un error: "+err 
        }
    }

}