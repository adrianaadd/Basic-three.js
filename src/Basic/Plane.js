import * as THREE from 'three';
const geometry = new THREE.PlaneGeometry(10,10);
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh(geometry, material);

//El plano originalmente vertical, con esto lo acostamos
plane.rotation.x += Math.PI *.5

export default plane;