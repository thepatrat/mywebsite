// MY WEBSITE  

// ~~~~~~~~~ IMPORT ~~~~~~~~
import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~ SETUP  ~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
const scene = new THREE.Scene();

// ~~~~~~~~~ SETUP CAMERA ~~~~~~~~~~~
const camera = new THREE.PerspectiveCamera(100 , window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,5);

// ~~~~~~~~~ SETUP LIGHTSOURCES ~~~~~~~~~
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1,2,3);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(1,2,3);
scene.add(ambientLight);

// ~~~~~~~~~ SETUP RENDERER ~~~~~~~~~~
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

// ~~~~~~~~~ HELPERS ~~~~~~~~~
//const lightHelper = new THREE.PointLightHelper(pointLight);
//scene.add(lightHelper);

const gridHelper = new THREE.GridHelper(300,50);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~ ADD OBJECTS ~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const geometry = new THREE.IcosahedronGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x2F4858, wireframe: true});
const cube = new THREE.Mesh( geometry, material );

cube.position.y = 3.5;
cube.position.x = 1;

scene.add( cube );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~ Main Loop ~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

  controls.update();

	renderer.render( scene, camera );
};

animate();
