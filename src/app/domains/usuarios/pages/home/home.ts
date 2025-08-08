import { Component } from '@angular/core';
import { HomeUserInfo } from '../home-user-info/home-user-info';
import { HomeActionButtons } from '../home-action-buttons/home-action-buttons';
import { HomeMainContent } from '../home-main-content/home-main-content';
import { HomeProfileContainer } from '../home-profile-container/home-profile-container';
import { HomeNavMenu } from '../home-nav-menu/home-nav-menu';

@Component({
  selector: 'app-home',
  imports: [HomeUserInfo, HomeActionButtons, HomeMainContent, HomeProfileContainer, HomeNavMenu],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
