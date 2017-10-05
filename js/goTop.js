window.onload = function () {
    var goTop = document.getElementById("goTop");

//当浏览器卷去的高度超过一屏幕才显示回到顶部，否则隐藏
    function computedDisplay() {
        //滚动的高度
        var curTop = document.documentElement.scrollTop || document.body.scrollTop;
        //一屏幕高度
        var curHeight = document.documentElement.clientHeight - 200 || document.body.clientHeight;

        goTop.style.display = curTop > curHeight ? "block" : "none";
    }

    window.onscroll = computedDisplay;   //不论鼠标拖动还是方向键还是JS控制都会有反馈

    goTop.onclick = function () {
        //当点击的时候，让go消失,由于向上滚时，又触发了onscroll事件，为block，需要先屏蔽该监听，否则会同时触发onscroll
        this.style.display = "none";
        window.onscroll = null;  //取消绑定一下下
        //回到顶部，总时间duration500ms，频率interval一次走10ms
        //总距离target：当前位置-目标位置  步长step：每一次走的距离
        var duration = 500,
            interval = 10,
            target = document.documentElement.scrollTop || document.body.scrollTop,
            step = (target / duration) * interval;// (target / duration)为总距离/总时间=总速度，而每次走的距离为10，相乘得到每次走的距离

        var timer = window.setInterval(function () {
            var curTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (curTop === 0) {
                window.clearTimeout(timer);
                window.onscroll = computedDisplay; //动画结束后重新绑定
                return;
            }
            curTop -= step;
            document.documentElement.scrollTop = curTop;
            document.body.scrollTop = curTop;
        }, interval);
    }
};

