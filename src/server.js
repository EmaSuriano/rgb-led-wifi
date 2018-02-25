import express from 'express';
import Routers from './Routers';

const app = express();
app.use('/color', Routers.Color);
app.use(Routers.ErrorHandler);

export default app;
