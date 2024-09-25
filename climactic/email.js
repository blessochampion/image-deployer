
const start = async () => {
    // delete the user data from local storage
    localStorage.removeItem("USER_EMAIL_DISPLAYED");
    const modalAIEmail = document.querySelector(SELECTORS.modalAIEmail);
    if(userExists()){
        modalAIEmail.style += ";display:none !important";
        return;
    }

    // get the email fields
    const form = document.querySelector(SELECTORS.emailForm);

    // get the name field
    const name = form.querySelector(SELECTORS.name);

    // get the email field
    const email = form.querySelector(SELECTORS.email);

    // get the signup input
    const signupInput = form.querySelector(SELECTORS.signupInput);

    // get the success message element
    const successMessage = document.querySelector(SELECTORS.successMessage);

    // listen for the submit event
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        event.stopPropagation();

        // update the button to show wait messages
        signupInput.value = "Please wait...";

        // get the value of the name field
        const nameValue = name.value;

        // get the value of the email field
        const emailValue = email.value;

      

        // send the data to Airtable

        const response = await saveToAirtable({
            Name: nameValue,     // Airtable field "Name"
            Email: emailValue ,   // Airtable field "Email"
            Created_at: getCurrentDate() // Airtable field "Created_at"
        });

        // check if the email was sent successfully
        if (response.success) {
             // hide the form and show the success message
            form.style.display = "none";
            successMessage.style.display = "block";

            // save the email and name to local storage
            localStorage.setItem("USER_DATA", JSON.stringify({name: nameValue, email: emailValue}));
        } else {
           // alert("Failed to send email");
        }
    });
}

const followLink = document.querySelector('.ai-info_card-base-wrapper .ai-info_card-text-link-wrapper');
const formContainer = document.querySelector('.ai-info-follow-form_component');
const successMessage = document.querySelector('.ai-info-follow-form_success');
const form = document.querySelector('#wf-form-AI-Info-Follow-Form');
const email = form.querySelector('.ai-info-follow-form_text-field');
const followInput = form.querySelector('.ai-info-follow-form_button');

formContainer.style.display = "none";
followLink.addEventListener("click", () => {
    // // hide the form if it is already displayed
    // if (formContainer.style.display !== "none") {
    //     formContainer.style.display = "none";
    //     return;
    // }
    // // show the form
    // formContainer.style.display = "block";
    // successMessage.style.display = "none";
    // form.style.display = "flex";
});

const followCompany = async (companyName) => {    
    formContainer.style.display = "block";
    successMessage.style.display = "none";

    // listen for the submit event
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        event.stopPropagation();

        // update the button to show wait messages
        followInput.value = "Please wait...";

        // get the value of the email field
        const emailValue = email.value;
      

        // send the data to Airtable
         const response = await saveToAirtable({
            Company: companyName,     // Airtable field "Name"
            Email: emailValue ,   // Airtable field "Email"
            Created_at: getCurrentDate() // Airtable field "Created_at"
        });

        // check if the email was sent successfully
        if (response.success) {
             // hide the form and show the success message
            successMessage.style.display = "block";
            successMessage.style.marginTop = "18px";
            // scroll to the success message to make it visible
            successMessage.scrollIntoView();
            followInput.value = "Follow";
            email.value = "";
            // form.style.display = "none";

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
        } else {
           // alert("Failed to send email");
        }
    });
}

start();