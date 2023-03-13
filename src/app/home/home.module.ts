import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from './components/header/header.component';
import { PopoverComponent } from './components/header/popover/popover.component';
import { StartPostComponent } from './components/start-post/start-post.component';
import { ModalComponent } from './components/start-post/modal/modal.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    HeaderComponent,
    PopoverComponent,
    StartPostComponent,
    ModalComponent,
    ProfileSummaryComponent,
    AdvertisingComponent,
    AllPostsComponent,
    TabsComponent,
  ],
})
export class HomePageModule {}
