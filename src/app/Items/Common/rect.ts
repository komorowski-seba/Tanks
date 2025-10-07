import {Vector} from './vector';

export class Rect {
  x: number;
  y: number;
  width: number;
  height: number;

  public constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public move(offset: Vector): Rect {
    this.x += offset.x;
    this.y += offset.y;
    return this;
  }
}
