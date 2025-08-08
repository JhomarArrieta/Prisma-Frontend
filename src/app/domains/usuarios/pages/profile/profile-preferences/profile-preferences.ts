/*import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-preferences',
  imports: [],
  templateUrl: './profile-preferences.html',
  styleUrl: './profile-preferences.css'
})
export class ProfilePreferences {

}
*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-preferences',
  standalone: true,
  templateUrl: './profile-preferences.html',
  styleUrls: ['./profile-preferences.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePreferences {}
