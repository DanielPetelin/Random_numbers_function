//Функция, которая будет принемать значения для max, min.
document.querySelector('button').onclick = function() {
    var l = document.querySelector('#length').value;
    var min = document.querySelector('#min').value;
    var max = document.querySelector('#max').value;
    var result = [];

//Цикл, записывающий результат.
    for (var i = 0; i < l; i++) {
        result.push(randomInteger(min, max));
    };

    document.querySelector('#out').innerHTML = result;
    document.querySelector('#out-input').value = result;
    return result;
};

//Функция генерирующая рандомные числа.
function randomInteger(max, min) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}