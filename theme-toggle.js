

const btn = document.querySelector(".btn-darkmode");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "assets/css/main.css") {
    theme.href = "assets/css/dark.css";
    localStorage.setItem('theme', 'dark.css');
  } else {
    theme.href = "assets/css/main.css";
    localStorage.setItem('theme', 'main.css');
  }
});


document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const storedTheme = localStorage.getItem('theme');
  if(storedTheme){
    themeStylesheet.href = storedTheme;
  }
})