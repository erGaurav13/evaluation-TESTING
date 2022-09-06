import React from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { useEffect,useState } from "react";
function ProductPage() {
const [data,setData]=useState()
const [totalPages,setTotalPages]=useState(0)
const [prevp,setPrevp]=useState(1);
const [order,setOrder]=useState("asc")
const [limit,setLimit]=useState("5")
const [dis,setDis]=useState(false)

const handelP=()=> setPrevp(prevp-1)
const handelN=()=>setPrevp(prevp+1)
const url=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${prevp}&limit=${limit}&orderBy=${order}`
useEffect(()=>{
// why we use this getProducts({})
  getProducts(url)
   .then(response => {
    // console.log(response)
      const {data, totalPages} = response;
     setData(data)
     setTotalPages(totalPages)
      console.log(data,totalPages,"pp")
   })
 
},[prevp,order,limit])

const handelChange=(e)=>{
let x=e.target.value;
let xx=+x
setLimit(xx)
// setDis(!dis)
}

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high" disabled={order=="asc"?true:false } onClick={()=>setOrder("asc")}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={order=="asc"?false:true } onClick={()=>setOrder("desc")}>Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select" onChange={handelChange} >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <Pagination totalPages={totalPages}
      handelP={handelP}
      handelN={handelN}
      prevp={prevp} setPrevp={setPrevp}/>
      {/* map products */}
      <ProductList data={data} />
      {/* {data?.map((e)=> <ProductList data={data}/>)} */}
     
    </div>
  );
}

export default ProductPage;
