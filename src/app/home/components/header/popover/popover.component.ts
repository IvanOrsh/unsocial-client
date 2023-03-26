import { Component, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignOut() {
    this.authService.logout();
  }
}
