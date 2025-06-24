import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import {Tank} from '../../Items/Tank/tank';


@Component({
  selector: 'app-view-game',
  imports: [],
  templateUrl: './view-game.component.html',
  styleUrl: './view-game.component.css'
})
export class ViewGameComponent implements OnInit, OnDestroy {
  @ViewChild('sceneContainer', { static: true }) sceneContainer!: ElementRef<HTMLDivElement>;

  private player: Tank = new Tank(10, 10, 20, 40);
  private intervalId: any;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.createScene(this.sceneContainer.nativeElement, 800, 700);
    this.gameService.addGameObject(this.player);

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
    this.gameService.update();
  }
}
