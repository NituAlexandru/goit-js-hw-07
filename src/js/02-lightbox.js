// Exercițiul 2 - librăria SimpleLightbox
// Creați aceeași galerie ca în prima sarcină, folosind librăria
// SimpleLightbox, care se va ocupa de procesarea click - urilor pe
// imagini, de deschiderea și închiderea unei ferestre modale și de
// listarea imaginilor, folosind tastatura.Puteți urmări filmulețul
// demonstrativ al galeriei cu biblioteca conectată.
// Modificați puțin aspectul cardului de galerie, folosind acest șablon.
// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>
// Îndepliniți acest task în fișierele 02 - lightbox.html și 02 - lightbox.js.
// Împărțiți - l în mai multe subtask - uri:
// Crearea și randarea unui marcaj pe baza datelor din matricea de date
// galleryItems și a șablonului de articol furnizat din galerie.Refolosiți
// codul scris din primul exercițiu.
// Conectarea scriptului și a stilurilor librăriei, CDN service cdnjs.
// Adăugați link - urile pentru fișierele: simple - lightbox.min.js și
// simple - lightbox.min.css.
// Inițializarea librăriei după ce elementele galeriei sunt create și
//  adăugate în ul.gallery.Pentru a face acest lucru, citiți documentația
// SimpleLightbox, secțiunile "Usage" și "Markup".
// Căutați în documentație secțiunea "Options" și adăugați un text
// sugestiv imaginei în atributul alt.Textul alternativ va fi poziționat
//  în partea de jos și va apărea la 250 de milisecunde după deschiderea
// imaginii.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Selecteaza gallery si il stocheaza in galleryContainer
const galleryContainer = document.querySelector(".gallery");

// Itereaza prin fiecare obiect din array-ul galleryItems
galleryItems.forEach((item) => {
  const galleryListItem = document.createElement("li"); //creaza un element
  galleryListItem.classList.add("gallery__item"); //adauga clasa
  // Adaugam continutul HTML
  galleryListItem.innerHTML = `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  galleryContainer.append(galleryListItem); //Adaugam elementul <li> la sfarsitul listei <ul>
});

galleryContainer.addEventListener("click", preventDefaultClick);

function preventDefaultClick(e) {
  e.preventDefault();
}

// initializeaza libraria SimpleLightbox pentru toate linkurile
const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt", // utilizeaza textul din atributul alt al img
  captionDelay: 250, // seteaza intarziere afisarii subtitlului
});

console.log(galleryLightbox);
