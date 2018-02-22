
    var speed = 50;
    var timer = null;
    var target = document.querySelector('.contentUl');
    var liHtml = document.querySelector('.contentLi');
    var newLi = document.createElement('li');
    newLi.className = 'contentLi';
    newLi.innerHTML = liHtml.innerHTML;
    target.appendChild(newLi);
    function scrollAuto() {
        if (newLi.offsetTop - target.scrollTop - 336 <= newLi.offsetHeight){
                target.scrollTop =0;
            }else {
                target.scrollTop += 10;
            }
    }

    target.onmouseover = function() {
        clearInterval(timer)
    }
    target.onmouseout = function() {
        timer = setInterval(scrollAuto, speed)
    }

    function scrolling() {
        if(timer){
            clearInterval(timer)
        }
        timer = setInterval(scrollAuto, speed)
    }

    setInterval(scrolling,5000)

    //每5s向上滚动一次