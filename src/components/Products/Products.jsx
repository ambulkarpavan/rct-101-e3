import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async() => {
      let r= await fetch("http://localhost:8080/products")
      let data = await r.json();

      setProducts(data);
    }
    fetchdata();
  }, [])
  return <div>Product: { " " }
  <div>
    <div>
      {products.map((e)=>(
        <div key={e.id}><Link to={`/products/${e.id}`}>{e.name}</Link></div>
      ))}
    </div>
  </div>
  </div>;
};

export default Products;
