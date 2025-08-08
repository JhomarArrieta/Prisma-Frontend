import { Component } from '@angular/core';
import { ProfileImage } from "../profile-image/profile-image";
import { ProfileInfo } from "../profile-info/profile-info";
import { ProfileInterest } from "../profile-interest/profile-interest";
import { ProfilePreferences } from "../profile-preferences/profile-preferences";

@Component({
  selector: 'app-profile-page',
  imports: [ProfileImage, ProfileInfo, ProfileInterest, ProfilePreferences],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css'
})
export class ProfilePage {

}
