import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/bloodgroup";
class BstockService{

    getBloodStock(){
        return axios.get(USER_API_BASE_URL);
    }

    getBloodGroup(bloodgroup){
        return axios.get(USER_API_BASE_URL+"/"+bloodgroup);
    }

    putBloodStock(bloodgroup,qty){
        return axios.put(USER_API_BASE_URL+"/"+bloodgroup+"/"+qty)
    }
}
export default new BstockService()