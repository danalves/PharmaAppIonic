import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedidoFinalizadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido-finalizado',
  templateUrl: 'pedido-finalizado.html',
})
export class PedidoFinalizadoPage {
  public remedio: any;
  public farmacia: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
      this.remedio = navParams.get("remedioEscolhido");
      this.farmacia = navParams.get("farmaciaEscolhida");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoFinalizadoPage');
  }

}
