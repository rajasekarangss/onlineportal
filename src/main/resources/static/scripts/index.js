var domain = window.location.origin
function signin() {
    getAllUsers();
}

function getAllUsers() {

    var fetchUrl = domain + "/get/all";
    fetch(fetchUrl, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}