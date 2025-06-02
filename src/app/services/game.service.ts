import { Injectable } from '@angular/core';
import { Engine, Render, Runner, Bodies, Composite, Events, World } from 'matter-js';
import { GameObject } from '../Items/game-object';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _engine!: Engine;
  private _world!: World;
  private _items!: GameObject[];

  public get world(): World {
    return this._world;
  }

  constructor() {}

  public createScene(sceneElement: any, screenWidth: number, screenHeight: number): void {
    this._engine = Engine.create();
    const render = Render.create({
      element: sceneElement,
      engine: this._engine,
      options: {
        width: screenWidth,
        height: screenHeight,
        wireframes: false,
        background: '#fafafa'
      }
    })

    Engine.run(this._engine);
    Render.run(render);
    Runner.run(Runner.create(), this._engine);

    this._world = this._engine.world;
  }

  public AddGameObject(gameObject: GameObject): void {
    World.add(this._world, gameObject.getBody());
    // this._items.push(gameObject);
  }
}
