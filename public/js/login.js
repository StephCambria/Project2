const loginFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  const response = await fetch ("/api/user/login", {
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
    alert("Failed to login");
  }
};

document
  .querySelector("#login-btn")
  .addEventListener("click", loginFormHandler);