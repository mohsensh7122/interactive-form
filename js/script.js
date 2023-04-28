const nameInput = document.querySelector('.js-input-name');
const emailInput = document.querySelector('.js-input-email');
const otherRole = document.querySelector('.js-other-job-role');
const selectJobRole = document.querySelector('.js-job-role');
const colorMenu = document.querySelector('.js-color-menu');
const designMenu = document.querySelector('.js-design-menu');
const jsPunOption = document.querySelector('[value="js puns"]');
const jsHeartOption = document.querySelector('[value="heart js"]');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const jsHearts = document.querySelectorAll('[data-theme="heart js"]');
const activitiesField = document.querySelector('#activities');
const paymentSelect = document.querySelector('#payment');
const creditcardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
const form = document.querySelector('form');
const ccInput = document.getElementById('cc-num');
const zipInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
let activitiesTotal = 0;

document.querySelector('#activities').addEventListener('change', e => {
    (e.target.checked) ? activitiesTotal++ : activitiesTotal--;
  });

// Used the "paypal" and "bitcoin" variables above to hide those elements initially.

paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

// Used the paymentSelect variable above to target the element’s second child element and gave it the selected property.
paymentSelect.children[1].setAttribute("selected", "selected");;



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





/** The "Register for Activities" section **/


activitiesField.addEventListener('change', e => {
    // Grabs all the checkboxes in the activities fieldset
    const checkboxes = document.querySelectorAll('.activities input');
    
    // The total cost of the activites will be initially 0
    let totalCost = 0;
    
    

    // Loops through the checkbox

    checkboxes.forEach(checkbox => {

        const checkboxCost = +checkbox.getAttribute('data-cost');
        // Checkes if the checkbox is checked and adds the cost to the total amount
        if(checkbox.checked){
            totalCost += checkboxCost;
            // Checkes if the checkbox is unchecked and deducts the cost from the total amount
            if (!checkbox.checked) {
                totalCost -= checkboxCost;
            }
        } 

        document.getElementById('activities-cost').innerHTML = `Total: $${totalCost}`
    })


})



/** The "Payment Info" section **/

paymentSelect.addEventListener('change', e => {

    const selctedOption = e.target.value;

    // Used the payment variables to listen for the change event on this element. When a change is detected, display the <div> element with the id that matches the value of the event.target element. And hide the other two <div> elements.

    creditcardDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';

    document.getElementById(`${selctedOption}`).style.display = 'block';

})




/** The "Form validation" section **/

const nameValidator = () => {

    const nameValue = nameInput.value;

    

    console.log("Name value is: ", `"${nameValue}"`);

    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    console.log(`Name validation test on "${nameValue}" evaluates to ${nameIsValid}`);

    if(!nameIsValid){
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        nameInput.parentElement.lastElementChild.style.display = 'block';
    } else {
        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
        nameInput.parentElement.lastElementChild.style.display = 'none';
    }


  return nameIsValid;


}

const emailValidator = () => {

    const emailValue = emailInput.value;

    console.log("Email value is: ", `"${emailValue}"`);

    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);
    
    if(!emailIsValid){
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailInput.parentElement.lastElementChild.style.display = 'block';
    }

    return emailIsValid;

}

const activityValidator = () => {

    const activitiesSectionIsValid = activitiesTotal > 0;
    console.log(`Activities section validation test evaluates to ${activitiesSectionIsValid}`);


    return activitiesSectionIsValid;

}

const cardValidator = () => {

    const ccValue = ccInput.value;

    console.log("CC Value is: ", `"${ccValue}"`);

    const ccIsValid = /\d{13,16}/i.test(ccValue);
    console.log(`CC validation test on "${ccValue}" evaluates to ${ccIsValid}`);
    


    return ccIsValid;
    
}


const zipCodeValidator = () => {

    const zipCodeValue = zipInput.value;

    console.log("Zip Code Value is: ", `"${zipCodeValue}"`);

    const zipcodeIsValid = /\d{5}/i.test(zipCodeValue);
    console.log(`Zip Code validation test on "${zipCodeValue}" evaluates to ${zipcodeIsValid}`);
    


    return zipcodeIsValid;
    
}


const cvvValidator = () => {

    const cvvValue = cvvInput.value;

    console.log("CVV Value is: ", `"${cvvValue}"`);


    const cvvIsValid = /\d{3}/i.test(cvvValue);
    console.log(`Zip Code validation test on "${cvvValue}" evaluates to ${cvvIsValid}`);

    return cvvIsValid;

}


form.addEventListener('submit', e => {

    nameValidator();
    emailValidator();
    activityValidator();


   

    if(creditcardDiv.style.display === 'block'){
        cardValidator();
        zipCodeValidator();
        cvvValidator();
    }
    
    if(!nameValidator() || !emailValidator() || !activityValidator() || !cardValidator() || !zipCodeValidator() || !cvvValidator()){
        e.preventDefault();
    }
})


/** Accessibility Adjustments **/


checkboxInputs.forEach(checkboxInput => {

    checkboxInput.addEventListener('focus', function(){
        checkboxInput.parentElement.classList.add('focus');
    })

    checkboxInput.addEventListener('blur', function(){
        checkboxInput.parentElement.classList.remove('focus');
    })


})

