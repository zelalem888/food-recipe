import foodss from "./foods";
import React from "react";
import { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";


function Middle({search}) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Replace with the path to your actual JSON file
    fetch('/foods.js')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  const currentPageData = foodss.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(foodss.length / PER_PAGE);
  

 

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    console.log(setCurrentPage);
  }
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-3 row-gap-5 mt-5">
          
            {
              currentPageData.filter((foodDtails)=> {
                return(
                  search.toLowerCase() === '' ? foodDtails : foodDtails.name.includes(search)
                )
                })
             .map((foodDtails) => {
                 return (
                  <div className="col " key={foodDtails.id}>
                  <img className="img-thumbnail object-fit-cover" src={require(`./json/jesonImages/${foodDtails.image}`)} />
                  <h5><a  className="link-primary link-underline-opacity-0">{foodDtails.name}</a></h5>
                  <p>{foodDtails.description}</p>
                  </div>
                 )
                })
            }
            
          
        </div>
        <div className="container text-center m-5 pagenation-container ">
            <ReactPaginate
        previousLabel={<button className="btn btn-primary mx-3">previous</button>}
        nextLabel={<button className="btn btn-primary  mx-3">next</button>}
        pageCount={ pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      </div>
      </div>
    </div>
  );
}
export default Middle;
