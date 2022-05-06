import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeysComponent } from './monkeys.component';

describe('MonkeysComponent', () => {
  let component: MonkeysComponent;
  let fixture: ComponentFixture<MonkeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonkeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
