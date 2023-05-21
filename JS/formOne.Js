let formLabels = document.querySelectorAll('.labelValid'),
    formInputs = document.querySelectorAll('.input_group'),
    formOne = document.querySelector('.signUp_form');

formOne.addEventListener('submit', function (event) {
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    event.preventDefault();

    formInputs.forEach(function (input, index) {
        if (input.value === '') {
            formLabels[index].classList.add('Inline');
            console.log('Wrong');
        } else {
            formLabels[index].classList.remove('Inline');
        }

        if (emptyInputs.length !== 0) {
            console.log('inputs are not field');
            return false;
        }

    });
});
