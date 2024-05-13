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

  it('should successfully create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully convert 1 to I', () => {
    const component = fixture.debugElement.componentInstance;
    component.parsedValue$.subscribe(
      (data:string) => {
        expect(data).toBe('I')
      }
    );

    const romanInput = fixture.nativeElement.querySelector('input')
    romanInput.value = '1';
    romanInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  });
});
