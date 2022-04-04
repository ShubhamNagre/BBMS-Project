import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/bloodtestlog";
class BloodTestLogService{

    getBloodTestLogs(){
        let obj=axios.get(USER_API_BASE_URL);
        return obj;
    }

    createBloodTestLog(bloodtestlog){
        return axios.post(USER_API_BASE_URL,bloodtestlog);
    }
    

    
}
export default new BloodTestLogService()