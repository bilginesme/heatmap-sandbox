import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleHeatmapComponent } from './simple-heatmap/simple-heatmap.component';

const routes: Routes = [
  { path: '', redirectTo: '/heatmap', pathMatch: 'full' },
   { path: 'heatmap', component: SimpleHeatmapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
