
import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js";
import cors from "cors";


config({
    path: "./config/config.env"
});

const app = express();



// using middlewares

app.use(cors({

     origin : true , 
     credentials : true,
     methods : ["GET" , 'POST' , "PUT" , "DELETE"],       
   
}));
     
app.use(express.json());
app.use(
     express.urlencoded({
          extended:true,
     })
     );
     app.use(cookieParser());
     

     
// importing and using Routes
     
 app.use("/api/v1", course);
 app.use("/api/v1", user);
 app.use("/api/v1", payment);
 app.use("/api/v1", other);
  


app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);
 

 export default app;
 
 app.use(ErrorMiddleware);