import View from "./View";

/**
 * 导演类
 */
export default class Director{
    /**当前3D场景 */
    public curScene3D:Laya.Scene3D;
    /**当前2D场景 */
    public curScene2D:View;
    /**3d根节点 */
    public stage3D:Laya.View;
    /**2d根节点 */
    public stage2D:Laya.View;
    /**存在的2D页面 */
    private viewList2D:{[key:string]:View};

    constructor(){
        this.stage3D = new Laya.View();
        this.stage2D = new Laya.View();
        this.viewList2D = {};
        this.stage2D.centerX = 0;
        this.stage2D.centerY = 0;
        this.stage3D.centerX = 0;
        this.stage3D.centerY = 0;
        this.stage2D.width = Laya.stage.width;
        this.stage2D.height = Laya.stage.height;
        Laya.stage.addChild(this.stage3D);
        Laya.stage.addChild(this.stage2D);
    }

    /**
     * 加载2d场景
     * @param scene 游戏场景
     * @param closeOther 是否关闭其他场景
     */
    loadScene2D(scene:{new():View},name,closeOther?:boolean){
        if(closeOther){
            this.destroyAllScene2D();
        }
        if(this.viewList2D[name]){
            this.curScene2D = this.viewList2D[name];
            this.stage2D.setChildIndex(this.curScene2D.node,this.stage2D._children.length-1);
            this.curScene2D.show();
        }else{
            this.curScene2D = new scene();
            this.stage2D.addChild(this.curScene2D.node);
            this.viewList2D[name] = this.curScene2D;
            this.curScene2D.start();
        }
    }

    /**关闭所有2D场景 */
    destroyAllScene2D(){
        Object.keys(this.viewList2D).forEach(function(key){
            this.viewList2D[key].destroy();
            this.viewList2D[key] = null;
        });
    }

    /**隐藏所有2D场景 */
    hideAllScene2D(){
        Object.keys(this.viewList2D).forEach(function(key){
            this.viewList2D[key].hide();
        });
    }


    /**
     * 加载3d场景
     * @param scene 游戏场景
     * @param closeOther 是否关闭其他场景
     */
    loadScene3D(scene:Laya.Scene3D,closeOther?:boolean){
        if(closeOther){
            this.stage3D.removeChildren();
        }
        this.curScene3D = scene;
        this.stage3D.addChild(scene);
    }
    
    
    


    
}