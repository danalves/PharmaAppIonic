import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FarmaciasProvider } from '../../providers/farmacias/farmacias';
import { PedidoFinalizadoPage } from '../pedido-finalizado/pedido-finalizado';

/**
 * Generated class for the ListasFarmaciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas-farmacias',
  templateUrl: 'listas-farmacias.html',
})
export class ListasFarmaciasPage {
  public remedio: any
  public farmacias: any

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public farmaciasProvider: FarmaciasProvider) {
                this.remedio = navParams.get("remedioEscolhido")
                console.log(this.remedio.nome);
                this.pesquisarFarmacias()
  }

  pesquisarFarmacias() {
    console.log(this.remedio.categoria);
    if (this.remedio.categoria == "medicamento") {
      this.farmaciasProvider.load1().then(data => this.farmacias = data)
    } else if (this.remedio.categoria == "higiene") {
      this.farmaciasProvider.load2().then(data => this.farmacias = data)
    } else if (this.remedio.categoria == "estetica") {
      this.farmaciasProvider.load3().then(data => this.farmacias = data)
    }
  }

  finalizarPedidos(remedio: any, farmacia: any) {
    this.navCtrl.push(PedidoFinalizadoPage, {remedioEscolhido: remedio, farmaciaEscolhida: farmacia})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListasFarmaciasPage');
  }

}
