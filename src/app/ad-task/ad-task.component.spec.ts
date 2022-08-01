import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTaskComponent } from './ad-task.component';

describe('AdTaskComponent', () => {
  let component: AdTaskComponent;
  let fixture: ComponentFixture<AdTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
