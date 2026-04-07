import nodemailer from "nodemailer";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dakotacollectivee@gmail.com",
      pass: process.env.EMAIL_PASS
    },
  });

  await transporter.sendMail({
    from: data.email, // müşteri email
    to: "dakotacollectivee@gmail.com", // senin email
    subject: "New Contact Message",
    text: `
From: ${data.email}

Message:
${data.message}
    `,
  });

  return Response.json({ success: true });
}