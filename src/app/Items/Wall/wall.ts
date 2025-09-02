import { Canvas } from "../Canvas/canvas";
import {IGameObject} from '../i-game-object';

export class Wall implements IGameObject {
    update(): void {
        throw new Error("Method not implemented.");
    }
    keyEvent(key: string): void {
        throw new Error("Method not implemented.");
    }
    getX(): number {
        throw new Error("Method not implemented.");
    }
    getY(): number {
        throw new Error("Method not implemented.");
    }
    draw(canvas: Canvas): void {
        throw new Error("Method not implemented.");
    }
}
