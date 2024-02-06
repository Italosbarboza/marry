import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsGuestModule } from './products-guest/products-guest.module';
import { ProductsGuestProrateModule } from './products-guest-prorate/products-guest-prorate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'marryme',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    ProductsGuestModule,
    ProductsGuestProrateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
