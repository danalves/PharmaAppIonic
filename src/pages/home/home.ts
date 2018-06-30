import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemediosProvider } from '../../providers/remedios/remedios';
import { ListasFarmaciasPage } from '../listas-farmacias/listas-farmacias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public remedios: any
  public todosRemedios: any

  constructor(public navCtrl: NavController,
              public remediosProvider: RemediosProvider) {
    this.loadRemedios();
    this.todosRemedios = this.remedios;
  }

  loadRemedios(): Promise<any[]> {
    return this.remediosProvider.load().then(data => this.remedios = data)
  }

  verFarmacias(remedio: any) {
    this.navCtrl.push(ListasFarmaciasPage, {remedioEscolhido: remedio})
  }

  getItems(ev: any) {
    this.loadRemedios();

    this.loadRemedios().then((itens) => {
        this.remedios = itens;
        const val = ev.target.value;

        if (val && val.trim() != '') {
          this.remedios = this.remedios.filter((produto) => {
            return (produto.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    }
  })
}
}
