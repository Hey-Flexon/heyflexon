document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        console.log('Response status:', response.status); // Log response status
        if (response.ok) {
            form.reset();
            displayPopup("Message sent successfully!");
        } else {
            response.json().then(data => {
                console.log('Response data:', data); // Log response data
                if (Object.hasOwn(data, 'errors')) {
                    displayPopup(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    displayPopup("Oops! There was a problem submitting your message");
                }
            }).catch(error => {
                console.error('Error parsing JSON:', error); // Log JSON parsing error
                displayPopup("Oops! There was a problem submitting your message");
            });
        }
    }).catch(error => {
        console.error('Fetch error:', error); // Log fetch error
        displayPopup("Oops! There was a problem submitting your message");
    });
});


const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup-close");

// close the popup
const closePopup = () => {
    popup.style.display = "none";
}

// display the popup
const displayPopup = (message) => {
    const popupMessage = document.querySelector(".popup-text");
    popupMessage.innerText = message;
    popup.style.display = "block";

    // automatically close the popup after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

// close the popup when close button is clicked
popupCloseBtn.addEventListener("click", () => {
    closePopup();
});
