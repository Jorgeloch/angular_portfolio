import { Component, Input } from '@angular/core';
import { Language } from '../language';

@Component({
  selector: 'app-language-tile',
  standalone: true,
  imports: [],
  templateUrl: './language-tile.component.html',
  styleUrl: './language-tile.component.scss',
})
export class LanguageTileComponent {
  @Input() language!: Language;
}
