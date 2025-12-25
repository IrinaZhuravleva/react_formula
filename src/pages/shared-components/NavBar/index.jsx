import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import CartModal from './modals/CartModal';

import SessionContext from "contexts/SessionContext";
import MobileModalMenu from './modals/MobileModalMenu';

const NavBar = () => {
    const { userName, signOut } = useContext(SessionContext);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isMobileModalMenuOpen, setMobileModalMenuOpen] = useState(false);
    const [isCartModalOpen, setCartModalOpen] = useState(false);

  return (<>
    {isCartModalOpen && <CartModal setCartModalOpen={setCartModalOpen}/>}
    <nav className='flex items-center justify-between p-2 bg-emerald-800 text-white font-lato relative'>
      <div className='w-full max-w-5xl flex items-center justify-between mx-auto'>
        <Link to="/plants" className='no-underline'>
          <div className='flex items-center flex-col font-playfair'>
            <img src="src/images/capstone_logo_light.png" alt="Logo" className='w-8' />
            My plants
          </div>
        </Link>
        <div className="relative text-emerald-100 items-center hidden sm:flex">
          <button className="cursor-pointer mr-8" onClick={() => setPopupOpen(!isPopupOpen)}>
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
        {/* <div className="relative"> */}
          <button className="flex items-center cursor-pointer sm:hidden text-2xl">
            <i className="fa-solid fa-bars" onClick={() => setMobileModalMenuOpen(true)}></i>
          </button>
          {isMobileModalMenuOpen && <MobileModalMenu userName={userName} setMobileModalMenuOpen={setMobileModalMenuOpen} signOut={signOut} setCartModalOpen={setCartModalOpen}/>  }
        </div>
      {/* </div> */}
    </nav>
    
    </>
  );
}

export default NavBar;