document.querySelector('.card').addEventListener('mouseover', news)

document.querySelector('.card').addEventListener('mouseleave', out)

function  news(){       document.querySelector('.image').style.animation = "slideup 0.7s forwards "
document.querySelector('.info').style.animation = "textIn 0.7s forwards"
}

function  out(){ document.querySelector('.image').style.animation = "slidedown 0.7s forwards"
document.querySelector('.info').style.animation = "textOut 0.7s forwards"
}