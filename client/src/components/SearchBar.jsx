import React, { useRef } from "react";
import { filterdProducts } from "../features/productSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  console.log(`input ref console ${inputRef.current}`);
  const updateFilterValue = () => {
    // dispatch(filterdProducts(inputRef.current.));
  };
  return (
    <div>
      <input
        onChange={updateFilterValue}
        ref={inputRef}
        className="py-1 px-4 outline-none rounded-md"
        type="text"
        name=""
        placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
