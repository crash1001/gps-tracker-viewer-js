function validate() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var url ="https://hardware.wscada.net/auth";
    // XMLRequest(email, password, url);
    fetchRequest(email, password, url);

}

// function XMLRequest(email, password, url) {
//     var data = JSON.stringify({
//         "id" : email ,
//         "password" : password
//     });
//
//     var request = new XMLHttpRequest();
//
//     request.open("POST", url , true);
//
//     request.setRequestHeader("Content-Type", "application/json");
//
//     request.onreadystatechange = function() {//Call a function when the state changes.
//         if(request.readyState == 4 && request.status == 200) {
//             alert(request.responseText);
//         }
//     }
//
//     request.send(data);
// }

function fetchRequest(email, password, url) {
    var sendData = JSON.stringify({
        "id" : email ,
        "password" : password
    });

    fetch(url, {
        method : 'post',
        headers : {"Content-type" : "application/json"},
        body : sendData
    })
        .then(response => response.json())
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
            if(data.response.errors.length === 0) {
                    window.location.replace("index.html");
            }
            else
            {
                alert("Username or password Incorrect, plz enter correct username or password");
            }
        })
        .catch(function(error) {
            console.log('Request Failed', error);
        });


}

