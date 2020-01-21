import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

import {RouterModule} from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProjectsService } from './services/projects.service';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { LoginComponent } from './login/login.component';
import { JobitemComponent } from './jobitem/jobitem.component';
import { ProjectFormComponent } from './admin/project-form/project-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import {ClientService} from './services/client.service';
import { RegistrationComponent } from './registration/registration.component';
import {LoginService} from './services/login.service';
import {AuthInterceptor} from './helpers/auth.interceptor';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BsNavbarComponent,
    HomeComponent,
    ClientListComponent,
    MyProjectsComponent,
    AdminProjectsComponent,
    LoginComponent,
    JobitemComponent,
    ProjectFormComponent,
    ClientFormComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'client-list', component: ClientListComponent},
      {path: 'job-item', component: JobitemComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/projects', component: AdminProjectsComponent},
      {path: 'admin/projects/new', component: ProjectFormComponent},
      {path: 'admin/client/new', component: ClientFormComponent},
      {path: 'registration', component: RegistrationComponent}

    ])

  ],
  providers: [
    ProjectsService,
    ClientService,
    LoginService,
    AuthInterceptor,
    UserService,
    AuthService,
    {provide: ErrorHandler , useClass: AppErrorHandler} // config global error handler

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
