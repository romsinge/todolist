import { Component, OnInit } from '@angular/core';
import { TaskFilterPipe } from '../../pipes/task-filter.pipe';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'org-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskFilter: TaskFilterPipe,
    private taskService: TaskService
  ) {}

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
