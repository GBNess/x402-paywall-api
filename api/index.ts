import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({
    success: true,
    message: "You have successfully accessed the premium paywall data!"
  });
};
