import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeralsComponent } from './numerals.component';

describe('NumeralsComponent', () => {
  let component: NumeralsComponent;
  let fixture: ComponentFixture<NumeralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeralsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumeralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
