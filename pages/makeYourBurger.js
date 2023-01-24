import view from '../utils/view.js'
import Ingredient from '../components/ingredient.js'
import data from '../utils/data.js'

export default function MakeYourBurger() {

  const items = data.map((item) => Ingredient(item))

  view.innerHTML = `
 <div class="main__burger--grid">
      <div class="title">
        <h1>Make Your Burger</h1>
      </div>
      <div class="burger__items--container">
        <div class="burger--items">
          <img class="bun" src="/assests/items/bun_bottom.svg" alt="bun">
        </div>
      </div>

      <div class="summary">
        <h3 class="padding-bottom-26">Summary</h3>
        <span class="divider"></span>
        <div class="total padding-block-26">
          <h3 class="font-36 extra-bold">$12.31</h3>
          <button class="btn btn--checkout font-16 semi-bold">Checkout</button>
        </div>
        <div class="summary__main">
          <div class="summary__time">
            <img class="summary__icon--time" src="./assests/Summary-icon-time.png" alt="time">
            <span class="font-14 semi-bold">7 min</span>
          </div>
          <div class="summary__weight">
            <img class="summary__icon--weight" src="./assests/Summary-icon-weight.png" alt="weight">
            <span class="font-14 semi-bold">20 oz</span>
          </div>
          <div class="summary__energy">
            <img class="summary__icon--time" src="./assests/Summary-icon-energy.png" alt="energy">
            <span class="font-14 semi-bold">429 kcal</span>
          </div>
        </div>
      </div>
    </div>
    <div class = "main__ingredients--grid padding-block-32" >
        ${items.join('')}
</div>
`
  const $increments = document.querySelectorAll('.fa-plus')
  const $decrements = document.querySelectorAll('.fa-minus')
  const $value = document.querySelectorAll('.value')

  for (let i = 0; i < $increments.length; i++) {
    let btnIncrement = $increments[i].parentElement
    let btnDecrement = $decrements[i].parentElement

    btnIncrement.addEventListener('click', () => handleIncrement(event, i))

    btnDecrement.addEventListener('click', () => handleDecrement(event, i))
  }

  function handleIncrement(event, i) {
    const valueIncrement = $value[i]
    valueIncrement.innerText = parseInt(valueIncrement.innerText) + 1
  }

  function handleDecrement(event, i) {
    const valueDecrement = $value[i]
    valueDecrement.innerText = parseInt(valueDecrement.innerText) - 1
    if (valueDecrement.innerText < 0) {
      valueDecrement.innerText = 0
    }
  }
}