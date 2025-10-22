
let successMessage = document.querySelector(`[data-testid="test-contact-success"]`)

let emailError = document.querySelector(
  `[data-testid="test-contact-error-email"]`
)

let messageError = document.querySelector("#textarea-message")

const submitForm = (event) => {
    event.preventDefault()
    email = document.querySelector("#email").value;
    message = document.querySelector("#message").value
    
    let isError = false

     

    const emailFunc = (color, message, status) => {
          document.querySelector("#email").style.marginBottom = "0";
        emailError.style.marginBottom = "12px";
        emailError.style.color = `${color}`;
        emailError.textContent = `${message}`;
         isError = status;
    }

    if (email == "" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        emailError.textContent = "Invalid Email"
       
        emailFunc("#fc8181", "Invalid email", true);
        
    } else {
        emailFunc("#81fca0", "Valid email", false);
            
    }

    
    function textArea(color, status){
          messageError.style.color = `${color}`;
          isError = status;

    }
 
    if (message.trim().length < 10) {
        textArea('#fc8181', true)
    
    } else {
        textArea("#81fca0", false);      
    }

     
    if (!isError) {
        successMessage.textContent = "Submitted Succesfully"
        successMessage.classList.remove("errormessage")
    } else {
          successMessage.classList.add("errormessage");
    }
    
}

