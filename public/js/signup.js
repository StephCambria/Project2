const signupFormHandler = async function(event) {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    const response = await fetch ("/api/user", {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (response.ok) {
        document.location.replace("/fridge");
    } else {
        alert("Failed to sign up");
    }
};

document
    .querySelector("#signup-btn")
    .addEventListener("click", signupFormHandler);