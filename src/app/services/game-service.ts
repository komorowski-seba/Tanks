import {Injectable} from '@angular/core';
import {Tank} from '../Items/Tank/tank';
import {Canvas} from '../Items/Canvas/canvas';
import {IGameObject} from '../Items/i-game-object';
import {Wall} from '../Items/Wall/wall';
import {IGameService} from './igame-service';
import {Vector} from '../Items/Common/vector';
import {Rect} from '../Items/Common/rect';

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

  public checkCollision(gameObject: IGameObject, move: Vector): IGameObject[] {
    let result: IGameObject[] = [];
    let newPosition = gameObject.getRect().move(move);

    for (const g of this._gameObjects) {
        if (g === gameObject)
          continue;

        if (this.checkRectCollision(newPosition, g.getRect()))
          result.push(g);
    }

    return result;
  }

  private checkRectCollision(a: Rect, b: Rect): boolean {
    return !(a.x + a.width <= b.x ||
      b.x + b.width <= a.x ||
      a.y + a.height <= b.y ||
      b.y + b.height <= a.y);
  }

}
