import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindinComponent } from './data-bindin.component';

describe('DataBindinComponent', () => {
  let component: DataBindinComponent;
  let fixture: ComponentFixture<DataBindinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
