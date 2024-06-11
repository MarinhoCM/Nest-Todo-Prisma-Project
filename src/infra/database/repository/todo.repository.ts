import { Injectable } from '@nestjs/common';
import { PrismaTodoService } from "./prisma.database.service";
import { TodoInterface } from 'src/infra/database/repository/interfaces';
import { Todo } from '@prisma/client';


@Injectable()
export class PrismaTodoRepository {
  constructor(private readonly prismaService: PrismaTodoService) { }

  async create(todo: TodoInterface): Promise<Todo> {
    const createdtodo = await this.prismaService.todo.create(
      {
        data: todo,
      }
    )

    return createdtodo;
  }

  async findById(id: string) {
    const taskPrismaData =
      await this.prismaService.todo.findUnique({
        where: { id: id }
      });

    if (!taskPrismaData) {
      return null;
    }

    return taskPrismaData;
  }

  async findAll() {
    const todoPrismaData =
      await this.prismaService.todo.findMany();

    return todoPrismaData;
  }

  async save(task: TodoInterface, id: string): Promise<void> {
    await this.prismaService.todo.update({
      where: { id: id },
      data: task,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.todo.delete({
      where: { id: id }
    })
  }

  async findOne(query: TodoInterface): Promise<TodoInterface>{
    return await this.prismaService.todo.findFirst({
      where: {...query}
    });
  }

  async deleteOne(id: string): Promise<void>{
    return await this.deleteOne(id);
  }
}

