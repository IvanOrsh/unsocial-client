import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    IonicModule, // Add the IonicModule here
    FormsModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
