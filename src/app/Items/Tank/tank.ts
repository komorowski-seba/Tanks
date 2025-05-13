import Matter, { Engine, Render, Runner, Bodies, Body, Composite, Events, World } from 'matter-js';
import { GameObject } from '../game-object';

export class Tank implements GameObject {
  private body!: Body
  constructor(x: number, y: number, width: number, height: number) {

    // Gracz
    // this.body = Bodies.rectangle(x, y, width, height, {
    //   label: 'tank',
    //   isStatic: true,
    //   render: {
    //     sprite: {
    //       texture: 'assets/box-texture.jpg',
    //       xScale: 1,
    //       yScale: 1
    //     }
    //   },
    // });

    this.body = Bodies.rectangle(x, y, width, height, { render: { fillStyle: 'blue' } });

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

  public update() {

  }

  public getBody(): Matter.Body {
    return this.body;
  }
}


/*



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
