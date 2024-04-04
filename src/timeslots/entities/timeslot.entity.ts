import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from '../../appointments/entities/appointment.entity';

export enum ECommuteMethod {
  DRIVING = 'driving',
  WALKING = 'walking',
  BICYCLING = 'bicycling',
}

export enum EWeekDays {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 0,
}

@Entity()
export class Timeslot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('boolean', {
    default: false,
  })
  isRecurring: boolean;

  @Column('date', {
    nullable: true,
    array: true,
  })
  excludedDates: Date[];

  @Column('date')
  initialDate: Date;

  @Column({
    enum: EWeekDays,
    type: 'int',
  })
  day: EWeekDays;

  @Column({
    length: 9,
  })
  startTime: string;

  @Column({
    length: 9,
  })
  endTime: string;

  @Column({
    type: 'enum',
    enum: ECommuteMethod,
  })
  commuteMethod: ECommuteMethod;

  @OneToMany(() => Appointment, (appointment) => appointment.timeslot)
  appointments: string[];
}
