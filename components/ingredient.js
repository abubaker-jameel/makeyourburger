export default function Ingredient(item) {
  return (
    `
      <div class="ingredient__item">
        <div class="ingredient__item--content">
          <img src=${item.img} alt=${item.name}>
        </div>
        <span class="padding-block-12 font-14 semi-bold capitalize">${item.name}</span>
        <div class="item__quantity">
          <button class="btn btn__circle--sm btn--ghost"><i class="fa-solid fa-plus"></i></button>
          <span>2</span>
          <button class="btn btn__circle--sm btn--ghost"><i class="fa-solid fa-minus"></i></button>
        </div>
      </div>
    `
  )

}