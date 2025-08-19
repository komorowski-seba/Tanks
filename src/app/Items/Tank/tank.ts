
import { IGameObject } from '../i-game-object';
import {DOWN_VECTOR, LEFT_VECTOR, RIGHT_VECTOR, UP_VECTOR} from '../Common/vectors';
import { Canvas } from '../Canvas/canvas';

export class Tank implements IGameObject {
  private x: number = 0;
  private y: number = 0;
  private image: number[] = [
    1, 2, 1,
    1, 1, 1,
  ]

  // private static readonly states = {
  //   Stop: 'Stop',
  //   GoStraight: 'GoStraight',
  //   Turn: 'Turn',
  // };

  // private statesTransitions = {
  //   OnTurn: {
  //     [Tank.states.Stop]: Tank.states.Turn,
  //   },
  // } as const;

  // private _currentState: string = Tank.states.Stop;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(canvas: Canvas): void {
    for (const img of this.image) {
      canvas.setColorPoint()
    }
  }

  public getX(): number {
    return 0;
  }

  public getY(): number {
    return 0;
  }

  public update(): void {
    // switch (this._currentState) {
    //   case Tank.states.Stop:
    //     this.stateStop();
    //     break;
    //
    //   case Tank.states.Turn:
    //     this.stateTurn();
    //     break;
    //
    //   case Tank.states.GoStraight:
    //     this.stateGoStraight();
    //     break;
    // }
  }

  public keyEvent(key: string): void {
    switch (key) {
      case 'w':
        // this._actor.send({ type: 'Turn' });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, UP_VECTOR));
        break;

      case 's':
        // this._actor.send({ type: 'Turn' });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, DOWN_VECTOR));
        break;

      case 'a':
        // this._actor.send({ type: 'Turn' });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, LEFT_VECTOR));
        break;

      case 'd':
        // this._actor.send({ type: 'Turn' });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, RIGHT_VECTOR));
        break;
    }
  }

  private sendTransition(transition: string): void {

  }

  private stateTurn(): void {
    console.log('stateTurnLeft');
  }

  private stateGoStraight(): void {
    console.log('stateGoStraight');
  }

  private stateStop(): void {
    console.log('stateStop');
  }
}
