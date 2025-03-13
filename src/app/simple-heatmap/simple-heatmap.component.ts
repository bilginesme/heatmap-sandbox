import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-heatmap',
  templateUrl: './simple-heatmap.component.html',
  styleUrls: ['./simple-heatmap.component.scss']
})

export class SimpleHeatmapComponent {
  year = 2025; // Example year
  heatmapData: any[] = [];
  monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  /*
  heatmapData = [
    { date: '2024-03-01', value: 2 },
    { date: '2024-03-02', value: 8 },
    { date: '2024-03-03', value: 5 },
    { date: '2024-03-04', value: 10 },
    { date: '2024-03-05', value: 6 },
    { date: '2024-03-06', value: 3 }
  ];
  */

  constructor() {
    this.generateYearlyHeatmap(this.year);
  }


  generateYearlyHeatmap(year: number) {
    const months = [];
    
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month
      const firstDay = new Date(year, month, 1).getDay(); // Get starting weekday (0=Sunday, 1=Monday, etc.)

      let monthData = [];
      let week = Array.from({ length: 7 }, () => null); // ✅ Corrected array initialization

      for (let day = 1; day <= daysInMonth; day++) {
        let weekday = new Date(year, month, day).getDay();
        weekday = (weekday === 0) ? 6 : weekday - 1; // ✅ Shift Sunday (0) to the end
        week[weekday] = { day, value: Math.floor(Math.random() * 10) }; // ✅ Random value assigned correctly
      
        if (weekday === 6 || day === daysInMonth) {
          monthData.push([...week]); // ✅ Save a copy

          week = Array.from({ length: 7 }, () => null); // ✅ Reset week correctly
        }
      }

      months.push({ month, data: monthData });
    }
     
    console.log(months);
    this.heatmapData = months;
  }

  getHeatmapColor(value: number): string {
    if (value > 8) return '#00429d'; // Darkest
    if (value > 6) return '#4771b2';
    if (value > 4) return '#73a2c6';
    if (value > 2) return '#a5d5d8';
    return '#d0ebeb'; // Lightest
  }

  onDayClick(day: any) {
    if (day) {
      console.log(`Clicked on day: ${day.day} with value: ${day.value}`);
      alert(`You clicked on ${day.day}, Value: ${day.value}`);
    }
  }
}