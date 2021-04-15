/* const togglediv = document.getElementsByClassName('toggle')[0];
const btn = document.getElementsByClassName('menubtn')[0];


btn.addEventListener('click',()=>{
togglediv.classList.toggle('hidden');
}) */



const button = document.getElementsByClassName('morecode')[0];
const newdiv = document.getElementsByClassName('pcard')[0];


button.addEventListener('click',()=>{
    newdiv.classList.toggle('hidden');
    if(newdiv.classList.contains('hidden')){
        button.innerHTML = 'More Code';

    } else {button.innerHTML = 'Less Code'}
    
})



const vbutton = document.getElementsByClassName('morevideo')[0];
const newvid = document.getElementsByClassName('vcard')[0];


vbutton.addEventListener('click',()=>{
    newvid.classList.toggle('hidden');
    if(newvid.classList.contains('hidden')){
        vbutton.innerHTML = 'More Videos';

    } else {vbutton.innerHTML = 'Less Videos'}
    
})
