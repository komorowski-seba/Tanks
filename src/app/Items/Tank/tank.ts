
import Matter, { Engine, Render, Runner, Bodies, Body, Composite, Events, World } from 'matter-js';
import { GameObject } from '../game-object';
import { createMachine, createActor, Actor } from 'xstate';
import {DOWN_VECTOR, LEFT_VECTOR, RIGHT_VECTOR, UP_VECTOR} from '../Common/vectors';

export class Tank implements GameObject {
  private readonly _body!: Body;
  private _actor!: Actor<any>;

  private static readonly directionUp: string = 'up';
  private static readonly directionDown: string = 'down';
  private static readonly directionLeft: string = 'left';
  private static readonly directionRight: string = 'right';

  constructor(x: number, y: number, width: number, height: number) {

    // Gracz
    this._body = Bodies.rectangle(x, y, width, height, {
      label: 'tank',
      isStatic: true,
      render: {
        fillStyle: 'blue'
        // sprite: {
          // texture: 'assets/tank.png',
          // xScale: 1,
          // yScale: 1
        // }
      },
    });

    this.createStates();
    // this.body = Bodies.rectangle(x, y, width, height, { render: { fillStyle: 'blue' } });

    // document.addEventListener('click', (event) => {
    //   const box = Bodies.rectangle(event.clientX, event.clientY, 40, 40, {
    //     render: { fillStyle: 'blue' },
    //   });
    //
    //   World.add(world, box);
    // });


    // // "Nagroda" — obiekt do kolizji
    // this.prize = Bodies.rectangle(600, 400, 80, 80, {
    //   label: 'prize',
    //   isStatic: true,
    //   render: {
    //     fillStyle: 'gold' // prosty złoty kolor
    //   }
    // });

  }

  public update(): void {
    const state = this._actor.getSnapshot();
    switch (state.value) {
      case 'Stop':
        this.stateStop();
        // Actor.send({ type: 'NEXT' });
        break;

      case 'Turn':
        this.stateTurnLeft();
        // Actor.send({ type: 'SUCCESS' });
        break;

      case 'GoStraight':
        this.stateGoStraight();
        break;
    }
  }

  public getBody(): Matter.Body {
    return this._body;
  }

  public keyEvent(key: string): void {
    switch (key) {
      case 'w':
        this._actor.send({ type: 'Turn', direction: Tank.directionUp });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, UP_VECTOR));
        break;

      case 's':
        this._actor.send({ type: 'Turn', direction: Tank.directionDown });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, DOWN_VECTOR));
        break;

      case 'a':
        this._actor.send({ type: 'Turn', direction: Tank.directionLeft });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, LEFT_VECTOR));
        break;

      case 'd':
        this._actor.send({ type: 'Turn', direction: Tank.directionRight });
        // Matter.Body.setPosition(this._body, Matter.Vector.add(this._body.position, RIGHT_VECTOR));
        break;
    }
  }

  private createStates(): void {
    const lightMachine = createMachine({
      id: 'tank',
      initial: 'Stop',
      context: {
        direction: ''
      },
      states: {
        Stop: {
          on: {
            msg_to_left: 'Turn',
            msg_to_straight: 'GoStraight'
          }
        },
        GoStraight: {
          on: {
            msg_to_stop: 'Stop'
          }
        },
        Turn: {
          on: {
            msg_to_straight: 'GoStraight'
          }
        }
      }
    });

    this._actor = createActor(lightMachine);
    this._actor.start();
  }

  private stateTurn(): void {
    console.log('stateTurnLeft');
  }

  private stateGoStraight(): void {
    console.log('stateGoStraight');
  }

  private stateStop(): void {
    console.log('stateStop');
  }
}


/*


-------------------------------------------------------------------------------------------------------------

import { createMachine, createActor } from 'xstate';

const machine = createMachine({
  id: 'example',
  initial: 'idle',
  states: {
    idle: { on: { NEXT: 'loading' } },
    loading: { on: { SUCCESS: 'success', FAIL: 'error' } },
    success: {},
    error: {},
  },
});

const actor = createActor(machine).start();


-------------------------------------------------------------------------------------------------------------



function addCircle(x, y) {
    const circle = Bodies.circle(x, y, 20, {
        render: { fillStyle: 'red' },
    });
    World.add(world, circle);
}

 */

/*

src/
  app/
    physics/
      physics.component.ts
  assets/
    box-texture.jpg




import { Engine, Render, Runner, Bodies, Body, Composite, Events } from 'matter-js';

@Component({
  selector: 'app-physics',
  template: `<div #sceneContainer></div>`,
  styles: [`div { width: 800px; height: 600px; border: 1px solid #ccc;}`]
})
export class PhysicsComponent implements OnInit {
  @ViewChild('sceneContainer', { static: true }) sceneContainer!: ElementRef<HTMLDivElement>;

  private engine!: Engine;
  private player!: Body;
  private prize!: Body; // nowy obiekt - nagroda

  onInit() {


    const ground = Bodies.rectangle(400, 590, 810, 60, { isStatic: true });

    Composite.add(this.engine.world, [this.player, this.prize, ground]);



    this.setupCollisionDetection();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const forceMagnitude = 0.02;

    switch (event.key) {
      case 'ArrowUp':
        Body.applyForce(this.player, this.player.position, { x: 0, y: -forceMagnitude });
        break;
      case 'ArrowDown':
        Body.applyForce(this.player, this.player.position, { x: 0, y: forceMagnitude });
        break;
      case 'ArrowLeft':
        Body.applyForce(this.player, this.player.position, { x: -forceMagnitude, y: 0 });
        break;
      case 'ArrowRight':
        Body.applyForce(this.player, this.player.position, { x: forceMagnitude, y: 0 });
        break;
    }
  }

  // Funkcja do wykrywania kolizji
  private setupCollisionDetection() {
    Events.on(this.engine, 'collisionStart', (event) => {
      event.pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;

        if ((bodyA.label === 'player' && bodyB.label === 'prize') ||
            (bodyA.label === 'prize' && bodyB.label === 'player')) {
          console.log('🎯 Kolizja z nagrodą!');

          // Opcjonalnie: usuń nagrodę z gry
          Composite.remove(this.engine.world, this.prize);

          // Albo zmień wygląd gracza np. na inny kolor/obraz
          this.player.render.fillStyle = 'green';
        }
      });
    });
  }
}

 */
