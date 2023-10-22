import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmintTextComponent } from './submint-text.component';

describe('SubmintTextComponent', () => {
  let component: SubmintTextComponent;
  let fixture: ComponentFixture<SubmintTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmintTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmintTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
