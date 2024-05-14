import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitat", "Habitat", "/pages/habitat.html"),
    new Route("/service", "Service", "/pages/service.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";