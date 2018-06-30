import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasFarmaciasPage } from './listas-farmacias';

@NgModule({
  declarations: [
    ListasFarmaciasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasFarmaciasPage),
  ],
})
export class ListasFarmaciasPageModule {}
