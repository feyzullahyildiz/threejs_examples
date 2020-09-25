import * as THREE from 'three';
import { Vector3 } from 'three';

const renderer = new THREE.WebGLRenderer({ antialias: true })
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);


const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(70,
    window.innerWidth / window.innerHeight,
    .1, 10
);

const snowMaterial = new THREE.MeshNormalMaterial()

const sphereBottom = new THREE.SphereGeometry(2, 20, 20)
const meshBottom = new THREE.Mesh(sphereBottom, snowMaterial);
meshBottom.position.y = -1
meshBottom.position.z = -9

const sphereCenter = new THREE.SphereGeometry(1.5, 20, 20)
const meshCenter = new THREE.Mesh(sphereCenter, snowMaterial);
meshCenter.position.y = 1
meshCenter.position.z = -9

const sphereTop = new THREE.SphereGeometry(1, 20, 20)
const meshTop = new THREE.Mesh(sphereTop, snowMaterial);
meshTop.position.y = 3
meshTop.position.z = -9



scene.add(meshTop);
scene.add(meshCenter);
scene.add(meshBottom);
// scene.add(center);
// scene.add(top);

renderer.render(scene, cam);