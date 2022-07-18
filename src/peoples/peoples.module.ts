/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { PeoplesController } from './peoples.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { People, PeopleSchema } from 'schema/people.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: People.name, schema: PeopleSchema }])],
  controllers: [PeoplesController],
  providers: [PeoplesService]
})
export class PeoplesModule {}
