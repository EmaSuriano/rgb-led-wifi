import express from 'express';
import Routers from './Routers';

const app = express();

app.use('/color', Routers.Color);
// app.use(Routers.ErrorHandler);

app.get('/about', function(req, res) {
  res.send('About birds3');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
