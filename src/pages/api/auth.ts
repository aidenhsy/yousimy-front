import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';
import axios from 'axios';
import { FEISHU_LOGIN_URL } from '../../config/constants';

async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  try {
    const login = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/auth/login?code=${code}`
    );
    setCookie('access_token', login.data, {
      req,
      res,
    });
    res.redirect(307, '/dashboard');
  } catch (err) {
    res.redirect(307, FEISHU_LOGIN_URL);
  }
}

export default function authHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return loginHandler(req, res);
    // case 'POST':
    //   return refreshTokenHandler(req, res);
    default:
      res.status(405).end();
  }
}
