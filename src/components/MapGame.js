import React from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function map() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB);
  const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
  camera.position.z = -5; // -5
  camera.position.y = 55; // 55
  camera.rotateX( - Math.PI * 0.1 ); // * 0.1

  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  document.body.appendChild( renderer.domElement );

  const light = new THREE.DirectionalLight( 0xfcf6bd, 1.5 );
  light.position.set( -130, 130, 30 ); //default; light shining from top
  light.castShadow = true; // default false

  light.shadow.camera.left = -50;
  light.shadow.camera.right = 50;
  light.shadow.camera.top = 50;
  light.shadow.camera.bottom = -50;

  scene.add( light );

  light.shadow.mapSize.width = 512*3; // default
  light.shadow.mapSize.height = 512*3; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 4000; // default
  light.shadow.normalBias = -0.1;


  const loader = new GLTFLoader();

  // Load bike
  loader.load('models3D/VeloFinal.glb', function ( gltf ) {
    const bike = gltf.scene;
    bike.rotation.y = Math.PI / 2;
    bike.traverse(function (node) {
      if (node.isMesh)
        node.receiveShadow = true;
        node.castShadow = true;
    })
    bike.position.set(0, 47, -14);
    bike.rotation.z = Math.PI * 0.05;
    bike.scale.set(1.4, 1.4, 1.4)

    scene.add( bike );
  })

  // Load map
  loader.load('./models3D/planetMap.glb', function ( gltf ) {
    const map = gltf.scene;
    map.rotation.y = Math.PI / 2;
    map.traverse(function (node) {
      if (node.isMesh)
        node.receiveShadow = true
    })
    scene.add( map );
  })

  // Load trees
  loader.load('./models3D/planetTree.glb', function ( gltf ) {

    const tree = gltf.scene;

    tree.traverse(function (node) {
      if (node.isMesh)
      node.castShadow = true
    })

    scene.add( tree );
    tree.rotation.y = Math.PI / 2;

    function animate() {

    };

    renderer.render( scene, camera );
    animate();

  }, undefined, function ( error ) {
    console.log( 'An error happened' );
  });
}

function MapGame(params) {
  return (
    <div className="MapGame">
      { map() }
    </div>
  );
}

export default MapGame;
