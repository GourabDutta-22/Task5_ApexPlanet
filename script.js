// Sample products
const products = [
  {id:1,title:"Aurora Lamp",price:39,rating:4.5,category:"home",img:"https://images.unsplash.com/photo-1674798195224-5132c385af27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:2,title:"Nimbus Headphones",price:129,rating:4.7,category:"audio",img:"https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:3,title:"Pulse Smartwatch",price:199,rating:4.2,category:"wearable",img:"https://images.unsplash.com/photo-1659366100463-9e29a63adcc2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:4,title:"Breeze Fan",price:59,rating:4.1,category:"home",img:"https://images.unsplash.com/photo-1725901724801-5640dfe632d4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:5,title:"Zen Speaker",price:89,rating:4.6,category:"audio",img:"https://images.unsplash.com/photo-1542193810-9007c21cd37e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:6,title:"Pixel Camera",price:299,rating:4.8,category:"electronics",img:"https://plus.unsplash.com/premium_photo-1682125552318-7f56ab5e05a0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:7,title:"Eco Bottle",price:19,rating:4.3,category:"lifestyle",img:"https://plus.unsplash.com/premium_photo-1737010704242-ff40d86188f5?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:8,title:"Glow Keyboard",price:79,rating:4.4,category:"electronics",img:"https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:9,title:"Flex Yoga Mat",price:25,rating:4.5,category:"lifestyle",img:"https://images.unsplash.com/photo-1599447332712-112c3d0cefb4?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:10,title:"Orbit Mouse",price:49,rating:4.2,category:"electronics",img:"https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:11,title:"Cloud Pillow",price:35,rating:4.7,category:"home",img:"https://images.unsplash.com/photo-1611490135455-3a02bb9eb653?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:12,title:"Wave Earbuds",price:59,rating:4.6,category:"audio",img:"https://images.unsplash.com/photo-1667178173387-7e0cb51c0b4f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

// State
let cart = {};
let dark = false;

// Elements
const catalog = document.getElementById("catalog");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const clearCart = document.getElementById("clearCart");
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const themeToggle = document.getElementById("themeToggle");

// Attractive popup message (bottom)
function showPopup(msg, type = "success") {
  let popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.bottom = "2.5rem";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.background = type === "success"
    ? "linear-gradient(90deg,#234 60%,#456 100%)"
    : "linear-gradient(90deg,#b71c1c 60%,#f44336 100%)";
  popup.style.color = "#fff";
  popup.style.padding = "1rem 2.5rem";
  popup.style.borderRadius = "32px";
  popup.style.boxShadow = "0 8px 32px rgba(34,52,68,0.18)";
  popup.style.fontSize = "1.15rem";
  popup.style.fontWeight = "600";
  popup.style.letterSpacing = "1px";
  popup.style.zIndex = "2000";
  popup.style.opacity = "1";
  popup.style.transition = "opacity 0.4s, transform 0.4s";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.gap = "0.7rem";
  popup.innerHTML = `<span style="font-size:1.5rem;">${type === "success" ? "✅" : "🗑️"}</span> ${msg}`;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => popup.remove(), 400);
  }, 1400);
}

// Populate category filter
const categories = ["all", ...new Set(products.map(p => p.category))];
categoryFilter.innerHTML = categories.map(c => `<option value="${c}">${c}</option>`).join("");

// Render products (no delay, instant update)
function renderProducts(){
  let filtered = [...products];
  const q = searchBox.value.toLowerCase();
  if(q) filtered = filtered.filter(p=>p.title.toLowerCase().includes(q));
  if(categoryFilter.value!=="all") filtered = filtered.filter(p=>p.category===categoryFilter.value);
  if(sortFilter.value==="price-asc") filtered.sort((a,b)=>a.price-b.price);
  if(sortFilter.value==="price-desc") filtered.sort((a,b)=>b.price-a.price);
  if(sortFilter.value==="rating") filtered.sort((a,b)=>b.rating-a.rating);

  // Use requestAnimationFrame for instant DOM update
  window.requestAnimationFrame(() => {
    catalog.innerHTML = filtered.map(p => `
      <div class="card product-card">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>Price: $${p.price}</p>
          <p>⭐ ${p.rating}</p>
        </div>
        <div class="card-footer">
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `).join("");
  });
}

// Cart functions
function addToCart(id){
  cart[id] = (cart[id]||0)+1;
  updateCart();
  showPopup("Added to cart!");
}
function removeFromCart(id){
  delete cart[id];
  updateCart();
  showPopup("Removed from cart!", "error");
}
function updateCart(){
  cartItems.innerHTML = Object.keys(cart).map(id=>{
    const p = products.find(x=>x.id==id);
    return `<div>
      ${p.title} x${cart[id]} - $${(p.price*cart[id]).toFixed(2)}
      <button onclick="removeFromCart(${id})">Remove</button>
    </div>`;
  }).join("");
  const total = Object.keys(cart).reduce((s,id)=>{
    const p=products.find(x=>x.id==id);
    return s+p.price*cart[id];
  },0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = Object.values(cart).reduce((s,n)=>s+n,0);
}

// Events
cartBtn.onclick = ()=>cartDrawer.classList.add("open");
closeCart.onclick = ()=>cartDrawer.classList.remove("open");
clearCart.onclick = ()=>{ cart={}; updateCart(); };
searchBox.oninput = renderProducts;
categoryFilter.onchange = renderProducts;
sortFilter.onchange = renderProducts;
themeToggle.onclick = ()=>{
  dark=!dark;
  document.body.classList.toggle("dark",dark);
};

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


//Uppercart
function updateCart(){
  cartItems.innerHTML = Object.keys(cart).map(id=>{
    const p = products.find(x=>x.id==id);
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <div class="cart-item-info">
          <h4>${p.title}</h4>
          <div class="cart-item-meta">
            <span class="qty">x${cart[id]}</span>
            <span class="price">$${(p.price*cart[id]).toFixed(2)}</span>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${id})" title="Remove">
          &times;
        </button>
      </div>
    `;
  }).join("");
  const total = Object.keys(cart).reduce((s,id)=>{
    const p=products.find(x=>x.id==id);
    return s+p.price*cart[id];
  },0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = Object.values(cart).reduce((s,n)=>s+n,0);
}
renderProducts();
updateCart();