import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html'
})
export class Encuesta {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('Hello Encuesta Page');
  }

  send() {
    // create an alert instance
    let alert = this.alertCtrl.create({
      title: 'Encusta enviada!!',
      buttons: [{
        text: 'OK',
        handler: () => {
          // close the sliding item
          //slidingItem.close();
        }
      }]
    });
    // now present the alert on top of all other content
    alert.present();
  }

}
