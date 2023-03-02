import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Like.scss';

const Like = () => {
  const {likedProducts} = useSelector(state => state.likeReducer);
  console.log(likedProducts);

  function trimDescription(str){
    return str?.split(" ")?.slice(0, 6)?.join(" ") + "..."
  }
  return (
    <div className='wrapper'>
      <div className='search-results__wrapper'>
        {
          likedProducts?.map(likedProducts =>
            <div className='product-item' key={likedProducts?.id}>
              <Link className='product-img' to={`/product/${likedProducts?.id}`}>
                <img src={likedProducts?.images?.at(0)} alt="" />
              </Link>
              <div>
                <h2>{likedProducts?.title}</h2>
                <p>{trimDescription(likedProducts?.description)}</p>
                <strong>$ {likedProducts?.price}</strong>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Like