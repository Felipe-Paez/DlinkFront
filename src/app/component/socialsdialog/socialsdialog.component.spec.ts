import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsdialogComponent } from './socialsdialog.component';

describe('SocialsdialogComponent', () => {
  let component: SocialsdialogComponent;
  let fixture: ComponentFixture<SocialsdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialsdialogComponent]
    });
    fixture = TestBed.createComponent(SocialsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
