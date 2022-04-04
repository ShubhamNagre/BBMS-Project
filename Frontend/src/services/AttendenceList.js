import axios from 'axios';
const STAFF_API_BASE_URL="http://localhost:8080/api/v1/attendencelist";
class Attendence{

    getUsers(){
        return axios.get(STAFF_API_BASE_URL);
    }
}
export default new Attendence()