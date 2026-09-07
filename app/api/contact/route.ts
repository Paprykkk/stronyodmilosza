import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, website, message } = await request.json();

    // Walidacja podstawowa
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Brak wymaganych pól.' }, { status: 400 });
    }

    // Wysłanie maila
    const data = await resend.emails.send({
      from: 'Formularz <onboarding@resend.dev>', // W darmowej wersji Resend wysyła z tego adresu domyślnego
      to: [process.env.MY_EMAIL || 'twój_prywatny_mail@gmail.com'],
      subject: `Nowa wiadomość od: ${name}`,
      replyTo: email,
      html: `
        <h2>Nowa wiadomość z Twojej strony internetowej</h2>
        <p><strong>Imię i nazwisko / Firma:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Strona WWW:</strong> ${website || 'Nie podano'}</p>
        <p><strong>Wiadomość:</strong></p>
        <p style="background: #f4f4f5; padding: 12px; border-radius: 8px;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Błąd podczas wysyłania wiadomości.' }, { status: 500 });
  }
}