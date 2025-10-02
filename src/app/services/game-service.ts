import {Injectable} from '@angular/core';
import {Tank} from '../Items/Tank/tank';
import {Canvas} from '../Items/Canvas/canvas';
import {IGameObject} from '../Items/i-game-object';
import {Wall} from '../Items/Wall/wall';
import {IGameService} from './igame-service';
import {IVector} from '../Items/Common/ivector';
import {IRect} from '../Items/Common/irect';

@Injectable({ providedIn: 'root' })
export class GameService implements IGameService {
  private _canvas: Canvas = new Canvas(80);
  private _gameObjects: IGameObject[] = [
    new Tank(10, 10, this),
    new Wall(1, 1, 3, 3),
    new Wall(4, 1, 3, 3),
    new Wall(10, 1, 3, 3),
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

  public checkCollisionWithWall(gameObject: IGameObject, move: IVector): IGameObject | null {
    for (const gameObject of this._gameObjects) {
      if (gameObject instanceof Wall) {

      }
    }

    return null;
  }

  public checkCollision(a: IRect, b: IRect): boolean {
    return a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y;
  }

}
