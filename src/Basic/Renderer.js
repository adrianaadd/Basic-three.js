import * as THREE from 'three';
//antialias reduce dientes de sierra
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

export default renderer