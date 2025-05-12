import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import {Tank} from '../../Items/Tank/tank';


@Component({
  selector: 'app-view-game',
  imports: [],
  templateUrl: './view-game.component.html',
  styleUrl: './view-game.component.css'
})
export class ViewGameComponent {
  @ViewChild('sceneContainer', { static: true }) sceneContainer!: ElementRef<HTMLDivElement>;

  private player: Tank;

  constructor(private physicService: GameService) {
  }

  ngOnInit() {
    this.physicService.createScene(this.sceneContainer.nativeElement, 1200, 800);

    this.player = new Tank(10, 10, 100, 800);
    this.physicService.AddGameObject(this.player);
  };
}
