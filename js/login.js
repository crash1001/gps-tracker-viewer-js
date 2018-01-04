
//validates login credentials
function validate() {

        var email = document.getElementById("inputEmail").value;
        var password = document.getElementById("inputPassword").value;
        var url ="https://hardware.wscada.net/auth";
        var bodyData = JSON.stringify({
            "id" : email ,
            "password" : password
        });
        var headerData = {"Content-type" : "application/json"};
        fetchRequest(headerData, bodyData, url);
}


function fetchRequest(headerData, bodyData, url) {

    fetch(url, {
        method : 'post',
        headers : headerData,
        body : bodyData
    })
        .then(response => response.json())
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
            if(data.response.errors.length === 0) {
                    window.location.replace("index.html");
            }
            else
            {
                alert("Email address or Password incorrect!!");
                document.getElementById("inputEmail").value = null;
                document.getElementById("inputPassword").value = null;
            }
        })
        .catch(function(error) {
            console.log('Request Failed', error);
        });


}

