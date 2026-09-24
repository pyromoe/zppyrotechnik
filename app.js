const products = [
  {
    id: 1,
    name: "Wintersun",
    category: "Batterien",
    price: 9.00,
    stock: 10
  },
  {
    id: 2,
    name: "Frostbrand",
    category: "Batterien",
    price: 10.00,
    stock: 10
  },
  {
    id: 3,
    name: "Ariane 50",
    category: "Raketen",
    price: 29.00,
    stock: 10
  },
  {
    id: 4,
    name: "Rebel Yell",
    category: "Verbundfeuerwerk",
    price: 79.00,
    stock: 10
  }
];


let cart = JSON.parse(
  localStorage.getItem("zpCart") || "{}"
);


function formatPrice(price) {
  return price.toLocaleString("de-AT", {
    style: "currency",
    currency: "EUR"
  });
}


function saveCart() {
  localStorage.setItem(
    "zpCart",
    JSON.stringify(cart)
  );
}


/* =========================
   PRODUKTE ANZEIGEN
========================= */

function renderProducts() {

  const filter =
    document.getElementById("filter").value;

  const container =
    document.getElementById("products");


  const filteredProducts =
    products.filter(product => {

      if (filter === "Alle") {
        return true;
      }

      return product.category === filter;

    });


  container.innerHTML =
    filteredProducts.map(product => {

      const available =
        product.stock > 0;


      return `
        <article class="product-card">

          <div class="product-image">
            PRODUKTBILD
            <small>
              hier später einfügen
            </small>
          </div>


          <div class="product-content">

            <div class="product-category">
              ${product.category}
            </div>

            <h3>
              ${product.name}
            </h3>

            <div class="product-price">
              ${formatPrice(product.price)}
            </div>

            <p
              class="product-stock ${
                available ? "" : "empty"
              }"
            >
              ${
                available
                  ? `Lager: ${product.stock} Stück`
                  : "Derzeit nicht lagernd"
              }
            </p>

            <button
              class="button"
              ${
                available
                  ? ""
                  : "disabled"
              }
              onclick="addToCart(${product.id})"
            >
              ${
                available
                  ? "Auswählen"
                  : "Nicht verfügbar"
              }
            </button>

          </div>

        </article>
      `;

    }).join("");

}


/* =========================
   PRODUKT HINZUFÜGEN
========================= */

function addToCart(id) {

  const product =
    products.find(
      product => product.id === id
    );


  const currentQuantity =
    cart[id] || 0;


  if (
    currentQuantity >= product.stock
  ) {
    return;
  }


  cart[id] =
    currentQuantity + 1;


  saveCart();

  renderCart();


  document
    .getElementById("anfrage")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================
   MENGE ÄNDERN
========================= */

function changeQuantity(
  id,
  change
) {

  const product =
    products.find(
      product => product.id === id
    );


  let quantity =
    cart[id] || 0;


  quantity += change;


  if (quantity <= 0) {

    delete cart[id];

  } else if (
    quantity <= product.stock
  ) {

    cart[id] = quantity;

  }


  saveCart();

  renderCart();

}


/* =========================
   WARENKORB
========================= */

function renderCart() {

  const container =
    document.getElementById("cart");

  const totalElement =
    document.getElementById("total");


  const ids =
    Object.keys(cart);


  if (ids.length === 0) {

    container.innerHTML = `
      <p class="empty">
        Noch keine Produkte ausgewählt.
      </p>
    `;

    totalElement.textContent =
      formatPrice(0);

    return;
  }


  let total = 0;


  container.innerHTML =
    ids.map(id => {

      const product =
        products.find(
          product =>
            product.id == id
        );


      const quantity =
        cart[id];


      const itemTotal =
        product.price * quantity;


      total += itemTotal;


      return `
        <div class="cart-row">

          <div>

            <strong>
              ${product.name}
            </strong>

            <small>
              ${formatPrice(product.price)}
              pro Stück
            </small>

          </div>


          <div class="quantity">

            <button
              type="button"
              onclick="changeQuantity(
                ${product.id},
                -1
              )"
            >
              −
            </button>


            <strong>
              ${quantity}
            </strong>


            <button
              type="button"
              onclick="changeQuantity(
                ${product.id},
                1
              )"
            >
              +
            </button>

          </div>


          <strong>
            ${formatPrice(itemTotal)}
          </strong>

        </div>
      `;

    }).join("");


  totalElement.textContent =
    formatPrice(total);

}


/* =========================
   FILTER
========================= */

document
  .getElementById("filter")
  .addEventListener(
    "change",
    renderProducts
  );


/* =========================
   BESTELLANFRAGE
========================= */

document
  .getElementById("orderForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const ids =
        Object.keys(cart);


      if (ids.length === 0) {

        alert(
          "Bitte zuerst mindestens ein Produkt auswählen."
        );

        return;
      }


      const name =
        document
          .getElementById("name")
          .value
          .trim();


      const phone =
        document
          .getElementById("phone")
          .value
          .trim();


      const note =
        document
          .getElementById("note")
          .value
          .trim();


      let total = 0;

      let productLines = [];


      ids.forEach(id => {

        const product =
          products.find(
            product =>
              product.id == id
          );


        const quantity =
          cart[id];


        const itemTotal =
          product.price * quantity;


        total += itemTotal;


        productLines.push(
          `${product.name} – ${quantity} Stück – ${formatPrice(itemTotal)}`
        );

      });


      const emailBody = `Hallo ZP Pyrotechnik,

ich möchte folgende Bestellanfrage senden:

${productLines.join("\n")}

Gesamtsumme: ${formatPrice(total)}

Name: ${name}
Telefon: ${phone}

Nachricht:
${note}

Bitte um Rückmeldung zur Verfügbarkeit und weiteren Abwicklung.

Viele Grüße
${name}`;


      const emailAddress =
        "zp.pyrotechnik@gmail.com";


      const subject =
        "Bestellanfrage ZP Pyrotechnik";


      const mailto =
        "mailto:" +
        emailAddress +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(emailBody);


      window.location.href =
        mailto;

    }
  );


renderProducts();

renderCart();
