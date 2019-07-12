import animatorStateScript from "./AnimatorStateScript";
import gameObject from "./GameObject";
import uiObject from "./UIObject";
import scene from "./Scene";


import Director from "./Director";
import EventDispatcher from "./EventDispatcher";

export module war{
    /**动画脚本类 */
    export class AnimatorStateScript extends animatorStateScript{};
    /**游戏对象类 */
    export class GameObject extends gameObject{};
    /**游戏UI对象类 */
    export class UIObject extends uiObject{};
    /**游戏场景类 */
    export class Scene extends scene{};

    
    /**时间管理器 */
    export var eventDispatcher:EventDispatcher;
    /**导演 */
    export var director:Director;
    /**
     * 初始化
     * @param SceneConfig 场景配置
     */
    export function init(sceneConfig){
        this.director = new Director(sceneConfig);
        this.eventDispatcher = new EventDispatcher();
    }
    
}