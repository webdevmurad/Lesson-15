function tabs() {
 let tab = document.querySelectorAll('.info-header-tab'),
     info = document.querySelector('.info-header'),
     tabContent = document.querySelectorAll('.info-tabcontent');

 const hideTabContent = (a) => {
     tabContent.forEach((item, key) => {
         if (key !== a) {
             item.classList.remove('show');
             item.classList.add('hide');
         }
     });
 }
 hideTabContent(0);

 const showTabContent = (b) => {
     if (tabContent[b].classList.contains('hide')) {
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
     }
 }

 info.addEventListener('click', () => {
     let target = event.target;
     if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < tab.length; i++) {
             if (target == tab[i]) {
                 hideTabContent(i);
                 showTabContent(i);
                 break;
             }
         }
     }
 });
}

module.exports = tabs;