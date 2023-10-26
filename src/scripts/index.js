import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("humberger-menu");
    const navList = document.querySelector(".nav__list");
  
    hamburger.addEventListener("click", function (event) {
      event.stopPropagation(); 
      navList.classList.toggle("open");
    });
  
    document.addEventListener("click", function (event) {
      if (!navList.contains(event.target) && event.target !== hamburger) {

        navList.classList.remove("open");
      }
    });
  });


console.log('Hello Coders! :)');
import (`../DATA.json`).then(({default: DATAjson}) => {
    const content = DATAjson.restaurants;
    let listContent = ``;
    content.forEach(function (data) {
        listContent += `
        <div class="item">
            <div>
                <img class="itemPicture" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            </div>
            <p class="itemCity">${data.city}</p>
            <div class="itemDesc">
                <h1><a href="#">${data.name}</a></h1>
                <div>
                    <p>${data.description.slice(0, 150)}...</p>
                </div>
                <p class="itemRating">Rating: <a href="#">${data.rating} ⭐</a></p>
            </div>
        </div>`
    })
    document.querySelector('#mainItem').innerHTML = listContent;
})