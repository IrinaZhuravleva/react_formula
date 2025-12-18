import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import CartModal from './modals/CartModal';

import SessionContext from "contexts/SessionContext";

const NavBar = () => {
    const { userName, signOut } = useContext(SessionContext);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isCartModalOpen, setCartModalOpen] = useState(false);

  return (<>
    {isCartModalOpen && <CartModal setCartModalOpen={setCartModalOpen}/>}
    <nav className='flex items-center justify-between p-2 bg-emerald-800 text-white font-lato relative'>
      <div className='w-full max-w-5xl flex items-center justify-between mx-auto'>
        <Link to="/plants" className='no-underline'>
          <div className='flex items-center flex-col font-playfair'>
            <img src="https://static-task-assets.react-formula.com/capstone_logo_light.png" alt="Logo" className='w-8' />
            My plants
          </div>
        </Link>
        <div className="relative text-emerald-100 items-center hidden sm:flex">
          <button className="cursor-pointer mr-8" onClick={() => setPopupOpen(true)}>
            <i className="fa-solid fa-user mr-1"></i>{userName}
          </button>
          <button className="cursor-pointer" onClick={() => setCartModalOpen(true)}>
            <i className="fa-solid fa-cart-arrow-down mr-1"></i>cart
          </button>
          {isPopupOpen && (
            <div className="absolute left-0 top-7 bg-white text-black border border-neutral-300 rounded-md shadow-lg p-1 w-30 z-10">
              <button
                className="w-full  text-emerald-600 hover:text-emerald-800 rounded-md p-2 transition-colors font-semibold cursor-pointer"
                onClick={signOut}
              >
                <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
              </button>
            </div>
          )}
        </div>
        <div className="sm:hidden ">
          <button className="cursor-pointer" >
            <i className="fa-solid fa-bars text-3xl text-emerald-100"></i>
          </button>
          <div className="absolute top-0 right-0 mt-2 w-40 bg-white text-black border border-neutral-300 rounded-md shadow-lg p-2 z-10">
            <div className="w-full flex items-center text-emerald-600 hover:text-emerald-800 rounded-md p-2 transition-colors font-semibold cursor-pointer mb-2">
              <i className="mr-2 fa-solid fa-user"></i>
                {userName}
          </div>
            <button
              className="w-full flex items-center text-emerald-600 hover:text-emerald-800 rounded-md p-2 transition-colors font-semibold cursor-pointer mb-2"
              onClick={() => {setPopupOpen(false); signOut();}}
            >
              <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
              Sign Out
            </button>
            <button
              className="w-full flex items-center text-emerald-600 hover:text-emerald-800 rounded-md p-2 transition-colors font-semibold cursor-pointer"
              onClick={() => {setCartModalOpen(true); setPopupOpen(false);}}
            >
              <i className="mr-2 fa-solid fa-cart-arrow-down"></i>
              Cart
            </button>
          </div>  
        </div>
      </div>
    </nav>
    
    </>
  );
}

export default NavBar;