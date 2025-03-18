function product(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    alert(a * b);
}

function getremainder(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    alert(a % b);
}

function random(){
    var answer = Math.random();
    alert(answer);
}

function round(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    alert(Math.round(a));
    alert(Math.round(b));
}

function power(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var answer = Math.pow(a, b);
    alert(answer);
}

function sqrt(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    alert(Math.sqrt(a) + " ; " + Math.sqrt(b));
}

function abs(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    alert(Math.abs(a) + " ; " + Math.abs(b));
}

function min(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    alert(Math.min(a, b));
}

function max(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var max = Math.max(a, b);
    alert(max);
}

function onload(){
    document.getElementById('A').value = 1;
    document.getElementById('B').value = 1;
}