import './lesson_9_hw.scss';

function svetofor () {
    const svet = document.querySelector('svet');
    console.log(svet);

    function svetoforActive () {
        svet.classList.add('svet_active');
    }

    svet.addEventListener('click', svetoforActive);
}

svetofor();