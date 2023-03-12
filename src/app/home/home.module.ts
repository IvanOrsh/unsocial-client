import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HeaderModule } from './components/header/header.module';
import { StartPostModule } from './components/start-post/start-post.module';
import { HomePageRoutingModule } from './home-routing.module';

import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    StartPostModule,
  ],
  declarations: [
    HomePage,
    ProfileSummaryComponent,
    AdvertisingComponent,
    AllPostsComponent,
  ],
})
export class HomePageModule {}
