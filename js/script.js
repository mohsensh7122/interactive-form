const nameInput = document.querySelector('.js-input-name');
const otherRole = document.querySelector('.js-other-job-role');
const selectJobRole = document.querySelector('.js-job-role');


// Focuses on the name input once the page loads
nameInput.focus();

// Hides the other job role input initially until the user selects the option from the menu
otherRole.style.display = 'none';


// Shows the other job role input only if the user selects the option
selectJobRole.addEventListener('change', e => {;
    if (e.target.value.toLowerCase() === 'other'){
        otherRole.style.display = 'block';
    } else {
        otherRole.style.display = 'none';
    }
})