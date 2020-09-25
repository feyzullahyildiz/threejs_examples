import {
    PerspectiveCamera,
    BoxGeometry,
    MeshNormalMaterial,
    MeshBasicMaterial,
    Scene,
    Mesh,
    WebGLRenderer,
    Triangle,
    Vector3,
    Geometry,
    Color,
    Face3,
    VertexColors,
    DoubleSide
} from 'three';
const renderer = new WebGLRenderer({ antialias: true });

document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new Scene();
const cam = new PerspectiveCamera(70,
    window.innerWidth / window.innerHeight,
    .1, 10
);
cam.position.z = 2

let oldMesh = null;
// drawTriangle(1, 0, 0)
drawBox()
let index = 0;
setInterval(() => {
    const rad = getRadyan(index)
    drawTriangle(Math.cos(rad), Math.sin(rad), 0)
    index += 1;
    if (index > 360) {
        index = 0;
    }
}, 10)
function drawTriangle(x, y, z) {
    if (oldMesh) {
        scene.remove(oldMesh);
        renderer.render(scene, cam);
    }
    const geom = new Geometry()
    geom.vertices.push(new Vector3(x, y, z));
    geom.vertices.push(new Vector3(0, -1, 0));
    geom.vertices.push(new Vector3(0, 0, 1));
    geom.faces.push(new Face3(0, 1, 2))


    const c1 = new Color(0xff0000)
    const c2 = new Color(0x00ff00)
    const c3 = new Color(0x0000ff)
    geom.faces[0].vertexColors = [c1, c2, c3]
    // const material = new MeshNormalMaterial();
    const material = new MeshBasicMaterial({ vertexColors: VertexColors });
    const mesh = new Mesh(geom, material);
    oldMesh = mesh;
    scene.add(mesh);

    renderer.render(scene, cam);
}
function drawBox() {
    const geom = new BoxGeometry(0.2, 0.2, 0.2);
    const material = new MeshNormalMaterial();
    const mesh = new Mesh(geom, material)
    scene.add(mesh);
    renderer.render(scene, cam);
}

window.scene = scene;
window.renderer = renderer;
window.cam = cam;



const camPositionChange = (unit) => (e) => {
    // console.log(unit, e.target.value);
    cam.position[unit] = e.target.value;
    renderer.render(scene, cam);
}
const camRotationChange = (unit) => (e) => {
    // console.log(unit, e.target.value);
    cam.rotation[unit] = getRadyan(e.target.value);
    
    document.getElementById('value-input-range-r' + unit).innerHTML = e.target.value;
    renderer.render(scene, cam);
}
document.getElementById('input-range-x').addEventListener('input', camPositionChange('x'))
document.getElementById('input-range-y').addEventListener('input', camPositionChange('y'))
document.getElementById('input-range-z').addEventListener('input', camPositionChange('z'))


document.getElementById('input-range-rx').addEventListener('input', camRotationChange('x'))
document.getElementById('input-range-ry').addEventListener('input', camRotationChange('y'))
document.getElementById('input-range-rz').addEventListener('input', camRotationChange('z'))

function getRadyan(angle) {
    return angle * Math.PI / 180;
}