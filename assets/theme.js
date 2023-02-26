export function changeTheme() {
  document.querySelector("#theme").checked ? darkTheme() : lightTheme();
  
}
function darkTheme() {
  document.documentElement.style.setProperty("--bg-color" , "linear-gradient( 135deg, #F05F57 10%, #360940 100%)");
  // document.nav.style.setProperty("--bg-color-nav-dark" , "--bg-color-nav-light");
}
function lightTheme() {
  document.documentElement.style.setProperty("--bg-color" , "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)");
  // document.nav.style.setProperty("--bg-color-nav-light" , "--bg-color-nav-dark");
}
