import view from '../utils/view.js'
import Ingredient from '../components/ingredient.js'
import data from '../utils/data.js'
import renderIngredientsData from '../utils/renderIngredientsData'

export default function MakeYourBurger() {
  const items = data.map((item) => Ingredient(item))



  // const renderIngredientImages = renderIngredientsArray.map(image => RenderIngredient(image.img))
  view.innerHTML = `
  <div class="main__burger--grid">
      <div class="title__screen--02">
        <h1>Make Your Burger</h1>
      </div>
      <div class="burger__items--container">
        <div class="burger--items">
          <img class="bun burger--item" src="/assests/items/bun_bottom.svg" alt="bun">
        </div>
      </div>
      <div class="summary">
        <h3 class="padding-bottom-26">Summary</h3>
        <span class="divider"></span>
        <div class="total padding-block-26">
          <h3 class="font-36 extra-bold price">$0</h3>
          <button class="btn btn--checkout font-16 semi-bold">Checkout</button>
        </div>
        <div class="summary__main">
          <div class="summary__time">
            <img class="summary__icon--time" src="./assests/Summary-icon-time.png" alt="time">
            <span class="font-14 semi-bold time">7 min</span>
          </div>
          <div class="summary__weight">
            <img class="summary__icon--weight" src="./assests/Summary-icon-weight.png" alt="weight">
            <span class="font-14 semi-bold weight">20 oz</span>
          </div>
          <div class="summary__energy">
            <img class="summary__icon--time" src="./assests/Summary-icon-energy.png" alt="energy">
            <span class="font-14 semi-bold energy">429 kcal</span>
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
  const $burgerItems = document.querySelector('.burger--items')

  for (let i = 0; i < $increments.length; i++) {
    let btnIncrement = $increments[i].parentElement
    let btnDecrement = $decrements[i].parentElement

    if ($value[i].innerText == 0) {
      const btnDecrement = $decrements[i].parentElement
      btnDecrement.disabled = true
    }
    btnIncrement.addEventListener('click', () => handleIncrement(Event, i))

    btnDecrement.addEventListener('click', () => handleDecrement(Event, i))
  }

  function handleIncrement(Event, i) {
    const valueIncrement = $value[i]
    const $price = document.querySelector('.price')
    const priceValue = $price.innerText.replace('$', '')
    valueIncrement.innerText = parseInt(valueIncrement.innerText) + 1

    if (valueIncrement.innerText == 2) {
      const btnIncrement = $increments[i].parentElement
      btnIncrement.disabled = true
    }
    if (valueIncrement.innerText == 1) {
      const btnDecrement = $decrements[i].parentElement
      btnDecrement.disabled = false
    }

    if (valueIncrement.innerText == 1) {


      const allBurgerItems = $burgerItems.children
      const allBurgerItemsArray = [...$burgerItems.children]
      const $burgerIngredient = document.createElement('img')
      $burgerIngredient.src = `${renderIngredientsData[i].img}`
      $burgerIngredient.id = `${renderIngredientsData[i].id}_01`
      const className = `${renderIngredientsData[i].class}_01`
      $burgerIngredient.classList.add(className)
      $burgerItems.prepend($burgerIngredient)
      const totalPrice = `$${parseInt(priceValue) + data[i].price}`
      $price.innerText = totalPrice

      const firstElementOfBurgerItems = $burgerItems.firstElementChild
      const firstElementOfBurgerItemsSibling = firstElementOfBurgerItems.nextElementSibling
      const positionTop = $(firstElementOfBurgerItemsSibling).position().top
      console.log(positionTop)
      if ($(firstElementOfBurgerItemsSibling).hasClass('cutlet_01') || $(firstElementOfBurgerItemsSibling).hasClass('cutlet_02')) {
        if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_01') || $($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('onion_01')
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('tomatoe_01')
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 165}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cucumber_01')
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cheese_01')
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('salad_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('mayo_01') || $(firstElementOfBurgerItemsSibling).hasClass('mayo_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 85}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cutlet_01')
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 115}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('onion_01')
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 115}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('tomatoe_01')
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 195}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cucumber_01')
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 5}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cheese_01')
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('salad_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 135}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }

      if ($(firstElementOfBurgerItemsSibling).hasClass('onion_01') || $(firstElementOfBurgerItemsSibling).hasClass('onion_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cutlet_01')
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 75}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('mayo_01')
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 35}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('tomatoe_01')
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cucumber_01')
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cheese_01')
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('salad_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 50}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('tomatoe_01') || $(firstElementOfBurgerItemsSibling).hasClass('tomatoe_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 15}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cutlet_01')
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('onion_01')
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 60}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('mayo_01')
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 125}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cucumber_01')
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 70}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cheese_01')
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('salad_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 65}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }

      if ($(firstElementOfBurgerItemsSibling).hasClass('cucumber_01') || $(firstElementOfBurgerItemsSibling).hasClass('cucumber_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 70}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cutlet_01')
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('onion_01')
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 135}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('mayo_01')
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('tomatoe_01')
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 150}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cheese_01')
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('salad_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 20}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('cheese_01') || $(firstElementOfBurgerItemsSibling).hasClass('cheese_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 105}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cutlet_01')
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 130}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('onion_01')
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 25}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('mayo_01')
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 205}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cucumber_01')
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 130}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('tomatoe_01')
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 55}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('salad_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 155}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('salad_01') || $(firstElementOfBurgerItemsSibling).hasClass('salad_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cutlet_01')
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 105}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('onion_01')
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 5}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('mayo_01')
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 190}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cucumber_01')
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('tomatoe_01')
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('cheese_01')
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 140}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('bun_01')
        }
      }



    }
    if (valueIncrement.innerText == 2) {
      const allBurgerItemsArray = [...$burgerItems.children]
      const $burgerIngredient = document.createElement('img')
      $burgerIngredient.src = `${renderIngredientsData[i].img}`
      $burgerIngredient.id = `${renderIngredientsData[i].id}_02`
      const className = `${renderIngredientsData[i].class}_02`
      $burgerIngredient.classList.add(className)
      $burgerItems.prepend($burgerIngredient)
      const totalPrice = `$${parseInt(priceValue) + data[i].price}`
      $price.innerText = totalPrice

      const firstElementOfBurgerItems = $burgerItems.firstElementChild
      const firstElementOfBurgerItemsSibling = firstElementOfBurgerItems.nextElementSibling
      const positionTop = $(firstElementOfBurgerItemsSibling).position().top
      console.log(positionTop)
      if ($(firstElementOfBurgerItemsSibling).hasClass('cutlet_01') || $(firstElementOfBurgerItemsSibling).hasClass('cutlet_02')) {
        if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02') || $($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 165}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 55}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('mayo_01') || $(firstElementOfBurgerItemsSibling).hasClass('mayo_02')) {

        if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 85}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 115}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 115}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 195}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 5}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 135}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 20}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }

      if ($(firstElementOfBurgerItemsSibling).hasClass('onion_01') || $(firstElementOfBurgerItemsSibling).hasClass('onion_02')) {
        if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 75}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 35}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 50}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('tomatoe_01') || $(firstElementOfBurgerItemsSibling).hasClass('tomatoe_02')) {
        if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 15}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 60}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 125}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 70}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 65}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }

      if ($(firstElementOfBurgerItemsSibling).hasClass('cucumber_01') || $(firstElementOfBurgerItemsSibling).hasClass('cucumber_02')) {
        if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 70}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 135}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 150}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 20}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('cheese_01') || $(firstElementOfBurgerItemsSibling).hasClass('cheese_02')) {
        if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 105}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 130}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 25}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
          console.log('mayo_01')
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 205}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 130}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 55}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 155}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('salad_01') || $(firstElementOfBurgerItemsSibling).hasClass('salad_02')) {
        if ($($burgerIngredient).hasClass('cutlet_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 105}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 5}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 190}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 140}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_02')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
    }

  }

  function handleDecrement(Event, i) {
    const valueDecrement = $value[i]
    const $price = document.querySelector('.price')
    const priceValue = $price.innerText.replace('$', '')
    const lastElementOfBurgerItem = document.querySelector('.burger--items').firstElementChild

    if (valueDecrement.innerText == 2 && lastElementOfBurgerItem.classList.contains(`${renderIngredientsData[i].class}_02`)) {
      const itemId = `#${renderIngredientsData[i].id}_02`
      const $burgerItemsId = document.querySelector(itemId)
      $burgerItemsId.remove()
      const totalPrice = `$${parseInt(priceValue) - data[i].price}`
      $price.innerText = totalPrice
      valueDecrement.innerText = parseInt(valueDecrement.innerText) - 1
    } else if (valueDecrement.innerText == 1 && lastElementOfBurgerItem.classList.contains(`${renderIngredientsData[i].class}_01`)) {
      const itemId = `#${renderIngredientsData[i].id}_01`
      const $burgerItemsId = document.querySelector(itemId)
      $burgerItemsId.remove()
      const totalPrice = `$${parseInt(priceValue) - data[i].price}`
      $price.innerText = totalPrice
      valueDecrement.innerText = parseInt(valueDecrement.innerText) - 1
    } else {
      return
    }


    if (valueDecrement.innerText == 0) {
      const btnDecrement = $decrements[i].parentElement
      btnDecrement.disabled = true
    }

    if (valueDecrement.innerText < 2) {
      const btnIncrement = $increments[i].parentElement
      btnIncrement.disabled = false
    }


  }
}