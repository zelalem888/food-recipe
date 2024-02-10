import React, { useState } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navar({search, setSearch}) {
  

  return (
    <div className="navigation ">
      <div className=" container text-white">
        <p className="text-end pt-2">dark mode</p>
        <h1 className=" text-center mt-5 food-recipe">Food Recipe Search</h1>
        <h3 className="text-center mt-4 any-search">search any food</h3>
        <form>
          <div className="my-3 search">
            <input onChange={(e) => setSearch(e.target.value) }
              type="text"
              className="searcher py-2 px-3"
              placeholder="search..."
            />
          </div>
          {/* <div className="text-center">
            <div className="input1 mx-5 pe-5">
              <input type="text" className="py-2 px-3" />
              <span className="ms-2">Diet</span>
            </div>
            <div className="input1 mx-5 pe-5">
              <input type="text" className="py-2 px-3" />
              <span className="ms-2">Ingridient</span>
            </div>
          </div> */}

          <div className="text-center my-3">
            <input type="submit" value="search" className="mb-4 btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Navar;
