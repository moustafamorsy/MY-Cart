const item = document.querySelector(".Mycart");
const price = document.querySelectorAll(".price");
const total = document.querySelector(".total");
const cartitems = document.querySelector(".Cart-items");
const product = document.querySelectorAll(".productt");

update();

item.addEventListener("click", add);
item.addEventListener("click", minus);
item.addEventListener("click", (e) => {
  if (e.target.classList.contains("heart")) {
    e.target.classList.toggle("heartred");
  }
});
item.addEventListener("click", remove);

function add(e) {
  if (e.target.classList.contains("plus")) {
    let store = parseInt(e.target.previousElementSibling.innerText);
    const tag = parseInt(
      e.target.parentElement.parentElement.parentElement.previousElementSibling
        .lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.lastElementChild.innerText
    );
    var count = store + 1;
    let total = tag * count;
    e.target.previousElementSibling.innerText = count;
    e.target.parentElement.parentElement.nextElementSibling.innerText =
      total + "$";
  }
  update();
}

function minus(e) {
  let now = parseInt(e.target.nextElementSibling.innerText);
  if (now >= 2) {
    if (e.target.classList.contains("minus")) {
      const tag = parseInt(
        e.target.parentElement.parentElement.parentElement
          .previousElementSibling.lastElementChild.lastElementChild
          .previousElementSibling.lastElementChild.lastElementChild.innerText
      );
      var count = now - 1;
      let total = tag * count;
      e.target.nextElementSibling.innerText = count;
      e.target.parentElement.parentElement.nextElementSibling.innerText =
        total + "$";
    }
  }
  update();
}

function remove(e) {
  if (e.target.classList.contains("delete")) {
    let container =
      e.target.parentElement.parentElement.parentElement.parentElement;

    e.target.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.innerText =
      "0" + "$";
    e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.innerText =
      "0" + "$";
    container.remove();
  }

  update();
}

function update() {
  var count = 0;

  var finaltotal = 0;

  for (let i = 0; price[i]; i++) {
    let money = parseInt(price[i].innerText);

    var finaltotal = finaltotal + money;

    total.innerText = finaltotal + "$";
  }

  for (let i = 0; product[i]; i++) {
    let single = parseInt(product[i].innerText);

    var count = count + single;

    cartitems.innerText = count;
  }
}
