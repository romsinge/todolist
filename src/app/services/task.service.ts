import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks$: Subject<Task[]>

  constructor(
    private http: HttpClient
  ) {}

  private _tasks: Task[] = []

  get tasks(): Task[] {
    return this._tasks
  }

  getTasks() {
    this.tasks$ = new Subject()

    // if (this._tasks && this._tasks.length) {
    //   this.tasks$.next(this._tasks)
    // } else {
      this.http.get('http://localhost:3000/tasks').pipe(map(res => {
        return <Task[]>res
      })).subscribe(tasks => {
        this._tasks = tasks
        this.tasks$.next(tasks)
      })
    // }

    return this.tasks$
  }

  toggleTaskStatusById(id: number) {
    let task = this._tasks.find(task => {
      return task.id == id
    })

    task.done = !task.done

    return this.http.patch(`http://localhost:3000/tasks/${id}`, task)
  }

  getTaskById(id: number): Task {
    return this.tasks.find(task => task.id == id)
  }

  createTask(name: string) {
    let createTask$ = this.http.post('http://localhost:3000/tasks', {
      name,
      done: false
    })

    createTask$.pipe(map(res => <Task>res)).subscribe(task => {
      this._tasks.push(task)
      this.tasks$.next(this._tasks)
    })

    return createTask$
  }
}
