import React from "react";

function Favorites({ favorites, onSelectFavorite }) {
  const handleSelection = (event) => {
    const selectedCity = event.target.value;
    if (selectedCity) {
      onSelectFavorite(selectedCity);
      event.target.value = "";
    }
  };

  return (
    <div>
      <select onChange={handleSelection} style={{ marginLeft: "10px" }}>
        <option value="">Select a favorite</option>
        {favorites.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Favorites;
