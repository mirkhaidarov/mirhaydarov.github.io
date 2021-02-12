Array.from(productCartGrid).map((element) => {
  draggable(element);
});

productCartBox.addEventListener("click", ({ target }) => {
  if (target.classList.contains("product-cart__title--js")) {
    target.nextElementSibling.style.display = "block";
  }

  if (target.classList.contains("contenteditable-box__action--js")) {
    target.parentElement.style.display = "none";
    target.parentElement.previousElementSibling.textContent =
      target.previousElementSibling.textContent;

    target.previousElementSibling.textContent = "";
  }
});

cartSwitchView.addEventListener("mouseenter", (event) => {
  const table = findElement(".product__cart--js");

  const tHead = findElement(".product-cart__table-head--js");

  const tBody = findElement(".product-cart__box--js");
  const tBodyImg = findElements(".product-cart__img--js");
  const tBodyTr = findElements(".product-cart__grid--js");
  const tBodyTdModel = findElements(".product-cart__model--js");
  const tBodyTdChar = findElements(".product-cart__characteristic--js");
  const tBodyTdCharType = findElements(".characteristic__type--js");
  const tBodyTdPrice = findElements(".product-cart__price--js");

  toggleClass(table, "table");

  toggleClass(tHead, "hidden");

  toggleClass(tBody, "table-body");
  toggleClasses(tBodyImg, "table-img");
  toggleClasses(tBodyTr, "table-tr");
  toggleClasses(tBodyTdModel, "table-th-td");
  toggleClasses(tBodyTdChar, "table-th-td");
  toggleClasses(tBodyTdCharType, "hidden");
  toggleClasses(tBodyTdPrice, "table-th-td");
});