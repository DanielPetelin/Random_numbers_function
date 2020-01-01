document.querySelector('button').onclick = function() {
    var l = document.querySelector('#length');
    var min = document.querySelector('#min');
    var max = document.querySelector('#max');
    var result = [];
    result.push(randomInteger(min, max));
    console.log(result);
    return result;
}

function randomInteger(max, min) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}