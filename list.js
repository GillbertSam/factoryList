
    var ulDom = document.querySelector('.contentUl');   //列表容器
    var liDom = document.getElementsByClassName('contentLi');   //条目

    // 需求：每5s向上滚动一次

    var timer = null;
    var step = 1;
    var scrollRange = parseInt(liDom.length / 5);

    //向上滚动
    function move() {
        if(step > scrollRange) {
            ulDom.style.transition = '-webkit-transform 0ms ease-out';
            ulDom.style.transform = 'translateY(300px)';
            setTimeout(function(){
                ulDom.style.transition = 'all 1s';
                ulDom.style.transform = 'translateY(0px)';
            },50)
            step = 1;
            return;
        }
        distance = step * 315
        ulDom.style.transform = 'translateY(-'+ distance +'px)';
        step++
    }
    timer = setInterval(move,3000);