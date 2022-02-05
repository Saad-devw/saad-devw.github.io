import { Component, OnInit } from '@angular/core';
import { faCoffee, faCheck, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faCoffee = faCoffee;
  faCheck = faCheck;
  faCode = faCode;
  faGit = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
