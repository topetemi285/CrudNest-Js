import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateFirstDto } from './dto/create-first.dto';
import { FirstService } from './first.service';
import { UpdateUserDto } from './dto/update-first.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('first')
export class FirstController {
  constructor(private readonly firstService: FirstService) {}
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFirst(@Query('type') type: 'soft' | 'hard') {
    // const service = new FirstService();
    return this.firstService.getFirst(type);
  }

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GetOneFirst(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.firstService.getOneFirst(id);
    } catch (e) {
      throw new NotFoundException();
    }
  }

  @Post()
  @UseGuards(BeltGuard)
  createFirst(@Body(new ValidationPipe()) createFirstDto: CreateFirstDto) {
    return this.firstService.creatFirst(createFirstDto);
  }

  @Put(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editFirst(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    return this.firstService.updateFirst(+id, updateUser);
  }

  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeFirst(@Param('id') id: string) {
    return this.firstService.removeFirst(+id);
  }
}
