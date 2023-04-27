var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

// creo el color a utilizar
const color = new THREE.Color("rgb(47, 168, 126)");
//Parametrizacion Global

const geometry = new THREE.BufferGeometry();

function createPyramidVertices(baseSize, height) {
  const vertices = new Float32Array([
    // Base vertices
    -baseSize / 2, 0, -baseSize / 2,
    baseSize / 2, 0, -baseSize / 2,
   baseSize / 2, 0, baseSize / 2,
   -baseSize / 2, 0, baseSize / 2,
    // Apex vertex
    0, height, 0
  ]);

  return vertices;
}
geometry.setAttribute( 'position', new THREE.BufferAttribute( createPyramidVertices(10,20),3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const piramide = new THREE.Mesh( geometry, material );

scene.add(piramide);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
 requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();