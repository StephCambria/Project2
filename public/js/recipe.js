var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // const apiKey = "1087b1d9dd91449b9315698f7cc25850";
  // var requestUrl = "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert?apikey=1087b1d9dd91449b9315698f7cc25850";


  fetch("https://api.spoonacular.com/recipes/random?apikey=1087b1d9dd91449b9315698f7cc25850&number=1&tags=vegetarian,dessert")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.title);
    })
    .then(data => {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    })
    .catch((error) => {
      console.log(error)
    });
}

fetchButton.addEventListener('click', getApi);