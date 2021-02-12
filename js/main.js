window.onload = function () {

    //functions

    function changeHeader() {
        if (window.scrollY == 0) {
            clearTimeout(timeOut);
            timeOut = 0;
            header.classList.remove('blurry-header');
            headLogo.src = 'img/logo.svg';
        } else {
            if (!timeOut) {
                timeOut = setTimeout(() => {
                    header.classList.add('blurry-header')
                    headLogo.src = 'img/black-logo.svg'
                }, 700);
            }
        }
        if (lastScrollY < window.scrollY) {
            lastScrollY = window.scrollY;
            window.requestAnimationFrame(function () {
                header.style.transform = "translateY(-100%)";
            });
        }
        if (lastScrollY > window.scrollY) {
            lastScrollY = window.scrollY;
            window.requestAnimationFrame(function () {
                header.style.transform = "translateY(0%)";
            });
        }
    }

    function changeInspirationItem(wrapper, imgSrc, titleValue, textValue) {
        //Content
        let contentBox = document.createElement('div');
        contentBox.classList.add('row');

        //img box
        let imgBox = document.createElement('div')
        imgBox.classList.add('col-8', 'col-offset-2');

        contentBox.append(imgBox);


        //img
        let img = document.createElement('img');
        img.src = imgSrc

        imgBox.append(img);

        //text container

        let textContainer = document.createElement('div');
        textContainer.classList.add('col-offset-2', 'col-12');

        contentBox.append(textContainer);

        //title
        let title = document.createElement('h1');
        title.innerHTML = titleValue;
        textContainer.append(title);

        //text box
        let textBox = document.createElement('div');
        textBox.classList.add('inspiration-text');
        textContainer.append(textBox);

        //text
        let text = document.createElement('p');
        text.innerHTML = textValue;
        textBox.append(text);

        //btn wrapper
        let btnWrapper = document.createElement('div');
        btnWrapper.classList.add('mt-40');
        textContainer.append(btnWrapper);

        //btn
        let btn = document.createElement('a');
        btn.innerHTML = 'Read more';
        btn.href = '#';
        btn.classList.add('btn');
        btnWrapper.append(btn);

        //Fade animation
        wrapper.classList.add('fade-out');

        setTimeout(function () {
            wrapper.innerHTML = '';
            wrapper.append(contentBox);
            wrapper.classList.remove('fade-out');
        }, 250);

    }

    function changeBodyColor() {
        let bodyHeight = document.body.clientHeight;
        if (bodyHeight / 10 * 2 > window.scrollY) {
            document.body.style.background = '#fff';
            document.body.classList.remove('bg-dark-blue');

        }
        if (bodyHeight / 12 * 2 < window.scrollY && bodyHeight / 12 * 4 > window.scrollY) {
            document.body.style.background = '';
            document.body.classList.add('bg-dark-blue');
        }
        if (bodyHeight / 12 *4 < window.scrollY && bodyHeight / 12 * 6 > window.scrollY) {
            document.body.style.background = '#fff';
            document.body.classList.remove('bg-dark-blue');
        }
        if (bodyHeight / 12 * 6 < window.scrollY && bodyHeight / 12 * 7.5 > window.scrollY) {
            document.body.style.background = '#ffcdd2';
        }
        if (bodyHeight / 12 * 7.5 < window.scrollY) {
            document.body.style.background = '#fff';
        }
    }


    //Header animations
    let timeOut = 0;
    let headLogo = document.getElementById('head-logo');
    let lastScrollY = 0;
    let header = document.getElementById('header');

    window.onscroll = function () {
        changeHeader();
        changeBodyColor();
    }


    //Search input animation

    let searchContainer = document.getElementById('search-container')
    let searchInput = document.getElementById('search-input');

    searchContainer.onclick = function () {
        searchInput.focus();
    }
    searchInput.onfocus = function () {
        searchContainer.classList.add('head-search-container_focus');
        searchContainer.getElementsByTagName('img')[0].src = 'img/icons/black-search.svg'
    }
    searchInput.onblur = function () {
        searchInput.value = '';
        searchContainer.classList.remove('head-search-container_focus');
        searchContainer.getElementsByTagName('img')[0].src = 'img/icons/search.svg'
    }


    //Inspiration list animation

    let inspirationList = document.getElementById('inspiration-list').getElementsByTagName('li');
    inspirationList[0].onclick = function () {
        if (this.classList.contains('active')) return;

        inspirationList[1].classList.remove('active');
        inspirationList[2].classList.remove('active');

        this.classList.add('active');

        let wrapper = document.getElementById('content-box');

        let title = 'One band, no solo artists';
        let imgSrc = 'img/decorations/orchestr.svg';
        let text = 'It’s our culture. It’s our values. It’s who we are and what we’re not. It’s why we do things the way we do and why that matters. It’s all here in our band manifesto.';
        changeInspirationItem(wrapper, imgSrc, title, text);
    }
    inspirationList[1].onclick = function () {
        if (this.classList.contains('active')) return;

        inspirationList[0].classList.remove('active');
        inspirationList[2].classList.remove('active');

        this.classList.add('active');

        let wrapper = document.getElementById('content-box');

        let title = 'Everyone has a part to play';
        let imgSrc = 'img/decorations/plants.svg';
        let text = 'We don’t just want you to feel like you belong here, we want you to feel like you can thrive here. No two creators or listeners are the same, so at Spotify, neither are we.'
        changeInspirationItem(wrapper, imgSrc, title, text);
    }
    inspirationList[2].onclick = function () {
        if (this.classList.contains('active')) return;
        inspirationList[0].classList.remove('active');
        inspirationList[1].classList.remove('active');

        this.classList.add('active');

        let wrapper = document.getElementById('content-box');

        let title = 'Nine to five? No thanks';
        let imgSrc = 'img/decorations/clock.svg';
        let text = 'Clock on, clock off just isn’t our vibe. We want you to feel like you can come to work with a spring in your step, passion for what you do, and the desire to keep growing.'
        changeInspirationItem(wrapper, imgSrc, title, text);
    }


    //Featured jobs animation

    //init sizing
    function setSwiper(counter = 0, fast=null) {
        swiperContainer = document.getElementById('swiper-container');
        slideWidth = (document.body.clientWidth - insideBlockWidth * 3) / 2 + insideBlockWidth;
        offsetSlide = (document.body.clientWidth - insideBlockWidth * 3) / 4;
        slides.forEach((slide) => {
            slideWidth = (swiperContainer.clientWidth - insideBlockWidth * 3) / 2 + insideBlockWidth;
            slide.style.width = slideWidth + 'px';
        });

        if (fast)
        {
            swiperContainer.style.transition = 'none'
            setTimeout(() => {
                swiperContainer.style.transition = 'all 550ms ease 0s'
            }, 100);
        }

        swiperContainer.style.transform = 'translate3d(' + ((slideWidth+20)*counter-offsetSlide) + 'px,0,0)';



    }




    let currentSlide = 3;



    function activateSlide(noClear = false, next = null) {
        if (!noClear) {
            slides.forEach((slide) => {
                slide.getElementsByTagName('a')[0].classList.remove('slide-anchor-wrapper_active');
            });
        }
        if (next) {
            if (currentSlide >= (slides.length-2))
            {
                currentSlide = 1;
            }
            currentSlide++;
        } else {
            if (currentSlide <= 1)
            {
                currentSlide = slides.length-2;
            }
            currentSlide--;
        }
        slides[currentSlide].getElementsByTagName('a')[0].classList.add('slide-anchor-wrapper_active');
    }

    //init swiper
    let slides = document.querySelectorAll('.carousel-section .swiper-slide');
    let insideBlockWidth = slides[0].getElementsByTagName('a')[0].offsetWidth;
    let swiperContainer = document.getElementById('swiper-container');
    let offsetSlide = (document.body.clientWidth - insideBlockWidth * 3) / 4;
    let slideWidth = (document.body.clientWidth - insideBlockWidth * 3) / 2 + insideBlockWidth;
    let itemsCount = slides.length;



    let counter = -2;


    setSwiper(counter, true);


    //resize with window
    window.onresize = function () {
        setSwiper(counter, true);
    }

    //btns

    let swipeLeftBtn = document.getElementById('swipe-left-btn');
    let swipeRightBtn = document.getElementById('swipe-right-btn');


    let throttle = false;

    swipeLeftBtn.onclick = function () {
        if (throttle) return false;
        throttle = true;
        setTimeout(() => throttle = false, 600);

        counter++
        activateSlide();

        setSwiper(counter);

        if (counter == 0) {
            currentSlide = 5;
            activateSlide(true);
            setTimeout(()=>{
                setSwiper(counter = -3, true);
            }, 500);
        }

    }

    swipeRightBtn.onclick = function () {
        if (throttle) return false;
        throttle = true;
        setTimeout(() => throttle = false, 600);

        counter--;
        activateSlide(null,true);


        setSwiper(counter);
        if (counter == -4) {
            currentSlide = 3;
            activateSlide(true);
            setTimeout(()=>{
               setSwiper(counter = -1, true);
            }, 500);
        }
    }




    //drag elem

    dragElement(document.getElementById("fresh-swiper"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.style.transition = 'none';
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            console.log(pos3);
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            // set the element's new position:
            elmnt.style.transition = 'all 0ms ease 0s';

            elmnt.style.transform = 'translate3d('+ -pos1*0.5 + "px,0px,0px)";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null
            elmnt.style.transition = 'all 550ms ease 0s';
            elmnt.style.transform = 'translate3d(0px,0px,0px)';
        }
    }


    //go up

    let goUpBtn = document.getElementById('go-up-btn');

    goUpBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: `smooth` })
    };



    //Header floating
    function setTranslateInterval() {
        intervalId = setInterval(function() {
            let speed = 0.3;
            let translation1 = translateCount1-- * speed;
            let translation2 = translateCount2-- * speed;

            floatDiv.style.transform = 'translateY('+translation1 + 'px)';
            floatDiv2.style.transform = 'translateY('+translation2 + 'px)';
            if ((translation1*-1) > (floatDiv.offsetHeight)) {
                translateCount1 = 0;
            };
            if ((translation2*-1 ) > (floatDiv.offsetHeight)) {
                translateCount2 = 0;
            };
        }, 5);
    }




    let floatDiv = document.getElementById('inner-1');
    let floatDiv2 = document.getElementById('inner-2')

    let intervalId = 0;
    setTranslateInterval();

    let translateCount1 = 0;
    let translateCount2 = 0;



    Array.prototype.forEach.call(floatDiv.getElementsByTagName('a'), a => {
        a.onmouseover = function () {
            clearInterval(intervalId);
        }
        a.onmouseout = function () {
            setTranslateInterval();
        }
    });

    Array.prototype.forEach.call(floatDiv2.getElementsByTagName('a'), a => {
        a.onmouseover = function () {
            clearInterval(intervalId);
        }
        a.onmouseout = function () {
            setTranslateInterval();
        }
    });




    //Rows float


    function FloatRow(row, rowDuplicate, vector= true) {
        this.row = row;
        this.vector = vector;
        this.rowDuplicate = rowDuplicate;
        this.interval = false;
        this.translateRow = 0;
        this.translateRowDuplicate = 0;
        this.setRowsInterval = () => {
            this.interval = setInterval( () => {
                if (this.vector) {
                    this.translateRow -= 0.03;
                    this.translateRowDuplicate -= 0.03;
                    if ( this.translateRow <=-100) this.translateRow = 100;
                    if (this.translateRowDuplicate <= -200) this.translateRowDuplicate = 0;

                    this.row.style.transform = 'translateX('+ this.translateRow + '%)';
                    this.rowDuplicate.style.transform = 'translateX('+ this.translateRowDuplicate + '%)';
                } else {
                    this.translateRow += 0.02;
                    this.translateRowDuplicate += 0.02;
                    if ( this.translateRow >=100) this.translateRow = -100;
                    if (this.translateRowDuplicate > 0) this.translateRowDuplicate = -200;
                    this.row.style.transform = 'translateX('+ this.translateRow + '%)';
                    this.rowDuplicate.style.transform = 'translateX('+ this.translateRowDuplicate + '%)';
                }
            }, 5);
        };
        this.setHoverAction = () => {
            Array.prototype.forEach.call(this.row.getElementsByTagName('a'), a => {
                a.onmouseover =  () => {
                    clearInterval(this.interval);
                }
                a.onmouseout = () => {
                    this.setRowsInterval();
                }
            });
            Array.prototype.forEach.call(this.rowDuplicate.getElementsByTagName('a'), a => {
                a.onmouseover =  () => {
                    clearInterval(this.interval);
                }
                a.onmouseout = () => {
                    this.setRowsInterval();
                }
            });
        }
        this.init = () => {
            this.setRowsInterval();
            this.setHoverAction();
        }
    }

    let row1 = document.getElementById('row1');
    let row2 = document.getElementById('row2');
    let row3 = document.getElementById('row3');
    let row4 = document.getElementById('row4');
    new FloatRow(row1.querySelectorAll('.location-scroll_scroll')[0],row1.querySelectorAll('.location-scroll_scroll')[1]).init();
    new FloatRow(row2.querySelectorAll('.location-scroll_scroll')[0],row2.querySelectorAll('.location-scroll_scroll')[1], false).init();
    new FloatRow(row3.querySelectorAll('.location-scroll_scroll')[0],row3.querySelectorAll('.location-scroll_scroll')[1]).init();
    new FloatRow(row4.querySelectorAll('.location-scroll_scroll')[0],row4.querySelectorAll('.location-scroll_scroll')[1], false).init();




}