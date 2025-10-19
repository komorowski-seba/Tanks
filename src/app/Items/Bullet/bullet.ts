import {IGameObject} from '../i-game-object';
import {Canvas} from '../Canvas/canvas';
import {Rect} from '../Common/rect';

export class Bullet implements IGameObject {

  draw(canvas: Canvas): void {
  }

  getRect(): Rect {
    return undefined;
  }

  getX(): number {
    return 0;
  }

  getY(): number {
    return 0;
  }

  keyEvent(key: string): void {
  }

  update(): void {
  }
}
