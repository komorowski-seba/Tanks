import {Canvas} from './Canvas/canvas';
import {Rect} from './Common/rect';

export interface IGameObject {
  update(): void;
  keyEvent(key: string): void;
  getX(): number;
  getY(): number;
  draw(canvas: Canvas): void;
  getRect(): Rect;
}

