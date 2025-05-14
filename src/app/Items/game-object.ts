import { Body } from 'matter-js';

export interface GameObject {
  update(): void;
  getBody(): Body;
  keyEvent(key: string): void;
}

