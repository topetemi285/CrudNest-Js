import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateUserDto } from './dto/update-first.dto';
export declare class FirstService {
    private first;
    getFirst(type?: 'hard' | 'soft'): {
        id: number;
        name: string;
        type: string;
    }[];
    getOneFirst(id: number): {
        id: number;
        name: string;
        type: string;
    };
    creatFirst(createFirstDto: CreateFirstDto): {
        id: number;
        name: string;
        type: string;
    }[];
    updateFirst(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
        type: string;
    };
    removeFirst(id: number): {
        id: number;
        name: string;
        type: string;
    };
}
