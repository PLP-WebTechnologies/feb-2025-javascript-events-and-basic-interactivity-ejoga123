document
  .getElementById("search-flights")
  .addEventListener("click", function () {
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const passengers = document.getElementById("passengers").value;
    const email = document.getElementById("email").value;

    if (destination && departureDate && returnDate && passengers && email) {
      const resultsList = document.getElementById("results-list");
      resultsList.innerHTML = `<li>Flights to ${destination} for ${passengers} passengers found. Dates: ${departureDate} - ${returnDate}</li>`;
    } else {
      alert("Please fill in all the fields!");
    }
  });

// Bonus: Hover effect
document
  .getElementById("search-flights")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "#005fa3";
  });
document
  .getElementById("search-flights")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "#0077cc";
  });

// Bonus: Keypress detection
document.getElementById("destination").addEventListener("keyup", function () {
  console.log(`Typing: ${this.value}`);
});
