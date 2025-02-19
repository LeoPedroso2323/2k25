import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000/api/v1",
    headers:{
        'Accept':'application/json'
    }
});

const sheets = {
    getEvento:()=>api.get("evento/")
}

export default sheets;