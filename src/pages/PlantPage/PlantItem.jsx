import { useState } from "react";
import { Link } from 'react-router-dom';
import { POT_COLORS } from "../shared-components/interfaces";
import clsx from "clsx";


const PlantItem = ({plant}) => {
    const [imageIndex, setImageIndex] = useState(0);

    return <div className="mx-5 my-8">
            <Link to={`/plants/${plant.id}`}>
                    <img className="w-[280px] h-80 rounded-md" src={plant.images[imageIndex].src} />
                </Link>
                <div className="flex justify-between my-3">
                    <div className="text-xl font-playfair ☐ text-emerald-700">{plant.name}</div>
                    <div className="text-lg text-emerald-600">${plant.price} </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm text-slate-600">{plant.images[imageIndex].pot_color}</div>
                    <div className="flex" >
                        {plant.images?.map((image, idx) => (
                            <div 
                                onMouseEnter={() => setImageIndex(idx)}
                                key={idx}
                                value={POT_COLORS[image.pot_color]}
                                className={clsx("rounded-full w-5 h-5 ml-1 border border-slate-200", 
                                    POT_COLORS[image.pot_color], imageIndex === idx ? "ring-1 ring-blue-700 ring-offset-[1.5px]" : "" )
                                }>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
};

export default PlantItem;