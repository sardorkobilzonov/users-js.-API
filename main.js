const loadingElement = document.querySelector(".loading");
const userCardsElement = document.querySelector(".user-cards");

fetch("https://dummyjson.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Tarmoq xatosi: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    loadingElement.style.display = "none";

    data.users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "card";
      userCard.innerHTML = `
        <img src="${user.image}" alt="${user.firstName}">
        <div class="card-body">
          <h2>${user.firstName} ${user.lastName}</h2>
         
          <p>Telefon: ${user.phone}</p>
          <p>Yoshi: ${user.age}</p>
        </div>
      `;
      userCardsElement.appendChild(userCard);
    });
  })
  .catch((error) => {
    loadingElement.textContent = "Xatolik yuz berdi: " + error.message; // Xatolikni ko'rsatish
  });
