import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencersDialogComponent } from './influencers-dialog.component';

describe('InfluencersDialogComponent', () => {
  let component: InfluencersDialogComponent;
  let fixture: ComponentFixture<InfluencersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
