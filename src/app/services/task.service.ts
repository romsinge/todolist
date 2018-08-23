import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {}

  private _tasks: Task[] = [
    {
      id: 0,
      name: 'Faire les courses',
      done: false
    },
    {
      id: 1,
      name: 'Sortir le chien',
      done: true
    },
    {
      id: 2,
      name: 'Faire le ménage',
      done: false
    }
  ]

  get tasks(): Task[] {
    return this._tasks
  }

  toggleTaskStatusById(id: number): void {
    let task = this._tasks.find(task => {
      return task.id == id
    })

    task.done = !task.done
  }

  getTaskById(id: number): Task {
    return this.tasks.find(task => task.id == id)
  }
}
