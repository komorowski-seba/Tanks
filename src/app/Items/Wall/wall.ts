import {Canvas} from "../Canvas/canvas";
import {IGameObject} from '../i-game-object';
import {Rect} from '../Common/rect';

export class Wall implements IGameObject {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    public constructor(x: number, y: number, width: number, height: number) {
      this._x = x;
      this._y = y;
      this._width = width;
      this._height = height;
    }
    update(): void {
    }

    keyEvent(key: string): void {
    }

    getX(): number {
      return this._x;
    }
    getY(): number {
        return this._y;
    }

    getRect(): Rect {
      return new Rect(this._x, this._y, this._width, this._height);
    }

  draw(canvas: Canvas): void {
        for (let x = 0; x < this._width; x++) {
          for (let y = 0; y < this._height; y++) {
            canvas.setColorPoint(this._x + x, this._y + y, Canvas.colorPurple.number);
          }
        }
    }
}
