import {IGameObject} from '../Items/i-game-object';

export interface IGameService {
  checkCollisionWithWall(gameObject: IGameObject): IGameObject | null;
}
