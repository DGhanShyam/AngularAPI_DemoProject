import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTestComponent } from './skill-test.component';

describe('SkillTestComponent', () => {
  let component: SkillTestComponent;
  let fixture: ComponentFixture<SkillTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
