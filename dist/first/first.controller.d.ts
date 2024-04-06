import { CreateFirstDto } from './dto/create-first.dto';
import { FirstService } from './first.service';
import { UpdateUserDto } from './dto/update-first.dto';
export declare class FirstController {
    private readonly firstService;
    constructor(firstService: FirstService);
    getFirst(type: 'soft' | 'hard'): {
        id: number;
        name: string;
        type: string;
    }[];
    GetOneFirst(id: number): {
        id: number;
        name: string;
        type: string;
    };
    createFirst(createFirstDto: CreateFirstDto): {
        id: number;
        name: string;
        type: string;
    }[];
    editFirst(id: string, updateUser: UpdateUserDto): {
        id: number;
        name: string;
        type: string;
    };
    removeFirst(id: string): {
        id: number;
        name: string;
        type: string;
    };
}
