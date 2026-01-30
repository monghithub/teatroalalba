import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || 'Mensaje desde la web';
    const message = formData.get('message')?.toString() || '';
    const privacy = formData.get('privacy');

    // Validación básica
    if (!name || !email || !message || !privacy) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor, completa todos los campos obligatorios.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'El formato del email no es válido.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: false, // TLS
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // Contenido del email
    const mailOptions = {
      from: `"Teatro Al Alba Web" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Web] ${subject}`,
      text: `
Nuevo mensaje desde el formulario de contacto:

Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}
      `,
      html: `
<h2>Nuevo mensaje desde el formulario de contacto</h2>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Asunto:</strong> ${subject}</p>
<hr>
<p><strong>Mensaje:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Mensaje enviado correctamente! Te responderemos lo antes posible.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error enviando email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
