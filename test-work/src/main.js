// Data
const cartData = [
  {
    id: 0,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 1,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 2,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 3,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 4,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 5,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 6,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
  {
    id: 7,
    img: "./src/Image/Bolgarka-Makita.webp",
    model: "Генератор Skill 9005 LA",
    type: "Бензиновый",
    power: "5кВт",
    volt: "220",
    start: "Ручной",
    price: "56&nbsp290&nbspруб.",
  },
];

const dropMenuData = [
  {
    title: "Меню",
    children: [
      {
        title: "Каталог оборудования",
        children: [
          {
            title: "1 уровень",
            children: [
              {
                title: "2 уровень",
                children: [
                  {
                    title: "3 уровень",
                    children: [
                      {
                        title: "4 уровень меню",
                      },
                      {
                        title: "4 уровень меню",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "1 уровень",
            children: [
              {
                title: "2 уровень",
                children: [
                  {
                    title: "3 уровень",
                    children: [
                      {
                        title: "4 уровень меню",
                      },
                      {
                        title: "4 уровень меню",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "1 уровень",
            children: [
              {
                title: "2 уровень",
                children: [
                  {
                    title: "3 уровень",
                    children: [
                      {
                        title: "4 уровень меню",
                      },
                      {
                        title: "4 уровень меню",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "1 уровень",
            children: [
              {
                title: "2 уровень",
                children: [
                  {
                    title: "3 уровень",
                    children: [
                      {
                        title: "4 уровень меню",
                      },
                      {
                        title: "4 уровень меню",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Node
const cartProduct = document.querySelector(".product__cart--js");
const cartDropMenu = document.querySelector(".product-header__drop-menu--js");
const cartSwitchView = document.querySelector(
  ".product-header__switch-view--js"
);

cartProduct.insertAdjacentHTML("afterbegin", productTemplateTable(cartData));
cartDropMenu.insertAdjacentHTML("afterbegin", dropMenu(dropMenuData));

const productCartBox = document.querySelector(".product__cart--js");
const productCartGrid = document.querySelectorAll(".product-cart__grid");