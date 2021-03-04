import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../Input/Input";

import { changeFilter, filterSelector } from "../../app/redux/filterSlice";

import filterStyles from "./Filter.module.css";

const Filter = () => {
  const filterValue = useSelector((state) => filterSelector(state));
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <div className={filterStyles.Filter}>
        <Input
          value={filterValue}
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Name"
          labelText="Find products by name"
        />
      </div>
    </>
  );
};

export default Filter;
