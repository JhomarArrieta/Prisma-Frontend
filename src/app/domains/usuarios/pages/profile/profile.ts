import { Component, ViewEncapsulation } from '@angular/core';
import { ProfileImage } from "./profile-image/profile-image";
import { ProfileInfo } from "./profile-info/profile-info";
import { ProfileInterest } from "./profile-interest/profile-interest";
import { ProfilePreferences } from "./profile-preferences/profile-preferences";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileImage, ProfileInfo, ProfileInterest, ProfilePreferences],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  encapsulation: ViewEncapsulation.None // 🔹 Hace que el CSS se aplique globalmente
})
export class Profile {}
