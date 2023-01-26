import * as THREE from "three";

export default class Materials {
  constructor() {
     this.state = { animationOn: true };
    this.materials = [];
    this.colors = [0xf9f4e6, 0xe7c956, 0xae83d7, 0xa0e600];
    this.colors.forEach((color) => {
      this.createMaterial(color);
    });
    return this;
  }
  getRandomMaterial() {
    return this.materials[Math.floor(Math.random() * this.materials.length)];
  }
  createMaterial(color) {
    this.materials.push(
      new THREE.MeshStandardMaterial({
        color: color,
      })
    );
  }
}
