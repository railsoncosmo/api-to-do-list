import 'express-async-errors';
import express from 'express';
import { globalErrorHandler } from './middlewares/error-global';

const app = express();

app.use(express.json());
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado.');
});
