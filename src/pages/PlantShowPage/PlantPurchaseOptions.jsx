import clsx from "clsx";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import * as cartServices from "services/cart";
import { POT_COLORS } from "../shared-components/interfaces";

const PlantPurchaseOptions = ( props ) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { plant, onColorChange } = props;
    const colors = plant.images.map(image => image.pot_color);
    const { plantId } = useParams();
    console.log("useParams", plantId);


    return <div className="my-10">
            <div className="text-emerald-700">
                <i className="text-2xl fa-solid fa-brush"></i>
                <div className="text-lg">Pot Colors</div>
                <div className="flex mt-2 "> 
                    {colors.map((color, index) => (
                        <div className="flex flex-col mt-2 mr-5 justify-center items-center" key={index}>
                            <div key={index}
                                onMouseEnter={() => {setImageIndex(index), onColorChange(plant.images[index].src)}}
                                className={clsx("rounded-full w-8 h-8 ml-1 border border-slate-200", 
                                            POT_COLORS[color], 
                                            imageIndex === index ? "ring-1 ring-blue-500 ring-offset-2" : "" )}>
                                            
                            </div>
                            <div>{color}</div>
                        </div>
                    ))}
                </div>
            </div>
            <form className="flex mt-6" 
                    onSubmit={async(e) => {
                        e.preventDefault();
                        if (quantity < 1) return;
                        setIsLoading(true);
                        console.log("Adding to cart:", {id: plantId, quantity, pot_color: colors[imageIndex]});
                        await cartServices.postPlantById({id: plantId, quantity, pot_color: colors[imageIndex]});
                        setIsLoading(false);
                    }}>
                <div className="flex items-center space-x-4 text-slate-600 border border-slate-300 w-max px-4 py-2 rounded-3xl">
                    <button type="button" className={clsx("cursor-pointer", quantity < 1 ? "text-slate-300" : "")} onClick={() => quantity === 1 ? setQuantity(quantity - 1) : setQuantity(0)}>-</button>
                    <span className="flex w-3 items-center justify-center" value={quantity}>{quantity}</span>
                    <button type="button" className="cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div>
                    <button type="submit" disabled={quantity < 1} className="ml-3 px-15 py-2 rounded-3xl bg-emerald-600 text-white hover:bg-emerald-700 
                        active:bg-emerald-800 transition-colors duration-200 border border-emerald-600 hover:border-emerald-700 cursor-pointer">
                        {isLoading ? <i className="fa-solid fa-spinner fa-spin mr-1"></i> : <i className="fa-solid fa-cart-arrow-down mr-1"></i>}
                        Add to Cart
                    </button>
                </div>
            </form>
        </div>
    };

export default PlantPurchaseOptions;