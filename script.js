
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");
let nav = document.querySelectorAll(".nav-list")


/*for(let i=0; i<nav.length; i++){
    nav[i].addEventListener('click', function(){
        for(let j=0; j<nav.length; j++){
            nav[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}*/


for(let i=0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k=0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter =='all'){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the active class from the current active link
    document.querySelector('.nav-list a.active').classList.remove('active');
    
    // Add the active class to the clicked link
    link.classList.add('active');
  });
});
