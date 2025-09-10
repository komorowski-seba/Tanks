import {Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener} from '@angular/core';
import {NgFor, NgForOf} from '@angular/common';
import {GameService} from '../../services/game-service';


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

  get gameService(): GameService {
    return this._gameService;
  }

  constructor(private _gameService: GameService) {
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

  @HostListener('window:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    this.gameService.keyEvent(' ');
  }

  update(): void {
    this._gameService.update();
  }
}
