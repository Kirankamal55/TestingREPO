import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEventsComponent } from './blog-events.component';

describe('BlogEventsComponent', () => {
  let component: BlogEventsComponent;
  let fixture: ComponentFixture<BlogEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
