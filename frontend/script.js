// Handle donation form submission
document.getElementById("donation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("donor-name").value;
  const foodType = document.getElementById("food-type").value;
  const quantity = document.getElementById("quantity").value;
  const address = document.getElementById("pickup-address").value;

  const donationList = document.getElementById("donation-list");
  const listItem = document.createElement("li");
  listItem.textContent = `${name} is donating ${quantity} kg of ${foodType}. Pickup at: ${address}`;
  donationList.appendChild(listItem);

  const counter = document.getElementById("donation-counter");
  counter.textContent = parseInt(counter.textContent) + 1;

  document.getElementById("donation-form").reset();
});

// Back to top button
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
