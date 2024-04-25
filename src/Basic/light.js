import * as THREE from 'three'; 
const light = new THREE.AmbientLight(0x404040); // soft white light

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
//Cambiamos la direccion de la light
directionalLight.position.set(-10, 10, 10);

//Añadimos a la luz direccion
light.add( directionalLight );


export default light