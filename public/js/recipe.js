var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  
  fetch("https://api.spoonacular.com/recipes/random?apiKey=1087b1d9dd91449b9315698f7cc25850&number=1&tags=vegetarian,dessert")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.recipes[0].title);
      console.log(data.recipes[0]);
  
        var image = data.recipes[0].image;
        var title = data.recipes[0].title;
        var spoonacularSourceUrl = data.recipes[0].spoonacularSourceUrl;
        
        document.querySelector(".image").src = image;
        document.querySelector(".title").innerText = title;
        document.querySelector(".spoonacularSourceUrl").href = spoonacularSourceUrl;

    })
    .catch((error) => {
      console.log(error)
    });
}

fetchButton.addEventListener('click', getApi);