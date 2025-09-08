import {NgIterable} from '@angular/core';
import {Color} from './color';

export class Canvas {
  public static readonly colorRed: Color = { color: '#ff0000', number: 1 };
  public static readonly colorBlue: Color = { color: '#0000ff', number: 2 };
  public static readonly colorYellow: Color = { color: '#ff0000', number: 3 };
  public static readonly colorPurple: Color = { color: '#ffaa00', number: 4 };
  public static readonly colorClean: Color = { color: '#777777', number: 0 };

  private _boxes: number[];
  private _size: number;

  get canvasPoints(): NgIterable<any> | null {
    return this._boxes;
  }

  public constructor(size: number) {
    this._size = size;
    this._boxes = Array.from({ length: size * size })
  }

  public setColorPoint(x: number, y: number, color: number): void {
    this._boxes[this.getIndex(x, y)] = color;
  }

  public getColorPoint(x: number, y: number): number {
    return this._boxes[this.getIndex(x, y)];
  }

  public clean(): void {
    for (let i = 0;  i < this._boxes.length; ++i) {
      this._boxes[i] = Canvas.colorClean.number;
    }
  }

  public getPointColor(color: number) : string {
    switch (color) {
      case Canvas.colorRed.number:
        return Canvas.colorRed.color;

      case Canvas.colorBlue.number:
        return Canvas.colorBlue.color;

      case Canvas.colorYellow.number:
        return Canvas.colorYellow.color;

      case Canvas.colorPurple.number:
        return Canvas.colorPurple.color;
    }
    return Canvas.colorClean.color;
  }

  private getIndex(x: number, y: number): number {
    const wrappedX: number = ((x % this._size) + this._size) % this._size;
    const wrappedY: number = ((y % this._size) + this._size) % this._size;

    return wrappedY * this._size + wrappedX;
  }
}
