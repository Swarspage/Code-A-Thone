
const towns = {
  Mumbai: ["Andheri", "Borivali", "Dadar", "Thane"],
  Delhi: ["Connaught Place", "Karol Bagh", "Saket", "Dwarka"],
  Bangalore: ["MG Road", "Whitefield", "Electronic City", "Jayanagar"],
  Hyderabad: ["Banjara Hills", "Hitech City", "Secunderabad", "Begumpet"],
  Chennai: ["Adyar", "T Nagar", "Guindy", "Velachery"],
  Kolkata: ["Salt Lake", "Park Street", "Howrah", "Dumdum"],
  Pune: ["Shivaji Nagar", "Kothrud", "Hinjewadi", "Koregaon Park"],
};

function updateTowns() {
  const citySelect = document.getElementById("city");
  const townSelect = document.getElementById("town");
  const locationFields = document.getElementById("locationFields");

  let city = citySelect.value;
  townSelect.innerHTML = "<option value=''>Select Your Town</option>";

  if (city && towns[city]) {
    towns[city].forEach((town) => {
      let option = document.createElement("option");
      option.value = town;
      option.textContent = town;
      townSelect.appendChild(option);
    });
    locationFields.style.display = "block";
  } else {
    locationFields.style.display = "none";
  }
}
