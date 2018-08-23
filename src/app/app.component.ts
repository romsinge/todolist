import { Task } from './interfaces/task';
import { Component } from '@angular/core';
import { TaskFilterPipe } from './pipes/task-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private taskFilter: TaskFilterPipe) {}

  title = 'orangemali';

  tasks: Task[] = [
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

  tasksDone: Task[]

  ngOnInit() {
    this.filterTasks()
  }

  handleDone(id: number) {
    // this.tasks.splice(index, 1)
    let task = this.tasks.find(task => task.id == id)
    task.done = !task.done

    this.filterTasks()
  }

  filterTasks() {
    this.tasksDone = this.taskFilter.transform(this.tasks, true)
  }
}
