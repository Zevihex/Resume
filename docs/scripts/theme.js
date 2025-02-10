const themeSelector = document.getElementById("theme-dropdown");
const body = document.getElementById("body");
themeSelector.addEventListener('click', function(e) {
  const theme = e.target.innerText;
  body.removeAttribute("class");
  switch(theme) {
    case "Dark":
      body.classList.add("darkmode");
      break;
  }
})