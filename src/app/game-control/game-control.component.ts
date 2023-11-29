import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() incrementedNumber = new EventEmitter<void>;
  counter = 0;
  timer;

  incrementNumber() {
    this.incrementedNumber.emit();
  }

  onStart() {
    this.timer = setInterval(() => {this.incrementNumber()}, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }
}
