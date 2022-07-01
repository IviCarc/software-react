let carrouselDiv = document.querySelectorAll('.grande');
let imagenActual = 0;

// array de arrays, cada uno representará uno de los carrousels y dentro, el primer item representará los childs de este carrousel
// y el segundo la imagen actual
let carrouselChilds = []

for (let i = 0; i < carrouselDiv.length; i++) {
    carrouselChilds.push([carrouselDiv[i].childElementCount, 0])
    
    let divGrandeWidth = 100 * carrouselChilds[i][0]
    carrouselDiv[i].style.width = `${divGrandeWidth}%`
    
    let desplazamiento = 100 / carrouselChilds[i][0];

    // Evento para el botón que navega hacia atrás

    carrouselDiv[i].previousElementSibling.addEventListener('click', () => {
        carrouselSelectBtns[carrouselChilds[0][1]].classList.remove('btn-active')
        
        if (carrouselChilds[i][1] == 0) {
            carrouselChilds[i][1] = carrouselChilds[i][0] - 1
        } else {
            carrouselChilds[i][1] -= 1;
        }
        
        let transform = -carrouselChilds[i][1] * desplazamiento;
        carrouselDiv[i].style.transform = `translate3d(${transform}%, 0px, 1000px)`;
        carrouselSelectBtns[carrouselChilds[0][1]].classList.add('btn-active')
    })

    // Evento para el botón que navega hacia adelante

    carrouselDiv[i].nextElementSibling.addEventListener('click', () => {
        carrouselSelectBtns[carrouselChilds[0][1]].classList.remove('btn-active')
        
        if (carrouselChilds[i][1] == carrouselChilds[i][0] - 1) {
            carrouselChilds[i][1] = 0
        } else {
            carrouselChilds[i][1] += 1;
        }
        
        let transform = -carrouselChilds[i][1] * desplazamiento;
        carrouselDiv[i].style.transform = `translate3d(${transform}%, 0px, 1000px)`;
        carrouselSelectBtns[carrouselChilds[0][1]].classList.add('btn-active')
    })

}

// Botones chiquitos del slider principal
let carrouselSelectBtns = document.querySelectorAll('.carrousel-select-btn'); // Botones pequeños

carrouselSelectBtns[carrouselChilds[0][1]].classList.add('btn-active') // Siempre setea la primera foto como activa

for (let i = 0; i < carrouselSelectBtns.length; i++) {
    carrouselSelectBtns[i].addEventListener('click', () => {
        carrouselSelectBtns[carrouselChilds[0][1]].classList.remove('btn-active');
        carrouselChilds[0][1] = i
        console.log(carrouselChilds[0][1])
        imagenActual = i
        let transform = -imagenActual * 25;
        carrouselDiv[0].style.transform = `translate3d(${transform}%, 0px, 1000px)`;
        carrouselSelectBtns[i].classList.add('btn-active')
    })
}


// Evento hover para las cards 
let cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", () => {
        cards[i].classList.remove("hidden")
        cards[i].classList.add("active")
    })
    cards[i].addEventListener("mouseout", () => {
        cards[i].classList.add("hidden")
        cards[i].classList.remove("active")
    })
}

// Tamaño de la categoria barra de búsqueda

let select = document.getElementById('categorias');
let optionsEl = document.querySelectorAll('.cat-opcion');

let selectedOpt = optionsEl[select.selectedIndex];
    let optionLength = selectedOpt.textContent.length * parseInt(window.getComputedStyle(selectedOpt).fontSize.slice(0,7) ) + 20
    select.style.width =   `${optionLength}px`

select.addEventListener('click', () => {
    let selectedOpt = optionsEl[select.selectedIndex];
    let optionLength = selectedOpt.textContent.length * parseInt(window.getComputedStyle(selectedOpt).fontSize.slice(0,7)) + 20
    console.log(optionLength)
    select.style.width =  `${optionLength}px`
})

// Boton header

document.querySelector('.responsive-nav-container').addEventListener('click', () => {
    document.querySelector('.header-items-container').classList.toggle('active');
})


// Chequear si la pag cargó

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        
        // Tamaño container cards para animación 
        let cardHeight = document.querySelector('.card').clientHeight;
        let pHeight = document.querySelector('.card-description').clientHeight;
        let relativeContainerHeight = cardHeight + pHeight * 3.5;
        document.documentElement.style.setProperty('--extra-info-height',  `${pHeight*2}px`);
        document.documentElement.style.setProperty('--relative-container-height',  `${relativeContainerHeight}px`);
        

        // Correcto centrado del botón en las cards
        document.documentElement.style.setProperty('--cards-btns-transform',  `translateY(-${relativeContainerHeight - cardHeight - 20}px)`);
    }
    
  });