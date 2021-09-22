import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './shared/task';
import { TasksService } from './shared/task.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post('/')
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('completed') completed: boolean,
  ): Promise<void> {
    this.taskService.update(id, completed);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.taskService.delete(id);
  }
}
