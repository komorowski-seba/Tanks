import {Injectable, NgIterable} from '@angular/core';
import {Tank} from '../Items/Tank/tank';
import {Canvas} from '../Items/Canvas/canvas';

@Injectable({ providedIn: 'root' })
export class GameService {
  private _player: Tank = new Tank(10, 10);
  private _canvas: Canvas = new Canvas(80);

  get canvas(): Canvas {
    return this._canvas
  }

  public keyEvent(key: string): void {
    this._player.keyEvent(key);
  }
}
