console.log('this is my fetch function');

// function getData(){
//     console.log('take an url. from system.');
//     let file = "https://api.github.com/users";
//     fetch(file).then((response) =>{
//         return response.text();
//     }).then((data) =>{
//         console.log(data);
//     });

// }

function postData(){
    console.log("this method is used for posting the data.");
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"prince","salary":"123","age":"23"}'
    params = {
        method:'post',
        header:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params).then(response => response.json())
    .then(data => console.log(data))
}
console.log('before fetch funtion.');
// getData();
postData();

console.log('after fetch funtion');