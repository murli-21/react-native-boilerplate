
import * as axios from 'axios'; 
const postData = async (url = '', data, token=false) => {
    let tokenData = ''
    if(token){
        tokenData = 'Bearer '+token;
    }
    let response = await axios.post(url, data, { headers:  { Authorization: tokenData }});
    return response.data;
}
const postDataContent = async (url = '', data, token=false,  contentType) => {
    try {
        let tokenData = ''
        if(token){
            tokenData = 'Bearer '+token;
        }
        let response = await axios.post(url, data, { headers:  { Authorization: tokenData, contentType: contentType}} );
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
}
const putData = async (url = '', data, token=false) => {
    
    if(token){
        token = 'Bearer '+token;
    }
    let response = await axios.put(url, data, { headers: { Authorization: token }});
    
    return response.data;
}
const getData = async (url = '',  token=false) => {
    if(token){
        token = 'Bearer '+token;'';
    }
   // console.log('response', url, { headers: { Authorization: token }})
    let response = await axios.get(url, { headers: { Authorization: token }});
    return response.data;
}
const deleteData = async (url = '', token=false) => {
     
    if(token){
        token = 'Bearer '+token;
    }
    let response = await axios.delete(url, { headers: { Authorization: token }});
    return response.data;
}

export {
    postData,
    getData,
    deleteData,
    putData,
    postDataContent
}