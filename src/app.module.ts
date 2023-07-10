import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { Cat } from './domain/cat.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tjrtkdals2@',
      database: 'typeorm_2023',
      entities: [User, Cat],
      synchronize: true,
    }),
    CatsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
