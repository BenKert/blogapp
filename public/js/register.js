form.addEventListener("submit", () => {
  const register = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  fetch("api/register", {
    method: "POST",
    body: JSON.stringify(register),
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