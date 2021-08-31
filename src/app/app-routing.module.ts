import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bmi-calculator',
    pathMatch: 'full'
  },
  {
    path: 'bmi-calculator',
    loadChildren: () => import('./bmi-calculator/bmi-calculator.module').then( m => m.BmiCalculatorPageModule)
  },
  {
    path: 'creator',
    loadChildren: () => import('./creator/creator.module').then( m => m.CreatorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
