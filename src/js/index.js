import { preloadFonts, setCurrentYear } from "./utils";
import { Intro } from "./intro";

const intro = new Intro(document.querySelector(".circles"));

// Preload images and fonts
Promise.all([preloadFonts("ozz0ery")])
  .then(() => {
    // remove loader (loading class)
    document.body.classList.remove("loading");
    // start intro
    intro.start();
    setCurrentYear();
  })
  .catch((err) => {
    console.error(err);
  });
