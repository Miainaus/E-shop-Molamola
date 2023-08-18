import "./list.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ cateId, maxPrice, sort, selectedSubCate }) => {
  const selectedId = selectedSubCate.map(
    (item) => `&[filters][sub_categories][id]=${item}`
  );
  const url = `/products?populate=*&[filters][categories][id]=${cateId}${selectedId.join(
    ""
  )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;
  const { data, isLoading, error } = useFetch(url);
  return (
    <div className='list'>
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading..."
        : data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
