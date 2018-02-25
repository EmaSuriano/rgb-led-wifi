import express from 'express';

const app = express();
app.get('/api', (req, res) => {
  res.send({
    message: 'I am a server route and can also be hot supa reloaded!',
  });
});

export default app;
