import { Injectable } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateUserDto } from './dto/update-first.dto';

@Injectable()
export class FirstService {
  private first = [
    { id: 0, name: 'peter Asalu', type: 'hard' },
    { id: 1, name: 'John Asalu', type: 'soft' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFirst(type?: 'hard' | 'soft') {
    if (type) {
      return this.first.filter((first) => first.type === type);
    }
    return this.first;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getOneFirst(id: number) {
    const first = this.first.find((first) => first.id === id);
    if (!first) {
      throw new Error('[FIRST NOT FOUND');
    }
    return first;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  creatFirst(createFirstDto: CreateFirstDto) {
    const newFirst = {
      ...createFirstDto,
      id: Date.now(),
    };
    this.first.push(newFirst);

    return this.first;
  }
  updateFirst(id: number, updateUserDto: UpdateUserDto) {
    this.first = this.first.map((first) => {
      if (first.id === id) {
        return { ...first, ...updateUserDto };
      }
      return first;
    });
    return this.getOneFirst(id);
  }
  removeFirst(id: number) {
    const toBeRemoved = this.getOneFirst(id);
    this.first = this.first.filter((first) => first.id !== id);

    return toBeRemoved;
  }
}
