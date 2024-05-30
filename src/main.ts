import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: ['https://listaperfeita.com', 'http://localhost:3000', 'https://app.listaperfeita.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

  // Middleware para lidar com solicitações OPTIONS
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.status(200).send();
    } else {
      next();
    }
  });

  await app.listen(5002);
}
bootstrap();
