/*import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  imports: [],
  templateUrl: './profile-image.html',
  styleUrl: './profile-image.css'
})
export class ProfileImage {

}
*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  templateUrl: './profile-image.html',
  styleUrls: ['./profile-image.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileImage {}
