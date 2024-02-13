import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SubscribeDto {

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  startDate: Date;
}
