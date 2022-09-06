import {useState} from "react"
function Pagination({totalPages,prevp,handelN,handelP}) {
  
console.log(totalPages,prevp)
  const prev = <button  data-testid="prev-page" disabled={prevp=== 1? true : false } 
  onClick={handelP} >Prev</button>;
  const currentPage = <button data-testid="current-page">{prevp}</button>;
  const next = <button data-testid="next-page" disabled={prevp==totalPages} 
    onClick={handelN}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages" >{totalPages}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev }
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
