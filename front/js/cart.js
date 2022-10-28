
console.log(localStorage);
const cart = localStorage;
const id = document.createElement("cart");
const nameElement = document.createElement("h2");
const paragraphe = document.createElement("p");

nameElement.innerText = name.kanap;
const article = document.createElement("cart__item");
const imageElement = document.createElement("img");
/*ImageUrl.src = image; */

    // Récupération de l'élément 
    const Cart = document.createElement("article");
    const Paragraphe = window.localStorage.getItem('#items price');
    const Option = window.localStorage.getItem('#items colors');
    const ImageUrl = window.localStorage.getItem("cart__item__img");
    const Value = window.localStorage.getItem("#quantity");

    // Création d’une balise dédiée
   article.appendChild(document.createElement("cart__item__content__description"));

   const cartItem  = document.querySelector('.cart');
   cartItem .appendChild(nameElement);
 
  /* Affichez plusieurs fiches produits grâce à la boucle for */
  for (let i = 0; i < cart.length; i++) {
    // Récupération de l'élément du DOM qui accueillera les produit
    const productFiches = document.querySelector(".cart");

    // Création d’une balise dédiée à un article
    const cartElement = document.createElement("article");

    // On crée l’élément img.
    const imageElement = document.createElement("img");
    // On accède à l’indice i de la liste produit pour configurer la source de l’image.
    /*imageElement.src = cart[i].imageUrl;*/
    // On rattache l’image à cartElement (la balise article)
    cartElement.appendChild(imageElement);

   // On crée l’élément name (nom du produit)
   const nameElement = document.createElement("h2");
   // On accède à l’indice i de la liste produit pour configurer la source du name.
   nameElement.src = cart[i].name;
   // On rattache le name à cartElement (la balise article)
   cartElement.appendChild(nameElement); 
  
    // On crée l’élément color 
    const option = document.createElement("p");
    // On accède à l’indice i de la liste produit pour configurer la source de la couleur.
     colorElement.src = cart[i].color;
    // On rattache la couleur à cartElement (la balise article)
    cartElement.appendChild(colorElement);
 
   // On crée l’élément prix 
   const paragraphe = document.createElement("p");
   // On accède à l’indice i de la liste produit pour configurer la source du prix.
    priceElement.src = cart[i].price;
   // On rattache le prix à cartElement (la balise article)
   cartElement.appendChild(priceElement);

    // On rattache la balise article au body
    document.body.appendChild(cartElement);
    console.log(nameElement); 
    console.log(colorElement); 
}



  /* <!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
   <div class="cart__item__img">
     <img src="../images/product01.jpg" alt="Photographie d'un canapé">
   </div>
   <div class="cart__item__content">
     <div class="cart__item__content__description">
       <h2>Nom du produit</h2>
       <p>Vert</p>
       <p>42,00 €</p>
     </div>
     <div class="cart__item__content__settings">
       <div class="cart__item__content__settings__quantity">
         <p>Qté : </p>
         <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
       </div>
       <div class="cart__item__content__settings__delete">
         <p class="deleteItem">Supprimer</p>
       </div>
     </div>
   </div>
 </article> */