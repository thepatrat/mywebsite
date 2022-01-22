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
camera.position.set(0,0,10);

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

//const gridHelper = new THREE.GridHelper(300,50);
//scene.add(gridHelper);

//const cameraHelper = new THREE.CameraHelper( camera );
//scene.add(cameraHelper);

const controls = new OrbitControls(camera, renderer.domElement);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~ ADD OBJECTS ~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Add icosherdron
const geometry = new THREE.IcosahedronGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x2F4858, wireframe: true});
const icos = new THREE.Mesh( geometry, material );

icos.position.set(0,0,0);
scene.add( icos );

// Add multiple objects in a function
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~ MOVE CAMERA ~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~ Main Loop ~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
function animate() {
	requestAnimationFrame( animate );

	icos.rotation.x += 0.01;
	icos.rotation.y += 0.01;

 // controls.update();

	renderer.render( scene, camera );
};

animate();
