import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: ['https://listaperfeita.com', 'http://localhost:3000', 'https://app.listaperfeita.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Inclua 'OPTIONS' aqui
  }));

  // Adicione um middleware para tratar solicitações OPTIONS
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });
  
  await app.listen(5002);
}
bootstrap();
