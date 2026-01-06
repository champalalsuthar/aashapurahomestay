import nodemailer from 'nodemailer'

export async function POST(req) {
  const data = await req.formData()
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: 'New Booking Enquiry',
    text: `Name: ${data.get('name')} Email: ${data.get('email')}`,
  })

  return new Response('Booking Sent')
}