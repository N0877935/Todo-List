import pageLoader from "./Functions/pageLoader";
import inbox from "./Pages/inbox";

load();


const inboxBtn = document.getElementById('inbox');
inboxBtn.addEventListener('clicked', inbox);

function load() {
    pageLoader();
    inbox();
}