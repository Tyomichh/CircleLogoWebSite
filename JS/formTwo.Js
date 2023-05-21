let formLabels = document.querySelectorAll('.labelValid'),
    formInputs = document.querySelectorAll('.input_group'),
    inputCheckbox = document.querySelector('.checkbox_inp'),
    checkboxLabels = document.querySelector('.checkbox_lab'),
    formTwo = document.querySelector('.signIn_form');

formTwo.addEventListener('submit', function (event) {
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

        if (!inputCheckbox.checked) {
            console.log('checkbox not checked');
            checkboxLabels.classList.add('Inline');
            return false;
        } else {
            checkboxLabels.classList.remove('Inline')
        }
    });
});