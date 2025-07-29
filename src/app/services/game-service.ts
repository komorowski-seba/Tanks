import { Injectable } from '@angular/core';
import { Tank } from '../Items/Tank/tank';

@Injectable({ providedIn: 'root' })
export class GameService {
  private player: Tank = new Tank(10, 10);
  private intervalId: any;
  private boxes: number[] = Array.from({ length: 40 * 40 });

  public keyEvent(key: string): void {
    this.player.keyEvent(key);
  }
}
