import animatorStateScript from "./AnimatorStateScript";
import Director from "./Director";
import EventDispatcher from "./EventDispatcher";
import gameObject from "./GameObject";
import uiObject from "./UIObject";

export module war{
    /**动画脚本类 */
    export class AnimatorStateScript extends animatorStateScript{};
    /**游戏对象类 */
    export class GameObject extends gameObject{};
    /**游戏UI对象类 */
    export class UIObject extends uiObject{};


    /**时间管理器 */
    export var eventDispatcher:EventDispatcher;
    /**导演 */
    export var director:Director;
    /**初始化 */
    export function init(){
        this.director = new Director();
        this.eventDispatcher = EventDispatcher.getInstance();
    }
    
}