import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

import { AppErrorHandler } from './common/app-error-handler';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { ProjectsService } from './services/projects.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProjectsService,
    {provide: ErrorHandler , useClass: AppErrorHandler} //config global error handler

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
