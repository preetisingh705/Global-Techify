import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, // true for port 465, false for other ports
  // service: 'gmail',
  auth: {
    user: "globaltechify98@gmail.com",
    pass: "dzjxmdlpgkjcpcox",
  },
});



async function sendMail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'globaltechify98@gmail.com', // sender address
    to,
    subject,
    text,
    html
  });
}

export default sendMail;