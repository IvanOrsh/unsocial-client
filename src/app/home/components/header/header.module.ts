import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule, PopoverModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
