// Import localstorage
let cart = JSON.parse(window.localStorage.getItem("cartObject")) ?? [];
// récupêre les données de localStorage
const url = `http://localhost:3000/api/products`;
const cartObject = [];
console.log(cart); /*affichage des produits dans la console*/

fetch(`http://localhost:3000/api/products/`)
.then((res) =>
  res.json().then((data) => {   
    /*console.log(data);*/
    /* creation d'une boucle */
    for (let i = 0; i < data.length; i++) {
     
      /* On injecte le innerHTML dans la classe ".item" */
      cart.innerHTML =`<section class="cart">
        <article class="cart__item" data-id="${data[i]._id}"data-color="${data[i].colors}">
                <div class="cart__item__img">
                <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                  <h2 id="title">${data[i].name}</h2>
                    <p>${data[i].colors}</p>
                    <p>${data[i].price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :${data[i].quantity}</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>           
        </article>
      </section>`;
      /* On initialise notre cart, si il ne contient rien, on en fait un tableau vide */
      let currentLocalStorage = localStorage.getItem("cart") || [];
      cart.push(localStorage);

    console.log(cart.innerHTML)

  /* Est ce que l'on a déjà quelque chose dans le localStorage ? non, on quite
  if (cart.length < 1)
  {
    alert("votre panier est vide!!")
  }*/
  } })

)
     

