import { setGlobalOptions } from "firebase-functions";
import { Request, Response } from "express";
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const nodemailer = require("nodemailer");

// Define secrets
const gmailEmail = defineSecret("GMAIL_EMAIL");
const gmailPass = defineSecret("GMAIL_PASS");

// Your frontend URL
const allowedOrigins = [
  "http://localhost:3000",
  "https://aurora-vision-a8244.web.app",
  "https://aurora-vision.co.nz",
];

exports.sendContactEmail = onRequest(
  { secrets: [gmailEmail, gmailPass], cors: false, invoker: "public" }, // disable auto CORS handling
  async (req: Request, res: Response) => {
    // Get origin of request
    const origin = req.get("origin");

    // If origin is allowed, set headers
    if (origin && allowedOrigins.includes(origin)) {
      res.set("Access-Control-Allow-Origin", origin);
      res.set("Vary", "Origin");
    }

    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    const { name, email, message, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      to: "auroravisionstudio@gmail.com",
      name,
      from: process.env.GMAIL_EMAIL,
      subject: `${subject} - ${email}`,
      text: message,
    };
    const confirmationOptions = {
      to: email,
      name: "Auroravision",
      from: process.env.GMAIL_EMAIL,
      text: `
        Kia ora ${name}, \n
        Thanks for getting in touch with us! We've received your message and are looking forward to reading over it properly. \n
        Whether you're reaching out with a project idea, a collaboration opportunity, or just a curious though - we'll take a moment to consider it carefully and get back to you as soon as we can. \n
        Ngā mihi nui, \n
        ⋆⭒˚.⋆ AuroraVision ⋆⭒˚.⋆`,
      subject: `Message received!`,
    };

    console.log("message: ", message);
    if (message.includes("J3R3MY M0D3")) {
      console.log("matched code: ", message);
      return res.status(200).send("JEREMY MODE");
    }

    if (
      name.toLowerCase() === "jeremy brow" ||
      name.toLowerCase() === "jeremy mode"
    ) {
      try {
        await transporter.sendMail({
          to: email,
          name: "Jeremy Brow",
          from: process.env.GMAIL_EMAIL,
          text: `
            Hey Jeremy!
            
            If you want to go absolutely Jeremy Mode on the contact page, please submit the contact form again, but with the secret code in the message box.
            The secret code is: J3R3MY M0D3          
            `,
        });
        return res.status(200).send("Jeremy code sent!");
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Failed to send message.");
      }
    } else {
      try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationOptions);
        return res.status(200).send("Message sent!");
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Failed to send message.");
      }
    }
  }
);

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
