 const listItem = [
    {
        title: "Audi A1",
        describe:
            "Inspirée des modèles mythiques qui ont forgé l’histoire d’Audi en compétition automobile, la deuxième génération de l’Audi A1 est plus athlétique que jamais. La petite citadine embarque les technologies des plus grandes.",
        image: "./img/AudiS1.png",
        bgColor: "#1f1e1e",
        target: "22 280",
        housing: "191",
        movement: "95 ch",
        attack: "Citadine",
        training: "Essence",
    },
    {
        title: "Audi A3",
        describe:
            "Avec son ambiance intérieure sportive et son cockpit connecté, la compacte iconique Audi A3 vous offre un plaisir de conduite inégalé.",
        image: "./img/AudiA3.png",
        bgColor: "#1f1e1e",
        target: "33 255",
        housing: "222",
        movement: "150 ch",
        attack: "Citadine",
        training: "Essence",
    },
    {
        title: "Audi RS3",
        describe:
            "L’Audi RS 3 Sportback délivre une intensité impressionnante sur toute la ligne. Son design puissant et sa dynamique de conduite exceptionnelle.",
        image: "./img/Audi RS3.png",
        bgColor: "#1f1e1e",
        target: "62 586",
        housing: "250",
        movement: "400 ch",
        attack: "Citadine",
        training: "Essence",
    },
    {
        title: "Audi RS6",
        describe:
            "Conçue pour un confort inégalé sur les longs trajets et pour une expérience de conduite dynamique, l’Audi RS 6 Avant dévoile ses multiples facettes via l’Audi drive select.",
        image: "./img/Audi RS6.png",
        bgColor: "#1f1e1e",
        target: "139 490",
        housing: "250",
        movement: "600 ch",
        attack: "Citadine",
        training: "Essence",
    },
    {
        title: "Audi RS7",
        describe:
            "La transmission intégrale quattro avec différentiel Sport couplée aux roues arrière directrices apporte souplesse et agilité en toutes conditions.",
        image: "./img/Audi RS7.png",
        bgColor: "#1f1e1e",
        target: "145 850",
        housing: "250",
        movement: "600 ch",
        attack: "Citadine",
        training: "Essence",
    },
];

const backgroundWrapper = document.querySelector(".carousel-bg-wrapper");
for (let i = 0; i < listItem.length; i++) {
    backgroundWrapper.innerHTML += `
        <img src="${listItem[i].image}" alt="" class="carousel-bg" />
    `;
}

const contentWrapper = document.querySelector(".content-wrapper");
for (let i = 0; i < listItem.length; i++) {
    contentWrapper.innerHTML += `
    <div class="content">
    <h1 class="name" style="--i: 0">${listItem[i].title}</h1>
    <div class="describe" style="--i: 1">
        <p>
            ${listItem[i].describe}
        </p>
    </div>
        <ul class="properties" style="--i: 2">
            <li>
                <span class="icon">
                    <img src="./icon/prix.png" alt="" />
                </span>
                <span>Prix</span>
                <span>${listItem[i].target}</span>
            </li>   
            <li>
                <span class="icon">
                    <img src="./icon/vmax.png" alt="" />
                </span>
                <span>Vitesse max</span>
                <span>${listItem[i].housing}</span>
            </li>
            <li>
                <span class="icon">
                    <img src="./icon/puissance.png" alt="" />
                </span>
                <span>Puissance</span>
                <span>${listItem[i].movement}</span>
            </li>
            <li>
                <span class="icon">
                    <img src="./icon/categorie.png" alt="" />
                </span>
                <span>Categorie</span>
                <span>${listItem[i].attack}</span>
            </li>
            <li>
                <span class="icon">
                    <img src="./icon/carburant.png" alt="" />
                </span>
                <span>Carburant</span>
                <span>${listItem[i].training}</span>
            </li>
        </ul>
        <button style="--i: 3">Plus</button>
    </div>
    `;
}

const slide = document.querySelector(".slide-wrapper .slide");
for (let i = 0; i < listItem.length; i++) {
    slide.innerHTML += `
        <div class="item-wrapper">
        <div class="item" style="--bg: ${listItem[i].bgColor}">
            <img src="${listItem[i].image}" alt="" />
        </div>
        </div>
    `;
}

const indicatorNumbers = document.querySelectorAll(
    ".carousel-indicators .number"
);
const contents = document.querySelectorAll(".content");
const items = document.querySelectorAll(".slide .item-wrapper");
const backgrounds = document.querySelectorAll(".carousel-bg");
const prev = document.querySelector(".carousel-control .prev");
const next = document.querySelector(".carousel-control .next");

let currentIndex = 0;
const setActive = (index) => {
    currentIndex = index;
    if (currentIndex == 0) {
        prev.disabled = true;
    } else prev.disabled = false;

    if (currentIndex == items.length - 1) {
        next.disabled = true;
    } else next.disabled = false;

    indicatorNumbers.forEach((number) => {
        number.classList.remove("active");
    });
    indicatorNumbers[currentIndex].classList.add("active");

    contents.forEach((content) => {
        content.classList.remove("active");
    });
    contents[currentIndex].classList.add("active");

    items.forEach((item) => {
        item.classList.remove("active");
    });
    items[currentIndex].classList.add("active");

    backgrounds.forEach((background) => {
        background.classList.remove("active");
    });
    backgrounds[currentIndex].classList.add("active");
};

setActive(currentIndex);

prev.addEventListener("click", () => {
    currentIndex--;
    slide.style = `--i: ${currentIndex}`;
    setActive(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex++;
    slide.style = `--i: ${currentIndex}`;
    setActive(currentIndex);
});
