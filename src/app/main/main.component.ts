import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
