// NAV BAR CONTROLLER 
const list = document.querySelector('#nav-list')
const bar = document.querySelector('#nav-bar')

bar.addEventListener('click', ()=>{
    var display = list.style.display

    if(display == 'block'){
        list.style.display = 'none'
    }else{
        list.style.display = 'block'
    }
})

// LOADER
loader = document.querySelector('#loader')

window.addEventListener('load',()=>{
    loader.style.display = 'none'
})

// DYNAMIC HIGHLIGHTING

text1 = document.querySelector('#t-1')
text2 = document.querySelector('#t-2')
text3 = document.querySelector('#t-3')
text4 = document.querySelector('#t-4')
text5 = document.querySelector('#t-5')

var temp1_text1
var temp1_text2
var temp1_text3
var temp1_text4
var temp1_text5

var temp2_text1
var temp2_text2
var temp2_text3
var temp2_text4
var temp2_text5

var temp3_text1
var temp3_text2
var temp3_text3
var temp3_text4
var temp3_text5

var temp4_text1
var temp4_text2
var temp4_text3
var temp4_text4
var temp4_text5


function setHighlight(){
    
}