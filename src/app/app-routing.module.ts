import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {'path':'about', title:'About Us | Yummy Eats', component:AboutComponent},
  {'path':'menu', title:'Menu | Yummy Eats', component:MenuComponent},
  {'path':'rushaan', title:' Rushaan the Hero | Yummy Eats', component:EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
