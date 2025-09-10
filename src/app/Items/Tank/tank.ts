
import { IGameObject } from '../i-game-object';
import { Canvas } from '../Canvas/canvas';
import {IGameService} from '../../services/igame-service';

export class Tank implements IGameObject {
  readonly imgUp: number = 0;
  readonly imgDown: number = 1;
  readonly imgLeft : number = 2;
  readonly imgRight: number = 3;

  private _x: number = 0;
  private _y: number = 0;
  private _imgNumber: number = this.imgRight;
  private _image: number[][][] = [
    [
      [1, 2, 1],
      [1, 2, 1],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 2, 1],
      [1, 2, 1],
    ],
    [
      [1, 1, 1],
      [2, 2, 1],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 2, 2],
      [1, 1, 1],
    ],
  ]
  private _currentState: (() => IterableIterator<boolean>) | null = null;
  private _currentStateIteration: IterableIterator<boolean> | null = null;
  private _gameService: IGameService;

  constructor(x: number, y: number, gameService: IGameService) {
    this._x = x;
    this._y = y;
    this.setState(this.stateIdle);
    this._gameService = gameService;
  }

  draw(canvas: Canvas): void {
    for (let y = 0; y < this._image[this._imgNumber].length; y++) {
      for (let x = 0; x < this._image[this._imgNumber][y].length; x++) {
        canvas.setColorPoint(this._x + x, this._y + y, this._image[this._imgNumber][y][x]);
      }
    }
  }

  public getX(): number {
    return this._x;
  }

  public getY(): number {
    return this._y;
  }

  public update(): void {
    this._currentStateIteration?.next();
  }

  public keyEvent(key: string): void {
    switch (key) {
      case 'w':
        this.setState(this.stateGoUp);
        return;

      case 's':
        this.setState(this.stateGoDown);
        return;

      case 'a':
        this.setState(this.stateGoLeft);
        return;

      case 'd':
        this.setState(this.stateGoRight);
        return;
    }

    this.setState(this.stateIdle);
  }

  private checkCollisionWithWall(): boolean {
    let wall: IGameObject | null = this._gameService.checkCollisionWithWall(this);

    return false;
  }

  private *stateIdle(): IterableIterator<boolean> {
    do {
      yield true;
   } while (this._currentState == this.stateIdle);
  }

  private *stateGoLeft(): IterableIterator<boolean> {
    this._imgNumber = this.imgLeft;

    do {
      if (!this.checkCollisionWithWall()) {
        this._x -= 1;
      }

      yield true;
    } while (this._currentState == this.stateGoLeft);
  }

  private *stateGoRight(): IterableIterator<boolean> {
    this._imgNumber = this.imgRight;

    do {
      if (!this.checkCollisionWithWall()) {
        this._x += 1;
      }

      yield true;
    } while (this._currentState == this.stateGoRight);
  }

  private *stateGoUp(): IterableIterator<boolean> {
    this._imgNumber = this.imgUp;

    do {
      if (!this.checkCollisionWithWall()) {
        this._y -= 1;
      }

      yield true;
    } while (this._currentState == this.stateGoUp);
  }

  private *stateGoDown(): IterableIterator<boolean> {
    this._imgNumber = this.imgDown;

    do {
      if (!this.checkCollisionWithWall()) {
        this._y += 1;
      }

      yield true;
    } while (this._currentState == this.stateGoDown);
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
