import { Injectable } from '@angular/core';
import { Engine, Render, Runner, Bodies, Body, Composite, Events } from 'matter-js';

@Injectable({
  providedIn: 'root'
})
export class PhysicsService {
  private engine!: Engine;
  constructor() { }

  public createScene(sceneElement: any): void {
    this.engine = Engine.create();
    const render = Render.create({
      element: sceneElement,
      engine: this.engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#fafafa'
      }
    })

    Engine.run(this.engine);
    Render.run(render);
    Runner.run(Runner.create(), this.engine);
  }
}
