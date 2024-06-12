// Définir la date comme étant la dernière date de modification du document.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified
const date = new Date(document.lastModified);

// Année de la dernière modification du document.
const LAST_MODIFIED_YEAR = date.getFullYear();

// Afficher la date au format suisse.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
let formattedDate = new Intl.DateTimeFormat("fr-CH", {dateStyle: "medium"})
.format(date);

document.getElementById("last-modified-date").innerText = formattedDate;
document.getElementById("last-modified-year").innerText = LAST_MODIFIED_YEAR;