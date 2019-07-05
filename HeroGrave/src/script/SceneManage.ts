import { war } from "../war/war";
import GameUIView from "../view/GameUIView";
import RockerControl from "./component/RockerControl";

export default class SceneManage{
    constructor(){
        war.init();
        war.director.loadScene2D(new GameUIView());
    }
}