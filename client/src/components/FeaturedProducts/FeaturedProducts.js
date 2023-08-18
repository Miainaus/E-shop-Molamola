import "./featuredProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, isLoading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type[0].toUpperCase()+type.slice(1)} Products</h1>
      </div>
      <div className='bottom'>
        {error
          ? "Error!"
          : isLoading
          ? "loading..."
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
