const email = "zp.pyrotechnik@gmail.com";

const products = [
  { id:"C1", name:"Scorpio", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"325g", stock:0 },
  { id:"C2", name:"Wintersun", category:"Batterien", manufacturer:"Argento", shots:"16", price:9, nem:"134g", stock:69 },
  { id:"C3", name:"Armor", category:"Batterien", manufacturer:"Piromax", shots:"16", price:17, nem:"224g", stock:0 },
  { id:"C4", name:"Nobile", category:"Batterien", manufacturer:"Argento", shots:"10", price:8, nem:"84,2g", stock:0 },
  { id:"C5", name:"Carolus", category:"Batterien", manufacturer:"Argento", shots:"16", price:25, nem:"320g", stock:0 },
  { id:"C6", name:"Blitz Rums 16", category:"Batterien", manufacturer:"Funke (Iskra)", shots:"16", price:9, nem:"80g", stock:53 },
  { id:"C7", name:"Tricolor", category:"Batterien", manufacturer:"Argento", shots:"25", price:18, nem:"263g", stock:0 },
  { id:"C8", name:"Snowblind Z-1", category:"Batterien", manufacturer:"Funke", shots:"49", price:49, nem:"490g", stock:0 },
  { id:"C9", name:"Inferno", category:"Batterien", manufacturer:"Piromax", shots:"25", price:12, nem:"155g", stock:0 },
  { id:"C10", name:"El Chapo", category:"Batterien", manufacturer:"Pyro Specials", shots:"25", price:39, nem:"500g", stock:0 },
  { id:"C11", name:"Vortex 3", category:"Batterien", manufacturer:"Riakeo", shots:"25", price:45, nem:"500g", stock:0 },
  { id:"C12", name:"Monster", category:"Batterien", manufacturer:"Riakeo", shots:"24", price:49, nem:"492g", stock:1 },
  { id:"C13", name:"Capri", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"325g", stock:0 },
  { id:"C14", name:"Frostbrand", category:"Batterien", manufacturer:"Argento", shots:"16", price:10, nem:"168g", stock:48 },
  { id:"C15", name:"Flamingo Flamethrower", category:"Batterien", manufacturer:"Funke (Albert)", shots:"25", price:11, nem:"200g", stock:0 },
  { id:"C16", name:"Zirkonia", category:"Batterien", manufacturer:"Argento", shots:"-", price:0, nem:"-", stock:0 },
  { id:"C17", name:"Firlefanz", category:"Batterien", manufacturer:"Argento", shots:"16", price:9, nem:"135g", stock:9 },
  { id:"C18", name:"Plasma", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"260g", stock:14 },
  { id:"C19", name:"Expression", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"287g", stock:0 },
  { id:"C20", name:"Aeon", category:"Batterien", manufacturer:"Funke (Albert)", shots:"7", price:4, nem:"56g", stock:89 },
  { id:"C21", name:"Zaplon", category:"Batterien", manufacturer:"Funke (Iskra)", shots:"33", price:38, nem:"494g", stock:0 },
  { id:"C22", name:"Sakkara", category:"Batterien", manufacturer:"Argento", shots:"40", price:49, nem:"500g", stock:0 },
  { id:"C23", name:"Avalanche", category:"Batterien", manufacturer:"Argento", shots:"25", price:49, nem:"497g", stock:0 },
  { id:"C24", name:"Flora", category:"Batterien", manufacturer:"Argento", shots:"25", price:39, nem:"500g", stock:0 },
  { id:"C25", name:"Opal", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"325g", stock:13 },
  { id:"C26", name:"Money Talks", category:"Batterien", manufacturer:"Pyro Specials", shots:"19", price:29, nem:"380g", stock:0 },
  { id:"C27", name:"China Style", category:"Batterien", manufacturer:"Pyro Specials", shots:"20", price:29, nem:"400g", stock:0 },
  { id:"C28", name:"No Fear", category:"Batterien", manufacturer:"Pyro Specials", shots:"24", price:39, nem:"480g", stock:2 },
  { id:"C29", name:"Red Crossette", category:"Batterien", manufacturer:"Argento", shots:"16", price:9, nem:"208g", stock:1 },
  { id:"C30", name:"Hysteria", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"287g", stock:1 },
  { id:"C31", name:"Hustler", category:"Batterien", manufacturer:"Pyro Specials", shots:"25", price:39, nem:"500g", stock:0 },
  { id:"C32", name:"Strobek", category:"Batterien", manufacturer:"Funke (Iskra)", shots:"16", price:9, nem:"146g", stock:36 },
  { id:"C33", name:"Baron Brokat", category:"Batterien", manufacturer:"Funke (Albert)", shots:"16", price:13, nem:"227g", stock:21 },
  { id:"C34", name:"Orchid", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"260g", stock:10 },
  { id:"C35", name:"Kaskade", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"254g", stock:16 },
  { id:"C36", name:"Ultramarin", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"325g", stock:14 },
  { id:"C37", name:"Leuchtnebel", category:"Batterien", manufacturer:"Argento", shots:"25", price:39, nem:"500g", stock:19 },
  { id:"C38", name:"Smaragd", category:"Batterien", manufacturer:"Argento", shots:"10", price:12, nem:"138g", stock:44 },
  { id:"C39", name:"Hacker Man", category:"Batterien", manufacturer:"Funke (Albert)", shots:"19", price:29, nem:"380g", stock:5 },
  { id:"C40", name:"Asoka", category:"Batterien", manufacturer:"Funke (Albert)", shots:"7", price:4, nem:"56g", stock:55 },
  { id:"C41", name:"Harlekin", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"325g", stock:14 },
  { id:"C42", name:"Terremoto 1s", category:"Batterien", manufacturer:"El Gato", shots:"50", price:39, nem:"391g", stock:3 },
  { id:"C43", name:"Golden Spider", category:"Batterien", manufacturer:"Pyrocentury", shots:"25", price:49, nem:"500g", stock:4 },
  { id:"C44", name:"Veronica", category:"Batterien", manufacturer:"Argento", shots:"13", price:19, nem:"325g", stock:0 },

  { id:"B1", name:"Thunder Air Bomb", category:"Bombenrohre", manufacturer:"Piromax", pieces:"8", price:7, nem:"34,4g", stock:0 },
  { id:"B2", name:"DumBum Triple", category:"Bombenrohre", manufacturer:"Klasek", pieces:"5", price:12, nem:"120g", stock:70 },
  { id:"B3", name:"Gold Grown", category:"Bombenrohre", manufacturer:"Panta", pieces:"4", price:9, nem:"68,8g", stock:0 },
  { id:"B4", name:"XXL Thunder", category:"Bombenrohre", manufacturer:"Panta", pieces:"4", price:9, nem:"68,8g", stock:30 },
  { id:"B5", name:"Dum Bum 20mm", category:"Bombenrohre", manufacturer:"Klasek", pieces:"10", price:9, nem:"80g", stock:145 },
  { id:"B6", name:"God Song", category:"Bombenrohre", manufacturer:"Riakeo", pieces:"4", price:18, nem:"100g", stock:0 },
  { id:"B7", name:"Glamour Shots", category:"Bombenrohre", manufacturer:"Funke (Albert)", pieces:"10", price:11, nem:"90g", stock:42 },
  { id:"B8", name:"Vortex Saluts", category:"Bombenrohre", manufacturer:"Funke", pieces:"10", price:12, nem:"63g", stock:0 },
  { id:"B9", name:"Carcasa", category:"Bombenrohre", manufacturer:"Pyrocentury", pieces:"4", price:10, nem:"70g", stock:25 },
  { id:"B10", name:"Big Bang 15G", category:"Bombenrohre", manufacturer:"Orion", pieces:"4", price:10, nem:"60,4g", stock:0 },

  { id:"K1", name:"Blauer Berber", category:"Böller/Knaller", manufacturer:"Funke", pieces:"20", price:6, nem:"30g", stock:46 },
  { id:"K2", name:"Knallfrösche C", category:"Böller/Knaller", manufacturer:"Funke", pieces:"4", price:2, nem:"10g", stock:50 },
  { id:"K3", name:"Dum Bum Big F2", category:"Böller/Knaller", manufacturer:"Klasek", pieces:"10", price:3, nem:"10g", stock:59 },
  { id:"K4", name:"No Limits Banger", category:"Böller/Knaller", manufacturer:"Piromax", pieces:"5", price:4, nem:"25g", stock:10 },
  { id:"K5", name:"Dum Bum Black Thunder", category:"Böller/Knaller", manufacturer:"Klasek", pieces:"100", price:9, nem:"100g", stock:117 },
  { id:"K6", name:"Bellabomba", category:"Böller/Knaller", manufacturer:"Blackboxx", pieces:"10", price:4, nem:"15g", stock:93 },
  { id:"K7", name:"Dum Bum Black Pirate", category:"Böller/Knaller", manufacturer:"Klasek", pieces:"100", price:4, nem:"85g", stock:69 },
  { id:"K8", name:"Krawum", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"5", price:5, nem:"30g", stock:20 },
  { id:"K9", name:"Kubischer Kanonenschlag", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"3", price:5, nem:"15g", stock:64 },
  { id:"K10-A", name:"China Böller C (Einzelpackung)", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"5", price:3, nem:"-", stock:110 },
  { id:"K10-B", name:"China Böller C (Schinken)", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"100", price:49, nem:"-", stock:5 },
  { id:"K11-A", name:"China Böller D (Einzelpackung)", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"4", price:3.5, nem:"-", stock:88 },
  { id:"K11-B", name:"China Böller D (Schinken)", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"80", price:59, nem:"-", stock:4 },
  { id:"K12", name:"Super Böller I", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"4", price:4, nem:"-", stock:50 },
  { id:"K13", name:"Super Böller II", category:"Böller/Knaller", manufacturer:"Pulver", pieces:"4", price:4.5, nem:"-", stock:35 },

  { id:"R1", name:"Shell Show", category:"Raketen", manufacturer:"Klasek", pieces:"6", price:39, nem:"6 x 75g", stock:29 },
  { id:"R2", name:"Mach One", category:"Raketen", manufacturer:"Riakeo", pieces:"10", price:29, nem:"10 x 20g", stock:2 },
  { id:"R3", name:"Signature Range Rocket", category:"Raketen", manufacturer:"Klasek", pieces:"5", price:25, nem:"5 x 75g", stock:36 },
  { id:"R4", name:"Fly Falcon", category:"Raketen", manufacturer:"Panta", pieces:"9", price:23, nem:"5 x 28g + 4 x 16g", stock:0 },
  { id:"R5", name:"Pyro Show Rocket", category:"Raketen", manufacturer:"Klasek", pieces:"9", price:23, nem:"9 x 20g", stock:0 },
  { id:"R6", name:"Baby-Raketen Titansalut", category:"Raketen", manufacturer:"Funke", pieces:"50", price:8, nem:"50 x 0,5g", stock:48 },
  { id:"R7", name:"Ariane 50", category:"Raketen", manufacturer:"Riakeo", pieces:"5", price:29, nem:"5 x 50g", stock:64 },
  { id:"R8", name:"No Limits", category:"Raketen", manufacturer:"Piromax", pieces:"4", price:24, nem:"4 x 44g", stock:55 },
  { id:"R9", name:"Pyro Party Family Pack", category:"Raketen", manufacturer:"Lesli", pieces:"137", price:12, nem:"95g", stock:24 },
  { id:"R10", name:"Pfeifrakete Kal. C", category:"Raketen", manufacturer:"Funke", pieces:"6", price:4, nem:"6 x 6g", stock:3 },
  { id:"R11", name:"Mini Rockets", category:"Raketen", manufacturer:"Panta", pieces:"50", price:5, nem:"50 x 1,1g", stock:81 },
  { id:"R12", name:"Super 6", category:"Raketen", manufacturer:"Pulver", pieces:"6", price:19, nem:"6 x 20g", stock:7 },
  { id:"R13", name:"Salutraketen mit Pfeiffaufstieg", category:"Raketen", manufacturer:"Pulver", pieces:"-", price:29, nem:"-", stock:4 },
  { id:"R14", name:"Ronin", category:"Raketen", manufacturer:"Piromax", pieces:"6", price:8, nem:"6 x 7g", stock:22 },
  { id:"R15", name:"Fun 4 All Pack", category:"Raketen", manufacturer:"Lesli", pieces:"122", price:16, nem:"117g", stock:26 },
  { id:"R16", name:"Silberblitz Raketen", category:"Raketen", manufacturer:"Funke", pieces:"10", price:12, nem:"10 x 6g", stock:29 },
  { id:"R17", name:"Ariane 38", category:"Raketen", manufacturer:"Riakeo", pieces:"6", price:19, nem:"6 x 20g", stock:35 },

  { id:"L1", name:"Super Etna", category:"Leuchtfeuerwerk", manufacturer:"Panta", pieces:"6", price:6, nem:"61g", stock:28 },
  { id:"L2", name:"Funkenball A Silber", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"6", price:2, nem:"12g", stock:218 },
  { id:"L2-B", name:"Funkenball A Silber Display", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"12x6", price:19, nem:"144g", stock:17 },
  { id:"L3", name:"Sonnenvögel groß", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"6", price:12, nem:"78g", stock:15 },
  { id:"L4", name:"5'' Assorted Fountain", category:"Leuchtfeuerwerk", manufacturer:"Panta", pieces:"6", price:6, nem:"78g", stock:50 },
  { id:"L5", name:"Lametta Fontänen", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"5", price:23, nem:"400g", stock:0 },
  { id:"L6", name:"No Limits Fontäne", category:"Leuchtfeuerwerk", manufacturer:"Piromax", pieces:"1", price:9, nem:"180g", stock:30 },
  { id:"L7", name:"Titanball Mittel", category:"Leuchtfeuerwerk", manufacturer:"Argento", pieces:"6", price:6, nem:"45g", stock:0 },
  { id:"L8", name:"Strobo 90s", category:"Leuchtfeuerwerk", manufacturer:"Piromax", pieces:"3", price:4, nem:"70,5g", stock:99 },
  { id:"L9", name:"Laserballs", category:"Leuchtfeuerwerk", manufacturer:"Argento", pieces:"6", price:1.5, nem:"7g", stock:0 },
  { id:"L10", name:"Geysir Kal. C", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"3", price:7, nem:"87g", stock:19 },
  { id:"L11", name:"Römische Lichter 30er", category:"Leuchtfeuerwerk", manufacturer:"PyroAustria", pieces:"12", price:9, nem:"90g", stock:52 },
  { id:"L12-A", name:"Bengalos 40s (rot)", category:"Leuchtfeuerwerk", manufacturer:"Nico", pieces:"1", price:4, nem:"20g", stock:0 },
  { id:"L12-B", name:"Bengalos 40s (rot-blink)", category:"Leuchtfeuerwerk", manufacturer:"Nico", pieces:"1", price:4, nem:"20g", stock:0 },
  { id:"L12-C", name:"Bengalos 40s (weiß-blink)", category:"Leuchtfeuerwerk", manufacturer:"Nico", pieces:"1", price:4, nem:"20g", stock:0 },
  { id:"L13", name:"Neon Hummeln", category:"Leuchtfeuerwerk", manufacturer:"Funke (Albert)", pieces:"6", price:2, nem:"22,5g", stock:192 },
  { id:"L13-B", name:"Neon Hummeln Display", category:"Leuchtfeuerwerk", manufacturer:"Funke (Albert)", pieces:"12x6", price:19, nem:"259g", stock:28 },
  { id:"L14", name:"Vesuvio Fontänenparade", category:"Leuchtfeuerwerk", manufacturer:"Blackboxx", pieces:"3", price:4, nem:"30g", stock:33 },
  { id:"L15", name:"Dynamite Kids", category:"Leuchtfeuerwerk", manufacturer:"Lesli", pieces:"186", price:9, nem:"42g", stock:8 },
  { id:"L16", name:"Krazy Panda", category:"Leuchtfeuerwerk", manufacturer:"Lesli", pieces:"78", price:4, nem:"17g", stock:34 },
  { id:"L17", name:"No Limits Gold Fontäne", category:"Leuchtfeuerwerk", manufacturer:"Piromax", pieces:"1", price:14, nem:"240g", stock:40 },
  { id:"L18-A", name:"Majestic Sparks 1", category:"Leuchtfeuerwerk", manufacturer:"Riakeo", pieces:"1", price:14, nem:"250g", stock:13 },
  { id:"L18-B", name:"Majestic Sparks 2", category:"Leuchtfeuerwerk", manufacturer:"Riakeo", pieces:"1", price:14, nem:"250g", stock:12 },
  { id:"L19-A", name:"Vulkane (Gold-Silver)", category:"Leuchtfeuerwerk", manufacturer:"Bugano", pieces:"1", price:14, nem:"250g", stock:23 },
  { id:"L19-B", name:"Vulkane (Color Stars)", category:"Leuchtfeuerwerk", manufacturer:"Bugano", pieces:"1", price:14, nem:"250g", stock:15 },
  { id:"L20", name:"Nachtfalter", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"10", price:4, nem:"10g", stock:1 },
  { id:"L21", name:"Funkenregen Silber", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"12", price:5, nem:"90g", stock:98 },
  { id:"L22", name:"Explosive Balls", category:"Leuchtfeuerwerk", manufacturer:"Piromax", pieces:"3", price:3, nem:"26g", stock:68 },
  { id:"L23", name:"Mosquito Cirkoblitz", category:"Leuchtfeuerwerk", manufacturer:"Piromax", pieces:"6", price:1.5, nem:"10g", stock:219 },
  { id:"L24", name:"Sonnenvögel klein", category:"Leuchtfeuerwerk", manufacturer:"Funke", pieces:"12", price:6, nem:"24g", stock:0 },
  { id:"L25", name:"Neon Hornissen", category:"Leuchtfeuerwerk", manufacturer:"Funke (Albert)", pieces:"4", price:2.5, nem:"40g", stock:0 },
  { id:"L25-B", name:"Neon Hornissen Display", category:"Leuchtfeuerwerk", manufacturer:"Funke (Albert)", pieces:"12x4", price:25, nem:"480g", stock:0 },

  { id:"V1", name:"Rebel Yell", category:"Verbundfeuerwerk", manufacturer:"Funke (Albert)", shots:"55", price:79, nem:"885g", stock:0 },
  { id:"V2", name:"Szakal", category:"Verbundfeuerwerk", manufacturer:"Funke (Iskra)", shots:"99", price:79, nem:"907g", stock:0 },
  { id:"V3", name:"Minerva Reconquista", category:"Verbundfeuerwerk", manufacturer:"Argento", shots:"144", price:149, nem:"1987g", stock:0 },
  { id:"V4", name:"King Of Bling", category:"Verbundfeuerwerk", manufacturer:"Funke (Albert)", shots:"100", price:99, nem:"1258g", stock:0 },
  { id:"V5", name:"King of the Sky", category:"Verbundfeuerwerk", manufacturer:"Pyro Specials", shots:"188", price:299, nem:"3870g", stock:0 },
  { id:"V6", name:"No Limits Gold", category:"Verbundfeuerwerk", manufacturer:"Piromax", shots:"80", price:139, nem:"1600g", stock:0 },
  { id:"V7", name:"The Neonfather", category:"Verbundfeuerwerk", manufacturer:"Funke (Albert)", shots:"103", price:89, nem:"963g", stock:1 },
  { id:"V8", name:"Pyroshow 2000 Sacramentum", category:"Verbundfeuerwerk", manufacturer:"Argento", shots:"100", price:169, nem:"2000g", stock:0 },
  { id:"V10", name:"Aniol", category:"Verbundfeuerwerk", manufacturer:"Funke (Iskra)", shots:"103", price:99, nem:"988g", stock:0 },
  { id:"V11", name:"Smooth Operator", category:"Verbundfeuerwerk", manufacturer:"Pyro Specials", shots:"100", price:229, nem:"2000g", stock:4 },
  { id:"V12", name:"Time to Shine", category:"Verbundfeuerwerk", manufacturer:"Pyro Specials", shots:"266", price:279, nem:"3496g", stock:4 },
  { id:"V13", name:"Okazja", category:"Verbundfeuerwerk", manufacturer:"Funke (Iskra)", shots:"128", price:89, nem:"794g", stock:4 },
  { id:"V14", name:"Kiss From Hell", category:"Verbundfeuerwerk", manufacturer:"Pyro Specials", shots:"91", price:129, nem:"1500g", stock:7 },
  { id:"V15", name:"Wilk", category:"Verbundfeuerwerk", manufacturer:"Funke (Iskra)", shots:"99", price:99, nem:"907g", stock:2 },
  { id:"V16", name:"Boom Box XL", category:"Verbundfeuerwerk", manufacturer:"Pyro Specials", shots:"218", price:299, nem:"3974g", stock:2 },
  { id:"V17", name:"Candy Mountain", category:"Verbundfeuerwerk", manufacturer:"Funke (Albert)", shots:"100", price:99, nem:"1600g", stock:0 },
  { id:"V18", name:"Coconut Grove", category:"Verbundfeuerwerk", manufacturer:"Argento", shots:"144", price:139, nem:"1987g", stock:0 }
];


let cart = JSON.parse(localStorage.getItem("zpCart") || "[]");


const productsContainer = document.getElementById("products");
const filter = document.getElementById("filter");
const cartContainer = document.getElementById("cart");
const totalElement = document.getElementById("total");
const orderForm = document.getElementById("orderForm");


function formatPrice(price) {
  return new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR"
  }).format(price);
}


function saveCart() {
  localStorage.setItem("zpCart", JSON.stringify(cart));
}


function renderProducts() {

  const category = filter.value;

  productsContainer.innerHTML = "";

  const filteredProducts = products.filter(product => {
    return category === "all" || product.category === category;
  });


  filteredProducts.forEach(product => {

    const soldOut = product.stock <= 0;

    const amount = product.shots
      ? `${product.shots} Schuss`
      : `${product.pieces} Stück`;


    const card = document.createElement("article");

    card.className = "product-card";


    card.innerHTML = `

      <div class="product-image">
        <div class="product-placeholder">
          ${product.id}
        </div>
      </div>

      <div class="product-content">

        <div class="product-category">
          ${product.category}
        </div>

        <h3>${product.name}</h3>

        <div class="product-details">

          <div>
            <strong>Hersteller:</strong>
            ${product.manufacturer}
          </div>

          <div>
            <strong>Menge:</strong>
            ${amount}
          </div>

          <div>
            <strong>NEM:</strong>
            ${product.nem}
          </div>

        </div>

        <div class="product-price">
          ${product.price > 0 ? formatPrice(product.price) : "Preis auf Anfrage"}
        </div>

        <div class="product-stock ${soldOut ? "empty" : ""}">
          ${soldOut ? "Ausverkauft" : `${product.stock} auf Lager`}
        </div>

        <button
          type="button"
          class="add-to-cart"
          data-id="${product.id}"
          ${soldOut || product.price <= 0 ? "disabled" : ""}
        >
          ${soldOut ? "Nicht verfügbar" : "In Anfrage aufnehmen"}
        </button>

      </div>
    `;


    productsContainer.appendChild(card);
  });


  document.querySelectorAll(".add-to-cart").forEach(button => {

    button.addEventListener("click", function() {

      const id = this.dataset.id;

      addToCart(id);

    });

  });

}


function addToCart(id) {

  const product = products.find(product => product.id === id);

  if (!product) {
    return;
  }


  const existing = cart.find(item => item.id === id);


  if (existing) {

    if (existing.quantity < product.stock) {
      existing.quantity++;
    }

  } else {

    cart.push({
      id: id,
      quantity: 1
    });

  }


  saveCart();

  renderCart();

}


function removeFromCart(id) {

  cart = cart.filter(item => item.id !== id);

  saveCart();

  renderCart();

}


function changeQuantity(id, change) {

  const item = cart.find(item => item.id === id);

  const product = products.find(product => product.id === id);

  if (!item || !product) {
    return;
  }


  item.quantity += change;


  if (item.quantity > product.stock) {
    item.quantity = product.stock;
  }


  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }


  saveCart();

  renderCart();

}


function renderCart() {

  cartContainer.innerHTML = "";

  let total = 0;


  if (cart.length === 0) {

    cartContainer.innerHTML = `
      <p class="empty-cart">
        Noch keine Produkte ausgewählt.
      </p>
    `;

    totalElement.textContent = formatPrice(0);

    return;
  }


  cart.forEach(item => {

    const product = products.find(product => product.id === item.id);

    if (!product) {
      return;
    }


    const itemTotal = product.price * item.quantity;

    total += itemTotal;


    const row = document.createElement("div");

    row.className = "cart-item";


    row.innerHTML = `

      <div>
        <strong>${product.name}</strong>
        <small>${product.id}</small>
      </div>

      <div class="quantity">

        <button
          type="button"
          class="quantity-minus"
          data-id="${product.id}"
        >
          −
        </button>

        <span>
          ${item.quantity}
        </span>

        <button
          type="button"
          class="quantity-plus"
          data-id="${product.id}"
        >
          +
        </button>

      </div>

      <div>
        ${formatPrice(itemTotal)}
      </div>

    `;


    cartContainer.appendChild(row);

  });


  totalElement.textContent = formatPrice(total);


  document.querySelectorAll(".quantity-minus").forEach(button => {

    button.addEventListener("click", function() {

      changeQuantity(
        this.dataset.id,
        -1
      );

    });

  });


  document.querySelectorAll(".quantity-plus").forEach(button => {

    button.addEventListener("click", function() {

      changeQuantity(
        this.dataset.id,
        1
      );

    });

  });

}


filter.addEventListener("change", renderProducts);


orderForm.addEventListener("submit", function(event) {

  event.preventDefault();


  if (cart.length === 0) {

    alert("Bitte zuerst ein Produkt auswählen.");

    return;
  }


  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const note =
    document.getElementById("note").value.trim();

  const legal =
    document.getElementById("legal");


  if (!name || !phone) {

    alert("Bitte Name und Telefonnummer eingeben.");

    return;
  }


  if (!legal.checked) {

    alert(
      "Bitte bestätige die gesetzlichen Voraussetzungen."
    );

    return;
  }


  let total = 0;


  let body =
    "Hallo ZP Pyrotechnik,\n\n" +
    "ich möchte folgende Produkte anfragen:\n\n";


  cart.forEach(item => {

    const product =
      products.find(product => product.id === item.id);

    if (!product) {
      return;
    }


    const subtotal =
      product.price * item.quantity;

    total += subtotal;


    body +=
      `${product.id} - ${product.name}\n` +
      `Menge: ${item.quantity}\n` +
      `Einzelpreis: ${formatPrice(product.price)}\n` +
      `Zwischensumme: ${formatPrice(subtotal)}\n\n`;

  });


  body +=
    `Gesamtsumme: ${formatPrice(total)}\n\n` +
    "Kundendaten:\n" +
    `Name: ${name}\n` +
    `Telefon: ${phone}\n`;


  if (note) {

    body +=
      `\nAnmerkung:\n${note}\n`;

  }


  body +=
    "\nBitte um Rückmeldung zur weiteren Abwicklung.\n";


  const subject =
    encodeURIComponent(
      "Bestellanfrage ZP Pyrotechnik"
    );


  const mailBody =
    encodeURIComponent(body);


  window.location.href =
    `mailto:${email}?subject=${subject}&body=${mailBody}`;

});


renderProducts();
renderCart();
