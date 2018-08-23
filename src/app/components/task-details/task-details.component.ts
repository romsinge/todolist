import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Task } from '../../interfaces/task';

@Component({
  selector: 'org-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  task: Task

  ngOnInit() {
    this.route.params
    .pipe(map(params => +params.id))
    .subscribe(id => {
      this.task = this.taskService.getTaskById(id)
    })
  }

}
