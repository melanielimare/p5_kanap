const url = `http://localhost:3000/api/products`;

console.log(url);
const imageUrl = document.getElementById('img');
const id = new URL(window.location.href).searchParams.get("id");
console.log(id);
const name = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const colors = document.getElementById('colors');

let items = document.querySelector('#items');

fetch(`http://localhost:3000/api/products/`+id)
.then((res) =>
  res.json().then((data) => {
    console.log(data);
    /* console.log(name);
     console.log(price);
     console.log(description); */
    
      let Name = document.querySelectorAll('#items title');
      title.setAttribute('class', data.name);
      title.textContent = data.name; /* affiche 1 titre */

      let paragraphe = document.querySelectorAll('#items price');
      price.setAttribute('class', data.price);
      price.textContent = data.price; /* affiche 1 prix */

      let description__title = document.querySelectorAll('#items description');
      description.setAttribute('class', data.description);
      description.textContent = data.description; /* affiche 1 description */
    
      let option = document.querySelectorAll('#items colors'); 
      colors.setAttribute('class', data.colors);
      data.colors.forEach(c => {
        colors.innerHTML += `<option value="${c}">${c}</option>`
      });
      console.log(colors); /* affiche les couleurs */
      
      let imageUrl = document.querySelector('.item__img');
      console.log(data.imageUrl);
      imageUrl.innerHTML = `<img src="${data.imageUrl}" />`;
      /* affiche les images */
    
  })

);

function check()
{ 
    let value = document.querySelector("#quantity").value;
  
    if (value < 0 || value > 100)
      {
        alert("La valeur doit être comprise entre 0 et 100");
        document.querySelector("#quantity").value = 1;
      }
}

let button = document.querySelector("#addToCart");
button.addEventListener("click",function(){
  check();
});

 /* Creation de Anchor */
  document.getElementById('addToCart').onclick = function() {
  document.querySelector('button').setAttribute('href', `./cart.html`);  
  console.log("href");
}
