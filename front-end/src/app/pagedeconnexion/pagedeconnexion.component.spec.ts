import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedeconnexionComponent } from './pagedeconnexion.component';

describe('PagedeconnexionComponent', () => {
  let component: PagedeconnexionComponent;
  let fixture: ComponentFixture<PagedeconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedeconnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedeconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
