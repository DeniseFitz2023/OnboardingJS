//window.onload = populateSelect();

function populateCountrySelect() {
  let dropdown = document.getElementById('country-select');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Country';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  const url = 'https://xc-countries-api.fly.dev/api/countries/';

  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      let option;
      for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].code;
        dropdown.add(option);
      }
    } else {
      // Reached the server, but it returned an error
    }
  }

  request.onerror = function () {
    console.error('An error occurred fetching the JSON from ' + url);
  };

  request.send();
}

// Make one function with (url, dropdown)
function populateStateSelect(countryCode) {
  let dropdown = document.getElementById('state-select');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose a State';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;
 
  const url = 'https://xc-countries-api.fly.dev/api/countries/' + countryCode;

  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      let option;
      for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].code;
        dropdown.add(option);
      }
    } else {
      // Reached the server, but it returned an error
    }
  }

  request.onerror = function () {
    console.error('An error occurred fetching the JSON from ' + url);
  };

  request.send();
}

function getCountrySelecction() {
  selectElement = document.querySelector('#country-select');
  return selectElement.value;
}

function fetchExample() {
  let dropdown = document.getElementById('locality-dropdown');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose State/Province';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  const url = 'https://api.myjson.com/bins/7xq2x';

  fetch(url)
    .then(
      function (response) {
        if (response.status !== 200) {
          console.warn('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response  
        response.json().then(function (data) {
          let option;

          for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].abbreviation;
            dropdown.add(option);
          }
        });
      }
    )
    .catch(function (err) {
      console.error('Fetch Error -', err);
    });
}