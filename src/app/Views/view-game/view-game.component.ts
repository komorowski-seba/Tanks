import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Tank } from '../../Items/Tank/tank';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-view-game',
  imports: [
    NgForOf
  ],
  templateUrl: './view-game.component.html',
  styleUrl: './view-game.component.css'
})
export class ViewGameComponent implements OnInit, OnDestroy {

  private player: Tank = new Tank(10, 10);
  private intervalId: any;

  boxes: number[] = Array.from({ length: 40 * 40 });

  constructor() {
  }

  ngOnInit() {

    this.intervalId = setInterval(() => {
      this.update();
    }, 100);
  };

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.player.keyEvent(event.key);
  }

  update(): void {
  }
}
