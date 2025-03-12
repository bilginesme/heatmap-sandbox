import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHeatmapComponent } from './simple-heatmap.component';

describe('SimpleHeatmapComponent', () => {
  let component: SimpleHeatmapComponent;
  let fixture: ComponentFixture<SimpleHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleHeatmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
