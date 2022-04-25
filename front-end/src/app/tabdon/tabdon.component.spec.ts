import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdonComponent } from './tabdon.component';

describe('TabdonComponent', () => {
  let component: TabdonComponent;
  let fixture: ComponentFixture<TabdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabdonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
