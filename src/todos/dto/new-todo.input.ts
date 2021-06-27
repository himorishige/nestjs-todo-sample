import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class NewTodoInput {
  @Field()
  @IsString()
  @Length(5, 140)
  name: string;

  @Field(() => Int)
  priority: number;

  @Field()
  completed: boolean;
}
