import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todo/entities/todo.entity';
import { TodoModule } from './todo/todo.module';
import { Users } from './users/entities/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'delete',
      password: 'root',
      entities: [Users, Todos],
      autoLoadEntities: true,
      synchronize: true,
    }), TodoModule, UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
