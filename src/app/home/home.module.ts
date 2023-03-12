import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from './components/header/header.module';

import { StartPostComponent } from './components/start-post/start-post.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
  ],
  declarations: [
    HomePage,
    StartPostComponent,
    ProfileSummaryComponent,
    AdvertisingComponent,
  ],
})
export class HomePageModule {}
