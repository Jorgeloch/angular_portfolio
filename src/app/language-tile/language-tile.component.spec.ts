import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTileComponent } from './language-tile.component';

describe('LanguageTileComponent', () => {
  let component: LanguageTileComponent;
  let fixture: ComponentFixture<LanguageTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
