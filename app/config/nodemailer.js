//  Llamada desde:  /pages/api/contact.js 

import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
console.log("el email y pass2222", email, pass)
export const transporter = nodemailer.createTransport({
  //service: "gmail",
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};