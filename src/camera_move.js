import * as THREE from 'three';
console.log('THREE', THREE);

// var camera, scene, renderer;
// var geometry, material, mesh;

// init();
// // animate();

// function init() {

//     camera = new THREE.PerspectiveCamera(70,
//         window.innerWidth / window.innerHeight,
//         0.01, 10);
//     camera.position.z = 1;

//     scene = new THREE.Scene();

//     geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
//     material = new THREE.MeshNormalMaterial();

//     mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     renderer.render(scene, camera);

//     window.camera = camera;
//     window.scene = scene;
//     window.mesh = mesh;
//     window.renderer = renderer;


// }
// window.addEventListener('keydown', (e) => {
//     console.log('isForward', e.ctrlKey);
//     const isForward = e.ctrlKey ? 1 : -1;
//     const newWay = 0.1 * isForward;
//     if (e.key === 'z') {
//         camera.position.z = camera.position.z + newWay;
//     } else if (e.key === 'y') {
//         camera.position.y = camera.position.y + newWay;
//     } else if (e.key === 'x') {
//         camera.position.x = camera.position.x + newWay;
//     } else {
//         return
//     }
//     renderer.render(scene, camera);
// })
// function animate() {

//     requestAnimationFrame(animate);

//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.02;

//     renderer.render(scene, camera);

// }