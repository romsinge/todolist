import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'org-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  @ViewChild('taskForm') taskForm

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.taskService.createTask(this.taskForm.value.title).subscribe(task => {
      
    })
  }

}
