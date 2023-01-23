import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartComponent } from './list-part.component';

describe('ListPartComponent', () => {
  let component: ListPartComponent;
  let fixture: ComponentFixture<ListPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
