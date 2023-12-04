import { base } from '../constants/Data.constants';
import * as opsService from './ops.service'

const samplePost = async (data, token) => {
    try {
        let result = await opsService.postData(base.api + `endpoint`, data, token);
        return result;
    } catch (e) {
        return { status: false, data: {}, message: e.message }
    }
}
const sampleGet = async (token) => {
    try {
        let result = await opsService.getData(dataConstants.base.api + `endpoint`, token);
        return result;
    } catch (e) {
        return { status: false, data: {}, message: e.message }
    }
}        

export {
    samplePost,
    sampleGet
}