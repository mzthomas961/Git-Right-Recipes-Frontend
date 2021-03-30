import React from "react";

function CategoryFilters({onFindCategory, onHandleChange}) {

  function handleChange(event) {
    onHandleChange(event.target.value)
  }

  return (
    <div>
      <h3>Category Type</h3>
      <div>
        <select name="type" id="type" onChange={handleChange}>
          <option value="">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>

      <div>
        <button onClick={onFindCategory}>Find Meal</button>
      </div>
    </div>
  );
}

export default CategoryFilters;