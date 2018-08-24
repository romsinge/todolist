import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'org-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task
  @Output() done: EventEmitter<number> = new EventEmitter()

  myDate: Date = new Date()

  state: string = 'inactive'

  constructor() { }

  ngOnInit() {
    
  }

  handleClick() {
    this.done.emit(this.task.id)
  }
}
