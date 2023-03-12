
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const selects = $$('.selectCar')
const options = $$('.options')

selects.forEach((tab, index) => {
    const option = options[index]

    tab.onclick = function () { 
        $('.options.erase').classList.remove('erase');
        $('.selectCar.active').classList.remove('active');

        this.classList.add('active')
        option.classList.add('erase')
    }
});

/**================================================================================== */

