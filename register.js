function registerUser(password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Password tidak sepadan";
  }
  return "Pendaftaran berjaya";
}

// DOM event
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;

  document.getElementById("registerMessage").innerHTML =
    registerUser(password, confirm);
});

// export untuk test
export { registerUser };