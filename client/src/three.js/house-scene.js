import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function HouseScene({luminence , hue}) {
  // const containerRef = useRef();
  
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  console.log(hue)
  // Create a scene
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x48cae4);

  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a renderer
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // containerRef.current.appendChild(renderer.domElement);

  // Create a house geometry
  const houseGeometry = new THREE.BoxGeometry(2, 2, 2);
  const houseMaterial = new THREE.MeshLambertMaterial();
  houseMaterial.color = new THREE.Color( hue )
  const house = new THREE.Mesh(houseGeometry, houseMaterial);
  scene.add(house);

  console.log(luminence);
    // Create a light
    const light = new THREE.PointLight(0xffffff);
    light.position.set(0, 10, 0);
    scene.add(light);

    useEffect(()=>{
      toggleLight()
    },[luminence])

    // Add orbit controls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.target = house.position;
    orbitControls.update();

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
       luminence ? light.intensity = 1 : light.intensity = 0;
    }
    // Render the scene
    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();
return(
  <>
  {/* {toggleLight()} */}
  </>
)
    // Clean up on unmount
    // return () => {
    //   containerRef.current?.removeChild(renderer.domElement);

    // };



}

export default HouseScene;
