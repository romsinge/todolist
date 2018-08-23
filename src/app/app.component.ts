import { TaskService } from './services/task.service';
import { Task } from './interfaces/task';
import { Component } from '@angular/core';
import { TaskFilterPipe } from './pipes/task-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private taskFilter: TaskFilterPipe,
    private taskService: TaskService
  ) {}

  title = 'orangemali';

  tasksDone: Task[]

  tasks: Task[]

  ngOnInit() {
    this.tasks = this.taskService.tasks
    this.filterTasks()
  }

  handleDone(id: number) {
    // this.tasks.splice(index, 1)
    // let task = this.tasks.find(task => task.id == id)
    // task.done = !task.done
    this.taskService.toggleTaskStatusById(id)

    this.filterTasks()
  }

  filterTasks() {
    this.tasksDone = this.taskFilter.transform(this.tasks, true)
  }
}
