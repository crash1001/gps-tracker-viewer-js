//
// function setup() {
//     var value = {};
//     var api = 'http://api.openweathermap.org/data/2.5/weather?q=London';
//     var apiKey = '&APPID=37ebe089f470b257d2fd5cf3274001ba';
//     var units = '&units=metric';
//
//
//     var url = api + apiKey + units;
//     console.log(url);
//
//     var button = document.getElementById('submit');
//     // button.addEventListener('click', function() {
//     //     fetch(url)
//     //         .then(function(data) {
//     //         value = data
//     //     })
//     //
//     // });
//     {
//     fetch(url)
//     .then((resp) => resp.json())
// .then(function(data) {
//     value = data;
//     console.log(value);
//     })
//
//     .catch(function(error) {
//         console.log(JSON.stringify(error));
//     });
//     }
// }

var attempt = 3;

function validate() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    var api = null;
    var apiKey = null;
    var url = api + apiKey;
    fetch(url)
    .then(((resp) => resp.json())
        .then(function(data) {
            value = data;
            console.log(value);
        })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });



    if(email === "abc@abc.com" && password === "1234"){
        alert("Logged in Sucessfully!!!");
        window.location = "index.html";
        return false;
    }
    else {
        attempt--;
        alert("You have "+attempt+" attempt left!!!");
        if(attempt === 0) {
            document.getElementById("inputEmail").disabled = true;
            document.getElementById("inputPassword").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        return false;
    }
}

$('.for_validation').click(function(){
    validate();
});
