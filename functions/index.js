const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

/**
* Nodemailer setup
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourgmailaccount@gmail.com',
        pass: 'yourgmailaccpassword'
    }
});

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting dest email by query string
        const body = req.body;
        console.log(body);
        return res.send(body)

        // const mailOptions = {
        //     from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
        //     to: 'ricardo.rmz.a97@gmail.com',
        //     subject: 'nueva aplicacion', // email subject
        //     text: ''
        // };

        // returning result
        // return transporter.sendMail(mailOptions, (erro, info) => {
        //     if (erro) {
        //         return res.send(erro.toString());
        //     }
        //     return res.send('Sended');
        // });
    });
});
