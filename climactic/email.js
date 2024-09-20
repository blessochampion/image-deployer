const userExists =() => {
    const users = JSON.parse(localStorage.getItem("USER_DATA")||"{}");
    return users && users.email;
}

const start = async () => {
    const modalAIEmail = document.querySelector(SELECTORS.modalAIEmail);
    if(userExists()){
        modalAIEmail.style += ";display:none !important";
        return;
    }else{
        setTimeout(()=>{
            modalAIEmail.style += ";display:flex !important"
            modalAIEmail.style.opacity = 0
            modalAIEmail.style.transition = "opacity 2s"
            modalAIEmail.style.opacity = 1
            
        }, 8000);
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

        const response = await saveToAirtable(nameValue, emailValue);

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

start();