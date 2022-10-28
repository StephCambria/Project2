const signupFormHandler = async function(event) {
    event.preventDefault();

    const username = document.querySelector("#username-signup");
    const password = document.querySelector("#password-signup");

    const response = await fetch ("/api/user", {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: { "Content-Type": "application/json" },
    });

    response.json().then(data => console.log(data));

    if (response.ok) {
        document.location.replace("/fridge");
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector("#signup-btn")
    .addEventListener("click", signupFormHandler);