import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdTaskComponent } from './ad-task/ad-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'adtask',component:AdTaskComponent},
  {path:'listtask',component:ListTasksComponent},
  {path:'listusers',component:ListUsersComponent},
  {path:'editusers',component:EdituserComponent},
  {path:'viewuser',component:ViewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
