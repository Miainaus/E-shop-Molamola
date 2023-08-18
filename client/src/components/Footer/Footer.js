import paymentImg from '../../assets/imgs/payment.png';
import './footer.scss';

const Footer = () => {
  return (
   <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div div className='item'>
          <h1>About</h1>
          <span>
            Molamola’s mission is to bring sustainable fashion to
            everyone.<br/><br/>Creating collections to suit our ever evolving fashion
            world, we stay true to creating the pieces we love and need.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            For all general enquiries please email hello@molamola.com.au
            <br/><br/>
            Please allow up to 24-48 hours for us to get back to you. 
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className="left">
          <span className="logo">Molamola</span>
          <div className="copyright">©Copyright 2023 All Rights Reserved</div>
        </div>
        <div className="right">
          <img src={paymentImg} alt="payment" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
