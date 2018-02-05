import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';

document.addEventListener("DOMContentLoaded", function() {  
  loadUsers();
});
  
function init() {
    // var path = window.location.pathname.split('/');
    // if(path[path.length - 1] == 'index.html') {
        loadUsers();
    //}
}

function loadUsers() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:9000/users', true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        let userTabBody = document.getElementById('userTab').tBodies[0];
        var data = JSON.parse(request.responseText);
        for (let index = 0; index < data.length; index++) {
          let row = userTabBody.insertRow(index);
          row.insertCell(0).appendChild(document.createTextNode(data[index].id));
          row.insertCell(1).appendChild(document.createTextNode(data[index].username));
          row.insertCell(2).appendChild(document.createTextNode(data[index].email));
        }
      } else {
        // We reached our target server, but it returned an error
    
      }
    };
    
    request.onerror = function() {
      // There was a connection error of some sort
    };
    
    request.send();
}