var button = document.querySelector('.menu');
var move_up = document.querySelectorAll('.move_up');
var click_head = document.querySelector('.head-click');
//console.log(move_up);

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click",(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
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