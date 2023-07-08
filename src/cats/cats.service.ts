import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domain/cat.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
    private dataSource: DataSource,
  ) {}

  async create(createCatDto: CreateCatDto) {
    return await this.catRepository.save(createCatDto);
  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catRepository.findOne({ where: { id } });
    if (!cat) {
      throw new Error('cat not found!');
    }
    Object.assign(cat, updateCatDto);
    return await this.catRepository.save(cat);
  }

  async remove(id: number) {
    const allCats = this.catRepository.find({ where: { id } });
    const cat = await this.catRepository.findOne({ where: { id } });
    if (!cat) {
      throw new Error('cat not found!');
    }
    return this.catRepository.remove(cat);
  }
}
