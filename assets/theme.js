export function changeTheme() {
  document.querySelector("#theme").checked ? darkTheme() : lightTheme();
}
function darkTheme() {
  document.documentElement.style.setProperty("--bg-color", "#212121");
}
function lightTheme() {
  document.documentElement.style.setProperty("--bg-color", "#e8e8e8");
}
