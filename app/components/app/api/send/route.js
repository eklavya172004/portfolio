// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Eklavya <eklavyanath1704@gmail.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
    //   react: EmailTemplate({ firstName: 'John' }),
    react: `
    <h1>Hello, John!</h1>
    <p>Welcome to our platform. We're glad to have you here.</p>
    `
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}