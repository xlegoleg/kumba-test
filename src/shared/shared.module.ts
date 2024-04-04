import { Module } from '@nestjs/common';
import { FilesService } from './files/files.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from '../appointments/entities/appointment.entity';
import { Timeslot } from '../timeslots/entities/timeslot.entity';

const ORM = [TypeOrmModule.forFeature([Appointment, Timeslot])];

@Module({
  imports: [...ORM],
  providers: [FilesService],
  exports: [FilesService, ...ORM],
})
export class SharedModule {}
