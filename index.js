// Add your code here
let personalData = {
    'name' : 'Steve',
    'email' : 'steve@steve.com'
}

const fetchData = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'},
    body: JSON.stringify(personalData)
    }

function submitData() {
return fetch('http://localhost:3000/users', fetchData)
.then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object.id;
  })
  .catch(function(error) {
    document.body.innerHTML = 'Unauthorized Access';
  }); 
}