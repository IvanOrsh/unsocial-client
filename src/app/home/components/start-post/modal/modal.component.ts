import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

// TODO:

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  onDismiss() {
    this.modalController.dismiss(null, 'dismiss');
  }

  onPost() {
    if (!this.form) return;
    const body = this.form.value['body'];
    this.modalController.dismiss(
      {
        post: {
          body,
          createdAt: new Date(),
        },
      },
      'post'
    );
  }
}
