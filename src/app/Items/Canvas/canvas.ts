import {NgIterable} from '@angular/core';

export class Canvas {
  private _boxes: number[];
  private _size: number;

  get canvas(): NgIterable<any> | null {
    return this._boxes;
  }

  public constructor(size: number) {
    this._size = size;
    this._boxes = Array.from({ length: size * size })
  }
}
