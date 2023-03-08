import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [],
  providers: [],
})
export class UserModule {}