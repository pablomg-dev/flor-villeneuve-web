import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    return new Response(
      JSON.stringify({ error: 'Email configuration missing' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);
    const body = await request.json();
    const { name, email, phone, countryCode, message, subject } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailSubject = subject || 'Nuevo mensaje de ' + name + ' desde florhesiendo.com';
    const phoneInfo = phone && countryCode ? '\nTeléfono: ' + countryCode + ' ' + phone : '';

    await resend.emails.send({
      from: 'Florencia Villeneuve <contacto@florhesiendo.com>',
      to: [contactEmail],
      replyTo: email,
      subject: emailSubject,
      html: '<h2>Nuevo mensaje desde la web</h2>' +
        '<p><strong>Nombre:</strong> ' + name + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        (phoneInfo ? '<p><strong>Teléfono:</strong> ' + phoneInfo + '</p>' : '') +
        '<p><strong>Mensaje:</strong></p>' +
        '<p>' + message + '</p>',
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Resend error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};