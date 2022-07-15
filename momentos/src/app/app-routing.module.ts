import { NovoMomentoComponent } from './components/pages/novo-momento/novo-momento.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent },    // declaração das pagina 'home' e 'about'
  {path: 'about', component: AboutComponent},
  {path: 'momento/novo', component: NovoMomentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
