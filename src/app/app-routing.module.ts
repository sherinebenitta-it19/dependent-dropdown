import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrydropdownComponent } from 'src/app/countrydropdown/countrydropdown.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
