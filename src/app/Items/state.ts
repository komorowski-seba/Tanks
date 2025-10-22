import {IGameService} from '../services/igame-service';

export class State {
  private _currentState: (() => IterableIterator<boolean>) | null = null;
  private _currentStateIteration: IterableIterator<boolean> | null = null;

  public get current(): (() => IterableIterator<boolean>) | null {
    return this._currentState;
  }

  constructor(state: () => IterableIterator<boolean>) {
    this.setState(state);
  }

  public setState(newState: () => IterableIterator<boolean>): void {
    if (newState == this._currentState) {
      return;
    }

    this._currentState = newState;
    this._currentStateIteration = this._currentState();
  }

  public update(): void {
    this._currentStateIteration?.next();
  }
}
