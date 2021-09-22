import { Module } from '@nestjs/common';
import { TasksService } from './shared/task.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
