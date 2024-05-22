document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        // Temps en millisecondes pendant lequel l'écran de chargement reste visible après le chargement de la page
        const loadingDuration = 600;

        setTimeout(function() {
            const loadingElement = document.getElementById('loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        }, loadingDuration);
    });
});
