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



const projects = document.querySelectorAll('.work-temp')

projects.forEach(e => e.addEventListener('mouseenter', playAnim))

projects.forEach(e => e.addEventListener('mouseleave', playAnim))


function playAnim(e){
    let array = Array.from(e.target.children)

    let filtered = array.filter(function(e){
         return e.classList.length
    })
   
    filtered.push((filtered.map(function(x){
        if(x.querySelector('.icon')){
            return x.querySelector('.icon')
        }
        
    }).filter(e => {if(e){
        return e
    }
}))
    )

    filtered.flat().forEach(e => e.classList.toggle('change'))

}

//Service Box Animation

const servAnim = [
    {rotate: '0deg',  opacity: 0.5}, //Keyframe one
    {rotate : '270deg', opacity: 1} //Keyframe two
]

const servTiming = {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-in-out'
}

const loadAnim = [
    {width: '0%'},
    {width : '100%'}
]

let serviceBox = document.querySelectorAll('.service-box')

let effect = new KeyframeEffect(null, servAnim , servTiming)

let effect2 = new KeyframeEffect(null , loadAnim , servTiming)

let animation = new Animation (effect , document.timeline)

let animation2 = new Animation (effect2 , document.timeline)


serviceBox.forEach((el) => {el.addEventListener('mouseenter', function(e){
    let animTarget = e.target.querySelector('.rot-bar')

    effect.target = animTarget
    animation.play()

    let animTarget2 = e.target.querySelector('.orange')
    effect2.target = animTarget2
    animation2.play()
        })
    }
)



serviceBox.forEach((el) => {el.addEventListener('mouseleave', function(e){
    animation.pause()
    animation2.pause()
    animation.cancel()
    animation2.cancel()

        })
    }
)


const container = document.querySelector('.container')


let options = {
    threshold : .2
}

function log(e ,f ){
    console.log(e[0].isIntersecting)
    console.log(e)
    if(e[0].isIntersecting){
        container.classList.add('change')
        document.querySelector('.wrapper').style.opacity = 1
        document.querySelector('.wrapper2').style.opacity = 0
    }else{
        container.classList.remove('change')
        document.querySelector('.wrapper').style.opacity = 0
        document.querySelector('.wrapper2').style.opacity = 1
    }

    
}


let inter = new IntersectionObserver(log , options)


inter.observe(document.querySelector('.wrapper'))



