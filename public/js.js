/* const togglediv = document.getElementsByClassName('toggle')[0];
const btn = document.getElementsByClassName('menubtn')[0];


btn.addEventListener('click',()=>{
togglediv.classList.toggle('hidden');
}) */



const button = document.getElementById('morecode');
const newdiv = document.getElementsByClassName('pcard')[0];


button.addEventListener('click',()=>{
    newdiv.classList.toggle('hidden');
    if(newdiv.classList.contains('hidden')){
        button.innerText = 'More Code';

    } else {button.innerText = 'Less Code'}
    
})



const vbutton = document.getElementById('morevideo')    ;
const newvid = document.getElementsByClassName('vcard')[0];


vbutton.addEventListener('click',()=>{
    newvid.classList.toggle('hidden');
    if(newvid.classList.contains('hidden')){
        vbutton.innerHTML = 'More Videos';

    } else {vbutton.innerHTML = 'Less Videos'}
    
})
