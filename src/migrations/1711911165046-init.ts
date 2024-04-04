import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class init1711911165046 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        INSERT INTO public.timeslot("isRecurring", "initialDate", "day", "startTime", "endTime", "commuteMethod")
        VALUES 
        (false, '2024-01-01', 1,'10:00:00', '15:00:00', 'driving'),
        (true, '2024-02-01', 2,'12:00:00', '16:00:00', 'walking');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE timeslots;');
    await queryRunner.query('TRUNCATE TABLE appointments;');
  }
}
