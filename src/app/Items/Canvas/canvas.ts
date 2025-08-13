import {NgIterable} from '@angular/core';
import {Color} from './color';

export class Canvas {
  readonly colorRed: Color = { color: '#ff0000', number: 1 };
  readonly colorBlue: Color = { color: '#0000ff', number: 2 };
  readonly colorYellow: Color = { color: '#ff0000', number: 3 };
  readonly colorPurple: Color = { color: '#ffaa00', number: 4 };

  private _boxes: number[];
  private _size: number;

  get canvasPoints(): NgIterable<any> | null {
    return this._boxes;
  }

  public constructor(size: number) {
    this._size = size;
    this._boxes = Array.from({ length: size * size })
  }

  public getPointColor(point: number) : string {
    return '#7FFFD4'
  }
}
