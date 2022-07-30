import React from "react";

const Filter = (props) => {
  const sorting = (e) => {
    props.filterProductSelected(e.target.value);
  };

  return (
    <div className="select-filter col-2 mt-4 ml-5 pl-3 " value="filter">
      <select name="category " className="form-control " onChange={sorting}>
        <option value="All Items">All Items</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics </option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
  );
};

export default Filter;
