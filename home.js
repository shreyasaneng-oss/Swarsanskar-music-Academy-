const name = localStorage.getItem("userName");

if (!name) {
  window.location.href = "sig";
} else {
  document.getElementById("userName").textContent = name;
}
