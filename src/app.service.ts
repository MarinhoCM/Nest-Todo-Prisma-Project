import { Injectable } from '@nestjs/common';
import { PrismaTodoRepository } from './infra/database/repository/todo.repository';
import { TodoInterface } from './infra/database/repository/interfaces';
import { Todo } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(
    private readonly prismaTodoService: PrismaTodoRepository
  ) { }

  async getAll(): Promise<any> {
    return await this.prismaTodoService.findAll();
  }

  async createTask(task: TodoInterface): Promise<TodoInterface>{
    return await this.prismaTodoService.create(task);
  }

  async getTask(query: TodoInterface): Promise<any>{
    return await this.prismaTodoService.findOne(query);
  }
  
  async dropTask(id: string): Promise<void>{
    return await this.prismaTodoService.deleteOne(id);
  }
}