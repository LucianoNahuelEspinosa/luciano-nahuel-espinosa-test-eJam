const widthViewport = window.innerWidth;

//========== UPPER HEADER ==========
const upperButtons = document.querySelectorAll('.arrow-button');
const upperItems = document.querySelectorAll('.upper-item');
var indexItems = 0;

if (widthViewport <= 1024) {
    for (let i = 1; i < upperItems.length; i++) {
        upperItems[i].style.display = 'none';
    }
}

const changeUpperItems = (index) => {
    upperItems[indexItems].style.display = 'none';
    upperItems[index].style.display = 'flex';
    indexItems = index;
}

upperButtons[0].addEventListener('click', () => {
    if (indexItems > 0) {
        changeUpperItems(indexItems - 1);
    }
});

upperButtons[1].addEventListener('click', () => {
    if (indexItems < upperItems.length - 1) {
        changeUpperItems(indexItems + 1);
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
        for (let i = 1; i < upperItems.length; i++) {
            upperItems[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i < upperItems.length; i++) {
            upperItems[i].style.display = 'flex';
        }
    }
})

//==================================

//========== FOOTER ==========
const yearText = document.getElementById('year');
yearText.innerHTML = new Date().getFullYear();

//============================
