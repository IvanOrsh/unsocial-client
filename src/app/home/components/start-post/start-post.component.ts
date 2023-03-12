import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ModalComponent } from './modal/modal.component';

// TODO:
@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-modal',
    });
    await modal.present();
    const { role } = await modal.onDidDismiss();
    console.log(7, role);
  }
}
