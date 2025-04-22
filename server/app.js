const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config();
app.use(express.json());
app.use(cors());

const port = 3003; 

// app.post('/contact', (req, res) => {
//     console.log(req.bosy);
//     res.send('Message received');
// });
app.post('/contact', (req, res) => {
    const { email, subject, message ,name } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });
        const mail = ({
            to: process.env.EMAIL,
            subject: subject,
            html: `
                <html >
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                color: #333;
                                margin: 0;
                                padding: 0;
                            }
                            .container {
                                max-width: 600px;
                                margin: 50px auto;
                                padding: 20px;
                                background-color: #fff;
                                border-radius: 8px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            h1 {
                                color: #4CAF50;
                                font-size: 24px;
                            }
                            p {
                                font-size: 16px;
                                line-height: 1.5;
                            }
                            .footer {
                                text-align: center;
                                margin-top: 20px;
                                font-size: 14px;
                                color: #777;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>${name},</h1>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <p><strong>Message:</strong><br>${message}</p>
                        </div>
                    </body>
                </html>
            `,
        });
        

        transporter.sendMail(mail, (error, info) => {
            if (error) {
                console.log("'Error", error)
            }else{
                console.log("Email sent" + info.response); 
                 return res.status(201).json({ status: 201, info });
                
            }
        })

    } catch (error) {
        res.status(201).json({status:401, error})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${process.env.EMAIL},`);
});  
