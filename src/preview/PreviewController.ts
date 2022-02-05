import { Request, Response } from 'express';
import { getPreview } from './getPreview';
import { setUserPreview } from './setUserPreview';

export const PreviewController = {
  async get(req:Request, res:Response) {
    const { code } = req.query;
    const user = await getPreview(code as string);
    res.send(user);
  },

  async post(req:Request, res:Response) {
    const { userId } = req.session;
    res.send(await setUserPreview(userId, false));
  },

  async delete(req:Request, res:Response) {
    const { userId } = req.session;
    res.send(await setUserPreview(userId, true));
  },
};
