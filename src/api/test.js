import { client } from "./client";

try{
    const res = client.get("/news");
    console.log(res.data);
} catch(err){
    console.log(err.request?.status, err.request?.data);
}