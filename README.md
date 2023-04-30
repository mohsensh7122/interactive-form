In this project, I used JavaScript to enhance an interactive registration form for a fictional Full Stack conference.

I added JavaScript to make the form more user-friendly by:

1. Adding customized and conditional behavior and interactivity (for the email input):
   If the user doesn't type anything for this input, they will receive an error saying: "This field cannot be empty" and if the formatting is not correct, they will receive the following error instead: "Email address must be formatted correctly"
2. Validating user input and providing helpful error messages when the user enters invalid information into the form fields
3. Enhanced the accessiblity for all users by making the focus states and errors obvious to all users:

![alt text](https://i.imgur.com/5oeWVjF.png)

4. Adding live features such as the total cost of the activites and making the error messages to display immediately once the user types their info.

5. Preventing the user from selecting conflicting activites that are being held on the same day and time

![alt text](https://i.imgur.com/EWBHLWA.png)

6. When all the required fields are filled out correctly, the form submits (the page refreshes on its own when the submit button is clicked)

7. Form cannot be submitted (the page does not refresh when the submit button is clicked) until the following requirements have been met: Name isn’t blank, ‘email’ is correctly formatted, at least one activity has been selected

8. When the page loads, ‘Credit Card’ is selected in the payment field, and the credit card section is the only payment section displayed in the form’s UI.
