import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { Cat } from './domain/cat.entity';
import { UserRepository } from './auth/user.repository';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({ autoLoadEntities: true }),
    CatsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
