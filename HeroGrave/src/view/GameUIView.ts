import { ui } from "../ui/layaMaxUI";
import RockerControl from "../script/component/RockerControl";
import { war } from "../war/war";

export default class GameUIView extends war.View{
    public node:ui.view.GameUIUI;
    
    constructor(){
        super();
    }
    
    onLoad(){
        
    }




    /**初始化UI控制器 */
    InitUIControl(){
        this.node.rockerControl.addComponent(RockerControl);
    }
}