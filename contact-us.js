
let successMessage = document.querySelector(`[data-testid="test-contact-success"]`)

let emailError = document.querySelector(
  `[data-testid="test-contact-error-email"]`
)

let messageError = document.querySelector("#message_error")

const submitForm = (event) => {
    event.preventDefault()
    email = document.querySelector("#email").value;
    message = document.querySelector("#message").value
    
    let isError = false

    if (email == "" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        emailError.textContent = "Invalid Email"
        isError = true
        
    } else {
        emailError.textContent = "Valid email"
        emailError.style.color = "#81fca0";


      
    }

    console.log(messageError, message)
    if (message.trim().length < 10) {
        messageError.style.color = "#fc8181";
        isError = true

    } else {
        messageError.style.color = "#81fca0";
      
    }

     
    if (!isError) {
        successMessage.textContent = "Submitted Succesfully"
        successMessage.classList.remove("errormessage")
    }
    
}

