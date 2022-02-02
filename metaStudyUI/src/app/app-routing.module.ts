import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      //   /notes component/
      path: 'notes',
      component: ,
    },
    {
      //  /resource component/
      path: 'resources',
      component: ,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}