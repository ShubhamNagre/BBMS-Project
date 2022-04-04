import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/dvalidation";
class DonorValidationSevice{

    getDVal(){
        let obj=axios.get(USER_API_BASE_URL);
        return obj;
    }

    createDVal(dval){
        return axios.post(USER_API_BASE_URL,dval);
    }
        
}
export default new DonorValidationSevice()