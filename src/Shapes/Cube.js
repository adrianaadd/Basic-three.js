import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//Ponemos unn cubo que refleje luz no que el la emita
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry, material);
cube.name = 'cube';

export default cube