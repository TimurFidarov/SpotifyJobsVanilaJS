window.onload = function () {
    let timeOut = 0;
    function changeHeader () {
        if(window.scrollY == 0) {
            clearTimeout(timeOut);
            timeOut = 0;
            header.classList.remove('blurry-header');
            headLogo.src = 'img/logo.svg';
        } else {
            if(!timeOut) {
                timeOut = setTimeout(()=>{
                    header.classList.add('blurry-header')
                    headLogo.src = 'img/black-logo.svg'
                }, 700);
            }
        }
        if(lastScrollY < window.scrollY) {
            lastScrollY = window.scrollY;
            window.requestAnimationFrame(function () {
                header.style.transform = "translateY(-100%)";
            });
        }
        if(lastScrollY > window.scrollY) {
            lastScrollY = window.scrollY;
            window.requestAnimationFrame(function () {
                header.style.transform = "translateY(0%)";
            });
        }
    }

    let headLogo = document.getElementById('head-logo');
    let lastScrollY = 0;
    let header = document.getElementById('header');

    window.onscroll = function () {
        changeHeader();
    }
}
