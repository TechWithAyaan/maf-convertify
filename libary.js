const cardData = [
  {
    icon: "fa-brands fa-meta",
    title: "Facebook & Instagram Marketing",
    description: "Facebook and Instagram marketing to grow your brand online presence",
  },
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    description: "Modern, responsive, high-performance user interfaces built for long-term scalability.",
  },
  {
    icon: "fa-brands fa-shopify",
    title: "Shopify Development",
    description: "Custom Shopify development to enhance your online store's functionality and design .",
  },
  {
    icon: "fa-brands fa-tiktok",
    title: "TikTok Marketing Strategy",
    description: "TikTok marketing to increase brand awareness and drive sales.",
  },
];

function createCards() {
  const container = document.getElementById("cardContainer");
  cardData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
            <div class="card-icon neon-glow">
<i class="${card.icon}"></i>
            </div>
            <h2 class="card-title">${card.title}</h2>
            <p class="card-description">${card.description}</p>
            <a href="#" class="card-btn">Get Services</a>
        `;
    container.appendChild(cardElement);
  });
}

// Initialize cards on page load
createCards();