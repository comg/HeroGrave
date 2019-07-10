
export default interface IView {
    onLoad():void;
}
export default abstract class View implements IView{

    public abstract node:Laya.Scene;
    
    constructor(){
        this.onLoad();
    }

    load(ui:{new():Laya.Scene}):Laya.Scene{
        let node:any = new ui();
        node.createChildren();
        this.node = node;
        return this.node;
    }


    
}
