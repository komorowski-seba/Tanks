import { Injectable } from '@angular/core';
import { Engine, Render, Runner, Bodies, Body, Composite, Events, World } from 'matter-js';
import { GameObject } from '../Items/game-object';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private engine!: Engine;
  public world!: World;

  constructor() {}

  public createScene(sceneElement: any, screenWidth: number, screenHeight: number): void {
    this.engine = Engine.create();
    const render = Render.create({
      element: sceneElement,
      engine: this.engine,
      options: {
        width: screenWidth,
        height: screenHeight,
        wireframes: false,
        background: '#fafafa'
      }
    })

    Engine.run(this.engine);
    Render.run(render);
    Runner.run(Runner.create(), this.engine);

    this.world = this.engine.world;
  }

  public AddGameObject(gameObject: GameObject): void {
    World.add(this.world, gameObject.getBody());
  }
}
