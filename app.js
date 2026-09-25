const products = [

  // =========================
  // FEUERWERKSBATTERIEN
  // =========================

  { id: "C2", name: "Wintersun", category: "Batterien", manufacturer: "Argento", shots: "16", price: 9.00, nem: "134g", stock: 69 },
  { id: "C6", name: "Blitz Rums 16", category: "Batterien", manufacturer: "Funke (Iskra)", shots: "16", price: 9.00, nem: "80g", stock: 53 },
  { id: "C12", name: "Monster", category: "Batterien", manufacturer: "Riakeo", shots: "24", price: 49.00, nem: "492g", stock: 1 },
  { id: "C14", name: "Frostbrand", category: "Batterien", manufacturer: "Argento", shots: "16", price: 10.00, nem: "168g", stock: 48 },
  { id: "C17", name: "Firlefanz", category: "Batterien", manufacturer: "Argento", shots: "16", price: 9.00, nem: "135g", stock: 9 },
  { id: "C18", name: "Plasma", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "260g", stock: 14 },
  { id: "C20", name: "Aeon", category: "Batterien", manufacturer: "Funke (Albert)", shots: "7", price: 4.00, nem: "56g", stock: 89 },
  { id: "C25", name: "Opal", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "325g", stock: 13 },
  { id: "C28", name: "No Fear", category: "Batterien", manufacturer: "Pyro Specials", shots: "24", price: 39.00, nem: "480g", stock: 2 },
  { id: "C29", name: "Red Crossette", category: "Batterien", manufacturer: "Argento", shots: "16", price: 9.00, nem: "208g", stock: 1 },
  { id: "C30", name: "Hysteria", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "287g", stock: 1 },
  { id: "C32", name: "Strobek", category: "Batterien", manufacturer: "Funke (Iskra)", shots: "16", price: 9.00, nem: "146g", stock: 36 },
  { id: "C33", name: "Baron Brokat", category: "Batterien", manufacturer: "Funke (Albert)", shots: "16", price: 13.00, nem: "227g", stock: 21 },
  { id: "C34", name: "Orchid", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "260g", stock: 10 },
  { id: "C35", name: "Kaskade", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "254g", stock: 16 },
  { id: "C36", name: "Ultramarin", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "325g", stock: 14 },
  { id: "C37", name: "Leuchtnebel", category: "Batterien", manufacturer: "Argento", shots: "25", price: 39.00, nem: "500g", stock: 19 },
  { id: "C38", name: "Smaragd", category: "Batterien", manufacturer: "Argento", shots: "10", price: 12.00, nem: "138g", stock: 44 },
  { id: "C39", name: "Hacker Man", category: "Batterien", manufacturer: "Funke (Albert)", shots: "19", price: 29.00, nem: "380g", stock: 5 },
  { id: "C40", name: "Asoka", category: "Batterien", manufacturer: "Funke (Albert)", shots: "7", price: 4.00, nem: "56g", stock: 55 },
  { id: "C41", name: "Harlekin", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "325g", stock: 14 },
  { id: "C42", name: "Terremoto 1s", category: "Batterien", manufacturer: "El Gato", shots: "50", price: 39.00, nem: "391g", stock: 3 },
  { id: "C43", name: "Golden Spider", category: "Batterien", manufacturer: "Pyrocentury", shots: "25", price: 49.00, nem: "500g", stock: 4 },

  // Ausnahme: vorher ausverkauft
  { id: "C44", name: "Veronica", category: "Batterien", manufacturer: "Argento", shots: "13", price: 19.00, nem: "325g", stock: 32 },


  // =========================
  // BOMBENROHRE
  // ALLE BEHALTEN
  // =========================

  { id: "B1", name: "Thunder Air Bomb", category: "Bombenrohre", manufacturer: "Piromax", pieces: "8", price: 7.00, nem: "34,4g (4,3g/Stk)", stock: 0 },
  { id: "B2", name: "DumBum Triple", category: "Bombenrohre", manufacturer: "Klasek", pieces: "5", price: 12.00, nem: "120g (24g/Stk)", stock: 70 },
  { id: "B3", name: "Gold Grown", category: "Bombenrohre", manufacturer: "Panta", pieces: "4", price: 9.00, nem: "68,8g (17,2g/Stk)", stock: 0 },
  { id: "B4", name: "XXL Thunder", category: "Bombenrohre", manufacturer: "Panta", pieces: "4", price: 9.00, nem: "68,8g (17,2g/Stk)", stock: 30 },
  { id: "B5", name: "Dum Bum 20mm", category: "Bombenrohre", manufacturer: "Klasek", pieces: "10", price: 9.00, nem: "80g (8g/Stk)", stock: 145 },
  { id: "B6", name: "God Song", category: "Bombenrohre", manufacturer: "Riakeo", pieces: "4", price: 18.00, nem: "100g (25g/Stk)", stock: 0 },
  { id: "B7", name: "Glamour Shots", category: "Bombenrohre", manufacturer: "Funke (Albert)", pieces: "10", price: 11.00, nem: "90g (9g/Stk)", stock: 42 },
  { id: "B8", name: "Vortex Saluts", category: "Bombenrohre", manufacturer: "Funke", pieces: "10", price: 12.00, nem: "63g (6,3g/Stk)", stock: 0 },
  { id: "B9", name: "Carcasa", category: "Bombenrohre", manufacturer: "Pyrocentury", pieces: "4", price: 10.00, nem: "70g (17,5g/Stk)", stock: 25 },
  { id: "B10", name: "Big Bang 15G", category: "Bombenrohre", manufacturer: "Orion", pieces: "4", price: 10.00, nem: "60,4g (15,4g/Stk)", stock: 60 },


  // =========================
  // BÖLLER / KNALLER
  // =========================

  { id: "K1", name: "Blauer Berber", category: "Böller/Knaller", manufacturer: "Funke", pieces: "20", price: 6.00, nem: "30g (1,5g/Stk)", stock: 46 },
  { id: "K2", name: "Knallfrösche C", category: "Böller/Knaller", manufacturer: "Funke", pieces: "4", price: 2.00, nem: "10g (2,5g/Stk)", stock: 50 },
  { id: "K3", name: "Dum Bum Big F2", category: "Böller/Knaller", manufacturer: "Klasek", pieces: "10", price: 3.00, nem: "10g (1g/Stk)", stock: 59 },
  { id: "K4", name: "No Limits Banger", category: "Böller/Knaller", manufacturer: "Piromax", pieces: "5", price: 4.00, nem: "25g (5g/Stk)", stock: 10 },
  { id: "K5", name: "Dum Bum Black Thunder", category: "Böller/Knaller", manufacturer: "Klasek", pieces: "100", price: 9.00, nem: "100g (1g/Stk)", stock: 117 },
  { id: "K6", name: "Bellabomba", category: "Böller/Knaller", manufacturer: "Blackboxx", pieces: "10", price: 4.00, nem: "15g (1,5g/Stk)", stock: 93 },
  { id: "K7", name: "Dum Bum Black Pirate", category: "Böller/Knaller", manufacturer: "Klasek", pieces: "100", price: 4.00, nem: "85g (0,85g/Stk)", stock: 69 },
  { id: "K8", name: "Krawum", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "5", price: 5.00, nem: "30g (6g/Stk)", stock: 20 },
  { id: "K9", name: "Kubischer Kanonenschlag", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "3", price: 5.00, nem: "15g (5g/Stk)", stock: 64 },
  { id: "K10-A", name: "China Böller C (Einzelpackung)", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "5", price: 3.00, nem: "-", stock: 110 },
  { id: "K10-B", name: "China Böller C (Schinken)", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "100", price: 49.00, nem: "-", stock: 5 },
  { id: "K11-A", name: "China Böller D (Einzelpackung)", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "4", price: 3.50, nem: "-", stock: 88 },
  { id: "K11-B", name: "China Böller D (Schinken)", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "80", price: 59.00, nem: "-", stock: 4 },
  { id: "K12", name: "Super Böller I", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "4", price: 4.00, nem: "-", stock: 50 },
  { id: "K13", name: "Super Böller II", category: "Böller/Knaller", manufacturer: "Pulver", pieces: "4", price: 4.50, nem: "-", stock: 35 },


  // =========================
  // RAKETEN
  // =========================

  { id: "R1", name: "Shell Show", category: "Raketen", manufacturer: "Klasek", pieces: "6", price: 39.00, nem: "6 x 75g", stock: 29 },
  { id: "R2", name: "Mach One", category: "Raketen", manufacturer: "Riakeo", pieces: "10", price: 29.00, nem: "10 x 20g", stock: 2 },
  { id: "R3", name: "Signature Range Rocket", category: "Raketen", manufacturer: "Klasek", pieces: "5", price: 25.00, nem: "5 x 75g", stock: 36 },
  { id: "R6", name: "Baby-Raketen Titansalut", category: "Raketen", manufacturer: "Funke", pieces: "50", price: 8.00, nem: "50 x 0,5g", stock: 48 },
  { id: "R7", name: "Ariane 50", category: "Raketen", manufacturer: "Riakeo", pieces: "5", price: 29.00, nem: "5 x 50g", stock: 64 },
  { id: "R8", name: "No Limits", category: "Raketen", manufacturer: "Piromax", pieces: "4", price: 24.00, nem: "4 x 44g", stock: 55 },
  { id: "R9", name: "Pyro Party Family Pack", category: "Raketen", manufacturer: "Lesli", pieces: "137", price: 12.00, nem: "95g", stock: 24 },
  { id: "R10", name: "Pfeifrakete Kal. C (3-Stufen-Cracker)", category: "Raketen", manufacturer: "Funke", pieces: "6", price: 4.00, nem: "6 x 6g", stock: 3 },
  { id: "R11", name: "Mini Rockets (mit Pfiff und Knall)", category: "Raketen", manufacturer: "Panta", pieces: "50", price: 5.00, nem: "50 x 1,1g", stock: 81 },
  { id: "R12", name: "Super 6", category: "Raketen", manufacturer: "Pulver", pieces: "6", price: 19.00, nem: "6 x 20g", stock: 7 },
  { id: "R13", name: "Salutraketen mit Pfeiffaufstieg", category: "Raketen", manufacturer: "Pulver", pieces: "-", price: 29.00, nem: "-", stock: 4 },
  { id: "R14", name: "Ronin", category: "Raketen", manufacturer: "Piromax", pieces: "6", price: 8.00, nem: "6 x 7g", stock: 22 },
  { id: "R15", name: "Fun 4 All Pack", category: "Raketen", manufacturer: "Lesli", pieces: "122", price: 16.00, nem: "117g", stock: 26 },
  { id: "R16", name: "Silberblitz Raketen", category: "Raketen", manufacturer: "Funke", pieces: "10", price: 12.00, nem: "10 x 6g", stock: 29 },
  { id: "R17", name: "Ariane 38", category: "Raketen", manufacturer: "Riakeo", pieces: "6", price: 19.00, nem: "6 x 20g", stock: 35 },


  // =========================
  // LEUCHTFEUERWERK
  // =========================

  { id: "L1", name: "Super Etna", category: "Leuchtfeuerwerk", manufacturer: "Panta", pieces: "6", price: 6.00, nem: "61g (10,2g/Stk)", stock: 28 },
  { id: "L2", name: "Funkenball A Silber", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "6", price: 2.00, nem: "12g (2g/Stk)", stock: 218 },
  { id: "L2-B", name: "Funkenball A Silber Display", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "12x6", price: 19.00, nem: "144g (2g/Stk)", stock: 17 },
  { id: "L3", name: "Sonnenvögel groß", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "6", price: 12.00, nem: "78g (12g/Stk)", stock: 15 },
  { id: "L4", name: "5'' Assorted Fountain", category: "Leuchtfeuerwerk", manufacturer: "Panta", pieces: "6", price: 6.00, nem: "78g (12g/Stk)", stock: 50 },
  { id: "L6", name: "No Limits Fontäne", category: "Leuchtfeuerwerk", manufacturer: "Piromax", pieces: "1", price: 9.00, nem: "180g", stock: 30 },
  { id: "L8", name: "Strobo 90s", category: "Leuchtfeuerwerk", manufacturer: "Piromax", pieces: "3", price: 4.00, nem: "70,5g (23,5g/Stk)", stock: 99 },
  { id: "L10", name: "Geysir Kal. C", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "3", price: 7.00, nem: "87g (29g/Stk)", stock: 19 },
  { id: "L11", name: "Römische Lichter 30er", category: "Leuchtfeuerwerk", manufacturer: "PyroAustria", pieces: "12", price: 9.00, nem: "90g (7,5g/Stk)", stock: 52 },
  { id: "L13", name: "Neon Hummeln", category: "Leuchtfeuerwerk", manufacturer: "Funke (Albert)", pieces: "6", price: 2.00, nem: "22,5g (3,7g/Stk)", stock: 192 },
  { id: "L13-B", name: "Neon Hummeln Display", category: "Leuchtfeuerwerk", manufacturer: "Funke (Albert)", pieces: "12x6", price: 19.00, nem: "259g (3,7g/Stk)", stock: 28 },
  { id: "L14", name: "Vesuvio Fontänenparade", category: "Leuchtfeuerwerk", manufacturer: "Blackboxx", pieces: "3", price: 4.00, nem: "30g (10g/Stk)", stock: 33 },
  { id: "L15", name: "Dynamite Kids (Jugendsortiment)", category: "Leuchtfeuerwerk", manufacturer: "Lesli", pieces: "186", price: 9.00, nem: "42g", stock: 8 },
  { id: "L16", name: "Krazy Panda", category: "Leuchtfeuerwerk", manufacturer: "Lesli", pieces: "78", price: 4.00, nem: "17g", stock: 34 },
  { id: "L17", name: "No Limits Gold Fontäne", category: "Leuchtfeuerwerk", manufacturer: "Piromax", pieces: "1", price: 14.00, nem: "240g", stock: 40 },
  { id: "L18-A", name: "Majestic Sparks 1", category: "Leuchtfeuerwerk", manufacturer: "Riakeo", pieces: "1", price: 14.00, nem: "250g", stock: 13 },
  { id: "L18-B", name: "Majestic Sparks 2", category: "Leuchtfeuerwerk", manufacturer: "Riakeo", pieces: "1", price: 14.00, nem: "250g", stock: 12 },
  { id: "L19-A", name: "Vulkane (Gold-Silver)", category: "Leuchtfeuerwerk", manufacturer: "Bugano", pieces: "1", price: 14.00, nem: "250g", stock: 23 },
  { id: "L19-B", name: "Vulkane (Color Stars)", category: "Leuchtfeuerwerk", manufacturer: "Bugano", pieces: "1", price: 14.00, nem: "250g", stock: 15 },
  { id: "L20", name: "Nachtfalter", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "10", price: 4.00, nem: "10g (1g/Stk)", stock: 1 },
  { id: "L21", name: "Funkenregen Silber", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "12", price: 5.00, nem: "90g (7,5g/Stk)", stock: 98 },
  { id: "L22", name: "Explosive Balls", category: "Leuchtfeuerwerk", manufacturer: "Piromax", pieces: "3", price: 3.00, nem: "26g (12g/Stk)", stock: 68 },
  { id: "L23", name: "Mosquito Cirkoblitz", category: "Leuchtfeuerwerk", manufacturer: "Piromax", pieces: "6", price: 1.50, nem: "10g (1,7g/Stk)", stock: 219 },

  // Ausnahmen mit neuem Lagerstand
  { id: "L24", name: "Sonnenvögel klein", category: "Leuchtfeuerwerk", manufacturer: "Funke", pieces: "12", price: 6.00, nem: "24g (2g/Stk)", stock: 60 },
  { id: "L25", name: "Neon Hornissen", category: "Leuchtfeuerwerk", manufacturer: "Funke (Albert)", pieces: "4", price: 2.50, nem: "40g (10g/Stk)", stock: 100 },
  { id: "L25-B", name: "Neon Hornissen Display", category: "Leuchtfeuerwerk", manufacturer: "Funke (Albert)", pieces: "12x4", price: 25.00, nem: "480g (10g/Stk)", stock: 10 },


  // =========================
  // VERBUNDFEUERWERK
  // ALLE BEHALTEN
  // =========================

  { id: "V1", name: "Rebel Yell", category: "Verbundfeuerwerk", manufacturer: "Funke (Albert)", shots: "55", price: 79.00, nem: "885g", stock: 30 },
  { id: "V2", name: "Szakal", category: "Verbundfeuerwerk", manufacturer: "Funke (Iskra)", shots: "99", price: 79.00, nem: "907g", stock: 0 },
  { id: "V3", name: "Minerva Reconquista", category: "Verbundfeuerwerk", manufacturer: "Argento", shots: "144", price: 149.00, nem: "1987g", stock: 0 },
  { id: "V4", name: "King Of Bling", category: "Verbundfeuerwerk", manufacturer: "Funke (Albert)", shots: "100", price: 99.00, nem: "1258g", stock: 0 },
  { id: "V5", name: "King of the Sky", category: "Verbundfeuerwerk", manufacturer: "Pyro Specials", shots: "188", price: 299.00, nem: "3870g", stock: 0 },
  { id: "V6", name: "No Limits Gold", category: "Verbundfeuerwerk", manufacturer: "Piromax", shots: "80", price: 139.00, nem: "1600g", stock: 0 },
  { id: "V7", name: "The Neonfather", category: "Verbundfeuerwerk", manufacturer: "Funke (Albert)", shots: "103", price: 89.00, nem: "963g", stock: 1 },
  { id: "V8", name: "Pyroshow 2000 Sacramentum", category: "Verbundfeuerwerk", manufacturer: "Argento", shots: "100", price: 169.00, nem: "2000g", stock: 0 },
  { id: "V10", name: "Aniol", category: "Verbundfeuerwerk", manufacturer: "Funke (Iskra)", shots: "103", price: 99.00, nem: "988g", stock: 0 },
  { id: "V11", name: "Smooth Operator", category: "Verbundfeuerwerk", manufacturer: "Pyro Specials", shots: "100", price: 229.00, nem: "2000g", stock: 4 },
  { id: "V12", name: "Time to Shine", category: "Verbundfeuerwerk", manufacturer: "Pyro Specials", shots: "266", price: 279.00, nem: "3496g", stock: 4 },
  { id: "V13", name: "Okazja", category: "Verbundfeuerwerk", manufacturer: "Funke (Iskra)", shots: "128", price: 89.00, nem: "794g", stock: 4 },
  { id: "V14", name: "Kiss From Hell", category: "Verbundfeuerwerk", manufacturer: "Pyro Specials", shots: "91", price: 129.00, nem: "1500g", stock: 7 },
  { id: "V15", name: "Wilk (gute Batch 2023)", category: "Verbundfeuerwerk", manufacturer: "Funke (Iskra)", shots: "99", price: 99.00, nem: "907g", stock: 2 },
  { id: "V16", name: "Boom Box XL", category: "Verbundfeuerwerk", manufacturer: "Pyro Specials", shots: "218", price: 299.00, nem: "3974g", stock: 2 },
  { id: "V17", name: "Candy Mountain", category: "Verbundfeuerwerk", manufacturer: "Funke (Albert)", shots: "100", price: 99.00, nem: "1600g", stock: 10 },
  { id: "V18", name: "Coconut Grove", category: "Verbundfeuerwerk", manufacturer: "Argento", shots: "144", price: 139.00, nem: "1987g", stock: 10 }
];


// =====================================
// WARENKORB
// =====================================

let cart = JSON.parse(localStorage.getItem("zpCart") || "[]");

// Sicherheit: Falls alter/kaputter Warenkorb vorhanden ist
if (!Array.isArray(cart)) {
  cart = [];
  localStorage.removeItem("zpCart");
}

function saveCart() {
  localStorage.setItem("zpCart", JSON.stringify(cart));
}


// =====================================
// ELEMENTE
// =====================================

const productsContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalElement = document.getElementById("total");
const filterElement = document.getElementById("filter");
const orderForm = document.getElementById("orderForm");


// =====================================
// PRODUKTE ANZEIGEN
// =====================================

function renderProducts() {

  if (!productsContainer) return;

  const selectedCategory = filterElement ? filterElement.value : "all";

  const filteredProducts = products.filter(product => {
    return selectedCategory === "all" ||
           product.category === selectedCategory;
  });

  productsContainer.innerHTML = "";

  filteredProducts.forEach(product => {

    const card = document.createElement("div");
    card.className = "product-card";

    const isBombenrohr = product.category === "Bombenrohre";
    const isVerbund = product.category === "Verbundfeuerwerk";

    const soldOut = product.stock <= 0;

    let details = "";

    if (product.shots) {
      details += `<span>${product.shots} Schuss</span>`;
    }

    if (product.pieces) {
      details += `<span>${product.pieces} Stück</span>`;
    }

    if (product.nem && product.nem !== "-") {
      details += `<span>NEM: ${product.nem}</span>`;
    }

    card.innerHTML = 
      <div class="product-image">
        <div class="product-placeholder">
          ${product.id}
        </div>
      </div>

      <div class="product-content">
        <img
          src="bilder/${product.id}.png"
          alt="${product.name}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="product-category">
          ${product.category}
        </div>

        <h3>${product.name}</h3>

        <p class="product-manufacturer">
          ${product.manufacturer}
        </p>

        <div class="product-details">
          ${details}
        </div>

        <div class="product-price">
          ${product.price.toFixed(2).replace(".", ",")} €
        </div>

        <div class="product-stock ${soldOut ? "empty" : ""}">
          ${
            soldOut
              ? "Ausverkauft"
              : `Lagerstand: ${product.stock}`
          }
        </div>

        <button
          class="add-to-cart"
          data-id="${product.id}"
          ${soldOut ? "disabled" : ""}
        >
          ${
            soldOut
              ? "Ausverkauft"
              : "In den Warenkorb"
          }
        </button>

      </div>
    `;

    productsContainer.appendChild(card);
  });

  attachCartButtons();
}


// =====================================
// BUTTONS
// =====================================

function attachCartButtons() {

  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {

    button.addEventListener("click", function () {

      const productId = this.dataset.id;

      addToCart(productId);

    });

  });
}


// =====================================
// PRODUKT IN WARENKORB
// =====================================

function addToCart(productId) {

  const product = products.find(item => item.id === productId);

  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {

    if (existingItem.quantity >= product.stock && product.stock > 0) {
      alert(`Von "${product.name}" sind nur ${product.stock} Stück verfügbar.`);
      return;
    }

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      quantity: 1
    });

  }

  saveCart();
  renderCart();

  // Kurzes Feedback
  const button = document.querySelector(
    `.add-to-cart[data-id="${productId}"]`
  );

  if (button) {

    const originalText = button.textContent;

    button.textContent = "✓ Hinzugefügt";

    setTimeout(() => {
      button.textContent = originalText;
    }, 1200);

  }
}


// =====================================
// WARENKORB ANZEIGEN
// =====================================

function renderCart() {

  if (!cartContainer || !totalElement) return;

  // Sicherheit gegen beschädigte localStorage-Daten
  if (!Array.isArray(cart)) {
    cart = [];
    saveCart();
  }

  cartContainer.innerHTML = "";

  if (cart.length === 0) {

    cartContainer.innerHTML = `
      <p class="empty-cart">
        Deine Anfrage ist noch leer.
      </p>
    `;

    totalElement.textContent = "0,00 €";

    return;
  }

  let total = 0;

  cart.forEach(item => {

    const product = products.find(product => product.id === item.id);

    if (!product) return;

    const quantity = Number(item.quantity) || 1;

    const itemTotal = product.price * quantity;

    total += itemTotal;

    const cartItem = document.createElement("div");

    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div class="cart-item-info">

        <strong>${product.name}</strong>

        <span>
          ${product.price.toFixed(2).replace(".", ",")} €
          × ${quantity}
        </span>

      </div>

      <div class="cart-item-controls">

        <button
          type="button"
          class="quantity decrease"
          data-id="${product.id}"
        >
          −
        </button>

        <span>${quantity}</span>

        <button
          type="button"
          class="quantity increase"
          data-id="${product.id}"
        >
          +
        </button>

        <button
          type="button"
          class="remove-item"
          data-id="${product.id}"
        >
          Entfernen
        </button>

      </div>

      <strong class="cart-item-price">
        ${itemTotal.toFixed(2).replace(".", ",")} €
      </strong>
    `;

    cartContainer.appendChild(cartItem);

  });

  totalElement.textContent =
    `${total.toFixed(2).replace(".", ",")} €`;

  attachCartControls();
}


// =====================================
// WARENKORB-STEUERUNG
// =====================================

function attachCartControls() {

  document.querySelectorAll(".increase").forEach(button => {

    button.addEventListener("click", () => {

      const id = button.dataset.id;

      const item = cart.find(item => item.id === id);
      const product = products.find(product => product.id === id);

      if (!item || !product) return;

      if (product.stock > 0 && item.quantity >= product.stock) {
        alert(`Von "${product.name}" sind nur ${product.stock} Stück verfügbar.`);
        return;
      }

      item.quantity += 1;

      saveCart();
      renderCart();

    });

  });


  document.querySelectorAll(".decrease").forEach(button => {

    button.addEventListener("click", () => {

      const id = button.dataset.id;

      const item = cart.find(item => item.id === id);

      if (!item) return;

      item.quantity -= 1;

      if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== id);
      }

      saveCart();
      renderCart();

    });

  });


  document.querySelectorAll(".remove-item").forEach(button => {

    button.addEventListener("click", () => {

      const id = button.dataset.id;

      cart = cart.filter(item => item.id !== id);

      saveCart();
      renderCart();

    });

  });

}


// =====================================
// FILTER
// =====================================

if (filterElement) {

  filterElement.addEventListener("change", () => {
    renderProducts();
  });

}


// =====================================
// ANFRAGE ABSENDEN
// =====================================

if (orderForm) {

  orderForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (cart.length === 0) {

      alert("Bitte füge zuerst mindestens ein Produkt zur Anfrage hinzu.");

      return;
    }

    const nameElement = document.getElementById("name");
    const phoneElement = document.getElementById("phone");
    const noteElement = document.getElementById("note");
    const legalElement = document.getElementById("legal");

    const name = nameElement ? nameElement.value.trim() : "";
    const phone = phoneElement ? phoneElement.value.trim() : "";
    const note = noteElement ? noteElement.value.trim() : "";

    if (legalElement && !legalElement.checked) {

      alert("Bitte bestätige die erforderliche Erklärung.");

      return;
    }

    let message = `Hallo ZP Pyrotechnik,

ich möchte folgende Produkte anfragen:

`;

    let total = 0;

    cart.forEach(item => {

      const product = products.find(product => product.id === item.id);

      if (!product) return;

      const itemTotal = product.price * item.quantity;

      total += itemTotal;

      message +=
        `- ${product.name} (${product.id}) × ${item.quantity} = ${itemTotal.toFixed(2).replace(".", ",")} €\n`;

    });

    message += `
Gesamtwert: ${total.toFixed(2).replace(".", ",")} €

Name: ${name}
Telefon: ${phone}
`;

    if (note) {
      message += `\nAnmerkung:\n${note}\n`;
    }

    message += `
Viele Grüße
${name}
`;

    const subject =
      encodeURIComponent("Bestellanfrage – ZP Pyrotechnik");

    const body =
      encodeURIComponent(message);

    window.location.href =
      `mailto:zp.pyrotechnik@gmail.com?subject=${subject}&body=${body}`;

  });

}


// =====================================
// START
// =====================================

renderProducts();
renderCart();
