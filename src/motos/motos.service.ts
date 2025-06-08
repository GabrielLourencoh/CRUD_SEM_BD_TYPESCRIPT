import { Injectable, NotFoundException } from '@nestjs/common';
import { Motos } from './entities/moto.entity';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Injectable()
export class MotosService {
  private lastId = 1;
  private motos: Motos[] = [
    {
      id: 1,
      marca: 'Marca1',
      modelo: 'Modelo1',
      ano: 2025,
    },
  ];

  findAll() {
    return this.motos;
  }

  findOne(id: number) {
    const moto = this.motos.find((item) => item.id === id);
    if (moto) {
      return moto;
    } else {
      throw new NotFoundException('Moto nao encontrada');
    }
  }

  create(createMotoDto: CreateMotoDto) {
    this.lastId++;
    const id = this.lastId;

    const novaMotoCadastro = {
      id,
      ...createMotoDto,
    };
    this.motos.push(novaMotoCadastro);

    return novaMotoCadastro;
  }

  update(id: number, updateMotoDto: UpdateMotoDto) {
    const motoExisteIndex = this.motos.findIndex((item) => item.id === id);

    if (motoExisteIndex < 0 || motoExisteIndex >= this.motos.length) {
      throw new NotFoundException('Moto nao encontrada');
    } else {
      const motoExiste = this.motos[motoExisteIndex];

      this.motos[motoExisteIndex] = {
        ...motoExiste,
        ...updateMotoDto,
      };
      return this.motos[motoExisteIndex];
    }
  }

  remove(id: number) {
    const motoExisteIndex = this.motos.findIndex((item) => item.id === id);

    if (motoExisteIndex < 0 || motoExisteIndex >= this.motos.length) {
      throw new NotFoundException('Moto nao encontrada');
    } else {
      const motoExiste = this.motos[motoExisteIndex];

      this.motos.splice(motoExisteIndex, 1);
      return motoExiste;
    }
  }
}
