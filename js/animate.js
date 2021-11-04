
//给不同的元素指定了不同的定时器
function animate(obj, target, callback) {
    // 解决了定时器叠加，保证只有一个定时器运行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数写到结束定时器里面
            if (callback) {
                callback();
            }
        } else {
            obj.style.top = obj.offsetTop + step + 'px';
        }
    }, 20);

}