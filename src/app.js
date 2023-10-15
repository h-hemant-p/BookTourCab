"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import expresssession from 'express-session';
// import { check, validationResult} from 'express-validator';
import ejs from "ejs";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import index  from "./routes/indexRouter.js";
import user from "./routes/userRouter.js";
import admin from "./routes/adminRouter.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
// const PORT = 8080;

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(expresssession({secret:"sessionsecret",saveUninitialized:true,resave:true}));
app.use(cookieParser());
app.use(express.json());

app.use(express.static('./public'));

app.use('/', index);
app.use('/user', user);
app.use('/admin',admin);

app.listen(PORT,()=>{
  console.log(`server running  : http://localhost:${PORT}`);
});