import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
  const { name, email, number, subject, message } = req.body

  const data = {
    name,
    email,
    number,
    subject,
    message,
  }

  const user = process.env.user
  const pass = process.env.pass

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "terrell.jackson.jobs@gmail.com",
      replyTo: email,
      subject: subject,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Number: ${number}</p>
      <p>Message: ${message}</p>
      `,
    })

    console.log("message sent: %s", mail.messageId)

    res.status(200).json({ message: "success" })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Your message could not be sent.",
    })
  }
}
