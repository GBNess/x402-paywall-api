import express from 'express';

const app = express();

// Remove the '/api/premium-data' here so it responds at the root of the file
app.get('/', (req: any, res: any) => {
  res.json({
    success: true,
    message: "You have successfully accessed the premium paywall data!"
  });
});

export default app;
