// cube test 

// ~~~~~~~~~ IMPORT ~~~~~~~~
import * as THREE from 'three';
import './style.css'

// ~~~~~~~~~ SETUP SCENE ~~~~~~~~~~
const scene = new THREE.Scene();

// ~~~~~~~~~ SETUP CAMERA ~~~~~~~~~~~
const camera = new THREE.PerspectiveCamera(100 , window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// ~~~~~~~~ SETUP RENDERER ~~~~~~~~~~
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

// ~~~~~~~~ ADD OBJECTS ~~~~~~~~
const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x2F4858, wireframe: true});
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

// ~~~~~~~~ Main Loop ~~~~~~~~
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();
