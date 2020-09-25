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
let index = 0;
// setInterval(() => {
//     const rad = getRadyan(index)
//     drawTriangle(Math.cos(rad), Math.sin(rad), 0)
//     index += 1;
//     if (index > 360) {
//         index = 0;
//     }
// }, 62)

drawTriangle(1, 0, 0)

function drawTriangle(x, y, z) {
    if (oldMesh) {
        scene.remove(oldMesh);
        renderer.render(scene, cam);
    }
    const geom = new Geometry()
    geom.vertices.push(new Vector3(x, y, z));
    geom.vertices.push(new Vector3(0, 1, 0));
    geom.vertices.push(new Vector3(-1, 0, 0));
    geom.faces.push(new Face3(0, 1, 2))


    const c1 = new Color(0xff0000)
    const c2 = new Color(0x00ff00)
    const c3 = new Color(0x0000ff)
    console.log('c3.getHSL()', c3.getHSL())
    // c3.setHSL(.11, .93, .55)
    // c3.setHSL(.5, .5, .5)
    // c3.setHSL(1, 1, .5)
    geom.faces[0].vertexColors = [c1, c2, c3]
    // const material = new MeshNormalMaterial();
    const material = new MeshBasicMaterial({ vertexColors: VertexColors, side: DoubleSide });
    const mesh = new Mesh(geom, material);
    oldMesh = mesh;
    scene.add(mesh);

    renderer.render(scene, cam);
    window.mesh = mesh;
    window.geom = geom;
    window.scene = scene;
    window.renderer = renderer;
    window.cam = cam;
}

function getRadyan(angle) {
    return angle * Math.PI / 180;
}