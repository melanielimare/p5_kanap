const url = `http://localhost:3000/api/products`;


const imageUrl = document.getElementById('img');
let id = new URL(window.location.href).searchParams.get("id");
let name = document.getElementById('title');
let price = document.getElementById('price');
let description = document.getElementById('description');
let colors = document.getElementById('colors');

let items = document.querySelector('#items');

fetch(`http://localhost:3000/api/products/`+id)
.then((res) =>
  res.json().then((data) => {
     
      let name = document.querySelectorAll('#items title');
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
    
      
      let imageUrl = document.querySelector('.item__img');
      
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

  const colors = document.querySelector("#colors").value
  const quantity = document.querySelector("#quantity").value
  /*const image = document.querySelector("#img").value */
 
  const title = document.querySelector("h1#title").value
  let id = new URL(window.location.href).searchParams.get("id");
  const cart = {
    color: colors,
    quantity: quantity,
    name: "test",
  }

  localStorage.setItem("cart",JSON.stringify(cart))

if (colors == null || colors === ""|| quantity ===""){
  alert ("please select a color and quantity")
  return
}
/* 
  const data = {
    id : id,
    image : imageUrl,
    colors : colors,
    quantity  : quantity,
    name : name,
  }
  

 
 let cart = JSON.parse(localStorage.getItem("cart"))
 const globalCart = {
   ...cart.data
 }

 
*/
window.location.href= "cart.html"
});





  



