import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './models/create-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {
    }

    create(data: CreateUserDto): Promise<User> {
        return this.prismaService.user.create({ data });
    }

    findAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    findOne(id: string): Promise<User> {
        return this.prismaService.user.findUniqueOrThrow({
            where: {
                id
            }
        });
    }

    update(id: string, data: UpdateUserDto): Promise<User> {
        return this.prismaService.user.update({
            where: {
                id
            },
            data
        });
    }

    async remove(id: string) {
        await this.prismaService.user.delete({
            where: {
                id
            }
        });
    }
}
