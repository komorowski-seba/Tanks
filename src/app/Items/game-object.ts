export interface GameObject {
  update(): void;
  keyEvent(key: string): void;
  getX(): number;
  getY(): number;
}

