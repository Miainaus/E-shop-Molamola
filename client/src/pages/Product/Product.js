import "./product.scss";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const productId = parseInt(useParams().id);
  const { data, isLoading, error } = useFetch(
    `/products?[filters][id]=${productId}&populate=*`
  );
  const [selectedImage, setSelectedImage] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className='product'>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.attributes?.img.data.attributes.url
                }
                alt='first'
                onClick={(e) => setSelectedImage('img')}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.attributes?.img2.data.attributes.url
                }
                alt='second'
                onClick={(e) => setSelectedImage('img2')}
              />
            </div>
            <div className='mainImg'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.attributes[selectedImage].data.attributes.url
                }
                alt='mainImage'
              />
            </div>
          </div>
          <div className='right'>
            <h1>{data[0]?.attributes.title}</h1>
            <span className='price'>${data[0]?.attributes.price}</span>
            <p>
            {data[0]?.attributes.desc}
            </p>
            <div className='quantity'>
              <button
                onClick={(e) =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={(e) => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
              <button className='add' onClick={() => dispatch(addToCart(
                {
                  id: data[0].id,
                  title: data[0]?.attributes.title,
                  description: data[0]?.attributes.desc,
                  img:data[0]?.attributes?.img.data.attributes.url,
                  price: data[0]?.attributes.price,
                  quantity:1
                }
              
            ))}>
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            <div className='link'>
              <div className='item'>
                <FavoriteBorderIcon />
                <p>ADD TO WISH LIST</p>
              </div>
              <div className='item'>
                <StoreOutlinedIcon />
                <p>FIND STOCK IN STORE</p>
              </div>
            </div>
            <div className='overview'>
              <span className='title'>Overview</span>
              <hr />
              <span>- Lightweight, stretchy jersey fabric.</span>
              <span>- Sleeves are lined for comfort and smooth dressing.</span>
              <span>
                - Versatile jacket with a natural rounded shape from shoulders
                to sleeves.
              </span>
            </div>
            <div className='info'>
              <span>
                <h4>Product ID 1</h4>
                <h4>Fabric Details</h4>
                Shell: 58% Polyester, 42% Cotton/ Lining: 100% Polyester/ Pocket
                Lining: 100% Polyester
              </span>
              <span>
                <h4>Washing Instruction</h4>
                Hand wash cold, Dry clean
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
