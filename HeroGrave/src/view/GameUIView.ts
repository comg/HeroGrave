import { ui } from "../ui/layaMaxUI";
import RockerControl from "../script/component/RockerControl";

export default class GameUIView extends ui.view.GameUIUI{

    constructor(){
        super();
        this.InitUIControl();
    }



    /**初始化UI控制器 */
    InitUIControl(){
        this.rockerControl.addComponent(RockerControl);
    }
}