
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

const followCompany = async (companyName) => {
    console.log("followCompany", companyName);
    const formContainer = document.querySelector('.ai-info-follow-form_component');
    // if the form is already displayed, hide it
    if (formContainer.style.display !== "none") {
        formContainer.style.display = "none";
        return;
    }
    console.log("followCompany 2", companyName);


    formContainer.style.display = "block";
    
    const form = document.querySelector('#wf-form-AI-Info-Follow-Form');
    form.style.display = "flex"


    // get the email field
    const email = form.querySelector('.ai-info-follow-form_text-field');

    // get the follow input
    const followInput = form.querySelector('.ai-info-follow-form_button');

    // get the success message element
    const successMessage = document.querySelector('.ai-info-follow-form_success');
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
            followInput.value = "Follow";
            form.reset();
            form.style.display = "none";

            setTimeout(() => {
                formContainer.style.display = "none";
            }, 2000);
        } else {
           // alert("Failed to send email");
        }
    });
}

start();