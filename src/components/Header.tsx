import React from "react";

function Header() {
  return (
    <div className="h-16 px-8 py-3 bg-white flex items-center justify-between">
      <div className="flex gap-4 ">
        <h3 className="text-zinc-900 text-[15px] font-normal leading-snug">
          Payments
        </h3>
        <div className="flex gap-1.5 w-[94px] items-center">
          <img src={"./images/icons/help.svg"} className="w-3.5 h-3.5" />

          <span className="text-neutral-600 text-xs font-normal leading-none">
            How it works
          </span>
        </div>
      </div>
      <SearchBar />
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#e6e6e6]  cursor-pointer">
          <img src={"./images/icons/group.svg"} />
        </div>
        <div className="w-10 h-10  cursor-pointer">
          <img src={"./images/icons/menu.svg"} />
        </div>
      </div>
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className="w-[400px] gap-2 items-center h-10 px-4 py-[9px] bg-zinc-100 rounded-md flex">
      <img src="./images/icons/search.svg" className="w-4 h-4" />
      <input
        className="outline-0  bg-zinc-100 text-zinc-500 text-[15px] font-normal leading-snug w-full "
        placeholder="Search features, tutorials, etc."
      />
    </div>
  );
};
export default Header;
