import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { MotosService } from './motos.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Controller('motos')
export class MotosController {
  constructor(private readonly motosService: MotosService) {}

  @Get('/')
  findAll() {
    return this.motosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.motosService.findOne(id);
  }

  @Post('/criar')
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motosService.create(createMotoDto);
  }

  @Patch('/atualizar/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateMotoDto: UpdateMotoDto,
  ) {
    return this.motosService.update(id, UpdateMotoDto);
  }

  @Delete('/deletar/:id')
  remove(@Param('id', ParseIntPipe) id: number){
    return this.motosService.remove(id);
  }
}
