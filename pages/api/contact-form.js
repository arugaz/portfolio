// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import FormData from 'form-data';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ status: 'error', message: 'Method is not allowed!' });

  try {
    const form = new FormData();
    const body = JSON.parse(req.body);
    form.append('name', body.name);
    form.append('email', body.email);
    form.append('message', body.message);

    const resp = await fetch(
      `https://script.google.com/macros/s/${process.env.GOOGLE_SHEETS_ID}/exec`,
      {
        method: 'POST',
        body: form,
      },
    );

    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }

    res.status(200).send({ status: 'ok', message: 'Success!' });
  } catch (err) {
    res.status(500).send({ status: 'error', message: err.message || 'Internal Server Error' });
  }
}
