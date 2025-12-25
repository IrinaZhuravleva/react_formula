const MobileModalMenu = ({ userName, setMobileModalMenuOpen, signOut, setCartModalOpen }) => {

  return (
    <div className="sm:hidden fixed flex flex-col z-10 top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm font-lato">
        <div className="absolute pt-5 top-2 right-2 w-40 bg-white text-black border border-neutral-300 rounded-md shadow-lg p-2">
            <button className="absolute top-2 right-2 cursor-pointer" onClick={() => setMobileModalMenuOpen(false)}>
                <i className="fa-solid fa-circle-xmark text-3xl text-emerald-600"></i>
            </button>
            <div className="w-full flex items-center text-emerald-600 rounded-md p-2 transition-colors font-semibold mb-2">
              <i className="mr-2 fa-solid fa-user"></i>
                {userName}
            </div>
            <button
              className="w-full flex items-center text-emerald-600 hover:text-emerald-800 rounded-md p-2 transition-colors font-semibold cursor-pointer mb-2"
              onClick={() => {setMobileModalMenuOpen(false); signOut();}}
            >
              <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
              Sign Out
            </button>
            <button
              className="w-full flex items-center text-emerald-600 hover:text-emerald-800 rounded-md p-2 transition-colors font-semibold cursor-pointer"
              onClick={() => {setCartModalOpen(true); setMobileModalMenuOpen(false);}}
            >
              <i className="mr-2 fa-solid fa-cart-arrow-down"></i>
              Cart
            </button>
        </div>
        </div>
  );
};

export default MobileModalMenu;