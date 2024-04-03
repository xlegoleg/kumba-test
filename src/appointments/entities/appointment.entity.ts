import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Timeslot } from '../../timeslots/entities/timeslot.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Timeslot, (timeslot) => timeslot.appointments)
  timeslot: string;

  @Column('text', {
    array: true,
    nullable: true,
    default: null,
  })
  attachments: string[] | null;
}
