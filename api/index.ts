import express from 'express';

const app = express();

// Use '/' to handle the base path of this file
app.get('/', (req: any, res: any) => {
  res.json({
    success: true,
    message: "You have successfully accessed the premium paywall data!"
  });
});

export default app;
