import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserdashboardPage } from './userdashboard.page';

describe('UserdashboardPage', () => {
  let component: UserdashboardPage;
  let fixture: ComponentFixture<UserdashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
