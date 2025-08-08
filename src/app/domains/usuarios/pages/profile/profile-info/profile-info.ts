/*import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css'
})
export class ProfileInfo {

}
*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  templateUrl: './profile-info.html',
  styleUrls: ['./profile-info.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileInfo {}
