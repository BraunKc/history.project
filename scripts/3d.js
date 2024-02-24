//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

let object;

const loader = new GLTFLoader();


loader.load( 'models/coin/scene.gltf', function (gltf) {
    object = gltf.scene;
    scene.add(object);
});

document.getElementById("container3D").appendChild(renderer.domElement);

camera.position.z = 5;

const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
directionalLight.position.set(5, 5, 5).normalize();
scene.add( directionalLight );

function animate() {
	requestAnimationFrame( animate );
    if (object) {
        object.rotation.y += 0.005;

        object.position.x = -5;
        object.position.y = -1 + Math.sin(Date.now() * 0.001) * 0.2;

        object.scale.set(10, 10, 10);
    }

	renderer.render( scene, camera );

// Функция дебаунсинга для ограничения частоты выполнения функции
function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

// Слушатель события resize с дебаунсингом
window.addEventListener("resize", debounce(function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    animate();
}, 250)); // Можно настроить задержку по необходимости
}
animate();


