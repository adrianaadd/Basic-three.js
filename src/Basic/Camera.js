import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);//La camara captura todo lo que este delante de 10m hasta 1000m

export default camera