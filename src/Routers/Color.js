import { Router } from 'express';
import RgbManager from 'src/RgbManager';

const router = Router();
const rgbManager = new RgbManager();

router.get('/', async (req, res) => {
  const color = await rgbManager.getColor();
  res.send({
    color,
  });
});

router.put('/', async (req, res) => {
  const rgb = req.param('rgb');
  if (!rgb) throw new Error('Please send rgb parameter!');
  console.log(rgb);
  await rgbManager.setColor(rgb);
  res.status(200).send({ color: rgb });
});

export default router;
