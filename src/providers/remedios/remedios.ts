import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RemedioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemediosProvider {
  public remedios: any;

  constructor(public http: HttpClient) {
    console.log('Hello RemediosProvider Provider');
  }

  public load() {

    if (this.remedios) {
      return Promise.resolve(this.remedios)
    }

    return new Promise(resolve => {
      this.http.get('assets/data/remediosJSON.json').subscribe((data: any) => {
        this.remedios = data.results;
        resolve(this.remedios);
          }), err => {
        console.log(err);
      }
    });
  }

}
