import { RemoveScroll } from 'react-remove-scroll';
import SessionContext from 'contexts/SessionContext';
import { useState, useContext, useEffect } from 'react';
import * as cartServices from 'services/cart';
import CartItem from './CartItem';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CartModal = (props ) => {
    const { userName } = useContext(SessionContext);
    const { setCartModalOpen } = props;
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        (async() => {
            setLoading(true);
            const response = await cartServices.getCartPlants();
            const data = await response.json();
            setCartItems(data);
            setLoading(false);
        })()
    }, [])

    const refreshCartItems = async (id) => {
        setLoading(true);
        await cartServices.removePlantById({ id });
        const response = await cartServices.getCartPlants();
        const data = await response.json();
        setCartItems(data);
        setLoading(false);
    }

    return <RemoveScroll>
            <div className="fixed flex flex-col z-10 top-0 left-0 items-end w-full h-full bg-black/30 backdrop-blur-sm font-lato">
                <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }} className="w-full h-screen max-w-xl bg-white flex flex-col justify-between relative">
                    <div className='flex-1 overflow-y-auto'>
                        <div className="absolute w-full text-3xl text-center text-white shadow-md py-7 ☐ bg-emerald-800 font-playfair">
                            {userName}'s Cart
                        </div>
                        <i className="absolute right-5 top-[13px] text-[25px] text-emerald-200 fa-solid fa-circle-xmark cursor-pointer"
                        onClick={() => setCartModalOpen(false)}></i>
                
                {loading ? (
                        <div className="w-full h-full flex items-center justify-center mt-10">
                            <i className="fa-solid fa-spinner fa-spin text-3xl text-green-900 block"></i>
                        </div>
                    ) : (
                        <div className="mt-25 p-4">
                            {cartItems.length < 1 ? 
                            <div className="text-center text-green-900">Your cart is empty.</div> 
                            : cartItems.map((item, index) => <CartItem key={index} item={item} index={index} refreshCartItems={refreshCartItems}/>)}
                        </div>
                    )}
                    </div>
                    <div className="flex flex-col justify-center border-t border-slate-200 px-7">
                        <div className="flex justify-between text-slate-500 text-md">
                            <div>Items:
                                {cartItems.reduce((total, item) => total + (item.quantity ?? 1), 0)}
                            </div>
                            <div>
                                Subtotal: $ 
                                {cartItems
                                .reduce((total, item) => total + item.price_per_unit * (item.quantity ?? 1), 0)
                                .toFixed(2)}
                            </div>
                        </div>
                        <button
                            className="my-5 w-full px-6 py-3 mb-10 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-emerald-800 transition-colors font-medium"
                            onClick={() => alert('This is a demo site. Checkout is not available.')}
                        >
                            Checkout 
                            <i className="fa-solid fa-arrow-right text-white ml-4"></i>
                        </button>
                    </div>
                </motion.div>
            </div>
                
        </RemoveScroll>
};

export default CartModal;