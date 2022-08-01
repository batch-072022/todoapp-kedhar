import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AdTaskComponent } from './ad-task/ad-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ListUsersComponent,
    ViewProfileComponent,
    AdTaskComponent,
    ListTasksComponent,
    EditTaskComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
