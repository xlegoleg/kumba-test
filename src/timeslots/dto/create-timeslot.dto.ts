import { ECommuteMethod, EWeekDays } from '../entities/timeslot.entity';
import { IsISO8601, IsNotEmpty, Matches } from 'class-validator';

export class CreateTimeslotDto {
  @Matches(/^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])$/)
  @IsNotEmpty()
  startTime: string;

  @Matches(/^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])$/)
  @IsNotEmpty()
  endTime: string;

  @IsNotEmpty()
  day: EWeekDays;

  @IsISO8601()
  @IsNotEmpty()
  public initialDate: Date;

  @IsNotEmpty()
  commuteMethod: ECommuteMethod;

  appointments: string[] | null;

  isRecurring: boolean;
}
