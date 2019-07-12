import Scene from "./Scene";


/**
 * 导演类
 */
export default class Director{
    /**当前场景 */
    public curScene:Scene;
    /**根节点 */
    public stage:Laya.View;
    /**存在的场景 */
    private sceneList:{[key:string]:Scene};
    private SceneConfig:any;

    constructor(sceneConfig){
        this.stage = new Laya.View();
        this.sceneList = {};
        this.SceneConfig = sceneConfig;
        this.stage.centerY = this.stage.centerX = 0;
        this.stage.width = Laya.stage.width;
        this.stage.height = Laya.stage.height;
        Laya.stage.addChild(this.stage);
    }


    /**
     * 加载场景
     * @param name 游戏场景名字
     * @param closeOther 是否关闭其他场景
     */
    loadScene(name:string,closeOther?:boolean){
        if(closeOther){
            this.destroyAllScene();
        }
        if(this.sceneList[name]){
            this.curScene = this.sceneList[name];
            this.stage.setChildIndex(this.curScene.node,this.stage._children.length-1);
            this.curScene.show();
        }else{
            this.curScene = new this.SceneConfig[name]();
            this.stage.addChild(this.curScene.node);
            this.sceneList[name] = this.curScene;
            this.curScene.start();
        }
    }

    /**关闭所有场景 */
    destroyAllScene(){
        Object.keys(this.sceneList).forEach(function(key){
            this.sceneList[key].destroy();
            this.sceneList[key] = null;
        });
    }

    /**隐藏所有场景 */
    hideAllScene(){
        Object.keys(this.sceneList).forEach(function(key){
            this.sceneList[key].hide();
        });
    }


    
    
    


    
}