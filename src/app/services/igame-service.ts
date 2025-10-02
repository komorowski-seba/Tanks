import {IGameObject} from '../Items/i-game-object';
import {IVector} from '../Items/Common/ivector';

export interface IGameService {
  checkCollisionWithWall(gameObject: IGameObject, move: IVector): IGameObject | null;
}
