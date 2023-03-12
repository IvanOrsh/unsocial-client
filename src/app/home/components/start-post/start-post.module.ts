import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { StartPostComponent } from './start-post.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [StartPostComponent],
  imports: [CommonModule, IonicModule, ModalModule],
  exports: [StartPostComponent],
})
export class StartPostModule {}
