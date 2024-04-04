import { IsEnum, MinLength } from 'class-validator';

export class CreateFirstDto {
  @MinLength(5)
  name: string;
  @IsEnum(['soft', 'hard'], { message: 'Use Correct Type' })
  type: 'soft' | 'hard';
  id: number;
}
