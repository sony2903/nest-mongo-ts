/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { People, PeopleDocument } from 'schema/people.schema';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(People.name) private peopleModel: Model<PeopleDocument>,
  ) {}

  async create(createPeopleDto: CreatePeopleDto) {
    const ppl = new this.peopleModel(createPeopleDto);
    return ppl.save();
  }

  async findAll() {
    return this.peopleModel.find();
  }

  async findOne(id: string) {
    return this.peopleModel.findOne({id});
  }

  async update(id: string, updatePeopleDto: UpdatePeopleDto) {
    return this.peopleModel.updateOne({id}, {$set: updatePeopleDto});
  }

  async remove(id: string) {
    return this.peopleModel.deleteOne({id});
  }
}
