require("dotenv").config();


const http=require("http");

const app=require("./index")

const szerver=http.createServer(app);















szerver.listen(process.env.PORT)

