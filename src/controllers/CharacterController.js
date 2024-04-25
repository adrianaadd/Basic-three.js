import loopMachine from "../Basic/LoopMachie";

class CharacterController{
    constructor() {
        this.controller = {}
        this.character = null;
        this.state= {}
    }
    addController(controller) {
        this.controller[controller.constructor.name]=controller
    }
    removeController(controller) {
        delete this.controller[controller.constructor.name]
    }
    addCharacter(character) {
        this.character = character
    } start() {
        Object.keys(this.controller).forEach(key => {
            this.controller[key].init(this)
        })
        loopMachine.addCallback(this.tick)
    }
    tick = () => {
        Object.keys(this.controller).forEach(key => { 
            this.controller[key].tick()
        })
    }

}