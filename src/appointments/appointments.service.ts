import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { TimeslotsService } from '../timeslots/timeslots.service';
import { FilesService } from '../shared/files/files.service';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Timeslot } from '../timeslots/entities/timeslot.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>,
    @InjectRepository(Timeslot)
    private timeslotRepo: Repository<Timeslot>,
    private filesService: FilesService,
  ) {}

  async findOne(id: string) {
    const appointment = this.appointmentRepo.findOne(id);

    if (!appointment) {
      throw new NotFoundException();
    }

    return appointment;
  }

  async create(
    createAppointmentDto: CreateAppointmentDto,
    files?: Express.Multer.File[],
  ) {
    let attachments = undefined;
    try {
      attachments = await this.filesService.saveFiles(files);
      attachments = attachments.map((v) => v.value);
    } catch (e) {
      throw new BadRequestException('An error occurred while saving files');
    }

    const timeslot = await this.timeslotRepo.findOne(
      createAppointmentDto.timeslotId,
    );

    const appointment = this.appointmentRepo.create({
      timeslot: timeslot.id,
      attachments,
    });

    return this.appointmentRepo.save(appointment);
  }

  async remove(id: string) {
    const appointment = await this.findOne(id);

    return this.appointmentRepo.remove(appointment);
  }
}
