import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-top-attractions',
  templateUrl: './top-attractions.page.html',
  styleUrls: ['./top-attractions.page.scss'],
})
export class TopAttractionsPage implements OnInit {
  attractions = [
    { id: 1, title: 'Paarl Mountain Nature Reserve' },
    { id: 2, title: 'Afrikaans Language Monument' },
    { id: 3, title: 'Spice Route' },
    { id: 4, title: 'Babylonstoren' },
    { id: 5, title: 'KWV' },
    { id: 6, title: 'Le Bonheur Reptile Adventures' },
    { id: 7, title: 'Paarl Adventure Trails' },
    { id: 8, title: 'Paarl Arboretum' },
    { id: 9, title: 'Paarl Historical Route' },
    { id: 10, title: 'Cheetah Experience Ashia' },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
