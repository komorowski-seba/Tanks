import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEndGameComponent } from './view-end-game.component';

describe('ViewEndGameComponent', () => {
  let component: ViewEndGameComponent;
  let fixture: ComponentFixture<ViewEndGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEndGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEndGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
