import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: false },
    { id: 3, description: 'Tarefa 3', completed: false },
    { id: 4, description: 'Tarefa 4', completed: false },
    { id: 5, description: 'Tarefa 5', completed: false },
  ];

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: number): Task {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  create(task: Task): Task {
    const newTask = new Task();
    Object.assign(task, newTask);
    this.tasks.push(task);
    return newTask;
  }

  update(id: number, completed: boolean) {
    this.tasks.find((value) => {
      if (value.id == id) {
        value.completed = completed;
      }
    });
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
