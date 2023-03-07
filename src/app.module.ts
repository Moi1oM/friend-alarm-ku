import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './modules/models/accounts/entities/account.entity';
import { Chat } from './modules/models/chats/entities/chat.entity';
import { Course } from './modules/models/courses/entities/course.entity';
import { Friendship } from './modules/models/friendships/entities/friendship.entity';
import { Profile } from './modules/models/profiles/entities/profile.entity';
import { Timetable } from './modules/models/timetables/entities/timetable.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
      //useCreateIndex: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DBNAME,
      entities: [Account, Chat, Course, Friendship, Profile, Timetable],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
