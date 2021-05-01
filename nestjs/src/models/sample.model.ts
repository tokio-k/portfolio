import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  freeInput: string;
}
