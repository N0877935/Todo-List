function pageLoaderDiv(id) {
    const changePanel = document.createElement('div');
    changePanel.setAttribute('id', id);

    return changePanel;
}


function pageLoader(){

    const tabContent = document.querySelector('.tab-content');
    const newContent = pageLoaderDiv('newDiv');
    tabContent.appendChild(newContent);

}

export default pageLoader;