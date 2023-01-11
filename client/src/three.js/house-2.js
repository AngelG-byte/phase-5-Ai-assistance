import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function HouseScene2() {
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
    const houseGeometry = new THREE.BoxGeometry(1, 1, 1);
    const houseMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.castShadow = true;


    // Create a house geometry
    const Geometry = new THREE.BoxGeometry(1, 1, 1);
    const Material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const box1 = new THREE.Mesh(houseGeometry, houseMaterial);
    house.castShadow = true;

    // Create a light
    const light = new THREE.PointLight(0xffffff);
    light.position.set(0, 10, 0);
    light.castShadow = true;
    light.intensity = 1;

    // Create an ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

    // Create a group for the house and light
    const houseGroup = new THREE.Group();
    houseGroup.add(house, box1);
    houseGroup.add(light);
    scene.add(houseGroup);
    scene.add(ambientLight);
    // Add a shadow
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Add orbit controls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.target = houseGroup.position;
    orbitControls.update();

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
      orbitControls.update();
    }
    render();

    // Clean up on unmount
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(()=>{

  },[])

  return <div ref={containerRef} />;
}

export default HouseScene2;
