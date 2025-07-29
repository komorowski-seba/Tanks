import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Tank } from '../../Items/Tank/tank';
import { NgFor, NgForOf } from '@angular/common';
import { GameService } from '../../services/game-service';


@Component({
  selector: 'app-view-game',
  imports: [
    NgForOf
  ],
  templateUrl: './view-game.component.html',
  styleUrl: './view-game.component.css'
})
export class ViewGameComponent implements OnInit, OnDestroy {
  private intervalId: any;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.intervalId = setInterval(
      () => { this.update(); },
      100);
  };

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.gameService.keyEvent(event.key);
  }

  update(): void {
  }
}
