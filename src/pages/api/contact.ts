// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: any;
};
let nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "hamid.arian1729@gmail.com",
    pass: "ajglagbfyfbsolbl",
  },
  secure: true,
});

const mailOptions = {
  from: "hamid.arian1729@gmail.com",
  to: "hamid.arian1729@gmail.com",
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        html: `<div
        style="width: 300px;padding: 16px;border-radius: 8px;border: 1px solid rgba(220, 220, 220,.5); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div
            style="width:100%; align-items: flex-start;width: 100%;padding-bottom: 16px;border-bottom: 1px solid rgba(220, 220, 220, .5);">
            <p style="font-size: 14px;color: gray;margin-bottom: 8px; ">Name:</p>
            <div style="font-size: 15px;color: black;">${data.name}</div>
        </div>
        <div
            style="width:100%;align-items: flex-start;width: 100%;padding: 16px 0;border-bottom: 1px solid rgba(220, 220, 220, .5);">
            <p style="font-size: 14px;color: gray;margin-bottom: 8px; ">Email:</p>
            <div style="font-size: 15px;color: black;">${data.email}</div>
        </div>
        <div
            style="width:100%; align-items: flex-start;width: 100%;padding: 16px 0;border-bottom: 1px solid rgba(220, 220, 220, .5);">
            <p style="font-size: 14px;color: gray;margin-bottom: 8px; ">Subject:</p>
            <div style="font-size: 15px;color: black;">${data.subject}</div>
        </div>
        <div style="width:100%; align-items: flex-start;width: 100%;padding: 16px 0;">
            <p style="font-size: 14px;color: gray;margin-bottom: 8px; ">Message:</p>
            <div style="font-size: 15px;color: black;">${data.message}</div>
        </div>
    </div>`,
      });
      return res.status(200).json({ message: "Submited Successfully!" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Server Error!" });
    }
  }
}
