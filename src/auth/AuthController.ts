import { Response } from 'express';
import { generateToken } from './generateToken';
import { signIn } from './signIn';

export const AuthController = {
  async signIn(req, res: Response) {
    const { ip } = req;
    const { googleToken } = req.body;
    const user = await signIn(googleToken, ip);
    const token = generateToken({ id: user.id });
    res.cookie('auth_login_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
    });

    return res.send({ user, token });
  },
};
