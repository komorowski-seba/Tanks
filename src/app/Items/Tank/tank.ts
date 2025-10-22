
import { IGameObject } from '../i-game-object';
import { Canvas } from '../Canvas/canvas';
import {IGameService} from '../../services/igame-service';
import {Vector} from '../Common/vector';
import {Rect} from '../Common/rect';
import {DOWN_VECTOR, LEFT_VECTOR, RIGHT_VECTOR, UP_VECTOR} from '../Common/vectors';
import {State} from '../state';

export class Tank implements IGameObject {
  readonly imgUp: number = 0;
  readonly imgDown: number = 1;
  readonly imgLeft : number = 2;
  readonly imgRight: number = 3;

  private _x: number = 0;
  private _y: number = 0;
  private _imgNumber: number = this.imgRight;
  private _image: number[][][] = [
    // up
    [
      [1, 2, 1],
      [1, 2, 1],
      [1, 1, 1],
    ],
    // down
    [
      [1, 1, 1],
      [1, 2, 1],
      [1, 2, 1],
    ],
    // left
    [
      [1, 1, 1],
      [2, 2, 1],
      [1, 1, 1],
    ],
    // right
    [
      [1, 1, 1],
      [1, 2, 2],
      [1, 1, 1],
    ],
  ]
  private _gameService: IGameService;
  private _state: State = new State(this.stateIdle);

  constructor(x: number, y: number, gameService: IGameService) {
    this._x = x;
    this._y = y;
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

  public getRect(): Rect {
    return new Rect(this._x, this._y, 3, 3);
  }

  public keyEvent(key: string): void {
    switch (key) {
      case 'w':
        this._state.setState(this.stateGoUp);
        return;

      case 's':
        this._state.setState(this.stateGoDown);
        return;

      case 'a':
        this._state.setState(this.stateGoLeft);
        return;

      case 'd':
        this._state.setState(this.stateGoRight);
        return;
    }

    this._state.setState(this.stateIdle);
  }

  private checkCollisionWithWall(move: Vector): boolean {
    let collisions = this._gameService.checkCollision(this, move);
    return collisions.length > 0;
  }

  // states

  private *stateIdle(): IterableIterator<boolean> {
    do {
      yield true;
   } while (this._state.current == this.stateIdle);
  }

  private *stateGoLeft(): IterableIterator<boolean> {
    this._imgNumber = this.imgLeft;

    do {
      if (!this.checkCollisionWithWall(LEFT_VECTOR)) {
        this._x -= 1;
      }

      yield true;
    } while (this._state.current == this.stateGoLeft);
  }

  private *stateGoRight(): IterableIterator<boolean> {
    this._imgNumber = this.imgRight;

    do {
      if (!this.checkCollisionWithWall(RIGHT_VECTOR)) {
        this._x += 1;
      }

      yield true;
    } while (this._state.current == this.stateGoRight);
  }

  private *stateGoUp(): IterableIterator<boolean> {
    this._imgNumber = this.imgUp;

    do {
      if (!this.checkCollisionWithWall(UP_VECTOR)) {
        this._y -= 1;
      }

      yield true;
    } while (this._state.current == this.stateGoUp);
  }

  private *stateGoDown(): IterableIterator<boolean> {
    this._imgNumber = this.imgDown;

    do {
      if (!this.checkCollisionWithWall(DOWN_VECTOR)) {
        this._y += 1;
      }

      yield true;
    } while (this._state.current == this.stateGoDown);
  }


  private sendTransition(transition: string): void {
  }
}
