    // Получаем видимую часть слайда
    let viewport = document.getElementById("slider__viewport").offsetWidth;
    // Получаем кнопку вперёд
    let btnNext = document.getElementById("slider__control-next");
    // Получаем кнопку назад
    let btnPrev = document.getElementById("slider__control-prev");
    // Получаем элемент со всеми слайдами
    let slider = document.querySelector("div.slider");
    // Получаем элементы показа слайда
    let viewSliders = document.querySelectorAll(".viewSlide");
    // Объявляем переменную номера слайда
    let viewSlide = 0;
     
    // Назначаем цвет индикатор слайда зелёный
    viewSliders[0].style.backgroundColor = "red";
    // viewSliders[0].classList.add("active");

    // Обработка клика на кнопку вперёд
    btnNext.addEventListener("click", function () {
        // Делаем индикатор слайда красный
        // viewSliders[viewSlide].classList.remove("active");
        viewSliders[viewSlide].style.backgroundColor = "orange";
        // Условие, если номер слайда меньше четырёх
        if (viewSlide < 4) { // Если верно то
            // Увеличиваем номер слайда на один
            viewSlide++;
        } else { // Иначе
            // Номер слайда равен нулю
            viewSlide = 0;
        }
        // Закрашиваем индикатор слайда в зелёный
        viewSliders[viewSlide].style.backgroundColor = "red";
        // viewSliders[viewSlide].classList.remove("active");
        // Меняем позицию всего слайда
        slider.style.left = -viewSlide * viewport + "px";
    });
     
    // Обработка клика на кнопку назад
    btnPrev.addEventListener("click", function () {
        // Делаем индикатор слайда красный
        viewSliders[viewSlide].style.backgroundColor = "orange";
        // Условие, если номер слайда больше нуля
        if (viewSlide > 0) { // Если верно то
            // Уменьшаем номер слайда
            viewSlide--; 
        } else { // Иначе
            // Номер слайда равен четырём
            viewSlide = 4; 
        }
        // Закрашиваем индикатор слайда в зелёный
        viewSliders[viewSlide].style.backgroundColor = "red";
        // viewSliders[viewSlide].classList.remove("active");
        // Меняем позицию всего слайда
        slider.style.left = -viewSlide * viewport + "px";
    });






// //видимая часть слайдера (800px)
// let viewport = document.getElementById('slider__viewport').offsetWidth;
// //кнопка вперед 
// let btnNext = document.getElementById('slider__control-next');
// //кнопка назад 
// let btnPrev = document.getElementById('slider__control-prev');
// //сам слайдер со слайдами, в которых картинки 
// let slider = document.querySelector('div.slider');
// // получаем элементы для показа слайда
// let viewSliders = document.querySelectorAll('.viewSlide');
// // объявляем переменную для номера слайда и инициализации (запуска)
// let viewSlide = 0;

// viewSliders[0].style.backgroundColor="red";

// btnNext.addEventListener('click',function(){
//     console.log('btnNext');
//     // viewSliders[viewSlide].style.backgroundColor = 'orange';

//     console.log('viewSlider => ' + viewSlider);

//     if (viewSlider < 4) {
//         viewSlider++;
//     } else {
//         viewSliders = 0;
//     }

//     // viewSliders[viewSlide].style.backgroundColor = 'red';
//     slider.style.left=-viewSlide * viewport + 'px';

// });



// btnPrev.addEventListener('click',function(){
//     console.log('btnPrev');
//     // viewSliders[viewSlide].style.backgroundColor = 'orange';

//     console.log('viewSlider => ' + viewSlider);

//     if (viewSlide > 0) {
//         viewSlide--;
//     } else {
//         viewSlide = 4;
//     }

//     // viewSliders[viewSlide].style.backgroundColor = 'red';
//     slider.style.left=-viewSlide * viewport + 'px';

// });