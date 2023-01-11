import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function HouseScene() {
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

    // Create a house geometry
    const houseGeometry = new THREE.BoxGeometry(2, 2, 2);
    const houseMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    scene.add(house);

    // Create a light
    const light = new THREE.PointLight(0xffffff);
    light.position.set(0, 10, 0);
    scene.add(light);

    // Create an ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add a shadow
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    house.castShadow = true;
    light.castShadow = true;

    // Function to toggle the light on/off
    function toggleLight() {
      if (light.intensity === 1) {
        light.intensity = 0;
      } else {
        light.intensity = 1;
      }
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

export default HouseScene;
