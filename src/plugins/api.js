import { API_DEFAULT_CONFIG } from '../config/index'
const API_OBJECT = {
    "eduList": "index"
}
Object.keys(API_OBJECT).forEach(key => API_OBJECT[key] = API_DEFAULT_CONFIG.mockBaseURL + API_OBJECT[key]);

export default API_OBJECT;