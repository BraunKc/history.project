var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');


let isActive = false;

window.addEventListener('wheel', function() {
    var firstRect = first.getBoundingClientRect();
    var secondRect = second.getBoundingClientRect();
    var thirdRect = third.getBoundingClientRect();
    var fourthRect = fourth.getBoundingClientRect();


    var windowCenterY = window.innerHeight / 2;

    if (this.event.deltaY > 0 && firstRect.top <= windowCenterY && windowCenterY < secondRect.top && isActive == false) {
        isActive = true;
        if (animated == false) {
            secondSlide();
            this.setTimeout(function(){
                second.scrollIntoView({ behavior: 'smooth' });
                setTimeout(function() {
                    isActive = false;
                }, 500);    
            }, 300)    
        } else {
            this.setTimeout(function(){
                second.scrollIntoView({ behavior: 'smooth' });
                setTimeout(function() {
                    isActive = false;
                }, 500);
            });  
        }

    } else if (this.event.deltaY > 0 && secondRect.top <= windowCenterY && windowCenterY < thirdRect.top && isActive == false){
        isActive = true;
        third.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            isActive = false;
        }, 500);
    } else if (this.event.deltaY > 0 && thirdRect.top <= windowCenterY && windowCenterY < thirdRect.bottom && isActive == false){
        isActive = true;
        fourth.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            isActive = false;
        }, 500);
    } else if (this.event.deltaY < 0 && secondRect.top <= windowCenterY && windowCenterY < secondRect.bottom && isActive == false){
        isActive = true;
        first.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            isActive = false;
        }, 500);
    } else if (this.event.deltaY < 0 && thirdRect.top <= windowCenterY && windowCenterY < thirdRect.bottom && isActive == false){
        isActive = true;
        second.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            isActive = false;
        }, 500);
    } else if (this.event.deltaY < 0 && fourthRect.top <= windowCenterY && windowCenterY < fourthRect.bottom && isActive == false){
        isActive = true;
        third.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            isActive = false;
        }, 500);
    }
});

const card = document.querySelector(".veryBig");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('mousedown', function() {
        document.body.classList.add('smooth-selection');
    });

    document.body.addEventListener('mouseup', function() {
        document.body.classList.remove('smooth-selection');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Список слов, которые будут меняться
    const words = ['Екатерины II', 'Матушки Екатерины', 'Великой', 'Фике', 'Доброй бабушки'];

    // Создаем экземпляр TypeIt в контейнере с id "Ekaterina"
    const typeitInstance = new TypeIt('#Ekaterina', {
        strings: words,
        speed: 150,
        breakLines: false,
        waitUntilVisible: true,
        loop: true,
    });
    // Запускаем анимацию
});

var scrollableElement = document.querySelector('.text2nd');

scrollableElement.addEventListener('wheel', function(e) {
    var deltaY = e.deltaY || -e.wheelDelta || e.detail; // Различные способы получения значения прокрутки в различных браузерах
    if ((deltaY < 0 && scrollableElement.scrollTop == 0) || (deltaY > 0 && scrollableElement.scrollHeight - scrollableElement.clientHeight === scrollableElement.scrollTop)) {
        e.preventDefault(); // Предотвращение прокрутки родительского элемента в случае достижения верхнего или нижнего предела
    }
});
