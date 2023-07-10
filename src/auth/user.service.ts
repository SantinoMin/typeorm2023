import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { FindOneOptions } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findByFields(
    options: FindOneOptions<UserDto>,
  ): Promise<UserDto | undefined> {
    return await this.userRepository.findOne(options);
  }

  async save(UserDto: UserDto): Promise<UserDto | undefined> {
    return await this.userRepository.save(UserDto);
  }
}
