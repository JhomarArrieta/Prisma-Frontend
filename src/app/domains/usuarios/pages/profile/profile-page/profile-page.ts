import { Component, ViewEncapsulation } from '@angular/core';
import { ProfileImage } from '../profile-image/profile-image';
import { ProfileInfo } from '../profile-info/profile-info';
import { ProfileInterest } from '../profile-interest/profile-interest';
import { ProfilePreferences } from '../profile-preferences/profile-preferences';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileImage, ProfileInfo, ProfileInterest, ProfilePreferences],
  templateUrl: './profile-page.html',
  styleUrls: ['./profile-page.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePage {}
