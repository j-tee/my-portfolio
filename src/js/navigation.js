const listMenuNav = document.querySelector('.list-menu');
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click',()=>{
    const visibility = listMenuNav.getAttribute('data-visible')
    if(visibility==="false"){
        listMenuNav.setAttribute('data-visible', true);
        listMenuNav.setAttribute('aria-expanded', true);
    }else if(visibility==="true"){
        listMenuNav.setAttribute('data-visible', false);
        listMenuNav.setAttribute('aria-expanded', false);
    }
})