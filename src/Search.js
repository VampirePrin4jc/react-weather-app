import React from "react";

export default function Search() {
  return (
    <form>
      <input
        type="search"
        placeholder="Type a city.."
        className="form-control"
        id="city-input"
        autoComplete="off"
      />
    </form>
  );
}
