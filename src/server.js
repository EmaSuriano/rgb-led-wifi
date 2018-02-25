import express from 'express';
import Routers from './Routers';

const app = express();

app.get('/about', function(req, res) {
  res.send('About birds');
});

app.use((error, req, res, next) => {
  console.error('Something happened');
  res.status(400).json({ message: error.message });
});

app.use('/color', Routers.Color);

// app.get('/about', function(req, res) {
//   res.send('About birds');
// });

// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

export default app;
