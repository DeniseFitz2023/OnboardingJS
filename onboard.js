function populateCountries() {
    
var country = [
    {
        "id": "1",
        "name": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "id": "2",
        "name": "Delhi",
        "state": "Delhi"
    },
    {
        "id": "3",
        "name": "Bengaluru",
        "state": "Karnataka"
    },]

for(x in country ){
  var sel = document.createElement("option");
  sel.innerHTML = country[x].name;
  sel.value  = country[x].name;
  document.getElementById("country").appendChild(sel);
}

for(x in country ){
  var sel = document.createElement("option");
  sel.innerHTML = country[x].state;
  sel.value  = country[x].state;
  document.getElementById("state").appendChild(sel);
}
}