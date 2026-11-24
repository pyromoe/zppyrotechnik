// =========================================
// WARTUNGSMODUS
// true  = Shop geschlossen, statt der Produkte erscheint ein Hinweis
// false = Shop normal geöffnet
// =========================================
const WARTUNGSMODUS = false;
const WIEDERERÖFFNUNG = "23.11.2026";

const products = [
  // FEUERWERKSBATTERIEN
  { id: "C2", name: "Wintersun", stock: 23, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "16", price: 8.99, oldPrice: 12.00, nem: "134g" },
  { id: "C17", name: "Firlefanz", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "16", price: 8.99, oldPrice: 12.00, nem: "135g" },
  { id: "C6", name: "Blitz Rums 16 (ABVERKAUF!)", stock: 38, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "16", price: 8.99, oldPrice: 12.00, nem: "80g" },
  { id: "C14", name: "Frostbrand", stock: 13, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "16", price: 9.99, oldPrice: 14.00, nem: "168g" },
  { id: "C32", name: "Strobek", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "16", price: 9.99, oldPrice: 12.00, nem: "146g" },
  { id: "C59", name: "Matrix (NEU)", stock: 23, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "16", price: 9.99, oldPrice: 12.00, nem: "168g" },
  { id: "C38", name: "Smaragd", stock: 16, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "10", price: 11.99, oldPrice: 14.00, nem: "138g" },
  { id: "C33", name: "Baron Brokat (NEU)", stock: 3, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "16", price: 12.99, oldPrice: 15.00, nem: "227g" },
  { id: "C13", name: "Capri", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "325g" },
  { id: "C18", name: "Plasma", stock: 5, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 18.99, oldPrice: 23.00, nem: "260g" },
  { id: "C19", name: "Expression", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "287g" },
  { id: "C25", name: "Opal", stock: 3, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "325g" },
  { id: "C35", name: "Kaskade", stock: 15, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 18.99, oldPrice: 23.00, nem: "254g" },
  { id: "C36", name: "Ultramarin", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "325g" },
  { id: "C41", name: "Harlekin", stock: 5, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "325g" },
  { id: "C44", name: "Veronica", stock: 17, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "325g" },
  { id: "C1", name: "Scorpio", stock: 15, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "325g" },
  { id: "C34", name: "Orchid (NEU)", stock: 4, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 18.99, oldPrice: 23.00, nem: "260g" },
  { id: "C45", name: "Impression (NEU)", stock: 6, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 19.99, oldPrice: 23.00, nem: "267g" },
  { id: "C20", name: "Aeon", stock: 45, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "7", price: 3.99, oldPrice: 5.00, nem: "56g" },
  { id: "C40", name: "Asoka", stock: 52, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "7", price: 3.99, oldPrice: 5.00, nem: "56g" },
  { id: "C57", name: "Aidos (NEU)", stock: 60, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "7", price: 3.99, oldPrice: 5.00, nem: "56g" },
  { id: "C28", name: "No Fear", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "24", price: 39.00, oldPrice: 49.00, nem: "480g" },
  //{ id: "C29", name: "Red Crossette (ABVERKAUF!)", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "16", price: 8.99, nem: "208g" },
  //{ id: "C30", name: "Hysteria", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "13", price: 18.99, nem: "287g" },
  { id: "C31", name: "Hustler", stock: 1, category: "Batterien", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "25", price: 39.00, oldPrice: 49.00, nem: "500g" },
  { id: "C37", name: "Leuchtnebel", stock: 5, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "25", price: 39.00, oldPrice: 49.00, nem: "500g" },
  { id: "C39", name: "Hacker Man", stock: 2, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "19", price: 29.00, oldPrice: 34.00, nem: "380g" },
  { id: "C42", name: "Terremoto 1s (ABVERKAUF!)", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "El Gato", shots: "50", price: 39.00, oldPrice: 49.00, nem: "391g" },
  { id: "C43", name: "Golden Spider (ABVERKAUF!)", stock: 1, category: "Batterien", categoryClass: "F2", manufacturer: "Pyrocentury", shots: "25", price: 49.00, oldPrice: 59.00, nem: "500g" },
  { id: "C12", name: "Monster (ABVERKAUF!)", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Riakeo", shots: "24", price: 49.00, oldPrice: 59.00, nem: "492g" },
  { id: "C21", name: "Zaplon", stock: 0, category: "Batterien", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "33", price: 39.00, oldPrice: 49.00, nem: "494g" },
  { id: "C22", name: "Sakkara", stock: 7, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "40", price: 49.00, oldPrice: 59.00, nem: "500g" },
  { id: "C46", name: "Splendor (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "36", price: 34.99, oldPrice: 42.00, nem: "497g" },
  { id: "C58", name: "Celestia (NEU)", stock: 9, category: "Batterien", categoryClass: "F2", manufacturer: "Argento", shots: "36", price: 39.00, oldPrice: 49.00, nem: "493g" },
  { id: "C47", name: "Dahliencracker (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Funke", shots: "36", price: 44.99, oldPrice: 54.00, nem: "497g" },
  { id: "C48", name: "Dynamite (EXKLUSIV AM STAND)", stock: -1, category: "Batterien", categoryClass: "F2", manufacturer: "ProXplosion", shots: "26", price: 39.00, oldPrice: 49.00, nem: "499g" },
  { id: "C49", name: "Nitro (EXKLUSIV AM STAND)", stock: -1, category: "Batterien", categoryClass: "F2", manufacturer: "ProXplosion", shots: "25", price: 35.00, oldPrice: 42.00, nem: "480g" },
  { id: "C50", name: "Kirschblüten (NEU)", stock: 7, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "12", price: 13.99, oldPrice: 15.00, nem: "192g" },
  { id: "C51", name: "Wirbelwind (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "12", price: 13.99, oldPrice: 15.00, nem: "156g" },
  { id: "C52", name: "Goldweide (NEU)", stock: 6, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "12", price: 13.99, oldPrice: 15.00, nem: "180g" },
  { id: "C53", name: "Gold Cracker (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "12", price: 13.99, oldPrice: 15.00, nem: "156g" },
  { id: "C60", name: "Tigerfunken (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "12", price: 13.99, oldPrice: 15.00, nem: "192g" },
  { id: "C54", name: "Mini Blitzeria (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "7", price: 4.99, oldPrice: 6.00, nem: "49g" },
  { id: "C55", name: "Blitzeria (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "16", price: 10.99, oldPrice: 13.00, nem: "128g" },
  { id: "C56", name: "Polarstern (NEU)", stock: 10, category: "Batterien", categoryClass: "F2", manufacturer: "Pulver", shots: "7", price: 4.99, oldPrice: 6.00, nem: "75g" },
  
  // BOMBENROHRE
  { id: "B1", name: "Thunder Air Bomb", stock: 64, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Piromax", pieces: "8", price: 6.99, oldPrice: 9.00, nem: "34,4g (4,3g/Stk)" },
  { id: "B2", name: "DumBum Triple", stock: 20, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Klasek", pieces: "5", price: 11.99, oldPrice: 14.00, nem: "120g (24g/Stk)" },
  { id: "B3", name: "Gold Grown", stock: 0, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Panta", pieces: "4", price: 8.99, oldPrice: 12.00, nem: "68,8g (17,2g/Stk)" },
  { id: "B4", name: "XXL Thunder", stock: 12, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Panta", pieces: "4", price: 8.99, oldPrice: 12.00, nem: "68,8g (17,2g/Stk)" },
  { id: "B5", name: "Dum Bum 20mm", stock: 135, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Klasek", pieces: "10", price: 7.99, oldPrice: 9.00, nem: "80g (8g/Stk)" },
  { id: "B6", name: "God Song", stock: 0, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Riakeo", pieces: "4", price: 15.99, oldPrice: 19.00, nem: "100g (25g/Stk)" },
  { id: "B7", name: "Glamour Shots (EXKLUSIV AM STAND)", stock: -1, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Funke (Albert)", pieces: "10", price: 11.99, oldPrice: 14.00, nem: "90g (9g/Stk)" },
  { id: "B8", name: "Vortex Saluts", stock: 0, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Funke", pieces: "10", price: 11.99, oldPrice: 14.00, nem: "63g (6,3g/Stk)" },
  { id: "B9", name: "Carcasa", stock: 4, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Pyrocentury", pieces: "4", price: 9.99, oldPrice: 12.00, nem: "70g (17,5g/Stk)" },
  { id: "B10", name: "Big Bang 15G (NEU)", stock: 23, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Orion", pieces: "4", price: 9.99, oldPrice: 12.00, nem: "60g (15g/Stk)" },
  { id: "B11", name: "Space Shots (NEU)", stock: 10, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Pulver", pieces: "5", price: 11.99, oldPrice: 14.00, nem: "95g (19g/Stk)" },
  { id: "B12", name: "Phantom Shots (NEU)", stock: 10, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Pulver", pieces: "3", price: 6.99, oldPrice: 9.00, nem: "39g (13g/Stk)" },
  { id: "B13", name: "Artillery Shots (NEU)", stock: 10, category: "Bombenrohre", categoryClass: "F2", manufacturer: "Pulver", pieces: "4", price: 13.99, oldPrice: 15.00, nem: "100g (25g/Stk)" },

  // BÖLLER / KNALLER
  { id: "K1", name: "Blauer Berber", stock: 35, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Funke", pieces: "20", price: 5.99, oldPrice: 8.00, nem: "30g (1,5g/Stk)" },
  { id: "K2", name: "Knallfrösche C", stock: 100, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Funke", pieces: "4", price: 1.99, oldPrice: 2.50, nem: "10g (2,5g/Stk)" },
  { id: "K3", name: "Dum Bum Big F2", stock: 15, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Klasek", pieces: "10", price: 2.99, oldPrice: 4.00, nem: "10g (1g/Stk)" },
  { id: "K4", name: "No Limits Banger (NEU)", stock: 32, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Piromax", pieces: "3", price: 3.99, oldPrice: 5.00, nem: "25g (5g/Stk)" },
  { id: "K5", name: "Dum Bum Black Thunder", stock: 40, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Klasek", pieces: "100", price: 8.99, oldPrice: 12.00, nem: "100g (1g/Stk)" },
  { id: "K6", name: "Bellabomba", stock: 45, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Blackboxx", pieces: "10", price: 3.99, oldPrice: 5.00, nem: "15g (1,5g/Stk)" },
  { id: "K7", name: "Dum Bum Black Pirate", stock: 64, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Klasek", pieces: "100", price: 3.99, oldPrice: 5.00, nem: "85g (0,85g/Stk)" },
  { id: "K8", name: "Krawum", stock: 20, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "5", price: 4.99, oldPrice: 6.00, nem: "30g (6g/Stk)" },
  { id: "K9", name: "Kubischer Kanonenschlag", stock: 58, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "3", price: 4.99, oldPrice: 6.00, nem: "15g (5g/Stk)" },
  { id: "K10-A", name: "China Böller C (Einzelpackung)", stock: 99, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "5", price: 2.99, oldPrice: 4.00, nem: "-" },
  { id: "K10-B", name: "China Böller C (Schinken)", stock: 4, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "100", price: 49.00, oldPrice: 59.00, nem: "-" },
  { id: "K11-A", name: "China Böller D (Einzelpackung)", stock: 80, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "4", price: 3.49, oldPrice: 4.50, nem: "-" },
  { id: "K11-B", name: "China Böller D (Schinken)", stock: 3, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "80", price: 59.00, oldPrice: 69.00, nem: "-" },
  { id: "K12", name: "Super Böller I (Einzelpackung)", stock: 45, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "4", price: 3.99, oldPrice: 5.00, nem: "-" },
  { id: "K13", name: "Super Böller II (Einzelpackung)", stock: 32, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "4", price: 4.49, oldPrice: 6.00, nem: "-" },
  { id: "K14", name: "El Boomba (NEU)", stock: 4, category: "Böller/Knaller", categoryClass: "F2", manufacturer: "Pulver", pieces: "20", price: 4.99, oldPrice: 6.00, nem: "60g (3g/Stk)" },
  

  // RAKETEN
  { id: "R1", name: "Shell Show", stock: 23, category: "Raketen", categoryClass: "F2", manufacturer: "Klasek", pieces: "6", price: 39.00, oldPrice: 49.00, nem: "450g (75g/Stk)" },
  { id: "R2", name: "Mach One (ABVERKAUF!)", stock: 0, category: "Raketen", categoryClass: "F2", manufacturer: "Riakeo", pieces: "10", price: 28.99, oldPrice: 34.00, nem: "200g (20g/Stk)" },
  { id: "R3", name: "Signature Range Rocket", stock: 6, category: "Raketen", categoryClass: "F2", manufacturer: "Klasek", pieces: "5", price: 24.99, oldPrice: 39.00, nem: "375g (75g/Stk)" },
  { id: "R6", name: "Baby-Raketen Titansalut", stock: 38, category: "Raketen", categoryClass: "F2", manufacturer: "Funke", pieces: "50", price: 7.99, oldPrice: 9.00, nem: "25g (0,5g/Stk)" },
  { id: "R7", name: "Ariane 50", stock: 21, category: "Raketen", categoryClass: "F2", manufacturer: "Riakeo", pieces: "5", price: 29.00, oldPrice: 39.00, nem: "250g (50g/Stk)" },
  { id: "R8", name: "No Limits", stock: 17, category: "Raketen", categoryClass: "F2", manufacturer: "Piromax", pieces: "4", price: 23.99, oldPrice: 29.00, nem: "176g (44g/Stk)" },
  { id: "R9", name: "Pyro Party Family Pack", stock: 10, category: "Raketen", categoryClass: "F2", manufacturer: "Lesli", pieces: "137", price: 11.99, oldPrice: 15.00, nem: "95g" },
  { id: "R10", name: "Pfeifrakete Kal. C (3-Stufen-Cracker)", stock: 0, category: "Raketen", categoryClass: "F2", manufacturer: "Funke", pieces: "6", price: 3.99, oldPrice: 5.00, nem: "36g (6g/Stk)" },
  { id: "R11", name: "Mini Rockets (mit Pfiff und Knall)", stock: 28, category: "Raketen", categoryClass: "F2", manufacturer: "Panta", pieces: "50", price: 4.99, oldPrice: 6.00, nem: "55g (1,1g/Stk)" },
  { id: "R12", name: "Super 6 (ABVERKAUF!)", stock: 0, category: "Raketen", categoryClass: "F2", manufacturer: "Pulver", pieces: "6", price: 19.99, oldPrice: 23.00, nem: "120g (20g/Stk)" },
  { id: "R13", name: "Knallraketen mit Pfeiffaufstieg", stock: 11, category: "Raketen", categoryClass: "F2", manufacturer: "Pulver", pieces: "10", price: 29.00, oldPrice: 34.00, nem: "200g (20g/Stk)" },
  { id: "R14", name: "Ronin", stock: 15, category: "Raketen", categoryClass: "F2", manufacturer: "Piromax", pieces: "6", price: 7.99, oldPrice: 9.00, nem: "42g (7g/Stk)" },
  { id: "R15", name: "Fun 4 All Pack", stock: 20, category: "Raketen", categoryClass: "F2", manufacturer: "Lesli", pieces: "122", price: 15.99, oldPrice: 19.00, nem: "117g" },
  { id: "R17", name: "Ariane 38", stock: 19, category: "Raketen", categoryClass: "F2", manufacturer: "Riakeo", pieces: "6", price: 18.99, oldPrice: 24.00, nem: "120g (20g/Stk)" },
  { id: "R16", name: "Silberblitz Raketen (NEU)", stock: 30, category: "Raketen", categoryClass: "F2", manufacturer: "Funke", pieces: "10", price: 11.99, oldPrice: 14.00, nem: "60g (6g/Stk)" },
  { id: "R18", name: "Top 10 (NEU)", stock: 10, category: "Raketen", categoryClass: "F2", manufacturer: "Pulver", pieces: "10", price: 29.00, oldPrice: 34.00, nem: "200g (20g/Stk)" },
  { id: "R19", name: "Kosmos Sredni (NEU)", stock: 10, category: "Raketen", categoryClass: "F2", manufacturer: "Funke (Iskra)", pieces: "12", price: 15.99, oldPrice: 19.00, nem: "190g (16g/Stk)" },
  
  // LEUCHTFEUERWERK
  { id: "L1", name: "Super Etna", stock: 24, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Panta", pieces: "6", price: 5.99, oldPrice: 7.00, nem: "61g (10,2g/Stk)" },
  { id: "L2", name: "Funkenball A Silber", stock: 78, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke", pieces: "6", price: 1.99, oldPrice: 2.50, nem: "12g (2g/Stk)" },
  { id: "L2-B", name: "Funkenball A Silber Display", stock: 4, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke", pieces: "12x6", price: 19.00, oldPrice: 23.00, nem: "144g (2g/Stk)" },
  { id: "L3", name: "Sonnenvögel groß (ABVERKAUF!)", stock: 17, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke", pieces: "6", price: 11.99, oldPrice: 14.00, nem: "78g (12g/Stk)" },
  { id: "L4", name: "5'' Assorted Fountain", stock: 8, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Panta", pieces: "6", price: 5.99, oldPrice: 7.00, nem: "78g (12g/Stk)" },
  { id: "L6", name: "No Limits Fontäne", stock: 30, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Piromax", pieces: "1", price: 8.99, oldPrice: 12.00, nem: "180g" },
  { id: "L8", name: "Strobo 90s", stock: 48, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Piromax", pieces: "3", price: 3.99, oldPrice: 5.00, nem: "70,5g (23,5g/Stk)" },
  { id: "L10", name: "Geysir Kal. C", stock: 5, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke", pieces: "3", price: 6.99, oldPrice: 9.00, nem: "87g (29g/Stk)" },
  { id: "L11", name: "Römische Lichter 30er", stock: 9, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "PyroAustria", pieces: "12", price: 8.99, oldPrice: 12.00, nem: "90g (7,5g/Stk)" },
  { id: "L13", name: "Neon Hummeln", stock: 74, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Funke (Albert)", pieces: "6", price: 1.99, oldPrice: 2.50, nem: "22,5g (3,7g/Stk)" },
  { id: "L13-B", name: "Neon Hummeln Display", stock: 4, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Funke (Albert)", pieces: "12x6", price: 19.00, oldPrice: 23.00, nem: "259g (3,7g/Stk)" },
  { id: "L14", name: "Vesuvio Fontänenparade (ABVERKAUF!)", stock: 28, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Blackboxx", pieces: "3", price: 3.99, oldPrice: 5.00, nem: "30g (10g/Stk)" },
  { id: "L15", name: "Dynamite Kids (Jugendsortiment)", stock: 8, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Lesli", pieces: "186", price: 8.99, oldPrice: 14.00, nem: "42g" },
  { id: "L16", name: "Krazy Panda", stock: 32, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Lesli", pieces: "78", price: 3.99, oldPrice: 5.00, nem: "17g" },
  { id: "L17", name: "No Limits Gold Fontäne", stock: 14, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Piromax", pieces: "1", price: 13.99, oldPrice: 15.00, nem: "240g" },
  { id: "L18-A", name: "Majestic Sparks 1 (ABVERKAUF!)", stock: 7, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Riakeo", pieces: "1", price: 13.99, oldPrice: 15.00, nem: "250g" },
  { id: "L18-B", name: "Majestic Sparks 2 (ABVERKAUF!)", stock: 11, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Riakeo", pieces: "1", price: 13.99, oldPrice: 15.00, nem: "250g" },
  { id: "L19-A", name: "Vulkane (Gold-Silver)", stock: 18, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Bugano", pieces: "1", price: 13.99, oldPrice: 15.00, nem: "250g" },
  { id: "L19-B", name: "Vulkane (Color Stars)", stock: 9, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Bugano", pieces: "1", price: 13.99, oldPrice: 15.00, nem: "250g" },
  { id: "L20", name: "Nachtfalter", stock: 0, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke", pieces: "10", price: 3.99, oldPrice: 5.00, nem: "10g (1g/Stk)" },
  { id: "L21", name: "Funkenregen Silber", stock: 42, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Funke", pieces: "12", price: 4.99, oldPrice: 6.00, nem: "90g (7,5g/Stk)" },
  { id: "L22", name: "Explosive Balls", stock: 40, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Piromax", pieces: "3", price: 2.99, oldPrice: 4.00, nem: "26g (12g/Stk)" },
  { id: "L23", name: "Mosquito Cirkoblitz", stock: 72, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Piromax", pieces: "6", price: 1.50, oldPrice: 2.00, nem: "10g (1,7g/Stk)" },
  { id: "L24", name: "Sonnenvögel klein (NEU)", stock: 64, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke", pieces: "12", price: 5.99, oldPrice: 7.00, nem: "24g (2g/Stk)" },
  { id: "L25", name: "Neon Hornissen (NEU)", stock: 150, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", pieces: "4", price: 2.50, oldPrice: 3.00, nem: "40g (10g/Stk)" },
  { id: "L25-B", name: "Neon Hornissen Display (NEU)", stock: 12, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", pieces: "12x4", price: 24.99, oldPrice: 29.00, nem: "480g (10g/Stk)" },
  { id: "L26", name: "Meteoriten Kal. C (NEU)", stock: 100, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Funke", pieces: "12", price: 1.99, oldPrice: 2.50, nem: "30g (2,5g/Stk)" },
  { id: "L26-B", name: "Meteoriten Kal. C Display (NEU)", stock: 10, category: "Leuchtfeuerwerk", categoryClass: "F1", manufacturer: "Funke", pieces: "12x12", price: 19.99, oldPrice: 23.00, nem: "360g (2,5g/Stk)" },
  { id: "L27", name: "Space Ship (NEU)", stock: 10, category: "Leuchtfeuerwerk", categoryClass: "F2", manufacturer: "Pulver", pieces: "2", price: 6.99, oldPrice: 9.00, nem: "26g (13g/Stk)" },

  // VERBUNDFEUERWERK
  
  { id: "V1", name: "Rebel Yell", stock: 6, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "55", price: 79.00, oldPrice: 89.00, nem: "885g" },
  { id: "V11", name: "Smooth Operator", stock: 2, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "100", price: 229.00, oldPrice: 249.00, nem: "2000g" },
  { id: "V12", name: "Time to Shine (ABVERKAUF!)", stock: 1, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "266", price: 279.00, oldPrice: 299.00, nem: "3496g" },
  { id: "V13", name: "Okazja (ABVERKAUF!)", stock: 1, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "128", price: 89.00, oldPrice: 99.00, nem: "794g" },
  { id: "V14", name: "Kiss From Hell", stock: 2, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "91", price: 129.00, oldPrice: 149.00, nem: "1500g" },
  { id: "V15", name: "Wilk (Batch 2023)", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "99", price: 99.00, oldPrice: 119.00, nem: "907g" },
  { id: "V16", name: "Boom Box XL (ABVERKAUF!)", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "218", price: 299.00, oldPrice: 349.00, nem: "3974g" },
  { id: "V17", name: "Candy Mountain (NEU)", stock: 5, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "100", price: 119.00, oldPrice: 139.00, nem: "1600g" },
  { id: "V18", name: "Coconut Grove (NEU)", stock: 2, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Argento", shots: "144", price: 149.00, oldPrice: 169.00, nem: "1987g" },
  { id: "V19", name: "Reborn Phoenix (EXKLUSIV AM STAND)", stock: -1, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "ProXplosion", shots: "99", price: 189.00, oldPrice: 219.00, nem: "1785g" },
  { id: "V20", name: "El Toro (NEU)", stock: 11, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Lesli", shots: "101", price: 129.00, oldPrice: 149.00, nem: "1974g" },
  { id: "V21", name: "Big in Japan (NEU)", stock: 10, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "76", price: 89.00, oldPrice: 99.00, nem: "988g" },
  { id: "V2", name: "Szakal", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "99", price: 79.00, oldPrice: 89.00, nem: "907g" },
  { id: "V3", name: "Minerva Reconquista", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Argento", shots: "144", price: 149.00, oldPrice: 169.00, nem: "1987g" },
  { id: "V4", name: "King Of Bling", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "100", price: 99.00, oldPrice: 119.00, nem: "1258g" },
  { id: "V5", name: "King of the Sky", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Pyro Specials", shots: "188", price: 299.00, oldPrice: 349.00, nem: "3870g" },
  { id: "V6", name: "No Limits Gold", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Piromax", shots: "80", price: 139.00, oldPrice: 169.00, nem: "1600g" },
  { id: "V7", name: "The Neonfather", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Albert)", shots: "103", price: 89.00, oldPrice: 99.00, nem: "963g" },
  { id: "V8", name: "Pyroshow 2000 Sacramentum", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Argento", shots: "100", price: 169.00, oldPrice: 199.00, nem: "2000g" },
  { id: "V10", name: "Aniol", stock: 0, category: "Verbundfeuerwerk", categoryClass: "F2", manufacturer: "Funke (Iskra)", shots: "103", price: 99.00, oldPrice: 119.00, nem: "988g" },
];

// STATT-PREIS: Bei einem Produkt einfach  oldPrice: 9.99,  ergänzen
// (z. B. direkt nach price). Dann erscheint "statt 9,99 €" durchgestrichen über dem Preis.
// Ohne oldPrice wird nur der normale Preis angezeigt.

// Hinweise in Klammern (z. B. "(ab November)") werden als Badge angezeigt
const BADGE_RULES = [
  { match: /ab november/i, label: "ab 22.11.", cls: "badge-soon" },
  { match: /ab oktober/i, label: "Ab Oktober", cls: "badge-soon" },
  { match: /ab dezember/i, label: "Ab 5.12.", cls: "badge-soon" },
  { match: /lieferdatum offen/i, label: "Lieferdatum offen", cls: "badge-soon" },
  { match: /abverkauf/i, label: "Abverkauf", cls: "badge-sale" },
  { match: /exklusiv am stand/i, label: "Exklusiv am Stand", cls: "badge-exclusive" },
  { match: /^\s*neu!?\s*$/i, label: "Neu!", cls: "badge-exclusive" },
  { match: /ab 300/i, label: null, cls: "badge-info" }
];

function splitName(fullName) {
  const badges = [];

  const name = fullName.replace(/\s*\(([^)]*)\)/g, (whole, inner) => {
    const rule = BADGE_RULES.find(r => r.match.test(inner));
    if (!rule) return whole;
    badges.push({ label: rule.label || inner, cls: rule.cls });
    return "";
  }).trim();

  return { name, badges };
}

function formatPrice(value) {
  return value.toFixed(2).replace(".", ",") + " €";
}

function stockInfo(product) {
  if (product.stock === 0) return { text: "Ausverkauft", cls: "is-out" };
  if (product.stock === -1) return { text: "Bald verfügbar", cls: "is-soon" };
  const lowLimit = product.category === "Verbundfeuerwerk" ? 3 : 9;
  if (product.stock <= lowLimit) return { text: `Noch ${product.stock} Stk.`, cls: "is-low" };
  return { text: "Verfügbar", cls: "is-ok" };
}

let cart = JSON.parse(localStorage.getItem("zpCart") || "[]");

if (!Array.isArray(cart)) {
  cart = [];
  localStorage.removeItem("zpCart");
}

function saveCart() {
  localStorage.setItem("zpCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");

  if (!cartCount) return;

  const count = cart.reduce(
    (sum, item) => sum + (Number(item.quantity) || 0),
    0
  );

  cartCount.textContent = count;

  updateCartBar(count);
}

function updateCartBar(count) {
  const bar = document.getElementById("cart-bar");
  if (!bar) return;

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return product ? sum + product.price * (Number(item.quantity) || 0) : sum;
  }, 0);

  document.getElementById("cart-bar-count").textContent =
    `${count} ${count === 1 ? "Artikel" : "Artikel"}`;
  document.getElementById("cart-bar-total").textContent = formatPrice(total);

  bar.hidden = count === 0;
  document.body.classList.toggle("has-cart-bar", count > 0);
}

// Balken ausblenden, solange der Anfrage-Bereich sichtbar ist
const orderSectionElement = document.getElementById("anfrage");

if (orderSectionElement && "IntersectionObserver" in window) {
  new IntersectionObserver(entries => {
    document.body.classList.toggle("order-visible", entries[0].isIntersecting);
  }, { threshold: 0.15 }).observe(orderSectionElement);
}

const productsContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalElement = document.getElementById("total");
const filterElement = document.getElementById("filter");
const stockFilterElement = document.getElementById("inStockOnly");
const orderForm = document.getElementById("orderForm");

function renderProducts() {
  if (!productsContainer) return;

  const selectedCategory = filterElement
    ? filterElement.value
    : "all";

  const onlyInStock = stockFilterElement
    ? stockFilterElement.checked
    : false;

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesStock =
      !onlyInStock || product.stock > 0;

    return matchesCategory && matchesStock;
  });

  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <p class="no-products">
        Keine lagernden Artikel in dieser Kategorie.
      </p>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    const soldOut = product.stock === 0;
    card.className = "product-card" + (soldOut ? " is-sold-out" : "");
    const comingSoon = product.stock === -1;
    const { name: cleanName, badges } = splitName(product.name);
    const stock = stockInfo(product);

    const badgeHtml = badges
      .map(b => `<span class="badge ${b.cls}">${b.label}</span>`)
      .join("");

    let details = "";

    if (product.shots) {
      details += `<span>${product.shots} Schuss</span>`;
    }

    if (product.pieces) {
      details += `<span>${product.pieces} Stk.</span>`;
    }

    if (product.nem && product.nem !== "-") {
      details += `<span>NEM ${product.nem}</span>`;
    }

    // Dynamische Kategorie F1/F2 aus dem jeweiligen Produkt
    if (product.categoryClass) {
      details += `<span>Kat. ${product.categoryClass}</span>`;
    }

    card.innerHTML = `
      <div class="product-image">
        <div class="product-badges">${badgeHtml}</div>
        <span class="product-id">${product.id}</span>
        <img
          src="bilder/${product.id}.png"
          alt="${cleanName}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >

        <div class="product-placeholder" style="display: none;">
          ${product.id}
        </div>
      </div>

      <div class="product-content">

        <div class="product-category">
          ${product.category}
        </div>

        <h3>${cleanName}</h3>

        <p class="product-manufacturer">
          ${product.manufacturer}
        </p>

        <div class="product-details">
          ${details}
        </div>

        <div class="product-footer">
          <div class="product-price-box">
            ${
              product.oldPrice && product.oldPrice > product.price
                ? `<div class="product-old-price">statt ${formatPrice(product.oldPrice)}</div>`
                : ""
            }
            <div class="product-price">
              ${formatPrice(product.price)}
            </div>
          </div>

          <div class="product-stock ${stock.cls}">
            <span class="stock-dot"></span>${stock.text}
          </div>
        </div>

        <button
          class="add-to-cart"
          data-id="${product.id}"
          ${(soldOut || comingSoon) ? "disabled" : ""}
        >
          ${
            soldOut
              ? "Ausverkauft"
              : comingSoon
                ? "Bald verfügbar"
                : "In den Warenkorb"
          }
        </button>

      </div>
    `;

    productsContainer.appendChild(card);
  });

  attachCartButtons();
}

function attachCartButtons() {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const productId = this.dataset.id;
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  // Produkte mit 0 oder -1 können nicht angefragt werden
  if (product.stock <= 0) {
    return;
  }

  const existingItem = cart.find(
    item => item.id === productId
  );

  if (existingItem) {
    if (
      existingItem.quantity >= product.stock &&
      product.stock > 0
    ) {
      alert(
        `Von "${splitName(product.name).name}" sind nur ${product.stock} Stück verfügbar.`
      );
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

function renderCart() {
  if (!cartContainer || !totalElement) return;

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
    const product = products.find(
      product => product.id === item.id
    );

    if (!product) return;

    const quantity = Number(item.quantity) || 1;
    const itemTotal = product.price * quantity;

    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div class="cart-item-info">
        <strong>${splitName(product.name).name}</strong>

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

function attachCartControls() {
  document.querySelectorAll(".increase").forEach(button => {
    button.addEventListener("click", () => {

      const id = button.dataset.id;

      const item = cart.find(
        item => item.id === id
      );

      const product = products.find(
        product => product.id === id
      );

      if (!item || !product) return;

      // Produkte mit stock -1 oder 0 können nicht weiter erhöht werden
      if (product.stock <= 0) {
        return;
      }

      if (
        product.stock > 0 &&
        item.quantity >= product.stock
      ) {
        alert(
          `Von "${splitName(product.name).name}" sind nur ${product.stock} Stück verfügbar.`
        );
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

      const item = cart.find(
        item => item.id === id
      );

      if (!item) return;

      item.quantity -= 1;

      if (item.quantity <= 0) {
        cart = cart.filter(
          cartItem => cartItem.id !== id
        );
      }

      saveCart();
      renderCart();
    });
  });

  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", () => {

      const id = button.dataset.id;

      cart = cart.filter(
        item => item.id !== id
      );

      saveCart();
      renderCart();
    });
  });
}

if (filterElement) {
  filterElement.addEventListener("change", () => {
    renderProducts();
  });
}

if (stockFilterElement) {
  stockFilterElement.addEventListener("change", () => {
    renderProducts();
  });
}

if (orderForm) {
  orderForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (cart.length === 0) {
      alert(
        "Bitte füge zuerst mindestens ein Produkt zur Anfrage hinzu."
      );
      return;
    }

    const nameElement =
      document.getElementById("name");

    const phoneElement =
      document.getElementById("phone");

    const noteElement =
      document.getElementById("note");

    const legalElement =
      document.getElementById("legal");

    const pickupElement =
      document.getElementById("pickup");

    const pickup = pickupElement
      ? pickupElement.value
      : "";

    const name = nameElement
      ? nameElement.value.trim()
      : "";

    const phone = phoneElement
      ? phoneElement.value.trim()
      : "";

    const note = noteElement
      ? noteElement.value.trim()
      : "";

    if (
      legalElement &&
      !legalElement.checked
    ) {
      alert(
        "Bitte bestätige die erforderliche Erklärung."
      );
      return;
    }

    let message = `Hallo ZP Pyrotechnik,

ich möchte folgende Produkte anfragen:

`;

    let total = 0;

    cart.forEach(item => {

      const product = products.find(
        product => product.id === item.id
      );

      if (!product) return;

      const itemTotal =
        product.price * item.quantity;

      total += itemTotal;

      message +=
        `- ${splitName(product.name).name} (${product.id}): ${item.quantity}x ${formatPrice(product.price)} = ${formatPrice(itemTotal)}\n`;
    });

    message += `
Gesamtwert: ${total.toFixed(2).replace(".", ",")} €

Name: ${name}
Telefon: ${phone}
Abholtermin: ${pickup || "noch offen"}
`;

    if (note) {
      message += `
Anmerkung:
${note}
`;
    }

    message += `
Liebe Grüße
${name}
`;

    const subject = encodeURIComponent(
      "Bestellanfrage – ZP Pyrotechnik"
    );

    const body = encodeURIComponent(message);

    window.location.href =
      `mailto:zp.pyrotechnik@gmail.com?subject=${subject}&body=${body}`;
  });
}

function showMaintenance() {
  const style = document.createElement("style");
  style.textContent = `
    .maintenance-card {
      max-width: 760px;
      margin: 10px auto 0;
      padding: 44px 36px;
      text-align: center;
      background: var(--card, #171717);
      border: 1px solid rgba(255, 122, 0, 0.45);
      border-radius: 22px;
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45), 0 0 60px rgba(255, 122, 0, 0.12);
    }
    .maintenance-icon {
      width: 74px;
      height: 74px;
      margin: 0 auto 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 122, 0, 0.12);
      border: 2px solid #ff7a00;
      font-size: 34px;
    }
    .maintenance-card .maintenance-label {
      margin: 0 0 6px;
      color: #ff8a00;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 4px;
    }
    .maintenance-card h2 {
      margin: 0 0 14px;
    }
    .maintenance-card p {
      margin: 0 auto 14px;
      max-width: 560px;
      color: #cfcfcf;
      font-size: 17px;
    }
    .maintenance-date {
      display: inline-block;
      margin: 10px 0 22px;
      padding: 12px 26px;
      border-radius: 14px;
      background: linear-gradient(135deg, #ff8a00, #ff6200);
      color: #ffffff;
      font-family: "Anton", Impact, sans-serif;
      font-size: 34px;
      letter-spacing: 1px;
      box-shadow: 0 8px 25px rgba(255, 98, 0, 0.3);
    }
    .maintenance-contact {
      color: #9a9a9a !important;
      font-size: 15px !important;
    }
    .maintenance-contact a {
      color: #ff7a00;
      text-decoration: underline;
    }
    @media (max-width: 700px) {
      .maintenance-card { padding: 32px 20px; }
      .maintenance-date { font-size: 28px; }
    }
  `;
  document.head.appendChild(style);

  const productsSection = document.getElementById("produkte");

  if (productsSection) {
    productsSection.innerHTML = `
      <div class="container">
        <div class="maintenance-card">
          <div class="maintenance-icon">🛠️</div>
          <p class="maintenance-label">BESTELLSCHLUSS</p>
          <h2>Shop im Wartungsmodus</h2>
          <p>
            Der Online-Shop ist derzeit geschlossen, Bestell-Anfragen sind momentan nicht möglich.
          </p>
          <p>Der Shop öffnet wieder am</p>
          <div class="maintenance-date">${WIEDERERÖFFNUNG}</div>
          <p class="maintenance-contact">
            Fragen? <a href="tel:+436505230073">0650 523 0073</a> ·
            <a href="mailto:zp.pyrotechnik@gmail.com">zp.pyrotechnik@gmail.com</a>
          </p>
        </div>
      </div>
    `;
  }

  // Warenkorb, Bestellformular und Warenkorb-Knöpfe ausblenden
  document.getElementById("anfrage")?.remove();
  document.getElementById("cart-bar")?.remove();
  document.querySelectorAll('nav a[href="#anfrage"]').forEach(link => link.remove());
}

// =========================================
// WARENKORB ALS SEITENLEISTE (klappt rechts auf)
// Verschiebt Warenkorb + Bestellformular in eine Leiste am rechten Rand.
// Alle Links auf "#anfrage" (Warenkorb-Knopf oben, Balken unten) öffnen sie.
// =========================================
function setupCartDrawer() {
  const section = document.getElementById("anfrage");
  const layout = section ? section.querySelector(".order-layout") : null;
  if (!section || !layout) return;

  const overlay = document.createElement("div");
  overlay.className = "cart-drawer-overlay";

  const drawer = document.createElement("aside");
  drawer.className = "cart-drawer";
  drawer.setAttribute("aria-label", "Warenkorb");
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="cart-drawer-head">
      <span>Deine Auswahl</span>
      <button type="button" class="cart-drawer-close" aria-label="Warenkorb schließen">×</button>
    </div>
    <div class="cart-drawer-body"></div>
  `;

  drawer.querySelector(".cart-drawer-body").appendChild(layout);
  document.body.append(overlay, drawer);
  section.style.display = "none";

  const openCart = () => {
    document.body.classList.add("cart-open");
    drawer.setAttribute("aria-hidden", "false");
  };

  const closeCart = () => {
    document.body.classList.remove("cart-open");
    drawer.setAttribute("aria-hidden", "true");
  };

  document.querySelectorAll('a[href="#anfrage"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      openCart();
    });
  });

  overlay.addEventListener("click", closeCart);
  drawer.querySelector(".cart-drawer-close").addEventListener("click", closeCart);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCart();
  });

  // Kommt man von einer anderen Seite über "Warenkorb" (index.html#anfrage), direkt öffnen
  if (location.hash === "#anfrage") {
    openCart();
    history.replaceState(null, "", location.pathname + location.search);
  }

  window.openCart = openCart;
}

if (WARTUNGSMODUS) {
  showMaintenance();
} else {
  setupCartDrawer();
  renderProducts();
  renderCart();
  updateCartCount();
}
