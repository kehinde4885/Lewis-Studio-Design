let open = document.querySelector('.header')
 

logout = function(){
    console.log('here')
}

let element = document.getElementById('news').addEventListener('click', logout)

window.addEventListener('keydown', function(){
    console.log("key")
})

open.addEventListener('click', logout)

const close = document.querySelector('#close')

logout()