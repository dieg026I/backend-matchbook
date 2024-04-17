import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionService } from './region.service';
import { Region } from './entities/region.entity';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  create(@Body() region: Region) {
    return this.regionService.createRegion(region);
  }

  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.regionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() region: Region) {
    return this.regionService.updateRegion(+id, region);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.regionService.removeRegion(+id);
  }
}
