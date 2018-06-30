import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FarmaciasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FarmaciasProvider {
  public farmacias1: any
  public farmacias2: any
  public farmacias3: any

  constructor(public http: HttpClient) {
    console.log('Hello FarmaciasProvider Provider');
  }

  public load1() {
    if (this.farmacias1) {
      return Promise.resolve(this.farmacias1)
    }
    return new Promise(resolve => {
      this.http.get('assets/data/farmaciasJSON1.json').subscribe((data: any) => {
        this.farmacias1 = data.results;
        resolve(this.farmacias1);
          }), err => {
        console.log(err);
      }
    });
  }

  public load2() {
    if (this.farmacias2) {
      return Promise.resolve(this.farmacias2)
    }
    return new Promise(resolve => {
      this.http.get('assets/data/farmaciasJSON2.json').subscribe((data: any) => {
        this.farmacias2 = data.results;
        resolve(this.farmacias2);
          }), err => {
        console.log(err);
      }
    });
  }

  public load3() {
    if (this.farmacias3) {
      return Promise.resolve(this.farmacias3)
    }
    return new Promise(resolve => {
      this.http.get('assets/data/farmaciasJSON3.json').subscribe((data: any) => {
        this.farmacias3 = data.results;
        resolve(this.farmacias3);
          }), err => {
        console.log(err);
      }
    });
  }

}
