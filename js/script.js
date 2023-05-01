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

    const options = document.querySelectorAll('#shirt-colors option');

    colorMenu.disabled = false;

    // if the user selects the js puns optioin, it shows only the colors associated with the design and hides the rest
    if (e.target.value.toLowerCase() === 'js puns'){

        // The loop below goes through all options in the color menu if the user changes the theme and deselects all options and then selects the first default option

        for(let i = 0; i < options.length; i++){
            options[i].removeAttribute('selected', 'selected')
            options[0].setAttribute('selected', 'selected')
        }

        jsHearts.forEach(jsHeart => {
            jsHeart.style.display = 'none';
            
        })

        jsPuns.forEach(jsPun => {
            jsPun.style.display = 'block';

            
            
            
        })
        
    } else {


        // The loop below goes through all options in the color menu if the user changes the theme and deselects all options and then selects the first default option

        for(let i = 0; i < options.length; i++){
            options[i].removeAttribute('selected', 'selected')
            options[0].setAttribute('selected', 'selected')
        }

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


    // Prevents the user from selecting conflicting activities
    
    const clicked = e.target;
    const clickedTime = clicked.getAttribute('data-day-and-time');

    console.log(clicked);
    console.log(clickedTime);

    checkboxes.forEach(checkbox => {
        const checkboxType = checkbox.getAttribute('data-day-and-time');
        if (checkboxType === clickedTime && clicked !== checkbox){
          if(clicked.checked){
            checkbox.disabled = true;
            checkbox.parentElement.classList.add('disabled');
          } else {
            checkbox.disabled = false;
            checkbox.parentElement.classList.remove('disabled');
          }
        }
    });
    

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


    // Prevents users from registering for conflicting activities


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

    // If the name input is invalid, it will show the user what is wrong

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
    
    // If the email input is invalid and empty, it will let the user know what is exactly wrong
    if(!emailIsValid && emailValue == ''){
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        document.getElementById('email-hint-2').style.display = 'none';
        document.getElementById('email-hint').style.display = 'block';
    } else if (!emailIsValid){

        // If the email input is just invalid (the formatting is incorrect), it will show a different error

        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        document.getElementById('email-hint').style.display = 'none';
        document.getElementById('email-hint-2').style.display = 'block';
    } else {
        emailInput.parentElement.classList.add('valid');
        emailInput.parentElement.classList.remove('not-valid');
        emailInput.parentElement.lastElementChild.style.display = 'none';
    }

    return emailIsValid;

}

const activityValidator = () => {

    const activitiesSectionIsValid = activitiesTotal > 0;
    console.log(`Activities section validation test evaluates to ${activitiesSectionIsValid}`);

    if(!activitiesSectionIsValid){
        activitiesField.classList.add('not-valid');
        activitiesField.classList.remove('valid');
        activitiesField.lastElementChild.style.display = 'block';
    } else {
        activitiesField.classList.add('valid');
        activitiesField.classList.remove('not-valid');
        activitiesField.lastElementChild.style.display = 'none';
    }


    return activitiesSectionIsValid;

}

const cardValidator = () => {

    const ccValue = ccInput.value;

    console.log("CC Value is: ", `"${ccValue}"`);

    const ccIsValid = /\d{13,16}/i.test(ccValue);
    console.log(`CC validation test on "${ccValue}" evaluates to ${ccIsValid}`);
    
    if(!ccIsValid){
        ccInput.parentElement.classList.add('not-valid');
        ccInput.parentElement.classList.remove('valid');
        ccInput.parentElement.lastElementChild.style.display = 'block';
    } else {
        ccInput.parentElement.classList.add('valid');
        ccInput.parentElement.classList.remove('not-valid');
        ccInput.parentElement.lastElementChild.style.display = 'none';
    }


    return ccIsValid;
    
}


const zipCodeValidator = () => {

    const zipCodeValue = zipInput.value;

    console.log("Zip Code Value is: ", `"${zipCodeValue}"`);

    const zipcodeIsValid = /^[0-9]{5}$/i.test(zipCodeValue);
    console.log(`Zip Code validation test on "${zipCodeValue}" evaluates to ${zipcodeIsValid}`);
    
    if(!zipcodeIsValid){
        zipInput.parentElement.classList.add('not-valid');
        zipInput.parentElement.classList.remove('valid');
        zipInput.parentElement.lastElementChild.style.display = 'block';
    } else {
        zipInput.parentElement.classList.add('valid');
        zipInput.parentElement.classList.remove('not-valid');
        zipInput.parentElement.lastElementChild.style.display = 'none';
    }

    return zipcodeIsValid;
    
}


const cvvValidator = () => {

    const cvvValue = cvvInput.value;

    console.log("CVV Value is: ", `"${cvvValue}"`);


    const cvvIsValid = /^[0-9]{3}$/i.test(cvvValue);
    console.log(`Zip Code validation test on "${cvvValue}" evaluates to ${cvvIsValid}`);

    if(!cvvIsValid){
        cvvInput.parentElement.classList.add('not-valid');
        cvvInput.parentElement.classList.remove('valid');
        cvvInput.parentElement.lastElementChild.style.display = 'block';
    } else {
        cvvInput.parentElement.classList.add('valid');
        cvvInput.parentElement.classList.remove('not-valid');
        cvvInput.parentElement.lastElementChild.style.display = 'none';
    }

    return cvvIsValid;

}


form.addEventListener('submit', e => {

    nameValidator();
    emailValidator();
    activityValidator();

    if(paypalDiv.style.display == 'none' && bitcoinDiv.style.display == 'none'){
        cardValidator();
        cvvValidator();
        zipCodeValidator();
    }
   
    // Only if the credit card option is selected, the validators associated to it will run


    if(paypalDiv.style.display == 'none' && bitcoinDiv.style.display == 'none'){
        if(!cardValidator() || !cvvValidator() || !zipCodeValidator()){
            e.preventDefault();
        }
        
    }
    
    if(!nameValidator() || !emailValidator() || !activityValidator()){
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




/** Real-time error message **/

nameInput.addEventListener('keyup', nameValidator);
emailInput.addEventListener('keyup', emailValidator);
activitiesField.addEventListener('change', activityValidator);
ccInput.addEventListener('keyup', cardValidator);
zipInput.addEventListener('keyup', zipCodeValidator);
cvvInput.addEventListener('keyup', cvvValidator);