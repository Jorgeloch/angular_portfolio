import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { BackEndComponent } from '../back-end/back-end.component';
import { FrontEndComponent } from '../front-end/front-end.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutMeComponent, BackEndComponent, FrontEndComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
