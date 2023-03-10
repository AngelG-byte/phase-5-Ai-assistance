import * as THREE from "three";

class Scene {
  constructor(sketch, settings) {
    this.sketch = sketch;
    this.settings = { ...settings };

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x48cae4);

    return this.scene;
  }
}
export default Scene;
