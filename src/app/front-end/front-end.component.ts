import { Component } from '@angular/core';
import { LanguageTileComponent } from '../language-tile/language-tile.component';
import { Language } from '../language';

@Component({
  selector: 'app-front-end',
  standalone: true,
  imports: [LanguageTileComponent],
  templateUrl: './front-end.component.html',
  styleUrl: './front-end.component.scss',
})
export class FrontEndComponent {
  languages: Language[] = [
    {
      name: 'HTML',
      path: 'assets/html-logo.svg',
    },
    {
      name: 'CSS',
      path: 'assets/css-logo.svg',
    },
    {
      name: 'Angular',
      path: 'assets/angular-logo.svg',
    },
    {
      name: 'React',
      path: 'assets/react-logo.svg',
    },
    {
      name: 'Tailwind',
      path: 'assets/tailwind-logo.svg',
    },
    {
      name: 'Bootstrap',
      path: 'assets/bootstrap-logo.svg',
    },
  ];
}
