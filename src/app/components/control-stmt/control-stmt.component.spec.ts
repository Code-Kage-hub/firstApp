import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStmtComponent } from './control-stmt.component';

describe('ControlStmtComponent', () => {
  let component: ControlStmtComponent;
  let fixture: ComponentFixture<ControlStmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
