/* faire appel à l'api */
const url = `http://localhost:3000/api/products`;
let items = document.querySelector('#items');


fetch(url).then((res) =>
  res.json().then((data) => {
    //console.log(data[0]._id);

    /* creation d'une boucle */
    for (let i = 0; i < data.length; i++) {
      /* Creation de Anchors enfant de section */
      items.appendChild(document.createElement('a'));
      let anchorNbr = document.querySelectorAll('#items a')[i];
      anchorNbr.setAttribute('href', `./product.html?id=${data[i]._id}`)

      /* Création des Articles */     
      anchorNbr.appendChild(document.createElement('article'));
      let articleNbr = document.querySelectorAll('#items a article')[i];

      /* Creation des images, title H3 et paragraphe */ 
      articleNbr.appendChild(document.createElement('img'));
      articleNbr.appendChild(document.createElement('h3'));
      articleNbr.appendChild(document.createElement('p'));
      let imgNbr = document.querySelectorAll('#items img')[i];
      let titleNbr = document.querySelectorAll('#items h3')[i];
      let paragraphNbr = document.querySelectorAll('#items p')[i];

      /* Définition du contenu & attributs */
      imgNbr.setAttribute('src', data[i].imageUrl);
      imgNbr.setAttribute('alt', data[i].altTxt);
      titleNbr.setAttribute('class', data[i].name);
      titleNbr.textContent = data[i].name;
      paragraphNbr.textContent = data[i].description;
    }

    let itemImg = document.querySelectorAll('.item__img');
    let currentUrl = window.location.href;
    var name = url.searchParams.get("id");
    console.log(name);
  })
);




