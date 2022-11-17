/* Listing des articles dans le localStorage pour le panier */

let cart = JSON.parse(localStorage.getItem("cartObject"));

let articles = document.querySelector("#cart__items");
let totalPrice = document.querySelector("#totalPrice");
let totalQuantity = document.querySelector("#totalQuantity");
let totalArticlesPrice = 0;
let totalArticlesQuantity = 0;

async function showCart()
{

  for (let i=0; i<cart.length; i++)
  {
      let price = await getProductPriceById(cart[i].id);

      totalArticlesQuantity += parseInt(cart[i].quantity);
      totalArticlesPrice += parseInt(cart[i].quantity * price);      

      let article = `<article class="cart__item" data-id="${cart[i].id}" data-color="${cart[i].color}">
                  <div class="cart__item__img">
                    <img src="${cart[i].imageUrl}" alt="${cart[i].altTxt}">
                  </div>
                  <div class="cart__item__content">
                    <div class="cart__item__content__description">
                      <h2>${cart[i].name}</h2>
                      <p>Vert</p>
                      <p>${price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input  data-id="${cart[i].id}" data-color="${cart[i].color}" type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantity}">
                      </div>
                      <div class="cart__item__content__settings__delete">
                        <p  data-id="${cart[i].id}" data-color="${cart[i].color}" class="deleteItem">Supprimer</p>
                      </div>
                    </div>
                  </div>
                </article>`;

    articles.innerHTML += article;

    totalPrice.innerHTML = totalArticlesPrice;
    totalQuantity.innerHTML = totalArticlesQuantity;

    updateQuantity();
    deleteItemCard();

  }
}
/* on appelle la fonction qui rempli la page */
showCart();

/* On récupère le prix de l'article suivant son id dans la l'API avec l'artId */
async function getProductPriceById(artId) {
  return fetch("http://localhost:3000/api/products/")
      .then(function (res) {
          return res.json();
      })
      .catch((err) => {
          /* Une erreur est survenue */
          console.log("erreur");
      })
      .then((response) => {
          for (let i=0; i<response.length; i++)
          {                         
              if (response[i]._id == artId)
              {                
                return response[i].price;
              }
          }          
      });
}

/* Mise à jour de la quantité de l'article */
function updateQuantity() {
  const quantityInputs = document.querySelectorAll(".itemQuantity");
  quantityInputs.forEach((quantityInput) => {
      quantityInput.addEventListener("change", (event) => {   
          event.preventDefault();          
          const inputValue = event.target.value;
          const dataId = event.target.getAttribute("data-id");
          const dataColor = event.target.getAttribute("data-color");
          let cartItems = localStorage.getItem("cartObject");
          let items = JSON.parse(cartItems);

          items = items.map((item, index) => {              
              if (item.id === dataId && item.color === dataColor) {
                  item.quantity = inputValue;                  
              }
              return item;
          });

          if (inputValue > 100 || inputValue < 1) {
              alert("La quantité doit etre comprise entre 1 et 100");
              return;
          }
          let itemsStr = JSON.stringify(items);
          localStorage.setItem("cartObject", itemsStr);
          updateCart();          
      });
  });
}

/* Suppression de l'article choisi */
function deleteItemCard() {
  let cartItem = JSON.parse(localStorage.getItem("cartObject")); 
  const deleteButtons = document.querySelectorAll(".deleteItem");
  deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", (event) => {
          event.preventDefault();
          const deleteId = event.target.getAttribute("data-id");
          const deleteColor = event.target.getAttribute("data-color");
          cartItem = cartItem.filter(
              (element) => !(element.id == deleteId && element.color == deleteColor)
          );          
          deleteConfirm = window.confirm(
              "Etes vous sûr de vouloir supprimer cet article ?"
          );
          if (deleteConfirm == true) {
              localStorage.setItem("cartObject", JSON.stringify(cartItem));
              alert("Article supprimé avec succès");
          }

          const card = deleteButton.closest(".cart__item");
          card.remove();    
          updateCart();

          const deleteKanap = JSON.parse(localStorage.getItem("cartOject"));
          if (!deleteKanap) {
              localStorage.removeItem("cartObject");
              alert('Panier vide, retour à l\'accueil.');
              window.location.href = "index.html";
          }
      });

  });
}

/* Mise à jour du panier dynamique */
async function updateCart() {
  let cartItem = JSON.parse(localStorage.getItem("cartObject"));
  let totalQuantity = 0;
  let totalPrice = 0;
  
  for (i = 0; i < cartItem.length; i++) 
  {      
      let price = await getProductPriceById(cart[i].id);
      totalQuantity += parseInt(cartItem[i].quantity);
      totalPrice += parseInt(price * cartItem[i].quantity);                  
  }
  
  console.log(totalPrice);

  document.getElementById("totalQuantity").innerHTML = totalQuantity;
  document.getElementById("totalPrice").innerHTML = totalPrice;
}
let order = document.getElementById("order");
order.addEventListener("click", (e) => {
    e.preventDefault();
    /* création d'un tableau afin de récuperer les données de l'utilisateur */
    let contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
    };

    if (
        firstName.value === "" ||
        lastName.value === "" ||
        address.value === "" ||
        city.value === "" ||
        email.value === ""
    ) {
        alert("Vous devez renseigner vos coordonnées pour passer la commande !");
        Sélectionnez
        
        function validate(){
          var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
          var nameRegex = /^([a-zA-Z ]){2,30}$/;
          var adressRegex = /^[a-zA-Z0-9]*$/; 
          var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;     
        }  
       
    }  if (
        nameRegex.test(firstName.value) == false ||
        nameRegex.test(lastName.value) == false ||
        adressRegex.test(address.value) == false ||
        nameRegex.test(city.value) == false ||
        emailRegex.test(email.value) == false
    ) {
        alert("Merci de renseigner correctement vos coordonnées !");
    } else {
        let products = [];
        itemsInLocalStorage.forEach((order) => {
            products.push(order.id);
        });

        let pageOrder = {
            contact,
            products
        };
     
      
        /* Appel à l'api order pour envoyer les tableaux */
        fetch("http://localhost:3000/api/products/order", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(pageOrder),
        })
            .then((res) => {
                return res.json();
            })
            .then((confirm) => {
                window.location.href = "./confirmation.html?orderId=" + confirm.orderId;
                localStorage.clear();
            })
            .catch((error) => {
                console.log("une erreur est survenue");
            });
    }
    
});
