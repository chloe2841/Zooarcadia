const animalDetails = {
    lion: {
        name: "Lion",
        habitat: "Savane",
        description: "Simba Le lion. C'est un grand félin carnivore de la famille des Felidae."
    },
    serpent: {
        name: "Serpent",
        habitat: "Jungle",
        description: "Alexander le serpent. C'est un reptile sans pattes au corps allongé, couvert d'écailles, qui se déplace en ondulant. Ils appartiennent à l'ordre des Squamata et varient grandement en taille."
    },
    tigre: {
        name: "Tigre",
        habitat: "Jungle",
        description: "Rex le tigre. C'est un grand félin carnivore au pelage rayé, vivant principalement en Asie. Il est connu pour sa force, son agilité et son rôle de prédateur au sommet de la chaîne alimentaire."
    },
    poisson: {
        name: "Poisson",
        habitat: "Marais",
        description: "Léo le poisson. C'est un animal aquatique à branchies, généralement couvert d'écailles et doté de nageoires pour se déplacer dans l'eau. Ils habitent divers environnements marins et d'eau douce."
    },
    elephant: {
        name: "Elephant",
        habitat: "Savane",
        description: "Djumbo l'éléphant. C'est un mammifère terrestre de grande taille, caractérisé par sa trompe préhensile, ses défenses en ivoire et sa masse corporelle imposante. Ils sont connus pour leur intelligence, leur sociabilité et leur importance écologique dans les écosystèmes où ils vivent, principalement en Afrique et en Asie."
    },
};
function filterImages(habitat) {
    let images = document.getElementsByClassName('image-item');
    for (let i = 0; i < images.length; i++) {
        if (habitat === 'all') {
            images[i].style.display = 'block';
        } else if (images[i].classList.contains(habitat)) {
            images[i].style.display = 'block';
        } else {
            images[i].style.display = 'none';
        }
    }
}
function showDetails(animal) {
    const details = animalDetails[animal];
    const modal = document.getElementById('details-modal');
    const modalContent = document.getElementById('details-content');
    modalContent.innerHTML = `<h2>${details.name}</h2><p><strong>Habitat:</strong> ${details.habitat}</p><p><strong>Description:</strong> ${details.description}</p>`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}