import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/common/developer.model';
import { Skill } from 'src/common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  public developer: Developer | undefined;
  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer(
      'Ducroux',
      'Brice',
      33,
      'Male',
      'Learning web dev at wild code school since september 2021',
      [
        new Skill(
          'Angular',
          'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
          'https://angular.io/'
        ),
        new Skill(
          'Javascript',
          'https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg',
          'https://www.javascript.com/'
        ),
      ]
    );
  }
}
