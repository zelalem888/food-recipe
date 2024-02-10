import foodss from "./foods";
import React from "react";


function middle({search}) {
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-3 row-gap-5 mt-5">
          
            {
              foodss.filter((foodDtails)=> {
                return(
                  search.toLowerCase() === '' ? foodDtails : foodDtails.name.includes(search)
                )
              }).map((foodDtails) => {
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
      </div>
    </div>
  );
}
export default middle;
