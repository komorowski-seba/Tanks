export interface IGameObject {
  update(): void;
  keyEvent(key: string): void;
  getX(): number;
  getY(): number;
}

