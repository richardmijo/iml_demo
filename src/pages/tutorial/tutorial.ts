import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Bienvenido a <b>IML - Demo</b>',
        description: '<b>Desarrollamos aplicaciones</b> a la medida que son fáciles de utilizar, construidas en plataformas robustas y desarrolladas bajo los mayores estándares de calidad.',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'Quienes somos?',
        description: 'Somos una Empresa de Desarrollo de Software con amplia experiencia en el desarrollo de soluciones a la medida en tecnologías de Escritorio, Entornos Web y Desarrollo Móvil',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'Por que elegir Isoft Soluciones?',
        description: 'Contamos con la experiencia, calidad para el desarrollo de software a la medida de sus necesidades.',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
