function display(buttonId, blockId) {
    var button = document.getElementById(buttonId);
    var correction = document.getElementById(blockId);
    if (correction.classList.contains('hide')) {
        correction.classList.remove('hide');
        button.innerHTML = "<i class=\"far fa-eye-slash\"></i> Cacher la correction"
        return;
    }
    correction.classList.add('hide');
    button.innerHTML = "<i class=\"fas fa-search\"></i> Montrer la correction"
}

function displayBlockClass(buttonId, blockClass) {
    let button = document.getElementById(buttonId);
    let correction = document.getElementsByClassName(blockClass);
    if (correction[0].classList.contains('hide')) {
        for (let i = 0;i < correction.length; i++) {
            correction[i].classList.remove('hide');
        }
        button.innerHTML = "<i class=\"far fa-eye-slash\"></i> Cacher la correction"
        return;
    }
    for (let i = 0;i < correction.length; i++) {
        correction[i].classList.add('hide');
    }
    button.innerHTML = "<i class=\"fas fa-search\"></i> Montrer la correction"
}