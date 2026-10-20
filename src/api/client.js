import axios from "axios";

// export const client = axios.create({baseURL: "https://api.atr.uz/api"});

// client.get("/admin/user")

try{
    const res = await axios.get("https://api.atr.uz/api/news");
    console.log(res.data);

}catch(err){
    console.log(err.response?.status, err.response?.data);
}
