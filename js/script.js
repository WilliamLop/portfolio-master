let swiper = new Swiper(".my-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    loop: true, // Habilitar el bucle

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    }

});
let swiper2 = new Swiper(".my-swiper2", {
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    loop: true, // Habilitar el bucle

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    }

});

const removeActiveElements = (selector) => {
    const linksActive = document.querySelectorAll(`.${selector}`);

    if (linksActive.length) {
        linksActive.forEach(linksActive => {
            linksActive.classList.remove(selector);
        });
    }
}
let currentActiveItem = 0;
const cardProject = document.querySelectorAll('.project__card');
const links = document.querySelectorAll('.projects__link');

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        removeActiveElements('projects__link--active');
        link.classList.add('projects__link--active');

        currentActiveItem = index;
        
        cardProject.forEach((card, indexCard) => {
            if(indexCard === index){
                removeActiveElements('project__card--show');
                card.classList.add('project__card--show');
            }
        });

    });
    link.addEventListener('mouseover', (e) => {
        e.preventDefault();
        removeActiveElements('projects__link--active');
        link.classList.add('projects__link--active');
    });
    link.addEventListener('mouseout', (e) => {
        e.preventDefault();
        removeActiveElements('projects__link--active');
        const currentLink = links[currentActiveItem];
        currentLink.classList.add('projects__link--active');
    });
});



