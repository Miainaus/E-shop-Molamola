import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className='card'>
        <div className="image">
          { item?.attributes.isNew &&<span>New Season</span>}
          <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes.img.data.attributes.url} alt={ item?.attributes.title} className="mainImg" />
          <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes.img2.data.attributes.url} alt={ item?.attributes.title}   className="secondImg"/> 
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          {item?.attributes.oldPrice&&<h3 className="sale">${item?.attributes.oldPrice}</h3>}
          <h3>${ item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
