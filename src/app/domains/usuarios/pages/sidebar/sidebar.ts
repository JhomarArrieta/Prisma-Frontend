/* auto generado 
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

} */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userName: string = 'Usuario';

  ngOnInit(): void {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      this.userName = storedName;
    }
  }

  logout() {
    console.log('Cerrar sesión');
  }
}

