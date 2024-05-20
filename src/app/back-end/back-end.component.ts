import { Component } from '@angular/core';
import { LanguageTileComponent } from '../language-tile/language-tile.component';
import { Language } from '../language';

@Component({
  selector: 'app-back-end',
  standalone: true,
  imports: [LanguageTileComponent],
  templateUrl: './back-end.component.html',
  styleUrl: './back-end.component.scss',
})
export class BackEndComponent {
  languages: Language[] = [
    {
      id: 0,
      name: 'NodeJS',
      path: 'assets/nodejs-logo.svg',
    },
    {
      id: 1,
      name: 'Typescript',
      path: 'assets/typescript-logo.svg',
    },
    {
      id: 2,
      name: 'Python',
      path: 'assets/python-logo.svg',
    },
    {
      id: 3,
      name: 'Ruby',
      path: 'assets/ruby-logo.svg',
    },
    {
      id: 4,
      name: 'Golang',
      path: 'assets/go-logo.svg',
    },
    {
      id: 5,
      name: 'PostgreSQL',
      path: 'assets/postgre-logo.svg',
    },
    {
      id: 6,
      name: 'AWS',
      path: 'assets/aws-logo.svg',
    },
    {
      id: 7,
      name: 'Docker',
      path: 'assets/docker-logo.svg',
    },
  ];
}
