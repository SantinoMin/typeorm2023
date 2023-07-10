import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async registerUser(newUser: UserDto): Promise<UserDto> {
    const userFind: UserDto = await this.userService.findByFields({
      where: { username: newUser.username },
    });
    if (userFind) {
      throw new HttpException('Username already used!', HttpStatus.BAD_REQUEST);
    }
    return await this.userService.save(newUser);
  }
}

// create(createAuthDto: CreateAuthDto) {
//   return 'This action adds a new auth';
// }

// findAll() {
//   return `This action returns all auth`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} auth`;
// }

// update(id: number, updateAuthDto: UpdateAuthDto) {
//   return `This action updates a #${id} auth`;
// }

// remove(id: number) {
//   return `This action removes a #${id} auth`;
// }
