import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [    // definindo rotas
  { path: '', component: FirstComponentComponent },    // array de objetos com o 'path' de cada rota e declaração do compoente 'FirstComponentComponent'
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },    // rota dinamica o 'id' sempre vai mudar cada vez que a rota ser acessada
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],    // a rota começa do 'root' da raiz
  exports: [RouterModule]
})
export class AppRoutingModule { }
