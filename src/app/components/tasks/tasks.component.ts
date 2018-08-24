import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskFilterPipe } from '../../pipes/task-filter.pipe';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'org-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskFilter: TaskFilterPipe,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  tasksDone: Task[] = []

  tasks$: Observable<Task[]>
  
  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(queryParams => {
      this.tasks$ = this.taskService.getTasks()
    // })
  }

  handleDone(id: number) {
    
    this.taskService.toggleTaskStatusById(id).subscribe(() => {
      this.tasks$ = this.taskService.getTasks()
    })

    // this.filterTasks()
  }

  // filterTasks() {
  //   this.tasksDone = this.taskFilter.transform(this.tasks, true)
  // }

}
