import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsFunctionsComponent } from './statistics-functions.component';

describe('StatisticsFunctionsComponent', () => {
  let component: StatisticsFunctionsComponent;
  let fixture: ComponentFixture<StatisticsFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
