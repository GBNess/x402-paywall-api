import express from 'express';

const app = express();

app.get('/api/premium-data', (req: any, res: any) => {
  res.json({
    success: true,
    message: "You have successfully accessed the premium paywall data!"
  });
});

export default app;
