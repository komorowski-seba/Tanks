import {IGameObject} from '../Items/i-game-object';
import {Vector} from '../Items/Common/vector';

export interface IGameService {
  checkCollision(gameObject: IGameObject, move: Vector): IGameObject[];
}
