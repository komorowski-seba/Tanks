import {Injectable} from '@angular/core';
import {Tank} from '../Items/Tank/tank';
import {Canvas} from '../Items/Canvas/canvas';
import {IGameObject} from '../Items/i-game-object';

@Injectable({ providedIn: 'root' })
export class GameService {
  private _canvas: Canvas = new Canvas(80);
  private _gameObjects: IGameObject[] = [
    new Tank(10, 10),
  ];

  get canvas(): Canvas {
    return this._canvas
  }

  public keyEvent(key: string): void {
    for (const gameObject of this._gameObjects) {
      gameObject.keyEvent(key);
    }
  }

  public update(): void {
    this._canvas.clean();

    for (const gameObject of this._gameObjects) {
      gameObject.update();
    }

    for (const gameObject of this._gameObjects) {
      gameObject.draw(this._canvas);
    }
  }
}
