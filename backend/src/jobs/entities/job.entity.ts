import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field(Int)
  id: number;

  @Field()
  label: string;

  @Field()
  description: string;

  @Field()
  opening_at: Date;

  @Field()
  closing_at: Date;

  @Field()
  created_at: Date;

  @Field({ nullable: true })
  updated_at?: Date;

  @Field({ nullable: true })
  deleted_at?: Date;
}
