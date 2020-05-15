import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilnegocioPage } from './perfilnegocio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilnegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilnegocioPageRoutingModule {}
