import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignupComponent } from './test-signup.component';

describe('TestSignupComponent', () => {
  let component: TestSignupComponent;
  let fixture: ComponentFixture<TestSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
