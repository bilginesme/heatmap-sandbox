import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-heatmap',
  templateUrl: './simple-heatmap.component.html',
  styleUrls: ['./simple-heatmap.component.scss']
})
export class SimpleHeatmapComponent {
  heatmapData = [
    { date: '2024-03-01', value: 2 },
    { date: '2024-03-02', value: 8 },
    { date: '2024-03-03', value: 5 },
    { date: '2024-03-04', value: 10 },
    { date: '2024-03-05', value: 6 },
    { date: '2024-03-06', value: 3 }
  ];

  getHeatmapColor(value: number): string {
    if (value > 8) return '#00429d'; // Darkest
    if (value > 6) return '#4771b2';
    if (value > 4) return '#73a2c6';
    if (value > 2) return '#a5d5d8';
    return '#d0ebeb'; // Lightest
  }
}