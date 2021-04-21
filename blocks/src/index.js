//При нажатии кнопки "Кнопка 1" скрывается блок с заголовком. При повторном нажатии блок появляется.

let module = document.querySelector('.module');
let open = document.querySelector('.open');
module.style.display = 'block'

open.addEventListener("click",function() {
    if(module.style.display == 'none')  module.style.display = 'block';
    else module.style.display = 'none'
});

//При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен меняться местами с левым блоком.
// При повторном нажатии - возвращаться на прежнее место.

$(function(){
    jQuery.fn.swap = function(b) {
        b = jQuery(b)[0];
        var a = this[0],
            a2 = a.cloneNode(true),
            b2 = b.cloneNode(true),
            stack = this;

        a.parentNode.replaceChild(b2, a);
        b.parentNode.replaceChild(a2, b);

        stack[0] = a2;
        return this.pushStack( stack );
    };

    $('#mem').on('click', function(){
        $('.left').swap('.right');
    });
});

//Сделать, чтобы при открытии страницы появлялось модальное окно с надписью "Привет, мир".

$(window).on('load',function(){
    $('#myModal').modal('show');
});