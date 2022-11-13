var r;
var S;
function calc() {
    r=document.getElementById('num').value;
    S=Math.pow(r,2)*Math.PI;
    document.getElementById('result').innerHTML=S;
}
function change() {
    var body=document.getElementById('body')
    if (body.style.backgroundColor==='black') {
        body.style.backgroundColor = 'aquamarine';
        document.getElementById('mode').innerHTML='Dark Mode'
    }
    else{
        body.style.backgroundColor='black'
        document.getElementById('mode').innerHTML='Light Mode'
    }
}



