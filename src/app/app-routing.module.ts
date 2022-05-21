import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2aComponent } from './components/punto2a/punto2a.component';
import { Punto2bComponent } from './components/punto2b/punto2b.component';
import { Punto2cComponent } from './components/punto2c/punto2c.component';

const routes: Routes = [
  {path: 'punto1', component: Punto1Component},
  {path: 'punto2a', component: Punto2aComponent},
  {path: 'punto2b', component: Punto2bComponent},
  {path: 'punto2c', component: Punto2cComponent},
  {path: '**', pathMatch: 'full', redirectTo:'punto2a'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
