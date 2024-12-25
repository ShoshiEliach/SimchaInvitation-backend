const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello from the Node.js backend!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


///get address(SMS/mail) from the front-side:


// נתיב לקבלת המספרים
app.post("/api/phone-numbers", (req, res) => {
    const { phoneNumbers } = req.body;

    if (!phoneNumbers || !Array.isArray(phoneNumbers)) {
        return res.status(400).json({ error: "Invalid phone numbers format" });
    }

    console.log("Received phone numbers:", phoneNumbers);

    // כאן אפשר לשמור את המספרים למסד נתונים או לטפל בהם
    res.status(200).json({ message: "Phone numbers received successfully" });
});


///SMTP2GO

var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525, // 8025, 587 and 25 can also be used.
    auth: {
        user: "shoshana3631@gmail.com",
        pass: "MrcWkDnaKoLXug48",
    },
});

smtpTransport.sendMail({
    from: "simchainvitation.com",
    to: "s0548566523@gmail.com",
    subject: "Your Subject",
    text: "It is a test message",
    html: "It is a test message"
},
    function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    }
);
