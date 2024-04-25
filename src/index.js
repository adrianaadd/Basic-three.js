import scene from "./Basic/Scene.js";
import camera from "./Basic/Camera.js";
import renderer from "./Basic/Renderer.js";
import cube from "./Shapes/Cube.js";
import light from "./Basic/light.js";
import resize from "./Basic/Resize.js";
import plane from "./Basic/Plane.js";
import loopMachine from "./Basic/LoopMachie.js";
import keyListener from "./Basic/KeyListener.js";
import keyCode from "./Basic/KeyCode.js";

//Añadimos un cubo a la escena
scene.add(cube);
//Añadimos luz ambiental
scene.add(light);
scene.add(plane);
//Inicialmente la camara esta dentro de la caja con esto la alejamos
camera.position.set(4,4,2)
camera.lookAt(cube.position)

loopMachine.addCallback(() => {
//movemos el cubo en cada fotogramam para la ilusion de movimiento
    if(keyListener.isPressed(keyCode.ENTER)) cube.rotation.y += 0.01
 //Renderizamos una foto de la scena con la camera
renderer.render(scene,camera);   
})


resize.start(renderer)
loopMachine.start()
keyListener.start()

