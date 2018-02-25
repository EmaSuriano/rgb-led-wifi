import { Router } from 'express';
import RgbManager from 'src/RgbManager';

const router = Router();
const rgbManager = new RgbManager();

router.get('/', (req, res) => {
  const color = rgbManager.color;
  res.send({
    color,
  });
});

router.post('/', (req, res) => {
  rgbManager.color(req.color);
  res.status(500);
});

// app
//   .route('/color')
//   .get(function(req, res) {
//     const color = rgbManager.color;
//     res.send({
//       color,
//     });
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });

export default router;
