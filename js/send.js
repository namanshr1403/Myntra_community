const twilio = require('twilio');
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


client.messages
 .create({
     from: 'whatsapp:8839564102',
     to : 'whatsapp:' + process.env.MY_PHONE_NUMBER,     //or your whatsapp sandbox number
     body : 'Hii There',
     mediaUrl : 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg', 

 })
 .then(message =>{
    console.log(message.sid);
 })
 .catch(err =>{
     console.error(err)
 });