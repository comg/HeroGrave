/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1334;
    static height:number=750;
    static scaleMode:string="fixedwidth";
    static screenMode:string="horizontal";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="view/GameUI.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=false;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;

    }
}
GameConfig.init();