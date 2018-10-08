const checkDevices = {
  android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  blackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  isMobile: function() {
    return (
      checkDevices.android() ||
      checkDevices.blackBerry() ||
      checkDevices.iOS() ||
      checkDevices.opera()
    );
  },
  any: function() {
    return (
      checkDevices.android() ||
      checkDevices.blackBerry() ||
      checkDevices.iOS() ||
      checkDevices.opera() ||
      checkDevices.windows()
    );
  }
};

// export const addClassAndRemove = (el, className, value) => {
//   let el = document.querySelector(el);
//   if (value == 0) {
//     el.classList.add(className);
//     menu = 1;
//   } else {
//     el.classList.remove(className);
//     menu = 0;
//   }
// };
export default checkDevices;
