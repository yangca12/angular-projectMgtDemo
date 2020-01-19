import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(private projectService: ProjectsService ) {
   }

  save(project) {
    this.projectService.create(project);
  }

  ngOnInit() {
  }


}
