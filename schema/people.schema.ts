/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PeopleDocument = People & Document;

@Schema()
export class People {
    @Prop()
    name: string;

    @Prop()
    job: string;
}

export const PeopleSchema = SchemaFactory.createForClass(People);