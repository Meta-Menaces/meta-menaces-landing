// Preload fonts
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  document.querySelector("#year").innerHTML = currentYear;
};

export { preloadFonts, randomNumber };
