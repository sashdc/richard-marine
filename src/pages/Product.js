import React from "react";
import "animate.css";
import  { Link, useParams } from 'react-router-dom';



export default function Product() {
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { productId } = useParams();
  
    const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
      // pass URL parameter
      variables: { profileId: profileId },
    });
  
    const profile = data?.profile || {};
  
    return (
      <div>
        <h2 className="card-header">
          {product.name}
        </h2>
  
  
        <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        </div>
      </div>
    );
  };