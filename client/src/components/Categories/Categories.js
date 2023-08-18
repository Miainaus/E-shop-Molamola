import "./categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            alt='coat'
          />
          <button >
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1572853566605-af9816b0a77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            alt='dress'
          />
          <button >
            <Link className="link" to="/products/1">Woman</Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            alt='show'
          />
          <button >
            <Link className="link" to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.unsplash.com/photo-1559697242-a465f2578a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                alt='jacket'
              />
              <button >
            <Link className="link" to="/products/2">Men</Link>
          </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                alt='shoes'
              />
              <button >
            <Link className="link" to="/products/2">Accessories</Link>
          </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1572251328450-19c5082bc582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt='poster'
          />
          <button >
            <Link className="link" to="/products/1">Designers</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
