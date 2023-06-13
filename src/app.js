// Product data (can be fetched from API or JSON file)
const productsData = {
  shoes: [
    {
      id: 1,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
      name: "Nike Air Zoom Pegasus 36",
      description:
        "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
      price: 108.97,
      color: "#e1e7ed",
    },
    {
      id: 2,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
      name: "Nike Air Zoom Pegasus 36 Shield",
      description:
        "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
      price: 89.97,
      color: "#4D317F",
    },
    {
      id: 3,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      name: "Nike CruzrOne",
      description:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: 100.97,
      color: "#E8D026",
    },
    {
      id: 4,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      name: "Nike Epic React Flyknit 2",
      description:
        "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
      price: 89.97,
      color: "#FD584A",
    },
    {
      id: 5,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png",
      name: "Nike Odyssey React Flyknit 2",
      description:
        "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
      price: 71.97,
      color: "#D4D7D6",
    },
    {
      id: 6,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png",
      name: "Nike React Infinity Run Flyknit",
      description:
        "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
      price: 160.0,
      color: "#F2F5F4",
    },
    {
      id: 7,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png",
      name: "Nike React Miler",
      description:
        "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
      price: 130.0,
      color: "#22AFDC",
    },
    {
      id: 8,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png",
      name: "Nike Renew Ride",
      description:
        "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
      price: 60.97,
      color: "#B50320",
    },
    {
      id: 9,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png",
      name: "Nike Vaporfly 4% Flyknit",
      description:
        "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
      price: 187.97,
      color: "#3569A1",
    },
    {
      id: 10,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png",
      name: "Nike Zoom Fly 3 Premium",
      description:
        "Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.",
      price: 160.0,
      color: "#54D4C9",
    },
    // Add more products here...
  ],
};

// Cart state
let cartItems = [];

// Function to generate product HTML
function generateProductHTML(product) {
  const isAddedToCart = cartItems.some((item) => item.id === product.id);

  return `
    <div class="product py-[40px]  first:pt-0">
    <div class='rounded-[40px] h-[380px] flex items-center overflow-hidden ]' style="background-color: ${
      product.color
    };">

    <img src="${product.image}" alt="${product.name}">
    </div>
      <h3 class="font-bold text-xl my-5">${product.name}</h3>
      <p class="font-[400] text-[#777] mb-[20px] text-sm my-5">${
        product.description
      }</p>
      <div class="flex items-center justify-between w-full">
      <p class="text-xl font-semibold">$${product.price}</p>
      ${
        isAddedToCart
          ? '<button disabled><span class="checkmark">&#x2713;</span></button>'
          : `<button class="text-md px-5 py-2 bg-[#f8d43f] rounded-lg font-semibold " onclick="addToCart(${product.id})">Add To Cart</button>`
      }
      </div>

    </div>
  `;
}

// Function to generate cart item HTML
function generateCartItemHTML(item) {
  return `
    <div class="cart-item flex items-center py-5 ">
    <div class="flex-[0]">
    <div class="w-[90px] h-[90px] rounded-[100%] mr-[34px] cart_img"  style="background-color: ${item.color};">
      <div >
       <img src="${item.image}" alt="${item.name}" " >
      </div>
    </div>
    </div >
      <div class="flex-auto" >
        <p class="font-bold text-xl mt-5">${item.name}</p>
        <p class="text-xl font-semibold my-3">$${item.price}</p>
        <div class="flex items-center justify-between w-full ">
        <div class="quantity flex justify-around items-center">
        <button onclick="changeQuantity(${item.id}, -1)" class="bg-gray-100 rounded-[100%] w-[28px] h-[28px] ">-</button>

        <input type="number" class="w-[20px] mx-2 text-center text-sm" value="${item.quantity}" min="1" onchange="changeQuantity(${item.id}, this.value)">
        <button onclick="changeQuantity(${item.id}, 1)" class="bg-gray-100 rounded-[100%] w-[28px] h-[28px] ">+</button>
      </div>
      <div  class="bg-[#f6c90e] rounded-[100%] w-[28px] h-[28px]  flex justify-center items-center cursor-pointer text-center" onclick="removeFromCart(${item.id}) " >

      <img src="./img/trash.png" alt="${item.name}" class="w-4 h-4 ">

      </div>
      </div>
      </div>

    </div>
  `;
}

// Function to calculate and update total price
function updateTotalPrice() {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  document.getElementById("total-amount").textContent = totalPrice.toFixed(2);
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = productsData.shoes.find((item) => item.id === productId);
  const existingItem = cartItems.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  cartItems = cartItems.filter((item) => item.id !== productId);
  updateCart();
}

// Function to change quantity of a product in the cart
function changeQuantity(productId, newQuantity) {
  const item = cartItems.find((item) => item.id === productId);
  const quantity = parseInt(newQuantity);

  if (item && quantity >= 0) {
    item.quantity = quantity;

    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      updateCart();
    }
  }
}

// Function to update the cart UI
function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  const emptyCartMsg = document.getElementById("empty-cart-msg");

  // Clear the cart container
  cartContainer.innerHTML = "";

  if (cartItems.length > 0) {
    // Generate HTML for each cart item
    const cartItemsHTML = cartItems
      .map((item) => generateCartItemHTML(item))
      .join("");

    // Add cart items HTML to the container
    cartContainer.innerHTML = cartItemsHTML;
    emptyCartMsg.style.display = "none";
  } else {
    emptyCartMsg.style.display = "block";
  }

  updateTotalPrice();
}

// Function to initialize the application
function initializeApp() {
  // Generate HTML for each product
  const productsContainer = document.getElementById("products");
  const productsHTML = productsData.shoes
    .map((product) => generateProductHTML(product))
    .join("");

  // Add products HTML to the container
  productsContainer.innerHTML = productsHTML;

  // Load cart items from localStorage if available
  const storedCartItems = localStorage.getItem("cartItems");

  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
  }

  // Update the cart UI
  updateCart();
}

// Save cart items to localStorage before unloading the page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});

// Initialize the application
initializeApp();
