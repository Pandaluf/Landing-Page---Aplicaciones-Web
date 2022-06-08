var button = document.querySelector('.menu');
var move_up = document.querySelectorAll('.move_up')
var click_head = document.querySelector('.head-click');
//console.log(move_up);

const flagsElement = document.getElementById("flags");

flagsElement.addEventListener("click",(e)=>{
    console.log(e.target.parenElement.dataset.language);
});

button.addEventListener('click', () =>{
    click_head.classList.toggle('aparecer')
    console.log(move_up)
})
move_up.forEach(move => {
    move.addEventListener('click', () => {
        click_head.classList.toggle('aparecer')
    })
})