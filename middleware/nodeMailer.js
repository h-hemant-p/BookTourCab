import nodemailer from 'nodemailer';

export const sendMail = (email,subject, message, html) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hemantpraja88@gmail.com",
            pass: "prou mshy xwev nygg",
        },
        secure: true,
    });
    const mailOptions = {
        from: 'aartimakwana2408@gmail.com',
        to: email,
        subject: subject,
        text: message
    };
    transporter.sendMail(mailOptions);
    console.log('Mail Sended');
}
