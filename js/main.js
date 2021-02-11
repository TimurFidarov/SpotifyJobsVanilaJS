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




    //Search elements

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


    //Inspiration list

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



}
