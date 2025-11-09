const CAFE_CONFIG = {
  name: "Café Lumière",
  tagline: "Simple pleasures, exceptional taste",
  menu: [
    {
      category: "Coffee",
      items: [
        {
          name: "Espresso",
          price: "₹120",
          description: "Single shot of premium Arabica beans",
          dietType: "veg",
        },
        {
          name: "Cappuccino",
          price: "₹150",
          description: "Espresso with steamed milk and microfoam",
          dietType: "veg",
        },
        {
          name: "Flat White",
          price: "₹160",
          description: "Ristretto shots with velvety steamed milk",
          dietType: "veg",
        },
        {
          name: "Latte",
          price: "₹150",
          description: "Smooth espresso with steamed milk",
          dietType: "veg",
        },
        {
          name: "Mocha",
          price: "₹180",
          description: "Espresso with chocolate and steamed milk",
          dietType: "veg",
        },
        {
          name: "Caramel Macchiato",
          price: "₹190",
          description: "Vanilla-infused espresso with caramel drizzle",
          dietType: "veg",
        },
      ],
    },
    {
      category: "Cold Drinks",
      items: [
        {
          name: "Iced Americano",
          price: "₹140",
          description: "Espresso over ice with cold water",
          dietType: "veg",
        },
        {
          name: "Cold Brew",
          price: "₹160",
          description: "Slow-steeped for 16 hours, served over ice",
          dietType: "veg",
        },
        {
          name: "Iced Latte",
          price: "₹170",
          description: "Espresso with cold milk over ice",
          dietType: "veg",
        },
        {
          name: "Frappe",
          price: "₹180",
          description: "Blended coffee with ice and whipped cream",
          dietType: "veg",
        },
        {
          name: "Mango Smoothie",
          price: "₹160",
          description: "Fresh mango blended with yogurt",
          dietType: "veg",
        },
      ],
    },
    {
      category: "Sandwiches",
      items: [
        {
          name: "Grilled Cheese",
          price: "₹180",
          description: "Melted cheddar and mozzarella on sourdough",
          dietType: "veg",
        },
        {
          name: "Paneer Tikka Sandwich",
          price: "₹220",
          description: "Spiced paneer with mint chutney",
          dietType: "veg",
        },
        {
          name: "Veggie Club",
          price: "₹200",
          description: "Layered vegetables with pesto mayo",
          dietType: "veg",
        },
        {
          name: "Chicken Club",
          price: "₹280",
          description: "Grilled chicken with bacon and lettuce",
          dietType: "non-veg",
        },
        {
          name: "BBQ Chicken",
          price: "₹300",
          description: "Smoky BBQ chicken with caramelized onions",
          dietType: "non-veg",
        },
      ],
    },
    {
      category: "Pizza",
      items: [
        {
          name: "Margherita",
          price: "₹380",
          description: "San Marzano tomatoes, fresh mozzarella, basil",
          dietType: "veg",
        },
        {
          name: "Funghi",
          price: "₹420",
          description: "Wild mushrooms, truffle oil, parmesan",
          dietType: "veg",
        },
        {
          name: "Farm Fresh",
          price: "₹450",
          description: "Bell peppers, olives, corn, and tomatoes",
          dietType: "veg",
        },
        {
          name: "Pepperoni",
          price: "₹480",
          description: "Classic pepperoni with mozzarella",
          dietType: "non-veg",
        },
        {
          name: "Prosciutto",
          price: "₹520",
          description: "Italian ham, arugula, shaved parmesan",
          dietType: "non-veg",
        },
        {
          name: "BBQ Chicken",
          price: "₹500",
          description: "Grilled chicken with BBQ sauce and onions",
          dietType: "non-veg",
        },
      ],
    },
    {
      category: "Burgers",
      items: [
        {
          name: "Classic Veg Burger",
          price: "₹180",
          description: "Crispy veggie patty with fresh lettuce",
          dietType: "veg",
        },
        {
          name: "Paneer Burger",
          price: "₹200",
          description: "Spiced paneer patty with tandoori mayo",
          dietType: "veg",
        },
        {
          name: "Mushroom Swiss",
          price: "₹220",
          description: "Portobello mushroom with Swiss cheese",
          dietType: "veg",
        },
        {
          name: "Chicken Burger",
          price: "₹240",
          description: "Grilled chicken with herb aioli",
          dietType: "non-veg",
        },
        {
          name: "Chicken Tikka Burger",
          price: "₹260",
          description: "Tandoori chicken with mint chutney",
          dietType: "non-veg",
        },
      ],
    },
    
  ],
};

// Render category navigation
const categoryNav = document.getElementById("categoryNav");
CAFE_CONFIG.menu.forEach((category, index) => {
  const button = document.createElement("button");
  button.className = "nav-button";
  button.textContent = category.category;
  button.onclick = () => scrollToCategory(index);
  categoryNav.appendChild(button);
});

// Render menu
const menuContainer = document.getElementById("menu");
CAFE_CONFIG.menu.forEach((category, index) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category";
  categoryDiv.id = `category-${index}`;

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  category.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-item";
    itemDiv.dataset.diet = item.dietType;

    const icon =
      item.dietType === "veg"
        ? '<div class="veg-icon"></div>'
        : '<div class="non-veg-icon"></div>';

    itemDiv.innerHTML = `
                    <div class="item-header">
                        <div class="item-name-wrapper">
                            ${icon}
                            <span class="item-name">${item.name}</span>
                        </div>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-description">${item.description}</p>
                `;

    menuGrid.appendChild(itemDiv);
  });

  categoryDiv.innerHTML = `<h2 class="category-title">${category.category}</h2>`;
  categoryDiv.appendChild(menuGrid);
  menuContainer.appendChild(categoryDiv);
});

// Toggle functionality
const vegToggle = document.getElementById("vegToggle");
const nonVegToggle = document.getElementById("nonVegToggle");

// Ensure only one toggle is active at a time
vegToggle.addEventListener("change", () => {
  if (vegToggle.checked) {
    nonVegToggle.checked = false;
  }
  applyFilters();
});

nonVegToggle.addEventListener("change", () => {
  if (nonVegToggle.checked) {
    vegToggle.checked = false;
  }
  applyFilters();
});

function applyFilters() {
  const allItems = document.querySelectorAll(".menu-item");
  const vegOnly = vegToggle.checked;
  const nonVegOnly = nonVegToggle.checked;

  allItems.forEach((item) => {
    const isVeg = item.dataset.diet === "veg";

    if (vegOnly) {
      // Show only veg items
      item.classList.toggle("hidden", !isVeg);
    } else if (nonVegOnly) {
      // Show only non-veg items
      item.classList.toggle("hidden", isVeg);
    } else {
      // Show all items
      item.classList.remove("hidden");
    }
  });

  // Hide empty categories
  document.querySelectorAll(".category").forEach((cat) => {
    const visibleItems = cat.querySelectorAll(".menu-item:not(.hidden)");
    cat.style.display = visibleItems.length === 0 ? "none" : "block";
  });
}

// Scroll to category function
function scrollToCategory(index) {
  const category = document.getElementById(`category-${index}`);
  if (category.style.display !== "none") {
    category.scrollIntoView({ behavior: "smooth", block: "start" });

    document.querySelectorAll(".nav-button").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }
}

// Highlight active category on scroll
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveCategory();
      ticking = false;
    });
    ticking = true;
  }
});

function updateActiveCategory() {
  const scrollPosition = window.scrollY + 150;
  let activeIndex = 0;

  CAFE_CONFIG.menu.forEach((_, index) => {
    const category = document.getElementById(`category-${index}`);
    if (
      category &&
      category.offsetTop <= scrollPosition &&
      category.style.display !== "none"
    ) {
      activeIndex = index;
    }
  });

  document.querySelectorAll(".nav-button").forEach((btn, i) => {
    btn.classList.toggle("active", i === activeIndex);
  });
}

// Set first button as active on load
setTimeout(() => {
  const firstButton = document.querySelector(".nav-button");
  if (firstButton) firstButton.classList.add("active");
}, 100);
