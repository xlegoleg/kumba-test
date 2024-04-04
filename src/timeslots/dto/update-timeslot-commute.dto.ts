import { PickType } from '@nestjs/mapped-types';
import { CreateTimeslotDto } from './create-timeslot.dto';

export class UpdateTimeslotCommuteDto extends PickType(CreateTimeslotDto, [
  'commuteMethod',
] as const) {}
