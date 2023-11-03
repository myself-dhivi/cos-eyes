import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { OutputPagePage } from './output-page.page';

describe('OutputPagePage', () => {
  let component: OutputPagePage;
  let fixture: ComponentFixture<OutputPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OutputPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
