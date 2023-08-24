import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}
