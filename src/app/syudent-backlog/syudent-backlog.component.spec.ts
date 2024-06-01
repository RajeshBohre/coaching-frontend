import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyudentBacklogComponent } from './syudent-backlog.component';

describe('SyudentBacklogComponent', () => {
  let component: SyudentBacklogComponent;
  let fixture: ComponentFixture<SyudentBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyudentBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyudentBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
