var mas = ["1gallery.jpg","2gallery.jpg","3gallery.jpg","4gallery.jpg","5gallery.jpg","7gallery.jpg","6gallery.jpg","8gallery.jpg"];
var to = -1;  // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{
    var obj = document.querySelector(".rightbotton");
    if (to < mas.length-1)  to++
    else
        to = 0;
    obj.src = mas[to];
    setCookie("foo", mas[to] , "", "/");	 // запоминаем текущую картинку
}

function left_arrow()
{
    var obj = document.getElementById("img");
    if (to > 0) to--;
    else
        to = mas.length-1;
    obj.src = mas[to];
    setCookie("foo", mas[to] , "", "/");	 // запоминаем текущую картинку
}

function setCookie(name, value, expires, path, domain, secure) // Ф-ция создания куки
{
    if (!name || !value) return false;
    var str = name + '=' + encodeURIComponent(value);
    if (expires) str += '; expires=' + expires.toGMTString();
    if (path)    str += '; path=' + path;
    if (domain)  str += '; domain=' + domain;
    if (secure)  str += '; secure';
    document.cookie = str;
    return true;
}

function getCookie(name)   // Ф-ция получения куки
{
    var pattern = "(?:; )?" + name + "=([^;]*);?";
    var regexp  = new RegExp(pattern);
    if (regexp.test(document.cookie))
        return decodeURIComponent(RegExp["$1"]);
    return false;
}


function Load()   // Ф-ция загрузки "сохраненной" картинки
{
    var cook_val = getCookie("foo");  // Получаем значение куки по имени
    for (var i = 0 ; i < mas.length; i++)
    {
        if (mas[i] == cook_val)   // Как только встретилась
        {
            document.getElementById("img").src = mas[i];   // Загружаем картинку
            to = i;  // Задаем текущее значение счетчику
            break // выходим
        }
    }
}

function fon() {

    if (document.querySelector("input[type=\"checkbox\"]:checked")) {
        block.style.display = "block";
    }
}

function fonhide() {
    block.style.display = "none";

}

var mas = ["1gallery.jpg","2gallery.jpg","3gallery.jpg","4gallery.jpg","5gallery.jpg","7gallery.jpg","6gallery.jpg","8gallery.jpg"];
document.querySelector(".button").onclick = function right(){};
function right() {

    if (document.getElementById("right1"))
    {
        $("input#pic-2").change(function (){
            this.setAttribute("checked","checked")
        })

            block.style.display = "block";

    }
}

var slider = {
    slides:["1gallery.jpg","2gallery.jpg","3gallery.jpg","4gallery.jpg","5gallery.jpg","7gallery.jpg","6gallery.jpg","8gallery.jpg"],
    frame:0, // текущий кадр для отбражения - индекс картинки из массива
    set: function(image) { // установка нужного фона слайдеру
        document.getElementById("scr").style.backgroundImage = "url("+image+")";
    },
    init: function() { // запуск слайдера с картинкой с нулевым индексом
        this.set(this.slides[this.frame]);
    },
    left: function() { // крутим на один кадр влево
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() { // крутим на один кадр вправо
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function() { // запуск слайдера после загрузки документа
    slider.init();
    setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
        slider.right();
    },5000);
};

