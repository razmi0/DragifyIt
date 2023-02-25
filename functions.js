//detect touch device
export function whatDevice() {
  let deviceType = "";
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return deviceType;
  } catch (e) {
    deviceType = "mouse";
    return deviceType;
  }
}
export function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
