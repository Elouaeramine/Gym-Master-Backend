import { UserEntity } from './user/model/user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { GymModule } from './gym/gym.module';
import { GymEntity } from './gym/model/gym.entity';
import { PackEntity } from './gym/model/pack.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'gymmaster',
      password: 'GymMaster',
      database: 'gymmaster',
      // autoLoadEntities: true,
      entities: [GymEntity, UserEntity, PackEntity],
      synchronize: true,
    }),
    AuthModule,
    GymModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
