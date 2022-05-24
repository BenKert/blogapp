form.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  fetch("api/login", {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "applicantion/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == "error") {
        success.style.display = "none";
        error.style.display = "block";
        error.innerText = data.error;
      } else {
        error.style.display = "none";
        success.style.display = "block";
        success.innerText = data.success;
      }
    });
});
