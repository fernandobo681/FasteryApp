import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilnegocioPageRoutingModule } from './perfilnegocio-routing.module';

import { PerfilnegocioPage } from './perfilnegocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilnegocioPageRoutingModule
  ],
  declarations: [PerfilnegocioPage]
})
export class PerfilnegocioPageModule {}
