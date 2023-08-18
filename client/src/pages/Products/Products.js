import "./products.scss";
import List from "../../components/List/List";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const cateId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [selectedSubCate, setSelectedSubCate] = useState([]);

  const { data, isLoading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${cateId}`
  );
  const handleCheck = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setSelectedSubCate(
      isChecked
        ? [...selectedSubCate, value]
        : selectedSubCate.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCate);
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {error
            ? "Something went wrong"
            : isLoading
            ? "Loading..."
            : data.map((item) => (
                <div className='inputItem' key={item.id}>
                  <input
                    type='checkbox'
                    id={item.id}
                    value={item.id}
                    onChange={handleCheck}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
        </div>
        <div className='filterItem'>
          <h2>Filter by Price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor='asc'>Price(Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor='desc'>Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='cateImg'
          src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80'
          alt='titleImg'
        />
        <List
          cateId={cateId}
          maxPrice={maxPrice}
          sort={sort}
          selectedSubCate={selectedSubCate}
        />
      </div>
    </div>
  );
};

export default Products;
