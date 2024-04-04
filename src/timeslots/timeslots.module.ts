import { Module } from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { TimeslotsController } from './timeslots.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [TimeslotsController],
  providers: [TimeslotsService],
})
export class TimeslotsModule {}
