


// * **************************************Menu bar show**************


let navigation = document.getElementById('navigation')
let app = document.getElementById('app')
let closeBtn = document.getElementById('closeBtn')

// *********************show Menu
function openMenu() {

    navigation.classList.add('active_menu')

    app.style.display = "none"
    closeBtn.style.display = "inline-block"
}

// *******************Hide Menu
function closeMenu() {

    navigation.classList.remove('active_menu')

    app.style.display = "inline-block"
    closeBtn.style.display = "none"
}


// ***************************skills show******************

// frontend

function frontend_skills() {

    let skill_score1 = document.getElementById('skill-score1')
    let arrow_down = document.getElementById('down')
    let arrow_up = document.getElementById('up')

    skill_score1.classList.toggle('active-skill');
    arrow_down.classList.toggle('active-arrow')
    arrow_up.classList.toggle('active-arrow')

}

// backend skills


function backend_skills() {
    let skill_score = document.getElementById('skill-score2');
    let arrow_up = document.getElementById('up2');
    let arrow_down = document.getElementById('down2');

    skill_score.classList.toggle('active-skill');
    arrow_down.classList.toggle('active-arrow')
    arrow_up.classList.toggle('active-arrow')

}

// design skills
function design_skills() {
    let skill_score = document.getElementById('skill-score3');
    let arrow_up = document.getElementById('up3');
    let arrow_down = document.getElementById('down3');

    skill_score.classList.toggle('active-skill');
    arrow_down.classList.toggle('active-arrow')
    arrow_up.classList.toggle('active-arrow')

}

// *****Qualification shows


