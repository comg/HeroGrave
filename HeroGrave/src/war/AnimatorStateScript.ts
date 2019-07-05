//继承自AnimatorStateScript(动画状态脚本)
export default class AnimatorStateScript extends Laya.AnimatorStateScript{
	public isPlaying:boolean = false;
	public exit:Function = function(){};
	public start:Function = function(){};
	constructor(){
		super();
	}

		
	/**
	 * 动画状态开始时执行。
	 */
	onStateEnter() {
		this.isPlaying = true;
		this.start();
	}
			
	/**
	 * 动画状态更新时执行。
	 */
	onStateUpdate() {
		this.isPlaying = true;
	}
		
	/**
	 * 动画状态退出时执行。
	 */
	onStateExit() {
		this.isPlaying = false;
		this.exit();
	}
}