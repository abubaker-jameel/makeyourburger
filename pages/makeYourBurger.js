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
        <div class="warning__alert hide">
          <p>Please remove the previous burger item first.</p>
        </div>
        <div class="warning__alert hide">
          <p>Please atleast add 5 burger items before adding bun.</p>
        </div>
        <div class="warning__alert hide">
          <p>You cannot add the items after bun item.</p>
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
    const firstElementOfBurgerItems = $burgerItems.firstElementChild
    const allBurgerItems = $burgerItems.children
    const allBurgerItemsArray = [...allBurgerItems]
    const valueIncrement = $value[i]
    const $price = document.querySelector('.price')
    const priceValue = $price.innerText.replace('$', '')
    const bunElement = valueIncrement.parentElement.parentElement.firstElementChild.firstElementChild

    if (allBurgerItemsArray.length < 6 && (bunElement.getAttribute('alt') === 'Bun')) {
      valueIncrement.innerText = parseInt(valueIncrement.innerText)
      document.querySelectorAll('.warning__alert')[1].classList.remove('hide')
      setTimeout(() => {
        document.querySelectorAll('.warning__alert')[1].classList.add('hide')
      }, 2000)
    } else if (firstElementOfBurgerItems.classList.contains('bun_top_01')) {
      valueIncrement.innerText = parseInt(valueIncrement.innerText)
      document.querySelectorAll('.warning__alert')[2].classList.remove('hide')
      setTimeout(() => {
        document.querySelectorAll('.warning__alert')[2].classList.add('hide')
      }, 2000)
    } else {
      valueIncrement.innerText = parseInt(valueIncrement.innerText) + 1
    }


    if (valueIncrement.innerText == 2) {
      const btnIncrement = $increments[i].parentElement
      btnIncrement.disabled = true
    }
    if (valueIncrement.innerText == 1) {
      const btnDecrement = $decrements[i].parentElement
      btnDecrement.disabled = false
    }

    if ((valueIncrement.innerText == 1) && (bunElement.getAttribute('alt') === 'Bun')) {
      const btnIncrement = $increments[i].parentElement
      btnIncrement.disabled = true
    }

    if (valueIncrement.innerText == 1 && !firstElementOfBurgerItems.classList.contains('bun_top_01')) {
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
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 165}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })

        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('mayo_01') || $(firstElementOfBurgerItemsSibling).hasClass('mayo_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 85}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 115}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 115}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 195}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 5}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 135}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }

      if ($(firstElementOfBurgerItemsSibling).hasClass('onion_01') || $(firstElementOfBurgerItemsSibling).hasClass('onion_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 75}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 35}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 50}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('tomatoe_01') || $(firstElementOfBurgerItemsSibling).hasClass('tomatoe_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 15}px`,
            'z-index': `${allBurgerItemsArray.length}`,
          })
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 45}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 60}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 125}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 70}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 30}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 65}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }

      if ($(firstElementOfBurgerItemsSibling).hasClass('cucumber_01') || $(firstElementOfBurgerItemsSibling).hasClass('cucumber_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 70}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 135}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 40}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 150}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 20}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('cheese_01') || $(firstElementOfBurgerItemsSibling).hasClass('cheese_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 105}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 130}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 25}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 205}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 130}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('salad_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 55}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 155}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        }
      }
      if ($(firstElementOfBurgerItemsSibling).hasClass('salad_01') || $(firstElementOfBurgerItemsSibling).hasClass('salad_02')) {
        if ($($burgerIngredient).hasClass('cutlet_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 80}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('onion_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 105}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('mayo_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 5}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cucumber_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 190}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('tomatoe_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 110}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('cheese_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop + 10}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
        } else if ($($burgerIngredient).hasClass('bun_top_01')) {
          $($burgerIngredient).css({
            'top': `${positionTop - 140}px`,
            'z-index': `${allBurgerItemsArray.length}`
          })
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

    if (valueDecrement.innerText == 2) {
      const itemId = `#${renderIngredientsData[i].id}_02`
      const $burgerItemsId = document.querySelector(itemId)
      const prevAllBurgerItems = $($burgerItemsId).prevAll()

      $burgerItemsId.remove()
      const totalPrice = `$${parseInt(priceValue) - data[i].price}`
      $price.innerText = totalPrice
      valueDecrement.innerText = parseInt(valueDecrement.innerText) - 1

      if ($($burgerItemsId).hasClass('cutlet_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('mayo_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }

      if ($($burgerItemsId).hasClass('onion_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('tomatoe_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('cucumber_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('cheese_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 18}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('salad_02')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })

          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })

          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }

    } else if (valueDecrement.innerText == 1) {
      const itemId = `#${renderIngredientsData[i].id}_01`
      const $burgerItemsId = document.querySelector(itemId)
      const prevAllBurgerItems = $($burgerItemsId).prevAll()

      if ($($burgerItemsId).hasClass('cutlet_01')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })

          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 55}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('mayo_01')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 20}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }

      if ($($burgerItemsId).hasClass('onion_01')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })

          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('tomatoe_01')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')
          console.log(previousItem, previousItemZindex)

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 45}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('cucumber_01')) {
        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })

          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 40}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('cheese_01')) {
        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('mayo_01') || $(previousItem).hasClass('mayo_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 10}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 18}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      if ($($burgerItemsId).hasClass('salad_01')) {

        for (let item = 0; item < prevAllBurgerItems.length; item++) {
          const previousItem = prevAllBurgerItems[item]
          const previousItemPosition = $(previousItem).position().top
          const previousItemZindex = $(previousItem).css('z-index')
          console.log(previousItem, previousItemZindex)

          if ($(previousItem).hasClass('cutlet_01') || $(previousItem).hasClass('cutlet_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('onion_01') || $(previousItem).hasClass('onion_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('tomatoe_01') || $(previousItem).hasClass('tomatoe_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cucumber_01') || $(previousItem).hasClass('cucumber_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('cheese_01') || $(previousItem).hasClass('cheese_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('salad_01') || $(previousItem).hasClass('salad_02')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
          if ($(previousItem).hasClass('bun_top_01')) {
            $(previousItem).css({
              'top': `${previousItemPosition + 30}px`,
              'z-index': `${previousItemZindex - 1}`
            })
          }
        }
      }
      $burgerItemsId.remove()
      const totalPrice = `$${parseInt(priceValue) - data[i].price}`
      $price.innerText = totalPrice
      valueDecrement.innerText = parseInt(valueDecrement.innerText) - 1
    } else {
      document.querySelectorAll('.warning__alert')[0].classList.remove('hide')
      setTimeout(() => {
        document.querySelectorAll('.warning__alert')[0].classList.add('hide')
      }, 2000)
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