import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Cubes() {
  const containerRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create cube geometry
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

    // Create and add 6 cubes to the scene
    for (let i = 0; i < 6; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = i * 2;
      scene.add(cube);
    }

    // Render the scene
    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();

    // Clean up on unmount
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
}

export default Cubes;
