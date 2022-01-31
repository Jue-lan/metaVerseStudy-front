import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedPanelComponent } from './news-feed-panel.component';

describe('NewsFeedPanelComponent', () => {
  let component: NewsFeedPanelComponent;
  let fixture: ComponentFixture<NewsFeedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeedPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
