export default interface IView {
    /**生命周期函数 加载*/
    onLoad():void;
    /**生命周期函数 页面加载完毕*/
    onStart():void;
    /**生命周期函数 显示页面*/
    onShow();
    /**生命周期函数 隐藏页面*/
    onHide();
    /**生命周期函数 销毁*/
    onDestroy ();
}