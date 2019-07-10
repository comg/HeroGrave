import { war } from "../../war/war";

/**摇杆控制器 */
export default class RockerControl extends war.UIObject{
    private rocker:Laya.Sprite;//摇杆
    private inDown:boolean = false;//是否按下
    constructor(){
        super();
    }

    onAwake(){
        super.onAwake();
        this.rocker = this.node.getChildByName("rocker") as Laya.Sprite;
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMove);
        Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onUp);
    }


    onMouseDown(e:Laya.Event){
        this.inDown = true;
        let p = this.node.globalToLocal(new Laya.Point(e.stageX,e.stageY));
        this.SetRocker(p);
    }

    onMove(e:Laya.Event){
        if(this.inDown){
            let p = this.node.globalToLocal(new Laya.Point(e.stageX,e.stageY));
            this.SetRocker(p);
        }
    }

    onUp(e:Laya.Event){
        this.inDown = false;
        this.SetRocker(new Laya.Point(0,0));
    }

    /**设置摇杆 */
    SetRocker(p:Laya.Point){
        let width = this.node.width;
        if(p.x > width){
            p.x = width;
        }
        if(p.x < -width){
            p.x = -width;
        }
        if(p.y > width){
            p.y = width;
        }
        if(p.y < -width){
            p.y = -width;
        }
        this.rocker.x = p.x;
        this.rocker.y = p.y;
    }


}