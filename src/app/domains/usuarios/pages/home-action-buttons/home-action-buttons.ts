import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-action-buttons',
  imports: [],
  templateUrl: './home-action-buttons.html',
  styleUrl: './home-action-buttons.css'
})
export class HomeActionButtons {
  @Output() passed = new EventEmitter<boolean>();

  siguiente(){
    this.passed.emit(true);
  }
}
