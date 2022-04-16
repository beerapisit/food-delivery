import React, { useEffect, useState } from "react";

import IconSearch from "../Icons/IconSearch";

const SearchInput = ({ onChange }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(() => {
    if (!onChange && typeof onChange !== "function") return () => null;

    const timer = setTimeout(() => {
      onChange(search);
      clearTimeout(timer);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <>
      <div className="input-group">
        <div className="search-icon-first">
          <IconSearch />
        </div>
        <input
          className="search-input"
          value={search}
          onChange={handleSearch}
        />
        <div className="search-icon-last">
          <IconSearch />
        </div>
      </div>
      <style jsx>{`
        .input-group {
          display: flex;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        }
        .search-icon-first,
        .search-icon-last {
          font-size: 12px;
          margin: 5px;
        }
        .search-input {
          padding: 10px;
          border: none;
          font-size: 16px;
        }
        .search-input:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default SearchInput;
