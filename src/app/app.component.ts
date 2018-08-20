import { Task } from './interfaces/task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
      done: false
    },
    {
      id: 2,
      name: 'Faire le ménage',
      done: false
    }
  ]

  handleDone(id: number) {
    // this.tasks.splice(index, 1)
    this.tasks.find(task => task.id == id).done = true
  }
}
