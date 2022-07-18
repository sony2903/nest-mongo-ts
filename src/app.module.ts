import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeoplesModule } from './peoples/peoples.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PeoplesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/example'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
