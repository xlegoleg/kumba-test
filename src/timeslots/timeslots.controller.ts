import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { UpdateTimeslotCommuteDto } from './dto/update-timeslot-commute.dto';
import { UpdateTimeslotDateDto } from './dto/update-date.dto';

@Controller('timeslots')
export class TimeslotsController {
  constructor(private readonly timeslotsService: TimeslotsService) {}

  @Get()
  findAll() {
    return this.timeslotsService.findAll();
  }

  @Patch(':id/commute_method')
  updateDate(
    @Param('id') id: string,
    @Body() updateTimeslotCommuteDto: UpdateTimeslotCommuteDto,
  ) {
    return this.timeslotsService.update(id, updateTimeslotCommuteDto);
  }

  @Patch(':id/date')
  updateCommuteMethod(
    @Param('id') id: string,
    @Body() updateTimeslotDateDto: UpdateTimeslotDateDto,
  ) {
    return this.timeslotsService.updateDate(id, updateTimeslotDateDto);
  }
}
