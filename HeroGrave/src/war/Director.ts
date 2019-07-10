/**
 * 导演类
 */
export default class Director{
    /**当前3D场景 */
    public curScene3D:Laya.Scene3D;
    /**当前2D场景 */
    public curScene2D:Laya.Scene;
    /**3d根节点 */
    public stage3D:Laya.View;
    /**2d根节点 */
    public stage2D:Laya.View;

    private viewList2D:Array<Laya.Scene>;

    constructor(){
        this.stage3D = new Laya.View();
        this.stage2D = new Laya.View();
        this.stage2D.centerX = 0;
        this.stage2D.centerY = 0;
        this.stage3D.centerX = 0;
        this.stage3D.centerY = 0;
        this.stage2D.width = Laya.stage.width;
        this.stage2D.height = Laya.stage.height;
        this.viewList2D = [];
        Laya.stage.addChild(this.stage3D);
        Laya.stage.addChild(this.stage2D);
    }

    /**
     * 加载2d场景
     * @param scene 游戏场景
     * @param closeOther 是否关闭其他场景
     */
    loadScene2D(scene:Laya.Scene,closeOther?:boolean){
        if(closeOther){
            this.stage2D.removeChildren();
        }
        this.curScene2D = scene;
        this.stage2D.addChild(scene);
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