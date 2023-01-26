import * as THREE from "three";
import Scene from "./scene";
import Renderer from "./renderer";
import Camera from "./camera";
import Lights from "./lights";
import Events from "./events";
import Animator from "./animator";
import Thing from "../elements/Thing.js";
import Materials from "../elements/Materials.js";
import Geometries from "../elements/Geometries";

class Shapes {
  constructor() {
    this.animator = new Animator(this);
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.scene = new Scene(this);
    this.renderer = new Renderer(this);
    this.camera = new Camera(this);
    this.lights = new Lights(this);
    this.events = new Events(this);
  }
  init() {
    this.addObjects();
    document.body.appendChild(this.renderer.domElement);
    this.animator.animate();
  }
  addObjects() {
    this.materials = new Materials(this);
    this.geometries = new Geometries(this);

    this.things = [];
    //this is the amount of objects to create
    this.num = 2;
    this.width = 4;
    // ends here
    for (let x = 0; x <= this.num; x++) {
      for (let y = 0; y <= this.num; y++) {
        const posX = (x / this.num) * this.width - this.width / 2;
        const posY = (y / this.num) * this.width - this.width / 2;
        this.things.push(new Thing(this, posX, posY));
      }
    }
  }
}
window.sketch = new Shapes();
window.sketch.init();


export default Shapes
