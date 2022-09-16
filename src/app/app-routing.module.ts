import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { DonutDisplayComponent } from './pages/donut-display/donut-display.component';
import { DonutMenuComponent } from './pages/donut-menu/donut-menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DonutMenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'display/:id', component: DonutDisplayComponent },
  { path: 'display', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
