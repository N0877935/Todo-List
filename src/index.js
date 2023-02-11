import pageLoader from "./Functions/pageLoader";
import inbox from "./Pages/inbox";

load();


const inboxBtn = document.getElementById('project');
inboxBtn.addEventListener('click', inbox);

function load() {
    pageLoader();
    inbox();
}