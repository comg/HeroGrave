
export default class UIObject extends Laya.Script{
    public node:Laya.Sprite;
    constructor(){
        super();
    }

    onAwake(){
        this.node = this.owner as Laya.Sprite;
    }


}

