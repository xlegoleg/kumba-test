import { PickType } from '@nestjs/mapped-types';
import { CreateTimeslotDto } from './create-timeslot.dto';

export class UpdateTimeslotDateDto extends PickType(CreateTimeslotDto, [
  'initialDate',
] as const) {}
