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
      name: 'C',
      path: 'assets/c-logo.svg',
    },
    {
      name: 'NodeJS',
      path: 'assets/nodejs-logo.svg',
    },
    {
      name: 'Typescript',
      path: 'assets/typescript-logo.svg',
    },
    {
      name: 'Python',
      path: 'assets/python-logo.svg',
    },
    {
      name: 'Ruby',
      path: 'assets/ruby-logo.svg',
    },
    {
      name: 'Golang',
      path: 'assets/go-logo.svg',
    },
    {
      name: 'PostgreSQL',
      path: 'assets/postgre-logo.svg',
    },
    {
      name: 'AWS',
      path: 'assets/aws-logo.svg',
    },
    {
      name: 'Docker',
      path: 'assets/docker-logo.svg',
    },
  ];
}
