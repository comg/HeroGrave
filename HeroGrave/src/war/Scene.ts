import IScene from "./IScene";


export default class Scene implements IScene{

    public node:Laya.Scene;
    public isDestroy:boolean = false;
    
    constructor(ui:{new():Laya.Scene}){
        this.load(ui);
        this.isDestroy = false;
        this.onLoad();
    }

    /**生命周期函数 加载 */
    onLoad(){}
    /**生命周期函数 页面加载完毕*/
    onStart(){}
    /**生命周期函数 显示页面*/
    onShow(){}
    /**生命周期函数 隐藏页面*/
    onHide(){}
    /**生命周期函数 销毁*/
    onDestroy(){}

    

    start(){
        this.onStart();
        this.show();
    }
    show(){
        this.node.visible = true;
        this.onShow();
    }
    hide(){
        this.node.visible = false;
        this.onHide();
    }
    destroy(){
        this.node.destroy();
        this.onDestroy();
        this.isDestroy = true;
    }

    private load(ui:{new():Laya.Scene}){
        let node:any = new ui();
        node.createChildren();
        this.node = node;
    }
    


    
}
