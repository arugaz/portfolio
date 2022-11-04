// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import FormData from 'form-data';

type Response = {
  status: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== 'POST')
    return res.status(405).json({
      status: 'error',
      message: 'Method is not allowed!',
    });

  const form = new FormData();
  const body = JSON.parse(req.body);
  form.append('name', body.name);
  form.append('email', body.email);
  form.append('message', body.message);

  fetch(`https://script.google.com/macros/s/${process.env.GOOGLE_SHEETS_ID}/exec`, {
    method: 'POST',
    // @ts-ignore
    body: form,
  })
    .then(() => res.status(200).send({ status: 'ok', message: 'Success!' }))
    .catch((err: Error) =>
      res.status(500).send({
        status: 'error',
        message: err.message || 'Internal Server Error',
      }),
    );
}
