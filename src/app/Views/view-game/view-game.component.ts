import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import {Tank} from '../../Items/Tank/tank';


@Component({
  selector: 'app-view-game',
  imports: [],
  templateUrl: './view-game.component.html',
  styleUrl: './view-game.component.css'
})
export class ViewGameComponent implements OnInit {
  @ViewChild('sceneContainer', { static: true }) sceneContainer!: ElementRef<HTMLDivElement>;

  private player: Tank = new Tank(10, 10, 20, 40);

  constructor(private physicService: GameService) {
  }

  ngOnInit() {
    this.physicService.createScene(this.sceneContainer.nativeElement, 800, 700);
    this.physicService.addGameObject(this.player);
  };

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.player.keyEvent(event.key);
  }
}
