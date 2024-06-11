import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoInterface } from './infra/database/repository/interfaces';

@Controller("tasks")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<TodoInterface> {
    return await this.appService.getAll();
  }

  @Get()
  async getTask(@Query() task: TodoInterface): Promise<TodoInterface> {
    return await this.appService.getTask(task);
  }

  @Post("create")
  async createTask(@Body() task: TodoInterface): Promise<TodoInterface> {
    return await this.appService.createTask(task);
  }

  @Delete("drop")
  async dropTask(@Query() query: TodoInterface): Promise<TodoInterface> {
    const task = await this.appService.getTask(query);
    if (!task)
      throw new HttpException(
        "Não foi identificada nenhuma atividade com as informações repassadas",
        HttpStatus.NOT_FOUND
      );
    else
      await this.appService.dropTask(task.id);
      return task;
  } 
}
