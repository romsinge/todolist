import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks$: Observable<Task[]>

  constructor(
    private http: HttpClient
  ) {}

  private _tasks: Task[] = []

  get tasks(): Task[] {
    return this._tasks
  }

  getTasks(): Observable<Task[]> {
    this.tasks$ = new Observable(observer => {

      if (this._tasks && this._tasks.length) {
        observer.next(this._tasks)
      } else {
        this.http.get('http://localhost:3000/tasks').pipe(map(res => {
          return <Task[]>res
        })).subscribe(tasks => {
          this._tasks = tasks
          observer.next(tasks)
        })
      }

    })

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
}
