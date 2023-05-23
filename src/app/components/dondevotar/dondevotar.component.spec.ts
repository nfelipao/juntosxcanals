import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondevotarComponent } from './dondevotar.component';

describe('DondevotarComponent', () => {
  let component: DondevotarComponent;
  let fixture: ComponentFixture<DondevotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondevotarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DondevotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
