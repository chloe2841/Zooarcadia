document.addEventListener("DOMContentLoaded", function() {
    const animals = [
        { name: "Tigre", habitat: "jungle", image: "/images/tigre.jpg" },
        { name: "Lion", habitat: "savane", image: "/images/lion.jpg" },
        { name: "Poisson", habitat: "marais", image: "/images/poisson.jpg" },
        // Ajoutez d'autres animaux avec leur habitat et image
    ];

    const gallery = document.getElementById("gallery");
    const filters = document.querySelectorAll(".filter-button");

    function displayAnimals(animalList) {
        gallery.innerHTML = ""; // Efface les images précédentes

        animalList.forEach(animal => {
            const img = document.createElement("img");
            img.src = animal.image;
            img.alt = animal.name;
            gallery.appendChild(img);
        });
    }

    function filterAnimals(habitat) {
        if (habitat === "all") {
            displayAnimals(animals);
        } else {
            const filteredAnimals = animals.filter(animal => animal.habitat === habitat);
            displayAnimals(filteredAnimals);
        }
    }

    filters.forEach(filter => {
        filter.addEventListener("click", function() {
            const habitat = this.getAttribute("data-habitat");
            filterAnimals(habitat);
        });
    });

    // Afficher tous les animaux au chargement initial
    displayAnimals(animals);
});

