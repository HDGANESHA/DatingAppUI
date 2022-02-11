import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdetailListComponent } from './userdetails/userdetail-list/userdetail-list.component';
import { UserdetailComponent } from './userdetails/userdetail/userdetail.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'userdetaillist',component:UserdetailListComponent},
  {path:'userdetail',component:UserdetailComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'userdetail/:cusId',component:UserdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
