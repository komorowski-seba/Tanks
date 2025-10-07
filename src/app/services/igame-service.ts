import {IGameObject} from '../Items/i-game-object';
import {Vector} from '../Items/Common/vector';

export interface IGameService {
  checkCollisionWithWall(gameObject: IGameObject, move: Vector): IGameObject | null;
}
