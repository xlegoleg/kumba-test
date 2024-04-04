import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Timeslot } from './entities/timeslot.entity';
import { Repository } from 'typeorm';
import { UpdateTimeslotDateDto } from './dto/update-date.dto';
import { Appointment } from '../appointments/entities/appointment.entity';

@Injectable()
export class TimeslotsService {
  constructor(
    @InjectRepository(Timeslot) private timeslotRepo: Repository<Timeslot>,
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>,
  ) {}
  findAll() {
    return this.timeslotRepo.find({
      relations: ['appointments'],
    });
  }

  async findOne(id: string) {
    const timeslot = await this.timeslotRepo.findOne(id);

    if (!timeslot) {
      throw new NotFoundException();
    }

    return timeslot;
  }

  async update(id: string, updateTimeslotDto: UpdateTimeslotDto) {
    await this.findOne(id);

    return this.timeslotRepo.update(id, updateTimeslotDto);
  }
  async updateDate(id: string, updateTimeslotDate: UpdateTimeslotDateDto) {
    const dateCopy = new Date(updateTimeslotDate.initialDate);
    const {
      id: timeslotId,
      excludedDates,
      ...timeslot
    } = await this.findOne(id);

    if (timeslot.isRecurring) {
      await this.timeslotRepo.update(id, {
        day: dateCopy.getDay(),
        excludedDates: [
          ...(excludedDates ?? []),
          updateTimeslotDate.initialDate,
        ],
      });
      const newTimeslot = await this.timeslotRepo.save({
        ...timeslot,
        initialDate: updateTimeslotDate.initialDate,
        day: dateCopy.getDay(),
        isRecurring: false,
      });
      return this.appointmentRepo.update(
        { timeslot: timeslotId },
        { timeslot: newTimeslot.id },
      );
    } else {
      return this.timeslotRepo.update(id, {
        ...updateTimeslotDate,
        day: dateCopy.getDay(),
      });
    }
  }
}
