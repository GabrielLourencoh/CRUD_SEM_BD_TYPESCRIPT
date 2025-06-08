import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotosController } from 'src/motos/motos.controller';
import { MotosService } from 'src/motos/motos.service';

@Module({
  imports: [],
  controllers: [AppController, MotosController],
  providers: [AppService, MotosService],
})
export class AppModule {}
