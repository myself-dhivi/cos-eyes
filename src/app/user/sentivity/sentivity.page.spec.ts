import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SentivityPage } from './sentivity.page';

describe('SentivityPage', () => {
  let component: SentivityPage;
  let fixture: ComponentFixture<SentivityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SentivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
