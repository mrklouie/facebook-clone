const showPasswordEl = document.querySelector(".show-password > span");
const inputPass = document.querySelector('input[type="password"]');
const showPasswordParentEl = document.querySelector(".show-password");

let toggle = false;
showPasswordEl.addEventListener("click", () => {
  toggle = !toggle;

  if (toggle) {
    showPasswordEl.textContent = "HIDE";
    inputPass.setAttribute("type", "text");
  } else {
    showPasswordEl.textContent = "SHOW";
    inputPass.setAttribute("type", "password");
  }

  console.log(toggle);
});

inputPass.addEventListener("click", () => {
  showPasswordParentEl.classList.add("active");
});
