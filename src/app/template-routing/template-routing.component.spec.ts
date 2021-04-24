import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRoutingComponent } from './template-routing.component';

describe('TemplateRoutingComponent', () => {
  let component: TemplateRoutingComponent;
  let fixture: ComponentFixture<TemplateRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
