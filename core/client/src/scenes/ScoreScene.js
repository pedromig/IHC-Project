
import { CTTS } from "../constants";


export default class ScoreScene extends Phaser.Scene {
    constructor () {
        super("ScoreScene");
    }
    
    preload() {
        console.log("Hello ScoreScene")
        
    }
    
    create() {
        this.add.text(CTTS.CANVAS.WIDTH/2, CTTS.CANVAS.HEIGHT/2, "OLA")
    }

}