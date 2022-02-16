function func(){
    let myColor = document.getElementById('color').value;
    let bgCol = document.getElementById('body');
    if(myColor === 'black'){
       document.getElementById('heading').style.color = 'white';
    }
    else{
        document.getElementById('heading').style.color = 'black';
    }
    bgCol.style.backgroundColor = myColor;
}