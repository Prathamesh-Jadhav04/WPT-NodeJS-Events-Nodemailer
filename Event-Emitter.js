const Events = require("events");
const nodemailer = require("nodemailer");

const PASS = "lzem nttt cihz crkt";

const EventEmitter = Events.EventEmitter;
const Prathu = new EventEmitter();

Prathu.on("InsertData", async function (value) {
  console.log("Add Record In Database");
  console.log(value);

  await sendMail();
});

async function sendMail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "prathamesh.jadhav.office@gmail.com",
        pass: PASS,
      },
    });

    const info = await transporter.sendMail({
      from: "prathamesh.jadhav.office@gmail.com",
      to: "prathunotfound@gmail.com",
      subject: "Test Email from Node.js ...kaisa re bete!",
      text: "Hello! This is a test email sent ghjcbsjcbhjchjbshjscusing Node.js and Nodemailer.",
    });

    console.log("Email sent successfully!");
    console.log(info.messageId);
  } catch (error) {
    console.log("Email sending failed:", error.message);
  }
}

Prathu.on("SendEmail", function (value) {
  console.log("Send Email To:", value.Email);
});

Prathu.emit("InsertData", {
  Product: "uno",
  price: 500,
});

Prathu.emit("SendEmail", {
  Email: "prathamesh.jadhav.office@gmail.com",
});
