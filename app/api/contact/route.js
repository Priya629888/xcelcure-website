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
//import nodemailer from "nodemailer";
import { isValidPhoneNumber } from "libphonenumber-js";
const requests = new Map();

export async function POST(request) {
  try {

    // Rate Limiting
    const forwarded =
      request.headers.get("x-forwarded-for");

    const ip = forwarded
      ? forwarded.split(",")[0].trim()
      : "unknown";

    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 5;

    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    const timestamps = requests.get(ip);

    const validTimestamps = timestamps.filter(
      (time) => now - time < windowMs
    );

    if (validTimestamps.length >= maxRequests) {
      return Response.json(
        {
          success: false,
          message:
            "Too many requests. Please try again after 1 minute.",
        },
        { status: 429 }
      );
    }

    validTimestamps.push(now);
    requests.set(ip, validTimestamps);
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
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   secure: false, // true only for SSL ports like 465
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    // await transporter.verify();
    // console.log("SMTP Connected");

    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: "mandalsantanu4268@gmail.com",
    //   subject: "New Lead From Website",
    //   html: `
    //     <h2>New Lead</h2>

    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Organization:</strong> ${data.organization_name}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // });
    const smtp2goResponse = await fetch(
      "https://api.smtp2go.com/v3/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.SMTP2GO_API_KEY,

          to: ["mandalsantanu4268@gmail.com"],

          sender: "Website Lead <noreply@xcelcure.com>",

          subject: "New Lead From Website",

          html_body: `
        <h2>New Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization_name}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        }),
      }
    );

    const smtp2goResult = await smtp2goResponse.json();

    console.log("SMTP2GO:", smtp2goResult);

    if (smtp2goResult.data?.succeeded !== 1) {
      console.log(
        "SMTP2GO Status:",
        smtp2goResponse.status
      );
      console.log(
        "SMTP2GO Response:",
        JSON.stringify(smtp2goResult, null, 2)
      );
      return Response.json(
        {
          success: false,
          message: "Email sending failed",
        },
        { status: 500 }
      );
    }

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