import { IsNotEmpty, IsUUID } from 'class-validator';
export class CreateAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  timeslotId: string;

  attachments?: string[];
}
