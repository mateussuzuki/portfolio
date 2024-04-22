import { Component } from '@angular/core';
import { Projects } from '../../modal/projects.modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects:Projects = new Projects
}
