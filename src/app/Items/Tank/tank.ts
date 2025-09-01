
import { IGameObject } from '../i-game-object';
import { Canvas } from '../Canvas/canvas';

export class Tank implements IGameObject {
  private _x: number = 0;
  private _y: number = 0;
  private _image: number[][] = [
    [1, 2, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]
  private _currentState: (() => IterableIterator<boolean>) | null = null;
  private _currentStateIteration: IterableIterator<boolean> | null = null;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    this.setState(this.stateIdle);
  }

  draw(canvas: Canvas): void {
    for (let y = 0; y < this._image.length; y++) {
      for (let x = 0; x < this._image[y].length; x++) {
        canvas.setColorPoint(this._x + x, this._y + y, this._image[y][x]);
      }
    }
  }

  public getX(): number {
    return 0;
  }

  public getY(): number {
    return 0;
  }

  public update(): void {
    this._currentStateIteration?.next();
  }

  private *stateIdle(): IterableIterator<boolean> {
    console.log('set - stateIdle');
    do {
      console.log('stateIdle');
      yield true;
   } while (this._currentState == this.stateIdle);
  }

  private *stateGoLeft(): IterableIterator<boolean> {
    console.log('set - stateGoLeft');
    do {
      console.log('stateGoLeft');
      yield true;
    } while (this._currentState == this.stateGoLeft);
  }

  private *stateGoRight(): IterableIterator<boolean> {
    console.log('set - stateGoRight');
    do {
      console.log('stateGoRight');
      yield true;
    } while (this._currentState == this.stateGoRight);
  }

  private *stateGoUp(): IterableIterator<boolean> {
    console.log('set - stateGoUp');
    do {
      console.log('stateGoUp');
      yield true;
    } while (this._currentState == this.stateGoUp);
  }

  private *stateGoDown(): IterableIterator<boolean> {
    console.log('set - stateGoDown');
    do {
      console.log('stateGoDown');
      yield true;
    } while (this._currentState == this.stateGoDown);
  }

  public keyEvent(key: string): void {
    switch (key) {
      case 'w':
        this.setState(this.stateGoUp);
        // this._y -= 1;
        return;

      case 's':
        this.setState(this.stateGoDown);
        // this._y += 1;
        return;

      case 'a':
        this.setState(this.stateGoLeft);
        // this._x -= 1;
        return;

      case 'd':
        this.setState(this.stateGoRight);
        // this._x += 1;
        return;
    }

    this.setState(this.stateIdle);
  }

  private setState(newState: () => IterableIterator<boolean>): void {
    if (newState == this._currentState) {
      return;
    }

    this._currentState = newState;
    this._currentStateIteration = this._currentState();
  }

  private sendTransition(transition: string): void {
  }
}
