import {Canvas} from './Canvas/canvas';

export interface IGameObject {
  update(): void;
  keyEvent(key: string): void;
  getX(): number;
  getY(): number;
  draw(canvas: Canvas): void;
}

