import { war } from "../war/war";
import RockerControl from "./component/RockerControl";
import SceneConfig from "../war/SceneConfig";


export default class SceneManage{
    /**场景 */
    private scenes:SceneConfig;
    constructor(){
        this.scenes = new SceneConfig();
        war.init(this.scenes);
        war.director.loadScene("GameUIView");
    }
}