import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { Routes } from '@angular/router'
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    children: [
      {
        path: 'create',
        component: TaskCreateComponent
      },
      {
        path: 'details/:id',
        component: TaskDetailsComponent
      },
      {
        path: 'details',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

export default ROUTES