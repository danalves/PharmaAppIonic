import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListasFarmaciasPage } from '../pages/listas-farmacias/listas-farmacias';
import { PedidoFinalizadoPage } from '../pages//pedido-finalizado/pedido-finalizado';
import { RemediosProvider } from '../providers/remedios/remedios';
import { HttpClientModule } from '@angular/common/http';
import { FarmaciasProvider } from '../providers/farmacias/farmacias';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListasFarmaciasPage,
    PedidoFinalizadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListasFarmaciasPage,
    PedidoFinalizadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemediosProvider,
    FarmaciasProvider
  ]
})
export class AppModule {}
