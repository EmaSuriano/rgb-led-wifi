import { Router } from 'express';
import RgbManager from '../RgbManager';
import { RouterError } from '../constants/Errors';

const router = Router();
const rgbManager = new RgbManager();

router.get('/', async (req, res, next) => {
  try {
    const color = await rgbManager.getColor();
    res.status(200).send({
      color,
    });
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const rgb = req.param('rgb');
    if (!rgb) throw new RouterError('Please send rgb parameter!');

    await rgbManager.setColor(rgb);
    res.status(200).send({ color: rgb });
  } catch (err) {
    next(err);
  }
});

export default router;
