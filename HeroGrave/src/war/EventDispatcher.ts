import EventDispatcher = laya.events.EventDispatcher;
export default class EventMgr extends EventDispatcher {
    private eventDispatcher: EventDispatcher = new EventDispatcher();
    constructor() {
        super();
    }
    ///注册事件
    public Emit(InName, ...agv:any[]) {
        //派发事件
        // console.log("派发事件",InName,agv);
        this.eventDispatcher.event(InName, agv);
    }
    //侦听事件
    public AddNotice(InName, caller, listener: Function, arg?: any[]): void {
        // console.log("侦听事件",InName);
        this.eventDispatcher.on(InName, caller, listener, (arg == null) ? null : ([arg]));
    }

    /**
     * 从 EventDispatcher 对象中删除侦听器。
     * @param InName		事件的类型。
     * @param caller	事件侦听函数的执行域。
     * @param listener	事件侦听函数。
     * @return 此 EventDispatcher 对象。
     */
    public RemoveNotice(InName, caller, listener: Function)
    {
        this.eventDispatcher.off(InName,caller,listener);
    }
    /**
     * 移除caller为target的所有事件监听
     * @param	caller caller对象
     */
    public RemoveAllNotice(caller)
    {
        this.eventDispatcher.offAllCaller(caller);
    }
}