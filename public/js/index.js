// navbar script
document.querySelector('#home-link').addEventListener('click', () => {
    return $.ajax({
        url: "/",
        method: "GET",
      });
})

document.querySelector('#fridge-link').addEventListener('click', () => {
    return $.ajax({
        url: "/fridge",
        method: "GET",
    });
})

document.querySelector('#grocery-link').addEventListener('click', () => {
    return $.ajax({
        url: "/grocery",
        method: "GET",
    });
})

document.querySelector('#recipe-link').addEventListener('click', () => {
    return $.ajax({
        url: "/dashboard",
        method: "GET",
    });
})

// login & sign up
document.querySelector('#login-link').addEventListener('click', () => {
    return $.ajax({
        url: "/login",
        method: "GET",
    });
})

document.querySelector('#signup-link').addEventListener('click', () => {
    return $.ajax({
        url: "/signup",
        method: "GET",
    });
})