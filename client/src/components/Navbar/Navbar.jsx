import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CountryIcon from "../../assets/imgs/au.png";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';
import "./navbar.scss";
import { useState } from 'react';
import Cart from "../Cart/Cart";

const DropDown = ({ items }) => {
  return (
    <div className='dropDown'>
      {items.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </div>
  );
};
const Navbar = () => {

  const products = useSelector((state) => state.cart.products);
  const quantity = () => {
    let total = 0;
    products.forEach((product) => total += product.quantity)
    return total;
  };
  const [open, setOpen] = useState(false);
  const women = ["New", "Tops", "Dresses", "Sweaters", "Denim", "Occasion"];
  const men = ["New", "Tops", "Jackets", "Sweaters", "Jeans", "Swimwear"];
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src={CountryIcon} alt='au' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>AUD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Women
            </Link>
            <DropDown items={women} />
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Men
            </Link>
            <DropDown items={men} />
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>
              Children
            </Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>
            MOLAMOLA
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>
          <div className='icons'>
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className='cartIcon' onClick={(e)=>setOpen(!open)}>
              <ShoppingCartIcon />
              <span>{quantity()}</span>
            </div>
          </div>
        </div>
      </div>
      {open &&<Cart />}
    </div>
  );
};

export default Navbar;
