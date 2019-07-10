
export default class UIObject extends Laya.Script{
    public node:Laya.Sprite;
    constructor(){
        super();
    }

    /**
     * 覆写3D对象组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    public onAwake():void{
        //绑定对象
        this.node = this.owner as Laya.Sprite;
    }
    /*覆写组件所属3D对象实例化完成后，第一次更新时的执行方法*/
    public onStart():void{
        
    }

    
    /**
     * 覆写组件更新方法(相当于循环)
     */
    public onUpdate():void{
        
    }

}

