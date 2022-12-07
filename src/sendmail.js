import nodemailer from 'nodemailer'
 
const sendmail=async (useremail , udata='')=>{
    
       let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
               auth: {
                    user: 'skntmax@gmail.com',
                    pass: 'sknt123456'
                   }
            })
       
      let  message = {
           from:  'skntmax@gmail.com',
           to: 'skntjee@gmail.com',
           subject: " Geolocation ",
           text: ` here is the text location sample  `
       }  
       
        let res  = await transporter.sendMail(message)
        console.log(res);
       
   }
   
export {sendmail}