function loginUser(email, password) {
  if (!email || !password) {
    return "Sila isi email dan password";
  }
  return "Log masuk berjaya";
}

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  document.getElementById("loginMessage").innerHTML =
    loginUser(email, password);
});

export { loginUser };