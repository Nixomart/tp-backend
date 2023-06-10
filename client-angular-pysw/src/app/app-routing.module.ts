import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormaddproductComponent } from './components/formaddproduct/formaddproduct.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ViewerComponent } from './components/viewer/viewer.component';

const routes: Routes = [
  { path: 'addProduct', component: FormaddproductComponent },
  { path: 'ControlTickets', component: TicketsComponent },
  { path: 'addViewer', component: ViewerComponent },
  { path: 'divisas', component: DivisasComponent },
  { path: '**', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
