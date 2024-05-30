import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: '*',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));

  await app.listen(5002);
}
bootstrap();
