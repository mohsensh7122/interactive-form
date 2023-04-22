const nameInput = document.querySelector('.js-input-name');
const otherRole = document.querySelector('.js-other-job-role');
const selectJobRole = document.querySelector('.js-job-role');
const colorMenu = document.querySelector('.js-color-menu');
const designMenu = document.querySelector('.js-design-menu');
const jsPunOption = document.querySelector('[value="js puns"]');
const jsHeartOption = document.querySelector('[value="heart js"]');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const jsHearts = document.querySelectorAll('[data-theme="heart js"]');

// Focuses on the name input once the page loads
nameInput.focus();


/** The "Job Role" section **/

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


/** The "T-Shirt Info" section **/

// disables the color select menu until the user selects the t-shirt design first

colorMenu.disabled = true;

designMenu.addEventListener('change', e => {
    // enables the color menu once the user selects a design option

    colorMenu.disabled = false;

    // if the user selects the js puns optioin, it shows only the colors associated with the design and hides the rest
    if (e.target.value.toLowerCase() === 'js puns'){
        jsHearts.forEach(jsHeart => {
            jsHeart.style.display = 'none';
        })

        jsPuns.forEach(jsPun => {
            jsPun.style.display = 'block';
        })
        
    } else {

        // if the user selects the js hearts optioin, it shows only the colors associated with the design and hides the rest

        jsPuns.forEach(jsPun => {
            jsPun.style.display = 'none';
        })

        jsHearts.forEach(jsHeart => {
            jsHeart.style.display = 'block';
        })
    }
})
