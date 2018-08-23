import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { Routes } from '@angular/router'
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard],
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