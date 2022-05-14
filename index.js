require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const data = require("./data");
const nodemailer = require("nodemailer");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

app.use(cors());

// console.log(`${data.length}`);

app.get("/sendmail", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      pool: true,
      // service: "gmail",
      auth: {
        type: "login",
        user: "satyam1913196@akgec.ac.in",
        pass: "vpacxlvbitbufgpn",
      },
    });
    // let email = `${data[i].NamsatyaM12321e.split(' ')[0].toLowerCase()}${data[i].roll_no}@akgec.ac.in`
    // let email = data[i];
    // console.log(email);
    const mailOption = {
      from: "satyam1913196@akgec.ac.in",
      to: "singh823232@gmail.com",
      subject: "Satyam Resume",
      html: await readFile("./index.html", "utf8"),
      // html: "<h1>satyam</h1>",
    };

    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(mailOtion);
        res.send(email);
      }
    });
    console.log("mail sended");
    res.send("send");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Port is connected to port no ${PORT} `);
});
