import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCdkLibraryComponent } from './cs-cdk-library.component';

describe('CsCdkLibraryComponent', () => {
  let component: CsCdkLibraryComponent;
  let fixture: ComponentFixture<CsCdkLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsCdkLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCdkLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
