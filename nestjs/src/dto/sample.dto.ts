import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddSampleDto {
  @Field()
  name: string;
  @Field()
  freeInput: string;
}
