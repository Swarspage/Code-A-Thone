function App() {
  return (
    <div className="container">
      <h1>SkillTube - Empowering Artisans</h1>
      <UploadForm />
      <ExploreArtisans />
    </div>
  );
}

function UploadForm() {
  return (
    <div className="card">
      <h2>Upload Your Work</h2>
      <input type="text" placeholder="Video Title" className="input-field" />
      <textarea
        placeholder="Describe your work"
        className="input-field"
      ></textarea>
      <select id="city" className="input-field" onChange={updateTowns}>
        <option value="">Select Your City</option>
        {Object.keys(towns).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div id="locationFields" style={{ display: "none" }}>
        <select id="town" className="input-field">
          <option value="">Select Your Town</option>
        </select>
        <input type="text" placeholder="Your Address" className="input-field" />
      </div>
      <input type="text" placeholder="Your Contact" className="input-field" />
      <input type="file" className="input-field" />
      <button>Upload</button>
    </div>
  );
}

function ExploreArtisans() {
  return (
    <div>
      <h2>Explore Artisans</h2>
      <div className="card">
        <video className="video" controls>
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3>Artisan Name</h3>
        <p>Weaving | Mumbai</p>
        <div className="actions">
          <button>❤️ Like</button>
          <button>💬 Comment</button>
          <button>📞 Contact</button>
          <button>📍 Location</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

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
