import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
