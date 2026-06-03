// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const data = await request.json();

//     console.log("SMTP_USER:", process.env.SMTP_USER);
//     console.log("SMTP_PASS:", process.env.SMTP_PASS ? "FOUND" : "MISSING");

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: "mandalsantanu4268@gmail.com", // where you receive emails
//       subject: "New Contact Us Form Submission",
//       html: `
//         <h2>Contact Form Submission</h2>

//         <p><strong>Name:</strong> ${data.name}</p>
//         <p><strong>Email:</strong> ${data.email}</p>
//         <p><strong>Phone:</strong> ${data.phone}</p>
//         <p><strong>Organization:</strong> ${data.organization_name}</p>
//         <p><strong>Message:</strong> ${data.message}</p>
//       `,
//     });

//     return Response.json({
//       success: true,
//       message: "Email sent successfully",
//     });
//   } catch (error) {
//     console.error(error);

//     return Response.json(
//       {
//         success: false,
//         message: "Email sending failed",
//       },
//       { status: 500 }
//     );
//   }
// }
import nodemailer from "nodemailer";
import { isValidPhoneNumber } from "libphonenumber-js";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
  name,
  email,
  phone,
  organization_name,
  message,
} = data;

// Name Validation
if (!name || name.trim().length < 3) {
  return Response.json(
    {
      success: false,
      message: "Name must be at least 3 characters",
    },
    { status: 400 }
  );
}

// Email Validation
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email || !emailRegex.test(email)) {
  return Response.json(
    {
      success: false,
      message: "Please enter a valid email address",
    },
    { status: 400 }
  );
}

// Phone Validation
if (!phone || !isValidPhoneNumber(phone)) {
  return Response.json(
    {
      success: false,
      message: "Invalid phone number",
    },
    { status: 400 }
  );
}

// Organization Validation
if (
  !organization_name ||
  organization_name.trim().length < 2
) {
  return Response.json(
    {
      success: false,
      message: "Organization name is required",
    },
    { status: 400 }
  );
}

// Message Validation
if (
  !message ||
  message.trim().length < 20
) {
  return Response.json(
    {
      success: false,
      message:
        "Message must be at least 20 characters",
    },
    { status: 400 }
  );
}
if (message.trim().length > 1000) {
  return Response.json(
    {
      success: false,
      message: "Message cannot exceed 1000 characters",
    },
    { status: 400 }
  );
}

    // Verify reCAPTCHA
    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: data.recaptcha_token,
        }),
      }
    );

    const verifyData = await verifyResponse.json();
    console.log("Captcha Result:", verifyData);

    console.log("Captcha Result:", verifyData);

    // Reject suspicious requests
    if (
      !verifyData.success ||
      verifyData.score < 0.5
    ) {
      return Response.json(
        {
          success: false,
          message: "Captcha verification failed",
        },
        { status: 400 }
      );
    }

    // Email sending code
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "mandalsantanu4268@gmail.com",
      subject: "New Lead From Website",
      html: `
        <h2>New Lead</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Organization:</strong> ${data.organization_name}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Email sending failed",
      },
      { status: 500 }
    );
  }
}