const open = document.querySelector('#open-btn')

const menu = document.querySelector('.menu')

const menuItems = document.querySelector('.contain')

const close = document.querySelector('#close-btn')


openMenu = function(){
    console.log('open')
    menu.classList.add('show')
    menuItems.classList.add('display')
}


closeMenu = function(){
    menu.classList.remove('show')
    menuItems.classList.remove('display')
}
// window.addEventListener('keydown', function(key){
//     console.log(key)
// })

open.addEventListener('click', openMenu)

close.addEventListener('click', closeMenu)



