import view from "../utils/view.js"

export default function Discovery() {
  view.innerHTML = `
    <div class="loader__block">
  <div class="loader"></div>
  </div>
    <div class="main__hero--grid" id="hero__page">
      <div class="title__screen--01">
        <h1>make your burger</h1>
      </div>
      <p class="hero__paragraph--mob font-20 regular">Parallax screen. Burger ingredients and emojis moving depending on the position of the
      mouse pointer.
      </p>
      <img class="hero__burger" src="./assests/main-img.svg" alt="hero-burger-image">
      <img class="hero__burger--mob" src="./assests/main-img-mob.svg" alt="hero-burger-image-mob">
      <button class="btn btn--hero font-24 extra-bold ">
      <a href="#/makeyourburger"><span class="width__btn--hero">Make Burger</span></a>
      </button>
    </div>`

  setTimeout(() => {
    $('.loader__block').fadeOut('slow')
  }, 2000);

}