console.log('this is my fetch function');

function getData(){
    console.log('take an url. from system.');
    let file = "fetch.txt";
    fetch(file).then((response) =>{
        return response.text();
    }).then((data) =>{
        console.log(data);
    });

}
console.log('before fetch funtion.');
getData();
console.log('after fetch funtion');