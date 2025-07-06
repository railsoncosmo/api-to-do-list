import 'express-async-errors';
import express from 'express';
import { globalErrorHandler } from './middlewares/error-global';
import { resolve } from 'path';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/api', router);
app.use('/files', express.static(resolve(__dirname, '..', 'tmp')))
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado.');
});
