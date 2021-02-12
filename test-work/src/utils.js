const findElement = (element) => document.querySelector(element);
const findElements = (elements) => document.querySelectorAll(elements);

const toggleClass = (element, className) => element.classList.toggle(className);
const toggleClasses = (elements, className) =>
  Array.from(elements).map((element) => element.classList.toggle(className));

function draggable(element) {
  element.draggable = true;

  element.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.id);
    event.target.classList.add("dragging");
  });

  element.addEventListener("dragover", (event) => {
    event.preventDefault();

    const old = document.querySelector(".over");
    old && old.classList.remove("over");
    event.target.classList.add("over");
  });

  element.addEventListener("drop", (event) => {
    let old = document.querySelector(".dragging");
    old && old.classList.remove("dragging");
    old = document.querySelector(".over");
    old && old.classList.remove("over");

    const element = event.target.innerHTML;
    const fromElement = document.querySelector(
      `#${event.dataTransfer.getData("id")}`
    );
    event.target.innerHTML = fromElement.innerHTML;
    fromElement.innerHTML = element;
  });
}

function productTemplate({ id, img, model, price, ...rest }) {
  return `
    <div id=${"draggable" + id} class="product-cart__box product-cart__box--js">
      <img 
        alt=${model}
        src=${img}
        class="product-cart__img"
      />
      <div class="product-cart__title-box ">
        <h3 class="product-cart__title product-cart__title--js">${model}</h3>
        <div class="contenteditable-box">
          <div class="contenteditable-box__field" contenteditable="true"></div>
          <button class="contenteditable-box__action contenteditable-box__action--js" type="button">Готов</button>
        </div>
      </div>
      ${characteristicTemplate(rest)}
      <div class="product-cart__price price-box">
        <p class="price-box__desc">${price}</p>
        <button 
          type="button"
          class="price-box__cart-action"
        >Купить
        </button>
      </div>
    </div>
  `;
}

function productTemplateTableHead(labels) {
  return `
    <div class="product-cart__table-head--js table-head hidden">
      <ul class="table-tr">
        ${labels.map(
          (label) => `
          <li class="table-th-td">
            ${label}
          </li>
          `
        )}
      </ul>
    </div>
`;
}

function productTemplateTable(items) {
  const tHead = [
    "Модель",
    "Тип",
    "Тип Запуска",
    "Мощность",
    "Напряжение",
    "Цена",
  ];

  return `
    ${productTemplateTableHead(tHead)}
    ${productCartBoxTemplate(items)}
  `.replace(/,|undefined/gi, "");
}

function productCartBoxTemplate(items) {
  return `
    <div class="product-cart__box product-cart__box--js">
      ${items.map(
        ({ id, img, model, price, ...rest }) => `
        <div id=${
          "draggable" + id
        } class="product-cart__grid product-cart__grid--js">
          <div class="product-cart__model product-cart__model--js">
            <img 
              alt=${model}
              src=${img}
              class="product-cart__img product-cart__img--js"
            />
            <div class="product-cart__title-box ">
              <h3 class="product-cart__title product-cart__title--js">${model}</h3>
              <div class="contenteditable-box">
                <div class="contenteditable-box__field" contenteditable="true"></div>
                <button class="contenteditable-box__action contenteditable-box__action--js" type="button">Готов</button>
              </div>
            </div>
          </div>
          ${characteristicTemplate(rest)}
          <div class="product-cart__price product-cart__price--js price-box">
            <p class="price-box__desc">${price}</p>
            <button 
              type="button"
              class="price-box__cart-action"
            >Купить
            </button>
          </div>
        </div>
        `
      )}
    </div>
  `;
}

function characteristicTemplate({ type, power, volt, start }) {
  return `
    <div class="product-cart__characteristic product-cart__characteristic--js characteristic">
      <p class="characteristic__type characteristic__type--js">Тип</p>
      <p class="characteristic__desc">${type}</p>
    </div>
    <div class="product-cart__characteristic product-cart__characteristic--js characteristic">
      <p class="characteristic__type characteristic__type--js">Тип запуска</p>
      <p class="characteristic__desc">${start}</p>
    </div>
    <div class="product-cart__characteristic product-cart__characteristic--js characteristic">
      <p class="characteristic__type characteristic__type--js">Мощность</p>
      <p class="characteristic__desc">${power}</p>
    </div>
    <div class="product-cart__characteristic product-cart__characteristic--js characteristic">
      <p class="characteristic__type characteristic__type--js">Напряжение</p>
      <p class="characteristic__desc">${volt}</p>
    </div>
  `;
}

function characteristicTemplates({ type, power, volt, start }) {
  return `
    <div class="product-cart__characteristic characteristic">
      <ul class="characteristic__list">
        <li class="characteristic__item">
          Тип
          <span class="characteristic__desc">${type}</span>
        <li class="characteristic__item">
          Тип запуска
          <span class="characteristic__desc">${start}</span>
        </li>
        </li>
        <li class="characteristic__item">
          Мощность
          <span class="characteristic__desc">${power}</span>
        </li>
        <li class="characteristic__item">
          Напряжение
          <span class="characteristic__desc">${volt}</span>
        </li>
      </ul>
    </div>
  `;
}

function dropMenu(items) {
  return `
    <ul class="drop-menu__list">
      ${items.map(
        (item) => `
        <li class="drop-menu__item">
          <a href="#" class="drop-menu__link">${item.title}</a>
          ${item.children && dropMenu(item.children)}
        </li>
      `
      )}
    </ul>
  `.replace(/,|undefined/gi, "");
}