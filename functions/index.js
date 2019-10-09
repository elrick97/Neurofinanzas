const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        /**
        * Nodemailer setup
        */
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'neurovoluntarios@gmail.com',
                pass: 'neurofinanzas97'
            }
        });

        /** ASI LLEGA EL BODY 
         *  {
         *      applicacion: {
         *          name: 
         *          email:
         *          motto:
         *      }
         *  }
         */

        // Objeto application
        const application = req.body.application;

        // Construyendo el mensaje que se va enviar
        const message = "Nombre: " + application.name + "\nEmail: " + application.email + "\nMessage: " + application.message

        // estructura de nodemailer
        const mailOptions = {
            from: 'Aplicación Voluntarios <neurovoluntarios@gmail.com>',
            to: 'j.elizondo126@gmail.com', // aqui va el mail a donde se enviaran todas las aplicaciones
            subject: 'Alguien quiere unirse al equipo!', // email subject
            text: message
        };

        // returning result 
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});
