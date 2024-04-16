const tabsNav = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));

tabsNav.forEach((item) => {
    item.addEventListener('click', switchTabs);
    function switchTabs() {
        const itemActive = document.querySelector('.tab_active');   

        itemActive.classList.remove('tab_active');
        tabsContent[tabsNav.indexOf(itemActive)].classList.remove('tab__content_active');

        item.classList.add('tab_active');
        tabsContent[tabsNav.indexOf(item)].classList.add('tab__content_active');
    }
});