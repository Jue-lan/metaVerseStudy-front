import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceListComponent } from './resource-list/resource-list.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { LoginComponent } from './Header/login/login.component'
import { HeaderBarComponent } from './Header/header-bar/header-bar.component';

const routes: Routes = [
    {
      //   /notes component/
      path: 'notes',
      component: NotesListComponent,
    },
    {
      //  /resource component/
      path: 'resources',
      component: ResourceListComponent,
    },
    {
        //  /task/home component/
        path: 'task',
        component: TaskListComponent,
      },
      // {
      //   path:'',
      //   component: LoginComponent,
      // },
      // {
      //   path:'',
      //   loadChildren:() => import('./Header/login/login.module').then(_ => _.LoginModule)
      // },
      {
        path:'home',// 'home'
        component: HeaderBarComponent,
      }

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}