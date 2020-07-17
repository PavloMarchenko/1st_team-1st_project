(function() {
    const formEl = document.querySelector("#contactForm");
    formEl.addEventListener("submit", function(event) {
        event.preventDefault();

        const body = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        }

        fetch("https://stoliari-node.herokuapp.com/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"  
            },
            body: JSON.stringify(body)
        }).then(r => r.text()).then(response => {
            // TODO add alert about successful submit 
            console.log(response, "from server")
        });
    });
})();



