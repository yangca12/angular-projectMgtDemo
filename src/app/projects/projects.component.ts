import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  projects: any[];

  private msg: string;
  isEmpty = true;

  constructor(private projectService: ProjectsService) { }

  // updateProject(project) {
  //   this.service.update(project)
  //   .subscribe(
  //     updatedProject => {
  //     console.log(updatedProject);
  //   });
  //
  //  // we don't have special case for handler errors, so by default will call global errorHandler
  // }

  // deletePost(project) {
  //   this.service.delete(project.projectID)
  //   .subscribe(
  //     () => {  // in delete method we don't get return result from service, so,it's empty ()
  //     const index = this.projects.indexOf(project);  // found index of this post in the array
  //     this.projects.splice(index, 1); // then, go to this index and delete one object
  //   },
  //     (error: AppError) => {
  //       if (error instanceof NotFoundError ) {
  //       alert('this project has already been deleted');
  //       } else { throw error; } // here error will be captured by global error handler if any
  //    });
  //
  // }

    ngOnInit() {
    this.projectService.getAll('projects')
    .subscribe(data => {
        this.msg = data;
        if (this.msg != null) {
          this.isEmpty = false;
          this.projects = JSON.parse(data);
        }
     },
      err => {
      this.msg = 'Server is not available...';
      this.msg = JSON.parse (err.error).message;
      }

    );
  }


}

