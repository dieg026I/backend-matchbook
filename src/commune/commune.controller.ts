import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitiesService } from './commune.service';


@Controller('cities')
export class CitiesController {
  constructor(private readonly CitiesService: CitiesService) {}

 
}
