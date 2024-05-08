import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnachtPage } from './connacht.page';

describe('ConnachtPage', () => {
  let component: ConnachtPage;
  let fixture: ComponentFixture<ConnachtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnachtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
