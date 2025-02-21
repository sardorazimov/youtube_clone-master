import React from "react";
import {SearchIcon} from "lucide-react"
const SearchInput = () => {
  return (
    <form className="w-full flex max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 py-2.5 pr-12 r rounded-l-full focus:outline-none border focus:border-blue-700"
        />
      </div>
      <button type="submit" className="px-5 py-2.5 bg-white/5 border-l-0 rounded-r-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
        <SearchIcon size={24} />
      </button>
    </form>
  );
};

export default SearchInput;
